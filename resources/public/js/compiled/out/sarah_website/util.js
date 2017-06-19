// Compiled by ClojureScript 1.9.229 {}
goog.provide('sarah_website.util');
goog.require('cljs.core');
goog.require('sarah_website.footer');
goog.require('sarah_website.nav');
sarah_website.util.image = (function sarah_website$util$image(var_args){
var args55742 = [];
var len__27054__auto___55745 = arguments.length;
var i__27055__auto___55746 = (0);
while(true){
if((i__27055__auto___55746 < len__27054__auto___55745)){
args55742.push((arguments[i__27055__auto___55746]));

var G__55747 = (i__27055__auto___55746 + (1));
i__27055__auto___55746 = G__55747;
continue;
} else {
}
break;
}

var G__55744 = args55742.length;
switch (G__55744) {
case 1:
return sarah_website.util.image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sarah_website.util.image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55742.length)].join('')));

}
});

sarah_website.util.image.cljs$core$IFn$_invoke$arity$1 = (function (source){
return sarah_website.util.image.call(null,source,"");
});

sarah_website.util.image.cljs$core$IFn$_invoke$arity$2 = (function (source,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),source,new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sarah_website.util.image.cljs$lang$maxFixedArity = 2;

sarah_website.util.wrap_page = (function sarah_website$util$wrap_page(page_content){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),sarah_website.nav.hiccup], null),page_content,sarah_website.footer.hiccup], null);
});

//# sourceMappingURL=util.js.map?rel=1497028454686