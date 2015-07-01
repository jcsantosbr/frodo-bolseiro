(ns frodo-webapi.app
  (:require [frodo-webapi.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
