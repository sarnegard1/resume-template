(ns sarah-website.resume
  (:require [sarah-website.recos :as recos]
            [sarah-website.work :as work]
            [sarah-website.footer :as footer]
            [sarah-website.nav :as nav]))

(defn contact-info [{:keys [address phone email]}]
  [:div.contact
    [:p.address address]
    [:p.phone phone]
    [:p
      [:a {:href ["mailto:" email "?Subject=Hello%20Sarah"]}  email]]])

(def my-contact
  {:address "3809 South Congress Ave, Austin, TX 78704"
   :phone "626-426-7150"
   :email "sarah.arnegard@gmail.com"})

(defn job [{:keys [title company location dates tagline bullets]}]
  [:div
    [:h3
      [:span.company company ", "]
      [:span.title title]
      [:span.dates dates]]

    [:p.tagline tagline]
    [:ul.job-list (for [b bullets]
                    [:li {:style {:margin-bottom "2px"}} b])]])

(def my-jobs
  [{:title "Customer Researcher"
    :company "Tyro Payments"
    :location "Sydney, Australia"
    :dates "FEB 2016 - APRIL 2017"
    :tagline "Product Designer and Customer Researcher for Tyro Smart Growth Funding"
    :bullets ["Converted business assumptions into testable hypotheses and designed experiments with crystal clear success metrics"
              "Rapidly invalidated concepts to reduce wasted engineering effort and bring products to market faster"
              "Prioritized features based on customer and business value while weighing engineering difficulty"
              "Designed research studies on beta versions of the product and presented results to stakeholders"
              "Interviewed 40+ customers to discover how we can best deliver a compelling product"
              "Consolidated interview data into 6 personas to help Designers, PMs, Engineers, and Marketing better understand user behavior"
              "Facilitated design workshops with engineering teams, PMs, and executive stakeholders to swiftly explore feasible solutions"
              "Conducted internal research to increase the value the design team provides the company"]}
   {:title  "Product Designer"
    :company "Sookasa Inc"
    :location "San Mateo, CA"
    :dates "DEC 2014 - JAN 2016"
    :tagline "Responsible for all research and product design activities"
    :bullets ["Devised new sharing flow, increasing sharing rate in user tests from 20% to 66%"
              "Designed integration experience around Google Drive, web, and desktop apps increasing the addressable market by 44%"
              "Redesigned the UI and UX of web application including permissions, device locking, user settings and profiles, contact lists and other core functionality"
              "Spearheaded the design of the company's new risk detection product"
              "Conducted user research and created prototypes, mock-ups, and spec documents"
              "Used my research to craft a new UI style guide and built bootstrap templates for the engineering team"]}
   {:title  "UX Design Consultant"
    :company "Fetchh.io"
    :location "Sydney, Australia"
    :dates "MAR 2015 - JAN 2016"
    :tagline "Advised the startup on product and UX design best practices"
    :bullets ["Planned user flow and product roadmap of the app with the CTO"
              "Monitored Google Analytics to validate user flow hypotheses"]}
   {:title  "UX Expert in Residence"
    :company "General Assembly"
    :location "Sydney, Australia"
    :dates "NOV 2015 - JAN 2016"
    :tagline "Mentored students in design and research methods"}
   {:title  "UX Contractor"
    :company "Workboard Inc"
    :location "Redwood City, CA"
    :dates "OCT 2014 - NOV 2014"
    :tagline "Created personas based on research about customer segments "}])

(defn my-skills [skills]
  [:ul.skill-list (for [s skills]
                    [:li s])])

(defn recs [{:keys [quote name title company]}]
  [:div.quote
    [:q quote]
    [:p.recommender "" name ", " company " (" title ")"]])

(def my-recs
  [{:quote "She showed great leadership skills, managing the research for many concurrent streams of research around our customers while truly caring about delivering meaningful, helpful solutions."
    :name "James Taylor"
    :title "Product Design Lead"
    :company "Tyro"}
   {:quote "The breadth of her skills and ability to work both independently and collaboratively make her a huge asset on any team."
    :name "Dan Manian"
    :title "VP of Product"
    :company "Sookasa"}])


(defn resume-hiccup []
  [:div.page
    [:div.header
      [:div.left-column
        [:h1 "Sarah Arnegard"]
        [:h2 "UX and Customer Research Specialist"]
        [:p.summary "Reduce risk and create winning products by truly understanding your customers"]]
      [:div.right-column
        [contact-info my-contact]]]
    [:div.left-column
      [:div.experience
        [:h2 "Experience"]
        (map job my-jobs)]]
    [:div.right-column
      [:div.skills
        [:h2 "Skills"]
        [my-skills
          ["Conducting research studies"
            "Experiment design"
            "Uncovering user needs"
            "Requirements gathering"
            "Usability testing"
            "Personas and user journeys"
            "Analyzing user research"
            "Facilitating UX workshops"
            "Jobs-to-be-done framework"
            "Rapid prototyping and ideation"]]]
      [:div.recommendations
        [:h2.reco "Recommendations"]
        (map recs my-recs)]
      [:div.education
        [:h2.edu "Education"]
        [:p "General Assembly SF, UX Design Immersive program"]
        [:p "University of Washington, BFA in Digital Media"]]]])


(defn content []
  [:div
    [:header.header nav/hiccup]
    (resume-hiccup)
    footer/hiccup])
