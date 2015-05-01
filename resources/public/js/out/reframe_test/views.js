// Compiled by ClojureScript 0.0-2843 {}
goog.provide('reframe_test.views');
goog.require('cljs.core');
goog.require('re_frame.core');
reframe_test.views.main_panel = (function main_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello there ",cljs.core.deref.call(null,name)], null);
});
;})(name))
});
reframe_test.views.reframe_test_app = (function reframe_test_app(){
var ready_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialised?","initialised?",-2031580443)], null));
return ((function (ready_QMARK_){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,ready_QMARK_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Initialising ..."], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe_test.views.main_panel], null);
}
});
;})(ready_QMARK_))
});

//# sourceMappingURL=views.js.map