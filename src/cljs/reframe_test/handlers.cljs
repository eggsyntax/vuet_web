(ns reframe_test.handlers
  (:require [reframe_test.db :refer [default-value valid-schema?]]
            [re-frame.core :refer [register-handler debug after path trim-v]]))


;; -- Middleware --------------------------------------------------------------
;; See:  https://github.com/Day8/re-frame/wiki/Debugging-Event-Handlers
;;
(def standard-middlewares
  [trim-v
   ;; (if goog.DEBUG log-ex)    ;; will be available in v0.3.0
   (when goog.DEBUG [debug (after valid-schema?)])])

;; -- Helpers -----------------------------------------------------------------


;; -- Handlers ----------------------------------------------------------------

(register-handler                 ;; disptached to on app startup
  :initialise-db                  ;; event id being handled
  (fn  [_ _]                      ;; the handler
    default-value))               ;; all hail the new state


(register-handler                 ;; handlers changes the footer filter
  :set-name                       ;; event-id
  [standard-middlewares (path :name)]
  (fn                             ;; handler
    [db [new-name]]               ;; because of trim-v, not [_ new-name]
    new-name))

;TODO I have no idea what I'm doing here
#_(register-handler
  :show-zipper
  [standard-middlewares (path :zipper)]
  (fn
    [_ _]
    (println "called :show-zipper handler")

    ))

;TODO :key-press handler
