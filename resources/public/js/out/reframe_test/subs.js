// Compiled by ClojureScript 0.0-2843 {}
goog.provide('reframe_test.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"initialised?","initialised?",-2031580443),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"name","name",1843675177),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));

//# sourceMappingURL=subs.js.map