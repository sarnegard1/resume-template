(ns sarah-website.home
  (:require [sarah-website.recos :as recos]
            [sarah-website.work :as work]
            [sarah-website.footer :as footer]
            [sarah-website.nav :as nav]))

(def about-me
  [:div.container-sml.text-center
   [:div.col-12
    [:h1.heading "I’m driven by discovering insights that lead to meaningful improvements in people’s lives"]]])

(def specialties
  [:div.feature3
   [:div.container-lrg
    [:h2.center "What I specialize in"]
    [:div.flex
     [:div.col-4
      [:h3.subheading
       "Research and experiment design"]
      [:p.paragraph
       "Whether it's discovering pains or testing product market fit, I prefer to test hypotheses and examine evidence rather than argue about assumptions."]]
     [:div.col-4
      [:h3.subheading
       "Product and service design"]
      [:p.paragraph
       "Rapid ideation, prototyping, and testing that involves the team in the process of reaching a solution that delights our customers."]]
     [:div.col-4
      [:h3.subheading
       "Collaboration and facilitation"]
      [:p.paragraph
       "I'm passionate about bringing the team on the journey from empathy to solution, rather than work in a silo. It's my mission to improve the user centered design skills."]]]]])

(def project-info
  [{:project-title "Centro Business Advising"
    :project-desc  "I worked with Centro Community Partners to design a business advising app based on their business advising. I worked on user research, scope definition and interaction design."
    :project-link  "http://saraharnegard.com/centro.html"}
   {:project-title "Scholastic BookQuest"
    :project-desc  " I conducted user research and competitive research to design a reading engagement app for children"
    :project-link  "http://saraharnegard.com/BookQuest.html"}
   {:project-title "BetaBrand E-commerce checkout"
    :project-desc  "Information architecture for product display and purchasing flows"
    :project-link  "http://saraharnegard.com/betabrand.html"}])

(defn more-projects [{:keys [project-title project-desc project-link]}]
  [:div {:key project-title}
   [:h4 project-title]
   [:p  project-desc]
   [:a.hvr-grow
    {:href project-link}
    "Read more"]])

(defn index []
  [:div
   [:header.header nav/hiccup about-me]
   specialties
   (work/works)
   (recos/content)
   footer/hiccup])
