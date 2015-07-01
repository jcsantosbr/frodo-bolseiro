// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__34722_SHARP_,p2__34723_SHARP_){
var and__25282__auto__ = p1__34722_SHARP_;
if(cljs.core.truth_(and__25282__auto__)){
return p2__34723_SHARP_;
} else {
return and__25282__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25294__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25294__auto__){
return or__25294__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
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
if(cljs.core.truth_((function (){var or__25294__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__25294__auto__){
return or__25294__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__25294__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
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
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__26189__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26190__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26191__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26192__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26193__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26193__auto__,method_table__26189__auto__,prefer_table__26190__auto__,method_cache__26191__auto__,cached_hierarchy__26192__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34724){
var map__34725 = p__34724;
var map__34725__$1 = ((cljs.core.seq_QMARK_.call(null,map__34725))?cljs.core.apply.call(null,cljs.core.hash_map,map__34725):map__34725);
var file = cljs.core.get.call(null,map__34725__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__34726){
var map__34727 = p__34726;
var map__34727__$1 = ((cljs.core.seq_QMARK_.call(null,map__34727))?cljs.core.apply.call(null,cljs.core.hash_map,map__34727):map__34727);
var namespace = cljs.core.get.call(null,map__34727__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__26189__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26190__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26191__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26192__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26193__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26193__auto__,method_table__26189__auto__,prefer_table__26190__auto__,method_cache__26191__auto__,cached_hierarchy__26192__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e34728){if((e34728 instanceof Error)){
var e = e34728;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34728;

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
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__34730 = arguments.length;
switch (G__34730) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34732,callback){
var map__34734 = p__34732;
var map__34734__$1 = ((cljs.core.seq_QMARK_.call(null,map__34734))?cljs.core.apply.call(null,cljs.core.hash_map,map__34734):map__34734);
var file_msg = map__34734__$1;
var request_url = cljs.core.get.call(null,map__34734__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34734,map__34734__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34734,map__34734__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34735){
var map__34737 = p__34735;
var map__34737__$1 = ((cljs.core.seq_QMARK_.call(null,map__34737))?cljs.core.apply.call(null,cljs.core.hash_map,map__34737):map__34737);
var file_msg = map__34737__$1;
var namespace = cljs.core.get.call(null,map__34737__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__34737__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__25294__auto__ = meta_data;
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__25282__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__25282__auto__){
var or__25294__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__25294__auto____$1)){
return or__25294__auto____$1;
} else {
var and__25282__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__25282__auto____$1){
var or__25294__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__25294__auto____$2){
return or__25294__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__25282__auto____$1;
}
}
}
} else {
return and__25282__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34738,callback){
var map__34740 = p__34738;
var map__34740__$1 = ((cljs.core.seq_QMARK_.call(null,map__34740))?cljs.core.apply.call(null,cljs.core.hash_map,map__34740):map__34740);
var file_msg = map__34740__$1;
var request_url = cljs.core.get.call(null,map__34740__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34740__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
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
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29159__auto___34827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto___34827,out){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto___34827,out){
return (function (state_34809){
var state_val_34810 = (state_34809[(1)]);
if((state_val_34810 === (1))){
var inst_34787 = cljs.core.nth.call(null,files,(0),null);
var inst_34788 = cljs.core.nthnext.call(null,files,(1));
var inst_34789 = files;
var state_34809__$1 = (function (){var statearr_34811 = state_34809;
(statearr_34811[(7)] = inst_34787);

(statearr_34811[(8)] = inst_34789);

(statearr_34811[(9)] = inst_34788);

return statearr_34811;
})();
var statearr_34812_34828 = state_34809__$1;
(statearr_34812_34828[(2)] = null);

(statearr_34812_34828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (2))){
var inst_34789 = (state_34809[(8)]);
var inst_34792 = (state_34809[(10)]);
var inst_34792__$1 = cljs.core.nth.call(null,inst_34789,(0),null);
var inst_34793 = cljs.core.nthnext.call(null,inst_34789,(1));
var inst_34794 = (inst_34792__$1 == null);
var inst_34795 = cljs.core.not.call(null,inst_34794);
var state_34809__$1 = (function (){var statearr_34813 = state_34809;
(statearr_34813[(11)] = inst_34793);

(statearr_34813[(10)] = inst_34792__$1);

return statearr_34813;
})();
if(inst_34795){
var statearr_34814_34829 = state_34809__$1;
(statearr_34814_34829[(1)] = (4));

} else {
var statearr_34815_34830 = state_34809__$1;
(statearr_34815_34830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (3))){
var inst_34807 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34809__$1,inst_34807);
} else {
if((state_val_34810 === (4))){
var inst_34792 = (state_34809[(10)]);
var inst_34797 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34792);
var state_34809__$1 = state_34809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34809__$1,(7),inst_34797);
} else {
if((state_val_34810 === (5))){
var inst_34803 = cljs.core.async.close_BANG_.call(null,out);
var state_34809__$1 = state_34809;
var statearr_34816_34831 = state_34809__$1;
(statearr_34816_34831[(2)] = inst_34803);

(statearr_34816_34831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (6))){
var inst_34805 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34817_34832 = state_34809__$1;
(statearr_34817_34832[(2)] = inst_34805);

(statearr_34817_34832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (7))){
var inst_34793 = (state_34809[(11)]);
var inst_34799 = (state_34809[(2)]);
var inst_34800 = cljs.core.async.put_BANG_.call(null,out,inst_34799);
var inst_34789 = inst_34793;
var state_34809__$1 = (function (){var statearr_34818 = state_34809;
(statearr_34818[(8)] = inst_34789);

(statearr_34818[(12)] = inst_34800);

return statearr_34818;
})();
var statearr_34819_34833 = state_34809__$1;
(statearr_34819_34833[(2)] = null);

(statearr_34819_34833[(1)] = (2));


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
});})(c__29159__auto___34827,out))
;
return ((function (switch__29097__auto__,c__29159__auto___34827,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto____0 = (function (){
var statearr_34823 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34823[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto__);

(statearr_34823[(1)] = (1));

return statearr_34823;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto____1 = (function (state_34809){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_34809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e34824){if((e34824 instanceof Object)){
var ex__29101__auto__ = e34824;
var statearr_34825_34834 = state_34809;
(statearr_34825_34834[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34835 = state_34809;
state_34809 = G__34835;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto__ = function(state_34809){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto____1.call(this,state_34809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto___34827,out))
})();
var state__29161__auto__ = (function (){var statearr_34826 = f__29160__auto__.call(null);
(statearr_34826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto___34827);

return statearr_34826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto___34827,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__34836,p__34837){
var map__34840 = p__34836;
var map__34840__$1 = ((cljs.core.seq_QMARK_.call(null,map__34840))?cljs.core.apply.call(null,cljs.core.hash_map,map__34840):map__34840);
var opts = map__34840__$1;
var url_rewriter = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__34841 = p__34837;
var map__34841__$1 = ((cljs.core.seq_QMARK_.call(null,map__34841))?cljs.core.apply.call(null,cljs.core.hash_map,map__34841):map__34841);
var file_msg = map__34841__$1;
var file = cljs.core.get.call(null,map__34841__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34842){
var map__34845 = p__34842;
var map__34845__$1 = ((cljs.core.seq_QMARK_.call(null,map__34845))?cljs.core.apply.call(null,cljs.core.hash_map,map__34845):map__34845);
var eval_body__$1 = cljs.core.get.call(null,map__34845__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34845__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25282__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25282__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25282__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e34846){var e = e34846;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34851,p__34852){
var map__35054 = p__34851;
var map__35054__$1 = ((cljs.core.seq_QMARK_.call(null,map__35054))?cljs.core.apply.call(null,cljs.core.hash_map,map__35054):map__35054);
var opts = map__35054__$1;
var before_jsload = cljs.core.get.call(null,map__35054__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35054__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__35054__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__35055 = p__34852;
var map__35055__$1 = ((cljs.core.seq_QMARK_.call(null,map__35055))?cljs.core.apply.call(null,cljs.core.hash_map,map__35055):map__35055);
var msg = map__35055__$1;
var files = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__29159__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files){
return (function (state_35180){
var state_val_35181 = (state_35180[(1)]);
if((state_val_35181 === (7))){
var inst_35070 = (state_35180[(7)]);
var inst_35067 = (state_35180[(8)]);
var inst_35068 = (state_35180[(9)]);
var inst_35069 = (state_35180[(10)]);
var inst_35075 = cljs.core._nth.call(null,inst_35068,inst_35070);
var inst_35076 = figwheel.client.file_reloading.eval_body.call(null,inst_35075);
var inst_35077 = (inst_35070 + (1));
var tmp35182 = inst_35067;
var tmp35183 = inst_35068;
var tmp35184 = inst_35069;
var inst_35067__$1 = tmp35182;
var inst_35068__$1 = tmp35183;
var inst_35069__$1 = tmp35184;
var inst_35070__$1 = inst_35077;
var state_35180__$1 = (function (){var statearr_35185 = state_35180;
(statearr_35185[(11)] = inst_35076);

(statearr_35185[(7)] = inst_35070__$1);

(statearr_35185[(8)] = inst_35067__$1);

(statearr_35185[(9)] = inst_35068__$1);

(statearr_35185[(10)] = inst_35069__$1);

return statearr_35185;
})();
var statearr_35186_35255 = state_35180__$1;
(statearr_35186_35255[(2)] = null);

(statearr_35186_35255[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (20))){
var inst_35113 = (state_35180[(12)]);
var inst_35116 = (state_35180[(13)]);
var inst_35119 = (state_35180[(14)]);
var inst_35112 = (state_35180[(15)]);
var inst_35117 = (state_35180[(16)]);
var inst_35122 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35124 = (function (){var all_files = inst_35112;
var files_SINGLEQUOTE_ = inst_35113;
var res_SINGLEQUOTE_ = inst_35116;
var res = inst_35117;
var files_not_loaded = inst_35119;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35113,inst_35116,inst_35119,inst_35112,inst_35117,inst_35122,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files){
return (function (p__35123){
var map__35187 = p__35123;
var map__35187__$1 = ((cljs.core.seq_QMARK_.call(null,map__35187))?cljs.core.apply.call(null,cljs.core.hash_map,map__35187):map__35187);
var namespace = cljs.core.get.call(null,map__35187__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35187__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35113,inst_35116,inst_35119,inst_35112,inst_35117,inst_35122,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files))
})();
var inst_35125 = cljs.core.map.call(null,inst_35124,inst_35117);
var inst_35126 = cljs.core.pr_str.call(null,inst_35125);
var inst_35127 = figwheel.client.utils.log.call(null,inst_35126);
var inst_35128 = (function (){var all_files = inst_35112;
var files_SINGLEQUOTE_ = inst_35113;
var res_SINGLEQUOTE_ = inst_35116;
var res = inst_35117;
var files_not_loaded = inst_35119;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35113,inst_35116,inst_35119,inst_35112,inst_35117,inst_35122,inst_35124,inst_35125,inst_35126,inst_35127,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35113,inst_35116,inst_35119,inst_35112,inst_35117,inst_35122,inst_35124,inst_35125,inst_35126,inst_35127,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files))
})();
var inst_35129 = setTimeout(inst_35128,(10));
var state_35180__$1 = (function (){var statearr_35188 = state_35180;
(statearr_35188[(17)] = inst_35122);

(statearr_35188[(18)] = inst_35127);

return statearr_35188;
})();
var statearr_35189_35256 = state_35180__$1;
(statearr_35189_35256[(2)] = inst_35129);

(statearr_35189_35256[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (27))){
var inst_35139 = (state_35180[(19)]);
var state_35180__$1 = state_35180;
var statearr_35190_35257 = state_35180__$1;
(statearr_35190_35257[(2)] = inst_35139);

(statearr_35190_35257[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (1))){
var inst_35059 = (state_35180[(20)]);
var inst_35056 = before_jsload.call(null,files);
var inst_35057 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35058 = (function (){return ((function (inst_35059,inst_35056,inst_35057,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files){
return (function (p1__34847_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34847_SHARP_);
});
;})(inst_35059,inst_35056,inst_35057,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files))
})();
var inst_35059__$1 = cljs.core.filter.call(null,inst_35058,files);
var inst_35060 = cljs.core.not_empty.call(null,inst_35059__$1);
var state_35180__$1 = (function (){var statearr_35191 = state_35180;
(statearr_35191[(21)] = inst_35057);

(statearr_35191[(22)] = inst_35056);

(statearr_35191[(20)] = inst_35059__$1);

return statearr_35191;
})();
if(cljs.core.truth_(inst_35060)){
var statearr_35192_35258 = state_35180__$1;
(statearr_35192_35258[(1)] = (2));

} else {
var statearr_35193_35259 = state_35180__$1;
(statearr_35193_35259[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (24))){
var state_35180__$1 = state_35180;
var statearr_35194_35260 = state_35180__$1;
(statearr_35194_35260[(2)] = null);

(statearr_35194_35260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (4))){
var inst_35104 = (state_35180[(2)]);
var inst_35105 = (function (){return ((function (inst_35104,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files){
return (function (p1__34848_SHARP_){
var and__25282__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34848_SHARP_);
if(cljs.core.truth_(and__25282__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34848_SHARP_));
} else {
return and__25282__auto__;
}
});
;})(inst_35104,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files))
})();
var inst_35106 = cljs.core.filter.call(null,inst_35105,files);
var state_35180__$1 = (function (){var statearr_35195 = state_35180;
(statearr_35195[(23)] = inst_35104);

(statearr_35195[(24)] = inst_35106);

return statearr_35195;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35196_35261 = state_35180__$1;
(statearr_35196_35261[(1)] = (16));

} else {
var statearr_35197_35262 = state_35180__$1;
(statearr_35197_35262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (15))){
var inst_35094 = (state_35180[(2)]);
var state_35180__$1 = state_35180;
var statearr_35198_35263 = state_35180__$1;
(statearr_35198_35263[(2)] = inst_35094);

(statearr_35198_35263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (21))){
var state_35180__$1 = state_35180;
var statearr_35199_35264 = state_35180__$1;
(statearr_35199_35264[(2)] = null);

(statearr_35199_35264[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (31))){
var inst_35147 = (state_35180[(25)]);
var inst_35157 = (state_35180[(2)]);
var inst_35158 = cljs.core.not_empty.call(null,inst_35147);
var state_35180__$1 = (function (){var statearr_35200 = state_35180;
(statearr_35200[(26)] = inst_35157);

return statearr_35200;
})();
if(cljs.core.truth_(inst_35158)){
var statearr_35201_35265 = state_35180__$1;
(statearr_35201_35265[(1)] = (32));

} else {
var statearr_35202_35266 = state_35180__$1;
(statearr_35202_35266[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (32))){
var inst_35147 = (state_35180[(25)]);
var inst_35160 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35147);
var inst_35161 = cljs.core.pr_str.call(null,inst_35160);
var inst_35162 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35161)].join('');
var inst_35163 = figwheel.client.utils.log.call(null,inst_35162);
var state_35180__$1 = state_35180;
var statearr_35203_35267 = state_35180__$1;
(statearr_35203_35267[(2)] = inst_35163);

(statearr_35203_35267[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (33))){
var state_35180__$1 = state_35180;
var statearr_35204_35268 = state_35180__$1;
(statearr_35204_35268[(2)] = null);

(statearr_35204_35268[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (13))){
var inst_35080 = (state_35180[(27)]);
var inst_35084 = cljs.core.chunk_first.call(null,inst_35080);
var inst_35085 = cljs.core.chunk_rest.call(null,inst_35080);
var inst_35086 = cljs.core.count.call(null,inst_35084);
var inst_35067 = inst_35085;
var inst_35068 = inst_35084;
var inst_35069 = inst_35086;
var inst_35070 = (0);
var state_35180__$1 = (function (){var statearr_35205 = state_35180;
(statearr_35205[(7)] = inst_35070);

(statearr_35205[(8)] = inst_35067);

(statearr_35205[(9)] = inst_35068);

(statearr_35205[(10)] = inst_35069);

return statearr_35205;
})();
var statearr_35206_35269 = state_35180__$1;
(statearr_35206_35269[(2)] = null);

(statearr_35206_35269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (22))){
var inst_35119 = (state_35180[(14)]);
var inst_35132 = (state_35180[(2)]);
var inst_35133 = cljs.core.not_empty.call(null,inst_35119);
var state_35180__$1 = (function (){var statearr_35207 = state_35180;
(statearr_35207[(28)] = inst_35132);

return statearr_35207;
})();
if(cljs.core.truth_(inst_35133)){
var statearr_35208_35270 = state_35180__$1;
(statearr_35208_35270[(1)] = (23));

} else {
var statearr_35209_35271 = state_35180__$1;
(statearr_35209_35271[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (36))){
var state_35180__$1 = state_35180;
var statearr_35210_35272 = state_35180__$1;
(statearr_35210_35272[(2)] = null);

(statearr_35210_35272[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (29))){
var inst_35146 = (state_35180[(29)]);
var inst_35151 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35146);
var inst_35152 = cljs.core.pr_str.call(null,inst_35151);
var inst_35153 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35152)].join('');
var inst_35154 = figwheel.client.utils.log.call(null,inst_35153);
var state_35180__$1 = state_35180;
var statearr_35211_35273 = state_35180__$1;
(statearr_35211_35273[(2)] = inst_35154);

(statearr_35211_35273[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (6))){
var inst_35101 = (state_35180[(2)]);
var state_35180__$1 = state_35180;
var statearr_35212_35274 = state_35180__$1;
(statearr_35212_35274[(2)] = inst_35101);

(statearr_35212_35274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (28))){
var inst_35146 = (state_35180[(29)]);
var inst_35145 = (state_35180[(2)]);
var inst_35146__$1 = cljs.core.get.call(null,inst_35145,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35147 = cljs.core.get.call(null,inst_35145,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35148 = cljs.core.get.call(null,inst_35145,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35149 = cljs.core.not_empty.call(null,inst_35146__$1);
var state_35180__$1 = (function (){var statearr_35213 = state_35180;
(statearr_35213[(30)] = inst_35148);

(statearr_35213[(29)] = inst_35146__$1);

(statearr_35213[(25)] = inst_35147);

return statearr_35213;
})();
if(cljs.core.truth_(inst_35149)){
var statearr_35214_35275 = state_35180__$1;
(statearr_35214_35275[(1)] = (29));

} else {
var statearr_35215_35276 = state_35180__$1;
(statearr_35215_35276[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (25))){
var inst_35178 = (state_35180[(2)]);
var state_35180__$1 = state_35180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35180__$1,inst_35178);
} else {
if((state_val_35181 === (34))){
var inst_35148 = (state_35180[(30)]);
var inst_35166 = (state_35180[(2)]);
var inst_35167 = cljs.core.not_empty.call(null,inst_35148);
var state_35180__$1 = (function (){var statearr_35216 = state_35180;
(statearr_35216[(31)] = inst_35166);

return statearr_35216;
})();
if(cljs.core.truth_(inst_35167)){
var statearr_35217_35277 = state_35180__$1;
(statearr_35217_35277[(1)] = (35));

} else {
var statearr_35218_35278 = state_35180__$1;
(statearr_35218_35278[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (17))){
var inst_35106 = (state_35180[(24)]);
var state_35180__$1 = state_35180;
var statearr_35219_35279 = state_35180__$1;
(statearr_35219_35279[(2)] = inst_35106);

(statearr_35219_35279[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (3))){
var state_35180__$1 = state_35180;
var statearr_35220_35280 = state_35180__$1;
(statearr_35220_35280[(2)] = null);

(statearr_35220_35280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (12))){
var inst_35097 = (state_35180[(2)]);
var state_35180__$1 = state_35180;
var statearr_35221_35281 = state_35180__$1;
(statearr_35221_35281[(2)] = inst_35097);

(statearr_35221_35281[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (2))){
var inst_35059 = (state_35180[(20)]);
var inst_35066 = cljs.core.seq.call(null,inst_35059);
var inst_35067 = inst_35066;
var inst_35068 = null;
var inst_35069 = (0);
var inst_35070 = (0);
var state_35180__$1 = (function (){var statearr_35222 = state_35180;
(statearr_35222[(7)] = inst_35070);

(statearr_35222[(8)] = inst_35067);

(statearr_35222[(9)] = inst_35068);

(statearr_35222[(10)] = inst_35069);

return statearr_35222;
})();
var statearr_35223_35282 = state_35180__$1;
(statearr_35223_35282[(2)] = null);

(statearr_35223_35282[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (23))){
var inst_35113 = (state_35180[(12)]);
var inst_35139 = (state_35180[(19)]);
var inst_35116 = (state_35180[(13)]);
var inst_35119 = (state_35180[(14)]);
var inst_35112 = (state_35180[(15)]);
var inst_35117 = (state_35180[(16)]);
var inst_35135 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35138 = (function (){var all_files = inst_35112;
var files_SINGLEQUOTE_ = inst_35113;
var res_SINGLEQUOTE_ = inst_35116;
var res = inst_35117;
var files_not_loaded = inst_35119;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35113,inst_35139,inst_35116,inst_35119,inst_35112,inst_35117,inst_35135,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files){
return (function (p__35137){
var map__35224 = p__35137;
var map__35224__$1 = ((cljs.core.seq_QMARK_.call(null,map__35224))?cljs.core.apply.call(null,cljs.core.hash_map,map__35224):map__35224);
var meta_data = cljs.core.get.call(null,map__35224__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35113,inst_35139,inst_35116,inst_35119,inst_35112,inst_35117,inst_35135,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files))
})();
var inst_35139__$1 = cljs.core.group_by.call(null,inst_35138,inst_35119);
var inst_35140 = cljs.core.seq_QMARK_.call(null,inst_35139__$1);
var state_35180__$1 = (function (){var statearr_35225 = state_35180;
(statearr_35225[(19)] = inst_35139__$1);

(statearr_35225[(32)] = inst_35135);

return statearr_35225;
})();
if(inst_35140){
var statearr_35226_35283 = state_35180__$1;
(statearr_35226_35283[(1)] = (26));

} else {
var statearr_35227_35284 = state_35180__$1;
(statearr_35227_35284[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (35))){
var inst_35148 = (state_35180[(30)]);
var inst_35169 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35148);
var inst_35170 = cljs.core.pr_str.call(null,inst_35169);
var inst_35171 = [cljs.core.str("not required: "),cljs.core.str(inst_35170)].join('');
var inst_35172 = figwheel.client.utils.log.call(null,inst_35171);
var state_35180__$1 = state_35180;
var statearr_35228_35285 = state_35180__$1;
(statearr_35228_35285[(2)] = inst_35172);

(statearr_35228_35285[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (19))){
var inst_35113 = (state_35180[(12)]);
var inst_35116 = (state_35180[(13)]);
var inst_35112 = (state_35180[(15)]);
var inst_35117 = (state_35180[(16)]);
var inst_35116__$1 = (state_35180[(2)]);
var inst_35117__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35116__$1);
var inst_35118 = (function (){var all_files = inst_35112;
var files_SINGLEQUOTE_ = inst_35113;
var res_SINGLEQUOTE_ = inst_35116__$1;
var res = inst_35117__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35113,inst_35116,inst_35112,inst_35117,inst_35116__$1,inst_35117__$1,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files){
return (function (p1__34850_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34850_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35113,inst_35116,inst_35112,inst_35117,inst_35116__$1,inst_35117__$1,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files))
})();
var inst_35119 = cljs.core.filter.call(null,inst_35118,inst_35116__$1);
var inst_35120 = cljs.core.not_empty.call(null,inst_35117__$1);
var state_35180__$1 = (function (){var statearr_35229 = state_35180;
(statearr_35229[(13)] = inst_35116__$1);

(statearr_35229[(14)] = inst_35119);

(statearr_35229[(16)] = inst_35117__$1);

return statearr_35229;
})();
if(cljs.core.truth_(inst_35120)){
var statearr_35230_35286 = state_35180__$1;
(statearr_35230_35286[(1)] = (20));

} else {
var statearr_35231_35287 = state_35180__$1;
(statearr_35231_35287[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (11))){
var state_35180__$1 = state_35180;
var statearr_35232_35288 = state_35180__$1;
(statearr_35232_35288[(2)] = null);

(statearr_35232_35288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (9))){
var inst_35099 = (state_35180[(2)]);
var state_35180__$1 = state_35180;
var statearr_35233_35289 = state_35180__$1;
(statearr_35233_35289[(2)] = inst_35099);

(statearr_35233_35289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (5))){
var inst_35070 = (state_35180[(7)]);
var inst_35069 = (state_35180[(10)]);
var inst_35072 = (inst_35070 < inst_35069);
var inst_35073 = inst_35072;
var state_35180__$1 = state_35180;
if(cljs.core.truth_(inst_35073)){
var statearr_35234_35290 = state_35180__$1;
(statearr_35234_35290[(1)] = (7));

} else {
var statearr_35235_35291 = state_35180__$1;
(statearr_35235_35291[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (14))){
var inst_35080 = (state_35180[(27)]);
var inst_35089 = cljs.core.first.call(null,inst_35080);
var inst_35090 = figwheel.client.file_reloading.eval_body.call(null,inst_35089);
var inst_35091 = cljs.core.next.call(null,inst_35080);
var inst_35067 = inst_35091;
var inst_35068 = null;
var inst_35069 = (0);
var inst_35070 = (0);
var state_35180__$1 = (function (){var statearr_35236 = state_35180;
(statearr_35236[(7)] = inst_35070);

(statearr_35236[(8)] = inst_35067);

(statearr_35236[(33)] = inst_35090);

(statearr_35236[(9)] = inst_35068);

(statearr_35236[(10)] = inst_35069);

return statearr_35236;
})();
var statearr_35237_35292 = state_35180__$1;
(statearr_35237_35292[(2)] = null);

(statearr_35237_35292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (26))){
var inst_35139 = (state_35180[(19)]);
var inst_35142 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35139);
var state_35180__$1 = state_35180;
var statearr_35238_35293 = state_35180__$1;
(statearr_35238_35293[(2)] = inst_35142);

(statearr_35238_35293[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (16))){
var inst_35106 = (state_35180[(24)]);
var inst_35108 = (function (){var all_files = inst_35106;
return ((function (all_files,inst_35106,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files){
return (function (p1__34849_SHARP_){
return cljs.core.update_in.call(null,p1__34849_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35106,state_val_35181,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files))
})();
var inst_35109 = cljs.core.map.call(null,inst_35108,inst_35106);
var state_35180__$1 = state_35180;
var statearr_35239_35294 = state_35180__$1;
(statearr_35239_35294[(2)] = inst_35109);

(statearr_35239_35294[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (30))){
var state_35180__$1 = state_35180;
var statearr_35240_35295 = state_35180__$1;
(statearr_35240_35295[(2)] = null);

(statearr_35240_35295[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (10))){
var inst_35080 = (state_35180[(27)]);
var inst_35082 = cljs.core.chunked_seq_QMARK_.call(null,inst_35080);
var state_35180__$1 = state_35180;
if(inst_35082){
var statearr_35241_35296 = state_35180__$1;
(statearr_35241_35296[(1)] = (13));

} else {
var statearr_35242_35297 = state_35180__$1;
(statearr_35242_35297[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (18))){
var inst_35113 = (state_35180[(12)]);
var inst_35112 = (state_35180[(15)]);
var inst_35112__$1 = (state_35180[(2)]);
var inst_35113__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35112__$1);
var inst_35114 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35113__$1);
var state_35180__$1 = (function (){var statearr_35243 = state_35180;
(statearr_35243[(12)] = inst_35113__$1);

(statearr_35243[(15)] = inst_35112__$1);

return statearr_35243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35180__$1,(19),inst_35114);
} else {
if((state_val_35181 === (37))){
var inst_35175 = (state_35180[(2)]);
var state_35180__$1 = state_35180;
var statearr_35244_35298 = state_35180__$1;
(statearr_35244_35298[(2)] = inst_35175);

(statearr_35244_35298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (8))){
var inst_35067 = (state_35180[(8)]);
var inst_35080 = (state_35180[(27)]);
var inst_35080__$1 = cljs.core.seq.call(null,inst_35067);
var state_35180__$1 = (function (){var statearr_35245 = state_35180;
(statearr_35245[(27)] = inst_35080__$1);

return statearr_35245;
})();
if(inst_35080__$1){
var statearr_35246_35299 = state_35180__$1;
(statearr_35246_35299[(1)] = (10));

} else {
var statearr_35247_35300 = state_35180__$1;
(statearr_35247_35300[(1)] = (11));

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
});})(c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files))
;
return ((function (switch__29097__auto__,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto____0 = (function (){
var statearr_35251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35251[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto__);

(statearr_35251[(1)] = (1));

return statearr_35251;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto____1 = (function (state_35180){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_35180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e35252){if((e35252 instanceof Object)){
var ex__29101__auto__ = e35252;
var statearr_35253_35301 = state_35180;
(statearr_35253_35301[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35302 = state_35180;
state_35180 = G__35302;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto__ = function(state_35180){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto____1.call(this,state_35180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files))
})();
var state__29161__auto__ = (function (){var statearr_35254 = f__29160__auto__.call(null);
(statearr_35254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto__);

return statearr_35254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto__,map__35054,map__35054__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35055,map__35055__$1,msg,files))
);

return c__29159__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35305,link){
var map__35307 = p__35305;
var map__35307__$1 = ((cljs.core.seq_QMARK_.call(null,map__35307))?cljs.core.apply.call(null,cljs.core.hash_map,map__35307):map__35307);
var file = cljs.core.get.call(null,map__35307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__35307,map__35307__$1,file){
return (function (p1__35303_SHARP_,p2__35304_SHARP_){
if(cljs.core._EQ_.call(null,p1__35303_SHARP_,p2__35304_SHARP_)){
return p1__35303_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__35307,map__35307__$1,file))
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
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35311){
var map__35312 = p__35311;
var map__35312__$1 = ((cljs.core.seq_QMARK_.call(null,map__35312))?cljs.core.apply.call(null,cljs.core.hash_map,map__35312):map__35312);
var match_length = cljs.core.get.call(null,map__35312__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35312__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35308_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35308_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__35314 = arguments.length;
switch (G__35314) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
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

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35316){
var map__35318 = p__35316;
var map__35318__$1 = ((cljs.core.seq_QMARK_.call(null,map__35318))?cljs.core.apply.call(null,cljs.core.hash_map,map__35318):map__35318);
var f_data = map__35318__$1;
var file = cljs.core.get.call(null,map__35318__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__35318__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__25294__auto__ = request_url;
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35319,files_msg){
var map__35341 = p__35319;
var map__35341__$1 = ((cljs.core.seq_QMARK_.call(null,map__35341))?cljs.core.apply.call(null,cljs.core.hash_map,map__35341):map__35341);
var opts = map__35341__$1;
var on_cssload = cljs.core.get.call(null,map__35341__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35342_35362 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35343_35363 = null;
var count__35344_35364 = (0);
var i__35345_35365 = (0);
while(true){
if((i__35345_35365 < count__35344_35364)){
var f_35366 = cljs.core._nth.call(null,chunk__35343_35363,i__35345_35365);
figwheel.client.file_reloading.reload_css_file.call(null,f_35366);

var G__35367 = seq__35342_35362;
var G__35368 = chunk__35343_35363;
var G__35369 = count__35344_35364;
var G__35370 = (i__35345_35365 + (1));
seq__35342_35362 = G__35367;
chunk__35343_35363 = G__35368;
count__35344_35364 = G__35369;
i__35345_35365 = G__35370;
continue;
} else {
var temp__4425__auto___35371 = cljs.core.seq.call(null,seq__35342_35362);
if(temp__4425__auto___35371){
var seq__35342_35372__$1 = temp__4425__auto___35371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35342_35372__$1)){
var c__26079__auto___35373 = cljs.core.chunk_first.call(null,seq__35342_35372__$1);
var G__35374 = cljs.core.chunk_rest.call(null,seq__35342_35372__$1);
var G__35375 = c__26079__auto___35373;
var G__35376 = cljs.core.count.call(null,c__26079__auto___35373);
var G__35377 = (0);
seq__35342_35362 = G__35374;
chunk__35343_35363 = G__35375;
count__35344_35364 = G__35376;
i__35345_35365 = G__35377;
continue;
} else {
var f_35378 = cljs.core.first.call(null,seq__35342_35372__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35378);

var G__35379 = cljs.core.next.call(null,seq__35342_35372__$1);
var G__35380 = null;
var G__35381 = (0);
var G__35382 = (0);
seq__35342_35362 = G__35379;
chunk__35343_35363 = G__35380;
count__35344_35364 = G__35381;
i__35345_35365 = G__35382;
continue;
}
} else {
}
}
break;
}

var c__29159__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29159__auto__,map__35341,map__35341__$1,opts,on_cssload){
return (function (){
var f__29160__auto__ = (function (){var switch__29097__auto__ = ((function (c__29159__auto__,map__35341,map__35341__$1,opts,on_cssload){
return (function (state_35352){
var state_val_35353 = (state_35352[(1)]);
if((state_val_35353 === (1))){
var inst_35346 = cljs.core.async.timeout.call(null,(100));
var state_35352__$1 = state_35352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35352__$1,(2),inst_35346);
} else {
if((state_val_35353 === (2))){
var inst_35348 = (state_35352[(2)]);
var inst_35349 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35350 = on_cssload.call(null,inst_35349);
var state_35352__$1 = (function (){var statearr_35354 = state_35352;
(statearr_35354[(7)] = inst_35348);

return statearr_35354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35352__$1,inst_35350);
} else {
return null;
}
}
});})(c__29159__auto__,map__35341,map__35341__$1,opts,on_cssload))
;
return ((function (switch__29097__auto__,c__29159__auto__,map__35341,map__35341__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto____0 = (function (){
var statearr_35358 = [null,null,null,null,null,null,null,null];
(statearr_35358[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto__);

(statearr_35358[(1)] = (1));

return statearr_35358;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto____1 = (function (state_35352){
while(true){
var ret_value__29099__auto__ = (function (){try{while(true){
var result__29100__auto__ = switch__29097__auto__.call(null,state_35352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29100__auto__;
}
break;
}
}catch (e35359){if((e35359 instanceof Object)){
var ex__29101__auto__ = e35359;
var statearr_35360_35383 = state_35352;
(statearr_35360_35383[(5)] = ex__29101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35384 = state_35352;
state_35352 = G__35384;
continue;
} else {
return ret_value__29099__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto__ = function(state_35352){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto____1.call(this,state_35352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29098__auto__;
})()
;})(switch__29097__auto__,c__29159__auto__,map__35341,map__35341__$1,opts,on_cssload))
})();
var state__29161__auto__ = (function (){var statearr_35361 = f__29160__auto__.call(null);
(statearr_35361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29159__auto__);

return statearr_35361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29161__auto__);
});})(c__29159__auto__,map__35341,map__35341__$1,opts,on_cssload))
);

return c__29159__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map