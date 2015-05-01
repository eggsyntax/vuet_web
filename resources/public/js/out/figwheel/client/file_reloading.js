// Compiled by ClojureScript 0.0-2843 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__34435_SHARP_,p2__34436_SHARP_){
var and__15502__auto__ = p1__34435_SHARP_;
if(cljs.core.truth_(and__15502__auto__)){
return p2__34436_SHARP_;
} else {
return and__15502__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__15514__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__15514__auto__){
return or__15514__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34438_SHARP_,p2__34437_SHARP_){
return [cljs.core.str(p2__34437_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__15514__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__15514__auto__){
return or__15514__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__15514__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__15514__auto__)){
return or__15514__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__16411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16413__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16415__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16415__auto__,method_table__16411__auto__,prefer_table__16412__auto__,method_cache__16413__auto__,cached_hierarchy__16414__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34439){
var map__34440 = p__34439;
var map__34440__$1 = ((cljs.core.seq_QMARK_.call(null,map__34440))?cljs.core.apply.call(null,cljs.core.hash_map,map__34440):map__34440);
var file = cljs.core.get.call(null,map__34440__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__34441){
var map__34442 = p__34441;
var map__34442__$1 = ((cljs.core.seq_QMARK_.call(null,map__34442))?cljs.core.apply.call(null,cljs.core.hash_map,map__34442):map__34442);
var namespace = cljs.core.get.call(null,map__34442__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__16411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16413__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16415__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16415__auto__,method_table__16411__auto__,prefer_table__16412__auto__,method_cache__16413__auto__,cached_hierarchy__16414__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e34443){if((e34443 instanceof Error)){
var e = e34443;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34443;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__34444,callback){
var map__34446 = p__34444;
var map__34446__$1 = ((cljs.core.seq_QMARK_.call(null,map__34446))?cljs.core.apply.call(null,cljs.core.hash_map,map__34446):map__34446);
var file_msg = map__34446__$1;
var request_url = cljs.core.get.call(null,map__34446__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34446,map__34446__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34446,map__34446__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__34447){
var map__34449 = p__34447;
var map__34449__$1 = ((cljs.core.seq_QMARK_.call(null,map__34449))?cljs.core.apply.call(null,cljs.core.hash_map,map__34449):map__34449);
var file_msg = map__34449__$1;
var meta_data = cljs.core.get.call(null,map__34449__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__34449__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__15514__auto__ = meta_data;
if(cljs.core.truth_(or__15514__auto__)){
return or__15514__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__15502__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__15502__auto__){
var or__15514__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__15514__auto__)){
return or__15514__auto__;
} else {
var or__15514__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__15514__auto____$1)){
return or__15514__auto____$1;
} else {
var and__15502__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__15502__auto____$1){
var or__15514__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__15514__auto____$2){
return or__15514__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__15502__auto____$1;
}
}
}
} else {
return and__15502__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__34450,callback){
var map__34452 = p__34450;
var map__34452__$1 = ((cljs.core.seq_QMARK_.call(null,map__34452))?cljs.core.apply.call(null,cljs.core.hash_map,map__34452):map__34452);
var file_msg = map__34452__$1;
var namespace = cljs.core.get.call(null,map__34452__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__34452__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18197__auto___34539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___34539,out){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___34539,out){
return (function (state_34521){
var state_val_34522 = (state_34521[(1)]);
if((state_val_34522 === (7))){
var inst_34505 = (state_34521[(7)]);
var inst_34511 = (state_34521[(2)]);
var inst_34512 = cljs.core.async.put_BANG_.call(null,out,inst_34511);
var inst_34501 = inst_34505;
var state_34521__$1 = (function (){var statearr_34523 = state_34521;
(statearr_34523[(8)] = inst_34501);

(statearr_34523[(9)] = inst_34512);

return statearr_34523;
})();
var statearr_34524_34540 = state_34521__$1;
(statearr_34524_34540[(2)] = null);

(statearr_34524_34540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (6))){
var inst_34517 = (state_34521[(2)]);
var state_34521__$1 = state_34521;
var statearr_34525_34541 = state_34521__$1;
(statearr_34525_34541[(2)] = inst_34517);

(statearr_34525_34541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (5))){
var inst_34515 = cljs.core.async.close_BANG_.call(null,out);
var state_34521__$1 = state_34521;
var statearr_34526_34542 = state_34521__$1;
(statearr_34526_34542[(2)] = inst_34515);

(statearr_34526_34542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (4))){
var inst_34504 = (state_34521[(10)]);
var inst_34509 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34504);
var state_34521__$1 = state_34521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34521__$1,(7),inst_34509);
} else {
if((state_val_34522 === (3))){
var inst_34519 = (state_34521[(2)]);
var state_34521__$1 = state_34521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34521__$1,inst_34519);
} else {
if((state_val_34522 === (2))){
var inst_34501 = (state_34521[(8)]);
var inst_34504 = (state_34521[(10)]);
var inst_34504__$1 = cljs.core.nth.call(null,inst_34501,(0),null);
var inst_34505 = cljs.core.nthnext.call(null,inst_34501,(1));
var inst_34506 = (inst_34504__$1 == null);
var inst_34507 = cljs.core.not.call(null,inst_34506);
var state_34521__$1 = (function (){var statearr_34527 = state_34521;
(statearr_34527[(7)] = inst_34505);

(statearr_34527[(10)] = inst_34504__$1);

return statearr_34527;
})();
if(inst_34507){
var statearr_34528_34543 = state_34521__$1;
(statearr_34528_34543[(1)] = (4));

} else {
var statearr_34529_34544 = state_34521__$1;
(statearr_34529_34544[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (1))){
var inst_34499 = cljs.core.nth.call(null,files,(0),null);
var inst_34500 = cljs.core.nthnext.call(null,files,(1));
var inst_34501 = files;
var state_34521__$1 = (function (){var statearr_34530 = state_34521;
(statearr_34530[(11)] = inst_34499);

(statearr_34530[(8)] = inst_34501);

(statearr_34530[(12)] = inst_34500);

return statearr_34530;
})();
var statearr_34531_34545 = state_34521__$1;
(statearr_34531_34545[(2)] = null);

(statearr_34531_34545[(1)] = (2));


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
});})(c__18197__auto___34539,out))
;
return ((function (switch__18141__auto__,c__18197__auto___34539,out){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_34535 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34535[(0)] = state_machine__18142__auto__);

(statearr_34535[(1)] = (1));

return statearr_34535;
});
var state_machine__18142__auto____1 = (function (state_34521){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_34521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e34536){if((e34536 instanceof Object)){
var ex__18145__auto__ = e34536;
var statearr_34537_34546 = state_34521;
(statearr_34537_34546[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34547 = state_34521;
state_34521 = G__34547;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_34521){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_34521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___34539,out))
})();
var state__18199__auto__ = (function (){var statearr_34538 = f__18198__auto__.call(null);
(statearr_34538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___34539);

return statearr_34538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___34539,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__34548,p__34549){
var map__34552 = p__34548;
var map__34552__$1 = ((cljs.core.seq_QMARK_.call(null,map__34552))?cljs.core.apply.call(null,cljs.core.hash_map,map__34552):map__34552);
var opts = map__34552__$1;
var url_rewriter = cljs.core.get.call(null,map__34552__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__34553 = p__34549;
var map__34553__$1 = ((cljs.core.seq_QMARK_.call(null,map__34553))?cljs.core.apply.call(null,cljs.core.hash_map,map__34553):map__34553);
var file_msg = map__34553__$1;
var file = cljs.core.get.call(null,map__34553__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__34554){
var map__34557 = p__34554;
var map__34557__$1 = ((cljs.core.seq_QMARK_.call(null,map__34557))?cljs.core.apply.call(null,cljs.core.hash_map,map__34557):map__34557);
var file = cljs.core.get.call(null,map__34557__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__34557__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__15502__auto__ = eval_body__$1;
if(cljs.core.truth_(and__15502__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__15502__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e34558){var e = e34558;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__34563,p__34564){
var map__34765 = p__34563;
var map__34765__$1 = ((cljs.core.seq_QMARK_.call(null,map__34765))?cljs.core.apply.call(null,cljs.core.hash_map,map__34765):map__34765);
var opts = map__34765__$1;
var load_unchanged_files = cljs.core.get.call(null,map__34765__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__34765__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__34765__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__34766 = p__34564;
var map__34766__$1 = ((cljs.core.seq_QMARK_.call(null,map__34766))?cljs.core.apply.call(null,cljs.core.hash_map,map__34766):map__34766);
var msg = map__34766__$1;
var files = cljs.core.get.call(null,map__34766__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files){
return (function (state_34890){
var state_val_34891 = (state_34890[(1)]);
if((state_val_34891 === (7))){
var inst_34780 = (state_34890[(7)]);
var inst_34779 = (state_34890[(8)]);
var inst_34778 = (state_34890[(9)]);
var inst_34777 = (state_34890[(10)]);
var inst_34785 = cljs.core._nth.call(null,inst_34778,inst_34780);
var inst_34786 = figwheel.client.file_reloading.eval_body.call(null,inst_34785);
var inst_34787 = (inst_34780 + (1));
var tmp34892 = inst_34779;
var tmp34893 = inst_34778;
var tmp34894 = inst_34777;
var inst_34777__$1 = tmp34894;
var inst_34778__$1 = tmp34893;
var inst_34779__$1 = tmp34892;
var inst_34780__$1 = inst_34787;
var state_34890__$1 = (function (){var statearr_34895 = state_34890;
(statearr_34895[(7)] = inst_34780__$1);

(statearr_34895[(8)] = inst_34779__$1);

(statearr_34895[(9)] = inst_34778__$1);

(statearr_34895[(11)] = inst_34786);

(statearr_34895[(10)] = inst_34777__$1);

return statearr_34895;
})();
var statearr_34896_34965 = state_34890__$1;
(statearr_34896_34965[(2)] = null);

(statearr_34896_34965[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (20))){
var inst_34826 = (state_34890[(12)]);
var inst_34829 = (state_34890[(13)]);
var inst_34822 = (state_34890[(14)]);
var inst_34823 = (state_34890[(15)]);
var inst_34827 = (state_34890[(16)]);
var inst_34832 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34834 = (function (){var files_not_loaded = inst_34829;
var res = inst_34827;
var res_SINGLEQUOTE_ = inst_34826;
var files_SINGLEQUOTE_ = inst_34823;
var all_files = inst_34822;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34826,inst_34829,inst_34822,inst_34823,inst_34827,inst_34832,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files){
return (function (p__34833){
var map__34897 = p__34833;
var map__34897__$1 = ((cljs.core.seq_QMARK_.call(null,map__34897))?cljs.core.apply.call(null,cljs.core.hash_map,map__34897):map__34897);
var file = cljs.core.get.call(null,map__34897__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__34897__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34826,inst_34829,inst_34822,inst_34823,inst_34827,inst_34832,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files))
})();
var inst_34835 = cljs.core.map.call(null,inst_34834,inst_34827);
var inst_34836 = cljs.core.pr_str.call(null,inst_34835);
var inst_34837 = figwheel.client.utils.log.call(null,inst_34836);
var inst_34838 = (function (){var files_not_loaded = inst_34829;
var res = inst_34827;
var res_SINGLEQUOTE_ = inst_34826;
var files_SINGLEQUOTE_ = inst_34823;
var all_files = inst_34822;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34826,inst_34829,inst_34822,inst_34823,inst_34827,inst_34832,inst_34834,inst_34835,inst_34836,inst_34837,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34826,inst_34829,inst_34822,inst_34823,inst_34827,inst_34832,inst_34834,inst_34835,inst_34836,inst_34837,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files))
})();
var inst_34839 = setTimeout(inst_34838,(10));
var state_34890__$1 = (function (){var statearr_34898 = state_34890;
(statearr_34898[(17)] = inst_34837);

(statearr_34898[(18)] = inst_34832);

return statearr_34898;
})();
var statearr_34899_34966 = state_34890__$1;
(statearr_34899_34966[(2)] = inst_34839);

(statearr_34899_34966[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (27))){
var inst_34849 = (state_34890[(19)]);
var state_34890__$1 = state_34890;
var statearr_34900_34967 = state_34890__$1;
(statearr_34900_34967[(2)] = inst_34849);

(statearr_34900_34967[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (1))){
var inst_34769 = (state_34890[(20)]);
var inst_34767 = before_jsload.call(null,files);
var inst_34768 = (function (){return ((function (inst_34769,inst_34767,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files){
return (function (p1__34559_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34559_SHARP_);
});
;})(inst_34769,inst_34767,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files))
})();
var inst_34769__$1 = cljs.core.filter.call(null,inst_34768,files);
var inst_34770 = cljs.core.not_empty.call(null,inst_34769__$1);
var state_34890__$1 = (function (){var statearr_34901 = state_34890;
(statearr_34901[(20)] = inst_34769__$1);

(statearr_34901[(21)] = inst_34767);

return statearr_34901;
})();
if(cljs.core.truth_(inst_34770)){
var statearr_34902_34968 = state_34890__$1;
(statearr_34902_34968[(1)] = (2));

} else {
var statearr_34903_34969 = state_34890__$1;
(statearr_34903_34969[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (24))){
var state_34890__$1 = state_34890;
var statearr_34904_34970 = state_34890__$1;
(statearr_34904_34970[(2)] = null);

(statearr_34904_34970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (4))){
var inst_34814 = (state_34890[(2)]);
var inst_34815 = (function (){return ((function (inst_34814,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files){
return (function (p1__34560_SHARP_){
var and__15502__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34560_SHARP_);
if(cljs.core.truth_(and__15502__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34560_SHARP_));
} else {
return and__15502__auto__;
}
});
;})(inst_34814,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files))
})();
var inst_34816 = cljs.core.filter.call(null,inst_34815,files);
var state_34890__$1 = (function (){var statearr_34905 = state_34890;
(statearr_34905[(22)] = inst_34816);

(statearr_34905[(23)] = inst_34814);

return statearr_34905;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_34906_34971 = state_34890__$1;
(statearr_34906_34971[(1)] = (16));

} else {
var statearr_34907_34972 = state_34890__$1;
(statearr_34907_34972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (15))){
var inst_34804 = (state_34890[(2)]);
var state_34890__$1 = state_34890;
var statearr_34908_34973 = state_34890__$1;
(statearr_34908_34973[(2)] = inst_34804);

(statearr_34908_34973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (21))){
var state_34890__$1 = state_34890;
var statearr_34909_34974 = state_34890__$1;
(statearr_34909_34974[(2)] = null);

(statearr_34909_34974[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (31))){
var inst_34857 = (state_34890[(24)]);
var inst_34867 = (state_34890[(2)]);
var inst_34868 = cljs.core.not_empty.call(null,inst_34857);
var state_34890__$1 = (function (){var statearr_34910 = state_34890;
(statearr_34910[(25)] = inst_34867);

return statearr_34910;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_34911_34975 = state_34890__$1;
(statearr_34911_34975[(1)] = (32));

} else {
var statearr_34912_34976 = state_34890__$1;
(statearr_34912_34976[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (32))){
var inst_34857 = (state_34890[(24)]);
var inst_34870 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34857);
var inst_34871 = cljs.core.pr_str.call(null,inst_34870);
var inst_34872 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_34871)].join('');
var inst_34873 = figwheel.client.utils.log.call(null,inst_34872);
var state_34890__$1 = state_34890;
var statearr_34913_34977 = state_34890__$1;
(statearr_34913_34977[(2)] = inst_34873);

(statearr_34913_34977[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (33))){
var state_34890__$1 = state_34890;
var statearr_34914_34978 = state_34890__$1;
(statearr_34914_34978[(2)] = null);

(statearr_34914_34978[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (13))){
var inst_34790 = (state_34890[(26)]);
var inst_34794 = cljs.core.chunk_first.call(null,inst_34790);
var inst_34795 = cljs.core.chunk_rest.call(null,inst_34790);
var inst_34796 = cljs.core.count.call(null,inst_34794);
var inst_34777 = inst_34795;
var inst_34778 = inst_34794;
var inst_34779 = inst_34796;
var inst_34780 = (0);
var state_34890__$1 = (function (){var statearr_34915 = state_34890;
(statearr_34915[(7)] = inst_34780);

(statearr_34915[(8)] = inst_34779);

(statearr_34915[(9)] = inst_34778);

(statearr_34915[(10)] = inst_34777);

return statearr_34915;
})();
var statearr_34916_34979 = state_34890__$1;
(statearr_34916_34979[(2)] = null);

(statearr_34916_34979[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (22))){
var inst_34829 = (state_34890[(13)]);
var inst_34842 = (state_34890[(2)]);
var inst_34843 = cljs.core.not_empty.call(null,inst_34829);
var state_34890__$1 = (function (){var statearr_34917 = state_34890;
(statearr_34917[(27)] = inst_34842);

return statearr_34917;
})();
if(cljs.core.truth_(inst_34843)){
var statearr_34918_34980 = state_34890__$1;
(statearr_34918_34980[(1)] = (23));

} else {
var statearr_34919_34981 = state_34890__$1;
(statearr_34919_34981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (36))){
var state_34890__$1 = state_34890;
var statearr_34920_34982 = state_34890__$1;
(statearr_34920_34982[(2)] = null);

(statearr_34920_34982[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (29))){
var inst_34858 = (state_34890[(28)]);
var inst_34861 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34858);
var inst_34862 = cljs.core.pr_str.call(null,inst_34861);
var inst_34863 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34862)].join('');
var inst_34864 = figwheel.client.utils.log.call(null,inst_34863);
var state_34890__$1 = state_34890;
var statearr_34921_34983 = state_34890__$1;
(statearr_34921_34983[(2)] = inst_34864);

(statearr_34921_34983[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (6))){
var inst_34811 = (state_34890[(2)]);
var state_34890__$1 = state_34890;
var statearr_34922_34984 = state_34890__$1;
(statearr_34922_34984[(2)] = inst_34811);

(statearr_34922_34984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (28))){
var inst_34858 = (state_34890[(28)]);
var inst_34855 = (state_34890[(2)]);
var inst_34856 = cljs.core.get.call(null,inst_34855,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34857 = cljs.core.get.call(null,inst_34855,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_34858__$1 = cljs.core.get.call(null,inst_34855,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34859 = cljs.core.not_empty.call(null,inst_34858__$1);
var state_34890__$1 = (function (){var statearr_34923 = state_34890;
(statearr_34923[(24)] = inst_34857);

(statearr_34923[(29)] = inst_34856);

(statearr_34923[(28)] = inst_34858__$1);

return statearr_34923;
})();
if(cljs.core.truth_(inst_34859)){
var statearr_34924_34985 = state_34890__$1;
(statearr_34924_34985[(1)] = (29));

} else {
var statearr_34925_34986 = state_34890__$1;
(statearr_34925_34986[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (25))){
var inst_34888 = (state_34890[(2)]);
var state_34890__$1 = state_34890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34890__$1,inst_34888);
} else {
if((state_val_34891 === (34))){
var inst_34856 = (state_34890[(29)]);
var inst_34876 = (state_34890[(2)]);
var inst_34877 = cljs.core.not_empty.call(null,inst_34856);
var state_34890__$1 = (function (){var statearr_34926 = state_34890;
(statearr_34926[(30)] = inst_34876);

return statearr_34926;
})();
if(cljs.core.truth_(inst_34877)){
var statearr_34927_34987 = state_34890__$1;
(statearr_34927_34987[(1)] = (35));

} else {
var statearr_34928_34988 = state_34890__$1;
(statearr_34928_34988[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (17))){
var inst_34816 = (state_34890[(22)]);
var state_34890__$1 = state_34890;
var statearr_34929_34989 = state_34890__$1;
(statearr_34929_34989[(2)] = inst_34816);

(statearr_34929_34989[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (3))){
var state_34890__$1 = state_34890;
var statearr_34930_34990 = state_34890__$1;
(statearr_34930_34990[(2)] = null);

(statearr_34930_34990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (12))){
var inst_34807 = (state_34890[(2)]);
var state_34890__$1 = state_34890;
var statearr_34931_34991 = state_34890__$1;
(statearr_34931_34991[(2)] = inst_34807);

(statearr_34931_34991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (2))){
var inst_34769 = (state_34890[(20)]);
var inst_34776 = cljs.core.seq.call(null,inst_34769);
var inst_34777 = inst_34776;
var inst_34778 = null;
var inst_34779 = (0);
var inst_34780 = (0);
var state_34890__$1 = (function (){var statearr_34932 = state_34890;
(statearr_34932[(7)] = inst_34780);

(statearr_34932[(8)] = inst_34779);

(statearr_34932[(9)] = inst_34778);

(statearr_34932[(10)] = inst_34777);

return statearr_34932;
})();
var statearr_34933_34992 = state_34890__$1;
(statearr_34933_34992[(2)] = null);

(statearr_34933_34992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (23))){
var inst_34826 = (state_34890[(12)]);
var inst_34829 = (state_34890[(13)]);
var inst_34849 = (state_34890[(19)]);
var inst_34822 = (state_34890[(14)]);
var inst_34823 = (state_34890[(15)]);
var inst_34827 = (state_34890[(16)]);
var inst_34845 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34848 = (function (){var files_not_loaded = inst_34829;
var res = inst_34827;
var res_SINGLEQUOTE_ = inst_34826;
var files_SINGLEQUOTE_ = inst_34823;
var all_files = inst_34822;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34826,inst_34829,inst_34849,inst_34822,inst_34823,inst_34827,inst_34845,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files){
return (function (p__34847){
var map__34934 = p__34847;
var map__34934__$1 = ((cljs.core.seq_QMARK_.call(null,map__34934))?cljs.core.apply.call(null,cljs.core.hash_map,map__34934):map__34934);
var meta_data = cljs.core.get.call(null,map__34934__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34826,inst_34829,inst_34849,inst_34822,inst_34823,inst_34827,inst_34845,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files))
})();
var inst_34849__$1 = cljs.core.group_by.call(null,inst_34848,inst_34829);
var inst_34850 = cljs.core.seq_QMARK_.call(null,inst_34849__$1);
var state_34890__$1 = (function (){var statearr_34935 = state_34890;
(statearr_34935[(31)] = inst_34845);

(statearr_34935[(19)] = inst_34849__$1);

return statearr_34935;
})();
if(inst_34850){
var statearr_34936_34993 = state_34890__$1;
(statearr_34936_34993[(1)] = (26));

} else {
var statearr_34937_34994 = state_34890__$1;
(statearr_34937_34994[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (35))){
var inst_34856 = (state_34890[(29)]);
var inst_34879 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34856);
var inst_34880 = cljs.core.pr_str.call(null,inst_34879);
var inst_34881 = [cljs.core.str("not required: "),cljs.core.str(inst_34880)].join('');
var inst_34882 = figwheel.client.utils.log.call(null,inst_34881);
var state_34890__$1 = state_34890;
var statearr_34938_34995 = state_34890__$1;
(statearr_34938_34995[(2)] = inst_34882);

(statearr_34938_34995[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (19))){
var inst_34826 = (state_34890[(12)]);
var inst_34822 = (state_34890[(14)]);
var inst_34823 = (state_34890[(15)]);
var inst_34827 = (state_34890[(16)]);
var inst_34826__$1 = (state_34890[(2)]);
var inst_34827__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34826__$1);
var inst_34828 = (function (){var res = inst_34827__$1;
var res_SINGLEQUOTE_ = inst_34826__$1;
var files_SINGLEQUOTE_ = inst_34823;
var all_files = inst_34822;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34826,inst_34822,inst_34823,inst_34827,inst_34826__$1,inst_34827__$1,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files){
return (function (p1__34562_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34562_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34826,inst_34822,inst_34823,inst_34827,inst_34826__$1,inst_34827__$1,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files))
})();
var inst_34829 = cljs.core.filter.call(null,inst_34828,inst_34826__$1);
var inst_34830 = cljs.core.not_empty.call(null,inst_34827__$1);
var state_34890__$1 = (function (){var statearr_34939 = state_34890;
(statearr_34939[(12)] = inst_34826__$1);

(statearr_34939[(13)] = inst_34829);

(statearr_34939[(16)] = inst_34827__$1);

return statearr_34939;
})();
if(cljs.core.truth_(inst_34830)){
var statearr_34940_34996 = state_34890__$1;
(statearr_34940_34996[(1)] = (20));

} else {
var statearr_34941_34997 = state_34890__$1;
(statearr_34941_34997[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (11))){
var state_34890__$1 = state_34890;
var statearr_34942_34998 = state_34890__$1;
(statearr_34942_34998[(2)] = null);

(statearr_34942_34998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (9))){
var inst_34809 = (state_34890[(2)]);
var state_34890__$1 = state_34890;
var statearr_34943_34999 = state_34890__$1;
(statearr_34943_34999[(2)] = inst_34809);

(statearr_34943_34999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (5))){
var inst_34780 = (state_34890[(7)]);
var inst_34779 = (state_34890[(8)]);
var inst_34782 = (inst_34780 < inst_34779);
var inst_34783 = inst_34782;
var state_34890__$1 = state_34890;
if(cljs.core.truth_(inst_34783)){
var statearr_34944_35000 = state_34890__$1;
(statearr_34944_35000[(1)] = (7));

} else {
var statearr_34945_35001 = state_34890__$1;
(statearr_34945_35001[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (14))){
var inst_34790 = (state_34890[(26)]);
var inst_34799 = cljs.core.first.call(null,inst_34790);
var inst_34800 = figwheel.client.file_reloading.eval_body.call(null,inst_34799);
var inst_34801 = cljs.core.next.call(null,inst_34790);
var inst_34777 = inst_34801;
var inst_34778 = null;
var inst_34779 = (0);
var inst_34780 = (0);
var state_34890__$1 = (function (){var statearr_34946 = state_34890;
(statearr_34946[(7)] = inst_34780);

(statearr_34946[(8)] = inst_34779);

(statearr_34946[(32)] = inst_34800);

(statearr_34946[(9)] = inst_34778);

(statearr_34946[(10)] = inst_34777);

return statearr_34946;
})();
var statearr_34947_35002 = state_34890__$1;
(statearr_34947_35002[(2)] = null);

(statearr_34947_35002[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (26))){
var inst_34849 = (state_34890[(19)]);
var inst_34852 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34849);
var state_34890__$1 = state_34890;
var statearr_34948_35003 = state_34890__$1;
(statearr_34948_35003[(2)] = inst_34852);

(statearr_34948_35003[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (16))){
var inst_34816 = (state_34890[(22)]);
var inst_34818 = (function (){var all_files = inst_34816;
return ((function (all_files,inst_34816,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files){
return (function (p1__34561_SHARP_){
return cljs.core.update_in.call(null,p1__34561_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_34816,state_val_34891,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files))
})();
var inst_34819 = cljs.core.map.call(null,inst_34818,inst_34816);
var state_34890__$1 = state_34890;
var statearr_34949_35004 = state_34890__$1;
(statearr_34949_35004[(2)] = inst_34819);

(statearr_34949_35004[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (30))){
var state_34890__$1 = state_34890;
var statearr_34950_35005 = state_34890__$1;
(statearr_34950_35005[(2)] = null);

(statearr_34950_35005[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (10))){
var inst_34790 = (state_34890[(26)]);
var inst_34792 = cljs.core.chunked_seq_QMARK_.call(null,inst_34790);
var state_34890__$1 = state_34890;
if(inst_34792){
var statearr_34951_35006 = state_34890__$1;
(statearr_34951_35006[(1)] = (13));

} else {
var statearr_34952_35007 = state_34890__$1;
(statearr_34952_35007[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (18))){
var inst_34822 = (state_34890[(14)]);
var inst_34823 = (state_34890[(15)]);
var inst_34822__$1 = (state_34890[(2)]);
var inst_34823__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_34822__$1);
var inst_34824 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34823__$1);
var state_34890__$1 = (function (){var statearr_34953 = state_34890;
(statearr_34953[(14)] = inst_34822__$1);

(statearr_34953[(15)] = inst_34823__$1);

return statearr_34953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34890__$1,(19),inst_34824);
} else {
if((state_val_34891 === (37))){
var inst_34885 = (state_34890[(2)]);
var state_34890__$1 = state_34890;
var statearr_34954_35008 = state_34890__$1;
(statearr_34954_35008[(2)] = inst_34885);

(statearr_34954_35008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34891 === (8))){
var inst_34790 = (state_34890[(26)]);
var inst_34777 = (state_34890[(10)]);
var inst_34790__$1 = cljs.core.seq.call(null,inst_34777);
var state_34890__$1 = (function (){var statearr_34955 = state_34890;
(statearr_34955[(26)] = inst_34790__$1);

return statearr_34955;
})();
if(inst_34790__$1){
var statearr_34956_35009 = state_34890__$1;
(statearr_34956_35009[(1)] = (10));

} else {
var statearr_34957_35010 = state_34890__$1;
(statearr_34957_35010[(1)] = (11));

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
});})(c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files))
;
return ((function (switch__18141__auto__,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_34961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34961[(0)] = state_machine__18142__auto__);

(statearr_34961[(1)] = (1));

return statearr_34961;
});
var state_machine__18142__auto____1 = (function (state_34890){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_34890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e34962){if((e34962 instanceof Object)){
var ex__18145__auto__ = e34962;
var statearr_34963_35011 = state_34890;
(statearr_34963_35011[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35012 = state_34890;
state_34890 = G__35012;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_34890){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_34890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files))
})();
var state__18199__auto__ = (function (){var statearr_34964 = f__18198__auto__.call(null);
(statearr_34964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto__);

return statearr_34964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto__,map__34765,map__34765__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34766,map__34766__$1,msg,files))
);

return c__18197__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__35015,link){
var map__35017 = p__35015;
var map__35017__$1 = ((cljs.core.seq_QMARK_.call(null,map__35017))?cljs.core.apply.call(null,cljs.core.hash_map,map__35017):map__35017);
var file = cljs.core.get.call(null,map__35017__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__35017,map__35017__$1,file){
return (function (p1__35013_SHARP_,p2__35014_SHARP_){
if(cljs.core._EQ_.call(null,p1__35013_SHARP_,p2__35014_SHARP_)){
return p1__35013_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__35017,map__35017__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35021){
var map__35022 = p__35021;
var map__35022__$1 = ((cljs.core.seq_QMARK_.call(null,map__35022))?cljs.core.apply.call(null,cljs.core.hash_map,map__35022):map__35022);
var current_url_length = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35018_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35018_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__35023){
var map__35025 = p__35023;
var map__35025__$1 = ((cljs.core.seq_QMARK_.call(null,map__35025))?cljs.core.apply.call(null,cljs.core.hash_map,map__35025):map__35025);
var f_data = map__35025__$1;
var request_url = cljs.core.get.call(null,map__35025__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__35025__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__15514__auto__ = request_url;
if(cljs.core.truth_(or__15514__auto__)){
return or__15514__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__35026,files_msg){
var map__35048 = p__35026;
var map__35048__$1 = ((cljs.core.seq_QMARK_.call(null,map__35048))?cljs.core.apply.call(null,cljs.core.hash_map,map__35048):map__35048);
var opts = map__35048__$1;
var on_cssload = cljs.core.get.call(null,map__35048__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35049_35069 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35050_35070 = null;
var count__35051_35071 = (0);
var i__35052_35072 = (0);
while(true){
if((i__35052_35072 < count__35051_35071)){
var f_35073 = cljs.core._nth.call(null,chunk__35050_35070,i__35052_35072);
figwheel.client.file_reloading.reload_css_file.call(null,f_35073);

var G__35074 = seq__35049_35069;
var G__35075 = chunk__35050_35070;
var G__35076 = count__35051_35071;
var G__35077 = (i__35052_35072 + (1));
seq__35049_35069 = G__35074;
chunk__35050_35070 = G__35075;
count__35051_35071 = G__35076;
i__35052_35072 = G__35077;
continue;
} else {
var temp__4126__auto___35078 = cljs.core.seq.call(null,seq__35049_35069);
if(temp__4126__auto___35078){
var seq__35049_35079__$1 = temp__4126__auto___35078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35049_35079__$1)){
var c__16301__auto___35080 = cljs.core.chunk_first.call(null,seq__35049_35079__$1);
var G__35081 = cljs.core.chunk_rest.call(null,seq__35049_35079__$1);
var G__35082 = c__16301__auto___35080;
var G__35083 = cljs.core.count.call(null,c__16301__auto___35080);
var G__35084 = (0);
seq__35049_35069 = G__35081;
chunk__35050_35070 = G__35082;
count__35051_35071 = G__35083;
i__35052_35072 = G__35084;
continue;
} else {
var f_35085 = cljs.core.first.call(null,seq__35049_35079__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35085);

var G__35086 = cljs.core.next.call(null,seq__35049_35079__$1);
var G__35087 = null;
var G__35088 = (0);
var G__35089 = (0);
seq__35049_35069 = G__35086;
chunk__35050_35070 = G__35087;
count__35051_35071 = G__35088;
i__35052_35072 = G__35089;
continue;
}
} else {
}
}
break;
}

var c__18197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto__,map__35048,map__35048__$1,opts,on_cssload){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto__,map__35048,map__35048__$1,opts,on_cssload){
return (function (state_35059){
var state_val_35060 = (state_35059[(1)]);
if((state_val_35060 === (2))){
var inst_35055 = (state_35059[(2)]);
var inst_35056 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35057 = on_cssload.call(null,inst_35056);
var state_35059__$1 = (function (){var statearr_35061 = state_35059;
(statearr_35061[(7)] = inst_35055);

return statearr_35061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35059__$1,inst_35057);
} else {
if((state_val_35060 === (1))){
var inst_35053 = cljs.core.async.timeout.call(null,(100));
var state_35059__$1 = state_35059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35059__$1,(2),inst_35053);
} else {
return null;
}
}
});})(c__18197__auto__,map__35048,map__35048__$1,opts,on_cssload))
;
return ((function (switch__18141__auto__,c__18197__auto__,map__35048,map__35048__$1,opts,on_cssload){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_35065 = [null,null,null,null,null,null,null,null];
(statearr_35065[(0)] = state_machine__18142__auto__);

(statearr_35065[(1)] = (1));

return statearr_35065;
});
var state_machine__18142__auto____1 = (function (state_35059){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_35059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e35066){if((e35066 instanceof Object)){
var ex__18145__auto__ = e35066;
var statearr_35067_35090 = state_35059;
(statearr_35067_35090[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35091 = state_35059;
state_35059 = G__35091;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_35059){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_35059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto__,map__35048,map__35048__$1,opts,on_cssload))
})();
var state__18199__auto__ = (function (){var statearr_35068 = f__18198__auto__.call(null);
(statearr_35068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto__);

return statearr_35068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto__,map__35048,map__35048__$1,opts,on_cssload))
);

return c__18197__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map