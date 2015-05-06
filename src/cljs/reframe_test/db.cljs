(ns reframe_test.db
  (:require
    [reframe_test.huet :as h]
    [schema.core :as s]))


;; -- Prismatic Schema  -------------------------------------------------------
;; As exactly as possible, describe the correct shape of app-db.
;; Add a lot of helpful comments. This will be an important resource
;; for anyone looking at the app for the first time.

; TODO as far as I can tell, schema isn't actually being validated -- eg
; if I change :zipper to be s/Str, I'm not getting an error.
(def schema
  {:name     s/Str
   :zipper   []
   })

(defn valid-schema?
  "validate given db, writing any problems to console.error"
  [db]
  (let [res (s/check schema db)]
    (if (some? res)
      (.error js/console (str "schema problem: " res)))))


;; -- Default Value  ----------------------------------------------------------
;; The initial value loaded into app-db
;;
(def default-value
  {:name "reframe"
   :zipper (h/new-zipper)
   })

