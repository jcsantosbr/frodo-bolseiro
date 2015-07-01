// Compiled by ClojureScript 0.0-3308 {}
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
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33763__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33764__i = 0, G__33764__a = new Array(arguments.length -  0);
while (G__33764__i < G__33764__a.length) {G__33764__a[G__33764__i] = arguments[G__33764__i + 0]; ++G__33764__i;}
  args = new cljs.core.IndexedSeq(G__33764__a,0);
} 
return G__33763__delegate.call(this,args);};
G__33763.cljs$lang$maxFixedArity = 0;
G__33763.cljs$lang$applyTo = (function (arglist__33765){
var args = cljs.core.seq(arglist__33765);
return G__33763__delegate(args);
});
G__33763.cljs$core$IFn$_invoke$arity$variadic = G__33763__delegate;
return G__33763;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33766){
var map__33768 = p__33766;
var map__33768__$1 = ((cljs.core.seq_QMARK_.call(null,map__33768))?cljs.core.apply.call(null,cljs.core.hash_map,map__33768):map__33768);
var message = cljs.core.get.call(null,map__33768__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33768__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25294__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25282__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25282__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25282__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29159__auto___33897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___33897,ch){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___33897,ch){
return (function (state_33871){
var state_val_33872 = (state_33871[(1)]);
if((state_val_33872 === (7))){
var inst_33867 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33873_33898 = state_33871__$1;
(statearr_33873_33898[(2)] = inst_33867);

(statearr_33873_33898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (1))){
var state_33871__$1 = state_33871;
var statearr_33874_33899 = state_33871__$1;
(statearr_33874_33899[(2)] = null);

(statearr_33874_33899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (4))){
var inst_33835 = (state_33871[(7)]);
var inst_33835__$1 = (state_33871[(2)]);
var state_33871__$1 = (function (){var statearr_33875 = state_33871;
(statearr_33875[(7)] = inst_33835__$1);

return statearr_33875;
})();
if(cljs.core.truth_(inst_33835__$1)){
var statearr_33876_33900 = state_33871__$1;
(statearr_33876_33900[(1)] = (5));

} else {
var statearr_33877_33901 = state_33871__$1;
(statearr_33877_33901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (13))){
var state_33871__$1 = state_33871;
var statearr_33878_33902 = state_33871__$1;
(statearr_33878_33902[(2)] = null);

(statearr_33878_33902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (6))){
var state_33871__$1 = state_33871;
var statearr_33879_33903 = state_33871__$1;
(statearr_33879_33903[(2)] = null);

(statearr_33879_33903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (3))){
var inst_33869 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33871__$1,inst_33869);
} else {
if((state_val_33872 === (12))){
var inst_33842 = (state_33871[(8)]);
var inst_33855 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33842);
var inst_33856 = cljs.core.first.call(null,inst_33855);
var inst_33857 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33856);
var inst_33858 = console.warn("Figwheel: Not loading code with warnings - ",inst_33857);
var state_33871__$1 = state_33871;
var statearr_33880_33904 = state_33871__$1;
(statearr_33880_33904[(2)] = inst_33858);

(statearr_33880_33904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (2))){
var state_33871__$1 = state_33871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33871__$1,(4),ch);
} else {
if((state_val_33872 === (11))){
var inst_33851 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33881_33905 = state_33871__$1;
(statearr_33881_33905[(2)] = inst_33851);

(statearr_33881_33905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (9))){
var inst_33841 = (state_33871[(9)]);
var inst_33853 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33841,opts);
var state_33871__$1 = state_33871;
if(cljs.core.truth_(inst_33853)){
var statearr_33882_33906 = state_33871__$1;
(statearr_33882_33906[(1)] = (12));

} else {
var statearr_33883_33907 = state_33871__$1;
(statearr_33883_33907[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (5))){
var inst_33841 = (state_33871[(9)]);
var inst_33835 = (state_33871[(7)]);
var inst_33837 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33838 = (new cljs.core.PersistentArrayMap(null,2,inst_33837,null));
var inst_33839 = (new cljs.core.PersistentHashSet(null,inst_33838,null));
var inst_33840 = figwheel.client.focus_msgs.call(null,inst_33839,inst_33835);
var inst_33841__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33840);
var inst_33842 = cljs.core.first.call(null,inst_33840);
var inst_33843 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33841__$1,opts);
var state_33871__$1 = (function (){var statearr_33884 = state_33871;
(statearr_33884[(9)] = inst_33841__$1);

(statearr_33884[(8)] = inst_33842);

return statearr_33884;
})();
if(cljs.core.truth_(inst_33843)){
var statearr_33885_33908 = state_33871__$1;
(statearr_33885_33908[(1)] = (8));

} else {
var statearr_33886_33909 = state_33871__$1;
(statearr_33886_33909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (14))){
var inst_33861 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33887_33910 = state_33871__$1;
(statearr_33887_33910[(2)] = inst_33861);

(statearr_33887_33910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (10))){
var inst_33863 = (state_33871[(2)]);
var state_33871__$1 = (function (){var statearr_33888 = state_33871;
(statearr_33888[(10)] = inst_33863);

return statearr_33888;
})();
var statearr_33889_33911 = state_33871__$1;
(statearr_33889_33911[(2)] = null);

(statearr_33889_33911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (8))){
var inst_33842 = (state_33871[(8)]);
var inst_33845 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33846 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33842);
var inst_33847 = cljs.core.async.timeout.call(null,(1000));
var inst_33848 = [inst_33846,inst_33847];
var inst_33849 = (new cljs.core.PersistentVector(null,2,(5),inst_33845,inst_33848,null));
var state_33871__$1 = state_33871;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33871__$1,(11),inst_33849);
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
});})(c__29159__auto___33897,ch))
;
return ((function (switch__29097__auto__,c__29159__auto___33897,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29098__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29098__auto____0 = (function (){
var statearr_33893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33893[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29098__auto__);

(statearr_33893[(1)] = (1));

return statearr_33893;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29098__auto____1 = (function (state_33871){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_33871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e33894){if((e33894 instanceof Object)){
var ex__29101__auto__ = e33894;
var statearr_33895_33912 = state_33871;
(statearr_33895_33912[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33913 = state_33871;
state_33871 = G__33913;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29098__auto__ = function(state_33871){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29098__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29098__auto____1.call(this,state_33871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29098__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29098__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___33897,ch))
})();
var state__29161__auto__ = (function (){var statearr_33896 = f__29160__auto__.call(null);
(statearr_33896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___33897);

return statearr_33896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___33897,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33914_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33914_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_33921 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33921){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_33919 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33920 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33919,_STAR_print_newline_STAR_33920,base_path_33921){
return (function() { 
var G__33922__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33923__i = 0, G__33923__a = new Array(arguments.length -  0);
while (G__33923__i < G__33923__a.length) {G__33923__a[G__33923__i] = arguments[G__33923__i + 0]; ++G__33923__i;}
  args = new cljs.core.IndexedSeq(G__33923__a,0);
} 
return G__33922__delegate.call(this,args);};
G__33922.cljs$lang$maxFixedArity = 0;
G__33922.cljs$lang$applyTo = (function (arglist__33924){
var args = cljs.core.seq(arglist__33924);
return G__33922__delegate(args);
});
G__33922.cljs$core$IFn$_invoke$arity$variadic = G__33922__delegate;
return G__33922;
})()
;})(_STAR_print_fn_STAR_33919,_STAR_print_newline_STAR_33920,base_path_33921))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33920;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33919;
}}catch (e33918){if((e33918 instanceof Error)){
var e = e33918;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33921], null));
} else {
var e = e33918;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33921))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33925){
var map__33930 = p__33925;
var map__33930__$1 = ((cljs.core.seq_QMARK_.call(null,map__33930))?cljs.core.apply.call(null,cljs.core.hash_map,map__33930):map__33930);
var opts = map__33930__$1;
var build_id = cljs.core.get.call(null,map__33930__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33930,map__33930__$1,opts,build_id){
return (function (p__33931){
var vec__33932 = p__33931;
var map__33933 = cljs.core.nth.call(null,vec__33932,(0),null);
var map__33933__$1 = ((cljs.core.seq_QMARK_.call(null,map__33933))?cljs.core.apply.call(null,cljs.core.hash_map,map__33933):map__33933);
var msg = map__33933__$1;
var msg_name = cljs.core.get.call(null,map__33933__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33932,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__33932,map__33933,map__33933__$1,msg,msg_name,_,map__33930,map__33930__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33932,map__33933,map__33933__$1,msg,msg_name,_,map__33930,map__33930__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33930,map__33930__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33937){
var vec__33938 = p__33937;
var map__33939 = cljs.core.nth.call(null,vec__33938,(0),null);
var map__33939__$1 = ((cljs.core.seq_QMARK_.call(null,map__33939))?cljs.core.apply.call(null,cljs.core.hash_map,map__33939):map__33939);
var msg = map__33939__$1;
var msg_name = cljs.core.get.call(null,map__33939__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33938,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33940){
var map__33948 = p__33940;
var map__33948__$1 = ((cljs.core.seq_QMARK_.call(null,map__33948))?cljs.core.apply.call(null,cljs.core.hash_map,map__33948):map__33948);
var on_compile_warning = cljs.core.get.call(null,map__33948__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33948__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33948,map__33948__$1,on_compile_warning,on_compile_fail){
return (function (p__33949){
var vec__33950 = p__33949;
var map__33951 = cljs.core.nth.call(null,vec__33950,(0),null);
var map__33951__$1 = ((cljs.core.seq_QMARK_.call(null,map__33951))?cljs.core.apply.call(null,cljs.core.hash_map,map__33951):map__33951);
var msg = map__33951__$1;
var msg_name = cljs.core.get.call(null,map__33951__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33950,(1));
var pred__33952 = cljs.core._EQ_;
var expr__33953 = msg_name;
if(cljs.core.truth_(pred__33952.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33953))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33952.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33953))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33948,map__33948__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29159__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto__,msg_hist,msg_names,msg){
return (function (state_34154){
var state_val_34155 = (state_34154[(1)]);
if((state_val_34155 === (7))){
var inst_34088 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34156_34197 = state_34154__$1;
(statearr_34156_34197[(2)] = inst_34088);

(statearr_34156_34197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (20))){
var inst_34116 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34116)){
var statearr_34157_34198 = state_34154__$1;
(statearr_34157_34198[(1)] = (22));

} else {
var statearr_34158_34199 = state_34154__$1;
(statearr_34158_34199[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (27))){
var inst_34128 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34129 = figwheel.client.heads_up.display_warning.call(null,inst_34128);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34154__$1,(30),inst_34129);
} else {
if((state_val_34155 === (1))){
var inst_34076 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34076)){
var statearr_34159_34200 = state_34154__$1;
(statearr_34159_34200[(1)] = (2));

} else {
var statearr_34160_34201 = state_34154__$1;
(statearr_34160_34201[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (24))){
var inst_34144 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34161_34202 = state_34154__$1;
(statearr_34161_34202[(2)] = inst_34144);

(statearr_34161_34202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (4))){
var inst_34152 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34154__$1,inst_34152);
} else {
if((state_val_34155 === (15))){
var inst_34104 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34105 = figwheel.client.format_messages.call(null,inst_34104);
var inst_34106 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34107 = figwheel.client.heads_up.display_error.call(null,inst_34105,inst_34106);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34154__$1,(18),inst_34107);
} else {
if((state_val_34155 === (21))){
var inst_34146 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34162_34203 = state_34154__$1;
(statearr_34162_34203[(2)] = inst_34146);

(statearr_34162_34203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (31))){
var inst_34135 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34154__$1,(34),inst_34135);
} else {
if((state_val_34155 === (32))){
var state_34154__$1 = state_34154;
var statearr_34163_34204 = state_34154__$1;
(statearr_34163_34204[(2)] = null);

(statearr_34163_34204[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (33))){
var inst_34140 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34164_34205 = state_34154__$1;
(statearr_34164_34205[(2)] = inst_34140);

(statearr_34164_34205[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (13))){
var inst_34094 = (state_34154[(2)]);
var inst_34095 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34096 = figwheel.client.format_messages.call(null,inst_34095);
var inst_34097 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34098 = figwheel.client.heads_up.display_error.call(null,inst_34096,inst_34097);
var state_34154__$1 = (function (){var statearr_34165 = state_34154;
(statearr_34165[(7)] = inst_34094);

return statearr_34165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34154__$1,(14),inst_34098);
} else {
if((state_val_34155 === (22))){
var inst_34118 = figwheel.client.heads_up.clear.call(null);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34154__$1,(25),inst_34118);
} else {
if((state_val_34155 === (29))){
var inst_34142 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34166_34206 = state_34154__$1;
(statearr_34166_34206[(2)] = inst_34142);

(statearr_34166_34206[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (6))){
var inst_34084 = figwheel.client.heads_up.clear.call(null);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34154__$1,(9),inst_34084);
} else {
if((state_val_34155 === (28))){
var inst_34133 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34133)){
var statearr_34167_34207 = state_34154__$1;
(statearr_34167_34207[(1)] = (31));

} else {
var statearr_34168_34208 = state_34154__$1;
(statearr_34168_34208[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (25))){
var inst_34120 = (state_34154[(2)]);
var inst_34121 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34122 = figwheel.client.heads_up.display_warning.call(null,inst_34121);
var state_34154__$1 = (function (){var statearr_34169 = state_34154;
(statearr_34169[(8)] = inst_34120);

return statearr_34169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34154__$1,(26),inst_34122);
} else {
if((state_val_34155 === (34))){
var inst_34137 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34170_34209 = state_34154__$1;
(statearr_34170_34209[(2)] = inst_34137);

(statearr_34170_34209[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (17))){
var inst_34148 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34171_34210 = state_34154__$1;
(statearr_34171_34210[(2)] = inst_34148);

(statearr_34171_34210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (3))){
var inst_34090 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34090)){
var statearr_34172_34211 = state_34154__$1;
(statearr_34172_34211[(1)] = (10));

} else {
var statearr_34173_34212 = state_34154__$1;
(statearr_34173_34212[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (12))){
var inst_34150 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34174_34213 = state_34154__$1;
(statearr_34174_34213[(2)] = inst_34150);

(statearr_34174_34213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (2))){
var inst_34078 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34078)){
var statearr_34175_34214 = state_34154__$1;
(statearr_34175_34214[(1)] = (5));

} else {
var statearr_34176_34215 = state_34154__$1;
(statearr_34176_34215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (23))){
var inst_34126 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34126)){
var statearr_34177_34216 = state_34154__$1;
(statearr_34177_34216[(1)] = (27));

} else {
var statearr_34178_34217 = state_34154__$1;
(statearr_34178_34217[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (19))){
var inst_34113 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34114 = figwheel.client.heads_up.append_message.call(null,inst_34113);
var state_34154__$1 = state_34154;
var statearr_34179_34218 = state_34154__$1;
(statearr_34179_34218[(2)] = inst_34114);

(statearr_34179_34218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (11))){
var inst_34102 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34102)){
var statearr_34180_34219 = state_34154__$1;
(statearr_34180_34219[(1)] = (15));

} else {
var statearr_34181_34220 = state_34154__$1;
(statearr_34181_34220[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (9))){
var inst_34086 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34182_34221 = state_34154__$1;
(statearr_34182_34221[(2)] = inst_34086);

(statearr_34182_34221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (5))){
var inst_34080 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34154__$1,(8),inst_34080);
} else {
if((state_val_34155 === (14))){
var inst_34100 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34183_34222 = state_34154__$1;
(statearr_34183_34222[(2)] = inst_34100);

(statearr_34183_34222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (26))){
var inst_34124 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34184_34223 = state_34154__$1;
(statearr_34184_34223[(2)] = inst_34124);

(statearr_34184_34223[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (16))){
var inst_34111 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34111)){
var statearr_34185_34224 = state_34154__$1;
(statearr_34185_34224[(1)] = (19));

} else {
var statearr_34186_34225 = state_34154__$1;
(statearr_34186_34225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (30))){
var inst_34131 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34187_34226 = state_34154__$1;
(statearr_34187_34226[(2)] = inst_34131);

(statearr_34187_34226[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (10))){
var inst_34092 = figwheel.client.heads_up.clear.call(null);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34154__$1,(13),inst_34092);
} else {
if((state_val_34155 === (18))){
var inst_34109 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34188_34227 = state_34154__$1;
(statearr_34188_34227[(2)] = inst_34109);

(statearr_34188_34227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (8))){
var inst_34082 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34189_34228 = state_34154__$1;
(statearr_34189_34228[(2)] = inst_34082);

(statearr_34189_34228[(1)] = (7));


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
});})(c__29159__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29097__auto__,c__29159__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto____0 = (function (){
var statearr_34193 = [null,null,null,null,null,null,null,null,null];
(statearr_34193[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto__);

(statearr_34193[(1)] = (1));

return statearr_34193;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto____1 = (function (state_34154){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_34154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e34194){if((e34194 instanceof Object)){
var ex__29101__auto__ = e34194;
var statearr_34195_34229 = state_34154;
(statearr_34195_34229[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34230 = state_34154;
state_34154 = G__34230;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto__ = function(state_34154){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto____1.call(this,state_34154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto__,msg_hist,msg_names,msg))
})();
var state__29161__auto__ = (function (){var statearr_34196 = f__29160__auto__.call(null);
(statearr_34196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto__);

return statearr_34196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto__,msg_hist,msg_names,msg))
);

return c__29159__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29159__auto___34293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___34293,ch){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___34293,ch){
return (function (state_34276){
var state_val_34277 = (state_34276[(1)]);
if((state_val_34277 === (1))){
var state_34276__$1 = state_34276;
var statearr_34278_34294 = state_34276__$1;
(statearr_34278_34294[(2)] = null);

(statearr_34278_34294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (2))){
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34276__$1,(4),ch);
} else {
if((state_val_34277 === (3))){
var inst_34274 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34276__$1,inst_34274);
} else {
if((state_val_34277 === (4))){
var inst_34264 = (state_34276[(7)]);
var inst_34264__$1 = (state_34276[(2)]);
var state_34276__$1 = (function (){var statearr_34279 = state_34276;
(statearr_34279[(7)] = inst_34264__$1);

return statearr_34279;
})();
if(cljs.core.truth_(inst_34264__$1)){
var statearr_34280_34295 = state_34276__$1;
(statearr_34280_34295[(1)] = (5));

} else {
var statearr_34281_34296 = state_34276__$1;
(statearr_34281_34296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (5))){
var inst_34264 = (state_34276[(7)]);
var inst_34266 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34264);
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34276__$1,(8),inst_34266);
} else {
if((state_val_34277 === (6))){
var state_34276__$1 = state_34276;
var statearr_34282_34297 = state_34276__$1;
(statearr_34282_34297[(2)] = null);

(statearr_34282_34297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (7))){
var inst_34272 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34283_34298 = state_34276__$1;
(statearr_34283_34298[(2)] = inst_34272);

(statearr_34283_34298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (8))){
var inst_34268 = (state_34276[(2)]);
var state_34276__$1 = (function (){var statearr_34284 = state_34276;
(statearr_34284[(8)] = inst_34268);

return statearr_34284;
})();
var statearr_34285_34299 = state_34276__$1;
(statearr_34285_34299[(2)] = null);

(statearr_34285_34299[(1)] = (2));


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
});})(c__29159__auto___34293,ch))
;
return ((function (switch__29097__auto__,c__29159__auto___34293,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29098__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29098__auto____0 = (function (){
var statearr_34289 = [null,null,null,null,null,null,null,null,null];
(statearr_34289[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29098__auto__);

(statearr_34289[(1)] = (1));

return statearr_34289;
});
var figwheel$client$heads_up_plugin_$_state_machine__29098__auto____1 = (function (state_34276){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_34276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e34290){if((e34290 instanceof Object)){
var ex__29101__auto__ = e34290;
var statearr_34291_34300 = state_34276;
(statearr_34291_34300[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34301 = state_34276;
state_34276 = G__34301;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29098__auto__ = function(state_34276){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29098__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29098__auto____1.call(this,state_34276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29098__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29098__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___34293,ch))
})();
var state__29161__auto__ = (function (){var statearr_34292 = f__29160__auto__.call(null);
(statearr_34292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___34293);

return statearr_34292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___34293,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29159__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto__){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto__){
return (function (state_34322){
var state_val_34323 = (state_34322[(1)]);
if((state_val_34323 === (1))){
var inst_34317 = cljs.core.async.timeout.call(null,(3000));
var state_34322__$1 = state_34322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34322__$1,(2),inst_34317);
} else {
if((state_val_34323 === (2))){
var inst_34319 = (state_34322[(2)]);
var inst_34320 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34322__$1 = (function (){var statearr_34324 = state_34322;
(statearr_34324[(7)] = inst_34319);

return statearr_34324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34322__$1,inst_34320);
} else {
return null;
}
}
});})(c__29159__auto__))
;
return ((function (switch__29097__auto__,c__29159__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29098__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29098__auto____0 = (function (){
var statearr_34328 = [null,null,null,null,null,null,null,null];
(statearr_34328[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29098__auto__);

(statearr_34328[(1)] = (1));

return statearr_34328;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29098__auto____1 = (function (state_34322){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_34322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e34329){if((e34329 instanceof Object)){
var ex__29101__auto__ = e34329;
var statearr_34330_34332 = state_34322;
(statearr_34330_34332[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34333 = state_34322;
state_34322 = G__34333;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29098__auto__ = function(state_34322){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29098__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29098__auto____1.call(this,state_34322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29098__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29098__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto__))
})();
var state__29161__auto__ = (function (){var statearr_34331 = f__29160__auto__.call(null);
(statearr_34331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto__);

return statearr_34331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto__))
);

return c__29159__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34334){
var map__34340 = p__34334;
var map__34340__$1 = ((cljs.core.seq_QMARK_.call(null,map__34340))?cljs.core.apply.call(null,cljs.core.hash_map,map__34340):map__34340);
var ed = map__34340__$1;
var formatted_exception = cljs.core.get.call(null,map__34340__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34340__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34340__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34341_34345 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34342_34346 = null;
var count__34343_34347 = (0);
var i__34344_34348 = (0);
while(true){
if((i__34344_34348 < count__34343_34347)){
var msg_34349 = cljs.core._nth.call(null,chunk__34342_34346,i__34344_34348);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34349);

var G__34350 = seq__34341_34345;
var G__34351 = chunk__34342_34346;
var G__34352 = count__34343_34347;
var G__34353 = (i__34344_34348 + (1));
seq__34341_34345 = G__34350;
chunk__34342_34346 = G__34351;
count__34343_34347 = G__34352;
i__34344_34348 = G__34353;
continue;
} else {
var temp__4425__auto___34354 = cljs.core.seq.call(null,seq__34341_34345);
if(temp__4425__auto___34354){
var seq__34341_34355__$1 = temp__4425__auto___34354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34341_34355__$1)){
var c__26079__auto___34356 = cljs.core.chunk_first.call(null,seq__34341_34355__$1);
var G__34357 = cljs.core.chunk_rest.call(null,seq__34341_34355__$1);
var G__34358 = c__26079__auto___34356;
var G__34359 = cljs.core.count.call(null,c__26079__auto___34356);
var G__34360 = (0);
seq__34341_34345 = G__34357;
chunk__34342_34346 = G__34358;
count__34343_34347 = G__34359;
i__34344_34348 = G__34360;
continue;
} else {
var msg_34361 = cljs.core.first.call(null,seq__34341_34355__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34361);

var G__34362 = cljs.core.next.call(null,seq__34341_34355__$1);
var G__34363 = null;
var G__34364 = (0);
var G__34365 = (0);
seq__34341_34345 = G__34362;
chunk__34342_34346 = G__34363;
count__34343_34347 = G__34364;
i__34344_34348 = G__34365;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34366){
var map__34368 = p__34366;
var map__34368__$1 = ((cljs.core.seq_QMARK_.call(null,map__34368))?cljs.core.apply.call(null,cljs.core.hash_map,map__34368):map__34368);
var w = map__34368__$1;
var message = cljs.core.get.call(null,map__34368__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25282__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25282__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25282__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34375 = cljs.core.seq.call(null,plugins);
var chunk__34376 = null;
var count__34377 = (0);
var i__34378 = (0);
while(true){
if((i__34378 < count__34377)){
var vec__34379 = cljs.core._nth.call(null,chunk__34376,i__34378);
var k = cljs.core.nth.call(null,vec__34379,(0),null);
var plugin = cljs.core.nth.call(null,vec__34379,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34381 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34375,chunk__34376,count__34377,i__34378,pl_34381,vec__34379,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34381.call(null,msg_hist);
});})(seq__34375,chunk__34376,count__34377,i__34378,pl_34381,vec__34379,k,plugin))
);
} else {
}

var G__34382 = seq__34375;
var G__34383 = chunk__34376;
var G__34384 = count__34377;
var G__34385 = (i__34378 + (1));
seq__34375 = G__34382;
chunk__34376 = G__34383;
count__34377 = G__34384;
i__34378 = G__34385;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34375);
if(temp__4425__auto__){
var seq__34375__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34375__$1)){
var c__26079__auto__ = cljs.core.chunk_first.call(null,seq__34375__$1);
var G__34386 = cljs.core.chunk_rest.call(null,seq__34375__$1);
var G__34387 = c__26079__auto__;
var G__34388 = cljs.core.count.call(null,c__26079__auto__);
var G__34389 = (0);
seq__34375 = G__34386;
chunk__34376 = G__34387;
count__34377 = G__34388;
i__34378 = G__34389;
continue;
} else {
var vec__34380 = cljs.core.first.call(null,seq__34375__$1);
var k = cljs.core.nth.call(null,vec__34380,(0),null);
var plugin = cljs.core.nth.call(null,vec__34380,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34390 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34375,chunk__34376,count__34377,i__34378,pl_34390,vec__34380,k,plugin,seq__34375__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34390.call(null,msg_hist);
});})(seq__34375,chunk__34376,count__34377,i__34378,pl_34390,vec__34380,k,plugin,seq__34375__$1,temp__4425__auto__))
);
} else {
}

var G__34391 = cljs.core.next.call(null,seq__34375__$1);
var G__34392 = null;
var G__34393 = (0);
var G__34394 = (0);
seq__34375 = G__34391;
chunk__34376 = G__34392;
count__34377 = G__34393;
i__34378 = G__34394;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__34396 = arguments.length;
switch (G__34396) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
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
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__26334__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26334__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34399){
var map__34400 = p__34399;
var map__34400__$1 = ((cljs.core.seq_QMARK_.call(null,map__34400))?cljs.core.apply.call(null,cljs.core.hash_map,map__34400):map__34400);
var opts = map__34400__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34398){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34398));
});

//# sourceMappingURL=client.js.map