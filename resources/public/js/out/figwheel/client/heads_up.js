// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__26334__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26334__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34413_34421 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34414_34422 = null;
var count__34415_34423 = (0);
var i__34416_34424 = (0);
while(true){
if((i__34416_34424 < count__34415_34423)){
var k_34425 = cljs.core._nth.call(null,chunk__34414_34422,i__34416_34424);
e.setAttribute(cljs.core.name.call(null,k_34425),cljs.core.get.call(null,attrs,k_34425));

var G__34426 = seq__34413_34421;
var G__34427 = chunk__34414_34422;
var G__34428 = count__34415_34423;
var G__34429 = (i__34416_34424 + (1));
seq__34413_34421 = G__34426;
chunk__34414_34422 = G__34427;
count__34415_34423 = G__34428;
i__34416_34424 = G__34429;
continue;
} else {
var temp__4425__auto___34430 = cljs.core.seq.call(null,seq__34413_34421);
if(temp__4425__auto___34430){
var seq__34413_34431__$1 = temp__4425__auto___34430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34413_34431__$1)){
var c__26079__auto___34432 = cljs.core.chunk_first.call(null,seq__34413_34431__$1);
var G__34433 = cljs.core.chunk_rest.call(null,seq__34413_34431__$1);
var G__34434 = c__26079__auto___34432;
var G__34435 = cljs.core.count.call(null,c__26079__auto___34432);
var G__34436 = (0);
seq__34413_34421 = G__34433;
chunk__34414_34422 = G__34434;
count__34415_34423 = G__34435;
i__34416_34424 = G__34436;
continue;
} else {
var k_34437 = cljs.core.first.call(null,seq__34413_34431__$1);
e.setAttribute(cljs.core.name.call(null,k_34437),cljs.core.get.call(null,attrs,k_34437));

var G__34438 = cljs.core.next.call(null,seq__34413_34431__$1);
var G__34439 = null;
var G__34440 = (0);
var G__34441 = (0);
seq__34413_34421 = G__34438;
chunk__34414_34422 = G__34439;
count__34415_34423 = G__34440;
i__34416_34424 = G__34441;
continue;
}
} else {
}
}
break;
}

