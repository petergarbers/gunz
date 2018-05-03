(ns gunmoo.reagent
  (:require [reagent.core :as r]
            [gunmoo.atom :as gatom]))


(defn- with-ratom [value f & args]
  (let [a (r/atom value)]
    (apply f a args)
    a))


(defn sync-r
  [query & [xform]]
  (with-ratom nil gatom/sync-r query xform))

(defn sync-list
  [query & [xform]]
  (with-ratom nil gatom/sync-list query xform))

(defn sync-rw
  [ref & [value]]
  (with-ratom value gatom/sync-rw ref))
