var US = Object.defineProperty;
var $S = (e, t, r) => t in e ? US(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var oe = (e, t, r) => ($S(e, typeof t != "symbol" ? t + "" : t, r), r);
import { jsx as _, jsxs as ie, Fragment as Qt } from "react/jsx-runtime";
import pe, { Component as Ue } from "react";
import { library as zS } from "@fortawesome/fontawesome-svg-core";
import { fas as YS } from "@fortawesome/free-solid-svg-icons";
import { fab as GS } from "@fortawesome/free-brands-svg-icons";
import { far as XS } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon as Xe } from "@fortawesome/react-fontawesome";
import Re from "jquery";
import { Modal as Ir, Pagination as Ot, Row as KS, Col as _c, TabPane as JS, TabContainer as ZS, Nav as QS, NavItem as ex, TabContent as tx, Alert as rx } from "react-bootstrap";
import { ButtonToolbar as lk, Col as uk, Row as ck } from "react-bootstrap";
import Fr from "moment";
import sy from "react-ionicons";
import "datatables.net-select-bs";
import Tr, { findDOMNode as Pa, createPortal as nx } from "react-dom";
import "select2/dist/js/select2";
import "select2/dist/css/select2.css";
import { SingleDatePicker as ix, DateRangePicker as ax } from "react-dates";
import ox from "react-datetime";
import "fullcalendar";
var vi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ly(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var sx = process.env.NODE_ENV !== "production", uy = function() {
};
if (sx) {
  var lx = function(t, r) {
    var n = arguments.length;
    r = new Array(n > 1 ? n - 1 : 0);
    for (var i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    var a = 0, o = "Warning: " + t.replace(/%s/g, function() {
      return r[a++];
    });
    typeof console < "u" && console.error(o);
    try {
      throw new Error(o);
    } catch {
    }
  };
  uy = function(e, t, r) {
    var n = arguments.length;
    r = new Array(n > 2 ? n - 2 : 0);
    for (var i = 2; i < n; i++)
      r[i - 2] = arguments[i];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    e || lx.apply(null, [t].concat(r));
  };
}
var ux = uy;
const Zt = /* @__PURE__ */ nr(ux);
var Tc = { exports: {} }, Jo, bp;
function cf() {
  if (bp)
    return Jo;
  bp = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jo = e, Jo;
}
var Zo, wp;
function cx() {
  if (wp)
    return Zo;
  wp = 1;
  var e = cf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Zo = function() {
    function n(o, s, l, u, c, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Zo;
}
var na = { exports: {} }, lt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sp;
function fx() {
  return Sp || (Sp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function T(U) {
      return typeof U == "string" || typeof U == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      U === n || U === u || U === a || U === i || U === f || U === d || typeof U == "object" && U !== null && (U.$$typeof === m || U.$$typeof === p || U.$$typeof === o || U.$$typeof === s || U.$$typeof === c || U.$$typeof === w || U.$$typeof === C || U.$$typeof === y || U.$$typeof === S);
    }
    function R(U) {
      if (typeof U == "object" && U !== null) {
        var ve = U.$$typeof;
        switch (ve) {
          case t:
            var de = U.type;
            switch (de) {
              case l:
              case u:
              case n:
              case a:
              case i:
              case f:
                return de;
              default:
                var he = de && de.$$typeof;
                switch (he) {
                  case s:
                  case c:
                  case m:
                  case p:
                  case o:
                    return he;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var P = l, N = u, L = s, W = o, Y = t, re = c, z = n, Q = m, se = p, X = r, ee = a, J = i, ue = f, ce = !1;
    function Z(U) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), V(U) || R(U) === l;
    }
    function V(U) {
      return R(U) === u;
    }
    function h(U) {
      return R(U) === s;
    }
    function v(U) {
      return R(U) === o;
    }
    function g(U) {
      return typeof U == "object" && U !== null && U.$$typeof === t;
    }
    function b(U) {
      return R(U) === c;
    }
    function A(U) {
      return R(U) === n;
    }
    function E(U) {
      return R(U) === m;
    }
    function I(U) {
      return R(U) === p;
    }
    function H(U) {
      return R(U) === r;
    }
    function q(U) {
      return R(U) === a;
    }
    function K(U) {
      return R(U) === i;
    }
    function ae(U) {
      return R(U) === f;
    }
    lt.AsyncMode = P, lt.ConcurrentMode = N, lt.ContextConsumer = L, lt.ContextProvider = W, lt.Element = Y, lt.ForwardRef = re, lt.Fragment = z, lt.Lazy = Q, lt.Memo = se, lt.Portal = X, lt.Profiler = ee, lt.StrictMode = J, lt.Suspense = ue, lt.isAsyncMode = Z, lt.isConcurrentMode = V, lt.isContextConsumer = h, lt.isContextProvider = v, lt.isElement = g, lt.isForwardRef = b, lt.isFragment = A, lt.isLazy = E, lt.isMemo = I, lt.isPortal = H, lt.isProfiler = q, lt.isStrictMode = K, lt.isSuspense = ae, lt.isValidElementType = T, lt.typeOf = R;
  }()), lt;
}
var ut = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xp;
function dx() {
  if (xp)
    return ut;
  xp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function T(P) {
    if (typeof P == "object" && P !== null) {
      var N = P.$$typeof;
      switch (N) {
        case t:
          switch (P = P.type, P) {
            case l:
            case u:
            case n:
            case a:
            case i:
            case f:
              return P;
            default:
              switch (P = P && P.$$typeof, P) {
                case s:
                case c:
                case m:
                case p:
                case o:
                  return P;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function R(P) {
    return T(P) === u;
  }
  return ut.AsyncMode = l, ut.ConcurrentMode = u, ut.ContextConsumer = s, ut.ContextProvider = o, ut.Element = t, ut.ForwardRef = c, ut.Fragment = n, ut.Lazy = m, ut.Memo = p, ut.Portal = r, ut.Profiler = a, ut.StrictMode = i, ut.Suspense = f, ut.isAsyncMode = function(P) {
    return R(P) || T(P) === l;
  }, ut.isConcurrentMode = R, ut.isContextConsumer = function(P) {
    return T(P) === s;
  }, ut.isContextProvider = function(P) {
    return T(P) === o;
  }, ut.isElement = function(P) {
    return typeof P == "object" && P !== null && P.$$typeof === t;
  }, ut.isForwardRef = function(P) {
    return T(P) === c;
  }, ut.isFragment = function(P) {
    return T(P) === n;
  }, ut.isLazy = function(P) {
    return T(P) === m;
  }, ut.isMemo = function(P) {
    return T(P) === p;
  }, ut.isPortal = function(P) {
    return T(P) === r;
  }, ut.isProfiler = function(P) {
    return T(P) === a;
  }, ut.isStrictMode = function(P) {
    return T(P) === i;
  }, ut.isSuspense = function(P) {
    return T(P) === f;
  }, ut.isValidElementType = function(P) {
    return typeof P == "string" || typeof P == "function" || P === n || P === u || P === a || P === i || P === f || P === d || typeof P == "object" && P !== null && (P.$$typeof === m || P.$$typeof === p || P.$$typeof === o || P.$$typeof === s || P.$$typeof === c || P.$$typeof === w || P.$$typeof === C || P.$$typeof === y || P.$$typeof === S);
  }, ut.typeOf = T, ut;
}
var Cp;
function ff() {
  return Cp || (Cp = 1, process.env.NODE_ENV === "production" ? na.exports = dx() : na.exports = fx()), na.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Qo, _p;
function Ka() {
  if (_p)
    return Qo;
  _p = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(o).map(function(c) {
        return o[c];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        u[c] = c;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Qo = i() ? Object.assign : function(a, o) {
    for (var s, l = n(a), u, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var f in s)
        t.call(s, f) && (l[f] = s[f]);
      if (e) {
        u = e(s);
        for (var d = 0; d < u.length; d++)
          r.call(s, u[d]) && (l[u[d]] = s[u[d]]);
      }
    }
    return l;
  }, Qo;
}
var es, Tp;
function cy() {
  return Tp || (Tp = 1, es = Function.call.bind(Object.prototype.hasOwnProperty)), es;
}
var ts, Pp;
function fy() {
  if (Pp)
    return ts;
  Pp = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = cf(), r = {}, n = cy();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, s, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in a)
        if (n(a, c)) {
          var f;
          try {
            if (typeof a[c] != "function") {
              var d = Error(
                (l || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = a[c](o, c, l, s, null, t);
          } catch (m) {
            f = m;
          }
          if (f && !(f instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var p = u ? u() : "";
            e(
              "Failed " + s + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ts = i, ts;
}
var rs, Dp;
function px() {
  if (Dp)
    return rs;
  Dp = 1;
  var e = ff(), t = Ka(), r = cf(), n = cy(), i = fy(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return rs = function(s, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(V) {
      var h = V && (u && V[u] || V[c]);
      if (typeof h == "function")
        return h;
    }
    var d = "<<anonymous>>", p = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: y(),
      arrayOf: T,
      element: R(),
      elementType: P(),
      instanceOf: N,
      node: re(),
      objectOf: W,
      oneOf: L,
      oneOfType: Y,
      shape: Q,
      exact: se
    };
    function m(V, h) {
      return V === h ? V !== 0 || 1 / V === 1 / h : V !== V && h !== h;
    }
    function S(V, h) {
      this.message = V, this.data = h && typeof h == "object" ? h : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function w(V) {
      if (process.env.NODE_ENV !== "production")
        var h = {}, v = 0;
      function g(A, E, I, H, q, K, ae) {
        if (H = H || d, K = K || I, ae !== r) {
          if (l) {
            var U = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw U.name = "Invariant Violation", U;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = H + ":" + I;
            !h[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            v < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), h[ve] = !0, v++);
          }
        }
        return E[I] == null ? A ? E[I] === null ? new S("The " + q + " `" + K + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new S("The " + q + " `" + K + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : V(E, I, H, q, K);
      }
      var b = g.bind(null, !1);
      return b.isRequired = g.bind(null, !0), b;
    }
    function C(V) {
      function h(v, g, b, A, E, I) {
        var H = v[g], q = J(H);
        if (q !== V) {
          var K = ue(H);
          return new S(
            "Invalid " + A + " `" + E + "` of type " + ("`" + K + "` supplied to `" + b + "`, expected ") + ("`" + V + "`."),
            { expectedType: V }
          );
        }
        return null;
      }
      return w(h);
    }
    function y() {
      return w(o);
    }
    function T(V) {
      function h(v, g, b, A, E) {
        if (typeof V != "function")
          return new S("Property `" + E + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var I = v[g];
        if (!Array.isArray(I)) {
          var H = J(I);
          return new S("Invalid " + A + " `" + E + "` of type " + ("`" + H + "` supplied to `" + b + "`, expected an array."));
        }
        for (var q = 0; q < I.length; q++) {
          var K = V(I, q, b, A, E + "[" + q + "]", r);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return w(h);
    }
    function R() {
      function V(h, v, g, b, A) {
        var E = h[v];
        if (!s(E)) {
          var I = J(E);
          return new S("Invalid " + b + " `" + A + "` of type " + ("`" + I + "` supplied to `" + g + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(V);
    }
    function P() {
      function V(h, v, g, b, A) {
        var E = h[v];
        if (!e.isValidElementType(E)) {
          var I = J(E);
          return new S("Invalid " + b + " `" + A + "` of type " + ("`" + I + "` supplied to `" + g + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(V);
    }
    function N(V) {
      function h(v, g, b, A, E) {
        if (!(v[g] instanceof V)) {
          var I = V.name || d, H = Z(v[g]);
          return new S("Invalid " + A + " `" + E + "` of type " + ("`" + H + "` supplied to `" + b + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return w(h);
    }
    function L(V) {
      if (!Array.isArray(V))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function h(v, g, b, A, E) {
        for (var I = v[g], H = 0; H < V.length; H++)
          if (m(I, V[H]))
            return null;
        var q = JSON.stringify(V, function(ae, U) {
          var ve = ue(U);
          return ve === "symbol" ? String(U) : U;
        });
        return new S("Invalid " + A + " `" + E + "` of value `" + String(I) + "` " + ("supplied to `" + b + "`, expected one of " + q + "."));
      }
      return w(h);
    }
    function W(V) {
      function h(v, g, b, A, E) {
        if (typeof V != "function")
          return new S("Property `" + E + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var I = v[g], H = J(I);
        if (H !== "object")
          return new S("Invalid " + A + " `" + E + "` of type " + ("`" + H + "` supplied to `" + b + "`, expected an object."));
        for (var q in I)
          if (n(I, q)) {
            var K = V(I, q, b, A, E + "." + q, r);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return w(h);
    }
    function Y(V) {
      if (!Array.isArray(V))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var h = 0; h < V.length; h++) {
        var v = V[h];
        if (typeof v != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(v) + " at index " + h + "."
          ), o;
      }
      function g(b, A, E, I, H) {
        for (var q = [], K = 0; K < V.length; K++) {
          var ae = V[K], U = ae(b, A, E, I, H, r);
          if (U == null)
            return null;
          U.data && n(U.data, "expectedType") && q.push(U.data.expectedType);
        }
        var ve = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new S("Invalid " + I + " `" + H + "` supplied to " + ("`" + E + "`" + ve + "."));
      }
      return w(g);
    }
    function re() {
      function V(h, v, g, b, A) {
        return X(h[v]) ? null : new S("Invalid " + b + " `" + A + "` supplied to " + ("`" + g + "`, expected a ReactNode."));
      }
      return w(V);
    }
    function z(V, h, v, g, b) {
      return new S(
        (V || "React class") + ": " + h + " type `" + v + "." + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function Q(V) {
      function h(v, g, b, A, E) {
        var I = v[g], H = J(I);
        if (H !== "object")
          return new S("Invalid " + A + " `" + E + "` of type `" + H + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var q in V) {
          var K = V[q];
          if (typeof K != "function")
            return z(b, A, E, q, ue(K));
          var ae = K(I, q, b, A, E + "." + q, r);
          if (ae)
            return ae;
        }
        return null;
      }
      return w(h);
    }
    function se(V) {
      function h(v, g, b, A, E) {
        var I = v[g], H = J(I);
        if (H !== "object")
          return new S("Invalid " + A + " `" + E + "` of type `" + H + "` " + ("supplied to `" + b + "`, expected `object`."));
        var q = t({}, v[g], V);
        for (var K in q) {
          var ae = V[K];
          if (n(V, K) && typeof ae != "function")
            return z(b, A, E, K, ue(ae));
          if (!ae)
            return new S(
              "Invalid " + A + " `" + E + "` key `" + K + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(v[g], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(V), null, "  ")
            );
          var U = ae(I, K, b, A, E + "." + K, r);
          if (U)
            return U;
        }
        return null;
      }
      return w(h);
    }
    function X(V) {
      switch (typeof V) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !V;
        case "object":
          if (Array.isArray(V))
            return V.every(X);
          if (V === null || s(V))
            return !0;
          var h = f(V);
          if (h) {
            var v = h.call(V), g;
            if (h !== V.entries) {
              for (; !(g = v.next()).done; )
                if (!X(g.value))
                  return !1;
            } else
              for (; !(g = v.next()).done; ) {
                var b = g.value;
                if (b && !X(b[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(V, h) {
      return V === "symbol" ? !0 : h ? h["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && h instanceof Symbol : !1;
    }
    function J(V) {
      var h = typeof V;
      return Array.isArray(V) ? "array" : V instanceof RegExp ? "object" : ee(h, V) ? "symbol" : h;
    }
    function ue(V) {
      if (typeof V > "u" || V === null)
        return "" + V;
      var h = J(V);
      if (h === "object") {
        if (V instanceof Date)
          return "date";
        if (V instanceof RegExp)
          return "regexp";
      }
      return h;
    }
    function ce(V) {
      var h = ue(V);
      switch (h) {
        case "array":
        case "object":
          return "an " + h;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + h;
        default:
          return h;
      }
    }
    function Z(V) {
      return !V.constructor || !V.constructor.name ? d : V.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, rs;
}
if (process.env.NODE_ENV !== "production") {
  var hx = ff(), vx = !0;
  Tc.exports = px()(hx.isElement, vx);
} else
  Tc.exports = cx()();
var Xn = Tc.exports;
const D = /* @__PURE__ */ nr(Xn);
function Ma() {
  return Ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ma.apply(this, arguments);
}
function ia(e) {
  return e.charAt(0) === "/";
}
function ns(e, t) {
  for (var r = t, n = r + 1, i = e.length; n < i; r += 1, n += 1)
    e[r] = e[n];
  e.pop();
}
function gx(e, t) {
  t === void 0 && (t = "");
  var r = e && e.split("/") || [], n = t && t.split("/") || [], i = e && ia(e), a = t && ia(t), o = i || a;
  if (e && ia(e) ? n = r : r.length && (n.pop(), n = n.concat(r)), !n.length)
    return "/";
  var s;
  if (n.length) {
    var l = n[n.length - 1];
    s = l === "." || l === ".." || l === "";
  } else
    s = !1;
  for (var u = 0, c = n.length; c >= 0; c--) {
    var f = n[c];
    f === "." ? ns(n, c) : f === ".." ? (ns(n, c), u++) : u && (ns(n, c), u--);
  }
  if (!o)
    for (; u--; u)
      n.unshift("..");
  o && n[0] !== "" && (!n[0] || !ia(n[0])) && n.unshift("");
  var d = n.join("/");
  return s && d.substr(-1) !== "/" && (d += "/"), d;
}
function Ep(e) {
  return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function Da(e, t) {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (Array.isArray(e))
    return Array.isArray(t) && e.length === t.length && e.every(function(i, a) {
      return Da(i, t[a]);
    });
  if (typeof e == "object" || typeof t == "object") {
    var r = Ep(e), n = Ep(t);
    return r !== e || n !== t ? Da(r, n) : Object.keys(Object.assign({}, e, t)).every(function(i) {
      return Da(e[i], t[i]);
    });
  }
  return !1;
}
var mx = process.env.NODE_ENV === "production";
function gn(e, t) {
  if (!mx) {
    if (e)
      return;
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var yx = process.env.NODE_ENV === "production", is = "Invariant failed";
function Rp(e, t) {
  if (!e) {
    if (yx)
      throw new Error(is);
    var r = typeof t == "function" ? t() : t, n = r ? "".concat(is, ": ").concat(r) : is;
    throw new Error(n);
  }
}
function bx(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function dy(e, t) {
  return e.toLowerCase().indexOf(t.toLowerCase()) === 0 && "/?#".indexOf(e.charAt(t.length)) !== -1;
}
function wx(e, t) {
  return dy(e, t) ? e.substr(t.length) : e;
}
function Sx(e) {
  return e.charAt(e.length - 1) === "/" ? e.slice(0, -1) : e;
}
function xx(e) {
  var t = e || "/", r = "", n = "", i = t.indexOf("#");
  i !== -1 && (n = t.substr(i), t = t.substr(0, i));
  var a = t.indexOf("?");
  return a !== -1 && (r = t.substr(a), t = t.substr(0, a)), {
    pathname: t,
    search: r === "?" ? "" : r,
    hash: n === "#" ? "" : n
  };
}
function Cx(e) {
  var t = e.pathname, r = e.search, n = e.hash, i = t || "/";
  return r && r !== "?" && (i += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (i += n.charAt(0) === "#" ? n : "#" + n), i;
}
function Wn(e, t, r, n) {
  var i;
  typeof e == "string" ? (i = xx(e), i.state = t) : (i = Ma({}, e), i.pathname === void 0 && (i.pathname = ""), i.search ? i.search.charAt(0) !== "?" && (i.search = "?" + i.search) : i.search = "", i.hash ? i.hash.charAt(0) !== "#" && (i.hash = "#" + i.hash) : i.hash = "", t !== void 0 && i.state === void 0 && (i.state = t));
  try {
    i.pathname = decodeURI(i.pathname);
  } catch (a) {
    throw a instanceof URIError ? new URIError('Pathname "' + i.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : a;
  }
  return r && (i.key = r), n ? i.pathname ? i.pathname.charAt(0) !== "/" && (i.pathname = gx(i.pathname, n.pathname)) : i.pathname = n.pathname : i.pathname || (i.pathname = "/"), i;
}
function _x(e, t) {
  return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && Da(e.state, t.state);
}
function Tx() {
  var e = null;
  function t(o) {
    return process.env.NODE_ENV !== "production" && gn(e == null, "A history supports only one prompt at a time"), e = o, function() {
      e === o && (e = null);
    };
  }
  function r(o, s, l, u) {
    if (e != null) {
      var c = typeof e == "function" ? e(o, s) : e;
      typeof c == "string" ? typeof l == "function" ? l(c, u) : (process.env.NODE_ENV !== "production" && gn(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), u(!0)) : u(c !== !1);
    } else
      u(!0);
  }
  var n = [];
  function i(o) {
    var s = !0;
    function l() {
      s && o.apply(void 0, arguments);
    }
    return n.push(l), function() {
      s = !1, n = n.filter(function(u) {
        return u !== l;
      });
    };
  }
  function a() {
    for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    n.forEach(function(u) {
      return u.apply(void 0, s);
    });
  }
  return {
    setPrompt: t,
    confirmTransitionTo: r,
    appendListener: i,
    notifyListeners: a
  };
}
var Px = !!(typeof window < "u" && window.document && window.document.createElement);
function Dx(e, t) {
  t(window.confirm(e));
}
function Ex() {
  var e = window.navigator.userAgent;
  return (e.indexOf("Android 2.") !== -1 || e.indexOf("Android 4.0") !== -1) && e.indexOf("Mobile Safari") !== -1 && e.indexOf("Chrome") === -1 && e.indexOf("Windows Phone") === -1 ? !1 : window.history && "pushState" in window.history;
}
function Rx() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function Ox(e) {
  return e.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var Op = "popstate", kp = "hashchange";
function Ap() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function kx(e) {
  e === void 0 && (e = {}), Px || (process.env.NODE_ENV !== "production" ? Rp(!1, "Browser history needs a DOM") : Rp(!1));
  var t = window.history, r = Ex(), n = !Rx(), i = e, a = i.forceRefresh, o = a === void 0 ? !1 : a, s = i.getUserConfirmation, l = s === void 0 ? Dx : s, u = i.keyLength, c = u === void 0 ? 6 : u, f = e.basename ? Sx(bx(e.basename)) : "";
  function d(Z) {
    var V = Z || {}, h = V.key, v = V.state, g = window.location, b = g.pathname, A = g.search, E = g.hash, I = b + A + E;
    return process.env.NODE_ENV !== "production" && gn(!f || dy(I, f), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + I + '" to begin with "' + f + '".'), f && (I = wx(I, f)), Wn(I, v, h);
  }
  function p() {
    return Math.random().toString(36).substr(2, c);
  }
  var m = Tx();
  function S(Z) {
    Ma(ce, Z), ce.length = t.length, m.notifyListeners(ce.location, ce.action);
  }
  function w(Z) {
    Ox(Z) || T(d(Z.state));
  }
  function C() {
    T(d(Ap()));
  }
  var y = !1;
  function T(Z) {
    if (y)
      y = !1, S();
    else {
      var V = "POP";
      m.confirmTransitionTo(Z, V, l, function(h) {
        h ? S({
          action: V,
          location: Z
        }) : R(Z);
      });
    }
  }
  function R(Z) {
    var V = ce.location, h = N.indexOf(V.key);
    h === -1 && (h = 0);
    var v = N.indexOf(Z.key);
    v === -1 && (v = 0);
    var g = h - v;
    g && (y = !0, re(g));
  }
  var P = d(Ap()), N = [P.key];
  function L(Z) {
    return f + Cx(Z);
  }
  function W(Z, V) {
    process.env.NODE_ENV !== "production" && gn(!(typeof Z == "object" && Z.state !== void 0 && V !== void 0), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
    var h = "PUSH", v = Wn(Z, V, p(), ce.location);
    m.confirmTransitionTo(v, h, l, function(g) {
      if (g) {
        var b = L(v), A = v.key, E = v.state;
        if (r)
          if (t.pushState({
            key: A,
            state: E
          }, null, b), o)
            window.location.href = b;
          else {
            var I = N.indexOf(ce.location.key), H = N.slice(0, I + 1);
            H.push(v.key), N = H, S({
              action: h,
              location: v
            });
          }
        else
          process.env.NODE_ENV !== "production" && gn(E === void 0, "Browser history cannot push state in browsers that do not support HTML5 history"), window.location.href = b;
      }
    });
  }
  function Y(Z, V) {
    process.env.NODE_ENV !== "production" && gn(!(typeof Z == "object" && Z.state !== void 0 && V !== void 0), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
    var h = "REPLACE", v = Wn(Z, V, p(), ce.location);
    m.confirmTransitionTo(v, h, l, function(g) {
      if (g) {
        var b = L(v), A = v.key, E = v.state;
        if (r)
          if (t.replaceState({
            key: A,
            state: E
          }, null, b), o)
            window.location.replace(b);
          else {
            var I = N.indexOf(ce.location.key);
            I !== -1 && (N[I] = v.key), S({
              action: h,
              location: v
            });
          }
        else
          process.env.NODE_ENV !== "production" && gn(E === void 0, "Browser history cannot replace state in browsers that do not support HTML5 history"), window.location.replace(b);
      }
    });
  }
  function re(Z) {
    t.go(Z);
  }
  function z() {
    re(-1);
  }
  function Q() {
    re(1);
  }
  var se = 0;
  function X(Z) {
    se += Z, se === 1 && Z === 1 ? (window.addEventListener(Op, w), n && window.addEventListener(kp, C)) : se === 0 && (window.removeEventListener(Op, w), n && window.removeEventListener(kp, C));
  }
  var ee = !1;
  function J(Z) {
    Z === void 0 && (Z = !1);
    var V = m.setPrompt(Z);
    return ee || (X(1), ee = !0), function() {
      return ee && (ee = !1, X(-1)), V();
    };
  }
  function ue(Z) {
    var V = m.appendListener(Z);
    return X(1), function() {
      X(-1), V();
    };
  }
  var ce = {
    length: t.length,
    action: "POP",
    location: P,
    createHref: L,
    push: W,
    replace: Y,
    go: re,
    goBack: z,
    goForward: Q,
    block: J,
    listen: ue
  };
  return ce;
}
var Ax = function(e, t, r, n, i, a, o, s) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var l;
    if (t === void 0)
      l = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var u = [r, n, i, a, o, s], c = 0;
      l = new Error(
        t.replace(/%s/g, function() {
          return u[c++];
        })
      ), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, Ix = Ax;
const Un = /* @__PURE__ */ nr(Ix);
var Nx = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
};
function Mx(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ip(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Lx(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var Ja = function(e) {
  Lx(t, e);
  function t() {
    var r, n, i;
    Mx(this, t);
    for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return i = (r = (n = Ip(this, e.call.apply(e, [this].concat(o))), n), n.state = {
      match: n.computeMatch(n.props.history.location.pathname)
    }, r), Ip(n, i);
  }
  return t.prototype.getChildContext = function() {
    return {
      router: Nx({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  }, t.prototype.computeMatch = function(n) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: n === "/"
    };
  }, t.prototype.componentWillMount = function() {
    var n = this, i = this.props, a = i.children, o = i.history;
    Un(a == null || pe.Children.count(a) === 1, "A <Router> may have only one child element"), this.unlisten = o.listen(function() {
      n.setState({
        match: n.computeMatch(o.location.pathname)
      });
    });
  }, t.prototype.componentWillReceiveProps = function(n) {
    Zt(this.props.history === n.history, "You cannot change <Router history>");
  }, t.prototype.componentWillUnmount = function() {
    this.unlisten();
  }, t.prototype.render = function() {
    var n = this.props.children;
    return n ? pe.Children.only(n) : null;
  }, t;
}(pe.Component);
Ja.propTypes = {
  history: D.object.isRequired,
  children: D.node
};
Ja.contextTypes = {
  router: D.object
};
Ja.childContextTypes = {
  router: D.object.isRequired
};
const Fx = Ja;
function jx(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Np(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function qx(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var py = function(e) {
  qx(t, e);
  function t() {
    var r, n, i;
    jx(this, t);
    for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return i = (r = (n = Np(this, e.call.apply(e, [this].concat(o))), n), n.history = kx(n.props), r), Np(n, i);
  }
  return t.prototype.componentWillMount = function() {
    Zt(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  }, t.prototype.render = function() {
    return pe.createElement(Fx, { history: this.history, children: this.props.children });
  }, t;
}(pe.Component);
py.propTypes = {
  basename: D.string,
  forceRefresh: D.bool,
  getUserConfirmation: D.func,
  keyLength: D.number,
  children: D.node
};
var Wx = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
};
function Hx(e, t) {
  var r = {};
  for (var n in e)
    t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
  return r;
}
function Vx(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mp(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Bx(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var Ux = function(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}, Pr = function(e) {
  Bx(t, e);
  function t() {
    var r, n, i;
    Vx(this, t);
    for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return i = (r = (n = Mp(this, e.call.apply(e, [this].concat(o))), n), n.handleClick = function(l) {
      if (n.props.onClick && n.props.onClick(l), !l.defaultPrevented && // onClick prevented default
      l.button === 0 && // ignore everything but left clicks
      !n.props.target && // let browser handle "target=_blank" etc.
      !Ux(l)) {
        l.preventDefault();
        var u = n.context.router.history, c = n.props, f = c.replace, d = c.to;
        f ? u.replace(d) : u.push(d);
      }
    }, r), Mp(n, i);
  }
  return t.prototype.render = function() {
    var n = this.props;
    n.replace;
    var i = n.to, a = n.innerRef, o = Hx(n, ["replace", "to", "innerRef"]);
    Un(this.context.router, "You should not use <Link> outside a <Router>"), Un(i !== void 0, 'You must specify the "to" property');
    var s = this.context.router.history, l = typeof i == "string" ? Wn(i, null, null, s.location) : i, u = s.createHref(l);
    return pe.createElement("a", Wx({}, o, { onClick: this.handleClick, href: u, ref: a }));
  }, t;
}(pe.Component);
Pr.propTypes = {
  onClick: D.func,
  target: D.string,
  replace: D.bool,
  to: D.oneOfType([D.string, D.object]).isRequired,
  innerRef: D.oneOfType([D.string, D.func])
};
Pr.defaultProps = {
  replace: !1
};
Pr.contextTypes = {
  router: D.shape({
    history: D.shape({
      push: D.func.isRequired,
      replace: D.func.isRequired,
      createHref: D.func.isRequired
    }).isRequired
  }).isRequired
};
var Kn = { exports: {} }, $x = Array.isArray || function(e) {
  return Object.prototype.toString.call(e) == "[object Array]";
}, La = $x;
Kn.exports = gy;
Kn.exports.parse = df;
Kn.exports.compile = Yx;
Kn.exports.tokensToFunction = hy;
Kn.exports.tokensToRegExp = vy;
var zx = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  "(\\\\.)",
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
function df(e, t) {
  for (var r = [], n = 0, i = 0, a = "", o = t && t.delimiter || "/", s; (s = zx.exec(e)) != null; ) {
    var l = s[0], u = s[1], c = s.index;
    if (a += e.slice(i, c), i = c + l.length, u) {
      a += u[1];
      continue;
    }
    var f = e[i], d = s[2], p = s[3], m = s[4], S = s[5], w = s[6], C = s[7];
    a && (r.push(a), a = "");
    var y = d != null && f != null && f !== d, T = w === "+" || w === "*", R = w === "?" || w === "*", P = s[2] || o, N = m || S;
    r.push({
      name: p || n++,
      prefix: d || "",
      delimiter: P,
      optional: R,
      repeat: T,
      partial: y,
      asterisk: !!C,
      pattern: N ? Kx(N) : C ? ".*" : "[^" + Ea(P) + "]+?"
    });
  }
  return i < e.length && (a += e.substr(i)), a && r.push(a), r;
}
function Yx(e, t) {
  return hy(df(e, t), t);
}
function Gx(e) {
  return encodeURI(e).replace(/[\/?#]/g, function(t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function Xx(e) {
  return encodeURI(e).replace(/[?#]/g, function(t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function hy(e, t) {
  for (var r = new Array(e.length), n = 0; n < e.length; n++)
    typeof e[n] == "object" && (r[n] = new RegExp("^(?:" + e[n].pattern + ")$", hf(t)));
  return function(i, a) {
    for (var o = "", s = i || {}, l = a || {}, u = l.pretty ? Gx : encodeURIComponent, c = 0; c < e.length; c++) {
      var f = e[c];
      if (typeof f == "string") {
        o += f;
        continue;
      }
      var d = s[f.name], p;
      if (d == null)
        if (f.optional) {
          f.partial && (o += f.prefix);
          continue;
        } else
          throw new TypeError('Expected "' + f.name + '" to be defined');
      if (La(d)) {
        if (!f.repeat)
          throw new TypeError('Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
        if (d.length === 0) {
          if (f.optional)
            continue;
          throw new TypeError('Expected "' + f.name + '" to not be empty');
        }
        for (var m = 0; m < d.length; m++) {
          if (p = u(d[m]), !r[c].test(p))
            throw new TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '", but received `' + JSON.stringify(p) + "`");
          o += (m === 0 ? f.prefix : f.delimiter) + p;
        }
        continue;
      }
      if (p = f.asterisk ? Xx(d) : u(d), !r[c].test(p))
        throw new TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + p + '"');
      o += f.prefix + p;
    }
    return o;
  };
}
function Ea(e) {
  return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function Kx(e) {
  return e.replace(/([=!:$\/()])/g, "\\$1");
}
function pf(e, t) {
  return e.keys = t, e;
}
function hf(e) {
  return e && e.sensitive ? "" : "i";
}
function Jx(e, t) {
  var r = e.source.match(/\((?!\?)/g);
  if (r)
    for (var n = 0; n < r.length; n++)
      t.push({
        name: n,
        prefix: null,
        delimiter: null,
        optional: !1,
        repeat: !1,
        partial: !1,
        asterisk: !1,
        pattern: null
      });
  return pf(e, t);
}
function Zx(e, t, r) {
  for (var n = [], i = 0; i < e.length; i++)
    n.push(gy(e[i], t, r).source);
  var a = new RegExp("(?:" + n.join("|") + ")", hf(r));
  return pf(a, t);
}
function Qx(e, t, r) {
  return vy(df(e, r), t, r);
}
function vy(e, t, r) {
  La(t) || (r = /** @type {!Object} */
  t || r, t = []), r = r || {};
  for (var n = r.strict, i = r.end !== !1, a = "", o = 0; o < e.length; o++) {
    var s = e[o];
    if (typeof s == "string")
      a += Ea(s);
    else {
      var l = Ea(s.prefix), u = "(?:" + s.pattern + ")";
      t.push(s), s.repeat && (u += "(?:" + l + u + ")*"), s.optional ? s.partial ? u = l + "(" + u + ")?" : u = "(?:" + l + "(" + u + "))?" : u = l + "(" + u + ")", a += u;
    }
  }
  var c = Ea(r.delimiter || "/"), f = a.slice(-c.length) === c;
  return n || (a = (f ? a.slice(0, -c.length) : a) + "(?:" + c + "(?=$))?"), i ? a += "$" : a += n && f ? "" : "(?=" + c + "|$)", pf(new RegExp("^" + a, hf(r)), t);
}
function gy(e, t, r) {
  return La(t) || (r = /** @type {!Object} */
  t || r, t = []), r = r || {}, e instanceof RegExp ? Jx(
    e,
    /** @type {!Array} */
    t
  ) : La(e) ? Zx(
    /** @type {!Array} */
    e,
    /** @type {!Array} */
    t,
    r
  ) : Qx(
    /** @type {string} */
    e,
    /** @type {!Array} */
    t,
    r
  );
}
var eC = Kn.exports;
const my = /* @__PURE__ */ nr(eC);
var Lp = {}, tC = 1e4, Fp = 0, rC = function(t, r) {
  var n = "" + r.end + r.strict + r.sensitive, i = Lp[n] || (Lp[n] = {});
  if (i[t])
    return i[t];
  var a = [], o = my(t, a, r), s = { re: o, keys: a };
  return Fp < tC && (i[t] = s, Fp++), s;
}, yy = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments[2];
  typeof r == "string" && (r = { path: r });
  var i = r, a = i.path, o = i.exact, s = o === void 0 ? !1 : o, l = i.strict, u = l === void 0 ? !1 : l, c = i.sensitive, f = c === void 0 ? !1 : c;
  if (a == null)
    return n;
  var d = rC(a, { end: s, strict: u, sensitive: f }), p = d.re, m = d.keys, S = p.exec(t);
  if (!S)
    return null;
  var w = S[0], C = S.slice(1), y = t === w;
  return s && !y ? null : {
    path: a,
    // the path pattern used to match
    url: a === "/" && w === "" ? "/" : w,
    // the matched portion of the URL
    isExact: y,
    // whether or not we matched exactly
    params: m.reduce(function(T, R, P) {
      return T[R.name] = C[P], T;
    }, {})
  };
}, nC = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
};
function iC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jp(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function aC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var as = function(t) {
  return pe.Children.count(t) === 0;
}, en = function(e) {
  aC(t, e);
  function t() {
    var r, n, i;
    iC(this, t);
    for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return i = (r = (n = jp(this, e.call.apply(e, [this].concat(o))), n), n.state = {
      match: n.computeMatch(n.props, n.context.router)
    }, r), jp(n, i);
  }
  return t.prototype.getChildContext = function() {
    return {
      router: nC({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  }, t.prototype.computeMatch = function(n, i) {
    var a = n.computedMatch, o = n.location, s = n.path, l = n.strict, u = n.exact, c = n.sensitive;
    if (a)
      return a;
    Un(i, "You should not use <Route> or withRouter() outside a <Router>");
    var f = i.route, d = (o || f.location).pathname;
    return yy(d, { path: s, strict: l, exact: u, sensitive: c }, f.match);
  }, t.prototype.componentWillMount = function() {
    Zt(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"), Zt(!(this.props.component && this.props.children && !as(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"), Zt(!(this.props.render && this.props.children && !as(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  }, t.prototype.componentWillReceiveProps = function(n, i) {
    Zt(!(n.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'), Zt(!(!n.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'), this.setState({
      match: this.computeMatch(n, i.router)
    });
  }, t.prototype.render = function() {
    var n = this.state.match, i = this.props, a = i.children, o = i.component, s = i.render, l = this.context.router, u = l.history, c = l.route, f = l.staticContext, d = this.props.location || c.location, p = { match: n, location: d, history: u, staticContext: f };
    return o ? n ? pe.createElement(o, p) : null : s ? n ? s(p) : null : typeof a == "function" ? a(p) : a && !as(a) ? pe.Children.only(a) : null;
  }, t;
}(pe.Component);
en.propTypes = {
  computedMatch: D.object,
  // private, from <Switch>
  path: D.string,
  exact: D.bool,
  strict: D.bool,
  sensitive: D.bool,
  component: D.func,
  render: D.func,
  children: D.oneOfType([D.func, D.node]),
  location: D.object
};
en.contextTypes = {
  router: D.shape({
    history: D.object.isRequired,
    route: D.object.isRequired,
    staticContext: D.object
  })
};
en.childContextTypes = {
  router: D.object.isRequired
};
var qp = {}, oC = 1e4, Wp = 0, sC = function(t) {
  var r = t, n = qp[r] || (qp[r] = {});
  if (n[t])
    return n[t];
  var i = my.compile(t);
  return Wp < oC && (n[t] = i, Wp++), i;
}, Hp = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "/", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t === "/")
    return t;
  var n = sC(t);
  return n(r, { pretty: !0 });
}, lC = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
};
function uC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cC(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function fC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var Si = function(e) {
  fC(t, e);
  function t() {
    return uC(this, t), cC(this, e.apply(this, arguments));
  }
  return t.prototype.isStatic = function() {
    return this.context.router && this.context.router.staticContext;
  }, t.prototype.componentWillMount = function() {
    Un(this.context.router, "You should not use <Redirect> outside a <Router>"), this.isStatic() && this.perform();
  }, t.prototype.componentDidMount = function() {
    this.isStatic() || this.perform();
  }, t.prototype.componentDidUpdate = function(n) {
    var i = Wn(n.to), a = Wn(this.props.to);
    if (_x(i, a)) {
      Zt(!1, "You tried to redirect to the same route you're currently on: " + ('"' + a.pathname + a.search + '"'));
      return;
    }
    this.perform();
  }, t.prototype.computeTo = function(n) {
    var i = n.computedMatch, a = n.to;
    return i ? typeof a == "string" ? Hp(a, i.params) : lC({}, a, {
      pathname: Hp(a.pathname, i.params)
    }) : a;
  }, t.prototype.perform = function() {
    var n = this.context.router.history, i = this.props.push, a = this.computeTo(this.props);
    i ? n.push(a) : n.replace(a);
  }, t.prototype.render = function() {
    return null;
  }, t;
}(pe.Component);
Si.propTypes = {
  computedMatch: D.object,
  // private, from <Switch>
  push: D.bool,
  from: D.string,
  to: D.oneOfType([D.string, D.object]).isRequired
};
Si.defaultProps = {
  push: !1
};
Si.contextTypes = {
  router: D.shape({
    history: D.shape({
      push: D.func.isRequired,
      replace: D.func.isRequired
    }).isRequired,
    staticContext: D.object
  }).isRequired
};
function dC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pC(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function hC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var Fa = function(e) {
  hC(t, e);
  function t() {
    return dC(this, t), pC(this, e.apply(this, arguments));
  }
  return t.prototype.componentWillMount = function() {
    Un(this.context.router, "You should not use <Switch> outside a <Router>");
  }, t.prototype.componentWillReceiveProps = function(n) {
    Zt(!(n.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'), Zt(!(!n.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  }, t.prototype.render = function() {
    var n = this.context.router.route, i = this.props.children, a = this.props.location || n.location, o = void 0, s = void 0;
    return pe.Children.forEach(i, function(l) {
      if (o == null && pe.isValidElement(l)) {
        var u = l.props, c = u.path, f = u.exact, d = u.strict, p = u.sensitive, m = u.from, S = c || m;
        s = l, o = yy(a.pathname, { path: S, exact: f, strict: d, sensitive: p }, n.match);
      }
    }), o ? pe.cloneElement(s, { location: a, computedMatch: o }) : null;
  }, t;
}(pe.Component);
Fa.contextTypes = {
  router: D.shape({
    route: D.object.isRequired
  }).isRequired
};
Fa.propTypes = {
  children: D.node,
  location: D.object
};
var vC = {
  childContextTypes: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, gC = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, mC = Object.defineProperty, yC = Object.getOwnPropertyNames, Vp = Object.getOwnPropertySymbols, bC = Object.getOwnPropertyDescriptor, Pc = Object.getPrototypeOf, Bp = Pc && Pc(Object);
function by(e, t, r) {
  if (typeof t != "string") {
    if (Bp) {
      var n = Pc(t);
      n && n !== Bp && by(e, n, r);
    }
    var i = yC(t);
    Vp && (i = i.concat(Vp(t)));
    for (var a = 0; a < i.length; ++a) {
      var o = i[a];
      if (!vC[o] && !gC[o] && (!r || !r[o])) {
        var s = bC(t, o);
        try {
          mC(e, o, s);
        } catch {
        }
      }
    }
    return e;
  }
  return e;
}
var wC = by;
const SC = /* @__PURE__ */ nr(wC);
var xC = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
};
function CC(e, t) {
  var r = {};
  for (var n in e)
    t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
  return r;
}
var wy = function(t) {
  var r = function(i) {
    var a = i.wrappedComponentRef, o = CC(i, ["wrappedComponentRef"]);
    return pe.createElement(en, {
      children: function(l) {
        return pe.createElement(t, xC({}, o, l, {
          ref: a
        }));
      }
    });
  };
  return r.displayName = "withRouter(" + (t.displayName || t.name) + ")", r.WrappedComponent = t, r.propTypes = {
    wrappedComponentRef: D.func
  }, SC(r, t);
};
/*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*
* @Author  Almsaeed Studio
* @Support <https://www.almsaeedstudio.com>
* @Email   <abdullah@almsaeedstudio.com>
* @version 2.4.5
* @repository git://github.com/almasaeed2010/AdminLTE.git
* @license MIT <http://opensource.org/licenses/MIT>
*/
if (typeof Re > "u")
  throw new Error("AdminLTE requires jQuery");
+function(e) {
  var t = "lte.boxrefresh", r = {
    source: "",
    params: {},
    trigger: ".refresh-btn",
    content: ".box-body",
    loadInContent: !0,
    responseType: "",
    overlayTemplate: '<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>',
    onLoadStart: function() {
    },
    onLoadDone: function(s) {
      return s;
    }
  }, n = {
    data: '[data-widget="box-refresh"]'
  }, i = function(s, l) {
    if (this.element = s, this.options = l, this.$overlay = e(l.overlay), l.source === "")
      throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");
    this._setUpListeners(), this.load();
  };
  i.prototype.load = function() {
    this._addOverlay(), this.options.onLoadStart.call(e(this)), e.get(this.options.source, this.options.params, (function(s) {
      this.options.loadInContent && e(this.options.content).html(s), this.options.onLoadDone.call(e(this), s), this._removeOverlay();
    }).bind(this), this.options.responseType !== "" && this.options.responseType);
  }, i.prototype._setUpListeners = function() {
    e(this.element).on("click", n.trigger, (function(s) {
      s && s.preventDefault(), this.load();
    }).bind(this));
  }, i.prototype._addOverlay = function() {
    e(this.element).append(this.$overlay);
  }, i.prototype._removeOverlay = function() {
    e(this.element).remove(this.$overlay);
  };
  function a(s) {
    return this.each(function() {
      var l = e(this), u = l.data(t);
      if (!u) {
        var c = e.extend({}, r, l.data(), typeof s == "object" && s);
        l.data(t, u = new i(l, c));
      }
      if (typeof u == "string") {
        if (typeof u[s] > "u")
          throw new Error("No method named " + s);
        u[s]();
      }
    });
  }
  var o = e.fn.boxRefresh;
  e.fn.boxRefresh = a, e.fn.boxRefresh.Constructor = i, e.fn.boxRefresh.noConflict = function() {
    return e.fn.boxRefresh = o, this;
  }, e(window).on("load", function() {
    e(n.data).each(function() {
      a.call(e(this));
    });
  });
}(Re);
+function(e) {
  var t = "lte.controlsidebar", r = {
    slide: !0
  }, n = {
    sidebar: ".control-sidebar",
    data: '[data-toggle="control-sidebar"]',
    open: ".control-sidebar-open",
    bg: ".control-sidebar-bg",
    wrapper: ".wrapper",
    content: ".content-wrapper",
    boxed: ".layout-boxed"
  }, i = {
    open: "control-sidebar-open",
    fixed: "fixed"
  }, a = {
    collapsed: "collapsed.controlsidebar",
    expanded: "expanded.controlsidebar"
  }, o = function(u, c) {
    this.element = u, this.options = c, this.hasBindedResize = !1, this.init();
  };
  o.prototype.init = function() {
    e(this.element).is(n.data) || e(this).on("click", this.toggle), this.fix(), e(window).resize((function() {
      this.fix();
    }).bind(this));
  }, o.prototype.toggle = function(u) {
    u && u.preventDefault(), this.fix(), !e(n.sidebar).is(n.open) && !e("body").is(n.open) ? this.expand() : this.collapse();
  }, o.prototype.expand = function() {
    this.options.slide ? e(n.sidebar).addClass(i.open) : e("body").addClass(i.open), e(this.element).trigger(e.Event(a.expanded));
  }, o.prototype.collapse = function() {
    e("body, " + n.sidebar).removeClass(i.open), e(this.element).trigger(e.Event(a.collapsed));
  }, o.prototype.fix = function() {
    e("body").is(n.boxed) && this._fixForBoxed(e(n.bg));
  }, o.prototype._fixForBoxed = function(u) {
    u.css({
      position: "absolute",
      height: e(n.wrapper).height()
    });
  };
  function s(u) {
    return this.each(function() {
      var c = e(this), f = c.data(t);
      if (!f) {
        var d = e.extend({}, r, c.data(), typeof u == "object" && u);
        c.data(t, f = new o(c, d));
      }
      typeof u == "string" && f.toggle();
    });
  }
  var l = e.fn.controlSidebar;
  e.fn.controlSidebar = s, e.fn.controlSidebar.Constructor = o, e.fn.controlSidebar.noConflict = function() {
    return e.fn.controlSidebar = l, this;
  }, e(document).on("click", n.data, function(u) {
    u && u.preventDefault(), s.call(e(this), "toggle");
  });
}(Re);
+function(e) {
  var t = "lte.directchat", r = {
    data: '[data-widget="chat-pane-toggle"]',
    box: ".direct-chat"
  }, n = {
    open: "direct-chat-contacts-open"
  }, i = function(s) {
    this.element = s;
  };
  i.prototype.toggle = function(s) {
    s.parents(r.box).first().toggleClass(n.open);
  };
  function a(s) {
    return this.each(function() {
      var l = e(this), u = l.data(t);
      u || l.data(t, u = new i(l)), typeof s == "string" && u.toggle(l);
    });
  }
  var o = e.fn.directChat;
  e.fn.directChat = a, e.fn.directChat.Constructor = i, e.fn.directChat.noConflict = function() {
    return e.fn.directChat = o, this;
  }, e(document).on("click", r.data, function(s) {
    s && s.preventDefault(), a.call(e(this), "toggle");
  });
}(Re);
+function(e) {
  var t = "lte.layout", r = {
    slimscroll: !0,
    resetHeight: !0
  }, n = {
    wrapper: ".wrapper",
    contentWrapper: ".content-wrapper",
    layoutBoxed: ".layout-boxed",
    mainFooter: ".main-footer",
    mainHeader: ".main-header",
    sidebar: ".sidebar",
    controlSidebar: ".control-sidebar",
    fixed: ".fixed",
    sidebarMenu: ".sidebar-menu",
    logo: ".main-header .logo"
  }, i = {
    fixed: "fixed",
    holdTransition: "hold-transition"
  }, a = function(l) {
    this.options = l, this.bindedResize = !1, this.activate();
  };
  a.prototype.activate = function() {
    this.fix(), this.fixSidebar(), e("body").removeClass(i.holdTransition), this.options.resetHeight && e("body, html, " + n.wrapper).css({
      height: "auto",
      "min-height": "100%"
    }), this.bindedResize || (e(window).resize((function() {
      this.fix(), this.fixSidebar(), e(n.logo + ", " + n.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", (function() {
        this.fix(), this.fixSidebar();
      }).bind(this));
    }).bind(this)), this.bindedResize = !0), e(n.sidebarMenu).on("expanded.tree", (function() {
      this.fix(), this.fixSidebar();
    }).bind(this)), e(n.sidebarMenu).on("collapsed.tree", (function() {
      this.fix(), this.fixSidebar();
    }).bind(this));
  }, a.prototype.fix = function() {
    e(n.layoutBoxed + " > " + n.wrapper).css("overflow", "hidden");
    var l = e(n.mainFooter).outerHeight() || 0, u = e(n.mainHeader).outerHeight() || 0, c = u + l, f = e(window).height(), d = e(n.sidebar).height() || 0;
    if (e("body").hasClass(i.fixed))
      e(n.contentWrapper).css("min-height", f - l);
    else {
      var p;
      f >= d ? (e(n.contentWrapper).css("min-height", f - c), p = f - c) : (e(n.contentWrapper).css("min-height", d), p = d);
      var m = e(n.controlSidebar);
      typeof m < "u" && m.height() > p && e(n.contentWrapper).css("min-height", m.height());
    }
  }, a.prototype.fixSidebar = function() {
    if (!e("body").hasClass(i.fixed)) {
      typeof e.fn.slimScroll < "u" && e(n.sidebar).slimScroll({ destroy: !0 }).height("auto");
      return;
    }
    this.options.slimscroll && typeof e.fn.slimScroll < "u" && e(n.sidebar).slimScroll({
      height: e(window).height() - e(n.mainHeader).height() + "px"
    });
  };
  function o(l) {
    return this.each(function() {
      var u = e(this), c = u.data(t);
      if (!c) {
        var f = e.extend({}, r, u.data(), typeof l == "object" && l);
        u.data(t, c = new a(f));
      }
      if (typeof l == "string") {
        if (typeof c[l] > "u")
          throw new Error("No method named " + l);
        c[l]();
      }
    });
  }
  var s = e.fn.layout;
  e.fn.layout = o, e.fn.layout.Constructor = a, e.fn.layout.noConflict = function() {
    return e.fn.layout = s, this;
  };
}(Re);
+function(e) {
  var t = "lte.pushmenu", r = {
    collapseScreenSize: 767,
    expandOnHover: !1,
    expandTransitionDelay: 200
  }, n = {
    collapsed: ".sidebar-collapse",
    open: ".sidebar-open",
    mainSidebar: ".main-sidebar",
    contentWrapper: ".content-wrapper",
    searchInput: ".sidebar-form .form-control",
    button: '[data-toggle="push-menu"]',
    mini: ".sidebar-mini",
    expanded: ".sidebar-expanded-on-hover",
    layoutFixed: ".fixed"
  }, i = {
    collapsed: "sidebar-collapse",
    open: "sidebar-open",
    mini: "sidebar-mini",
    expanded: "sidebar-expanded-on-hover",
    expandFeature: "sidebar-mini-expand-feature",
    layoutFixed: "fixed"
  }, a = {
    expanded: "expanded.pushMenu",
    collapsed: "collapsed.pushMenu"
  }, o = function(u) {
    this.options = u, this.init();
  };
  o.prototype.init = function() {
    (this.options.expandOnHover || e("body").is(n.mini + n.layoutFixed)) && (this.expandOnHover(), e("body").addClass(i.expandFeature)), e(n.contentWrapper).click((function() {
      e(window).width() <= this.options.collapseScreenSize && e("body").hasClass(i.open) && this.close();
    }).bind(this)), e(n.searchInput).click(function(u) {
      u.stopPropagation();
    });
  }, o.prototype.toggle = function() {
    var u = e(window).width(), c = !e("body").hasClass(i.collapsed);
    u <= this.options.collapseScreenSize && (c = e("body").hasClass(i.open)), c ? this.close() : this.open();
  }, o.prototype.open = function() {
    var u = e(window).width();
    u > this.options.collapseScreenSize ? e("body").removeClass(i.collapsed).trigger(e.Event(a.expanded)) : e("body").addClass(i.open).trigger(e.Event(a.expanded));
  }, o.prototype.close = function() {
    var u = e(window).width();
    u > this.options.collapseScreenSize ? e("body").addClass(i.collapsed).trigger(e.Event(a.collapsed)) : e("body").removeClass(i.open + " " + i.collapsed).trigger(e.Event(a.collapsed));
  }, o.prototype.expandOnHover = function() {
    e(n.mainSidebar).hover((function() {
      e("body").is(n.mini + n.collapsed) && e(window).width() > this.options.collapseScreenSize && this.expand();
    }).bind(this), (function() {
      e("body").is(n.expanded) && this.collapse();
    }).bind(this));
  }, o.prototype.expand = function() {
    setTimeout(function() {
      e("body").removeClass(i.collapsed).addClass(i.expanded);
    }, this.options.expandTransitionDelay);
  }, o.prototype.collapse = function() {
    setTimeout(function() {
      e("body").removeClass(i.expanded).addClass(i.collapsed);
    }, this.options.expandTransitionDelay);
  };
  function s(u) {
    return this.each(function() {
      var c = e(this), f = c.data(t);
      if (!f) {
        var d = e.extend({}, r, c.data(), typeof u == "object" && u);
        c.data(t, f = new o(d));
      }
      u === "toggle" && f.toggle();
    });
  }
  var l = e.fn.pushMenu;
  e.fn.pushMenu = s, e.fn.pushMenu.Constructor = o, e.fn.pushMenu.noConflict = function() {
    return e.fn.pushMenu = l, this;
  }, e(document).on("click", n.button, function(u) {
    u.preventDefault(), s.call(e(this), "toggle");
  }), e(window).on("load", function() {
    s.call(e(n.button));
  });
}(Re);
+function(e) {
  var t = "lte.todolist", r = {
    onCheck: function(l) {
      return l;
    },
    onUnCheck: function(l) {
      return l;
    }
  }, n = {
    data: '[data-widget="todo-list"]'
  }, i = {
    done: "done"
  }, a = function(l, u) {
    this.element = l, this.options = u, this._setUpListeners();
  };
  a.prototype.toggle = function(l) {
    if (l.parents(n.li).first().toggleClass(i.done), !l.prop("checked")) {
      this.unCheck(l);
      return;
    }
    this.check(l);
  }, a.prototype.check = function(l) {
    this.options.onCheck.call(l);
  }, a.prototype.unCheck = function(l) {
    this.options.onUnCheck.call(l);
  }, a.prototype._setUpListeners = function() {
    var l = this;
    e(this.element).on("change ifChanged", "input:checkbox", function() {
      l.toggle(e(this));
    });
  };
  function o(l) {
    return this.each(function() {
      var u = e(this), c = u.data(t);
      if (!c) {
        var f = e.extend({}, r, u.data(), typeof l == "object" && l);
        u.data(t, c = new a(u, f));
      }
      if (typeof c == "string") {
        if (typeof c[l] > "u")
          throw new Error("No method named " + l);
        c[l]();
      }
    });
  }
  var s = e.fn.todoList;
  e.fn.todoList = o, e.fn.todoList.Constructor = a, e.fn.todoList.noConflict = function() {
    return e.fn.todoList = s, this;
  }, e(window).on("load", function() {
    e(n.data).each(function() {
      o.call(e(this));
    });
  });
}(Re);
+function(e) {
  var t = "lte.tree", r = {
    animationSpeed: 500,
    accordion: !0,
    followLink: !0,
    trigger: ".treeview a"
  }, n = {
    tree: ".tree",
    treeview: ".treeview",
    treeviewMenu: ".treeview-menu",
    open: ".menu-open, .active",
    li: "li",
    data: '[data-widget="tree"]',
    active: ".active"
  }, i = {
    open: "menu-open",
    tree: "tree"
  }, a = {
    collapsed: "collapsed.tree",
    expanded: "expanded.tree"
  }, o = function(u, c) {
    this.element = u, this.options = c, e(this.element).addClass(i.tree), e(n.treeview + n.active, this.element).addClass(i.open), this._setUpListeners();
  };
  o.prototype.toggle = function(u, c) {
    var f = u.next(n.treeviewMenu), d = u.parent(), p = d.hasClass(i.open);
    d.is(n.treeview) && ((!this.options.followLink || u.attr("href") === "#" || c.target.tagName === "I") && c.preventDefault(), p ? (!this.options.followLink || u.attr("href") === "#" || c.target.tagName === "I") && this.collapse(f, d) : this.expand(f, d));
  }, o.prototype.expand = function(u, c) {
    var f = e.Event(a.expanded);
    if (this.options.accordion) {
      var d = c.siblings(n.open), p = d.children(n.treeviewMenu);
      this.collapse(p, d);
    }
    c.addClass(i.open), u.slideDown(this.options.animationSpeed, (function() {
      e(this.element).trigger(f);
    }).bind(this));
  }, o.prototype.collapse = function(u, c) {
    var f = e.Event(a.collapsed);
    c.removeClass(i.open), u.slideUp(this.options.animationSpeed, (function() {
      e(this.element).trigger(f);
    }).bind(this));
  }, o.prototype._setUpListeners = function() {
    var u = this;
    e(this.element).on("click", this.options.trigger, function(c) {
      u.toggle(e(this), c);
    });
  };
  function s(u) {
    return this.each(function() {
      var c = e(this), f = c.data(t);
      if (!f) {
        var d = e.extend({}, r, c.data(), typeof u == "object" && u);
        c.data(t, new o(c, d));
      }
    });
  }
  var l = e.fn.tree;
  e.fn.tree = s, e.fn.tree.Constructor = o, e.fn.tree.noConflict = function() {
    return e.fn.tree = l, this;
  }, e(window).on("load", function() {
    e(n.data).each(function() {
      s.call(e(this));
    });
  });
}(Re);
(function(e, t, r) {
  (function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : Re && !Re.fn.sparkline && n(Re);
  })(function(n) {
    var i = {}, a, o, s, l, u, c, f, d, p, m, S, w, C, y, T, R, P, N, L, W, Y, re, z, Q, se, X, ee, J, ue, ce, Z, V = 0;
    a = function() {
      return {
        // Settings common to most/all chart types
        common: {
          type: "line",
          lineColor: "#00f",
          fillColor: "#cdf",
          defaultPixelsPerValue: 3,
          width: "auto",
          height: "auto",
          composite: !1,
          tagValuesAttribute: "values",
          tagOptionsPrefix: "spark",
          enableTagOptions: !1,
          enableHighlight: !0,
          highlightLighten: 1.4,
          tooltipSkipNull: !0,
          tooltipPrefix: "",
          tooltipSuffix: "",
          disableHiddenCheck: !1,
          numberFormatter: !1,
          numberDigitGroupCount: 3,
          numberDigitGroupSep: ",",
          numberDecimalMark: ".",
          disableTooltips: !1,
          disableInteraction: !1
        },
        // Defaults for line charts
        line: {
          spotColor: "#f80",
          highlightSpotColor: "#5f5",
          highlightLineColor: "#f22",
          spotRadius: 1.5,
          minSpotColor: "#f80",
          maxSpotColor: "#f80",
          lineWidth: 1,
          normalRangeMin: r,
          normalRangeMax: r,
          normalRangeColor: "#ccc",
          drawNormalOnTop: !1,
          chartRangeMin: r,
          chartRangeMax: r,
          chartRangeMinX: r,
          chartRangeMaxX: r,
          tooltipFormat: new s('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
        },
        // Defaults for bar charts
        bar: {
          barColor: "#3366cc",
          negBarColor: "#f44",
          stackedBarColor: [
            "#3366cc",
            "#dc3912",
            "#ff9900",
            "#109618",
            "#66aa00",
            "#dd4477",
            "#0099c6",
            "#990099"
          ],
          zeroColor: r,
          nullColor: r,
          zeroAxis: !0,
          barWidth: 4,
          barSpacing: 1,
          chartRangeMax: r,
          chartRangeMin: r,
          chartRangeClip: !1,
          colorMap: r,
          tooltipFormat: new s('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
        },
        // Defaults for tristate charts
        tristate: {
          barWidth: 4,
          barSpacing: 1,
          posBarColor: "#6f6",
          negBarColor: "#f44",
          zeroBarColor: "#999",
          colorMap: {},
          tooltipFormat: new s('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
          tooltipValueLookups: { map: { "-1": "Loss", 0: "Draw", 1: "Win" } }
        },
        // Defaults for discrete charts
        discrete: {
          lineHeight: "auto",
          thresholdColor: r,
          thresholdValue: 0,
          chartRangeMax: r,
          chartRangeMin: r,
          chartRangeClip: !1,
          tooltipFormat: new s("{{prefix}}{{value}}{{suffix}}")
        },
        // Defaults for bullet charts
        bullet: {
          targetColor: "#f33",
          targetWidth: 3,
          // width of the target bar in pixels
          performanceColor: "#33f",
          rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
          base: r,
          // set this to a number to change the base start number
          tooltipFormat: new s("{{fieldkey:fields}} - {{value}}"),
          tooltipValueLookups: { fields: { r: "Range", p: "Performance", t: "Target" } }
        },
        // Defaults for pie charts
        pie: {
          offset: 0,
          sliceColors: [
            "#3366cc",
            "#dc3912",
            "#ff9900",
            "#109618",
            "#66aa00",
            "#dd4477",
            "#0099c6",
            "#990099"
          ],
          borderWidth: 0,
          borderColor: "#000",
          tooltipFormat: new s('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
        },
        // Defaults for box plots
        box: {
          raw: !1,
          boxLineColor: "#000",
          boxFillColor: "#cdf",
          whiskerColor: "#000",
          outlierLineColor: "#333",
          outlierFillColor: "#fff",
          medianColor: "#f00",
          showOutliers: !0,
          outlierIQR: 1.5,
          spotRadius: 1.5,
          target: r,
          targetColor: "#4a2",
          chartRangeMax: r,
          chartRangeMin: r,
          tooltipFormat: new s("{{field:fields}}: {{value}}"),
          tooltipFormatFieldlistKey: "field",
          tooltipValueLookups: { fields: {
            lq: "Lower Quartile",
            med: "Median",
            uq: "Upper Quartile",
            lo: "Left Outlier",
            ro: "Right Outlier",
            lw: "Left Whisker",
            rw: "Right Whisker"
          } }
        }
      };
    }, se = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', o = function() {
      var h, v;
      return h = function() {
        this.init.apply(this, arguments);
      }, arguments.length > 1 ? (arguments[0] ? (h.prototype = n.extend(new arguments[0](), arguments[arguments.length - 1]), h._super = arguments[0].prototype) : h.prototype = arguments[arguments.length - 1], arguments.length > 2 && (v = Array.prototype.slice.call(arguments, 1, -1), v.unshift(h.prototype), n.extend.apply(n, v))) : h.prototype = arguments[0], h.prototype.cls = h, h;
    }, n.SPFormatClass = s = o({
      fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
      precre: /(\w+)\.(\d+)/,
      init: function(h, v) {
        this.format = h, this.fclass = v;
      },
      render: function(h, v, g) {
        var b = this, A = h, E, I, H, q, K;
        return this.format.replace(this.fre, function() {
          var ae;
          return I = arguments[1], H = arguments[3], E = b.precre.exec(I), E ? (K = E[2], I = E[1]) : K = !1, q = A[I], q === r ? "" : H && v && v[H] ? (ae = v[H], ae.get ? v[H].get(q) || q : v[H][q] || q) : (p(q) && (g.get("numberFormatter") ? q = g.get("numberFormatter")(q) : q = C(
            q,
            K,
            g.get("numberDigitGroupCount"),
            g.get("numberDigitGroupSep"),
            g.get("numberDecimalMark")
          )), q);
        });
      }
    }), n.spformat = function(h, v) {
      return new s(h, v);
    }, l = function(h, v, g) {
      return h < v ? v : h > g ? g : h;
    }, u = function(h, v) {
      var g;
      return v === 2 ? (g = t.floor(h.length / 2), h.length % 2 ? h[g] : (h[g - 1] + h[g]) / 2) : h.length % 2 ? (g = (h.length * v + v) / 4, g % 1 ? (h[t.floor(g)] + h[t.floor(g) - 1]) / 2 : h[g - 1]) : (g = (h.length * v + 2) / 4, g % 1 ? (h[t.floor(g)] + h[t.floor(g) - 1]) / 2 : h[g - 1]);
    }, c = function(h) {
      var v;
      switch (h) {
        case "undefined":
          h = r;
          break;
        case "null":
          h = null;
          break;
        case "true":
          h = !0;
          break;
        case "false":
          h = !1;
          break;
        default:
          v = parseFloat(h), h == v && (h = v);
      }
      return h;
    }, f = function(h) {
      var v, g = [];
      for (v = h.length; v--; )
        g[v] = c(h[v]);
      return g;
    }, d = function(h, v) {
      var g, b, A = [];
      for (g = 0, b = h.length; g < b; g++)
        h[g] !== v && A.push(h[g]);
      return A;
    }, p = function(h) {
      return !isNaN(parseFloat(h)) && isFinite(h);
    }, C = function(h, v, g, b, A) {
      var E, I;
      for (h = (v === !1 ? parseFloat(h).toString() : h.toFixed(v)).split(""), E = (E = n.inArray(".", h)) < 0 ? h.length : E, E < h.length && (h[E] = A), I = E - g; I > 0; I -= g)
        h.splice(I, 0, b);
      return h.join("");
    }, m = function(h, v, g) {
      var b;
      for (b = v.length; b--; )
        if (!(g && v[b] === null) && v[b] !== h)
          return !1;
      return !0;
    }, w = function(h) {
      return n.isArray(h) ? h : [h];
    }, S = function(h) {
      var v, g;
      if (e.createStyleSheet)
        try {
          e.createStyleSheet().cssText = h;
          return;
        } catch {
          g = !0;
        }
      v = e.createElement("style"), v.type = "text/css", e.getElementsByTagName("head")[0].appendChild(v), g ? e.styleSheets[e.styleSheets.length - 1].cssText = h : v[typeof e.body.style.WebkitAppearance == "string" ? "innerText" : "innerHTML"] = h;
    }, n.fn.simpledraw = function(h, v, g, b) {
      var A, E;
      if (g && (A = this.data("_jqs_vcanvas")))
        return A;
      if (n.fn.sparkline.canvas === !1)
        return !1;
      if (n.fn.sparkline.canvas === r) {
        var I = e.createElement("canvas");
        if (I.getContext && I.getContext("2d"))
          n.fn.sparkline.canvas = function(H, q, K, ae) {
            return new ue(H, q, K, ae);
          };
        else if (e.namespaces && !e.namespaces.v)
          e.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), n.fn.sparkline.canvas = function(H, q, K, ae) {
            return new ce(H, q, K);
          };
        else
          return n.fn.sparkline.canvas = !1, !1;
      }
      return h === r && (h = n(this).innerWidth()), v === r && (v = n(this).innerHeight()), A = n.fn.sparkline.canvas(h, v, this, b), E = n(this).data("_jqs_mhandler"), E && E.registerCanvas(A), A;
    }, n.fn.cleardraw = function() {
      var h = this.data("_jqs_vcanvas");
      h && h.reset();
    }, n.RangeMapClass = y = o({
      init: function(h) {
        var v, g, b = [];
        for (v in h)
          h.hasOwnProperty(v) && typeof v == "string" && v.indexOf(":") > -1 && (g = v.split(":"), g[0] = g[0].length === 0 ? -1 / 0 : parseFloat(g[0]), g[1] = g[1].length === 0 ? 1 / 0 : parseFloat(g[1]), g[2] = h[v], b.push(g));
        this.map = h, this.rangelist = b || !1;
      },
      get: function(h) {
        var v = this.rangelist, g, b, A;
        if ((A = this.map[h]) !== r)
          return A;
        if (v) {
          for (g = v.length; g--; )
            if (b = v[g], b[0] <= h && b[1] >= h)
              return b[2];
        }
        return r;
      }
    }), n.range_map = function(h) {
      return new y(h);
    }, T = o({
      init: function(h, v) {
        var g = n(h);
        this.$el = g, this.options = v, this.currentPageX = 0, this.currentPageY = 0, this.el = h, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !v.get("disableTooltips"), this.highlightEnabled = !v.get("disableHighlight");
      },
      registerSparkline: function(h) {
        this.splist.push(h), this.over && this.updateDisplay();
      },
      registerCanvas: function(h) {
        var v = n(h.canvas);
        this.canvas = h, this.$canvas = v, v.mouseenter(n.proxy(this.mouseenter, this)), v.mouseleave(n.proxy(this.mouseleave, this)), v.click(n.proxy(this.mouseclick, this));
      },
      reset: function(h) {
        this.splist = [], this.tooltip && h && (this.tooltip.remove(), this.tooltip = r);
      },
      mouseclick: function(h) {
        var v = n.Event("sparklineClick");
        v.originalEvent = h, v.sparklines = this.splist, this.$el.trigger(v);
      },
      mouseenter: function(h) {
        n(e.body).unbind("mousemove.jqs"), n(e.body).bind("mousemove.jqs", n.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = h.pageX, this.currentPageY = h.pageY, this.currentEl = h.target, !this.tooltip && this.displayTooltips && (this.tooltip = new R(this.options), this.tooltip.updatePosition(h.pageX, h.pageY)), this.updateDisplay();
      },
      mouseleave: function() {
        n(e.body).unbind("mousemove.jqs");
        var h = this.splist, v = h.length, g = !1, b, A;
        for (this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null), A = 0; A < v; A++)
          b = h[A], b.clearRegionHighlight() && (g = !0);
        g && this.canvas.render();
      },
      mousemove: function(h) {
        this.currentPageX = h.pageX, this.currentPageY = h.pageY, this.currentEl = h.target, this.tooltip && this.tooltip.updatePosition(h.pageX, h.pageY), this.updateDisplay();
      },
      updateDisplay: function() {
        var h = this.splist, v = h.length, g = !1, b = this.$canvas.offset(), A = this.currentPageX - b.left, E = this.currentPageY - b.top, I, H, q, K, ae;
        if (this.over) {
          for (q = 0; q < v; q++)
            H = h[q], K = H.setRegionHighlight(this.currentEl, A, E), K && (g = !0);
          if (g) {
            if (ae = n.Event("sparklineRegionChange"), ae.sparklines = this.splist, this.$el.trigger(ae), this.tooltip) {
              for (I = "", q = 0; q < v; q++)
                H = h[q], I += H.getCurrentRegionTooltip();
              this.tooltip.setContent(I);
            }
            this.disableHighlight || this.canvas.render();
          }
          K === null && this.mouseleave();
        }
      }
    }), R = o({
      sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
      init: function(h) {
        var v = h.get("tooltipClassname", "jqstooltip"), g = this.sizeStyle, b;
        this.container = h.get("tooltipContainer") || e.body, this.tooltipOffsetX = h.get("tooltipOffsetX", 10), this.tooltipOffsetY = h.get("tooltipOffsetY", 12), n("#jqssizetip").remove(), n("#jqstooltip").remove(), this.sizetip = n("<div/>", {
          id: "jqssizetip",
          style: g,
          class: v
        }), this.tooltip = n("<div/>", {
          id: "jqstooltip",
          class: v
        }).appendTo(this.container), b = this.tooltip.offset(), this.offsetLeft = b.left, this.offsetTop = b.top, this.hidden = !0, n(window).unbind("resize.jqs scroll.jqs"), n(window).bind("resize.jqs scroll.jqs", n.proxy(this.updateWindowDims, this)), this.updateWindowDims();
      },
      updateWindowDims: function() {
        this.scrollTop = n(window).scrollTop(), this.scrollLeft = n(window).scrollLeft(), this.scrollRight = this.scrollLeft + n(window).width(), this.updatePosition();
      },
      getSize: function(h) {
        this.sizetip.html(h).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove();
      },
      setContent: function(h) {
        if (!h) {
          this.tooltip.css("visibility", "hidden"), this.hidden = !0;
          return;
        }
        this.getSize(h), this.tooltip.html(h).css({
          width: this.width,
          height: this.height,
          visibility: "visible"
        }), this.hidden && (this.hidden = !1, this.updatePosition());
      },
      updatePosition: function(h, v) {
        if (h === r) {
          if (this.mousex === r)
            return;
          h = this.mousex - this.offsetLeft, v = this.mousey - this.offsetTop;
        } else
          this.mousex = h = h - this.offsetLeft, this.mousey = v = v - this.offsetTop;
        !this.height || !this.width || this.hidden || (v -= this.height + this.tooltipOffsetY, h += this.tooltipOffsetX, v < this.scrollTop && (v = this.scrollTop), h < this.scrollLeft ? h = this.scrollLeft : h + this.width > this.scrollRight && (h = this.scrollRight - this.width), this.tooltip.css({
          left: h,
          top: v
        }));
      },
      remove: function() {
        this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = r, n(window).unbind("resize.jqs scroll.jqs");
      }
    }), X = function() {
      S(se);
    }, n(X), Z = [], n.fn.sparkline = function(h, v) {
      return this.each(function() {
        var g = new n.fn.sparkline.options(this, v), b = n(this), A, E;
        if (A = function() {
          var I, H, q, K, ae, U, ve;
          if (h === "html" || h === r ? (ve = this.getAttribute(g.get("tagValuesAttribute")), (ve === r || ve === null) && (ve = b.html()), I = ve.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")) : I = h, H = g.get("width") === "auto" ? I.length * g.get("defaultPixelsPerValue") : g.get("width"), g.get("height") === "auto" ? (!g.get("composite") || !n.data(this, "_jqs_vcanvas")) && (K = e.createElement("span"), K.innerHTML = "a", b.html(K), q = n(K).innerHeight() || n(K).height(), n(K).remove(), K = null) : q = g.get("height"), g.get("disableInteraction") ? ae = !1 : (ae = n.data(this, "_jqs_mhandler"), ae ? g.get("composite") || ae.reset() : (ae = new T(this, g), n.data(this, "_jqs_mhandler", ae))), g.get("composite") && !n.data(this, "_jqs_vcanvas")) {
            n.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), n.data(this, "_jqs_errnotify", !0));
            return;
          }
          U = new n.fn.sparkline[g.get("type")](this, I, g, H, q), U.render(), ae && ae.registerSparkline(U);
        }, n(this).html() && !g.get("disableHiddenCheck") && n(this).is(":hidden") || !n(this).parents("body").length) {
          if (!g.get("composite") && n.data(this, "_jqs_pending"))
            for (E = Z.length; E; E--)
              Z[E - 1][0] == this && Z.splice(E - 1, 1);
          Z.push([this, A]), n.data(this, "_jqs_pending", !0);
        } else
          A.call(this);
      });
    }, n.fn.sparkline.defaults = a(), n.sparkline_display_visible = function() {
      var h, v, g, b = [];
      for (v = 0, g = Z.length; v < g; v++)
        h = Z[v][0], n(h).is(":visible") && !n(h).parents().is(":hidden") ? (Z[v][1].call(h), n.data(Z[v][0], "_jqs_pending", !1), b.push(v)) : !n(h).closest("html").length && !n.data(h, "_jqs_pending") && (n.data(Z[v][0], "_jqs_pending", !1), b.push(v));
      for (v = b.length; v; v--)
        Z.splice(b[v - 1], 1);
    }, n.fn.sparkline.options = o({
      init: function(h, v) {
        var g, b, A, E;
        this.userOptions = v = v || {}, this.tag = h, this.tagValCache = {}, b = n.fn.sparkline.defaults, A = b.common, this.tagOptionsPrefix = v.enableTagOptions && (v.tagOptionsPrefix || A.tagOptionsPrefix), E = this.getTagSetting("type"), E === i ? g = b[v.type || A.type] : g = b[E], this.mergedOptions = n.extend({}, A, g, v);
      },
      getTagSetting: function(h) {
        var v = this.tagOptionsPrefix, g, b, A, E;
        if (v === !1 || v === r)
          return i;
        if (this.tagValCache.hasOwnProperty(h))
          g = this.tagValCache.key;
        else {
          if (g = this.tag.getAttribute(v + h), g === r || g === null)
            g = i;
          else if (g.substr(0, 1) === "[")
            for (g = g.substr(1, g.length - 2).split(","), b = g.length; b--; )
              g[b] = c(g[b].replace(/(^\s*)|(\s*$)/g, ""));
          else if (g.substr(0, 1) === "{")
            for (A = g.substr(1, g.length - 2).split(","), g = {}, b = A.length; b--; )
              E = A[b].split(":", 2), g[E[0].replace(/(^\s*)|(\s*$)/g, "")] = c(E[1].replace(/(^\s*)|(\s*$)/g, ""));
          else
            g = c(g);
          this.tagValCache.key = g;
        }
        return g;
      },
      get: function(h, v) {
        var g = this.getTagSetting(h), b;
        return g !== i ? g : (b = this.mergedOptions[h]) === r ? v : b;
      }
    }), n.fn.sparkline._base = o({
      disabled: !1,
      init: function(h, v, g, b, A) {
        this.el = h, this.$el = n(h), this.values = v, this.options = g, this.width = b, this.height = A, this.currentRegion = r;
      },
      /**
       * Setup the canvas
       */
      initTarget: function() {
        var h = !this.options.get("disableInteraction");
        (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), h)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0;
      },
      /**
       * Actually render the chart to the canvas
       */
      render: function() {
        return this.disabled ? (this.el.innerHTML = "", !1) : !0;
      },
      /**
       * Return a region id for a given x/y co-ordinate
       */
      getRegion: function(h, v) {
      },
      /**
       * Highlight an item based on the moused-over x,y co-ordinate
       */
      setRegionHighlight: function(h, v, g) {
        var b = this.currentRegion, A = !this.options.get("disableHighlight"), E;
        return v > this.canvasWidth || g > this.canvasHeight || v < 0 || g < 0 ? null : (E = this.getRegion(h, v, g), b !== E ? (b !== r && A && this.removeHighlight(), this.currentRegion = E, E !== r && A && this.renderHighlight(), !0) : !1);
      },
      /**
       * Reset any currently highlighted item
       */
      clearRegionHighlight: function() {
        return this.currentRegion !== r ? (this.removeHighlight(), this.currentRegion = r, !0) : !1;
      },
      renderHighlight: function() {
        this.changeHighlight(!0);
      },
      removeHighlight: function() {
        this.changeHighlight(!1);
      },
      changeHighlight: function(h) {
      },
      /**
       * Fetch the HTML to display as a tooltip
       */
      getCurrentRegionTooltip: function() {
        var h = this.options, v = "", g = [], b, A, E, I, H, q, K, ae, U, ve, de, he, Ee, De;
        if (this.currentRegion === r)
          return "";
        if (b = this.getCurrentRegionFields(), de = h.get("tooltipFormatter"), de)
          return de(this, h, b);
        if (h.get("tooltipChartTitle") && (v += '<div class="jqs jqstitle">' + h.get("tooltipChartTitle") + `</div>
`), A = this.options.get("tooltipFormat"), !A)
          return "";
        if (n.isArray(A) || (A = [A]), n.isArray(b) || (b = [b]), K = this.options.get("tooltipFormatFieldlist"), ae = this.options.get("tooltipFormatFieldlistKey"), K && ae) {
          for (U = [], q = b.length; q--; )
            ve = b[q][ae], (De = n.inArray(ve, K)) != -1 && (U[De] = b[q]);
          b = U;
        }
        for (E = A.length, Ee = b.length, q = 0; q < E; q++)
          for (he = A[q], typeof he == "string" && (he = new s(he)), I = he.fclass || "jqsfield", De = 0; De < Ee; De++)
            (!b[De].isNull || !h.get("tooltipSkipNull")) && (n.extend(b[De], {
              prefix: h.get("tooltipPrefix"),
              suffix: h.get("tooltipSuffix")
            }), H = he.render(b[De], h.get("tooltipValueLookups"), h), g.push('<div class="' + I + '">' + H + "</div>"));
        return g.length ? v + g.join(`
`) : "";
      },
      getCurrentRegionFields: function() {
      },
      calcHighlightColor: function(h, v) {
        var g = v.get("highlightColor"), b = v.get("highlightLighten"), A, E, I, H;
        if (g)
          return g;
        if (b && (A = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(h) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(h), A)) {
          for (I = [], E = h.length === 4 ? 16 : 1, H = 0; H < 3; H++)
            I[H] = l(t.round(parseInt(A[H + 1], 16) * E * b), 0, 255);
          return "rgb(" + I.join(",") + ")";
        }
        return h;
      }
    }), P = {
      changeHighlight: function(h) {
        var v = this.currentRegion, g = this.target, b = this.regionShapes[v], A;
        b && (A = this.renderRegion(v, h), n.isArray(A) || n.isArray(b) ? (g.replaceWithShapes(b, A), this.regionShapes[v] = n.map(A, function(E) {
          return E.id;
        })) : (g.replaceWithShape(b, A), this.regionShapes[v] = A.id));
      },
      render: function() {
        var h = this.values, v = this.target, g = this.regionShapes, b, A, E, I;
        if (this.cls._super.render.call(this)) {
          for (E = h.length; E--; )
            if (b = this.renderRegion(E), b)
              if (n.isArray(b)) {
                for (A = [], I = b.length; I--; )
                  b[I].append(), A.push(b[I].id);
                g[E] = A;
              } else
                b.append(), g[E] = b.id;
            else
              g[E] = null;
          v.render();
        }
      }
    }, n.fn.sparkline.line = N = o(n.fn.sparkline._base, {
      type: "line",
      init: function(h, v, g, b, A) {
        N._super.init.call(this, h, v, g, b, A), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget();
      },
      getRegion: function(h, v, g) {
        var b, A = this.regionMap;
        for (b = A.length; b--; )
          if (A[b] !== null && v >= A[b][0] && v <= A[b][1])
            return A[b][2];
        return r;
      },
      getCurrentRegionFields: function() {
        var h = this.currentRegion;
        return {
          isNull: this.yvalues[h] === null,
          x: this.xvalues[h],
          y: this.yvalues[h],
          color: this.options.get("lineColor"),
          fillColor: this.options.get("fillColor"),
          offset: h
        };
      },
      renderHighlight: function() {
        var h = this.currentRegion, v = this.target, g = this.vertices[h], b = this.options, A = b.get("spotRadius"), E = b.get("highlightSpotColor"), I = b.get("highlightLineColor"), H, q;
        g && (A && E && (H = v.drawCircle(
          g[0],
          g[1],
          A,
          r,
          E
        ), this.highlightSpotId = H.id, v.insertAfterShape(this.lastShapeId, H)), I && (q = v.drawLine(
          g[0],
          this.canvasTop,
          g[0],
          this.canvasTop + this.canvasHeight,
          I
        ), this.highlightLineId = q.id, v.insertAfterShape(this.lastShapeId, q)));
      },
      removeHighlight: function() {
        var h = this.target;
        this.highlightSpotId && (h.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (h.removeShapeId(this.highlightLineId), this.highlightLineId = null);
      },
      scanValues: function() {
        var h = this.values, v = h.length, g = this.xvalues, b = this.yvalues, A = this.yminmax, E, I, H, q, K;
        for (E = 0; E < v; E++)
          I = h[E], H = typeof h[E] == "string", q = typeof h[E] == "object" && h[E] instanceof Array, K = H && h[E].split(":"), H && K.length === 2 ? (g.push(Number(K[0])), b.push(Number(K[1])), A.push(Number(K[1]))) : q ? (g.push(I[0]), b.push(I[1]), A.push(I[1])) : (g.push(E), h[E] === null || h[E] === "null" ? b.push(null) : (b.push(Number(I)), A.push(Number(I))));
        this.options.get("xvalues") && (g = this.options.get("xvalues")), this.maxy = this.maxyorg = t.max.apply(t, A), this.miny = this.minyorg = t.min.apply(t, A), this.maxx = t.max.apply(t, g), this.minx = t.min.apply(t, g), this.xvalues = g, this.yvalues = b, this.yminmax = A;
      },
      processRangeOptions: function() {
        var h = this.options, v = h.get("normalRangeMin"), g = h.get("normalRangeMax");
        v !== r && (v < this.miny && (this.miny = v), g > this.maxy && (this.maxy = g)), h.get("chartRangeMin") !== r && (h.get("chartRangeClip") || h.get("chartRangeMin") < this.miny) && (this.miny = h.get("chartRangeMin")), h.get("chartRangeMax") !== r && (h.get("chartRangeClip") || h.get("chartRangeMax") > this.maxy) && (this.maxy = h.get("chartRangeMax")), h.get("chartRangeMinX") !== r && (h.get("chartRangeClipX") || h.get("chartRangeMinX") < this.minx) && (this.minx = h.get("chartRangeMinX")), h.get("chartRangeMaxX") !== r && (h.get("chartRangeClipX") || h.get("chartRangeMaxX") > this.maxx) && (this.maxx = h.get("chartRangeMaxX"));
      },
      drawNormalRange: function(h, v, g, b, A) {
        var E = this.options.get("normalRangeMin"), I = this.options.get("normalRangeMax"), H = v + t.round(g - g * ((I - this.miny) / A)), q = t.round(g * (I - E) / A);
        this.target.drawRect(h, H, b, q, r, this.options.get("normalRangeColor")).append();
      },
      render: function() {
        var h = this.options, v = this.target, g = this.canvasWidth, b = this.canvasHeight, A = this.vertices, E = h.get("spotRadius"), I = this.regionMap, H, q, K, ae, U, ve, de, he, Ee, De, Ce, Ie, Oe, Ke, $e, Me, He, st, ze, Je, Ye, Ve, Qe, qe, fe;
        if (N._super.render.call(this) && (this.scanValues(), this.processRangeOptions(), Qe = this.xvalues, qe = this.yvalues, !(!this.yminmax.length || this.yvalues.length < 2))) {
          for (ae = U = 0, H = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx, q = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny, K = this.yvalues.length - 1, E && (g < E * 4 || b < E * 4) && (E = 0), E && (Ye = h.get("highlightSpotColor") && !h.get("disableInteraction"), (Ye || h.get("minSpotColor") || h.get("spotColor") && qe[K] === this.miny) && (b -= t.ceil(E)), (Ye || h.get("maxSpotColor") || h.get("spotColor") && qe[K] === this.maxy) && (b -= t.ceil(E), ae += t.ceil(E)), (Ye || (h.get("minSpotColor") || h.get("maxSpotColor")) && (qe[0] === this.miny || qe[0] === this.maxy)) && (U += t.ceil(E), g -= t.ceil(E)), (Ye || h.get("spotColor") || h.get("minSpotColor") || h.get("maxSpotColor") && (qe[K] === this.miny || qe[K] === this.maxy)) && (g -= t.ceil(E))), b--, h.get("normalRangeMin") !== r && !h.get("drawNormalOnTop") && this.drawNormalRange(U, ae, b, g, q), de = [], he = [de], Ke = $e = null, Me = qe.length, fe = 0; fe < Me; fe++)
            Ee = Qe[fe], Ce = Qe[fe + 1], De = qe[fe], Ie = U + t.round((Ee - this.minx) * (g / H)), Oe = fe < Me - 1 ? U + t.round((Ce - this.minx) * (g / H)) : g, $e = Ie + (Oe - Ie) / 2, I[fe] = [Ke || 0, $e, fe], Ke = $e, De === null ? fe && (qe[fe - 1] !== null && (de = [], he.push(de)), A.push(null)) : (De < this.miny && (De = this.miny), De > this.maxy && (De = this.maxy), de.length || de.push([Ie, ae + b]), ve = [Ie, ae + t.round(b - b * ((De - this.miny) / q))], de.push(ve), A.push(ve));
          for (He = [], st = [], ze = he.length, fe = 0; fe < ze; fe++)
            de = he[fe], de.length && (h.get("fillColor") && (de.push([de[de.length - 1][0], ae + b]), st.push(de.slice(0)), de.pop()), de.length > 2 && (de[0] = [de[0][0], de[1][1]]), He.push(de));
          for (ze = st.length, fe = 0; fe < ze; fe++)
            v.drawShape(
              st[fe],
              h.get("fillColor"),
              h.get("fillColor")
            ).append();
          for (h.get("normalRangeMin") !== r && h.get("drawNormalOnTop") && this.drawNormalRange(U, ae, b, g, q), ze = He.length, fe = 0; fe < ze; fe++)
            v.drawShape(
              He[fe],
              h.get("lineColor"),
              r,
              h.get("lineWidth")
            ).append();
          if (E && h.get("valueSpots"))
            for (Je = h.get("valueSpots"), Je.get === r && (Je = new y(Je)), fe = 0; fe < Me; fe++)
              Ve = Je.get(qe[fe]), Ve && v.drawCircle(
                U + t.round((Qe[fe] - this.minx) * (g / H)),
                ae + t.round(b - b * ((qe[fe] - this.miny) / q)),
                E,
                r,
                Ve
              ).append();
          E && h.get("spotColor") && qe[K] !== null && v.drawCircle(
            U + t.round((Qe[Qe.length - 1] - this.minx) * (g / H)),
            ae + t.round(b - b * ((qe[K] - this.miny) / q)),
            E,
            r,
            h.get("spotColor")
          ).append(), this.maxy !== this.minyorg && (E && h.get("minSpotColor") && (Ee = Qe[n.inArray(this.minyorg, qe)], v.drawCircle(
            U + t.round((Ee - this.minx) * (g / H)),
            ae + t.round(b - b * ((this.minyorg - this.miny) / q)),
            E,
            r,
            h.get("minSpotColor")
          ).append()), E && h.get("maxSpotColor") && (Ee = Qe[n.inArray(this.maxyorg, qe)], v.drawCircle(
            U + t.round((Ee - this.minx) * (g / H)),
            ae + t.round(b - b * ((this.maxyorg - this.miny) / q)),
            E,
            r,
            h.get("maxSpotColor")
          ).append())), this.lastShapeId = v.getLastShapeId(), this.canvasTop = ae, v.render();
        }
      }
    }), n.fn.sparkline.bar = L = o(n.fn.sparkline._base, P, {
      type: "bar",
      init: function(h, v, g, b, A) {
        var E = parseInt(g.get("barWidth"), 10), I = parseInt(g.get("barSpacing"), 10), H = g.get("chartRangeMin"), q = g.get("chartRangeMax"), K = g.get("chartRangeClip"), ae = 1 / 0, U = -1 / 0, ve, de, he, Ee, De, Ce, Ie, Oe, Ke, $e, Me, He, st, ze, Je, Ye, Ve, Qe, qe, fe, F, $;
        for (L._super.init.call(this, h, v, g, b, A), Ce = 0, Ie = v.length; Ce < Ie; Ce++)
          fe = v[Ce], ve = typeof fe == "string" && fe.indexOf(":") > -1, (ve || n.isArray(fe)) && (Je = !0, ve && (fe = v[Ce] = f(fe.split(":"))), fe = d(fe, null), de = t.min.apply(t, fe), he = t.max.apply(t, fe), de < ae && (ae = de), he > U && (U = he));
        this.stacked = Je, this.regionShapes = {}, this.barWidth = E, this.barSpacing = I, this.totalBarWidth = E + I, this.width = b = v.length * E + (v.length - 1) * I, this.initTarget(), K && (st = H === r ? -1 / 0 : H, ze = q === r ? 1 / 0 : q), De = [], Ee = Je ? [] : De;
        var Fe = [], We = [];
        for (Ce = 0, Ie = v.length; Ce < Ie; Ce++)
          if (Je)
            for (Ye = v[Ce], v[Ce] = qe = [], Fe[Ce] = 0, Ee[Ce] = We[Ce] = 0, Ve = 0, Qe = Ye.length; Ve < Qe; Ve++)
              fe = qe[Ve] = K ? l(Ye[Ve], st, ze) : Ye[Ve], fe !== null && (fe > 0 && (Fe[Ce] += fe), ae < 0 && U > 0 ? fe < 0 ? We[Ce] += t.abs(fe) : Ee[Ce] += fe : Ee[Ce] += t.abs(fe - (fe < 0 ? U : ae)), De.push(fe));
          else
            fe = K ? l(v[Ce], st, ze) : v[Ce], fe = v[Ce] = c(fe), fe !== null && De.push(fe);
        this.max = He = t.max.apply(t, De), this.min = Me = t.min.apply(t, De), this.stackMax = U = Je ? t.max.apply(t, Fe) : He, this.stackMin = ae = Je ? t.min.apply(t, De) : Me, g.get("chartRangeMin") !== r && (g.get("chartRangeClip") || g.get("chartRangeMin") < Me) && (Me = g.get("chartRangeMin")), g.get("chartRangeMax") !== r && (g.get("chartRangeClip") || g.get("chartRangeMax") > He) && (He = g.get("chartRangeMax")), this.zeroAxis = Ke = g.get("zeroAxis", !0), Me <= 0 && He >= 0 && Ke ? $e = 0 : Ke == !1 || Me > 0 ? $e = Me : $e = He, this.xaxisOffset = $e, Oe = Je ? t.max.apply(t, Ee) + t.max.apply(t, We) : He - Me, this.canvasHeightEf = Ke && Me < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, Me < $e ? ($ = Je && He >= 0 ? U : He, F = ($ - $e) / Oe * this.canvasHeight, F !== t.ceil(F) && (this.canvasHeightEf -= 2, F = t.ceil(F))) : F = this.canvasHeight, this.yoffset = F, n.isArray(g.get("colorMap")) ? (this.colorMapByIndex = g.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = g.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === r && (this.colorMapByValue = new y(this.colorMapByValue))), this.range = Oe;
      },
      getRegion: function(h, v, g) {
        var b = t.floor(v / this.totalBarWidth);
        return b < 0 || b >= this.values.length ? r : b;
      },
      getCurrentRegionFields: function() {
        var h = this.currentRegion, v = w(this.values[h]), g = [], b, A;
        for (A = v.length; A--; )
          b = v[A], g.push({
            isNull: b === null,
            value: b,
            color: this.calcColor(A, b, h),
            offset: h
          });
        return g;
      },
      calcColor: function(h, v, g) {
        var b = this.colorMapByIndex, A = this.colorMapByValue, E = this.options, I, H;
        return this.stacked ? I = E.get("stackedBarColor") : I = v < 0 ? E.get("negBarColor") : E.get("barColor"), v === 0 && E.get("zeroColor") !== r && (I = E.get("zeroColor")), A && (H = A.get(v)) ? I = H : b && b.length > g && (I = b[g]), n.isArray(I) ? I[h % I.length] : I;
      },
      /**
       * Render bar(s) for a region
       */
      renderRegion: function(h, v) {
        var g = this.values[h], b = this.options, A = this.xaxisOffset, E = [], I = this.range, H = this.stacked, q = this.target, K = h * this.totalBarWidth, ae = this.canvasHeightEf, U = this.yoffset, ve, de, he, Ee, De, Ce, Ie, Oe, Ke, $e;
        if (g = n.isArray(g) ? g : [g], Ie = g.length, Oe = g[0], Ee = m(null, g), $e = m(A, g, !0), Ee)
          return b.get("nullColor") ? (he = v ? b.get("nullColor") : this.calcHighlightColor(b.get("nullColor"), b), ve = U > 0 ? U - 1 : U, q.drawRect(K, ve, this.barWidth - 1, 0, he, he)) : r;
        for (De = U, Ce = 0; Ce < Ie; Ce++) {
          if (Oe = g[Ce], H && Oe === A) {
            if (!$e || Ke)
              continue;
            Ke = !0;
          }
          I > 0 ? de = t.floor(ae * (t.abs(Oe - A) / I)) + 1 : de = 1, Oe < A || Oe === A && U === 0 ? (ve = De, De += de) : (ve = U - de, U -= de), he = this.calcColor(Ce, Oe, h), v && (he = this.calcHighlightColor(he, b)), E.push(q.drawRect(K, ve, this.barWidth - 1, de - 1, he, he));
        }
        return E.length === 1 ? E[0] : E;
      }
    }), n.fn.sparkline.tristate = W = o(n.fn.sparkline._base, P, {
      type: "tristate",
      init: function(h, v, g, b, A) {
        var E = parseInt(g.get("barWidth"), 10), I = parseInt(g.get("barSpacing"), 10);
        W._super.init.call(this, h, v, g, b, A), this.regionShapes = {}, this.barWidth = E, this.barSpacing = I, this.totalBarWidth = E + I, this.values = n.map(v, Number), this.width = b = v.length * E + (v.length - 1) * I, n.isArray(g.get("colorMap")) ? (this.colorMapByIndex = g.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = g.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === r && (this.colorMapByValue = new y(this.colorMapByValue))), this.initTarget();
      },
      getRegion: function(h, v, g) {
        return t.floor(v / this.totalBarWidth);
      },
      getCurrentRegionFields: function() {
        var h = this.currentRegion;
        return {
          isNull: this.values[h] === r,
          value: this.values[h],
          color: this.calcColor(this.values[h], h),
          offset: h
        };
      },
      calcColor: function(h, v) {
        var g = this.values, b = this.options, A = this.colorMapByIndex, E = this.colorMapByValue, I, H;
        return E && (H = E.get(h)) ? I = H : A && A.length > v ? I = A[v] : g[v] < 0 ? I = b.get("negBarColor") : g[v] > 0 ? I = b.get("posBarColor") : I = b.get("zeroBarColor"), I;
      },
      renderRegion: function(h, v) {
        var g = this.values, b = this.options, A = this.target, E, I, H, q, K, ae;
        if (E = A.pixelHeight, H = t.round(E / 2), q = h * this.totalBarWidth, g[h] < 0 ? (K = H, I = H - 1) : g[h] > 0 ? (K = 0, I = H - 1) : (K = H - 1, I = 2), ae = this.calcColor(g[h], h), ae !== null)
          return v && (ae = this.calcHighlightColor(ae, b)), A.drawRect(q, K, this.barWidth - 1, I - 1, ae, ae);
      }
    }), n.fn.sparkline.discrete = Y = o(n.fn.sparkline._base, P, {
      type: "discrete",
      init: function(h, v, g, b, A) {
        Y._super.init.call(this, h, v, g, b, A), this.regionShapes = {}, this.values = v = n.map(v, Number), this.min = t.min.apply(t, v), this.max = t.max.apply(t, v), this.range = this.max - this.min, this.width = b = g.get("width") === "auto" ? v.length * 2 : this.width, this.interval = t.floor(b / v.length), this.itemWidth = b / v.length, g.get("chartRangeMin") !== r && (g.get("chartRangeClip") || g.get("chartRangeMin") < this.min) && (this.min = g.get("chartRangeMin")), g.get("chartRangeMax") !== r && (g.get("chartRangeClip") || g.get("chartRangeMax") > this.max) && (this.max = g.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = g.get("lineHeight") === "auto" ? t.round(this.canvasHeight * 0.3) : g.get("lineHeight"));
      },
      getRegion: function(h, v, g) {
        return t.floor(v / this.itemWidth);
      },
      getCurrentRegionFields: function() {
        var h = this.currentRegion;
        return {
          isNull: this.values[h] === r,
          value: this.values[h],
          offset: h
        };
      },
      renderRegion: function(h, v) {
        var g = this.values, b = this.options, A = this.min, E = this.max, I = this.range, H = this.interval, q = this.target, K = this.canvasHeight, ae = this.lineHeight, U = K - ae, ve, de, he, Ee;
        return de = l(g[h], A, E), Ee = h * H, ve = t.round(U - U * ((de - A) / I)), he = b.get("thresholdColor") && de < b.get("thresholdValue") ? b.get("thresholdColor") : b.get("lineColor"), v && (he = this.calcHighlightColor(he, b)), q.drawLine(Ee, ve, Ee, ve + ae, he);
      }
    }), n.fn.sparkline.bullet = re = o(n.fn.sparkline._base, {
      type: "bullet",
      init: function(h, v, g, b, A) {
        var E, I, H;
        re._super.init.call(this, h, v, g, b, A), this.values = v = f(v), H = v.slice(), H[0] = H[0] === null ? H[2] : H[0], H[1] = v[1] === null ? H[2] : H[1], E = t.min.apply(t, v), I = t.max.apply(t, v), g.get("base") === r ? E = E < 0 ? E : 0 : E = g.get("base"), this.min = E, this.max = I, this.range = I - E, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = b = g.get("width") === "auto" ? "4.0em" : b, this.target = this.$el.simpledraw(b, A, g.get("composite")), v.length || (this.disabled = !0), this.initTarget();
      },
      getRegion: function(h, v, g) {
        var b = this.target.getShapeAt(h, v, g);
        return b !== r && this.shapes[b] !== r ? this.shapes[b] : r;
      },
      getCurrentRegionFields: function() {
        var h = this.currentRegion;
        return {
          fieldkey: h.substr(0, 1),
          value: this.values[h.substr(1)],
          region: h
        };
      },
      changeHighlight: function(h) {
        var v = this.currentRegion, g = this.valueShapes[v], b;
        switch (delete this.shapes[g], v.substr(0, 1)) {
          case "r":
            b = this.renderRange(v.substr(1), h);
            break;
          case "p":
            b = this.renderPerformance(h);
            break;
          case "t":
            b = this.renderTarget(h);
            break;
        }
        this.valueShapes[v] = b.id, this.shapes[b.id] = v, this.target.replaceWithShape(g, b);
      },
      renderRange: function(h, v) {
        var g = this.values[h], b = t.round(this.canvasWidth * ((g - this.min) / this.range)), A = this.options.get("rangeColors")[h - 2];
        return v && (A = this.calcHighlightColor(A, this.options)), this.target.drawRect(0, 0, b - 1, this.canvasHeight - 1, A, A);
      },
      renderPerformance: function(h) {
        var v = this.values[1], g = t.round(this.canvasWidth * ((v - this.min) / this.range)), b = this.options.get("performanceColor");
        return h && (b = this.calcHighlightColor(b, this.options)), this.target.drawRect(
          0,
          t.round(this.canvasHeight * 0.3),
          g - 1,
          t.round(this.canvasHeight * 0.4) - 1,
          b,
          b
        );
      },
      renderTarget: function(h) {
        var v = this.values[0], g = t.round(this.canvasWidth * ((v - this.min) / this.range) - this.options.get("targetWidth") / 2), b = t.round(this.canvasHeight * 0.1), A = this.canvasHeight - b * 2, E = this.options.get("targetColor");
        return h && (E = this.calcHighlightColor(E, this.options)), this.target.drawRect(g, b, this.options.get("targetWidth") - 1, A - 1, E, E);
      },
      render: function() {
        var h = this.values.length, v = this.target, g, b;
        if (re._super.render.call(this)) {
          for (g = 2; g < h; g++)
            b = this.renderRange(g).append(), this.shapes[b.id] = "r" + g, this.valueShapes["r" + g] = b.id;
          this.values[1] !== null && (b = this.renderPerformance().append(), this.shapes[b.id] = "p1", this.valueShapes.p1 = b.id), this.values[0] !== null && (b = this.renderTarget().append(), this.shapes[b.id] = "t0", this.valueShapes.t0 = b.id), v.render();
        }
      }
    }), n.fn.sparkline.pie = z = o(n.fn.sparkline._base, {
      type: "pie",
      init: function(h, v, g, b, A) {
        var E = 0, I;
        if (z._super.init.call(this, h, v, g, b, A), this.shapes = {}, this.valueShapes = {}, this.values = v = n.map(v, Number), g.get("width") === "auto" && (this.width = this.height), v.length > 0)
          for (I = v.length; I--; )
            E += v[I];
        this.total = E, this.initTarget(), this.radius = t.floor(t.min(this.canvasWidth, this.canvasHeight) / 2);
      },
      getRegion: function(h, v, g) {
        var b = this.target.getShapeAt(h, v, g);
        return b !== r && this.shapes[b] !== r ? this.shapes[b] : r;
      },
      getCurrentRegionFields: function() {
        var h = this.currentRegion;
        return {
          isNull: this.values[h] === r,
          value: this.values[h],
          percent: this.values[h] / this.total * 100,
          color: this.options.get("sliceColors")[h % this.options.get("sliceColors").length],
          offset: h
        };
      },
      changeHighlight: function(h) {
        var v = this.currentRegion, g = this.renderSlice(v, h), b = this.valueShapes[v];
        delete this.shapes[b], this.target.replaceWithShape(b, g), this.valueShapes[v] = g.id, this.shapes[g.id] = v;
      },
      renderSlice: function(h, v) {
        var g = this.target, b = this.options, A = this.radius, E = b.get("borderWidth"), I = b.get("offset"), H = 2 * t.PI, q = this.values, K = this.total, ae = I ? 2 * t.PI * (I / 360) : 0, U, ve, de, he, Ee;
        for (he = q.length, de = 0; de < he; de++) {
          if (U = ae, ve = ae, K > 0 && (ve = ae + H * (q[de] / K)), h === de)
            return Ee = b.get("sliceColors")[de % b.get("sliceColors").length], v && (Ee = this.calcHighlightColor(Ee, b)), g.drawPieSlice(A, A, A - E, U, ve, r, Ee);
          ae = ve;
        }
      },
      render: function() {
        var h = this.target, v = this.values, g = this.options, b = this.radius, A = g.get("borderWidth"), E = g.get("donutWidth"), I, H;
        if (z._super.render.call(this)) {
          for (A && h.drawCircle(
            b,
            b,
            t.floor(b - A / 2),
            g.get("borderColor"),
            r,
            A
          ).append(), H = v.length; H--; )
            v[H] && (I = this.renderSlice(H).append(), this.valueShapes[H] = I.id, this.shapes[I.id] = H);
          E && h.drawCircle(
            b,
            b,
            b - E,
            g.get("donutColor"),
            g.get("donutColor"),
            0
          ).append(), h.render();
        }
      }
    }), n.fn.sparkline.box = Q = o(n.fn.sparkline._base, {
      type: "box",
      init: function(h, v, g, b, A) {
        Q._super.init.call(this, h, v, g, b, A), this.values = n.map(v, Number), this.width = g.get("width") === "auto" ? "4.0em" : b, this.initTarget(), this.values.length || (this.disabled = 1);
      },
      /**
       * Simulate a single region
       */
      getRegion: function() {
        return 1;
      },
      getCurrentRegionFields: function() {
        var h = [
          { field: "lq", value: this.quartiles[0] },
          { field: "med", value: this.quartiles[1] },
          { field: "uq", value: this.quartiles[2] }
        ];
        return this.loutlier !== r && h.push({ field: "lo", value: this.loutlier }), this.routlier !== r && h.push({ field: "ro", value: this.routlier }), this.lwhisker !== r && h.push({ field: "lw", value: this.lwhisker }), this.rwhisker !== r && h.push({ field: "rw", value: this.rwhisker }), h;
      },
      render: function() {
        var h = this.target, v = this.values, g = v.length, b = this.options, A = this.canvasWidth, E = this.canvasHeight, I = b.get("chartRangeMin") === r ? t.min.apply(t, v) : b.get("chartRangeMin"), H = b.get("chartRangeMax") === r ? t.max.apply(t, v) : b.get("chartRangeMax"), q = 0, K, ae, U, ve, de, he, Ee, De, Ce, Ie, Oe;
        if (Q._super.render.call(this)) {
          if (b.get("raw"))
            b.get("showOutliers") && v.length > 5 ? (ae = v[0], K = v[1], ve = v[2], de = v[3], he = v[4], Ee = v[5], De = v[6]) : (K = v[0], ve = v[1], de = v[2], he = v[3], Ee = v[4]);
          else if (v.sort(function(Ke, $e) {
            return Ke - $e;
          }), ve = u(v, 1), de = u(v, 2), he = u(v, 3), U = he - ve, b.get("showOutliers")) {
            for (K = Ee = r, Ce = 0; Ce < g; Ce++)
              K === r && v[Ce] > ve - U * b.get("outlierIQR") && (K = v[Ce]), v[Ce] < he + U * b.get("outlierIQR") && (Ee = v[Ce]);
            ae = v[0], De = v[g - 1];
          } else
            K = v[0], Ee = v[g - 1];
          this.quartiles = [ve, de, he], this.lwhisker = K, this.rwhisker = Ee, this.loutlier = ae, this.routlier = De, Oe = A / (H - I + 1), b.get("showOutliers") && (q = t.ceil(b.get("spotRadius")), A -= 2 * t.ceil(b.get("spotRadius")), Oe = A / (H - I + 1), ae < K && h.drawCircle(
            (ae - I) * Oe + q,
            E / 2,
            b.get("spotRadius"),
            b.get("outlierLineColor"),
            b.get("outlierFillColor")
          ).append(), De > Ee && h.drawCircle(
            (De - I) * Oe + q,
            E / 2,
            b.get("spotRadius"),
            b.get("outlierLineColor"),
            b.get("outlierFillColor")
          ).append()), h.drawRect(
            t.round((ve - I) * Oe + q),
            t.round(E * 0.1),
            t.round((he - ve) * Oe),
            t.round(E * 0.8),
            b.get("boxLineColor"),
            b.get("boxFillColor")
          ).append(), h.drawLine(
            t.round((K - I) * Oe + q),
            t.round(E / 2),
            t.round((ve - I) * Oe + q),
            t.round(E / 2),
            b.get("lineColor")
          ).append(), h.drawLine(
            t.round((K - I) * Oe + q),
            t.round(E / 4),
            t.round((K - I) * Oe + q),
            t.round(E - E / 4),
            b.get("whiskerColor")
          ).append(), h.drawLine(
            t.round((Ee - I) * Oe + q),
            t.round(E / 2),
            t.round((he - I) * Oe + q),
            t.round(E / 2),
            b.get("lineColor")
          ).append(), h.drawLine(
            t.round((Ee - I) * Oe + q),
            t.round(E / 4),
            t.round((Ee - I) * Oe + q),
            t.round(E - E / 4),
            b.get("whiskerColor")
          ).append(), h.drawLine(
            t.round((de - I) * Oe + q),
            t.round(E * 0.1),
            t.round((de - I) * Oe + q),
            t.round(E * 0.9),
            b.get("medianColor")
          ).append(), b.get("target") && (Ie = t.ceil(b.get("spotRadius")), h.drawLine(
            t.round((b.get("target") - I) * Oe + q),
            t.round(E / 2 - Ie),
            t.round((b.get("target") - I) * Oe + q),
            t.round(E / 2 + Ie),
            b.get("targetColor")
          ).append(), h.drawLine(
            t.round((b.get("target") - I) * Oe + q - Ie),
            t.round(E / 2),
            t.round((b.get("target") - I) * Oe + q + Ie),
            t.round(E / 2),
            b.get("targetColor")
          ).append()), h.render();
        }
      }
    }), ee = o({
      init: function(h, v, g, b) {
        this.target = h, this.id = v, this.type = g, this.args = b;
      },
      append: function() {
        return this.target.appendShape(this), this;
      }
    }), J = o({
      _pxregex: /(\d+)(px)?\s*$/i,
      init: function(h, v, g) {
        h && (this.width = h, this.height = v, this.target = g, this.lastShapeId = null, g[0] && (g = g[0]), n.data(g, "_jqs_vcanvas", this));
      },
      drawLine: function(h, v, g, b, A, E) {
        return this.drawShape([[h, v], [g, b]], A, E);
      },
      drawShape: function(h, v, g, b) {
        return this._genShape("Shape", [h, v, g, b]);
      },
      drawCircle: function(h, v, g, b, A, E) {
        return this._genShape("Circle", [h, v, g, b, A, E]);
      },
      drawPieSlice: function(h, v, g, b, A, E, I) {
        return this._genShape("PieSlice", [h, v, g, b, A, E, I]);
      },
      drawRect: function(h, v, g, b, A, E) {
        return this._genShape("Rect", [h, v, g, b, A, E]);
      },
      getElement: function() {
        return this.canvas;
      },
      /**
       * Return the most recently inserted shape id
       */
      getLastShapeId: function() {
        return this.lastShapeId;
      },
      /**
       * Clear and reset the canvas
       */
      reset: function() {
        alert("reset not implemented");
      },
      _insert: function(h, v) {
        n(v).html(h);
      },
      /**
       * Calculate the pixel dimensions of the canvas
       */
      _calculatePixelDims: function(h, v, g) {
        var b;
        b = this._pxregex.exec(v), b ? this.pixelHeight = b[1] : this.pixelHeight = n(g).height(), b = this._pxregex.exec(h), b ? this.pixelWidth = b[1] : this.pixelWidth = n(g).width();
      },
      /**
       * Generate a shape object and id for later rendering
       */
      _genShape: function(h, v) {
        var g = V++;
        return v.unshift(g), new ee(this, g, h, v);
      },
      /**
       * Add a shape to the end of the render queue
       */
      appendShape: function(h) {
        alert("appendShape not implemented");
      },
      /**
       * Replace one shape with another
       */
      replaceWithShape: function(h, v) {
        alert("replaceWithShape not implemented");
      },
      /**
       * Insert one shape after another in the render queue
       */
      insertAfterShape: function(h, v) {
        alert("insertAfterShape not implemented");
      },
      /**
       * Remove a shape from the queue
       */
      removeShapeId: function(h) {
        alert("removeShapeId not implemented");
      },
      /**
       * Find a shape at the specified x/y co-ordinates
       */
      getShapeAt: function(h, v, g) {
        alert("getShapeAt not implemented");
      },
      /**
       * Render all queued shapes onto the canvas
       */
      render: function() {
        alert("render not implemented");
      }
    }), ue = o(J, {
      init: function(h, v, g, b) {
        ue._super.init.call(this, h, v, g), this.canvas = e.createElement("canvas"), g[0] && (g = g[0]), n.data(g, "_jqs_vcanvas", this), n(this.canvas).css({ display: "inline-block", width: h, height: v, verticalAlign: "top" }), this._insert(this.canvas, g), this._calculatePixelDims(h, v, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = b, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = r, n(this.canvas).css({ width: this.pixelWidth, height: this.pixelHeight });
      },
      _getContext: function(h, v, g) {
        var b = this.canvas.getContext("2d");
        return h !== r && (b.strokeStyle = h), b.lineWidth = g === r ? 1 : g, v !== r && (b.fillStyle = v), b;
      },
      reset: function() {
        var h = this._getContext();
        h.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = r;
      },
      _drawShape: function(h, v, g, b, A) {
        var E = this._getContext(g, b, A), I, H;
        for (E.beginPath(), E.moveTo(v[0][0] + 0.5, v[0][1] + 0.5), I = 1, H = v.length; I < H; I++)
          E.lineTo(v[I][0] + 0.5, v[I][1] + 0.5);
        g !== r && E.stroke(), b !== r && E.fill(), this.targetX !== r && this.targetY !== r && E.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = h);
      },
      _drawCircle: function(h, v, g, b, A, E, I) {
        var H = this._getContext(A, E, I);
        H.beginPath(), H.arc(v, g, b, 0, 2 * t.PI, !1), this.targetX !== r && this.targetY !== r && H.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = h), A !== r && H.stroke(), E !== r && H.fill();
      },
      _drawPieSlice: function(h, v, g, b, A, E, I, H) {
        var q = this._getContext(I, H);
        q.beginPath(), q.moveTo(v, g), q.arc(v, g, b, A, E, !1), q.lineTo(v, g), q.closePath(), I !== r && q.stroke(), H && q.fill(), this.targetX !== r && this.targetY !== r && q.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = h);
      },
      _drawRect: function(h, v, g, b, A, E, I) {
        return this._drawShape(h, [[v, g], [v + b, g], [v + b, g + A], [v, g + A], [v, g]], E, I);
      },
      appendShape: function(h) {
        return this.shapes[h.id] = h, this.shapeseq.push(h.id), this.lastShapeId = h.id, h.id;
      },
      replaceWithShape: function(h, v) {
        var g = this.shapeseq, b;
        for (this.shapes[v.id] = v, b = g.length; b--; )
          g[b] == h && (g[b] = v.id);
        delete this.shapes[h];
      },
      replaceWithShapes: function(h, v) {
        var g = this.shapeseq, b = {}, A, E, I;
        for (E = h.length; E--; )
          b[h[E]] = !0;
        for (E = g.length; E--; )
          A = g[E], b[A] && (g.splice(E, 1), delete this.shapes[A], I = E);
        for (E = v.length; E--; )
          g.splice(I, 0, v[E].id), this.shapes[v[E].id] = v[E];
      },
      insertAfterShape: function(h, v) {
        var g = this.shapeseq, b;
        for (b = g.length; b--; )
          if (g[b] === h) {
            g.splice(b + 1, 0, v.id), this.shapes[v.id] = v;
            return;
          }
      },
      removeShapeId: function(h) {
        var v = this.shapeseq, g;
        for (g = v.length; g--; )
          if (v[g] === h) {
            v.splice(g, 1);
            break;
          }
        delete this.shapes[h];
      },
      getShapeAt: function(h, v, g) {
        return this.targetX = v, this.targetY = g, this.render(), this.currentTargetShapeId;
      },
      render: function() {
        var h = this.shapeseq, v = this.shapes, g = h.length, b = this._getContext(), A, E, I;
        for (b.clearRect(0, 0, this.pixelWidth, this.pixelHeight), I = 0; I < g; I++)
          A = h[I], E = v[A], this["_draw" + E.type].apply(this, E.args);
        this.interact || (this.shapes = {}, this.shapeseq = []);
      }
    }), ce = o(J, {
      init: function(h, v, g) {
        var b;
        ce._super.init.call(this, h, v, g), g[0] && (g = g[0]), n.data(g, "_jqs_vcanvas", this), this.canvas = e.createElement("span"), n(this.canvas).css({ display: "inline-block", position: "relative", overflow: "hidden", width: h, height: v, margin: "0px", padding: "0px", verticalAlign: "top" }), this._insert(this.canvas, g), this._calculatePixelDims(h, v, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, b = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", b), this.group = n(this.canvas).children()[0], this.rendered = !1, this.prerender = "";
      },
      _drawShape: function(h, v, g, b, A) {
        var E = [], I, H, q, K, ae, U, ve;
        for (ve = 0, U = v.length; ve < U; ve++)
          E[ve] = "" + v[ve][0] + "," + v[ve][1];
        return I = E.splice(0, 1), A = A === r ? 1 : A, H = g === r ? ' stroked="false" ' : ' strokeWeight="' + A + 'px" strokeColor="' + g + '" ', q = b === r ? ' filled="false"' : ' fillColor="' + b + '" filled="true" ', K = E[0] === E[E.length - 1] ? "x " : "", ae = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + h + '" ' + H + q + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + I + " l " + E.join(", ") + " " + K + 'e"> </v:shape>', ae;
      },
      _drawCircle: function(h, v, g, b, A, E, I) {
        var H, q, K;
        return v -= b, g -= b, H = A === r ? ' stroked="false" ' : ' strokeWeight="' + I + 'px" strokeColor="' + A + '" ', q = E === r ? ' filled="false"' : ' fillColor="' + E + '" filled="true" ', K = '<v:oval  id="jqsshape' + h + '" ' + H + q + ' style="position:absolute;top:' + g + "px; left:" + v + "px; width:" + b * 2 + "px; height:" + b * 2 + 'px"></v:oval>', K;
      },
      _drawPieSlice: function(h, v, g, b, A, E, I, H) {
        var q, K, ae, U, ve, de, he, Ee;
        if (A === E)
          return "";
        if (E - A === 2 * t.PI && (A = 0, E = 2 * t.PI), K = v + t.round(t.cos(A) * b), ae = g + t.round(t.sin(A) * b), U = v + t.round(t.cos(E) * b), ve = g + t.round(t.sin(E) * b), K === U && ae === ve) {
          if (E - A < t.PI)
            return "";
          K = U = v + b, ae = ve = g;
        }
        return K === U && ae === ve && E - A < t.PI ? "" : (q = [v - b, g - b, v + b, g + b, K, ae, U, ve], de = I === r ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + I + '" ', he = H === r ? ' filled="false"' : ' fillColor="' + H + '" filled="true" ', Ee = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + h + '" ' + de + he + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + v + "," + g + " wa " + q.join(", ") + ' x e"> </v:shape>', Ee);
      },
      _drawRect: function(h, v, g, b, A, E, I) {
        return this._drawShape(h, [[v, g], [v, g + A], [v + b, g + A], [v + b, g], [v, g]], E, I);
      },
      reset: function() {
        this.group.innerHTML = "";
      },
      appendShape: function(h) {
        var v = this["_draw" + h.type].apply(this, h.args);
        return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", v) : this.prerender += v, this.lastShapeId = h.id, h.id;
      },
      replaceWithShape: function(h, v) {
        var g = n("#jqsshape" + h), b = this["_draw" + v.type].apply(this, v.args);
        g[0].outerHTML = b;
      },
      replaceWithShapes: function(h, v) {
        var g = n("#jqsshape" + h[0]), b = "", A = v.length, E;
        for (E = 0; E < A; E++)
          b += this["_draw" + v[E].type].apply(this, v[E].args);
        for (g[0].outerHTML = b, E = 1; E < h.length; E++)
          n("#jqsshape" + h[E]).remove();
      },
      insertAfterShape: function(h, v) {
        var g = n("#jqsshape" + h), b = this["_draw" + v.type].apply(this, v.args);
        g[0].insertAdjacentHTML("afterEnd", b);
      },
      removeShapeId: function(h) {
        var v = n("#jqsshape" + h);
        this.group.removeChild(v[0]);
      },
      getShapeAt: function(h, v, g) {
        var b = h.id.substr(8);
        return b;
      },
      render: function() {
        this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0);
      }
    });
  });
})(document, Math);
var Dc = { exports: {} }, Up = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
if (Up) {
  var $p = new Uint8Array(16);
  Dc.exports = function() {
    return Up($p), $p;
  };
} else {
  var zp = new Array(16);
  Dc.exports = function() {
    for (var t = 0, r; t < 16; t++)
      t & 3 || (r = Math.random() * 4294967296), zp[t] = r >>> ((t & 3) << 3) & 255;
    return zp;
  };
}
var Sy = Dc.exports, xy = [];
for (var aa = 0; aa < 256; ++aa)
  xy[aa] = (aa + 256).toString(16).substr(1);
function _C(e, t) {
  var r = t || 0, n = xy;
  return [
    n[e[r++]],
    n[e[r++]],
    n[e[r++]],
    n[e[r++]],
    "-",
    n[e[r++]],
    n[e[r++]],
    "-",
    n[e[r++]],
    n[e[r++]],
    "-",
    n[e[r++]],
    n[e[r++]],
    "-",
    n[e[r++]],
    n[e[r++]],
    n[e[r++]],
    n[e[r++]],
    n[e[r++]],
    n[e[r++]]
  ].join("");
}
var Cy = _C, TC = Sy, PC = Cy, Yp, os, ss = 0, ls = 0;
function DC(e, t, r) {
  var n = t && r || 0, i = t || [];
  e = e || {};
  var a = e.node || Yp, o = e.clockseq !== void 0 ? e.clockseq : os;
  if (a == null || o == null) {
    var s = TC();
    a == null && (a = Yp = [
      s[0] | 1,
      s[1],
      s[2],
      s[3],
      s[4],
      s[5]
    ]), o == null && (o = os = (s[6] << 8 | s[7]) & 16383);
  }
  var l = e.msecs !== void 0 ? e.msecs : (/* @__PURE__ */ new Date()).getTime(), u = e.nsecs !== void 0 ? e.nsecs : ls + 1, c = l - ss + (u - ls) / 1e4;
  if (c < 0 && e.clockseq === void 0 && (o = o + 1 & 16383), (c < 0 || l > ss) && e.nsecs === void 0 && (u = 0), u >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ss = l, ls = u, os = o, l += 122192928e5;
  var f = ((l & 268435455) * 1e4 + u) % 4294967296;
  i[n++] = f >>> 24 & 255, i[n++] = f >>> 16 & 255, i[n++] = f >>> 8 & 255, i[n++] = f & 255;
  var d = l / 4294967296 * 1e4 & 268435455;
  i[n++] = d >>> 8 & 255, i[n++] = d & 255, i[n++] = d >>> 24 & 15 | 16, i[n++] = d >>> 16 & 255, i[n++] = o >>> 8 | 128, i[n++] = o & 255;
  for (var p = 0; p < 6; ++p)
    i[n + p] = a[p];
  return t || PC(i);
}
var EC = DC, RC = Sy, OC = Cy;
function kC(e, t, r) {
  var n = t && r || 0;
  typeof e == "string" && (t = e === "binary" ? new Array(16) : null, e = null), e = e || {};
  var i = e.random || (e.rng || RC)();
  if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, t)
    for (var a = 0; a < 16; ++a)
      t[n + a] = i[a];
  return t || OC(i);
}
var _y = kC;
const Ty = /* @__PURE__ */ nr(_y);
var AC = EC, Py = _y, vf = Py;
vf.v1 = AC;
vf.v4 = Py;
var Dy = vf;
const cr = /* @__PURE__ */ nr(Dy), Ct = {
  default: {
    type: "default",
    color: "gray",
    colorCode: "#d2d6de"
  },
  primary: {
    type: "primary",
    color: "light-blue",
    colorCode: "#3c8dbc"
  },
  info: {
    type: "info",
    color: "aqua",
    colorCode: "#00c0ef"
  },
  success: {
    type: "success",
    color: "green",
    colorCode: "#00a65a"
  },
  warning: {
    type: "warning",
    color: "yellow",
    colorCode: "#f39c12"
  },
  danger: {
    type: "danger",
    color: "red",
    colorCode: "#f56954"
  }
}, IC = {
  byType: Ct,
  byColor: {
    "light-blue": Ct.primary,
    aqua: Ct.info,
    green: Ct.success,
    yellow: Ct.warning,
    red: Ct.danger,
    gray: Ct.default,
    navy: Ct.default,
    teal: Ct.default,
    purple: Ct.default,
    orange: Ct.default,
    maroon: Ct.default,
    black: Ct.default
  },
  byColorCode: {
    d2d6de: Ct.default,
    "3c8dbc": Ct.primary,
    "00c0ef": Ct.info,
    "00a65a": Ct.success,
    f39c12: Ct.warning,
    f56954: Ct.danger
  }
}, Lt = (e) => {
  const t = e ? e.match(/^([fab|fas|far]*)-?(.+)/) : null;
  if (t != null) {
    const [r, n] = t.splice(1, 2).filter((i) => i.length > 0);
    return [r, n];
  }
  return ["far", "question-circle"];
}, Nr = (e, t) => {
  if (e === void 0 && t === void 0 || e === null && t === null)
    return !0;
  if (!t || !e || e.length !== t.length)
    return !1;
  for (let r = 0, n = e.length; r < n; r++)
    if (e[r] instanceof Array && t[r] instanceof Array) {
      if (!Nr(e[r], t[r]))
        return !1;
    } else if (e[r] !== t[r])
      return !1;
  return !0;
}, Gp = ({ link: e, activeOn: t, history: r }) => {
  const { location: n } = r || {}, { pathname: i } = n || { pathname: "" };
  let a = [];
  return t && (a = t.length && typeof t != "string" ? t : [t]), i === e || !!a.find((s) => i.match(new RegExp(s)));
}, Ey = ({
  id: e,
  icon: t = "far-circle",
  text: r,
  labels: n,
  color: i,
  history: a,
  children: o,
  activeOn: s,
  to: l,
  highlighted: u = !1
}) => {
  const c = l, f = Gp({ link: c, activeOn: s, history: a });
  let d;
  n ? Array.isArray(n) ? d = n : d = [n] : d = [];
  const p = d.map((N) => N.small ? /* @__PURE__ */ _("small", { className: `label pull-right bg-${N.color}`, children: N.text }, cr()) : /* @__PURE__ */ _("span", { className: `label label-${N.type} pull-right`, children: N.text }, cr())), m = i ? IC.byColor[i].colorCode : "#d2d6de", S = Lt(t), w = !!o, C = Array.isArray(d);
  let y, T = !1;
  w && (Array.isArray(o) ? y = o : y = [o], y = y.filter((N) => N && N instanceof Ue).map((N) => pe.cloneElement(N, { key: N.props.to })), T = !!y.find((N) => Gp({
    history: a,
    link: N.props.to || N.props.link,
    ...N.props
  })));
  let R = /* @__PURE__ */ ie(Qt, { children: [
    /* @__PURE__ */ _(
      Xe,
      {
        color: m,
        icon: S,
        style: { marginRight: "6px" }
      }
    ),
    " ",
    /* @__PURE__ */ _("span", { children: r }),
    (w || C) && /* @__PURE__ */ ie("span", { className: "pull-right-container", children: [
      w && /* @__PURE__ */ _(Xe, { className: "pull-right", icon: "angle-left" }),
      C && p
    ] })
  ] });
  c ? R = /* @__PURE__ */ _(Pr, { to: c, children: R }) : R = // eslint-disable-next-line no-script-url, jsx-a11y/anchor-is-valid
  /* @__PURE__ */ _("a", { href: "#", children: R });
  const P = [
    f ? "active" : null,
    w ? "treeview" : null,
    T ? "menu-open" : null,
    u ? "highlighted" : void 0
  ].filter((N) => N).join(" ");
  return /* @__PURE__ */ ie("li", { className: P, id: e, children: [
    R,
    w && /* @__PURE__ */ _("ul", { className: "treeview-menu", style: { display: T ? "block" : "none" }, children: o })
  ] });
};
Ey.defaultProps = {
  id: void 0,
  children: void 0,
  icon: "far-circle",
  labels: void 0,
  color: void 0,
  activeOn: void 0,
  to: void 0,
  highlighted: !1
};
const Ry = wy(Ey), NC = ({ text: e }) => /* @__PURE__ */ _("li", { className: "header", children: e });
class gf extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", {});
  }
  render() {
    const {
      imageUrl: r,
      username: n,
      link: i,
      status: a,
      statusType: o
    } = this.props, s = i ? Pr : pe.Fragment;
    return /* @__PURE__ */ ie("div", { className: "user-panel", children: [
      /* @__PURE__ */ _("div", { className: "pull-left image", children: /* @__PURE__ */ _("img", { src: r, className: "img-circle", alt: "User" }) }),
      /* @__PURE__ */ ie("div", { className: "pull-left info", children: [
        /* @__PURE__ */ _("p", { children: n }),
        /* @__PURE__ */ ie(s, { to: i, children: [
          /* @__PURE__ */ _(Xe, { icon: ["fas", "circle"], className: `text-${o}` }),
          " ",
          a
        ] })
      ] })
    ] });
  }
}
oe(gf, "defaultProps", {
  imageUrl: void 0,
  link: "#",
  status: "",
  statusType: "success"
});
class mi extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", {});
  }
  render() {
    const {
      includeButton: r,
      onButtonClick: n,
      onChange: i,
      placeholder: a,
      value: o,
      defaultValue: s
    } = this.props;
    return /* @__PURE__ */ _("div", { className: "sidebar-form", children: /* @__PURE__ */ ie("div", { className: "input-group", children: [
      /* @__PURE__ */ _(
        "input",
        {
          type: "text",
          name: "sidebar-search",
          className: "form-control",
          placeholder: a,
          onChange: i,
          value: o,
          defaultValue: s
        }
      ),
      r && /* @__PURE__ */ _("span", { className: "input-group-btn", children: /* @__PURE__ */ _(
        "button",
        {
          type: "submit",
          name: "search",
          id: "search-btn",
          className: "btn btn-flat",
          onClick: n,
          children: /* @__PURE__ */ _(Xe, { icon: ["fas", "search"] })
        }
      ) })
    ] }) });
  }
}
oe(mi, "defaultProps", {
  includeButton: !0,
  onButtonClick: void 0,
  onChange: void 0,
  placeholder: void 0,
  value: void 0,
  defaultValue: void 0
});
class xi extends Ue {
  constructor(r) {
    super(r);
    oe(this, "widgetReference", null);
    this.state = {
      searchValue: ""
    }, this.onSearchValueChange = this.onSearchValueChange.bind(this);
  }
  componentDidMount() {
    Re(this.widgetReference).tree();
  }
  onSearchValueChange(r) {
    const { target: { value: n } } = r;
    this.setState({ searchValue: n });
  }
  render() {
    const { children: r, searchbarFilter: n } = this.props;
    let i;
    if (r ? r ? i = r : i = [r] : i = [], n) {
      const a = i.find((o) => o instanceof mi);
      if (a) {
        const o = i.findIndex((u) => u instanceof mi), s = [];
        for (let u = 0; u < i.length; ++u)
          if (u !== o)
            s.push(i[u]);
          else {
            const { onChange: c, ...f } = a.props;
            s.push(pe.cloneElement(a, { onChange: this.onSearchValueChange, ...f }));
          }
        i = s;
        const { searchValue: l } = this.state;
        if (l.length > 0) {
          const u = function d(p) {
            if (!p.props)
              return [];
            const { children: m, ...S } = p.props, w = pe.cloneElement(p, S, null);
            if (m) {
              let C;
              return typeof m != "string" && m.length ? C = m.map(d).flat() : C = d(m), C.push(w), C;
            }
            return [w];
          }, c = i.filter((d) => d instanceof Ry).map(u).flat().filter((d) => d.props.to);
          i = i.filter((d) => d instanceof gf || d instanceof mi).concat(c.filter((d) => d.props.text.toUpperCase().indexOf(l.toUpperCase()) > -1));
        }
      }
    }
    return /* @__PURE__ */ _("aside", { className: "main-sidebar", children: /* @__PURE__ */ _("section", { className: "sidebar", children: /* @__PURE__ */ _("ul", { className: "sidebar-menu", "data-widget": "tree", ref: (a) => {
      this.widgetReference = a;
    }, children: i }) }) });
  }
}
oe(xi, "defaultProps", {
  children: null,
  searchbarFilter: !1
});
const Q1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Core: xi,
  Header: NC,
  Item: Ry,
  Searchbar: mi,
  UserPanel: gf,
  default: xi
}, Symbol.toStringTag, { value: "Module" }));
var xc;
let MC = (xc = class extends Ue {
  componentDidMount() {
    const { browserTitle: t } = this.props;
    t && (document.title = t);
  }
  isModal() {
    const { modal: t } = this.props;
    return t;
  }
  render() {
    const {
      title: t,
      subTitle: r,
      homeRoute: n = "/",
      modal: i,
      modalCloseTo: a,
      show: o = !0,
      modalFooter: s,
      children: l,
      history: u,
      onHide: c,
      modalSize: f,
      modalType: d,
      modalCloseButton: p
    } = this.props;
    if (i) {
      const m = d ? `modal-${d}` : void 0;
      return /* @__PURE__ */ ie(
        Ir,
        {
          backdrop: !0,
          show: o,
          onHide: () => {
            a && u.push(a), c && c();
          },
          onExited: () => {
            a && u.push(a);
          },
          bsSize: f,
          dialogClassName: m,
          enforceFocus: !1,
          children: [
            /* @__PURE__ */ _(Ir.Header, { closeButton: p, children: /* @__PURE__ */ _(Ir.Title, { children: t }) }),
            /* @__PURE__ */ _(Ir.Body, { children: l }),
            s && /* @__PURE__ */ _(Ir.Footer, { children: s })
          ]
        }
      );
    }
    return /* @__PURE__ */ ie(Qt, { children: [
      /* @__PURE__ */ ie("section", { className: "content-header", children: [
        /* @__PURE__ */ ie("h1", { children: [
          t,
          " ",
          r ? /* @__PURE__ */ _("small", { children: r }) : ""
        ] }),
        /* @__PURE__ */ ie("ol", { className: "breadcrumb", children: [
          /* @__PURE__ */ _("li", { children: /* @__PURE__ */ ie(Pr, { to: n, children: [
            /* @__PURE__ */ _(Xe, { icon: ["fas", "tachometer-alt"] }),
            " Home"
          ] }) }),
          /* @__PURE__ */ _("li", { className: "active", children: t })
        ] })
      ] }),
      /* @__PURE__ */ _("section", { className: "content", children: l })
    ] });
  }
}, oe(xc, "defaultProps", {
  title: void 0,
  subTitle: void 0,
  homeRoute: "/",
  modal: !1,
  modalCloseTo: void 0,
  show: !0,
  modalFooter: void 0,
  browserTitle: void 0,
  history: void 0,
  onHide: void 0,
  modalSize: void 0,
  modalType: void 0,
  modalCloseButton: !0
}), xc);
const tk = wy(MC), LC = "adminlte-2-react", FC = "0.3.0-beta.1", jC = "AdminLTE 2.x.x. template ported to React", qC = "module", WC = [
  "dist"
], HC = "./dist/index.umd.cjs", VC = "./dist/index.js", BC = "./dist/index.d.ts", UC = {
  ".": {
    require: "./dist/index.umd.cjs",
    import: "./dist/index.js",
    types: "./dist/index.d.ts"
  }
}, $C = {
  test: "jest",
  start: "vite",
  build: "tsc && vite build",
  "build:vite-analyze": "npx vite-bundle-visualizer",
  lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
}, zC = [
  "AdminLTE",
  "admin-lte",
  "react",
  "reactjs",
  "admin",
  "template",
  "bootstrap",
  "datatables",
  "select2",
  "react-datetime",
  "react-dates",
  "icheck"
], YC = {
  name: "Nikolaus Sperat",
  email: "niko@sper.at"
}, GC = "MIT", XC = {
  type: "git",
  url: "git+https://github.com/sd1337/adminlte-2-react.git"
}, KC = {
  jquery: "^3.6.0",
  react: "^16.14.0",
  "react-dom": "^16.14.0"
}, JC = {
  "@babel/preset-typescript": "^7.15.0",
  "@fortawesome/fontawesome-common-types": "^0.2.36",
  "@fortawesome/fontawesome-svg-core": "^1.2.36",
  "@fortawesome/free-brands-svg-icons": "^5.15.4",
  "@fortawesome/free-regular-svg-icons": "^5.15.4",
  "@fortawesome/free-solid-svg-icons": "^5.15.4",
  "@fortawesome/react-fontawesome": "^0.1.15",
  bootstrap: "^3.3.7",
  "browserify-css": "0.12.0",
  "datatables.net-bs": "^1.11.3",
  "datatables.net-select-bs": "^1.3.3",
  fullcalendar: "^6.1.10",
  icheck: "^1.0.2",
  jquery: "^3.6.0",
  "jquery-sparkline": "^2.4.0",
  "jquery-ui": "^1.13.0",
  moment: "^2.29.1",
  "prop-types": "^15.6.2",
  "rc-slider": "^8.7.1",
  "rc-tooltip": "^3.7.3",
  react: "^16.14.0",
  "react-animate-height": "^2.0.23",
  "react-bootstrap": "^0.32.4",
  "react-dates": "^21.8.0",
  "react-datetime": "^2.16.3",
  "react-dom": "^16.14.0",
  "react-draggable": "^4.4.4",
  "react-fontawesome": "^1.7.1",
  "react-ionicons": "^2.1.6",
  "react-moment-proptypes": "^1.8.1",
  "react-router-dom": "^4.3.1",
  "react-router-prop-types": "^1.0.5",
  "react-select": "^2.4.4",
  select2: "^4.0.13",
  "source-sans": "^3.46.0",
  uuid: "^3.4.0"
}, ZC = {
  "@microsoft/api-extractor": "^7.18.16",
  "@rollup/plugin-inject": "^5.0.5",
  "@types/icheck": "^1.0.1",
  "@types/jest": "^27.0.2",
  "@types/jquery": "^3.5.7",
  "@types/jqueryui": "^1.12.21",
  "@types/node": "^20.10.0",
  "@types/rc-tooltip": "^3.7.3",
  "@types/react": "^17.0.30",
  "@types/react-bootstrap": "^0.32.28",
  "@types/react-dates": "^21.8.3",
  "@types/react-dom": "^17.0.9",
  "@types/react-router-dom": "^5.3.1",
  "@types/select2": "^4.0.54",
  "@types/uuid": "^3.4.0",
  "@typescript-eslint/eslint-plugin": "^5.0.0",
  "@typescript-eslint/parser": "^5.0.0",
  "@vitejs/plugin-react": "^4.2.1",
  eslint: "^8.53.0",
  "eslint-config-airbnb": "^19.0.4",
  "eslint-config-airbnb-typescript": "^17.1.0",
  "eslint-plugin-import": "^2.29.0",
  "eslint-plugin-jsx-a11y": "^6.8.0",
  "eslint-plugin-react": "^7.33.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  jest: "^24.9.0",
  sass: "^1.69.6",
  typescript: "^5.2.2",
  vite: "^5.0.8",
  "vite-plugin-dts": "^3.7.0"
}, QC = {
  setupFiles: [
    "./src/setup-jest.js"
  ],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/components/tests/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/src/components/tests/styleMock.js"
  }
}, e_ = [
  ">1%",
  "last 4 versions",
  "Firefox ESR",
  "not ie < 9"
], t_ = {
  name: LC,
  version: FC,
  description: jC,
  type: qC,
  files: WC,
  main: HC,
  module: VC,
  types: BC,
  exports: UC,
  scripts: $C,
  keywords: zC,
  author: YC,
  license: GC,
  repository: XC,
  peerDependencies: KC,
  dependencies: JC,
  devDependencies: ZC,
  jest: QC,
  browserslist: e_
}, { name: r_, version: n_, repository: { url: i_ } } = t_, Oy = ({ children: e, includeVersionInfo: t }) => /* @__PURE__ */ ie("footer", { className: "main-footer", children: [
  t && /* @__PURE__ */ ie("div", { className: "pull-right hidden-xs", children: [
    /* @__PURE__ */ _("a", { href: i_.replace("git+", ""), target: "_blank", rel: "noopener noreferrer", children: r_ }),
    " v",
    n_
  ] }),
  " ",
  e
] });
Oy.defaultProps = {
  children: null,
  includeVersionInfo: !0
};
class a_ extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", {});
  }
  render() {
    return /* @__PURE__ */ ie("div", { children: [
      /* @__PURE__ */ ie("aside", { className: "control-sidebar control-sidebar-dark", children: [
        /* @__PURE__ */ ie("ul", { className: "nav nav-tabs nav-justified control-sidebar-tabs", children: [
          /* @__PURE__ */ _("li", { children: /* @__PURE__ */ _("a", { href: "#control-sidebar-home-tab", "data-toggle": "tab", children: /* @__PURE__ */ _("i", { className: "fa fa-home" }) }) }),
          /* @__PURE__ */ _("li", { children: /* @__PURE__ */ _("a", { href: "#control-sidebar-settings-tab", "data-toggle": "tab", children: /* @__PURE__ */ _("i", { className: "fa fa-gears" }) }) })
        ] }),
        /* @__PURE__ */ ie("div", { className: "tab-content", children: [
          /* @__PURE__ */ ie("div", { className: "tab-pane", id: "control-sidebar-home-tab", children: [
            /* @__PURE__ */ _("h3", { className: "control-sidebar-heading", children: "Recent Activity" }),
            /* @__PURE__ */ _("ul", { className: "control-sidebar-menu", children: /* @__PURE__ */ _("li", { children: /* @__PURE__ */ ie("a", { children: [
              /* @__PURE__ */ _("i", { className: "menu-icon fa fa-birthday-cake bg-red" }),
              /* @__PURE__ */ ie("div", { className: "menu-info", children: [
                /* @__PURE__ */ _("h4", { className: "control-sidebar-subheading", children: "Langdon's Birthday" }),
                /* @__PURE__ */ _("p", { children: "Will be 23 on April 24th" })
              ] })
            ] }) }) }),
            /* @__PURE__ */ _("h3", { className: "control-sidebar-heading", children: "Tasks Progress" }),
            /* @__PURE__ */ _("ul", { className: "control-sidebar-menu", children: /* @__PURE__ */ _("li", { children: /* @__PURE__ */ ie("a", { children: [
              /* @__PURE__ */ ie("h4", { className: "control-sidebar-subheading", children: [
                "Custom Template Design",
                /* @__PURE__ */ _("span", { className: "label label-danger pull-right", children: "70%" })
              ] }),
              /* @__PURE__ */ _("div", { className: "progress progress-xxs", children: /* @__PURE__ */ _("div", { className: "progress-bar progress-bar-danger", style: { width: "70%" } }) })
            ] }) }) })
          ] }),
          /* @__PURE__ */ _("div", { className: "tab-pane", id: "control-sidebar-settings-tab", children: /* @__PURE__ */ _("form", { method: "post" }) })
        ] })
      ] }),
      /* @__PURE__ */ _("div", { className: "control-sidebar-bg" })
    ] });
  }
}
const ky = ({
  icon: e,
  labelType: t,
  labelValue: r = 0,
  headerText: n,
  footerText: i,
  onFooterClick: a,
  className: o,
  children: s,
  onClick: l
}) => {
  const c = !!e ? Lt(e) : null;
  r = r || (s ? s.length || 1 : 0), n = n ? n.replace("#value#", r.toString()) : void 0;
  const f = !!s, d = [
    "navbar-menu",
    f ? "dropdown" : null,
    o
  ].filter((p) => p).join(" ");
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    /* @__PURE__ */ ie("li", { className: d, onClick: l, children: [
      /* @__PURE__ */ ie("a", { href: "/", className: "dropdown-toggle", "data-toggle": "dropdown", children: [
        /* @__PURE__ */ _(Xe, { icon: c }),
        r > 0 && /* @__PURE__ */ _("span", { className: `label label-${t}`, children: r })
      ] }),
      f && /* @__PURE__ */ ie("ul", { className: "dropdown-menu", children: [
        n && /* @__PURE__ */ _("li", { className: "header", children: n }),
        /* @__PURE__ */ _("li", { children: /* @__PURE__ */ _("ul", { className: "menu", children: s }) }),
        i && /* @__PURE__ */ _("li", { onClick: a, onKeyPress: a, className: "footer", children: /* @__PURE__ */ _("div", { children: i }) })
      ] })
    ] })
  );
};
ky.defaultProps = {
  icon: void 0,
  labelType: "success",
  labelValue: 0,
  headerText: void 0,
  footerText: void 0,
  onFooterClick: void 0,
  className: void 0,
  onClick: void 0,
  children: void 0
};
const Ay = ({
  imageUrl: e,
  imageAlt: t,
  onClick: r,
  text: n,
  subText: i,
  when: a,
  whenFormats: o
}) => {
  const {
    minutes: s,
    hours: l,
    yesterday: u,
    days: c,
    today: f
  } = o || {}, d = Fr.duration(Fr().diff(a)), p = d.asMinutes();
  let m;
  if (p < 60)
    m = `${p.toFixed(0)} ${s}`;
  else {
    const S = d.asHours();
    S < 12 ? m = `${S.toFixed(0)} ${l}` : S < 24 ? m = f : d.asDays().toFixed(0) === "1" ? m = u : m = a !== null ? a.format(c) : null;
  }
  return /* @__PURE__ */ _("li", { className: "message-item", children: /* @__PURE__ */ ie("a", { onClick: r, children: [
    e && /* @__PURE__ */ _("div", { className: "pull-left", children: /* @__PURE__ */ _("img", { src: e, className: "img-circle", alt: t }) }),
    /* @__PURE__ */ ie("h4", { children: [
      n,
      a && /* @__PURE__ */ ie("small", { children: [
        /* @__PURE__ */ _(Xe, { icon: ["far", "clock"] }),
        " ",
        m
      ] })
    ] }),
    i && /* @__PURE__ */ _("p", { children: i })
  ] }) });
};
Ay.defaultProps = {
  imageUrl: void 0,
  imageAlt: void 0,
  subText: void 0,
  onClick: void 0,
  when: void 0,
  whenFormats: {
    minutes: "mins",
    hours: "hours",
    today: "today",
    yesterday: "yesterday",
    days: "DD.MM.YYYY"
  }
};
const Iy = ({
  icon: e,
  iconColor: t,
  text: r,
  to: n,
  onClick: i
}) => {
  const a = Lt(e);
  return /* @__PURE__ */ _("li", { className: "notification-item", children: n ? /* @__PURE__ */ ie(Pr, { to: n, children: [
    /* @__PURE__ */ _(Xe, { icon: a, className: `text-${t}` }),
    /* @__PURE__ */ _("span", { style: { paddingLeft: "5px" }, children: ` ${r}` })
  ] }) : (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ ie("div", { onClick: i, children: [
      /* @__PURE__ */ _(Xe, { icon: a, className: `text-${t}` }),
      /* @__PURE__ */ _("span", { style: { paddingLeft: "5px" }, children: ` ${r}` })
    ] })
  ) });
};
Iy.defaultProps = {
  icon: void 0,
  iconColor: void 0,
  to: void 0,
  onClick: void 0
};
const Ny = ({
  value: e,
  barColor: t,
  text: r,
  to: n,
  onClick: i,
  min: a,
  max: o
}) => {
  const s = /* @__PURE__ */ ie(Qt, { children: [
    /* @__PURE__ */ ie("h3", { children: [
      r,
      /* @__PURE__ */ _("small", { className: "pull-right", children: `${e}%` })
    ] }),
    /* @__PURE__ */ _("div", { className: "progress xs", children: /* @__PURE__ */ _(
      "div",
      {
        className: `progress-bar progress-bar-${t}`,
        style: { width: `${e}%` },
        role: "progressbar",
        "aria-valuenow": e,
        "aria-valuemin": a,
        "aria-valuemax": o,
        children: /* @__PURE__ */ _("span", { className: "sr-only", children: `${e}% Complete` })
      }
    ) })
  ] });
  return /* @__PURE__ */ _("li", { className: "task-item", children: n ? /* @__PURE__ */ _(Pr, { href: n, to: n, children: s }) : /* @__PURE__ */ _("div", { onClick: i, children: s }) });
};
Ny.defaultProps = {
  min: 0,
  max: 100,
  to: void 0,
  onClick: void 0
};
class My extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", {});
  }
  render() {
    return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ _("a", { "data-toggle": "control-sidebar", children: /* @__PURE__ */ _("i", { className: "fa fa-gears" }) }) });
  }
}
const mf = ({ additionalMenus: e, children: t }) => /* @__PURE__ */ ie("ul", { className: "nav navbar-nav", children: [
  t,
  e
] });
mf.defaultProps = {
  additionalMenus: null,
  children: null
};
const rk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ControlSidebarEntry: My,
  Core: mf,
  Entry: ky,
  MessageItem: Ay,
  NotificationItem: Iy,
  TaskItem: Ny
}, Symbol.toStringTag, { value: "Module" })), o_ = ({
  id: e,
  icon: t,
  text: r,
  number: n,
  color: i,
  progress: a,
  progressText: o,
  iconColorOnly: s
}) => {
  const l = !!o, u = !!o, c = t.startsWith("ion") || t.startsWith("ios"), f = Lt(t), d = c ? /* @__PURE__ */ _(sy, { icon: t, fontSize: "45px", color: "#ffffff" }) : /* @__PURE__ */ _(Xe, { icon: f }), p = s ? "info-box" : `info-box bg-${i}`, m = c ? " info-box-ionicon" : "", S = s ? `info-box-icon bg-${i}${m}` : `info-box-icon${m}`;
  return /* @__PURE__ */ ie("div", { id: e, className: p, children: [
    /* @__PURE__ */ _("span", { className: S, children: d }),
    /* @__PURE__ */ ie("div", { className: "info-box-content", children: [
      /* @__PURE__ */ _("span", { className: "info-box-text", children: r }),
      /* @__PURE__ */ _("span", { className: "info-box-number", children: n }),
      u && /* @__PURE__ */ _("div", { className: "progress", children: /* @__PURE__ */ _("div", { className: s ? "progress-bar progress-icon-only" : "progress-bar", style: { width: `${a}%` } }) }),
      l && /* @__PURE__ */ _("span", { className: "progress-description", children: o })
    ] })
  ] });
};
o_.defaultProps = {
  id: void 0,
  text: void 0,
  number: null,
  color: void 0,
  progress: void 0,
  progressText: void 0,
  iconColorOnly: !0
};
var Ly = {}, Fy = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var a = "", o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        s && (a = i(a, n(s)));
      }
      return a;
    }
    function n(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return r.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var o = "";
      for (var s in a)
        t.call(a, s) && a[s] && (o = i(o, s));
      return o;
    }
    function i(a, o) {
      return o ? a ? a + " " + o : a + o : a;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Fy);
var yf = Fy.exports;
const bn = /* @__PURE__ */ nr(yf);
Object.defineProperty(Ly, "__esModule", {
  value: !0
});
var s_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
  return typeof e;
} : function(e) {
  return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, us = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, l_ = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}(), u_ = pe, cs = bf(u_), c_ = Xn, Gt = bf(c_), f_ = yf, fs = bf(f_);
function bf(e) {
  return e && e.__esModule ? e : { default: e };
}
function hr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function d_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function p_(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function h_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var jy = {
  animating: "rah-animating",
  animatingUp: "rah-animating--up",
  animatingDown: "rah-animating--down",
  animatingToHeightZero: "rah-animating--to-height-zero",
  animatingToHeightAuto: "rah-animating--to-height-auto",
  animatingToHeightSpecific: "rah-animating--to-height-specific",
  static: "rah-static",
  staticHeightZero: "rah-static--height-zero",
  staticHeightAuto: "rah-static--height-auto",
  staticHeightSpecific: "rah-static--height-specific"
}, v_ = ["animateOpacity", "animationStateClasses", "applyInlineTransitions", "children", "contentClassName", "delay", "duration", "easing", "height", "onAnimationEnd", "onAnimationStart"];
function g_(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (!r.length)
    return e;
  for (var i = {}, a = Object.keys(e), o = 0; o < a.length; o++) {
    var s = a[o];
    r.indexOf(s) === -1 && (i[s] = e[s]);
  }
  return i;
}
function m_(e) {
  var t = [];
  return t[0] = requestAnimationFrame(function() {
    t[1] = requestAnimationFrame(function() {
      e();
    });
  }), t;
}
function Xp(e) {
  e.forEach(function(t) {
    return cancelAnimationFrame(t);
  });
}
function Ec(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Rc(e) {
  return typeof e == "string" && e.search("%") === e.length - 1 && Ec(e.substr(0, e.length - 1));
}
function oa(e, t) {
  e && typeof e == "function" && e(t);
}
var wf = function(e) {
  h_(t, e);
  function t(r) {
    d_(this, t);
    var n = p_(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
    n.animationFrameIDs = [];
    var i = "auto", a = "visible";
    Ec(r.height) ? (i = r.height < 0 || r.height === "0" ? 0 : r.height, a = "hidden") : Rc(r.height) && (i = r.height === "0%" ? 0 : r.height, a = "hidden"), n.animationStateClasses = us({}, jy, r.animationStateClasses);
    var o = n.getStaticStateClasses(i), s = typeof window < "u";
    return s && window.matchMedia && (n.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion)").matches), n.state = {
      animationStateClasses: o,
      height: i,
      overflow: a,
      shouldUseTransitions: !1
    }, n;
  }
  return l_(t, [{
    key: "componentDidMount",
    value: function() {
      var n = this.state.height;
      this.contentElement && this.contentElement.style && this.hideContent(n);
    }
  }, {
    key: "componentDidUpdate",
    value: function(n, i) {
      var a = this, o = this.props, s = o.height, l = o.onAnimationEnd, u = o.onAnimationStart, c = this.getTimings(), f = c.duration, d = c.delay;
      if (this.contentElement && s !== n.height) {
        var p;
        this.showContent(i.height), this.contentElement.style.overflow = "hidden";
        var m = this.contentElement.offsetHeight;
        this.contentElement.style.overflow = "";
        var S = f + d, w = null, C = {
          height: null,
          // it will be always set to either 'auto' or specific number
          overflow: "hidden"
        }, y = i.height === "auto";
        Ec(s) ? (w = s < 0 || s === "0" ? 0 : s, C.height = w) : Rc(s) ? (w = s === "0%" ? 0 : s, C.height = w) : (w = m, C.height = "auto", C.overflow = null), y && (C.height = w, w = m);
        var T = (0, fs.default)((p = {}, hr(p, this.animationStateClasses.animating, !0), hr(p, this.animationStateClasses.animatingUp, n.height === "auto" || s < n.height), hr(p, this.animationStateClasses.animatingDown, s === "auto" || s > n.height), hr(p, this.animationStateClasses.animatingToHeightZero, C.height === 0), hr(p, this.animationStateClasses.animatingToHeightAuto, C.height === "auto"), hr(p, this.animationStateClasses.animatingToHeightSpecific, C.height > 0), p)), R = this.getStaticStateClasses(C.height);
        this.setState({
          // eslint-disable-line react/no-did-update-set-state
          animationStateClasses: T,
          height: w,
          overflow: "hidden",
          // When animating from 'auto' we first need to set fixed height
          // that change should be animated
          shouldUseTransitions: !y
        }), clearTimeout(this.timeoutID), clearTimeout(this.animationClassesTimeoutID), y ? (C.shouldUseTransitions = !0, Xp(this.animationFrameIDs), this.animationFrameIDs = m_(function() {
          a.setState(C), oa(u, { newHeight: C.height });
        }), this.animationClassesTimeoutID = setTimeout(function() {
          a.setState({
            animationStateClasses: R,
            shouldUseTransitions: !1
          }), a.hideContent(C.height), oa(l, { newHeight: C.height });
        }, S)) : (oa(u, { newHeight: w }), this.timeoutID = setTimeout(function() {
          C.animationStateClasses = R, C.shouldUseTransitions = !1, a.setState(C), s !== "auto" && a.hideContent(w), oa(l, { newHeight: w });
        }, S));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      Xp(this.animationFrameIDs), clearTimeout(this.timeoutID), clearTimeout(this.animationClassesTimeoutID), this.timeoutID = null;
    }
  }, {
    key: "getTimings",
    value: function() {
      if (this.prefersReducedMotion)
        return {
          delay: 0,
          duration: 0
        };
      var n = this.props, i = n.delay, a = n.duration;
      return {
        delay: i,
        duration: a
      };
    }
  }, {
    key: "showContent",
    value: function(n) {
      n === 0 && (this.contentElement.style.display = "");
    }
  }, {
    key: "hideContent",
    value: function(n) {
      n === 0 && (this.contentElement.style.display = "none");
    }
  }, {
    key: "getStaticStateClasses",
    value: function(n) {
      var i;
      return (0, fs.default)((i = {}, hr(i, this.animationStateClasses.static, !0), hr(i, this.animationStateClasses.staticHeightZero, n === 0), hr(i, this.animationStateClasses.staticHeightSpecific, n > 0), hr(i, this.animationStateClasses.staticHeightAuto, n === "auto"), i));
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this, a = this.props, o = a.animateOpacity, s = a.applyInlineTransitions, l = a.children, u = a.className, c = a.contentClassName, f = a.easing, d = a.id, p = a.style, m = this.state, S = m.height, w = m.overflow, C = m.animationStateClasses, y = m.shouldUseTransitions, T = this.getTimings(), R = T.duration, P = T.delay, N = us({}, p, {
        height: S,
        overflow: w || p.overflow
      });
      y && s && (N.transition = "height " + R + "ms " + f + " " + P + "ms", p.transition && (N.transition = p.transition + ", " + N.transition), N.WebkitTransition = N.transition);
      var L = {};
      o && (L.transition = "opacity " + R + "ms " + f + " " + P + "ms", L.WebkitTransition = L.transition, S === 0 && (L.opacity = 0));
      var W = (0, fs.default)((n = {}, hr(n, C, !0), hr(n, u, u), n)), Y = typeof this.props["aria-hidden"] < "u", re = Y ? this.props["aria-hidden"] : S === 0;
      return cs.default.createElement(
        "div",
        us({}, g_.apply(void 0, [this.props].concat(v_)), {
          "aria-hidden": re,
          className: W,
          id: d,
          style: N
        }),
        cs.default.createElement(
          "div",
          {
            className: c,
            style: L,
            ref: function(Q) {
              return i.contentElement = Q;
            }
          },
          l
        )
      );
    }
  }]), t;
}(cs.default.Component), y_ = function(t, r, n) {
  var i = t[r];
  return typeof i == "number" && i >= 0 || Rc(i) || i === "auto" ? null : new TypeError('value "' + i + '" of type "' + (typeof i > "u" ? "undefined" : s_(i)) + '" is invalid type for ' + r + " in " + n + '. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").');
};
wf.propTypes = {
  "aria-hidden": Gt.default.bool,
  animateOpacity: Gt.default.bool,
  animationStateClasses: Gt.default.object,
  applyInlineTransitions: Gt.default.bool,
  children: Gt.default.any.isRequired,
  className: Gt.default.string,
  contentClassName: Gt.default.string,
  delay: Gt.default.number,
  duration: Gt.default.number,
  easing: Gt.default.string,
  height: y_,
  id: Gt.default.string,
  onAnimationEnd: Gt.default.func,
  onAnimationStart: Gt.default.func,
  style: Gt.default.object
};
wf.defaultProps = {
  animateOpacity: !1,
  animationStateClasses: jy,
  applyInlineTransitions: !0,
  duration: 250,
  delay: 0,
  easing: "ease",
  style: {}
};
var Kp = Ly.default = wf;
function Sf({ icon: e, size: t }) {
  return /* @__PURE__ */ _("div", { className: "overlay", children: /* @__PURE__ */ _(Xe, { spin: !0, icon: Lt(e), size: t }) });
}
Sf.propTypes = {
  icon: D.string,
  size: D.string
};
Sf.defaultProps = {
  icon: "fas-sync-alt",
  size: "3x"
};
class xf extends Ue {
  constructor(r) {
    super(r);
    oe(this, "close", () => {
      this.setState({
        closing: !0
      });
    });
    oe(this, "toggleHide", () => {
      const { collapsed: r } = this.state;
      this.setState({
        collapsed: !r
      });
    });
    oe(this, "main", null);
    this.state = {
      // eslint-disable-next-line react/destructuring-assignment
      collapsed: this.props.collapsed,
      closing: !1,
      closed: !1
    };
  }
  componentDidMount() {
  }
  render() {
    const {
      type: r,
      options: n,
      icon: i,
      title: a,
      titleRight: o,
      collapsable: s,
      closable: l,
      loaded: u,
      noPadding: c,
      badge: f,
      toolIcon: d,
      customOptions: p,
      className: m,
      footerClass: S,
      solid: w,
      textCenter: C,
      padding: y,
      bodyClassName: T,
      border: R,
      style: P,
      footer: N,
      header: L,
      children: W,
      id: Y
    } = this.props, { collapsed: re, closing: z, closed: Q } = this.state;
    if (Q)
      return /* @__PURE__ */ _(Qt, {});
    const se = Lt(d), X = !!n, ee = !!N, J = !!L, ue = !!i, ce = ue ? Lt(i) : null, V = X || J || ue || a !== " " || s || l || f || p, h = [
      "box",
      r && `box-${r}`,
      m || "",
      // collapsed && 'collapsed-box',
      w && " box-solid"
      // closing && ' box-closing',
    ].filter((b) => b).join(" "), v = [
      "box-body",
      c ? "no-padding" : "",
      C ? "text-center" : "",
      y ? "pad" : "",
      T
    ].filter((b) => b).join(" "), g = [
      "box-header",
      R ? "with-border" : ""
    ].filter((b) => b).join(" ");
    return /* @__PURE__ */ _(
      Kp,
      {
        duration: 500,
        height: z ? "0%" : "auto",
        children: /* @__PURE__ */ ie(
          "div",
          {
            id: Y,
            ref: (b) => {
              this.main = b;
            },
            className: h,
            style: P,
            children: [
              V && /* @__PURE__ */ ie("div", { className: g, children: [
                /* @__PURE__ */ ie("h3", { className: `box-title${o ? " pull-right" : ""}`, children: [
                  ue && /* @__PURE__ */ _(Xe, { icon: ce }),
                  a && ` ${a}`
                ] }),
                J && L,
                /* @__PURE__ */ ie("div", { className: "box-tools pull-right", children: [
                  f,
                  s && /* @__PURE__ */ _(
                    "button",
                    {
                      type: "button",
                      className: "btn btn-box-tool",
                      onClick: this.toggleHide,
                      children: /* @__PURE__ */ _(Xe, { icon: re ? "plus" : "minus" })
                    }
                  ),
                  p,
                  X && /* @__PURE__ */ ie("div", { className: "btn-group", children: [
                    /* @__PURE__ */ _(
                      "button",
                      {
                        type: "button",
                        className: "btn btn-box-tool dropdown-toggle",
                        "data-toggle": "dropdown",
                        children: /* @__PURE__ */ _(Xe, { icon: se })
                      }
                    ),
                    /* @__PURE__ */ _("ul", { className: "dropdown-menu", role: "menu", children: n })
                  ] }),
                  l && /* @__PURE__ */ _("button", { type: "button", "aria-label": "close box", className: "btn btn-box-tool", onClick: this.close, children: /* @__PURE__ */ _(Xe, { icon: "times" }) })
                ] })
              ] }),
              /* @__PURE__ */ ie(
                Kp,
                {
                  duration: 500,
                  height: re ? "0%" : "auto",
                  children: [
                    /* @__PURE__ */ _("div", { className: v, children: W }),
                    !u && /* @__PURE__ */ _(Sf, {}),
                    ee && /* @__PURE__ */ _("div", { className: `box-footer${S ? ` ${S}` : ""}`, children: N })
                  ]
                }
              )
            ]
          }
        )
      }
    );
  }
}
oe(xf, "defaultProps", {
  id: void 0,
  title: " ",
  collapsable: !1,
  closable: !1,
  footer: null,
  type: null,
  options: null,
  icon: void 0,
  titleRight: !1,
  loaded: !0,
  noPadding: !1,
  badge: null,
  toolIcon: "fas-wrench",
  customOptions: null,
  className: null,
  footerClass: null,
  collapsed: !1,
  solid: !1,
  textCenter: !1,
  padding: !1,
  bodyClassName: null,
  border: !1,
  style: null,
  header: null,
  children: null
});
const b_ = ({
  id: e,
  percentage: t,
  percentageColor: r,
  header: n,
  text: i,
  indication: a
}) => /* @__PURE__ */ ie("div", { id: e, className: "description-block border-right", children: [
  /* @__PURE__ */ ie("span", { className: `description-percentage text-${r}`, children: [
    /* @__PURE__ */ _(Xe, { icon: ["fas", `caret-${a}`] }),
    ` ${t}%`
  ] }),
  /* @__PURE__ */ _("h5", { className: "description-header", children: n }),
  /* @__PURE__ */ _("span", { className: "description-text", children: i })
] });
b_.defaultProps = {
  id: void 0
};
const w_ = ({
  currentValue: e,
  maxValue: t,
  color: r,
  text: n
}) => /* @__PURE__ */ ie("div", { className: "progress-group", children: [
  /* @__PURE__ */ _("span", { className: "progress-text", children: n }),
  /* @__PURE__ */ ie("span", { className: "progress-number", children: [
    /* @__PURE__ */ _("b", { children: e }),
    "/",
    t
  ] }),
  /* @__PURE__ */ _("div", { className: "progress sm", children: /* @__PURE__ */ _("div", { className: `progress-bar progress-bar-${r}`, style: { width: `${e / t * 100}%` } }) })
] });
w_.defaultProps = {
  text: void 0
};
const qy = ({
  pullRight: e,
  margin: t,
  vertical: r,
  children: n
}) => {
  const i = [
    r ? "btn-group-vertical" : "btn-group",
    e ? "pull-right" : null,
    t ? "margin" : null
  ].filter((a) => a).join(" ");
  return /* @__PURE__ */ _("div", { className: i, children: n });
};
qy.defaultProps = {
  pullRight: !1,
  margin: !1,
  vertical: !1
};
const Wy = () => /* @__PURE__ */ _("li", { className: "divider" });
class Ci extends Ue {
  render() {
    const {
      id: t,
      size: r,
      type: n,
      block: i,
      icon: a,
      color: o,
      flat: s,
      text: l,
      alignRight: u,
      disabled: c,
      // eslint-disable-next-line react/prop-types, no-unused-vars
      margin: f,
      pullRight: d = u,
      pullLeft: p,
      to: m,
      app: S,
      badge: w,
      onClick: C,
      split: y,
      outline: T,
      className: R,
      value: P,
      name: N
    } = this.props;
    let { children: L } = this.props;
    const W = [
      "btn",
      i ? "btn-block" : "",
      `btn-${n}`,
      s ? "btn-flat" : "",
      R,
      o ? `bg-${o}` : "",
      r ? `btn-${r}` : "",
      d ? "pull-right" : "",
      p ? "pull-left" : "",
      c ? "disabled" : "",
      f ? "margin" : "",
      s ? "btn-flat" : "",
      S ? "btn-app" : "",
      T ? "btn-outline" : ""
    ].filter((Q) => Q).join(" "), re = !!a ? Lt(a) : null, z = /* @__PURE__ */ ie(
      "button",
      {
        id: t || "",
        onClick: c ? void 0 : C,
        type: "button",
        className: W,
        value: P,
        name: N,
        children: [
          w,
          a && /* @__PURE__ */ _(Xe, { icon: re }),
          a && l ? " " : "",
          l || ""
        ]
      }
    );
    return m ? /* @__PURE__ */ _(Pr, { to: m, children: z }) : L ? (L.length || (L = [L]), L.length > 0 ? L = L.map((Q) => Q.type !== "li" && Q.type !== Wy ? /* @__PURE__ */ _("li", { children: Q }, cr()) : pe.cloneElement(Q, { key: cr() })) : L = void 0, y ? /* @__PURE__ */ ie(qy, { children: [
      (l || a || w) && /* @__PURE__ */ ie(
        "button",
        {
          onClick: c ? void 0 : C,
          type: "button",
          className: W,
          children: [
            w,
            a && /* @__PURE__ */ _(Xe, { icon: re }),
            a && l ? " " : "",
            l || ""
          ]
        }
      ),
      /* @__PURE__ */ _(
        "button",
        {
          id: t || "",
          type: "button",
          className: `${W} dropdown-toggle`,
          "data-toggle": "dropdown",
          children: /* @__PURE__ */ _("span", { className: "caret" })
        }
      ),
      /* @__PURE__ */ _("ul", { className: "dropdown-menu", children: L })
    ] }) : /* @__PURE__ */ ie(Qt, { children: [
      /* @__PURE__ */ ie("button", { type: "button", className: `${W} dropdown-toggle`, "data-toggle": "dropdown", children: [
        `${l || ""} `,
        /* @__PURE__ */ _(Xe, { icon: ["fas", "caret-down"] })
      ] }),
      /* @__PURE__ */ _("ul", { className: "dropdown-menu", children: L })
    ] })) : z;
  }
}
oe(Ci, "defaultProps", {
  id: null,
  size: null,
  type: "default",
  block: !1,
  icon: null,
  color: null,
  className: null,
  flat: !1,
  text: null,
  alignRight: !1,
  pullRight: !1,
  pullLeft: !1,
  disabled: !1,
  margin: !1,
  to: null,
  app: null,
  outline: null,
  badge: null,
  onClick: null,
  split: null,
  children: null,
  value: null,
  name: null
});
var Oc = { exports: {} }, ds = { exports: {} };
/** @license React v16.14.0
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jp;
function S_() {
  return Jp || (Jp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pe, t = Ka(), r = fy();
    function n(x) {
      for (var O = "https://reactjs.org/docs/error-decoder.html?invariant=" + x, j = 1; j < arguments.length; j++)
        O += "&args[]=" + encodeURIComponent(arguments[j]);
      return "Minified React error #" + x + "; visit " + O + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var i = "16.14.0", a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    a.hasOwnProperty("ReactCurrentDispatcher") || (a.ReactCurrentDispatcher = {
      current: null
    }), a.hasOwnProperty("ReactCurrentBatchConfig") || (a.ReactCurrentBatchConfig = {
      suspense: null
    });
    function o(x) {
      {
        for (var O = arguments.length, j = new Array(O > 1 ? O - 1 : 0), te = 1; te < O; te++)
          j[te - 1] = arguments[te];
        l("warn", x, j);
      }
    }
    function s(x) {
      {
        for (var O = arguments.length, j = new Array(O > 1 ? O - 1 : 0), te = 1; te < O; te++)
          j[te - 1] = arguments[te];
        l("error", x, j);
      }
    }
    function l(x, O, j) {
      {
        var te = j.length > 0 && typeof j[j.length - 1] == "string" && j[j.length - 1].indexOf(`
    in`) === 0;
        if (!te) {
          var ne = a.ReactDebugCurrentFrame, Se = ne.getStackAddendum();
          Se !== "" && (O += "%s", j = j.concat([Se]));
        }
        var xe = j.map(function(pt) {
          return "" + pt;
        });
        xe.unshift("Warning: " + O), Function.prototype.apply.call(console[x], console, xe);
        try {
          var _e = 0, be = "Warning: " + O.replace(/%s/g, function() {
            return j[_e++];
          });
          throw new Error(be);
        } catch {
        }
      }
    }
    var u = typeof Symbol == "function" && Symbol.for, c = u ? Symbol.for("react.portal") : 60106, f = u ? Symbol.for("react.fragment") : 60107, d = u ? Symbol.for("react.strict_mode") : 60108, p = u ? Symbol.for("react.profiler") : 60114, m = u ? Symbol.for("react.provider") : 60109, S = u ? Symbol.for("react.context") : 60110, w = u ? Symbol.for("react.concurrent_mode") : 60111, C = u ? Symbol.for("react.forward_ref") : 60112, y = u ? Symbol.for("react.suspense") : 60113, T = u ? Symbol.for("react.suspense_list") : 60120, R = u ? Symbol.for("react.memo") : 60115, P = u ? Symbol.for("react.lazy") : 60116, N = u ? Symbol.for("react.block") : 60121, L = u ? Symbol.for("react.fundamental") : 60117, W = u ? Symbol.for("react.scope") : 60119, Y = -1, re = 0, z = 1, Q = 2;
    function se(x) {
      return x._status === z ? x._result : null;
    }
    function X(x) {
      if (x._status === Y) {
        x._status = re;
        var O = x._ctor, j = O();
        x._result = j, j.then(function(te) {
          if (x._status === re) {
            var ne = te.default;
            ne === void 0 && s(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, te), x._status = z, x._result = ne;
          }
        }, function(te) {
          x._status === re && (x._status = Q, x._result = te);
        });
      }
    }
    function ee(x, O, j) {
      var te = O.displayName || O.name || "";
      return x.displayName || (te !== "" ? j + "(" + te + ")" : j);
    }
    function J(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && s("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case f:
          return "Fragment";
        case c:
          return "Portal";
        case p:
          return "Profiler";
        case d:
          return "StrictMode";
        case y:
          return "Suspense";
        case T:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case S:
            return "Context.Consumer";
          case m:
            return "Context.Provider";
          case C:
            return ee(x, x.render, "ForwardRef");
          case R:
            return J(x.type);
          case N:
            return J(x.render);
          case P: {
            var O = x, j = se(O);
            if (j)
              return J(j);
            break;
          }
        }
      return null;
    }
    var ue = /^(.*)[\\\/]/;
    function ce(x, O, j) {
      var te = "";
      if (O) {
        var ne = O.fileName, Se = ne.replace(ue, "");
        if (/^index\./.test(Se)) {
          var xe = ne.match(ue);
          if (xe) {
            var _e = xe[1];
            if (_e) {
              var be = _e.replace(ue, "");
              Se = be + "/" + Se;
            }
          }
        }
        te = " (at " + Se + ":" + O.lineNumber + ")";
      } else
        j && (te = " (created by " + j + ")");
      return `
    in ` + (x || "Unknown") + te;
    }
    var Z = !1, V = !1, h, v;
    h = a.ReactDebugCurrentFrame, v = /* @__PURE__ */ new Set();
    var g = {};
    Object.freeze(g);
    function b(x, O) {
      var j = x.contextTypes;
      if (!j)
        return g;
      var te = {};
      for (var ne in j)
        te[ne] = O[ne];
      return te;
    }
    function A(x, O, j) {
      r(x, O, j, "Component", h.getCurrentStack);
    }
    function E(x, O) {
      for (var j = x._threadCount | 0; j <= O; j++)
        x[j] = x._currentValue2, x._threadCount = j + 1;
    }
    function I(x, O, j, te) {
      if (te) {
        var ne = x.contextType;
        if ("contextType" in x) {
          var Se = (
            // Allow null for conditional declaration
            ne === null || ne !== void 0 && ne.$$typeof === S && ne._context === void 0
          );
          if (!Se && !v.has(x)) {
            v.add(x);
            var xe = "";
            ne === void 0 ? xe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof ne != "object" ? xe = " However, it is set to a " + typeof ne + "." : ne.$$typeof === m ? xe = " Did you accidentally pass the Context.Provider instead?" : ne._context !== void 0 ? xe = " Did you accidentally pass the Context.Consumer instead?" : xe = " However, it is set to an object with keys {" + Object.keys(ne).join(", ") + "}.", s("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", J(x) || "Component", xe);
          }
        }
        if (typeof ne == "object" && ne !== null)
          return E(ne, j), ne[j];
        {
          var _e = b(x, O);
          return x.contextTypes && A(x.contextTypes, _e, "context"), _e;
        }
      } else {
        var be = b(x, O);
        return x.contextTypes && A(x.contextTypes, be, "context"), be;
      }
    }
    for (var H = new Uint16Array(16), q = 0; q < 15; q++)
      H[q] = q + 1;
    H[15] = 0;
    function K() {
      var x = H, O = x.length, j = O * 2;
      if (!(j <= 65536))
        throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
      var te = new Uint16Array(j);
      te.set(x), H = te, H[0] = O + 1;
      for (var ne = O; ne < j - 1; ne++)
        H[ne] = ne + 1;
      return H[j - 1] = 0, O;
    }
    function ae() {
      var x = H[0];
      return x === 0 ? K() : (H[0] = H[x], x);
    }
    function U(x) {
      H[x] = H[0], H[0] = x;
    }
    var ve = 0, de = 1, he = 2, Ee = 3, De = 4, Ce = 5, Ie = 6, Oe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ke = Oe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", $e = "data-reactroot", Me = new RegExp("^[" + Oe + "][" + Ke + "]*$"), He = Object.prototype.hasOwnProperty, st = {}, ze = {};
    function Je(x) {
      return He.call(ze, x) ? !0 : He.call(st, x) ? !1 : Me.test(x) ? (ze[x] = !0, !0) : (st[x] = !0, s("Invalid attribute name: `%s`", x), !1);
    }
    function Ye(x, O, j) {
      return O !== null ? O.type === ve : j ? !1 : x.length > 2 && (x[0] === "o" || x[0] === "O") && (x[1] === "n" || x[1] === "N");
    }
    function Ve(x, O, j, te) {
      if (j !== null && j.type === ve)
        return !1;
      switch (typeof O) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (te)
            return !1;
          if (j !== null)
            return !j.acceptsBooleans;
          var ne = x.toLowerCase().slice(0, 5);
          return ne !== "data-" && ne !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Qe(x, O, j, te) {
      if (O === null || typeof O > "u" || Ve(x, O, j, te))
        return !0;
      if (te)
        return !1;
      if (j !== null)
        switch (j.type) {
          case Ee:
            return !O;
          case De:
            return O === !1;
          case Ce:
            return isNaN(O);
          case Ie:
            return isNaN(O) || O < 1;
        }
      return !1;
    }
    function qe(x) {
      return F.hasOwnProperty(x) ? F[x] : null;
    }
    function fe(x, O, j, te, ne, Se) {
      this.acceptsBooleans = O === he || O === Ee || O === De, this.attributeName = te, this.attributeNamespace = ne, this.mustUseProperty = j, this.propertyName = x, this.type = O, this.sanitizeURL = Se;
    }
    var F = {}, $ = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    $.forEach(function(x) {
      F[x] = new fe(
        x,
        ve,
        !1,
        // mustUseProperty
        x,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(x) {
      var O = x[0], j = x[1];
      F[O] = new fe(
        O,
        de,
        !1,
        // mustUseProperty
        j,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(x) {
      F[x] = new fe(
        x,
        he,
        !1,
        // mustUseProperty
        x.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(x) {
      F[x] = new fe(
        x,
        he,
        !1,
        // mustUseProperty
        x,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(x) {
      F[x] = new fe(
        x,
        Ee,
        !1,
        // mustUseProperty
        x.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(x) {
      F[x] = new fe(
        x,
        Ee,
        !0,
        // mustUseProperty
        x,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(x) {
      F[x] = new fe(
        x,
        De,
        !1,
        // mustUseProperty
        x,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(x) {
      F[x] = new fe(
        x,
        Ie,
        !1,
        // mustUseProperty
        x,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), ["rowSpan", "start"].forEach(function(x) {
      F[x] = new fe(
        x,
        Ce,
        !1,
        // mustUseProperty
        x.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    });
    var Fe = /[\-\:]([a-z])/g, We = function(x) {
      return x[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(x) {
      var O = x.replace(Fe, We);
      F[O] = new fe(
        O,
        de,
        !1,
        // mustUseProperty
        x,
        null,
        // attributeNamespace
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(x) {
      var O = x.replace(Fe, We);
      F[O] = new fe(
        O,
        de,
        !1,
        // mustUseProperty
        x,
        "http://www.w3.org/1999/xlink",
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(x) {
      var O = x.replace(Fe, We);
      F[O] = new fe(
        O,
        de,
        !1,
        // mustUseProperty
        x,
        "http://www.w3.org/XML/1998/namespace",
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(x) {
      F[x] = new fe(
        x,
        de,
        !1,
        // mustUseProperty
        x.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    });
    var it = "xlinkHref";
    F[it] = new fe(
      "xlinkHref",
      de,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0
    ), ["src", "href", "action", "formAction"].forEach(function(x) {
      F[x] = new fe(
        x,
        de,
        !1,
        // mustUseProperty
        x.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0
      );
    }), a.ReactDebugCurrentFrame;
    var Le = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Dt = !1;
    function qt(x) {
      !Dt && Le.test(x) && (Dt = !0, s("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(x)));
    }
    var mt = /["'&<>]/;
    function At(x) {
      var O = "" + x, j = mt.exec(O);
      if (!j)
        return O;
      var te, ne = "", Se, xe = 0;
      for (Se = j.index; Se < O.length; Se++) {
        switch (O.charCodeAt(Se)) {
          case 34:
            te = "&quot;";
            break;
          case 38:
            te = "&amp;";
            break;
          case 39:
            te = "&#x27;";
            break;
          case 60:
            te = "&lt;";
            break;
          case 62:
            te = "&gt;";
            break;
          default:
            continue;
        }
        xe !== Se && (ne += O.substring(xe, Se)), xe = Se + 1, ne += te;
      }
      return xe !== Se ? ne + O.substring(xe, Se) : ne;
    }
    function It(x) {
      return typeof x == "boolean" || typeof x == "number" ? "" + x : At(x);
    }
    function Et(x) {
      return '"' + It(x) + '"';
    }
    function M() {
      return $e + '=""';
    }
    function G(x, O) {
      var j = qe(x);
      if (x !== "style" && Ye(x, j, !1) || Qe(x, O, j, !1))
        return "";
      if (j !== null) {
        var te = j.attributeName, ne = j.type;
        return ne === Ee || ne === De && O === !0 ? te + '=""' : (j.sanitizeURL && (O = "" + O, qt(O)), te + "=" + Et(O));
      } else if (Je(x))
        return x + "=" + Et(O);
      return "";
    }
    function B(x, O) {
      return !Je(x) || O == null ? "" : x + "=" + Et(O);
    }
    function ye(x, O) {
      return x === O && (x !== 0 || 1 / x === 1 / O) || x !== x && O !== O;
    }
    var Te = typeof Object.is == "function" ? Object.is : ye, we = null, Pe = null, me = null, ge = !1, gt = !1, et = null, Be = 0, rt = 25, Ze = !1, at;
    function dt() {
      if (we === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.`);
      return Ze && s("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks"), we;
    }
    function ft(x, O) {
      if (O === null)
        return s("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", at), !1;
      x.length !== O.length && s(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, at, "[" + x.join(", ") + "]", "[" + O.join(", ") + "]");
      for (var j = 0; j < O.length && j < x.length; j++)
        if (!Te(x[j], O[j]))
          return !1;
      return !0;
    }
    function ht() {
      if (Be > 0)
        throw Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Wt() {
      return me === null ? Pe === null ? (ge = !1, Pe = me = ht()) : (ge = !0, me = Pe) : me.next === null ? (ge = !1, me = me.next = ht()) : (ge = !0, me = me.next), me;
    }
    function wt(x) {
      we = x, Ze = !1;
    }
    function br(x, O, j, te) {
      for (; gt; )
        gt = !1, Be += 1, me = null, j = x(O, te);
      return we = null, Pe = null, Be = 0, et = null, me = null, Ze = !1, j;
    }
    function Lo(x, O) {
      var j = Xi;
      return E(x, j), Ze && s("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), x[j];
    }
    function Fo(x, O) {
      at = "useContext", dt();
      var j = Xi;
      return E(x, j), x[j];
    }
    function oi(x, O) {
      return typeof O == "function" ? O(x) : O;
    }
    function jo(x) {
      return at = "useState", Gi(
        oi,
        // useReducer has a special case to support lazy useState initializers
        x
      );
    }
    function Gi(x, O, j) {
      if (x !== oi && (at = "useReducer"), we = dt(), me = Wt(), ge) {
        var te = me.queue, ne = te.dispatch;
        if (et !== null) {
          var Se = et.get(te);
          if (Se !== void 0) {
            et.delete(te);
            var xe = me.memoizedState, _e = Se;
            do {
              var be = _e.action;
              Ze = !0, xe = x(xe, be), Ze = !1, _e = _e.next;
            } while (_e !== null);
            return me.memoizedState = xe, [xe, ne];
          }
        }
        return [me.memoizedState, ne];
      } else {
        Ze = !0;
        var pt;
        x === oi ? pt = typeof O == "function" ? O() : O : pt = j !== void 0 ? j(O) : O, Ze = !1, me.memoizedState = pt;
        var St = me.queue = {
          last: null,
          dispatch: null
        }, Rt = St.dispatch = Lw.bind(null, we, St);
        return [me.memoizedState, Rt];
      }
    }
    function qo(x, O) {
      we = dt(), me = Wt();
      var j = O === void 0 ? null : O;
      if (me !== null) {
        var te = me.memoizedState;
        if (te !== null && j !== null) {
          var ne = te[1];
          if (ft(j, ne))
            return te[0];
        }
      }
      Ze = !0;
      var Se = x();
      return Ze = !1, me.memoizedState = [Se, j], Se;
    }
    function Wo(x) {
      we = dt(), me = Wt();
      var O = me.memoizedState;
      if (O === null) {
        var j = {
          current: x
        };
        return Object.seal(j), me.memoizedState = j, j;
      } else
        return O;
    }
    function Mw(x, O) {
      at = "useLayoutEffect", s("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://fb.me/react-uselayouteffect-ssr for common fixes.");
    }
    function Lw(x, O, j) {
      if (!(Be < rt))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (x === we) {
        gt = !0;
        var te = {
          action: j,
          next: null
        };
        et === null && (et = /* @__PURE__ */ new Map());
        var ne = et.get(O);
        if (ne === void 0)
          et.set(O, te);
        else {
          for (var Se = ne; Se.next !== null; )
            Se = Se.next;
          Se.next = te;
        }
      }
    }
    function Fw(x, O) {
      return x;
    }
    function jw(x, O) {
      return {
        props: O,
        responder: x
      };
    }
    function qw(x, O) {
      return dt(), x;
    }
    function Ww(x) {
      dt();
      var O = function(j) {
        j();
      };
      return [O, !1];
    }
    function Ho() {
    }
    var Xi = 0;
    function kd(x) {
      Xi = x;
    }
    var Hw = {
      readContext: Lo,
      useContext: Fo,
      useMemo: qo,
      useReducer: Gi,
      useRef: Wo,
      useState: jo,
      useLayoutEffect: Mw,
      useCallback: Fw,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Ho,
      // Effects are not run in the server environment.
      useEffect: Ho,
      // Debugging effect
      useDebugValue: Ho,
      useResponder: jw,
      useDeferredValue: qw,
      useTransition: Ww
    }, Ki = "http://www.w3.org/1999/xhtml", Ad = "http://www.w3.org/1998/Math/MathML", Vo = "http://www.w3.org/2000/svg", Bo = {
      html: Ki,
      mathml: Ad,
      svg: Vo
    };
    function Id(x) {
      switch (x) {
        case "svg":
          return Vo;
        case "math":
          return Ad;
        default:
          return Ki;
      }
    }
    function Vw(x, O) {
      return x == null || x === Ki ? Id(O) : x === Vo && O === "foreignObject" ? Ki : x;
    }
    var Nd = null, Ji = {
      checkPropTypes: null
    };
    {
      Nd = a.ReactDebugCurrentFrame;
      var Bw = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
      }, Uw = {
        value: function(x, O, j) {
          return Bw[x.type] || x.onChange || x.readOnly || x.disabled || x[O] == null || V ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
        },
        checked: function(x, O, j) {
          return x.onChange || x.readOnly || x.disabled || x[O] == null || V ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
        }
      };
      Ji.checkPropTypes = function(x, O) {
        r(Uw, O, "prop", x, Nd.getStackAddendum);
      };
    }
    var Md = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, $w = t({
      menuitem: !0
    }, Md), zw = "__html", Uo = null;
    Uo = a.ReactDebugCurrentFrame;
    function Yw(x, O) {
      if (O) {
        if ($w[x] && !(O.children == null && O.dangerouslySetInnerHTML == null))
          throw Error(x + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + Uo.getStackAddendum());
        if (O.dangerouslySetInnerHTML != null) {
          if (O.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof O.dangerouslySetInnerHTML == "object" && zw in O.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.");
        }
        if (!O.suppressContentEditableWarning && O.contentEditable && O.children != null && s("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(O.style == null || typeof O.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + Uo.getStackAddendum());
      }
    }
    var si = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Gw(x, O) {
      return x + O.charAt(0).toUpperCase() + O.substring(1);
    }
    var Xw = ["Webkit", "ms", "Moz", "O"];
    Object.keys(si).forEach(function(x) {
      Xw.forEach(function(O) {
        si[Gw(O, x)] = si[x];
      });
    });
    function Kw(x, O, j) {
      var te = O == null || typeof O == "boolean" || O === "";
      return te ? "" : !j && typeof O == "number" && O !== 0 && !(si.hasOwnProperty(x) && si[x]) ? O + "px" : ("" + O).trim();
    }
    var Jw = /([A-Z])/g, Zw = /^ms-/;
    function Qw(x) {
      return x.replace(Jw, "-$1").toLowerCase().replace(Zw, "-ms-");
    }
    function $o(x, O) {
      if (x.indexOf("-") === -1)
        return typeof O.is == "string";
      switch (x) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ld = function() {
    };
    {
      var eS = /^(?:webkit|moz|o)[A-Z]/, tS = /^-ms-/, rS = /-(.)/g, Fd = /;\s*$/, En = {}, zo = {}, jd = !1, qd = !1, nS = function(x) {
        return x.replace(rS, function(O, j) {
          return j.toUpperCase();
        });
      }, iS = function(x) {
        En.hasOwnProperty(x) && En[x] || (En[x] = !0, s(
          "Unsupported style property %s. Did you mean %s?",
          x,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          nS(x.replace(tS, "ms-"))
        ));
      }, aS = function(x) {
        En.hasOwnProperty(x) && En[x] || (En[x] = !0, s("Unsupported vendor-prefixed style property %s. Did you mean %s?", x, x.charAt(0).toUpperCase() + x.slice(1)));
      }, oS = function(x, O) {
        zo.hasOwnProperty(O) && zo[O] || (zo[O] = !0, s(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, x, O.replace(Fd, "")));
      }, sS = function(x, O) {
        jd || (jd = !0, s("`NaN` is an invalid value for the `%s` css style property.", x));
      }, lS = function(x, O) {
        qd || (qd = !0, s("`Infinity` is an invalid value for the `%s` css style property.", x));
      };
      Ld = function(x, O) {
        x.indexOf("-") > -1 ? iS(x) : eS.test(x) ? aS(x) : Fd.test(O) && oS(x, O), typeof O == "number" && (isNaN(O) ? sS(x, O) : isFinite(O) || lS(x, O));
      };
    }
    var uS = Ld, Wd = {
      "aria-current": 0,
      // state
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Rn = {}, cS = new RegExp("^(aria)-[" + Ke + "]*$"), fS = new RegExp("^(aria)[A-Z][" + Ke + "]*$"), dS = Object.prototype.hasOwnProperty;
    function pS(x, O) {
      {
        if (dS.call(Rn, O) && Rn[O])
          return !0;
        if (fS.test(O)) {
          var j = "aria-" + O.slice(4).toLowerCase(), te = Wd.hasOwnProperty(j) ? j : null;
          if (te == null)
            return s("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", O), Rn[O] = !0, !0;
          if (O !== te)
            return s("Invalid ARIA attribute `%s`. Did you mean `%s`?", O, te), Rn[O] = !0, !0;
        }
        if (cS.test(O)) {
          var ne = O.toLowerCase(), Se = Wd.hasOwnProperty(ne) ? ne : null;
          if (Se == null)
            return Rn[O] = !0, !1;
          if (O !== Se)
            return s("Unknown ARIA attribute `%s`. Did you mean `%s`?", O, Se), Rn[O] = !0, !0;
        }
      }
      return !0;
    }
    function hS(x, O) {
      {
        var j = [];
        for (var te in O) {
          var ne = pS(x, te);
          ne || j.push(te);
        }
        var Se = j.map(function(xe) {
          return "`" + xe + "`";
        }).join(", ");
        j.length === 1 ? s("Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", Se, x) : j.length > 1 && s("Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", Se, x);
      }
    }
    function vS(x, O) {
      $o(x, O) || hS(x, O);
    }
    var Hd = !1;
    function gS(x, O) {
      {
        if (x !== "input" && x !== "textarea" && x !== "select")
          return;
        O != null && O.value === null && !Hd && (Hd = !0, x === "select" && O.multiple ? s("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", x) : s("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", x));
      }
    }
    var mS = {}, Vd = {}, Bd = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Ud = function() {
    };
    {
      var Ht = {}, yS = Object.prototype.hasOwnProperty, $d = /^on./, bS = /^on[^A-Z]/, wS = new RegExp("^(aria)-[" + Ke + "]*$"), SS = new RegExp("^(aria)[A-Z][" + Ke + "]*$");
      Ud = function(x, O, j, te) {
        if (yS.call(Ht, O) && Ht[O])
          return !0;
        var ne = O.toLowerCase();
        if (ne === "onfocusin" || ne === "onfocusout")
          return s("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ht[O] = !0, !0;
        if (te) {
          if (mS.hasOwnProperty(O))
            return !0;
          var Se = Vd.hasOwnProperty(ne) ? Vd[ne] : null;
          if (Se != null)
            return s("Invalid event handler property `%s`. Did you mean `%s`?", O, Se), Ht[O] = !0, !0;
          if ($d.test(O))
            return s("Unknown event handler property `%s`. It will be ignored.", O), Ht[O] = !0, !0;
        } else if ($d.test(O))
          return bS.test(O) && s("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", O), Ht[O] = !0, !0;
        if (wS.test(O) || SS.test(O))
          return !0;
        if (ne === "innerhtml")
          return s("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ht[O] = !0, !0;
        if (ne === "aria")
          return s("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ht[O] = !0, !0;
        if (ne === "is" && j !== null && j !== void 0 && typeof j != "string")
          return s("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof j), Ht[O] = !0, !0;
        if (typeof j == "number" && isNaN(j))
          return s("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", O), Ht[O] = !0, !0;
        var xe = qe(O), _e = xe !== null && xe.type === ve;
        if (Bd.hasOwnProperty(ne)) {
          var be = Bd[ne];
          if (be !== O)
            return s("Invalid DOM property `%s`. Did you mean `%s`?", O, be), Ht[O] = !0, !0;
        } else if (!_e && O !== ne)
          return s("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", O, ne), Ht[O] = !0, !0;
        return typeof j == "boolean" && Ve(O, j, xe, !1) ? (j ? s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', j, O, O, j, O) : s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', j, O, O, j, O, O, O), Ht[O] = !0, !0) : _e ? !0 : Ve(O, j, xe, !1) ? (Ht[O] = !0, !1) : ((j === "false" || j === "true") && xe !== null && xe.type === Ee && (s("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", j, O, j === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', O, j), Ht[O] = !0), !0);
      };
    }
    var xS = function(x, O, j) {
      {
        var te = [];
        for (var ne in O) {
          var Se = Ud(x, ne, O[ne], j);
          Se || te.push(ne);
        }
        var xe = te.map(function(_e) {
          return "`" + _e + "`";
        }).join(", ");
        te.length === 1 ? s("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior", xe, x) : te.length > 1 && s("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior", xe, x);
      }
    };
    function CS(x, O, j) {
      $o(x, O) || xS(x, O, j);
    }
    var $r = e.Children.toArray, Vr = [], Yo = a.ReactCurrentDispatcher, Zi, Go = null, zd = function() {
      return "";
    }, Yd = function(x) {
      return "";
    }, Gd = function(x, O) {
    }, Xd = function(x) {
    }, Kd = function(x) {
    }, Jd = function() {
    }, Zd = !1;
    Zi = a.ReactDebugCurrentFrame, Gd = function(x, O) {
      vS(x, O), gS(x, O), CS(
        x,
        O,
        /* canUseEventSystem */
        !1
      );
    }, Yd = function(x) {
      var O = x._source, j = x.type, te = J(j), ne = null;
      return ce(te, O, ne);
    }, Xd = function(x) {
      Vr.push(x), Vr.length === 1 && (Go = Zi.getCurrentStack, Zi.getCurrentStack = zd);
    }, Kd = function(x) {
      var O = Vr[Vr.length - 1], j = O[O.length - 1];
      j.debugElementStack.push(x);
    }, Jd = function() {
      Vr.pop(), Vr.length === 0 && (Zi.getCurrentStack = Go, Go = null);
    }, zd = function() {
      if (Vr.length === 0)
        return "";
      for (var x = Vr[Vr.length - 1], O = "", j = x.length - 1; j >= 0; j--)
        for (var te = x[j], ne = te.debugElementStack, Se = ne.length - 1; Se >= 0; Se--)
          O += Yd(ne[Se]);
      return O;
    };
    var Qd = !1, ep = !1, tp = !1, rp = !1, np = !1, ip = {}, ap = {}, op = {}, sp = {}, lp = {}, up = {}, cp = ["value", "defaultValue"], _S = {
      listing: !0,
      pre: !0,
      textarea: !0
    }, TS = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, fp = {};
    function PS(x) {
      if (!fp.hasOwnProperty(x)) {
        if (!TS.test(x))
          throw Error("Invalid tag: " + x);
        fp[x] = !0;
      }
    }
    var Xo = {}, DS = function(x) {
      if (Xo.hasOwnProperty(x))
        return Xo[x];
      var O = Qw(x);
      return Xo[x] = O, O;
    };
    function ES(x) {
      var O = "", j = "";
      for (var te in x)
        if (x.hasOwnProperty(te)) {
          var ne = te.indexOf("--") === 0, Se = x[te];
          ne || uS(te, Se), Se != null && (O += j + (ne ? te : DS(te)) + ":", O += Kw(te, Se, ne), j = ";");
        }
      return O || null;
    }
    function dp(x, O) {
      {
        var j = x.constructor, te = j && J(j) || "ReactClass", ne = te + "." + O;
        if (ip[ne])
          return;
        s(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, O, O, te), ip[ne] = !0;
      }
    }
    function RS(x) {
      return x.prototype && x.prototype.isReactComponent;
    }
    function OS(x) {
      var O = x.dangerouslySetInnerHTML;
      if (O != null) {
        if (O.__html != null)
          return O.__html;
      } else {
        var j = x.children;
        if (typeof j == "string" || typeof j == "number")
          return It(j);
      }
      return null;
    }
    function kS(x) {
      if (!e.isValidElement(x))
        return $r(x);
      var O = x;
      if (O.type !== f)
        return [O];
      var j = O.props.children;
      if (!e.isValidElement(j))
        return $r(j);
      var te = j;
      return [te];
    }
    function AS(x) {
      if (x == null)
        return x;
      var O = "";
      return e.Children.forEach(x, function(j) {
        j != null && (O += j, !np && typeof j != "string" && typeof j != "number" && (np = !0, s("Only strings and numbers are supported as <option> children.")));
      }), O;
    }
    var IS = Object.prototype.hasOwnProperty, NS = "style", MS = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function LS(x, O, j, te, ne, Se) {
      var xe = "<" + x;
      for (var _e in j)
        if (IS.call(j, _e)) {
          var be = j[_e];
          if (be != null) {
            _e === NS && (be = ES(be));
            var pt = null;
            $o(O, j) ? MS.hasOwnProperty(_e) || (pt = B(_e, be)) : pt = G(_e, be), pt && (xe += " " + pt);
          }
        }
      return ne || Se && (xe += " " + M()), xe;
    }
    function pp(x, O) {
      if (x === void 0)
        throw Error((J(O) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function FS(x, O, j) {
      for (; e.isValidElement(x); ) {
        var te = x, ne = te.type;
        if (Kd(te), typeof ne != "function")
          break;
        Se(te, ne);
      }
      function Se(xe, _e) {
        var be = RS(_e), pt = I(_e, O, j, be), St = [], Rt = !1, $t = {
          isMounted: function(Gr) {
            return !1;
          },
          enqueueForceUpdate: function(Gr) {
            if (St === null)
              return dp(Gr, "forceUpdate"), null;
          },
          enqueueReplaceState: function(Gr, kn) {
            Rt = !0, St = [kn];
          },
          enqueueSetState: function(Gr, kn) {
            if (St === null)
              return dp(Gr, "setState"), null;
            St.push(kn);
          }
        }, ke;
        if (be) {
          if (ke = new _e(xe.props, pt, $t), typeof _e.getDerivedStateFromProps == "function") {
            if (ke.state === null || ke.state === void 0) {
              var fr = J(_e) || "Unknown";
              up[fr] || (s("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", fr, ke.state === null ? "null" : "undefined", fr), up[fr] = !0);
            }
            var Vt = _e.getDerivedStateFromProps.call(null, xe.props, ke.state);
            if (Vt === void 0) {
              var zt = J(_e) || "Unknown";
              lp[zt] || (s("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", zt), lp[zt] = !0);
            }
            Vt != null && (ke.state = t({}, ke.state, Vt));
          }
        } else {
          if (_e.prototype && typeof _e.prototype.render == "function") {
            var Yt = J(_e) || "Unknown";
            ap[Yt] || (s("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", Yt, Yt), ap[Yt] = !0);
          }
          var zr = {};
          if (wt(zr), ke = _e(xe.props, pt, $t), ke = br(_e, xe.props, ke, pt), ke == null || ke.render == null) {
            x = ke, pp(x, _e);
            return;
          }
          {
            var dr = J(_e) || "Unknown";
            op[dr] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", dr, dr, dr), op[dr] = !0);
          }
        }
        ke.props = xe.props, ke.context = pt, ke.updater = $t;
        var wr = ke.state;
        if (wr === void 0 && (ke.state = wr = null), typeof ke.UNSAFE_componentWillMount == "function" || typeof ke.componentWillMount == "function") {
          if (typeof ke.componentWillMount == "function") {
            if (ke.componentWillMount.__suppressDeprecationWarning !== !0) {
              var Yr = J(_e) || "Unknown";
              sp[Yr] || (o(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                Yr
              ), sp[Yr] = !0);
            }
            typeof _e.getDerivedStateFromProps != "function" && ke.componentWillMount();
          }
          if (typeof ke.UNSAFE_componentWillMount == "function" && typeof _e.getDerivedStateFromProps != "function" && ke.UNSAFE_componentWillMount(), St.length) {
            var pr = St, Sr = Rt;
            if (St = null, Rt = !1, Sr && pr.length === 1)
              ke.state = pr[0];
            else {
              for (var Er = Sr ? pr[0] : ke.state, Qi = !0, On = Sr ? 1 : 0; On < pr.length; On++) {
                var xr = pr[On], li = typeof xr == "function" ? xr.call(ke, Er, xe.props, pt) : xr;
                li != null && (Qi ? (Qi = !1, Er = t({}, Er, li)) : t(Er, li));
              }
              ke.state = Er;
            }
          } else
            St = null;
        }
        x = ke.render(), x === void 0 && ke.render._isMockFunction && (x = null), pp(x, _e);
        var dn;
        {
          if (typeof ke.getChildContext == "function") {
            var ea = _e.childContextTypes;
            if (typeof ea == "object") {
              dn = ke.getChildContext();
              for (var ta in dn)
                if (!(ta in ea))
                  throw Error((J(_e) || "Unknown") + '.getChildContext(): key "' + ta + '" is not defined in childContextTypes.');
            } else
              s("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", J(_e) || "Unknown");
          }
          dn && (O = t({}, O, dn));
        }
      }
      return {
        child: x,
        context: O
      };
    }
    var hp = /* @__PURE__ */ function() {
      function x(j, te) {
        var ne = kS(j), Se = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: Bo.html,
          children: ne,
          childIndex: 0,
          context: g,
          footer: ""
        };
        Se.debugElementStack = [], this.threadID = ae(), this.stack = [Se], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = te, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.contextProviderStack = [];
      }
      var O = x.prototype;
      return O.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), U(this.threadID));
      }, O.pushProvider = function(te) {
        var ne = ++this.contextIndex, Se = te.type._context, xe = this.threadID;
        E(Se, xe);
        var _e = Se[xe];
        this.contextStack[ne] = Se, this.contextValueStack[ne] = _e, this.contextProviderStack[ne] = te, Se[xe] = te.props.value;
      }, O.popProvider = function(te) {
        var ne = this.contextIndex;
        (ne < 0 || te !== this.contextProviderStack[ne]) && s("Unexpected pop.");
        var Se = this.contextStack[ne], xe = this.contextValueStack[ne];
        this.contextStack[ne] = null, this.contextValueStack[ne] = null, this.contextProviderStack[ne] = null, this.contextIndex--, Se[this.threadID] = xe;
      }, O.clearProviders = function() {
        for (var te = this.contextIndex; te >= 0; te--) {
          var ne = this.contextStack[te], Se = this.contextValueStack[te];
          ne[this.threadID] = Se;
        }
      }, O.read = function(te) {
        if (this.exhausted)
          return null;
        var ne = Xi;
        kd(this.threadID);
        var Se = Yo.current;
        Yo.current = Hw;
        try {
          for (var xe = [""], _e = !1; xe[0].length < te; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, U(this.threadID);
              break;
            }
            var be = this.stack[this.stack.length - 1];
            if (_e || be.childIndex >= be.children.length) {
              var pt = be.footer;
              if (pt !== "" && (this.previousWasTextNode = !1), this.stack.pop(), be.type === "select")
                this.currentSelectValue = null;
              else if (be.type != null && be.type.type != null && be.type.type.$$typeof === m) {
                var St = be.type;
                this.popProvider(St);
              } else if (be.type === y) {
                this.suspenseDepth--;
                var Rt = xe.pop();
                if (_e) {
                  _e = !1;
                  var $t = be.fallbackFrame;
                  if (!$t)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push($t), xe[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  xe[this.suspenseDepth] += Rt;
              }
              xe[this.suspenseDepth] += pt;
              continue;
            }
            var ke = be.children[be.childIndex++], fr = "";
            Xd(this.stack), be.debugElementStack.length = 0;
            try {
              fr += this.render(ke, be.context, be.domNamespace);
            } catch (Vt) {
              if (Vt != null && typeof Vt.then == "function") {
                if (!Z)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw Vt;
            } finally {
              Jd();
            }
            xe.length <= this.suspenseDepth && xe.push(""), xe[this.suspenseDepth] += fr;
          }
          return xe[0];
        } finally {
          Yo.current = Se, kd(ne);
        }
      }, O.render = function(te, ne, Se) {
        if (typeof te == "string" || typeof te == "number") {
          var xe = "" + te;
          return xe === "" ? "" : this.makeStaticMarkup ? It(xe) : this.previousWasTextNode ? "<!-- -->" + It(xe) : (this.previousWasTextNode = !0, It(xe));
        } else {
          var _e, be = FS(te, ne, this.threadID);
          if (_e = be.child, ne = be.context, _e === null || _e === !1)
            return "";
          if (!e.isValidElement(_e)) {
            if (_e != null && _e.$$typeof != null) {
              var pt = _e.$$typeof;
              throw Error(pt === c ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + pt.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var St = $r(_e), Rt = {
              type: null,
              domNamespace: Se,
              children: St,
              childIndex: 0,
              context: ne,
              footer: ""
            };
            return Rt.debugElementStack = [], this.stack.push(Rt), "";
          }
          var $t = _e, ke = $t.type;
          if (typeof ke == "string")
            return this.renderDOM($t, ne, Se);
          switch (ke) {
            case d:
            case w:
            case p:
            case T:
            case f: {
              var fr = $r(_e.props.children), Vt = {
                type: null,
                domNamespace: Se,
                children: fr,
                childIndex: 0,
                context: ne,
                footer: ""
              };
              return Vt.debugElementStack = [], this.stack.push(Vt), "";
            }
            case y:
              throw Error("ReactDOMServer does not yet support Suspense.");
          }
          if (typeof ke == "object" && ke !== null)
            switch (ke.$$typeof) {
              case C: {
                var zt = _e, Yt, zr = {};
                wt(zr), Yt = ke.render(zt.props, zt.ref), Yt = br(ke.render, zt.props, Yt, zt.ref), Yt = $r(Yt);
                var dr = {
                  type: null,
                  domNamespace: Se,
                  children: Yt,
                  childIndex: 0,
                  context: ne,
                  footer: ""
                };
                return dr.debugElementStack = [], this.stack.push(dr), "";
              }
              case R: {
                var wr = _e, Yr = [e.createElement(ke.type, t({
                  ref: wr.ref
                }, wr.props))], pr = {
                  type: null,
                  domNamespace: Se,
                  children: Yr,
                  childIndex: 0,
                  context: ne,
                  footer: ""
                };
                return pr.debugElementStack = [], this.stack.push(pr), "";
              }
              case m: {
                var Sr = _e, Er = Sr.props, Qi = $r(Er.children), On = {
                  type: Sr,
                  domNamespace: Se,
                  children: Qi,
                  childIndex: 0,
                  context: ne,
                  footer: ""
                };
                return On.debugElementStack = [], this.pushProvider(Sr), this.stack.push(On), "";
              }
              case S: {
                var xr = _e.type;
                xr._context === void 0 ? xr !== xr.Consumer && (Zd || (Zd = !0, s("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : xr = xr._context;
                var li = _e.props, dn = this.threadID;
                E(xr, dn);
                var ea = xr[dn], ta = $r(li.children(ea)), Gr = {
                  type: _e,
                  domNamespace: Se,
                  children: ta,
                  childIndex: 0,
                  context: ne,
                  footer: ""
                };
                return Gr.debugElementStack = [], this.stack.push(Gr), "";
              }
              case L:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case P: {
                var kn = _e, ra = _e.type;
                switch (X(ra), ra._status) {
                  case z: {
                    var BS = [e.createElement(ra._result, t({
                      ref: kn.ref
                    }, kn.props))], gp = {
                      type: null,
                      domNamespace: Se,
                      children: BS,
                      childIndex: 0,
                      context: ne,
                      footer: ""
                    };
                    return gp.debugElementStack = [], this.stack.push(gp), "";
                  }
                  case Q:
                    throw ra._result;
                  case re:
                  default:
                    throw Error("ReactDOMServer does not yet support lazy-loaded components.");
                }
              }
              case W:
                throw Error("ReactDOMServer does not yet support scope components.");
            }
          var Ko = "";
          {
            var mp = $t._owner;
            (ke === void 0 || typeof ke == "object" && ke !== null && Object.keys(ke).length === 0) && (Ko += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var yp = mp ? J(mp) : null;
            yp && (Ko += `

Check the render method of \`` + yp + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (ke == null ? ke : typeof ke) + "." + Ko);
        }
      }, O.renderDOM = function(te, ne, Se) {
        var xe = te.type.toLowerCase(), _e = Se;
        Se === Bo.html && (_e = Id(xe)), _e === Bo.html && xe !== te.type && s("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", te.type), PS(xe);
        var be = te.props;
        if (xe === "input")
          Ji.checkPropTypes("input", be), be.checked !== void 0 && be.defaultChecked !== void 0 && !ep && (s("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", "A component", be.type), ep = !0), be.value !== void 0 && be.defaultValue !== void 0 && !Qd && (s("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", "A component", be.type), Qd = !0), be = t({
            type: void 0
          }, be, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: be.value != null ? be.value : be.defaultValue,
            checked: be.checked != null ? be.checked : be.defaultChecked
          });
        else if (xe === "textarea") {
          Ji.checkPropTypes("textarea", be), be.value !== void 0 && be.defaultValue !== void 0 && !rp && (s("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components"), rp = !0);
          var pt = be.value;
          if (pt == null) {
            var St = be.defaultValue, Rt = be.children;
            if (Rt != null) {
              if (s("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), St != null)
                throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
              if (Array.isArray(Rt)) {
                if (!(Rt.length <= 1))
                  throw Error("<textarea> can only have at most one child.");
                Rt = Rt[0];
              }
              St = "" + Rt;
            }
            St == null && (St = ""), pt = St;
          }
          be = t({}, be, {
            value: void 0,
            children: "" + pt
          });
        } else if (xe === "select") {
          {
            Ji.checkPropTypes("select", be);
            for (var $t = 0; $t < cp.length; $t++) {
              var ke = cp[$t];
              if (be[ke] != null) {
                var fr = Array.isArray(be[ke]);
                be.multiple && !fr ? s("The `%s` prop supplied to <select> must be an array if `multiple` is true.", ke) : !be.multiple && fr && s("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", ke);
              }
            }
            be.value !== void 0 && be.defaultValue !== void 0 && !tp && (s("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"), tp = !0);
          }
          this.currentSelectValue = be.value != null ? be.value : be.defaultValue, be = t({}, be, {
            value: void 0
          });
        } else if (xe === "option") {
          var Vt = null, zt = this.currentSelectValue, Yt = AS(be.children);
          if (zt != null) {
            var zr;
            if (be.value != null ? zr = be.value + "" : zr = Yt, Vt = !1, Array.isArray(zt)) {
              for (var dr = 0; dr < zt.length; dr++)
                if ("" + zt[dr] === zr) {
                  Vt = !0;
                  break;
                }
            } else
              Vt = "" + zt === zr;
            be = t({
              selected: void 0,
              children: void 0
            }, be, {
              selected: Vt,
              children: Yt
            });
          }
        }
        Gd(xe, be), Yw(xe, be);
        var wr = LS(te.type, xe, be, _e, this.makeStaticMarkup, this.stack.length === 1), Yr = "";
        Md.hasOwnProperty(xe) ? wr += "/>" : (wr += ">", Yr = "</" + te.type + ">");
        var pr, Sr = OS(be);
        Sr != null ? (pr = [], _S.hasOwnProperty(xe) && Sr.charAt(0) === `
` && (wr += `
`), wr += Sr) : pr = $r(be.children);
        var Er = {
          domNamespace: Vw(Se, te.type),
          type: xe,
          children: pr,
          childIndex: 0,
          context: ne,
          footer: Yr
        };
        return Er.debugElementStack = [], this.stack.push(Er), this.previousWasTextNode = !1, wr;
      }, x;
    }();
    function jS(x) {
      var O = new hp(x, !1);
      try {
        var j = O.read(1 / 0);
        return j;
      } finally {
        O.destroy();
      }
    }
    function qS(x) {
      var O = new hp(x, !0);
      try {
        var j = O.read(1 / 0);
        return j;
      } finally {
        O.destroy();
      }
    }
    function WS() {
      throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function HS() {
      throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    var vp = {
      renderToString: jS,
      renderToStaticMarkup: qS,
      renderToNodeStream: WS,
      renderToStaticNodeStream: HS,
      version: i
    }, VS = vp.default || vp;
    ds.exports = VS;
  }()), ds.exports;
}
/** @license React v16.14.0
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps, Zp;
function x_() {
  if (Zp)
    return ps;
  Zp = 1;
  var e = Ka(), t = pe;
  function r(M) {
    for (var G = "https://reactjs.org/docs/error-decoder.html?invariant=" + M, B = 1; B < arguments.length; B++)
      G += "&args[]=" + encodeURIComponent(arguments[B]);
    return "Minified React error #" + M + "; visit " + G + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = typeof Symbol == "function" && Symbol.for, i = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107, o = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, l = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, p = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115, S = n ? Symbol.for("react.lazy") : 60116, w = n ? Symbol.for("react.block") : 60121, C = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.scope") : 60119;
  function T(M) {
    if (M._status === -1) {
      M._status = 0;
      var G = M._ctor;
      G = G(), M._result = G, G.then(function(B) {
        M._status === 0 && (B = B.default, M._status = 1, M._result = B);
      }, function(B) {
        M._status === 0 && (M._status = 2, M._result = B);
      });
    }
  }
  function R(M) {
    if (M == null)
      return null;
    if (typeof M == "function")
      return M.displayName || M.name || null;
    if (typeof M == "string")
      return M;
    switch (M) {
      case a:
        return "Fragment";
      case i:
        return "Portal";
      case s:
        return "Profiler";
      case o:
        return "StrictMode";
      case d:
        return "Suspense";
      case p:
        return "SuspenseList";
    }
    if (typeof M == "object")
      switch (M.$$typeof) {
        case u:
          return "Context.Consumer";
        case l:
          return "Context.Provider";
        case f:
          var G = M.render;
          return G = G.displayName || G.name || "", M.displayName || (G !== "" ? "ForwardRef(" + G + ")" : "ForwardRef");
        case m:
          return R(M.type);
        case w:
          return R(M.render);
        case S:
          if (M = M._status === 1 ? M._result : null)
            return R(M);
      }
    return null;
  }
  var P = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  P.hasOwnProperty("ReactCurrentDispatcher") || (P.ReactCurrentDispatcher = { current: null }), P.hasOwnProperty("ReactCurrentBatchConfig") || (P.ReactCurrentBatchConfig = { suspense: null });
  var N = {};
  function L(M, G) {
    for (var B = M._threadCount | 0; B <= G; B++)
      M[B] = M._currentValue2, M._threadCount = B + 1;
  }
  function W(M, G, B, ye) {
    if (ye && (ye = M.contextType, typeof ye == "object" && ye !== null))
      return L(ye, B), ye[B];
    if (M = M.contextTypes) {
      B = {};
      for (var Te in M)
        B[Te] = G[Te];
      G = B;
    } else
      G = N;
    return G;
  }
  for (var Y = new Uint16Array(16), re = 0; 15 > re; re++)
    Y[re] = re + 1;
  Y[15] = 0;
  var z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Q = Object.prototype.hasOwnProperty, se = {}, X = {};
  function ee(M) {
    return Q.call(X, M) ? !0 : Q.call(se, M) ? !1 : z.test(M) ? X[M] = !0 : (se[M] = !0, !1);
  }
  function J(M, G, B, ye) {
    if (B !== null && B.type === 0)
      return !1;
    switch (typeof G) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return ye ? !1 : B !== null ? !B.acceptsBooleans : (M = M.toLowerCase().slice(0, 5), M !== "data-" && M !== "aria-");
      default:
        return !1;
    }
  }
  function ue(M, G, B, ye) {
    if (G === null || typeof G > "u" || J(M, G, B, ye))
      return !0;
    if (ye)
      return !1;
    if (B !== null)
      switch (B.type) {
        case 3:
          return !G;
        case 4:
          return G === !1;
        case 5:
          return isNaN(G);
        case 6:
          return isNaN(G) || 1 > G;
      }
    return !1;
  }
  function ce(M, G, B, ye, Te, we) {
    this.acceptsBooleans = G === 2 || G === 3 || G === 4, this.attributeName = ye, this.attributeNamespace = Te, this.mustUseProperty = B, this.propertyName = M, this.type = G, this.sanitizeURL = we;
  }
  var Z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(M) {
    Z[M] = new ce(M, 0, !1, M, null, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(M) {
    var G = M[0];
    Z[G] = new ce(G, 1, !1, M[1], null, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(M) {
    Z[M] = new ce(M, 2, !1, M.toLowerCase(), null, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(M) {
    Z[M] = new ce(M, 2, !1, M, null, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(M) {
    Z[M] = new ce(M, 3, !1, M.toLowerCase(), null, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(M) {
    Z[M] = new ce(M, 3, !0, M, null, !1);
  }), ["capture", "download"].forEach(function(M) {
    Z[M] = new ce(M, 4, !1, M, null, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(M) {
    Z[M] = new ce(M, 6, !1, M, null, !1);
  }), ["rowSpan", "start"].forEach(function(M) {
    Z[M] = new ce(M, 5, !1, M.toLowerCase(), null, !1);
  });
  var V = /[\-:]([a-z])/g;
  function h(M) {
    return M[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(M) {
    var G = M.replace(
      V,
      h
    );
    Z[G] = new ce(G, 1, !1, M, null, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(M) {
    var G = M.replace(V, h);
    Z[G] = new ce(G, 1, !1, M, "http://www.w3.org/1999/xlink", !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(M) {
    var G = M.replace(V, h);
    Z[G] = new ce(G, 1, !1, M, "http://www.w3.org/XML/1998/namespace", !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(M) {
    Z[M] = new ce(M, 1, !1, M.toLowerCase(), null, !1);
  }), Z.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach(function(M) {
    Z[M] = new ce(M, 1, !1, M.toLowerCase(), null, !0);
  });
  var v = /["'&<>]/;
  function g(M) {
    if (typeof M == "boolean" || typeof M == "number")
      return "" + M;
    M = "" + M;
    var G = v.exec(M);
    if (G) {
      var B = "", ye, Te = 0;
      for (ye = G.index; ye < M.length; ye++) {
        switch (M.charCodeAt(ye)) {
          case 34:
            G = "&quot;";
            break;
          case 38:
            G = "&amp;";
            break;
          case 39:
            G = "&#x27;";
            break;
          case 60:
            G = "&lt;";
            break;
          case 62:
            G = "&gt;";
            break;
          default:
            continue;
        }
        Te !== ye && (B += M.substring(Te, ye)), Te = ye + 1, B += G;
      }
      M = Te !== ye ? B + M.substring(Te, ye) : B;
    }
    return M;
  }
  function b(M, G) {
    var B = Z.hasOwnProperty(M) ? Z[M] : null, ye;
    return (ye = M !== "style") && (ye = B !== null ? B.type === 0 : !(!(2 < M.length) || M[0] !== "o" && M[0] !== "O" || M[1] !== "n" && M[1] !== "N")), ye || ue(M, G, B, !1) ? "" : B !== null ? (M = B.attributeName, ye = B.type, ye === 3 || ye === 4 && G === !0 ? M + '=""' : (B.sanitizeURL && (G = "" + G), M + '="' + (g(G) + '"'))) : ee(M) ? M + '="' + (g(G) + '"') : "";
  }
  function A(M, G) {
    return M === G && (M !== 0 || 1 / M === 1 / G) || M !== M && G !== G;
  }
  var E = typeof Object.is == "function" ? Object.is : A, I = null, H = null, q = null, K = !1, ae = !1, U = null, ve = 0;
  function de() {
    if (I === null)
      throw Error(r(321));
    return I;
  }
  function he() {
    if (0 < ve)
      throw Error(r(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ee() {
    return q === null ? H === null ? (K = !1, H = q = he()) : (K = !0, q = H) : q.next === null ? (K = !1, q = q.next = he()) : (K = !0, q = q.next), q;
  }
  function De(M, G, B, ye) {
    for (; ae; )
      ae = !1, ve += 1, q = null, B = M(G, ye);
    return H = I = null, ve = 0, q = U = null, B;
  }
  function Ce(M, G) {
    return typeof G == "function" ? G(M) : G;
  }
  function Ie(M, G, B) {
    if (I = de(), q = Ee(), K) {
      var ye = q.queue;
      if (G = ye.dispatch, U !== null && (B = U.get(ye), B !== void 0)) {
        U.delete(ye), ye = q.memoizedState;
        do
          ye = M(ye, B.action), B = B.next;
        while (B !== null);
        return q.memoizedState = ye, [ye, G];
      }
      return [q.memoizedState, G];
    }
    return M = M === Ce ? typeof G == "function" ? G() : G : B !== void 0 ? B(G) : G, q.memoizedState = M, M = q.queue = { last: null, dispatch: null }, M = M.dispatch = Oe.bind(null, I, M), [q.memoizedState, M];
  }
  function Oe(M, G, B) {
    if (!(25 > ve))
      throw Error(r(301));
    if (M === I)
      if (ae = !0, M = { action: B, next: null }, U === null && (U = /* @__PURE__ */ new Map()), B = U.get(G), B === void 0)
        U.set(G, M);
      else {
        for (G = B; G.next !== null; )
          G = G.next;
        G.next = M;
      }
  }
  function Ke() {
  }
  var $e = 0, Me = { readContext: function(M) {
    var G = $e;
    return L(M, G), M[G];
  }, useContext: function(M) {
    de();
    var G = $e;
    return L(M, G), M[G];
  }, useMemo: function(M, G) {
    if (I = de(), q = Ee(), G = G === void 0 ? null : G, q !== null) {
      var B = q.memoizedState;
      if (B !== null && G !== null) {
        e: {
          var ye = B[1];
          if (ye === null)
            ye = !1;
          else {
            for (var Te = 0; Te < ye.length && Te < G.length; Te++)
              if (!E(G[Te], ye[Te])) {
                ye = !1;
                break e;
              }
            ye = !0;
          }
        }
        if (ye)
          return B[0];
      }
    }
    return M = M(), q.memoizedState = [M, G], M;
  }, useReducer: Ie, useRef: function(M) {
    I = de(), q = Ee();
    var G = q.memoizedState;
    return G === null ? (M = { current: M }, q.memoizedState = M) : G;
  }, useState: function(M) {
    return Ie(Ce, M);
  }, useLayoutEffect: function() {
  }, useCallback: function(M) {
    return M;
  }, useImperativeHandle: Ke, useEffect: Ke, useDebugValue: Ke, useResponder: function(M, G) {
    return { props: G, responder: M };
  }, useDeferredValue: function(M) {
    return de(), M;
  }, useTransition: function() {
    return de(), [function(M) {
      M();
    }, !1];
  } }, He = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function st(M) {
    switch (M) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  var ze = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, Je = e({ menuitem: !0 }, ze), Ye = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ve = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ye).forEach(function(M) {
    Ve.forEach(function(G) {
      G = G + M.charAt(0).toUpperCase() + M.substring(1), Ye[G] = Ye[M];
    });
  });
  var Qe = /([A-Z])/g, qe = /^ms-/, fe = t.Children.toArray, F = P.ReactCurrentDispatcher, $ = { listing: !0, pre: !0, textarea: !0 }, Fe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, We = {}, it = {};
  function Le(M) {
    if (M == null)
      return M;
    var G = "";
    return t.Children.forEach(M, function(B) {
      B != null && (G += B);
    }), G;
  }
  var Dt = Object.prototype.hasOwnProperty, qt = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
  function mt(M, G) {
    if (M === void 0)
      throw Error(r(152, R(G) || "Component"));
  }
  function At(M, G, B) {
    function ye(Pe, me) {
      var ge = me.prototype && me.prototype.isReactComponent, gt = W(me, G, B, ge), et = [], Be = !1, rt = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (et === null)
          return null;
      }, enqueueReplaceState: function(wt, br) {
        Be = !0, et = [br];
      }, enqueueSetState: function(wt, br) {
        if (et === null)
          return null;
        et.push(br);
      } };
      if (ge) {
        if (ge = new me(Pe.props, gt, rt), typeof me.getDerivedStateFromProps == "function") {
          var Ze = me.getDerivedStateFromProps.call(null, Pe.props, ge.state);
          Ze != null && (ge.state = e({}, ge.state, Ze));
        }
      } else if (I = {}, ge = me(
        Pe.props,
        gt,
        rt
      ), ge = De(me, Pe.props, ge, gt), ge == null || ge.render == null) {
        M = ge, mt(M, me);
        return;
      }
      if (ge.props = Pe.props, ge.context = gt, ge.updater = rt, rt = ge.state, rt === void 0 && (ge.state = rt = null), typeof ge.UNSAFE_componentWillMount == "function" || typeof ge.componentWillMount == "function")
        if (typeof ge.componentWillMount == "function" && typeof me.getDerivedStateFromProps != "function" && ge.componentWillMount(), typeof ge.UNSAFE_componentWillMount == "function" && typeof me.getDerivedStateFromProps != "function" && ge.UNSAFE_componentWillMount(), et.length) {
          rt = et;
          var at = Be;
          if (et = null, Be = !1, at && rt.length === 1)
            ge.state = rt[0];
          else {
            Ze = at ? rt[0] : ge.state;
            var dt = !0;
            for (at = at ? 1 : 0; at < rt.length; at++) {
              var ft = rt[at];
              ft = typeof ft == "function" ? ft.call(ge, Ze, Pe.props, gt) : ft, ft != null && (dt ? (dt = !1, Ze = e({}, Ze, ft)) : e(Ze, ft));
            }
            ge.state = Ze;
          }
        } else
          et = null;
      if (M = ge.render(), mt(M, me), typeof ge.getChildContext == "function" && (Pe = me.childContextTypes, typeof Pe == "object")) {
        var ht = ge.getChildContext();
        for (var Wt in ht)
          if (!(Wt in Pe))
            throw Error(r(108, R(me) || "Unknown", Wt));
      }
      ht && (G = e({}, G, ht));
    }
    for (; t.isValidElement(M); ) {
      var Te = M, we = Te.type;
      if (typeof we != "function")
        break;
      ye(Te, we);
    }
    return { child: M, context: G };
  }
  var It = function() {
    function M(B, ye) {
      t.isValidElement(B) ? B.type !== a ? B = [B] : (B = B.props.children, B = t.isValidElement(B) ? [B] : fe(B)) : B = fe(B), B = { type: null, domNamespace: He.html, children: B, childIndex: 0, context: N, footer: "" };
      var Te = Y[0];
      if (Te === 0) {
        var we = Y;
        Te = we.length;
        var Pe = 2 * Te;
        if (!(65536 >= Pe))
          throw Error(r(304));
        var me = new Uint16Array(Pe);
        for (me.set(we), Y = me, Y[0] = Te + 1, we = Te; we < Pe - 1; we++)
          Y[we] = we + 1;
        Y[Pe - 1] = 0;
      } else
        Y[0] = Y[Te];
      this.threadID = Te, this.stack = [B], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = ye, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [];
    }
    var G = M.prototype;
    return G.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var B = this.threadID;
        Y[B] = Y[0], Y[0] = B;
      }
    }, G.pushProvider = function(B) {
      var ye = ++this.contextIndex, Te = B.type._context, we = this.threadID;
      L(Te, we);
      var Pe = Te[we];
      this.contextStack[ye] = Te, this.contextValueStack[ye] = Pe, Te[we] = B.props.value;
    }, G.popProvider = function() {
      var B = this.contextIndex, ye = this.contextStack[B], Te = this.contextValueStack[B];
      this.contextStack[B] = null, this.contextValueStack[B] = null, this.contextIndex--, ye[this.threadID] = Te;
    }, G.clearProviders = function() {
      for (var B = this.contextIndex; 0 <= B; B--)
        this.contextStack[B][this.threadID] = this.contextValueStack[B];
    }, G.read = function(B) {
      if (this.exhausted)
        return null;
      var ye = $e;
      $e = this.threadID;
      var Te = F.current;
      F.current = Me;
      try {
        for (var we = [""], Pe = !1; we[0].length < B; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var me = this.threadID;
            Y[me] = Y[0], Y[0] = me;
            break;
          }
          var ge = this.stack[this.stack.length - 1];
          if (Pe || ge.childIndex >= ge.children.length) {
            var gt = ge.footer;
            if (gt !== "" && (this.previousWasTextNode = !1), this.stack.pop(), ge.type === "select")
              this.currentSelectValue = null;
            else if (ge.type != null && ge.type.type != null && ge.type.type.$$typeof === l)
              this.popProvider(ge.type);
            else if (ge.type === d) {
              this.suspenseDepth--;
              var et = we.pop();
              if (Pe) {
                Pe = !1;
                var Be = ge.fallbackFrame;
                if (!Be)
                  throw Error(r(303));
                this.stack.push(Be), we[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                we[this.suspenseDepth] += et;
            }
            we[this.suspenseDepth] += gt;
          } else {
            var rt = ge.children[ge.childIndex++], Ze = "";
            try {
              Ze += this.render(rt, ge.context, ge.domNamespace);
            } catch (at) {
              throw at != null && typeof at.then == "function" ? Error(r(294)) : at;
            } finally {
            }
            we.length <= this.suspenseDepth && we.push(""), we[this.suspenseDepth] += Ze;
          }
        }
        return we[0];
      } finally {
        F.current = Te, $e = ye;
      }
    }, G.render = function(B, ye, Te) {
      if (typeof B == "string" || typeof B == "number")
        return Te = "" + B, Te === "" ? "" : this.makeStaticMarkup ? g(Te) : this.previousWasTextNode ? "<!-- -->" + g(Te) : (this.previousWasTextNode = !0, g(Te));
      if (ye = At(B, ye, this.threadID), B = ye.child, ye = ye.context, B === null || B === !1)
        return "";
      if (!t.isValidElement(B)) {
        if (B != null && B.$$typeof != null)
          throw Te = B.$$typeof, Error(Te === i ? r(257) : r(258, Te.toString()));
        return B = fe(B), this.stack.push({ type: null, domNamespace: Te, children: B, childIndex: 0, context: ye, footer: "" }), "";
      }
      var we = B.type;
      if (typeof we == "string")
        return this.renderDOM(B, ye, Te);
      switch (we) {
        case o:
        case c:
        case s:
        case p:
        case a:
          return B = fe(B.props.children), this.stack.push({ type: null, domNamespace: Te, children: B, childIndex: 0, context: ye, footer: "" }), "";
        case d:
          throw Error(r(294));
      }
      if (typeof we == "object" && we !== null)
        switch (we.$$typeof) {
          case f:
            I = {};
            var Pe = we.render(B.props, B.ref);
            return Pe = De(we.render, B.props, Pe, B.ref), Pe = fe(Pe), this.stack.push({ type: null, domNamespace: Te, children: Pe, childIndex: 0, context: ye, footer: "" }), "";
          case m:
            return B = [t.createElement(we.type, e({ ref: B.ref }, B.props))], this.stack.push({ type: null, domNamespace: Te, children: B, childIndex: 0, context: ye, footer: "" }), "";
          case l:
            return we = fe(B.props.children), Te = {
              type: B,
              domNamespace: Te,
              children: we,
              childIndex: 0,
              context: ye,
              footer: ""
            }, this.pushProvider(B), this.stack.push(Te), "";
          case u:
            we = B.type, Pe = B.props;
            var me = this.threadID;
            return L(we, me), we = fe(Pe.children(we[me])), this.stack.push({ type: B, domNamespace: Te, children: we, childIndex: 0, context: ye, footer: "" }), "";
          case C:
            throw Error(r(338));
          case S:
            switch (we = B.type, T(we), we._status) {
              case 1:
                return B = [t.createElement(we._result, e({ ref: B.ref }, B.props))], this.stack.push({ type: null, domNamespace: Te, children: B, childIndex: 0, context: ye, footer: "" }), "";
              case 2:
                throw we._result;
              default:
                throw Error(r(295));
            }
          case y:
            throw Error(r(343));
        }
      throw Error(r(130, we == null ? we : typeof we, ""));
    }, G.renderDOM = function(B, ye, Te) {
      var we = B.type.toLowerCase();
      if (!We.hasOwnProperty(we)) {
        if (!Fe.test(we))
          throw Error(r(65, we));
        We[we] = !0;
      }
      var Pe = B.props;
      if (we === "input")
        Pe = e({ type: void 0 }, Pe, { defaultChecked: void 0, defaultValue: void 0, value: Pe.value != null ? Pe.value : Pe.defaultValue, checked: Pe.checked != null ? Pe.checked : Pe.defaultChecked });
      else if (we === "textarea") {
        var me = Pe.value;
        if (me == null) {
          me = Pe.defaultValue;
          var ge = Pe.children;
          if (ge != null) {
            if (me != null)
              throw Error(r(92));
            if (Array.isArray(ge)) {
              if (!(1 >= ge.length))
                throw Error(r(93));
              ge = ge[0];
            }
            me = "" + ge;
          }
          me == null && (me = "");
        }
        Pe = e({}, Pe, { value: void 0, children: "" + me });
      } else if (we === "select")
        this.currentSelectValue = Pe.value != null ? Pe.value : Pe.defaultValue, Pe = e({}, Pe, { value: void 0 });
      else if (we === "option") {
        ge = this.currentSelectValue;
        var gt = Le(Pe.children);
        if (ge != null) {
          var et = Pe.value != null ? Pe.value + "" : gt;
          if (me = !1, Array.isArray(ge)) {
            for (var Be = 0; Be < ge.length; Be++)
              if ("" + ge[Be] === et) {
                me = !0;
                break;
              }
          } else
            me = "" + ge === et;
          Pe = e(
            { selected: void 0, children: void 0 },
            Pe,
            { selected: me, children: gt }
          );
        }
      }
      if (me = Pe) {
        if (Je[we] && (me.children != null || me.dangerouslySetInnerHTML != null))
          throw Error(r(137, we, ""));
        if (me.dangerouslySetInnerHTML != null) {
          if (me.children != null)
            throw Error(r(60));
          if (!(typeof me.dangerouslySetInnerHTML == "object" && "__html" in me.dangerouslySetInnerHTML))
            throw Error(r(61));
        }
        if (me.style != null && typeof me.style != "object")
          throw Error(r(62, ""));
      }
      me = Pe, ge = this.makeStaticMarkup, gt = this.stack.length === 1, et = "<" + B.type;
      for (wt in me)
        if (Dt.call(me, wt)) {
          var rt = me[wt];
          if (rt != null) {
            if (wt === "style") {
              Be = void 0;
              var Ze = "", at = "";
              for (Be in rt)
                if (rt.hasOwnProperty(Be)) {
                  var dt = Be.indexOf("--") === 0, ft = rt[Be];
                  if (ft != null) {
                    if (dt)
                      var ht = Be;
                    else if (ht = Be, it.hasOwnProperty(ht))
                      ht = it[ht];
                    else {
                      var Wt = ht.replace(Qe, "-$1").toLowerCase().replace(qe, "-ms-");
                      ht = it[ht] = Wt;
                    }
                    Ze += at + ht + ":", at = Be, dt = ft == null || typeof ft == "boolean" || ft === "" ? "" : dt || typeof ft != "number" || ft === 0 || Ye.hasOwnProperty(at) && Ye[at] ? ("" + ft).trim() : ft + "px", Ze += dt, at = ";";
                  }
                }
              rt = Ze || null;
            }
            Be = null;
            e:
              if (dt = we, ft = me, dt.indexOf("-") === -1)
                dt = typeof ft.is == "string";
              else
                switch (dt) {
                  case "annotation-xml":
                  case "color-profile":
                  case "font-face":
                  case "font-face-src":
                  case "font-face-uri":
                  case "font-face-format":
                  case "font-face-name":
                  case "missing-glyph":
                    dt = !1;
                    break e;
                  default:
                    dt = !0;
                }
            dt ? qt.hasOwnProperty(wt) || (Be = wt, Be = ee(Be) && rt != null ? Be + '="' + (g(rt) + '"') : "") : Be = b(wt, rt), Be && (et += " " + Be);
          }
        }
      ge || gt && (et += ' data-reactroot=""');
      var wt = et;
      me = "", ze.hasOwnProperty(we) ? wt += "/>" : (wt += ">", me = "</" + B.type + ">");
      e: {
        if (ge = Pe.dangerouslySetInnerHTML, ge != null) {
          if (ge.__html != null) {
            ge = ge.__html;
            break e;
          }
        } else if (ge = Pe.children, typeof ge == "string" || typeof ge == "number") {
          ge = g(ge);
          break e;
        }
        ge = null;
      }
      return ge != null ? (Pe = [], $.hasOwnProperty(we) && ge.charAt(0) === `
` && (wt += `
`), wt += ge) : Pe = fe(Pe.children), B = B.type, Te = Te == null || Te === "http://www.w3.org/1999/xhtml" ? st(B) : Te === "http://www.w3.org/2000/svg" && B === "foreignObject" ? "http://www.w3.org/1999/xhtml" : Te, this.stack.push({ domNamespace: Te, type: we, children: Pe, childIndex: 0, context: ye, footer: me }), this.previousWasTextNode = !1, wt;
    }, M;
  }(), Et = { renderToString: function(M) {
    M = new It(M, !1);
    try {
      return M.read(1 / 0);
    } finally {
      M.destroy();
    }
  }, renderToStaticMarkup: function(M) {
    M = new It(M, !0);
    try {
      return M.read(1 / 0);
    } finally {
      M.destroy();
    }
  }, renderToNodeStream: function() {
    throw Error(r(207));
  }, renderToStaticNodeStream: function() {
    throw Error(r(208));
  }, version: "16.14.0" };
  return ps = Et.default || Et, ps;
}
process.env.NODE_ENV === "production" ? Oc.exports = x_() : Oc.exports = S_();
var C_ = Oc.exports;
const __ = /* @__PURE__ */ nr(C_);
var Hy = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Hy);
var Vy = Hy.exports, hs = { exports: {} }, Qp = {}, vs = { exports: {} }, eh;
function nn() {
  if (eh)
    return vs.exports;
  eh = 1;
  var e = vs.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
  return typeof __g == "number" && (__g = e), vs.exports;
}
var gs = { exports: {} }, th;
function ir() {
  if (th)
    return gs.exports;
  th = 1;
  var e = gs.exports = { version: "2.6.12" };
  return typeof __e == "number" && (__e = e), gs.exports;
}
var ms, rh;
function T_() {
  return rh || (rh = 1, ms = function(e) {
    if (typeof e != "function")
      throw TypeError(e + " is not a function!");
    return e;
  }), ms;
}
var ys, nh;
function Cf() {
  if (nh)
    return ys;
  nh = 1;
  var e = T_();
  return ys = function(t, r, n) {
    if (e(t), r === void 0)
      return t;
    switch (n) {
      case 1:
        return function(i) {
          return t.call(r, i);
        };
      case 2:
        return function(i, a) {
          return t.call(r, i, a);
        };
      case 3:
        return function(i, a, o) {
          return t.call(r, i, a, o);
        };
    }
    return function() {
      return t.apply(r, arguments);
    };
  }, ys;
}
var bs = {}, ws, ih;
function Jn() {
  return ih || (ih = 1, ws = function(e) {
    return typeof e == "object" ? e !== null : typeof e == "function";
  }), ws;
}
var Ss, ah;
function Zn() {
  if (ah)
    return Ss;
  ah = 1;
  var e = Jn();
  return Ss = function(t) {
    if (!e(t))
      throw TypeError(t + " is not an object!");
    return t;
  }, Ss;
}
var xs, oh;
function Qn() {
  return oh || (oh = 1, xs = function(e) {
    try {
      return !!e();
    } catch {
      return !0;
    }
  }), xs;
}
var Cs, sh;
function an() {
  return sh || (sh = 1, Cs = !Qn()(function() {
    return Object.defineProperty({}, "a", { get: function() {
      return 7;
    } }).a != 7;
  })), Cs;
}
var _s, lh;
function By() {
  if (lh)
    return _s;
  lh = 1;
  var e = Jn(), t = nn().document, r = e(t) && e(t.createElement);
  return _s = function(n) {
    return r ? t.createElement(n) : {};
  }, _s;
}
var Ts, uh;
function Uy() {
  return uh || (uh = 1, Ts = !an() && !Qn()(function() {
    return Object.defineProperty(By()("div"), "a", { get: function() {
      return 7;
    } }).a != 7;
  })), Ts;
}
var Ps, ch;
function _f() {
  if (ch)
    return Ps;
  ch = 1;
  var e = Jn();
  return Ps = function(t, r) {
    if (!e(t))
      return t;
    var n, i;
    if (r && typeof (n = t.toString) == "function" && !e(i = n.call(t)) || typeof (n = t.valueOf) == "function" && !e(i = n.call(t)) || !r && typeof (n = t.toString) == "function" && !e(i = n.call(t)))
      return i;
    throw TypeError("Can't convert object to primitive value");
  }, Ps;
}
var fh;
function on() {
  if (fh)
    return bs;
  fh = 1;
  var e = Zn(), t = Uy(), r = _f(), n = Object.defineProperty;
  return bs.f = an() ? Object.defineProperty : function(a, o, s) {
    if (e(a), o = r(o, !0), e(s), t)
      try {
        return n(a, o, s);
      } catch {
      }
    if ("get" in s || "set" in s)
      throw TypeError("Accessors not supported!");
    return "value" in s && (a[o] = s.value), a;
  }, bs;
}
var Ds, dh;
function Ri() {
  return dh || (dh = 1, Ds = function(e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t
    };
  }), Ds;
}
var Es, ph;
function ei() {
  if (ph)
    return Es;
  ph = 1;
  var e = on(), t = Ri();
  return Es = an() ? function(r, n, i) {
    return e.f(r, n, t(1, i));
  } : function(r, n, i) {
    return r[n] = i, r;
  }, Es;
}
var Rs, hh;
function xn() {
  if (hh)
    return Rs;
  hh = 1;
  var e = {}.hasOwnProperty;
  return Rs = function(t, r) {
    return e.call(t, r);
  }, Rs;
}
var Os, vh;
function sn() {
  if (vh)
    return Os;
  vh = 1;
  var e = nn(), t = ir(), r = Cf(), n = ei(), i = xn(), a = "prototype", o = function(s, l, u) {
    var c = s & o.F, f = s & o.G, d = s & o.S, p = s & o.P, m = s & o.B, S = s & o.W, w = f ? t : t[l] || (t[l] = {}), C = w[a], y = f ? e : d ? e[l] : (e[l] || {})[a], T, R, P;
    f && (u = l);
    for (T in u)
      R = !c && y && y[T] !== void 0, !(R && i(w, T)) && (P = R ? y[T] : u[T], w[T] = f && typeof y[T] != "function" ? u[T] : m && R ? r(P, e) : S && y[T] == P ? function(N) {
        var L = function(W, Y, re) {
          if (this instanceof N) {
            switch (arguments.length) {
              case 0:
                return new N();
              case 1:
                return new N(W);
              case 2:
                return new N(W, Y);
            }
            return new N(W, Y, re);
          }
          return N.apply(this, arguments);
        };
        return L[a] = N[a], L;
      }(P) : p && typeof P == "function" ? r(Function.call, P) : P, p && ((w.virtual || (w.virtual = {}))[T] = P, s & o.R && C && !C[T] && n(C, T, P)));
  };
  return o.F = 1, o.G = 2, o.S = 4, o.P = 8, o.B = 16, o.W = 32, o.U = 64, o.R = 128, Os = o, Os;
}
var ks, gh;
function Tf() {
  if (gh)
    return ks;
  gh = 1;
  var e = {}.toString;
  return ks = function(t) {
    return e.call(t).slice(8, -1);
  }, ks;
}
var As, mh;
function $y() {
  if (mh)
    return As;
  mh = 1;
  var e = Tf();
  return As = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
    return e(t) == "String" ? t.split("") : Object(t);
  }, As;
}
var Is, yh;
function Pf() {
  return yh || (yh = 1, Is = function(e) {
    if (e == null)
      throw TypeError("Can't call method on  " + e);
    return e;
  }), Is;
}
var Ns, bh;
function Cn() {
  if (bh)
    return Ns;
  bh = 1;
  var e = $y(), t = Pf();
  return Ns = function(r) {
    return e(t(r));
  }, Ns;
}
var P_ = Math.ceil, D_ = Math.floor, Df = function(e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? D_ : P_)(e);
}, E_ = Df, R_ = Math.min, zy = function(e) {
  return e > 0 ? R_(E_(e), 9007199254740991) : 0;
}, Ms, wh;
function O_() {
  if (wh)
    return Ms;
  wh = 1;
  var e = Df, t = Math.max, r = Math.min;
  return Ms = function(n, i) {
    return n = e(n), n < 0 ? t(n + i, 0) : r(n, i);
  }, Ms;
}
var Ls, Sh;
function k_() {
  if (Sh)
    return Ls;
  Sh = 1;
  var e = Cn(), t = zy, r = O_();
  return Ls = function(n) {
    return function(i, a, o) {
      var s = e(i), l = t(s.length), u = r(o, l), c;
      if (n && a != a) {
        for (; l > u; )
          if (c = s[u++], c != c)
            return !0;
      } else
        for (; l > u; u++)
          if ((n || u in s) && s[u] === a)
            return n || u || 0;
      return !n && -1;
    };
  }, Ls;
}
var Fs = { exports: {} }, js, xh;
function Za() {
  return xh || (xh = 1, js = !0), js;
}
var Ch;
function Ef() {
  if (Ch)
    return Fs.exports;
  Ch = 1;
  var e = ir(), t = nn(), r = "__core-js_shared__", n = t[r] || (t[r] = {});
  return (Fs.exports = function(i, a) {
    return n[i] || (n[i] = a !== void 0 ? a : {});
  })("versions", []).push({
    version: e.version,
    mode: Za() ? "pure" : "global",
    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
  }), Fs.exports;
}
var qs, _h;
function Qa() {
  if (_h)
    return qs;
  _h = 1;
  var e = 0, t = Math.random();
  return qs = function(r) {
    return "Symbol(".concat(r === void 0 ? "" : r, ")_", (++e + t).toString(36));
  }, qs;
}
var Ws, Th;
function Rf() {
  if (Th)
    return Ws;
  Th = 1;
  var e = Ef()("keys"), t = Qa();
  return Ws = function(r) {
    return e[r] || (e[r] = t(r));
  }, Ws;
}
var Hs, Ph;
function Yy() {
  if (Ph)
    return Hs;
  Ph = 1;
  var e = xn(), t = Cn(), r = k_()(!1), n = Rf()("IE_PROTO");
  return Hs = function(i, a) {
    var o = t(i), s = 0, l = [], u;
    for (u in o)
      u != n && e(o, u) && l.push(u);
    for (; a.length > s; )
      e(o, u = a[s++]) && (~r(l, u) || l.push(u));
    return l;
  }, Hs;
}
var Vs, Dh;
function Of() {
  return Dh || (Dh = 1, Vs = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")), Vs;
}
var Bs, Eh;
function Oi() {
  if (Eh)
    return Bs;
  Eh = 1;
  var e = Yy(), t = Of();
  return Bs = Object.keys || function(n) {
    return e(n, t);
  }, Bs;
}
var Us, Rh;
function A_() {
  if (Rh)
    return Us;
  Rh = 1;
  var e = on(), t = Zn(), r = Oi();
  return Us = an() ? Object.defineProperties : function(i, a) {
    t(i);
    for (var o = r(a), s = o.length, l = 0, u; s > l; )
      e.f(i, u = o[l++], a[u]);
    return i;
  }, Us;
}
var $s, Oh;
function I_() {
  if (Oh)
    return $s;
  Oh = 1;
  var e = nn().document;
  return $s = e && e.documentElement, $s;
}
var zs, kh;
function kf() {
  if (kh)
    return zs;
  kh = 1;
  var e = Zn(), t = A_(), r = Of(), n = Rf()("IE_PROTO"), i = function() {
  }, a = "prototype", o = function() {
    var s = By()("iframe"), l = r.length, u = "<", c = ">", f;
    for (s.style.display = "none", I_().appendChild(s), s.src = "javascript:", f = s.contentWindow.document, f.open(), f.write(u + "script" + c + "document.F=Object" + u + "/script" + c), f.close(), o = f.F; l--; )
      delete o[a][r[l]];
    return o();
  };
  return zs = Object.create || function(l, u) {
    var c;
    return l !== null ? (i[a] = e(l), c = new i(), i[a] = null, c[n] = l) : c = o(), u === void 0 ? c : t(c, u);
  }, zs;
}
var Ah;
function N_() {
  if (Ah)
    return Qp;
  Ah = 1;
  var e = sn();
  return e(e.S, "Object", { create: kf() }), Qp;
}
var Ys, Ih;
function Gy() {
  if (Ih)
    return Ys;
  Ih = 1, N_();
  var e = ir().Object;
  return Ys = function(r, n) {
    return e.create(r, n);
  }, Ys;
}
var Gs = { exports: {} }, Nh = {}, Xs = {}, Ks = {}, Mh;
function eo() {
  return Mh || (Mh = 1, Ks.f = {}.propertyIsEnumerable), Ks;
}
var Lh;
function Af() {
  if (Lh)
    return Xs;
  Lh = 1;
  var e = eo(), t = Ri(), r = Cn(), n = _f(), i = xn(), a = Uy(), o = Object.getOwnPropertyDescriptor;
  return Xs.f = an() ? o : function(l, u) {
    if (l = r(l), u = n(u, !0), a)
      try {
        return o(l, u);
      } catch {
      }
    if (i(l, u))
      return t(!e.f.call(l, u), l[u]);
  }, Xs;
}
var Js, Fh;
function M_() {
  if (Fh)
    return Js;
  Fh = 1;
  var e = Jn(), t = Zn(), r = function(n, i) {
    if (t(n), !e(i) && i !== null)
      throw TypeError(i + ": can't set as prototype!");
  };
  return Js = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? (
      // eslint-disable-line
      function(n, i, a) {
        try {
          a = Cf()(Function.call, Af().f(Object.prototype, "__proto__").set, 2), a(n, []), i = !(n instanceof Array);
        } catch {
          i = !0;
        }
        return function(s, l) {
          return r(s, l), i ? s.__proto__ = l : a(s, l), s;
        };
      }({}, !1)
    ) : void 0),
    check: r
  }, Js;
}
var jh;
function L_() {
  if (jh)
    return Nh;
  jh = 1;
  var e = sn();
  return e(e.S, "Object", { setPrototypeOf: M_().set }), Nh;
}
var Zs, qh;
function Xy() {
  return qh || (qh = 1, L_(), Zs = ir().Object.setPrototypeOf), Zs;
}
var Wh;
function F_() {
  return Wh || (Wh = 1, function(e) {
    var t = Xy();
    function r(n, i) {
      return e.exports = r = t ? t.bind() : function(o, s) {
        return o.__proto__ = s, o;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, r(n, i);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Gs)), Gs.exports;
}
var Hh;
function Ky() {
  return Hh || (Hh = 1, function(e) {
    var t = Gy(), r = F_();
    function n(i, a) {
      i.prototype = t(a.prototype), i.prototype.constructor = i, r(i, a);
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(hs)), hs.exports;
}
var Qs = { exports: {} }, Vh = {}, el = {}, Bh;
function If() {
  return Bh || (Bh = 1, el.f = Object.getOwnPropertySymbols), el;
}
var tl, Uh;
function ti() {
  if (Uh)
    return tl;
  Uh = 1;
  var e = Pf();
  return tl = function(t) {
    return Object(e(t));
  }, tl;
}
var rl, $h;
function j_() {
  if ($h)
    return rl;
  $h = 1;
  var e = an(), t = Oi(), r = If(), n = eo(), i = ti(), a = $y(), o = Object.assign;
  return rl = !o || Qn()(function() {
    var s = {}, l = {}, u = Symbol(), c = "abcdefghijklmnopqrst";
    return s[u] = 7, c.split("").forEach(function(f) {
      l[f] = f;
    }), o({}, s)[u] != 7 || Object.keys(o({}, l)).join("") != c;
  }) ? function(l, u) {
    for (var c = i(l), f = arguments.length, d = 1, p = r.f, m = n.f; f > d; )
      for (var S = a(arguments[d++]), w = p ? t(S).concat(p(S)) : t(S), C = w.length, y = 0, T; C > y; )
        T = w[y++], (!e || m.call(S, T)) && (c[T] = S[T]);
    return c;
  } : o, rl;
}
var zh;
function q_() {
  if (zh)
    return Vh;
  zh = 1;
  var e = sn();
  return e(e.S + e.F, "Object", { assign: j_() }), Vh;
}
var nl, Yh;
function Jy() {
  return Yh || (Yh = 1, q_(), nl = ir().Object.assign), nl;
}
var Gh;
function Zy() {
  return Gh || (Gh = 1, function(e) {
    var t = Jy();
    function r() {
      return e.exports = r = t ? t.bind() : function(n) {
        for (var i = 1; i < arguments.length; i++) {
          var a = arguments[i];
          for (var o in a)
            Object.prototype.hasOwnProperty.call(a, o) && (n[o] = a[o]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, r.apply(this, arguments);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Qs)), Qs.exports;
}
var il = { exports: {} }, Xh = {}, al, Kh;
function Nf() {
  if (Kh)
    return al;
  Kh = 1;
  var e = sn(), t = ir(), r = Qn();
  return al = function(n, i) {
    var a = (t.Object || {})[n] || Object[n], o = {};
    o[n] = i(a), e(e.S + e.F * r(function() {
      a(1);
    }), "Object", o);
  }, al;
}
var Jh;
function W_() {
  if (Jh)
    return Xh;
  Jh = 1;
  var e = ti(), t = Oi();
  return Nf()("keys", function() {
    return function(n) {
      return t(e(n));
    };
  }), Xh;
}
var ol, Zh;
function H_() {
  return Zh || (Zh = 1, W_(), ol = ir().Object.keys), ol;
}
var Qh;
function Qy() {
  return Qh || (Qh = 1, function(e) {
    var t = H_();
    function r(n, i) {
      if (n == null)
        return {};
      var a = {}, o = t(n), s, l;
      for (l = 0; l < o.length; l++)
        s = o[l], !(i.indexOf(s) >= 0) && (a[s] = n[s]);
      return a;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(il)), il.exports;
}
var sa = { exports: {} }, sl = { exports: {} }, ev;
function V_() {
  return ev || (ev = 1, function(e) {
    function t(r) {
      if (r === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return r;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(sl)), sl.exports;
}
var la = { exports: {} }, ua = { exports: {} }, tv;
function B_() {
  return tv || (tv = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    function r(n) {
      function i(o, s, l, u, c, f) {
        var d = u || "<<anonymous>>", p = f || l;
        if (s[l] == null)
          return o ? new Error("Required " + c + " `" + p + "` was not specified " + ("in `" + d + "`.")) : null;
        for (var m = arguments.length, S = Array(m > 6 ? m - 6 : 0), w = 6; w < m; w++)
          S[w - 6] = arguments[w];
        return n.apply(void 0, [s, l, d, c, p].concat(S));
      }
      var a = i.bind(null, !1);
      return a.isRequired = i.bind(null, !0), a;
    }
    e.exports = t.default;
  }(ua, ua.exports)), ua.exports;
}
var rv;
function U_() {
  return rv || (rv = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = pe, n = s(r), i = ff(), a = B_(), o = s(a);
    function s(u) {
      return u && u.__esModule ? u : { default: u };
    }
    function l(u, c, f, d, p) {
      var m = u[c];
      return n.default.isValidElement(m) ? new Error("Invalid " + d + " `" + p + "` of type ReactElement " + ("supplied to `" + f + "`,expected an element type (a string ") + ", component class, or function component).") : (0, i.isValidElementType)(m) ? null : new Error("Invalid " + d + " `" + p + "` of value `" + m + "` " + ("supplied to `" + f + "`, expected an element type (a string ") + ", component class, or function component).");
    }
    t.default = (0, o.default)(l), e.exports = t.default;
  }(la, la.exports)), la.exports;
}
var ca = { exports: {} }, nv;
function $_() {
  return nv || (nv = 1, function(e, t) {
    t.__esModule = !0, t.default = void 0;
    function r() {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return a.filter(function(s) {
        return s != null;
      }).reduce(function(s, l) {
        if (typeof l != "function")
          throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
        return s === null ? l : function() {
          for (var c = arguments.length, f = new Array(c), d = 0; d < c; d++)
            f[d] = arguments[d];
          s.apply(this, f), l.apply(this, f);
        };
      }, null);
    }
    var n = r;
    t.default = n, e.exports = t.default;
  }(ca, ca.exports)), ca.exports;
}
var iv;
function z_() {
  return iv || (iv = 1, function(e, t) {
    var r = Vy;
    t.__esModule = !0, t.default = void 0;
    var n = r(Zy()), i = r(Qy()), a = r(Ky()), o = r(V_()), s = r(pe), l = r(Xn), u = r(U_()), c = r($_()), f = {
      href: l.default.string,
      onClick: l.default.func,
      onKeyDown: l.default.func,
      disabled: l.default.bool,
      role: l.default.string,
      tabIndex: l.default.oneOfType([l.default.number, l.default.string]),
      /**
       * this is sort of silly but needed for Button
       */
      componentClass: u.default
    }, d = {
      componentClass: "a"
    };
    function p(w) {
      return !w || w.trim() === "#";
    }
    var m = /* @__PURE__ */ function(w) {
      (0, a.default)(C, w);
      function C(T, R) {
        var P;
        return P = w.call(this, T, R) || this, P.handleClick = P.handleClick.bind((0, o.default)((0, o.default)(P))), P.handleKeyDown = P.handleKeyDown.bind((0, o.default)((0, o.default)(P))), P;
      }
      var y = C.prototype;
      return y.handleClick = function(R) {
        var P = this.props, N = P.disabled, L = P.href, W = P.onClick;
        if ((N || p(L)) && R.preventDefault(), N) {
          R.stopPropagation();
          return;
        }
        W && W(R);
      }, y.handleKeyDown = function(R) {
        R.key === " " && (R.preventDefault(), this.handleClick(R));
      }, y.render = function() {
        var R = this.props, P = R.componentClass, N = R.disabled, L = R.onKeyDown, W = (0, i.default)(R, ["componentClass", "disabled", "onKeyDown"]);
        return p(W.href) && (W.role = W.role || "button", W.href = W.href || "#"), N && (W.tabIndex = -1, W.style = (0, n.default)({
          pointerEvents: "none"
        }, W.style)), s.default.createElement(P, (0, n.default)({}, W, {
          onClick: this.handleClick,
          onKeyDown: (0, c.default)(this.handleKeyDown, L)
        }));
      }, C;
    }(s.default.Component);
    m.propTypes = f, m.defaultProps = d;
    var S = m;
    t.default = S, e.exports = t.default;
  }(sa, sa.exports)), sa.exports;
}
var _n = Vy, Y_ = Mf, G_ = _n(Ky()), eb = _n(Zy()), tb = _n(Qy()), rb = _n(yf), vn = _n(Xn), Hn = _n(pe), nb = _n(z_()), X_ = {
  eventKey: vn.default.any,
  className: vn.default.string,
  onSelect: vn.default.func,
  disabled: vn.default.bool,
  active: vn.default.bool,
  activeLabel: vn.default.string.isRequired
}, K_ = {
  active: !1,
  disabled: !1,
  activeLabel: "(current)"
};
function Mf(e) {
  var t = e.active, r = e.disabled, n = e.className, i = e.style, a = e.activeLabel, o = e.children, s = (0, tb.default)(e, ["active", "disabled", "className", "style", "activeLabel", "children"]), l = t || r ? "span" : nb.default;
  return Hn.default.createElement("li", {
    style: i,
    className: (0, rb.default)(n, {
      active: t,
      disabled: r
    })
  }, Hn.default.createElement(l, (0, eb.default)({
    disabled: r
  }, s), o, t && Hn.default.createElement("span", {
    className: "sr-only"
  }, a)));
}
Mf.propTypes = X_;
Mf.defaultProps = K_;
function ki(e, t, r) {
  var n, i;
  return r === void 0 && (r = e), i = n = /* @__PURE__ */ function(a) {
    (0, G_.default)(o, a);
    function o() {
      return a.apply(this, arguments) || this;
    }
    var s = o.prototype;
    return s.render = function() {
      var u = this.props, c = u.disabled, f = u.children, d = u.className, p = (0, tb.default)(u, ["disabled", "children", "className"]), m = c ? "span" : nb.default;
      return Hn.default.createElement("li", (0, eb.default)({
        "aria-label": r,
        className: (0, rb.default)(d, {
          disabled: c
        })
      }, p), Hn.default.createElement(m, null, f || t));
    }, o;
  }(Hn.default.Component), n.displayName = e, n.propTypes = {
    disabled: vn.default.bool
  }, i;
}
ki("First", "«");
ki("Prev", "‹");
ki("Ellipsis", "…", "More");
ki("Next", "›");
ki("Last", "»");
class Lf extends Ue {
  constructor(r) {
    super(r);
    oe(this, "state", {
      totalPages: null
    });
    oe(this, "keyMaps");
    const {
      totalElements: n,
      pageSize: i,
      labels: {
        first: a = "First",
        last: o = "Last",
        next: s = "Next",
        previous: l = "Previous"
      } = {}
    } = r, u = {};
    u[a] = "first", u[o] = "last", u[s] = "next", u[l] = "previous", this.keyMaps = u, this.state.totalPages = n && i ? Math.ceil(n / i) : null, this.onChange = this.onChange.bind(this);
  }
  componentDidUpdate({ totalElements: r }) {
    const {
      totalElements: n,
      pageSize: i,
      labels: {
        first: a = "First",
        last: o = "Last",
        next: s = "Next",
        previous: l = "Previous"
      } = {}
    } = this.props, u = {};
    u[a] = "first", u[o] = "last", u[s] = "next", u[l] = "previous", this.keyMaps = u, r !== n && this.setState({
      totalPages: n && i ? Math.ceil(n / i) : null
    });
  }
  onChange(r) {
    const { onChange: n, activePage: i, hasMore: a } = this.props, { totalPages: o } = this.state, s = o || 0, l = i || 0;
    let u = null;
    switch (this.keyMaps[r.target.innerText] || "") {
      case "first":
        u = 0;
        break;
      case "last":
        u = s - 1;
        break;
      case "next":
        u = l + 1;
        break;
      case "previous":
        u = l - 1;
        break;
      default:
        u = parseInt(r.target.innerText, 10) - 1;
        break;
    }
    n && u >= 0 && (u < s || a !== void 0) && n(u);
  }
  render() {
    const {
      activePage: r,
      labels: {
        next: n,
        previous: i
      } = {},
      hasMore: a
    } = this.props, { totalPages: o } = this.state, s = r || 0;
    if (o) {
      const l = r !== void 0 && r < 3, u = r !== void 0 && o - r < 4, c = [], f = (p, m, S) => {
        for (let w = p; w < m; ++w)
          S.push(
            /* @__PURE__ */ _(
              Ot.Item,
              {
                active: w === r,
                onClick: this.onChange,
                children: w + 1
              },
              `page_${w}`
            )
          );
      }, d = o - 1;
      return o > 10 ? l ? (f(0, 5, c), c.push(
        /* @__PURE__ */ _(Ot.Ellipsis, {}, "page_none")
      ), c.push(
        /* @__PURE__ */ _(Ot.Item, { active: d === r, onClick: this.onChange, children: d + 1 }, `page_${d}`)
      )) : u ? (c.push(
        /* @__PURE__ */ _(Ot.Item, { active: r === 0, onClick: this.onChange, children: "1" }, "page_0")
      ), c.push(
        /* @__PURE__ */ _(Ot.Ellipsis, {}, "page_none")
      ), f(o - 5, o, c)) : (c.push(
        /* @__PURE__ */ _(Ot.Item, { active: r === 0, onClick: this.onChange, children: "1" }, "page_0")
      ), c.push(
        /* @__PURE__ */ _(Ot.Ellipsis, {}, "page_none")
      ), f(s - 1, s + 2, c), c.push(
        /* @__PURE__ */ _(Ot.Ellipsis, {}, "page_none_1")
      ), c.push(
        /* @__PURE__ */ _(Ot.Item, { active: d === r, onClick: this.onChange, children: d + 1 }, `page_${d}`)
      )) : f(0, o, c), /* @__PURE__ */ _(Qt, { children: /* @__PURE__ */ ie(Ot, { children: [
        /* @__PURE__ */ _(
          Ot.Item,
          {
            disabled: r === 0,
            onClick: r !== 0 && this.onChange || void 0,
            children: i
          }
        ),
        c,
        /* @__PURE__ */ _(
          Ot.Item,
          {
            disabled: d === r,
            onClick: d !== r && this.onChange || void 0,
            children: n
          }
        )
      ] }) });
    }
    return /* @__PURE__ */ _(Qt, { children: /* @__PURE__ */ ie(Ot, { children: [
      /* @__PURE__ */ _(
        Y_,
        {
          disabled: r === 0,
          onClick: this.onChange,
          children: i
        }
      ),
      s > 0 && /* @__PURE__ */ _(Ot.Ellipsis, {}, "page_none"),
      /* @__PURE__ */ _(Ot.Item, { active: !0, children: s + 1 }, "page_active"),
      a && /* @__PURE__ */ _(Ot.Ellipsis, {}, "page_none_1"),
      /* @__PURE__ */ _(
        Ot.Item,
        {
          disabled: a === !1,
          onClick: a === !0 && this.onChange || void 0,
          children: n
        }
      )
    ] }) });
  }
}
oe(Lf, "defaultProps", {
  activePage: void 0,
  totalElements: void 0,
  pageSize: void 0,
  hasMore: void 0,
  labels: {
    first: "First",
    last: "Last",
    previous: "Previous",
    next: "Next"
  }
});
/*! DataTables 1.13.7
 * ©2008-2023 SpryMedia Ltd - datatables.net/license
 */
var k = Re, le = function(e, t) {
  if (le.factory(e, t))
    return le;
  if (this instanceof le)
    return k(e).DataTable(t);
  t = e, this.$ = function(o, s) {
    return this.api(!0).$(o, s);
  }, this._ = function(o, s) {
    return this.api(!0).rows(o, s).data();
  }, this.api = function(o) {
    return o ? new Ge(
      Va(this[xt.iApiIndex])
    ) : new Ge(this);
  }, this.fnAddData = function(o, s) {
    var l = this.api(!0), u = Array.isArray(o) && (Array.isArray(o[0]) || k.isPlainObject(o[0])) ? l.rows.add(o) : l.row.add(o);
    return (s === void 0 || s) && l.draw(), u.flatten().toArray();
  }, this.fnAdjustColumnSizing = function(o) {
    var s = this.api(!0).columns.adjust(), l = s.settings()[0], u = l.oScroll;
    o === void 0 || o ? s.draw(!1) : (u.sX !== "" || u.sY !== "") && lo(l);
  }, this.fnClearTable = function(o) {
    var s = this.api(!0).clear();
    (o === void 0 || o) && s.draw();
  }, this.fnClose = function(o) {
    this.api(!0).row(o).child.hide();
  }, this.fnDeleteRow = function(o, s, l) {
    var u = this.api(!0), c = u.rows(o), f = c.settings()[0], d = f.aoData[c[0][0]];
    return c.remove(), s && s.call(this, f, d), (l === void 0 || l) && u.draw(), d;
  }, this.fnDestroy = function(o) {
    this.api(!0).destroy(o);
  }, this.fnDraw = function(o) {
    this.api(!0).draw(o);
  }, this.fnFilter = function(o, s, l, u, c, f) {
    var d = this.api(!0);
    s == null ? d.search(o, l, u, f) : d.column(s).search(o, l, u, f), d.draw();
  }, this.fnGetData = function(o, s) {
    var l = this.api(!0);
    if (o !== void 0) {
      var u = o.nodeName ? o.nodeName.toLowerCase() : "";
      return s !== void 0 || u == "td" || u == "th" ? l.cell(o, s).data() : l.row(o).data() || null;
    }
    return l.data().toArray();
  }, this.fnGetNodes = function(o) {
    var s = this.api(!0);
    return o !== void 0 ? s.row(o).node() : s.rows().nodes().flatten().toArray();
  }, this.fnGetPosition = function(o) {
    var s = this.api(!0), l = o.nodeName.toUpperCase();
    if (l == "TR")
      return s.row(o).index();
    if (l == "TD" || l == "TH") {
      var u = s.cell(o).index();
      return [
        u.row,
        u.columnVisible,
        u.column
      ];
    }
    return null;
  }, this.fnIsOpen = function(o) {
    return this.api(!0).row(o).child.isShown();
  }, this.fnOpen = function(o, s, l) {
    return this.api(!0).row(o).child(s, l).show().child()[0];
  }, this.fnPageChange = function(o, s) {
    var l = this.api(!0).page(o);
    (s === void 0 || s) && l.draw(!1);
  }, this.fnSetColumnVis = function(o, s, l) {
    var u = this.api(!0).column(o).visible(s);
    (l === void 0 || l) && u.columns.adjust().draw();
  }, this.fnSettings = function() {
    return Va(this[xt.iApiIndex]);
  }, this.fnSort = function(o) {
    this.api(!0).order(o).draw();
  }, this.fnSortListener = function(o, s, l) {
    this.api(!0).order.listener(o, s, l);
  }, this.fnUpdate = function(o, s, l, u, c) {
    var f = this.api(!0);
    return l == null ? f.row(s).data(o) : f.cell(s, l).data(o), (c === void 0 || c) && f.columns.adjust(), (u === void 0 || u) && f.draw(), 0;
  }, this.fnVersionCheck = xt.fnVersionCheck;
  var r = this, n = t === void 0, i = this.length;
  n && (t = {}), this.oApi = this.internal = xt.internal;
  for (var a in le.ext.internal)
    a && (this[a] = zb(a));
  return this.each(function() {
    var o = {}, s = i > 1 ? (
      // optimisation for single table case
      jc(o, t, !0)
    ) : t, l = 0, u, c = this.getAttribute("id"), f = !1, d = le.defaults, p = k(this);
    if (this.nodeName.toLowerCase() != "table") {
      yr(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
      return;
    }
    sv(d), ub(d.column), Br(d, d, !0), Br(d.column, d.column, !0), Br(d, k.extend(s, p.data()), !0);
    var m = le.settings;
    for (l = 0, u = m.length; l < u; l++) {
      var S = m[l];
      if (S.nTable == this || S.nTHead && S.nTHead.parentNode == this || S.nTFoot && S.nTFoot.parentNode == this) {
        var w = s.bRetrieve !== void 0 ? s.bRetrieve : d.bRetrieve, C = s.bDestroy !== void 0 ? s.bDestroy : d.bDestroy;
        if (n || w)
          return S.oInstance;
        if (C) {
          S.oInstance.fnDestroy();
          break;
        } else {
          yr(S, 0, "Cannot reinitialise DataTable", 3);
          return;
        }
      }
      if (S.sTableId == this.id) {
        m.splice(l, 1);
        break;
      }
    }
    (c === null || c === "") && (c = "DataTables_Table_" + le.ext._unique++, this.id = c);
    var y = k.extend(!0, {}, le.models.oSettings, {
      sDestroyWidth: p[0].style.width,
      sInstance: c,
      sTableId: c
    });
    y.nTable = this, y.oApi = r.internal, y.oInit = s, m.push(y), y.oInstance = r.length === 1 ? r : p.dataTable(), sv(s), Ic(s.oLanguage), s.aLengthMenu && !s.iDisplayLength && (s.iDisplayLength = Array.isArray(s.aLengthMenu[0]) ? s.aLengthMenu[0][0] : s.aLengthMenu[0]), s = jc(k.extend(!0, {}, d), s), _r(y.oFeatures, s, [
      "bPaginate",
      "bLengthChange",
      "bFilter",
      "bSort",
      "bSortMulti",
      "bInfo",
      "bProcessing",
      "bAutoWidth",
      "bSortClasses",
      "bServerSide",
      "bDeferRender"
    ]), _r(y, s, [
      "asStripeClasses",
      "ajax",
      "fnServerData",
      "fnFormatNumber",
      "sServerMethod",
      "aaSorting",
      "aaSortingFixed",
      "aLengthMenu",
      "sPaginationType",
      "sAjaxSource",
      "sAjaxDataProp",
      "iStateDuration",
      "sDom",
      "bSortCellsTop",
      "iTabIndex",
      "fnStateLoadCallback",
      "fnStateSaveCallback",
      "renderer",
      "searchDelay",
      "rowId",
      ["iCookieDuration", "iStateDuration"],
      // backwards compat
      ["oSearch", "oPreviousSearch"],
      ["aoSearchCols", "aoPreSearchCols"],
      ["iDisplayLength", "_iDisplayLength"]
    ]), _r(y.oScroll, s, [
      ["sScrollX", "sX"],
      ["sScrollXInner", "sXInner"],
      ["sScrollY", "sY"],
      ["bScrollCollapse", "bCollapse"]
    ]), _r(y.oLanguage, s, "fnInfoCallback"), Bt(y, "aoDrawCallback", s.fnDrawCallback, "user"), Bt(y, "aoServerParams", s.fnServerParams, "user"), Bt(y, "aoStateSaveParams", s.fnStateSaveParams, "user"), Bt(y, "aoStateLoadParams", s.fnStateLoadParams, "user"), Bt(y, "aoStateLoaded", s.fnStateLoaded, "user"), Bt(y, "aoRowCallback", s.fnRowCallback, "user"), Bt(y, "aoRowCreatedCallback", s.fnCreatedRow, "user"), Bt(y, "aoHeaderCallback", s.fnHeaderCallback, "user"), Bt(y, "aoFooterCallback", s.fnFooterCallback, "user"), Bt(y, "aoInitComplete", s.fnInitComplete, "user"), Bt(y, "aoPreDrawCallback", s.fnPreDrawCallback, "user"), y.rowIdFn = $n(s.rowId), cb(y);
    var T = y.oClasses;
    if (k.extend(T, le.ext.classes, s.oClasses), p.addClass(T.sTable), y.iInitDisplayStart === void 0 && (y.iInitDisplayStart = s.iDisplayStart, y._iDisplayStart = s.iDisplayStart), s.iDeferLoading !== null) {
      y.bDeferLoading = !0;
      var R = Array.isArray(s.iDeferLoading);
      y._iRecordsDisplay = R ? s.iDeferLoading[0] : s.iDeferLoading, y._iRecordsTotal = R ? s.iDeferLoading[1] : s.iDeferLoading;
    }
    var P = y.oLanguage;
    k.extend(!0, P, s.oLanguage), P.sUrl ? (k.ajax({
      dataType: "json",
      url: P.sUrl,
      success: function(X) {
        Br(d.oLanguage, X), Ic(X), k.extend(!0, P, X, y.oInit.oLanguage), ot(y, null, "i18n", [y]), yi(y);
      },
      error: function() {
        yi(y);
      }
    }), f = !0) : ot(y, null, "i18n", [y]), s.asStripeClasses === null && (y.asStripeClasses = [
      T.sStripeOdd,
      T.sStripeEven
    ]);
    var N = y.asStripeClasses, L = p.children("tbody").find("tr").eq(0);
    k.inArray(!0, k.map(N, function(X, ee) {
      return L.hasClass(X);
    })) !== -1 && (k("tbody tr", this).removeClass(N.join(" ")), y.asDestroyStripes = N.slice());
    var W = [], Y, re = this.getElementsByTagName("thead");
    if (re.length !== 0 && (Ti(y.aoHeader, re[0]), W = ao(y)), s.aoColumns === null)
      for (Y = [], l = 0, u = W.length; l < u; l++)
        Y.push(null);
    else
      Y = s.aoColumns;
    for (l = 0, u = Y.length; l < u; l++)
      Ff(y, W ? W[l] : null);
    if (fb(y, s.aoColumnDefs, Y, function(X, ee) {
      qa(y, X, ee);
    }), L.length) {
      var z = function(X, ee) {
        return X.getAttribute("data-" + ee) !== null ? ee : null;
      };
      k(L[0]).children("th, td").each(function(X, ee) {
        var J = y.aoColumns[X];
        if (J || yr(y, 0, "Incorrect column count", 18), J.mData === X) {
          var ue = z(ee, "sort") || z(ee, "order"), ce = z(ee, "filter") || z(ee, "search");
          (ue !== null || ce !== null) && (J.mData = {
            _: X + ".display",
            sort: ue !== null ? X + ".@data-" + ue : void 0,
            type: ue !== null ? X + ".@data-" + ue : void 0,
            filter: ce !== null ? X + ".@data-" + ce : void 0
          }, J._isArrayHost = !0, qa(y, X));
        }
      });
    }
    var Q = y.oFeatures, se = function() {
      if (s.aaSorting === void 0) {
        var X = y.aaSorting;
        for (l = 0, u = X.length; l < u; l++)
          X[l][1] = y.aoColumns[l].asSorting[0];
      }
      Ha(y), Q.bSort && Bt(y, "aoDrawCallback", function() {
        if (y.bSorted) {
          var Z = ni(y), V = {};
          k.each(Z, function(h, v) {
            V[v.src] = v.dir;
          }), ot(y, null, "order", [y, Z, V]), Nb(y);
        }
      }), Bt(y, "aoDrawCallback", function() {
        (y.bSorted || Ft(y) === "ssp" || Q.bDeferRender) && Ha(y);
      }, "sc");
      var ee = p.children("caption").each(function() {
        this._captionSide = k(this).css("caption-side");
      }), J = p.children("thead");
      J.length === 0 && (J = k("<thead/>").appendTo(p)), y.nTHead = J[0];
      var ue = p.children("tbody");
      ue.length === 0 && (ue = k("<tbody/>").insertAfter(J)), y.nTBody = ue[0];
      var ce = p.children("tfoot");
      if (ce.length === 0 && ee.length > 0 && (y.oScroll.sX !== "" || y.oScroll.sY !== "") && (ce = k("<tfoot/>").appendTo(p)), ce.length === 0 || ce.children().length === 0 ? p.addClass(T.sNoFooter) : ce.length > 0 && (y.nTFoot = ce[0], Ti(y.aoFooter, y.nTFoot)), s.aaData)
        for (l = 0; l < s.aaData.length; l++)
          ln(y, s.aaData[l]);
      else
        (y.bDeferLoading || Ft(y) == "dom") && no(y, k(y.nTBody).children("tr"));
      y.aiDisplay = y.aiDisplayMaster.slice(), y.bInitialised = !0, f === !1 && yi(y);
    };
    Bt(y, "aoDrawCallback", Wi, "state_save"), s.bStateSave ? (Q.bStateSave = !0, Lb(y, s, se)) : se();
  }), r = null, this;
}, xt, Ge, Ne, vt, ll = {}, av = /[\r\n\u2028]/g, ja = /<.*?>/g, J_ = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/, Z_ = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"), kc = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, jr = function(e) {
  return !e || e === !0 || e === "-";
}, ib = function(e) {
  var t = parseInt(e, 10);
  return !isNaN(t) && isFinite(e) ? t : null;
}, ab = function(e, t) {
  return ll[t] || (ll[t] = new RegExp(Bf(t), "g")), typeof e == "string" && t !== "." ? e.replace(/\./g, "").replace(ll[t], ".") : e;
}, Ac = function(e, t, r) {
  var n = typeof e, i = n === "string";
  return n === "number" || n === "bigint" || jr(e) ? !0 : (t && i && (e = ab(e, t)), r && i && (e = e.replace(kc, "")), !isNaN(parseFloat(e)) && isFinite(e));
}, Q_ = function(e) {
  return jr(e) || typeof e == "string";
}, ov = function(e, t, r) {
  if (jr(e))
    return !0;
  var n = Q_(e);
  return n && Ac(eT(e), t, r) ? !0 : null;
}, tr = function(e, t, r) {
  var n = [], i = 0, a = e.length;
  if (r !== void 0)
    for (; i < a; i++)
      e[i] && e[i][t] && n.push(e[i][t][r]);
  else
    for (; i < a; i++)
      e[i] && n.push(e[i][t]);
  return n;
}, Ai = function(e, t, r, n) {
  var i = [], a = 0, o = t.length;
  if (n !== void 0)
    for (; a < o; a++)
      e[t[a]][r] && i.push(e[t[a]][r][n]);
  else
    for (; a < o; a++)
      i.push(e[t[a]][r]);
  return i;
}, jn = function(e, t) {
  var r = [], n;
  t === void 0 ? (t = 0, n = e) : (n = t, t = e);
  for (var i = t; i < n; i++)
    r.push(i);
  return r;
}, ob = function(e) {
  for (var t = [], r = 0, n = e.length; r < n; r++)
    e[r] && t.push(e[r]);
  return t;
}, eT = function(e) {
  return e.replace(ja, "").replace(/<script/i, "");
}, tT = function(e) {
  if (e.length < 2)
    return !0;
  for (var t = e.slice().sort(), r = t[0], n = 1, i = t.length; n < i; n++) {
    if (t[n] === r)
      return !1;
    r = t[n];
  }
  return !0;
}, to = function(e) {
  if (tT(e))
    return e.slice();
  var t = [], r, n, i = e.length, a, o = 0;
  e:
    for (n = 0; n < i; n++) {
      for (r = e[n], a = 0; a < o; a++)
        if (t[a] === r)
          continue e;
      t.push(r), o++;
    }
  return t;
}, sb = function(e, t) {
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      sb(e, t[r]);
  else
    e.push(t);
  return e;
}, lb = function(e, t) {
  return t === void 0 && (t = 0), this.indexOf(e, t) !== -1;
};
Array.isArray || (Array.isArray = function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
});
Array.prototype.includes || (Array.prototype.includes = lb);
String.prototype.trim || (String.prototype.trim = function() {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
});
String.prototype.includes || (String.prototype.includes = lb);
le.util = {
  /**
   * Throttle the calls to a function. Arguments and context are maintained
   * for the throttled function.
   *
   * @param {function} fn Function to be called
   * @param {integer} freq Call frequency in mS
   * @return {function} Wrapped function
   */
  throttle: function(e, t) {
    var r = t !== void 0 ? t : 200, n, i;
    return function() {
      var a = this, o = +/* @__PURE__ */ new Date(), s = arguments;
      n && o < n + r ? (clearTimeout(i), i = setTimeout(function() {
        n = void 0, e.apply(a, s);
      }, r)) : (n = o, e.apply(a, s));
    };
  },
  /**
   * Escape a string such that it can be used in a regular expression
   *
   *  @param {string} val string to escape
   *  @returns {string} escaped string
   */
  escapeRegex: function(e) {
    return e.replace(Z_, "\\$1");
  },
  /**
   * Create a function that will write to a nested object or array
   * @param {*} source JSON notation string
   * @returns Write function
   */
  set: function(e) {
    if (k.isPlainObject(e))
      return le.util.set(e._);
    if (e === null)
      return function() {
      };
    if (typeof e == "function")
      return function(r, n, i) {
        e(r, "set", n, i);
      };
    if (typeof e == "string" && (e.indexOf(".") !== -1 || e.indexOf("[") !== -1 || e.indexOf("(") !== -1)) {
      var t = function(r, n, i) {
        for (var a = Nc(i), o, s = a[a.length - 1], l, u, c, f, d = 0, p = a.length - 1; d < p; d++) {
          if (a[d] === "__proto__" || a[d] === "constructor")
            throw new Error("Cannot set prototype values");
          if (l = a[d].match(ui), u = a[d].match(An), l) {
            if (a[d] = a[d].replace(ui, ""), r[a[d]] = [], o = a.slice(), o.splice(0, d + 1), f = o.join("."), Array.isArray(n))
              for (var m = 0, S = n.length; m < S; m++)
                c = {}, t(c, n[m], f), r[a[d]].push(c);
            else
              r[a[d]] = n;
            return;
          } else
            u && (a[d] = a[d].replace(An, ""), r = r[a[d]](n));
          (r[a[d]] === null || r[a[d]] === void 0) && (r[a[d]] = {}), r = r[a[d]];
        }
        s.match(An) ? r = r[s.replace(An, "")](n) : r[s.replace(ui, "")] = n;
      };
      return function(r, n) {
        return t(r, n, e);
      };
    } else
      return function(r, n) {
        r[e] = n;
      };
  },
  /**
   * Create a function that will read nested objects from arrays, based on JSON notation
   * @param {*} source JSON notation string
   * @returns Value read
   */
  get: function(e) {
    if (k.isPlainObject(e)) {
      var t = {};
      return k.each(e, function(n, i) {
        i && (t[n] = le.util.get(i));
      }), function(n, i, a, o) {
        var s = t[i] || t._;
        return s !== void 0 ? s(n, i, a, o) : n;
      };
    } else {
      if (e === null)
        return function(n) {
          return n;
        };
      if (typeof e == "function")
        return function(n, i, a, o) {
          return e(n, i, a, o);
        };
      if (typeof e == "string" && (e.indexOf(".") !== -1 || e.indexOf("[") !== -1 || e.indexOf("(") !== -1)) {
        var r = function(n, i, a) {
          var o, s, l, u;
          if (a !== "")
            for (var c = Nc(a), f = 0, d = c.length; f < d; f++) {
              if (o = c[f].match(ui), s = c[f].match(An), o) {
                if (c[f] = c[f].replace(ui, ""), c[f] !== "" && (n = n[c[f]]), l = [], c.splice(0, f + 1), u = c.join("."), Array.isArray(n))
                  for (var p = 0, m = n.length; p < m; p++)
                    l.push(r(n[p], i, u));
                var S = o[0].substring(1, o[0].length - 1);
                n = S === "" ? l : l.join(S);
                break;
              } else if (s) {
                c[f] = c[f].replace(An, ""), n = n[c[f]]();
                continue;
              }
              if (n === null || n[c[f]] === null)
                return null;
              if (n === void 0 || n[c[f]] === void 0)
                return;
              n = n[c[f]];
            }
          return n;
        };
        return function(n, i) {
          return r(n, i, e);
        };
      } else
        return function(n, i) {
          return n[e];
        };
    }
  }
};
function Ii(e) {
  var t = "a aa ai ao as b fn i m o s ", r, n, i = {};
  k.each(e, function(a, o) {
    r = a.match(/^([^A-Z]+?)([A-Z])/), r && t.indexOf(r[1] + " ") !== -1 && (n = a.replace(r[0], r[2].toLowerCase()), i[n] = a, r[1] === "o" && Ii(e[a]));
  }), e._hungarianMap = i;
}
function Br(e, t, r) {
  e._hungarianMap || Ii(e);
  var n;
  k.each(t, function(i, a) {
    n = e._hungarianMap[i], n !== void 0 && (r || t[n] === void 0) && (n.charAt(0) === "o" ? (t[n] || (t[n] = {}), k.extend(!0, t[n], t[i]), Br(e[n], t[n], r)) : t[n] = t[i]);
  });
}
function Ic(e) {
  var t = le.defaults.oLanguage, r = t.sDecimal;
  if (r && qc(r), e) {
    var n = e.sZeroRecords;
    !e.sEmptyTable && n && t.sEmptyTable === "No data available in table" && _r(e, e, "sZeroRecords", "sEmptyTable"), !e.sLoadingRecords && n && t.sLoadingRecords === "Loading..." && _r(e, e, "sZeroRecords", "sLoadingRecords"), e.sInfoThousands && (e.sThousands = e.sInfoThousands);
    var i = e.sDecimal;
    i && r !== i && qc(i);
  }
}
var Kt = function(e, t, r) {
  e[t] !== void 0 && (e[r] = e[t]);
};
function sv(e) {
  Kt(e, "ordering", "bSort"), Kt(e, "orderMulti", "bSortMulti"), Kt(e, "orderClasses", "bSortClasses"), Kt(e, "orderCellsTop", "bSortCellsTop"), Kt(e, "order", "aaSorting"), Kt(e, "orderFixed", "aaSortingFixed"), Kt(e, "paging", "bPaginate"), Kt(e, "pagingType", "sPaginationType"), Kt(e, "pageLength", "iDisplayLength"), Kt(e, "searching", "bFilter"), typeof e.sScrollX == "boolean" && (e.sScrollX = e.sScrollX ? "100%" : ""), typeof e.scrollX == "boolean" && (e.scrollX = e.scrollX ? "100%" : "");
  var t = e.aoSearchCols;
  if (t)
    for (var r = 0, n = t.length; r < n; r++)
      t[r] && Br(le.models.oSearch, t[r]);
}
function ub(e) {
  Kt(e, "orderable", "bSortable"), Kt(e, "orderData", "aDataSort"), Kt(e, "orderSequence", "asSorting"), Kt(e, "orderDataType", "sortDataType");
  var t = e.aDataSort;
  typeof t == "number" && !Array.isArray(t) && (e.aDataSort = [t]);
}
function cb(e) {
  if (!le.__browser) {
    var t = {};
    le.__browser = t;
    var r = k("<div/>").css({
      position: "fixed",
      top: 0,
      left: k(window).scrollLeft() * -1,
      // allow for scrolling
      height: 1,
      width: 1,
      overflow: "hidden"
    }).append(
      k("<div/>").css({
        position: "absolute",
        top: 1,
        left: 1,
        width: 100,
        overflow: "scroll"
      }).append(
        k("<div/>").css({
          width: "100%",
          height: 10
        })
      )
    ).appendTo("body"), n = r.children(), i = n.children();
    t.barWidth = n[0].offsetWidth - n[0].clientWidth, t.bScrollOversize = i[0].offsetWidth === 100 && n[0].clientWidth !== 100, t.bScrollbarLeft = Math.round(i.offset().left) !== 1, t.bBounding = !!r[0].getBoundingClientRect().width, r.remove();
  }
  k.extend(e.oBrowser, le.__browser), e.oScroll.iBarWidth = le.__browser.barWidth;
}
function lv(e, t, r, n, i, a) {
  var o = n, s, l = !1;
  for (r !== void 0 && (s = r, l = !0); o !== i; )
    e.hasOwnProperty(o) && (s = l ? t(s, e[o], o, e) : e[o], l = !0, o += a);
  return s;
}
function Ff(e, t) {
  var r = le.defaults.column, n = e.aoColumns.length, i = k.extend({}, le.models.oColumn, r, {
    nTh: t || document.createElement("th"),
    sTitle: r.sTitle ? r.sTitle : t ? t.innerHTML : "",
    aDataSort: r.aDataSort ? r.aDataSort : [n],
    mData: r.mData ? r.mData : n,
    idx: n
  });
  e.aoColumns.push(i);
  var a = e.aoPreSearchCols;
  a[n] = k.extend({}, le.models.oSearch, a[n]), qa(e, n, k(t).data());
}
function qa(e, t, r) {
  var n = e.aoColumns[t], i = e.oClasses, a = k(n.nTh);
  if (!n.sWidthOrig) {
    n.sWidthOrig = a.attr("width") || null;
    var o = (a.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
    o && (n.sWidthOrig = o[1]);
  }
  if (r != null) {
    ub(r), Br(le.defaults.column, r, !0), r.mDataProp !== void 0 && !r.mData && (r.mData = r.mDataProp), r.sType && (n._sManualType = r.sType), r.className && !r.sClass && (r.sClass = r.className), r.sClass && a.addClass(r.sClass);
    var s = n.sClass;
    k.extend(n, r), _r(n, r, "sWidth", "sWidthOrig"), s !== n.sClass && (n.sClass = s + " " + n.sClass), r.iDataSort !== void 0 && (n.aDataSort = [r.iDataSort]), _r(n, r, "aDataSort"), n.ariaTitle || (n.ariaTitle = a.attr("aria-label"));
  }
  var l = n.mData, u = $n(l), c = n.mRender ? $n(n.mRender) : null, f = function(m) {
    return typeof m == "string" && m.indexOf("@") !== -1;
  };
  n._bAttrSrc = k.isPlainObject(l) && (f(l.sort) || f(l.type) || f(l.filter)), n._setter = null, n.fnGetData = function(m, S, w) {
    var C = u(m, S, void 0, w);
    return c && S ? c(C, S, m, w) : C;
  }, n.fnSetData = function(m, S, w) {
    return Zr(l)(m, S, w);
  }, typeof l != "number" && !n._isArrayHost && (e._rowReadObject = !0), e.oFeatures.bSort || (n.bSortable = !1, a.addClass(i.sSortableNone));
  var d = k.inArray("asc", n.asSorting) !== -1, p = k.inArray("desc", n.asSorting) !== -1;
  !n.bSortable || !d && !p ? (n.sSortingClass = i.sSortableNone, n.sSortingClassJUI = "") : d && !p ? (n.sSortingClass = i.sSortableAsc, n.sSortingClassJUI = i.sSortJUIAscAllowed) : !d && p ? (n.sSortingClass = i.sSortableDesc, n.sSortingClassJUI = i.sSortJUIDescAllowed) : (n.sSortingClass = i.sSortable, n.sSortingClassJUI = i.sSortJUI);
}
function Ni(e) {
  if (e.oFeatures.bAutoWidth !== !1) {
    var t = e.aoColumns;
    $f(e);
    for (var r = 0, n = t.length; r < n; r++)
      t[r].nTh.style.width = t[r].sWidth;
  }
  var i = e.oScroll;
  (i.sY !== "" || i.sX !== "") && lo(e), ot(e, null, "column-sizing", [e]);
}
function Mi(e, t) {
  var r = ro(e, "bVisible");
  return typeof r[t] == "number" ? r[t] : null;
}
function Li(e, t) {
  var r = ro(e, "bVisible"), n = k.inArray(t, r);
  return n !== -1 ? n : null;
}
function ri(e) {
  var t = 0;
  return k.each(e.aoColumns, function(r, n) {
    n.bVisible && k(n.nTh).css("display") !== "none" && t++;
  }), t;
}
function ro(e, t) {
  var r = [];
  return k.map(e.aoColumns, function(n, i) {
    n[t] && r.push(i);
  }), r;
}
function jf(e) {
  var t = e.aoColumns, r = e.aoData, n = le.ext.type.detect, i, a, o, s, l, u, c, f, d;
  for (i = 0, a = t.length; i < a; i++)
    if (c = t[i], d = [], !c.sType && c._sManualType)
      c.sType = c._sManualType;
    else if (!c.sType) {
      for (o = 0, s = n.length; o < s; o++) {
        for (l = 0, u = r.length; l < u && (d[l] === void 0 && (d[l] = rr(e, l, i, "type")), f = n[o](d[l], e), !(!f && o !== n.length - 1 || f === "html" && !jr(d[l]))); l++)
          ;
        if (f) {
          c.sType = f;
          break;
        }
      }
      c.sType || (c.sType = "string");
    }
}
function fb(e, t, r, n) {
  var i, a, o, s, l, u, c, f = e.aoColumns;
  if (t)
    for (i = t.length - 1; i >= 0; i--) {
      c = t[i];
      var d = c.target !== void 0 ? c.target : c.targets !== void 0 ? c.targets : c.aTargets;
      for (Array.isArray(d) || (d = [d]), o = 0, s = d.length; o < s; o++)
        if (typeof d[o] == "number" && d[o] >= 0) {
          for (; f.length <= d[o]; )
            Ff(e);
          n(d[o], c);
        } else if (typeof d[o] == "number" && d[o] < 0)
          n(f.length + d[o], c);
        else if (typeof d[o] == "string")
          for (l = 0, u = f.length; l < u; l++)
            (d[o] == "_all" || k(f[l].nTh).hasClass(d[o])) && n(l, c);
    }
  if (r)
    for (i = 0, a = r.length; i < a; i++)
      n(i, r[i]);
}
function ln(e, t, r, n) {
  var i = e.aoData.length, a = k.extend(!0, {}, le.models.oRow, {
    src: r ? "dom" : "data",
    idx: i
  });
  a._aData = t, e.aoData.push(a);
  for (var o = e.aoColumns, s = 0, l = o.length; s < l; s++)
    o[s].sType = null;
  e.aiDisplayMaster.push(i);
  var u = e.rowIdFn(t);
  return u !== void 0 && (e.aIds[u] = a), (r || !e.oFeatures.bDeferRender) && Wf(e, i, r, n), i;
}
function no(e, t) {
  var r;
  return t instanceof k || (t = k(t)), t.map(function(n, i) {
    return r = qf(e, i), ln(e, r.data, i, r.cells);
  });
}
function rT(e, t) {
  return t._DT_RowIndex !== void 0 ? t._DT_RowIndex : null;
}
function nT(e, t, r) {
  return k.inArray(r, e.aoData[t].anCells);
}
function rr(e, t, r, n) {
  n === "search" ? n = "filter" : n === "order" && (n = "sort");
  var i = e.iDraw, a = e.aoColumns[r], o = e.aoData[t]._aData, s = a.sDefaultContent, l = a.fnGetData(o, n, {
    settings: e,
    row: t,
    col: r
  });
  if (l === void 0)
    return e.iDrawError != i && s === null && (yr(e, 0, "Requested unknown parameter " + (typeof a.mData == "function" ? "{function}" : "'" + a.mData + "'") + " for row " + t + ", column " + r, 4), e.iDrawError = i), s;
  if ((l === o || l === null) && s !== null && n !== void 0)
    l = s;
  else if (typeof l == "function")
    return l.call(o);
  if (l === null && n === "display")
    return "";
  if (n === "filter") {
    var u = le.ext.type.search;
    u[a.sType] && (l = u[a.sType](l));
  }
  return l;
}
function db(e, t, r, n) {
  var i = e.aoColumns[r], a = e.aoData[t]._aData;
  i.fnSetData(a, n, {
    settings: e,
    row: t,
    col: r
  });
}
var ui = /\[.*?\]$/, An = /\(\)$/;
function Nc(e) {
  return k.map(e.match(/(\\.|[^\.])+/g) || [""], function(t) {
    return t.replace(/\\\./g, ".");
  });
}
var $n = le.util.get, Zr = le.util.set;
function Mc(e) {
  return tr(e.aoData, "_aData");
}
function io(e) {
  e.aoData.length = 0, e.aiDisplayMaster.length = 0, e.aiDisplay.length = 0, e.aIds = {};
}
function Ra(e, t, r) {
  for (var n = -1, i = 0, a = e.length; i < a; i++)
    e[i] == t ? n = i : e[i] > t && e[i]--;
  n != -1 && r === void 0 && e.splice(n, 1);
}
function Fi(e, t, r, n) {
  var i = e.aoData[t], a, o, s = function(c, f) {
    for (; c.childNodes.length; )
      c.removeChild(c.firstChild);
    c.innerHTML = rr(e, t, f, "display");
  };
  if (r === "dom" || (!r || r === "auto") && i.src === "dom")
    i._aData = qf(
      e,
      i,
      n,
      n === void 0 ? void 0 : i._aData
    ).data;
  else {
    var l = i.anCells;
    if (l)
      if (n !== void 0)
        s(l[n], n);
      else
        for (a = 0, o = l.length; a < o; a++)
          s(l[a], a);
  }
  i._aSortData = null, i._aFilterData = null;
  var u = e.aoColumns;
  if (n !== void 0)
    u[n].sType = null;
  else {
    for (a = 0, o = u.length; a < o; a++)
      u[a].sType = null;
    Hf(e, i);
  }
}
function qf(e, t, r, n) {
  var i = [], a = t.firstChild, o, s, l = 0, u, c = e.aoColumns, f = e._rowReadObject;
  n = n !== void 0 ? n : f ? {} : [];
  var d = function(y, T) {
    if (typeof y == "string") {
      var R = y.indexOf("@");
      if (R !== -1) {
        var P = y.substring(R + 1), N = Zr(y);
        N(n, T.getAttribute(P));
      }
    }
  }, p = function(y) {
    if (r === void 0 || r === l)
      if (s = c[l], u = y.innerHTML.trim(), s && s._bAttrSrc) {
        var T = Zr(s.mData._);
        T(n, u), d(s.mData.sort, y), d(s.mData.type, y), d(s.mData.filter, y);
      } else
        f ? (s._setter || (s._setter = Zr(s.mData)), s._setter(n, u)) : n[l] = u;
    l++;
  };
  if (a)
    for (; a; )
      o = a.nodeName.toUpperCase(), (o == "TD" || o == "TH") && (p(a), i.push(a)), a = a.nextSibling;
  else {
    i = t.anCells;
    for (var m = 0, S = i.length; m < S; m++)
      p(i[m]);
  }
  var w = t.firstChild ? t : t.nTr;
  if (w) {
    var C = w.getAttribute("id");
    C && Zr(e.rowId)(n, C);
  }
  return {
    data: n,
    cells: i
  };
}
function Wf(e, t, r, n) {
  var i = e.aoData[t], a = i._aData, o = [], s, l, u, c, f, d;
  if (i.nTr === null) {
    for (s = r || document.createElement("tr"), i.nTr = s, i.anCells = o, s._DT_RowIndex = t, Hf(e, i), c = 0, f = e.aoColumns.length; c < f; c++)
      u = e.aoColumns[c], d = !r, l = d ? document.createElement(u.sCellType) : n[c], l || yr(e, 0, "Incorrect column count", 18), l._DT_CellIndex = {
        row: t,
        column: c
      }, o.push(l), (d || (u.mRender || u.mData !== c) && (!k.isPlainObject(u.mData) || u.mData._ !== c + ".display")) && (l.innerHTML = rr(e, t, c, "display")), u.sClass && (l.className += " " + u.sClass), u.bVisible && !r ? s.appendChild(l) : !u.bVisible && r && l.parentNode.removeChild(l), u.fnCreatedCell && u.fnCreatedCell.call(
        e.oInstance,
        l,
        rr(e, t, c),
        a,
        t,
        c
      );
    ot(e, "aoRowCreatedCallback", null, [s, a, t, o]);
  }
}
function Hf(e, t) {
  var r = t.nTr, n = t._aData;
  if (r) {
    var i = e.rowIdFn(n);
    if (i && (r.id = i), n.DT_RowClass) {
      var a = n.DT_RowClass.split(" ");
      t.__rowc = t.__rowc ? to(t.__rowc.concat(a)) : a, k(r).removeClass(t.__rowc.join(" ")).addClass(n.DT_RowClass);
    }
    n.DT_RowAttr && k(r).attr(n.DT_RowAttr), n.DT_RowData && k(r).data(n.DT_RowData);
  }
}
function pb(e) {
  var t, r, n, i, a, o = e.nTHead, s = e.nTFoot, l = k("th, td", o).length === 0, u = e.oClasses, c = e.aoColumns;
  for (l && (i = k("<tr/>").appendTo(o)), t = 0, r = c.length; t < r; t++)
    a = c[t], n = k(a.nTh).addClass(a.sClass), l && n.appendTo(i), e.oFeatures.bSort && (n.addClass(a.sSortingClass), a.bSortable !== !1 && (n.attr("tabindex", e.iTabIndex).attr("aria-controls", e.sTableId), Yf(e, a.nTh, t))), a.sTitle != n[0].innerHTML && n.html(a.sTitle), Kf(e, "header")(
      e,
      n,
      a,
      u
    );
  if (l && Ti(e.aoHeader, o), k(o).children("tr").children("th, td").addClass(u.sHeaderTH), k(s).children("tr").children("th, td").addClass(u.sFooterTH), s !== null) {
    var f = e.aoFooter[0];
    for (t = 0, r = f.length; t < r; t++)
      a = c[t], a ? (a.nTf = f[t].cell, a.sClass && k(a.nTf).addClass(a.sClass)) : yr(e, 0, "Incorrect column count", 18);
  }
}
function _i(e, t, r) {
  var n, i, a, o, s, l, u, c = [], f = [], d = e.aoColumns.length, p, m;
  if (t) {
    for (r === void 0 && (r = !1), n = 0, i = t.length; n < i; n++) {
      for (c[n] = t[n].slice(), c[n].nTr = t[n].nTr, a = d - 1; a >= 0; a--)
        !e.aoColumns[a].bVisible && !r && c[n].splice(a, 1);
      f.push([]);
    }
    for (n = 0, i = c.length; n < i; n++) {
      if (u = c[n].nTr, u)
        for (; l = u.firstChild; )
          u.removeChild(l);
      for (a = 0, o = c[n].length; a < o; a++)
        if (p = 1, m = 1, f[n][a] === void 0) {
          for (u.appendChild(c[n][a].cell), f[n][a] = 1; c[n + p] !== void 0 && c[n][a].cell == c[n + p][a].cell; )
            f[n + p][a] = 1, p++;
          for (; c[n][a + m] !== void 0 && c[n][a].cell == c[n][a + m].cell; ) {
            for (s = 0; s < p; s++)
              f[n + s][a + m] = 1;
            m++;
          }
          k(c[n][a].cell).attr("rowspan", p).attr("colspan", m);
        }
    }
  }
}
function un(e, t) {
  iT(e);
  var r = ot(e, "aoPreDrawCallback", "preDraw", [e]);
  if (k.inArray(!1, r) !== -1) {
    lr(e, !1);
    return;
  }
  var n = [], i = 0, a = e.asStripeClasses, o = a.length, s = e.oLanguage, l = Ft(e) == "ssp", u = e.aiDisplay, c = e._iDisplayStart, f = e.fnDisplayEnd();
  if (e.bDrawing = !0, e.bDeferLoading)
    e.bDeferLoading = !1, e.iDraw++, lr(e, !1);
  else if (!l)
    e.iDraw++;
  else if (!e.bDestroying && !t) {
    vb(e);
    return;
  }
  if (u.length !== 0)
    for (var d = l ? 0 : c, p = l ? e.aoData.length : f, m = d; m < p; m++) {
      var S = u[m], w = e.aoData[S];
      w.nTr === null && Wf(e, S);
      var C = w.nTr;
      if (o !== 0) {
        var y = a[i % o];
        w._sRowStripe != y && (k(C).removeClass(w._sRowStripe).addClass(y), w._sRowStripe = y);
      }
      ot(
        e,
        "aoRowCallback",
        null,
        [C, w._aData, i, m, S]
      ), n.push(C), i++;
    }
  else {
    var T = s.sZeroRecords;
    e.iDraw == 1 && Ft(e) == "ajax" ? T = s.sLoadingRecords : s.sEmptyTable && e.fnRecordsTotal() === 0 && (T = s.sEmptyTable), n[0] = k("<tr/>", { class: o ? a[0] : "" }).append(k("<td />", {
      valign: "top",
      colSpan: ri(e),
      class: e.oClasses.sRowEmpty
    }).html(T))[0];
  }
  ot(e, "aoHeaderCallback", "header", [
    k(e.nTHead).children("tr")[0],
    Mc(e),
    c,
    f,
    u
  ]), ot(e, "aoFooterCallback", "footer", [
    k(e.nTFoot).children("tr")[0],
    Mc(e),
    c,
    f,
    u
  ]);
  var R = k(e.nTBody);
  R.children().detach(), R.append(k(n)), ot(e, "aoDrawCallback", "draw", [e]), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1;
}
function wn(e, t) {
  var r = e.oFeatures, n = r.bSort, i = r.bFilter;
  n && Ib(e), i ? qi(e, e.oPreviousSearch) : e.aiDisplay = e.aiDisplayMaster.slice(), t !== !0 && (e._iDisplayStart = 0), e._drawHold = t, un(e), e._drawHold = !1;
}
function hb(e) {
  var t = e.oClasses, r = k(e.nTable), n = k("<div/>").insertBefore(r), i = e.oFeatures, a = k("<div/>", {
    id: e.sTableId + "_wrapper",
    class: t.sWrapper + (e.nTFoot ? "" : " " + t.sNoFooter)
  });
  e.nHolding = n[0], e.nTableWrapper = a[0], e.nTableReinsertBefore = e.nTable.nextSibling;
  for (var o = e.sDom.split(""), s, l, u, c, f, d, p = 0; p < o.length; p++) {
    if (s = null, l = o[p], l == "<") {
      if (u = k("<div/>")[0], c = o[p + 1], c == "'" || c == '"') {
        for (f = "", d = 2; o[p + d] != c; )
          f += o[p + d], d++;
        if (f == "H" ? f = t.sJUIHeader : f == "F" && (f = t.sJUIFooter), f.indexOf(".") != -1) {
          var m = f.split(".");
          u.id = m[0].substr(1, m[0].length - 1), u.className = m[1];
        } else
          f.charAt(0) == "#" ? u.id = f.substr(1, f.length - 1) : u.className = f;
        p += d;
      }
      a.append(u), a = k(u);
    } else if (l == ">")
      a = a.parent();
    else if (l == "l" && i.bPaginate && i.bLengthChange)
      s = Pb(e);
    else if (l == "f" && i.bFilter)
      s = yb(e);
    else if (l == "r" && i.bProcessing)
      s = Eb(e);
    else if (l == "t")
      s = Rb(e);
    else if (l == "i" && i.bInfo)
      s = Cb(e);
    else if (l == "p" && i.bPaginate)
      s = Db(e);
    else if (le.ext.feature.length !== 0) {
      for (var S = le.ext.feature, w = 0, C = S.length; w < C; w++)
        if (l == S[w].cFeature) {
          s = S[w].fnInit(e);
          break;
        }
    }
    if (s) {
      var y = e.aanFeatures;
      y[l] || (y[l] = []), y[l].push(s), a.append(s);
    }
  }
  n.replaceWith(a), e.nHolding = null;
}
function Ti(e, t) {
  var r = k(t).children("tr"), n, i, a, o, s, l, u, c, f, d, p, m = function(S, w, C) {
    for (var y = S[w]; y[C]; )
      C++;
    return C;
  };
  for (e.splice(0, e.length), a = 0, l = r.length; a < l; a++)
    e.push([]);
  for (a = 0, l = r.length; a < l; a++)
    for (n = r[a], c = 0, i = n.firstChild; i; ) {
      if (i.nodeName.toUpperCase() == "TD" || i.nodeName.toUpperCase() == "TH")
        for (f = i.getAttribute("colspan") * 1, d = i.getAttribute("rowspan") * 1, f = !f || f === 0 || f === 1 ? 1 : f, d = !d || d === 0 || d === 1 ? 1 : d, u = m(e, a, c), p = f === 1, s = 0; s < f; s++)
          for (o = 0; o < d; o++)
            e[a + o][u + s] = {
              cell: i,
              unique: p
            }, e[a + o].nTr = n;
      i = i.nextSibling;
    }
}
function ao(e, t, r) {
  var n = [];
  r || (r = e.aoHeader, t && (r = [], Ti(r, t)));
  for (var i = 0, a = r.length; i < a; i++)
    for (var o = 0, s = r[i].length; o < s; o++)
      r[i][o].unique && (!n[o] || !e.bSortCellsTop) && (n[o] = r[i][o].cell);
  return n;
}
function iT(e) {
  var t = Ft(e) == "ssp", r = e.iInitDisplayStart;
  r !== void 0 && r !== -1 && (e._iDisplayStart = t ? r : r >= e.fnRecordsDisplay() ? 0 : r, e.iInitDisplayStart = -1);
}
function oo(e, t, r) {
  if (ot(e, "aoServerParams", "serverParams", [t]), t && Array.isArray(t)) {
    var n = {}, i = /(.*?)\[\]$/;
    k.each(t, function(f, d) {
      var p = d.name.match(i);
      if (p) {
        var m = p[0];
        n[m] || (n[m] = []), n[m].push(d.value);
      } else
        n[d.name] = d.value;
    }), t = n;
  }
  var a, o = e.ajax, s = e.oInstance, l = function(f) {
    var d = e.jqXHR ? e.jqXHR.status : null;
    (f === null || typeof d == "number" && d == 204) && (f = {}, ji(e, f, []));
    var p = f.error || f.sError;
    p && yr(e, 0, p), e.json = f, ot(e, null, "xhr", [e, f, e.jqXHR]), r(f);
  };
  if (k.isPlainObject(o) && o.data) {
    a = o.data;
    var u = typeof a == "function" ? a(t, e) : (
      // fn can manipulate data or return
      a
    );
    t = typeof a == "function" && u ? u : k.extend(!0, t, u), delete o.data;
  }
  var c = {
    data: t,
    success: l,
    dataType: "json",
    cache: !1,
    type: e.sServerMethod,
    error: function(f, d, p) {
      var m = ot(e, null, "xhr", [e, null, e.jqXHR]);
      k.inArray(!0, m) === -1 && (d == "parsererror" ? yr(e, 0, "Invalid JSON response", 1) : f.readyState === 4 && yr(e, 0, "Ajax error", 7)), lr(e, !1);
    }
  };
  e.oAjaxData = t, ot(e, null, "preXhr", [e, t]), e.fnServerData ? e.fnServerData.call(
    s,
    e.sAjaxSource,
    k.map(t, function(f, d) {
      return { name: d, value: f };
    }),
    l,
    e
  ) : e.sAjaxSource || typeof o == "string" ? e.jqXHR = k.ajax(k.extend(c, {
    url: o || e.sAjaxSource
  })) : typeof o == "function" ? e.jqXHR = o.call(s, t, l, e) : (e.jqXHR = k.ajax(k.extend(c, o)), o.data = a);
}
function vb(e) {
  e.iDraw++, lr(e, !0);
  var t = e._drawHold;
  oo(
    e,
    gb(e),
    function(r) {
      e._drawHold = t, mb(e, r), e._drawHold = !1;
    }
  );
}
function gb(e) {
  var t = e.aoColumns, r = t.length, n = e.oFeatures, i = e.oPreviousSearch, a = e.aoPreSearchCols, o, s = [], l, u, c, f = ni(e), d = e._iDisplayStart, p = n.bPaginate !== !1 ? e._iDisplayLength : -1, m = function(C, y) {
    s.push({ name: C, value: y });
  };
  m("sEcho", e.iDraw), m("iColumns", r), m("sColumns", tr(t, "sName").join(",")), m("iDisplayStart", d), m("iDisplayLength", p);
  var S = {
    draw: e.iDraw,
    columns: [],
    order: [],
    start: d,
    length: p,
    search: {
      value: i.sSearch,
      regex: i.bRegex
    }
  };
  for (o = 0; o < r; o++)
    u = t[o], c = a[o], l = typeof u.mData == "function" ? "function" : u.mData, S.columns.push({
      data: l,
      name: u.sName,
      searchable: u.bSearchable,
      orderable: u.bSortable,
      search: {
        value: c.sSearch,
        regex: c.bRegex
      }
    }), m("mDataProp_" + o, l), n.bFilter && (m("sSearch_" + o, c.sSearch), m("bRegex_" + o, c.bRegex), m("bSearchable_" + o, u.bSearchable)), n.bSort && m("bSortable_" + o, u.bSortable);
  n.bFilter && (m("sSearch", i.sSearch), m("bRegex", i.bRegex)), n.bSort && (k.each(f, function(C, y) {
    S.order.push({ column: y.col, dir: y.dir }), m("iSortCol_" + C, y.col), m("sSortDir_" + C, y.dir);
  }), m("iSortingCols", f.length));
  var w = le.ext.legacy.ajax;
  return w === null ? e.sAjaxSource ? s : S : w ? s : S;
}
function mb(e, t) {
  var r = function(u, c) {
    return t[u] !== void 0 ? t[u] : t[c];
  }, n = ji(e, t), i = r("sEcho", "draw"), a = r("iTotalRecords", "recordsTotal"), o = r("iTotalDisplayRecords", "recordsFiltered");
  if (i !== void 0) {
    if (i * 1 < e.iDraw)
      return;
    e.iDraw = i * 1;
  }
  n || (n = []), io(e), e._iRecordsTotal = parseInt(a, 10), e._iRecordsDisplay = parseInt(o, 10);
  for (var s = 0, l = n.length; s < l; s++)
    ln(e, n[s]);
  e.aiDisplay = e.aiDisplayMaster.slice(), un(e, !0), e._bInitComplete || Wa(e, t), lr(e, !1);
}
function ji(e, t, r) {
  var n = k.isPlainObject(e.ajax) && e.ajax.dataSrc !== void 0 ? e.ajax.dataSrc : e.sAjaxDataProp;
  if (!r)
    return n === "data" ? t.aaData || t[n] : n !== "" ? $n(n)(t) : t;
  Zr(n)(t, r);
}
function yb(e) {
  var t = e.oClasses, r = e.sTableId, n = e.oLanguage, i = e.oPreviousSearch, a = e.aanFeatures, o = '<input type="search" class="' + t.sFilterInput + '"/>', s = n.sSearch;
  s = s.match(/_INPUT_/) ? s.replace("_INPUT_", o) : s + o;
  var l = k("<div/>", {
    id: a.f ? null : r + "_filter",
    class: t.sFilter
  }).append(k("<label/>").append(s)), u = function(d) {
    a.f;
    var p = this.value ? this.value : "";
    i.return && d.key !== "Enter" || p != i.sSearch && (qi(e, {
      sSearch: p,
      bRegex: i.bRegex,
      bSmart: i.bSmart,
      bCaseInsensitive: i.bCaseInsensitive,
      return: i.return
    }), e._iDisplayStart = 0, un(e));
  }, c = e.searchDelay !== null ? e.searchDelay : Ft(e) === "ssp" ? 400 : 0, f = k("input", l).val(i.sSearch).attr("placeholder", n.sSearchPlaceholder).on(
    "keyup.DT search.DT input.DT paste.DT cut.DT",
    c ? zf(u, c) : u
  ).on("mouseup.DT", function(d) {
    setTimeout(function() {
      u.call(f[0], d);
    }, 10);
  }).on("keypress.DT", function(d) {
    if (d.keyCode == 13)
      return !1;
  }).attr("aria-controls", r);
  return k(e.nTable).on("search.dt.DT", function(d, p) {
    if (e === p)
      try {
        f[0] !== document.activeElement && f.val(i.sSearch);
      } catch {
      }
  }), l[0];
}
function qi(e, t, r) {
  var n = e.oPreviousSearch, i = e.aoPreSearchCols, a = function(l) {
    n.sSearch = l.sSearch, n.bRegex = l.bRegex, n.bSmart = l.bSmart, n.bCaseInsensitive = l.bCaseInsensitive, n.return = l.return;
  }, o = function(l) {
    return l.bEscapeRegex !== void 0 ? !l.bEscapeRegex : l.bRegex;
  };
  if (jf(e), Ft(e) != "ssp") {
    Sb(e, t.sSearch, r, o(t), t.bSmart, t.bCaseInsensitive), a(t);
    for (var s = 0; s < i.length; s++)
      wb(
        e,
        i[s].sSearch,
        s,
        o(i[s]),
        i[s].bSmart,
        i[s].bCaseInsensitive
      );
    bb(e);
  } else
    a(t);
  e.bFiltered = !0, ot(e, null, "search", [e]);
}
function bb(e) {
  for (var t = le.ext.search, r = e.aiDisplay, n, i, a = 0, o = t.length; a < o; a++) {
    for (var s = [], l = 0, u = r.length; l < u; l++)
      i = r[l], n = e.aoData[i], t[a](e, n._aFilterData, i, n._aData, l) && s.push(i);
    r.length = 0, k.merge(r, s);
  }
}
function wb(e, t, r, n, i, a) {
  if (t !== "") {
    for (var o, s = [], l = e.aiDisplay, u = Vf(t, n, i, a), c = 0; c < l.length; c++)
      o = e.aoData[l[c]]._aFilterData[r], u.test(o) && s.push(l[c]);
    e.aiDisplay = s;
  }
}
function Sb(e, t, r, n, i, a) {
  var o = Vf(t, n, i, a), s = e.oPreviousSearch.sSearch, l = e.aiDisplayMaster, u, c, f, d = [];
  if (le.ext.search.length !== 0 && (r = !0), c = xb(e), t.length <= 0)
    e.aiDisplay = l.slice();
  else {
    for ((c || r || n || s.length > t.length || t.indexOf(s) !== 0 || e.bSorted) && (e.aiDisplay = l.slice()), u = e.aiDisplay, f = 0; f < u.length; f++)
      o.test(e.aoData[u[f]]._sFilterRow) && d.push(u[f]);
    e.aiDisplay = d;
  }
}
function Vf(e, t, r, n) {
  if (e = t ? e : Bf(e), r) {
    var i = k.map(e.match(/["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""], function(a) {
      if (a.charAt(0) === '"') {
        var o = a.match(/^"(.*)"$/);
        a = o ? o[1] : a;
      } else if (a.charAt(0) === "“") {
        var o = a.match(/^\u201C(.*)\u201D$/);
        a = o ? o[1] : a;
      }
      return a.replace('"', "");
    });
    e = "^(?=.*?" + i.join(")(?=.*?") + ").*$";
  }
  return new RegExp(e, n ? "i" : "");
}
var Bf = le.util.escapeRegex, Oa = k("<div>")[0], aT = Oa.textContent !== void 0;
function xb(e) {
  var t = e.aoColumns, r, n, i, a, o, s, l, u, c = !1;
  for (n = 0, a = e.aoData.length; n < a; n++)
    if (u = e.aoData[n], !u._aFilterData) {
      for (s = [], i = 0, o = t.length; i < o; i++)
        r = t[i], r.bSearchable ? (l = rr(e, n, i, "filter"), l === null && (l = ""), typeof l != "string" && l.toString && (l = l.toString())) : l = "", l.indexOf && l.indexOf("&") !== -1 && (Oa.innerHTML = l, l = aT ? Oa.textContent : Oa.innerText), l.replace && (l = l.replace(/[\r\n\u2028]/g, "")), s.push(l);
      u._aFilterData = s, u._sFilterRow = s.join("  "), c = !0;
    }
  return c;
}
function uv(e) {
  return {
    search: e.sSearch,
    smart: e.bSmart,
    regex: e.bRegex,
    caseInsensitive: e.bCaseInsensitive
  };
}
function cv(e) {
  return {
    sSearch: e.search,
    bSmart: e.smart,
    bRegex: e.regex,
    bCaseInsensitive: e.caseInsensitive
  };
}
function Cb(e) {
  var t = e.sTableId, r = e.aanFeatures.i, n = k("<div/>", {
    class: e.oClasses.sInfo,
    id: r ? null : t + "_info"
  });
  return r || (e.aoDrawCallback.push({
    fn: _b,
    sName: "information"
  }), n.attr("role", "status").attr("aria-live", "polite"), k(e.nTable).attr("aria-describedby", t + "_info")), n[0];
}
function _b(e) {
  var t = e.aanFeatures.i;
  if (t.length !== 0) {
    var r = e.oLanguage, n = e._iDisplayStart + 1, i = e.fnDisplayEnd(), a = e.fnRecordsTotal(), o = e.fnRecordsDisplay(), s = o ? r.sInfo : r.sInfoEmpty;
    o !== a && (s += " " + r.sInfoFiltered), s += r.sInfoPostFix, s = Tb(e, s);
    var l = r.fnInfoCallback;
    l !== null && (s = l.call(
      e.oInstance,
      e,
      n,
      i,
      a,
      o,
      s
    )), k(t).html(s);
  }
}
function Tb(e, t) {
  var r = e.fnFormatNumber, n = e._iDisplayStart + 1, i = e._iDisplayLength, a = e.fnRecordsDisplay(), o = i === -1;
  return t.replace(/_START_/g, r.call(e, n)).replace(/_END_/g, r.call(e, e.fnDisplayEnd())).replace(/_MAX_/g, r.call(e, e.fnRecordsTotal())).replace(/_TOTAL_/g, r.call(e, a)).replace(/_PAGE_/g, r.call(e, o ? 1 : Math.ceil(n / i))).replace(/_PAGES_/g, r.call(e, o ? 1 : Math.ceil(a / i)));
}
function yi(e) {
  var t, r, n = e.iInitDisplayStart, i = e.aoColumns, a, o = e.oFeatures, s = e.bDeferLoading;
  if (!e.bInitialised) {
    setTimeout(function() {
      yi(e);
    }, 200);
    return;
  }
  for (hb(e), pb(e), _i(e, e.aoHeader), _i(e, e.aoFooter), lr(e, !0), o.bAutoWidth && $f(e), t = 0, r = i.length; t < r; t++)
    a = i[t], a.sWidth && (a.nTh.style.width = yt(a.sWidth));
  ot(e, null, "preInit", [e]), wn(e);
  var l = Ft(e);
  (l != "ssp" || s) && (l == "ajax" ? oo(e, [], function(u) {
    var c = ji(e, u);
    for (t = 0; t < c.length; t++)
      ln(e, c[t]);
    e.iInitDisplayStart = n, wn(e), lr(e, !1), Wa(e, u);
  }) : (lr(e, !1), Wa(e)));
}
function Wa(e, t) {
  e._bInitComplete = !0, (t || e.oInit.aaData) && Ni(e), ot(e, null, "plugin-init", [e, t]), ot(e, "aoInitComplete", "init", [e, t]);
}
function Uf(e, t) {
  var r = parseInt(t, 10);
  e._iDisplayLength = r, Xf(e), ot(e, null, "length", [e, r]);
}
function Pb(e) {
  for (var t = e.oClasses, r = e.sTableId, n = e.aLengthMenu, i = Array.isArray(n[0]), a = i ? n[0] : n, o = i ? n[1] : n, s = k("<select/>", {
    name: r + "_length",
    "aria-controls": r,
    class: t.sLengthSelect
  }), l = 0, u = a.length; l < u; l++)
    s[0][l] = new Option(
      typeof o[l] == "number" ? e.fnFormatNumber(o[l]) : o[l],
      a[l]
    );
  var c = k("<div><label/></div>").addClass(t.sLength);
  return e.aanFeatures.l || (c[0].id = r + "_length"), c.children().append(
    e.oLanguage.sLengthMenu.replace("_MENU_", s[0].outerHTML)
  ), k("select", c).val(e._iDisplayLength).on("change.DT", function(f) {
    Uf(e, k(this).val()), un(e);
  }), k(e.nTable).on("length.dt.DT", function(f, d, p) {
    e === d && k("select", c).val(p);
  }), c[0];
}
function Db(e) {
  var t = e.sPaginationType, r = le.ext.pager[t], n = typeof r == "function", i = function(s) {
    un(s);
  }, a = k("<div/>").addClass(e.oClasses.sPaging + t)[0], o = e.aanFeatures;
  return n || r.fnInit(e, a, i), o.p || (a.id = e.sTableId + "_paginate", e.aoDrawCallback.push({
    fn: function(s) {
      if (n) {
        var l = s._iDisplayStart, u = s._iDisplayLength, c = s.fnRecordsDisplay(), f = u === -1, d = f ? 0 : Math.ceil(l / u), p = f ? 1 : Math.ceil(c / u), m = r(d, p), S, w;
        for (S = 0, w = o.p.length; S < w; S++)
          Kf(s, "pageButton")(
            s,
            o.p[S],
            S,
            m,
            d,
            p
          );
      } else
        r.fnUpdate(s, i);
    },
    sName: "pagination"
  })), a;
}
function so(e, t, r) {
  var n = e._iDisplayStart, i = e._iDisplayLength, a = e.fnRecordsDisplay();
  a === 0 || i === -1 ? n = 0 : typeof t == "number" ? (n = t * i, n > a && (n = 0)) : t == "first" ? n = 0 : t == "previous" ? (n = i >= 0 ? n - i : 0, n < 0 && (n = 0)) : t == "next" ? n + i < a && (n += i) : t == "last" ? n = Math.floor((a - 1) / i) * i : yr(e, 0, "Unknown paging action: " + t, 5);
  var o = e._iDisplayStart !== n;
  return e._iDisplayStart = n, o ? (ot(e, null, "page", [e]), r && un(e)) : ot(e, null, "page-nc", [e]), o;
}
function Eb(e) {
  return k("<div/>", {
    id: e.aanFeatures.r ? null : e.sTableId + "_processing",
    class: e.oClasses.sProcessing,
    role: "status"
  }).html(e.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(e.nTable)[0];
}
function lr(e, t) {
  e.oFeatures.bProcessing && k(e.aanFeatures.r).css("display", t ? "block" : "none"), ot(e, null, "processing", [e, t]);
}
function Rb(e) {
  var t = k(e.nTable), r = e.oScroll;
  if (r.sX === "" && r.sY === "")
    return e.nTable;
  var n = r.sX, i = r.sY, a = e.oClasses, o = t.children("caption"), s = o.length ? o[0]._captionSide : null, l = k(t[0].cloneNode(!1)), u = k(t[0].cloneNode(!1)), c = t.children("tfoot"), f = "<div/>", d = function(y) {
    return y ? yt(y) : null;
  };
  c.length || (c = null);
  var p = k(f, { class: a.sScrollWrapper }).append(
    k(f, { class: a.sScrollHead }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: n ? d(n) : "100%"
    }).append(
      k(f, { class: a.sScrollHeadInner }).css({
        "box-sizing": "content-box",
        width: r.sXInner || "100%"
      }).append(
        l.removeAttr("id").css("margin-left", 0).append(s === "top" ? o : null).append(
          t.children("thead")
        )
      )
    )
  ).append(
    k(f, { class: a.sScrollBody }).css({
      position: "relative",
      overflow: "auto",
      width: d(n)
    }).append(t)
  );
  c && p.append(
    k(f, { class: a.sScrollFoot }).css({
      overflow: "hidden",
      border: 0,
      width: n ? d(n) : "100%"
    }).append(
      k(f, { class: a.sScrollFootInner }).append(
        u.removeAttr("id").css("margin-left", 0).append(s === "bottom" ? o : null).append(
          t.children("tfoot")
        )
      )
    )
  );
  var m = p.children(), S = m[0], w = m[1], C = c ? m[2] : null;
  return n && k(w).on("scroll.DT", function(y) {
    var T = this.scrollLeft;
    S.scrollLeft = T, c && (C.scrollLeft = T);
  }), k(w).css("max-height", i), r.bCollapse || k(w).css("height", i), e.nScrollHead = S, e.nScrollBody = w, e.nScrollFoot = C, e.aoDrawCallback.push({
    fn: lo,
    sName: "scrolling"
  }), p[0];
}
function lo(e) {
  var t = e.oScroll, r = t.sX, n = t.sXInner, i = t.sY, a = t.iBarWidth, o = k(e.nScrollHead), s = o[0].style, l = o.children("div"), u = l[0].style, c = l.children("table"), f = e.nScrollBody, d = k(f), p = f.style, m = k(e.nScrollFoot), S = m.children("div"), w = S.children("table"), C = k(e.nTHead), y = k(e.nTable), T = y[0], R = T.style, P = e.nTFoot ? k(e.nTFoot) : null, N = e.oBrowser, L = N.bScrollOversize;
  tr(e.aoColumns, "nTh");
  var W, Y, re, z, Q, se, X = [], ee = [], J = [], ue = [], ce, Z, V, h = function(E) {
    var I = E.style;
    I.paddingTop = "0", I.paddingBottom = "0", I.borderTopWidth = "0", I.borderBottomWidth = "0", I.height = 0;
  }, v = f.scrollHeight > f.clientHeight;
  if (e.scrollBarVis !== v && e.scrollBarVis !== void 0) {
    e.scrollBarVis = v, Ni(e);
    return;
  } else
    e.scrollBarVis = v;
  y.children("thead, tfoot").remove(), P && (se = P.clone().prependTo(y), Y = P.find("tr"), z = se.find("tr"), se.find("[id]").removeAttr("id")), Q = C.clone().prependTo(y), W = C.find("tr"), re = Q.find("tr"), Q.find("th, td").removeAttr("tabindex"), Q.find("[id]").removeAttr("id"), r || (p.width = "100%", o[0].style.width = "100%"), k.each(ao(e, Q), function(E, I) {
    ce = Mi(e, E), I.style.width = e.aoColumns[ce].sWidth;
  }), P && Or(function(E) {
    E.style.width = "";
  }, z), V = y.outerWidth(), r === "" ? (R.width = "100%", L && (y.find("tbody").height() > f.offsetHeight || d.css("overflow-y") == "scroll") && (R.width = yt(y.outerWidth() - a)), V = y.outerWidth()) : n !== "" && (R.width = yt(n), V = y.outerWidth()), Or(h, re), Or(function(E) {
    var I = window.getComputedStyle ? window.getComputedStyle(E).width : yt(k(E).width());
    J.push(E.innerHTML), X.push(I);
  }, re), Or(function(E, I) {
    E.style.width = X[I];
  }, W), k(re).css("height", 0), P && (Or(h, z), Or(function(E) {
    ue.push(E.innerHTML), ee.push(yt(k(E).css("width")));
  }, z), Or(function(E, I) {
    E.style.width = ee[I];
  }, Y), k(z).height(0)), Or(function(E, I) {
    E.innerHTML = '<div class="dataTables_sizing">' + J[I] + "</div>", E.childNodes[0].style.height = "0", E.childNodes[0].style.overflow = "hidden", E.style.width = X[I];
  }, re), P && Or(function(E, I) {
    E.innerHTML = '<div class="dataTables_sizing">' + ue[I] + "</div>", E.childNodes[0].style.height = "0", E.childNodes[0].style.overflow = "hidden", E.style.width = ee[I];
  }, z), Math.round(y.outerWidth()) < Math.round(V) ? (Z = f.scrollHeight > f.offsetHeight || d.css("overflow-y") == "scroll" ? V + a : V, L && (f.scrollHeight > f.offsetHeight || d.css("overflow-y") == "scroll") && (R.width = yt(Z - a)), (r === "" || n !== "") && yr(e, 1, "Possible column misalignment", 6)) : Z = "100%", p.width = yt(Z), s.width = yt(Z), P && (e.nScrollFoot.style.width = yt(Z)), i || L && (p.height = yt(T.offsetHeight + a));
  var g = y.outerWidth();
  c[0].style.width = yt(g), u.width = yt(g);
  var b = y.height() > f.clientHeight || d.css("overflow-y") == "scroll", A = "padding" + (N.bScrollbarLeft ? "Left" : "Right");
  u[A] = b ? a + "px" : "0px", P && (w[0].style.width = yt(g), S[0].style.width = yt(g), S[0].style[A] = b ? a + "px" : "0px"), y.children("colgroup").insertBefore(y.children("thead")), d.trigger("scroll"), (e.bSorted || e.bFiltered) && !e._drawHold && (f.scrollTop = 0);
}
function Or(e, t, r) {
  for (var n = 0, i = 0, a = t.length, o, s; i < a; ) {
    for (o = t[i].firstChild, s = r ? r[i].firstChild : null; o; )
      o.nodeType === 1 && (r ? e(o, s, n) : e(o, n), n++), o = o.nextSibling, s = r ? s.nextSibling : null;
    i++;
  }
}
var oT = /<.*?>/g;
function $f(e) {
  var t = e.nTable, r = e.aoColumns, n = e.oScroll, i = n.sY, a = n.sX, o = n.sXInner, s = r.length, l = ro(e, "bVisible"), u = k("th", e.nTHead), c = t.getAttribute("width"), f = t.parentNode, d = !1, p, m, S, w = e.oBrowser, C = w.bScrollOversize, y = t.style.width;
  y && y.indexOf("%") !== -1 && (c = y);
  var T = Ob(tr(r, "sWidthOrig"), f);
  for (p = 0; p < l.length; p++)
    m = r[l[p]], m.sWidth !== null && (m.sWidth = T[p], d = !0);
  if (C || !d && !a && !i && s == ri(e) && s == u.length)
    for (p = 0; p < s; p++) {
      var R = Mi(e, p);
      R !== null && (r[R].sWidth = yt(u.eq(p).width()));
    }
  else {
    var P = k(t).clone().css("visibility", "hidden").removeAttr("id");
    P.find("tbody tr").remove();
    var N = k("<tr/>").appendTo(P.find("tbody"));
    for (P.find("thead, tfoot").remove(), P.append(k(e.nTHead).clone()).append(k(e.nTFoot).clone()), P.find("tfoot th, tfoot td").css("width", ""), u = ao(e, P.find("thead")[0]), p = 0; p < l.length; p++)
      m = r[l[p]], u[p].style.width = m.sWidthOrig !== null && m.sWidthOrig !== "" ? yt(m.sWidthOrig) : "", m.sWidthOrig && a && k(u[p]).append(k("<div/>").css({
        width: m.sWidthOrig,
        margin: 0,
        padding: 0,
        border: 0,
        height: 1
      }));
    if (e.aoData.length)
      for (p = 0; p < l.length; p++)
        S = l[p], m = r[S], k(kb(e, S)).clone(!1).append(m.sContentPadding).appendTo(N);
    k("[name]", P).removeAttr("name");
    var L = k("<div/>").css(
      a || i ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}
    ).append(P).appendTo(f);
    a && o ? P.width(o) : a ? (P.css("width", "auto"), P.removeAttr("width"), P.width() < f.clientWidth && c && P.width(f.clientWidth)) : i ? P.width(f.clientWidth) : c && P.width(c);
    var W = 0;
    for (p = 0; p < l.length; p++) {
      var Y = k(u[p]), re = Y.outerWidth() - Y.width(), z = w.bBounding ? Math.ceil(u[p].getBoundingClientRect().width) : Y.outerWidth();
      W += z, r[l[p]].sWidth = yt(z - re);
    }
    t.style.width = yt(W), L.remove();
  }
  if (c && (t.style.width = yt(c)), (c || a) && !e._reszEvt) {
    var Q = function() {
      k(window).on("resize.DT-" + e.sInstance, zf(function() {
        Ni(e);
      }));
    };
    C ? setTimeout(Q, 1e3) : Q(), e._reszEvt = !0;
  }
}
var zf = le.util.throttle;
function Ob(e, t) {
  for (var r = [], n = [], i = 0; i < e.length; i++)
    e[i] ? r.push(
      k("<div/>").css("width", yt(e[i])).appendTo(t || document.body)
    ) : r.push(null);
  for (var i = 0; i < e.length; i++)
    n.push(r[i] ? r[i][0].offsetWidth : null);
  return k(r).remove(), n;
}
function kb(e, t) {
  var r = Ab(e, t);
  if (r < 0)
    return null;
  var n = e.aoData[r];
  return n.nTr ? n.anCells[t] : (
    // Might not have been created when deferred rendering
    k("<td/>").html(rr(e, r, t, "display"))[0]
  );
}
function Ab(e, t) {
  for (var r, n = -1, i = -1, a = 0, o = e.aoData.length; a < o; a++)
    r = rr(e, a, t, "display") + "", r = r.replace(oT, ""), r = r.replace(/&nbsp;/g, " "), r.length > n && (n = r.length, i = a);
  return i;
}
function yt(e) {
  return e === null ? "0px" : typeof e == "number" ? e < 0 ? "0px" : e + "px" : e.match(/\d$/) ? e + "px" : e;
}
function ni(e) {
  var t, r, n, i = [], a = e.aoColumns, o, s, l, u, c = e.aaSortingFixed, f = k.isPlainObject(c), d = [], p = function(m) {
    m.length && !Array.isArray(m[0]) ? d.push(m) : k.merge(d, m);
  };
  for (Array.isArray(c) && p(c), f && c.pre && p(c.pre), p(e.aaSorting), f && c.post && p(c.post), t = 0; t < d.length; t++)
    for (u = d[t][0], o = a[u].aDataSort, r = 0, n = o.length; r < n; r++)
      s = o[r], l = a[s].sType || "string", d[t]._idx === void 0 && (d[t]._idx = k.inArray(d[t][1], a[s].asSorting)), i.push({
        src: u,
        col: s,
        dir: d[t][1],
        index: d[t]._idx,
        type: l,
        formatter: le.ext.type.order[l + "-pre"]
      });
  return i;
}
function Ib(e) {
  var t, r, n, i = [], a = le.ext.type.order, o = e.aoData;
  e.aoColumns;
  var s = 0, l, u = e.aiDisplayMaster, c;
  for (jf(e), c = ni(e), t = 0, r = c.length; t < r; t++)
    l = c[t], l.formatter && s++, Mb(e, l.col);
  if (Ft(e) != "ssp" && c.length !== 0) {
    for (t = 0, n = u.length; t < n; t++)
      i[u[t]] = t;
    s === c.length ? u.sort(function(f, d) {
      var p, m, S, w, C, y = c.length, T = o[f]._aSortData, R = o[d]._aSortData;
      for (S = 0; S < y; S++)
        if (C = c[S], p = T[C.col], m = R[C.col], w = p < m ? -1 : p > m ? 1 : 0, w !== 0)
          return C.dir === "asc" ? w : -w;
      return p = i[f], m = i[d], p < m ? -1 : p > m ? 1 : 0;
    }) : u.sort(function(f, d) {
      var p, m, S, w, C, y, T = c.length, R = o[f]._aSortData, P = o[d]._aSortData;
      for (S = 0; S < T; S++)
        if (C = c[S], p = R[C.col], m = P[C.col], y = a[C.type + "-" + C.dir] || a["string-" + C.dir], w = y(p, m), w !== 0)
          return w;
      return p = i[f], m = i[d], p < m ? -1 : p > m ? 1 : 0;
    });
  }
  e.bSorted = !0;
}
function Nb(e) {
  for (var t, r, n = e.aoColumns, i = ni(e), a = e.oLanguage.oAria, o = 0, s = n.length; o < s; o++) {
    var l = n[o], u = l.asSorting, c = l.ariaTitle || l.sTitle.replace(/<.*?>/g, ""), f = l.nTh;
    f.removeAttribute("aria-sort"), l.bSortable ? (i.length > 0 && i[0].col == o ? (f.setAttribute("aria-sort", i[0].dir == "asc" ? "ascending" : "descending"), r = u[i[0].index + 1] || u[0]) : r = u[0], t = c + (r === "asc" ? a.sSortAscending : a.sSortDescending)) : t = c, f.setAttribute("aria-label", t);
  }
}
function Lc(e, t, r, n) {
  var i = e.aoColumns[t], a = e.aaSorting, o = i.asSorting, s, l = function(c, f) {
    var d = c._idx;
    return d === void 0 && (d = k.inArray(c[1], o)), d + 1 < o.length ? d + 1 : f ? null : 0;
  };
  if (typeof a[0] == "number" && (a = e.aaSorting = [a]), r && e.oFeatures.bSortMulti) {
    var u = k.inArray(t, tr(a, "0"));
    u !== -1 ? (s = l(a[u], !0), s === null && a.length === 1 && (s = 0), s === null ? a.splice(u, 1) : (a[u][1] = o[s], a[u]._idx = s)) : (a.push([t, o[0], 0]), a[a.length - 1]._idx = 0);
  } else
    a.length && a[0][0] == t ? (s = l(a[0]), a.length = 1, a[0][1] = o[s], a[0]._idx = s) : (a.length = 0, a.push([t, o[0]]), a[0]._idx = 0);
  wn(e), typeof n == "function" && n(e);
}
function Yf(e, t, r, n) {
  var i = e.aoColumns[r];
  Gf(t, {}, function(a) {
    i.bSortable !== !1 && (e.oFeatures.bProcessing ? (lr(e, !0), setTimeout(function() {
      Lc(e, r, a.shiftKey, n), Ft(e) !== "ssp" && lr(e, !1);
    }, 0)) : Lc(e, r, a.shiftKey, n));
  });
}
function Ha(e) {
  var t = e.aLastSort, r = e.oClasses.sSortColumn, n = ni(e), i = e.oFeatures, a, o, s;
  if (i.bSort && i.bSortClasses) {
    for (a = 0, o = t.length; a < o; a++)
      s = t[a].src, k(tr(e.aoData, "anCells", s)).removeClass(r + (a < 2 ? a + 1 : 3));
    for (a = 0, o = n.length; a < o; a++)
      s = n[a].src, k(tr(e.aoData, "anCells", s)).addClass(r + (a < 2 ? a + 1 : 3));
  }
  e.aLastSort = n;
}
function Mb(e, t) {
  var r = e.aoColumns[t], n = le.ext.order[r.sSortDataType], i;
  n && (i = n.call(
    e.oInstance,
    e,
    t,
    Li(e, t)
  ));
  for (var a, o, s = le.ext.type.order[r.sType + "-pre"], l = 0, u = e.aoData.length; l < u; l++)
    a = e.aoData[l], a._aSortData || (a._aSortData = []), (!a._aSortData[t] || n) && (o = n ? i[l] : (
      // If there was a custom sort function, use data from there
      rr(e, l, t, "sort")
    ), a._aSortData[t] = s ? s(o) : o);
}
function Wi(e) {
  if (!e._bLoadingState) {
    var t = {
      time: +/* @__PURE__ */ new Date(),
      start: e._iDisplayStart,
      length: e._iDisplayLength,
      order: k.extend(!0, [], e.aaSorting),
      search: uv(e.oPreviousSearch),
      columns: k.map(e.aoColumns, function(r, n) {
        return {
          visible: r.bVisible,
          search: uv(e.aoPreSearchCols[n])
        };
      })
    };
    e.oSavedState = t, ot(e, "aoStateSaveParams", "stateSaveParams", [e, t]), e.oFeatures.bStateSave && !e.bDestroying && e.fnStateSaveCallback.call(e.oInstance, e, t);
  }
}
function Lb(e, t, r) {
  if (!e.oFeatures.bStateSave) {
    r();
    return;
  }
  var n = function(a) {
    Fc(e, a, r);
  }, i = e.fnStateLoadCallback.call(e.oInstance, e, n);
  return i !== void 0 && Fc(e, i, r), !0;
}
function Fc(e, t, r) {
  var n, i, a = e.aoColumns;
  e._bLoadingState = !0;
  var o = e._bInitComplete ? new le.Api(e) : null;
  if (!t || !t.time) {
    e._bLoadingState = !1, r();
    return;
  }
  var s = ot(e, "aoStateLoadParams", "stateLoadParams", [e, t]);
  if (k.inArray(!1, s) !== -1) {
    e._bLoadingState = !1, r();
    return;
  }
  var l = e.iStateDuration;
  if (l > 0 && t.time < +/* @__PURE__ */ new Date() - l * 1e3) {
    e._bLoadingState = !1, r();
    return;
  }
  if (t.columns && a.length !== t.columns.length) {
    e._bLoadingState = !1, r();
    return;
  }
  if (e.oLoadedState = k.extend(!0, {}, t), t.length !== void 0 && (o ? o.page.len(t.length) : e._iDisplayLength = t.length), t.start !== void 0 && (o === null ? (e._iDisplayStart = t.start, e.iInitDisplayStart = t.start) : so(e, t.start / e._iDisplayLength)), t.order !== void 0 && (e.aaSorting = [], k.each(t.order, function(c, f) {
    e.aaSorting.push(
      f[0] >= a.length ? [0, f[1]] : f
    );
  })), t.search !== void 0 && k.extend(e.oPreviousSearch, cv(t.search)), t.columns) {
    for (n = 0, i = t.columns.length; n < i; n++) {
      var u = t.columns[n];
      u.visible !== void 0 && (o ? o.column(n).visible(u.visible, !1) : a[n].bVisible = u.visible), u.search !== void 0 && k.extend(e.aoPreSearchCols[n], cv(u.search));
    }
    o && o.columns.adjust();
  }
  e._bLoadingState = !1, ot(e, "aoStateLoaded", "stateLoaded", [e, t]), r();
}
function Va(e) {
  var t = le.settings, r = k.inArray(e, tr(t, "nTable"));
  return r !== -1 ? t[r] : null;
}
function yr(e, t, r, n) {
  if (r = "DataTables warning: " + (e ? "table id=" + e.sTableId + " - " : "") + r, n && (r += ". For more information about this error, please see https://datatables.net/tn/" + n), t)
    window.console && console.log && console.log(r);
  else {
    var i = le.ext, a = i.sErrMode || i.errMode;
    if (e && ot(e, null, "error", [e, n, r]), a == "alert")
      alert(r);
    else {
      if (a == "throw")
        throw new Error(r);
      typeof a == "function" && a(e, n, r);
    }
  }
}
function _r(e, t, r, n) {
  if (Array.isArray(r)) {
    k.each(r, function(i, a) {
      Array.isArray(a) ? _r(e, t, a[0], a[1]) : _r(e, t, a);
    });
    return;
  }
  n === void 0 && (n = r), t[r] !== void 0 && (e[n] = t[r]);
}
function jc(e, t, r) {
  var n;
  for (var i in t)
    t.hasOwnProperty(i) && (n = t[i], k.isPlainObject(n) ? (k.isPlainObject(e[i]) || (e[i] = {}), k.extend(!0, e[i], n)) : r && i !== "data" && i !== "aaData" && Array.isArray(n) ? e[i] = n.slice() : e[i] = n);
  return e;
}
function Gf(e, t, r) {
  k(e).on("click.DT", t, function(n) {
    k(e).trigger("blur"), r(n);
  }).on("keypress.DT", t, function(n) {
    n.which === 13 && (n.preventDefault(), r(n));
  }).on("selectstart.DT", function() {
    return !1;
  });
}
function Bt(e, t, r, n) {
  r && e[t].push({
    fn: r,
    sName: n
  });
}
function ot(e, t, r, n) {
  var i = [];
  if (t && (i = k.map(e[t].slice().reverse(), function(s, l) {
    return s.fn.apply(e.oInstance, n);
  })), r !== null) {
    var a = k.Event(r + ".dt"), o = k(e.nTable);
    o.trigger(a, n), o.parents("body").length === 0 && k("body").trigger(a, n), i.push(a.result);
  }
  return i;
}
function Xf(e) {
  var t = e._iDisplayStart, r = e.fnDisplayEnd(), n = e._iDisplayLength;
  t >= r && (t = r - n), t -= t % n, (n === -1 || t < 0) && (t = 0), e._iDisplayStart = t;
}
function Kf(e, t) {
  var r = e.renderer, n = le.ext.renderer[t];
  return k.isPlainObject(r) && r[t] ? n[r[t]] || n._ : typeof r == "string" && n[r] || n._;
}
function Ft(e) {
  return e.oFeatures.bServerSide ? "ssp" : e.ajax || e.sAjaxSource ? "ajax" : "dom";
}
var Fb = [], _t = Array.prototype, sT = function(e) {
  var t, r, n = le.settings, i = k.map(n, function(a, o) {
    return a.nTable;
  });
  if (e) {
    if (e.nTable && e.oApi)
      return [e];
    if (e.nodeName && e.nodeName.toLowerCase() === "table")
      return t = k.inArray(e, i), t !== -1 ? [n[t]] : null;
    if (e && typeof e.settings == "function")
      return e.settings().toArray();
    typeof e == "string" ? r = k(e) : e instanceof k && (r = e);
  } else
    return [];
  if (r)
    return r.map(function(a) {
      return t = k.inArray(this, i), t !== -1 ? n[t] : null;
    }).toArray();
};
Ge = function(e, t) {
  if (!(this instanceof Ge))
    return new Ge(e, t);
  var r = [], n = function(o) {
    var s = sT(o);
    s && r.push.apply(r, s);
  };
  if (Array.isArray(e))
    for (var i = 0, a = e.length; i < a; i++)
      n(e[i]);
  else
    n(e);
  this.context = to(r), t && k.merge(this, t), this.selector = {
    rows: null,
    cols: null,
    opts: null
  }, Ge.extend(this, this, Fb);
};
le.Api = Ge;
k.extend(Ge.prototype, {
  any: function() {
    return this.count() !== 0;
  },
  concat: _t.concat,
  context: [],
  // array of table settings objects
  count: function() {
    return this.flatten().length;
  },
  each: function(e) {
    for (var t = 0, r = this.length; t < r; t++)
      e.call(this, this[t], t, this);
    return this;
  },
  eq: function(e) {
    var t = this.context;
    return t.length > e ? new Ge(t[e], this[e]) : null;
  },
  filter: function(e) {
    var t = [];
    if (_t.filter)
      t = _t.filter.call(this, e, this);
    else
      for (var r = 0, n = this.length; r < n; r++)
        e.call(this, this[r], r, this) && t.push(this[r]);
    return new Ge(this.context, t);
  },
  flatten: function() {
    var e = [];
    return new Ge(this.context, e.concat.apply(e, this.toArray()));
  },
  join: _t.join,
  indexOf: _t.indexOf || function(e, t) {
    for (var r = t || 0, n = this.length; r < n; r++)
      if (this[r] === e)
        return r;
    return -1;
  },
  iterator: function(e, t, r, n) {
    var i = [], a, o, s, l, u, c = this.context, f, d, p, m = this.selector;
    for (typeof e == "string" && (n = r, r = t, t = e, e = !1), o = 0, s = c.length; o < s; o++) {
      var S = new Ge(c[o]);
      if (t === "table")
        a = r.call(S, c[o], o), a !== void 0 && i.push(a);
      else if (t === "columns" || t === "rows")
        a = r.call(S, c[o], this[o], o), a !== void 0 && i.push(a);
      else if (t === "column" || t === "column-rows" || t === "row" || t === "cell")
        for (d = this[o], t === "column-rows" && (f = uo(c[o], m.opts)), l = 0, u = d.length; l < u; l++)
          p = d[l], t === "cell" ? a = r.call(S, c[o], p.row, p.column, o, l) : a = r.call(S, c[o], p, o, l, f), a !== void 0 && i.push(a);
    }
    if (i.length || n) {
      var w = new Ge(c, e ? i.concat.apply([], i) : i), C = w.selector;
      return C.rows = m.rows, C.cols = m.cols, C.opts = m.opts, w;
    }
    return this;
  },
  lastIndexOf: _t.lastIndexOf || function(e, t) {
    return this.indexOf.apply(this.toArray.reverse(), arguments);
  },
  length: 0,
  map: function(e) {
    var t = [];
    if (_t.map)
      t = _t.map.call(this, e, this);
    else
      for (var r = 0, n = this.length; r < n; r++)
        t.push(e.call(this, this[r], r));
    return new Ge(this.context, t);
  },
  pluck: function(e) {
    var t = le.util.get(e);
    return this.map(function(r) {
      return t(r);
    });
  },
  pop: _t.pop,
  push: _t.push,
  // Does not return an API instance
  reduce: _t.reduce || function(e, t) {
    return lv(this, e, t, 0, this.length, 1);
  },
  reduceRight: _t.reduceRight || function(e, t) {
    return lv(this, e, t, this.length - 1, -1, -1);
  },
  reverse: _t.reverse,
  // Object with rows, columns and opts
  selector: null,
  shift: _t.shift,
  slice: function() {
    return new Ge(this.context, this);
  },
  sort: _t.sort,
  // ? name - order?
  splice: _t.splice,
  toArray: function() {
    return _t.slice.call(this);
  },
  to$: function() {
    return k(this);
  },
  toJQuery: function() {
    return k(this);
  },
  unique: function() {
    return new Ge(this.context, to(this));
  },
  unshift: _t.unshift
});
Ge.extend = function(e, t, r) {
  if (!(!r.length || !t || !(t instanceof Ge) && !t.__dt_wrapper)) {
    var n, i, a, o = function(s, l, u) {
      return function() {
        var c = l.apply(s, arguments);
        return Ge.extend(c, c, u.methodExt), c;
      };
    };
    for (n = 0, i = r.length; n < i; n++)
      a = r[n], t[a.name] = a.type === "function" ? o(e, a.val, a) : a.type === "object" ? {} : a.val, t[a.name].__dt_wrapper = !0, Ge.extend(e, t[a.name], a.propExt);
  }
};
Ge.register = Ne = function(e, t) {
  if (Array.isArray(e)) {
    for (var r = 0, n = e.length; r < n; r++)
      Ge.register(e[r], t);
    return;
  }
  var i, a, o = e.split("."), s = Fb, l, u, c = function(d, p) {
    for (var m = 0, S = d.length; m < S; m++)
      if (d[m].name === p)
        return d[m];
    return null;
  };
  for (i = 0, a = o.length; i < a; i++) {
    u = o[i].indexOf("()") !== -1, l = u ? o[i].replace("()", "") : o[i];
    var f = c(s, l);
    f || (f = {
      name: l,
      val: {},
      methodExt: [],
      propExt: [],
      type: "object"
    }, s.push(f)), i === a - 1 ? (f.val = t, f.type = typeof t == "function" ? "function" : k.isPlainObject(t) ? "object" : "other") : s = u ? f.methodExt : f.propExt;
  }
};
Ge.registerPlural = vt = function(e, t, r) {
  Ge.register(e, r), Ge.register(t, function() {
    var n = r.apply(this, arguments);
    return n === this ? this : n instanceof Ge ? n.length ? Array.isArray(n[0]) ? new Ge(n.context, n[0]) : (
      // Array results are 'enhanced'
      n[0]
    ) : void 0 : n;
  });
};
var jb = function(e, t) {
  if (Array.isArray(e))
    return k.map(e, function(n) {
      return jb(n, t);
    });
  if (typeof e == "number")
    return [t[e]];
  var r = k.map(t, function(n, i) {
    return n.nTable;
  });
  return k(r).filter(e).map(function(n) {
    var i = k.inArray(this, r);
    return t[i];
  }).toArray();
};
Ne("tables()", function(e) {
  return e != null ? new Ge(jb(e, this.context)) : this;
});
Ne("table()", function(e) {
  var t = this.tables(e), r = t.context;
  return r.length ? new Ge(r[0]) : t;
});
vt("tables().nodes()", "table().node()", function() {
  return this.iterator("table", function(e) {
    return e.nTable;
  }, 1);
});
vt("tables().body()", "table().body()", function() {
  return this.iterator("table", function(e) {
    return e.nTBody;
  }, 1);
});
vt("tables().header()", "table().header()", function() {
  return this.iterator("table", function(e) {
    return e.nTHead;
  }, 1);
});
vt("tables().footer()", "table().footer()", function() {
  return this.iterator("table", function(e) {
    return e.nTFoot;
  }, 1);
});
vt("tables().containers()", "table().container()", function() {
  return this.iterator("table", function(e) {
    return e.nTableWrapper;
  }, 1);
});
Ne("draw()", function(e) {
  return this.iterator("table", function(t) {
    e === "page" ? un(t) : (typeof e == "string" && (e = e !== "full-hold"), wn(t, e === !1));
  });
});
Ne("page()", function(e) {
  return e === void 0 ? this.page.info().page : this.iterator("table", function(t) {
    so(t, e);
  });
});
Ne("page.info()", function(e) {
  if (this.context.length !== 0) {
    var t = this.context[0], r = t._iDisplayStart, n = t.oFeatures.bPaginate ? t._iDisplayLength : -1, i = t.fnRecordsDisplay(), a = n === -1;
    return {
      page: a ? 0 : Math.floor(r / n),
      pages: a ? 1 : Math.ceil(i / n),
      start: r,
      end: t.fnDisplayEnd(),
      length: n,
      recordsTotal: t.fnRecordsTotal(),
      recordsDisplay: i,
      serverSide: Ft(t) === "ssp"
    };
  }
});
Ne("page.len()", function(e) {
  return e === void 0 ? this.context.length !== 0 ? this.context[0]._iDisplayLength : void 0 : this.iterator("table", function(t) {
    Uf(t, e);
  });
});
var qb = function(e, t, r) {
  if (r) {
    var n = new Ge(e);
    n.one("draw", function() {
      r(n.ajax.json());
    });
  }
  if (Ft(e) == "ssp")
    wn(e, t);
  else {
    lr(e, !0);
    var i = e.jqXHR;
    i && i.readyState !== 4 && i.abort(), oo(e, [], function(a) {
      io(e);
      for (var o = ji(e, a), s = 0, l = o.length; s < l; s++)
        ln(e, o[s]);
      wn(e, t), lr(e, !1);
    });
  }
};
Ne("ajax.json()", function() {
  var e = this.context;
  if (e.length > 0)
    return e[0].json;
});
Ne("ajax.params()", function() {
  var e = this.context;
  if (e.length > 0)
    return e[0].oAjaxData;
});
Ne("ajax.reload()", function(e, t) {
  return this.iterator("table", function(r) {
    qb(r, t === !1, e);
  });
});
Ne("ajax.url()", function(e) {
  var t = this.context;
  return e === void 0 ? t.length === 0 ? void 0 : (t = t[0], t.ajax ? k.isPlainObject(t.ajax) ? t.ajax.url : t.ajax : t.sAjaxSource) : this.iterator("table", function(r) {
    k.isPlainObject(r.ajax) ? r.ajax.url = e : r.ajax = e;
  });
});
Ne("ajax.url().load()", function(e, t) {
  return this.iterator("table", function(r) {
    qb(r, t === !1, e);
  });
});
var Jf = function(e, t, r, n, i) {
  var a = [], o, s, l, u, c, f, d = typeof t;
  for ((!t || d === "string" || d === "function" || t.length === void 0) && (t = [t]), l = 0, u = t.length; l < u; l++)
    for (s = t[l] && t[l].split && !t[l].match(/[\[\(:]/) ? t[l].split(",") : [t[l]], c = 0, f = s.length; c < f; c++)
      o = r(typeof s[c] == "string" ? s[c].trim() : s[c]), o && o.length && (a = a.concat(o));
  var p = xt.selector[e];
  if (p.length)
    for (l = 0, u = p.length; l < u; l++)
      a = p[l](n, i, a);
  return to(a);
}, Zf = function(e) {
  return e || (e = {}), e.filter && e.search === void 0 && (e.search = e.filter), k.extend({
    search: "none",
    order: "current",
    page: "all"
  }, e);
}, Qf = function(e) {
  for (var t = 0, r = e.length; t < r; t++)
    if (e[t].length > 0)
      return e[0] = e[t], e[0].length = 1, e.length = 1, e.context = [e.context[t]], e;
  return e.length = 0, e;
}, uo = function(e, t) {
  var r, n, i, a = [], o = e.aiDisplay, s = e.aiDisplayMaster, l = t.search, u = t.order, c = t.page;
  if (Ft(e) == "ssp")
    return l === "removed" ? [] : jn(0, s.length);
  if (c == "current")
    for (r = e._iDisplayStart, n = e.fnDisplayEnd(); r < n; r++)
      a.push(o[r]);
  else if (u == "current" || u == "applied") {
    if (l == "none")
      a = s.slice();
    else if (l == "applied")
      a = o.slice();
    else if (l == "removed") {
      for (var f = {}, r = 0, n = o.length; r < n; r++)
        f[o[r]] = null;
      a = k.map(s, function(d) {
        return f.hasOwnProperty(d) ? null : d;
      });
    }
  } else if (u == "index" || u == "original")
    for (r = 0, n = e.aoData.length; r < n; r++)
      l == "none" ? a.push(r) : (i = k.inArray(r, o), (i === -1 && l == "removed" || i >= 0 && l == "applied") && a.push(r));
  return a;
}, lT = function(e, t, r) {
  var n, i = function(a) {
    var o = ib(a), s = e.aoData;
    if (o !== null && !r)
      return [o];
    if (n || (n = uo(e, r)), o !== null && k.inArray(o, n) !== -1)
      return [o];
    if (a == null || a === "")
      return n;
    if (typeof a == "function")
      return k.map(n, function(p) {
        var m = s[p];
        return a(p, m._aData, m.nTr) ? p : null;
      });
    if (a.nodeName) {
      var l = a._DT_RowIndex, u = a._DT_CellIndex;
      if (l !== void 0)
        return s[l] && s[l].nTr === a ? [l] : [];
      if (u)
        return s[u.row] && s[u.row].nTr === a.parentNode ? [u.row] : [];
      var c = k(a).closest("*[data-dt-row]");
      return c.length ? [c.data("dt-row")] : [];
    }
    if (typeof a == "string" && a.charAt(0) === "#") {
      var f = e.aIds[a.replace(/^#/, "")];
      if (f !== void 0)
        return [f.idx];
    }
    var d = ob(
      Ai(e.aoData, n, "nTr")
    );
    return k(d).filter(a).map(function() {
      return this._DT_RowIndex;
    }).toArray();
  };
  return Jf("row", t, i, e, r);
};
Ne("rows()", function(e, t) {
  e === void 0 ? e = "" : k.isPlainObject(e) && (t = e, e = ""), t = Zf(t);
  var r = this.iterator("table", function(n) {
    return lT(n, e, t);
  }, 1);
  return r.selector.rows = e, r.selector.opts = t, r;
});
Ne("rows().nodes()", function() {
  return this.iterator("row", function(e, t) {
    return e.aoData[t].nTr || void 0;
  }, 1);
});
Ne("rows().data()", function() {
  return this.iterator(!0, "rows", function(e, t) {
    return Ai(e.aoData, t, "_aData");
  }, 1);
});
vt("rows().cache()", "row().cache()", function(e) {
  return this.iterator("row", function(t, r) {
    var n = t.aoData[r];
    return e === "search" ? n._aFilterData : n._aSortData;
  }, 1);
});
vt("rows().invalidate()", "row().invalidate()", function(e) {
  return this.iterator("row", function(t, r) {
    Fi(t, r, e);
  });
});
vt("rows().indexes()", "row().index()", function() {
  return this.iterator("row", function(e, t) {
    return t;
  }, 1);
});
vt("rows().ids()", "row().id()", function(e) {
  for (var t = [], r = this.context, n = 0, i = r.length; n < i; n++)
    for (var a = 0, o = this[n].length; a < o; a++) {
      var s = r[n].rowIdFn(r[n].aoData[this[n][a]]._aData);
      t.push((e === !0 ? "#" : "") + s);
    }
  return new Ge(r, t);
});
vt("rows().remove()", "row().remove()", function() {
  var e = this;
  return this.iterator("row", function(t, r, n) {
    var i = t.aoData, a = i[r], o, s, l, u, c, f;
    for (i.splice(r, 1), o = 0, s = i.length; o < s; o++)
      if (c = i[o], f = c.anCells, c.nTr !== null && (c.nTr._DT_RowIndex = o), f !== null)
        for (l = 0, u = f.length; l < u; l++)
          f[l]._DT_CellIndex.row = o;
    Ra(t.aiDisplayMaster, r), Ra(t.aiDisplay, r), Ra(e[n], r, !1), t._iRecordsDisplay > 0 && t._iRecordsDisplay--, Xf(t);
    var d = t.rowIdFn(a._aData);
    d !== void 0 && delete t.aIds[d];
  }), this.iterator("table", function(t) {
    for (var r = 0, n = t.aoData.length; r < n; r++)
      t.aoData[r].idx = r;
  }), this;
});
Ne("rows.add()", function(e) {
  var t = this.iterator("table", function(n) {
    var i, a, o, s = [];
    for (a = 0, o = e.length; a < o; a++)
      i = e[a], i.nodeName && i.nodeName.toUpperCase() === "TR" ? s.push(no(n, i)[0]) : s.push(ln(n, i));
    return s;
  }, 1), r = this.rows(-1);
  return r.pop(), k.merge(r, t), r;
});
Ne("row()", function(e, t) {
  return Qf(this.rows(e, t));
});
Ne("row().data()", function(e) {
  var t = this.context;
  if (e === void 0)
    return t.length && this.length ? t[0].aoData[this[0]]._aData : void 0;
  var r = t[0].aoData[this[0]];
  return r._aData = e, Array.isArray(e) && r.nTr && r.nTr.id && Zr(t[0].rowId)(e, r.nTr.id), Fi(t[0], this[0], "data"), this;
});
Ne("row().node()", function() {
  var e = this.context;
  return e.length && this.length && e[0].aoData[this[0]].nTr || null;
});
Ne("row.add()", function(e) {
  e instanceof k && e.length && (e = e[0]);
  var t = this.iterator("table", function(r) {
    return e.nodeName && e.nodeName.toUpperCase() === "TR" ? no(r, e)[0] : ln(r, e);
  });
  return this.row(t[0]);
});
k(document).on("plugin-init.dt", function(e, t) {
  var r = new Ge(t), n = "on-plugin-init", i = "stateSaveParams." + n, a = "destroy. " + n;
  r.on(i, function(s, l, u) {
    for (var c = l.rowIdFn, f = l.aoData, d = [], p = 0; p < f.length; p++)
      f[p]._detailsShow && d.push("#" + c(f[p]._aData));
    u.childRows = d;
  }), r.on(a, function() {
    r.off(i + " " + a);
  });
  var o = r.state.loaded();
  o && o.childRows && r.rows(k.map(o.childRows, function(s) {
    return s.replace(/:/g, "\\:");
  })).every(function() {
    ot(t, null, "requestChild", [this]);
  });
});
var uT = function(e, t, r, n) {
  var i = [], a = function(o, s) {
    if (Array.isArray(o) || o instanceof k) {
      for (var l = 0, u = o.length; l < u; l++)
        a(o[l], s);
      return;
    }
    if (o.nodeName && o.nodeName.toLowerCase() === "tr")
      i.push(o);
    else {
      var c = k("<tr><td></td></tr>").addClass(s);
      k("td", c).addClass(s).html(o)[0].colSpan = ri(e), i.push(c[0]);
    }
  };
  a(r, n), t._details && t._details.detach(), t._details = k(i), t._detailsShow && t._details.insertAfter(t.nTr);
}, Wb = le.util.throttle(
  function(e) {
    Wi(e[0]);
  },
  500
), ed = function(e, t) {
  var r = e.context;
  if (r.length) {
    var n = r[0].aoData[t !== void 0 ? t : e[0]];
    n && n._details && (n._details.remove(), n._detailsShow = void 0, n._details = void 0, k(n.nTr).removeClass("dt-hasChild"), Wb(r));
  }
}, Hb = function(e, t) {
  var r = e.context;
  if (r.length && e.length) {
    var n = r[0].aoData[e[0]];
    n._details && (n._detailsShow = t, t ? (n._details.insertAfter(n.nTr), k(n.nTr).addClass("dt-hasChild")) : (n._details.detach(), k(n.nTr).removeClass("dt-hasChild")), ot(r[0], null, "childRow", [t, e.row(e[0])]), cT(r[0]), Wb(r));
  }
}, cT = function(e) {
  var t = new Ge(e), r = ".dt.DT_details", n = "draw" + r, i = "column-sizing" + r, a = "destroy" + r, o = e.aoData;
  t.off(n + " " + i + " " + a), tr(o, "_details").length > 0 && (t.on(n, function(s, l) {
    e === l && t.rows({ page: "current" }).eq(0).each(function(u) {
      var c = o[u];
      c._detailsShow && c._details.insertAfter(c.nTr);
    });
  }), t.on(i, function(s, l, u, c) {
    if (e === l)
      for (var f, d = ri(l), p = 0, m = o.length; p < m; p++)
        f = o[p], f._details && f._details.each(function() {
          var S = k(this).children("td");
          S.length == 1 && S.attr("colspan", d);
        });
  }), t.on(a, function(s, l) {
    if (e === l)
      for (var u = 0, c = o.length; u < c; u++)
        o[u]._details && ed(t, u);
  }));
}, fT = "", Hi = fT + "row().child", co = Hi + "()";
Ne(co, function(e, t) {
  var r = this.context;
  return e === void 0 ? r.length && this.length ? r[0].aoData[this[0]]._details : void 0 : (e === !0 ? this.child.show() : e === !1 ? ed(this) : r.length && this.length && uT(r[0], r[0].aoData[this[0]], e, t), this);
});
Ne([
  Hi + ".show()",
  co + ".show()"
  // only when `child()` was called with parameters (without
], function(e) {
  return Hb(this, !0), this;
});
Ne([
  Hi + ".hide()",
  co + ".hide()"
  // only when `child()` was called with parameters (without
], function() {
  return Hb(this, !1), this;
});
Ne([
  Hi + ".remove()",
  co + ".remove()"
  // only when `child()` was called with parameters (without
], function() {
  return ed(this), this;
});
Ne(Hi + ".isShown()", function() {
  var e = this.context;
  return e.length && this.length && e[0].aoData[this[0]]._detailsShow || !1;
});
var dT = /^([^:]+):(name|visIdx|visible)$/, Vb = function(e, t, r, n, i) {
  for (var a = [], o = 0, s = i.length; o < s; o++)
    a.push(rr(e, i[o], t));
  return a;
}, pT = function(e, t, r) {
  var n = e.aoColumns, i = tr(n, "sName"), a = tr(n, "nTh"), o = function(s) {
    var l = ib(s);
    if (s === "")
      return jn(n.length);
    if (l !== null)
      return [
        l >= 0 ? l : (
          // Count from left
          n.length + l
        )
        // Count from right (+ because its a negative value)
      ];
    if (typeof s == "function") {
      var u = uo(e, r);
      return k.map(n, function(S, w) {
        return s(
          w,
          Vb(e, w, 0, 0, u),
          a[w]
        ) ? w : null;
      });
    }
    var c = typeof s == "string" ? s.match(dT) : "";
    if (c)
      switch (c[2]) {
        case "visIdx":
        case "visible":
          var f = parseInt(c[1], 10);
          if (f < 0) {
            var d = k.map(n, function(S, w) {
              return S.bVisible ? w : null;
            });
            return [d[d.length + f]];
          }
          return [Mi(e, f)];
        case "name":
          return k.map(i, function(S, w) {
            return S === c[1] ? w : null;
          });
        default:
          return [];
      }
    if (s.nodeName && s._DT_CellIndex)
      return [s._DT_CellIndex.column];
    var p = k(a).filter(s).map(function() {
      return k.inArray(this, a);
    }).toArray();
    if (p.length || !s.nodeName)
      return p;
    var m = k(s).closest("*[data-dt-column]");
    return m.length ? [m.data("dt-column")] : [];
  };
  return Jf("column", t, o, e, r);
}, hT = function(e, t, r) {
  var n = e.aoColumns, i = n[t], a = e.aoData, o, s, l, u;
  if (r === void 0)
    return i.bVisible;
  if (i.bVisible !== r) {
    if (r) {
      var c = k.inArray(!0, tr(n, "bVisible"), t + 1);
      for (s = 0, l = a.length; s < l; s++)
        u = a[s].nTr, o = a[s].anCells, u && u.insertBefore(o[t], o[c] || null);
    } else
      k(tr(e.aoData, "anCells", t)).detach();
    i.bVisible = r;
  }
};
Ne("columns()", function(e, t) {
  e === void 0 ? e = "" : k.isPlainObject(e) && (t = e, e = ""), t = Zf(t);
  var r = this.iterator("table", function(n) {
    return pT(n, e, t);
  }, 1);
  return r.selector.cols = e, r.selector.opts = t, r;
});
vt("columns().header()", "column().header()", function(e, t) {
  return this.iterator("column", function(r, n) {
    return r.aoColumns[n].nTh;
  }, 1);
});
vt("columns().footer()", "column().footer()", function(e, t) {
  return this.iterator("column", function(r, n) {
    return r.aoColumns[n].nTf;
  }, 1);
});
vt("columns().data()", "column().data()", function() {
  return this.iterator("column-rows", Vb, 1);
});
vt("columns().dataSrc()", "column().dataSrc()", function() {
  return this.iterator("column", function(e, t) {
    return e.aoColumns[t].mData;
  }, 1);
});
vt("columns().cache()", "column().cache()", function(e) {
  return this.iterator("column-rows", function(t, r, n, i, a) {
    return Ai(
      t.aoData,
      a,
      e === "search" ? "_aFilterData" : "_aSortData",
      r
    );
  }, 1);
});
vt("columns().nodes()", "column().nodes()", function() {
  return this.iterator("column-rows", function(e, t, r, n, i) {
    return Ai(e.aoData, i, "anCells", t);
  }, 1);
});
vt("columns().visible()", "column().visible()", function(e, t) {
  var r = this, n = this.iterator("column", function(i, a) {
    if (e === void 0)
      return i.aoColumns[a].bVisible;
    hT(i, a, e);
  });
  return e !== void 0 && this.iterator("table", function(i) {
    _i(i, i.aoHeader), _i(i, i.aoFooter), i.aiDisplay.length || k(i.nTBody).find("td[colspan]").attr("colspan", ri(i)), Wi(i), r.iterator("column", function(a, o) {
      ot(a, null, "column-visibility", [a, o, e, t]);
    }), (t === void 0 || t) && r.columns.adjust();
  }), n;
});
vt("columns().indexes()", "column().index()", function(e) {
  return this.iterator("column", function(t, r) {
    return e === "visible" ? Li(t, r) : r;
  }, 1);
});
Ne("columns.adjust()", function() {
  return this.iterator("table", function(e) {
    Ni(e);
  }, 1);
});
Ne("column.index()", function(e, t) {
  if (this.context.length !== 0) {
    var r = this.context[0];
    if (e === "fromVisible" || e === "toData")
      return Mi(r, t);
    if (e === "fromData" || e === "toVisible")
      return Li(r, t);
  }
});
Ne("column()", function(e, t) {
  return Qf(this.columns(e, t));
});
var vT = function(e, t, r) {
  var n = e.aoData, i = uo(e, r), a = ob(Ai(n, i, "anCells")), o = k(sb([], a)), s, l = e.aoColumns.length, u, c, f, d, p, m, S = function(w) {
    var C = typeof w == "function";
    if (w == null || C) {
      for (u = [], c = 0, f = i.length; c < f; c++)
        for (s = i[c], d = 0; d < l; d++)
          p = {
            row: s,
            column: d
          }, C ? (m = n[s], w(p, rr(e, s, d), m.anCells ? m.anCells[d] : null) && u.push(p)) : u.push(p);
      return u;
    }
    if (k.isPlainObject(w))
      return w.column !== void 0 && w.row !== void 0 && k.inArray(w.row, i) !== -1 ? [w] : [];
    var y = o.filter(w).map(function(T, R) {
      return {
        // use a new object, in case someone changes the values
        row: R._DT_CellIndex.row,
        column: R._DT_CellIndex.column
      };
    }).toArray();
    return y.length || !w.nodeName ? y : (m = k(w).closest("*[data-dt-row]"), m.length ? [{
      row: m.data("dt-row"),
      column: m.data("dt-column")
    }] : []);
  };
  return Jf("cell", t, S, e, r);
};
Ne("cells()", function(e, t, r) {
  if (k.isPlainObject(e) && (e.row === void 0 ? (r = e, e = null) : (r = t, t = null)), k.isPlainObject(t) && (r = t, t = null), t == null)
    return this.iterator("table", function(d) {
      return vT(d, e, Zf(r));
    });
  var n = r ? {
    page: r.page,
    order: r.order,
    search: r.search
  } : {}, i = this.columns(t, n), a = this.rows(e, n), o, s, l, u, c = this.iterator("table", function(d, p) {
    var m = [];
    for (o = 0, s = a[p].length; o < s; o++)
      for (l = 0, u = i[p].length; l < u; l++)
        m.push({
          row: a[p][o],
          column: i[p][l]
        });
    return m;
  }, 1), f = r && r.selected ? this.cells(c, r) : c;
  return k.extend(f.selector, {
    cols: t,
    rows: e,
    opts: r
  }), f;
});
vt("cells().nodes()", "cell().node()", function() {
  return this.iterator("cell", function(e, t, r) {
    var n = e.aoData[t];
    return n && n.anCells ? n.anCells[r] : void 0;
  }, 1);
});
Ne("cells().data()", function() {
  return this.iterator("cell", function(e, t, r) {
    return rr(e, t, r);
  }, 1);
});
vt("cells().cache()", "cell().cache()", function(e) {
  return e = e === "search" ? "_aFilterData" : "_aSortData", this.iterator("cell", function(t, r, n) {
    return t.aoData[r][e][n];
  }, 1);
});
vt("cells().render()", "cell().render()", function(e) {
  return this.iterator("cell", function(t, r, n) {
    return rr(t, r, n, e);
  }, 1);
});
vt("cells().indexes()", "cell().index()", function() {
  return this.iterator("cell", function(e, t, r) {
    return {
      row: t,
      column: r,
      columnVisible: Li(e, r)
    };
  }, 1);
});
vt("cells().invalidate()", "cell().invalidate()", function(e) {
  return this.iterator("cell", function(t, r, n) {
    Fi(t, r, e, n);
  });
});
Ne("cell()", function(e, t, r) {
  return Qf(this.cells(e, t, r));
});
Ne("cell().data()", function(e) {
  var t = this.context, r = this[0];
  return e === void 0 ? t.length && r.length ? rr(t[0], r[0].row, r[0].column) : void 0 : (db(t[0], r[0].row, r[0].column, e), Fi(t[0], r[0].row, "data", r[0].column), this);
});
Ne("order()", function(e, t) {
  var r = this.context;
  return e === void 0 ? r.length !== 0 ? r[0].aaSorting : void 0 : (typeof e == "number" ? e = [[e, t]] : e.length && !Array.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)), this.iterator("table", function(n) {
    n.aaSorting = e.slice();
  }));
});
Ne("order.listener()", function(e, t, r) {
  return this.iterator("table", function(n) {
    Yf(n, e, t, r);
  });
});
Ne("order.fixed()", function(e) {
  if (!e) {
    var t = this.context, r = t.length ? t[0].aaSortingFixed : void 0;
    return Array.isArray(r) ? { pre: r } : r;
  }
  return this.iterator("table", function(n) {
    n.aaSortingFixed = k.extend(!0, {}, e);
  });
});
Ne([
  "columns().order()",
  "column().order()"
], function(e) {
  var t = this;
  return this.iterator("table", function(r, n) {
    var i = [];
    k.each(t[n], function(a, o) {
      i.push([o, e]);
    }), r.aaSorting = i;
  });
});
Ne("search()", function(e, t, r, n) {
  var i = this.context;
  return e === void 0 ? i.length !== 0 ? i[0].oPreviousSearch.sSearch : void 0 : this.iterator("table", function(a) {
    a.oFeatures.bFilter && qi(a, k.extend({}, a.oPreviousSearch, {
      sSearch: e + "",
      bRegex: t === null ? !1 : t,
      bSmart: r === null ? !0 : r,
      bCaseInsensitive: n === null ? !0 : n
    }), 1);
  });
});
vt(
  "columns().search()",
  "column().search()",
  function(e, t, r, n) {
    return this.iterator("column", function(i, a) {
      var o = i.aoPreSearchCols;
      if (e === void 0)
        return o[a].sSearch;
      i.oFeatures.bFilter && (k.extend(o[a], {
        sSearch: e + "",
        bRegex: t === null ? !1 : t,
        bSmart: r === null ? !0 : r,
        bCaseInsensitive: n === null ? !0 : n
      }), qi(i, i.oPreviousSearch, 1));
    });
  }
);
Ne("state()", function() {
  return this.context.length ? this.context[0].oSavedState : null;
});
Ne("state.clear()", function() {
  return this.iterator("table", function(e) {
    e.fnStateSaveCallback.call(e.oInstance, e, {});
  });
});
Ne("state.loaded()", function() {
  return this.context.length ? this.context[0].oLoadedState : null;
});
Ne("state.save()", function() {
  return this.iterator("table", function(e) {
    Wi(e);
  });
});
le.use = function(e, t) {
  t === "lib" || e.fn ? k = e : t == "win" || e.document ? (window = e, document = e.document) : (t === "datetime" || e.type === "DateTime") && (le.DateTime = e);
};
le.factory = function(e, t) {
  var r = !1;
  return e && e.document && (window = e, document = e.document), t && t.fn && t.fn.jquery && (k = t, r = !0), r;
};
le.versionCheck = le.fnVersionCheck = function(e) {
  for (var t = le.version.split("."), r = e.split("."), n, i, a = 0, o = r.length; a < o; a++)
    if (n = parseInt(t[a], 10) || 0, i = parseInt(r[a], 10) || 0, n !== i)
      return n > i;
  return !0;
};
le.isDataTable = le.fnIsDataTable = function(e) {
  var t = k(e).get(0), r = !1;
  return e instanceof le.Api ? !0 : (k.each(le.settings, function(n, i) {
    var a = i.nScrollHead ? k("table", i.nScrollHead)[0] : null, o = i.nScrollFoot ? k("table", i.nScrollFoot)[0] : null;
    (i.nTable === t || a === t || o === t) && (r = !0);
  }), r);
};
le.tables = le.fnTables = function(e) {
  var t = !1;
  k.isPlainObject(e) && (t = e.api, e = e.visible);
  var r = k.map(le.settings, function(n) {
    if (!e || e && k(n.nTable).is(":visible"))
      return n.nTable;
  });
  return t ? new Ge(r) : r;
};
le.camelToHungarian = Br;
Ne("$()", function(e, t) {
  var r = this.rows(t).nodes(), n = k(r);
  return k([].concat(
    n.filter(e).toArray(),
    n.find(e).toArray()
  ));
});
k.each(["on", "one", "off"], function(e, t) {
  Ne(t + "()", function() {
    var r = Array.prototype.slice.call(arguments);
    r[0] = k.map(r[0].split(/\s/), function(i) {
      return i.match(/\.dt\b/) ? i : i + ".dt";
    }).join(" ");
    var n = k(this.tables().nodes());
    return n[t].apply(n, r), this;
  });
});
Ne("clear()", function() {
  return this.iterator("table", function(e) {
    io(e);
  });
});
Ne("settings()", function() {
  return new Ge(this.context, this.context);
});
Ne("init()", function() {
  var e = this.context;
  return e.length ? e[0].oInit : null;
});
Ne("data()", function() {
  return this.iterator("table", function(e) {
    return tr(e.aoData, "_aData");
  }).flatten();
});
Ne("destroy()", function(e) {
  return e = e || !1, this.iterator("table", function(t) {
    var r = t.oClasses, n = t.nTable, i = t.nTBody, a = t.nTHead, o = t.nTFoot, s = k(n), l = k(i), u = k(t.nTableWrapper), c = k.map(t.aoData, function(S) {
      return S.nTr;
    }), f;
    t.bDestroying = !0, ot(t, "aoDestroyCallback", "destroy", [t]), e || new Ge(t).columns().visible(!0), u.off(".DT").find(":not(tbody *)").off(".DT"), k(window).off(".DT-" + t.sInstance), n != a.parentNode && (s.children("thead").detach(), s.append(a)), o && n != o.parentNode && (s.children("tfoot").detach(), s.append(o)), t.aaSorting = [], t.aaSortingFixed = [], Ha(t), k(c).removeClass(t.asStripeClasses.join(" ")), k("th, td", a).removeClass(
      r.sSortable + " " + r.sSortableAsc + " " + r.sSortableDesc + " " + r.sSortableNone
    ), l.children().detach(), l.append(c);
    var d = t.nTableWrapper.parentNode, p = e ? "remove" : "detach";
    s[p](), u[p](), !e && d && (d.insertBefore(n, t.nTableReinsertBefore), s.css("width", t.sDestroyWidth).removeClass(r.sTable), f = t.asDestroyStripes.length, f && l.children().each(function(S) {
      k(this).addClass(t.asDestroyStripes[S % f]);
    }));
    var m = k.inArray(t, le.settings);
    m !== -1 && le.settings.splice(m, 1);
  });
});
k.each(["column", "row", "cell"], function(e, t) {
  Ne(t + "s().every()", function(r) {
    var n = this.selector.opts, i = this;
    return this.iterator(t, function(a, o, s, l, u) {
      r.call(
        i[t](
          o,
          t === "cell" ? s : n,
          t === "cell" ? n : void 0
        ),
        o,
        s,
        l,
        u
      );
    });
  });
});
Ne("i18n()", function(e, t, r) {
  var n = this.context[0], i = $n(e)(n.oLanguage);
  return i === void 0 && (i = t), r !== void 0 && k.isPlainObject(i) && (i = i[r] !== void 0 ? i[r] : i._), typeof i == "string" ? i.replace("%d", r) : i;
});
le.version = "1.13.7";
le.settings = [];
le.models = {};
le.models.oSearch = {
  /**
   * Flag to indicate if the filtering should be case insensitive or not
   *  @type boolean
   *  @default true
   */
  bCaseInsensitive: !0,
  /**
   * Applied search term
   *  @type string
   *  @default <i>Empty string</i>
   */
  sSearch: "",
  /**
   * Flag to indicate if the search term should be interpreted as a
   * regular expression (true) or not (false) and therefore and special
   * regex characters escaped.
   *  @type boolean
   *  @default false
   */
  bRegex: !1,
  /**
   * Flag to indicate if DataTables is to use its smart filtering or not.
   *  @type boolean
   *  @default true
   */
  bSmart: !0,
  /**
   * Flag to indicate if DataTables should only trigger a search when
   * the return key is pressed.
   *  @type boolean
   *  @default false
   */
  return: !1
};
le.models.oRow = {
  /**
   * TR element for the row
   *  @type node
   *  @default null
   */
  nTr: null,
  /**
   * Array of TD elements for each row. This is null until the row has been
   * created.
   *  @type array nodes
   *  @default []
   */
  anCells: null,
  /**
   * Data object from the original data source for the row. This is either
   * an array if using the traditional form of DataTables, or an object if
   * using mData options. The exact type will depend on the passed in
   * data from the data source, or will be an array if using DOM a data
   * source.
   *  @type array|object
   *  @default []
   */
  _aData: [],
  /**
   * Sorting data cache - this array is ostensibly the same length as the
   * number of columns (although each index is generated only as it is
   * needed), and holds the data that is used for sorting each column in the
   * row. We do this cache generation at the start of the sort in order that
   * the formatting of the sort data need be done only once for each cell
   * per sort. This array should not be read from or written to by anything
   * other than the master sorting methods.
   *  @type array
   *  @default null
   *  @private
   */
  _aSortData: null,
  /**
   * Per cell filtering data cache. As per the sort data cache, used to
   * increase the performance of the filtering in DataTables
   *  @type array
   *  @default null
   *  @private
   */
  _aFilterData: null,
  /**
   * Filtering data cache. This is the same as the cell filtering cache, but
   * in this case a string rather than an array. This is easily computed with
   * a join on `_aFilterData`, but is provided as a cache so the join isn't
   * needed on every search (memory traded for performance)
   *  @type array
   *  @default null
   *  @private
   */
  _sFilterRow: null,
  /**
   * Cache of the class name that DataTables has applied to the row, so we
   * can quickly look at this variable rather than needing to do a DOM check
   * on className for the nTr property.
   *  @type string
   *  @default <i>Empty string</i>
   *  @private
   */
  _sRowStripe: "",
  /**
   * Denote if the original data source was from the DOM, or the data source
   * object. This is used for invalidating data, so DataTables can
   * automatically read data from the original source, unless uninstructed
   * otherwise.
   *  @type string
   *  @default null
   *  @private
   */
  src: null,
  /**
   * Index in the aoData array. This saves an indexOf lookup when we have the
   * object, but want to know the index
   *  @type integer
   *  @default -1
   *  @private
   */
  idx: -1
};
le.models.oColumn = {
  /**
   * Column index. This could be worked out on-the-fly with $.inArray, but it
   * is faster to just hold it as a variable
   *  @type integer
   *  @default null
   */
  idx: null,
  /**
   * A list of the columns that sorting should occur on when this column
   * is sorted. That this property is an array allows multi-column sorting
   * to be defined for a column (for example first name / last name columns
   * would benefit from this). The values are integers pointing to the
   * columns to be sorted on (typically it will be a single integer pointing
   * at itself, but that doesn't need to be the case).
   *  @type array
   */
  aDataSort: null,
  /**
   * Define the sorting directions that are applied to the column, in sequence
   * as the column is repeatedly sorted upon - i.e. the first value is used
   * as the sorting direction when the column if first sorted (clicked on).
   * Sort it again (click again) and it will move on to the next index.
   * Repeat until loop.
   *  @type array
   */
  asSorting: null,
  /**
   * Flag to indicate if the column is searchable, and thus should be included
   * in the filtering or not.
   *  @type boolean
   */
  bSearchable: null,
  /**
   * Flag to indicate if the column is sortable or not.
   *  @type boolean
   */
  bSortable: null,
  /**
   * Flag to indicate if the column is currently visible in the table or not
   *  @type boolean
   */
  bVisible: null,
  /**
   * Store for manual type assignment using the `column.type` option. This
   * is held in store so we can manipulate the column's `sType` property.
   *  @type string
   *  @default null
   *  @private
   */
  _sManualType: null,
  /**
   * Flag to indicate if HTML5 data attributes should be used as the data
   * source for filtering or sorting. True is either are.
   *  @type boolean
   *  @default false
   *  @private
   */
  _bAttrSrc: !1,
  /**
   * Developer definable function that is called whenever a cell is created (Ajax source,
   * etc) or processed for input (DOM source). This can be used as a compliment to mRender
   * allowing you to modify the DOM element (add background colour for example) when the
   * element is available.
   *  @type function
   *  @param {element} nTd The TD node that has been created
   *  @param {*} sData The Data for the cell
   *  @param {array|object} oData The data for the whole row
   *  @param {int} iRow The row index for the aoData data store
   *  @default null
   */
  fnCreatedCell: null,
  /**
   * Function to get data from a cell in a column. You should <b>never</b>
   * access data directly through _aData internally in DataTables - always use
   * the method attached to this property. It allows mData to function as
   * required. This function is automatically assigned by the column
   * initialisation method
   *  @type function
   *  @param {array|object} oData The data array/object for the array
   *    (i.e. aoData[]._aData)
   *  @param {string} sSpecific The specific data type you want to get -
   *    'display', 'type' 'filter' 'sort'
   *  @returns {*} The data for the cell from the given row's data
   *  @default null
   */
  fnGetData: null,
  /**
   * Function to set data for a cell in the column. You should <b>never</b>
   * set the data directly to _aData internally in DataTables - always use
   * this method. It allows mData to function as required. This function
   * is automatically assigned by the column initialisation method
   *  @type function
   *  @param {array|object} oData The data array/object for the array
   *    (i.e. aoData[]._aData)
   *  @param {*} sValue Value to set
   *  @default null
   */
  fnSetData: null,
  /**
   * Property to read the value for the cells in the column from the data
   * source array / object. If null, then the default content is used, if a
   * function is given then the return from the function is used.
   *  @type function|int|string|null
   *  @default null
   */
  mData: null,
  /**
   * Partner property to mData which is used (only when defined) to get
   * the data - i.e. it is basically the same as mData, but without the
   * 'set' option, and also the data fed to it is the result from mData.
   * This is the rendering method to match the data method of mData.
   *  @type function|int|string|null
   *  @default null
   */
  mRender: null,
  /**
   * Unique header TH/TD element for this column - this is what the sorting
   * listener is attached to (if sorting is enabled.)
   *  @type node
   *  @default null
   */
  nTh: null,
  /**
   * Unique footer TH/TD element for this column (if there is one). Not used
   * in DataTables as such, but can be used for plug-ins to reference the
   * footer for each column.
   *  @type node
   *  @default null
   */
  nTf: null,
  /**
   * The class to apply to all TD elements in the table's TBODY for the column
   *  @type string
   *  @default null
   */
  sClass: null,
  /**
   * When DataTables calculates the column widths to assign to each column,
   * it finds the longest string in each column and then constructs a
   * temporary table and reads the widths from that. The problem with this
   * is that "mmm" is much wider then "iiii", but the latter is a longer
   * string - thus the calculation can go wrong (doing it properly and putting
   * it into an DOM object and measuring that is horribly(!) slow). Thus as
   * a "work around" we provide this option. It will append its value to the
   * text that is found to be the longest string for the column - i.e. padding.
   *  @type string
   */
  sContentPadding: null,
  /**
   * Allows a default value to be given for a column's data, and will be used
   * whenever a null data source is encountered (this can be because mData
   * is set to null, or because the data source itself is null).
   *  @type string
   *  @default null
   */
  sDefaultContent: null,
  /**
   * Name for the column, allowing reference to the column by name as well as
   * by index (needs a lookup to work by name).
   *  @type string
   */
  sName: null,
  /**
   * Custom sorting data type - defines which of the available plug-ins in
   * afnSortData the custom sorting will use - if any is defined.
   *  @type string
   *  @default std
   */
  sSortDataType: "std",
  /**
   * Class to be applied to the header element when sorting on this column
   *  @type string
   *  @default null
   */
  sSortingClass: null,
  /**
   * Class to be applied to the header element when sorting on this column -
   * when jQuery UI theming is used.
   *  @type string
   *  @default null
   */
  sSortingClassJUI: null,
  /**
   * Title of the column - what is seen in the TH element (nTh).
   *  @type string
   */
  sTitle: null,
  /**
   * Column sorting and filtering type
   *  @type string
   *  @default null
   */
  sType: null,
  /**
   * Width of the column
   *  @type string
   *  @default null
   */
  sWidth: null,
  /**
   * Width of the column when it was first "encountered"
   *  @type string
   *  @default null
   */
  sWidthOrig: null
};
le.defaults = {
  /**
   * An array of data to use for the table, passed in at initialisation which
   * will be used in preference to any data which is already in the DOM. This is
   * particularly useful for constructing tables purely in Javascript, for
   * example with a custom Ajax call.
   *  @type array
   *  @default null
   *
   *  @dtopt Option
   *  @name DataTable.defaults.data
   *
   *  @example
   *    // Using a 2D array data source
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "data": [
   *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
   *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
   *        ],
   *        "columns": [
   *          { "title": "Engine" },
   *          { "title": "Browser" },
   *          { "title": "Platform" },
   *          { "title": "Version" },
   *          { "title": "Grade" }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using an array of objects as a data source (`data`)
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "data": [
   *          {
   *            "engine":   "Trident",
   *            "browser":  "Internet Explorer 4.0",
   *            "platform": "Win 95+",
   *            "version":  4,
   *            "grade":    "X"
   *          },
   *          {
   *            "engine":   "Trident",
   *            "browser":  "Internet Explorer 5.0",
   *            "platform": "Win 95+",
   *            "version":  5,
   *            "grade":    "C"
   *          }
   *        ],
   *        "columns": [
   *          { "title": "Engine",   "data": "engine" },
   *          { "title": "Browser",  "data": "browser" },
   *          { "title": "Platform", "data": "platform" },
   *          { "title": "Version",  "data": "version" },
   *          { "title": "Grade",    "data": "grade" }
   *        ]
   *      } );
   *    } );
   */
  aaData: null,
  /**
   * If ordering is enabled, then DataTables will perform a first pass sort on
   * initialisation. You can define which column(s) the sort is performed
   * upon, and the sorting direction, with this variable. The `sorting` array
   * should contain an array for each column to be sorted initially containing
   * the column's index and a direction string ('asc' or 'desc').
   *  @type array
   *  @default [[0,'asc']]
   *
   *  @dtopt Option
   *  @name DataTable.defaults.order
   *
   *  @example
   *    // Sort by 3rd column first, and then 4th column
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "order": [[2,'asc'], [3,'desc']]
   *      } );
   *    } );
   *
   *    // No initial sorting
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "order": []
   *      } );
   *    } );
   */
  aaSorting: [[0, "asc"]],
  /**
   * This parameter is basically identical to the `sorting` parameter, but
   * cannot be overridden by user interaction with the table. What this means
   * is that you could have a column (visible or hidden) which the sorting
   * will always be forced on first - any sorting after that (from the user)
   * will then be performed as required. This can be useful for grouping rows
   * together.
   *  @type array
   *  @default null
   *
   *  @dtopt Option
   *  @name DataTable.defaults.orderFixed
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "orderFixed": [[0,'asc']]
   *      } );
   *    } )
   */
  aaSortingFixed: [],
  /**
   * DataTables can be instructed to load data to display in the table from a
   * Ajax source. This option defines how that Ajax call is made and where to.
   *
   * The `ajax` property has three different modes of operation, depending on
   * how it is defined. These are:
   *
   * * `string` - Set the URL from where the data should be loaded from.
   * * `object` - Define properties for `jQuery.ajax`.
   * * `function` - Custom data get function
   *
   * `string`
   * --------
   *
   * As a string, the `ajax` property simply defines the URL from which
   * DataTables will load data.
   *
   * `object`
   * --------
   *
   * As an object, the parameters in the object are passed to
   * [jQuery.ajax](https://api.jquery.com/jQuery.ajax/) allowing fine control
   * of the Ajax request. DataTables has a number of default parameters which
   * you can override using this option. Please refer to the jQuery
   * documentation for a full description of the options available, although
   * the following parameters provide additional options in DataTables or
   * require special consideration:
   *
   * * `data` - As with jQuery, `data` can be provided as an object, but it
   *   can also be used as a function to manipulate the data DataTables sends
   *   to the server. The function takes a single parameter, an object of
   *   parameters with the values that DataTables has readied for sending. An
   *   object may be returned which will be merged into the DataTables
   *   defaults, or you can add the items to the object that was passed in and
   *   not return anything from the function. This supersedes `fnServerParams`
   *   from DataTables 1.9-.
   *
   * * `dataSrc` - By default DataTables will look for the property `data` (or
   *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
   *   from an Ajax source or for server-side processing - this parameter
   *   allows that property to be changed. You can use Javascript dotted
   *   object notation to get a data source for multiple levels of nesting, or
   *   it my be used as a function. As a function it takes a single parameter,
   *   the JSON returned from the server, which can be manipulated as
   *   required, with the returned value being that used by DataTables as the
   *   data source for the table. This supersedes `sAjaxDataProp` from
   *   DataTables 1.9-.
   *
   * * `success` - Should not be overridden it is used internally in
   *   DataTables. To manipulate / transform the data returned by the server
   *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
   *
   * `function`
   * ----------
   *
   * As a function, making the Ajax call is left up to yourself allowing
   * complete control of the Ajax request. Indeed, if desired, a method other
   * than Ajax could be used to obtain the required data, such as Web storage
   * or an AIR database.
   *
   * The function is given four parameters and no return is required. The
   * parameters are:
   *
   * 1. _object_ - Data to send to the server
   * 2. _function_ - Callback function that must be executed when the required
   *    data has been obtained. That data should be passed into the callback
   *    as the only parameter
   * 3. _object_ - DataTables settings object for the table
   *
   * Note that this supersedes `fnServerData` from DataTables 1.9-.
   *
   *  @type string|object|function
   *  @default null
   *
   *  @dtopt Option
   *  @name DataTable.defaults.ajax
   *  @since 1.10.0
   *
   * @example
   *   // Get JSON data from a file via Ajax.
   *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
   *   $('#example').dataTable( {
   *     "ajax": "data.json"
   *   } );
   *
   * @example
   *   // Get JSON data from a file via Ajax, using `dataSrc` to change
   *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
   *   $('#example').dataTable( {
   *     "ajax": {
   *       "url": "data.json",
   *       "dataSrc": "tableData"
   *     }
   *   } );
   *
   * @example
   *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
   *   // from a plain array rather than an array in an object
   *   $('#example').dataTable( {
   *     "ajax": {
   *       "url": "data.json",
   *       "dataSrc": ""
   *     }
   *   } );
   *
   * @example
   *   // Manipulate the data returned from the server - add a link to data
   *   // (note this can, should, be done using `render` for the column - this
   *   // is just a simple example of how the data can be manipulated).
   *   $('#example').dataTable( {
   *     "ajax": {
   *       "url": "data.json",
   *       "dataSrc": function ( json ) {
   *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
   *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
   *         }
   *         return json;
   *       }
   *     }
   *   } );
   *
   * @example
   *   // Add data to the request
   *   $('#example').dataTable( {
   *     "ajax": {
   *       "url": "data.json",
   *       "data": function ( d ) {
   *         return {
   *           "extra_search": $('#extra').val()
   *         };
   *       }
   *     }
   *   } );
   *
   * @example
   *   // Send request as POST
   *   $('#example').dataTable( {
   *     "ajax": {
   *       "url": "data.json",
   *       "type": "POST"
   *     }
   *   } );
   *
   * @example
   *   // Get the data from localStorage (could interface with a form for
   *   // adding, editing and removing rows).
   *   $('#example').dataTable( {
   *     "ajax": function (data, callback, settings) {
   *       callback(
   *         JSON.parse( localStorage.getItem('dataTablesData') )
   *       );
   *     }
   *   } );
   */
  ajax: null,
  /**
   * This parameter allows you to readily specify the entries in the length drop
   * down menu that DataTables shows when pagination is enabled. It can be
   * either a 1D array of options which will be used for both the displayed
   * option and the value, or a 2D array which will use the array in the first
   * position as the value, and the array in the second position as the
   * displayed options (useful for language strings such as 'All').
   *
   * Note that the `pageLength` property will be automatically set to the
   * first value given in this array, unless `pageLength` is also provided.
   *  @type array
   *  @default [ 10, 25, 50, 100 ]
   *
   *  @dtopt Option
   *  @name DataTable.defaults.lengthMenu
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
   *      } );
   *    } );
   */
  aLengthMenu: [10, 25, 50, 100],
  /**
   * The `columns` option in the initialisation parameter allows you to define
   * details about the way individual columns behave. For a full list of
   * column options that can be set, please see
   * {@link DataTable.defaults.column}. Note that if you use `columns` to
   * define your columns, you must have an entry in the array for every single
   * column that you have in your table (these can be null if you don't which
   * to specify any options).
   *  @member
   *
   *  @name DataTable.defaults.column
   */
  aoColumns: null,
  /**
   * Very similar to `columns`, `columnDefs` allows you to target a specific
   * column, multiple columns, or all columns, using the `targets` property of
   * each object in the array. This allows great flexibility when creating
   * tables, as the `columnDefs` arrays can be of any length, targeting the
   * columns you specifically want. `columnDefs` may use any of the column
   * options available: {@link DataTable.defaults.column}, but it _must_
   * have `targets` defined in each object in the array. Values in the `targets`
   * array may be:
   *   <ul>
   *     <li>a string - class name will be matched on the TH for the column</li>
   *     <li>0 or a positive integer - column index counting from the left</li>
   *     <li>a negative integer - column index counting from the right</li>
   *     <li>the string "_all" - all columns (i.e. assign a default)</li>
   *   </ul>
   *  @member
   *
   *  @name DataTable.defaults.columnDefs
   */
  aoColumnDefs: null,
  /**
   * Basically the same as `search`, this parameter defines the individual column
   * filtering state at initialisation time. The array must be of the same size
   * as the number of columns, and each element be an object with the parameters
   * `search` and `escapeRegex` (the latter is optional). 'null' is also
   * accepted and the default will be used.
   *  @type array
   *  @default []
   *
   *  @dtopt Option
   *  @name DataTable.defaults.searchCols
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "searchCols": [
   *          null,
   *          { "search": "My filter" },
   *          null,
   *          { "search": "^[0-9]", "escapeRegex": false }
   *        ]
   *      } );
   *    } )
   */
  aoSearchCols: [],
  /**
   * An array of CSS classes that should be applied to displayed rows. This
   * array may be of any length, and DataTables will apply each class
   * sequentially, looping when required.
   *  @type array
   *  @default null <i>Will take the values determined by the `oClasses.stripe*`
   *    options</i>
   *
   *  @dtopt Option
   *  @name DataTable.defaults.stripeClasses
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
   *      } );
   *    } )
   */
  asStripeClasses: null,
  /**
   * Enable or disable automatic column width calculation. This can be disabled
   * as an optimisation (it takes some time to calculate the widths) if the
   * tables widths are passed in using `columns`.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.autoWidth
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "autoWidth": false
   *      } );
   *    } );
   */
  bAutoWidth: !0,
  /**
   * Deferred rendering can provide DataTables with a huge speed boost when you
   * are using an Ajax or JS data source for the table. This option, when set to
   * true, will cause DataTables to defer the creation of the table elements for
   * each row until they are needed for a draw - saving a significant amount of
   * time.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Features
   *  @name DataTable.defaults.deferRender
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "ajax": "sources/arrays.txt",
   *        "deferRender": true
   *      } );
   *    } );
   */
  bDeferRender: !1,
  /**
   * Replace a DataTable which matches the given selector and replace it with
   * one which has the properties of the new initialisation object passed. If no
   * table matches the selector, then the new DataTable will be constructed as
   * per normal.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Options
   *  @name DataTable.defaults.destroy
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "srollY": "200px",
   *        "paginate": false
   *      } );
   *
   *      // Some time later....
   *      $('#example').dataTable( {
   *        "filter": false,
   *        "destroy": true
   *      } );
   *    } );
   */
  bDestroy: !1,
  /**
   * Enable or disable filtering of data. Filtering in DataTables is "smart" in
   * that it allows the end user to input multiple words (space separated) and
   * will match a row containing those words, even if not in the order that was
   * specified (this allow matching across multiple columns). Note that if you
   * wish to use filtering in DataTables this must remain 'true' - to remove the
   * default filtering input box and retain filtering abilities, please use
   * {@link DataTable.defaults.dom}.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.searching
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "searching": false
   *      } );
   *    } );
   */
  bFilter: !0,
  /**
   * Enable or disable the table information display. This shows information
   * about the data that is currently visible on the page, including information
   * about filtered data if that action is being performed.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.info
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "info": false
   *      } );
   *    } );
   */
  bInfo: !0,
  /**
   * Allows the end user to select the size of a formatted page from a select
   * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.lengthChange
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "lengthChange": false
   *      } );
   *    } );
   */
  bLengthChange: !0,
  /**
   * Enable or disable pagination.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.paging
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "paging": false
   *      } );
   *    } );
   */
  bPaginate: !0,
  /**
   * Enable or disable the display of a 'processing' indicator when the table is
   * being processed (e.g. a sort). This is particularly useful for tables with
   * large amounts of data where it can take a noticeable amount of time to sort
   * the entries.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Features
   *  @name DataTable.defaults.processing
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "processing": true
   *      } );
   *    } );
   */
  bProcessing: !1,
  /**
   * Retrieve the DataTables object for the given selector. Note that if the
   * table has already been initialised, this parameter will cause DataTables
   * to simply return the object that has already been set up - it will not take
   * account of any changes you might have made to the initialisation object
   * passed to DataTables (setting this parameter to true is an acknowledgement
   * that you understand this). `destroy` can be used to reinitialise a table if
   * you need.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Options
   *  @name DataTable.defaults.retrieve
   *
   *  @example
   *    $(document).ready( function() {
   *      initTable();
   *      tableActions();
   *    } );
   *
   *    function initTable ()
   *    {
   *      return $('#example').dataTable( {
   *        "scrollY": "200px",
   *        "paginate": false,
   *        "retrieve": true
   *      } );
   *    }
   *
   *    function tableActions ()
   *    {
   *      var table = initTable();
   *      // perform API operations with oTable
   *    }
   */
  bRetrieve: !1,
  /**
   * When vertical (y) scrolling is enabled, DataTables will force the height of
   * the table's viewport to the given height at all times (useful for layout).
   * However, this can look odd when filtering data down to a small data set,
   * and the footer is left "floating" further down. This parameter (when
   * enabled) will cause DataTables to collapse the table's viewport down when
   * the result set will fit within the given Y height.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Options
   *  @name DataTable.defaults.scrollCollapse
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "scrollY": "200",
   *        "scrollCollapse": true
   *      } );
   *    } );
   */
  bScrollCollapse: !1,
  /**
   * Configure DataTables to use server-side processing. Note that the
   * `ajax` parameter must also be given in order to give DataTables a
   * source to obtain the required data for each draw.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Features
   *  @dtopt Server-side
   *  @name DataTable.defaults.serverSide
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "serverSide": true,
   *        "ajax": "xhr.php"
   *      } );
   *    } );
   */
  bServerSide: !1,
  /**
   * Enable or disable sorting of columns. Sorting of individual columns can be
   * disabled by the `sortable` option for each column.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.ordering
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "ordering": false
   *      } );
   *    } );
   */
  bSort: !0,
  /**
   * Enable or display DataTables' ability to sort multiple columns at the
   * same time (activated by shift-click by the user).
   *  @type boolean
   *  @default true
   *
   *  @dtopt Options
   *  @name DataTable.defaults.orderMulti
   *
   *  @example
   *    // Disable multiple column sorting ability
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "orderMulti": false
   *      } );
   *    } );
   */
  bSortMulti: !0,
  /**
   * Allows control over whether DataTables should use the top (true) unique
   * cell that is found for a single column, or the bottom (false - default).
   * This is useful when using complex headers.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Options
   *  @name DataTable.defaults.orderCellsTop
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "orderCellsTop": true
   *      } );
   *    } );
   */
  bSortCellsTop: !1,
  /**
   * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
   * `sorting\_3` to the columns which are currently being sorted on. This is
   * presented as a feature switch as it can increase processing time (while
   * classes are removed and added) so for large data sets you might want to
   * turn this off.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.orderClasses
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "orderClasses": false
   *      } );
   *    } );
   */
  bSortClasses: !0,
  /**
   * Enable or disable state saving. When enabled HTML5 `localStorage` will be
   * used to save table display information such as pagination information,
   * display length, filtering and sorting. As such when the end user reloads
   * the page the display display will match what thy had previously set up.
   *
   * Due to the use of `localStorage` the default state saving is not supported
   * in IE6 or 7. If state saving is required in those browsers, use
   * `stateSaveCallback` to provide a storage solution such as cookies.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Features
   *  @name DataTable.defaults.stateSave
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "stateSave": true
   *      } );
   *    } );
   */
  bStateSave: !1,
  /**
   * This function is called when a TR element is created (and all TD child
   * elements have been inserted), or registered if using a DOM source, allowing
   * manipulation of the TR element (adding classes etc).
   *  @type function
   *  @param {node} row "TR" element for the current row
   *  @param {array} data Raw data array for this row
   *  @param {int} dataIndex The index of this row in the internal aoData array
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.createdRow
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "createdRow": function( row, data, dataIndex ) {
   *          // Bold the grade for all 'A' grade browsers
   *          if ( data[4] == "A" )
   *          {
   *            $('td:eq(4)', row).html( '<b>A</b>' );
   *          }
   *        }
   *      } );
   *    } );
   */
  fnCreatedRow: null,
  /**
   * This function is called on every 'draw' event, and allows you to
   * dynamically modify any aspect you want about the created DOM.
   *  @type function
   *  @param {object} settings DataTables settings object
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.drawCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "drawCallback": function( settings ) {
   *          alert( 'DataTables has redrawn the table' );
   *        }
   *      } );
   *    } );
   */
  fnDrawCallback: null,
  /**
   * Identical to fnHeaderCallback() but for the table footer this function
   * allows you to modify the table footer on every 'draw' event.
   *  @type function
   *  @param {node} foot "TR" element for the footer
   *  @param {array} data Full table data (as derived from the original HTML)
   *  @param {int} start Index for the current display starting point in the
   *    display array
   *  @param {int} end Index for the current display ending point in the
   *    display array
   *  @param {array int} display Index array to translate the visual position
   *    to the full data array
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.footerCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "footerCallback": function( tfoot, data, start, end, display ) {
   *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
   *        }
   *      } );
   *    } )
   */
  fnFooterCallback: null,
  /**
   * When rendering large numbers in the information element for the table
   * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
   * to have a comma separator for the 'thousands' units (e.g. 1 million is
   * rendered as "1,000,000") to help readability for the end user. This
   * function will override the default method DataTables uses.
   *  @type function
   *  @member
   *  @param {int} toFormat number to be formatted
   *  @returns {string} formatted string for DataTables to show the number
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.formatNumber
   *
   *  @example
   *    // Format a number using a single quote for the separator (note that
   *    // this can also be done with the language.thousands option)
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "formatNumber": function ( toFormat ) {
   *          return toFormat.toString().replace(
   *            /\B(?=(\d{3})+(?!\d))/g, "'"
   *          );
   *        };
   *      } );
   *    } );
   */
  fnFormatNumber: function(e) {
    return e.toString().replace(
      /\B(?=(\d{3})+(?!\d))/g,
      this.oLanguage.sThousands
    );
  },
  /**
   * This function is called on every 'draw' event, and allows you to
   * dynamically modify the header row. This can be used to calculate and
   * display useful information about the table.
   *  @type function
   *  @param {node} head "TR" element for the header
   *  @param {array} data Full table data (as derived from the original HTML)
   *  @param {int} start Index for the current display starting point in the
   *    display array
   *  @param {int} end Index for the current display ending point in the
   *    display array
   *  @param {array int} display Index array to translate the visual position
   *    to the full data array
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.headerCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "fheaderCallback": function( head, data, start, end, display ) {
   *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
   *        }
   *      } );
   *    } )
   */
  fnHeaderCallback: null,
  /**
   * The information element can be used to convey information about the current
   * state of the table. Although the internationalisation options presented by
   * DataTables are quite capable of dealing with most customisations, there may
   * be times where you wish to customise the string further. This callback
   * allows you to do exactly that.
   *  @type function
   *  @param {object} oSettings DataTables settings object
   *  @param {int} start Starting position in data for the draw
   *  @param {int} end End position in data for the draw
   *  @param {int} max Total number of rows in the table (regardless of
   *    filtering)
   *  @param {int} total Total number of rows in the data set, after filtering
   *  @param {string} pre The string that DataTables has formatted using it's
   *    own rules
   *  @returns {string} The string to be displayed in the information element.
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.infoCallback
   *
   *  @example
   *    $('#example').dataTable( {
   *      "infoCallback": function( settings, start, end, max, total, pre ) {
   *        return start +" to "+ end;
   *      }
   *    } );
   */
  fnInfoCallback: null,
  /**
   * Called when the table has been initialised. Normally DataTables will
   * initialise sequentially and there will be no need for this function,
   * however, this does not hold true when using external language information
   * since that is obtained using an async XHR call.
   *  @type function
   *  @param {object} settings DataTables settings object
   *  @param {object} json The JSON object request from the server - only
   *    present if client-side Ajax sourced data is used
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.initComplete
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "initComplete": function(settings, json) {
   *          alert( 'DataTables has finished its initialisation.' );
   *        }
   *      } );
   *    } )
   */
  fnInitComplete: null,
  /**
   * Called at the very start of each table draw and can be used to cancel the
   * draw by returning false, any other return (including undefined) results in
   * the full draw occurring).
   *  @type function
   *  @param {object} settings DataTables settings object
   *  @returns {boolean} False will cancel the draw, anything else (including no
   *    return) will allow it to complete.
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.preDrawCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "preDrawCallback": function( settings ) {
   *          if ( $('#test').val() == 1 ) {
   *            return false;
   *          }
   *        }
   *      } );
   *    } );
   */
  fnPreDrawCallback: null,
  /**
   * This function allows you to 'post process' each row after it have been
   * generated for each table draw, but before it is rendered on screen. This
   * function might be used for setting the row class name etc.
   *  @type function
   *  @param {node} row "TR" element for the current row
   *  @param {array} data Raw data array for this row
   *  @param {int} displayIndex The display index for the current table draw
   *  @param {int} displayIndexFull The index of the data in the full list of
   *    rows (after filtering)
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.rowCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
   *          // Bold the grade for all 'A' grade browsers
   *          if ( data[4] == "A" ) {
   *            $('td:eq(4)', row).html( '<b>A</b>' );
   *          }
   *        }
   *      } );
   *    } );
   */
  fnRowCallback: null,
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   * This parameter allows you to override the default function which obtains
   * the data from the server so something more suitable for your application.
   * For example you could use POST data, or pull information from a Gears or
   * AIR database.
   *  @type function
   *  @member
   *  @param {string} source HTTP source to obtain the data from (`ajax`)
   *  @param {array} data A key/value pair object containing the data to send
   *    to the server
   *  @param {function} callback to be called on completion of the data get
   *    process that will draw the data on the page.
   *  @param {object} settings DataTables settings object
   *
   *  @dtopt Callbacks
   *  @dtopt Server-side
   *  @name DataTable.defaults.serverData
   *
   *  @deprecated 1.10. Please use `ajax` for this functionality now.
   */
  fnServerData: null,
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   *  It is often useful to send extra data to the server when making an Ajax
   * request - for example custom filtering information, and this callback
   * function makes it trivial to send extra information to the server. The
   * passed in parameter is the data set that has been constructed by
   * DataTables, and you can add to this or modify it as you require.
   *  @type function
   *  @param {array} data Data array (array of objects which are name/value
   *    pairs) that has been constructed by DataTables and will be sent to the
   *    server. In the case of Ajax sourced data with server-side processing
   *    this will be an empty array, for server-side processing there will be a
   *    significant number of parameters!
   *  @returns {undefined} Ensure that you modify the data array passed in,
   *    as this is passed by reference.
   *
   *  @dtopt Callbacks
   *  @dtopt Server-side
   *  @name DataTable.defaults.serverParams
   *
   *  @deprecated 1.10. Please use `ajax` for this functionality now.
   */
  fnServerParams: null,
  /**
   * Load the table state. With this function you can define from where, and how, the
   * state of a table is loaded. By default DataTables will load from `localStorage`
   * but you might wish to use a server-side database or cookies.
   *  @type function
   *  @member
   *  @param {object} settings DataTables settings object
   *  @param {object} callback Callback that can be executed when done. It
   *    should be passed the loaded state object.
   *  @return {object} The DataTables state object to be loaded
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.stateLoadCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateLoadCallback": function (settings, callback) {
   *          $.ajax( {
   *            "url": "/state_load",
   *            "dataType": "json",
   *            "success": function (json) {
   *              callback( json );
   *            }
   *          } );
   *        }
   *      } );
   *    } );
   */
  fnStateLoadCallback: function(e) {
    try {
      return JSON.parse(
        (e.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
          "DataTables_" + e.sInstance + "_" + location.pathname
        )
      );
    } catch {
      return {};
    }
  },
  /**
   * Callback which allows modification of the saved state prior to loading that state.
   * This callback is called when the table is loading state from the stored data, but
   * prior to the settings object being modified by the saved state. Note that for
   * plug-in authors, you should use the `stateLoadParams` event to load parameters for
   * a plug-in.
   *  @type function
   *  @param {object} settings DataTables settings object
   *  @param {object} data The state object that is to be loaded
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.stateLoadParams
   *
   *  @example
   *    // Remove a saved filter, so filtering is never loaded
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateLoadParams": function (settings, data) {
   *          data.oSearch.sSearch = "";
   *        }
   *      } );
   *    } );
   *
   *  @example
   *    // Disallow state loading by returning false
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateLoadParams": function (settings, data) {
   *          return false;
   *        }
   *      } );
   *    } );
   */
  fnStateLoadParams: null,
  /**
   * Callback that is called when the state has been loaded from the state saving method
   * and the DataTables settings object has been modified as a result of the loaded state.
   *  @type function
   *  @param {object} settings DataTables settings object
   *  @param {object} data The state object that was loaded
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.stateLoaded
   *
   *  @example
   *    // Show an alert with the filtering value that was saved
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateLoaded": function (settings, data) {
   *          alert( 'Saved filter was: '+data.oSearch.sSearch );
   *        }
   *      } );
   *    } );
   */
  fnStateLoaded: null,
  /**
   * Save the table state. This function allows you to define where and how the state
   * information for the table is stored By default DataTables will use `localStorage`
   * but you might wish to use a server-side database or cookies.
   *  @type function
   *  @member
   *  @param {object} settings DataTables settings object
   *  @param {object} data The state object to be saved
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.stateSaveCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateSaveCallback": function (settings, data) {
   *          // Send an Ajax request to the server with the state object
   *          $.ajax( {
   *            "url": "/state_save",
   *            "data": data,
   *            "dataType": "json",
   *            "method": "POST"
   *            "success": function () {}
   *          } );
   *        }
   *      } );
   *    } );
   */
  fnStateSaveCallback: function(e, t) {
    try {
      (e.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
        "DataTables_" + e.sInstance + "_" + location.pathname,
        JSON.stringify(t)
      );
    } catch {
    }
  },
  /**
   * Callback which allows modification of the state to be saved. Called when the table
   * has changed state a new state save is required. This method allows modification of
   * the state saving object prior to actually doing the save, including addition or
   * other state properties or modification. Note that for plug-in authors, you should
   * use the `stateSaveParams` event to save parameters for a plug-in.
   *  @type function
   *  @param {object} settings DataTables settings object
   *  @param {object} data The state object to be saved
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.stateSaveParams
   *
   *  @example
   *    // Remove a saved filter, so filtering is never saved
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateSaveParams": function (settings, data) {
   *          data.oSearch.sSearch = "";
   *        }
   *      } );
   *    } );
   */
  fnStateSaveParams: null,
  /**
   * Duration for which the saved state information is considered valid. After this period
   * has elapsed the state will be returned to the default.
   * Value is given in seconds.
   *  @type int
   *  @default 7200 <i>(2 hours)</i>
   *
   *  @dtopt Options
   *  @name DataTable.defaults.stateDuration
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateDuration": 60*60*24; // 1 day
   *      } );
   *    } )
   */
  iStateDuration: 7200,
  /**
   * When enabled DataTables will not make a request to the server for the first
   * page draw - rather it will use the data already on the page (no sorting etc
   * will be applied to it), thus saving on an XHR at load time. `deferLoading`
   * is used to indicate that deferred loading is required, but it is also used
   * to tell DataTables how many records there are in the full table (allowing
   * the information element and pagination to be displayed correctly). In the case
   * where a filtering is applied to the table on initial load, this can be
   * indicated by giving the parameter as an array, where the first element is
   * the number of records available after filtering and the second element is the
   * number of records without filtering (allowing the table information element
   * to be shown correctly).
   *  @type int | array
   *  @default null
   *
   *  @dtopt Options
   *  @name DataTable.defaults.deferLoading
   *
   *  @example
   *    // 57 records available in the table, no filtering applied
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "serverSide": true,
   *        "ajax": "scripts/server_processing.php",
   *        "deferLoading": 57
   *      } );
   *    } );
   *
   *  @example
   *    // 57 records after filtering, 100 without filtering (an initial filter applied)
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "serverSide": true,
   *        "ajax": "scripts/server_processing.php",
   *        "deferLoading": [ 57, 100 ],
   *        "search": {
   *          "search": "my_filter"
   *        }
   *      } );
   *    } );
   */
  iDeferLoading: null,
  /**
   * Number of rows to display on a single page when using pagination. If
   * feature enabled (`lengthChange`) then the end user will be able to override
   * this to a custom setting using a pop-up menu.
   *  @type int
   *  @default 10
   *
   *  @dtopt Options
   *  @name DataTable.defaults.pageLength
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "pageLength": 50
   *      } );
   *    } )
   */
  iDisplayLength: 10,
  /**
   * Define the starting point for data display when using DataTables with
   * pagination. Note that this parameter is the number of records, rather than
   * the page number, so if you have 10 records per page and want to start on
   * the third page, it should be "20".
   *  @type int
   *  @default 0
   *
   *  @dtopt Options
   *  @name DataTable.defaults.displayStart
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "displayStart": 20
   *      } );
   *    } )
   */
  iDisplayStart: 0,
  /**
   * By default DataTables allows keyboard navigation of the table (sorting, paging,
   * and filtering) by adding a `tabindex` attribute to the required elements. This
   * allows you to tab through the controls and press the enter key to activate them.
   * The tabindex is default 0, meaning that the tab follows the flow of the document.
   * You can overrule this using this parameter if you wish. Use a value of -1 to
   * disable built-in keyboard navigation.
   *  @type int
   *  @default 0
   *
   *  @dtopt Options
   *  @name DataTable.defaults.tabIndex
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "tabIndex": 1
   *      } );
   *    } );
   */
  iTabIndex: 0,
  /**
   * Classes that DataTables assigns to the various components and features
   * that it adds to the HTML table. This allows classes to be configured
   * during initialisation in addition to through the static
   * {@link DataTable.ext.oStdClasses} object).
   *  @namespace
   *  @name DataTable.defaults.classes
   */
  oClasses: {},
  /**
   * All strings that DataTables uses in the user interface that it creates
   * are defined in this object, allowing you to modified them individually or
   * completely replace them all as required.
   *  @namespace
   *  @name DataTable.defaults.language
   */
  oLanguage: {
    /**
     * Strings that are used for WAI-ARIA labels and controls only (these are not
     * actually visible on the page, but will be read by screenreaders, and thus
     * must be internationalised as well).
     *  @namespace
     *  @name DataTable.defaults.language.aria
     */
    oAria: {
      /**
       * ARIA label that is added to the table headers when the column may be
       * sorted ascending by activing the column (click or return when focused).
       * Note that the column header is prefixed to this string.
       *  @type string
       *  @default : activate to sort column ascending
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.aria.sortAscending
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "aria": {
       *            "sortAscending": " - click/return to sort ascending"
       *          }
       *        }
       *      } );
       *    } );
       */
      sSortAscending: ": activate to sort column ascending",
      /**
       * ARIA label that is added to the table headers when the column may be
       * sorted descending by activing the column (click or return when focused).
       * Note that the column header is prefixed to this string.
       *  @type string
       *  @default : activate to sort column ascending
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.aria.sortDescending
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "aria": {
       *            "sortDescending": " - click/return to sort descending"
       *          }
       *        }
       *      } );
       *    } );
       */
      sSortDescending: ": activate to sort column descending"
    },
    /**
     * Pagination string used by DataTables for the built-in pagination
     * control types.
     *  @namespace
     *  @name DataTable.defaults.language.paginate
     */
    oPaginate: {
      /**
       * Text to use when using the 'full_numbers' type of pagination for the
       * button to take the user to the first page.
       *  @type string
       *  @default First
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.paginate.first
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "paginate": {
       *            "first": "First page"
       *          }
       *        }
       *      } );
       *    } );
       */
      sFirst: "First",
      /**
       * Text to use when using the 'full_numbers' type of pagination for the
       * button to take the user to the last page.
       *  @type string
       *  @default Last
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.paginate.last
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "paginate": {
       *            "last": "Last page"
       *          }
       *        }
       *      } );
       *    } );
       */
      sLast: "Last",
      /**
       * Text to use for the 'next' pagination button (to take the user to the
       * next page).
       *  @type string
       *  @default Next
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.paginate.next
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "paginate": {
       *            "next": "Next page"
       *          }
       *        }
       *      } );
       *    } );
       */
      sNext: "Next",
      /**
       * Text to use for the 'previous' pagination button (to take the user to
       * the previous page).
       *  @type string
       *  @default Previous
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.paginate.previous
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "paginate": {
       *            "previous": "Previous page"
       *          }
       *        }
       *      } );
       *    } );
       */
      sPrevious: "Previous"
    },
    /**
     * This string is shown in preference to `zeroRecords` when the table is
     * empty of data (regardless of filtering). Note that this is an optional
     * parameter - if it is not given, the value of `zeroRecords` will be used
     * instead (either the default or given value).
     *  @type string
     *  @default No data available in table
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.emptyTable
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "emptyTable": "No data available in table"
     *        }
     *      } );
     *    } );
     */
    sEmptyTable: "No data available in table",
    /**
     * This string gives information to the end user about the information
     * that is current on display on the page. The following tokens can be
     * used in the string and will be dynamically replaced as the table
     * display updates. This tokens can be placed anywhere in the string, or
     * removed as needed by the language requires:
     *
     * * `\_START\_` - Display index of the first record on the current page
     * * `\_END\_` - Display index of the last record on the current page
     * * `\_TOTAL\_` - Number of records in the table after filtering
     * * `\_MAX\_` - Number of records in the table without filtering
     * * `\_PAGE\_` - Current page number
     * * `\_PAGES\_` - Total number of pages of data in the table
     *
     *  @type string
     *  @default Showing _START_ to _END_ of _TOTAL_ entries
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.info
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "info": "Showing page _PAGE_ of _PAGES_"
     *        }
     *      } );
     *    } );
     */
    sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
    /**
     * Display information string for when the table is empty. Typically the
     * format of this string should match `info`.
     *  @type string
     *  @default Showing 0 to 0 of 0 entries
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.infoEmpty
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "infoEmpty": "No entries to show"
     *        }
     *      } );
     *    } );
     */
    sInfoEmpty: "Showing 0 to 0 of 0 entries",
    /**
     * When a user filters the information in a table, this string is appended
     * to the information (`info`) to give an idea of how strong the filtering
     * is. The variable _MAX_ is dynamically updated.
     *  @type string
     *  @default (filtered from _MAX_ total entries)
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.infoFiltered
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "infoFiltered": " - filtering from _MAX_ records"
     *        }
     *      } );
     *    } );
     */
    sInfoFiltered: "(filtered from _MAX_ total entries)",
    /**
     * If can be useful to append extra information to the info string at times,
     * and this variable does exactly that. This information will be appended to
     * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
     * being used) at all times.
     *  @type string
     *  @default <i>Empty string</i>
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.infoPostFix
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "infoPostFix": "All records shown are derived from real information."
     *        }
     *      } );
     *    } );
     */
    sInfoPostFix: "",
    /**
     * This decimal place operator is a little different from the other
     * language options since DataTables doesn't output floating point
     * numbers, so it won't ever use this for display of a number. Rather,
     * what this parameter does is modify the sort methods of the table so
     * that numbers which are in a format which has a character other than
     * a period (`.`) as a decimal place will be sorted numerically.
     *
     * Note that numbers with different decimal places cannot be shown in
     * the same table and still be sortable, the table must be consistent.
     * However, multiple different tables on the page can use different
     * decimal place characters.
     *  @type string
     *  @default 
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.decimal
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "decimal": ","
     *          "thousands": "."
     *        }
     *      } );
     *    } );
     */
    sDecimal: "",
    /**
     * DataTables has a build in number formatter (`formatNumber`) which is
     * used to format large numbers that are used in the table information.
     * By default a comma is used, but this can be trivially changed to any
     * character you wish with this parameter.
     *  @type string
     *  @default ,
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.thousands
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "thousands": "'"
     *        }
     *      } );
     *    } );
     */
    sThousands: ",",
    /**
     * Detail the action that will be taken when the drop down menu for the
     * pagination length option is changed. The '_MENU_' variable is replaced
     * with a default select list of 10, 25, 50 and 100, and can be replaced
     * with a custom select box if required.
     *  @type string
     *  @default Show _MENU_ entries
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.lengthMenu
     *
     *  @example
     *    // Language change only
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "lengthMenu": "Display _MENU_ records"
     *        }
     *      } );
     *    } );
     *
     *  @example
     *    // Language and options change
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "lengthMenu": 'Display <select>'+
     *            '<option value="10">10</option>'+
     *            '<option value="20">20</option>'+
     *            '<option value="30">30</option>'+
     *            '<option value="40">40</option>'+
     *            '<option value="50">50</option>'+
     *            '<option value="-1">All</option>'+
     *            '</select> records'
     *        }
     *      } );
     *    } );
     */
    sLengthMenu: "Show _MENU_ entries",
    /**
     * When using Ajax sourced data and during the first draw when DataTables is
     * gathering the data, this message is shown in an empty row in the table to
     * indicate to the end user the the data is being loaded. Note that this
     * parameter is not used when loading data by server-side processing, just
     * Ajax sourced data with client-side processing.
     *  @type string
     *  @default Loading...
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.loadingRecords
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "loadingRecords": "Please wait - loading..."
     *        }
     *      } );
     *    } );
     */
    sLoadingRecords: "Loading...",
    /**
     * Text which is displayed when the table is processing a user action
     * (usually a sort command or similar).
     *  @type string
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.processing
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "processing": "DataTables is currently busy"
     *        }
     *      } );
     *    } );
     */
    sProcessing: "",
    /**
     * Details the actions that will be taken when the user types into the
     * filtering input text box. The variable "_INPUT_", if used in the string,
     * is replaced with the HTML text box for the filtering input allowing
     * control over where it appears in the string. If "_INPUT_" is not given
     * then the input box is appended to the string automatically.
     *  @type string
     *  @default Search:
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.search
     *
     *  @example
     *    // Input text box will be appended at the end automatically
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "search": "Filter records:"
     *        }
     *      } );
     *    } );
     *
     *  @example
     *    // Specify where the filter should appear
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "search": "Apply filter _INPUT_ to table"
     *        }
     *      } );
     *    } );
     */
    sSearch: "Search:",
    /**
     * Assign a `placeholder` attribute to the search `input` element
     *  @type string
     *  @default 
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.searchPlaceholder
     */
    sSearchPlaceholder: "",
    /**
     * All of the language information can be stored in a file on the
     * server-side, which DataTables will look up if this parameter is passed.
     * It must store the URL of the language file, which is in a JSON format,
     * and the object has the same properties as the oLanguage object in the
     * initialiser object (i.e. the above parameters). Please refer to one of
     * the example language files to see how this works in action.
     *  @type string
     *  @default <i>Empty string - i.e. disabled</i>
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.url
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "url": "https://www.sprymedia.co.uk/dataTables/lang.txt"
     *        }
     *      } );
     *    } );
     */
    sUrl: "",
    /**
     * Text shown inside the table records when the is no information to be
     * displayed after filtering. `emptyTable` is shown when there is simply no
     * information in the table at all (regardless of filtering).
     *  @type string
     *  @default No matching records found
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.zeroRecords
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "zeroRecords": "No records to display"
     *        }
     *      } );
     *    } );
     */
    sZeroRecords: "No matching records found"
  },
  /**
   * This parameter allows you to have define the global filtering state at
   * initialisation time. As an object the `search` parameter must be
   * defined, but all other parameters are optional. When `regex` is true,
   * the search string will be treated as a regular expression, when false
   * (default) it will be treated as a straight string. When `smart`
   * DataTables will use it's smart filtering methods (to word match at
   * any point in the data), when false this will not be done.
   *  @namespace
   *  @extends DataTable.models.oSearch
   *
   *  @dtopt Options
   *  @name DataTable.defaults.search
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "search": {"search": "Initial search"}
   *      } );
   *    } )
   */
  oSearch: k.extend({}, le.models.oSearch),
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   * By default DataTables will look for the property `data` (or `aaData` for
   * compatibility with DataTables 1.9-) when obtaining data from an Ajax
   * source or for server-side processing - this parameter allows that
   * property to be changed. You can use Javascript dotted object notation to
   * get a data source for multiple levels of nesting.
   *  @type string
   *  @default data
   *
   *  @dtopt Options
   *  @dtopt Server-side
   *  @name DataTable.defaults.ajaxDataProp
   *
   *  @deprecated 1.10. Please use `ajax` for this functionality now.
   */
  sAjaxDataProp: "data",
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   * You can instruct DataTables to load data from an external
   * source using this parameter (use aData if you want to pass data in you
   * already have). Simply provide a url a JSON object can be obtained from.
   *  @type string
   *  @default null
   *
   *  @dtopt Options
   *  @dtopt Server-side
   *  @name DataTable.defaults.ajaxSource
   *
   *  @deprecated 1.10. Please use `ajax` for this functionality now.
   */
  sAjaxSource: null,
  /**
   * This initialisation variable allows you to specify exactly where in the
   * DOM you want DataTables to inject the various controls it adds to the page
   * (for example you might want the pagination controls at the top of the
   * table). DIV elements (with or without a custom class) can also be added to
   * aid styling. The follow syntax is used:
   *   <ul>
   *     <li>The following options are allowed:
   *       <ul>
   *         <li>'l' - Length changing</li>
   *         <li>'f' - Filtering input</li>
   *         <li>'t' - The table!</li>
   *         <li>'i' - Information</li>
   *         <li>'p' - Pagination</li>
   *         <li>'r' - pRocessing</li>
   *       </ul>
   *     </li>
   *     <li>The following constants are allowed:
   *       <ul>
   *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
   *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
   *       </ul>
   *     </li>
   *     <li>The following syntax is expected:
   *       <ul>
   *         <li>'&lt;' and '&gt;' - div elements</li>
   *         <li>'&lt;"class" and '&gt;' - div with a class</li>
   *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
   *       </ul>
   *     </li>
   *     <li>Examples:
   *       <ul>
   *         <li>'&lt;"wrapper"flipt&gt;'</li>
   *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
   *       </ul>
   *     </li>
   *   </ul>
   *  @type string
   *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
   *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
   *
   *  @dtopt Options
   *  @name DataTable.defaults.dom
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
   *      } );
   *    } );
   */
  sDom: "lfrtip",
  /**
   * Search delay option. This will throttle full table searches that use the
   * DataTables provided search input element (it does not effect calls to
   * `dt-api search()`, providing a delay before the search is made.
   *  @type integer
   *  @default 0
   *
   *  @dtopt Options
   *  @name DataTable.defaults.searchDelay
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "searchDelay": 200
   *      } );
   *    } )
   */
  searchDelay: null,
  /**
   * DataTables features six different built-in options for the buttons to
   * display for pagination control:
   *
   * * `numbers` - Page number buttons only
   * * `simple` - 'Previous' and 'Next' buttons only
   * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
   * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
   * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
   * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
   *  
   * Further methods can be added using {@link DataTable.ext.oPagination}.
   *  @type string
   *  @default simple_numbers
   *
   *  @dtopt Options
   *  @name DataTable.defaults.pagingType
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "pagingType": "full_numbers"
   *      } );
   *    } )
   */
  sPaginationType: "simple_numbers",
  /**
   * Enable horizontal scrolling. When a table is too wide to fit into a
   * certain layout, or you have a large number of columns in the table, you
   * can enable x-scrolling to show the table in a viewport, which can be
   * scrolled. This property can be `true` which will allow the table to
   * scroll horizontally when needed, or any CSS unit, or a number (in which
   * case it will be treated as a pixel measurement). Setting as simply `true`
   * is recommended.
   *  @type boolean|string
   *  @default <i>blank string - i.e. disabled</i>
   *
   *  @dtopt Features
   *  @name DataTable.defaults.scrollX
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "scrollX": true,
   *        "scrollCollapse": true
   *      } );
   *    } );
   */
  sScrollX: "",
  /**
   * This property can be used to force a DataTable to use more width than it
   * might otherwise do when x-scrolling is enabled. For example if you have a
   * table which requires to be well spaced, this parameter is useful for
   * "over-sizing" the table, and thus forcing scrolling. This property can by
   * any CSS unit, or a number (in which case it will be treated as a pixel
   * measurement).
   *  @type string
   *  @default <i>blank string - i.e. disabled</i>
   *
   *  @dtopt Options
   *  @name DataTable.defaults.scrollXInner
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "scrollX": "100%",
   *        "scrollXInner": "110%"
   *      } );
   *    } );
   */
  sScrollXInner: "",
  /**
   * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
   * to the given height, and enable scrolling for any data which overflows the
   * current viewport. This can be used as an alternative to paging to display
   * a lot of data in a small area (although paging and scrolling can both be
   * enabled at the same time). This property can be any CSS unit, or a number
   * (in which case it will be treated as a pixel measurement).
   *  @type string
   *  @default <i>blank string - i.e. disabled</i>
   *
   *  @dtopt Features
   *  @name DataTable.defaults.scrollY
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "scrollY": "200px",
   *        "paginate": false
   *      } );
   *    } );
   */
  sScrollY: "",
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   * Set the HTTP method that is used to make the Ajax call for server-side
   * processing or Ajax sourced data.
   *  @type string
   *  @default GET
   *
   *  @dtopt Options
   *  @dtopt Server-side
   *  @name DataTable.defaults.serverMethod
   *
   *  @deprecated 1.10. Please use `ajax` for this functionality now.
   */
  sServerMethod: "GET",
  /**
   * DataTables makes use of renderers when displaying HTML elements for
   * a table. These renderers can be added or modified by plug-ins to
   * generate suitable mark-up for a site. For example the Bootstrap
   * integration plug-in for DataTables uses a paging button renderer to
   * display pagination buttons in the mark-up required by Bootstrap.
   *
   * For further information about the renderers available see
   * DataTable.ext.renderer
   *  @type string|object
   *  @default null
   *
   *  @name DataTable.defaults.renderer
   *
   */
  renderer: null,
  /**
   * Set the data property name that DataTables should use to get a row's id
   * to set as the `id` property in the node.
   *  @type string
   *  @default DT_RowId
   *
   *  @name DataTable.defaults.rowId
   */
  rowId: "DT_RowId"
};
Ii(le.defaults);
le.defaults.column = {
  /**
   * Define which column(s) an order will occur on for this column. This
   * allows a column's ordering to take multiple columns into account when
   * doing a sort or use the data from a different column. For example first
   * name / last name columns make sense to do a multi-column sort over the
   * two columns.
   *  @type array|int
   *  @default null <i>Takes the value of the column index automatically</i>
   *
   *  @name DataTable.defaults.column.orderData
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
   *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
   *          { "orderData": 2, "targets": [ 2 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "orderData": [ 0, 1 ] },
   *          { "orderData": [ 1, 0 ] },
   *          { "orderData": 2 },
   *          null,
   *          null
   *        ]
   *      } );
   *    } );
   */
  aDataSort: null,
  iDataSort: -1,
  /**
   * You can control the default ordering direction, and even alter the
   * behaviour of the sort handler (i.e. only allow ascending ordering etc)
   * using this parameter.
   *  @type array
   *  @default [ 'asc', 'desc' ]
   *
   *  @name DataTable.defaults.column.orderSequence
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
   *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
   *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          null,
   *          { "orderSequence": [ "asc" ] },
   *          { "orderSequence": [ "desc", "asc", "asc" ] },
   *          { "orderSequence": [ "desc" ] },
   *          null
   *        ]
   *      } );
   *    } );
   */
  asSorting: ["asc", "desc"],
  /**
   * Enable or disable filtering on the data in this column.
   *  @type boolean
   *  @default true
   *
   *  @name DataTable.defaults.column.searchable
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "searchable": false, "targets": [ 0 ] }
   *        ] } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "searchable": false },
   *          null,
   *          null,
   *          null,
   *          null
   *        ] } );
   *    } );
   */
  bSearchable: !0,
  /**
   * Enable or disable ordering on this column.
   *  @type boolean
   *  @default true
   *
   *  @name DataTable.defaults.column.orderable
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "orderable": false, "targets": [ 0 ] }
   *        ] } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "orderable": false },
   *          null,
   *          null,
   *          null,
   *          null
   *        ] } );
   *    } );
   */
  bSortable: !0,
  /**
   * Enable or disable the display of this column.
   *  @type boolean
   *  @default true
   *
   *  @name DataTable.defaults.column.visible
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "visible": false, "targets": [ 0 ] }
   *        ] } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "visible": false },
   *          null,
   *          null,
   *          null,
   *          null
   *        ] } );
   *    } );
   */
  bVisible: !0,
  /**
   * Developer definable function that is called whenever a cell is created (Ajax source,
   * etc) or processed for input (DOM source). This can be used as a compliment to mRender
   * allowing you to modify the DOM element (add background colour for example) when the
   * element is available.
   *  @type function
   *  @param {element} td The TD node that has been created
   *  @param {*} cellData The Data for the cell
   *  @param {array|object} rowData The data for the whole row
   *  @param {int} row The row index for the aoData data store
   *  @param {int} col The column index for aoColumns
   *
   *  @name DataTable.defaults.column.createdCell
   *  @dtopt Columns
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [3],
   *          "createdCell": function (td, cellData, rowData, row, col) {
   *            if ( cellData == "1.7" ) {
   *              $(td).css('color', 'blue')
   *            }
   *          }
   *        } ]
   *      });
   *    } );
   */
  fnCreatedCell: null,
  /**
   * This parameter has been replaced by `data` in DataTables to ensure naming
   * consistency. `dataProp` can still be used, as there is backwards
   * compatibility in DataTables for this option, but it is strongly
   * recommended that you use `data` in preference to `dataProp`.
   *  @name DataTable.defaults.column.dataProp
   */
  /**
   * This property can be used to read data from any data source property,
   * including deeply nested objects / properties. `data` can be given in a
   * number of different ways which effect its behaviour:
   *
   * * `integer` - treated as an array index for the data source. This is the
   *   default that DataTables uses (incrementally increased for each column).
   * * `string` - read an object property from the data source. There are
   *   three 'special' options that can be used in the string to alter how
   *   DataTables reads the data from the source object:
   *    * `.` - Dotted Javascript notation. Just as you use a `.` in
   *      Javascript to read from nested objects, so to can the options
   *      specified in `data`. For example: `browser.version` or
   *      `browser.name`. If your object parameter name contains a period, use
   *      `\\` to escape it - i.e. `first\\.name`.
   *    * `[]` - Array notation. DataTables can automatically combine data
   *      from and array source, joining the data with the characters provided
   *      between the two brackets. For example: `name[, ]` would provide a
   *      comma-space separated list from the source array. If no characters
   *      are provided between the brackets, the original array source is
   *      returned.
   *    * `()` - Function notation. Adding `()` to the end of a parameter will
   *      execute a function of the name given. For example: `browser()` for a
   *      simple function on the data source, `browser.version()` for a
   *      function in a nested property or even `browser().version` to get an
   *      object property if the function called returns an object. Note that
   *      function notation is recommended for use in `render` rather than
   *      `data` as it is much simpler to use as a renderer.
   * * `null` - use the original data source for the row rather than plucking
   *   data directly from it. This action has effects on two other
   *   initialisation options:
   *    * `defaultContent` - When null is given as the `data` option and
   *      `defaultContent` is specified for the column, the value defined by
   *      `defaultContent` will be used for the cell.
   *    * `render` - When null is used for the `data` option and the `render`
   *      option is specified for the column, the whole data source for the
   *      row is used for the renderer.
   * * `function` - the function given will be executed whenever DataTables
   *   needs to set or get the data for a cell in the column. The function
   *   takes three parameters:
   *    * Parameters:
   *      * `{array|object}` The data source for the row
   *      * `{string}` The type call data requested - this will be 'set' when
   *        setting data or 'filter', 'display', 'type', 'sort' or undefined
   *        when gathering data. Note that when `undefined` is given for the
   *        type DataTables expects to get the raw data for the object back<
   *      * `{*}` Data to set when the second parameter is 'set'.
   *    * Return:
   *      * The return value from the function is not required when 'set' is
   *        the type of call, but otherwise the return is what will be used
   *        for the data requested.
   *
   * Note that `data` is a getter and setter option. If you just require
   * formatting of data for output, you will likely want to use `render` which
   * is simply a getter and thus simpler to use.
   *
   * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
   * name change reflects the flexibility of this property and is consistent
   * with the naming of mRender. If 'mDataProp' is given, then it will still
   * be used by DataTables, as it automatically maps the old name to the new
   * if required.
   *
   *  @type string|int|function|null
   *  @default null <i>Use automatically calculated column index</i>
   *
   *  @name DataTable.defaults.column.data
   *  @dtopt Columns
   *
   *  @example
   *    // Read table data from objects
   *    // JSON structure for each row:
   *    //   {
   *    //      "engine": {value},
   *    //      "browser": {value},
   *    //      "platform": {value},
   *    //      "version": {value},
   *    //      "grade": {value}
   *    //   }
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "ajaxSource": "sources/objects.txt",
   *        "columns": [
   *          { "data": "engine" },
   *          { "data": "browser" },
   *          { "data": "platform" },
   *          { "data": "version" },
   *          { "data": "grade" }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Read information from deeply nested objects
   *    // JSON structure for each row:
   *    //   {
   *    //      "engine": {value},
   *    //      "browser": {value},
   *    //      "platform": {
   *    //         "inner": {value}
   *    //      },
   *    //      "details": [
   *    //         {value}, {value}
   *    //      ]
   *    //   }
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "ajaxSource": "sources/deep.txt",
   *        "columns": [
   *          { "data": "engine" },
   *          { "data": "browser" },
   *          { "data": "platform.inner" },
   *          { "data": "details.0" },
   *          { "data": "details.1" }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `data` as a function to provide different information for
   *    // sorting, filtering and display. In this case, currency (price)
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": function ( source, type, val ) {
   *            if (type === 'set') {
   *              source.price = val;
   *              // Store the computed display and filter values for efficiency
   *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
   *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
   *              return;
   *            }
   *            else if (type === 'display') {
   *              return source.price_display;
   *            }
   *            else if (type === 'filter') {
   *              return source.price_filter;
   *            }
   *            // 'sort', 'type' and undefined all just use the integer
   *            return source.price;
   *          }
   *        } ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using default content
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": null,
   *          "defaultContent": "Click to edit"
   *        } ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using array notation - outputting a list from an array
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": "name[, ]"
   *        } ]
   *      } );
   *    } );
   *
   */
  mData: null,
  /**
   * This property is the rendering partner to `data` and it is suggested that
   * when you want to manipulate data for display (including filtering,
   * sorting etc) without altering the underlying data for the table, use this
   * property. `render` can be considered to be the the read only companion to
   * `data` which is read / write (then as such more complex). Like `data`
   * this option can be given in a number of different ways to effect its
   * behaviour:
   *
   * * `integer` - treated as an array index for the data source. This is the
   *   default that DataTables uses (incrementally increased for each column).
   * * `string` - read an object property from the data source. There are
   *   three 'special' options that can be used in the string to alter how
   *   DataTables reads the data from the source object:
   *    * `.` - Dotted Javascript notation. Just as you use a `.` in
   *      Javascript to read from nested objects, so to can the options
   *      specified in `data`. For example: `browser.version` or
   *      `browser.name`. If your object parameter name contains a period, use
   *      `\\` to escape it - i.e. `first\\.name`.
   *    * `[]` - Array notation. DataTables can automatically combine data
   *      from and array source, joining the data with the characters provided
   *      between the two brackets. For example: `name[, ]` would provide a
   *      comma-space separated list from the source array. If no characters
   *      are provided between the brackets, the original array source is
   *      returned.
   *    * `()` - Function notation. Adding `()` to the end of a parameter will
   *      execute a function of the name given. For example: `browser()` for a
   *      simple function on the data source, `browser.version()` for a
   *      function in a nested property or even `browser().version` to get an
   *      object property if the function called returns an object.
   * * `object` - use different data for the different data types requested by
   *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
   *   of the object is the data type the property refers to and the value can
   *   defined using an integer, string or function using the same rules as
   *   `render` normally does. Note that an `_` option _must_ be specified.
   *   This is the default value to use if you haven't specified a value for
   *   the data type requested by DataTables.
   * * `function` - the function given will be executed whenever DataTables
   *   needs to set or get the data for a cell in the column. The function
   *   takes three parameters:
   *    * Parameters:
   *      * {array|object} The data source for the row (based on `data`)
   *      * {string} The type call data requested - this will be 'filter',
   *        'display', 'type' or 'sort'.
   *      * {array|object} The full data source for the row (not based on
   *        `data`)
   *    * Return:
   *      * The return value from the function is what will be used for the
   *        data requested.
   *
   *  @type string|int|function|object|null
   *  @default null Use the data source value.
   *
   *  @name DataTable.defaults.column.render
   *  @dtopt Columns
   *
   *  @example
   *    // Create a comma separated list from an array of objects
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "ajaxSource": "sources/deep.txt",
   *        "columns": [
   *          { "data": "engine" },
   *          { "data": "browser" },
   *          {
   *            "data": "platform",
   *            "render": "[, ].name"
   *          }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Execute a function to obtain data
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": null, // Use the full data source object for the renderer's source
   *          "render": "browserName()"
   *        } ]
   *      } );
   *    } );
   *
   *  @example
   *    // As an object, extracting different data for the different types
   *    // This would be used with a data source such as:
   *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
   *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
   *    // (which has both forms) is used for filtering for if a user inputs either format, while
   *    // the formatted phone number is the one that is shown in the table.
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": null, // Use the full data source object for the renderer's source
   *          "render": {
   *            "_": "phone",
   *            "filter": "phone_filter",
   *            "display": "phone_display"
   *          }
   *        } ]
   *      } );
   *    } );
   *
   *  @example
   *    // Use as a function to create a link from the data source
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": "download_link",
   *          "render": function ( data, type, full ) {
   *            return '<a href="'+data+'">Download</a>';
   *          }
   *        } ]
   *      } );
   *    } );
   */
  mRender: null,
  /**
   * Change the cell type created for the column - either TD cells or TH cells. This
   * can be useful as TH cells have semantic meaning in the table body, allowing them
   * to act as a header for a row (you may wish to add scope='row' to the TH elements).
   *  @type string
   *  @default td
   *
   *  @name DataTable.defaults.column.cellType
   *  @dtopt Columns
   *
   *  @example
   *    // Make the first column use TH cells
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "cellType": "th"
   *        } ]
   *      } );
   *    } );
   */
  sCellType: "td",
  /**
   * Class to give to each cell in this column.
   *  @type string
   *  @default <i>Empty string</i>
   *
   *  @name DataTable.defaults.column.class
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "class": "my_class", "targets": [ 0 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "class": "my_class" },
   *          null,
   *          null,
   *          null,
   *          null
   *        ]
   *      } );
   *    } );
   */
  sClass: "",
  /**
   * When DataTables calculates the column widths to assign to each column,
   * it finds the longest string in each column and then constructs a
   * temporary table and reads the widths from that. The problem with this
   * is that "mmm" is much wider then "iiii", but the latter is a longer
   * string - thus the calculation can go wrong (doing it properly and putting
   * it into an DOM object and measuring that is horribly(!) slow). Thus as
   * a "work around" we provide this option. It will append its value to the
   * text that is found to be the longest string for the column - i.e. padding.
   * Generally you shouldn't need this!
   *  @type string
   *  @default <i>Empty string<i>
   *
   *  @name DataTable.defaults.column.contentPadding
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          null,
   *          null,
   *          null,
   *          {
   *            "contentPadding": "mmm"
   *          }
   *        ]
   *      } );
   *    } );
   */
  sContentPadding: "",
  /**
   * Allows a default value to be given for a column's data, and will be used
   * whenever a null data source is encountered (this can be because `data`
   * is set to null, or because the data source itself is null).
   *  @type string
   *  @default null
   *
   *  @name DataTable.defaults.column.defaultContent
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          {
   *            "data": null,
   *            "defaultContent": "Edit",
   *            "targets": [ -1 ]
   *          }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          null,
   *          null,
   *          null,
   *          {
   *            "data": null,
   *            "defaultContent": "Edit"
   *          }
   *        ]
   *      } );
   *    } );
   */
  sDefaultContent: null,
  /**
   * This parameter is only used in DataTables' server-side processing. It can
   * be exceptionally useful to know what columns are being displayed on the
   * client side, and to map these to database fields. When defined, the names
   * also allow DataTables to reorder information from the server if it comes
   * back in an unexpected order (i.e. if you switch your columns around on the
   * client-side, your server-side code does not also need updating).
   *  @type string
   *  @default <i>Empty string</i>
   *
   *  @name DataTable.defaults.column.name
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "name": "engine", "targets": [ 0 ] },
   *          { "name": "browser", "targets": [ 1 ] },
   *          { "name": "platform", "targets": [ 2 ] },
   *          { "name": "version", "targets": [ 3 ] },
   *          { "name": "grade", "targets": [ 4 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "name": "engine" },
   *          { "name": "browser" },
   *          { "name": "platform" },
   *          { "name": "version" },
   *          { "name": "grade" }
   *        ]
   *      } );
   *    } );
   */
  sName: "",
  /**
   * Defines a data source type for the ordering which can be used to read
   * real-time information from the table (updating the internally cached
   * version) prior to ordering. This allows ordering to occur on user
   * editable elements such as form inputs.
   *  @type string
   *  @default std
   *
   *  @name DataTable.defaults.column.orderDataType
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
   *          { "type": "numeric", "targets": [ 3 ] },
   *          { "orderDataType": "dom-select", "targets": [ 4 ] },
   *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          null,
   *          null,
   *          { "orderDataType": "dom-text" },
   *          { "orderDataType": "dom-text", "type": "numeric" },
   *          { "orderDataType": "dom-select" },
   *          { "orderDataType": "dom-checkbox" }
   *        ]
   *      } );
   *    } );
   */
  sSortDataType: "std",
  /**
   * The title of this column.
   *  @type string
   *  @default null <i>Derived from the 'TH' value for this column in the
   *    original HTML table.</i>
   *
   *  @name DataTable.defaults.column.title
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "title": "My column title", "targets": [ 0 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "title": "My column title" },
   *          null,
   *          null,
   *          null,
   *          null
   *        ]
   *      } );
   *    } );
   */
  sTitle: null,
  /**
   * The type allows you to specify how the data for this column will be
   * ordered. Four types (string, numeric, date and html (which will strip
   * HTML tags before ordering)) are currently available. Note that only date
   * formats understood by Javascript's Date() object will be accepted as type
   * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
   * 'numeric', 'date' or 'html' (by default). Further types can be adding
   * through plug-ins.
   *  @type string
   *  @default null <i>Auto-detected from raw data</i>
   *
   *  @name DataTable.defaults.column.type
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "type": "html", "targets": [ 0 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "type": "html" },
   *          null,
   *          null,
   *          null,
   *          null
   *        ]
   *      } );
   *    } );
   */
  sType: null,
  /**
   * Defining the width of the column, this parameter may take any CSS value
   * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
   * been given a specific width through this interface ensuring that the table
   * remains readable.
   *  @type string
   *  @default null <i>Automatic</i>
   *
   *  @name DataTable.defaults.column.width
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "width": "20%", "targets": [ 0 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "width": "20%" },
   *          null,
   *          null,
   *          null,
   *          null
   *        ]
   *      } );
   *    } );
   */
  sWidth: null
};
Ii(le.defaults.column);
le.models.oSettings = {
  /**
   * Primary features of DataTables and their enablement state.
   *  @namespace
   */
  oFeatures: {
    /**
     * Flag to say if DataTables should automatically try to calculate the
     * optimum table and columns widths (true) or not (false).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bAutoWidth: null,
    /**
     * Delay the creation of TR and TD elements until they are actually
     * needed by a driven page draw. This can give a significant speed
     * increase for Ajax source and Javascript source data, but makes no
     * difference at all for DOM and server-side processing tables.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bDeferRender: null,
    /**
     * Enable filtering on the table or not. Note that if this is disabled
     * then there is no filtering at all on the table, including fnFilter.
     * To just remove the filtering input use sDom and remove the 'f' option.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bFilter: null,
    /**
     * Table information element (the 'Showing x of y records' div) enable
     * flag.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bInfo: null,
    /**
     * Present a user control allowing the end user to change the page size
     * when pagination is enabled.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bLengthChange: null,
    /**
     * Pagination enabled or not. Note that if this is disabled then length
     * changing must also be disabled.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bPaginate: null,
    /**
     * Processing indicator enable flag whenever DataTables is enacting a
     * user request - typically an Ajax request for server-side processing.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bProcessing: null,
    /**
     * Server-side processing enabled flag - when enabled DataTables will
     * get all data from the server for every draw - there is no filtering,
     * sorting or paging done on the client-side.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bServerSide: null,
    /**
     * Sorting enablement flag.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bSort: null,
    /**
     * Multi-column sorting
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bSortMulti: null,
    /**
     * Apply a class to the columns which are being sorted to provide a
     * visual highlight or not. This can slow things down when enabled since
     * there is a lot of DOM interaction.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bSortClasses: null,
    /**
     * State saving enablement flag.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bStateSave: null
  },
  /**
   * Scrolling settings for a table.
   *  @namespace
   */
  oScroll: {
    /**
     * When the table is shorter in height than sScrollY, collapse the
     * table container down to the height of the table (when true).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bCollapse: null,
    /**
     * Width of the scrollbar for the web-browser's platform. Calculated
     * during table initialisation.
     *  @type int
     *  @default 0
     */
    iBarWidth: 0,
    /**
     * Viewport width for horizontal scrolling. Horizontal scrolling is
     * disabled if an empty string.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     */
    sX: null,
    /**
     * Width to expand the table to when using x-scrolling. Typically you
     * should not need to use this.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     *  @deprecated
     */
    sXInner: null,
    /**
     * Viewport height for vertical scrolling. Vertical scrolling is disabled
     * if an empty string.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     */
    sY: null
  },
  /**
   * Language information for the table.
   *  @namespace
   *  @extends DataTable.defaults.oLanguage
   */
  oLanguage: {
    /**
     * Information callback function. See
     * {@link DataTable.defaults.fnInfoCallback}
     *  @type function
     *  @default null
     */
    fnInfoCallback: null
  },
  /**
   * Browser support parameters
   *  @namespace
   */
  oBrowser: {
    /**
     * Indicate if the browser incorrectly calculates width:100% inside a
     * scrolling element (IE6/7)
     *  @type boolean
     *  @default false
     */
    bScrollOversize: !1,
    /**
     * Determine if the vertical scrollbar is on the right or left of the
     * scrolling container - needed for rtl language layout, although not
     * all browsers move the scrollbar (Safari).
     *  @type boolean
     *  @default false
     */
    bScrollbarLeft: !1,
    /**
     * Flag for if `getBoundingClientRect` is fully supported or not
     *  @type boolean
     *  @default false
     */
    bBounding: !1,
    /**
     * Browser scrollbar width
     *  @type integer
     *  @default 0
     */
    barWidth: 0
  },
  ajax: null,
  /**
   * Array referencing the nodes which are used for the features. The
   * parameters of this object match what is allowed by sDom - i.e.
   *   <ul>
   *     <li>'l' - Length changing</li>
   *     <li>'f' - Filtering input</li>
   *     <li>'t' - The table!</li>
   *     <li>'i' - Information</li>
   *     <li>'p' - Pagination</li>
   *     <li>'r' - pRocessing</li>
   *   </ul>
   *  @type array
   *  @default []
   */
  aanFeatures: [],
  /**
   * Store data information - see {@link DataTable.models.oRow} for detailed
   * information.
   *  @type array
   *  @default []
   */
  aoData: [],
  /**
   * Array of indexes which are in the current display (after filtering etc)
   *  @type array
   *  @default []
   */
  aiDisplay: [],
  /**
   * Array of indexes for display - no filtering
   *  @type array
   *  @default []
   */
  aiDisplayMaster: [],
  /**
   * Map of row ids to data indexes
   *  @type object
   *  @default {}
   */
  aIds: {},
  /**
   * Store information about each column that is in use
   *  @type array
   *  @default []
   */
  aoColumns: [],
  /**
   * Store information about the table's header
   *  @type array
   *  @default []
   */
  aoHeader: [],
  /**
   * Store information about the table's footer
   *  @type array
   *  @default []
   */
  aoFooter: [],
  /**
   * Store the applied global search information in case we want to force a
   * research or compare the old search to a new one.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @namespace
   *  @extends DataTable.models.oSearch
   */
  oPreviousSearch: {},
  /**
   * Store the applied search for each column - see
   * {@link DataTable.models.oSearch} for the format that is used for the
   * filtering information for each column.
   *  @type array
   *  @default []
   */
  aoPreSearchCols: [],
  /**
   * Sorting that is applied to the table. Note that the inner arrays are
   * used in the following manner:
   * <ul>
   *   <li>Index 0 - column number</li>
   *   <li>Index 1 - current sorting direction</li>
   * </ul>
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type array
   *  @todo These inner arrays should really be objects
   */
  aaSorting: null,
  /**
   * Sorting that is always applied to the table (i.e. prefixed in front of
   * aaSorting).
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type array
   *  @default []
   */
  aaSortingFixed: [],
  /**
   * Classes to use for the striping of a table.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type array
   *  @default []
   */
  asStripeClasses: null,
  /**
   * If restoring a table - we should restore its striping classes as well
   *  @type array
   *  @default []
   */
  asDestroyStripes: [],
  /**
   * If restoring a table - we should restore its width
   *  @type int
   *  @default 0
   */
  sDestroyWidth: 0,
  /**
   * Callback functions array for every time a row is inserted (i.e. on a draw).
   *  @type array
   *  @default []
   */
  aoRowCallback: [],
  /**
   * Callback functions for the header on each draw.
   *  @type array
   *  @default []
   */
  aoHeaderCallback: [],
  /**
   * Callback function for the footer on each draw.
   *  @type array
   *  @default []
   */
  aoFooterCallback: [],
  /**
   * Array of callback functions for draw callback functions
   *  @type array
   *  @default []
   */
  aoDrawCallback: [],
  /**
   * Array of callback functions for row created function
   *  @type array
   *  @default []
   */
  aoRowCreatedCallback: [],
  /**
   * Callback functions for just before the table is redrawn. A return of
   * false will be used to cancel the draw.
   *  @type array
   *  @default []
   */
  aoPreDrawCallback: [],
  /**
   * Callback functions for when the table has been initialised.
   *  @type array
   *  @default []
   */
  aoInitComplete: [],
  /**
   * Callbacks for modifying the settings to be stored for state saving, prior to
   * saving state.
   *  @type array
   *  @default []
   */
  aoStateSaveParams: [],
  /**
   * Callbacks for modifying the settings that have been stored for state saving
   * prior to using the stored values to restore the state.
   *  @type array
   *  @default []
   */
  aoStateLoadParams: [],
  /**
   * Callbacks for operating on the settings object once the saved state has been
   * loaded
   *  @type array
   *  @default []
   */
  aoStateLoaded: [],
  /**
   * Cache the table ID for quick access
   *  @type string
   *  @default <i>Empty string</i>
   */
  sTableId: "",
  /**
   * The TABLE node for the main table
   *  @type node
   *  @default null
   */
  nTable: null,
  /**
   * Permanent ref to the thead element
   *  @type node
   *  @default null
   */
  nTHead: null,
  /**
   * Permanent ref to the tfoot element - if it exists
   *  @type node
   *  @default null
   */
  nTFoot: null,
  /**
   * Permanent ref to the tbody element
   *  @type node
   *  @default null
   */
  nTBody: null,
  /**
   * Cache the wrapper node (contains all DataTables controlled elements)
   *  @type node
   *  @default null
   */
  nTableWrapper: null,
  /**
   * Indicate if when using server-side processing the loading of data
   * should be deferred until the second draw.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type boolean
   *  @default false
   */
  bDeferLoading: !1,
  /**
   * Indicate if all required information has been read in
   *  @type boolean
   *  @default false
   */
  bInitialised: !1,
  /**
   * Information about open rows. Each object in the array has the parameters
   * 'nTr' and 'nParent'
   *  @type array
   *  @default []
   */
  aoOpenRows: [],
  /**
   * Dictate the positioning of DataTables' control elements - see
   * {@link DataTable.model.oInit.sDom}.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type string
   *  @default null
   */
  sDom: null,
  /**
   * Search delay (in mS)
   *  @type integer
   *  @default null
   */
  searchDelay: null,
  /**
   * Which type of pagination should be used.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type string
   *  @default two_button
   */
  sPaginationType: "two_button",
  /**
   * The state duration (for `stateSave`) in seconds.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type int
   *  @default 0
   */
  iStateDuration: 0,
  /**
   * Array of callback functions for state saving. Each array element is an
   * object with the following parameters:
   *   <ul>
   *     <li>function:fn - function to call. Takes two parameters, oSettings
   *       and the JSON string to save that has been thus far created. Returns
   *       a JSON string to be inserted into a json object
   *       (i.e. '"param": [ 0, 1, 2]')</li>
   *     <li>string:sName - name of callback</li>
   *   </ul>
   *  @type array
   *  @default []
   */
  aoStateSave: [],
  /**
   * Array of callback functions for state loading. Each array element is an
   * object with the following parameters:
   *   <ul>
   *     <li>function:fn - function to call. Takes two parameters, oSettings
   *       and the object stored. May return false to cancel state loading</li>
   *     <li>string:sName - name of callback</li>
   *   </ul>
   *  @type array
   *  @default []
   */
  aoStateLoad: [],
  /**
   * State that was saved. Useful for back reference
   *  @type object
   *  @default null
   */
  oSavedState: null,
  /**
   * State that was loaded. Useful for back reference
   *  @type object
   *  @default null
   */
  oLoadedState: null,
  /**
   * Source url for AJAX data for the table.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type string
   *  @default null
   */
  sAjaxSource: null,
  /**
   * Property from a given object from which to read the table data from. This
   * can be an empty string (when not server-side processing), in which case
   * it is  assumed an an array is given directly.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type string
   */
  sAjaxDataProp: null,
  /**
   * The last jQuery XHR object that was used for server-side data gathering.
   * This can be used for working with the XHR information in one of the
   * callbacks
   *  @type object
   *  @default null
   */
  jqXHR: null,
  /**
   * JSON returned from the server in the last Ajax request
   *  @type object
   *  @default undefined
   */
  json: void 0,
  /**
   * Data submitted as part of the last Ajax request
   *  @type object
   *  @default undefined
   */
  oAjaxData: void 0,
  /**
   * Function to get the server-side data.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type function
   */
  fnServerData: null,
  /**
   * Functions which are called prior to sending an Ajax request so extra
   * parameters can easily be sent to the server
   *  @type array
   *  @default []
   */
  aoServerParams: [],
  /**
   * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
   * required).
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type string
   */
  sServerMethod: null,
  /**
   * Format numbers for display.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type function
   */
  fnFormatNumber: null,
  /**
   * List of options that can be used for the user selectable length menu.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type array
   *  @default []
   */
  aLengthMenu: null,
  /**
   * Counter for the draws that the table does. Also used as a tracker for
   * server-side processing
   *  @type int
   *  @default 0
   */
  iDraw: 0,
  /**
   * Indicate if a redraw is being done - useful for Ajax
   *  @type boolean
   *  @default false
   */
  bDrawing: !1,
  /**
   * Draw index (iDraw) of the last error when parsing the returned data
   *  @type int
   *  @default -1
   */
  iDrawError: -1,
  /**
   * Paging display length
   *  @type int
   *  @default 10
   */
  _iDisplayLength: 10,
  /**
   * Paging start point - aiDisplay index
   *  @type int
   *  @default 0
   */
  _iDisplayStart: 0,
  /**
   * Server-side processing - number of records in the result set
   * (i.e. before filtering), Use fnRecordsTotal rather than
   * this property to get the value of the number of records, regardless of
   * the server-side processing setting.
   *  @type int
   *  @default 0
   *  @private
   */
  _iRecordsTotal: 0,
  /**
   * Server-side processing - number of records in the current display set
   * (i.e. after filtering). Use fnRecordsDisplay rather than
   * this property to get the value of the number of records, regardless of
   * the server-side processing setting.
   *  @type boolean
   *  @default 0
   *  @private
   */
  _iRecordsDisplay: 0,
  /**
   * The classes to use for the table
   *  @type object
   *  @default {}
   */
  oClasses: {},
  /**
   * Flag attached to the settings object so you can check in the draw
   * callback if filtering has been done in the draw. Deprecated in favour of
   * events.
   *  @type boolean
   *  @default false
   *  @deprecated
   */
  bFiltered: !1,
  /**
   * Flag attached to the settings object so you can check in the draw
   * callback if sorting has been done in the draw. Deprecated in favour of
   * events.
   *  @type boolean
   *  @default false
   *  @deprecated
   */
  bSorted: !1,
  /**
   * Indicate that if multiple rows are in the header and there is more than
   * one unique cell per column, if the top one (true) or bottom one (false)
   * should be used for sorting / title by DataTables.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type boolean
   */
  bSortCellsTop: null,
  /**
   * Initialisation object that is used for the table
   *  @type object
   *  @default null
   */
  oInit: null,
  /**
   * Destroy callback functions - for plug-ins to attach themselves to the
   * destroy so they can clean up markup and events.
   *  @type array
   *  @default []
   */
  aoDestroyCallback: [],
  /**
   * Get the number of records in the current record set, before filtering
   *  @type function
   */
  fnRecordsTotal: function() {
    return Ft(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
  },
  /**
   * Get the number of records in the current record set, after filtering
   *  @type function
   */
  fnRecordsDisplay: function() {
    return Ft(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
  },
  /**
   * Get the display end point - aiDisplay index
   *  @type function
   */
  fnDisplayEnd: function() {
    var e = this._iDisplayLength, t = this._iDisplayStart, r = t + e, n = this.aiDisplay.length, i = this.oFeatures, a = i.bPaginate;
    return i.bServerSide ? a === !1 || e === -1 ? t + n : Math.min(t + e, this._iRecordsDisplay) : !a || r > n || e === -1 ? n : r;
  },
  /**
   * The DataTables object for this table
   *  @type object
   *  @default null
   */
  oInstance: null,
  /**
   * Unique identifier for each instance of the DataTables object. If there
   * is an ID on the table node, then it takes that value, otherwise an
   * incrementing internal counter is used.
   *  @type string
   *  @default null
   */
  sInstance: null,
  /**
   * tabindex attribute value that is added to DataTables control elements, allowing
   * keyboard navigation of the table and its controls.
   */
  iTabIndex: 0,
  /**
   * DIV container for the footer scrolling table if scrolling
   */
  nScrollHead: null,
  /**
   * DIV container for the footer scrolling table if scrolling
   */
  nScrollFoot: null,
  /**
   * Last applied sort
   *  @type array
   *  @default []
   */
  aLastSort: [],
  /**
   * Stored plug-in instances
   *  @type object
   *  @default {}
   */
  oPlugins: {},
  /**
   * Function used to get a row's id from the row's data
   *  @type function
   *  @default null
   */
  rowIdFn: null,
  /**
   * Data location where to store a row's id
   *  @type string
   *  @default null
   */
  rowId: null
};
le.ext = xt = {
  /**
   * Buttons. For use with the Buttons extension for DataTables. This is
   * defined here so other extensions can define buttons regardless of load
   * order. It is _not_ used by DataTables core.
   *
   *  @type object
   *  @default {}
   */
  buttons: {},
  /**
   * Element class names
   *
   *  @type object
   *  @default {}
   */
  classes: {},
  /**
   * DataTables build type (expanded by the download builder)
   *
   *  @type string
   */
  builder: "-source-",
  /**
   * Error reporting.
   * 
   * How should DataTables report an error. Can take the value 'alert',
   * 'throw', 'none' or a function.
   *
   *  @type string|function
   *  @default alert
   */
  errMode: "alert",
  /**
   * Feature plug-ins.
   * 
   * This is an array of objects which describe the feature plug-ins that are
   * available to DataTables. These feature plug-ins are then available for
   * use through the `dom` initialisation option.
   * 
   * Each feature plug-in is described by an object which must have the
   * following properties:
   * 
   * * `fnInit` - function that is used to initialise the plug-in,
   * * `cFeature` - a character so the feature can be enabled by the `dom`
   *   instillation option. This is case sensitive.
   *
   * The `fnInit` function has the following input parameters:
   *
   * 1. `{object}` DataTables settings object: see
   *    {@link DataTable.models.oSettings}
   *
   * And the following return is expected:
   * 
   * * {node|null} The element which contains your feature. Note that the
   *   return may also be void if your plug-in does not require to inject any
   *   DOM elements into DataTables control (`dom`) - for example this might
   *   be useful when developing a plug-in which allows table control via
   *   keyboard entry
   *
   *  @type array
   *
   *  @example
   *    $.fn.dataTable.ext.features.push( {
   *      "fnInit": function( oSettings ) {
   *        return new TableTools( { "oDTSettings": oSettings } );
   *      },
   *      "cFeature": "T"
   *    } );
   */
  feature: [],
  /**
   * Row searching.
   * 
   * This method of searching is complimentary to the default type based
   * searching, and a lot more comprehensive as it allows you complete control
   * over the searching logic. Each element in this array is a function
   * (parameters described below) that is called for every row in the table,
   * and your logic decides if it should be included in the searching data set
   * or not.
   *
   * Searching functions have the following input parameters:
   *
   * 1. `{object}` DataTables settings object: see
   *    {@link DataTable.models.oSettings}
   * 2. `{array|object}` Data for the row to be processed (same as the
   *    original format that was passed in as the data source, or an array
   *    from a DOM data source
   * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
   *    can be useful to retrieve the `TR` element if you need DOM interaction.
   *
   * And the following return is expected:
   *
   * * {boolean} Include the row in the searched result set (true) or not
   *   (false)
   *
   * Note that as with the main search ability in DataTables, technically this
   * is "filtering", since it is subtractive. However, for consistency in
   * naming we call it searching here.
   *
   *  @type array
   *  @default []
   *
   *  @example
   *    // The following example shows custom search being applied to the
   *    // fourth column (i.e. the data[3] index) based on two input values
   *    // from the end-user, matching the data in a certain range.
   *    $.fn.dataTable.ext.search.push(
   *      function( settings, data, dataIndex ) {
   *        var min = document.getElementById('min').value * 1;
   *        var max = document.getElementById('max').value * 1;
   *        var version = data[3] == "-" ? 0 : data[3]*1;
   *
   *        if ( min == "" && max == "" ) {
   *          return true;
   *        }
   *        else if ( min == "" && version < max ) {
   *          return true;
   *        }
   *        else if ( min < version && "" == max ) {
   *          return true;
   *        }
   *        else if ( min < version && version < max ) {
   *          return true;
   *        }
   *        return false;
   *      }
   *    );
   */
  search: [],
  /**
   * Selector extensions
   *
   * The `selector` option can be used to extend the options available for the
   * selector modifier options (`selector-modifier` object data type) that
   * each of the three built in selector types offer (row, column and cell +
   * their plural counterparts). For example the Select extension uses this
   * mechanism to provide an option to select only rows, columns and cells
   * that have been marked as selected by the end user (`{selected: true}`),
   * which can be used in conjunction with the existing built in selector
   * options.
   *
   * Each property is an array to which functions can be pushed. The functions
   * take three attributes:
   *
   * * Settings object for the host table
   * * Options object (`selector-modifier` object type)
   * * Array of selected item indexes
   *
   * The return is an array of the resulting item indexes after the custom
   * selector has been applied.
   *
   *  @type object
   */
  selector: {
    cell: [],
    column: [],
    row: []
  },
  /**
   * Internal functions, exposed for used in plug-ins.
   * 
   * Please note that you should not need to use the internal methods for
   * anything other than a plug-in (and even then, try to avoid if possible).
   * The internal function may change between releases.
   *
   *  @type object
   *  @default {}
   */
  internal: {},
  /**
   * Legacy configuration options. Enable and disable legacy options that
   * are available in DataTables.
   *
   *  @type object
   */
  legacy: {
    /**
     * Enable / disable DataTables 1.9 compatible server-side processing
     * requests
     *
     *  @type boolean
     *  @default null
     */
    ajax: null
  },
  /**
   * Pagination plug-in methods.
   * 
   * Each entry in this object is a function and defines which buttons should
   * be shown by the pagination rendering method that is used for the table:
   * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
   * buttons are displayed in the document, while the functions here tell it
   * what buttons to display. This is done by returning an array of button
   * descriptions (what each button will do).
   *
   * Pagination types (the four built in options and any additional plug-in
   * options defined here) can be used through the `paginationType`
   * initialisation parameter.
   *
   * The functions defined take two parameters:
   *
   * 1. `{int} page` The current page index
   * 2. `{int} pages` The number of pages in the table
   *
   * Each function is expected to return an array where each element of the
   * array can be one of:
   *
   * * `first` - Jump to first page when activated
   * * `last` - Jump to last page when activated
   * * `previous` - Show previous page when activated
   * * `next` - Show next page when activated
   * * `{int}` - Show page of the index given
   * * `{array}` - A nested array containing the above elements to add a
   *   containing 'DIV' element (might be useful for styling).
   *
   * Note that DataTables v1.9- used this object slightly differently whereby
   * an object with two functions would be defined for each plug-in. That
   * ability is still supported by DataTables 1.10+ to provide backwards
   * compatibility, but this option of use is now decremented and no longer
   * documented in DataTables 1.10+.
   *
   *  @type object
   *  @default {}
   *
   *  @example
   *    // Show previous, next and current page buttons only
   *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
   *      return [ 'previous', page, 'next' ];
   *    };
   */
  pager: {},
  renderer: {
    pageButton: {},
    header: {}
  },
  /**
   * Ordering plug-ins - custom data source
   * 
   * The extension options for ordering of data available here is complimentary
   * to the default type based ordering that DataTables typically uses. It
   * allows much greater control over the the data that is being used to
   * order a column, but is necessarily therefore more complex.
   * 
   * This type of ordering is useful if you want to do ordering based on data
   * live from the DOM (for example the contents of an 'input' element) rather
   * than just the static string that DataTables knows of.
   * 
   * The way these plug-ins work is that you create an array of the values you
   * wish to be ordering for the column in question and then return that
   * array. The data in the array much be in the index order of the rows in
   * the table (not the currently ordering order!). Which order data gathering
   * function is run here depends on the `dt-init columns.orderDataType`
   * parameter that is used for the column (if any).
   *
   * The functions defined take two parameters:
   *
   * 1. `{object}` DataTables settings object: see
   *    {@link DataTable.models.oSettings}
   * 2. `{int}` Target column index
   *
   * Each function is expected to return an array:
   *
   * * `{array}` Data for the column to be ordering upon
   *
   *  @type array
   *
   *  @example
   *    // Ordering using `input` node values
   *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
   *    {
   *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
   *        return $('input', td).val();
   *      } );
   *    }
   */
  order: {},
  /**
   * Type based plug-ins.
   *
   * Each column in DataTables has a type assigned to it, either by automatic
   * detection or by direct assignment using the `type` option for the column.
   * The type of a column will effect how it is ordering and search (plug-ins
   * can also make use of the column type if required).
   *
   * @namespace
   */
  type: {
    /**
     * Type detection functions.
     *
     * The functions defined in this object are used to automatically detect
     * a column's type, making initialisation of DataTables super easy, even
     * when complex data is in the table.
     *
     * The functions defined take two parameters:
     *
        *  1. `{*}` Data from the column cell to be analysed
        *  2. `{settings}` DataTables settings object. This can be used to
        *     perform context specific type detection - for example detection
        *     based on language settings such as using a comma for a decimal
        *     place. Generally speaking the options from the settings will not
        *     be required
     *
     * Each function is expected to return:
     *
     * * `{string|null}` Data type detected, or null if unknown (and thus
     *   pass it on to the other type detection functions.
     *
     *  @type array
     *
     *  @example
     *    // Currency type detection plug-in:
     *    $.fn.dataTable.ext.type.detect.push(
     *      function ( data, settings ) {
     *        // Check the numeric part
     *        if ( ! data.substring(1).match(/[0-9]/) ) {
     *          return null;
     *        }
     *
     *        // Check prefixed by currency
     *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
     *          return 'currency';
     *        }
     *        return null;
     *      }
     *    );
     */
    detect: [],
    /**
     * Type based search formatting.
     *
     * The type based searching functions can be used to pre-format the
     * data to be search on. For example, it can be used to strip HTML
     * tags or to de-format telephone numbers for numeric only searching.
     *
     * Note that is a search is not defined for a column of a given type,
     * no search formatting will be performed.
     * 
     * Pre-processing of searching data plug-ins - When you assign the sType
     * for a column (or have it automatically detected for you by DataTables
     * or a type detection plug-in), you will typically be using this for
     * custom sorting, but it can also be used to provide custom searching
     * by allowing you to pre-processing the data and returning the data in
     * the format that should be searched upon. This is done by adding
     * functions this object with a parameter name which matches the sType
     * for that target column. This is the corollary of <i>afnSortData</i>
     * for searching data.
     *
     * The functions defined take a single parameter:
     *
        *  1. `{*}` Data from the column cell to be prepared for searching
     *
     * Each function is expected to return:
     *
     * * `{string|null}` Formatted string that will be used for the searching.
     *
     *  @type object
     *  @default {}
     *
     *  @example
     *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
     *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
     *    }
     */
    search: {},
    /**
     * Type based ordering.
     *
     * The column type tells DataTables what ordering to apply to the table
     * when a column is sorted upon. The order for each type that is defined,
     * is defined by the functions available in this object.
     *
     * Each ordering option can be described by three properties added to
     * this object:
     *
     * * `{type}-pre` - Pre-formatting function
     * * `{type}-asc` - Ascending order function
     * * `{type}-desc` - Descending order function
     *
     * All three can be used together, only `{type}-pre` or only
     * `{type}-asc` and `{type}-desc` together. It is generally recommended
     * that only `{type}-pre` is used, as this provides the optimal
     * implementation in terms of speed, although the others are provided
     * for compatibility with existing Javascript sort functions.
     *
     * `{type}-pre`: Functions defined take a single parameter:
     *
        *  1. `{*}` Data from the column cell to be prepared for ordering
     *
     * And return:
     *
     * * `{*}` Data to be sorted upon
     *
     * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
     * functions, taking two parameters:
     *
        *  1. `{*}` Data to compare to the second parameter
        *  2. `{*}` Data to compare to the first parameter
     *
     * And returning:
     *
     * * `{*}` Ordering match: <0 if first parameter should be sorted lower
     *   than the second parameter, ===0 if the two parameters are equal and
     *   >0 if the first parameter should be sorted height than the second
     *   parameter.
     * 
     *  @type object
     *  @default {}
     *
     *  @example
     *    // Numeric ordering of formatted numbers with a pre-formatter
     *    $.extend( $.fn.dataTable.ext.type.order, {
     *      "string-pre": function(x) {
     *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
     *        return parseFloat( a );
     *      }
     *    } );
     *
     *  @example
     *    // Case-sensitive string ordering, with no pre-formatting method
     *    $.extend( $.fn.dataTable.ext.order, {
     *      "string-case-asc": function(x,y) {
     *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
     *      },
     *      "string-case-desc": function(x,y) {
     *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
     *      }
     *    } );
     */
    order: {}
  },
  /**
   * Unique DataTables instance counter
   *
   * @type int
   * @private
   */
  _unique: 0,
  //
  // Depreciated
  // The following properties are retained for backwards compatibility only.
  // The should not be used in new projects and will be removed in a future
  // version
  //
  /**
   * Version check function.
   *  @type function
   *  @depreciated Since 1.10
   */
  fnVersionCheck: le.fnVersionCheck,
  /**
   * Index for what 'this' index API functions should use
   *  @type int
   *  @deprecated Since v1.10
   */
  iApiIndex: 0,
  /**
   * jQuery UI class container
   *  @type object
   *  @deprecated Since v1.10
   */
  oJUIClasses: {},
  /**
   * Software version
   *  @type string
   *  @deprecated Since v1.10
   */
  sVersion: le.version
};
k.extend(xt, {
  afnFiltering: xt.search,
  aTypes: xt.type.detect,
  ofnSearch: xt.type.search,
  oSort: xt.type.order,
  afnSortData: xt.order,
  aoFeatures: xt.feature,
  oApi: xt.internal,
  oStdClasses: xt.classes,
  oPagination: xt.pager
});
k.extend(le.ext.classes, {
  sTable: "dataTable",
  sNoFooter: "no-footer",
  /* Paging buttons */
  sPageButton: "paginate_button",
  sPageButtonActive: "current",
  sPageButtonDisabled: "disabled",
  /* Striping classes */
  sStripeOdd: "odd",
  sStripeEven: "even",
  /* Empty row */
  sRowEmpty: "dataTables_empty",
  /* Features */
  sWrapper: "dataTables_wrapper",
  sFilter: "dataTables_filter",
  sInfo: "dataTables_info",
  sPaging: "dataTables_paginate paging_",
  /* Note that the type is postfixed */
  sLength: "dataTables_length",
  sProcessing: "dataTables_processing",
  /* Sorting */
  sSortAsc: "sorting_asc",
  sSortDesc: "sorting_desc",
  sSortable: "sorting",
  /* Sortable in both directions */
  sSortableAsc: "sorting_desc_disabled",
  sSortableDesc: "sorting_asc_disabled",
  sSortableNone: "sorting_disabled",
  sSortColumn: "sorting_",
  /* Note that an int is postfixed for the sorting order */
  /* Filtering */
  sFilterInput: "",
  /* Page length */
  sLengthSelect: "",
  /* Scrolling */
  sScrollWrapper: "dataTables_scroll",
  sScrollHead: "dataTables_scrollHead",
  sScrollHeadInner: "dataTables_scrollHeadInner",
  sScrollBody: "dataTables_scrollBody",
  sScrollFoot: "dataTables_scrollFoot",
  sScrollFootInner: "dataTables_scrollFootInner",
  /* Misc */
  sHeaderTH: "",
  sFooterTH: "",
  // Deprecated
  sSortJUIAsc: "",
  sSortJUIDesc: "",
  sSortJUI: "",
  sSortJUIAscAllowed: "",
  sSortJUIDescAllowed: "",
  sSortJUIWrapper: "",
  sSortIcon: "",
  sJUIHeader: "",
  sJUIFooter: ""
});
var Bb = le.ext.pager;
function ci(e, t) {
  var r = [], n = Bb.numbers_length, i = Math.floor(n / 2);
  return t <= n ? r = jn(0, t) : e <= i ? (r = jn(0, n - 2), r.push("ellipsis"), r.push(t - 1)) : e >= t - 1 - i ? (r = jn(t - (n - 2), t), r.splice(0, 0, "ellipsis"), r.splice(0, 0, 0)) : (r = jn(e - i + 2, e + i - 1), r.push("ellipsis"), r.push(t - 1), r.splice(0, 0, "ellipsis"), r.splice(0, 0, 0)), r.DT_el = "span", r;
}
k.extend(Bb, {
  simple: function(e, t) {
    return ["previous", "next"];
  },
  full: function(e, t) {
    return ["first", "previous", "next", "last"];
  },
  numbers: function(e, t) {
    return [ci(e, t)];
  },
  simple_numbers: function(e, t) {
    return ["previous", ci(e, t), "next"];
  },
  full_numbers: function(e, t) {
    return ["first", "previous", ci(e, t), "next", "last"];
  },
  first_last_numbers: function(e, t) {
    return ["first", ci(e, t), "last"];
  },
  // For testing and plug-ins to use
  _numbers: ci,
  // Number of number buttons (including ellipsis) to show. _Must be odd!_
  numbers_length: 7
});
k.extend(!0, le.ext.renderer, {
  pageButton: {
    _: function(e, t, r, n, i, a) {
      var o = e.oClasses, s = e.oLanguage.oPaginate, l = e.oLanguage.oAria.paginate || {}, u, c, f = function(p, m) {
        var S, w, C, y, T = o.sPageButtonDisabled, R = function(W) {
          so(e, W.data.action, !0);
        };
        for (S = 0, w = m.length; S < w; S++)
          if (y = m[S], Array.isArray(y)) {
            var P = k("<" + (y.DT_el || "div") + "/>").appendTo(p);
            f(P, y);
          } else {
            var N = !1;
            switch (u = null, c = y, y) {
              case "ellipsis":
                p.append('<span class="ellipsis">&#x2026;</span>');
                break;
              case "first":
                u = s.sFirst, i === 0 && (N = !0);
                break;
              case "previous":
                u = s.sPrevious, i === 0 && (N = !0);
                break;
              case "next":
                u = s.sNext, (a === 0 || i === a - 1) && (N = !0);
                break;
              case "last":
                u = s.sLast, (a === 0 || i === a - 1) && (N = !0);
                break;
              default:
                u = e.fnFormatNumber(y + 1), c = i === y ? o.sPageButtonActive : "";
                break;
            }
            if (u !== null) {
              var L = e.oInit.pagingTag || "a";
              N && (c += " " + T), C = k("<" + L + ">", {
                class: o.sPageButton + " " + c,
                "aria-controls": e.sTableId,
                "aria-disabled": N ? "true" : null,
                "aria-label": l[y],
                role: "link",
                "aria-current": c === o.sPageButtonActive ? "page" : null,
                "data-dt-idx": y,
                tabindex: N ? -1 : e.iTabIndex,
                id: r === 0 && typeof y == "string" ? e.sTableId + "_" + y : null
              }).html(u).appendTo(p), Gf(
                C,
                { action: y },
                R
              );
            }
          }
      }, d;
      try {
        d = k(t).find(document.activeElement).data("dt-idx");
      } catch {
      }
      f(k(t).empty(), n), d !== void 0 && k(t).find("[data-dt-idx=" + d + "]").trigger("focus");
    }
  }
});
k.extend(le.ext.type.detect, [
  // Plain numbers - first since V8 detects some plain numbers as dates
  // e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
  function(e, t) {
    var r = t.oLanguage.sDecimal;
    return Ac(e, r) ? "num" + r : null;
  },
  // Dates (only those recognised by the browser's Date.parse)
  function(e, t) {
    if (e && !(e instanceof Date) && !J_.test(e))
      return null;
    var r = Date.parse(e);
    return r !== null && !isNaN(r) || jr(e) ? "date" : null;
  },
  // Formatted numbers
  function(e, t) {
    var r = t.oLanguage.sDecimal;
    return Ac(e, r, !0) ? "num-fmt" + r : null;
  },
  // HTML numeric
  function(e, t) {
    var r = t.oLanguage.sDecimal;
    return ov(e, r) ? "html-num" + r : null;
  },
  // HTML numeric, formatted
  function(e, t) {
    var r = t.oLanguage.sDecimal;
    return ov(e, r, !0) ? "html-num-fmt" + r : null;
  },
  // HTML (this is strict checking - there must be html)
  function(e, t) {
    return jr(e) || typeof e == "string" && e.indexOf("<") !== -1 ? "html" : null;
  }
]);
k.extend(le.ext.type.search, {
  html: function(e) {
    return jr(e) ? e : typeof e == "string" ? e.replace(av, " ").replace(ja, "") : "";
  },
  string: function(e) {
    return jr(e) ? e : typeof e == "string" ? e.replace(av, " ") : e;
  }
});
var fa = function(e, t, r, n) {
  if (e !== 0 && (!e || e === "-"))
    return -1 / 0;
  var i = typeof e;
  return i === "number" || i === "bigint" ? e : (t && (e = ab(e, t)), e.replace && (r && (e = e.replace(r, "")), n && (e = e.replace(n, ""))), e * 1);
};
function qc(e) {
  k.each(
    {
      // Plain numbers
      num: function(t) {
        return fa(t, e);
      },
      // Formatted numbers
      "num-fmt": function(t) {
        return fa(t, e, kc);
      },
      // HTML numeric
      "html-num": function(t) {
        return fa(t, e, ja);
      },
      // HTML numeric, formatted
      "html-num-fmt": function(t) {
        return fa(t, e, ja, kc);
      }
    },
    function(t, r) {
      xt.type.order[t + e + "-pre"] = r, t.match(/^html\-/) && (xt.type.search[t + e] = xt.type.search.html);
    }
  );
}
k.extend(xt.type.order, {
  // Dates
  "date-pre": function(e) {
    var t = Date.parse(e);
    return isNaN(t) ? -1 / 0 : t;
  },
  // html
  "html-pre": function(e) {
    return jr(e) ? "" : e.replace ? e.replace(/<.*?>/g, "").toLowerCase() : e + "";
  },
  // string
  "string-pre": function(e) {
    return jr(e) ? "" : typeof e == "string" ? e.toLowerCase() : e.toString ? e.toString() : "";
  },
  // string-asc and -desc are retained only for compatibility with the old
  // sort methods
  "string-asc": function(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
  },
  "string-desc": function(e, t) {
    return e < t ? 1 : e > t ? -1 : 0;
  }
});
qc("");
k.extend(!0, le.ext.renderer, {
  header: {
    _: function(e, t, r, n) {
      k(e.nTable).on("order.dt.DT", function(i, a, o, s) {
        if (e === a) {
          var l = r.idx;
          t.removeClass(
            n.sSortAsc + " " + n.sSortDesc
          ).addClass(
            s[l] == "asc" ? n.sSortAsc : s[l] == "desc" ? n.sSortDesc : r.sSortingClass
          );
        }
      });
    },
    jqueryui: function(e, t, r, n) {
      k("<div/>").addClass(n.sSortJUIWrapper).append(t.contents()).append(
        k("<span/>").addClass(n.sSortIcon + " " + r.sSortingClassJUI)
      ).appendTo(t), k(e.nTable).on("order.dt.DT", function(i, a, o, s) {
        if (e === a) {
          var l = r.idx;
          t.removeClass(n.sSortAsc + " " + n.sSortDesc).addClass(
            s[l] == "asc" ? n.sSortAsc : s[l] == "desc" ? n.sSortDesc : r.sSortingClass
          ), t.find("span." + n.sSortIcon).removeClass(
            n.sSortJUIAsc + " " + n.sSortJUIDesc + " " + n.sSortJUI + " " + n.sSortJUIAscAllowed + " " + n.sSortJUIDescAllowed
          ).addClass(
            s[l] == "asc" ? n.sSortJUIAsc : s[l] == "desc" ? n.sSortJUIDesc : r.sSortingClassJUI
          );
        }
      });
    }
  }
});
var ka = function(e) {
  return Array.isArray(e) && (e = e.join(",")), typeof e == "string" ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : e;
};
function fv(e, t, r, n, i) {
  return window.moment ? e[t](i) : window.luxon ? e[r](i) : n ? e[n](i) : e;
}
var dv = !1;
function Ba(e, t, r) {
  var n;
  if (window.moment) {
    if (n = window.moment.utc(e, t, r, !0), !n.isValid())
      return null;
  } else if (window.luxon) {
    if (n = t && typeof e == "string" ? window.luxon.DateTime.fromFormat(e, t) : window.luxon.DateTime.fromISO(e), !n.isValid)
      return null;
    n.setLocale(r);
  } else
    t ? (dv || alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"), dv = !0) : n = new Date(e);
  return n;
}
function ul(e) {
  return function(t, r, n, i) {
    arguments.length === 0 ? (n = "en", r = null, t = null) : arguments.length === 1 ? (n = "en", r = t, t = null) : arguments.length === 2 && (n = r, r = t, t = null);
    var a = "datetime-" + r;
    return le.ext.type.order[a] || (le.ext.type.detect.unshift(function(o) {
      return o === a ? a : !1;
    }), le.ext.type.order[a + "-asc"] = function(o, s) {
      var l = o.valueOf(), u = s.valueOf();
      return l === u ? 0 : l < u ? -1 : 1;
    }, le.ext.type.order[a + "-desc"] = function(o, s) {
      var l = o.valueOf(), u = s.valueOf();
      return l === u ? 0 : l > u ? -1 : 1;
    }), function(o, s) {
      if (o == null)
        if (i === "--now") {
          var l = /* @__PURE__ */ new Date();
          o = new Date(Date.UTC(
            l.getFullYear(),
            l.getMonth(),
            l.getDate(),
            l.getHours(),
            l.getMinutes(),
            l.getSeconds()
          ));
        } else
          o = "";
      if (s === "type")
        return a;
      if (o === "")
        return s !== "sort" ? "" : Ba("0000-01-01 00:00:00", null, n);
      if (r !== null && t === r && s !== "sort" && s !== "type" && !(o instanceof Date))
        return o;
      var u = Ba(o, t, n);
      if (u === null)
        return o;
      if (s === "sort")
        return u;
      var c = r === null ? fv(u, "toDate", "toJSDate", "")[e]() : fv(u, "format", "toFormat", "toISOString", r);
      return s === "display" ? ka(c) : c;
    };
  };
}
var Ub = ",", $b = ".";
if (window.Intl !== void 0)
  try {
    for (var fi = new Intl.NumberFormat().formatToParts(100000.1), In = 0; In < fi.length; In++)
      fi[In].type === "group" ? Ub = fi[In].value : fi[In].type === "decimal" && ($b = fi[In].value);
  } catch {
  }
le.datetime = function(e, t) {
  var r = "datetime-detect-" + e;
  t || (t = "en"), le.ext.type.order[r] || (le.ext.type.detect.unshift(function(n) {
    var i = Ba(n, e, t);
    return n === "" || i ? r : !1;
  }), le.ext.type.order[r + "-pre"] = function(n) {
    return Ba(n, e, t) || 0;
  });
};
le.render = {
  date: ul("toLocaleDateString"),
  datetime: ul("toLocaleString"),
  time: ul("toLocaleTimeString"),
  number: function(e, t, r, n, i) {
    return e == null && (e = Ub), t == null && (t = $b), {
      display: function(a) {
        if (typeof a != "number" && typeof a != "string" || a === "" || a === null)
          return a;
        var o = a < 0 ? "-" : "", s = parseFloat(a);
        if (isNaN(s))
          return ka(a);
        s = s.toFixed(r), a = Math.abs(s);
        var l = parseInt(a, 10), u = r ? t + (a - l).toFixed(r).substring(2) : "";
        return l === 0 && parseFloat(u) === 0 && (o = ""), o + (n || "") + l.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          e
        ) + u + (i || "");
      }
    };
  },
  text: function() {
    return {
      display: ka,
      filter: ka
    };
  }
};
function zb(e) {
  return function() {
    var t = [Va(this[le.ext.iApiIndex])].concat(
      Array.prototype.slice.call(arguments)
    );
    return le.ext.internal[e].apply(this, t);
  };
}
k.extend(le.ext.internal, {
  _fnExternApiFunc: zb,
  _fnBuildAjax: oo,
  _fnAjaxUpdate: vb,
  _fnAjaxParameters: gb,
  _fnAjaxUpdateDraw: mb,
  _fnAjaxDataSrc: ji,
  _fnAddColumn: Ff,
  _fnColumnOptions: qa,
  _fnAdjustColumnSizing: Ni,
  _fnVisibleToColumnIndex: Mi,
  _fnColumnIndexToVisible: Li,
  _fnVisbleColumns: ri,
  _fnGetColumns: ro,
  _fnColumnTypes: jf,
  _fnApplyColumnDefs: fb,
  _fnHungarianMap: Ii,
  _fnCamelToHungarian: Br,
  _fnLanguageCompat: Ic,
  _fnBrowserDetect: cb,
  _fnAddData: ln,
  _fnAddTr: no,
  _fnNodeToDataIndex: rT,
  _fnNodeToColumnIndex: nT,
  _fnGetCellData: rr,
  _fnSetCellData: db,
  _fnSplitObjNotation: Nc,
  _fnGetObjectDataFn: $n,
  _fnSetObjectDataFn: Zr,
  _fnGetDataMaster: Mc,
  _fnClearTable: io,
  _fnDeleteIndex: Ra,
  _fnInvalidate: Fi,
  _fnGetRowElements: qf,
  _fnCreateTr: Wf,
  _fnBuildHead: pb,
  _fnDrawHead: _i,
  _fnDraw: un,
  _fnReDraw: wn,
  _fnAddOptionsHtml: hb,
  _fnDetectHeader: Ti,
  _fnGetUniqueThs: ao,
  _fnFeatureHtmlFilter: yb,
  _fnFilterComplete: qi,
  _fnFilterCustom: bb,
  _fnFilterColumn: wb,
  _fnFilter: Sb,
  _fnFilterCreateSearch: Vf,
  _fnEscapeRegex: Bf,
  _fnFilterData: xb,
  _fnFeatureHtmlInfo: Cb,
  _fnUpdateInfo: _b,
  _fnInfoMacros: Tb,
  _fnInitialise: yi,
  _fnInitComplete: Wa,
  _fnLengthChange: Uf,
  _fnFeatureHtmlLength: Pb,
  _fnFeatureHtmlPaginate: Db,
  _fnPageChange: so,
  _fnFeatureHtmlProcessing: Eb,
  _fnProcessingDisplay: lr,
  _fnFeatureHtmlTable: Rb,
  _fnScrollDraw: lo,
  _fnApplyToChildren: Or,
  _fnCalculateColumnWidths: $f,
  _fnThrottle: zf,
  _fnConvertToWidth: Ob,
  _fnGetWidestNode: kb,
  _fnGetMaxLenString: Ab,
  _fnStringToCss: yt,
  _fnSortFlatten: ni,
  _fnSort: Ib,
  _fnSortAria: Nb,
  _fnSortListener: Lc,
  _fnSortAttachListener: Yf,
  _fnSortingClasses: Ha,
  _fnSortData: Mb,
  _fnSaveState: Wi,
  _fnLoadState: Lb,
  _fnImplementState: Fc,
  _fnSettingsFromNode: Va,
  _fnLog: yr,
  _fnMap: _r,
  _fnBindAction: Gf,
  _fnCallbackReg: Bt,
  _fnCallbackFire: ot,
  _fnLengthOverflow: Xf,
  _fnRenderer: Kf,
  _fnDataSource: Ft,
  _fnRowAttributes: Hf,
  _fnExtend: jc,
  _fnCalculateEnd: function() {
  }
  // Used by a lot of plug-ins, but redundant
  // in 1.10, so this dead-end function is
  // added to prevent errors
});
k.fn.dataTable = le;
le.$ = k;
k.fn.dataTableSettings = le.settings;
k.fn.dataTableExt = le.ext;
k.fn.DataTable = function(e) {
  return k(this).dataTable(e).api();
};
k.each(le, function(e, t) {
  k.fn.DataTable[e] = t;
});
/*! DataTables Bootstrap 3 integration
 * ©2011-2015 SpryMedia Ltd - datatables.net/license
 */
let Jr = Re;
Jr.extend(!0, le.defaults, {
  dom: "<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
  renderer: "bootstrap"
});
Jr.extend(le.ext.classes, {
  sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
  sFilterInput: "form-control input-sm",
  sLengthSelect: "form-control input-sm",
  sProcessing: "dataTables_processing panel panel-default"
});
le.ext.renderer.pageButton.bootstrap = function(e, t, r, n, i, a) {
  var o = new le.Api(e), s = e.oClasses, l = e.oLanguage.oPaginate, u = e.oLanguage.oAria.paginate || {}, c, f, d = function(m, S) {
    var w, C, y, T, R = function(N) {
      N.preventDefault(), !Jr(N.currentTarget).hasClass("disabled") && o.page() != N.data.action && o.page(N.data.action).draw("page");
    };
    for (w = 0, C = S.length; w < C; w++)
      if (T = S[w], Array.isArray(T))
        d(m, T);
      else {
        switch (c = "", f = "", T) {
          case "ellipsis":
            c = "&#x2026;", f = "disabled";
            break;
          case "first":
            c = l.sFirst, f = T + (i > 0 ? "" : " disabled");
            break;
          case "previous":
            c = l.sPrevious, f = T + (i > 0 ? "" : " disabled");
            break;
          case "next":
            c = l.sNext, f = T + (i < a - 1 ? "" : " disabled");
            break;
          case "last":
            c = l.sLast, f = T + (i < a - 1 ? "" : " disabled");
            break;
          default:
            c = T + 1, f = i === T ? "active" : "";
            break;
        }
        if (c) {
          var P = f.indexOf("disabled") !== -1;
          y = Jr("<li>", {
            class: s.sPageButton + " " + f,
            id: r === 0 && typeof T == "string" ? e.sTableId + "_" + T : null
          }).append(
            Jr("<a>", {
              href: P ? null : "#",
              "aria-controls": e.sTableId,
              "aria-disabled": P ? "true" : null,
              "aria-label": u[T],
              role: "link",
              "aria-current": f === "active" ? "page" : null,
              "data-dt-idx": T,
              tabindex: P ? -1 : e.iTabIndex
            }).html(c)
          ).appendTo(m), e.oApi._fnBindAction(
            y,
            { action: T },
            R
          );
        }
      }
  }, p;
  try {
    p = Jr(t).find(document.activeElement).data("dt-idx");
  } catch {
  }
  d(
    Jr(t).empty().html('<ul class="pagination"/>').children("ul"),
    n
  ), p !== void 0 && Jr(t).find("[data-dt-idx=" + p + "]").trigger("focus");
};
Re.DataTable = le;
const gT = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), mT = {
  decimal: "",
  emptyTable: "No data available in table",
  info: "Showing _START_ to _END_ of _TOTAL_ entries",
  infoEmpty: "Showing 0 to 0 of 0 entries",
  infoFiltered: "(filtered from _MAX_ total entries)",
  infoPostFix: "",
  thousands: ",",
  lengthMenu: "Show _MENU_ entries",
  loadingRecords: "Loading...",
  processing: "Processing...",
  search: "Search:",
  zeroRecords: "No matching records found",
  paginate: {
    first: "First",
    last: "Last",
    next: "Next",
    previous: "Previous"
  },
  aria: {
    sortAscending: ": activate to sort column ascending",
    sortDescending: ": activate to sort column descending"
  },
  select: {
    cells: {
      _: "Selected %d cells",
      0: "Click a cell to select it",
      1: "1 row selected"
    },
    rows: {
      _: "%d rows selected",
      0: "Click a row to select it",
      1: "1 row selected"
    }
  }
};
class yT extends Ue {
  constructor(r) {
    super(r);
    oe(this, "state", {
      options: null,
      page: 0,
      domNode: void 0,
      order: void 0
    });
    oe(this, "order");
    oe(this, "controlled");
    oe(this, "main", null);
    oe(this, "api");
    oe(this, "disableRowSelectEvent", !1);
    const {
      options: n,
      totalElements: i,
      hasMore: a,
      order: o
    } = r;
    if (this.controlled = typeof i == "number" || a, !this.controlled)
      this.state.options = { order: this.orderToInternal(o), ...n };
    else {
      const {
        paging: s,
        info: l,
        pageLength: u,
        ...c
      } = n;
      this.state.options = {
        paging: !1,
        info: !1,
        order: this.orderToInternal(o),
        ...c
      };
    }
    this.state.domNode = this.createDomObject(), this.setActivePage = this.setActivePage.bind(this), this.orderToExternal = this.orderToExternal.bind(this);
  }
  componentDidMount() {
    const {
      ajaxMap: r,
      ajaxResponseMap: n
    } = this.props;
    r && Re(this.main).on("preXhr.dt", r), n && Re(this.main).on("xhr.dt", n), this.initializeDatatables();
  }
  shouldComponentUpdate({
    data: r,
    selectedRows: n,
    footer: i,
    options: a,
    page: o,
    order: s,
    totalElements: l,
    hasMore: u,
    searchValue: c
  }, { order: f }) {
    const {
      data: d,
      selectedRows: p,
      footer: m,
      options: S,
      order: w,
      totalElements: C,
      hasMore: y,
      searchValue: T
    } = this.props, { page: R, order: P } = this.state;
    return r !== d || !Nr(n, p) || i !== m || JSON.stringify(a) !== JSON.stringify(S) || JSON.stringify(s) !== JSON.stringify(w) || JSON.stringify(f) !== JSON.stringify(P) || o !== R || l !== C || u !== y || c !== T;
  }
  componentDidUpdate({
    data: r,
    footer: n,
    selectedRows: i,
    order: a,
    hasMore: o,
    totalElements: s,
    searchValue: l
  }) {
    const {
      onClickEvents: u,
      footer: c,
      order: f,
      hasMore: d,
      totalElements: p,
      options: m,
      searchValue: S
    } = this.props, { api: w, main: C } = this;
    if (c !== n) {
      const N = Re(this.main);
      if (c) {
        const L = N.find("thead > tr");
        N.append(Re("<tfoot />").append(L.clone()));
      } else
        N.find("tfoot").remove();
    }
    let y = !1;
    const T = [];
    Re(".selected", C).each(function() {
      T.push(this.id);
    });
    const { data: R } = this.props, P = !Nr(r, R);
    if (P) {
      const N = w.page();
      w.clear(), R && w.rows.add(R), this.setActivePage(N, !0), y = !0;
    }
    if (this.selectRows(P, i), JSON.stringify(f) !== JSON.stringify(a) && w.order(this.orderToInternal(f)), (o === void 0 || d === void 0 || o === null || d === void 0) && o !== d || s !== p)
      if (this.controlled = !!p || d, !this.controlled)
        this.setState({ options: { order: this.orderToInternal(f), ...m } });
      else {
        const {
          paging: N,
          info: L,
          pageLength: W,
          ...Y
        } = m;
        this.setState({
          options: {
            paging: !1,
            info: !1,
            order: this.orderToInternal(f),
            ...Y
          }
        });
      }
    l !== S && (w.search(S), y = !0), y && w.draw(), y && P && u && this.bindOnClickEvents(u, w);
  }
  componentWillUnmount() {
    this.destroyDatatables();
  }
  setActivePage(r, n) {
    const { api: i } = this;
    i.page(r), n || i.draw(!1);
  }
  selectRows(r, n) {
    const { api: i } = this;
    let { selectedRows: a } = this.props;
    const { options: { rowId: o = "id" } } = this.props;
    if (a && (a = typeof a != "string" && a.length ? a : [a], r || !Nr(a, n))) {
      i.rows({ selected: !0 }).deselect();
      const s = [];
      i.rows().every(function() {
        const c = this.data()[o];
        a.indexOf(c) >= 0 && s.push(this.node());
      }), this.disableRowSelectEvent = !0, i.rows(s).select(), this.disableRowSelectEvent = !1;
    }
  }
  initializeDatatables() {
    const {
      data: r,
      columns: n,
      setDataTableRef: i,
      onSelect: a,
      onDeselect: o,
      onClickEvents: s,
      onOrderChange: l,
      onPageChange: u,
      searchValue: c,
      onSearchChange: f
    } = this.props, { options: d } = this.state, p = (d && d.columns || n).map((C) => {
      if (C.render) {
        const { render: y, ...T } = C;
        return { render: (...P) => {
          const N = y(...P);
          return pe.isValidElement(N) ? __.renderToString(N) : N;
        }, ...T };
      }
      return C;
    });
    let m;
    c && (m = { search: c });
    const S = Re(this.main).dataTable({
      data: r,
      columns: p,
      search: m,
      ...d
    }).api();
    let w = !1;
    this.api = S, this.selectRows(), i && i(S), a && S.on("select", (C, y) => {
      if (!this.disableRowSelectEvent) {
        const T = y.data();
        a(T);
      }
    }), o && S.on("deselect", (C, y) => {
      const T = y.data();
      o(T);
    }), S.on("page.dt", () => {
      this.setActivePage(S.page());
    }), u && S.on("page.dt", () => {
      u(S.page());
    }), l && S.on("order.dt", (C, { aaSorting: y }) => {
      if (w) {
        const { order: T } = this;
        Nr(y, T) || (this.order = JSON.parse(JSON.stringify(y.slice(0))), l(this.orderToExternal(y)));
      }
    }), f && S.on("search.dt", () => {
      w && f(S.search());
    }), s && (this.bindOnClickEvents(s, S), S.on("page.dt", () => {
      this.bindOnClickEvents(s, S);
    })), w = !0;
  }
  orderToExternal(r) {
    const {
      columns: n
    } = this.props, { options: i } = this.state, a = i && i.columns || n;
    return r.map((o) => ({ index: o[0], column: a[o[0]].data, direction: o[1] }));
  }
  orderToInternal(r) {
    const {
      columns: n
    } = this.props, { options: i } = this.state, a = (i && i.columns || n).map((o) => o.data);
    return r ? r.map((o) => [o.index || a.indexOf(o.column), o.direction || "asc"]) : void 0;
  }
  destroyDatatables() {
    Re(this.main).dataTable().api().destroy(!0);
  }
  createDomObject() {
    const {
      border: r,
      hover: n,
      condensed: i,
      columns: a,
      footer: o,
      options: s,
      id: l
    } = this.props, c = (s && s.columns || a).map((d) => /* @__PURE__ */ _(
      "th",
      {
        style: { width: d.width ? d.width : null },
        children: d.title
      },
      cr()
    )), f = [
      "table",
      n ? "table-hover" : null,
      r ? "table-bordered" : null,
      i ? "table-condensed" : null,
      "responsive",
      "nowrap"
    ].join(" ");
    return /* @__PURE__ */ ie("table", { id: l, ref: (d) => {
      this.main = d;
    }, className: f, width: "100%", children: [
      /* @__PURE__ */ _("thead", { children: /* @__PURE__ */ _("tr", { children: c }) }),
      o && /* @__PURE__ */ _("tfoot", { children: /* @__PURE__ */ _("tr", { children: c }) })
    ] });
  }
  bindOnClickEvents(r, n) {
    Object.entries(r).forEach(([i, a]) => {
      Re(`tbody .${gT(i)}`, this.main).each(function() {
        const s = n.cell(Re(this).parents("td")), l = s.data(), u = s.row(Re(this).parents("tr")), c = u.index(), f = u.data();
        Re(this).on("click", () => a(l, c, f));
      });
    });
  }
  renderPagination() {
    const {
      options: r,
      page: n,
      totalElements: i,
      onPageChange: a,
      hasMore: o,
      pageSize: s,
      selectedRows: l
    } = this.props, u = n || 0, { paging: c, info: f, select: d } = r, p = r.language || mT, m = l && (l.length || 1) || 0, S = s || 0, w = m > 0, {
      paginate: {
        first: C,
        last: y,
        next: T,
        previous: R
      },
      info: P,
      infoEmpty: N,
      select: {
        rows: L
      }
    } = p;
    let W;
    i && (i > 0 ? W = P.replace("_START_", 1 + S * u).replace("_END_", Math.min(S * u + S, i)).replace("_TOTAL_", i) : W = N);
    let Y;
    return w ? typeof L != "string" ? m === 1 ? Y = L[1] : Y = L._.replace("%d", m) : Y = L.replace("%d", m.toString()) : Y = L && L.length && L.length > 0 && L[0] || "", /* @__PURE__ */ ie(KS, { children: [
      /* @__PURE__ */ _(_c, { sm: 5, children: d && f !== !1 && /* @__PURE__ */ ie("div", { className: "dataTables_info", role: "status", "aria-live": "polite", children: [
        W,
        /* @__PURE__ */ _("span", { className: "select-info", children: /* @__PURE__ */ _("span", { className: "select-item", children: Y }) })
      ] }) }),
      c !== !1 && /* @__PURE__ */ _(_c, { sm: 7, children: /* @__PURE__ */ _(
        Lf,
        {
          activePage: u,
          totalElements: i,
          pageSize: S,
          onChange: a,
          hasMore: o,
          labels: {
            first: C,
            last: y,
            next: T,
            previous: R
          }
        }
      ) })
    ] });
  }
  render() {
    const { domNode: r } = this.state;
    return /* @__PURE__ */ ie("div", { className: "datatable-controlled-elems", children: [
      r,
      this.controlled && this.renderPagination()
    ] });
  }
}
oe(yT, "defaultProps", {
  id: void 0,
  ajaxMap: null,
  ajaxResponseMap: null,
  data: null,
  columns: null,
  setDataTableRef: null,
  onSelect: null,
  onDeselect: null,
  footer: !1,
  hover: !0,
  border: !1,
  condensed: !1,
  selectedRows: null,
  onClickEvents: null,
  page: null,
  totalElements: null,
  pageSize: null,
  onPageChange: null,
  onOrderChange: null,
  hasMore: void 0,
  order: void 0,
  onSearchChange: void 0,
  searchValue: void 0
});
const Yb = ({ title: e, titleLeft: t, icon: r }) => {
  const n = !!r, i = n ? Lt(r) : null, a = !!e;
  return n || a ? /* @__PURE__ */ ie("li", { className: `header${t ? " pull-left" : ""}`, children: [
    n && /* @__PURE__ */ _(Xe, { icon: i }),
    a ? ` ${e}` : ""
  ] }) : /* @__PURE__ */ _(Qt, {});
};
Yb.defaultProps = {
  icon: void 0,
  title: void 0,
  titleLeft: !1
};
const bT = ({ eventKey: e, children: t }) => /* @__PURE__ */ _(JS, { eventKey: e, children: t });
class wT extends Ue {
  constructor(t) {
    super(t);
    const { activeKey: r, defaultActiveKey: n } = t;
    this.state = { stateActiveKey: r || n }, this.onSelect = this.onSelect.bind(this);
  }
  onSelect(t) {
    const { stateActiveKey: r } = this.state, { onSelect: n } = this.props;
    r !== t && (this.setState({ stateActiveKey: t }), n && n(t));
  }
  render() {
    const {
      children: t,
      pullRight: r = !1,
      contentHeight: n,
      mountOnEnter: i = !1,
      unmountOnExit: a = !1,
      id: o = cr(),
      icon: s,
      title: l,
      titleLeft: u = !1,
      activeKey: c,
      onChange: f
    } = this.props, { stateActiveKey: d } = this.state, p = t && t.length ? t : [t];
    return /* @__PURE__ */ _(
      ZS,
      {
        id: o,
        activeKey: c || d,
        onSelect: this.onSelect,
        onChange: f,
        children: /* @__PURE__ */ ie("div", { className: "nav-tabs-custom", children: [
          /* @__PURE__ */ ie(QS, { bsStyle: "tabs", role: "tablist", pullRight: r, bsClass: "nav", children: [
            p.filter((m) => m.type === bT).map((m) => /* @__PURE__ */ _(
              ex,
              {
                eventKey: m.props.eventKey,
                children: m.props.title
              },
              m.props.eventKey
            )),
            /* @__PURE__ */ _(Yb, { icon: s, title: l, titleLeft: u })
          ] }),
          /* @__PURE__ */ _(
            tx,
            {
              bsClass: "tab",
              animation: !1,
              mountOnEnter: i,
              unmountOnExit: a,
              componentClass: "div",
              style: { height: n || "auto" },
              children: t
            }
          )
        ] })
      }
    );
  }
}
oe(wT, "defaultProps", {
  activeKey: null,
  defaultActiveKey: null,
  onSelect: null,
  pullRight: !1,
  contentHeight: null,
  mountOnEnter: !1,
  unmountOnExit: !1,
  id: cr(),
  icon: null,
  title: null,
  titleLeft: !1,
  onChange: void 0
});
const ST = ({ id: e, horizontal: t, children: r }) => /* @__PURE__ */ _("dl", { id: e, className: t ? "dl-horizontal" : "", children: r });
ST.defaultProps = {
  id: void 0,
  horizontal: !1
};
const xT = ({ text: e, label: t, noText: r }) => /* @__PURE__ */ ie(Qt, { children: [
  /* @__PURE__ */ _("dt", { style: r || !e ? { textAlign: "center", width: "100%" } : {}, children: t }),
  r ? null : /* @__PURE__ */ _("dd", { children: e })
] });
xT.defaultProps = {
  text: null,
  label: null,
  noText: !1
};
const CT = ({ pullRight: e, children: t }) => /* @__PURE__ */ _("div", { className: `margin${e ? " pull-right" : ""}`, children: t });
CT.defaultProps = {
  pullRight: !1
};
class Gb extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "main", null);
  }
  componentDidMount() {
    const { color: r, height: n = 30 } = this.props;
    Re(this.main).sparkline("html", {
      type: "bar",
      height: n,
      barColor: r
    });
  }
  render() {
    const { data: r, padding: n } = this.props, i = [
      "sparkpad",
      n ? "pad" : ""
    ].join(" ");
    return /* @__PURE__ */ _("div", { className: i, ref: (a) => {
      this.main = a;
    }, children: r.join(",") });
  }
}
oe(Gb, "defaultProps", {
  height: 30,
  padding: !1
});
const _T = ({
  header: e,
  text: t,
  chartData: r,
  color: n
}) => /* @__PURE__ */ ie("div", { className: "description-block margin-bottom", children: [
  /* @__PURE__ */ _(Gb, { padding: !0, color: `${n || "#fff"}`, data: r }),
  /* @__PURE__ */ _("h5", { className: "description-header", children: e }),
  /* @__PURE__ */ _("span", { className: "description-text", children: t })
] });
_T.defaultProps = {
  header: void 0,
  text: void 0,
  color: void 0
};
class TT extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "activeUsers", {
      one: {
        name: "Alexander Pierce",
        image: "img/user1-128x128.jpg",
        side: "left"
      },
      two: {
        name: "Sarah Bullock",
        image: "img/user3-128x128.jpg",
        side: "right"
      }
    });
    oe(this, "messages", [{
      message: "Is this template really for free? That's unbelievable!",
      timestamp: "23 Jan 2:00 pm",
      user: "one"
    }, {
      message: "You better believe it!",
      timestamp: "23 Jan 2:05 pm",
      user: "two"
    }, {
      message: "Working with AdminLTE on a great new app! Wanna join?",
      timestamp: "23 Jan 5:37 pm",
      user: "one"
    }, {
      message: "I would love to.",
      timestamp: "23 Jan 6:10 pm",
      user: "two"
    }]);
    oe(this, "contacts", [
      {
        name: "Count Dracula",
        image: "img/user1-128x128.jpg",
        lastTimestamp: "2/28/2015",
        lastMessage: "How have you been? I was..."
      },
      {
        name: "Sarah Doe",
        image: "img/user7-128x128.jpg",
        lastTimestamp: "2/23/2015",
        lastMessage: "How have you been? I was..."
      },
      {
        name: "Nadia Jolie",
        image: "img/user3-128x128.jpg",
        lastTimestamp: "2/20/2015",
        lastMessage: "Ill call you back at..."
      },
      {
        name: "Nora S. Vans",
        image: "img/user5-128x128.jpg",
        lastTimestamp: "2/10/2015",
        lastMessage: "Where is your new..."
      },
      {
        name: "John K.",
        image: "img/user6-128x128.jpg",
        lastTimestamp: "1/27/2015",
        lastMessage: "Can I take a look at..."
      },
      {
        name: "Kenneth M.",
        image: "img/user8-128x128.jpg",
        lastTimestamp: "1/4/2015",
        lastMessage: "Never mind I found..."
      }
    ]);
  }
  /* eslint-disable-next-line class-methods-use-this */
  getMessage({ message: r, timestamp: n, user: i }, a) {
    const { name: o, image: s, side: l } = a[i], u = l === "right" ? "left" : "right";
    return /* @__PURE__ */ ie("div", { className: `direct-chat-msg${l === "right" ? " right" : ""}`, children: [
      /* @__PURE__ */ ie("div", { className: "direct-chat-info clearfix", children: [
        /* @__PURE__ */ _("span", { className: `direct-chat-name pull-${l}`, children: o }),
        /* @__PURE__ */ _("span", { className: `direct-chat-timestamp pull-${u}`, children: n })
      ] }),
      /* @__PURE__ */ _("img", { className: "direct-chat-img", src: s, alt: "message user" }),
      /* @__PURE__ */ _("div", { className: "direct-chat-text", children: r })
    ] }, cr());
  }
  getMessages() {
    return /* @__PURE__ */ _("div", { className: "direct-chat-messages", children: this.messages.map((r) => this.getMessage(r, this.activeUsers)) });
  }
  getFooter() {
    const { type: r } = this.props;
    return /* @__PURE__ */ _("form", { action: "#", method: "post", children: /* @__PURE__ */ ie("div", { className: "input-group", children: [
      /* @__PURE__ */ _("input", { type: "text", name: "message", placeholder: "Type Message ...", className: "form-control" }),
      /* @__PURE__ */ _("span", { className: "input-group-btn", children: /* @__PURE__ */ _("button", { type: "button", className: `btn btn-${r} btn-flat`, children: "Send" }) })
    ] }) });
  }
  getBadge() {
    const { badgeColor: r = "yellow" } = this.props;
    return /* @__PURE__ */ _("span", { "data-toggle": "tooltip", title: "3 New Messages", className: `badge bg-${r}`, children: "3" });
  }
  getContactsToggle() {
    const { contactsTitle: r = "Contacts" } = this.props;
    return /* @__PURE__ */ _(
      "button",
      {
        type: "button",
        className: "btn btn-box-tool",
        "data-toggle": "tooltip",
        title: r,
        "data-widget": "chat-pane-toggle",
        children: /* @__PURE__ */ _("i", { className: "fa fa-comments" })
      }
    );
  }
  /* eslint-disable-next-line class-methods-use-this */
  getContact({
    name: r,
    image: n,
    lastTimestamp: i,
    lastMessage: a,
    to: o
  }) {
    return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ ie("a", { href: o, children: [
      /* @__PURE__ */ _("img", { className: "contacts-list-img", src: n, alt: "User" }),
      /* @__PURE__ */ ie("div", { className: "contacts-list-info", children: [
        /* @__PURE__ */ ie("span", { className: "contacts-list-name", children: [
          r,
          /* @__PURE__ */ _("small", { className: "contacts-list-date pull-right", children: i })
        ] }),
        /* @__PURE__ */ _("span", { className: "contacts-list-msg", children: a })
      ] })
    ] }) }, cr());
  }
  getContacts() {
    return /* @__PURE__ */ _("div", { className: "direct-chat-contacts", children: /* @__PURE__ */ _("ul", { className: "contacts-list", children: this.contacts.map((r) => this.getContact(r)) }) });
  }
  render() {
    const {
      id: r,
      type: n,
      title: i,
      titleRight: a,
      collapsable: o,
      closable: s,
      loaded: l,
      noPadding: u
    } = this.props;
    return /* @__PURE__ */ ie(
      xf,
      {
        id: r,
        type: n,
        title: i,
        collapsable: o,
        closable: s,
        badge: this.getBadge(),
        customOptions: this.getContactsToggle(),
        className: `direct-chat direct-chat-${n}`,
        footer: this.getFooter(),
        loaded: l,
        noPadding: u,
        titleRight: a,
        children: [
          this.getMessages(),
          this.getContacts()
        ]
      }
    );
  }
}
oe(TT, "defaultProps", {
  id: void 0,
  type: null,
  badgeColor: null,
  contactsTitle: "Contacts",
  iconClass: null,
  title: null,
  titleRight: !1,
  collapsable: !1,
  closable: !1,
  async: !1,
  loaded: !0,
  noPadding: !1
});
class PT extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", {
      users: null
    });
    oe(this, "users", [{
      name: "Alexander Pierce",
      lastOnline: "Today",
      image: "img/user1-128x128.jpg"
    }, {
      name: "Norman",
      lastOnline: "Yesterday",
      image: "img/user8-128x128.jpg"
    }, {
      name: "Jane",
      lastOnline: "12 Jan",
      image: "img/user7-128x128.jpg"
    }, {
      name: "John",
      lastOnline: "12 Jan",
      image: "img/user6-128x128.jpg"
    }, {
      name: "Alexander",
      lastOnline: "13 Jan",
      image: "img/user2-160x160.jpg"
    }, {
      name: "Sarah",
      lastOnline: "14 Jan",
      image: "img/user5-128x128.jpg"
    }, {
      name: "Nora",
      lastOnline: "15 Jan",
      image: "img/user4-128x128.jpg"
    }, {
      name: "Nadia",
      lastOnline: "15 Jan",
      image: "img/user3-128x128.jpg"
    }]);
  }
  componentDidMount() {
    const r = this;
    setTimeout(() => {
      r.setState({ users: r.users });
    }, 2e3);
  }
  /* eslint-disable-next-line class-methods-use-this */
  getUser({ name: r, lastOnline: n, image: i }) {
    return /* @__PURE__ */ ie("li", { children: [
      /* @__PURE__ */ _("img", { src: i, alt: "User" }),
      /* @__PURE__ */ _("a", { href: "/", className: "users-list-name", children: r }),
      /* @__PURE__ */ _("span", { className: "users-list-date", children: n })
    ] }, cr());
  }
  getUsers(r) {
    return r ? r.map((n) => this.getUser(n)) : null;
  }
  render() {
    const {
      id: r,
      type: n,
      title: i,
      collapsable: a,
      closable: o,
      viewAllLink: s
    } = this.props, { users: l } = this.state, u = /* @__PURE__ */ _("span", { className: `label label-${n}`, children: "8 New Members" });
    return /* @__PURE__ */ _(xf, { id: r, type: n, title: i, collapsable: a, closable: o, badge: u, footer: /* @__PURE__ */ _("a", { href: s, className: "uppercase", children: "View All Users" }), footerClass: "text-center", noPadding: !0, loaded: !!l, children: /* @__PURE__ */ _("ul", { className: "users-list clearfix", children: this.getUsers(l) }) });
  }
}
oe(PT, "defaultProps", {
  id: void 0,
  title: null,
  collapsable: !1,
  closable: !1,
  async: !1,
  viewAllLink: "/"
});
class DT extends Ue {
  constructor(r) {
    super(r);
    oe(this, "state", { key: cr() });
    oe(this, "onSelect", (r, n) => {
      const { onSelect: i } = this.props;
      i && i(r), this.setState({
        selectedRow: n
      });
    });
    oe(this, "updateStateData", () => {
      const {
        data: r,
        columns: n
      } = this.props, { key: i, selectedRow: a } = this.state, o = r ? r.map((s, l) => /* @__PURE__ */ _("tr", { className: a !== void 0 && a === l ? "selected" : "", onClick: () => {
        this.onSelect(s, l);
      }, children: n.map((u) => this.mapCell(s[u.data], u, s, l)) }, `${i}-${l}`)) : /* @__PURE__ */ _("tr", { children: /* @__PURE__ */ _("td", { colSpan: n.length, className: "text-center", children: "No matching records found" }) });
      this.setState({
        mappedData: o
      });
    });
    const {
      data: n,
      columns: i
    } = r, { key: a, selectedRow: o } = this.state, s = n ? n.map((l, u) => /* @__PURE__ */ _("tr", { className: o && o === u ? "selected" : "", onClick: () => {
      this.onSelect(l, u);
    }, children: i.map((c) => this.mapCell(l[c.data], c, l, u)) }, `${a}-${u}`)) : /* @__PURE__ */ _("tr", { children: /* @__PURE__ */ _("td", { colSpan: i.length, className: "text-center", children: "No matching records found" }) });
    this.state.mappedData = s;
  }
  componentDidUpdate({
    data: r
  }, { selectedRow: n }) {
    const {
      data: i,
      simpleCompare: a
    } = this.props, { selectedRow: o } = this.state;
    let s;
    a ? r !== i && r !== void 0 && i !== void 0 && (s = r.length !== i.length) : s = !Nr(r, i), (s || n !== o) && this.updateStateData();
  }
  mapCell(r, n, i, a) {
    const { key: o } = this.state;
    return n.render ? /* @__PURE__ */ _("td", { children: n.render(r, i, a) }, `${o}-${a}-${n.data}`) : /* @__PURE__ */ _("td", { children: r }, `${o}-${a}-${n.data}`);
  }
  render() {
    const {
      columns: r,
      noMargin: n,
      condensed: i,
      striped: a,
      border: o,
      hover: s,
      responsive: l
    } = this.props, { key: u, mappedData: c } = this.state;
    let f;
    const d = r.filter((S) => S.title).length > 0;
    d && (f = r.map((S) => /* @__PURE__ */ _("th", { style: { width: S.width }, children: S.title }, `${u}-${S.title}`)));
    const p = [
      "table",
      n ? "no-margin" : null,
      i ? "table-condensed" : null,
      a ? "table-striped" : null,
      o ? "table-bordered" : null,
      s ? "table-hover" : null
    ].filter((S) => S).join(" "), m = /* @__PURE__ */ ie("table", { className: p, children: [
      d && /* @__PURE__ */ _("thead", { children: /* @__PURE__ */ _("tr", { children: f }) }),
      /* @__PURE__ */ _("tbody", { children: c })
    ] }, u);
    return l ? /* @__PURE__ */ _("div", { className: "table-responsive", children: m }) : m;
  }
}
oe(DT, "defaultProps", {
  data: null,
  columns: null,
  condensed: !1,
  striped: !1,
  noMargin: !1,
  border: !1,
  responsive: !1,
  hover: !1,
  onSelect: void 0,
  simpleCompare: !1
});
const ET = ({ children: e, pills: t, stacked: r }) => {
  const n = [
    "nav",
    t ? "nav-pills" : "",
    r ? "nav-stacked" : ""
  ].join(" ");
  return /* @__PURE__ */ _("ul", { className: n, children: e });
};
ET.defaultProps = {
  pills: !1,
  stacked: !1
};
const RT = ({
  icon: e,
  text: t,
  iconLabel: r,
  onClick: n,
  color: i = "red",
  to: a
}) => {
  const o = Lt(e);
  let s = /* @__PURE__ */ ie(Qt, { children: [
    t,
    /* @__PURE__ */ ie("span", { className: `pull-right text-${i}`, children: [
      /* @__PURE__ */ _(Xe, { icon: o }),
      " ",
      r
    ] })
  ] });
  return a ? s = /* @__PURE__ */ _(Pr, { to: a, children: s }) : s = // eslint-disable-next-line jsx-a11y/anchor-is-valid, no-script-url
  /* @__PURE__ */ _("a", { href: "javascript:void(0);", onClick: n, children: s }), /* @__PURE__ */ _("li", { children: s });
};
RT.defaultProps = {
  icon: "far-circle",
  text: void 0,
  iconLabel: void 0,
  onClick: void 0,
  color: "red",
  to: void 0
};
const OT = ({ inBox: e, children: t }) => {
  const r = [
    "products-list",
    e ? "product-list-in-box" : ""
  ].join(" ");
  return /* @__PURE__ */ _("ul", { className: r, children: t });
};
OT.defaultProps = {
  inBox: !1
};
const kT = ({
  description: e,
  title: t,
  label: r,
  labelType: n = "info",
  image: i,
  to: a
}) => /* @__PURE__ */ ie("li", { className: "item", children: [
  /* @__PURE__ */ _("div", { className: "product-img", children: /* @__PURE__ */ _("img", { src: i, alt: "Product" }) }),
  /* @__PURE__ */ ie("div", { className: "product-info", children: [
    /* @__PURE__ */ ie("a", { href: a, className: "product-title", children: [
      t,
      /* @__PURE__ */ _("span", { className: `label label-${n} pull-right`, children: r })
    ] }),
    /* @__PURE__ */ _("span", { className: "product-description", children: e })
  ] })
] });
kT.defaultProps = {
  description: void 0,
  title: void 0,
  label: void 0,
  labelType: "info",
  image: void 0,
  to: "/"
};
const AT = ({
  id: e,
  color: t,
  title: r,
  subTitle: n,
  text: i,
  footerText: a,
  icon: o,
  footerIcon: s,
  onFooterClick: l,
  to: u
}) => {
  const c = o.startsWith("ion") || o.startsWith("ios");
  let f;
  if (c)
    f = /* @__PURE__ */ _(sy, { icon: o, fontSize: "90px", color: "rgba(0,0,0,0.15)" });
  else {
    const p = Lt(o);
    f = /* @__PURE__ */ _(Xe, { icon: p, size: "sm" });
  }
  const d = Lt(s);
  return /* @__PURE__ */ ie("div", { id: e, className: `small-box bg-${t}`, children: [
    /* @__PURE__ */ ie("div", { className: "inner", children: [
      /* @__PURE__ */ ie("h3", { children: [
        r,
        n && /* @__PURE__ */ _("sup", { style: { fontSize: "20px" }, children: n })
      ] }),
      /* @__PURE__ */ _("p", { children: i })
    ] }),
    /* @__PURE__ */ _("div", { className: `icon ${c ? " icon-ion" : ""}`, children: f }),
    /* @__PURE__ */ ie("a", { href: u, onClick: l, className: "small-box-footer", children: [
      a,
      " ",
      /* @__PURE__ */ _(Xe, { icon: d })
    ] })
  ] });
};
AT.defaultProps = {
  id: void 0,
  color: void 0,
  title: void 0,
  subTitle: void 0,
  text: void 0,
  footerText: void 0,
  footerIcon: "fas-arrow-alt-circle-right",
  onFooterClick: void 0,
  to: "/"
};
class IT extends Ue {
  constructor(t) {
    super(t), this.state = { closed: !1 }, this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss() {
    this.setState({ closed: !0 });
  }
  render() {
    const {
      id: t,
      closable: r,
      type: n,
      icon: i,
      title: a,
      children: o,
      onDismiss: s
    } = this.props, { closed: l } = this.state;
    return !l && /* @__PURE__ */ ie(rx, { id: t, bsStyle: n, onDismiss: s || (r ? this.onDismiss : void 0), children: [
      (i || a) && /* @__PURE__ */ ie("h4", { children: [
        i && /* @__PURE__ */ _(Xe, { className: "icon", icon: Lt(i) }),
        " ",
        /* @__PURE__ */ _("span", { children: a })
      ] }),
      o
    ] });
  }
}
oe(IT, "defaultProps", {
  id: void 0,
  closable: !1,
  onDismiss: null,
  type: null,
  icon: null,
  title: null,
  children: null
});
const NT = ({
  id: e,
  title: t,
  children: r,
  type: n = "default"
}) => /* @__PURE__ */ ie("div", { id: e, className: `callout callout-${n}`, children: [
  /* @__PURE__ */ _("h4", { children: t }),
  /* @__PURE__ */ _("p", { children: r })
] });
NT.defaultProps = {
  id: void 0,
  title: void 0,
  children: void 0,
  type: void 0
};
const MT = ({
  type: e,
  color: t,
  striped: r,
  min: n,
  max: i,
  text: a,
  value: o,
  active: s,
  sm: l,
  xs: u,
  xxs: c,
  vertical: f
}) => {
  const d = [
    "progress-bar",
    `progress-bar-${e}`,
    t ? `progress-bar-${t}` : "",
    r ? "progress-bar-striped" : ""
  ].join(" "), p = [
    "progress",
    l ? "progress-sm" : "",
    u ? "progress-xs" : "",
    c ? "progress-xxs" : "",
    f ? "vertical" : "",
    s ? "active" : ""
  ].join(" ");
  return /* @__PURE__ */ _("div", { className: p, children: /* @__PURE__ */ _("div", { className: d, role: "progressbar", "aria-valuenow": o, "aria-valuemin": n, "aria-valuemax": i, style: { width: `${f ? 100 : o}%`, height: `${f ? o : 100}%` }, children: /* @__PURE__ */ _("span", { className: "sr-only", children: a }) }) });
};
MT.defaultProps = {
  type: "primary",
  color: void 0,
  striped: !1,
  min: 0,
  max: 100,
  text: void 0,
  active: !1,
  sm: !1,
  xs: !1,
  xxs: !1,
  vertical: !1
};
var LT = { default: Jy(), __esModule: !0 }, FT = LT, jT = qT(FT);
function qT(e) {
  return e && e.__esModule ? e : { default: e };
}
var ct = jT.default || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, ar = function(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}, cl = sn();
cl(cl.S + cl.F * !an(), "Object", { defineProperty: on().f });
var WT = ir().Object, HT = function(t, r, n) {
  return WT.defineProperty(t, r, n);
}, Xb = { default: HT, __esModule: !0 }, VT = Xb, BT = UT(VT);
function UT(e) {
  return e && e.__esModule ? e : { default: e };
}
var cn = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, BT.default)(t, i.key, i);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}(), fo = {}, $T = Df, zT = Pf(), YT = function(e) {
  return function(t, r) {
    var n = String(zT(t)), i = $T(r), a = n.length, o, s;
    return i < 0 || i >= a ? e ? "" : void 0 : (o = n.charCodeAt(i), o < 55296 || o > 56319 || i + 1 === a || (s = n.charCodeAt(i + 1)) < 56320 || s > 57343 ? e ? n.charAt(i) : o : e ? n.slice(i, i + 2) : (o - 55296 << 10) + (s - 56320) + 65536);
  };
}, Kb = ei(), Vi = {}, Jb = { exports: {} }, Wc = Ef()("wks"), GT = Qa(), Hc = nn().Symbol, pv = typeof Hc == "function", XT = Jb.exports = function(e) {
  return Wc[e] || (Wc[e] = pv && Hc[e] || (pv ? Hc : GT)("Symbol." + e));
};
XT.store = Wc;
var qr = Jb.exports, KT = on().f, JT = xn(), hv = qr("toStringTag"), td = function(e, t, r) {
  e && !JT(e = r ? e : e.prototype, hv) && KT(e, hv, { configurable: !0, value: t });
}, fl, vv;
function ZT() {
  if (vv)
    return fl;
  vv = 1;
  var e = kf(), t = Ri(), r = td, n = {};
  return ei()(n, qr("iterator"), function() {
    return this;
  }), fl = function(i, a, o) {
    i.prototype = e(n, { next: t(1, o) }), r(i, a + " Iterator");
  }, fl;
}
var QT = xn(), eP = ti(), gv = Rf()("IE_PROTO"), tP = Object.prototype, Zb = Object.getPrototypeOf || function(e) {
  return e = eP(e), QT(e, gv) ? e[gv] : typeof e.constructor == "function" && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? tP : null;
}, dl, mv;
function Qb() {
  if (mv)
    return dl;
  mv = 1;
  var e = Za(), t = sn(), r = Kb, n = ei(), i = Vi, a = ZT(), o = td, s = Zb, l = qr("iterator"), u = !([].keys && "next" in [].keys()), c = "@@iterator", f = "keys", d = "values", p = function() {
    return this;
  };
  return dl = function(m, S, w, C, y, T, R) {
    a(w, S, C);
    var P = function(ue) {
      if (!u && ue in Y)
        return Y[ue];
      switch (ue) {
        case f:
          return function() {
            return new w(this, ue);
          };
        case d:
          return function() {
            return new w(this, ue);
          };
      }
      return function() {
        return new w(this, ue);
      };
    }, N = S + " Iterator", L = y == d, W = !1, Y = m.prototype, re = Y[l] || Y[c] || y && Y[y], z = re || P(y), Q = y ? L ? P("entries") : z : void 0, se = S == "Array" && Y.entries || re, X, ee, J;
    if (se && (J = s(se.call(new m())), J !== Object.prototype && J.next && (o(J, N, !0), !e && typeof J[l] != "function" && n(J, l, p))), L && re && re.name !== d && (W = !0, z = function() {
      return re.call(this);
    }), (!e || R) && (u || W || !Y[l]) && n(Y, l, z), i[S] = z, i[N] = p, y)
      if (X = {
        values: L ? z : P(d),
        keys: T ? z : P(f),
        entries: Q
      }, R)
        for (ee in X)
          ee in Y || r(Y, ee, X[ee]);
      else
        t(t.P + t.F * (u || W), S, X);
    return X;
  }, dl;
}
var rP = YT(!0);
Qb()(String, "String", function(e) {
  this._t = String(e), this._i = 0;
}, function() {
  var e = this._t, t = this._i, r;
  return t >= e.length ? { value: void 0, done: !0 } : (r = rP(e, t), this._i += r.length, { value: r, done: !1 });
});
var nP = function(e, t) {
  return { value: t, done: !!e };
}, da = nP, yv = Vi, iP = Cn();
Qb()(Array, "Array", function(e, t) {
  this._t = iP(e), this._i = 0, this._k = t;
}, function() {
  var e = this._t, t = this._k, r = this._i++;
  return !e || r >= e.length ? (this._t = void 0, da(1)) : t == "keys" ? da(0, r) : t == "values" ? da(0, e[r]) : da(0, [r, e[r]]);
}, "values");
yv.Arguments = yv.Array;
var aP = nn(), oP = ei(), bv = Vi, wv = qr("toStringTag"), Sv = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
for (var pl = 0; pl < Sv.length; pl++) {
  var hl = Sv[pl], xv = aP[hl], vl = xv && xv.prototype;
  vl && !vl[wv] && oP(vl, wv, hl), bv[hl] = bv.Array;
}
var po = {};
po.f = qr;
var sP = po.f("iterator"), lP = { default: sP, __esModule: !0 }, e0 = { exports: {} }, Sn = Qa()("meta"), uP = Jn(), rd = xn(), cP = on().f, fP = 0, ho = Object.isExtensible || function() {
  return !0;
}, dP = !Qn()(function() {
  return ho(Object.preventExtensions({}));
}), nd = function(e) {
  cP(e, Sn, { value: {
    i: "O" + ++fP,
    // object ID
    w: {}
    // weak collections IDs
  } });
}, pP = function(e, t) {
  if (!uP(e))
    return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
  if (!rd(e, Sn)) {
    if (!ho(e))
      return "F";
    if (!t)
      return "E";
    nd(e);
  }
  return e[Sn].i;
}, hP = function(e, t) {
  if (!rd(e, Sn)) {
    if (!ho(e))
      return !0;
    if (!t)
      return !1;
    nd(e);
  }
  return e[Sn].w;
}, vP = function(e) {
  return dP && gP.NEED && ho(e) && !rd(e, Sn) && nd(e), e;
}, gP = e0.exports = {
  KEY: Sn,
  NEED: !1,
  fastKey: pP,
  getWeak: hP,
  onFreeze: vP
}, mP = e0.exports, yP = nn(), Cv = ir(), bP = Za(), wP = po, SP = on().f, id = function(e) {
  var t = Cv.Symbol || (Cv.Symbol = bP ? {} : yP.Symbol || {});
  e.charAt(0) != "_" && !(e in t) && SP(t, e, { value: wP.f(e) });
}, xP = Oi(), CP = If(), _P = eo(), TP = function(e) {
  var t = xP(e), r = CP.f;
  if (r)
    for (var n = r(e), i = _P.f, a = 0, o; n.length > a; )
      i.call(e, o = n[a++]) && t.push(o);
  return t;
}, PP = Tf(), DP = Array.isArray || function(t) {
  return PP(t) == "Array";
}, t0 = {}, ad = {}, EP = Yy(), RP = Of().concat("length", "prototype");
ad.f = Object.getOwnPropertyNames || function(t) {
  return EP(t, RP);
};
var OP = Cn(), r0 = ad.f, kP = {}.toString, n0 = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], AP = function(e) {
  try {
    return r0(e);
  } catch {
    return n0.slice();
  }
};
t0.f = function(t) {
  return n0 && kP.call(t) == "[object Window]" ? AP(t) : r0(OP(t));
};
var vo = nn(), Tt = xn(), Vc = an(), Mt = sn(), _v = Kb, IP = mP.KEY, od = Qn(), sd = Ef(), ld = td, NP = Qa(), Bi = qr, MP = po, LP = id, FP = TP, jP = DP, Bc = Zn(), qP = Jn(), WP = ti(), go = Cn(), ud = _f(), Uc = Ri(), Pi = kf(), i0 = t0, a0 = Af(), mo = If(), o0 = on(), HP = Oi(), s0 = a0.f, mn = o0.f, l0 = i0.f, er = vo.Symbol, Ua = vo.JSON, pa = Ua && Ua.stringify, tn = "prototype", Jt = Bi("_hidden"), Tv = Bi("toPrimitive"), VP = {}.propertyIsEnumerable, di = sd("symbol-registry"), Ur = sd("symbols"), Ui = sd("op-symbols"), mr = Object[tn], ii = typeof er == "function" && !!mo.f, gl = vo.QObject, $c = !gl || !gl[tn] || !gl[tn].findChild, zc = Vc && od(function() {
  return Pi(mn({}, "a", {
    get: function() {
      return mn(this, "a", { value: 7 }).a;
    }
  })).a != 7;
}) ? function(e, t, r) {
  var n = s0(mr, t);
  n && delete mr[t], mn(e, t, r), n && e !== mr && mn(mr, t, n);
} : mn, Pv = function(e) {
  var t = Ur[e] = Pi(er[tn]);
  return t._k = e, t;
}, Yc = ii && typeof er.iterator == "symbol" ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  return e instanceof er;
}, yo = function(t, r, n) {
  return t === mr && yo(Ui, r, n), Bc(t), r = ud(r, !0), Bc(n), Tt(Ur, r) ? (n.enumerable ? (Tt(t, Jt) && t[Jt][r] && (t[Jt][r] = !1), n = Pi(n, { enumerable: Uc(0, !1) })) : (Tt(t, Jt) || mn(t, Jt, Uc(1, {})), t[Jt][r] = !0), zc(t, r, n)) : mn(t, r, n);
}, u0 = function(t, r) {
  Bc(t);
  for (var n = FP(r = go(r)), i = 0, a = n.length, o; a > i; )
    yo(t, o = n[i++], r[o]);
  return t;
}, BP = function(t, r) {
  return r === void 0 ? Pi(t) : u0(Pi(t), r);
}, Dv = function(t) {
  var r = VP.call(this, t = ud(t, !0));
  return this === mr && Tt(Ur, t) && !Tt(Ui, t) ? !1 : r || !Tt(this, t) || !Tt(Ur, t) || Tt(this, Jt) && this[Jt][t] ? r : !0;
}, c0 = function(t, r) {
  if (t = go(t), r = ud(r, !0), !(t === mr && Tt(Ur, r) && !Tt(Ui, r))) {
    var n = s0(t, r);
    return n && Tt(Ur, r) && !(Tt(t, Jt) && t[Jt][r]) && (n.enumerable = !0), n;
  }
}, f0 = function(t) {
  for (var r = l0(go(t)), n = [], i = 0, a; r.length > i; )
    !Tt(Ur, a = r[i++]) && a != Jt && a != IP && n.push(a);
  return n;
}, d0 = function(t) {
  for (var r = t === mr, n = l0(r ? Ui : go(t)), i = [], a = 0, o; n.length > a; )
    Tt(Ur, o = n[a++]) && (!r || Tt(mr, o)) && i.push(Ur[o]);
  return i;
};
ii || (er = function() {
  if (this instanceof er)
    throw TypeError("Symbol is not a constructor!");
  var t = NP(arguments.length > 0 ? arguments[0] : void 0), r = function(n) {
    this === mr && r.call(Ui, n), Tt(this, Jt) && Tt(this[Jt], t) && (this[Jt][t] = !1), zc(this, t, Uc(1, n));
  };
  return Vc && $c && zc(mr, t, { configurable: !0, set: r }), Pv(t);
}, _v(er[tn], "toString", function() {
  return this._k;
}), a0.f = c0, o0.f = yo, ad.f = i0.f = f0, eo().f = Dv, mo.f = d0, Vc && !Za() && _v(mr, "propertyIsEnumerable", Dv, !0), MP.f = function(e) {
  return Pv(Bi(e));
});
Mt(Mt.G + Mt.W + Mt.F * !ii, { Symbol: er });
for (var Ev = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",")
), Rv = 0; Ev.length > Rv; )
  Bi(Ev[Rv++]);
for (var Ov = HP(Bi.store), kv = 0; Ov.length > kv; )
  LP(Ov[kv++]);
Mt(Mt.S + Mt.F * !ii, "Symbol", {
  // 19.4.2.1 Symbol.for(key)
  for: function(e) {
    return Tt(di, e += "") ? di[e] : di[e] = er(e);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function(t) {
    if (!Yc(t))
      throw TypeError(t + " is not a symbol!");
    for (var r in di)
      if (di[r] === t)
        return r;
  },
  useSetter: function() {
    $c = !0;
  },
  useSimple: function() {
    $c = !1;
  }
});
Mt(Mt.S + Mt.F * !ii, "Object", {
  // 19.1.2.2 Object.create(O [, Properties])
  create: BP,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: yo,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: u0,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: c0,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: f0,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: d0
});
var UP = od(function() {
  mo.f(1);
});
Mt(Mt.S + Mt.F * UP, "Object", {
  getOwnPropertySymbols: function(t) {
    return mo.f(WP(t));
  }
});
Ua && Mt(Mt.S + Mt.F * (!ii || od(function() {
  var e = er();
  return pa([e]) != "[null]" || pa({ a: e }) != "{}" || pa(Object(e)) != "{}";
})), "JSON", {
  stringify: function(t) {
    for (var r = [t], n = 1, i, a; arguments.length > n; )
      r.push(arguments[n++]);
    if (a = i = r[1], !(!qP(i) && t === void 0 || Yc(t)))
      return jP(i) || (i = function(o, s) {
        if (typeof a == "function" && (s = a.call(this, o, s)), !Yc(s))
          return s;
      }), r[1] = i, pa.apply(Ua, r);
  }
});
er[tn][Tv] || ei()(er[tn], Tv, er[tn].valueOf);
ld(er, "Symbol");
ld(Math, "Math", !0);
ld(vo.JSON, "JSON", !0);
id("asyncIterator");
id("observable");
var $P = ir().Symbol, zP = { default: $P, __esModule: !0 };
fo.__esModule = !0;
var YP = lP, p0 = h0(YP), GP = zP, Qr = h0(GP), ml = typeof Qr.default == "function" && typeof p0.default == "symbol" ? function(e) {
  return typeof e;
} : function(e) {
  return e && typeof Qr.default == "function" && e.constructor === Qr.default && e !== Qr.default.prototype ? "symbol" : typeof e;
};
function h0(e) {
  return e && e.__esModule ? e : { default: e };
}
var XP = fo.default = typeof Qr.default == "function" && ml(p0.default) === "symbol" ? function(e) {
  return typeof e > "u" ? "undefined" : ml(e);
} : function(e) {
  return e && typeof Qr.default == "function" && e.constructor === Qr.default && e !== Qr.default.prototype ? "symbol" : typeof e > "u" ? "undefined" : ml(e);
}, KP = fo, JP = ZP(KP);
function ZP(e) {
  return e && e.__esModule ? e : { default: e };
}
var Pt = function(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ((typeof t > "u" ? "undefined" : (0, JP.default)(t)) === "object" || typeof t == "function") ? t : e;
}, QP = { default: Xy(), __esModule: !0 }, eD = { default: Gy(), __esModule: !0 }, tD = QP, Av = cd(tD), rD = eD, nD = cd(rD), iD = fo, aD = cd(iD);
function cd(e) {
  return e && e.__esModule ? e : { default: e };
}
var or = function(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + (typeof t > "u" ? "undefined" : (0, aD.default)(t)));
  e.prototype = (0, nD.default)(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Av.default ? (0, Av.default)(e, t) : e.__proto__ = t);
}, oD = Xb, sD = lD(oD);
function lD(e) {
  return e && e.__esModule ? e : { default: e };
}
var nt = function(e, t, r) {
  return t in e ? (0, sD.default)(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}, v0 = function(t) {
  var r, n, i = t.className, a = t.included, o = t.vertical, s = t.offset, l = t.length, u = t.style, c = t.reverse, f = o ? (r = {}, nt(r, c ? "top" : "bottom", s + "%"), nt(r, c ? "bottom" : "top", "auto"), nt(r, "height", l + "%"), r) : (n = {}, nt(n, c ? "right" : "left", s + "%"), nt(n, c ? "left" : "right", "auto"), nt(n, "width", l + "%"), n), d = ct({}, u, f);
  return a ? pe.createElement("div", { className: i, style: d }) : null;
}, zn = function(e, t) {
  var r = {};
  for (var n in e)
    t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
  return r;
}, uD = ti(), cD = Zb;
Nf()("getPrototypeOf", function() {
  return function(t) {
    return cD(uD(t));
  };
});
var fD = ir().Object.getPrototypeOf, dD = { default: fD, __esModule: !0 }, pD = Cn(), hD = Af().f;
Nf()("getOwnPropertyDescriptor", function() {
  return function(t, r) {
    return hD(pD(t), r);
  };
});
var vD = ir().Object, gD = function(t, r) {
  return vD.getOwnPropertyDescriptor(t, r);
}, mD = { default: gD, __esModule: !0 }, yD = dD, bD = g0(yD), wD = mD, SD = g0(wD);
function g0(e) {
  return e && e.__esModule ? e : { default: e };
}
var yl = function e(t, r, n) {
  t === null && (t = Function.prototype);
  var i = (0, SD.default)(t, r);
  if (i === void 0) {
    var a = (0, bD.default)(t);
    return a === null ? void 0 : e(a, r, n);
  } else {
    if ("value" in i)
      return i.value;
    var o = i.get;
    return o === void 0 ? void 0 : o.call(n);
  }
}, Gc = { exports: {} }, Xc = { exports: {} }, Kc = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r() {
    return !1;
  }
  function n() {
    return !0;
  }
  function i() {
    this.timeStamp = Date.now(), this.target = void 0, this.currentTarget = void 0;
  }
  i.prototype = {
    isEventObject: 1,
    constructor: i,
    isDefaultPrevented: r,
    isPropagationStopped: r,
    isImmediatePropagationStopped: r,
    preventDefault: function() {
      this.isDefaultPrevented = n;
    },
    stopPropagation: function() {
      this.isPropagationStopped = n;
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = n, this.stopPropagation();
    },
    halt: function(o) {
      o ? this.stopImmediatePropagation() : this.stopPropagation(), this.preventDefault();
    }
  }, t.default = i, e.exports = t.default;
})(Kc, Kc.exports);
var xD = Kc.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(w) {
    return w && w.__esModule ? w : { default: w };
  }
  var n = xD, i = r(n), a = Ka(), o = r(a), s = !0, l = !1, u = ["altKey", "bubbles", "cancelable", "ctrlKey", "currentTarget", "eventPhase", "metaKey", "shiftKey", "target", "timeStamp", "view", "type"];
  function c(w) {
    return w == null;
  }
  var f = [{
    reg: /^key/,
    props: ["char", "charCode", "key", "keyCode", "which"],
    fix: function(C, y) {
      c(C.which) && (C.which = c(y.charCode) ? y.keyCode : y.charCode), C.metaKey === void 0 && (C.metaKey = C.ctrlKey);
    }
  }, {
    reg: /^touch/,
    props: ["touches", "changedTouches", "targetTouches"]
  }, {
    reg: /^hashchange$/,
    props: ["newURL", "oldURL"]
  }, {
    reg: /^gesturechange$/i,
    props: ["rotation", "scale"]
  }, {
    reg: /^(mousewheel|DOMMouseScroll)$/,
    props: [],
    fix: function(C, y) {
      var T = void 0, R = void 0, P = void 0, N = y.wheelDelta, L = y.axis, W = y.wheelDeltaY, Y = y.wheelDeltaX, re = y.detail;
      N && (P = N / 120), re && (P = 0 - (re % 3 === 0 ? re / 3 : re)), L !== void 0 && (L === C.HORIZONTAL_AXIS ? (R = 0, T = 0 - P) : L === C.VERTICAL_AXIS && (T = 0, R = P)), W !== void 0 && (R = W / 120), Y !== void 0 && (T = -1 * Y / 120), !T && !R && (R = P), T !== void 0 && (C.deltaX = T), R !== void 0 && (C.deltaY = R), P !== void 0 && (C.delta = P);
    }
  }, {
    reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
    props: ["buttons", "clientX", "clientY", "button", "offsetX", "relatedTarget", "which", "fromElement", "toElement", "offsetY", "pageX", "pageY", "screenX", "screenY"],
    fix: function(C, y) {
      var T = void 0, R = void 0, P = void 0, N = C.target, L = y.button;
      return N && c(C.pageX) && !c(y.clientX) && (T = N.ownerDocument || document, R = T.documentElement, P = T.body, C.pageX = y.clientX + (R && R.scrollLeft || P && P.scrollLeft || 0) - (R && R.clientLeft || P && P.clientLeft || 0), C.pageY = y.clientY + (R && R.scrollTop || P && P.scrollTop || 0) - (R && R.clientTop || P && P.clientTop || 0)), !C.which && L !== void 0 && (L & 1 ? C.which = 1 : L & 2 ? C.which = 3 : L & 4 ? C.which = 2 : C.which = 0), !C.relatedTarget && C.fromElement && (C.relatedTarget = C.fromElement === N ? C.toElement : C.fromElement), C;
    }
  }];
  function d() {
    return s;
  }
  function p() {
    return l;
  }
  function m(w) {
    var C = w.type, y = typeof w.stopPropagation == "function" || typeof w.cancelBubble == "boolean";
    i.default.call(this), this.nativeEvent = w;
    var T = p;
    "defaultPrevented" in w ? T = w.defaultPrevented ? d : p : "getPreventDefault" in w ? T = w.getPreventDefault() ? d : p : "returnValue" in w && (T = w.returnValue === l ? d : p), this.isDefaultPrevented = T;
    var R = [], P = void 0, N = void 0, L = void 0, W = u.concat();
    for (f.forEach(function(Y) {
      C.match(Y.reg) && (W = W.concat(Y.props), Y.fix && R.push(Y.fix));
    }), N = W.length; N; )
      L = W[--N], this[L] = w[L];
    for (!this.target && y && (this.target = w.srcElement || document), this.target && this.target.nodeType === 3 && (this.target = this.target.parentNode), N = R.length; N; )
      P = R[--N], P(this, w);
    this.timeStamp = w.timeStamp || Date.now();
  }
  var S = i.default.prototype;
  (0, o.default)(m.prototype, S, {
    constructor: m,
    preventDefault: function() {
      var C = this.nativeEvent;
      C.preventDefault ? C.preventDefault() : C.returnValue = l, S.preventDefault.call(this);
    },
    stopPropagation: function() {
      var C = this.nativeEvent;
      C.stopPropagation ? C.stopPropagation() : C.cancelBubble = s, S.stopPropagation.call(this);
    }
  }), t.default = m, e.exports = t.default;
})(Xc, Xc.exports);
var CD = Xc.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = CD, i = r(n);
  function a(o, s, l, u) {
    function c(d) {
      var p = new i.default(d);
      l.call(o, p);
    }
    if (o.addEventListener) {
      var f = function() {
        var d = !1;
        return typeof u == "object" ? d = u.capture || !1 : typeof u == "boolean" && (d = u), o.addEventListener(s, c, u || !1), {
          v: {
            remove: function() {
              o.removeEventListener(s, c, d);
            }
          }
        };
      }();
      if (typeof f == "object")
        return f.v;
    } else if (o.attachEvent)
      return o.attachEvent("on" + s, c), {
        remove: function() {
          o.detachEvent("on" + s, c);
        }
      };
  }
  e.exports = t.default;
})(Gc, Gc.exports);
var _D = Gc.exports;
const TD = /* @__PURE__ */ nr(_D);
function Mr(e, t, r, n) {
  var i = Tr.unstable_batchedUpdates ? function(o) {
    Tr.unstable_batchedUpdates(r, o);
  } : r;
  return TD(e, t, i, n);
}
var PD = function(t, r, n, i, a, o) {
  Zt(n ? i > 0 : !0, "`Slider[step]` should be a positive number in order to make Slider[dots] work.");
  var s = Object.keys(r).map(parseFloat).sort(function(u, c) {
    return u - c;
  });
  if (n && i)
    for (var l = a; l <= o; l += i)
      s.indexOf(l) === -1 && s.push(l);
  return s;
}, m0 = function(t) {
  var r = t.prefixCls, n = t.vertical, i = t.reverse, a = t.marks, o = t.dots, s = t.step, l = t.included, u = t.lowerBound, c = t.upperBound, f = t.max, d = t.min, p = t.dotStyle, m = t.activeDotStyle, S = f - d, w = PD(n, a, o, s, d, f).map(function(C) {
    var y, T = Math.abs(C - d) / S * 100 + "%", R = !l && C === c || l && C <= c && C >= u, P = n ? ct({}, p, nt({}, i ? "top" : "bottom", T)) : ct({}, p, nt({}, i ? "right" : "left", T));
    R && (P = ct({}, P, m));
    var N = bn((y = {}, nt(y, r + "-dot", !0), nt(y, r + "-dot-active", R), nt(y, r + "-dot-reverse", i), y));
    return pe.createElement("span", { className: N, style: P, key: C });
  });
  return pe.createElement(
    "div",
    { className: r + "-step" },
    w
  );
};
m0.propTypes = {
  prefixCls: D.string,
  activeDotStyle: D.object,
  dotStyle: D.object,
  min: D.number,
  max: D.number,
  upperBound: D.number,
  lowerBound: D.number,
  included: D.bool,
  dots: D.bool,
  step: D.number,
  marks: D.object,
  vertical: D.bool,
  reverse: D.bool
};
var y0 = function(t) {
  var r = t.className, n = t.vertical, i = t.reverse, a = t.marks, o = t.included, s = t.upperBound, l = t.lowerBound, u = t.max, c = t.min, f = t.onClickLabel, d = Object.keys(a), p = u - c, m = d.map(parseFloat).sort(function(S, w) {
    return S - w;
  }).map(function(S) {
    var w, C = a[S], y = typeof C == "object" && !pe.isValidElement(C), T = y ? C.label : C;
    if (!T && T !== 0)
      return null;
    var R = !o && S === s || o && S <= s && S >= l, P = bn((w = {}, nt(w, r + "-text", !0), nt(w, r + "-text-active", R), w)), N = nt({
      marginBottom: "-50%"
    }, i ? "top" : "bottom", (S - c) / p * 100 + "%"), L = nt({
      transform: "translateX(-50%)",
      msTransform: "translateX(-50%)"
    }, i ? "right" : "left", i ? (S - c / 4) / p * 100 + "%" : (S - c) / p * 100 + "%"), W = n ? N : L, Y = y ? ct({}, W, C.style) : W;
    return pe.createElement(
      "span",
      {
        className: P,
        style: Y,
        key: S,
        onMouseDown: function(z) {
          return f(z, S);
        },
        onTouchStart: function(z) {
          return f(z, S);
        }
      },
      T
    );
  });
  return pe.createElement(
    "div",
    { className: r },
    m
  );
};
y0.propTypes = {
  className: D.string,
  vertical: D.bool,
  reverse: D.bool,
  marks: D.object,
  included: D.bool,
  upperBound: D.number,
  lowerBound: D.number,
  max: D.number,
  min: D.number,
  onClickLabel: D.func
};
var bo = function(e) {
  or(t, e);
  function t() {
    var r, n, i, a;
    ar(this, t);
    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    return a = (n = (i = Pt(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [this].concat(s))), i), i.state = {
      clickFocused: !1
    }, i.setHandleRef = function(u) {
      i.handle = u;
    }, i.handleMouseUp = function() {
      document.activeElement === i.handle && i.setClickFocus(!0);
    }, i.handleMouseDown = function() {
      i.focus();
    }, i.handleBlur = function() {
      i.setClickFocus(!1);
    }, i.handleKeyDown = function() {
      i.setClickFocus(!1);
    }, n), Pt(i, a);
  }
  return cn(t, [{
    key: "componentDidMount",
    value: function() {
      this.onMouseUpListener = Mr(document, "mouseup", this.handleMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.onMouseUpListener && this.onMouseUpListener.remove();
    }
  }, {
    key: "setClickFocus",
    value: function(n) {
      this.setState({ clickFocused: n });
    }
  }, {
    key: "clickFocus",
    value: function() {
      this.setClickFocus(!0), this.focus();
    }
  }, {
    key: "focus",
    value: function() {
      this.handle.focus();
    }
  }, {
    key: "blur",
    value: function() {
      this.handle.blur();
    }
  }, {
    key: "render",
    value: function() {
      var n, i, a = this.props, o = a.prefixCls, s = a.vertical, l = a.reverse, u = a.offset, c = a.style, f = a.disabled, d = a.min, p = a.max, m = a.value, S = a.tabIndex, w = zn(a, ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex"]), C = bn(this.props.className, nt({}, o + "-handle-click-focused", this.state.clickFocused)), y = s ? (n = {}, nt(n, l ? "top" : "bottom", u + "%"), nt(n, l ? "bottom" : "top", "auto"), nt(n, "transform", "translateY(+50%)"), n) : (i = {}, nt(i, l ? "right" : "left", u + "%"), nt(i, l ? "left" : "right", "auto"), nt(i, "transform", "translateX(" + (l ? "+" : "-") + "50%)"), i), T = ct({}, c, y), R = S || 0;
      return (f || S === null) && (R = null), pe.createElement("div", ct({
        ref: this.setHandleRef,
        tabIndex: R
      }, w, {
        className: C,
        style: T,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        role: "slider",
        "aria-valuemin": d,
        "aria-valuemax": p,
        "aria-valuenow": m,
        "aria-disabled": !!f
      }));
    }
  }]), t;
}(pe.Component);
bo.propTypes = {
  prefixCls: D.string,
  className: D.string,
  vertical: D.bool,
  offset: D.number,
  style: D.object,
  disabled: D.bool,
  min: D.number,
  max: D.number,
  value: D.number,
  tabIndex: D.number,
  reverse: D.bool
};
var Iv = Zn(), DD = function(e, t, r, n) {
  try {
    return n ? t(Iv(r)[0], r[1]) : t(r);
  } catch (a) {
    var i = e.return;
    throw i !== void 0 && Iv(i.call(e)), a;
  }
}, ED = Vi, RD = qr("iterator"), OD = Array.prototype, kD = function(e) {
  return e !== void 0 && (ED.Array === e || OD[RD] === e);
}, AD = on(), ID = Ri(), ND = function(e, t, r) {
  t in e ? AD.f(e, t, ID(0, r)) : e[t] = r;
}, Jc = Tf(), MD = qr("toStringTag"), LD = Jc(/* @__PURE__ */ function() {
  return arguments;
}()) == "Arguments", FD = function(e, t) {
  try {
    return e[t];
  } catch {
  }
}, jD = function(e) {
  var t, r, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = FD(t = Object(e), MD)) == "string" ? r : LD ? Jc(t) : (n = Jc(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : n;
}, qD = jD, WD = qr("iterator"), HD = Vi, VD = ir().getIteratorMethod = function(e) {
  if (e != null)
    return e[WD] || e["@@iterator"] || HD[qD(e)];
}, bl, Nv;
function BD() {
  if (Nv)
    return bl;
  Nv = 1;
  var e = qr("iterator"), t = !1;
  try {
    var r = [7][e]();
    r.return = function() {
      t = !0;
    }, Array.from(r, function() {
      throw 2;
    });
  } catch {
  }
  return bl = function(n, i) {
    if (!i && !t)
      return !1;
    var a = !1;
    try {
      var o = [7], s = o[e]();
      s.next = function() {
        return { done: a = !0 };
      }, o[e] = function() {
        return s;
      }, n(o);
    } catch {
    }
    return a;
  }, bl;
}
var UD = Cf(), wl = sn(), $D = ti(), zD = DD, YD = kD, GD = zy, Mv = ND, XD = VD;
wl(wl.S + wl.F * !BD()(function(e) {
  Array.from(e);
}), "Array", {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function(t) {
    var r = $D(t), n = typeof this == "function" ? this : Array, i = arguments.length, a = i > 1 ? arguments[1] : void 0, o = a !== void 0, s = 0, l = XD(r), u, c, f, d;
    if (o && (a = UD(a, i > 2 ? arguments[2] : void 0, 2)), l != null && !(n == Array && YD(l)))
      for (d = l.call(r), c = new n(); !(f = d.next()).done; s++)
        Mv(c, s, o ? zD(d, a, [f.value, s], !0) : f.value);
    else
      for (u = GD(r.length), c = new n(u); u > s; s++)
        Mv(c, s, o ? a(r[s], s) : r[s]);
    return c.length = s, c;
  }
});
var KD = ir().Array.from, JD = { default: KD, __esModule: !0 }, ZD = JD, QD = eE(ZD);
function eE(e) {
  return e && e.__esModule ? e : { default: e };
}
var Aa = function(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = Array(e.length); t < e.length; t++)
      r[t] = e[t];
    return r;
  } else
    return (0, QD.default)(e);
}, Ae = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  /**
   * END
   */
  END: 35,
  /**
   * HOME
   */
  HOME: 36,
  /**
   * LEFT
   */
  LEFT: 37,
  /**
   * UP
   */
  UP: 38,
  /**
   * RIGHT
   */
  RIGHT: 39,
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  /**
   * DELETE
   */
  DELETE: 46,
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  /**
   * DASH
   */
  DASH: 189,
  /**
   * EQUALS
   */
  EQUALS: 187,
  /**
   * COMMA
   */
  COMMA: 188,
  /**
   * PERIOD
   */
  PERIOD: 190,
  /**
   * SLASH
   */
  SLASH: 191,
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var r = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    r >= Ae.F1 && r <= Ae.F12)
      return !1;
    switch (r) {
      case Ae.ALT:
      case Ae.CAPS_LOCK:
      case Ae.CONTEXT_MENU:
      case Ae.CTRL:
      case Ae.DOWN:
      case Ae.END:
      case Ae.ESC:
      case Ae.HOME:
      case Ae.INSERT:
      case Ae.LEFT:
      case Ae.MAC_FF_META:
      case Ae.META:
      case Ae.NUMLOCK:
      case Ae.NUM_CENTER:
      case Ae.PAGE_DOWN:
      case Ae.PAGE_UP:
      case Ae.PAUSE:
      case Ae.PRINT_SCREEN:
      case Ae.RIGHT:
      case Ae.SHIFT:
      case Ae.UP:
      case Ae.WIN_KEY:
      case Ae.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= Ae.ZERO && t <= Ae.NINE || t >= Ae.NUM_ZERO && t <= Ae.NUM_MULTIPLY || t >= Ae.A && t <= Ae.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case Ae.SPACE:
      case Ae.QUESTION_MARK:
      case Ae.NUM_PLUS:
      case Ae.NUM_MINUS:
      case Ae.NUM_PERIOD:
      case Ae.NUM_DIVISION:
      case Ae.SEMICOLON:
      case Ae.DASH:
      case Ae.EQUALS:
      case Ae.COMMA:
      case Ae.PERIOD:
      case Ae.SLASH:
      case Ae.APOSTROPHE:
      case Ae.SINGLE_QUOTE:
      case Ae.OPEN_SQUARE_BRACKET:
      case Ae.BACKSLASH:
      case Ae.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
};
function ha(e, t) {
  try {
    return Object.keys(t).some(function(r) {
      return e.target === Pa(t[r]);
    });
  } catch {
    return !1;
  }
}
function b0(e, t) {
  var r = t.min, n = t.max;
  return e < r || e > n;
}
function Lv(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === "touchend" && e.touches.length > 0;
}
function Fv(e, t) {
  var r = t.marks, n = t.step, i = t.min, a = t.max, o = Object.keys(r).map(parseFloat);
  if (n !== null) {
    var s = Math.floor((a - i) / n), l = Math.min((e - i) / n, s), u = Math.round(l) * n + i;
    o.push(u);
  }
  var c = o.map(function(f) {
    return Math.abs(e - f);
  });
  return o[c.indexOf(Math.min.apply(Math, Aa(c)))];
}
function tE(e) {
  var t = e.toString(), r = 0;
  return t.indexOf(".") >= 0 && (r = t.length - t.indexOf(".") - 1), r;
}
function jv(e, t) {
  return e ? t.clientY : t.pageX;
}
function qv(e, t) {
  return e ? t.touches[0].clientY : t.touches[0].pageX;
}
function Sl(e, t) {
  var r = t.getBoundingClientRect();
  return e ? r.top + r.height * 0.5 : window.pageXOffset + r.left + r.width * 0.5;
}
function fd(e, t) {
  var r = t.max, n = t.min;
  return e <= n ? n : e >= r ? r : e;
}
function w0(e, t) {
  var r = t.step, n = isFinite(Fv(e, t)) ? Fv(e, t) : 0;
  return r === null ? n : parseFloat(n.toFixed(tE(r)));
}
function Yn(e) {
  e.stopPropagation(), e.preventDefault();
}
function rE(e, t, r) {
  var n = {
    increase: function(s, l) {
      return s + l;
    },
    decrease: function(s, l) {
      return s - l;
    }
  }, i = n[e](Object.keys(r.marks).indexOf(JSON.stringify(t)), 1), a = Object.keys(r.marks)[i];
  return r.step ? n[e](t, r.step) : Object.keys(r.marks).length && r.marks[a] ? r.marks[a] : t;
}
function S0(e, t, r) {
  var n = "increase", i = "decrease", a = n;
  switch (e.keyCode) {
    case Ae.UP:
      a = t && r ? i : n;
      break;
    case Ae.RIGHT:
      a = !t && r ? i : n;
      break;
    case Ae.DOWN:
      a = t && r ? n : i;
      break;
    case Ae.LEFT:
      a = !t && r ? n : i;
      break;
    case Ae.END:
      return function(o, s) {
        return s.max;
      };
    case Ae.HOME:
      return function(o, s) {
        return s.min;
      };
    case Ae.PAGE_UP:
      return function(o, s) {
        return o + s.step * 2;
      };
    case Ae.PAGE_DOWN:
      return function(o, s) {
        return o - s.step * 2;
      };
    default:
      return;
  }
  return function(o, s) {
    return rE(a, o, s);
  };
}
function Rr() {
}
function x0(e) {
  var t, r;
  return r = t = function(n) {
    or(i, n);
    function i(a) {
      ar(this, i);
      var o = Pt(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, a));
      o.onMouseDown = function(f) {
        if (f.button === 0) {
          var d = o.props.vertical, p = jv(d, f);
          if (!ha(f, o.handlesRefs))
            o.dragOffset = 0;
          else {
            var m = Sl(d, f.target);
            o.dragOffset = p - m, p = m;
          }
          o.removeDocumentEvents(), o.onStart(p), o.addDocumentMouseEvents();
        }
      }, o.onTouchStart = function(f) {
        if (!Lv(f)) {
          var d = o.props.vertical, p = qv(d, f);
          if (!ha(f, o.handlesRefs))
            o.dragOffset = 0;
          else {
            var m = Sl(d, f.target);
            o.dragOffset = p - m, p = m;
          }
          o.onStart(p), o.addDocumentTouchEvents(), Yn(f);
        }
      }, o.onFocus = function(f) {
        var d = o.props, p = d.onFocus, m = d.vertical;
        if (ha(f, o.handlesRefs)) {
          var S = Sl(m, f.target);
          o.dragOffset = 0, o.onStart(S), Yn(f), p && p(f);
        }
      }, o.onBlur = function(f) {
        var d = o.props.onBlur;
        o.onEnd(), d && d(f);
      }, o.onMouseUp = function() {
        o.handlesRefs[o.prevMovedHandleIndex] && o.handlesRefs[o.prevMovedHandleIndex].clickFocus();
      }, o.onMouseMove = function(f) {
        if (!o.sliderRef) {
          o.onEnd();
          return;
        }
        var d = jv(o.props.vertical, f);
        o.onMove(f, d - o.dragOffset);
      }, o.onTouchMove = function(f) {
        if (Lv(f) || !o.sliderRef) {
          o.onEnd();
          return;
        }
        var d = qv(o.props.vertical, f);
        o.onMove(f, d - o.dragOffset);
      }, o.onKeyDown = function(f) {
        o.sliderRef && ha(f, o.handlesRefs) && o.onKeyboard(f);
      }, o.onClickMarkLabel = function(f, d) {
        f.stopPropagation(), o.onChange({ value: d }), o.setState({ value: d }, function() {
          return o.onEnd(!0);
        });
      }, o.saveSlider = function(f) {
        o.sliderRef = f;
      };
      var s = a.step, l = a.max, u = a.min, c = isFinite(l - u) ? (l - u) % s === 0 : !0;
      return Zt(s && Math.floor(s) === s ? c : !0, "Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)", l - u, s), o.handlesRefs = {}, o;
    }
    return cn(i, [{
      key: "componentDidMount",
      value: function() {
        this.document = this.sliderRef && this.sliderRef.ownerDocument;
        var o = this.props, s = o.autoFocus, l = o.disabled;
        s && !l && this.focus();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        yl(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "componentWillUnmount", this) && yl(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "componentWillUnmount", this).call(this), this.removeDocumentEvents();
      }
    }, {
      key: "getSliderStart",
      value: function() {
        var o = this.sliderRef, s = this.props, l = s.vertical, u = s.reverse, c = o.getBoundingClientRect();
        return l ? u ? c.bottom : c.top : window.pageXOffset + (u ? c.right : c.left);
      }
    }, {
      key: "getSliderLength",
      value: function() {
        var o = this.sliderRef;
        if (!o)
          return 0;
        var s = o.getBoundingClientRect();
        return this.props.vertical ? s.height : s.width;
      }
    }, {
      key: "addDocumentTouchEvents",
      value: function() {
        this.onTouchMoveListener = Mr(this.document, "touchmove", this.onTouchMove), this.onTouchUpListener = Mr(this.document, "touchend", this.onEnd);
      }
    }, {
      key: "addDocumentMouseEvents",
      value: function() {
        this.onMouseMoveListener = Mr(this.document, "mousemove", this.onMouseMove), this.onMouseUpListener = Mr(this.document, "mouseup", this.onEnd);
      }
    }, {
      key: "removeDocumentEvents",
      value: function() {
        this.onTouchMoveListener && this.onTouchMoveListener.remove(), this.onTouchUpListener && this.onTouchUpListener.remove(), this.onMouseMoveListener && this.onMouseMoveListener.remove(), this.onMouseUpListener && this.onMouseUpListener.remove();
      }
    }, {
      key: "focus",
      value: function() {
        this.props.disabled || this.handlesRefs[0].focus();
      }
    }, {
      key: "blur",
      value: function() {
        var o = this;
        this.props.disabled || Object.keys(this.handlesRefs).forEach(function(s) {
          o.handlesRefs[s] && o.handlesRefs[s].blur && o.handlesRefs[s].blur();
        });
      }
    }, {
      key: "calcValue",
      value: function(o) {
        var s = this.props, l = s.vertical, u = s.min, c = s.max, f = Math.abs(Math.max(o, 0) / this.getSliderLength()), d = l ? (1 - f) * (c - u) + u : f * (c - u) + u;
        return d;
      }
    }, {
      key: "calcValueByPos",
      value: function(o) {
        var s = this.props.reverse ? -1 : 1, l = s * (o - this.getSliderStart()), u = this.trimAlignValue(this.calcValue(l));
        return u;
      }
    }, {
      key: "calcOffset",
      value: function(o) {
        var s = this.props, l = s.min, u = s.max, c = (o - l) / (u - l);
        return c * 100;
      }
    }, {
      key: "saveHandle",
      value: function(o, s) {
        this.handlesRefs[o] = s;
      }
    }, {
      key: "render",
      value: function() {
        var o, s = this.props, l = s.prefixCls, u = s.className, c = s.marks, f = s.dots, d = s.step, p = s.included, m = s.disabled, S = s.vertical, w = s.reverse, C = s.min, y = s.max, T = s.children, R = s.maximumTrackStyle, P = s.style, N = s.railStyle, L = s.dotStyle, W = s.activeDotStyle, Y = yl(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "render", this).call(this), re = Y.tracks, z = Y.handles, Q = bn(l, (o = {}, nt(o, l + "-with-marks", Object.keys(c).length), nt(o, l + "-disabled", m), nt(o, l + "-vertical", S), nt(o, u, u), o));
        return pe.createElement(
          "div",
          {
            ref: this.saveSlider,
            className: Q,
            onTouchStart: m ? Rr : this.onTouchStart,
            onMouseDown: m ? Rr : this.onMouseDown,
            onMouseUp: m ? Rr : this.onMouseUp,
            onKeyDown: m ? Rr : this.onKeyDown,
            onFocus: m ? Rr : this.onFocus,
            onBlur: m ? Rr : this.onBlur,
            style: P
          },
          pe.createElement("div", {
            className: l + "-rail",
            style: ct({}, R, N)
          }),
          re,
          pe.createElement(m0, {
            prefixCls: l,
            vertical: S,
            reverse: w,
            marks: c,
            dots: f,
            step: d,
            included: p,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: y,
            min: C,
            dotStyle: L,
            activeDotStyle: W
          }),
          z,
          pe.createElement(y0, {
            className: l + "-mark",
            onClickLabel: m ? Rr : this.onClickMarkLabel,
            vertical: S,
            marks: c,
            included: p,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: y,
            min: C,
            reverse: w
          }),
          T
        );
      }
    }]), i;
  }(e), t.displayName = "ComponentEnhancer(" + e.displayName + ")", t.propTypes = ct({}, e.propTypes, {
    min: D.number,
    max: D.number,
    step: D.number,
    marks: D.object,
    included: D.bool,
    className: D.string,
    prefixCls: D.string,
    disabled: D.bool,
    children: D.any,
    onBeforeChange: D.func,
    onChange: D.func,
    onAfterChange: D.func,
    handle: D.func,
    dots: D.bool,
    vertical: D.bool,
    style: D.object,
    reverse: D.bool,
    minimumTrackStyle: D.object,
    // just for compatibility, will be deperecate
    maximumTrackStyle: D.object,
    // just for compatibility, will be deperecate
    handleStyle: D.oneOfType([D.object, D.arrayOf(D.object)]),
    trackStyle: D.oneOfType([D.object, D.arrayOf(D.object)]),
    railStyle: D.object,
    dotStyle: D.object,
    activeDotStyle: D.object,
    autoFocus: D.bool,
    onFocus: D.func,
    onBlur: D.func
  }), t.defaultProps = ct({}, e.defaultProps, {
    prefixCls: "rc-slider",
    className: "",
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function(i) {
      var a = i.index, o = zn(i, ["index"]);
      return delete o.dragging, o.value === null ? null : pe.createElement(bo, ct({}, o, { key: a }));
    },
    onBeforeChange: Rr,
    onChange: Rr,
    onAfterChange: Rr,
    included: !0,
    disabled: !1,
    dots: !1,
    vertical: !1,
    reverse: !1,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), r;
}
var C0 = function(e) {
  or(t, e);
  function t(r) {
    ar(this, t);
    var n = Pt(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
    n.onEnd = function(o) {
      var s = n.state.dragging;
      n.removeDocumentEvents(), (s || o) && n.props.onAfterChange(n.getValue()), n.setState({ dragging: !1 });
    };
    var i = r.defaultValue !== void 0 ? r.defaultValue : r.min, a = r.value !== void 0 ? r.value : i;
    return n.state = {
      value: n.trimAlignValue(a),
      dragging: !1
    }, Zt(!("minimumTrackStyle" in r), "minimumTrackStyle will be deprecated, please use trackStyle instead."), Zt(!("maximumTrackStyle" in r), "maximumTrackStyle will be deprecated, please use railStyle instead."), n;
  }
  return cn(t, [{
    key: "componentDidUpdate",
    value: function(n, i) {
      if ("value" in this.props || "min" in this.props || "max" in this.props) {
        var a = this.props, o = a.value, s = a.onChange, l = o !== void 0 ? o : i.value, u = this.trimAlignValue(l, this.props);
        u !== i.value && (this.setState({ value: u }), b0(l, this.props) && s(u));
      }
    }
  }, {
    key: "onChange",
    value: function(n) {
      var i = this.props, a = !("value" in i), o = n.value > this.props.max ? ct({}, n, { value: this.props.max }) : n;
      a && this.setState(o);
      var s = o.value;
      i.onChange(s);
    }
  }, {
    key: "onStart",
    value: function(n) {
      this.setState({ dragging: !0 });
      var i = this.props, a = this.getValue();
      i.onBeforeChange(a);
      var o = this.calcValueByPos(n);
      this.startValue = o, this.startPosition = n, o !== a && (this.prevMovedHandleIndex = 0, this.onChange({ value: o }));
    }
  }, {
    key: "onMove",
    value: function(n, i) {
      Yn(n);
      var a = this.state.value, o = this.calcValueByPos(i);
      o !== a && this.onChange({ value: o });
    }
  }, {
    key: "onKeyboard",
    value: function(n) {
      var i = this.props, a = i.reverse, o = i.vertical, s = S0(n, o, a);
      if (s) {
        Yn(n);
        var l = this.state, u = l.value, c = s(u, this.props), f = this.trimAlignValue(c);
        if (f === u)
          return;
        this.onChange({ value: f }), this.props.onAfterChange(f), this.onEnd();
      }
    }
  }, {
    key: "getValue",
    value: function() {
      return this.state.value;
    }
  }, {
    key: "getLowerBound",
    value: function() {
      return this.props.min;
    }
  }, {
    key: "getUpperBound",
    value: function() {
      return this.state.value;
    }
  }, {
    key: "trimAlignValue",
    value: function(n) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (n === null)
        return null;
      var a = ct({}, this.props, i), o = fd(n, a);
      return w0(o, a);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.prefixCls, o = i.vertical, s = i.included, l = i.disabled, u = i.minimumTrackStyle, c = i.trackStyle, f = i.handleStyle, d = i.tabIndex, p = i.min, m = i.max, S = i.reverse, w = i.handle, C = this.state, y = C.value, T = C.dragging, R = this.calcOffset(y), P = w({
        className: a + "-handle",
        prefixCls: a,
        vertical: o,
        offset: R,
        value: y,
        dragging: T,
        disabled: l,
        min: p,
        max: m,
        reverse: S,
        index: 0,
        tabIndex: d,
        style: f[0] || f,
        ref: function(Y) {
          return n.saveHandle(0, Y);
        }
      }), N = c[0] || c, L = pe.createElement(v0, {
        className: a + "-track",
        vertical: o,
        included: s,
        offset: 0,
        reverse: S,
        length: R,
        style: ct({}, u, N)
      });
      return { tracks: L, handles: P };
    }
  }]), t;
}(pe.Component);
C0.propTypes = {
  defaultValue: D.number,
  value: D.number,
  disabled: D.bool,
  autoFocus: D.bool,
  tabIndex: D.number,
  reverse: D.bool,
  min: D.number,
  max: D.number
};
const Gn = x0(C0);
function _0() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function T0(e) {
  function t(r) {
    var n = this.constructor.getDerivedStateFromProps(e, r);
    return n ?? null;
  }
  this.setState(t.bind(this));
}
function P0(e, t) {
  try {
    var r = this.props, n = this.state;
    this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      r,
      n
    );
  } finally {
    this.props = r, this.state = n;
  }
}
_0.__suppressDeprecationWarning = !0;
T0.__suppressDeprecationWarning = !0;
P0.__suppressDeprecationWarning = !0;
function D0(e) {
  var t = e.prototype;
  if (!t || !t.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof e.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function")
    return e;
  var r = null, n = null, i = null;
  if (typeof t.componentWillMount == "function" ? r = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (r = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? n = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (n = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? i = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (i = "UNSAFE_componentWillUpdate"), r !== null || n !== null || i !== null) {
    var a = e.displayName || e.name, o = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + a + " uses " + o + " but also contains the following legacy lifecycles:" + (r !== null ? `
  ` + r : "") + (n !== null ? `
  ` + n : "") + (i !== null ? `
  ` + i : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof e.getDerivedStateFromProps == "function" && (t.componentWillMount = _0, t.componentWillReceiveProps = T0), typeof t.getSnapshotBeforeUpdate == "function") {
    if (typeof t.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    t.componentWillUpdate = P0;
    var s = t.componentDidUpdate;
    t.componentDidUpdate = function(u, c, f) {
      var d = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : f;
      s.call(this, u, c, d);
    };
  }
  return e;
}
var nE = function(t, r, n, i) {
  var a = n ? n.call(i, t, r) : void 0;
  if (a !== void 0)
    return !!a;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var o = Object.keys(t), s = Object.keys(r);
  if (o.length !== s.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(r), u = 0; u < o.length; u++) {
    var c = o[u];
    if (!l(c))
      return !1;
    var f = t[c], d = r[c];
    if (a = n ? n.call(i, f, d, c) : void 0, a === !1 || a === void 0 && f !== d)
      return !1;
  }
  return !0;
};
const iE = /* @__PURE__ */ nr(nE);
var va = function(t) {
  var r = t.value, n = t.handle, i = t.bounds, a = t.props, o = a.allowCross, s = a.pushable, l = Number(s), u = fd(r, a), c = u;
  return !o && n != null && i !== void 0 && (n > 0 && u <= i[n - 1] + l && (c = i[n - 1] + l), n < i.length - 1 && u >= i[n + 1] - l && (c = i[n + 1] - l)), w0(c, a);
}, $i = function(e) {
  or(t, e);
  function t(r) {
    ar(this, t);
    var n = Pt(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
    n.onEnd = function(d) {
      var p = n.state.handle;
      n.removeDocumentEvents(), (p !== null || d) && n.props.onAfterChange(n.getValue()), n.setState({
        handle: null
      });
    };
    var i = r.count, a = r.min, o = r.max, s = Array.apply(void 0, Aa(Array(i + 1))).map(function() {
      return a;
    }), l = "defaultValue" in r ? r.defaultValue : s, u = r.value !== void 0 ? r.value : l, c = u.map(function(d, p) {
      return va({
        value: d,
        handle: p,
        props: r
      });
    }), f = c[0] === o ? 0 : c.length - 1;
    return n.state = {
      handle: null,
      recent: f,
      bounds: c
    }, n;
  }
  return cn(t, [{
    key: "componentDidUpdate",
    value: function(n, i) {
      var a = this;
      if (("value" in this.props || "min" in this.props || "max" in this.props) && !(this.props.min === n.min && this.props.max === n.max && iE(this.props.value, n.value))) {
        var o = this.props, s = o.onChange, l = o.value, u = l || i.bounds;
        if (u.some(function(f) {
          return b0(f, a.props);
        })) {
          var c = u.map(function(f) {
            return fd(f, a.props);
          });
          s(c);
        }
      }
    }
  }, {
    key: "onChange",
    value: function(n) {
      var i = this.props, a = !("value" in i);
      if (a)
        this.setState(n);
      else {
        var o = {};
        ["handle", "recent"].forEach(function(u) {
          n[u] !== void 0 && (o[u] = n[u]);
        }), Object.keys(o).length && this.setState(o);
      }
      var s = ct({}, this.state, n), l = s.bounds;
      i.onChange(l);
    }
  }, {
    key: "onStart",
    value: function(n) {
      var i = this.props, a = this.state, o = this.getValue();
      i.onBeforeChange(o);
      var s = this.calcValueByPos(n);
      this.startValue = s, this.startPosition = n;
      var l = this.getClosestBound(s);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(s, l), this.setState({
        handle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });
      var u = o[this.prevMovedHandleIndex];
      if (s !== u) {
        var c = [].concat(Aa(a.bounds));
        c[this.prevMovedHandleIndex] = s, this.onChange({ bounds: c });
      }
    }
  }, {
    key: "onMove",
    value: function(n, i) {
      Yn(n);
      var a = this.state, o = this.calcValueByPos(i), s = a.bounds[a.handle];
      o !== s && this.moveTo(o);
    }
  }, {
    key: "onKeyboard",
    value: function(n) {
      var i = this.props, a = i.reverse, o = i.vertical, s = S0(n, o, a);
      if (s) {
        Yn(n);
        var l = this.state, u = this.props, c = l.bounds, f = l.handle, d = c[f === null ? l.recent : f], p = s(d, u), m = va({
          value: p,
          handle: f,
          bounds: l.bounds,
          props: u
        });
        if (m === d)
          return;
        var S = !0;
        this.moveTo(m, S);
      }
    }
  }, {
    key: "getValue",
    value: function() {
      return this.state.bounds;
    }
  }, {
    key: "getClosestBound",
    value: function(n) {
      for (var i = this.state.bounds, a = 0, o = 1; o < i.length - 1; ++o)
        n >= i[o] && (a = o);
      return Math.abs(i[a + 1] - n) < Math.abs(i[a] - n) && (a += 1), a;
    }
  }, {
    key: "getBoundNeedMoving",
    value: function(n, i) {
      var a = this.state, o = a.bounds, s = a.recent, l = i, u = o[i + 1] === o[i];
      return u && o[s] === o[i] && (l = s), u && n !== o[i + 1] && (l = n < o[i + 1] ? i : i + 1), l;
    }
  }, {
    key: "getLowerBound",
    value: function() {
      return this.state.bounds[0];
    }
  }, {
    key: "getUpperBound",
    value: function() {
      var n = this.state.bounds;
      return n[n.length - 1];
    }
    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */
  }, {
    key: "getPoints",
    value: function() {
      var n = this.props, i = n.marks, a = n.step, o = n.min, s = n.max, l = this._getPointsCache;
      if (!l || l.marks !== i || l.step !== a) {
        var u = ct({}, i);
        if (a !== null)
          for (var c = o; c <= s; c += a)
            u[c] = c;
        var f = Object.keys(u).map(parseFloat);
        f.sort(function(d, p) {
          return d - p;
        }), this._getPointsCache = { marks: i, step: a, points: f };
      }
      return this._getPointsCache.points;
    }
  }, {
    key: "moveTo",
    value: function(n, i) {
      var a = this, o = this.state, s = this.props, l = [].concat(Aa(o.bounds)), u = o.handle === null ? o.recent : o.handle;
      l[u] = n;
      var c = u;
      s.pushable !== !1 ? this.pushSurroundingHandles(l, c) : s.allowCross && (l.sort(function(f, d) {
        return f - d;
      }), c = l.indexOf(n)), this.onChange({
        recent: c,
        handle: c,
        bounds: l
      }), i && (this.props.onAfterChange(l), this.setState({}, function() {
        a.handlesRefs[c].focus();
      }), this.onEnd());
    }
  }, {
    key: "pushSurroundingHandles",
    value: function(n, i) {
      var a = n[i], o = this.props.pushable;
      o = Number(o);
      var s = 0;
      if (n[i + 1] - a < o && (s = 1), a - n[i - 1] < o && (s = -1), s !== 0) {
        var l = i + s, u = s * (n[l] - a);
        this.pushHandle(n, l, s, o - u) || (n[i] = n[l] - s * o);
      }
    }
  }, {
    key: "pushHandle",
    value: function(n, i, a, o) {
      for (var s = n[i], l = n[i]; a * (l - s) < o; ) {
        if (!this.pushHandleOnePoint(n, i, a))
          return n[i] = s, !1;
        l = n[i];
      }
      return !0;
    }
  }, {
    key: "pushHandleOnePoint",
    value: function(n, i, a) {
      var o = this.getPoints(), s = o.indexOf(n[i]), l = s + a;
      if (l >= o.length || l < 0)
        return !1;
      var u = i + a, c = o[l], f = this.props.pushable, d = a * (n[u] - c);
      return this.pushHandle(n, u, a, f - d) ? (n[i] = c, !0) : !1;
    }
  }, {
    key: "trimAlignValue",
    value: function(n) {
      var i = this.state, a = i.handle, o = i.bounds;
      return va({
        value: n,
        handle: a,
        bounds: o,
        props: this.props
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.state, a = i.handle, o = i.bounds, s = this.props, l = s.prefixCls, u = s.vertical, c = s.included, f = s.disabled, d = s.min, p = s.max, m = s.reverse, S = s.handle, w = s.trackStyle, C = s.handleStyle, y = s.tabIndex, T = o.map(function(L) {
        return n.calcOffset(L);
      }), R = l + "-handle", P = o.map(function(L, W) {
        var Y, re = y[W] || 0;
        return (f || y[W] === null) && (re = null), S({
          className: bn((Y = {}, nt(Y, R, !0), nt(Y, R + "-" + (W + 1), !0), Y)),
          prefixCls: l,
          vertical: u,
          offset: T[W],
          value: L,
          dragging: a === W,
          index: W,
          tabIndex: re,
          min: d,
          max: p,
          reverse: m,
          disabled: f,
          style: C[W],
          ref: function(Q) {
            return n.saveHandle(W, Q);
          }
        });
      }), N = o.slice(0, -1).map(function(L, W) {
        var Y, re = W + 1, z = bn((Y = {}, nt(Y, l + "-track", !0), nt(Y, l + "-track-" + re, !0), Y));
        return pe.createElement(v0, {
          className: z,
          vertical: u,
          reverse: m,
          included: c,
          offset: T[re - 1],
          length: T[re] - T[re - 1],
          style: w[W],
          key: re
        });
      });
      return { tracks: N, handles: P };
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      if ("value" in n || "min" in n || "max" in n) {
        var a = n.value || i.bounds, o = a.map(function(s, l) {
          return va({
            value: s,
            handle: l,
            bounds: i.bounds,
            props: n
          });
        });
        return o.length === i.bounds.length && o.every(function(s, l) {
          return s === i.bounds[l];
        }) ? null : ct({}, i, {
          bounds: o
        });
      }
      return null;
    }
  }]), t;
}(pe.Component);
$i.displayName = "Range";
$i.propTypes = {
  autoFocus: D.bool,
  defaultValue: D.arrayOf(D.number),
  value: D.arrayOf(D.number),
  count: D.number,
  pushable: D.oneOfType([D.bool, D.number]),
  allowCross: D.bool,
  disabled: D.bool,
  reverse: D.bool,
  tabIndex: D.arrayOf(D.number),
  min: D.number,
  max: D.number
};
$i.defaultProps = {
  count: 1,
  allowCross: !0,
  pushable: !1,
  tabIndex: []
};
D0($i);
const aE = x0($i);
function Zc(e, t) {
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
function Ia(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ia = function(r) {
    return typeof r;
  } : Ia = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ia(e);
}
function oE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function sE(e, t, r) {
  return t && Wv(e.prototype, t), r && Wv(e, r), e;
}
function lE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Qc(e, t);
}
function Qc(e, t) {
  return Qc = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Qc(e, t);
}
function uE(e) {
  var t = dE();
  return function() {
    var n = $a(e), i;
    if (t) {
      var a = $a(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return cE(this, i);
  };
}
function cE(e, t) {
  return t && (Ia(t) === "object" || typeof t == "function") ? t : fE(e);
}
function fE(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $a(e) {
  return $a = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $a(e);
}
var dd = /* @__PURE__ */ function(e) {
  lE(r, e);
  var t = uE(r);
  function r() {
    var n;
    oE(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return n = t.call.apply(t, [this].concat(a)), n.removeContainer = function() {
      n.container && (Tr.unmountComponentAtNode(n.container), n.container.parentNode.removeChild(n.container), n.container = null);
    }, n.renderComponent = function(s, l) {
      var u = n.props, c = u.visible, f = u.getComponent, d = u.forceRender, p = u.getContainer, m = u.parent;
      (c || m._component || d) && (n.container || (n.container = p()), Tr.unstable_renderSubtreeIntoContainer(m, f(s), n.container, function() {
        l && l.call(this);
      }));
    }, n;
  }
  return sE(r, [{
    key: "componentDidMount",
    value: function() {
      this.props.autoMount && this.renderComponent();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.props.autoMount && this.renderComponent();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.props.autoDestroy && this.removeContainer();
    }
  }, {
    key: "render",
    value: function() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]), r;
}(pe.Component);
dd.propTypes = {
  autoMount: D.bool,
  autoDestroy: D.bool,
  visible: D.bool,
  forceRender: D.bool,
  parent: D.any,
  getComponent: D.func.isRequired,
  getContainer: D.func.isRequired,
  children: D.func.isRequired
};
dd.defaultProps = {
  autoMount: !0,
  autoDestroy: !0,
  forceRender: !1
};
function Na(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Na = function(r) {
    return typeof r;
  } : Na = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Na(e);
}
function pE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function hE(e, t, r) {
  return t && Hv(e.prototype, t), r && Hv(e, r), e;
}
function vE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ef(e, t);
}
function ef(e, t) {
  return ef = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, ef(e, t);
}
function gE(e) {
  var t = bE();
  return function() {
    var n = za(e), i;
    if (t) {
      var a = za(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return mE(this, i);
  };
}
function mE(e, t) {
  return t && (Na(t) === "object" || typeof t == "function") ? t : yE(e);
}
function yE(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function za(e) {
  return za = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, za(e);
}
var E0 = /* @__PURE__ */ function(e) {
  vE(r, e);
  var t = gE(r);
  function r() {
    return pE(this, r), t.apply(this, arguments);
  }
  return hE(r, [{
    key: "componentDidMount",
    value: function() {
      this.createContainer();
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props.didUpdate;
      a && a(i);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.removeContainer();
    }
  }, {
    key: "createContainer",
    value: function() {
      this._container = this.props.getContainer(), this.forceUpdate();
    }
  }, {
    key: "removeContainer",
    value: function() {
      this._container && this._container.parentNode.removeChild(this._container);
    }
  }, {
    key: "render",
    value: function() {
      return this._container ? Tr.createPortal(this.props.children, this._container) : null;
    }
  }]), r;
}(pe.Component);
E0.propTypes = {
  getContainer: D.func.isRequired,
  children: D.node.isRequired,
  didUpdate: D.func
};
function wE(e, t, r) {
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function SE(e, t, r) {
  var n = e[t] || {};
  return ct({}, n, r);
}
function xE(e, t, r, n) {
  var i = r.points;
  for (var a in e)
    if (e.hasOwnProperty(a) && wE(e[a].points, i, n))
      return t + "-placement-" + a;
  return "";
}
function Vv(e, t) {
  this[e] = t;
}
function Bv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Uv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bv(Object(r), !0).forEach(function(n) {
      CE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tf(e) {
  "@babel/helpers - typeof";
  return tf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tf(e);
}
function CE(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var pi, _E = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function Ya() {
  if (pi !== void 0)
    return pi;
  pi = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var r in _E)
    r + t in e && (pi = r);
  return pi;
}
function R0() {
  return Ya() ? "".concat(Ya(), "TransitionProperty") : "transitionProperty";
}
function wo() {
  return Ya() ? "".concat(Ya(), "Transform") : "transform";
}
function $v(e, t) {
  var r = R0();
  r && (e.style[r] = t, r !== "transitionProperty" && (e.style.transitionProperty = t));
}
function xl(e, t) {
  var r = wo();
  r && (e.style[r] = t, r !== "transform" && (e.style.transform = t));
}
function TE(e) {
  return e.style.transitionProperty || e.style[R0()];
}
function PE(e) {
  var t = window.getComputedStyle(e, null), r = t.getPropertyValue("transform") || t.getPropertyValue(wo());
  if (r && r !== "none") {
    var n = r.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(n[12] || n[4], 0),
      y: parseFloat(n[13] || n[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var DE = /matrix\((.*)\)/, EE = /matrix3d\((.*)\)/;
function RE(e, t) {
  var r = window.getComputedStyle(e, null), n = r.getPropertyValue("transform") || r.getPropertyValue(wo());
  if (n && n !== "none") {
    var i, a = n.match(DE);
    if (a)
      a = a[1], i = a.split(",").map(function(s) {
        return parseFloat(s, 10);
      }), i[4] = t.x, i[5] = t.y, xl(e, "matrix(".concat(i.join(","), ")"));
    else {
      var o = n.match(EE)[1];
      i = o.split(",").map(function(s) {
        return parseFloat(s, 10);
      }), i[12] = t.x, i[13] = t.y, xl(e, "matrix3d(".concat(i.join(","), ")"));
    }
  } else
    xl(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var OE = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, zi;
function zv(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function Vn(e, t, r) {
  var n = r;
  if (tf(t) === "object") {
    for (var i in t)
      t.hasOwnProperty(i) && Vn(e, i, t[i]);
    return;
  }
  if (typeof n < "u") {
    typeof n == "number" && (n = "".concat(n, "px")), e.style[t] = n;
    return;
  }
  return zi(e, t);
}
function kE(e) {
  var t, r, n, i = e.ownerDocument, a = i.body, o = i && i.documentElement;
  return t = e.getBoundingClientRect(), r = Math.floor(t.left), n = Math.floor(t.top), r -= o.clientLeft || a.clientLeft || 0, n -= o.clientTop || a.clientTop || 0, {
    left: r,
    top: n
  };
}
function O0(e, t) {
  var r = e["page".concat(t ? "Y" : "X", "Offset")], n = "scroll".concat(t ? "Top" : "Left");
  if (typeof r != "number") {
    var i = e.document;
    r = i.documentElement[n], typeof r != "number" && (r = i.body[n]);
  }
  return r;
}
function k0(e) {
  return O0(e);
}
function A0(e) {
  return O0(e, !0);
}
function Di(e) {
  var t = kE(e), r = e.ownerDocument, n = r.defaultView || r.parentWindow;
  return t.left += k0(n), t.top += A0(n), t;
}
function pd(e) {
  return e != null && e == e.window;
}
function I0(e) {
  return pd(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function AE(e, t, r) {
  var n = r, i = "", a = I0(e);
  return n = n || a.defaultView.getComputedStyle(e, null), n && (i = n.getPropertyValue(t) || n[t]), i;
}
var IE = new RegExp("^(".concat(OE, ")(?!px)[a-z%]+$"), "i"), NE = /^(top|right|bottom|left)$/, Cl = "currentStyle", _l = "runtimeStyle", pn = "left", ME = "px";
function LE(e, t) {
  var r = e[Cl] && e[Cl][t];
  if (IE.test(r) && !NE.test(t)) {
    var n = e.style, i = n[pn], a = e[_l][pn];
    e[_l][pn] = e[Cl][pn], n[pn] = t === "fontSize" ? "1em" : r || 0, r = n.pixelLeft + ME, n[pn] = i, e[_l][pn] = a;
  }
  return r === "" ? "auto" : r;
}
typeof window < "u" && (zi = window.getComputedStyle ? AE : LE);
function ga(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function Yv(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function Gv(e, t, r) {
  Vn(e, "position") === "static" && (e.style.position = "relative");
  var n = -999, i = -999, a = ga("left", r), o = ga("top", r), s = Yv(a), l = Yv(o);
  a !== "left" && (n = 999), o !== "top" && (i = 999);
  var u = "", c = Di(e);
  ("left" in t || "top" in t) && (u = TE(e) || "", $v(e, "none")), "left" in t && (e.style[s] = "", e.style[a] = "".concat(n, "px")), "top" in t && (e.style[l] = "", e.style[o] = "".concat(i, "px")), zv(e);
  var f = Di(e), d = {};
  for (var p in t)
    if (t.hasOwnProperty(p)) {
      var m = ga(p, r), S = p === "left" ? n : i, w = c[p] - f[p];
      m === p ? d[m] = S + w : d[m] = S - w;
    }
  Vn(e, d), zv(e), ("left" in t || "top" in t) && $v(e, u);
  var C = {};
  for (var y in t)
    if (t.hasOwnProperty(y)) {
      var T = ga(y, r), R = t[y] - c[y];
      y === T ? C[T] = d[T] + R : C[T] = d[T] - R;
    }
  Vn(e, C);
}
function FE(e, t) {
  var r = Di(e), n = PE(e), i = {
    x: n.x,
    y: n.y
  };
  "left" in t && (i.x = n.x + t.left - r.left), "top" in t && (i.y = n.y + t.top - r.top), RE(e, i);
}
function jE(e, t, r) {
  if (r.ignoreShake) {
    var n = Di(e), i = n.left.toFixed(0), a = n.top.toFixed(0), o = t.left.toFixed(0), s = t.top.toFixed(0);
    if (i === o && a === s)
      return;
  }
  r.useCssRight || r.useCssBottom ? Gv(e, t, r) : r.useCssTransform && wo() in document.body.style ? FE(e, t) : Gv(e, t, r);
}
function hd(e, t) {
  for (var r = 0; r < e.length; r++)
    t(e[r]);
}
function N0(e) {
  return zi(e, "boxSizing") === "border-box";
}
var qE = ["margin", "border", "padding"], rf = -1, WE = 2, nf = 1, HE = 0;
function VE(e, t, r) {
  var n = {}, i = e.style, a;
  for (a in t)
    t.hasOwnProperty(a) && (n[a] = i[a], i[a] = t[a]);
  r.call(e);
  for (a in t)
    t.hasOwnProperty(a) && (i[a] = n[a]);
}
function gi(e, t, r) {
  var n = 0, i, a, o;
  for (a = 0; a < t.length; a++)
    if (i = t[a], i)
      for (o = 0; o < r.length; o++) {
        var s = void 0;
        i === "border" ? s = "".concat(i).concat(r[o], "Width") : s = i + r[o], n += parseFloat(zi(e, s)) || 0;
      }
  return n;
}
var Lr = {
  getParent: function(t) {
    var r = t;
    do
      r.nodeType === 11 && r.host ? r = r.host : r = r.parentNode;
    while (r && r.nodeType !== 1 && r.nodeType !== 9);
    return r;
  }
};
hd(["Width", "Height"], function(e) {
  Lr["doc".concat(e)] = function(t) {
    var r = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      r.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      r.body["scroll".concat(e)],
      Lr["viewport".concat(e)](r)
    );
  }, Lr["viewport".concat(e)] = function(t) {
    var r = "client".concat(e), n = t.document, i = n.body, a = n.documentElement, o = a[r];
    return n.compatMode === "CSS1Compat" && o || i && i[r] || o;
  };
});
function Xv(e, t, r) {
  var n = r;
  if (pd(e))
    return t === "width" ? Lr.viewportWidth(e) : Lr.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? Lr.docWidth(e) : Lr.docHeight(e);
  var i = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], a = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), o = N0(e), s = 0;
  (a == null || a <= 0) && (a = void 0, s = zi(e, t), (s == null || Number(s) < 0) && (s = e.style[t] || 0), s = Math.floor(parseFloat(s)) || 0), n === void 0 && (n = o ? nf : rf);
  var l = a !== void 0 || o, u = a || s;
  return n === rf ? l ? u - gi(e, ["border", "padding"], i) : s : l ? n === nf ? u : u + (n === WE ? -gi(e, ["border"], i) : gi(e, ["margin"], i)) : s + gi(e, qE.slice(n), i);
}
var BE = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Kv() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, i = t[0];
  return i.offsetWidth !== 0 ? n = Xv.apply(void 0, t) : VE(i, BE, function() {
    n = Xv.apply(void 0, t);
  }), n;
}
hd(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  Lr["outer".concat(t)] = function(n, i) {
    return n && Kv(n, e, i ? HE : nf);
  };
  var r = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  Lr[e] = function(n, i) {
    var a = i;
    if (a !== void 0) {
      if (n) {
        var o = N0(n);
        return o && (a += gi(n, ["padding", "border"], r)), Vn(n, e, a);
      }
      return;
    }
    return n && Kv(n, e, rf);
  };
});
function M0(e, t) {
  for (var r in t)
    t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
var je = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var r = t.ownerDocument || t;
    return r.defaultView || r.parentWindow;
  },
  getDocument: I0,
  offset: function(t, r, n) {
    if (typeof r < "u")
      jE(t, r, n || {});
    else
      return Di(t);
  },
  isWindow: pd,
  each: hd,
  css: Vn,
  clone: function(t) {
    var r, n = {};
    for (r in t)
      t.hasOwnProperty(r) && (n[r] = t[r]);
    var i = t.overflow;
    if (i)
      for (r in t)
        t.hasOwnProperty(r) && (n.overflow[r] = t.overflow[r]);
    return n;
  },
  mix: M0,
  getWindowScrollLeft: function(t) {
    return k0(t);
  },
  getWindowScrollTop: function(t) {
    return A0(t);
  },
  merge: function() {
    for (var t = {}, r = 0; r < arguments.length; r++)
      je.mix(t, r < 0 || arguments.length <= r ? void 0 : arguments[r]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
M0(je, Lr);
var Tl = je.getParent;
function af(e) {
  if (je.isWindow(e) || e.nodeType === 9)
    return null;
  var t = je.getDocument(e), r = t.body, n, i = je.css(e, "position"), a = i === "fixed" || i === "absolute";
  if (!a)
    return e.nodeName.toLowerCase() === "html" ? null : Tl(e);
  for (n = Tl(e); n && n !== r && n.nodeType !== 9; n = Tl(n))
    if (i = je.css(n, "position"), i !== "static")
      return n;
  return null;
}
var Jv = je.getParent;
function UE(e) {
  if (je.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = je.getDocument(e), r = t.body, n = null;
  for (
    n = Jv(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    n && n !== r && n !== t;
    n = Jv(n)
  ) {
    var i = je.css(n, "position");
    if (i === "fixed")
      return !0;
  }
  return !1;
}
function vd(e, t) {
  for (var r = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, n = af(e), i = je.getDocument(e), a = i.defaultView || i.parentWindow, o = i.body, s = i.documentElement; n; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || n.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    n !== o && n !== s && je.css(n, "overflow") !== "visible") {
      var l = je.offset(n);
      l.left += n.clientLeft, l.top += n.clientTop, r.top = Math.max(r.top, l.top), r.right = Math.min(
        r.right,
        // consider area without scrollBar
        l.left + n.clientWidth
      ), r.bottom = Math.min(r.bottom, l.top + n.clientHeight), r.left = Math.max(r.left, l.left);
    } else if (n === o || n === s)
      break;
    n = af(n);
  }
  var u = null;
  if (!je.isWindow(e) && e.nodeType !== 9) {
    u = e.style.position;
    var c = je.css(e, "position");
    c === "absolute" && (e.style.position = "fixed");
  }
  var f = je.getWindowScrollLeft(a), d = je.getWindowScrollTop(a), p = je.viewportWidth(a), m = je.viewportHeight(a), S = s.scrollWidth, w = s.scrollHeight, C = window.getComputedStyle(o);
  if (C.overflowX === "hidden" && (S = a.innerWidth), C.overflowY === "hidden" && (w = a.innerHeight), e.style && (e.style.position = u), t || UE(e))
    r.left = Math.max(r.left, f), r.top = Math.max(r.top, d), r.right = Math.min(r.right, f + p), r.bottom = Math.min(r.bottom, d + m);
  else {
    var y = Math.max(S, f + p);
    r.right = Math.min(r.right, y);
    var T = Math.max(w, d + m);
    r.bottom = Math.min(r.bottom, T);
  }
  return r.top >= 0 && r.left >= 0 && r.bottom > r.top && r.right > r.left ? r : null;
}
function $E(e, t, r, n) {
  var i = je.clone(e), a = {
    width: t.width,
    height: t.height
  };
  return n.adjustX && i.left < r.left && (i.left = r.left), n.resizeWidth && i.left >= r.left && i.left + a.width > r.right && (a.width -= i.left + a.width - r.right), n.adjustX && i.left + a.width > r.right && (i.left = Math.max(r.right - a.width, r.left)), n.adjustY && i.top < r.top && (i.top = r.top), n.resizeHeight && i.top >= r.top && i.top + a.height > r.bottom && (a.height -= i.top + a.height - r.bottom), n.adjustY && i.top + a.height > r.bottom && (i.top = Math.max(r.bottom - a.height, r.top)), je.mix(i, a);
}
function gd(e) {
  var t, r, n;
  if (!je.isWindow(e) && e.nodeType !== 9)
    t = je.offset(e), r = je.outerWidth(e), n = je.outerHeight(e);
  else {
    var i = je.getWindow(e);
    t = {
      left: je.getWindowScrollLeft(i),
      top: je.getWindowScrollTop(i)
    }, r = je.viewportWidth(i), n = je.viewportHeight(i);
  }
  return t.width = r, t.height = n, t;
}
function Zv(e, t) {
  var r = t.charAt(0), n = t.charAt(1), i = e.width, a = e.height, o = e.left, s = e.top;
  return r === "c" ? s += a / 2 : r === "b" && (s += a), n === "c" ? o += i / 2 : n === "r" && (o += i), {
    left: o,
    top: s
  };
}
function ma(e, t, r, n, i) {
  var a = Zv(t, r[1]), o = Zv(e, r[0]), s = [o.left - a.left, o.top - a.top];
  return {
    left: Math.round(e.left - s[0] + n[0] - i[0]),
    top: Math.round(e.top - s[1] + n[1] - i[1])
  };
}
function Qv(e, t, r) {
  return e.left < r.left || e.left + t.width > r.right;
}
function eg(e, t, r) {
  return e.top < r.top || e.top + t.height > r.bottom;
}
function zE(e, t, r) {
  return e.left > r.right || e.left + t.width < r.left;
}
function YE(e, t, r) {
  return e.top > r.bottom || e.top + t.height < r.top;
}
function ya(e, t, r) {
  var n = [];
  return je.each(e, function(i) {
    n.push(i.replace(t, function(a) {
      return r[a];
    }));
  }), n;
}
function ba(e, t) {
  return e[t] = -e[t], e;
}
function tg(e, t) {
  var r;
  return /%$/.test(e) ? r = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : r = parseInt(e, 10), r || 0;
}
function rg(e, t) {
  e[0] = tg(e[0], t.width), e[1] = tg(e[1], t.height);
}
function L0(e, t, r, n) {
  var i = r.points, a = r.offset || [0, 0], o = r.targetOffset || [0, 0], s = r.overflow, l = r.source || e;
  a = [].concat(a), o = [].concat(o), s = s || {};
  var u = {}, c = 0, f = !!(s && s.alwaysByViewport), d = vd(l, f), p = gd(l);
  rg(a, p), rg(o, t);
  var m = ma(p, t, i, a, o), S = je.merge(p, m);
  if (d && (s.adjustX || s.adjustY) && n) {
    if (s.adjustX && Qv(m, p, d)) {
      var w = ya(i, /[lr]/gi, {
        l: "r",
        r: "l"
      }), C = ba(a, 0), y = ba(o, 0), T = ma(p, t, w, C, y);
      zE(T, p, d) || (c = 1, i = w, a = C, o = y);
    }
    if (s.adjustY && eg(m, p, d)) {
      var R = ya(i, /[tb]/gi, {
        t: "b",
        b: "t"
      }), P = ba(a, 1), N = ba(o, 1), L = ma(p, t, R, P, N);
      YE(L, p, d) || (c = 1, i = R, a = P, o = N);
    }
    c && (m = ma(p, t, i, a, o), je.mix(S, m));
    var W = Qv(m, p, d), Y = eg(m, p, d);
    if (W || Y) {
      var re = i;
      W && (re = ya(i, /[lr]/gi, {
        l: "r",
        r: "l"
      })), Y && (re = ya(i, /[tb]/gi, {
        t: "b",
        b: "t"
      })), i = re, a = r.offset || [0, 0], o = r.targetOffset || [0, 0];
    }
    u.adjustX = s.adjustX && W, u.adjustY = s.adjustY && Y, (u.adjustX || u.adjustY) && (S = $E(m, p, d, u));
  }
  return S.width !== p.width && je.css(l, "width", je.width(l) + S.width - p.width), S.height !== p.height && je.css(l, "height", je.height(l) + S.height - p.height), je.offset(l, {
    left: S.left,
    top: S.top
  }, {
    useCssRight: r.useCssRight,
    useCssBottom: r.useCssBottom,
    useCssTransform: r.useCssTransform,
    ignoreShake: r.ignoreShake
  }), {
    points: i,
    offset: a,
    targetOffset: o,
    overflow: u
  };
}
function GE(e, t) {
  var r = vd(e, t), n = gd(e);
  return !r || n.left + n.width <= r.left || n.top + n.height <= r.top || n.left >= r.right || n.top >= r.bottom;
}
function md(e, t, r) {
  var n = r.target || t, i = gd(n), a = !GE(n, r.overflow && r.overflow.alwaysByViewport);
  return L0(e, i, r, a);
}
md.__getOffsetParent = af;
md.__getVisibleRectForElement = vd;
function XE(e, t, r) {
  var n, i, a = je.getDocument(e), o = a.defaultView || a.parentWindow, s = je.getWindowScrollLeft(o), l = je.getWindowScrollTop(o), u = je.viewportWidth(o), c = je.viewportHeight(o);
  "pageX" in t ? n = t.pageX : n = s + t.clientX, "pageY" in t ? i = t.pageY : i = l + t.clientY;
  var f = {
    left: n,
    top: i,
    width: 0,
    height: 0
  }, d = n >= 0 && n <= s + u && i >= 0 && i <= l + c, p = [r.points[0], "cc"];
  return L0(e, f, Uv(Uv({}, r), {}, {
    points: p
  }), d);
}
function KE(e, t) {
  var r = void 0;
  function n() {
    r && (clearTimeout(r), r = null);
  }
  function i() {
    n(), r = setTimeout(e, t);
  }
  return i.clear = n, i;
}
function JE(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function ng(e) {
  return e && typeof e == "object" && e.window === e;
}
function ig(e, t) {
  var r = Math.floor(e), n = Math.floor(t);
  return Math.abs(r - n) <= 1;
}
function ZE(e, t) {
  e !== document.activeElement && Zc(t, e) && e.focus();
}
function Pl(e) {
  return typeof e != "function" || !e ? null : e();
}
function Dl(e) {
  return typeof e != "object" || !e ? null : e;
}
var Ga = function(e) {
  or(t, e);
  function t() {
    var r, n, i, a;
    ar(this, t);
    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    return a = (n = (i = Pt(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [this].concat(s))), i), i.forceAlign = function() {
      var u = i.props, c = u.disabled, f = u.target, d = u.align, p = u.onAlign;
      if (!c && f) {
        var m = Tr.findDOMNode(i), S = void 0, w = Pl(f), C = Dl(f), y = document.activeElement;
        w ? S = md(m, w, d) : C && (S = XE(m, C, d)), ZE(y, m), p && p(m, S);
      }
    }, n), Pt(i, a);
  }
  return cn(t, [{
    key: "componentDidMount",
    value: function() {
      var n = this.props;
      this.forceAlign(), !n.disabled && n.monitorWindowResize && this.startMonitorWindowResize();
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var i = !1, a = this.props;
      if (!a.disabled) {
        var o = Tr.findDOMNode(this), s = o ? o.getBoundingClientRect() : null;
        if (n.disabled)
          i = !0;
        else {
          var l = Pl(n.target), u = Pl(a.target), c = Dl(n.target), f = Dl(a.target);
          ng(l) && ng(u) ? i = !1 : (l !== u || // Element change
          l && !u && f || // Change from element to point
          c && f && u || // Change from point to element
          f && !JE(c, f)) && (i = !0);
          var d = this.sourceRect || {};
          !i && o && (!ig(d.width, s.width) || !ig(d.height, s.height)) && (i = !0);
        }
        this.sourceRect = s;
      }
      i && this.forceAlign(), a.monitorWindowResize && !a.disabled ? this.startMonitorWindowResize() : this.stopMonitorWindowResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopMonitorWindowResize();
    }
  }, {
    key: "startMonitorWindowResize",
    value: function() {
      this.resizeHandler || (this.bufferMonitor = KE(this.forceAlign, this.props.monitorBufferTime), this.resizeHandler = Mr(window, "resize", this.bufferMonitor));
    }
  }, {
    key: "stopMonitorWindowResize",
    value: function() {
      this.resizeHandler && (this.bufferMonitor.clear(), this.resizeHandler.remove(), this.resizeHandler = null);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.childrenProps, o = i.children, s = pe.Children.only(o);
      if (a) {
        var l = {}, u = Object.keys(a);
        return u.forEach(function(c) {
          l[c] = n.props[a[c]];
        }), pe.cloneElement(s, l);
      }
      return s;
    }
  }]), t;
}(Ue);
Ga.propTypes = {
  childrenProps: D.object,
  align: D.object.isRequired,
  target: D.oneOfType([D.func, D.shape({
    clientX: D.number,
    clientY: D.number,
    pageX: D.number,
    pageY: D.number
  })]),
  onAlign: D.func,
  monitorBufferTime: D.number,
  monitorWindowResize: D.bool,
  disabled: D.bool,
  children: D.any
};
Ga.defaultProps = {
  target: function() {
    return window;
  },
  monitorBufferTime: 50,
  monitorWindowResize: !1,
  disabled: !1
};
var QE = function(t) {
  var r = t.prototype;
  if (!r || !r.isReactComponent)
    throw new Error("Can only polyfill class components");
  return typeof r.componentWillReceiveProps != "function" || !pe.Profiler || (r.UNSAFE_componentWillReceiveProps = r.componentWillReceiveProps, delete r.componentWillReceiveProps), t;
};
function bi(e) {
  var t = [];
  return pe.Children.forEach(e, function(r) {
    t.push(r);
  }), t;
}
function Mn(e, t) {
  var r = null;
  return e && e.forEach(function(n) {
    r || n && n.key === t && (r = n);
  }), r;
}
function El(e, t, r) {
  var n = null;
  return e && e.forEach(function(i) {
    if (i && i.key === t && i.props[r]) {
      if (n)
        throw new Error("two child with same key for <rc-animate> children");
      n = i;
    }
  }), n;
}
function eR(e, t, r) {
  var n = e.length === t.length;
  return n && e.forEach(function(i, a) {
    var o = t[a];
    i && o && (i && !o || !i && o || i.key !== o.key || r && i.props[r] !== o.props[r]) && (n = !1);
  }), n;
}
function tR(e, t) {
  var r = [], n = {}, i = [];
  return e.forEach(function(a) {
    a && Mn(t, a.key) ? i.length && (n[a.key] = i, i = []) : i.push(a);
  }), t.forEach(function(a) {
    a && Object.prototype.hasOwnProperty.call(n, a.key) && (r = r.concat(n[a.key])), r.push(a);
  }), r = r.concat(i), r;
}
var Rl = {
  transitionstart: {
    transition: "transitionstart",
    WebkitTransition: "webkitTransitionStart",
    MozTransition: "mozTransitionStart",
    OTransition: "oTransitionStart",
    msTransition: "MSTransitionStart"
  },
  animationstart: {
    animation: "animationstart",
    WebkitAnimation: "webkitAnimationStart",
    MozAnimation: "mozAnimationStart",
    OAnimation: "oAnimationStart",
    msAnimation: "MSAnimationStart"
  }
}, Ol = {
  transitionend: {
    transition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "mozTransitionEnd",
    OTransition: "oTransitionEnd",
    msTransition: "MSTransitionEnd"
  },
  animationend: {
    animation: "animationend",
    WebkitAnimation: "webkitAnimationEnd",
    MozAnimation: "mozAnimationEnd",
    OAnimation: "oAnimationEnd",
    msAnimation: "MSAnimationEnd"
  }
}, Ln = [], Fn = [];
function rR() {
  var e = document.createElement("div"), t = e.style;
  "AnimationEvent" in window || (delete Rl.animationstart.animation, delete Ol.animationend.animation), "TransitionEvent" in window || (delete Rl.transitionstart.transition, delete Ol.transitionend.transition);
  function r(n, i) {
    for (var a in n)
      if (n.hasOwnProperty(a)) {
        var o = n[a];
        for (var s in o)
          if (s in t) {
            i.push(o[s]);
            break;
          }
      }
  }
  r(Rl, Ln), r(Ol, Fn);
}
typeof window < "u" && typeof document < "u" && rR();
function ag(e, t, r) {
  e.addEventListener(t, r, !1);
}
function og(e, t, r) {
  e.removeEventListener(t, r, !1);
}
var Ei = {
  // Start events
  startEvents: Ln,
  addStartEventListener: function(t, r) {
    if (Ln.length === 0) {
      window.setTimeout(r, 0);
      return;
    }
    Ln.forEach(function(n) {
      ag(t, n, r);
    });
  },
  removeStartEventListener: function(t, r) {
    Ln.length !== 0 && Ln.forEach(function(n) {
      og(t, n, r);
    });
  },
  // End events
  endEvents: Fn,
  addEndEventListener: function(t, r) {
    if (Fn.length === 0) {
      window.setTimeout(r, 0);
      return;
    }
    Fn.forEach(function(n) {
      ag(t, n, r);
    });
  },
  removeEndEventListener: function(t, r) {
    Fn.length !== 0 && Fn.forEach(function(n) {
      og(t, n, r);
    });
  }
}, kl, sg;
function lg() {
  return sg || (sg = 1, kl = function(e, t) {
    if (e.indexOf)
      return e.indexOf(t);
    for (var r = 0; r < e.length; ++r)
      if (e[r] === t)
        return r;
    return -1;
  }), kl;
}
try {
  var So = lg();
} catch {
  var So = lg();
}
var nR = /\s+/, iR = Object.prototype.toString, aR = function(e) {
  return new rn(e);
};
function rn(e) {
  if (!e || !e.nodeType)
    throw new Error("A DOM element reference is required");
  this.el = e, this.list = e.classList;
}
rn.prototype.add = function(e) {
  if (this.list)
    return this.list.add(e), this;
  var t = this.array(), r = So(t, e);
  return ~r || t.push(e), this.el.className = t.join(" "), this;
};
rn.prototype.remove = function(e) {
  if (iR.call(e) == "[object RegExp]")
    return this.removeMatching(e);
  if (this.list)
    return this.list.remove(e), this;
  var t = this.array(), r = So(t, e);
  return ~r && t.splice(r, 1), this.el.className = t.join(" "), this;
};
rn.prototype.removeMatching = function(e) {
  for (var t = this.array(), r = 0; r < t.length; r++)
    e.test(t[r]) && this.remove(t[r]);
  return this;
};
rn.prototype.toggle = function(e, t) {
  return this.list ? (typeof t < "u" ? t !== this.list.toggle(e, t) && this.list.toggle(e) : this.list.toggle(e), this) : (typeof t < "u" ? t ? this.add(e) : this.remove(e) : this.has(e) ? this.remove(e) : this.add(e), this);
};
rn.prototype.array = function() {
  var e = this.el.getAttribute("class") || "", t = e.replace(/^\s+|\s+$/g, ""), r = t.split(nR);
  return r[0] === "" && r.shift(), r;
};
rn.prototype.has = rn.prototype.contains = function(e) {
  return this.list ? this.list.contains(e) : !!~So(this.array(), e);
};
const oR = /* @__PURE__ */ nr(aR);
var yd = Ei.endEvents.length !== 0, sR = [
  "Webkit",
  "Moz",
  "O",
  // ms is special .... !
  "ms"
], ug = ["-webkit-", "-moz-", "-o-", "ms-", ""];
function wa(e, t) {
  for (var r = window.getComputedStyle(e, null), n = "", i = 0; i < ug.length && (n = r.getPropertyValue(ug[i] + t), !n); i++)
    ;
  return n;
}
function F0(e) {
  if (yd) {
    var t = parseFloat(wa(e, "transition-delay")) || 0, r = parseFloat(wa(e, "transition-duration")) || 0, n = parseFloat(wa(e, "animation-delay")) || 0, i = parseFloat(wa(e, "animation-duration")) || 0, a = Math.max(r + t, i + n);
    e.rcEndAnimTimeout = setTimeout(function() {
      e.rcEndAnimTimeout = null, e.rcEndListener && e.rcEndListener();
    }, a * 1e3 + 200);
  }
}
function j0(e) {
  e.rcEndAnimTimeout && (clearTimeout(e.rcEndAnimTimeout), e.rcEndAnimTimeout = null);
}
var xo = function(t, r, n) {
  var i = (typeof r > "u" ? "undefined" : XP(r)) === "object", a = i ? r.name : r, o = i ? r.active : r + "-active", s = n, l = void 0, u = void 0, c = oR(t);
  return n && Object.prototype.toString.call(n) === "[object Object]" && (s = n.end, l = n.start, u = n.active), t.rcEndListener && t.rcEndListener(), t.rcEndListener = function(f) {
    f && f.target !== t || (t.rcAnimTimeout && (clearTimeout(t.rcAnimTimeout), t.rcAnimTimeout = null), j0(t), c.remove(a), c.remove(o), Ei.removeEndEventListener(t, t.rcEndListener), t.rcEndListener = null, s && s());
  }, Ei.addEndEventListener(t, t.rcEndListener), l && l(), c.add(a), t.rcAnimTimeout = setTimeout(function() {
    t.rcAnimTimeout = null, c.add(o), u && setTimeout(u, 0), F0(t);
  }, 30), {
    stop: function() {
      t.rcEndListener && t.rcEndListener();
    }
  };
};
xo.style = function(e, t, r) {
  e.rcEndListener && e.rcEndListener(), e.rcEndListener = function(n) {
    n && n.target !== e || (e.rcAnimTimeout && (clearTimeout(e.rcAnimTimeout), e.rcAnimTimeout = null), j0(e), Ei.removeEndEventListener(e, e.rcEndListener), e.rcEndListener = null, r && r());
  }, Ei.addEndEventListener(e, e.rcEndListener), e.rcAnimTimeout = setTimeout(function() {
    for (var n in t)
      t.hasOwnProperty(n) && (e.style[n] = t[n]);
    e.rcAnimTimeout = null, F0(e);
  }, 0);
};
xo.setTransition = function(e, t, r) {
  var n = t, i = r;
  r === void 0 && (i = n, n = ""), n = n || "", sR.forEach(function(a) {
    e.style[a + "Transition" + n] = i;
  });
};
xo.isCssAnimationSupported = yd;
var Bn = {
  isAppearSupported: function(t) {
    return t.transitionName && t.transitionAppear || t.animation.appear;
  },
  isEnterSupported: function(t) {
    return t.transitionName && t.transitionEnter || t.animation.enter;
  },
  isLeaveSupported: function(t) {
    return t.transitionName && t.transitionLeave || t.animation.leave;
  },
  allowAppearCallback: function(t) {
    return t.transitionAppear || t.animation.appear;
  },
  allowEnterCallback: function(t) {
    return t.transitionEnter || t.animation.enter;
  },
  allowLeaveCallback: function(t) {
    return t.transitionLeave || t.animation.leave;
  }
}, lR = {
  enter: "transitionEnter",
  appear: "transitionAppear",
  leave: "transitionLeave"
}, q0 = function(e) {
  or(t, e);
  function t() {
    return ar(this, t), Pt(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
  }
  return cn(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.stop();
    }
  }, {
    key: "componentWillEnter",
    value: function(n) {
      Bn.isEnterSupported(this.props) ? this.transition("enter", n) : n();
    }
  }, {
    key: "componentWillAppear",
    value: function(n) {
      Bn.isAppearSupported(this.props) ? this.transition("appear", n) : n();
    }
  }, {
    key: "componentWillLeave",
    value: function(n) {
      Bn.isLeaveSupported(this.props) ? this.transition("leave", n) : n();
    }
  }, {
    key: "transition",
    value: function(n, i) {
      var a = this, o = Tr.findDOMNode(this), s = this.props, l = s.transitionName, u = typeof l == "object";
      this.stop();
      var c = function() {
        a.stopper = null, i();
      };
      if ((yd || !s.animation[n]) && l && s[lR[n]]) {
        var f = u ? l[n] : l + "-" + n, d = f + "-active";
        u && l[n + "Active"] && (d = l[n + "Active"]), this.stopper = xo(o, {
          name: f,
          active: d
        }, c);
      } else
        this.stopper = s.animation[n](o, c);
    }
  }, {
    key: "stop",
    value: function() {
      var n = this.stopper;
      n && (this.stopper = null, n.stop());
    }
  }, {
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), t;
}(pe.Component);
q0.propTypes = {
  children: D.any,
  animation: D.any,
  transitionName: D.any
};
var uR = "rc_animate_" + Date.now();
function wi(e) {
  var t = e.children;
  return pe.isValidElement(t) && !t.key ? pe.cloneElement(t, {
    key: uR
  }) : t;
}
function Sa() {
}
var Co = function(e) {
  or(t, e);
  function t(r) {
    ar(this, t);
    var n = Pt(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
    return cR.call(n), n.currentlyAnimatingKeys = {}, n.keysToEnter = [], n.keysToLeave = [], n.state = {
      children: bi(wi(r))
    }, n.childrenRefs = {}, n;
  }
  return cn(t, [{
    key: "componentDidMount",
    value: function() {
      var n = this, i = this.props.showProp, a = this.state.children;
      i && (a = a.filter(function(o) {
        return !!o.props[i];
      })), a.forEach(function(o) {
        o && n.performAppear(o.key);
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function(n) {
      var i = this;
      this.nextProps = n;
      var a = bi(wi(n)), o = this.props;
      o.exclusive && Object.keys(this.currentlyAnimatingKeys).forEach(function(f) {
        i.stop(f);
      });
      var s = o.showProp, l = this.currentlyAnimatingKeys, u = o.exclusive ? bi(wi(o)) : this.state.children, c = [];
      s ? (u.forEach(function(f) {
        var d = f && Mn(a, f.key), p = void 0;
        (!d || !d.props[s]) && f.props[s] ? p = pe.cloneElement(d || f, nt({}, s, !0)) : p = d, p && c.push(p);
      }), a.forEach(function(f) {
        (!f || !Mn(u, f.key)) && c.push(f);
      })) : c = tR(u, a), this.setState({
        children: c
      }), a.forEach(function(f) {
        var d = f && f.key;
        if (!(f && l[d])) {
          var p = f && Mn(u, d);
          if (s) {
            var m = f.props[s];
            if (p) {
              var S = El(u, d, s);
              !S && m && i.keysToEnter.push(d);
            } else
              m && i.keysToEnter.push(d);
          } else
            p || i.keysToEnter.push(d);
        }
      }), u.forEach(function(f) {
        var d = f && f.key;
        if (!(f && l[d])) {
          var p = f && Mn(a, d);
          if (s) {
            var m = f.props[s];
            if (p) {
              var S = El(a, d, s);
              !S && m && i.keysToLeave.push(d);
            } else
              m && i.keysToLeave.push(d);
          } else
            p || i.keysToLeave.push(d);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n = this.keysToEnter;
      this.keysToEnter = [], n.forEach(this.performEnter);
      var i = this.keysToLeave;
      this.keysToLeave = [], i.forEach(this.performLeave);
    }
  }, {
    key: "isValidChildByKey",
    value: function(n, i) {
      var a = this.props.showProp;
      return a ? El(n, i, a) : Mn(n, i);
    }
  }, {
    key: "stop",
    value: function(n) {
      delete this.currentlyAnimatingKeys[n];
      var i = this.childrenRefs[n];
      i && i.stop();
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props;
      this.nextProps = i;
      var a = this.state.children, o = null;
      a && (o = a.map(function(u) {
        if (u == null)
          return u;
        if (!u.key)
          throw new Error("must set key for <rc-animate> children");
        return pe.createElement(
          q0,
          {
            key: u.key,
            ref: function(f) {
              n.childrenRefs[u.key] = f;
            },
            animation: i.animation,
            transitionName: i.transitionName,
            transitionEnter: i.transitionEnter,
            transitionAppear: i.transitionAppear,
            transitionLeave: i.transitionLeave
          },
          u
        );
      }));
      var s = i.component;
      if (s) {
        var l = i;
        return typeof s == "string" && (l = ct({
          className: i.className,
          style: i.style
        }, i.componentProps)), pe.createElement(
          s,
          l,
          o
        );
      }
      return o[0] || null;
    }
  }]), t;
}(pe.Component);
Co.isAnimate = !0;
Co.propTypes = {
  className: D.string,
  style: D.object,
  component: D.any,
  componentProps: D.object,
  animation: D.object,
  transitionName: D.oneOfType([D.string, D.object]),
  transitionEnter: D.bool,
  transitionAppear: D.bool,
  exclusive: D.bool,
  transitionLeave: D.bool,
  onEnd: D.func,
  onEnter: D.func,
  onLeave: D.func,
  onAppear: D.func,
  showProp: D.string,
  children: D.node
};
Co.defaultProps = {
  animation: {},
  component: "span",
  componentProps: {},
  transitionEnter: !0,
  transitionLeave: !0,
  transitionAppear: !1,
  onEnd: Sa,
  onEnter: Sa,
  onLeave: Sa,
  onAppear: Sa
};
var cR = function() {
  var t = this;
  this.performEnter = function(r) {
    t.childrenRefs[r] && (t.currentlyAnimatingKeys[r] = !0, t.childrenRefs[r].componentWillEnter(t.handleDoneAdding.bind(t, r, "enter")));
  }, this.performAppear = function(r) {
    t.childrenRefs[r] && (t.currentlyAnimatingKeys[r] = !0, t.childrenRefs[r].componentWillAppear(t.handleDoneAdding.bind(t, r, "appear")));
  }, this.handleDoneAdding = function(r, n) {
    var i = t.props;
    if (delete t.currentlyAnimatingKeys[r], !(i.exclusive && i !== t.nextProps)) {
      var a = bi(wi(i));
      t.isValidChildByKey(a, r) ? n === "appear" ? Bn.allowAppearCallback(i) && (i.onAppear(r), i.onEnd(r, !0)) : Bn.allowEnterCallback(i) && (i.onEnter(r), i.onEnd(r, !0)) : t.performLeave(r);
    }
  }, this.performLeave = function(r) {
    t.childrenRefs[r] && (t.currentlyAnimatingKeys[r] = !0, t.childrenRefs[r].componentWillLeave(t.handleDoneLeaving.bind(t, r)));
  }, this.handleDoneLeaving = function(r) {
    var n = t.props;
    if (delete t.currentlyAnimatingKeys[r], !(n.exclusive && n !== t.nextProps)) {
      var i = bi(wi(n));
      if (t.isValidChildByKey(i, r))
        t.performEnter(r);
      else {
        var a = function() {
          Bn.allowLeaveCallback(n) && (n.onLeave(r), n.onEnd(r, !1));
        };
        eR(t.state.children, i, n.showProp) ? a() : t.setState({
          children: i
        }, a);
      }
    }
  };
};
const Al = QE(Co);
var bd = function(e) {
  or(t, e);
  function t() {
    return ar(this, t), Pt(this, e.apply(this, arguments));
  }
  return t.prototype.shouldComponentUpdate = function(n) {
    return n.hiddenClassName || n.visible;
  }, t.prototype.render = function() {
    var n = this.props, i = n.hiddenClassName, a = n.visible, o = zn(n, ["hiddenClassName", "visible"]);
    return i || pe.Children.count(o.children) > 1 ? (!a && i && (o.className += " " + i), pe.createElement("div", o)) : pe.Children.only(o.children);
  }, t;
}(Ue);
bd.propTypes = {
  children: D.any,
  className: D.string,
  visible: D.bool,
  hiddenClassName: D.string
};
var of = function(e) {
  or(t, e);
  function t() {
    return ar(this, t), Pt(this, e.apply(this, arguments));
  }
  return t.prototype.render = function() {
    var n = this.props, i = n.className;
    return n.visible || (i += " " + n.hiddenClassName), pe.createElement(
      "div",
      {
        className: i,
        onMouseEnter: n.onMouseEnter,
        onMouseLeave: n.onMouseLeave,
        onMouseDown: n.onMouseDown,
        onTouchStart: n.onTouchStart,
        style: n.style
      },
      pe.createElement(
        bd,
        { className: n.prefixCls + "-content", visible: n.visible },
        n.children
      )
    );
  }, t;
}(Ue);
of.propTypes = {
  hiddenClassName: D.string,
  className: D.string,
  prefixCls: D.string,
  onMouseEnter: D.func,
  onMouseLeave: D.func,
  onMouseDown: D.func,
  onTouchStart: D.func,
  children: D.any
};
var W0 = function(e) {
  or(t, e);
  function t(r) {
    ar(this, t);
    var n = Pt(this, e.call(this, r));
    return fR.call(n), n.state = {
      // Used for stretch
      stretchChecked: !1,
      targetWidth: void 0,
      targetHeight: void 0
    }, n.savePopupRef = Vv.bind(n, "popupInstance"), n.saveAlignRef = Vv.bind(n, "alignInstance"), n;
  }
  return t.prototype.componentDidMount = function() {
    this.rootNode = this.getPopupDomNode(), this.setStretchSize();
  }, t.prototype.componentDidUpdate = function() {
    this.setStretchSize();
  }, t.prototype.getPopupDomNode = function() {
    return Tr.findDOMNode(this.popupInstance);
  }, t.prototype.getMaskTransitionName = function() {
    var n = this.props, i = n.maskTransitionName, a = n.maskAnimation;
    return !i && a && (i = n.prefixCls + "-" + a), i;
  }, t.prototype.getTransitionName = function() {
    var n = this.props, i = n.transitionName;
    return !i && n.animation && (i = n.prefixCls + "-" + n.animation), i;
  }, t.prototype.getClassName = function(n) {
    return this.props.prefixCls + " " + this.props.className + " " + n;
  }, t.prototype.getPopupElement = function() {
    var n = this, i = this.savePopupRef, a = this.state, o = a.stretchChecked, s = a.targetHeight, l = a.targetWidth, u = this.props, c = u.align, f = u.visible, d = u.prefixCls, p = u.style, m = u.getClassNameFromAlign, S = u.destroyPopupOnHide, w = u.stretch, C = u.children, y = u.onMouseEnter, T = u.onMouseLeave, R = u.onMouseDown, P = u.onTouchStart, N = this.getClassName(this.currentAlignClassName || m(c)), L = d + "-hidden";
    f || (this.currentAlignClassName = null);
    var W = {};
    w && (w.indexOf("height") !== -1 ? W.height = s : w.indexOf("minHeight") !== -1 && (W.minHeight = s), w.indexOf("width") !== -1 ? W.width = l : w.indexOf("minWidth") !== -1 && (W.minWidth = l), o || (W.visibility = "hidden", setTimeout(function() {
      n.alignInstance && n.alignInstance.forceAlign();
    }, 0)));
    var Y = ct({}, W, p, this.getZIndexStyle()), re = {
      className: N,
      prefixCls: d,
      ref: i,
      onMouseEnter: y,
      onMouseLeave: T,
      onMouseDown: R,
      onTouchStart: P,
      style: Y
    };
    return S ? pe.createElement(
      Al,
      {
        component: "",
        exclusive: !0,
        transitionAppear: !0,
        transitionName: this.getTransitionName()
      },
      f ? pe.createElement(
        Ga,
        {
          target: this.getAlignTarget(),
          key: "popup",
          ref: this.saveAlignRef,
          monitorWindowResize: !0,
          align: c,
          onAlign: this.onAlign
        },
        pe.createElement(
          of,
          ct({
            visible: !0
          }, re),
          C
        )
      ) : null
    ) : pe.createElement(
      Al,
      {
        component: "",
        exclusive: !0,
        transitionAppear: !0,
        transitionName: this.getTransitionName(),
        showProp: "xVisible"
      },
      pe.createElement(
        Ga,
        {
          target: this.getAlignTarget(),
          key: "popup",
          ref: this.saveAlignRef,
          monitorWindowResize: !0,
          xVisible: f,
          childrenProps: { visible: "xVisible" },
          disabled: !f,
          align: c,
          onAlign: this.onAlign
        },
        pe.createElement(
          of,
          ct({
            hiddenClassName: L
          }, re),
          C
        )
      )
    );
  }, t.prototype.getZIndexStyle = function() {
    var n = {}, i = this.props;
    return i.zIndex !== void 0 && (n.zIndex = i.zIndex), n;
  }, t.prototype.getMaskElement = function() {
    var n = this.props, i = void 0;
    if (n.mask) {
      var a = this.getMaskTransitionName();
      i = pe.createElement(bd, {
        style: this.getZIndexStyle(),
        key: "mask",
        className: n.prefixCls + "-mask",
        hiddenClassName: n.prefixCls + "-mask-hidden",
        visible: n.visible
      }), a && (i = pe.createElement(
        Al,
        {
          key: "mask",
          showProp: "visible",
          transitionAppear: !0,
          component: "",
          transitionName: a
        },
        i
      ));
    }
    return i;
  }, t.prototype.render = function() {
    return pe.createElement(
      "div",
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  }, t;
}(Ue);
W0.propTypes = {
  visible: D.bool,
  style: D.object,
  getClassNameFromAlign: D.func,
  onAlign: D.func,
  getRootDomNode: D.func,
  align: D.any,
  destroyPopupOnHide: D.bool,
  className: D.string,
  prefixCls: D.string,
  onMouseEnter: D.func,
  onMouseLeave: D.func,
  onMouseDown: D.func,
  onTouchStart: D.func,
  stretch: D.string,
  children: D.node,
  point: D.shape({
    pageX: D.number,
    pageY: D.number
  })
};
var fR = function() {
  var t = this;
  this.onAlign = function(r, n) {
    var i = t.props, a = i.getClassNameFromAlign(n);
    t.currentAlignClassName !== a && (t.currentAlignClassName = a, r.className = t.getClassName(a)), i.onAlign(r, n);
  }, this.setStretchSize = function() {
    var r = t.props, n = r.stretch, i = r.getRootDomNode, a = r.visible, o = t.state, s = o.stretchChecked, l = o.targetHeight, u = o.targetWidth;
    if (!n || !a) {
      s && t.setState({ stretchChecked: !1 });
      return;
    }
    var c = i();
    if (c) {
      var f = c.offsetHeight, d = c.offsetWidth;
      (l !== f || u !== d || !s) && t.setState({
        stretchChecked: !0,
        targetHeight: f,
        targetWidth: d
      });
    }
  }, this.getTargetElement = function() {
    return t.props.getRootDomNode();
  }, this.getAlignTarget = function() {
    var r = t.props.point;
    return r || t.getTargetElement;
  };
};
function Il() {
}
function dR() {
  return "";
}
function pR() {
  return window.document;
}
var hR = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"], cg = !!nx, H0 = {
  rcTrigger: D.shape({
    onPopupMouseDown: D.func
  })
}, ai = function(e) {
  or(t, e);
  function t(r) {
    ar(this, t);
    var n = Pt(this, e.call(this, r));
    vR.call(n);
    var i = void 0;
    return "popupVisible" in r ? i = !!r.popupVisible : i = !!r.defaultPopupVisible, n.state = {
      prevPopupVisible: i,
      popupVisible: i
    }, hR.forEach(function(a) {
      n["fire" + a] = function(o) {
        n.fireEvents(a, o);
      };
    }), n;
  }
  return t.prototype.getChildContext = function() {
    return {
      rcTrigger: {
        onPopupMouseDown: this.onPopupMouseDown
      }
    };
  }, t.prototype.componentDidMount = function() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  }, t.prototype.componentDidUpdate = function(n, i) {
    var a = this.props, o = this.state, s = function() {
      i.popupVisible !== o.popupVisible && a.afterPopupVisibleChange(o.popupVisible);
    };
    if (cg || this.renderComponent(null, s), o.popupVisible) {
      var l = void 0;
      !this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow()) && (l = a.getDocument(), this.clickOutsideHandler = Mr(l, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (l = l || a.getDocument(), this.touchOutsideHandler = Mr(l, "touchstart", this.onDocumentClick)), !this.contextMenuOutsideHandler1 && this.isContextMenuToShow() && (l = l || a.getDocument(), this.contextMenuOutsideHandler1 = Mr(l, "scroll", this.onContextMenuClose)), !this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = Mr(window, "blur", this.onContextMenuClose));
      return;
    }
    this.clearOutsideHandler();
  }, t.prototype.componentWillUnmount = function() {
    this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout);
  }, t.getDerivedStateFromProps = function(n, i) {
    var a = n.popupVisible, o = {};
    return a !== void 0 && i.popupVisible !== a && (o.popupVisible = a, o.prevPopupVisible = i.popupVisible), o;
  }, t.prototype.getPopupDomNode = function() {
    return this._component && this._component.getPopupDomNode ? this._component.getPopupDomNode() : null;
  }, t.prototype.getPopupAlign = function() {
    var n = this.props, i = n.popupPlacement, a = n.popupAlign, o = n.builtinPlacements;
    return i && o ? SE(o, i, a) : a;
  }, t.prototype.setPopupVisible = function(n, i) {
    var a = this.props.alignPoint, o = this.state.popupVisible;
    this.clearDelayTimer(), o !== n && ("popupVisible" in this.props || this.setState({ popupVisible: n, prevPopupVisible: o }), this.props.onPopupVisibleChange(n)), a && i && this.setPoint(i);
  }, t.prototype.delaySetPopupVisible = function(n, i, a) {
    var o = this, s = i * 1e3;
    if (this.clearDelayTimer(), s) {
      var l = a ? { pageX: a.pageX, pageY: a.pageY } : null;
      this.delayTimer = setTimeout(function() {
        o.setPopupVisible(n, l), o.clearDelayTimer();
      }, s);
    } else
      this.setPopupVisible(n, a);
  }, t.prototype.clearDelayTimer = function() {
    this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
  }, t.prototype.clearOutsideHandler = function() {
    this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextMenuOutsideHandler1 && (this.contextMenuOutsideHandler1.remove(), this.contextMenuOutsideHandler1 = null), this.contextMenuOutsideHandler2 && (this.contextMenuOutsideHandler2.remove(), this.contextMenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null);
  }, t.prototype.createTwoChains = function(n) {
    var i = this.props.children.props, a = this.props;
    return i[n] && a[n] ? this["fire" + n] : i[n] || a[n];
  }, t.prototype.isClickToShow = function() {
    var n = this.props, i = n.action, a = n.showAction;
    return i.indexOf("click") !== -1 || a.indexOf("click") !== -1;
  }, t.prototype.isContextMenuToShow = function() {
    var n = this.props, i = n.action, a = n.showAction;
    return i.indexOf("contextMenu") !== -1 || a.indexOf("contextMenu") !== -1;
  }, t.prototype.isClickToHide = function() {
    var n = this.props, i = n.action, a = n.hideAction;
    return i.indexOf("click") !== -1 || a.indexOf("click") !== -1;
  }, t.prototype.isMouseEnterToShow = function() {
    var n = this.props, i = n.action, a = n.showAction;
    return i.indexOf("hover") !== -1 || a.indexOf("mouseEnter") !== -1;
  }, t.prototype.isMouseLeaveToHide = function() {
    var n = this.props, i = n.action, a = n.hideAction;
    return i.indexOf("hover") !== -1 || a.indexOf("mouseLeave") !== -1;
  }, t.prototype.isFocusToShow = function() {
    var n = this.props, i = n.action, a = n.showAction;
    return i.indexOf("focus") !== -1 || a.indexOf("focus") !== -1;
  }, t.prototype.isBlurToHide = function() {
    var n = this.props, i = n.action, a = n.hideAction;
    return i.indexOf("focus") !== -1 || a.indexOf("blur") !== -1;
  }, t.prototype.forcePopupAlign = function() {
    this.state.popupVisible && this._component && this._component.alignInstance && this._component.alignInstance.forceAlign();
  }, t.prototype.fireEvents = function(n, i) {
    var a = this.props.children.props[n];
    a && a(i);
    var o = this.props[n];
    o && o(i);
  }, t.prototype.close = function() {
    this.setPopupVisible(!1);
  }, t.prototype.render = function() {
    var n = this, i = this.state.popupVisible, a = this.props, o = a.children, s = a.forceRender, l = a.alignPoint, u = a.className, c = pe.Children.only(o), f = { key: "trigger" };
    this.isContextMenuToShow() ? f.onContextMenu = this.onContextMenu : f.onContextMenu = this.createTwoChains("onContextMenu"), this.isClickToHide() || this.isClickToShow() ? (f.onClick = this.onClick, f.onMouseDown = this.onMouseDown, f.onTouchStart = this.onTouchStart) : (f.onClick = this.createTwoChains("onClick"), f.onMouseDown = this.createTwoChains("onMouseDown"), f.onTouchStart = this.createTwoChains("onTouchStart")), this.isMouseEnterToShow() ? (f.onMouseEnter = this.onMouseEnter, l && (f.onMouseMove = this.onMouseMove)) : f.onMouseEnter = this.createTwoChains("onMouseEnter"), this.isMouseLeaveToHide() ? f.onMouseLeave = this.onMouseLeave : f.onMouseLeave = this.createTwoChains("onMouseLeave"), this.isFocusToShow() || this.isBlurToHide() ? (f.onFocus = this.onFocus, f.onBlur = this.onBlur) : (f.onFocus = this.createTwoChains("onFocus"), f.onBlur = this.createTwoChains("onBlur"));
    var d = bn(c && c.props && c.props.className, u);
    d && (f.className = d);
    var p = pe.cloneElement(c, f);
    if (!cg)
      return pe.createElement(
        dd,
        {
          parent: this,
          visible: i,
          autoMount: !1,
          forceRender: s,
          getComponent: this.getComponent,
          getContainer: this.getContainer
        },
        function(S) {
          var w = S.renderComponent;
          return n.renderComponent = w, p;
        }
      );
    var m = void 0;
    return (i || this._component || s) && (m = pe.createElement(
      E0,
      { key: "portal", getContainer: this.getContainer, didUpdate: this.handlePortalUpdate },
      this.getComponent()
    )), [p, m];
  }, t;
}(pe.Component);
ai.propTypes = {
  children: D.any,
  action: D.oneOfType([D.string, D.arrayOf(D.string)]),
  showAction: D.any,
  hideAction: D.any,
  getPopupClassNameFromAlign: D.any,
  onPopupVisibleChange: D.func,
  afterPopupVisibleChange: D.func,
  popup: D.oneOfType([D.node, D.func]).isRequired,
  popupStyle: D.object,
  prefixCls: D.string,
  popupClassName: D.string,
  className: D.string,
  popupPlacement: D.string,
  builtinPlacements: D.object,
  popupTransitionName: D.oneOfType([D.string, D.object]),
  popupAnimation: D.any,
  mouseEnterDelay: D.number,
  mouseLeaveDelay: D.number,
  zIndex: D.number,
  focusDelay: D.number,
  blurDelay: D.number,
  getPopupContainer: D.func,
  getDocument: D.func,
  forceRender: D.bool,
  destroyPopupOnHide: D.bool,
  mask: D.bool,
  maskClosable: D.bool,
  onPopupAlign: D.func,
  popupAlign: D.object,
  popupVisible: D.bool,
  defaultPopupVisible: D.bool,
  maskTransitionName: D.oneOfType([D.string, D.object]),
  maskAnimation: D.string,
  stretch: D.string,
  alignPoint: D.bool
  // Maybe we can support user pass position in the future
};
ai.contextTypes = H0;
ai.childContextTypes = H0;
ai.defaultProps = {
  prefixCls: "rc-trigger-popup",
  getPopupClassNameFromAlign: dR,
  getDocument: pR,
  onPopupVisibleChange: Il,
  afterPopupVisibleChange: Il,
  onPopupAlign: Il,
  popupClassName: "",
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: !1,
  popupAlign: {},
  defaultPopupVisible: !1,
  mask: !1,
  maskClosable: !0,
  action: [],
  showAction: [],
  hideAction: []
};
var vR = function() {
  var t = this;
  this.onMouseEnter = function(r) {
    var n = t.props.mouseEnterDelay;
    t.fireEvents("onMouseEnter", r), t.delaySetPopupVisible(!0, n, n ? null : r);
  }, this.onMouseMove = function(r) {
    t.fireEvents("onMouseMove", r), t.setPoint(r);
  }, this.onMouseLeave = function(r) {
    t.fireEvents("onMouseLeave", r), t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
  }, this.onPopupMouseEnter = function() {
    t.clearDelayTimer();
  }, this.onPopupMouseLeave = function(r) {
    r.relatedTarget && !r.relatedTarget.setTimeout && t._component && t._component.getPopupDomNode && Zc(t._component.getPopupDomNode(), r.relatedTarget) || t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
  }, this.onFocus = function(r) {
    t.fireEvents("onFocus", r), t.clearDelayTimer(), t.isFocusToShow() && (t.focusTime = Date.now(), t.delaySetPopupVisible(!0, t.props.focusDelay));
  }, this.onMouseDown = function(r) {
    t.fireEvents("onMouseDown", r), t.preClickTime = Date.now();
  }, this.onTouchStart = function(r) {
    t.fireEvents("onTouchStart", r), t.preTouchTime = Date.now();
  }, this.onBlur = function(r) {
    t.fireEvents("onBlur", r), t.clearDelayTimer(), t.isBlurToHide() && t.delaySetPopupVisible(!1, t.props.blurDelay);
  }, this.onContextMenu = function(r) {
    r.preventDefault(), t.fireEvents("onContextMenu", r), t.setPopupVisible(!0, r);
  }, this.onContextMenuClose = function() {
    t.isContextMenuToShow() && t.close();
  }, this.onClick = function(r) {
    if (t.fireEvents("onClick", r), t.focusTime) {
      var n = void 0;
      if (t.preClickTime && t.preTouchTime ? n = Math.min(t.preClickTime, t.preTouchTime) : t.preClickTime ? n = t.preClickTime : t.preTouchTime && (n = t.preTouchTime), Math.abs(n - t.focusTime) < 20)
        return;
      t.focusTime = 0;
    }
    t.preClickTime = 0, t.preTouchTime = 0, t.isClickToShow() && (t.isClickToHide() || t.isBlurToHide()) && r && r.preventDefault && r.preventDefault();
    var i = !t.state.popupVisible;
    (t.isClickToHide() && !i || i && t.isClickToShow()) && t.setPopupVisible(!t.state.popupVisible, r);
  }, this.onPopupMouseDown = function() {
    var r = t.context.rcTrigger, n = r === void 0 ? {} : r;
    t.hasPopupMouseDown = !0, clearTimeout(t.mouseDownTimeout), t.mouseDownTimeout = setTimeout(function() {
      t.hasPopupMouseDown = !1;
    }, 0), n.onPopupMouseDown && n.onPopupMouseDown.apply(n, arguments);
  }, this.onDocumentClick = function(r) {
    if (!(t.props.mask && !t.props.maskClosable)) {
      var n = r.target, i = Pa(t);
      !Zc(i, n) && !t.hasPopupMouseDown && t.close();
    }
  }, this.getRootDomNode = function() {
    return Pa(t);
  }, this.getPopupClassNameFromAlign = function(r) {
    var n = [], i = t.props, a = i.popupPlacement, o = i.builtinPlacements, s = i.prefixCls, l = i.alignPoint, u = i.getPopupClassNameFromAlign;
    return a && o && n.push(xE(o, s, r, l)), u && n.push(u(r)), n.join(" ");
  }, this.getComponent = function() {
    var r = t.props, n = r.prefixCls, i = r.destroyPopupOnHide, a = r.popupClassName, o = r.action, s = r.onPopupAlign, l = r.popupAnimation, u = r.popupTransitionName, c = r.popupStyle, f = r.mask, d = r.maskAnimation, p = r.maskTransitionName, m = r.zIndex, S = r.popup, w = r.stretch, C = r.alignPoint, y = t.state, T = y.popupVisible, R = y.point, P = t.getPopupAlign(), N = {};
    return t.isMouseEnterToShow() && (N.onMouseEnter = t.onPopupMouseEnter), t.isMouseLeaveToHide() && (N.onMouseLeave = t.onPopupMouseLeave), N.onMouseDown = t.onPopupMouseDown, N.onTouchStart = t.onPopupMouseDown, pe.createElement(
      W0,
      ct({
        prefixCls: n,
        destroyPopupOnHide: i,
        visible: T,
        point: C && R,
        className: a,
        action: o,
        align: P,
        onAlign: s,
        animation: l,
        getClassNameFromAlign: t.getPopupClassNameFromAlign
      }, N, {
        stretch: w,
        getRootDomNode: t.getRootDomNode,
        style: c,
        mask: f,
        zIndex: m,
        transitionName: u,
        maskAnimation: d,
        maskTransitionName: p,
        ref: t.savePopup
      }),
      typeof S == "function" ? S() : S
    );
  }, this.getContainer = function() {
    var r = t.props, n = document.createElement("div");
    n.style.position = "absolute", n.style.top = "0", n.style.left = "0", n.style.width = "100%";
    var i = r.getPopupContainer ? r.getPopupContainer(Pa(t)) : r.getDocument().body;
    return i.appendChild(n), n;
  }, this.setPoint = function(r) {
    var n = t.props.alignPoint;
    !n || !r || t.setState({
      point: {
        pageX: r.pageX,
        pageY: r.pageY
      }
    });
  }, this.handlePortalUpdate = function() {
    t.state.prevPopupVisible !== t.state.popupVisible && t.props.afterPopupVisibleChange(t.state.popupVisible);
  }, this.savePopup = function(r) {
    t._component = r;
  };
};
D0(ai);
var vr = {
  adjustX: 1,
  adjustY: 1
}, gr = [0, 0], gR = {
  left: {
    points: ["cr", "cl"],
    overflow: vr,
    offset: [-4, 0],
    targetOffset: gr
  },
  right: {
    points: ["cl", "cr"],
    overflow: vr,
    offset: [4, 0],
    targetOffset: gr
  },
  top: {
    points: ["bc", "tc"],
    overflow: vr,
    offset: [0, -4],
    targetOffset: gr
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: vr,
    offset: [0, 4],
    targetOffset: gr
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: vr,
    offset: [0, -4],
    targetOffset: gr
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: vr,
    offset: [-4, 0],
    targetOffset: gr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: vr,
    offset: [0, -4],
    targetOffset: gr
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: vr,
    offset: [4, 0],
    targetOffset: gr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: vr,
    offset: [0, 4],
    targetOffset: gr
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: vr,
    offset: [4, 0],
    targetOffset: gr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: vr,
    offset: [0, 4],
    targetOffset: gr
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: vr,
    offset: [-4, 0],
    targetOffset: gr
  }
}, V0 = function(e) {
  or(t, e);
  function t() {
    return ar(this, t), Pt(this, e.apply(this, arguments));
  }
  return t.prototype.componentDidUpdate = function() {
    var n = this.props.trigger;
    n && n.forcePopupAlign();
  }, t.prototype.render = function() {
    var n = this.props, i = n.overlay, a = n.prefixCls, o = n.id;
    return pe.createElement(
      "div",
      { className: a + "-inner", id: o, role: "tooltip" },
      typeof i == "function" ? i() : i
    );
  }, t;
}(pe.Component);
V0.propTypes = {
  prefixCls: D.string,
  overlay: D.oneOfType([D.node, D.func]).isRequired,
  id: D.string,
  trigger: D.any
};
var _o = function(e) {
  or(t, e);
  function t() {
    var r, n, i;
    ar(this, t);
    for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return i = (r = (n = Pt(this, e.call.apply(e, [this].concat(o))), n), n.getPopupElement = function() {
      var l = n.props, u = l.arrowContent, c = l.overlay, f = l.prefixCls, d = l.id;
      return [pe.createElement(
        "div",
        { className: f + "-arrow", key: "arrow" },
        u
      ), pe.createElement(V0, {
        key: "content",
        trigger: n.trigger,
        prefixCls: f,
        id: d,
        overlay: c
      })];
    }, n.saveTrigger = function(l) {
      n.trigger = l;
    }, r), Pt(n, i);
  }
  return t.prototype.getPopupDomNode = function() {
    return this.trigger.getPopupDomNode();
  }, t.prototype.render = function() {
    var n = this.props, i = n.overlayClassName, a = n.trigger, o = n.mouseEnterDelay, s = n.mouseLeaveDelay, l = n.overlayStyle, u = n.prefixCls, c = n.children, f = n.onVisibleChange, d = n.afterVisibleChange, p = n.transitionName, m = n.animation, S = n.placement, w = n.align, C = n.destroyTooltipOnHide, y = n.defaultVisible, T = n.getTooltipContainer, R = zn(n, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer"]), P = ct({}, R);
    return "visible" in this.props && (P.popupVisible = this.props.visible), pe.createElement(
      ai,
      ct({
        popupClassName: i,
        ref: this.saveTrigger,
        prefixCls: u,
        popup: this.getPopupElement,
        action: a,
        builtinPlacements: gR,
        popupPlacement: S,
        popupAlign: w,
        getPopupContainer: T,
        onPopupVisibleChange: f,
        afterPopupVisibleChange: d,
        popupTransitionName: p,
        popupAnimation: m,
        defaultPopupVisible: y,
        destroyPopupOnHide: C,
        mouseLeaveDelay: s,
        popupStyle: l,
        mouseEnterDelay: o
      }, P),
      c
    );
  }, t;
}(Ue);
_o.propTypes = {
  trigger: D.any,
  children: D.any,
  defaultVisible: D.bool,
  visible: D.bool,
  placement: D.string,
  transitionName: D.oneOfType([D.string, D.object]),
  animation: D.any,
  onVisibleChange: D.func,
  afterVisibleChange: D.func,
  overlay: D.oneOfType([D.node, D.func]).isRequired,
  overlayStyle: D.object,
  overlayClassName: D.string,
  prefixCls: D.string,
  mouseEnterDelay: D.number,
  mouseLeaveDelay: D.number,
  getTooltipContainer: D.func,
  destroyTooltipOnHide: D.bool,
  align: D.object,
  arrowContent: D.any,
  id: D.string
};
_o.defaultProps = {
  prefixCls: "rc-tooltip",
  mouseEnterDelay: 0,
  destroyTooltipOnHide: !1,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: "right",
  trigger: ["hover"],
  arrowContent: null
};
function mR(e) {
  var t, r;
  return r = t = function(n) {
    or(i, n);
    function i() {
      var a, o, s, l;
      ar(this, i);
      for (var u = arguments.length, c = Array(u), f = 0; f < u; f++)
        c[f] = arguments[f];
      return l = (o = (s = Pt(this, (a = i.__proto__ || Object.getPrototypeOf(i)).call.apply(a, [this].concat(c))), s), s.state = {
        visibles: {}
      }, s.handleTooltipVisibleChange = function(d, p) {
        s.setState(function(m) {
          return {
            visibles: ct({}, m.visibles, nt({}, d, p))
          };
        });
      }, s.handleWithTooltip = function(d) {
        var p = d.value, m = d.dragging, S = d.index, w = d.disabled, C = zn(d, ["value", "dragging", "index", "disabled"]), y = s.props, T = y.tipFormatter, R = y.tipProps, P = y.handleStyle, N = R.prefixCls, L = N === void 0 ? "rc-slider-tooltip" : N, W = R.overlay, Y = W === void 0 ? T(p) : W, re = R.placement, z = re === void 0 ? "top" : re, Q = R.visible, se = Q === void 0 ? !1 : Q, X = zn(R, ["prefixCls", "overlay", "placement", "visible"]), ee = void 0;
        return Array.isArray(P) ? ee = P[S] || P[0] : ee = P, pe.createElement(
          _o,
          ct({}, X, {
            prefixCls: L,
            overlay: Y,
            placement: z,
            visible: !w && (s.state.visibles[S] || m) || se,
            key: S
          }),
          pe.createElement(bo, ct({}, C, {
            style: ct({}, ee),
            value: p,
            onMouseEnter: function() {
              return s.handleTooltipVisibleChange(S, !0);
            },
            onMouseLeave: function() {
              return s.handleTooltipVisibleChange(S, !1);
            }
          }))
        );
      }, o), Pt(s, l);
    }
    return cn(i, [{
      key: "render",
      value: function() {
        return pe.createElement(e, ct({}, this.props, { handle: this.handleWithTooltip }));
      }
    }]), i;
  }(pe.Component), t.propTypes = {
    tipFormatter: D.func,
    handleStyle: D.oneOfType([D.object, D.arrayOf(D.object)]),
    tipProps: D.object
  }, t.defaultProps = {
    tipFormatter: function(i) {
      return i;
    },
    handleStyle: [{}],
    tipProps: {}
  }, r;
}
Gn.Range = aE;
Gn.Handle = bo;
Gn.createSliderWithTooltip = mR;
const { Handle: yR, Range: bR } = Gn, fg = {
  height: "10px",
  top: "5px",
  bottom: 0,
  position: "absolute",
  // backgroundColor: '#932ab6',
  // backgroundImage: 'linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%)',
  backgroundRepeat: "repeat-x",
  boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.15)",
  boxSizing: "border-box",
  borderRadius: "4px"
}, xa = {
  position: "absolute",
  width: "20px",
  height: "20px",
  backgroundColor: "#444",
  filter: "none",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05)",
  border: "0 solid transparent"
}, wR = {
  position: "absolute",
  width: "20px",
  height: "20px",
  backgroundColor: "#444",
  filter: "none",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05)",
  border: "0 solid transparent"
}, dg = {
  position: "absolute",
  cursor: "pointer",
  backgroundImage: "linear-gradient(to bottom,#f5f5f5 0,#f9f9f9 100%)",
  backgroundRepeat: "repeat-x",
  filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0)",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
  borderRadius: "4px",
  height: "10px",
  width: "100%",
  marginTop: "-5px",
  top: "9px",
  left: "0"
}, Xa = class Xa extends Ue {
  constructor(r) {
    super(r);
    oe(this, "state", {});
    oe(this, "getHandle", (r) => {
      const {
        value: n,
        // dragging,
        ...i
      } = r, { tooltipRender: a, tooltipVisible: o, handle: s } = this.props;
      if (s)
        return s(r);
      let l;
      a ? l = a(n) : l = n;
      let u;
      switch (o) {
        case "always":
          u = !0;
          break;
        case "never":
          u = !1;
          break;
      }
      return /* @__PURE__ */ _(
        _o,
        {
          prefixCls: "rc-slider-tooltip",
          overlay: l,
          visible: u,
          placement: "top",
          children: /* @__PURE__ */ _(yR, { value: n, ...i })
        }
      );
    });
    oe(this, "Element", Gn);
    this.getHandle = this.getHandle.bind(this), this.constructElement = this.constructElement.bind(this), this.constructElement(r);
  }
  static getTrackColor(r) {
    let n;
    switch (r) {
      case "light-blue":
        n = "#357ca5";
        break;
      case "aqua":
        n = "#00c0ef";
        break;
      case "green":
        n = "#00a65a";
        break;
      case "yellow":
        n = "#f39c12";
        break;
      case "red":
        n = "#d33724";
        break;
      case "gray":
        n = "#d2d6de";
        break;
      case "navy":
        n = "#001a35";
        break;
      case "teal":
        n = "#39CCCC";
        break;
      case "purple":
        n = "#605ca8";
        break;
      case "orange":
        n = "#ff851b";
        break;
      case "maroon":
        n = "#D81B60";
        break;
      case "black":
        n = "#111111";
        break;
    }
    return n;
  }
  constructElement(r) {
    const { value: n, defaultValue: i } = r;
    let a;
    n && n.length || i && i.length ? a = bR : a = Gn, this.Element = a;
  }
  render() {
    const {
      value: r,
      defaultValue: n,
      color: i,
      vertical: a,
      rcSliderProps: o,
      onChange: s,
      handle: l,
      ...u
    } = this.props, c = this.Element;
    let f, d, p;
    const m = Xa.getTrackColor(i);
    if (r && r.length || n && n.length) {
      const h = r && r.length || n && n.length || 0;
      if (a) {
        f = [{ ...wR }];
        for (let v = 0; v < h; ++v)
          f.push(xa);
      } else {
        p = dg, f = [], d = [];
        for (let v = 0; v < h; ++v)
          f.push({ ...xa }), v < h - 1 && d.push({ backgroundColor: m, ...fg });
      }
    } else
      a ? (f = xa, d = void 0, p = void 0) : (f = { ...xa }, p = dg, d = { backgroundColor: m, ...fg });
    const {
      min: S,
      max: w,
      onAfterChange: C,
      onBeforeChange: y,
      step: T,
      autoFocus: R,
      onFocus: P,
      onBlur: N,
      className: L,
      style: W,
      trackStyle: Y = d,
      railStyle: re = p,
      handleStyle: z = f,
      reverse: Q,
      disabled: se,
      prefixCls: X,
      marks: ee,
      dots: J,
      maximumTrackStyle: ue,
      dotStyle: ce,
      activeDotStyle: Z,
      draggableTrack: V
    } = { ...u, ...o };
    return /* @__PURE__ */ _(
      c,
      {
        min: S,
        max: w,
        step: T,
        prefixCls: X,
        vertical: a,
        disabled: se,
        reverse: Q,
        trackStyle: Y,
        handleStyle: z,
        autoFocus: R,
        onFocus: P,
        onBlur: N,
        className: L,
        marks: ee,
        dots: J,
        maximumTrackStyle: ue,
        style: W,
        railStyle: re,
        dotStyle: ce,
        activeDotStyle: Z,
        draggableTrack: V,
        value: r,
        defaultValue: n,
        onChange: s,
        onAfterChange: C,
        onBeforeChange: y,
        handle: this.getHandle
      }
    );
  }
};
oe(Xa, "defaultProps", {
  color: "light-blue",
  vertical: !1,
  value: void 0,
  defaultValue: void 0,
  rcSliderProps: void 0,
  onChange: void 0,
  tooltipRender: void 0,
  tooltipVisible: "dragging",
  handle: void 0
});
let sf = Xa;
function lf({
  label: e,
  labelXs: t,
  labelSm: r,
  labelMd: n,
  labelLg: i,
  name: a,
  xs: o,
  sm: s,
  md: l,
  lg: u,
  labelIcon: c,
  type: f,
  children: d,
  labelClass: p,
  labelPosition: m
}) {
  const S = e;
  let w;
  S && c && (w = !!c ? Lt(c) : void 0);
  const C = [
    "form-group",
    f ? `has-${f}` : null
  ].filter((y) => y).join(" ");
  if (m === "left") {
    const y = [
      "control-label",
      t ? `col-xs-${t}` : null,
      r ? `col-sm-${r}` : null,
      n ? `col-md-${n}` : null,
      i ? `col-lg-${i}` : null,
      p
    ].filter((R) => R).join(" ");
    let T = {
      xs: o,
      sm: s,
      md: l,
      lg: u
    };
    return S || (T = {
      xsOffset: t,
      smOffset: r,
      mdOffset: n,
      lgOffset: i,
      ...T
    }), /* @__PURE__ */ ie("div", { className: C, children: [
      /* @__PURE__ */ ie("label", { htmlFor: a, className: y, children: [
        c && /* @__PURE__ */ _(Xe, { icon: w }),
        c && " ",
        S
      ] }),
      /* @__PURE__ */ _(_c, { ...T, children: d })
    ] });
  }
  return m === "above" ? /* @__PURE__ */ ie("div", { className: C, children: [
    /* @__PURE__ */ ie("label", { htmlFor: a, children: [
      c && /* @__PURE__ */ _(Xe, { icon: w }),
      c && " ",
      e
    ] }),
    d
  ] }) : /* @__PURE__ */ _("div", { className: C, children: d });
}
lf.defaultProps = {
  label: null,
  labelPosition: "left",
  labelXs: void 0,
  labelSm: 2,
  labelMd: void 0,
  labelLg: void 0,
  xs: void 0,
  sm: 10,
  md: void 0,
  lg: void 0,
  labelIcon: void 0,
  type: void 0,
  name: cr(),
  labelClass: void 0
};
class Dr extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", {});
  }
  render() {
    const {
      iconLeft: r,
      iconRight: n,
      addonLeft: i,
      addonRight: a,
      size: o,
      checkboxLeft: s,
      checkboxRight: l,
      radioLeft: u,
      radioRight: c,
      buttonLeft: f,
      buttonRight: d,
      children: p,
      checkboxLeftProps: m,
      checkboxRightProps: S,
      radioLeftProps: w,
      radioRightProps: C,
      width: y,
      help: T,
      ...R
    } = this.props, P = [
      "input-group",
      o ? `input-group-${o}` : null
    ].filter((N) => N).join(" ");
    if (r || n || i || a || s || l || u || c || f || d) {
      const N = Lt(r), L = Lt(n);
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        /* @__PURE__ */ _(lf, { ...R, children: /* @__PURE__ */ ie("div", { className: P, style: { width: y }, children: [
          i && /* @__PURE__ */ _("span", { className: "input-group-addon", children: i }),
          r && /* @__PURE__ */ _("span", { className: "input-group-addon", children: /* @__PURE__ */ _(Xe, { icon: N }) }),
          s && /* @__PURE__ */ _("span", { className: "input-group-addon", children: /* @__PURE__ */ _("input", { type: "checkbox", ...m }) }),
          u && /* @__PURE__ */ _("span", { className: "input-group-addon", children: /* @__PURE__ */ _("input", { type: "radio", ...w }) }),
          f && /* @__PURE__ */ _("div", { className: "input-group-btn", children: f }),
          p,
          a && /* @__PURE__ */ _("span", { className: "input-group-addon", children: a }),
          n && /* @__PURE__ */ _("span", { className: "input-group-addon", children: /* @__PURE__ */ _(Xe, { icon: L }) }),
          l && /* @__PURE__ */ _("span", { className: "input-group-addon", children: /* @__PURE__ */ _("input", { type: "checkbox", ...S }) }),
          c && /* @__PURE__ */ _("span", { className: "input-group-addon", children: /* @__PURE__ */ _("input", { type: "radio", ...C }) }),
          d && /* @__PURE__ */ _("div", { className: "input-group-btn", children: d })
        ] }) })
      );
    }
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      /* @__PURE__ */ ie(lf, { ...this.props, children: [
        /* @__PURE__ */ _("div", { className: P, style: { width: y }, children: p }),
        T && /* @__PURE__ */ _("p", { className: "help-block", children: T })
      ] })
    );
  }
}
oe(Dr, "defaultProps", {
  iconLeft: null,
  iconRight: null,
  addonLeft: null,
  addonRight: null,
  size: null,
  checkboxLeft: !1,
  checkboxLeftProps: null,
  checkboxRight: !1,
  checkboxRightProps: null,
  radioLeft: !1,
  radioLeftProps: null,
  radioRight: !1,
  radioRightProps: null,
  buttonLeft: null,
  buttonRight: null,
  width: "100%",
  help: null
});
var Cc;
let SR = (Cc = class extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", {});
    oe(this, "ref", null);
  }
  render() {
    const {
      inputType: r,
      rows: n,
      name: i,
      id: a,
      value: o,
      placeholder: s,
      disabled: l,
      onBlur: u,
      onChange: c,
      onFocus: f,
      onSelect: d,
      onKeyDown: p,
      onKeyUp: m,
      onKeyPress: S
      // ...props
    } = this.props, {
      iconLeft: w,
      iconRight: C,
      addonLeft: y,
      addonRight: T,
      size: R,
      checkboxLeft: P,
      checkboxLeftProps: N,
      checkboxRight: L,
      checkboxRightProps: W,
      radioLeft: Y,
      radioLeftProps: re,
      radioRight: z,
      radioRightProps: Q,
      buttonLeft: se,
      buttonRight: X,
      width: ee,
      help: J
    } = this.props, {
      label: ue,
      labelPosition: ce,
      labelXs: Z,
      labelSm: V,
      labelMd: h,
      labelLg: v,
      xs: g,
      sm: b,
      md: A,
      lg: E,
      labelIcon: I,
      type: H,
      labelClass: q
    } = this.props, K = [
      r !== "file" ? "form-control" : null,
      R ? `input-${R}` : null
    ].filter((U) => U).join(" ");
    let ae;
    switch (r) {
      case "textarea":
        ae = /* @__PURE__ */ _(
          "textarea",
          {
            ref: (U) => {
              this.ref = U;
            },
            className: K,
            name: i,
            id: a,
            value: o,
            placeholder: s,
            disabled: l,
            onBlur: u,
            onChange: c,
            onFocus: f,
            onSelect: d,
            onKeyDown: p,
            onKeyUp: m,
            onKeyPress: S,
            rows: n
          }
        );
        break;
      case "readonly":
        ae = /* @__PURE__ */ _("div", { children: o || " " });
        break;
      default:
        ae = /* @__PURE__ */ _(
          "input",
          {
            ref: (U) => {
              this.ref = U;
            },
            type: r,
            className: K,
            name: i,
            id: a,
            value: o,
            placeholder: s,
            disabled: l,
            onBlur: u,
            onChange: c,
            onFocus: f,
            onSelect: d,
            onKeyDown: p,
            onKeyUp: m,
            onKeyPress: S
          }
        );
    }
    return /* @__PURE__ */ _(
      Dr,
      {
        iconLeft: w,
        iconRight: C,
        addonLeft: y,
        addonRight: T,
        size: R,
        checkboxLeft: P,
        checkboxLeftProps: N,
        checkboxRight: L,
        checkboxRightProps: W,
        radioLeft: Y,
        radioLeftProps: re,
        radioRight: z,
        radioRightProps: Q,
        buttonLeft: se,
        buttonRight: X,
        width: ee,
        help: J,
        label: ue,
        labelPosition: ce,
        labelXs: Z,
        labelSm: V,
        labelMd: h,
        labelLg: v,
        name: i,
        xs: g,
        sm: b,
        md: A,
        lg: E,
        labelIcon: I,
        type: H,
        labelClass: q,
        children: ae
      }
    );
  }
}, oe(Cc, "defaultProps", {
  inputType: "text",
  name: null,
  id: null,
  placeholder: null,
  value: void 0,
  disabled: !1,
  rows: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onSelect: null,
  onKeyDown: null,
  onKeyUp: null,
  onKeyPress: null,
  size: null
}), Cc);
class B0 extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", {});
  }
  render() {
    const {
      text: r,
      onChange: n,
      disabled: i,
      name: a,
      value: o,
      checked: s,
      defaultValue: l
      //  ...props
    } = this.props, {
      iconLeft: u,
      iconRight: c,
      addonLeft: f,
      addonRight: d,
      size: p,
      checkboxLeft: m,
      checkboxLeftProps: S,
      checkboxRight: w,
      checkboxRightProps: C,
      radioLeft: y,
      radioLeftProps: T,
      radioRight: R,
      radioRightProps: P,
      buttonLeft: N,
      buttonRight: L,
      width: W,
      help: Y
    } = this.props, {
      label: re,
      labelPosition: z,
      labelXs: Q,
      labelSm: se,
      labelMd: X,
      labelLg: ee,
      xs: J,
      sm: ue,
      md: ce,
      lg: Z,
      labelIcon: V,
      type: h,
      labelClass: v
    } = this.props;
    return /* @__PURE__ */ ie(
      Dr,
      {
        iconLeft: u,
        iconRight: c,
        addonLeft: f,
        addonRight: d,
        size: p,
        checkboxLeft: m,
        checkboxLeftProps: S,
        checkboxRight: w,
        checkboxRightProps: C,
        radioLeft: y,
        radioLeftProps: T,
        radioRight: R,
        radioRightProps: P,
        buttonLeft: N,
        buttonRight: L,
        width: W,
        help: Y,
        label: re,
        labelPosition: z,
        labelXs: Q,
        labelSm: se,
        labelMd: X,
        labelLg: ee,
        name: a,
        xs: J,
        sm: ue,
        md: ce,
        lg: Z,
        labelIcon: V,
        type: h,
        labelClass: v,
        children: [
          /* @__PURE__ */ _(
            "input",
            {
              name: a,
              onChange: n,
              checked: s,
              disabled: i,
              value: o,
              defaultValue: l,
              type: "checkbox"
            }
          ),
          r ? ` ${r}` : ""
        ]
      }
    );
  }
}
oe(B0, "defaultProps", {
  text: null,
  onChange: null,
  disabled: !1,
  name: null
});
function xR(e) {
  const { options: t, name: r, onChange: n } = e, {
    iconLeft: i,
    iconRight: a,
    addonLeft: o,
    addonRight: s,
    size: l,
    checkboxLeft: u,
    checkboxLeftProps: c,
    checkboxRight: f,
    checkboxRightProps: d,
    radioLeft: p,
    radioLeftProps: m,
    radioRight: S,
    radioRightProps: w,
    buttonLeft: C,
    buttonRight: y,
    width: T,
    help: R
  } = e, {
    label: P,
    labelPosition: N,
    labelXs: L,
    labelSm: W,
    labelMd: Y,
    labelLg: re,
    xs: z,
    sm: Q,
    md: se,
    lg: X,
    labelIcon: ee,
    type: J,
    labelClass: ue
  } = e;
  return /* @__PURE__ */ _(
    Dr,
    {
      iconLeft: i,
      iconRight: a,
      addonLeft: o,
      addonRight: s,
      size: l,
      checkboxLeft: u,
      checkboxLeftProps: c,
      checkboxRight: f,
      checkboxRightProps: d,
      radioLeft: p,
      radioLeftProps: m,
      radioRight: S,
      radioRightProps: w,
      buttonLeft: C,
      buttonRight: y,
      width: T,
      help: R,
      label: P,
      labelPosition: N,
      labelXs: L,
      labelSm: W,
      labelMd: Y,
      labelLg: re,
      name: r,
      xs: z,
      sm: Q,
      md: se,
      lg: X,
      labelIcon: ee,
      type: J,
      labelClass: ue,
      children: t ? t.map(({
        label: ce,
        value: Z,
        checked: V,
        disabled: h,
        id: v
      }) => /* @__PURE__ */ _("div", { className: "radio", children: /* @__PURE__ */ ie("label", { htmlFor: r, children: [
        /* @__PURE__ */ _("input", { name: r, type: "radio", onChange: n, value: Z, checked: V, disabled: h, id: v }),
        ce
      ] }) }, cr())) : null
    }
  );
}
class CR extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", {});
    oe(this, "mapOptions", (r) => Array.isArray(r) ? r.map(this.mapSingleOption) : [this.mapSingleOption(r)]);
    oe(this, "mapSingleOption", (r) => {
      if (typeof r == "object") {
        const { disabled: n } = this.props, { value: i, text: a, disabled: o } = r;
        return {
          value: i,
          text: a,
          disabled: o || n
        };
      }
      return { value: r, text: r };
    });
  }
  render() {
    const {
      options: r,
      name: n,
      disabled: i = !1,
      multiple: a = !1,
      value: o,
      onChange: s
    } = this.props, {
      iconLeft: l,
      iconRight: u,
      addonLeft: c,
      addonRight: f,
      size: d,
      checkboxLeft: p,
      checkboxLeftProps: m,
      checkboxRight: S,
      checkboxRightProps: w,
      radioLeft: C,
      radioLeftProps: y,
      radioRight: T,
      radioRightProps: R,
      buttonLeft: P,
      buttonRight: N,
      width: L,
      help: W
    } = this.props, {
      label: Y,
      labelPosition: re,
      labelXs: z,
      labelSm: Q,
      labelMd: se,
      labelLg: X,
      xs: ee,
      sm: J,
      md: ue,
      lg: ce,
      labelIcon: Z,
      type: V,
      labelClass: h
    } = this.props;
    return /* @__PURE__ */ _(
      Dr,
      {
        iconLeft: l,
        iconRight: u,
        addonLeft: c,
        addonRight: f,
        size: d,
        checkboxLeft: p,
        checkboxLeftProps: m,
        checkboxRight: S,
        checkboxRightProps: w,
        radioLeft: C,
        radioLeftProps: y,
        radioRight: T,
        radioRightProps: R,
        buttonLeft: P,
        buttonRight: N,
        width: L,
        help: W,
        label: Y,
        labelPosition: re,
        labelXs: z,
        labelSm: Q,
        labelMd: se,
        labelLg: X,
        name: n,
        xs: ee,
        sm: J,
        md: ue,
        lg: ce,
        labelIcon: Z,
        type: V,
        labelClass: h,
        children: /* @__PURE__ */ _("select", { name: n, className: "form-control", disabled: i, multiple: a, value: o, onChange: s, children: r && this.mapOptions(r).map(({
          value: v,
          text: g,
          disabled: b
        }) => /* @__PURE__ */ _(
          "option",
          {
            value: v,
            disabled: b,
            children: g
          },
          v
        )) })
      }
    );
  }
}
class U0 extends Ue {
  constructor(r) {
    super(r);
    oe(this, "getValue", (r, n) => {
      let i = this.optionsFromSelect2(r);
      return !n && i.length > 0 && ([i] = i), i;
    });
    oe(this, "optionsFromSelect2", (r) => r.map(({ id: n }) => this.mapped[n].actual));
    oe(this, "optionsToSelect2", (r) => r && r.map(this.singleOptionToSelect2));
    oe(this, "singleOptionToSelect2", (r) => {
      if (typeof r == "object") {
        const { value: n, label: i, ...a } = r;
        return { id: n, text: i || n, ...a };
      }
      return { id: r, text: r };
    });
    oe(this, "domRef", null);
    oe(this, "boundHandlers", {});
    oe(this, "internalOptions", []);
    oe(this, "actualOptions", []);
    oe(this, "$ref");
    oe(this, "mapped", {});
    const { options: n } = r;
    this.mapOptions(n), this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    const {
      placeholder: r,
      multiple: n,
      options: i,
      defaultWidgetOptions: a,
      allowClear: o,
      value: s,
      onFetchData: l,
      select2Options: u,
      fetchDataDelay: c,
      ...f
    } = this.props, d = {
      ...u,
      ...a
    }, p = this.internalOptions, m = Re(this.domRef);
    let S;
    if (d.language) {
      const R = {};
      Object.entries(d.language).forEach(([P, N]) => {
        typeof N == "function" ? R[P] = N : R[P] = () => N;
      }), d.language = R;
    }
    l && (S = { transport: (P, N, L) => {
      const { data: { term: W, page: Y } } = P;
      return l({ page: Y || 0, searchValue: W || "" }, (Q, se) => {
        const X = this.actualOptions.concat(Q);
        this.mapOptions(X), N({ results: this.optionsToSelect2(Q), pagination: { more: se } });
      }, () => {
        L();
      }), { status: 404 };
    }, delay: c });
    const w = m.select2({
      placeholder: r,
      data: p,
      allowClear: o,
      ajax: S,
      ...d
    }), C = (R, P) => {
      const N = this.getValue(w.select2("data"), n);
      R.params = {}, R.params.data = N, P(R);
    }, y = {}, T = ([R, P]) => {
      const N = this.toJQueryEvent(R), L = (W) => {
        C(W, P);
      };
      y[R] = { callback: P, actualCallback: L, jQueryEvent: N }, w.on(N, L);
    };
    Object.entries(f).filter(([R, P]) => R.startsWith("on") && P).forEach(T), this.boundHandlers = y, w.on("select2:select", () => this.handleSelect), w.val(s).trigger("change.select2"), this.$ref = w;
  }
  shouldComponentUpdate({
    options: r,
    value: n,
    disabled: i,
    ...a
  }) {
    const {
      options: o,
      multiple: s,
      value: l,
      disabled: u
    } = this.props;
    if (i !== u || !Nr(r, o) || ((n || l) && s ? !Nr(n, l) : n !== l))
      return !0;
    const c = {}, { boundHandlers: f } = this;
    try {
      Object.entries(a).filter(([d]) => d.startsWith("on")).forEach(([d, p]) => {
        if (p !== f[d].callback)
          throw c;
      });
    } catch {
      return !0;
    }
    return !1;
  }
  componentDidUpdate({ value: r, disabled: n, options: i }) {
    const {
      value: a,
      multiple: o,
      disabled: s,
      options: l
    } = this.props, u = Re(this.domRef);
    if (s !== n && u.prop("disabled", s), a !== r && u.val(a).trigger("change.select2"), Object.entries(this.props).filter(([c]) => c.startsWith("on")).forEach(([c, f]) => {
      const d = this.boundHandlers[c] || {};
      {
        const { callback: m, actualCallback: S, jQueryEvent: w } = d;
        m && f !== m && u.unbind(w, S);
      }
      const { callback: p } = d;
      if (f && f !== p) {
        const m = this.toJQueryEvent(c), S = (w, C) => {
          const y = this.getValue(u.select2("data"), o);
          w.params = {}, w.params.data = y, C(w);
        };
        if (m !== null) {
          const w = (C) => {
            S(C, f);
          };
          this.boundHandlers[c] = { callback: f, actualCallback: w, jQueryEvent: m }, u.on(m, w);
        }
      }
    }), !Nr(l, i)) {
      const c = u.val();
      u.find("option").remove(), this.mapOptions(l), this.internalOptions.forEach(({ id: f, text: d }) => {
        const p = new Option(d, f, !1, !1);
        u.append(p);
      }), u.val(c), u.trigger("select2:change");
    }
  }
  componentWillUnmount() {
    Re(this.domRef).select2("destroy");
  }
  handleSelect() {
    const { value: r, multiple: n } = this.props, { $ref: i } = this, a = this.getValue(i.select2("data"), n);
    r && a !== r && i.val(r).trigger("change.select2");
  }
  mapOptions(r) {
    this.actualOptions = r, this.internalOptions = this.optionsToSelect2(r);
    const n = {};
    r.forEach((i, a) => {
      if (typeof i == "object") {
        const { value: o } = i;
        n[o] = {}, n[o].actual = o, n[o].internal = this.internalOptions[a];
      } else
        n[i] = {}, n[i].actual = i, n[i].internal = this.internalOptions[a];
    }), this.mapped = n;
  }
  // eslint-disable-next-line class-methods-use-this
  toJQueryEvent(r) {
    let n = null;
    switch (r) {
      case "onChange":
        n = "change";
        break;
      case "onBeforeClose":
        n = "select2:closing";
        break;
      case "onClose":
        n = "select2:close";
        break;
      case "onBeforeOpening":
        n = "select2:opening";
        break;
      case "onOpen":
        n = "select2:open";
        break;
      case "onBeforeSelect":
        n = "select2:selecting";
        break;
      case "onSelect":
        n = "select2:select";
        break;
      case "onBeforeUnselect":
        n = "select2:unselecting";
        break;
      case "onUnselect":
        n = "select2:unselect";
        break;
    }
    return n;
  }
  render() {
    const {
      name: r,
      disabled: n,
      multiple: i,
      value: a,
      defaultValue: o,
      id: s,
      ...l
    } = this.props, {
      iconLeft: u,
      iconRight: c,
      addonLeft: f,
      addonRight: d,
      size: p,
      checkboxLeft: m,
      checkboxLeftProps: S,
      checkboxRight: w,
      checkboxRightProps: C,
      radioLeft: y,
      radioLeftProps: T,
      radioRight: R,
      radioRightProps: P,
      buttonLeft: N,
      buttonRight: L,
      width: W,
      help: Y
    } = l, {
      label: re,
      labelPosition: z,
      labelXs: Q,
      labelSm: se,
      labelMd: X,
      labelLg: ee,
      xs: J,
      sm: ue,
      md: ce,
      lg: Z,
      labelIcon: V,
      type: h,
      labelClass: v
    } = l;
    return /* @__PURE__ */ _(
      Dr,
      {
        iconLeft: u,
        iconRight: c,
        addonLeft: f,
        addonRight: d,
        size: p,
        checkboxLeft: m,
        checkboxLeftProps: S,
        checkboxRight: w,
        checkboxRightProps: C,
        radioLeft: y,
        radioLeftProps: T,
        radioRight: R,
        radioRightProps: P,
        buttonLeft: N,
        buttonRight: L,
        width: W,
        help: Y,
        label: re,
        labelPosition: z,
        labelXs: Q,
        labelSm: se,
        labelMd: X,
        labelLg: ee,
        name: r,
        xs: J,
        sm: ue,
        md: ce,
        lg: Z,
        labelIcon: V,
        type: h,
        labelClass: v,
        children: /* @__PURE__ */ _(
          "select",
          {
            id: s,
            ref: (g) => {
              this.domRef = g;
            },
            name: r,
            className: "form-control",
            disabled: n,
            multiple: i,
            defaultValue: o,
            style: { width: "100%" },
            "aria-label": "select2-placeholder"
          }
        )
      }
    );
  }
}
oe(U0, "defaultProps", {
  id: null,
  placeholder: "",
  multiple: !1,
  options: [],
  value: null,
  defaultValue: null,
  disabled: !1,
  defaultWidgetOptions: {},
  select2Options: {},
  name: null,
  allowClear: !1,
  onChange: null,
  onBeforeClose: null,
  onClose: null,
  onBeforeOpening: null,
  onOpen: null,
  onBeforeSelect: null,
  onSelect: null,
  onBeforeUnselect: null,
  onUnselect: null,
  onFetchData: void 0,
  fetchDataDelay: 100
});
var $0 = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})($0);
var To = $0.exports, Nl = {}, Ml = {}, Ll, pg;
function z0() {
  if (pg)
    return Ll;
  pg = 1;
  var e = Object.prototype.toString;
  return Ll = function(r) {
    var n = e.call(r), i = n === "[object Arguments]";
    return i || (i = n !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && e.call(r.callee) === "[object Function]"), i;
  }, Ll;
}
var Fl, hg;
function _R() {
  if (hg)
    return Fl;
  hg = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = z0(), i = Object.prototype.propertyIsEnumerable, a = !i.call({ toString: null }, "toString"), o = i.call(function() {
    }, "prototype"), s = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], l = function(d) {
      var p = d.constructor;
      return p && p.prototype === d;
    }, u = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, c = function() {
      if (typeof window > "u")
        return !1;
      for (var d in window)
        try {
          if (!u["$" + d] && t.call(window, d) && window[d] !== null && typeof window[d] == "object")
            try {
              l(window[d]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), f = function(d) {
      if (typeof window > "u" || !c)
        return l(d);
      try {
        return l(d);
      } catch {
        return !1;
      }
    };
    e = function(p) {
      var m = p !== null && typeof p == "object", S = r.call(p) === "[object Function]", w = n(p), C = m && r.call(p) === "[object String]", y = [];
      if (!m && !S && !w)
        throw new TypeError("Object.keys called on a non-object");
      var T = o && S;
      if (C && p.length > 0 && !t.call(p, 0))
        for (var R = 0; R < p.length; ++R)
          y.push(String(R));
      if (w && p.length > 0)
        for (var P = 0; P < p.length; ++P)
          y.push(String(P));
      else
        for (var N in p)
          !(T && N === "prototype") && t.call(p, N) && y.push(String(N));
      if (a)
        for (var L = f(p), W = 0; W < s.length; ++W)
          !(L && s[W] === "constructor") && t.call(p, s[W]) && y.push(s[W]);
      return y;
    };
  }
  return Fl = e, Fl;
}
var jl, vg;
function TR() {
  if (vg)
    return jl;
  vg = 1;
  var e = Array.prototype.slice, t = z0(), r = Object.keys, n = r ? function(o) {
    return r(o);
  } : _R(), i = Object.keys;
  return n.shim = function() {
    if (Object.keys) {
      var o = function() {
        var s = Object.keys(arguments);
        return s && s.length === arguments.length;
      }(1, 2);
      o || (Object.keys = function(l) {
        return t(l) ? i(e.call(l)) : i(l);
      });
    } else
      Object.keys = n;
    return Object.keys || n;
  }, jl = n, jl;
}
var ql, gg;
function Y0() {
  return gg || (gg = 1, ql = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (r in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var o = Object.getOwnPropertyDescriptor(t, r);
      if (o.value !== i || o.enumerable !== !0)
        return !1;
    }
    return !0;
  }), ql;
}
var Wl, mg;
function G0() {
  if (mg)
    return Wl;
  mg = 1;
  var e = typeof Symbol < "u" && Symbol, t = Y0();
  return Wl = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Wl;
}
var Hl, yg;
function X0() {
  if (yg)
    return Hl;
  yg = 1;
  var e = {
    foo: {}
  }, t = Object;
  return Hl = function() {
    return { __proto__: e }.foo === e.foo && !({ __proto__: null } instanceof t);
  }, Hl;
}
var Vl, bg;
function PR() {
  if (bg)
    return Vl;
  bg = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(l, u) {
    for (var c = [], f = 0; f < l.length; f += 1)
      c[f] = l[f];
    for (var d = 0; d < u.length; d += 1)
      c[d + l.length] = u[d];
    return c;
  }, a = function(l, u) {
    for (var c = [], f = u || 0, d = 0; f < l.length; f += 1, d += 1)
      c[d] = l[f];
    return c;
  }, o = function(s, l) {
    for (var u = "", c = 0; c < s.length; c += 1)
      u += s[c], c + 1 < s.length && (u += l);
    return u;
  };
  return Vl = function(l) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var c = a(arguments, 1), f, d = function() {
      if (this instanceof f) {
        var C = u.apply(
          this,
          i(c, arguments)
        );
        return Object(C) === C ? C : this;
      }
      return u.apply(
        l,
        i(c, arguments)
      );
    }, p = r(0, u.length - c.length), m = [], S = 0; S < p; S++)
      m[S] = "$" + S;
    if (f = Function("binder", "return function (" + o(m, ",") + "){ return binder.apply(this,arguments); }")(d), u.prototype) {
      var w = function() {
      };
      w.prototype = u.prototype, f.prototype = new w(), w.prototype = null;
    }
    return f;
  }, Vl;
}
var Bl, wg;
function wd() {
  if (wg)
    return Bl;
  wg = 1;
  var e = PR();
  return Bl = Function.prototype.bind || e, Bl;
}
var Ul, Sg;
function fn() {
  if (Sg)
    return Ul;
  Sg = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = wd();
  return Ul = r.call(e, t), Ul;
}
var $l, xg;
function tt() {
  if (xg)
    return $l;
  xg = 1;
  var e, t = SyntaxError, r = Function, n = TypeError, i = function(Q) {
    try {
      return r('"use strict"; return (' + Q + ").constructor;")();
    } catch {
    }
  }, a = Object.getOwnPropertyDescriptor;
  if (a)
    try {
      a({}, "");
    } catch {
      a = null;
    }
  var o = function() {
    throw new n();
  }, s = a ? function() {
    try {
      return arguments.callee, o;
    } catch {
      try {
        return a(arguments, "callee").get;
      } catch {
        return o;
      }
    }
  }() : o, l = G0()(), u = X0()(), c = Object.getPrototypeOf || (u ? function(Q) {
    return Q.__proto__;
  } : null), f = {}, d = typeof Uint8Array > "u" || !c ? e : c(Uint8Array), p = {
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": l && c ? c([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": f,
    "%AsyncGenerator%": f,
    "%AsyncGeneratorFunction%": f,
    "%AsyncIteratorPrototype%": f,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": r,
    "%GeneratorFunction%": f,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": l && c ? c(c([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !l || !c ? e : c((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !l || !c ? e : c((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": l && c ? c(""[Symbol.iterator]()) : e,
    "%Symbol%": l ? Symbol : e,
    "%SyntaxError%": t,
    "%ThrowTypeError%": s,
    "%TypedArray%": d,
    "%TypeError%": n,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet
  };
  if (c)
    try {
      null.error;
    } catch (Q) {
      var m = c(c(Q));
      p["%Error.prototype%"] = m;
    }
  var S = function Q(se) {
    var X;
    if (se === "%AsyncFunction%")
      X = i("async function () {}");
    else if (se === "%GeneratorFunction%")
      X = i("function* () {}");
    else if (se === "%AsyncGeneratorFunction%")
      X = i("async function* () {}");
    else if (se === "%AsyncGenerator%") {
      var ee = Q("%AsyncGeneratorFunction%");
      ee && (X = ee.prototype);
    } else if (se === "%AsyncIteratorPrototype%") {
      var J = Q("%AsyncGenerator%");
      J && c && (X = c(J.prototype));
    }
    return p[se] = X, X;
  }, w = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, C = wd(), y = fn(), T = C.call(Function.call, Array.prototype.concat), R = C.call(Function.apply, Array.prototype.splice), P = C.call(Function.call, String.prototype.replace), N = C.call(Function.call, String.prototype.slice), L = C.call(Function.call, RegExp.prototype.exec), W = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Y = /\\(\\)?/g, re = function(se) {
    var X = N(se, 0, 1), ee = N(se, -1);
    if (X === "%" && ee !== "%")
      throw new t("invalid intrinsic syntax, expected closing `%`");
    if (ee === "%" && X !== "%")
      throw new t("invalid intrinsic syntax, expected opening `%`");
    var J = [];
    return P(se, W, function(ue, ce, Z, V) {
      J[J.length] = Z ? P(V, Y, "$1") : ce || ue;
    }), J;
  }, z = function(se, X) {
    var ee = se, J;
    if (y(w, ee) && (J = w[ee], ee = "%" + J[0] + "%"), y(p, ee)) {
      var ue = p[ee];
      if (ue === f && (ue = S(ee)), typeof ue > "u" && !X)
        throw new n("intrinsic " + se + " exists, but is not available. Please file an issue!");
      return {
        alias: J,
        name: ee,
        value: ue
      };
    }
    throw new t("intrinsic " + se + " does not exist!");
  };
  return $l = function(se, X) {
    if (typeof se != "string" || se.length === 0)
      throw new n("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof X != "boolean")
      throw new n('"allowMissing" argument must be a boolean');
    if (L(/^%?[^%]*%?$/, se) === null)
      throw new t("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ee = re(se), J = ee.length > 0 ? ee[0] : "", ue = z("%" + J + "%", X), ce = ue.name, Z = ue.value, V = !1, h = ue.alias;
    h && (J = h[0], R(ee, T([0, 1], h)));
    for (var v = 1, g = !0; v < ee.length; v += 1) {
      var b = ee[v], A = N(b, 0, 1), E = N(b, -1);
      if ((A === '"' || A === "'" || A === "`" || E === '"' || E === "'" || E === "`") && A !== E)
        throw new t("property names with quotes must have matching quotes");
      if ((b === "constructor" || !g) && (V = !0), J += "." + b, ce = "%" + J + "%", y(p, ce))
        Z = p[ce];
      else if (Z != null) {
        if (!(b in Z)) {
          if (!X)
            throw new n("base intrinsic for " + se + " exists, but the property is not available.");
          return;
        }
        if (a && v + 1 >= ee.length) {
          var I = a(Z, b);
          g = !!I, g && "get" in I && !("originalValue" in I.get) ? Z = I.get : Z = Z[b];
        } else
          g = y(Z, b), Z = Z[b];
        g && !V && (p[ce] = Z);
      }
    }
    return Z;
  }, $l;
}
var zl, Cg;
function Po() {
  if (Cg)
    return zl;
  Cg = 1;
  var e = tt(), t = e("%Object.defineProperty%", !0), r = function() {
    if (t)
      try {
        return t({}, "a", { value: 1 }), !0;
      } catch {
        return !1;
      }
    return !1;
  };
  return r.hasArrayLengthDefineBug = function() {
    if (!r())
      return null;
    try {
      return t([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, zl = r, zl;
}
var Yl, _g;
function Sd() {
  if (_g)
    return Yl;
  _g = 1;
  var e = tt(), t = e("%Object.getOwnPropertyDescriptor%", !0);
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  return Yl = t, Yl;
}
var Gl, Tg;
function K0() {
  if (Tg)
    return Gl;
  Tg = 1;
  var e = Po()(), t = tt(), r = e && t("%Object.defineProperty%", !0);
  if (r)
    try {
      r({}, "a", { value: 1 });
    } catch {
      r = !1;
    }
  var n = t("%SyntaxError%"), i = t("%TypeError%"), a = Sd();
  return Gl = function(s, l, u) {
    if (!s || typeof s != "object" && typeof s != "function")
      throw new i("`obj` must be an object or a function`");
    if (typeof l != "string" && typeof l != "symbol")
      throw new i("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new i("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new i("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new i("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new i("`loose`, if provided, must be a boolean");
    var c = arguments.length > 3 ? arguments[3] : null, f = arguments.length > 4 ? arguments[4] : null, d = arguments.length > 5 ? arguments[5] : null, p = arguments.length > 6 ? arguments[6] : !1, m = !!a && a(s, l);
    if (r)
      r(s, l, {
        configurable: d === null && m ? m.configurable : !d,
        enumerable: c === null && m ? m.enumerable : !c,
        value: u,
        writable: f === null && m ? m.writable : !f
      });
    else if (p || !c && !f && !d)
      s[l] = u;
    else
      throw new n("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, Gl;
}
var Xl, Pg;
function Yi() {
  if (Pg)
    return Xl;
  Pg = 1;
  var e = TR(), t = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", r = Object.prototype.toString, n = Array.prototype.concat, i = K0(), a = function(u) {
    return typeof u == "function" && r.call(u) === "[object Function]";
  }, o = Po()(), s = function(u, c, f, d) {
    if (c in u) {
      if (d === !0) {
        if (u[c] === f)
          return;
      } else if (!a(d) || !d())
        return;
    }
    o ? i(u, c, f, !0) : i(u, c, f);
  }, l = function(u, c) {
    var f = arguments.length > 2 ? arguments[2] : {}, d = e(c);
    t && (d = n.call(d, Object.getOwnPropertySymbols(c)));
    for (var p = 0; p < d.length; p += 1)
      s(u, d[p], c[d[p]], f[d[p]]);
  };
  return l.supportsDescriptors = !!o, Xl = l, Xl;
}
var Kl = { exports: {} }, Jl, Dg;
function DR() {
  if (Dg)
    return Jl;
  Dg = 1;
  var e = tt(), t = K0(), r = Po()(), n = Sd(), i = e("%TypeError%"), a = e("%Math.floor%");
  return Jl = function(s, l) {
    if (typeof s != "function")
      throw new i("`fn` is not a function");
    if (typeof l != "number" || l < 0 || l > 4294967295 || a(l) !== l)
      throw new i("`length` must be a positive 32-bit integer");
    var u = arguments.length > 2 && !!arguments[2], c = !0, f = !0;
    if ("length" in s && n) {
      var d = n(s, "length");
      d && !d.configurable && (c = !1), d && !d.writable && (f = !1);
    }
    return (c || f || !u) && (r ? t(s, "length", l, !0, !0) : t(s, "length", l)), s;
  }, Jl;
}
var Eg;
function xd() {
  return Eg || (Eg = 1, function(e) {
    var t = wd(), r = tt(), n = DR(), i = r("%TypeError%"), a = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || t.call(o, a), l = r("%Object.defineProperty%", !0), u = r("%Math.max%");
    if (l)
      try {
        l({}, "a", { value: 1 });
      } catch {
        l = null;
      }
    e.exports = function(d) {
      if (typeof d != "function")
        throw new i("a function is required");
      var p = s(t, o, arguments);
      return n(
        p,
        1 + u(0, d.length - (arguments.length - 1)),
        !0
      );
    };
    var c = function() {
      return s(t, a, arguments);
    };
    l ? l(e.exports, "apply", { value: c }) : e.exports.apply = c;
  }(Kl)), Kl.exports;
}
var Zl, Rg;
function Do() {
  return Rg || (Rg = 1, Zl = Number.isNaN || function(t) {
    return t !== t;
  }), Zl;
}
var Ql, Og;
function J0() {
  if (Og)
    return Ql;
  Og = 1;
  var e = Do();
  return Ql = function(t) {
    return (typeof t == "number" || typeof t == "bigint") && !e(t) && t !== 1 / 0 && t !== -1 / 0;
  }, Ql;
}
var eu, kg;
function Cd() {
  if (kg)
    return eu;
  kg = 1;
  var e = tt(), t = e("%Math.abs%"), r = e("%Math.floor%"), n = Do(), i = J0();
  return eu = function(o) {
    if (typeof o != "number" || n(o) || !i(o))
      return !1;
    var s = t(o);
    return r(s) === s;
  }, eu;
}
var tu, Ag;
function ER() {
  if (Ag)
    return tu;
  Ag = 1;
  var e = tt(), t = e("%Array.prototype%"), r = e("%RangeError%"), n = e("%SyntaxError%"), i = e("%TypeError%"), a = Cd(), o = Math.pow(2, 32) - 1, s = X0()(), l = e("%Object.setPrototypeOf%", !0) || (s ? function(u, c) {
    return u.__proto__ = c, u;
  } : null);
  return tu = function(c) {
    if (!a(c) || c < 0)
      throw new i("Assertion failed: `length` must be an integer Number >= 0");
    if (c > o)
      throw new r("length is greater than (2**32 - 1)");
    var f = arguments.length > 1 ? arguments[1] : t, d = [];
    if (f !== t) {
      if (!l)
        throw new n("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
      l(d, f);
    }
    return c !== 0 && (d.length = c), d;
  }, tu;
}
const RR = {}, OR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RR
}, Symbol.toStringTag, { value: "Module" })), kR = /* @__PURE__ */ ly(OR);
var ru, Ig;
function AR() {
  if (Ig)
    return ru;
  Ig = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, o = i && a && typeof a.get == "function" ? a.get : null, s = i && Set.prototype.forEach, l = typeof WeakMap == "function" && WeakMap.prototype, u = l ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, d = typeof WeakRef == "function" && WeakRef.prototype, p = d ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, S = Object.prototype.toString, w = Function.prototype.toString, C = String.prototype.match, y = String.prototype.slice, T = String.prototype.replace, R = String.prototype.toUpperCase, P = String.prototype.toLowerCase, N = RegExp.prototype.test, L = Array.prototype.concat, W = Array.prototype.join, Y = Array.prototype.slice, re = Math.floor, z = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Q = Object.getOwnPropertySymbols, se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, X = typeof Symbol == "function" && typeof Symbol.iterator == "object", ee = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === X || !0) ? Symbol.toStringTag : null, J = Object.prototype.propertyIsEnumerable, ue = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(F) {
    return F.__proto__;
  } : null);
  function ce(F, $) {
    if (F === 1 / 0 || F === -1 / 0 || F !== F || F && F > -1e3 && F < 1e3 || N.call(/e/, $))
      return $;
    var Fe = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof F == "number") {
      var We = F < 0 ? -re(-F) : re(F);
      if (We !== F) {
        var it = String(We), Le = y.call($, it.length + 1);
        return T.call(it, Fe, "$&_") + "." + T.call(T.call(Le, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return T.call($, Fe, "$&_");
  }
  var Z = kR, V = Z.custom, h = ae(V) ? V : null;
  ru = function F($, Fe, We, it) {
    var Le = Fe || {};
    if (de(Le, "quoteStyle") && Le.quoteStyle !== "single" && Le.quoteStyle !== "double")
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (de(Le, "maxStringLength") && (typeof Le.maxStringLength == "number" ? Le.maxStringLength < 0 && Le.maxStringLength !== 1 / 0 : Le.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Dt = de(Le, "customInspect") ? Le.customInspect : !0;
    if (typeof Dt != "boolean" && Dt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (de(Le, "indent") && Le.indent !== null && Le.indent !== "	" && !(parseInt(Le.indent, 10) === Le.indent && Le.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (de(Le, "numericSeparator") && typeof Le.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var qt = Le.numericSeparator;
    if (typeof $ > "u")
      return "undefined";
    if ($ === null)
      return "null";
    if (typeof $ == "boolean")
      return $ ? "true" : "false";
    if (typeof $ == "string")
      return He($, Le);
    if (typeof $ == "number") {
      if ($ === 0)
        return 1 / 0 / $ > 0 ? "0" : "-0";
      var mt = String($);
      return qt ? ce($, mt) : mt;
    }
    if (typeof $ == "bigint") {
      var At = String($) + "n";
      return qt ? ce($, At) : At;
    }
    var It = typeof Le.depth > "u" ? 5 : Le.depth;
    if (typeof We > "u" && (We = 0), We >= It && It > 0 && typeof $ == "object")
      return b($) ? "[Array]" : "[Object]";
    var Et = Qe(Le, We);
    if (typeof it > "u")
      it = [];
    else if (De(it, $) >= 0)
      return "[Circular]";
    function M(ht, Wt, wt) {
      if (Wt && (it = Y.call(it), it.push(Wt)), wt) {
        var br = {
          depth: Le.depth
        };
        return de(Le, "quoteStyle") && (br.quoteStyle = Le.quoteStyle), F(ht, br, We + 1, it);
      }
      return F(ht, Le, We + 1, it);
    }
    if (typeof $ == "function" && !E($)) {
      var G = Ee($), B = fe($, M);
      return "[Function" + (G ? ": " + G : " (anonymous)") + "]" + (B.length > 0 ? " { " + W.call(B, ", ") + " }" : "");
    }
    if (ae($)) {
      var ye = X ? T.call(String($), /^(Symbol\(.*\))_[^)]*$/, "$1") : se.call($);
      return typeof $ == "object" && !X ? ze(ye) : ye;
    }
    if (Me($)) {
      for (var Te = "<" + P.call(String($.nodeName)), we = $.attributes || [], Pe = 0; Pe < we.length; Pe++)
        Te += " " + we[Pe].name + "=" + v(g(we[Pe].value), "double", Le);
      return Te += ">", $.childNodes && $.childNodes.length && (Te += "..."), Te += "</" + P.call(String($.nodeName)) + ">", Te;
    }
    if (b($)) {
      if ($.length === 0)
        return "[]";
      var me = fe($, M);
      return Et && !Ve(me) ? "[" + qe(me, Et) + "]" : "[ " + W.call(me, ", ") + " ]";
    }
    if (I($)) {
      var ge = fe($, M);
      return !("cause" in Error.prototype) && "cause" in $ && !J.call($, "cause") ? "{ [" + String($) + "] " + W.call(L.call("[cause]: " + M($.cause), ge), ", ") + " }" : ge.length === 0 ? "[" + String($) + "]" : "{ [" + String($) + "] " + W.call(ge, ", ") + " }";
    }
    if (typeof $ == "object" && Dt) {
      if (h && typeof $[h] == "function" && Z)
        return Z($, { depth: It - We });
      if (Dt !== "symbol" && typeof $.inspect == "function")
        return $.inspect();
    }
    if (Ce($)) {
      var gt = [];
      return n && n.call($, function(ht, Wt) {
        gt.push(M(Wt, $, !0) + " => " + M(ht, $));
      }), Ye("Map", r.call($), gt, Et);
    }
    if (Ke($)) {
      var et = [];
      return s && s.call($, function(ht) {
        et.push(M(ht, $));
      }), Ye("Set", o.call($), et, Et);
    }
    if (Ie($))
      return Je("WeakMap");
    if ($e($))
      return Je("WeakSet");
    if (Oe($))
      return Je("WeakRef");
    if (q($))
      return ze(M(Number($)));
    if (U($))
      return ze(M(z.call($)));
    if (K($))
      return ze(m.call($));
    if (H($))
      return ze(M(String($)));
    if (typeof window < "u" && $ === window)
      return "{ [object Window] }";
    if ($ === vi)
      return "{ [object globalThis] }";
    if (!A($) && !E($)) {
      var Be = fe($, M), rt = ue ? ue($) === Object.prototype : $ instanceof Object || $.constructor === Object, Ze = $ instanceof Object ? "" : "null prototype", at = !rt && ee && Object($) === $ && ee in $ ? y.call(he($), 8, -1) : Ze ? "Object" : "", dt = rt || typeof $.constructor != "function" ? "" : $.constructor.name ? $.constructor.name + " " : "", ft = dt + (at || Ze ? "[" + W.call(L.call([], at || [], Ze || []), ": ") + "] " : "");
      return Be.length === 0 ? ft + "{}" : Et ? ft + "{" + qe(Be, Et) + "}" : ft + "{ " + W.call(Be, ", ") + " }";
    }
    return String($);
  };
  function v(F, $, Fe) {
    var We = (Fe.quoteStyle || $) === "double" ? '"' : "'";
    return We + F + We;
  }
  function g(F) {
    return T.call(String(F), /"/g, "&quot;");
  }
  function b(F) {
    return he(F) === "[object Array]" && (!ee || !(typeof F == "object" && ee in F));
  }
  function A(F) {
    return he(F) === "[object Date]" && (!ee || !(typeof F == "object" && ee in F));
  }
  function E(F) {
    return he(F) === "[object RegExp]" && (!ee || !(typeof F == "object" && ee in F));
  }
  function I(F) {
    return he(F) === "[object Error]" && (!ee || !(typeof F == "object" && ee in F));
  }
  function H(F) {
    return he(F) === "[object String]" && (!ee || !(typeof F == "object" && ee in F));
  }
  function q(F) {
    return he(F) === "[object Number]" && (!ee || !(typeof F == "object" && ee in F));
  }
  function K(F) {
    return he(F) === "[object Boolean]" && (!ee || !(typeof F == "object" && ee in F));
  }
  function ae(F) {
    if (X)
      return F && typeof F == "object" && F instanceof Symbol;
    if (typeof F == "symbol")
      return !0;
    if (!F || typeof F != "object" || !se)
      return !1;
    try {
      return se.call(F), !0;
    } catch {
    }
    return !1;
  }
  function U(F) {
    if (!F || typeof F != "object" || !z)
      return !1;
    try {
      return z.call(F), !0;
    } catch {
    }
    return !1;
  }
  var ve = Object.prototype.hasOwnProperty || function(F) {
    return F in this;
  };
  function de(F, $) {
    return ve.call(F, $);
  }
  function he(F) {
    return S.call(F);
  }
  function Ee(F) {
    if (F.name)
      return F.name;
    var $ = C.call(w.call(F), /^function\s*([\w$]+)/);
    return $ ? $[1] : null;
  }
  function De(F, $) {
    if (F.indexOf)
      return F.indexOf($);
    for (var Fe = 0, We = F.length; Fe < We; Fe++)
      if (F[Fe] === $)
        return Fe;
    return -1;
  }
  function Ce(F) {
    if (!r || !F || typeof F != "object")
      return !1;
    try {
      r.call(F);
      try {
        o.call(F);
      } catch {
        return !0;
      }
      return F instanceof Map;
    } catch {
    }
    return !1;
  }
  function Ie(F) {
    if (!u || !F || typeof F != "object")
      return !1;
    try {
      u.call(F, u);
      try {
        f.call(F, f);
      } catch {
        return !0;
      }
      return F instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Oe(F) {
    if (!p || !F || typeof F != "object")
      return !1;
    try {
      return p.call(F), !0;
    } catch {
    }
    return !1;
  }
  function Ke(F) {
    if (!o || !F || typeof F != "object")
      return !1;
    try {
      o.call(F);
      try {
        r.call(F);
      } catch {
        return !0;
      }
      return F instanceof Set;
    } catch {
    }
    return !1;
  }
  function $e(F) {
    if (!f || !F || typeof F != "object")
      return !1;
    try {
      f.call(F, f);
      try {
        u.call(F, u);
      } catch {
        return !0;
      }
      return F instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Me(F) {
    return !F || typeof F != "object" ? !1 : typeof HTMLElement < "u" && F instanceof HTMLElement ? !0 : typeof F.nodeName == "string" && typeof F.getAttribute == "function";
  }
  function He(F, $) {
    if (F.length > $.maxStringLength) {
      var Fe = F.length - $.maxStringLength, We = "... " + Fe + " more character" + (Fe > 1 ? "s" : "");
      return He(y.call(F, 0, $.maxStringLength), $) + We;
    }
    var it = T.call(T.call(F, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, st);
    return v(it, "single", $);
  }
  function st(F) {
    var $ = F.charCodeAt(0), Fe = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[$];
    return Fe ? "\\" + Fe : "\\x" + ($ < 16 ? "0" : "") + R.call($.toString(16));
  }
  function ze(F) {
    return "Object(" + F + ")";
  }
  function Je(F) {
    return F + " { ? }";
  }
  function Ye(F, $, Fe, We) {
    var it = We ? qe(Fe, We) : W.call(Fe, ", ");
    return F + " (" + $ + ") {" + it + "}";
  }
  function Ve(F) {
    for (var $ = 0; $ < F.length; $++)
      if (De(F[$], `
`) >= 0)
        return !1;
    return !0;
  }
  function Qe(F, $) {
    var Fe;
    if (F.indent === "	")
      Fe = "	";
    else if (typeof F.indent == "number" && F.indent > 0)
      Fe = W.call(Array(F.indent + 1), " ");
    else
      return null;
    return {
      base: Fe,
      prev: W.call(Array($ + 1), Fe)
    };
  }
  function qe(F, $) {
    if (F.length === 0)
      return "";
    var Fe = `
` + $.prev + $.base;
    return Fe + W.call(F, "," + Fe) + `
` + $.prev;
  }
  function fe(F, $) {
    var Fe = b(F), We = [];
    if (Fe) {
      We.length = F.length;
      for (var it = 0; it < F.length; it++)
        We[it] = de(F, it) ? $(F[it], F) : "";
    }
    var Le = typeof Q == "function" ? Q(F) : [], Dt;
    if (X) {
      Dt = {};
      for (var qt = 0; qt < Le.length; qt++)
        Dt["$" + Le[qt]] = Le[qt];
    }
    for (var mt in F)
      de(F, mt) && (Fe && String(Number(mt)) === mt && mt < F.length || X && Dt["$" + mt] instanceof Symbol || (N.call(/[^\w$]/, mt) ? We.push($(mt, F) + ": " + $(F[mt], F)) : We.push(mt + ": " + $(F[mt], F))));
    if (typeof Q == "function")
      for (var At = 0; At < Le.length; At++)
        J.call(F, Le[At]) && We.push("[" + $(Le[At]) + "]: " + $(F[Le[At]], F));
    return We;
  }
  return ru;
}
var nu, Ng;
function Tn() {
  return Ng || (Ng = 1, nu = function(t) {
    return typeof t == "string" || typeof t == "symbol";
  }), nu;
}
var iu, Mg;
function IR() {
  return Mg || (Mg = 1, iu = function(t) {
    if (t === null)
      return "Null";
    if (typeof t > "u")
      return "Undefined";
    if (typeof t == "function" || typeof t == "object")
      return "Object";
    if (typeof t == "number")
      return "Number";
    if (typeof t == "boolean")
      return "Boolean";
    if (typeof t == "string")
      return "String";
  }), iu;
}
var au, Lg;
function jt() {
  if (Lg)
    return au;
  Lg = 1;
  var e = IR();
  return au = function(r) {
    return typeof r == "symbol" ? "Symbol" : typeof r == "bigint" ? "BigInt" : e(r);
  }, au;
}
var ou, Fg;
function Eo() {
  if (Fg)
    return ou;
  Fg = 1;
  var e = tt(), t = e("%TypeError%"), r = AR(), n = Tn(), i = jt();
  return ou = function(o, s) {
    if (i(o) !== "Object")
      throw new t("Assertion failed: Type(O) is not Object");
    if (!n(s))
      throw new t("Assertion failed: IsPropertyKey(P) is not true, got " + r(s));
    return o[s];
  }, ou;
}
var su, jg;
function Pn() {
  if (jg)
    return su;
  jg = 1;
  var e = tt(), t = xd(), r = t(e("String.prototype.indexOf"));
  return su = function(i, a) {
    var o = e(i, !!a);
    return typeof o == "function" && r(i, ".prototype.") > -1 ? t(o) : o;
  }, su;
}
var lu, qg;
function Z0() {
  if (qg)
    return lu;
  qg = 1;
  var e = tt(), t = e("%Array%"), r = !t.isArray && Pn()("Object.prototype.toString");
  return lu = t.isArray || function(i) {
    return r(i) === "[object Array]";
  }, lu;
}
var uu, Wg;
function _d() {
  return Wg || (Wg = 1, uu = Z0()), uu;
}
var Ca = { exports: {} }, cu, Hg;
function NR() {
  return Hg || (Hg = 1, cu = tt()), cu;
}
var fu, Vg;
function Td() {
  if (Vg)
    return fu;
  Vg = 1;
  var e = tt(), t = fn(), r = e("%TypeError%");
  return fu = function(i, a) {
    if (i.Type(a) !== "Object")
      return !1;
    var o = {
      "[[Configurable]]": !0,
      "[[Enumerable]]": !0,
      "[[Get]]": !0,
      "[[Set]]": !0,
      "[[Value]]": !0,
      "[[Writable]]": !0
    };
    for (var s in a)
      if (t(a, s) && !o[s])
        return !1;
    if (i.IsDataDescriptor(a) && i.IsAccessorDescriptor(a))
      throw new r("Property Descriptors may not be both accessor and data descriptors");
    return !0;
  }, fu;
}
var du, Bg;
function Q0() {
  if (Bg)
    return du;
  Bg = 1;
  var e = Po(), t = tt(), r = e() && t("%Object.defineProperty%", !0), n = e.hasArrayLengthDefineBug(), i = n && Z0(), a = Pn(), o = a("Object.prototype.propertyIsEnumerable");
  return du = function(l, u, c, f, d, p) {
    if (!r) {
      if (!l(p) || !p["[[Configurable]]"] || !p["[[Writable]]"] || d in f && o(f, d) !== !!p["[[Enumerable]]"])
        return !1;
      var m = p["[[Value]]"];
      return f[d] = m, u(f[d], m);
    }
    return n && d === "length" && "[[Value]]" in p && i(f) && f.length !== p["[[Value]]"] ? (f.length = p["[[Value]]"], f.length === p["[[Value]]"]) : (r(f, d, c(p)), !0);
  }, du;
}
var pu, Ug;
function MR() {
  if (Ug)
    return pu;
  Ug = 1;
  var e = fn();
  return pu = function(r) {
    return e(r, "[[StartIndex]]") && e(r, "[[EndIndex]]") && r["[[StartIndex]]"] >= 0 && r["[[EndIndex]]"] >= r["[[StartIndex]]"] && String(parseInt(r["[[StartIndex]]"], 10)) === String(r["[[StartIndex]]"]) && String(parseInt(r["[[EndIndex]]"], 10)) === String(r["[[EndIndex]]"]);
  }, pu;
}
var hu, $g;
function Ro() {
  if ($g)
    return hu;
  $g = 1;
  var e = tt(), t = e("%TypeError%"), r = e("%SyntaxError%"), n = fn(), i = Cd(), a = MR(), o = {
    // https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type
    "Property Descriptor": function(l) {
      var u = {
        "[[Configurable]]": !0,
        "[[Enumerable]]": !0,
        "[[Get]]": !0,
        "[[Set]]": !0,
        "[[Value]]": !0,
        "[[Writable]]": !0
      };
      if (!l)
        return !1;
      for (var c in l)
        if (n(l, c) && !u[c])
          return !1;
      var f = n(l, "[[Value]]"), d = n(l, "[[Get]]") || n(l, "[[Set]]");
      if (f && d)
        throw new t("Property Descriptors may not be both accessor and data descriptors");
      return !0;
    },
    // https://262.ecma-international.org/13.0/#sec-match-records
    "Match Record": a,
    "Iterator Record": function(l) {
      return n(l, "[[Iterator]]") && n(l, "[[NextMethod]]") && n(l, "[[Done]]");
    },
    "PromiseCapability Record": function(l) {
      return !!l && n(l, "[[Resolve]]") && typeof l["[[Resolve]]"] == "function" && n(l, "[[Reject]]") && typeof l["[[Reject]]"] == "function" && n(l, "[[Promise]]") && l["[[Promise]]"] && typeof l["[[Promise]]"].then == "function";
    },
    "AsyncGeneratorRequest Record": function(l) {
      return !!l && n(l, "[[Completion]]") && n(l, "[[Capability]]") && o["PromiseCapability Record"](l["[[Capability]]"]);
    },
    "RegExp Record": function(l) {
      return l && n(l, "[[IgnoreCase]]") && typeof l["[[IgnoreCase]]"] == "boolean" && n(l, "[[Multiline]]") && typeof l["[[Multiline]]"] == "boolean" && n(l, "[[DotAll]]") && typeof l["[[DotAll]]"] == "boolean" && n(l, "[[Unicode]]") && typeof l["[[Unicode]]"] == "boolean" && n(l, "[[CapturingGroupsCount]]") && typeof l["[[CapturingGroupsCount]]"] == "number" && i(l["[[CapturingGroupsCount]]"]) && l["[[CapturingGroupsCount]]"] >= 0;
    }
  };
  return hu = function(l, u, c, f) {
    var d = o[u];
    if (typeof d != "function")
      throw new r("unknown record type: " + u);
    if (l(f) !== "Object" || !d(f))
      throw new t(c + " must be a " + u);
  }, hu;
}
var vu, zg;
function LR() {
  return zg || (zg = 1, vu = function(t) {
    if (typeof t > "u")
      return t;
    var r = {};
    return "[[Value]]" in t && (r.value = t["[[Value]]"]), "[[Writable]]" in t && (r.writable = !!t["[[Writable]]"]), "[[Get]]" in t && (r.get = t["[[Get]]"]), "[[Set]]" in t && (r.set = t["[[Set]]"]), "[[Enumerable]]" in t && (r.enumerable = !!t["[[Enumerable]]"]), "[[Configurable]]" in t && (r.configurable = !!t["[[Configurable]]"]), r;
  }), vu;
}
var gu, Yg;
function ew() {
  if (Yg)
    return gu;
  Yg = 1;
  var e = Ro(), t = LR(), r = jt();
  return gu = function(i) {
    return typeof i < "u" && e(r, "Property Descriptor", "Desc", i), t(i);
  }, gu;
}
var mu, Gg;
function Oo() {
  if (Gg)
    return mu;
  Gg = 1;
  var e = fn(), t = jt(), r = Ro();
  return mu = function(i) {
    return !(typeof i > "u" || (r(t, "Property Descriptor", "Desc", i), !e(i, "[[Get]]") && !e(i, "[[Set]]")));
  }, mu;
}
var yu, Xg;
function ko() {
  if (Xg)
    return yu;
  Xg = 1;
  var e = fn(), t = jt(), r = Ro();
  return yu = function(i) {
    return !(typeof i > "u" || (r(t, "Property Descriptor", "Desc", i), !e(i, "[[Value]]") && !e(i, "[[Writable]]")));
  }, yu;
}
var bu, Kg;
function Pd() {
  if (Kg)
    return bu;
  Kg = 1;
  var e = Do();
  return bu = function(r, n) {
    return r === n ? r === 0 ? 1 / r === 1 / n : !0 : e(r) && e(n);
  }, bu;
}
var wu, Jg;
function FR() {
  return Jg || (Jg = 1, wu = function(t) {
    return !!t;
  }), wu;
}
var Su, Zg;
function tw() {
  if (Zg)
    return Su;
  Zg = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, r, n;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      r = Object.defineProperty({}, "length", {
        get: function() {
          throw n;
        }
      }), n = {}, t(function() {
        throw 42;
      }, null, r);
    } catch (y) {
      y !== n && (t = null);
    }
  else
    t = null;
  var i = /^\s*class\b/, a = function(T) {
    try {
      var R = e.call(T);
      return i.test(R);
    } catch {
      return !1;
    }
  }, o = function(T) {
    try {
      return a(T) ? !1 : (e.call(T), !0);
    } catch {
      return !1;
    }
  }, s = Object.prototype.toString, l = "[object Object]", u = "[object Function]", c = "[object GeneratorFunction]", f = "[object HTMLAllCollection]", d = "[object HTML document.all class]", p = "[object HTMLCollection]", m = typeof Symbol == "function" && !!Symbol.toStringTag, S = !(0 in [,]), w = function() {
    return !1;
  };
  if (typeof document == "object") {
    var C = document.all;
    s.call(C) === s.call(document.all) && (w = function(T) {
      if ((S || !T) && (typeof T > "u" || typeof T == "object"))
        try {
          var R = s.call(T);
          return (R === f || R === d || R === p || R === l) && T("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Su = t ? function(T) {
    if (w(T))
      return !0;
    if (!T || typeof T != "function" && typeof T != "object")
      return !1;
    try {
      t(T, null, r);
    } catch (R) {
      if (R !== n)
        return !1;
    }
    return !a(T) && o(T);
  } : function(T) {
    if (w(T))
      return !0;
    if (!T || typeof T != "function" && typeof T != "object")
      return !1;
    if (m)
      return o(T);
    if (a(T))
      return !1;
    var R = s.call(T);
    return R !== u && R !== c && !/^\[object HTML/.test(R) ? !1 : o(T);
  }, Su;
}
var xu, Qg;
function jR() {
  return Qg || (Qg = 1, xu = tw()), xu;
}
var Cu, em;
function rw() {
  if (em)
    return Cu;
  em = 1;
  var e = fn(), t = tt(), r = t("%TypeError%"), n = jt(), i = FR(), a = jR();
  return Cu = function(s) {
    if (n(s) !== "Object")
      throw new r("ToPropertyDescriptor requires an object");
    var l = {};
    if (e(s, "enumerable") && (l["[[Enumerable]]"] = i(s.enumerable)), e(s, "configurable") && (l["[[Configurable]]"] = i(s.configurable)), e(s, "value") && (l["[[Value]]"] = s.value), e(s, "writable") && (l["[[Writable]]"] = i(s.writable)), e(s, "get")) {
      var u = s.get;
      if (typeof u < "u" && !a(u))
        throw new r("getter must be a function");
      l["[[Get]]"] = u;
    }
    if (e(s, "set")) {
      var c = s.set;
      if (typeof c < "u" && !a(c))
        throw new r("setter must be a function");
      l["[[Set]]"] = c;
    }
    if ((e(l, "[[Get]]") || e(l, "[[Set]]")) && (e(l, "[[Value]]") || e(l, "[[Writable]]")))
      throw new r("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
    return l;
  }, Cu;
}
var _u, tm;
function qR() {
  if (tm)
    return _u;
  tm = 1;
  var e = tt(), t = e("%TypeError%"), r = Td(), n = Q0(), i = ew(), a = Oo(), o = ko(), s = Tn(), l = Pd(), u = rw(), c = jt();
  return _u = function(d, p, m) {
    if (c(d) !== "Object")
      throw new t("Assertion failed: Type(O) is not Object");
    if (!s(p))
      throw new t("Assertion failed: IsPropertyKey(P) is not true");
    var S = r({
      Type: c,
      IsDataDescriptor: o,
      IsAccessorDescriptor: a
    }, m) ? m : u(m);
    if (!r({
      Type: c,
      IsDataDescriptor: o,
      IsAccessorDescriptor: a
    }, S))
      throw new t("Assertion failed: Desc is not a valid Property Descriptor");
    return n(
      o,
      l,
      i,
      d,
      p,
      S
    );
  }, _u;
}
var rm;
function WR() {
  if (rm)
    return Ca.exports;
  rm = 1;
  var e = NR(), t = e("%Reflect.construct%", !0), r = qR();
  try {
    r({}, "", { "[[Get]]": function() {
    } });
  } catch {
    r = null;
  }
  if (r && t) {
    var n = {}, i = {};
    r(i, "length", {
      "[[Get]]": function() {
        throw n;
      },
      "[[Enumerable]]": !0
    }), Ca.exports = function(o) {
      try {
        t(o, i);
      } catch (s) {
        return s === n;
      }
    };
  } else
    Ca.exports = function(o) {
      return typeof o == "function" && !!o.prototype;
    };
  return Ca.exports;
}
var Tu, nm;
function HR() {
  if (nm)
    return Tu;
  nm = 1;
  var e = tt(), t = e("%Symbol.species%", !0), r = e("%TypeError%"), n = ER(), i = Eo(), a = _d(), o = WR(), s = jt(), l = Cd();
  return Tu = function(c, f) {
    if (!l(f) || f < 0)
      throw new r("Assertion failed: length must be an integer >= 0");
    var d = a(c);
    if (!d)
      return n(f);
    var p = i(c, "constructor");
    if (t && s(p) === "Object" && (p = i(p, t), p === null && (p = void 0)), typeof p > "u")
      return n(f);
    if (!o(p))
      throw new r("C must be a constructor");
    return new p(f);
  }, Tu;
}
var Pu, im;
function nw() {
  return im || (im = 1, Pu = Number.MAX_SAFE_INTEGER || 9007199254740991), Pu;
}
var Du, am;
function VR() {
  if (am)
    return Du;
  am = 1;
  var e = tt(), t = Pn(), r = e("%TypeError%"), n = _d(), i = e("%Reflect.apply%", !0) || t("Function.prototype.apply");
  return Du = function(o, s) {
    var l = arguments.length > 2 ? arguments[2] : [];
    if (!n(l))
      throw new r("Assertion failed: optional `argumentsList`, if provided, must be a List");
    return i(o, s, l);
  }, Du;
}
var Eu, om;
function iw() {
  return om || (om = 1, Eu = function(t) {
    return t === null || typeof t != "function" && typeof t != "object";
  }), Eu;
}
var Ru, sm;
function BR() {
  if (sm)
    return Ru;
  sm = 1;
  var e = tt(), t = e("%Object.preventExtensions%", !0), r = e("%Object.isExtensible%", !0), n = iw();
  return Ru = t ? function(a) {
    return !n(a) && r(a);
  } : function(a) {
    return !n(a);
  }, Ru;
}
var Ou, lm;
function UR() {
  return lm || (lm = 1, Ou = function(t, r) {
    return !!r && typeof r == "object" && "[[Enumerable]]" in r && "[[Configurable]]" in r && (t.IsAccessorDescriptor(r) || t.IsDataDescriptor(r));
  }), Ou;
}
var ku, um;
function $R() {
  if (um)
    return ku;
  um = 1;
  var e = Ro(), t = Oo(), r = ko(), n = jt();
  return ku = function(a) {
    return typeof a > "u" ? !1 : (e(n, "Property Descriptor", "Desc", a), !t(a) && !r(a));
  }, ku;
}
var Au, cm;
function zR() {
  if (cm)
    return Au;
  cm = 1;
  var e = tt(), t = e("%TypeError%"), r = Q0(), n = UR(), i = Td(), a = ew(), o = Oo(), s = ko(), l = $R(), u = Tn(), c = Pd(), f = jt();
  return Au = function(p, m, S, w, C) {
    var y = f(p);
    if (y !== "Undefined" && y !== "Object")
      throw new t("Assertion failed: O must be undefined or an Object");
    if (!u(m))
      throw new t("Assertion failed: P must be a Property Key");
    if (f(S) !== "Boolean")
      throw new t("Assertion failed: extensible must be a Boolean");
    if (!i({
      Type: f,
      IsDataDescriptor: s,
      IsAccessorDescriptor: o
    }, w))
      throw new t("Assertion failed: Desc must be a Property Descriptor");
    if (f(C) !== "Undefined" && !i({
      Type: f,
      IsDataDescriptor: s,
      IsAccessorDescriptor: o
    }, C))
      throw new t("Assertion failed: current must be a Property Descriptor, or undefined");
    if (f(C) === "Undefined")
      return S ? y === "Undefined" ? !0 : o(w) ? r(
        s,
        c,
        a,
        p,
        m,
        w
      ) : r(
        s,
        c,
        a,
        p,
        m,
        {
          "[[Configurable]]": !!w["[[Configurable]]"],
          "[[Enumerable]]": !!w["[[Enumerable]]"],
          "[[Value]]": w["[[Value]]"],
          "[[Writable]]": !!w["[[Writable]]"]
        }
      ) : !1;
    if (!n({
      IsAccessorDescriptor: o,
      IsDataDescriptor: s
    }, C))
      throw new t("`current`, when present, must be a fully populated and valid Property Descriptor");
    if (!C["[[Configurable]]"]) {
      if ("[[Configurable]]" in w && w["[[Configurable]]"] || "[[Enumerable]]" in w && !c(w["[[Enumerable]]"], C["[[Enumerable]]"]) || !l(w) && !c(o(w), o(C)))
        return !1;
      if (o(C)) {
        if ("[[Get]]" in w && !c(w["[[Get]]"], C["[[Get]]"]) || "[[Set]]" in w && !c(w["[[Set]]"], C["[[Set]]"]))
          return !1;
      } else if (!C["[[Writable]]"] && ("[[Writable]]" in w && w["[[Writable]]"] || "[[Value]]" in w && !c(w["[[Value]]"], C["[[Value]]"])))
        return !1;
    }
    if (y !== "Undefined") {
      var T, R;
      return s(C) && o(w) ? (T = ("[[Configurable]]" in w ? w : C)["[[Configurable]]"], R = ("[[Enumerable]]" in w ? w : C)["[[Enumerable]]"], r(
        s,
        c,
        a,
        p,
        m,
        {
          "[[Configurable]]": !!T,
          "[[Enumerable]]": !!R,
          "[[Get]]": ("[[Get]]" in w ? w : C)["[[Get]]"],
          "[[Set]]": ("[[Set]]" in w ? w : C)["[[Set]]"]
        }
      )) : o(C) && s(w) ? (T = ("[[Configurable]]" in w ? w : C)["[[Configurable]]"], R = ("[[Enumerable]]" in w ? w : C)["[[Enumerable]]"], r(
        s,
        c,
        a,
        p,
        m,
        {
          "[[Configurable]]": !!T,
          "[[Enumerable]]": !!R,
          "[[Value]]": ("[[Value]]" in w ? w : C)["[[Value]]"],
          "[[Writable]]": !!("[[Writable]]" in w ? w : C)["[[Writable]]"]
        }
      )) : r(
        s,
        c,
        a,
        p,
        m,
        w
      );
    }
    return !0;
  }, Au;
}
var Iu, fm;
function YR() {
  if (fm)
    return Iu;
  fm = 1;
  var e = tt(), t = Sd(), r = e("%SyntaxError%"), n = e("%TypeError%"), i = Td(), a = Oo(), o = ko(), s = BR(), l = Tn(), u = rw(), c = Pd(), f = jt(), d = zR();
  return Iu = function(m, S, w) {
    if (f(m) !== "Object")
      throw new n("Assertion failed: O must be an Object");
    if (!l(S))
      throw new n("Assertion failed: P must be a Property Key");
    if (!i({
      Type: f,
      IsDataDescriptor: o,
      IsAccessorDescriptor: a
    }, w))
      throw new n("Assertion failed: Desc must be a Property Descriptor");
    if (!t) {
      if (a(w))
        throw new r("This environment does not support accessor property descriptors.");
      var C = !(S in m) && w["[[Writable]]"] && w["[[Enumerable]]"] && w["[[Configurable]]"] && "[[Value]]" in w, y = S in m && (!("[[Configurable]]" in w) || w["[[Configurable]]"]) && (!("[[Enumerable]]" in w) || w["[[Enumerable]]"]) && (!("[[Writable]]" in w) || w["[[Writable]]"]) && "[[Value]]" in w;
      if (C || y)
        return m[S] = w["[[Value]]"], c(m[S], w["[[Value]]"]);
      throw new r("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
    }
    var T = t(m, S), R = T && u(T), P = s(m);
    return d(m, S, P, w, R);
  }, Iu;
}
var Nu, dm;
function GR() {
  if (dm)
    return Nu;
  dm = 1;
  var e = tt(), t = e("%TypeError%"), r = Tn(), n = YR(), i = jt();
  return Nu = function(o, s, l) {
    if (i(o) !== "Object")
      throw new t("Assertion failed: Type(O) is not Object");
    if (!r(s))
      throw new t("Assertion failed: IsPropertyKey(P) is not true");
    var u = {
      "[[Configurable]]": !0,
      "[[Enumerable]]": !0,
      "[[Value]]": l,
      "[[Writable]]": !0
    };
    return n(o, s, u);
  }, Nu;
}
var Mu, pm;
function XR() {
  if (pm)
    return Mu;
  pm = 1;
  var e = tt(), t = e("%TypeError%"), r = GR(), n = Tn(), i = jt();
  return Mu = function(o, s, l) {
    if (i(o) !== "Object")
      throw new t("Assertion failed: Type(O) is not Object");
    if (!n(s))
      throw new t("Assertion failed: IsPropertyKey(P) is not true");
    var u = r(o, s, l);
    if (!u)
      throw new t("unable to create data property");
  }, Mu;
}
var Lu, hm;
function KR() {
  if (hm)
    return Lu;
  hm = 1;
  var e = tt(), t = e("%TypeError%"), r = Tn(), n = jt();
  return Lu = function(a, o) {
    if (n(a) !== "Object")
      throw new t("Assertion failed: `O` must be an Object");
    if (!r(o))
      throw new t("Assertion failed: `P` must be a Property Key");
    return o in a;
  }, Lu;
}
var Fu, vm;
function JR() {
  return vm || (vm = 1, Fu = function(t) {
    return t === null || typeof t != "function" && typeof t != "object";
  }), Fu;
}
var ju, gm;
function aw() {
  if (gm)
    return ju;
  gm = 1;
  var e = Y0();
  return ju = function() {
    return e() && !!Symbol.toStringTag;
  }, ju;
}
var qu, mm;
function ZR() {
  if (mm)
    return qu;
  mm = 1;
  var e = Date.prototype.getDay, t = function(o) {
    try {
      return e.call(o), !0;
    } catch {
      return !1;
    }
  }, r = Object.prototype.toString, n = "[object Date]", i = aw()();
  return qu = function(o) {
    return typeof o != "object" || o === null ? !1 : i ? t(o) : r.call(o) === n;
  }, qu;
}
var _a = { exports: {} }, ym;
function ow() {
  if (ym)
    return _a.exports;
  ym = 1;
  var e = Object.prototype.toString, t = G0()();
  if (t) {
    var r = Symbol.prototype.toString, n = /^Symbol\(.*\)$/, i = function(o) {
      return typeof o.valueOf() != "symbol" ? !1 : n.test(r.call(o));
    };
    _a.exports = function(o) {
      if (typeof o == "symbol")
        return !0;
      if (e.call(o) !== "[object Symbol]")
        return !1;
      try {
        return i(o);
      } catch {
        return !1;
      }
    };
  } else
    _a.exports = function(o) {
      return !1;
    };
  return _a.exports;
}
var Wu, bm;
function QR() {
  if (bm)
    return Wu;
  bm = 1;
  var e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol", t = JR(), r = tw(), n = ZR(), i = ow(), a = function(l, u) {
    if (typeof l > "u" || l === null)
      throw new TypeError("Cannot call method on " + l);
    if (typeof u != "string" || u !== "number" && u !== "string")
      throw new TypeError('hint must be "string" or "number"');
    var c = u === "string" ? ["toString", "valueOf"] : ["valueOf", "toString"], f, d, p;
    for (p = 0; p < c.length; ++p)
      if (f = l[c[p]], r(f) && (d = f.call(l), t(d)))
        return d;
    throw new TypeError("No default value");
  }, o = function(l, u) {
    var c = l[u];
    if (c !== null && typeof c < "u") {
      if (!r(c))
        throw new TypeError(c + " returned for property " + u + " of object " + l + " is not a function");
      return c;
    }
  };
  return Wu = function(l) {
    if (t(l))
      return l;
    var u = "default";
    arguments.length > 1 && (arguments[1] === String ? u = "string" : arguments[1] === Number && (u = "number"));
    var c;
    if (e && (Symbol.toPrimitive ? c = o(l, Symbol.toPrimitive) : i(l) && (c = Symbol.prototype.valueOf)), typeof c < "u") {
      var f = c.call(l, u);
      if (t(f))
        return f;
      throw new TypeError("unable to convert exotic object to primitive");
    }
    return u === "default" && (n(l) || i(l)) && (u = "string"), a(l, u === "default" ? "number" : u);
  }, Wu;
}
var Hu, wm;
function eO() {
  if (wm)
    return Hu;
  wm = 1;
  var e = QR();
  return Hu = function(r) {
    return arguments.length > 1 ? e(r, arguments[1]) : e(r);
  }, Hu;
}
var Vu, Sm;
function tO() {
  if (Sm)
    return Vu;
  Sm = 1;
  var e = Pn(), t = aw()(), r, n, i, a;
  if (t) {
    r = e("Object.prototype.hasOwnProperty"), n = e("RegExp.prototype.exec"), i = {};
    var o = function() {
      throw i;
    };
    a = {
      toString: o,
      valueOf: o
    }, typeof Symbol.toPrimitive == "symbol" && (a[Symbol.toPrimitive] = o);
  }
  var s = e("Object.prototype.toString"), l = Object.getOwnPropertyDescriptor, u = "[object RegExp]";
  return Vu = t ? function(f) {
    if (!f || typeof f != "object")
      return !1;
    var d = l(f, "lastIndex"), p = d && r(d, "value");
    if (!p)
      return !1;
    try {
      n(f, a);
    } catch (m) {
      return m === i;
    }
  } : function(f) {
    return !f || typeof f != "object" && typeof f != "function" ? !1 : s(f) === u;
  }, Vu;
}
var Bu, xm;
function rO() {
  if (xm)
    return Bu;
  xm = 1;
  var e = Pn(), t = tt(), r = tO(), n = e("RegExp.prototype.exec"), i = t("%TypeError%");
  return Bu = function(o) {
    if (!r(o))
      throw new i("`regex` must be a RegExp");
    return function(l) {
      return n(o, l) !== null;
    };
  }, Bu;
}
var Uu, Cm;
function nO() {
  if (Cm)
    return Uu;
  Cm = 1;
  var e = tt(), t = e("%TypeError%");
  return Uu = function(n, i) {
    if (n == null)
      throw new t(i || "Cannot call method on " + n);
    return n;
  }, Uu;
}
var $u, _m;
function Dd() {
  return _m || (_m = 1, $u = nO()), $u;
}
var zu, Tm;
function sw() {
  if (Tm)
    return zu;
  Tm = 1;
  var e = tt(), t = e("%String%"), r = e("%TypeError%");
  return zu = function(i) {
    if (typeof i == "symbol")
      throw new r("Cannot convert a Symbol value to a string");
    return t(i);
  }, zu;
}
var Yu, Pm;
function lw() {
  if (Pm)
    return Yu;
  Pm = 1;
  var e = Dd(), t = sw(), r = Pn(), n = r("String.prototype.replace"), i = /^\s$/.test("᠎"), a = i ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/ : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/, o = i ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/ : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
  return Yu = function() {
    var l = t(e(this));
    return n(n(l, a, ""), o, "");
  }, Yu;
}
var Gu, Dm;
function uw() {
  if (Dm)
    return Gu;
  Dm = 1;
  var e = lw(), t = "​", r = "᠎";
  return Gu = function() {
    return String.prototype.trim && t.trim() === t && r.trim() === r && ("_" + r).trim() === "_" + r && (r + "_").trim() === r + "_" ? String.prototype.trim : e;
  }, Gu;
}
var Xu, Em;
function iO() {
  if (Em)
    return Xu;
  Em = 1;
  var e = Yi(), t = uw();
  return Xu = function() {
    var n = t();
    return e(String.prototype, { trim: n }, {
      trim: function() {
        return String.prototype.trim !== n;
      }
    }), n;
  }, Xu;
}
var Ku, Rm;
function aO() {
  if (Rm)
    return Ku;
  Rm = 1;
  var e = xd(), t = Yi(), r = Dd(), n = lw(), i = uw(), a = iO(), o = e(i()), s = function(u) {
    return r(u), o(u);
  };
  return t(s, {
    getPolyfill: i,
    implementation: n,
    shim: a
  }), Ku = s, Ku;
}
var Ju, Om;
function oO() {
  if (Om)
    return Ju;
  Om = 1;
  var e = tt(), t = e("%Number%"), r = e("%RegExp%"), n = e("%TypeError%"), i = e("%parseInt%"), a = Pn(), o = rO(), s = a("String.prototype.slice"), l = o(/^0b[01]+$/i), u = o(/^0o[0-7]+$/i), c = o(/^[-+]0x[0-9a-f]+$/i), f = ["", "​", "￾"].join(""), d = new r("[" + f + "]", "g"), p = o(d), m = aO(), S = jt();
  return Ju = function w(C) {
    if (S(C) !== "String")
      throw new n("Assertion failed: `argument` is not a String");
    if (l(C))
      return t(i(s(C, 2), 2));
    if (u(C))
      return t(i(s(C, 2), 8));
    if (p(C) || c(C))
      return NaN;
    var y = m(C);
    return y !== C ? w(y) : t(C);
  }, Ju;
}
var Zu, km;
function sO() {
  if (km)
    return Zu;
  km = 1;
  var e = tt(), t = e("%TypeError%"), r = e("%Number%"), n = iw(), i = eO(), a = oO();
  return Zu = function(s) {
    var l = n(s) ? s : i(s, r);
    if (typeof l == "symbol")
      throw new t("Cannot convert a Symbol value to a number");
    if (typeof l == "bigint")
      throw new t("Conversion from 'BigInt' to 'number' is not allowed.");
    return typeof l == "string" ? a(l) : r(l);
  }, Zu;
}
var Qu, Am;
function lO() {
  if (Am)
    return Qu;
  Am = 1;
  var e = jt(), t = Math.floor;
  return Qu = function(n) {
    return e(n) === "BigInt" ? n : t(n);
  }, Qu;
}
var ec, Im;
function uO() {
  if (Im)
    return ec;
  Im = 1;
  var e = tt(), t = lO(), r = e("%TypeError%");
  return ec = function(i) {
    if (typeof i != "number" && typeof i != "bigint")
      throw new r("argument must be a Number or a BigInt");
    var a = i < 0 ? -t(-i) : t(i);
    return a === 0 ? 0 : a;
  }, ec;
}
var tc, Nm;
function cw() {
  if (Nm)
    return tc;
  Nm = 1;
  var e = sO(), t = uO(), r = Do(), n = J0();
  return tc = function(a) {
    var o = e(a);
    return r(o) || o === 0 ? 0 : n(o) ? t(o) : o;
  }, tc;
}
var rc, Mm;
function fw() {
  if (Mm)
    return rc;
  Mm = 1;
  var e = nw(), t = cw();
  return rc = function(n) {
    var i = t(n);
    return i <= 0 ? 0 : i > e ? e : i;
  }, rc;
}
var nc, Lm;
function cO() {
  if (Lm)
    return nc;
  Lm = 1;
  var e = tt(), t = e("%TypeError%"), r = Eo(), n = fw(), i = jt();
  return nc = function(o) {
    if (i(o) !== "Object")
      throw new t("Assertion failed: `obj` must be an Object");
    return n(r(o, "length"));
  }, nc;
}
var ic, Fm;
function fO() {
  if (Fm)
    return ic;
  Fm = 1;
  var e = tt(), t = e("%TypeError%"), r = nw(), n = VR(), i = XR(), a = Eo(), o = KR(), s = _d(), l = cO(), u = sw();
  return ic = function c(f, d, p, m, S) {
    var w;
    arguments.length > 5 && (w = arguments[5]);
    for (var C = m, y = 0; y < p; ) {
      var T = u(y), R = o(d, T);
      if (R === !0) {
        var P = a(d, T);
        if (typeof w < "u") {
          if (arguments.length <= 6)
            throw new t("Assertion failed: thisArg is required when mapperFunction is provided");
          P = n(w, arguments[6], [P, y, d]);
        }
        var N = !1;
        if (S > 0 && (N = s(P)), N) {
          var L = l(P);
          C = c(f, P, L, C, S - 1);
        } else {
          if (C >= r)
            throw new t("index too large");
          i(f, u(C), P), C += 1;
        }
      }
      y += 1;
    }
    return C;
  }, ic;
}
var ac, jm;
function dO() {
  if (jm)
    return ac;
  jm = 1;
  var e = tt(), t = e("%Object%"), r = Dd();
  return ac = function(i) {
    return r(i), t(i);
  }, ac;
}
var oc, qm;
function dw() {
  if (qm)
    return oc;
  qm = 1;
  var e = HR(), t = fO(), r = Eo(), n = cw(), i = fw(), a = dO();
  return oc = function() {
    var s = a(this), l = i(r(s, "length")), u = 1;
    arguments.length > 0 && typeof arguments[0] < "u" && (u = n(arguments[0]));
    var c = e(s, 0);
    return t(c, s, l, 0, u), c;
  }, oc;
}
var sc, Wm;
function pw() {
  if (Wm)
    return sc;
  Wm = 1;
  var e = dw();
  return sc = function() {
    return Array.prototype.flat || e;
  }, sc;
}
var lc, Hm;
function pO() {
  if (Hm)
    return lc;
  Hm = 1;
  var e = fn(), t = typeof Symbol == "function" && typeof Symbol.unscopables == "symbol", r = t && Array.prototype[Symbol.unscopables], n = TypeError;
  return lc = function(a) {
    if (typeof a != "string" || !a)
      throw new n("method must be a non-empty string");
    if (!e(Array.prototype, a))
      throw new n("method must be on Array.prototype");
    t && (r[a] = !0);
  }, lc;
}
var uc, Vm;
function hO() {
  if (Vm)
    return uc;
  Vm = 1;
  var e = Yi(), t = pO(), r = pw();
  return uc = function() {
    var i = r();
    return e(
      Array.prototype,
      { flat: i },
      { flat: function() {
        return Array.prototype.flat !== i;
      } }
    ), t("flat"), i;
  }, uc;
}
var cc, Bm;
function vO() {
  if (Bm)
    return cc;
  Bm = 1;
  var e = Yi(), t = xd(), r = dw(), n = pw(), i = n(), a = hO(), o = t(i);
  return e(o, {
    getPolyfill: n,
    implementation: r,
    shim: a
  }), cc = o, cc;
}
var fc, Um;
function gO() {
  if (Um)
    return fc;
  Um = 1;
  var e = Yi(), t = ow(), r = "__ global cache key __";
  typeof Symbol == "function" && t(Symbol("foo")) && typeof Symbol.for == "function" && (r = Symbol.for(r));
  var n = function() {
    return !0;
  }, i = function() {
    if (!vi[r]) {
      var f = {};
      f[r] = {};
      var d = {};
      d[r] = n, e(vi, f, d);
    }
    return vi[r];
  }, a = i(), o = function(f) {
    return f === null || typeof f != "object" && typeof f != "function";
  }, s = function(f) {
    return t(f) ? Symbol.prototype.valueOf.call(f) : typeof f + " | " + String(f);
  }, l = function(f) {
    if (!o(f))
      throw new TypeError("key must not be an object");
  }, u = {
    clear: function() {
      delete vi[r], a = i();
    },
    delete: function(f) {
      return l(f), delete a[s(f)], !u.has(f);
    },
    get: function(f) {
      return l(f), a[s(f)];
    },
    has: function(f) {
      return l(f), s(f) in a;
    },
    set: function(f, d) {
      l(f);
      var p = s(f), m = {};
      m[p] = d;
      var S = {};
      return S[p] = n, e(a, m, S), u.has(f);
    },
    setIfMissingThenGet: function(f, d) {
      if (u.has(f))
        return u.get(f);
      var p = d();
      return u.set(f, p), p;
    }
  };
  return fc = u, fc;
}
var hn = {}, $m;
function mO() {
  if ($m)
    return hn;
  $m = 1, Object.defineProperty(hn, "__esModule", {
    value: !0
  }), hn.MAX_SPECIFICITY = hn.GLOBAL_CACHE_KEY = void 0;
  var e = "reactWithStylesInterfaceCSS";
  hn.GLOBAL_CACHE_KEY = e;
  var t = 20;
  return hn.MAX_SPECIFICITY = t, hn;
}
var dc = {}, zm;
function yO() {
  return zm || (zm = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = t;
    function t(r, n) {
      var i = r.length > 0 ? "".concat(r, "__") : "";
      return "".concat(i).concat(n);
    }
  }(dc)), dc;
}
var pc = {}, Ym;
function bO() {
  return Ym || (Ym = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    function t(n) {
      for (var i = [], a = !1, o = {}, s = 0; s < n.length; s++) {
        var l = n[s];
        l && (typeof l == "string" ? i.push(l) : (Object.assign(o, l), a = !0));
      }
      return {
        classNames: i,
        hasInlineStyles: a,
        inlineStyles: o
      };
    }
    var r = t;
    e.default = r;
  }(pc)), pc;
}
var Gm;
function wO() {
  return Gm || (Gm = 1, function(e) {
    var t = To;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = t(vO()), n = t(gO()), i = mO(), a = t(yO()), o = t(bO());
    function s(c) {
      var f = {}, d = Object.keys(c), p = n.default.get(i.GLOBAL_CACHE_KEY) || {}, m = p.namespace, S = m === void 0 ? "" : m;
      return d.forEach(function(w) {
        var C = (0, a.default)(S, w);
        f[w] = C;
      }), f;
    }
    function l(c) {
      var f = (0, r.default)(c, 1 / 0), d = (0, o.default)(f), p = d.classNames, m = d.hasInlineStyles, S = d.inlineStyles, w = p.map(function(T, R) {
        return "".concat(T, " ").concat(T, "_").concat(R + 1);
      }), C = w.join(" "), y = {
        className: C
      };
      return m && (y.style = S), y;
    }
    var u = {
      create: s,
      resolve: l
    };
    e.default = u;
  }(Ml)), Ml;
}
var hc, Xm;
function SO() {
  return Xm || (Xm = 1, hc = wO().default), hc;
}
var vc = {}, gc = {}, Km;
function xO() {
  return Km || (Km = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e._getInterface = w, e._getTheme = f, e.default = void 0;
    var t, r, n = "react-with-styles.resolve.start", i = "react-with-styles.resolve.end", a = "👩‍🎨 [resolve]";
    function o(y) {
      r = y;
    }
    function s(y) {
      t = y;
    }
    function l(y, T) {
      var R = T(y(r));
      return function() {
        return R;
      };
    }
    function u(y) {
      return l(y, t.createLTR || t.create);
    }
    function c(y) {
      return l(y, t.createRTL || t.create);
    }
    function f() {
      return r;
    }
    function d() {
      process.env.NODE_ENV !== "production" && typeof performance < "u" && performance.mark !== void 0 && typeof performance.clearMarks == "function" && (performance.clearMarks(n), performance.mark(n));
      for (var y = arguments.length, T = new Array(y), R = 0; R < y; R++)
        T[R] = arguments[R];
      var P = t.resolve(T);
      return process.env.NODE_ENV !== "production" && typeof performance < "u" && performance.mark !== void 0 && typeof performance.clearMarks == "function" && (performance.clearMarks(i), performance.mark(i), performance.measure(a, n, i), performance.clearMarks(a)), P;
    }
    function p() {
      for (var y = arguments.length, T = new Array(y), R = 0; R < y; R++)
        T[R] = arguments[R];
      return t.resolveLTR ? t.resolveLTR(T) : d(T);
    }
    function m() {
      for (var y = arguments.length, T = new Array(y), R = 0; R < y; R++)
        T[R] = arguments[R];
      return t.resolveRTL ? t.resolveRTL(T) : d(T);
    }
    function S() {
      t.flush && t.flush();
    }
    function w() {
      return t;
    }
    var C = {
      registerTheme: o,
      registerInterface: s,
      create: u,
      createLTR: u,
      createRTL: c,
      get: f,
      resolve: p,
      resolveLTR: p,
      resolveRTL: m,
      flush: S
    };
    e.default = C;
  }(gc)), gc;
}
var mc = {}, Jm;
function CO() {
  return Jm || (Jm = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var t = {
      white: "#fff",
      gray: "#484848",
      grayLight: "#82888a",
      grayLighter: "#cacccd",
      grayLightest: "#f2f2f2",
      borderMedium: "#c4c4c4",
      border: "#dbdbdb",
      borderLight: "#e4e7e7",
      borderLighter: "#eceeee",
      borderBright: "#f4f5f5",
      primary: "#00a699",
      primaryShade_1: "#33dacd",
      primaryShade_2: "#66e2da",
      primaryShade_3: "#80e8e0",
      primaryShade_4: "#b2f1ec",
      primary_dark: "#008489",
      secondary: "#007a87",
      yellow: "#ffe8bc",
      yellow_dark: "#ffce71"
    }, r = {
      reactDates: {
        zIndex: 0,
        border: {
          input: {
            border: 0,
            borderTop: 0,
            borderRight: 0,
            borderBottom: "2px solid transparent",
            borderLeft: 0,
            outlineFocused: 0,
            borderFocused: 0,
            borderTopFocused: 0,
            borderLeftFocused: 0,
            borderBottomFocused: "2px solid ".concat(t.primary_dark),
            borderRightFocused: 0,
            borderRadius: 0
          },
          pickerInput: {
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 2
          }
        },
        color: {
          core: t,
          disabled: t.grayLightest,
          background: t.white,
          backgroundDark: "#f2f2f2",
          backgroundFocused: t.white,
          border: "rgb(219, 219, 219)",
          text: t.gray,
          textDisabled: t.border,
          textFocused: "#007a87",
          placeholderText: "#757575",
          outside: {
            backgroundColor: t.white,
            backgroundColor_active: t.white,
            backgroundColor_hover: t.white,
            color: t.gray,
            color_active: t.gray,
            color_hover: t.gray
          },
          highlighted: {
            backgroundColor: t.yellow,
            backgroundColor_active: t.yellow_dark,
            backgroundColor_hover: t.yellow_dark,
            color: t.gray,
            color_active: t.gray,
            color_hover: t.gray
          },
          minimumNights: {
            backgroundColor: t.white,
            backgroundColor_active: t.white,
            backgroundColor_hover: t.white,
            borderColor: t.borderLighter,
            color: t.grayLighter,
            color_active: t.grayLighter,
            color_hover: t.grayLighter
          },
          hoveredSpan: {
            backgroundColor: t.primaryShade_4,
            backgroundColor_active: t.primaryShade_3,
            backgroundColor_hover: t.primaryShade_4,
            borderColor: t.primaryShade_3,
            borderColor_active: t.primaryShade_3,
            borderColor_hover: t.primaryShade_3,
            color: t.secondary,
            color_active: t.secondary,
            color_hover: t.secondary
          },
          selectedSpan: {
            backgroundColor: t.primaryShade_2,
            backgroundColor_active: t.primaryShade_1,
            backgroundColor_hover: t.primaryShade_1,
            borderColor: t.primaryShade_1,
            borderColor_active: t.primary,
            borderColor_hover: t.primary,
            color: t.white,
            color_active: t.white,
            color_hover: t.white
          },
          selected: {
            backgroundColor: t.primary,
            backgroundColor_active: t.primary,
            backgroundColor_hover: t.primary,
            borderColor: t.primary,
            borderColor_active: t.primary,
            borderColor_hover: t.primary,
            color: t.white,
            color_active: t.white,
            color_hover: t.white
          },
          blocked_calendar: {
            backgroundColor: t.grayLighter,
            backgroundColor_active: t.grayLighter,
            backgroundColor_hover: t.grayLighter,
            borderColor: t.grayLighter,
            borderColor_active: t.grayLighter,
            borderColor_hover: t.grayLighter,
            color: t.grayLight,
            color_active: t.grayLight,
            color_hover: t.grayLight
          },
          blocked_out_of_range: {
            backgroundColor: t.white,
            backgroundColor_active: t.white,
            backgroundColor_hover: t.white,
            borderColor: t.borderLight,
            borderColor_active: t.borderLight,
            borderColor_hover: t.borderLight,
            color: t.grayLighter,
            color_active: t.grayLighter,
            color_hover: t.grayLighter
          }
        },
        spacing: {
          dayPickerHorizontalPadding: 9,
          captionPaddingTop: 22,
          captionPaddingBottom: 37,
          inputPadding: 0,
          displayTextPaddingVertical: void 0,
          displayTextPaddingTop: 11,
          displayTextPaddingBottom: 9,
          displayTextPaddingHorizontal: void 0,
          displayTextPaddingLeft: 11,
          displayTextPaddingRight: 11,
          displayTextPaddingVertical_small: void 0,
          displayTextPaddingTop_small: 7,
          displayTextPaddingBottom_small: 5,
          displayTextPaddingHorizontal_small: void 0,
          displayTextPaddingLeft_small: 7,
          displayTextPaddingRight_small: 7
        },
        sizing: {
          inputWidth: 130,
          inputWidth_small: 97,
          arrowWidth: 24
        },
        noScrollBarOnVerticalScrollable: !1,
        font: {
          size: 14,
          captionSize: 18,
          input: {
            size: 19,
            weight: 200,
            lineHeight: "24px",
            size_small: 15,
            lineHeight_small: "18px",
            letterSpacing_small: "0.2px",
            styleDisabled: "italic"
          }
        }
      }
    };
    e.default = r;
  }(mc)), mc;
}
var Zm;
function _O() {
  return Zm || (Zm = 1, function(e) {
    var t = To;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = i;
    var r = t(xO()), n = t(CO());
    function i(a) {
      r.default.registerInterface(a), r.default.registerTheme(n.default);
    }
  }(vc)), vc;
}
var Qm;
function TO() {
  return Qm || (Qm = 1, function(e) {
    var t = To;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = i;
    var r = t(SO()), n = t(_O());
    function i() {
      (0, n.default)(r.default);
    }
  }(Nl)), Nl;
}
var PO = To, DO = PO(TO());
(0, DO.default)();
var ey = Fr;
function EO(e) {
  return typeof ey.isMoment == "function" && !ey.isMoment(e) ? !1 : typeof e.isValid == "function" ? e.isValid() : !isNaN(e);
}
var RO = {
  isValidMoment: EO
}, Ar = {
  invalidPredicate: "`predicate` must be a function",
  invalidPropValidator: "`propValidator` must be a function",
  requiredCore: "is marked as required",
  invalidTypeCore: "Invalid input type",
  predicateFailureCore: "Failed to succeed with predicate",
  anonymousMessage: "<<anonymous>>",
  baseInvalidMessage: "Invalid "
};
function hw(e) {
  if (typeof e != "function")
    throw new Error(Ar.invalidPropValidator);
  var t = e.bind(null, !1, null);
  return t.isRequired = e.bind(null, !0, null), t.withPredicate = function(n) {
    if (typeof n != "function")
      throw new Error(Ar.invalidPredicate);
    var i = e.bind(null, !1, n);
    return i.isRequired = e.bind(null, !0, n), i;
  }, t;
}
function ty(e, t, r) {
  return new Error(
    "The prop `" + e + "` " + Ar.requiredCore + " in `" + t + "`, but its value is `" + r + "`."
  );
}
var vw = -1;
function OO(e, t, r, n) {
  var i = typeof n > "u", a = n === null;
  if (e) {
    if (i)
      return ty(r, t, "undefined");
    if (a)
      return ty(r, t, "null");
  }
  return i || a ? null : vw;
}
function kO(e, t, r, n) {
  function i(a, o, s, l, u, c, f) {
    var d = s[l], p = typeof d;
    u = u || Ar.anonymousMessage, f = f || l;
    var m = OO(
      a,
      u,
      f,
      d
    );
    if (m !== vw)
      return m;
    if (t && !t(d))
      return new Error(
        Ar.invalidTypeCore + ": `" + l + "` of type `" + p + "` supplied to `" + u + "`, expected `" + e + "`."
      );
    if (!r(d))
      return new Error(
        Ar.baseInvalidMessage + c + " `" + l + "` of type `" + p + "` supplied to `" + u + "`, expected `" + n + "`."
      );
    if (o && !o(d)) {
      var S = o.name || Ar.anonymousMessage;
      return new Error(
        Ar.baseInvalidMessage + c + " `" + l + "` of type `" + p + "` supplied to `" + u + "`. " + Ar.predicateFailureCore + " `" + S + "`."
      );
    }
    return null;
  }
  return hw(i);
}
var AO = {
  constructPropValidatorVariations: hw,
  createMomentChecker: kO,
  messages: Ar
}, ry = Fr, ny = RO, yc = AO, IO = {
  momentObj: yc.createMomentChecker(
    "object",
    function(e) {
      return typeof e == "object";
    },
    function(t) {
      return ny.isValidMoment(t);
    },
    "Moment"
  ),
  momentString: yc.createMomentChecker(
    "string",
    function(e) {
      return typeof e == "string";
    },
    function(t) {
      return ny.isValidMoment(ry(t));
    },
    "Moment"
  ),
  momentDurationObj: yc.createMomentChecker(
    "object",
    function(e) {
      return typeof e == "object";
    },
    function(t) {
      return ry.isDuration(t);
    },
    "Duration"
  )
};
const NO = /* @__PURE__ */ nr(IO), gw = D.oneOfType([
  D.string,
  D.number,
  D.object
]);
D.oneOfType([
  NO.momentObj,
  D.string
]);
const MO = D.shape({
  value: gw.isRequired,
  text: D.oneOfType([
    D.string,
    D.number
  ]),
  disabled: D.bool,
  checked: D.bool
}), LO = D.oneOfType([
  D.string,
  D.number
]), FO = D.oneOfType([
  MO,
  LO
]);
D.arrayOf(FO);
D.arrayOf(gw);
D.string, D.string, D.func, D.func, D.func, D.string, D.bool, D.bool;
D.bool, D.bool, D.bool, D.bool, D.oneOf(["before", "after"]), D.bool, D.bool, D.bool, D.bool;
const mw = {
  disabled: !1,
  required: !1,
  readOnly: !1,
  showClearDate: !1,
  noBorder: !1,
  block: !1,
  small: !1,
  regular: !1,
  inputIconPosition: null
};
var yn;
let jO = (yn = class extends Ue {
  constructor(r) {
    super(r);
    oe(this, "state");
    const { focused: n, value: i, defaultValue: a } = r, o = yn.toMoment(i, a);
    this.state = {
      internalValue: o,
      focused: n
    }, this.onChange = this.onChange.bind(this), this.onFocusChange = this.onFocusChange.bind(this);
  }
  static toMoment(r, n) {
    const i = r || n;
    return i instanceof Fr ? i : Fr(i);
  }
  componentDidUpdate() {
    const { value: r } = this.props, { internalValue: n } = this.state;
    r !== void 0 && n !== r && n && r && Math.abs(n == null ? void 0 : n.diff(r)) > 0 && this.setState({ internalValue: yn.toMoment(r) });
  }
  onChange(r) {
    const {
      onChange: n,
      name: i,
      id: a,
      format: o,
      value: s
    } = this.props;
    if (s || this.setState({ internalValue: r }), n) {
      const l = {
        target: {
          value: r ? r.format(o) : "",
          id: a,
          type: "text",
          name: i
        }
      };
      n(l);
    }
  }
  onFocusChange({ focused: r }) {
    const { onFocusChange: n } = this.props;
    this.setState({ focused: r }), n && n(r);
  }
  render() {
    const {
      name: r,
      id: n,
      placeholder: i,
      customCloseIcon: a,
      showDefaultInputIcon: o,
      customInputIcon: s,
      dateType: l,
      format: u,
      // shared props
      disabled: c,
      required: f,
      readOnly: d,
      showClearDate: p,
      noBorder: m,
      block: S,
      small: w,
      regular: C,
      inputIconPosition: y,
      // additional
      dateProps: T
    } = this.props, { focused: R, internalValue: P } = this.state;
    let N = P;
    typeof P == "string" && (N = Fr(P, u));
    const {
      iconLeft: L,
      iconRight: W,
      addonLeft: Y,
      addonRight: re,
      size: z,
      checkboxLeft: Q,
      checkboxLeftProps: se,
      checkboxRight: X,
      checkboxRightProps: ee,
      radioLeft: J,
      radioLeftProps: ue,
      radioRight: ce,
      radioRightProps: Z,
      buttonLeft: V,
      buttonRight: h,
      width: v,
      help: g
    } = this.props, {
      label: b,
      labelPosition: A,
      labelXs: E,
      labelSm: I,
      labelMd: H,
      labelLg: q,
      xs: K,
      sm: ae,
      md: U,
      lg: ve,
      labelIcon: de,
      type: he,
      labelClass: Ee
    } = this.props, {
      ariaLabel: De,
      screenReaderInputMessage: Ce,
      verticalSpacing: Ie,
      keepFocusOnInput: Oe,
      renderWeekHeaderElement: Ke,
      orientation: $e,
      anchorDirection: Me,
      openDirection: He,
      horizontalMargin: st,
      withPortal: ze,
      withFullScreenPortal: Je,
      appendToBody: Ye,
      disableScroll: Ve,
      initialVisibleMonth: Qe,
      firstDayOfWeek: qe,
      numberOfMonths: fe,
      keepOpenOnDateSelect: F,
      reopenPickerOnClearDate: $,
      renderCalendarInfo: Fe,
      calendarInfoPosition: We,
      hideKeyboardShortcutsPanel: it,
      daySize: Le,
      isRTL: Dt,
      verticalHeight: qt,
      transitionDuration: mt,
      horizontalMonthPadding: At,
      dayPickerNavigationInlineStyles: It,
      navPosition: Et,
      navPrev: M,
      navNext: G,
      renderNavPrevButton: B,
      renderNavNextButton: ye,
      onPrevMonthClick: Te,
      onNextMonthClick: we,
      onClose: Pe,
      renderCalendarDay: me,
      renderDayContents: ge,
      enableOutsideDays: gt,
      isDayBlocked: et,
      isOutsideRange: Be,
      isDayHighlighted: rt,
      monthFormat: Ze,
      weekDayFormat: at,
      phrases: dt,
      dayAriaLabelFormat: ft,
      renderMonthElement: ht
    } = T || {};
    return /* @__PURE__ */ _(
      Dr,
      {
        iconLeft: L,
        iconRight: W,
        addonLeft: Y,
        addonRight: re,
        size: z,
        checkboxLeft: Q,
        checkboxLeftProps: se,
        checkboxRight: X,
        checkboxRightProps: ee,
        radioLeft: J,
        radioLeftProps: ue,
        radioRight: ce,
        radioRightProps: Z,
        buttonLeft: V,
        buttonRight: h,
        width: v,
        help: g,
        label: b,
        labelPosition: A,
        labelXs: E,
        labelSm: I,
        labelMd: H,
        labelLg: q,
        name: r,
        xs: K,
        sm: ae,
        md: U,
        lg: ve,
        labelIcon: de,
        type: he,
        labelClass: Ee,
        children: /* @__PURE__ */ _("div", { className: `date-${l}`, children: /* @__PURE__ */ _(
          ix,
          {
            id: n || r,
            date: N,
            focused: R,
            onDateChange: this.onChange,
            onFocusChange: this.onFocusChange,
            placeholder: i,
            ariaLabel: De,
            disabled: c,
            required: f,
            readOnly: d,
            screenReaderInputMessage: Ce,
            showClearDate: p,
            customCloseIcon: a,
            showDefaultInputIcon: o,
            inputIconPosition: y,
            customInputIcon: s,
            noBorder: m,
            block: S,
            small: w,
            regular: C,
            verticalSpacing: Ie,
            keepFocusOnInput: Oe,
            renderWeekHeaderElement: Ke,
            orientation: $e,
            anchorDirection: Me,
            openDirection: He,
            horizontalMargin: st,
            withPortal: ze,
            withFullScreenPortal: Je,
            appendToBody: Ye,
            disableScroll: Ve,
            initialVisibleMonth: Qe,
            firstDayOfWeek: qe,
            numberOfMonths: fe,
            keepOpenOnDateSelect: F,
            reopenPickerOnClearDate: $,
            renderCalendarInfo: Fe,
            calendarInfoPosition: We,
            hideKeyboardShortcutsPanel: it,
            daySize: Le,
            isRTL: Dt,
            verticalHeight: qt,
            transitionDuration: mt,
            horizontalMonthPadding: At,
            dayPickerNavigationInlineStyles: It,
            navPosition: Et,
            navPrev: M,
            navNext: G,
            renderNavPrevButton: B,
            renderNavNextButton: ye,
            onPrevMonthClick: Te,
            onNextMonthClick: we,
            onClose: Pe,
            renderCalendarDay: me,
            renderDayContents: ge,
            enableOutsideDays: gt,
            isDayBlocked: et,
            isOutsideRange: Be,
            isDayHighlighted: rt,
            displayFormat: u,
            monthFormat: Ze,
            weekDayFormat: at,
            phrases: dt,
            dayAriaLabelFormat: ft,
            renderMonthElement: ht
          }
        ) })
      }
    );
  }
}, oe(yn, "defaultProps", {
  value: null,
  defaultValue: void 0,
  onChange: void 0,
  onFocusChange: void 0,
  id: void 0,
  type: "default",
  dateType: "default",
  focused: !1,
  placeholder: "",
  customCloseIcon: null,
  showDefaultInputIcon: !1,
  customInputIcon: null,
  dateProps: null,
  name: Ty(),
  format: void 0,
  ...mw
}), yn);
const uf = (e) => {
  let t = !1, r = !1;
  const n = () => {
    t = !0, e.preventDefault();
  }, i = () => {
    r = !0, e.stopPropagation();
  };
  return {
    nativeEvent: e,
    currentTarget: e.currentTarget,
    target: e.target,
    bubbles: e.bubbles,
    cancelable: e.cancelable,
    defaultPrevented: e.defaultPrevented,
    eventPhase: e.eventPhase,
    isTrusted: e.isTrusted,
    preventDefault: n,
    isDefaultPrevented: () => t,
    stopPropagation: i,
    isPropagationStopped: () => r,
    persist: () => {
    },
    timeStamp: e.timeStamp,
    type: e.type
  };
};
class yw extends Ue {
  constructor(r) {
    super(r);
    oe(this, "state", { focused: null, startDate: null, endDate: null });
    const { focused: n } = r;
    this.state.focused = n, this.onChange = this.onChange.bind(this), this.onFocusChange = this.onFocusChange.bind(this);
  }
  onChange({ startDate: r, endDate: n }) {
    const { startDate: i, endDate: a } = this.state, {
      onStartChange: o,
      onEndChange: s,
      format: l,
      startDateId: u,
      endDateId: c
    } = this.props;
    if (r !== i) {
      const f = new Event("change");
      Object.defineProperty(f, "target", {
        writable: !1,
        value: {
          value: r ? r.format(l) : null,
          id: u,
          type: "text",
          name: u
        }
      });
      const d = uf(f);
      o(d);
    }
    if (n !== a) {
      const f = new Event("change");
      Object.defineProperty(f, "target", {
        writable: !1,
        value: {
          value: n ? n.format(l) : null,
          id: c,
          type: "text",
          name: c
        }
      });
      const d = uf(f);
      s(d);
    }
    this.setState({ startDate: r, endDate: n });
  }
  onFocusChange(r) {
    this.setState({ focused: r });
  }
  render() {
    const {
      dateType: r,
      startDate: n,
      endDate: i,
      startDateId: a,
      endDateId: o,
      format: s,
      // shared props
      disabled: l,
      required: u,
      readOnly: c,
      showClearDate: f,
      noBorder: d,
      block: p,
      small: m,
      regular: S,
      inputIconPosition: w,
      //
      dateRangeProps: C
      // ...props
    } = this.props, { focused: y } = this.state;
    let T = n, R = i;
    typeof T == "string" && (T = Fr(T, s)), typeof R == "string" && (R = Fr(R, s));
    const {
      iconLeft: P,
      iconRight: N,
      addonLeft: L,
      addonRight: W,
      size: Y,
      checkboxLeft: re,
      checkboxLeftProps: z,
      checkboxRight: Q,
      checkboxRightProps: se,
      radioLeft: X,
      radioLeftProps: ee,
      radioRight: J,
      radioRightProps: ue,
      buttonLeft: ce,
      buttonRight: Z,
      width: V,
      help: h
    } = this.props, {
      label: v,
      labelPosition: g,
      labelXs: b,
      labelSm: A,
      labelMd: E,
      labelLg: I,
      xs: H,
      sm: q,
      md: K,
      lg: ae,
      labelIcon: U,
      type: ve,
      labelClass: de
    } = this.props, {
      onClose: he,
      startDatePlaceholderText: Ee,
      startDateOffset: De,
      endDateOffset: Ce,
      endDatePlaceholderText: Ie,
      startDateAriaLabel: Oe,
      endDateAriaLabel: Ke,
      screenReaderInputMessage: $e,
      showDefaultInputIcon: Me,
      customInputIcon: He,
      customArrowIcon: st,
      customCloseIcon: ze,
      keepFocusOnInput: Je,
      renderWeekHeaderElement: Ye,
      orientation: Ve,
      anchorDirection: Qe,
      openDirection: qe,
      horizontalMargin: fe,
      withPortal: F,
      withFullScreenPortal: $,
      appendToBody: Fe,
      disableScroll: We,
      daySize: it,
      isRTL: Le,
      firstDayOfWeek: Dt,
      initialVisibleMonth: qt,
      numberOfMonths: mt,
      keepOpenOnDateSelect: At,
      reopenPickerOnClearDates: It,
      renderCalendarInfo: Et,
      calendarInfoPosition: M,
      hideKeyboardShortcutsPanel: G,
      verticalHeight: B,
      transitionDuration: ye,
      horizontalMonthPadding: Te,
      verticalSpacing: we,
      dayPickerNavigationInlineStyles: Pe,
      navPosition: me,
      navPrev: ge,
      navNext: gt,
      renderNavPrevButton: et,
      renderNavNextButton: Be,
      onPrevMonthClick: rt,
      onNextMonthClick: Ze,
      renderCalendarDay: at,
      renderDayContents: dt,
      minimumNights: ft,
      minDate: ht,
      maxDate: Wt,
      enableOutsideDays: wt,
      isDayBlocked: br,
      isOutsideRange: Lo,
      isDayHighlighted: Fo,
      monthFormat: oi,
      weekDayFormat: jo,
      phrases: Gi,
      dayAriaLabelFormat: qo,
      renderMonthElement: Wo
    } = C || {};
    return /* @__PURE__ */ _(
      Dr,
      {
        iconLeft: P,
        iconRight: N,
        addonLeft: L,
        addonRight: W,
        size: Y,
        checkboxLeft: re,
        checkboxLeftProps: z,
        checkboxRight: Q,
        checkboxRightProps: se,
        radioLeft: X,
        radioLeftProps: ee,
        radioRight: J,
        radioRightProps: ue,
        buttonLeft: ce,
        buttonRight: Z,
        width: V,
        help: h,
        label: v,
        labelPosition: g,
        labelXs: b,
        labelSm: A,
        labelMd: E,
        labelLg: I,
        xs: H,
        sm: q,
        md: K,
        lg: ae,
        labelIcon: U,
        type: ve,
        labelClass: de,
        children: /* @__PURE__ */ _("div", { className: `date-${r}`, children: /* @__PURE__ */ _(
          ax,
          {
            startDate: T,
            startDateId: a,
            endDate: R,
            endDateId: o,
            focusedInput: y,
            onDatesChange: this.onChange,
            onFocusChange: this.onFocusChange,
            onClose: he,
            startDatePlaceholderText: Ee,
            startDateOffset: De,
            endDateOffset: Ce,
            endDatePlaceholderText: Ie,
            startDateAriaLabel: Oe,
            endDateAriaLabel: Ke,
            disabled: l,
            required: u,
            readOnly: c,
            screenReaderInputMessage: $e,
            showClearDates: f,
            showDefaultInputIcon: Me,
            inputIconPosition: w,
            customInputIcon: He,
            customArrowIcon: st,
            customCloseIcon: ze,
            noBorder: d,
            block: p,
            small: m,
            regular: S,
            keepFocusOnInput: Je,
            renderWeekHeaderElement: Ye,
            orientation: Ve,
            anchorDirection: Qe,
            openDirection: qe,
            horizontalMargin: fe,
            withPortal: F,
            withFullScreenPortal: $,
            appendToBody: Fe,
            disableScroll: We,
            daySize: it,
            isRTL: Le,
            firstDayOfWeek: Dt,
            initialVisibleMonth: qt,
            numberOfMonths: mt,
            keepOpenOnDateSelect: At,
            reopenPickerOnClearDates: It,
            renderCalendarInfo: Et,
            calendarInfoPosition: M,
            hideKeyboardShortcutsPanel: G,
            verticalHeight: B,
            transitionDuration: ye,
            horizontalMonthPadding: Te,
            verticalSpacing: we,
            dayPickerNavigationInlineStyles: Pe,
            navPosition: me,
            navPrev: ge,
            navNext: gt,
            renderNavPrevButton: et,
            renderNavNextButton: Be,
            onPrevMonthClick: rt,
            onNextMonthClick: Ze,
            renderCalendarDay: at,
            renderDayContents: dt,
            minimumNights: ft,
            minDate: ht,
            maxDate: Wt,
            enableOutsideDays: wt,
            isDayBlocked: br,
            isOutsideRange: Lo,
            isDayHighlighted: Fo,
            displayFormat: s,
            monthFormat: oi,
            weekDayFormat: jo,
            phrases: Gi,
            dayAriaLabelFormat: qo,
            renderMonthElement: Wo
          }
        ) })
      }
    );
  }
}
oe(yw, "defaultProps", {
  type: "default",
  focused: null,
  onFocusChange: null,
  format: void 0,
  dateRangeProps: null,
  ...mw
});
/*!
 * iCheck v1.0.2, http://git.io/arlzeA
 * ===================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */
(function(e) {
  var t = "iCheck", r = t + "-helper", n = "checkbox", i = "radio", a = "checked", o = "un" + a, s = "disabled", l = "determinate", u = "in" + l, c = "update", f = "type", d = "click", p = "touchbegin.i touchend.i", m = "addClass", S = "removeClass", w = "trigger", C = "label", y = "cursor", T = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
  e.fn[t] = function(z, Q) {
    var se = 'input[type="' + n + '"], input[type="' + i + '"]', X = e(), ee = function(b) {
      b.each(function() {
        var A = e(this);
        A.is(se) ? X = X.add(A) : X = X.add(A.find(se));
      });
    };
    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(z))
      return z = z.toLowerCase(), ee(this), X.each(function() {
        var b = e(this);
        z == "destroy" ? L(b, "ifDestroyed") : R(b, !0, z), e.isFunction(Q) && Q();
      });
    if (typeof z == "object" || !z) {
      var J = e.extend({
        checkedClass: a,
        disabledClass: s,
        indeterminateClass: u,
        labelHover: !0
      }, z), ue = J.handle, ce = J.hoverClass || "hover", Z = J.focusClass || "focus", V = J.activeClass || "active", h = !!J.labelHover, v = J.labelHoverClass || "hover", g = ("" + J.increaseArea).replace("%", "") | 0;
      return (ue == n || ue == i) && (se = 'input[type="' + ue + '"]'), g < -50 && (g = -50), ee(this), X.each(function() {
        var b = e(this);
        L(b);
        var A = this, E = A.id, I = -g + "%", H = 100 + g * 2 + "%", q = {
          position: "absolute",
          top: I,
          left: I,
          display: "block",
          width: H,
          height: H,
          margin: 0,
          padding: 0,
          background: "#fff",
          border: 0,
          opacity: 0
        }, K = T ? {
          position: "absolute",
          visibility: "hidden"
        } : g ? q : {
          position: "absolute",
          opacity: 0
        }, ae = A[f] == n ? J.checkboxClass || "i" + n : J.radioClass || "i" + i, U = e(C + '[for="' + E + '"]').add(b.closest(C)), ve = !!J.aria, de = t + "-" + Math.random().toString(36).substr(2, 6), he = '<div class="' + ae + '" ' + (ve ? 'role="' + A[f] + '" ' : ""), Ee;
        ve && U.each(function() {
          he += 'aria-labelledby="', this.id ? he += this.id : (this.id = de, he += de), he += '"';
        }), he = b.wrap(he + "/>")[w]("ifCreated").parent().append(J.insert), Ee = e('<ins class="' + r + '"/>').css(q).appendTo(he), b.data(t, { o: J, s: b.attr("style") }).css(K), J.inheritClass && he[m](A.className || ""), J.inheritID && E && he.attr("id", t + "-" + E), he.css("position") == "static" && he.css("position", "relative"), R(b, !0, c), U.length && U.on(d + ".i mouseover.i mouseout.i " + p, function(De) {
          var Ce = De[f], Ie = e(this);
          if (!A[s]) {
            if (Ce == d) {
              if (e(De.target).is("a"))
                return;
              R(b, !1, !0);
            } else
              h && (/ut|nd/.test(Ce) ? (he[S](ce), Ie[S](v)) : (he[m](ce), Ie[m](v)));
            if (T)
              De.stopPropagation();
            else
              return !1;
          }
        }), b.on(d + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(De) {
          var Ce = De[f], Ie = De.keyCode;
          if (Ce == d)
            return !1;
          if (Ce == "keydown" && Ie == 32)
            return A[f] == i && A[a] || (A[a] ? N(b, a) : P(b, a)), !1;
          Ce == "keyup" && A[f] == i ? !A[a] && P(b, a) : /us|ur/.test(Ce) && he[Ce == "blur" ? S : m](Z);
        }), Ee.on(d + " mousedown mouseup mouseover mouseout " + p, function(De) {
          var Ce = De[f], Ie = /wn|up/.test(Ce) ? V : ce;
          if (!A[s])
            if (Ce == d ? R(b, !1, !0) : (/wn|er|in/.test(Ce) ? he[m](Ie) : he[S](Ie + " " + V), U.length && h && Ie == ce && U[/ut|nd/.test(Ce) ? S : m](v)), T)
              De.stopPropagation();
            else
              return !1;
        });
      });
    } else
      return this;
  };
  function R(z, Q, se) {
    var X = z[0], ee = /er/.test(se) ? u : /bl/.test(se) ? s : a, J = se == c ? {
      checked: X[a],
      disabled: X[s],
      indeterminate: z.attr(u) == "true" || z.attr(l) == "false"
    } : X[ee];
    if (/^(ch|di|in)/.test(se) && !J)
      P(z, ee);
    else if (/^(un|en|de)/.test(se) && J)
      N(z, ee);
    else if (se == c)
      for (var ue in J)
        J[ue] ? P(z, ue, !0) : N(z, ue, !0);
    else
      (!Q || se == "toggle") && (Q || z[w]("ifClicked"), J ? X[f] !== i && N(z, ee) : P(z, ee));
  }
  function P(z, Q, se) {
    var X = z[0], ee = z.parent(), J = Q == a, ue = Q == u, ce = Q == s, Z = ue ? l : J ? o : "enabled", V = W(z, Z + Y(X[f])), h = W(z, Q + Y(X[f]));
    if (X[Q] !== !0) {
      if (!se && Q == a && X[f] == i && X.name) {
        var v = z.closest("form"), g = 'input[name="' + X.name + '"]';
        g = v.length ? v.find(g) : e(g), g.each(function() {
          this !== X && e(this).data(t) && N(e(this), Q);
        });
      }
      ue ? (X[Q] = !0, X[a] && N(z, a, "force")) : (se || (X[Q] = !0), J && X[u] && N(z, u, !1)), re(z, J, Q, se);
    }
    X[s] && W(z, y, !0) && ee.find("." + r).css(y, "default"), ee[m](h || W(z, Q) || ""), ee.attr("role") && !ue && ee.attr("aria-" + (ce ? s : a), "true"), ee[S](V || W(z, Z) || "");
  }
  function N(z, Q, se) {
    var X = z[0], ee = z.parent(), J = Q == a, ue = Q == u, ce = Q == s, Z = ue ? l : J ? o : "enabled", V = W(z, Z + Y(X[f])), h = W(z, Q + Y(X[f]));
    X[Q] !== !1 && ((ue || !se || se == "force") && (X[Q] = !1), re(z, J, Z, se)), !X[s] && W(z, y, !0) && ee.find("." + r).css(y, "pointer"), ee[S](h || W(z, Q) || ""), ee.attr("role") && !ue && ee.attr("aria-" + (ce ? s : a), "false"), ee[m](V || W(z, Z) || "");
  }
  function L(z, Q) {
    z.data(t) && (z.parent().html(z.attr("style", z.data(t).s || "")), Q && z[w](Q), z.off(".i").unwrap(), e(C + '[for="' + z[0].id + '"]').add(z.closest(C)).off(".i"));
  }
  function W(z, Q, se) {
    if (z.data(t))
      return z.data(t).o[Q + (se ? "" : "Class")];
  }
  function Y(z) {
    return z.charAt(0).toUpperCase() + z.slice(1);
  }
  function re(z, Q, se, X) {
    X || (Q && z[w]("ifToggled"), z[w]("ifChanged")[w]("if" + Y(se)));
  }
})(Re || window.Zepto);
class bw extends Ue {
  constructor(r) {
    super(r);
    oe(this, "state", {});
    oe(this, "ref", {});
    oe(this, "$ref", {});
    oe(this, "mapAllOptions", (r) => this.mapOptions(r).map(this.optionToJSXComponent));
    oe(this, "mapOptions", (r) => Array.isArray(r) ? r.map((n) => this.mapSingleOption(n)) : [this.mapSingleOption(r)]);
    oe(this, "mapSingleOption", (r) => {
      const { disabled: n } = this.props, { internalValue: i } = this.state;
      if (typeof r == "object") {
        const { value: a, text: o, disabled: s } = r;
        return {
          value: a,
          text: o,
          disabled: s || n,
          checked: i && i === a || !1
        };
      }
      return {
        value: r,
        text: r.toString(),
        // eslint-disable-next-line eqeqeq
        checked: i && r == i || !1,
        disabled: n
      };
    });
    oe(this, "optionToJSXComponent", ({
      value: r,
      text: n,
      disabled: i,
      checked: a
    }, o) => {
      const { name: s, disabled: l } = this.props;
      return /* @__PURE__ */ ie("label", { htmlFor: `${s}`, id: `label-${s}-option-${o}`, style: { marginRight: "8px" }, children: [
        /* @__PURE__ */ _(
          "input",
          {
            ref: (u) => {
              this.ref[r] = u;
            },
            name: s,
            checked: a,
            onChange: this.onChange,
            value: r,
            disabled: i || l,
            type: "radio",
            className: "a2r-icheck minimal"
          }
        ),
        /* @__PURE__ */ _("span", { children: n ? ` ${n}` : "" })
      ] }, r);
    });
    const { options: n, defaultValue: i, value: a } = r;
    this.state.internalValue = a || i, this.state.options = this.mapAllOptions(n), this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.initializeICheck();
  }
  componentDidUpdate({ value: r, disabled: n, options: i }) {
    const { options: a, disabled: o, value: s } = this.props;
    (n !== o || i !== a) && this.updateOptions(), r !== s && this.setState({ internalValue: s }, () => {
      r && Re(this.ref[r]).iCheck("uncheck"), s && Re(this.ref[s]).iCheck("check"), this.updateOptions();
    });
  }
  componentWillUnmount() {
    Re(Object.values(this.ref)).iCheck("destroy");
  }
  onChange(r) {
    const { internalValue: n } = this.state;
    if (n === r.target.value)
      return;
    const { onChange: i } = this.props, { target: { value: a } } = r;
    this.setState({ internalValue: a }, () => {
      this.updateOptions();
    }), i && i(r);
  }
  updateOptions() {
    Re(Object.values(this.ref)).iCheck("destroy");
    const { options: r } = this.props;
    this.setState({ options: this.mapAllOptions(r) }, () => {
      this.initializeICheck();
    });
  }
  initializeICheck() {
    const r = Re(Object.values(this.ref)).iCheck({
      checkboxClass: "icheckbox_minimal-blue",
      radioClass: "iradio_minimal-blue"
    });
    r.on("ifChecked", this.onChange), this.$ref = r;
  }
  render() {
    const {
      name: r
    } = this.props, {
      iconLeft: n,
      iconRight: i,
      addonLeft: a,
      addonRight: o,
      size: s,
      checkboxLeft: l,
      checkboxLeftProps: u,
      checkboxRight: c,
      checkboxRightProps: f,
      radioLeft: d,
      radioLeftProps: p,
      radioRight: m,
      radioRightProps: S,
      buttonLeft: w,
      buttonRight: C,
      width: y,
      help: T
    } = this.props, {
      label: R,
      labelPosition: P,
      labelXs: N,
      labelSm: L,
      labelMd: W,
      labelLg: Y,
      xs: re,
      sm: z,
      md: Q,
      lg: se,
      labelIcon: X,
      type: ee,
      labelClass: J
    } = this.props, { options: ue } = this.state;
    return /* @__PURE__ */ _(
      Dr,
      {
        iconLeft: n,
        iconRight: i,
        addonLeft: a,
        addonRight: o,
        size: s,
        checkboxLeft: l,
        checkboxLeftProps: u,
        checkboxRight: c,
        checkboxRightProps: f,
        radioLeft: d,
        radioLeftProps: p,
        radioRight: m,
        radioRightProps: S,
        buttonLeft: w,
        buttonRight: C,
        width: y,
        help: T,
        label: R,
        labelPosition: P,
        labelXs: N,
        labelSm: L,
        labelMd: W,
        labelLg: Y,
        name: r,
        xs: re,
        sm: z,
        md: Q,
        lg: se,
        labelIcon: X,
        type: ee,
        labelClass: J,
        children: ue
      }
    );
  }
}
oe(bw, "defaultProps", {
  options: [""],
  name: Ty(),
  disabled: !1,
  value: void 0,
  defaultValue: void 0,
  onChange: null
});
class ww extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", {});
    oe(this, "onChange", (r) => {
      const {
        onChange: n,
        format: i,
        id: a,
        name: o
      } = this.props;
      if (n) {
        const s = new Event("change");
        let l;
        r instanceof Fr ? l = r.format(i) : l = r, Object.defineProperty(s, "target", {
          writable: !1,
          value: {
            value: l,
            id: a,
            type: "text",
            name: o
          }
        });
        const u = uf(s);
        n(u);
      }
    });
  }
  render() {
    const {
      name: r,
      value: n,
      defaultValue: i,
      format: a,
      timeFormat: o,
      onBlur: s,
      id: l,
      placeholder: u,
      disabled: c,
      dateTimeProps: f
    } = this.props, {
      iconLeft: d,
      iconRight: p,
      addonLeft: m,
      addonRight: S,
      size: w,
      checkboxLeft: C,
      checkboxLeftProps: y,
      checkboxRight: T,
      checkboxRightProps: R,
      radioLeft: P,
      radioLeftProps: N,
      radioRight: L,
      radioRightProps: W,
      buttonLeft: Y,
      buttonRight: re,
      width: z,
      help: Q
    } = this.props, {
      label: se,
      labelPosition: X,
      labelXs: ee,
      labelSm: J,
      labelMd: ue,
      labelLg: ce,
      xs: Z,
      sm: V,
      md: h,
      lg: v,
      labelIcon: g,
      type: b,
      labelClass: A
    } = this.props, {
      viewDate: E,
      input: I,
      open: H,
      locale: q,
      utc: K,
      displayTimeZone: ae,
      onViewModeChange: U,
      onNavigateBack: ve,
      onNavigateForward: de,
      viewMode: he,
      className: Ee,
      inputProps: De = {},
      isValidDate: Ce,
      renderDay: Ie,
      renderMonth: Oe,
      renderYear: Ke,
      strictParsing: $e,
      closeOnSelect: Me,
      timeConstraints: He,
      disableOnClickOutside: st
    } = f || {};
    return De.id = l, De.placeholder = u, De.disabled = c, /* @__PURE__ */ _(
      Dr,
      {
        iconLeft: d,
        iconRight: p,
        addonLeft: m,
        addonRight: S,
        size: w,
        checkboxLeft: C,
        checkboxLeftProps: y,
        checkboxRight: T,
        checkboxRightProps: R,
        radioLeft: P,
        radioLeftProps: N,
        radioRight: L,
        radioRightProps: W,
        buttonLeft: Y,
        buttonRight: re,
        width: z,
        help: Q,
        label: se,
        labelPosition: X,
        labelXs: ee,
        labelSm: J,
        labelMd: ue,
        labelLg: ce,
        name: r,
        xs: Z,
        sm: V,
        md: h,
        lg: v,
        labelIcon: g,
        type: b,
        labelClass: A,
        children: /* @__PURE__ */ _(
          ox,
          {
            value: n,
            defaultValue: i,
            viewDate: E,
            dateFormat: a,
            timeFormat: o,
            input: I,
            open: H,
            locale: q,
            utc: K,
            displayTimeZone: ae,
            onChange: this.onChange,
            onBlur: s,
            onViewModeChange: U,
            onNavigateBack: ve,
            onNavigateForward: de,
            viewMode: he,
            className: Ee,
            inputProps: De,
            isValidDate: Ce,
            renderDay: Ie,
            renderMonth: Oe,
            renderYear: Ke,
            strictParsing: $e,
            closeOnSelect: Me,
            timeConstraints: He,
            disableOnClickOutside: st
          }
        )
      }
    );
  }
}
oe(ww, "defaultProps", {
  value: void 0,
  defaultValue: void 0,
  onChange: void 0,
  onBlur: void 0,
  id: void 0,
  name: void 0,
  placeholder: void 0,
  disabled: !1,
  format: void 0,
  timeFormat: "hh:mm",
  dateTimeProps: void 0
});
const qO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Checkbox: B0,
  Date: jO,
  DateRange: yw,
  DateTime: ww,
  ICheck: bw,
  ImportWrapper: Dr,
  Radio: xR,
  Select: CR,
  Select2: U0,
  Slider: sf,
  Text: SR
}, Symbol.toStringTag, { value: "Module" })), WO = ({ children: e }) => /* @__PURE__ */ ie("div", { className: "login-box", children: [
  /* @__PURE__ */ _("div", { className: "login-logo", children: /* @__PURE__ */ ie("a", { href: "/", children: [
    /* @__PURE__ */ _("b", { children: "Sper" }),
    "at"
  ] }) }),
  /* @__PURE__ */ _("div", { className: "login-box-body", children: e })
] });
WO.defaultProps = {
  children: void 0
};
function Sw(e) {
  class t extends Ue {
    constructor(n) {
      super(n), this.state = {
        component: void 0
      };
    }
    async componentDidMount() {
      const { default: n } = await e();
      this.setState({
        component: n
      });
    }
    render() {
      const { component: n } = this.state;
      return n ? /* @__PURE__ */ _(n, { ...this.props }) : null;
    }
  }
  return t;
}
const HO = ({ color: e, text: t, id: r }) => /* @__PURE__ */ _("span", { id: r, className: `badge bg-${e}`, children: t });
HO.defaultProps = {
  id: void 0,
  text: void 0
};
class ik extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", {});
    oe(this, "main", null);
  }
  componentDidMount() {
    function r(l) {
      l.each(function() {
        const c = {
          title: Re.trim(Re(this).text())
          // use the element's text as the event title
        };
        Re(this).data("eventObject", c), Re(this).draggable({
          zIndex: 1070,
          revert: !0,
          // will cause the event to go back to its
          revertDuration: 0
          //  original position after the drag
        });
      });
    }
    r(Re("#external-events div.external-event"));
    const n = /* @__PURE__ */ new Date(), i = n.getDate(), a = n.getMonth(), o = n.getFullYear();
    Re(this.main).fullCalendar({
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay"
      },
      buttonText: {
        today: "today",
        month: "month",
        week: "week",
        day: "day"
      },
      // Random default events
      events: [
        {
          title: "All Day Event",
          start: new Date(o, a, 1),
          backgroundColor: "#f56954",
          // red
          borderColor: "#f56954"
          // red
        },
        {
          title: "Long Event",
          start: new Date(o, a, i - 5),
          end: new Date(o, a, i - 2),
          backgroundColor: "#f39c12",
          // yellow
          borderColor: "#f39c12"
          // yellow
        },
        {
          title: "Meeting",
          start: new Date(o, a, i, 10, 30),
          allDay: !1,
          backgroundColor: "#0073b7",
          // Blue
          borderColor: "#0073b7"
          // Blue
        },
        {
          title: "Lunch",
          start: new Date(o, a, i, 12, 0),
          end: new Date(o, a, i, 14, 0),
          allDay: !1,
          backgroundColor: "#00c0ef",
          // Info (aqua)
          borderColor: "#00c0ef"
          // Info (aqua)
        },
        {
          title: "Birthday Party",
          start: new Date(o, a, i + 1, 19, 0),
          end: new Date(o, a, i + 1, 22, 30),
          allDay: !1,
          backgroundColor: "#00a65a",
          // Success (green)
          borderColor: "#00a65a"
          // Success (green)
        },
        {
          title: "Click for Google",
          start: new Date(o, a, 28),
          end: new Date(o, a, 29),
          url: "http://google.com/",
          backgroundColor: "#3c8dbc",
          // Primary (light-blue)
          borderColor: "#3c8dbc"
          // Primary (light-blue)
        }
      ],
      editable: !0,
      droppable: !0,
      // this allows things to be dropped onto the calendar !!!
      drop(l, u) {
        const c = Re(this).data("eventObject"), f = Re.extend({}, c);
        f.start = l, f.allDay = u, f.backgroundColor = Re(this).css("background-color"), f.borderColor = Re(this).css("border-color"), Re("#calendar").fullCalendar("renderEvent", f, !0), Re("#drop-remove").is(":checked") && Re(this).remove();
      }
    });
    let s = "#3c8dbc";
    Re("#color-chooser > li > a").click(function(u) {
      u.preventDefault(), s = Re(this).css("color"), Re("#add-new-event").css({ "background-color": s, "border-color": s });
    }), Re("#add-new-event").click((l) => {
      l.preventDefault();
      const u = Re("#new-event").val();
      if (u.length === 0)
        return;
      const c = Re("<div />");
      c.css({
        "background-color": s,
        "border-color": s,
        color: "#fff"
      }).addClass("external-event"), c.html(u), Re("#external-events").prepend(c), r(c), Re("#new-event").val("");
    });
  }
  render() {
    return /* @__PURE__ */ _("div", { ref: (r) => {
      this.main = r;
    } });
  }
}
const xw = ({ paths: e, exact: t, component: r }) => /* @__PURE__ */ _(
  en,
  {
    path: e,
    exact: t,
    component: Sw(() => import(r))
  }
);
xw.defaultProps = {
  paths: void 0,
  exact: !1
};
const VO = ({
  padding: e,
  color: t,
  children: r,
  side: n
}) => /* @__PURE__ */ _("div", { className: `${e ? "pad" : ""} box-pane-${n} bg-${t}`, children: r });
VO.defaultProps = {
  side: "right",
  padding: !1
};
function BO({
  id: e,
  type: t,
  pullRight: r,
  children: n
}) {
  return /* @__PURE__ */ _("span", { id: e, className: `label label-${t}${r ? " pull-right" : ""}`, children: n });
}
BO.defaultProps = {
  id: void 0,
  children: null,
  pullRight: !1
};
class UO extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "state", { open: !1 });
    oe(this, "toggleOpen", () => {
      const { open: r } = this.state;
      this.setState({
        open: !r
      });
    });
  }
  render() {
    const {
      smartTableKey: r,
      column: n,
      classPreFix: i,
      sortIcons: a,
      order: o,
      orderChanged: s
    } = this.props, { open: l } = this.state, {
      data: u,
      width: c,
      title: f,
      toggleOrder: d
    } = n, p = o.find((R) => R.column === u);
    let m = a.default, S = "asc";
    if (p) {
      let R, P;
      const { direction: N } = p;
      typeof N == "string" ? (R = N.toLowerCase() === "asc", P = N.toLowerCase() === "desc") : typeof N == "number" && (R = N === 1, P = N === -1), R ? (m = a.up, S = "desc") : P && (m = a.down, S = "none");
    }
    const w = d !== !1, C = w ? () => s(u, S) : void 0, y = w ? "" : ` ${i}-column-header-sort-disabled`, T = (R) => {
      console.log(R);
    };
    return /* @__PURE__ */ ie("th", { className: `${i}-column-header${l ? " open" : ""}`, style: { width: c }, children: [
      /* @__PURE__ */ _("span", { onClick: this.toggleOpen, onKeyPress: () => {
      }, role: "button", tabIndex: 0, children: f }),
      "  ",
      /* @__PURE__ */ _("div", { role: "button", tabIndex: 0, className: `${i}-column-header-sort${y}`, onClick: C, onKeyPress: T, children: m })
    ] }, `${r}-${f}`);
  }
}
class Cw extends Ue {
  constructor() {
    super(...arguments);
    oe(this, "handleAccept", () => {
      const { handleAccept: r } = this.props;
      r(this.updatedatableState), this.updatedatableState = {};
    });
    oe(this, "handleClose", () => {
      const { handleClose: r } = this.props;
      r(), this.updatedatableState = {};
    });
    oe(this, "stateToUpdate", (r) => {
      this.updatedatableState = {
        ...this.updatedatableState,
        ...r
      };
    });
    oe(this, "updatedatableState", {});
  }
  render() {
    const {
      classPreFix: r,
      title: n,
      component: i,
      props: a
    } = this.props;
    return /* @__PURE__ */ ie(
      Ir,
      {
        backdrop: !0,
        show: i !== void 0,
        onHide: this.handleClose,
        dialogClassName: `${r}-modal`,
        enforceFocus: !1,
        children: [
          /* @__PURE__ */ _(Ir.Header, { closeButton: !0, children: /* @__PURE__ */ _(Ir.Title, { children: n }) }),
          /* @__PURE__ */ _(Ir.Body, { children: i && /* @__PURE__ */ _(i, { stateToUpdate: this.stateToUpdate, ...a }) }),
          /* @__PURE__ */ _(Ir.Footer, { children: /* @__PURE__ */ _(Ci, { text: "Ok", onClick: this.handleAccept }) })
        ]
      }
    );
  }
}
oe(Cw, "defaultProps", {
  component: void 0,
  props: void 0,
  title: void 0
});
var Ao = { exports: {} }, _w = {};
function Tw(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Tw(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function iy() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Tw(e)) && (n && (n += " "), n += t);
  return n;
}
const $O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: iy,
  default: iy
}, Symbol.toStringTag, { value: "Module" })), zO = /* @__PURE__ */ ly($O);
var bt = {}, Wr = {};
Object.defineProperty(Wr, "__esModule", {
  value: !0
});
Wr.dontSetMe = JO;
Wr.findInArray = YO;
Wr.int = KO;
Wr.isFunction = GO;
Wr.isNum = XO;
function YO(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function GO(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function XO(e) {
  return typeof e == "number" && !isNaN(e);
}
function KO(e) {
  return parseInt(e, 10);
}
function JO(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var Dn = {};
Object.defineProperty(Dn, "__esModule", {
  value: !0
});
Dn.browserPrefixToKey = Dw;
Dn.browserPrefixToStyle = ZO;
Dn.default = void 0;
Dn.getPrefix = Pw;
const bc = ["Moz", "Webkit", "O", "ms"];
function Pw() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < bc.length; n++)
    if (Dw(t, bc[n]) in r)
      return bc[n];
  return "";
}
function Dw(e, t) {
  return t ? "".concat(t).concat(QO(e)) : e;
}
function ZO(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function QO(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
Dn.default = Pw();
Object.defineProperty(bt, "__esModule", {
  value: !0
});
bt.addClassName = Ow;
bt.addEvent = r1;
bt.addUserSelectStyles = p1;
bt.createCSSTransform = u1;
bt.createSVGTransform = c1;
bt.getTouch = f1;
bt.getTouchIdentifier = d1;
bt.getTranslation = Ed;
bt.innerHeight = o1;
bt.innerWidth = s1;
bt.matchesSelector = Rw;
bt.matchesSelectorAndParentsTo = t1;
bt.offsetXYFromParent = l1;
bt.outerHeight = i1;
bt.outerWidth = a1;
bt.removeClassName = kw;
bt.removeEvent = n1;
bt.removeUserSelectStyles = h1;
var ur = Wr, ay = e1(Dn);
function Ew(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ew = function(n) {
    return n ? r : t;
  })(e);
}
function e1(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Ew(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
let Ta = "";
function Rw(e, t) {
  return Ta || (Ta = (0, ur.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ur.isFunction)(e[r]);
  })), (0, ur.isFunction)(e[Ta]) ? e[Ta](t) : !1;
}
function t1(e, t, r) {
  let n = e;
  do {
    if (Rw(n, t))
      return !0;
    if (n === r)
      return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function r1(e, t, r, n) {
  if (!e)
    return;
  const i = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, i) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function n1(e, t, r, n) {
  if (!e)
    return;
  const i = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, i) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function i1(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ur.int)(r.borderTopWidth), t += (0, ur.int)(r.borderBottomWidth), t;
}
function a1(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ur.int)(r.borderLeftWidth), t += (0, ur.int)(r.borderRightWidth), t;
}
function o1(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ur.int)(r.paddingTop), t -= (0, ur.int)(r.paddingBottom), t;
}
function s1(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ur.int)(r.paddingLeft), t -= (0, ur.int)(r.paddingRight), t;
}
function l1(e, t, r) {
  const i = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - i.left) / r, o = (e.clientY + t.scrollTop - i.top) / r;
  return {
    x: a,
    y: o
  };
}
function u1(e, t) {
  const r = Ed(e, t, "px");
  return {
    [(0, ay.browserPrefixToKey)("transform", ay.default)]: r
  };
}
function c1(e, t) {
  return Ed(e, t, "");
}
function Ed(e, t, r) {
  let {
    x: n,
    y: i
  } = e, a = "translate(".concat(n).concat(r, ",").concat(i).concat(r, ")");
  if (t) {
    const o = "".concat(typeof t.x == "string" ? t.x : t.x + r), s = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(o, ", ").concat(s, ")") + a;
  }
  return a;
}
function f1(e, t) {
  return e.targetTouches && (0, ur.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ur.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function d1(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function p1(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Ow(e.body, "react-draggable-transparent-selection");
}
function h1(e) {
  if (e)
    try {
      if (e.body && kw(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function Ow(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function kw(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var Hr = {};
Object.defineProperty(Hr, "__esModule", {
  value: !0
});
Hr.canDragX = m1;
Hr.canDragY = y1;
Hr.createCoreData = w1;
Hr.createDraggableData = S1;
Hr.getBoundPosition = v1;
Hr.getControlPosition = b1;
Hr.snapToGrid = g1;
var sr = Wr, qn = bt;
function v1(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : x1(n);
  const i = Rd(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = i, o = a.defaultView;
    let s;
    if (n === "parent" ? s = i.parentNode : s = a.querySelector(n), !(s instanceof o.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const l = s, u = o.getComputedStyle(i), c = o.getComputedStyle(l);
    n = {
      left: -i.offsetLeft + (0, sr.int)(c.paddingLeft) + (0, sr.int)(u.marginLeft),
      top: -i.offsetTop + (0, sr.int)(c.paddingTop) + (0, sr.int)(u.marginTop),
      right: (0, qn.innerWidth)(l) - (0, qn.outerWidth)(i) - i.offsetLeft + (0, sr.int)(c.paddingRight) - (0, sr.int)(u.marginRight),
      bottom: (0, qn.innerHeight)(l) - (0, qn.outerHeight)(i) - i.offsetTop + (0, sr.int)(c.paddingBottom) - (0, sr.int)(u.marginBottom)
    };
  }
  return (0, sr.isNum)(n.right) && (t = Math.min(t, n.right)), (0, sr.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, sr.isNum)(n.left) && (t = Math.max(t, n.left)), (0, sr.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function g1(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], i = Math.round(r / e[1]) * e[1];
  return [n, i];
}
function m1(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function y1(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function b1(e, t, r) {
  const n = typeof t == "number" ? (0, qn.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const i = Rd(r), a = r.props.offsetParent || i.offsetParent || i.ownerDocument.body;
  return (0, qn.offsetXYFromParent)(n || e, a, r.props.scale);
}
function w1(e, t, r) {
  const n = !(0, sr.isNum)(e.lastX), i = Rd(e);
  return n ? {
    node: i,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: r,
    x: t,
    y: r
  } : {
    node: i,
    deltaX: t - e.lastX,
    deltaY: r - e.lastY,
    lastX: e.lastX,
    lastY: e.lastY,
    x: t,
    y: r
  };
}
function S1(e, t) {
  const r = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / r,
    y: e.state.y + t.deltaY / r,
    deltaX: t.deltaX / r,
    deltaY: t.deltaY / r,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function x1(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Rd(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Io = {}, No = {};
Object.defineProperty(No, "__esModule", {
  value: !0
});
No.default = C1;
function C1() {
}
Object.defineProperty(Io, "__esModule", {
  value: !0
});
Io.default = void 0;
var wc = T1(pe), Xt = Od(Xn), _1 = Od(Tr), Nt = bt, Xr = Hr, Sc = Wr, hi = Od(No);
function Od(e) {
  return e && e.__esModule ? e : { default: e };
}
function Aw(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Aw = function(n) {
    return n ? r : t;
  })(e);
}
function T1(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Aw(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
function Ut(e, t, r) {
  return t = P1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P1(e) {
  var t = D1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function D1(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
const Cr = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
};
let Kr = Cr.mouse, Mo = class extends wc.Component {
  constructor() {
    super(...arguments), Ut(this, "dragging", !1), Ut(this, "lastX", NaN), Ut(this, "lastY", NaN), Ut(this, "touchIdentifier", null), Ut(this, "mounted", !1), Ut(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0)
        return !1;
      const r = this.findDOMNode();
      if (!r || !r.ownerDocument || !r.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: n
      } = r;
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, Nt.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, Nt.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const i = (0, Nt.getTouchIdentifier)(t);
      this.touchIdentifier = i;
      const a = (0, Xr.getControlPosition)(t, i, this);
      if (a == null)
        return;
      const {
        x: o,
        y: s
      } = a, l = (0, Xr.createCoreData)(this, o, s);
      (0, hi.default)("DraggableCore: handleDragStart: %j", l), (0, hi.default)("calling", this.props.onStart), !(this.props.onStart(t, l) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Nt.addUserSelectStyles)(n), this.dragging = !0, this.lastX = o, this.lastY = s, (0, Nt.addEvent)(n, Kr.move, this.handleDrag), (0, Nt.addEvent)(n, Kr.stop, this.handleDragStop));
    }), Ut(this, "handleDrag", (t) => {
      const r = (0, Xr.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: i
      } = r;
      if (Array.isArray(this.props.grid)) {
        let s = n - this.lastX, l = i - this.lastY;
        if ([s, l] = (0, Xr.snapToGrid)(this.props.grid, s, l), !s && !l)
          return;
        n = this.lastX + s, i = this.lastY + l;
      }
      const a = (0, Xr.createCoreData)(this, n, i);
      if ((0, hi.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(t, a) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const l = document.createEvent("MouseEvents");
          l.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(l);
        }
        return;
      }
      this.lastX = n, this.lastY = i;
    }), Ut(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const r = (0, Xr.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: i
      } = r;
      if (Array.isArray(this.props.grid)) {
        let l = n - this.lastX || 0, u = i - this.lastY || 0;
        [l, u] = (0, Xr.snapToGrid)(this.props.grid, l, u), n = this.lastX + l, i = this.lastY + u;
      }
      const a = (0, Xr.createCoreData)(this, n, i);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const s = this.findDOMNode();
      s && this.props.enableUserSelectHack && (0, Nt.removeUserSelectStyles)(s.ownerDocument), (0, hi.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, s && ((0, hi.default)("DraggableCore: Removing handlers"), (0, Nt.removeEvent)(s.ownerDocument, Kr.move, this.handleDrag), (0, Nt.removeEvent)(s.ownerDocument, Kr.stop, this.handleDragStop));
    }), Ut(this, "onMouseDown", (t) => (Kr = Cr.mouse, this.handleDragStart(t))), Ut(this, "onMouseUp", (t) => (Kr = Cr.mouse, this.handleDragStop(t))), Ut(this, "onTouchStart", (t) => (Kr = Cr.touch, this.handleDragStart(t))), Ut(this, "onTouchEnd", (t) => (Kr = Cr.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, Nt.addEvent)(t, Cr.touch.start, this.onTouchStart, {
      passive: !1
    });
  }
  componentWillUnmount() {
    this.mounted = !1;
    const t = this.findDOMNode();
    if (t) {
      const {
        ownerDocument: r
      } = t;
      (0, Nt.removeEvent)(r, Cr.mouse.move, this.handleDrag), (0, Nt.removeEvent)(r, Cr.touch.move, this.handleDrag), (0, Nt.removeEvent)(r, Cr.mouse.stop, this.handleDragStop), (0, Nt.removeEvent)(r, Cr.touch.stop, this.handleDragStop), (0, Nt.removeEvent)(t, Cr.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, Nt.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : _1.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ wc.cloneElement(wc.Children.only(this.props.children), {
      // Note: mouseMove handler is attached to document so it will still function
      // when the user drags quickly and leaves the bounds of the element.
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      // onTouchStart is added on `componentDidMount` so they can be added with
      // {passive: false}, which allows it to cancel. See
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention
      onTouchEnd: this.onTouchEnd
    });
  }
};
Io.default = Mo;
Ut(Mo, "displayName", "DraggableCore");
Ut(Mo, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: Xt.default.bool,
  children: Xt.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: Xt.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: Xt.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(e, t) {
    if (e[t] && e[t].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: Xt.default.arrayOf(Xt.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: Xt.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: Xt.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: Xt.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: Xt.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: Xt.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: Xt.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: Xt.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: Xt.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Sc.dontSetMe,
  style: Sc.dontSetMe,
  transform: Sc.dontSetMe
});
Ut(Mo, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return l.default;
    }
  }), e.default = void 0;
  var t = d(pe), r = c(Xn), n = c(Tr), i = c(zO), a = bt, o = Hr, s = Wr, l = c(Io), u = c(No);
  function c(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function f(y) {
    if (typeof WeakMap != "function")
      return null;
    var T = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
    return (f = function(P) {
      return P ? R : T;
    })(y);
  }
  function d(y, T) {
    if (!T && y && y.__esModule)
      return y;
    if (y === null || typeof y != "object" && typeof y != "function")
      return { default: y };
    var R = f(T);
    if (R && R.has(y))
      return R.get(y);
    var P = {}, N = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var L in y)
      if (L !== "default" && Object.prototype.hasOwnProperty.call(y, L)) {
        var W = N ? Object.getOwnPropertyDescriptor(y, L) : null;
        W && (W.get || W.set) ? Object.defineProperty(P, L, W) : P[L] = y[L];
      }
    return P.default = y, R && R.set(y, P), P;
  }
  function p() {
    return p = Object.assign ? Object.assign.bind() : function(y) {
      for (var T = 1; T < arguments.length; T++) {
        var R = arguments[T];
        for (var P in R)
          Object.prototype.hasOwnProperty.call(R, P) && (y[P] = R[P]);
      }
      return y;
    }, p.apply(this, arguments);
  }
  function m(y, T, R) {
    return T = S(T), T in y ? Object.defineProperty(y, T, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : y[T] = R, y;
  }
  function S(y) {
    var T = w(y, "string");
    return typeof T == "symbol" ? T : String(T);
  }
  function w(y, T) {
    if (typeof y != "object" || y === null)
      return y;
    var R = y[Symbol.toPrimitive];
    if (R !== void 0) {
      var P = R.call(y, T || "default");
      if (typeof P != "object")
        return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (T === "string" ? String : Number)(y);
  }
  class C extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(T, R) {
      let {
        position: P
      } = T, {
        prevPropsPosition: N
      } = R;
      return P && (!N || P.x !== N.x || P.y !== N.y) ? ((0, u.default)("Draggable: getDerivedStateFromProps %j", {
        position: P,
        prevPropsPosition: N
      }), {
        x: P.x,
        y: P.y,
        prevPropsPosition: {
          ...P
        }
      }) : null;
    }
    constructor(T) {
      super(T), m(this, "onDragStart", (R, P) => {
        if ((0, u.default)("Draggable: onDragStart: %j", P), this.props.onStart(R, (0, o.createDraggableData)(this, P)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), m(this, "onDrag", (R, P) => {
        if (!this.state.dragging)
          return !1;
        (0, u.default)("Draggable: onDrag: %j", P);
        const N = (0, o.createDraggableData)(this, P), L = {
          x: N.x,
          y: N.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: Y,
            y: re
          } = L;
          L.x += this.state.slackX, L.y += this.state.slackY;
          const [z, Q] = (0, o.getBoundPosition)(this, L.x, L.y);
          L.x = z, L.y = Q, L.slackX = this.state.slackX + (Y - L.x), L.slackY = this.state.slackY + (re - L.y), N.x = L.x, N.y = L.y, N.deltaX = L.x - this.state.x, N.deltaY = L.y - this.state.y;
        }
        if (this.props.onDrag(R, N) === !1)
          return !1;
        this.setState(L);
      }), m(this, "onDragStop", (R, P) => {
        if (!this.state.dragging || this.props.onStop(R, (0, o.createDraggableData)(this, P)) === !1)
          return !1;
        (0, u.default)("Draggable: onDragStop: %j", P);
        const L = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: Y,
            y: re
          } = this.props.position;
          L.x = Y, L.y = re;
        }
        this.setState(L);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: T.position ? T.position.x : T.defaultPosition.x,
        y: T.position ? T.position.y : T.defaultPosition.y,
        prevPropsPosition: {
          ...T.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, T.position && !(T.onDrag || T.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    componentDidMount() {
      typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
        isElementSVG: !0
      });
    }
    componentWillUnmount() {
      this.setState({
        dragging: !1
      });
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() {
      var T, R;
      return (T = (R = this.props) === null || R === void 0 || (R = R.nodeRef) === null || R === void 0 ? void 0 : R.current) !== null && T !== void 0 ? T : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: T,
        bounds: R,
        children: P,
        defaultPosition: N,
        defaultClassName: L,
        defaultClassNameDragging: W,
        defaultClassNameDragged: Y,
        position: re,
        positionOffset: z,
        scale: Q,
        ...se
      } = this.props;
      let X = {}, ee = null;
      const ue = !!!re || this.state.dragging, ce = re || N, Z = {
        // Set left if horizontal drag is enabled
        x: (0, o.canDragX)(this) && ue ? this.state.x : ce.x,
        // Set top if vertical drag is enabled
        y: (0, o.canDragY)(this) && ue ? this.state.y : ce.y
      };
      this.state.isElementSVG ? ee = (0, a.createSVGTransform)(Z, z) : X = (0, a.createCSSTransform)(Z, z);
      const V = (0, i.default)(P.props.className || "", L, {
        [W]: this.state.dragging,
        [Y]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(l.default, p({}, se, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(P), {
        className: V,
        style: {
          ...P.props.style,
          ...X
        },
        transform: ee
      }));
    }
  }
  e.default = C, m(C, "displayName", "Draggable"), m(C, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...l.default.propTypes,
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: r.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: r.default.oneOfType([r.default.shape({
      left: r.default.number,
      right: r.default.number,
      top: r.default.number,
      bottom: r.default.number
    }), r.default.string, r.default.oneOf([!1])]),
    defaultClassName: r.default.string,
    defaultClassNameDragging: r.default.string,
    defaultClassNameDragged: r.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    positionOffset: r.default.shape({
      x: r.default.oneOfType([r.default.number, r.default.string]),
      y: r.default.oneOfType([r.default.number, r.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: s.dontSetMe,
    style: s.dontSetMe,
    transform: s.dontSetMe
  }), m(C, "defaultProps", {
    ...l.default.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  });
})(_w);
const {
  default: Iw,
  DraggableCore: E1
} = _w;
Ao.exports = Iw;
Ao.exports.default = Iw;
Ao.exports.DraggableCore = E1;
var R1 = Ao.exports;
const O1 = /* @__PURE__ */ nr(R1), k1 = (e) => {
  let t = "none";
  if (e) {
    let r, n;
    const { direction: i } = e;
    typeof i == "string" ? (r = i.toLowerCase() === "asc", n = i.toLowerCase() === "desc") : typeof i == "number" && (r = i === 1, n = i === -1), r ? t = "asc" : n && (t = "desc");
  }
  return t;
}, Nn = 51;
class Nw extends Ue {
  constructor(r) {
    super(r);
    oe(this, "handleStart", (r, n) => {
      var s;
      const {
        classPreFix: i
      } = this.props, o = Array.from((s = n == null ? void 0 : n.node) == null ? void 0 : s.classList).find((l) => l.startsWith(`${i}-select-col-`));
      if (o) {
        const l = parseInt(o.replace(`${i}-select-col-`, ""), 10);
        this.dragIndex = l;
      }
    });
    oe(this, "handleStop", (r, n) => {
      const { y: i } = n, {
        columns: a
      } = this.state, {
        stateToUpdate: o
      } = this.props, s = i / Nn;
      if (this.dragIndex) {
        const l = Math.round(this.dragIndex + s);
        let u = [], c = !1;
        if (l - this.dragIndex > 0 ? (u = u.concat(a.slice(0, this.dragIndex)), u = u.concat(a.slice(this.dragIndex + 1, l + 1)), u.push(a[this.dragIndex]), u = u.concat(a.slice(l + 1)), this.setState({
          columns: u,
          drag: void 0
        }), c = !0) : l - this.dragIndex < 0 ? (u = u.concat(a.slice(0, l)), u.push(a[this.dragIndex]), u = u.concat(a.slice(l, this.dragIndex)), u = u.concat(a.slice(this.dragIndex + 1)), this.setState({
          columns: u,
          drag: void 0
        }), c = !0) : this.setState({
          drag: void 0
        }), c) {
          const f = {
            columns: u
          };
          this.setState(f), o && o(f);
        }
        this.dragIndex = void 0;
      }
    });
    oe(this, "handleDrag", (r, n) => {
      const { y: i } = n, a = i / Nn;
      this.setState({
        drag: {
          index: this.dragIndex,
          offset: a
        }
      });
    });
    oe(this, "dragIndex");
    oe(this, "toggleVisibility", (r) => {
      const { target: n } = r, { name: i, checked: a } = n, {
        hiddenColumns: o
      } = this.state, { stateToUpdate: s } = this.props;
      let l = !1, u = [...o];
      const c = i.split("-")[1];
      if (a ? (u = u.filter((f) => f !== c), l = !0) : u.find((d) => d === c) === void 0 && (u.push(c), l = !0), l) {
        const f = {
          hiddenColumns: u
        };
        this.setState(f), s && s(f);
      }
    });
    oe(this, "toggleOrder", (r) => {
      const { target: n } = r, { name: i, value: a } = n, {
        order: o
      } = this.state, { stateToUpdate: s } = this.props;
      let l = !1, u = [...o];
      const c = i.split("-")[1], f = u.find((d) => d.column === c);
      if (f ? (l = !0, a !== "none" ? f.direction = a : u = u.filter((d) => d.column !== c)) : a !== "none" && (l = !0, u.push({
        column: c,
        direction: a
      })), l) {
        const d = {
          order: u
        };
        this.setState(d), s && s(d);
      }
    });
    const {
      hiddenColumns: n,
      order: i,
      columns: a
    } = r;
    this.state = {
      hiddenColumns: n,
      order: i,
      columns: a,
      drag: void 0
    };
  }
  render() {
    const {
      classPreFix: r
    } = this.props, {
      hiddenColumns: n,
      order: i,
      columns: a,
      drag: o
    } = this.state, s = a.length, l = a.map((u, c) => {
      const f = i.find((C) => C.column === u.data), d = k1(f), p = n.find((C) => C === u.data) === void 0, m = Nn * c * -1, S = Nn * (s - c - 1), w = { x: 0, y: 0 };
      if (o) {
        const { index: C, offset: y } = o, T = C + y;
        y > 0 ? c > C && c <= T && (w.y = -Nn) : y < 0 && c < C && c >= T && (w.y = Nn);
      }
      return /* @__PURE__ */ _(
        O1,
        {
          axis: "both",
          handle: ".handle",
          defaultPosition: { x: 0, y: 0 },
          position: w,
          grid: [1, 1],
          scale: 1,
          onStart: this.handleStart,
          onDrag: this.handleDrag,
          onStop: this.handleStop,
          bounds: {
            top: m,
            bottom: S,
            left: -20,
            right: 20
          },
          children: /* @__PURE__ */ ie("tr", { className: `${r}-select-col-${c}`, children: [
            /* @__PURE__ */ _("td", { className: "handle", children: /* @__PURE__ */ _(Ci, { icon: "fas-grip-horizontal" }) }),
            /* @__PURE__ */ _("td", { children: u.title }),
            /* @__PURE__ */ _("td", { children: /* @__PURE__ */ ie("select", { name: `order-${u.data}`, value: d, onChange: this.toggleOrder, disabled: !(u.toggleOrder === void 0 || u.toggleOrder), children: [
              /* @__PURE__ */ _("option", { value: "none", children: "None" }),
              /* @__PURE__ */ _("option", { value: "asc", children: "Asc" }),
              /* @__PURE__ */ _("option", { value: "desc", children: "Desc" })
            ] }) }),
            /* @__PURE__ */ _("td", { children: /* @__PURE__ */ _("input", { name: `visibility-${u.data}`, checked: p, type: "checkbox", onClick: this.toggleVisibility, disabled: !(u.toggleHidden === void 0 || u.toggleHidden) }) })
          ] })
        },
        `draggable-${u.data}`
      );
    });
    return /* @__PURE__ */ ie("table", { className: "table", children: [
      /* @__PURE__ */ _("thead", { children: /* @__PURE__ */ ie("tr", { children: [
        /* @__PURE__ */ _("th", { children: " " }),
        /* @__PURE__ */ _("th", { children: "Column" }),
        /* @__PURE__ */ _("th", { children: "Order" }),
        /* @__PURE__ */ _("th", { children: "Visible" })
      ] }) }),
      /* @__PURE__ */ _("tbody", { children: l })
    ] });
  }
}
oe(Nw, "defaultProps", {
  stateToUpdate: void 0
});
const { Text: A1 } = qO, kt = "smartTable", kr = class kr extends Ue {
  constructor(r) {
    super(r);
    oe(this, "handleCloseModal", () => {
      const r = {
        component: void 0,
        props: [void 0],
        title: void 0
      };
      this.setState({
        modal: r
      });
    });
    oe(this, "handleAccept", (r) => {
      const n = {
        component: void 0,
        props: void 0,
        title: void 0
      };
      this.setState({
        ...r,
        modal: n
      });
    });
    oe(this, "onFilterColumnChanged", (r, n) => {
      const { onSearchChange: i, onSearch: a } = this.props;
      let o;
      this.filterValue && (o = {
        value: this.filterValue,
        data: r
      }, i && i(o), a && a(o)), this.setState({
        filterColumn: r,
        placeholder: `Search ${n ? ` (${n})` : ""}`,
        filter: o
      });
    });
    oe(this, "onOrderChanged", (r, n) => {
      const { order: i } = this.state, { onOrderChange: a } = this.props;
      let o = [...i];
      const s = o.find((l) => l.column === r);
      s ? n === "asc" || n === "desc" ? s.direction = n : o = o.filter((l) => l.column !== r) : o.push({
        column: r,
        direction: n
      }), a && a(o), this.setState({ order: o });
    });
    oe(this, "onFilter", () => {
      const { filterColumn: r } = this.state, n = {
        value: this.filterValue,
        data: r
      }, { onSearchChange: i } = this.props;
      i && i(n), this.filterValue && r ? this.setState({
        filter: {
          value: this.filterValue,
          data: r
        }
      }) : this.setState({
        filter: void 0
      });
    });
    oe(this, "onRowSelect", (r, n) => {
      const {
        onRowSelect: i,
        select: a,
        selectionMode: o,
        selectionProperty: s,
        selectedRows: l
      } = this.props;
      let u = !0;
      if (i) {
        const m = i(r, n);
        m !== void 0 && (u = m);
      }
      if (!!!l && !(!n && !u)) {
        if (o === "index") {
          if (a === "single")
            this.setState({
              selectedRow: n
            });
          else if (n !== void 0) {
            const { selectedRows: m } = this.state, S = [...m];
            S.push(n), this.setState({
              selectedRows: S
            });
          }
        } else if (o === "property") {
          const m = r ? r[s] : void 0;
          if (a === "single")
            this.setState({
              selectedRow: m
            });
          else if (m !== void 0) {
            const { selectedRows: S } = this.state, w = [...S];
            w.push(m), this.setState({
              selectedRows: w
            });
          }
        } else if (o === "object") {
          if (a === "single")
            this.setState({
              selectedRowsData: r ? [r] : []
            });
          else if (r !== void 0) {
            const { selectedRowsData: m } = this.state, S = [...m];
            S.push(r), this.setState({
              selectedRowsData: S
            });
          }
        }
      }
    });
    oe(this, "onRowDeselect", (r, n) => {
      const { selectedRows: i, selectedRowsData: a } = this.state, {
        onRowDeselect: o,
        selectionMode: s,
        selectionProperty: l,
        selectedRows: u
      } = this.props;
      let c = !0;
      if (o) {
        const d = o(r, n);
        d !== void 0 && (c = d);
      }
      if (c && !!!u) {
        if (s === "index") {
          const d = [...i];
          d.splice(d.indexOf(n), 1), this.setState({
            selectedRows: [...d]
          });
        } else if (s === "property") {
          const d = r ? r[l] : void 0, p = [...i];
          p.splice(p.indexOf(d), 1), this.setState({
            selectedRows: [...p]
          });
        } else if (s === "object") {
          const d = [...a];
          d.splice(d.indexOf(r), 1), this.setState({
            selectedRowsData: [...d]
          });
        }
      }
    });
    oe(this, "onPageChange", (r) => {
      const { onPageChange: n } = this.props, { pagination: i } = this.state;
      this.setState({
        pagination: {
          ...i,
          activePage: r
        }
      }), n && n(r);
    });
    oe(this, "setFilterValueAndFilter", (r) => {
      this.setFilterValue(r), this.onFilter();
    });
    oe(this, "setFilterValue", (r) => {
      const { target: { value: n } } = r;
      this.filterValue = n;
    });
    oe(this, "getColumns", () => {
      const {
        columns: r
      } = this.props, {
        columns: n
      } = this.state;
      return r && r.length > 0 ? r : n;
    });
    oe(this, "filterValue");
    oe(this, "openColumnModal", () => {
      const { columns: r, order: n, hiddenColumns: i } = this.state, a = {
        component: Nw,
        props: {
          columns: r,
          order: n,
          hiddenColumns: i,
          classPreFix: kt
        },
        title: "Select columns"
      };
      this.setState({
        modal: a
      });
    });
    oe(this, "mappedColumnsFromData", (r, n = this.getColumns(), i, a, o) => {
      const {
        pageSize: s,
        activePage: l
      } = i, { key: u } = o;
      let c;
      const f = n.filter((d) => a.find((p) => p === d.data) === void 0);
      if (r) {
        let d = r;
        const { page: p, select: m } = this.props;
        p === void 0 && (d = d.slice(s * l, s * (l + 1)));
        const S = s * l;
        c = d.map((w, C) => {
          const y = C + S, T = this.rowIsSelected(w, y, o);
          let R = () => {
            this.onRowSelect(w, y);
          };
          return T && (m === "single" ? R = () => {
            this.onRowSelect();
          } : R = () => {
            this.onRowDeselect(w, y);
          }), /* @__PURE__ */ _(
            "tr",
            {
              className: T ? `${kt}-row-selected` : "",
              onClick: R,
              children: f.map((P) => kr.mapCell(w[P.data], P, w, y, u))
            },
            `${u}-${y}`
          );
        });
      } else
        c = /* @__PURE__ */ _("tr", { children: /* @__PURE__ */ _("td", { colSpan: f.length, className: "text-center", children: "No matching records found" }) });
      return c;
    });
    const {
      columns: n,
      data: i,
      defaultFilterColumn: a,
      pageSize: o,
      selectionMode: s,
      selectedRows: l,
      selectionProperty: u
    } = r, c = Dy.v4(), f = a;
    let d = [], p = [];
    if (n) {
      {
        const N = n.filter((L) => L.hidden).map((L) => L.data);
        N.length > 0 && (d = d.concat(N));
      }
      {
        const N = n.filter((L) => L.order).map((L) => ({ column: L.data, direction: L.order }));
        N.length > 0 && (p = N);
      }
    }
    let m = {
      pageSize: o,
      totalElements: 0,
      activePage: 0
    }, S = n;
    !n && i && i.length > 0 && (S = kr.columnsFromData(i));
    let w, C = [/* @__PURE__ */ _("a", { className: `${kt}-filter-active ${kt}-filter`, children: "All" })];
    S && (w = kr.headersFromColumns(
      S,
      c,
      p,
      this.onOrderChanged,
      this.setFilterValueAndFilter,
      d
    ), C = kr.searchButtonsFromColumns(
      S,
      "$all",
      this.onFilterColumnChanged
    )), i && (m = {
      pageSize: o,
      totalElements: i.length,
      activePage: 0
    });
    let y = [], T = [];
    l && i && (s === "index" ? (y = y.concat(l), T = T.concat(i.filter((N, L) => l.indexOf(L) > -1))) : s === "property" ? (y = y.concat(l), T = T.concat(i.filter((N) => l.indexOf(N[u]) > -1))) : s === "object" && (y = l, T = l)), this.onFilterColumnChanged = this.onFilterColumnChanged.bind(this);
    const R = {
      key: c,
      headers: w,
      searchButtons: C,
      columns: S,
      filterColumn: f,
      placeholder: "Search",
      actions: [/* @__PURE__ */ _("a", { onClick: this.openColumnModal, children: "Columns" })],
      pagination: m,
      order: p,
      modal: {
        component: void 0,
        props: {},
        title: void 0
      },
      hiddenColumns: d,
      mappedData: [],
      selectedRows: y,
      selectedRowsData: T
    }, P = this.mappedColumnsFromData(i || [], S || [], m, d, R);
    this.state = {
      ...R,
      mappedData: P
    }, this.rowIsSelected = this.rowIsSelected.bind(this);
  }
  static columnsFromData(r) {
    return Object.keys(r[0]).filter((i) => !i.startsWith("_")).map((i) => ({ data: i, title: i.replace(/^./, (a) => a.toUpperCase()).replace(/([a-z])([A-Z])/g, "$1 $2") }));
  }
  static headersFromColumns(r, n, i, a, o, s) {
    const l = {
      up: /* @__PURE__ */ _(Xe, { icon: ["fas", "sort-up"] }),
      down: /* @__PURE__ */ _(Xe, { icon: ["fas", "sort-down"] }),
      default: /* @__PURE__ */ _(Xe, { icon: ["fas", "sort"], color: "#d1d1d1" })
    };
    return r.filter((u) => s.find((c) => c === u.data) === void 0).map((u) => /* @__PURE__ */ _(Qt, { children: /* @__PURE__ */ _(
      UO,
      {
        column: u,
        smartTableKey: n,
        classPreFix: kt,
        sortIcons: l,
        order: i,
        orderChanged: a
      }
    ) }));
  }
  static searchButtonsFromColumns(r, n, i) {
    let a = [
      /* @__PURE__ */ ie(Qt, { children: [
        /* @__PURE__ */ _(
          "a",
          {
            className: `${n === "$all" ? `${kt}-filter-active` : ""} ${kt}-filter`,
            onClick: () => {
              i("$all", void 0);
            },
            children: "All"
          }
        ),
        n === "$all" && /* @__PURE__ */ _(Xe, { className: `${kt}-filter-active-icon`, icon: ["fas", "check"] })
      ] }),
      /* @__PURE__ */ _(Wy, {})
    ];
    return a = a.concat(r.map((o) => /* @__PURE__ */ ie(Qt, { children: [
      /* @__PURE__ */ _(
        "a",
        {
          className: `${n === o.data ? `${kt}-filter-active` : ""} ${kt}-filter`,
          onClick: () => {
            i(o.data, o.title);
          },
          children: o.title
        },
        `${kt}-${o.data}`
      ),
      n === o.data && /* @__PURE__ */ _(Xe, { className: `${kt}-filter-active-icon`, icon: ["fas", "check"] })
    ] }))), a;
  }
  static mapCell(r, n, i, a, o) {
    try {
      return n.render ? /* @__PURE__ */ _("td", { children: n.render(r, i, a) }, `${o}-${a}-${n.data}`) : /* @__PURE__ */ _("td", { children: r }, `${o}-${a}-${n.data}`);
    } catch {
      return /* @__PURE__ */ _("td", { children: "Failed to render" }, `${o}-${a}-${n.data}`);
    }
  }
  componentDidUpdate(r, n) {
    const {
      filterColumn: i,
      filter: a,
      selectedRow: o,
      pagination: s,
      order: l,
      hiddenColumns: u,
      columns: c,
      selectedRows: f
    } = n, { activePage: d } = s, {
      data: p,
      totalElements: m,
      selectedRows: S
    } = r, {
      data: w,
      columns: C,
      pageSize: y,
      filterExternal: T,
      totalElements: R,
      selectionMode: P,
      selectionProperty: N,
      selectedRows: L,
      simpleCompare: W
    } = this.props, {
      key: Y,
      filterColumn: re,
      columns: z,
      filter: Q,
      pagination: se,
      selectedRow: X,
      filteredData: ee,
      order: J,
      hiddenColumns: ue,
      selectedRows: ce
    } = this.state, { activePage: Z } = se, V = C && C.length > 0 || z && z.length > 0, h = z !== c, v = w && w.length > 0;
    let g;
    W ? g = p !== w || (p || []).length === 0 && v || R !== m : g = !Nr(p, w) || R !== m;
    const A = a !== Q || re !== i, E = Z !== d, I = o !== X, H = g || A || E || se.pageSize !== y, q = l !== J || g, K = ue !== u, ae = f.length !== ce.length || ce.filter((Me) => f.indexOf(Me) === -1).length > 0, ve = Array.isArray(L) && Array.isArray(S) && (S.length !== L.length || ce.filter((Me) => L.indexOf(Me) === -1).length > 0);
    let de = re !== i, he = g || A || I || E || q || K || h || ae, Ee = q || K || h, De = se;
    const Ce = {};
    let Ie = z;
    !V && g && (Ie = kr.columnsFromData(w), Ce.columns = Ie, de = !0, he = !0, Ee = Ie.filter((Me) => Me.title).length > 0), Ee && (Ce.headers = kr.headersFromColumns(Ie, Y, J, this.onOrderChanged, this.setFilterValueAndFilter, ue));
    let Oe = ee || w, Ke = Oe ? Oe.length : 0, $e = Z;
    if (q && J.length > 0) {
      let Me;
      Ie && (Me = Ie.reduce((He, st) => (He[st.data] = st, He), {})), Oe = Oe.sort((He, st) => {
        let ze = 0;
        for (let Je = 0; Je < J.length; ++Je) {
          const { column: Ye, direction: Ve } = J[Je], Qe = Me[Ye].rawValue;
          let qe, fe;
          if (Qe ? (qe = Qe(He[Ye], He), fe = Qe(st[Ye], st)) : (qe = He[Ye], fe = st[Ye]), Ve === "asc" ? qe < fe ? ze = -1 : qe > fe && (ze = 1) : Ve === "desc" && (qe < fe ? ze = 1 : qe > fe && (ze = -1)), ze !== 0)
            return ze;
        }
        return ze;
      });
    }
    if (!T && A && v) {
      const { data: Me, value: He } = Q || {};
      if (He) {
        const st = (Ve) => Ve ? Ve.toString().toLowerCase().indexOf(He.toLowerCase()) >= 0 : !1, ze = {}, Je = Ie.map((Ve) => ({ data: Ve.data, onFilter: Ve.onFilter ? (Qe) => Ve.onFilter(Qe, He) : st })).reduce((Ve, Qe) => (Ve[Qe.data] = Qe.onFilter, Ve), ze);
        let Ye;
        if (Me === "$all")
          Ye = (Ve) => !!Object.entries(Ve).find(([fe, F]) => {
            const $ = Je[fe];
            return $ ? $(F) : !1;
          });
        else if (Me) {
          const Ve = Je[Me];
          Ye = (Qe) => {
            const qe = Qe[Me];
            return Ve(qe);
          };
        } else
          Ye = () => !0;
        Oe = w.filter(Ye), Ce.filteredData = Oe;
      } else
        Oe = w, Ce.filteredData = void 0;
      Ke = Oe.length, $e = 0;
    }
    if (H && (De = {
      activePage: $e,
      totalElements: Ke,
      pageSize: y
    }, Ce.pagination = De), he) {
      const Me = this.mappedColumnsFromData(Oe, Ie, De, ue, this.state);
      Ce.mappedData = Me;
    }
    if ((he || ve) && v && L && (P === "index" ? (Ce.selectedRows = L, Ce.selectedRowsData = w.filter((Me, He) => L.indexOf(He) > -1)) : P === "property" ? (Ce.selectedRows = L, Ce.selectedRowsData = w.filter((Me) => L.indexOf(Me[N]) > -1)) : P === "object" && (Ce.selectedRows = L, Ce.selectedRowsData = L)), de) {
      const Me = kr.searchButtonsFromColumns(Ie, re, this.onFilterColumnChanged);
      Ce.searchButtons = Me;
    }
    Object.keys(Ce).length > 0 && this.setState(Ce);
  }
  rowIsSelected(r, n, i) {
    const { selectionMode: a } = this.props, { selectedRow: o, selectedRows: s, selectedRowsData: l } = i;
    if (a === "index")
      return o !== void 0 && o === n || s.indexOf(n) > -1;
    if (a === "property") {
      const { selectionProperty: u } = this.props, c = r[u];
      return o !== void 0 && o === c || s.indexOf(c) > -1;
    }
    return l.indexOf(r) > -1;
  }
  render() {
    const {
      noMargin: r,
      condensed: n,
      striped: i,
      border: a,
      hover: o,
      responsive: s,
      page: l,
      totalElements: u,
      hasMore: c
    } = this.props, {
      key: f,
      mappedData: d,
      searchButtons: p,
      headers: m,
      placeholder: S,
      actions: w,
      pagination: { activePage: C, pageSize: y, totalElements: T },
      modal: R
    } = this.state, { title: P, component: N, props: L } = R, W = [
      "table",
      r ? "no-margin" : null,
      n ? "table-condensed" : null,
      i ? "table-striped" : null,
      a ? "table-bordered" : null,
      o ? "table-hover" : null
    ].filter((re) => re).join(" "), Y = /* @__PURE__ */ ie("div", { className: `${kt}-wrapper`, children: [
      /* @__PURE__ */ _(
        Cw,
        {
          classPreFix: kt,
          title: P,
          component: N,
          props: L,
          handleAccept: this.handleAccept,
          handleClose: this.handleCloseModal
        }
      ),
      /* @__PURE__ */ ie("div", { className: `${kt}-header`, children: [
        /* @__PURE__ */ _(
          A1,
          {
            labelPosition: "none",
            placeholder: S,
            onKeyUp: (re) => {
              re.keyCode === 13 && this.onFilter();
            },
            buttonLeft: /* @__PURE__ */ _(Ci, { split: !0, icon: "fas-search", onClick: this.onFilter, children: p }),
            onChange: this.setFilterValue,
            buttonRight: /* @__PURE__ */ _(Qt, { children: w && w.length > 0 && /* @__PURE__ */ _(Ci, { text: "Actions", children: w }) }),
            addonRight: /* @__PURE__ */ _(Xe, { icon: ["fas", "info-circle"] })
          }
        ),
        /* @__PURE__ */ _(Xe, { icon: ["fas", "info-circle"] })
      ] }),
      /* @__PURE__ */ _("div", { className: `${kt}-table`, children: /* @__PURE__ */ ie("table", { className: W, children: [
        m && /* @__PURE__ */ _("thead", { children: /* @__PURE__ */ _("tr", { children: m }) }),
        /* @__PURE__ */ _("tbody", { children: d })
      ] }, f) }),
      /* @__PURE__ */ _("div", { className: `${kt}-pagination`, children: /* @__PURE__ */ _(
        Lf,
        {
          activePage: l || C,
          totalElements: u || T,
          pageSize: y,
          onChange: this.onPageChange,
          hasMore: c
        }
      ) })
    ] });
    return s ? /* @__PURE__ */ _("div", { className: "table-responsive", children: Y }) : Y;
  }
};
oe(kr, "defaultProps", {
  data: null,
  columns: void 0,
  condensed: !1,
  striped: !1,
  noMargin: !1,
  border: !1,
  responsive: !1,
  hover: !1,
  onRowSelect: void 0,
  onSearchChange: void 0,
  onSearch: void 0,
  defaultFilterColumn: "$all",
  pageSize: 20,
  page: void 0,
  totalElements: void 0,
  hasMore: void 0,
  onPageChange: void 0,
  filterExternal: !1,
  onOrderChange: void 0,
  select: "single",
  selectionMode: "index",
  selectionProperty: "id",
  simpleCompare: !0
});
let oy = kr;
zS.add(GS, YS, XS);
class I1 extends Ue {
  componentDidMount() {
    const { theme: t = "blue", browserTitle: r } = this.props;
    t && (document.body.className += ` skin-${t} sidebar-mini`), r && (document.title = r), Re.isReady ? Re("body").layout() : Re(document).ready(() => {
      Re("body").layout();
    });
  }
  render() {
    const { title: t, titleShort: r } = this.props;
    let { children: n } = this.props;
    const { searchbarFilter: i } = this.props, { homeTo: a } = this.props;
    let o = [];
    {
      n || (n = [/* @__PURE__ */ _("div", { children: "No content" })]), n.length || (n = [n]), o = n;
      let L = o.filter(
        (W) => Object.prototype.toString.call(W) !== "[object Array]"
      );
      o.filter((W) => Object.prototype.toString.call(W) === "[object Array]").forEach((W) => {
        L = L.concat(W);
      });
    }
    let s = [];
    t.length ? s = t : s = [t];
    const [l, u = ""] = s;
    let c = [];
    r.length || (c = [r]);
    const [f, d = ""] = c;
    let p;
    if (o && o.length) {
      const L = o.filter((W) => W.type === mf);
      L.length > 0 && ([p] = L);
    }
    o.findIndex((L) => L.type === a_) > 0 && (p = pe.cloneElement(p, {
      additionalMenus: [
        pe.createElement(My, {
          key: "control-sidebar-entry"
        })
      ]
    }));
    const m = o.filter((L) => L !== p).reduce((L, W) => (Array.isArray(W) ? L = L.concat(W) : L.push(W), L), []), S = [], w = [];
    m.filter(
      (L) => L.props && L.props.path || L.type === Si
    ).forEach((L) => {
      let W = L;
      L.type !== en && L.type !== Si && (L.type === xw ? W = /* @__PURE__ */ _(
        en,
        {
          path: L.props.path,
          exact: L.props.exact,
          component: Sw(() => import(L.props.component))
        },
        L.props.path
      ) : W = /* @__PURE__ */ _(
        en,
        {
          path: L.props.path,
          exact: L.props.exact,
          render: (Y) => pe.cloneElement(L, {
            key: L.props.key ? L.props.key : L.props.path,
            ...Y
          })
        },
        L.props.path
      )), L.props.modal ? w.push(W) : S.push(W);
    });
    const C = m.find((L) => L.type === xi), y = m.find((L) => L.type === Oy), {
      sidebar: T,
      // controlSidebar,
      footer: R
    } = this.props;
    return C && T && console.error("Pass sidebar either as prop or child but not both"), y && R && console.error("Pass footer either as prop or child but not both"), /* @__PURE__ */ _(py, { children: /* @__PURE__ */ ie("div", { className: "wrapper", children: [
      /* @__PURE__ */ ie("header", { className: "main-header", children: [
        /* @__PURE__ */ ie(Pr, { className: "logo", to: a, children: [
          /* @__PURE__ */ ie("span", { className: "logo-mini", children: [
            /* @__PURE__ */ _("b", { children: f }),
            d
          ] }),
          /* @__PURE__ */ ie("span", { className: "logo-lg", children: [
            /* @__PURE__ */ _("b", { children: l }),
            u
          ] })
        ] }),
        /* @__PURE__ */ ie("nav", { className: "navbar navbar-static-top", children: [
          /* @__PURE__ */ ie(
            "div",
            {
              className: "sidebar-toggle",
              "data-toggle": "push-menu",
              role: "button",
              children: [
                /* @__PURE__ */ _(Xe, { icon: ["fas", "bars"] }),
                /* @__PURE__ */ _("span", { className: "sr-only", children: "Toggle navigation" })
              ]
            }
          ),
          /* @__PURE__ */ _("div", { className: "navbar-custom-menu", children: p })
        ] })
      ] }),
      C || /* @__PURE__ */ _(xi, { searchbarFilter: i, children: T }),
      /* @__PURE__ */ _(Fa, { children: w }),
      /* @__PURE__ */ _("div", { className: "content-wrapper", children: /* @__PURE__ */ _(Fa, { children: S }) }),
      y || R
    ] }) });
  }
}
oe(I1, "defaultProps", {
  children: null,
  title: ["Admin", "LTE"],
  titleShort: ["A", "LT"],
  browserTitle: null,
  theme: "blue",
  //  controlSidebar: null,
  footer: null,
  sidebar: void 0,
  homeTo: "/",
  searchbarFilter: !1
});
export {
  IT as Alert,
  Sw as AsyncComponent,
  HO as Badge,
  xf as Box,
  VO as BoxPane,
  Ci as Button,
  qy as ButtonGroup,
  lk as ButtonToolbar,
  ik as Calendar,
  NT as Callout,
  TT as Chatbox,
  uk as Col,
  tk as Content,
  a_ as ControlSidebar,
  yT as DataTable,
  ST as Description,
  b_ as DescriptionBlock,
  xT as DescriptionItem,
  Wy as Divider,
  Oy as Footer,
  o_ as Infobox,
  AT as Infobox2,
  qO as Inputs,
  BO as Label,
  Sf as LoadingSpinner,
  WO as LoginCore,
  CT as Margin,
  PT as Memberbox,
  ET as NavList,
  RT as NavListItem,
  rk as Navbar,
  Lf as Pagination,
  OT as ProductList,
  kT as ProductListItem,
  MT as ProgressBar,
  w_ as ProgressGroup,
  ck as Row,
  Q1 as Sidebar,
  DT as SimpleTable,
  oy as SmartTable,
  Gb as Sparkbar,
  _T as SparklineBox,
  bT as TabContent,
  wT as Tabs,
  I1 as default
};
