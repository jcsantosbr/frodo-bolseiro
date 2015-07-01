// Compiled by ClojureScript 0.0-3308 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__33591){
var map__33597 = p__33591;
var map__33597__$1 = ((cljs.core.seq_QMARK_.call(null,map__33597))?cljs.core.apply.call(null,cljs.core.hash_map,map__33597):map__33597);
var replacement_transformers = cljs.core.get.call(null,map__33597__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__33597__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__33597,map__33597__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_33598 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__33599 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_33598,map__33597,map__33597__$1,replacement_transformers,custom_transformers){
return (function (p__33600,transformer){
var vec__33601 = p__33600;
var text = cljs.core.nth.call(null,vec__33601,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__33601,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_33598,map__33597,map__33597__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__25294__auto__ = replacement_transformers;
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__33599,(0),null);
var new_state = cljs.core.nth.call(null,vec__33599,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_33598;
}});
;})(map__33597,map__33597__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(){
var argseq__26334__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26334__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq33602){
var G__33603 = cljs.core.first.call(null,seq33602);
var seq33602__$1 = cljs.core.next.call(null,seq33602);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__33603,seq33602__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__33608_33612 = cljs.core.seq.call(null,lines);
var chunk__33609_33613 = null;
var count__33610_33614 = (0);
var i__33611_33615 = (0);
while(true){
if((i__33611_33615 < count__33610_33614)){
var line_33616 = cljs.core._nth.call(null,chunk__33609_33613,i__33611_33615);
markdown.transformers.parse_reference_link.call(null,line_33616,references);

var G__33617 = seq__33608_33612;
var G__33618 = chunk__33609_33613;
var G__33619 = count__33610_33614;
var G__33620 = (i__33611_33615 + (1));
seq__33608_33612 = G__33617;
chunk__33609_33613 = G__33618;
count__33610_33614 = G__33619;
i__33611_33615 = G__33620;
continue;
} else {
var temp__4425__auto___33621 = cljs.core.seq.call(null,seq__33608_33612);
if(temp__4425__auto___33621){
var seq__33608_33622__$1 = temp__4425__auto___33621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33608_33622__$1)){
var c__26079__auto___33623 = cljs.core.chunk_first.call(null,seq__33608_33622__$1);
var G__33624 = cljs.core.chunk_rest.call(null,seq__33608_33622__$1);
var G__33625 = c__26079__auto___33623;
var G__33626 = cljs.core.count.call(null,c__26079__auto___33623);
var G__33627 = (0);
seq__33608_33612 = G__33624;
chunk__33609_33613 = G__33625;
count__33610_33614 = G__33626;
i__33611_33615 = G__33627;
continue;
} else {
var line_33628 = cljs.core.first.call(null,seq__33608_33622__$1);
markdown.transformers.parse_reference_link.call(null,line_33628,references);

var G__33629 = cljs.core.next.call(null,seq__33608_33622__$1);
var G__33630 = null;
var G__33631 = (0);
var G__33632 = (0);
seq__33608_33612 = G__33629;
chunk__33609_33613 = G__33630;
count__33610_33614 = G__33631;
i__33611_33615 = G__33632;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md__GT_html = (function markdown$core$md__GT_html(){
var argseq__26334__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26334__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
var _STAR_substring_STAR_33635 = markdown.transformers._STAR_substring_STAR_;
var formatter33636 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_33635,formatter33636){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_33635,formatter33636))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__33638_33641 = lines;
var vec__33639_33642 = G__33638_33641;
var line_33643 = cljs.core.nth.call(null,vec__33639_33642,(0),null);
var more_33644 = cljs.core.nthnext.call(null,vec__33639_33642,(1));
var state_33645 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__33638_33646__$1 = G__33638_33641;
var state_33647__$1 = state_33645;
while(true){
var vec__33640_33648 = G__33638_33646__$1;
var line_33649__$1 = cljs.core.nth.call(null,vec__33640_33648,(0),null);
var more_33650__$1 = cljs.core.nthnext.call(null,vec__33640_33648,(1));
var state_33651__$2 = state_33647__$1;
var state_33652__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_33651__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_33651__$2),cljs.core.first.call(null,more_33650__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_33651__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_33651__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_33650__$1))){
var G__33653 = more_33650__$1;
var G__33654 = cljs.core.assoc.call(null,transformer.call(null,html,line_33649__$1,cljs.core.first.call(null,more_33650__$1),state_33652__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_33649__$1));
G__33638_33646__$1 = G__33653;
state_33647__$1 = G__33654;
continue;
} else {
transformer.call(null,html,line_33649__$1,"",cljs.core.assoc.call(null,state_33652__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter33636;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_33635;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq33633){
var G__33634 = cljs.core.first.call(null,seq33633);
var seq33633__$1 = cljs.core.next.call(null,seq33633);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__33634,seq33633__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(){
var argseq__26334__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__26334__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq33655){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33655));
});

//# sourceMappingURL=core.js.map