var seq__34417_34442 = cljs.core.seq.call(null,children);
var chunk__34418_34443 = null;
var count__34419_34444 = (0);
var i__34420_34445 = (0);
while(true){
if((i__34420_34445 < count__34419_34444)){
var ch_34446 = cljs.core._nth.call(null,chunk__34418_34443,i__34420_34445);
e.appendChild(ch_34446);

var G__34447 = seq__34417_34442;
var G__34448 = chunk__34418_34443;
var G__34449 = count__34419_34444;
var G__34450 = (i__34420_34445 + (1));
seq__34417_34442 = G__34447;
chunk__34418_34443 = G__34448;
count__34419_34444 = G__34449;
i__34420_34445 = G__34450;
continue;
} else {
var temp__4425__auto___34451 = cljs.core.seq.call(null,seq__34417_34442);
if(temp__4425__auto___34451){
var seq__34417_34452__$1 = temp__4425__auto___34451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34417_34452__$1)){
var c__26079__auto___34453 = cljs.core.chunk_first.call(null,seq__34417_34452__$1);
var G__34454 = cljs.core.chunk_rest.call(null,seq__34417_34452__$1);
var G__34455 = c__26079__auto___34453;
var G__34456 = cljs.core.count.call(null,c__26079__auto___34453);
var G__34457 = (0);
seq__34417_34442 = G__34454;
chunk__34418_34443 = G__34455;
count__34419_34444 = G__34456;
i__34420_34445 = G__34457;
continue;
} else {
var ch_34458 = cljs.core.first.call(null,seq__34417_34452__$1);
e.appendChild(ch_34458);

var G__34459 = cljs.core.next.call(null,seq__34417_34452__$1);
var G__34460 = null;
var G__34461 = (0);
var G__34462 = (0);
seq__34417_34442 = G__34459;
chunk__34418_34443 = G__34460;
count__34419_34444 = G__34461;
i__34420_34445 = G__34462;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34410){
var G__34411 = cljs.core.first.call(null,seq34410);
var seq34410__$1 = cljs.core.next.call(null,seq34410);
var G__34412 = cljs.core.first.call(null,seq34410__$1);
var seq34410__$2 = cljs.core.next.call(null,seq34410__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__34411,G__34412,seq34410__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__26189__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26190__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26191__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26192__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26193__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__26189__auto__,prefer_table__26190__auto__,method_cache__26191__auto__,cached_hierarchy__26192__auto__,hierarchy__26193__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__26189__auto__,prefer_table__26190__auto__,method_cache__26191__auto__,cached_hierarchy__26192__auto__,hierarchy__26193__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26193__auto__,method_table__26189__auto__,prefer_table__26190__auto__,method_cache__26191__auto__,cached_hierarchy__26192__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_34463 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34463.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34463.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34463.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34463);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34464,st_map){
var map__34468 = p__34464;
var map__34468__$1 = ((cljs.core.seq_QMARK_.call(null,map__34468))?cljs.core.apply.call(null,cljs.core.hash_map,map__34468):map__34468);
var container_el = cljs.core.get.call(null,map__34468__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34468,map__34468__$1,container_el){
return (function (p__34469){
var vec__34470 = p__34469;
var k = cljs.core.nth.call(null,vec__34470,(0),null);
var v = cljs.core.nth.call(null,vec__34470,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34468,map__34468__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34471,dom_str){
var map__34473 = p__34471;
var map__34473__$1 = ((cljs.core.seq_QMARK_.call(null,map__34473))?cljs.core.apply.call(null,cljs.core.hash_map,map__34473):map__34473);
var c = map__34473__$1;
var content_area_el = cljs.core.get.call(null,map__34473__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34474){
var map__34476 = p__34474;
var map__34476__$1 = ((cljs.core.seq_QMARK_.call(null,map__34476))?cljs.core.apply.call(null,cljs.core.hash_map,map__34476):map__34476);
var content_area_el = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__29159__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto__){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto__){
return (function (state_34518){
var state_val_34519 = (state_34518[(1)]);
if((state_val_34519 === (1))){
var inst_34503 = (state_34518[(7)]);
var inst_34503__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34504 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34505 = ["10px","10px","100%","68px","1.0"];
var inst_34506 = cljs.core.PersistentHashMap.fromArrays(inst_34504,inst_34505);
var inst_34507 = cljs.core.merge.call(null,inst_34506,style);
var inst_34508 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34503__$1,inst_34507);
var inst_34509 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34503__$1,msg);
var inst_34510 = cljs.core.async.timeout.call(null,(300));
var state_34518__$1 = (function (){var statearr_34520 = state_34518;
(statearr_34520[(7)] = inst_34503__$1);

(statearr_34520[(8)] = inst_34509);

(statearr_34520[(9)] = inst_34508);

return statearr_34520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34518__$1,(2),inst_34510);
} else {
if((state_val_34519 === (2))){
var inst_34503 = (state_34518[(7)]);
var inst_34512 = (state_34518[(2)]);
var inst_34513 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34514 = ["auto"];
var inst_34515 = cljs.core.PersistentHashMap.fromArrays(inst_34513,inst_34514);
var inst_34516 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34503,inst_34515);
var state_34518__$1 = (function (){var statearr_34521 = state_34518;
(statearr_34521[(10)] = inst_34512);

return statearr_34521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34518__$1,inst_34516);
} else {
return null;
}
}
});})(c__29159__auto__))
;
return ((function (switch__29097__auto__,c__29159__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto____0 = (function (){
var statearr_34525 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34525[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto__);

(statearr_34525[(1)] = (1));

return statearr_34525;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto____1 = (function (state_34518){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_34518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e34526){if((e34526 instanceof Object)){
var ex__29101__auto__ = e34526;
var statearr_34527_34529 = state_34518;
(statearr_34527_34529[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34530 = state_34518;
state_34518 = G__34530;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto__ = function(state_34518){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto____1.call(this,state_34518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto__))
})();
var state__29161__auto__ = (function (){var statearr_34528 = f__29160__auto__.call(null);
(statearr_34528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto__);

return statearr_34528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto__))
);

return c__29159__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__34532 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__34532,(0),null);
var ln = cljs.core.nth.call(null,vec__34532,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__34535 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__34535,(0),null);
var file_line = cljs.core.nth.call(null,vec__34535,(1),null);
var file_column = cljs.core.nth.call(null,vec__34535,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34535,file_name,file_line,file_column){
return (function (p1__34533_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__34533_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__34535,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__25294__auto__ = file_line;
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
var and__25282__auto__ = cause;
if(cljs.core.truth_(and__25282__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__25282__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__34537 = figwheel.client.heads_up.ensure_container.call(null);
var map__34537__$1 = ((cljs.core.seq_QMARK_.call(null,map__34537))?cljs.core.apply.call(null,cljs.core.hash_map,map__34537):map__34537);
var content_area_el = cljs.core.get.call(null,map__34537__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__29159__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto__){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto__){
return (function (state_34584){
var state_val_34585 = (state_34584[(1)]);
if((state_val_34585 === (1))){
var inst_34567 = (state_34584[(7)]);
var inst_34567__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34568 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34569 = ["0.0"];
var inst_34570 = cljs.core.PersistentHashMap.fromArrays(inst_34568,inst_34569);
var inst_34571 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34567__$1,inst_34570);
var inst_34572 = cljs.core.async.timeout.call(null,(300));
var state_34584__$1 = (function (){var statearr_34586 = state_34584;
(statearr_34586[(7)] = inst_34567__$1);

(statearr_34586[(8)] = inst_34571);

return statearr_34586;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34584__$1,(2),inst_34572);
} else {
if((state_val_34585 === (2))){
var inst_34567 = (state_34584[(7)]);
var inst_34574 = (state_34584[(2)]);
var inst_34575 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34576 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34577 = cljs.core.PersistentHashMap.fromArrays(inst_34575,inst_34576);
var inst_34578 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34567,inst_34577);
var inst_34579 = cljs.core.async.timeout.call(null,(200));
var state_34584__$1 = (function (){var statearr_34587 = state_34584;
(statearr_34587[(9)] = inst_34574);

(statearr_34587[(10)] = inst_34578);

return statearr_34587;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34584__$1,(3),inst_34579);
} else {
if((state_val_34585 === (3))){
var inst_34567 = (state_34584[(7)]);
var inst_34581 = (state_34584[(2)]);
var inst_34582 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34567,"");
var state_34584__$1 = (function (){var statearr_34588 = state_34584;
(statearr_34588[(11)] = inst_34581);

return statearr_34588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34584__$1,inst_34582);
} else {
return null;
}
}
}
});})(c__29159__auto__))
;
return ((function (switch__29097__auto__,c__29159__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__29098__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__29098__auto____0 = (function (){
var statearr_34592 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34592[(0)] = figwheel$client$heads_up$clear_$_state_machine__29098__auto__);

(statearr_34592[(1)] = (1));

return statearr_34592;
});
var figwheel$client$heads_up$clear_$_state_machine__29098__auto____1 = (function (state_34584){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_34584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e34593){if((e34593 instanceof Object)){
var ex__29101__auto__ = e34593;
var statearr_34594_34596 = state_34584;
(statearr_34594_34596[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34597 = state_34584;
state_34584 = G__34597;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__29098__auto__ = function(state_34584){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__29098__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__29098__auto____1.call(this,state_34584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__29098__auto____0;
figwheel$client$heads_up$clear_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__29098__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto__))
})();
var state__29161__auto__ = (function (){var statearr_34595 = f__29160__auto__.call(null);
(statearr_34595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto__);

return statearr_34595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto__))
);

return c__29159__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__29159__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto__){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto__){
return (function (state_34629){
var state_val_34630 = (state_34629[(1)]);
if((state_val_34630 === (1))){
var inst_34619 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34629__$1,(2),inst_34619);
} else {
if((state_val_34630 === (2))){
var inst_34621 = (state_34629[(2)]);
var inst_34622 = cljs.core.async.timeout.call(null,(400));
var state_34629__$1 = (function (){var statearr_34631 = state_34629;
(statearr_34631[(7)] = inst_34621);

return statearr_34631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34629__$1,(3),inst_34622);
} else {
if((state_val_34630 === (3))){
var inst_34624 = (state_34629[(2)]);
var inst_34625 = figwheel.client.heads_up.clear.call(null);
var state_34629__$1 = (function (){var statearr_34632 = state_34629;
(statearr_34632[(8)] = inst_34624);

return statearr_34632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34629__$1,(4),inst_34625);
} else {
if((state_val_34630 === (4))){
var inst_34627 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34629__$1,inst_34627);
} else {
return null;
}
}
}
}
});})(c__29159__auto__))
;
return ((function (switch__29097__auto__,c__29159__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto____0 = (function (){
var statearr_34636 = [null,null,null,null,null,null,null,null,null];
(statearr_34636[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto__);

(statearr_34636[(1)] = (1));

return statearr_34636;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto____1 = (function (state_34629){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_34629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e34637){if((e34637 instanceof Object)){
var ex__29101__auto__ = e34637;
var statearr_34638_34640 = state_34629;
(statearr_34638_34640[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34641 = state_34629;
state_34629 = G__34641;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto__ = function(state_34629){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto____1.call(this,state_34629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto__))
})();
var state__29161__auto__ = (function (){var statearr_34639 = f__29160__auto__.call(null);
(statearr_34639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto__);

return statearr_34639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto__))
);

return c__29159__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map