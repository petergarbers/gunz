// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__24164__auto__,writer__24165__auto__,opt__24166__auto__){
return cljs.core._write.call(null,writer__24165__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26241 = arguments.length;
var i__24711__auto___26242 = (0);
while(true){
if((i__24711__auto___26242 < len__24710__auto___26241)){
args__24717__auto__.push((arguments[i__24711__auto___26242]));

var G__26243 = (i__24711__auto___26242 + (1));
i__24711__auto___26242 = G__26243;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq26240){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26240));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26245 = arguments.length;
var i__24711__auto___26246 = (0);
while(true){
if((i__24711__auto___26246 < len__24710__auto___26245)){
args__24717__auto__.push((arguments[i__24711__auto___26246]));

var G__26247 = (i__24711__auto___26246 + (1));
i__24711__auto___26246 = G__26247;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq26244){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26244));
});

var g_QMARK__26248 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_26249 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__26248){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__26248))
,null));
var mkg_26250 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__26248,g_26249){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__26248,g_26249))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__26248,g_26249,mkg_26250){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__26248).call(null,x);
});})(g_QMARK__26248,g_26249,mkg_26250))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__26248,g_26249,mkg_26250){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_26250).call(null,gfn);
});})(g_QMARK__26248,g_26249,mkg_26250))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__26248,g_26249,mkg_26250){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_26249).call(null,generator);
});})(g_QMARK__26248,g_26249,mkg_26250))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__24803__auto___26270 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__24803__auto___26270){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26271 = arguments.length;
var i__24711__auto___26272 = (0);
while(true){
if((i__24711__auto___26272 < len__24710__auto___26271)){
args__24717__auto__.push((arguments[i__24711__auto___26272]));

var G__26273 = (i__24711__auto___26272 + (1));
i__24711__auto___26272 = G__26273;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26270))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26270){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26270),args);
});})(g__24803__auto___26270))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__24803__auto___26270){
return (function (seq26251){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26251));
});})(g__24803__auto___26270))
;


var g__24803__auto___26274 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__24803__auto___26274){
return (function cljs$spec$gen$alpha$list(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26275 = arguments.length;
var i__24711__auto___26276 = (0);
while(true){
if((i__24711__auto___26276 < len__24710__auto___26275)){
args__24717__auto__.push((arguments[i__24711__auto___26276]));

var G__26277 = (i__24711__auto___26276 + (1));
i__24711__auto___26276 = G__26277;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26274))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26274){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26274),args);
});})(g__24803__auto___26274))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__24803__auto___26274){
return (function (seq26252){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26252));
});})(g__24803__auto___26274))
;


var g__24803__auto___26278 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__24803__auto___26278){
return (function cljs$spec$gen$alpha$map(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26279 = arguments.length;
var i__24711__auto___26280 = (0);
while(true){
if((i__24711__auto___26280 < len__24710__auto___26279)){
args__24717__auto__.push((arguments[i__24711__auto___26280]));

var G__26281 = (i__24711__auto___26280 + (1));
i__24711__auto___26280 = G__26281;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26278))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26278){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26278),args);
});})(g__24803__auto___26278))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__24803__auto___26278){
return (function (seq26253){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26253));
});})(g__24803__auto___26278))
;


var g__24803__auto___26282 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__24803__auto___26282){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26283 = arguments.length;
var i__24711__auto___26284 = (0);
while(true){
if((i__24711__auto___26284 < len__24710__auto___26283)){
args__24717__auto__.push((arguments[i__24711__auto___26284]));

var G__26285 = (i__24711__auto___26284 + (1));
i__24711__auto___26284 = G__26285;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26282))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26282){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26282),args);
});})(g__24803__auto___26282))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__24803__auto___26282){
return (function (seq26254){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26254));
});})(g__24803__auto___26282))
;


var g__24803__auto___26286 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__24803__auto___26286){
return (function cljs$spec$gen$alpha$set(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26287 = arguments.length;
var i__24711__auto___26288 = (0);
while(true){
if((i__24711__auto___26288 < len__24710__auto___26287)){
args__24717__auto__.push((arguments[i__24711__auto___26288]));

var G__26289 = (i__24711__auto___26288 + (1));
i__24711__auto___26288 = G__26289;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26286))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26286){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26286),args);
});})(g__24803__auto___26286))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__24803__auto___26286){
return (function (seq26255){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26255));
});})(g__24803__auto___26286))
;


