// Compiled by ClojureScript 0.0-2843 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
var c__18197__auto___29806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto___29806){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto___29806){
return (function (state_29788){
var state_val_29789 = (state_29788[(1)]);
if((state_val_29789 === (9))){
var inst_29780 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29790_29807 = state_29788__$1;
(statearr_29790_29807[(2)] = inst_29780);

(statearr_29790_29807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (8))){
var inst_29776 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29791_29808 = state_29788__$1;
(statearr_29791_29808[(2)] = inst_29776);

(statearr_29791_29808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (7))){
var inst_29769 = (state_29788[(7)]);
var inst_29782 = (state_29788[(2)]);
var inst_29783 = re_frame.handlers.handle.call(null,inst_29769);
var state_29788__$1 = (function (){var statearr_29792 = state_29788;
(statearr_29792[(8)] = inst_29782);

(statearr_29792[(9)] = inst_29783);

return statearr_29792;
})();
var statearr_29793_29809 = state_29788__$1;
(statearr_29793_29809[(2)] = null);

(statearr_29793_29809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (6))){
var inst_29778 = cljs.core.async.timeout.call(null,(0));
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29788__$1,(9),inst_29778);
} else {
if((state_val_29789 === (5))){
var inst_29773 = reagent.core.flush.call(null);
var inst_29774 = cljs.core.async.timeout.call(null,(20));
var state_29788__$1 = (function (){var statearr_29794 = state_29788;
(statearr_29794[(10)] = inst_29773);

return statearr_29794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29788__$1,(8),inst_29774);
} else {
if((state_val_29789 === (4))){
var inst_29769 = (state_29788[(7)]);
var inst_29769__$1 = (state_29788[(2)]);
var inst_29770 = cljs.core.meta.call(null,inst_29769__$1);
var inst_29771 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_29770);
var state_29788__$1 = (function (){var statearr_29795 = state_29788;
(statearr_29795[(7)] = inst_29769__$1);

return statearr_29795;
})();
if(cljs.core.truth_(inst_29771)){
var statearr_29796_29810 = state_29788__$1;
(statearr_29796_29810[(1)] = (5));

} else {
var statearr_29797_29811 = state_29788__$1;
(statearr_29797_29811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (3))){
var inst_29786 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29788__$1,inst_29786);
} else {
if((state_val_29789 === (2))){
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29788__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_29789 === (1))){
var state_29788__$1 = state_29788;
var statearr_29798_29812 = state_29788__$1;
(statearr_29798_29812[(2)] = null);

(statearr_29798_29812[(1)] = (2));


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
});})(c__18197__auto___29806))
;
return ((function (switch__18141__auto__,c__18197__auto___29806){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_29802 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29802[(0)] = state_machine__18142__auto__);

(statearr_29802[(1)] = (1));

return statearr_29802;
});
var state_machine__18142__auto____1 = (function (state_29788){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_29788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e29803){if((e29803 instanceof Object)){
var ex__18145__auto__ = e29803;
var statearr_29804_29813 = state_29788;
(statearr_29804_29813[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29814 = state_29788;
state_29788 = G__29814;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_29788){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_29788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto___29806))
})();
var state__18199__auto__ = (function (){var statearr_29805 = f__18198__auto__.call(null);
(statearr_29805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto___29806);

return statearr_29805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto___29806))
);

/**
* Send an event to be processed by the registered handler.
* 
* Usage example:
* (dispatch [:delete-item 42])
* 
*/
re_frame.router.dispatch = (function dispatch(event_v){
if((event_v == null)){
re_frame.utils.warn.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
* Send an event to be processed by the registered handler, but avoid the async-inducing
* use of core.async/chan.
* 
* Usage example:
* (dispatch-sync [:delete-item 42])
*/
re_frame.router.dispatch_sync = (function dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map