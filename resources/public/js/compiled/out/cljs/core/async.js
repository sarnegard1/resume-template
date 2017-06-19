// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args44931 = [];
var len__27054__auto___44937 = arguments.length;
var i__27055__auto___44938 = (0);
while(true){
if((i__27055__auto___44938 < len__27054__auto___44937)){
args44931.push((arguments[i__27055__auto___44938]));

var G__44939 = (i__27055__auto___44938 + (1));
i__27055__auto___44938 = G__44939;
continue;
} else {
}
break;
}

var G__44933 = args44931.length;
switch (G__44933) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44931.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44934 = (function (f,blockable,meta44935){
this.f = f;
this.blockable = blockable;
this.meta44935 = meta44935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44936,meta44935__$1){
var self__ = this;
var _44936__$1 = this;
return (new cljs.core.async.t_cljs$core$async44934(self__.f,self__.blockable,meta44935__$1));
});

cljs.core.async.t_cljs$core$async44934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44936){
var self__ = this;
var _44936__$1 = this;
return self__.meta44935;
});

cljs.core.async.t_cljs$core$async44934.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44935","meta44935",-1264194397,null)], null);
});

cljs.core.async.t_cljs$core$async44934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44934";

cljs.core.async.t_cljs$core$async44934.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async44934");
});

cljs.core.async.__GT_t_cljs$core$async44934 = (function cljs$core$async$__GT_t_cljs$core$async44934(f__$1,blockable__$1,meta44935){
return (new cljs.core.async.t_cljs$core$async44934(f__$1,blockable__$1,meta44935));
});

}

return (new cljs.core.async.t_cljs$core$async44934(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args44943 = [];
var len__27054__auto___44946 = arguments.length;
var i__27055__auto___44947 = (0);
while(true){
if((i__27055__auto___44947 < len__27054__auto___44946)){
args44943.push((arguments[i__27055__auto___44947]));

var G__44948 = (i__27055__auto___44947 + (1));
i__27055__auto___44947 = G__44948;
continue;
} else {
}
break;
}

var G__44945 = args44943.length;
switch (G__44945) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44943.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args44950 = [];
var len__27054__auto___44953 = arguments.length;
var i__27055__auto___44954 = (0);
while(true){
if((i__27055__auto___44954 < len__27054__auto___44953)){
args44950.push((arguments[i__27055__auto___44954]));

var G__44955 = (i__27055__auto___44954 + (1));
i__27055__auto___44954 = G__44955;
continue;
} else {
}
break;
}

var G__44952 = args44950.length;
switch (G__44952) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44950.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args44957 = [];
var len__27054__auto___44960 = arguments.length;
var i__27055__auto___44961 = (0);
while(true){
if((i__27055__auto___44961 < len__27054__auto___44960)){
args44957.push((arguments[i__27055__auto___44961]));

var G__44962 = (i__27055__auto___44961 + (1));
i__27055__auto___44961 = G__44962;
continue;
} else {
}
break;
}

var G__44959 = args44957.length;
switch (G__44959) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44957.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44964 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44964);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44964,ret){
return (function (){
return fn1.call(null,val_44964);
});})(val_44964,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args44965 = [];
var len__27054__auto___44968 = arguments.length;
var i__27055__auto___44969 = (0);
while(true){
if((i__27055__auto___44969 < len__27054__auto___44968)){
args44965.push((arguments[i__27055__auto___44969]));

var G__44970 = (i__27055__auto___44969 + (1));
i__27055__auto___44969 = G__44970;
continue;
} else {
}
break;
}

var G__44967 = args44965.length;
switch (G__44967) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44965.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26894__auto___44972 = n;
var x_44973 = (0);
while(true){
if((x_44973 < n__26894__auto___44972)){
(a[x_44973] = (0));

var G__44974 = (x_44973 + (1));
x_44973 = G__44974;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44975 = (i + (1));
i = G__44975;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44979 = (function (alt_flag,flag,meta44980){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44980 = meta44980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44981,meta44980__$1){
var self__ = this;
var _44981__$1 = this;
return (new cljs.core.async.t_cljs$core$async44979(self__.alt_flag,self__.flag,meta44980__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44981){
var self__ = this;
var _44981__$1 = this;
return self__.meta44980;
});})(flag))
;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44979.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44980","meta44980",566867781,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44979";

cljs.core.async.t_cljs$core$async44979.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async44979");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44979 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44979(alt_flag__$1,flag__$1,meta44980){
return (new cljs.core.async.t_cljs$core$async44979(alt_flag__$1,flag__$1,meta44980));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44979(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44985 = (function (alt_handler,flag,cb,meta44986){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta44986 = meta44986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44987,meta44986__$1){
var self__ = this;
var _44987__$1 = this;
return (new cljs.core.async.t_cljs$core$async44985(self__.alt_handler,self__.flag,self__.cb,meta44986__$1));
});

cljs.core.async.t_cljs$core$async44985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44987){
var self__ = this;
var _44987__$1 = this;
return self__.meta44986;
});

cljs.core.async.t_cljs$core$async44985.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44986","meta44986",-728786543,null)], null);
});

cljs.core.async.t_cljs$core$async44985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44985";

cljs.core.async.t_cljs$core$async44985.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async44985");
});

cljs.core.async.__GT_t_cljs$core$async44985 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44985(alt_handler__$1,flag__$1,cb__$1,meta44986){
return (new cljs.core.async.t_cljs$core$async44985(alt_handler__$1,flag__$1,cb__$1,meta44986));
});

}

