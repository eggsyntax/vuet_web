(ns reframe_test.views
  (:require [reframe_test.huet :as h] 
            [re-frame.core :refer [subscribe dispatch]]))

(defn text-zipper
  "Render a zipper on the page as text"
  []
  (let [zipper (subscribe [:zipper])]
    (fn []
      [:div "Zipper: " (str @zipper)])))

(defn on-keypress [something keypress]
  (let [_ (println "type " (type (.-keyCode keypress))) 
        keychar (char (.-keyCode keypress))] 
    (println "keychar " keychar)
    (println "something " something)
    (println "str keypress " (str keypress))
    ;(println (h/act-on keychar))
    ))

(defn main-panel    ;; the top level of our app
  []
  ; This works but violates re-frame:   :/
  (.addEventListener js/document "keypress" on-keypress)
  (let [name (subscribe [:name])
        zipper (subscribe [:zipper])]
    (fn []
      (let [_ (.addEventListener js/document 
                                 "keypress" 
                                 (partial on-keypress @zipper))]
        [:div [text-zipper] 
         [:div [:button {:class "button-class" 
                         :on-click #(dispatch [:append-node])} 
                "append" ]]]))))

(defn reframe_test-app
  []
  (let [ready?  (subscribe [:initialised?])]
    (fn []
      (if-not @ready?                ;; data is loaded?
         [:div "Initialising ..."]   ;; tell them we are working on it
         [main-panel]))))            ;; all good, render the app

