// Compiled by ClojureScript 0.0-2843 {}
goog.provide('re_frame.middleware');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('re_frame.utils');
goog.require('re_frame.undo');
goog.require('reagent.ratom');
/**
* Acts as an adaptor, allowing handlers to be writen as pure functions.
* The re-frame router passes the `app-db` atom as the first parameter to any handler.
* This middleware adapts that atom to be the value within the atom.
* If you strip away the error/efficiency checks, this middleware is doing:
* (reset! app-db (handler @app-db event-vec))
* You don't have to use this middleware directly. It is automatically applied to
* your handler's middleware when you use "register-handler".
* In fact, the only way to by-pass automatic use of "pure" in your middleware
* is to use the low level registration function "re-frame.handlers/register-handler-base"
*/
re_frame.middleware.pure = (function pure(handler){
return (function pure_handler(app_db,event_vec){
if(!((function (){var G__29676 = app_db;
if(G__29676){
var bit__16195__auto__ = null;
if(cljs.core.truth_((function (){var or__15514__auto__ = bit__16195__auto__;
if(cljs.core.truth_(or__15514__auto__)){
return or__15514__auto__;
} else {
return G__29676.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__29676.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__29676);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__29676);
}
})())){
if(cljs.core.map_QMARK_.call(null,app_db)){
re_frame.utils.warn.call(null,"re-frame: Looks like \"pure\" is in the middleware pipeline twice. Ignoring.");
} else {
re_frame.utils.warn.call(null,"re-frame: \"pure\" middleware not given a Ratom.  Got: ",app_db);
}

return handler;
} else {
var db = cljs.core.deref.call(null,app_db);
var new_db = handler.call(null,db,event_vec);
if((new_db == null)){
return re_frame.utils.warn.call(null,"re-frame: your pure handler returned nil. It should return the new db state.");
} else {
if(!((db === new_db))){
return cljs.core.reset_BANG_.call(null,app_db,new_db);
} else {
return null;
}
}
}
});
});
/**
* Middleware which logs debug information to js/console for each event.
* Includes a clojure.data/diff of the db, before vs after, showing the changes
* caused by the event.
*/
re_frame.middleware.debug = (function debug(handler){
return (function debug_handler(db,v){
re_frame.utils.group.call(null,"re-frame event: ",v);

var new_db = handler.call(null,db,v);
var diff = clojure.data.diff.call(null,db,new_db);
re_frame.utils.log.call(null,"only before: ",cljs.core.first.call(null,diff));

re_frame.utils.log.call(null,"only after : ",cljs.core.second.call(null,diff));

re_frame.utils.groupEnd.call(null);

return new_db;
});
});
/**
* Middleware which removes the first element of v, allowing you to write
* more asthetically pleasing handlers. No leading underscore on the event-v!
* Your handlers will look like this:
* (defn my-handler
* [db [x y z]]    ;; <-- instead of [_ x y z]
* ....)
* 
*/
re_frame.middleware.trim_v = (function trim_v(handler){
return (function new_handler(db,v){
return handler.call(null,db,cljs.core.vec.call(null,cljs.core.rest.call(null,v)));
});
});
/**
* A middleware factory which supplies a sub-tree of `db` to the handler.
* Works a bit like update-in. Supplies a narrowed data structure for the handler.
* Afterwards, grafts the result of the handler back into db.
* Usage:
* (path :some :path)
* (path [:some :path])
* (path [:some :path] :to :here)
* (path [:some :path] [:to] :here)
* 
* @param {...*} var_args
*/
re_frame.middleware.path = (function() { 
var path__delegate = function (args){
var path__$1 = cljs.core.flatten.call(null,args);
var _ = ((cljs.core.empty_QMARK_.call(null,path__$1))?re_frame.utils.warn.call(null,"re-frame: path middleware given no params. Probably a mistake."):null);
return ((function (path__$1,_){
return (function middleware(handler){
return ((function (path__$1,_){
return (function path_handler(db,v){
return cljs.core.assoc_in.call(null,db,path__$1,handler.call(null,cljs.core.get_in.call(null,db,path__$1),v));
});
;})(path__$1,_))
});
;})(path__$1,_))
};
var path = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29677__i = 0, G__29677__a = new Array(arguments.length -  0);
while (G__29677__i < G__29677__a.length) {G__29677__a[G__29677__i] = arguments[G__29677__i + 0]; ++G__29677__i;}
  args = new cljs.core.IndexedSeq(G__29677__a,0);
} 
return path__delegate.call(this,args);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__29678){
var args = cljs.core.seq(arglist__29678);
return path__delegate(args);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* A Middleware factory which stores an undo checkpoint.
* "explanation" can be either a string or a function. If it is a
* function then must be:  (db event-vec) -> string.
* "explanation" can be nil. in which case "" is recorded.
* 
*/
re_frame.middleware.undoable = (function undoable(explanation){
return (function middleware(handler){
return (function undoable_handler(db,event_vec){
var explanation__$1 = ((cljs.core.fn_QMARK_.call(null,explanation))?explanation.call(null,db,event_vec):((typeof explanation === 'string')?explanation:(((explanation == null))?"":re_frame.utils.warn.call(null,"re-frame: undoable given a bad parameter. Got: ",explanation)
)));
re_frame.undo.store_now_BANG_.call(null,explanation__$1);

return handler.call(null,db,event_vec);
});
});
});
/**
* Middleware factory which runs a given function "f" in the after position.
* "f" is (db) -> db
* Unlike "after" which is about side effects, "enrich" expects f to process and alter
* db in some useful way, contributing to the derived data, flowing vibe.
* Imagine that todomvc needed to do duplicate detection - if any two todos had
* the same text, then highlight their background, and report them in a warning
* down the bottom.
* Almost any action (edit text, add new todo, remove a todo) requires a
* complete reassesment of duplication errors and warnings. Eg: that edit
* update might have introduced a new duplicate or removed one. Same with a
* todo removal.
* And to perform this enrichment, a function has inspect all the todos,
* possibly set flags on each, and set some overall list of duplicates.
* And this duplicates checking might be just one check amoung a number.
* "f" would need to be both adding and removing the duplicate warnings.
* By applying "f" in middleware, we keep the handlers simple and yet we
* ensure this important step is not missed.
*/
re_frame.middleware.enrich = (function enrich(f){
return (function middleware(handler){
return (function validate_handler(db,v){
return f.call(null,handler.call(null,db,v));
});
});
});
/**
* Middleware factory which runs a function "f" in the "after handler"
* position presumably for side effects.
* "f" is given the value of "db". It's return value is ignored.
* Examples: "f" can run schema validation. Or write current state to localstorage. etc.
* In effect, "f" is meant to sideeffect. It gets no chance to change db. See "enrich"
* (if you need that.)
*/
re_frame.middleware.after = (function after(f){
return (function middleware(handler){
return (function after_handler(db,v){
var new_db = handler.call(null,db,v);
f.call(null,new_db);

return new_db;
});
});
});

//# sourceMappingURL=middleware.js.map