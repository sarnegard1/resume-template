// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25979__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25979__auto__){
return or__25979__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25979__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49376_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49376_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49381 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49382 = null;
var count__49383 = (0);
var i__49384 = (0);
while(true){
if((i__49384 < count__49383)){
var n = cljs.core._nth.call(null,chunk__49382,i__49384);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49385 = seq__49381;
var G__49386 = chunk__49382;
var G__49387 = count__49383;
var G__49388 = (i__49384 + (1));
seq__49381 = G__49385;
chunk__49382 = G__49386;
count__49383 = G__49387;
i__49384 = G__49388;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49381);
if(temp__4657__auto__){
var seq__49381__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49381__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__49381__$1);
var G__49389 = cljs.core.chunk_rest.call(null,seq__49381__$1);
var G__49390 = c__26790__auto__;
var G__49391 = cljs.core.count.call(null,c__26790__auto__);
var G__49392 = (0);
seq__49381 = G__49389;
chunk__49382 = G__49390;
count__49383 = G__49391;
i__49384 = G__49392;
continue;
} else {
var n = cljs.core.first.call(null,seq__49381__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49393 = cljs.core.next.call(null,seq__49381__$1);
var G__49394 = null;
var G__49395 = (0);
var G__49396 = (0);
seq__49381 = G__49393;
chunk__49382 = G__49394;
count__49383 = G__49395;
i__49384 = G__49396;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49447_49458 = cljs.core.seq.call(null,deps);
var chunk__49448_49459 = null;
var count__49449_49460 = (0);
var i__49450_49461 = (0);
while(true){
if((i__49450_49461 < count__49449_49460)){
var dep_49462 = cljs.core._nth.call(null,chunk__49448_49459,i__49450_49461);
topo_sort_helper_STAR_.call(null,dep_49462,(depth + (1)),state);

var G__49463 = seq__49447_49458;
var G__49464 = chunk__49448_49459;
var G__49465 = count__49449_49460;
var G__49466 = (i__49450_49461 + (1));
seq__49447_49458 = G__49463;
chunk__49448_49459 = G__49464;
count__49449_49460 = G__49465;
i__49450_49461 = G__49466;
continue;
} else {
var temp__4657__auto___49467 = cljs.core.seq.call(null,seq__49447_49458);
if(temp__4657__auto___49467){
var seq__49447_49468__$1 = temp__4657__auto___49467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49447_49468__$1)){
var c__26790__auto___49469 = cljs.core.chunk_first.call(null,seq__49447_49468__$1);
var G__49470 = cljs.core.chunk_rest.call(null,seq__49447_49468__$1);
var G__49471 = c__26790__auto___49469;
var G__49472 = cljs.core.count.call(null,c__26790__auto___49469);
var G__49473 = (0);
seq__49447_49458 = G__49470;
chunk__49448_49459 = G__49471;
count__49449_49460 = G__49472;
i__49450_49461 = G__49473;
continue;
} else {
var dep_49474 = cljs.core.first.call(null,seq__49447_49468__$1);
topo_sort_helper_STAR_.call(null,dep_49474,(depth + (1)),state);

var G__49475 = cljs.core.next.call(null,seq__49447_49468__$1);
var G__49476 = null;
var G__49477 = (0);
var G__49478 = (0);
seq__49447_49458 = G__49475;
chunk__49448_49459 = G__49476;
count__49449_49460 = G__49477;
i__49450_49461 = G__49478;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49451){
var vec__49455 = p__49451;
var seq__49456 = cljs.core.seq.call(null,vec__49455);
var first__49457 = cljs.core.first.call(null,seq__49456);
var seq__49456__$1 = cljs.core.next.call(null,seq__49456);
var x = first__49457;
var xs = seq__49456__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49455,seq__49456,first__49457,seq__49456__$1,x,xs,get_deps__$1){
return (function (p1__49397_SHARP_){
return clojure.set.difference.call(null,p1__49397_SHARP_,x);
});})(vec__49455,seq__49456,first__49457,seq__49456__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49491 = cljs.core.seq.call(null,provides);
var chunk__49492 = null;
var count__49493 = (0);
var i__49494 = (0);
while(true){
if((i__49494 < count__49493)){
var prov = cljs.core._nth.call(null,chunk__49492,i__49494);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49495_49503 = cljs.core.seq.call(null,requires);
var chunk__49496_49504 = null;
var count__49497_49505 = (0);
var i__49498_49506 = (0);
while(true){
if((i__49498_49506 < count__49497_49505)){
var req_49507 = cljs.core._nth.call(null,chunk__49496_49504,i__49498_49506);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49507,prov);

var G__49508 = seq__49495_49503;
var G__49509 = chunk__49496_49504;
var G__49510 = count__49497_49505;
var G__49511 = (i__49498_49506 + (1));
seq__49495_49503 = G__49508;
chunk__49496_49504 = G__49509;
count__49497_49505 = G__49510;
i__49498_49506 = G__49511;
continue;
} else {
var temp__4657__auto___49512 = cljs.core.seq.call(null,seq__49495_49503);
if(temp__4657__auto___49512){
var seq__49495_49513__$1 = temp__4657__auto___49512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49495_49513__$1)){
var c__26790__auto___49514 = cljs.core.chunk_first.call(null,seq__49495_49513__$1);
var G__49515 = cljs.core.chunk_rest.call(null,seq__49495_49513__$1);
var G__49516 = c__26790__auto___49514;
var G__49517 = cljs.core.count.call(null,c__26790__auto___49514);
var G__49518 = (0);
seq__49495_49503 = G__49515;
chunk__49496_49504 = G__49516;
count__49497_49505 = G__49517;
i__49498_49506 = G__49518;
continue;
} else {
var req_49519 = cljs.core.first.call(null,seq__49495_49513__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49519,prov);

var G__49520 = cljs.core.next.call(null,seq__49495_49513__$1);
var G__49521 = null;
var G__49522 = (0);
var G__49523 = (0);
seq__49495_49503 = G__49520;
chunk__49496_49504 = G__49521;
count__49497_49505 = G__49522;
i__49498_49506 = G__49523;
continue;
}
} else {
}
}
break;
}

var G__49524 = seq__49491;
var G__49525 = chunk__49492;
var G__49526 = count__49493;
var G__49527 = (i__49494 + (1));
seq__49491 = G__49524;
chunk__49492 = G__49525;
count__49493 = G__49526;
i__49494 = G__49527;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49491);
if(temp__4657__auto__){
var seq__49491__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49491__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__49491__$1);
var G__49528 = cljs.core.chunk_rest.call(null,seq__49491__$1);
var G__49529 = c__26790__auto__;
var G__49530 = cljs.core.count.call(null,c__26790__auto__);
var G__49531 = (0);
seq__49491 = G__49528;
chunk__49492 = G__49529;
count__49493 = G__49530;
i__49494 = G__49531;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49491__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49499_49532 = cljs.core.seq.call(null,requires);
var chunk__49500_49533 = null;
var count__49501_49534 = (0);
var i__49502_49535 = (0);
while(true){
if((i__49502_49535 < count__49501_49534)){
var req_49536 = cljs.core._nth.call(null,chunk__49500_49533,i__49502_49535);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49536,prov);

var G__49537 = seq__49499_49532;
var G__49538 = chunk__49500_49533;
var G__49539 = count__49501_49534;
var G__49540 = (i__49502_49535 + (1));
seq__49499_49532 = G__49537;
chunk__49500_49533 = G__49538;
count__49501_49534 = G__49539;
i__49502_49535 = G__49540;
continue;
} else {
var temp__4657__auto___49541__$1 = cljs.core.seq.call(null,seq__49499_49532);
if(temp__4657__auto___49541__$1){
var seq__49499_49542__$1 = temp__4657__auto___49541__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49499_49542__$1)){
var c__26790__auto___49543 = cljs.core.chunk_first.call(null,seq__49499_49542__$1);
var G__49544 = cljs.core.chunk_rest.call(null,seq__49499_49542__$1);
var G__49545 = c__26790__auto___49543;
var G__49546 = cljs.core.count.call(null,c__26790__auto___49543);
var G__49547 = (0);
seq__49499_49532 = G__49544;
chunk__49500_49533 = G__49545;
count__49501_49534 = G__49546;
i__49502_49535 = G__49547;
continue;
} else {
var req_49548 = cljs.core.first.call(null,seq__49499_49542__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49548,prov);

var G__49549 = cljs.core.next.call(null,seq__49499_49542__$1);
var G__49550 = null;
var G__49551 = (0);
var G__49552 = (0);
seq__49499_49532 = G__49549;
chunk__49500_49533 = G__49550;
count__49501_49534 = G__49551;
i__49502_49535 = G__49552;
continue;
}
} else {
}
}
break;
}

