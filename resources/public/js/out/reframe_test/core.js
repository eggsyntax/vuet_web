// Compiled by ClojureScript 0.0-2843 {}
goog.provide('reframe_test.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('reframe_test.subs');
goog.require('reframe_test.views');
goog.require('reframe_test.handlers');
goog.require('re_frame.core');
reframe_test.core.mount_root = (function mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe_test.views.reframe_test_app], null),document.getElementById("app"));
});
reframe_test.core.init_BANG_ = (function init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null));

return reframe_test.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map