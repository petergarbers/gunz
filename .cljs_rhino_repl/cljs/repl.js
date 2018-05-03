// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25569){
var map__25570 = p__25569;
var map__25570__$1 = ((((!((map__25570 == null)))?((((map__25570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25570):map__25570);
var m = map__25570__$1;
var n = cljs.core.get.call(null,map__25570__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__25570__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25572_25594 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25573_25595 = null;
var count__25574_25596 = (0);
var i__25575_25597 = (0);
while(true){
if((i__25575_25597 < count__25574_25596)){
var f_25598 = cljs.core._nth.call(null,chunk__25573_25595,i__25575_25597);
cljs.core.println.call(null,"  ",f_25598);

var G__25599 = seq__25572_25594;
var G__25600 = chunk__25573_25595;
var G__25601 = count__25574_25596;
var G__25602 = (i__25575_25597 + (1));
seq__25572_25594 = G__25599;
chunk__25573_25595 = G__25600;
count__25574_25596 = G__25601;
i__25575_25597 = G__25602;
continue;
} else {
var temp__4657__auto___25603 = cljs.core.seq.call(null,seq__25572_25594);
if(temp__4657__auto___25603){
var seq__25572_25604__$1 = temp__4657__auto___25603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25572_25604__$1)){
var c__24378__auto___25605 = cljs.core.chunk_first.call(null,seq__25572_25604__$1);
var G__25606 = cljs.core.chunk_rest.call(null,seq__25572_25604__$1);
var G__25607 = c__24378__auto___25605;
var G__25608 = cljs.core.count.call(null,c__24378__auto___25605);
var G__25609 = (0);
seq__25572_25594 = G__25606;
chunk__25573_25595 = G__25607;
count__25574_25596 = G__25608;
i__25575_25597 = G__25609;
continue;
} else {
var f_25610 = cljs.core.first.call(null,seq__25572_25604__$1);
cljs.core.println.call(null,"  ",f_25610);

var G__25611 = cljs.core.next.call(null,seq__25572_25604__$1);
var G__25612 = null;
var G__25613 = (0);
var G__25614 = (0);
seq__25572_25594 = G__25611;
chunk__25573_25595 = G__25612;
count__25574_25596 = G__25613;
i__25575_25597 = G__25614;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25615 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__23539__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__23539__auto__)){
return or__23539__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25615);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25615)))?cljs.core.second.call(null,arglists_25615):arglists_25615));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__25576_25616 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25577_25617 = null;
var count__25578_25618 = (0);
var i__25579_25619 = (0);
while(true){
if((i__25579_25619 < count__25578_25618)){
var vec__25580_25620 = cljs.core._nth.call(null,chunk__25577_25617,i__25579_25619);
var name_25621 = cljs.core.nth.call(null,vec__25580_25620,(0),null);
var map__25583_25622 = cljs.core.nth.call(null,vec__25580_25620,(1),null);
var map__25583_25623__$1 = ((((!((map__25583_25622 == null)))?((((map__25583_25622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25583_25622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25583_25622):map__25583_25622);
var doc_25624 = cljs.core.get.call(null,map__25583_25623__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25625 = cljs.core.get.call(null,map__25583_25623__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25621);

cljs.core.println.call(null," ",arglists_25625);

if(cljs.core.truth_(doc_25624)){
cljs.core.println.call(null," ",doc_25624);
} else {
}

var G__25626 = seq__25576_25616;
var G__25627 = chunk__25577_25617;
var G__25628 = count__25578_25618;
var G__25629 = (i__25579_25619 + (1));
seq__25576_25616 = G__25626;
chunk__25577_25617 = G__25627;
count__25578_25618 = G__25628;
i__25579_25619 = G__25629;
continue;
} else {
var temp__4657__auto___25630 = cljs.core.seq.call(null,seq__25576_25616);
if(temp__4657__auto___25630){
var seq__25576_25631__$1 = temp__4657__auto___25630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25576_25631__$1)){
var c__24378__auto___25632 = cljs.core.chunk_first.call(null,seq__25576_25631__$1);
var G__25633 = cljs.core.chunk_rest.call(null,seq__25576_25631__$1);
var G__25634 = c__24378__auto___25632;
var G__25635 = cljs.core.count.call(null,c__24378__auto___25632);
var G__25636 = (0);
seq__25576_25616 = G__25633;
chunk__25577_25617 = G__25634;
count__25578_25618 = G__25635;
i__25579_25619 = G__25636;
continue;
} else {
var vec__25585_25637 = cljs.core.first.call(null,seq__25576_25631__$1);
var name_25638 = cljs.core.nth.call(null,vec__25585_25637,(0),null);
var map__25588_25639 = cljs.core.nth.call(null,vec__25585_25637,(1),null);
var map__25588_25640__$1 = ((((!((map__25588_25639 == null)))?((((map__25588_25639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25588_25639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25588_25639):map__25588_25639);
var doc_25641 = cljs.core.get.call(null,map__25588_25640__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25642 = cljs.core.get.call(null,map__25588_25640__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25638);

cljs.core.println.call(null," ",arglists_25642);

if(cljs.core.truth_(doc_25641)){
cljs.core.println.call(null," ",doc_25641);
} else {
}

var G__25643 = cljs.core.next.call(null,seq__25576_25631__$1);
var G__25644 = null;
var G__25645 = (0);
var G__25646 = (0);
seq__25576_25616 = G__25643;
chunk__25577_25617 = G__25644;
count__25578_25618 = G__25645;
i__25579_25619 = G__25646;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__25590 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25591 = null;
var count__25592 = (0);
var i__25593 = (0);
while(true){
if((i__25593 < count__25592)){
var role = cljs.core._nth.call(null,chunk__25591,i__25593);
var temp__4657__auto___25647__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___25647__$1)){
var spec_25648 = temp__4657__auto___25647__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25648));
} else {
}

var G__25649 = seq__25590;
var G__25650 = chunk__25591;
var G__25651 = count__25592;
var G__25652 = (i__25593 + (1));
seq__25590 = G__25649;
chunk__25591 = G__25650;
count__25592 = G__25651;
i__25593 = G__25652;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__25590);
if(temp__4657__auto____$1){
var seq__25590__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25590__$1)){
var c__24378__auto__ = cljs.core.chunk_first.call(null,seq__25590__$1);
var G__25653 = cljs.core.chunk_rest.call(null,seq__25590__$1);
var G__25654 = c__24378__auto__;
var G__25655 = cljs.core.count.call(null,c__24378__auto__);
var G__25656 = (0);
seq__25590 = G__25653;
chunk__25591 = G__25654;
count__25592 = G__25655;
i__25593 = G__25656;
continue;
} else {
var role = cljs.core.first.call(null,seq__25590__$1);
var temp__4657__auto___25657__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___25657__$2)){
var spec_25658 = temp__4657__auto___25657__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25658));
} else {
}

var G__25659 = cljs.core.next.call(null,seq__25590__$1);
var G__25660 = null;
var G__25661 = (0);
var G__25662 = (0);
seq__25590 = G__25659;
chunk__25591 = G__25660;
count__25592 = G__25661;
i__25593 = G__25662;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
