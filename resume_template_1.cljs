

; make keys into ids?
;
; create blocks of different sections in html
; h1 is name
; each section h2
; heach sub heading h3

(defn header [name phone email website twitter linkedin]
  [:header
    [:h1.name name]
    [:div.contact
      [:div.phone phone]
      [:div.email email]
      [:div.website website]
      [:div.twitter twitter]
      [:div.linkedin linkedin]]])


(defn info [name info-label info-class info-image info-brief info-quote]
  [:div
    [:p.info-label info-label]
    [:p.info-class info-class]
    [:img.info-imag {:src info-image}]
    [:p.info-brief info-brief]
    [:p.info-quote info-quote]])

(defn location [address city region code country]
  [:div.location
    [:p.address address]
    [:p
      [:span.city city]
      [:span.region region]
      [:span.code code]
      [:span.country country]]])

(defn project [{:keys [title category role url start repo description keywords media]}]
  [:div
    [:h3.title title]
    [:p category]
    [:p role]
    [:a {:href url} "link"]
    [:a {:href rep} "repo"]
    [:p startup]
    [:p description]])
