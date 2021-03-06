(ns frodo-webapi.core
  (:require [frodo-webapi.handler :refer [app init destroy]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.reload :as reload]
            [frodo-webapi.db.migrations :as migrations]
            [taoensso.timbre :as timbre]
            [environ.core :refer [env]])
  (:gen-class))

(defonce server (atom nil))

(defn parse-port [[port]]
  (Integer/parseInt (get (System/getenv) "OPENSHIFT_CLOJURE_HTTP_PORT" "3000")))

(defn get-ip []
  (get (System/getenv) "OPENSHIFT_CLOJURE_HTTP_IP" "0.0.0.0"))

(defn start-server [port]
  (init)
  (reset! server
          (run-jetty
            (if (env :dev) (reload/wrap-reload #'app) app)
            {:port port
             :host (get-ip)
             :join? false})))

(defn stop-server []
  (when @server
    (destroy)
    (.stop @server)
    (reset! server nil)))

(defn start-app [args]
  (let [port (parse-port args)]
    (.addShutdownHook (Runtime/getRuntime) (Thread. stop-server))
    (timbre/info "server is starting on port " port)
    (start-server port)))

(defn -main [& args]
  (cond
    (some #{"migrate" "rollback"} args) (migrations/migrate args)
    :else (start-app args)))
  
