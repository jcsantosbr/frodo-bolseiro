// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t35435 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35435 = (function (fn_handler,f,meta35436){
this.fn_handler = fn_handler;
this.f = f;
this.meta35436 = meta35436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35437,meta35436__$1){
var self__ = this;
var _35437__$1 = this;
return (new cljs.core.async.t35435(self__.fn_handler,self__.f,meta35436__$1));
});

cljs.core.async.t35435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35437){
var self__ = this;
var _35437__$1 = this;
return self__.meta35436;
});

cljs.core.async.t35435.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t35435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t35435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta35436","meta35436",-942730475,null)], null);
});

cljs.core.async.t35435.cljs$lang$type = true;

cljs.core.async.t35435.cljs$lang$ctorStr = "cljs.core.async/t35435";

cljs.core.async.t35435.cljs$lang$ctorPrWriter = (function (this__25873__auto__,writer__25874__auto__,opt__25875__auto__){
return cljs.core._write.call(null,writer__25874__auto__,"cljs.core.async/t35435");
});

cljs.core.async.__GT_t35435 = (function cljs$core$async$fn_handler_$___GT_t35435(fn_handler__$1,f__$1,meta35436){
return (new cljs.core.async.t35435(fn_handler__$1,f__$1,meta35436));
});

}

return (new cljs.core.async.t35435(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__35439 = buff;
if(G__35439){
var bit__25968__auto__ = null;
if(cljs.core.truth_((function (){var or__25294__auto__ = bit__25968__auto__;
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return G__35439.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__35439.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35439);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35439);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__35441 = arguments.length;
switch (G__35441) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__35444 = arguments.length;
switch (G__35444) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35446 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35446);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35446,ret){
return (function (){
return fn1.call(null,val_35446);
});})(val_35446,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__35448 = arguments.length;
switch (G__35448) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__26179__auto___35450 = n;
var x_35451 = (0);
while(true){
if((x_35451 < n__26179__auto___35450)){
(a[x_35451] = (0));

var G__35452 = (x_35451 + (1));
x_35451 = G__35452;
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

var G__35453 = (i + (1));
i = G__35453;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t35457 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35457 = (function (alt_flag,flag,meta35458){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35458 = meta35458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35459,meta35458__$1){
var self__ = this;
var _35459__$1 = this;
return (new cljs.core.async.t35457(self__.alt_flag,self__.flag,meta35458__$1));
});})(flag))
;

cljs.core.async.t35457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35459){
var self__ = this;
var _35459__$1 = this;
return self__.meta35458;
});})(flag))
;

cljs.core.async.t35457.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35457.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t35457.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t35457.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35458","meta35458",-1019347184,null)], null);
});})(flag))
;

cljs.core.async.t35457.cljs$lang$type = true;

cljs.core.async.t35457.cljs$lang$ctorStr = "cljs.core.async/t35457";

cljs.core.async.t35457.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25873__auto__,writer__25874__auto__,opt__25875__auto__){
return cljs.core._write.call(null,writer__25874__auto__,"cljs.core.async/t35457");
});})(flag))
;

cljs.core.async.__GT_t35457 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t35457(alt_flag__$1,flag__$1,meta35458){
return (new cljs.core.async.t35457(alt_flag__$1,flag__$1,meta35458));
});})(flag))
;

}

return (new cljs.core.async.t35457(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t35463 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35463 = (function (alt_handler,flag,cb,meta35464){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35464 = meta35464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35465,meta35464__$1){
var self__ = this;
var _35465__$1 = this;
return (new cljs.core.async.t35463(self__.alt_handler,self__.flag,self__.cb,meta35464__$1));
});

cljs.core.async.t35463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35465){
var self__ = this;
var _35465__$1 = this;
return self__.meta35464;
});

cljs.core.async.t35463.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t35463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t35463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35464","meta35464",-1742580376,null)], null);
});

cljs.core.async.t35463.cljs$lang$type = true;

cljs.core.async.t35463.cljs$lang$ctorStr = "cljs.core.async/t35463";

cljs.core.async.t35463.cljs$lang$ctorPrWriter = (function (this__25873__auto__,writer__25874__auto__,opt__25875__auto__){
return cljs.core._write.call(null,writer__25874__auto__,"cljs.core.async/t35463");
});

cljs.core.async.__GT_t35463 = (function cljs$core$async$alt_handler_$___GT_t35463(alt_handler__$1,flag__$1,cb__$1,meta35464){
return (new cljs.core.async.t35463(alt_handler__$1,flag__$1,cb__$1,meta35464));
});

}

