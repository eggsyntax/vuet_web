// Compiled by ClojureScript 0.0-2843 {}
goog.provide('reframe_test.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reframe_test.db');
reframe_test.handlers.standard_middlewares = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,(cljs.core.truth_(goog.DEBUG)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug,re_frame.core.after.call(null,reframe_test.db.valid_schema_QMARK_)], null):null)], null);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (_,___$1){
return reframe_test.db.default_value;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-name","set-name",1154683102),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe_test.handlers.standard_middlewares,re_frame.core.path.call(null,new cljs.core.Keyword(null,"name","name",1843675177))], null),(function (db,p__35158){
var vec__35159 = p__35158;
var new_name = cljs.core.nth.call(null,vec__35159,(0),null);
return new_name;
}));

//# sourceMappingURL=handlers.js.map