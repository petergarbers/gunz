(ns ^:figwheel-no-load gunmoo.dev
  (:require
    [gunmoo.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