var G__49553 = cljs.core.next.call(null,seq__49491__$1);
var G__49554 = null;
var G__49555 = (0);
var G__49556 = (0);
seq__49491 = G__49553;
chunk__49492 = G__49554;
count__49493 = G__49555;
i__49494 = G__49556;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__49561_49565 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49562_49566 = null;
var count__49563_49567 = (0);
var i__49564_49568 = (0);
while(true){
if((i__49564_49568 < count__49563_49567)){
var ns_49569 = cljs.core._nth.call(null,chunk__49562_49566,i__49564_49568);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49569);

var G__49570 = seq__49561_49565;
var G__49571 = chunk__49562_49566;
var G__49572 = count__49563_49567;
var G__49573 = (i__49564_49568 + (1));
seq__49561_49565 = G__49570;
chunk__49562_49566 = G__49571;
count__49563_49567 = G__49572;
i__49564_49568 = G__49573;
continue;
} else {
var temp__4657__auto___49574 = cljs.core.seq.call(null,seq__49561_49565);
if(temp__4657__auto___49574){
var seq__49561_49575__$1 = temp__4657__auto___49574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49561_49575__$1)){
var c__26790__auto___49576 = cljs.core.chunk_first.call(null,seq__49561_49575__$1);
var G__49577 = cljs.core.chunk_rest.call(null,seq__49561_49575__$1);
var G__49578 = c__26790__auto___49576;
var G__49579 = cljs.core.count.call(null,c__26790__auto___49576);
var G__49580 = (0);
seq__49561_49565 = G__49577;
chunk__49562_49566 = G__49578;
count__49563_49567 = G__49579;
i__49564_49568 = G__49580;
continue;
} else {
var ns_49581 = cljs.core.first.call(null,seq__49561_49575__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49581);

var G__49582 = cljs.core.next.call(null,seq__49561_49575__$1);
var G__49583 = null;
var G__49584 = (0);
var G__49585 = (0);
seq__49561_49565 = G__49582;
chunk__49562_49566 = G__49583;
count__49563_49567 = G__49584;
i__49564_49568 = G__49585;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25979__auto__ = goog.require__;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__49586__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49587__i = 0, G__49587__a = new Array(arguments.length -  0);
while (G__49587__i < G__49587__a.length) {G__49587__a[G__49587__i] = arguments[G__49587__i + 0]; ++G__49587__i;}
  args = new cljs.core.IndexedSeq(G__49587__a,0);
} 
return G__49586__delegate.call(this,args);};
G__49586.cljs$lang$maxFixedArity = 0;
G__49586.cljs$lang$applyTo = (function (arglist__49588){
var args = cljs.core.seq(arglist__49588);
return G__49586__delegate(args);
});
G__49586.cljs$core$IFn$_invoke$arity$variadic = G__49586__delegate;
return G__49586;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49589 = cljs.core._EQ_;
var expr__49590 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49589.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49590))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49589,expr__49590){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49589,expr__49590))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49589,expr__49590){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49592){if((e49592 instanceof Error)){
var e = e49592;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49592;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49589,expr__49590))
} else {
if(cljs.core.truth_(pred__49589.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49590))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49589.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49590))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49589.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49590))){
return ((function (pred__49589,expr__49590){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49593){if((e49593 instanceof Error)){
var e = e49593;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49593;

}
}})());
});
;})(pred__49589,expr__49590))
} else {
return ((function (pred__49589,expr__49590){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49589,expr__49590))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49594,callback){
var map__49597 = p__49594;
var map__49597__$1 = ((((!((map__49597 == null)))?((((map__49597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49597):map__49597);
var file_msg = map__49597__$1;
var request_url = cljs.core.get.call(null,map__49597__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49597,map__49597__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49597,map__49597__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__){
return (function (state_49621){
var state_val_49622 = (state_49621[(1)]);
if((state_val_49622 === (7))){
var inst_49617 = (state_49621[(2)]);
var state_49621__$1 = state_49621;
var statearr_49623_49643 = state_49621__$1;
(statearr_49623_49643[(2)] = inst_49617);

(statearr_49623_49643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49622 === (1))){
var state_49621__$1 = state_49621;
var statearr_49624_49644 = state_49621__$1;
(statearr_49624_49644[(2)] = null);

(statearr_49624_49644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49622 === (4))){
var inst_49601 = (state_49621[(7)]);
var inst_49601__$1 = (state_49621[(2)]);
var state_49621__$1 = (function (){var statearr_49625 = state_49621;
(statearr_49625[(7)] = inst_49601__$1);

return statearr_49625;
})();
if(cljs.core.truth_(inst_49601__$1)){
var statearr_49626_49645 = state_49621__$1;
(statearr_49626_49645[(1)] = (5));

} else {
var statearr_49627_49646 = state_49621__$1;
(statearr_49627_49646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49622 === (6))){
var state_49621__$1 = state_49621;
var statearr_49628_49647 = state_49621__$1;
(statearr_49628_49647[(2)] = null);

(statearr_49628_49647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49622 === (3))){
var inst_49619 = (state_49621[(2)]);
var state_49621__$1 = state_49621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49621__$1,inst_49619);
} else {
if((state_val_49622 === (2))){
var state_49621__$1 = state_49621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49621__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49622 === (11))){
var inst_49613 = (state_49621[(2)]);
var state_49621__$1 = (function (){var statearr_49629 = state_49621;
(statearr_49629[(8)] = inst_49613);

return statearr_49629;
})();
var statearr_49630_49648 = state_49621__$1;
(statearr_49630_49648[(2)] = null);

(statearr_49630_49648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49622 === (9))){
var inst_49605 = (state_49621[(9)]);
var inst_49607 = (state_49621[(10)]);
var inst_49609 = inst_49607.call(null,inst_49605);
var state_49621__$1 = state_49621;
var statearr_49631_49649 = state_49621__$1;
(statearr_49631_49649[(2)] = inst_49609);

(statearr_49631_49649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49622 === (5))){
var inst_49601 = (state_49621[(7)]);
var inst_49603 = figwheel.client.file_reloading.blocking_load.call(null,inst_49601);
var state_49621__$1 = state_49621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49621__$1,(8),inst_49603);
} else {
if((state_val_49622 === (10))){
var inst_49605 = (state_49621[(9)]);
var inst_49611 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49605);
var state_49621__$1 = state_49621;
var statearr_49632_49650 = state_49621__$1;
(statearr_49632_49650[(2)] = inst_49611);

(statearr_49632_49650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49622 === (8))){
var inst_49601 = (state_49621[(7)]);
var inst_49607 = (state_49621[(10)]);
var inst_49605 = (state_49621[(2)]);
var inst_49606 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49607__$1 = cljs.core.get.call(null,inst_49606,inst_49601);
var state_49621__$1 = (function (){var statearr_49633 = state_49621;
(statearr_49633[(9)] = inst_49605);

(statearr_49633[(10)] = inst_49607__$1);

return statearr_49633;
})();
if(cljs.core.truth_(inst_49607__$1)){
var statearr_49634_49651 = state_49621__$1;
(statearr_49634_49651[(1)] = (9));

} else {
var statearr_49635_49652 = state_49621__$1;
(statearr_49635_49652[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29167__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29056__auto__ = null;
var figwheel$client$file_reloading$state_machine__29056__auto____0 = (function (){
var statearr_49639 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49639[(0)] = figwheel$client$file_reloading$state_machine__29056__auto__);

(statearr_49639[(1)] = (1));

return statearr_49639;
});
var figwheel$client$file_reloading$state_machine__29056__auto____1 = (function (state_49621){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_49621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e49640){if((e49640 instanceof Object)){
var ex__29059__auto__ = e49640;
var statearr_49641_49653 = state_49621;
(statearr_49641_49653[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49654 = state_49621;
state_49621 = G__49654;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29056__auto__ = function(state_49621){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29056__auto____1.call(this,state_49621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29056__auto____0;
figwheel$client$file_reloading$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29056__auto____1;
return figwheel$client$file_reloading$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__))
})();
var state__29169__auto__ = (function (){var statearr_49642 = f__29168__auto__.call(null);
(statearr_49642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_49642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__))
);

return c__29167__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49655,callback){
var map__49658 = p__49655;
var map__49658__$1 = ((((!((map__49658 == null)))?((((map__49658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49658):map__49658);
var file_msg = map__49658__$1;
var namespace = cljs.core.get.call(null,map__49658__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49658,map__49658__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49658,map__49658__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49660){
var map__49663 = p__49660;
var map__49663__$1 = ((((!((map__49663 == null)))?((((map__49663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49663):map__49663);
var file_msg = map__49663__$1;
var namespace = cljs.core.get.call(null,map__49663__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49665){
var map__49668 = p__49665;
var map__49668__$1 = ((((!((map__49668 == null)))?((((map__49668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49668):map__49668);
var file_msg = map__49668__$1;
var namespace = cljs.core.get.call(null,map__49668__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25967__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25967__auto__){
var or__25979__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var or__25979__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25967__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49670,callback){
var map__49673 = p__49670;
var map__49673__$1 = ((((!((map__49673 == null)))?((((map__49673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49673):map__49673);
var file_msg = map__49673__$1;
var request_url = cljs.core.get.call(null,map__49673__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49673__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29167__auto___49777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___49777,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___49777,out){
return (function (state_49759){
var state_val_49760 = (state_49759[(1)]);
if((state_val_49760 === (1))){
var inst_49733 = cljs.core.seq.call(null,files);
var inst_49734 = cljs.core.first.call(null,inst_49733);
var inst_49735 = cljs.core.next.call(null,inst_49733);
var inst_49736 = files;
var state_49759__$1 = (function (){var statearr_49761 = state_49759;
(statearr_49761[(7)] = inst_49735);

(statearr_49761[(8)] = inst_49736);

(statearr_49761[(9)] = inst_49734);

return statearr_49761;
})();
var statearr_49762_49778 = state_49759__$1;
(statearr_49762_49778[(2)] = null);

(statearr_49762_49778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49760 === (2))){
var inst_49742 = (state_49759[(10)]);
var inst_49736 = (state_49759[(8)]);
var inst_49741 = cljs.core.seq.call(null,inst_49736);
var inst_49742__$1 = cljs.core.first.call(null,inst_49741);
var inst_49743 = cljs.core.next.call(null,inst_49741);
var inst_49744 = (inst_49742__$1 == null);
var inst_49745 = cljs.core.not.call(null,inst_49744);
var state_49759__$1 = (function (){var statearr_49763 = state_49759;
(statearr_49763[(10)] = inst_49742__$1);

(statearr_49763[(11)] = inst_49743);

return statearr_49763;
})();
if(inst_49745){
var statearr_49764_49779 = state_49759__$1;
(statearr_49764_49779[(1)] = (4));

} else {
var statearr_49765_49780 = state_49759__$1;
(statearr_49765_49780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49760 === (3))){
var inst_49757 = (state_49759[(2)]);
var state_49759__$1 = state_49759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49759__$1,inst_49757);
} else {
if((state_val_49760 === (4))){
var inst_49742 = (state_49759[(10)]);
var inst_49747 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49742);
var state_49759__$1 = state_49759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49759__$1,(7),inst_49747);
} else {
if((state_val_49760 === (5))){
var inst_49753 = cljs.core.async.close_BANG_.call(null,out);
var state_49759__$1 = state_49759;
var statearr_49766_49781 = state_49759__$1;
(statearr_49766_49781[(2)] = inst_49753);

(statearr_49766_49781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49760 === (6))){
var inst_49755 = (state_49759[(2)]);
var state_49759__$1 = state_49759;
var statearr_49767_49782 = state_49759__$1;
(statearr_49767_49782[(2)] = inst_49755);

(statearr_49767_49782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49760 === (7))){
var inst_49743 = (state_49759[(11)]);
var inst_49749 = (state_49759[(2)]);
var inst_49750 = cljs.core.async.put_BANG_.call(null,out,inst_49749);
var inst_49736 = inst_49743;
var state_49759__$1 = (function (){var statearr_49768 = state_49759;
(statearr_49768[(8)] = inst_49736);

(statearr_49768[(12)] = inst_49750);

return statearr_49768;
})();
var statearr_49769_49783 = state_49759__$1;
(statearr_49769_49783[(2)] = null);

(statearr_49769_49783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29167__auto___49777,out))
;
return ((function (switch__29055__auto__,c__29167__auto___49777,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____0 = (function (){
var statearr_49773 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49773[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__);

(statearr_49773[(1)] = (1));

return statearr_49773;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____1 = (function (state_49759){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_49759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e49774){if((e49774 instanceof Object)){
var ex__29059__auto__ = e49774;
var statearr_49775_49784 = state_49759;
(statearr_49775_49784[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49785 = state_49759;
state_49759 = G__49785;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__ = function(state_49759){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____1.call(this,state_49759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___49777,out))
})();
var state__29169__auto__ = (function (){var statearr_49776 = f__29168__auto__.call(null);
(statearr_49776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___49777);

return statearr_49776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___49777,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49786,opts){
var map__49790 = p__49786;
var map__49790__$1 = ((((!((map__49790 == null)))?((((map__49790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49790):map__49790);
var eval_body__$1 = cljs.core.get.call(null,map__49790__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49790__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25967__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25967__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25967__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49792){var e = e49792;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__49793_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49793_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__49802){
var vec__49803 = p__49802;
var k = cljs.core.nth.call(null,vec__49803,(0),null);
var v = cljs.core.nth.call(null,vec__49803,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49806){
var vec__49807 = p__49806;
var k = cljs.core.nth.call(null,vec__49807,(0),null);
var v = cljs.core.nth.call(null,vec__49807,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49813,p__49814){
var map__50061 = p__49813;
var map__50061__$1 = ((((!((map__50061 == null)))?((((map__50061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50061):map__50061);
var opts = map__50061__$1;
var before_jsload = cljs.core.get.call(null,map__50061__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50061__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50061__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50062 = p__49814;
var map__50062__$1 = ((((!((map__50062 == null)))?((((map__50062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50062):map__50062);
var msg = map__50062__$1;
var files = cljs.core.get.call(null,map__50062__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50062__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50062__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50215){
var state_val_50216 = (state_50215[(1)]);
if((state_val_50216 === (7))){
var inst_50076 = (state_50215[(7)]);
var inst_50079 = (state_50215[(8)]);
var inst_50078 = (state_50215[(9)]);
var inst_50077 = (state_50215[(10)]);
var inst_50084 = cljs.core._nth.call(null,inst_50077,inst_50079);
var inst_50085 = figwheel.client.file_reloading.eval_body.call(null,inst_50084,opts);
var inst_50086 = (inst_50079 + (1));
var tmp50217 = inst_50076;
var tmp50218 = inst_50078;
var tmp50219 = inst_50077;
var inst_50076__$1 = tmp50217;
var inst_50077__$1 = tmp50219;
var inst_50078__$1 = tmp50218;
var inst_50079__$1 = inst_50086;
var state_50215__$1 = (function (){var statearr_50220 = state_50215;
(statearr_50220[(7)] = inst_50076__$1);

(statearr_50220[(8)] = inst_50079__$1);

(statearr_50220[(9)] = inst_50078__$1);

(statearr_50220[(11)] = inst_50085);

(statearr_50220[(10)] = inst_50077__$1);

return statearr_50220;
})();
var statearr_50221_50307 = state_50215__$1;
(statearr_50221_50307[(2)] = null);

(statearr_50221_50307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (20))){
var inst_50119 = (state_50215[(12)]);
var inst_50127 = figwheel.client.file_reloading.sort_files.call(null,inst_50119);
var state_50215__$1 = state_50215;
var statearr_50222_50308 = state_50215__$1;
(statearr_50222_50308[(2)] = inst_50127);

(statearr_50222_50308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (27))){
var state_50215__$1 = state_50215;
var statearr_50223_50309 = state_50215__$1;
(statearr_50223_50309[(2)] = null);

(statearr_50223_50309[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (1))){
var inst_50068 = (state_50215[(13)]);
var inst_50065 = before_jsload.call(null,files);
var inst_50066 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50067 = (function (){return ((function (inst_50068,inst_50065,inst_50066,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49810_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49810_SHARP_);
});
;})(inst_50068,inst_50065,inst_50066,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50068__$1 = cljs.core.filter.call(null,inst_50067,files);
var inst_50069 = cljs.core.not_empty.call(null,inst_50068__$1);
var state_50215__$1 = (function (){var statearr_50224 = state_50215;
(statearr_50224[(14)] = inst_50066);

(statearr_50224[(15)] = inst_50065);

(statearr_50224[(13)] = inst_50068__$1);

return statearr_50224;
})();
if(cljs.core.truth_(inst_50069)){
var statearr_50225_50310 = state_50215__$1;
(statearr_50225_50310[(1)] = (2));

} else {
var statearr_50226_50311 = state_50215__$1;
(statearr_50226_50311[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (24))){
var state_50215__$1 = state_50215;
var statearr_50227_50312 = state_50215__$1;
(statearr_50227_50312[(2)] = null);

(statearr_50227_50312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (39))){
var inst_50169 = (state_50215[(16)]);
var state_50215__$1 = state_50215;
var statearr_50228_50313 = state_50215__$1;
(statearr_50228_50313[(2)] = inst_50169);

(statearr_50228_50313[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (46))){
var inst_50210 = (state_50215[(2)]);
var state_50215__$1 = state_50215;
var statearr_50229_50314 = state_50215__$1;
(statearr_50229_50314[(2)] = inst_50210);

(statearr_50229_50314[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (4))){
var inst_50113 = (state_50215[(2)]);
var inst_50114 = cljs.core.List.EMPTY;
var inst_50115 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50114);
var inst_50116 = (function (){return ((function (inst_50113,inst_50114,inst_50115,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49811_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49811_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49811_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49811_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_50113,inst_50114,inst_50115,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50117 = cljs.core.filter.call(null,inst_50116,files);
var inst_50118 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50119 = cljs.core.concat.call(null,inst_50117,inst_50118);
var state_50215__$1 = (function (){var statearr_50230 = state_50215;
(statearr_50230[(17)] = inst_50113);

(statearr_50230[(18)] = inst_50115);

(statearr_50230[(12)] = inst_50119);

return statearr_50230;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50231_50315 = state_50215__$1;
(statearr_50231_50315[(1)] = (16));

} else {
var statearr_50232_50316 = state_50215__$1;
(statearr_50232_50316[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (15))){
var inst_50103 = (state_50215[(2)]);
var state_50215__$1 = state_50215;
var statearr_50233_50317 = state_50215__$1;
(statearr_50233_50317[(2)] = inst_50103);

(statearr_50233_50317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (21))){
var inst_50129 = (state_50215[(19)]);
var inst_50129__$1 = (state_50215[(2)]);
var inst_50130 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50129__$1);
var state_50215__$1 = (function (){var statearr_50234 = state_50215;
(statearr_50234[(19)] = inst_50129__$1);

return statearr_50234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50215__$1,(22),inst_50130);
} else {
if((state_val_50216 === (31))){
var inst_50213 = (state_50215[(2)]);
var state_50215__$1 = state_50215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50215__$1,inst_50213);
} else {
if((state_val_50216 === (32))){
var inst_50169 = (state_50215[(16)]);
var inst_50174 = inst_50169.cljs$lang$protocol_mask$partition0$;
var inst_50175 = (inst_50174 & (64));
var inst_50176 = inst_50169.cljs$core$ISeq$;
var inst_50177 = (inst_50175) || (inst_50176);
var state_50215__$1 = state_50215;
if(cljs.core.truth_(inst_50177)){
var statearr_50235_50318 = state_50215__$1;
(statearr_50235_50318[(1)] = (35));

} else {
var statearr_50236_50319 = state_50215__$1;
(statearr_50236_50319[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (40))){
var inst_50190 = (state_50215[(20)]);
var inst_50189 = (state_50215[(2)]);
var inst_50190__$1 = cljs.core.get.call(null,inst_50189,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50191 = cljs.core.get.call(null,inst_50189,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50192 = cljs.core.not_empty.call(null,inst_50190__$1);
var state_50215__$1 = (function (){var statearr_50237 = state_50215;
(statearr_50237[(21)] = inst_50191);

(statearr_50237[(20)] = inst_50190__$1);

return statearr_50237;
})();
if(cljs.core.truth_(inst_50192)){
var statearr_50238_50320 = state_50215__$1;
(statearr_50238_50320[(1)] = (41));

} else {
var statearr_50239_50321 = state_50215__$1;
(statearr_50239_50321[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (33))){
var state_50215__$1 = state_50215;
var statearr_50240_50322 = state_50215__$1;
(statearr_50240_50322[(2)] = false);

(statearr_50240_50322[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (13))){
var inst_50089 = (state_50215[(22)]);
var inst_50093 = cljs.core.chunk_first.call(null,inst_50089);
var inst_50094 = cljs.core.chunk_rest.call(null,inst_50089);
var inst_50095 = cljs.core.count.call(null,inst_50093);
var inst_50076 = inst_50094;
var inst_50077 = inst_50093;
var inst_50078 = inst_50095;
var inst_50079 = (0);
var state_50215__$1 = (function (){var statearr_50241 = state_50215;
(statearr_50241[(7)] = inst_50076);

(statearr_50241[(8)] = inst_50079);

(statearr_50241[(9)] = inst_50078);

(statearr_50241[(10)] = inst_50077);

return statearr_50241;
})();
var statearr_50242_50323 = state_50215__$1;
(statearr_50242_50323[(2)] = null);

(statearr_50242_50323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (22))){
var inst_50129 = (state_50215[(19)]);
var inst_50132 = (state_50215[(23)]);
var inst_50133 = (state_50215[(24)]);
var inst_50137 = (state_50215[(25)]);
var inst_50132__$1 = (state_50215[(2)]);
var inst_50133__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50132__$1);
var inst_50134 = (function (){var all_files = inst_50129;
var res_SINGLEQUOTE_ = inst_50132__$1;
var res = inst_50133__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50129,inst_50132,inst_50133,inst_50137,inst_50132__$1,inst_50133__$1,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49812_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49812_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50129,inst_50132,inst_50133,inst_50137,inst_50132__$1,inst_50133__$1,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50135 = cljs.core.filter.call(null,inst_50134,inst_50132__$1);
var inst_50136 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50137__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50136);
var inst_50138 = cljs.core.not_empty.call(null,inst_50137__$1);
var state_50215__$1 = (function (){var statearr_50243 = state_50215;
(statearr_50243[(23)] = inst_50132__$1);

(statearr_50243[(24)] = inst_50133__$1);

(statearr_50243[(25)] = inst_50137__$1);

(statearr_50243[(26)] = inst_50135);

return statearr_50243;
})();
if(cljs.core.truth_(inst_50138)){
var statearr_50244_50324 = state_50215__$1;
(statearr_50244_50324[(1)] = (23));

} else {
var statearr_50245_50325 = state_50215__$1;
(statearr_50245_50325[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (36))){
var state_50215__$1 = state_50215;
var statearr_50246_50326 = state_50215__$1;
(statearr_50246_50326[(2)] = false);

(statearr_50246_50326[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (41))){
var inst_50190 = (state_50215[(20)]);
var inst_50194 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50195 = cljs.core.map.call(null,inst_50194,inst_50190);
var inst_50196 = cljs.core.pr_str.call(null,inst_50195);
var inst_50197 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_50196)].join('');
var inst_50198 = figwheel.client.utils.log.call(null,inst_50197);
var state_50215__$1 = state_50215;
var statearr_50247_50327 = state_50215__$1;
(statearr_50247_50327[(2)] = inst_50198);

(statearr_50247_50327[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (43))){
var inst_50191 = (state_50215[(21)]);
var inst_50201 = (state_50215[(2)]);
var inst_50202 = cljs.core.not_empty.call(null,inst_50191);
var state_50215__$1 = (function (){var statearr_50248 = state_50215;
(statearr_50248[(27)] = inst_50201);

return statearr_50248;
})();
if(cljs.core.truth_(inst_50202)){
var statearr_50249_50328 = state_50215__$1;
(statearr_50249_50328[(1)] = (44));

} else {
var statearr_50250_50329 = state_50215__$1;
(statearr_50250_50329[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (29))){
var inst_50129 = (state_50215[(19)]);
var inst_50169 = (state_50215[(16)]);
var inst_50132 = (state_50215[(23)]);
var inst_50133 = (state_50215[(24)]);
var inst_50137 = (state_50215[(25)]);
var inst_50135 = (state_50215[(26)]);
var inst_50165 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50168 = (function (){var all_files = inst_50129;
var res_SINGLEQUOTE_ = inst_50132;
var res = inst_50133;
var files_not_loaded = inst_50135;
var dependencies_that_loaded = inst_50137;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50129,inst_50169,inst_50132,inst_50133,inst_50137,inst_50135,inst_50165,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50167){
var map__50251 = p__50167;
var map__50251__$1 = ((((!((map__50251 == null)))?((((map__50251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50251):map__50251);
var namespace = cljs.core.get.call(null,map__50251__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50129,inst_50169,inst_50132,inst_50133,inst_50137,inst_50135,inst_50165,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50169__$1 = cljs.core.group_by.call(null,inst_50168,inst_50135);
var inst_50171 = (inst_50169__$1 == null);
var inst_50172 = cljs.core.not.call(null,inst_50171);
var state_50215__$1 = (function (){var statearr_50253 = state_50215;
(statearr_50253[(28)] = inst_50165);

(statearr_50253[(16)] = inst_50169__$1);

return statearr_50253;
})();
if(inst_50172){
var statearr_50254_50330 = state_50215__$1;
(statearr_50254_50330[(1)] = (32));

} else {
var statearr_50255_50331 = state_50215__$1;
(statearr_50255_50331[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (44))){
var inst_50191 = (state_50215[(21)]);
var inst_50204 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50191);
var inst_50205 = cljs.core.pr_str.call(null,inst_50204);
var inst_50206 = [cljs.core.str("not required: "),cljs.core.str(inst_50205)].join('');
var inst_50207 = figwheel.client.utils.log.call(null,inst_50206);
var state_50215__$1 = state_50215;
var statearr_50256_50332 = state_50215__$1;
(statearr_50256_50332[(2)] = inst_50207);

(statearr_50256_50332[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (6))){
var inst_50110 = (state_50215[(2)]);
var state_50215__$1 = state_50215;
var statearr_50257_50333 = state_50215__$1;
(statearr_50257_50333[(2)] = inst_50110);

(statearr_50257_50333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (28))){
var inst_50135 = (state_50215[(26)]);
var inst_50162 = (state_50215[(2)]);
var inst_50163 = cljs.core.not_empty.call(null,inst_50135);
var state_50215__$1 = (function (){var statearr_50258 = state_50215;
(statearr_50258[(29)] = inst_50162);

return statearr_50258;
})();
if(cljs.core.truth_(inst_50163)){
var statearr_50259_50334 = state_50215__$1;
(statearr_50259_50334[(1)] = (29));

} else {
var statearr_50260_50335 = state_50215__$1;
(statearr_50260_50335[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (25))){
var inst_50133 = (state_50215[(24)]);
var inst_50149 = (state_50215[(2)]);
var inst_50150 = cljs.core.not_empty.call(null,inst_50133);
var state_50215__$1 = (function (){var statearr_50261 = state_50215;
(statearr_50261[(30)] = inst_50149);

return statearr_50261;
})();
if(cljs.core.truth_(inst_50150)){
var statearr_50262_50336 = state_50215__$1;
(statearr_50262_50336[(1)] = (26));

} else {
var statearr_50263_50337 = state_50215__$1;
(statearr_50263_50337[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (34))){
var inst_50184 = (state_50215[(2)]);
var state_50215__$1 = state_50215;
if(cljs.core.truth_(inst_50184)){
var statearr_50264_50338 = state_50215__$1;
(statearr_50264_50338[(1)] = (38));

} else {
var statearr_50265_50339 = state_50215__$1;
(statearr_50265_50339[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (17))){
var state_50215__$1 = state_50215;
var statearr_50266_50340 = state_50215__$1;
(statearr_50266_50340[(2)] = recompile_dependents);

(statearr_50266_50340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (3))){
var state_50215__$1 = state_50215;
var statearr_50267_50341 = state_50215__$1;
(statearr_50267_50341[(2)] = null);

(statearr_50267_50341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (12))){
var inst_50106 = (state_50215[(2)]);
var state_50215__$1 = state_50215;
var statearr_50268_50342 = state_50215__$1;
(statearr_50268_50342[(2)] = inst_50106);

(statearr_50268_50342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (2))){
var inst_50068 = (state_50215[(13)]);
var inst_50075 = cljs.core.seq.call(null,inst_50068);
var inst_50076 = inst_50075;
var inst_50077 = null;
var inst_50078 = (0);
var inst_50079 = (0);
var state_50215__$1 = (function (){var statearr_50269 = state_50215;
(statearr_50269[(7)] = inst_50076);

(statearr_50269[(8)] = inst_50079);

(statearr_50269[(9)] = inst_50078);

(statearr_50269[(10)] = inst_50077);

return statearr_50269;
})();
var statearr_50270_50343 = state_50215__$1;
(statearr_50270_50343[(2)] = null);

(statearr_50270_50343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (23))){
var inst_50129 = (state_50215[(19)]);
var inst_50132 = (state_50215[(23)]);
var inst_50133 = (state_50215[(24)]);
var inst_50137 = (state_50215[(25)]);
var inst_50135 = (state_50215[(26)]);
var inst_50140 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50142 = (function (){var all_files = inst_50129;
var res_SINGLEQUOTE_ = inst_50132;
var res = inst_50133;
var files_not_loaded = inst_50135;
var dependencies_that_loaded = inst_50137;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50129,inst_50132,inst_50133,inst_50137,inst_50135,inst_50140,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50141){
var map__50271 = p__50141;
var map__50271__$1 = ((((!((map__50271 == null)))?((((map__50271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50271):map__50271);
var request_url = cljs.core.get.call(null,map__50271__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50129,inst_50132,inst_50133,inst_50137,inst_50135,inst_50140,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50143 = cljs.core.reverse.call(null,inst_50137);
var inst_50144 = cljs.core.map.call(null,inst_50142,inst_50143);
var inst_50145 = cljs.core.pr_str.call(null,inst_50144);
var inst_50146 = figwheel.client.utils.log.call(null,inst_50145);
var state_50215__$1 = (function (){var statearr_50273 = state_50215;
(statearr_50273[(31)] = inst_50140);

return statearr_50273;
})();
var statearr_50274_50344 = state_50215__$1;
(statearr_50274_50344[(2)] = inst_50146);

(statearr_50274_50344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (35))){
var state_50215__$1 = state_50215;
var statearr_50275_50345 = state_50215__$1;
(statearr_50275_50345[(2)] = true);

(statearr_50275_50345[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (19))){
var inst_50119 = (state_50215[(12)]);
var inst_50125 = figwheel.client.file_reloading.expand_files.call(null,inst_50119);
var state_50215__$1 = state_50215;
var statearr_50276_50346 = state_50215__$1;
(statearr_50276_50346[(2)] = inst_50125);

(statearr_50276_50346[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (11))){
var state_50215__$1 = state_50215;
var statearr_50277_50347 = state_50215__$1;
(statearr_50277_50347[(2)] = null);

(statearr_50277_50347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (9))){
var inst_50108 = (state_50215[(2)]);
var state_50215__$1 = state_50215;
var statearr_50278_50348 = state_50215__$1;
(statearr_50278_50348[(2)] = inst_50108);

(statearr_50278_50348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (5))){
var inst_50079 = (state_50215[(8)]);
var inst_50078 = (state_50215[(9)]);
var inst_50081 = (inst_50079 < inst_50078);
var inst_50082 = inst_50081;
var state_50215__$1 = state_50215;
if(cljs.core.truth_(inst_50082)){
var statearr_50279_50349 = state_50215__$1;
(statearr_50279_50349[(1)] = (7));

} else {
var statearr_50280_50350 = state_50215__$1;
(statearr_50280_50350[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (14))){
var inst_50089 = (state_50215[(22)]);
var inst_50098 = cljs.core.first.call(null,inst_50089);
var inst_50099 = figwheel.client.file_reloading.eval_body.call(null,inst_50098,opts);
var inst_50100 = cljs.core.next.call(null,inst_50089);
var inst_50076 = inst_50100;
var inst_50077 = null;
var inst_50078 = (0);
var inst_50079 = (0);
var state_50215__$1 = (function (){var statearr_50281 = state_50215;
(statearr_50281[(7)] = inst_50076);

(statearr_50281[(8)] = inst_50079);

(statearr_50281[(9)] = inst_50078);

(statearr_50281[(32)] = inst_50099);

(statearr_50281[(10)] = inst_50077);

return statearr_50281;
})();
var statearr_50282_50351 = state_50215__$1;
(statearr_50282_50351[(2)] = null);

(statearr_50282_50351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (45))){
var state_50215__$1 = state_50215;
var statearr_50283_50352 = state_50215__$1;
(statearr_50283_50352[(2)] = null);

(statearr_50283_50352[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (26))){
var inst_50129 = (state_50215[(19)]);
var inst_50132 = (state_50215[(23)]);
var inst_50133 = (state_50215[(24)]);
var inst_50137 = (state_50215[(25)]);
var inst_50135 = (state_50215[(26)]);
var inst_50152 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50154 = (function (){var all_files = inst_50129;
var res_SINGLEQUOTE_ = inst_50132;
var res = inst_50133;
var files_not_loaded = inst_50135;
var dependencies_that_loaded = inst_50137;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50129,inst_50132,inst_50133,inst_50137,inst_50135,inst_50152,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50153){
var map__50284 = p__50153;
var map__50284__$1 = ((((!((map__50284 == null)))?((((map__50284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50284):map__50284);
var namespace = cljs.core.get.call(null,map__50284__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50284__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50129,inst_50132,inst_50133,inst_50137,inst_50135,inst_50152,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50155 = cljs.core.map.call(null,inst_50154,inst_50133);
var inst_50156 = cljs.core.pr_str.call(null,inst_50155);
var inst_50157 = figwheel.client.utils.log.call(null,inst_50156);
var inst_50158 = (function (){var all_files = inst_50129;
var res_SINGLEQUOTE_ = inst_50132;
var res = inst_50133;
var files_not_loaded = inst_50135;
var dependencies_that_loaded = inst_50137;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50129,inst_50132,inst_50133,inst_50137,inst_50135,inst_50152,inst_50154,inst_50155,inst_50156,inst_50157,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50129,inst_50132,inst_50133,inst_50137,inst_50135,inst_50152,inst_50154,inst_50155,inst_50156,inst_50157,state_val_50216,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50159 = setTimeout(inst_50158,(10));
var state_50215__$1 = (function (){var statearr_50286 = state_50215;
(statearr_50286[(33)] = inst_50157);

(statearr_50286[(34)] = inst_50152);

return statearr_50286;
})();
var statearr_50287_50353 = state_50215__$1;
(statearr_50287_50353[(2)] = inst_50159);

(statearr_50287_50353[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (16))){
var state_50215__$1 = state_50215;
var statearr_50288_50354 = state_50215__$1;
(statearr_50288_50354[(2)] = reload_dependents);

(statearr_50288_50354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (38))){
var inst_50169 = (state_50215[(16)]);
var inst_50186 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50169);
var state_50215__$1 = state_50215;
var statearr_50289_50355 = state_50215__$1;
(statearr_50289_50355[(2)] = inst_50186);

(statearr_50289_50355[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (30))){
var state_50215__$1 = state_50215;
var statearr_50290_50356 = state_50215__$1;
(statearr_50290_50356[(2)] = null);

(statearr_50290_50356[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (10))){
var inst_50089 = (state_50215[(22)]);
var inst_50091 = cljs.core.chunked_seq_QMARK_.call(null,inst_50089);
var state_50215__$1 = state_50215;
if(inst_50091){
var statearr_50291_50357 = state_50215__$1;
(statearr_50291_50357[(1)] = (13));

} else {
var statearr_50292_50358 = state_50215__$1;
(statearr_50292_50358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (18))){
var inst_50123 = (state_50215[(2)]);
var state_50215__$1 = state_50215;
if(cljs.core.truth_(inst_50123)){
var statearr_50293_50359 = state_50215__$1;
(statearr_50293_50359[(1)] = (19));

} else {
var statearr_50294_50360 = state_50215__$1;
(statearr_50294_50360[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (42))){
var state_50215__$1 = state_50215;
var statearr_50295_50361 = state_50215__$1;
(statearr_50295_50361[(2)] = null);

(statearr_50295_50361[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (37))){
var inst_50181 = (state_50215[(2)]);
var state_50215__$1 = state_50215;
var statearr_50296_50362 = state_50215__$1;
(statearr_50296_50362[(2)] = inst_50181);

(statearr_50296_50362[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50216 === (8))){
var inst_50076 = (state_50215[(7)]);
var inst_50089 = (state_50215[(22)]);
var inst_50089__$1 = cljs.core.seq.call(null,inst_50076);
var state_50215__$1 = (function (){var statearr_50297 = state_50215;
(statearr_50297[(22)] = inst_50089__$1);

return statearr_50297;
})();
if(inst_50089__$1){
var statearr_50298_50363 = state_50215__$1;
(statearr_50298_50363[(1)] = (10));

} else {
var statearr_50299_50364 = state_50215__$1;
(statearr_50299_50364[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29055__auto__,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____0 = (function (){
var statearr_50303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50303[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__);

(statearr_50303[(1)] = (1));

return statearr_50303;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____1 = (function (state_50215){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_50215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e50304){if((e50304 instanceof Object)){
var ex__29059__auto__ = e50304;
var statearr_50305_50365 = state_50215;
(statearr_50305_50365[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50366 = state_50215;
state_50215 = G__50366;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__ = function(state_50215){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____1.call(this,state_50215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29169__auto__ = (function (){var statearr_50306 = f__29168__auto__.call(null);
(statearr_50306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_50306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__,map__50061,map__50061__$1,opts,before_jsload,on_jsload,reload_dependents,map__50062,map__50062__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29167__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50369,link){
var map__50372 = p__50369;
var map__50372__$1 = ((((!((map__50372 == null)))?((((map__50372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50372):map__50372);
var file = cljs.core.get.call(null,map__50372__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__50372,map__50372__$1,file){
return (function (p1__50367_SHARP_,p2__50368_SHARP_){
if(cljs.core._EQ_.call(null,p1__50367_SHARP_,p2__50368_SHARP_)){
return p1__50367_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__50372,map__50372__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50378){
var map__50379 = p__50378;
var map__50379__$1 = ((((!((map__50379 == null)))?((((map__50379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50379):map__50379);
var match_length = cljs.core.get.call(null,map__50379__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50379__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50374_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50374_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50381_SHARP_,p2__50382_SHARP_){
return cljs.core.assoc.call(null,p1__50381_SHARP_,cljs.core.get.call(null,p2__50382_SHARP_,key),p2__50382_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_50383 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50383);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50383);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50384,p__50385){
var map__50390 = p__50384;
var map__50390__$1 = ((((!((map__50390 == null)))?((((map__50390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50390):map__50390);
var on_cssload = cljs.core.get.call(null,map__50390__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50391 = p__50385;
var map__50391__$1 = ((((!((map__50391 == null)))?((((map__50391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50391):map__50391);
var files_msg = map__50391__$1;
var files = cljs.core.get.call(null,map__50391__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1497028420537