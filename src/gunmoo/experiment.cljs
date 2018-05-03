(ns gunmoo.experiment
  (:require [cljsjs.gun :as gun]))


(def db (js/Gun.))
(def people (.. db (get "people")))
(def alice (-> db (.get "person/alice") (.put #js {:name "alice" :age "22"})))
(def peter (-> db (.get "person/alice") (.put #js {:name "peter" :age "42"})))
;;(-> people (.set alice))
(def company (-> db (.get "startup/hype")
                 (.put #js {:name "hype"
                            :profitable false
                            :address #js  {:street "123 moo"
                                      :city "denver"
                                      :state "CA"
                                      :country "USA"}})))



(defn vv
  [db]
  (-> db (.map (fn [node]
                 (js/console.log "Alice: " node)))))


(def aa (-> (js/Gun.) (.get "atom")))

(-> aa (.put #js {:name "hype"
                  :profitable false
                  :address #js  {:street "123 moo"
                                 :city "denver"
                                 :state "CA"
                                 :country "USA"}}))
