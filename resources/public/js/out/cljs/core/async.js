// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t29820 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29820 = (function (f,fn_handler,meta29821){
this.f = f;
this.fn_handler = fn_handler;
this.meta29821 = meta29821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29820.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29822){
var self__ = this;
var _29822__$1 = this;
return self__.meta29821;
});

cljs.core.async.t29820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29822,meta29821__$1){
var self__ = this;
var _29822__$1 = this;
return (new cljs.core.async.t29820(self__.f,self__.fn_handler,meta29821__$1));
});

cljs.core.async.t29820.cljs$lang$type = true;

cljs.core.async.t29820.cljs$lang$ctorStr = "cljs.core.async/t29820";

cljs.core.async.t29820.cljs$lang$ctorPrWriter = (function (this__16101__auto__,writer__16102__auto__,opt__16103__auto__){
return cljs.core._write.call(null,writer__16102__auto__,"cljs.core.async/t29820");
});

cljs.core.async.__GT_t29820 = (function __GT_t29820(f__$1,fn_handler__$1,meta29821){
return (new cljs.core.async.t29820(f__$1,fn_handler__$1,meta29821));
});

}

return (new cljs.core.async.t29820(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__29824 = buff;
if(G__29824){
var bit__16195__auto__ = null;
if(cljs.core.truth_((function (){var or__15514__auto__ = bit__16195__auto__;
if(cljs.core.truth_(or__15514__auto__)){
return or__15514__auto__;
} else {
return G__29824.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29824.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29824);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29824);
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
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
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
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29825 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29825);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29825,ret){
return (function (){
return fn1.call(null,val_29825);
});})(val_29825,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__16401__auto___29826 = n;
var x_29827 = (0);
while(true){
if((x_29827 < n__16401__auto___29826)){
(a[x_29827] = (0));

var G__29828 = (x_29827 + (1));
x_29827 = G__29828;
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

var G__29829 = (i + (1));
i = G__29829;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29833 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29833 = (function (flag,alt_flag,meta29834){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29834 = meta29834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29833.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29835){
var self__ = this;
var _29835__$1 = this;
return self__.meta29834;
});})(flag))
;

cljs.core.async.t29833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29835,meta29834__$1){
var self__ = this;
var _29835__$1 = this;
return (new cljs.core.async.t29833(self__.flag,self__.alt_flag,meta29834__$1));
});})(flag))
;

cljs.core.async.t29833.cljs$lang$type = true;

cljs.core.async.t29833.cljs$lang$ctorStr = "cljs.core.async/t29833";

cljs.core.async.t29833.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16101__auto__,writer__16102__auto__,opt__16103__auto__){
return cljs.core._write.call(null,writer__16102__auto__,"cljs.core.async/t29833");
});})(flag))
;

cljs.core.async.__GT_t29833 = ((function (flag){
return (function __GT_t29833(flag__$1,alt_flag__$1,meta29834){
return (new cljs.core.async.t29833(flag__$1,alt_flag__$1,meta29834));
});})(flag))
;

}

return (new cljs.core.async.t29833(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t29839 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29839 = (function (cb,flag,alt_handler,meta29840){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29840 = meta29840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29839.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29841){
var self__ = this;
var _29841__$1 = this;
return self__.meta29840;
});

cljs.core.async.t29839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29841,meta29840__$1){
var self__ = this;
var _29841__$1 = this;
return (new cljs.core.async.t29839(self__.cb,self__.flag,self__.alt_handler,meta29840__$1));
});

cljs.core.async.t29839.cljs$lang$type = true;

cljs.core.async.t29839.cljs$lang$ctorStr = "cljs.core.async/t29839";

cljs.core.async.t29839.cljs$lang$ctorPrWriter = (function (this__16101__auto__,writer__16102__auto__,opt__16103__auto__){
return cljs.core._write.call(null,writer__16102__auto__,"cljs.core.async/t29839");
});

cljs.core.async.__GT_t29839 = (function __GT_t29839(cb__$1,flag__$1,alt_handler__$1,meta29840){
return (new cljs.core.async.t29839(cb__$1,flag__$1,alt_handler__$1,meta29840));
});

}

