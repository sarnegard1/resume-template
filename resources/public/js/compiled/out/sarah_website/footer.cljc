(ns sarah-website.footer)

(def hiccup
  [:div.footer
    [:div.container-sml
     [:div.col-12.text-center
      [:div
       [:p "Get in touch"]
       [:a.nav-link
        {:href "https://www.linkedin.com/in/saraharnegard/"}
        "LinkedIn  "]
       [:a.nav-link
        {:href "mailto:sarah.arnegard@gmail.com"}
        "Email  "]
       [:a.nav-link
        {:href "https://blog.saraharnegard.com/"}
        "Blog  "]]
      [:br]
      [:div
       [:span
        "© 2017 Sarah Arnegard  "]]]]])
