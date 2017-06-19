(ns sarah-website.work)

(def project-info
  [{:project-title "Centro Business Advising"
    :project-desc  "I worked with Centro Community Partners to design a business advising app based on their business advising. I worked on user research, scope definition and interaction design."
    :project-link  "centro.html"}
   {:project-title "Scholastic BookQuest"
    :project-desc  " I conducted user research and competitive research to design a reading engagement app for children"
    :project-link  "bookquest.html"}
   {:project-title "BetaBrand E-commerce checkout"
    :project-desc  "Information architecture for product display and purchasing flows"
    :project-link  "betabrand.html"}])

(defn more-projects [{:keys [project-title project-desc project-link]}]
  [:div {:key project-title}
   [:h4 project-title]
   [:p  project-desc]
   [:a.hvr-grow
    {:href project-link}
    "Read more"]])

(defn works []
  [:div#work
   [:div.feature4
    [:h2.center "What I've worked on"]
    [:div.container-lrg.flex
     [:div.col-6.flex
      [:div.androidiphone.sidedevices
       [:div.phones
        [:img {:src "img/phone_tyro.png", :alt ""}]]]]
     [:div.col-1]
     [:div.col-5.centervertical
      [:h3.subheading "Tyro Payments"]
      [:p.paragraph
       "I was hired as a generalist Product Designer to work on "
       [:a {:href "https://tyro.com/business-loans/"}"Tyro Smart Growth Funding"]
       ", the first business lending product that allows customers to accept loans on a mobile platform, eliminating the need for paper applications and phone calls."]
      [:p.paragraph
       "Later on I specialized in Customer Research, working on discovery research, experiment design, and strategy for the loans product. "
       [:a {:href "/resume.html"}
        "View my complete resume"]]]]]
   [:div.feature4
    [:div.container-lrg.flex
     [:div.col-5.centervertical
      [:h3.subheading "Sookasa Inc"]
      [:p.paragraph
       "As the only full time designer for "
       [:a {:href "https://www.sookasa.com/"} "Sookasa"]
       ", I worked on a wide range of projects including signup optimization, a full "
       [:a {:href "sookasa.html"} "UI redesign"]
       ", and a new threat scanning product"]]
     [:div.col-1]
     [:div.col-6
      [:div.sidedevices
       [:div.computerwrapper
        [:img.mask-img {:src "img/mac_book.png"}]]]]]]
   [:div.feature2
    [:div.container-lrg
     [:div.flex
      (into
        [:div.col-8
         [:h3.center "Additional projects"]]
        (map more-projects project-info))]]
    [:div.container-lrg.flex]]])
