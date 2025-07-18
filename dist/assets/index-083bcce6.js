function Tp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function qu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Zu = { exports: {} },
  sl = {},
  ec = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mr = Symbol.for("react.element"),
  _p = Symbol.for("react.portal"),
  Ip = Symbol.for("react.fragment"),
  Lp = Symbol.for("react.strict_mode"),
  Op = Symbol.for("react.profiler"),
  Mp = Symbol.for("react.provider"),
  Fp = Symbol.for("react.context"),
  Dp = Symbol.for("react.forward_ref"),
  Ap = Symbol.for("react.suspense"),
  $p = Symbol.for("react.memo"),
  Up = Symbol.for("react.lazy"),
  Na = Symbol.iterator;
function Bp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Na && e[Na]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nc = Object.assign,
  rc = {};
function Un(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc));
}
Un.prototype.isReactComponent = {};
Un.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function oc() {}
oc.prototype = Un.prototype;
function fi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc));
}
var pi = (fi.prototype = new oc());
pi.constructor = fi;
nc(pi, Un.prototype);
pi.isPureReactComponent = !0;
var Sa = Array.isArray,
  lc = Object.prototype.hasOwnProperty,
  mi = { current: null },
  sc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r,
    o = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      lc.call(t, r) && !sc.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Mr,
    type: e,
    key: l,
    ref: s,
    props: o,
    _owner: mi.current,
  };
}
function Vp(e, t) {
  return {
    $$typeof: Mr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mr;
}
function Wp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ja = /\/+/g;
function Rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Wp("" + e.key)
    : t.toString(36);
}
function go(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Mr:
          case _p:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Rl(s, 0) : r),
      Sa(o)
        ? ((n = ""),
          e != null && (n = e.replace(ja, "$&/") + "/"),
          go(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (hi(o) &&
            (o = Vp(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ja, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Sa(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var u = r + Rl(l, a);
      s += go(l, t, n, u, o);
    }
  else if (((u = Bp(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(l = e.next()).done; )
      ((l = l.value), (u = r + Rl(l, a++)), (s += go(l, t, n, u, o)));
  else if (l === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function Yr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    go(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Hp(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null },
  yo = { transition: null },
  Kp = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: yo,
    ReactCurrentOwner: mi,
  };
function ac() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = {
  map: Yr,
  forEach: function (e, t, n) {
    Yr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Yr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Yr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
A.Component = Un;
A.Fragment = Ip;
A.Profiler = Op;
A.PureComponent = fi;
A.StrictMode = Lp;
A.Suspense = Ap;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kp;
A.act = ac;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = nc({}, e.props),
    o = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = mi.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      lc.call(t, u) &&
        !sc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Mr, type: e.type, key: o, ref: l, props: r, _owner: s };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: Fp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Mp, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = ic;
A.createFactory = function (e) {
  var t = ic.bind(null, e);
  return ((t.type = e), t);
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: Dp, render: e };
};
A.isValidElement = hi;
A.lazy = function (e) {
  return { $$typeof: Up, _payload: { _status: -1, _result: e }, _init: Hp };
};
A.memo = function (e, t) {
  return { $$typeof: $p, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = yo.transition;
  yo.transition = {};
  try {
    e();
  } finally {
    yo.transition = t;
  }
};
A.unstable_act = ac;
A.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
A.useContext = function (e) {
  return Se.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
A.useId = function () {
  return Se.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return Se.current.useRef(e);
};
A.useState = function (e) {
  return Se.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return Se.current.useTransition();
};
A.version = "18.3.1";
ec.exports = A;
var m = ec.exports;
const Et = qu(m),
  Gp = Tp({ __proto__: null, default: Et }, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qp = m,
  Yp = Symbol.for("react.element"),
  Xp = Symbol.for("react.fragment"),
  Jp = Object.prototype.hasOwnProperty,
  qp = Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zp = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r,
    o = {},
    l = null,
    s = null;
  (n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) Jp.call(t, r) && !Zp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Yp,
    type: e,
    key: l,
    ref: s,
    props: o,
    _owner: qp.current,
  };
}
sl.Fragment = Xp;
sl.jsx = uc;
sl.jsxs = uc;
Zu.exports = sl;
var i = Zu.exports;
const em = "modulepreload",
  tm = function (e) {
    return "/" + e;
  },
  Ea = {},
  nm = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(
      n.map((l) => {
        if (((l = tm(l)), l in Ea)) return;
        Ea[l] = !0;
        const s = l.endsWith(".css"),
          a = s ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let f = o.length - 1; f >= 0; f--) {
            const h = o[f];
            if (h.href === l && (!s || h.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${l}"]${a}`)) return;
        const c = document.createElement("link");
        if (
          ((c.rel = s ? "stylesheet" : em),
          s || ((c.as = "script"), (c.crossOrigin = "")),
          (c.href = l),
          document.head.appendChild(c),
          s)
        )
          return new Promise((f, h) => {
            (c.addEventListener("load", f),
              c.addEventListener("error", () =>
                h(new Error(`Unable to preload CSS for ${l}`)),
              ));
          });
      }),
    )
      .then(() => t())
      .catch((l) => {
        const s = new Event("vite:preloadError", { cancelable: !0 });
        if (((s.payload = l), window.dispatchEvent(s), !s.defaultPrevented))
          throw l;
      });
  };
var xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.parse = um;
xi.serialize = cm;
const rm = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
  om = /^[\u0021-\u003A\u003C-\u007E]*$/,
  lm =
    /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  sm = /^[\u0020-\u003A\u003D-\u007E]*$/,
  im = Object.prototype.toString,
  am = (() => {
    const e = function () {};
    return ((e.prototype = Object.create(null)), e);
  })();
function um(e, t) {
  const n = new am(),
    r = e.length;
  if (r < 2) return n;
  const o = (t == null ? void 0 : t.decode) || dm;
  let l = 0;
  do {
    const s = e.indexOf("=", l);
    if (s === -1) break;
    const a = e.indexOf(";", l),
      u = a === -1 ? r : a;
    if (s > u) {
      l = e.lastIndexOf(";", s - 1) + 1;
      continue;
    }
    const c = Ca(e, l, s),
      f = za(e, s, c),
      h = e.slice(c, f);
    if (n[h] === void 0) {
      let x = Ca(e, s + 1, u),
        w = za(e, u, x);
      const b = o(e.slice(x, w));
      n[h] = b;
    }
    l = u + 1;
  } while (l < r);
  return n;
}
function Ca(e, t, n) {
  do {
    const r = e.charCodeAt(t);
    if (r !== 32 && r !== 9) return t;
  } while (++t < n);
  return n;
}
function za(e, t, n) {
  for (; t > n; ) {
    const r = e.charCodeAt(--t);
    if (r !== 32 && r !== 9) return t + 1;
  }
  return n;
}
function cm(e, t, n) {
  const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
  if (!rm.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
  const o = r(t);
  if (!om.test(o)) throw new TypeError(`argument val is invalid: ${t}`);
  let l = e + "=" + o;
  if (!n) return l;
  if (n.maxAge !== void 0) {
    if (!Number.isInteger(n.maxAge))
      throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
    l += "; Max-Age=" + n.maxAge;
  }
  if (n.domain) {
    if (!lm.test(n.domain))
      throw new TypeError(`option domain is invalid: ${n.domain}`);
    l += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!sm.test(n.path))
      throw new TypeError(`option path is invalid: ${n.path}`);
    l += "; Path=" + n.path;
  }
  if (n.expires) {
    if (!fm(n.expires) || !Number.isFinite(n.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${n.expires}`);
    l += "; Expires=" + n.expires.toUTCString();
  }
  if (
    (n.httpOnly && (l += "; HttpOnly"),
    n.secure && (l += "; Secure"),
    n.partitioned && (l += "; Partitioned"),
    n.priority)
  )
    switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
      case "low":
        l += "; Priority=Low";
        break;
      case "medium":
        l += "; Priority=Medium";
        break;
      case "high":
        l += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${n.priority}`);
    }
  if (n.sameSite)
    switch (
      typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite
    ) {
      case !0:
      case "strict":
        l += "; SameSite=Strict";
        break;
      case "lax":
        l += "; SameSite=Lax";
        break;
      case "none":
        l += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
    }
  return l;
}
function dm(e) {
  if (e.indexOf("%") === -1) return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function fm(e) {
  return im.call(e) === "[object Date]";
}
var Pa = "popstate";
function pm(e = {}) {
  function t(r, o) {
    let { pathname: l, search: s, hash: a } = r.location;
    return us(
      "",
      { pathname: l, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : gr(o);
  }
  return hm(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function lt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function mm() {
  return Math.random().toString(36).substring(2, 10);
}
function Ra(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function us(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Bn(t) : t),
    state: n,
    key: (t && t.key) || r || mm(),
  };
}
function gr({ pathname: e = "/", search: t = "", hash: n = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function Bn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function hm(e, t, n, r = {}) {
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    s = o.history,
    a = "POP",
    u = null,
    c = f();
  c == null && ((c = 0), s.replaceState({ ...s.state, idx: c }, ""));
  function f() {
    return (s.state || { idx: null }).idx;
  }
  function h() {
    a = "POP";
    let y = f(),
      p = y == null ? null : y - c;
    ((c = y), u && u({ action: a, location: g.location, delta: p }));
  }
  function x(y, p) {
    a = "PUSH";
    let d = us(g.location, y, p);
    (n && n(d, y), (c = f() + 1));
    let v = Ra(d, c),
      k = g.createHref(d);
    try {
      s.pushState(v, "", k);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError") throw N;
      o.location.assign(k);
    }
    l && u && u({ action: a, location: g.location, delta: 1 });
  }
  function w(y, p) {
    a = "REPLACE";
    let d = us(g.location, y, p);
    (n && n(d, y), (c = f()));
    let v = Ra(d, c),
      k = g.createHref(d);
    (s.replaceState(v, "", k),
      l && u && u({ action: a, location: g.location, delta: 0 }));
  }
  function b(y) {
    return xm(y);
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(y) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Pa, h),
        (u = y),
        () => {
          (o.removeEventListener(Pa, h), (u = null));
        }
      );
    },
    createHref(y) {
      return t(o, y);
    },
    createURL: b,
    encodeLocation(y) {
      let p = b(y);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: x,
    replace: w,
    go(y) {
      return s.go(y);
    },
  };
  return g;
}
function xm(e, t = !1) {
  let n = "http://localhost";
  (typeof window < "u" &&
    (n =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Z(n, "No window.location.(origin|href) available to create URL"));
  let r = typeof e == "string" ? e : gr(e);
  return (
    (r = r.replace(/ $/, "%20")),
    !t && r.startsWith("//") && (r = n + r),
    new URL(r, n)
  );
}
function cc(e, t, n = "/") {
  return vm(e, t, n, !1);
}
function vm(e, t, n, r) {
  let o = typeof t == "string" ? Bn(t) : t,
    l = ht(o.pathname || "/", n);
  if (l == null) return null;
  let s = dc(e);
  gm(s);
  let a = null;
  for (let u = 0; a == null && u < s.length; ++u) {
    let c = Pm(l);
    a = Cm(s[u], c, r);
  }
  return a;
}
function dc(e, t = [], n = [], r = "") {
  let o = (l, s, a) => {
    let u = {
      relativePath: a === void 0 ? l.path || "" : a,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: s,
      route: l,
    };
    u.relativePath.startsWith("/") &&
      (Z(
        u.relativePath.startsWith(r),
        `Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = pt([r, u.relativePath]),
      f = n.concat(u);
    (l.children &&
      l.children.length > 0 &&
      (Z(
        l.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${c}".`,
      ),
      dc(l.children, t, f, c)),
      !(l.path == null && !l.index) &&
        t.push({ path: c, score: jm(c, l.index), routesMeta: f }));
  };
  return (
    e.forEach((l, s) => {
      var a;
      if (l.path === "" || !((a = l.path) != null && a.includes("?"))) o(l, s);
      else for (let u of fc(l.path)) o(l, s, u);
    }),
    t
  );
}
function fc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let s = fc(r.join("/")),
    a = [];
  return (
    a.push(...s.map((u) => (u === "" ? l : [l, u].join("/")))),
    o && a.push(...s),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function gm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Em(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
var ym = /^:[\w-]+$/,
  wm = 3,
  bm = 2,
  km = 1,
  Nm = 10,
  Sm = -2,
  Ta = (e) => e === "*";
function jm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ta) && (r += Sm),
    t && (r += bm),
    n
      .filter((o) => !Ta(o))
      .reduce((o, l) => o + (ym.test(l) ? wm : l === "" ? km : Nm), r)
  );
}
function Em(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Cm(e, t, n = !1) {
  let { routesMeta: r } = e,
    o = {},
    l = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      c = a === r.length - 1,
      f = l === "/" ? t : t.slice(l.length) || "/",
      h = Lo(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        f,
      ),
      x = u.route;
    if (
      (!h &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (h = Lo(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          f,
        )),
      !h)
    )
      return null;
    (Object.assign(o, h.params),
      s.push({
        params: o,
        pathname: pt([l, h.pathname]),
        pathnameBase: Im(pt([l, h.pathnameBase])),
        route: x,
      }),
      h.pathnameBase !== "/" && (l = pt([l, h.pathnameBase])));
  }
  return s;
}
function Lo(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = zm(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    s = l.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((c, { paramName: f, isOptional: h }, x) => {
      if (f === "*") {
        let b = a[x] || "";
        s = l.slice(0, l.length - b.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[x];
      return (
        h && !w ? (c[f] = void 0) : (c[f] = (w || "").replace(/%2F/g, "/")),
        c
      );
    }, {}),
    pathname: l,
    pathnameBase: s,
    pattern: e,
  };
}
function zm(e, t = !1, n = !0) {
  lt(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
  );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Pm(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      lt(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function ht(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Rm(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Bn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Tm(n, t)) : t,
    search: Lm(r),
    hash: Om(o),
  };
}
function Tm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Tl(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function _m(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function pc(e) {
  let t = _m(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function mc(e, t, n, r = !1) {
  let o;
  typeof e == "string"
    ? (o = Bn(e))
    : ((o = { ...e }),
      Z(
        !o.pathname || !o.pathname.includes("?"),
        Tl("?", "pathname", "search", o),
      ),
      Z(
        !o.pathname || !o.pathname.includes("#"),
        Tl("#", "pathname", "hash", o),
      ),
      Z(!o.search || !o.search.includes("#"), Tl("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "",
    s = l ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let h = t.length - 1;
    if (!r && s.startsWith("..")) {
      let x = s.split("/");
      for (; x[0] === ".."; ) (x.shift(), (h -= 1));
      o.pathname = x.join("/");
    }
    a = h >= 0 ? t[h] : "/";
  }
  let u = Rm(o, a),
    c = s && s !== "/" && s.endsWith("/"),
    f = (l || s === ".") && n.endsWith("/");
  return (!u.pathname.endsWith("/") && (c || f) && (u.pathname += "/"), u);
}
var pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Im = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Lm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Om = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Mm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var hc = ["POST", "PUT", "PATCH", "DELETE"];
new Set(hc);
var Fm = ["GET", ...hc];
new Set(Fm);
var Vn = m.createContext(null);
Vn.displayName = "DataRouter";
var il = m.createContext(null);
il.displayName = "DataRouterState";
var xc = m.createContext({ isTransitioning: !1 });
xc.displayName = "ViewTransition";
var Dm = m.createContext(new Map());
Dm.displayName = "Fetchers";
var Am = m.createContext(null);
Am.displayName = "Await";
var it = m.createContext(null);
it.displayName = "Navigation";
var Fr = m.createContext(null);
Fr.displayName = "Location";
var bt = m.createContext({ outlet: null, matches: [], isDataRoute: !1 });
bt.displayName = "Route";
var vi = m.createContext(null);
vi.displayName = "RouteError";
function $m(e, { relative: t } = {}) {
  Z(Dr(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: n, navigator: r } = m.useContext(it),
    { hash: o, pathname: l, search: s } = Ar(e, { relative: t }),
    a = l;
  return (
    n !== "/" && (a = l === "/" ? n : pt([n, l])),
    r.createHref({ pathname: a, search: s, hash: o })
  );
}
function Dr() {
  return m.useContext(Fr) != null;
}
function un() {
  return (
    Z(
      Dr(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    m.useContext(Fr).location
  );
}
var vc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function gc(e) {
  m.useContext(it).static || m.useLayoutEffect(e);
}
function gi() {
  let { isDataRoute: e } = m.useContext(bt);
  return e ? Zm() : Um();
}
function Um() {
  Z(
    Dr(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let e = m.useContext(Vn),
    { basename: t, navigator: n } = m.useContext(it),
    { matches: r } = m.useContext(bt),
    { pathname: o } = un(),
    l = JSON.stringify(pc(r)),
    s = m.useRef(!1);
  return (
    gc(() => {
      s.current = !0;
    }),
    m.useCallback(
      (u, c = {}) => {
        if ((lt(s.current, vc), !s.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let f = mc(u, JSON.parse(l), o, c.relative === "path");
        (e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : pt([t, f.pathname])),
          (c.replace ? n.replace : n.push)(f, c.state, c));
      },
      [t, n, l, o, e],
    )
  );
}
m.createContext(null);
function Ar(e, { relative: t } = {}) {
  let { matches: n } = m.useContext(bt),
    { pathname: r } = un(),
    o = JSON.stringify(pc(n));
  return m.useMemo(() => mc(e, JSON.parse(o), r, t === "path"), [e, o, r, t]);
}
function Bm(e, t) {
  return yc(e, t);
}
function yc(e, t, n, r) {
  var p;
  Z(
    Dr(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: o } = m.useContext(it),
    { matches: l } = m.useContext(bt),
    s = l[l.length - 1],
    a = s ? s.params : {},
    u = s ? s.pathname : "/",
    c = s ? s.pathnameBase : "/",
    f = s && s.route;
  {
    let d = (f && f.path) || "";
    wc(
      u,
      !f || d.endsWith("*") || d.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d === "/" ? "*" : `${d}/*`}">.`,
    );
  }
  let h = un(),
    x;
  if (t) {
    let d = typeof t == "string" ? Bn(t) : t;
    (Z(
      c === "/" || ((p = d.pathname) == null ? void 0 : p.startsWith(c)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${d.pathname}" was given in the \`location\` prop.`,
    ),
      (x = d));
  } else x = h;
  let w = x.pathname || "/",
    b = w;
  if (c !== "/") {
    let d = c.replace(/^\//, "").split("/");
    b = "/" + w.replace(/^\//, "").split("/").slice(d.length).join("/");
  }
  let g = cc(e, { pathname: b });
  (lt(
    f || g != null,
    `No routes matched location "${x.pathname}${x.search}${x.hash}" `,
  ),
    lt(
      g == null ||
        g[g.length - 1].route.element !== void 0 ||
        g[g.length - 1].route.Component !== void 0 ||
        g[g.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let y = Gm(
    g &&
      g.map((d) =>
        Object.assign({}, d, {
          params: Object.assign({}, a, d.params),
          pathname: pt([
            c,
            o.encodeLocation
              ? o.encodeLocation(d.pathname).pathname
              : d.pathname,
          ]),
          pathnameBase:
            d.pathnameBase === "/"
              ? c
              : pt([
                  c,
                  o.encodeLocation
                    ? o.encodeLocation(d.pathnameBase).pathname
                    : d.pathnameBase,
                ]),
        }),
      ),
    l,
    n,
    r,
  );
  return t && y
    ? m.createElement(
        Fr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...x,
            },
            navigationType: "POP",
          },
        },
        y,
      )
    : y;
}
function Vm() {
  let e = qm(),
    t = Mm(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: r },
    l = { padding: "2px 4px", backgroundColor: r },
    s = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (s = m.createElement(
      m.Fragment,
      null,
      m.createElement("p", null, "💿 Hey developer 👋"),
      m.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        m.createElement("code", { style: l }, "ErrorBoundary"),
        " or",
        " ",
        m.createElement("code", { style: l }, "errorElement"),
        " prop on your route.",
      ),
    )),
    m.createElement(
      m.Fragment,
      null,
      m.createElement("h2", null, "Unexpected Application Error!"),
      m.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? m.createElement("pre", { style: o }, n) : null,
      s,
    )
  );
}
var Wm = m.createElement(Vm, null),
  Hm = class extends m.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t,
      );
    }
    render() {
      return this.state.error !== void 0
        ? m.createElement(
            bt.Provider,
            { value: this.props.routeContext },
            m.createElement(vi.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Km({ routeContext: e, match: t, children: n }) {
  let r = m.useContext(Vn);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    m.createElement(bt.Provider, { value: e }, n)
  );
}
function Gm(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let o = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let u = o.findIndex(
      (c) => c.route.id && (l == null ? void 0 : l[c.route.id]) !== void 0,
    );
    (Z(
      u >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`,
    ),
      (o = o.slice(0, Math.min(o.length, u + 1))));
  }
  let s = !1,
    a = -1;
  if (n)
    for (let u = 0; u < o.length; u++) {
      let c = o[u];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (a = u),
        c.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          x =
            c.route.loader &&
            !f.hasOwnProperty(c.route.id) &&
            (!h || h[c.route.id] === void 0);
        if (c.route.lazy || x) {
          ((s = !0), a >= 0 ? (o = o.slice(0, a + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((u, c, f) => {
    let h,
      x = !1,
      w = null,
      b = null;
    n &&
      ((h = l && c.route.id ? l[c.route.id] : void 0),
      (w = c.route.errorElement || Wm),
      s &&
        (a < 0 && f === 0
          ? (wc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (x = !0),
            (b = null))
          : a === f &&
            ((x = !0), (b = c.route.hydrateFallbackElement || null))));
    let g = t.concat(o.slice(0, f + 1)),
      y = () => {
        let p;
        return (
          h
            ? (p = w)
            : x
              ? (p = b)
              : c.route.Component
                ? (p = m.createElement(c.route.Component, null))
                : c.route.element
                  ? (p = c.route.element)
                  : (p = u),
          m.createElement(Km, {
            match: c,
            routeContext: { outlet: u, matches: g, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
      ? m.createElement(Hm, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: h,
          children: y(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : y();
  }, null);
}
function yi(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Qm(e) {
  let t = m.useContext(Vn);
  return (Z(t, yi(e)), t);
}
function Ym(e) {
  let t = m.useContext(il);
  return (Z(t, yi(e)), t);
}
function Xm(e) {
  let t = m.useContext(bt);
  return (Z(t, yi(e)), t);
}
function wi(e) {
  let t = Xm(e),
    n = t.matches[t.matches.length - 1];
  return (
    Z(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function Jm() {
  return wi("useRouteId");
}
function qm() {
  var r;
  let e = m.useContext(vi),
    t = Ym("useRouteError"),
    n = wi("useRouteError");
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function Zm() {
  let { router: e } = Qm("useNavigate"),
    t = wi("useNavigate"),
    n = m.useRef(!1);
  return (
    gc(() => {
      n.current = !0;
    }),
    m.useCallback(
      async (o, l = {}) => {
        (lt(n.current, vc),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : await e.navigate(o, { fromRouteId: t, ...l })));
      },
      [e, t],
    )
  );
}
var _a = {};
function wc(e, t, n) {
  !t && !_a[e] && ((_a[e] = !0), lt(!1, n));
}
m.memo(eh);
function eh({ routes: e, future: t, state: n }) {
  return yc(e, void 0, n, t);
}
function mn(e) {
  Z(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function th({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: o,
  static: l = !1,
}) {
  Z(
    !Dr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let s = e.replace(/^\/*/, "/"),
    a = m.useMemo(
      () => ({ basename: s, navigator: o, static: l, future: {} }),
      [s, o, l],
    );
  typeof n == "string" && (n = Bn(n));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: h = null,
      key: x = "default",
    } = n,
    w = m.useMemo(() => {
      let b = ht(u, s);
      return b == null
        ? null
        : {
            location: { pathname: b, search: c, hash: f, state: h, key: x },
            navigationType: r,
          };
    }, [s, u, c, f, h, x, r]);
  return (
    lt(
      w != null,
      `<Router basename="${s}"> is not able to match the URL "${u}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    w == null
      ? null
      : m.createElement(
          it.Provider,
          { value: a },
          m.createElement(Fr.Provider, { children: t, value: w }),
        )
  );
}
function nh({ children: e, location: t }) {
  return Bm(cs(e), t);
}
function cs(e, t = []) {
  let n = [];
  return (
    m.Children.forEach(e, (r, o) => {
      if (!m.isValidElement(r)) return;
      let l = [...t, o];
      if (r.type === m.Fragment) {
        n.push.apply(n, cs(r.props.children, l));
        return;
      }
      (Z(
        r.type === mn,
        `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Z(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes.",
        ));
      let s = {
        id: r.props.id || l.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = cs(r.props.children, l)), n.push(s));
    }),
    n
  );
}
var wo = "get",
  bo = "application/x-www-form-urlencoded";
function al(e) {
  return e != null && typeof e.tagName == "string";
}
function rh(e) {
  return al(e) && e.tagName.toLowerCase() === "button";
}
function oh(e) {
  return al(e) && e.tagName.toLowerCase() === "form";
}
function lh(e) {
  return al(e) && e.tagName.toLowerCase() === "input";
}
function sh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ih(e, t) {
  return e.button === 0 && (!t || t === "_self") && !sh(e);
}
var Xr = null;
function ah() {
  if (Xr === null)
    try {
      (new FormData(document.createElement("form"), 0), (Xr = !1));
    } catch {
      Xr = !0;
    }
  return Xr;
}
var uh = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function _l(e) {
  return e != null && !uh.has(e)
    ? (lt(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bo}"`,
      ),
      null)
    : e;
}
function ch(e, t) {
  let n, r, o, l, s;
  if (oh(e)) {
    let a = e.getAttribute("action");
    ((r = a ? ht(a, t) : null),
      (n = e.getAttribute("method") || wo),
      (o = _l(e.getAttribute("enctype")) || bo),
      (l = new FormData(e)));
  } else if (rh(e) || (lh(e) && (e.type === "submit" || e.type === "image"))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let u = e.getAttribute("formaction") || a.getAttribute("action");
    if (
      ((r = u ? ht(u, t) : null),
      (n = e.getAttribute("formmethod") || a.getAttribute("method") || wo),
      (o =
        _l(e.getAttribute("formenctype")) ||
        _l(a.getAttribute("enctype")) ||
        bo),
      (l = new FormData(a, e)),
      !ah())
    ) {
      let { name: c, type: f, value: h } = e;
      if (f === "image") {
        let x = c ? `${c}.` : "";
        (l.append(`${x}x`, "0"), l.append(`${x}y`, "0"));
      } else c && l.append(c, h);
    }
  } else {
    if (al(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((n = wo), (r = null), (o = bo), (s = e));
  }
  return (
    l && o === "text/plain" && ((s = l), (l = void 0)),
    { action: r, method: n.toLowerCase(), encType: o, formData: l, body: s }
  );
}
function bi(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function dh(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await nm(() => import(e.module), []);
    return ((t[e.id] = n), n);
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function fh(e) {
  return e != null && typeof e.page == "string";
}
function ph(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet == "string" &&
        typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function mh(e, t, n) {
  let r = await Promise.all(
    e.map(async (o) => {
      let l = t.routes[o.route.id];
      if (l) {
        let s = await dh(l, n);
        return s.links ? s.links() : [];
      }
      return [];
    }),
  );
  return gh(
    r
      .flat(1)
      .filter(ph)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" },
      ),
  );
}
function Ia(e, t, n, r, o, l) {
  let s = (u, c) => (n[c] ? u.route.id !== n[c].route.id : !0),
    a = (u, c) => {
      var f;
      return (
        n[c].pathname !== u.pathname ||
        (((f = n[c].route.path) == null ? void 0 : f.endsWith("*")) &&
          n[c].params["*"] !== u.params["*"])
      );
    };
  return l === "assets"
    ? t.filter((u, c) => s(u, c) || a(u, c))
    : l === "data"
      ? t.filter((u, c) => {
          var h;
          let f = r.routes[u.route.id];
          if (!f || !f.hasLoader) return !1;
          if (s(u, c) || a(u, c)) return !0;
          if (u.route.shouldRevalidate) {
            let x = u.route.shouldRevalidate({
              currentUrl: new URL(
                o.pathname + o.search + o.hash,
                window.origin,
              ),
              currentParams: ((h = n[0]) == null ? void 0 : h.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: u.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof x == "boolean") return x;
          }
          return !0;
        })
      : [];
}
function hh(e, t, { includeHydrateFallback: n } = {}) {
  return xh(
    e
      .map((r) => {
        let o = t.routes[r.route.id];
        if (!o) return [];
        let l = [o.module];
        return (
          o.clientActionModule && (l = l.concat(o.clientActionModule)),
          o.clientLoaderModule && (l = l.concat(o.clientLoaderModule)),
          n &&
            o.hydrateFallbackModule &&
            (l = l.concat(o.hydrateFallbackModule)),
          o.imports && (l = l.concat(o.imports)),
          l
        );
      })
      .flat(1),
  );
}
function xh(e) {
  return [...new Set(e)];
}
function vh(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function gh(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((o, l) => {
    if (t && !fh(l) && l.as === "script" && l.href && r.has(l.href)) return o;
    let a = JSON.stringify(vh(l));
    return (n.has(a) || (n.add(a), o.push({ key: a, link: l })), o);
  }, []);
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var yh = new Set([100, 101, 204, 205]);
function wh(e, t) {
  let n =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : e;
  return (
    n.pathname === "/"
      ? (n.pathname = "_root.data")
      : t && ht(n.pathname, t) === "/"
        ? (n.pathname = `${t.replace(/\/$/, "")}/_root.data`)
        : (n.pathname = `${n.pathname.replace(/\/$/, "")}.data`),
    n
  );
}
function bc() {
  let e = m.useContext(Vn);
  return (
    bi(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    e
  );
}
function bh() {
  let e = m.useContext(il);
  return (
    bi(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    e
  );
}
var ki = m.createContext(void 0);
ki.displayName = "FrameworkContext";
function kc() {
  let e = m.useContext(ki);
  return (
    bi(e, "You must render this element inside a <HydratedRouter> element"),
    e
  );
}
function kh(e, t) {
  let n = m.useContext(ki),
    [r, o] = m.useState(!1),
    [l, s] = m.useState(!1),
    {
      onFocus: a,
      onBlur: u,
      onMouseEnter: c,
      onMouseLeave: f,
      onTouchStart: h,
    } = t,
    x = m.useRef(null);
  (m.useEffect(() => {
    if ((e === "render" && s(!0), e === "viewport")) {
      let g = (p) => {
          p.forEach((d) => {
            s(d.isIntersecting);
          });
        },
        y = new IntersectionObserver(g, { threshold: 0.5 });
      return (
        x.current && y.observe(x.current),
        () => {
          y.disconnect();
        }
      );
    }
  }, [e]),
    m.useEffect(() => {
      if (r) {
        let g = setTimeout(() => {
          s(!0);
        }, 100);
        return () => {
          clearTimeout(g);
        };
      }
    }, [r]));
  let w = () => {
      o(!0);
    },
    b = () => {
      (o(!1), s(!1));
    };
  return n
    ? e !== "intent"
      ? [l, x, {}]
      : [
          l,
          x,
          {
            onFocus: Qn(a, w),
            onBlur: Qn(u, b),
            onMouseEnter: Qn(c, w),
            onMouseLeave: Qn(f, b),
            onTouchStart: Qn(h, w),
          },
        ]
    : [!1, x, {}];
}
function Qn(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function Nh({ page: e, ...t }) {
  let { router: n } = bc(),
    r = m.useMemo(() => cc(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? m.createElement(jh, { page: e, matches: r, ...t }) : null;
}
function Sh(e) {
  let { manifest: t, routeModules: n } = kc(),
    [r, o] = m.useState([]);
  return (
    m.useEffect(() => {
      let l = !1;
      return (
        mh(e, t, n).then((s) => {
          l || o(s);
        }),
        () => {
          l = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function jh({ page: e, matches: t, ...n }) {
  let r = un(),
    { manifest: o, routeModules: l } = kc(),
    { basename: s } = bc(),
    { loaderData: a, matches: u } = bh(),
    c = m.useMemo(() => Ia(e, t, u, o, r, "data"), [e, t, u, o, r]),
    f = m.useMemo(() => Ia(e, t, u, o, r, "assets"), [e, t, u, o, r]),
    h = m.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let b = new Set(),
        g = !1;
      if (
        (t.forEach((p) => {
          var v;
          let d = o.routes[p.route.id];
          !d ||
            !d.hasLoader ||
            ((!c.some((k) => k.route.id === p.route.id) &&
              p.route.id in a &&
              (v = l[p.route.id]) != null &&
              v.shouldRevalidate) ||
            d.hasClientLoader
              ? (g = !0)
              : b.add(p.route.id));
        }),
        b.size === 0)
      )
        return [];
      let y = wh(e, s);
      return (
        g &&
          b.size > 0 &&
          y.searchParams.set(
            "_routes",
            t
              .filter((p) => b.has(p.route.id))
              .map((p) => p.route.id)
              .join(","),
          ),
        [y.pathname + y.search]
      );
    }, [s, a, r, o, c, t, e, l]),
    x = m.useMemo(() => hh(f, o), [f, o]),
    w = Sh(f);
  return m.createElement(
    m.Fragment,
    null,
    h.map((b) =>
      m.createElement("link", {
        key: b,
        rel: "prefetch",
        as: "fetch",
        href: b,
        ...n,
      }),
    ),
    x.map((b) =>
      m.createElement("link", { key: b, rel: "modulepreload", href: b, ...n }),
    ),
    w.map(({ key: b, link: g }) => m.createElement("link", { key: b, ...g })),
  );
}
function Eh(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var Nc =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Nc && (window.__reactRouterVersion = "7.6.3");
} catch {}
function Ch({ basename: e, children: t, window: n }) {
  let r = m.useRef();
  r.current == null && (r.current = pm({ window: n, v5Compat: !0 }));
  let o = r.current,
    [l, s] = m.useState({ action: o.action, location: o.location }),
    a = m.useCallback(
      (u) => {
        m.startTransition(() => s(u));
      },
      [s],
    );
  return (
    m.useLayoutEffect(() => o.listen(a), [o, a]),
    m.createElement(th, {
      basename: e,
      children: t,
      location: l.location,
      navigationType: l.action,
      navigator: o,
    })
  );
}
var Sc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  L = m.forwardRef(function (
    {
      onClick: t,
      discover: n = "render",
      prefetch: r = "none",
      relative: o,
      reloadDocument: l,
      replace: s,
      state: a,
      target: u,
      to: c,
      preventScrollReset: f,
      viewTransition: h,
      ...x
    },
    w,
  ) {
    let { basename: b } = m.useContext(it),
      g = typeof c == "string" && Sc.test(c),
      y,
      p = !1;
    if (typeof c == "string" && g && ((y = c), Nc))
      try {
        let _ = new URL(window.location.href),
          I = c.startsWith("//") ? new URL(_.protocol + c) : new URL(c),
          Q = ht(I.pathname, b);
        I.origin === _.origin && Q != null
          ? (c = Q + I.search + I.hash)
          : (p = !0);
      } catch {
        lt(
          !1,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let d = $m(c, { relative: o }),
      [v, k, N] = kh(r, x),
      E = Th(c, {
        replace: s,
        state: a,
        target: u,
        preventScrollReset: f,
        relative: o,
        viewTransition: h,
      });
    function C(_) {
      (t && t(_), _.defaultPrevented || E(_));
    }
    let S = m.createElement("a", {
      ...x,
      ...N,
      href: y || d,
      onClick: p || l ? t : C,
      ref: Eh(w, k),
      target: u,
      "data-discover": !g && n === "render" ? "true" : void 0,
    });
    return v && !g
      ? m.createElement(m.Fragment, null, S, m.createElement(Nh, { page: d }))
      : S;
  });
L.displayName = "Link";
var zh = m.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: o = !1,
    style: l,
    to: s,
    viewTransition: a,
    children: u,
    ...c
  },
  f,
) {
  let h = Ar(s, { relative: c.relative }),
    x = un(),
    w = m.useContext(il),
    { navigator: b, basename: g } = m.useContext(it),
    y = w != null && Mh(h) && a === !0,
    p = b.encodeLocation ? b.encodeLocation(h).pathname : h.pathname,
    d = x.pathname,
    v =
      w && w.navigation && w.navigation.location
        ? w.navigation.location.pathname
        : null;
  (n ||
    ((d = d.toLowerCase()),
    (v = v ? v.toLowerCase() : null),
    (p = p.toLowerCase())),
    v && g && (v = ht(v, g) || v));
  const k = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
  let N = d === p || (!o && d.startsWith(p) && d.charAt(k) === "/"),
    E =
      v != null &&
      (v === p || (!o && v.startsWith(p) && v.charAt(p.length) === "/")),
    C = { isActive: N, isPending: E, isTransitioning: y },
    S = N ? t : void 0,
    _;
  typeof r == "function"
    ? (_ = r(C))
    : (_ = [
        r,
        N ? "active" : null,
        E ? "pending" : null,
        y ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let I = typeof l == "function" ? l(C) : l;
  return m.createElement(
    L,
    {
      ...c,
      "aria-current": S,
      className: _,
      ref: f,
      style: I,
      to: s,
      viewTransition: a,
    },
    typeof u == "function" ? u(C) : u,
  );
});
zh.displayName = "NavLink";
var Ph = m.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: o,
      state: l,
      method: s = wo,
      action: a,
      onSubmit: u,
      relative: c,
      preventScrollReset: f,
      viewTransition: h,
      ...x
    },
    w,
  ) => {
    let b = Lh(),
      g = Oh(a, { relative: c }),
      y = s.toLowerCase() === "get" ? "get" : "post",
      p = typeof a == "string" && Sc.test(a),
      d = (v) => {
        if ((u && u(v), v.defaultPrevented)) return;
        v.preventDefault();
        let k = v.nativeEvent.submitter,
          N = (k == null ? void 0 : k.getAttribute("formmethod")) || s;
        b(k || v.currentTarget, {
          fetcherKey: t,
          method: N,
          navigate: n,
          replace: o,
          state: l,
          relative: c,
          preventScrollReset: f,
          viewTransition: h,
        });
      };
    return m.createElement("form", {
      ref: w,
      method: y,
      action: g,
      onSubmit: r ? u : d,
      ...x,
      "data-discover": !p && e === "render" ? "true" : void 0,
    });
  },
);
Ph.displayName = "Form";
function Rh(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function jc(e) {
  let t = m.useContext(Vn);
  return (Z(t, Rh(e)), t);
}
function Th(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: o,
    relative: l,
    viewTransition: s,
  } = {},
) {
  let a = gi(),
    u = un(),
    c = Ar(e, { relative: l });
  return m.useCallback(
    (f) => {
      if (ih(f, t)) {
        f.preventDefault();
        let h = n !== void 0 ? n : gr(u) === gr(c);
        a(e, {
          replace: h,
          state: r,
          preventScrollReset: o,
          relative: l,
          viewTransition: s,
        });
      }
    },
    [u, a, c, n, r, t, e, o, l, s],
  );
}
var _h = 0,
  Ih = () => `__${String(++_h)}__`;
function Lh() {
  let { router: e } = jc("useSubmit"),
    { basename: t } = m.useContext(it),
    n = Jm();
  return m.useCallback(
    async (r, o = {}) => {
      let { action: l, method: s, encType: a, formData: u, body: c } = ch(r, t);
      if (o.navigate === !1) {
        let f = o.fetcherKey || Ih();
        await e.fetch(f, n, o.action || l, {
          preventScrollReset: o.preventScrollReset,
          formData: u,
          body: c,
          formMethod: o.method || s,
          formEncType: o.encType || a,
          flushSync: o.flushSync,
        });
      } else
        await e.navigate(o.action || l, {
          preventScrollReset: o.preventScrollReset,
          formData: u,
          body: c,
          formMethod: o.method || s,
          formEncType: o.encType || a,
          replace: o.replace,
          state: o.state,
          fromRouteId: n,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [e, t, n],
  );
}
function Oh(e, { relative: t } = {}) {
  let { basename: n } = m.useContext(it),
    r = m.useContext(bt);
  Z(r, "useFormAction must be used inside a RouteContext");
  let [o] = r.matches.slice(-1),
    l = { ...Ar(e || ".", { relative: t }) },
    s = un();
  if (e == null) {
    l.search = s.search;
    let a = new URLSearchParams(l.search),
      u = a.getAll("index");
    if (u.some((f) => f === "")) {
      (a.delete("index"),
        u.filter((h) => h).forEach((h) => a.append("index", h)));
      let f = a.toString();
      l.search = f ? `?${f}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      o.route.index &&
      (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (l.pathname = l.pathname === "/" ? n : pt([n, l.pathname])),
    gr(l)
  );
}
function Mh(e, t = {}) {
  let n = m.useContext(xc);
  Z(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = jc("useViewTransitionState"),
    o = Ar(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let l = ht(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = ht(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Lo(o.pathname, s) != null || Lo(o.pathname, l) != null;
}
[...yh];
var Ec = { exports: {} },
  Fe = {},
  Cc = { exports: {} },
  zc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, O) {
    var M = j.length;
    j.push(O);
    e: for (; 0 < M; ) {
      var B = (M - 1) >>> 1,
        V = j[B];
      if (0 < o(V, O)) ((j[B] = O), (j[M] = V), (M = B));
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var O = j[0],
      M = j.pop();
    if (M !== O) {
      j[0] = M;
      e: for (var B = 0, V = j.length, H = V >>> 1; B < H; ) {
        var Y = 2 * (B + 1) - 1,
          Nt = j[Y],
          Ze = Y + 1,
          J = j[Ze];
        if (0 > o(Nt, M))
          Ze < V && 0 > o(J, Nt)
            ? ((j[B] = J), (j[Ze] = M), (B = Ze))
            : ((j[B] = Nt), (j[Y] = M), (B = Y));
        else if (Ze < V && 0 > o(J, M)) ((j[B] = J), (j[Ze] = M), (B = Ze));
        else break e;
      }
    }
    return O;
  }
  function o(j, O) {
    var M = j.sortIndex - O.sortIndex;
    return M !== 0 ? M : j.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var u = [],
    c = [],
    f = 1,
    h = null,
    x = 3,
    w = !1,
    b = !1,
    g = !1,
    y = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(j) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) r(c);
      else if (O.startTime <= j)
        (r(c), (O.sortIndex = O.expirationTime), t(u, O));
      else break;
      O = n(c);
    }
  }
  function k(j) {
    if (((g = !1), v(j), !b))
      if (n(u) !== null) ((b = !0), ne(N));
      else {
        var O = n(c);
        O !== null && pe(k, O.startTime - j);
      }
  }
  function N(j, O) {
    ((b = !1), g && ((g = !1), p(S), (S = -1)), (w = !0));
    var M = x;
    try {
      for (
        v(O), h = n(u);
        h !== null && (!(h.expirationTime > O) || (j && !Q()));

      ) {
        var B = h.callback;
        if (typeof B == "function") {
          ((h.callback = null), (x = h.priorityLevel));
          var V = B(h.expirationTime <= O);
          ((O = e.unstable_now()),
            typeof V == "function" ? (h.callback = V) : h === n(u) && r(u),
            v(O));
        } else r(u);
        h = n(u);
      }
      if (h !== null) var H = !0;
      else {
        var Y = n(c);
        (Y !== null && pe(k, Y.startTime - O), (H = !1));
      }
      return H;
    } finally {
      ((h = null), (x = M), (w = !1));
    }
  }
  var E = !1,
    C = null,
    S = -1,
    _ = 5,
    I = -1;
  function Q() {
    return !(e.unstable_now() - I < _);
  }
  function ce() {
    if (C !== null) {
      var j = e.unstable_now();
      I = j;
      var O = !0;
      try {
        O = C(!0, j);
      } finally {
        O ? _e() : ((E = !1), (C = null));
      }
    } else E = !1;
  }
  var _e;
  if (typeof d == "function")
    _e = function () {
      d(ce);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      oe = F.port2;
    ((F.port1.onmessage = ce),
      (_e = function () {
        oe.postMessage(null);
      }));
  } else
    _e = function () {
      y(ce, 0);
    };
  function ne(j) {
    ((C = j), E || ((E = !0), _e()));
  }
  function pe(j, O) {
    S = y(function () {
      j(e.unstable_now());
    }, O);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || w || ((b = !0), ne(N));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (_ = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return x;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (j) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = x;
      }
      var M = x;
      x = O;
      try {
        return j();
      } finally {
        x = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, O) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var M = x;
      x = j;
      try {
        return O();
      } finally {
        x = M;
      }
    }),
    (e.unstable_scheduleCallback = function (j, O, M) {
      var B = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? B + M : B))
          : (M = B),
        j)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = M + V),
        (j = {
          id: f++,
          callback: O,
          priorityLevel: j,
          startTime: M,
          expirationTime: V,
          sortIndex: -1,
        }),
        M > B
          ? ((j.sortIndex = M),
            t(c, j),
            n(u) === null &&
              j === n(c) &&
              (g ? (p(S), (S = -1)) : (g = !0), pe(k, M - B)))
          : ((j.sortIndex = V), t(u, j), b || w || ((b = !0), ne(N))),
        j
      );
    }),
    (e.unstable_shouldYield = Q),
    (e.unstable_wrapCallback = function (j) {
      var O = x;
      return function () {
        var M = x;
        x = O;
        try {
          return j.apply(this, arguments);
        } finally {
          x = M;
        }
      };
    }));
})(zc);
Cc.exports = zc;
var Fh = Cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dh = m,
  Me = Fh;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Pc = new Set(),
  yr = {};
function cn(e, t) {
  (In(e, t), In(e + "Capture", t));
}
function In(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) Pc.add(t[e]);
}
var xt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ds = Object.prototype.hasOwnProperty,
  Ah =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  La = {},
  Oa = {};
function $h(e) {
  return ds.call(Oa, e)
    ? !0
    : ds.call(La, e)
      ? !1
      : Ah.test(e)
        ? (Oa[e] = !0)
        : ((La[e] = !0), !1);
}
function Uh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Bh(e, t, n, r) {
  if (t === null || typeof t > "u" || Uh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function je(e, t, n, r, o, l, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s));
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ni = /[\-:]([a-z])/g;
function Si(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ni, Si);
    xe[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ni, Si);
    xe[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ni, Si);
  xe[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ji(e, t, n, r) {
  var o = xe.hasOwnProperty(t) ? xe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Bh(t, n, o, r) && (n = null),
    r || o === null
      ? $h(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = Dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Jr = Symbol.for("react.element"),
  hn = Symbol.for("react.portal"),
  xn = Symbol.for("react.fragment"),
  Ei = Symbol.for("react.strict_mode"),
  fs = Symbol.for("react.profiler"),
  Rc = Symbol.for("react.provider"),
  Tc = Symbol.for("react.context"),
  Ci = Symbol.for("react.forward_ref"),
  ps = Symbol.for("react.suspense"),
  ms = Symbol.for("react.suspense_list"),
  zi = Symbol.for("react.memo"),
  Ct = Symbol.for("react.lazy"),
  _c = Symbol.for("react.offscreen"),
  Ma = Symbol.iterator;
function Yn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ma && e[Ma]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  Il;
function or(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = (t && t[1]) || "";
    }
  return (
    `
` +
    Il +
    e
  );
}
var Ll = !1;
function Ol(e, t) {
  if (!e || Ll) return "";
  Ll = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          l = r.stack.split(`
`),
          s = o.length - 1,
          a = l.length - 1;
        1 <= s && 0 <= a && o[s] !== l[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== l[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== l[a])) {
                var u =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((Ll = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? or(e) : "";
}
function Vh(e) {
  switch (e.tag) {
    case 5:
      return or(e.type);
    case 16:
      return or("Lazy");
    case 13:
      return or("Suspense");
    case 19:
      return or("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Ol(e.type, !1)), e);
    case 11:
      return ((e = Ol(e.type.render, !1)), e);
    case 1:
      return ((e = Ol(e.type, !0)), e);
    default:
      return "";
  }
}
function hs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case xn:
      return "Fragment";
    case hn:
      return "Portal";
    case fs:
      return "Profiler";
    case Ei:
      return "StrictMode";
    case ps:
      return "Suspense";
    case ms:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Tc:
        return (e.displayName || "Context") + ".Consumer";
      case Rc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ci:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zi:
        return (
          (t = e.displayName || null),
          t !== null ? t : hs(e.type) || "Memo"
        );
      case Ct:
        ((t = e._payload), (e = e._init));
        try {
          return hs(e(t));
        } catch {}
    }
  return null;
}
function Wh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return hs(t);
    case 8:
      return t === Ei ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Bt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ic(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Hh(e) {
  var t = Ic(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          ((r = "" + s), l.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function qr(e) {
  e._valueTracker || (e._valueTracker = Hh(e));
}
function Lc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ic(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Oo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xs(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Fa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Bt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Oc(e, t) {
  ((t = t.checked), t != null && ji(e, "checked", t, !1));
}
function vs(e, t) {
  Oc(e, t);
  var n = Bt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? gs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && gs(e, t.type, Bt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Da(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function gs(e, t, n) {
  (t !== "number" || Oo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lr = Array.isArray;
function Cn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Bt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ys(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Aa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(z(92));
      if (lr(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Bt(n) };
}
function Mc(e, t) {
  var n = Bt(t.value),
    r = Bt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ws(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Zr,
  Dc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Zr = Zr || document.createElement("div"),
          Zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Zr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function wr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ar = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
    strokeWidth: !0,
  },
  Kh = ["Webkit", "ms", "Moz", "O"];
Object.keys(ar).forEach(function (e) {
  Kh.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ar[t] = ar[e]));
  });
});
function Ac(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ar.hasOwnProperty(e) && ar[e])
      ? ("" + t).trim()
      : t + "px";
}
function $c(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Ac(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var Gh = te(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function bs(e, t) {
  if (t) {
    if (Gh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function ks(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var Ns = null;
function Pi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ss = null,
  zn = null,
  Pn = null;
function Ua(e) {
  if ((e = Br(e))) {
    if (typeof Ss != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = pl(t)), Ss(e.stateNode, e.type, t));
  }
}
function Uc(e) {
  zn ? (Pn ? Pn.push(e) : (Pn = [e])) : (zn = e);
}
function Bc() {
  if (zn) {
    var e = zn,
      t = Pn;
    if (((Pn = zn = null), Ua(e), t)) for (e = 0; e < t.length; e++) Ua(t[e]);
  }
}
function Vc(e, t) {
  return e(t);
}
function Wc() {}
var Ml = !1;
function Hc(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return Vc(e, t, n);
  } finally {
    ((Ml = !1), (zn !== null || Pn !== null) && (Wc(), Bc()));
  }
}
function br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var js = !1;
if (xt)
  try {
    var Xn = {};
    (Object.defineProperty(Xn, "passive", {
      get: function () {
        js = !0;
      },
    }),
      window.addEventListener("test", Xn, Xn),
      window.removeEventListener("test", Xn, Xn));
  } catch {
    js = !1;
  }
function Qh(e, t, n, r, o, l, s, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var ur = !1,
  Mo = null,
  Fo = !1,
  Es = null,
  Yh = {
    onError: function (e) {
      ((ur = !0), (Mo = e));
    },
  };
function Xh(e, t, n, r, o, l, s, a, u) {
  ((ur = !1), (Mo = null), Qh.apply(Yh, arguments));
}
function Jh(e, t, n, r, o, l, s, a, u) {
  if ((Xh.apply(this, arguments), ur)) {
    if (ur) {
      var c = Mo;
      ((ur = !1), (Mo = null));
    } else throw Error(z(198));
    Fo || ((Fo = !0), (Es = c));
  }
}
function dn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Kc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ba(e) {
  if (dn(e) !== e) throw Error(z(188));
}
function qh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = dn(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return (Ba(o), e);
        if (l === r) return (Ba(o), t);
        l = l.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) ((n = o), (r = l));
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          ((s = !0), (n = o), (r = l));
          break;
        }
        if (a === r) {
          ((s = !0), (r = o), (n = l));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = l.child; a; ) {
          if (a === n) {
            ((s = !0), (n = l), (r = o));
            break;
          }
          if (a === r) {
            ((s = !0), (r = l), (n = o));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function Gc(e) {
  return ((e = qh(e)), e !== null ? Qc(e) : null);
}
function Qc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Qc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Yc = Me.unstable_scheduleCallback,
  Va = Me.unstable_cancelCallback,
  Zh = Me.unstable_shouldYield,
  ex = Me.unstable_requestPaint,
  le = Me.unstable_now,
  tx = Me.unstable_getCurrentPriorityLevel,
  Ri = Me.unstable_ImmediatePriority,
  Xc = Me.unstable_UserBlockingPriority,
  Do = Me.unstable_NormalPriority,
  nx = Me.unstable_LowPriority,
  Jc = Me.unstable_IdlePriority,
  ul = null,
  rt = null;
function rx(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function")
    try {
      rt.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : sx,
  ox = Math.log,
  lx = Math.LN2;
function sx(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((ox(e) / lx) | 0)) | 0);
}
var eo = 64,
  to = 4194304;
function sr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ao(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = sr(a)) : ((l &= s), l !== 0 && (r = sr(l)));
  } else ((s = n & ~o), s !== 0 ? (r = sr(s)) : l !== 0 && (r = sr(l)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Xe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function ix(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ax(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - Xe(l),
      a = 1 << s,
      u = o[s];
    (u === -1
      ? (!(a & n) || a & r) && (o[s] = ix(a, t))
      : u <= t && (e.expiredLanes |= a),
      (l &= ~a));
  }
}
function Cs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qc() {
  var e = eo;
  return ((eo <<= 1), !(eo & 4194240) && (eo = 64), e);
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function $r(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n));
}
function ux(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Xe(n),
      l = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l));
  }
}
function Ti(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var U = 0;
function Zc(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var ed,
  _i,
  td,
  nd,
  rd,
  zs = !1,
  no = [],
  It = null,
  Lt = null,
  Ot = null,
  kr = new Map(),
  Nr = new Map(),
  Pt = [],
  cx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Wa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      It = null;
      break;
    case "dragenter":
    case "dragleave":
      Lt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ot = null;
      break;
    case "pointerover":
    case "pointerout":
      kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Nr.delete(t.pointerId);
  }
}
function Jn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Br(t)), t !== null && _i(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function dx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((It = Jn(It, e, t, n, r, o)), !0);
    case "dragenter":
      return ((Lt = Jn(Lt, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Ot = Jn(Ot, e, t, n, r, o)), !0);
    case "pointerover":
      var l = o.pointerId;
      return (kr.set(l, Jn(kr.get(l) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (l = o.pointerId),
        Nr.set(l, Jn(Nr.get(l) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function od(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Kc(n)), t !== null)) {
          ((e.blockedOn = t),
            rd(e.priority, function () {
              td(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ko(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ps(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ns = r), n.target.dispatchEvent(r), (Ns = null));
    } else return ((t = Br(n)), t !== null && _i(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ha(e, t, n) {
  ko(e) && n.delete(t);
}
function fx() {
  ((zs = !1),
    It !== null && ko(It) && (It = null),
    Lt !== null && ko(Lt) && (Lt = null),
    Ot !== null && ko(Ot) && (Ot = null),
    kr.forEach(Ha),
    Nr.forEach(Ha));
}
function qn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zs ||
      ((zs = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, fx)));
}
function Sr(e) {
  function t(o) {
    return qn(o, e);
  }
  if (0 < no.length) {
    qn(no[0], e);
    for (var n = 1; n < no.length; n++) {
      var r = no[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    It !== null && qn(It, e),
      Lt !== null && qn(Lt, e),
      Ot !== null && qn(Ot, e),
      kr.forEach(t),
      Nr.forEach(t),
      n = 0;
    n < Pt.length;
    n++
  )
    ((r = Pt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Pt.length && ((n = Pt[0]), n.blockedOn === null); )
    (od(n), n.blockedOn === null && Pt.shift());
}
var Rn = kt.ReactCurrentBatchConfig,
  $o = !0;
function px(e, t, n, r) {
  var o = U,
    l = Rn.transition;
  Rn.transition = null;
  try {
    ((U = 1), Ii(e, t, n, r));
  } finally {
    ((U = o), (Rn.transition = l));
  }
}
function mx(e, t, n, r) {
  var o = U,
    l = Rn.transition;
  Rn.transition = null;
  try {
    ((U = 4), Ii(e, t, n, r));
  } finally {
    ((U = o), (Rn.transition = l));
  }
}
function Ii(e, t, n, r) {
  if ($o) {
    var o = Ps(e, t, n, r);
    if (o === null) (Gl(e, t, r, Uo, n), Wa(e, r));
    else if (dx(o, e, t, n, r)) r.stopPropagation();
    else if ((Wa(e, r), t & 4 && -1 < cx.indexOf(e))) {
      for (; o !== null; ) {
        var l = Br(o);
        if (
          (l !== null && ed(l),
          (l = Ps(e, t, n, r)),
          l === null && Gl(e, t, r, Uo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Uo = null;
function Ps(e, t, n, r) {
  if (((Uo = null), (e = Pi(r)), (e = Xt(e)), e !== null))
    if (((t = dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Kc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Uo = e), null);
}
function ld(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (tx()) {
        case Ri:
          return 1;
        case Xc:
          return 4;
        case Do:
        case nx:
          return 16;
        case Jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tt = null,
  Li = null,
  No = null;
function sd() {
  if (No) return No;
  var e,
    t = Li,
    n = t.length,
    r,
    o = "value" in Tt ? Tt.value : Tt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[l - r]; r++);
  return (No = o.slice(e, 1 < r ? 1 - r : void 0));
}
function So(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ro() {
  return !0;
}
function Ka() {
  return !1;
}
function De(e) {
  function t(n, r, o, l, s) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? ro
        : Ka),
      (this.isPropagationStopped = Ka),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ro));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ro));
      },
      persist: function () {},
      isPersistent: ro,
    }),
    t
  );
}
var Wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Oi = De(Wn),
  Ur = te({}, Wn, { view: 0, detail: 0 }),
  hx = De(Ur),
  Dl,
  Al,
  Zn,
  cl = te({}, Ur, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Mi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Zn &&
            (Zn && e.type === "mousemove"
              ? ((Dl = e.screenX - Zn.screenX), (Al = e.screenY - Zn.screenY))
              : (Al = Dl = 0),
            (Zn = e)),
          Dl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Al;
    },
  }),
  Ga = De(cl),
  xx = te({}, cl, { dataTransfer: 0 }),
  vx = De(xx),
  gx = te({}, Ur, { relatedTarget: 0 }),
  $l = De(gx),
  yx = te({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wx = De(yx),
  bx = te({}, Wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kx = De(bx),
  Nx = te({}, Wn, { data: 0 }),
  Qa = De(Nx),
  Sx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  jx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ex = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Cx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ex[e]) ? !!t[e] : !1;
}
function Mi() {
  return Cx;
}
var zx = te({}, Ur, {
    key: function (e) {
      if (e.key) {
        var t = Sx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = So(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? jx[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Mi,
    charCode: function (e) {
      return e.type === "keypress" ? So(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? So(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Px = De(zx),
  Rx = te({}, cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ya = De(Rx),
  Tx = te({}, Ur, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mi,
  }),
  _x = De(Tx),
  Ix = te({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lx = De(Ix),
  Ox = te({}, cl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Mx = De(Ox),
  Fx = [9, 13, 27, 32],
  Fi = xt && "CompositionEvent" in window,
  cr = null;
xt && "documentMode" in document && (cr = document.documentMode);
var Dx = xt && "TextEvent" in window && !cr,
  id = xt && (!Fi || (cr && 8 < cr && 11 >= cr)),
  Xa = String.fromCharCode(32),
  Ja = !1;
function ad(e, t) {
  switch (e) {
    case "keyup":
      return Fx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ud(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var vn = !1;
function Ax(e, t) {
  switch (e) {
    case "compositionend":
      return ud(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ja = !0), Xa);
    case "textInput":
      return ((e = t.data), e === Xa && Ja ? null : e);
    default:
      return null;
  }
}
function $x(e, t) {
  if (vn)
    return e === "compositionend" || (!Fi && ad(e, t))
      ? ((e = sd()), (No = Li = Tt = null), (vn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return id && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ux = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function qa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ux[e.type] : t === "textarea";
}
function cd(e, t, n, r) {
  (Uc(r),
    (t = Bo(t, "onChange")),
    0 < t.length &&
      ((n = new Oi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var dr = null,
  jr = null;
function Bx(e) {
  bd(e, 0);
}
function dl(e) {
  var t = wn(e);
  if (Lc(t)) return e;
}
function Vx(e, t) {
  if (e === "change") return t;
}
var dd = !1;
if (xt) {
  var Ul;
  if (xt) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var Za = document.createElement("div");
      (Za.setAttribute("oninput", "return;"),
        (Bl = typeof Za.oninput == "function"));
    }
    Ul = Bl;
  } else Ul = !1;
  dd = Ul && (!document.documentMode || 9 < document.documentMode);
}
function eu() {
  dr && (dr.detachEvent("onpropertychange", fd), (jr = dr = null));
}
function fd(e) {
  if (e.propertyName === "value" && dl(jr)) {
    var t = [];
    (cd(t, jr, e, Pi(e)), Hc(Bx, t));
  }
}
function Wx(e, t, n) {
  e === "focusin"
    ? (eu(), (dr = t), (jr = n), dr.attachEvent("onpropertychange", fd))
    : e === "focusout" && eu();
}
function Hx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return dl(jr);
}
function Kx(e, t) {
  if (e === "click") return dl(t);
}
function Gx(e, t) {
  if (e === "input" || e === "change") return dl(t);
}
function Qx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == "function" ? Object.is : Qx;
function Er(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ds.call(t, o) || !qe(e[o], t[o])) return !1;
  }
  return !0;
}
function tu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nu(e, t) {
  var n = tu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = tu(n);
  }
}
function pd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? pd(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function md() {
  for (var e = window, t = Oo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Oo(e.document);
  }
  return t;
}
function Di(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Yx(e) {
  var t = md(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Di(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        ((r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = nu(n, l)));
        var s = nu(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Xx = xt && "documentMode" in document && 11 >= document.documentMode,
  gn = null,
  Rs = null,
  fr = null,
  Ts = !1;
function ru(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ts ||
    gn == null ||
    gn !== Oo(r) ||
    ((r = gn),
    "selectionStart" in r && Di(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (fr && Er(fr, r)) ||
      ((fr = r),
      (r = Bo(Rs, "onSelect")),
      0 < r.length &&
        ((t = new Oi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = gn))));
}
function oo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var yn = {
    animationend: oo("Animation", "AnimationEnd"),
    animationiteration: oo("Animation", "AnimationIteration"),
    animationstart: oo("Animation", "AnimationStart"),
    transitionend: oo("Transition", "TransitionEnd"),
  },
  Vl = {},
  hd = {};
xt &&
  ((hd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete yn.animationend.animation,
    delete yn.animationiteration.animation,
    delete yn.animationstart.animation),
  "TransitionEvent" in window || delete yn.transitionend.transition);
function fl(e) {
  if (Vl[e]) return Vl[e];
  if (!yn[e]) return e;
  var t = yn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hd) return (Vl[e] = t[n]);
  return e;
}
var xd = fl("animationend"),
  vd = fl("animationiteration"),
  gd = fl("animationstart"),
  yd = fl("transitionend"),
  wd = new Map(),
  ou =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Wt(e, t) {
  (wd.set(e, t), cn(t, [e]));
}
for (var Wl = 0; Wl < ou.length; Wl++) {
  var Hl = ou[Wl],
    Jx = Hl.toLowerCase(),
    qx = Hl[0].toUpperCase() + Hl.slice(1);
  Wt(Jx, "on" + qx);
}
Wt(xd, "onAnimationEnd");
Wt(vd, "onAnimationIteration");
Wt(gd, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(yd, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
cn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
cn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
cn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
cn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ir =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Zx = new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));
function lu(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Jh(r, t, void 0, e), (e.currentTarget = null));
}
function bd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== l && o.isPropagationStopped())) break e;
          (lu(o, a, c), (l = u));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== l && o.isPropagationStopped())
          )
            break e;
          (lu(o, a, c), (l = u));
        }
    }
  }
  if (Fo) throw ((e = Es), (Fo = !1), (Es = null), e);
}
function K(e, t) {
  var n = t[Ms];
  n === void 0 && (n = t[Ms] = new Set());
  var r = e + "__bubble";
  n.has(r) || (kd(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
  var r = 0;
  (t && (r |= 4), kd(n, e, r, t));
}
var lo = "_reactListening" + Math.random().toString(36).slice(2);
function Cr(e) {
  if (!e[lo]) {
    ((e[lo] = !0),
      Pc.forEach(function (n) {
        n !== "selectionchange" && (Zx.has(n) || Kl(n, !1, e), Kl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[lo] || ((t[lo] = !0), Kl("selectionchange", !1, t));
  }
}
function kd(e, t, n, r) {
  switch (ld(t)) {
    case 1:
      var o = px;
      break;
    case 4:
      o = mx;
      break;
    default:
      o = Ii;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !js ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function Gl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Xt(a)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = l = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Hc(function () {
    var c = l,
      f = Pi(n),
      h = [];
    e: {
      var x = wd.get(e);
      if (x !== void 0) {
        var w = Oi,
          b = e;
        switch (e) {
          case "keypress":
            if (So(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Px;
            break;
          case "focusin":
            ((b = "focus"), (w = $l));
            break;
          case "focusout":
            ((b = "blur"), (w = $l));
            break;
          case "beforeblur":
          case "afterblur":
            w = $l;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Ga;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = vx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = _x;
            break;
          case xd:
          case vd:
          case gd:
            w = wx;
            break;
          case yd:
            w = Lx;
            break;
          case "scroll":
            w = hx;
            break;
          case "wheel":
            w = Mx;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = kx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ya;
        }
        var g = (t & 4) !== 0,
          y = !g && e === "scroll",
          p = g ? (x !== null ? x + "Capture" : null) : x;
        g = [];
        for (var d = c, v; d !== null; ) {
          v = d;
          var k = v.stateNode;
          if (
            (v.tag === 5 &&
              k !== null &&
              ((v = k),
              p !== null && ((k = br(d, p)), k != null && g.push(zr(d, k, v)))),
            y)
          )
            break;
          d = d.return;
        }
        0 < g.length &&
          ((x = new w(x, b, null, n, f)), h.push({ event: x, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((x = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          x &&
            n !== Ns &&
            (b = n.relatedTarget || n.fromElement) &&
            (Xt(b) || b[vt]))
        )
          break e;
        if (
          (w || x) &&
          ((x =
            f.window === f
              ? f
              : (x = f.ownerDocument)
                ? x.defaultView || x.parentWindow
                : window),
          w
            ? ((b = n.relatedTarget || n.toElement),
              (w = c),
              (b = b ? Xt(b) : null),
              b !== null &&
                ((y = dn(b)), b !== y || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((w = null), (b = c)),
          w !== b)
        ) {
          if (
            ((g = Ga),
            (k = "onMouseLeave"),
            (p = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Ya),
              (k = "onPointerLeave"),
              (p = "onPointerEnter"),
              (d = "pointer")),
            (y = w == null ? x : wn(w)),
            (v = b == null ? x : wn(b)),
            (x = new g(k, d + "leave", w, n, f)),
            (x.target = y),
            (x.relatedTarget = v),
            (k = null),
            Xt(f) === c &&
              ((g = new g(p, d + "enter", b, n, f)),
              (g.target = v),
              (g.relatedTarget = y),
              (k = g)),
            (y = k),
            w && b)
          )
            t: {
              for (g = w, p = b, d = 0, v = g; v; v = fn(v)) d++;
              for (v = 0, k = p; k; k = fn(k)) v++;
              for (; 0 < d - v; ) ((g = fn(g)), d--);
              for (; 0 < v - d; ) ((p = fn(p)), v--);
              for (; d--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                ((g = fn(g)), (p = fn(p)));
              }
              g = null;
            }
          else g = null;
          (w !== null && su(h, x, w, g, !1),
            b !== null && y !== null && su(h, y, b, g, !0));
        }
      }
      e: {
        if (
          ((x = c ? wn(c) : window),
          (w = x.nodeName && x.nodeName.toLowerCase()),
          w === "select" || (w === "input" && x.type === "file"))
        )
          var N = Vx;
        else if (qa(x))
          if (dd) N = Gx;
          else {
            N = Hx;
            var E = Wx;
          }
        else
          (w = x.nodeName) &&
            w.toLowerCase() === "input" &&
            (x.type === "checkbox" || x.type === "radio") &&
            (N = Kx);
        if (N && (N = N(e, c))) {
          cd(h, N, n, f);
          break e;
        }
        (E && E(e, x, c),
          e === "focusout" &&
            (E = x._wrapperState) &&
            E.controlled &&
            x.type === "number" &&
            gs(x, "number", x.value));
      }
      switch (((E = c ? wn(c) : window), e)) {
        case "focusin":
          (qa(E) || E.contentEditable === "true") &&
            ((gn = E), (Rs = c), (fr = null));
          break;
        case "focusout":
          fr = Rs = gn = null;
          break;
        case "mousedown":
          Ts = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ts = !1), ru(h, n, f));
          break;
        case "selectionchange":
          if (Xx) break;
        case "keydown":
        case "keyup":
          ru(h, n, f);
      }
      var C;
      if (Fi)
        e: {
          switch (e) {
            case "compositionstart":
              var S = "onCompositionStart";
              break e;
            case "compositionend":
              S = "onCompositionEnd";
              break e;
            case "compositionupdate":
              S = "onCompositionUpdate";
              break e;
          }
          S = void 0;
        }
      else
        vn
          ? ad(e, n) && (S = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
      (S &&
        (id &&
          n.locale !== "ko" &&
          (vn || S !== "onCompositionStart"
            ? S === "onCompositionEnd" && vn && (C = sd())
            : ((Tt = f),
              (Li = "value" in Tt ? Tt.value : Tt.textContent),
              (vn = !0))),
        (E = Bo(c, S)),
        0 < E.length &&
          ((S = new Qa(S, e, null, n, f)),
          h.push({ event: S, listeners: E }),
          C ? (S.data = C) : ((C = ud(n)), C !== null && (S.data = C)))),
        (C = Dx ? Ax(e, n) : $x(e, n)) &&
          ((c = Bo(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new Qa("onBeforeInput", "beforeinput", null, n, f)),
            h.push({ event: f, listeners: c }),
            (f.data = C))));
    }
    bd(h, t);
  });
}
function zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Bo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    (o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = br(e, n)),
      l != null && r.unshift(zr(e, l, o)),
      (l = br(e, t)),
      l != null && r.push(zr(e, l, o))),
      (e = e.return));
  }
  return r;
}
function fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function su(e, t, n, r, o) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      o
        ? ((u = br(n, l)), u != null && s.unshift(zr(n, u, a)))
        : o || ((u = br(n, l)), u != null && s.push(zr(n, u, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var e0 = /\r\n?/g,
  t0 = /\u0000|\uFFFD/g;
function iu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      e0,
      `
`,
    )
    .replace(t0, "");
}
function so(e, t, n) {
  if (((t = iu(t)), iu(e) !== t && n)) throw Error(z(425));
}
function Vo() {}
var _s = null,
  Is = null;
function Ls(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Os = typeof setTimeout == "function" ? setTimeout : void 0,
  n0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  au = typeof Promise == "function" ? Promise : void 0,
  r0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof au < "u"
        ? function (e) {
            return au.resolve(null).then(e).catch(o0);
          }
        : Os;
function o0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ql(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), Sr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Sr(t);
}
function Mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function uu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Hn = Math.random().toString(36).slice(2),
  nt = "__reactFiber$" + Hn,
  Pr = "__reactProps$" + Hn,
  vt = "__reactContainer$" + Hn,
  Ms = "__reactEvents$" + Hn,
  l0 = "__reactListeners$" + Hn,
  s0 = "__reactHandles$" + Hn;
function Xt(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vt] || n[nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = uu(e); e !== null; ) {
          if ((n = e[nt])) return n;
          e = uu(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Br(e) {
  return (
    (e = e[nt] || e[vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function pl(e) {
  return e[Pr] || null;
}
var Fs = [],
  bn = -1;
function Ht(e) {
  return { current: e };
}
function G(e) {
  0 > bn || ((e.current = Fs[bn]), (Fs[bn] = null), bn--);
}
function W(e, t) {
  (bn++, (Fs[bn] = e.current), (e.current = t));
}
var Vt = {},
  we = Ht(Vt),
  Pe = Ht(!1),
  tn = Vt;
function Ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Re(e) {
  return ((e = e.childContextTypes), e != null);
}
function Wo() {
  (G(Pe), G(we));
}
function cu(e, t, n) {
  if (we.current !== Vt) throw Error(z(168));
  (W(we, t), W(Pe, n));
}
function Nd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(z(108, Wh(e) || "Unknown", o));
  return te({}, n, r);
}
function Ho(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
    (tn = we.current),
    W(we, e),
    W(Pe, Pe.current),
    !0
  );
}
function du(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  (n
    ? ((e = Nd(e, t, tn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(Pe),
      G(we),
      W(we, e))
    : G(Pe),
    W(Pe, n));
}
var ct = null,
  ml = !1,
  Yl = !1;
function Sd(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function i0(e) {
  ((ml = !0), Sd(e));
}
function Kt() {
  if (!Yl && ct !== null) {
    Yl = !0;
    var e = 0,
      t = U;
    try {
      var n = ct;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((ct = null), (ml = !1));
    } catch (o) {
      throw (ct !== null && (ct = ct.slice(e + 1)), Yc(Ri, Kt), o);
    } finally {
      ((U = t), (Yl = !1));
    }
  }
  return null;
}
var kn = [],
  Nn = 0,
  Ko = null,
  Go = 0,
  $e = [],
  Ue = 0,
  nn = null,
  dt = 1,
  ft = "";
function Qt(e, t) {
  ((kn[Nn++] = Go), (kn[Nn++] = Ko), (Ko = e), (Go = t));
}
function jd(e, t, n) {
  (($e[Ue++] = dt), ($e[Ue++] = ft), ($e[Ue++] = nn), (nn = e));
  var r = dt;
  e = ft;
  var o = 32 - Xe(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var l = 32 - Xe(t) + o;
  if (30 < l) {
    var s = o - (o % 5);
    ((l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (dt = (1 << (32 - Xe(t) + o)) | (n << o) | r),
      (ft = l + e));
  } else ((dt = (1 << l) | (n << o) | r), (ft = e));
}
function Ai(e) {
  e.return !== null && (Qt(e, 1), jd(e, 1, 0));
}
function $i(e) {
  for (; e === Ko; )
    ((Ko = kn[--Nn]), (kn[Nn] = null), (Go = kn[--Nn]), (kn[Nn] = null));
  for (; e === nn; )
    ((nn = $e[--Ue]),
      ($e[Ue] = null),
      (ft = $e[--Ue]),
      ($e[Ue] = null),
      (dt = $e[--Ue]),
      ($e[Ue] = null));
}
var Oe = null,
  Le = null,
  X = !1,
  Ye = null;
function Ed(e, t) {
  var n = Be(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function fu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), (Le = Mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Le = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = nn !== null ? { id: dt, overflow: ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (Le = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ds(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function As(e) {
  if (X) {
    var t = Le;
    if (t) {
      var n = t;
      if (!fu(e, t)) {
        if (Ds(e)) throw Error(z(418));
        t = Mt(n.nextSibling);
        var r = Oe;
        t && fu(e, t)
          ? Ed(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Oe = e));
      }
    } else {
      if (Ds(e)) throw Error(z(418));
      ((e.flags = (e.flags & -4097) | 2), (X = !1), (Oe = e));
    }
  }
}
function pu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function io(e) {
  if (e !== Oe) return !1;
  if (!X) return (pu(e), (X = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ls(e.type, e.memoizedProps))),
    t && (t = Le))
  ) {
    if (Ds(e)) throw (Cd(), Error(z(418)));
    for (; t; ) (Ed(e, t), (t = Mt(t.nextSibling)));
  }
  if ((pu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Le = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else Le = Oe ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}
function Cd() {
  for (var e = Le; e; ) e = Mt(e.nextSibling);
}
function On() {
  ((Le = Oe = null), (X = !1));
}
function Ui(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var a0 = kt.ReactCurrentBatchConfig;
function er(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[l] : (a[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function ao(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function mu(e) {
  var t = e._init;
  return t(e._payload);
}
function zd(e) {
  function t(p, d) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [d]), (p.flags |= 16)) : v.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) (t(p, d), (d = d.sibling));
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      (d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling));
    return p;
  }
  function o(p, d) {
    return ((p = $t(p, d)), (p.index = 0), (p.sibling = null), p);
  }
  function l(p, d, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < d ? ((p.flags |= 2), d) : v)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function s(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, d, v, k) {
    return d === null || d.tag !== 6
      ? ((d = ns(v, p.mode, k)), (d.return = p), d)
      : ((d = o(d, v)), (d.return = p), d);
  }
  function u(p, d, v, k) {
    var N = v.type;
    return N === xn
      ? f(p, d, v.props.children, k, v.key)
      : d !== null &&
          (d.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === Ct &&
              mu(N) === d.type))
        ? ((k = o(d, v.props)), (k.ref = er(p, d, v)), (k.return = p), k)
        : ((k = To(v.type, v.key, v.props, null, p.mode, k)),
          (k.ref = er(p, d, v)),
          (k.return = p),
          k);
  }
  function c(p, d, v, k) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== v.containerInfo ||
      d.stateNode.implementation !== v.implementation
      ? ((d = rs(v, p.mode, k)), (d.return = p), d)
      : ((d = o(d, v.children || [])), (d.return = p), d);
  }
  function f(p, d, v, k, N) {
    return d === null || d.tag !== 7
      ? ((d = en(v, p.mode, k, N)), (d.return = p), d)
      : ((d = o(d, v)), (d.return = p), d);
  }
  function h(p, d, v) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = ns("" + d, p.mode, v)), (d.return = p), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Jr:
          return (
            (v = To(d.type, d.key, d.props, null, p.mode, v)),
            (v.ref = er(p, null, d)),
            (v.return = p),
            v
          );
        case hn:
          return ((d = rs(d, p.mode, v)), (d.return = p), d);
        case Ct:
          var k = d._init;
          return h(p, k(d._payload), v);
      }
      if (lr(d) || Yn(d))
        return ((d = en(d, p.mode, v, null)), (d.return = p), d);
      ao(p, d);
    }
    return null;
  }
  function x(p, d, v, k) {
    var N = d !== null ? d.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return N !== null ? null : a(p, d, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Jr:
          return v.key === N ? u(p, d, v, k) : null;
        case hn:
          return v.key === N ? c(p, d, v, k) : null;
        case Ct:
          return ((N = v._init), x(p, d, N(v._payload), k));
      }
      if (lr(v) || Yn(v)) return N !== null ? null : f(p, d, v, k, null);
      ao(p, v);
    }
    return null;
  }
  function w(p, d, v, k, N) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return ((p = p.get(v) || null), a(d, p, "" + k, N));
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Jr:
          return (
            (p = p.get(k.key === null ? v : k.key) || null),
            u(d, p, k, N)
          );
        case hn:
          return (
            (p = p.get(k.key === null ? v : k.key) || null),
            c(d, p, k, N)
          );
        case Ct:
          var E = k._init;
          return w(p, d, v, E(k._payload), N);
      }
      if (lr(k) || Yn(k)) return ((p = p.get(v) || null), f(d, p, k, N, null));
      ao(d, k);
    }
    return null;
  }
  function b(p, d, v, k) {
    for (
      var N = null, E = null, C = d, S = (d = 0), _ = null;
      C !== null && S < v.length;
      S++
    ) {
      C.index > S ? ((_ = C), (C = null)) : (_ = C.sibling);
      var I = x(p, C, v[S], k);
      if (I === null) {
        C === null && (C = _);
        break;
      }
      (e && C && I.alternate === null && t(p, C),
        (d = l(I, d, S)),
        E === null ? (N = I) : (E.sibling = I),
        (E = I),
        (C = _));
    }
    if (S === v.length) return (n(p, C), X && Qt(p, S), N);
    if (C === null) {
      for (; S < v.length; S++)
        ((C = h(p, v[S], k)),
          C !== null &&
            ((d = l(C, d, S)),
            E === null ? (N = C) : (E.sibling = C),
            (E = C)));
      return (X && Qt(p, S), N);
    }
    for (C = r(p, C); S < v.length; S++)
      ((_ = w(C, p, S, v[S], k)),
        _ !== null &&
          (e && _.alternate !== null && C.delete(_.key === null ? S : _.key),
          (d = l(_, d, S)),
          E === null ? (N = _) : (E.sibling = _),
          (E = _)));
    return (
      e &&
        C.forEach(function (Q) {
          return t(p, Q);
        }),
      X && Qt(p, S),
      N
    );
  }
  function g(p, d, v, k) {
    var N = Yn(v);
    if (typeof N != "function") throw Error(z(150));
    if (((v = N.call(v)), v == null)) throw Error(z(151));
    for (
      var E = (N = null), C = d, S = (d = 0), _ = null, I = v.next();
      C !== null && !I.done;
      S++, I = v.next()
    ) {
      C.index > S ? ((_ = C), (C = null)) : (_ = C.sibling);
      var Q = x(p, C, I.value, k);
      if (Q === null) {
        C === null && (C = _);
        break;
      }
      (e && C && Q.alternate === null && t(p, C),
        (d = l(Q, d, S)),
        E === null ? (N = Q) : (E.sibling = Q),
        (E = Q),
        (C = _));
    }
    if (I.done) return (n(p, C), X && Qt(p, S), N);
    if (C === null) {
      for (; !I.done; S++, I = v.next())
        ((I = h(p, I.value, k)),
          I !== null &&
            ((d = l(I, d, S)),
            E === null ? (N = I) : (E.sibling = I),
            (E = I)));
      return (X && Qt(p, S), N);
    }
    for (C = r(p, C); !I.done; S++, I = v.next())
      ((I = w(C, p, S, I.value, k)),
        I !== null &&
          (e && I.alternate !== null && C.delete(I.key === null ? S : I.key),
          (d = l(I, d, S)),
          E === null ? (N = I) : (E.sibling = I),
          (E = I)));
    return (
      e &&
        C.forEach(function (ce) {
          return t(p, ce);
        }),
      X && Qt(p, S),
      N
    );
  }
  function y(p, d, v, k) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === xn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Jr:
          e: {
            for (var N = v.key, E = d; E !== null; ) {
              if (E.key === N) {
                if (((N = v.type), N === xn)) {
                  if (E.tag === 7) {
                    (n(p, E.sibling),
                      (d = o(E, v.props.children)),
                      (d.return = p),
                      (p = d));
                    break e;
                  }
                } else if (
                  E.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === Ct &&
                    mu(N) === E.type)
                ) {
                  (n(p, E.sibling),
                    (d = o(E, v.props)),
                    (d.ref = er(p, E, v)),
                    (d.return = p),
                    (p = d));
                  break e;
                }
                n(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            v.type === xn
              ? ((d = en(v.props.children, p.mode, k, v.key)),
                (d.return = p),
                (p = d))
              : ((k = To(v.type, v.key, v.props, null, p.mode, k)),
                (k.ref = er(p, d, v)),
                (k.return = p),
                (p = k));
          }
          return s(p);
        case hn:
          e: {
            for (E = v.key; d !== null; ) {
              if (d.key === E)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === v.containerInfo &&
                  d.stateNode.implementation === v.implementation
                ) {
                  (n(p, d.sibling),
                    (d = o(d, v.children || [])),
                    (d.return = p),
                    (p = d));
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            ((d = rs(v, p.mode, k)), (d.return = p), (p = d));
          }
          return s(p);
        case Ct:
          return ((E = v._init), y(p, d, E(v._payload), k));
      }
      if (lr(v)) return b(p, d, v, k);
      if (Yn(v)) return g(p, d, v, k);
      ao(p, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = o(d, v)), (d.return = p), (p = d))
          : (n(p, d), (d = ns(v, p.mode, k)), (d.return = p), (p = d)),
        s(p))
      : n(p, d);
  }
  return y;
}
var Mn = zd(!0),
  Pd = zd(!1),
  Qo = Ht(null),
  Yo = null,
  Sn = null,
  Bi = null;
function Vi() {
  Bi = Sn = Yo = null;
}
function Wi(e) {
  var t = Qo.current;
  (G(Qo), (e._currentValue = t));
}
function $s(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Tn(e, t) {
  ((Yo = e),
    (Bi = Sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null)));
}
function We(e) {
  var t = e._currentValue;
  if (Bi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Sn === null)) {
      if (Yo === null) throw Error(z(308));
      ((Sn = e), (Yo.dependencies = { lanes: 0, firstContext: e }));
    } else Sn = Sn.next = e;
  return t;
}
var Jt = null;
function Hi(e) {
  Jt === null ? (Jt = [e]) : Jt.push(e);
}
function Rd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Hi(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var zt = !1;
function Ki(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Td(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Hi(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function jo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ti(e, n));
  }
}
function hu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (l === null ? (o = l = s) : (l = l.next = s), (n = n.next));
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Xo(e, t, n, r) {
  var o = e.updateQueue;
  zt = !1;
  var l = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var u = a,
      c = u.next;
    ((u.next = null), s === null ? (l = c) : (s.next = c), (s = u));
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== s &&
        (a === null ? (f.firstBaseUpdate = c) : (a.next = c),
        (f.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var h = o.baseState;
    ((s = 0), (f = c = u = null), (a = l));
    do {
      var x = a.lane,
        w = a.eventTime;
      if ((r & x) === x) {
        f !== null &&
          (f = f.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var b = e,
            g = a;
          switch (((x = t), (w = n), g.tag)) {
            case 1:
              if (((b = g.payload), typeof b == "function")) {
                h = b.call(w, h, x);
                break e;
              }
              h = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = g.payload),
                (x = typeof b == "function" ? b.call(w, h, x) : b),
                x == null)
              )
                break e;
              h = te({}, h, x);
              break e;
            case 2:
              zt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (x = o.effects),
          x === null ? (o.effects = [a]) : x.push(a));
      } else
        ((w = {
          eventTime: w,
          lane: x,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((c = f = w), (u = h)) : (f = f.next = w),
          (s |= x));
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        ((x = a),
          (a = x.next),
          (x.next = null),
          (o.lastBaseUpdate = x),
          (o.shared.pending = null));
      }
    } while (1);
    if (
      (f === null && (u = h),
      (o.baseState = u),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((s |= o.lane), (o = o.next));
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    ((on |= s), (e.lanes = s), (e.memoizedState = h));
  }
}
function xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(z(191, o));
        o.call(r);
      }
    }
}
var Vr = {},
  ot = Ht(Vr),
  Rr = Ht(Vr),
  Tr = Ht(Vr);
function qt(e) {
  if (e === Vr) throw Error(z(174));
  return e;
}
function Gi(e, t) {
  switch ((W(Tr, t), W(Rr, e), W(ot, Vr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ws(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ws(t, e)));
  }
  (G(ot), W(ot, t));
}
function Fn() {
  (G(ot), G(Rr), G(Tr));
}
function _d(e) {
  qt(Tr.current);
  var t = qt(ot.current),
    n = ws(t, e.type);
  t !== n && (W(Rr, e), W(ot, n));
}
function Qi(e) {
  Rr.current === e && (G(ot), G(Rr));
}
var q = Ht(0);
function Jo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Xl = [];
function Yi() {
  for (var e = 0; e < Xl.length; e++)
    Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0;
}
var Eo = kt.ReactCurrentDispatcher,
  Jl = kt.ReactCurrentBatchConfig,
  rn = 0,
  ee = null,
  ae = null,
  de = null,
  qo = !1,
  pr = !1,
  _r = 0,
  u0 = 0;
function ve() {
  throw Error(z(321));
}
function Xi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n])) return !1;
  return !0;
}
function Ji(e, t, n, r, o, l) {
  if (
    ((rn = l),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Eo.current = e === null || e.memoizedState === null ? p0 : m0),
    (e = n(r, o)),
    pr)
  ) {
    l = 0;
    do {
      if (((pr = !1), (_r = 0), 25 <= l)) throw Error(z(301));
      ((l += 1),
        (de = ae = null),
        (t.updateQueue = null),
        (Eo.current = h0),
        (e = n(r, o)));
    } while (pr);
  }
  if (
    ((Eo.current = Zo),
    (t = ae !== null && ae.next !== null),
    (rn = 0),
    (de = ae = ee = null),
    (qo = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function qi() {
  var e = _r !== 0;
  return ((_r = 0), e);
}
function tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (de === null ? (ee.memoizedState = de = e) : (de = de.next = e), de);
}
function He() {
  if (ae === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = de === null ? ee.memoizedState : de.next;
  if (t !== null) ((de = t), (ae = e));
  else {
    if (e === null) throw Error(z(310));
    ((ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      de === null ? (ee.memoizedState = de = e) : (de = de.next = e));
  }
  return de;
}
function Ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ql(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = ae,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var s = o.next;
      ((o.next = l.next), (l.next = s));
    }
    ((r.baseQueue = o = l), (n.pending = null));
  }
  if (o !== null) {
    ((l = o.next), (r = r.baseState));
    var a = (s = null),
      u = null,
      c = l;
    do {
      var f = c.lane;
      if ((rn & f) === f)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var h = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (u === null ? ((a = u = h), (s = r)) : (u = u.next = h),
          (ee.lanes |= f),
          (on |= f));
      }
      c = c.next;
    } while (c !== null && c !== l);
    (u === null ? (s = r) : (u.next = a),
      qe(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((l = o.lane), (ee.lanes |= l), (on |= l), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zl(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do ((l = e(l, s.action)), (s = s.next));
    while (s !== o);
    (qe(l, t.memoizedState) || (ze = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l));
  }
  return [l, r];
}
function Id() {}
function Ld(e, t) {
  var n = ee,
    r = He(),
    o = t(),
    l = !qe(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (ze = !0)),
    (r = r.queue),
    Zi(Fd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Lr(9, Md.bind(null, n, r, o, t), void 0, null),
      fe === null)
    )
      throw Error(z(349));
    rn & 30 || Od(n, t, o);
  }
  return o;
}
function Od(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Md(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Dd(t) && Ad(e));
}
function Fd(e, t, n) {
  return n(function () {
    Dd(t) && Ad(e);
  });
}
function Dd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function Ad(e) {
  var t = gt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function vu(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ir,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = f0.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function Lr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $d() {
  return He().memoizedState;
}
function Co(e, t, n, r) {
  var o = tt();
  ((ee.flags |= e),
    (o.memoizedState = Lr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function hl(e, t, n, r) {
  var o = He();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ae !== null) {
    var s = ae.memoizedState;
    if (((l = s.destroy), r !== null && Xi(r, s.deps))) {
      o.memoizedState = Lr(t, n, l, r);
      return;
    }
  }
  ((ee.flags |= e), (o.memoizedState = Lr(1 | t, n, l, r)));
}
function gu(e, t) {
  return Co(8390656, 8, e, t);
}
function Zi(e, t) {
  return hl(2048, 8, e, t);
}
function Ud(e, t) {
  return hl(4, 2, e, t);
}
function Bd(e, t) {
  return hl(4, 4, e, t);
}
function Vd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Wd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    hl(4, 4, Vd.bind(null, t, e), n)
  );
}
function ea() {}
function Hd(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Kd(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gd(e, t, n) {
  return rn & 21
    ? (qe(n, t) || ((n = qc()), (ee.lanes |= n), (on |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function c0(e, t) {
  var n = U;
  ((U = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Jl.transition;
  Jl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((U = n), (Jl.transition = r));
  }
}
function Qd() {
  return He().memoizedState;
}
function d0(e, t, n) {
  var r = At(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yd(e))
  )
    Xd(t, n);
  else if (((n = Rd(e, t, n, r)), n !== null)) {
    var o = Ne();
    (Je(n, e, r, o), Jd(n, t, r));
  }
}
function f0(e, t, n) {
  var r = At(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yd(e)) Xd(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = l(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), qe(a, s))) {
          var u = t.interleaved;
          (u === null
            ? ((o.next = o), Hi(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Rd(e, t, o, r)),
      n !== null && ((o = Ne()), Je(n, e, r, o), Jd(n, t, r)));
  }
}
function Yd(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function Xd(e, t) {
  pr = qo = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Jd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ti(e, n));
  }
}
var Zo = {
    readContext: We,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  p0 = {
    readContext: We,
    useCallback: function (e, t) {
      return ((tt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: We,
    useEffect: gu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Co(4194308, 4, Vd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Co(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Co(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = d0.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: vu,
    useDebugValue: ea,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = vu(!1),
        t = e[0];
      return ((e = c0.bind(null, e[1])), (tt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        o = tt();
      if (X) {
        if (n === void 0) throw Error(z(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(z(349));
        rn & 30 || Od(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        gu(Fd.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Lr(9, Md.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tt(),
        t = fe.identifierPrefix;
      if (X) {
        var n = ft,
          r = dt;
        ((n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = _r++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = u0++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  m0 = {
    readContext: We,
    useCallback: Hd,
    useContext: We,
    useEffect: Zi,
    useImperativeHandle: Wd,
    useInsertionEffect: Ud,
    useLayoutEffect: Bd,
    useMemo: Kd,
    useReducer: ql,
    useRef: $d,
    useState: function () {
      return ql(Ir);
    },
    useDebugValue: ea,
    useDeferredValue: function (e) {
      var t = He();
      return Gd(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = ql(Ir)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Id,
    useSyncExternalStore: Ld,
    useId: Qd,
    unstable_isNewReconciler: !1,
  },
  h0 = {
    readContext: We,
    useCallback: Hd,
    useContext: We,
    useEffect: Zi,
    useImperativeHandle: Wd,
    useInsertionEffect: Ud,
    useLayoutEffect: Bd,
    useMemo: Kd,
    useReducer: Zl,
    useRef: $d,
    useState: function () {
      return Zl(Ir);
    },
    useDebugValue: ea,
    useDeferredValue: function (e) {
      var t = He();
      return ae === null ? (t.memoizedState = e) : Gd(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(Ir)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Id,
    useSyncExternalStore: Ld,
    useId: Qd,
    unstable_isNewReconciler: !1,
  };
function Ge(e, t) {
  if (e && e.defaultProps) {
    ((t = te({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Us(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = At(e),
      l = mt(r, o);
    ((l.payload = t),
      n != null && (l.callback = n),
      (t = Ft(e, l, o)),
      t !== null && (Je(t, e, o, r), jo(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = At(e),
      l = mt(r, o);
    ((l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Ft(e, l, o)),
      t !== null && (Je(t, e, o, r), jo(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = At(e),
      o = mt(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Ft(e, o, r)),
      t !== null && (Je(t, e, r, n), jo(t, e, r)));
  },
};
function yu(e, t, n, r, o, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Er(n, r) || !Er(o, l)
        : !0
  );
}
function qd(e, t, n) {
  var r = !1,
    o = Vt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = We(l))
      : ((o = Re(t) ? tn : we.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Ln(e, o) : Vt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function wu(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xl.enqueueReplaceState(t, t.state, null));
}
function Bs(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ki(e));
  var l = t.contextType;
  (typeof l == "object" && l !== null
    ? (o.context = We(l))
    : ((l = Re(t) ? tn : we.current), (o.context = Ln(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Us(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && xl.enqueueReplaceState(o, o.state, null),
      Xo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function Dn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Vh(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function es(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var x0 = typeof WeakMap == "function" ? WeakMap : Map;
function Zd(e, t, n) {
  ((n = mt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (tl || ((tl = !0), (Zs = r)), Vs(e, t));
    }),
    n
  );
}
function ef(e, t, n) {
  ((n = mt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Vs(e, t);
      }));
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        (Vs(e, t),
          typeof r != "function" &&
            (Dt === null ? (Dt = new Set([this])) : Dt.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new x0();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = R0.bind(null, e, t, n)), t.then(e, e));
}
function ku(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = mt(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var v0 = kt.ReactCurrentOwner,
  ze = !1;
function be(e, t, n, r) {
  t.child = e === null ? Pd(t, null, n, r) : Mn(t, e.child, n, r);
}
function Su(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Tn(t, o),
    (r = Ji(e, t, n, r, l, o)),
    (n = qi()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        yt(e, t, o))
      : (X && n && Ai(t), (t.flags |= 1), be(e, t, r, o), t.child)
  );
}
function ju(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !aa(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), tf(e, t, l, r, o))
      : ((e = To(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Er), n(s, r) && e.ref === t.ref)
    )
      return yt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = $t(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function tf(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Er(l, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (ze = !0);
      else return ((t.lanes = e.lanes), yt(e, t, o));
  }
  return Ws(e, t, n, r, o);
}
function nf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(En, Ie),
        (Ie |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(En, Ie),
          (Ie |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        W(En, Ie),
        (Ie |= r));
    }
  else
    (l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(En, Ie),
      (Ie |= r));
  return (be(e, t, o, n), t.child);
}
function rf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ws(e, t, n, r, o) {
  var l = Re(n) ? tn : we.current;
  return (
    (l = Ln(t, l)),
    Tn(t, o),
    (n = Ji(e, t, n, r, l, o)),
    (r = qi()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        yt(e, t, o))
      : (X && r && Ai(t), (t.flags |= 1), be(e, t, n, o), t.child)
  );
}
function Eu(e, t, n, r, o) {
  if (Re(n)) {
    var l = !0;
    Ho(t);
  } else l = !1;
  if ((Tn(t, o), t.stateNode === null))
    (zo(e, t), qd(t, n, r), Bs(t, n, r, o), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var u = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = We(c))
      : ((c = Re(n) ? tn : we.current), (c = Ln(t, c)));
    var f = n.getDerivedStateFromProps,
      h =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (h ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && wu(t, s, r, c)),
      (zt = !1));
    var x = t.memoizedState;
    ((s.state = x),
      Xo(t, r, s, o),
      (u = t.memoizedState),
      a !== r || x !== u || Pe.current || zt
        ? (typeof f == "function" && (Us(t, n, f, r), (u = t.memoizedState)),
          (a = zt || yu(t, n, a, r, x, u, c))
            ? (h ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      Td(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Ge(t.type, a)),
      (s.props = c),
      (h = t.pendingProps),
      (x = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = We(u))
        : ((u = Re(n) ? tn : we.current), (u = Ln(t, u))));
    var w = n.getDerivedStateFromProps;
    ((f =
      typeof w == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== h || x !== u) && wu(t, s, r, u)),
      (zt = !1),
      (x = t.memoizedState),
      (s.state = x),
      Xo(t, r, s, o));
    var b = t.memoizedState;
    a !== h || x !== b || Pe.current || zt
      ? (typeof w == "function" && (Us(t, n, w, r), (b = t.memoizedState)),
        (c = zt || yu(t, n, c, r, x, b, u) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, b, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, b, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (s.props = r),
        (s.state = b),
        (s.context = u),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Hs(e, t, n, r, l, o);
}
function Hs(e, t, n, r, o, l) {
  rf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (o && du(t, n, !1), yt(e, t, l));
  ((r = t.stateNode), (v0.current = t));
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Mn(t, e.child, null, l)), (t.child = Mn(t, null, a, l)))
      : be(e, t, a, l),
    (t.memoizedState = r.state),
    o && du(t, n, !0),
    t.child
  );
}
function of(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? cu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && cu(e, t.context, !1),
    Gi(e, t.containerInfo));
}
function Cu(e, t, n, r, o) {
  return (On(), Ui(o), (t.flags |= 256), be(e, t, n, r), t.child);
}
var Ks = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lf(e, t, n) {
  var r = t.pendingProps,
    o = q.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    W(q, o & 1),
    e === null)
  )
    return (
      As(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = yl(s, r, 0, null)),
              (e = en(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Gs(n)),
              (t.memoizedState = Ks),
              e)
            : ta(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return g0(e, t, s, r, a, o, n);
  if (l) {
    ((l = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = $t(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (l = $t(a, l)) : ((l = en(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Gs(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ks),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = $t(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ta(e, t) {
  return (
    (t = yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function uo(e, t, n, r) {
  return (
    r !== null && Ui(r),
    Mn(t, e.child, null, n),
    (e = ta(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function g0(e, t, n, r, o, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = es(Error(z(422)))), uo(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (o = t.mode),
          (r = yl({ mode: "visible", children: r.children }, o, 0, null)),
          (l = en(l, o, s, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && Mn(t, e.child, null, s),
          (t.child.memoizedState = Gs(s)),
          (t.memoizedState = Ks),
          l);
  if (!(t.mode & 1)) return uo(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (l = Error(z(419))),
      (r = es(l, r, void 0)),
      uo(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), ze || a)) {
    if (((r = fe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), gt(e, o), Je(r, e, o, -1)));
    }
    return (ia(), (r = es(Error(z(421)))), uo(e, t, s, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = T0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Le = Mt(o.nextSibling)),
      (Oe = t),
      (X = !0),
      (Ye = null),
      e !== null &&
        (($e[Ue++] = dt),
        ($e[Ue++] = ft),
        ($e[Ue++] = nn),
        (dt = e.id),
        (ft = e.overflow),
        (nn = t)),
      (t = ta(t, r.children)),
      (t.flags |= 4096),
      t);
}
function zu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), $s(e.return, t, n));
}
function ts(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function sf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((be(e, t, r.children, n), (r = q.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && zu(e, n, t);
        else if (e.tag === 19) zu(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((W(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && Jo(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ts(t, !1, o, n, l));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Jo(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        ts(t, !0, n, null, l);
        break;
      case "together":
        ts(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (on |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      ((e = e.sibling),
        (n = n.sibling = $t(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function y0(e, t, n) {
  switch (t.tag) {
    case 3:
      (of(t), On());
      break;
    case 5:
      _d(t);
      break;
    case 1:
      Re(t.type) && Ho(t);
      break;
    case 4:
      Gi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (W(Qo, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? lf(e, t, n)
            : (W(q, q.current & 1),
              (e = yt(e, t, n)),
              e !== null ? e.sibling : null);
      W(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        W(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), nf(e, t, n));
  }
  return yt(e, t, n);
}
var af, Qs, uf, cf;
af = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Qs = function () {};
uf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), qt(ot.current));
    var l = null;
    switch (n) {
      case "input":
        ((o = xs(e, o)), (r = xs(e, r)), (l = []));
        break;
      case "select":
        ((o = te({}, o, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (l = []));
        break;
      case "textarea":
        ((o = ys(e, o)), (r = ys(e, r)), (l = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vo);
    }
    bs(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (yr.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in u)
              u.hasOwnProperty(s) &&
                a[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else (n || (l || (l = []), l.push(c, n)), (n = u));
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (l = l || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (l = l || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (yr.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && K("scroll", e),
                    l || a === u || (l = []))
                  : (l = l || []).push(c, u));
    }
    n && (l = l || []).push("style", n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
cf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function tr(e, t) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function w0(e, t, n) {
  var r = t.pendingProps;
  switch (($i(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ge(t), null);
    case 1:
      return (Re(t.type) && Wo(), ge(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Fn(),
        G(Pe),
        G(we),
        Yi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (io(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (ni(Ye), (Ye = null)))),
        Qs(e, t),
        ge(t),
        null
      );
    case 5:
      Qi(t);
      var o = qt(Tr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (uf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return (ge(t), null);
        }
        if (((e = qt(ot.current)), io(t))) {
          ((r = t.stateNode), (n = t.type));
          var l = t.memoizedProps;
          switch (((r[nt] = t), (r[Pr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (K("cancel", r), K("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ir.length; o++) K(ir[o], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (K("error", r), K("load", r));
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              (Fa(r, l), K("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!l.multiple }),
                K("invalid", r));
              break;
            case "textarea":
              (Aa(r, l), K("invalid", r));
          }
          (bs(n, l), (o = null));
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      so(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      so(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : yr.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              (qr(r), Da(r, l, !0));
              break;
            case "textarea":
              (qr(r), $a(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Vo);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[nt] = t),
            (e[Pr] = r),
            af(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = ks(n, r)), n)) {
              case "dialog":
                (K("cancel", e), K("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (K("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < ir.length; o++) K(ir[o], e);
                o = r;
                break;
              case "source":
                (K("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (K("error", e), K("load", e), (o = r));
                break;
              case "details":
                (K("toggle", e), (o = r));
                break;
              case "input":
                (Fa(e, r), (o = xs(e, r)), K("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = te({}, r, { value: void 0 })),
                  K("invalid", e));
                break;
              case "textarea":
                (Aa(e, r), (o = ys(e, r)), K("invalid", e));
                break;
              default:
                o = r;
            }
            (bs(n, o), (a = o));
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var u = a[l];
                l === "style"
                  ? $c(e, u)
                  : l === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Dc(e, u))
                    : l === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && wr(e, u)
                        : typeof u == "number" && wr(e, "" + u)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (yr.hasOwnProperty(l)
                          ? u != null && l === "onScroll" && K("scroll", e)
                          : u != null && ji(e, l, u, s));
              }
            switch (n) {
              case "input":
                (qr(e), Da(e, r, !1));
                break;
              case "textarea":
                (qr(e), $a(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Cn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Cn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Vo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ge(t), null);
    case 6:
      if (e && t.stateNode != null) cf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (((n = qt(Tr.current)), qt(ot.current), io(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nt] = t),
            (l = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                so(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  so(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nt] = t),
            (t.stateNode = r));
      }
      return (ge(t), null);
    case 13:
      if (
        (G(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && Le !== null && t.mode & 1 && !(t.flags & 128))
          (Cd(), On(), (t.flags |= 98560), (l = !1));
        else if (((l = io(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(z(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(z(317));
            l[nt] = t;
          } else
            (On(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ge(t), (l = !1));
        } else (Ye !== null && (ni(Ye), (Ye = null)), (l = !0));
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? ue === 0 && (ue = 3) : ia())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        Fn(),
        Qs(e, t),
        e === null && Cr(t.stateNode.containerInfo),
        ge(t),
        null
      );
    case 10:
      return (Wi(t.type._context), ge(t), null);
    case 17:
      return (Re(t.type) && Wo(), ge(t), null);
    case 19:
      if ((G(q), (l = t.memoizedState), l === null)) return (ge(t), null);
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) tr(l, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Jo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    tr(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (W(q, (q.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          l.tail !== null &&
            le() > An &&
            ((t.flags |= 128), (r = !0), tr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              tr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !X)
            )
              return (ge(t), null);
          } else
            2 * le() - l.renderingStartTime > An &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), tr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = le()),
          (t.sibling = null),
          (n = q.current),
          W(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        sa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ie & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function b0(e, t) {
  switch (($i(t), t.tag)) {
    case 1:
      return (
        Re(t.type) && Wo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Fn(),
        G(Pe),
        G(we),
        Yi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Qi(t), null);
    case 13:
      if ((G(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(z(340));
        On();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (G(q), null);
    case 4:
      return (Fn(), null);
    case 10:
      return (Wi(t.type._context), null);
    case 22:
    case 23:
      return (sa(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var co = !1,
  ye = !1,
  k0 = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function Ys(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var Pu = !1;
function N0(e, t) {
  if (((_s = $o), (e = md()), Di(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, l.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            u = -1,
            c = 0,
            f = 0,
            h = e,
            x = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (o !== 0 && h.nodeType !== 3) || (a = s + o),
                h !== l || (r !== 0 && h.nodeType !== 3) || (u = s + r),
                h.nodeType === 3 && (s += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              ((x = h), (h = w));
            for (;;) {
              if (h === e) break t;
              if (
                (x === n && ++c === o && (a = s),
                x === l && ++f === r && (u = s),
                (w = h.nextSibling) !== null)
              )
                break;
              ((h = x), (x = h.parentNode));
            }
            h = w;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Is = { focusedElem: e, selectionRange: n }, $o = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (P = e));
    else
      for (; P !== null; ) {
        t = P;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var g = b.memoizedProps,
                    y = b.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Ge(t.type, g),
                      y,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (k) {
          re(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (P = e));
          break;
        }
        P = t.return;
      }
  return ((b = Pu), (Pu = !1), b);
}
function mr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        ((o.destroy = void 0), l !== void 0 && Ys(t, n, l));
      }
      o = o.next;
    } while (o !== r);
  }
}
function vl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function df(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), df(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nt], delete t[Pr], delete t[Ms], delete t[l0], delete t[s0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function ff(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ru(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ff(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Js(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Vo)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Js(e, t, n), e = e.sibling; e !== null; )
      (Js(e, t, n), (e = e.sibling));
}
function qs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qs(e, t, n), e = e.sibling; e !== null; )
      (qs(e, t, n), (e = e.sibling));
}
var me = null,
  Qe = !1;
function St(e, t, n) {
  for (n = n.child; n !== null; ) (pf(e, t, n), (n = n.sibling));
}
function pf(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == "function")
    try {
      rt.onCommitFiberUnmount(ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ye || jn(n, t);
    case 6:
      var r = me,
        o = Qe;
      ((me = null),
        St(e, t, n),
        (me = r),
        (Qe = o),
        me !== null &&
          (Qe
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode)));
      break;
    case 18:
      me !== null &&
        (Qe
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ql(e.parentNode, n)
              : e.nodeType === 1 && Ql(e, n),
            Sr(e))
          : Ql(me, n.stateNode));
      break;
    case 4:
      ((r = me),
        (o = Qe),
        (me = n.stateNode.containerInfo),
        (Qe = !0),
        St(e, t, n),
        (me = r),
        (Qe = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            s = l.destroy;
          ((l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && Ys(n, t, s),
            (o = o.next));
        } while (o !== r);
      }
      St(e, t, n);
      break;
    case 1:
      if (
        !ye &&
        (jn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          re(n, t, a);
        }
      St(e, t, n);
      break;
    case 21:
      St(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ye = (r = ye) || n.memoizedState !== null), St(e, t, n), (ye = r))
        : St(e, t, n);
      break;
    default:
      St(e, t, n);
  }
}
function Tu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new k0()),
      t.forEach(function (r) {
        var o = _0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((me = a.stateNode), (Qe = !1));
              break e;
            case 3:
              ((me = a.stateNode.containerInfo), (Qe = !0));
              break e;
            case 4:
              ((me = a.stateNode.containerInfo), (Qe = !0));
              break e;
          }
          a = a.return;
        }
        if (me === null) throw Error(z(160));
        (pf(l, s, o), (me = null), (Qe = !1));
        var u = o.alternate;
        (u !== null && (u.return = null), (o.return = null));
      } catch (c) {
        re(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (mf(t, e), (t = t.sibling));
}
function mf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), et(e), r & 4)) {
        try {
          (mr(3, e, e.return), vl(3, e));
        } catch (g) {
          re(e, e.return, g);
        }
        try {
          mr(5, e, e.return);
        } catch (g) {
          re(e, e.return, g);
        }
      }
      break;
    case 1:
      (Ke(t, e), et(e), r & 512 && n !== null && jn(n, n.return));
      break;
    case 5:
      if (
        (Ke(t, e),
        et(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          wr(o, "");
        } catch (g) {
          re(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (a === "input" && l.type === "radio" && l.name != null && Oc(o, l),
              ks(a, s));
            var c = ks(a, l);
            for (s = 0; s < u.length; s += 2) {
              var f = u[s],
                h = u[s + 1];
              f === "style"
                ? $c(o, h)
                : f === "dangerouslySetInnerHTML"
                  ? Dc(o, h)
                  : f === "children"
                    ? wr(o, h)
                    : ji(o, f, h, c);
            }
            switch (a) {
              case "input":
                vs(o, l);
                break;
              case "textarea":
                Mc(o, l);
                break;
              case "select":
                var x = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var w = l.value;
                w != null
                  ? Cn(o, !!l.multiple, w, !1)
                  : x !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Cn(o, !!l.multiple, l.defaultValue, !0)
                      : Cn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Pr] = l;
          } catch (g) {
            re(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), et(e), r & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        ((o = e.stateNode), (l = e.memoizedProps));
        try {
          o.nodeValue = l;
        } catch (g) {
          re(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Sr(t.containerInfo);
        } catch (g) {
          re(e, e.return, g);
        }
      break;
    case 4:
      (Ke(t, e), et(e));
      break;
    case 13:
      (Ke(t, e),
        et(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (oa = le())),
        r & 4 && Tu(e));
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ye = (c = ye) || f), Ke(t, e), (ye = c)) : Ke(t, e),
        et(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (P = e, f = e.child; f !== null; ) {
            for (h = P = f; P !== null; ) {
              switch (((x = P), (w = x.child), x.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mr(4, x, x.return);
                  break;
                case 1:
                  jn(x, x.return);
                  var b = x.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    ((r = x), (n = x.return));
                    try {
                      ((t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount());
                    } catch (g) {
                      re(r, n, g);
                    }
                  }
                  break;
                case 5:
                  jn(x, x.return);
                  break;
                case 22:
                  if (x.memoizedState !== null) {
                    Iu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = x), (P = w)) : Iu(h);
            }
            f = f.sibling;
          }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                ((o = h.stateNode),
                  c
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = h.stateNode),
                      (u = h.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Ac("display", s))));
              } catch (g) {
                re(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (f === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (g) {
                re(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ((h.child.return = h), (h = h.child));
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            (f === h && (f = null), (h = h.return));
          }
          (f === h && (f = null),
            (h.sibling.return = h.return),
            (h = h.sibling));
        }
      }
      break;
    case 19:
      (Ke(t, e), et(e), r & 4 && Tu(e));
      break;
    case 21:
      break;
    default:
      (Ke(t, e), et(e));
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ff(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (wr(o, ""), (r.flags &= -33));
          var l = Ru(e);
          qs(e, l, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Ru(e);
          Js(e, a, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (u) {
      re(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function S0(e, t, n) {
  ((P = e), hf(e));
}
function hf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P,
      l = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || co;
      if (!s) {
        var a = o.alternate,
          u = (a !== null && a.memoizedState !== null) || ye;
        a = co;
        var c = ye;
        if (((co = s), (ye = u) && !c))
          for (P = o; P !== null; )
            ((s = P),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Lu(o)
                : u !== null
                  ? ((u.return = s), (P = u))
                  : Lu(o));
        for (; l !== null; ) ((P = l), hf(l), (l = l.sibling));
        ((P = o), (co = a), (ye = c));
      }
      _u(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (P = l)) : _u(e);
  }
}
function _u(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && xu(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xu(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var h = f.dehydrated;
                    h !== null && Sr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        ye || (t.flags & 512 && Xs(t));
      } catch (x) {
        re(t, t.return, x);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (P = n));
      break;
    }
    P = t.return;
  }
}
function Iu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (P = n));
      break;
    }
    P = t.return;
  }
}
function Lu(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vl(4, t);
          } catch (u) {
            re(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              re(t, o, u);
            }
          }
          var l = t.return;
          try {
            Xs(t);
          } catch (u) {
            re(t, l, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Xs(t);
          } catch (u) {
            re(t, s, u);
          }
      }
    } catch (u) {
      re(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (P = a));
      break;
    }
    P = t.return;
  }
}
var j0 = Math.ceil,
  el = kt.ReactCurrentDispatcher,
  na = kt.ReactCurrentOwner,
  Ve = kt.ReactCurrentBatchConfig,
  $ = 0,
  fe = null,
  se = null,
  he = 0,
  Ie = 0,
  En = Ht(0),
  ue = 0,
  Or = null,
  on = 0,
  gl = 0,
  ra = 0,
  hr = null,
  Ce = null,
  oa = 0,
  An = 1 / 0,
  ut = null,
  tl = !1,
  Zs = null,
  Dt = null,
  fo = !1,
  _t = null,
  nl = 0,
  xr = 0,
  ei = null,
  Po = -1,
  Ro = 0;
function Ne() {
  return $ & 6 ? le() : Po !== -1 ? Po : (Po = le());
}
function At(e) {
  return e.mode & 1
    ? $ & 2 && he !== 0
      ? he & -he
      : a0.transition !== null
        ? (Ro === 0 && (Ro = qc()), Ro)
        : ((e = U),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ld(e.type))),
          e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < xr) throw ((xr = 0), (ei = null), Error(z(185)));
  ($r(e, n, r),
    (!($ & 2) || e !== fe) &&
      (e === fe && (!($ & 2) && (gl |= n), ue === 4 && Rt(e, he)),
      Te(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((An = le() + 500), ml && Kt())));
}
function Te(e, t) {
  var n = e.callbackNode;
  ax(e, t);
  var r = Ao(e, e === fe ? he : 0);
  if (r === 0)
    (n !== null && Va(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Va(n), t === 1))
      (e.tag === 0 ? i0(Ou.bind(null, e)) : Sd(Ou.bind(null, e)),
        r0(function () {
          !($ & 6) && Kt();
        }),
        (n = null));
    else {
      switch (Zc(r)) {
        case 1:
          n = Ri;
          break;
        case 4:
          n = Xc;
          break;
        case 16:
          n = Do;
          break;
        case 536870912:
          n = Jc;
          break;
        default:
          n = Do;
      }
      n = Nf(n, xf.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function xf(e, t) {
  if (((Po = -1), (Ro = 0), $ & 6)) throw Error(z(327));
  var n = e.callbackNode;
  if (_n() && e.callbackNode !== n) return null;
  var r = Ao(e, e === fe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var o = $;
    $ |= 2;
    var l = gf();
    (fe !== e || he !== t) && ((ut = null), (An = le() + 500), Zt(e, t));
    do
      try {
        z0();
        break;
      } catch (a) {
        vf(e, a);
      }
    while (1);
    (Vi(),
      (el.current = l),
      ($ = o),
      se !== null ? (t = 0) : ((fe = null), (he = 0), (t = ue)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Cs(e)), o !== 0 && ((r = o), (t = ti(e, o)))), t === 1)
    )
      throw ((n = Or), Zt(e, 0), Rt(e, r), Te(e, le()), n);
    if (t === 6) Rt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !E0(o) &&
          ((t = rl(e, r)),
          t === 2 && ((l = Cs(e)), l !== 0 && ((r = l), (t = ti(e, l)))),
          t === 1))
      )
        throw ((n = Or), Zt(e, 0), Rt(e, r), Te(e, le()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          Yt(e, Ce, ut);
          break;
        case 3:
          if (
            (Rt(e, r), (r & 130023424) === r && ((t = oa + 500 - le()), 10 < t))
          ) {
            if (Ao(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Ne(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Os(Yt.bind(null, e, Ce, ut), t);
            break;
          }
          Yt(e, Ce, ut);
          break;
        case 4:
          if ((Rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Xe(r);
            ((l = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~l));
          }
          if (
            ((r = o),
            (r = le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * j0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Os(Yt.bind(null, e, Ce, ut), r);
            break;
          }
          Yt(e, Ce, ut);
          break;
        case 5:
          Yt(e, Ce, ut);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return (Te(e, le()), e.callbackNode === n ? xf.bind(null, e) : null);
}
function ti(e, t) {
  var n = hr;
  return (
    e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && ni(t)),
    e
  );
}
function ni(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function E0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!qe(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Rt(e, t) {
  for (
    t &= ~ra,
      t &= ~gl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Ou(e) {
  if ($ & 6) throw Error(z(327));
  _n();
  var t = Ao(e, 0);
  if (!(t & 1)) return (Te(e, le()), null);
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Cs(e);
    r !== 0 && ((t = r), (n = ti(e, r)));
  }
  if (n === 1) throw ((n = Or), Zt(e, 0), Rt(e, t), Te(e, le()), n);
  if (n === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yt(e, Ce, ut),
    Te(e, le()),
    null
  );
}
function la(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    (($ = n), $ === 0 && ((An = le() + 500), ml && Kt()));
  }
}
function ln(e) {
  _t !== null && _t.tag === 0 && !($ & 6) && _n();
  var t = $;
  $ |= 1;
  var n = Ve.transition,
    r = U;
  try {
    if (((Ve.transition = null), (U = 1), e)) return e();
  } finally {
    ((U = r), (Ve.transition = n), ($ = t), !($ & 6) && Kt());
  }
}
function sa() {
  ((Ie = En.current), G(En));
}
function Zt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), n0(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch (($i(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Wo());
          break;
        case 3:
          (Fn(), G(Pe), G(we), Yi());
          break;
        case 5:
          Qi(r);
          break;
        case 4:
          Fn();
          break;
        case 13:
          G(q);
          break;
        case 19:
          G(q);
          break;
        case 10:
          Wi(r.type._context);
          break;
        case 22:
        case 23:
          sa();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (se = e = $t(e.current, null)),
    (he = Ie = t),
    (ue = 0),
    (Or = null),
    (ra = gl = on = 0),
    (Ce = hr = null),
    Jt !== null)
  ) {
    for (t = 0; t < Jt.length; t++)
      if (((n = Jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          ((l.next = o), (r.next = s));
        }
        n.pending = r;
      }
    Jt = null;
  }
  return e;
}
function vf(e, t) {
  do {
    var n = se;
    try {
      if ((Vi(), (Eo.current = Zo), qo)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        qo = !1;
      }
      if (
        ((rn = 0),
        (de = ae = ee = null),
        (pr = !1),
        (_r = 0),
        (na.current = null),
        n === null || n.return === null)
      ) {
        ((ue = 1), (Or = t), (se = null));
        break;
      }
      e: {
        var l = e,
          s = n.return,
          a = n,
          u = t;
        if (
          ((t = he),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            f = a,
            h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var x = f.alternate;
            x
              ? ((f.updateQueue = x.updateQueue),
                (f.memoizedState = x.memoizedState),
                (f.lanes = x.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var w = ku(s);
          if (w !== null) {
            ((w.flags &= -257),
              Nu(w, s, a, l, t),
              w.mode & 1 && bu(l, c, t),
              (t = w),
              (u = c));
            var b = t.updateQueue;
            if (b === null) {
              var g = new Set();
              (g.add(u), (t.updateQueue = g));
            } else b.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (bu(l, c, t), ia());
              break e;
            }
            u = Error(z(426));
          }
        } else if (X && a.mode & 1) {
          var y = ku(s);
          if (y !== null) {
            (!(y.flags & 65536) && (y.flags |= 256),
              Nu(y, s, a, l, t),
              Ui(Dn(u, a)));
            break e;
          }
        }
        ((l = u = Dn(u, a)),
          ue !== 4 && (ue = 2),
          hr === null ? (hr = [l]) : hr.push(l),
          (l = s));
        do {
          switch (l.tag) {
            case 3:
              ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
              var p = Zd(l, u, t);
              hu(l, p);
              break e;
            case 1:
              a = u;
              var d = l.type,
                v = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Dt === null || !Dt.has(v))))
              ) {
                ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
                var k = ef(l, a, t);
                hu(l, k);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      wf(n);
    } catch (N) {
      ((t = N), se === n && n !== null && (se = n = n.return));
      continue;
    }
    break;
  } while (1);
}
function gf() {
  var e = el.current;
  return ((el.current = Zo), e === null ? Zo : e);
}
function ia() {
  ((ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    fe === null || (!(on & 268435455) && !(gl & 268435455)) || Rt(fe, he));
}
function rl(e, t) {
  var n = $;
  $ |= 2;
  var r = gf();
  (fe !== e || he !== t) && ((ut = null), Zt(e, t));
  do
    try {
      C0();
      break;
    } catch (o) {
      vf(e, o);
    }
  while (1);
  if ((Vi(), ($ = n), (el.current = r), se !== null)) throw Error(z(261));
  return ((fe = null), (he = 0), ue);
}
function C0() {
  for (; se !== null; ) yf(se);
}
function z0() {
  for (; se !== null && !Zh(); ) yf(se);
}
function yf(e) {
  var t = kf(e.alternate, e, Ie);
  ((e.memoizedProps = e.pendingProps),
    t === null ? wf(e) : (se = t),
    (na.current = null));
}
function wf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = b0(n, t)), n !== null)) {
        ((n.flags &= 32767), (se = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ue = 6), (se = null));
        return;
      }
    } else if (((n = w0(n, t, Ie)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function Yt(e, t, n) {
  var r = U,
    o = Ve.transition;
  try {
    ((Ve.transition = null), (U = 1), P0(e, t, n, r));
  } finally {
    ((Ve.transition = o), (U = r));
  }
  return null;
}
function P0(e, t, n, r) {
  do _n();
  while (_t !== null);
  if ($ & 6) throw Error(z(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(z(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var l = n.lanes | n.childLanes;
  if (
    (ux(e, l),
    e === fe && ((se = fe = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      fo ||
      ((fo = !0),
      Nf(Do, function () {
        return (_n(), null);
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ((l = Ve.transition), (Ve.transition = null));
    var s = U;
    U = 1;
    var a = $;
    (($ |= 4),
      (na.current = null),
      N0(e, n),
      mf(n, e),
      Yx(Is),
      ($o = !!_s),
      (Is = _s = null),
      (e.current = n),
      S0(n),
      ex(),
      ($ = a),
      (U = s),
      (Ve.transition = l));
  } else e.current = n;
  if (
    (fo && ((fo = !1), (_t = e), (nl = o)),
    (l = e.pendingLanes),
    l === 0 && (Dt = null),
    rx(n.stateNode),
    Te(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (tl) throw ((tl = !1), (e = Zs), (Zs = null), e);
  return (
    nl & 1 && e.tag !== 0 && _n(),
    (l = e.pendingLanes),
    l & 1 ? (e === ei ? xr++ : ((xr = 0), (ei = e))) : (xr = 0),
    Kt(),
    null
  );
}
function _n() {
  if (_t !== null) {
    var e = Zc(nl),
      t = Ve.transition,
      n = U;
    try {
      if (((Ve.transition = null), (U = 16 > e ? 16 : e), _t === null))
        var r = !1;
      else {
        if (((e = _t), (_t = null), (nl = 0), $ & 6)) throw Error(z(331));
        var o = $;
        for ($ |= 4, P = e.current; P !== null; ) {
          var l = P,
            s = l.child;
          if (P.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (P = c; P !== null; ) {
                  var f = P;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(8, f, l);
                  }
                  var h = f.child;
                  if (h !== null) ((h.return = f), (P = h));
                  else
                    for (; P !== null; ) {
                      f = P;
                      var x = f.sibling,
                        w = f.return;
                      if ((df(f), f === c)) {
                        P = null;
                        break;
                      }
                      if (x !== null) {
                        ((x.return = w), (P = x));
                        break;
                      }
                      P = w;
                    }
                }
              }
              var b = l.alternate;
              if (b !== null) {
                var g = b.child;
                if (g !== null) {
                  b.child = null;
                  do {
                    var y = g.sibling;
                    ((g.sibling = null), (g = y));
                  } while (g !== null);
                }
              }
              P = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) ((s.return = l), (P = s));
          else
            e: for (; P !== null; ) {
              if (((l = P), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mr(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                ((p.return = l.return), (P = p));
                break e;
              }
              P = l.return;
            }
        }
        var d = e.current;
        for (P = d; P !== null; ) {
          s = P;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) ((v.return = s), (P = v));
          else
            e: for (s = d; P !== null; ) {
              if (((a = P), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vl(9, a);
                  }
                } catch (N) {
                  re(a, a.return, N);
                }
              if (a === s) {
                P = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                ((k.return = a.return), (P = k));
                break e;
              }
              P = a.return;
            }
        }
        if (
          (($ = o), Kt(), rt && typeof rt.onPostCommitFiberRoot == "function")
        )
          try {
            rt.onPostCommitFiberRoot(ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((U = n), (Ve.transition = t));
    }
  }
  return !1;
}
function Mu(e, t, n) {
  ((t = Dn(n, t)),
    (t = Zd(e, t, 1)),
    (e = Ft(e, t, 1)),
    (t = Ne()),
    e !== null && ($r(e, 1, t), Te(e, t)));
}
function re(e, t, n) {
  if (e.tag === 3) Mu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Mu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Dt === null || !Dt.has(r)))
        ) {
          ((e = Dn(n, e)),
            (e = ef(t, e, 1)),
            (t = Ft(t, e, 1)),
            (e = Ne()),
            t !== null && ($r(t, 1, e), Te(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function R0(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (he & n) === n &&
      (ue === 4 || (ue === 3 && (he & 130023424) === he && 500 > le() - oa)
        ? Zt(e, 0)
        : (ra |= n)),
    Te(e, t));
}
function bf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = to), (to <<= 1), !(to & 130023424) && (to = 4194304))
      : (t = 1));
  var n = Ne();
  ((e = gt(e, t)), e !== null && ($r(e, t, n), Te(e, n)));
}
function T0(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), bf(e, n));
}
function _0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  (r !== null && r.delete(t), bf(e, n));
}
var kf;
kf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((ze = !1), y0(e, t, n));
      ze = !!(e.flags & 131072);
    }
  else ((ze = !1), X && t.flags & 1048576 && jd(t, Go, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (zo(e, t), (e = t.pendingProps));
      var o = Ln(t, we.current);
      (Tn(t, n), (o = Ji(null, t, r, e, o, n)));
      var l = qi();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Re(r) ? ((l = !0), Ho(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ki(t),
            (o.updater = xl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Bs(t, r, e, n),
            (t = Hs(null, t, r, !0, l, n)))
          : ((t.tag = 0), X && l && Ai(t), be(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = L0(r)),
          (e = Ge(r, e)),
          o)
        ) {
          case 0:
            t = Ws(null, t, r, e, n);
            break e;
          case 1:
            t = Eu(null, t, r, e, n);
            break e;
          case 11:
            t = Su(null, t, r, e, n);
            break e;
          case 14:
            t = ju(null, t, r, Ge(r.type, e), n);
            break e;
        }
        throw Error(z(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ge(r, o)),
        Ws(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ge(r, o)),
        Eu(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((of(t), e === null)) throw Error(z(387));
        ((r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Td(e, t),
          Xo(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            ((o = Dn(Error(z(423)), t)), (t = Cu(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = Dn(Error(z(424)), t)), (t = Cu(e, t, r, n, o)));
            break e;
          } else
            for (
              Le = Mt(t.stateNode.containerInfo.firstChild),
                Oe = t,
                X = !0,
                Ye = null,
                n = Pd(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((On(), r === o)) {
            t = yt(e, t, n);
            break e;
          }
          be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _d(t),
        e === null && As(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Ls(r, o) ? (s = null) : l !== null && Ls(r, l) && (t.flags |= 32),
        rf(e, t),
        be(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && As(t), null);
    case 13:
      return lf(e, t, n);
    case 4:
      return (
        Gi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Mn(t, null, r, n)) : be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ge(r, o)),
        Su(e, t, r, o, n)
      );
    case 7:
      return (be(e, t, t.pendingProps, n), t.child);
    case 8:
      return (be(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (be(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (s = o.value),
          W(Qo, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (qe(l.value, s)) {
            if (l.children === o.children && !Pe.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                s = l.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      ((u = mt(-1, n & -n)), (u.tag = 2));
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        (f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (c.pending = u));
                      }
                    }
                    ((l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      $s(l.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(z(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  $s(s, n, t),
                  (s = l.sibling));
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    ((l.return = s.return), (s = l));
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        (be(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Tn(t, n),
        (o = We(o)),
        (r = r(o)),
        (t.flags |= 1),
        be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ge(r, t.pendingProps)),
        (o = Ge(r.type, o)),
        ju(e, t, r, o, n)
      );
    case 15:
      return tf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ge(r, o)),
        zo(e, t),
        (t.tag = 1),
        Re(r) ? ((e = !0), Ho(t)) : (e = !1),
        Tn(t, n),
        qd(t, r, o),
        Bs(t, r, o, n),
        Hs(null, t, r, !0, e, n)
      );
    case 19:
      return sf(e, t, n);
    case 22:
      return nf(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function Nf(e, t) {
  return Yc(e, t);
}
function I0(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Be(e, t, n, r) {
  return new I0(e, t, n, r);
}
function aa(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function L0(e) {
  if (typeof e == "function") return aa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ci)) return 11;
    if (e === zi) return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function To(e, t, n, r, o, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) aa(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case xn:
        return en(n.children, o, l, t);
      case Ei:
        ((s = 8), (o |= 8));
        break;
      case fs:
        return (
          (e = Be(12, n, t, o | 2)),
          (e.elementType = fs),
          (e.lanes = l),
          e
        );
      case ps:
        return ((e = Be(13, n, t, o)), (e.elementType = ps), (e.lanes = l), e);
      case ms:
        return ((e = Be(19, n, t, o)), (e.elementType = ms), (e.lanes = l), e);
      case _c:
        return yl(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rc:
              s = 10;
              break e;
            case Tc:
              s = 9;
              break e;
            case Ci:
              s = 11;
              break e;
            case zi:
              s = 14;
              break e;
            case Ct:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Be(s, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = l),
    t
  );
}
function en(e, t, n, r) {
  return ((e = Be(7, e, r, t)), (e.lanes = n), e);
}
function yl(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = _c),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ns(e, t, n) {
  return ((e = Be(6, e, null, t)), (e.lanes = n), e);
}
function rs(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function O0(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fl(0)),
    (this.expirationTimes = Fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function ua(e, t, n, r, o, l, s, a, u) {
  return (
    (e = new O0(e, t, n, a, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Be(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ki(l),
    e
  );
}
function M0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: hn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Sf(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (dn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Re(n)) return Nd(e, n, t);
  }
  return t;
}
function jf(e, t, n, r, o, l, s, a, u) {
  return (
    (e = ua(n, r, !0, e, o, l, s, a, u)),
    (e.context = Sf(null)),
    (n = e.current),
    (r = Ne()),
    (o = At(n)),
    (l = mt(r, o)),
    (l.callback = t ?? null),
    Ft(n, l, o),
    (e.current.lanes = o),
    $r(e, o, r),
    Te(e, r),
    e
  );
}
function wl(e, t, n, r) {
  var o = t.current,
    l = Ne(),
    s = At(o);
  return (
    (n = Sf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = mt(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ft(o, t, s)),
    e !== null && (Je(e, o, s, l), jo(e, o, s)),
    s
  );
}
function ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ca(e, t) {
  (Fu(e, t), (e = e.alternate) && Fu(e, t));
}
function F0() {
  return null;
}
var Ef =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function da(e) {
  this._internalRoot = e;
}
bl.prototype.render = da.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  wl(e, t, null, null);
};
bl.prototype.unmount = da.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (ln(function () {
      wl(null, e, null, null);
    }),
      (t[vt] = null));
  }
};
function bl(e) {
  this._internalRoot = e;
}
bl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = nd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++);
    (Pt.splice(n, 0, e), n === 0 && od(e));
  }
};
function fa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Du() {}
function D0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var c = ol(s);
        l.call(c);
      };
    }
    var s = jf(t, r, e, 0, null, !1, !1, "", Du);
    return (
      (e._reactRootContainer = s),
      (e[vt] = s.current),
      Cr(e.nodeType === 8 ? e.parentNode : e),
      ln(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = ol(u);
      a.call(c);
    };
  }
  var u = ua(e, 0, !1, null, null, !1, !1, "", Du);
  return (
    (e._reactRootContainer = u),
    (e[vt] = u.current),
    Cr(e.nodeType === 8 ? e.parentNode : e),
    ln(function () {
      wl(t, u, n, r);
    }),
    u
  );
}
function Nl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var u = ol(s);
        a.call(u);
      };
    }
    wl(t, s, e, o);
  } else s = D0(n, t, e, o, r);
  return ol(s);
}
ed = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = sr(t.pendingLanes);
        n !== 0 &&
          (Ti(t, n | 1), Te(t, le()), !($ & 6) && ((An = le() + 500), Kt()));
      }
      break;
    case 13:
      (ln(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var o = Ne();
          Je(r, e, 1, o);
        }
      }),
        ca(e, 1));
  }
};
_i = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      Je(t, e, 134217728, n);
    }
    ca(e, 134217728);
  }
};
td = function (e) {
  if (e.tag === 13) {
    var t = At(e),
      n = gt(e, t);
    if (n !== null) {
      var r = Ne();
      Je(n, e, t, r);
    }
    ca(e, t);
  }
};
nd = function () {
  return U;
};
rd = function (e, t) {
  var n = U;
  try {
    return ((U = e), t());
  } finally {
    U = n;
  }
};
Ss = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = pl(r);
            if (!o) throw Error(z(90));
            (Lc(r), vs(r, o));
          }
        }
      }
      break;
    case "textarea":
      Mc(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Cn(e, !!n.multiple, t, !1));
  }
};
Vc = la;
Wc = ln;
var A0 = { usingClientEntryPoint: !1, Events: [Br, wn, pl, Uc, Bc, la] },
  nr = {
    findFiberByHostInstance: Xt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  $0 = {
    bundleType: nr.bundleType,
    version: nr.version,
    rendererPackageName: nr.rendererPackageName,
    rendererConfig: nr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Gc(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: nr.findFiberByHostInstance || F0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!po.isDisabled && po.supportsFiber)
    try {
      ((ul = po.inject($0)), (rt = po));
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A0;
Fe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fa(t)) throw Error(z(200));
  return M0(e, t, null, n);
};
Fe.createRoot = function (e, t) {
  if (!fa(e)) throw Error(z(299));
  var n = !1,
    r = "",
    o = Ef;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ua(e, 1, !1, null, null, n, !1, r, o)),
    (e[vt] = t.current),
    Cr(e.nodeType === 8 ? e.parentNode : e),
    new da(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return ((e = Gc(t)), (e = e === null ? null : e.stateNode), e);
};
Fe.flushSync = function (e) {
  return ln(e);
};
Fe.hydrate = function (e, t, n) {
  if (!kl(t)) throw Error(z(200));
  return Nl(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
  if (!fa(e)) throw Error(z(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    s = Ef;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = jf(t, null, e, 1, n ?? null, o, !1, l, s)),
    (e[vt] = t.current),
    Cr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new bl(t);
};
Fe.render = function (e, t, n) {
  if (!kl(t)) throw Error(z(200));
  return Nl(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
  if (!kl(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (ln(function () {
        Nl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[vt] = null));
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = la;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!kl(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Nl(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function Cf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cf);
    } catch (e) {
      console.error(e);
    }
}
(Cf(), (Ec.exports = Fe));
var Sl = Ec.exports;
const U0 = qu(Sl),
  B0 = 1,
  V0 = 1e6;
let os = 0;
function W0() {
  return ((os = (os + 1) % 2147483647), os.toString());
}
const ls = {},
  Au = (e) => {
    if (e in ls) return;
    const t = setTimeout(() => {
      (delete ls[e], vr({ type: "REMOVE_TOAST", toastId: e }));
    }, V0);
    ls[e] = t;
  },
  H0 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, B0) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Au(n)
            : e.toasts.forEach((r) => {
                Au(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  _o = [];
let Io = { toasts: [] };
function vr(e) {
  ((Io = H0(Io, e)),
    _o.forEach((t) => {
      t(Io);
    }));
}
function K0({ ...e }) {
  const t = W0(),
    n = (o) => vr({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => vr({ type: "DISMISS_TOAST", toastId: t });
  return (
    vr({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Wr() {
  const [e, t] = m.useState(Io);
  return (
    m.useEffect(
      () => (
        _o.push(t),
        () => {
          const n = _o.indexOf(t);
          n > -1 && _o.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: K0,
      dismiss: (n) => vr({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ke(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function $u(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function zf(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const l = $u(o, t);
      return (!n && typeof l == "function" && (n = !0), l);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const l = r[o];
          typeof l == "function" ? l() : $u(e[o], null);
        }
      };
  };
}
function wt(...e) {
  return m.useCallback(zf(...e), e);
}
function pa(e, t = []) {
  let n = [];
  function r(l, s) {
    const a = m.createContext(s),
      u = n.length;
    n = [...n, s];
    const c = (h) => {
      var p;
      const { scope: x, children: w, ...b } = h,
        g = ((p = x == null ? void 0 : x[e]) == null ? void 0 : p[u]) || a,
        y = m.useMemo(() => b, Object.values(b));
      return i.jsx(g.Provider, { value: y, children: w });
    };
    c.displayName = l + "Provider";
    function f(h, x) {
      var g;
      const w = ((g = x == null ? void 0 : x[e]) == null ? void 0 : g[u]) || a,
        b = m.useContext(w);
      if (b) return b;
      if (s !== void 0) return s;
      throw new Error(`\`${h}\` must be used within \`${l}\``);
    }
    return [c, f];
  }
  const o = () => {
    const l = n.map((s) => m.createContext(s));
    return function (a) {
      const u = (a == null ? void 0 : a[e]) || l;
      return m.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: u } }), [a, u]);
    };
  };
  return ((o.scopeName = e), [r, G0(o, ...t)]);
}
function G0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (l) {
      const s = r.reduce((a, { useScope: u, scopeName: c }) => {
        const h = u(l)[`__scope${c}`];
        return { ...a, ...h };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function ll(e) {
  const t = Y0(e),
    n = m.forwardRef((r, o) => {
      const { children: l, ...s } = r,
        a = m.Children.toArray(l),
        u = a.find(J0);
      if (u) {
        const c = u.props.children,
          f = a.map((h) =>
            h === u
              ? m.Children.count(c) > 1
                ? m.Children.only(null)
                : m.isValidElement(c)
                  ? c.props.children
                  : null
              : h,
          );
        return i.jsx(t, {
          ...s,
          ref: o,
          children: m.isValidElement(c) ? m.cloneElement(c, void 0, f) : null,
        });
      }
      return i.jsx(t, { ...s, ref: o, children: l });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var Q0 = ll("Slot");
function Y0(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...l } = n;
    if (m.isValidElement(o)) {
      const s = Z0(o),
        a = q0(l, o.props);
      return (
        o.type !== m.Fragment && (a.ref = r ? zf(r, s) : s),
        m.cloneElement(o, a)
      );
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var X0 = Symbol("radix.slottable");
function J0(e) {
  return (
    m.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === X0
  );
}
function q0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? o && l
        ? (n[r] = (...a) => {
            const u = l(...a);
            return (o(...a), u);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...l })
        : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Z0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function ev(e) {
  const t = e + "CollectionProvider",
    [n, r] = pa(t),
    [o, l] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: y, children: p } = g,
        d = Et.useRef(null),
        v = Et.useRef(new Map()).current;
      return i.jsx(o, { scope: y, itemMap: v, collectionRef: d, children: p });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    u = ll(a),
    c = Et.forwardRef((g, y) => {
      const { scope: p, children: d } = g,
        v = l(a, p),
        k = wt(y, v.collectionRef);
      return i.jsx(u, { ref: k, children: d });
    });
  c.displayName = a;
  const f = e + "CollectionItemSlot",
    h = "data-radix-collection-item",
    x = ll(f),
    w = Et.forwardRef((g, y) => {
      const { scope: p, children: d, ...v } = g,
        k = Et.useRef(null),
        N = wt(y, k),
        E = l(f, p);
      return (
        Et.useEffect(
          () => (
            E.itemMap.set(k, { ref: k, ...v }),
            () => void E.itemMap.delete(k)
          ),
        ),
        i.jsx(x, { [h]: "", ref: N, children: d })
      );
    });
  w.displayName = f;
  function b(g) {
    const y = l(e + "CollectionConsumer", g);
    return Et.useCallback(() => {
      const d = y.collectionRef.current;
      if (!d) return [];
      const v = Array.from(d.querySelectorAll(`[${h}]`));
      return Array.from(y.itemMap.values()).sort(
        (E, C) => v.indexOf(E.ref.current) - v.indexOf(C.ref.current),
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [{ Provider: s, Slot: c, ItemSlot: w }, b, r];
}
var tv = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ae = tv.reduce((e, t) => {
    const n = ll(`Primitive.${t}`),
      r = m.forwardRef((o, l) => {
        const { asChild: s, ...a } = o,
          u = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          i.jsx(u, { ...a, ref: l })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function Pf(e, t) {
  e && Sl.flushSync(() => e.dispatchEvent(t));
}
function sn(e) {
  const t = m.useRef(e);
  return (
    m.useEffect(() => {
      t.current = e;
    }),
    m.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function nv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = sn(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var rv = "DismissableLayer",
  ri = "dismissableLayer.update",
  ov = "dismissableLayer.pointerDownOutside",
  lv = "dismissableLayer.focusOutside",
  Uu,
  Rf = m.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Tf = m.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: l,
        onInteractOutside: s,
        onDismiss: a,
        ...u
      } = e,
      c = m.useContext(Rf),
      [f, h] = m.useState(null),
      x =
        (f == null ? void 0 : f.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, w] = m.useState({}),
      b = wt(t, (C) => h(C)),
      g = Array.from(c.layers),
      [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = g.indexOf(y),
      d = f ? g.indexOf(f) : -1,
      v = c.layersWithOutsidePointerEventsDisabled.size > 0,
      k = d >= p,
      N = iv((C) => {
        const S = C.target,
          _ = [...c.branches].some((I) => I.contains(S));
        !k ||
          _ ||
          (o == null || o(C),
          s == null || s(C),
          C.defaultPrevented || a == null || a());
      }, x),
      E = av((C) => {
        const S = C.target;
        [...c.branches].some((I) => I.contains(S)) ||
          (l == null || l(C),
          s == null || s(C),
          C.defaultPrevented || a == null || a());
      }, x);
    return (
      nv((C) => {
        d === c.layers.size - 1 &&
          (r == null || r(C),
          !C.defaultPrevented && a && (C.preventDefault(), a()));
      }, x),
      m.useEffect(() => {
        if (f)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Uu = x.body.style.pointerEvents),
                (x.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(f)),
            c.layers.add(f),
            Bu(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (x.body.style.pointerEvents = Uu);
            }
          );
      }, [f, x, n, c]),
      m.useEffect(
        () => () => {
          f &&
            (c.layers.delete(f),
            c.layersWithOutsidePointerEventsDisabled.delete(f),
            Bu());
        },
        [f, c],
      ),
      m.useEffect(() => {
        const C = () => w({});
        return (
          document.addEventListener(ri, C),
          () => document.removeEventListener(ri, C)
        );
      }, []),
      i.jsx(Ae.div, {
        ...u,
        ref: b,
        style: {
          pointerEvents: v ? (k ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ke(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: ke(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: ke(
          e.onPointerDownCapture,
          N.onPointerDownCapture,
        ),
      })
    );
  });
Tf.displayName = rv;
var sv = "DismissableLayerBranch",
  _f = m.forwardRef((e, t) => {
    const n = m.useContext(Rf),
      r = m.useRef(null),
      o = wt(t, r);
    return (
      m.useEffect(() => {
        const l = r.current;
        if (l)
          return (
            n.branches.add(l),
            () => {
              n.branches.delete(l);
            }
          );
      }, [n.branches]),
      i.jsx(Ae.div, { ...e, ref: o })
    );
  });
_f.displayName = sv;
function iv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = sn(e),
    r = m.useRef(!1),
    o = m.useRef(() => {});
  return (
    m.useEffect(() => {
      const l = (a) => {
          if (a.target && !r.current) {
            let u = function () {
              If(ov, n, c, { discrete: !0 });
            };
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = u),
                t.addEventListener("click", o.current, { once: !0 }))
              : u();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", l);
        }, 0);
      return () => {
        (window.clearTimeout(s),
          t.removeEventListener("pointerdown", l),
          t.removeEventListener("click", o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function av(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = sn(e),
    r = m.useRef(!1);
  return (
    m.useEffect(() => {
      const o = (l) => {
        l.target &&
          !r.current &&
          If(lv, n, { originalEvent: l }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Bu() {
  const e = new CustomEvent(ri);
  document.dispatchEvent(e);
}
function If(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? Pf(o, l) : o.dispatchEvent(l));
}
var uv = Tf,
  cv = _f,
  $n = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {},
  dv = "Portal",
  Lf = m.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, l] = m.useState(!1);
    $n(() => l(!0), []);
    const s =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? U0.createPortal(i.jsx(Ae.div, { ...r, ref: t }), s) : null;
  });
Lf.displayName = dv;
function fv(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var ma = (e) => {
  const { present: t, children: n } = e,
    r = pv(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n),
    l = wt(r.ref, mv(o));
  return typeof n == "function" || r.isPresent
    ? m.cloneElement(o, { ref: l })
    : null;
};
ma.displayName = "Presence";
function pv(e) {
  const [t, n] = m.useState(),
    r = m.useRef(null),
    o = m.useRef(e),
    l = m.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, u] = fv(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    m.useEffect(() => {
      const c = mo(r.current);
      l.current = a === "mounted" ? c : "none";
    }, [a]),
    $n(() => {
      const c = r.current,
        f = o.current;
      if (f !== e) {
        const x = l.current,
          w = mo(c);
        (e
          ? u("MOUNT")
          : w === "none" || (c == null ? void 0 : c.display) === "none"
            ? u("UNMOUNT")
            : u(f && x !== w ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, u]),
    $n(() => {
      if (t) {
        let c;
        const f = t.ownerDocument.defaultView ?? window,
          h = (w) => {
            const g = mo(r.current).includes(w.animationName);
            if (w.target === t && g && (u("ANIMATION_END"), !o.current)) {
              const y = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (c = f.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = y);
                })));
            }
          },
          x = (w) => {
            w.target === t && (l.current = mo(r.current));
          };
        return (
          t.addEventListener("animationstart", x),
          t.addEventListener("animationcancel", h),
          t.addEventListener("animationend", h),
          () => {
            (f.clearTimeout(c),
              t.removeEventListener("animationstart", x),
              t.removeEventListener("animationcancel", h),
              t.removeEventListener("animationend", h));
          }
        );
      } else u("ANIMATION_END");
    }, [t, u]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: m.useCallback((c) => {
        ((r.current = c ? getComputedStyle(c) : null), n(c));
      }, []),
    }
  );
}
function mo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function mv(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var hv = Gp[" useInsertionEffect ".trim().toString()] || $n;
function Of({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, l, s] = xv({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    u = a ? e : o;
  {
    const f = m.useRef(e !== void 0);
    m.useEffect(() => {
      const h = f.current;
      (h !== a &&
        console.warn(
          `${r} is changing from ${h ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (f.current = a));
    }, [a, r]);
  }
  const c = m.useCallback(
    (f) => {
      var h;
      if (a) {
        const x = vv(f) ? f(e) : f;
        x !== e && ((h = s.current) == null || h.call(s, x));
      } else l(f);
    },
    [a, e, l, s],
  );
  return [u, c];
}
function xv({ defaultProp: e, onChange: t }) {
  const [n, r] = m.useState(e),
    o = m.useRef(n),
    l = m.useRef(t);
  return (
    hv(() => {
      l.current = t;
    }, [t]),
    m.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = l.current) == null || s.call(l, n), (o.current = n));
    }, [n, o]),
    [n, r, l]
  );
}
function vv(e) {
  return typeof e == "function";
}
var gv = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  yv = "VisuallyHidden",
  ha = m.forwardRef((e, t) =>
    i.jsx(Ae.span, { ...e, ref: t, style: { ...gv, ...e.style } }),
  );
ha.displayName = yv;
var xa = "ToastProvider",
  [va, wv, bv] = ev("Toast"),
  [Mf, Ey] = pa("Toast", [bv]),
  [kv, jl] = Mf(xa),
  Ff = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: l = 50,
        children: s,
      } = e,
      [a, u] = m.useState(null),
      [c, f] = m.useState(0),
      h = m.useRef(!1),
      x = m.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${xa}\`. Expected non-empty \`string\`.`,
        ),
      i.jsx(va.Provider, {
        scope: t,
        children: i.jsx(kv, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: l,
          toastCount: c,
          viewport: a,
          onViewportChange: u,
          onToastAdd: m.useCallback(() => f((w) => w + 1), []),
          onToastRemove: m.useCallback(() => f((w) => w - 1), []),
          isFocusedToastEscapeKeyDownRef: h,
          isClosePausedRef: x,
          children: s,
        }),
      })
    );
  };
Ff.displayName = xa;
var Df = "ToastViewport",
  Nv = ["F8"],
  oi = "toast.viewportPause",
  li = "toast.viewportResume",
  Af = m.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = Nv,
        label: o = "Notifications ({hotkey})",
        ...l
      } = e,
      s = jl(Df, n),
      a = wv(n),
      u = m.useRef(null),
      c = m.useRef(null),
      f = m.useRef(null),
      h = m.useRef(null),
      x = wt(t, h, s.onViewportChange),
      w = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      b = s.toastCount > 0;
    (m.useEffect(() => {
      const y = (p) => {
        var v;
        r.length !== 0 &&
          r.every((k) => p[k] || p.code === k) &&
          ((v = h.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", y),
        () => document.removeEventListener("keydown", y)
      );
    }, [r]),
      m.useEffect(() => {
        const y = u.current,
          p = h.current;
        if (b && y && p) {
          const d = () => {
              if (!s.isClosePausedRef.current) {
                const E = new CustomEvent(oi);
                (p.dispatchEvent(E), (s.isClosePausedRef.current = !0));
              }
            },
            v = () => {
              if (s.isClosePausedRef.current) {
                const E = new CustomEvent(li);
                (p.dispatchEvent(E), (s.isClosePausedRef.current = !1));
              }
            },
            k = (E) => {
              !y.contains(E.relatedTarget) && v();
            },
            N = () => {
              y.contains(document.activeElement) || v();
            };
          return (
            y.addEventListener("focusin", d),
            y.addEventListener("focusout", k),
            y.addEventListener("pointermove", d),
            y.addEventListener("pointerleave", N),
            window.addEventListener("blur", d),
            window.addEventListener("focus", v),
            () => {
              (y.removeEventListener("focusin", d),
                y.removeEventListener("focusout", k),
                y.removeEventListener("pointermove", d),
                y.removeEventListener("pointerleave", N),
                window.removeEventListener("blur", d),
                window.removeEventListener("focus", v));
            }
          );
        }
      }, [b, s.isClosePausedRef]));
    const g = m.useCallback(
      ({ tabbingDirection: y }) => {
        const d = a().map((v) => {
          const k = v.ref.current,
            N = [k, ...Mv(k)];
          return y === "forwards" ? N : N.reverse();
        });
        return (y === "forwards" ? d.reverse() : d).flat();
      },
      [a],
    );
    return (
      m.useEffect(() => {
        const y = h.current;
        if (y) {
          const p = (d) => {
            var N, E, C;
            const v = d.altKey || d.ctrlKey || d.metaKey;
            if (d.key === "Tab" && !v) {
              const S = document.activeElement,
                _ = d.shiftKey;
              if (d.target === y && _) {
                (N = c.current) == null || N.focus();
                return;
              }
              const ce = g({ tabbingDirection: _ ? "backwards" : "forwards" }),
                _e = ce.findIndex((F) => F === S);
              ss(ce.slice(_e + 1))
                ? d.preventDefault()
                : _
                  ? (E = c.current) == null || E.focus()
                  : (C = f.current) == null || C.focus();
            }
          };
          return (
            y.addEventListener("keydown", p),
            () => y.removeEventListener("keydown", p)
          );
        }
      }, [a, g]),
      i.jsxs(cv, {
        ref: u,
        role: "region",
        "aria-label": o.replace("{hotkey}", w),
        tabIndex: -1,
        style: { pointerEvents: b ? void 0 : "none" },
        children: [
          b &&
            i.jsx(si, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const y = g({ tabbingDirection: "forwards" });
                ss(y);
              },
            }),
          i.jsx(va.Slot, {
            scope: n,
            children: i.jsx(Ae.ol, { tabIndex: -1, ...l, ref: x }),
          }),
          b &&
            i.jsx(si, {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const y = g({ tabbingDirection: "backwards" });
                ss(y);
              },
            }),
        ],
      })
    );
  });
Af.displayName = Df;
var $f = "ToastFocusProxy",
  si = m.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      l = jl($f, n);
    return i.jsx(ha, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var c;
        const a = s.relatedTarget;
        !((c = l.viewport) != null && c.contains(a)) && r();
      },
    });
  });
si.displayName = $f;
var Hr = "Toast",
  Sv = "toast.swipeStart",
  jv = "toast.swipeMove",
  Ev = "toast.swipeCancel",
  Cv = "toast.swipeEnd",
  Uf = m.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: l, ...s } = e,
      [a, u] = Of({ prop: r, defaultProp: o ?? !0, onChange: l, caller: Hr });
    return i.jsx(ma, {
      present: n || a,
      children: i.jsx(Rv, {
        open: a,
        ...s,
        ref: t,
        onClose: () => u(!1),
        onPause: sn(e.onPause),
        onResume: sn(e.onResume),
        onSwipeStart: ke(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ke(e.onSwipeMove, (c) => {
          const { x: f, y: h } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "move"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${f}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${h}px`,
            ));
        }),
        onSwipeCancel: ke(e.onSwipeCancel, (c) => {
          (c.currentTarget.setAttribute("data-swipe", "cancel"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: ke(e.onSwipeEnd, (c) => {
          const { x: f, y: h } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "end"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${f}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${h}px`,
            ),
            u(!1));
        }),
      }),
    });
  });
Uf.displayName = Hr;
var [zv, Pv] = Mf(Hr, { onClose() {} }),
  Rv = m.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: l,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: u,
        onResume: c,
        onSwipeStart: f,
        onSwipeMove: h,
        onSwipeCancel: x,
        onSwipeEnd: w,
        ...b
      } = e,
      g = jl(Hr, n),
      [y, p] = m.useState(null),
      d = wt(t, (F) => p(F)),
      v = m.useRef(null),
      k = m.useRef(null),
      N = o || g.duration,
      E = m.useRef(0),
      C = m.useRef(N),
      S = m.useRef(0),
      { onToastAdd: _, onToastRemove: I } = g,
      Q = sn(() => {
        var oe;
        ((y == null ? void 0 : y.contains(document.activeElement)) &&
          ((oe = g.viewport) == null || oe.focus()),
          s());
      }),
      ce = m.useCallback(
        (F) => {
          !F ||
            F === 1 / 0 ||
            (window.clearTimeout(S.current),
            (E.current = new Date().getTime()),
            (S.current = window.setTimeout(Q, F)));
        },
        [Q],
      );
    (m.useEffect(() => {
      const F = g.viewport;
      if (F) {
        const oe = () => {
            (ce(C.current), c == null || c());
          },
          ne = () => {
            const pe = new Date().getTime() - E.current;
            ((C.current = C.current - pe),
              window.clearTimeout(S.current),
              u == null || u());
          };
        return (
          F.addEventListener(oi, ne),
          F.addEventListener(li, oe),
          () => {
            (F.removeEventListener(oi, ne), F.removeEventListener(li, oe));
          }
        );
      }
    }, [g.viewport, N, u, c, ce]),
      m.useEffect(() => {
        l && !g.isClosePausedRef.current && ce(N);
      }, [l, N, g.isClosePausedRef, ce]),
      m.useEffect(() => (_(), () => I()), [_, I]));
    const _e = m.useMemo(() => (y ? Qf(y) : null), [y]);
    return g.viewport
      ? i.jsxs(i.Fragment, {
          children: [
            _e &&
              i.jsx(Tv, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: _e,
              }),
            i.jsx(zv, {
              scope: n,
              onClose: Q,
              children: Sl.createPortal(
                i.jsx(va.ItemSlot, {
                  scope: n,
                  children: i.jsx(uv, {
                    asChild: !0,
                    onEscapeKeyDown: ke(a, () => {
                      (g.isFocusedToastEscapeKeyDownRef.current || Q(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: i.jsx(Ae.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": l ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...b,
                      ref: d,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ke(e.onKeyDown, (F) => {
                        F.key === "Escape" &&
                          (a == null || a(F.nativeEvent),
                          F.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            Q()));
                      }),
                      onPointerDown: ke(e.onPointerDown, (F) => {
                        F.button === 0 &&
                          (v.current = { x: F.clientX, y: F.clientY });
                      }),
                      onPointerMove: ke(e.onPointerMove, (F) => {
                        if (!v.current) return;
                        const oe = F.clientX - v.current.x,
                          ne = F.clientY - v.current.y,
                          pe = !!k.current,
                          j = ["left", "right"].includes(g.swipeDirection),
                          O = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          M = j ? O(0, oe) : 0,
                          B = j ? 0 : O(0, ne),
                          V = F.pointerType === "touch" ? 10 : 2,
                          H = { x: M, y: B },
                          Y = { originalEvent: F, delta: H };
                        pe
                          ? ((k.current = H), ho(jv, h, Y, { discrete: !1 }))
                          : Vu(H, g.swipeDirection, V)
                            ? ((k.current = H),
                              ho(Sv, f, Y, { discrete: !1 }),
                              F.target.setPointerCapture(F.pointerId))
                            : (Math.abs(oe) > V || Math.abs(ne) > V) &&
                              (v.current = null);
                      }),
                      onPointerUp: ke(e.onPointerUp, (F) => {
                        const oe = k.current,
                          ne = F.target;
                        if (
                          (ne.hasPointerCapture(F.pointerId) &&
                            ne.releasePointerCapture(F.pointerId),
                          (k.current = null),
                          (v.current = null),
                          oe)
                        ) {
                          const pe = F.currentTarget,
                            j = { originalEvent: F, delta: oe };
                          (Vu(oe, g.swipeDirection, g.swipeThreshold)
                            ? ho(Cv, w, j, { discrete: !0 })
                            : ho(Ev, x, j, { discrete: !0 }),
                            pe.addEventListener(
                              "click",
                              (O) => O.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  Tv = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = jl(Hr, t),
      [l, s] = m.useState(!1),
      [a, u] = m.useState(!1);
    return (
      Lv(() => s(!0)),
      m.useEffect(() => {
        const c = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(c);
      }, []),
      a
        ? null
        : i.jsx(Lf, {
            asChild: !0,
            children: i.jsx(ha, {
              ...r,
              children:
                l && i.jsxs(i.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  _v = "ToastTitle",
  Bf = m.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return i.jsx(Ae.div, { ...r, ref: t });
  });
Bf.displayName = _v;
var Iv = "ToastDescription",
  Vf = m.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return i.jsx(Ae.div, { ...r, ref: t });
  });
Vf.displayName = Iv;
var Wf = "ToastAction",
  Hf = m.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? i.jsx(Gf, {
          altText: n,
          asChild: !0,
          children: i.jsx(ga, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Wf}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Hf.displayName = Wf;
var Kf = "ToastClose",
  ga = m.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = Pv(Kf, n);
    return i.jsx(Gf, {
      asChild: !0,
      children: i.jsx(Ae.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ke(e.onClick, o.onClose),
      }),
    });
  });
ga.displayName = Kf;
var Gf = m.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return i.jsx(Ae.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Qf(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Ov(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          l = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (l) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...Qf(r));
      }
    }),
    t
  );
}
function ho(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    l = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? Pf(o, l) : o.dispatchEvent(l));
}
var Vu = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    l = r > o;
  return t === "left" || t === "right" ? l && r > n : !l && o > n;
};
function Lv(e = () => {}) {
  const t = sn(e);
  $n(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function Ov(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Mv(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ss(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var Fv = Ff,
  Yf = Af,
  Xf = Uf,
  Jf = Bf,
  qf = Vf,
  Zf = Hf,
  ep = ga;
function tp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = tp(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function np() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = tp(e)) && (r && (r += " "), (r += t));
  return r;
}
const Wu = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Hu = np,
  rp = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Hu(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: l } = t,
      s = Object.keys(o).map((c) => {
        const f = n == null ? void 0 : n[c],
          h = l == null ? void 0 : l[c];
        if (f === null) return null;
        const x = Wu(f) || Wu(h);
        return o[c][x];
      }),
      a =
        n &&
        Object.entries(n).reduce((c, f) => {
          let [h, x] = f;
          return (x === void 0 || (c[h] = x), c);
        }, {}),
      u =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, f) => {
              let { class: h, className: x, ...w } = f;
              return Object.entries(w).every((b) => {
                let [g, y] = b;
                return Array.isArray(y)
                  ? y.includes({ ...l, ...a }[g])
                  : { ...l, ...a }[g] === y;
              })
                ? [...c, h, x]
                : c;
            }, []);
    return Hu(
      e,
      s,
      u,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dv = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Av = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r) =>
      r ? r.toUpperCase() : n.toLowerCase(),
    ),
  Ku = (e) => {
    const t = Av(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  op = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim(),
  $v = (e) => {
    for (const t in e)
      if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Uv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bv = m.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: l,
      iconNode: s,
      ...a
    },
    u,
  ) =>
    m.createElement(
      "svg",
      {
        ref: u,
        ...Uv,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: op("lucide", o),
        ...(!l && !$v(a) && { "aria-hidden": "true" }),
        ...a,
      },
      [
        ...s.map(([c, f]) => m.createElement(c, f)),
        ...(Array.isArray(l) ? l : [l]),
      ],
    ),
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const El = (e, t) => {
  const n = m.forwardRef(({ className: r, ...o }, l) =>
    m.createElement(Bv, {
      ref: l,
      iconNode: t,
      className: op(`lucide-${Dv(Ku(e))}`, `lucide-${e}`, r),
      ...o,
    }),
  );
  return ((n.displayName = Ku(e)), n);
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vv = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Wv = El("check", Vv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hv = [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  ii = El("eye-off", Hv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kv = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  ai = El("eye", Kv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gv = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Qv = El("x", Gv),
  ya = "-",
  Yv = (e) => {
    const t = Jv(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(ya);
        return (a[0] === "" && a.length !== 1 && a.shift(), lp(a, t) || Xv(s));
      },
      getConflictingClassGroupIds: (s, a) => {
        const u = n[s] || [];
        return a && r[s] ? [...u, ...r[s]] : u;
      },
    };
  },
  lp = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? lp(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join(ya);
    return (s = t.validators.find(({ validator: a }) => a(l))) == null
      ? void 0
      : s.classGroupId;
  },
  Gu = /^\[(.+)\]$/,
  Xv = (e) => {
    if (Gu.test(e)) {
      const t = Gu.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Jv = (e) => {
    const { theme: t, classGroups: n } = e,
      r = { nextPart: new Map(), validators: [] };
    for (const o in n) ui(n[o], r, o, t);
    return r;
  },
  ui = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const l = o === "" ? t : Qu(t, o);
        l.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (qv(o)) {
          ui(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([l, s]) => {
        ui(s, Qu(t, l), n, r);
      });
    });
  },
  Qu = (e, t) => {
    let n = e;
    return (
      t.split(ya).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  qv = (e) => e.isThemeGetter,
  Zv = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (l, s) => {
      (n.set(l, s), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(l) {
        let s = n.get(l);
        if (s !== void 0) return s;
        if ((s = r.get(l)) !== void 0) return (o(l, s), s);
      },
      set(l, s) {
        n.has(l) ? n.set(l, s) : o(l, s);
      },
    };
  },
  ci = "!",
  di = ":",
  eg = di.length,
  tg = (e) => {
    const { prefix: t, experimentalParseClassName: n } = e;
    let r = (o) => {
      const l = [];
      let s = 0,
        a = 0,
        u = 0,
        c;
      for (let b = 0; b < o.length; b++) {
        let g = o[b];
        if (s === 0 && a === 0) {
          if (g === di) {
            (l.push(o.slice(u, b)), (u = b + eg));
            continue;
          }
          if (g === "/") {
            c = b;
            continue;
          }
        }
        g === "[" ? s++ : g === "]" ? s-- : g === "(" ? a++ : g === ")" && a--;
      }
      const f = l.length === 0 ? o : o.substring(u),
        h = ng(f),
        x = h !== f,
        w = c && c > u ? c - u : void 0;
      return {
        modifiers: l,
        hasImportantModifier: x,
        baseClassName: h,
        maybePostfixModifierPosition: w,
      };
    };
    if (t) {
      const o = t + di,
        l = r;
      r = (s) =>
        s.startsWith(o)
          ? l(s.substring(o.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: s,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (n) {
      const o = r;
      r = (l) => n({ className: l, parseClassName: o });
    }
    return r;
  },
  ng = (e) =>
    e.endsWith(ci)
      ? e.substring(0, e.length - 1)
      : e.startsWith(ci)
        ? e.substring(1)
        : e,
  rg = (e) => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
    return (r) => {
      if (r.length <= 1) return r;
      const o = [];
      let l = [];
      return (
        r.forEach((s) => {
          s[0] === "[" || t[s] ? (o.push(...l.sort(), s), (l = [])) : l.push(s);
        }),
        o.push(...l.sort()),
        o
      );
    };
  },
  og = (e) => ({
    cache: Zv(e.cacheSize),
    parseClassName: tg(e),
    sortModifiers: rg(e),
    ...Yv(e),
  }),
  lg = /\s+/,
  sg = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
        sortModifiers: l,
      } = t,
      s = [],
      a = e.trim().split(lg);
    let u = "";
    for (let c = a.length - 1; c >= 0; c -= 1) {
      const f = a[c],
        {
          isExternal: h,
          modifiers: x,
          hasImportantModifier: w,
          baseClassName: b,
          maybePostfixModifierPosition: g,
        } = n(f);
      if (h) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      let y = !!g,
        p = r(y ? b.substring(0, g) : b);
      if (!p) {
        if (!y) {
          u = f + (u.length > 0 ? " " + u : u);
          continue;
        }
        if (((p = r(b)), !p)) {
          u = f + (u.length > 0 ? " " + u : u);
          continue;
        }
        y = !1;
      }
      const d = l(x).join(":"),
        v = w ? d + ci : d,
        k = v + p;
      if (s.includes(k)) continue;
      s.push(k);
      const N = o(p, y);
      for (let E = 0; E < N.length; ++E) {
        const C = N[E];
        s.push(v + C);
      }
      u = f + (u.length > 0 ? " " + u : u);
    }
    return u;
  };
function ig() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = sp(t)) && (r && (r += " "), (r += n));
  return r;
}
const sp = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = sp(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function ag(e, ...t) {
  let n,
    r,
    o,
    l = s;
  function s(u) {
    const c = t.reduce((f, h) => h(f), e());
    return ((n = og(c)), (r = n.cache.get), (o = n.cache.set), (l = a), a(u));
  }
  function a(u) {
    const c = r(u);
    if (c) return c;
    const f = sg(u, n);
    return (o(u, f), f);
  }
  return function () {
    return l(ig.apply(null, arguments));
  };
}
const ie = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  ip = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ap = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  ug = /^\d+\/\d+$/,
  cg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  dg =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  fg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  pg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  mg =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  pn = (e) => ug.test(e),
  D = (e) => !!e && !Number.isNaN(Number(e)),
  jt = (e) => !!e && Number.isInteger(Number(e)),
  is = (e) => e.endsWith("%") && D(e.slice(0, -1)),
  at = (e) => cg.test(e),
  hg = () => !0,
  xg = (e) => dg.test(e) && !fg.test(e),
  up = () => !1,
  vg = (e) => pg.test(e),
  gg = (e) => mg.test(e),
  yg = (e) => !R(e) && !T(e),
  wg = (e) => Kn(e, fp, up),
  R = (e) => ip.test(e),
  Gt = (e) => Kn(e, pp, xg),
  as = (e) => Kn(e, jg, D),
  Yu = (e) => Kn(e, cp, up),
  bg = (e) => Kn(e, dp, gg),
  xo = (e) => Kn(e, mp, vg),
  T = (e) => ap.test(e),
  rr = (e) => Gn(e, pp),
  kg = (e) => Gn(e, Eg),
  Xu = (e) => Gn(e, cp),
  Ng = (e) => Gn(e, fp),
  Sg = (e) => Gn(e, dp),
  vo = (e) => Gn(e, mp, !0),
  Kn = (e, t, n) => {
    const r = ip.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Gn = (e, t, n = !1) => {
    const r = ap.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  cp = (e) => e === "position" || e === "percentage",
  dp = (e) => e === "image" || e === "url",
  fp = (e) => e === "length" || e === "size" || e === "bg-size",
  pp = (e) => e === "length",
  jg = (e) => e === "number",
  Eg = (e) => e === "family-name",
  mp = (e) => e === "shadow",
  Cg = () => {
    const e = ie("color"),
      t = ie("font"),
      n = ie("text"),
      r = ie("font-weight"),
      o = ie("tracking"),
      l = ie("leading"),
      s = ie("breakpoint"),
      a = ie("container"),
      u = ie("spacing"),
      c = ie("radius"),
      f = ie("shadow"),
      h = ie("inset-shadow"),
      x = ie("text-shadow"),
      w = ie("drop-shadow"),
      b = ie("blur"),
      g = ie("perspective"),
      y = ie("aspect"),
      p = ie("ease"),
      d = ie("animate"),
      v = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      k = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      N = () => [...k(), T, R],
      E = () => ["auto", "hidden", "clip", "visible", "scroll"],
      C = () => ["auto", "contain", "none"],
      S = () => [T, R, u],
      _ = () => [pn, "full", "auto", ...S()],
      I = () => [jt, "none", "subgrid", T, R],
      Q = () => ["auto", { span: ["full", jt, T, R] }, jt, T, R],
      ce = () => [jt, "auto", T, R],
      _e = () => ["auto", "min", "max", "fr", T, R],
      F = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      oe = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      ne = () => ["auto", ...S()],
      pe = () => [
        pn,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...S(),
      ],
      j = () => [e, T, R],
      O = () => [...k(), Xu, Yu, { position: [T, R] }],
      M = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      B = () => ["auto", "cover", "contain", Ng, wg, { size: [T, R] }],
      V = () => [is, rr, Gt],
      H = () => ["", "none", "full", c, T, R],
      Y = () => ["", D, rr, Gt],
      Nt = () => ["solid", "dashed", "dotted", "double"],
      Ze = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      J = () => [D, is, Xu, Yu],
      ka = () => ["", "none", b, T, R],
      Kr = () => ["none", D, T, R],
      Gr = () => ["none", D, T, R],
      Pl = () => [D, T, R],
      Qr = () => [pn, "full", ...S()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [at],
        breakpoint: [at],
        color: [hg],
        container: [at],
        "drop-shadow": [at],
        ease: ["in", "out", "in-out"],
        font: [yg],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [at],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [at],
        shadow: [at],
        spacing: ["px", D],
        text: [at],
        "text-shadow": [at],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", pn, R, T, y] }],
        container: ["container"],
        columns: [{ columns: [D, R, T, a] }],
        "break-after": [{ "break-after": v() }],
        "break-before": [{ "break-before": v() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: N() }],
        overflow: [{ overflow: E() }],
        "overflow-x": [{ "overflow-x": E() }],
        "overflow-y": [{ "overflow-y": E() }],
        overscroll: [{ overscroll: C() }],
        "overscroll-x": [{ "overscroll-x": C() }],
        "overscroll-y": [{ "overscroll-y": C() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: _() }],
        "inset-x": [{ "inset-x": _() }],
        "inset-y": [{ "inset-y": _() }],
        start: [{ start: _() }],
        end: [{ end: _() }],
        top: [{ top: _() }],
        right: [{ right: _() }],
        bottom: [{ bottom: _() }],
        left: [{ left: _() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [jt, "auto", T, R] }],
        basis: [{ basis: [pn, "full", "auto", a, ...S()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [D, pn, "auto", "initial", "none", R] }],
        grow: [{ grow: ["", D, T, R] }],
        shrink: [{ shrink: ["", D, T, R] }],
        order: [{ order: [jt, "first", "last", "none", T, R] }],
        "grid-cols": [{ "grid-cols": I() }],
        "col-start-end": [{ col: Q() }],
        "col-start": [{ "col-start": ce() }],
        "col-end": [{ "col-end": ce() }],
        "grid-rows": [{ "grid-rows": I() }],
        "row-start-end": [{ row: Q() }],
        "row-start": [{ "row-start": ce() }],
        "row-end": [{ "row-end": ce() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": _e() }],
        "auto-rows": [{ "auto-rows": _e() }],
        gap: [{ gap: S() }],
        "gap-x": [{ "gap-x": S() }],
        "gap-y": [{ "gap-y": S() }],
        "justify-content": [{ justify: [...F(), "normal"] }],
        "justify-items": [{ "justify-items": [...oe(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...oe()] }],
        "align-content": [{ content: ["normal", ...F()] }],
        "align-items": [{ items: [...oe(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...oe(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": F() }],
        "place-items": [{ "place-items": [...oe(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...oe()] }],
        p: [{ p: S() }],
        px: [{ px: S() }],
        py: [{ py: S() }],
        ps: [{ ps: S() }],
        pe: [{ pe: S() }],
        pt: [{ pt: S() }],
        pr: [{ pr: S() }],
        pb: [{ pb: S() }],
        pl: [{ pl: S() }],
        m: [{ m: ne() }],
        mx: [{ mx: ne() }],
        my: [{ my: ne() }],
        ms: [{ ms: ne() }],
        me: [{ me: ne() }],
        mt: [{ mt: ne() }],
        mr: [{ mr: ne() }],
        mb: [{ mb: ne() }],
        ml: [{ ml: ne() }],
        "space-x": [{ "space-x": S() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": S() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: pe() }],
        w: [{ w: [a, "screen", ...pe()] }],
        "min-w": [{ "min-w": [a, "screen", "none", ...pe()] }],
        "max-w": [
          { "max-w": [a, "screen", "none", "prose", { screen: [s] }, ...pe()] },
        ],
        h: [{ h: ["screen", "lh", ...pe()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...pe()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...pe()] }],
        "font-size": [{ text: ["base", n, rr, Gt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, T, as] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              is,
              R,
            ],
          },
        ],
        "font-family": [{ font: [kg, R, t] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [o, T, R] }],
        "line-clamp": [{ "line-clamp": [D, "none", T, as] }],
        leading: [{ leading: [l, ...S()] }],
        "list-image": [{ "list-image": ["none", T, R] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", T, R] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: j() }],
        "text-color": [{ text: j() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Nt(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [D, "from-font", "auto", T, Gt] },
        ],
        "text-decoration-color": [{ decoration: j() }],
        "underline-offset": [{ "underline-offset": [D, "auto", T, R] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: S() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              T,
              R,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", T, R] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: O() }],
        "bg-repeat": [{ bg: M() }],
        "bg-size": [{ bg: B() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  jt,
                  T,
                  R,
                ],
                radial: ["", T, R],
                conic: [jt, T, R],
              },
              Sg,
              bg,
            ],
          },
        ],
        "bg-color": [{ bg: j() }],
        "gradient-from-pos": [{ from: V() }],
        "gradient-via-pos": [{ via: V() }],
        "gradient-to-pos": [{ to: V() }],
        "gradient-from": [{ from: j() }],
        "gradient-via": [{ via: j() }],
        "gradient-to": [{ to: j() }],
        rounded: [{ rounded: H() }],
        "rounded-s": [{ "rounded-s": H() }],
        "rounded-e": [{ "rounded-e": H() }],
        "rounded-t": [{ "rounded-t": H() }],
        "rounded-r": [{ "rounded-r": H() }],
        "rounded-b": [{ "rounded-b": H() }],
        "rounded-l": [{ "rounded-l": H() }],
        "rounded-ss": [{ "rounded-ss": H() }],
        "rounded-se": [{ "rounded-se": H() }],
        "rounded-ee": [{ "rounded-ee": H() }],
        "rounded-es": [{ "rounded-es": H() }],
        "rounded-tl": [{ "rounded-tl": H() }],
        "rounded-tr": [{ "rounded-tr": H() }],
        "rounded-br": [{ "rounded-br": H() }],
        "rounded-bl": [{ "rounded-bl": H() }],
        "border-w": [{ border: Y() }],
        "border-w-x": [{ "border-x": Y() }],
        "border-w-y": [{ "border-y": Y() }],
        "border-w-s": [{ "border-s": Y() }],
        "border-w-e": [{ "border-e": Y() }],
        "border-w-t": [{ "border-t": Y() }],
        "border-w-r": [{ "border-r": Y() }],
        "border-w-b": [{ "border-b": Y() }],
        "border-w-l": [{ "border-l": Y() }],
        "divide-x": [{ "divide-x": Y() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": Y() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Nt(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Nt(), "hidden", "none"] }],
        "border-color": [{ border: j() }],
        "border-color-x": [{ "border-x": j() }],
        "border-color-y": [{ "border-y": j() }],
        "border-color-s": [{ "border-s": j() }],
        "border-color-e": [{ "border-e": j() }],
        "border-color-t": [{ "border-t": j() }],
        "border-color-r": [{ "border-r": j() }],
        "border-color-b": [{ "border-b": j() }],
        "border-color-l": [{ "border-l": j() }],
        "divide-color": [{ divide: j() }],
        "outline-style": [{ outline: [...Nt(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [D, T, R] }],
        "outline-w": [{ outline: ["", D, rr, Gt] }],
        "outline-color": [{ outline: j() }],
        shadow: [{ shadow: ["", "none", f, vo, xo] }],
        "shadow-color": [{ shadow: j() }],
        "inset-shadow": [{ "inset-shadow": ["none", h, vo, xo] }],
        "inset-shadow-color": [{ "inset-shadow": j() }],
        "ring-w": [{ ring: Y() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: j() }],
        "ring-offset-w": [{ "ring-offset": [D, Gt] }],
        "ring-offset-color": [{ "ring-offset": j() }],
        "inset-ring-w": [{ "inset-ring": Y() }],
        "inset-ring-color": [{ "inset-ring": j() }],
        "text-shadow": [{ "text-shadow": ["none", x, vo, xo] }],
        "text-shadow-color": [{ "text-shadow": j() }],
        opacity: [{ opacity: [D, T, R] }],
        "mix-blend": [
          { "mix-blend": [...Ze(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": Ze() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [D] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": J() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": J() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": j() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": j() }],
        "mask-image-t-from-pos": [{ "mask-t-from": J() }],
        "mask-image-t-to-pos": [{ "mask-t-to": J() }],
        "mask-image-t-from-color": [{ "mask-t-from": j() }],
        "mask-image-t-to-color": [{ "mask-t-to": j() }],
        "mask-image-r-from-pos": [{ "mask-r-from": J() }],
        "mask-image-r-to-pos": [{ "mask-r-to": J() }],
        "mask-image-r-from-color": [{ "mask-r-from": j() }],
        "mask-image-r-to-color": [{ "mask-r-to": j() }],
        "mask-image-b-from-pos": [{ "mask-b-from": J() }],
        "mask-image-b-to-pos": [{ "mask-b-to": J() }],
        "mask-image-b-from-color": [{ "mask-b-from": j() }],
        "mask-image-b-to-color": [{ "mask-b-to": j() }],
        "mask-image-l-from-pos": [{ "mask-l-from": J() }],
        "mask-image-l-to-pos": [{ "mask-l-to": J() }],
        "mask-image-l-from-color": [{ "mask-l-from": j() }],
        "mask-image-l-to-color": [{ "mask-l-to": j() }],
        "mask-image-x-from-pos": [{ "mask-x-from": J() }],
        "mask-image-x-to-pos": [{ "mask-x-to": J() }],
        "mask-image-x-from-color": [{ "mask-x-from": j() }],
        "mask-image-x-to-color": [{ "mask-x-to": j() }],
        "mask-image-y-from-pos": [{ "mask-y-from": J() }],
        "mask-image-y-to-pos": [{ "mask-y-to": J() }],
        "mask-image-y-from-color": [{ "mask-y-from": j() }],
        "mask-image-y-to-color": [{ "mask-y-to": j() }],
        "mask-image-radial": [{ "mask-radial": [T, R] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": J() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": J() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": j() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": j() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": k() }],
        "mask-image-conic-pos": [{ "mask-conic": [D] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": J() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": J() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": j() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": j() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: O() }],
        "mask-repeat": [{ mask: M() }],
        "mask-size": [{ mask: B() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", T, R] }],
        filter: [{ filter: ["", "none", T, R] }],
        blur: [{ blur: ka() }],
        brightness: [{ brightness: [D, T, R] }],
        contrast: [{ contrast: [D, T, R] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", w, vo, xo] }],
        "drop-shadow-color": [{ "drop-shadow": j() }],
        grayscale: [{ grayscale: ["", D, T, R] }],
        "hue-rotate": [{ "hue-rotate": [D, T, R] }],
        invert: [{ invert: ["", D, T, R] }],
        saturate: [{ saturate: [D, T, R] }],
        sepia: [{ sepia: ["", D, T, R] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", T, R] }],
        "backdrop-blur": [{ "backdrop-blur": ka() }],
        "backdrop-brightness": [{ "backdrop-brightness": [D, T, R] }],
        "backdrop-contrast": [{ "backdrop-contrast": [D, T, R] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", D, T, R] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [D, T, R] }],
        "backdrop-invert": [{ "backdrop-invert": ["", D, T, R] }],
        "backdrop-opacity": [{ "backdrop-opacity": [D, T, R] }],
        "backdrop-saturate": [{ "backdrop-saturate": [D, T, R] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", D, T, R] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": S() }],
        "border-spacing-x": [{ "border-spacing-x": S() }],
        "border-spacing-y": [{ "border-spacing-y": S() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              T,
              R,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [D, "initial", T, R] }],
        ease: [{ ease: ["linear", "initial", p, T, R] }],
        delay: [{ delay: [D, T, R] }],
        animate: [{ animate: ["none", d, T, R] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [g, T, R] }],
        "perspective-origin": [{ "perspective-origin": N() }],
        rotate: [{ rotate: Kr() }],
        "rotate-x": [{ "rotate-x": Kr() }],
        "rotate-y": [{ "rotate-y": Kr() }],
        "rotate-z": [{ "rotate-z": Kr() }],
        scale: [{ scale: Gr() }],
        "scale-x": [{ "scale-x": Gr() }],
        "scale-y": [{ "scale-y": Gr() }],
        "scale-z": [{ "scale-z": Gr() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Pl() }],
        "skew-x": [{ "skew-x": Pl() }],
        "skew-y": [{ "skew-y": Pl() }],
        transform: [{ transform: [T, R, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: N() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Qr() }],
        "translate-x": [{ "translate-x": Qr() }],
        "translate-y": [{ "translate-y": Qr() }],
        "translate-z": [{ "translate-z": Qr() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: j() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: j() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              T,
              R,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": S() }],
        "scroll-mx": [{ "scroll-mx": S() }],
        "scroll-my": [{ "scroll-my": S() }],
        "scroll-ms": [{ "scroll-ms": S() }],
        "scroll-me": [{ "scroll-me": S() }],
        "scroll-mt": [{ "scroll-mt": S() }],
        "scroll-mr": [{ "scroll-mr": S() }],
        "scroll-mb": [{ "scroll-mb": S() }],
        "scroll-ml": [{ "scroll-ml": S() }],
        "scroll-p": [{ "scroll-p": S() }],
        "scroll-px": [{ "scroll-px": S() }],
        "scroll-py": [{ "scroll-py": S() }],
        "scroll-ps": [{ "scroll-ps": S() }],
        "scroll-pe": [{ "scroll-pe": S() }],
        "scroll-pt": [{ "scroll-pt": S() }],
        "scroll-pr": [{ "scroll-pr": S() }],
        "scroll-pb": [{ "scroll-pb": S() }],
        "scroll-pl": [{ "scroll-pl": S() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", T, R] },
        ],
        fill: [{ fill: ["none", ...j()] }],
        "stroke-w": [{ stroke: [D, rr, Gt, as] }],
        stroke: [{ stroke: ["none", ...j()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  zg = ag(Cg);
function st(...e) {
  return zg(np(e));
}
const Pg = Fv,
  hp = m.forwardRef(({ className: e, ...t }, n) =>
    i.jsx(Yf, {
      ref: n,
      className: st(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
hp.displayName = Yf.displayName;
const Rg = rp(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  xp = m.forwardRef(({ className: e, variant: t, ...n }, r) =>
    i.jsx(Xf, { ref: r, className: st(Rg({ variant: t }), e), ...n }),
  );
xp.displayName = Xf.displayName;
const Tg = m.forwardRef(({ className: e, ...t }, n) =>
  i.jsx(Zf, {
    ref: n,
    className: st(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e,
    ),
    ...t,
  }),
);
Tg.displayName = Zf.displayName;
const vp = m.forwardRef(({ className: e, ...t }, n) =>
  i.jsx(ep, {
    ref: n,
    className: st(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: i.jsx(Qv, { className: "h-4 w-4" }),
  }),
);
vp.displayName = ep.displayName;
const gp = m.forwardRef(({ className: e, ...t }, n) =>
  i.jsx(Jf, {
    ref: n,
    className: st("text-sm font-semibold [&+div]:text-xs", e),
    ...t,
  }),
);
gp.displayName = Jf.displayName;
const yp = m.forwardRef(({ className: e, ...t }, n) =>
  i.jsx(qf, { ref: n, className: st("text-sm opacity-90", e), ...t }),
);
yp.displayName = qf.displayName;
function _g() {
  const { toasts: e } = Wr();
  return i.jsxs(Pg, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...l }) {
        return i.jsxs(
          xp,
          {
            ...l,
            children: [
              i.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && i.jsx(gp, { children: n }),
                  r && i.jsx(yp, { children: r }),
                ],
              }),
              o,
              i.jsx(vp, {}),
            ],
          },
          t,
        );
      }),
      i.jsx(hp, {}),
    ],
  });
}
const Cl = "/assets/gear_icon-8c52d8d2.svg";
function Ig() {
  return i.jsx("header", {
    className:
      "bg-white shadow-sm relative z-10 px-4 sm:px-8 lg:px-[80px] h-[74px]",
    children: i.jsxs("div", {
      className:
        "container mx-auto flex items-center justify-between h-[74px] p-4",
      children: [
        i.jsxs("div", {
          className: "flex items-center cursor-pointer",
          onClick: () => (window.location.href = "/"),
          role: "button",
          tabIndex: 0,
          onKeyPress: (e) => {
            (e.key === "Enter" || e.key === " ") &&
              (window.location.href = "/");
          },
          "aria-label": "Go to homepage",
          children: [
            i.jsx("img", {
              src: Cl,
              alt: "Gear Icon",
              className: "shrink-0 pt-[8px]",
            }),
            i.jsx("span", {
              className:
                "ml-2 text-xl lg:text-2xl font-bold text-sky-700 leading-6",
              children: "FilmGearHub",
            }),
          ],
        }),
        i.jsxs("div", {
          className: "flex items-center gap-4",
          children: [
            i.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                i.jsx("a", {
                  href: "#how-it-works",
                  className:
                    "text-[16px] font-normal leading-[24px] text-[#4b5563] hover:text-sky-700 transition-colors px-2",
                  onClick: (e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      const t = document.getElementById("how-it-works");
                      if (t) {
                        const n =
                          t.getBoundingClientRect().top +
                          window.pageYOffset -
                          74;
                        window.scrollTo({ top: n, behavior: "smooth" });
                      }
                    }
                  },
                  children: "How It Works",
                }),
                i.jsx("a", {
                  href: "#benefits",
                  className:
                    "text-[16px] font-normal leading-[24px] text-[#4b5563] hover:text-sky-700 transition-colors px-2",
                  onClick: (e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      const t = document.getElementById("benefits");
                      if (t) {
                        const n =
                          t.getBoundingClientRect().top +
                          window.pageYOffset -
                          74;
                        window.scrollTo({ top: n, behavior: "smooth" });
                      }
                    }
                  },
                  children: "Benefits",
                }),
                i.jsx("a", {
                  href: "#waitlist",
                  className:
                    "text-[16px] font-normal leading-[24px] text-[#4b5563] hover:text-sky-700 transition-colors px-2",
                  onClick: (e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      const t = document.getElementById("waitlist");
                      if (t) {
                        const n =
                          t.getBoundingClientRect().top +
                          window.pageYOffset -
                          74;
                        window.scrollTo({ top: n, behavior: "smooth" });
                      }
                    }
                  },
                  children: "Waitlist",
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex items-center",
              children: [
                i.jsx(L, {
                  to: "/login",
                  className:
                    "h-[42px] px-4 py-2 rounded-[8px] border border-[#0284c7] text-[#0284c7] text-[16px] font-normal leading-[19.364px] hover:bg-sky-50 transition-colors",
                  style: { textDecoration: "none" },
                  children: "Log In",
                }),
                i.jsx(L, {
                  to: "/create-account",
                  className:
                    "h-[42px] ml-[12px] px-4 py-2 rounded-[8px] bg-[#0284c7] text-white text-[16px] font-normal leading-[19.364px] hover:bg-sky-700 transition-colors",
                  style: { textDecoration: "none" },
                  children: "Sign Up",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Lg = "/assets/landing_image-e7d0b40c.png";
function Og() {
  return i.jsx("div", {
    className:
      "w-[1280px] h-[624px] bg-[rgba(0,0,0,0)] absolute top-[128px] left-[80px] z-[2]",
    children: i.jsxs("div", {
      className:
        "w-[1248px] h-[624px] bg-[rgba(0,0,0,0)] relative z-[3] mt-0 mr-0 mb-0 ml-[16px]",
      children: [
        i.jsx(L, {
          className:
            "w-[624px] h-[624px] bg-[rgba(0,0,0,0)] absolute top-0 left-[624px] z-[12]",
          children: i.jsx("img", {
            src: Lg,
            alt: "Landing",
            className:
              "w-[624px] h-[624px] rounded-[12px] absolute top-0 left-0 z-[13] object-cover",
          }),
        }),
        i.jsxs("div", {
          className:
            "w-[624px] h-[444.24px] absolute top-[57.76px] left-0 z-[5]",
          children: [
            i.jsx(L, {
              className:
                "flex w-[611px] h-[192px] justify-start items-start font-['Inter'] text-[60px] font-bold leading-[60px] text-[#1f2937] absolute top-0 left-0 text-left z-[5]",
              children: "Find and Connect with Film Equipment Suppliers",
            }),
            i.jsxs("div", {
              className:
                "w-[624px] h-[380px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-[64.24px] left-0 z-[4]",
              children: [
                i.jsx(L, {
                  className:
                    "flex w-[514px] h-[84px] justify-start items-start font-['Inter'] text-[20px] font-normal leading-[28px] text-[#4b5563] relative text-left z-[6] mt-[202.24px] mr-0 mb-0 ml-0",
                  children:
                    "The easiest way to post RFQs, browse gear, and connect with trusted merchants in the film production industry.",
                }),
                i.jsxs("div", {
                  className:
                    "w-[624px] h-[60px] bg-[rgba(0,0,0,0)] relative z-[7] mt-[33.76px] mr-0 mb-0 ml-0",
                  children: [
                    i.jsx("div", {
                      className:
                        "w-[199.656px] h-[60px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border-2 border-[#374151] absolute top-0 left-[188.813px] z-10",
                      children: i.jsx(L, {
                        className:
                          "flex w-[132px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-medium leading-[19.364px] text-[#1f2937] absolute top-[16.56px] left-[32px] text-center whitespace-nowrap z-[11]",
                        children: "Join as Merchant",
                      }),
                    }),
                    i.jsx("div", {
                      className:
                        "w-[172.813px] h-[60px] bg-[#0284c7] rounded-[8px] absolute top-0 left-0 z-[8]",
                      children: i.jsx(L, {
                        className:
                          "flex w-[109px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-medium leading-[19.364px] text-[#fff] absolute top-[16.56px] left-[32px] text-center whitespace-nowrap z-[9]",
                        children: "Join as Renter",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Mg() {
  return i.jsxs("div", {
    id: "how-it-works",
    className:
      "w-[1440px] h-[746px] bg-[#fff] absolute top-[700px] left-0 z-[14]",
    children: [
      i.jsx(L, {
        className:
          "flex w-[440px] h-[44px] justify-center items-start font-['Inter'] text-[36px] font-bold leading-[40px] text-[#1f2937] absolute top-[87.84px] left-[499.75px] text-center whitespace-nowrap z-[17]",
        children: "How FilmGearHub Works",
      }),
      i.jsxs("div", {
        className:
          "w-[1280px] h-[554px] bg-[rgba(0,0,0,0)] absolute top-[96px] left-[80px] z-[15]",
        children: [
          i.jsx("div", {
            className:
              "w-[1248px] h-[112px] bg-[rgba(0,0,0,0)] relative z-[16] mt-0 mr-0 mb-0 ml-[16px]",
            children: i.jsx(L, {
              className:
                "flex w-[670px] h-[56px] justify-center items-start font-['Inter'] text-[20px] font-normal leading-[28px] text-[#4b5563] absolute top-[54.16px] left-[290.125px] text-center z-[18]",
              children:
                "A streamlined platform connecting filmmakers with the equipment they need",
            }),
          }),
          i.jsxs("div", {
            className:
              "w-[1248px] h-[378px] bg-[rgba(0,0,0,0)] relative z-[19] mt-[64px] mr-0 mb-0 ml-[16px]",
            children: [
              i.jsxs(L, {
                className:
                  "w-[394.672px] h-[378px] bg-[#fff] rounded-[12px] border-solid border border-[#f3f4f6] absolute top-0 left-[426.656px] shadow-[0_10px_15px_0_rgba(0,0,0,0.1)] z-40",
                children: [
                  i.jsx("div", {
                    className:
                      "w-[64px] h-[64px] bg-[#e0f2fe] rounded-full relative z-[41] mt-[33px] mr-0 mb-0 ml-[33px]",
                    children: i.jsx("div", {
                      className:
                        "w-[27px] h-[32px] bg-[rgba(0,0,0,0)] relative z-[42] pt-[16px] pl-[18.5px]",
                      children: i.jsx("div", {
                        className:
                          "flex w-[27px] h-[24px] justify-center items-center flex-nowrap relative z-[43] mt-[3px] mr-0 mb-0 ml-0",
                        children: i.jsx("div", {
                          className:
                            "w-[27px] h-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/SDFhTcE3UQ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[44]",
                        }),
                      }),
                    }),
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[328.672px] h-[176px] bg-[rgba(0,0,0,0)] relative z-[47] mt-[73px] mr-0 mb-0 ml-[33px]",
                    children: [
                      i.jsxs("div", {
                        className:
                          "w-[328.672px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[48] mt-0 mr-0 mb-0 ml-0",
                        children: [
                          i.jsx("span", {
                            className:
                              "flex w-[279px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#1f2937] absolute top-[0.24px] left-[26px] text-left z-[51]",
                            children:
                              "Showcase your inventory to targeted audiences",
                          }),
                          i.jsx("div", {
                            className:
                              "flex w-[14px] h-[16px] justify-center items-center flex-nowrap absolute top-[8px] left-0 overflow-hidden z-[49]",
                            children: i.jsx("div", {
                              className:
                                "w-[14px] h-[16px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/sm3Ps1Zkge.png)] bg-cover bg-no-repeat relative overflow-hidden z-50",
                            }),
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[328.672px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[52] mt-[16px] mr-0 mb-0 ml-0",
                        children: [
                          i.jsx("span", {
                            className:
                              "flex w-[303px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#1f2937] absolute top-[0.24px] left-[26px] text-left z-[55]",
                            children:
                              "Respond to RFQs and connect with new clients",
                          }),
                          i.jsx("div", {
                            className:
                              "flex w-[14px] h-[16px] justify-center items-center flex-nowrap absolute top-[8px] left-0 overflow-hidden z-[53]",
                            children: i.jsx("div", {
                              className:
                                "w-[14px] h-[16px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/DmnrGeOg7i.png)] bg-cover bg-no-repeat relative overflow-hidden z-[54]",
                            }),
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[328.672px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[56] mt-[16px] mr-0 mb-0 ml-0",
                        children: [
                          i.jsx("span", {
                            className:
                              "flex w-[284px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#1f2937] absolute top-[0.24px] left-[26px] text-left z-[59]",
                            children:
                              "Build your reputation through reviews and ratings",
                          }),
                          i.jsx("div", {
                            className:
                              "flex w-[14px] h-[16px] justify-center items-center flex-nowrap absolute top-[8px] left-0 overflow-hidden z-[57]",
                            children: i.jsx("div", {
                              className:
                                "w-[14px] h-[16px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/tXdyaNqvRy.png)] bg-cover bg-no-repeat relative overflow-hidden z-[58]",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("span", {
                    className:
                      "flex h-[32px] justify-start items-start font-['Inter'] text-[24px] font-bold leading-[29.045px] text-[#1f2937] absolute top-[118.28px] left-[32px] text-left whitespace-nowrap z-[46]",
                    children: "For Merchants",
                  }),
                  i.jsx("div", {
                    className:
                      "w-[328.672px] h-[32px] bg-[rgba(0,0,0,0)] absolute top-[120px] left-[32px] z-[45]",
                  }),
                ],
              }),
              i.jsxs(L, {
                className:
                  "w-[394.656px] h-[378px] bg-[#fff] rounded-[12px] border-solid border border-[#f3f4f6] absolute top-0 left-0 shadow-[0_10px_15px_0_rgba(0,0,0,0.1)] z-20",
                children: [
                  i.jsx("div", {
                    className:
                      "w-[64px] h-[64px] bg-[#e0f2fe] rounded-full relative z-[21] mt-[33px] mr-0 mb-0 ml-[33px]",
                    children: i.jsx("div", {
                      className:
                        "w-[24px] h-[32px] bg-[rgba(0,0,0,0)] relative z-[22] pt-[16px] pl-[20px]",
                      children: i.jsx("div", {
                        className:
                          "flex w-[24px] h-[24px] justify-center items-center flex-nowrap relative z-[23] mt-[3px] mr-0 mb-0 ml-0",
                        children: i.jsx("div", {
                          className:
                            "w-[24px] h-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/OU1KBkpeDz.png)] bg-cover bg-no-repeat relative overflow-hidden z-[24]",
                        }),
                      }),
                    }),
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[328.656px] h-[176px] bg-[rgba(0,0,0,0)] relative z-[27] mt-[73px] mr-0 mb-0 ml-[33px]",
                    children: [
                      i.jsxs("div", {
                        className:
                          "w-[328.656px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[28] mt-0 mr-0 mb-0 ml-0",
                        children: [
                          i.jsx("span", {
                            className:
                              "flex w-[299px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#1f2937] absolute top-[0.24px] left-[26px] text-left z-[31]",
                            children:
                              "Search for specific gear across multiple merchants",
                          }),
                          i.jsx("div", {
                            className:
                              "flex w-[14px] h-[16px] justify-center items-center flex-nowrap absolute top-[8px] left-0 overflow-hidden z-[29]",
                            children: i.jsx("div", {
                              className:
                                "w-[14px] h-[16px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/F1aeJ2LjY2.png)] bg-cover bg-no-repeat relative overflow-hidden z-30",
                            }),
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[328.656px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[32] mt-[16px] mr-0 mb-0 ml-0",
                        children: [
                          i.jsx("span", {
                            className:
                              "flex w-[264px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#1f2937] absolute top-[0.24px] left-[26px] text-left z-[35]",
                            children:
                              "Post RFQs and receive competitive quotes",
                          }),
                          i.jsx("div", {
                            className:
                              "flex w-[14px] h-[16px] justify-center items-center flex-nowrap absolute top-[8px] left-0 overflow-hidden z-[33]",
                            children: i.jsx("div", {
                              className:
                                "w-[14px] h-[16px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/csg0thPs9y.png)] bg-cover bg-no-repeat relative overflow-hidden z-[34]",
                            }),
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[328.656px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[36] mt-[16px] mr-0 mb-0 ml-0",
                        children: [
                          i.jsx("span", {
                            className:
                              "flex w-[281px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#1f2937] absolute top-[0.24px] left-[26px] text-left z-[39]",
                            children:
                              "Build a network of trusted equipment suppliers",
                          }),
                          i.jsx("div", {
                            className:
                              "flex w-[14px] h-[16px] justify-center items-center flex-nowrap absolute top-[8px] left-0 overflow-hidden z-[37]",
                            children: i.jsx("div", {
                              className:
                                "w-[14px] h-[16px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/Ehoe4ZbfLo.png)] bg-cover bg-no-repeat relative overflow-hidden z-[38]",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("span", {
                    className:
                      "flex h-[32px] justify-start items-start font-['Inter'] text-[24px] font-bold leading-[29.045px] text-[#1f2937] absolute top-[118.28px] left-[32px] text-left whitespace-nowrap z-[26]",
                    children: "For Renters",
                  }),
                  i.jsx("div", {
                    className:
                      "w-[328.656px] h-[32px] bg-[rgba(0,0,0,0)] absolute top-[120px] left-[32px] z-[25]",
                  }),
                ],
              }),
              i.jsxs(L, {
                className:
                  "w-[394.656px] h-[378px] bg-[#fff] rounded-[12px] border-solid border border-[#f3f4f6] absolute top-0 left-[853.328px] shadow-[0_10px_15px_0_rgba(0,0,0,0.1)] z-[60]",
                children: [
                  i.jsx("div", {
                    className:
                      "w-[64px] h-[64px] bg-[#e0f2fe] rounded-full relative z-[61] mt-[33px] mr-0 mb-0 ml-[33px]",
                    children: i.jsx("div", {
                      className:
                        "w-[30px] h-[32px] bg-[rgba(0,0,0,0)] relative z-[62] pt-[16px] pl-[17px]",
                      children: i.jsx("div", {
                        className:
                          "flex w-[30px] h-[24px] justify-center items-center flex-nowrap relative z-[63] mt-[3px] mr-0 mb-0 ml-0",
                        children: i.jsx("div", {
                          className:
                            "w-[30px] h-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/5BVKOAHZkd.png)] bg-cover bg-no-repeat relative overflow-hidden z-[64]",
                        }),
                      }),
                    }),
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[328.656px] h-[176px] bg-[rgba(0,0,0,0)] relative z-[67] mt-[73px] mr-0 mb-0 ml-[33px]",
                    children: [
                      i.jsxs("div", {
                        className:
                          "w-[328.656px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[68] mt-0 mr-0 mb-0 ml-0",
                        children: [
                          i.jsx("span", {
                            className:
                              "flex w-[293px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#1f2937] absolute top-[0.24px] left-[26px] text-left z-[71]",
                            children:
                              "Follow merchants and stay updated on new gear",
                          }),
                          i.jsx("div", {
                            className:
                              "flex w-[14px] h-[16px] justify-center items-center flex-nowrap absolute top-[8px] left-0 overflow-hidden z-[69]",
                            children: i.jsx("div", {
                              className:
                                "w-[14px] h-[16px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/bzwYRvSw1t.png)] bg-cover bg-no-repeat relative overflow-hidden z-[70]",
                            }),
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[328.656px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[72] mt-[16px] mr-0 mb-0 ml-0",
                        children: [
                          i.jsx("span", {
                            className:
                              "flex w-[232px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#1f2937] absolute top-[0.24px] left-[26px] text-left z-[75]",
                            children:
                              "Direct messaging for seamless communication",
                          }),
                          i.jsx("div", {
                            className:
                              "flex w-[14px] h-[16px] justify-center items-center flex-nowrap absolute top-[8px] left-0 overflow-hidden z-[73]",
                            children: i.jsx("div", {
                              className:
                                "w-[14px] h-[16px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/mChK0PtAJo.png)] bg-cover bg-no-repeat relative overflow-hidden z-[74]",
                            }),
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[328.656px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[76] mt-[16px] mr-0 mb-0 ml-0",
                        children: [
                          i.jsx("span", {
                            className:
                              "flex w-[276px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#1f2937] absolute top-[0.24px] left-[26px] text-left z-[79]",
                            children:
                              "Review and rate your experiences to help others",
                          }),
                          i.jsx("div", {
                            className:
                              "flex w-[14px] h-[16px] justify-center items-center flex-nowrap absolute top-[8px] left-0 overflow-hidden z-[77]",
                            children: i.jsx("div", {
                              className:
                                "w-[14px] h-[16px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/4gA96jWyKR.png)] bg-cover bg-no-repeat relative overflow-hidden z-[78]",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("span", {
                    className:
                      "flex h-[32px] justify-start items-start font-['Inter'] text-[24px] font-bold leading-[29.045px] text-[#1f2937] absolute top-[118.12px] left-[32px] text-left whitespace-nowrap z-[66]",
                    children: "Social Features",
                  }),
                  i.jsx("div", {
                    className:
                      "w-[328.656px] h-[32px] bg-[rgba(0,0,0,0)] absolute top-[120px] left-[32px] z-[65]",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Fg() {
  return i.jsxs("div", {
    id: "benefits",
    className:
      "w-[1440px] h-[768px] bg-[#f9fafb] relative z-[80] mt-[1372px] mr-0 mb-0 ml-0",
    children: [
      i.jsx("span", {
        className:
          "flex w-[463px] h-[44px] justify-center items-start font-['Inter'] text-[36px] font-bold leading-[40px] text-[#1f2937] absolute top-[87.84px] left-[488.438px] text-center whitespace-nowrap z-[83]",
        children: "Why Choose FilmGearHub",
      }),
      i.jsxs("div", {
        className:
          "w-[1280px] h-[576px] bg-[rgba(0,0,0,0)] absolute top-[96px] left-[80px] z-[81]",
        children: [
          i.jsx("div", {
            className:
              "w-[1248px] h-[84px] bg-[rgba(0,0,0,0)] relative z-[82] mt-0 mr-0 mb-0 ml-[16px]",
            children: i.jsx("span", {
              className:
                "flex w-[499px] h-[28px] justify-center items-start font-['Inter'] text-[20px] font-normal leading-[28px] text-[#4b5563] absolute top-[54.08px] left-[373.938px] text-center whitespace-nowrap z-[84]",
              children:
                "Designed specifically for the film production industry",
            }),
          }),
          i.jsxs("div", {
            className:
              "w-[1248px] h-[428px] bg-[rgba(0,0,0,0)] relative z-[85] mt-[64px] mr-0 mb-0 ml-[16px]",
            children: [
              i.jsxs("div", {
                className:
                  "w-[600px] h-[428px] bg-[#fff] rounded-[12px] absolute top-0 left-0 shadow-[0_10px_15px_0_rgba(0,0,0,0.1)] z-[86]",
                children: [
                  i.jsxs("div", {
                    className:
                      "w-[536px] h-[52px] bg-[rgba(0,0,0,0)] relative z-[87] mt-[32px] mr-0 mb-0 ml-[32px]",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-[46.5px] h-[52px] bg-[#e0f2fe] rounded-full absolute top-0 left-0 z-[88]",
                        children: i.jsx("div", {
                          className:
                            "w-[22.5px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[89] mt-[14px] mr-0 mb-0 ml-[12px]",
                          children: i.jsx("div", {
                            className:
                              "flex w-[22.5px] h-[20px] justify-center items-center flex-nowrap relative z-[90] mt-[1.5px] mr-0 mb-0 ml-0",
                            children: i.jsx("div", {
                              className:
                                "w-[22.5px] h-[20px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/cN6VWOd7SP.png)] bg-cover bg-no-repeat relative overflow-hidden z-[91]",
                            }),
                          }),
                        }),
                      }),
                      i.jsx("span", {
                        className:
                          "flex h-[32px] justify-start items-start font-['Inter'] text-[24px] font-bold leading-[32px] text-[#1f2937] absolute top-[5.24px] left-[62.5px] text-left whitespace-nowrap z-[92]",
                        children: "For Filmmakers & Crews",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[536px] h-[288px] bg-[rgba(0,0,0,0)] relative z-[93] mt-[24px] mr-0 mb-0 ml-[32px]",
                    children: [
                      i.jsxs("div", {
                        className:
                          "w-[536px] h-[80px] bg-[rgba(0,0,0,0)] relative z-[94] mt-0 mr-0 mb-0 ml-0",
                        children: [
                          i.jsxs("div", {
                            className:
                              "w-[507.5px] h-[80px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[28.5px] z-[98]",
                            children: [
                              i.jsx("span", {
                                className:
                                  "block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#1f2937] relative text-left whitespace-nowrap z-[99] mt-[-0.92px] mr-0 mb-0 ml-0",
                                children: "No Payments, Just Connections",
                              }),
                              i.jsx("span", {
                                className:
                                  "flex w-[432px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#4b5563] relative text-left z-[100] mt-[5.16px] mr-0 mb-0 ml-0",
                                children:
                                  "Connect directly with merchants without platform fees or commissions.",
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className:
                              "w-[12.5px] h-[80px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[95]",
                            children: i.jsx("div", {
                              className:
                                "flex w-[12.5px] h-[20px] justify-center items-center flex-nowrap relative overflow-hidden z-[96] mt-[3.5px] mr-0 mb-0 ml-0",
                              children: i.jsx("div", {
                                className:
                                  "w-[12.5px] h-[20px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/4hj7BV15cJ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[97]",
                              }),
                            }),
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[536px] h-[80px] bg-[rgba(0,0,0,0)] relative z-[101] mt-[24px] mr-0 mb-0 ml-0",
                        children: [
                          i.jsxs("div", {
                            className:
                              "w-[500px] h-[80px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[36px] z-[105]",
                            children: [
                              i.jsx("span", {
                                className:
                                  "block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#1f2937] relative text-left whitespace-nowrap z-[106] mt-[-0.92px] mr-0 mb-0 ml-0",
                                children: "Broader Equipment Access",
                              }),
                              i.jsx("span", {
                                className:
                                  "flex w-[444px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#4b5563] relative text-left z-[107] mt-[5.16px] mr-0 mb-0 ml-0",
                                children:
                                  "Discover specialized equipment that might not be listed on traditional rental platforms.",
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className:
                              "w-[20px] h-[80px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[102]",
                            children: i.jsx("div", {
                              className:
                                "flex w-[20px] h-[20px] justify-center items-center flex-nowrap relative overflow-hidden z-[103] mt-[3.5px] mr-0 mb-0 ml-0",
                              children: i.jsx("div", {
                                className:
                                  "w-[20px] h-[20px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/8q5khOuczM.png)] bg-cover bg-no-repeat relative overflow-hidden z-[104]",
                              }),
                            }),
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[536px] h-[80px] bg-[rgba(0,0,0,0)] relative z-[108] mt-[24px] mr-0 mb-0 ml-0",
                        children: [
                          i.jsxs("div", {
                            className:
                              "w-[497.5px] h-[80px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[38.5px] z-[112]",
                            children: [
                              i.jsx("span", {
                                className:
                                  "block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#1f2937] relative text-left whitespace-nowrap z-[113] mt-[-0.64px] mr-0 mb-0 ml-0",
                                children: "Vetted Merchant Network",
                              }),
                              i.jsx("span", {
                                className:
                                  "flex w-[487px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#4b5563] relative text-left z-[114] mt-[4.88px] mr-0 mb-0 ml-0",
                                children:
                                  "Work with merchants who have been reviewed by other industry professionals.",
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className:
                              "w-[22.5px] h-[80px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[109]",
                            children: i.jsx("div", {
                              className:
                                "flex w-[22.5px] h-[20px] justify-center items-center flex-nowrap relative overflow-hidden z-[110] mt-[3.5px] mr-0 mb-0 ml-0",
                              children: i.jsx("div", {
                                className:
                                  "w-[22.5px] h-[20px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/YmDxot2faX.png)] bg-cover bg-no-repeat relative overflow-hidden z-[111]",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className:
                  "w-[600px] h-[428px] bg-[#fff] rounded-[12px] absolute top-0 left-[648px] shadow-[0_10px_15px_0_rgba(0,0,0,0.1)] z-[115]",
                children: [
                  i.jsxs("div", {
                    className:
                      "w-[536px] h-[52px] bg-[rgba(0,0,0,0)] relative z-[116] mt-[32px] mr-0 mb-0 ml-[32px]",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-[46.5px] h-[52px] bg-[#e0f2fe] rounded-full absolute top-0 left-0 z-[117]",
                        children: i.jsx("div", {
                          className:
                            "w-[22.5px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[118] mt-[14px] mr-0 mb-0 ml-[12px]",
                          children: i.jsx("div", {
                            className:
                              "flex w-[22.5px] h-[20px] justify-center items-center flex-nowrap relative z-[119] mt-[1.5px] mr-0 mb-0 ml-0",
                            children: i.jsx("div", {
                              className:
                                "w-[22.5px] h-[20px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/iubGx5vnBS.png)] bg-cover bg-no-repeat relative overflow-hidden z-[120]",
                            }),
                          }),
                        }),
                      }),
                      i.jsx("span", {
                        className:
                          "flex h-[32px] justify-start items-start font-['Inter'] text-[24px] font-bold leading-[32px] text-[#1f2937] absolute top-[5.24px] left-[62.5px] text-left whitespace-nowrap z-[121]",
                        children: "For Equipment Merchants",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[536px] h-[264px] bg-[rgba(0,0,0,0)] relative z-[122] mt-[24px] mr-0 mb-0 ml-[32px]",
                    children: [
                      i.jsxs("div", {
                        className:
                          "w-[536px] h-[80px] bg-[rgba(0,0,0,0)] relative z-[123] mt-0 mr-0 mb-0 ml-0",
                        children: [
                          i.jsxs("div", {
                            className:
                              "w-[495px] h-[80px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[41px] z-[127]",
                            children: [
                              i.jsx("span", {
                                className:
                                  "block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#1f2937] relative text-left whitespace-nowrap z-[128] mt-[-0.92px] mr-0 mb-0 ml-0",
                                children: "Build Your Network",
                              }),
                              i.jsx("span", {
                                className:
                                  "flex w-[493px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#4b5563] relative text-left z-[129] mt-[5.16px] mr-0 mb-0 ml-0",
                                children:
                                  "Connect with production crews and establish long-term business relationships.",
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className:
                              "w-[25px] h-[80px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[124]",
                            children: i.jsx("div", {
                              className:
                                "flex w-[25px] h-[20px] justify-center items-center flex-nowrap relative overflow-hidden z-[125] mt-[3.5px] mr-0 mb-0 ml-0",
                              children: i.jsx("div", {
                                className:
                                  "w-[25px] h-[20px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/3gmvmpghJW.png)] bg-cover bg-no-repeat relative overflow-hidden z-[126]",
                              }),
                            }),
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[536px] h-[80px] bg-[rgba(0,0,0,0)] relative z-[130] mt-[24px] mr-0 mb-0 ml-0",
                        children: [
                          i.jsxs("div", {
                            className:
                              "w-[500px] h-[80px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[36px] z-[134]",
                            children: [
                              i.jsx("span", {
                                className:
                                  "block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#1f2937] relative text-left whitespace-nowrap z-[135] mt-[-0.92px] mr-0 mb-0 ml-0",
                                children: "Enhanced Visibility",
                              }),
                              i.jsx("span", {
                                className:
                                  "flex w-[473px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#4b5563] relative text-left z-[136] mt-[5.16px] mr-0 mb-0 ml-0",
                                children:
                                  "Showcase your inventory to a targeted audience of filmmakers looking for equipment.",
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className:
                              "w-[20px] h-[80px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[131]",
                            children: i.jsx("div", {
                              className:
                                "flex w-[20px] h-[20px] justify-center items-center flex-nowrap relative overflow-hidden z-[132] mt-[3.5px] mr-0 mb-0 ml-0",
                              children: i.jsx("div", {
                                className:
                                  "w-[20px] h-[20px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/thbjzmnzog.png)] bg-cover bg-no-repeat relative overflow-hidden z-[133]",
                              }),
                            }),
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[536px] h-[56px] bg-[rgba(0,0,0,0)] relative z-[137] mt-[24px] mr-0 mb-0 ml-0",
                        children: [
                          i.jsxs("div", {
                            className:
                              "w-[491.672px] h-[56px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[36px] z-[141]",
                            children: [
                              i.jsx("span", {
                                className:
                                  "block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#1f2937] relative text-left whitespace-nowrap z-[142] mt-[-0.92px] mr-0 mb-0 ml-0",
                                children: "Business Growth",
                              }),
                              i.jsx("span", {
                                className:
                                  "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[24px] text-[#4b5563] relative text-left whitespace-nowrap z-[143] mt-[4.04px] mr-0 mb-0 ml-0",
                                children:
                                  "Expand your client base and increase equipment utilization rates.",
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className:
                              "w-[20px] h-[56px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[138]",
                            children: i.jsx("div", {
                              className:
                                "flex w-[20px] h-[20px] justify-center items-center flex-nowrap relative overflow-hidden z-[139] mt-[3.5px] mr-0 mb-0 ml-0",
                              children: i.jsx("div", {
                                className:
                                  "w-[20px] h-[20px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/kxV5BH759K.png)] bg-cover bg-no-repeat relative overflow-hidden z-[140]",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Dg = "/assets/boxes-34e0bb20.svg",
  Ag = "/assets/comingsoon_img-32483ba4.png";
function $g() {
  return i.jsx("div", {
    id: "waitlist",
    className:
      "w-[1440px] h-[748px] bg-[#fff] relative z-[144] mt-0 mr-0 mb-0 ml-0",
    children: i.jsx("div", {
      className:
        "w-[1280px] h-[556px] bg-[rgba(0,0,0,0)] relative z-[145] mt-[96px] mr-0 mb-0 ml-[80px]",
      children: i.jsx("div", {
        className:
          "w-[768px] h-[556px] bg-[#0369a1] rounded-[16px] relative overflow-hidden shadow-[0_20px_25px_0_rgba(0,0,0,0.1)] z-[146] mt-0 mr-0 mb-0 ml-[256px]",
        children: i.jsxs("div", {
          className:
            "w-[768px] h-[556px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[147]",
          children: [
            i.jsxs("div", {
              className:
                "w-[384px] h-[556px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[148]",
              children: [
                i.jsx("div", {
                  className:
                    "w-[51px] h-[56px] bg-[rgba(255,255,255,0.2)] rounded-[8px] relative z-[149] mt-[48px] mr-0 mb-0 ml-[48px]",
                  children: i.jsx("div", {
                    className:
                      "w-[27px] h-[29px] bg-[rgba(0,0,0,0)] relative z-[150] pt-[13px] pl-[12px]",
                    children: i.jsx(L, {
                      className:
                        "flex w-[27px] h-[24px] justify-center items-center flex-nowrap relative z-[151] mt-[2px] mr-0 mb-0 ml-0",
                      children: i.jsx("img", {
                        src: Dg,
                        alt: "Box Icon",
                        className:
                          "w-[27px] h-[24px] shrink-0 relative overflow-hidden z-[152]",
                      }),
                    }),
                  }),
                }),
                i.jsx(L, {
                  className:
                    "flex w-[286px] h-[108px] justify-start items-start font-['Inter'] text-[30px] font-bold leading-[36px] text-[#fff] relative text-left z-[153] mt-[6.08px] mr-0 mb-0 ml-[48px]",
                  children: "Coming Soon: Powerful Inventory System",
                }),
                i.jsx(L, {
                  className:
                    "flex w-[258px] h-[120px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#fff] relative text-left z-[154] mt-[37.52px] mr-0 mb-0 ml-[48px]",
                  children:
                    "We're building a comprehensive inventory management system to help merchants track equipment, manage rentals, and streamline operations.",
                }),
                i.jsxs("div", {
                  className:
                    "w-[288px] h-[112px] bg-[rgba(0,0,0,0)] relative z-[155] mt-[20.4px] mr-0 mb-0 ml-[48px]",
                  children: [
                    i.jsx("input", {
                      type: "email",
                      placeholder: "Enter your email address",
                      className:
                        "w-[288px] h-[48px] bg-[#fff] rounded-[8px] font-['Inter'] text-[16px] font-normal leading-[24px] text-[#1f2937] pl-[16px] z-[156] mt-0 mr-0 mb-0 ml-0 outline-none border-none",
                      style: { position: "relative" },
                    }),
                    i.jsx("div", {
                      className:
                        "w-[288px] h-[48px] bg-[#fff] rounded-[8px] relative z-[159] mt-[16px] mr-0 mb-0 ml-0",
                      children: i.jsx(L, {
                        className:
                          "flex w-[123px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-medium leading-[19.364px] text-[#0369a1] absolute top-[12.56px] left-[83.281px] text-center whitespace-nowrap z-[160]",
                        children: "Join the Waitlist",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            i.jsx(L, {
              className:
                "w-[384px] h-[556px] bg-[#075985] absolute top-0 left-[384px] z-[161]",
              children: i.jsx("img", {
                src: Ag,
                alt: "Coming Soon",
                className:
                  "w-[384px] h-[556px] absolute top-0 left-0 z-[162] object-cover",
              }),
            }),
          ],
        }),
      }),
    }),
  });
}
const Ee = "/assets/review-f5bf53f4.svg",
  Ug = "/assets/half_review-f14eda58.svg",
  Bg = "/assets/woman1-99442a67.png",
  Vg = "/assets/man1-609a9142.png",
  Wg = "/assets/man2-b620428d.png";
function Hg() {
  return i.jsxs("div", {
    className:
      "w-[1440px] h-[588px] bg-[#f9fafb] relative z-[163] mt-0 mr-0 mb-0 ml-0",
    children: [
      i.jsx(L, {
        className:
          "flex w-[353px] h-[44px] justify-center items-start font-['Inter'] text-[36px] font-bold leading-[40px] text-[#1f2937] absolute top-[88.28px] left-[543.719px] text-center whitespace-nowrap z-[166]",
        children: "What Our Users Say",
      }),
      i.jsxs("div", {
        className:
          "w-[1280px] h-[396px] bg-[rgba(0,0,0,0)] absolute top-[96px] left-[80px] z-[164]",
        children: [
          i.jsx("div", {
            className:
              "w-[1248px] h-[84px] bg-[rgba(0,0,0,0)] relative z-[165] mt-0 mr-0 mb-0 ml-[16px]",
            children: i.jsx(L, {
              className:
                "flex w-[572px] h-[28px] justify-center items-start font-['Inter'] text-[20px] font-normal leading-[28px] text-[#4b5563] absolute top-[54.08px] left-[336.828px] text-center whitespace-nowrap z-[167]",
              children:
                "Join these industry professionals already using FilmGearHub",
            }),
          }),
          i.jsxs("div", {
            className:
              "w-[1248px] h-[248px] bg-[rgba(0,0,0,0)] relative z-[168] mt-[64px] mr-0 mb-0 ml-[16px]",
            children: [
              i.jsxs(L, {
                className:
                  "w-[394.672px] h-[248px] bg-[#fff] rounded-[12px] absolute top-0 left-[426.656px] shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] z-[191]",
                children: [
                  i.jsxs("div", {
                    className:
                      "w-[346.672px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[192] mt-[24px] mr-0 mb-0 ml-[24px]",
                    children: [
                      i.jsx("img", {
                        src: Bg,
                        alt: "Sarah Johnson",
                        className:
                          "w-[48px] h-[48px] object-cover rounded-full absolute top-0 left-0 z-[193]",
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[205.406px] h-[44px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-[2px] left-[64px] z-[194]",
                        children: [
                          i.jsx("span", {
                            className:
                              "block h-[24px] font-['Inter'] text-[16px] font-bold leading-[24px] text-[#1f2937] relative text-left whitespace-nowrap z-[195] mt-[-0.88px] mr-0 mb-0 ml-0",
                            children: "Sarah Johnson",
                          }),
                          i.jsx("span", {
                            className:
                              "block h-[20px] font-['Inter'] text-[14px] font-normal leading-[20px] text-[#4b5563] relative text-left whitespace-nowrap z-[196] mt-[-0.32px] mr-0 mb-0 ml-0",
                            children: "Production Manager, New York",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[346.672px] h-[96px] text-[0px] bg-[rgba(0,0,0,0)] relative z-[197] mt-[16px] mr-0 mb-0 ml-[24px]",
                    children: [
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[198] mt-[0.56px] mr-0 mb-0 ml-0",
                        children: '"The RFQ feature saves me hours of calling',
                      }),
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[199] mt-0 mr-0 mb-0 ml-0",
                        children: "around for quotes. I can quickly compare",
                      }),
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[200] mt-0 mr-0 mb-0 ml-0",
                        children: "options and find exactly what my production",
                      }),
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[201] mt-0 mr-0 mb-0 ml-0",
                        children: 'needs."',
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[346.672px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[202] mt-[16px] mr-0 mb-0 ml-[24px]",
                    children: [
                      i.jsx("div", {
                        className:
                          "flex w-[20px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[72px] overflow-hidden z-[211]",
                        children: i.jsx("img", {
                          src: Ug,
                          alt: "Half Review",
                          className:
                            "w-[20px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[212]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-0 overflow-hidden z-[203]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[204]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[18px] overflow-hidden z-[205]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[206]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[36px] overflow-hidden z-[207]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[208]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[54px] overflow-hidden z-[209]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[210]",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs(L, {
                className:
                  "w-[394.656px] h-[248px] bg-[#fff] rounded-[12px] absolute top-0 left-0 shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] z-[169]",
                children: [
                  i.jsxs("div", {
                    className:
                      "w-[346.656px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[170] mt-[24px] mr-0 mb-0 ml-[24px]",
                    children: [
                      i.jsx("img", {
                        src: Vg,
                        alt: "Michael Rodriguez",
                        className:
                          "w-[48px] h-[48px] object-cover rounded-full absolute top-0 left-0 z-[171]",
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[203.375px] h-[45.12px] absolute top-[0.88px] left-[64px] z-[173]",
                        children: [
                          i.jsx("span", {
                            className:
                              "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-bold leading-[24px] text-[#1f2937] absolute top-0 left-0 text-left whitespace-nowrap z-[173]",
                            children: "Michael Rodriguez",
                          }),
                          i.jsx("div", {
                            className:
                              "w-[203.375px] h-[44px] bg-[rgba(0,0,0,0)] absolute top-[1.12px] left-0 z-[172]",
                            children: i.jsx("span", {
                              className:
                                "flex h-[20px] justify-start items-start font-['Inter'] text-[14px] font-normal leading-[20px] text-[#4b5563] absolute top-[22.8px] left-0 text-left whitespace-nowrap z-[174]",
                              children: "Cinematographer, Los Angeles",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[346.656px] h-[96px] text-[0px] bg-[rgba(0,0,0,0)] relative z-[175] mt-[16px] mr-0 mb-0 ml-[24px]",
                    children: [
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[176] mt-[0.56px] mr-0 mb-0 ml-0",
                        children: '"FilmGearHub has transformed how I source',
                      }),
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[177] mt-0 mr-0 mb-0 ml-0",
                        children: "equipment for my projects. I've connected",
                      }),
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[178] mt-0 mr-0 mb-0 ml-0",
                        children: "with several great rental houses I wouldn't",
                      }),
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[179] mt-0 mr-0 mb-0 ml-0",
                        children: 'have found otherwise."',
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[346.656px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[180] mt-[16px] mr-0 mb-0 ml-[24px]",
                    children: [
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-0 overflow-hidden z-[181]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[182]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[18px] overflow-hidden z-[183]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[184]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[36px] overflow-hidden z-[185]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[186]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[54px] overflow-hidden z-[187]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[188]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[72px] overflow-hidden z-[189]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[190]",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs(L, {
                className:
                  "w-[394.656px] h-[248px] bg-[#fff] rounded-[12px] absolute top-0 left-[853.328px] shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] z-[213]",
                children: [
                  i.jsxs("div", {
                    className:
                      "w-[346.656px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[214] mt-[24px] mr-0 mb-0 ml-[24px]",
                    children: [
                      i.jsx("img", {
                        src: Wg,
                        alt: "David Chen",
                        className:
                          "w-[48px] h-[48px] object-cover rounded-full absolute top-0 left-0 z-[215]",
                      }),
                      i.jsxs("div", {
                        className:
                          "w-[218px] h-[43.92px] absolute top-[0.88px] left-[64px] z-[218]",
                        children: [
                          i.jsx("span", {
                            className:
                              "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-bold leading-[24px] text-[#1f2937] absolute top-0 left-0 text-left whitespace-nowrap z-[217]",
                            children: "David Chen",
                          }),
                          i.jsx("div", {
                            className:
                              "w-[216.484px] h-[44px] bg-[rgba(0,0,0,0)] absolute top-[1.12px] left-0 z-[216]",
                          }),
                          i.jsx("span", {
                            className:
                              "flex h-[20px] justify-start items-start font-['Inter'] text-[14px] font-normal leading-[20px] text-[#4b5563] absolute top-[23.92px] left-0 text-left whitespace-nowrap z-[218]",
                            children: "Equipment Rental Owner, Atlanta",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[346.656px] h-[96px] text-[0px] bg-[rgba(0,0,0,0)] relative z-[219] mt-[16px] mr-0 mb-0 ml-[24px]",
                    children: [
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[220] mt-[0.56px] mr-0 mb-0 ml-0",
                        children: '"As a merchant, FilmGearHub has helped me',
                      }),
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[221] mt-0 mr-0 mb-0 ml-0",
                        children: "reach new clients and grow my business. The",
                      }),
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[222] mt-0 mr-0 mb-0 ml-0",
                        children:
                          "platform is intuitive and the social features",
                      }),
                      i.jsx("span", {
                        className:
                          "block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[223] mt-0 mr-0 mb-0 ml-0",
                        children: 'build real relationships."',
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[346.656px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[224] mt-[16px] mr-0 mb-0 ml-[24px]",
                    children: [
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-0 overflow-hidden z-[225]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[226]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[18px] overflow-hidden z-[227]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[228]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[36px] overflow-hidden z-[229]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[230]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[54px] overflow-hidden z-[231]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[232]",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[72px] overflow-hidden z-[233]",
                        children: i.jsx("img", {
                          src: Ee,
                          alt: "Review",
                          className:
                            "w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[234]",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Kg() {
  return i.jsxs("div", {
    className:
      "w-[1440px] h-[404px] bg-[#0284c7] relative z-[235] mt-0 mr-0 mb-0 ml-0",
    children: [
      i.jsx(L, {
        className:
          "flex w-[942px] h-[44px] justify-center items-start font-['Inter'] text-[36px] font-bold leading-[40px] text-[#fff] absolute top-[87.84px] left-[248.906px] text-center whitespace-nowrap z-[237]",
        children: "Ready to Transform Your Film Equipment Experience?",
      }),
      i.jsxs("div", {
        className:
          "w-[1280px] h-[212px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-[96px] left-[80px] z-[236]",
        children: [
          i.jsx(L, {
            className:
              "flex w-[613px] h-[56px] justify-center items-start font-['Inter'] text-[20px] font-normal leading-[28px] text-[#fff] relative text-center z-[238] mt-[62.16px] mr-0 mb-0 ml-[334.109px]",
            children:
              "Join FilmGearHub today and connect with the perfect equipment partners for your next production.",
          }),
          i.jsxs("div", {
            className:
              "w-[1248px] h-[60px] bg-[rgba(0,0,0,0)] relative z-[239] mt-[33.84px] mr-0 mb-0 ml-[16px]",
            children: [
              i.jsx(L, {
                className:
                  "w-[199.656px] h-[60px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border-2 border-[#fff] absolute top-0 left-[618.578px] z-[242]",
                children: i.jsx("span", {
                  className:
                    "flex w-[132px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-medium leading-[19.364px] text-[#fff] absolute top-[16.56px] left-[32px] text-center whitespace-nowrap z-[243]",
                  children: "Join as Merchant",
                }),
              }),
              i.jsx(L, {
                className:
                  "w-[172.813px] h-[60px] bg-[#fff] rounded-[8px] absolute top-0 left-[429.766px] z-[240]",
                children: i.jsx("span", {
                  className:
                    "flex w-[109px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-medium leading-[19.364px] text-[#0369a1] absolute top-[16.56px] left-[32px] text-center whitespace-nowrap z-[241]",
                  children: "Join as Renter",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Gg = "/assets/gear_icon_footer-10b231fb.svg",
  Qg = "/assets/instagram-0e509a8d.svg",
  Yg = "/assets/twitter-09f67c7c.svg",
  Xg = "/assets/facebook-42d4ac44.svg",
  Jg = "/assets/linkedin-2c4f7c8b.svg";
function qg() {
  return i.jsxs("div", {
    className:
      "w-[1440px] h-[365px] bg-[#111827] relative z-[244] mt-0 mr-0 mb-0 ml-0",
    children: [
      i.jsx(L, {
        to: "/",
        className:
          "flex h-[32px] justify-start items-start font-['Inter'] text-[24px] font-bold leading-[32px] text-[#fff] absolute top-[43.24px] left-[128px] text-left whitespace-nowrap z-[248]",
        children: "FilmGearHub",
      }),
      i.jsxs("div", {
        className:
          "w-[1280px] h-[269px] bg-[rgba(0,0,0,0)] absolute top-[48px] left-[80px] z-[245]",
        children: [
          i.jsxs("div", {
            className:
              "w-[1248px] h-[164px] bg-[rgba(0,0,0,0)] relative z-[246] mt-0 mr-0 mb-0 ml-[16px]",
            children: [
              i.jsxs("div", {
                className:
                  "w-[288px] h-[164px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[247]",
                children: [
                  i.jsx("div", {
                    className:
                      "flex w-[24px] h-[24px] justify-center items-center flex-nowrap relative overflow-hidden z-[249] mt-[3px] mr-0 mb-0 ml-0",
                    children: i.jsx("img", {
                      src: Gg,
                      alt: "Gear Footer Icon",
                      className:
                        "w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[250]",
                    }),
                  }),
                  i.jsx("span", {
                    className:
                      "flex w-[256px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] relative text-left z-[251] mt-[21.24px] mr-0 mb-0 ml-0",
                    children:
                      "Connecting filmmakers with equipment merchants worldwide.",
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[288px] h-[28px] bg-[rgba(0,0,0,0)] relative z-[252] mt-[15.76px] mr-0 mb-0 ml-0",
                    children: [
                      i.jsx(L, {
                        to: "/twitter",
                        className:
                          "flex w-[20px] h-[20px] justify-center items-center flex-nowrap absolute top-[3.5px] left-[33.5px] overflow-hidden z-[255]",
                        children: i.jsx("img", {
                          src: Yg,
                          alt: "Twitter",
                          className:
                            "w-[20px] h-[20px] shrink-0 relative overflow-hidden z-[256]",
                        }),
                      }),
                      i.jsx(L, {
                        to: "/facebook",
                        className:
                          "flex w-[20px] h-[20px] justify-center items-center flex-nowrap absolute top-[3.5px] left-[69.5px] overflow-hidden z-[257]",
                        children: i.jsx("img", {
                          src: Xg,
                          alt: "Facebook",
                          className:
                            "w-[20px] h-[20px] shrink-0 relative overflow-hidden z-[258]",
                        }),
                      }),
                      i.jsx(L, {
                        to: "/instagram",
                        className:
                          "flex w-[17.5px] h-[20px] justify-center items-center flex-nowrap absolute top-[3.5px] left-0 overflow-hidden z-[253]",
                        children: i.jsx("img", {
                          src: Qg,
                          alt: "Instagram",
                          className:
                            "w-[17.5px] h-[20px] shrink-0 relative overflow-hidden z-[254]",
                        }),
                      }),
                      i.jsx(L, {
                        to: "/linkedin",
                        className:
                          "flex w-[17.5px] h-[20px] justify-center items-center flex-nowrap absolute top-[3.5px] left-[105.5px] overflow-hidden z-[259]",
                        children: i.jsx("img", {
                          src: Jg,
                          alt: "Linkedin",
                          className:
                            "w-[17.5px] h-[20px] shrink-0 relative overflow-hidden z-[260]",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className:
                  "w-[288px] h-[164px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[320px] z-[261]",
                children: [
                  i.jsx("span", {
                    className:
                      "block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#fff] relative text-left whitespace-nowrap z-[262] mt-[-0.92px] mr-0 mb-0 ml-0",
                    children: "Platform",
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[288px] h-[120px] bg-[rgba(0,0,0,0)] relative z-[263] mt-[16.92px] mr-0 mb-0 ml-0",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[264] mt-0 mr-0 mb-0 ml-0",
                        children: i.jsx(L, {
                          to: "/#how-it-works",
                          onClick: (e) => {
                            e.preventDefault();
                            const t = document.getElementById("how-it-works");
                            if (t) {
                              const r =
                                t.getBoundingClientRect().top +
                                window.pageYOffset +
                                -80;
                              window.scrollTo({ top: r, behavior: "smooth" });
                            }
                          },
                          className:
                            "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[265]",
                          children: "How It Works",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[266] mt-[8px] mr-0 mb-0 ml-0",
                        children: i.jsx(L, {
                          to: "/features",
                          className:
                            "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[267]",
                          children: "Features",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[268] mt-[8px] mr-0 mb-0 ml-0",
                        children: i.jsx(L, {
                          to: "/pricing",
                          className:
                            "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[269]",
                          children: "Pricing",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[270] mt-[8px] mr-0 mb-0 ml-0",
                        children: i.jsx(L, {
                          to: "/faqs",
                          className:
                            "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[271]",
                          children: "FAQs",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className:
                  "w-[288px] h-[164px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[640px] z-[272]",
                children: [
                  i.jsx("span", {
                    className:
                      "block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#fff] relative text-left whitespace-nowrap z-[273] mt-[-0.64px] mr-0 mb-0 ml-0",
                    children: "Company",
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[288px] h-[120px] bg-[rgba(0,0,0,0)] relative z-[274] mt-[16.64px] mr-0 mb-0 ml-0",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[275] mt-0 mr-0 mb-0 ml-0",
                        children: i.jsx(L, {
                          to: "/about-us",
                          className:
                            "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[276]",
                          children: "About Us",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[277] mt-[8px] mr-0 mb-0 ml-0",
                        children: i.jsx(L, {
                          to: "/blog",
                          className:
                            "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[278]",
                          children: "Blog",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[279] mt-[8px] mr-0 mb-0 ml-0",
                        children: i.jsx(L, {
                          to: "/careers",
                          className:
                            "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[280]",
                          children: "Careers",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[281] mt-[8px] mr-0 mb-0 ml-0",
                        children: i.jsx(L, {
                          to: "/contact",
                          className:
                            "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[282]",
                          children: "Contact",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className:
                  "w-[288px] h-[164px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[960px] z-[283]",
                children: [
                  i.jsx("span", {
                    className:
                      "block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#fff] relative text-left whitespace-nowrap z-[284] mt-[-0.64px] mr-0 mb-0 ml-0",
                    children: "Legal",
                  }),
                  i.jsxs("div", {
                    className:
                      "w-[288px] h-[88px] bg-[rgba(0,0,0,0)] relative z-[285] mt-[16.64px] mr-0 mb-0 ml-0",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[286] mt-0 mr-0 mb-0 ml-0",
                        children: i.jsx(L, {
                          to: "/terms-of-service",
                          className:
                            "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[287]",
                          children: "Terms of Service",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[288] mt-[8px] mr-0 mb-0 ml-0",
                        children: i.jsx(L, {
                          to: "/privacy-policy",
                          className:
                            "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[289]",
                          children: "Privacy Policy",
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[290] mt-[8px] mr-0 mb-0 ml-0",
                        children: i.jsx(L, {
                          to: "/cookie-policy",
                          className:
                            "flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[291]",
                          children: "Cookie Policy",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsx("div", {
            className:
              "w-[1248px] h-[57px] bg-[rgba(0,0,0,0)] relative z-[292] mt-[48px] mr-0 mb-0 ml-[16px] border-t border-t-[#1F2937] box-border",
            children: i.jsx("span", {
              className:
                "flex w-[312px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#6b7280] absolute top-[31.88px] left-[467.266px] text-center whitespace-nowrap z-[293]",
              children: "© 2023 FilmGearHub. All rights reserved.",
            }),
          }),
        ],
      }),
    ],
  });
}
function Zg() {
  return i.jsx("div", {
    className:
      "main-container flex w-[1440px] flex-col items-start flex-nowrap bg-[#fff] rounded-[8px] border-solid border-2 border-[#ced4da] relative overflow-hidden mx-auto my-0",
    children: i.jsxs("div", {
      className: "w-[1440px] h-[4390px] shrink-0 bg-[rgba(0,0,0,0)] relative",
      children: [
        i.jsx(Ig, {}),
        i.jsx(Og, {}),
        i.jsx(Mg, {}),
        i.jsx(Fg, {}),
        i.jsx($g, {}),
        i.jsx(Hg, {}),
        i.jsx(Kg, {}),
        i.jsx(qg, {}),
      ],
    }),
  });
}
const ey = rp(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  an = m.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, l) => {
      const s = r ? Q0 : "button";
      return i.jsx(s, {
        className: st(ey({ variant: t, size: n, className: e })),
        ref: l,
        ...o,
      });
    },
  );
an.displayName = "Button";
function ty() {
  return i.jsx("header", {
    className:
      "bg-white shadow-sm relative z-10 px-4 sm:px-8 lg:px-[80px] h-[74px]",
    children: i.jsxs("div", {
      className:
        "container mx-auto flex items-center justify-between h-[74px] p-4",
      children: [
        i.jsx(L, {
          to: "/",
          className: "flex items-center",
          children: i.jsx("img", {
            src: Cl,
            alt: "Gear Icon",
            className: "shrink-0 pt-[7px]",
          }),
        }),
        i.jsx(L, {
          to: "/",
          className:
            "absolute ml-8 text-lg sm:text-xl lg:text-2xl font-bold text-sky-700 leading-6",
          children: "FilmGearHub",
        }),
        i.jsxs("div", {
          className:
            "flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-2",
          children: [
            i.jsx("span", {
              className:
                "text-muted-foreground text-sm sm:text-base font-normal leading-6",
              children: "Already have an account?",
            }),
            i.jsx(an, {
              asChild: !0,
              variant: "link",
              className:
                "text-sky-700 font-medium text-sm sm:text-base pr-0 sm:pr-[8.8px] h-auto no-underline hover:no-underline p-0",
              children: i.jsx(L, {
                to: "/login",
                className: "no-underline hover:no-underline",
                children: "Log In",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function ny(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
function ry(e) {
  const [t, n] = m.useState(void 0);
  return (
    $n(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const l = o[0];
          let s, a;
          if ("borderBoxSize" in l) {
            const u = l.borderBoxSize,
              c = Array.isArray(u) ? u[0] : u;
            ((s = c.inlineSize), (a = c.blockSize));
          } else ((s = e.offsetWidth), (a = e.offsetHeight));
          n({ width: s, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var zl = "Checkbox",
  [oy, Cy] = pa(zl),
  [ly, wa] = oy(zl);
function sy(e) {
  const {
      __scopeCheckbox: t,
      checked: n,
      children: r,
      defaultChecked: o,
      disabled: l,
      form: s,
      name: a,
      onCheckedChange: u,
      required: c,
      value: f = "on",
      internal_do_not_use_render: h,
    } = e,
    [x, w] = Of({ prop: n, defaultProp: o ?? !1, onChange: u, caller: zl }),
    [b, g] = m.useState(null),
    [y, p] = m.useState(null),
    d = m.useRef(!1),
    v = b ? !!s || !!b.closest("form") : !0,
    k = {
      checked: x,
      disabled: l,
      setChecked: w,
      control: b,
      setControl: g,
      name: a,
      form: s,
      value: f,
      hasConsumerStoppedPropagationRef: d,
      required: c,
      defaultChecked: Ut(o) ? !1 : o,
      isFormControl: v,
      bubbleInput: y,
      setBubbleInput: p,
    };
  return i.jsx(ly, { scope: t, ...k, children: iy(h) ? h(k) : r });
}
var wp = "CheckboxTrigger",
  bp = m.forwardRef(
    ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
      const {
          control: l,
          value: s,
          disabled: a,
          checked: u,
          required: c,
          setControl: f,
          setChecked: h,
          hasConsumerStoppedPropagationRef: x,
          isFormControl: w,
          bubbleInput: b,
        } = wa(wp, e),
        g = wt(o, f),
        y = m.useRef(u);
      return (
        m.useEffect(() => {
          const p = l == null ? void 0 : l.form;
          if (p) {
            const d = () => h(y.current);
            return (
              p.addEventListener("reset", d),
              () => p.removeEventListener("reset", d)
            );
          }
        }, [l, h]),
        i.jsx(Ae.button, {
          type: "button",
          role: "checkbox",
          "aria-checked": Ut(u) ? "mixed" : u,
          "aria-required": c,
          "data-state": Ep(u),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: s,
          ...r,
          ref: g,
          onKeyDown: ke(t, (p) => {
            p.key === "Enter" && p.preventDefault();
          }),
          onClick: ke(n, (p) => {
            (h((d) => (Ut(d) ? !0 : !d)),
              b &&
                w &&
                ((x.current = p.isPropagationStopped()),
                x.current || p.stopPropagation()));
          }),
        })
      );
    },
  );
bp.displayName = wp;
var ba = m.forwardRef((e, t) => {
  const {
    __scopeCheckbox: n,
    name: r,
    checked: o,
    defaultChecked: l,
    required: s,
    disabled: a,
    value: u,
    onCheckedChange: c,
    form: f,
    ...h
  } = e;
  return i.jsx(sy, {
    __scopeCheckbox: n,
    checked: o,
    defaultChecked: l,
    disabled: a,
    required: s,
    onCheckedChange: c,
    name: r,
    form: f,
    value: u,
    internal_do_not_use_render: ({ isFormControl: x }) =>
      i.jsxs(i.Fragment, {
        children: [
          i.jsx(bp, { ...h, ref: t, __scopeCheckbox: n }),
          x && i.jsx(jp, { __scopeCheckbox: n }),
        ],
      }),
  });
});
ba.displayName = zl;
var kp = "CheckboxIndicator",
  Np = m.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e,
      l = wa(kp, n);
    return i.jsx(ma, {
      present: r || Ut(l.checked) || l.checked === !0,
      children: i.jsx(Ae.span, {
        "data-state": Ep(l.checked),
        "data-disabled": l.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style },
      }),
    });
  });
Np.displayName = kp;
var Sp = "CheckboxBubbleInput",
  jp = m.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
    const {
        control: r,
        hasConsumerStoppedPropagationRef: o,
        checked: l,
        defaultChecked: s,
        required: a,
        disabled: u,
        name: c,
        value: f,
        form: h,
        bubbleInput: x,
        setBubbleInput: w,
      } = wa(Sp, e),
      b = wt(n, w),
      g = ny(l),
      y = ry(r);
    m.useEffect(() => {
      const d = x;
      if (!d) return;
      const v = window.HTMLInputElement.prototype,
        N = Object.getOwnPropertyDescriptor(v, "checked").set,
        E = !o.current;
      if (g !== l && N) {
        const C = new Event("click", { bubbles: E });
        ((d.indeterminate = Ut(l)),
          N.call(d, Ut(l) ? !1 : l),
          d.dispatchEvent(C));
      }
    }, [x, g, l, o]);
    const p = m.useRef(Ut(l) ? !1 : l);
    return i.jsx(Ae.input, {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: s ?? p.current,
      required: a,
      disabled: u,
      name: c,
      value: f,
      form: h,
      ...t,
      tabIndex: -1,
      ref: b,
      style: {
        ...t.style,
        ...y,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)",
      },
    });
  });
jp.displayName = Sp;
function iy(e) {
  return typeof e == "function";
}
function Ut(e) {
  return e === "indeterminate";
}
function Ep(e) {
  return Ut(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Cp = m.forwardRef(({ className: e, ...t }, n) =>
  i.jsx(ba, {
    ref: n,
    className: st(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e,
    ),
    ...t,
    children: i.jsx(Np, {
      className: st("flex items-center justify-center text-current"),
      children: i.jsx(Wv, { className: "h-4 w-4" }),
    }),
  }),
);
Cp.displayName = ba.displayName;
const ay = "/assets/camera-b3c5488a.svg",
  uy = "/assets/home-f5f03134.svg";
function cy() {
  const [e, t] = m.useState(null),
    [n, r] = m.useState(!1),
    [o, l] = m.useState(!1),
    { toast: s } = Wr(),
    a = gi(),
    [u, c] = m.useState({
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: !1,
    }),
    [f, h] = m.useState({
      email: "",
      password: "",
      confirmPassword: "",
      type: "",
    }),
    x = (y, p) => {
      (c((d) => ({ ...d, [y]: p })),
        y !== "agreeToTerms" && h((d) => ({ ...d, [y]: "" })));
    },
    w = () => {
      const y = { email: "", password: "", confirmPassword: "", type: "" };
      return (
        e || (y.type = "Please select an account type"),
        u.email.trim()
          ? /\S+@\S+\.\S+/.test(u.email) ||
            (y.email = "Please enter a valid email address")
          : (y.email = "Email is required"),
        u.password
          ? u.password.length < 8 &&
            (y.password = "Password must be at least 8 characters")
          : (y.password = "Password is required"),
        u.confirmPassword
          ? u.password !== u.confirmPassword &&
            (y.confirmPassword = "Passwords do not match")
          : (y.confirmPassword = "Please confirm your password"),
        h(y),
        !y.email && !y.password && !y.confirmPassword && !y.type
      );
    },
    b = (y) => {
      (y.preventDefault(),
        w() && u.agreeToTerms
          ? (console.log("Form submitted:", { selectedType: e, ...u }),
            s({
              title: "Success!",
              description: "Account created successfully!",
            }),
            setTimeout(() => {
              a("/email-verify");
            }, 1e3))
          : u.agreeToTerms
            ? (w(),
              s({
                variant: "destructive",
                title: "Validation Error",
                description: "Please fix the validation errors above",
              }))
            : s({
                variant: "destructive",
                title: "Terms Required",
                description:
                  "Please agree to the Terms of Service and Privacy Policy",
              }));
    },
    g =
      e &&
      u.email.trim() &&
      u.password &&
      u.confirmPassword &&
      u.password === u.confirmPassword &&
      u.agreeToTerms;
  return i.jsx("div", {
    className:
      "w-full max-w-screen-2xl min-h-screen bg-transparent mx-auto flex flex-col items-center py-8 sm:py-12 lg:py-16 px-4",
    children: i.jsxs("div", {
      className: "w-full max-w-md flex flex-col items-center",
      children: [
        i.jsx("h1", {
          className:
            "font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 text-center mb-4",
          children: "Create Your Account",
        }),
        i.jsx("span", {
          className:
            "block text-base sm:text-lg text-gray-600 text-center mb-6 sm:mb-8 px-4",
          children:
            "Join the FilmGearHub community and start connecting with the film industry",
        }),
        i.jsxs("form", {
          onSubmit: b,
          className:
            "w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-6",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("span", {
                  className: "block text-sm font-semibold text-gray-700 mb-3",
                  children: "I want to join as:",
                }),
                i.jsx("div", {
                  className: "flex gap-4",
                  children: ["renter", "merchant"].map((y) => {
                    const p = e === y,
                      d = y === "renter" ? ay : uy,
                      v = y === "renter" ? "Renter" : "Merchant",
                      k =
                        y === "renter"
                          ? "Find & rent equipment"
                          : "List & rent equipment";
                    return i.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          (t(y), h((N) => ({ ...N, type: "" })));
                        },
                        className:
                          "flex-1 rounded-xl border-2 transition-colors flex flex-col items-center py-6 px-2 cursor-pointer " +
                          (p
                            ? "border-sky-500 bg-sky-50"
                            : "border-gray-200 hover:border-sky-500 bg-white"),
                        "aria-pressed": p,
                        children: [
                          i.jsx("div", {
                            className:
                              "bg-sky-100 rounded-full flex items-center justify-center w-12 h-12 mb-3",
                            children: i.jsx("img", {
                              src: d,
                              alt: v,
                              className: "w-6 h-5",
                            }),
                          }),
                          i.jsx("span", {
                            className:
                              "font-medium text-base text-gray-900 mb-1",
                            children: v,
                          }),
                          i.jsx("span", {
                            className: "text-xs text-gray-500 text-center",
                            children: k,
                          }),
                        ],
                      },
                      y,
                    );
                  }),
                }),
                f.type &&
                  i.jsx("p", {
                    className: "text-red-500 text-sm mt-2",
                    children: f.type,
                  }),
              ],
            }),
            i.jsxs("div", {
              children: [
                i.jsx("label", {
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  htmlFor: "email",
                  children: "Email Address",
                }),
                i.jsx("input", {
                  id: "email",
                  type: "email",
                  value: u.email,
                  onChange: (y) => x("email", y.target.value),
                  placeholder: "Enter your email address",
                  className: `w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${f.email ? "border-red-500" : "border-gray-300"}`,
                }),
                f.email &&
                  i.jsx("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: f.email,
                  }),
              ],
            }),
            i.jsxs("div", {
              children: [
                i.jsx("label", {
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  htmlFor: "password",
                  children: "Password",
                }),
                i.jsxs("div", {
                  className: "relative",
                  children: [
                    i.jsx("input", {
                      id: "password",
                      type: n ? "text" : "password",
                      value: u.password,
                      onChange: (y) => x("password", y.target.value),
                      placeholder: "Create a strong password",
                      className: `w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 pr-10 ${f.password ? "border-red-500" : "border-gray-300"}`,
                    }),
                    i.jsx("button", {
                      type: "button",
                      tabIndex: -1,
                      className:
                        "absolute right-3 top-1/2 -translate-y-1/2 focus:outline-none",
                      "aria-label": n ? "Hide password" : "Show password",
                      onClick: () => r((y) => !y),
                      children: n
                        ? i.jsx(ii, { className: "w-4 h-4 text-gray-500" })
                        : i.jsx(ai, { className: "w-4 h-4 text-gray-500" }),
                    }),
                  ],
                }),
                f.password &&
                  i.jsx("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: f.password,
                  }),
              ],
            }),
            i.jsxs("div", {
              children: [
                i.jsx("label", {
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  htmlFor: "confirm-password",
                  children: "Confirm Password",
                }),
                i.jsxs("div", {
                  className: "relative",
                  children: [
                    i.jsx("input", {
                      id: "confirm-password",
                      type: o ? "text" : "password",
                      value: u.confirmPassword,
                      onChange: (y) => x("confirmPassword", y.target.value),
                      placeholder: "Confirm your password",
                      className: `w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 pr-10 ${f.confirmPassword ? "border-red-500" : "border-gray-300"}`,
                    }),
                    i.jsx("button", {
                      type: "button",
                      tabIndex: -1,
                      className:
                        "absolute right-3 top-1/2 -translate-y-1/2 focus:outline-none",
                      "aria-label": o ? "Hide password" : "Show password",
                      onClick: () => l((y) => !y),
                      children: o
                        ? i.jsx(ii, { className: "w-4 h-4 text-gray-500" })
                        : i.jsx(ai, { className: "w-4 h-4 text-gray-500" }),
                    }),
                  ],
                }),
                f.confirmPassword &&
                  i.jsx("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: f.confirmPassword,
                  }),
              ],
            }),
            i.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                i.jsx("div", {
                  className: "flex items-center",
                  children: i.jsx(Cp, {
                    id: "terms",
                    checked: u.agreeToTerms,
                    onCheckedChange: (y) => x("agreeToTerms", y),
                    className:
                      "w-4 h-4 rounded border border-black data-[state=checked]:bg-sky-600 data-[state=checked]:border-sky-600",
                  }),
                }),
                i.jsxs("span", {
                  className: "text-sm text-gray-700",
                  children: [
                    "I agree to the",
                    " ",
                    i.jsx("a", {
                      href: "#",
                      className:
                        "text-sky-600 underline hover:text-sky-700 transition-colors",
                      children: "Terms of Service",
                    }),
                    " ",
                    "and",
                    " ",
                    i.jsx("a", {
                      href: "#",
                      className:
                        "text-sky-600 underline hover:text-sky-700 transition-colors",
                      children: "Privacy Policy",
                    }),
                  ],
                }),
              ],
            }),
            i.jsx(an, {
              type: "submit",
              className: `w-full h-12 rounded-md mt-2 flex items-center justify-center text-base font-semibold ${g ? "bg-sky-600 text-white hover:bg-sky-700" : "bg-sky-600 text-white hover:bg-sky-700 opacity-80"}`,
              children: "Create Account",
            }),
            i.jsx("div", {
              className:
                "w-full flex justify-center mt-6 border-t border-gray-200 pt-6",
              children: i.jsxs("span", {
                className: "text-base text-gray-600",
                children: [
                  "Already have an account?",
                  " ",
                  i.jsx(L, {
                    to: "/login",
                    className:
                      "font-normal text-sky-600 text-base underline p-0 h-auto",
                    children: "Log In",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function dy() {
  return i.jsx("div", {
    className:
      "main-container flex w-full max-w-[1440px] flex-col items-start flex-nowrap bg-[#fff] rounded-[8px] border-solid border-2 border-[#ced4da] relative overflow-hidden mx-auto my-0",
    children: i.jsxs("div", {
      className: "w-full min-h-screen bg-[#f9fafb] relative",
      children: [i.jsx(ty, {}), i.jsx(cy, {})],
    }),
  });
}
function fy() {
  return i.jsx("header", {
    className:
      "bg-white shadow-sm relative z-10 px-4 sm:px-8 lg:px-[80px] h-[74px]",
    children: i.jsxs("div", {
      className:
        "container mx-auto flex items-center justify-between h-[74px] p-4",
      children: [
        i.jsxs("div", {
          className: "flex items-center cursor-pointer",
          onClick: () => (window.location.href = "/"),
          role: "button",
          tabIndex: 0,
          onKeyPress: (e) => {
            (e.key === "Enter" || e.key === " ") &&
              (window.location.href = "/");
          },
          "aria-label": "Go to homepage",
          children: [
            i.jsx("img", {
              src: Cl,
              alt: "Gear Icon",
              className: "shrink-0 pt-[7px]",
            }),
            i.jsx("span", {
              className:
                "ml-2 text-xl lg:text-2xl font-bold text-sky-700 leading-6",
              children: "FilmGearHub",
            }),
          ],
        }),
        i.jsxs("div", {
          className: "flex items-center gap-6",
          children: [
            i.jsx("span", {
              className:
                "text-muted-foreground text-base font-normal leading-6",
              children: "Need help?",
            }),
            i.jsx("a", {
              href: "mailto:support@filmgearhub.com",
              className:
                "text-sky-600 font-medium text-base leading-6 hover:text-sky-800 transition-colors no-underline",
              children: "Contact Support",
            }),
          ],
        }),
      ],
    }),
  });
}
const zp = m.forwardRef(({ className: e, type: t, ...n }, r) =>
  i.jsx("input", {
    type: t,
    className: st(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e,
    ),
    ref: r,
    ...n,
  }),
);
zp.displayName = "Input";
const py = "/assets/verifyMessage-4cf79a2a.svg",
  my = "/assets/backArrow-a73a3f66.svg";
function hy() {
  const e = gi(),
    { toast: t } = Wr(),
    n = "john.doe@example.com",
    [r, o] = m.useState(["", "", "", "", "", ""]),
    [l, s] = m.useState(!1),
    [a, u] = m.useState(!1),
    [c, f] = m.useState(0),
    [h, x] = m.useState(0),
    w = m.useRef([]);
  (m.useEffect(() => {
    w.current[0] && w.current[0].focus();
  }, []),
    m.useEffect(() => {
      if (c > 0) {
        const N = setTimeout(() => f(c - 1), 1e3);
        return () => clearTimeout(N);
      }
    }, [c]));
  const b = (N, E) => {
      if (!/^\d*$/.test(E)) return;
      const C = [...r];
      ((C[N] = E),
        o(C),
        E &&
          N < 5 &&
          (x(N + 1),
          setTimeout(() => {
            var S;
            (S = w.current[N + 1]) == null || S.focus();
          }, 0)));
    },
    g = (N, E) => {
      var C;
      E.key === "Backspace" &&
        !r[N] &&
        N > 0 &&
        ((C = w.current[N - 1]) == null || C.focus(), x(N - 1));
    },
    y = (N) => {
      x(N);
    },
    p = (N) => {
      var C;
      N.preventDefault();
      const E = N.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
      if (E.length === 6) {
        const S = [...r];
        for (let _ = 0; _ < 6; _++) S[_] = E[_] || "";
        (o(S), (C = w.current[5]) == null || C.focus(), x(5));
      }
    },
    d = r.every((N) => N !== ""),
    v = () => {
      if (!d) return;
      s(!0);
      const N = r.join("");
      setTimeout(() => {
        var E;
        (N.length === 6 && /^\d{6}$/.test(N)
          ? (t({
              title: "Email Verified!",
              description: "Your email has been successfully verified.",
            }),
            setTimeout(() => {
              e("/login");
            }, 1500))
          : (t({
              title: "Verification Failed",
              description: "Invalid verification code. Please try again.",
              variant: "destructive",
            }),
            o(["", "", "", "", "", ""]),
            (E = w.current[0]) == null || E.focus()),
          s(!1));
      }, 2e3);
    },
    k = () => {
      c > 0 ||
        (u(!0),
        setTimeout(() => {
          (t({
            title: "Code Resent",
            description: "A new verification code has been sent to your email.",
          }),
            f(30),
            u(!1));
        }, 1e3));
    };
  return i.jsx("div", {
    className:
      "flex w-full min-h-screen items-center justify-center bg-transparent px-2 sm:px-0",
    children: i.jsxs("div", {
      className: "flex flex-col items-center w-full max-w-[448px] mx-auto",
      children: [
        i.jsxs("div", {
          className: "flex flex-col items-center w-full mb-8",
          children: [
            i.jsx("div", {
              className:
                "flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 mb-4",
              children: i.jsx("img", {
                src: py,
                alt: "Verify Email",
                className: "w-[30px] h-[24px]",
              }),
            }),
            i.jsx("h1", {
              className:
                "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4",
              children: "Verify Your Email",
            }),
            i.jsx("p", {
              className: "text-base sm:text-lg text-gray-600 text-center",
              children: "We've sent a 6-digit verification code to",
            }),
            i.jsx("p", {
              className:
                "text-base sm:text-lg font-semibold text-gray-800 text-center break-all",
              children: n,
            }),
          ],
        }),
        i.jsxs("div", {
          className:
            "w-full bg-white rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col gap-6",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("div", {
                  className: "text-center mb-4",
                  children: i.jsx("span", {
                    className: "text-sm font-semibold text-gray-700",
                    children: "Enter the 6-digit code",
                  }),
                }),
                i.jsx("div", {
                  className:
                    "flex justify-between gap-1 sm:gap-2 px-10 sm:px-3",
                  children: [0, 1, 2, 3, 4, 5].map((N) =>
                    i.jsx(
                      zp,
                      {
                        ref: (E) => (w.current[N] = E),
                        type: "text",
                        maxLength: 1,
                        value: r[N],
                        onChange: (E) => b(N, E.target.value),
                        onKeyDown: (E) => g(N, E),
                        onPaste: p,
                        onFocus: () => y(N),
                        disabled: N > h,
                        className: `w-10 h-10 sm:w-12 sm:h-12 text-center text-xl font-bold font-mono rounded-lg border-2 ${r[N] ? "border-sky-400 bg-sky-50" : N === h ? "border-sky-500" : N < h ? "border-gray-300" : "border-gray-200 bg-gray-100"} focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-60`,
                      },
                      N,
                    ),
                  ),
                }),
              ],
            }),
            i.jsx(an, {
              onClick: v,
              disabled: !d || l,
              className: `w-full h-11 sm:h-12 text-base font-semibold rounded-lg transition-all ${d && !l ? "bg-sky-600 text-white hover:bg-sky-700" : "bg-sky-500 text-white opacity-60 cursor-not-allowed"}`,
              children: l
                ? i.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                      }),
                      "Verifying...",
                    ],
                  })
                : "Verify Email",
            }),
            i.jsxs("div", {
              className:
                "flex flex-col items-center gap-2 pt-4 sm:pt-6 border-t border-gray-200",
              children: [
                i.jsx("span", {
                  className: "text-gray-600 text-base",
                  children: "Didn't receive the code?",
                }),
                i.jsx(an, {
                  variant: "link",
                  onClick: k,
                  disabled: c > 0 || a,
                  className: `font-medium underline text-base p-0 h-auto ${c > 0 || a ? "text-gray-400 cursor-not-allowed" : "text-sky-600 hover:text-sky-800"}`,
                  children: a
                    ? "Sending..."
                    : c > 0
                      ? `Resend in ${c}s`
                      : "Resend Code",
                }),
              ],
            }),
            i.jsx("div", {
              className: "flex justify-center items-center mt-2",
              children: i.jsxs(L, {
                to: "/create-account",
                className:
                  "flex items-center text-gray-500 text-sm hover:underline",
                children: [
                  i.jsx("img", {
                    src: my,
                    alt: "Back Arrow Icon",
                    className: "pr-1",
                  }),
                  "Back to Sign Up",
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function xy() {
  return i.jsx("div", {
    className:
      "main-container flex w-full max-w-[1440px] flex-col items-start flex-nowrap bg-[#fff] rounded-[8px] border-solid border-2 border-[#ced4da] relative overflow-hidden mx-auto my-0",
    children: i.jsxs("div", {
      className: "w-full min-h-screen bg-[#f9fafb] relative",
      children: [i.jsx(fy, {}), i.jsx(hy, {})],
    }),
  });
}
function Pp() {
  return i.jsx("header", {
    className:
      "bg-white shadow-sm relative z-10 px-4 sm:px-8 lg:px-[80px] h-[74px]",
    children: i.jsxs("div", {
      className:
        "container mx-auto flex items-center justify-between h-[74px] p-4",
      children: [
        i.jsxs("div", {
          className: "flex items-center cursor-pointer",
          onClick: () => (window.location.href = "/"),
          role: "button",
          tabIndex: 0,
          onKeyPress: (e) => {
            (e.key === "Enter" || e.key === " ") &&
              (window.location.href = "/");
          },
          "aria-label": "Go to homepage",
          children: [
            i.jsx("img", {
              src: Cl,
              alt: "Gear Icon",
              className: "shrink-0 pt-[7px]",
            }),
            i.jsx("span", {
              className:
                "ml-2 text-xl lg:text-2xl font-bold text-sky-700 leading-6",
              children: "FilmGearHub",
            }),
          ],
        }),
        i.jsxs("div", {
          className: "flex items-center gap-6",
          children: [
            i.jsx("span", {
              className: "text-gray-500 text-base font-normal leading-6 pr-2.5",
              children: "New to FilmGearHub?",
            }),
            i.jsx("a", {
              href: "/create-account",
              className:
                "text-sky-600 font-medium text-base leading-6 hover:text-sky-800 transition-colors no-underline pr-4",
              children: "Sign Up",
            }),
          ],
        }),
      ],
    }),
  });
}
function vy() {
  const { toast: e } = Wr(),
    [t, n] = m.useState(!1),
    [r, o] = m.useState({ email: "", password: "" }),
    [l, s] = m.useState({ email: "", password: "" }),
    a = (f, h) => {
      (o((x) => ({ ...x, [f]: h })), s((x) => ({ ...x, [f]: "" })));
    },
    u = () => {
      let f = !0;
      const h = { email: "", password: "" };
      return (
        r.email.trim()
          ? /\S+@\S+\.\S+/.test(r.email) ||
            ((h.email = "Please enter a valid email address"), (f = !1))
          : ((h.email = "Email is required"), (f = !1)),
        r.password || ((h.password = "Password is required"), (f = !1)),
        s(h),
        f
      );
    },
    c = (f) => {
      (f.preventDefault(),
        u()
          ? (e({
              title: "Login Successful!",
              description: "You have logged in successfully.",
            }),
            console.log("Login submitted:", r))
          : l.email
            ? e({
                variant: "destructive",
                title: "Validation Error",
                description: l.email,
              })
            : l.password
              ? e({
                  variant: "destructive",
                  title: "Validation Error",
                  description: l.password,
                })
              : e({
                  variant: "destructive",
                  title: "Validation Error",
                  description: "Please fill in all required fields.",
                }));
    };
  return i.jsx("div", {
    className:
      "w-full max-w-screen-2xl min-h-screen bg-transparent mx-auto flex flex-col items-center py-8 sm:py-12 lg:py-16 px-4",
    children: i.jsxs("div", {
      className: "w-full max-w-md flex flex-col items-center",
      children: [
        i.jsx("h1", {
          className:
            "font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 text-center mb-4",
          children: "Log In to FilmGearHub",
        }),
        i.jsx("span", {
          className:
            "block text-base sm:text-lg text-gray-600 text-center mb-6 sm:mb-8 px-4",
          children: "Welcome back! Sign in to access your account",
        }),
        i.jsxs("form", {
          onSubmit: c,
          className:
            "w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-6",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("label", {
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  htmlFor: "email",
                  children: "Email Address",
                }),
                i.jsx("input", {
                  id: "email",
                  type: "email",
                  value: r.email,
                  onChange: (f) => a("email", f.target.value),
                  placeholder: "Enter your email address",
                  className: `w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${l.email ? "border-red-500" : "border-gray-300"}`,
                }),
                l.email &&
                  i.jsx("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: l.email,
                  }),
              ],
            }),
            i.jsxs("div", {
              children: [
                i.jsx("label", {
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  htmlFor: "password",
                  children: "Password",
                }),
                i.jsxs("div", {
                  className: "relative",
                  children: [
                    i.jsx("input", {
                      id: "password",
                      type: t ? "text" : "password",
                      value: r.password,
                      onChange: (f) => a("password", f.target.value),
                      placeholder: "Enter your password",
                      className: `w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 pr-10 ${l.password ? "border-red-500" : "border-gray-300"}`,
                    }),
                    i.jsx("button", {
                      type: "button",
                      tabIndex: -1,
                      className:
                        "absolute right-3 top-1/2 -translate-y-1/2 focus:outline-none",
                      "aria-label": t ? "Hide password" : "Show password",
                      onClick: () => n((f) => !f),
                      children: t
                        ? i.jsx(ii, { className: "w-4 h-4 text-gray-500" })
                        : i.jsx(ai, { className: "w-4 h-4 text-gray-500" }),
                    }),
                  ],
                }),
                l.password &&
                  i.jsx("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: l.password,
                  }),
              ],
            }),
            i.jsx(L, {
              to: "/reset-password",
              className:
                "font-normal text-sky-600 text-base underline p-0 h-auto text-right",
              children: "Forgot Password?",
            }),
            i.jsx(an, {
              type: "submit",
              className:
                "w-full h-12 rounded-md mt-2 flex items-center justify-center text-base font-semibold bg-sky-600 text-white hover:bg-sky-700",
              children: "Log In",
            }),
            i.jsx("div", {
              className:
                "w-full flex justify-center border-t border-gray-200 pt-6",
              children: i.jsxs("span", {
                className: "text-base text-gray-600",
                children: [
                  "Don't have an account?",
                  " ",
                  i.jsx(L, {
                    to: "/create-account",
                    className:
                      "font-normal text-sky-600 text-base underline p-0 h-auto",
                    children: "Sign Up",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function gy() {
  return i.jsx("div", {
    className:
      "main-container flex flex-col bg-white rounded-lg border-2 border-gray-300 relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-screen",
    children: i.jsxs("div", {
      className: "w-full min-h-screen bg-gray-50 relative flex flex-col",
      children: [i.jsx(Pp, {}), i.jsx(vy, {})],
    }),
  });
}
const yy = "/assets/message-631a13a8.svg",
  wy = "/assets/Lock-8f6f2611.svg";
function by() {
  const { toast: e } = Wr(),
    [t, n] = m.useState(""),
    [r, o] = m.useState(""),
    l = () => {
      if (t.trim()) {
        if (!/\S+@\S+\.\S+/.test(t))
          return (o("Please enter a valid email address"), !1);
      } else return (o("Email is required"), !1);
      return (o(""), !0);
    },
    s = (a) => {
      (a.preventDefault(),
        l()
          ? (e({
              title: "Reset Link Sent!",
              description: "A password reset link has been sent to your email.",
            }),
            console.log("Reset password for:", t))
          : e({
              variant: "destructive",
              title: "Validation Error",
              description: r || "Please enter a valid email address.",
            }));
    };
  return i.jsx("div", {
    className:
      "w-full max-w-screen-2xl min-h-screen bg-transparent mx-auto flex flex-col items-center py-8 sm:py-12 lg:py-16 px-4",
    children: i.jsxs("div", {
      className: "relative w-full max-w-md flex flex-col items-center",
      children: [
        i.jsx("div", {
          className: "w-16 h-16 bg-sky-100 rounded-full relative z-10",
          children: i.jsx("div", {
            className: "relative z-10 mt-4 flex justify-center items-center",
            children: i.jsx("img", { src: wy, alt: "Lock Icon" }),
          }),
        }),
        i.jsx("div", {
          className: "mt-4",
          children: i.jsx("h1", {
            className:
              "font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 text-center mb-4",
            children: "Reset Your Password",
          }),
        }),
        i.jsx("span", {
          className:
            "block text-base sm:text-lg text-gray-600 text-center mb-6 sm:mb-8",
          children:
            "Enter your email address and we'll send you a link to reset your password",
        }),
        i.jsxs("form", {
          onSubmit: s,
          className:
            "w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-6",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("label", {
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  htmlFor: "email",
                  children: "Email Address",
                }),
                i.jsxs("div", {
                  className: "relative",
                  children: [
                    i.jsx("img", {
                      src: yy,
                      alt: "Message Icon",
                      className:
                        "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",
                    }),
                    i.jsx("input", {
                      id: "email",
                      type: "email",
                      value: t,
                      onChange: (a) => {
                        (n(a.target.value), o(""));
                      },
                      placeholder: "Enter your email address",
                      className: `pl-10 w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${r ? "border-red-500" : "border-gray-300"}`,
                    }),
                  ],
                }),
                r &&
                  i.jsx("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: r,
                  }),
              ],
            }),
            i.jsx(an, {
              type: "submit",
              className:
                "w-full h-12 rounded-md mt-2 flex items-center justify-center text-base font-semibold bg-sky-600 text-white hover:bg-sky-700",
              children: "Send Reset Link",
            }),
            i.jsx("div", {
              className:
                "w-full flex justify-center border-t border-gray-200 pt-5",
              children: i.jsxs("span", {
                className: "text-base text-gray-600",
                children: [
                  "Remember your password?",
                  " ",
                  i.jsx(L, {
                    to: "/login",
                    className:
                      "font-normal text-sky-600 text-base underline p-0 h-auto",
                    children: "Back to Log In",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function ky() {
  return i.jsx("div", {
    className:
      "main-container flex w-[1440px] flex-col items-start flex-nowrap bg-[#fff] rounded-[8px] border-solid border-2 border-[#ced4da] relative overflow-hidden mx-auto my-0",
    children: i.jsxs("div", {
      className: "w-[1440px] h-[1440px] shrink-0 bg-[#f9fafb] relative",
      children: [i.jsx(Pp, {}), i.jsx(by, {})],
    }),
  });
}
function Ny() {
  return i.jsxs(Ch, {
    children: [
      i.jsxs(nh, {
        children: [
          i.jsx(mn, { path: "/", element: i.jsx(Zg, {}) }),
          i.jsx(mn, { path: "/create-account", element: i.jsx(dy, {}) }),
          i.jsx(mn, { path: "/email-verify", element: i.jsx(xy, {}) }),
          i.jsx(mn, { path: "/login", element: i.jsx(gy, {}) }),
          i.jsx(mn, { path: "/reset-password", element: i.jsx(ky, {}) }),
        ],
      }),
      i.jsx(_g, {}),
    ],
  });
}
var Rp,
  Ju = Sl;
((Rp = Ju.createRoot), Ju.hydrateRoot);
const Sy = document.getElementById("app"),
  jy = Rp(Sy);
jy.render(i.jsx(Ny, {}));
