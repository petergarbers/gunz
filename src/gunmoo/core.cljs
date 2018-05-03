(ns gunmoo.core
  (:refer-clojure
   :exclude [get-in set! reset! conj! swap! dissoc! deref parents key take take-last])
  (:require [reagent.core :as r]
            [cljsjs.gun :as gun]))

;; -------------------------
;; Views

(def database (atom nil))

(defn home-page []
  [:div [:h2 "Welcome to Reagent"]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))



(defn unref
  [ref]
  (-> ref (.val (fn [node]
                  (prn "bob" node)))))

;; gun.get('person/bob').val(function(node){
;;                                          console.log('Bob!', node);
;;                                          });

(def aaa "13223")


(defn connect
  [db-name]
  (let [db (-> (js/Gun. #js {:init "true"}) (.get db-name))]
    db))

(defn reset!
  [ref moo]
  (-> ref (.set moo)))