var g__24803__auto___26290 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__24803__auto___26290){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26291 = arguments.length;
var i__24711__auto___26292 = (0);
while(true){
if((i__24711__auto___26292 < len__24710__auto___26291)){
args__24717__auto__.push((arguments[i__24711__auto___26292]));

var G__26293 = (i__24711__auto___26292 + (1));
i__24711__auto___26292 = G__26293;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26290))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26290){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26290),args);
});})(g__24803__auto___26290))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__24803__auto___26290){
return (function (seq26256){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26256));
});})(g__24803__auto___26290))
;


var g__24803__auto___26294 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__24803__auto___26294){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26295 = arguments.length;
var i__24711__auto___26296 = (0);
while(true){
if((i__24711__auto___26296 < len__24710__auto___26295)){
args__24717__auto__.push((arguments[i__24711__auto___26296]));

var G__26297 = (i__24711__auto___26296 + (1));
i__24711__auto___26296 = G__26297;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26294))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26294){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26294),args);
});})(g__24803__auto___26294))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__24803__auto___26294){
return (function (seq26257){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26257));
});})(g__24803__auto___26294))
;


var g__24803__auto___26298 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__24803__auto___26298){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26299 = arguments.length;
var i__24711__auto___26300 = (0);
while(true){
if((i__24711__auto___26300 < len__24710__auto___26299)){
args__24717__auto__.push((arguments[i__24711__auto___26300]));

var G__26301 = (i__24711__auto___26300 + (1));
i__24711__auto___26300 = G__26301;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26298))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26298){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26298),args);
});})(g__24803__auto___26298))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__24803__auto___26298){
return (function (seq26258){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26258));
});})(g__24803__auto___26298))
;


var g__24803__auto___26302 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__24803__auto___26302){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26303 = arguments.length;
var i__24711__auto___26304 = (0);
while(true){
if((i__24711__auto___26304 < len__24710__auto___26303)){
args__24717__auto__.push((arguments[i__24711__auto___26304]));

var G__26305 = (i__24711__auto___26304 + (1));
i__24711__auto___26304 = G__26305;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26302))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26302){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26302),args);
});})(g__24803__auto___26302))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__24803__auto___26302){
return (function (seq26259){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26259));
});})(g__24803__auto___26302))
;


var g__24803__auto___26306 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__24803__auto___26306){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26307 = arguments.length;
var i__24711__auto___26308 = (0);
while(true){
if((i__24711__auto___26308 < len__24710__auto___26307)){
args__24717__auto__.push((arguments[i__24711__auto___26308]));

var G__26309 = (i__24711__auto___26308 + (1));
i__24711__auto___26308 = G__26309;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26306))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26306){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26306),args);
});})(g__24803__auto___26306))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__24803__auto___26306){
return (function (seq26260){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26260));
});})(g__24803__auto___26306))
;


var g__24803__auto___26310 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__24803__auto___26310){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26311 = arguments.length;
var i__24711__auto___26312 = (0);
while(true){
if((i__24711__auto___26312 < len__24710__auto___26311)){
args__24717__auto__.push((arguments[i__24711__auto___26312]));

var G__26313 = (i__24711__auto___26312 + (1));
i__24711__auto___26312 = G__26313;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26310))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26310){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26310),args);
});})(g__24803__auto___26310))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__24803__auto___26310){
return (function (seq26261){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26261));
});})(g__24803__auto___26310))
;


var g__24803__auto___26314 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__24803__auto___26314){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26315 = arguments.length;
var i__24711__auto___26316 = (0);
while(true){
if((i__24711__auto___26316 < len__24710__auto___26315)){
args__24717__auto__.push((arguments[i__24711__auto___26316]));

var G__26317 = (i__24711__auto___26316 + (1));
i__24711__auto___26316 = G__26317;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26314))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26314){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26314),args);
});})(g__24803__auto___26314))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__24803__auto___26314){
return (function (seq26262){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26262));
});})(g__24803__auto___26314))
;


