// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34656_34668 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34657_34669 = null;
var count__34658_34670 = (0);
var i__34659_34671 = (0);
while(true){
if((i__34659_34671 < count__34658_34670)){
var f_34672 = cljs.core._nth.call(null,chunk__34657_34669,i__34659_34671);
cljs.core.println.call(null,"  ",f_34672);

var G__34673 = seq__34656_34668;
var G__34674 = chunk__34657_34669;
var G__34675 = count__34658_34670;
var G__34676 = (i__34659_34671 + (1));
seq__34656_34668 = G__34673;
chunk__34657_34669 = G__34674;
count__34658_34670 = G__34675;
i__34659_34671 = G__34676;
continue;
} else {
var temp__4425__auto___34677 = cljs.core.seq.call(null,seq__34656_34668);
if(temp__4425__auto___34677){
var seq__34656_34678__$1 = temp__4425__auto___34677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34656_34678__$1)){
var c__26079__auto___34679 = cljs.core.chunk_first.call(null,seq__34656_34678__$1);
var G__34680 = cljs.core.chunk_rest.call(null,seq__34656_34678__$1);
var G__34681 = c__26079__auto___34679;
var G__34682 = cljs.core.count.call(null,c__26079__auto___34679);
var G__34683 = (0);
seq__34656_34668 = G__34680;
chunk__34657_34669 = G__34681;
count__34658_34670 = G__34682;
i__34659_34671 = G__34683;
continue;
} else {
var f_34684 = cljs.core.first.call(null,seq__34656_34678__$1);
cljs.core.println.call(null,"  ",f_34684);

var G__34685 = cljs.core.next.call(null,seq__34656_34678__$1);
var G__34686 = null;
var G__34687 = (0);
var G__34688 = (0);
seq__34656_34668 = G__34685;
chunk__34657_34669 = G__34686;
count__34658_34670 = G__34687;
i__34659_34671 = G__34688;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34689 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25294__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34689);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34689)))?cljs.core.second.call(null,arglists_34689):arglists_34689));
}
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34660 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34661 = null;
var count__34662 = (0);
var i__34663 = (0);
while(true){
if((i__34663 < count__34662)){
var vec__34664 = cljs.core._nth.call(null,chunk__34661,i__34663);
var name = cljs.core.nth.call(null,vec__34664,(0),null);
var map__34665 = cljs.core.nth.call(null,vec__34664,(1),null);
var map__34665__$1 = ((cljs.core.seq_QMARK_.call(null,map__34665))?cljs.core.apply.call(null,cljs.core.hash_map,map__34665):map__34665);
var doc = cljs.core.get.call(null,map__34665__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34665__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34690 = seq__34660;
var G__34691 = chunk__34661;
var G__34692 = count__34662;
var G__34693 = (i__34663 + (1));
seq__34660 = G__34690;
chunk__34661 = G__34691;
count__34662 = G__34692;
i__34663 = G__34693;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34660);
if(temp__4425__auto__){
var seq__34660__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34660__$1)){
var c__26079__auto__ = cljs.core.chunk_first.call(null,seq__34660__$1);
var G__34694 = cljs.core.chunk_rest.call(null,seq__34660__$1);
var G__34695 = c__26079__auto__;
var G__34696 = cljs.core.count.call(null,c__26079__auto__);
var G__34697 = (0);
seq__34660 = G__34694;
chunk__34661 = G__34695;
count__34662 = G__34696;
i__34663 = G__34697;
continue;
} else {
var vec__34666 = cljs.core.first.call(null,seq__34660__$1);
var name = cljs.core.nth.call(null,vec__34666,(0),null);
var map__34667 = cljs.core.nth.call(null,vec__34666,(1),null);
var map__34667__$1 = ((cljs.core.seq_QMARK_.call(null,map__34667))?cljs.core.apply.call(null,cljs.core.hash_map,map__34667):map__34667);
var doc = cljs.core.get.call(null,map__34667__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34667__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34698 = cljs.core.next.call(null,seq__34660__$1);
var G__34699 = null;
var G__34700 = (0);
var G__34701 = (0);
seq__34660 = G__34698;
chunk__34661 = G__34699;
count__34662 = G__34700;
i__34663 = G__34701;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map