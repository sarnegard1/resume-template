(ns sarah-website.bookquest
  (:require [sarah-website.recos :as recos]
            [sarah-website.work :as work]
            [sarah-website.footer :as footer]
            [sarah-website.nav :as nav]
            [sarah-website.util :as u]))

(def case-study
  [:div.container-lrg
   [:h1.center "BookQuest"]

   [:section
    [:div.flex
     [:div.col-8
      [:p
       "For this project, our team was tasked with creating a reading engagement program for Scholastic. Our first course of action was to research what goals Scholastic would seek to accomplish through this program. We found that Scholastic's reputation as an educational resource was in decline among students and teachers. The question then became, how can we build an application that regains Scholastic's reputation and increase children's interest in reading? Our solution was to create a reading incentive product that is engaging and educational for children. We believe this would :"]
      [:ul
       [:li "Solve parents' need to encourage children to read"]
       [:li "Prove commitment to education"]
       [:li "Foster excitement for Scholastic titles"]]]]]

   [:section
    [:div.flex
     [:div.col-8
      [:h3 "Challenge"]
      [:p "We were tasked with creating a reading engagement product for Scholastic."]
      [:div [:h3 "Duration"] [:p "2 Weeks"]]
      [:div
       [:h3 "Client"]
       [:p]
       "Scholastic was the assigned client for the student project during the User"
       " Experience Design Immersive at General Assembly, San Francisco 2014 "]
      [:div
       [:h3 "My Role"]
       [:p "User research, persona development, feature development, scope definition, project management, sketching and ideation, branding, presentation deck"]]]]]

   [:section
    [:h2.section-title.center "Business Research"]
    [:div.flex
     [:div.col-8

      (u/image "img/schol/comp_analysis_chart.png" "Competitive Analysis Diagram")
      [:h3 "Reading program competitive landscape"]
      [:ul
       [:li
        "Few reading incentive programs combine assessments,  web portal and prizes/ parent added prizes."]
       [:li
        "Assessments, if any, are in a traditional test format and focus on remembering trivia from the book\n                                "]
       [:li "Existing reading sites difficult to navigate"]]]]
    [:div.flex
     [:div.col-4

      (u/image "img/schol/scho2LG.jpg" "Sample Scholastic Book Fair Flyer")]
     [:div.col-4
      [:h3 "Current Scholastic marketing efforts"]


      [:p "To understand more about Scholastic's current offerings, I researched Scholastic programs through company website and surveyed parents and teachers regarding their thoughts and feelings about Scholastic and their programs"]

      [:ul
       [:li
        "Scholastic book fairs market directly to children so they focus on toy tie-ins and music posters, rather than educational material"]
       [:li
        "Teachers feel negatively about Scholastic and associate them more with marketing than educational value"]
       [:li
        "Parents and teachers surveyed are concerned that students are not excited to buy books but stuff like pens and toys"]
       [:li
        "Parents and teachers surveyed feel that Scholastic's current efforts do a poor job in promoting reading"]]]]]

   [:section.container
    [:h2.center "User Research"]
    [:div.flex
     [:div.col-8
      [:p "We visited a playground at Yerba Buena Center to conduct user interviews and sent out surveys to parents and teachers in our network"]
      [:div.row
       [:div.col-md-6
        [:h3 "Example Quotes"]
        [:ul
         [:li
          "“The program should make sure kids actually read the books they said”"]
         [:li "“The programs we used were too easy to game”"]
         [:li "“There needs to be awesome prizes”"]
         [:li
          "“[Children] have more access to desktops and tablets than mobile devices” "]
         [:li
          "“My daughter did a summer reading program, now she reads at a high school level”"]
         [:li
          "“I don’t like the books my son wants from the book fair”"]
         [:li
          "“There is a lot competing for children's time such as TV and activities”"]]]
       [:div.col-md-6
        [:h3 "Common themes identified through affinity mapping"]
        [:ul
         [:li
          "Parents believe reading skills lead to academic success"]
         [:li "Parents weigh educational value vs price of materials"]
         [:li
          "Programs that are easy to cheat create a lack of motivation"]
         [:li "Parents want better ways to encourage reading"]
         [:li "Accountability and rewards needed are needed"]]]]]]]

   [:section.container-lrg
    [:h2.center "Persona Creation and Feature Development"]

    [:div.flex
     [:div.col-6
      (u/image "img/schol/child_persona.png" "")]
     [:div.col-6
      (u/image "img/schol/persona_adult.png" "")]]
    [:div.flex
     [:div.col-8
      [:h3 "Personas"]
      [:p
       "Using our research, we created empathy maps for our parent user and child user. This helped us develop our personas."]

      [:h3 "Problem Statements"]
      [:p
       "How might we allow Susan to help Jenny improve reading skills so that she can take an active role in her academic success?"]
      [:p
       "How might we measurably increase Jenny's reading by using extrinsic rewards catered to her as well as instrinsic rewards in a sense of mastery and accomplishment?"]
      [:p
       "How might we regain Scholastic’s reputation as an educational company while creating interest around Scholastic products?"]

      [:h3 "User Scenarios"]
      [:p "From here, we used the personas to create SSNiFs (Stakeholder, Situation, Needs and Features charts ). This allowed us to identify possible features that were directly tied to our users' needs. Next, we prioritized the features and decided which ones we would design for our MVP."]]]
    [:div.flex
     [:div.col-6
      (u/image "img/schol/Parent_SSNiF.png" "")]

     [:div.col-6
      (u/image "img/schol/Jenny_SSNiF.png" "")]]]

   [:section.container-lrg
    [:h2.center "Mapping flows and app structure"]
    [:div.flex
     [:div.col-8
      [:p "The app had two target users, parents and students, who would each have different views in the app. Students could be under 13 years old which meant that additional steps were needed to allow them to sign up safely and securely."]
      [:h3.center "User Flows"]]]
    [:div.flex
     [:div.col-6
      (u/image "img/schol/kid_userflow.png" "Student happy path")]
     [:hr]
     [:div.col-6
      (u/image "img/schol/parent_userflow.png" "Parent user flow")]]]

   [:section.container-lrg
    [:h3.center "Site Map"]
    [:div.flex
     [:img.img-lrg {:src "img/schol/sitemap.png", :alt "Site map"}]]]

   [:section.container-lrg
    [:h2.center "Wireframes"]
    [:div.flex
     [:div.col-8
      [:p "These are some of the wireframes I created for various parts of the website. The online app allows students to log reading, test their knowledge and earn prizes. It also allows parents to view their child's progress and add custom prizes."]]]
    [:div.flex
     [:div.col-4
      (u/image "img/schol/reward_1.png")]
     [:div.col-4
      (u/image "img/schol/quiz.png")]
     [:div.col-4
      (u/image "img/schol/quiz_2.png")]]]

   [:section
    [:h2.center "Low-fi Clickable Prototype"]
    [:div.flex
     [:div.col-8
      [:a.button-link
       {:target "_blank", :href "http://invis.io/KC10SCQ8Q"}
       "Visit complete prototype"]
      [:small " This will open Invision in a new tab"]
      [:p
       "User goals addressed through student challenges:"]
      [:ul
       [:li
        [:p
         [:strong "Educational Value: "]
         "other reading quizzes were based more on remembering facts. The questions should be about important information from the book rather than trivia"]]
       [:li
        [:p
         [:strong "Fun & Interactivity: "]
         "create a more engaging experience by using img, videos and other media"]]
       [:li
        [:p
         [:strong "Creative Confidence & Engagement: "]
         "open ended prompts to encourage deeper thinking and give importance to the child’s own thoughts and beliefs"]]]]]
    [:div.flex
     [:div.col-4 (u/image "img/schol/k_quiz_1.png" "...")]
     [:div.col-4 (u/image "img/schol/k_quiz_2.png" "...")]
     [:div.col-4 (u/image "img/schol/k_quiz_3.png" "...")]]
    [:div.flex
     [:div.col-4 (u/image "img/schol/k_quiz_4.png" "...")]
     [:div.col-4 (u/image "img/schol/k_quiz_5.png" "...")]]]])

(defn content[] (u/wrap-page case-study))
