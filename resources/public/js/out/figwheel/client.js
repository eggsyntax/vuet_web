// Compiled by ClojureScript 0.0-2843 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33503__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33504__i = 0, G__33504__a = new Array(arguments.length -  0);
while (G__33504__i < G__33504__a.length) {G__33504__a[G__33504__i] = arguments[G__33504__i + 0]; ++G__33504__i;}
  args = new cljs.core.IndexedSeq(G__33504__a,0);
} 
return G__33503__delegate.call(this,args);};
G__33503.cljs$lang$maxFixedArity = 0;
G__33503.cljs$lang$applyTo = (function (arglist__33505){
var args = cljs.core.seq(arglist__33505);
return G__33503__delegate(args);
});
G__33503.cljs$core$IFn$_invoke$arity$variadic = G__33503__delegate;
return G__33503;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__33506){
var map__33508 = p__33506;
var map__33508__$1 = ((cljs.core.seq_QMARK_.call(null,map__33508))?cljs.core.apply.call(null,cljs.core.hash_map,map__33508):map__33508);
var class$ = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__15514__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__15514__auto__)){
return or__15514__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__15502__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__15502__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__15502__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18197__auto___33637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___33637,ch){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___33637,ch){
return (function (state_33611){
var state_val_33612 = (state_33611[(1)]);
if((state_val_33612 === (7))){
var inst_33607 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
var statearr_33613_33638 = state_33611__$1;
(statearr_33613_33638[(2)] = inst_33607);

(statearr_33613_33638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (1))){
var state_33611__$1 = state_33611;
var statearr_33614_33639 = state_33611__$1;
(statearr_33614_33639[(2)] = null);

(statearr_33614_33639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (4))){
var inst_33575 = (state_33611[(7)]);
var inst_33575__$1 = (state_33611[(2)]);
var state_33611__$1 = (function (){var statearr_33615 = state_33611;
(statearr_33615[(7)] = inst_33575__$1);

return statearr_33615;
})();
if(cljs.core.truth_(inst_33575__$1)){
var statearr_33616_33640 = state_33611__$1;
(statearr_33616_33640[(1)] = (5));

} else {
var statearr_33617_33641 = state_33611__$1;
(statearr_33617_33641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (13))){
var state_33611__$1 = state_33611;
var statearr_33618_33642 = state_33611__$1;
(statearr_33618_33642[(2)] = null);

(statearr_33618_33642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (6))){
var state_33611__$1 = state_33611;
var statearr_33619_33643 = state_33611__$1;
(statearr_33619_33643[(2)] = null);

(statearr_33619_33643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (3))){
var inst_33609 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33611__$1,inst_33609);
} else {
if((state_val_33612 === (12))){
var inst_33582 = (state_33611[(8)]);
var inst_33595 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33582);
var inst_33596 = cljs.core.first.call(null,inst_33595);
var inst_33597 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33596);
var inst_33598 = console.warn("Figwheel: Not loading code with warnings - ",inst_33597);
var state_33611__$1 = state_33611;
var statearr_33620_33644 = state_33611__$1;
(statearr_33620_33644[(2)] = inst_33598);

(statearr_33620_33644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (2))){
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33611__$1,(4),ch);
} else {
if((state_val_33612 === (11))){
var inst_33591 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
var statearr_33621_33645 = state_33611__$1;
(statearr_33621_33645[(2)] = inst_33591);

(statearr_33621_33645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (9))){
var inst_33581 = (state_33611[(9)]);
var inst_33593 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33581,opts);
var state_33611__$1 = state_33611;
if(inst_33593){
var statearr_33622_33646 = state_33611__$1;
(statearr_33622_33646[(1)] = (12));

} else {
var statearr_33623_33647 = state_33611__$1;
(statearr_33623_33647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (5))){
var inst_33581 = (state_33611[(9)]);
var inst_33575 = (state_33611[(7)]);
var inst_33577 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33578 = (new cljs.core.PersistentArrayMap(null,2,inst_33577,null));
var inst_33579 = (new cljs.core.PersistentHashSet(null,inst_33578,null));
var inst_33580 = figwheel.client.focus_msgs.call(null,inst_33579,inst_33575);
var inst_33581__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33580);
var inst_33582 = cljs.core.first.call(null,inst_33580);
var inst_33583 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33581__$1,opts);
var state_33611__$1 = (function (){var statearr_33624 = state_33611;
(statearr_33624[(8)] = inst_33582);

(statearr_33624[(9)] = inst_33581__$1);

return statearr_33624;
})();
if(cljs.core.truth_(inst_33583)){
var statearr_33625_33648 = state_33611__$1;
(statearr_33625_33648[(1)] = (8));

} else {
var statearr_33626_33649 = state_33611__$1;
(statearr_33626_33649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (14))){
var inst_33601 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
var statearr_33627_33650 = state_33611__$1;
(statearr_33627_33650[(2)] = inst_33601);

(statearr_33627_33650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (10))){
var inst_33603 = (state_33611[(2)]);
var state_33611__$1 = (function (){var statearr_33628 = state_33611;
(statearr_33628[(10)] = inst_33603);

return statearr_33628;
})();
var statearr_33629_33651 = state_33611__$1;
(statearr_33629_33651[(2)] = null);

(statearr_33629_33651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (8))){
var inst_33582 = (state_33611[(8)]);
var inst_33585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33586 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33582);
var inst_33587 = cljs.core.async.timeout.call(null,(1000));
var inst_33588 = [inst_33586,inst_33587];
var inst_33589 = (new cljs.core.PersistentVector(null,2,(5),inst_33585,inst_33588,null));
var state_33611__$1 = state_33611;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33611__$1,(11),inst_33589);
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
});})(c__18197__auto___33637,ch))
;
return ((function (switch__18141__auto__,c__18197__auto___33637,ch){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_33633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33633[(0)] = state_machine__18142__auto__);

(statearr_33633[(1)] = (1));

return statearr_33633;
});
var state_machine__18142__auto____1 = (function (state_33611){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_33611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e33634){if((e33634 instanceof Object)){
var ex__18145__auto__ = e33634;
var statearr_33635_33652 = state_33611;
(statearr_33635_33652[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33653 = state_33611;
state_33611 = G__33653;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_33611){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_33611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___33637,ch))
})();
var state__18199__auto__ = (function (){var statearr_33636 = f__18198__auto__.call(null);
(statearr_33636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___33637);

return statearr_33636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___33637,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33654_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33654_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_33663 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__33656_SHARP_,p2__33655_SHARP_){
return [cljs.core.str(p2__33655_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33663){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_33661 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33662 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33661,_STAR_print_newline_STAR_33662,base_path_33663){
return (function() { 
var G__33664__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33665__i = 0, G__33665__a = new Array(arguments.length -  0);
while (G__33665__i < G__33665__a.length) {G__33665__a[G__33665__i] = arguments[G__33665__i + 0]; ++G__33665__i;}
  args = new cljs.core.IndexedSeq(G__33665__a,0);
} 
return G__33664__delegate.call(this,args);};
G__33664.cljs$lang$maxFixedArity = 0;
G__33664.cljs$lang$applyTo = (function (arglist__33666){
var args = cljs.core.seq(arglist__33666);
return G__33664__delegate(args);
});
G__33664.cljs$core$IFn$_invoke$arity$variadic = G__33664__delegate;
return G__33664;
})()
;})(_STAR_print_fn_STAR_33661,_STAR_print_newline_STAR_33662,base_path_33663))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33662;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33661;
}}catch (e33660){if((e33660 instanceof Error)){
var e = e33660;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33663], null));
} else {
var e = e33660;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33663))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__33667){
var map__33672 = p__33667;
var map__33672__$1 = ((cljs.core.seq_QMARK_.call(null,map__33672))?cljs.core.apply.call(null,cljs.core.hash_map,map__33672):map__33672);
var opts = map__33672__$1;
var build_id = cljs.core.get.call(null,map__33672__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33672,map__33672__$1,opts,build_id){
return (function (p__33673){
var vec__33674 = p__33673;
var map__33675 = cljs.core.nth.call(null,vec__33674,(0),null);
var map__33675__$1 = ((cljs.core.seq_QMARK_.call(null,map__33675))?cljs.core.apply.call(null,cljs.core.hash_map,map__33675):map__33675);
var msg = map__33675__$1;
var msg_name = cljs.core.get.call(null,map__33675__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33674,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__33674,map__33675,map__33675__$1,msg,msg_name,_,map__33672,map__33672__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33674,map__33675,map__33675__$1,msg,msg_name,_,map__33672,map__33672__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33672,map__33672__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__33679){
var vec__33680 = p__33679;
var map__33681 = cljs.core.nth.call(null,vec__33680,(0),null);
var map__33681__$1 = ((cljs.core.seq_QMARK_.call(null,map__33681))?cljs.core.apply.call(null,cljs.core.hash_map,map__33681):map__33681);
var msg = map__33681__$1;
var msg_name = cljs.core.get.call(null,map__33681__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33680,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__33682){
var map__33690 = p__33682;
var map__33690__$1 = ((cljs.core.seq_QMARK_.call(null,map__33690))?cljs.core.apply.call(null,cljs.core.hash_map,map__33690):map__33690);
var on_compile_fail = cljs.core.get.call(null,map__33690__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__33690__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__33690,map__33690__$1,on_compile_fail,on_compile_warning){
return (function (p__33691){
var vec__33692 = p__33691;
var map__33693 = cljs.core.nth.call(null,vec__33692,(0),null);
var map__33693__$1 = ((cljs.core.seq_QMARK_.call(null,map__33693))?cljs.core.apply.call(null,cljs.core.hash_map,map__33693):map__33693);
var msg = map__33693__$1;
var msg_name = cljs.core.get.call(null,map__33693__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33692,(1));
var pred__33694 = cljs.core._EQ_;
var expr__33695 = msg_name;
if(cljs.core.truth_(pred__33694.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33695))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33694.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33695))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33690,map__33690__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto__,msg_hist,msg_names,msg){
return (function (state_33892){
var state_val_33893 = (state_33892[(1)]);
if((state_val_33893 === (7))){
var inst_33828 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33894_33935 = state_33892__$1;
(statearr_33894_33935[(2)] = inst_33828);

(statearr_33894_33935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (20))){
var inst_33854 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33854){
var statearr_33895_33936 = state_33892__$1;
(statearr_33895_33936[(1)] = (22));

} else {
var statearr_33896_33937 = state_33892__$1;
(statearr_33896_33937[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (27))){
var inst_33866 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33867 = figwheel.client.heads_up.display_warning.call(null,inst_33866);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(30),inst_33867);
} else {
if((state_val_33893 === (1))){
var inst_33816 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33816)){
var statearr_33897_33938 = state_33892__$1;
(statearr_33897_33938[(1)] = (2));

} else {
var statearr_33898_33939 = state_33892__$1;
(statearr_33898_33939[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (24))){
var inst_33882 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33899_33940 = state_33892__$1;
(statearr_33899_33940[(2)] = inst_33882);

(statearr_33899_33940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (4))){
var inst_33890 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33892__$1,inst_33890);
} else {
if((state_val_33893 === (15))){
var inst_33843 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33844 = figwheel.client.format_messages.call(null,inst_33843);
var inst_33845 = figwheel.client.heads_up.display_error.call(null,inst_33844);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(18),inst_33845);
} else {
if((state_val_33893 === (21))){
var inst_33884 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33900_33941 = state_33892__$1;
(statearr_33900_33941[(2)] = inst_33884);

(statearr_33900_33941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (31))){
var inst_33873 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(34),inst_33873);
} else {
if((state_val_33893 === (32))){
var state_33892__$1 = state_33892;
var statearr_33901_33942 = state_33892__$1;
(statearr_33901_33942[(2)] = null);

(statearr_33901_33942[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (33))){
var inst_33878 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33902_33943 = state_33892__$1;
(statearr_33902_33943[(2)] = inst_33878);

(statearr_33902_33943[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (13))){
var inst_33834 = (state_33892[(2)]);
var inst_33835 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33836 = figwheel.client.format_messages.call(null,inst_33835);
var inst_33837 = figwheel.client.heads_up.display_error.call(null,inst_33836);
var state_33892__$1 = (function (){var statearr_33903 = state_33892;
(statearr_33903[(7)] = inst_33834);

return statearr_33903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(14),inst_33837);
} else {
if((state_val_33893 === (22))){
var inst_33856 = figwheel.client.heads_up.clear.call(null);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(25),inst_33856);
} else {
if((state_val_33893 === (29))){
var inst_33880 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33904_33944 = state_33892__$1;
(statearr_33904_33944[(2)] = inst_33880);

(statearr_33904_33944[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (6))){
var inst_33824 = figwheel.client.heads_up.clear.call(null);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(9),inst_33824);
} else {
if((state_val_33893 === (28))){
var inst_33871 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33871){
var statearr_33905_33945 = state_33892__$1;
(statearr_33905_33945[(1)] = (31));

} else {
var statearr_33906_33946 = state_33892__$1;
(statearr_33906_33946[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (25))){
var inst_33858 = (state_33892[(2)]);
var inst_33859 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33860 = figwheel.client.heads_up.display_warning.call(null,inst_33859);
var state_33892__$1 = (function (){var statearr_33907 = state_33892;
(statearr_33907[(8)] = inst_33858);

return statearr_33907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(26),inst_33860);
} else {
if((state_val_33893 === (34))){
var inst_33875 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33908_33947 = state_33892__$1;
(statearr_33908_33947[(2)] = inst_33875);

(statearr_33908_33947[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (17))){
var inst_33886 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33909_33948 = state_33892__$1;
(statearr_33909_33948[(2)] = inst_33886);

(statearr_33909_33948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (3))){
var inst_33830 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33830){
var statearr_33910_33949 = state_33892__$1;
(statearr_33910_33949[(1)] = (10));

} else {
var statearr_33911_33950 = state_33892__$1;
(statearr_33911_33950[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (12))){
var inst_33888 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33912_33951 = state_33892__$1;
(statearr_33912_33951[(2)] = inst_33888);

(statearr_33912_33951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (2))){
var inst_33818 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33818)){
var statearr_33913_33952 = state_33892__$1;
(statearr_33913_33952[(1)] = (5));

} else {
var statearr_33914_33953 = state_33892__$1;
(statearr_33914_33953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (23))){
var inst_33864 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33864){
var statearr_33915_33954 = state_33892__$1;
(statearr_33915_33954[(1)] = (27));

} else {
var statearr_33916_33955 = state_33892__$1;
(statearr_33916_33955[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (19))){
var inst_33851 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33852 = figwheel.client.heads_up.append_message.call(null,inst_33851);
var state_33892__$1 = state_33892;
var statearr_33917_33956 = state_33892__$1;
(statearr_33917_33956[(2)] = inst_33852);

(statearr_33917_33956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (11))){
var inst_33841 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33841){
var statearr_33918_33957 = state_33892__$1;
(statearr_33918_33957[(1)] = (15));

} else {
var statearr_33919_33958 = state_33892__$1;
(statearr_33919_33958[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (9))){
var inst_33826 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33920_33959 = state_33892__$1;
(statearr_33920_33959[(2)] = inst_33826);

(statearr_33920_33959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (5))){
var inst_33820 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(8),inst_33820);
} else {
if((state_val_33893 === (14))){
var inst_33839 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33921_33960 = state_33892__$1;
(statearr_33921_33960[(2)] = inst_33839);

(statearr_33921_33960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (26))){
var inst_33862 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33922_33961 = state_33892__$1;
(statearr_33922_33961[(2)] = inst_33862);

(statearr_33922_33961[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (16))){
var inst_33849 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33849){
var statearr_33923_33962 = state_33892__$1;
(statearr_33923_33962[(1)] = (19));

} else {
var statearr_33924_33963 = state_33892__$1;
(statearr_33924_33963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (30))){
var inst_33869 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33925_33964 = state_33892__$1;
(statearr_33925_33964[(2)] = inst_33869);

(statearr_33925_33964[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (10))){
var inst_33832 = figwheel.client.heads_up.clear.call(null);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(13),inst_33832);
} else {
if((state_val_33893 === (18))){
var inst_33847 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33926_33965 = state_33892__$1;
(statearr_33926_33965[(2)] = inst_33847);

(statearr_33926_33965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (8))){
var inst_33822 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33927_33966 = state_33892__$1;
(statearr_33927_33966[(2)] = inst_33822);

(statearr_33927_33966[(1)] = (7));


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
});})(c__18197__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18141__auto__,c__18197__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_33931 = [null,null,null,null,null,null,null,null,null];
(statearr_33931[(0)] = state_machine__18142__auto__);

(statearr_33931[(1)] = (1));

return statearr_33931;
});
var state_machine__18142__auto____1 = (function (state_33892){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_33892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e33932){if((e33932 instanceof Object)){
var ex__18145__auto__ = e33932;
var statearr_33933_33967 = state_33892;
(statearr_33933_33967[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33968 = state_33892;
state_33892 = G__33968;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_33892){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_33892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto__,msg_hist,msg_names,msg))
})();
var state__18199__auto__ = (function (){var statearr_33934 = f__18198__auto__.call(null);
(statearr_33934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto__);

return statearr_33934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto__,msg_hist,msg_names,msg))
);

return c__18197__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18197__auto___34031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___34031,ch){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___34031,ch){
return (function (state_34014){
var state_val_34015 = (state_34014[(1)]);
if((state_val_34015 === (8))){
var inst_34006 = (state_34014[(2)]);
var state_34014__$1 = (function (){var statearr_34016 = state_34014;
(statearr_34016[(7)] = inst_34006);

return statearr_34016;
})();
var statearr_34017_34032 = state_34014__$1;
(statearr_34017_34032[(2)] = null);

(statearr_34017_34032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (7))){
var inst_34010 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
var statearr_34018_34033 = state_34014__$1;
(statearr_34018_34033[(2)] = inst_34010);

(statearr_34018_34033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (6))){
var state_34014__$1 = state_34014;
var statearr_34019_34034 = state_34014__$1;
(statearr_34019_34034[(2)] = null);

(statearr_34019_34034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (5))){
var inst_34002 = (state_34014[(8)]);
var inst_34004 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34002);
var state_34014__$1 = state_34014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34014__$1,(8),inst_34004);
} else {
if((state_val_34015 === (4))){
var inst_34002 = (state_34014[(8)]);
var inst_34002__$1 = (state_34014[(2)]);
var state_34014__$1 = (function (){var statearr_34020 = state_34014;
(statearr_34020[(8)] = inst_34002__$1);

return statearr_34020;
})();
if(cljs.core.truth_(inst_34002__$1)){
var statearr_34021_34035 = state_34014__$1;
(statearr_34021_34035[(1)] = (5));

} else {
var statearr_34022_34036 = state_34014__$1;
(statearr_34022_34036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (3))){
var inst_34012 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34014__$1,inst_34012);
} else {
if((state_val_34015 === (2))){
var state_34014__$1 = state_34014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34014__$1,(4),ch);
} else {
if((state_val_34015 === (1))){
var state_34014__$1 = state_34014;
var statearr_34023_34037 = state_34014__$1;
(statearr_34023_34037[(2)] = null);

(statearr_34023_34037[(1)] = (2));


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
});})(c__18197__auto___34031,ch))
;
return ((function (switch__18141__auto__,c__18197__auto___34031,ch){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_34027 = [null,null,null,null,null,null,null,null,null];
(statearr_34027[(0)] = state_machine__18142__auto__);

(statearr_34027[(1)] = (1));

return statearr_34027;
});
var state_machine__18142__auto____1 = (function (state_34014){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_34014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e34028){if((e34028 instanceof Object)){
var ex__18145__auto__ = e34028;
var statearr_34029_34038 = state_34014;
(statearr_34029_34038[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34039 = state_34014;
state_34014 = G__34039;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_34014){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_34014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___34031,ch))
})();
var state__18199__auto__ = (function (){var statearr_34030 = f__18198__auto__.call(null);
(statearr_34030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___34031);

return statearr_34030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___34031,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto__){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto__){
return (function (state_34060){
var state_val_34061 = (state_34060[(1)]);
if((state_val_34061 === (2))){
var inst_34057 = (state_34060[(2)]);
var inst_34058 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34060__$1 = (function (){var statearr_34062 = state_34060;
(statearr_34062[(7)] = inst_34057);

return statearr_34062;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34060__$1,inst_34058);
} else {
if((state_val_34061 === (1))){
var inst_34055 = cljs.core.async.timeout.call(null,(3000));
var state_34060__$1 = state_34060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34060__$1,(2),inst_34055);
} else {
return null;
}
}
});})(c__18197__auto__))
;
return ((function (switch__18141__auto__,c__18197__auto__){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_34066 = [null,null,null,null,null,null,null,null];
(statearr_34066[(0)] = state_machine__18142__auto__);

(statearr_34066[(1)] = (1));

return statearr_34066;
});
var state_machine__18142__auto____1 = (function (state_34060){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_34060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e34067){if((e34067 instanceof Object)){
var ex__18145__auto__ = e34067;
var statearr_34068_34070 = state_34060;
(statearr_34068_34070[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34071 = state_34060;
state_34060 = G__34071;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_34060){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_34060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto__))
})();
var state__18199__auto__ = (function (){var statearr_34069 = f__18198__auto__.call(null);
(statearr_34069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto__);

return statearr_34069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto__))
);

return c__18197__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__15502__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__15502__auto__)){
return ("CustomEvent" in window);
} else {
return and__15502__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj34075 = {"detail":url};
return obj34075;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__34076){
var map__34082 = p__34076;
var map__34082__$1 = ((cljs.core.seq_QMARK_.call(null,map__34082))?cljs.core.apply.call(null,cljs.core.hash_map,map__34082):map__34082);
var ed = map__34082__$1;
var exception_data = cljs.core.get.call(null,map__34082__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__34082__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34083_34087 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34084_34088 = null;
var count__34085_34089 = (0);
var i__34086_34090 = (0);
while(true){
if((i__34086_34090 < count__34085_34089)){
var msg_34091 = cljs.core._nth.call(null,chunk__34084_34088,i__34086_34090);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34091);

var G__34092 = seq__34083_34087;
var G__34093 = chunk__34084_34088;
var G__34094 = count__34085_34089;
var G__34095 = (i__34086_34090 + (1));
seq__34083_34087 = G__34092;
chunk__34084_34088 = G__34093;
count__34085_34089 = G__34094;
i__34086_34090 = G__34095;
continue;
} else {
var temp__4126__auto___34096 = cljs.core.seq.call(null,seq__34083_34087);
if(temp__4126__auto___34096){
var seq__34083_34097__$1 = temp__4126__auto___34096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34083_34097__$1)){
var c__16301__auto___34098 = cljs.core.chunk_first.call(null,seq__34083_34097__$1);
var G__34099 = cljs.core.chunk_rest.call(null,seq__34083_34097__$1);
var G__34100 = c__16301__auto___34098;
var G__34101 = cljs.core.count.call(null,c__16301__auto___34098);
var G__34102 = (0);
seq__34083_34087 = G__34099;
chunk__34084_34088 = G__34100;
count__34085_34089 = G__34101;
i__34086_34090 = G__34102;
continue;
} else {
var msg_34103 = cljs.core.first.call(null,seq__34083_34097__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34103);

var G__34104 = cljs.core.next.call(null,seq__34083_34097__$1);
var G__34105 = null;
var G__34106 = (0);
var G__34107 = (0);
seq__34083_34087 = G__34104;
chunk__34084_34088 = G__34105;
count__34085_34089 = G__34106;
i__34086_34090 = G__34107;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__34108){
var map__34110 = p__34108;
var map__34110__$1 = ((cljs.core.seq_QMARK_.call(null,map__34110))?cljs.core.apply.call(null,cljs.core.hash_map,map__34110):map__34110);
var w = map__34110__$1;
var message = cljs.core.get.call(null,map__34110__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__15502__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__15502__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__15502__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__34117 = cljs.core.seq.call(null,plugins);
var chunk__34118 = null;
var count__34119 = (0);
var i__34120 = (0);
while(true){
if((i__34120 < count__34119)){
var vec__34121 = cljs.core._nth.call(null,chunk__34118,i__34120);
var k = cljs.core.nth.call(null,vec__34121,(0),null);
var plugin = cljs.core.nth.call(null,vec__34121,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34123 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34117,chunk__34118,count__34119,i__34120,pl_34123,vec__34121,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34123.call(null,msg_hist);
});})(seq__34117,chunk__34118,count__34119,i__34120,pl_34123,vec__34121,k,plugin))
);
} else {
}

var G__34124 = seq__34117;
var G__34125 = chunk__34118;
var G__34126 = count__34119;
var G__34127 = (i__34120 + (1));
seq__34117 = G__34124;
chunk__34118 = G__34125;
count__34119 = G__34126;
i__34120 = G__34127;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34117);
if(temp__4126__auto__){
var seq__34117__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34117__$1)){
var c__16301__auto__ = cljs.core.chunk_first.call(null,seq__34117__$1);
var G__34128 = cljs.core.chunk_rest.call(null,seq__34117__$1);
var G__34129 = c__16301__auto__;
var G__34130 = cljs.core.count.call(null,c__16301__auto__);
var G__34131 = (0);
seq__34117 = G__34128;
chunk__34118 = G__34129;
count__34119 = G__34130;
i__34120 = G__34131;
continue;
} else {
var vec__34122 = cljs.core.first.call(null,seq__34117__$1);
var k = cljs.core.nth.call(null,vec__34122,(0),null);
var plugin = cljs.core.nth.call(null,vec__34122,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34132 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34117,chunk__34118,count__34119,i__34120,pl_34132,vec__34122,k,plugin,seq__34117__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34132.call(null,msg_hist);
});})(seq__34117,chunk__34118,count__34119,i__34120,pl_34132,vec__34122,k,plugin,seq__34117__$1,temp__4126__auto__))
);
} else {
}

var G__34133 = cljs.core.next.call(null,seq__34117__$1);
var G__34134 = null;
var G__34135 = (0);
var G__34136 = (0);
seq__34117 = G__34133;
chunk__34118 = G__34134;
count__34119 = G__34135;
i__34120 = G__34136;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__34137){
var map__34139 = p__34137;
var map__34139__$1 = ((cljs.core.seq_QMARK_.call(null,map__34139))?cljs.core.apply.call(null,cljs.core.hash_map,map__34139):map__34139);
var opts = map__34139__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__34137 = null;
if (arguments.length > 0) {
var G__34140__i = 0, G__34140__a = new Array(arguments.length -  0);
while (G__34140__i < G__34140__a.length) {G__34140__a[G__34140__i] = arguments[G__34140__i + 0]; ++G__34140__i;}
  p__34137 = new cljs.core.IndexedSeq(G__34140__a,0);
} 
return watch_and_reload__delegate.call(this,p__34137);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__34141){
var p__34137 = cljs.core.seq(arglist__34141);
return watch_and_reload__delegate(p__34137);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map