var g__24803__auto___26318 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__24803__auto___26318){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26319 = arguments.length;
var i__24711__auto___26320 = (0);
while(true){
if((i__24711__auto___26320 < len__24710__auto___26319)){
args__24717__auto__.push((arguments[i__24711__auto___26320]));

var G__26321 = (i__24711__auto___26320 + (1));
i__24711__auto___26320 = G__26321;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26318))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26318){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26318),args);
});})(g__24803__auto___26318))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__24803__auto___26318){
return (function (seq26263){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26263));
});})(g__24803__auto___26318))
;


var g__24803__auto___26322 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__24803__auto___26322){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26323 = arguments.length;
var i__24711__auto___26324 = (0);
while(true){
if((i__24711__auto___26324 < len__24710__auto___26323)){
args__24717__auto__.push((arguments[i__24711__auto___26324]));

var G__26325 = (i__24711__auto___26324 + (1));
i__24711__auto___26324 = G__26325;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26322))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26322){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26322),args);
});})(g__24803__auto___26322))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__24803__auto___26322){
return (function (seq26264){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26264));
});})(g__24803__auto___26322))
;


var g__24803__auto___26326 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__24803__auto___26326){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26327 = arguments.length;
var i__24711__auto___26328 = (0);
while(true){
if((i__24711__auto___26328 < len__24710__auto___26327)){
args__24717__auto__.push((arguments[i__24711__auto___26328]));

var G__26329 = (i__24711__auto___26328 + (1));
i__24711__auto___26328 = G__26329;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26326))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26326){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26326),args);
});})(g__24803__auto___26326))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__24803__auto___26326){
return (function (seq26265){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26265));
});})(g__24803__auto___26326))
;


var g__24803__auto___26330 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__24803__auto___26330){
return (function cljs$spec$gen$alpha$return(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26331 = arguments.length;
var i__24711__auto___26332 = (0);
while(true){
if((i__24711__auto___26332 < len__24710__auto___26331)){
args__24717__auto__.push((arguments[i__24711__auto___26332]));

var G__26333 = (i__24711__auto___26332 + (1));
i__24711__auto___26332 = G__26333;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26330))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26330){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26330),args);
});})(g__24803__auto___26330))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__24803__auto___26330){
return (function (seq26266){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26266));
});})(g__24803__auto___26330))
;


var g__24803__auto___26334 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__24803__auto___26334){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26335 = arguments.length;
var i__24711__auto___26336 = (0);
while(true){
if((i__24711__auto___26336 < len__24710__auto___26335)){
args__24717__auto__.push((arguments[i__24711__auto___26336]));

var G__26337 = (i__24711__auto___26336 + (1));
i__24711__auto___26336 = G__26337;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26334))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26334){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26334),args);
});})(g__24803__auto___26334))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__24803__auto___26334){
return (function (seq26267){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26267));
});})(g__24803__auto___26334))
;


var g__24803__auto___26338 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__24803__auto___26338){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26339 = arguments.length;
var i__24711__auto___26340 = (0);
while(true){
if((i__24711__auto___26340 < len__24710__auto___26339)){
args__24717__auto__.push((arguments[i__24711__auto___26340]));

var G__26341 = (i__24711__auto___26340 + (1));
i__24711__auto___26340 = G__26341;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26338))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26338){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26338),args);
});})(g__24803__auto___26338))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__24803__auto___26338){
return (function (seq26268){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26268));
});})(g__24803__auto___26338))
;


var g__24803__auto___26342 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__24803__auto___26342){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26343 = arguments.length;
var i__24711__auto___26344 = (0);
while(true){
if((i__24711__auto___26344 < len__24710__auto___26343)){
args__24717__auto__.push((arguments[i__24711__auto___26344]));

var G__26345 = (i__24711__auto___26344 + (1));
i__24711__auto___26344 = G__26345;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24803__auto___26342))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24803__auto___26342){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24803__auto___26342),args);
});})(g__24803__auto___26342))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__24803__auto___26342){
return (function (seq26269){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26269));
});})(g__24803__auto___26342))
;

