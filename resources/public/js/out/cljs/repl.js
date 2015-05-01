// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34396_34400 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34397_34401 = null;
var count__34398_34402 = (0);
var i__34399_34403 = (0);
while(true){
if((i__34399_34403 < count__34398_34402)){
var f_34404 = cljs.core._nth.call(null,chunk__34397_34401,i__34399_34403);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_34404);

var G__34405 = seq__34396_34400;
var G__34406 = chunk__34397_34401;
var G__34407 = count__34398_34402;
var G__34408 = (i__34399_34403 + (1));
seq__34396_34400 = G__34405;
chunk__34397_34401 = G__34406;
count__34398_34402 = G__34407;
i__34399_34403 = G__34408;
continue;
} else {
var temp__4126__auto___34409 = cljs.core.seq.call(null,seq__34396_34400);
if(temp__4126__auto___34409){
var seq__34396_34410__$1 = temp__4126__auto___34409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34396_34410__$1)){
var c__16301__auto___34411 = cljs.core.chunk_first.call(null,seq__34396_34410__$1);
var G__34412 = cljs.core.chunk_rest.call(null,seq__34396_34410__$1);
var G__34413 = c__16301__auto___34411;
var G__34414 = cljs.core.count.call(null,c__16301__auto___34411);
var G__34415 = (0);
seq__34396_34400 = G__34412;
chunk__34397_34401 = G__34413;
count__34398_34402 = G__34414;
i__34399_34403 = G__34415;
continue;
} else {
var f_34416 = cljs.core.first.call(null,seq__34396_34410__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_34416);

var G__34417 = cljs.core.next.call(null,seq__34396_34410__$1);
var G__34418 = null;
var G__34419 = (0);
var G__34420 = (0);
seq__34396_34400 = G__34417;
chunk__34397_34401 = G__34418;
count__34398_34402 = G__34419;
i__34399_34403 = G__34420;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map