return (new cljs.core.async.t35463(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35466_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35466_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35467_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35467_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25294__auto__ = wport;
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35468 = (i + (1));
i = G__35468;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25294__auto__ = ret;
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25282__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25282__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25282__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__26334__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26334__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35471){
var map__35472 = p__35471;
var map__35472__$1 = ((cljs.core.seq_QMARK_.call(null,map__35472))?cljs.core.apply.call(null,cljs.core.hash_map,map__35472):map__35472);
var opts = map__35472__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35469){
var G__35470 = cljs.core.first.call(null,seq35469);
var seq35469__$1 = cljs.core.next.call(null,seq35469);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35470,seq35469__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__35474 = arguments.length;
switch (G__35474) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29159__auto___35523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___35523){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___35523){
return (function (state_35498){
var state_val_35499 = (state_35498[(1)]);
if((state_val_35499 === (7))){
var inst_35494 = (state_35498[(2)]);
var state_35498__$1 = state_35498;
var statearr_35500_35524 = state_35498__$1;
(statearr_35500_35524[(2)] = inst_35494);

(statearr_35500_35524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (1))){
var state_35498__$1 = state_35498;
var statearr_35501_35525 = state_35498__$1;
(statearr_35501_35525[(2)] = null);

(statearr_35501_35525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (4))){
var inst_35477 = (state_35498[(7)]);
var inst_35477__$1 = (state_35498[(2)]);
var inst_35478 = (inst_35477__$1 == null);
var state_35498__$1 = (function (){var statearr_35502 = state_35498;
(statearr_35502[(7)] = inst_35477__$1);

return statearr_35502;
})();
if(cljs.core.truth_(inst_35478)){
var statearr_35503_35526 = state_35498__$1;
(statearr_35503_35526[(1)] = (5));

} else {
var statearr_35504_35527 = state_35498__$1;
(statearr_35504_35527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (13))){
var state_35498__$1 = state_35498;
var statearr_35505_35528 = state_35498__$1;
(statearr_35505_35528[(2)] = null);

(statearr_35505_35528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (6))){
var inst_35477 = (state_35498[(7)]);
var state_35498__$1 = state_35498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35498__$1,(11),to,inst_35477);
} else {
if((state_val_35499 === (3))){
var inst_35496 = (state_35498[(2)]);
var state_35498__$1 = state_35498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35498__$1,inst_35496);
} else {
if((state_val_35499 === (12))){
var state_35498__$1 = state_35498;
var statearr_35506_35529 = state_35498__$1;
(statearr_35506_35529[(2)] = null);

(statearr_35506_35529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (2))){
var state_35498__$1 = state_35498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35498__$1,(4),from);
} else {
if((state_val_35499 === (11))){
var inst_35487 = (state_35498[(2)]);
var state_35498__$1 = state_35498;
if(cljs.core.truth_(inst_35487)){
var statearr_35507_35530 = state_35498__$1;
(statearr_35507_35530[(1)] = (12));

} else {
var statearr_35508_35531 = state_35498__$1;
(statearr_35508_35531[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (9))){
var state_35498__$1 = state_35498;
var statearr_35509_35532 = state_35498__$1;
(statearr_35509_35532[(2)] = null);

(statearr_35509_35532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (5))){
var state_35498__$1 = state_35498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35510_35533 = state_35498__$1;
(statearr_35510_35533[(1)] = (8));

} else {
var statearr_35511_35534 = state_35498__$1;
(statearr_35511_35534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (14))){
var inst_35492 = (state_35498[(2)]);
var state_35498__$1 = state_35498;
var statearr_35512_35535 = state_35498__$1;
(statearr_35512_35535[(2)] = inst_35492);

(statearr_35512_35535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (10))){
var inst_35484 = (state_35498[(2)]);
var state_35498__$1 = state_35498;
var statearr_35513_35536 = state_35498__$1;
(statearr_35513_35536[(2)] = inst_35484);

(statearr_35513_35536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (8))){
var inst_35481 = cljs.core.async.close_BANG_.call(null,to);
var state_35498__$1 = state_35498;
var statearr_35514_35537 = state_35498__$1;
(statearr_35514_35537[(2)] = inst_35481);

(statearr_35514_35537[(1)] = (10));


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
});})(c__29159__auto___35523))
;
return ((function (switch__29097__auto__,c__29159__auto___35523){
return (function() {
var cljs$core$async$state_machine__29098__auto__ = null;
var cljs$core$async$state_machine__29098__auto____0 = (function (){
var statearr_35518 = [null,null,null,null,null,null,null,null];
(statearr_35518[(0)] = cljs$core$async$state_machine__29098__auto__);

(statearr_35518[(1)] = (1));

return statearr_35518;
});
var cljs$core$async$state_machine__29098__auto____1 = (function (state_35498){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_35498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e35519){if((e35519 instanceof Object)){
var ex__29101__auto__ = e35519;
var statearr_35520_35538 = state_35498;
(statearr_35520_35538[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35539 = state_35498;
state_35498 = G__35539;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$state_machine__29098__auto__ = function(state_35498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29098__auto____1.call(this,state_35498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29098__auto____0;
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29098__auto____1;
return cljs$core$async$state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___35523))
})();
var state__29161__auto__ = (function (){var statearr_35521 = f__29160__auto__.call(null);
(statearr_35521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___35523);

return statearr_35521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___35523))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35723){
var vec__35724 = p__35723;
var v = cljs.core.nth.call(null,vec__35724,(0),null);
var p = cljs.core.nth.call(null,vec__35724,(1),null);
var job = vec__35724;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29159__auto___35906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___35906,res,vec__35724,v,p,job,jobs,results){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___35906,res,vec__35724,v,p,job,jobs,results){
return (function (state_35729){
var state_val_35730 = (state_35729[(1)]);
if((state_val_35730 === (1))){
var state_35729__$1 = state_35729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35729__$1,(2),res,v);
} else {
if((state_val_35730 === (2))){
var inst_35726 = (state_35729[(2)]);
var inst_35727 = cljs.core.async.close_BANG_.call(null,res);
var state_35729__$1 = (function (){var statearr_35731 = state_35729;
(statearr_35731[(7)] = inst_35726);

return statearr_35731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35729__$1,inst_35727);
} else {
return null;
}
}
});})(c__29159__auto___35906,res,vec__35724,v,p,job,jobs,results))
;
return ((function (switch__29097__auto__,c__29159__auto___35906,res,vec__35724,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0 = (function (){
var statearr_35735 = [null,null,null,null,null,null,null,null];
(statearr_35735[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__);

(statearr_35735[(1)] = (1));

return statearr_35735;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1 = (function (state_35729){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_35729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e35736){if((e35736 instanceof Object)){
var ex__29101__auto__ = e35736;
var statearr_35737_35907 = state_35729;
(statearr_35737_35907[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35908 = state_35729;
state_35729 = G__35908;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__ = function(state_35729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1.call(this,state_35729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___35906,res,vec__35724,v,p,job,jobs,results))
})();
var state__29161__auto__ = (function (){var statearr_35738 = f__29160__auto__.call(null);
(statearr_35738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___35906);

return statearr_35738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___35906,res,vec__35724,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35739){
var vec__35740 = p__35739;
var v = cljs.core.nth.call(null,vec__35740,(0),null);
var p = cljs.core.nth.call(null,vec__35740,(1),null);
var job = vec__35740;
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
var n__26179__auto___35909 = n;
var __35910 = (0);
while(true){
if((__35910 < n__26179__auto___35909)){
var G__35741_35911 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35741_35911) {
case "compute":
var c__29159__auto___35913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35910,c__29159__auto___35913,G__35741_35911,n__26179__auto___35909,jobs,results,process,async){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (__35910,c__29159__auto___35913,G__35741_35911,n__26179__auto___35909,jobs,results,process,async){
return (function (state_35754){
var state_val_35755 = (state_35754[(1)]);
if((state_val_35755 === (1))){
var state_35754__$1 = state_35754;
var statearr_35756_35914 = state_35754__$1;
(statearr_35756_35914[(2)] = null);

(statearr_35756_35914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (2))){
var state_35754__$1 = state_35754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35754__$1,(4),jobs);
} else {
if((state_val_35755 === (3))){
var inst_35752 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35754__$1,inst_35752);
} else {
if((state_val_35755 === (4))){
var inst_35744 = (state_35754[(2)]);
var inst_35745 = process.call(null,inst_35744);
var state_35754__$1 = state_35754;
if(cljs.core.truth_(inst_35745)){
var statearr_35757_35915 = state_35754__$1;
(statearr_35757_35915[(1)] = (5));

} else {
var statearr_35758_35916 = state_35754__$1;
(statearr_35758_35916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (5))){
var state_35754__$1 = state_35754;
var statearr_35759_35917 = state_35754__$1;
(statearr_35759_35917[(2)] = null);

(statearr_35759_35917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (6))){
var state_35754__$1 = state_35754;
var statearr_35760_35918 = state_35754__$1;
(statearr_35760_35918[(2)] = null);

(statearr_35760_35918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (7))){
var inst_35750 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
var statearr_35761_35919 = state_35754__$1;
(statearr_35761_35919[(2)] = inst_35750);

(statearr_35761_35919[(1)] = (3));


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
});})(__35910,c__29159__auto___35913,G__35741_35911,n__26179__auto___35909,jobs,results,process,async))
;
return ((function (__35910,switch__29097__auto__,c__29159__auto___35913,G__35741_35911,n__26179__auto___35909,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0 = (function (){
var statearr_35765 = [null,null,null,null,null,null,null];
(statearr_35765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__);

(statearr_35765[(1)] = (1));

return statearr_35765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1 = (function (state_35754){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_35754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e35766){if((e35766 instanceof Object)){
var ex__29101__auto__ = e35766;
var statearr_35767_35920 = state_35754;
(statearr_35767_35920[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35921 = state_35754;
state_35754 = G__35921;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__ = function(state_35754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1.call(this,state_35754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__;
})()
;})(__35910,switch__29097__auto__,c__29159__auto___35913,G__35741_35911,n__26179__auto___35909,jobs,results,process,async))
})();
var state__29161__auto__ = (function (){var statearr_35768 = f__29160__auto__.call(null);
(statearr_35768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___35913);

return statearr_35768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(__35910,c__29159__auto___35913,G__35741_35911,n__26179__auto___35909,jobs,results,process,async))
);


break;
case "async":
var c__29159__auto___35922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35910,c__29159__auto___35922,G__35741_35911,n__26179__auto___35909,jobs,results,process,async){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (__35910,c__29159__auto___35922,G__35741_35911,n__26179__auto___35909,jobs,results,process,async){
return (function (state_35781){
var state_val_35782 = (state_35781[(1)]);
if((state_val_35782 === (1))){
var state_35781__$1 = state_35781;
var statearr_35783_35923 = state_35781__$1;
(statearr_35783_35923[(2)] = null);

(statearr_35783_35923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35782 === (2))){
var state_35781__$1 = state_35781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35781__$1,(4),jobs);
} else {
if((state_val_35782 === (3))){
var inst_35779 = (state_35781[(2)]);
var state_35781__$1 = state_35781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35781__$1,inst_35779);
} else {
if((state_val_35782 === (4))){
var inst_35771 = (state_35781[(2)]);
var inst_35772 = async.call(null,inst_35771);
var state_35781__$1 = state_35781;
if(cljs.core.truth_(inst_35772)){
var statearr_35784_35924 = state_35781__$1;
(statearr_35784_35924[(1)] = (5));

} else {
var statearr_35785_35925 = state_35781__$1;
(statearr_35785_35925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35782 === (5))){
var state_35781__$1 = state_35781;
var statearr_35786_35926 = state_35781__$1;
(statearr_35786_35926[(2)] = null);

(statearr_35786_35926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35782 === (6))){
var state_35781__$1 = state_35781;
var statearr_35787_35927 = state_35781__$1;
(statearr_35787_35927[(2)] = null);

(statearr_35787_35927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35782 === (7))){
var inst_35777 = (state_35781[(2)]);
var state_35781__$1 = state_35781;
var statearr_35788_35928 = state_35781__$1;
(statearr_35788_35928[(2)] = inst_35777);

(statearr_35788_35928[(1)] = (3));


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
});})(__35910,c__29159__auto___35922,G__35741_35911,n__26179__auto___35909,jobs,results,process,async))
;
return ((function (__35910,switch__29097__auto__,c__29159__auto___35922,G__35741_35911,n__26179__auto___35909,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0 = (function (){
var statearr_35792 = [null,null,null,null,null,null,null];
(statearr_35792[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__);

(statearr_35792[(1)] = (1));

return statearr_35792;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1 = (function (state_35781){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_35781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e35793){if((e35793 instanceof Object)){
var ex__29101__auto__ = e35793;
var statearr_35794_35929 = state_35781;
(statearr_35794_35929[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35930 = state_35781;
state_35781 = G__35930;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__ = function(state_35781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1.call(this,state_35781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__;
})()
;})(__35910,switch__29097__auto__,c__29159__auto___35922,G__35741_35911,n__26179__auto___35909,jobs,results,process,async))
})();
var state__29161__auto__ = (function (){var statearr_35795 = f__29160__auto__.call(null);
(statearr_35795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___35922);

return statearr_35795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(__35910,c__29159__auto___35922,G__35741_35911,n__26179__auto___35909,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__35931 = (__35910 + (1));
__35910 = G__35931;
continue;
} else {
}
break;
}

var c__29159__auto___35932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___35932,jobs,results,process,async){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___35932,jobs,results,process,async){
return (function (state_35817){
var state_val_35818 = (state_35817[(1)]);
if((state_val_35818 === (1))){
var state_35817__$1 = state_35817;
var statearr_35819_35933 = state_35817__$1;
(statearr_35819_35933[(2)] = null);

(statearr_35819_35933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35818 === (2))){
var state_35817__$1 = state_35817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35817__$1,(4),from);
} else {
if((state_val_35818 === (3))){
var inst_35815 = (state_35817[(2)]);
var state_35817__$1 = state_35817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35817__$1,inst_35815);
} else {
if((state_val_35818 === (4))){
var inst_35798 = (state_35817[(7)]);
var inst_35798__$1 = (state_35817[(2)]);
var inst_35799 = (inst_35798__$1 == null);
var state_35817__$1 = (function (){var statearr_35820 = state_35817;
(statearr_35820[(7)] = inst_35798__$1);

return statearr_35820;
})();
if(cljs.core.truth_(inst_35799)){
var statearr_35821_35934 = state_35817__$1;
(statearr_35821_35934[(1)] = (5));

} else {
var statearr_35822_35935 = state_35817__$1;
(statearr_35822_35935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35818 === (5))){
var inst_35801 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35817__$1 = state_35817;
var statearr_35823_35936 = state_35817__$1;
(statearr_35823_35936[(2)] = inst_35801);

(statearr_35823_35936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35818 === (6))){
var inst_35803 = (state_35817[(8)]);
var inst_35798 = (state_35817[(7)]);
var inst_35803__$1 = cljs.core.async.chan.call(null,(1));
var inst_35804 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35805 = [inst_35798,inst_35803__$1];
var inst_35806 = (new cljs.core.PersistentVector(null,2,(5),inst_35804,inst_35805,null));
var state_35817__$1 = (function (){var statearr_35824 = state_35817;
(statearr_35824[(8)] = inst_35803__$1);

return statearr_35824;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35817__$1,(8),jobs,inst_35806);
} else {
if((state_val_35818 === (7))){
var inst_35813 = (state_35817[(2)]);
var state_35817__$1 = state_35817;
var statearr_35825_35937 = state_35817__$1;
(statearr_35825_35937[(2)] = inst_35813);

(statearr_35825_35937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35818 === (8))){
var inst_35803 = (state_35817[(8)]);
var inst_35808 = (state_35817[(2)]);
var state_35817__$1 = (function (){var statearr_35826 = state_35817;
(statearr_35826[(9)] = inst_35808);

return statearr_35826;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35817__$1,(9),results,inst_35803);
} else {
if((state_val_35818 === (9))){
var inst_35810 = (state_35817[(2)]);
var state_35817__$1 = (function (){var statearr_35827 = state_35817;
(statearr_35827[(10)] = inst_35810);

return statearr_35827;
})();
var statearr_35828_35938 = state_35817__$1;
(statearr_35828_35938[(2)] = null);

(statearr_35828_35938[(1)] = (2));


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
});})(c__29159__auto___35932,jobs,results,process,async))
;
return ((function (switch__29097__auto__,c__29159__auto___35932,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0 = (function (){
var statearr_35832 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35832[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__);

(statearr_35832[(1)] = (1));

return statearr_35832;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1 = (function (state_35817){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_35817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e35833){if((e35833 instanceof Object)){
var ex__29101__auto__ = e35833;
var statearr_35834_35939 = state_35817;
(statearr_35834_35939[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35940 = state_35817;
state_35817 = G__35940;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__ = function(state_35817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1.call(this,state_35817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___35932,jobs,results,process,async))
})();
var state__29161__auto__ = (function (){var statearr_35835 = f__29160__auto__.call(null);
(statearr_35835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___35932);

return statearr_35835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___35932,jobs,results,process,async))
);


var c__29159__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto__,jobs,results,process,async){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto__,jobs,results,process,async){
return (function (state_35873){
var state_val_35874 = (state_35873[(1)]);
if((state_val_35874 === (7))){
var inst_35869 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35875_35941 = state_35873__$1;
(statearr_35875_35941[(2)] = inst_35869);

(statearr_35875_35941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (20))){
var state_35873__$1 = state_35873;
var statearr_35876_35942 = state_35873__$1;
(statearr_35876_35942[(2)] = null);

(statearr_35876_35942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (1))){
var state_35873__$1 = state_35873;
var statearr_35877_35943 = state_35873__$1;
(statearr_35877_35943[(2)] = null);

(statearr_35877_35943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (4))){
var inst_35838 = (state_35873[(7)]);
var inst_35838__$1 = (state_35873[(2)]);
var inst_35839 = (inst_35838__$1 == null);
var state_35873__$1 = (function (){var statearr_35878 = state_35873;
(statearr_35878[(7)] = inst_35838__$1);

return statearr_35878;
})();
if(cljs.core.truth_(inst_35839)){
var statearr_35879_35944 = state_35873__$1;
(statearr_35879_35944[(1)] = (5));

} else {
var statearr_35880_35945 = state_35873__$1;
(statearr_35880_35945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (15))){
var inst_35851 = (state_35873[(8)]);
var state_35873__$1 = state_35873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35873__$1,(18),to,inst_35851);
} else {
if((state_val_35874 === (21))){
var inst_35864 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35881_35946 = state_35873__$1;
(statearr_35881_35946[(2)] = inst_35864);

(statearr_35881_35946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (13))){
var inst_35866 = (state_35873[(2)]);
var state_35873__$1 = (function (){var statearr_35882 = state_35873;
(statearr_35882[(9)] = inst_35866);

return statearr_35882;
})();
var statearr_35883_35947 = state_35873__$1;
(statearr_35883_35947[(2)] = null);

(statearr_35883_35947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (6))){
var inst_35838 = (state_35873[(7)]);
var state_35873__$1 = state_35873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35873__$1,(11),inst_35838);
} else {
if((state_val_35874 === (17))){
var inst_35859 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
if(cljs.core.truth_(inst_35859)){
var statearr_35884_35948 = state_35873__$1;
(statearr_35884_35948[(1)] = (19));

} else {
var statearr_35885_35949 = state_35873__$1;
(statearr_35885_35949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (3))){
var inst_35871 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35873__$1,inst_35871);
} else {
if((state_val_35874 === (12))){
var inst_35848 = (state_35873[(10)]);
var state_35873__$1 = state_35873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35873__$1,(14),inst_35848);
} else {
if((state_val_35874 === (2))){
var state_35873__$1 = state_35873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35873__$1,(4),results);
} else {
if((state_val_35874 === (19))){
var state_35873__$1 = state_35873;
var statearr_35886_35950 = state_35873__$1;
(statearr_35886_35950[(2)] = null);

(statearr_35886_35950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (11))){
var inst_35848 = (state_35873[(2)]);
var state_35873__$1 = (function (){var statearr_35887 = state_35873;
(statearr_35887[(10)] = inst_35848);

return statearr_35887;
})();
var statearr_35888_35951 = state_35873__$1;
(statearr_35888_35951[(2)] = null);

(statearr_35888_35951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (9))){
var state_35873__$1 = state_35873;
var statearr_35889_35952 = state_35873__$1;
(statearr_35889_35952[(2)] = null);

(statearr_35889_35952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (5))){
var state_35873__$1 = state_35873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35890_35953 = state_35873__$1;
(statearr_35890_35953[(1)] = (8));

} else {
var statearr_35891_35954 = state_35873__$1;
(statearr_35891_35954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (14))){
var inst_35851 = (state_35873[(8)]);
var inst_35853 = (state_35873[(11)]);
var inst_35851__$1 = (state_35873[(2)]);
var inst_35852 = (inst_35851__$1 == null);
var inst_35853__$1 = cljs.core.not.call(null,inst_35852);
var state_35873__$1 = (function (){var statearr_35892 = state_35873;
(statearr_35892[(8)] = inst_35851__$1);

(statearr_35892[(11)] = inst_35853__$1);

return statearr_35892;
})();
if(inst_35853__$1){
var statearr_35893_35955 = state_35873__$1;
(statearr_35893_35955[(1)] = (15));

} else {
var statearr_35894_35956 = state_35873__$1;
(statearr_35894_35956[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (16))){
var inst_35853 = (state_35873[(11)]);
var state_35873__$1 = state_35873;
var statearr_35895_35957 = state_35873__$1;
(statearr_35895_35957[(2)] = inst_35853);

(statearr_35895_35957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (10))){
var inst_35845 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35896_35958 = state_35873__$1;
(statearr_35896_35958[(2)] = inst_35845);

(statearr_35896_35958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (18))){
var inst_35856 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35897_35959 = state_35873__$1;
(statearr_35897_35959[(2)] = inst_35856);

(statearr_35897_35959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (8))){
var inst_35842 = cljs.core.async.close_BANG_.call(null,to);
var state_35873__$1 = state_35873;
var statearr_35898_35960 = state_35873__$1;
(statearr_35898_35960[(2)] = inst_35842);

(statearr_35898_35960[(1)] = (10));


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
});})(c__29159__auto__,jobs,results,process,async))
;
return ((function (switch__29097__auto__,c__29159__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0 = (function (){
var statearr_35902 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__);

(statearr_35902[(1)] = (1));

return statearr_35902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1 = (function (state_35873){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_35873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e35903){if((e35903 instanceof Object)){
var ex__29101__auto__ = e35903;
var statearr_35904_35961 = state_35873;
(statearr_35904_35961[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35962 = state_35873;
state_35873 = G__35962;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__ = function(state_35873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1.call(this,state_35873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29098__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto__,jobs,results,process,async))
})();
var state__29161__auto__ = (function (){var statearr_35905 = f__29160__auto__.call(null);
(statearr_35905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto__);

return statearr_35905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto__,jobs,results,process,async))
);

return c__29159__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__35964 = arguments.length;
switch (G__35964) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__35967 = arguments.length;
switch (G__35967) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__35970 = arguments.length;
switch (G__35970) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29159__auto___36022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___36022,tc,fc){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___36022,tc,fc){
return (function (state_35996){
var state_val_35997 = (state_35996[(1)]);
if((state_val_35997 === (7))){
var inst_35992 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_35998_36023 = state_35996__$1;
(statearr_35998_36023[(2)] = inst_35992);

(statearr_35998_36023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (1))){
var state_35996__$1 = state_35996;
var statearr_35999_36024 = state_35996__$1;
(statearr_35999_36024[(2)] = null);

(statearr_35999_36024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (4))){
var inst_35973 = (state_35996[(7)]);
var inst_35973__$1 = (state_35996[(2)]);
var inst_35974 = (inst_35973__$1 == null);
var state_35996__$1 = (function (){var statearr_36000 = state_35996;
(statearr_36000[(7)] = inst_35973__$1);

return statearr_36000;
})();
if(cljs.core.truth_(inst_35974)){
var statearr_36001_36025 = state_35996__$1;
(statearr_36001_36025[(1)] = (5));

} else {
var statearr_36002_36026 = state_35996__$1;
(statearr_36002_36026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (13))){
var state_35996__$1 = state_35996;
var statearr_36003_36027 = state_35996__$1;
(statearr_36003_36027[(2)] = null);

(statearr_36003_36027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (6))){
var inst_35973 = (state_35996[(7)]);
var inst_35979 = p.call(null,inst_35973);
var state_35996__$1 = state_35996;
if(cljs.core.truth_(inst_35979)){
var statearr_36004_36028 = state_35996__$1;
(statearr_36004_36028[(1)] = (9));

} else {
var statearr_36005_36029 = state_35996__$1;
(statearr_36005_36029[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (3))){
var inst_35994 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35996__$1,inst_35994);
} else {
if((state_val_35997 === (12))){
var state_35996__$1 = state_35996;
var statearr_36006_36030 = state_35996__$1;
(statearr_36006_36030[(2)] = null);

(statearr_36006_36030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (2))){
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35996__$1,(4),ch);
} else {
if((state_val_35997 === (11))){
var inst_35973 = (state_35996[(7)]);
var inst_35983 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35996__$1,(8),inst_35983,inst_35973);
} else {
if((state_val_35997 === (9))){
var state_35996__$1 = state_35996;
var statearr_36007_36031 = state_35996__$1;
(statearr_36007_36031[(2)] = tc);

(statearr_36007_36031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (5))){
var inst_35976 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35977 = cljs.core.async.close_BANG_.call(null,fc);
var state_35996__$1 = (function (){var statearr_36008 = state_35996;
(statearr_36008[(8)] = inst_35976);

return statearr_36008;
})();
var statearr_36009_36032 = state_35996__$1;
(statearr_36009_36032[(2)] = inst_35977);

(statearr_36009_36032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (14))){
var inst_35990 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_36010_36033 = state_35996__$1;
(statearr_36010_36033[(2)] = inst_35990);

(statearr_36010_36033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (10))){
var state_35996__$1 = state_35996;
var statearr_36011_36034 = state_35996__$1;
(statearr_36011_36034[(2)] = fc);

(statearr_36011_36034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (8))){
var inst_35985 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
if(cljs.core.truth_(inst_35985)){
var statearr_36012_36035 = state_35996__$1;
(statearr_36012_36035[(1)] = (12));

} else {
var statearr_36013_36036 = state_35996__$1;
(statearr_36013_36036[(1)] = (13));

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
});})(c__29159__auto___36022,tc,fc))
;
return ((function (switch__29097__auto__,c__29159__auto___36022,tc,fc){
return (function() {
var cljs$core$async$state_machine__29098__auto__ = null;
var cljs$core$async$state_machine__29098__auto____0 = (function (){
var statearr_36017 = [null,null,null,null,null,null,null,null,null];
(statearr_36017[(0)] = cljs$core$async$state_machine__29098__auto__);

(statearr_36017[(1)] = (1));

return statearr_36017;
});
var cljs$core$async$state_machine__29098__auto____1 = (function (state_35996){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_35996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e36018){if((e36018 instanceof Object)){
var ex__29101__auto__ = e36018;
var statearr_36019_36037 = state_35996;
(statearr_36019_36037[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36038 = state_35996;
state_35996 = G__36038;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$state_machine__29098__auto__ = function(state_35996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29098__auto____1.call(this,state_35996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29098__auto____0;
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29098__auto____1;
return cljs$core$async$state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___36022,tc,fc))
})();
var state__29161__auto__ = (function (){var statearr_36020 = f__29160__auto__.call(null);
(statearr_36020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___36022);

return statearr_36020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___36022,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29159__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto__){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto__){
return (function (state_36085){
var state_val_36086 = (state_36085[(1)]);
if((state_val_36086 === (1))){
var inst_36071 = init;
var state_36085__$1 = (function (){var statearr_36087 = state_36085;
(statearr_36087[(7)] = inst_36071);

return statearr_36087;
})();
var statearr_36088_36103 = state_36085__$1;
(statearr_36088_36103[(2)] = null);

(statearr_36088_36103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (2))){
var state_36085__$1 = state_36085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36085__$1,(4),ch);
} else {
if((state_val_36086 === (3))){
var inst_36083 = (state_36085[(2)]);
var state_36085__$1 = state_36085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36085__$1,inst_36083);
} else {
if((state_val_36086 === (4))){
var inst_36074 = (state_36085[(8)]);
var inst_36074__$1 = (state_36085[(2)]);
var inst_36075 = (inst_36074__$1 == null);
var state_36085__$1 = (function (){var statearr_36089 = state_36085;
(statearr_36089[(8)] = inst_36074__$1);

return statearr_36089;
})();
if(cljs.core.truth_(inst_36075)){
var statearr_36090_36104 = state_36085__$1;
(statearr_36090_36104[(1)] = (5));

} else {
var statearr_36091_36105 = state_36085__$1;
(statearr_36091_36105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (5))){
var inst_36071 = (state_36085[(7)]);
var state_36085__$1 = state_36085;
var statearr_36092_36106 = state_36085__$1;
(statearr_36092_36106[(2)] = inst_36071);

(statearr_36092_36106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (6))){
var inst_36071 = (state_36085[(7)]);
var inst_36074 = (state_36085[(8)]);
var inst_36078 = f.call(null,inst_36071,inst_36074);
var inst_36071__$1 = inst_36078;
var state_36085__$1 = (function (){var statearr_36093 = state_36085;
(statearr_36093[(7)] = inst_36071__$1);

return statearr_36093;
})();
var statearr_36094_36107 = state_36085__$1;
(statearr_36094_36107[(2)] = null);

(statearr_36094_36107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (7))){
var inst_36081 = (state_36085[(2)]);
var state_36085__$1 = state_36085;
var statearr_36095_36108 = state_36085__$1;
(statearr_36095_36108[(2)] = inst_36081);

(statearr_36095_36108[(1)] = (3));


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
});})(c__29159__auto__))
;
return ((function (switch__29097__auto__,c__29159__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29098__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29098__auto____0 = (function (){
var statearr_36099 = [null,null,null,null,null,null,null,null,null];
(statearr_36099[(0)] = cljs$core$async$reduce_$_state_machine__29098__auto__);

(statearr_36099[(1)] = (1));

return statearr_36099;
});
var cljs$core$async$reduce_$_state_machine__29098__auto____1 = (function (state_36085){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_36085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e36100){if((e36100 instanceof Object)){
var ex__29101__auto__ = e36100;
var statearr_36101_36109 = state_36085;
(statearr_36101_36109[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36110 = state_36085;
state_36085 = G__36110;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29098__auto__ = function(state_36085){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29098__auto____1.call(this,state_36085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29098__auto____0;
cljs$core$async$reduce_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29098__auto____1;
return cljs$core$async$reduce_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto__))
})();
var state__29161__auto__ = (function (){var statearr_36102 = f__29160__auto__.call(null);
(statearr_36102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto__);

return statearr_36102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto__))
);

return c__29159__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__36112 = arguments.length;
switch (G__36112) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29159__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto__){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto__){
return (function (state_36137){
var state_val_36138 = (state_36137[(1)]);
if((state_val_36138 === (7))){
var inst_36119 = (state_36137[(2)]);
var state_36137__$1 = state_36137;
var statearr_36139_36163 = state_36137__$1;
(statearr_36139_36163[(2)] = inst_36119);

(statearr_36139_36163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36138 === (1))){
var inst_36113 = cljs.core.seq.call(null,coll);
var inst_36114 = inst_36113;
var state_36137__$1 = (function (){var statearr_36140 = state_36137;
(statearr_36140[(7)] = inst_36114);

return statearr_36140;
})();
var statearr_36141_36164 = state_36137__$1;
(statearr_36141_36164[(2)] = null);

(statearr_36141_36164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36138 === (4))){
var inst_36114 = (state_36137[(7)]);
var inst_36117 = cljs.core.first.call(null,inst_36114);
var state_36137__$1 = state_36137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36137__$1,(7),ch,inst_36117);
} else {
if((state_val_36138 === (13))){
var inst_36131 = (state_36137[(2)]);
var state_36137__$1 = state_36137;
var statearr_36142_36165 = state_36137__$1;
(statearr_36142_36165[(2)] = inst_36131);

(statearr_36142_36165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36138 === (6))){
var inst_36122 = (state_36137[(2)]);
var state_36137__$1 = state_36137;
if(cljs.core.truth_(inst_36122)){
var statearr_36143_36166 = state_36137__$1;
(statearr_36143_36166[(1)] = (8));

} else {
var statearr_36144_36167 = state_36137__$1;
(statearr_36144_36167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36138 === (3))){
var inst_36135 = (state_36137[(2)]);
var state_36137__$1 = state_36137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36137__$1,inst_36135);
} else {
if((state_val_36138 === (12))){
var state_36137__$1 = state_36137;
var statearr_36145_36168 = state_36137__$1;
(statearr_36145_36168[(2)] = null);

(statearr_36145_36168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36138 === (2))){
var inst_36114 = (state_36137[(7)]);
var state_36137__$1 = state_36137;
if(cljs.core.truth_(inst_36114)){
var statearr_36146_36169 = state_36137__$1;
(statearr_36146_36169[(1)] = (4));

} else {
var statearr_36147_36170 = state_36137__$1;
(statearr_36147_36170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36138 === (11))){
var inst_36128 = cljs.core.async.close_BANG_.call(null,ch);
var state_36137__$1 = state_36137;
var statearr_36148_36171 = state_36137__$1;
(statearr_36148_36171[(2)] = inst_36128);

(statearr_36148_36171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36138 === (9))){
var state_36137__$1 = state_36137;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36149_36172 = state_36137__$1;
(statearr_36149_36172[(1)] = (11));

} else {
var statearr_36150_36173 = state_36137__$1;
(statearr_36150_36173[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36138 === (5))){
var inst_36114 = (state_36137[(7)]);
var state_36137__$1 = state_36137;
var statearr_36151_36174 = state_36137__$1;
(statearr_36151_36174[(2)] = inst_36114);

(statearr_36151_36174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36138 === (10))){
var inst_36133 = (state_36137[(2)]);
var state_36137__$1 = state_36137;
var statearr_36152_36175 = state_36137__$1;
(statearr_36152_36175[(2)] = inst_36133);

(statearr_36152_36175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36138 === (8))){
var inst_36114 = (state_36137[(7)]);
var inst_36124 = cljs.core.next.call(null,inst_36114);
var inst_36114__$1 = inst_36124;
var state_36137__$1 = (function (){var statearr_36153 = state_36137;
(statearr_36153[(7)] = inst_36114__$1);

return statearr_36153;
})();
var statearr_36154_36176 = state_36137__$1;
(statearr_36154_36176[(2)] = null);

(statearr_36154_36176[(1)] = (2));


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
});})(c__29159__auto__))
;
return ((function (switch__29097__auto__,c__29159__auto__){
return (function() {
var cljs$core$async$state_machine__29098__auto__ = null;
var cljs$core$async$state_machine__29098__auto____0 = (function (){
var statearr_36158 = [null,null,null,null,null,null,null,null];
(statearr_36158[(0)] = cljs$core$async$state_machine__29098__auto__);

(statearr_36158[(1)] = (1));

return statearr_36158;
});
var cljs$core$async$state_machine__29098__auto____1 = (function (state_36137){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_36137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e36159){if((e36159 instanceof Object)){
var ex__29101__auto__ = e36159;
var statearr_36160_36177 = state_36137;
(statearr_36160_36177[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36178 = state_36137;
state_36137 = G__36178;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$state_machine__29098__auto__ = function(state_36137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29098__auto____1.call(this,state_36137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29098__auto____0;
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29098__auto____1;
return cljs$core$async$state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto__))
})();
var state__29161__auto__ = (function (){var statearr_36161 = f__29160__auto__.call(null);
(statearr_36161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto__);

return statearr_36161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto__))
);

return c__29159__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj36180 = {};
return obj36180;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__25282__auto__ = _;
if(and__25282__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__25282__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25930__auto__ = (((_ == null))?null:_);
return (function (){var or__25294__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj36182 = {};
return obj36182;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__25282__auto__ = m;
if(and__25282__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__25282__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25930__auto__ = (((m == null))?null:m);
return (function (){var or__25294__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__25282__auto__ = m;
if(and__25282__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__25282__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25930__auto__ = (((m == null))?null:m);
return (function (){var or__25294__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__25282__auto__ = m;
if(and__25282__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__25282__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25930__auto__ = (((m == null))?null:m);
return (function (){var or__25294__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t36404 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36404 = (function (mult,ch,cs,meta36405){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36405 = meta36405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36406,meta36405__$1){
var self__ = this;
var _36406__$1 = this;
return (new cljs.core.async.t36404(self__.mult,self__.ch,self__.cs,meta36405__$1));
});})(cs))
;

cljs.core.async.t36404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36406){
var self__ = this;
var _36406__$1 = this;
return self__.meta36405;
});})(cs))
;

cljs.core.async.t36404.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36404.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t36404.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t36404.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t36404.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t36404.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t36404.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36405","meta36405",1075721384,null)], null);
});})(cs))
;

cljs.core.async.t36404.cljs$lang$type = true;

cljs.core.async.t36404.cljs$lang$ctorStr = "cljs.core.async/t36404";

cljs.core.async.t36404.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25873__auto__,writer__25874__auto__,opt__25875__auto__){
return cljs.core._write.call(null,writer__25874__auto__,"cljs.core.async/t36404");
});})(cs))
;

cljs.core.async.__GT_t36404 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t36404(mult__$1,ch__$1,cs__$1,meta36405){
return (new cljs.core.async.t36404(mult__$1,ch__$1,cs__$1,meta36405));
});})(cs))
;

}

return (new cljs.core.async.t36404(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29159__auto___36625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___36625,cs,m,dchan,dctr,done){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___36625,cs,m,dchan,dctr,done){
return (function (state_36537){
var state_val_36538 = (state_36537[(1)]);
if((state_val_36538 === (7))){
var inst_36533 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36539_36626 = state_36537__$1;
(statearr_36539_36626[(2)] = inst_36533);

(statearr_36539_36626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (20))){
var inst_36438 = (state_36537[(7)]);
var inst_36448 = cljs.core.first.call(null,inst_36438);
var inst_36449 = cljs.core.nth.call(null,inst_36448,(0),null);
var inst_36450 = cljs.core.nth.call(null,inst_36448,(1),null);
var state_36537__$1 = (function (){var statearr_36540 = state_36537;
(statearr_36540[(8)] = inst_36449);

return statearr_36540;
})();
if(cljs.core.truth_(inst_36450)){
var statearr_36541_36627 = state_36537__$1;
(statearr_36541_36627[(1)] = (22));

} else {
var statearr_36542_36628 = state_36537__$1;
(statearr_36542_36628[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (27))){
var inst_36485 = (state_36537[(9)]);
var inst_36478 = (state_36537[(10)]);
var inst_36480 = (state_36537[(11)]);
var inst_36409 = (state_36537[(12)]);
var inst_36485__$1 = cljs.core._nth.call(null,inst_36478,inst_36480);
var inst_36486 = cljs.core.async.put_BANG_.call(null,inst_36485__$1,inst_36409,done);
var state_36537__$1 = (function (){var statearr_36543 = state_36537;
(statearr_36543[(9)] = inst_36485__$1);

return statearr_36543;
})();
if(cljs.core.truth_(inst_36486)){
var statearr_36544_36629 = state_36537__$1;
(statearr_36544_36629[(1)] = (30));

} else {
var statearr_36545_36630 = state_36537__$1;
(statearr_36545_36630[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (1))){
var state_36537__$1 = state_36537;
var statearr_36546_36631 = state_36537__$1;
(statearr_36546_36631[(2)] = null);

(statearr_36546_36631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (24))){
var inst_36438 = (state_36537[(7)]);
var inst_36455 = (state_36537[(2)]);
var inst_36456 = cljs.core.next.call(null,inst_36438);
var inst_36418 = inst_36456;
var inst_36419 = null;
var inst_36420 = (0);
var inst_36421 = (0);
var state_36537__$1 = (function (){var statearr_36547 = state_36537;
(statearr_36547[(13)] = inst_36418);

(statearr_36547[(14)] = inst_36420);

(statearr_36547[(15)] = inst_36421);

(statearr_36547[(16)] = inst_36419);

(statearr_36547[(17)] = inst_36455);

return statearr_36547;
})();
var statearr_36548_36632 = state_36537__$1;
(statearr_36548_36632[(2)] = null);

(statearr_36548_36632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (39))){
var state_36537__$1 = state_36537;
var statearr_36552_36633 = state_36537__$1;
(statearr_36552_36633[(2)] = null);

(statearr_36552_36633[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (4))){
var inst_36409 = (state_36537[(12)]);
var inst_36409__$1 = (state_36537[(2)]);
var inst_36410 = (inst_36409__$1 == null);
var state_36537__$1 = (function (){var statearr_36553 = state_36537;
(statearr_36553[(12)] = inst_36409__$1);

return statearr_36553;
})();
if(cljs.core.truth_(inst_36410)){
var statearr_36554_36634 = state_36537__$1;
(statearr_36554_36634[(1)] = (5));

} else {
var statearr_36555_36635 = state_36537__$1;
(statearr_36555_36635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (15))){
var inst_36418 = (state_36537[(13)]);
var inst_36420 = (state_36537[(14)]);
var inst_36421 = (state_36537[(15)]);
var inst_36419 = (state_36537[(16)]);
var inst_36434 = (state_36537[(2)]);
var inst_36435 = (inst_36421 + (1));
var tmp36549 = inst_36418;
var tmp36550 = inst_36420;
var tmp36551 = inst_36419;
var inst_36418__$1 = tmp36549;
var inst_36419__$1 = tmp36551;
var inst_36420__$1 = tmp36550;
var inst_36421__$1 = inst_36435;
var state_36537__$1 = (function (){var statearr_36556 = state_36537;
(statearr_36556[(13)] = inst_36418__$1);

(statearr_36556[(14)] = inst_36420__$1);

(statearr_36556[(15)] = inst_36421__$1);

(statearr_36556[(16)] = inst_36419__$1);

(statearr_36556[(18)] = inst_36434);

return statearr_36556;
})();
var statearr_36557_36636 = state_36537__$1;
(statearr_36557_36636[(2)] = null);

(statearr_36557_36636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (21))){
var inst_36459 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36561_36637 = state_36537__$1;
(statearr_36561_36637[(2)] = inst_36459);

(statearr_36561_36637[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (31))){
var inst_36485 = (state_36537[(9)]);
var inst_36489 = done.call(null,null);
var inst_36490 = cljs.core.async.untap_STAR_.call(null,m,inst_36485);
var state_36537__$1 = (function (){var statearr_36562 = state_36537;
(statearr_36562[(19)] = inst_36489);

return statearr_36562;
})();
var statearr_36563_36638 = state_36537__$1;
(statearr_36563_36638[(2)] = inst_36490);

(statearr_36563_36638[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (32))){
var inst_36477 = (state_36537[(20)]);
var inst_36478 = (state_36537[(10)]);
var inst_36480 = (state_36537[(11)]);
var inst_36479 = (state_36537[(21)]);
var inst_36492 = (state_36537[(2)]);
var inst_36493 = (inst_36480 + (1));
var tmp36558 = inst_36477;
var tmp36559 = inst_36478;
var tmp36560 = inst_36479;
var inst_36477__$1 = tmp36558;
var inst_36478__$1 = tmp36559;
var inst_36479__$1 = tmp36560;
var inst_36480__$1 = inst_36493;
var state_36537__$1 = (function (){var statearr_36564 = state_36537;
(statearr_36564[(22)] = inst_36492);

(statearr_36564[(20)] = inst_36477__$1);

(statearr_36564[(10)] = inst_36478__$1);

(statearr_36564[(11)] = inst_36480__$1);

(statearr_36564[(21)] = inst_36479__$1);

return statearr_36564;
})();
var statearr_36565_36639 = state_36537__$1;
(statearr_36565_36639[(2)] = null);

(statearr_36565_36639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (40))){
var inst_36505 = (state_36537[(23)]);
var inst_36509 = done.call(null,null);
var inst_36510 = cljs.core.async.untap_STAR_.call(null,m,inst_36505);
var state_36537__$1 = (function (){var statearr_36566 = state_36537;
(statearr_36566[(24)] = inst_36509);

return statearr_36566;
})();
var statearr_36567_36640 = state_36537__$1;
(statearr_36567_36640[(2)] = inst_36510);

(statearr_36567_36640[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (33))){
var inst_36496 = (state_36537[(25)]);
var inst_36498 = cljs.core.chunked_seq_QMARK_.call(null,inst_36496);
var state_36537__$1 = state_36537;
if(inst_36498){
var statearr_36568_36641 = state_36537__$1;
(statearr_36568_36641[(1)] = (36));

} else {
var statearr_36569_36642 = state_36537__$1;
(statearr_36569_36642[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (13))){
var inst_36428 = (state_36537[(26)]);
var inst_36431 = cljs.core.async.close_BANG_.call(null,inst_36428);
var state_36537__$1 = state_36537;
var statearr_36570_36643 = state_36537__$1;
(statearr_36570_36643[(2)] = inst_36431);

(statearr_36570_36643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (22))){
var inst_36449 = (state_36537[(8)]);
var inst_36452 = cljs.core.async.close_BANG_.call(null,inst_36449);
var state_36537__$1 = state_36537;
var statearr_36571_36644 = state_36537__$1;
(statearr_36571_36644[(2)] = inst_36452);

(statearr_36571_36644[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (36))){
var inst_36496 = (state_36537[(25)]);
var inst_36500 = cljs.core.chunk_first.call(null,inst_36496);
var inst_36501 = cljs.core.chunk_rest.call(null,inst_36496);
var inst_36502 = cljs.core.count.call(null,inst_36500);
var inst_36477 = inst_36501;
var inst_36478 = inst_36500;
var inst_36479 = inst_36502;
var inst_36480 = (0);
var state_36537__$1 = (function (){var statearr_36572 = state_36537;
(statearr_36572[(20)] = inst_36477);

(statearr_36572[(10)] = inst_36478);

(statearr_36572[(11)] = inst_36480);

(statearr_36572[(21)] = inst_36479);

return statearr_36572;
})();
var statearr_36573_36645 = state_36537__$1;
(statearr_36573_36645[(2)] = null);

(statearr_36573_36645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (41))){
var inst_36496 = (state_36537[(25)]);
var inst_36512 = (state_36537[(2)]);
var inst_36513 = cljs.core.next.call(null,inst_36496);
var inst_36477 = inst_36513;
var inst_36478 = null;
var inst_36479 = (0);
var inst_36480 = (0);
var state_36537__$1 = (function (){var statearr_36574 = state_36537;
(statearr_36574[(20)] = inst_36477);

(statearr_36574[(10)] = inst_36478);

(statearr_36574[(11)] = inst_36480);

(statearr_36574[(27)] = inst_36512);

(statearr_36574[(21)] = inst_36479);

return statearr_36574;
})();
var statearr_36575_36646 = state_36537__$1;
(statearr_36575_36646[(2)] = null);

(statearr_36575_36646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (43))){
var state_36537__$1 = state_36537;
var statearr_36576_36647 = state_36537__$1;
(statearr_36576_36647[(2)] = null);

(statearr_36576_36647[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (29))){
var inst_36521 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36577_36648 = state_36537__$1;
(statearr_36577_36648[(2)] = inst_36521);

(statearr_36577_36648[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (44))){
var inst_36530 = (state_36537[(2)]);
var state_36537__$1 = (function (){var statearr_36578 = state_36537;
(statearr_36578[(28)] = inst_36530);

return statearr_36578;
})();
var statearr_36579_36649 = state_36537__$1;
(statearr_36579_36649[(2)] = null);

(statearr_36579_36649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (6))){
var inst_36469 = (state_36537[(29)]);
var inst_36468 = cljs.core.deref.call(null,cs);
var inst_36469__$1 = cljs.core.keys.call(null,inst_36468);
var inst_36470 = cljs.core.count.call(null,inst_36469__$1);
var inst_36471 = cljs.core.reset_BANG_.call(null,dctr,inst_36470);
var inst_36476 = cljs.core.seq.call(null,inst_36469__$1);
var inst_36477 = inst_36476;
var inst_36478 = null;
var inst_36479 = (0);
var inst_36480 = (0);
var state_36537__$1 = (function (){var statearr_36580 = state_36537;
(statearr_36580[(30)] = inst_36471);

(statearr_36580[(20)] = inst_36477);

(statearr_36580[(10)] = inst_36478);

(statearr_36580[(11)] = inst_36480);

(statearr_36580[(29)] = inst_36469__$1);

(statearr_36580[(21)] = inst_36479);

return statearr_36580;
})();
var statearr_36581_36650 = state_36537__$1;
(statearr_36581_36650[(2)] = null);

(statearr_36581_36650[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (28))){
var inst_36477 = (state_36537[(20)]);
var inst_36496 = (state_36537[(25)]);
var inst_36496__$1 = cljs.core.seq.call(null,inst_36477);
var state_36537__$1 = (function (){var statearr_36582 = state_36537;
(statearr_36582[(25)] = inst_36496__$1);

return statearr_36582;
})();
if(inst_36496__$1){
var statearr_36583_36651 = state_36537__$1;
(statearr_36583_36651[(1)] = (33));

} else {
var statearr_36584_36652 = state_36537__$1;
(statearr_36584_36652[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (25))){
var inst_36480 = (state_36537[(11)]);
var inst_36479 = (state_36537[(21)]);
var inst_36482 = (inst_36480 < inst_36479);
var inst_36483 = inst_36482;
var state_36537__$1 = state_36537;
if(cljs.core.truth_(inst_36483)){
var statearr_36585_36653 = state_36537__$1;
(statearr_36585_36653[(1)] = (27));

} else {
var statearr_36586_36654 = state_36537__$1;
(statearr_36586_36654[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (34))){
var state_36537__$1 = state_36537;
var statearr_36587_36655 = state_36537__$1;
(statearr_36587_36655[(2)] = null);

(statearr_36587_36655[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (17))){
var state_36537__$1 = state_36537;
var statearr_36588_36656 = state_36537__$1;
(statearr_36588_36656[(2)] = null);

(statearr_36588_36656[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (3))){
var inst_36535 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36537__$1,inst_36535);
} else {
if((state_val_36538 === (12))){
var inst_36464 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36589_36657 = state_36537__$1;
(statearr_36589_36657[(2)] = inst_36464);

(statearr_36589_36657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (2))){
var state_36537__$1 = state_36537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36537__$1,(4),ch);
} else {
if((state_val_36538 === (23))){
var state_36537__$1 = state_36537;
var statearr_36590_36658 = state_36537__$1;
(statearr_36590_36658[(2)] = null);

(statearr_36590_36658[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (35))){
var inst_36519 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36591_36659 = state_36537__$1;
(statearr_36591_36659[(2)] = inst_36519);

(statearr_36591_36659[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (19))){
var inst_36438 = (state_36537[(7)]);
var inst_36442 = cljs.core.chunk_first.call(null,inst_36438);
var inst_36443 = cljs.core.chunk_rest.call(null,inst_36438);
var inst_36444 = cljs.core.count.call(null,inst_36442);
var inst_36418 = inst_36443;
var inst_36419 = inst_36442;
var inst_36420 = inst_36444;
var inst_36421 = (0);
var state_36537__$1 = (function (){var statearr_36592 = state_36537;
(statearr_36592[(13)] = inst_36418);

(statearr_36592[(14)] = inst_36420);

(statearr_36592[(15)] = inst_36421);

(statearr_36592[(16)] = inst_36419);

return statearr_36592;
})();
var statearr_36593_36660 = state_36537__$1;
(statearr_36593_36660[(2)] = null);

(statearr_36593_36660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (11))){
var inst_36418 = (state_36537[(13)]);
var inst_36438 = (state_36537[(7)]);
var inst_36438__$1 = cljs.core.seq.call(null,inst_36418);
var state_36537__$1 = (function (){var statearr_36594 = state_36537;
(statearr_36594[(7)] = inst_36438__$1);

return statearr_36594;
})();
if(inst_36438__$1){
var statearr_36595_36661 = state_36537__$1;
(statearr_36595_36661[(1)] = (16));

} else {
var statearr_36596_36662 = state_36537__$1;
(statearr_36596_36662[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (9))){
var inst_36466 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36597_36663 = state_36537__$1;
(statearr_36597_36663[(2)] = inst_36466);

(statearr_36597_36663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (5))){
var inst_36416 = cljs.core.deref.call(null,cs);
var inst_36417 = cljs.core.seq.call(null,inst_36416);
var inst_36418 = inst_36417;
var inst_36419 = null;
var inst_36420 = (0);
var inst_36421 = (0);
var state_36537__$1 = (function (){var statearr_36598 = state_36537;
(statearr_36598[(13)] = inst_36418);

(statearr_36598[(14)] = inst_36420);

(statearr_36598[(15)] = inst_36421);

(statearr_36598[(16)] = inst_36419);

return statearr_36598;
})();
var statearr_36599_36664 = state_36537__$1;
(statearr_36599_36664[(2)] = null);

(statearr_36599_36664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (14))){
var state_36537__$1 = state_36537;
var statearr_36600_36665 = state_36537__$1;
(statearr_36600_36665[(2)] = null);

(statearr_36600_36665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (45))){
var inst_36527 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36601_36666 = state_36537__$1;
(statearr_36601_36666[(2)] = inst_36527);

(statearr_36601_36666[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (26))){
var inst_36469 = (state_36537[(29)]);
var inst_36523 = (state_36537[(2)]);
var inst_36524 = cljs.core.seq.call(null,inst_36469);
var state_36537__$1 = (function (){var statearr_36602 = state_36537;
(statearr_36602[(31)] = inst_36523);

return statearr_36602;
})();
if(inst_36524){
var statearr_36603_36667 = state_36537__$1;
(statearr_36603_36667[(1)] = (42));

} else {
var statearr_36604_36668 = state_36537__$1;
(statearr_36604_36668[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (16))){
var inst_36438 = (state_36537[(7)]);
var inst_36440 = cljs.core.chunked_seq_QMARK_.call(null,inst_36438);
var state_36537__$1 = state_36537;
if(inst_36440){
var statearr_36605_36669 = state_36537__$1;
(statearr_36605_36669[(1)] = (19));

} else {
var statearr_36606_36670 = state_36537__$1;
(statearr_36606_36670[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (38))){
var inst_36516 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36607_36671 = state_36537__$1;
(statearr_36607_36671[(2)] = inst_36516);

(statearr_36607_36671[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (30))){
var state_36537__$1 = state_36537;
var statearr_36608_36672 = state_36537__$1;
(statearr_36608_36672[(2)] = null);

(statearr_36608_36672[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (10))){
var inst_36421 = (state_36537[(15)]);
var inst_36419 = (state_36537[(16)]);
var inst_36427 = cljs.core._nth.call(null,inst_36419,inst_36421);
var inst_36428 = cljs.core.nth.call(null,inst_36427,(0),null);
var inst_36429 = cljs.core.nth.call(null,inst_36427,(1),null);
var state_36537__$1 = (function (){var statearr_36609 = state_36537;
(statearr_36609[(26)] = inst_36428);

return statearr_36609;
})();
if(cljs.core.truth_(inst_36429)){
var statearr_36610_36673 = state_36537__$1;
(statearr_36610_36673[(1)] = (13));

} else {
var statearr_36611_36674 = state_36537__$1;
(statearr_36611_36674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (18))){
var inst_36462 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36612_36675 = state_36537__$1;
(statearr_36612_36675[(2)] = inst_36462);

(statearr_36612_36675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (42))){
var state_36537__$1 = state_36537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36537__$1,(45),dchan);
} else {
if((state_val_36538 === (37))){
var inst_36505 = (state_36537[(23)]);
var inst_36496 = (state_36537[(25)]);
var inst_36409 = (state_36537[(12)]);
var inst_36505__$1 = cljs.core.first.call(null,inst_36496);
var inst_36506 = cljs.core.async.put_BANG_.call(null,inst_36505__$1,inst_36409,done);
var state_36537__$1 = (function (){var statearr_36613 = state_36537;
(statearr_36613[(23)] = inst_36505__$1);

return statearr_36613;
})();
if(cljs.core.truth_(inst_36506)){
var statearr_36614_36676 = state_36537__$1;
(statearr_36614_36676[(1)] = (39));

} else {
var statearr_36615_36677 = state_36537__$1;
(statearr_36615_36677[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (8))){
var inst_36420 = (state_36537[(14)]);
var inst_36421 = (state_36537[(15)]);
var inst_36423 = (inst_36421 < inst_36420);
var inst_36424 = inst_36423;
var state_36537__$1 = state_36537;
if(cljs.core.truth_(inst_36424)){
var statearr_36616_36678 = state_36537__$1;
(statearr_36616_36678[(1)] = (10));

} else {
var statearr_36617_36679 = state_36537__$1;
(statearr_36617_36679[(1)] = (11));

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
});})(c__29159__auto___36625,cs,m,dchan,dctr,done))
;
return ((function (switch__29097__auto__,c__29159__auto___36625,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29098__auto__ = null;
var cljs$core$async$mult_$_state_machine__29098__auto____0 = (function (){
var statearr_36621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36621[(0)] = cljs$core$async$mult_$_state_machine__29098__auto__);

(statearr_36621[(1)] = (1));

return statearr_36621;
});
var cljs$core$async$mult_$_state_machine__29098__auto____1 = (function (state_36537){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_36537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e36622){if((e36622 instanceof Object)){
var ex__29101__auto__ = e36622;
var statearr_36623_36680 = state_36537;
(statearr_36623_36680[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36681 = state_36537;
state_36537 = G__36681;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29098__auto__ = function(state_36537){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29098__auto____1.call(this,state_36537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29098__auto____0;
cljs$core$async$mult_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29098__auto____1;
return cljs$core$async$mult_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___36625,cs,m,dchan,dctr,done))
})();
var state__29161__auto__ = (function (){var statearr_36624 = f__29160__auto__.call(null);
(statearr_36624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___36625);

return statearr_36624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___36625,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__36683 = arguments.length;
switch (G__36683) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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

cljs.core.async.Mix = (function (){var obj36686 = {};
return obj36686;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__25282__auto__ = m;
if(and__25282__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__25282__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25930__auto__ = (((m == null))?null:m);
return (function (){var or__25294__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__25282__auto__ = m;
if(and__25282__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__25282__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25930__auto__ = (((m == null))?null:m);
return (function (){var or__25294__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__25282__auto__ = m;
if(and__25282__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__25282__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25930__auto__ = (((m == null))?null:m);
return (function (){var or__25294__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__25282__auto__ = m;
if(and__25282__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__25282__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25930__auto__ = (((m == null))?null:m);
return (function (){var or__25294__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__25282__auto__ = m;
if(and__25282__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__25282__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25930__auto__ = (((m == null))?null:m);
return (function (){var or__25294__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__26334__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26334__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36691){
var map__36692 = p__36691;
var map__36692__$1 = ((cljs.core.seq_QMARK_.call(null,map__36692))?cljs.core.apply.call(null,cljs.core.hash_map,map__36692):map__36692);
var opts = map__36692__$1;
var statearr_36693_36696 = state;
(statearr_36693_36696[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__36692,map__36692__$1,opts){
return (function (val){
var statearr_36694_36697 = state;
(statearr_36694_36697[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36692,map__36692__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_36695_36698 = state;
(statearr_36695_36698[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36687){
var G__36688 = cljs.core.first.call(null,seq36687);
var seq36687__$1 = cljs.core.next.call(null,seq36687);
var G__36689 = cljs.core.first.call(null,seq36687__$1);
var seq36687__$2 = cljs.core.next.call(null,seq36687__$1);
var G__36690 = cljs.core.first.call(null,seq36687__$2);
var seq36687__$3 = cljs.core.next.call(null,seq36687__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36688,G__36689,G__36690,seq36687__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t36818 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36818 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36819){
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
this.meta36819 = meta36819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36820,meta36819__$1){
var self__ = this;
var _36820__$1 = this;
return (new cljs.core.async.t36818(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36819__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36820){
var self__ = this;
var _36820__$1 = this;
return self__.meta36819;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36818.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36818.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t36818.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36818.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36818.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36818.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36818.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36818.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36819","meta36819",161513998,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36818.cljs$lang$type = true;

cljs.core.async.t36818.cljs$lang$ctorStr = "cljs.core.async/t36818";

cljs.core.async.t36818.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25873__auto__,writer__25874__auto__,opt__25875__auto__){
return cljs.core._write.call(null,writer__25874__auto__,"cljs.core.async/t36818");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t36818 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t36818(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36819){
return (new cljs.core.async.t36818(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36819));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t36818(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29159__auto___36937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___36937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___36937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36890){
var state_val_36891 = (state_36890[(1)]);
if((state_val_36891 === (7))){
var inst_36834 = (state_36890[(7)]);
var inst_36839 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36834);
var state_36890__$1 = state_36890;
var statearr_36892_36938 = state_36890__$1;
(statearr_36892_36938[(2)] = inst_36839);

(statearr_36892_36938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (20))){
var inst_36849 = (state_36890[(8)]);
var state_36890__$1 = state_36890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36890__$1,(23),out,inst_36849);
} else {
if((state_val_36891 === (1))){
var inst_36824 = (state_36890[(9)]);
var inst_36824__$1 = calc_state.call(null);
var inst_36825 = cljs.core.seq_QMARK_.call(null,inst_36824__$1);
var state_36890__$1 = (function (){var statearr_36893 = state_36890;
(statearr_36893[(9)] = inst_36824__$1);

return statearr_36893;
})();
if(inst_36825){
var statearr_36894_36939 = state_36890__$1;
(statearr_36894_36939[(1)] = (2));

} else {
var statearr_36895_36940 = state_36890__$1;
(statearr_36895_36940[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (24))){
var inst_36842 = (state_36890[(10)]);
var inst_36834 = inst_36842;
var state_36890__$1 = (function (){var statearr_36896 = state_36890;
(statearr_36896[(7)] = inst_36834);

return statearr_36896;
})();
var statearr_36897_36941 = state_36890__$1;
(statearr_36897_36941[(2)] = null);

(statearr_36897_36941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (4))){
var inst_36824 = (state_36890[(9)]);
var inst_36830 = (state_36890[(2)]);
var inst_36831 = cljs.core.get.call(null,inst_36830,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36832 = cljs.core.get.call(null,inst_36830,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36833 = cljs.core.get.call(null,inst_36830,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36834 = inst_36824;
var state_36890__$1 = (function (){var statearr_36898 = state_36890;
(statearr_36898[(11)] = inst_36832);

(statearr_36898[(12)] = inst_36833);

(statearr_36898[(13)] = inst_36831);

(statearr_36898[(7)] = inst_36834);

return statearr_36898;
})();
var statearr_36899_36942 = state_36890__$1;
(statearr_36899_36942[(2)] = null);

(statearr_36899_36942[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (15))){
var state_36890__$1 = state_36890;
var statearr_36900_36943 = state_36890__$1;
(statearr_36900_36943[(2)] = null);

(statearr_36900_36943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (21))){
var inst_36842 = (state_36890[(10)]);
var inst_36834 = inst_36842;
var state_36890__$1 = (function (){var statearr_36901 = state_36890;
(statearr_36901[(7)] = inst_36834);

return statearr_36901;
})();
var statearr_36902_36944 = state_36890__$1;
(statearr_36902_36944[(2)] = null);

(statearr_36902_36944[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (13))){
var inst_36886 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36903_36945 = state_36890__$1;
(statearr_36903_36945[(2)] = inst_36886);

(statearr_36903_36945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (22))){
var inst_36884 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36904_36946 = state_36890__$1;
(statearr_36904_36946[(2)] = inst_36884);

(statearr_36904_36946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (6))){
var inst_36888 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36890__$1,inst_36888);
} else {
if((state_val_36891 === (25))){
var state_36890__$1 = state_36890;
var statearr_36905_36947 = state_36890__$1;
(statearr_36905_36947[(2)] = null);

(statearr_36905_36947[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (17))){
var inst_36864 = (state_36890[(14)]);
var state_36890__$1 = state_36890;
var statearr_36906_36948 = state_36890__$1;
(statearr_36906_36948[(2)] = inst_36864);

(statearr_36906_36948[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (3))){
var inst_36824 = (state_36890[(9)]);
var state_36890__$1 = state_36890;
var statearr_36907_36949 = state_36890__$1;
(statearr_36907_36949[(2)] = inst_36824);

(statearr_36907_36949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (12))){
var inst_36864 = (state_36890[(14)]);
var inst_36843 = (state_36890[(15)]);
var inst_36850 = (state_36890[(16)]);
var inst_36864__$1 = inst_36843.call(null,inst_36850);
var state_36890__$1 = (function (){var statearr_36908 = state_36890;
(statearr_36908[(14)] = inst_36864__$1);

return statearr_36908;
})();
if(cljs.core.truth_(inst_36864__$1)){
var statearr_36909_36950 = state_36890__$1;
(statearr_36909_36950[(1)] = (17));

} else {
var statearr_36910_36951 = state_36890__$1;
(statearr_36910_36951[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (2))){
var inst_36824 = (state_36890[(9)]);
var inst_36827 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36824);
var state_36890__$1 = state_36890;
var statearr_36911_36952 = state_36890__$1;
(statearr_36911_36952[(2)] = inst_36827);

(statearr_36911_36952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (23))){
var inst_36875 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
if(cljs.core.truth_(inst_36875)){
var statearr_36912_36953 = state_36890__$1;
(statearr_36912_36953[(1)] = (24));

} else {
var statearr_36913_36954 = state_36890__$1;
(statearr_36913_36954[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (19))){
var inst_36872 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
if(cljs.core.truth_(inst_36872)){
var statearr_36914_36955 = state_36890__$1;
(statearr_36914_36955[(1)] = (20));

} else {
var statearr_36915_36956 = state_36890__$1;
(statearr_36915_36956[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (11))){
var inst_36849 = (state_36890[(8)]);
var inst_36855 = (inst_36849 == null);
var state_36890__$1 = state_36890;
if(cljs.core.truth_(inst_36855)){
var statearr_36916_36957 = state_36890__$1;
(statearr_36916_36957[(1)] = (14));

} else {
var statearr_36917_36958 = state_36890__$1;
(statearr_36917_36958[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (9))){
var inst_36842 = (state_36890[(10)]);
var inst_36842__$1 = (state_36890[(2)]);
var inst_36843 = cljs.core.get.call(null,inst_36842__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36844 = cljs.core.get.call(null,inst_36842__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36845 = cljs.core.get.call(null,inst_36842__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36890__$1 = (function (){var statearr_36918 = state_36890;
(statearr_36918[(10)] = inst_36842__$1);

(statearr_36918[(15)] = inst_36843);

(statearr_36918[(17)] = inst_36844);

return statearr_36918;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36890__$1,(10),inst_36845);
} else {
if((state_val_36891 === (5))){
var inst_36834 = (state_36890[(7)]);
var inst_36837 = cljs.core.seq_QMARK_.call(null,inst_36834);
var state_36890__$1 = state_36890;
if(inst_36837){
var statearr_36919_36959 = state_36890__$1;
(statearr_36919_36959[(1)] = (7));

} else {
var statearr_36920_36960 = state_36890__$1;
(statearr_36920_36960[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (14))){
var inst_36850 = (state_36890[(16)]);
var inst_36857 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36850);
var state_36890__$1 = state_36890;
var statearr_36921_36961 = state_36890__$1;
(statearr_36921_36961[(2)] = inst_36857);

(statearr_36921_36961[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (26))){
var inst_36880 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36922_36962 = state_36890__$1;
(statearr_36922_36962[(2)] = inst_36880);

(statearr_36922_36962[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (16))){
var inst_36860 = (state_36890[(2)]);
var inst_36861 = calc_state.call(null);
var inst_36834 = inst_36861;
var state_36890__$1 = (function (){var statearr_36923 = state_36890;
(statearr_36923[(7)] = inst_36834);

(statearr_36923[(18)] = inst_36860);

return statearr_36923;
})();
var statearr_36924_36963 = state_36890__$1;
(statearr_36924_36963[(2)] = null);

(statearr_36924_36963[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (10))){
var inst_36849 = (state_36890[(8)]);
var inst_36850 = (state_36890[(16)]);
var inst_36848 = (state_36890[(2)]);
var inst_36849__$1 = cljs.core.nth.call(null,inst_36848,(0),null);
var inst_36850__$1 = cljs.core.nth.call(null,inst_36848,(1),null);
var inst_36851 = (inst_36849__$1 == null);
var inst_36852 = cljs.core._EQ_.call(null,inst_36850__$1,change);
var inst_36853 = (inst_36851) || (inst_36852);
var state_36890__$1 = (function (){var statearr_36925 = state_36890;
(statearr_36925[(8)] = inst_36849__$1);

(statearr_36925[(16)] = inst_36850__$1);

return statearr_36925;
})();
if(cljs.core.truth_(inst_36853)){
var statearr_36926_36964 = state_36890__$1;
(statearr_36926_36964[(1)] = (11));

} else {
var statearr_36927_36965 = state_36890__$1;
(statearr_36927_36965[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (18))){
var inst_36843 = (state_36890[(15)]);
var inst_36850 = (state_36890[(16)]);
var inst_36844 = (state_36890[(17)]);
var inst_36867 = cljs.core.empty_QMARK_.call(null,inst_36843);
var inst_36868 = inst_36844.call(null,inst_36850);
var inst_36869 = cljs.core.not.call(null,inst_36868);
var inst_36870 = (inst_36867) && (inst_36869);
var state_36890__$1 = state_36890;
var statearr_36928_36966 = state_36890__$1;
(statearr_36928_36966[(2)] = inst_36870);

(statearr_36928_36966[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (8))){
var inst_36834 = (state_36890[(7)]);
var state_36890__$1 = state_36890;
var statearr_36929_36967 = state_36890__$1;
(statearr_36929_36967[(2)] = inst_36834);

(statearr_36929_36967[(1)] = (9));


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
});})(c__29159__auto___36937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29097__auto__,c__29159__auto___36937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29098__auto__ = null;
var cljs$core$async$mix_$_state_machine__29098__auto____0 = (function (){
var statearr_36933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36933[(0)] = cljs$core$async$mix_$_state_machine__29098__auto__);

(statearr_36933[(1)] = (1));

return statearr_36933;
});
var cljs$core$async$mix_$_state_machine__29098__auto____1 = (function (state_36890){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_36890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e36934){if((e36934 instanceof Object)){
var ex__29101__auto__ = e36934;
var statearr_36935_36968 = state_36890;
(statearr_36935_36968[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36969 = state_36890;
state_36890 = G__36969;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29098__auto__ = function(state_36890){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29098__auto____1.call(this,state_36890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29098__auto____0;
cljs$core$async$mix_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29098__auto____1;
return cljs$core$async$mix_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___36937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29161__auto__ = (function (){var statearr_36936 = f__29160__auto__.call(null);
(statearr_36936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___36937);

return statearr_36936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___36937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = (function (){var obj36971 = {};
return obj36971;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__25282__auto__ = p;
if(and__25282__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__25282__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25930__auto__ = (((p == null))?null:p);
return (function (){var or__25294__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__25282__auto__ = p;
if(and__25282__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__25282__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25930__auto__ = (((p == null))?null:p);
return (function (){var or__25294__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__36973 = arguments.length;
switch (G__36973) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__25282__auto__ = p;
if(and__25282__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__25282__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25930__auto__ = (((p == null))?null:p);
return (function (){var or__25294__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__25282__auto__ = p;
if(and__25282__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__25282__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25930__auto__ = (((p == null))?null:p);
return (function (){var or__25294__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25930__auto__)]);
if(or__25294__auto__){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__25294__auto____$1){
return or__25294__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__36977 = arguments.length;
switch (G__36977) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25294__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25294__auto__,mults){
return (function (p1__36975_SHARP_){
if(cljs.core.truth_(p1__36975_SHARP_.call(null,topic))){
return p1__36975_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36975_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25294__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t36978 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36978 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36979){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36979 = meta36979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36980,meta36979__$1){
var self__ = this;
var _36980__$1 = this;
return (new cljs.core.async.t36978(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36979__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t36978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36980){
var self__ = this;
var _36980__$1 = this;
return self__.meta36979;
});})(mults,ensure_mult))
;

cljs.core.async.t36978.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t36978.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t36978.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t36978.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t36978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t36978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t36978.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36979","meta36979",-1975010508,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t36978.cljs$lang$type = true;

cljs.core.async.t36978.cljs$lang$ctorStr = "cljs.core.async/t36978";

cljs.core.async.t36978.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25873__auto__,writer__25874__auto__,opt__25875__auto__){
return cljs.core._write.call(null,writer__25874__auto__,"cljs.core.async/t36978");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t36978 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t36978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36979){
return (new cljs.core.async.t36978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36979));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t36978(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29159__auto___37101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___37101,mults,ensure_mult,p){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___37101,mults,ensure_mult,p){
return (function (state_37052){
var state_val_37053 = (state_37052[(1)]);
if((state_val_37053 === (7))){
var inst_37048 = (state_37052[(2)]);
var state_37052__$1 = state_37052;
var statearr_37054_37102 = state_37052__$1;
(statearr_37054_37102[(2)] = inst_37048);

(statearr_37054_37102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (20))){
var state_37052__$1 = state_37052;
var statearr_37055_37103 = state_37052__$1;
(statearr_37055_37103[(2)] = null);

(statearr_37055_37103[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (1))){
var state_37052__$1 = state_37052;
var statearr_37056_37104 = state_37052__$1;
(statearr_37056_37104[(2)] = null);

(statearr_37056_37104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (24))){
var inst_37031 = (state_37052[(7)]);
var inst_37040 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37031);
var state_37052__$1 = state_37052;
var statearr_37057_37105 = state_37052__$1;
(statearr_37057_37105[(2)] = inst_37040);

(statearr_37057_37105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (4))){
var inst_36983 = (state_37052[(8)]);
var inst_36983__$1 = (state_37052[(2)]);
var inst_36984 = (inst_36983__$1 == null);
var state_37052__$1 = (function (){var statearr_37058 = state_37052;
(statearr_37058[(8)] = inst_36983__$1);

return statearr_37058;
})();
if(cljs.core.truth_(inst_36984)){
var statearr_37059_37106 = state_37052__$1;
(statearr_37059_37106[(1)] = (5));

} else {
var statearr_37060_37107 = state_37052__$1;
(statearr_37060_37107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (15))){
var inst_37025 = (state_37052[(2)]);
var state_37052__$1 = state_37052;
var statearr_37061_37108 = state_37052__$1;
(statearr_37061_37108[(2)] = inst_37025);

(statearr_37061_37108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (21))){
var inst_37045 = (state_37052[(2)]);
var state_37052__$1 = (function (){var statearr_37062 = state_37052;
(statearr_37062[(9)] = inst_37045);

return statearr_37062;
})();
var statearr_37063_37109 = state_37052__$1;
(statearr_37063_37109[(2)] = null);

(statearr_37063_37109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (13))){
var inst_37007 = (state_37052[(10)]);
var inst_37009 = cljs.core.chunked_seq_QMARK_.call(null,inst_37007);
var state_37052__$1 = state_37052;
if(inst_37009){
var statearr_37064_37110 = state_37052__$1;
(statearr_37064_37110[(1)] = (16));

} else {
var statearr_37065_37111 = state_37052__$1;
(statearr_37065_37111[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (22))){
var inst_37037 = (state_37052[(2)]);
var state_37052__$1 = state_37052;
if(cljs.core.truth_(inst_37037)){
var statearr_37066_37112 = state_37052__$1;
(statearr_37066_37112[(1)] = (23));

} else {
var statearr_37067_37113 = state_37052__$1;
(statearr_37067_37113[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (6))){
var inst_37031 = (state_37052[(7)]);
var inst_36983 = (state_37052[(8)]);
var inst_37033 = (state_37052[(11)]);
var inst_37031__$1 = topic_fn.call(null,inst_36983);
var inst_37032 = cljs.core.deref.call(null,mults);
var inst_37033__$1 = cljs.core.get.call(null,inst_37032,inst_37031__$1);
var state_37052__$1 = (function (){var statearr_37068 = state_37052;
(statearr_37068[(7)] = inst_37031__$1);

(statearr_37068[(11)] = inst_37033__$1);

return statearr_37068;
})();
if(cljs.core.truth_(inst_37033__$1)){
var statearr_37069_37114 = state_37052__$1;
(statearr_37069_37114[(1)] = (19));

} else {
var statearr_37070_37115 = state_37052__$1;
(statearr_37070_37115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (25))){
var inst_37042 = (state_37052[(2)]);
var state_37052__$1 = state_37052;
var statearr_37071_37116 = state_37052__$1;
(statearr_37071_37116[(2)] = inst_37042);

(statearr_37071_37116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (17))){
var inst_37007 = (state_37052[(10)]);
var inst_37016 = cljs.core.first.call(null,inst_37007);
var inst_37017 = cljs.core.async.muxch_STAR_.call(null,inst_37016);
var inst_37018 = cljs.core.async.close_BANG_.call(null,inst_37017);
var inst_37019 = cljs.core.next.call(null,inst_37007);
var inst_36993 = inst_37019;
var inst_36994 = null;
var inst_36995 = (0);
var inst_36996 = (0);
var state_37052__$1 = (function (){var statearr_37072 = state_37052;
(statearr_37072[(12)] = inst_36995);

(statearr_37072[(13)] = inst_36993);

(statearr_37072[(14)] = inst_36996);

(statearr_37072[(15)] = inst_36994);

(statearr_37072[(16)] = inst_37018);

return statearr_37072;
})();
var statearr_37073_37117 = state_37052__$1;
(statearr_37073_37117[(2)] = null);

(statearr_37073_37117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (3))){
var inst_37050 = (state_37052[(2)]);
var state_37052__$1 = state_37052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37052__$1,inst_37050);
} else {
if((state_val_37053 === (12))){
var inst_37027 = (state_37052[(2)]);
var state_37052__$1 = state_37052;
var statearr_37074_37118 = state_37052__$1;
(statearr_37074_37118[(2)] = inst_37027);

(statearr_37074_37118[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (2))){
var state_37052__$1 = state_37052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37052__$1,(4),ch);
} else {
if((state_val_37053 === (23))){
var state_37052__$1 = state_37052;
var statearr_37075_37119 = state_37052__$1;
(statearr_37075_37119[(2)] = null);

(statearr_37075_37119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (19))){
var inst_36983 = (state_37052[(8)]);
var inst_37033 = (state_37052[(11)]);
var inst_37035 = cljs.core.async.muxch_STAR_.call(null,inst_37033);
var state_37052__$1 = state_37052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37052__$1,(22),inst_37035,inst_36983);
} else {
if((state_val_37053 === (11))){
var inst_36993 = (state_37052[(13)]);
var inst_37007 = (state_37052[(10)]);
var inst_37007__$1 = cljs.core.seq.call(null,inst_36993);
var state_37052__$1 = (function (){var statearr_37076 = state_37052;
(statearr_37076[(10)] = inst_37007__$1);

return statearr_37076;
})();
if(inst_37007__$1){
var statearr_37077_37120 = state_37052__$1;
(statearr_37077_37120[(1)] = (13));

} else {
var statearr_37078_37121 = state_37052__$1;
(statearr_37078_37121[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (9))){
var inst_37029 = (state_37052[(2)]);
var state_37052__$1 = state_37052;
var statearr_37079_37122 = state_37052__$1;
(statearr_37079_37122[(2)] = inst_37029);

(statearr_37079_37122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (5))){
var inst_36990 = cljs.core.deref.call(null,mults);
var inst_36991 = cljs.core.vals.call(null,inst_36990);
var inst_36992 = cljs.core.seq.call(null,inst_36991);
var inst_36993 = inst_36992;
var inst_36994 = null;
var inst_36995 = (0);
var inst_36996 = (0);
var state_37052__$1 = (function (){var statearr_37080 = state_37052;
(statearr_37080[(12)] = inst_36995);

(statearr_37080[(13)] = inst_36993);

(statearr_37080[(14)] = inst_36996);

(statearr_37080[(15)] = inst_36994);

return statearr_37080;
})();
var statearr_37081_37123 = state_37052__$1;
(statearr_37081_37123[(2)] = null);

(statearr_37081_37123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (14))){
var state_37052__$1 = state_37052;
var statearr_37085_37124 = state_37052__$1;
(statearr_37085_37124[(2)] = null);

(statearr_37085_37124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (16))){
var inst_37007 = (state_37052[(10)]);
var inst_37011 = cljs.core.chunk_first.call(null,inst_37007);
var inst_37012 = cljs.core.chunk_rest.call(null,inst_37007);
var inst_37013 = cljs.core.count.call(null,inst_37011);
var inst_36993 = inst_37012;
var inst_36994 = inst_37011;
var inst_36995 = inst_37013;
var inst_36996 = (0);
var state_37052__$1 = (function (){var statearr_37086 = state_37052;
(statearr_37086[(12)] = inst_36995);

(statearr_37086[(13)] = inst_36993);

(statearr_37086[(14)] = inst_36996);

(statearr_37086[(15)] = inst_36994);

return statearr_37086;
})();
var statearr_37087_37125 = state_37052__$1;
(statearr_37087_37125[(2)] = null);

(statearr_37087_37125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (10))){
var inst_36995 = (state_37052[(12)]);
var inst_36993 = (state_37052[(13)]);
var inst_36996 = (state_37052[(14)]);
var inst_36994 = (state_37052[(15)]);
var inst_37001 = cljs.core._nth.call(null,inst_36994,inst_36996);
var inst_37002 = cljs.core.async.muxch_STAR_.call(null,inst_37001);
var inst_37003 = cljs.core.async.close_BANG_.call(null,inst_37002);
var inst_37004 = (inst_36996 + (1));
var tmp37082 = inst_36995;
var tmp37083 = inst_36993;
var tmp37084 = inst_36994;
var inst_36993__$1 = tmp37083;
var inst_36994__$1 = tmp37084;
var inst_36995__$1 = tmp37082;
var inst_36996__$1 = inst_37004;
var state_37052__$1 = (function (){var statearr_37088 = state_37052;
(statearr_37088[(12)] = inst_36995__$1);

(statearr_37088[(13)] = inst_36993__$1);

(statearr_37088[(14)] = inst_36996__$1);

(statearr_37088[(15)] = inst_36994__$1);

(statearr_37088[(17)] = inst_37003);

return statearr_37088;
})();
var statearr_37089_37126 = state_37052__$1;
(statearr_37089_37126[(2)] = null);

(statearr_37089_37126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (18))){
var inst_37022 = (state_37052[(2)]);
var state_37052__$1 = state_37052;
var statearr_37090_37127 = state_37052__$1;
(statearr_37090_37127[(2)] = inst_37022);

(statearr_37090_37127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37053 === (8))){
var inst_36995 = (state_37052[(12)]);
var inst_36996 = (state_37052[(14)]);
var inst_36998 = (inst_36996 < inst_36995);
var inst_36999 = inst_36998;
var state_37052__$1 = state_37052;
if(cljs.core.truth_(inst_36999)){
var statearr_37091_37128 = state_37052__$1;
(statearr_37091_37128[(1)] = (10));

} else {
var statearr_37092_37129 = state_37052__$1;
(statearr_37092_37129[(1)] = (11));

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
});})(c__29159__auto___37101,mults,ensure_mult,p))
;
return ((function (switch__29097__auto__,c__29159__auto___37101,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29098__auto__ = null;
var cljs$core$async$state_machine__29098__auto____0 = (function (){
var statearr_37096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37096[(0)] = cljs$core$async$state_machine__29098__auto__);

(statearr_37096[(1)] = (1));

return statearr_37096;
});
var cljs$core$async$state_machine__29098__auto____1 = (function (state_37052){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_37052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e37097){if((e37097 instanceof Object)){
var ex__29101__auto__ = e37097;
var statearr_37098_37130 = state_37052;
(statearr_37098_37130[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37131 = state_37052;
state_37052 = G__37131;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$state_machine__29098__auto__ = function(state_37052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29098__auto____1.call(this,state_37052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29098__auto____0;
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29098__auto____1;
return cljs$core$async$state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___37101,mults,ensure_mult,p))
})();
var state__29161__auto__ = (function (){var statearr_37099 = f__29160__auto__.call(null);
(statearr_37099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___37101);

return statearr_37099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___37101,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__37133 = arguments.length;
switch (G__37133) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__37136 = arguments.length;
switch (G__37136) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__37139 = arguments.length;
switch (G__37139) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__29159__auto___37209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___37209,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___37209,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37178){
var state_val_37179 = (state_37178[(1)]);
if((state_val_37179 === (7))){
var state_37178__$1 = state_37178;
var statearr_37180_37210 = state_37178__$1;
(statearr_37180_37210[(2)] = null);

(statearr_37180_37210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (1))){
var state_37178__$1 = state_37178;
var statearr_37181_37211 = state_37178__$1;
(statearr_37181_37211[(2)] = null);

(statearr_37181_37211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (4))){
var inst_37142 = (state_37178[(7)]);
var inst_37144 = (inst_37142 < cnt);
var state_37178__$1 = state_37178;
if(cljs.core.truth_(inst_37144)){
var statearr_37182_37212 = state_37178__$1;
(statearr_37182_37212[(1)] = (6));

} else {
var statearr_37183_37213 = state_37178__$1;
(statearr_37183_37213[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (15))){
var inst_37174 = (state_37178[(2)]);
var state_37178__$1 = state_37178;
var statearr_37184_37214 = state_37178__$1;
(statearr_37184_37214[(2)] = inst_37174);

(statearr_37184_37214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (13))){
var inst_37167 = cljs.core.async.close_BANG_.call(null,out);
var state_37178__$1 = state_37178;
var statearr_37185_37215 = state_37178__$1;
(statearr_37185_37215[(2)] = inst_37167);

(statearr_37185_37215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (6))){
var state_37178__$1 = state_37178;
var statearr_37186_37216 = state_37178__$1;
(statearr_37186_37216[(2)] = null);

(statearr_37186_37216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (3))){
var inst_37176 = (state_37178[(2)]);
var state_37178__$1 = state_37178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37178__$1,inst_37176);
} else {
if((state_val_37179 === (12))){
var inst_37164 = (state_37178[(8)]);
var inst_37164__$1 = (state_37178[(2)]);
var inst_37165 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37164__$1);
var state_37178__$1 = (function (){var statearr_37187 = state_37178;
(statearr_37187[(8)] = inst_37164__$1);

return statearr_37187;
})();
if(cljs.core.truth_(inst_37165)){
var statearr_37188_37217 = state_37178__$1;
(statearr_37188_37217[(1)] = (13));

} else {
var statearr_37189_37218 = state_37178__$1;
(statearr_37189_37218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (2))){
var inst_37141 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37142 = (0);
var state_37178__$1 = (function (){var statearr_37190 = state_37178;
(statearr_37190[(7)] = inst_37142);

(statearr_37190[(9)] = inst_37141);

return statearr_37190;
})();
var statearr_37191_37219 = state_37178__$1;
(statearr_37191_37219[(2)] = null);

(statearr_37191_37219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (11))){
var inst_37142 = (state_37178[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37178,(10),Object,null,(9));
var inst_37151 = chs__$1.call(null,inst_37142);
var inst_37152 = done.call(null,inst_37142);
var inst_37153 = cljs.core.async.take_BANG_.call(null,inst_37151,inst_37152);
var state_37178__$1 = state_37178;
var statearr_37192_37220 = state_37178__$1;
(statearr_37192_37220[(2)] = inst_37153);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (9))){
var inst_37142 = (state_37178[(7)]);
var inst_37155 = (state_37178[(2)]);
var inst_37156 = (inst_37142 + (1));
var inst_37142__$1 = inst_37156;
var state_37178__$1 = (function (){var statearr_37193 = state_37178;
(statearr_37193[(7)] = inst_37142__$1);

(statearr_37193[(10)] = inst_37155);

return statearr_37193;
})();
var statearr_37194_37221 = state_37178__$1;
(statearr_37194_37221[(2)] = null);

(statearr_37194_37221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (5))){
var inst_37162 = (state_37178[(2)]);
var state_37178__$1 = (function (){var statearr_37195 = state_37178;
(statearr_37195[(11)] = inst_37162);

return statearr_37195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37178__$1,(12),dchan);
} else {
if((state_val_37179 === (14))){
var inst_37164 = (state_37178[(8)]);
var inst_37169 = cljs.core.apply.call(null,f,inst_37164);
var state_37178__$1 = state_37178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37178__$1,(16),out,inst_37169);
} else {
if((state_val_37179 === (16))){
var inst_37171 = (state_37178[(2)]);
var state_37178__$1 = (function (){var statearr_37196 = state_37178;
(statearr_37196[(12)] = inst_37171);

return statearr_37196;
})();
var statearr_37197_37222 = state_37178__$1;
(statearr_37197_37222[(2)] = null);

(statearr_37197_37222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (10))){
var inst_37146 = (state_37178[(2)]);
var inst_37147 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37178__$1 = (function (){var statearr_37198 = state_37178;
(statearr_37198[(13)] = inst_37146);

return statearr_37198;
})();
var statearr_37199_37223 = state_37178__$1;
(statearr_37199_37223[(2)] = inst_37147);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37179 === (8))){
var inst_37160 = (state_37178[(2)]);
var state_37178__$1 = state_37178;
var statearr_37200_37224 = state_37178__$1;
(statearr_37200_37224[(2)] = inst_37160);

(statearr_37200_37224[(1)] = (5));


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
});})(c__29159__auto___37209,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29097__auto__,c__29159__auto___37209,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29098__auto__ = null;
var cljs$core$async$state_machine__29098__auto____0 = (function (){
var statearr_37204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37204[(0)] = cljs$core$async$state_machine__29098__auto__);

(statearr_37204[(1)] = (1));

return statearr_37204;
});
var cljs$core$async$state_machine__29098__auto____1 = (function (state_37178){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_37178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e37205){if((e37205 instanceof Object)){
var ex__29101__auto__ = e37205;
var statearr_37206_37225 = state_37178;
(statearr_37206_37225[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37226 = state_37178;
state_37178 = G__37226;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$state_machine__29098__auto__ = function(state_37178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29098__auto____1.call(this,state_37178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29098__auto____0;
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29098__auto____1;
return cljs$core$async$state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___37209,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29161__auto__ = (function (){var statearr_37207 = f__29160__auto__.call(null);
(statearr_37207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___37209);

return statearr_37207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___37209,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__37229 = arguments.length;
switch (G__37229) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29159__auto___37284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___37284,out){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___37284,out){
return (function (state_37259){
var state_val_37260 = (state_37259[(1)]);
if((state_val_37260 === (7))){
var inst_37239 = (state_37259[(7)]);
var inst_37238 = (state_37259[(8)]);
var inst_37238__$1 = (state_37259[(2)]);
var inst_37239__$1 = cljs.core.nth.call(null,inst_37238__$1,(0),null);
var inst_37240 = cljs.core.nth.call(null,inst_37238__$1,(1),null);
var inst_37241 = (inst_37239__$1 == null);
var state_37259__$1 = (function (){var statearr_37261 = state_37259;
(statearr_37261[(7)] = inst_37239__$1);

(statearr_37261[(8)] = inst_37238__$1);

(statearr_37261[(9)] = inst_37240);

return statearr_37261;
})();
if(cljs.core.truth_(inst_37241)){
var statearr_37262_37285 = state_37259__$1;
(statearr_37262_37285[(1)] = (8));

} else {
var statearr_37263_37286 = state_37259__$1;
(statearr_37263_37286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37260 === (1))){
var inst_37230 = cljs.core.vec.call(null,chs);
var inst_37231 = inst_37230;
var state_37259__$1 = (function (){var statearr_37264 = state_37259;
(statearr_37264[(10)] = inst_37231);

return statearr_37264;
})();
var statearr_37265_37287 = state_37259__$1;
(statearr_37265_37287[(2)] = null);

(statearr_37265_37287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37260 === (4))){
var inst_37231 = (state_37259[(10)]);
var state_37259__$1 = state_37259;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37259__$1,(7),inst_37231);
} else {
if((state_val_37260 === (6))){
var inst_37255 = (state_37259[(2)]);
var state_37259__$1 = state_37259;
var statearr_37266_37288 = state_37259__$1;
(statearr_37266_37288[(2)] = inst_37255);

(statearr_37266_37288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37260 === (3))){
var inst_37257 = (state_37259[(2)]);
var state_37259__$1 = state_37259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37259__$1,inst_37257);
} else {
if((state_val_37260 === (2))){
var inst_37231 = (state_37259[(10)]);
var inst_37233 = cljs.core.count.call(null,inst_37231);
var inst_37234 = (inst_37233 > (0));
var state_37259__$1 = state_37259;
if(cljs.core.truth_(inst_37234)){
var statearr_37268_37289 = state_37259__$1;
(statearr_37268_37289[(1)] = (4));

} else {
var statearr_37269_37290 = state_37259__$1;
(statearr_37269_37290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37260 === (11))){
var inst_37231 = (state_37259[(10)]);
var inst_37248 = (state_37259[(2)]);
var tmp37267 = inst_37231;
var inst_37231__$1 = tmp37267;
var state_37259__$1 = (function (){var statearr_37270 = state_37259;
(statearr_37270[(10)] = inst_37231__$1);

(statearr_37270[(11)] = inst_37248);

return statearr_37270;
})();
var statearr_37271_37291 = state_37259__$1;
(statearr_37271_37291[(2)] = null);

(statearr_37271_37291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37260 === (9))){
var inst_37239 = (state_37259[(7)]);
var state_37259__$1 = state_37259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37259__$1,(11),out,inst_37239);
} else {
if((state_val_37260 === (5))){
var inst_37253 = cljs.core.async.close_BANG_.call(null,out);
var state_37259__$1 = state_37259;
var statearr_37272_37292 = state_37259__$1;
(statearr_37272_37292[(2)] = inst_37253);

(statearr_37272_37292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37260 === (10))){
var inst_37251 = (state_37259[(2)]);
var state_37259__$1 = state_37259;
var statearr_37273_37293 = state_37259__$1;
(statearr_37273_37293[(2)] = inst_37251);

(statearr_37273_37293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37260 === (8))){
var inst_37239 = (state_37259[(7)]);
var inst_37238 = (state_37259[(8)]);
var inst_37240 = (state_37259[(9)]);
var inst_37231 = (state_37259[(10)]);
var inst_37243 = (function (){var cs = inst_37231;
var vec__37236 = inst_37238;
var v = inst_37239;
var c = inst_37240;
return ((function (cs,vec__37236,v,c,inst_37239,inst_37238,inst_37240,inst_37231,state_val_37260,c__29159__auto___37284,out){
return (function (p1__37227_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37227_SHARP_);
});
;})(cs,vec__37236,v,c,inst_37239,inst_37238,inst_37240,inst_37231,state_val_37260,c__29159__auto___37284,out))
})();
var inst_37244 = cljs.core.filterv.call(null,inst_37243,inst_37231);
var inst_37231__$1 = inst_37244;
var state_37259__$1 = (function (){var statearr_37274 = state_37259;
(statearr_37274[(10)] = inst_37231__$1);

return statearr_37274;
})();
var statearr_37275_37294 = state_37259__$1;
(statearr_37275_37294[(2)] = null);

(statearr_37275_37294[(1)] = (2));


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
});})(c__29159__auto___37284,out))
;
return ((function (switch__29097__auto__,c__29159__auto___37284,out){
return (function() {
var cljs$core$async$state_machine__29098__auto__ = null;
var cljs$core$async$state_machine__29098__auto____0 = (function (){
var statearr_37279 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37279[(0)] = cljs$core$async$state_machine__29098__auto__);

(statearr_37279[(1)] = (1));

return statearr_37279;
});
var cljs$core$async$state_machine__29098__auto____1 = (function (state_37259){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_37259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e37280){if((e37280 instanceof Object)){
var ex__29101__auto__ = e37280;
var statearr_37281_37295 = state_37259;
(statearr_37281_37295[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37296 = state_37259;
state_37259 = G__37296;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$state_machine__29098__auto__ = function(state_37259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29098__auto____1.call(this,state_37259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29098__auto____0;
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29098__auto____1;
return cljs$core$async$state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___37284,out))
})();
var state__29161__auto__ = (function (){var statearr_37282 = f__29160__auto__.call(null);
(statearr_37282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___37284);

return statearr_37282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___37284,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__37298 = arguments.length;
switch (G__37298) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29159__auto___37346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___37346,out){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___37346,out){
return (function (state_37322){
var state_val_37323 = (state_37322[(1)]);
if((state_val_37323 === (7))){
var inst_37304 = (state_37322[(7)]);
var inst_37304__$1 = (state_37322[(2)]);
var inst_37305 = (inst_37304__$1 == null);
var inst_37306 = cljs.core.not.call(null,inst_37305);
var state_37322__$1 = (function (){var statearr_37324 = state_37322;
(statearr_37324[(7)] = inst_37304__$1);

return statearr_37324;
})();
if(inst_37306){
var statearr_37325_37347 = state_37322__$1;
(statearr_37325_37347[(1)] = (8));

} else {
var statearr_37326_37348 = state_37322__$1;
(statearr_37326_37348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (1))){
var inst_37299 = (0);
var state_37322__$1 = (function (){var statearr_37327 = state_37322;
(statearr_37327[(8)] = inst_37299);

return statearr_37327;
})();
var statearr_37328_37349 = state_37322__$1;
(statearr_37328_37349[(2)] = null);

(statearr_37328_37349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (4))){
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37322__$1,(7),ch);
} else {
if((state_val_37323 === (6))){
var inst_37317 = (state_37322[(2)]);
var state_37322__$1 = state_37322;
var statearr_37329_37350 = state_37322__$1;
(statearr_37329_37350[(2)] = inst_37317);

(statearr_37329_37350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (3))){
var inst_37319 = (state_37322[(2)]);
var inst_37320 = cljs.core.async.close_BANG_.call(null,out);
var state_37322__$1 = (function (){var statearr_37330 = state_37322;
(statearr_37330[(9)] = inst_37319);

return statearr_37330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37322__$1,inst_37320);
} else {
if((state_val_37323 === (2))){
var inst_37299 = (state_37322[(8)]);
var inst_37301 = (inst_37299 < n);
var state_37322__$1 = state_37322;
if(cljs.core.truth_(inst_37301)){
var statearr_37331_37351 = state_37322__$1;
(statearr_37331_37351[(1)] = (4));

} else {
var statearr_37332_37352 = state_37322__$1;
(statearr_37332_37352[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (11))){
var inst_37299 = (state_37322[(8)]);
var inst_37309 = (state_37322[(2)]);
var inst_37310 = (inst_37299 + (1));
var inst_37299__$1 = inst_37310;
var state_37322__$1 = (function (){var statearr_37333 = state_37322;
(statearr_37333[(10)] = inst_37309);

(statearr_37333[(8)] = inst_37299__$1);

return statearr_37333;
})();
var statearr_37334_37353 = state_37322__$1;
(statearr_37334_37353[(2)] = null);

(statearr_37334_37353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (9))){
var state_37322__$1 = state_37322;
var statearr_37335_37354 = state_37322__$1;
(statearr_37335_37354[(2)] = null);

(statearr_37335_37354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (5))){
var state_37322__$1 = state_37322;
var statearr_37336_37355 = state_37322__$1;
(statearr_37336_37355[(2)] = null);

(statearr_37336_37355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (10))){
var inst_37314 = (state_37322[(2)]);
var state_37322__$1 = state_37322;
var statearr_37337_37356 = state_37322__$1;
(statearr_37337_37356[(2)] = inst_37314);

(statearr_37337_37356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (8))){
var inst_37304 = (state_37322[(7)]);
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37322__$1,(11),out,inst_37304);
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
});})(c__29159__auto___37346,out))
;
return ((function (switch__29097__auto__,c__29159__auto___37346,out){
return (function() {
var cljs$core$async$state_machine__29098__auto__ = null;
var cljs$core$async$state_machine__29098__auto____0 = (function (){
var statearr_37341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37341[(0)] = cljs$core$async$state_machine__29098__auto__);

(statearr_37341[(1)] = (1));

return statearr_37341;
});
var cljs$core$async$state_machine__29098__auto____1 = (function (state_37322){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_37322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e37342){if((e37342 instanceof Object)){
var ex__29101__auto__ = e37342;
var statearr_37343_37357 = state_37322;
(statearr_37343_37357[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37358 = state_37322;
state_37322 = G__37358;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$state_machine__29098__auto__ = function(state_37322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29098__auto____1.call(this,state_37322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29098__auto____0;
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29098__auto____1;
return cljs$core$async$state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___37346,out))
})();
var state__29161__auto__ = (function (){var statearr_37344 = f__29160__auto__.call(null);
(statearr_37344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___37346);

return statearr_37344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___37346,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t37366 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37366 = (function (map_LT_,f,ch,meta37367){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37367 = meta37367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37368,meta37367__$1){
var self__ = this;
var _37368__$1 = this;
return (new cljs.core.async.t37366(self__.map_LT_,self__.f,self__.ch,meta37367__$1));
});

cljs.core.async.t37366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37368){
var self__ = this;
var _37368__$1 = this;
return self__.meta37367;
});

cljs.core.async.t37366.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37366.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t37366.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t37369 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37369 = (function (map_LT_,f,ch,meta37367,_,fn1,meta37370){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37367 = meta37367;
this._ = _;
this.fn1 = fn1;
this.meta37370 = meta37370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37371,meta37370__$1){
var self__ = this;
var _37371__$1 = this;
return (new cljs.core.async.t37369(self__.map_LT_,self__.f,self__.ch,self__.meta37367,self__._,self__.fn1,meta37370__$1));
});})(___$1))
;

cljs.core.async.t37369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37371){
var self__ = this;
var _37371__$1 = this;
return self__.meta37370;
});})(___$1))
;

cljs.core.async.t37369.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t37369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37359_SHARP_){
return f1.call(null,(((p1__37359_SHARP_ == null))?null:self__.f.call(null,p1__37359_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t37369.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37367","meta37367",-1508436504,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37370","meta37370",-796712936,null)], null);
});})(___$1))
;

cljs.core.async.t37369.cljs$lang$type = true;

cljs.core.async.t37369.cljs$lang$ctorStr = "cljs.core.async/t37369";

cljs.core.async.t37369.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25873__auto__,writer__25874__auto__,opt__25875__auto__){
return cljs.core._write.call(null,writer__25874__auto__,"cljs.core.async/t37369");
});})(___$1))
;

cljs.core.async.__GT_t37369 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t37369(map_LT___$1,f__$1,ch__$1,meta37367__$1,___$2,fn1__$1,meta37370){
return (new cljs.core.async.t37369(map_LT___$1,f__$1,ch__$1,meta37367__$1,___$2,fn1__$1,meta37370));
});})(___$1))
;

}

return (new cljs.core.async.t37369(self__.map_LT_,self__.f,self__.ch,self__.meta37367,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25282__auto__ = ret;
if(cljs.core.truth_(and__25282__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25282__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t37366.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37366.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t37366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37367","meta37367",-1508436504,null)], null);
});

cljs.core.async.t37366.cljs$lang$type = true;

cljs.core.async.t37366.cljs$lang$ctorStr = "cljs.core.async/t37366";

cljs.core.async.t37366.cljs$lang$ctorPrWriter = (function (this__25873__auto__,writer__25874__auto__,opt__25875__auto__){
return cljs.core._write.call(null,writer__25874__auto__,"cljs.core.async/t37366");
});

cljs.core.async.__GT_t37366 = (function cljs$core$async$map_LT__$___GT_t37366(map_LT___$1,f__$1,ch__$1,meta37367){
return (new cljs.core.async.t37366(map_LT___$1,f__$1,ch__$1,meta37367));
});

}

return (new cljs.core.async.t37366(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t37375 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37375 = (function (map_GT_,f,ch,meta37376){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta37376 = meta37376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37377,meta37376__$1){
var self__ = this;
var _37377__$1 = this;
return (new cljs.core.async.t37375(self__.map_GT_,self__.f,self__.ch,meta37376__$1));
});

cljs.core.async.t37375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37377){
var self__ = this;
var _37377__$1 = this;
return self__.meta37376;
});

cljs.core.async.t37375.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37375.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37375.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37375.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t37375.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37375.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t37375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37376","meta37376",-717021060,null)], null);
});

cljs.core.async.t37375.cljs$lang$type = true;

cljs.core.async.t37375.cljs$lang$ctorStr = "cljs.core.async/t37375";

cljs.core.async.t37375.cljs$lang$ctorPrWriter = (function (this__25873__auto__,writer__25874__auto__,opt__25875__auto__){
return cljs.core._write.call(null,writer__25874__auto__,"cljs.core.async/t37375");
});

cljs.core.async.__GT_t37375 = (function cljs$core$async$map_GT__$___GT_t37375(map_GT___$1,f__$1,ch__$1,meta37376){
return (new cljs.core.async.t37375(map_GT___$1,f__$1,ch__$1,meta37376));
});

}

return (new cljs.core.async.t37375(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t37381 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37381 = (function (filter_GT_,p,ch,meta37382){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta37382 = meta37382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37383,meta37382__$1){
var self__ = this;
var _37383__$1 = this;
return (new cljs.core.async.t37381(self__.filter_GT_,self__.p,self__.ch,meta37382__$1));
});

cljs.core.async.t37381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37383){
var self__ = this;
var _37383__$1 = this;
return self__.meta37382;
});

cljs.core.async.t37381.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37381.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t37381.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t37381.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t37381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37382","meta37382",-1179478828,null)], null);
});

cljs.core.async.t37381.cljs$lang$type = true;

cljs.core.async.t37381.cljs$lang$ctorStr = "cljs.core.async/t37381";

cljs.core.async.t37381.cljs$lang$ctorPrWriter = (function (this__25873__auto__,writer__25874__auto__,opt__25875__auto__){
return cljs.core._write.call(null,writer__25874__auto__,"cljs.core.async/t37381");
});

cljs.core.async.__GT_t37381 = (function cljs$core$async$filter_GT__$___GT_t37381(filter_GT___$1,p__$1,ch__$1,meta37382){
return (new cljs.core.async.t37381(filter_GT___$1,p__$1,ch__$1,meta37382));
});

}

return (new cljs.core.async.t37381(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__37385 = arguments.length;
switch (G__37385) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29159__auto___37428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___37428,out){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___37428,out){
return (function (state_37406){
var state_val_37407 = (state_37406[(1)]);
if((state_val_37407 === (7))){
var inst_37402 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37408_37429 = state_37406__$1;
(statearr_37408_37429[(2)] = inst_37402);

(statearr_37408_37429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (1))){
var state_37406__$1 = state_37406;
var statearr_37409_37430 = state_37406__$1;
(statearr_37409_37430[(2)] = null);

(statearr_37409_37430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (4))){
var inst_37388 = (state_37406[(7)]);
var inst_37388__$1 = (state_37406[(2)]);
var inst_37389 = (inst_37388__$1 == null);
var state_37406__$1 = (function (){var statearr_37410 = state_37406;
(statearr_37410[(7)] = inst_37388__$1);

return statearr_37410;
})();
if(cljs.core.truth_(inst_37389)){
var statearr_37411_37431 = state_37406__$1;
(statearr_37411_37431[(1)] = (5));

} else {
var statearr_37412_37432 = state_37406__$1;
(statearr_37412_37432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (6))){
var inst_37388 = (state_37406[(7)]);
var inst_37393 = p.call(null,inst_37388);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37393)){
var statearr_37413_37433 = state_37406__$1;
(statearr_37413_37433[(1)] = (8));

} else {
var statearr_37414_37434 = state_37406__$1;
(statearr_37414_37434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (3))){
var inst_37404 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37406__$1,inst_37404);
} else {
if((state_val_37407 === (2))){
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(4),ch);
} else {
if((state_val_37407 === (11))){
var inst_37396 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37415_37435 = state_37406__$1;
(statearr_37415_37435[(2)] = inst_37396);

(statearr_37415_37435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (9))){
var state_37406__$1 = state_37406;
var statearr_37416_37436 = state_37406__$1;
(statearr_37416_37436[(2)] = null);

(statearr_37416_37436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (5))){
var inst_37391 = cljs.core.async.close_BANG_.call(null,out);
var state_37406__$1 = state_37406;
var statearr_37417_37437 = state_37406__$1;
(statearr_37417_37437[(2)] = inst_37391);

(statearr_37417_37437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (10))){
var inst_37399 = (state_37406[(2)]);
var state_37406__$1 = (function (){var statearr_37418 = state_37406;
(statearr_37418[(8)] = inst_37399);

return statearr_37418;
})();
var statearr_37419_37438 = state_37406__$1;
(statearr_37419_37438[(2)] = null);

(statearr_37419_37438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (8))){
var inst_37388 = (state_37406[(7)]);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37406__$1,(11),out,inst_37388);
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
});})(c__29159__auto___37428,out))
;
return ((function (switch__29097__auto__,c__29159__auto___37428,out){
return (function() {
var cljs$core$async$state_machine__29098__auto__ = null;
var cljs$core$async$state_machine__29098__auto____0 = (function (){
var statearr_37423 = [null,null,null,null,null,null,null,null,null];
(statearr_37423[(0)] = cljs$core$async$state_machine__29098__auto__);

(statearr_37423[(1)] = (1));

return statearr_37423;
});
var cljs$core$async$state_machine__29098__auto____1 = (function (state_37406){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_37406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e37424){if((e37424 instanceof Object)){
var ex__29101__auto__ = e37424;
var statearr_37425_37439 = state_37406;
(statearr_37425_37439[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37440 = state_37406;
state_37406 = G__37440;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$state_machine__29098__auto__ = function(state_37406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29098__auto____1.call(this,state_37406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29098__auto____0;
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29098__auto____1;
return cljs$core$async$state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___37428,out))
})();
var state__29161__auto__ = (function (){var statearr_37426 = f__29160__auto__.call(null);
(statearr_37426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___37428);

return statearr_37426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___37428,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__37442 = arguments.length;
switch (G__37442) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__29159__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto__){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto__){
return (function (state_37609){
var state_val_37610 = (state_37609[(1)]);
if((state_val_37610 === (7))){
var inst_37605 = (state_37609[(2)]);
var state_37609__$1 = state_37609;
var statearr_37611_37652 = state_37609__$1;
(statearr_37611_37652[(2)] = inst_37605);

(statearr_37611_37652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (20))){
var inst_37575 = (state_37609[(7)]);
var inst_37586 = (state_37609[(2)]);
var inst_37587 = cljs.core.next.call(null,inst_37575);
var inst_37561 = inst_37587;
var inst_37562 = null;
var inst_37563 = (0);
var inst_37564 = (0);
var state_37609__$1 = (function (){var statearr_37612 = state_37609;
(statearr_37612[(8)] = inst_37564);

(statearr_37612[(9)] = inst_37586);

(statearr_37612[(10)] = inst_37562);

(statearr_37612[(11)] = inst_37563);

(statearr_37612[(12)] = inst_37561);

return statearr_37612;
})();
var statearr_37613_37653 = state_37609__$1;
(statearr_37613_37653[(2)] = null);

(statearr_37613_37653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (1))){
var state_37609__$1 = state_37609;
var statearr_37614_37654 = state_37609__$1;
(statearr_37614_37654[(2)] = null);

(statearr_37614_37654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (4))){
var inst_37550 = (state_37609[(13)]);
var inst_37550__$1 = (state_37609[(2)]);
var inst_37551 = (inst_37550__$1 == null);
var state_37609__$1 = (function (){var statearr_37615 = state_37609;
(statearr_37615[(13)] = inst_37550__$1);

return statearr_37615;
})();
if(cljs.core.truth_(inst_37551)){
var statearr_37616_37655 = state_37609__$1;
(statearr_37616_37655[(1)] = (5));

} else {
var statearr_37617_37656 = state_37609__$1;
(statearr_37617_37656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (15))){
var state_37609__$1 = state_37609;
var statearr_37621_37657 = state_37609__$1;
(statearr_37621_37657[(2)] = null);

(statearr_37621_37657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (21))){
var state_37609__$1 = state_37609;
var statearr_37622_37658 = state_37609__$1;
(statearr_37622_37658[(2)] = null);

(statearr_37622_37658[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (13))){
var inst_37564 = (state_37609[(8)]);
var inst_37562 = (state_37609[(10)]);
var inst_37563 = (state_37609[(11)]);
var inst_37561 = (state_37609[(12)]);
var inst_37571 = (state_37609[(2)]);
var inst_37572 = (inst_37564 + (1));
var tmp37618 = inst_37562;
var tmp37619 = inst_37563;
var tmp37620 = inst_37561;
var inst_37561__$1 = tmp37620;
var inst_37562__$1 = tmp37618;
var inst_37563__$1 = tmp37619;
var inst_37564__$1 = inst_37572;
var state_37609__$1 = (function (){var statearr_37623 = state_37609;
(statearr_37623[(8)] = inst_37564__$1);

(statearr_37623[(10)] = inst_37562__$1);

(statearr_37623[(11)] = inst_37563__$1);

(statearr_37623[(12)] = inst_37561__$1);

(statearr_37623[(14)] = inst_37571);

return statearr_37623;
})();
var statearr_37624_37659 = state_37609__$1;
(statearr_37624_37659[(2)] = null);

(statearr_37624_37659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (22))){
var state_37609__$1 = state_37609;
var statearr_37625_37660 = state_37609__$1;
(statearr_37625_37660[(2)] = null);

(statearr_37625_37660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (6))){
var inst_37550 = (state_37609[(13)]);
var inst_37559 = f.call(null,inst_37550);
var inst_37560 = cljs.core.seq.call(null,inst_37559);
var inst_37561 = inst_37560;
var inst_37562 = null;
var inst_37563 = (0);
var inst_37564 = (0);
var state_37609__$1 = (function (){var statearr_37626 = state_37609;
(statearr_37626[(8)] = inst_37564);

(statearr_37626[(10)] = inst_37562);

(statearr_37626[(11)] = inst_37563);

(statearr_37626[(12)] = inst_37561);

return statearr_37626;
})();
var statearr_37627_37661 = state_37609__$1;
(statearr_37627_37661[(2)] = null);

(statearr_37627_37661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (17))){
var inst_37575 = (state_37609[(7)]);
var inst_37579 = cljs.core.chunk_first.call(null,inst_37575);
var inst_37580 = cljs.core.chunk_rest.call(null,inst_37575);
var inst_37581 = cljs.core.count.call(null,inst_37579);
var inst_37561 = inst_37580;
var inst_37562 = inst_37579;
var inst_37563 = inst_37581;
var inst_37564 = (0);
var state_37609__$1 = (function (){var statearr_37628 = state_37609;
(statearr_37628[(8)] = inst_37564);

(statearr_37628[(10)] = inst_37562);

(statearr_37628[(11)] = inst_37563);

(statearr_37628[(12)] = inst_37561);

return statearr_37628;
})();
var statearr_37629_37662 = state_37609__$1;
(statearr_37629_37662[(2)] = null);

(statearr_37629_37662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (3))){
var inst_37607 = (state_37609[(2)]);
var state_37609__$1 = state_37609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37609__$1,inst_37607);
} else {
if((state_val_37610 === (12))){
var inst_37595 = (state_37609[(2)]);
var state_37609__$1 = state_37609;
var statearr_37630_37663 = state_37609__$1;
(statearr_37630_37663[(2)] = inst_37595);

(statearr_37630_37663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (2))){
var state_37609__$1 = state_37609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37609__$1,(4),in$);
} else {
if((state_val_37610 === (23))){
var inst_37603 = (state_37609[(2)]);
var state_37609__$1 = state_37609;
var statearr_37631_37664 = state_37609__$1;
(statearr_37631_37664[(2)] = inst_37603);

(statearr_37631_37664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (19))){
var inst_37590 = (state_37609[(2)]);
var state_37609__$1 = state_37609;
var statearr_37632_37665 = state_37609__$1;
(statearr_37632_37665[(2)] = inst_37590);

(statearr_37632_37665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (11))){
var inst_37575 = (state_37609[(7)]);
var inst_37561 = (state_37609[(12)]);
var inst_37575__$1 = cljs.core.seq.call(null,inst_37561);
var state_37609__$1 = (function (){var statearr_37633 = state_37609;
(statearr_37633[(7)] = inst_37575__$1);

return statearr_37633;
})();
if(inst_37575__$1){
var statearr_37634_37666 = state_37609__$1;
(statearr_37634_37666[(1)] = (14));

} else {
var statearr_37635_37667 = state_37609__$1;
(statearr_37635_37667[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (9))){
var inst_37597 = (state_37609[(2)]);
var inst_37598 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37609__$1 = (function (){var statearr_37636 = state_37609;
(statearr_37636[(15)] = inst_37597);

return statearr_37636;
})();
if(cljs.core.truth_(inst_37598)){
var statearr_37637_37668 = state_37609__$1;
(statearr_37637_37668[(1)] = (21));

} else {
var statearr_37638_37669 = state_37609__$1;
(statearr_37638_37669[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (5))){
var inst_37553 = cljs.core.async.close_BANG_.call(null,out);
var state_37609__$1 = state_37609;
var statearr_37639_37670 = state_37609__$1;
(statearr_37639_37670[(2)] = inst_37553);

(statearr_37639_37670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (14))){
var inst_37575 = (state_37609[(7)]);
var inst_37577 = cljs.core.chunked_seq_QMARK_.call(null,inst_37575);
var state_37609__$1 = state_37609;
if(inst_37577){
var statearr_37640_37671 = state_37609__$1;
(statearr_37640_37671[(1)] = (17));

} else {
var statearr_37641_37672 = state_37609__$1;
(statearr_37641_37672[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (16))){
var inst_37593 = (state_37609[(2)]);
var state_37609__$1 = state_37609;
var statearr_37642_37673 = state_37609__$1;
(statearr_37642_37673[(2)] = inst_37593);

(statearr_37642_37673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37610 === (10))){
var inst_37564 = (state_37609[(8)]);
var inst_37562 = (state_37609[(10)]);
var inst_37569 = cljs.core._nth.call(null,inst_37562,inst_37564);
var state_37609__$1 = state_37609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37609__$1,(13),out,inst_37569);
} else {
if((state_val_37610 === (18))){
var inst_37575 = (state_37609[(7)]);
var inst_37584 = cljs.core.first.call(null,inst_37575);
var state_37609__$1 = state_37609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37609__$1,(20),out,inst_37584);
} else {
if((state_val_37610 === (8))){
var inst_37564 = (state_37609[(8)]);
var inst_37563 = (state_37609[(11)]);
var inst_37566 = (inst_37564 < inst_37563);
var inst_37567 = inst_37566;
var state_37609__$1 = state_37609;
if(cljs.core.truth_(inst_37567)){
var statearr_37643_37674 = state_37609__$1;
(statearr_37643_37674[(1)] = (10));

} else {
var statearr_37644_37675 = state_37609__$1;
(statearr_37644_37675[(1)] = (11));

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
});})(c__29159__auto__))
;
return ((function (switch__29097__auto__,c__29159__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29098__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29098__auto____0 = (function (){
var statearr_37648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37648[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29098__auto__);

(statearr_37648[(1)] = (1));

return statearr_37648;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29098__auto____1 = (function (state_37609){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_37609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e37649){if((e37649 instanceof Object)){
var ex__29101__auto__ = e37649;
var statearr_37650_37676 = state_37609;
(statearr_37650_37676[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37677 = state_37609;
state_37609 = G__37677;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29098__auto__ = function(state_37609){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29098__auto____1.call(this,state_37609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29098__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29098__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto__))
})();
var state__29161__auto__ = (function (){var statearr_37651 = f__29160__auto__.call(null);
(statearr_37651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto__);

return statearr_37651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto__))
);

return c__29159__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__37679 = arguments.length;
switch (G__37679) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__37682 = arguments.length;
switch (G__37682) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__37685 = arguments.length;
switch (G__37685) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29159__auto___37735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___37735,out){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___37735,out){
return (function (state_37709){
var state_val_37710 = (state_37709[(1)]);
if((state_val_37710 === (7))){
var inst_37704 = (state_37709[(2)]);
var state_37709__$1 = state_37709;
var statearr_37711_37736 = state_37709__$1;
(statearr_37711_37736[(2)] = inst_37704);

(statearr_37711_37736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (1))){
var inst_37686 = null;
var state_37709__$1 = (function (){var statearr_37712 = state_37709;
(statearr_37712[(7)] = inst_37686);

return statearr_37712;
})();
var statearr_37713_37737 = state_37709__$1;
(statearr_37713_37737[(2)] = null);

(statearr_37713_37737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (4))){
var inst_37689 = (state_37709[(8)]);
var inst_37689__$1 = (state_37709[(2)]);
var inst_37690 = (inst_37689__$1 == null);
var inst_37691 = cljs.core.not.call(null,inst_37690);
var state_37709__$1 = (function (){var statearr_37714 = state_37709;
(statearr_37714[(8)] = inst_37689__$1);

return statearr_37714;
})();
if(inst_37691){
var statearr_37715_37738 = state_37709__$1;
(statearr_37715_37738[(1)] = (5));

} else {
var statearr_37716_37739 = state_37709__$1;
(statearr_37716_37739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (6))){
var state_37709__$1 = state_37709;
var statearr_37717_37740 = state_37709__$1;
(statearr_37717_37740[(2)] = null);

(statearr_37717_37740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (3))){
var inst_37706 = (state_37709[(2)]);
var inst_37707 = cljs.core.async.close_BANG_.call(null,out);
var state_37709__$1 = (function (){var statearr_37718 = state_37709;
(statearr_37718[(9)] = inst_37706);

return statearr_37718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37709__$1,inst_37707);
} else {
if((state_val_37710 === (2))){
var state_37709__$1 = state_37709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37709__$1,(4),ch);
} else {
if((state_val_37710 === (11))){
var inst_37689 = (state_37709[(8)]);
var inst_37698 = (state_37709[(2)]);
var inst_37686 = inst_37689;
var state_37709__$1 = (function (){var statearr_37719 = state_37709;
(statearr_37719[(10)] = inst_37698);

(statearr_37719[(7)] = inst_37686);

return statearr_37719;
})();
var statearr_37720_37741 = state_37709__$1;
(statearr_37720_37741[(2)] = null);

(statearr_37720_37741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (9))){
var inst_37689 = (state_37709[(8)]);
var state_37709__$1 = state_37709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37709__$1,(11),out,inst_37689);
} else {
if((state_val_37710 === (5))){
var inst_37689 = (state_37709[(8)]);
var inst_37686 = (state_37709[(7)]);
var inst_37693 = cljs.core._EQ_.call(null,inst_37689,inst_37686);
var state_37709__$1 = state_37709;
if(inst_37693){
var statearr_37722_37742 = state_37709__$1;
(statearr_37722_37742[(1)] = (8));

} else {
var statearr_37723_37743 = state_37709__$1;
(statearr_37723_37743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (10))){
var inst_37701 = (state_37709[(2)]);
var state_37709__$1 = state_37709;
var statearr_37724_37744 = state_37709__$1;
(statearr_37724_37744[(2)] = inst_37701);

(statearr_37724_37744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (8))){
var inst_37686 = (state_37709[(7)]);
var tmp37721 = inst_37686;
var inst_37686__$1 = tmp37721;
var state_37709__$1 = (function (){var statearr_37725 = state_37709;
(statearr_37725[(7)] = inst_37686__$1);

return statearr_37725;
})();
var statearr_37726_37745 = state_37709__$1;
(statearr_37726_37745[(2)] = null);

(statearr_37726_37745[(1)] = (2));


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
});})(c__29159__auto___37735,out))
;
return ((function (switch__29097__auto__,c__29159__auto___37735,out){
return (function() {
var cljs$core$async$state_machine__29098__auto__ = null;
var cljs$core$async$state_machine__29098__auto____0 = (function (){
var statearr_37730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37730[(0)] = cljs$core$async$state_machine__29098__auto__);

(statearr_37730[(1)] = (1));

return statearr_37730;
});
var cljs$core$async$state_machine__29098__auto____1 = (function (state_37709){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_37709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e37731){if((e37731 instanceof Object)){
var ex__29101__auto__ = e37731;
var statearr_37732_37746 = state_37709;
(statearr_37732_37746[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37747 = state_37709;
state_37709 = G__37747;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$state_machine__29098__auto__ = function(state_37709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29098__auto____1.call(this,state_37709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29098__auto____0;
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29098__auto____1;
return cljs$core$async$state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___37735,out))
})();
var state__29161__auto__ = (function (){var statearr_37733 = f__29160__auto__.call(null);
(statearr_37733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___37735);

return statearr_37733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___37735,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__37749 = arguments.length;
switch (G__37749) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29159__auto___37818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___37818,out){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___37818,out){
return (function (state_37787){
var state_val_37788 = (state_37787[(1)]);
if((state_val_37788 === (7))){
var inst_37783 = (state_37787[(2)]);
var state_37787__$1 = state_37787;
var statearr_37789_37819 = state_37787__$1;
(statearr_37789_37819[(2)] = inst_37783);

(statearr_37789_37819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (1))){
var inst_37750 = (new Array(n));
var inst_37751 = inst_37750;
var inst_37752 = (0);
var state_37787__$1 = (function (){var statearr_37790 = state_37787;
(statearr_37790[(7)] = inst_37752);

(statearr_37790[(8)] = inst_37751);

return statearr_37790;
})();
var statearr_37791_37820 = state_37787__$1;
(statearr_37791_37820[(2)] = null);

(statearr_37791_37820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (4))){
var inst_37755 = (state_37787[(9)]);
var inst_37755__$1 = (state_37787[(2)]);
var inst_37756 = (inst_37755__$1 == null);
var inst_37757 = cljs.core.not.call(null,inst_37756);
var state_37787__$1 = (function (){var statearr_37792 = state_37787;
(statearr_37792[(9)] = inst_37755__$1);

return statearr_37792;
})();
if(inst_37757){
var statearr_37793_37821 = state_37787__$1;
(statearr_37793_37821[(1)] = (5));

} else {
var statearr_37794_37822 = state_37787__$1;
(statearr_37794_37822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (15))){
var inst_37777 = (state_37787[(2)]);
var state_37787__$1 = state_37787;
var statearr_37795_37823 = state_37787__$1;
(statearr_37795_37823[(2)] = inst_37777);

(statearr_37795_37823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (13))){
var state_37787__$1 = state_37787;
var statearr_37796_37824 = state_37787__$1;
(statearr_37796_37824[(2)] = null);

(statearr_37796_37824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (6))){
var inst_37752 = (state_37787[(7)]);
var inst_37773 = (inst_37752 > (0));
var state_37787__$1 = state_37787;
if(cljs.core.truth_(inst_37773)){
var statearr_37797_37825 = state_37787__$1;
(statearr_37797_37825[(1)] = (12));

} else {
var statearr_37798_37826 = state_37787__$1;
(statearr_37798_37826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (3))){
var inst_37785 = (state_37787[(2)]);
var state_37787__$1 = state_37787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37787__$1,inst_37785);
} else {
if((state_val_37788 === (12))){
var inst_37751 = (state_37787[(8)]);
var inst_37775 = cljs.core.vec.call(null,inst_37751);
var state_37787__$1 = state_37787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37787__$1,(15),out,inst_37775);
} else {
if((state_val_37788 === (2))){
var state_37787__$1 = state_37787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37787__$1,(4),ch);
} else {
if((state_val_37788 === (11))){
var inst_37767 = (state_37787[(2)]);
var inst_37768 = (new Array(n));
var inst_37751 = inst_37768;
var inst_37752 = (0);
var state_37787__$1 = (function (){var statearr_37799 = state_37787;
(statearr_37799[(7)] = inst_37752);

(statearr_37799[(10)] = inst_37767);

(statearr_37799[(8)] = inst_37751);

return statearr_37799;
})();
var statearr_37800_37827 = state_37787__$1;
(statearr_37800_37827[(2)] = null);

(statearr_37800_37827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (9))){
var inst_37751 = (state_37787[(8)]);
var inst_37765 = cljs.core.vec.call(null,inst_37751);
var state_37787__$1 = state_37787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37787__$1,(11),out,inst_37765);
} else {
if((state_val_37788 === (5))){
var inst_37752 = (state_37787[(7)]);
var inst_37755 = (state_37787[(9)]);
var inst_37760 = (state_37787[(11)]);
var inst_37751 = (state_37787[(8)]);
var inst_37759 = (inst_37751[inst_37752] = inst_37755);
var inst_37760__$1 = (inst_37752 + (1));
var inst_37761 = (inst_37760__$1 < n);
var state_37787__$1 = (function (){var statearr_37801 = state_37787;
(statearr_37801[(12)] = inst_37759);

(statearr_37801[(11)] = inst_37760__$1);

return statearr_37801;
})();
if(cljs.core.truth_(inst_37761)){
var statearr_37802_37828 = state_37787__$1;
(statearr_37802_37828[(1)] = (8));

} else {
var statearr_37803_37829 = state_37787__$1;
(statearr_37803_37829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (14))){
var inst_37780 = (state_37787[(2)]);
var inst_37781 = cljs.core.async.close_BANG_.call(null,out);
var state_37787__$1 = (function (){var statearr_37805 = state_37787;
(statearr_37805[(13)] = inst_37780);

return statearr_37805;
})();
var statearr_37806_37830 = state_37787__$1;
(statearr_37806_37830[(2)] = inst_37781);

(statearr_37806_37830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (10))){
var inst_37771 = (state_37787[(2)]);
var state_37787__$1 = state_37787;
var statearr_37807_37831 = state_37787__$1;
(statearr_37807_37831[(2)] = inst_37771);

(statearr_37807_37831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (8))){
var inst_37760 = (state_37787[(11)]);
var inst_37751 = (state_37787[(8)]);
var tmp37804 = inst_37751;
var inst_37751__$1 = tmp37804;
var inst_37752 = inst_37760;
var state_37787__$1 = (function (){var statearr_37808 = state_37787;
(statearr_37808[(7)] = inst_37752);

(statearr_37808[(8)] = inst_37751__$1);

return statearr_37808;
})();
var statearr_37809_37832 = state_37787__$1;
(statearr_37809_37832[(2)] = null);

(statearr_37809_37832[(1)] = (2));


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
});})(c__29159__auto___37818,out))
;
return ((function (switch__29097__auto__,c__29159__auto___37818,out){
return (function() {
var cljs$core$async$state_machine__29098__auto__ = null;
var cljs$core$async$state_machine__29098__auto____0 = (function (){
var statearr_37813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37813[(0)] = cljs$core$async$state_machine__29098__auto__);

(statearr_37813[(1)] = (1));

return statearr_37813;
});
var cljs$core$async$state_machine__29098__auto____1 = (function (state_37787){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_37787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e37814){if((e37814 instanceof Object)){
var ex__29101__auto__ = e37814;
var statearr_37815_37833 = state_37787;
(statearr_37815_37833[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37834 = state_37787;
state_37787 = G__37834;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$state_machine__29098__auto__ = function(state_37787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29098__auto____1.call(this,state_37787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29098__auto____0;
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29098__auto____1;
return cljs$core$async$state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___37818,out))
})();
var state__29161__auto__ = (function (){var statearr_37816 = f__29160__auto__.call(null);
(statearr_37816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___37818);

return statearr_37816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___37818,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__37836 = arguments.length;
switch (G__37836) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29159__auto___37909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___37909,out){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___37909,out){
return (function (state_37878){
var state_val_37879 = (state_37878[(1)]);
if((state_val_37879 === (7))){
var inst_37874 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37880_37910 = state_37878__$1;
(statearr_37880_37910[(2)] = inst_37874);

(statearr_37880_37910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (1))){
var inst_37837 = [];
var inst_37838 = inst_37837;
var inst_37839 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37878__$1 = (function (){var statearr_37881 = state_37878;
(statearr_37881[(7)] = inst_37838);

(statearr_37881[(8)] = inst_37839);

return statearr_37881;
})();
var statearr_37882_37911 = state_37878__$1;
(statearr_37882_37911[(2)] = null);

(statearr_37882_37911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (4))){
var inst_37842 = (state_37878[(9)]);
var inst_37842__$1 = (state_37878[(2)]);
var inst_37843 = (inst_37842__$1 == null);
var inst_37844 = cljs.core.not.call(null,inst_37843);
var state_37878__$1 = (function (){var statearr_37883 = state_37878;
(statearr_37883[(9)] = inst_37842__$1);

return statearr_37883;
})();
if(inst_37844){
var statearr_37884_37912 = state_37878__$1;
(statearr_37884_37912[(1)] = (5));

} else {
var statearr_37885_37913 = state_37878__$1;
(statearr_37885_37913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (15))){
var inst_37868 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37886_37914 = state_37878__$1;
(statearr_37886_37914[(2)] = inst_37868);

(statearr_37886_37914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (13))){
var state_37878__$1 = state_37878;
var statearr_37887_37915 = state_37878__$1;
(statearr_37887_37915[(2)] = null);

(statearr_37887_37915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (6))){
var inst_37838 = (state_37878[(7)]);
var inst_37863 = inst_37838.length;
var inst_37864 = (inst_37863 > (0));
var state_37878__$1 = state_37878;
if(cljs.core.truth_(inst_37864)){
var statearr_37888_37916 = state_37878__$1;
(statearr_37888_37916[(1)] = (12));

} else {
var statearr_37889_37917 = state_37878__$1;
(statearr_37889_37917[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (3))){
var inst_37876 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37878__$1,inst_37876);
} else {
if((state_val_37879 === (12))){
var inst_37838 = (state_37878[(7)]);
var inst_37866 = cljs.core.vec.call(null,inst_37838);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37878__$1,(15),out,inst_37866);
} else {
if((state_val_37879 === (2))){
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37878__$1,(4),ch);
} else {
if((state_val_37879 === (11))){
var inst_37842 = (state_37878[(9)]);
var inst_37846 = (state_37878[(10)]);
var inst_37856 = (state_37878[(2)]);
var inst_37857 = [];
var inst_37858 = inst_37857.push(inst_37842);
var inst_37838 = inst_37857;
var inst_37839 = inst_37846;
var state_37878__$1 = (function (){var statearr_37890 = state_37878;
(statearr_37890[(11)] = inst_37858);

(statearr_37890[(7)] = inst_37838);

(statearr_37890[(8)] = inst_37839);

(statearr_37890[(12)] = inst_37856);

return statearr_37890;
})();
var statearr_37891_37918 = state_37878__$1;
(statearr_37891_37918[(2)] = null);

(statearr_37891_37918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (9))){
var inst_37838 = (state_37878[(7)]);
var inst_37854 = cljs.core.vec.call(null,inst_37838);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37878__$1,(11),out,inst_37854);
} else {
if((state_val_37879 === (5))){
var inst_37842 = (state_37878[(9)]);
var inst_37846 = (state_37878[(10)]);
var inst_37839 = (state_37878[(8)]);
var inst_37846__$1 = f.call(null,inst_37842);
var inst_37847 = cljs.core._EQ_.call(null,inst_37846__$1,inst_37839);
var inst_37848 = cljs.core.keyword_identical_QMARK_.call(null,inst_37839,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37849 = (inst_37847) || (inst_37848);
var state_37878__$1 = (function (){var statearr_37892 = state_37878;
(statearr_37892[(10)] = inst_37846__$1);

return statearr_37892;
})();
if(cljs.core.truth_(inst_37849)){
var statearr_37893_37919 = state_37878__$1;
(statearr_37893_37919[(1)] = (8));

} else {
var statearr_37894_37920 = state_37878__$1;
(statearr_37894_37920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (14))){
var inst_37871 = (state_37878[(2)]);
var inst_37872 = cljs.core.async.close_BANG_.call(null,out);
var state_37878__$1 = (function (){var statearr_37896 = state_37878;
(statearr_37896[(13)] = inst_37871);

return statearr_37896;
})();
var statearr_37897_37921 = state_37878__$1;
(statearr_37897_37921[(2)] = inst_37872);

(statearr_37897_37921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (10))){
var inst_37861 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37898_37922 = state_37878__$1;
(statearr_37898_37922[(2)] = inst_37861);

(statearr_37898_37922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (8))){
var inst_37842 = (state_37878[(9)]);
var inst_37846 = (state_37878[(10)]);
var inst_37838 = (state_37878[(7)]);
var inst_37851 = inst_37838.push(inst_37842);
var tmp37895 = inst_37838;
var inst_37838__$1 = tmp37895;
var inst_37839 = inst_37846;
var state_37878__$1 = (function (){var statearr_37899 = state_37878;
(statearr_37899[(14)] = inst_37851);

(statearr_37899[(7)] = inst_37838__$1);

(statearr_37899[(8)] = inst_37839);

return statearr_37899;
})();
var statearr_37900_37923 = state_37878__$1;
(statearr_37900_37923[(2)] = null);

(statearr_37900_37923[(1)] = (2));


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
});})(c__29159__auto___37909,out))
;
return ((function (switch__29097__auto__,c__29159__auto___37909,out){
return (function() {
var cljs$core$async$state_machine__29098__auto__ = null;
var cljs$core$async$state_machine__29098__auto____0 = (function (){
var statearr_37904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37904[(0)] = cljs$core$async$state_machine__29098__auto__);

(statearr_37904[(1)] = (1));

return statearr_37904;
});
var cljs$core$async$state_machine__29098__auto____1 = (function (state_37878){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_37878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e37905){if((e37905 instanceof Object)){
var ex__29101__auto__ = e37905;
var statearr_37906_37924 = state_37878;
(statearr_37906_37924[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37925 = state_37878;
state_37878 = G__37925;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
cljs$core$async$state_machine__29098__auto__ = function(state_37878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29098__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29098__auto____1.call(this,state_37878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29098__auto____0;
cljs$core$async$state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29098__auto____1;
return cljs$core$async$state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___37909,out))
})();
var state__29161__auto__ = (function (){var statearr_37907 = f__29160__auto__.call(null);
(statearr_37907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___37909);

return statearr_37907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___37909,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map