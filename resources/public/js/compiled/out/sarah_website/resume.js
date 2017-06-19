// Compiled by ClojureScript 1.9.229 {}
goog.provide('sarah_website.resume');
goog.require('cljs.core');
goog.require('sarah_website.recos');
goog.require('sarah_website.work');
goog.require('sarah_website.footer');
goog.require('sarah_website.nav');
sarah_website.resume.contact_info = (function sarah_website$resume$contact_info(p__55809){
var map__55812 = p__55809;
var map__55812__$1 = ((((!((map__55812 == null)))?((((map__55812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55812):map__55812);
var address = cljs.core.get.call(null,map__55812__$1,new cljs.core.Keyword(null,"address","address",559499426));
var phone = cljs.core.get.call(null,map__55812__$1,new cljs.core.Keyword(null,"phone","phone",-763596057));
var email = cljs.core.get.call(null,map__55812__$1,new cljs.core.Keyword(null,"email","email",1415816706));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contact","div.contact",-1497013986),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.address","p.address",880347932),address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.phone","p.phone",-351534080),phone], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mailto:",email,"?Subject=Hello%20Sarah"], null)], null),email], null)], null)], null);
});
sarah_website.resume.my_contact = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"3809 South Congress Ave, Austin, TX 78704",new cljs.core.Keyword(null,"phone","phone",-763596057),"626-426-7150",new cljs.core.Keyword(null,"email","email",1415816706),"sarah.arnegard@gmail.com"], null);
sarah_website.resume.job = (function sarah_website$resume$job(p__55814){
var map__55821 = p__55814;
var map__55821__$1 = ((((!((map__55821 == null)))?((((map__55821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55821):map__55821);
var title = cljs.core.get.call(null,map__55821__$1,new cljs.core.Keyword(null,"title","title",636505583));
var company = cljs.core.get.call(null,map__55821__$1,new cljs.core.Keyword(null,"company","company",-340475075));
var location = cljs.core.get.call(null,map__55821__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var dates = cljs.core.get.call(null,map__55821__$1,new cljs.core.Keyword(null,"dates","dates",-1600154075));
var tagline = cljs.core.get.call(null,map__55821__$1,new cljs.core.Keyword(null,"tagline","tagline",281987682));
var bullets = cljs.core.get.call(null,map__55821__$1,new cljs.core.Keyword(null,"bullets","bullets",1734809024));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.company","span.company",-1764013287),company,", "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title","span.title",-1997593088),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dates","span.dates",825944609),dates], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.tagline","p.tagline",882959379),tagline], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.job-list","ul.job-list",-1420072919),(function (){var iter__26759__auto__ = ((function (map__55821,map__55821__$1,title,company,location,dates,tagline,bullets){
return (function sarah_website$resume$job_$_iter__55823(s__55824){
return (new cljs.core.LazySeq(null,((function (map__55821,map__55821__$1,title,company,location,dates,tagline,bullets){
return (function (){
var s__55824__$1 = s__55824;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55824__$1);
if(temp__4657__auto__){
var s__55824__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55824__$2)){
var c__26757__auto__ = cljs.core.chunk_first.call(null,s__55824__$2);
var size__26758__auto__ = cljs.core.count.call(null,c__26757__auto__);
var b__55826 = cljs.core.chunk_buffer.call(null,size__26758__auto__);
if((function (){var i__55825 = (0);
while(true){
if((i__55825 < size__26758__auto__)){
var b = cljs.core._nth.call(null,c__26757__auto__,i__55825);
cljs.core.chunk_append.call(null,b__55826,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2px"], null)], null),b], null));

var G__55827 = (i__55825 + (1));
i__55825 = G__55827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55826),sarah_website$resume$job_$_iter__55823.call(null,cljs.core.chunk_rest.call(null,s__55824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55826),null);
}
} else {
var b = cljs.core.first.call(null,s__55824__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2px"], null)], null),b], null),sarah_website$resume$job_$_iter__55823.call(null,cljs.core.rest.call(null,s__55824__$2)));
}
} else {
return null;
}
break;
}
});})(map__55821,map__55821__$1,title,company,location,dates,tagline,bullets))
,null,null));
});})(map__55821,map__55821__$1,title,company,location,dates,tagline,bullets))
;
return iter__26759__auto__.call(null,bullets);
})()], null)], null);
});
sarah_website.resume.my_jobs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"Customer Researcher",new cljs.core.Keyword(null,"company","company",-340475075),"Tyro Payments",new cljs.core.Keyword(null,"location","location",1815599388),"Sydney, Australia",new cljs.core.Keyword(null,"dates","dates",-1600154075),"FEB 2016 - APRIL 2017",new cljs.core.Keyword(null,"tagline","tagline",281987682),"Product Designer and Customer Researcher for Tyro Smart Growth Funding",new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Converted business assumptions into testable hypotheses and designed experiments with crystal clear success metrics","Rapidly invalidated concepts to reduce wasted engineering effort and bring products to market faster","Prioritized features based on customer and business value while weighing engineering difficulty","Designed research studies on beta versions of the product and presented results to stakeholders","Interviewed 40+ customers to discover how we can best deliver a compelling product","Consolidated interview data into 6 personas to help Designers, PMs, Engineers, and Marketing better understand user behavior","Facilitated design workshops with engineering teams, PMs, and executive stakeholders to swiftly explore feasible solutions","Conducted internal research to increase the value the design team provides the company"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"Product Designer",new cljs.core.Keyword(null,"company","company",-340475075),"Sookasa Inc",new cljs.core.Keyword(null,"location","location",1815599388),"San Mateo, CA",new cljs.core.Keyword(null,"dates","dates",-1600154075),"DEC 2014 - JAN 2016",new cljs.core.Keyword(null,"tagline","tagline",281987682),"Responsible for all research and product design activities",new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Devised new sharing flow, increasing sharing rate in user tests from 20% to 66%","Designed integration experience around Google Drive, web, and desktop apps increasing the addressable market by 44%","Redesigned the UI and UX of web application including permissions, device locking, user settings and profiles, contact lists and other core functionality","Spearheaded the design of the company's new risk detection product","Conducted user research and created prototypes, mock-ups, and spec documents","Used my research to craft a new UI style guide and built bootstrap templates for the engineering team"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"UX Design Consultant",new cljs.core.Keyword(null,"company","company",-340475075),"Fetchh.io",new cljs.core.Keyword(null,"location","location",1815599388),"Sydney, Australia",new cljs.core.Keyword(null,"dates","dates",-1600154075),"MAR 2015 - JAN 2016",new cljs.core.Keyword(null,"tagline","tagline",281987682),"Advised the startup on product and UX design best practices",new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Planned user flow and product roadmap of the app with the CTO","Monitored Google Analytics to validate user flow hypotheses"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"UX Expert in Residence",new cljs.core.Keyword(null,"company","company",-340475075),"General Assembly",new cljs.core.Keyword(null,"location","location",1815599388),"Sydney, Australia",new cljs.core.Keyword(null,"dates","dates",-1600154075),"NOV 2015 - JAN 2016",new cljs.core.Keyword(null,"tagline","tagline",281987682),"Mentored students in design and research methods"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"UX Contractor",new cljs.core.Keyword(null,"company","company",-340475075),"Workboard Inc",new cljs.core.Keyword(null,"location","location",1815599388),"Redwood City, CA",new cljs.core.Keyword(null,"dates","dates",-1600154075),"OCT 2014 - NOV 2014",new cljs.core.Keyword(null,"tagline","tagline",281987682),"Created personas based on research about customer segments "], null)], null);
sarah_website.resume.my_skills = (function sarah_website$resume$my_skills(skills){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.skill-list","ul.skill-list",405059454),(function (){var iter__26759__auto__ = (function sarah_website$resume$my_skills_$_iter__55832(s__55833){
return (new cljs.core.LazySeq(null,(function (){
var s__55833__$1 = s__55833;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55833__$1);
if(temp__4657__auto__){
var s__55833__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55833__$2)){
var c__26757__auto__ = cljs.core.chunk_first.call(null,s__55833__$2);
var size__26758__auto__ = cljs.core.count.call(null,c__26757__auto__);
var b__55835 = cljs.core.chunk_buffer.call(null,size__26758__auto__);
if((function (){var i__55834 = (0);
while(true){
if((i__55834 < size__26758__auto__)){
var s = cljs.core._nth.call(null,c__26757__auto__,i__55834);
cljs.core.chunk_append.call(null,b__55835,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),s], null));

var G__55836 = (i__55834 + (1));
i__55834 = G__55836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55835),sarah_website$resume$my_skills_$_iter__55832.call(null,cljs.core.chunk_rest.call(null,s__55833__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55835),null);
}
} else {
var s = cljs.core.first.call(null,s__55833__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),s], null),sarah_website$resume$my_skills_$_iter__55832.call(null,cljs.core.rest.call(null,s__55833__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26759__auto__.call(null,skills);
})()], null);
});
sarah_website.resume.recs = (function sarah_website$resume$recs(p__55837){
var map__55840 = p__55837;
var map__55840__$1 = ((((!((map__55840 == null)))?((((map__55840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55840):map__55840);
var quote = cljs.core.get.call(null,map__55840__$1,new cljs.core.Keyword(null,"quote","quote",-262615245));
var name = cljs.core.get.call(null,map__55840__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title = cljs.core.get.call(null,map__55840__$1,new cljs.core.Keyword(null,"title","title",636505583));
var company = cljs.core.get.call(null,map__55840__$1,new cljs.core.Keyword(null,"company","company",-340475075));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quote","div.quote",-2075927990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),quote], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.recommender","p.recommender",1874391303),"",name,", ",company," (",title,")"], null)], null);
});
sarah_website.resume.my_recs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"quote","quote",-262615245),"She showed great leadership skills, managing the research for many concurrent streams of research around our customers while truly caring about delivering meaningful, helpful solutions.",new cljs.core.Keyword(null,"name","name",1843675177),"James Taylor",new cljs.core.Keyword(null,"title","title",636505583),"Product Design Lead",new cljs.core.Keyword(null,"company","company",-340475075),"Tyro"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"quote","quote",-262615245),"The breadth of her skills and ability to work both independently and collaboratively make her a huge asset on any team.",new cljs.core.Keyword(null,"name","name",1843675177),"Dan Manian",new cljs.core.Keyword(null,"title","title",636505583),"VP of Product",new cljs.core.Keyword(null,"company","company",-340475075),"Sookasa"], null)], null);
sarah_website.resume.resume_hiccup = (function sarah_website$resume$resume_hiccup(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-column","div.left-column",-193214983),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Sarah Arnegard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"UX and Customer Research Specialist"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.summary","p.summary",1397616181),"Reduce risk and create winning products by truly understanding your customers"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right-column","div.right-column",1851404035),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sarah_website.resume.contact_info,sarah_website.resume.my_contact], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-column","div.left-column",-193214983),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.experience","div.experience",1711020793),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Experience"], null),cljs.core.map.call(null,sarah_website.resume.job,sarah_website.resume.my_jobs)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right-column","div.right-column",1851404035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.skills","div.skills",1025694049),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Skills"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sarah_website.resume.my_skills,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Conducting research studies","Experiment design","Uncovering user needs","Requirements gathering","Usability testing","Personas and user journeys","Analyzing user research","Facilitating UX workshops","Jobs-to-be-done framework","Rapid prototyping and ideation"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.recommendations","div.recommendations",-1891929142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.reco","h2.reco",1650868466),"Recommendations"], null),cljs.core.map.call(null,sarah_website.resume.recs,sarah_website.resume.my_recs)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.education","div.education",991281163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.edu","h2.edu",-271216730),"Education"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"General Assembly SF, UX Design Immersive program"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"University of Washington, BFA in Digital Media"], null)], null)], null)], null);
});
sarah_website.resume.content = (function sarah_website$resume$content(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),sarah_website.nav.hiccup], null),sarah_website.resume.resume_hiccup.call(null),sarah_website.footer.hiccup], null);
});

//# sourceMappingURL=resume.js.map?rel=1497028559604