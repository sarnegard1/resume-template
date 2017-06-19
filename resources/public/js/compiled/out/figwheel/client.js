// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args51849 = [];
var len__27054__auto___51852 = arguments.length;
var i__27055__auto___51853 = (0);
while(true){
if((i__27055__auto___51853 < len__27054__auto___51852)){
args51849.push((arguments[i__27055__auto___51853]));

var G__51854 = (i__27055__auto___51853 + (1));
i__27055__auto___51853 = G__51854;
continue;
} else {
}
break;
}

var G__51851 = args51849.length;
switch (G__51851) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51849.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___51857 = arguments.length;
var i__27055__auto___51858 = (0);
while(true){
if((i__27055__auto___51858 < len__27054__auto___51857)){
args__27061__auto__.push((arguments[i__27055__auto___51858]));

var G__51859 = (i__27055__auto___51858 + (1));
i__27055__auto___51858 = G__51859;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51856){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51856));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___51861 = arguments.length;
var i__27055__auto___51862 = (0);
while(true){
if((i__27055__auto___51862 < len__27054__auto___51861)){
args__27061__auto__.push((arguments[i__27055__auto___51862]));

var G__51863 = (i__27055__auto___51862 + (1));
i__27055__auto___51862 = G__51863;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51860){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51860));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51864){
var map__51867 = p__51864;
var map__51867__$1 = ((((!((map__51867 == null)))?((((map__51867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51867):map__51867);
var message = cljs.core.get.call(null,map__51867__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51867__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25979__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25967__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25967__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25967__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29167__auto___52029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___52029,ch){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___52029,ch){
return (function (state_51998){
var state_val_51999 = (state_51998[(1)]);
if((state_val_51999 === (7))){
var inst_51994 = (state_51998[(2)]);
var state_51998__$1 = state_51998;
var statearr_52000_52030 = state_51998__$1;
(statearr_52000_52030[(2)] = inst_51994);

(statearr_52000_52030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (1))){
var state_51998__$1 = state_51998;
var statearr_52001_52031 = state_51998__$1;
(statearr_52001_52031[(2)] = null);

(statearr_52001_52031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (4))){
var inst_51951 = (state_51998[(7)]);
var inst_51951__$1 = (state_51998[(2)]);
var state_51998__$1 = (function (){var statearr_52002 = state_51998;
(statearr_52002[(7)] = inst_51951__$1);

return statearr_52002;
})();
if(cljs.core.truth_(inst_51951__$1)){
var statearr_52003_52032 = state_51998__$1;
(statearr_52003_52032[(1)] = (5));

} else {
var statearr_52004_52033 = state_51998__$1;
(statearr_52004_52033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (15))){
var inst_51958 = (state_51998[(8)]);
var inst_51973 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51958);
var inst_51974 = cljs.core.first.call(null,inst_51973);
var inst_51975 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51974);
var inst_51976 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_51975)].join('');
var inst_51977 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51976);
var state_51998__$1 = state_51998;
var statearr_52005_52034 = state_51998__$1;
(statearr_52005_52034[(2)] = inst_51977);

(statearr_52005_52034[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (13))){
var inst_51982 = (state_51998[(2)]);
var state_51998__$1 = state_51998;
var statearr_52006_52035 = state_51998__$1;
(statearr_52006_52035[(2)] = inst_51982);

(statearr_52006_52035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (6))){
var state_51998__$1 = state_51998;
var statearr_52007_52036 = state_51998__$1;
(statearr_52007_52036[(2)] = null);

(statearr_52007_52036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (17))){
var inst_51980 = (state_51998[(2)]);
var state_51998__$1 = state_51998;
var statearr_52008_52037 = state_51998__$1;
(statearr_52008_52037[(2)] = inst_51980);

(statearr_52008_52037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (3))){
var inst_51996 = (state_51998[(2)]);
var state_51998__$1 = state_51998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51998__$1,inst_51996);
} else {
if((state_val_51999 === (12))){
var inst_51957 = (state_51998[(9)]);
var inst_51971 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51957,opts);
var state_51998__$1 = state_51998;
if(cljs.core.truth_(inst_51971)){
var statearr_52009_52038 = state_51998__$1;
(statearr_52009_52038[(1)] = (15));

} else {
var statearr_52010_52039 = state_51998__$1;
(statearr_52010_52039[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (2))){
var state_51998__$1 = state_51998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51998__$1,(4),ch);
} else {
if((state_val_51999 === (11))){
var inst_51958 = (state_51998[(8)]);
var inst_51963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51964 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51958);
var inst_51965 = cljs.core.async.timeout.call(null,(1000));
var inst_51966 = [inst_51964,inst_51965];
var inst_51967 = (new cljs.core.PersistentVector(null,2,(5),inst_51963,inst_51966,null));
var state_51998__$1 = state_51998;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51998__$1,(14),inst_51967);
} else {
if((state_val_51999 === (9))){
var inst_51958 = (state_51998[(8)]);
var inst_51984 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51985 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51958);
var inst_51986 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51985);
var inst_51987 = [cljs.core.str("Not loading: "),cljs.core.str(inst_51986)].join('');
var inst_51988 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51987);
var state_51998__$1 = (function (){var statearr_52011 = state_51998;
(statearr_52011[(10)] = inst_51984);

return statearr_52011;
})();
var statearr_52012_52040 = state_51998__$1;
(statearr_52012_52040[(2)] = inst_51988);

(statearr_52012_52040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (5))){
var inst_51951 = (state_51998[(7)]);
var inst_51953 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51954 = (new cljs.core.PersistentArrayMap(null,2,inst_51953,null));
var inst_51955 = (new cljs.core.PersistentHashSet(null,inst_51954,null));
var inst_51956 = figwheel.client.focus_msgs.call(null,inst_51955,inst_51951);
var inst_51957 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51956);
var inst_51958 = cljs.core.first.call(null,inst_51956);
var inst_51959 = figwheel.client.autoload_QMARK_.call(null);
var state_51998__$1 = (function (){var statearr_52013 = state_51998;
(statearr_52013[(8)] = inst_51958);

(statearr_52013[(9)] = inst_51957);

return statearr_52013;
})();
if(cljs.core.truth_(inst_51959)){
var statearr_52014_52041 = state_51998__$1;
(statearr_52014_52041[(1)] = (8));

} else {
var statearr_52015_52042 = state_51998__$1;
(statearr_52015_52042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (14))){
var inst_51969 = (state_51998[(2)]);
var state_51998__$1 = state_51998;
var statearr_52016_52043 = state_51998__$1;
(statearr_52016_52043[(2)] = inst_51969);

(statearr_52016_52043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (16))){
var state_51998__$1 = state_51998;
var statearr_52017_52044 = state_51998__$1;
(statearr_52017_52044[(2)] = null);

(statearr_52017_52044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (10))){
var inst_51990 = (state_51998[(2)]);
var state_51998__$1 = (function (){var statearr_52018 = state_51998;
(statearr_52018[(11)] = inst_51990);

return statearr_52018;
})();
var statearr_52019_52045 = state_51998__$1;
(statearr_52019_52045[(2)] = null);

(statearr_52019_52045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (8))){
var inst_51957 = (state_51998[(9)]);
var inst_51961 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51957,opts);
var state_51998__$1 = state_51998;
if(cljs.core.truth_(inst_51961)){
var statearr_52020_52046 = state_51998__$1;
(statearr_52020_52046[(1)] = (11));

} else {
var statearr_52021_52047 = state_51998__$1;
(statearr_52021_52047[(1)] = (12));

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
});})(c__29167__auto___52029,ch))
;
return ((function (switch__29055__auto__,c__29167__auto___52029,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____0 = (function (){
var statearr_52025 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52025[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__);

(statearr_52025[(1)] = (1));

return statearr_52025;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____1 = (function (state_51998){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_51998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e52026){if((e52026 instanceof Object)){
var ex__29059__auto__ = e52026;
var statearr_52027_52048 = state_51998;
(statearr_52027_52048[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52049 = state_51998;
state_51998 = G__52049;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__ = function(state_51998){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____1.call(this,state_51998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___52029,ch))
})();
var state__29169__auto__ = (function (){var statearr_52028 = f__29168__auto__.call(null);
(statearr_52028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___52029);

return statearr_52028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___52029,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__52050_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__52050_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_52053 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_52053){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e52052){if((e52052 instanceof Error)){
var e = e52052;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_52053], null));
} else {
var e = e52052;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_52053))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__52054){
var map__52063 = p__52054;
var map__52063__$1 = ((((!((map__52063 == null)))?((((map__52063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52063):map__52063);
var opts = map__52063__$1;
var build_id = cljs.core.get.call(null,map__52063__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__52063,map__52063__$1,opts,build_id){
return (function (p__52065){
var vec__52066 = p__52065;
var seq__52067 = cljs.core.seq.call(null,vec__52066);
var first__52068 = cljs.core.first.call(null,seq__52067);
var seq__52067__$1 = cljs.core.next.call(null,seq__52067);
var map__52069 = first__52068;
var map__52069__$1 = ((((!((map__52069 == null)))?((((map__52069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52069):map__52069);
var msg = map__52069__$1;
var msg_name = cljs.core.get.call(null,map__52069__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52067__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__52066,seq__52067,first__52068,seq__52067__$1,map__52069,map__52069__$1,msg,msg_name,_,map__52063,map__52063__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__52066,seq__52067,first__52068,seq__52067__$1,map__52069,map__52069__$1,msg,msg_name,_,map__52063,map__52063__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__52063,map__52063__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__52077){
var vec__52078 = p__52077;
var seq__52079 = cljs.core.seq.call(null,vec__52078);
var first__52080 = cljs.core.first.call(null,seq__52079);
var seq__52079__$1 = cljs.core.next.call(null,seq__52079);
var map__52081 = first__52080;
var map__52081__$1 = ((((!((map__52081 == null)))?((((map__52081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52081):map__52081);
var msg = map__52081__$1;
var msg_name = cljs.core.get.call(null,map__52081__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52079__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__52083){
var map__52095 = p__52083;
var map__52095__$1 = ((((!((map__52095 == null)))?((((map__52095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52095):map__52095);
var on_compile_warning = cljs.core.get.call(null,map__52095__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__52095__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__52095,map__52095__$1,on_compile_warning,on_compile_fail){
return (function (p__52097){
var vec__52098 = p__52097;
var seq__52099 = cljs.core.seq.call(null,vec__52098);
var first__52100 = cljs.core.first.call(null,seq__52099);
var seq__52099__$1 = cljs.core.next.call(null,seq__52099);
var map__52101 = first__52100;
var map__52101__$1 = ((((!((map__52101 == null)))?((((map__52101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52101):map__52101);
var msg = map__52101__$1;
var msg_name = cljs.core.get.call(null,map__52101__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52099__$1;
var pred__52103 = cljs.core._EQ_;
var expr__52104 = msg_name;
if(cljs.core.truth_(pred__52103.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__52104))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__52103.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__52104))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__52095,map__52095__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__,msg_hist,msg_names,msg){
return (function (state_52332){
var state_val_52333 = (state_52332[(1)]);
if((state_val_52333 === (7))){
var inst_52252 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
if(cljs.core.truth_(inst_52252)){
var statearr_52334_52384 = state_52332__$1;
(statearr_52334_52384[(1)] = (8));

} else {
var statearr_52335_52385 = state_52332__$1;
(statearr_52335_52385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (20))){
var inst_52326 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
var statearr_52336_52386 = state_52332__$1;
(statearr_52336_52386[(2)] = inst_52326);

(statearr_52336_52386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (27))){
var inst_52322 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
var statearr_52337_52387 = state_52332__$1;
(statearr_52337_52387[(2)] = inst_52322);

(statearr_52337_52387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (1))){
var inst_52245 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_52332__$1 = state_52332;
if(cljs.core.truth_(inst_52245)){
var statearr_52338_52388 = state_52332__$1;
(statearr_52338_52388[(1)] = (2));

} else {
var statearr_52339_52389 = state_52332__$1;
(statearr_52339_52389[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (24))){
var inst_52324 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
var statearr_52340_52390 = state_52332__$1;
(statearr_52340_52390[(2)] = inst_52324);

(statearr_52340_52390[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (4))){
var inst_52330 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52332__$1,inst_52330);
} else {
if((state_val_52333 === (15))){
var inst_52328 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
var statearr_52341_52391 = state_52332__$1;
(statearr_52341_52391[(2)] = inst_52328);

(statearr_52341_52391[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (21))){
var inst_52281 = (state_52332[(2)]);
var inst_52282 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52283 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52282);
var state_52332__$1 = (function (){var statearr_52342 = state_52332;
(statearr_52342[(7)] = inst_52281);

return statearr_52342;
})();
var statearr_52343_52392 = state_52332__$1;
(statearr_52343_52392[(2)] = inst_52283);

(statearr_52343_52392[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (31))){
var inst_52311 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_52332__$1 = state_52332;
if(cljs.core.truth_(inst_52311)){
var statearr_52344_52393 = state_52332__$1;
(statearr_52344_52393[(1)] = (34));

} else {
var statearr_52345_52394 = state_52332__$1;
(statearr_52345_52394[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (32))){
var inst_52320 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
var statearr_52346_52395 = state_52332__$1;
(statearr_52346_52395[(2)] = inst_52320);

(statearr_52346_52395[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (33))){
var inst_52307 = (state_52332[(2)]);
var inst_52308 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52309 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52308);
var state_52332__$1 = (function (){var statearr_52347 = state_52332;
(statearr_52347[(8)] = inst_52307);

return statearr_52347;
})();
var statearr_52348_52396 = state_52332__$1;
(statearr_52348_52396[(2)] = inst_52309);

(statearr_52348_52396[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (13))){
var inst_52266 = figwheel.client.heads_up.clear.call(null);
var state_52332__$1 = state_52332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52332__$1,(16),inst_52266);
} else {
if((state_val_52333 === (22))){
var inst_52287 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52288 = figwheel.client.heads_up.append_warning_message.call(null,inst_52287);
var state_52332__$1 = state_52332;
var statearr_52349_52397 = state_52332__$1;
(statearr_52349_52397[(2)] = inst_52288);

(statearr_52349_52397[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (36))){
var inst_52318 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
var statearr_52350_52398 = state_52332__$1;
(statearr_52350_52398[(2)] = inst_52318);

(statearr_52350_52398[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (29))){
var inst_52298 = (state_52332[(2)]);
var inst_52299 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52300 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52299);
var state_52332__$1 = (function (){var statearr_52351 = state_52332;
(statearr_52351[(9)] = inst_52298);

return statearr_52351;
})();
var statearr_52352_52399 = state_52332__$1;
(statearr_52352_52399[(2)] = inst_52300);

(statearr_52352_52399[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (6))){
var inst_52247 = (state_52332[(10)]);
var state_52332__$1 = state_52332;
var statearr_52353_52400 = state_52332__$1;
(statearr_52353_52400[(2)] = inst_52247);

(statearr_52353_52400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (28))){
var inst_52294 = (state_52332[(2)]);
var inst_52295 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52296 = figwheel.client.heads_up.display_warning.call(null,inst_52295);
var state_52332__$1 = (function (){var statearr_52354 = state_52332;
(statearr_52354[(11)] = inst_52294);

return statearr_52354;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52332__$1,(29),inst_52296);
} else {
if((state_val_52333 === (25))){
var inst_52292 = figwheel.client.heads_up.clear.call(null);
var state_52332__$1 = state_52332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52332__$1,(28),inst_52292);
} else {
if((state_val_52333 === (34))){
var inst_52313 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52332__$1 = state_52332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52332__$1,(37),inst_52313);
} else {
if((state_val_52333 === (17))){
var inst_52272 = (state_52332[(2)]);
var inst_52273 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52274 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52273);
var state_52332__$1 = (function (){var statearr_52355 = state_52332;
(statearr_52355[(12)] = inst_52272);

return statearr_52355;
})();
var statearr_52356_52401 = state_52332__$1;
(statearr_52356_52401[(2)] = inst_52274);

(statearr_52356_52401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (3))){
var inst_52264 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_52332__$1 = state_52332;
if(cljs.core.truth_(inst_52264)){
var statearr_52357_52402 = state_52332__$1;
(statearr_52357_52402[(1)] = (13));

} else {
var statearr_52358_52403 = state_52332__$1;
(statearr_52358_52403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (12))){
var inst_52260 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
var statearr_52359_52404 = state_52332__$1;
(statearr_52359_52404[(2)] = inst_52260);

(statearr_52359_52404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (2))){
var inst_52247 = (state_52332[(10)]);
var inst_52247__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_52332__$1 = (function (){var statearr_52360 = state_52332;
(statearr_52360[(10)] = inst_52247__$1);

return statearr_52360;
})();
if(cljs.core.truth_(inst_52247__$1)){
var statearr_52361_52405 = state_52332__$1;
(statearr_52361_52405[(1)] = (5));

} else {
var statearr_52362_52406 = state_52332__$1;
(statearr_52362_52406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (23))){
var inst_52290 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_52332__$1 = state_52332;
if(cljs.core.truth_(inst_52290)){
var statearr_52363_52407 = state_52332__$1;
(statearr_52363_52407[(1)] = (25));

} else {
var statearr_52364_52408 = state_52332__$1;
(statearr_52364_52408[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (35))){
var state_52332__$1 = state_52332;
var statearr_52365_52409 = state_52332__$1;
(statearr_52365_52409[(2)] = null);

(statearr_52365_52409[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (19))){
var inst_52285 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_52332__$1 = state_52332;
if(cljs.core.truth_(inst_52285)){
var statearr_52366_52410 = state_52332__$1;
(statearr_52366_52410[(1)] = (22));

} else {
var statearr_52367_52411 = state_52332__$1;
(statearr_52367_52411[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (11))){
var inst_52256 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
var statearr_52368_52412 = state_52332__$1;
(statearr_52368_52412[(2)] = inst_52256);

(statearr_52368_52412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (9))){
var inst_52258 = figwheel.client.heads_up.clear.call(null);
var state_52332__$1 = state_52332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52332__$1,(12),inst_52258);
} else {
if((state_val_52333 === (5))){
var inst_52249 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_52332__$1 = state_52332;
var statearr_52369_52413 = state_52332__$1;
(statearr_52369_52413[(2)] = inst_52249);

(statearr_52369_52413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (14))){
var inst_52276 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_52332__$1 = state_52332;
if(cljs.core.truth_(inst_52276)){
var statearr_52370_52414 = state_52332__$1;
(statearr_52370_52414[(1)] = (18));

} else {
var statearr_52371_52415 = state_52332__$1;
(statearr_52371_52415[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (26))){
var inst_52302 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_52332__$1 = state_52332;
if(cljs.core.truth_(inst_52302)){
var statearr_52372_52416 = state_52332__$1;
(statearr_52372_52416[(1)] = (30));

} else {
var statearr_52373_52417 = state_52332__$1;
(statearr_52373_52417[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (16))){
var inst_52268 = (state_52332[(2)]);
var inst_52269 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52270 = figwheel.client.heads_up.display_exception.call(null,inst_52269);
var state_52332__$1 = (function (){var statearr_52374 = state_52332;
(statearr_52374[(13)] = inst_52268);

return statearr_52374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52332__$1,(17),inst_52270);
} else {
if((state_val_52333 === (30))){
var inst_52304 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52305 = figwheel.client.heads_up.display_warning.call(null,inst_52304);
var state_52332__$1 = state_52332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52332__$1,(33),inst_52305);
} else {
if((state_val_52333 === (10))){
var inst_52262 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
var statearr_52375_52418 = state_52332__$1;
(statearr_52375_52418[(2)] = inst_52262);

(statearr_52375_52418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (18))){
var inst_52278 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52279 = figwheel.client.heads_up.display_exception.call(null,inst_52278);
var state_52332__$1 = state_52332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52332__$1,(21),inst_52279);
} else {
if((state_val_52333 === (37))){
var inst_52315 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
var statearr_52376_52419 = state_52332__$1;
(statearr_52376_52419[(2)] = inst_52315);

(statearr_52376_52419[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52333 === (8))){
var inst_52254 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52332__$1 = state_52332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52332__$1,(11),inst_52254);
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
});})(c__29167__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29055__auto__,c__29167__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____0 = (function (){
var statearr_52380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52380[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__);

(statearr_52380[(1)] = (1));

return statearr_52380;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____1 = (function (state_52332){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_52332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e52381){if((e52381 instanceof Object)){
var ex__29059__auto__ = e52381;
var statearr_52382_52420 = state_52332;
(statearr_52382_52420[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52421 = state_52332;
state_52332 = G__52421;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__ = function(state_52332){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____1.call(this,state_52332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__,msg_hist,msg_names,msg))
})();
var state__29169__auto__ = (function (){var statearr_52383 = f__29168__auto__.call(null);
(statearr_52383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_52383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__,msg_hist,msg_names,msg))
);

return c__29167__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29167__auto___52484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___52484,ch){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___52484,ch){
return (function (state_52467){
var state_val_52468 = (state_52467[(1)]);
if((state_val_52468 === (1))){
var state_52467__$1 = state_52467;
var statearr_52469_52485 = state_52467__$1;
(statearr_52469_52485[(2)] = null);

(statearr_52469_52485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52468 === (2))){
var state_52467__$1 = state_52467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52467__$1,(4),ch);
} else {
if((state_val_52468 === (3))){
var inst_52465 = (state_52467[(2)]);
var state_52467__$1 = state_52467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52467__$1,inst_52465);
} else {
if((state_val_52468 === (4))){
var inst_52455 = (state_52467[(7)]);
var inst_52455__$1 = (state_52467[(2)]);
var state_52467__$1 = (function (){var statearr_52470 = state_52467;
(statearr_52470[(7)] = inst_52455__$1);

return statearr_52470;
})();
if(cljs.core.truth_(inst_52455__$1)){
var statearr_52471_52486 = state_52467__$1;
(statearr_52471_52486[(1)] = (5));

} else {
var statearr_52472_52487 = state_52467__$1;
(statearr_52472_52487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52468 === (5))){
var inst_52455 = (state_52467[(7)]);
var inst_52457 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_52455);
var state_52467__$1 = state_52467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52467__$1,(8),inst_52457);
} else {
if((state_val_52468 === (6))){
var state_52467__$1 = state_52467;
var statearr_52473_52488 = state_52467__$1;
(statearr_52473_52488[(2)] = null);

(statearr_52473_52488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52468 === (7))){
var inst_52463 = (state_52467[(2)]);
var state_52467__$1 = state_52467;
var statearr_52474_52489 = state_52467__$1;
(statearr_52474_52489[(2)] = inst_52463);

(statearr_52474_52489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52468 === (8))){
var inst_52459 = (state_52467[(2)]);
var state_52467__$1 = (function (){var statearr_52475 = state_52467;
(statearr_52475[(8)] = inst_52459);

return statearr_52475;
})();
var statearr_52476_52490 = state_52467__$1;
(statearr_52476_52490[(2)] = null);

(statearr_52476_52490[(1)] = (2));


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
});})(c__29167__auto___52484,ch))
;
return ((function (switch__29055__auto__,c__29167__auto___52484,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29056__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29056__auto____0 = (function (){
var statearr_52480 = [null,null,null,null,null,null,null,null,null];
(statearr_52480[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29056__auto__);

(statearr_52480[(1)] = (1));

return statearr_52480;
});
var figwheel$client$heads_up_plugin_$_state_machine__29056__auto____1 = (function (state_52467){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_52467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e52481){if((e52481 instanceof Object)){
var ex__29059__auto__ = e52481;
var statearr_52482_52491 = state_52467;
(statearr_52482_52491[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52492 = state_52467;
state_52467 = G__52492;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29056__auto__ = function(state_52467){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29056__auto____1.call(this,state_52467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29056__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29056__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___52484,ch))
})();
var state__29169__auto__ = (function (){var statearr_52483 = f__29168__auto__.call(null);
(statearr_52483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___52484);

return statearr_52483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___52484,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__){
return (function (state_52513){
var state_val_52514 = (state_52513[(1)]);
if((state_val_52514 === (1))){
var inst_52508 = cljs.core.async.timeout.call(null,(3000));
var state_52513__$1 = state_52513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52513__$1,(2),inst_52508);
} else {
if((state_val_52514 === (2))){
var inst_52510 = (state_52513[(2)]);
var inst_52511 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_52513__$1 = (function (){var statearr_52515 = state_52513;
(statearr_52515[(7)] = inst_52510);

return statearr_52515;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52513__$1,inst_52511);
} else {
return null;
}
}
});})(c__29167__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____0 = (function (){
var statearr_52519 = [null,null,null,null,null,null,null,null];
(statearr_52519[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__);

(statearr_52519[(1)] = (1));

return statearr_52519;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____1 = (function (state_52513){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_52513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e52520){if((e52520 instanceof Object)){
var ex__29059__auto__ = e52520;
var statearr_52521_52523 = state_52513;
(statearr_52521_52523[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52524 = state_52513;
state_52513 = G__52524;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__ = function(state_52513){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____1.call(this,state_52513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__))
})();
var state__29169__auto__ = (function (){var statearr_52522 = f__29168__auto__.call(null);
(statearr_52522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_52522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__))
);

return c__29167__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__,figwheel_version,temp__4657__auto__){
return (function (state_52547){
var state_val_52548 = (state_52547[(1)]);
if((state_val_52548 === (1))){
var inst_52541 = cljs.core.async.timeout.call(null,(2000));
var state_52547__$1 = state_52547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52547__$1,(2),inst_52541);
} else {
if((state_val_52548 === (2))){
var inst_52543 = (state_52547[(2)]);
var inst_52544 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_52545 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_52544);
var state_52547__$1 = (function (){var statearr_52549 = state_52547;
(statearr_52549[(7)] = inst_52543);

return statearr_52549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52547__$1,inst_52545);
} else {
return null;
}
}
});})(c__29167__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____0 = (function (){
var statearr_52553 = [null,null,null,null,null,null,null,null];
(statearr_52553[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__);

(statearr_52553[(1)] = (1));

return statearr_52553;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____1 = (function (state_52547){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_52547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e52554){if((e52554 instanceof Object)){
var ex__29059__auto__ = e52554;
var statearr_52555_52557 = state_52547;
(statearr_52555_52557[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52558 = state_52547;
state_52547 = G__52558;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__ = function(state_52547){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____1.call(this,state_52547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29169__auto__ = (function (){var statearr_52556 = f__29168__auto__.call(null);
(statearr_52556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_52556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__,figwheel_version,temp__4657__auto__))
);

return c__29167__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__52559){
var map__52563 = p__52559;
var map__52563__$1 = ((((!((map__52563 == null)))?((((map__52563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52563):map__52563);
var file = cljs.core.get.call(null,map__52563__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52563__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52563__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52565 = "";
var G__52565__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__52565),cljs.core.str("file "),cljs.core.str(file)].join(''):G__52565);
var G__52565__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__52565__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__52565__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__52565__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__52565__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__52566){
var map__52573 = p__52566;
var map__52573__$1 = ((((!((map__52573 == null)))?((((map__52573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52573):map__52573);
var ed = map__52573__$1;
var formatted_exception = cljs.core.get.call(null,map__52573__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__52573__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__52573__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__52575_52579 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__52576_52580 = null;
var count__52577_52581 = (0);
var i__52578_52582 = (0);
while(true){
if((i__52578_52582 < count__52577_52581)){
var msg_52583 = cljs.core._nth.call(null,chunk__52576_52580,i__52578_52582);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52583);

var G__52584 = seq__52575_52579;
var G__52585 = chunk__52576_52580;
var G__52586 = count__52577_52581;
var G__52587 = (i__52578_52582 + (1));
seq__52575_52579 = G__52584;
chunk__52576_52580 = G__52585;
count__52577_52581 = G__52586;
i__52578_52582 = G__52587;
continue;
} else {
var temp__4657__auto___52588 = cljs.core.seq.call(null,seq__52575_52579);
if(temp__4657__auto___52588){
var seq__52575_52589__$1 = temp__4657__auto___52588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52575_52589__$1)){
var c__26790__auto___52590 = cljs.core.chunk_first.call(null,seq__52575_52589__$1);
var G__52591 = cljs.core.chunk_rest.call(null,seq__52575_52589__$1);
var G__52592 = c__26790__auto___52590;
var G__52593 = cljs.core.count.call(null,c__26790__auto___52590);
var G__52594 = (0);
seq__52575_52579 = G__52591;
chunk__52576_52580 = G__52592;
count__52577_52581 = G__52593;
i__52578_52582 = G__52594;
continue;
} else {
var msg_52595 = cljs.core.first.call(null,seq__52575_52589__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52595);

var G__52596 = cljs.core.next.call(null,seq__52575_52589__$1);
var G__52597 = null;
var G__52598 = (0);
var G__52599 = (0);
seq__52575_52579 = G__52596;
chunk__52576_52580 = G__52597;
count__52577_52581 = G__52598;
i__52578_52582 = G__52599;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__52600){
var map__52603 = p__52600;
var map__52603__$1 = ((((!((map__52603 == null)))?((((map__52603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52603):map__52603);
var w = map__52603__$1;
var message = cljs.core.get.call(null,map__52603__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25967__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25967__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__52615 = cljs.core.seq.call(null,plugins);
var chunk__52616 = null;
var count__52617 = (0);
var i__52618 = (0);
while(true){
if((i__52618 < count__52617)){
var vec__52619 = cljs.core._nth.call(null,chunk__52616,i__52618);
var k = cljs.core.nth.call(null,vec__52619,(0),null);
var plugin = cljs.core.nth.call(null,vec__52619,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52625 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52615,chunk__52616,count__52617,i__52618,pl_52625,vec__52619,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_52625.call(null,msg_hist);
});})(seq__52615,chunk__52616,count__52617,i__52618,pl_52625,vec__52619,k,plugin))
);
} else {
}

var G__52626 = seq__52615;
var G__52627 = chunk__52616;
var G__52628 = count__52617;
var G__52629 = (i__52618 + (1));
seq__52615 = G__52626;
chunk__52616 = G__52627;
count__52617 = G__52628;
i__52618 = G__52629;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52615);
if(temp__4657__auto__){
var seq__52615__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52615__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__52615__$1);
var G__52630 = cljs.core.chunk_rest.call(null,seq__52615__$1);
var G__52631 = c__26790__auto__;
var G__52632 = cljs.core.count.call(null,c__26790__auto__);
var G__52633 = (0);
seq__52615 = G__52630;
chunk__52616 = G__52631;
count__52617 = G__52632;
i__52618 = G__52633;
continue;
} else {
var vec__52622 = cljs.core.first.call(null,seq__52615__$1);
var k = cljs.core.nth.call(null,vec__52622,(0),null);
var plugin = cljs.core.nth.call(null,vec__52622,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52634 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52615,chunk__52616,count__52617,i__52618,pl_52634,vec__52622,k,plugin,seq__52615__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_52634.call(null,msg_hist);
});})(seq__52615,chunk__52616,count__52617,i__52618,pl_52634,vec__52622,k,plugin,seq__52615__$1,temp__4657__auto__))
);
} else {
}

var G__52635 = cljs.core.next.call(null,seq__52615__$1);
var G__52636 = null;
var G__52637 = (0);
var G__52638 = (0);
seq__52615 = G__52635;
chunk__52616 = G__52636;
count__52617 = G__52637;
i__52618 = G__52638;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args52639 = [];
var len__27054__auto___52646 = arguments.length;
var i__27055__auto___52647 = (0);
while(true){
if((i__27055__auto___52647 < len__27054__auto___52646)){
args52639.push((arguments[i__27055__auto___52647]));

var G__52648 = (i__27055__auto___52647 + (1));
i__27055__auto___52647 = G__52648;
continue;
} else {
}
break;
}

var G__52641 = args52639.length;
switch (G__52641) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52639.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__52642_52650 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__52643_52651 = null;
var count__52644_52652 = (0);
var i__52645_52653 = (0);
while(true){
if((i__52645_52653 < count__52644_52652)){
var msg_52654 = cljs.core._nth.call(null,chunk__52643_52651,i__52645_52653);
figwheel.client.socket.handle_incoming_message.call(null,msg_52654);

var G__52655 = seq__52642_52650;
var G__52656 = chunk__52643_52651;
var G__52657 = count__52644_52652;
var G__52658 = (i__52645_52653 + (1));
seq__52642_52650 = G__52655;
chunk__52643_52651 = G__52656;
count__52644_52652 = G__52657;
i__52645_52653 = G__52658;
continue;
} else {
var temp__4657__auto___52659 = cljs.core.seq.call(null,seq__52642_52650);
if(temp__4657__auto___52659){
var seq__52642_52660__$1 = temp__4657__auto___52659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52642_52660__$1)){
var c__26790__auto___52661 = cljs.core.chunk_first.call(null,seq__52642_52660__$1);
var G__52662 = cljs.core.chunk_rest.call(null,seq__52642_52660__$1);
var G__52663 = c__26790__auto___52661;
var G__52664 = cljs.core.count.call(null,c__26790__auto___52661);
var G__52665 = (0);
seq__52642_52650 = G__52662;
chunk__52643_52651 = G__52663;
count__52644_52652 = G__52664;
i__52645_52653 = G__52665;
continue;
} else {
var msg_52666 = cljs.core.first.call(null,seq__52642_52660__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_52666);

var G__52667 = cljs.core.next.call(null,seq__52642_52660__$1);
var G__52668 = null;
var G__52669 = (0);
var G__52670 = (0);
seq__52642_52650 = G__52667;
chunk__52643_52651 = G__52668;
count__52644_52652 = G__52669;
i__52645_52653 = G__52670;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27061__auto__ = [];
var len__27054__auto___52675 = arguments.length;
var i__27055__auto___52676 = (0);
while(true){
if((i__27055__auto___52676 < len__27054__auto___52675)){
args__27061__auto__.push((arguments[i__27055__auto___52676]));

var G__52677 = (i__27055__auto___52676 + (1));
i__27055__auto___52676 = G__52677;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__52672){
var map__52673 = p__52672;
var map__52673__$1 = ((((!((map__52673 == null)))?((((map__52673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52673):map__52673);
var opts = map__52673__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq52671){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52671));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e52679){if((e52679 instanceof Error)){
var e = e52679;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e52679;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__52683){
var map__52684 = p__52683;
var map__52684__$1 = ((((!((map__52684 == null)))?((((map__52684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52684):map__52684);
var msg_name = cljs.core.get.call(null,map__52684__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1497028424729