var g__24816__auto___26367 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__24816__auto___26367){
return (function cljs$spec$gen$alpha$any(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26368 = arguments.length;
var i__24711__auto___26369 = (0);
while(true){
if((i__24711__auto___26369 < len__24710__auto___26368)){
args__24717__auto__.push((arguments[i__24711__auto___26369]));

var G__26370 = (i__24711__auto___26369 + (1));
i__24711__auto___26369 = G__26370;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26367))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26367){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26367);
});})(g__24816__auto___26367))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__24816__auto___26367){
return (function (seq26346){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26346));
});})(g__24816__auto___26367))
;


var g__24816__auto___26371 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__24816__auto___26371){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26372 = arguments.length;
var i__24711__auto___26373 = (0);
while(true){
if((i__24711__auto___26373 < len__24710__auto___26372)){
args__24717__auto__.push((arguments[i__24711__auto___26373]));

var G__26374 = (i__24711__auto___26373 + (1));
i__24711__auto___26373 = G__26374;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26371))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26371){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26371);
});})(g__24816__auto___26371))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__24816__auto___26371){
return (function (seq26347){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26347));
});})(g__24816__auto___26371))
;


var g__24816__auto___26375 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__24816__auto___26375){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26376 = arguments.length;
var i__24711__auto___26377 = (0);
while(true){
if((i__24711__auto___26377 < len__24710__auto___26376)){
args__24717__auto__.push((arguments[i__24711__auto___26377]));

var G__26378 = (i__24711__auto___26377 + (1));
i__24711__auto___26377 = G__26378;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26375))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26375){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26375);
});})(g__24816__auto___26375))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__24816__auto___26375){
return (function (seq26348){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26348));
});})(g__24816__auto___26375))
;


var g__24816__auto___26379 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__24816__auto___26379){
return (function cljs$spec$gen$alpha$char(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26380 = arguments.length;
var i__24711__auto___26381 = (0);
while(true){
if((i__24711__auto___26381 < len__24710__auto___26380)){
args__24717__auto__.push((arguments[i__24711__auto___26381]));

var G__26382 = (i__24711__auto___26381 + (1));
i__24711__auto___26381 = G__26382;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26379))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26379){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26379);
});})(g__24816__auto___26379))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__24816__auto___26379){
return (function (seq26349){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26349));
});})(g__24816__auto___26379))
;


var g__24816__auto___26383 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__24816__auto___26383){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26384 = arguments.length;
var i__24711__auto___26385 = (0);
while(true){
if((i__24711__auto___26385 < len__24710__auto___26384)){
args__24717__auto__.push((arguments[i__24711__auto___26385]));

var G__26386 = (i__24711__auto___26385 + (1));
i__24711__auto___26385 = G__26386;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26383))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26383){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26383);
});})(g__24816__auto___26383))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__24816__auto___26383){
return (function (seq26350){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26350));
});})(g__24816__auto___26383))
;


var g__24816__auto___26387 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__24816__auto___26387){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26388 = arguments.length;
var i__24711__auto___26389 = (0);
while(true){
if((i__24711__auto___26389 < len__24710__auto___26388)){
args__24717__auto__.push((arguments[i__24711__auto___26389]));

var G__26390 = (i__24711__auto___26389 + (1));
i__24711__auto___26389 = G__26390;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26387))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26387){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26387);
});})(g__24816__auto___26387))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__24816__auto___26387){
return (function (seq26351){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26351));
});})(g__24816__auto___26387))
;


var g__24816__auto___26391 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__24816__auto___26391){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26392 = arguments.length;
var i__24711__auto___26393 = (0);
while(true){
if((i__24711__auto___26393 < len__24710__auto___26392)){
args__24717__auto__.push((arguments[i__24711__auto___26393]));

var G__26394 = (i__24711__auto___26393 + (1));
i__24711__auto___26393 = G__26394;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26391))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26391){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26391);
});})(g__24816__auto___26391))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__24816__auto___26391){
return (function (seq26352){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26352));
});})(g__24816__auto___26391))
;


var g__24816__auto___26395 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__24816__auto___26395){
return (function cljs$spec$gen$alpha$double(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26396 = arguments.length;
var i__24711__auto___26397 = (0);
while(true){
if((i__24711__auto___26397 < len__24710__auto___26396)){
args__24717__auto__.push((arguments[i__24711__auto___26397]));

var G__26398 = (i__24711__auto___26397 + (1));
i__24711__auto___26397 = G__26398;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26395))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26395){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26395);
});})(g__24816__auto___26395))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__24816__auto___26395){
return (function (seq26353){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26353));
});})(g__24816__auto___26395))
;


