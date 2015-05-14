(ns reframe_test.handlers
  (:require [reframe_test.db :refer [default-value valid-schema?]] 
            [reframe_test.huet :as h]
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

(register-handler
  :act-on-keypress
  standard-middlewares
  (fn [db [cur-zipper keycode]]
    ; Temporarily add 32 until I fix the keypress
    ; problem in views
   (let [keychar (char (+ 32 keycode))
         modified-z (h/act-on cur-zipper keychar)] 
     (println "keycode " keycode)
     (println "keychar " keychar)
     (println "db " db)
     (println "cur-zipper " @cur-zipper)
     (println "modified-z: " modified-z)
     (assoc db :zipper modified-z)
     ; Return unmodified db temporarily
    )))

(register-handler                 ;; handlers changes the footer filter
  :append-node
  (fn                             ;; handler
    [db _]
    (let [zipper (:zipper db)]
      (println "db is " db)
      (assoc db :zipper (h/append zipper)))))

