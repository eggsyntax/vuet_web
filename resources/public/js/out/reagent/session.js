// Compiled by ClojureScript 0.0-2843 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Get the key's value from the session, returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get = (function() { 
var get__delegate = function (k,p__23122){
var vec__23124 = p__23122;
var default$ = cljs.core.nth.call(null,vec__23124,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__23122 = null;
if (arguments.length > 1) {
var G__23125__i = 0, G__23125__a = new Array(arguments.length -  1);
while (G__23125__i < G__23125__a.length) {G__23125__a[G__23125__i] = arguments[G__23125__i + 1]; ++G__23125__i;}
  p__23122 = new cljs.core.IndexedSeq(G__23125__a,0);
} 
return get__delegate.call(this,k,p__23122);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23126){
var k = cljs.core.first(arglist__23126);
var p__23122 = cljs.core.rest(arglist__23126);
return get__delegate(k,p__23122);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
reagent.session.put_BANG_ = (function put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
* Gets the value at the path specified by the vector ks from the session,
* returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get_in = (function() { 
var get_in__delegate = function (ks,p__23127){
var vec__23129 = p__23127;
var default$ = cljs.core.nth.call(null,vec__23129,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__23127 = null;
if (arguments.length > 1) {
var G__23130__i = 0, G__23130__a = new Array(arguments.length -  1);
while (G__23130__i < G__23130__a.length) {G__23130__a[G__23130__i] = arguments[G__23130__i + 1]; ++G__23130__i;}
  p__23127 = new cljs.core.IndexedSeq(G__23130__a,0);
} 
return get_in__delegate.call(this,ks,p__23127);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__23131){
var ks = cljs.core.first(arglist__23131);
var p__23127 = cljs.core.rest(arglist__23131);
return get_in__delegate(ks,p__23127);
});
get_in.cljs$core$IFn$_invoke$arity$variadic = get_in__delegate;
return get_in;
})()
;
/**
* Replace the current session's value with the result of executing f with
* the current value and args.
* @param {...*} var_args
*/
reagent.session.swap_BANG_ = (function() { 
var swap_BANG___delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
};
var swap_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__23132__i = 0, G__23132__a = new Array(arguments.length -  1);
while (G__23132__i < G__23132__a.length) {G__23132__a[G__23132__i] = arguments[G__23132__i + 1]; ++G__23132__i;}
  args = new cljs.core.IndexedSeq(G__23132__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__23133){
var f = cljs.core.first(arglist__23133);
var args = cljs.core.rest(arglist__23133);
return swap_BANG___delegate(f,args);
});
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___delegate;
return swap_BANG_;
})()
;
/**
* Remove all data from the session and start over cleanly.
*/
reagent.session.clear_BANG_ = (function clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
* Remove a key from the session
*/
reagent.session.remove_BANG_ = (function remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
* Associates a value in the session, where ks is a
* sequence of keys and v is the new value and returns
* a new nested structure. If any levels do not exist,
* hash-maps will be created.
*/
reagent.session.assoc_in_BANG_ = (function assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23134_SHARP_){
return cljs.core.assoc_in.call(null,p1__23134_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__23135){
var vec__23137 = p__23135;
var default$ = cljs.core.nth.call(null,vec__23137,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__23135 = null;
if (arguments.length > 1) {
var G__23138__i = 0, G__23138__a = new Array(arguments.length -  1);
while (G__23138__i < G__23138__a.length) {G__23138__a[G__23138__i] = arguments[G__23138__i + 1]; ++G__23138__i;}
  p__23135 = new cljs.core.IndexedSeq(G__23138__a,0);
} 
return get_BANG___delegate.call(this,k,p__23135);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__23139){
var k = cljs.core.first(arglist__23139);
var p__23135 = cljs.core.rest(arglist__23139);
return get_BANG___delegate(k,p__23135);
});
get_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_BANG___delegate;
return get_BANG_;
})()
;
/**
* Destructive get from the session. This returns the current value of the path
* specified by the vector ks and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_in_BANG_ = (function() { 
var get_in_BANG___delegate = function (ks,p__23140){
var vec__23142 = p__23140;
var default$ = cljs.core.nth.call(null,vec__23142,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__23140 = null;
if (arguments.length > 1) {
var G__23143__i = 0, G__23143__a = new Array(arguments.length -  1);
while (G__23143__i < G__23143__a.length) {G__23143__a[G__23143__i] = arguments[G__23143__i + 1]; ++G__23143__i;}
  p__23140 = new cljs.core.IndexedSeq(G__23143__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__23140);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__23144){
var ks = cljs.core.first(arglist__23144);
var p__23140 = cljs.core.rest(arglist__23144);
return get_in_BANG___delegate(ks,p__23140);
});
get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_in_BANG___delegate;
return get_in_BANG_;
})()
;
/**
* 'Updates' a value in the session, where ks is a
* sequence of keys and f is a function that will
* take the old value along with any supplied args and return
* the new value. If any levels do not exist, hash-maps
* will be created.
* @param {...*} var_args
*/
reagent.session.update_in_BANG_ = (function() { 
var update_in_BANG___delegate = function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23145_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__23145_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23146__i = 0, G__23146__a = new Array(arguments.length -  2);
while (G__23146__i < G__23146__a.length) {G__23146__a[G__23146__i] = arguments[G__23146__i + 2]; ++G__23146__i;}
  args = new cljs.core.IndexedSeq(G__23146__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__23147){
var ks = cljs.core.first(arglist__23147);
arglist__23147 = cljs.core.next(arglist__23147);
var f = cljs.core.first(arglist__23147);
var args = cljs.core.rest(arglist__23147);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map