var g__24816__auto___26399 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__24816__auto___26399){
return (function cljs$spec$gen$alpha$int(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26400 = arguments.length;
var i__24711__auto___26401 = (0);
while(true){
if((i__24711__auto___26401 < len__24710__auto___26400)){
args__24717__auto__.push((arguments[i__24711__auto___26401]));

var G__26402 = (i__24711__auto___26401 + (1));
i__24711__auto___26401 = G__26402;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26399))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26399){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26399);
});})(g__24816__auto___26399))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__24816__auto___26399){
return (function (seq26354){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26354));
});})(g__24816__auto___26399))
;


var g__24816__auto___26403 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__24816__auto___26403){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26404 = arguments.length;
var i__24711__auto___26405 = (0);
while(true){
if((i__24711__auto___26405 < len__24710__auto___26404)){
args__24717__auto__.push((arguments[i__24711__auto___26405]));

var G__26406 = (i__24711__auto___26405 + (1));
i__24711__auto___26405 = G__26406;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26403))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26403){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26403);
});})(g__24816__auto___26403))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__24816__auto___26403){
return (function (seq26355){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26355));
});})(g__24816__auto___26403))
;


var g__24816__auto___26407 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__24816__auto___26407){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26408 = arguments.length;
var i__24711__auto___26409 = (0);
while(true){
if((i__24711__auto___26409 < len__24710__auto___26408)){
args__24717__auto__.push((arguments[i__24711__auto___26409]));

var G__26410 = (i__24711__auto___26409 + (1));
i__24711__auto___26409 = G__26410;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26407))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26407){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26407);
});})(g__24816__auto___26407))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__24816__auto___26407){
return (function (seq26356){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26356));
});})(g__24816__auto___26407))
;


var g__24816__auto___26411 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__24816__auto___26411){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26412 = arguments.length;
var i__24711__auto___26413 = (0);
while(true){
if((i__24711__auto___26413 < len__24710__auto___26412)){
args__24717__auto__.push((arguments[i__24711__auto___26413]));

var G__26414 = (i__24711__auto___26413 + (1));
i__24711__auto___26413 = G__26414;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26411))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26411){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26411);
});})(g__24816__auto___26411))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__24816__auto___26411){
return (function (seq26357){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26357));
});})(g__24816__auto___26411))
;


var g__24816__auto___26415 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__24816__auto___26415){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26416 = arguments.length;
var i__24711__auto___26417 = (0);
while(true){
if((i__24711__auto___26417 < len__24710__auto___26416)){
args__24717__auto__.push((arguments[i__24711__auto___26417]));

var G__26418 = (i__24711__auto___26417 + (1));
i__24711__auto___26417 = G__26418;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26415))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26415){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26415);
});})(g__24816__auto___26415))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__24816__auto___26415){
return (function (seq26358){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26358));
});})(g__24816__auto___26415))
;


var g__24816__auto___26419 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__24816__auto___26419){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26420 = arguments.length;
var i__24711__auto___26421 = (0);
while(true){
if((i__24711__auto___26421 < len__24710__auto___26420)){
args__24717__auto__.push((arguments[i__24711__auto___26421]));

var G__26422 = (i__24711__auto___26421 + (1));
i__24711__auto___26421 = G__26422;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26419))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26419){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26419);
});})(g__24816__auto___26419))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__24816__auto___26419){
return (function (seq26359){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26359));
});})(g__24816__auto___26419))
;


var g__24816__auto___26423 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__24816__auto___26423){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26424 = arguments.length;
var i__24711__auto___26425 = (0);
while(true){
if((i__24711__auto___26425 < len__24710__auto___26424)){
args__24717__auto__.push((arguments[i__24711__auto___26425]));

var G__26426 = (i__24711__auto___26425 + (1));
i__24711__auto___26425 = G__26426;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26423))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26423){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26423);
});})(g__24816__auto___26423))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__24816__auto___26423){
return (function (seq26360){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26360));
});})(g__24816__auto___26423))
;


