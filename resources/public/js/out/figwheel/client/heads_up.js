// Compiled by ClojureScript 0.0-2843 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34159_34167 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34160_34168 = null;
var count__34161_34169 = (0);
var i__34162_34170 = (0);
while(true){
if((i__34162_34170 < count__34161_34169)){
var k_34171 = cljs.core._nth.call(null,chunk__34160_34168,i__34162_34170);
e.setAttribute(cljs.core.name.call(null,k_34171),cljs.core.get.call(null,attrs,k_34171));

var G__34172 = seq__34159_34167;
var G__34173 = chunk__34160_34168;
var G__34174 = count__34161_34169;
var G__34175 = (i__34162_34170 + (1));
seq__34159_34167 = G__34172;
chunk__34160_34168 = G__34173;
count__34161_34169 = G__34174;
i__34162_34170 = G__34175;
continue;
} else {
var temp__4126__auto___34176 = cljs.core.seq.call(null,seq__34159_34167);
if(temp__4126__auto___34176){
var seq__34159_34177__$1 = temp__4126__auto___34176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34159_34177__$1)){
var c__16301__auto___34178 = cljs.core.chunk_first.call(null,seq__34159_34177__$1);
var G__34179 = cljs.core.chunk_rest.call(null,seq__34159_34177__$1);
var G__34180 = c__16301__auto___34178;
var G__34181 = cljs.core.count.call(null,c__16301__auto___34178);
var G__34182 = (0);
seq__34159_34167 = G__34179;
chunk__34160_34168 = G__34180;
count__34161_34169 = G__34181;
i__34162_34170 = G__34182;
continue;
} else {
var k_34183 = cljs.core.first.call(null,seq__34159_34177__$1);
e.setAttribute(cljs.core.name.call(null,k_34183),cljs.core.get.call(null,attrs,k_34183));

var G__34184 = cljs.core.next.call(null,seq__34159_34177__$1);
var G__34185 = null;
var G__34186 = (0);
var G__34187 = (0);
seq__34159_34167 = G__34184;
chunk__34160_34168 = G__34185;
count__34161_34169 = G__34186;
i__34162_34170 = G__34187;
continue;
}
} else {
}
}
break;
}

