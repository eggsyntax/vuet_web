(ns reframe_test.views
  (:require [reframe_test.huet :as h] 
            [re-frame.core :refer [subscribe dispatch]]))

(defn text-zipper
  "Render a zipper on the page as text"
  []
  (let [zipper (subscribe [:zipper])]
    (fn []
      [:div "Zipper: " (str @zipper)])))

(defn main-panel    ;; the top level of our app
  []
  (let [name (subscribe [:name])]
    (fn []
      [:div 
       [text-zipper]
       [:div
        [:button {:class "button-class" 
                  :on-click #(dispatch [:append-node])}
         "append" 
         ]]])))


(defn reframe_test-app
  []
  (let [ready?  (subscribe [:initialised?])]
    (fn []
      (if-not @ready?                ;; data is loaded?
         [:div "Initialising ..."]   ;; tell them we are working on it
         [main-panel]))))            ;; all good, render the app

