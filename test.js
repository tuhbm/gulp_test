!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = "length" in a && a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (_.isFunction(b))return _.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return _.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ha.test(b))return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function (a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = _.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
            } catch (e) {
            }
            sa.set(a, b, c)
        } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {
        }
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++)ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; d > c; c++)_.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z, c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a)return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)if (b = Xa[e] + c, b in a)return b;
        return d
    }

    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
                 g = 0; 4 > f; f += 2)"margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ra(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e))return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0,
                 h = a.length; h > g; g++)d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function () {
            Ya = void 0
        }), Ya = _.now()
    }

    function E(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0,
                 g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xa(a), p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], $a.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d])continue;
                o = !0
            }
            m[d] = p && p[d] || _.style(a, d)
        } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function () {
                _(a).hide()
            }), l.done(function () {
                var b;
                ra.remove(a, "fxshow");
                for (b in m)_.style(a, b, m[b])
            });
            for (d in m)g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0, g = bb.length, h = _.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d,
                     g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: _.extend({}, b),
            opts: _.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Ya || D(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)if (d = bb[f].call(j, a, k, j.opts))return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c))for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }

        var f = {}, g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents,
                 i = a.dataTypes; "*" === i[0];)i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)for (e in h)if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function (b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== _.type(b)) d(a, b); else for (e in b)O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty,
        Y = {}, Z = a.document, $ = "2.1.4", _ = function (a, b) {
            return new _.fn.init(a, b)
        }, aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ba = /^-ms-/, ca = /-([\da-z])/gi, da = function (a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $, constructor: _, selector: "", length: 0, toArray: function () {
            return R.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        }, pushStack: function (a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return _.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(_.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(R.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: T, sort: Q.sort, splice: Q.splice
    }, _.extend = _.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === _.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(ba, "ms-").replace(ca, da)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)for (; g > f && (e = b.apply(a[f], d), e !== !1); f++); else for (f in a)if (e = b.apply(a[f], d), e === !1)break
            } else if (h)for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++); else for (f in a)if (e = b.call(a[f], f, a[f]), e === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(aa, "")
        }, makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        }, inArray: function (a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)for (; g > f; f++)e = b(a[f], f, d), null != e && i.push(e); else for (f in a)e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        }, now: Date.now, support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode)return c;
                        if (f.id === g)return c.push(f), c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)return c.push(f), c
                } else {
                    if (e[2])return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName)return $.apply(c, b.getElementsByClassName(g)), c
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;)j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p)try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {
                    } finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }

            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;)w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d)return d;
            if (c)for (; c = c.nextSibling;)if (c === b)return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function (b) {
                return b = +b, d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {
        }

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)if ((1 === b.nodeType || e) && a(b, c, g))return !0
                } else for (; b = b[d];)if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return !0
                }
            }
        }

        function o(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++)b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length,
                     j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0,
                     i = n(function (a) {
                         return a === b
                     }, g, !0), j = n(function (a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function (a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)if (c = w.relative[a[h].type]) k = [n(o(k), c)]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                }
                k.push(c)
            }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j),
                    u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++];)if (m(k, g, h)) {
                            i.push(k);
                            break
                        }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++];)m(p, r, g, h);
                    if (d) {
                        if (n > 0)for (; o--;)p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u, C = s), p
            };
            return e ? d(g) : g
        }

        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0,
            Q = 0, R = c(), S = c(), T = c(), U = function (a, b) {
                return a === b && (E = !0), 0
            }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice,
            aa = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"), oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), wa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, xa = function () {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function (a, b) {
                    Z.apply(a, _.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function (a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function (a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];)1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                    return I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function (a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)for (; b = b.parentNode;)if (b === a)return !0;
                return !1
            }, U = b ? function (a, b) {
                if (a === b)return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b)return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h)return g(a, b);
                for (c = a; c = c.parentNode;)i.unshift(c);
                for (c = b; c = c.parentNode;)j.unshift(c);
                for (; i[e] === j[e];)e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function (a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c)))try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return b(c, G, null, [a]).length > 0
        }, b.contains = function (a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function (a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function (a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];)b === a[e] && (d = c.push(e));
                for (; d--;)a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += x(a)
                } else if (3 === e || 4 === e)return a.nodeValue
            } else for (; b = a[d++];)c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, c, d) {
                    return function (e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [P, n, m];
                                    break
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;)d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function (a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function (a) {
                    var b = [], c = [], e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function (a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: d(function (a) {
                    return function (c) {
                        return b(a, c).length > 0
                    }
                }), contains: d(function (a) {
                    return a = a.replace(va, wa), function (b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }), lang: d(function (a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(), function (b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === H
                }, focus: function (a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !w.pseudos.empty(a)
                }, header: function (a) {
                    return qa.test(a.nodeName)
                }, input: function (a) {
                    return pa.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: j(function () {
                    return [0]
                }), last: j(function (a, b) {
                    return [b - 1]
                }), eq: j(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: j(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: j(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})w.pseudos[u] = h(u);
        for (u in{submit: !0, reset: !0})w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter)!(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d)break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function (a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;)f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function (a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b)return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a)return $.apply(c, d), c;
                    break
                }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function (a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext, ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ha = /^.[^:#\[\.,]*$/;
    _.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)return this.pushStack(_(a).filter(function () {
                for (b = 0; c > b; b++)if (_.contains(e[b], this))return !0
            }));
            for (b = 0; c > b; b++)_.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(d(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(d(this, a || [], !0))
        }, is: function (a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ka = _.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))for (c in b)_.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/, ma = {children: !0, contents: !0, next: !0, prev: !0};
    _.extend({
        dir: function (a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;)if (1 === a.nodeType) {
                if (e && _(a).is(c))break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function (a) {
            var b = _(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)if (_.contains(this, b[a]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [],
                     g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return _.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return _.dir(a, "parentNode", c)
        }, next: function (a) {
            return e(a, "nextSibling")
        }, prev: function (a) {
            return e(a, "previousSibling")
        }, nextAll: function (a) {
            return _.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return _.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return _.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return _.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return _.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function (a, b) {
        _.fn[a] = function (c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g, oa = {};
    _.Callbacks = function (a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function (f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        }, l = {
            add: function () {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function (b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), d ? g = i.length : b && (e = c, k(b))
                }
                return this
            }, remove: function () {
                return i && _.each(arguments, function (a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1;)i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                }), this
            }, has: function (a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
            }, empty: function () {
                return i = [], g = 0, this
            }, disable: function () {
                return i = j = b = void 0, this
            }, disabled: function () {
                return !i
            }, lock: function () {
                return j = void 0, b || l.disable(), this
            }, locked: function () {
                return !j
            }, fireWith: function (a, b) {
                return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return l
    }, _.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return _.Deferred(function (c) {
                            _.each(b, function (b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? _.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, _.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pa;
    _.fn.ready = function (a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? _.readyWait++ : _.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function (b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c)_.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(_(a), c)
            })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function (a) {
            if (!h.accepts(a))return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (_.isEmptyObject(f)) _.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                for (; c--;)delete g[d[c]]
            }
        }, hasData: function (a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var ra = new h, sa = new h, ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ua = /([A-Z])/g;
    _.extend({
        hasData: function (a) {
            return sa.hasData(a) || ra.hasData(a)
        }, data: function (a, b, c) {
            return sa.access(a, b, c)
        }, removeData: function (a, b) {
            sa.remove(a, b)
        }, _data: function (a, b, c) {
            return ra.access(a, b, c)
        }, _removeData: function (a, b) {
            ra.remove(a, b)
        }
    }), _.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                sa.set(this, a)
            }) : qa(this, function (b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c)return c;
                    if (c = sa.get(f, d), void 0 !== c)return c;
                    if (c = i(f, d, void 0), void 0 !== c)return c
                } else this.each(function () {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                sa.remove(this, a)
            })
        }
    }), _.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function () {
                _.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                    empty: _.Callbacks("once memory").add(function () {
                        ra.remove(a, [b + "queue", c])
                    })
                })
        }
    }), _.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                _.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wa = ["Top", "Right", "Bottom", "Left"],
        xa = function (a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        }, ya = /^(?:checkbox|radio)$/i;
    !function () {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/, Ba = /^(?:mouse|pointer|contextmenu)|click/, Ca = /^(?:focusinfocus|focusoutblur)$/,
        Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q)for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(na) || [""], j = b.length; j--;)h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && _.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--;)if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;)k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                } else for (n in i)_.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode)m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped();)b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (ra.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();)for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[_.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;)c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return _.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = _.extend(new _.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function (a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        _.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k; else if (!d)return this;
            return 1 === e && (f = d, d = function (a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function () {
                _.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function () {
                _.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                _.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fa = /<([\w:]+)/,
        Ga = /<|&#?\w+;/, Ha = /<(?:script|style|link)/i, Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ja = /^$|\/(?:java|ecma)script/i, Ka = /^true\/(.*)/, La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)s(f[d], g[d]);
            if (b)if (c)for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++)q(f[d], g[d]); else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0,
                     n = a.length; n > m; m++)if (e = a[m], e || 0 === e)if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e); else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;)f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))for (j = 0; e = f[j++];)Ja.test(e.type || "") && c.push(e);
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events)for (d in b.events)f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e]
                }
                delete sa.cache[c[sa.expando]]
            }
        }
    }), _.fn.extend({
        text: function (a) {
            return qa(this, function (a) {
                return void 0 === a ? _.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? _.filter(a, this) : this,
                     e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a,
                     b = 0; null != (a = this[b]); b++)1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return _.clone(this, a, b)
            })
        }, html: function (a) {
            return qa(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m))return this.each(function (c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++)g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++)g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        _.fn[a] = function (a) {
            for (var c, d = [], e = _(a), f = e.length - 1,
                     g = 0; f >= g; g++)c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {}, Pa = /^margin/, Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"), Ra = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
    !function () {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }

        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function () {
                return b(), c
            }, boxSizingReliable: function () {
                return null == d && b(), d
            }, reliableMarginRight: function () {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), _.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/, Ta = new RegExp("^(" + va + ")(.*)$", "i"),
        Ua = new RegExp("^([+-])=(" + va + ")", "i"),
        Va = {position: "absolute", visibility: "hidden", display: "block"},
        Wa = {letterSpacing: "0", fontWeight: "400"}, Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function (a, b) {
        _.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function () {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function (a, b) {
        return b ? _.swap(a, {display: "inline-block"}, v, [a, "marginRight"]) : void 0
    }), _.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        _.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {},
                         f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function (a, b) {
            return qa(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++)f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return B(this, !0)
        }, hide: function () {
            return B(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                xa(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/, _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        ab = /queueHooks$/, bb = [G], cb = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = _a.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                    g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    _.Animation = _.extend(I, {
        tweener: function (a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? bb.unshift(a) : bb.push(a)
        }
    }), _.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(xa).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function () {
                var b = I(this, _.extend({}, a), f);
                (e || ra.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = ra.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = ra.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []),
                     e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function (a, b) {
        var c = _.fn[b];
        _.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        _.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function () {
        var a, b = 0, c = _.timers;
        for (Ya = _.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0
    }, _.fx.timer = function (a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function () {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function () {
        clearInterval(Za), Za = null
    }, _.fx.speeds = {slow: 600, fast: 200, _default: 400}, _.fn.delay = function (a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function (a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(na);
            if (f && 1 === a.nodeType)for (; c = f[e++];)d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), eb = {
        set: function (a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function (a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function (a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))return this.each(function (b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(na) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                for (f = 0; e = b[f++];)d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = _.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))return this.each(function (b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(na) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                for (f = 0; e = b[f++];)for (; d.indexOf(" " + e + " ") >= 0;)d = d.replace(" " + e + " ", " ");
                g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function (c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c)for (var b, d = 0, e = _(this),
                                            f = a.match(na) || []; b = f[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0,
                     d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = _.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function (a) {
                            return null == a ? "" : a + ""
                        })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e,
                             g = f ? null : [], h = f ? e + 1 : d.length,
                             i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) {
                        if (b = _(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b),
                             g = e.length; g--;)d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function () {
        _.valHooks[this] = {
            set: function (a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        _.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jb = _.now(), kb = /\?/;
    _.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, _.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a)return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/, mb = /([?&])_=[^&]*/, nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pb = /^(?:GET|HEAD)$/, qb = /^\/\//,
        rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sb = {}, tb = {}, ub = "*/".concat("*"),
        vb = a.location.href, wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": _.parseJSON, "text xml": _.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function (a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }

            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(),
                p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!g)for (g = {}; b = nb.exec(f);)g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (l.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t)return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers)v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (k in{success: 1, error: 1, complete: 1})v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t))throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function (a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function (a, b) {
        _[b] = function (a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _._evalUrl = function (a) {
        return _.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, _.fn.extend({
        wrapAll: function (a) {
            var b;
            return _.isFunction(a) ? this.each(function (b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;)a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return _.isFunction(a) ? this.each(function (b) {
                _(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = _.isFunction(a);
            return this.each(function (c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function (a) {
        return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g, yb = /\[\]$/, zb = /\r?\n/g, Ab = /^(?:submit|button|image|reset|file)$/i,
        Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({
        serialize: function () {
            return _.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
            }).map(function (a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function (a) {
                    return {name: b.name, value: a.replace(zb, "\r\n")}
                }) : {name: b.name, value: c.replace(zb, "\r\n")}
            }).get()
        }
    }), _.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cb = 0, Db = {}, Eb = {0: 200, 1223: 204}, Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Db)Db[a]()
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function (a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Gb = [], Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function (a, b, c) {
        if ("string" != typeof a && Ib)return Ib.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        _.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function (a) {
        return _.grep(_.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f)return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");)a = a.offsetParent;
                return a || Jb
            })
        }
    }), _.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function (e) {
            return qa(this, function (b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function (a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function (a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({Height: "height", Width: "width"}, function (a, b) {
        _.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            _.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function (b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function () {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return _
    });
    var Kb = a.jQuery, Lb = a.$;
    return _.noConflict = function (b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}), !function () {
    function a(a) {
        return a && (a.ownerDocument || a.document || a).documentElement
    }

    function b(a) {
        return a && (a.ownerDocument && a.ownerDocument.defaultView || a.document && a || a.defaultView)
    }

    function c(a, b) {
        return b > a ? -1 : a > b ? 1 : a >= b ? 0 : NaN
    }

    function d(a) {
        return null === a ? NaN : +a
    }

    function e(a) {
        return !isNaN(a)
    }

    function f(a) {
        return {
            left: function (b, c, d, e) {
                for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                    var f = d + e >>> 1;
                    a(b[f], c) < 0 ? d = f + 1 : e = f
                }
                return d
            }, right: function (b, c, d, e) {
                for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                    var f = d + e >>> 1;
                    a(b[f], c) > 0 ? e = f : d = f + 1
                }
                return d
            }
        }
    }

    function g(a) {
        return a.length
    }

    function h(a) {
        for (var b = 1; a * b % 1;)b *= 10;
        return b
    }

    function i(a, b) {
        for (var c in b)Object.defineProperty(a.prototype, c, {value: b[c], enumerable: !1})
    }

    function j() {
        this._ = Object.create(null)
    }

    function k(a) {
        return (a += "") === ug || a[0] === vg ? vg + a : a
    }

    function l(a) {
        return (a += "")[0] === vg ? a.slice(1) : a
    }

    function m(a) {
        return k(a) in this._
    }

    function n(a) {
        return (a = k(a)) in this._ && delete this._[a]
    }

    function o() {
        var a = [];
        for (var b in this._)a.push(l(b));
        return a
    }

    function p() {
        var a = 0;
        for (var b in this._)++a;
        return a
    }

    function q() {
        for (var a in this._)return !1;
        return !0
    }

    function r() {
        this._ = Object.create(null)
    }

    function s(a) {
        return a
    }

    function t(a, b, c) {
        return function () {
            var d = c.apply(b, arguments);
            return d === b ? a : d
        }
    }

    function u(a, b) {
        if (b in a)return b;
        b = b.charAt(0).toUpperCase() + b.slice(1);
        for (var c = 0, d = wg.length; d > c; ++c) {
            var e = wg[c] + b;
            if (e in a)return e
        }
    }

    function v() {
    }

    function w() {
    }

    function x(a) {
        function b() {
            for (var b, d = c, e = -1, f = d.length; ++e < f;)(b = d[e].on) && b.apply(this, arguments);
            return a
        }

        var c = [], d = new j;
        return b.on = function (b, e) {
            var f, g = d.get(b);
            return arguments.length < 2 ? g && g.on : (g && (g.on = null, c = c.slice(0, f = c.indexOf(g)).concat(c.slice(f + 1)), d.remove(b)), e && c.push(d.set(b, {on: e})), a)
        }, b
    }

    function y() {
        hg.event.preventDefault()
    }

    function z() {
        for (var a, b = hg.event; a = b.sourceEvent;)b = a;
        return b
    }

    function A(a) {
        for (var b = new w, c = 0, d = arguments.length; ++c < d;)b[arguments[c]] = x(b);
        return b.of = function (c, d) {
            return function (e) {
                try {
                    var f = e.sourceEvent = hg.event;
                    e.target = a, hg.event = e, b[e.type].apply(c, d)
                } finally {
                    hg.event = f
                }
            }
        }, b
    }

    function B(a) {
        return yg(a, Cg), a
    }

    function C(a) {
        return "function" == typeof a ? a : function () {
            return zg(a, this)
        }
    }

    function D(a) {
        return "function" == typeof a ? a : function () {
            return Ag(a, this)
        }
    }

    function E(a, b) {
        function c() {
            this.removeAttribute(a)
        }

        function d() {
            this.removeAttributeNS(a.space, a.local)
        }

        function e() {
            this.setAttribute(a, b)
        }

        function f() {
            this.setAttributeNS(a.space, a.local, b)
        }

        function g() {
            var c = b.apply(this, arguments);
            null == c ? this.removeAttribute(a) : this.setAttribute(a, c)
        }

        function h() {
            var c = b.apply(this, arguments);
            null == c ? this.removeAttributeNS(a.space, a.local) : this.setAttributeNS(a.space, a.local, c)
        }

        return a = hg.ns.qualify(a), null == b ? a.local ? d : c : "function" == typeof b ? a.local ? h : g : a.local ? f : e
    }

    function F(a) {
        return a.trim().replace(/\s+/g, " ")
    }

    function G(a) {
        return new RegExp("(?:^|\\s+)" + hg.requote(a) + "(?:\\s+|$)", "g")
    }

    function H(a) {
        return (a + "").trim().split(/^|\s+/)
    }

    function I(a, b) {
        function c() {
            for (var c = -1; ++c < e;)a[c](this, b)
        }

        function d() {
            for (var c = -1, d = b.apply(this, arguments); ++c < e;)a[c](this, d)
        }

        a = H(a).map(J);
        var e = a.length;
        return "function" == typeof b ? d : c
    }

    function J(a) {
        var b = G(a);
        return function (c, d) {
            if (e = c.classList)return d ? e.add(a) : e.remove(a);
            var e = c.getAttribute("class") || "";
            d ? (b.lastIndex = 0, b.test(e) || c.setAttribute("class", F(e + " " + a))) : c.setAttribute("class", F(e.replace(b, " ")))
        }
    }

    function K(a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }

        function e() {
            this.style.setProperty(a, b, c)
        }

        function f() {
            var d = b.apply(this, arguments);
            null == d ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
        }

        return null == b ? d : "function" == typeof b ? f : e
    }

    function L(a, b) {
        function c() {
            delete this[a]
        }

        function d() {
            this[a] = b
        }

        function e() {
            var c = b.apply(this, arguments);
            null == c ? delete this[a] : this[a] = c
        }

        return null == b ? c : "function" == typeof b ? e : d
    }

    function M(a) {
        function b() {
            var b = this.ownerDocument, c = this.namespaceURI;
            return c ? b.createElementNS(c, a) : b.createElement(a)
        }

        function c() {
            return this.ownerDocument.createElementNS(a.space, a.local)
        }

        return "function" == typeof a ? a : (a = hg.ns.qualify(a)).local ? c : b
    }

    function N() {
        var a = this.parentNode;
        a && a.removeChild(this)
    }

    function O(a) {
        return {__data__: a}
    }

    function P(a) {
        return function () {
            return Bg(this, a)
        }
    }

    function Q(a) {
        return arguments.length || (a = c), function (b, c) {
            return b && c ? a(b.__data__, c.__data__) : !b - !c
        }
    }

    function R(a, b) {
        for (var c = 0, d = a.length; d > c; c++)for (var e, f = a[c], g = 0,
                                                          h = f.length; h > g; g++)(e = f[g]) && b(e, g, c);
        return a
    }

    function S(a) {
        return yg(a, Eg), a
    }

    function T(a) {
        var b, c;
        return function (d, e, f) {
            var g, h = a[f].update, i = h.length;
            for (f != c && (c = f, b = 0), e >= b && (b = e + 1); !(g = h[b]) && ++b < i;);
            return g
        }
    }

    function U(a, b, c) {
        function d() {
            var b = this[g];
            b && (this.removeEventListener(a, b, b.$), delete this[g])
        }

        function e() {
            var e = i(b, jg(arguments));
            d.call(this), this.addEventListener(a, this[g] = e, e.$ = c), e._ = b
        }

        function f() {
            var b, c = new RegExp("^__on([^.]+)" + hg.requote(a) + "$");
            for (var d in this)if (b = d.match(c)) {
                var e = this[d];
                this.removeEventListener(b[1], e, e.$), delete this[d]
            }
        }

        var g = "__on" + a, h = a.indexOf("."), i = V;
        h > 0 && (a = a.slice(0, h));
        var j = Fg.get(a);
        return j && (a = j, i = W), h ? b ? e : d : b ? v : f
    }

    function V(a, b) {
        return function (c) {
            var d = hg.event;
            hg.event = c, b[0] = this.__data__;
            try {
                a.apply(this, b)
            } finally {
                hg.event = d
            }
        }
    }

    function W(a, b) {
        var c = V(a, b);
        return function (a) {
            var b = this, d = a.relatedTarget;
            d && (d === b || 8 & d.compareDocumentPosition(b)) || c.call(b, a)
        }
    }

    function X(c) {
        var d = ".dragsuppress-" + ++Hg, e = "click" + d,
            f = hg.select(b(c)).on("touchmove" + d, y).on("dragstart" + d, y).on("selectstart" + d, y);
        if (null == Gg && (Gg = "onselectstart" in c ? !1 : u(c.style, "userSelect")), Gg) {
            var g = a(c).style, h = g[Gg];
            g[Gg] = "none"
        }
        return function (a) {
            if (f.on(d, null), Gg && (g[Gg] = h), a) {
                var b = function () {
                    f.on(e, null)
                };
                f.on(e, function () {
                    y(), b()
                }, !0), setTimeout(b, 0)
            }
        }
    }

    function Y(a, c) {
        c.changedTouches && (c = c.changedTouches[0]);
        var d = a.ownerSVGElement || a;
        if (d.createSVGPoint) {
            var e = d.createSVGPoint();
            if (0 > Ig) {
                var f = b(a);
                if (f.scrollX || f.scrollY) {
                    d = hg.select("body").append("svg").style({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        margin: 0,
                        padding: 0,
                        border: "none"
                    }, "important");
                    var g = d[0][0].getScreenCTM();
                    Ig = !(g.f || g.e), d.remove()
                }
            }
            return Ig ? (e.x = c.pageX, e.y = c.pageY) : (e.x = c.clientX, e.y = c.clientY), e = e.matrixTransform(a.getScreenCTM().inverse()), [e.x, e.y]
        }
        var h = a.getBoundingClientRect();
        return [c.clientX - h.left - a.clientLeft, c.clientY - h.top - a.clientTop]
    }

    function Z() {
        return hg.event.changedTouches[0].identifier
    }

    function $(a) {
        return a > 0 ? 1 : 0 > a ? -1 : 0
    }

    function _(a, b, c) {
        return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
    }

    function aa(a) {
        return a > 1 ? 0 : -1 > a ? Lg : Math.acos(a)
    }

    function ba(a) {
        return a > 1 ? Og : -1 > a ? -Og : Math.asin(a)
    }

    function ca(a) {
        return ((a = Math.exp(a)) - 1 / a) / 2
    }

    function da(a) {
        return ((a = Math.exp(a)) + 1 / a) / 2
    }

    function ea(a) {
        return ((a = Math.exp(2 * a)) - 1) / (a + 1)
    }

    function fa(a) {
        return (a = Math.sin(a / 2)) * a
    }

    function ga() {
    }

    function ha(a, b, c) {
        return this instanceof ha ? (this.h = +a, this.s = +b, void(this.l = +c)) : arguments.length < 2 ? a instanceof ha ? new ha(a.h, a.s, a.l) : va("" + a, wa, ha) : new ha(a, b, c)
    }

    function ia(a, b, c) {
        function d(a) {
            return a > 360 ? a -= 360 : 0 > a && (a += 360), 60 > a ? f + (g - f) * a / 60 : 180 > a ? g : 240 > a ? f + (g - f) * (240 - a) / 60 : f
        }

        function e(a) {
            return Math.round(255 * d(a))
        }

        var f, g;
        return a = isNaN(a) ? 0 : (a %= 360) < 0 ? a + 360 : a, b = isNaN(b) ? 0 : 0 > b ? 0 : b > 1 ? 1 : b, c = 0 > c ? 0 : c > 1 ? 1 : c, g = .5 >= c ? c * (1 + b) : c + b - c * b, f = 2 * c - g, new ra(e(a + 120), e(a), e(a - 120))
    }

    function ja(a, b, c) {
        return this instanceof ja ? (this.h = +a, this.c = +b, void(this.l = +c)) : arguments.length < 2 ? a instanceof ja ? new ja(a.h, a.c, a.l) : a instanceof la ? na(a.l, a.a, a.b) : na((a = xa((a = hg.rgb(a)).r, a.g, a.b)).l, a.a, a.b) : new ja(a, b, c)
    }

    function ka(a, b, c) {
        return isNaN(a) && (a = 0), isNaN(b) && (b = 0), new la(c, Math.cos(a *= Pg) * b, Math.sin(a) * b)
    }

    function la(a, b, c) {
        return this instanceof la ? (this.l = +a, this.a = +b, void(this.b = +c)) : arguments.length < 2 ? a instanceof la ? new la(a.l, a.a, a.b) : a instanceof ja ? ka(a.h, a.c, a.l) : xa((a = ra(a)).r, a.g, a.b) : new la(a, b, c)
    }

    function ma(a, b, c) {
        var d = (a + 16) / 116, e = d + b / 500, f = d - c / 200;
        return e = oa(e) * $g, d = oa(d) * _g, f = oa(f) * ah, new ra(qa(3.2404542 * e - 1.5371385 * d - .4985314 * f), qa(-.969266 * e + 1.8760108 * d + .041556 * f), qa(.0556434 * e - .2040259 * d + 1.0572252 * f))
    }

    function na(a, b, c) {
        return a > 0 ? new ja(Math.atan2(c, b) * Qg, Math.sqrt(b * b + c * c), a) : new ja(NaN, NaN, a)
    }

    function oa(a) {
        return a > .206893034 ? a * a * a : (a - 4 / 29) / 7.787037
    }

    function pa(a) {
        return a > .008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29
    }

    function qa(a) {
        return Math.round(255 * (.00304 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))
    }

    function ra(a, b, c) {
        return this instanceof ra ? (this.r = ~~a, this.g = ~~b, void(this.b = ~~c)) : arguments.length < 2 ? a instanceof ra ? new ra(a.r, a.g, a.b) : va("" + a, ra, ia) : new ra(a, b, c)
    }

    function sa(a) {
        return new ra(a >> 16, a >> 8 & 255, 255 & a)
    }

    function ta(a) {
        return sa(a) + ""
    }

    function ua(a) {
        return 16 > a ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
    }

    function va(a, b, c) {
        var d, e, f, g = 0, h = 0, i = 0;
        if (d = /([a-z]+)\((.*)\)/.exec(a = a.toLowerCase()))switch (e = d[2].split(","), d[1]) {
            case"hsl":
                return c(parseFloat(e[0]), parseFloat(e[1]) / 100, parseFloat(e[2]) / 100);
            case"rgb":
                return b(za(e[0]), za(e[1]), za(e[2]))
        }
        return (f = dh.get(a)) ? b(f.r, f.g, f.b) : (null == a || "#" !== a.charAt(0) || isNaN(f = parseInt(a.slice(1), 16)) || (4 === a.length ? (g = (3840 & f) >> 4, g = g >> 4 | g, h = 240 & f, h = h >> 4 | h, i = 15 & f, i = i << 4 | i) : 7 === a.length && (g = (16711680 & f) >> 16, h = (65280 & f) >> 8, i = 255 & f)), b(g, h, i))
    }

    function wa(a, b, c) {
        var d, e, f = Math.min(a /= 255, b /= 255, c /= 255), g = Math.max(a, b, c), h = g - f, i = (g + f) / 2;
        return h ? (e = .5 > i ? h / (g + f) : h / (2 - g - f), d = a == g ? (b - c) / h + (c > b ? 6 : 0) : b == g ? (c - a) / h + 2 : (a - b) / h + 4, d *= 60) : (d = NaN, e = i > 0 && 1 > i ? 0 : d), new ha(d, e, i)
    }

    function xa(a, b, c) {
        a = ya(a), b = ya(b), c = ya(c);
        var d = pa((.4124564 * a + .3575761 * b + .1804375 * c) / $g),
            e = pa((.2126729 * a + .7151522 * b + .072175 * c) / _g),
            f = pa((.0193339 * a + .119192 * b + .9503041 * c) / ah);
        return la(116 * e - 16, 500 * (d - e), 200 * (e - f))
    }

    function ya(a) {
        return (a /= 255) <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
    }

    function za(a) {
        var b = parseFloat(a);
        return "%" === a.charAt(a.length - 1) ? Math.round(2.55 * b) : b
    }

    function Aa(a) {
        return "function" == typeof a ? a : function () {
            return a
        }
    }

    function Ba(a) {
        return function (b, c, d) {
            return 2 === arguments.length && "function" == typeof c && (d = c, c = null), Ca(b, c, a, d)
        }
    }

    function Ca(a, b, c, d) {
        function e() {
            var a, b = i.status;
            if (!b && Ea(i) || b >= 200 && 300 > b || 304 === b) {
                try {
                    a = c.call(f, i)
                } catch (d) {
                    return void g.error.call(f, d)
                }
                g.load.call(f, a)
            } else g.error.call(f, i)
        }

        var f = {}, g = hg.dispatch("beforesend", "progress", "load", "error"), h = {}, i = new XMLHttpRequest,
            j = null;
        return !this.XDomainRequest || "withCredentials" in i || !/^(http(s)?:)?\/\//.test(a) || (i = new XDomainRequest), "onload" in i ? i.onload = i.onerror = e : i.onreadystatechange = function () {
            i.readyState > 3 && e()
        }, i.onprogress = function (a) {
            var b = hg.event;
            hg.event = a;
            try {
                g.progress.call(f, i)
            } finally {
                hg.event = b
            }
        }, f.header = function (a, b) {
            return a = (a + "").toLowerCase(), arguments.length < 2 ? h[a] : (null == b ? delete h[a] : h[a] = b + "", f)
        }, f.mimeType = function (a) {
            return arguments.length ? (b = null == a ? null : a + "", f) : b
        }, f.responseType = function (a) {
            return arguments.length ? (j = a, f) : j
        }, f.response = function (a) {
            return c = a, f
        }, ["get", "post"].forEach(function (a) {
            f[a] = function () {
                return f.send.apply(f, [a].concat(jg(arguments)))
            }
        }), f.send = function (c, d, e) {
            if (2 === arguments.length && "function" == typeof d && (e = d, d = null), i.open(c, a, !0), null == b || "accept" in h || (h.accept = b + ",*/*"), i.setRequestHeader)for (var k in h)i.setRequestHeader(k, h[k]);
            return null != b && i.overrideMimeType && i.overrideMimeType(b), null != j && (i.responseType = j), null != e && f.on("error", e).on("load", function (a) {
                e(null, a)
            }), g.beforesend.call(f, i), i.send(null == d ? null : d), f
        }, f.abort = function () {
            return i.abort(), f
        }, hg.rebind(f, g, "on"), null == d ? f : f.get(Da(d))
    }

    function Da(a) {
        return 1 === a.length ? function (b, c) {
            a(null == b ? c : null)
        } : a
    }

    function Ea(a) {
        var b = a.responseType;
        return b && "text" !== b ? a.response : a.responseText
    }

    function Fa(a, b, c) {
        var d = arguments.length;
        2 > d && (b = 0), 3 > d && (c = Date.now());
        var e = c + b, f = {c: a, t: e, n: null};
        return fh ? fh.n = f : eh = f, fh = f, gh || (hh = clearTimeout(hh), gh = 1, ih(Ga)), f
    }

    function Ga() {
        var a = Ha(), b = Ia() - a;
        b > 24 ? (isFinite(b) && (clearTimeout(hh),
            hh = setTimeout(Ga, b)), gh = 0) : (gh = 1, ih(Ga))
    }

    function Ha() {
        for (var a = Date.now(), b = eh; b;)a >= b.t && b.c(a - b.t) && (b.c = null), b = b.n;
        return a
    }

    function Ia() {
        for (var a, b = eh, c = 1 / 0; b;)b.c ? (b.t < c && (c = b.t), b = (a = b).n) : b = a ? a.n = b.n : eh = b.n;
        return fh = a, c
    }

    function Ja(a, b) {
        return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
    }

    function Ka(a, b) {
        var c = Math.pow(10, 3 * tg(8 - b));
        return {
            scale: b > 8 ? function (a) {
                return a / c
            } : function (a) {
                return a * c
            }, symbol: a
        }
    }

    function La(a) {
        var b = a.decimal, c = a.thousands, d = a.grouping, e = a.currency, f = d && c ? function (a, b) {
            for (var e = a.length, f = [], g = 0, h = d[0],
                     i = 0; e > 0 && h > 0 && (i + h + 1 > b && (h = Math.max(1, b - i)), f.push(a.substring(e -= h, e + h)), !((i += h + 1) > b));)h = d[g = (g + 1) % d.length];
            return f.reverse().join(c)
        } : s;
        return function (a) {
            var c = kh.exec(a), d = c[1] || " ", g = c[2] || ">", h = c[3] || "-", i = c[4] || "", j = c[5], k = +c[6],
                l = c[7], m = c[8], n = c[9], o = 1, p = "", q = "", r = !1, s = !0;
            switch (m && (m = +m.substring(1)), (j || "0" === d && "=" === g) && (j = d = "0", g = "="), n) {
                case"n":
                    l = !0, n = "g";
                    break;
                case"%":
                    o = 100, q = "%", n = "f";
                    break;
                case"p":
                    o = 100, q = "%", n = "r";
                    break;
                case"b":
                case"o":
                case"x":
                case"X":
                    "#" === i && (p = "0" + n.toLowerCase());
                case"c":
                    s = !1;
                case"d":
                    r = !0, m = 0;
                    break;
                case"s":
                    o = -1, n = "r"
            }
            "$" === i && (p = e[0], q = e[1]), "r" != n || m || (n = "g"), null != m && ("g" == n ? m = Math.max(1, Math.min(21, m)) : ("e" == n || "f" == n) && (m = Math.max(0, Math.min(20, m)))), n = lh.get(n) || Ma;
            var t = j && l;
            return function (a) {
                var c = q;
                if (r && a % 1)return "";
                var e = 0 > a || 0 === a && 0 > 1 / a ? (a = -a, "-") : "-" === h ? "" : h;
                if (0 > o) {
                    var i = hg.formatPrefix(a, m);
                    a = i.scale(a), c = i.symbol + q
                } else a *= o;
                a = n(a, m);
                var u, v, w = a.lastIndexOf(".");
                if (0 > w) {
                    var x = s ? a.lastIndexOf("e") : -1;
                    0 > x ? (u = a, v = "") : (u = a.substring(0, x), v = a.substring(x))
                } else u = a.substring(0, w), v = b + a.substring(w + 1);
                !j && l && (u = f(u, 1 / 0));
                var y = p.length + u.length + v.length + (t ? 0 : e.length),
                    z = k > y ? new Array(y = k - y + 1).join(d) : "";
                return t && (u = f(z + u, z.length ? k - v.length : 1 / 0)), e += p, a = u + v, ("<" === g ? e + a + z : ">" === g ? z + e + a : "^" === g ? z.substring(0, y >>= 1) + e + a + z.substring(y) : e + (t ? a : z + a)) + c
            }
        }
    }

    function Ma(a) {
        return a + ""
    }

    function Na() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Oa(a, b, c) {
        function d(b) {
            var c = a(b), d = f(c, 1);
            return d - b > b - c ? c : d
        }

        function e(c) {
            return b(c = a(new nh(c - 1)), 1), c
        }

        function f(a, c) {
            return b(a = new nh(+a), c), a
        }

        function g(a, d, f) {
            var g = e(a), h = [];
            if (f > 1)for (; d > g;)c(g) % f || h.push(new Date(+g)), b(g, 1); else for (; d > g;)h.push(new Date(+g)), b(g, 1);
            return h
        }

        function h(a, b, c) {
            try {
                nh = Na;
                var d = new Na;
                return d._ = a, g(d, b, c)
            } finally {
                nh = Date
            }
        }

        a.floor = a, a.round = d, a.ceil = e, a.offset = f, a.range = g;
        var i = a.utc = Pa(a);
        return i.floor = i, i.round = Pa(d), i.ceil = Pa(e), i.offset = Pa(f), i.range = h, a
    }

    function Pa(a) {
        return function (b, c) {
            try {
                nh = Na;
                var d = new Na;
                return d._ = b, a(d, c)._
            } finally {
                nh = Date
            }
        }
    }

    function Qa(a) {
        function b(a) {
            function b(b) {
                for (var c, e, f, g = [], h = -1,
                         i = 0; ++h < d;)37 === a.charCodeAt(h) && (g.push(a.slice(i, h)), null != (e = ph[c = a.charAt(++h)]) && (c = a.charAt(++h)), (f = C[c]) && (c = f(b, null == e ? "e" === c ? " " : "0" : e)), g.push(c), i = h + 1);
                return g.push(a.slice(i, h)), g.join("")
            }

            var d = a.length;
            return b.parse = function (b) {
                var d = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null}, e = c(d, a, b, 0);
                if (e != b.length)return null;
                "p" in d && (d.H = d.H % 12 + 12 * d.p);
                var f = null != d.Z && nh !== Na, g = new (f ? Na : nh);
                return "j" in d ? g.setFullYear(d.y, 0, d.j) : "W" in d || "U" in d ? ("w" in d || (d.w = "W" in d ? 1 : 0), g.setFullYear(d.y, 0, 1), g.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + 7 * d.W - (g.getDay() + 5) % 7 : d.w + 7 * d.U - (g.getDay() + 6) % 7)) : g.setFullYear(d.y, d.m, d.d), g.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L), f ? g._ : g
            }, b.toString = function () {
                return a
            }, b
        }

        function c(a, b, c, d) {
            for (var e, f, g, h = 0, i = b.length, j = c.length; i > h;) {
                if (d >= j)return -1;
                if (e = b.charCodeAt(h++), 37 === e) {
                    if (g = b.charAt(h++), f = D[g in ph ? b.charAt(h++) : g], !f || (d = f(a, c, d)) < 0)return -1
                } else if (e != c.charCodeAt(d++))return -1
            }
            return d
        }

        function d(a, b, c) {
            w.lastIndex = 0;
            var d = w.exec(b.slice(c));
            return d ? (a.w = x.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function e(a, b, c) {
            u.lastIndex = 0;
            var d = u.exec(b.slice(c));
            return d ? (a.w = v.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function f(a, b, c) {
            A.lastIndex = 0;
            var d = A.exec(b.slice(c));
            return d ? (a.m = B.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function g(a, b, c) {
            y.lastIndex = 0;
            var d = y.exec(b.slice(c));
            return d ? (a.m = z.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function h(a, b, d) {
            return c(a, C.c.toString(), b, d)
        }

        function i(a, b, d) {
            return c(a, C.x.toString(), b, d)
        }

        function j(a, b, d) {
            return c(a, C.X.toString(), b, d)
        }

        function k(a, b, c) {
            var d = t.get(b.slice(c, c += 2).toLowerCase());
            return null == d ? -1 : (a.p = d, c)
        }

        var l = a.dateTime, m = a.date, n = a.time, o = a.periods, p = a.days, q = a.shortDays, r = a.months,
            s = a.shortMonths;
        b.utc = function (a) {
            function c(a) {
                try {
                    nh = Na;
                    var b = new nh;
                    return b._ = a, d(b)
                } finally {
                    nh = Date
                }
            }

            var d = b(a);
            return c.parse = function (a) {
                try {
                    nh = Na;
                    var b = d.parse(a);
                    return b && b._
                } finally {
                    nh = Date
                }
            }, c.toString = d.toString, c
        }, b.multi = b.utc.multi = ib;
        var t = hg.map(), u = Sa(p), v = Ta(p), w = Sa(q), x = Ta(q), y = Sa(r), z = Ta(r), A = Sa(s), B = Ta(s);
        o.forEach(function (a, b) {
            t.set(a.toLowerCase(), b)
        });
        var C = {
            a: function (a) {
                return q[a.getDay()]
            }, A: function (a) {
                return p[a.getDay()]
            }, b: function (a) {
                return s[a.getMonth()]
            }, B: function (a) {
                return r[a.getMonth()]
            }, c: b(l), d: function (a, b) {
                return Ra(a.getDate(), b, 2)
            }, e: function (a, b) {
                return Ra(a.getDate(), b, 2)
            }, H: function (a, b) {
                return Ra(a.getHours(), b, 2)
            }, I: function (a, b) {
                return Ra(a.getHours() % 12 || 12, b, 2)
            }, j: function (a, b) {
                return Ra(1 + mh.dayOfYear(a), b, 3)
            }, L: function (a, b) {
                return Ra(a.getMilliseconds(), b, 3)
            }, m: function (a, b) {
                return Ra(a.getMonth() + 1, b, 2)
            }, M: function (a, b) {
                return Ra(a.getMinutes(), b, 2)
            }, p: function (a) {
                return o[+(a.getHours() >= 12)]
            }, S: function (a, b) {
                return Ra(a.getSeconds(), b, 2)
            }, U: function (a, b) {
                return Ra(mh.sundayOfYear(a), b, 2)
            }, w: function (a) {
                return a.getDay()
            }, W: function (a, b) {
                return Ra(mh.mondayOfYear(a), b, 2)
            }, x: b(m), X: b(n), y: function (a, b) {
                return Ra(a.getFullYear() % 100, b, 2)
            }, Y: function (a, b) {
                return Ra(a.getFullYear() % 1e4, b, 4)
            }, Z: gb, "%": function () {
                return "%"
            }
        }, D = {
            a: d,
            A: e,
            b: f,
            B: g,
            c: h,
            d: ab,
            e: ab,
            H: cb,
            I: cb,
            j: bb,
            L: fb,
            m: _a,
            M: db,
            p: k,
            S: eb,
            U: Va,
            w: Ua,
            W: Wa,
            x: i,
            X: j,
            y: Ya,
            Y: Xa,
            Z: Za,
            "%": hb
        };
        return b
    }

    function Ra(a, b, c) {
        var d = 0 > a ? "-" : "", e = (d ? -a : a) + "", f = e.length;
        return d + (c > f ? new Array(c - f + 1).join(b) + e : e)
    }

    function Sa(a) {
        return new RegExp("^(?:" + a.map(hg.requote).join("|") + ")", "i")
    }

    function Ta(a) {
        for (var b = new j, c = -1, d = a.length; ++c < d;)b.set(a[c].toLowerCase(), c);
        return b
    }

    function Ua(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c, c + 1));
        return d ? (a.w = +d[0], c + d[0].length) : -1
    }

    function Va(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c));
        return d ? (a.U = +d[0], c + d[0].length) : -1
    }

    function Wa(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c));
        return d ? (a.W = +d[0], c + d[0].length) : -1
    }

    function Xa(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c, c + 4));
        return d ? (a.y = +d[0], c + d[0].length) : -1
    }

    function Ya(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c, c + 2));
        return d ? (a.y = $a(+d[0]), c + d[0].length) : -1
    }

    function Za(a, b, c) {
        return /^[+-]\d{4}$/.test(b = b.slice(c, c + 5)) ? (a.Z = -b, c + 5) : -1
    }

    function $a(a) {
        return a + (a > 68 ? 1900 : 2e3)
    }

    function _a(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c, c + 2));
        return d ? (a.m = d[0] - 1, c + d[0].length) : -1
    }

    function ab(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c, c + 2));
        return d ? (a.d = +d[0], c + d[0].length) : -1
    }

    function bb(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c, c + 3));
        return d ? (a.j = +d[0], c + d[0].length) : -1
    }

    function cb(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c, c + 2));
        return d ? (a.H = +d[0], c + d[0].length) : -1
    }

    function db(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c, c + 2));
        return d ? (a.M = +d[0], c + d[0].length) : -1
    }

    function eb(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c, c + 2));
        return d ? (a.S = +d[0], c + d[0].length) : -1
    }

    function fb(a, b, c) {
        qh.lastIndex = 0;
        var d = qh.exec(b.slice(c, c + 3));
        return d ? (a.L = +d[0], c + d[0].length) : -1
    }

    function gb(a) {
        var b = a.getTimezoneOffset(), c = b > 0 ? "-" : "+", d = tg(b) / 60 | 0, e = tg(b) % 60;
        return c + Ra(d, "0", 2) + Ra(e, "0", 2)
    }

    function hb(a, b, c) {
        rh.lastIndex = 0;
        var d = rh.exec(b.slice(c, c + 1));
        return d ? c + d[0].length : -1
    }

    function ib(a) {
        for (var b = a.length, c = -1; ++c < b;)a[c][0] = this(a[c][0]);
        return function (b) {
            for (var c = 0, d = a[c]; !d[1](b);)d = a[++c];
            return d[0](b)
        }
    }

    function jb() {
    }

    function kb(a, b, c) {
        var d = c.s = a + b, e = d - a, f = d - e;
        c.t = a - f + (b - e)
    }

    function lb(a, b) {
        a && vh.hasOwnProperty(a.type) && vh[a.type](a, b)
    }

    function mb(a, b, c) {
        var d, e = -1, f = a.length - c;
        for (b.lineStart(); ++e < f;)d = a[e], b.point(d[0], d[1], d[2]);
        b.lineEnd()
    }

    function nb(a, b) {
        var c = -1, d = a.length;
        for (b.polygonStart(); ++c < d;)mb(a[c], b, 1);
        b.polygonEnd()
    }

    function ob() {
        function a(a, b) {
            a *= Pg, b = b * Pg / 2 + Lg / 4;
            var c = a - d, g = c >= 0 ? 1 : -1, h = g * c, i = Math.cos(b), j = Math.sin(b), k = f * j,
                l = e * i + k * Math.cos(h), m = k * g * Math.sin(h);
            xh.add(Math.atan2(m, l)), d = a, e = i, f = j
        }

        var b, c, d, e, f;
        yh.point = function (g, h) {
            yh.point = a, d = (b = g) * Pg, e = Math.cos(h = (c = h) * Pg / 2 + Lg / 4), f = Math.sin(h)
        }, yh.lineEnd = function () {
            a(b, c)
        }
    }

    function pb(a) {
        var b = a[0], c = a[1], d = Math.cos(c);
        return [d * Math.cos(b), d * Math.sin(b), Math.sin(c)]
    }

    function qb(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
    }

    function rb(a, b) {
        return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
    }

    function sb(a, b) {
        a[0] += b[0], a[1] += b[1], a[2] += b[2]
    }

    function tb(a, b) {
        return [a[0] * b, a[1] * b, a[2] * b]
    }

    function ub(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
        a[0] /= b, a[1] /= b, a[2] /= b
    }

    function vb(a) {
        return [Math.atan2(a[1], a[0]), ba(a[2])]
    }

    function wb(a, b) {
        return tg(a[0] - b[0]) < Jg && tg(a[1] - b[1]) < Jg
    }

    function xb(a, b) {
        a *= Pg;
        var c = Math.cos(b *= Pg);
        yb(c * Math.cos(a), c * Math.sin(a), Math.sin(b))
    }

    function yb(a, b, c) {
        ++zh, Bh += (a - Bh) / zh, Ch += (b - Ch) / zh, Dh += (c - Dh) / zh
    }

    function zb() {
        function a(a, e) {
            a *= Pg;
            var f = Math.cos(e *= Pg), g = f * Math.cos(a), h = f * Math.sin(a), i = Math.sin(e),
                j = Math.atan2(Math.sqrt((j = c * i - d * h) * j + (j = d * g - b * i) * j + (j = b * h - c * g) * j), b * g + c * h + d * i);
            Ah += j, Eh += j * (b + (b = g)), Fh += j * (c + (c = h)), Gh += j * (d + (d = i)), yb(b, c, d)
        }

        var b, c, d;
        Kh.point = function (e, f) {
            e *= Pg;
            var g = Math.cos(f *= Pg);
            b = g * Math.cos(e), c = g * Math.sin(e), d = Math.sin(f), Kh.point = a, yb(b, c, d)
        }
    }

    function Ab() {
        Kh.point = xb
    }

    function Bb() {
        function a(a, b) {
            a *= Pg;
            var c = Math.cos(b *= Pg), g = c * Math.cos(a), h = c * Math.sin(a), i = Math.sin(b), j = e * i - f * h,
                k = f * g - d * i, l = d * h - e * g, m = Math.sqrt(j * j + k * k + l * l), n = d * g + e * h + f * i,
                o = m && -aa(n) / m, p = Math.atan2(m, n);
            Hh += o * j, Ih += o * k, Jh += o * l, Ah += p, Eh += p * (d + (d = g)), Fh += p * (e + (e = h)), Gh += p * (f + (f = i)), yb(d, e, f)
        }

        var b, c, d, e, f;
        Kh.point = function (g, h) {
            b = g, c = h, Kh.point = a, g *= Pg;
            var i = Math.cos(h *= Pg);
            d = i * Math.cos(g), e = i * Math.sin(g), f = Math.sin(h), yb(d, e, f)
        }, Kh.lineEnd = function () {
            a(b, c), Kh.lineEnd = Ab, Kh.point = xb
        }
    }

    function Cb(a, b) {
        function c(c, d) {
            return c = a(c, d), b(c[0], c[1])
        }

        return a.invert && b.invert && (c.invert = function (c, d) {
            return c = b.invert(c, d), c && a.invert(c[0], c[1])
        }), c
    }

    function Db() {
        return !0
    }

    function Eb(a, b, c, d, e) {
        var f = [], g = [];
        if (a.forEach(function (a) {
                if (!((b = a.length - 1) <= 0)) {
                    var b, c = a[0], d = a[b];
                    if (wb(c, d)) {
                        e.lineStart();
                        for (var h = 0; b > h; ++h)e.point((c = a[h])[0], c[1]);
                        return void e.lineEnd()
                    }
                    var i = new Gb(c, a, null, !0), j = new Gb(c, null, i, !1);
                    i.o = j, f.push(i), g.push(j), i = new Gb(d, a, null, !1), j = new Gb(d, null, i, !0), i.o = j, f.push(i), g.push(j)
                }
            }), g.sort(b), Fb(f), Fb(g), f.length) {
            for (var h = 0, i = c, j = g.length; j > h; ++h)g[h].e = i = !i;
            for (var k, l, m = f[0]; ;) {
                for (var n = m, o = !0; n.v;)if ((n = n.n) === m)return;
                k = n.z, e.lineStart();
                do {
                    if (n.v = n.o.v = !0, n.e) {
                        if (o)for (var h = 0,
                                       j = k.length; j > h; ++h)e.point((l = k[h])[0], l[1]); else d(n.x, n.n.x, 1, e);
                        n = n.n
                    } else {
                        if (o) {
                            k = n.p.z;
                            for (var h = k.length - 1; h >= 0; --h)e.point((l = k[h])[0], l[1])
                        } else d(n.x, n.p.x, -1, e);
                        n = n.p
                    }
                    n = n.o, k = n.z, o = !o
                } while (!n.v);
                e.lineEnd()
            }
        }
    }

    function Fb(a) {
        if (b = a.length) {
            for (var b, c, d = 0, e = a[0]; ++d < b;)e.n = c = a[d], c.p = e, e = c;
            e.n = c = a[0], c.p = e
        }
    }

    function Gb(a, b, c, d) {
        this.x = a, this.z = b, this.o = c, this.e = d, this.v = !1, this.n = this.p = null
    }

    function Hb(a, b, c, d) {
        return function (e, f) {
            function g(b, c) {
                var d = e(b, c);
                a(b = d[0], c = d[1]) && f.point(b, c)
            }

            function h(a, b) {
                var c = e(a, b);
                q.point(c[0], c[1])
            }

            function i() {
                s.point = h, q.lineStart()
            }

            function j() {
                s.point = g, q.lineEnd()
            }

            function k(a, b) {
                p.push([a, b]);
                var c = e(a, b);
                u.point(c[0], c[1])
            }

            function l() {
                u.lineStart(), p = []
            }

            function m() {
                k(p[0][0], p[0][1]), u.lineEnd();
                var a, b = u.clean(), c = t.buffer(), d = c.length;
                if (p.pop(), o.push(p), p = null, d)if (1 & b) {
                    a = c[0];
                    var e, d = a.length - 1, g = -1;
                    if (d > 0) {
                        for (v || (f.polygonStart(), v = !0), f.lineStart(); ++g < d;)f.point((e = a[g])[0], e[1]);
                        f.lineEnd()
                    }
                } else d > 1 && 2 & b && c.push(c.pop().concat(c.shift())), n.push(c.filter(Ib))
            }

            var n, o, p, q = b(f), r = e.invert(d[0], d[1]), s = {
                point: g, lineStart: i, lineEnd: j, polygonStart: function () {
                    s.point = k, s.lineStart = l, s.lineEnd = m, n = [], o = []
                }, polygonEnd: function () {
                    s.point = g, s.lineStart = i, s.lineEnd = j, n = hg.merge(n);
                    var a = Ob(r, o);
                    n.length ? (v || (f.polygonStart(), v = !0), Eb(n, Kb, a, c, f)) : a && (v || (f.polygonStart(), v = !0), f.lineStart(), c(null, null, 1, f), f.lineEnd()), v && (f.polygonEnd(), v = !1), n = o = null
                }, sphere: function () {
                    f.polygonStart(), f.lineStart(), c(null, null, 1, f), f.lineEnd(), f.polygonEnd()
                }
            }, t = Jb(), u = b(t), v = !1;
            return s
        }
    }

    function Ib(a) {
        return a.length > 1
    }

    function Jb() {
        var a, b = [];
        return {
            lineStart: function () {
                b.push(a = [])
            }, point: function (b, c) {
                a.push([b, c])
            }, lineEnd: v, buffer: function () {
                var c = b;
                return b = [], a = null, c
            }, rejoin: function () {
                b.length > 1 && b.push(b.pop().concat(b.shift()))
            }
        }
    }

    function Kb(a, b) {
        return ((a = a.x)[0] < 0 ? a[1] - Og - Jg : Og - a[1]) - ((b = b.x)[0] < 0 ? b[1] - Og - Jg : Og - b[1])
    }

    function Lb(a) {
        var b, c = NaN, d = NaN, e = NaN;
        return {
            lineStart: function () {
                a.lineStart(), b = 1
            }, point: function (f, g) {
                var h = f > 0 ? Lg : -Lg, i = tg(f - c);
                tg(i - Lg) < Jg ? (a.point(c, d = (d + g) / 2 > 0 ? Og : -Og), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), a.point(f, d), b = 0) : e !== h && i >= Lg && (tg(c - e) < Jg && (c -= e * Jg), tg(f - h) < Jg && (f -= h * Jg), d = Mb(c, d, f, g), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), b = 0), a.point(c = f, d = g), e = h
            }, lineEnd: function () {
                a.lineEnd(), c = d = NaN
            }, clean: function () {
                return 2 - b
            }
        }
    }

    function Mb(a, b, c, d) {
        var e, f, g = Math.sin(a - c);
        return tg(g) > Jg ? Math.atan((Math.sin(b) * (f = Math.cos(d)) * Math.sin(c) - Math.sin(d) * (e = Math.cos(b)) * Math.sin(a)) / (e * f * g)) : (b + d) / 2
    }

    function Nb(a, b, c, d) {
        var e;
        if (null == a) e = c * Og, d.point(-Lg, e), d.point(0, e), d.point(Lg, e), d.point(Lg, 0), d.point(Lg, -e), d.point(0, -e), d.point(-Lg, -e), d.point(-Lg, 0), d.point(-Lg, e); else if (tg(a[0] - b[0]) > Jg) {
            var f = a[0] < b[0] ? Lg : -Lg;
            e = c * f / 2, d.point(-f, e), d.point(0, e), d.point(f, e)
        } else d.point(b[0], b[1])
    }

    function Ob(a, b) {
        var c = a[0], d = a[1], e = [Math.sin(c), -Math.cos(c), 0], f = 0, g = 0;
        xh.reset();
        for (var h = 0, i = b.length; i > h; ++h) {
            var j = b[h], k = j.length;
            if (k)for (var l = j[0], m = l[0], n = l[1] / 2 + Lg / 4, o = Math.sin(n), p = Math.cos(n), q = 1; ;) {
                q === k && (q = 0), a = j[q];
                var r = a[0], s = a[1] / 2 + Lg / 4, t = Math.sin(s), u = Math.cos(s), v = r - m, w = v >= 0 ? 1 : -1,
                    x = w * v, y = x > Lg, z = o * t;
                if (xh.add(Math.atan2(z * w * Math.sin(x), p * u + z * Math.cos(x))), f += y ? v + w * Mg : v, y ^ m >= c ^ r >= c) {
                    var A = rb(pb(l), pb(a));
                    ub(A);
                    var B = rb(e, A);
                    ub(B);
                    var C = (y ^ v >= 0 ? -1 : 1) * ba(B[2]);
                    (d > C || d === C && (A[0] || A[1])) && (g += y ^ v >= 0 ? 1 : -1)
                }
                if (!q++)break;
                m = r, o = t, p = u, l = a
            }
        }
        return (-Jg > f || Jg > f && 0 > xh) ^ 1 & g
    }

    function Pb(a) {
        function b(a, b) {
            return Math.cos(a) * Math.cos(b) > f
        }

        function c(a) {
            var c, f, i, j, k;
            return {
                lineStart: function () {
                    j = i = !1, k = 1
                }, point: function (l, m) {
                    var n, o = [l, m], p = b(l, m), q = g ? p ? 0 : e(l, m) : p ? e(l + (0 > l ? Lg : -Lg), m) : 0;
                    if (!c && (j = i = p) && a.lineStart(), p !== i && (n = d(c, o), (wb(c, n) || wb(o, n)) && (o[0] += Jg, o[1] += Jg, p = b(o[0], o[1]))), p !== i) k = 0, p ? (a.lineStart(), n = d(o, c), a.point(n[0], n[1])) : (n = d(c, o), a.point(n[0], n[1]), a.lineEnd()), c = n; else if (h && c && g ^ p) {
                        var r;
                        q & f || !(r = d(o, c, !0)) || (k = 0, g ? (a.lineStart(), a.point(r[0][0], r[0][1]), a.point(r[1][0], r[1][1]), a.lineEnd()) : (a.point(r[1][0], r[1][1]), a.lineEnd(), a.lineStart(), a.point(r[0][0], r[0][1])))
                    }
                    !p || c && wb(c, o) || a.point(o[0], o[1]), c = o, i = p, f = q
                }, lineEnd: function () {
                    i && a.lineEnd(), c = null
                }, clean: function () {
                    return k | (j && i) << 1
                }
            }
        }

        function d(a, b, c) {
            var d = pb(a), e = pb(b), g = [1, 0, 0], h = rb(d, e), i = qb(h, h), j = h[0], k = i - j * j;
            if (!k)return !c && a;
            var l = f * i / k, m = -f * j / k, n = rb(g, h), o = tb(g, l), p = tb(h, m);
            sb(o, p);
            var q = n, r = qb(o, q), s = qb(q, q), t = r * r - s * (qb(o, o) - 1);
            if (!(0 > t)) {
                var u = Math.sqrt(t), v = tb(q, (-r - u) / s);
                if (sb(v, o), v = vb(v), !c)return v;
                var w, x = a[0], y = b[0], z = a[1], A = b[1];
                x > y && (w = x, x = y, y = w);
                var B = y - x, C = tg(B - Lg) < Jg, D = C || Jg > B;
                if (!C && z > A && (w = z, z = A, A = w), D ? C ? z + A > 0 ^ v[1] < (tg(v[0] - x) < Jg ? z : A) : z <= v[1] && v[1] <= A : B > Lg ^ (x <= v[0] && v[0] <= y)) {
                    var E = tb(q, (-r + u) / s);
                    return sb(E, o), [v, vb(E)]
                }
            }
        }

        function e(b, c) {
            var d = g ? a : Lg - a, e = 0;
            return -d > b ? e |= 1 : b > d && (e |= 2), -d > c ? e |= 4 : c > d && (e |= 8), e
        }

        var f = Math.cos(a), g = f > 0, h = tg(f) > Jg, i = oc(a, 6 * Pg);
        return Hb(b, c, i, g ? [0, -a] : [-Lg, a - Lg])
    }

    function Qb(a, b, c, d) {
        return function (e) {
            var f, g = e.a, h = e.b, i = g.x, j = g.y, k = h.x, l = h.y, m = 0, n = 1, o = k - i, p = l - j;
            if (f = a - i, o || !(f > 0)) {
                if (f /= o, 0 > o) {
                    if (m > f)return;
                    n > f && (n = f)
                } else if (o > 0) {
                    if (f > n)return;
                    f > m && (m = f)
                }
                if (f = c - i, o || !(0 > f)) {
                    if (f /= o, 0 > o) {
                        if (f > n)return;
                        f > m && (m = f)
                    } else if (o > 0) {
                        if (m > f)return;
                        n > f && (n = f)
                    }
                    if (f = b - j, p || !(f > 0)) {
                        if (f /= p, 0 > p) {
                            if (m > f)return;
                            n > f && (n = f)
                        } else if (p > 0) {
                            if (f > n)return;
                            f > m && (m = f)
                        }
                        if (f = d - j, p || !(0 > f)) {
                            if (f /= p, 0 > p) {
                                if (f > n)return;
                                f > m && (m = f)
                            } else if (p > 0) {
                                if (m > f)return;
                                n > f && (n = f)
                            }
                            return m > 0 && (e.a = {x: i + m * o, y: j + m * p}), 1 > n && (e.b = {
                                x: i + n * o,
                                y: j + n * p
                            }), e
                        }
                    }
                }
            }
        }
    }

    function Rb(a, b, c, d) {
        function e(d, e) {
            return tg(d[0] - a) < Jg ? e > 0 ? 0 : 3 : tg(d[0] - c) < Jg ? e > 0 ? 2 : 1 : tg(d[1] - b) < Jg ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2
        }

        function f(a, b) {
            return g(a.x, b.x)
        }

        function g(a, b) {
            var c = e(a, 1), d = e(b, 1);
            return c !== d ? c - d : 0 === c ? b[1] - a[1] : 1 === c ? a[0] - b[0] : 2 === c ? a[1] - b[1] : b[0] - a[0]
        }

        return function (h) {
            function i(a) {
                for (var b = 0, c = q.length, d = a[1], e = 0; c > e; ++e)for (var f, g = 1, h = q[e], i = h.length,
                                                                                   j = h[0]; i > g; ++g)f = h[g], j[1] <= d ? f[1] > d && _(j, f, a) > 0 && ++b : f[1] <= d && _(j, f, a) < 0 && --b, j = f;
                return 0 !== b
            }

            function j(f, h, i, j) {
                var k = 0, l = 0;
                if (null == f || (k = e(f, i)) !== (l = e(h, i)) || g(f, h) < 0 ^ i > 0) {
                    do j.point(0 === k || 3 === k ? a : c, k > 1 ? d : b); while ((k = (k + i + 4) % 4) !== l)
                } else j.point(h[0], h[1])
            }

            function k(e, f) {
                return e >= a && c >= e && f >= b && d >= f
            }

            function l(a, b) {
                k(a, b) && h.point(a, b)
            }

            function m() {
                D.point = o, q && q.push(r = []), y = !0, x = !1, v = w = NaN
            }

            function n() {
                p && (o(s, t), u && x && B.rejoin(), p.push(B.buffer())), D.point = l, x && h.lineEnd()
            }

            function o(a, b) {
                a = Math.max(-Mh, Math.min(Mh, a)), b = Math.max(-Mh, Math.min(Mh, b));
                var c = k(a, b);
                if (q && r.push([a, b]), y) s = a, t = b, u = c, y = !1, c && (h.lineStart(), h.point(a, b)); else if (c && x) h.point(a, b); else {
                    var d = {a: {x: v, y: w}, b: {x: a, y: b}};
                    C(d) ? (x || (h.lineStart(), h.point(d.a.x, d.a.y)), h.point(d.b.x, d.b.y), c || h.lineEnd(), z = !1) : c && (h.lineStart(), h.point(a, b), z = !1)
                }
                v = a, w = b, x = c
            }

            var p, q, r, s, t, u, v, w, x, y, z, A = h, B = Jb(), C = Qb(a, b, c, d), D = {
                point: l, lineStart: m, lineEnd: n, polygonStart: function () {
                    h = B, p = [], q = [], z = !0
                }, polygonEnd: function () {
                    h = A, p = hg.merge(p);
                    var b = i([a, d]), c = z && b, e = p.length;
                    (c || e) && (h.polygonStart(), c && (h.lineStart(), j(null, null, 1, h), h.lineEnd()), e && Eb(p, f, b, j, h), h.polygonEnd()), p = q = r = null
                }
            };
            return D
        }
    }

    function Sb(a) {
        var b = 0, c = Lg / 3, d = gc(a), e = d(b, c);
        return e.parallels = function (a) {
            return arguments.length ? d(b = a[0] * Lg / 180, c = a[1] * Lg / 180) : [b / Lg * 180, c / Lg * 180]
        }, e
    }

    function Tb(a, b) {
        function c(a, b) {
            var c = Math.sqrt(f - 2 * e * Math.sin(b)) / e;
            return [c * Math.sin(a *= e), g - c * Math.cos(a)]
        }

        var d = Math.sin(a), e = (d + Math.sin(b)) / 2, f = 1 + d * (2 * e - d), g = Math.sqrt(f) / e;
        return c.invert = function (a, b) {
            var c = g - b;
            return [Math.atan2(a, c) / e, ba((f - (a * a + c * c) * e * e) / (2 * e))]
        }, c
    }

    function Ub() {
        function a(a, b) {
            Oh += e * a - d * b, d = a, e = b
        }

        var b, c, d, e;
        Th.point = function (f, g) {
            Th.point = a, b = d = f, c = e = g
        }, Th.lineEnd = function () {
            a(b, c)
        }
    }

    function Vb(a, b) {
        Ph > a && (Ph = a), a > Rh && (Rh = a), Qh > b && (Qh = b), b > Sh && (Sh = b)
    }

    function Wb() {
        function a(a, b) {
            g.push("M", a, ",", b, f)
        }

        function b(a, b) {
            g.push("M", a, ",", b), h.point = c
        }

        function c(a, b) {
            g.push("L", a, ",", b)
        }

        function d() {
            h.point = a
        }

        function e() {
            g.push("Z")
        }

        var f = Xb(4.5), g = [], h = {
            point: a, lineStart: function () {
                h.point = b
            }, lineEnd: d, polygonStart: function () {
                h.lineEnd = e
            }, polygonEnd: function () {
                h.lineEnd = d, h.point = a
            }, pointRadius: function (a) {
                return f = Xb(a), h
            }, result: function () {
                if (g.length) {
                    var a = g.join("");
                    return g = [], a
                }
            }
        };
        return h
    }

    function Xb(a) {
        return "m0," + a + "a" + a + "," + a + " 0 1,1 0," + -2 * a + "a" + a + "," + a + " 0 1,1 0," + 2 * a + "z"
    }

    function Yb(a, b) {
        Bh += a, Ch += b, ++Dh
    }

    function Zb() {
        function a(a, d) {
            var e = a - b, f = d - c, g = Math.sqrt(e * e + f * f);
            Eh += g * (b + a) / 2, Fh += g * (c + d) / 2, Gh += g, Yb(b = a, c = d)
        }

        var b, c;
        Vh.point = function (d, e) {
            Vh.point = a, Yb(b = d, c = e)
        }
    }

    function $b() {
        Vh.point = Yb
    }

    function _b() {
        function a(a, b) {
            var c = a - d, f = b - e, g = Math.sqrt(c * c + f * f);
            Eh += g * (d + a) / 2, Fh += g * (e + b) / 2, Gh += g, g = e * a - d * b, Hh += g * (d + a), Ih += g * (e + b), Jh += 3 * g, Yb(d = a, e = b)
        }

        var b, c, d, e;
        Vh.point = function (f, g) {
            Vh.point = a, Yb(b = d = f, c = e = g)
        }, Vh.lineEnd = function () {
            a(b, c)
        }
    }

    function ac(a) {
        function b(b, c) {
            a.moveTo(b + g, c), a.arc(b, c, g, 0, Mg)
        }

        function c(b, c) {
            a.moveTo(b, c), h.point = d
        }

        function d(b, c) {
            a.lineTo(b, c)
        }

        function e() {
            h.point = b
        }

        function f() {
            a.closePath()
        }

        var g = 4.5, h = {
            point: b, lineStart: function () {
                h.point = c
            }, lineEnd: e, polygonStart: function () {
                h.lineEnd = f
            }, polygonEnd: function () {
                h.lineEnd = e, h.point = b
            }, pointRadius: function (a) {
                return g = a, h
            }, result: v
        };
        return h
    }

    function bc(a) {
        function b(a) {
            return (h ? d : c)(a)
        }

        function c(b) {
            return ec(b, function (c, d) {
                c = a(c, d), b.point(c[0], c[1])
            })
        }

        function d(b) {
            function c(c, d) {
                c = a(c, d), b.point(c[0], c[1])
            }

            function d() {
                t = NaN, y.point = f, b.lineStart()
            }

            function f(c, d) {
                var f = pb([c, d]), g = a(c, d);
                e(t, u, s, v, w, x, t = g[0], u = g[1], s = c, v = f[0], w = f[1], x = f[2], h, b), b.point(t, u)
            }

            function g() {
                y.point = c, b.lineEnd()
            }

            function i() {
                d(), y.point = j, y.lineEnd = k
            }

            function j(a, b) {
                f(l = a, m = b), n = t, o = u, p = v, q = w, r = x, y.point = f
            }

            function k() {
                e(t, u, s, v, w, x, n, o, l, p, q, r, h, b), y.lineEnd = g, g()
            }

            var l, m, n, o, p, q, r, s, t, u, v, w, x, y = {
                point: c, lineStart: d, lineEnd: g, polygonStart: function () {
                    b.polygonStart(), y.lineStart = i
                }, polygonEnd: function () {
                    b.polygonEnd(), y.lineStart = d
                }
            };
            return y
        }

        function e(b, c, d, h, i, j, k, l, m, n, o, p, q, r) {
            var s = k - b, t = l - c, u = s * s + t * t;
            if (u > 4 * f && q--) {
                var v = h + n, w = i + o, x = j + p, y = Math.sqrt(v * v + w * w + x * x), z = Math.asin(x /= y),
                    A = tg(tg(x) - 1) < Jg || tg(d - m) < Jg ? (d + m) / 2 : Math.atan2(w, v), B = a(A, z), C = B[0],
                    D = B[1], E = C - b, F = D - c, G = t * E - s * F;
                (G * G / u > f || tg((s * E + t * F) / u - .5) > .3 || g > h * n + i * o + j * p) && (e(b, c, d, h, i, j, C, D, A, v /= y, w /= y, x, q, r), r.point(C, D), e(C, D, A, v, w, x, k, l, m, n, o, p, q, r))
            }
        }

        var f = .5, g = Math.cos(30 * Pg), h = 16;
        return b.precision = function (a) {
            return arguments.length ? (h = (f = a * a) > 0 && 16, b) : Math.sqrt(f)
        }, b
    }

    function cc(a) {
        var b = bc(function (b, c) {
            return a([b * Qg, c * Qg])
        });
        return function (a) {
            return hc(b(a))
        }
    }

    function dc(a) {
        this.stream = a
    }

    function ec(a, b) {
        return {
            point: b, sphere: function () {
                a.sphere()
            }, lineStart: function () {
                a.lineStart()
            }, lineEnd: function () {
                a.lineEnd()
            }, polygonStart: function () {
                a.polygonStart()
            }, polygonEnd: function () {
                a.polygonEnd()
            }
        }
    }

    function fc(a) {
        return gc(function () {
            return a
        })()
    }

    function gc(a) {
        function b(a) {
            return a = h(a[0] * Pg, a[1] * Pg), [a[0] * m + i, j - a[1] * m]
        }

        function c(a) {
            return a = h.invert((a[0] - i) / m, (j - a[1]) / m), a && [a[0] * Qg, a[1] * Qg]
        }

        function d() {
            h = Cb(g = kc(r, t, u), f);
            var a = f(p, q);
            return i = n - a[0] * m, j = o + a[1] * m, e()
        }

        function e() {
            return k && (k.valid = !1, k = null), b
        }

        var f, g, h, i, j, k, l = bc(function (a, b) {
            return a = f(a, b), [a[0] * m + i, j - a[1] * m]
        }), m = 150, n = 480, o = 250, p = 0, q = 0, r = 0, t = 0, u = 0, v = Lh, w = s, x = null, y = null;
        return b.stream = function (a) {
            return k && (k.valid = !1), k = hc(v(g, l(w(a)))), k.valid = !0, k
        }, b.clipAngle = function (a) {
            return arguments.length ? (v = null == a ? (x = a, Lh) : Pb((x = +a) * Pg), e()) : x
        }, b.clipExtent = function (a) {
            return arguments.length ? (y = a, w = a ? Rb(a[0][0], a[0][1], a[1][0], a[1][1]) : s, e()) : y
        }, b.scale = function (a) {
            return arguments.length ? (m = +a, d()) : m
        }, b.translate = function (a) {
            return arguments.length ? (n = +a[0], o = +a[1], d()) : [n, o]
        }, b.center = function (a) {
            return arguments.length ? (p = a[0] % 360 * Pg, q = a[1] % 360 * Pg, d()) : [p * Qg, q * Qg]
        }, b.rotate = function (a) {
            return arguments.length ? (r = a[0] % 360 * Pg, t = a[1] % 360 * Pg, u = a.length > 2 ? a[2] % 360 * Pg : 0, d()) : [r * Qg, t * Qg, u * Qg]
        }, hg.rebind(b, l, "precision"), function () {
            return f = a.apply(this, arguments), b.invert = f.invert && c, d()
        }
    }

    function hc(a) {
        return ec(a, function (b, c) {
            a.point(b * Pg, c * Pg)
        })
    }

    function ic(a, b) {
        return [a, b]
    }

    function jc(a, b) {
        return [a > Lg ? a - Mg : -Lg > a ? a + Mg : a, b]
    }

    function kc(a, b, c) {
        return a ? b || c ? Cb(mc(a), nc(b, c)) : mc(a) : b || c ? nc(b, c) : jc
    }

    function lc(a) {
        return function (b, c) {
            return b += a, [b > Lg ? b - Mg : -Lg > b ? b + Mg : b, c]
        }
    }

    function mc(a) {
        var b = lc(a);
        return b.invert = lc(-a), b
    }

    function nc(a, b) {
        function c(a, b) {
            var c = Math.cos(b), h = Math.cos(a) * c, i = Math.sin(a) * c, j = Math.sin(b), k = j * d + h * e;
            return [Math.atan2(i * f - k * g, h * d - j * e), ba(k * f + i * g)]
        }

        var d = Math.cos(a), e = Math.sin(a), f = Math.cos(b), g = Math.sin(b);
        return c.invert = function (a, b) {
            var c = Math.cos(b), h = Math.cos(a) * c, i = Math.sin(a) * c, j = Math.sin(b), k = j * f - i * g;
            return [Math.atan2(i * f + j * g, h * d + k * e), ba(k * d - h * e)]
        }, c
    }

    function oc(a, b) {
        var c = Math.cos(a), d = Math.sin(a);
        return function (e, f, g, h) {
            var i = g * b;
            null != e ? (e = pc(c, e), f = pc(c, f), (g > 0 ? f > e : e > f) && (e += g * Mg)) : (e = a + g * Mg, f = a - .5 * i);
            for (var j,
                     k = e; g > 0 ? k > f : f > k; k -= i)h.point((j = vb([c, -d * Math.cos(k), -d * Math.sin(k)]))[0], j[1])
        }
    }

    function pc(a, b) {
        var c = pb(b);
        c[0] -= a, ub(c);
        var d = aa(-c[1]);
        return ((-c[2] < 0 ? -d : d) + 2 * Math.PI - Jg) % (2 * Math.PI)
    }

    function qc(a, b, c) {
        var d = hg.range(a, b - Jg, c).concat(b);
        return function (a) {
            return d.map(function (b) {
                return [a, b]
            })
        }
    }

    function rc(a, b, c) {
        var d = hg.range(a, b - Jg, c).concat(b);
        return function (a) {
            return d.map(function (b) {
                return [b, a]
            })
        }
    }

    function sc(a) {
        return a.source
    }

    function tc(a) {
        return a.target
    }

    function uc(a, b, c, d) {
        var e = Math.cos(b), f = Math.sin(b), g = Math.cos(d), h = Math.sin(d), i = e * Math.cos(a),
            j = e * Math.sin(a), k = g * Math.cos(c), l = g * Math.sin(c),
            m = 2 * Math.asin(Math.sqrt(fa(d - b) + e * g * fa(c - a))), n = 1 / Math.sin(m), o = m ? function (a) {
                var b = Math.sin(a *= m) * n, c = Math.sin(m - a) * n, d = c * i + b * k, e = c * j + b * l,
                    g = c * f + b * h;
                return [Math.atan2(e, d) * Qg, Math.atan2(g, Math.sqrt(d * d + e * e)) * Qg]
            } : function () {
                return [a * Qg, b * Qg]
            };
        return o.distance = m, o
    }

    function vc() {
        function a(a, e) {
            var f = Math.sin(e *= Pg), g = Math.cos(e), h = tg((a *= Pg) - b), i = Math.cos(h);
            Wh += Math.atan2(Math.sqrt((h = g * Math.sin(h)) * h + (h = d * f - c * g * i) * h), c * f + d * g * i), b = a, c = f, d = g
        }

        var b, c, d;
        Xh.point = function (e, f) {
            b = e * Pg, c = Math.sin(f *= Pg), d = Math.cos(f), Xh.point = a
        }, Xh.lineEnd = function () {
            Xh.point = Xh.lineEnd = v
        }
    }

    function wc(a, b) {
        function c(b, c) {
            var d = Math.cos(b), e = Math.cos(c), f = a(d * e);
            return [f * e * Math.sin(b), f * Math.sin(c)]
        }

        return c.invert = function (a, c) {
            var d = Math.sqrt(a * a + c * c), e = b(d), f = Math.sin(e), g = Math.cos(e);
            return [Math.atan2(a * f, d * g), Math.asin(d && c * f / d)]
        }, c
    }

    function xc(a, b) {
        function c(a, b) {
            g > 0 ? -Og + Jg > b && (b = -Og + Jg) : b > Og - Jg && (b = Og - Jg);
            var c = g / Math.pow(e(b), f);
            return [c * Math.sin(f * a), g - c * Math.cos(f * a)]
        }

        var d = Math.cos(a), e = function (a) {
            return Math.tan(Lg / 4 + a / 2)
        }, f = a === b ? Math.sin(a) : Math.log(d / Math.cos(b)) / Math.log(e(b) / e(a)), g = d * Math.pow(e(a), f) / f;
        return f ? (c.invert = function (a, b) {
            var c = g - b, d = $(f) * Math.sqrt(a * a + c * c);
            return [Math.atan2(a, c) / f, 2 * Math.atan(Math.pow(g / d, 1 / f)) - Og]
        }, c) : zc
    }

    function yc(a, b) {
        function c(a, b) {
            var c = f - b;
            return [c * Math.sin(e * a), f - c * Math.cos(e * a)]
        }

        var d = Math.cos(a), e = a === b ? Math.sin(a) : (d - Math.cos(b)) / (b - a), f = d / e + a;
        return tg(e) < Jg ? ic : (c.invert = function (a, b) {
            var c = f - b;
            return [Math.atan2(a, c) / e, f - $(e) * Math.sqrt(a * a + c * c)]
        }, c)
    }

    function zc(a, b) {
        return [a, Math.log(Math.tan(Lg / 4 + b / 2))]
    }

    function Ac(a) {
        var b, c = fc(a), d = c.scale, e = c.translate, f = c.clipExtent;
        return c.scale = function () {
            var a = d.apply(c, arguments);
            return a === c ? b ? c.clipExtent(null) : c : a
        }, c.translate = function () {
            var a = e.apply(c, arguments);
            return a === c ? b ? c.clipExtent(null) : c : a
        }, c.clipExtent = function (a) {
            var g = f.apply(c, arguments);
            if (g === c) {
                if (b = null == a) {
                    var h = Lg * d(), i = e();
                    f([[i[0] - h, i[1] - h], [i[0] + h, i[1] + h]])
                }
            } else b && (g = null);
            return g
        }, c.clipExtent(null)
    }

    function Bc(a, b) {
        return [Math.log(Math.tan(Lg / 4 + b / 2)), -a]
    }

    function Cc(a) {
        return a[0]
    }

    function Dc(a) {
        return a[1]
    }

    function Ec(a) {
        for (var b = a.length, c = [0, 1], d = 2, e = 2; b > e; e++) {
            for (; d > 1 && _(a[c[d - 2]], a[c[d - 1]], a[e]) <= 0;)--d;
            c[d++] = e
        }
        return c.slice(0, d)
    }

    function Fc(a, b) {
        return a[0] - b[0] || a[1] - b[1]
    }

    function Gc(a, b, c) {
        return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
    }

    function Hc(a, b, c, d) {
        var e = a[0], f = c[0], g = b[0] - e, h = d[0] - f, i = a[1], j = c[1], k = b[1] - i, l = d[1] - j,
            m = (h * (i - j) - l * (e - f)) / (l * g - h * k);
        return [e + m * g, i + m * k]
    }

    function Ic(a) {
        var b = a[0], c = a[a.length - 1];
        return !(b[0] - c[0] || b[1] - c[1])
    }

    function Jc() {
        cd(this), this.edge = this.site = this.circle = null
    }

    function Kc(a) {
        var b = hi.pop() || new Jc;
        return b.site = a, b
    }

    function Lc(a) {
        Vc(a), ei.remove(a), hi.push(a), cd(a)
    }

    function Mc(a) {
        var b = a.circle, c = b.x, d = b.cy, e = {x: c, y: d}, f = a.P, g = a.N, h = [a];
        Lc(a);
        for (var i = f; i.circle && tg(c - i.circle.x) < Jg && tg(d - i.circle.cy) < Jg;)f = i.P, h.unshift(i), Lc(i), i = f;
        h.unshift(i), Vc(i);
        for (var j = g; j.circle && tg(c - j.circle.x) < Jg && tg(d - j.circle.cy) < Jg;)g = j.N, h.push(j), Lc(j), j = g;
        h.push(j), Vc(j);
        var k, l = h.length;
        for (k = 1; l > k; ++k)j = h[k], i = h[k - 1], _c(j.edge, i.site, j.site, e);
        i = h[0], j = h[l - 1], j.edge = Zc(i.site, j.site, null, e), Uc(i), Uc(j)
    }

    function Nc(a) {
        for (var b, c, d, e, f = a.x, g = a.y, h = ei._; h;)if (d = Oc(h, g) - f, d > Jg) h = h.L; else {
            if (e = f - Pc(h, g), !(e > Jg)) {
                d > -Jg ? (b = h.P, c = h) : e > -Jg ? (b = h, c = h.N) : b = c = h;
                break
            }
            if (!h.R) {
                b = h;
                break
            }
            h = h.R
        }
        var i = Kc(a);
        if (ei.insert(b, i), b || c) {
            if (b === c)return Vc(b), c = Kc(b.site), ei.insert(i, c), i.edge = c.edge = Zc(b.site, i.site), Uc(b), void Uc(c);
            if (!c)return void(i.edge = Zc(b.site, i.site));
            Vc(b), Vc(c);
            var j = b.site, k = j.x, l = j.y, m = a.x - k, n = a.y - l, o = c.site, p = o.x - k, q = o.y - l,
                r = 2 * (m * q - n * p), s = m * m + n * n, t = p * p + q * q,
                u = {x: (q * s - n * t) / r + k, y: (m * t - p * s) / r + l};
            _c(c.edge, j, o, u), i.edge = Zc(j, a, null, u), c.edge = Zc(a, o, null, u), Uc(b), Uc(c)
        }
    }

    function Oc(a, b) {
        var c = a.site, d = c.x, e = c.y, f = e - b;
        if (!f)return d;
        var g = a.P;
        if (!g)return -(1 / 0);
        c = g.site;
        var h = c.x, i = c.y, j = i - b;
        if (!j)return h;
        var k = h - d, l = 1 / f - 1 / j, m = k / j;
        return l ? (-m + Math.sqrt(m * m - 2 * l * (k * k / (-2 * j) - i + j / 2 + e - f / 2))) / l + d : (d + h) / 2
    }

    function Pc(a, b) {
        var c = a.N;
        if (c)return Oc(c, b);
        var d = a.site;
        return d.y === b ? d.x : 1 / 0
    }

    function Qc(a) {
        this.site = a, this.edges = []
    }

    function Rc(a) {
        for (var b, c, d, e, f, g, h, i, j, k, l = a[0][0], m = a[1][0], n = a[0][1], o = a[1][1], p = di,
                 q = p.length; q--;)if (f = p[q], f && f.prepare())for (h = f.edges, i = h.length, g = 0; i > g;)k = h[g].end(), d = k.x, e = k.y, j = h[++g % i].start(), b = j.x, c = j.y, (tg(d - b) > Jg || tg(e - c) > Jg) && (h.splice(g, 0, new ad($c(f.site, k, tg(d - l) < Jg && o - e > Jg ? {
            x: l,
            y: tg(b - l) < Jg ? c : o
        } : tg(e - o) < Jg && m - d > Jg ? {x: tg(c - o) < Jg ? b : m, y: o} : tg(d - m) < Jg && e - n > Jg ? {
            x: m,
            y: tg(b - m) < Jg ? c : n
        } : tg(e - n) < Jg && d - l > Jg ? {x: tg(c - n) < Jg ? b : l, y: n} : null), f.site, null)), ++i)
    }

    function Sc(a, b) {
        return b.angle - a.angle
    }

    function Tc() {
        cd(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function Uc(a) {
        var b = a.P, c = a.N;
        if (b && c) {
            var d = b.site, e = a.site, f = c.site;
            if (d !== f) {
                var g = e.x, h = e.y, i = d.x - g, j = d.y - h, k = f.x - g, l = f.y - h, m = 2 * (i * l - j * k);
                if (!(m >= -Kg)) {
                    var n = i * i + j * j, o = k * k + l * l, p = (l * n - j * o) / m, q = (i * o - k * n) / m,
                        l = q + h, r = ii.pop() || new Tc;
                    r.arc = a, r.site = e, r.x = p + g, r.y = l + Math.sqrt(p * p + q * q), r.cy = l, a.circle = r;
                    for (var s = null, t = gi._; t;)if (r.y < t.y || r.y === t.y && r.x <= t.x) {
                        if (!t.L) {
                            s = t.P;
                            break
                        }
                        t = t.L
                    } else {
                        if (!t.R) {
                            s = t;
                            break
                        }
                        t = t.R
                    }
                    gi.insert(s, r), s || (fi = r)
                }
            }
        }
    }

    function Vc(a) {
        var b = a.circle;
        b && (b.P || (fi = b.N), gi.remove(b), ii.push(b), cd(b), a.circle = null)
    }

    function Wc(a) {
        for (var b, c = ci, d = Qb(a[0][0], a[0][1], a[1][0], a[1][1]),
                 e = c.length; e--;)b = c[e], (!Xc(b, a) || !d(b) || tg(b.a.x - b.b.x) < Jg && tg(b.a.y - b.b.y) < Jg) && (b.a = b.b = null, c.splice(e, 1))
    }

    function Xc(a, b) {
        var c = a.b;
        if (c)return !0;
        var d, e, f = a.a, g = b[0][0], h = b[1][0], i = b[0][1], j = b[1][1], k = a.l, l = a.r, m = k.x, n = k.y,
            o = l.x, p = l.y, q = (m + o) / 2, r = (n + p) / 2;
        if (p === n) {
            if (g > q || q >= h)return;
            if (m > o) {
                if (f) {
                    if (f.y >= j)return
                } else f = {x: q, y: i};
                c = {x: q, y: j}
            } else {
                if (f) {
                    if (f.y < i)return
                } else f = {x: q, y: j};
                c = {x: q, y: i}
            }
        } else if (d = (m - o) / (p - n), e = r - d * q, -1 > d || d > 1)if (m > o) {
            if (f) {
                if (f.y >= j)return
            } else f = {x: (i - e) / d, y: i};
            c = {x: (j - e) / d, y: j}
        } else {
            if (f) {
                if (f.y < i)return
            } else f = {x: (j - e) / d, y: j};
            c = {x: (i - e) / d, y: i}
        } else if (p > n) {
            if (f) {
                if (f.x >= h)return
            } else f = {x: g, y: d * g + e};
            c = {x: h, y: d * h + e}
        } else {
            if (f) {
                if (f.x < g)return
            } else f = {x: h, y: d * h + e};
            c = {x: g, y: d * g + e}
        }
        return a.a = f, a.b = c, !0
    }

    function Yc(a, b) {
        this.l = a, this.r = b, this.a = this.b = null
    }

    function Zc(a, b, c, d) {
        var e = new Yc(a, b);
        return ci.push(e), c && _c(e, a, b, c), d && _c(e, b, a, d), di[a.i].edges.push(new ad(e, a, b)), di[b.i].edges.push(new ad(e, b, a)), e
    }

    function $c(a, b, c) {
        var d = new Yc(a, null);
        return d.a = b, d.b = c, ci.push(d), d
    }

    function _c(a, b, c, d) {
        a.a || a.b ? a.l === c ? a.b = d : a.a = d : (a.a = d, a.l = b, a.r = c)
    }

    function ad(a, b, c) {
        var d = a.a, e = a.b;
        this.edge = a, this.site = b, this.angle = c ? Math.atan2(c.y - b.y, c.x - b.x) : a.l === b ? Math.atan2(e.x - d.x, d.y - e.y) : Math.atan2(d.x - e.x, e.y - d.y)
    }

    function bd() {
        this._ = null
    }

    function cd(a) {
        a.U = a.C = a.L = a.R = a.P = a.N = null
    }

    function dd(a, b) {
        var c = b, d = b.R, e = c.U;
        e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.R = d.L, c.R && (c.R.U = c), d.L = c
    }

    function ed(a, b) {
        var c = b, d = b.L, e = c.U;
        e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.L = d.R, c.L && (c.L.U = c), d.R = c
    }

    function fd(a) {
        for (; a.L;)a = a.L;
        return a
    }

    function gd(a, b) {
        var c, d, e, f = a.sort(hd).pop();
        for (ci = [], di = new Array(a.length), ei = new bd, gi = new bd; ;)if (e = fi, f && (!e || f.y < e.y || f.y === e.y && f.x < e.x)) (f.x !== c || f.y !== d) && (di[f.i] = new Qc(f), Nc(f), c = f.x, d = f.y), f = a.pop(); else {
            if (!e)break;
            Mc(e.arc)
        }
        b && (Wc(b), Rc(b));
        var g = {cells: di, edges: ci};
        return ei = gi = ci = di = null, g
    }

    function hd(a, b) {
        return b.y - a.y || b.x - a.x
    }

    function id(a, b, c) {
        return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y)
    }

    function jd(a) {
        return a.x
    }

    function kd(a) {
        return a.y
    }

    function ld() {
        return {leaf: !0, nodes: [], point: null, x: null, y: null}
    }

    function md(a, b, c, d, e, f) {
        if (!a(b, c, d, e, f)) {
            var g = .5 * (c + e), h = .5 * (d + f), i = b.nodes;
            i[0] && md(a, i[0], c, d, g, h), i[1] && md(a, i[1], g, d, e, h), i[2] && md(a, i[2], c, h, g, f), i[3] && md(a, i[3], g, h, e, f)
        }
    }

    function nd(a, b, c, d, e, f, g) {
        var h, i = 1 / 0;
        return function j(a, k, l, m, n) {
            if (!(k > f || l > g || d > m || e > n)) {
                if (o = a.point) {
                    var o, p = b - a.x, q = c - a.y, r = p * p + q * q;
                    if (i > r) {
                        var s = Math.sqrt(i = r);
                        d = b - s, e = c - s, f = b + s, g = c + s, h = o
                    }
                }
                for (var t = a.nodes, u = .5 * (k + m), v = .5 * (l + n), w = b >= u, x = c >= v, y = x << 1 | w,
                         z = y + 4; z > y; ++y)if (a = t[3 & y])switch (3 & y) {
                    case 0:
                        j(a, k, l, u, v);
                        break;
                    case 1:
                        j(a, u, l, m, v);
                        break;
                    case 2:
                        j(a, k, v, u, n);
                        break;
                    case 3:
                        j(a, u, v, m, n)
                }
            }
        }(a, d, e, f, g), h
    }

    function od(a, b) {
        a = hg.rgb(a), b = hg.rgb(b);
        var c = a.r, d = a.g, e = a.b, f = b.r - c, g = b.g - d, h = b.b - e;
        return function (a) {
            return "#" + ua(Math.round(c + f * a)) + ua(Math.round(d + g * a)) + ua(Math.round(e + h * a))
        }
    }

    function pd(a, b) {
        var c, d = {}, e = {};
        for (c in a)c in b ? d[c] = sd(a[c], b[c]) : e[c] = a[c];
        for (c in b)c in a || (e[c] = b[c]);
        return function (a) {
            for (c in d)e[c] = d[c](a);
            return e
        }
    }

    function qd(a, b) {
        return a = +a, b = +b, function (c) {
            return a * (1 - c) + b * c
        }
    }

    function rd(a, b) {
        var c, d, e, f = ki.lastIndex = li.lastIndex = 0, g = -1, h = [], i = [];
        for (a += "", b += ""; (c = ki.exec(a)) && (d = li.exec(b));)(e = d.index) > f && (e = b.slice(f, e), h[g] ? h[g] += e : h[++g] = e), (c = c[0]) === (d = d[0]) ? h[g] ? h[g] += d : h[++g] = d : (h[++g] = null, i.push({
            i: g,
            x: qd(c, d)
        })), f = li.lastIndex;
        return f < b.length && (e = b.slice(f), h[g] ? h[g] += e : h[++g] = e), h.length < 2 ? i[0] ? (b = i[0].x, function (a) {
            return b(a) + ""
        }) : function () {
            return b
        } : (b = i.length, function (a) {
            for (var c, d = 0; b > d; ++d)h[(c = i[d]).i] = c.x(a);
            return h.join("")
        })
    }

    function sd(a, b) {
        for (var c, d = hg.interpolators.length; --d >= 0 && !(c = hg.interpolators[d](a, b)););
        return c
    }

    function td(a, b) {
        var c, d = [], e = [], f = a.length, g = b.length, h = Math.min(a.length, b.length);
        for (c = 0; h > c; ++c)d.push(sd(a[c], b[c]));
        for (; f > c; ++c)e[c] = a[c];
        for (; g > c; ++c)e[c] = b[c];
        return function (a) {
            for (c = 0; h > c; ++c)e[c] = d[c](a);
            return e
        }
    }

    function ud(a) {
        return function (b) {
            return 0 >= b ? 0 : b >= 1 ? 1 : a(b)
        }
    }

    function vd(a) {
        return function (b) {
            return 1 - a(1 - b)
        }
    }

    function wd(a) {
        return function (b) {
            return .5 * (.5 > b ? a(2 * b) : 2 - a(2 - 2 * b))
        }
    }

    function xd(a) {
        return a * a
    }

    function yd(a) {
        return a * a * a
    }

    function zd(a) {
        if (0 >= a)return 0;
        if (a >= 1)return 1;
        var b = a * a, c = b * a;
        return 4 * (.5 > a ? c : 3 * (a - b) + c - .75)
    }

    function Ad(a) {
        return function (b) {
            return Math.pow(b, a)
        }
    }

    function Bd(a) {
        return 1 - Math.cos(a * Og)
    }

    function Cd(a) {
        return Math.pow(2, 10 * (a - 1))
    }

    function Dd(a) {
        return 1 - Math.sqrt(1 - a * a)
    }

    function Ed(a, b) {
        var c;
        return arguments.length < 2 && (b = .45), arguments.length ? c = b / Mg * Math.asin(1 / a) : (a = 1, c = b / 4), function (d) {
            return 1 + a * Math.pow(2, -10 * d) * Math.sin((d - c) * Mg / b)
        }
    }

    function Fd(a) {
        return a || (a = 1.70158), function (b) {
            return b * b * ((a + 1) * b - a)
        }
    }

    function Gd(a) {
        return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }

    function Hd(a, b) {
        a = hg.hcl(a), b = hg.hcl(b);
        var c = a.h, d = a.c, e = a.l, f = b.h - c, g = b.c - d, h = b.l - e;
        return isNaN(g) && (g = 0, d = isNaN(d) ? b.c : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360), function (a) {
            return ka(c + f * a, d + g * a, e + h * a) + ""
        }
    }

    function Id(a, b) {
        a = hg.hsl(a), b = hg.hsl(b);
        var c = a.h, d = a.s, e = a.l, f = b.h - c, g = b.s - d, h = b.l - e;
        return isNaN(g) && (g = 0, d = isNaN(d) ? b.s : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360), function (a) {
            return ia(c + f * a, d + g * a, e + h * a) + ""
        }
    }

    function Jd(a, b) {
        a = hg.lab(a), b = hg.lab(b);
        var c = a.l, d = a.a, e = a.b, f = b.l - c, g = b.a - d, h = b.b - e;
        return function (a) {
            return ma(c + f * a, d + g * a, e + h * a) + ""
        }
    }

    function Kd(a, b) {
        return b -= a, function (c) {
            return Math.round(a + b * c)
        }
    }

    function Ld(a) {
        var b = [a.a, a.b], c = [a.c, a.d], d = Nd(b), e = Md(b, c), f = Nd(Od(c, b, -e)) || 0;
        b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1), this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * Qg, this.translate = [a.e, a.f], this.scale = [d, f], this.skew = f ? Math.atan2(e, f) * Qg : 0
    }

    function Md(a, b) {
        return a[0] * b[0] + a[1] * b[1]
    }

    function Nd(a) {
        var b = Math.sqrt(Md(a, a));
        return b && (a[0] /= b, a[1] /= b), b
    }

    function Od(a, b, c) {
        return a[0] += c * b[0], a[1] += c * b[1], a
    }

    function Pd(a) {
        return a.length ? a.pop() + "," : ""
    }

    function Qd(a, b, c, d) {
        if (a[0] !== b[0] || a[1] !== b[1]) {
            var e = c.push("translate(", null, ",", null, ")");
            d.push({i: e - 4, x: qd(a[0], b[0])}, {i: e - 2, x: qd(a[1], b[1])})
        } else(b[0] || b[1]) && c.push("translate(" + b + ")")
    }

    function Rd(a, b, c, d) {
        a !== b ? (a - b > 180 ? b += 360 : b - a > 180 && (a += 360), d.push({
            i: c.push(Pd(c) + "rotate(", null, ")") - 2,
            x: qd(a, b)
        })) : b && c.push(Pd(c) + "rotate(" + b + ")")
    }

    function Sd(a, b, c, d) {
        a !== b ? d.push({
            i: c.push(Pd(c) + "skewX(", null, ")") - 2,
            x: qd(a, b)
        }) : b && c.push(Pd(c) + "skewX(" + b + ")")
    }

    function Td(a, b, c, d) {
        if (a[0] !== b[0] || a[1] !== b[1]) {
            var e = c.push(Pd(c) + "scale(", null, ",", null, ")");
            d.push({i: e - 4, x: qd(a[0], b[0])}, {i: e - 2, x: qd(a[1], b[1])})
        } else(1 !== b[0] || 1 !== b[1]) && c.push(Pd(c) + "scale(" + b + ")")
    }

    function Ud(a, b) {
        var c = [], d = [];
        return a = hg.transform(a), b = hg.transform(b), Qd(a.translate, b.translate, c, d), Rd(a.rotate, b.rotate, c, d), Sd(a.skew, b.skew, c, d), Td(a.scale, b.scale, c, d), a = b = null, function (a) {
            for (var b, e = -1, f = d.length; ++e < f;)c[(b = d[e]).i] = b.x(a);
            return c.join("")
        }
    }

    function Vd(a, b) {
        return b = (b -= a = +a) || 1 / b, function (c) {
            return (c - a) / b
        }
    }

    function Wd(a, b) {
        return b = (b -= a = +a) || 1 / b, function (c) {
            return Math.max(0, Math.min(1, (c - a) / b))
        }
    }

    function Xd(a) {
        for (var b = a.source, c = a.target, d = Zd(b, c), e = [b]; b !== d;)b = b.parent, e.push(b);
        for (var f = e.length; c !== d;)e.splice(f, 0, c), c = c.parent;
        return e
    }

    function Yd(a) {
        for (var b = [], c = a.parent; null != c;)b.push(a), a = c, c = c.parent;
        return b.push(a), b
    }

    function Zd(a, b) {
        if (a === b)return a;
        for (var c = Yd(a), d = Yd(b), e = c.pop(), f = d.pop(), g = null; e === f;)g = e, e = c.pop(), f = d.pop();
        return g
    }

    function $d(a) {
        a.fixed |= 2
    }

    function _d(a) {
        a.fixed &= -7
    }

    function ae(a) {
        a.fixed |= 4, a.px = a.x, a.py = a.y
    }

    function be(a) {
        a.fixed &= -5
    }

    function ce(a, b, c) {
        var d = 0, e = 0;
        if (a.charge = 0, !a.leaf)for (var f, g = a.nodes, h = g.length,
                                           i = -1; ++i < h;)f = g[i], null != f && (ce(f, b, c), a.charge += f.charge, d += f.charge * f.cx, e += f.charge * f.cy);
        if (a.point) {
            a.leaf || (a.point.x += Math.random() - .5, a.point.y += Math.random() - .5);
            var j = b * c[a.point.index];
            a.charge += a.pointCharge = j, d += j * a.point.x, e += j * a.point.y
        }
        a.cx = d / a.charge, a.cy = e / a.charge
    }

    function de(a, b) {
        return hg.rebind(a, b, "sort", "children", "value"), a.nodes = a, a.links = je, a
    }

    function ee(a, b) {
        for (var c = [a]; null != (a = c.pop());)if (b(a), (e = a.children) && (d = e.length))for (var d,
                                                                                                       e; --d >= 0;)c.push(e[d])
    }

    function fe(a, b) {
        for (var c = [a], d = []; null != (a = c.pop());)if (d.push(a), (f = a.children) && (e = f.length))for (var e,
                                                                                                                    f,
                                                                                                                    g = -1; ++g < e;)c.push(f[g]);
        for (; null != (a = d.pop());)b(a)
    }

    function ge(a) {
        return a.children
    }

    function he(a) {
        return a.value
    }

    function ie(a, b) {
        return b.value - a.value
    }

    function je(a) {
        return hg.merge(a.map(function (a) {
            return (a.children || []).map(function (b) {
                return {source: a, target: b}
            })
        }))
    }

    function ke(a) {
        return a.x
    }

    function le(a) {
        return a.y
    }

    function me(a, b, c) {
        a.y0 = b, a.y = c
    }

    function ne(a) {
        return hg.range(a.length)
    }

    function oe(a) {
        for (var b = -1, c = a[0].length, d = []; ++b < c;)d[b] = 0;
        return d
    }

    function pe(a) {
        for (var b, c = 1, d = 0, e = a[0][1], f = a.length; f > c; ++c)(b = a[c][1]) > e && (d = c, e = b);
        return d
    }

    function qe(a) {
        return a.reduce(re, 0)
    }

    function re(a, b) {
        return a + b[1]
    }

    function se(a, b) {
        return te(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1))
    }

    function te(a, b) {
        for (var c = -1, d = +a[0], e = (a[1] - d) / b, f = []; ++c <= b;)f[c] = e * c + d;
        return f
    }

    function ue(a) {
        return [hg.min(a), hg.max(a)]
    }

    function ve(a, b) {
        return a.value - b.value
    }

    function we(a, b) {
        var c = a._pack_next;
        a._pack_next = b, b._pack_prev = a, b._pack_next = c, c._pack_prev = b
    }

    function xe(a, b) {
        a._pack_next = b, b._pack_prev = a
    }

    function ye(a, b) {
        var c = b.x - a.x, d = b.y - a.y, e = a.r + b.r;
        return .999 * e * e > c * c + d * d
    }

    function ze(a) {
        function b(a) {
            k = Math.min(a.x - a.r, k), l = Math.max(a.x + a.r, l), m = Math.min(a.y - a.r, m), n = Math.max(a.y + a.r, n)
        }

        if ((c = a.children) && (j = c.length)) {
            var c, d, e, f, g, h, i, j, k = 1 / 0, l = -(1 / 0), m = 1 / 0, n = -(1 / 0);
            if (c.forEach(Ae), d = c[0], d.x = -d.r, d.y = 0, b(d), j > 1 && (e = c[1], e.x = e.r, e.y = 0, b(e), j > 2))for (f = c[2], De(d, e, f), b(f), we(d, f), d._pack_prev = f, we(f, e), e = d._pack_next, g = 3; j > g; g++) {
                De(d, e, f = c[g]);
                var o = 0, p = 1, q = 1;
                for (h = e._pack_next; h !== e; h = h._pack_next, p++)if (ye(h, f)) {
                    o = 1;
                    break
                }
                if (1 == o)for (i = d._pack_prev; i !== h._pack_prev && !ye(i, f); i = i._pack_prev, q++);
                o ? (q > p || p == q && e.r < d.r ? xe(d, e = h) : xe(d = i, e), g--) : (we(d, f), e = f, b(f))
            }
            var r = (k + l) / 2, s = (m + n) / 2, t = 0;
            for (g = 0; j > g; g++)f = c[g], f.x -= r, f.y -= s, t = Math.max(t, f.r + Math.sqrt(f.x * f.x + f.y * f.y));
            a.r = t, c.forEach(Be)
        }
    }

    function Ae(a) {
        a._pack_next = a._pack_prev = a
    }

    function Be(a) {
        delete a._pack_next, delete a._pack_prev
    }

    function Ce(a, b, c, d) {
        var e = a.children;
        if (a.x = b += d * a.x, a.y = c += d * a.y, a.r *= d, e)for (var f = -1,
                                                                         g = e.length; ++f < g;)Ce(e[f], b, c, d)
    }

    function De(a, b, c) {
        var d = a.r + c.r, e = b.x - a.x, f = b.y - a.y;
        if (d && (e || f)) {
            var g = b.r + c.r, h = e * e + f * f;
            g *= g, d *= d;
            var i = .5 + (d - g) / (2 * h),
                j = Math.sqrt(Math.max(0, 2 * g * (d + h) - (d -= h) * d - g * g)) / (2 * h);
            c.x = a.x + i * e + j * f, c.y = a.y + i * f - j * e
        } else c.x = a.x + d, c.y = a.y
    }

    function Ee(a, b) {
        return a.parent == b.parent ? 1 : 2
    }

    function Fe(a) {
        var b = a.children;
        return b.length ? b[0] : a.t
    }

    function Ge(a) {
        var b, c = a.children;
        return (b = c.length) ? c[b - 1] : a.t
    }

    function He(a, b, c) {
        var d = c / (b.i - a.i);
        b.c -= d, b.s += c, a.c += d, b.z += c, b.m += c
    }

    function Ie(a) {
        for (var b, c = 0, d = 0, e = a.children,
                 f = e.length; --f >= 0;)b = e[f], b.z += c, b.m += c, c += b.s + (d += b.c)
    }

    function Je(a, b, c) {
        return a.a.parent === b.parent ? a.a : c
    }

    function Ke(a) {
        return 1 + hg.max(a, function (a) {
                return a.y
            })
    }

    function Le(a) {
        return a.reduce(function (a, b) {
                return a + b.x
            }, 0) / a.length
    }

    function Me(a) {
        var b = a.children;
        return b && b.length ? Me(b[0]) : a
    }

    function Ne(a) {
        var b, c = a.children;
        return c && (b = c.length) ? Ne(c[b - 1]) : a
    }

    function Oe(a) {
        return {x: a.x, y: a.y, dx: a.dx, dy: a.dy}
    }

    function Pe(a, b) {
        var c = a.x + b[3], d = a.y + b[0], e = a.dx - b[1] - b[3], f = a.dy - b[0] - b[2];
        return 0 > e && (c += e / 2, e = 0), 0 > f && (d += f / 2, f = 0), {x: c, y: d, dx: e, dy: f}
    }

    function Qe(a) {
        var b = a[0], c = a[a.length - 1];
        return c > b ? [b, c] : [c, b]
    }

    function Re(a) {
        return a.rangeExtent ? a.rangeExtent() : Qe(a.range())
    }

    function Se(a, b, c, d) {
        var e = c(a[0], a[1]), f = d(b[0], b[1]);
        return function (a) {
            return f(e(a))
        }
    }

    function Te(a, b) {
        var c, d = 0, e = a.length - 1, f = a[d], g = a[e];
        return f > g && (c = d, d = e, e = c, c = f, f = g, g = c), a[d] = b.floor(f), a[e] = b.ceil(g), a
    }

    function Ue(a) {
        return a ? {
            floor: function (b) {
                return Math.floor(b / a) * a
            }, ceil: function (b) {
                return Math.ceil(b / a) * a
            }
        } : wi
    }

    function Ve(a, b, c, d) {
        var e = [], f = [], g = 0, h = Math.min(a.length, b.length) - 1;
        for (a[h] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse()); ++g <= h;)e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
        return function (b) {
            var c = hg.bisect(a, b, 1, h) - 1;
            return f[c](e[c](b))
        }
    }

    function We(a, b, c, d) {
        function e() {
            var e = Math.min(a.length, b.length) > 2 ? Ve : Se, i = d ? Wd : Vd;
            return g = e(a, b, i, c), h = e(b, a, i, sd), f
        }

        function f(a) {
            return g(a)
        }

        var g, h;
        return f.invert = function (a) {
            return h(a)
        }, f.domain = function (b) {
            return arguments.length ? (a = b.map(Number), e()) : a
        }, f.range = function (a) {
            return arguments.length ? (b = a, e()) : b
        }, f.rangeRound = function (a) {
            return f.range(a).interpolate(Kd)
        }, f.clamp = function (a) {
            return arguments.length ? (d = a, e()) : d
        }, f.interpolate = function (a) {
            return arguments.length ? (c = a, e()) : c
        }, f.ticks = function (b) {
            return $e(a, b)
        }, f.tickFormat = function (b, c) {
            return _e(a, b, c)
        }, f.nice = function (b) {
            return Ye(a, b), e()
        }, f.copy = function () {
            return We(a, b, c, d)
        }, e()
    }

    function Xe(a, b) {
        return hg.rebind(a, b, "range", "rangeRound", "interpolate", "clamp")
    }

    function Ye(a, b) {
        return Te(a, Ue(Ze(a, b)[2])), Te(a, Ue(Ze(a, b)[2])), a
    }

    function Ze(a, b) {
        null == b && (b = 10);
        var c = Qe(a), d = c[1] - c[0], e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)), f = b / d * e;
        return .15 >= f ? e *= 10 : .35 >= f ? e *= 5 : .75 >= f && (e *= 2), c[0] = Math.ceil(c[0] / e) * e, c[1] = Math.floor(c[1] / e) * e + .5 * e, c[2] = e, c
    }

    function $e(a, b) {
        return hg.range.apply(hg, Ze(a, b))
    }

    function _e(a, b, c) {
        var d = Ze(a, b);
        if (c) {
            var e = kh.exec(c);
            if (e.shift(), "s" === e[8]) {
                var f = hg.formatPrefix(Math.max(tg(d[0]), tg(d[1])));
                return e[7] || (e[7] = "." + af(f.scale(d[2]))), e[8] = "f", c = hg.format(e.join("")), function (a) {
                    return c(f.scale(a)) + f.symbol
                }
            }
            e[7] || (e[7] = "." + bf(e[8], d)), c = e.join("")
        } else c = ",." + af(d[2]) + "f";
        return hg.format(c)
    }

    function af(a) {
        return -Math.floor(Math.log(a) / Math.LN10 + .01)
    }

    function bf(a, b) {
        var c = af(b[2]);
        return a in xi ? Math.abs(c - af(Math.max(tg(b[0]), tg(b[1])))) + +("e" !== a) : c - 2 * ("%" === a)
    }

    function cf(a, b, c, d) {
        function e(a) {
            return (c ? Math.log(0 > a ? 0 : a) : -Math.log(a > 0 ? 0 : -a)) / Math.log(b)
        }

        function f(a) {
            return c ? Math.pow(b, a) : -Math.pow(b, -a)
        }

        function g(b) {
            return a(e(b))
        }

        return g.invert = function (b) {
            return f(a.invert(b))
        }, g.domain = function (b) {
            return arguments.length ? (c = b[0] >= 0, a.domain((d = b.map(Number)).map(e)), g) : d
        }, g.base = function (c) {
            return arguments.length ? (b = +c, a.domain(d.map(e)), g) : b
        }, g.nice = function () {
            var b = Te(d.map(e), c ? Math : zi);
            return a.domain(b), d = b.map(f), g
        }, g.ticks = function () {
            var a = Qe(d), g = [], h = a[0], i = a[1], j = Math.floor(e(h)), k = Math.ceil(e(i)), l = b % 1 ? 2 : b;
            if (isFinite(k - j)) {
                if (c) {
                    for (; k > j; j++)for (var m = 1; l > m; m++)g.push(f(j) * m);
                    g.push(f(j))
                } else for (g.push(f(j)); j++ < k;)for (var m = l - 1; m > 0; m--)g.push(f(j) * m);
                for (j = 0; g[j] < h; j++);
                for (k = g.length; g[k - 1] > i; k--);
                g = g.slice(j, k)
            }
            return g
        }, g.tickFormat = function (a, c) {
            if (!arguments.length)return yi;
            arguments.length < 2 ? c = yi : "function" != typeof c && (c = hg.format(c));
            var d = Math.max(1, b * a / g.ticks().length);
            return function (a) {
                var g = a / f(Math.round(e(a)));
                return b - .5 > g * b && (g *= b), d >= g ? c(a) : ""
            }
        }, g.copy = function () {
            return cf(a.copy(), b, c, d)
        }, Xe(g, a)
    }

    function df(a, b, c) {
        function d(b) {
            return a(e(b))
        }

        var e = ef(b), f = ef(1 / b);
        return d.invert = function (b) {
            return f(a.invert(b))
        }, d.domain = function (b) {
            return arguments.length ? (a.domain((c = b.map(Number)).map(e)), d) : c
        }, d.ticks = function (a) {
            return $e(c, a)
        }, d.tickFormat = function (a, b) {
            return _e(c, a, b)
        }, d.nice = function (a) {
            return d.domain(Ye(c, a))
        }, d.exponent = function (g) {
            return arguments.length ? (e = ef(b = g), f = ef(1 / b), a.domain(c.map(e)), d) : b
        }, d.copy = function () {
            return df(a.copy(), b, c)
        }, Xe(d, a)
    }

    function ef(a) {
        return function (b) {
            return 0 > b ? -Math.pow(-b, a) : Math.pow(b, a)
        }
    }

    function ff(a, b) {
        function c(c) {
            return f[((e.get(c) || ("range" === b.t ? e.set(c, a.push(c)) : NaN)) - 1) % f.length]
        }

        function d(b, c) {
            return hg.range(a.length).map(function (a) {
                return b + c * a
            })
        }

        var e, f, g;
        return c.domain = function (d) {
            if (!arguments.length)return a;
            a = [], e = new j;
            for (var f, g = -1, h = d.length; ++g < h;)e.has(f = d[g]) || e.set(f, a.push(f));
            return c[b.t].apply(c, b.a)
        }, c.range = function (a) {
            return arguments.length ? (f = a, g = 0, b = {t: "range", a: arguments}, c) : f
        }, c.rangePoints = function (e, h) {
            arguments.length < 2 && (h = 0);
            var i = e[0], j = e[1], k = a.length < 2 ? (i = (i + j) / 2, 0) : (j - i) / (a.length - 1 + h);
            return f = d(i + k * h / 2, k), g = 0, b = {t: "rangePoints", a: arguments}, c
        }, c.rangeRoundPoints = function (e, h) {
            arguments.length < 2 && (h = 0);
            var i = e[0], j = e[1],
                k = a.length < 2 ? (i = j = Math.round((i + j) / 2), 0) : (j - i) / (a.length - 1 + h) | 0;
            return f = d(i + Math.round(k * h / 2 + (j - i - (a.length - 1 + h) * k) / 2), k), g = 0, b = {
                t: "rangeRoundPoints",
                a: arguments
            }, c
        }, c.rangeBands = function (e, h, i) {
            arguments.length < 2 && (h = 0), arguments.length < 3 && (i = h);
            var j = e[1] < e[0], k = e[j - 0], l = e[1 - j], m = (l - k) / (a.length - h + 2 * i);
            return f = d(k + m * i, m), j && f.reverse(), g = m * (1 - h), b = {t: "rangeBands", a: arguments}, c
        }, c.rangeRoundBands = function (e, h, i) {
            arguments.length < 2 && (h = 0), arguments.length < 3 && (i = h);
            var j = e[1] < e[0], k = e[j - 0], l = e[1 - j], m = Math.floor((l - k) / (a.length - h + 2 * i));
            return f = d(k + Math.round((l - k - (a.length - h) * m) / 2), m), j && f.reverse(), g = Math.round(m * (1 - h)), b = {
                t: "rangeRoundBands",
                a: arguments
            }, c
        }, c.rangeBand = function () {
            return g
        }, c.rangeExtent = function () {
            return Qe(b.a[0])
        }, c.copy = function () {
            return ff(a, b)
        }, c.domain(a)
    }

    function gf(a, b) {
        function f() {
            var c = 0, d = b.length;
            for (h = []; ++c < d;)h[c - 1] = hg.quantile(a, c / d);
            return g
        }

        function g(a) {
            return isNaN(a = +a) ? void 0 : b[hg.bisect(h, a)]
        }

        var h;
        return g.domain = function (b) {
            return arguments.length ? (a = b.map(d).filter(e).sort(c), f()) : a
        }, g.range = function (a) {
            return arguments.length ? (b = a, f()) : b
        }, g.quantiles = function () {
            return h
        }, g.invertExtent = function (c) {
            return c = b.indexOf(c), 0 > c ? [NaN, NaN] : [c > 0 ? h[c - 1] : a[0], c < h.length ? h[c] : a[a.length - 1]]
        }, g.copy = function () {
            return gf(a, b)
        }, f()
    }

    function hf(a, b, c) {
        function d(b) {
            return c[Math.max(0, Math.min(g, Math.floor(f * (b - a))))]
        }

        function e() {
            return f = c.length / (b - a), g = c.length - 1, d
        }

        var f, g;
        return d.domain = function (c) {
            return arguments.length ? (a = +c[0], b = +c[c.length - 1], e()) : [a, b]
        }, d.range = function (a) {
            return arguments.length ? (c = a, e()) : c
        }, d.invertExtent = function (b) {
            return b = c.indexOf(b), b = 0 > b ? NaN : b / f + a, [b, b + 1 / f]
        }, d.copy = function () {
            return hf(a, b, c)
        }, e()
    }

    function jf(a, b) {
        function c(c) {
            return c >= c ? b[hg.bisect(a, c)] : void 0
        }

        return c.domain = function (b) {
            return arguments.length ? (a = b, c) : a
        }, c.range = function (a) {
            return arguments.length ? (b = a, c) : b
        }, c.invertExtent = function (c) {
            return c = b.indexOf(c), [a[c - 1], a[c]]
        }, c.copy = function () {
            return jf(a, b)
        }, c
    }

    function kf(a) {
        function b(a) {
            return +a
        }

        return b.invert = b, b.domain = b.range = function (c) {
            return arguments.length ? (a = c.map(b), b) : a
        }, b.ticks = function (b) {
            return $e(a, b)
        }, b.tickFormat = function (b, c) {
            return _e(a, b, c)
        }, b.copy = function () {
            return kf(a)
        }, b
    }

    function lf() {
        return 0
    }

    function mf(a) {
        return a.innerRadius
    }

    function nf(a) {
        return a.outerRadius
    }

    function of(a) {
        return a.startAngle
    }

    function pf(a) {
        return a.endAngle
    }

    function qf(a) {
        return a && a.padAngle
    }

    function rf(a, b, c, d) {
        return (a - c) * b - (b - d) * a > 0 ? 0 : 1
    }

    function sf(a, b, c, d, e) {
        var f = a[0] - b[0], g = a[1] - b[1], h = (e ? d : -d) / Math.sqrt(f * f + g * g), i = h * g, j = -h * f,
            k = a[0] + i, l = a[1] + j, m = b[0] + i, n = b[1] + j, o = (k + m) / 2, p = (l + n) / 2, q = m - k,
            r = n - l, s = q * q + r * r, t = c - d, u = k * n - m * l,
            v = (0 > r ? -1 : 1) * Math.sqrt(Math.max(0, t * t * s - u * u)), w = (u * r - q * v) / s,
            x = (-u * q - r * v) / s, y = (u * r + q * v) / s, z = (-u * q + r * v) / s, A = w - o, B = x - p,
            C = y - o, D = z - p;
        return A * A + B * B > C * C + D * D && (w = y, x = z), [[w - i, x - j], [w * c / t, x * c / t]]
    }

    function tf(a) {
        function b(b) {
            function g() {
                j.push("M", f(a(k), h))
            }

            for (var i, j = [], k = [], l = -1, m = b.length, n = Aa(c),
                     o = Aa(d); ++l < m;)e.call(this, i = b[l], l) ? k.push([+n.call(this, i, l), +o.call(this, i, l)]) : k.length && (g(), k = []);
            return k.length && g(), j.length ? j.join("") : null
        }

        var c = Cc, d = Dc, e = Db, f = uf, g = f.key, h = .7;
        return b.x = function (a) {
            return arguments.length ? (c = a, b) : c
        }, b.y = function (a) {
            return arguments.length ? (d = a, b) : d
        }, b.defined = function (a) {
            return arguments.length ? (e = a, b) : e
        }, b.interpolate = function (a) {
            return arguments.length ? (g = "function" == typeof a ? f = a : (f = Fi.get(a) || uf).key, b) : g
        }, b.tension = function (a) {
            return arguments.length ? (h = a, b) : h
        }, b
    }

    function uf(a) {
        return a.length > 1 ? a.join("L") : a + "Z"
    }

    function vf(a) {
        return a.join("L") + "Z"
    }

    function wf(a) {
        for (var b = 0, c = a.length, d = a[0],
                 e = [d[0], ",", d[1]]; ++b < c;)e.push("H", (d[0] + (d = a[b])[0]) / 2, "V", d[1]);
        return c > 1 && e.push("H", d[0]), e.join("")
    }

    function xf(a) {
        for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;)e.push("V", (d = a[b])[1], "H", d[0]);
        return e.join("")
    }

    function yf(a) {
        for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;)e.push("H", (d = a[b])[0], "V", d[1]);
        return e.join("")
    }

    function zf(a, b) {
        return a.length < 4 ? uf(a) : a[1] + Cf(a.slice(1, -1), Df(a, b))
    }

    function Af(a, b) {
        return a.length < 3 ? vf(a) : a[0] + Cf((a.push(a[0]), a), Df([a[a.length - 2]].concat(a, [a[1]]), b))
    }

    function Bf(a, b) {
        return a.length < 3 ? uf(a) : a[0] + Cf(a, Df(a, b))
    }

    function Cf(a, b) {
        if (b.length < 1 || a.length != b.length && a.length != b.length + 2)return uf(a);
        var c = a.length != b.length, d = "", e = a[0], f = a[1], g = b[0], h = g, i = 1;
        if (c && (d += "Q" + (f[0] - 2 * g[0] / 3) + "," + (f[1] - 2 * g[1] / 3) + "," + f[0] + "," + f[1], e = a[1], i = 2), b.length > 1) {
            h = b[1], f = a[i], i++, d += "C" + (e[0] + g[0]) + "," + (e[1] + g[1]) + "," + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1];
            for (var j = 2; j < b.length; j++, i++)f = a[i], h = b[j], d += "S" + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1]
        }
        if (c) {
            var k = a[i];
            d += "Q" + (f[0] + 2 * h[0] / 3) + "," + (f[1] + 2 * h[1] / 3) + "," + k[0] + "," + k[1]
        }
        return d
    }

    function Df(a, b) {
        for (var c, d = [], e = (1 - b) / 2, f = a[0], g = a[1], h = 1,
                 i = a.length; ++h < i;)c = f, f = g, g = a[h], d.push([e * (g[0] - c[0]), e * (g[1] - c[1])]);
        return d
    }

    function Ef(a) {
        if (a.length < 3)return uf(a);
        var b = 1, c = a.length, d = a[0], e = d[0], f = d[1], g = [e, e, e, (d = a[1])[0]], h = [f, f, f, d[1]],
            i = [e, ",", f, "L", If(Ii, g), ",", If(Ii, h)];
        for (a.push(a[c - 1]); ++b <= c;)d = a[b], g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), Jf(i, g, h);
        return a.pop(), i.push("L", d), i.join("")
    }

    function Ff(a) {
        if (a.length < 4)return uf(a);
        for (var b, c = [], d = -1, e = a.length, f = [0], g = [0]; ++d < 3;)b = a[d], f.push(b[0]), g.push(b[1]);
        for (c.push(If(Ii, f) + "," + If(Ii, g)), --d; ++d < e;)b = a[d], f.shift(), f.push(b[0]), g.shift(), g.push(b[1]), Jf(c, f, g);
        return c.join("")
    }

    function Gf(a) {
        for (var b, c, d = -1, e = a.length, f = e + 4, g = [],
                 h = []; ++d < 4;)c = a[d % e], g.push(c[0]), h.push(c[1]);
        for (b = [If(Ii, g), ",", If(Ii, h)], --d; ++d < f;)c = a[d % e], g.shift(), g.push(c[0]), h.shift(), h.push(c[1]), Jf(b, g, h);
        return b.join("")
    }

    function Hf(a, b) {
        var c = a.length - 1;
        if (c)for (var d, e, f = a[0][0], g = a[0][1], h = a[c][0] - f, i = a[c][1] - g,
                       j = -1; ++j <= c;)d = a[j], e = j / c, d[0] = b * d[0] + (1 - b) * (f + e * h), d[1] = b * d[1] + (1 - b) * (g + e * i);
        return Ef(a)
    }

    function If(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
    }

    function Jf(a, b, c) {
        a.push("C", If(Gi, b), ",", If(Gi, c), ",", If(Hi, b), ",", If(Hi, c), ",", If(Ii, b), ",", If(Ii, c))
    }

    function Kf(a, b) {
        return (b[1] - a[1]) / (b[0] - a[0])
    }

    function Lf(a) {
        for (var b = 0, c = a.length - 1, d = [], e = a[0], f = a[1],
                 g = d[0] = Kf(e, f); ++b < c;)d[b] = (g + (g = Kf(e = f, f = a[b + 1]))) / 2;
        return d[b] = g, d
    }

    function Mf(a) {
        for (var b, c, d, e, f = [], g = Lf(a), h = -1,
                 i = a.length - 1; ++h < i;)b = Kf(a[h], a[h + 1]), tg(b) < Jg ? g[h] = g[h + 1] = 0 : (c = g[h] / b, d = g[h + 1] / b, e = c * c + d * d, e > 9 && (e = 3 * b / Math.sqrt(e), g[h] = e * c, g[h + 1] = e * d));
        for (h = -1; ++h <= i;)e = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h])), f.push([e || 0, g[h] * e || 0]);
        return f
    }

    function Nf(a) {
        return a.length < 3 ? uf(a) : a[0] + Cf(a, Mf(a))
    }

    function Of(a) {
        for (var b, c, d, e = -1,
                 f = a.length; ++e < f;)b = a[e], c = b[0], d = b[1] - Og, b[0] = c * Math.cos(d), b[1] = c * Math.sin(d);
        return a
    }

    function Pf(a) {
        function b(b) {
            function i() {
                p.push("M", h(a(r), l), k, j(a(q.reverse()), l), "Z")
            }

            for (var m, n, o, p = [], q = [], r = [], s = -1, t = b.length, u = Aa(c), v = Aa(e),
                     w = c === d ? function () {
                         return n
                     } : Aa(d), x = e === f ? function () {
                    return o
                } : Aa(f); ++s < t;)g.call(this, m = b[s], s) ? (q.push([n = +u.call(this, m, s), o = +v.call(this, m, s)]), r.push([+w.call(this, m, s), +x.call(this, m, s)])) : q.length && (i(), q = [], r = []);
            return q.length && i(), p.length ? p.join("") : null
        }

        var c = Cc, d = Cc, e = 0, f = Dc, g = Db, h = uf, i = h.key, j = h, k = "L", l = .7;
        return b.x = function (a) {
            return arguments.length ? (c = d = a, b) : d
        }, b.x0 = function (a) {
            return arguments.length ? (c = a, b) : c
        }, b.x1 = function (a) {
            return arguments.length ? (d = a, b) : d
        }, b.y = function (a) {
            return arguments.length ? (e = f = a, b) : f
        }, b.y0 = function (a) {
            return arguments.length ? (e = a, b) : e
        }, b.y1 = function (a) {
            return arguments.length ? (f = a, b) : f
        }, b.defined = function (a) {
            return arguments.length ? (g = a, b) : g
        }, b.interpolate = function (a) {
            return arguments.length ? (i = "function" == typeof a ? h = a : (h = Fi.get(a) || uf).key, j = h.reverse || h, k = h.closed ? "M" : "L", b) : i
        }, b.tension = function (a) {
            return arguments.length ? (l = a, b) : l
        }, b
    }

    function Qf(a) {
        return a.radius
    }

    function Rf(a) {
        return [a.x, a.y]
    }

    function Sf(a) {
        return function () {
            var b = a.apply(this, arguments), c = b[0], d = b[1] - Og;
            return [c * Math.cos(d), c * Math.sin(d)]
        }
    }

    function Tf() {
        return 64
    }

    function Uf() {
        return "circle"
    }

    function Vf(a) {
        var b = Math.sqrt(a / Lg);
        return "M0," + b + "A" + b + "," + b + " 0 1,1 0," + -b + "A" + b + "," + b + " 0 1,1 0," + b + "Z"
    }

    function Wf(a) {
        return function () {
            var b, c, d;
            (b = this[a]) && (d = b[c = b.active]) && (d.timer.c = null, d.timer.t = NaN, --b.count ? delete b[c] : delete this[a], b.active += .5, d.event && d.event.interrupt.call(this, this.__data__, d.index))
        }
    }

    function Xf(a, b, c) {
        return yg(a, Pi), a.namespace = b, a.id = c, a
    }

    function Yf(a, b, c, d) {
        var e = a.id, f = a.namespace;
        return R(a, "function" == typeof c ? function (a, g, h) {
            a[f][e].tween.set(b, d(c.call(a, a.__data__, g, h)))
        } : (c = d(c), function (a) {
            a[f][e].tween.set(b, c)
        }))
    }

    function Zf(a) {
        return null == a && (a = ""), function () {
            this.textContent = a
        }
    }

    function $f(a) {
        return null == a ? "__transition__" : "__transition_" + a + "__"
    }

    function _f(a, b, c, d, e) {
        function f(a) {
            var b = p.delay;
            return k.t = b + i, a >= b ? g(a - b) : void(k.c = g)
        }

        function g(c) {
            var e = o.active, f = o[e];
            f && (f.timer.c = null, f.timer.t = NaN, --o.count, delete o[e], f.event && f.event.interrupt.call(a, a.__data__, f.index));
            for (var g in o)if (d > +g) {
                var j = o[g];
                j.timer.c = null, j.timer.t = NaN, --o.count, delete o[g]
            }
            k.c = h, Fa(function () {
                return k.c && h(c || 1) && (k.c = null, k.t = NaN), 1
            }, 0, i), o.active = d, p.event && p.event.start.call(a, a.__data__, b), n = [], p.tween.forEach(function (c, d) {
                (d = d.call(a, a.__data__, b)) && n.push(d)
            }), m = p.ease, l = p.duration
        }

        function h(e) {
            for (var f = e / l, g = m(f), h = n.length; h > 0;)n[--h].call(a, g);
            return f >= 1 ? (p.event && p.event.end.call(a, a.__data__, b), --o.count ? delete o[d] : delete a[c], 1) : void 0
        }

        var i, k, l, m, n, o = a[c] || (a[c] = {active: 0, count: 0}), p = o[d];
        p || (i = e.time, k = Fa(f, 0, i), p = o[d] = {
            tween: new j,
            time: i,
            timer: k,
            delay: e.delay,
            duration: e.duration,
            ease: e.ease,
            index: b
        }, e = null, ++o.count)
    }

    function ag(a, b, c) {
        a.attr("transform", function (a) {
            var d = b(a);
            return "translate(" + (isFinite(d) ? d : c(a)) + ",0)"
        })
    }

    function bg(a, b, c) {
        a.attr("transform", function (a) {
            var d = b(a);
            return "translate(0," + (isFinite(d) ? d : c(a)) + ")"
        })
    }

    function cg(a) {
        return a.toISOString()
    }

    function dg(a, b, c) {
        function d(b) {
            return a(b)
        }

        function e(a, c) {
            var d = a[1] - a[0], e = d / c, f = hg.bisect(Yi, e);
            return f == Yi.length ? [b.year, Ze(a.map(function (a) {
                return a / 31536e6
            }), c)[2]] : f ? b[e / Yi[f - 1] < Yi[f] / e ? f - 1 : f] : [_i, Ze(a, c)[2]]
        }

        return d.invert = function (b) {
            return eg(a.invert(b))
        }, d.domain = function (b) {
            return arguments.length ? (a.domain(b), d) : a.domain().map(eg)
        }, d.nice = function (a, b) {
            function c(c) {
                return !isNaN(c) && !a.range(c, eg(+c + 1), b).length
            }

            var f = d.domain(), g = Qe(f), h = null == a ? e(g, 10) : "number" == typeof a && e(g, a);
            return h && (a = h[0], b = h[1]), d.domain(Te(f, b > 1 ? {
                floor: function (b) {
                    for (; c(b = a.floor(b));)b = eg(b - 1);
                    return b
                }, ceil: function (b) {
                    for (; c(b = a.ceil(b));)b = eg(+b + 1);
                    return b
                }
            } : a))
        }, d.ticks = function (a, b) {
            var c = Qe(d.domain()),
                f = null == a ? e(c, 10) : "number" == typeof a ? e(c, a) : !a.range && [{range: a}, b];
            return f && (a = f[0], b = f[1]), a.range(c[0], eg(+c[1] + 1), 1 > b ? 1 : b)
        }, d.tickFormat = function () {
            return c
        }, d.copy = function () {
            return dg(a.copy(), b, c)
        }, Xe(d, a)
    }

    function eg(a) {
        return new Date(a)
    }

    function fg(a) {
        return JSON.parse(a.responseText)
    }

    function gg(a) {
        var b = kg.createRange();
        return b.selectNode(kg.body), b.createContextualFragment(a.responseText)
    }

    var hg = {version: "3.5.12"}, ig = [].slice, jg = function (a) {
        return ig.call(a)
    }, kg = this.document;
    if (kg)try {
        jg(kg.documentElement.childNodes)[0].nodeType
    } catch (lg) {
        jg = function (a) {
            for (var b = a.length, c = new Array(b); b--;)c[b] = a[b];
            return c
        }
    }
    if (Date.now || (Date.now = function () {
            return +new Date
        }), kg)try {
        kg.createElement("DIV").style.setProperty("opacity", 0, "")
    } catch (mg) {
        var ng = this.Element.prototype, og = ng.setAttribute, pg = ng.setAttributeNS,
            qg = this.CSSStyleDeclaration.prototype, rg = qg.setProperty;
        ng.setAttribute = function (a, b) {
            og.call(this, a, b + "")
        }, ng.setAttributeNS = function (a, b, c) {
            pg.call(this, a, b, c + "")
        }, qg.setProperty = function (a, b, c) {
            rg.call(this, a, b + "", c)
        }
    }
    hg.ascending = c, hg.descending = function (a, b) {
        return a > b ? -1 : b > a ? 1 : b >= a ? 0 : NaN
    }, hg.min = function (a, b) {
        var c, d, e = -1, f = a.length;
        if (1 === arguments.length) {
            for (; ++e < f;)if (null != (d = a[e]) && d >= d) {
                c = d;
                break
            }
            for (; ++e < f;)null != (d = a[e]) && c > d && (c = d)
        } else {
            for (; ++e < f;)if (null != (d = b.call(a, a[e], e)) && d >= d) {
                c = d;
                break
            }
            for (; ++e < f;)null != (d = b.call(a, a[e], e)) && c > d && (c = d)
        }
        return c
    }, hg.max = function (a, b) {
        var c, d, e = -1, f = a.length;
        if (1 === arguments.length) {
            for (; ++e < f;)if (null != (d = a[e]) && d >= d) {
                c = d;
                break
            }
            for (; ++e < f;)null != (d = a[e]) && d > c && (c = d)
        } else {
            for (; ++e < f;)if (null != (d = b.call(a, a[e], e)) && d >= d) {
                c = d;
                break
            }
            for (; ++e < f;)null != (d = b.call(a, a[e], e)) && d > c && (c = d)
        }
        return c
    }, hg.extent = function (a, b) {
        var c, d, e, f = -1, g = a.length;
        if (1 === arguments.length) {
            for (; ++f < g;)if (null != (d = a[f]) && d >= d) {
                c = e = d;
                break
            }
            for (; ++f < g;)null != (d = a[f]) && (c > d && (c = d), d > e && (e = d))
        } else {
            for (; ++f < g;)if (null != (d = b.call(a, a[f], f)) && d >= d) {
                c = e = d;
                break
            }
            for (; ++f < g;)null != (d = b.call(a, a[f], f)) && (c > d && (c = d), d > e && (e = d))
        }
        return [c, e]
    }, hg.sum = function (a, b) {
        var c, d = 0, f = a.length, g = -1;
        if (1 === arguments.length)for (; ++g < f;)e(c = +a[g]) && (d += c); else for (; ++g < f;)e(c = +b.call(a, a[g], g)) && (d += c);
        return d
    }, hg.mean = function (a, b) {
        var c, f = 0, g = a.length, h = -1, i = g;
        if (1 === arguments.length)for (; ++h < g;)e(c = d(a[h])) ? f += c : --i; else for (; ++h < g;)e(c = d(b.call(a, a[h], h))) ? f += c : --i;
        return i ? f / i : void 0
    }, hg.quantile = function (a, b) {
        var c = (a.length - 1) * b + 1, d = Math.floor(c), e = +a[d - 1], f = c - d;
        return f ? e + f * (a[d] - e) : e
    }, hg.median = function (a, b) {
        var f, g = [], h = a.length, i = -1;
        if (1 === arguments.length)for (; ++i < h;)e(f = d(a[i])) && g.push(f); else for (; ++i < h;)e(f = d(b.call(a, a[i], i))) && g.push(f);
        return g.length ? hg.quantile(g.sort(c), .5) : void 0
    }, hg.variance = function (a, b) {
        var c, f, g = a.length, h = 0, i = 0, j = -1, k = 0;
        if (1 === arguments.length)for (; ++j < g;)e(c = d(a[j])) && (f = c - h, h += f / ++k, i += f * (c - h)); else for (; ++j < g;)e(c = d(b.call(a, a[j], j))) && (f = c - h, h += f / ++k, i += f * (c - h));
        return k > 1 ? i / (k - 1) : void 0
    }, hg.deviation = function () {
        var a = hg.variance.apply(this, arguments);
        return a ? Math.sqrt(a) : a
    };
    var sg = f(c);
    hg.bisectLeft = sg.left, hg.bisect = hg.bisectRight = sg.right, hg.bisector = function (a) {
        return f(1 === a.length ? function (b, d) {
            return c(a(b), d)
        } : a)
    }, hg.shuffle = function (a, b, c) {
        (f = arguments.length) < 3 && (c = a.length, 2 > f && (b = 0));
        for (var d, e, f = c - b; f;)e = Math.random() * f-- | 0, d = a[f + b], a[f + b] = a[e + b], a[e + b] = d;
        return a
    }, hg.permute = function (a, b) {
        for (var c = b.length, d = new Array(c); c--;)d[c] = a[b[c]];
        return d
    }, hg.pairs = function (a) {
        for (var b, c = 0, d = a.length - 1, e = a[0], f = new Array(0 > d ? 0 : d); d > c;)f[c] = [b = e, e = a[++c]];
        return f
    }, hg.zip = function () {
        if (!(d = arguments.length))return [];
        for (var a = -1, b = hg.min(arguments, g), c = new Array(b); ++a < b;)for (var d, e = -1,
                                                                                       f = c[a] = new Array(d); ++e < d;)f[e] = arguments[e][a];
        return c
    }, hg.transpose = function (a) {
        return hg.zip.apply(hg, a)
    }, hg.keys = function (a) {
        var b = [];
        for (var c in a)b.push(c);
        return b
    }, hg.values = function (a) {
        var b = [];
        for (var c in a)b.push(a[c]);
        return b
    }, hg.entries = function (a) {
        var b = [];
        for (var c in a)b.push({key: c, value: a[c]});
        return b
    }, hg.merge = function (a) {
        for (var b, c, d, e = a.length, f = -1, g = 0; ++f < e;)g += a[f].length;
        for (c = new Array(g); --e >= 0;)for (d = a[e], b = d.length; --b >= 0;)c[--g] = d[b];
        return c
    };
    var tg = Math.abs;
    hg.range = function (a, b, c) {
        if (arguments.length < 3 && (c = 1, arguments.length < 2 && (b = a, a = 0)), (b - a) / c === 1 / 0)throw new Error("infinite range");
        var d, e = [], f = h(tg(c)), g = -1;
        if (a *= f, b *= f, c *= f, 0 > c)for (; (d = a + c * ++g) > b;)e.push(d / f); else for (; (d = a + c * ++g) < b;)e.push(d / f);
        return e
    }, hg.map = function (a, b) {
        var c = new j;
        if (a instanceof j) a.forEach(function (a, b) {
            c.set(a, b)
        }); else if (Array.isArray(a)) {
            var d, e = -1, f = a.length;
            if (1 === arguments.length)for (; ++e < f;)c.set(e, a[e]); else for (; ++e < f;)c.set(b.call(a, d = a[e], e), d)
        } else for (var g in a)c.set(g, a[g]);
        return c
    };
    var ug = "__proto__", vg = "\x00";
    i(j, {
        has: m, get: function (a) {
            return this._[k(a)]
        }, set: function (a, b) {
            return this._[k(a)] = b
        }, remove: n, keys: o, values: function () {
            var a = [];
            for (var b in this._)a.push(this._[b]);
            return a
        }, entries: function () {
            var a = [];
            for (var b in this._)a.push({key: l(b), value: this._[b]});
            return a
        }, size: p, empty: q, forEach: function (a) {
            for (var b in this._)a.call(this, l(b), this._[b])
        }
    }), hg.nest = function () {
        function a(b, g, h) {
            if (h >= f.length)return d ? d.call(e, g) : c ? g.sort(c) : g;
            for (var i, k, l, m, n = -1, o = g.length, p = f[h++],
                     q = new j; ++n < o;)(m = q.get(i = p(k = g[n]))) ? m.push(k) : q.set(i, [k]);
            return b ? (k = b(), l = function (c, d) {
                k.set(c, a(b, d, h))
            }) : (k = {}, l = function (c, d) {
                k[c] = a(b, d, h)
            }), q.forEach(l), k
        }

        function b(a, c) {
            if (c >= f.length)return a;
            var d = [], e = g[c++];
            return a.forEach(function (a, e) {
                d.push({key: a, values: b(e, c)})
            }), e ? d.sort(function (a, b) {
                return e(a.key, b.key)
            }) : d
        }

        var c, d, e = {}, f = [], g = [];
        return e.map = function (b, c) {
            return a(c, b, 0)
        }, e.entries = function (c) {
            return b(a(hg.map, c, 0), 0)
        }, e.key = function (a) {
            return f.push(a), e
        }, e.sortKeys = function (a) {
            return g[f.length - 1] = a, e
        }, e.sortValues = function (a) {
            return c = a, e
        }, e.rollup = function (a) {
            return d = a, e
        }, e
    }, hg.set = function (a) {
        var b = new r;
        if (a)for (var c = 0, d = a.length; d > c; ++c)b.add(a[c]);
        return b
    }, i(r, {
        has: m, add: function (a) {
            return this._[k(a += "")] = !0, a
        }, remove: n, values: o, size: p, empty: q, forEach: function (a) {
            for (var b in this._)a.call(this, l(b))
        }
    }), hg.behavior = {}, hg.rebind = function (a, b) {
        for (var c, d = 1, e = arguments.length; ++d < e;)a[c = arguments[d]] = t(a, b, b[c]);
        return a
    };
    var wg = ["webkit", "ms", "moz", "Moz", "o", "O"];
    hg.dispatch = function () {
        for (var a = new w, b = -1, c = arguments.length; ++b < c;)a[arguments[b]] = x(a);
        return a
    }, w.prototype.on = function (a, b) {
        var c = a.indexOf("."), d = "";
        if (c >= 0 && (d = a.slice(c + 1), a = a.slice(0, c)), a)return arguments.length < 2 ? this[a].on(d) : this[a].on(d, b);
        if (2 === arguments.length) {
            if (null == b)for (a in this)this.hasOwnProperty(a) && this[a].on(d, null);
            return this
        }
    }, hg.event = null, hg.requote = function (a) {
        return a.replace(xg, "\\$&")
    };
    var xg = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, yg = {}.__proto__ ? function (a, b) {
        a.__proto__ = b
    } : function (a, b) {
        for (var c in b)a[c] = b[c]
    }, zg = function (a, b) {
        return b.querySelector(a)
    }, Ag = function (a, b) {
        return b.querySelectorAll(a)
    }, Bg = function (a, b) {
        var c = a.matches || a[u(a, "matchesSelector")];
        return (Bg = function (a, b) {
            return c.call(a, b)
        })(a, b)
    };
    "function" == typeof Sizzle && (zg = function (a, b) {
        return Sizzle(a, b)[0] || null
    }, Ag = Sizzle, Bg = Sizzle.matchesSelector), hg.selection = function () {
        return hg.select(kg.documentElement)
    };
    var Cg = hg.selection.prototype = [];
    Cg.select = function (a) {
        var b, c, d, e, f = [];
        a = C(a);
        for (var g = -1, h = this.length; ++g < h;) {
            f.push(b = []), b.parentNode = (d = this[g]).parentNode;
            for (var i = -1,
                     j = d.length; ++i < j;)(e = d[i]) ? (b.push(c = a.call(e, e.__data__, i, g)), c && "__data__" in e && (c.__data__ = e.__data__)) : b.push(null)
        }
        return B(f)
    }, Cg.selectAll = function (a) {
        var b, c, d = [];
        a = D(a);
        for (var e = -1, f = this.length; ++e < f;)for (var g = this[e], h = -1,
                                                            i = g.length; ++h < i;)(c = g[h]) && (d.push(b = jg(a.call(c, c.__data__, h, e))), b.parentNode = c);
        return B(d)
    };
    var Dg = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    hg.ns = {
        prefix: Dg, qualify: function (a) {
            var b = a.indexOf(":"), c = a;
            return b >= 0 && "xmlns" !== (c = a.slice(0, b)) && (a = a.slice(b + 1)), Dg.hasOwnProperty(c) ? {
                space: Dg[c],
                local: a
            } : a
        }
    }, Cg.attr = function (a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) {
                var c = this.node();
                return a = hg.ns.qualify(a), a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
            }
            for (b in a)this.each(E(b, a[b]));
            return this
        }
        return this.each(E(a, b))
    }, Cg.classed = function (a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) {
                var c = this.node(), d = (a = H(a)).length, e = -1;
                if (b = c.classList) {
                    for (; ++e < d;)if (!b.contains(a[e]))return !1
                } else for (b = c.getAttribute("class"); ++e < d;)if (!G(a[e]).test(b))return !1;
                return !0
            }
            for (b in a)this.each(I(b, a[b]));
            return this
        }
        return this.each(I(a, b))
    }, Cg.style = function (a, c, d) {
        var e = arguments.length;
        if (3 > e) {
            if ("string" != typeof a) {
                2 > e && (c = "");
                for (d in a)this.each(K(d, a[d], c));
                return this
            }
            if (2 > e) {
                var f = this.node();
                return b(f).getComputedStyle(f, null).getPropertyValue(a)
            }
            d = ""
        }
        return this.each(K(a, c, d))
    }, Cg.property = function (a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a)return this.node()[a];
            for (b in a)this.each(L(b, a[b]));
            return this
        }
        return this.each(L(a, b))
    }, Cg.text = function (a) {
        return arguments.length ? this.each("function" == typeof a ? function () {
            var b = a.apply(this, arguments);
            this.textContent = null == b ? "" : b
        } : null == a ? function () {
            this.textContent = ""
        } : function () {
            this.textContent = a
        }) : this.node().textContent
    }, Cg.html = function (a) {
        return arguments.length ? this.each("function" == typeof a ? function () {
            var b = a.apply(this, arguments);
            this.innerHTML = null == b ? "" : b
        } : null == a ? function () {
            this.innerHTML = ""
        } : function () {
            this.innerHTML = a
        }) : this.node().innerHTML
    }, Cg.append = function (a) {
        return a = M(a), this.select(function () {
            return this.appendChild(a.apply(this, arguments))
        })
    }, Cg.insert = function (a, b) {
        return a = M(a), b = C(b), this.select(function () {
            return this.insertBefore(a.apply(this, arguments), b.apply(this, arguments) || null)
        })
    }, Cg.remove = function () {
        return this.each(N)
    }, Cg.data = function (a, b) {
        function c(a, c) {
            var d, e, f, g = a.length, l = c.length, m = Math.min(g, l), n = new Array(l), o = new Array(l),
                p = new Array(g);
            if (b) {
                var q, r = new j, s = new Array(g);
                for (d = -1; ++d < g;)(e = a[d]) && (r.has(q = b.call(e, e.__data__, d)) ? p[d] = e : r.set(q, e), s[d] = q);
                for (d = -1; ++d < l;)(e = r.get(q = b.call(c, f = c[d], d))) ? e !== !0 && (n[d] = e, e.__data__ = f) : o[d] = O(f), r.set(q, !0);
                for (d = -1; ++d < g;)d in s && r.get(s[d]) !== !0 && (p[d] = a[d])
            } else {
                for (d = -1; ++d < m;)e = a[d], f = c[d], e ? (e.__data__ = f, n[d] = e) : o[d] = O(f);
                for (; l > d; ++d)o[d] = O(c[d]);
                for (; g > d; ++d)p[d] = a[d]
            }
            o.update = n, o.parentNode = n.parentNode = p.parentNode = a.parentNode, h.push(o), i.push(n), k.push(p)
        }

        var d, e, f = -1, g = this.length;
        if (!arguments.length) {
            for (a = new Array(g = (d = this[0]).length); ++f < g;)(e = d[f]) && (a[f] = e.__data__);
            return a
        }
        var h = S([]), i = B([]), k = B([]);
        if ("function" == typeof a)for (; ++f < g;)c(d = this[f], a.call(d, d.parentNode.__data__, f)); else for (; ++f < g;)c(d = this[f], a);
        return i.enter = function () {
            return h
        }, i.exit = function () {
            return k
        }, i
    }, Cg.datum = function (a) {
        return arguments.length ? this.property("__data__", a) : this.property("__data__")
    }, Cg.filter = function (a) {
        var b, c, d, e = [];
        "function" != typeof a && (a = P(a));
        for (var f = 0, g = this.length; g > f; f++) {
            e.push(b = []), b.parentNode = (c = this[f]).parentNode;
            for (var h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
        }
        return B(e)
    }, Cg.order = function () {
        for (var a = -1, b = this.length; ++a < b;)for (var c, d = this[a], e = d.length - 1,
                                                            f = d[e]; --e >= 0;)(c = d[e]) && (f && f !== c.nextSibling && f.parentNode.insertBefore(c, f), f = c);
        return this
    }, Cg.sort = function (a) {
        a = Q.apply(this, arguments);
        for (var b = -1, c = this.length; ++b < c;)this[b].sort(a);
        return this.order()
    }, Cg.each = function (a) {
        return R(this, function (b, c, d) {
            a.call(b, b.__data__, c, d)
        })
    }, Cg.call = function (a) {
        var b = jg(arguments);
        return a.apply(b[0] = this, b), this
    }, Cg.empty = function () {
        return !this.node()
    }, Cg.node = function () {
        for (var a = 0, b = this.length; b > a; a++)for (var c = this[a], d = 0, e = c.length; e > d; d++) {
            var f = c[d];
            if (f)return f
        }
        return null
    }, Cg.size = function () {
        var a = 0;
        return R(this, function () {
            ++a
        }), a
    };
    var Eg = [];
    hg.selection.enter = S, hg.selection.enter.prototype = Eg, Eg.append = Cg.append, Eg.empty = Cg.empty, Eg.node = Cg.node, Eg.call = Cg.call, Eg.size = Cg.size, Eg.select = function (a) {
        for (var b, c, d, e, f, g = [], h = -1, i = this.length; ++h < i;) {
            d = (e = this[h]).update, g.push(b = []), b.parentNode = e.parentNode;
            for (var j = -1,
                     k = e.length; ++j < k;)(f = e[j]) ? (b.push(d[j] = c = a.call(e.parentNode, f.__data__, j, h)), c.__data__ = f.__data__) : b.push(null)
        }
        return B(g)
    }, Eg.insert = function (a, b) {
        return arguments.length < 2 && (b = T(this)), Cg.insert.call(this, a, b)
    }, hg.select = function (b) {
        var c;
        return "string" == typeof b ? (c = [zg(b, kg)], c.parentNode = kg.documentElement) : (c = [b], c.parentNode = a(b)), B([c])
    }, hg.selectAll = function (a) {
        var b;
        return "string" == typeof a ? (b = jg(Ag(a, kg)), b.parentNode = kg.documentElement) : (b = jg(a), b.parentNode = null), B([b])
    }, Cg.on = function (a, b, c) {
        var d = arguments.length;
        if (3 > d) {
            if ("string" != typeof a) {
                2 > d && (b = !1);
                for (c in a)this.each(U(c, a[c], b));
                return this
            }
            if (2 > d)return (d = this.node()["__on" + a]) && d._;
            c = !1
        }
        return this.each(U(a, b, c))
    };
    var Fg = hg.map({mouseenter: "mouseover", mouseleave: "mouseout"});
    kg && Fg.forEach(function (a) {
        "on" + a in kg && Fg.remove(a)
    });
    var Gg, Hg = 0;
    hg.mouse = function (a) {
        return Y(a, z())
    };
    var Ig = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
    hg.touch = function (a, b, c) {
        if (arguments.length < 3 && (c = b, b = z().changedTouches), b)for (var d, e = 0,
                                                                                f = b.length; f > e; ++e)if ((d = b[e]).identifier === c)return Y(a, d)
    }, hg.behavior.drag = function () {
        function a() {
            this.on("mousedown.drag", f).on("touchstart.drag", g)
        }

        function c(a, b, c, f, g) {
            return function () {
                function h() {
                    var a, c, d = b(m, p);
                    d && (a = d[0] - t[0], c = d[1] - t[1], o |= a | c, t = d, n({
                        type: "drag",
                        x: d[0] + j[0],
                        y: d[1] + j[1],
                        dx: a,
                        dy: c
                    }))
                }

                function i() {
                    b(m, p) && (r.on(f + q, null).on(g + q, null), s(o), n({type: "dragend"}))
                }

                var j, k = this, l = hg.event.target, m = k.parentNode, n = d.of(k, arguments), o = 0, p = a(),
                    q = ".drag" + (null == p ? "" : "-" + p), r = hg.select(c(l)).on(f + q, h).on(g + q, i), s = X(l),
                    t = b(m, p);
                e ? (j = e.apply(k, arguments), j = [j.x - t[0], j.y - t[1]]) : j = [0, 0], n({type: "dragstart"})
            }
        }

        var d = A(a, "drag", "dragstart", "dragend"), e = null, f = c(v, hg.mouse, b, "mousemove", "mouseup"),
            g = c(Z, hg.touch, s, "touchmove", "touchend");
        return a.origin = function (b) {
            return arguments.length ? (e = b, a) : e
        }, hg.rebind(a, d, "on")
    }, hg.touches = function (a, b) {
        return arguments.length < 2 && (b = z().touches), b ? jg(b).map(function (b) {
            var c = Y(a, b);
            return c.identifier = b.identifier, c
        }) : []
    };
    var Jg = 1e-6, Kg = Jg * Jg, Lg = Math.PI, Mg = 2 * Lg, Ng = Mg - Jg, Og = Lg / 2, Pg = Lg / 180, Qg = 180 / Lg,
        Rg = Math.SQRT2, Sg = 2, Tg = 4;
    hg.interpolateZoom = function (a, b) {
        var c, d, e = a[0], f = a[1], g = a[2], h = b[0], i = b[1], j = b[2], k = h - e, l = i - f, m = k * k + l * l;
        if (Kg > m) d = Math.log(j / g) / Rg, c = function (a) {
            return [e + a * k, f + a * l, g * Math.exp(Rg * a * d)]
        }; else {
            var n = Math.sqrt(m), o = (j * j - g * g + Tg * m) / (2 * g * Sg * n),
                p = (j * j - g * g - Tg * m) / (2 * j * Sg * n), q = Math.log(Math.sqrt(o * o + 1) - o),
                r = Math.log(Math.sqrt(p * p + 1) - p);
            d = (r - q) / Rg, c = function (a) {
                var b = a * d, c = da(q), h = g / (Sg * n) * (c * ea(Rg * b + q) - ca(q));
                return [e + h * k, f + h * l, g * c / da(Rg * b + q)]
            }
        }
        return c.duration = 1e3 * d, c
    }, hg.behavior.zoom = function () {
        function a(a) {
            a.on(F, l).on(Vg + ".zoom", n).on("dblclick.zoom", o).on(I, m)
        }

        function c(a) {
            return [(a[0] - z.x) / z.k, (a[1] - z.y) / z.k]
        }

        function d(a) {
            return [a[0] * z.k + z.x, a[1] * z.k + z.y]
        }

        function e(a) {
            z.k = Math.max(C[0], Math.min(C[1], a))
        }

        function f(a, b) {
            b = d(b), z.x += a[0] - b[0], z.y += a[1] - b[1]
        }

        function g(b, c, d, g) {
            b.__chart__ = {
                x: z.x,
                y: z.y,
                k: z.k
            }, e(Math.pow(2, g)), f(q = c, d), b = hg.select(b), D > 0 && (b = b.transition().duration(D)), b.call(a.event)
        }

        function h() {
            v && v.domain(u.range().map(function (a) {
                return (a - z.x) / z.k
            }).map(u.invert)), x && x.domain(w.range().map(function (a) {
                return (a - z.y) / z.k
            }).map(w.invert))
        }

        function i(a) {
            E++ || a({type: "zoomstart"})
        }

        function j(a) {
            h(), a({type: "zoom", scale: z.k, translate: [z.x, z.y]})
        }

        function k(a) {
            --E || (a({type: "zoomend"}), q = null)
        }

        function l() {
            function a() {
                h = 1, f(hg.mouse(e), m), j(g)
            }

            function d() {
                l.on(G, null).on(H, null), n(h), k(g)
            }

            var e = this, g = J.of(e, arguments), h = 0, l = hg.select(b(e)).on(G, a).on(H, d), m = c(hg.mouse(e)),
                n = X(e);
            Oi.call(e), i(g)
        }

        function m() {
            function a() {
                var a = hg.touches(o);
                return n = z.k, a.forEach(function (a) {
                    a.identifier in q && (q[a.identifier] = c(a))
                }), a
            }

            function b() {
                var b = hg.event.target;
                hg.select(b).on(u, d).on(v, h), w.push(b);
                for (var c = hg.event.changedTouches, e = 0, f = c.length; f > e; ++e)q[c[e].identifier] = null;
                var i = a(), j = Date.now();
                if (1 === i.length) {
                    if (500 > j - t) {
                        var k = i[0];
                        g(o, k, q[k.identifier], Math.floor(Math.log(z.k) / Math.LN2) + 1), y()
                    }
                    t = j
                } else if (i.length > 1) {
                    var k = i[0], l = i[1], m = k[0] - l[0], n = k[1] - l[1];
                    r = m * m + n * n
                }
            }

            function d() {
                var a, b, c, d, g = hg.touches(o);
                Oi.call(o);
                for (var h = 0, i = g.length; i > h; ++h, d = null)if (c = g[h], d = q[c.identifier]) {
                    if (b)break;
                    a = c, b = d
                }
                if (d) {
                    var k = (k = c[0] - a[0]) * k + (k = c[1] - a[1]) * k, l = r && Math.sqrt(k / r);
                    a = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2], b = [(b[0] + d[0]) / 2, (b[1] + d[1]) / 2], e(l * n)
                }
                t = null, f(a, b), j(p)
            }

            function h() {
                if (hg.event.touches.length) {
                    for (var b = hg.event.changedTouches, c = 0, d = b.length; d > c; ++c)delete q[b[c].identifier];
                    for (var e in q)return void a()
                }
                hg.selectAll(w).on(s, null), x.on(F, l).on(I, m), A(), k(p)
            }

            var n, o = this, p = J.of(o, arguments), q = {}, r = 0,
                s = ".zoom-" + hg.event.changedTouches[0].identifier, u = "touchmove" + s, v = "touchend" + s, w = [],
                x = hg.select(o), A = X(o);
            b(), i(p), x.on(F, null).on(I, b)
        }

        function n() {
            var a = J.of(this, arguments);
            s ? clearTimeout(s) : (Oi.call(this), p = c(q = r || hg.mouse(this)), i(a)), s = setTimeout(function () {
                s = null, k(a)
            }, 50), y(), e(Math.pow(2, .002 * Ug()) * z.k), f(q, p), j(a)
        }

        function o() {
            var a = hg.mouse(this), b = Math.log(z.k) / Math.LN2;
            g(this, a, c(a), hg.event.shiftKey ? Math.ceil(b) - 1 : Math.floor(b) + 1)
        }

        var p, q, r, s, t, u, v, w, x, z = {x: 0, y: 0, k: 1}, B = [960, 500], C = Wg, D = 250, E = 0,
            F = "mousedown.zoom", G = "mousemove.zoom", H = "mouseup.zoom", I = "touchstart.zoom",
            J = A(a, "zoomstart", "zoom", "zoomend");
        return Vg || (Vg = "onwheel" in kg ? (Ug = function () {
            return -hg.event.deltaY * (hg.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in kg ? (Ug = function () {
            return hg.event.wheelDelta
        }, "mousewheel") : (Ug = function () {
            return -hg.event.detail
        }, "MozMousePixelScroll")), a.event = function (a) {
            a.each(function () {
                var a = J.of(this, arguments), b = z;
                Mi ? hg.select(this).transition().each("start.zoom", function () {
                    z = this.__chart__ || {x: 0, y: 0, k: 1}, i(a)
                }).tween("zoom:zoom", function () {
                    var c = B[0], d = B[1], e = q ? q[0] : c / 2, f = q ? q[1] : d / 2,
                        g = hg.interpolateZoom([(e - z.x) / z.k, (f - z.y) / z.k, c / z.k], [(e - b.x) / b.k, (f - b.y) / b.k, c / b.k]);
                    return function (b) {
                        var d = g(b), h = c / d[2];
                        this.__chart__ = z = {x: e - d[0] * h, y: f - d[1] * h, k: h}, j(a)
                    }
                }).each("interrupt.zoom", function () {
                    k(a)
                }).each("end.zoom", function () {
                    k(a)
                }) : (this.__chart__ = z, i(a), j(a), k(a))
            })
        }, a.translate = function (b) {
            return arguments.length ? (z = {x: +b[0], y: +b[1], k: z.k}, h(), a) : [z.x, z.y]
        }, a.scale = function (b) {
            return arguments.length ? (z = {x: z.x, y: z.y, k: null}, e(+b), h(), a) : z.k
        }, a.scaleExtent = function (b) {
            return arguments.length ? (C = null == b ? Wg : [+b[0], +b[1]], a) : C
        }, a.center = function (b) {
            return arguments.length ? (r = b && [+b[0], +b[1]], a) : r
        }, a.size = function (b) {
            return arguments.length ? (B = b && [+b[0], +b[1]], a) : B
        }, a.duration = function (b) {
            return arguments.length ? (D = +b, a) : D
        }, a.x = function (b) {
            return arguments.length ? (v = b, u = b.copy(), z = {x: 0, y: 0, k: 1}, a) : v
        }, a.y = function (b) {
            return arguments.length ? (x = b, w = b.copy(), z = {x: 0, y: 0, k: 1}, a) : x
        }, hg.rebind(a, J, "on")
    };
    var Ug, Vg, Wg = [0, 1 / 0];
    hg.color = ga, ga.prototype.toString = function () {
        return this.rgb() + ""
    }, hg.hsl = ha;
    var Xg = ha.prototype = new ga;
    Xg.brighter = function (a) {
        return a = Math.pow(.7, arguments.length ? a : 1), new ha(this.h, this.s, this.l / a)
    }, Xg.darker = function (a) {
        return a = Math.pow(.7, arguments.length ? a : 1), new ha(this.h, this.s, a * this.l)
    }, Xg.rgb = function () {
        return ia(this.h, this.s, this.l)
    }, hg.hcl = ja;
    var Yg = ja.prototype = new ga;
    Yg.brighter = function (a) {
        return new ja(this.h, this.c, Math.min(100, this.l + Zg * (arguments.length ? a : 1)))
    }, Yg.darker = function (a) {
        return new ja(this.h, this.c, Math.max(0, this.l - Zg * (arguments.length ? a : 1)))
    }, Yg.rgb = function () {
        return ka(this.h, this.c, this.l).rgb()
    }, hg.lab = la;
    var Zg = 18, $g = .95047, _g = 1, ah = 1.08883, bh = la.prototype = new ga;
    bh.brighter = function (a) {
        return new la(Math.min(100, this.l + Zg * (arguments.length ? a : 1)), this.a, this.b)
    }, bh.darker = function (a) {
        return new la(Math.max(0, this.l - Zg * (arguments.length ? a : 1)), this.a, this.b)
    }, bh.rgb = function () {
        return ma(this.l, this.a, this.b)
    }, hg.rgb = ra;
    var ch = ra.prototype = new ga;
    ch.brighter = function (a) {
        a = Math.pow(.7, arguments.length ? a : 1);
        var b = this.r, c = this.g, d = this.b, e = 30;
        return b || c || d ? (b && e > b && (b = e), c && e > c && (c = e), d && e > d && (d = e), new ra(Math.min(255, b / a), Math.min(255, c / a), Math.min(255, d / a))) : new ra(e, e, e)
    }, ch.darker = function (a) {
        return a = Math.pow(.7, arguments.length ? a : 1), new ra(a * this.r, a * this.g, a * this.b)
    }, ch.hsl = function () {
        return wa(this.r, this.g, this.b)
    }, ch.toString = function () {
        return "#" + ua(this.r) + ua(this.g) + ua(this.b)
    };
    var dh = hg.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    dh.forEach(function (a, b) {
        dh.set(a, sa(b))
    }), hg.functor = Aa, hg.xhr = Ba(s), hg.dsv = function (a, b) {
        function c(a, c, f) {
            arguments.length < 3 && (f = c, c = null);
            var g = Ca(a, b, null == c ? d : e(c), f);
            return g.row = function (a) {
                return arguments.length ? g.response(null == (c = a) ? d : e(a)) : c
            }, g
        }

        function d(a) {
            return c.parse(a.responseText)
        }

        function e(a) {
            return function (b) {
                return c.parse(b.responseText, a)
            }
        }

        function f(b) {
            return b.map(g).join(a)
        }

        function g(a) {
            return h.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a
        }

        var h = new RegExp('["' + a + "\n]"), i = a.charCodeAt(0);
        return c.parse = function (a, b) {
            var d;
            return c.parseRows(a, function (a, c) {
                if (d)return d(a, c - 1);
                var e = new Function("d", "return {" + a.map(function (a, b) {
                        return JSON.stringify(a) + ": d[" + b + "]"
                    }).join(",") + "}");
                d = b ? function (a, c) {
                    return b(e(a), c)
                } : e
            })
        }, c.parseRows = function (a, b) {
            function c() {
                if (k >= j)return g;
                if (e)return e = !1, f;
                var b = k;
                if (34 === a.charCodeAt(b)) {
                    for (var c = b; c++ < j;)if (34 === a.charCodeAt(c)) {
                        if (34 !== a.charCodeAt(c + 1))break;
                        ++c
                    }
                    k = c + 2;
                    var d = a.charCodeAt(c + 1);
                    return 13 === d ? (e = !0, 10 === a.charCodeAt(c + 2) && ++k) : 10 === d && (e = !0), a.slice(b + 1, c).replace(/""/g, '"')
                }
                for (; j > k;) {
                    var d = a.charCodeAt(k++), h = 1;
                    if (10 === d) e = !0; else if (13 === d) e = !0, 10 === a.charCodeAt(k) && (++k, ++h); else if (d !== i)continue;
                    return a.slice(b, k - h)
                }
                return a.slice(b)
            }

            for (var d, e, f = {}, g = {}, h = [], j = a.length, k = 0, l = 0; (d = c()) !== g;) {
                for (var m = []; d !== f && d !== g;)m.push(d), d = c();
                b && null == (m = b(m, l++)) || h.push(m)
            }
            return h
        }, c.format = function (b) {
            if (Array.isArray(b[0]))return c.formatRows(b);
            var d = new r, e = [];
            return b.forEach(function (a) {
                for (var b in a)d.has(b) || e.push(d.add(b))
            }), [e.map(g).join(a)].concat(b.map(function (b) {
                return e.map(function (a) {
                    return g(b[a])
                }).join(a)
            })).join("\n")
        }, c.formatRows = function (a) {
            return a.map(f).join("\n")
        }, c
    }, hg.csv = hg.dsv(",", "text/csv"), hg.tsv = hg.dsv("	", "text/tab-separated-values");
    var eh, fh, gh, hh, ih = this[u(this, "requestAnimationFrame")] || function (a) {
            setTimeout(a, 17)
        };
    hg.timer = function () {
        Fa.apply(this, arguments)
    }, hg.timer.flush = function () {
        Ha(), Ia()
    }, hg.round = function (a, b) {
        return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
    };
    var jh = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Ka);
    hg.formatPrefix = function (a, b) {
        var c = 0;
        return (a = +a) && (0 > a && (a *= -1), b && (a = hg.round(a, Ja(a, b))), c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), c = Math.max(-24, Math.min(24, 3 * Math.floor((c - 1) / 3)))), jh[8 + c / 3]
    };
    var kh = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, lh = hg.map({
        b: function (a) {
            return a.toString(2)
        }, c: function (a) {
            return String.fromCharCode(a)
        }, o: function (a) {
            return a.toString(8)
        }, x: function (a) {
            return a.toString(16)
        }, X: function (a) {
            return a.toString(16).toUpperCase()
        }, g: function (a, b) {
            return a.toPrecision(b)
        }, e: function (a, b) {
            return a.toExponential(b)
        }, f: function (a, b) {
            return a.toFixed(b)
        }, r: function (a, b) {
            return (a = hg.round(a, Ja(a, b))).toFixed(Math.max(0, Math.min(20, Ja(a * (1 + 1e-15), b))))
        }
    }), mh = hg.time = {}, nh = Date;
    Na.prototype = {
        getDate: function () {
            return this._.getUTCDate()
        }, getDay: function () {
            return this._.getUTCDay()
        }, getFullYear: function () {
            return this._.getUTCFullYear()
        }, getHours: function () {
            return this._.getUTCHours()
        }, getMilliseconds: function () {
            return this._.getUTCMilliseconds()
        }, getMinutes: function () {
            return this._.getUTCMinutes()
        }, getMonth: function () {
            return this._.getUTCMonth()
        }, getSeconds: function () {
            return this._.getUTCSeconds()
        }, getTime: function () {
            return this._.getTime()
        }, getTimezoneOffset: function () {
            return 0
        }, valueOf: function () {
            return this._.valueOf()
        }, setDate: function () {
            oh.setUTCDate.apply(this._, arguments)
        }, setDay: function () {
            oh.setUTCDay.apply(this._, arguments)
        }, setFullYear: function () {
            oh.setUTCFullYear.apply(this._, arguments)
        }, setHours: function () {
            oh.setUTCHours.apply(this._, arguments)
        }, setMilliseconds: function () {
            oh.setUTCMilliseconds.apply(this._, arguments)
        }, setMinutes: function () {
            oh.setUTCMinutes.apply(this._, arguments)
        }, setMonth: function () {
            oh.setUTCMonth.apply(this._, arguments)
        }, setSeconds: function () {
            oh.setUTCSeconds.apply(this._, arguments)
        }, setTime: function () {
            oh.setTime.apply(this._, arguments)
        }
    };
    var oh = Date.prototype;
    mh.year = Oa(function (a) {
        return a = mh.day(a), a.setMonth(0, 1), a
    }, function (a, b) {
        a.setFullYear(a.getFullYear() + b)
    }, function (a) {
        return a.getFullYear()
    }), mh.years = mh.year.range, mh.years.utc = mh.year.utc.range, mh.day = Oa(function (a) {
        var b = new nh(2e3, 0);
        return b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), b
    }, function (a, b) {
        a.setDate(a.getDate() + b)
    }, function (a) {
        return a.getDate() - 1
    }), mh.days = mh.day.range, mh.days.utc = mh.day.utc.range, mh.dayOfYear = function (a) {
        var b = mh.year(a);
        return Math.floor((a - b - 6e4 * (a.getTimezoneOffset() - b.getTimezoneOffset())) / 864e5)
    }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (a, b) {
        b = 7 - b;
        var c = mh[a] = Oa(function (a) {
            return (a = mh.day(a)).setDate(a.getDate() - (a.getDay() + b) % 7), a
        }, function (a, b) {
            a.setDate(a.getDate() + 7 * Math.floor(b))
        }, function (a) {
            var c = mh.year(a).getDay();
            return Math.floor((mh.dayOfYear(a) + (c + b) % 7) / 7) - (c !== b)
        });
        mh[a + "s"] = c.range, mh[a + "s"].utc = c.utc.range, mh[a + "OfYear"] = function (a) {
            var c = mh.year(a).getDay();
            return Math.floor((mh.dayOfYear(a) + (c + b) % 7) / 7)
        }
    }), mh.week = mh.sunday, mh.weeks = mh.sunday.range, mh.weeks.utc = mh.sunday.utc.range, mh.weekOfYear = mh.sundayOfYear;
    var ph = {"-": "", _: " ", 0: "0"}, qh = /^\s*\d+/, rh = /^%/;
    hg.locale = function (a) {
        return {numberFormat: La(a), timeFormat: Qa(a)}
    };
    var sh = hg.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    hg.format = sh.numberFormat, hg.geo = {}, jb.prototype = {
        s: 0, t: 0, add: function (a) {
            kb(a, this.t, th), kb(th.s, this.s, this), this.s ? this.t += th.t : this.s = th.t
        }, reset: function () {
            this.s = this.t = 0
        }, valueOf: function () {
            return this.s
        }
    };
    var th = new jb;
    hg.geo.stream = function (a, b) {
        a && uh.hasOwnProperty(a.type) ? uh[a.type](a, b) : lb(a, b)
    };
    var uh = {
        Feature: function (a, b) {
            lb(a.geometry, b)
        }, FeatureCollection: function (a, b) {
            for (var c = a.features, d = -1, e = c.length; ++d < e;)lb(c[d].geometry, b)
        }
    }, vh = {
        Sphere: function (a, b) {
            b.sphere()
        }, Point: function (a, b) {
            a = a.coordinates, b.point(a[0], a[1], a[2])
        }, MultiPoint: function (a, b) {
            for (var c = a.coordinates, d = -1, e = c.length; ++d < e;)a = c[d], b.point(a[0], a[1], a[2])
        }, LineString: function (a, b) {
            mb(a.coordinates, b, 0)
        }, MultiLineString: function (a, b) {
            for (var c = a.coordinates, d = -1, e = c.length; ++d < e;)mb(c[d], b, 0)
        }, Polygon: function (a, b) {
            nb(a.coordinates, b)
        }, MultiPolygon: function (a, b) {
            for (var c = a.coordinates, d = -1, e = c.length; ++d < e;)nb(c[d], b)
        }, GeometryCollection: function (a, b) {
            for (var c = a.geometries, d = -1, e = c.length; ++d < e;)lb(c[d], b)
        }
    };
    hg.geo.area = function (a) {
        return wh = 0, hg.geo.stream(a, yh), wh
    };
    var wh, xh = new jb, yh = {
        sphere: function () {
            wh += 4 * Lg
        }, point: v, lineStart: v, lineEnd: v, polygonStart: function () {
            xh.reset(), yh.lineStart = ob
        }, polygonEnd: function () {
            var a = 2 * xh;
            wh += 0 > a ? 4 * Lg + a : a, yh.lineStart = yh.lineEnd = yh.point = v
        }
    };
    hg.geo.bounds = function () {
        function a(a, b) {
            t.push(u = [k = a, m = a]), l > b && (l = b), b > n && (n = b)
        }

        function b(b, c) {
            var d = pb([b * Pg, c * Pg]);
            if (r) {
                var e = rb(r, d), f = [e[1], -e[0], 0], g = rb(f, e);
                ub(g), g = vb(g);
                var i = b - o, j = i > 0 ? 1 : -1, p = g[0] * Qg * j, q = tg(i) > 180;
                if (q ^ (p > j * o && j * b > p)) {
                    var s = g[1] * Qg;
                    s > n && (n = s)
                } else if (p = (p + 360) % 360 - 180, q ^ (p > j * o && j * b > p)) {
                    var s = -g[1] * Qg;
                    l > s && (l = s)
                } else l > c && (l = c), c > n && (n = c);
                q ? o > b ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b) : m >= k ? (k > b && (k = b), b > m && (m = b)) : b > o ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b)
            } else a(b, c);
            r = d, o = b
        }

        function c() {
            v.point = b
        }

        function d() {
            u[0] = k, u[1] = m, v.point = a, r = null
        }

        function e(a, c) {
            if (r) {
                var d = a - o;
                s += tg(d) > 180 ? d + (d > 0 ? 360 : -360) : d
            } else p = a, q = c;
            yh.point(a, c), b(a, c)
        }

        function f() {
            yh.lineStart()
        }

        function g() {
            e(p, q), yh.lineEnd(), tg(s) > Jg && (k = -(m = 180)), u[0] = k, u[1] = m, r = null
        }

        function h(a, b) {
            return (b -= a) < 0 ? b + 360 : b
        }

        function i(a, b) {
            return a[0] - b[0]
        }

        function j(a, b) {
            return b[0] <= b[1] ? b[0] <= a && a <= b[1] : a < b[0] || b[1] < a
        }

        var k, l, m, n, o, p, q, r, s, t, u, v = {
            point: a, lineStart: c, lineEnd: d, polygonStart: function () {
                v.point = e, v.lineStart = f, v.lineEnd = g, s = 0, yh.polygonStart()
            }, polygonEnd: function () {
                yh.polygonEnd(), v.point = a, v.lineStart = c, v.lineEnd = d, 0 > xh ? (k = -(m = 180), l = -(n = 90)) : s > Jg ? n = 90 : -Jg > s && (l = -90), u[0] = k, u[1] = m
            }
        };
        return function (a) {
            n = m = -(k = l = 1 / 0), t = [], hg.geo.stream(a, v);
            var b = t.length;
            if (b) {
                t.sort(i);
                for (var c, d = 1, e = t[0],
                         f = [e]; b > d; ++d)c = t[d], j(c[0], e) || j(c[1], e) ? (h(e[0], c[1]) > h(e[0], e[1]) && (e[1] = c[1]), h(c[0], e[1]) > h(e[0], e[1]) && (e[0] = c[0])) : f.push(e = c);
                for (var g, c, o = -(1 / 0), b = f.length - 1, d = 0,
                         e = f[b]; b >= d; e = c, ++d)c = f[d], (g = h(e[1], c[0])) > o && (o = g, k = c[0], m = e[1])
            }
            return t = u = null, k === 1 / 0 || l === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[k, l], [m, n]]
        }
    }(), hg.geo.centroid = function (a) {
        zh = Ah = Bh = Ch = Dh = Eh = Fh = Gh = Hh = Ih = Jh = 0, hg.geo.stream(a, Kh);
        var b = Hh, c = Ih, d = Jh, e = b * b + c * c + d * d;
        return Kg > e && (b = Eh, c = Fh, d = Gh, Jg > Ah && (b = Bh, c = Ch, d = Dh), e = b * b + c * c + d * d, Kg > e) ? [NaN, NaN] : [Math.atan2(c, b) * Qg, ba(d / Math.sqrt(e)) * Qg]
    };
    var zh, Ah, Bh, Ch, Dh, Eh, Fh, Gh, Hh, Ih, Jh, Kh = {
        sphere: v, point: xb, lineStart: zb, lineEnd: Ab, polygonStart: function () {
            Kh.lineStart = Bb
        }, polygonEnd: function () {
            Kh.lineStart = zb
        }
    }, Lh = Hb(Db, Lb, Nb, [-Lg, -Lg / 2]), Mh = 1e9;
    hg.geo.clipExtent = function () {
        var a, b, c, d, e, f, g = {
            stream: function (a) {
                return e && (e.valid = !1), e = f(a), e.valid = !0, e
            }, extent: function (h) {
                return arguments.length ? (f = Rb(a = +h[0][0], b = +h[0][1], c = +h[1][0], d = +h[1][1]), e && (e.valid = !1, e = null), g) : [[a, b], [c, d]]
            }
        };
        return g.extent([[0, 0], [960, 500]])
    }, (hg.geo.conicEqualArea = function () {
        return Sb(Tb)
    }).raw = Tb, hg.geo.albers = function () {
        return hg.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, hg.geo.albersUsa = function () {
        function a(a) {
            var f = a[0], g = a[1];
            return b = null, c(f, g), b || (d(f, g), b) || e(f, g), b
        }

        var b, c, d, e, f = hg.geo.albers(),
            g = hg.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            h = hg.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), i = {
                point: function (a, c) {
                    b = [a, c]
                }
            };
        return a.invert = function (a) {
            var b = f.scale(), c = f.translate(), d = (a[0] - c[0]) / b, e = (a[1] - c[1]) / b;
            return (e >= .12 && .234 > e && d >= -.425 && -.214 > d ? g : e >= .166 && .234 > e && d >= -.214 && -.115 > d ? h : f).invert(a)
        }, a.stream = function (a) {
            var b = f.stream(a), c = g.stream(a), d = h.stream(a);
            return {
                point: function (a, e) {
                    b.point(a, e), c.point(a, e), d.point(a, e)
                }, sphere: function () {
                    b.sphere(), c.sphere(), d.sphere()
                }, lineStart: function () {
                    b.lineStart(), c.lineStart(), d.lineStart()
                }, lineEnd: function () {
                    b.lineEnd(), c.lineEnd(), d.lineEnd()
                }, polygonStart: function () {
                    b.polygonStart(), c.polygonStart(), d.polygonStart()
                }, polygonEnd: function () {
                    b.polygonEnd(), c.polygonEnd(), d.polygonEnd()
                }
            }
        }, a.precision = function (b) {
            return arguments.length ? (f.precision(b), g.precision(b), h.precision(b), a) : f.precision()
        }, a.scale = function (b) {
            return arguments.length ? (f.scale(b), g.scale(.35 * b), h.scale(b), a.translate(f.translate())) : f.scale()
        }, a.translate = function (b) {
            if (!arguments.length)return f.translate();
            var j = f.scale(), k = +b[0], l = +b[1];
            return c = f.translate(b).clipExtent([[k - .455 * j, l - .238 * j], [k + .455 * j, l + .238 * j]]).stream(i).point, d = g.translate([k - .307 * j, l + .201 * j]).clipExtent([[k - .425 * j + Jg, l + .12 * j + Jg], [k - .214 * j - Jg, l + .234 * j - Jg]]).stream(i).point, e = h.translate([k - .205 * j, l + .212 * j]).clipExtent([[k - .214 * j + Jg, l + .166 * j + Jg], [k - .115 * j - Jg, l + .234 * j - Jg]]).stream(i).point, a
        }, a.scale(1070)
    };
    var Nh, Oh, Ph, Qh, Rh, Sh, Th = {
        point: v, lineStart: v, lineEnd: v, polygonStart: function () {
            Oh = 0, Th.lineStart = Ub
        }, polygonEnd: function () {
            Th.lineStart = Th.lineEnd = Th.point = v, Nh += tg(Oh / 2)
        }
    }, Uh = {point: Vb, lineStart: v, lineEnd: v, polygonStart: v, polygonEnd: v}, Vh = {
        point: Yb, lineStart: Zb, lineEnd: $b, polygonStart: function () {
            Vh.lineStart = _b
        }, polygonEnd: function () {
            Vh.point = Yb, Vh.lineStart = Zb, Vh.lineEnd = $b
        }
    };
    hg.geo.path = function () {
        function a(a) {
            return a && ("function" == typeof h && f.pointRadius(+h.apply(this, arguments)), g && g.valid || (g = e(f)), hg.geo.stream(a, g)), f.result()
        }

        function b() {
            return g = null, a
        }

        var c, d, e, f, g, h = 4.5;
        return a.area = function (a) {
            return Nh = 0, hg.geo.stream(a, e(Th)), Nh
        }, a.centroid = function (a) {
            return Bh = Ch = Dh = Eh = Fh = Gh = Hh = Ih = Jh = 0, hg.geo.stream(a, e(Vh)), Jh ? [Hh / Jh, Ih / Jh] : Gh ? [Eh / Gh, Fh / Gh] : Dh ? [Bh / Dh, Ch / Dh] : [NaN, NaN]
        }, a.bounds = function (a) {
            return Rh = Sh = -(Ph = Qh = 1 / 0), hg.geo.stream(a, e(Uh)), [[Ph, Qh], [Rh, Sh]]
        }, a.projection = function (a) {
            return arguments.length ? (e = (c = a) ? a.stream || cc(a) : s, b()) : c
        }, a.context = function (a) {
            return arguments.length ? (f = null == (d = a) ? new Wb : new ac(a), "function" != typeof h && f.pointRadius(h), b()) : d
        }, a.pointRadius = function (b) {
            return arguments.length ? (h = "function" == typeof b ? b : (f.pointRadius(+b), +b), a) : h
        }, a.projection(hg.geo.albersUsa()).context(null)
    }, hg.geo.transform = function (a) {
        return {
            stream: function (b) {
                var c = new dc(b);
                for (var d in a)c[d] = a[d];
                return c
            }
        }
    }, dc.prototype = {
        point: function (a, b) {
            this.stream.point(a, b)
        }, sphere: function () {
            this.stream.sphere()
        }, lineStart: function () {
            this.stream.lineStart()
        }, lineEnd: function () {
            this.stream.lineEnd()
        }, polygonStart: function () {
            this.stream.polygonStart()
        }, polygonEnd: function () {
            this.stream.polygonEnd()
        }
    }, hg.geo.projection = fc, hg.geo.projectionMutator = gc, (hg.geo.equirectangular = function () {
        return fc(ic)
    }).raw = ic.invert = ic, hg.geo.rotation = function (a) {
        function b(b) {
            return b = a(b[0] * Pg, b[1] * Pg), b[0] *= Qg, b[1] *= Qg, b
        }

        return a = kc(a[0] % 360 * Pg, a[1] * Pg, a.length > 2 ? a[2] * Pg : 0), b.invert = function (b) {
            return b = a.invert(b[0] * Pg, b[1] * Pg), b[0] *= Qg, b[1] *= Qg, b
        }, b
    }, jc.invert = ic, hg.geo.circle = function () {
        function a() {
            var a = "function" == typeof d ? d.apply(this, arguments) : d, b = kc(-a[0] * Pg, -a[1] * Pg, 0).invert,
                e = [];
            return c(null, null, 1, {
                point: function (a, c) {
                    e.push(a = b(a, c)), a[0] *= Qg, a[1] *= Qg
                }
            }), {type: "Polygon", coordinates: [e]}
        }

        var b, c, d = [0, 0], e = 6;
        return a.origin = function (b) {
            return arguments.length ? (d = b, a) : d
        }, a.angle = function (d) {
            return arguments.length ? (c = oc((b = +d) * Pg, e * Pg), a) : b
        }, a.precision = function (d) {
            return arguments.length ? (c = oc(b * Pg, (e = +d) * Pg), a) : e
        }, a.angle(90)
    }, hg.geo.distance = function (a, b) {
        var c, d = (b[0] - a[0]) * Pg, e = a[1] * Pg, f = b[1] * Pg, g = Math.sin(d), h = Math.cos(d), i = Math.sin(e),
            j = Math.cos(e), k = Math.sin(f), l = Math.cos(f);
        return Math.atan2(Math.sqrt((c = l * g) * c + (c = j * k - i * l * h) * c), i * k + j * l * h)
    }, hg.geo.graticule = function () {
        function a() {
            return {type: "MultiLineString", coordinates: b()}
        }

        function b() {
            return hg.range(Math.ceil(f / q) * q, e, q).map(m).concat(hg.range(Math.ceil(j / r) * r, i, r).map(n)).concat(hg.range(Math.ceil(d / o) * o, c, o).filter(function (a) {
                return tg(a % q) > Jg
            }).map(k)).concat(hg.range(Math.ceil(h / p) * p, g, p).filter(function (a) {
                return tg(a % r) > Jg
            }).map(l))
        }

        var c, d, e, f, g, h, i, j, k, l, m, n, o = 10, p = o, q = 90, r = 360, s = 2.5;
        return a.lines = function () {
            return b().map(function (a) {
                return {type: "LineString", coordinates: a}
            })
        }, a.outline = function () {
            return {
                type: "Polygon",
                coordinates: [m(f).concat(n(i).slice(1), m(e).reverse().slice(1), n(j).reverse().slice(1))]
            }
        }, a.extent = function (b) {
            return arguments.length ? a.majorExtent(b).minorExtent(b) : a.minorExtent()
        }, a.majorExtent = function (b) {
            return arguments.length ? (f = +b[0][0], e = +b[1][0], j = +b[0][1], i = +b[1][1], f > e && (b = f, f = e, e = b), j > i && (b = j, j = i, i = b), a.precision(s)) : [[f, j], [e, i]]
        }, a.minorExtent = function (b) {
            return arguments.length ? (d = +b[0][0], c = +b[1][0], h = +b[0][1], g = +b[1][1], d > c && (b = d, d = c, c = b), h > g && (b = h, h = g, g = b), a.precision(s)) : [[d, h], [c, g]]
        }, a.step = function (b) {
            return arguments.length ? a.majorStep(b).minorStep(b) : a.minorStep()
        }, a.majorStep = function (b) {
            return arguments.length ? (q = +b[0], r = +b[1], a) : [q, r]
        }, a.minorStep = function (b) {
            return arguments.length ? (o = +b[0], p = +b[1], a) : [o, p]
        }, a.precision = function (b) {
            return arguments.length ? (s = +b, k = qc(h, g, 90), l = rc(d, c, s), m = qc(j, i, 90), n = rc(f, e, s), a) : s
        }, a.majorExtent([[-180, -90 + Jg], [180, 90 - Jg]]).minorExtent([[-180, -80 - Jg], [180, 80 + Jg]])
    }, hg.geo.greatArc = function () {
        function a() {
            return {type: "LineString", coordinates: [b || d.apply(this, arguments), c || e.apply(this, arguments)]}
        }

        var b, c, d = sc, e = tc;
        return a.distance = function () {
            return hg.geo.distance(b || d.apply(this, arguments), c || e.apply(this, arguments))
        }, a.source = function (c) {
            return arguments.length ? (d = c, b = "function" == typeof c ? null : c, a) : d
        }, a.target = function (b) {
            return arguments.length ? (e = b, c = "function" == typeof b ? null : b, a) : e
        }, a.precision = function () {
            return arguments.length ? a : 0
        }, a
    }, hg.geo.interpolate = function (a, b) {
        return uc(a[0] * Pg, a[1] * Pg, b[0] * Pg, b[1] * Pg)
    }, hg.geo.length = function (a) {
        return Wh = 0, hg.geo.stream(a, Xh), Wh
    };
    var Wh, Xh = {sphere: v, point: v, lineStart: vc, lineEnd: v, polygonStart: v, polygonEnd: v},
        Yh = wc(function (a) {
            return Math.sqrt(2 / (1 + a))
        }, function (a) {
            return 2 * Math.asin(a / 2)
        });
    (hg.geo.azimuthalEqualArea = function () {
        return fc(Yh)
    }).raw = Yh;
    var Zh = wc(function (a) {
        var b = Math.acos(a);
        return b && b / Math.sin(b)
    }, s);
    (hg.geo.azimuthalEquidistant = function () {
        return fc(Zh)
    }).raw = Zh, (hg.geo.conicConformal = function () {
        return Sb(xc)
    }).raw = xc, (hg.geo.conicEquidistant = function () {
        return Sb(yc)
    }).raw = yc;
    var $h = wc(function (a) {
        return 1 / a
    }, Math.atan);
    (hg.geo.gnomonic = function () {
        return fc($h)
    }).raw = $h, zc.invert = function (a, b) {
        return [a, 2 * Math.atan(Math.exp(b)) - Og]
    }, (hg.geo.mercator = function () {
        return Ac(zc)
    }).raw = zc;
    var _h = wc(function () {
        return 1
    }, Math.asin);
    (hg.geo.orthographic = function () {
        return fc(_h)
    }).raw = _h;
    var ai = wc(function (a) {
        return 1 / (1 + a)
    }, function (a) {
        return 2 * Math.atan(a)
    });
    (hg.geo.stereographic = function () {
        return fc(ai)
    }).raw = ai, Bc.invert = function (a, b) {
        return [-b, 2 * Math.atan(Math.exp(a)) - Og]
    }, (hg.geo.transverseMercator = function () {
        var a = Ac(Bc), b = a.center, c = a.rotate;
        return a.center = function (a) {
            return a ? b([-a[1], a[0]]) : (a = b(), [a[1], -a[0]])
        }, a.rotate = function (a) {
            return a ? c([a[0], a[1], a.length > 2 ? a[2] + 90 : 90]) : (a = c(),
                [a[0], a[1], a[2] - 90])
        }, c([0, 0, 90])
    }).raw = Bc, hg.geom = {}, hg.geom.hull = function (a) {
        function b(a) {
            if (a.length < 3)return [];
            var b, e = Aa(c), f = Aa(d), g = a.length, h = [], i = [];
            for (b = 0; g > b; b++)h.push([+e.call(this, a[b], b), +f.call(this, a[b], b), b]);
            for (h.sort(Fc), b = 0; g > b; b++)i.push([h[b][0], -h[b][1]]);
            var j = Ec(h), k = Ec(i), l = k[0] === j[0], m = k[k.length - 1] === j[j.length - 1], n = [];
            for (b = j.length - 1; b >= 0; --b)n.push(a[h[j[b]][2]]);
            for (b = +l; b < k.length - m; ++b)n.push(a[h[k[b]][2]]);
            return n
        }

        var c = Cc, d = Dc;
        return arguments.length ? b(a) : (b.x = function (a) {
            return arguments.length ? (c = a, b) : c
        }, b.y = function (a) {
            return arguments.length ? (d = a, b) : d
        }, b)
    }, hg.geom.polygon = function (a) {
        return yg(a, bi), a
    };
    var bi = hg.geom.polygon.prototype = [];
    bi.area = function () {
        for (var a, b = -1, c = this.length, d = this[c - 1],
                 e = 0; ++b < c;)a = d, d = this[b], e += a[1] * d[0] - a[0] * d[1];
        return .5 * e
    }, bi.centroid = function (a) {
        var b, c, d = -1, e = this.length, f = 0, g = 0, h = this[e - 1];
        for (arguments.length || (a = -1 / (6 * this.area())); ++d < e;)b = h, h = this[d], c = b[0] * h[1] - h[0] * b[1], f += (b[0] + h[0]) * c, g += (b[1] + h[1]) * c;
        return [f * a, g * a]
    }, bi.clip = function (a) {
        for (var b, c, d, e, f, g, h = Ic(a), i = -1, j = this.length - Ic(this), k = this[j - 1]; ++i < j;) {
            for (b = a.slice(), a.length = 0, e = this[i], f = b[(d = b.length - h) - 1], c = -1; ++c < d;)g = b[c], Gc(g, k, e) ? (Gc(f, k, e) || a.push(Hc(f, g, k, e)), a.push(g)) : Gc(f, k, e) && a.push(Hc(f, g, k, e)), f = g;
            h && a.push(a[0]), k = e
        }
        return a
    };
    var ci, di, ei, fi, gi, hi = [], ii = [];
    Qc.prototype.prepare = function () {
        for (var a, b = this.edges, c = b.length; c--;)a = b[c].edge, a.b && a.a || b.splice(c, 1);
        return b.sort(Sc), b.length
    }, ad.prototype = {
        start: function () {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        }, end: function () {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    }, bd.prototype = {
        insert: function (a, b) {
            var c, d, e;
            if (a) {
                if (b.P = a, b.N = a.N, a.N && (a.N.P = b), a.N = b, a.R) {
                    for (a = a.R; a.L;)a = a.L;
                    a.L = b
                } else a.R = b;
                c = a
            } else this._ ? (a = fd(this._), b.P = null, b.N = a, a.P = a.L = b, c = a) : (b.P = b.N = null, this._ = b, c = null);
            for (b.L = b.R = null, b.U = c, b.C = !0, a = b; c && c.C;)d = c.U, c === d.L ? (e = d.R, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.R && (dd(this, c), a = c, c = a.U), c.C = !1, d.C = !0, ed(this, d))) : (e = d.L, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.L && (ed(this, c), a = c, c = a.U), c.C = !1, d.C = !0, dd(this, d))), c = a.U;
            this._.C = !1
        }, remove: function (a) {
            a.N && (a.N.P = a.P), a.P && (a.P.N = a.N), a.N = a.P = null;
            var b, c, d, e = a.U, f = a.L, g = a.R;
            if (c = f ? g ? fd(g) : f : g, e ? e.L === a ? e.L = c : e.R = c : this._ = c, f && g ? (d = c.C, c.C = a.C, c.L = f, f.U = c, c !== g ? (e = c.U, c.U = a.U, a = c.R, e.L = a, c.R = g, g.U = c) : (c.U = e, e = c, a = c.R)) : (d = a.C, a = c), a && (a.U = e), !d) {
                if (a && a.C)return void(a.C = !1);
                do {
                    if (a === this._)break;
                    if (a === e.L) {
                        if (b = e.R, b.C && (b.C = !1, e.C = !0, dd(this, e), b = e.R), b.L && b.L.C || b.R && b.R.C) {
                            b.R && b.R.C || (b.L.C = !1, b.C = !0, ed(this, b), b = e.R), b.C = e.C, e.C = b.R.C = !1, dd(this, e), a = this._;
                            break
                        }
                    } else if (b = e.L, b.C && (b.C = !1, e.C = !0, ed(this, e), b = e.L), b.L && b.L.C || b.R && b.R.C) {
                        b.L && b.L.C || (b.R.C = !1, b.C = !0, dd(this, b), b = e.L), b.C = e.C, e.C = b.L.C = !1, ed(this, e), a = this._;
                        break
                    }
                    b.C = !0, a = e, e = e.U
                } while (!a.C);
                a && (a.C = !1)
            }
        }
    }, hg.geom.voronoi = function (a) {
        function b(a) {
            var b = new Array(a.length), d = h[0][0], e = h[0][1], f = h[1][0], g = h[1][1];
            return gd(c(a), h).cells.forEach(function (c, h) {
                var i = c.edges, j = c.site, k = b[h] = i.length ? i.map(function (a) {
                    var b = a.start();
                    return [b.x, b.y]
                }) : j.x >= d && j.x <= f && j.y >= e && j.y <= g ? [[d, g], [f, g], [f, e], [d, e]] : [];
                k.point = a[h]
            }), b
        }

        function c(a) {
            return a.map(function (a, b) {
                return {x: Math.round(f(a, b) / Jg) * Jg, y: Math.round(g(a, b) / Jg) * Jg, i: b}
            })
        }

        var d = Cc, e = Dc, f = d, g = e, h = ji;
        return a ? b(a) : (b.links = function (a) {
            return gd(c(a)).edges.filter(function (a) {
                return a.l && a.r
            }).map(function (b) {
                return {source: a[b.l.i], target: a[b.r.i]}
            })
        }, b.triangles = function (a) {
            var b = [];
            return gd(c(a)).cells.forEach(function (c, d) {
                for (var e, f, g = c.site, h = c.edges.sort(Sc), i = -1, j = h.length, k = h[j - 1].edge,
                         l = k.l === g ? k.r : k.l; ++i < j;)e = k, f = l, k = h[i].edge, l = k.l === g ? k.r : k.l, d < f.i && d < l.i && id(g, f, l) < 0 && b.push([a[d], a[f.i], a[l.i]])
            }), b
        }, b.x = function (a) {
            return arguments.length ? (f = Aa(d = a), b) : d
        }, b.y = function (a) {
            return arguments.length ? (g = Aa(e = a), b) : e
        }, b.clipExtent = function (a) {
            return arguments.length ? (h = null == a ? ji : a, b) : h === ji ? null : h
        }, b.size = function (a) {
            return arguments.length ? b.clipExtent(a && [[0, 0], a]) : h === ji ? null : h && h[1]
        }, b)
    };
    var ji = [[-1e6, -1e6], [1e6, 1e6]];
    hg.geom.delaunay = function (a) {
        return hg.geom.voronoi().triangles(a)
    }, hg.geom.quadtree = function (a, b, c, d, e) {
        function f(a) {
            function f(a, b, c, d, e, f, g, h) {
                if (!isNaN(c) && !isNaN(d))if (a.leaf) {
                    var i = a.x, k = a.y;
                    if (null != i)if (tg(i - c) + tg(k - d) < .01) j(a, b, c, d, e, f, g, h); else {
                        var l = a.point;
                        a.x = a.y = a.point = null, j(a, l, i, k, e, f, g, h), j(a, b, c, d, e, f, g, h)
                    } else a.x = c, a.y = d, a.point = b
                } else j(a, b, c, d, e, f, g, h)
            }

            function j(a, b, c, d, e, g, h, i) {
                var j = .5 * (e + h), k = .5 * (g + i), l = c >= j, m = d >= k, n = m << 1 | l;
                a.leaf = !1, a = a.nodes[n] || (a.nodes[n] = ld()), l ? e = j : h = j, m ? g = k : i = k, f(a, b, c, d, e, g, h, i)
            }

            var k, l, m, n, o, p, q, r, s, t = Aa(h), u = Aa(i);
            if (null != b) p = b, q = c, r = d, s = e; else if (r = s = -(p = q = 1 / 0), l = [], m = [], o = a.length, g)for (n = 0; o > n; ++n)k = a[n], k.x < p && (p = k.x), k.y < q && (q = k.y), k.x > r && (r = k.x), k.y > s && (s = k.y), l.push(k.x), m.push(k.y); else for (n = 0; o > n; ++n) {
                var v = +t(k = a[n], n), w = +u(k, n);
                p > v && (p = v), q > w && (q = w), v > r && (r = v), w > s && (s = w), l.push(v), m.push(w)
            }
            var x = r - p, y = s - q;
            x > y ? s = q + x : r = p + y;
            var z = ld();
            if (z.add = function (a) {
                    f(z, a, +t(a, ++n), +u(a, n), p, q, r, s)
                }, z.visit = function (a) {
                    md(a, z, p, q, r, s)
                }, z.find = function (a) {
                    return nd(z, a[0], a[1], p, q, r, s)
                }, n = -1, null == b) {
                for (; ++n < o;)f(z, a[n], l[n], m[n], p, q, r, s);
                --n
            } else a.forEach(z.add);
            return l = m = a = k = null, z
        }

        var g, h = Cc, i = Dc;
        return (g = arguments.length) ? (h = jd, i = kd, 3 === g && (e = c, d = b, c = b = 0), f(a)) : (f.x = function (a) {
            return arguments.length ? (h = a, f) : h
        }, f.y = function (a) {
            return arguments.length ? (i = a, f) : i
        }, f.extent = function (a) {
            return arguments.length ? (null == a ? b = c = d = e = null : (b = +a[0][0], c = +a[0][1], d = +a[1][0], e = +a[1][1]), f) : null == b ? null : [[b, c], [d, e]]
        }, f.size = function (a) {
            return arguments.length ? (null == a ? b = c = d = e = null : (b = c = 0, d = +a[0], e = +a[1]), f) : null == b ? null : [d - b, e - c]
        }, f)
    }, hg.interpolateRgb = od, hg.interpolateObject = pd, hg.interpolateNumber = qd, hg.interpolateString = rd;
    var ki = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, li = new RegExp(ki.source, "g");
    hg.interpolate = sd, hg.interpolators = [function (a, b) {
        var c = typeof b;
        return ("string" === c ? dh.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? od : rd : b instanceof ga ? od : Array.isArray(b) ? td : "object" === c && isNaN(b) ? pd : qd)(a, b)
    }], hg.interpolateArray = td;
    var mi = function () {
        return s
    }, ni = hg.map({
        linear: mi, poly: Ad, quad: function () {
            return xd
        }, cubic: function () {
            return yd
        }, sin: function () {
            return Bd
        }, exp: function () {
            return Cd
        }, circle: function () {
            return Dd
        }, elastic: Ed, back: Fd, bounce: function () {
            return Gd
        }
    }), oi = hg.map({
        "in": s, out: vd, "in-out": wd, "out-in": function (a) {
            return wd(vd(a))
        }
    });
    hg.ease = function (a) {
        var b = a.indexOf("-"), c = b >= 0 ? a.slice(0, b) : a, d = b >= 0 ? a.slice(b + 1) : "in";
        return c = ni.get(c) || mi, d = oi.get(d) || s, ud(d(c.apply(null, ig.call(arguments, 1))))
    }, hg.interpolateHcl = Hd, hg.interpolateHsl = Id, hg.interpolateLab = Jd, hg.interpolateRound = Kd, hg.transform = function (a) {
        var b = kg.createElementNS(hg.ns.prefix.svg, "g");
        return (hg.transform = function (a) {
            if (null != a) {
                b.setAttribute("transform", a);
                var c = b.transform.baseVal.consolidate()
            }
            return new Ld(c ? c.matrix : pi)
        })(a)
    }, Ld.prototype.toString = function () {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var pi = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};
    hg.interpolateTransform = Ud, hg.layout = {}, hg.layout.bundle = function () {
        return function (a) {
            for (var b = [], c = -1, d = a.length; ++c < d;)b.push(Xd(a[c]));
            return b
        }
    }, hg.layout.chord = function () {
        function a() {
            var a, j, l, m, n, o = {}, p = [], q = hg.range(f), r = [];
            for (c = [], d = [], a = 0, m = -1; ++m < f;) {
                for (j = 0, n = -1; ++n < f;)j += e[m][n];
                p.push(j), r.push(hg.range(f)), a += j
            }
            for (g && q.sort(function (a, b) {
                return g(p[a], p[b])
            }), h && r.forEach(function (a, b) {
                a.sort(function (a, c) {
                    return h(e[b][a], e[b][c])
                })
            }), a = (Mg - k * f) / a, j = 0, m = -1; ++m < f;) {
                for (l = j, n = -1; ++n < f;) {
                    var s = q[m], t = r[s][n], u = e[s][t], v = j, w = j += u * a;
                    o[s + "-" + t] = {index: s, subindex: t, startAngle: v, endAngle: w, value: u}
                }
                d[s] = {index: s, startAngle: l, endAngle: j, value: p[s]}, j += k
            }
            for (m = -1; ++m < f;)for (n = m - 1; ++n < f;) {
                var x = o[m + "-" + n], y = o[n + "-" + m];
                (x.value || y.value) && c.push(x.value < y.value ? {source: y, target: x} : {source: x, target: y})
            }
            i && b()
        }

        function b() {
            c.sort(function (a, b) {
                return i((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
            })
        }

        var c, d, e, f, g, h, i, j = {}, k = 0;
        return j.matrix = function (a) {
            return arguments.length ? (f = (e = a) && e.length, c = d = null, j) : e
        }, j.padding = function (a) {
            return arguments.length ? (k = a, c = d = null, j) : k
        }, j.sortGroups = function (a) {
            return arguments.length ? (g = a, c = d = null, j) : g
        }, j.sortSubgroups = function (a) {
            return arguments.length ? (h = a, c = null, j) : h
        }, j.sortChords = function (a) {
            return arguments.length ? (i = a, c && b(), j) : i
        }, j.chords = function () {
            return c || a(), c
        }, j.groups = function () {
            return d || a(), d
        }, j
    }, hg.layout.force = function () {
        function a(a) {
            return function (b, c, d, e) {
                if (b.point !== a) {
                    var f = b.cx - a.x, g = b.cy - a.y, h = e - c, i = f * f + g * g;
                    if (i > h * h / r) {
                        if (p > i) {
                            var j = b.charge / i;
                            a.px -= f * j, a.py -= g * j
                        }
                        return !0
                    }
                    if (b.point && i && p > i) {
                        var j = b.pointCharge / i;
                        a.px -= f * j, a.py -= g * j
                    }
                }
                return !b.charge
            }
        }

        function b(a) {
            a.px = hg.event.x, a.py = hg.event.y, i.resume()
        }

        var c, d, e, f, g, h, i = {}, j = hg.dispatch("start", "tick", "end"), k = [1, 1], l = .9, m = qi, n = ri,
            o = -30, p = si, q = .1, r = .64, t = [], u = [];
        return i.tick = function () {
            if ((e *= .99) < .005)return c = null, j.end({type: "end", alpha: e = 0}), !0;
            var b, d, i, m, n, p, r, s, v, w = t.length, x = u.length;
            for (d = 0; x > d; ++d)i = u[d], m = i.source, n = i.target, s = n.x - m.x, v = n.y - m.y, (p = s * s + v * v) && (p = e * g[d] * ((p = Math.sqrt(p)) - f[d]) / p, s *= p, v *= p, n.x -= s * (r = m.weight + n.weight ? m.weight / (m.weight + n.weight) : .5), n.y -= v * r, m.x += s * (r = 1 - r), m.y += v * r);
            if ((r = e * q) && (s = k[0] / 2, v = k[1] / 2, d = -1, r))for (; ++d < w;)i = t[d], i.x += (s - i.x) * r, i.y += (v - i.y) * r;
            if (o)for (ce(b = hg.geom.quadtree(t), e, h), d = -1; ++d < w;)(i = t[d]).fixed || b.visit(a(i));
            for (d = -1; ++d < w;)i = t[d], i.fixed ? (i.x = i.px, i.y = i.py) : (i.x -= (i.px - (i.px = i.x)) * l, i.y -= (i.py - (i.py = i.y)) * l);
            j.tick({type: "tick", alpha: e})
        }, i.nodes = function (a) {
            return arguments.length ? (t = a, i) : t
        }, i.links = function (a) {
            return arguments.length ? (u = a, i) : u
        }, i.size = function (a) {
            return arguments.length ? (k = a, i) : k
        }, i.linkDistance = function (a) {
            return arguments.length ? (m = "function" == typeof a ? a : +a, i) : m
        }, i.distance = i.linkDistance, i.linkStrength = function (a) {
            return arguments.length ? (n = "function" == typeof a ? a : +a, i) : n
        }, i.friction = function (a) {
            return arguments.length ? (l = +a, i) : l
        }, i.charge = function (a) {
            return arguments.length ? (o = "function" == typeof a ? a : +a, i) : o
        }, i.chargeDistance = function (a) {
            return arguments.length ? (p = a * a, i) : Math.sqrt(p)
        }, i.gravity = function (a) {
            return arguments.length ? (q = +a, i) : q
        }, i.theta = function (a) {
            return arguments.length ? (r = a * a, i) : Math.sqrt(r)
        }, i.alpha = function (a) {
            return arguments.length ? (a = +a, e ? a > 0 ? e = a : (c.c = null, c.t = NaN, c = null, j.end({
                type: "end",
                alpha: e = 0
            })) : a > 0 && (j.start({type: "start", alpha: e = a}), c = Fa(i.tick)), i) : e
        }, i.start = function () {
            function a(a, d) {
                if (!c) {
                    for (c = new Array(e), i = 0; e > i; ++i)c[i] = [];
                    for (i = 0; j > i; ++i) {
                        var f = u[i];
                        c[f.source.index].push(f.target), c[f.target.index].push(f.source)
                    }
                }
                for (var g, h = c[b], i = -1, k = h.length; ++i < k;)if (!isNaN(g = h[i][a]))return g;
                return Math.random() * d
            }

            var b, c, d, e = t.length, j = u.length, l = k[0], p = k[1];
            for (b = 0; e > b; ++b)(d = t[b]).index = b, d.weight = 0;
            for (b = 0; j > b; ++b)d = u[b], "number" == typeof d.source && (d.source = t[d.source]), "number" == typeof d.target && (d.target = t[d.target]), ++d.source.weight, ++d.target.weight;
            for (b = 0; e > b; ++b)d = t[b], isNaN(d.x) && (d.x = a("x", l)), isNaN(d.y) && (d.y = a("y", p)), isNaN(d.px) && (d.px = d.x), isNaN(d.py) && (d.py = d.y);
            if (f = [], "function" == typeof m)for (b = 0; j > b; ++b)f[b] = +m.call(this, u[b], b); else for (b = 0; j > b; ++b)f[b] = m;
            if (g = [], "function" == typeof n)for (b = 0; j > b; ++b)g[b] = +n.call(this, u[b], b); else for (b = 0; j > b; ++b)g[b] = n;
            if (h = [], "function" == typeof o)for (b = 0; e > b; ++b)h[b] = +o.call(this, t[b], b); else for (b = 0; e > b; ++b)h[b] = o;
            return i.resume()
        }, i.resume = function () {
            return i.alpha(.1)
        }, i.stop = function () {
            return i.alpha(0)
        }, i.drag = function () {
            return d || (d = hg.behavior.drag().origin(s).on("dragstart.force", $d).on("drag.force", b).on("dragend.force", _d)), arguments.length ? void this.on("mouseover.force", ae).on("mouseout.force", be).call(d) : d
        }, hg.rebind(i, j, "on")
    };
    var qi = 20, ri = 1, si = 1 / 0;
    hg.layout.hierarchy = function () {
        function a(e) {
            var f, g = [e], h = [];
            for (e.depth = 0; null != (f = g.pop());)if (h.push(f), (j = c.call(a, f, f.depth)) && (i = j.length)) {
                for (var i, j, k; --i >= 0;)g.push(k = j[i]), k.parent = f, k.depth = f.depth + 1;
                d && (f.value = 0), f.children = j
            } else d && (f.value = +d.call(a, f, f.depth) || 0), delete f.children;
            return fe(e, function (a) {
                var c, e;
                b && (c = a.children) && c.sort(b), d && (e = a.parent) && (e.value += a.value)
            }), h
        }

        var b = ie, c = ge, d = he;
        return a.sort = function (c) {
            return arguments.length ? (b = c, a) : b
        }, a.children = function (b) {
            return arguments.length ? (c = b, a) : c
        }, a.value = function (b) {
            return arguments.length ? (d = b, a) : d
        }, a.revalue = function (b) {
            return d && (ee(b, function (a) {
                a.children && (a.value = 0)
            }), fe(b, function (b) {
                var c;
                b.children || (b.value = +d.call(a, b, b.depth) || 0), (c = b.parent) && (c.value += b.value)
            })), b
        }, a
    }, hg.layout.partition = function () {
        function a(b, c, d, e) {
            var f = b.children;
            if (b.x = c, b.y = b.depth * e, b.dx = d, b.dy = e, f && (g = f.length)) {
                var g, h, i, j = -1;
                for (d = b.value ? d / b.value : 0; ++j < g;)a(h = f[j], c, i = h.value * d, e), c += i
            }
        }

        function b(a) {
            var c = a.children, d = 0;
            if (c && (e = c.length))for (var e, f = -1; ++f < e;)d = Math.max(d, b(c[f]));
            return 1 + d
        }

        function c(c, f) {
            var g = d.call(this, c, f);
            return a(g[0], 0, e[0], e[1] / b(g[0])), g
        }

        var d = hg.layout.hierarchy(), e = [1, 1];
        return c.size = function (a) {
            return arguments.length ? (e = a, c) : e
        }, de(c, d)
    }, hg.layout.pie = function () {
        function a(g) {
            var h, i = g.length, j = g.map(function (c, d) {
                    return +b.call(a, c, d)
                }), k = +("function" == typeof d ? d.apply(this, arguments) : d),
                l = ("function" == typeof e ? e.apply(this, arguments) : e) - k,
                m = Math.min(Math.abs(l) / i, +("function" == typeof f ? f.apply(this, arguments) : f)),
                n = m * (0 > l ? -1 : 1), o = hg.sum(j), p = o ? (l - i * n) / o : 0, q = hg.range(i), r = [];
            return null != c && q.sort(c === ti ? function (a, b) {
                return j[b] - j[a]
            } : function (a, b) {
                return c(g[a], g[b])
            }), q.forEach(function (a) {
                r[a] = {data: g[a], value: h = j[a], startAngle: k, endAngle: k += h * p + n, padAngle: m}
            }), r
        }

        var b = Number, c = ti, d = 0, e = Mg, f = 0;
        return a.value = function (c) {
            return arguments.length ? (b = c, a) : b
        }, a.sort = function (b) {
            return arguments.length ? (c = b, a) : c
        }, a.startAngle = function (b) {
            return arguments.length ? (d = b, a) : d
        }, a.endAngle = function (b) {
            return arguments.length ? (e = b, a) : e
        }, a.padAngle = function (b) {
            return arguments.length ? (f = b, a) : f
        }, a
    };
    var ti = {};
    hg.layout.stack = function () {
        function a(h, i) {
            if (!(m = h.length))return h;
            var j = h.map(function (c, d) {
                return b.call(a, c, d)
            }), k = j.map(function (b) {
                return b.map(function (b, c) {
                    return [f.call(a, b, c), g.call(a, b, c)]
                })
            }), l = c.call(a, k, i);
            j = hg.permute(j, l), k = hg.permute(k, l);
            var m, n, o, p, q = d.call(a, k, i), r = j[0].length;
            for (o = 0; r > o; ++o)for (e.call(a, j[0][o], p = q[o], k[0][o][1]), n = 1; m > n; ++n)e.call(a, j[n][o], p += k[n - 1][o][1], k[n][o][1]);
            return h
        }

        var b = s, c = ne, d = oe, e = me, f = ke, g = le;
        return a.values = function (c) {
            return arguments.length ? (b = c, a) : b
        }, a.order = function (b) {
            return arguments.length ? (c = "function" == typeof b ? b : ui.get(b) || ne, a) : c
        }, a.offset = function (b) {
            return arguments.length ? (d = "function" == typeof b ? b : vi.get(b) || oe, a) : d
        }, a.x = function (b) {
            return arguments.length ? (f = b, a) : f
        }, a.y = function (b) {
            return arguments.length ? (g = b, a) : g
        }, a.out = function (b) {
            return arguments.length ? (e = b, a) : e
        }, a
    };
    var ui = hg.map({
        "inside-out": function (a) {
            var b, c, d = a.length, e = a.map(pe), f = a.map(qe), g = hg.range(d).sort(function (a, b) {
                return e[a] - e[b]
            }), h = 0, i = 0, j = [], k = [];
            for (b = 0; d > b; ++b)c = g[b], i > h ? (h += f[c], j.push(c)) : (i += f[c], k.push(c));
            return k.reverse().concat(j)
        }, reverse: function (a) {
            return hg.range(a.length).reverse()
        }, "default": ne
    }), vi = hg.map({
        silhouette: function (a) {
            var b, c, d, e = a.length, f = a[0].length, g = [], h = 0, i = [];
            for (c = 0; f > c; ++c) {
                for (b = 0, d = 0; e > b; b++)d += a[b][c][1];
                d > h && (h = d), g.push(d)
            }
            for (c = 0; f > c; ++c)i[c] = (h - g[c]) / 2;
            return i
        }, wiggle: function (a) {
            var b, c, d, e, f, g, h, i, j, k = a.length, l = a[0], m = l.length, n = [];
            for (n[0] = i = j = 0, c = 1; m > c; ++c) {
                for (b = 0, e = 0; k > b; ++b)e += a[b][c][1];
                for (b = 0, f = 0, h = l[c][0] - l[c - 1][0]; k > b; ++b) {
                    for (d = 0, g = (a[b][c][1] - a[b][c - 1][1]) / (2 * h); b > d; ++d)g += (a[d][c][1] - a[d][c - 1][1]) / h;
                    f += g * a[b][c][1]
                }
                n[c] = i -= e ? f / e * h : 0, j > i && (j = i)
            }
            for (c = 0; m > c; ++c)n[c] -= j;
            return n
        }, expand: function (a) {
            var b, c, d, e = a.length, f = a[0].length, g = 1 / e, h = [];
            for (c = 0; f > c; ++c) {
                for (b = 0, d = 0; e > b; b++)d += a[b][c][1];
                if (d)for (b = 0; e > b; b++)a[b][c][1] /= d; else for (b = 0; e > b; b++)a[b][c][1] = g
            }
            for (c = 0; f > c; ++c)h[c] = 0;
            return h
        }, zero: oe
    });
    hg.layout.histogram = function () {
        function a(a, f) {
            for (var g, h, i = [], j = a.map(c, this), k = d.call(this, j, f), l = e.call(this, k, j, f), f = -1,
                     m = j.length, n = l.length - 1,
                     o = b ? 1 : 1 / m; ++f < n;)g = i[f] = [], g.dx = l[f + 1] - (g.x = l[f]), g.y = 0;
            if (n > 0)for (f = -1; ++f < m;)h = j[f], h >= k[0] && h <= k[1] && (g = i[hg.bisect(l, h, 1, n) - 1], g.y += o, g.push(a[f]));
            return i
        }

        var b = !0, c = Number, d = ue, e = se;
        return a.value = function (b) {
            return arguments.length ? (c = b, a) : c
        }, a.range = function (b) {
            return arguments.length ? (d = Aa(b), a) : d
        }, a.bins = function (b) {
            return arguments.length ? (e = "number" == typeof b ? function (a) {
                return te(a, b)
            } : Aa(b), a) : e
        }, a.frequency = function (c) {
            return arguments.length ? (b = !!c, a) : b
        }, a
    }, hg.layout.pack = function () {
        function a(a, f) {
            var g = c.call(this, a, f), h = g[0], i = e[0], j = e[1],
                k = null == b ? Math.sqrt : "function" == typeof b ? b : function () {
                    return b
                };
            if (h.x = h.y = 0, fe(h, function (a) {
                    a.r = +k(a.value)
                }), fe(h, ze), d) {
                var l = d * (b ? 1 : Math.max(2 * h.r / i, 2 * h.r / j)) / 2;
                fe(h, function (a) {
                    a.r += l
                }), fe(h, ze), fe(h, function (a) {
                    a.r -= l
                })
            }
            return Ce(h, i / 2, j / 2, b ? 1 : 1 / Math.max(2 * h.r / i, 2 * h.r / j)), g
        }

        var b, c = hg.layout.hierarchy().sort(ve), d = 0, e = [1, 1];
        return a.size = function (b) {
            return arguments.length ? (e = b, a) : e
        }, a.radius = function (c) {
            return arguments.length ? (b = null == c || "function" == typeof c ? c : +c, a) : b
        }, a.padding = function (b) {
            return arguments.length ? (d = +b, a) : d
        }, de(a, c)
    }, hg.layout.tree = function () {
        function a(a, e) {
            var k = g.call(this, a, e), l = k[0], m = b(l);
            if (fe(m, c), m.parent.m = -m.z, ee(m, d), j) ee(l, f); else {
                var n = l, o = l, p = l;
                ee(l, function (a) {
                    a.x < n.x && (n = a), a.x > o.x && (o = a), a.depth > p.depth && (p = a)
                });
                var q = h(n, o) / 2 - n.x, r = i[0] / (o.x + h(o, n) / 2 + q), s = i[1] / (p.depth || 1);
                ee(l, function (a) {
                    a.x = (a.x + q) * r, a.y = a.depth * s
                })
            }
            return k
        }

        function b(a) {
            for (var b, c = {A: null, children: [a]}, d = [c]; null != (b = d.pop());)for (var e, f = b.children, g = 0,
                                                                                               h = f.length; h > g; ++g)d.push((f[g] = e = {
                _: f[g],
                parent: b,
                children: (e = f[g].children) && e.slice() || [],
                A: null,
                a: null,
                z: 0,
                m: 0,
                c: 0,
                s: 0,
                t: null,
                i: g
            }).a = e);
            return c.children[0]
        }

        function c(a) {
            var b = a.children, c = a.parent.children, d = a.i ? c[a.i - 1] : null;
            if (b.length) {
                Ie(a);
                var f = (b[0].z + b[b.length - 1].z) / 2;
                d ? (a.z = d.z + h(a._, d._), a.m = a.z - f) : a.z = f
            } else d && (a.z = d.z + h(a._, d._));
            a.parent.A = e(a, d, a.parent.A || c[0])
        }

        function d(a) {
            a._.x = a.z + a.parent.m, a.m += a.parent.m
        }

        function e(a, b, c) {
            if (b) {
                for (var d, e = a, f = a, g = b, i = e.parent.children[0], j = e.m, k = f.m, l = g.m,
                         m = i.m; g = Ge(g), e = Fe(e), g && e;)i = Fe(i), f = Ge(f), f.a = a, d = g.z + l - e.z - j + h(g._, e._), d > 0 && (He(Je(g, a, c), a, d), j += d, k += d), l += g.m, j += e.m, m += i.m, k += f.m;
                g && !Ge(f) && (f.t = g, f.m += l - k), e && !Fe(i) && (i.t = e, i.m += j - m, c = a)
            }
            return c
        }

        function f(a) {
            a.x *= i[0], a.y = a.depth * i[1]
        }

        var g = hg.layout.hierarchy().sort(null).value(null), h = Ee, i = [1, 1], j = null;
        return a.separation = function (b) {
            return arguments.length ? (h = b, a) : h
        }, a.size = function (b) {
            return arguments.length ? (j = null == (i = b) ? f : null, a) : j ? null : i
        }, a.nodeSize = function (b) {
            return arguments.length ? (j = null == (i = b) ? null : f, a) : j ? i : null
        }, de(a, g)
    }, hg.layout.cluster = function () {
        function a(a, f) {
            var g, h = b.call(this, a, f), i = h[0], j = 0;
            fe(i, function (a) {
                var b = a.children;
                b && b.length ? (a.x = Le(b), a.y = Ke(b)) : (a.x = g ? j += c(a, g) : 0, a.y = 0, g = a)
            });
            var k = Me(i), l = Ne(i), m = k.x - c(k, l) / 2, n = l.x + c(l, k) / 2;
            return fe(i, e ? function (a) {
                a.x = (a.x - i.x) * d[0], a.y = (i.y - a.y) * d[1]
            } : function (a) {
                a.x = (a.x - m) / (n - m) * d[0], a.y = (1 - (i.y ? a.y / i.y : 1)) * d[1]
            }), h
        }

        var b = hg.layout.hierarchy().sort(null).value(null), c = Ee, d = [1, 1], e = !1;
        return a.separation = function (b) {
            return arguments.length ? (c = b, a) : c
        }, a.size = function (b) {
            return arguments.length ? (e = null == (d = b), a) : e ? null : d
        }, a.nodeSize = function (b) {
            return arguments.length ? (e = null != (d = b), a) : e ? d : null
        }, de(a, b)
    }, hg.layout.treemap = function () {
        function a(a, b) {
            for (var c, d, e = -1,
                     f = a.length; ++e < f;)d = (c = a[e]).value * (0 > b ? 0 : b), c.area = isNaN(d) || 0 >= d ? 0 : d
        }

        function b(c) {
            var f = c.children;
            if (f && f.length) {
                var g, h, i, j = l(c), k = [], m = f.slice(), o = 1 / 0,
                    p = "slice" === n ? j.dx : "dice" === n ? j.dy : "slice-dice" === n ? 1 & c.depth ? j.dy : j.dx : Math.min(j.dx, j.dy);
                for (a(m, j.dx * j.dy / c.value), k.area = 0; (i = m.length) > 0;)k.push(g = m[i - 1]), k.area += g.area, "squarify" !== n || (h = d(k, p)) <= o ? (m.pop(), o = h) : (k.area -= k.pop().area, e(k, p, j, !1), p = Math.min(j.dx, j.dy), k.length = k.area = 0, o = 1 / 0);
                k.length && (e(k, p, j, !0), k.length = k.area = 0), f.forEach(b)
            }
        }

        function c(b) {
            var d = b.children;
            if (d && d.length) {
                var f, g = l(b), h = d.slice(), i = [];
                for (a(h, g.dx * g.dy / b.value), i.area = 0; f = h.pop();)i.push(f), i.area += f.area, null != f.z && (e(i, f.z ? g.dx : g.dy, g, !h.length), i.length = i.area = 0);
                d.forEach(c)
            }
        }

        function d(a, b) {
            for (var c, d = a.area, e = 0, f = 1 / 0, g = -1,
                     h = a.length; ++g < h;)(c = a[g].area) && (f > c && (f = c), c > e && (e = c));
            return d *= d, b *= b, d ? Math.max(b * e * o / d, d / (b * f * o)) : 1 / 0
        }

        function e(a, b, c, d) {
            var e, f = -1, g = a.length, h = c.x, j = c.y, k = b ? i(a.area / b) : 0;
            if (b == c.dx) {
                for ((d || k > c.dy) && (k = c.dy); ++f < g;)e = a[f], e.x = h, e.y = j, e.dy = k, h += e.dx = Math.min(c.x + c.dx - h, k ? i(e.area / k) : 0);
                e.z = !0, e.dx += c.x + c.dx - h, c.y += k, c.dy -= k
            } else {
                for ((d || k > c.dx) && (k = c.dx); ++f < g;)e = a[f], e.x = h, e.y = j, e.dx = k, j += e.dy = Math.min(c.y + c.dy - j, k ? i(e.area / k) : 0);
                e.z = !1, e.dy += c.y + c.dy - j, c.x += k, c.dx -= k
            }
        }

        function f(d) {
            var e = g || h(d), f = e[0];
            return f.x = f.y = 0, f.value ? (f.dx = j[0], f.dy = j[1]) : f.dx = f.dy = 0, g && h.revalue(f), a([f], f.dx * f.dy / f.value), (g ? c : b)(f), m && (g = e), e
        }

        var g, h = hg.layout.hierarchy(), i = Math.round, j = [1, 1], k = null, l = Oe, m = !1, n = "squarify",
            o = .5 * (1 + Math.sqrt(5));
        return f.size = function (a) {
            return arguments.length ? (j = a, f) : j
        }, f.padding = function (a) {
            function b(b) {
                var c = a.call(f, b, b.depth);
                return null == c ? Oe(b) : Pe(b, "number" == typeof c ? [c, c, c, c] : c)
            }

            function c(b) {
                return Pe(b, a)
            }

            if (!arguments.length)return k;
            var d;
            return l = null == (k = a) ? Oe : "function" == (d = typeof a) ? b : "number" === d ? (a = [a, a, a, a], c) : c, f
        }, f.round = function (a) {
            return arguments.length ? (i = a ? Math.round : Number, f) : i != Number
        }, f.sticky = function (a) {
            return arguments.length ? (m = a, g = null, f) : m
        }, f.ratio = function (a) {
            return arguments.length ? (o = a, f) : o
        }, f.mode = function (a) {
            return arguments.length ? (n = a + "", f) : n
        }, de(f, h)
    }, hg.random = {
        normal: function (a, b) {
            var c = arguments.length;
            return 2 > c && (b = 1), 1 > c && (a = 0), function () {
                var c, d, e;
                do c = 2 * Math.random() - 1, d = 2 * Math.random() - 1, e = c * c + d * d; while (!e || e > 1);
                return a + b * c * Math.sqrt(-2 * Math.log(e) / e)
            }
        }, logNormal: function () {
            var a = hg.random.normal.apply(hg, arguments);
            return function () {
                return Math.exp(a())
            }
        }, bates: function (a) {
            var b = hg.random.irwinHall(a);
            return function () {
                return b() / a
            }
        }, irwinHall: function (a) {
            return function () {
                for (var b = 0, c = 0; a > c; c++)b += Math.random();
                return b
            }
        }
    }, hg.scale = {};
    var wi = {floor: s, ceil: s};
    hg.scale.linear = function () {
        return We([0, 1], [0, 1], sd, !1)
    };
    var xi = {s: 1, g: 1, p: 1, r: 1, e: 1};
    hg.scale.log = function () {
        return cf(hg.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var yi = hg.format(".0e"), zi = {
        floor: function (a) {
            return -Math.ceil(-a)
        }, ceil: function (a) {
            return -Math.floor(-a)
        }
    };
    hg.scale.pow = function () {
        return df(hg.scale.linear(), 1, [0, 1])
    }, hg.scale.sqrt = function () {
        return hg.scale.pow().exponent(.5)
    }, hg.scale.ordinal = function () {
        return ff([], {t: "range", a: [[]]})
    }, hg.scale.category10 = function () {
        return hg.scale.ordinal().range(Ai)
    }, hg.scale.category20 = function () {
        return hg.scale.ordinal().range(Bi)
    }, hg.scale.category20b = function () {
        return hg.scale.ordinal().range(Ci)
    }, hg.scale.category20c = function () {
        return hg.scale.ordinal().range(Di)
    };
    var Ai = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ta),
        Bi = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ta),
        Ci = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ta),
        Di = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ta);
    hg.scale.quantile = function () {
        return gf([], [])
    }, hg.scale.quantize = function () {
        return hf(0, 1, [0, 1])
    }, hg.scale.threshold = function () {
        return jf([.5], [0, 1])
    }, hg.scale.identity = function () {
        return kf([0, 1])
    }, hg.svg = {}, hg.svg.arc = function () {
        function a() {
            var a = Math.max(0, +c.apply(this, arguments)), j = Math.max(0, +d.apply(this, arguments)),
                k = g.apply(this, arguments) - Og, l = h.apply(this, arguments) - Og, m = Math.abs(l - k),
                n = k > l ? 0 : 1;
            if (a > j && (o = j, j = a, a = o), m >= Ng)return b(j, n) + (a ? b(a, 1 - n) : "") + "Z";
            var o, p, q, r, s, t, u, v, w, x, y, z, A = 0, B = 0, C = [];
            if ((r = (+i.apply(this, arguments) || 0) / 2) && (q = f === Ei ? Math.sqrt(a * a + j * j) : +f.apply(this, arguments), n || (B *= -1), j && (B = ba(q / j * Math.sin(r))), a && (A = ba(q / a * Math.sin(r)))), j) {
                s = j * Math.cos(k + B), t = j * Math.sin(k + B), u = j * Math.cos(l - B), v = j * Math.sin(l - B);
                var D = Math.abs(l - k - 2 * B) <= Lg ? 0 : 1;
                if (B && rf(s, t, u, v) === n ^ D) {
                    var E = (k + l) / 2;
                    s = j * Math.cos(E), t = j * Math.sin(E), u = v = null
                }
            } else s = t = 0;
            if (a) {
                w = a * Math.cos(l - A), x = a * Math.sin(l - A), y = a * Math.cos(k + A), z = a * Math.sin(k + A);
                var F = Math.abs(k - l + 2 * A) <= Lg ? 0 : 1;
                if (A && rf(w, x, y, z) === 1 - n ^ F) {
                    var G = (k + l) / 2;
                    w = a * Math.cos(G), x = a * Math.sin(G), y = z = null
                }
            } else w = x = 0;
            if (m > Jg && (o = Math.min(Math.abs(j - a) / 2, +e.apply(this, arguments))) > .001) {
                p = j > a ^ n ? 0 : 1;
                var H = o, I = o;
                if (Lg > m) {
                    var J = null == y ? [w, x] : null == u ? [s, t] : Hc([s, t], [y, z], [u, v], [w, x]), K = s - J[0],
                        L = t - J[1], M = u - J[0], N = v - J[1],
                        O = 1 / Math.sin(Math.acos((K * M + L * N) / (Math.sqrt(K * K + L * L) * Math.sqrt(M * M + N * N))) / 2),
                        P = Math.sqrt(J[0] * J[0] + J[1] * J[1]);
                    I = Math.min(o, (a - P) / (O - 1)), H = Math.min(o, (j - P) / (O + 1))
                }
                if (null != u) {
                    var Q = sf(null == y ? [w, x] : [y, z], [s, t], j, H, n), R = sf([u, v], [w, x], j, H, n);
                    o === H ? C.push("M", Q[0], "A", H, ",", H, " 0 0,", p, " ", Q[1], "A", j, ",", j, " 0 ", 1 - n ^ rf(Q[1][0], Q[1][1], R[1][0], R[1][1]), ",", n, " ", R[1], "A", H, ",", H, " 0 0,", p, " ", R[0]) : C.push("M", Q[0], "A", H, ",", H, " 0 1,", p, " ", R[0])
                } else C.push("M", s, ",", t);
                if (null != y) {
                    var S = sf([s, t], [y, z], a, -I, n), T = sf([w, x], null == u ? [s, t] : [u, v], a, -I, n);
                    o === I ? C.push("L", T[0], "A", I, ",", I, " 0 0,", p, " ", T[1], "A", a, ",", a, " 0 ", n ^ rf(T[1][0], T[1][1], S[1][0], S[1][1]), ",", 1 - n, " ", S[1], "A", I, ",", I, " 0 0,", p, " ", S[0]) : C.push("L", T[0], "A", I, ",", I, " 0 0,", p, " ", S[0])
                } else C.push("L", w, ",", x)
            } else C.push("M", s, ",", t), null != u && C.push("A", j, ",", j, " 0 ", D, ",", n, " ", u, ",", v), C.push("L", w, ",", x), null != y && C.push("A", a, ",", a, " 0 ", F, ",", 1 - n, " ", y, ",", z);
            return C.push("Z"), C.join("")
        }

        function b(a, b) {
            return "M0," + a + "A" + a + "," + a + " 0 1," + b + " 0," + -a + "A" + a + "," + a + " 0 1," + b + " 0," + a
        }

        var c = mf, d = nf, e = lf, f = Ei, g = of, h = pf, i = qf;
        return a.innerRadius = function (b) {
            return arguments.length ? (c = Aa(b), a) : c
        }, a.outerRadius = function (b) {
            return arguments.length ? (d = Aa(b), a) : d
        }, a.cornerRadius = function (b) {
            return arguments.length ? (e = Aa(b), a) : e
        }, a.padRadius = function (b) {
            return arguments.length ? (f = b == Ei ? Ei : Aa(b), a) : f
        }, a.startAngle = function (b) {
            return arguments.length ? (g = Aa(b), a) : g
        }, a.endAngle = function (b) {
            return arguments.length ? (h = Aa(b), a) : h
        }, a.padAngle = function (b) {
            return arguments.length ? (i = Aa(b), a) : i
        }, a.centroid = function () {
            var a = (+c.apply(this, arguments) + +d.apply(this, arguments)) / 2,
                b = (+g.apply(this, arguments) + +h.apply(this, arguments)) / 2 - Og;
            return [Math.cos(b) * a, Math.sin(b) * a]
        }, a
    };
    var Ei = "auto";
    hg.svg.line = function () {
        return tf(s)
    };
    var Fi = hg.map({
        linear: uf,
        "linear-closed": vf,
        step: wf,
        "step-before": xf,
        "step-after": yf,
        basis: Ef,
        "basis-open": Ff,
        "basis-closed": Gf,
        bundle: Hf,
        cardinal: Bf,
        "cardinal-open": zf,
        "cardinal-closed": Af,
        monotone: Nf
    });
    Fi.forEach(function (a, b) {
        b.key = a, b.closed = /-closed$/.test(a)
    });
    var Gi = [0, 2 / 3, 1 / 3, 0], Hi = [0, 1 / 3, 2 / 3, 0], Ii = [0, 1 / 6, 2 / 3, 1 / 6];
    hg.svg.line.radial = function () {
        var a = tf(Of);
        return a.radius = a.x, delete a.x, a.angle = a.y, delete a.y, a
    }, xf.reverse = yf, yf.reverse = xf, hg.svg.area = function () {
        return Pf(s)
    }, hg.svg.area.radial = function () {
        var a = Pf(Of);
        return a.radius = a.x, delete a.x, a.innerRadius = a.x0, delete a.x0, a.outerRadius = a.x1, delete a.x1, a.angle = a.y, delete a.y, a.startAngle = a.y0, delete a.y0, a.endAngle = a.y1, delete a.y1, a
    }, hg.svg.chord = function () {
        function a(a, h) {
            var i = b(this, f, a, h), j = b(this, g, a, h);
            return "M" + i.p0 + d(i.r, i.p1, i.a1 - i.a0) + (c(i, j) ? e(i.r, i.p1, i.r, i.p0) : e(i.r, i.p1, j.r, j.p0) + d(j.r, j.p1, j.a1 - j.a0) + e(j.r, j.p1, i.r, i.p0)) + "Z"
        }

        function b(a, b, c, d) {
            var e = b.call(a, c, d), f = h.call(a, e, d), g = i.call(a, e, d) - Og, k = j.call(a, e, d) - Og;
            return {r: f, a0: g, a1: k, p0: [f * Math.cos(g), f * Math.sin(g)], p1: [f * Math.cos(k), f * Math.sin(k)]}
        }

        function c(a, b) {
            return a.a0 == b.a0 && a.a1 == b.a1
        }

        function d(a, b, c) {
            return "A" + a + "," + a + " 0 " + +(c > Lg) + ",1 " + b
        }

        function e(a, b, c, d) {
            return "Q 0,0 " + d
        }

        var f = sc, g = tc, h = Qf, i = of, j = pf;
        return a.radius = function (b) {
            return arguments.length ? (h = Aa(b), a) : h
        }, a.source = function (b) {
            return arguments.length ? (f = Aa(b), a) : f
        }, a.target = function (b) {
            return arguments.length ? (g = Aa(b), a) : g
        }, a.startAngle = function (b) {
            return arguments.length ? (i = Aa(b), a) : i
        }, a.endAngle = function (b) {
            return arguments.length ? (j = Aa(b), a) : j
        }, a
    }, hg.svg.diagonal = function () {
        function a(a, e) {
            var f = b.call(this, a, e), g = c.call(this, a, e), h = (f.y + g.y) / 2,
                i = [f, {x: f.x, y: h}, {x: g.x, y: h}, g];
            return i = i.map(d), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
        }

        var b = sc, c = tc, d = Rf;
        return a.source = function (c) {
            return arguments.length ? (b = Aa(c), a) : b
        }, a.target = function (b) {
            return arguments.length ? (c = Aa(b), a) : c
        }, a.projection = function (b) {
            return arguments.length ? (d = b, a) : d
        }, a
    }, hg.svg.diagonal.radial = function () {
        var a = hg.svg.diagonal(), b = Rf, c = a.projection;
        return a.projection = function (a) {
            return arguments.length ? c(Sf(b = a)) : b
        }, a
    }, hg.svg.symbol = function () {
        function a(a, d) {
            return (Ji.get(b.call(this, a, d)) || Vf)(c.call(this, a, d))
        }

        var b = Uf, c = Tf;
        return a.type = function (c) {
            return arguments.length ? (b = Aa(c), a) : b
        }, a.size = function (b) {
            return arguments.length ? (c = Aa(b), a) : c
        }, a
    };
    var Ji = hg.map({
        circle: Vf, cross: function (a) {
            var b = Math.sqrt(a / 5) / 2;
            return "M" + -3 * b + "," + -b + "H" + -b + "V" + -3 * b + "H" + b + "V" + -b + "H" + 3 * b + "V" + b + "H" + b + "V" + 3 * b + "H" + -b + "V" + b + "H" + -3 * b + "Z"
        }, diamond: function (a) {
            var b = Math.sqrt(a / (2 * Li)), c = b * Li;
            return "M0," + -b + "L" + c + ",0 0," + b + " " + -c + ",0Z"
        }, square: function (a) {
            var b = Math.sqrt(a) / 2;
            return "M" + -b + "," + -b + "L" + b + "," + -b + " " + b + "," + b + " " + -b + "," + b + "Z"
        }, "triangle-down": function (a) {
            var b = Math.sqrt(a / Ki), c = b * Ki / 2;
            return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z"
        }, "triangle-up": function (a) {
            var b = Math.sqrt(a / Ki), c = b * Ki / 2;
            return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z"
        }
    });
    hg.svg.symbolTypes = Ji.keys();
    var Ki = Math.sqrt(3), Li = Math.tan(30 * Pg);
    Cg.transition = function (a) {
        for (var b, c, d = Mi || ++Qi, e = $f(a), f = [],
                 g = Ni || {time: Date.now(), ease: zd, delay: 0, duration: 250}, h = -1, i = this.length; ++h < i;) {
            f.push(b = []);
            for (var j = this[h], k = -1, l = j.length; ++k < l;)(c = j[k]) && _f(c, k, e, d, g), b.push(c)
        }
        return Xf(f, e, d)
    }, Cg.interrupt = function (a) {
        return this.each(null == a ? Oi : Wf($f(a)))
    };
    var Mi, Ni, Oi = Wf($f()), Pi = [], Qi = 0;
    Pi.call = Cg.call, Pi.empty = Cg.empty, Pi.node = Cg.node, Pi.size = Cg.size, hg.transition = function (a, b) {
        return a && a.transition ? Mi ? a.transition(b) : a : hg.selection().transition(a)
    }, hg.transition.prototype = Pi, Pi.select = function (a) {
        var b, c, d, e = this.id, f = this.namespace, g = [];
        a = C(a);
        for (var h = -1, i = this.length; ++h < i;) {
            g.push(b = []);
            for (var j = this[h], k = -1,
                     l = j.length; ++k < l;)(d = j[k]) && (c = a.call(d, d.__data__, k, h)) ? ("__data__" in d && (c.__data__ = d.__data__), _f(c, k, f, e, d[f][e]), b.push(c)) : b.push(null)
        }
        return Xf(g, f, e)
    }, Pi.selectAll = function (a) {
        var b, c, d, e, f, g = this.id, h = this.namespace, i = [];
        a = D(a);
        for (var j = -1, k = this.length; ++j < k;)for (var l = this[j], m = -1, n = l.length; ++m < n;)if (d = l[m]) {
            f = d[h][g], c = a.call(d, d.__data__, m, j), i.push(b = []);
            for (var o = -1, p = c.length; ++o < p;)(e = c[o]) && _f(e, o, h, g, f), b.push(e)
        }
        return Xf(i, h, g)
    }, Pi.filter = function (a) {
        var b, c, d, e = [];
        "function" != typeof a && (a = P(a));
        for (var f = 0, g = this.length; g > f; f++) {
            e.push(b = []);
            for (var c = this[f], h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
        }
        return Xf(e, this.namespace, this.id)
    }, Pi.tween = function (a, b) {
        var c = this.id, d = this.namespace;
        return arguments.length < 2 ? this.node()[d][c].tween.get(a) : R(this, null == b ? function (b) {
            b[d][c].tween.remove(a)
        } : function (e) {
            e[d][c].tween.set(a, b)
        })
    }, Pi.attr = function (a, b) {
        function c() {
            this.removeAttribute(h)
        }

        function d() {
            this.removeAttributeNS(h.space, h.local)
        }

        function e(a) {
            return null == a ? c : (a += "", function () {
                var b, c = this.getAttribute(h);
                return c !== a && (b = g(c, a), function (a) {
                        this.setAttribute(h, b(a))
                    })
            })
        }

        function f(a) {
            return null == a ? d : (a += "", function () {
                var b, c = this.getAttributeNS(h.space, h.local);
                return c !== a && (b = g(c, a), function (a) {
                        this.setAttributeNS(h.space, h.local, b(a))
                    })
            })
        }

        if (arguments.length < 2) {
            for (b in a)this.attr(b, a[b]);
            return this
        }
        var g = "transform" == a ? Ud : sd, h = hg.ns.qualify(a);
        return Yf(this, "attr." + a, b, h.local ? f : e)
    }, Pi.attrTween = function (a, b) {
        function c(a, c) {
            var d = b.call(this, a, c, this.getAttribute(e));
            return d && function (a) {
                    this.setAttribute(e, d(a))
                }
        }

        function d(a, c) {
            var d = b.call(this, a, c, this.getAttributeNS(e.space, e.local));
            return d && function (a) {
                    this.setAttributeNS(e.space, e.local, d(a))
                }
        }

        var e = hg.ns.qualify(a);
        return this.tween("attr." + a, e.local ? d : c)
    }, Pi.style = function (a, c, d) {
        function e() {
            this.style.removeProperty(a);
        }

        function f(c) {
            return null == c ? e : (c += "", function () {
                var e, f = b(this).getComputedStyle(this, null).getPropertyValue(a);
                return f !== c && (e = sd(f, c), function (b) {
                        this.style.setProperty(a, e(b), d)
                    })
            })
        }

        var g = arguments.length;
        if (3 > g) {
            if ("string" != typeof a) {
                2 > g && (c = "");
                for (d in a)this.style(d, a[d], c);
                return this
            }
            d = ""
        }
        return Yf(this, "style." + a, c, f)
    }, Pi.styleTween = function (a, c, d) {
        function e(e, f) {
            var g = c.call(this, e, f, b(this).getComputedStyle(this, null).getPropertyValue(a));
            return g && function (b) {
                    this.style.setProperty(a, g(b), d)
                }
        }

        return arguments.length < 3 && (d = ""), this.tween("style." + a, e)
    }, Pi.text = function (a) {
        return Yf(this, "text", a, Zf)
    }, Pi.remove = function () {
        var a = this.namespace;
        return this.each("end.transition", function () {
            var b;
            this[a].count < 2 && (b = this.parentNode) && b.removeChild(this)
        })
    }, Pi.ease = function (a) {
        var b = this.id, c = this.namespace;
        return arguments.length < 1 ? this.node()[c][b].ease : ("function" != typeof a && (a = hg.ease.apply(hg, arguments)), R(this, function (d) {
            d[c][b].ease = a
        }))
    }, Pi.delay = function (a) {
        var b = this.id, c = this.namespace;
        return arguments.length < 1 ? this.node()[c][b].delay : R(this, "function" == typeof a ? function (d, e, f) {
            d[c][b].delay = +a.call(d, d.__data__, e, f)
        } : (a = +a, function (d) {
            d[c][b].delay = a
        }))
    }, Pi.duration = function (a) {
        var b = this.id, c = this.namespace;
        return arguments.length < 1 ? this.node()[c][b].duration : R(this, "function" == typeof a ? function (d, e, f) {
            d[c][b].duration = Math.max(1, a.call(d, d.__data__, e, f))
        } : (a = Math.max(1, a), function (d) {
            d[c][b].duration = a
        }))
    }, Pi.each = function (a, b) {
        var c = this.id, d = this.namespace;
        if (arguments.length < 2) {
            var e = Ni, f = Mi;
            try {
                Mi = c, R(this, function (b, e, f) {
                    Ni = b[d][c], a.call(b, b.__data__, e, f)
                })
            } finally {
                Ni = e, Mi = f
            }
        } else R(this, function (e) {
            var f = e[d][c];
            (f.event || (f.event = hg.dispatch("start", "end", "interrupt"))).on(a, b)
        });
        return this
    }, Pi.transition = function () {
        for (var a, b, c, d, e = this.id, f = ++Qi, g = this.namespace, h = [], i = 0, j = this.length; j > i; i++) {
            h.push(a = []);
            for (var b = this[i], k = 0, l = b.length; l > k; k++)(c = b[k]) && (d = c[g][e], _f(c, k, g, f, {
                time: d.time,
                ease: d.ease,
                delay: d.delay + d.duration,
                duration: d.duration
            })), a.push(c)
        }
        return Xf(h, g, f)
    }, hg.svg.axis = function () {
        function a(a) {
            a.each(function () {
                var a, j = hg.select(this), k = this.__chart__ || c, l = this.__chart__ = c.copy(),
                    m = null == i ? l.ticks ? l.ticks.apply(l, h) : l.domain() : i,
                    n = null == b ? l.tickFormat ? l.tickFormat.apply(l, h) : s : b,
                    o = j.selectAll(".tick").data(m, l),
                    p = o.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Jg),
                    q = hg.transition(o.exit()).style("opacity", Jg).remove(),
                    r = hg.transition(o.order()).style("opacity", 1), t = Math.max(e, 0) + g, u = Re(l),
                    v = j.selectAll(".domain").data([0]),
                    w = (v.enter().append("path").attr("class", "domain"), hg.transition(v));
                p.append("line"), p.append("text");
                var x, y, z, A, B = p.select("line"), C = r.select("line"), D = o.select("text").text(n),
                    E = p.select("text"), F = r.select("text"), G = "top" === d || "left" === d ? -1 : 1;
                if ("bottom" === d || "top" === d ? (a = ag, x = "x", z = "y", y = "x2", A = "y2", D.attr("dy", 0 > G ? "0em" : ".71em").style("text-anchor", "middle"), w.attr("d", "M" + u[0] + "," + G * f + "V0H" + u[1] + "V" + G * f)) : (a = bg, x = "y", z = "x", y = "y2", A = "x2", D.attr("dy", ".32em").style("text-anchor", 0 > G ? "end" : "start"), w.attr("d", "M" + G * f + "," + u[0] + "H0V" + u[1] + "H" + G * f)), B.attr(A, G * e), E.attr(z, G * t), C.attr(y, 0).attr(A, G * e), F.attr(x, 0).attr(z, G * t), l.rangeBand) {
                    var H = l, I = H.rangeBand() / 2;
                    k = l = function (a) {
                        return H(a) + I
                    }
                } else k.rangeBand ? k = l : q.call(a, l, k);
                p.call(a, k, l), r.call(a, l, l)
            })
        }

        var b, c = hg.scale.linear(), d = Ri, e = 6, f = 6, g = 3, h = [10], i = null;
        return a.scale = function (b) {
            return arguments.length ? (c = b, a) : c
        }, a.orient = function (b) {
            return arguments.length ? (d = b in Si ? b + "" : Ri, a) : d
        }, a.ticks = function () {
            return arguments.length ? (h = jg(arguments), a) : h
        }, a.tickValues = function (b) {
            return arguments.length ? (i = b, a) : i
        }, a.tickFormat = function (c) {
            return arguments.length ? (b = c, a) : b
        }, a.tickSize = function (b) {
            var c = arguments.length;
            return c ? (e = +b, f = +arguments[c - 1], a) : e
        }, a.innerTickSize = function (b) {
            return arguments.length ? (e = +b, a) : e
        }, a.outerTickSize = function (b) {
            return arguments.length ? (f = +b, a) : f
        }, a.tickPadding = function (b) {
            return arguments.length ? (g = +b, a) : g
        }, a.tickSubdivide = function () {
            return arguments.length && a
        }, a
    };
    var Ri = "bottom", Si = {top: 1, right: 1, bottom: 1, left: 1};
    hg.svg.brush = function () {
        function a(b) {
            b.each(function () {
                var b = hg.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", f).on("touchstart.brush", f),
                    g = b.selectAll(".background").data([0]);
                g.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), b.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var h = b.selectAll(".resize").data(p, s);
                h.exit().remove(), h.enter().append("g").attr("class", function (a) {
                    return "resize " + a
                }).style("cursor", function (a) {
                    return Ti[a]
                }).append("rect").attr("x", function (a) {
                    return /[ew]$/.test(a) ? -3 : null
                }).attr("y", function (a) {
                    return /^[ns]/.test(a) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", a.empty() ? "none" : null);
                var i, l = hg.transition(b), m = hg.transition(g);
                j && (i = Re(j), m.attr("x", i[0]).attr("width", i[1] - i[0]), d(l)), k && (i = Re(k), m.attr("y", i[0]).attr("height", i[1] - i[0]), e(l)), c(l)
            })
        }

        function c(a) {
            a.selectAll(".resize").attr("transform", function (a) {
                return "translate(" + l[+/e$/.test(a)] + "," + m[+/^s/.test(a)] + ")"
            })
        }

        function d(a) {
            a.select(".extent").attr("x", l[0]), a.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0])
        }

        function e(a) {
            a.select(".extent").attr("y", m[0]), a.selectAll(".extent,.e>rect,.w>rect").attr("height", m[1] - m[0])
        }

        function f() {
            function f() {
                32 == hg.event.keyCode && (D || (t = null, F[0] -= l[1], F[1] -= m[1], D = 2), y())
            }

            function p() {
                32 == hg.event.keyCode && 2 == D && (F[0] += l[1], F[1] += m[1], D = 0, y())
            }

            function q() {
                var a = hg.mouse(v), b = !1;
                u && (a[0] += u[0], a[1] += u[1]), D || (hg.event.altKey ? (t || (t = [(l[0] + l[1]) / 2, (m[0] + m[1]) / 2]), F[0] = l[+(a[0] < t[0])], F[1] = m[+(a[1] < t[1])]) : t = null), B && r(a, j, 0) && (d(z), b = !0), C && r(a, k, 1) && (e(z), b = !0), b && (c(z), x({
                    type: "brush",
                    mode: D ? "move" : "resize"
                }))
            }

            function r(a, b, c) {
                var d, e, f = Re(b), i = f[0], j = f[1], k = F[c], p = c ? m : l, q = p[1] - p[0];
                return D && (i -= k, j -= q + k), d = (c ? o : n) ? Math.max(i, Math.min(j, a[c])) : a[c], D ? e = (d += k) + q : (t && (k = Math.max(i, Math.min(j, 2 * t[c] - d))), d > k ? (e = d, d = k) : e = k), p[0] != d || p[1] != e ? (c ? h = null : g = null, p[0] = d, p[1] = e, !0) : void 0
            }

            function s() {
                q(), z.style("pointer-events", "all").selectAll(".resize").style("display", a.empty() ? "none" : null), hg.select("body").style("cursor", null), G.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), E(), x({type: "brushend"})
            }

            var t, u, v = this, w = hg.select(hg.event.target), x = i.of(v, arguments), z = hg.select(v), A = w.datum(),
                B = !/^(n|s)$/.test(A) && j, C = !/^(e|w)$/.test(A) && k, D = w.classed("extent"), E = X(v),
                F = hg.mouse(v), G = hg.select(b(v)).on("keydown.brush", f).on("keyup.brush", p);
            if (hg.event.changedTouches ? G.on("touchmove.brush", q).on("touchend.brush", s) : G.on("mousemove.brush", q).on("mouseup.brush", s), z.interrupt().selectAll("*").interrupt(), D) F[0] = l[0] - F[0], F[1] = m[0] - F[1]; else if (A) {
                var H = +/w$/.test(A), I = +/^n/.test(A);
                u = [l[1 - H] - F[0], m[1 - I] - F[1]], F[0] = l[H], F[1] = m[I]
            } else hg.event.altKey && (t = F.slice());
            z.style("pointer-events", "none").selectAll(".resize").style("display", null), hg.select("body").style("cursor", w.style("cursor")), x({type: "brushstart"}), q()
        }

        var g, h, i = A(a, "brushstart", "brush", "brushend"), j = null, k = null, l = [0, 0], m = [0, 0], n = !0,
            o = !0, p = Ui[0];
        return a.event = function (a) {
            a.each(function () {
                var a = i.of(this, arguments), b = {x: l, y: m, i: g, j: h}, c = this.__chart__ || b;
                this.__chart__ = b, Mi ? hg.select(this).transition().each("start.brush", function () {
                    g = c.i, h = c.j, l = c.x, m = c.y, a({type: "brushstart"})
                }).tween("brush:brush", function () {
                    var c = td(l, b.x), d = td(m, b.y);
                    return g = h = null, function (e) {
                        l = b.x = c(e), m = b.y = d(e), a({type: "brush", mode: "resize"})
                    }
                }).each("end.brush", function () {
                    g = b.i, h = b.j, a({type: "brush", mode: "resize"}), a({type: "brushend"})
                }) : (a({type: "brushstart"}), a({type: "brush", mode: "resize"}), a({type: "brushend"}))
            })
        }, a.x = function (b) {
            return arguments.length ? (j = b, p = Ui[!j << 1 | !k], a) : j
        }, a.y = function (b) {
            return arguments.length ? (k = b, p = Ui[!j << 1 | !k], a) : k
        }, a.clamp = function (b) {
            return arguments.length ? (j && k ? (n = !!b[0], o = !!b[1]) : j ? n = !!b : k && (o = !!b), a) : j && k ? [n, o] : j ? n : k ? o : null
        }, a.extent = function (b) {
            var c, d, e, f, i;
            return arguments.length ? (j && (c = b[0], d = b[1], k && (c = c[0], d = d[0]), g = [c, d], j.invert && (c = j(c), d = j(d)), c > d && (i = c, c = d, d = i), (c != l[0] || d != l[1]) && (l = [c, d])), k && (e = b[0], f = b[1], j && (e = e[1], f = f[1]), h = [e, f], k.invert && (e = k(e), f = k(f)), e > f && (i = e, e = f, f = i), (e != m[0] || f != m[1]) && (m = [e, f])), a) : (j && (g ? (c = g[0], d = g[1]) : (c = l[0], d = l[1], j.invert && (c = j.invert(c), d = j.invert(d)), c > d && (i = c, c = d, d = i))), k && (h ? (e = h[0], f = h[1]) : (e = m[0], f = m[1], k.invert && (e = k.invert(e), f = k.invert(f)), e > f && (i = e, e = f, f = i))), j && k ? [[c, e], [d, f]] : j ? [c, d] : k && [e, f])
        }, a.clear = function () {
            return a.empty() || (l = [0, 0], m = [0, 0], g = h = null), a
        }, a.empty = function () {
            return !!j && l[0] == l[1] || !!k && m[0] == m[1]
        }, hg.rebind(a, i, "on")
    };
    var Ti = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        }, Ui = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []], Vi = mh.format = sh.timeFormat,
        Wi = Vi.utc, Xi = Wi("%Y-%m-%dT%H:%M:%S.%LZ");
    Vi.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? cg : Xi, cg.parse = function (a) {
        var b = new Date(a);
        return isNaN(b) ? null : b
    }, cg.toString = Xi.toString, mh.second = Oa(function (a) {
        return new nh(1e3 * Math.floor(a / 1e3))
    }, function (a, b) {
        a.setTime(a.getTime() + 1e3 * Math.floor(b))
    }, function (a) {
        return a.getSeconds()
    }), mh.seconds = mh.second.range, mh.seconds.utc = mh.second.utc.range, mh.minute = Oa(function (a) {
        return new nh(6e4 * Math.floor(a / 6e4))
    }, function (a, b) {
        a.setTime(a.getTime() + 6e4 * Math.floor(b))
    }, function (a) {
        return a.getMinutes()
    }), mh.minutes = mh.minute.range, mh.minutes.utc = mh.minute.utc.range, mh.hour = Oa(function (a) {
        var b = a.getTimezoneOffset() / 60;
        return new nh(36e5 * (Math.floor(a / 36e5 - b) + b))
    }, function (a, b) {
        a.setTime(a.getTime() + 36e5 * Math.floor(b))
    }, function (a) {
        return a.getHours()
    }), mh.hours = mh.hour.range, mh.hours.utc = mh.hour.utc.range, mh.month = Oa(function (a) {
        return a = mh.day(a), a.setDate(1), a
    }, function (a, b) {
        a.setMonth(a.getMonth() + b)
    }, function (a) {
        return a.getMonth()
    }), mh.months = mh.month.range, mh.months.utc = mh.month.utc.range;
    var Yi = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        Zi = [[mh.second, 1], [mh.second, 5], [mh.second, 15], [mh.second, 30], [mh.minute, 1], [mh.minute, 5], [mh.minute, 15], [mh.minute, 30], [mh.hour, 1], [mh.hour, 3], [mh.hour, 6], [mh.hour, 12], [mh.day, 1], [mh.day, 2], [mh.week, 1], [mh.month, 1], [mh.month, 3], [mh.year, 1]],
        $i = Vi.multi([[".%L", function (a) {
            return a.getMilliseconds()
        }], [":%S", function (a) {
            return a.getSeconds()
        }], ["%I:%M", function (a) {
            return a.getMinutes()
        }], ["%I %p", function (a) {
            return a.getHours()
        }], ["%a %d", function (a) {
            return a.getDay() && 1 != a.getDate()
        }], ["%b %d", function (a) {
            return 1 != a.getDate()
        }], ["%B", function (a) {
            return a.getMonth()
        }], ["%Y", Db]]), _i = {
            range: function (a, b, c) {
                return hg.range(Math.ceil(a / c) * c, +b, c).map(eg)
            }, floor: s, ceil: s
        };
    Zi.year = mh.year, mh.scale = function () {
        return dg(hg.scale.linear(), Zi, $i)
    };
    var aj = Zi.map(function (a) {
        return [a[0].utc, a[1]]
    }), bj = Wi.multi([[".%L", function (a) {
        return a.getUTCMilliseconds()
    }], [":%S", function (a) {
        return a.getUTCSeconds()
    }], ["%I:%M", function (a) {
        return a.getUTCMinutes()
    }], ["%I %p", function (a) {
        return a.getUTCHours()
    }], ["%a %d", function (a) {
        return a.getUTCDay() && 1 != a.getUTCDate()
    }], ["%b %d", function (a) {
        return 1 != a.getUTCDate()
    }], ["%B", function (a) {
        return a.getUTCMonth()
    }], ["%Y", Db]]);
    aj.year = mh.year.utc, mh.scale.utc = function () {
        return dg(hg.scale.linear(), aj, bj)
    }, hg.text = Ba(function (a) {
        return a.responseText
    }), hg.json = function (a, b) {
        return Ca(a, "application/json", fg, b)
    }, hg.html = function (a, b) {
        return Ca(a, "text/html", gg, b)
    }, hg.xml = Ba(function (a) {
        return a.responseXML
    }), "function" == typeof define && define.amd ? (this.d3 = hg, define(hg)) : "object" == typeof module && module.exports ? module.exports = hg : this.d3 = hg
}(), function (a) {
    function b(a) {
        function b(a, b) {
            var e = b.length;
            d.push(function () {
                return "seq" == a ? b[0].apply(this, c(arguments)) : a + "(" + (1 == e && "function" == typeof b[0] ? b[0].apply(this, c(arguments)) : b) + ")"
            })
        }

        function c(a) {
            return Array.prototype.slice.call(a)
        }

        var d = [];
        void 0 !== a && d.push(a);
        var e = function () {
            var a = this, b = c(arguments);
            return d.map(function (c) {
                return c.apply(a, b)
            }).join(" ")
        };
        return ["translate", "rotate", "scale", "matrix", "skewX", "skewY", "seq"].forEach(function (a) {
            e[a] = function () {
                return b(a, c(arguments)), e
            }
        }), e
    }

    "undefined" != typeof d3 && d3.svg && (d3.svg.transform = b), "undefined" != typeof module && module.exports ? module.exports = b : a.d3Transform = b
}(this), !function (a) {
    function b(a) {
        return a
    }

    function c(a, b) {
        for (var c = 0, d = b.length, e = Array(d); d > c; ++c)e[c] = a[b[c]];
        return e
    }

    function d(a) {
        function b(b, c, d, e) {
            for (; e > d;) {
                var f = d + e >>> 1;
                a(b[f]) < c ? d = f + 1 : e = f
            }
            return d
        }

        function c(b, c, d, e) {
            for (; e > d;) {
                var f = d + e >>> 1;
                c < a(b[f]) ? e = f : d = f + 1
            }
            return d
        }

        return c.right = c, c.left = b, c
    }

    function e(a) {
        function b(a, b, c) {
            for (var e = c - b, f = (e >>> 1) + 1; --f > 0;)d(a, f, e, b);
            return a
        }

        function c(a, b, c) {
            for (var e, f = c - b; --f > 0;)e = a[b], a[b] = a[b + f], a[b + f] = e, d(a, 1, f, b);
            return a
        }

        function d(b, c, d, e) {
            for (var f, g = b[--e + c],
                     h = a(g); (f = c << 1) <= d && (d > f && a(b[e + f]) > a(b[e + f + 1]) && f++, !(h <= a(b[e + f])));)b[e + c] = b[e + f], c = f;
            b[e + c] = g
        }

        return b.sort = c, b
    }

    function f(a) {
        function b(b, d, e, f) {
            var g, h, i, j, k = Array(f = Math.min(e - d, f));
            for (h = 0; f > h; ++h)k[h] = b[d++];
            if (c(k, 0, f), e > d) {
                g = a(k[0]);
                do(i = a(j = b[d]) > g) && (k[0] = j, g = a(c(k, 0, f)[0])); while (++d < e)
            }
            return k
        }

        var c = e(a);
        return b
    }

    function g(a) {
        function b(b, c, d) {
            for (var e = c + 1; d > e; ++e) {
                for (var f = e, g = b[e], h = a(g); f > c && a(b[f - 1]) > h; --f)b[f] = b[f - 1];
                b[f] = g
            }
            return b
        }

        return b
    }

    function h(a) {
        function b(a, b, e) {
            return (D > e - b ? d : c)(a, b, e)
        }

        function c(c, d, e) {
            var f, g = 0 | (e - d) / 6, h = d + g, i = e - 1 - g, j = d + e - 1 >> 1, k = j - g, l = j + g, m = c[h],
                n = a(m), o = c[k], p = a(o), q = c[j], r = a(q), s = c[l], t = a(s), u = c[i], v = a(u);
            n > p && (f = m, m = o, o = f, f = n, n = p, p = f), t > v && (f = s, s = u, u = f, f = t, t = v, v = f), n > r && (f = m, m = q, q = f, f = n, n = r, r = f), p > r && (f = o, o = q, q = f, f = p, p = r, r = f), n > t && (f = m, m = s, s = f, f = n, n = t, t = f), r > t && (f = q, q = s, s = f, f = r, r = t, t = f), p > v && (f = o, o = u, u = f, f = p, p = v, v = f), p > r && (f = o, o = q, q = f, f = p, p = r, r = f), t > v && (f = s, s = u, u = f, f = t, t = v, v = f);
            var w = o, x = p, y = s, z = t;
            c[h] = m, c[k] = c[d], c[j] = q, c[l] = c[e - 1], c[i] = u;
            var A = d + 1, B = e - 2, C = z >= x && x >= z;
            if (C)for (var D = A; B >= D; ++D) {
                var E = c[D], F = a(E);
                if (x > F) D !== A && (c[D] = c[A], c[A] = E), ++A; else if (F > x)for (; ;) {
                    var G = a(c[B]);
                    if (!(G > x)) {
                        if (x > G) {
                            c[D] = c[A], c[A++] = c[B], c[B--] = E;
                            break
                        }
                        c[D] = c[B], c[B--] = E;
                        break
                    }
                    B--
                }
            } else for (var D = A; B >= D; D++) {
                var E = c[D], F = a(E);
                if (x > F) D !== A && (c[D] = c[A], c[A] = E), ++A; else if (F > z)for (; ;) {
                    var G = a(c[B]);
                    if (!(G > z)) {
                        x > G ? (c[D] = c[A], c[A++] = c[B], c[B--] = E) : (c[D] = c[B], c[B--] = E);
                        break
                    }
                    if (B--, D > B)break
                }
            }
            if (c[d] = c[A - 1], c[A - 1] = w, c[e - 1] = c[B + 1], c[B + 1] = y, b(c, d, A - 1), b(c, B + 2, e), C)return c;
            if (h > A && B > i) {
                for (var H, G; (H = a(c[A])) <= x && H >= x;)++A;
                for (; (G = a(c[B])) <= z && G >= z;)--B;
                for (var D = A; B >= D; D++) {
                    var E = c[D], F = a(E);
                    if (x >= F && F >= x) D !== A && (c[D] = c[A], c[A] = E), A++; else if (z >= F && F >= z)for (; ;) {
                        var G = a(c[B]);
                        if (!(z >= G && G >= z)) {
                            x > G ? (c[D] = c[A], c[A++] = c[B], c[B--] = E) : (c[D] = c[B], c[B--] = E);
                            break
                        }
                        if (B--, D > B)break
                    }
                }
            }
            return b(c, A, B + 1)
        }

        var d = g(a);
        return b
    }

    function i(a) {
        for (var b = Array(a), c = -1; ++c < a;)b[c] = 0;
        return b
    }

    function j(a, b) {
        for (var c = a.length; b > c;)a[c++] = 0;
        return a
    }

    function k(a, b) {
        if (b > 32)throw Error("invalid array width!");
        return a
    }

    function l(a, b) {
        return function (c) {
            var d = c.length;
            return [a.left(c, b, 0, d), a.right(c, b, 0, d)]
        }
    }

    function m(a, b) {
        var c = b[0], d = b[1];
        return function (b) {
            var e = b.length;
            return [a.left(b, c, 0, e), a.left(b, d, 0, e)]
        }
    }

    function n(a) {
        return [0, a.length]
    }

    function o() {
        return null
    }

    function p() {
        return 0
    }

    function q(a) {
        return a + 1
    }

    function r(a) {
        return a - 1
    }

    function s(a) {
        return function (b, c) {
            return b + +a(c)
        }
    }

    function t(a) {
        return function (b, c) {
            return b - a(c)
        }
    }

    function u() {
        function a(a) {
            var b = z, c = a.length;
            return c && (u = u.concat(a), C = H(C, z += c), F.forEach(function (d) {
                d(a, b, c)
            })), k
        }

        function d() {
            for (var a = v(z, z), b = [], c = 0, d = 0; z > c; ++c)C[c] ? a[c] = d++ : b.push(c);
            D.forEach(function (a) {
                a(0, [], b)
            }), G.forEach(function (b) {
                b(a)
            });
            for (var e, c = 0, d = 0; z > c; ++c)(e = C[c]) && (c !== d && (C[d] = e, u[d] = u[c]), ++d);
            for (u.length = d; z > d;)C[--z] = 0
        }

        function g(a) {
            function d(b, d, e) {
                U = b.map(a), V = $(w(e), 0, e), U = c(U, V);
                var f, g = _(U), h = g[0], i = g[1];
                if (W)for (f = 0; e > f; ++f)W(U[f], f) || (C[V[f] + d] |= Y); else {
                    for (f = 0; h > f; ++f)C[V[f] + d] |= Y;
                    for (f = i; e > f; ++f)C[V[f] + d] |= Y
                }
                if (!d)return S = U, T = V, ca = h, void(da = i);
                var j = S, k = T, l = 0, m = 0;
                for (S = Array(z), T = v(z, z), f = 0; d > l && e > m; ++f)j[l] < U[m] ? (S[f] = j[l], T[f] = k[l++]) : (S[f] = U[m], T[f] = V[m++] + d);
                for (; d > l; ++l, ++f)S[f] = j[l], T[f] = k[l];
                for (; e > m; ++m, ++f)S[f] = U[m], T[f] = V[m] + d;
                g = _(S), ca = g[0], da = g[1]
            }

            function g(a, b, c) {
                aa.forEach(function (a) {
                    a(U, V, b, c)
                }), U = V = null
            }

            function i(a) {
                for (var b, c = 0, d = 0; z > c; ++c)C[b = T[c]] && (c !== d && (S[d] = S[c]), T[d] = a[b], ++d);
                for (S.length = d; z > d;)T[d++] = 0;
                var e = _(S);
                ca = e[0], da = e[1]
            }

            function j(a) {
                var b = a[0], c = a[1];
                if (W)return W = null, M(function (a, d) {
                    return d >= b && c > d
                }), ca = b, da = c, X;
                var d, e, f, g = [], h = [];
                if (ca > b)for (d = b, e = Math.min(ca, c); e > d; ++d)C[f = T[d]] ^= Y, g.push(f); else if (b > ca)for (d = ca, e = Math.min(b, da); e > d; ++d)C[f = T[d]] ^= Y, h.push(f);
                if (c > da)for (d = Math.max(b, da), e = c; e > d; ++d)C[f = T[d]] ^= Y, g.push(f); else if (da > c)for (d = Math.max(ca, c), e = da; e > d; ++d)C[f = T[d]] ^= Y, h.push(f);
                return ca = b, da = c, D.forEach(function (a) {
                    a(Y, g, h)
                }), X
            }

            function k(a) {
                return null == a ? K() : Array.isArray(a) ? J(a) : "function" == typeof a ? L(a) : E(a)
            }

            function E(a) {
                return j((_ = l(y, a))(S))
            }

            function J(a) {
                return j((_ = m(y, a))(S))
            }

            function K() {
                return j((_ = n)(S))
            }

            function L(a) {
                return _ = n, M(W = a), ca = 0, da = z, X
            }

            function M(a) {
                var b, c, d, e = [], f = [];
                for (b = 0; z > b; ++b)!(C[c = T[b]] & Y) ^ !!(d = a(S[b], b)) && (d ? (C[c] &= Z, e.push(c)) : (C[c] |= Y, f.push(c)));
                D.forEach(function (a) {
                    a(Y, e, f)
                })
            }

            function N(a) {
                for (var b, c = [], d = da; --d >= ca && a > 0;)C[b = T[d]] || (c.push(u[b]), --a);
                return c
            }

            function O(a) {
                for (var b, c = [], d = ca; da > d && a > 0;)C[b = T[d]] || (c.push(u[b]), --a), d++;
                return c
            }

            function P(a) {
                function c(b, c, d, e) {
                    function f() {
                        ++U === R && (s = I(s, Q <<= 1), K = I(K, Q), R = x(Q))
                    }

                    var k, l, m, n, p, q, r = J, s = v(U, R), t = N, w = P, y = U, A = 0, B = 0;
                    for (X && (t = w = o), J = Array(U), U = 0, K = y > 1 ? H(K, z) : v(z, R), y && (m = (l = r[0]).key); e > B && !((n = a(b[B])) >= n);)++B;
                    for (; e > B;) {
                        for (l && n >= m ? (p = l, q = m, s[A] = U, (l = r[++A]) && (m = l.key)) : (p = {
                            key: n,
                            value: w()
                        }, q = n), J[U] = p; !(n > q || (K[k = c[B] + d] = U, C[k] & Z || (p.value = t(p.value, u[k])), ++B >= e));)n = a(b[B]);
                        f()
                    }
                    for (; y > A;)J[s[A] = U] = r[A++], f();
                    if (U > A)for (A = 0; d > A; ++A)K[A] = s[K[A]];
                    k = D.indexOf(V), U > 1 ? (V = g, W = i) : (!U && $ && (U = 1, J = [{
                        key: null,
                        value: w()
                    }]), 1 === U ? (V = h, W = j) : (V = o, W = o), K = null), D[k] = V
                }

                function d() {
                    if (U > 1) {
                        for (var a = U, b = J, c = v(a, a), d = 0, e = 0; z > d; ++d)C[d] && (c[K[e] = K[d]] = 1, ++e);
                        for (J = [], U = 0, d = 0; a > d; ++d)c[d] && (c[d] = U++, J.push(b[d]));
                        if (U > 1)for (var d = 0; e > d; ++d)K[d] = c[K[d]]; else K = null;
                        D[D.indexOf(V)] = U > 1 ? (W = i, V = g) : 1 === U ? (W = j, V = h) : W = V = o
                    } else if (1 === U) {
                        if ($)return;
                        for (var d = 0; z > d; ++d)if (C[d])return;
                        J = [], U = 0, D[D.indexOf(V)] = V = W = o
                    }
                }

                function g(a, b, c) {
                    if (a !== Y && !X) {
                        var d, e, f, g;
                        for (d = 0, f = b.length; f > d; ++d)C[e = b[d]] & Z || (g = J[K[e]], g.value = N(g.value, u[e]));
                        for (d = 0, f = c.length; f > d; ++d)(C[e = c[d]] & Z) === a && (g = J[K[e]], g.value = O(g.value, u[e]))
                    }
                }

                function h(a, b, c) {
                    if (a !== Y && !X) {
                        var d, e, f, g = J[0];
                        for (d = 0, f = b.length; f > d; ++d)C[e = b[d]] & Z || (g.value = N(g.value, u[e]));
                        for (d = 0, f = c.length; f > d; ++d)(C[e = c[d]] & Z) === a && (g.value = O(g.value, u[e]))
                    }
                }

                function i() {
                    var a, b;
                    for (a = 0; U > a; ++a)J[a].value = P();
                    for (a = 0; z > a; ++a)C[a] & Z || (b = J[K[a]], b.value = N(b.value, u[a]))
                }

                function j() {
                    var a, b = J[0];
                    for (b.value = P(), a = 0; z > a; ++a)C[a] & Z || (b.value = N(b.value, u[a]))
                }

                function k() {
                    return X && (W(), X = !1), J
                }

                function l(a) {
                    var b = L(k(), 0, J.length, a);
                    return M.sort(b, 0, b.length)
                }

                function m(a, b, c) {
                    return N = a, O = b, P = c, X = !0, F
                }

                function n() {
                    return m(q, r, p)
                }

                function w(a) {
                    return m(s(a), t(a), p)
                }

                function y(a) {
                    function b(b) {
                        return a(b.value)
                    }

                    return L = f(b), M = e(b), F
                }

                function A() {
                    return y(b)
                }

                function B() {
                    return U
                }

                function E() {
                    var a = D.indexOf(V);
                    return a >= 0 && D.splice(a, 1), a = aa.indexOf(c), a >= 0 && aa.splice(a, 1), a = G.indexOf(d), a >= 0 && G.splice(a, 1), F
                }

                var F = {
                    top: l,
                    all: k,
                    reduce: m,
                    reduceCount: n,
                    reduceSum: w,
                    order: y,
                    orderNatural: A,
                    size: B,
                    dispose: E,
                    remove: E
                };
                ba.push(F);
                var J, K, L, M, N, O, P, Q = 8, R = x(Q), U = 0, V = o, W = o, X = !0, $ = a === o;
                return arguments.length < 1 && (a = b), D.push(V), aa.push(c), G.push(d), c(S, T, 0, z), n().orderNatural()
            }

            function Q() {
                var a = P(o), b = a.all;
                return delete a.all, delete a.top, delete a.order, delete a.orderNatural, delete a.size, a.value = function () {
                    return b()[0].value
                }, a
            }

            function R() {
                ba.forEach(function (a) {
                    a.dispose()
                });
                var a = F.indexOf(d);
                return a >= 0 && F.splice(a, 1), a = F.indexOf(g), a >= 0 && F.splice(a, 1), a = G.indexOf(i), a >= 0 && G.splice(a, 1), A &= Z, K()
            }

            var S, T, U, V, W, X = {
                filter: k,
                filterExact: E,
                filterRange: J,
                filterFunction: L,
                filterAll: K,
                top: N,
                bottom: O,
                group: P,
                groupAll: Q,
                dispose: R,
                remove: R
            }, Y = ~A & -~A, Z = ~Y, $ = h(function (a) {
                return U[a]
            }), _ = n, aa = [], ba = [], ca = 0, da = 0;
            return F.unshift(d), F.push(g), G.push(i), A |= Y, (B >= 32 ? !Y : A & -(1 << B)) && (C = I(C, B <<= 1)), d(u, 0, z), g(u, 0, z), X
        }

        function i() {
            function a(a, b) {
                var c;
                if (!n)for (c = b; z > c; ++c)C[c] || (i = j(i, u[c]))
            }

            function b(a, b, c) {
                var d, e, f;
                if (!n) {
                    for (d = 0, f = b.length; f > d; ++d)C[e = b[d]] || (i = j(i, u[e]));
                    for (d = 0, f = c.length; f > d; ++d)C[e = c[d]] === a && (i = k(i, u[e]))
                }
            }

            function c() {
                var a;
                for (i = l(), a = 0; z > a; ++a)C[a] || (i = j(i, u[a]))
            }

            function d(a, b, c) {
                return j = a, k = b, l = c, n = !0, m
            }

            function e() {
                return d(q, r, p)
            }

            function f(a) {
                return d(s(a), t(a), p)
            }

            function g() {
                return n && (c(), n = !1), i
            }

            function h() {
                var c = D.indexOf(b);
                return c >= 0 && D.splice(c), c = F.indexOf(a), c >= 0 && F.splice(c), m
            }

            var i, j, k, l, m = {reduce: d, reduceCount: e, reduceSum: f, value: g, dispose: h, remove: h}, n = !0;
            return D.push(b), F.push(a), a(u, 0, z), e()
        }

        function j() {
            return z
        }

        var k = {add: a, remove: d, dimension: g, groupAll: i, size: j}, u = [], z = 0, A = 0, B = 8, C = E(0), D = [],
            F = [], G = [];
        return arguments.length ? a(arguments[0]) : k
    }

    function v(a, b) {
        return (257 > b ? E : 65537 > b ? F : G)(a)
    }

    function w(a) {
        for (var b = v(a, a), c = -1; ++c < a;)b[c] = c;
        return b
    }

    function x(a) {
        return 8 === a ? 256 : 16 === a ? 65536 : 4294967296
    }

    u.version = "1.3.12", u.permute = c;
    var y = u.bisect = d(b);
    y.by = d;
    var z = u.heap = e(b);
    z.by = e;
    var A = u.heapselect = f(b);
    A.by = f;
    var B = u.insertionsort = g(b);
    B.by = g;
    var C = u.quicksort = h(b);
    C.by = h;
    var D = 32, E = i, F = i, G = i, H = j, I = k;
    "undefined" != typeof Uint8Array && (E = function (a) {
        return new Uint8Array(a)
    }, F = function (a) {
        return new Uint16Array(a)
    }, G = function (a) {
        return new Uint32Array(a)
    }, H = function (a, b) {
        if (a.length >= b)return a;
        var c = new a.constructor(b);
        return c.set(a), c
    }, I = function (a, b) {
        var c;
        switch (b) {
            case 16:
                c = F(a.length);
                break;
            case 32:
                c = G(a.length);
                break;
            default:
                throw Error("invalid array width!")
        }
        return c.set(a), c
    }), a.crossfilter = u
}("undefined" != typeof exports && exports || this), !function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    "use strict";
    function b() {
        var a = document.createElement("input");
        return a.setAttribute("type", "range"), "text" !== a.type
    }

    function c(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, c)
        }, b)
    }

    function d(a, b) {
        return b = b || 100, function () {
            if (!a.debouncing) {
                var c = Array.prototype.slice.apply(arguments);
                a.lastReturnVal = a.apply(window, c), a.debouncing = !0
            }
            return clearTimeout(a.debounceTimeout), a.debounceTimeout = setTimeout(function () {
                a.debouncing = !1
            }, b), a.lastReturnVal
        }
    }

    function e(a) {
        return a && (0 === a.offsetWidth || 0 === a.offsetHeight || a.open === !1)
    }

    function f(a) {
        for (var b = [], c = a.parentNode; e(c);)b.push(c), c = c.parentNode;
        return b
    }

    function g(a, b) {
        function c(a) {
            "undefined" != typeof a.open && (a.open = a.open ? !1 : !0)
        }

        var d = f(a), e = d.length, g = [], h = a[b];
        if (e) {
            for (var i = 0; e > i; i++)g[i] = d[i].style.cssText, d[i].style.setProperty ? d[i].style.setProperty("display", "block", "important") : d[i].style.cssText += ";display: block !important", d[i].style.height = "0", d[i].style.overflow = "hidden", d[i].style.visibility = "hidden", c(d[i]);
            h = a[b];
            for (var j = 0; e > j; j++)d[j].style.cssText = g[j], c(d[j])
        }
        return h
    }

    function h(a, b) {
        var c = parseFloat(a);
        return Number.isNaN(c) ? b : c
    }

    function i(a) {
        return a.charAt(0).toUpperCase() + a.substr(1)
    }

    function j(b, e) {
        if (this.$window = a(window), this.$document = a(document), this.$element = a(b), this.options = a.extend({}, n, e), this.polyfill = this.options.polyfill, this.orientation = this.$element[0].getAttribute("data-orientation") || this.options.orientation, this.onInit = this.options.onInit, this.onSlide = this.options.onSlide, this.onSlideEnd = this.options.onSlideEnd, this.DIMENSION = o.orientation[this.orientation].dimension, this.DIRECTION = o.orientation[this.orientation].direction, this.DIRECTION_STYLE = o.orientation[this.orientation].directionStyle, this.COORDINATE = o.orientation[this.orientation].coordinate, this.polyfill && m)return !1;
        this.identifier = "js-" + k + "-" + l++, this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier, this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier, this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier, this.toFixed = (this.step + "").replace(".", "").length - 1, this.$fill = a('<div class="' + this.options.fillClass + '" />'), this.$handle = a('<div class="' + this.options.handleClass + '" />'), this.$range = a('<div class="' + this.options.rangeClass + " " + this.options[this.orientation + "Class"] + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle), this.$element.css({
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: "0"
        }), this.handleDown = a.proxy(this.handleDown, this), this.handleMove = a.proxy(this.handleMove, this), this.handleEnd = a.proxy(this.handleEnd, this), this.init();
        var f = this;
        this.$window.on("resize." + this.identifier, d(function () {
            c(function () {
                f.update()
            }, 300)
        }, 20)), this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown), this.$element.on("change." + this.identifier, function (a, b) {
            if (!b || b.origin !== f.identifier) {
                var c = a.target.value, d = f.getPositionFromValue(c);
                f.setPosition(d)
            }
        })
    }

    Number.isNaN = Number.isNaN || function (a) {
            return "number" == typeof a && a !== a
        };
    var k = "rangeslider", l = 0, m = b(), n = {
        polyfill: !0,
        orientation: "horizontal",
        rangeClass: "rangeslider",
        disabledClass: "rangeslider--disabled",
        horizontalClass: "rangeslider--horizontal",
        verticalClass: "rangeslider--vertical",
        fillClass: "rangeslider__fill",
        handleClass: "rangeslider__handle",
        startEvent: ["mousedown", "touchstart", "pointerdown"],
        moveEvent: ["mousemove", "touchmove", "pointermove"],
        endEvent: ["mouseup", "touchend", "pointerup"]
    }, o = {
        orientation: {
            horizontal: {dimension: "width", direction: "left", directionStyle: "left", coordinate: "x"},
            vertical: {dimension: "height", direction: "top", directionStyle: "bottom", coordinate: "y"}
        }
    };
    j.prototype.init = function () {
        this.update(!0, !1), this.onInit && "function" == typeof this.onInit && this.onInit()
    }, j.prototype.update = function (a, b) {
        a = a || !1, a && (this.min = h(this.$element[0].getAttribute("min"), 0), this.max = h(this.$element[0].getAttribute("max"), 100), this.value = h(this.$element[0].value, Math.round(this.min + (this.max - this.min) / 2)), this.step = h(this.$element[0].getAttribute("step"), 1)), this.handleDimension = g(this.$handle[0], "offset" + i(this.DIMENSION)), this.rangeDimension = g(this.$range[0], "offset" + i(this.DIMENSION)), this.maxHandlePos = this.rangeDimension - this.handleDimension, this.grabPos = this.handleDimension / 2, this.position = this.getPositionFromValue(this.value), this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass), this.setPosition(this.position, b)
    }, j.prototype.handleDown = function (a) {
        if (this.$document.on(this.moveEvent, this.handleMove), this.$document.on(this.endEvent, this.handleEnd), !((" " + a.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass) > -1)) {
            var b = this.getRelativePosition(a), c = this.$range[0].getBoundingClientRect()[this.DIRECTION],
                d = this.getPositionFromNode(this.$handle[0]) - c,
                e = "vertical" === this.orientation ? this.maxHandlePos - (b - this.grabPos) : b - this.grabPos;
            this.setPosition(e), b >= d && b < d + this.handleDimension && (this.grabPos = b - d)
        }
    }, j.prototype.handleMove = function (a) {
        a.preventDefault();
        var b = this.getRelativePosition(a),
            c = "vertical" === this.orientation ? this.maxHandlePos - (b - this.grabPos) : b - this.grabPos;
        this.setPosition(c)
    }, j.prototype.handleEnd = function (a) {
        a.preventDefault(), this.$document.off(this.moveEvent, this.handleMove), this.$document.off(this.endEvent, this.handleEnd), this.$element.trigger("change", {origin: this.identifier}), this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value)
    }, j.prototype.cap = function (a, b, c) {
        return b > a ? b : a > c ? c : a
    }, j.prototype.setPosition = function (a, b) {
        var c, d;
        void 0 === b && (b = !0), c = this.getValueFromPosition(this.cap(a, 0, this.maxHandlePos)), d = this.getPositionFromValue(c), this.$fill[0].style[this.DIMENSION] = d + this.grabPos + "px", this.$handle[0].style[this.DIRECTION_STYLE] = d + "px", this.setValue(c), this.position = d, this.value = c, b && this.onSlide && "function" == typeof this.onSlide && this.onSlide(d, c)
    }, j.prototype.getPositionFromNode = function (a) {
        for (var b = 0; null !== a;)b += a.offsetLeft, a = a.offsetParent;
        return b
    }, j.prototype.getRelativePosition = function (a) {
        var b = i(this.COORDINATE), c = this.$range[0].getBoundingClientRect()[this.DIRECTION], d = 0;
        return "undefined" != typeof a["page" + b] ? d = a["client" + b] : "undefined" != typeof a.originalEvent["client" + b] ? d = a.originalEvent["client" + b] : a.originalEvent.touches && a.originalEvent.touches[0] && "undefined" != typeof a.originalEvent.touches[0]["client" + b] ? d = a.originalEvent.touches[0]["client" + b] : a.currentPoint && "undefined" != typeof a.currentPoint[this.COORDINATE] && (d = a.currentPoint[this.COORDINATE]), d - c
    }, j.prototype.getPositionFromValue = function (a) {
        var b, c;
        return b = (a - this.min) / (this.max - this.min), c = Number.isNaN(b) ? 0 : b * this.maxHandlePos
    }, j.prototype.getValueFromPosition = function (a) {
        var b, c;
        return b = a / (this.maxHandlePos || 1), c = this.step * Math.round(b * (this.max - this.min) / this.step) + this.min, Number(c.toFixed(this.toFixed))
    }, j.prototype.setValue = function (a) {
        (a !== this.value || "" === this.$element[0].value) && this.$element.val(a).trigger("input", {origin: this.identifier})
    }, j.prototype.destroy = function () {
        this.$document.off("." + this.identifier), this.$window.off("." + this.identifier), this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_" + k), this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0])
    }, a.fn[k] = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var d = a(this), e = d.data("plugin_" + k);
            e || d.data("plugin_" + k, e = new j(this, b)), "string" == typeof b && e[b].apply(e, c)
        })
    }
}), function () {
    var a, b, c, d, e, f = {}.hasOwnProperty, g = function (a, b) {
        function c() {
            this.constructor = a
        }

        for (var d in b)f.call(b, d) && (a[d] = b[d]);
        return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
    };
    d = function () {
        function a() {
            this.options_index = 0, this.parsed = []
        }

        return a.prototype.add_node = function (a) {
            return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a)
        }, a.prototype.add_group = function (a) {
            var b, c, d, e, f, g;
            for (b = this.parsed.length, this.parsed.push({
                array_index: b,
                group: !0,
                label: this.escapeExpression(a.label),
                title: a.title ? a.title : void 0,
                children: 0,
                disabled: a.disabled,
                classes: a.className
            }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(this.add_option(c, b, a.disabled));
            return g
        }, a.prototype.add_option = function (a, b, c) {
            return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: a.value,
                text: a.text,
                html: a.innerHTML,
                title: a.title ? a.title : void 0,
                selected: a.selected,
                disabled: c === !0 ? c : a.disabled,
                group_array_index: b,
                group_label: null != b ? this.parsed[b].label : null,
                classes: a.className,
                style: a.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, a.prototype.escapeExpression = function (a) {
            var b, c;
            return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function (a) {
                return b[a] || "&amp;"
            })) : a
        }, a
    }(), d.select_to_array = function (a) {
        var b, c, e, f, g;
        for (c = new d, g = a.childNodes, e = 0, f = g.length; f > e; e++)b = g[e], c.add_node(b);
        return c.parsed
    }, b = function () {
        function a(b, c) {
            this.form_field = b, this.options = null != c ? c : {}, a.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }

        return a.prototype.set_default_values = function () {
            var a = this;
            return this.click_test_action = function (b) {
                return a.test_active_click(b)
            }, this.activate_action = function (b) {
                return a.activate_field(b);
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1
        }, a.prototype.set_default_text = function () {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || a.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || a.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || a.default_no_result_text
        }, a.prototype.choice_label = function (a) {
            return this.include_group_label_in_selected && null != a.group_label ? "<b class='group-name'>" + a.group_label + "</b>" + a.html : a.html
        }, a.prototype.mouse_enter = function () {
            return this.mouse_on_container = !0
        }, a.prototype.mouse_leave = function () {
            return this.mouse_on_container = !1
        }, a.prototype.input_focus = function () {
            var a = this;
            if (this.is_multiple) {
                if (!this.active_field)return setTimeout(function () {
                    return a.container_mousedown()
                }, 50)
            } else if (!this.active_field)return this.activate_field()
        }, a.prototype.input_blur = function () {
            var a = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
                return a.blur_test()
            }, 100))
        }, a.prototype.results_option_build = function (a) {
            var b, c, d, e, f;
            for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++)c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(c)));
            return b
        }, a.prototype.result_add_option = function (a) {
            var b, c;
            return a.search_match && this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.style.cssText = a.style, c.setAttribute("data-option-array-index", a.array_index), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : ""
        }, a.prototype.result_add_group = function (a) {
            var b, c;
            return (a.search_match || a.group_match) && a.active_options > 0 ? (b = [], b.push("group-result"), a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : ""
        }, a.prototype.results_update_field = function () {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, a.prototype.reset_single_select_options = function () {
            var a, b, c, d, e;
            for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++)a = d[b], e.push(a.selected ? a.selected = !1 : void 0);
            return e
        }, a.prototype.results_toggle = function () {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, a.prototype.results_search = function () {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, a.prototype.winnow_results = function () {
            var a, b, c, d, e, f, g, h, i, j, k, l;
            for (this.no_results_clear(), d = 0, f = this.get_search_text(), a = f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = new RegExp(a, "i"), c = this.get_search_regex(a), l = this.results_data, j = 0, k = l.length; k > j; j++)b = l[j], b.search_match = !1, e = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (e = this.results_data[b.group_array_index], 0 === e.active_options && e.search_match && (d += 1), e.active_options += 1), b.search_text = b.group ? b.label : b.html, (!b.group || this.group_search) && (b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (d += 1), b.search_match ? (f.length && (g = b.search_text.search(i), h = b.search_text.substr(0, g + f.length) + "</em>" + b.search_text.substr(g + f.length), b.search_text = h.substr(0, g) + "<em>" + h.substr(g)), null != e && (e.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
            return this.result_clear_highlight(), 1 > d && f.length ? (this.update_results_content(""), this.no_results(f)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, a.prototype.get_search_regex = function (a) {
            var b;
            return b = this.search_contains ? "" : "^", new RegExp(b + a, "i")
        }, a.prototype.search_string_match = function (a, b) {
            var c, d, e, f;
            if (b.test(a))return !0;
            if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length))for (e = 0, f = d.length; f > e; e++)if (c = d[e], b.test(c))return !0
        }, a.prototype.choices_count = function () {
            var a, b, c, d;
            if (null != this.selected_option_count)return this.selected_option_count;
            for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++)a = d[b], a.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, a.prototype.choices_click = function (a) {
            return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, a.prototype.keyup_checker = function (a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0)return this.keydown_backstroke();
                    if (!this.pending_backstroke)return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (a.preventDefault(), this.results_showing)return this.result_select(a);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, a.prototype.clipboard_event_checker = function () {
            var a = this;
            return setTimeout(function () {
                return a.results_search()
            }, 50)
        }, a.prototype.container_width = function () {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, a.prototype.include_option_in_results = function (a) {
            return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0
        }, a.prototype.search_results_touchstart = function (a) {
            return this.touch_started = !0, this.search_results_mouseover(a)
        }, a.prototype.search_results_touchmove = function (a) {
            return this.touch_started = !1, this.search_results_mouseout(a)
        }, a.prototype.search_results_touchend = function (a) {
            return this.touch_started ? this.search_results_mouseup(a) : void 0
        }, a.prototype.outerHTML = function (a) {
            var b;
            return a.outerHTML ? a.outerHTML : (b = document.createElement("div"), b.appendChild(a), b.innerHTML)
        }, a.browser_is_supported = function () {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, a.default_multiple_text = "Select Some Options", a.default_single_text = "Select an Option", a.default_no_result_text = "No results match", a
    }(), a = jQuery, a.fn.extend({
        chosen: function (d) {
            return b.browser_is_supported() ? this.each(function () {
                var b, e;
                b = a(this), e = b.data("chosen"), "destroy" === d && e instanceof c ? e.destroy() : e instanceof c || b.data("chosen", new c(this, d))
            }) : this
        }
    }), c = function (b) {
        function c() {
            return e = c.__super__.constructor.apply(this, arguments)
        }

        return g(c, b), c.prototype.setup = function () {
            return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, c.prototype.set_up_html = function () {
            var b, c;
            return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = {
                "class": b.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.container.html(this.is_multiple ? '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>' : '<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
        }, c.prototype.on_ready = function () {
            return this.form_field_jq.trigger("chosen:ready", {chosen: this})
        }, c.prototype.register_observers = function () {
            var a = this;
            return this.container.bind("touchstart.chosen", function (b) {
                return a.container_mousedown(b), b.preventDefault()
            }), this.container.bind("touchend.chosen", function (b) {
                return a.container_mouseup(b), b.preventDefault()
            }), this.container.bind("mousedown.chosen", function (b) {
                a.container_mousedown(b)
            }), this.container.bind("mouseup.chosen", function (b) {
                a.container_mouseup(b)
            }), this.container.bind("mouseenter.chosen", function (b) {
                a.mouse_enter(b)
            }), this.container.bind("mouseleave.chosen", function (b) {
                a.mouse_leave(b)
            }), this.search_results.bind("mouseup.chosen", function (b) {
                a.search_results_mouseup(b)
            }), this.search_results.bind("mouseover.chosen", function (b) {
                a.search_results_mouseover(b)
            }), this.search_results.bind("mouseout.chosen", function (b) {
                a.search_results_mouseout(b)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (b) {
                a.search_results_mousewheel(b)
            }), this.search_results.bind("touchstart.chosen", function (b) {
                a.search_results_touchstart(b)
            }), this.search_results.bind("touchmove.chosen", function (b) {
                a.search_results_touchmove(b)
            }), this.search_results.bind("touchend.chosen", function (b) {
                a.search_results_touchend(b)
            }), this.form_field_jq.bind("chosen:updated.chosen", function (b) {
                a.results_update_field(b)
            }), this.form_field_jq.bind("chosen:activate.chosen", function (b) {
                a.activate_field(b)
            }), this.form_field_jq.bind("chosen:open.chosen", function (b) {
                a.container_mousedown(b)
            }), this.form_field_jq.bind("chosen:close.chosen", function (b) {
                a.input_blur(b)
            }), this.search_field.bind("blur.chosen", function (b) {
                a.input_blur(b)
            }), this.search_field.bind("keyup.chosen", function (b) {
                a.keyup_checker(b)
            }), this.search_field.bind("keydown.chosen", function (b) {
                a.keydown_checker(b)
            }), this.search_field.bind("focus.chosen", function (b) {
                a.input_focus(b)
            }), this.search_field.bind("cut.chosen", function (b) {
                a.clipboard_event_checker(b)
            }), this.search_field.bind("paste.chosen", function (b) {
                a.clipboard_event_checker(b)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function (b) {
                a.choices_click(b)
            }) : this.container.bind("click.chosen", function (a) {
                a.preventDefault()
            })
        }, c.prototype.destroy = function () {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, c.prototype.search_field_disabled = function () {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, c.prototype.container_mousedown = function (b) {
            return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, c.prototype.container_mouseup = function (a) {
            return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a)
        }, c.prototype.search_results_mousewheel = function (a) {
            var b;
            return a.originalEvent && (b = a.originalEvent.deltaY || -a.originalEvent.wheelDelta || a.originalEvent.detail), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0
        }, c.prototype.blur_test = function () {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, c.prototype.close_field = function () {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, c.prototype.activate_field = function () {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, c.prototype.test_active_click = function (b) {
            var c;
            return c = a(b.target).closest(".chosen-container"), c.length && this.container[0] === c[0] ? this.active_field = !0 : this.close_field()
        }, c.prototype.results_build = function () {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = d.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({first: !0})), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, c.prototype.result_do_highlight = function (a) {
            var b, c, d, e, f;
            if (a.length) {
                if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e)return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
                if (f > c)return this.search_results.scrollTop(c)
            }
        }, c.prototype.result_clear_highlight = function () {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, c.prototype.results_show = function () {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {chosen: this}))
        }, c.prototype.update_results_content = function (a) {
            return this.search_results.html(a)
        }, c.prototype.results_hide = function () {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {chosen: this})), this.results_showing = !1
        }, c.prototype.set_tab_index = function () {
            var a;
            return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0
        }, c.prototype.set_label_behavior = function () {
            var b = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (a) {
                return b.is_multiple ? b.container_mousedown(a) : b.activate_field()
            }) : void 0
        }, c.prototype.show_search_field_default = function () {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, c.prototype.search_results_mouseup = function (b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0
        }, c.prototype.search_results_mouseover = function (b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0
        }, c.prototype.search_results_mouseout = function (b) {
            return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, c.prototype.choice_build = function (b) {
            var c, d, e = this;
            return c = a("<li />", {"class": "search-choice"}).html("<span>" + this.choice_label(b) + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": b.array_index
            }), d.bind("click.chosen", function (a) {
                return e.choice_destroy_link_click(a)
            }), c.append(d)), this.search_container.before(c)
        }, c.prototype.choice_destroy_link_click = function (b) {
            return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target))
        }, c.prototype.choice_destroy = function (a) {
            return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, c.prototype.results_reset = function () {
            return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, c.prototype.results_reset_cleanup = function () {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, c.prototype.result_select = function (a) {
            var b, c;
            return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(), b.addClass("result-selected"), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(this.choice_label(c)), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {selected: this.form_field.options[c.options_index].value}), this.current_selectedIndex = this.form_field.selectedIndex, a.preventDefault(), this.search_field_scale())) : void 0
        }, c.prototype.single_set_selected_text = function (a) {
            return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(a)
        }, c.prototype.result_deselect = function (a) {
            var b;
            return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {deselected: this.form_field.options[b.options_index].value}), this.search_field_scale(), !0)
        }, c.prototype.single_deselect_control_build = function () {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, c.prototype.get_search_text = function () {
            return a("<div/>").text(a.trim(this.search_field.val())).html()
        }, c.prototype.winnow_results_set_highlight = function () {
            var a, b;
            return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0
        }, c.prototype.no_results = function (b) {
            var c;
            return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", {chosen: this})
        }, c.prototype.no_results_clear = function () {
            return this.search_results.find(".no-results").remove()
        }, c.prototype.keydown_arrow = function () {
            var a;
            return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show()
        }, c.prototype.keyup_arrow = function () {
            var a;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, c.prototype.keydown_backstroke = function () {
            var a;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, c.prototype.clear_backstroke = function () {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, c.prototype.keydown_checker = function (a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1;
                    break;
                case 13:
                    this.results_showing && a.preventDefault();
                    break;
                case 32:
                    this.disable_search && a.preventDefault();
                    break;
                case 38:
                    a.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    a.preventDefault(), this.keydown_arrow()
            }
        }, c.prototype.search_field_scale = function () {
            var b, c, d, e, f, g, h, i, j;
            if (this.is_multiple) {
                for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++)e = g[i], f += e + ":" + this.search_field.css(e) + ";";
                return b = a("<div />", {style: f}), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({width: h + "px"})
            }
        }, c
    }(b)
}.call(this), d3.seoul = {}, d3.seoul.DataManager = function () {
    function a(a) {
        a = b(a);
        var c = [];
        a.districts.forEach(function (a) {
            var b = a.values.filter(function (a) {
                return a.year >= j
            });
            b = b.map(function (b) {
                return b.district = a.district, b
            }), c = c.concat(b)
        });
        var d = d3.nest().key(function (a) {
            return a.year
        }).entries(c);
        return a.years = d, delete a.districts, a
    }

    function b(a) {
        a.key = a.SNT_COB_NM + "-" + a.SNT_UPTAE_NM, a.total = a.total.sort(function (a, b) {
            return a.year - b.year
        });
        var b = 0, c = 0;
        a.total.forEach(function (a) {
            b += a.opened, c += a.closed
        }), a.total_opened = b, a.total_closed = c, a.closed_rate = c / b, a.total = a.total.filter(function (a) {
            return a.year >= j
        });
        for (var d = [], b = 0, c = 0, e = 0; e < a.total.length - 1; e++) {
            var f = a.total[e].existed, g = a.total[e + 1].existed, h = (g - f) / (f + 1);
            a.total[e + 1].rate = h, d.push(h)
        }
        var i = 0;
        return a.total.forEach(function (a, b) {
            0 == i && a.existed > 0 && (i = b)
        }), a.cur_num = a.total[a.total.length - 1].existed, a.growth_num = a.cur_num - a.total[0].existed, a.growth_rate = a.cur_num / (a.total[i].existed + 1), a.avg_rate = d3.mean(d), a
    }

    function c(a) {
        return a.forEach(function (a) {
            b(a)
        }), a = a.filter(function (a) {
            return a.total_opened >= i
        }), a = a.sort(function (a, b) {
            return a.SNT_COB_NM.localeCompare(b.SNT_COB_NM)
        })
    }

    var d, e, f = "./data/business_counts.abstract.json", g = !0, h = d3.dispatch("ready", "loading"), i = 50, j = 1965,
        k = {};
    return k.path = function (a) {
        return arguments.length ? (f = a, k) : f
    }, k.loadMap = function (a) {
        var b = d3.xml(a, "image/svg+xml");
        return b.get(function (a, b) {
            if (a)throw"Failed to load SVG: " + a;
            h.ready(b.documentElement)
        }), k
    }, k.load = function (b) {
        b = b || f;
        var e = d3.json(b);
        return e.on("progress", function () {
            h.loading(d3.event.loaded)
        }), e.get(function (b, e) {
            if (b)throw"Failed to load: " + b;
            d = g ? c(e) : a(e), h.ready(d)
        }), k
    }, k.loadTotal = function (a) {
        a = a || f;
        var b = d3.json(a);
        return b.on("progress", function () {
            h.loading(d3.event.loaded)
        }), b.get(function (a, b) {
            if (a)throw"Failed to load: " + a;
            var c = [];
            b.forEach(function (a) {
                a.total.forEach(function (a) {
                    c.push({year: a.year, existed: a.existed})
                })
            });
            var d = d3.nest().key(function (a) {
                return a.year
            }).rollup(function (a) {
                return a.reduce(function (a, b) {
                    return a + b.existed
                }, 0)
            }).entries(c);
            d = d.filter(function (a) {
                return a.key >= j
            }), h.ready(d)
        }), k
    }, k.isAbstract = function (a) {
        return arguments.length ? (g = a, k) : g
    }, k.yearTotal = function () {
        return e
    }, d3.rebind(k, h, "on"), k
}, d3.seoul.TotalLines = function () {
    function a(a, b) {
        var c = d3.svg.line().x(function (a) {
            return j(a.year)
        }).y(function (a) {
            return k(a[i.valKey] + 1)
        }).interpolate("step"), d = f.selectAll("g.line").data(b, function (a) {
            return a[i.key]
        });
        return d.enter().append("g").attr("class", "line").style("stroke", function (a) {
            return l(a[i.rateKey])
        }).style("fill", function (a) {
            return l(a[i.rateKey])
        }).on("mouseenter", function (a) {
            d3.select(this).classed({over: !0}), d.filter(function () {
                return !d3.select(this).classed("over")
            }).classed({unover: !0})
        }).on("mouseleave", function (a) {
            d3.select(this).classed({over: !1}), d.classed({unover: !1})
        }), d.selectAll("path").data(function (a) {
            return [a.total]
        }).enter().append("path").attr("d", c), d.append("text").attr("text-anchor", "end").attr("x", function (a) {
            return j(a.total[a.total.length - 1].year)
        }).attr("y", function (a) {
            return k(a.total[a.total.length - 1][i.valKey] + 1)
        }).attr("dy", "-.35em").text(function (a) {
            return a[i.key]
        }), a
    }

    function b(a) {
        g = i.width - m.left - m.right, h = i.height - m.top - m.bottom, j.domain(i.yearRange).rangeRound([0, g]);
        var b = a.map(function (a) {
            var b = d3.extent(a.total, function (a) {
                return a[i.valKey]
            });
            return b
        }), c = [d3.min(b, function (a) {
            return a[0]
        }), d3.max(b, function (a) {
            return a[1]
        })];
        c = c.map(function (a) {
            return d3.round(a, -3) + 1
        }), k.domain(c).rangeRound([h, 0]);
        var d = d3.extent(a, function (a) {
            return a[i.rateKey]
        });
        l.domain(d).range(["#9DD55A", "#59B854", "#159548", "#F06A3C", "#D32117"])
    }

    function c(a) {
        var b = d3.svg.axis().orient("bottom").scale(j).tickFormat(d3.format("d"));
        a.append("g").attr("class", "axis x").attr("transform", d3.svg.transform().translate([0, h])).call(b);
        var c = d3.svg.axis().orient("left").scale(k).tickFormat(d3.format(","));
        return a.append("g").attr("class", "axis y").call(c), a
    }

    function d(a) {
        return f = a.append("svg").attr("width", i.width).attr("height", i.height).append("g").attr("transform", d3.svg.transform().translate([m.left, m.top])), a
    }

    function e(a) {
        n[a] = function (b) {
            return arguments.length ? (i[a] = b, n) : i[a]
        }
    }

    var f, g, h,
        i = {width: 1200, height: 800, yearRange: [1975, 2015], key: "key", rateKey: "growth_rate", valKey: "existed"},
        j = d3.scale.linear(), k = d3.scale.log(), l = d3.scale.quantize(),
        m = {top: 40, right: 40, bottom: 40, left: 80}, n = function (e) {
            e.each(function (e) {
                f || d3.select(this).call(d), b(e), f.call(c).call(a, e)
            })
        };
    for (var o in i)i.hasOwnProperty(o) && !n[o] && e(o);
    return n
}, d3.seoulSmallLine = function () {
    function a(a) {
        var b = function (a) {
            var b = d3.mouse(d3.select(a).node());
            return Math.round(i.x.invert(b[0]))
        };
        return a.on("mouseenter", function (a) {
            d3.select(this).classed({hover: !0}), d3.select(d3.select(this).node().parentNode).selectAll("g.line").classed({hover: !0}), j.enter(b(this))
        }).on("mousemove", function (a) {
            j.move(b(this))
        }).on("mouseleave", function (a) {
            d3.select(this).classed({hover: !1}), d3.select(d3.select(this).node().parentNode).selectAll("g.line").classed({hover: !1}), j.leave(b(this))
        }), a
    }

    function b(b) {
        var c = function (a, b, c) {
            return function (d) {
                return a.forEach(function (a) {
                    a["interpolate" + c] || (a["interpolate" + c] = d3.interpolate(i.y.range()[0], i.y(a[c] + 1))), a["tempY" + c] = a["interpolate" + c](d)
                }), b(a)
            }
        }, d = d3.svg.area().x(function (a) {
            return i.x(a.year)
        }).y0(function (a) {
            return i.y.range()[0]
        }).y1(function (a) {
            return a.tempYexisted
        }), e = b.selectAll("g.area").data(function (a) {
            return [a]
        }), f = e.enter().append("g").attr("class", "area").style("fill", function (a) {
            return i.color(a[i.rateKey])
        }).call(a);
        f.append("rect").attr("class", "overlay").attr("width", i.x.range()[1]).attr("height", i.y.range()[0]);
        var g = e.selectAll("path").data(function (a) {
            return [a.total]
        }).enter().append("path");
        g.transition().duration(i.duration).attrTween("d", function (a) {
            return c(a, d, "existed")
        });
        var h = function (a) {
            var d = d3.svg.line().x(function (a) {
                return i.x(a.year)
            }).y(function (b) {
                return b["tempY" + a]
            }), e = b.selectAll("g.line." + a).data(function (a) {
                return [a]
            }).enter().append("g").attr("class", "line " + a).selectAll("path").data(function (a) {
                return [a.total]
            }).enter().append("path");
            return e.transition().delay(i.duration).duration(i.duration).attrTween("d", function (b) {
                return c(b, d, a)
            }), e
        };
        return h("opened"), h("closed"), h("existed"), b.selectAll(".line.existed").style("stroke", function (a) {
            return i.color(a[i.rateKey])
        }), b
    }

    function c(a) {
        var b = d3.svg.axis().orient("bottom").scale(i.x).tickFormat(d3.format("d")).tickValues([1965, 1990, 2015]);
        a.append("g").attr("class", "axis x").attr("transform", d3.svg.transform().translate([0, i.y.range()[0]])).call(b);
        var c = d3.svg.axis().orient("left").scale(i.y).tickFormat(d3.format(",")).tickValues([10, 100, 1e3, 1e4, 5e4]);
        return a.append("g").attr("class", "axis y").call(c), a
    }

    function d(a, b) {
        var c = a.selectAll(".area").selectAll(".val-tool-tip").data(function (a) {
            return a.total.filter(function (a) {
                return a.year == b
            })
        });
        c.enter().append("text").attr("class", "val-tool-tip").attr("text-anchor", "middle").attr("dy", "-.35em"), c.attr("x", function (a) {
            return i.x(a.year)
        }).attr("y", function (a) {
            return i.y(a.existed + 1)
        }).text("â–¼").classed({hidden: !1})
    }

    function e(a) {
        a.selectAll(".area").selectAll(".val-tool-tip").classed({hidden: !0})
    }

    function f(a) {
        k[a] = function (b) {
            return arguments.length ? (i[a] = b, k) : i[a]
        }
    }

    var g, h, i = {
        width: 400,
        height: 300,
        yearRange: [1975, 2015],
        key: "key",
        rateKey: "growth_rate",
        x: null,
        y: null,
        color: null,
        margin: {top: 10, right: 10, bottom: 10, left: 20},
        duration: 1e3
    }, j = d3.dispatch("enter", "move", "leave"), k = function (a) {
        g = i.height - i.margin.top - i.margin.bottom, a.call(c).call(b), h = a
    };
    k.show = function (a) {
        h.call(d, a)
    }, k.hide = function (a) {
        h.call(e)
    };
    for (var l in i)i.hasOwnProperty(l) && !k[l] && f(l);
    return d3.rebind(k, j, "on"), k
}, d3.seoul.SmallLineGrid = function () {
    function a(a, b) {
        var d = d3.nest().key(function (a) {
            return "en" == o.mode ? a[o.nestKeyEn] : a[o.nestKey]
        }).entries(b), e = a.selectAll("div.category").data(d, function (a) {
            return a.key
        }), f = e.enter().append("div").attr("class", "category");
        return f.append("div").attr("class", "category-title").html(function (a) {
            return "<strong>" + a.key + "</strong>"
        }), e.call(c), a
    }

    function b(a, b) {
        var c = a.selectAll("div.category"), e = c.selectAll(".category-title").attr("class", function (a) {
            switch (a.key) {
                case"ìŒì‹ì ":
                    return "category-title key0";
                case"Food business":
                    return "category-title key0";
                case"ì£¼ë¥˜":
                    return "category-title key1";
                case"Liquor business":
                    return "category-title key1";
                case"ì°¨_ë‹¤ê³¼_ìŠ¤ë‚µ":
                    return "category-title key2";
                case"Tea & Refreshment":
                    return "category-title key2";
                case"íŠ¹ìˆ˜ìž¥ì†Œ":
                    return "category-title key3";
                case"Special Position":
                    return "category-title key3"
            }
        }).html(function (a) {
            return "<strong>" + a.key + "</strong>"
        }).style("opacity", 0);
        return e.transition().duration(o.duration).style("opacity", 1), c.call(d), a
    }

    function c(a) {
        var b = a.selectAll("div.cell").data(function (a) {
            return a.values
        }, function (a) {
            return a[o.key]
        });
        b.enter().append("div").attr("class", "cell");
        return b.call(e).call(g), b.style("width", o.cellWidth + "px").style("height", o.cellHeight + "px").style("margin", o.cellPadding + "px"), a
    }

    function d(a) {
        var b = a.selectAll(".cell");
        b.transition().duration(o.duration).style("width", o.cellWidth + "px").style("height", o.cellHeight + "px").style("margin", o.cellPadding + "px");
        var c = b.call(e).selectAll(".cell-value").style("opacity", 0);
        c.transition().duration(o.duration).style("opacity", 1), b.call(g);
        var d = b.selectAll(".cell-chart").style("opacity", 0);
        return d.transition().duration(o.duration).style("opacity", 1), a
    }

    function e(a) {
        var b = a.selectAll(".cell-header").data(function (a) {
            return [a]
        });
        b.enter().append("div").attr("class", "cell-header"), b.style("height", o.cellHeight - m - o.cellPadding + "px").style("margin-bottom", o.cellPadding + "px");
        var c = b.selectAll(".cell-title").data(function (a) {
            return [a]
        }), d = c.enter().append("div").attr("class", "cell-title");
        d.append("p").attr("class", "cell-title-main").text(function (a) {
            return "en" == o.mode ? a[o.titleKeyEn] : a[o.titleKey]
        }), d.append("p").attr("class", "cell-title-sub").text(function (a) {
            return "en" == o.mode ? a[o.nestKeyEn] : a[o.nestKey]
        });
        var e = b.selectAll(".cell-value").data(function (a) {
            return [a]
        }), g = e.enter().append("div").attr("class", "cell-value");
        return g.append("p").attr("class", "cell-value-existed"), g.append("p").attr("class", "cell-value-rate"), b.call(f, o.yearRange[1]), a
    }

    function f(a, b) {
        var c = d3.format(","), d = d3.format(".2r");
        return a.selectAll(".cell-value-existed").text(function (a) {
            var d = a.total.filter(function (a) {
                return a.year == b
            })[0];
            return ("en" == o.mode ? "# of Stores (" + b + "): " : b + "ë…„ ì—…ì†Œìˆ˜: ") + c(d.existed)
        }), a.selectAll(".cell-value-rate").text(function (a) {
            var c = a.total.filter(function (a) {
                return a.year == b
            })[0], e = c.rate;
            return e || (e = 0), ("en" == o.mode ? "YOY : " : "ì „ë…„ ëŒ€ë¹„ ì„±ìž¥ë¥ : ") + d(100 * e) + "%"
        }), a
    }

    function g(a) {
        var b = d3.seoulSmallLine().width(o.cellWidth).height(o.chartHeight).x(p).y(q).color(r).rateKey(o.rateKey).margin(n).on("move", function (a) {
            b.show(a), l.selectAll(".category").selectAll("div.cell-header").call(f, a)
        }).on("leave", function (a) {
            b.hide()
        });
        a.append("div").attr("class", "cell-chart smallLine").style("height", m + "px").append("svg").attr("width", o.cellWidth).attr("height", o.cellHeight).append("g").attr("transform", d3.svg.transform().translate([n.left, n.top])).call(b);
        return a
    }

    function h(a) {
        n = {
            top: Math.round(.015 * o.cellHeight),
            right: 0,
            bottom: Math.round(.09 * o.cellHeight),
            left: Math.round(.18 * o.cellWidth)
        }, m = Math.round(.7 * o.cellHeight) - o.cellPadding, p.domain(o.yearRange).rangeRound([0, o.cellWidth - n.left - n.right]);
        var b = a.map(function (a) {
            var b = d3.extent(a.total, function (a) {
                return a[o.valKey]
            });
            return b
        }), c = [d3.min(b, function (a) {
            return a[0]
        }), d3.max(b, function (a) {
            return a[1]
        })];
        c = c.map(function (a) {
            return d3.round(a, -3) + 1
        }), q.domain(c).rangeRound([m - n.bottom - n.top, 0]);
        var d = d3.extent(a, function (a) {
            return a[o.rateKey]
        });
        r.domain(d).range(o.colorRange)
    }

    function i(a) {
        a.selectAll(".bloc").transition().duration(o.duration).style("opacity", 0).style("width", "0px").style("height", "0px").style("margin-top", "0px").style("margin-left", "0px").each("end", function () {
            d3.select(this).remove()
        });
        return a.on("mouseenter", function () {
        }).on("mouseleave", function () {
        }), a
    }

    function j(a) {
        return a.selectAll(".cell").call(i), a
    }

    function k(a) {
        s[a] = function (b) {
            return arguments.length ? (o[a] = b, s) : o[a]
        }
    }

    var l, m, n, o = {
        cellWidth: $(".chart").width() / 4,
        cellHeight: $(".chart").width() / 4 * 1.1,
        cellPadding: 12,
        yearRange: [1965, 2015],
        key: "key",
        rateKey: "growth_rate",
        valKey: "existed",
        nestKey: "SNT_COB_NM",
        titleKey: "SNT_UPTAE_NM",
        nestKeyEn: "SNT_COB_NM_EN",
        titleKeyEn: "SNT_UPTAE_NM_EN",
        colorRange: ["#ffffe0", "#ffe3af", "#ffc58a", "#ffa474", "#fa8266", "#ed645c", "#db4551", "#c52940", "#aa0e27", "#8b0000"],
        duration: 1e3,
        mode: "kr"
    }, p = d3.scale.linear(), q = d3.scale.log(), r = d3.scale.quantize(), s = function (a) {
        a.each(function (a) {
            l = d3.select(this)
        })
    };
    for (var t in o)o.hasOwnProperty(t) && !s[t] && k(t);
    return s.render = function () {
        var b = l.datum();
        return h(b), l.call(a, b), s
    }, s.transform = function () {
        var a = l.datum();
        return h(a), l.selectAll(".tooltip").style("visibility", "hidden"), l.selectAll(".category").call(j), l.call(b), s
    }, s
}, d3.seoul.RectGrid = function (a) {
    function b(a, b) {
        var c = d3.nest().key(function (a) {
            return "en" == o.mode ? a[o.nestKeyEn] : a[o.nestKey]
        }).entries(b), d = a.selectAll("div.category").data(c, function (a) {
            return a.key
        }), e = d.enter().append("div").attr("class", "category");
        return e.append("div").attr("class", "category-title"), d.call(g), a
    }

    function c(a) {
        p = a.append("div").attr("class", "tooltip");
        var b = p.append("div").attr("class", "label-name");
        b.append("p").attr("class", "label-name-main"), b.append("p").attr("class", "label-name-sub");
        var c = p.append("div").attr("class", "label-value");
        c.append("p").attr("class", "label-value-old"), c.append("p").attr("class", "label-value-new")
    }

    function d(a, b, c) {
        var d = l(a.total, s), e = l(a.total, o.yearRange[1]), f = p.select(".label-name");
        f.select(".label-name-main").text("en" == o.mode ? a[o.titleKeyEn] : a[o.titleKey]), f.select(".label-name-sub").text("en" == o.mode ? a[o.nestKeyEn] : a[o.nestKey]);
        var g = d3.format(","), h = p.select(".label-value");
        h.select(".label-value-old").text("en" == o.mode ? "# of Stores (" + b + "): " : b + "ë…„ ì—…ì†Œìˆ˜: ").append("span").text(g(d[o.valKey])), h.select(".label-value-new").text("en" == o.mode ? "# of Stores (" + o.yearRange[1] + "): " : o.yearRange[1] + "ë…„ ì—…ì†Œìˆ˜: ").append("span").text(g(e[o.valKey])), p.style("left", c[0] + "px").style("top", c[1] + parseInt(p.style("height"), 10) - 6 * o.cellPadding + "px").style("visibility", "visible")
    }

    function e(a) {
        a.on("mouseenter", function (a) {
            var b = d3.select(this).node().offsetLeft, c = d3.select(this).node().offsetTop;
            b += d3.select(this).node().parentNode.offsetLeft, c += d3.select(this).node().parentNode.offsetTop, d(a, s, [b, c]), d3.select(this).classed({hover: !0})
        }).on("mouseleave", function (a) {
            d3.select(this).classed({hover: !1}), p.style("visibility", "hidden")
        })
    }

    function f(a) {
        var b = t.ticks().filter(function (a) {
                return "1" === a.toString()[0]
            }),
            c = a.append("div").attr("class", "cell").style("width", o.cellMaxWidth + "px").style("height", o.cellMaxWidth + "px"),
            d = c.selectAll(".bloc").data(b.map(function (a) {
                return {w: t(a + 1), val: a}
            })).enter().append("div").attr("class", "bloc").style("width", function (a) {
                return a.w + "px"
            }).style("height", function (a) {
                return a.w + "px"
            }).style("margin-top", function (a) {
                return o.cellMaxWidth - a.w + "px"
            }).style("margin-left", function (a) {
                return o.cellMaxWidth - a.w + "px"
            });
        d.append("div").attr("class", "label").append("p").text(function (a) {
            return a.val
        }), c.append("div").attr("class", "label").append("p").text("en" == o.mode ? "# of Stores" : "ì—…ì†Œìˆ˜(ê°œ)")
    }

    function g(a) {
        var b = a.selectAll("div.cell").data(function (a) {
            return a.values
        }, function (a) {
            return a[o.key]
        });
        b.enter().append("div").attr("class", "cell"), b.each(function (a) {
            a.maxRectW = t(d3.max(a.total, function (a) {
                    return a[o.valKey]
                }) + 1), a.latestRectW = t(l(a.total, r[r.length - 1])[o.valKey] + 1)
        }).style("width", function (a) {
            return a.latestRectW + "px"
        }).style("height", function (a) {
            return a.latestRectW + "px"
        }).style("margin", o.cellPadding + "px").style("margin-top", 4 * o.cellPadding + "px").style("margin-left", function (a) {
            return a.maxRectW - a.latestRectW + o.cellPadding + "px"
        }).style("margin-bottom", 30 * o.cellPadding + "px").call(e);
        var c = b.append("div").attr("class", "bloc").style("margin-top", function (a) {
            return a.latestRectW + "px"
        }).style("margin-left", function (a) {
            return a.latestRectW + "px"
        }).style("width", 0).style("height", 0).style("background", u(o.yearRange[0]));
        c.call(k, s);
        var d = b.append("div").attr("class", "cell-header"), f = d.append("div").attr("class", "cell-title");
        f.append("p").attr("class", "cell-title-main").html(function (a) {
            return '<span class="t' + a.SNT_UPTAE_NM_CODE + '"></span>' + ("en" == o.mode ? a[o.titleKeyEn] : a[o.titleKey])
        }), f.append("p").attr("class", "cell-title-sub").text(function (a) {
            return "en" == o.mode ? a[o.nestKeyEn] : a[o.nestKey]
        });
        var g = d.append("div").attr("class", "cell-value");
        return g.append("p").attr("class", "cell-value-existed"), g.append("p").attr("class", "cell-value-rate"), a
    }

    function h(a) {
        var b = a.selectAll(".cell");
        b.each(function (a) {
            a.maxRectW = t(d3.max(a.total, function (a) {
                    return a[o.valKey]
                }) + 1), a.latestRectW = t(l(a.total, r[r.length - 1])[o.valKey] + 1)
        }).call(e), b.transition().duration(o.duration).style("width", function (a) {
            return a.latestRectW + "px"
        }).style("height", function (a) {
            return a.latestRectW + "px"
        }).style("margin-right", o.cellPadding + "px").style("margin-top", 4 * o.cellPadding + "px").style("margin-left", function (a) {
            return a.maxRectW - a.latestRectW + o.cellPadding + "px"
        }).style("margin-bottom", 30 * o.cellPadding + "px");
        var c = b.insert("div", ":first-child").attr("class", "bloc").style("margin-top", function (a) {
            return a.latestRectW + "px"
        }).style("margin-left", function (a) {
            return a.latestRectW + "px"
        }).style("width", 0).style("height", 0).style("background", u(o.yearRange[0]));
        return c.call(k, s), a
    }

    function i(a) {
        return a.selectAll(".cell-header").style("height", "").style("margin-bottom", ""), a.selectAll(".cell-value").selectAll("p").text(""), a.selectAll(".cell-chart").transition().duration(o.duration).style("opacity", 0).each("end", function () {
            d3.select(this).remove()
        }), a
    }

    function j(a) {
        return a.selectAll(".category-title").text(""), a.selectAll(".cell").call(i), a
    }

    function k(a, b) {
        a.transition().ease(d3.ease("linear")).duration(o.duration).style("margin-top", function (a) {
            var b = l(a.total, s);
            return a.curRectW = t(b[o.valKey] + 1), a.latestRectW - a.curRectW + "px"
        }).style("margin-left", function (a) {
            var b = l(a.total, s);
            return a.curRectW = t(b[o.valKey] + 1), a.latestRectW - a.curRectW + "px"
        }).style("width", function (a) {
            return a.curRectW + "px"
        }).style("height", function (a) {
            return a.curRectW + "px"
        }).style("background", u(s))
    }

    function l(a, b) {
        return a.filter(function (a) {
            return a.year === b
        })[0]
    }

    function m(a) {
        r = d3.range(o.yearRange[0], o.yearRange[1] + o.yearUnit, o.yearUnit);
        var b = [];
        a.forEach(function (a) {
            r.forEach(function (c) {
                var d = l(a.total, c);
                b.push(d[o.valKey])
            })
        });
        var c = d3.extent(b);
        t.domain(c.map(function (a) {
            return a + 1
        })).rangeRound([o.cellMinWidth, o.cellMaxWidth]), u.domain(r).range(["#efa40f", "#eaa611", "#e3a913", "#dbad16", "#d6af17", "#ceb21a", "#c6b61d", "#bdba20", "#b4bd24", "#abc028", "#a2c32e", "#99c534", "#90c63c", "#89c644", "#80c54e", "#77c45a", "#6ec168", "#65bf75", "#5cbc84", "#53b993", "#4ab6a2", "#43b2b0", "#3bafbd", "#34adc9", "#2fabd2", "#2aa9da"])
    }

    function n(a) {
        v[a] = function (b) {
            return arguments.length ? (o[a] = b, v) : o[a]
        }
    }

    var o = {
        cellMaxWidth: 280,
        cellMinWidth: 0,
        cellPadding: 4,
        yearRange: [1965, 2015],
        key: "key",
        rateKey: "growth_rate",
        valKey: "existed",
        nestKey: "SNT_COB_NM",
        titleKey: "SNT_UPTAE_NM",
        nestKeyEn: "SNT_COB_NM_EN",
        titleKeyEn: "SNT_UPTAE_NM_EN",
        yearUnit: 1,
        duration: 1e3,
        isLegend: !1,
        mode: "kr"
    };
    $.extend(o, a);
    var p, q, r, s, t = d3.scale.log(), u = d3.scale.quantile(), v = function (a) {
        a.each(function (a) {
            q = d3.select(this)
        })
    };
    for (var w in o)o.hasOwnProperty(w) && !v[w] && n(w);
    return v.year = function (a) {
        return arguments.length ? (s = a, v) : s
    }, v.update = function () {
        return q && q.selectAll(".category").selectAll(".cell").selectAll(".bloc").call(k, s), v
    }, v.render = function () {
        var a = q.datum();
        return m(a), o.isLegend ? q.call(f) : q.call(b, a).call(c), v
    }, v.transform = function () {
        var a = q.datum();
        m(a);
        var b = q.selectAll(".tooltip");
        return 0 == b.size() && q.call(c), q.selectAll(".category").call(j), q.call(h), v
    }, v
}, d3.seoul.RectMap = function (a) {
    function b(a) {
        var b = a.selectAll(".legend").data([i.colorRange]),
            c = b.enter().append("div").attr("class", "legend").append("svg").attr({
                width: "100%",
                height: 70
            }).append("g"), d = c.selectAll(".chip").data(function (a) {
                return a
            }), e = .25 * i.cellWidth,
            f = d.enter().append("g").attr("class", "chip").attr("transform", d3.svg.transform().translate(function (a, b) {
                return [b * i.cellWidth, 0]
            }));
        return f.append("rect").attr("width", i.cellWidth).attr("height", e).style("fill", function (a) {
            return a
        }), f.append("text").attr("y", e).attr("dy", "1.35em"), b.selectAll(".chip").each(function (a, b) {
            d3.select(this).select("text").text(n.domain()[b])
        }), a
    }

    function c(a, b) {
        g(b);
        var c = a.selectAll(".map-wrapper").data([b]);
        c.enter().append("div").attr("class", "map-wrapper");
        var e = c.selectAll(".map").data(function (a) {
            return a.years.filter(function (a) {
                return (a.key - i.yearRange[0]) % i.yearOffset == 0
            }).sort(function (a, b) {
                return b.key - a.key
            })
        }, function (a) {
            return a.key
        }), f = e.enter().append("div").attr("class", "map");
        f.each(function (a, b) {
            d3.select(this).node().appendChild(i.map.cloneNode(!0))
        }), f.selectAll(".map-svg").attr("width", function () {
            return parseInt(d3.select(this).attr("width")) * k
        }).attr("height", function () {
            return parseInt(d3.select(this).attr("height")) * k
        }), f.style("opacity", 0), f.selectAll(".cell").classed({enter: !0}), f.transition().delay(function (a, b) {
            return b * i.duration * .4
        }).duration(0).style("opacity", 1).each("end", function (a, b) {
            var c = d3.select(this).selectAll(".cell.enter").style("opacity", 0);
            c.transition().delay(function (a, b) {
                return b * i.duration * .05
            }).duration(i.duration).style("opacity", 1).style("fill", function (a) {
                return d3.select(this).classed("background") ? n(a[i.valKey] + 1) : void 0
            }).each("end", function () {
                d3.select(this).classed({enter: !1})
            })
        });
        var h = e.selectAll(".tooltip").data(function (a) {
            return [a.key]
        }, function (a) {
            return a
        });
        e.selectAll(".year").data(function (a) {
            return [a.key]
        }).enter().append("div").attr("class", "year").text(function (a) {
            return a
        });
        var j = h.enter().append("div").attr("class", "tooltip");
        return j.append("div").attr("class", "label value"), e.select(".map-svg > g").call(d), a
    }

    function d(a) {
        var b = a.selectAll(".cell.front").data(function (a) {
                return a.values
            }, function (a) {
                return a[i.locKey]
            }),
            c = b.enter().append("g").attr("class", "cell front enter").attr("transform", d3.svg.transform().translate(function (a) {
                var b = o.get(a[i.locKey]);
                return a.x = b[1] * (i.svgCellWidth + i.svgCellPadding), a.y = b[0] * (i.svgCellHeight + i.svgCellPadding), [a.x, a.y]
            })).call(f);
        c.append("text").attr("text-anchor", "middle").attr("x", .5 * i.svgCellWidth).attr("y", .5 * i.svgCellHeight).attr("dy", ".35em").text(function (a) {
            return "en" == i.mode ? q.get(a[i.locKey]).district_en_abbr : a[i.locKey].slice(0, a[i.locKey].length - 1)
        }), b.selectAll("text").classed({transition: !0}).transition().duration(.5 * i.duration).each("end", function () {
            d3.select(this).classed({transition: !1})
        }), a.each(function (a) {
            var b = a.values;
            d3.select(this).selectAll(".cell.background").each(function () {
                var a = d3.select(this).attr("id"), c = b.filter(function (b) {
                    return b[i.locKey] === a + "êµ¬"
                })[0];
                d3.select(this).datum(c)
            })
        });
        var d = a.selectAll(".cell.background").style("fill", n.range()[0]).call(f), e = d.filter(function () {
            return !d3.select(this).classed("enter")
        }).classed({transition: !0});
        return e.transition().duration(.5 * i.duration).style("fill", function (a) {
            return n(a[i.valKey] + 1)
        }).each("end", function (a) {
            d3.select(this).classed({transition: !1})
        }), a
    }

    function e(a, b, c) {
        a.style("visibility", "visible").style("left", function () {
            var a = parseInt(d3.select(this).style("width"));
            a += "" !== d3.select(this).style("padding") ? 2 * parseInt(d3.select(this).style("padding")) : 2 * i.cellPadding;
            var b = c[0] + .5 * (i.cellWidth - a);
            return b + "px"
        }).style("top", c[1] + .97 * i.cellHeight + "px").selectAll(".label.value").html(function (a) {
            return ("en" == i.mode ? q.get(b[i.locKey]).district_en + "<br># of stores<br>" : b[i.locKey] + "<br>ì—…ì†Œìˆ˜<br>") + b[i.valKey]
        })
    }

    function f(a) {
        a.on("mouseenter", function (a) {
            d3.select(this).classed({hover: !0});
            var b = j.selectAll(".map");
            b.each(function (b, c) {
                var b = d3.select(this);
                b.selectAll(".cell.background").filter(function (b) {
                    return b[i.locKey] === a[i.locKey]
                }).classed({hover: !0}).each(function (a, c) {
                    var d = o.get(a[i.locKey]);
                    d = [d[1] * (i.cellWidth + i.cellPadding), d[0] * (i.cellHeight + i.cellPadding)], b.select(".tooltip").call(e, a, d)
                })
            }), d3.event.preventDefault()
        }).on("mouseleave", function (a) {
            d3.select(this).classed({hover: !1});
            var b = j.selectAll(".map");
            b.selectAll(".cell.background.hover").classed({hover: !1}), b.selectAll(".tooltip").style("visibility", "hidden")
        }).on("dblclick", function (a) {
            var b = "http://data.seoul.go.kr/openinf/sheetview.jsp?infId=OA-" + p.get(a[i.locKey]);
            window.open(b), d3.event.preventDefault()
        })
    }

    function g(a) {
        var b = [];
        a.years.filter(function (a) {
            return (a.key - i.yearRange[0]) % i.yearOffset == 0
        }).forEach(function (a) {
            var c = a.values.map(function (a) {
                return a[i.valKey]
            });
            b = b.concat(c)
        });
        var c = d3.max(b), d = c.toString().length;
        c = Math.ceil(c / Math.pow(10, d - 1)) * Math.pow(10, d - 1);
        var e = d3.range(0, i.colorRange.length).map(function (a) {
            var b = 1 / (i.colorRange.length - 1) * a;
            return b * c
        });
        n.domain(e)
    }

    function h(a) {
        r[a] = function (b) {
            return arguments.length ? (i[a] = b, r) : i[a]
        }
    }

    var i = {
        cellWidth: 65,
        cellPadding: 6,
        svgCellWidth: 40,
        svgCellHeight: 42,
        svgCellPadding: 3,
        yearRange: [1965, 2015],
        cellNum: {x: 7, y: 6},
        key: "key",
        colorRange: ["#dce4f2", "#90dbe9", "#15afc9", "#007db1", "#00427a"],
        valKey: "existed",
        nestKey: "SNT_COB_NM",
        titleKey: "SNT_UPTAE_NM",
        nestKeyEn: "SNT_COB_NM_EN",
        titleKeyEn: "SNT_UPTAE_NM_EN",
        locKey: "district",
        yearOffset: 5,
        duration: 1e3,
        map: void 0,
        mode: "kr"
    };
    $.extend(i, a);
    var j, k, l, m = ["abstract", "detailed"], n = (m[0], d3.scale.linear()), o = d3.map({
        "ë…¸ì›êµ¬": [0, 4],
        "ì„±ë¶êµ¬": [1, 2],
        "ê°•ë¶êµ¬": [1, 3],
        "ë„ë´‰êµ¬": [1, 4],
        "ì€í‰êµ¬": [2, 1],
        "ì¢…ë¡œêµ¬": [2, 2],
        "ì¤‘êµ¬": [2, 3],
        "ë™ëŒ€ë¬¸êµ¬": [2, 4],
        "ì¤‘ëž‘êµ¬": [2, 5],
        "ì„œëŒ€ë¬¸êµ¬": [3, 1],
        "ë§ˆí¬êµ¬": [3, 2],
        "ìš©ì‚°êµ¬": [3, 3],
        "ì„±ë™êµ¬": [3, 4],
        "ê´‘ì§„êµ¬": [3, 5],
        "ê°•ì„œêµ¬": [4, 0],
        "ì–‘ì²œêµ¬": [4, 1],
        "ì˜ë“±í¬êµ¬": [4, 2],
        "ë™ìž‘êµ¬": [4, 3],
        "ê°•ë‚¨êµ¬": [4, 4],
        "ì†¡íŒŒêµ¬": [4, 5],
        "ê°•ë™êµ¬": [4, 6],
        "êµ¬ë¡œêµ¬": [5, 1],
        "ê¸ˆì²œêµ¬": [5, 2],
        "ê´€ì•…êµ¬": [5, 3],
        "ì„œì´ˆêµ¬": [5, 4]
    }), p = d3.map({
        "ì„±ë™êµ¬": "10754",
        "ë…¸ì›êµ¬": "10985",
        "ì–‘ì²œêµ¬": "10831",
        "ì„±ë¶êµ¬": "11139",
        "ë„ë´‰êµ¬": "10061",
        "ì¤‘ëž‘êµ¬": "10292",
        "ì˜ë“±í¬êµ¬": "10446",
        "ê°•ì„œêµ¬": "9984",
        "ê°•ë‚¨êµ¬": "11293",
        "ì„œì´ˆêµ¬": "11062",
        "ë™ìž‘êµ¬": "10600",
        "ê¸ˆì²œêµ¬": "10138",
        "ì¤‘êµ¬": "10215",
        "ë™ëŒ€ë¬¸êµ¬": "10369",
        "ì†¡íŒŒêµ¬": "11447",
        "ë§ˆí¬êµ¬": "11370",
        "ìš©ì‚°êµ¬": "11216",
        "ê°•ë™êµ¬": "10677",
        "ì€í‰êµ¬": "10523",
        "ê´‘ì§„êµ¬": "9907",
        "ê´€ì•…êµ¬": "11524",
        "ì¢…ë¡œêµ¬": "9830",
        "ê°•ë¶êµ¬": "10908",
        "êµ¬ë¡œêµ¬": "2292",
        "ì„œëŒ€ë¬¸êµ¬": "2301"
    }), q = d3.map({
        "ë…¸ì›êµ¬": {district_en: "Nowon-gu", district_en_abbr: "NW"},
        "ì„±ë¶êµ¬": {district_en: "Seongbuk-gu", district_en_abbr: "SB"},
        "ê°•ë¶êµ¬": {district_en: "Gangbuk-gu", district_en_abbr: "GB"},
        "ë„ë´‰êµ¬": {district_en: "Dobong-gu", district_en_abbr: "DB"},
        "ì€í‰êµ¬": {district_en: "Eunpyeong-gu", district_en_abbr: "EP"},
        "ì¢…ë¡œêµ¬": {district_en: "Jongno-gu", district_en_abbr: "JO"},
        "ì¤‘êµ¬": {district_en: "Jung-gu", district_en_abbr: "J"},
        "ë™ëŒ€ë¬¸êµ¬": {district_en: "Dongdaemun-gu", district_en_abbr: "DDM"},
        "ì¤‘ëž‘êµ¬": {district_en: "Jungnang-gu", district_en_abbr: "JU"},
        "ì„œëŒ€ë¬¸êµ¬": {district_en: "Seodaemun-gu", district_en_abbr: "SDM"},
        "ë§ˆí¬êµ¬": {district_en: "Mapo-gu", district_en_abbr: "MP"},
        "ìš©ì‚°êµ¬": {district_en: "Yongsan-gu", district_en_abbr: "YS"},
        "ì„±ë™êµ¬": {district_en: "Seongdong-gu", district_en_abbr: "SD"},
        "ê´‘ì§„êµ¬": {district_en: "Gwangjin-gu", district_en_abbr: "GJ"},
        "ê°•ì„œêµ¬": {district_en: "Gangseo-gu", district_en_abbr: "GS"},
        "ì–‘ì²œêµ¬": {district_en: "Yangcheon-gu", district_en_abbr: "YC"},
        "ì˜ë“±í¬êµ¬": {district_en: "Yeongdeungpo-gu", district_en_abbr: "YD"},
        "ë™ìž‘êµ¬": {district_en: "Dongjak-gu", district_en_abbr: "DJ"},
        "ê°•ë‚¨êµ¬": {district_en: "Gangnam-gu", district_en_abbr: "GN"},
        "ì†¡íŒŒêµ¬": {district_en: "Songpa-gu", district_en_abbr: "SP"},
        "ê°•ë™êµ¬": {district_en: "Gangdong-gu", district_en_abbr: "GD"},
        "êµ¬ë¡œêµ¬": {district_en: "Guro-gu", district_en_abbr: "GR"},
        "ê¸ˆì²œêµ¬": {district_en: "Geumcheon-gu", district_en_abbr: "GC"},
        "ê´€ì•…êµ¬": {district_en: "Gwanak-gu", district_en_abbr: "GW"},
        "ì„œì´ˆêµ¬": {district_en: "Seocho-gu", district_en_abbr: "SC"}
    }), r = function (a) {
        a.each(function (a) {
            n.interpolate(d3.interpolateRgb).range(i.colorRange), j = d3.select(this), k = i.cellWidth / i.svgCellWidth, i.cellHeight = i.svgCellHeight * k, i.cellPadding = i.svgCellPadding * k
        })
    };
    for (var s in i)i.hasOwnProperty(s) && !r[s] && h(s);
    return r.keyValue = function (a) {
        return arguments.length ? (l = a, r) : l
    }, r.update = function (a) {
        j.call(c, a).call(b)
    }, r
}, d3.seoul.Intro = function (a) {
    function b() {
        setInterval(e, h.duration)
    }

    function c() {
        r.push({x: h.width / 2, y: h.height / 2}), j = 0;
        var a = {type: "center", center: 0, id: 0, x: h.width / 2, y: h.height / 2, fixed: !0, r: h.centerSize};
        i = a.r, q.push(a), p = d3.layout.force().nodes(q).links([]).gravity(0).size([h.width, h.height]).charge(function (a) {
            return -(a.r * a.r * .085) * ("particle" === a.type ? 2.5 * Math.random() : 1)
        }).on("tick", d)
    }

    function d(a) {
        var b = .1 * a.alpha;
        q.forEach(function (a, c) {
            var d = .75 * (r[a.center].y - a.y), e = .75 * (r[a.center].x - a.x), f = ny = 0, g = e * e + d * d;
            f = .75 * -d, ny = .75 * e, i * i * 2.2 > g && ("right" == a.side && (f *= -1, ny *= -1), f *= Math.random(), ny *= Math.random()), a.y += (d + ny) * b, a.x += (e + f) * b
        }), l.attr("cx", function (a) {
            return a.x
        }).attr("cy", function (a) {
            return a.y
        }), l.transition().duration(h.duration).ease(d3.ease("linear")).attr("r", function (a) {
            return a.r
        }).duration(4 * h.duration).style("opacity", .8)
    }

    function e() {
        if (j >= o.length || q.length >= .25 * h.particleMaxNum)for (var a = Math.ceil(3 * Math.random()),
                                                                         b = 0; a > b; b++) {
            var c = q[s], d = Math.random();
            c.x = h.width / 2 + h.width / 2 + (Math.random() - .5) * (d > .5 ? 1 : -1) * h.width / 2, d = Math.random(), c.y = h.height / 2 + h.height / 2 + (Math.random() - .5) * (d > .5 ? 1 : -1) * h.height / 2, s += 1, s >= q.length && (s = 1)
        }
        return j >= o.length ? void p.start() : (d3.range(0, Math.ceil(40 * Math.random())).forEach(function () {
            q.push({
                id: q.length + 1,
                center: ~~(Math.random() * r.length),
                type: "particle",
                r: h.particleSize + (Math.random() - .5) * h.particleSize,
                side: Math.random() > .5 ? "left" : "right"
            })
        }), q.filter(function (a) {
            return "center" === a.type
        }).forEach(function (a) {
            a.r += 2, i = a.r
        }), l = l.data(q, function (a) {
            return a.id
        }), l.enter().append("circle").attr("class", function (a) {
            return "node " + a.type
        }).attr("cx", function (a) {
            return a.x
        }).attr("cy", function (a) {
            return a.y
        }).attr("r", function (a) {
            return a.r
        }).style("opacity", 0), p.start(), m.select(".label-year").text(function (a) {
            return "en" == h.mode ? "# of Stores (" + a[j].key + ")" : a[j].key + "ë…„ ì—…ì†Œìˆ˜"
        }), m.select(".label-num").text(function (a) {
            return n(a[j].values)
        }), void(j += 1))
    }

    function f(a) {
        return k = a.append("svg").attr("width", h.width).attr("height", h.height).attr("viewBox", "0 0 " + h.viewBoxWidth + " " + h.viewBoxHeight), a
    }

    function g(a) {
        t[a] = function (b) {
            return arguments.length ? (h[a] = b, t) : h[a]
        }
    }

    var h = {
        width: 960,
        height: 500,
        viewBoxWidth: 960,
        viewBoxHeight: 500,
        particleSize: 2,
        centerSize: 64,
        centerMaxSize: 128,
        duration: 100,
        particleMaxNum: 1024,
        mode: "kr"
    };
    $.extend(h, a);
    var i, j, k, l, m, n, o, p, q = (d3.scale.category10(), []), r = [], s = 1, t = function (a) {
        a.each(function (a) {
            if (o = a, n = d3.format(","), d3.select(this).call(f), c(), l = k.selectAll("circle"), m = k.selectAll(".label").data(function (a) {
                    return [o]
                }), l = l.data(q, function (a) {
                    return a.id
                }), l.enter().append("circle").attr("class", function (a) {
                    return "node " + a.type
                }).attr("cx", function (a) {
                    return a.x
                }).attr("cy", function (a) {
                    return a.y
                }).attr("r", function (a) {
                    return a.r
                }), 0 == m.size()) {
                var b = m.enter().append("g").attr("class", "label").attr("transform", d3.svg.transform().translate([h.width / 2, h.height / 2.5]));
                b.append("text").attr("class", "label-year").attr("text-anchor", "middle"), b.append("line").attr({
                    x1: -h.width / 6,
                    y1: h.height / 15,
                    x2: h.width / 6,
                    y2: h.height / 15,
                    style: "stroke-width:6; stroke:#fff"
                }), b.append("text").attr("class", "label-num").attr("y", "1.71em").attr("text-anchor", "middle")
            }
        })
    };
    for (var u in h)h.hasOwnProperty(u) && !t[u] && g(u);
    return t.render = function () {
        b()
    }, t.canvas = function (a) {
        return arguments.length ? (h.width = a[0], h.height = a[1], k.attr("width", h.width).attr("height", h.height), t) : [h.width, h.height]
    }, t.viewBox = function (a) {
        return arguments.length ? (h.viewBoxWidth = a[0], h.viewBoxHeight = a[1], k.attr("viewBox", "0 0 " + h.viewBoxWidth + " " + h.viewBoxHeight), t) : [h.viewBoxWidth, h.viewBoxHeight]
    }, t
}, d3.seoul.GridManager = function () {
}, window.config.mode = "ko_KR" == window.config.locale ? "kr" : "en";
var param = window.location.href.split("?");
param.length > 1 && (window.config.mode = param[1].split("=")[1]), function (a) {
    $Events = {RESIZE: "resize", CLICK: "click"}, a.Intro = function () {
        $Elements = {INTRO_CONTAINER: a(".timelaps"), START: a(".start"), INTRO: a(".intro"), WRAP: a("#wrapper")};
        var b = config["static"] + "foodseoul/business_counts.json", c = $Elements.INTRO_CONTAINER,
            d = d3.seoul.DataManager().loadTotal(b);
        d.on("ready", function (a) {
            var b = d3.seoul.Intro({
                width: c.width(),
                height: c.height(),
                viewBoxWidth: c.width(),
                viewBoxHeight: c.height(),
                centerSize: c.width() / 100 * (745 / 3840 * 100),
                centerMaxSize: c.height() / 100 * (1206 / 2160 * 100)
            }).mode(config.mode);
            d3.select(".chart.seoul.intro").datum(a).call(b), setTimeout(function () {
                b.render()
            }, 500), setTimeout(function () {
                $Elements.START.fadeIn(1e3)
            }, 7e3)
        });
        var e = $Elements.START.find("a").attr("href");
        $Elements.START.find("a").attr("href", e + "?lang=" + config.mode), a.responsive = function () {
            $height = a(window).height(), $Elements.WRAP.removeAttr("style"), $height < $Elements.WRAP.width() / 16 * 9 && $Elements.WRAP.css({
                width: $Elements.WRAP.height() / 9 * 16 + "px",
                left: "50%",
                marginLeft: -($Elements.WRAP.height() / 9 * 16 / 2) + "px"
            }), a("body").css("height", $height + "px"), c.find("img").css("line-height", c.height() + "px"), $Elements.INTRO.css({
                width: c.width(),
                height: c.height()
            })
        }, a(window).bind($Events.RESIZE, function () {
            a.responsive()
        }), a.responsive(), a("#screen").fadeOut(800, function () {
            a(this).remove()
        })
    }, a.Visualize = {
        rangeslider: null,
        rangecolor: ["#efa40f", "#eaa611", "#e3a913", "#dbad16", "#d6af17", "#ceb21a", "#c6b61d", "#bdba20", "#b4bd24", "#abc028", "#a2c32e", "#99c534", "#90c63c", "#89c644", "#80c54e", "#77c45a", "#6ec168", "#65bf75", "#5cbc84", "#53b993", "#4ab6a2", "#43b2b0", "#3bafbd", "#34adc9", "#2fabd2", "#2aa9da"],
        datapath: config["static"] + "foodseoul/business_counts.json",
        rectGrid: d3.seoul.RectGrid(),
        rectGridLegend: d3.seoul.RectGrid(),
        grid: d3.seoul.SmallLineGrid(),
        map: d3.seoul.RectMap(),
        lineGrid: d3.seoul.SmallLineGrid(),
        stored: null,
        data: null,
        playing: null,
        autopass: null,
        autopass2: null,
        sliderPos: [],
        sliderCur: 0,
        elements: {wrap: a("#wrapper"), handle: a(".slider input"), chart: a(".chart"), slider: a(".slider")},
        responsive: function () {
            $height = a(window).height(), this.elements.wrap.removeAttr("style"), $height < this.elements.wrap.width() / 16 * 9 && this.elements.wrap.css({
                width: this.elements.wrap.height() / 9 * 16 + "px",
                left: "50%",
                marginLeft: -(this.elements.wrap.height() / 9 * 16 / 2) + "px"
            }), a("body").css("height", $height + "px"), a(".rangeslider__handle").css({
                height: a(".slider").height() + "px",
                width: a(".slider").height()
            }), this.elements.handle.rangeslider("update", !0), this.sliderPos = [];
            for (var b = 1965; 2016 > b; b += 2)this.elements.handle.val(b).change(), this.sliderPos.push(a(".rangeslider__handle").position().left);
            this.elements.handle.val(this.sliderCur).change();
            for (var b = 0; 26 > b; b++)a(".years div:eq(" + b + ")").css({left: this.sliderPos[b] - 7 + "px"});
            this.uiUpdate()
        },
        uiUpdate: function () {
            if (a(".cell-title-main").length) {
                var b = a(".cell-title-main").height() + "px";
                a(".cell-title-main span").css({width: b, height: b})
            }
        },
        init: function () {
            var b = this;
            this.renderArea(), this.elements.handle.rangeslider({
                polyfill: !1,
                fillClass: "rangeslider__fill",
                onInit: function () {
                    a.Visualize.rangeslider = this, a(".years div:first").addClass("active")
                },
                onSlide: function (c, d) {
                    b.sliderCur = (d - 1965) / 2, a(".rangeslider__handle").css({"background-color": b.rangecolor[b.sliderCur]}), a(".years div").removeClass("active"), a(".years div:eq(" + b.sliderCur + ")").addClass("active");
                    var e = +d;
                    b.updateArea(e)
                }
            });
            for (var c = 1965; 2016 > c; c += 2) {
                var d = a("<div/>").addClass("y" + c).appendTo(".years");
                a("<span/>").text(c).appendTo(d)
            }
            a("#screen").fadeOut(800, function () {
                a(this).remove()
            }), this.responsive(), a(window).bind($Events.RESIZE, function () {
                a.Visualize.responsive()
            }), a("body").bind($Events.CLICK, function () {
                return b.clearautopass(), !0
            }), a(".autoplay").bind($Events.CLICK, function () {
                var c = a(this).hasClass("play") ? !1 : !0;
                return b.autoplay(c), !1
            }), a(".district").bind($Events.CLICK, function () {
                a(".buttons button").removeClass("active"), a(this).addClass("active"), b.clearautopass(), b.autoplay(!1), a("nav").fadeOut(300), a("article").addClass("alone"), "kr" == config.mode ? (a("section h1").text("ì—…ì¢…ë³„ íŠ¸ëžœë“œ ë¹„êµ"), a(".description").html("ê° ì—…ì¢…ë³„ ëˆ„ì  ì—…ì†Œìˆ˜ì˜ ì¦ê°€ ë° ê°ì†Œì— ëŒ€í•œ íŠ¸ë Œë“œë¥¼ ì—°ë„ë³„ë¡œ ë¹„êµí•˜ì—¬ ê°œì—… / íì—… í˜„í™©ì„ ì•Œ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.<br><small>( ì°¸ê³  : ì˜ì—­ ì»¬ëŸ¬ê°€ ì§„í• ìˆ˜ë¡ ì—…ì†Œ ì¦ê°€ ê¸‰ì¦)</small>")) : (a("section h1").text("Progression by industry"), a(".description").html("The detail status of the restaurant business by comparing the increase or decrease in the number of establishments.<br><small>(ref. the darker area color, increase rapidly)</small>"));
                var c = a(".chart.seoul").hasClass("rectGrid") ? !0 : !1;
                return c ? (a(".chart.seoul.rectGrid .legend").hide().prependTo("body"), b.stored.classed({
                    rectGrid: !1,
                    smallLineGrid: !0
                }), b.lineGrid.transform()) : (a("section .head").remove(), a(".chart.seoul").empty().removeClass("rectMap"), b.stored.classed({
                    rectGrid: !1,
                    smallLineGrid: !0
                }), b.lineGrid.render()), "kr" == config.mode ? a(".category-title").append('<div class="legend"><p>* ì—…ì¢…ë³„ ë‹¨ìœ„</p><span class="accum">ëˆ„ì ì—…ì†Œ</span><span class="open">ê°œì—…ìˆ˜</span><span class="close">íì—…ìˆ˜</span>') : a(".category-title").append('<div class="legend"><span class="accum">total</span><span class="open">open</span><span class="close">closed</span>'), a("article").scrollTop(0), !1
            }), a(".region").bind($Events.CLICK, function () {
                return a(".buttons button").removeClass("active"), a(this).addClass("active"), b.clearautopass(), a("nav").fadeOut(300), a("article").addClass("alone"), "kr" == config.mode ? (a("section h1").text("ìžì¹˜êµ¬ë³„ íŠ¸ëžœë“œ ë¹„êµ"), a(".description").html("ìƒë‹¨ì˜ ì—…ì¢…ì„ ì„ íƒí•˜ë©´ 1965ë…„ë¶€í„° í˜„ìž¬ê¹Œì§€ 5ë…„ë‹¨ìœ„ë¡œ ê° ìžì¹˜êµ¬ë³„ ì—…ì†Œìˆ˜ë¥¼ ë¹„êµí•˜ì—¬ í•´ë‹¹ ì—…ì¢…ì˜ ì¸ê¸° ì§€ì—­ì„ íŒŒì•…í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.<br><small>(ì°¸ê³  : ë§ˆìš°ìŠ¤ ì˜¤ë²„ ì‹œ ìžì¹˜êµ¬ ì—…ì†Œìˆ˜ í™•ì¸)</small>")) : (a("section h1").text("View by borough"), a(".description").html("You can track the popularity of the restaurant in each 25 distincts in Seoul Metro city since 1965 by comparing every five years.")), b.stored.classed({
                    rectGrid: !1,
                    smallLineGrid: !1
                }), a(".chart.seoul").empty().attr("class", "chart seoul rectMap").append('<select class="keyValues"></select>'), b.renderMap(), a("article").scrollTop(0), !1
            }), a(".whole").bind($Events.CLICK, function () {
                a(".buttons button").removeClass("active"), a(this).addClass("active"), b.clearautopass(), a("nav").fadeIn(300), a("article").removeClass("alone"), "kr" == config.mode ? (a("section h1").text("ì „ì²´ ì—…ì†Œìˆ˜ ë³€í™” ë¹„êµ"), $de = "ì¼ë°˜ ìŒì‹ì—…, ì£¼ë¥˜ ìœ í¥ì—…, ì°¨/ë‹¤ê³¼ íŒë§¤ ë“±  1965ë…„ë¶€í„° í˜„ìž¬ê¹Œì§€ ì™¸ì‹ì‚°ì—…ì˜ ì—…ì¢…ë³„ ì—…ì†Œìˆ˜ í˜„í™©ì„ ë‚˜íƒ€ë‚´ê³  ìžˆìŠµë‹ˆë‹¤.<br><small>( ì°¸ê³  : ì ì„  - 2015ë…„ í˜„ìž¬ ê¸°ì¤€)</small>", a(".description").html($de)) : (a("section h1").text("Change from 1965"), $de = "The status of the restaurant business in Seoul city since 1965<br><small>(ref. the dotted line is the state of 2015)</small>", a(".description").html($de));
                var c = a(".chart.seoul").hasClass("smallLineGrid") ? !0 : !1;
                return c ? (b.stored.classed({
                    smallLineGrid: !1,
                    rectGrid: !0
                }), b.rectGrid.transform(), a("body .legend").prependTo(".chart.seoul").show(), b.responsive()) : (a("section .head").remove(), a(".chart.seoul").empty().attr("class", "chart seoul rectGrid").append('<div class="rectGrid seoul legend"> <p>' + ("kr" == config.mode ? "ì°¨íŠ¸ ë²”ë¡€ ë„ì›€ë§" : "Legend") + ' <a role="button" id="legend-guide" href="#"></a></p></div>'), b.renderArea()), a("article").scrollTop(0), !1
            }), a("article").delegate("#legend-guide", "mouseenter", function () {
                a(".legend .cell").fadeIn(300)
            }).delegate("#legend-guide", "mouseleave", function () {
                a(".legend .cell").hide()
            }), setTimeout(function () {
                a(".autoplay").trigger($Events.CLICK)
            }, 1e3), this.autopass = setTimeout(function () {
                a(".district").trigger($Events.CLICK), b.autopass2 = setTimeout(function () {
                    a(".region").trigger($Events.CLICK)
                }, 1e4)
            }, 16e3)
        },
        clearautopass: function () {
            null != this.autopass && (clearTimeout(this.autopass), null == this.autopass), null != this.autopass2 && (clearTimeout(this.autopass2), null == this.autopass2)
        },
        updateArea: function (a) {
            this.rectGrid.year(a).update()
        },
        autoplay: function (b) {
            var c = this;
            b ? (a(".autoplay").addClass("play"), 2015 == Number(c.elements.handle.val()) && c.elements.handle.val(1965).change(), c.playing = setInterval(function () {
                var b = +c.elements.handle.val();
                udt = b + 2, udt > 2015 ? (a(".autoplay").removeClass("play"), clearInterval(c.playing)) : c.elements.handle.val(udt).change()
            }, 400)) : (a(".autoplay").removeClass("play"), clearInterval(c.playing), c.clearautopass())
        },
        renderMap: function () {
            function b(a) {
                var b = config["static"] + "foodseoul/individual/" + a + ".json";
                g.load(b)
            }

            var c = this, d = config["static"] + "foodseoul/business_names.json",
                e = config["static"] + "foodseoul/Seoul_Han-river-01.svg", f = "SNT_UPTAE_NM_CODE",
                g = d3.seoul.DataManager().isAbstract(!1), h = d3.select(".chart select.keyValues");
            d3.json(d, function (d) {
                var i = d3.seoul.DataManager().loadMap(e);
                i.on("ready", function (e) {
                    c.map = d3.seoul.RectMap({
                        cellWidth: a(".rectMap").width() / 3 / 9.5,
                        cellPadding: 5
                    }).map(e).mode(config.mode);
                    var i = d.sort(function (a, b) {
                        return a.SNT_COB_NM_CODE - b.SNT_COB_NM_CODE
                    });
                    h.selectAll("option").data(i).enter().append("option").property("value", function (a) {
                        return a[f]
                    }).html(function (a) {
                        return "en" == config.mode ? a.SNT_COB_NM_EN + " â€“ " + a.SNT_UPTAE_NM_EN : a.SNT_COB_NM + " â€“ " + a.SNT_UPTAE_NM
                    }), $head = a("<div/>").addClass("head"), a(".keyValues").wrap($head), a(".head").prependTo("section"), "kr" == config.mode && a("<p>* êµ¬ë³„ ì—…ì†Œìˆ˜ ë‹¨ìœ„</p>").appendTo(".head"), d3.select(".chart.rectMap").call(c.map), a(".keyValues").chosen().on("change", function () {
                        a(".legend:first").remove();
                        var c = this.options[this.selectedIndex].value;
                        b(c)
                    }), b(i[0][f]), g.on("ready", function (b) {
                        c.map.update(b), a(".legend").prependTo(".head")
                    })
                })
            })
        },
        renderArea: function () {
            var b = this, c = d3.seoul.DataManager().load(b.datapath);
            c.on("ready", function (c) {
                b.data = c;
                var d = [1965, 2015], e = 2, f = (d3.range(d[0], d[1] + e, e), +a(".slider input").val()), g = 400;
                b.rectGrid = d3.seoul.RectGrid({cellMaxWidth: a(".rectGrid").width() / 4}).year(f).yearRange(d).yearUnit(e).duration(g).mode(config.mode), b.lineGrid = d3.seoul.SmallLineGrid().mode(config.mode), b.stored = d3.select(".chart.rectGrid").datum(c).call(b.rectGrid).call(b.lineGrid), b.stored.classed({
                    rectGrid: !0,
                    smallLineGrid: !1
                }), b.rectGrid.render(), b.rectGridLegend = d3.seoul.RectGrid().year(f).yearRange(d).yearUnit(e).duration(g).mode(config.mode).isLegend(!0), d3.select(".legend.rectGrid").datum(c).call(b.rectGridLegend), b.rectGridLegend.render(), b.uiUpdate()
            })
        }
    }, a.event.add(window, "load", function () {
        a(".chart.seoul.intro").length && a.Intro(), a("#content").length && a.Visualize.init()
    })
}(jQuery);