var seq__34163_34188 = cljs.core.seq.call(null,children);
var chunk__34164_34189 = null;
var count__34165_34190 = (0);
var i__34166_34191 = (0);
while(true){
if((i__34166_34191 < count__34165_34190)){
var ch_34192 = cljs.core._nth.call(null,chunk__34164_34189,i__34166_34191);
e.appendChild(ch_34192);

var G__34193 = seq__34163_34188;
var G__34194 = chunk__34164_34189;
var G__34195 = count__34165_34190;
var G__34196 = (i__34166_34191 + (1));
seq__34163_34188 = G__34193;
chunk__34164_34189 = G__34194;
count__34165_34190 = G__34195;
i__34166_34191 = G__34196;
continue;
} else {
var temp__4126__auto___34197 = cljs.core.seq.call(null,seq__34163_34188);
if(temp__4126__auto___34197){
var seq__34163_34198__$1 = temp__4126__auto___34197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34163_34198__$1)){
var c__16301__auto___34199 = cljs.core.chunk_first.call(null,seq__34163_34198__$1);
var G__34200 = cljs.core.chunk_rest.call(null,seq__34163_34198__$1);
var G__34201 = c__16301__auto___34199;
var G__34202 = cljs.core.count.call(null,c__16301__auto___34199);
var G__34203 = (0);
seq__34163_34188 = G__34200;
chunk__34164_34189 = G__34201;
count__34165_34190 = G__34202;
i__34166_34191 = G__34203;
continue;
} else {
var ch_34204 = cljs.core.first.call(null,seq__34163_34198__$1);
e.appendChild(ch_34204);

var G__34205 = cljs.core.next.call(null,seq__34163_34198__$1);
var G__34206 = null;
var G__34207 = (0);
var G__34208 = (0);
seq__34163_34188 = G__34205;
chunk__34164_34189 = G__34206;
count__34165_34190 = G__34207;
i__34166_34191 = G__34208;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__34209__i = 0, G__34209__a = new Array(arguments.length -  2);
while (G__34209__i < G__34209__a.length) {G__34209__a[G__34209__i] = arguments[G__34209__i + 2]; ++G__34209__i;}
  children = new cljs.core.IndexedSeq(G__34209__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__34210){
var t = cljs.core.first(arglist__34210);
arglist__34210 = cljs.core.next(arglist__34210);
var attrs = cljs.core.first(arglist__34210);
var children = cljs.core.rest(arglist__34210);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__16411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16413__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16415__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__16411__auto__,prefer_table__16412__auto__,method_cache__16413__auto__,cached_hierarchy__16414__auto__,hierarchy__16415__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__16411__auto__,prefer_table__16412__auto__,method_cache__16413__auto__,cached_hierarchy__16414__auto__,hierarchy__16415__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16415__auto__,method_table__16411__auto__,prefer_table__16412__auto__,method_cache__16413__auto__,cached_hierarchy__16414__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_34211 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34211.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34211.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34211.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34211);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__34212,st_map){
var map__34216 = p__34212;
var map__34216__$1 = ((cljs.core.seq_QMARK_.call(null,map__34216))?cljs.core.apply.call(null,cljs.core.hash_map,map__34216):map__34216);
var container_el = cljs.core.get.call(null,map__34216__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34216,map__34216__$1,container_el){
return (function (p__34217){
var vec__34218 = p__34217;
var k = cljs.core.nth.call(null,vec__34218,(0),null);
var v = cljs.core.nth.call(null,vec__34218,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34216,map__34216__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__34219,dom_str){
var map__34221 = p__34219;
var map__34221__$1 = ((cljs.core.seq_QMARK_.call(null,map__34221))?cljs.core.apply.call(null,cljs.core.hash_map,map__34221):map__34221);
var c = map__34221__$1;
var content_area_el = cljs.core.get.call(null,map__34221__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__34222){
var map__34224 = p__34222;
var map__34224__$1 = ((cljs.core.seq_QMARK_.call(null,map__34224))?cljs.core.apply.call(null,cljs.core.hash_map,map__34224):map__34224);
var content_area_el = cljs.core.get.call(null,map__34224__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__18197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto__){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto__){
return (function (state_34266){
var state_val_34267 = (state_34266[(1)]);
if((state_val_34267 === (2))){
var inst_34251 = (state_34266[(7)]);
var inst_34260 = (state_34266[(2)]);
var inst_34261 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34262 = ["auto"];
var inst_34263 = cljs.core.PersistentHashMap.fromArrays(inst_34261,inst_34262);
var inst_34264 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34251,inst_34263);
var state_34266__$1 = (function (){var statearr_34268 = state_34266;
(statearr_34268[(8)] = inst_34260);

return statearr_34268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34266__$1,inst_34264);
} else {
if((state_val_34267 === (1))){
var inst_34251 = (state_34266[(7)]);
var inst_34251__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34252 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34253 = ["10px","10px","100%","68px","1.0"];
var inst_34254 = cljs.core.PersistentHashMap.fromArrays(inst_34252,inst_34253);
var inst_34255 = cljs.core.merge.call(null,inst_34254,style);
var inst_34256 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34251__$1,inst_34255);
var inst_34257 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34251__$1,msg);
var inst_34258 = cljs.core.async.timeout.call(null,(300));
var state_34266__$1 = (function (){var statearr_34269 = state_34266;
(statearr_34269[(9)] = inst_34257);

(statearr_34269[(10)] = inst_34256);

(statearr_34269[(7)] = inst_34251__$1);

return statearr_34269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34266__$1,(2),inst_34258);
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
var statearr_34273 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34273[(0)] = state_machine__18142__auto__);

(statearr_34273[(1)] = (1));

return statearr_34273;
});
var state_machine__18142__auto____1 = (function (state_34266){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_34266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e34274){if((e34274 instanceof Object)){
var ex__18145__auto__ = e34274;
var statearr_34275_34277 = state_34266;
(statearr_34275_34277[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34278 = state_34266;
state_34266 = G__34278;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_34266){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_34266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto__))
})();
var state__18199__auto__ = (function (){var statearr_34276 = f__18198__auto__.call(null);
(statearr_34276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto__);

return statearr_34276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto__))
);

return c__18197__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__34280 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__34280,(0),null);
var ln = cljs.core.nth.call(null,vec__34280,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__34283 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__34283,(0),null);
var file_line = cljs.core.nth.call(null,vec__34283,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34283,file_name,file_line){
return (function (p1__34281_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__34281_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__34283,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__34285 = figwheel.client.heads_up.ensure_container.call(null);
var map__34285__$1 = ((cljs.core.seq_QMARK_.call(null,map__34285))?cljs.core.apply.call(null,cljs.core.hash_map,map__34285):map__34285);
var content_area_el = cljs.core.get.call(null,map__34285__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__18197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto__){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto__){
return (function (state_34332){
var state_val_34333 = (state_34332[(1)]);
if((state_val_34333 === (3))){
var inst_34315 = (state_34332[(7)]);
var inst_34329 = (state_34332[(2)]);
var inst_34330 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34315,"");
var state_34332__$1 = (function (){var statearr_34334 = state_34332;
(statearr_34334[(8)] = inst_34329);

return statearr_34334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34332__$1,inst_34330);
} else {
if((state_val_34333 === (2))){
var inst_34315 = (state_34332[(7)]);
var inst_34322 = (state_34332[(2)]);
var inst_34323 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34324 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34325 = cljs.core.PersistentHashMap.fromArrays(inst_34323,inst_34324);
var inst_34326 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34315,inst_34325);
var inst_34327 = cljs.core.async.timeout.call(null,(200));
var state_34332__$1 = (function (){var statearr_34335 = state_34332;
(statearr_34335[(9)] = inst_34326);

(statearr_34335[(10)] = inst_34322);

return statearr_34335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34332__$1,(3),inst_34327);
} else {
if((state_val_34333 === (1))){
var inst_34315 = (state_34332[(7)]);
var inst_34315__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34316 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34317 = ["0.0"];
var inst_34318 = cljs.core.PersistentHashMap.fromArrays(inst_34316,inst_34317);
var inst_34319 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34315__$1,inst_34318);
var inst_34320 = cljs.core.async.timeout.call(null,(300));
var state_34332__$1 = (function (){var statearr_34336 = state_34332;
(statearr_34336[(7)] = inst_34315__$1);

(statearr_34336[(11)] = inst_34319);

return statearr_34336;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34332__$1,(2),inst_34320);
} else {
return null;
}
}
}
});})(c__18197__auto__))
;
return ((function (switch__18141__auto__,c__18197__auto__){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_34340 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34340[(0)] = state_machine__18142__auto__);

(statearr_34340[(1)] = (1));

return statearr_34340;
});
var state_machine__18142__auto____1 = (function (state_34332){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_34332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e34341){if((e34341 instanceof Object)){
var ex__18145__auto__ = e34341;
var statearr_34342_34344 = state_34332;
(statearr_34342_34344[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34345 = state_34332;
state_34332 = G__34345;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_34332){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_34332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto__))
})();
var state__18199__auto__ = (function (){var statearr_34343 = f__18198__auto__.call(null);
(statearr_34343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto__);

return statearr_34343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto__))
);

return c__18197__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__18197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18197__auto__){
return (function (){
var f__18198__auto__ = (function (){var switch__18141__auto__ = ((function (c__18197__auto__){
return (function (state_34377){
var state_val_34378 = (state_34377[(1)]);
if((state_val_34378 === (4))){
var inst_34375 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34377__$1,inst_34375);
} else {
if((state_val_34378 === (3))){
var inst_34372 = (state_34377[(2)]);
var inst_34373 = figwheel.client.heads_up.clear.call(null);
var state_34377__$1 = (function (){var statearr_34379 = state_34377;
(statearr_34379[(7)] = inst_34372);

return statearr_34379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34377__$1,(4),inst_34373);
} else {
if((state_val_34378 === (2))){
var inst_34369 = (state_34377[(2)]);
var inst_34370 = cljs.core.async.timeout.call(null,(400));
var state_34377__$1 = (function (){var statearr_34380 = state_34377;
(statearr_34380[(8)] = inst_34369);

return statearr_34380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34377__$1,(3),inst_34370);
} else {
if((state_val_34378 === (1))){
var inst_34367 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34377__$1,(2),inst_34367);
} else {
return null;
}
}
}
}
});})(c__18197__auto__))
;
return ((function (switch__18141__auto__,c__18197__auto__){
return (function() {
var state_machine__18142__auto__ = null;
var state_machine__18142__auto____0 = (function (){
var statearr_34384 = [null,null,null,null,null,null,null,null,null];
(statearr_34384[(0)] = state_machine__18142__auto__);

(statearr_34384[(1)] = (1));

return statearr_34384;
});
var state_machine__18142__auto____1 = (function (state_34377){
while(true){
var ret_value__18143__auto__ = (function (){try{while(true){
var result__18144__auto__ = switch__18141__auto__.call(null,state_34377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18144__auto__;
}
break;
}
}catch (e34385){if((e34385 instanceof Object)){
var ex__18145__auto__ = e34385;
var statearr_34386_34388 = state_34377;
(statearr_34386_34388[(5)] = ex__18145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34389 = state_34377;
state_34377 = G__34389;
continue;
} else {
return ret_value__18143__auto__;
}
break;
}
});
state_machine__18142__auto__ = function(state_34377){
switch(arguments.length){
case 0:
return state_machine__18142__auto____0.call(this);
case 1:
return state_machine__18142__auto____1.call(this,state_34377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18142__auto____0;
state_machine__18142__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18142__auto____1;
return state_machine__18142__auto__;
})()
;})(switch__18141__auto__,c__18197__auto__))
})();
var state__18199__auto__ = (function (){var statearr_34387 = f__18198__auto__.call(null);
(statearr_34387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18197__auto__);

return statearr_34387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18199__auto__);
});})(c__18197__auto__))
);

return c__18197__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map