var g__24816__auto___26427 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__24816__auto___26427){
return (function cljs$spec$gen$alpha$string(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26428 = arguments.length;
var i__24711__auto___26429 = (0);
while(true){
if((i__24711__auto___26429 < len__24710__auto___26428)){
args__24717__auto__.push((arguments[i__24711__auto___26429]));

var G__26430 = (i__24711__auto___26429 + (1));
i__24711__auto___26429 = G__26430;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26427))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26427){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26427);
});})(g__24816__auto___26427))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__24816__auto___26427){
return (function (seq26361){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26361));
});})(g__24816__auto___26427))
;


var g__24816__auto___26431 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__24816__auto___26431){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26432 = arguments.length;
var i__24711__auto___26433 = (0);
while(true){
if((i__24711__auto___26433 < len__24710__auto___26432)){
args__24717__auto__.push((arguments[i__24711__auto___26433]));

var G__26434 = (i__24711__auto___26433 + (1));
i__24711__auto___26433 = G__26434;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26431))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26431){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26431);
});})(g__24816__auto___26431))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__24816__auto___26431){
return (function (seq26362){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26362));
});})(g__24816__auto___26431))
;


var g__24816__auto___26435 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__24816__auto___26435){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26436 = arguments.length;
var i__24711__auto___26437 = (0);
while(true){
if((i__24711__auto___26437 < len__24710__auto___26436)){
args__24717__auto__.push((arguments[i__24711__auto___26437]));

var G__26438 = (i__24711__auto___26437 + (1));
i__24711__auto___26437 = G__26438;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26435))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26435){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26435);
});})(g__24816__auto___26435))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__24816__auto___26435){
return (function (seq26363){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26363));
});})(g__24816__auto___26435))
;


var g__24816__auto___26439 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__24816__auto___26439){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26440 = arguments.length;
var i__24711__auto___26441 = (0);
while(true){
if((i__24711__auto___26441 < len__24710__auto___26440)){
args__24717__auto__.push((arguments[i__24711__auto___26441]));

var G__26442 = (i__24711__auto___26441 + (1));
i__24711__auto___26441 = G__26442;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26439))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26439){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26439);
});})(g__24816__auto___26439))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__24816__auto___26439){
return (function (seq26364){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26364));
});})(g__24816__auto___26439))
;


var g__24816__auto___26443 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__24816__auto___26443){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26444 = arguments.length;
var i__24711__auto___26445 = (0);
while(true){
if((i__24711__auto___26445 < len__24710__auto___26444)){
args__24717__auto__.push((arguments[i__24711__auto___26445]));

var G__26446 = (i__24711__auto___26445 + (1));
i__24711__auto___26445 = G__26446;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26443))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26443){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26443);
});})(g__24816__auto___26443))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__24816__auto___26443){
return (function (seq26365){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26365));
});})(g__24816__auto___26443))
;


var g__24816__auto___26447 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__24816__auto___26447){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26448 = arguments.length;
var i__24711__auto___26449 = (0);
while(true){
if((i__24711__auto___26449 < len__24710__auto___26448)){
args__24717__auto__.push((arguments[i__24711__auto___26449]));

var G__26450 = (i__24711__auto___26449 + (1));
i__24711__auto___26449 = G__26450;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});})(g__24816__auto___26447))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24816__auto___26447){
return (function (args){
return cljs.core.deref.call(null,g__24816__auto___26447);
});})(g__24816__auto___26447))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__24816__auto___26447){
return (function (seq26366){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26366));
});})(g__24816__auto___26447))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__24717__auto__ = [];
var len__24710__auto___26453 = arguments.length;
var i__24711__auto___26454 = (0);
while(true){
if((i__24711__auto___26454 < len__24710__auto___26453)){
args__24717__auto__.push((arguments[i__24711__auto___26454]));

var G__26455 = (i__24711__auto___26454 + (1));
i__24711__auto___26454 = G__26455;
continue;
} else {
}
break;
}

var argseq__24718__auto__ = ((((0) < args__24717__auto__.length))?(new cljs.core.IndexedSeq(args__24717__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__24718__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__26451_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__26451_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq26452){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26452));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__26456_SHARP_){
return (new Date(p1__26456_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
