// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('sarah_website.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__55857__delegate = function (x){
if(cljs.core.truth_(sarah_website.core.on_js_reload)){
return cljs.core.apply.call(null,sarah_website.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'sarah-website.core/on-js-reload' is missing");
}
};
var G__55857 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__55858__i = 0, G__55858__a = new Array(arguments.length -  0);
while (G__55858__i < G__55858__a.length) {G__55858__a[G__55858__i] = arguments[G__55858__i + 0]; ++G__55858__i;}
  x = new cljs.core.IndexedSeq(G__55858__a,0);
} 
return G__55857__delegate.call(this,x);};
G__55857.cljs$lang$maxFixedArity = 0;
G__55857.cljs$lang$applyTo = (function (arglist__55859){
var x = cljs.core.seq(arglist__55859);
return G__55857__delegate(x);
});
G__55857.cljs$core$IFn$_invoke$arity$variadic = G__55857__delegate;
return G__55857;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3444/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1497028559805