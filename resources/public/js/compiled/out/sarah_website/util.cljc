(ns sarah-website.util
  (:require [sarah-website.footer :as footer]
            [sarah-website.nav :as nav]))

(defn image
  ([source] (image source ""))
  ([source alt]
   [:img {:src source :alt alt}]))

(defn wrap-page [page-content]
  [:div
   [:header.header nav/hiccup]
   page-content
   footer/hiccup])
