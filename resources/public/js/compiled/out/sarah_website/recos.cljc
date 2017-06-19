(ns sarah-website.recos)

(def recos-data
       [{:quote "She showed great leadership skills, managing the research for many concurrent streams of research around our customers while truly caring about delivering meaningful, helpful solutions."
         :name "James Taylor"
         :title "Product Design Lead"
         :company "Tyro"}
        {:quote "The breadth of her skills and ability to work both independently and collaboratively make her a huge asset on any team."
         :name "Dan Manian"
         :title "VP of Product"
         :company "Sookasa"}
        {:quote "After Sarah joined the team, she hit the ground running. Sarah was an amazing asset for us, helping us with not just prototypes and development - but with higher-level thinking about our strategy and overall usability."
         :name "Will Jensen"
         :title "CEO / Cofounder"
         :company "Fetchh.io"}])

(defn recos [{:keys [quote name title company]}]
 [:div.col-4
   [:div.testimonial
    [:div
     [:div
      [:b name]
      [:br]
      [:span
        title " at " company]]]
    [:div.testimonial-content
     [:q.paragraph quote]]]])

(defn content []
    [:div.feature3
      [:div.container-lrg
        [:h2.center "What people say about me"]
        (into [:div.flex]
              (map recos recos-data))]])

;; sarah-resume.recos/hiccup
