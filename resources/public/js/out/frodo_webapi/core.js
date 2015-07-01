// Compiled by ClojureScript 0.0-3308 {}
goog.provide('frodo_webapi.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
frodo_webapi.core.navbar = (function frodo_webapi$core$navbar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-inverse.navbar-fixed-top","div.navbar.navbar-inverse.navbar-fixed-top",-279800444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"myapp"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",-1723910318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"home","home",-74557309),reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"about","about",1423892543),reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"About"], null)], null)], null)], null)], null)], null);
});
frodo_webapi.core.about_page = (function frodo_webapi$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"this is the story of frodo-webapi... work in progress"], null);
});
frodo_webapi.core.home_page = (function frodo_webapi$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to frodo-webapi"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Time to start building your site!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary.btn-lg","a.btn.btn-primary.btn-lg",-1886308563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://luminusweb.net"], null),"Learn more \u00BB"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to ClojureScript"], null)], null)], null),(function (){var temp__4425__auto__ = reagent.session.get.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502));
if(cljs.core.truth_(temp__4425__auto__)){
var docs = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markdown.core.md__GT_html.call(null,docs)], null)], null)], null)], null)], null);
} else {
return null;
}
})()], null);
});
frodo_webapi.core.pages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return frodo_webapi.core.home_page;},new cljs.core.Symbol("frodo-webapi.core","home-page","frodo-webapi.core/home-page",699654993,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frodo-webapi.core","frodo-webapi.core",1382657018,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src-cljs/frodo_webapi/core.cljs",16,1,26,26,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(frodo_webapi.core.home_page)?frodo_webapi.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return frodo_webapi.core.about_page;},new cljs.core.Symbol("frodo-webapi.core","about-page","frodo-webapi.core/about-page",1560649921,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frodo-webapi.core","frodo-webapi.core",1382657018,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src-cljs/frodo_webapi/core.cljs",17,1,23,23,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(frodo_webapi.core.about_page)?frodo_webapi.core.about_page.cljs$lang$test:null)]))], null);
frodo_webapi.core.page = (function frodo_webapi$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frodo_webapi.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__28076__auto___28168 = (function (params__28077__auto__){
if(cljs.core.map_QMARK_.call(null,params__28077__auto__)){
var map__28166 = params__28077__auto__;
var map__28166__$1 = ((cljs.core.seq_QMARK_.call(null,map__28166))?cljs.core.apply.call(null,cljs.core.hash_map,map__28166):map__28166);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28077__auto__)){
var vec__28167 = params__28077__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__28076__auto___28168);

var action__28076__auto___28171 = (function (params__28077__auto__){
if(cljs.core.map_QMARK_.call(null,params__28077__auto__)){
var map__28169 = params__28077__auto__;
var map__28169__$1 = ((cljs.core.seq_QMARK_.call(null,map__28169))?cljs.core.apply.call(null,cljs.core.hash_map,map__28169):map__28169);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28077__auto__)){
var vec__28170 = params__28077__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__28076__auto___28171);

frodo_webapi.core.hook_browser_navigation_BANG_ = (function frodo_webapi$core$hook_browser_navigation_BANG_(){
var G__28173 = (new goog.History());
goog.events.listen(G__28173,goog.history.EventType.NAVIGATE,((function (G__28173){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__28173))
);

G__28173.setEnabled(true);

return G__28173;
});
frodo_webapi.core.fetch_docs_BANG_ = (function frodo_webapi$core$fetch_docs_BANG_(){
return ajax.core.GET.call(null,"/docs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__28174_SHARP_){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502),p1__28174_SHARP_);
})], null));
});
frodo_webapi.core.mount_components = (function frodo_webapi$core$mount_components(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return frodo_webapi.core.navbar;},new cljs.core.Symbol("frodo-webapi.core","navbar","frodo-webapi.core/navbar",-485089976,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frodo-webapi.core","frodo-webapi.core",1382657018,null),new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),"src-cljs/frodo_webapi/core.cljs",13,1,11,11,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(frodo_webapi.core.navbar)?frodo_webapi.core.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return frodo_webapi.core.page;},new cljs.core.Symbol("frodo-webapi.core","page","frodo-webapi.core/page",2030712700,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frodo-webapi.core","frodo-webapi.core",1382657018,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src-cljs/frodo_webapi/core.cljs",11,1,45,45,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(frodo_webapi.core.page)?frodo_webapi.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
frodo_webapi.core.init_BANG_ = (function frodo_webapi$core$init_BANG_(){
frodo_webapi.core.fetch_docs_BANG_.call(null);

frodo_webapi.core.hook_browser_navigation_BANG_.call(null);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));

return frodo_webapi.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map