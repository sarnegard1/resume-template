// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51410){
var map__51435 = p__51410;
var map__51435__$1 = ((((!((map__51435 == null)))?((((map__51435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51435):map__51435);
var m = map__51435__$1;
var n = cljs.core.get.call(null,map__51435__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51437_51459 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51438_51460 = null;
var count__51439_51461 = (0);
var i__51440_51462 = (0);
while(true){
if((i__51440_51462 < count__51439_51461)){
var f_51463 = cljs.core._nth.call(null,chunk__51438_51460,i__51440_51462);
cljs.core.println.call(null,"  ",f_51463);

var G__51464 = seq__51437_51459;
var G__51465 = chunk__51438_51460;
var G__51466 = count__51439_51461;
var G__51467 = (i__51440_51462 + (1));
seq__51437_51459 = G__51464;
chunk__51438_51460 = G__51465;
count__51439_51461 = G__51466;
i__51440_51462 = G__51467;
continue;
} else {
var temp__4657__auto___51468 = cljs.core.seq.call(null,seq__51437_51459);
if(temp__4657__auto___51468){
var seq__51437_51469__$1 = temp__4657__auto___51468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51437_51469__$1)){
var c__26790__auto___51470 = cljs.core.chunk_first.call(null,seq__51437_51469__$1);
var G__51471 = cljs.core.chunk_rest.call(null,seq__51437_51469__$1);
var G__51472 = c__26790__auto___51470;
var G__51473 = cljs.core.count.call(null,c__26790__auto___51470);
var G__51474 = (0);
seq__51437_51459 = G__51471;
chunk__51438_51460 = G__51472;
count__51439_51461 = G__51473;
i__51440_51462 = G__51474;
continue;
} else {
var f_51475 = cljs.core.first.call(null,seq__51437_51469__$1);
cljs.core.println.call(null,"  ",f_51475);

var G__51476 = cljs.core.next.call(null,seq__51437_51469__$1);
var G__51477 = null;
var G__51478 = (0);
var G__51479 = (0);
seq__51437_51459 = G__51476;
chunk__51438_51460 = G__51477;
count__51439_51461 = G__51478;
i__51440_51462 = G__51479;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51480 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51480);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51480)))?cljs.core.second.call(null,arglists_51480):arglists_51480));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51441_51481 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51442_51482 = null;
var count__51443_51483 = (0);
var i__51444_51484 = (0);
while(true){
if((i__51444_51484 < count__51443_51483)){
var vec__51445_51485 = cljs.core._nth.call(null,chunk__51442_51482,i__51444_51484);
var name_51486 = cljs.core.nth.call(null,vec__51445_51485,(0),null);
var map__51448_51487 = cljs.core.nth.call(null,vec__51445_51485,(1),null);
var map__51448_51488__$1 = ((((!((map__51448_51487 == null)))?((((map__51448_51487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51448_51487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51448_51487):map__51448_51487);
var doc_51489 = cljs.core.get.call(null,map__51448_51488__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51490 = cljs.core.get.call(null,map__51448_51488__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51486);

cljs.core.println.call(null," ",arglists_51490);

if(cljs.core.truth_(doc_51489)){
cljs.core.println.call(null," ",doc_51489);
} else {
}

var G__51491 = seq__51441_51481;
var G__51492 = chunk__51442_51482;
var G__51493 = count__51443_51483;
var G__51494 = (i__51444_51484 + (1));
seq__51441_51481 = G__51491;
chunk__51442_51482 = G__51492;
count__51443_51483 = G__51493;
i__51444_51484 = G__51494;
continue;
} else {
var temp__4657__auto___51495 = cljs.core.seq.call(null,seq__51441_51481);
if(temp__4657__auto___51495){
var seq__51441_51496__$1 = temp__4657__auto___51495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51441_51496__$1)){
var c__26790__auto___51497 = cljs.core.chunk_first.call(null,seq__51441_51496__$1);
var G__51498 = cljs.core.chunk_rest.call(null,seq__51441_51496__$1);
var G__51499 = c__26790__auto___51497;
var G__51500 = cljs.core.count.call(null,c__26790__auto___51497);
var G__51501 = (0);
seq__51441_51481 = G__51498;
chunk__51442_51482 = G__51499;
count__51443_51483 = G__51500;
i__51444_51484 = G__51501;
continue;
} else {
var vec__51450_51502 = cljs.core.first.call(null,seq__51441_51496__$1);
var name_51503 = cljs.core.nth.call(null,vec__51450_51502,(0),null);
var map__51453_51504 = cljs.core.nth.call(null,vec__51450_51502,(1),null);
var map__51453_51505__$1 = ((((!((map__51453_51504 == null)))?((((map__51453_51504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51453_51504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51453_51504):map__51453_51504);
var doc_51506 = cljs.core.get.call(null,map__51453_51505__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51507 = cljs.core.get.call(null,map__51453_51505__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51503);

cljs.core.println.call(null," ",arglists_51507);

if(cljs.core.truth_(doc_51506)){
cljs.core.println.call(null," ",doc_51506);
} else {
}

var G__51508 = cljs.core.next.call(null,seq__51441_51496__$1);
var G__51509 = null;
var G__51510 = (0);
var G__51511 = (0);
seq__51441_51481 = G__51508;
chunk__51442_51482 = G__51509;
count__51443_51483 = G__51510;
i__51444_51484 = G__51511;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__51455 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51456 = null;
var count__51457 = (0);
var i__51458 = (0);
while(true){
if((i__51458 < count__51457)){
var role = cljs.core._nth.call(null,chunk__51456,i__51458);
var temp__4657__auto___51512__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51512__$1)){
var spec_51513 = temp__4657__auto___51512__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_51513));
} else {
}

var G__51514 = seq__51455;
var G__51515 = chunk__51456;
var G__51516 = count__51457;
var G__51517 = (i__51458 + (1));
seq__51455 = G__51514;
chunk__51456 = G__51515;
count__51457 = G__51516;
i__51458 = G__51517;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__51455);
if(temp__4657__auto____$1){
var seq__51455__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51455__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__51455__$1);
var G__51518 = cljs.core.chunk_rest.call(null,seq__51455__$1);
var G__51519 = c__26790__auto__;
var G__51520 = cljs.core.count.call(null,c__26790__auto__);
var G__51521 = (0);
seq__51455 = G__51518;
chunk__51456 = G__51519;
count__51457 = G__51520;
i__51458 = G__51521;
continue;
} else {
var role = cljs.core.first.call(null,seq__51455__$1);
var temp__4657__auto___51522__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51522__$2)){
var spec_51523 = temp__4657__auto___51522__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_51523));
} else {
}

var G__51524 = cljs.core.next.call(null,seq__51455__$1);
var G__51525 = null;
var G__51526 = (0);
var G__51527 = (0);
seq__51455 = G__51524;
chunk__51456 = G__51525;
count__51457 = G__51526;
i__51458 = G__51527;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1497028423382