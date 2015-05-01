// Compiled by ClojureScript 0.0-2843 {}
goog.provide('reframe_test.db');
goog.require('cljs.core');
goog.require('schema.core');
reframe_test.db.schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str], null);
/**
* validate given db, writing any problems to console.error
*/
reframe_test.db.valid_schema_QMARK_ = (function valid_schema_QMARK_(db){
var res = schema.core.check.call(null,reframe_test.db.schema,db);
if(cljs.core.some_QMARK_.call(null,res)){
return console.error([cljs.core.str("schema problem: "),cljs.core.str(res)].join(''));
} else {
return null;
}
});
reframe_test.db.default_value = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"reframe"], null);

//# sourceMappingURL=db.js.map