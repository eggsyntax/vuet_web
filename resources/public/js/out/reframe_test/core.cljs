(ns reframe_test.core
  (:require-macros [secretary.core :refer [defroute]])
  (:require [cljsjs.react :as react]
            [goog.events :as events]
            [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [secretary.core :as secretary]
            [reframe_test.handlers]          ;; appears unused, but you need it here, to force loading.
            [reframe_test.subs]              ;; appears unused, but you need it here, to force loading.
            [reframe_test.views])
  (:import [goog History]
           [goog.history EventType]))

;; -- Routing -----------------------------------------------------------------
;; See example routing in the todomvc sample:
;; https://github.com/Day8/re-frame/blob/develop/examples/todomvc/src/todomvc/core.cljs#L18-L25


(defn mount-root
  []
  (reagent/render [reframe_test.views/reframe_test-app] (.getElementById js/document "app")))

;; -- Initialize app ----------------------------------------------------------
;;
;; See these notes:
;; https://github.com/Day8/re-frame/wiki/Bootstrap-An-Application
;;
(defn init! []
  (dispatch-sync [:initialise-db])
  (mount-root))
