(ns gunmoo.common
  (:require [cljsjs.gun :as gun]))


(defn connect
  [db-name]
  (-> (js/Gun.)
      (get db-name)))
