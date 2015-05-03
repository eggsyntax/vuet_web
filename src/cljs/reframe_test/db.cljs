(ns reframe_test.db
  (:require
    [reframe_test.huet :as h]
    [schema.core :as s]))


;; -- Prismatic Schema  -------------------------------------------------------
;; As exactly as possible, describe the correct shape of app-db.
;; Add a lot of helpful comments. This will be an important resource
;; for anyone looking at the app for the first time.

;TODO um how do schemas work again? Add the zipper yo
#_(def schema
  {:name     s/Str
   })


;TODO always valid, woohoo!
(defn valid-schema? [db]
  true)

#_(defn valid-schema?
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

