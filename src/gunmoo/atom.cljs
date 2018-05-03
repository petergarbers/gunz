(ns gunmoo.atom)


(def ^:dynamic *local-sync*)

(def ^:dynamic *remote-sync*)

(declare unlink!)

(defprotocol IUnlink
  (-unlink [_] "Remove any sync between local and firebase state"))

(deftype GunAtom [ref cache ->update]
  ISwap
  (-swap! [_ f]
    (->update f))
  (-swap! [_ f a]
    (->update f a))
  (-swap! [_ f a b]
    (->update f a b))
  (-swap! [_ f a b xs]
    (apply ->update f a b xs))

  IDeref
  (-deref [_] (-deref cache))

  IUnlink
  (-unlink [_] (unlink! cache))

  IWatchable
  (-add-watch [_ k f]
    (-add-watch cache k f))
  (-remove-watch [_ k]
    (-remove-watch cache k)))

(defn sync-r
  "Set up one-way sync of atom tracking ref changes. Useful for queries."
  [atom query & [xform]]
  (prn "sync r")
  #_(<-ref query atom (reset-atom atom xform))
  atom)

(defn sync-list
  "Set up one-way sync of atom tracking ordered list of elements. Useful for queries."
  [atom query & [xform]]
  (prn "sync list")
  #_(attach-unsub atom (m/listen-list query #(reset! atom (if xform (xform %) %))))
  atom)

(defn sync-rw
  "Set up two-way data sync between ref and atom."
  [atom ref]
  #_(init-ref! ref @atom #(reset! atom %) #(= % @atom))
  (prn "sync rw")
  #_(<-ref ref atom (reset-atom atom))
  #_(->ref ref atom (reset-ref ref))
  atom)


(defn- attach-unsub [atom unsub]
  (alter-meta! atom update-in [:matchbox-unsubs] #(conj % unsub)))

(defn <-ref
  "Track changes in ref back to atom, via update function f."
  [ref atom f]
  #_(attach-unsub atom (m/listen-to ref :value f)))


(defn- reset-atom
  "Generate ref listener to sync values back to atom"
  [atom & [xform]]
  (fn [[_ val]]
    (when-not (= atom *local-sync*)
      (binding [*remote-sync* atom]
        (reset! atom (if xform (xform val) val))))))

(defn atom-wrapper
  "Build atom-proxy with given sync strategies."
  [atom ref ->update <-update]
  (<-ref ref atom <-update)
  (GunAtom. ref atom ->update))


(defn wrap-atom
  "Build atom-proxy which synchronises with ref via brute force."
  [atom ref]
  #_(init-ref! ref @atom #(reset! atom %) #(= % @atom))
  #_(atom-wrapper atom ref
                (swap-ref-local ref atom)
                (reset-atom atom)))