return (new cljs.core.async.t29839(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
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
return (function (p1__29842_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29842_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29843_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29843_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15514__auto__ = wport;
if(cljs.core.truth_(or__15514__auto__)){
return or__15514__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29844 = (i + (1));
i = G__29844;
continue;
}
} else {
return null;
}
break;
}
})();
var or__15514__auto__ = ret;
if(cljs.core.truth_(or__15514__auto__)){
return or__15514__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__15502__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__15502__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__15502__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__29845){
var map__29847 = p__29845;
var map__29847__$1 = ((cljs.core.seq_QMARK_.call(null,map__29847))?cljs.core.apply.call(null,cljs.core.hash_map,map__29847):map__29847);
var opts = map__29847__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__29845 = null;
if (arguments.length > 1) {
var G__29848__i = 0, G__29848__a = new Array(arguments.length -  1);
while (G__29848__i < G__29848__a.length) {G__29848__a[G__29848__i] = arguments[G__29848__i + 1]; ++G__29848__i;}
  p__29845 = new cljs.core.IndexedSeq(G__29848__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__29845);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29849){
var ports = cljs.core.first(arglist__29849);
var p__29845 = cljs.core.rest(arglist__29849);
return alts_BANG___delegate(ports,p__29845);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__18197__auto___29944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___29944){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___29944){
return (function (state_29920){
var state_val_29921 = (state_29920[(1)]);
if((state_val_29921 === (7))){
var inst_29916 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29922_29945 = state_29920__$1;
(statearr_29922_29945[(2)] = inst_29916);

(statearr_29922_29945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (1))){
var state_29920__$1 = state_29920;
var statearr_29923_29946 = state_29920__$1;
(statearr_29923_29946[(2)] = null);

(statearr_29923_29946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (4))){
var inst_29899 = (state_29920[(7)]);
var inst_29899__$1 = (state_29920[(2)]);
var inst_29900 = (inst_29899__$1 == null);
var state_29920__$1 = (function (){var statearr_29924 = state_29920;
(statearr_29924[(7)] = inst_29899__$1);

return statearr_29924;
})();
if(cljs.core.truth_(inst_29900)){
var statearr_29925_29947 = state_29920__$1;
(statearr_29925_29947[(1)] = (5));

} else {
var statearr_29926_29948 = state_29920__$1;
(statearr_29926_29948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (13))){
var state_29920__$1 = state_29920;
var statearr_29927_29949 = state_29920__$1;
(statearr_29927_29949[(2)] = null);

(statearr_29927_29949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (6))){
var inst_29899 = (state_29920[(7)]);
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29920__$1,(11),to,inst_29899);
} else {
if((state_val_29921 === (3))){
var inst_29918 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29920__$1,inst_29918);
} else {
if((state_val_29921 === (12))){
var state_29920__$1 = state_29920;
var statearr_29928_29950 = state_29920__$1;
(statearr_29928_29950[(2)] = null);

(statearr_29928_29950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (2))){
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29920__$1,(4),from);
} else {
if((state_val_29921 === (11))){
var inst_29909 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
if(cljs.core.truth_(inst_29909)){
var statearr_29929_29951 = state_29920__$1;
(statearr_29929_29951[(1)] = (12));

} else {
var statearr_29930_29952 = state_29920__$1;
(statearr_29930_29952[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (9))){
var state_29920__$1 = state_29920;
var statearr_29931_29953 = state_29920__$1;
(statearr_29931_29953[(2)] = null);

(statearr_29931_29953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (5))){
var state_29920__$1 = state_29920;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29932_29954 = state_29920__$1;
(statearr_29932_29954[(1)] = (8));

} else {
var statearr_29933_29955 = state_29920__$1;
(statearr_29933_29955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (14))){
var inst_29914 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29934_29956 = state_29920__$1;
(statearr_29934_29956[(2)] = inst_29914);

(statearr_29934_29956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (10))){
var inst_29906 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29935_29957 = state_29920__$1;
(statearr_29935_29957[(2)] = inst_29906);

(statearr_29935_29957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (8))){
var inst_29903 = cljs.core.async.close_BANG_.call(null,to);
var state_29920__$1 = state_29920;
var statearr_29936_29958 = state_29920__$1;
(statearr_29936_29958[(2)] = inst_29903);

(statearr_29936_29958[(1)] = (10));


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
});})(c__18197__auto___29944))
;
return ((function (switch__18141__auto__,c__18197__auto___29944){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_29940 = [null,null,null,null,null,null,null,null];
(statearr_29940[(0)] = state_machine__18142__auto__);

(statearr_29940[(1)] = (1));

return statearr_29940;
});
var state_machine__18142__auto____1 = (function (state_29920){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_29920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e29941){if((e29941 instanceof Object)){
var ex__18145__auto__ = e29941;
var statearr_29942_29959 = state_29920;
(statearr_29942_29959[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29960 = state_29920;
state_29920 = G__29960;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_29920){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_29920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___29944))
})();
var state__18199__auto__ = (function (){var statearr_29943 = f__18198__auto__.call(null);
(statearr_29943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___29944);

return statearr_29943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___29944))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30144){
var vec__30145 = p__30144;
var v = cljs.core.nth.call(null,vec__30145,(0),null);
var p = cljs.core.nth.call(null,vec__30145,(1),null);
var job = vec__30145;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18197__auto___30327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___30327,res,vec__30145,v,p,job,jobs,results){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___30327,res,vec__30145,v,p,job,jobs,results){
return (function (state_30150){
var state_val_30151 = (state_30150[(1)]);
if((state_val_30151 === (2))){
var inst_30147 = (state_30150[(2)]);
var inst_30148 = cljs.core.async.close_BANG_.call(null,res);
var state_30150__$1 = (function (){var statearr_30152 = state_30150;
(statearr_30152[(7)] = inst_30147);

return statearr_30152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30150__$1,inst_30148);
} else {
if((state_val_30151 === (1))){
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30150__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18197__auto___30327,res,vec__30145,v,p,job,jobs,results))
;
return ((function (switch__18141__auto__,c__18197__auto___30327,res,vec__30145,v,p,job,jobs,results){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_30156 = [null,null,null,null,null,null,null,null];
(statearr_30156[(0)] = state_machine__18142__auto__);

(statearr_30156[(1)] = (1));

return statearr_30156;
});
var state_machine__18142__auto____1 = (function (state_30150){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_30150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e30157){if((e30157 instanceof Object)){
var ex__18145__auto__ = e30157;
var statearr_30158_30328 = state_30150;
(statearr_30158_30328[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30329 = state_30150;
state_30150 = G__30329;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_30150){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_30150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___30327,res,vec__30145,v,p,job,jobs,results))
})();
var state__18199__auto__ = (function (){var statearr_30159 = f__18198__auto__.call(null);
(statearr_30159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___30327);

return statearr_30159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___30327,res,vec__30145,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30160){
var vec__30161 = p__30160;
var v = cljs.core.nth.call(null,vec__30161,(0),null);
var p = cljs.core.nth.call(null,vec__30161,(1),null);
var job = vec__30161;
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
var n__16401__auto___30330 = n;
var __30331 = (0);
while(true){
if((__30331 < n__16401__auto___30330)){
var G__30162_30332 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30162_30332) {
case "async":
var c__18197__auto___30334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30331,c__18197__auto___30334,G__30162_30332,n__16401__auto___30330,jobs,results,process,async){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (__30331,c__18197__auto___30334,G__30162_30332,n__16401__auto___30330,jobs,results,process,async){
return (function (state_30175){
var state_val_30176 = (state_30175[(1)]);
if((state_val_30176 === (7))){
var inst_30171 = (state_30175[(2)]);
var state_30175__$1 = state_30175;
var statearr_30177_30335 = state_30175__$1;
(statearr_30177_30335[(2)] = inst_30171);

(statearr_30177_30335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (6))){
var state_30175__$1 = state_30175;
var statearr_30178_30336 = state_30175__$1;
(statearr_30178_30336[(2)] = null);

(statearr_30178_30336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (5))){
var state_30175__$1 = state_30175;
var statearr_30179_30337 = state_30175__$1;
(statearr_30179_30337[(2)] = null);

(statearr_30179_30337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (4))){
var inst_30165 = (state_30175[(2)]);
var inst_30166 = async.call(null,inst_30165);
var state_30175__$1 = state_30175;
if(cljs.core.truth_(inst_30166)){
var statearr_30180_30338 = state_30175__$1;
(statearr_30180_30338[(1)] = (5));

} else {
var statearr_30181_30339 = state_30175__$1;
(statearr_30181_30339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (3))){
var inst_30173 = (state_30175[(2)]);
var state_30175__$1 = state_30175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30175__$1,inst_30173);
} else {
if((state_val_30176 === (2))){
var state_30175__$1 = state_30175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30175__$1,(4),jobs);
} else {
if((state_val_30176 === (1))){
var state_30175__$1 = state_30175;
var statearr_30182_30340 = state_30175__$1;
(statearr_30182_30340[(2)] = null);

(statearr_30182_30340[(1)] = (2));


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
});})(__30331,c__18197__auto___30334,G__30162_30332,n__16401__auto___30330,jobs,results,process,async))
;
return ((function (__30331,switch__18141__auto__,c__18197__auto___30334,G__30162_30332,n__16401__auto___30330,jobs,results,process,async){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_30186 = [null,null,null,null,null,null,null];
(statearr_30186[(0)] = state_machine__18142__auto__);

(statearr_30186[(1)] = (1));

return statearr_30186;
});
var state_machine__18142__auto____1 = (function (state_30175){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_30175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e30187){if((e30187 instanceof Object)){
var ex__18145__auto__ = e30187;
var statearr_30188_30341 = state_30175;
(statearr_30188_30341[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30342 = state_30175;
state_30175 = G__30342;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_30175){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_30175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(__30331,switch__18141__auto__,c__18197__auto___30334,G__30162_30332,n__16401__auto___30330,jobs,results,process,async))
})();
var state__18199__auto__ = (function (){var statearr_30189 = f__18198__auto__.call(null);
(statearr_30189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___30334);

return statearr_30189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(__30331,c__18197__auto___30334,G__30162_30332,n__16401__auto___30330,jobs,results,process,async))
);


break;
case "compute":
var c__18197__auto___30343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30331,c__18197__auto___30343,G__30162_30332,n__16401__auto___30330,jobs,results,process,async){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (__30331,c__18197__auto___30343,G__30162_30332,n__16401__auto___30330,jobs,results,process,async){
return (function (state_30202){
var state_val_30203 = (state_30202[(1)]);
if((state_val_30203 === (7))){
var inst_30198 = (state_30202[(2)]);
var state_30202__$1 = state_30202;
var statearr_30204_30344 = state_30202__$1;
(statearr_30204_30344[(2)] = inst_30198);

(statearr_30204_30344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (6))){
var state_30202__$1 = state_30202;
var statearr_30205_30345 = state_30202__$1;
(statearr_30205_30345[(2)] = null);

(statearr_30205_30345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (5))){
var state_30202__$1 = state_30202;
var statearr_30206_30346 = state_30202__$1;
(statearr_30206_30346[(2)] = null);

(statearr_30206_30346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (4))){
var inst_30192 = (state_30202[(2)]);
var inst_30193 = process.call(null,inst_30192);
var state_30202__$1 = state_30202;
if(cljs.core.truth_(inst_30193)){
var statearr_30207_30347 = state_30202__$1;
(statearr_30207_30347[(1)] = (5));

} else {
var statearr_30208_30348 = state_30202__$1;
(statearr_30208_30348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (3))){
var inst_30200 = (state_30202[(2)]);
var state_30202__$1 = state_30202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30202__$1,inst_30200);
} else {
if((state_val_30203 === (2))){
var state_30202__$1 = state_30202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30202__$1,(4),jobs);
} else {
if((state_val_30203 === (1))){
var state_30202__$1 = state_30202;
var statearr_30209_30349 = state_30202__$1;
(statearr_30209_30349[(2)] = null);

(statearr_30209_30349[(1)] = (2));


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
});})(__30331,c__18197__auto___30343,G__30162_30332,n__16401__auto___30330,jobs,results,process,async))
;
return ((function (__30331,switch__18141__auto__,c__18197__auto___30343,G__30162_30332,n__16401__auto___30330,jobs,results,process,async){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_30213 = [null,null,null,null,null,null,null];
(statearr_30213[(0)] = state_machine__18142__auto__);

(statearr_30213[(1)] = (1));

return statearr_30213;
});
var state_machine__18142__auto____1 = (function (state_30202){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_30202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e30214){if((e30214 instanceof Object)){
var ex__18145__auto__ = e30214;
var statearr_30215_30350 = state_30202;
(statearr_30215_30350[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30351 = state_30202;
state_30202 = G__30351;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_30202){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_30202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(__30331,switch__18141__auto__,c__18197__auto___30343,G__30162_30332,n__16401__auto___30330,jobs,results,process,async))
})();
var state__18199__auto__ = (function (){var statearr_30216 = f__18198__auto__.call(null);
(statearr_30216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___30343);

return statearr_30216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(__30331,c__18197__auto___30343,G__30162_30332,n__16401__auto___30330,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30352 = (__30331 + (1));
__30331 = G__30352;
continue;
} else {
}
break;
}

var c__18197__auto___30353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___30353,jobs,results,process,async){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___30353,jobs,results,process,async){
return (function (state_30238){
var state_val_30239 = (state_30238[(1)]);
if((state_val_30239 === (9))){
var inst_30231 = (state_30238[(2)]);
var state_30238__$1 = (function (){var statearr_30240 = state_30238;
(statearr_30240[(7)] = inst_30231);

return statearr_30240;
})();
var statearr_30241_30354 = state_30238__$1;
(statearr_30241_30354[(2)] = null);

(statearr_30241_30354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (8))){
var inst_30224 = (state_30238[(8)]);
var inst_30229 = (state_30238[(2)]);
var state_30238__$1 = (function (){var statearr_30242 = state_30238;
(statearr_30242[(9)] = inst_30229);

return statearr_30242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30238__$1,(9),results,inst_30224);
} else {
if((state_val_30239 === (7))){
var inst_30234 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30243_30355 = state_30238__$1;
(statearr_30243_30355[(2)] = inst_30234);

(statearr_30243_30355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (6))){
var inst_30219 = (state_30238[(10)]);
var inst_30224 = (state_30238[(8)]);
var inst_30224__$1 = cljs.core.async.chan.call(null,(1));
var inst_30225 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30226 = [inst_30219,inst_30224__$1];
var inst_30227 = (new cljs.core.PersistentVector(null,2,(5),inst_30225,inst_30226,null));
var state_30238__$1 = (function (){var statearr_30244 = state_30238;
(statearr_30244[(8)] = inst_30224__$1);

return statearr_30244;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30238__$1,(8),jobs,inst_30227);
} else {
if((state_val_30239 === (5))){
var inst_30222 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30238__$1 = state_30238;
var statearr_30245_30356 = state_30238__$1;
(statearr_30245_30356[(2)] = inst_30222);

(statearr_30245_30356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (4))){
var inst_30219 = (state_30238[(10)]);
var inst_30219__$1 = (state_30238[(2)]);
var inst_30220 = (inst_30219__$1 == null);
var state_30238__$1 = (function (){var statearr_30246 = state_30238;
(statearr_30246[(10)] = inst_30219__$1);

return statearr_30246;
})();
if(cljs.core.truth_(inst_30220)){
var statearr_30247_30357 = state_30238__$1;
(statearr_30247_30357[(1)] = (5));

} else {
var statearr_30248_30358 = state_30238__$1;
(statearr_30248_30358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (3))){
var inst_30236 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30238__$1,inst_30236);
} else {
if((state_val_30239 === (2))){
var state_30238__$1 = state_30238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30238__$1,(4),from);
} else {
if((state_val_30239 === (1))){
var state_30238__$1 = state_30238;
var statearr_30249_30359 = state_30238__$1;
(statearr_30249_30359[(2)] = null);

(statearr_30249_30359[(1)] = (2));


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
});})(c__18197__auto___30353,jobs,results,process,async))
;
return ((function (switch__18141__auto__,c__18197__auto___30353,jobs,results,process,async){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_30253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30253[(0)] = state_machine__18142__auto__);

(statearr_30253[(1)] = (1));

return statearr_30253;
});
var state_machine__18142__auto____1 = (function (state_30238){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_30238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e30254){if((e30254 instanceof Object)){
var ex__18145__auto__ = e30254;
var statearr_30255_30360 = state_30238;
(statearr_30255_30360[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30361 = state_30238;
state_30238 = G__30361;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_30238){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_30238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___30353,jobs,results,process,async))
})();
var state__18199__auto__ = (function (){var statearr_30256 = f__18198__auto__.call(null);
(statearr_30256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___30353);

return statearr_30256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___30353,jobs,results,process,async))
);


var c__18197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto__,jobs,results,process,async){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto__,jobs,results,process,async){
return (function (state_30294){
var state_val_30295 = (state_30294[(1)]);
if((state_val_30295 === (7))){
var inst_30290 = (state_30294[(2)]);
var state_30294__$1 = state_30294;
var statearr_30296_30362 = state_30294__$1;
(statearr_30296_30362[(2)] = inst_30290);

(statearr_30296_30362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (20))){
var state_30294__$1 = state_30294;
var statearr_30297_30363 = state_30294__$1;
(statearr_30297_30363[(2)] = null);

(statearr_30297_30363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (1))){
var state_30294__$1 = state_30294;
var statearr_30298_30364 = state_30294__$1;
(statearr_30298_30364[(2)] = null);

(statearr_30298_30364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (4))){
var inst_30259 = (state_30294[(7)]);
var inst_30259__$1 = (state_30294[(2)]);
var inst_30260 = (inst_30259__$1 == null);
var state_30294__$1 = (function (){var statearr_30299 = state_30294;
(statearr_30299[(7)] = inst_30259__$1);

return statearr_30299;
})();
if(cljs.core.truth_(inst_30260)){
var statearr_30300_30365 = state_30294__$1;
(statearr_30300_30365[(1)] = (5));

} else {
var statearr_30301_30366 = state_30294__$1;
(statearr_30301_30366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (15))){
var inst_30272 = (state_30294[(8)]);
var state_30294__$1 = state_30294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30294__$1,(18),to,inst_30272);
} else {
if((state_val_30295 === (21))){
var inst_30285 = (state_30294[(2)]);
var state_30294__$1 = state_30294;
var statearr_30302_30367 = state_30294__$1;
(statearr_30302_30367[(2)] = inst_30285);

(statearr_30302_30367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (13))){
var inst_30287 = (state_30294[(2)]);
var state_30294__$1 = (function (){var statearr_30303 = state_30294;
(statearr_30303[(9)] = inst_30287);

return statearr_30303;
})();
var statearr_30304_30368 = state_30294__$1;
(statearr_30304_30368[(2)] = null);

(statearr_30304_30368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (6))){
var inst_30259 = (state_30294[(7)]);
var state_30294__$1 = state_30294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30294__$1,(11),inst_30259);
} else {
if((state_val_30295 === (17))){
var inst_30280 = (state_30294[(2)]);
var state_30294__$1 = state_30294;
if(cljs.core.truth_(inst_30280)){
var statearr_30305_30369 = state_30294__$1;
(statearr_30305_30369[(1)] = (19));

} else {
var statearr_30306_30370 = state_30294__$1;
(statearr_30306_30370[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (3))){
var inst_30292 = (state_30294[(2)]);
var state_30294__$1 = state_30294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30294__$1,inst_30292);
} else {
if((state_val_30295 === (12))){
var inst_30269 = (state_30294[(10)]);
var state_30294__$1 = state_30294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30294__$1,(14),inst_30269);
} else {
if((state_val_30295 === (2))){
var state_30294__$1 = state_30294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30294__$1,(4),results);
} else {
if((state_val_30295 === (19))){
var state_30294__$1 = state_30294;
var statearr_30307_30371 = state_30294__$1;
(statearr_30307_30371[(2)] = null);

(statearr_30307_30371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (11))){
var inst_30269 = (state_30294[(2)]);
var state_30294__$1 = (function (){var statearr_30308 = state_30294;
(statearr_30308[(10)] = inst_30269);

return statearr_30308;
})();
var statearr_30309_30372 = state_30294__$1;
(statearr_30309_30372[(2)] = null);

(statearr_30309_30372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (9))){
var state_30294__$1 = state_30294;
var statearr_30310_30373 = state_30294__$1;
(statearr_30310_30373[(2)] = null);

(statearr_30310_30373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (5))){
var state_30294__$1 = state_30294;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30311_30374 = state_30294__$1;
(statearr_30311_30374[(1)] = (8));

} else {
var statearr_30312_30375 = state_30294__$1;
(statearr_30312_30375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (14))){
var inst_30272 = (state_30294[(8)]);
var inst_30274 = (state_30294[(11)]);
var inst_30272__$1 = (state_30294[(2)]);
var inst_30273 = (inst_30272__$1 == null);
var inst_30274__$1 = cljs.core.not.call(null,inst_30273);
var state_30294__$1 = (function (){var statearr_30313 = state_30294;
(statearr_30313[(8)] = inst_30272__$1);

(statearr_30313[(11)] = inst_30274__$1);

return statearr_30313;
})();
if(inst_30274__$1){
var statearr_30314_30376 = state_30294__$1;
(statearr_30314_30376[(1)] = (15));

} else {
var statearr_30315_30377 = state_30294__$1;
(statearr_30315_30377[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (16))){
var inst_30274 = (state_30294[(11)]);
var state_30294__$1 = state_30294;
var statearr_30316_30378 = state_30294__$1;
(statearr_30316_30378[(2)] = inst_30274);

(statearr_30316_30378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (10))){
var inst_30266 = (state_30294[(2)]);
var state_30294__$1 = state_30294;
var statearr_30317_30379 = state_30294__$1;
(statearr_30317_30379[(2)] = inst_30266);

(statearr_30317_30379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (18))){
var inst_30277 = (state_30294[(2)]);
var state_30294__$1 = state_30294;
var statearr_30318_30380 = state_30294__$1;
(statearr_30318_30380[(2)] = inst_30277);

(statearr_30318_30380[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (8))){
var inst_30263 = cljs.core.async.close_BANG_.call(null,to);
var state_30294__$1 = state_30294;
var statearr_30319_30381 = state_30294__$1;
(statearr_30319_30381[(2)] = inst_30263);

(statearr_30319_30381[(1)] = (10));


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
});})(c__18197__auto__,jobs,results,process,async))
;
return ((function (switch__18141__auto__,c__18197__auto__,jobs,results,process,async){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_30323 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30323[(0)] = state_machine__18142__auto__);

(statearr_30323[(1)] = (1));

return statearr_30323;
});
var state_machine__18142__auto____1 = (function (state_30294){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_30294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e30324){if((e30324 instanceof Object)){
var ex__18145__auto__ = e30324;
var statearr_30325_30382 = state_30294;
(statearr_30325_30382[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30383 = state_30294;
state_30294 = G__30383;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_30294){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_30294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto__,jobs,results,process,async))
})();
var state__18199__auto__ = (function (){var statearr_30326 = f__18198__auto__.call(null);
(statearr_30326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto__);

return statearr_30326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto__,jobs,results,process,async))
);

return c__18197__auto__;
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
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
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
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
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
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18197__auto___30484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___30484,tc,fc){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___30484,tc,fc){
return (function (state_30459){
var state_val_30460 = (state_30459[(1)]);
if((state_val_30460 === (7))){
var inst_30455 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
var statearr_30461_30485 = state_30459__$1;
(statearr_30461_30485[(2)] = inst_30455);

(statearr_30461_30485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (1))){
var state_30459__$1 = state_30459;
var statearr_30462_30486 = state_30459__$1;
(statearr_30462_30486[(2)] = null);

(statearr_30462_30486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (4))){
var inst_30436 = (state_30459[(7)]);
var inst_30436__$1 = (state_30459[(2)]);
var inst_30437 = (inst_30436__$1 == null);
var state_30459__$1 = (function (){var statearr_30463 = state_30459;
(statearr_30463[(7)] = inst_30436__$1);

return statearr_30463;
})();
if(cljs.core.truth_(inst_30437)){
var statearr_30464_30487 = state_30459__$1;
(statearr_30464_30487[(1)] = (5));

} else {
var statearr_30465_30488 = state_30459__$1;
(statearr_30465_30488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (13))){
var state_30459__$1 = state_30459;
var statearr_30466_30489 = state_30459__$1;
(statearr_30466_30489[(2)] = null);

(statearr_30466_30489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (6))){
var inst_30436 = (state_30459[(7)]);
var inst_30442 = p.call(null,inst_30436);
var state_30459__$1 = state_30459;
if(cljs.core.truth_(inst_30442)){
var statearr_30467_30490 = state_30459__$1;
(statearr_30467_30490[(1)] = (9));

} else {
var statearr_30468_30491 = state_30459__$1;
(statearr_30468_30491[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (3))){
var inst_30457 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30459__$1,inst_30457);
} else {
if((state_val_30460 === (12))){
var state_30459__$1 = state_30459;
var statearr_30469_30492 = state_30459__$1;
(statearr_30469_30492[(2)] = null);

(statearr_30469_30492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (2))){
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30459__$1,(4),ch);
} else {
if((state_val_30460 === (11))){
var inst_30436 = (state_30459[(7)]);
var inst_30446 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30459__$1,(8),inst_30446,inst_30436);
} else {
if((state_val_30460 === (9))){
var state_30459__$1 = state_30459;
var statearr_30470_30493 = state_30459__$1;
(statearr_30470_30493[(2)] = tc);

(statearr_30470_30493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (5))){
var inst_30439 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30440 = cljs.core.async.close_BANG_.call(null,fc);
var state_30459__$1 = (function (){var statearr_30471 = state_30459;
(statearr_30471[(8)] = inst_30439);

return statearr_30471;
})();
var statearr_30472_30494 = state_30459__$1;
(statearr_30472_30494[(2)] = inst_30440);

(statearr_30472_30494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (14))){
var inst_30453 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
var statearr_30473_30495 = state_30459__$1;
(statearr_30473_30495[(2)] = inst_30453);

(statearr_30473_30495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (10))){
var state_30459__$1 = state_30459;
var statearr_30474_30496 = state_30459__$1;
(statearr_30474_30496[(2)] = fc);

(statearr_30474_30496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (8))){
var inst_30448 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
if(cljs.core.truth_(inst_30448)){
var statearr_30475_30497 = state_30459__$1;
(statearr_30475_30497[(1)] = (12));

} else {
var statearr_30476_30498 = state_30459__$1;
(statearr_30476_30498[(1)] = (13));

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
});})(c__18197__auto___30484,tc,fc))
;
return ((function (switch__18141__auto__,c__18197__auto___30484,tc,fc){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_30480 = [null,null,null,null,null,null,null,null,null];
(statearr_30480[(0)] = state_machine__18142__auto__);

(statearr_30480[(1)] = (1));

return statearr_30480;
});
var state_machine__18142__auto____1 = (function (state_30459){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_30459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e30481){if((e30481 instanceof Object)){
var ex__18145__auto__ = e30481;
var statearr_30482_30499 = state_30459;
(statearr_30482_30499[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30500 = state_30459;
state_30459 = G__30500;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_30459){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_30459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___30484,tc,fc))
})();
var state__18199__auto__ = (function (){var statearr_30483 = f__18198__auto__.call(null);
(statearr_30483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___30484);

return statearr_30483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___30484,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__18197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto__){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto__){
return (function (state_30547){
var state_val_30548 = (state_30547[(1)]);
if((state_val_30548 === (7))){
var inst_30543 = (state_30547[(2)]);
var state_30547__$1 = state_30547;
var statearr_30549_30565 = state_30547__$1;
(statearr_30549_30565[(2)] = inst_30543);

(statearr_30549_30565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (6))){
var inst_30536 = (state_30547[(7)]);
var inst_30533 = (state_30547[(8)]);
var inst_30540 = f.call(null,inst_30533,inst_30536);
var inst_30533__$1 = inst_30540;
var state_30547__$1 = (function (){var statearr_30550 = state_30547;
(statearr_30550[(8)] = inst_30533__$1);

return statearr_30550;
})();
var statearr_30551_30566 = state_30547__$1;
(statearr_30551_30566[(2)] = null);

(statearr_30551_30566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (5))){
var inst_30533 = (state_30547[(8)]);
var state_30547__$1 = state_30547;
var statearr_30552_30567 = state_30547__$1;
(statearr_30552_30567[(2)] = inst_30533);

(statearr_30552_30567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (4))){
var inst_30536 = (state_30547[(7)]);
var inst_30536__$1 = (state_30547[(2)]);
var inst_30537 = (inst_30536__$1 == null);
var state_30547__$1 = (function (){var statearr_30553 = state_30547;
(statearr_30553[(7)] = inst_30536__$1);

return statearr_30553;
})();
if(cljs.core.truth_(inst_30537)){
var statearr_30554_30568 = state_30547__$1;
(statearr_30554_30568[(1)] = (5));

} else {
var statearr_30555_30569 = state_30547__$1;
(statearr_30555_30569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (3))){
var inst_30545 = (state_30547[(2)]);
var state_30547__$1 = state_30547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30547__$1,inst_30545);
} else {
if((state_val_30548 === (2))){
var state_30547__$1 = state_30547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30547__$1,(4),ch);
} else {
if((state_val_30548 === (1))){
var inst_30533 = init;
var state_30547__$1 = (function (){var statearr_30556 = state_30547;
(statearr_30556[(8)] = inst_30533);

return statearr_30556;
})();
var statearr_30557_30570 = state_30547__$1;
(statearr_30557_30570[(2)] = null);

(statearr_30557_30570[(1)] = (2));


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
});})(c__18197__auto__))
;
return ((function (switch__18141__auto__,c__18197__auto__){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_30561 = [null,null,null,null,null,null,null,null,null];
(statearr_30561[(0)] = state_machine__18142__auto__);

(statearr_30561[(1)] = (1));

return statearr_30561;
});
var state_machine__18142__auto____1 = (function (state_30547){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_30547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e30562){if((e30562 instanceof Object)){
var ex__18145__auto__ = e30562;
var statearr_30563_30571 = state_30547;
(statearr_30563_30571[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30572 = state_30547;
state_30547 = G__30572;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_30547){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_30547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto__))
})();
var state__18199__auto__ = (function (){var statearr_30564 = f__18198__auto__.call(null);
(statearr_30564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto__);

return statearr_30564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto__))
);

return c__18197__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__18197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto__){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto__){
return (function (state_30646){
var state_val_30647 = (state_30646[(1)]);
if((state_val_30647 === (7))){
var inst_30628 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
var statearr_30648_30671 = state_30646__$1;
(statearr_30648_30671[(2)] = inst_30628);

(statearr_30648_30671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (1))){
var inst_30622 = cljs.core.seq.call(null,coll);
var inst_30623 = inst_30622;
var state_30646__$1 = (function (){var statearr_30649 = state_30646;
(statearr_30649[(7)] = inst_30623);

return statearr_30649;
})();
var statearr_30650_30672 = state_30646__$1;
(statearr_30650_30672[(2)] = null);

(statearr_30650_30672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (4))){
var inst_30623 = (state_30646[(7)]);
var inst_30626 = cljs.core.first.call(null,inst_30623);
var state_30646__$1 = state_30646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30646__$1,(7),ch,inst_30626);
} else {
if((state_val_30647 === (13))){
var inst_30640 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
var statearr_30651_30673 = state_30646__$1;
(statearr_30651_30673[(2)] = inst_30640);

(statearr_30651_30673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (6))){
var inst_30631 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
if(cljs.core.truth_(inst_30631)){
var statearr_30652_30674 = state_30646__$1;
(statearr_30652_30674[(1)] = (8));

} else {
var statearr_30653_30675 = state_30646__$1;
(statearr_30653_30675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (3))){
var inst_30644 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30646__$1,inst_30644);
} else {
if((state_val_30647 === (12))){
var state_30646__$1 = state_30646;
var statearr_30654_30676 = state_30646__$1;
(statearr_30654_30676[(2)] = null);

(statearr_30654_30676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (2))){
var inst_30623 = (state_30646[(7)]);
var state_30646__$1 = state_30646;
if(cljs.core.truth_(inst_30623)){
var statearr_30655_30677 = state_30646__$1;
(statearr_30655_30677[(1)] = (4));

} else {
var statearr_30656_30678 = state_30646__$1;
(statearr_30656_30678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (11))){
var inst_30637 = cljs.core.async.close_BANG_.call(null,ch);
var state_30646__$1 = state_30646;
var statearr_30657_30679 = state_30646__$1;
(statearr_30657_30679[(2)] = inst_30637);

(statearr_30657_30679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (9))){
var state_30646__$1 = state_30646;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30658_30680 = state_30646__$1;
(statearr_30658_30680[(1)] = (11));

} else {
var statearr_30659_30681 = state_30646__$1;
(statearr_30659_30681[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (5))){
var inst_30623 = (state_30646[(7)]);
var state_30646__$1 = state_30646;
var statearr_30660_30682 = state_30646__$1;
(statearr_30660_30682[(2)] = inst_30623);

(statearr_30660_30682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (10))){
var inst_30642 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
var statearr_30661_30683 = state_30646__$1;
(statearr_30661_30683[(2)] = inst_30642);

(statearr_30661_30683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (8))){
var inst_30623 = (state_30646[(7)]);
var inst_30633 = cljs.core.next.call(null,inst_30623);
var inst_30623__$1 = inst_30633;
var state_30646__$1 = (function (){var statearr_30662 = state_30646;
(statearr_30662[(7)] = inst_30623__$1);

return statearr_30662;
})();
var statearr_30663_30684 = state_30646__$1;
(statearr_30663_30684[(2)] = null);

(statearr_30663_30684[(1)] = (2));


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
});})(c__18197__auto__))
;
return ((function (switch__18141__auto__,c__18197__auto__){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_30667 = [null,null,null,null,null,null,null,null];
(statearr_30667[(0)] = state_machine__18142__auto__);

(statearr_30667[(1)] = (1));

return statearr_30667;
});
var state_machine__18142__auto____1 = (function (state_30646){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_30646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e30668){if((e30668 instanceof Object)){
var ex__18145__auto__ = e30668;
var statearr_30669_30685 = state_30646;
(statearr_30669_30685[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30686 = state_30646;
state_30646 = G__30686;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_30646){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_30646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto__))
})();
var state__18199__auto__ = (function (){var statearr_30670 = f__18198__auto__.call(null);
(statearr_30670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto__);

return statearr_30670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto__))
);

return c__18197__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj30688 = {};
return obj30688;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__15502__auto__ = _;
if(and__15502__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__15502__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16158__auto__ = (((_ == null))?null:_);
return (function (){var or__15514__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj30690 = {};
return obj30690;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__15502__auto__ = m;
if(and__15502__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__15502__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16158__auto__ = (((m == null))?null:m);
return (function (){var or__15514__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__15502__auto__ = m;
if(and__15502__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__15502__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16158__auto__ = (((m == null))?null:m);
return (function (){var or__15514__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__15502__auto__ = m;
if(and__15502__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__15502__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16158__auto__ = (((m == null))?null:m);
return (function (){var or__15514__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
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
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t30912 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30912 = (function (cs,ch,mult,meta30913){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30913 = meta30913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30912.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30912.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30912.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30912.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30912.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30914){
var self__ = this;
var _30914__$1 = this;
return self__.meta30913;
});})(cs))
;

cljs.core.async.t30912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30914,meta30913__$1){
var self__ = this;
var _30914__$1 = this;
return (new cljs.core.async.t30912(self__.cs,self__.ch,self__.mult,meta30913__$1));
});})(cs))
;

cljs.core.async.t30912.cljs$lang$type = true;

cljs.core.async.t30912.cljs$lang$ctorStr = "cljs.core.async/t30912";

cljs.core.async.t30912.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16101__auto__,writer__16102__auto__,opt__16103__auto__){
return cljs.core._write.call(null,writer__16102__auto__,"cljs.core.async/t30912");
});})(cs))
;

cljs.core.async.__GT_t30912 = ((function (cs){
return (function __GT_t30912(cs__$1,ch__$1,mult__$1,meta30913){
return (new cljs.core.async.t30912(cs__$1,ch__$1,mult__$1,meta30913));
});})(cs))
;

}

return (new cljs.core.async.t30912(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18197__auto___31133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___31133,cs,m,dchan,dctr,done){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___31133,cs,m,dchan,dctr,done){
return (function (state_31045){
var state_val_31046 = (state_31045[(1)]);
if((state_val_31046 === (7))){
var inst_31041 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31047_31134 = state_31045__$1;
(statearr_31047_31134[(2)] = inst_31041);

(statearr_31047_31134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (20))){
var inst_30946 = (state_31045[(7)]);
var inst_30956 = cljs.core.first.call(null,inst_30946);
var inst_30957 = cljs.core.nth.call(null,inst_30956,(0),null);
var inst_30958 = cljs.core.nth.call(null,inst_30956,(1),null);
var state_31045__$1 = (function (){var statearr_31048 = state_31045;
(statearr_31048[(8)] = inst_30957);

return statearr_31048;
})();
if(cljs.core.truth_(inst_30958)){
var statearr_31049_31135 = state_31045__$1;
(statearr_31049_31135[(1)] = (22));

} else {
var statearr_31050_31136 = state_31045__$1;
(statearr_31050_31136[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (27))){
var inst_30986 = (state_31045[(9)]);
var inst_30917 = (state_31045[(10)]);
var inst_30988 = (state_31045[(11)]);
var inst_30993 = (state_31045[(12)]);
var inst_30993__$1 = cljs.core._nth.call(null,inst_30986,inst_30988);
var inst_30994 = cljs.core.async.put_BANG_.call(null,inst_30993__$1,inst_30917,done);
var state_31045__$1 = (function (){var statearr_31051 = state_31045;
(statearr_31051[(12)] = inst_30993__$1);

return statearr_31051;
})();
if(cljs.core.truth_(inst_30994)){
var statearr_31052_31137 = state_31045__$1;
(statearr_31052_31137[(1)] = (30));

} else {
var statearr_31053_31138 = state_31045__$1;
(statearr_31053_31138[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (1))){
var state_31045__$1 = state_31045;
var statearr_31054_31139 = state_31045__$1;
(statearr_31054_31139[(2)] = null);

(statearr_31054_31139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (24))){
var inst_30946 = (state_31045[(7)]);
var inst_30963 = (state_31045[(2)]);
var inst_30964 = cljs.core.next.call(null,inst_30946);
var inst_30926 = inst_30964;
var inst_30927 = null;
var inst_30928 = (0);
var inst_30929 = (0);
var state_31045__$1 = (function (){var statearr_31055 = state_31045;
(statearr_31055[(13)] = inst_30929);

(statearr_31055[(14)] = inst_30927);

(statearr_31055[(15)] = inst_30963);

(statearr_31055[(16)] = inst_30928);

(statearr_31055[(17)] = inst_30926);

return statearr_31055;
})();
var statearr_31056_31140 = state_31045__$1;
(statearr_31056_31140[(2)] = null);

(statearr_31056_31140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (39))){
var state_31045__$1 = state_31045;
var statearr_31060_31141 = state_31045__$1;
(statearr_31060_31141[(2)] = null);

(statearr_31060_31141[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (4))){
var inst_30917 = (state_31045[(10)]);
var inst_30917__$1 = (state_31045[(2)]);
var inst_30918 = (inst_30917__$1 == null);
var state_31045__$1 = (function (){var statearr_31061 = state_31045;
(statearr_31061[(10)] = inst_30917__$1);

return statearr_31061;
})();
if(cljs.core.truth_(inst_30918)){
var statearr_31062_31142 = state_31045__$1;
(statearr_31062_31142[(1)] = (5));

} else {
var statearr_31063_31143 = state_31045__$1;
(statearr_31063_31143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (15))){
var inst_30929 = (state_31045[(13)]);
var inst_30927 = (state_31045[(14)]);
var inst_30928 = (state_31045[(16)]);
var inst_30926 = (state_31045[(17)]);
var inst_30942 = (state_31045[(2)]);
var inst_30943 = (inst_30929 + (1));
var tmp31057 = inst_30927;
var tmp31058 = inst_30928;
var tmp31059 = inst_30926;
var inst_30926__$1 = tmp31059;
var inst_30927__$1 = tmp31057;
var inst_30928__$1 = tmp31058;
var inst_30929__$1 = inst_30943;
var state_31045__$1 = (function (){var statearr_31064 = state_31045;
(statearr_31064[(13)] = inst_30929__$1);

(statearr_31064[(14)] = inst_30927__$1);

(statearr_31064[(16)] = inst_30928__$1);

(statearr_31064[(17)] = inst_30926__$1);

(statearr_31064[(18)] = inst_30942);

return statearr_31064;
})();
var statearr_31065_31144 = state_31045__$1;
(statearr_31065_31144[(2)] = null);

(statearr_31065_31144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (21))){
var inst_30967 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31069_31145 = state_31045__$1;
(statearr_31069_31145[(2)] = inst_30967);

(statearr_31069_31145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (31))){
var inst_30993 = (state_31045[(12)]);
var inst_30997 = done.call(null,null);
var inst_30998 = cljs.core.async.untap_STAR_.call(null,m,inst_30993);
var state_31045__$1 = (function (){var statearr_31070 = state_31045;
(statearr_31070[(19)] = inst_30997);

return statearr_31070;
})();
var statearr_31071_31146 = state_31045__$1;
(statearr_31071_31146[(2)] = inst_30998);

(statearr_31071_31146[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (32))){
var inst_30986 = (state_31045[(9)]);
var inst_30985 = (state_31045[(20)]);
var inst_30987 = (state_31045[(21)]);
var inst_30988 = (state_31045[(11)]);
var inst_31000 = (state_31045[(2)]);
var inst_31001 = (inst_30988 + (1));
var tmp31066 = inst_30986;
var tmp31067 = inst_30985;
var tmp31068 = inst_30987;
var inst_30985__$1 = tmp31067;
var inst_30986__$1 = tmp31066;
var inst_30987__$1 = tmp31068;
var inst_30988__$1 = inst_31001;
var state_31045__$1 = (function (){var statearr_31072 = state_31045;
(statearr_31072[(9)] = inst_30986__$1);

(statearr_31072[(20)] = inst_30985__$1);

(statearr_31072[(22)] = inst_31000);

(statearr_31072[(21)] = inst_30987__$1);

(statearr_31072[(11)] = inst_30988__$1);

return statearr_31072;
})();
var statearr_31073_31147 = state_31045__$1;
(statearr_31073_31147[(2)] = null);

(statearr_31073_31147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (40))){
var inst_31013 = (state_31045[(23)]);
var inst_31017 = done.call(null,null);
var inst_31018 = cljs.core.async.untap_STAR_.call(null,m,inst_31013);
var state_31045__$1 = (function (){var statearr_31074 = state_31045;
(statearr_31074[(24)] = inst_31017);

return statearr_31074;
})();
var statearr_31075_31148 = state_31045__$1;
(statearr_31075_31148[(2)] = inst_31018);

(statearr_31075_31148[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (33))){
var inst_31004 = (state_31045[(25)]);
var inst_31006 = cljs.core.chunked_seq_QMARK_.call(null,inst_31004);
var state_31045__$1 = state_31045;
if(inst_31006){
var statearr_31076_31149 = state_31045__$1;
(statearr_31076_31149[(1)] = (36));

} else {
var statearr_31077_31150 = state_31045__$1;
(statearr_31077_31150[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (13))){
var inst_30936 = (state_31045[(26)]);
var inst_30939 = cljs.core.async.close_BANG_.call(null,inst_30936);
var state_31045__$1 = state_31045;
var statearr_31078_31151 = state_31045__$1;
(statearr_31078_31151[(2)] = inst_30939);

(statearr_31078_31151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (22))){
var inst_30957 = (state_31045[(8)]);
var inst_30960 = cljs.core.async.close_BANG_.call(null,inst_30957);
var state_31045__$1 = state_31045;
var statearr_31079_31152 = state_31045__$1;
(statearr_31079_31152[(2)] = inst_30960);

(statearr_31079_31152[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (36))){
var inst_31004 = (state_31045[(25)]);
var inst_31008 = cljs.core.chunk_first.call(null,inst_31004);
var inst_31009 = cljs.core.chunk_rest.call(null,inst_31004);
var inst_31010 = cljs.core.count.call(null,inst_31008);
var inst_30985 = inst_31009;
var inst_30986 = inst_31008;
var inst_30987 = inst_31010;
var inst_30988 = (0);
var state_31045__$1 = (function (){var statearr_31080 = state_31045;
(statearr_31080[(9)] = inst_30986);

(statearr_31080[(20)] = inst_30985);

(statearr_31080[(21)] = inst_30987);

(statearr_31080[(11)] = inst_30988);

return statearr_31080;
})();
var statearr_31081_31153 = state_31045__$1;
(statearr_31081_31153[(2)] = null);

(statearr_31081_31153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (41))){
var inst_31004 = (state_31045[(25)]);
var inst_31020 = (state_31045[(2)]);
var inst_31021 = cljs.core.next.call(null,inst_31004);
var inst_30985 = inst_31021;
var inst_30986 = null;
var inst_30987 = (0);
var inst_30988 = (0);
var state_31045__$1 = (function (){var statearr_31082 = state_31045;
(statearr_31082[(9)] = inst_30986);

(statearr_31082[(20)] = inst_30985);

(statearr_31082[(21)] = inst_30987);

(statearr_31082[(27)] = inst_31020);

(statearr_31082[(11)] = inst_30988);

return statearr_31082;
})();
var statearr_31083_31154 = state_31045__$1;
(statearr_31083_31154[(2)] = null);

(statearr_31083_31154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (43))){
var state_31045__$1 = state_31045;
var statearr_31084_31155 = state_31045__$1;
(statearr_31084_31155[(2)] = null);

(statearr_31084_31155[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (29))){
var inst_31029 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31085_31156 = state_31045__$1;
(statearr_31085_31156[(2)] = inst_31029);

(statearr_31085_31156[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (44))){
var inst_31038 = (state_31045[(2)]);
var state_31045__$1 = (function (){var statearr_31086 = state_31045;
(statearr_31086[(28)] = inst_31038);

return statearr_31086;
})();
var statearr_31087_31157 = state_31045__$1;
(statearr_31087_31157[(2)] = null);

(statearr_31087_31157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (6))){
var inst_30977 = (state_31045[(29)]);
var inst_30976 = cljs.core.deref.call(null,cs);
var inst_30977__$1 = cljs.core.keys.call(null,inst_30976);
var inst_30978 = cljs.core.count.call(null,inst_30977__$1);
var inst_30979 = cljs.core.reset_BANG_.call(null,dctr,inst_30978);
var inst_30984 = cljs.core.seq.call(null,inst_30977__$1);
var inst_30985 = inst_30984;
var inst_30986 = null;
var inst_30987 = (0);
var inst_30988 = (0);
var state_31045__$1 = (function (){var statearr_31088 = state_31045;
(statearr_31088[(29)] = inst_30977__$1);

(statearr_31088[(9)] = inst_30986);

(statearr_31088[(20)] = inst_30985);

(statearr_31088[(21)] = inst_30987);

(statearr_31088[(30)] = inst_30979);

(statearr_31088[(11)] = inst_30988);

return statearr_31088;
})();
var statearr_31089_31158 = state_31045__$1;
(statearr_31089_31158[(2)] = null);

(statearr_31089_31158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (28))){
var inst_31004 = (state_31045[(25)]);
var inst_30985 = (state_31045[(20)]);
var inst_31004__$1 = cljs.core.seq.call(null,inst_30985);
var state_31045__$1 = (function (){var statearr_31090 = state_31045;
(statearr_31090[(25)] = inst_31004__$1);

return statearr_31090;
})();
if(inst_31004__$1){
var statearr_31091_31159 = state_31045__$1;
(statearr_31091_31159[(1)] = (33));

} else {
var statearr_31092_31160 = state_31045__$1;
(statearr_31092_31160[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (25))){
var inst_30987 = (state_31045[(21)]);
var inst_30988 = (state_31045[(11)]);
var inst_30990 = (inst_30988 < inst_30987);
var inst_30991 = inst_30990;
var state_31045__$1 = state_31045;
if(cljs.core.truth_(inst_30991)){
var statearr_31093_31161 = state_31045__$1;
(statearr_31093_31161[(1)] = (27));

} else {
var statearr_31094_31162 = state_31045__$1;
(statearr_31094_31162[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (34))){
var state_31045__$1 = state_31045;
var statearr_31095_31163 = state_31045__$1;
(statearr_31095_31163[(2)] = null);

(statearr_31095_31163[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (17))){
var state_31045__$1 = state_31045;
var statearr_31096_31164 = state_31045__$1;
(statearr_31096_31164[(2)] = null);

(statearr_31096_31164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (3))){
var inst_31043 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31045__$1,inst_31043);
} else {
if((state_val_31046 === (12))){
var inst_30972 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31097_31165 = state_31045__$1;
(statearr_31097_31165[(2)] = inst_30972);

(statearr_31097_31165[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (2))){
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31045__$1,(4),ch);
} else {
if((state_val_31046 === (23))){
var state_31045__$1 = state_31045;
var statearr_31098_31166 = state_31045__$1;
(statearr_31098_31166[(2)] = null);

(statearr_31098_31166[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (35))){
var inst_31027 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31099_31167 = state_31045__$1;
(statearr_31099_31167[(2)] = inst_31027);

(statearr_31099_31167[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (19))){
var inst_30946 = (state_31045[(7)]);
var inst_30950 = cljs.core.chunk_first.call(null,inst_30946);
var inst_30951 = cljs.core.chunk_rest.call(null,inst_30946);
var inst_30952 = cljs.core.count.call(null,inst_30950);
var inst_30926 = inst_30951;
var inst_30927 = inst_30950;
var inst_30928 = inst_30952;
var inst_30929 = (0);
var state_31045__$1 = (function (){var statearr_31100 = state_31045;
(statearr_31100[(13)] = inst_30929);

(statearr_31100[(14)] = inst_30927);

(statearr_31100[(16)] = inst_30928);

(statearr_31100[(17)] = inst_30926);

return statearr_31100;
})();
var statearr_31101_31168 = state_31045__$1;
(statearr_31101_31168[(2)] = null);

(statearr_31101_31168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (11))){
var inst_30926 = (state_31045[(17)]);
var inst_30946 = (state_31045[(7)]);
var inst_30946__$1 = cljs.core.seq.call(null,inst_30926);
var state_31045__$1 = (function (){var statearr_31102 = state_31045;
(statearr_31102[(7)] = inst_30946__$1);

return statearr_31102;
})();
if(inst_30946__$1){
var statearr_31103_31169 = state_31045__$1;
(statearr_31103_31169[(1)] = (16));

} else {
var statearr_31104_31170 = state_31045__$1;
(statearr_31104_31170[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (9))){
var inst_30974 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31105_31171 = state_31045__$1;
(statearr_31105_31171[(2)] = inst_30974);

(statearr_31105_31171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (5))){
var inst_30924 = cljs.core.deref.call(null,cs);
var inst_30925 = cljs.core.seq.call(null,inst_30924);
var inst_30926 = inst_30925;
var inst_30927 = null;
var inst_30928 = (0);
var inst_30929 = (0);
var state_31045__$1 = (function (){var statearr_31106 = state_31045;
(statearr_31106[(13)] = inst_30929);

(statearr_31106[(14)] = inst_30927);

(statearr_31106[(16)] = inst_30928);

(statearr_31106[(17)] = inst_30926);

return statearr_31106;
})();
var statearr_31107_31172 = state_31045__$1;
(statearr_31107_31172[(2)] = null);

(statearr_31107_31172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (14))){
var state_31045__$1 = state_31045;
var statearr_31108_31173 = state_31045__$1;
(statearr_31108_31173[(2)] = null);

(statearr_31108_31173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (45))){
var inst_31035 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31109_31174 = state_31045__$1;
(statearr_31109_31174[(2)] = inst_31035);

(statearr_31109_31174[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (26))){
var inst_30977 = (state_31045[(29)]);
var inst_31031 = (state_31045[(2)]);
var inst_31032 = cljs.core.seq.call(null,inst_30977);
var state_31045__$1 = (function (){var statearr_31110 = state_31045;
(statearr_31110[(31)] = inst_31031);

return statearr_31110;
})();
if(inst_31032){
var statearr_31111_31175 = state_31045__$1;
(statearr_31111_31175[(1)] = (42));

} else {
var statearr_31112_31176 = state_31045__$1;
(statearr_31112_31176[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (16))){
var inst_30946 = (state_31045[(7)]);
var inst_30948 = cljs.core.chunked_seq_QMARK_.call(null,inst_30946);
var state_31045__$1 = state_31045;
if(inst_30948){
var statearr_31113_31177 = state_31045__$1;
(statearr_31113_31177[(1)] = (19));

} else {
var statearr_31114_31178 = state_31045__$1;
(statearr_31114_31178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (38))){
var inst_31024 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31115_31179 = state_31045__$1;
(statearr_31115_31179[(2)] = inst_31024);

(statearr_31115_31179[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (30))){
var state_31045__$1 = state_31045;
var statearr_31116_31180 = state_31045__$1;
(statearr_31116_31180[(2)] = null);

(statearr_31116_31180[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (10))){
var inst_30929 = (state_31045[(13)]);
var inst_30927 = (state_31045[(14)]);
var inst_30935 = cljs.core._nth.call(null,inst_30927,inst_30929);
var inst_30936 = cljs.core.nth.call(null,inst_30935,(0),null);
var inst_30937 = cljs.core.nth.call(null,inst_30935,(1),null);
var state_31045__$1 = (function (){var statearr_31117 = state_31045;
(statearr_31117[(26)] = inst_30936);

return statearr_31117;
})();
if(cljs.core.truth_(inst_30937)){
var statearr_31118_31181 = state_31045__$1;
(statearr_31118_31181[(1)] = (13));

} else {
var statearr_31119_31182 = state_31045__$1;
(statearr_31119_31182[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (18))){
var inst_30970 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31120_31183 = state_31045__$1;
(statearr_31120_31183[(2)] = inst_30970);

(statearr_31120_31183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (42))){
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31045__$1,(45),dchan);
} else {
if((state_val_31046 === (37))){
var inst_31004 = (state_31045[(25)]);
var inst_31013 = (state_31045[(23)]);
var inst_30917 = (state_31045[(10)]);
var inst_31013__$1 = cljs.core.first.call(null,inst_31004);
var inst_31014 = cljs.core.async.put_BANG_.call(null,inst_31013__$1,inst_30917,done);
var state_31045__$1 = (function (){var statearr_31121 = state_31045;
(statearr_31121[(23)] = inst_31013__$1);

return statearr_31121;
})();
if(cljs.core.truth_(inst_31014)){
var statearr_31122_31184 = state_31045__$1;
(statearr_31122_31184[(1)] = (39));

} else {
var statearr_31123_31185 = state_31045__$1;
(statearr_31123_31185[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (8))){
var inst_30929 = (state_31045[(13)]);
var inst_30928 = (state_31045[(16)]);
var inst_30931 = (inst_30929 < inst_30928);
var inst_30932 = inst_30931;
var state_31045__$1 = state_31045;
if(cljs.core.truth_(inst_30932)){
var statearr_31124_31186 = state_31045__$1;
(statearr_31124_31186[(1)] = (10));

} else {
var statearr_31125_31187 = state_31045__$1;
(statearr_31125_31187[(1)] = (11));

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
});})(c__18197__auto___31133,cs,m,dchan,dctr,done))
;
return ((function (switch__18141__auto__,c__18197__auto___31133,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_31129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31129[(0)] = state_machine__18142__auto__);

(statearr_31129[(1)] = (1));

return statearr_31129;
});
var state_machine__18142__auto____1 = (function (state_31045){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_31045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e31130){if((e31130 instanceof Object)){
var ex__18145__auto__ = e31130;
var statearr_31131_31188 = state_31045;
(statearr_31131_31188[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31189 = state_31045;
state_31045 = G__31189;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_31045){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_31045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___31133,cs,m,dchan,dctr,done))
})();
var state__18199__auto__ = (function (){var statearr_31132 = f__18198__auto__.call(null);
(statearr_31132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___31133);

return statearr_31132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___31133,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj31191 = {};
return obj31191;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__15502__auto__ = m;
if(and__15502__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__15502__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16158__auto__ = (((m == null))?null:m);
return (function (){var or__15514__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__15502__auto__ = m;
if(and__15502__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__15502__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16158__auto__ = (((m == null))?null:m);
return (function (){var or__15514__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__15502__auto__ = m;
if(and__15502__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__15502__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16158__auto__ = (((m == null))?null:m);
return (function (){var or__15514__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__15502__auto__ = m;
if(and__15502__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__15502__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16158__auto__ = (((m == null))?null:m);
return (function (){var or__15514__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__15502__auto__ = m;
if(and__15502__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__15502__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16158__auto__ = (((m == null))?null:m);
return (function (){var or__15514__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__31192){
var map__31197 = p__31192;
var map__31197__$1 = ((cljs.core.seq_QMARK_.call(null,map__31197))?cljs.core.apply.call(null,cljs.core.hash_map,map__31197):map__31197);
var opts = map__31197__$1;
var statearr_31198_31201 = state;
(statearr_31198_31201[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__31197,map__31197__$1,opts){
return (function (val){
var statearr_31199_31202 = state;
(statearr_31199_31202[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31197,map__31197__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_31200_31203 = state;
(statearr_31200_31203[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__31192 = null;
if (arguments.length > 3) {
var G__31204__i = 0, G__31204__a = new Array(arguments.length -  3);
while (G__31204__i < G__31204__a.length) {G__31204__a[G__31204__i] = arguments[G__31204__i + 3]; ++G__31204__i;}
  p__31192 = new cljs.core.IndexedSeq(G__31204__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__31192);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__31205){
var state = cljs.core.first(arglist__31205);
arglist__31205 = cljs.core.next(arglist__31205);
var cont_block = cljs.core.first(arglist__31205);
arglist__31205 = cljs.core.next(arglist__31205);
var ports = cljs.core.first(arglist__31205);
var p__31192 = cljs.core.rest(arglist__31205);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__31192);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
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
cljs.core.async.mix = (function mix(out){
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
if(typeof cljs.core.async.t31325 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31325 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31326){
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
this.meta31326 = meta31326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31325.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31325.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31325.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31325.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31325.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31325.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t31325.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31325.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31327){
var self__ = this;
var _31327__$1 = this;
return self__.meta31326;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31327,meta31326__$1){
var self__ = this;
var _31327__$1 = this;
return (new cljs.core.async.t31325(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31326__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31325.cljs$lang$type = true;

cljs.core.async.t31325.cljs$lang$ctorStr = "cljs.core.async/t31325";

cljs.core.async.t31325.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16101__auto__,writer__16102__auto__,opt__16103__auto__){
return cljs.core._write.call(null,writer__16102__auto__,"cljs.core.async/t31325");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31325 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31325(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31326){
return (new cljs.core.async.t31325(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31326));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31325(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18197__auto___31444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___31444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___31444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31397){
var state_val_31398 = (state_31397[(1)]);
if((state_val_31398 === (7))){
var inst_31341 = (state_31397[(7)]);
var inst_31346 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31341);
var state_31397__$1 = state_31397;
var statearr_31399_31445 = state_31397__$1;
(statearr_31399_31445[(2)] = inst_31346);

(statearr_31399_31445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (20))){
var inst_31356 = (state_31397[(8)]);
var state_31397__$1 = state_31397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31397__$1,(23),out,inst_31356);
} else {
if((state_val_31398 === (1))){
var inst_31331 = (state_31397[(9)]);
var inst_31331__$1 = calc_state.call(null);
var inst_31332 = cljs.core.seq_QMARK_.call(null,inst_31331__$1);
var state_31397__$1 = (function (){var statearr_31400 = state_31397;
(statearr_31400[(9)] = inst_31331__$1);

return statearr_31400;
})();
if(inst_31332){
var statearr_31401_31446 = state_31397__$1;
(statearr_31401_31446[(1)] = (2));

} else {
var statearr_31402_31447 = state_31397__$1;
(statearr_31402_31447[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (24))){
var inst_31349 = (state_31397[(10)]);
var inst_31341 = inst_31349;
var state_31397__$1 = (function (){var statearr_31403 = state_31397;
(statearr_31403[(7)] = inst_31341);

return statearr_31403;
})();
var statearr_31404_31448 = state_31397__$1;
(statearr_31404_31448[(2)] = null);

(statearr_31404_31448[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (4))){
var inst_31331 = (state_31397[(9)]);
var inst_31337 = (state_31397[(2)]);
var inst_31338 = cljs.core.get.call(null,inst_31337,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31339 = cljs.core.get.call(null,inst_31337,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31340 = cljs.core.get.call(null,inst_31337,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31341 = inst_31331;
var state_31397__$1 = (function (){var statearr_31405 = state_31397;
(statearr_31405[(11)] = inst_31338);

(statearr_31405[(12)] = inst_31339);

(statearr_31405[(7)] = inst_31341);

(statearr_31405[(13)] = inst_31340);

return statearr_31405;
})();
var statearr_31406_31449 = state_31397__$1;
(statearr_31406_31449[(2)] = null);

(statearr_31406_31449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (15))){
var state_31397__$1 = state_31397;
var statearr_31407_31450 = state_31397__$1;
(statearr_31407_31450[(2)] = null);

(statearr_31407_31450[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (21))){
var inst_31349 = (state_31397[(10)]);
var inst_31341 = inst_31349;
var state_31397__$1 = (function (){var statearr_31408 = state_31397;
(statearr_31408[(7)] = inst_31341);

return statearr_31408;
})();
var statearr_31409_31451 = state_31397__$1;
(statearr_31409_31451[(2)] = null);

(statearr_31409_31451[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (13))){
var inst_31393 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
var statearr_31410_31452 = state_31397__$1;
(statearr_31410_31452[(2)] = inst_31393);

(statearr_31410_31452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (22))){
var inst_31391 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
var statearr_31411_31453 = state_31397__$1;
(statearr_31411_31453[(2)] = inst_31391);

(statearr_31411_31453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (6))){
var inst_31395 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31397__$1,inst_31395);
} else {
if((state_val_31398 === (25))){
var state_31397__$1 = state_31397;
var statearr_31412_31454 = state_31397__$1;
(statearr_31412_31454[(2)] = null);

(statearr_31412_31454[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (17))){
var inst_31371 = (state_31397[(14)]);
var state_31397__$1 = state_31397;
var statearr_31413_31455 = state_31397__$1;
(statearr_31413_31455[(2)] = inst_31371);

(statearr_31413_31455[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (3))){
var inst_31331 = (state_31397[(9)]);
var state_31397__$1 = state_31397;
var statearr_31414_31456 = state_31397__$1;
(statearr_31414_31456[(2)] = inst_31331);

(statearr_31414_31456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (12))){
var inst_31352 = (state_31397[(15)]);
var inst_31371 = (state_31397[(14)]);
var inst_31357 = (state_31397[(16)]);
var inst_31371__$1 = inst_31352.call(null,inst_31357);
var state_31397__$1 = (function (){var statearr_31415 = state_31397;
(statearr_31415[(14)] = inst_31371__$1);

return statearr_31415;
})();
if(cljs.core.truth_(inst_31371__$1)){
var statearr_31416_31457 = state_31397__$1;
(statearr_31416_31457[(1)] = (17));

} else {
var statearr_31417_31458 = state_31397__$1;
(statearr_31417_31458[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (2))){
var inst_31331 = (state_31397[(9)]);
var inst_31334 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31331);
var state_31397__$1 = state_31397;
var statearr_31418_31459 = state_31397__$1;
(statearr_31418_31459[(2)] = inst_31334);

(statearr_31418_31459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (23))){
var inst_31382 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
if(cljs.core.truth_(inst_31382)){
var statearr_31419_31460 = state_31397__$1;
(statearr_31419_31460[(1)] = (24));

} else {
var statearr_31420_31461 = state_31397__$1;
(statearr_31420_31461[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (19))){
var inst_31379 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
if(cljs.core.truth_(inst_31379)){
var statearr_31421_31462 = state_31397__$1;
(statearr_31421_31462[(1)] = (20));

} else {
var statearr_31422_31463 = state_31397__$1;
(statearr_31422_31463[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (11))){
var inst_31356 = (state_31397[(8)]);
var inst_31362 = (inst_31356 == null);
var state_31397__$1 = state_31397;
if(cljs.core.truth_(inst_31362)){
var statearr_31423_31464 = state_31397__$1;
(statearr_31423_31464[(1)] = (14));

} else {
var statearr_31424_31465 = state_31397__$1;
(statearr_31424_31465[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (9))){
var inst_31349 = (state_31397[(10)]);
var inst_31349__$1 = (state_31397[(2)]);
var inst_31350 = cljs.core.get.call(null,inst_31349__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31351 = cljs.core.get.call(null,inst_31349__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31352 = cljs.core.get.call(null,inst_31349__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31397__$1 = (function (){var statearr_31425 = state_31397;
(statearr_31425[(15)] = inst_31352);

(statearr_31425[(10)] = inst_31349__$1);

(statearr_31425[(17)] = inst_31351);

return statearr_31425;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31397__$1,(10),inst_31350);
} else {
if((state_val_31398 === (5))){
var inst_31341 = (state_31397[(7)]);
var inst_31344 = cljs.core.seq_QMARK_.call(null,inst_31341);
var state_31397__$1 = state_31397;
if(inst_31344){
var statearr_31426_31466 = state_31397__$1;
(statearr_31426_31466[(1)] = (7));

} else {
var statearr_31427_31467 = state_31397__$1;
(statearr_31427_31467[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (14))){
var inst_31357 = (state_31397[(16)]);
var inst_31364 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31357);
var state_31397__$1 = state_31397;
var statearr_31428_31468 = state_31397__$1;
(statearr_31428_31468[(2)] = inst_31364);

(statearr_31428_31468[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (26))){
var inst_31387 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
var statearr_31429_31469 = state_31397__$1;
(statearr_31429_31469[(2)] = inst_31387);

(statearr_31429_31469[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (16))){
var inst_31367 = (state_31397[(2)]);
var inst_31368 = calc_state.call(null);
var inst_31341 = inst_31368;
var state_31397__$1 = (function (){var statearr_31430 = state_31397;
(statearr_31430[(7)] = inst_31341);

(statearr_31430[(18)] = inst_31367);

return statearr_31430;
})();
var statearr_31431_31470 = state_31397__$1;
(statearr_31431_31470[(2)] = null);

(statearr_31431_31470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (10))){
var inst_31356 = (state_31397[(8)]);
var inst_31357 = (state_31397[(16)]);
var inst_31355 = (state_31397[(2)]);
var inst_31356__$1 = cljs.core.nth.call(null,inst_31355,(0),null);
var inst_31357__$1 = cljs.core.nth.call(null,inst_31355,(1),null);
var inst_31358 = (inst_31356__$1 == null);
var inst_31359 = cljs.core._EQ_.call(null,inst_31357__$1,change);
var inst_31360 = (inst_31358) || (inst_31359);
var state_31397__$1 = (function (){var statearr_31432 = state_31397;
(statearr_31432[(8)] = inst_31356__$1);

(statearr_31432[(16)] = inst_31357__$1);

return statearr_31432;
})();
if(cljs.core.truth_(inst_31360)){
var statearr_31433_31471 = state_31397__$1;
(statearr_31433_31471[(1)] = (11));

} else {
var statearr_31434_31472 = state_31397__$1;
(statearr_31434_31472[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (18))){
var inst_31352 = (state_31397[(15)]);
var inst_31357 = (state_31397[(16)]);
var inst_31351 = (state_31397[(17)]);
var inst_31374 = cljs.core.empty_QMARK_.call(null,inst_31352);
var inst_31375 = inst_31351.call(null,inst_31357);
var inst_31376 = cljs.core.not.call(null,inst_31375);
var inst_31377 = (inst_31374) && (inst_31376);
var state_31397__$1 = state_31397;
var statearr_31435_31473 = state_31397__$1;
(statearr_31435_31473[(2)] = inst_31377);

(statearr_31435_31473[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (8))){
var inst_31341 = (state_31397[(7)]);
var state_31397__$1 = state_31397;
var statearr_31436_31474 = state_31397__$1;
(statearr_31436_31474[(2)] = inst_31341);

(statearr_31436_31474[(1)] = (9));


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
});})(c__18197__auto___31444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18141__auto__,c__18197__auto___31444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_31440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31440[(0)] = state_machine__18142__auto__);

(statearr_31440[(1)] = (1));

return statearr_31440;
});
var state_machine__18142__auto____1 = (function (state_31397){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_31397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e31441){if((e31441 instanceof Object)){
var ex__18145__auto__ = e31441;
var statearr_31442_31475 = state_31397;
(statearr_31442_31475[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31476 = state_31397;
state_31397 = G__31476;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_31397){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_31397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___31444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18199__auto__ = (function (){var statearr_31443 = f__18198__auto__.call(null);
(statearr_31443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___31444);

return statearr_31443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___31444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj31478 = {};
return obj31478;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__15502__auto__ = p;
if(and__15502__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__15502__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16158__auto__ = (((p == null))?null:p);
return (function (){var or__15514__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__15502__auto__ = p;
if(and__15502__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__15502__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16158__auto__ = (((p == null))?null:p);
return (function (){var or__15514__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__15502__auto__ = p;
if(and__15502__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__15502__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16158__auto__ = (((p == null))?null:p);
return (function (){var or__15514__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__15502__auto__ = p;
if(and__15502__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__15502__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16158__auto__ = (((p == null))?null:p);
return (function (){var or__15514__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16158__auto__)]);
if(or__15514__auto__){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__15514__auto____$1){
return or__15514__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

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
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__15514__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__15514__auto__)){
return or__15514__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15514__auto__,mults){
return (function (p1__31479_SHARP_){
if(cljs.core.truth_(p1__31479_SHARP_.call(null,topic))){
return p1__31479_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31479_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15514__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31602 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31602 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31603){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31603 = meta31603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31602.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31602.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31602.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t31602.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31602.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31602.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31602.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31604){
var self__ = this;
var _31604__$1 = this;
return self__.meta31603;
});})(mults,ensure_mult))
;

cljs.core.async.t31602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31604,meta31603__$1){
var self__ = this;
var _31604__$1 = this;
return (new cljs.core.async.t31602(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31603__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31602.cljs$lang$type = true;

cljs.core.async.t31602.cljs$lang$ctorStr = "cljs.core.async/t31602";

cljs.core.async.t31602.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16101__auto__,writer__16102__auto__,opt__16103__auto__){
return cljs.core._write.call(null,writer__16102__auto__,"cljs.core.async/t31602");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31602 = ((function (mults,ensure_mult){
return (function __GT_t31602(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31603){
return (new cljs.core.async.t31602(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31603));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31602(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18197__auto___31724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___31724,mults,ensure_mult,p){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___31724,mults,ensure_mult,p){
return (function (state_31676){
var state_val_31677 = (state_31676[(1)]);
if((state_val_31677 === (7))){
var inst_31672 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
var statearr_31678_31725 = state_31676__$1;
(statearr_31678_31725[(2)] = inst_31672);

(statearr_31678_31725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (20))){
var state_31676__$1 = state_31676;
var statearr_31679_31726 = state_31676__$1;
(statearr_31679_31726[(2)] = null);

(statearr_31679_31726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (1))){
var state_31676__$1 = state_31676;
var statearr_31680_31727 = state_31676__$1;
(statearr_31680_31727[(2)] = null);

(statearr_31680_31727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (24))){
var inst_31655 = (state_31676[(7)]);
var inst_31664 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31655);
var state_31676__$1 = state_31676;
var statearr_31681_31728 = state_31676__$1;
(statearr_31681_31728[(2)] = inst_31664);

(statearr_31681_31728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (4))){
var inst_31607 = (state_31676[(8)]);
var inst_31607__$1 = (state_31676[(2)]);
var inst_31608 = (inst_31607__$1 == null);
var state_31676__$1 = (function (){var statearr_31682 = state_31676;
(statearr_31682[(8)] = inst_31607__$1);

return statearr_31682;
})();
if(cljs.core.truth_(inst_31608)){
var statearr_31683_31729 = state_31676__$1;
(statearr_31683_31729[(1)] = (5));

} else {
var statearr_31684_31730 = state_31676__$1;
(statearr_31684_31730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (15))){
var inst_31649 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
var statearr_31685_31731 = state_31676__$1;
(statearr_31685_31731[(2)] = inst_31649);

(statearr_31685_31731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (21))){
var inst_31669 = (state_31676[(2)]);
var state_31676__$1 = (function (){var statearr_31686 = state_31676;
(statearr_31686[(9)] = inst_31669);

return statearr_31686;
})();
var statearr_31687_31732 = state_31676__$1;
(statearr_31687_31732[(2)] = null);

(statearr_31687_31732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (13))){
var inst_31631 = (state_31676[(10)]);
var inst_31633 = cljs.core.chunked_seq_QMARK_.call(null,inst_31631);
var state_31676__$1 = state_31676;
if(inst_31633){
var statearr_31688_31733 = state_31676__$1;
(statearr_31688_31733[(1)] = (16));

} else {
var statearr_31689_31734 = state_31676__$1;
(statearr_31689_31734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (22))){
var inst_31661 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
if(cljs.core.truth_(inst_31661)){
var statearr_31690_31735 = state_31676__$1;
(statearr_31690_31735[(1)] = (23));

} else {
var statearr_31691_31736 = state_31676__$1;
(statearr_31691_31736[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (6))){
var inst_31657 = (state_31676[(11)]);
var inst_31607 = (state_31676[(8)]);
var inst_31655 = (state_31676[(7)]);
var inst_31655__$1 = topic_fn.call(null,inst_31607);
var inst_31656 = cljs.core.deref.call(null,mults);
var inst_31657__$1 = cljs.core.get.call(null,inst_31656,inst_31655__$1);
var state_31676__$1 = (function (){var statearr_31692 = state_31676;
(statearr_31692[(11)] = inst_31657__$1);

(statearr_31692[(7)] = inst_31655__$1);

return statearr_31692;
})();
if(cljs.core.truth_(inst_31657__$1)){
var statearr_31693_31737 = state_31676__$1;
(statearr_31693_31737[(1)] = (19));

} else {
var statearr_31694_31738 = state_31676__$1;
(statearr_31694_31738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (25))){
var inst_31666 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
var statearr_31695_31739 = state_31676__$1;
(statearr_31695_31739[(2)] = inst_31666);

(statearr_31695_31739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (17))){
var inst_31631 = (state_31676[(10)]);
var inst_31640 = cljs.core.first.call(null,inst_31631);
var inst_31641 = cljs.core.async.muxch_STAR_.call(null,inst_31640);
var inst_31642 = cljs.core.async.close_BANG_.call(null,inst_31641);
var inst_31643 = cljs.core.next.call(null,inst_31631);
var inst_31617 = inst_31643;
var inst_31618 = null;
var inst_31619 = (0);
var inst_31620 = (0);
var state_31676__$1 = (function (){var statearr_31696 = state_31676;
(statearr_31696[(12)] = inst_31619);

(statearr_31696[(13)] = inst_31618);

(statearr_31696[(14)] = inst_31642);

(statearr_31696[(15)] = inst_31617);

(statearr_31696[(16)] = inst_31620);

return statearr_31696;
})();
var statearr_31697_31740 = state_31676__$1;
(statearr_31697_31740[(2)] = null);

(statearr_31697_31740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (3))){
var inst_31674 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31676__$1,inst_31674);
} else {
if((state_val_31677 === (12))){
var inst_31651 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
var statearr_31698_31741 = state_31676__$1;
(statearr_31698_31741[(2)] = inst_31651);

(statearr_31698_31741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (2))){
var state_31676__$1 = state_31676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31676__$1,(4),ch);
} else {
if((state_val_31677 === (23))){
var state_31676__$1 = state_31676;
var statearr_31699_31742 = state_31676__$1;
(statearr_31699_31742[(2)] = null);

(statearr_31699_31742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (19))){
var inst_31657 = (state_31676[(11)]);
var inst_31607 = (state_31676[(8)]);
var inst_31659 = cljs.core.async.muxch_STAR_.call(null,inst_31657);
var state_31676__$1 = state_31676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31676__$1,(22),inst_31659,inst_31607);
} else {
if((state_val_31677 === (11))){
var inst_31631 = (state_31676[(10)]);
var inst_31617 = (state_31676[(15)]);
var inst_31631__$1 = cljs.core.seq.call(null,inst_31617);
var state_31676__$1 = (function (){var statearr_31700 = state_31676;
(statearr_31700[(10)] = inst_31631__$1);

return statearr_31700;
})();
if(inst_31631__$1){
var statearr_31701_31743 = state_31676__$1;
(statearr_31701_31743[(1)] = (13));

} else {
var statearr_31702_31744 = state_31676__$1;
(statearr_31702_31744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (9))){
var inst_31653 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
var statearr_31703_31745 = state_31676__$1;
(statearr_31703_31745[(2)] = inst_31653);

(statearr_31703_31745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (5))){
var inst_31614 = cljs.core.deref.call(null,mults);
var inst_31615 = cljs.core.vals.call(null,inst_31614);
var inst_31616 = cljs.core.seq.call(null,inst_31615);
var inst_31617 = inst_31616;
var inst_31618 = null;
var inst_31619 = (0);
var inst_31620 = (0);
var state_31676__$1 = (function (){var statearr_31704 = state_31676;
(statearr_31704[(12)] = inst_31619);

(statearr_31704[(13)] = inst_31618);

(statearr_31704[(15)] = inst_31617);

(statearr_31704[(16)] = inst_31620);

return statearr_31704;
})();
var statearr_31705_31746 = state_31676__$1;
(statearr_31705_31746[(2)] = null);

(statearr_31705_31746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (14))){
var state_31676__$1 = state_31676;
var statearr_31709_31747 = state_31676__$1;
(statearr_31709_31747[(2)] = null);

(statearr_31709_31747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (16))){
var inst_31631 = (state_31676[(10)]);
var inst_31635 = cljs.core.chunk_first.call(null,inst_31631);
var inst_31636 = cljs.core.chunk_rest.call(null,inst_31631);
var inst_31637 = cljs.core.count.call(null,inst_31635);
var inst_31617 = inst_31636;
var inst_31618 = inst_31635;
var inst_31619 = inst_31637;
var inst_31620 = (0);
var state_31676__$1 = (function (){var statearr_31710 = state_31676;
(statearr_31710[(12)] = inst_31619);

(statearr_31710[(13)] = inst_31618);

(statearr_31710[(15)] = inst_31617);

(statearr_31710[(16)] = inst_31620);

return statearr_31710;
})();
var statearr_31711_31748 = state_31676__$1;
(statearr_31711_31748[(2)] = null);

(statearr_31711_31748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (10))){
var inst_31619 = (state_31676[(12)]);
var inst_31618 = (state_31676[(13)]);
var inst_31617 = (state_31676[(15)]);
var inst_31620 = (state_31676[(16)]);
var inst_31625 = cljs.core._nth.call(null,inst_31618,inst_31620);
var inst_31626 = cljs.core.async.muxch_STAR_.call(null,inst_31625);
var inst_31627 = cljs.core.async.close_BANG_.call(null,inst_31626);
var inst_31628 = (inst_31620 + (1));
var tmp31706 = inst_31619;
var tmp31707 = inst_31618;
var tmp31708 = inst_31617;
var inst_31617__$1 = tmp31708;
var inst_31618__$1 = tmp31707;
var inst_31619__$1 = tmp31706;
var inst_31620__$1 = inst_31628;
var state_31676__$1 = (function (){var statearr_31712 = state_31676;
(statearr_31712[(12)] = inst_31619__$1);

(statearr_31712[(13)] = inst_31618__$1);

(statearr_31712[(17)] = inst_31627);

(statearr_31712[(15)] = inst_31617__$1);

(statearr_31712[(16)] = inst_31620__$1);

return statearr_31712;
})();
var statearr_31713_31749 = state_31676__$1;
(statearr_31713_31749[(2)] = null);

(statearr_31713_31749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (18))){
var inst_31646 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
var statearr_31714_31750 = state_31676__$1;
(statearr_31714_31750[(2)] = inst_31646);

(statearr_31714_31750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (8))){
var inst_31619 = (state_31676[(12)]);
var inst_31620 = (state_31676[(16)]);
var inst_31622 = (inst_31620 < inst_31619);
var inst_31623 = inst_31622;
var state_31676__$1 = state_31676;
if(cljs.core.truth_(inst_31623)){
var statearr_31715_31751 = state_31676__$1;
(statearr_31715_31751[(1)] = (10));

} else {
var statearr_31716_31752 = state_31676__$1;
(statearr_31716_31752[(1)] = (11));

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
});})(c__18197__auto___31724,mults,ensure_mult,p))
;
return ((function (switch__18141__auto__,c__18197__auto___31724,mults,ensure_mult,p){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_31720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31720[(0)] = state_machine__18142__auto__);

(statearr_31720[(1)] = (1));

return statearr_31720;
});
var state_machine__18142__auto____1 = (function (state_31676){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_31676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e31721){if((e31721 instanceof Object)){
var ex__18145__auto__ = e31721;
var statearr_31722_31753 = state_31676;
(statearr_31722_31753[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31754 = state_31676;
state_31676 = G__31754;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_31676){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_31676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___31724,mults,ensure_mult,p))
})();
var state__18199__auto__ = (function (){var statearr_31723 = f__18198__auto__.call(null);
(statearr_31723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___31724);

return statearr_31723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___31724,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
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
var c__18197__auto___31891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___31891,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___31891,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31861){
var state_val_31862 = (state_31861[(1)]);
if((state_val_31862 === (7))){
var state_31861__$1 = state_31861;
var statearr_31863_31892 = state_31861__$1;
(statearr_31863_31892[(2)] = null);

(statearr_31863_31892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (1))){
var state_31861__$1 = state_31861;
var statearr_31864_31893 = state_31861__$1;
(statearr_31864_31893[(2)] = null);

(statearr_31864_31893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (4))){
var inst_31825 = (state_31861[(7)]);
var inst_31827 = (inst_31825 < cnt);
var state_31861__$1 = state_31861;
if(cljs.core.truth_(inst_31827)){
var statearr_31865_31894 = state_31861__$1;
(statearr_31865_31894[(1)] = (6));

} else {
var statearr_31866_31895 = state_31861__$1;
(statearr_31866_31895[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (15))){
var inst_31857 = (state_31861[(2)]);
var state_31861__$1 = state_31861;
var statearr_31867_31896 = state_31861__$1;
(statearr_31867_31896[(2)] = inst_31857);

(statearr_31867_31896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (13))){
var inst_31850 = cljs.core.async.close_BANG_.call(null,out);
var state_31861__$1 = state_31861;
var statearr_31868_31897 = state_31861__$1;
(statearr_31868_31897[(2)] = inst_31850);

(statearr_31868_31897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (6))){
var state_31861__$1 = state_31861;
var statearr_31869_31898 = state_31861__$1;
(statearr_31869_31898[(2)] = null);

(statearr_31869_31898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (3))){
var inst_31859 = (state_31861[(2)]);
var state_31861__$1 = state_31861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31861__$1,inst_31859);
} else {
if((state_val_31862 === (12))){
var inst_31847 = (state_31861[(8)]);
var inst_31847__$1 = (state_31861[(2)]);
var inst_31848 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31847__$1);
var state_31861__$1 = (function (){var statearr_31870 = state_31861;
(statearr_31870[(8)] = inst_31847__$1);

return statearr_31870;
})();
if(cljs.core.truth_(inst_31848)){
var statearr_31871_31899 = state_31861__$1;
(statearr_31871_31899[(1)] = (13));

} else {
var statearr_31872_31900 = state_31861__$1;
(statearr_31872_31900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (2))){
var inst_31824 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31825 = (0);
var state_31861__$1 = (function (){var statearr_31873 = state_31861;
(statearr_31873[(7)] = inst_31825);

(statearr_31873[(9)] = inst_31824);

return statearr_31873;
})();
var statearr_31874_31901 = state_31861__$1;
(statearr_31874_31901[(2)] = null);

(statearr_31874_31901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (11))){
var inst_31825 = (state_31861[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31861,(10),Object,null,(9));
var inst_31834 = chs__$1.call(null,inst_31825);
var inst_31835 = done.call(null,inst_31825);
var inst_31836 = cljs.core.async.take_BANG_.call(null,inst_31834,inst_31835);
var state_31861__$1 = state_31861;
var statearr_31875_31902 = state_31861__$1;
(statearr_31875_31902[(2)] = inst_31836);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (9))){
var inst_31825 = (state_31861[(7)]);
var inst_31838 = (state_31861[(2)]);
var inst_31839 = (inst_31825 + (1));
var inst_31825__$1 = inst_31839;
var state_31861__$1 = (function (){var statearr_31876 = state_31861;
(statearr_31876[(7)] = inst_31825__$1);

(statearr_31876[(10)] = inst_31838);

return statearr_31876;
})();
var statearr_31877_31903 = state_31861__$1;
(statearr_31877_31903[(2)] = null);

(statearr_31877_31903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (5))){
var inst_31845 = (state_31861[(2)]);
var state_31861__$1 = (function (){var statearr_31878 = state_31861;
(statearr_31878[(11)] = inst_31845);

return statearr_31878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31861__$1,(12),dchan);
} else {
if((state_val_31862 === (14))){
var inst_31847 = (state_31861[(8)]);
var inst_31852 = cljs.core.apply.call(null,f,inst_31847);
var state_31861__$1 = state_31861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31861__$1,(16),out,inst_31852);
} else {
if((state_val_31862 === (16))){
var inst_31854 = (state_31861[(2)]);
var state_31861__$1 = (function (){var statearr_31879 = state_31861;
(statearr_31879[(12)] = inst_31854);

return statearr_31879;
})();
var statearr_31880_31904 = state_31861__$1;
(statearr_31880_31904[(2)] = null);

(statearr_31880_31904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (10))){
var inst_31829 = (state_31861[(2)]);
var inst_31830 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31861__$1 = (function (){var statearr_31881 = state_31861;
(statearr_31881[(13)] = inst_31829);

return statearr_31881;
})();
var statearr_31882_31905 = state_31861__$1;
(statearr_31882_31905[(2)] = inst_31830);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (8))){
var inst_31843 = (state_31861[(2)]);
var state_31861__$1 = state_31861;
var statearr_31883_31906 = state_31861__$1;
(statearr_31883_31906[(2)] = inst_31843);

(statearr_31883_31906[(1)] = (5));


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
});})(c__18197__auto___31891,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18141__auto__,c__18197__auto___31891,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_31887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31887[(0)] = state_machine__18142__auto__);

(statearr_31887[(1)] = (1));

return statearr_31887;
});
var state_machine__18142__auto____1 = (function (state_31861){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_31861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e31888){if((e31888 instanceof Object)){
var ex__18145__auto__ = e31888;
var statearr_31889_31907 = state_31861;
(statearr_31889_31907[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31908 = state_31861;
state_31861 = G__31908;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_31861){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_31861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___31891,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18199__auto__ = (function (){var statearr_31890 = f__18198__auto__.call(null);
(statearr_31890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___31891);

return statearr_31890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___31891,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18197__auto___32016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___32016,out){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___32016,out){
return (function (state_31992){
var state_val_31993 = (state_31992[(1)]);
if((state_val_31993 === (7))){
var inst_31971 = (state_31992[(7)]);
var inst_31972 = (state_31992[(8)]);
var inst_31971__$1 = (state_31992[(2)]);
var inst_31972__$1 = cljs.core.nth.call(null,inst_31971__$1,(0),null);
var inst_31973 = cljs.core.nth.call(null,inst_31971__$1,(1),null);
var inst_31974 = (inst_31972__$1 == null);
var state_31992__$1 = (function (){var statearr_31994 = state_31992;
(statearr_31994[(7)] = inst_31971__$1);

(statearr_31994[(8)] = inst_31972__$1);

(statearr_31994[(9)] = inst_31973);

return statearr_31994;
})();
if(cljs.core.truth_(inst_31974)){
var statearr_31995_32017 = state_31992__$1;
(statearr_31995_32017[(1)] = (8));

} else {
var statearr_31996_32018 = state_31992__$1;
(statearr_31996_32018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (1))){
var inst_31963 = cljs.core.vec.call(null,chs);
var inst_31964 = inst_31963;
var state_31992__$1 = (function (){var statearr_31997 = state_31992;
(statearr_31997[(10)] = inst_31964);

return statearr_31997;
})();
var statearr_31998_32019 = state_31992__$1;
(statearr_31998_32019[(2)] = null);

(statearr_31998_32019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (4))){
var inst_31964 = (state_31992[(10)]);
var state_31992__$1 = state_31992;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31992__$1,(7),inst_31964);
} else {
if((state_val_31993 === (6))){
var inst_31988 = (state_31992[(2)]);
var state_31992__$1 = state_31992;
var statearr_31999_32020 = state_31992__$1;
(statearr_31999_32020[(2)] = inst_31988);

(statearr_31999_32020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (3))){
var inst_31990 = (state_31992[(2)]);
var state_31992__$1 = state_31992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31992__$1,inst_31990);
} else {
if((state_val_31993 === (2))){
var inst_31964 = (state_31992[(10)]);
var inst_31966 = cljs.core.count.call(null,inst_31964);
var inst_31967 = (inst_31966 > (0));
var state_31992__$1 = state_31992;
if(cljs.core.truth_(inst_31967)){
var statearr_32001_32021 = state_31992__$1;
(statearr_32001_32021[(1)] = (4));

} else {
var statearr_32002_32022 = state_31992__$1;
(statearr_32002_32022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (11))){
var inst_31964 = (state_31992[(10)]);
var inst_31981 = (state_31992[(2)]);
var tmp32000 = inst_31964;
var inst_31964__$1 = tmp32000;
var state_31992__$1 = (function (){var statearr_32003 = state_31992;
(statearr_32003[(10)] = inst_31964__$1);

(statearr_32003[(11)] = inst_31981);

return statearr_32003;
})();
var statearr_32004_32023 = state_31992__$1;
(statearr_32004_32023[(2)] = null);

(statearr_32004_32023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (9))){
var inst_31972 = (state_31992[(8)]);
var state_31992__$1 = state_31992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31992__$1,(11),out,inst_31972);
} else {
if((state_val_31993 === (5))){
var inst_31986 = cljs.core.async.close_BANG_.call(null,out);
var state_31992__$1 = state_31992;
var statearr_32005_32024 = state_31992__$1;
(statearr_32005_32024[(2)] = inst_31986);

(statearr_32005_32024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (10))){
var inst_31984 = (state_31992[(2)]);
var state_31992__$1 = state_31992;
var statearr_32006_32025 = state_31992__$1;
(statearr_32006_32025[(2)] = inst_31984);

(statearr_32006_32025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (8))){
var inst_31964 = (state_31992[(10)]);
var inst_31971 = (state_31992[(7)]);
var inst_31972 = (state_31992[(8)]);
var inst_31973 = (state_31992[(9)]);
var inst_31976 = (function (){var c = inst_31973;
var v = inst_31972;
var vec__31969 = inst_31971;
var cs = inst_31964;
return ((function (c,v,vec__31969,cs,inst_31964,inst_31971,inst_31972,inst_31973,state_val_31993,c__18197__auto___32016,out){
return (function (p1__31909_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31909_SHARP_);
});
;})(c,v,vec__31969,cs,inst_31964,inst_31971,inst_31972,inst_31973,state_val_31993,c__18197__auto___32016,out))
})();
var inst_31977 = cljs.core.filterv.call(null,inst_31976,inst_31964);
var inst_31964__$1 = inst_31977;
var state_31992__$1 = (function (){var statearr_32007 = state_31992;
(statearr_32007[(10)] = inst_31964__$1);

return statearr_32007;
})();
var statearr_32008_32026 = state_31992__$1;
(statearr_32008_32026[(2)] = null);

(statearr_32008_32026[(1)] = (2));


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
});})(c__18197__auto___32016,out))
;
return ((function (switch__18141__auto__,c__18197__auto___32016,out){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_32012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32012[(0)] = state_machine__18142__auto__);

(statearr_32012[(1)] = (1));

return statearr_32012;
});
var state_machine__18142__auto____1 = (function (state_31992){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_31992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e32013){if((e32013 instanceof Object)){
var ex__18145__auto__ = e32013;
var statearr_32014_32027 = state_31992;
(statearr_32014_32027[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32028 = state_31992;
state_31992 = G__32028;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_31992){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_31992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___32016,out))
})();
var state__18199__auto__ = (function (){var statearr_32015 = f__18198__auto__.call(null);
(statearr_32015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___32016);

return statearr_32015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___32016,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18197__auto___32121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___32121,out){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___32121,out){
return (function (state_32098){
var state_val_32099 = (state_32098[(1)]);
if((state_val_32099 === (7))){
var inst_32080 = (state_32098[(7)]);
var inst_32080__$1 = (state_32098[(2)]);
var inst_32081 = (inst_32080__$1 == null);
var inst_32082 = cljs.core.not.call(null,inst_32081);
var state_32098__$1 = (function (){var statearr_32100 = state_32098;
(statearr_32100[(7)] = inst_32080__$1);

return statearr_32100;
})();
if(inst_32082){
var statearr_32101_32122 = state_32098__$1;
(statearr_32101_32122[(1)] = (8));

} else {
var statearr_32102_32123 = state_32098__$1;
(statearr_32102_32123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (1))){
var inst_32075 = (0);
var state_32098__$1 = (function (){var statearr_32103 = state_32098;
(statearr_32103[(8)] = inst_32075);

return statearr_32103;
})();
var statearr_32104_32124 = state_32098__$1;
(statearr_32104_32124[(2)] = null);

(statearr_32104_32124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (4))){
var state_32098__$1 = state_32098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32098__$1,(7),ch);
} else {
if((state_val_32099 === (6))){
var inst_32093 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32105_32125 = state_32098__$1;
(statearr_32105_32125[(2)] = inst_32093);

(statearr_32105_32125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (3))){
var inst_32095 = (state_32098[(2)]);
var inst_32096 = cljs.core.async.close_BANG_.call(null,out);
var state_32098__$1 = (function (){var statearr_32106 = state_32098;
(statearr_32106[(9)] = inst_32095);

return statearr_32106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32098__$1,inst_32096);
} else {
if((state_val_32099 === (2))){
var inst_32075 = (state_32098[(8)]);
var inst_32077 = (inst_32075 < n);
var state_32098__$1 = state_32098;
if(cljs.core.truth_(inst_32077)){
var statearr_32107_32126 = state_32098__$1;
(statearr_32107_32126[(1)] = (4));

} else {
var statearr_32108_32127 = state_32098__$1;
(statearr_32108_32127[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (11))){
var inst_32075 = (state_32098[(8)]);
var inst_32085 = (state_32098[(2)]);
var inst_32086 = (inst_32075 + (1));
var inst_32075__$1 = inst_32086;
var state_32098__$1 = (function (){var statearr_32109 = state_32098;
(statearr_32109[(8)] = inst_32075__$1);

(statearr_32109[(10)] = inst_32085);

return statearr_32109;
})();
var statearr_32110_32128 = state_32098__$1;
(statearr_32110_32128[(2)] = null);

(statearr_32110_32128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (9))){
var state_32098__$1 = state_32098;
var statearr_32111_32129 = state_32098__$1;
(statearr_32111_32129[(2)] = null);

(statearr_32111_32129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (5))){
var state_32098__$1 = state_32098;
var statearr_32112_32130 = state_32098__$1;
(statearr_32112_32130[(2)] = null);

(statearr_32112_32130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (10))){
var inst_32090 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32113_32131 = state_32098__$1;
(statearr_32113_32131[(2)] = inst_32090);

(statearr_32113_32131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (8))){
var inst_32080 = (state_32098[(7)]);
var state_32098__$1 = state_32098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32098__$1,(11),out,inst_32080);
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
});})(c__18197__auto___32121,out))
;
return ((function (switch__18141__auto__,c__18197__auto___32121,out){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_32117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32117[(0)] = state_machine__18142__auto__);

(statearr_32117[(1)] = (1));

return statearr_32117;
});
var state_machine__18142__auto____1 = (function (state_32098){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_32098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e32118){if((e32118 instanceof Object)){
var ex__18145__auto__ = e32118;
var statearr_32119_32132 = state_32098;
(statearr_32119_32132[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32133 = state_32098;
state_32098 = G__32133;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_32098){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_32098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___32121,out))
})();
var state__18199__auto__ = (function (){var statearr_32120 = f__18198__auto__.call(null);
(statearr_32120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___32121);

return statearr_32120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___32121,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t32141 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32141 = (function (ch,f,map_LT_,meta32142){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32142 = meta32142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32141.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32141.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t32144 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32144 = (function (fn1,_,meta32142,map_LT_,f,ch,meta32145){
this.fn1 = fn1;
this._ = _;
this.meta32142 = meta32142;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32145 = meta32145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32144.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t32144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32134_SHARP_){
return f1.call(null,(((p1__32134_SHARP_ == null))?null:self__.f.call(null,p1__32134_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t32144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32146){
var self__ = this;
var _32146__$1 = this;
return self__.meta32145;
});})(___$1))
;

cljs.core.async.t32144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32146,meta32145__$1){
var self__ = this;
var _32146__$1 = this;
return (new cljs.core.async.t32144(self__.fn1,self__._,self__.meta32142,self__.map_LT_,self__.f,self__.ch,meta32145__$1));
});})(___$1))
;

cljs.core.async.t32144.cljs$lang$type = true;

cljs.core.async.t32144.cljs$lang$ctorStr = "cljs.core.async/t32144";

cljs.core.async.t32144.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16101__auto__,writer__16102__auto__,opt__16103__auto__){
return cljs.core._write.call(null,writer__16102__auto__,"cljs.core.async/t32144");
});})(___$1))
;

cljs.core.async.__GT_t32144 = ((function (___$1){
return (function __GT_t32144(fn1__$1,___$2,meta32142__$1,map_LT___$1,f__$1,ch__$1,meta32145){
return (new cljs.core.async.t32144(fn1__$1,___$2,meta32142__$1,map_LT___$1,f__$1,ch__$1,meta32145));
});})(___$1))
;

}

return (new cljs.core.async.t32144(fn1,___$1,self__.meta32142,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__15502__auto__ = ret;
if(cljs.core.truth_(and__15502__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__15502__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t32141.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32141.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32143){
var self__ = this;
var _32143__$1 = this;
return self__.meta32142;
});

cljs.core.async.t32141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32143,meta32142__$1){
var self__ = this;
var _32143__$1 = this;
return (new cljs.core.async.t32141(self__.ch,self__.f,self__.map_LT_,meta32142__$1));
});

cljs.core.async.t32141.cljs$lang$type = true;

cljs.core.async.t32141.cljs$lang$ctorStr = "cljs.core.async/t32141";

cljs.core.async.t32141.cljs$lang$ctorPrWriter = (function (this__16101__auto__,writer__16102__auto__,opt__16103__auto__){
return cljs.core._write.call(null,writer__16102__auto__,"cljs.core.async/t32141");
});

cljs.core.async.__GT_t32141 = (function __GT_t32141(ch__$1,f__$1,map_LT___$1,meta32142){
return (new cljs.core.async.t32141(ch__$1,f__$1,map_LT___$1,meta32142));
});

}

return (new cljs.core.async.t32141(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t32150 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32150 = (function (ch,f,map_GT_,meta32151){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32151 = meta32151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32150.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32150.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t32150.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32150.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32150.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32150.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32152){
var self__ = this;
var _32152__$1 = this;
return self__.meta32151;
});

cljs.core.async.t32150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32152,meta32151__$1){
var self__ = this;
var _32152__$1 = this;
return (new cljs.core.async.t32150(self__.ch,self__.f,self__.map_GT_,meta32151__$1));
});

cljs.core.async.t32150.cljs$lang$type = true;

cljs.core.async.t32150.cljs$lang$ctorStr = "cljs.core.async/t32150";

cljs.core.async.t32150.cljs$lang$ctorPrWriter = (function (this__16101__auto__,writer__16102__auto__,opt__16103__auto__){
return cljs.core._write.call(null,writer__16102__auto__,"cljs.core.async/t32150");
});

cljs.core.async.__GT_t32150 = (function __GT_t32150(ch__$1,f__$1,map_GT___$1,meta32151){
return (new cljs.core.async.t32150(ch__$1,f__$1,map_GT___$1,meta32151));
});

}

return (new cljs.core.async.t32150(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t32156 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32156 = (function (ch,p,filter_GT_,meta32157){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32157 = meta32157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32156.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t32156.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32156.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32156.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32158){
var self__ = this;
var _32158__$1 = this;
return self__.meta32157;
});

cljs.core.async.t32156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32158,meta32157__$1){
var self__ = this;
var _32158__$1 = this;
return (new cljs.core.async.t32156(self__.ch,self__.p,self__.filter_GT_,meta32157__$1));
});

cljs.core.async.t32156.cljs$lang$type = true;

cljs.core.async.t32156.cljs$lang$ctorStr = "cljs.core.async/t32156";

cljs.core.async.t32156.cljs$lang$ctorPrWriter = (function (this__16101__auto__,writer__16102__auto__,opt__16103__auto__){
return cljs.core._write.call(null,writer__16102__auto__,"cljs.core.async/t32156");
});

cljs.core.async.__GT_t32156 = (function __GT_t32156(ch__$1,p__$1,filter_GT___$1,meta32157){
return (new cljs.core.async.t32156(ch__$1,p__$1,filter_GT___$1,meta32157));
});

}

return (new cljs.core.async.t32156(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18197__auto___32241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___32241,out){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___32241,out){
return (function (state_32220){
var state_val_32221 = (state_32220[(1)]);
if((state_val_32221 === (7))){
var inst_32216 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32222_32242 = state_32220__$1;
(statearr_32222_32242[(2)] = inst_32216);

(statearr_32222_32242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (1))){
var state_32220__$1 = state_32220;
var statearr_32223_32243 = state_32220__$1;
(statearr_32223_32243[(2)] = null);

(statearr_32223_32243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (4))){
var inst_32202 = (state_32220[(7)]);
var inst_32202__$1 = (state_32220[(2)]);
var inst_32203 = (inst_32202__$1 == null);
var state_32220__$1 = (function (){var statearr_32224 = state_32220;
(statearr_32224[(7)] = inst_32202__$1);

return statearr_32224;
})();
if(cljs.core.truth_(inst_32203)){
var statearr_32225_32244 = state_32220__$1;
(statearr_32225_32244[(1)] = (5));

} else {
var statearr_32226_32245 = state_32220__$1;
(statearr_32226_32245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (6))){
var inst_32202 = (state_32220[(7)]);
var inst_32207 = p.call(null,inst_32202);
var state_32220__$1 = state_32220;
if(cljs.core.truth_(inst_32207)){
var statearr_32227_32246 = state_32220__$1;
(statearr_32227_32246[(1)] = (8));

} else {
var statearr_32228_32247 = state_32220__$1;
(statearr_32228_32247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (3))){
var inst_32218 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32220__$1,inst_32218);
} else {
if((state_val_32221 === (2))){
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32220__$1,(4),ch);
} else {
if((state_val_32221 === (11))){
var inst_32210 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32229_32248 = state_32220__$1;
(statearr_32229_32248[(2)] = inst_32210);

(statearr_32229_32248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (9))){
var state_32220__$1 = state_32220;
var statearr_32230_32249 = state_32220__$1;
(statearr_32230_32249[(2)] = null);

(statearr_32230_32249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (5))){
var inst_32205 = cljs.core.async.close_BANG_.call(null,out);
var state_32220__$1 = state_32220;
var statearr_32231_32250 = state_32220__$1;
(statearr_32231_32250[(2)] = inst_32205);

(statearr_32231_32250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (10))){
var inst_32213 = (state_32220[(2)]);
var state_32220__$1 = (function (){var statearr_32232 = state_32220;
(statearr_32232[(8)] = inst_32213);

return statearr_32232;
})();
var statearr_32233_32251 = state_32220__$1;
(statearr_32233_32251[(2)] = null);

(statearr_32233_32251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (8))){
var inst_32202 = (state_32220[(7)]);
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32220__$1,(11),out,inst_32202);
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
});})(c__18197__auto___32241,out))
;
return ((function (switch__18141__auto__,c__18197__auto___32241,out){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_32237 = [null,null,null,null,null,null,null,null,null];
(statearr_32237[(0)] = state_machine__18142__auto__);

(statearr_32237[(1)] = (1));

return statearr_32237;
});
var state_machine__18142__auto____1 = (function (state_32220){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_32220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e32238){if((e32238 instanceof Object)){
var ex__18145__auto__ = e32238;
var statearr_32239_32252 = state_32220;
(statearr_32239_32252[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32253 = state_32220;
state_32220 = G__32253;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_32220){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_32220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___32241,out))
})();
var state__18199__auto__ = (function (){var statearr_32240 = f__18198__auto__.call(null);
(statearr_32240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___32241);

return statearr_32240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___32241,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__18197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto__){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto__){
return (function (state_32419){
var state_val_32420 = (state_32419[(1)]);
if((state_val_32420 === (7))){
var inst_32415 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32421_32462 = state_32419__$1;
(statearr_32421_32462[(2)] = inst_32415);

(statearr_32421_32462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (20))){
var inst_32385 = (state_32419[(7)]);
var inst_32396 = (state_32419[(2)]);
var inst_32397 = cljs.core.next.call(null,inst_32385);
var inst_32371 = inst_32397;
var inst_32372 = null;
var inst_32373 = (0);
var inst_32374 = (0);
var state_32419__$1 = (function (){var statearr_32422 = state_32419;
(statearr_32422[(8)] = inst_32374);

(statearr_32422[(9)] = inst_32373);

(statearr_32422[(10)] = inst_32396);

(statearr_32422[(11)] = inst_32371);

(statearr_32422[(12)] = inst_32372);

return statearr_32422;
})();
var statearr_32423_32463 = state_32419__$1;
(statearr_32423_32463[(2)] = null);

(statearr_32423_32463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (1))){
var state_32419__$1 = state_32419;
var statearr_32424_32464 = state_32419__$1;
(statearr_32424_32464[(2)] = null);

(statearr_32424_32464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (4))){
var inst_32360 = (state_32419[(13)]);
var inst_32360__$1 = (state_32419[(2)]);
var inst_32361 = (inst_32360__$1 == null);
var state_32419__$1 = (function (){var statearr_32425 = state_32419;
(statearr_32425[(13)] = inst_32360__$1);

return statearr_32425;
})();
if(cljs.core.truth_(inst_32361)){
var statearr_32426_32465 = state_32419__$1;
(statearr_32426_32465[(1)] = (5));

} else {
var statearr_32427_32466 = state_32419__$1;
(statearr_32427_32466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (15))){
var state_32419__$1 = state_32419;
var statearr_32431_32467 = state_32419__$1;
(statearr_32431_32467[(2)] = null);

(statearr_32431_32467[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (21))){
var state_32419__$1 = state_32419;
var statearr_32432_32468 = state_32419__$1;
(statearr_32432_32468[(2)] = null);

(statearr_32432_32468[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (13))){
var inst_32374 = (state_32419[(8)]);
var inst_32373 = (state_32419[(9)]);
var inst_32371 = (state_32419[(11)]);
var inst_32372 = (state_32419[(12)]);
var inst_32381 = (state_32419[(2)]);
var inst_32382 = (inst_32374 + (1));
var tmp32428 = inst_32373;
var tmp32429 = inst_32371;
var tmp32430 = inst_32372;
var inst_32371__$1 = tmp32429;
var inst_32372__$1 = tmp32430;
var inst_32373__$1 = tmp32428;
var inst_32374__$1 = inst_32382;
var state_32419__$1 = (function (){var statearr_32433 = state_32419;
(statearr_32433[(8)] = inst_32374__$1);

(statearr_32433[(9)] = inst_32373__$1);

(statearr_32433[(14)] = inst_32381);

(statearr_32433[(11)] = inst_32371__$1);

(statearr_32433[(12)] = inst_32372__$1);

return statearr_32433;
})();
var statearr_32434_32469 = state_32419__$1;
(statearr_32434_32469[(2)] = null);

(statearr_32434_32469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (22))){
var state_32419__$1 = state_32419;
var statearr_32435_32470 = state_32419__$1;
(statearr_32435_32470[(2)] = null);

(statearr_32435_32470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (6))){
var inst_32360 = (state_32419[(13)]);
var inst_32369 = f.call(null,inst_32360);
var inst_32370 = cljs.core.seq.call(null,inst_32369);
var inst_32371 = inst_32370;
var inst_32372 = null;
var inst_32373 = (0);
var inst_32374 = (0);
var state_32419__$1 = (function (){var statearr_32436 = state_32419;
(statearr_32436[(8)] = inst_32374);

(statearr_32436[(9)] = inst_32373);

(statearr_32436[(11)] = inst_32371);

(statearr_32436[(12)] = inst_32372);

return statearr_32436;
})();
var statearr_32437_32471 = state_32419__$1;
(statearr_32437_32471[(2)] = null);

(statearr_32437_32471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (17))){
var inst_32385 = (state_32419[(7)]);
var inst_32389 = cljs.core.chunk_first.call(null,inst_32385);
var inst_32390 = cljs.core.chunk_rest.call(null,inst_32385);
var inst_32391 = cljs.core.count.call(null,inst_32389);
var inst_32371 = inst_32390;
var inst_32372 = inst_32389;
var inst_32373 = inst_32391;
var inst_32374 = (0);
var state_32419__$1 = (function (){var statearr_32438 = state_32419;
(statearr_32438[(8)] = inst_32374);

(statearr_32438[(9)] = inst_32373);

(statearr_32438[(11)] = inst_32371);

(statearr_32438[(12)] = inst_32372);

return statearr_32438;
})();
var statearr_32439_32472 = state_32419__$1;
(statearr_32439_32472[(2)] = null);

(statearr_32439_32472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (3))){
var inst_32417 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32419__$1,inst_32417);
} else {
if((state_val_32420 === (12))){
var inst_32405 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32440_32473 = state_32419__$1;
(statearr_32440_32473[(2)] = inst_32405);

(statearr_32440_32473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (2))){
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32419__$1,(4),in$);
} else {
if((state_val_32420 === (23))){
var inst_32413 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32441_32474 = state_32419__$1;
(statearr_32441_32474[(2)] = inst_32413);

(statearr_32441_32474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (19))){
var inst_32400 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32442_32475 = state_32419__$1;
(statearr_32442_32475[(2)] = inst_32400);

(statearr_32442_32475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (11))){
var inst_32385 = (state_32419[(7)]);
var inst_32371 = (state_32419[(11)]);
var inst_32385__$1 = cljs.core.seq.call(null,inst_32371);
var state_32419__$1 = (function (){var statearr_32443 = state_32419;
(statearr_32443[(7)] = inst_32385__$1);

return statearr_32443;
})();
if(inst_32385__$1){
var statearr_32444_32476 = state_32419__$1;
(statearr_32444_32476[(1)] = (14));

} else {
var statearr_32445_32477 = state_32419__$1;
(statearr_32445_32477[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (9))){
var inst_32407 = (state_32419[(2)]);
var inst_32408 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32419__$1 = (function (){var statearr_32446 = state_32419;
(statearr_32446[(15)] = inst_32407);

return statearr_32446;
})();
if(cljs.core.truth_(inst_32408)){
var statearr_32447_32478 = state_32419__$1;
(statearr_32447_32478[(1)] = (21));

} else {
var statearr_32448_32479 = state_32419__$1;
(statearr_32448_32479[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (5))){
var inst_32363 = cljs.core.async.close_BANG_.call(null,out);
var state_32419__$1 = state_32419;
var statearr_32449_32480 = state_32419__$1;
(statearr_32449_32480[(2)] = inst_32363);

(statearr_32449_32480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (14))){
var inst_32385 = (state_32419[(7)]);
var inst_32387 = cljs.core.chunked_seq_QMARK_.call(null,inst_32385);
var state_32419__$1 = state_32419;
if(inst_32387){
var statearr_32450_32481 = state_32419__$1;
(statearr_32450_32481[(1)] = (17));

} else {
var statearr_32451_32482 = state_32419__$1;
(statearr_32451_32482[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (16))){
var inst_32403 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32452_32483 = state_32419__$1;
(statearr_32452_32483[(2)] = inst_32403);

(statearr_32452_32483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (10))){
var inst_32374 = (state_32419[(8)]);
var inst_32372 = (state_32419[(12)]);
var inst_32379 = cljs.core._nth.call(null,inst_32372,inst_32374);
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32419__$1,(13),out,inst_32379);
} else {
if((state_val_32420 === (18))){
var inst_32385 = (state_32419[(7)]);
var inst_32394 = cljs.core.first.call(null,inst_32385);
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32419__$1,(20),out,inst_32394);
} else {
if((state_val_32420 === (8))){
var inst_32374 = (state_32419[(8)]);
var inst_32373 = (state_32419[(9)]);
var inst_32376 = (inst_32374 < inst_32373);
var inst_32377 = inst_32376;
var state_32419__$1 = state_32419;
if(cljs.core.truth_(inst_32377)){
var statearr_32453_32484 = state_32419__$1;
(statearr_32453_32484[(1)] = (10));

} else {
var statearr_32454_32485 = state_32419__$1;
(statearr_32454_32485[(1)] = (11));

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
});})(c__18197__auto__))
;
return ((function (switch__18141__auto__,c__18197__auto__){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_32458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32458[(0)] = state_machine__18142__auto__);

(statearr_32458[(1)] = (1));

return statearr_32458;
});
var state_machine__18142__auto____1 = (function (state_32419){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_32419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e32459){if((e32459 instanceof Object)){
var ex__18145__auto__ = e32459;
var statearr_32460_32486 = state_32419;
(statearr_32460_32486[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32487 = state_32419;
state_32419 = G__32487;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_32419){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_32419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto__))
})();
var state__18199__auto__ = (function (){var statearr_32461 = f__18198__auto__.call(null);
(statearr_32461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto__);

return statearr_32461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto__))
);

return c__18197__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18197__auto___32584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___32584,out){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___32584,out){
return (function (state_32559){
var state_val_32560 = (state_32559[(1)]);
if((state_val_32560 === (7))){
var inst_32554 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32561_32585 = state_32559__$1;
(statearr_32561_32585[(2)] = inst_32554);

(statearr_32561_32585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (1))){
var inst_32536 = null;
var state_32559__$1 = (function (){var statearr_32562 = state_32559;
(statearr_32562[(7)] = inst_32536);

return statearr_32562;
})();
var statearr_32563_32586 = state_32559__$1;
(statearr_32563_32586[(2)] = null);

(statearr_32563_32586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (4))){
var inst_32539 = (state_32559[(8)]);
var inst_32539__$1 = (state_32559[(2)]);
var inst_32540 = (inst_32539__$1 == null);
var inst_32541 = cljs.core.not.call(null,inst_32540);
var state_32559__$1 = (function (){var statearr_32564 = state_32559;
(statearr_32564[(8)] = inst_32539__$1);

return statearr_32564;
})();
if(inst_32541){
var statearr_32565_32587 = state_32559__$1;
(statearr_32565_32587[(1)] = (5));

} else {
var statearr_32566_32588 = state_32559__$1;
(statearr_32566_32588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (6))){
var state_32559__$1 = state_32559;
var statearr_32567_32589 = state_32559__$1;
(statearr_32567_32589[(2)] = null);

(statearr_32567_32589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (3))){
var inst_32556 = (state_32559[(2)]);
var inst_32557 = cljs.core.async.close_BANG_.call(null,out);
var state_32559__$1 = (function (){var statearr_32568 = state_32559;
(statearr_32568[(9)] = inst_32556);

return statearr_32568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32559__$1,inst_32557);
} else {
if((state_val_32560 === (2))){
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32559__$1,(4),ch);
} else {
if((state_val_32560 === (11))){
var inst_32539 = (state_32559[(8)]);
var inst_32548 = (state_32559[(2)]);
var inst_32536 = inst_32539;
var state_32559__$1 = (function (){var statearr_32569 = state_32559;
(statearr_32569[(10)] = inst_32548);

(statearr_32569[(7)] = inst_32536);

return statearr_32569;
})();
var statearr_32570_32590 = state_32559__$1;
(statearr_32570_32590[(2)] = null);

(statearr_32570_32590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (9))){
var inst_32539 = (state_32559[(8)]);
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32559__$1,(11),out,inst_32539);
} else {
if((state_val_32560 === (5))){
var inst_32539 = (state_32559[(8)]);
var inst_32536 = (state_32559[(7)]);
var inst_32543 = cljs.core._EQ_.call(null,inst_32539,inst_32536);
var state_32559__$1 = state_32559;
if(inst_32543){
var statearr_32572_32591 = state_32559__$1;
(statearr_32572_32591[(1)] = (8));

} else {
var statearr_32573_32592 = state_32559__$1;
(statearr_32573_32592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (10))){
var inst_32551 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32574_32593 = state_32559__$1;
(statearr_32574_32593[(2)] = inst_32551);

(statearr_32574_32593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (8))){
var inst_32536 = (state_32559[(7)]);
var tmp32571 = inst_32536;
var inst_32536__$1 = tmp32571;
var state_32559__$1 = (function (){var statearr_32575 = state_32559;
(statearr_32575[(7)] = inst_32536__$1);

return statearr_32575;
})();
var statearr_32576_32594 = state_32559__$1;
(statearr_32576_32594[(2)] = null);

(statearr_32576_32594[(1)] = (2));


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
});})(c__18197__auto___32584,out))
;
return ((function (switch__18141__auto__,c__18197__auto___32584,out){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_32580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32580[(0)] = state_machine__18142__auto__);

(statearr_32580[(1)] = (1));

return statearr_32580;
});
var state_machine__18142__auto____1 = (function (state_32559){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_32559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e32581){if((e32581 instanceof Object)){
var ex__18145__auto__ = e32581;
var statearr_32582_32595 = state_32559;
(statearr_32582_32595[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32596 = state_32559;
state_32559 = G__32596;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_32559){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_32559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___32584,out))
})();
var state__18199__auto__ = (function (){var statearr_32583 = f__18198__auto__.call(null);
(statearr_32583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___32584);

return statearr_32583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___32584,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18197__auto___32731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___32731,out){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___32731,out){
return (function (state_32701){
var state_val_32702 = (state_32701[(1)]);
if((state_val_32702 === (7))){
var inst_32697 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32703_32732 = state_32701__$1;
(statearr_32703_32732[(2)] = inst_32697);

(statearr_32703_32732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (1))){
var inst_32664 = (new Array(n));
var inst_32665 = inst_32664;
var inst_32666 = (0);
var state_32701__$1 = (function (){var statearr_32704 = state_32701;
(statearr_32704[(7)] = inst_32666);

(statearr_32704[(8)] = inst_32665);

return statearr_32704;
})();
var statearr_32705_32733 = state_32701__$1;
(statearr_32705_32733[(2)] = null);

(statearr_32705_32733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (4))){
var inst_32669 = (state_32701[(9)]);
var inst_32669__$1 = (state_32701[(2)]);
var inst_32670 = (inst_32669__$1 == null);
var inst_32671 = cljs.core.not.call(null,inst_32670);
var state_32701__$1 = (function (){var statearr_32706 = state_32701;
(statearr_32706[(9)] = inst_32669__$1);

return statearr_32706;
})();
if(inst_32671){
var statearr_32707_32734 = state_32701__$1;
(statearr_32707_32734[(1)] = (5));

} else {
var statearr_32708_32735 = state_32701__$1;
(statearr_32708_32735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (15))){
var inst_32691 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32709_32736 = state_32701__$1;
(statearr_32709_32736[(2)] = inst_32691);

(statearr_32709_32736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (13))){
var state_32701__$1 = state_32701;
var statearr_32710_32737 = state_32701__$1;
(statearr_32710_32737[(2)] = null);

(statearr_32710_32737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (6))){
var inst_32666 = (state_32701[(7)]);
var inst_32687 = (inst_32666 > (0));
var state_32701__$1 = state_32701;
if(cljs.core.truth_(inst_32687)){
var statearr_32711_32738 = state_32701__$1;
(statearr_32711_32738[(1)] = (12));

} else {
var statearr_32712_32739 = state_32701__$1;
(statearr_32712_32739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (3))){
var inst_32699 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32701__$1,inst_32699);
} else {
if((state_val_32702 === (12))){
var inst_32665 = (state_32701[(8)]);
var inst_32689 = cljs.core.vec.call(null,inst_32665);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32701__$1,(15),out,inst_32689);
} else {
if((state_val_32702 === (2))){
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32701__$1,(4),ch);
} else {
if((state_val_32702 === (11))){
var inst_32681 = (state_32701[(2)]);
var inst_32682 = (new Array(n));
var inst_32665 = inst_32682;
var inst_32666 = (0);
var state_32701__$1 = (function (){var statearr_32713 = state_32701;
(statearr_32713[(10)] = inst_32681);

(statearr_32713[(7)] = inst_32666);

(statearr_32713[(8)] = inst_32665);

return statearr_32713;
})();
var statearr_32714_32740 = state_32701__$1;
(statearr_32714_32740[(2)] = null);

(statearr_32714_32740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (9))){
var inst_32665 = (state_32701[(8)]);
var inst_32679 = cljs.core.vec.call(null,inst_32665);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32701__$1,(11),out,inst_32679);
} else {
if((state_val_32702 === (5))){
var inst_32674 = (state_32701[(11)]);
var inst_32666 = (state_32701[(7)]);
var inst_32669 = (state_32701[(9)]);
var inst_32665 = (state_32701[(8)]);
var inst_32673 = (inst_32665[inst_32666] = inst_32669);
var inst_32674__$1 = (inst_32666 + (1));
var inst_32675 = (inst_32674__$1 < n);
var state_32701__$1 = (function (){var statearr_32715 = state_32701;
(statearr_32715[(11)] = inst_32674__$1);

(statearr_32715[(12)] = inst_32673);

return statearr_32715;
})();
if(cljs.core.truth_(inst_32675)){
var statearr_32716_32741 = state_32701__$1;
(statearr_32716_32741[(1)] = (8));

} else {
var statearr_32717_32742 = state_32701__$1;
(statearr_32717_32742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (14))){
var inst_32694 = (state_32701[(2)]);
var inst_32695 = cljs.core.async.close_BANG_.call(null,out);
var state_32701__$1 = (function (){var statearr_32719 = state_32701;
(statearr_32719[(13)] = inst_32694);

return statearr_32719;
})();
var statearr_32720_32743 = state_32701__$1;
(statearr_32720_32743[(2)] = inst_32695);

(statearr_32720_32743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (10))){
var inst_32685 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32721_32744 = state_32701__$1;
(statearr_32721_32744[(2)] = inst_32685);

(statearr_32721_32744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (8))){
var inst_32674 = (state_32701[(11)]);
var inst_32665 = (state_32701[(8)]);
var tmp32718 = inst_32665;
var inst_32665__$1 = tmp32718;
var inst_32666 = inst_32674;
var state_32701__$1 = (function (){var statearr_32722 = state_32701;
(statearr_32722[(7)] = inst_32666);

(statearr_32722[(8)] = inst_32665__$1);

return statearr_32722;
})();
var statearr_32723_32745 = state_32701__$1;
(statearr_32723_32745[(2)] = null);

(statearr_32723_32745[(1)] = (2));


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
});})(c__18197__auto___32731,out))
;
return ((function (switch__18141__auto__,c__18197__auto___32731,out){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_32727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32727[(0)] = state_machine__18142__auto__);

(statearr_32727[(1)] = (1));

return statearr_32727;
});
var state_machine__18142__auto____1 = (function (state_32701){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_32701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e32728){if((e32728 instanceof Object)){
var ex__18145__auto__ = e32728;
var statearr_32729_32746 = state_32701;
(statearr_32729_32746[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32747 = state_32701;
state_32701 = G__32747;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_32701){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_32701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___32731,out))
})();
var state__18199__auto__ = (function (){var statearr_32730 = f__18198__auto__.call(null);
(statearr_32730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___32731);

return statearr_32730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___32731,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18197__auto___32890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___32890,out){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___32890,out){
return (function (state_32860){
var state_val_32861 = (state_32860[(1)]);
if((state_val_32861 === (7))){
var inst_32856 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32862_32891 = state_32860__$1;
(statearr_32862_32891[(2)] = inst_32856);

(statearr_32862_32891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (1))){
var inst_32819 = [];
var inst_32820 = inst_32819;
var inst_32821 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32860__$1 = (function (){var statearr_32863 = state_32860;
(statearr_32863[(7)] = inst_32821);

(statearr_32863[(8)] = inst_32820);

return statearr_32863;
})();
var statearr_32864_32892 = state_32860__$1;
(statearr_32864_32892[(2)] = null);

(statearr_32864_32892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (4))){
var inst_32824 = (state_32860[(9)]);
var inst_32824__$1 = (state_32860[(2)]);
var inst_32825 = (inst_32824__$1 == null);
var inst_32826 = cljs.core.not.call(null,inst_32825);
var state_32860__$1 = (function (){var statearr_32865 = state_32860;
(statearr_32865[(9)] = inst_32824__$1);

return statearr_32865;
})();
if(inst_32826){
var statearr_32866_32893 = state_32860__$1;
(statearr_32866_32893[(1)] = (5));

} else {
var statearr_32867_32894 = state_32860__$1;
(statearr_32867_32894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (15))){
var inst_32850 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32868_32895 = state_32860__$1;
(statearr_32868_32895[(2)] = inst_32850);

(statearr_32868_32895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (13))){
var state_32860__$1 = state_32860;
var statearr_32869_32896 = state_32860__$1;
(statearr_32869_32896[(2)] = null);

(statearr_32869_32896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (6))){
var inst_32820 = (state_32860[(8)]);
var inst_32845 = inst_32820.length;
var inst_32846 = (inst_32845 > (0));
var state_32860__$1 = state_32860;
if(cljs.core.truth_(inst_32846)){
var statearr_32870_32897 = state_32860__$1;
(statearr_32870_32897[(1)] = (12));

} else {
var statearr_32871_32898 = state_32860__$1;
(statearr_32871_32898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (3))){
var inst_32858 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32860__$1,inst_32858);
} else {
if((state_val_32861 === (12))){
var inst_32820 = (state_32860[(8)]);
var inst_32848 = cljs.core.vec.call(null,inst_32820);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32860__$1,(15),out,inst_32848);
} else {
if((state_val_32861 === (2))){
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32860__$1,(4),ch);
} else {
if((state_val_32861 === (11))){
var inst_32824 = (state_32860[(9)]);
var inst_32828 = (state_32860[(10)]);
var inst_32838 = (state_32860[(2)]);
var inst_32839 = [];
var inst_32840 = inst_32839.push(inst_32824);
var inst_32820 = inst_32839;
var inst_32821 = inst_32828;
var state_32860__$1 = (function (){var statearr_32872 = state_32860;
(statearr_32872[(7)] = inst_32821);

(statearr_32872[(11)] = inst_32838);

(statearr_32872[(8)] = inst_32820);

(statearr_32872[(12)] = inst_32840);

return statearr_32872;
})();
var statearr_32873_32899 = state_32860__$1;
(statearr_32873_32899[(2)] = null);

(statearr_32873_32899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (9))){
var inst_32820 = (state_32860[(8)]);
var inst_32836 = cljs.core.vec.call(null,inst_32820);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32860__$1,(11),out,inst_32836);
} else {
if((state_val_32861 === (5))){
var inst_32821 = (state_32860[(7)]);
var inst_32824 = (state_32860[(9)]);
var inst_32828 = (state_32860[(10)]);
var inst_32828__$1 = f.call(null,inst_32824);
var inst_32829 = cljs.core._EQ_.call(null,inst_32828__$1,inst_32821);
var inst_32830 = cljs.core.keyword_identical_QMARK_.call(null,inst_32821,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32831 = (inst_32829) || (inst_32830);
var state_32860__$1 = (function (){var statearr_32874 = state_32860;
(statearr_32874[(10)] = inst_32828__$1);

return statearr_32874;
})();
if(cljs.core.truth_(inst_32831)){
var statearr_32875_32900 = state_32860__$1;
(statearr_32875_32900[(1)] = (8));

} else {
var statearr_32876_32901 = state_32860__$1;
(statearr_32876_32901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (14))){
var inst_32853 = (state_32860[(2)]);
var inst_32854 = cljs.core.async.close_BANG_.call(null,out);
var state_32860__$1 = (function (){var statearr_32878 = state_32860;
(statearr_32878[(13)] = inst_32853);

return statearr_32878;
})();
var statearr_32879_32902 = state_32860__$1;
(statearr_32879_32902[(2)] = inst_32854);

(statearr_32879_32902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (10))){
var inst_32843 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32880_32903 = state_32860__$1;
(statearr_32880_32903[(2)] = inst_32843);

(statearr_32880_32903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (8))){
var inst_32820 = (state_32860[(8)]);
var inst_32824 = (state_32860[(9)]);
var inst_32828 = (state_32860[(10)]);
var inst_32833 = inst_32820.push(inst_32824);
var tmp32877 = inst_32820;
var inst_32820__$1 = tmp32877;
var inst_32821 = inst_32828;
var state_32860__$1 = (function (){var statearr_32881 = state_32860;
(statearr_32881[(7)] = inst_32821);

(statearr_32881[(14)] = inst_32833);

(statearr_32881[(8)] = inst_32820__$1);

return statearr_32881;
})();
var statearr_32882_32904 = state_32860__$1;
(statearr_32882_32904[(2)] = null);

(statearr_32882_32904[(1)] = (2));


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
});})(c__18197__auto___32890,out))
;
return ((function (switch__18141__auto__,c__18197__auto___32890,out){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_32886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32886[(0)] = state_machine__18142__auto__);

(statearr_32886[(1)] = (1));

return statearr_32886;
});
var state_machine__18142__auto____1 = (function (state_32860){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_32860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e32887){if((e32887 instanceof Object)){
var ex__18145__auto__ = e32887;
var statearr_32888_32905 = state_32860;
(statearr_32888_32905[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32906 = state_32860;
state_32860 = G__32906;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_32860){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_32860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___32890,out))
})();
var state__18199__auto__ = (function (){var statearr_32889 = f__18198__auto__.call(null);
(statearr_32889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___32890);

return statearr_32889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___32890,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map