return (new cljs.core.async.t_cljs$core$async44985(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44988_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44988_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44989_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44989_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25979__auto__ = wport;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44990 = (i + (1));
i = G__44990;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25979__auto__ = ret;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25967__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25967__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___44996 = arguments.length;
var i__27055__auto___44997 = (0);
while(true){
if((i__27055__auto___44997 < len__27054__auto___44996)){
args__27061__auto__.push((arguments[i__27055__auto___44997]));

var G__44998 = (i__27055__auto___44997 + (1));
i__27055__auto___44997 = G__44998;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44993){
var map__44994 = p__44993;
var map__44994__$1 = ((((!((map__44994 == null)))?((((map__44994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44994):map__44994);
var opts = map__44994__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44991){
var G__44992 = cljs.core.first.call(null,seq44991);
var seq44991__$1 = cljs.core.next.call(null,seq44991);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44992,seq44991__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args44999 = [];
var len__27054__auto___45049 = arguments.length;
var i__27055__auto___45050 = (0);
while(true){
if((i__27055__auto___45050 < len__27054__auto___45049)){
args44999.push((arguments[i__27055__auto___45050]));

var G__45051 = (i__27055__auto___45050 + (1));
i__27055__auto___45050 = G__45051;
continue;
} else {
}
break;
}

var G__45001 = args44999.length;
switch (G__45001) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44999.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29167__auto___45053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___45053){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___45053){
return (function (state_45025){
var state_val_45026 = (state_45025[(1)]);
if((state_val_45026 === (7))){
var inst_45021 = (state_45025[(2)]);
var state_45025__$1 = state_45025;
var statearr_45027_45054 = state_45025__$1;
(statearr_45027_45054[(2)] = inst_45021);

(statearr_45027_45054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45026 === (1))){
var state_45025__$1 = state_45025;
var statearr_45028_45055 = state_45025__$1;
(statearr_45028_45055[(2)] = null);

(statearr_45028_45055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45026 === (4))){
var inst_45004 = (state_45025[(7)]);
var inst_45004__$1 = (state_45025[(2)]);
var inst_45005 = (inst_45004__$1 == null);
var state_45025__$1 = (function (){var statearr_45029 = state_45025;
(statearr_45029[(7)] = inst_45004__$1);

return statearr_45029;
})();
if(cljs.core.truth_(inst_45005)){
var statearr_45030_45056 = state_45025__$1;
(statearr_45030_45056[(1)] = (5));

} else {
var statearr_45031_45057 = state_45025__$1;
(statearr_45031_45057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45026 === (13))){
var state_45025__$1 = state_45025;
var statearr_45032_45058 = state_45025__$1;
(statearr_45032_45058[(2)] = null);

(statearr_45032_45058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45026 === (6))){
var inst_45004 = (state_45025[(7)]);
var state_45025__$1 = state_45025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45025__$1,(11),to,inst_45004);
} else {
if((state_val_45026 === (3))){
var inst_45023 = (state_45025[(2)]);
var state_45025__$1 = state_45025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45025__$1,inst_45023);
} else {
if((state_val_45026 === (12))){
var state_45025__$1 = state_45025;
var statearr_45033_45059 = state_45025__$1;
(statearr_45033_45059[(2)] = null);

(statearr_45033_45059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45026 === (2))){
var state_45025__$1 = state_45025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45025__$1,(4),from);
} else {
if((state_val_45026 === (11))){
var inst_45014 = (state_45025[(2)]);
var state_45025__$1 = state_45025;
if(cljs.core.truth_(inst_45014)){
var statearr_45034_45060 = state_45025__$1;
(statearr_45034_45060[(1)] = (12));

} else {
var statearr_45035_45061 = state_45025__$1;
(statearr_45035_45061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45026 === (9))){
var state_45025__$1 = state_45025;
var statearr_45036_45062 = state_45025__$1;
(statearr_45036_45062[(2)] = null);

(statearr_45036_45062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45026 === (5))){
var state_45025__$1 = state_45025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45037_45063 = state_45025__$1;
(statearr_45037_45063[(1)] = (8));

} else {
var statearr_45038_45064 = state_45025__$1;
(statearr_45038_45064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45026 === (14))){
var inst_45019 = (state_45025[(2)]);
var state_45025__$1 = state_45025;
var statearr_45039_45065 = state_45025__$1;
(statearr_45039_45065[(2)] = inst_45019);

(statearr_45039_45065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45026 === (10))){
var inst_45011 = (state_45025[(2)]);
var state_45025__$1 = state_45025;
var statearr_45040_45066 = state_45025__$1;
(statearr_45040_45066[(2)] = inst_45011);

(statearr_45040_45066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45026 === (8))){
var inst_45008 = cljs.core.async.close_BANG_.call(null,to);
var state_45025__$1 = state_45025;
var statearr_45041_45067 = state_45025__$1;
(statearr_45041_45067[(2)] = inst_45008);

(statearr_45041_45067[(1)] = (10));


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
});})(c__29167__auto___45053))
;
return ((function (switch__29055__auto__,c__29167__auto___45053){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_45045 = [null,null,null,null,null,null,null,null];
(statearr_45045[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_45045[(1)] = (1));

return statearr_45045;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_45025){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_45025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e45046){if((e45046 instanceof Object)){
var ex__29059__auto__ = e45046;
var statearr_45047_45068 = state_45025;
(statearr_45047_45068[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45069 = state_45025;
state_45025 = G__45069;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_45025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_45025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___45053))
})();
var state__29169__auto__ = (function (){var statearr_45048 = f__29168__auto__.call(null);
(statearr_45048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___45053);

return statearr_45048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___45053))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__45257){
var vec__45258 = p__45257;
var v = cljs.core.nth.call(null,vec__45258,(0),null);
var p = cljs.core.nth.call(null,vec__45258,(1),null);
var job = vec__45258;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29167__auto___45444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___45444,res,vec__45258,v,p,job,jobs,results){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___45444,res,vec__45258,v,p,job,jobs,results){
return (function (state_45265){
var state_val_45266 = (state_45265[(1)]);
if((state_val_45266 === (1))){
var state_45265__$1 = state_45265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45265__$1,(2),res,v);
} else {
if((state_val_45266 === (2))){
var inst_45262 = (state_45265[(2)]);
var inst_45263 = cljs.core.async.close_BANG_.call(null,res);
var state_45265__$1 = (function (){var statearr_45267 = state_45265;
(statearr_45267[(7)] = inst_45262);

return statearr_45267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45265__$1,inst_45263);
} else {
return null;
}
}
});})(c__29167__auto___45444,res,vec__45258,v,p,job,jobs,results))
;
return ((function (switch__29055__auto__,c__29167__auto___45444,res,vec__45258,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_45271 = [null,null,null,null,null,null,null,null];
(statearr_45271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__);

(statearr_45271[(1)] = (1));

return statearr_45271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1 = (function (state_45265){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_45265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e45272){if((e45272 instanceof Object)){
var ex__29059__auto__ = e45272;
var statearr_45273_45445 = state_45265;
(statearr_45273_45445[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45446 = state_45265;
state_45265 = G__45446;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = function(state_45265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1.call(this,state_45265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___45444,res,vec__45258,v,p,job,jobs,results))
})();
var state__29169__auto__ = (function (){var statearr_45274 = f__29168__auto__.call(null);
(statearr_45274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___45444);

return statearr_45274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___45444,res,vec__45258,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45275){
var vec__45276 = p__45275;
var v = cljs.core.nth.call(null,vec__45276,(0),null);
var p = cljs.core.nth.call(null,vec__45276,(1),null);
var job = vec__45276;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26894__auto___45447 = n;
var __45448 = (0);
while(true){
if((__45448 < n__26894__auto___45447)){
var G__45279_45449 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__45279_45449) {
case "compute":
var c__29167__auto___45451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45448,c__29167__auto___45451,G__45279_45449,n__26894__auto___45447,jobs,results,process,async){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (__45448,c__29167__auto___45451,G__45279_45449,n__26894__auto___45447,jobs,results,process,async){
return (function (state_45292){
var state_val_45293 = (state_45292[(1)]);
if((state_val_45293 === (1))){
var state_45292__$1 = state_45292;
var statearr_45294_45452 = state_45292__$1;
(statearr_45294_45452[(2)] = null);

(statearr_45294_45452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (2))){
var state_45292__$1 = state_45292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45292__$1,(4),jobs);
} else {
if((state_val_45293 === (3))){
var inst_45290 = (state_45292[(2)]);
var state_45292__$1 = state_45292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45292__$1,inst_45290);
} else {
if((state_val_45293 === (4))){
var inst_45282 = (state_45292[(2)]);
var inst_45283 = process.call(null,inst_45282);
var state_45292__$1 = state_45292;
if(cljs.core.truth_(inst_45283)){
var statearr_45295_45453 = state_45292__$1;
(statearr_45295_45453[(1)] = (5));

} else {
var statearr_45296_45454 = state_45292__$1;
(statearr_45296_45454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (5))){
var state_45292__$1 = state_45292;
var statearr_45297_45455 = state_45292__$1;
(statearr_45297_45455[(2)] = null);

(statearr_45297_45455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (6))){
var state_45292__$1 = state_45292;
var statearr_45298_45456 = state_45292__$1;
(statearr_45298_45456[(2)] = null);

(statearr_45298_45456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (7))){
var inst_45288 = (state_45292[(2)]);
var state_45292__$1 = state_45292;
var statearr_45299_45457 = state_45292__$1;
(statearr_45299_45457[(2)] = inst_45288);

(statearr_45299_45457[(1)] = (3));


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
});})(__45448,c__29167__auto___45451,G__45279_45449,n__26894__auto___45447,jobs,results,process,async))
;
return ((function (__45448,switch__29055__auto__,c__29167__auto___45451,G__45279_45449,n__26894__auto___45447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_45303 = [null,null,null,null,null,null,null];
(statearr_45303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__);

(statearr_45303[(1)] = (1));

return statearr_45303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1 = (function (state_45292){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_45292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e45304){if((e45304 instanceof Object)){
var ex__29059__auto__ = e45304;
var statearr_45305_45458 = state_45292;
(statearr_45305_45458[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45459 = state_45292;
state_45292 = G__45459;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = function(state_45292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1.call(this,state_45292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__;
})()
;})(__45448,switch__29055__auto__,c__29167__auto___45451,G__45279_45449,n__26894__auto___45447,jobs,results,process,async))
})();
var state__29169__auto__ = (function (){var statearr_45306 = f__29168__auto__.call(null);
(statearr_45306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___45451);

return statearr_45306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(__45448,c__29167__auto___45451,G__45279_45449,n__26894__auto___45447,jobs,results,process,async))
);


break;
case "async":
var c__29167__auto___45460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45448,c__29167__auto___45460,G__45279_45449,n__26894__auto___45447,jobs,results,process,async){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (__45448,c__29167__auto___45460,G__45279_45449,n__26894__auto___45447,jobs,results,process,async){
return (function (state_45319){
var state_val_45320 = (state_45319[(1)]);
if((state_val_45320 === (1))){
var state_45319__$1 = state_45319;
var statearr_45321_45461 = state_45319__$1;
(statearr_45321_45461[(2)] = null);

(statearr_45321_45461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45320 === (2))){
var state_45319__$1 = state_45319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45319__$1,(4),jobs);
} else {
if((state_val_45320 === (3))){
var inst_45317 = (state_45319[(2)]);
var state_45319__$1 = state_45319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45319__$1,inst_45317);
} else {
if((state_val_45320 === (4))){
var inst_45309 = (state_45319[(2)]);
var inst_45310 = async.call(null,inst_45309);
var state_45319__$1 = state_45319;
if(cljs.core.truth_(inst_45310)){
var statearr_45322_45462 = state_45319__$1;
(statearr_45322_45462[(1)] = (5));

} else {
var statearr_45323_45463 = state_45319__$1;
(statearr_45323_45463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45320 === (5))){
var state_45319__$1 = state_45319;
var statearr_45324_45464 = state_45319__$1;
(statearr_45324_45464[(2)] = null);

(statearr_45324_45464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45320 === (6))){
var state_45319__$1 = state_45319;
var statearr_45325_45465 = state_45319__$1;
(statearr_45325_45465[(2)] = null);

(statearr_45325_45465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45320 === (7))){
var inst_45315 = (state_45319[(2)]);
var state_45319__$1 = state_45319;
var statearr_45326_45466 = state_45319__$1;
(statearr_45326_45466[(2)] = inst_45315);

(statearr_45326_45466[(1)] = (3));


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
});})(__45448,c__29167__auto___45460,G__45279_45449,n__26894__auto___45447,jobs,results,process,async))
;
return ((function (__45448,switch__29055__auto__,c__29167__auto___45460,G__45279_45449,n__26894__auto___45447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_45330 = [null,null,null,null,null,null,null];
(statearr_45330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__);

(statearr_45330[(1)] = (1));

return statearr_45330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1 = (function (state_45319){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_45319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e45331){if((e45331 instanceof Object)){
var ex__29059__auto__ = e45331;
var statearr_45332_45467 = state_45319;
(statearr_45332_45467[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45468 = state_45319;
state_45319 = G__45468;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = function(state_45319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1.call(this,state_45319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__;
})()
;})(__45448,switch__29055__auto__,c__29167__auto___45460,G__45279_45449,n__26894__auto___45447,jobs,results,process,async))
})();
var state__29169__auto__ = (function (){var statearr_45333 = f__29168__auto__.call(null);
(statearr_45333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___45460);

return statearr_45333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(__45448,c__29167__auto___45460,G__45279_45449,n__26894__auto___45447,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__45469 = (__45448 + (1));
__45448 = G__45469;
continue;
} else {
}
break;
}

var c__29167__auto___45470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___45470,jobs,results,process,async){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___45470,jobs,results,process,async){
return (function (state_45355){
var state_val_45356 = (state_45355[(1)]);
if((state_val_45356 === (1))){
var state_45355__$1 = state_45355;
var statearr_45357_45471 = state_45355__$1;
(statearr_45357_45471[(2)] = null);

(statearr_45357_45471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45356 === (2))){
var state_45355__$1 = state_45355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45355__$1,(4),from);
} else {
if((state_val_45356 === (3))){
var inst_45353 = (state_45355[(2)]);
var state_45355__$1 = state_45355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45355__$1,inst_45353);
} else {
if((state_val_45356 === (4))){
var inst_45336 = (state_45355[(7)]);
var inst_45336__$1 = (state_45355[(2)]);
var inst_45337 = (inst_45336__$1 == null);
var state_45355__$1 = (function (){var statearr_45358 = state_45355;
(statearr_45358[(7)] = inst_45336__$1);

return statearr_45358;
})();
if(cljs.core.truth_(inst_45337)){
var statearr_45359_45472 = state_45355__$1;
(statearr_45359_45472[(1)] = (5));

} else {
var statearr_45360_45473 = state_45355__$1;
(statearr_45360_45473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45356 === (5))){
var inst_45339 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45355__$1 = state_45355;
var statearr_45361_45474 = state_45355__$1;
(statearr_45361_45474[(2)] = inst_45339);

(statearr_45361_45474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45356 === (6))){
var inst_45336 = (state_45355[(7)]);
var inst_45341 = (state_45355[(8)]);
var inst_45341__$1 = cljs.core.async.chan.call(null,(1));
var inst_45342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45343 = [inst_45336,inst_45341__$1];
var inst_45344 = (new cljs.core.PersistentVector(null,2,(5),inst_45342,inst_45343,null));
var state_45355__$1 = (function (){var statearr_45362 = state_45355;
(statearr_45362[(8)] = inst_45341__$1);

return statearr_45362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45355__$1,(8),jobs,inst_45344);
} else {
if((state_val_45356 === (7))){
var inst_45351 = (state_45355[(2)]);
var state_45355__$1 = state_45355;
var statearr_45363_45475 = state_45355__$1;
(statearr_45363_45475[(2)] = inst_45351);

(statearr_45363_45475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45356 === (8))){
var inst_45341 = (state_45355[(8)]);
var inst_45346 = (state_45355[(2)]);
var state_45355__$1 = (function (){var statearr_45364 = state_45355;
(statearr_45364[(9)] = inst_45346);

return statearr_45364;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45355__$1,(9),results,inst_45341);
} else {
if((state_val_45356 === (9))){
var inst_45348 = (state_45355[(2)]);
var state_45355__$1 = (function (){var statearr_45365 = state_45355;
(statearr_45365[(10)] = inst_45348);

return statearr_45365;
})();
var statearr_45366_45476 = state_45355__$1;
(statearr_45366_45476[(2)] = null);

(statearr_45366_45476[(1)] = (2));


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
});})(c__29167__auto___45470,jobs,results,process,async))
;
return ((function (switch__29055__auto__,c__29167__auto___45470,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_45370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__);

(statearr_45370[(1)] = (1));

return statearr_45370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1 = (function (state_45355){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_45355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e45371){if((e45371 instanceof Object)){
var ex__29059__auto__ = e45371;
var statearr_45372_45477 = state_45355;
(statearr_45372_45477[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45478 = state_45355;
state_45355 = G__45478;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = function(state_45355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1.call(this,state_45355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___45470,jobs,results,process,async))
})();
var state__29169__auto__ = (function (){var statearr_45373 = f__29168__auto__.call(null);
(statearr_45373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___45470);

return statearr_45373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___45470,jobs,results,process,async))
);


var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__,jobs,results,process,async){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__,jobs,results,process,async){
return (function (state_45411){
var state_val_45412 = (state_45411[(1)]);
if((state_val_45412 === (7))){
var inst_45407 = (state_45411[(2)]);
var state_45411__$1 = state_45411;
var statearr_45413_45479 = state_45411__$1;
(statearr_45413_45479[(2)] = inst_45407);

(statearr_45413_45479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (20))){
var state_45411__$1 = state_45411;
var statearr_45414_45480 = state_45411__$1;
(statearr_45414_45480[(2)] = null);

(statearr_45414_45480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (1))){
var state_45411__$1 = state_45411;
var statearr_45415_45481 = state_45411__$1;
(statearr_45415_45481[(2)] = null);

(statearr_45415_45481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (4))){
var inst_45376 = (state_45411[(7)]);
var inst_45376__$1 = (state_45411[(2)]);
var inst_45377 = (inst_45376__$1 == null);
var state_45411__$1 = (function (){var statearr_45416 = state_45411;
(statearr_45416[(7)] = inst_45376__$1);

return statearr_45416;
})();
if(cljs.core.truth_(inst_45377)){
var statearr_45417_45482 = state_45411__$1;
(statearr_45417_45482[(1)] = (5));

} else {
var statearr_45418_45483 = state_45411__$1;
(statearr_45418_45483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (15))){
var inst_45389 = (state_45411[(8)]);
var state_45411__$1 = state_45411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45411__$1,(18),to,inst_45389);
} else {
if((state_val_45412 === (21))){
var inst_45402 = (state_45411[(2)]);
var state_45411__$1 = state_45411;
var statearr_45419_45484 = state_45411__$1;
(statearr_45419_45484[(2)] = inst_45402);

(statearr_45419_45484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (13))){
var inst_45404 = (state_45411[(2)]);
var state_45411__$1 = (function (){var statearr_45420 = state_45411;
(statearr_45420[(9)] = inst_45404);

return statearr_45420;
})();
var statearr_45421_45485 = state_45411__$1;
(statearr_45421_45485[(2)] = null);

(statearr_45421_45485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (6))){
var inst_45376 = (state_45411[(7)]);
var state_45411__$1 = state_45411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45411__$1,(11),inst_45376);
} else {
if((state_val_45412 === (17))){
var inst_45397 = (state_45411[(2)]);
var state_45411__$1 = state_45411;
if(cljs.core.truth_(inst_45397)){
var statearr_45422_45486 = state_45411__$1;
(statearr_45422_45486[(1)] = (19));

} else {
var statearr_45423_45487 = state_45411__$1;
(statearr_45423_45487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (3))){
var inst_45409 = (state_45411[(2)]);
var state_45411__$1 = state_45411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45411__$1,inst_45409);
} else {
if((state_val_45412 === (12))){
var inst_45386 = (state_45411[(10)]);
var state_45411__$1 = state_45411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45411__$1,(14),inst_45386);
} else {
if((state_val_45412 === (2))){
var state_45411__$1 = state_45411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45411__$1,(4),results);
} else {
if((state_val_45412 === (19))){
var state_45411__$1 = state_45411;
var statearr_45424_45488 = state_45411__$1;
(statearr_45424_45488[(2)] = null);

(statearr_45424_45488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (11))){
var inst_45386 = (state_45411[(2)]);
var state_45411__$1 = (function (){var statearr_45425 = state_45411;
(statearr_45425[(10)] = inst_45386);

return statearr_45425;
})();
var statearr_45426_45489 = state_45411__$1;
(statearr_45426_45489[(2)] = null);

(statearr_45426_45489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (9))){
var state_45411__$1 = state_45411;
var statearr_45427_45490 = state_45411__$1;
(statearr_45427_45490[(2)] = null);

(statearr_45427_45490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (5))){
var state_45411__$1 = state_45411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45428_45491 = state_45411__$1;
(statearr_45428_45491[(1)] = (8));

} else {
var statearr_45429_45492 = state_45411__$1;
(statearr_45429_45492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (14))){
var inst_45391 = (state_45411[(11)]);
var inst_45389 = (state_45411[(8)]);
var inst_45389__$1 = (state_45411[(2)]);
var inst_45390 = (inst_45389__$1 == null);
var inst_45391__$1 = cljs.core.not.call(null,inst_45390);
var state_45411__$1 = (function (){var statearr_45430 = state_45411;
(statearr_45430[(11)] = inst_45391__$1);

(statearr_45430[(8)] = inst_45389__$1);

return statearr_45430;
})();
if(inst_45391__$1){
var statearr_45431_45493 = state_45411__$1;
(statearr_45431_45493[(1)] = (15));

} else {
var statearr_45432_45494 = state_45411__$1;
(statearr_45432_45494[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (16))){
var inst_45391 = (state_45411[(11)]);
var state_45411__$1 = state_45411;
var statearr_45433_45495 = state_45411__$1;
(statearr_45433_45495[(2)] = inst_45391);

(statearr_45433_45495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (10))){
var inst_45383 = (state_45411[(2)]);
var state_45411__$1 = state_45411;
var statearr_45434_45496 = state_45411__$1;
(statearr_45434_45496[(2)] = inst_45383);

(statearr_45434_45496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (18))){
var inst_45394 = (state_45411[(2)]);
var state_45411__$1 = state_45411;
var statearr_45435_45497 = state_45411__$1;
(statearr_45435_45497[(2)] = inst_45394);

(statearr_45435_45497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (8))){
var inst_45380 = cljs.core.async.close_BANG_.call(null,to);
var state_45411__$1 = state_45411;
var statearr_45436_45498 = state_45411__$1;
(statearr_45436_45498[(2)] = inst_45380);

(statearr_45436_45498[(1)] = (10));


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
});})(c__29167__auto__,jobs,results,process,async))
;
return ((function (switch__29055__auto__,c__29167__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_45440 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__);

(statearr_45440[(1)] = (1));

return statearr_45440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1 = (function (state_45411){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_45411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e45441){if((e45441 instanceof Object)){
var ex__29059__auto__ = e45441;
var statearr_45442_45499 = state_45411;
(statearr_45442_45499[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45500 = state_45411;
state_45411 = G__45500;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = function(state_45411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1.call(this,state_45411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__,jobs,results,process,async))
})();
var state__29169__auto__ = (function (){var statearr_45443 = f__29168__auto__.call(null);
(statearr_45443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_45443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__,jobs,results,process,async))
);

return c__29167__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args45501 = [];
var len__27054__auto___45504 = arguments.length;
var i__27055__auto___45505 = (0);
while(true){
if((i__27055__auto___45505 < len__27054__auto___45504)){
args45501.push((arguments[i__27055__auto___45505]));

var G__45506 = (i__27055__auto___45505 + (1));
i__27055__auto___45505 = G__45506;
continue;
} else {
}
break;
}

var G__45503 = args45501.length;
switch (G__45503) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45501.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args45508 = [];
var len__27054__auto___45511 = arguments.length;
var i__27055__auto___45512 = (0);
while(true){
if((i__27055__auto___45512 < len__27054__auto___45511)){
args45508.push((arguments[i__27055__auto___45512]));

var G__45513 = (i__27055__auto___45512 + (1));
i__27055__auto___45512 = G__45513;
continue;
} else {
}
break;
}

var G__45510 = args45508.length;
switch (G__45510) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45508.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args45515 = [];
var len__27054__auto___45568 = arguments.length;
var i__27055__auto___45569 = (0);
while(true){
if((i__27055__auto___45569 < len__27054__auto___45568)){
args45515.push((arguments[i__27055__auto___45569]));

var G__45570 = (i__27055__auto___45569 + (1));
i__27055__auto___45569 = G__45570;
continue;
} else {
}
break;
}

var G__45517 = args45515.length;
switch (G__45517) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45515.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29167__auto___45572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___45572,tc,fc){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___45572,tc,fc){
return (function (state_45543){
var state_val_45544 = (state_45543[(1)]);
if((state_val_45544 === (7))){
var inst_45539 = (state_45543[(2)]);
var state_45543__$1 = state_45543;
var statearr_45545_45573 = state_45543__$1;
(statearr_45545_45573[(2)] = inst_45539);

(statearr_45545_45573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45544 === (1))){
var state_45543__$1 = state_45543;
var statearr_45546_45574 = state_45543__$1;
(statearr_45546_45574[(2)] = null);

(statearr_45546_45574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45544 === (4))){
var inst_45520 = (state_45543[(7)]);
var inst_45520__$1 = (state_45543[(2)]);
var inst_45521 = (inst_45520__$1 == null);
var state_45543__$1 = (function (){var statearr_45547 = state_45543;
(statearr_45547[(7)] = inst_45520__$1);

return statearr_45547;
})();
if(cljs.core.truth_(inst_45521)){
var statearr_45548_45575 = state_45543__$1;
(statearr_45548_45575[(1)] = (5));

} else {
var statearr_45549_45576 = state_45543__$1;
(statearr_45549_45576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45544 === (13))){
var state_45543__$1 = state_45543;
var statearr_45550_45577 = state_45543__$1;
(statearr_45550_45577[(2)] = null);

(statearr_45550_45577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45544 === (6))){
var inst_45520 = (state_45543[(7)]);
var inst_45526 = p.call(null,inst_45520);
var state_45543__$1 = state_45543;
if(cljs.core.truth_(inst_45526)){
var statearr_45551_45578 = state_45543__$1;
(statearr_45551_45578[(1)] = (9));

} else {
var statearr_45552_45579 = state_45543__$1;
(statearr_45552_45579[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45544 === (3))){
var inst_45541 = (state_45543[(2)]);
var state_45543__$1 = state_45543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45543__$1,inst_45541);
} else {
if((state_val_45544 === (12))){
var state_45543__$1 = state_45543;
var statearr_45553_45580 = state_45543__$1;
(statearr_45553_45580[(2)] = null);

(statearr_45553_45580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45544 === (2))){
var state_45543__$1 = state_45543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45543__$1,(4),ch);
} else {
if((state_val_45544 === (11))){
var inst_45520 = (state_45543[(7)]);
var inst_45530 = (state_45543[(2)]);
var state_45543__$1 = state_45543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45543__$1,(8),inst_45530,inst_45520);
} else {
if((state_val_45544 === (9))){
var state_45543__$1 = state_45543;
var statearr_45554_45581 = state_45543__$1;
(statearr_45554_45581[(2)] = tc);

(statearr_45554_45581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45544 === (5))){
var inst_45523 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45524 = cljs.core.async.close_BANG_.call(null,fc);
var state_45543__$1 = (function (){var statearr_45555 = state_45543;
(statearr_45555[(8)] = inst_45523);

return statearr_45555;
})();
var statearr_45556_45582 = state_45543__$1;
(statearr_45556_45582[(2)] = inst_45524);

(statearr_45556_45582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45544 === (14))){
var inst_45537 = (state_45543[(2)]);
var state_45543__$1 = state_45543;
var statearr_45557_45583 = state_45543__$1;
(statearr_45557_45583[(2)] = inst_45537);

(statearr_45557_45583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45544 === (10))){
var state_45543__$1 = state_45543;
var statearr_45558_45584 = state_45543__$1;
(statearr_45558_45584[(2)] = fc);

(statearr_45558_45584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45544 === (8))){
var inst_45532 = (state_45543[(2)]);
var state_45543__$1 = state_45543;
if(cljs.core.truth_(inst_45532)){
var statearr_45559_45585 = state_45543__$1;
(statearr_45559_45585[(1)] = (12));

} else {
var statearr_45560_45586 = state_45543__$1;
(statearr_45560_45586[(1)] = (13));

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
});})(c__29167__auto___45572,tc,fc))
;
return ((function (switch__29055__auto__,c__29167__auto___45572,tc,fc){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_45564 = [null,null,null,null,null,null,null,null,null];
(statearr_45564[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_45564[(1)] = (1));

return statearr_45564;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_45543){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_45543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e45565){if((e45565 instanceof Object)){
var ex__29059__auto__ = e45565;
var statearr_45566_45587 = state_45543;
(statearr_45566_45587[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45588 = state_45543;
state_45543 = G__45588;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_45543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_45543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___45572,tc,fc))
})();
var state__29169__auto__ = (function (){var statearr_45567 = f__29168__auto__.call(null);
(statearr_45567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___45572);

return statearr_45567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___45572,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__){
return (function (state_45652){
var state_val_45653 = (state_45652[(1)]);
if((state_val_45653 === (7))){
var inst_45648 = (state_45652[(2)]);
var state_45652__$1 = state_45652;
var statearr_45654_45675 = state_45652__$1;
(statearr_45654_45675[(2)] = inst_45648);

(statearr_45654_45675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45653 === (1))){
var inst_45632 = init;
var state_45652__$1 = (function (){var statearr_45655 = state_45652;
(statearr_45655[(7)] = inst_45632);

return statearr_45655;
})();
var statearr_45656_45676 = state_45652__$1;
(statearr_45656_45676[(2)] = null);

(statearr_45656_45676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45653 === (4))){
var inst_45635 = (state_45652[(8)]);
var inst_45635__$1 = (state_45652[(2)]);
var inst_45636 = (inst_45635__$1 == null);
var state_45652__$1 = (function (){var statearr_45657 = state_45652;
(statearr_45657[(8)] = inst_45635__$1);

return statearr_45657;
})();
if(cljs.core.truth_(inst_45636)){
var statearr_45658_45677 = state_45652__$1;
(statearr_45658_45677[(1)] = (5));

} else {
var statearr_45659_45678 = state_45652__$1;
(statearr_45659_45678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45653 === (6))){
var inst_45632 = (state_45652[(7)]);
var inst_45635 = (state_45652[(8)]);
var inst_45639 = (state_45652[(9)]);
var inst_45639__$1 = f.call(null,inst_45632,inst_45635);
var inst_45640 = cljs.core.reduced_QMARK_.call(null,inst_45639__$1);
var state_45652__$1 = (function (){var statearr_45660 = state_45652;
(statearr_45660[(9)] = inst_45639__$1);

return statearr_45660;
})();
if(inst_45640){
var statearr_45661_45679 = state_45652__$1;
(statearr_45661_45679[(1)] = (8));

} else {
var statearr_45662_45680 = state_45652__$1;
(statearr_45662_45680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45653 === (3))){
var inst_45650 = (state_45652[(2)]);
var state_45652__$1 = state_45652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45652__$1,inst_45650);
} else {
if((state_val_45653 === (2))){
var state_45652__$1 = state_45652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45652__$1,(4),ch);
} else {
if((state_val_45653 === (9))){
var inst_45639 = (state_45652[(9)]);
var inst_45632 = inst_45639;
var state_45652__$1 = (function (){var statearr_45663 = state_45652;
(statearr_45663[(7)] = inst_45632);

return statearr_45663;
})();
var statearr_45664_45681 = state_45652__$1;
(statearr_45664_45681[(2)] = null);

(statearr_45664_45681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45653 === (5))){
var inst_45632 = (state_45652[(7)]);
var state_45652__$1 = state_45652;
var statearr_45665_45682 = state_45652__$1;
(statearr_45665_45682[(2)] = inst_45632);

(statearr_45665_45682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45653 === (10))){
var inst_45646 = (state_45652[(2)]);
var state_45652__$1 = state_45652;
var statearr_45666_45683 = state_45652__$1;
(statearr_45666_45683[(2)] = inst_45646);

(statearr_45666_45683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45653 === (8))){
var inst_45639 = (state_45652[(9)]);
var inst_45642 = cljs.core.deref.call(null,inst_45639);
var state_45652__$1 = state_45652;
var statearr_45667_45684 = state_45652__$1;
(statearr_45667_45684[(2)] = inst_45642);

(statearr_45667_45684[(1)] = (10));


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
});})(c__29167__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29056__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29056__auto____0 = (function (){
var statearr_45671 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45671[(0)] = cljs$core$async$reduce_$_state_machine__29056__auto__);

(statearr_45671[(1)] = (1));

return statearr_45671;
});
var cljs$core$async$reduce_$_state_machine__29056__auto____1 = (function (state_45652){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_45652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e45672){if((e45672 instanceof Object)){
var ex__29059__auto__ = e45672;
var statearr_45673_45685 = state_45652;
(statearr_45673_45685[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45686 = state_45652;
state_45652 = G__45686;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29056__auto__ = function(state_45652){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29056__auto____1.call(this,state_45652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29056__auto____0;
cljs$core$async$reduce_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29056__auto____1;
return cljs$core$async$reduce_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__))
})();
var state__29169__auto__ = (function (){var statearr_45674 = f__29168__auto__.call(null);
(statearr_45674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_45674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__))
);

return c__29167__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__,f__$1){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__,f__$1){
return (function (state_45706){
var state_val_45707 = (state_45706[(1)]);
if((state_val_45707 === (1))){
var inst_45701 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_45706__$1 = state_45706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45706__$1,(2),inst_45701);
} else {
if((state_val_45707 === (2))){
var inst_45703 = (state_45706[(2)]);
var inst_45704 = f__$1.call(null,inst_45703);
var state_45706__$1 = state_45706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45706__$1,inst_45704);
} else {
return null;
}
}
});})(c__29167__auto__,f__$1))
;
return ((function (switch__29055__auto__,c__29167__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29056__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29056__auto____0 = (function (){
var statearr_45711 = [null,null,null,null,null,null,null];
(statearr_45711[(0)] = cljs$core$async$transduce_$_state_machine__29056__auto__);

(statearr_45711[(1)] = (1));

return statearr_45711;
});
var cljs$core$async$transduce_$_state_machine__29056__auto____1 = (function (state_45706){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_45706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e45712){if((e45712 instanceof Object)){
var ex__29059__auto__ = e45712;
var statearr_45713_45715 = state_45706;
(statearr_45713_45715[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45716 = state_45706;
state_45706 = G__45716;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29056__auto__ = function(state_45706){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29056__auto____1.call(this,state_45706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29056__auto____0;
cljs$core$async$transduce_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29056__auto____1;
return cljs$core$async$transduce_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__,f__$1))
})();
var state__29169__auto__ = (function (){var statearr_45714 = f__29168__auto__.call(null);
(statearr_45714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_45714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__,f__$1))
);

return c__29167__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args45717 = [];
var len__27054__auto___45769 = arguments.length;
var i__27055__auto___45770 = (0);
while(true){
if((i__27055__auto___45770 < len__27054__auto___45769)){
args45717.push((arguments[i__27055__auto___45770]));

var G__45771 = (i__27055__auto___45770 + (1));
i__27055__auto___45770 = G__45771;
continue;
} else {
}
break;
}

var G__45719 = args45717.length;
switch (G__45719) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45717.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__){
return (function (state_45744){
var state_val_45745 = (state_45744[(1)]);
if((state_val_45745 === (7))){
var inst_45726 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
var statearr_45746_45773 = state_45744__$1;
(statearr_45746_45773[(2)] = inst_45726);

(statearr_45746_45773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (1))){
var inst_45720 = cljs.core.seq.call(null,coll);
var inst_45721 = inst_45720;
var state_45744__$1 = (function (){var statearr_45747 = state_45744;
(statearr_45747[(7)] = inst_45721);

return statearr_45747;
})();
var statearr_45748_45774 = state_45744__$1;
(statearr_45748_45774[(2)] = null);

(statearr_45748_45774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (4))){
var inst_45721 = (state_45744[(7)]);
var inst_45724 = cljs.core.first.call(null,inst_45721);
var state_45744__$1 = state_45744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45744__$1,(7),ch,inst_45724);
} else {
if((state_val_45745 === (13))){
var inst_45738 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
var statearr_45749_45775 = state_45744__$1;
(statearr_45749_45775[(2)] = inst_45738);

(statearr_45749_45775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (6))){
var inst_45729 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
if(cljs.core.truth_(inst_45729)){
var statearr_45750_45776 = state_45744__$1;
(statearr_45750_45776[(1)] = (8));

} else {
var statearr_45751_45777 = state_45744__$1;
(statearr_45751_45777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (3))){
var inst_45742 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45744__$1,inst_45742);
} else {
if((state_val_45745 === (12))){
var state_45744__$1 = state_45744;
var statearr_45752_45778 = state_45744__$1;
(statearr_45752_45778[(2)] = null);

(statearr_45752_45778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (2))){
var inst_45721 = (state_45744[(7)]);
var state_45744__$1 = state_45744;
if(cljs.core.truth_(inst_45721)){
var statearr_45753_45779 = state_45744__$1;
(statearr_45753_45779[(1)] = (4));

} else {
var statearr_45754_45780 = state_45744__$1;
(statearr_45754_45780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (11))){
var inst_45735 = cljs.core.async.close_BANG_.call(null,ch);
var state_45744__$1 = state_45744;
var statearr_45755_45781 = state_45744__$1;
(statearr_45755_45781[(2)] = inst_45735);

(statearr_45755_45781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (9))){
var state_45744__$1 = state_45744;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45756_45782 = state_45744__$1;
(statearr_45756_45782[(1)] = (11));

} else {
var statearr_45757_45783 = state_45744__$1;
(statearr_45757_45783[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (5))){
var inst_45721 = (state_45744[(7)]);
var state_45744__$1 = state_45744;
var statearr_45758_45784 = state_45744__$1;
(statearr_45758_45784[(2)] = inst_45721);

(statearr_45758_45784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (10))){
var inst_45740 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
var statearr_45759_45785 = state_45744__$1;
(statearr_45759_45785[(2)] = inst_45740);

(statearr_45759_45785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (8))){
var inst_45721 = (state_45744[(7)]);
var inst_45731 = cljs.core.next.call(null,inst_45721);
var inst_45721__$1 = inst_45731;
var state_45744__$1 = (function (){var statearr_45760 = state_45744;
(statearr_45760[(7)] = inst_45721__$1);

return statearr_45760;
})();
var statearr_45761_45786 = state_45744__$1;
(statearr_45761_45786[(2)] = null);

(statearr_45761_45786[(1)] = (2));


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
});})(c__29167__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_45765 = [null,null,null,null,null,null,null,null];
(statearr_45765[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_45765[(1)] = (1));

return statearr_45765;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_45744){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_45744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e45766){if((e45766 instanceof Object)){
var ex__29059__auto__ = e45766;
var statearr_45767_45787 = state_45744;
(statearr_45767_45787[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45788 = state_45744;
state_45744 = G__45788;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_45744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_45744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__))
})();
var state__29169__auto__ = (function (){var statearr_45768 = f__29168__auto__.call(null);
(statearr_45768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_45768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__))
);

return c__29167__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26642__auto__ = (((_ == null))?null:_);
var m__26643__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,_);
} else {
var m__26643__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46014 = (function (mult,ch,cs,meta46015){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta46015 = meta46015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46016,meta46015__$1){
var self__ = this;
var _46016__$1 = this;
return (new cljs.core.async.t_cljs$core$async46014(self__.mult,self__.ch,self__.cs,meta46015__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46016){
var self__ = this;
var _46016__$1 = this;
return self__.meta46015;
});})(cs))
;

cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46014.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46015","meta46015",-1944274873,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46014";

cljs.core.async.t_cljs$core$async46014.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async46014");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async46014 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46014(mult__$1,ch__$1,cs__$1,meta46015){
return (new cljs.core.async.t_cljs$core$async46014(mult__$1,ch__$1,cs__$1,meta46015));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46014(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29167__auto___46239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___46239,cs,m,dchan,dctr,done){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___46239,cs,m,dchan,dctr,done){
return (function (state_46151){
var state_val_46152 = (state_46151[(1)]);
if((state_val_46152 === (7))){
var inst_46147 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46153_46240 = state_46151__$1;
(statearr_46153_46240[(2)] = inst_46147);

(statearr_46153_46240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (20))){
var inst_46050 = (state_46151[(7)]);
var inst_46062 = cljs.core.first.call(null,inst_46050);
var inst_46063 = cljs.core.nth.call(null,inst_46062,(0),null);
var inst_46064 = cljs.core.nth.call(null,inst_46062,(1),null);
var state_46151__$1 = (function (){var statearr_46154 = state_46151;
(statearr_46154[(8)] = inst_46063);

return statearr_46154;
})();
if(cljs.core.truth_(inst_46064)){
var statearr_46155_46241 = state_46151__$1;
(statearr_46155_46241[(1)] = (22));

} else {
var statearr_46156_46242 = state_46151__$1;
(statearr_46156_46242[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (27))){
var inst_46019 = (state_46151[(9)]);
var inst_46092 = (state_46151[(10)]);
var inst_46094 = (state_46151[(11)]);
var inst_46099 = (state_46151[(12)]);
var inst_46099__$1 = cljs.core._nth.call(null,inst_46092,inst_46094);
var inst_46100 = cljs.core.async.put_BANG_.call(null,inst_46099__$1,inst_46019,done);
var state_46151__$1 = (function (){var statearr_46157 = state_46151;
(statearr_46157[(12)] = inst_46099__$1);

return statearr_46157;
})();
if(cljs.core.truth_(inst_46100)){
var statearr_46158_46243 = state_46151__$1;
(statearr_46158_46243[(1)] = (30));

} else {
var statearr_46159_46244 = state_46151__$1;
(statearr_46159_46244[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (1))){
var state_46151__$1 = state_46151;
var statearr_46160_46245 = state_46151__$1;
(statearr_46160_46245[(2)] = null);

(statearr_46160_46245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (24))){
var inst_46050 = (state_46151[(7)]);
var inst_46069 = (state_46151[(2)]);
var inst_46070 = cljs.core.next.call(null,inst_46050);
var inst_46028 = inst_46070;
var inst_46029 = null;
var inst_46030 = (0);
var inst_46031 = (0);
var state_46151__$1 = (function (){var statearr_46161 = state_46151;
(statearr_46161[(13)] = inst_46029);

(statearr_46161[(14)] = inst_46030);

(statearr_46161[(15)] = inst_46028);

(statearr_46161[(16)] = inst_46031);

(statearr_46161[(17)] = inst_46069);

return statearr_46161;
})();
var statearr_46162_46246 = state_46151__$1;
(statearr_46162_46246[(2)] = null);

(statearr_46162_46246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (39))){
var state_46151__$1 = state_46151;
var statearr_46166_46247 = state_46151__$1;
(statearr_46166_46247[(2)] = null);

(statearr_46166_46247[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (4))){
var inst_46019 = (state_46151[(9)]);
var inst_46019__$1 = (state_46151[(2)]);
var inst_46020 = (inst_46019__$1 == null);
var state_46151__$1 = (function (){var statearr_46167 = state_46151;
(statearr_46167[(9)] = inst_46019__$1);

return statearr_46167;
})();
if(cljs.core.truth_(inst_46020)){
var statearr_46168_46248 = state_46151__$1;
(statearr_46168_46248[(1)] = (5));

} else {
var statearr_46169_46249 = state_46151__$1;
(statearr_46169_46249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (15))){
var inst_46029 = (state_46151[(13)]);
var inst_46030 = (state_46151[(14)]);
var inst_46028 = (state_46151[(15)]);
var inst_46031 = (state_46151[(16)]);
var inst_46046 = (state_46151[(2)]);
var inst_46047 = (inst_46031 + (1));
var tmp46163 = inst_46029;
var tmp46164 = inst_46030;
var tmp46165 = inst_46028;
var inst_46028__$1 = tmp46165;
var inst_46029__$1 = tmp46163;
var inst_46030__$1 = tmp46164;
var inst_46031__$1 = inst_46047;
var state_46151__$1 = (function (){var statearr_46170 = state_46151;
(statearr_46170[(13)] = inst_46029__$1);

(statearr_46170[(14)] = inst_46030__$1);

(statearr_46170[(18)] = inst_46046);

(statearr_46170[(15)] = inst_46028__$1);

(statearr_46170[(16)] = inst_46031__$1);

return statearr_46170;
})();
var statearr_46171_46250 = state_46151__$1;
(statearr_46171_46250[(2)] = null);

(statearr_46171_46250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (21))){
var inst_46073 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46175_46251 = state_46151__$1;
(statearr_46175_46251[(2)] = inst_46073);

(statearr_46175_46251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (31))){
var inst_46099 = (state_46151[(12)]);
var inst_46103 = done.call(null,null);
var inst_46104 = cljs.core.async.untap_STAR_.call(null,m,inst_46099);
var state_46151__$1 = (function (){var statearr_46176 = state_46151;
(statearr_46176[(19)] = inst_46103);

return statearr_46176;
})();
var statearr_46177_46252 = state_46151__$1;
(statearr_46177_46252[(2)] = inst_46104);

(statearr_46177_46252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (32))){
var inst_46093 = (state_46151[(20)]);
var inst_46092 = (state_46151[(10)]);
var inst_46094 = (state_46151[(11)]);
var inst_46091 = (state_46151[(21)]);
var inst_46106 = (state_46151[(2)]);
var inst_46107 = (inst_46094 + (1));
var tmp46172 = inst_46093;
var tmp46173 = inst_46092;
var tmp46174 = inst_46091;
var inst_46091__$1 = tmp46174;
var inst_46092__$1 = tmp46173;
var inst_46093__$1 = tmp46172;
var inst_46094__$1 = inst_46107;
var state_46151__$1 = (function (){var statearr_46178 = state_46151;
(statearr_46178[(20)] = inst_46093__$1);

(statearr_46178[(22)] = inst_46106);

(statearr_46178[(10)] = inst_46092__$1);

(statearr_46178[(11)] = inst_46094__$1);

(statearr_46178[(21)] = inst_46091__$1);

return statearr_46178;
})();
var statearr_46179_46253 = state_46151__$1;
(statearr_46179_46253[(2)] = null);

(statearr_46179_46253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (40))){
var inst_46119 = (state_46151[(23)]);
var inst_46123 = done.call(null,null);
var inst_46124 = cljs.core.async.untap_STAR_.call(null,m,inst_46119);
var state_46151__$1 = (function (){var statearr_46180 = state_46151;
(statearr_46180[(24)] = inst_46123);

return statearr_46180;
})();
var statearr_46181_46254 = state_46151__$1;
(statearr_46181_46254[(2)] = inst_46124);

(statearr_46181_46254[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (33))){
var inst_46110 = (state_46151[(25)]);
var inst_46112 = cljs.core.chunked_seq_QMARK_.call(null,inst_46110);
var state_46151__$1 = state_46151;
if(inst_46112){
var statearr_46182_46255 = state_46151__$1;
(statearr_46182_46255[(1)] = (36));

} else {
var statearr_46183_46256 = state_46151__$1;
(statearr_46183_46256[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (13))){
var inst_46040 = (state_46151[(26)]);
var inst_46043 = cljs.core.async.close_BANG_.call(null,inst_46040);
var state_46151__$1 = state_46151;
var statearr_46184_46257 = state_46151__$1;
(statearr_46184_46257[(2)] = inst_46043);

(statearr_46184_46257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (22))){
var inst_46063 = (state_46151[(8)]);
var inst_46066 = cljs.core.async.close_BANG_.call(null,inst_46063);
var state_46151__$1 = state_46151;
var statearr_46185_46258 = state_46151__$1;
(statearr_46185_46258[(2)] = inst_46066);

(statearr_46185_46258[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (36))){
var inst_46110 = (state_46151[(25)]);
var inst_46114 = cljs.core.chunk_first.call(null,inst_46110);
var inst_46115 = cljs.core.chunk_rest.call(null,inst_46110);
var inst_46116 = cljs.core.count.call(null,inst_46114);
var inst_46091 = inst_46115;
var inst_46092 = inst_46114;
var inst_46093 = inst_46116;
var inst_46094 = (0);
var state_46151__$1 = (function (){var statearr_46186 = state_46151;
(statearr_46186[(20)] = inst_46093);

(statearr_46186[(10)] = inst_46092);

(statearr_46186[(11)] = inst_46094);

(statearr_46186[(21)] = inst_46091);

return statearr_46186;
})();
var statearr_46187_46259 = state_46151__$1;
(statearr_46187_46259[(2)] = null);

(statearr_46187_46259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (41))){
var inst_46110 = (state_46151[(25)]);
var inst_46126 = (state_46151[(2)]);
var inst_46127 = cljs.core.next.call(null,inst_46110);
var inst_46091 = inst_46127;
var inst_46092 = null;
var inst_46093 = (0);
var inst_46094 = (0);
var state_46151__$1 = (function (){var statearr_46188 = state_46151;
(statearr_46188[(27)] = inst_46126);

(statearr_46188[(20)] = inst_46093);

(statearr_46188[(10)] = inst_46092);

(statearr_46188[(11)] = inst_46094);

(statearr_46188[(21)] = inst_46091);

return statearr_46188;
})();
var statearr_46189_46260 = state_46151__$1;
(statearr_46189_46260[(2)] = null);

(statearr_46189_46260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (43))){
var state_46151__$1 = state_46151;
var statearr_46190_46261 = state_46151__$1;
(statearr_46190_46261[(2)] = null);

(statearr_46190_46261[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (29))){
var inst_46135 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46191_46262 = state_46151__$1;
(statearr_46191_46262[(2)] = inst_46135);

(statearr_46191_46262[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (44))){
var inst_46144 = (state_46151[(2)]);
var state_46151__$1 = (function (){var statearr_46192 = state_46151;
(statearr_46192[(28)] = inst_46144);

return statearr_46192;
})();
var statearr_46193_46263 = state_46151__$1;
(statearr_46193_46263[(2)] = null);

(statearr_46193_46263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (6))){
var inst_46083 = (state_46151[(29)]);
var inst_46082 = cljs.core.deref.call(null,cs);
var inst_46083__$1 = cljs.core.keys.call(null,inst_46082);
var inst_46084 = cljs.core.count.call(null,inst_46083__$1);
var inst_46085 = cljs.core.reset_BANG_.call(null,dctr,inst_46084);
var inst_46090 = cljs.core.seq.call(null,inst_46083__$1);
var inst_46091 = inst_46090;
var inst_46092 = null;
var inst_46093 = (0);
var inst_46094 = (0);
var state_46151__$1 = (function (){var statearr_46194 = state_46151;
(statearr_46194[(30)] = inst_46085);

(statearr_46194[(20)] = inst_46093);

(statearr_46194[(10)] = inst_46092);

(statearr_46194[(29)] = inst_46083__$1);

(statearr_46194[(11)] = inst_46094);

(statearr_46194[(21)] = inst_46091);

return statearr_46194;
})();
var statearr_46195_46264 = state_46151__$1;
(statearr_46195_46264[(2)] = null);

(statearr_46195_46264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (28))){
var inst_46110 = (state_46151[(25)]);
var inst_46091 = (state_46151[(21)]);
var inst_46110__$1 = cljs.core.seq.call(null,inst_46091);
var state_46151__$1 = (function (){var statearr_46196 = state_46151;
(statearr_46196[(25)] = inst_46110__$1);

return statearr_46196;
})();
if(inst_46110__$1){
var statearr_46197_46265 = state_46151__$1;
(statearr_46197_46265[(1)] = (33));

} else {
var statearr_46198_46266 = state_46151__$1;
(statearr_46198_46266[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (25))){
var inst_46093 = (state_46151[(20)]);
var inst_46094 = (state_46151[(11)]);
var inst_46096 = (inst_46094 < inst_46093);
var inst_46097 = inst_46096;
var state_46151__$1 = state_46151;
if(cljs.core.truth_(inst_46097)){
var statearr_46199_46267 = state_46151__$1;
(statearr_46199_46267[(1)] = (27));

} else {
var statearr_46200_46268 = state_46151__$1;
(statearr_46200_46268[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (34))){
var state_46151__$1 = state_46151;
var statearr_46201_46269 = state_46151__$1;
(statearr_46201_46269[(2)] = null);

(statearr_46201_46269[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (17))){
var state_46151__$1 = state_46151;
var statearr_46202_46270 = state_46151__$1;
(statearr_46202_46270[(2)] = null);

(statearr_46202_46270[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (3))){
var inst_46149 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46151__$1,inst_46149);
} else {
if((state_val_46152 === (12))){
var inst_46078 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46203_46271 = state_46151__$1;
(statearr_46203_46271[(2)] = inst_46078);

(statearr_46203_46271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (2))){
var state_46151__$1 = state_46151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46151__$1,(4),ch);
} else {
if((state_val_46152 === (23))){
var state_46151__$1 = state_46151;
var statearr_46204_46272 = state_46151__$1;
(statearr_46204_46272[(2)] = null);

(statearr_46204_46272[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (35))){
var inst_46133 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46205_46273 = state_46151__$1;
(statearr_46205_46273[(2)] = inst_46133);

(statearr_46205_46273[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (19))){
var inst_46050 = (state_46151[(7)]);
var inst_46054 = cljs.core.chunk_first.call(null,inst_46050);
var inst_46055 = cljs.core.chunk_rest.call(null,inst_46050);
var inst_46056 = cljs.core.count.call(null,inst_46054);
var inst_46028 = inst_46055;
var inst_46029 = inst_46054;
var inst_46030 = inst_46056;
var inst_46031 = (0);
var state_46151__$1 = (function (){var statearr_46206 = state_46151;
(statearr_46206[(13)] = inst_46029);

(statearr_46206[(14)] = inst_46030);

(statearr_46206[(15)] = inst_46028);

(statearr_46206[(16)] = inst_46031);

return statearr_46206;
})();
var statearr_46207_46274 = state_46151__$1;
(statearr_46207_46274[(2)] = null);

(statearr_46207_46274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (11))){
var inst_46028 = (state_46151[(15)]);
var inst_46050 = (state_46151[(7)]);
var inst_46050__$1 = cljs.core.seq.call(null,inst_46028);
var state_46151__$1 = (function (){var statearr_46208 = state_46151;
(statearr_46208[(7)] = inst_46050__$1);

return statearr_46208;
})();
if(inst_46050__$1){
var statearr_46209_46275 = state_46151__$1;
(statearr_46209_46275[(1)] = (16));

} else {
var statearr_46210_46276 = state_46151__$1;
(statearr_46210_46276[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (9))){
var inst_46080 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46211_46277 = state_46151__$1;
(statearr_46211_46277[(2)] = inst_46080);

(statearr_46211_46277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (5))){
var inst_46026 = cljs.core.deref.call(null,cs);
var inst_46027 = cljs.core.seq.call(null,inst_46026);
var inst_46028 = inst_46027;
var inst_46029 = null;
var inst_46030 = (0);
var inst_46031 = (0);
var state_46151__$1 = (function (){var statearr_46212 = state_46151;
(statearr_46212[(13)] = inst_46029);

(statearr_46212[(14)] = inst_46030);

(statearr_46212[(15)] = inst_46028);

(statearr_46212[(16)] = inst_46031);

return statearr_46212;
})();
var statearr_46213_46278 = state_46151__$1;
(statearr_46213_46278[(2)] = null);

(statearr_46213_46278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (14))){
var state_46151__$1 = state_46151;
var statearr_46214_46279 = state_46151__$1;
(statearr_46214_46279[(2)] = null);

(statearr_46214_46279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (45))){
var inst_46141 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46215_46280 = state_46151__$1;
(statearr_46215_46280[(2)] = inst_46141);

(statearr_46215_46280[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (26))){
var inst_46083 = (state_46151[(29)]);
var inst_46137 = (state_46151[(2)]);
var inst_46138 = cljs.core.seq.call(null,inst_46083);
var state_46151__$1 = (function (){var statearr_46216 = state_46151;
(statearr_46216[(31)] = inst_46137);

return statearr_46216;
})();
if(inst_46138){
var statearr_46217_46281 = state_46151__$1;
(statearr_46217_46281[(1)] = (42));

} else {
var statearr_46218_46282 = state_46151__$1;
(statearr_46218_46282[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (16))){
var inst_46050 = (state_46151[(7)]);
var inst_46052 = cljs.core.chunked_seq_QMARK_.call(null,inst_46050);
var state_46151__$1 = state_46151;
if(inst_46052){
var statearr_46219_46283 = state_46151__$1;
(statearr_46219_46283[(1)] = (19));

} else {
var statearr_46220_46284 = state_46151__$1;
(statearr_46220_46284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (38))){
var inst_46130 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46221_46285 = state_46151__$1;
(statearr_46221_46285[(2)] = inst_46130);

(statearr_46221_46285[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (30))){
var state_46151__$1 = state_46151;
var statearr_46222_46286 = state_46151__$1;
(statearr_46222_46286[(2)] = null);

(statearr_46222_46286[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (10))){
var inst_46029 = (state_46151[(13)]);
var inst_46031 = (state_46151[(16)]);
var inst_46039 = cljs.core._nth.call(null,inst_46029,inst_46031);
var inst_46040 = cljs.core.nth.call(null,inst_46039,(0),null);
var inst_46041 = cljs.core.nth.call(null,inst_46039,(1),null);
var state_46151__$1 = (function (){var statearr_46223 = state_46151;
(statearr_46223[(26)] = inst_46040);

return statearr_46223;
})();
if(cljs.core.truth_(inst_46041)){
var statearr_46224_46287 = state_46151__$1;
(statearr_46224_46287[(1)] = (13));

} else {
var statearr_46225_46288 = state_46151__$1;
(statearr_46225_46288[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (18))){
var inst_46076 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46226_46289 = state_46151__$1;
(statearr_46226_46289[(2)] = inst_46076);

(statearr_46226_46289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (42))){
var state_46151__$1 = state_46151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46151__$1,(45),dchan);
} else {
if((state_val_46152 === (37))){
var inst_46110 = (state_46151[(25)]);
var inst_46119 = (state_46151[(23)]);
var inst_46019 = (state_46151[(9)]);
var inst_46119__$1 = cljs.core.first.call(null,inst_46110);
var inst_46120 = cljs.core.async.put_BANG_.call(null,inst_46119__$1,inst_46019,done);
var state_46151__$1 = (function (){var statearr_46227 = state_46151;
(statearr_46227[(23)] = inst_46119__$1);

return statearr_46227;
})();
if(cljs.core.truth_(inst_46120)){
var statearr_46228_46290 = state_46151__$1;
(statearr_46228_46290[(1)] = (39));

} else {
var statearr_46229_46291 = state_46151__$1;
(statearr_46229_46291[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (8))){
var inst_46030 = (state_46151[(14)]);
var inst_46031 = (state_46151[(16)]);
var inst_46033 = (inst_46031 < inst_46030);
var inst_46034 = inst_46033;
var state_46151__$1 = state_46151;
if(cljs.core.truth_(inst_46034)){
var statearr_46230_46292 = state_46151__$1;
(statearr_46230_46292[(1)] = (10));

} else {
var statearr_46231_46293 = state_46151__$1;
(statearr_46231_46293[(1)] = (11));

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
});})(c__29167__auto___46239,cs,m,dchan,dctr,done))
;
return ((function (switch__29055__auto__,c__29167__auto___46239,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29056__auto__ = null;
var cljs$core$async$mult_$_state_machine__29056__auto____0 = (function (){
var statearr_46235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46235[(0)] = cljs$core$async$mult_$_state_machine__29056__auto__);

(statearr_46235[(1)] = (1));

return statearr_46235;
});
var cljs$core$async$mult_$_state_machine__29056__auto____1 = (function (state_46151){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_46151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e46236){if((e46236 instanceof Object)){
var ex__29059__auto__ = e46236;
var statearr_46237_46294 = state_46151;
(statearr_46237_46294[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46295 = state_46151;
state_46151 = G__46295;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29056__auto__ = function(state_46151){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29056__auto____1.call(this,state_46151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29056__auto____0;
cljs$core$async$mult_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29056__auto____1;
return cljs$core$async$mult_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___46239,cs,m,dchan,dctr,done))
})();
var state__29169__auto__ = (function (){var statearr_46238 = f__29168__auto__.call(null);
(statearr_46238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___46239);

return statearr_46238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___46239,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args46296 = [];
var len__27054__auto___46299 = arguments.length;
var i__27055__auto___46300 = (0);
while(true){
if((i__27055__auto___46300 < len__27054__auto___46299)){
args46296.push((arguments[i__27055__auto___46300]));

var G__46301 = (i__27055__auto___46300 + (1));
i__27055__auto___46300 = G__46301;
continue;
} else {
}
break;
}

var G__46298 = args46296.length;
switch (G__46298) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46296.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,state_map);
} else {
var m__26643__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,mode);
} else {
var m__26643__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___46313 = arguments.length;
var i__27055__auto___46314 = (0);
while(true){
if((i__27055__auto___46314 < len__27054__auto___46313)){
args__27061__auto__.push((arguments[i__27055__auto___46314]));

var G__46315 = (i__27055__auto___46314 + (1));
i__27055__auto___46314 = G__46315;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46307){
var map__46308 = p__46307;
var map__46308__$1 = ((((!((map__46308 == null)))?((((map__46308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46308):map__46308);
var opts = map__46308__$1;
var statearr_46310_46316 = state;
(statearr_46310_46316[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__46308,map__46308__$1,opts){
return (function (val){
var statearr_46311_46317 = state;
(statearr_46311_46317[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46308,map__46308__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_46312_46318 = state;
(statearr_46312_46318[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46303){
var G__46304 = cljs.core.first.call(null,seq46303);
var seq46303__$1 = cljs.core.next.call(null,seq46303);
var G__46305 = cljs.core.first.call(null,seq46303__$1);
var seq46303__$2 = cljs.core.next.call(null,seq46303__$1);
var G__46306 = cljs.core.first.call(null,seq46303__$2);
var seq46303__$3 = cljs.core.next.call(null,seq46303__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46304,G__46305,G__46306,seq46303__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46484 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46485){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46485 = meta46485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46486,meta46485__$1){
var self__ = this;
var _46486__$1 = this;
return (new cljs.core.async.t_cljs$core$async46484(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46485__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46486){
var self__ = this;
var _46486__$1 = this;
return self__.meta46485;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46484.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46485","meta46485",-883458062,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46484";

cljs.core.async.t_cljs$core$async46484.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async46484");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46484 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46484(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46485){
return (new cljs.core.async.t_cljs$core$async46484(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46485));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46484(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29167__auto___46649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___46649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___46649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46586){
var state_val_46587 = (state_46586[(1)]);
if((state_val_46587 === (7))){
var inst_46502 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
var statearr_46588_46650 = state_46586__$1;
(statearr_46588_46650[(2)] = inst_46502);

(statearr_46588_46650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (20))){
var inst_46514 = (state_46586[(7)]);
var state_46586__$1 = state_46586;
var statearr_46589_46651 = state_46586__$1;
(statearr_46589_46651[(2)] = inst_46514);

(statearr_46589_46651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (27))){
var state_46586__$1 = state_46586;
var statearr_46590_46652 = state_46586__$1;
(statearr_46590_46652[(2)] = null);

(statearr_46590_46652[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (1))){
var inst_46490 = (state_46586[(8)]);
var inst_46490__$1 = calc_state.call(null);
var inst_46492 = (inst_46490__$1 == null);
var inst_46493 = cljs.core.not.call(null,inst_46492);
var state_46586__$1 = (function (){var statearr_46591 = state_46586;
(statearr_46591[(8)] = inst_46490__$1);

return statearr_46591;
})();
if(inst_46493){
var statearr_46592_46653 = state_46586__$1;
(statearr_46592_46653[(1)] = (2));

} else {
var statearr_46593_46654 = state_46586__$1;
(statearr_46593_46654[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (24))){
var inst_46560 = (state_46586[(9)]);
var inst_46546 = (state_46586[(10)]);
var inst_46537 = (state_46586[(11)]);
var inst_46560__$1 = inst_46537.call(null,inst_46546);
var state_46586__$1 = (function (){var statearr_46594 = state_46586;
(statearr_46594[(9)] = inst_46560__$1);

return statearr_46594;
})();
if(cljs.core.truth_(inst_46560__$1)){
var statearr_46595_46655 = state_46586__$1;
(statearr_46595_46655[(1)] = (29));

} else {
var statearr_46596_46656 = state_46586__$1;
(statearr_46596_46656[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (4))){
var inst_46505 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
if(cljs.core.truth_(inst_46505)){
var statearr_46597_46657 = state_46586__$1;
(statearr_46597_46657[(1)] = (8));

} else {
var statearr_46598_46658 = state_46586__$1;
(statearr_46598_46658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (15))){
var inst_46531 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
if(cljs.core.truth_(inst_46531)){
var statearr_46599_46659 = state_46586__$1;
(statearr_46599_46659[(1)] = (19));

} else {
var statearr_46600_46660 = state_46586__$1;
(statearr_46600_46660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (21))){
var inst_46536 = (state_46586[(12)]);
var inst_46536__$1 = (state_46586[(2)]);
var inst_46537 = cljs.core.get.call(null,inst_46536__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46538 = cljs.core.get.call(null,inst_46536__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46539 = cljs.core.get.call(null,inst_46536__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46586__$1 = (function (){var statearr_46601 = state_46586;
(statearr_46601[(13)] = inst_46538);

(statearr_46601[(11)] = inst_46537);

(statearr_46601[(12)] = inst_46536__$1);

return statearr_46601;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46586__$1,(22),inst_46539);
} else {
if((state_val_46587 === (31))){
var inst_46568 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
if(cljs.core.truth_(inst_46568)){
var statearr_46602_46661 = state_46586__$1;
(statearr_46602_46661[(1)] = (32));

} else {
var statearr_46603_46662 = state_46586__$1;
(statearr_46603_46662[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (32))){
var inst_46545 = (state_46586[(14)]);
var state_46586__$1 = state_46586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46586__$1,(35),out,inst_46545);
} else {
if((state_val_46587 === (33))){
var inst_46536 = (state_46586[(12)]);
var inst_46514 = inst_46536;
var state_46586__$1 = (function (){var statearr_46604 = state_46586;
(statearr_46604[(7)] = inst_46514);

return statearr_46604;
})();
var statearr_46605_46663 = state_46586__$1;
(statearr_46605_46663[(2)] = null);

(statearr_46605_46663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (13))){
var inst_46514 = (state_46586[(7)]);
var inst_46521 = inst_46514.cljs$lang$protocol_mask$partition0$;
var inst_46522 = (inst_46521 & (64));
var inst_46523 = inst_46514.cljs$core$ISeq$;
var inst_46524 = (inst_46522) || (inst_46523);
var state_46586__$1 = state_46586;
if(cljs.core.truth_(inst_46524)){
var statearr_46606_46664 = state_46586__$1;
(statearr_46606_46664[(1)] = (16));

} else {
var statearr_46607_46665 = state_46586__$1;
(statearr_46607_46665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (22))){
var inst_46545 = (state_46586[(14)]);
var inst_46546 = (state_46586[(10)]);
var inst_46544 = (state_46586[(2)]);
var inst_46545__$1 = cljs.core.nth.call(null,inst_46544,(0),null);
var inst_46546__$1 = cljs.core.nth.call(null,inst_46544,(1),null);
var inst_46547 = (inst_46545__$1 == null);
var inst_46548 = cljs.core._EQ_.call(null,inst_46546__$1,change);
var inst_46549 = (inst_46547) || (inst_46548);
var state_46586__$1 = (function (){var statearr_46608 = state_46586;
(statearr_46608[(14)] = inst_46545__$1);

(statearr_46608[(10)] = inst_46546__$1);

return statearr_46608;
})();
if(cljs.core.truth_(inst_46549)){
var statearr_46609_46666 = state_46586__$1;
(statearr_46609_46666[(1)] = (23));

} else {
var statearr_46610_46667 = state_46586__$1;
(statearr_46610_46667[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (36))){
var inst_46536 = (state_46586[(12)]);
var inst_46514 = inst_46536;
var state_46586__$1 = (function (){var statearr_46611 = state_46586;
(statearr_46611[(7)] = inst_46514);

return statearr_46611;
})();
var statearr_46612_46668 = state_46586__$1;
(statearr_46612_46668[(2)] = null);

(statearr_46612_46668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (29))){
var inst_46560 = (state_46586[(9)]);
var state_46586__$1 = state_46586;
var statearr_46613_46669 = state_46586__$1;
(statearr_46613_46669[(2)] = inst_46560);

(statearr_46613_46669[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (6))){
var state_46586__$1 = state_46586;
var statearr_46614_46670 = state_46586__$1;
(statearr_46614_46670[(2)] = false);

(statearr_46614_46670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (28))){
var inst_46556 = (state_46586[(2)]);
var inst_46557 = calc_state.call(null);
var inst_46514 = inst_46557;
var state_46586__$1 = (function (){var statearr_46615 = state_46586;
(statearr_46615[(7)] = inst_46514);

(statearr_46615[(15)] = inst_46556);

return statearr_46615;
})();
var statearr_46616_46671 = state_46586__$1;
(statearr_46616_46671[(2)] = null);

(statearr_46616_46671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (25))){
var inst_46582 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
var statearr_46617_46672 = state_46586__$1;
(statearr_46617_46672[(2)] = inst_46582);

(statearr_46617_46672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (34))){
var inst_46580 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
var statearr_46618_46673 = state_46586__$1;
(statearr_46618_46673[(2)] = inst_46580);

(statearr_46618_46673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (17))){
var state_46586__$1 = state_46586;
var statearr_46619_46674 = state_46586__$1;
(statearr_46619_46674[(2)] = false);

(statearr_46619_46674[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (3))){
var state_46586__$1 = state_46586;
var statearr_46620_46675 = state_46586__$1;
(statearr_46620_46675[(2)] = false);

(statearr_46620_46675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (12))){
var inst_46584 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46586__$1,inst_46584);
} else {
if((state_val_46587 === (2))){
var inst_46490 = (state_46586[(8)]);
var inst_46495 = inst_46490.cljs$lang$protocol_mask$partition0$;
var inst_46496 = (inst_46495 & (64));
var inst_46497 = inst_46490.cljs$core$ISeq$;
var inst_46498 = (inst_46496) || (inst_46497);
var state_46586__$1 = state_46586;
if(cljs.core.truth_(inst_46498)){
var statearr_46621_46676 = state_46586__$1;
(statearr_46621_46676[(1)] = (5));

} else {
var statearr_46622_46677 = state_46586__$1;
(statearr_46622_46677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (23))){
var inst_46545 = (state_46586[(14)]);
var inst_46551 = (inst_46545 == null);
var state_46586__$1 = state_46586;
if(cljs.core.truth_(inst_46551)){
var statearr_46623_46678 = state_46586__$1;
(statearr_46623_46678[(1)] = (26));

} else {
var statearr_46624_46679 = state_46586__$1;
(statearr_46624_46679[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (35))){
var inst_46571 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
if(cljs.core.truth_(inst_46571)){
var statearr_46625_46680 = state_46586__$1;
(statearr_46625_46680[(1)] = (36));

} else {
var statearr_46626_46681 = state_46586__$1;
(statearr_46626_46681[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (19))){
var inst_46514 = (state_46586[(7)]);
var inst_46533 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46514);
var state_46586__$1 = state_46586;
var statearr_46627_46682 = state_46586__$1;
(statearr_46627_46682[(2)] = inst_46533);

(statearr_46627_46682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (11))){
var inst_46514 = (state_46586[(7)]);
var inst_46518 = (inst_46514 == null);
var inst_46519 = cljs.core.not.call(null,inst_46518);
var state_46586__$1 = state_46586;
if(inst_46519){
var statearr_46628_46683 = state_46586__$1;
(statearr_46628_46683[(1)] = (13));

} else {
var statearr_46629_46684 = state_46586__$1;
(statearr_46629_46684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (9))){
var inst_46490 = (state_46586[(8)]);
var state_46586__$1 = state_46586;
var statearr_46630_46685 = state_46586__$1;
(statearr_46630_46685[(2)] = inst_46490);

(statearr_46630_46685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (5))){
var state_46586__$1 = state_46586;
var statearr_46631_46686 = state_46586__$1;
(statearr_46631_46686[(2)] = true);

(statearr_46631_46686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (14))){
var state_46586__$1 = state_46586;
var statearr_46632_46687 = state_46586__$1;
(statearr_46632_46687[(2)] = false);

(statearr_46632_46687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (26))){
var inst_46546 = (state_46586[(10)]);
var inst_46553 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46546);
var state_46586__$1 = state_46586;
var statearr_46633_46688 = state_46586__$1;
(statearr_46633_46688[(2)] = inst_46553);

(statearr_46633_46688[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (16))){
var state_46586__$1 = state_46586;
var statearr_46634_46689 = state_46586__$1;
(statearr_46634_46689[(2)] = true);

(statearr_46634_46689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (38))){
var inst_46576 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
var statearr_46635_46690 = state_46586__$1;
(statearr_46635_46690[(2)] = inst_46576);

(statearr_46635_46690[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (30))){
var inst_46538 = (state_46586[(13)]);
var inst_46546 = (state_46586[(10)]);
var inst_46537 = (state_46586[(11)]);
var inst_46563 = cljs.core.empty_QMARK_.call(null,inst_46537);
var inst_46564 = inst_46538.call(null,inst_46546);
var inst_46565 = cljs.core.not.call(null,inst_46564);
var inst_46566 = (inst_46563) && (inst_46565);
var state_46586__$1 = state_46586;
var statearr_46636_46691 = state_46586__$1;
(statearr_46636_46691[(2)] = inst_46566);

(statearr_46636_46691[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (10))){
var inst_46490 = (state_46586[(8)]);
var inst_46510 = (state_46586[(2)]);
var inst_46511 = cljs.core.get.call(null,inst_46510,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46512 = cljs.core.get.call(null,inst_46510,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46513 = cljs.core.get.call(null,inst_46510,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46514 = inst_46490;
var state_46586__$1 = (function (){var statearr_46637 = state_46586;
(statearr_46637[(16)] = inst_46513);

(statearr_46637[(17)] = inst_46512);

(statearr_46637[(7)] = inst_46514);

(statearr_46637[(18)] = inst_46511);

return statearr_46637;
})();
var statearr_46638_46692 = state_46586__$1;
(statearr_46638_46692[(2)] = null);

(statearr_46638_46692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (18))){
var inst_46528 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
var statearr_46639_46693 = state_46586__$1;
(statearr_46639_46693[(2)] = inst_46528);

(statearr_46639_46693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (37))){
var state_46586__$1 = state_46586;
var statearr_46640_46694 = state_46586__$1;
(statearr_46640_46694[(2)] = null);

(statearr_46640_46694[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (8))){
var inst_46490 = (state_46586[(8)]);
var inst_46507 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46490);
var state_46586__$1 = state_46586;
var statearr_46641_46695 = state_46586__$1;
(statearr_46641_46695[(2)] = inst_46507);

(statearr_46641_46695[(1)] = (10));


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
});})(c__29167__auto___46649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29055__auto__,c__29167__auto___46649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29056__auto__ = null;
var cljs$core$async$mix_$_state_machine__29056__auto____0 = (function (){
var statearr_46645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46645[(0)] = cljs$core$async$mix_$_state_machine__29056__auto__);

(statearr_46645[(1)] = (1));

return statearr_46645;
});
var cljs$core$async$mix_$_state_machine__29056__auto____1 = (function (state_46586){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_46586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e46646){if((e46646 instanceof Object)){
var ex__29059__auto__ = e46646;
var statearr_46647_46696 = state_46586;
(statearr_46647_46696[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46697 = state_46586;
state_46586 = G__46697;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29056__auto__ = function(state_46586){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29056__auto____1.call(this,state_46586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29056__auto____0;
cljs$core$async$mix_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29056__auto____1;
return cljs$core$async$mix_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___46649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29169__auto__ = (function (){var statearr_46648 = f__29168__auto__.call(null);
(statearr_46648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___46649);

return statearr_46648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___46649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args46698 = [];
var len__27054__auto___46701 = arguments.length;
var i__27055__auto___46702 = (0);
while(true){
if((i__27055__auto___46702 < len__27054__auto___46701)){
args46698.push((arguments[i__27055__auto___46702]));

var G__46703 = (i__27055__auto___46702 + (1));
i__27055__auto___46702 = G__46703;
continue;
} else {
}
break;
}

var G__46700 = args46698.length;
switch (G__46700) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46698.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args46706 = [];
var len__27054__auto___46831 = arguments.length;
var i__27055__auto___46832 = (0);
while(true){
if((i__27055__auto___46832 < len__27054__auto___46831)){
args46706.push((arguments[i__27055__auto___46832]));

var G__46833 = (i__27055__auto___46832 + (1));
i__27055__auto___46832 = G__46833;
continue;
} else {
}
break;
}

var G__46708 = args46706.length;
switch (G__46708) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46706.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25979__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25979__auto__,mults){
return (function (p1__46705_SHARP_){
if(cljs.core.truth_(p1__46705_SHARP_.call(null,topic))){
return p1__46705_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46705_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46709 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46710){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46710 = meta46710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46711,meta46710__$1){
var self__ = this;
var _46711__$1 = this;
return (new cljs.core.async.t_cljs$core$async46709(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46710__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46711){
var self__ = this;
var _46711__$1 = this;
return self__.meta46710;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46709.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46709.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async46709.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46709.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46709.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46710","meta46710",-1816035031,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46709";

cljs.core.async.t_cljs$core$async46709.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async46709");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46709 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46709(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46710){
return (new cljs.core.async.t_cljs$core$async46709(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46710));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46709(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29167__auto___46835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___46835,mults,ensure_mult,p){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___46835,mults,ensure_mult,p){
return (function (state_46783){
var state_val_46784 = (state_46783[(1)]);
if((state_val_46784 === (7))){
var inst_46779 = (state_46783[(2)]);
var state_46783__$1 = state_46783;
var statearr_46785_46836 = state_46783__$1;
(statearr_46785_46836[(2)] = inst_46779);

(statearr_46785_46836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (20))){
var state_46783__$1 = state_46783;
var statearr_46786_46837 = state_46783__$1;
(statearr_46786_46837[(2)] = null);

(statearr_46786_46837[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (1))){
var state_46783__$1 = state_46783;
var statearr_46787_46838 = state_46783__$1;
(statearr_46787_46838[(2)] = null);

(statearr_46787_46838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (24))){
var inst_46762 = (state_46783[(7)]);
var inst_46771 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46762);
var state_46783__$1 = state_46783;
var statearr_46788_46839 = state_46783__$1;
(statearr_46788_46839[(2)] = inst_46771);

(statearr_46788_46839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (4))){
var inst_46714 = (state_46783[(8)]);
var inst_46714__$1 = (state_46783[(2)]);
var inst_46715 = (inst_46714__$1 == null);
var state_46783__$1 = (function (){var statearr_46789 = state_46783;
(statearr_46789[(8)] = inst_46714__$1);

return statearr_46789;
})();
if(cljs.core.truth_(inst_46715)){
var statearr_46790_46840 = state_46783__$1;
(statearr_46790_46840[(1)] = (5));

} else {
var statearr_46791_46841 = state_46783__$1;
(statearr_46791_46841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (15))){
var inst_46756 = (state_46783[(2)]);
var state_46783__$1 = state_46783;
var statearr_46792_46842 = state_46783__$1;
(statearr_46792_46842[(2)] = inst_46756);

(statearr_46792_46842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (21))){
var inst_46776 = (state_46783[(2)]);
var state_46783__$1 = (function (){var statearr_46793 = state_46783;
(statearr_46793[(9)] = inst_46776);

return statearr_46793;
})();
var statearr_46794_46843 = state_46783__$1;
(statearr_46794_46843[(2)] = null);

(statearr_46794_46843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (13))){
var inst_46738 = (state_46783[(10)]);
var inst_46740 = cljs.core.chunked_seq_QMARK_.call(null,inst_46738);
var state_46783__$1 = state_46783;
if(inst_46740){
var statearr_46795_46844 = state_46783__$1;
(statearr_46795_46844[(1)] = (16));

} else {
var statearr_46796_46845 = state_46783__$1;
(statearr_46796_46845[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (22))){
var inst_46768 = (state_46783[(2)]);
var state_46783__$1 = state_46783;
if(cljs.core.truth_(inst_46768)){
var statearr_46797_46846 = state_46783__$1;
(statearr_46797_46846[(1)] = (23));

} else {
var statearr_46798_46847 = state_46783__$1;
(statearr_46798_46847[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (6))){
var inst_46714 = (state_46783[(8)]);
var inst_46764 = (state_46783[(11)]);
var inst_46762 = (state_46783[(7)]);
var inst_46762__$1 = topic_fn.call(null,inst_46714);
var inst_46763 = cljs.core.deref.call(null,mults);
var inst_46764__$1 = cljs.core.get.call(null,inst_46763,inst_46762__$1);
var state_46783__$1 = (function (){var statearr_46799 = state_46783;
(statearr_46799[(11)] = inst_46764__$1);

(statearr_46799[(7)] = inst_46762__$1);

return statearr_46799;
})();
if(cljs.core.truth_(inst_46764__$1)){
var statearr_46800_46848 = state_46783__$1;
(statearr_46800_46848[(1)] = (19));

} else {
var statearr_46801_46849 = state_46783__$1;
(statearr_46801_46849[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (25))){
var inst_46773 = (state_46783[(2)]);
var state_46783__$1 = state_46783;
var statearr_46802_46850 = state_46783__$1;
(statearr_46802_46850[(2)] = inst_46773);

(statearr_46802_46850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (17))){
var inst_46738 = (state_46783[(10)]);
var inst_46747 = cljs.core.first.call(null,inst_46738);
var inst_46748 = cljs.core.async.muxch_STAR_.call(null,inst_46747);
var inst_46749 = cljs.core.async.close_BANG_.call(null,inst_46748);
var inst_46750 = cljs.core.next.call(null,inst_46738);
var inst_46724 = inst_46750;
var inst_46725 = null;
var inst_46726 = (0);
var inst_46727 = (0);
var state_46783__$1 = (function (){var statearr_46803 = state_46783;
(statearr_46803[(12)] = inst_46724);

(statearr_46803[(13)] = inst_46727);

(statearr_46803[(14)] = inst_46725);

(statearr_46803[(15)] = inst_46726);

(statearr_46803[(16)] = inst_46749);

return statearr_46803;
})();
var statearr_46804_46851 = state_46783__$1;
(statearr_46804_46851[(2)] = null);

(statearr_46804_46851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (3))){
var inst_46781 = (state_46783[(2)]);
var state_46783__$1 = state_46783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46783__$1,inst_46781);
} else {
if((state_val_46784 === (12))){
var inst_46758 = (state_46783[(2)]);
var state_46783__$1 = state_46783;
var statearr_46805_46852 = state_46783__$1;
(statearr_46805_46852[(2)] = inst_46758);

(statearr_46805_46852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (2))){
var state_46783__$1 = state_46783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46783__$1,(4),ch);
} else {
if((state_val_46784 === (23))){
var state_46783__$1 = state_46783;
var statearr_46806_46853 = state_46783__$1;
(statearr_46806_46853[(2)] = null);

(statearr_46806_46853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (19))){
var inst_46714 = (state_46783[(8)]);
var inst_46764 = (state_46783[(11)]);
var inst_46766 = cljs.core.async.muxch_STAR_.call(null,inst_46764);
var state_46783__$1 = state_46783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46783__$1,(22),inst_46766,inst_46714);
} else {
if((state_val_46784 === (11))){
var inst_46724 = (state_46783[(12)]);
var inst_46738 = (state_46783[(10)]);
var inst_46738__$1 = cljs.core.seq.call(null,inst_46724);
var state_46783__$1 = (function (){var statearr_46807 = state_46783;
(statearr_46807[(10)] = inst_46738__$1);

return statearr_46807;
})();
if(inst_46738__$1){
var statearr_46808_46854 = state_46783__$1;
(statearr_46808_46854[(1)] = (13));

} else {
var statearr_46809_46855 = state_46783__$1;
(statearr_46809_46855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (9))){
var inst_46760 = (state_46783[(2)]);
var state_46783__$1 = state_46783;
var statearr_46810_46856 = state_46783__$1;
(statearr_46810_46856[(2)] = inst_46760);

(statearr_46810_46856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (5))){
var inst_46721 = cljs.core.deref.call(null,mults);
var inst_46722 = cljs.core.vals.call(null,inst_46721);
var inst_46723 = cljs.core.seq.call(null,inst_46722);
var inst_46724 = inst_46723;
var inst_46725 = null;
var inst_46726 = (0);
var inst_46727 = (0);
var state_46783__$1 = (function (){var statearr_46811 = state_46783;
(statearr_46811[(12)] = inst_46724);

(statearr_46811[(13)] = inst_46727);

(statearr_46811[(14)] = inst_46725);

(statearr_46811[(15)] = inst_46726);

return statearr_46811;
})();
var statearr_46812_46857 = state_46783__$1;
(statearr_46812_46857[(2)] = null);

(statearr_46812_46857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (14))){
var state_46783__$1 = state_46783;
var statearr_46816_46858 = state_46783__$1;
(statearr_46816_46858[(2)] = null);

(statearr_46816_46858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (16))){
var inst_46738 = (state_46783[(10)]);
var inst_46742 = cljs.core.chunk_first.call(null,inst_46738);
var inst_46743 = cljs.core.chunk_rest.call(null,inst_46738);
var inst_46744 = cljs.core.count.call(null,inst_46742);
var inst_46724 = inst_46743;
var inst_46725 = inst_46742;
var inst_46726 = inst_46744;
var inst_46727 = (0);
var state_46783__$1 = (function (){var statearr_46817 = state_46783;
(statearr_46817[(12)] = inst_46724);

(statearr_46817[(13)] = inst_46727);

(statearr_46817[(14)] = inst_46725);

(statearr_46817[(15)] = inst_46726);

return statearr_46817;
})();
var statearr_46818_46859 = state_46783__$1;
(statearr_46818_46859[(2)] = null);

(statearr_46818_46859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (10))){
var inst_46724 = (state_46783[(12)]);
var inst_46727 = (state_46783[(13)]);
var inst_46725 = (state_46783[(14)]);
var inst_46726 = (state_46783[(15)]);
var inst_46732 = cljs.core._nth.call(null,inst_46725,inst_46727);
var inst_46733 = cljs.core.async.muxch_STAR_.call(null,inst_46732);
var inst_46734 = cljs.core.async.close_BANG_.call(null,inst_46733);
var inst_46735 = (inst_46727 + (1));
var tmp46813 = inst_46724;
var tmp46814 = inst_46725;
var tmp46815 = inst_46726;
var inst_46724__$1 = tmp46813;
var inst_46725__$1 = tmp46814;
var inst_46726__$1 = tmp46815;
var inst_46727__$1 = inst_46735;
var state_46783__$1 = (function (){var statearr_46819 = state_46783;
(statearr_46819[(12)] = inst_46724__$1);

(statearr_46819[(13)] = inst_46727__$1);

(statearr_46819[(17)] = inst_46734);

(statearr_46819[(14)] = inst_46725__$1);

(statearr_46819[(15)] = inst_46726__$1);

return statearr_46819;
})();
var statearr_46820_46860 = state_46783__$1;
(statearr_46820_46860[(2)] = null);

(statearr_46820_46860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (18))){
var inst_46753 = (state_46783[(2)]);
var state_46783__$1 = state_46783;
var statearr_46821_46861 = state_46783__$1;
(statearr_46821_46861[(2)] = inst_46753);

(statearr_46821_46861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46784 === (8))){
var inst_46727 = (state_46783[(13)]);
var inst_46726 = (state_46783[(15)]);
var inst_46729 = (inst_46727 < inst_46726);
var inst_46730 = inst_46729;
var state_46783__$1 = state_46783;
if(cljs.core.truth_(inst_46730)){
var statearr_46822_46862 = state_46783__$1;
(statearr_46822_46862[(1)] = (10));

} else {
var statearr_46823_46863 = state_46783__$1;
(statearr_46823_46863[(1)] = (11));

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
});})(c__29167__auto___46835,mults,ensure_mult,p))
;
return ((function (switch__29055__auto__,c__29167__auto___46835,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_46827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46827[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_46827[(1)] = (1));

return statearr_46827;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_46783){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_46783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e46828){if((e46828 instanceof Object)){
var ex__29059__auto__ = e46828;
var statearr_46829_46864 = state_46783;
(statearr_46829_46864[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46865 = state_46783;
state_46783 = G__46865;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_46783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_46783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___46835,mults,ensure_mult,p))
})();
var state__29169__auto__ = (function (){var statearr_46830 = f__29168__auto__.call(null);
(statearr_46830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___46835);

return statearr_46830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___46835,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args46866 = [];
var len__27054__auto___46869 = arguments.length;
var i__27055__auto___46870 = (0);
while(true){
if((i__27055__auto___46870 < len__27054__auto___46869)){
args46866.push((arguments[i__27055__auto___46870]));

var G__46871 = (i__27055__auto___46870 + (1));
i__27055__auto___46870 = G__46871;
continue;
} else {
}
break;
}

var G__46868 = args46866.length;
switch (G__46868) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46866.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args46873 = [];
var len__27054__auto___46876 = arguments.length;
var i__27055__auto___46877 = (0);
while(true){
if((i__27055__auto___46877 < len__27054__auto___46876)){
args46873.push((arguments[i__27055__auto___46877]));

var G__46878 = (i__27055__auto___46877 + (1));
i__27055__auto___46877 = G__46878;
continue;
} else {
}
break;
}

var G__46875 = args46873.length;
switch (G__46875) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46873.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args46880 = [];
var len__27054__auto___46951 = arguments.length;
var i__27055__auto___46952 = (0);
while(true){
if((i__27055__auto___46952 < len__27054__auto___46951)){
args46880.push((arguments[i__27055__auto___46952]));

var G__46953 = (i__27055__auto___46952 + (1));
i__27055__auto___46952 = G__46953;
continue;
} else {
}
break;
}

var G__46882 = args46880.length;
switch (G__46882) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46880.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29167__auto___46955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___46955,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___46955,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46921){
var state_val_46922 = (state_46921[(1)]);
if((state_val_46922 === (7))){
var state_46921__$1 = state_46921;
var statearr_46923_46956 = state_46921__$1;
(statearr_46923_46956[(2)] = null);

(statearr_46923_46956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (1))){
var state_46921__$1 = state_46921;
var statearr_46924_46957 = state_46921__$1;
(statearr_46924_46957[(2)] = null);

(statearr_46924_46957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (4))){
var inst_46885 = (state_46921[(7)]);
var inst_46887 = (inst_46885 < cnt);
var state_46921__$1 = state_46921;
if(cljs.core.truth_(inst_46887)){
var statearr_46925_46958 = state_46921__$1;
(statearr_46925_46958[(1)] = (6));

} else {
var statearr_46926_46959 = state_46921__$1;
(statearr_46926_46959[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (15))){
var inst_46917 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
var statearr_46927_46960 = state_46921__$1;
(statearr_46927_46960[(2)] = inst_46917);

(statearr_46927_46960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (13))){
var inst_46910 = cljs.core.async.close_BANG_.call(null,out);
var state_46921__$1 = state_46921;
var statearr_46928_46961 = state_46921__$1;
(statearr_46928_46961[(2)] = inst_46910);

(statearr_46928_46961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (6))){
var state_46921__$1 = state_46921;
var statearr_46929_46962 = state_46921__$1;
(statearr_46929_46962[(2)] = null);

(statearr_46929_46962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (3))){
var inst_46919 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46921__$1,inst_46919);
} else {
if((state_val_46922 === (12))){
var inst_46907 = (state_46921[(8)]);
var inst_46907__$1 = (state_46921[(2)]);
var inst_46908 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46907__$1);
var state_46921__$1 = (function (){var statearr_46930 = state_46921;
(statearr_46930[(8)] = inst_46907__$1);

return statearr_46930;
})();
if(cljs.core.truth_(inst_46908)){
var statearr_46931_46963 = state_46921__$1;
(statearr_46931_46963[(1)] = (13));

} else {
var statearr_46932_46964 = state_46921__$1;
(statearr_46932_46964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (2))){
var inst_46884 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46885 = (0);
var state_46921__$1 = (function (){var statearr_46933 = state_46921;
(statearr_46933[(9)] = inst_46884);

(statearr_46933[(7)] = inst_46885);

return statearr_46933;
})();
var statearr_46934_46965 = state_46921__$1;
(statearr_46934_46965[(2)] = null);

(statearr_46934_46965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (11))){
var inst_46885 = (state_46921[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46921,(10),Object,null,(9));
var inst_46894 = chs__$1.call(null,inst_46885);
var inst_46895 = done.call(null,inst_46885);
var inst_46896 = cljs.core.async.take_BANG_.call(null,inst_46894,inst_46895);
var state_46921__$1 = state_46921;
var statearr_46935_46966 = state_46921__$1;
(statearr_46935_46966[(2)] = inst_46896);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46921__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (9))){
var inst_46885 = (state_46921[(7)]);
var inst_46898 = (state_46921[(2)]);
var inst_46899 = (inst_46885 + (1));
var inst_46885__$1 = inst_46899;
var state_46921__$1 = (function (){var statearr_46936 = state_46921;
(statearr_46936[(10)] = inst_46898);

(statearr_46936[(7)] = inst_46885__$1);

return statearr_46936;
})();
var statearr_46937_46967 = state_46921__$1;
(statearr_46937_46967[(2)] = null);

(statearr_46937_46967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (5))){
var inst_46905 = (state_46921[(2)]);
var state_46921__$1 = (function (){var statearr_46938 = state_46921;
(statearr_46938[(11)] = inst_46905);

return statearr_46938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46921__$1,(12),dchan);
} else {
if((state_val_46922 === (14))){
var inst_46907 = (state_46921[(8)]);
var inst_46912 = cljs.core.apply.call(null,f,inst_46907);
var state_46921__$1 = state_46921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46921__$1,(16),out,inst_46912);
} else {
if((state_val_46922 === (16))){
var inst_46914 = (state_46921[(2)]);
var state_46921__$1 = (function (){var statearr_46939 = state_46921;
(statearr_46939[(12)] = inst_46914);

return statearr_46939;
})();
var statearr_46940_46968 = state_46921__$1;
(statearr_46940_46968[(2)] = null);

(statearr_46940_46968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (10))){
var inst_46889 = (state_46921[(2)]);
var inst_46890 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46921__$1 = (function (){var statearr_46941 = state_46921;
(statearr_46941[(13)] = inst_46889);

return statearr_46941;
})();
var statearr_46942_46969 = state_46921__$1;
(statearr_46942_46969[(2)] = inst_46890);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46921__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (8))){
var inst_46903 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
var statearr_46943_46970 = state_46921__$1;
(statearr_46943_46970[(2)] = inst_46903);

(statearr_46943_46970[(1)] = (5));


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
});})(c__29167__auto___46955,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29055__auto__,c__29167__auto___46955,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_46947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46947[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_46947[(1)] = (1));

return statearr_46947;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_46921){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_46921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e46948){if((e46948 instanceof Object)){
var ex__29059__auto__ = e46948;
var statearr_46949_46971 = state_46921;
(statearr_46949_46971[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46972 = state_46921;
state_46921 = G__46972;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_46921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_46921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___46955,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29169__auto__ = (function (){var statearr_46950 = f__29168__auto__.call(null);
(statearr_46950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___46955);

return statearr_46950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___46955,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args46974 = [];
var len__27054__auto___47032 = arguments.length;
var i__27055__auto___47033 = (0);
while(true){
if((i__27055__auto___47033 < len__27054__auto___47032)){
args46974.push((arguments[i__27055__auto___47033]));

var G__47034 = (i__27055__auto___47033 + (1));
i__27055__auto___47033 = G__47034;
continue;
} else {
}
break;
}

var G__46976 = args46974.length;
switch (G__46976) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46974.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___47036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___47036,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___47036,out){
return (function (state_47008){
var state_val_47009 = (state_47008[(1)]);
if((state_val_47009 === (7))){
var inst_46988 = (state_47008[(7)]);
var inst_46987 = (state_47008[(8)]);
var inst_46987__$1 = (state_47008[(2)]);
var inst_46988__$1 = cljs.core.nth.call(null,inst_46987__$1,(0),null);
var inst_46989 = cljs.core.nth.call(null,inst_46987__$1,(1),null);
var inst_46990 = (inst_46988__$1 == null);
var state_47008__$1 = (function (){var statearr_47010 = state_47008;
(statearr_47010[(7)] = inst_46988__$1);

(statearr_47010[(8)] = inst_46987__$1);

(statearr_47010[(9)] = inst_46989);

return statearr_47010;
})();
if(cljs.core.truth_(inst_46990)){
var statearr_47011_47037 = state_47008__$1;
(statearr_47011_47037[(1)] = (8));

} else {
var statearr_47012_47038 = state_47008__$1;
(statearr_47012_47038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (1))){
var inst_46977 = cljs.core.vec.call(null,chs);
var inst_46978 = inst_46977;
var state_47008__$1 = (function (){var statearr_47013 = state_47008;
(statearr_47013[(10)] = inst_46978);

return statearr_47013;
})();
var statearr_47014_47039 = state_47008__$1;
(statearr_47014_47039[(2)] = null);

(statearr_47014_47039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (4))){
var inst_46978 = (state_47008[(10)]);
var state_47008__$1 = state_47008;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47008__$1,(7),inst_46978);
} else {
if((state_val_47009 === (6))){
var inst_47004 = (state_47008[(2)]);
var state_47008__$1 = state_47008;
var statearr_47015_47040 = state_47008__$1;
(statearr_47015_47040[(2)] = inst_47004);

(statearr_47015_47040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (3))){
var inst_47006 = (state_47008[(2)]);
var state_47008__$1 = state_47008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47008__$1,inst_47006);
} else {
if((state_val_47009 === (2))){
var inst_46978 = (state_47008[(10)]);
var inst_46980 = cljs.core.count.call(null,inst_46978);
var inst_46981 = (inst_46980 > (0));
var state_47008__$1 = state_47008;
if(cljs.core.truth_(inst_46981)){
var statearr_47017_47041 = state_47008__$1;
(statearr_47017_47041[(1)] = (4));

} else {
var statearr_47018_47042 = state_47008__$1;
(statearr_47018_47042[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (11))){
var inst_46978 = (state_47008[(10)]);
var inst_46997 = (state_47008[(2)]);
var tmp47016 = inst_46978;
var inst_46978__$1 = tmp47016;
var state_47008__$1 = (function (){var statearr_47019 = state_47008;
(statearr_47019[(10)] = inst_46978__$1);

(statearr_47019[(11)] = inst_46997);

return statearr_47019;
})();
var statearr_47020_47043 = state_47008__$1;
(statearr_47020_47043[(2)] = null);

(statearr_47020_47043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (9))){
var inst_46988 = (state_47008[(7)]);
var state_47008__$1 = state_47008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47008__$1,(11),out,inst_46988);
} else {
if((state_val_47009 === (5))){
var inst_47002 = cljs.core.async.close_BANG_.call(null,out);
var state_47008__$1 = state_47008;
var statearr_47021_47044 = state_47008__$1;
(statearr_47021_47044[(2)] = inst_47002);

(statearr_47021_47044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (10))){
var inst_47000 = (state_47008[(2)]);
var state_47008__$1 = state_47008;
var statearr_47022_47045 = state_47008__$1;
(statearr_47022_47045[(2)] = inst_47000);

(statearr_47022_47045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (8))){
var inst_46978 = (state_47008[(10)]);
var inst_46988 = (state_47008[(7)]);
var inst_46987 = (state_47008[(8)]);
var inst_46989 = (state_47008[(9)]);
var inst_46992 = (function (){var cs = inst_46978;
var vec__46983 = inst_46987;
var v = inst_46988;
var c = inst_46989;
return ((function (cs,vec__46983,v,c,inst_46978,inst_46988,inst_46987,inst_46989,state_val_47009,c__29167__auto___47036,out){
return (function (p1__46973_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46973_SHARP_);
});
;})(cs,vec__46983,v,c,inst_46978,inst_46988,inst_46987,inst_46989,state_val_47009,c__29167__auto___47036,out))
})();
var inst_46993 = cljs.core.filterv.call(null,inst_46992,inst_46978);
var inst_46978__$1 = inst_46993;
var state_47008__$1 = (function (){var statearr_47023 = state_47008;
(statearr_47023[(10)] = inst_46978__$1);

return statearr_47023;
})();
var statearr_47024_47046 = state_47008__$1;
(statearr_47024_47046[(2)] = null);

(statearr_47024_47046[(1)] = (2));


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
});})(c__29167__auto___47036,out))
;
return ((function (switch__29055__auto__,c__29167__auto___47036,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_47028 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47028[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_47028[(1)] = (1));

return statearr_47028;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_47008){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_47008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e47029){if((e47029 instanceof Object)){
var ex__29059__auto__ = e47029;
var statearr_47030_47047 = state_47008;
(statearr_47030_47047[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47048 = state_47008;
state_47008 = G__47048;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_47008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_47008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___47036,out))
})();
var state__29169__auto__ = (function (){var statearr_47031 = f__29168__auto__.call(null);
(statearr_47031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___47036);

return statearr_47031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___47036,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args47049 = [];
var len__27054__auto___47098 = arguments.length;
var i__27055__auto___47099 = (0);
while(true){
if((i__27055__auto___47099 < len__27054__auto___47098)){
args47049.push((arguments[i__27055__auto___47099]));

var G__47100 = (i__27055__auto___47099 + (1));
i__27055__auto___47099 = G__47100;
continue;
} else {
}
break;
}

var G__47051 = args47049.length;
switch (G__47051) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47049.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___47102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___47102,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___47102,out){
return (function (state_47075){
var state_val_47076 = (state_47075[(1)]);
if((state_val_47076 === (7))){
var inst_47057 = (state_47075[(7)]);
var inst_47057__$1 = (state_47075[(2)]);
var inst_47058 = (inst_47057__$1 == null);
var inst_47059 = cljs.core.not.call(null,inst_47058);
var state_47075__$1 = (function (){var statearr_47077 = state_47075;
(statearr_47077[(7)] = inst_47057__$1);

return statearr_47077;
})();
if(inst_47059){
var statearr_47078_47103 = state_47075__$1;
(statearr_47078_47103[(1)] = (8));

} else {
var statearr_47079_47104 = state_47075__$1;
(statearr_47079_47104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (1))){
var inst_47052 = (0);
var state_47075__$1 = (function (){var statearr_47080 = state_47075;
(statearr_47080[(8)] = inst_47052);

return statearr_47080;
})();
var statearr_47081_47105 = state_47075__$1;
(statearr_47081_47105[(2)] = null);

(statearr_47081_47105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (4))){
var state_47075__$1 = state_47075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47075__$1,(7),ch);
} else {
if((state_val_47076 === (6))){
var inst_47070 = (state_47075[(2)]);
var state_47075__$1 = state_47075;
var statearr_47082_47106 = state_47075__$1;
(statearr_47082_47106[(2)] = inst_47070);

(statearr_47082_47106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (3))){
var inst_47072 = (state_47075[(2)]);
var inst_47073 = cljs.core.async.close_BANG_.call(null,out);
var state_47075__$1 = (function (){var statearr_47083 = state_47075;
(statearr_47083[(9)] = inst_47072);

return statearr_47083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47075__$1,inst_47073);
} else {
if((state_val_47076 === (2))){
var inst_47052 = (state_47075[(8)]);
var inst_47054 = (inst_47052 < n);
var state_47075__$1 = state_47075;
if(cljs.core.truth_(inst_47054)){
var statearr_47084_47107 = state_47075__$1;
(statearr_47084_47107[(1)] = (4));

} else {
var statearr_47085_47108 = state_47075__$1;
(statearr_47085_47108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (11))){
var inst_47052 = (state_47075[(8)]);
var inst_47062 = (state_47075[(2)]);
var inst_47063 = (inst_47052 + (1));
var inst_47052__$1 = inst_47063;
var state_47075__$1 = (function (){var statearr_47086 = state_47075;
(statearr_47086[(10)] = inst_47062);

(statearr_47086[(8)] = inst_47052__$1);

return statearr_47086;
})();
var statearr_47087_47109 = state_47075__$1;
(statearr_47087_47109[(2)] = null);

(statearr_47087_47109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (9))){
var state_47075__$1 = state_47075;
var statearr_47088_47110 = state_47075__$1;
(statearr_47088_47110[(2)] = null);

(statearr_47088_47110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (5))){
var state_47075__$1 = state_47075;
var statearr_47089_47111 = state_47075__$1;
(statearr_47089_47111[(2)] = null);

(statearr_47089_47111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (10))){
var inst_47067 = (state_47075[(2)]);
var state_47075__$1 = state_47075;
var statearr_47090_47112 = state_47075__$1;
(statearr_47090_47112[(2)] = inst_47067);

(statearr_47090_47112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (8))){
var inst_47057 = (state_47075[(7)]);
var state_47075__$1 = state_47075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47075__$1,(11),out,inst_47057);
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
});})(c__29167__auto___47102,out))
;
return ((function (switch__29055__auto__,c__29167__auto___47102,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_47094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47094[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_47094[(1)] = (1));

return statearr_47094;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_47075){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_47075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e47095){if((e47095 instanceof Object)){
var ex__29059__auto__ = e47095;
var statearr_47096_47113 = state_47075;
(statearr_47096_47113[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47114 = state_47075;
state_47075 = G__47114;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_47075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_47075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___47102,out))
})();
var state__29169__auto__ = (function (){var statearr_47097 = f__29168__auto__.call(null);
(statearr_47097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___47102);

return statearr_47097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___47102,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47122 = (function (map_LT_,f,ch,meta47123){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47123 = meta47123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47124,meta47123__$1){
var self__ = this;
var _47124__$1 = this;
return (new cljs.core.async.t_cljs$core$async47122(self__.map_LT_,self__.f,self__.ch,meta47123__$1));
});

cljs.core.async.t_cljs$core$async47122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47124){
var self__ = this;
var _47124__$1 = this;
return self__.meta47123;
});

cljs.core.async.t_cljs$core$async47122.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47122.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47125 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47125 = (function (map_LT_,f,ch,meta47123,_,fn1,meta47126){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47123 = meta47123;
this._ = _;
this.fn1 = fn1;
this.meta47126 = meta47126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47127,meta47126__$1){
var self__ = this;
var _47127__$1 = this;
return (new cljs.core.async.t_cljs$core$async47125(self__.map_LT_,self__.f,self__.ch,self__.meta47123,self__._,self__.fn1,meta47126__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47127){
var self__ = this;
var _47127__$1 = this;
return self__.meta47126;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47125.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47115_SHARP_){
return f1.call(null,(((p1__47115_SHARP_ == null))?null:self__.f.call(null,p1__47115_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47125.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47123","meta47123",114394645,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47122","cljs.core.async/t_cljs$core$async47122",-642208259,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47126","meta47126",1630412941,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47125";

cljs.core.async.t_cljs$core$async47125.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async47125");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47125 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47125(map_LT___$1,f__$1,ch__$1,meta47123__$1,___$2,fn1__$1,meta47126){
return (new cljs.core.async.t_cljs$core$async47125(map_LT___$1,f__$1,ch__$1,meta47123__$1,___$2,fn1__$1,meta47126));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47125(self__.map_LT_,self__.f,self__.ch,self__.meta47123,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25967__auto__ = ret;
if(cljs.core.truth_(and__25967__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25967__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47122.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47123","meta47123",114394645,null)], null);
});

cljs.core.async.t_cljs$core$async47122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47122";

cljs.core.async.t_cljs$core$async47122.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async47122");
});

cljs.core.async.__GT_t_cljs$core$async47122 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47122(map_LT___$1,f__$1,ch__$1,meta47123){
return (new cljs.core.async.t_cljs$core$async47122(map_LT___$1,f__$1,ch__$1,meta47123));
});

}

return (new cljs.core.async.t_cljs$core$async47122(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47131 = (function (map_GT_,f,ch,meta47132){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta47132 = meta47132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47133,meta47132__$1){
var self__ = this;
var _47133__$1 = this;
return (new cljs.core.async.t_cljs$core$async47131(self__.map_GT_,self__.f,self__.ch,meta47132__$1));
});

cljs.core.async.t_cljs$core$async47131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47133){
var self__ = this;
var _47133__$1 = this;
return self__.meta47132;
});

cljs.core.async.t_cljs$core$async47131.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47131.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47131.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47132","meta47132",1382152900,null)], null);
});

cljs.core.async.t_cljs$core$async47131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47131";

cljs.core.async.t_cljs$core$async47131.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async47131");
});

cljs.core.async.__GT_t_cljs$core$async47131 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47131(map_GT___$1,f__$1,ch__$1,meta47132){
return (new cljs.core.async.t_cljs$core$async47131(map_GT___$1,f__$1,ch__$1,meta47132));
});

}

return (new cljs.core.async.t_cljs$core$async47131(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47137 = (function (filter_GT_,p,ch,meta47138){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta47138 = meta47138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47139,meta47138__$1){
var self__ = this;
var _47139__$1 = this;
return (new cljs.core.async.t_cljs$core$async47137(self__.filter_GT_,self__.p,self__.ch,meta47138__$1));
});

cljs.core.async.t_cljs$core$async47137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47139){
var self__ = this;
var _47139__$1 = this;
return self__.meta47138;
});

cljs.core.async.t_cljs$core$async47137.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47138","meta47138",-202008138,null)], null);
});

cljs.core.async.t_cljs$core$async47137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47137";

cljs.core.async.t_cljs$core$async47137.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async47137");
});

cljs.core.async.__GT_t_cljs$core$async47137 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47137(filter_GT___$1,p__$1,ch__$1,meta47138){
return (new cljs.core.async.t_cljs$core$async47137(filter_GT___$1,p__$1,ch__$1,meta47138));
});

}

return (new cljs.core.async.t_cljs$core$async47137(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args47140 = [];
var len__27054__auto___47184 = arguments.length;
var i__27055__auto___47185 = (0);
while(true){
if((i__27055__auto___47185 < len__27054__auto___47184)){
args47140.push((arguments[i__27055__auto___47185]));

var G__47186 = (i__27055__auto___47185 + (1));
i__27055__auto___47185 = G__47186;
continue;
} else {
}
break;
}

var G__47142 = args47140.length;
switch (G__47142) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47140.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___47188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___47188,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___47188,out){
return (function (state_47163){
var state_val_47164 = (state_47163[(1)]);
if((state_val_47164 === (7))){
var inst_47159 = (state_47163[(2)]);
var state_47163__$1 = state_47163;
var statearr_47165_47189 = state_47163__$1;
(statearr_47165_47189[(2)] = inst_47159);

(statearr_47165_47189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47164 === (1))){
var state_47163__$1 = state_47163;
var statearr_47166_47190 = state_47163__$1;
(statearr_47166_47190[(2)] = null);

(statearr_47166_47190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47164 === (4))){
var inst_47145 = (state_47163[(7)]);
var inst_47145__$1 = (state_47163[(2)]);
var inst_47146 = (inst_47145__$1 == null);
var state_47163__$1 = (function (){var statearr_47167 = state_47163;
(statearr_47167[(7)] = inst_47145__$1);

return statearr_47167;
})();
if(cljs.core.truth_(inst_47146)){
var statearr_47168_47191 = state_47163__$1;
(statearr_47168_47191[(1)] = (5));

} else {
var statearr_47169_47192 = state_47163__$1;
(statearr_47169_47192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47164 === (6))){
var inst_47145 = (state_47163[(7)]);
var inst_47150 = p.call(null,inst_47145);
var state_47163__$1 = state_47163;
if(cljs.core.truth_(inst_47150)){
var statearr_47170_47193 = state_47163__$1;
(statearr_47170_47193[(1)] = (8));

} else {
var statearr_47171_47194 = state_47163__$1;
(statearr_47171_47194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47164 === (3))){
var inst_47161 = (state_47163[(2)]);
var state_47163__$1 = state_47163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47163__$1,inst_47161);
} else {
if((state_val_47164 === (2))){
var state_47163__$1 = state_47163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47163__$1,(4),ch);
} else {
if((state_val_47164 === (11))){
var inst_47153 = (state_47163[(2)]);
var state_47163__$1 = state_47163;
var statearr_47172_47195 = state_47163__$1;
(statearr_47172_47195[(2)] = inst_47153);

(statearr_47172_47195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47164 === (9))){
var state_47163__$1 = state_47163;
var statearr_47173_47196 = state_47163__$1;
(statearr_47173_47196[(2)] = null);

(statearr_47173_47196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47164 === (5))){
var inst_47148 = cljs.core.async.close_BANG_.call(null,out);
var state_47163__$1 = state_47163;
var statearr_47174_47197 = state_47163__$1;
(statearr_47174_47197[(2)] = inst_47148);

(statearr_47174_47197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47164 === (10))){
var inst_47156 = (state_47163[(2)]);
var state_47163__$1 = (function (){var statearr_47175 = state_47163;
(statearr_47175[(8)] = inst_47156);

return statearr_47175;
})();
var statearr_47176_47198 = state_47163__$1;
(statearr_47176_47198[(2)] = null);

(statearr_47176_47198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47164 === (8))){
var inst_47145 = (state_47163[(7)]);
var state_47163__$1 = state_47163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47163__$1,(11),out,inst_47145);
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
});})(c__29167__auto___47188,out))
;
return ((function (switch__29055__auto__,c__29167__auto___47188,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_47180 = [null,null,null,null,null,null,null,null,null];
(statearr_47180[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_47180[(1)] = (1));

return statearr_47180;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_47163){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_47163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e47181){if((e47181 instanceof Object)){
var ex__29059__auto__ = e47181;
var statearr_47182_47199 = state_47163;
(statearr_47182_47199[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47200 = state_47163;
state_47163 = G__47200;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_47163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_47163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___47188,out))
})();
var state__29169__auto__ = (function (){var statearr_47183 = f__29168__auto__.call(null);
(statearr_47183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___47188);

return statearr_47183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___47188,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args47201 = [];
var len__27054__auto___47204 = arguments.length;
var i__27055__auto___47205 = (0);
while(true){
if((i__27055__auto___47205 < len__27054__auto___47204)){
args47201.push((arguments[i__27055__auto___47205]));

var G__47206 = (i__27055__auto___47205 + (1));
i__27055__auto___47205 = G__47206;
continue;
} else {
}
break;
}

var G__47203 = args47201.length;
switch (G__47203) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47201.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__){
return (function (state_47373){
var state_val_47374 = (state_47373[(1)]);
if((state_val_47374 === (7))){
var inst_47369 = (state_47373[(2)]);
var state_47373__$1 = state_47373;
var statearr_47375_47416 = state_47373__$1;
(statearr_47375_47416[(2)] = inst_47369);

(statearr_47375_47416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (20))){
var inst_47339 = (state_47373[(7)]);
var inst_47350 = (state_47373[(2)]);
var inst_47351 = cljs.core.next.call(null,inst_47339);
var inst_47325 = inst_47351;
var inst_47326 = null;
var inst_47327 = (0);
var inst_47328 = (0);
var state_47373__$1 = (function (){var statearr_47376 = state_47373;
(statearr_47376[(8)] = inst_47350);

(statearr_47376[(9)] = inst_47325);

(statearr_47376[(10)] = inst_47326);

(statearr_47376[(11)] = inst_47328);

(statearr_47376[(12)] = inst_47327);

return statearr_47376;
})();
var statearr_47377_47417 = state_47373__$1;
(statearr_47377_47417[(2)] = null);

(statearr_47377_47417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (1))){
var state_47373__$1 = state_47373;
var statearr_47378_47418 = state_47373__$1;
(statearr_47378_47418[(2)] = null);

(statearr_47378_47418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (4))){
var inst_47314 = (state_47373[(13)]);
var inst_47314__$1 = (state_47373[(2)]);
var inst_47315 = (inst_47314__$1 == null);
var state_47373__$1 = (function (){var statearr_47379 = state_47373;
(statearr_47379[(13)] = inst_47314__$1);

return statearr_47379;
})();
if(cljs.core.truth_(inst_47315)){
var statearr_47380_47419 = state_47373__$1;
(statearr_47380_47419[(1)] = (5));

} else {
var statearr_47381_47420 = state_47373__$1;
(statearr_47381_47420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (15))){
var state_47373__$1 = state_47373;
var statearr_47385_47421 = state_47373__$1;
(statearr_47385_47421[(2)] = null);

(statearr_47385_47421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (21))){
var state_47373__$1 = state_47373;
var statearr_47386_47422 = state_47373__$1;
(statearr_47386_47422[(2)] = null);

(statearr_47386_47422[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (13))){
var inst_47325 = (state_47373[(9)]);
var inst_47326 = (state_47373[(10)]);
var inst_47328 = (state_47373[(11)]);
var inst_47327 = (state_47373[(12)]);
var inst_47335 = (state_47373[(2)]);
var inst_47336 = (inst_47328 + (1));
var tmp47382 = inst_47325;
var tmp47383 = inst_47326;
var tmp47384 = inst_47327;
var inst_47325__$1 = tmp47382;
var inst_47326__$1 = tmp47383;
var inst_47327__$1 = tmp47384;
var inst_47328__$1 = inst_47336;
var state_47373__$1 = (function (){var statearr_47387 = state_47373;
(statearr_47387[(14)] = inst_47335);

(statearr_47387[(9)] = inst_47325__$1);

(statearr_47387[(10)] = inst_47326__$1);

(statearr_47387[(11)] = inst_47328__$1);

(statearr_47387[(12)] = inst_47327__$1);

return statearr_47387;
})();
var statearr_47388_47423 = state_47373__$1;
(statearr_47388_47423[(2)] = null);

(statearr_47388_47423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (22))){
var state_47373__$1 = state_47373;
var statearr_47389_47424 = state_47373__$1;
(statearr_47389_47424[(2)] = null);

(statearr_47389_47424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (6))){
var inst_47314 = (state_47373[(13)]);
var inst_47323 = f.call(null,inst_47314);
var inst_47324 = cljs.core.seq.call(null,inst_47323);
var inst_47325 = inst_47324;
var inst_47326 = null;
var inst_47327 = (0);
var inst_47328 = (0);
var state_47373__$1 = (function (){var statearr_47390 = state_47373;
(statearr_47390[(9)] = inst_47325);

(statearr_47390[(10)] = inst_47326);

(statearr_47390[(11)] = inst_47328);

(statearr_47390[(12)] = inst_47327);

return statearr_47390;
})();
var statearr_47391_47425 = state_47373__$1;
(statearr_47391_47425[(2)] = null);

(statearr_47391_47425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (17))){
var inst_47339 = (state_47373[(7)]);
var inst_47343 = cljs.core.chunk_first.call(null,inst_47339);
var inst_47344 = cljs.core.chunk_rest.call(null,inst_47339);
var inst_47345 = cljs.core.count.call(null,inst_47343);
var inst_47325 = inst_47344;
var inst_47326 = inst_47343;
var inst_47327 = inst_47345;
var inst_47328 = (0);
var state_47373__$1 = (function (){var statearr_47392 = state_47373;
(statearr_47392[(9)] = inst_47325);

(statearr_47392[(10)] = inst_47326);

(statearr_47392[(11)] = inst_47328);

(statearr_47392[(12)] = inst_47327);

return statearr_47392;
})();
var statearr_47393_47426 = state_47373__$1;
(statearr_47393_47426[(2)] = null);

(statearr_47393_47426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (3))){
var inst_47371 = (state_47373[(2)]);
var state_47373__$1 = state_47373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47373__$1,inst_47371);
} else {
if((state_val_47374 === (12))){
var inst_47359 = (state_47373[(2)]);
var state_47373__$1 = state_47373;
var statearr_47394_47427 = state_47373__$1;
(statearr_47394_47427[(2)] = inst_47359);

(statearr_47394_47427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (2))){
var state_47373__$1 = state_47373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47373__$1,(4),in$);
} else {
if((state_val_47374 === (23))){
var inst_47367 = (state_47373[(2)]);
var state_47373__$1 = state_47373;
var statearr_47395_47428 = state_47373__$1;
(statearr_47395_47428[(2)] = inst_47367);

(statearr_47395_47428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (19))){
var inst_47354 = (state_47373[(2)]);
var state_47373__$1 = state_47373;
var statearr_47396_47429 = state_47373__$1;
(statearr_47396_47429[(2)] = inst_47354);

(statearr_47396_47429[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (11))){
var inst_47325 = (state_47373[(9)]);
var inst_47339 = (state_47373[(7)]);
var inst_47339__$1 = cljs.core.seq.call(null,inst_47325);
var state_47373__$1 = (function (){var statearr_47397 = state_47373;
(statearr_47397[(7)] = inst_47339__$1);

return statearr_47397;
})();
if(inst_47339__$1){
var statearr_47398_47430 = state_47373__$1;
(statearr_47398_47430[(1)] = (14));

} else {
var statearr_47399_47431 = state_47373__$1;
(statearr_47399_47431[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (9))){
var inst_47361 = (state_47373[(2)]);
var inst_47362 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47373__$1 = (function (){var statearr_47400 = state_47373;
(statearr_47400[(15)] = inst_47361);

return statearr_47400;
})();
if(cljs.core.truth_(inst_47362)){
var statearr_47401_47432 = state_47373__$1;
(statearr_47401_47432[(1)] = (21));

} else {
var statearr_47402_47433 = state_47373__$1;
(statearr_47402_47433[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (5))){
var inst_47317 = cljs.core.async.close_BANG_.call(null,out);
var state_47373__$1 = state_47373;
var statearr_47403_47434 = state_47373__$1;
(statearr_47403_47434[(2)] = inst_47317);

(statearr_47403_47434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (14))){
var inst_47339 = (state_47373[(7)]);
var inst_47341 = cljs.core.chunked_seq_QMARK_.call(null,inst_47339);
var state_47373__$1 = state_47373;
if(inst_47341){
var statearr_47404_47435 = state_47373__$1;
(statearr_47404_47435[(1)] = (17));

} else {
var statearr_47405_47436 = state_47373__$1;
(statearr_47405_47436[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (16))){
var inst_47357 = (state_47373[(2)]);
var state_47373__$1 = state_47373;
var statearr_47406_47437 = state_47373__$1;
(statearr_47406_47437[(2)] = inst_47357);

(statearr_47406_47437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47374 === (10))){
var inst_47326 = (state_47373[(10)]);
var inst_47328 = (state_47373[(11)]);
var inst_47333 = cljs.core._nth.call(null,inst_47326,inst_47328);
var state_47373__$1 = state_47373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47373__$1,(13),out,inst_47333);
} else {
if((state_val_47374 === (18))){
var inst_47339 = (state_47373[(7)]);
var inst_47348 = cljs.core.first.call(null,inst_47339);
var state_47373__$1 = state_47373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47373__$1,(20),out,inst_47348);
} else {
if((state_val_47374 === (8))){
var inst_47328 = (state_47373[(11)]);
var inst_47327 = (state_47373[(12)]);
var inst_47330 = (inst_47328 < inst_47327);
var inst_47331 = inst_47330;
var state_47373__$1 = state_47373;
if(cljs.core.truth_(inst_47331)){
var statearr_47407_47438 = state_47373__$1;
(statearr_47407_47438[(1)] = (10));

} else {
var statearr_47408_47439 = state_47373__$1;
(statearr_47408_47439[(1)] = (11));

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
});})(c__29167__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_47412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47412[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__);

(statearr_47412[(1)] = (1));

return statearr_47412;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____1 = (function (state_47373){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_47373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e47413){if((e47413 instanceof Object)){
var ex__29059__auto__ = e47413;
var statearr_47414_47440 = state_47373;
(statearr_47414_47440[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47441 = state_47373;
state_47373 = G__47441;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__ = function(state_47373){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____1.call(this,state_47373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__))
})();
var state__29169__auto__ = (function (){var statearr_47415 = f__29168__auto__.call(null);
(statearr_47415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_47415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__))
);

return c__29167__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args47442 = [];
var len__27054__auto___47445 = arguments.length;
var i__27055__auto___47446 = (0);
while(true){
if((i__27055__auto___47446 < len__27054__auto___47445)){
args47442.push((arguments[i__27055__auto___47446]));

var G__47447 = (i__27055__auto___47446 + (1));
i__27055__auto___47446 = G__47447;
continue;
} else {
}
break;
}

var G__47444 = args47442.length;
switch (G__47444) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47442.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args47449 = [];
var len__27054__auto___47452 = arguments.length;
var i__27055__auto___47453 = (0);
while(true){
if((i__27055__auto___47453 < len__27054__auto___47452)){
args47449.push((arguments[i__27055__auto___47453]));

var G__47454 = (i__27055__auto___47453 + (1));
i__27055__auto___47453 = G__47454;
continue;
} else {
}
break;
}

var G__47451 = args47449.length;
switch (G__47451) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47449.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args47456 = [];
var len__27054__auto___47507 = arguments.length;
var i__27055__auto___47508 = (0);
while(true){
if((i__27055__auto___47508 < len__27054__auto___47507)){
args47456.push((arguments[i__27055__auto___47508]));

var G__47509 = (i__27055__auto___47508 + (1));
i__27055__auto___47508 = G__47509;
continue;
} else {
}
break;
}

var G__47458 = args47456.length;
switch (G__47458) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47456.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___47511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___47511,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___47511,out){
return (function (state_47482){
var state_val_47483 = (state_47482[(1)]);
if((state_val_47483 === (7))){
var inst_47477 = (state_47482[(2)]);
var state_47482__$1 = state_47482;
var statearr_47484_47512 = state_47482__$1;
(statearr_47484_47512[(2)] = inst_47477);

(statearr_47484_47512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (1))){
var inst_47459 = null;
var state_47482__$1 = (function (){var statearr_47485 = state_47482;
(statearr_47485[(7)] = inst_47459);

return statearr_47485;
})();
var statearr_47486_47513 = state_47482__$1;
(statearr_47486_47513[(2)] = null);

(statearr_47486_47513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (4))){
var inst_47462 = (state_47482[(8)]);
var inst_47462__$1 = (state_47482[(2)]);
var inst_47463 = (inst_47462__$1 == null);
var inst_47464 = cljs.core.not.call(null,inst_47463);
var state_47482__$1 = (function (){var statearr_47487 = state_47482;
(statearr_47487[(8)] = inst_47462__$1);

return statearr_47487;
})();
if(inst_47464){
var statearr_47488_47514 = state_47482__$1;
(statearr_47488_47514[(1)] = (5));

} else {
var statearr_47489_47515 = state_47482__$1;
(statearr_47489_47515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (6))){
var state_47482__$1 = state_47482;
var statearr_47490_47516 = state_47482__$1;
(statearr_47490_47516[(2)] = null);

(statearr_47490_47516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (3))){
var inst_47479 = (state_47482[(2)]);
var inst_47480 = cljs.core.async.close_BANG_.call(null,out);
var state_47482__$1 = (function (){var statearr_47491 = state_47482;
(statearr_47491[(9)] = inst_47479);

return statearr_47491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47482__$1,inst_47480);
} else {
if((state_val_47483 === (2))){
var state_47482__$1 = state_47482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47482__$1,(4),ch);
} else {
if((state_val_47483 === (11))){
var inst_47462 = (state_47482[(8)]);
var inst_47471 = (state_47482[(2)]);
var inst_47459 = inst_47462;
var state_47482__$1 = (function (){var statearr_47492 = state_47482;
(statearr_47492[(10)] = inst_47471);

(statearr_47492[(7)] = inst_47459);

return statearr_47492;
})();
var statearr_47493_47517 = state_47482__$1;
(statearr_47493_47517[(2)] = null);

(statearr_47493_47517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (9))){
var inst_47462 = (state_47482[(8)]);
var state_47482__$1 = state_47482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47482__$1,(11),out,inst_47462);
} else {
if((state_val_47483 === (5))){
var inst_47459 = (state_47482[(7)]);
var inst_47462 = (state_47482[(8)]);
var inst_47466 = cljs.core._EQ_.call(null,inst_47462,inst_47459);
var state_47482__$1 = state_47482;
if(inst_47466){
var statearr_47495_47518 = state_47482__$1;
(statearr_47495_47518[(1)] = (8));

} else {
var statearr_47496_47519 = state_47482__$1;
(statearr_47496_47519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (10))){
var inst_47474 = (state_47482[(2)]);
var state_47482__$1 = state_47482;
var statearr_47497_47520 = state_47482__$1;
(statearr_47497_47520[(2)] = inst_47474);

(statearr_47497_47520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (8))){
var inst_47459 = (state_47482[(7)]);
var tmp47494 = inst_47459;
var inst_47459__$1 = tmp47494;
var state_47482__$1 = (function (){var statearr_47498 = state_47482;
(statearr_47498[(7)] = inst_47459__$1);

return statearr_47498;
})();
var statearr_47499_47521 = state_47482__$1;
(statearr_47499_47521[(2)] = null);

(statearr_47499_47521[(1)] = (2));


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
});})(c__29167__auto___47511,out))
;
return ((function (switch__29055__auto__,c__29167__auto___47511,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_47503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47503[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_47503[(1)] = (1));

return statearr_47503;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_47482){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_47482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e47504){if((e47504 instanceof Object)){
var ex__29059__auto__ = e47504;
var statearr_47505_47522 = state_47482;
(statearr_47505_47522[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47523 = state_47482;
state_47482 = G__47523;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_47482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_47482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___47511,out))
})();
var state__29169__auto__ = (function (){var statearr_47506 = f__29168__auto__.call(null);
(statearr_47506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___47511);

return statearr_47506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___47511,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args47524 = [];
var len__27054__auto___47594 = arguments.length;
var i__27055__auto___47595 = (0);
while(true){
if((i__27055__auto___47595 < len__27054__auto___47594)){
args47524.push((arguments[i__27055__auto___47595]));

var G__47596 = (i__27055__auto___47595 + (1));
i__27055__auto___47595 = G__47596;
continue;
} else {
}
break;
}

var G__47526 = args47524.length;
switch (G__47526) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47524.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___47598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___47598,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___47598,out){
return (function (state_47564){
var state_val_47565 = (state_47564[(1)]);
if((state_val_47565 === (7))){
var inst_47560 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47566_47599 = state_47564__$1;
(statearr_47566_47599[(2)] = inst_47560);

(statearr_47566_47599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (1))){
var inst_47527 = (new Array(n));
var inst_47528 = inst_47527;
var inst_47529 = (0);
var state_47564__$1 = (function (){var statearr_47567 = state_47564;
(statearr_47567[(7)] = inst_47529);

(statearr_47567[(8)] = inst_47528);

return statearr_47567;
})();
var statearr_47568_47600 = state_47564__$1;
(statearr_47568_47600[(2)] = null);

(statearr_47568_47600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (4))){
var inst_47532 = (state_47564[(9)]);
var inst_47532__$1 = (state_47564[(2)]);
var inst_47533 = (inst_47532__$1 == null);
var inst_47534 = cljs.core.not.call(null,inst_47533);
var state_47564__$1 = (function (){var statearr_47569 = state_47564;
(statearr_47569[(9)] = inst_47532__$1);

return statearr_47569;
})();
if(inst_47534){
var statearr_47570_47601 = state_47564__$1;
(statearr_47570_47601[(1)] = (5));

} else {
var statearr_47571_47602 = state_47564__$1;
(statearr_47571_47602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (15))){
var inst_47554 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47572_47603 = state_47564__$1;
(statearr_47572_47603[(2)] = inst_47554);

(statearr_47572_47603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (13))){
var state_47564__$1 = state_47564;
var statearr_47573_47604 = state_47564__$1;
(statearr_47573_47604[(2)] = null);

(statearr_47573_47604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (6))){
var inst_47529 = (state_47564[(7)]);
var inst_47550 = (inst_47529 > (0));
var state_47564__$1 = state_47564;
if(cljs.core.truth_(inst_47550)){
var statearr_47574_47605 = state_47564__$1;
(statearr_47574_47605[(1)] = (12));

} else {
var statearr_47575_47606 = state_47564__$1;
(statearr_47575_47606[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (3))){
var inst_47562 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47564__$1,inst_47562);
} else {
if((state_val_47565 === (12))){
var inst_47528 = (state_47564[(8)]);
var inst_47552 = cljs.core.vec.call(null,inst_47528);
var state_47564__$1 = state_47564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47564__$1,(15),out,inst_47552);
} else {
if((state_val_47565 === (2))){
var state_47564__$1 = state_47564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47564__$1,(4),ch);
} else {
if((state_val_47565 === (11))){
var inst_47544 = (state_47564[(2)]);
var inst_47545 = (new Array(n));
var inst_47528 = inst_47545;
var inst_47529 = (0);
var state_47564__$1 = (function (){var statearr_47576 = state_47564;
(statearr_47576[(10)] = inst_47544);

(statearr_47576[(7)] = inst_47529);

(statearr_47576[(8)] = inst_47528);

return statearr_47576;
})();
var statearr_47577_47607 = state_47564__$1;
(statearr_47577_47607[(2)] = null);

(statearr_47577_47607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (9))){
var inst_47528 = (state_47564[(8)]);
var inst_47542 = cljs.core.vec.call(null,inst_47528);
var state_47564__$1 = state_47564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47564__$1,(11),out,inst_47542);
} else {
if((state_val_47565 === (5))){
var inst_47532 = (state_47564[(9)]);
var inst_47537 = (state_47564[(11)]);
var inst_47529 = (state_47564[(7)]);
var inst_47528 = (state_47564[(8)]);
var inst_47536 = (inst_47528[inst_47529] = inst_47532);
var inst_47537__$1 = (inst_47529 + (1));
var inst_47538 = (inst_47537__$1 < n);
var state_47564__$1 = (function (){var statearr_47578 = state_47564;
(statearr_47578[(12)] = inst_47536);

(statearr_47578[(11)] = inst_47537__$1);

return statearr_47578;
})();
if(cljs.core.truth_(inst_47538)){
var statearr_47579_47608 = state_47564__$1;
(statearr_47579_47608[(1)] = (8));

} else {
var statearr_47580_47609 = state_47564__$1;
(statearr_47580_47609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (14))){
var inst_47557 = (state_47564[(2)]);
var inst_47558 = cljs.core.async.close_BANG_.call(null,out);
var state_47564__$1 = (function (){var statearr_47582 = state_47564;
(statearr_47582[(13)] = inst_47557);

return statearr_47582;
})();
var statearr_47583_47610 = state_47564__$1;
(statearr_47583_47610[(2)] = inst_47558);

(statearr_47583_47610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (10))){
var inst_47548 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47584_47611 = state_47564__$1;
(statearr_47584_47611[(2)] = inst_47548);

(statearr_47584_47611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (8))){
var inst_47537 = (state_47564[(11)]);
var inst_47528 = (state_47564[(8)]);
var tmp47581 = inst_47528;
var inst_47528__$1 = tmp47581;
var inst_47529 = inst_47537;
var state_47564__$1 = (function (){var statearr_47585 = state_47564;
(statearr_47585[(7)] = inst_47529);

(statearr_47585[(8)] = inst_47528__$1);

return statearr_47585;
})();
var statearr_47586_47612 = state_47564__$1;
(statearr_47586_47612[(2)] = null);

(statearr_47586_47612[(1)] = (2));


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
});})(c__29167__auto___47598,out))
;
return ((function (switch__29055__auto__,c__29167__auto___47598,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_47590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47590[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_47590[(1)] = (1));

return statearr_47590;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_47564){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_47564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e47591){if((e47591 instanceof Object)){
var ex__29059__auto__ = e47591;
var statearr_47592_47613 = state_47564;
(statearr_47592_47613[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47614 = state_47564;
state_47564 = G__47614;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_47564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_47564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___47598,out))
})();
var state__29169__auto__ = (function (){var statearr_47593 = f__29168__auto__.call(null);
(statearr_47593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___47598);

return statearr_47593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___47598,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args47615 = [];
var len__27054__auto___47689 = arguments.length;
var i__27055__auto___47690 = (0);
while(true){
if((i__27055__auto___47690 < len__27054__auto___47689)){
args47615.push((arguments[i__27055__auto___47690]));

var G__47691 = (i__27055__auto___47690 + (1));
i__27055__auto___47690 = G__47691;
continue;
} else {
}
break;
}

var G__47617 = args47615.length;
switch (G__47617) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47615.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___47693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___47693,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___47693,out){
return (function (state_47659){
var state_val_47660 = (state_47659[(1)]);
if((state_val_47660 === (7))){
var inst_47655 = (state_47659[(2)]);
var state_47659__$1 = state_47659;
var statearr_47661_47694 = state_47659__$1;
(statearr_47661_47694[(2)] = inst_47655);

(statearr_47661_47694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47660 === (1))){
var inst_47618 = [];
var inst_47619 = inst_47618;
var inst_47620 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47659__$1 = (function (){var statearr_47662 = state_47659;
(statearr_47662[(7)] = inst_47620);

(statearr_47662[(8)] = inst_47619);

return statearr_47662;
})();
var statearr_47663_47695 = state_47659__$1;
(statearr_47663_47695[(2)] = null);

(statearr_47663_47695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47660 === (4))){
var inst_47623 = (state_47659[(9)]);
var inst_47623__$1 = (state_47659[(2)]);
var inst_47624 = (inst_47623__$1 == null);
var inst_47625 = cljs.core.not.call(null,inst_47624);
var state_47659__$1 = (function (){var statearr_47664 = state_47659;
(statearr_47664[(9)] = inst_47623__$1);

return statearr_47664;
})();
if(inst_47625){
var statearr_47665_47696 = state_47659__$1;
(statearr_47665_47696[(1)] = (5));

} else {
var statearr_47666_47697 = state_47659__$1;
(statearr_47666_47697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47660 === (15))){
var inst_47649 = (state_47659[(2)]);
var state_47659__$1 = state_47659;
var statearr_47667_47698 = state_47659__$1;
(statearr_47667_47698[(2)] = inst_47649);

(statearr_47667_47698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47660 === (13))){
var state_47659__$1 = state_47659;
var statearr_47668_47699 = state_47659__$1;
(statearr_47668_47699[(2)] = null);

(statearr_47668_47699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47660 === (6))){
var inst_47619 = (state_47659[(8)]);
var inst_47644 = inst_47619.length;
var inst_47645 = (inst_47644 > (0));
var state_47659__$1 = state_47659;
if(cljs.core.truth_(inst_47645)){
var statearr_47669_47700 = state_47659__$1;
(statearr_47669_47700[(1)] = (12));

} else {
var statearr_47670_47701 = state_47659__$1;
(statearr_47670_47701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47660 === (3))){
var inst_47657 = (state_47659[(2)]);
var state_47659__$1 = state_47659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47659__$1,inst_47657);
} else {
if((state_val_47660 === (12))){
var inst_47619 = (state_47659[(8)]);
var inst_47647 = cljs.core.vec.call(null,inst_47619);
var state_47659__$1 = state_47659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47659__$1,(15),out,inst_47647);
} else {
if((state_val_47660 === (2))){
var state_47659__$1 = state_47659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47659__$1,(4),ch);
} else {
if((state_val_47660 === (11))){
var inst_47627 = (state_47659[(10)]);
var inst_47623 = (state_47659[(9)]);
var inst_47637 = (state_47659[(2)]);
var inst_47638 = [];
var inst_47639 = inst_47638.push(inst_47623);
var inst_47619 = inst_47638;
var inst_47620 = inst_47627;
var state_47659__$1 = (function (){var statearr_47671 = state_47659;
(statearr_47671[(11)] = inst_47639);

(statearr_47671[(12)] = inst_47637);

(statearr_47671[(7)] = inst_47620);

(statearr_47671[(8)] = inst_47619);

return statearr_47671;
})();
var statearr_47672_47702 = state_47659__$1;
(statearr_47672_47702[(2)] = null);

(statearr_47672_47702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47660 === (9))){
var inst_47619 = (state_47659[(8)]);
var inst_47635 = cljs.core.vec.call(null,inst_47619);
var state_47659__$1 = state_47659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47659__$1,(11),out,inst_47635);
} else {
if((state_val_47660 === (5))){
var inst_47620 = (state_47659[(7)]);
var inst_47627 = (state_47659[(10)]);
var inst_47623 = (state_47659[(9)]);
var inst_47627__$1 = f.call(null,inst_47623);
var inst_47628 = cljs.core._EQ_.call(null,inst_47627__$1,inst_47620);
var inst_47629 = cljs.core.keyword_identical_QMARK_.call(null,inst_47620,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47630 = (inst_47628) || (inst_47629);
var state_47659__$1 = (function (){var statearr_47673 = state_47659;
(statearr_47673[(10)] = inst_47627__$1);

return statearr_47673;
})();
if(cljs.core.truth_(inst_47630)){
var statearr_47674_47703 = state_47659__$1;
(statearr_47674_47703[(1)] = (8));

} else {
var statearr_47675_47704 = state_47659__$1;
(statearr_47675_47704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47660 === (14))){
var inst_47652 = (state_47659[(2)]);
var inst_47653 = cljs.core.async.close_BANG_.call(null,out);
var state_47659__$1 = (function (){var statearr_47677 = state_47659;
(statearr_47677[(13)] = inst_47652);

return statearr_47677;
})();
var statearr_47678_47705 = state_47659__$1;
(statearr_47678_47705[(2)] = inst_47653);

(statearr_47678_47705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47660 === (10))){
var inst_47642 = (state_47659[(2)]);
var state_47659__$1 = state_47659;
var statearr_47679_47706 = state_47659__$1;
(statearr_47679_47706[(2)] = inst_47642);

(statearr_47679_47706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47660 === (8))){
var inst_47627 = (state_47659[(10)]);
var inst_47619 = (state_47659[(8)]);
var inst_47623 = (state_47659[(9)]);
var inst_47632 = inst_47619.push(inst_47623);
var tmp47676 = inst_47619;
var inst_47619__$1 = tmp47676;
var inst_47620 = inst_47627;
var state_47659__$1 = (function (){var statearr_47680 = state_47659;
(statearr_47680[(7)] = inst_47620);

(statearr_47680[(8)] = inst_47619__$1);

(statearr_47680[(14)] = inst_47632);

return statearr_47680;
})();
var statearr_47681_47707 = state_47659__$1;
(statearr_47681_47707[(2)] = null);

(statearr_47681_47707[(1)] = (2));


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
});})(c__29167__auto___47693,out))
;
return ((function (switch__29055__auto__,c__29167__auto___47693,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_47685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47685[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_47685[(1)] = (1));

return statearr_47685;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_47659){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_47659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e47686){if((e47686 instanceof Object)){
var ex__29059__auto__ = e47686;
var statearr_47687_47708 = state_47659;
(statearr_47687_47708[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47709 = state_47659;
state_47659 = G__47709;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_47659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_47659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___47693,out))
})();
var state__29169__auto__ = (function (){var statearr_47688 = f__29168__auto__.call(null);
(statearr_47688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___47693);

return statearr_47688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___47693,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1497028414492