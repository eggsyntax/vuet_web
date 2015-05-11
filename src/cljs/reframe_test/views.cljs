(ns reframe_test.views
  (:require [reframe_test.huet :as h] 
            [re-frame.core :refer [subscribe dispatch]]))

(defn render-zipper
  "Render a zipper on the page as text"
  [zipper]
  (fn [] 
    [:div "Zipper: " (str @zipper)]))

(defn old-on-keypress [keypress]
  (println (char (.-keyCode keypress))))

(defn dispatching-fn-on-keypress [keypress]
  (println "got it!" (char (.-keyCode keypress))) 
  ; The handler fn doesn't actually get called with this approach...
  (dispatch [:act-on-keypress (char (.-keyCode keypress))]))

(defn main-panel    ;; the top level of our app
  []
  ; This works but violates re-frame?   :/
  (.addEventListener js/document "keypress" on-keypress)
  (let [name (subscribe [:name])
        zipper (subscribe [:zipper])]
    (fn []
      [:div 
       ; TODO I want the following, but how do I send event to the handler?
       {:on-change #(dispatch [:act-on-keypress])}

       ; It works fine (or at least the handler is called) if I use
       ; on-click rather than on-keypress:
       ;{:on-click #(dispatch [:act-on-keypress])}

       ; From documentation:
       ; (dispatch [event-id  event params])
       ; call that handler with two parameters: 
       ;    (1) the current value in app-db and (2) the event vector

       [render-zipper zipper]
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

