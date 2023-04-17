/*! For license information please see main.98b49e88.js.LICENSE.txt */
!(function () {
  var e = {
      472: function (e) {
        e.exports = "object" == typeof self ? self.FormData : window.FormData;
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
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
        var o = new Set(),
          i = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var A = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(A, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(A, v);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(A, v);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          y = Symbol.for("react.element"),
          w = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          j = Symbol.for("react.forward_ref"),
          B = Symbol.for("react.suspense"),
          P = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          _ = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var R = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var T = Symbol.iterator;
        function I(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (T && e[T]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          L = Object.assign;
        function z(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var Q = !1;
        function D(e, t) {
          if (!e || Q) return "";
          Q = !0;
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
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  l = r.stack.split("\n"),
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var s = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (Q = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = D(e.type, !1));
            case 11:
              return (e = D(e.type.render, !1));
            case 1:
              return (e = D(e.type, !0));
            default:
              return "";
          }
        }
        function M(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case w:
              return "Portal";
            case S:
              return "Profiler";
            case E:
              return "StrictMode";
            case B:
              return "Suspense";
            case P:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (t = e.displayName || null)
                  ? t
                  : M(e.type) || "Memo";
              case _:
                (t = e._payload), (e = e._init);
                try {
                  return M(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
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
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
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
              return M(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function H(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function J(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = H(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = H(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var n = t.checked;
          return L({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Z(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Y(e, t) {
          G(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return L({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function le(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
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
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var Ae = L(
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
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              Ae[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var xe = null;
        function ye(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          ke = null,
          Ee = null;
        function Se(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof we) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = ya(t)), we(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function Ne() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function Be() {}
        var Pe = !1;
        function Oe(e, t, n) {
          if (Pe) return e(t, n);
          Pe = !0;
          try {
            return je(e, t, n);
          } finally {
            (Pe = !1), (null !== ke || null !== Ee) && (Be(), Ne());
          }
        }
        function _e(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ya(n);
          if (null === r) return null;
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Re = !1;
        if (c)
          try {
            var Te = {};
            Object.defineProperty(Te, "passive", {
              get: function () {
                Re = !0;
              },
            }),
              window.addEventListener("test", Te, Te),
              window.removeEventListener("test", Te, Te);
          } catch (ce) {
            Re = !1;
          }
        function Ie(e, t, n, r, a, l, o, i, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Fe = !1,
          Le = null,
          ze = !1,
          Qe = null,
          De = {
            onError: function (e) {
              (Fe = !0), (Le = e);
            },
          };
        function Ue(e, t, n, r, a, l, o, i, s) {
          (Fe = !1), (Le = null), Ie.apply(De, arguments);
        }
        function Me(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Me(e) !== e) throw Error(l(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Me(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return We(a), e;
                    if (o === r) return We(a), t;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var i = !1, s = a.child; s; ) {
                    if (s === n) {
                      (i = !0), (n = a), (r = o);
                      break;
                    }
                    if (s === r) {
                      (i = !0), (r = a), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!i) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (i = !0), (n = o), (r = a);
                        break;
                      }
                      if (s === r) {
                        (i = !0), (r = o), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Je(e)
            : null;
        }
        function Je(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Je(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Xe = a.unstable_shouldYield,
          Ze = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Ye = a.unstable_getCurrentPriorityLevel,
          $e = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((it(e) / st) | 0)) | 0;
              },
          it = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var i = o & ~a;
            0 !== i ? (r = dt(i)) : 0 !== (l &= o) && (r = dt(l));
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== l && (r = dt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
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
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function At(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var yt,
          wt,
          kt,
          Et,
          St,
          Ct = !1,
          Nt = [],
          jt = null,
          Bt = null,
          Pt = null,
          Ot = new Map(),
          _t = new Map(),
          Rt = [],
          Tt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function It(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              jt = null;
              break;
            case "dragenter":
            case "dragleave":
              Bt = null;
              break;
            case "mouseover":
            case "mouseout":
              Pt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              _t.delete(t.pointerId);
          }
        }
        function Ft(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Lt(e) {
          var t = va(e.target);
          if (null !== t) {
            var n = Me(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && wt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Qt(e, t, n) {
          zt(e) && n.delete(t);
        }
        function Dt() {
          (Ct = !1),
            null !== jt && zt(jt) && (jt = null),
            null !== Bt && zt(Bt) && (Bt = null),
            null !== Pt && zt(Pt) && (Pt = null),
            Ot.forEach(Qt),
            _t.forEach(Qt);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Dt)));
        }
        function Mt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Nt.length) {
            Ut(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && Ut(jt, e),
              null !== Bt && Ut(Bt, e),
              null !== Pt && Ut(Pt, e),
              Ot.forEach(t),
              _t.forEach(t),
              n = 0;
            n < Rt.length;
            n++
          )
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
            Lt(n), null === n.blockedOn && Rt.shift();
        }
        var Vt = x.ReactCurrentBatchConfig,
          Wt = !0;
        function Ht(e, t, n, r) {
          var a = bt,
            l = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = l);
          }
        }
        function Jt(e, t, n, r) {
          var a = bt,
            l = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Wt) {
            var a = Xt(e, t, n, r);
            if (null === a) Wr(e, t, r, Kt, n), It(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (jt = Ft(jt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Bt = Ft(Bt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Pt = Ft(Pt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Ot.set(l, Ft(Ot.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      _t.set(l, Ft(_t.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((It(e, r), 4 & t && -1 < Tt.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && yt(l),
                  null === (l = Xt(e, t, n, r)) && Wr(e, t, r, Kt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Xt(e, t, n, r) {
          if (((Kt = null), null !== (e = va((e = ye(r))))))
            if (null === (t = Me(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Zt(e) {
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
              switch (Ye()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Yt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Yt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            L(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = L({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = L({}, dn, {
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
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(L({}, pn, { dataTransfer: 0 })),
          gn = an(L({}, dn, { relatedTarget: 0 })),
          An = an(
            L({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = L({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(vn),
          xn = an(L({}, un, { data: 0 })),
          yn = {
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
          wn = {
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
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Sn() {
          return En;
        }
        var Cn = L({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = yn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? wn[e.keyCode] || "Unidentified"
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
            getModifierState: Sn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nn = an(Cn),
          jn = an(
            L({}, pn, {
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
            })
          ),
          Bn = an(
            L({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn,
            })
          ),
          Pn = an(
            L({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = L({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
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
          _n = an(On),
          Rn = [9, 13, 27, 32],
          Tn = c && "CompositionEvent" in window,
          In = null;
        c && "documentMode" in document && (In = document.documentMode);
        var Fn = c && "TextEvent" in window && !In,
          Ln = c && (!Tn || (In && 8 < In && 11 >= In)),
          zn = String.fromCharCode(32),
          Qn = !1;
        function Dn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Rn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Mn = !1;
        var Vn = {
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
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Hn(e, t, n, r) {
          Ce(r),
            0 < (t = Jr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Jn = null,
          qn = null;
        function Kn(e) {
          zr(e, 0);
        }
        function Xn(e) {
          if (q(xa(e))) return e;
        }
        function Zn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Yn;
          if (c) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Yn = $n;
          } else Yn = !1;
          Gn = Yn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Jn && (Jn.detachEvent("onpropertychange", nr), (qn = Jn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Xn(qn)) {
            var t = [];
            Hn(t, qn, e, ye(e)), Oe(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Jn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(qn);
        }
        function lr(e, t) {
          if ("click" === e) return Xn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          Ar = null,
          vr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== K(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && sr(vr, r)) ||
              ((vr = r),
              0 < (r = Jr(Ar, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function yr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var wr = {
            animationend: yr("Animation", "AnimationEnd"),
            animationiteration: yr("Animation", "AnimationIteration"),
            animationstart: yr("Animation", "AnimationStart"),
            transitionend: yr("Transition", "TransitionEnd"),
          },
          kr = {},
          Er = {};
        function Sr(e) {
          if (kr[e]) return kr[e];
          if (!wr[e]) return e;
          var t,
            n = wr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete wr.animationend.animation,
            delete wr.animationiteration.animation,
            delete wr.animationstart.animation),
          "TransitionEvent" in window || delete wr.transitionend.transition);
        var Cr = Sr("animationend"),
          Nr = Sr("animationiteration"),
          jr = Sr("animationstart"),
          Br = Sr("transitionend"),
          Pr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function _r(e, t) {
          Pr.set(e, t), s(t, [e]);
        }
        for (var Rr = 0; Rr < Or.length; Rr++) {
          var Tr = Or[Rr];
          _r(Tr.toLowerCase(), "on" + (Tr[0].toUpperCase() + Tr.slice(1)));
        }
        _r(Cr, "onAnimationEnd"),
          _r(Nr, "onAnimationIteration"),
          _r(jr, "onAnimationStart"),
          _r("dblclick", "onDoubleClick"),
          _r("focusin", "onFocus"),
          _r("focusout", "onBlur"),
          _r(Br, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ir =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ir)
          );
        function Lr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, i, s, u) {
              if ((Ue.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(l(198));
                var c = Le;
                (Fe = !1), (Le = null), ze || ((ze = !0), (Qe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    s = i.instance,
                    u = i.currentTarget;
                  if (((i = i.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Lr(a, i, u), (l = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (i = r[o]).instance),
                    (u = i.currentTarget),
                    (i = i.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Lr(a, i, u), (l = s);
                }
            }
          }
          if (ze) throw ((e = Qe), (ze = !1), (Qe = null), e);
        }
        function Qr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Dr(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Mr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Fr.has(t) || Dr(t, !1, e), Dr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Dr("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Zt(t)) {
            case 1:
              var a = Ht;
              break;
            case 4:
              a = Jt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Re ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = va(i))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = l,
              a = ye(n),
              o = [];
            e: {
              var i = Pr.get(e);
              if (void 0 !== i) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Nn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Bn;
                    break;
                  case Cr:
                  case Nr:
                  case jr:
                    s = An;
                    break;
                  case Br:
                    s = Pn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = _n;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = jn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = _e(h, f)) &&
                        c.push(Hr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new s(i, u, null, n, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!va(u) && !u[ha])) &&
                  (s || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? va(u)
                          : null) &&
                        (u !== (d = Me(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = jn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? i : xa(s)),
                  (p = null == u ? i : xa(u)),
                  ((i = new c(m, h + "leave", s, n, a)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  va(a) === r &&
                    (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = qr(p)) h++;
                    for (p = 0, m = f; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (f = qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Kr(o, i, s, c, !1),
                  null !== u && null !== d && Kr(o, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (i = r ? xa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === s && "file" === i.type)
              )
                var g = Zn;
              else if (Wn(i))
                if (Gn) g = or;
                else {
                  g = ar;
                  var A = rr;
                }
              else
                (s = i.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? Hn(o, g, n, a)
                  : (A && A(e, i, r),
                    "focusout" === e &&
                      (A = i._wrapperState) &&
                      A.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (A = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(A) || "true" === A.contentEditable) &&
                    ((gr = A), (Ar = r), (vr = null));
                  break;
                case "focusout":
                  vr = Ar = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(o, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, a);
              }
              var v;
              if (Tn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Mn
                  ? Dn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Ln &&
                  "ko" !== n.locale &&
                  (Mn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Mn && (v = en())
                    : ((Yt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      (Mn = !0))),
                0 < (A = Jr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  o.push({ event: b, listeners: A }),
                  v ? (b.data = v) : null !== (v = Un(n)) && (b.data = v))),
                (v = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Qn = !0), zn);
                        case "textInput":
                          return (e = t.data) === zn && Qn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Mn)
                        return "compositionend" === e || (!Tn && Dn(e, t))
                          ? ((e = en()), ($t = Yt = Gt = null), (Mn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Ln && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Jr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = v));
            }
            zr(o, t);
          });
        }
        function Hr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Jr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = _e(e, n)) && r.unshift(Hr(e, l, a)),
              null != (l = _e(e, t)) && r.push(Hr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              s = i.alternate,
              u = i.stateNode;
            if (null !== s && s === r) break;
            5 === i.tag &&
              null !== u &&
              ((i = u),
              a
                ? null != (s = _e(n, l)) && o.unshift(Hr(n, s, i))
                : a || (null != (s = _e(n, l)) && o.push(Hr(n, s, i)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Xr = /\r\n?/g,
          Zr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xr, "\n")
            .replace(Zr, "");
        }
        function Yr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(l(425));
        }
        function $r() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Mt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Mt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          Aa = "__reactHandles$" + da;
        function va(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function ya(e) {
          return e[pa] || null;
        }
        var wa = [],
          ka = -1;
        function Ea(e) {
          return { current: e };
        }
        function Sa(e) {
          0 > ka || ((e.current = wa[ka]), (wa[ka] = null), ka--);
        }
        function Ca(e, t) {
          ka++, (wa[ka] = e.current), (e.current = t);
        }
        var Na = {},
          ja = Ea(Na),
          Ba = Ea(!1),
          Pa = Na;
        function Oa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function _a(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ra() {
          Sa(Ba), Sa(ja);
        }
        function Ta(e, t, n) {
          if (ja.current !== Na) throw Error(l(168));
          Ca(ja, t), Ca(Ba, n);
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, V(e) || "Unknown", a));
          return L({}, n, r);
        }
        function Fa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (Pa = ja.current),
            Ca(ja, e),
            Ca(Ba, Ba.current),
            !0
          );
        }
        function La(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Ia(e, t, Pa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Sa(Ba),
              Sa(ja),
              Ca(ja, e))
            : Sa(Ba),
            Ca(Ba, n);
        }
        var za = null,
          Qa = !1,
          Da = !1;
        function Ua(e) {
          null === za ? (za = [e]) : za.push(e);
        }
        function Ma() {
          if (!Da && null !== za) {
            Da = !0;
            var e = 0,
              t = bt;
            try {
              var n = za;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (za = null), (Qa = !1);
            } catch (a) {
              throw (null !== za && (za = za.slice(e + 1)), qe($e, Ma), a);
            } finally {
              (bt = t), (Da = !1);
            }
          }
          return null;
        }
        var Va = [],
          Wa = 0,
          Ha = null,
          Ja = 0,
          qa = [],
          Ka = 0,
          Xa = null,
          Za = 1,
          Ga = "";
        function Ya(e, t) {
          (Va[Wa++] = Ja), (Va[Wa++] = Ha), (Ha = e), (Ja = t);
        }
        function $a(e, t, n) {
          (qa[Ka++] = Za), (qa[Ka++] = Ga), (qa[Ka++] = Xa), (Xa = e);
          var r = Za;
          e = Ga;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ot(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Za = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ga = l + e);
          } else (Za = (1 << l) | (n << a) | r), (Ga = e);
        }
        function el(e) {
          null !== e.return && (Ya(e, 1), $a(e, 1, 0));
        }
        function tl(e) {
          for (; e === Ha; )
            (Ha = Va[--Wa]), (Va[Wa] = null), (Ja = Va[--Wa]), (Va[Wa] = null);
          for (; e === Xa; )
            (Xa = qa[--Ka]),
              (qa[Ka] = null),
              (Ga = qa[--Ka]),
              (qa[Ka] = null),
              (Za = qa[--Ka]),
              (qa[Ka] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function ol(e, t) {
          var n = Ou(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function il(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xa ? { id: Za, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ou(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sl(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!il(e, t)) {
                if (sl(e)) throw Error(l(418));
                t = ua(n.nextSibling);
                var r = nl;
                t && il(e, t)
                  ? ol(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (sl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function dl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (sl(e)) throw (fl(), Error(l(418)));
            for (; t; ) ol(e, t), (t = ua(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = x.ReactCurrentBatchConfig;
        function gl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = L({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Al = Ea(null),
          vl = null,
          bl = null,
          xl = null;
        function yl() {
          xl = bl = vl = null;
        }
        function wl(e) {
          var t = Al.current;
          Sa(Al), (e._currentValue = t);
        }
        function kl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function El(e, t) {
          (vl = e),
            (xl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xi = !0), (e.firstContext = null));
        }
        function Sl(e) {
          var t = e._currentValue;
          if (xl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === vl) throw Error(l(308));
              (bl = e), (vl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return t;
        }
        var Cl = null;
        function Nl(e) {
          null === Cl ? (Cl = [e]) : Cl.push(e);
        }
        function jl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Nl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Bl(e, r)
          );
        }
        function Bl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Pl = !1;
        function Ol(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function _l(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Rl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Tl(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & js))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Bl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Nl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Bl(e, n)
          );
        }
        function Il(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Fl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ll(e, t, n, r) {
          var a = e.updateQueue;
          Pl = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var s = i,
              u = s.next;
            (s.next = null), null === o ? (l = u) : (o.next = u), (o = s);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = u) : (i.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (o = 0, c = u = s = null, i = l; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = L({}, d, f);
                      break e;
                    case 2:
                      Pl = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (o |= f);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Fs |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function zl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Ql = new r.Component().refs;
        function Dl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : L({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ul = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Me(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Rl(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Tl(e, l, a)) && (nu(t, e, a, r), Il(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Rl(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Tl(e, l, a)) && (nu(t, e, a, r), Il(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Rl(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Tl(e, a, r)) && (nu(t, e, r, n), Il(t, e, r));
          },
        };
        function Ml(e, t, n, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, l);
        }
        function Vl(e, t, n) {
          var r = !1,
            a = Na,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Sl(l))
              : ((a = _a(t) ? Pa : ja.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Oa(e, a)
                  : Na)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ul),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function Wl(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
        }
        function Hl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Ql), Ol(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Sl(l))
            : ((l = _a(t) ? Pa : ja.current), (a.context = Oa(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (Dl(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Ul.enqueueReplaceState(a, a.state, null),
              Ll(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Jl(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Ql && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Kl(e) {
          return (0, e._init)(e._payload);
        }
        function Xl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ru(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Lu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === _ &&
                    Kl(l) === t.type))
              ? (((r = a(t, n.props)).ref = Jl(e, t, n)), (r.return = e), r)
              : (((r = Tu(n.type, n.key, n.props, null, e.mode, r)).ref = Jl(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = zu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Iu(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Lu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case y:
                  return (
                    ((n = Tu(t.type, t.key, t.props, null, e.mode, n)).ref = Jl(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case w:
                  return ((t = zu(t, e.mode, n)).return = e), t;
                case _:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || I(t))
                return ((t = Iu(t, e.mode, n, null)).return = e), t;
              ql(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case y:
                  return n.key === a ? u(e, t, n, r) : null;
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case _:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || I(n)) return null !== a ? null : d(e, t, n, r, null);
              ql(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case y:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case _:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || I(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              ql(t, r);
            }
            return null;
          }
          function m(a, l, i, s) {
            for (
              var u = null, c = null, d = l, m = (l = 0), g = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var A = p(a, d, i[m], s);
              if (null === A) {
                null === d && (d = g);
                break;
              }
              e && d && null === A.alternate && t(a, d),
                (l = o(A, l, m)),
                null === c ? (u = A) : (c.sibling = A),
                (c = A),
                (d = g);
            }
            if (m === i.length) return n(a, d), al && Ya(a, m), u;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], s)) &&
                  ((l = o(d, l, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return al && Ya(a, m), u;
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (g = h(d, a, m, i[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (l = o(g, l, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ya(a, m),
              u
            );
          }
          function g(a, i, s, u) {
            var c = I(s);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (s = c.call(s))) throw Error(l(151));
            for (
              var d = (c = null), m = i, g = (i = 0), A = null, v = s.next();
              null !== m && !v.done;
              g++, v = s.next()
            ) {
              m.index > g ? ((A = m), (m = null)) : (A = m.sibling);
              var b = p(a, m, v.value, u);
              if (null === b) {
                null === m && (m = A);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = o(b, i, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = A);
            }
            if (v.done) return n(a, m), al && Ya(a, g), c;
            if (null === m) {
              for (; !v.done; g++, v = s.next())
                null !== (v = f(a, v.value, u)) &&
                  ((i = o(v, i, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return al && Ya(a, g), c;
            }
            for (m = r(a, m); !v.done; g++, v = s.next())
              null !== (v = h(m, a, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (i = o(v, i, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ya(a, g),
              c
            );
          }
          return function e(r, l, o, s) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === k &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case y:
                  e: {
                    for (var u = o.key, c = l; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === _ &&
                            Kl(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, o.props)).ref = Jl(r, c, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === k
                      ? (((l = Iu(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = l))
                      : (((s = Tu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = Jl(r, l, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return i(r);
                case w:
                  e: {
                    for (c = o.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = zu(o, r.mode, s)).return = r), (r = l);
                  }
                  return i(r);
                case _:
                  return e(r, l, (c = o._init)(o._payload), s);
              }
              if (te(o)) return m(r, l, o, s);
              if (I(o)) return g(r, l, o, s);
              ql(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = Lu(o, r.mode, s)).return = r), (r = l)),
                i(r))
              : n(r, l);
          };
        }
        var Zl = Xl(!0),
          Gl = Xl(!1),
          Yl = {},
          $l = Ea(Yl),
          eo = Ea(Yl),
          to = Ea(Yl);
        function no(e) {
          if (e === Yl) throw Error(l(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ca(to, t), Ca(eo, e), Ca($l, Yl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Sa($l), Ca($l, t);
        }
        function ao() {
          Sa($l), Sa(eo), Sa(to);
        }
        function lo(e) {
          no(to.current);
          var t = no($l.current),
            n = se(t, e.type);
          t !== n && (Ca(eo, e), Ca($l, n));
        }
        function oo(e) {
          eo.current === e && (Sa($l), Sa(eo));
        }
        var io = Ea(0);
        function so(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var uo = [];
        function co() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          po = x.ReactCurrentBatchConfig,
          ho = 0,
          mo = null,
          go = null,
          Ao = null,
          vo = !1,
          bo = !1,
          xo = 0,
          yo = 0;
        function wo() {
          throw Error(l(321));
        }
        function ko(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function Eo(e, t, n, r, a, o) {
          if (
            ((ho = o),
            (mo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ii : si),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (Ao = go = null),
                (t.updateQueue = null),
                (fo.current = ui),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = oi),
            (t = null !== go && null !== go.next),
            (ho = 0),
            (Ao = go = mo = null),
            (vo = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function So() {
          var e = 0 !== xo;
          return (xo = 0), e;
        }
        function Co() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === Ao ? (mo.memoizedState = Ao = e) : (Ao = Ao.next = e), Ao
          );
        }
        function No() {
          if (null === go) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = go.next;
          var t = null === Ao ? mo.memoizedState : Ao.next;
          if (null !== t) (Ao = t), (go = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (go = e).memoizedState,
              baseState: go.baseState,
              baseQueue: go.baseQueue,
              queue: go.queue,
              next: null,
            }),
              null === Ao ? (mo.memoizedState = Ao = e) : (Ao = Ao.next = e);
          }
          return Ao;
        }
        function jo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Bo(e) {
          var t = No(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = go,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var s = (i = null),
              u = null,
              c = o;
            do {
              var d = c.lane;
              if ((ho & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (i = r)) : (u = u.next = f),
                  (mo.lanes |= d),
                  (Fs |= d);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (i = r) : (u.next = s),
              ir(r, t.memoizedState) || (xi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (mo.lanes |= o), (Fs |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Po(e) {
          var t = No(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            ir(o, t.memoizedState) || (xi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Oo() {}
        function _o(e, t) {
          var n = mo,
            r = No(),
            a = t(),
            o = !ir(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (xi = !0)),
            (r = r.queue),
            Wo(Io.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== Ao && 1 & Ao.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Qo(9, To.bind(null, n, r, a, t), void 0, null),
              null === Bs)
            )
              throw Error(l(349));
            0 !== (30 & ho) || Ro(n, t, a);
          }
          return a;
        }
        function Ro(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function To(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Fo(t) && Lo(e);
        }
        function Io(e, t, n) {
          return n(function () {
            Fo(t) && Lo(e);
          });
        }
        function Fo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Lo(e) {
          var t = Bl(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function zo(e) {
          var t = Co();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: jo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, mo, e)),
            [t.memoizedState, e]
          );
        }
        function Qo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Do() {
          return No().memoizedState;
        }
        function Uo(e, t, n, r) {
          var a = Co();
          (mo.flags |= e),
            (a.memoizedState = Qo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Mo(e, t, n, r) {
          var a = No();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== go) {
            var o = go.memoizedState;
            if (((l = o.destroy), null !== r && ko(r, o.deps)))
              return void (a.memoizedState = Qo(t, n, l, r));
          }
          (mo.flags |= e), (a.memoizedState = Qo(1 | t, n, l, r));
        }
        function Vo(e, t) {
          return Uo(8390656, 8, e, t);
        }
        function Wo(e, t) {
          return Mo(2048, 8, e, t);
        }
        function Ho(e, t) {
          return Mo(4, 2, e, t);
        }
        function Jo(e, t) {
          return Mo(4, 4, e, t);
        }
        function qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ko(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Mo(4, 4, qo.bind(null, t, e), n)
          );
        }
        function Xo() {}
        function Zo(e, t) {
          var n = No();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ko(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Go(e, t) {
          var n = No();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ko(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Yo(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (xi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (mo.lanes |= n), (Fs |= n), (e.baseState = !0)),
              t);
        }
        function $o(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function ei() {
          return No().memoizedState;
        }
        function ti(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n);
          else if (null !== (n = jl(e, t, n, r))) {
            nu(n, e, r, eu()), li(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, o))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Nl(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = jl(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), li(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === mo || (null !== t && t === mo);
        }
        function ai(e, t) {
          bo = vo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function li(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var oi = {
            readContext: Sl,
            useCallback: wo,
            useContext: wo,
            useEffect: wo,
            useImperativeHandle: wo,
            useInsertionEffect: wo,
            useLayoutEffect: wo,
            useMemo: wo,
            useReducer: wo,
            useRef: wo,
            useState: wo,
            useDebugValue: wo,
            useDeferredValue: wo,
            useTransition: wo,
            useMutableSource: wo,
            useSyncExternalStore: wo,
            useId: wo,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Sl,
            useCallback: function (e, t) {
              return (Co().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Sl,
            useEffect: Vo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Uo(4194308, 4, qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Uo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Uo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Co();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Co();
              return (
                (t = void 0 !== n ? n(t) : t),
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
                (e = e.dispatch = ti.bind(null, mo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Co().memoizedState = e);
            },
            useState: zo,
            useDebugValue: Xo,
            useDeferredValue: function (e) {
              return (Co().memoizedState = e);
            },
            useTransition: function () {
              var e = zo(!1),
                t = e[0];
              return (
                (e = $o.bind(null, e[1])), (Co().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mo,
                a = Co();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Bs)) throw Error(l(349));
                0 !== (30 & ho) || Ro(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Vo(Io.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Qo(9, To.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Co(),
                t = Bs.identifierPrefix;
              if (al) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Za & ~(1 << (32 - ot(Za) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = yo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: Sl,
            useCallback: Zo,
            useContext: Sl,
            useEffect: Wo,
            useImperativeHandle: Ko,
            useInsertionEffect: Ho,
            useLayoutEffect: Jo,
            useMemo: Go,
            useReducer: Bo,
            useRef: Do,
            useState: function () {
              return Bo(jo);
            },
            useDebugValue: Xo,
            useDeferredValue: function (e) {
              return Yo(No(), go.memoizedState, e);
            },
            useTransition: function () {
              return [Bo(jo)[0], No().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: _o,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: Sl,
            useCallback: Zo,
            useContext: Sl,
            useEffect: Wo,
            useImperativeHandle: Ko,
            useInsertionEffect: Ho,
            useLayoutEffect: Jo,
            useMemo: Go,
            useReducer: Po,
            useRef: Do,
            useState: function () {
              return Po(jo);
            },
            useDebugValue: Xo,
            useDeferredValue: function (e) {
              var t = No();
              return null === go
                ? (t.memoizedState = e)
                : Yo(t, go.memoizedState, e);
            },
            useTransition: function () {
              return [Po(jo)[0], No().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: _o,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function di(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fi(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map;
        function hi(e, t, n) {
          ((n = Rl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ws || ((Ws = !0), (Hs = r)), fi(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = Rl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fi(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                fi(0, t),
                  "function" !== typeof r &&
                    (null === Js ? (Js = new Set([this])) : Js.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Su.bind(null, e, t, n)), t.then(e, e));
        }
        function Ai(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Rl(-1, 1)).tag = 2), Tl(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = x.ReactCurrentOwner,
          xi = !1;
        function yi(e, t, n, r) {
          t.child = null === e ? Gl(t, null, n, r) : Zl(t, e.child, n, r);
        }
        function wi(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            El(t, a),
            (r = Eo(e, t, n, r, l, a)),
            (n = So()),
            null === e || xi
              ? (al && n && el(t), (t.flags |= 1), yi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function ki(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              _u(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Tu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Ei(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              e.ref === t.ref
            )
              return Wi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ru(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ei(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === t.ref) {
              if (((xi = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wi(e, t, a);
              0 !== (131072 & e.flags) && (xi = !0);
            }
          }
          return Ni(e, t, n, r, a);
        }
        function Si(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Rs, _s),
                (_s |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Rs, _s),
                  (_s |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ca(Rs, _s),
                (_s |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Rs, _s),
              (_s |= r);
          return yi(e, t, a, n), t.child;
        }
        function Ci(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ni(e, t, n, r, a) {
          var l = _a(n) ? Pa : ja.current;
          return (
            (l = Oa(t, l)),
            El(t, a),
            (n = Eo(e, t, n, r, l, a)),
            (r = So()),
            null === e || xi
              ? (al && r && el(t), (t.flags |= 1), yi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function ji(e, t, n, r, a) {
          if (_a(n)) {
            var l = !0;
            Fa(t);
          } else l = !1;
          if ((El(t, a), null === t.stateNode))
            Vi(e, t), Vl(t, n, r), Hl(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps;
            o.props = i;
            var s = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Sl(u))
              : (u = Oa(t, (u = _a(n) ? Pa : ja.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== r || s !== u) && Wl(t, o, r, u)),
              (Pl = !1);
            var f = t.memoizedState;
            (o.state = f),
              Ll(t, r, o, a),
              (s = t.memoizedState),
              i !== r || f !== s || Ba.current || Pl
                ? ("function" === typeof c &&
                    (Dl(t, n, c, r), (s = t.memoizedState)),
                  (i = Pl || Ml(t, n, i, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = i))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              _l(e, t),
              (i = t.memoizedProps),
              (u = t.type === t.elementType ? i : gl(t.type, i)),
              (o.props = u),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Sl(s))
                : (s = Oa(t, (s = _a(n) ? Pa : ja.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== d || f !== s) && Wl(t, o, r, s)),
              (Pl = !1),
              (f = t.memoizedState),
              (o.state = f),
              Ll(t, r, o, a);
            var h = t.memoizedState;
            i !== d || f !== h || Ba.current || Pl
              ? ("function" === typeof p &&
                  (Dl(t, n, p, r), (h = t.memoizedState)),
                (u = Pl || Ml(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = s),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Bi(e, t, n, r, l, a);
        }
        function Bi(e, t, n, r, a, l) {
          Ci(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && La(t, n, !1), Wi(e, t, l);
          (r = t.stateNode), (bi.current = t);
          var i =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Zl(t, e.child, null, l)),
                (t.child = Zl(t, null, i, l)))
              : yi(e, t, i, l),
            (t.memoizedState = r.state),
            a && La(t, n, !0),
            t.child
          );
        }
        function Pi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ta(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ta(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Oi(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), yi(e, t, n, r), t.child;
        }
        var _i,
          Ri,
          Ti,
          Ii = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Li(e, t, n) {
          var r,
            a = t.pendingProps,
            o = io.current,
            i = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ca(io, 1 & o),
            null === e)
          )
            return (
              ul(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = s))
                        : (i = Fu(s, a, 0, null)),
                      (e = Iu(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Fi(n)),
                      (t.memoizedState = Ii),
                      e)
                    : zi(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Qi(e, t, i, (r = di(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Fu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Iu(o, a, i, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Zl(t, e.child, null, i),
                    (t.child.memoizedState = Fi(i)),
                    (t.memoizedState = Ii),
                    o);
              if (0 === (1 & t.mode)) return Qi(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Qi(e, t, i, (r = di((o = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (i & e.childLanes)), xi || s)) {
                if (null !== (r = Bs)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Bl(e, a), nu(r, e, a, -1));
                }
                return mu(), Qi(e, t, i, (r = di(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Nu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (rl = ua(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Ka++] = Za),
                    (qa[Ka++] = Ga),
                    (qa[Ka++] = Xa),
                    (Za = e.id),
                    (Ga = e.overflow),
                    (Xa = t)),
                  ((t = zi(t, r.children)).flags |= 4096),
                  t);
            })(e, t, s, a, r, o, n);
          if (i) {
            (i = a.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Ru(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = Ru(r, i))
                : ((i = Iu(i, s, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Fi(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (i.memoizedState = s),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ii),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Ru(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function zi(e, t) {
          return (
            ((t = Fu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Qi(e, t, n, r) {
          return (
            null !== r && hl(r),
            Zl(t, e.child, null, n),
            ((e = zi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Di(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), kl(e.return, t, n);
        }
        function Ui(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Mi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((yi(e, t, r.children, n), 0 !== (2 & (r = io.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Di(e, n, t);
                else if (19 === e.tag) Di(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(io, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === so(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ui(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === so(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ui(t, !0, n, null, l);
                break;
              case "together":
                Ui(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Ru((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ru(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Hi(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ji(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qi(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
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
              return Ji(t), null;
            case 1:
            case 17:
              return _a(t.type) && Ra(), Ji(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Sa(Ba),
                Sa(ja),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (ou(ll), (ll = null)))),
                Ji(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ri(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Ji(t), null;
                }
                if (((e = no($l.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Qr("cancel", r), Qr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Qr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ir.length; a++) Qr(Ir[a], r);
                      break;
                    case "source":
                      Qr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Qr("error", r), Qr("load", r);
                      break;
                    case "details":
                      Qr("toggle", r);
                      break;
                    case "input":
                      Z(r, o), Qr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Qr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Qr("invalid", r);
                  }
                  for (var s in (ve(n, o), (a = null), o))
                    if (o.hasOwnProperty(s)) {
                      var u = o[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Yr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Yr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : i.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Qr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      J(r), $(r, o, !0);
                      break;
                    case "textarea":
                      J(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = $r);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    _i(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Qr("cancel", e), Qr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Qr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ir.length; a++) Qr(Ir[a], e);
                        a = r;
                        break;
                      case "source":
                        Qr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Qr("error", e), Qr("load", e), (a = r);
                        break;
                      case "details":
                        Qr("toggle", e), (a = r);
                        break;
                      case "input":
                        Z(e, r), (a = X(e, r)), Qr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = L({}, r, { value: void 0 })),
                          Qr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Qr("invalid", e);
                    }
                    for (o in (ve(n, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (i.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Qr("scroll", e)
                              : null != c && b(e, o, c, s));
                      }
                    switch (n) {
                      case "input":
                        J(e), $(e, r, !1);
                        break;
                      case "textarea":
                        J(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = $r);
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
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ji(t), null;
            case 6:
              if (e && null != t.stateNode) Ti(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = no(to.current)), no($l.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Ji(t), null;
            case 13:
              if (
                (Sa(io),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (o = !1);
                else if (((o = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[fa] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ji(t), (o = !1);
                } else null !== ll && (ou(ll), (ll = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & io.current)
                        ? 0 === Ts && (Ts = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ji(t),
                  null);
            case 4:
              return (
                ao(), null === e && Mr(t.stateNode.containerInfo), Ji(t), null
              );
            case 10:
              return wl(t.type._context), Ji(t), null;
            case 19:
              if ((Sa(io), null === (o = t.memoizedState))) return Ji(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) Hi(o, !1);
                else {
                  if (0 !== Ts || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = so(e))) {
                        for (
                          t.flags |= 128,
                            Hi(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(io, (1 & io.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ge() > Ms &&
                    ((t.flags |= 128),
                    (r = !0),
                    Hi(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = so(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Hi(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return Ji(t), null;
                  } else
                    2 * Ge() - o.renderingStartTime > Ms &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Hi(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = io.current),
                  Ca(io, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ji(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & _s) &&
                    (Ji(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ji(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Ki(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                _a(t.type) && Ra(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Sa(Ba),
                Sa(ja),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Sa(io),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Sa(io), null;
            case 4:
              return ao(), null;
            case 10:
              return wl(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (_i = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ri = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no($l.current);
              var l,
                o = null;
              switch (n) {
                case "input":
                  (a = X(e, a)), (r = X(e, r)), (o = []);
                  break;
                case "select":
                  (a = L({}, a, { value: void 0 })),
                    (r = L({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (ve(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (l in s)
                      s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (l in s)
                        !s.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          s[l] !== u[l] &&
                          (n || (n = {}), (n[l] = u[l]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Qr("scroll", e),
                            o || s === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ti = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xi = !1,
          Zi = !1,
          Gi = "function" === typeof WeakSet ? WeakSet : Set,
          Yi = null;
        function $i(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && es(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
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
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ls(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ls(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[Aa]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function os(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function is(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || os(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Zi || $i(n, t);
            case 6:
              var r = cs,
                a = ds;
              (cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Mt(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Zi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      es(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Zi &&
                ($i(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  Eu(n, t, i);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Zi = (r = Zi) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Zi = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gi()),
              t.forEach(function (t) {
                var r = ju.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  i = t,
                  s = i;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(l(160));
                ps(o, i, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Eu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), As(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (g) {
                  Eu(e, e.return, g);
                }
                try {
                  ns(5, e, e.return);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 1:
              ms(t, e), As(e), 512 & r && null !== n && $i(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                As(e),
                512 & r && null !== n && $i(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === o.type &&
                      null != o.name &&
                      G(a, o),
                      be(s, i);
                    var c = be(s, o);
                    for (i = 0; i < u.length; i += 2) {
                      var d = u[i],
                        f = u[i + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        Y(a, o);
                        break;
                      case "textarea":
                        le(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (g) {
                    Eu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), As(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                As(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Mt(t.containerInfo);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              break;
            case 4:
            default:
              ms(t, e), As(e);
              break;
            case 13:
              ms(t, e),
                As(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Us = Ge())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Zi = (c = Zi) || d), ms(t, e), (Zi = c))
                  : ms(t, e),
                As(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Yi = e, d = e.child; null !== d; ) {
                    for (f = Yi = d; null !== Yi; ) {
                      switch (((h = (p = Yi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          $i(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Eu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          $i(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ys(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Yi = h)) : ys(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((s = f.stateNode),
                              (i =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", i)));
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), As(e), 4 & r && hs(e);
            case 21:
          }
        }
        function As(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (os(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    us(e, is(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ss(e, is(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (i) {
              Eu(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function vs(e, t, n) {
          (Yi = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Yi; ) {
            var a = Yi,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Xi;
              if (!o) {
                var i = a.alternate,
                  s = (null !== i && null !== i.memoizedState) || Zi;
                i = Xi;
                var u = Zi;
                if (((Xi = o), (Zi = s) && !u))
                  for (Yi = a; null !== Yi; )
                    (s = (o = Yi).child),
                      22 === o.tag && null !== o.memoizedState
                        ? ws(a)
                        : null !== s
                        ? ((s.return = o), (Yi = s))
                        : ws(a);
                for (; null !== l; ) (Yi = l), bs(l, t, n), (l = l.sibling);
                (Yi = a), (Xi = i), (Zi = u);
              }
              xs(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Yi = l))
                : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Yi; ) {
            var t = Yi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zi || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Zi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && zl(t, o, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        zl(t, i, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
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
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Mt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Zi || (512 & t.flags && as(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              Yi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Yi = n);
              break;
            }
            Yi = t.return;
          }
        }
        function ys(e) {
          for (; null !== Yi; ) {
            var t = Yi;
            if (t === e) {
              Yi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Yi = n);
              break;
            }
            Yi = t.return;
          }
        }
        function ws(e) {
          for (; null !== Yi; ) {
            var t = Yi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Eu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Eu(t, a, s);
                    }
                  }
                  var l = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, l, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, o, s);
                  }
              }
            } catch (s) {
              Eu(t, t.return, s);
            }
            if (t === e) {
              Yi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Yi = i);
              break;
            }
            Yi = t.return;
          }
        }
        var ks,
          Es = Math.ceil,
          Ss = x.ReactCurrentDispatcher,
          Cs = x.ReactCurrentOwner,
          Ns = x.ReactCurrentBatchConfig,
          js = 0,
          Bs = null,
          Ps = null,
          Os = 0,
          _s = 0,
          Rs = Ea(0),
          Ts = 0,
          Is = null,
          Fs = 0,
          Ls = 0,
          zs = 0,
          Qs = null,
          Ds = null,
          Us = 0,
          Ms = 1 / 0,
          Vs = null,
          Ws = !1,
          Hs = null,
          Js = null,
          qs = !1,
          Ks = null,
          Xs = 0,
          Zs = 0,
          Gs = null,
          Ys = -1,
          $s = 0;
        function eu() {
          return 0 !== (6 & js) ? Ge() : -1 !== Ys ? Ys : (Ys = Ge());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & js) && 0 !== Os
            ? Os & -Os
            : null !== ml.transition
            ? (0 === $s && ($s = mt()), $s)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Zt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Zs) throw ((Zs = 0), (Gs = null), Error(l(185)));
          At(e, n, r),
            (0 !== (2 & js) && e === Bs) ||
              (e === Bs && (0 === (2 & js) && (Ls |= n), 4 === Ts && iu(e, Os)),
              ru(e, r),
              1 === n &&
                0 === js &&
                0 === (1 & t.mode) &&
                ((Ms = Ge() + 500), Qa && Ma()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - ot(l),
                i = 1 << o,
                s = a[o];
              -1 === s
                ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = pt(i, t))
                : s <= t && (e.expiredLanes |= i),
                (l &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Bs ? Os : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Qa = !0), Ua(e);
                  })(su.bind(null, e))
                : Ua(su.bind(null, e)),
                oa(function () {
                  0 === (6 & js) && Ma();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Bu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Ys = -1), ($s = 0), 0 !== (6 & js))) throw Error(l(327));
          var n = e.callbackNode;
          if (wu() && e.callbackNode !== n) return null;
          var r = ft(e, e === Bs ? Os : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var a = js;
            js |= 2;
            var o = hu();
            for (
              (Bs === e && Os === t) ||
              ((Vs = null), (Ms = Ge() + 500), fu(e, t));
              ;

            )
              try {
                vu();
                break;
              } catch (s) {
                pu(e, s);
              }
            yl(),
              (Ss.current = o),
              (js = a),
              null !== Ps ? (t = 0) : ((Bs = null), (Os = 0), (t = Ts));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = lu(e, a))),
              1 === t)
            )
              throw ((n = Is), fu(e, 0), iu(e, r), ru(e, Ge()), n);
            if (6 === t) iu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(l(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = lu(e, o))),
                  1 === t))
              )
                throw ((n = Is), fu(e, 0), iu(e, r), ru(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  yu(e, Ds, Vs);
                  break;
                case 3:
                  if (
                    (iu(e, r),
                    (130023424 & r) === r && 10 < (t = Us + 500 - Ge()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(yu.bind(null, e, Ds, Vs), t);
                    break;
                  }
                  yu(e, Ds, Vs);
                  break;
                case 4:
                  if ((iu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ot(r);
                    (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
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
                          : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(yu.bind(null, e, Ds, Vs), r);
                    break;
                  }
                  yu(e, Ds, Vs);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return ru(e, Ge()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function lu(e, t) {
          var n = Qs;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Ds), (Ds = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === Ds ? (Ds = e) : Ds.push.apply(Ds, e);
        }
        function iu(e, t) {
          for (
            t &= ~zs,
              t &= ~Ls,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & js)) throw Error(l(327));
          wu();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Ge()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = lu(e, r)));
          }
          if (1 === n) throw ((n = Is), fu(e, 0), iu(e, t), ru(e, Ge()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            yu(e, Ds, Vs),
            ru(e, Ge()),
            null
          );
        }
        function uu(e, t) {
          var n = js;
          js |= 1;
          try {
            return e(t);
          } finally {
            0 === (js = n) && ((Ms = Ge() + 500), Qa && Ma());
          }
        }
        function cu(e) {
          null !== Ks && 0 === Ks.tag && 0 === (6 & js) && wu();
          var t = js;
          js |= 1;
          var n = Ns.transition,
            r = bt;
          try {
            if (((Ns.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ns.transition = n), 0 === (6 & (js = t)) && Ma();
          }
        }
        function du() {
          (_s = Rs.current), Sa(Rs);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ps))
            for (n = Ps.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ra();
                  break;
                case 3:
                  ao(), Sa(Ba), Sa(ja), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Sa(io);
                  break;
                case 10:
                  wl(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Bs = e),
            (Ps = e = Ru(e.current, null)),
            (Os = _s = t),
            (Ts = 0),
            (Is = null),
            (zs = Ls = Fs = 0),
            (Ds = Qs = null),
            null !== Cl)
          ) {
            for (t = 0; t < Cl.length; t++)
              if (null !== (r = (n = Cl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Cl = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ps;
            try {
              if ((yl(), (fo.current = oi), vo)) {
                for (var r = mo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                vo = !1;
              }
              if (
                ((ho = 0),
                (Ao = go = mo = null),
                (bo = !1),
                (xo = 0),
                (Cs.current = null),
                null === n || null === n.return)
              ) {
                (Ts = 1), (Is = t), (Ps = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Os),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = Ai(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      vi(h, i, s, 0, t),
                      1 & h.mode && gi(o, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gi(o, c, t), mu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var A = Ai(i);
                  if (null !== A) {
                    0 === (65536 & A.flags) && (A.flags |= 256),
                      vi(A, i, s, 0, t),
                      hl(ci(u, s));
                    break e;
                  }
                }
                (o = u = ci(u, s)),
                  4 !== Ts && (Ts = 2),
                  null === Qs ? (Qs = [o]) : Qs.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Fl(o, hi(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var v = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Js || !Js.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Fl(o, mi(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              xu(n);
            } catch (x) {
              (t = x), Ps === n && null !== n && (Ps = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Ss.current;
          return (Ss.current = oi), null === e ? oi : e;
        }
        function mu() {
          (0 !== Ts && 3 !== Ts && 2 !== Ts) || (Ts = 4),
            null === Bs ||
              (0 === (268435455 & Fs) && 0 === (268435455 & Ls)) ||
              iu(Bs, Os);
        }
        function gu(e, t) {
          var n = js;
          js |= 2;
          var r = hu();
          for ((Bs === e && Os === t) || ((Vs = null), fu(e, t)); ; )
            try {
              Au();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((yl(), (js = n), (Ss.current = r), null !== Ps))
            throw Error(l(261));
          return (Bs = null), (Os = 0), Ts;
        }
        function Au() {
          for (; null !== Ps; ) bu(Ps);
        }
        function vu() {
          for (; null !== Ps && !Xe(); ) bu(Ps);
        }
        function bu(e) {
          var t = ks(e.alternate, e, _s);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (Ps = t),
            (Cs.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, _s))) return void (Ps = n);
            } else {
              if (null !== (n = Ki(n, t)))
                return (n.flags &= 32767), void (Ps = n);
              if (null === e) return (Ts = 6), void (Ps = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ps = t);
            Ps = t = e;
          } while (null !== t);
          0 === Ts && (Ts = 5);
        }
        function yu(e, t, n) {
          var r = bt,
            a = Ns.transition;
          try {
            (Ns.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  wu();
                } while (null !== Ks);
                if (0 !== (6 & js)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, o),
                  e === Bs && ((Ps = Bs = null), (Os = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    Bu(tt, function () {
                      return wu(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Ns.transition), (Ns.transition = null);
                  var i = bt;
                  bt = 1;
                  var s = js;
                  (js |= 4),
                    (Cs.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (y) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = i + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = i + r),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = i),
                                    p === o && ++d === r && (u = i),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Yi = t;
                        null !== Yi;

                      )
                        if (
                          ((e = (t = Yi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Yi = e);
                        else
                          for (; null !== Yi; ) {
                            t = Yi;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        A = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gl(t.type, g),
                                          A
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (y) {
                              Eu(t, t.return, y);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Yi = e);
                              break;
                            }
                            Yi = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    gs(n, e),
                    hr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    vs(n, e, a),
                    Ze(),
                    (js = s),
                    (bt = i),
                    (Ns.transition = o);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Ks = e), (Xs = a)),
                  0 === (o = e.pendingLanes) && (Js = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Ws) throw ((Ws = !1), (e = Hs), (Hs = null), e);
                0 !== (1 & Xs) && 0 !== e.tag && wu(),
                  0 !== (1 & (o = e.pendingLanes))
                    ? e === Gs
                      ? Zs++
                      : ((Zs = 0), (Gs = e))
                    : (Zs = 0),
                  Ma();
              })(e, t, n, r);
          } finally {
            (Ns.transition = a), (bt = r);
          }
          return null;
        }
        function wu() {
          if (null !== Ks) {
            var e = xt(Xs),
              t = Ns.transition,
              n = bt;
            try {
              if (((Ns.transition = null), (bt = 16 > e ? 16 : e), null === Ks))
                var r = !1;
              else {
                if (((e = Ks), (Ks = null), (Xs = 0), 0 !== (6 & js)))
                  throw Error(l(331));
                var a = js;
                for (js |= 4, Yi = e.current; null !== Yi; ) {
                  var o = Yi,
                    i = o.child;
                  if (0 !== (16 & Yi.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Yi = c; null !== Yi; ) {
                          var d = Yi;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Yi = f);
                          else
                            for (; null !== Yi; ) {
                              var p = (d = Yi).sibling,
                                h = d.return;
                              if ((ls(d), d === c)) {
                                Yi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Yi = p);
                                break;
                              }
                              Yi = h;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var A = g.sibling;
                            (g.sibling = null), (g = A);
                          } while (null !== g);
                        }
                      }
                      Yi = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Yi = i);
                  else
                    e: for (; null !== Yi; ) {
                      if (0 !== (2048 & (o = Yi).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, o, o.return);
                        }
                      var v = o.sibling;
                      if (null !== v) {
                        (v.return = o.return), (Yi = v);
                        break e;
                      }
                      Yi = o.return;
                    }
                }
                var b = e.current;
                for (Yi = b; null !== Yi; ) {
                  var x = (i = Yi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== x)
                    (x.return = i), (Yi = x);
                  else
                    e: for (i = b; null !== Yi; ) {
                      if (0 !== (2048 & (s = Yi).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (w) {
                          Eu(s, s.return, w);
                        }
                      if (s === i) {
                        Yi = null;
                        break e;
                      }
                      var y = s.sibling;
                      if (null !== y) {
                        (y.return = s.return), (Yi = y);
                        break e;
                      }
                      Yi = s.return;
                    }
                }
                if (
                  ((js = a),
                  Ma(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (w) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ns.transition = t);
            }
          }
          return !1;
        }
        function ku(e, t, n) {
          (e = Tl(e, (t = hi(0, (t = ci(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (At(e, 1, t), ru(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) ku(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ku(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Js || !Js.has(r)))
                ) {
                  (t = Tl(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (At(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Su(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Bs === e &&
              (Os & n) === n &&
              (4 === Ts ||
              (3 === Ts && (130023424 & Os) === Os && 500 > Ge() - Us)
                ? fu(e, 0)
                : (zs |= n)),
            ru(e, t);
        }
        function Cu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Bl(e, t)) && (At(e, t, n), ru(e, n));
        }
        function Nu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cu(e, n);
        }
        function ju(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Cu(e, n);
        }
        function Bu(e, t) {
          return qe(e, t);
        }
        function Pu(e, t, n, r) {
          (this.tag = e),
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
            (this.alternate = null);
        }
        function Ou(e, t, n, r) {
          return new Pu(e, t, n, r);
        }
        function _u(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ru(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ou(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Tu(e, t, n, r, a, o) {
          var i = 2;
          if (((r = e), "function" === typeof e)) _u(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case k:
                return Iu(n.children, a, o, t);
              case E:
                (i = 8), (a |= 8);
                break;
              case S:
                return (
                  ((e = Ou(12, n, t, 2 | a)).elementType = S), (e.lanes = o), e
                );
              case B:
                return (
                  ((e = Ou(13, n, t, a)).elementType = B), (e.lanes = o), e
                );
              case P:
                return (
                  ((e = Ou(19, n, t, a)).elementType = P), (e.lanes = o), e
                );
              case R:
                return Fu(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      i = 10;
                      break e;
                    case N:
                      i = 9;
                      break e;
                    case j:
                      i = 11;
                      break e;
                    case O:
                      i = 14;
                      break e;
                    case _:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ou(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Iu(e, t, n, r) {
          return ((e = Ou(7, e, r, t)).lanes = n), e;
        }
        function Fu(e, t, n, r) {
          return (
            ((e = Ou(22, e, r, t)).elementType = R),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Lu(e, t, n) {
          return ((e = Ou(6, e, null, t)).lanes = n), e;
        }
        function zu(e, t, n) {
          return (
            ((t = Ou(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Qu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Du(e, t, n, r, a, l, o, i, s) {
          return (
            (e = new Qu(e, t, n, i, s)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Ou(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ol(l),
            e
          );
        }
        function Uu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: w,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Mu(e) {
          if (!e) return Na;
          e: {
            if (Me((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (_a(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (_a(n)) return Ia(e, n, t);
          }
          return t;
        }
        function Vu(e, t, n, r, a, l, o, i, s) {
          return (
            ((e = Du(n, r, !0, e, 0, l, 0, i, s)).context = Mu(null)),
            (n = e.current),
            ((l = Rl((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Tl(n, l, a),
            (e.current.lanes = a),
            At(e, a, r),
            ru(e, r),
            e
          );
        }
        function Wu(e, t, n, r) {
          var a = t.current,
            l = eu(),
            o = tu(a);
          return (
            (n = Mu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Rl(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Tl(a, t, o)) && (nu(e, a, o, l), Il(e, a, o)),
            o
          );
        }
        function Hu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ju(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          Ju(e, t), (e = e.alternate) && Ju(e, t);
        }
        ks = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ba.current) xi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Pi(t), pl();
                        break;
                      case 5:
                        lo(t);
                        break;
                      case 1:
                        _a(t.type) && Fa(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(Al, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(io, 1 & io.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Li(e, t, n)
                            : (Ca(io, 1 & io.current),
                              null !== (e = Wi(e, t, n)) ? e.sibling : null);
                        Ca(io, 1 & io.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Mi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(io, io.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Si(e, t, n);
                    }
                    return Wi(e, t, n);
                  })(e, t, n)
                );
              xi = 0 !== (131072 & e.flags);
            }
          else (xi = !1), al && 0 !== (1048576 & t.flags) && $a(t, Ja, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vi(e, t), (e = t.pendingProps);
              var a = Oa(t, ja.current);
              El(t, n), (a = Eo(null, t, r, e, a, n));
              var o = So();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    _a(r) ? ((o = !0), Fa(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ol(t),
                    (a.updater = Ul),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Hl(t, r, e, n),
                    (t = Bi(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    al && o && el(t),
                    yi(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return _u(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ni(null, t, r, e, n);
                    break e;
                  case 1:
                    t = ji(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ki(null, t, r, gl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ni(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ji(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 3:
              e: {
                if ((Pi(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  _l(e, t),
                  Ll(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Oi(e, t, r, n, (a = ci(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Oi(e, t, r, n, (a = ci(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ua(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Gl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Wi(e, t, n);
                    break e;
                  }
                  yi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                lo(t),
                null === e && ul(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Ci(e, t),
                yi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && ul(t), null;
            case 13:
              return Li(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Zl(t, null, r, n)) : yi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wi(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 7:
              return yi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return yi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = a.value),
                  Ca(Al, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === a.children && !Ba.current) {
                      t = Wi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        i = o.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Rl(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              kl(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341));
                        (i.lanes |= n),
                          null !== (s = i.alternate) && (s.lanes |= n),
                          kl(i, n, t),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                yi(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                El(t, n),
                (r = r((a = Sl(a)))),
                (t.flags |= 1),
                yi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gl((r = t.type), t.pendingProps)),
                ki(e, t, r, (a = gl(r.type, a)), n)
              );
            case 15:
              return Ei(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gl(r, a)),
                Vi(e, t),
                (t.tag = 1),
                _a(r) ? ((e = !0), Fa(t)) : (e = !1),
                El(t, n),
                Vl(t, r, a),
                Hl(t, r, a, n),
                Bi(null, t, r, !0, e, n)
              );
            case 19:
              return Mi(e, t, n);
            case 22:
              return Si(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Ku =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xu(e) {
          this._internalRoot = e;
        }
        function Zu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Yu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $u() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var o = l;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Hu(o);
                i.call(e);
              };
            }
            Wu(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Hu(o);
                    l.call(e);
                  };
                }
                var o = Vu(t, r, e, 0, null, !1, 0, "", $u);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Mr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Hu(s);
                  i.call(e);
                };
              }
              var s = Du(e, 0, !1, null, 0, !1, 0, "", $u);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Mr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Wu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Hu(o);
        }
        (Zu.prototype.render = Xu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Wu(e, t, null, null);
          }),
          (Zu.prototype.unmount = Xu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Wu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Zu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Rt.length && 0 !== t && t < Rt[n].priority;
                n++
              );
              Rt.splice(n, 0, e), 0 === n && Lt(e);
            }
          }),
          (yt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    ru(t, Ge()),
                    0 === (6 & js) && ((Ms = Ge() + 500), Ma()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Bl(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = Bl(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              qu(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Bl(e, t);
              if (null !== n) nu(n, e, t, eu());
              qu(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (St = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (we = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Y(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ya(r);
                      if (!a) throw Error(l(90));
                      q(r), Y(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = uu),
          (Be = cu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, ya, Ce, Ne, uu],
          },
          nc = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (lt = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gu(t)) throw Error(l(200));
            return Uu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Ku;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Du(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Mr(8 === e.nodeType ? e.parentNode : e),
              new Xu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = He(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Yu(t)) throw Error(l(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              i = Ku;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Vu(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
              (e[ha] = t.current),
              Mr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Zu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Yu(t)) throw Error(l(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Yu(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Yu(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            l = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: l,
            _owner: i.current,
          };
        }
        (t.Fragment = l), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function A(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (A.prototype.isReactComponent = {}),
          (A.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (A.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = A.prototype);
        var x = (b.prototype = new v());
        (x.constructor = b), m(x, A.prototype), (x.isPureReactComponent = !0);
        var y = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, r) {
          var a,
            l = {},
            o = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              w.call(t, a) && !E.hasOwnProperty(a) && (l[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) l.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: k.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function j(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function B(e, t, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (i) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === l ? "." + j(s, 0) : l),
              y(o)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  B(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (l = "" === l ? "." : l + ":"), y(e)))
            for (var u = 0; u < e.length; u++) {
              var c = l + j((i = e[u]), u);
              s += B(i, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(i = e.next()).done; )
              s += B((i = i.value), t, a, (c = l + j(i, u++)), o);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            B(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var _ = { current: null },
          R = { transition: null },
          T = {
            ReactCurrentDispatcher: _,
            ReactCurrentBatchConfig: R,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = A),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = k.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                w.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = R.transition;
            R.transition = {};
            try {
              e();
            } finally {
              R.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return _.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return _.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return _.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return _.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return _.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return _.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return _.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return _.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return _.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return _.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return _.current.useRef(e);
          }),
          (t.useState = function (e) {
            return _.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return _.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return _.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                s = e[i],
                u = i + 1,
                c = e[u];
              if (0 > l(s, n))
                u < a && 0 > l(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[i] = n), (r = i));
              else {
                if (!(u < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            s = i.now();
          t.unstable_now = function () {
            return i.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          A = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function y(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(u)) (m = !0), R(w);
            else {
              var t = r(c);
              null !== t && T(y, t.startTime - e);
            }
        }
        function w(e, n) {
          (m = !1), g && ((g = !1), v(C), (C = -1)), (h = !0);
          var l = p;
          try {
            for (
              x(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !B()));

            ) {
              var o = f.callback;
              if ("function" === typeof o) {
                (f.callback = null), (p = f.priorityLevel);
                var i = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (f.callback = i)
                    : f === r(u) && a(u),
                  x(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && T(y, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          S = null,
          C = -1,
          N = 5,
          j = -1;
        function B() {
          return !(t.unstable_now() - j < N);
        }
        function P() {
          if (null !== S) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? k() : ((E = !1), (S = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            _ = O.port2;
          (O.port1.onmessage = P),
            (k = function () {
              _.postMessage(null);
            });
        } else
          k = function () {
            A(P, 0);
          };
        function R(e) {
          (S = e), E || ((E = !0), k());
        }
        function T(e, n) {
          C = A(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), R(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (v(C), (C = -1)) : (g = !0), T(y, l - o)))
                : ((e.sortIndex = i), n(u, e), m || h || ((m = !0), R(w))),
              e
            );
          }),
          (t.unstable_shouldYield = B),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  !(function () {
    var e,
      t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e);
          }
        : function (e) {
            return e.__proto__;
          };
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var l = Object.create(null);
      n.r(l);
      var o = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var i = 2 & a && r; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach(function (e) {
          o[e] = function () {
            return r[e];
          };
        });
      return (
        (o.default = function () {
          return r;
        }),
        n.d(l, o),
        l
      );
    };
  })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e = n(791),
        t = n.t(e, 2),
        r = n(250),
        a = n.p + "static/media/logo.a73a63d1c8ba93cb4382.gif",
        l = n(184);
      var o = function () {
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("header", {
            className:
              "shadow-3xl rounded-b-xl font-poppins bg-black bg-opacity-80  flex justify-center selection:bg-lime-400 selection:text-black",
            children: (0, l.jsx)("div", {
              className:
                "text-white py-2 px-4 md:px-32 container flex flex-row items-center",
              children: (0, l.jsxs)("a", {
                href: "/",
                className: "flex flex-row items-center",
                children: [
                  (0, l.jsx)("img", {
                    src: a,
                    className: "w-12 h-12 md:w-14 md:h-14 ",
                    alt: "Logo",
                  }),
                  (0, l.jsx)("p", {
                    className:
                      "px-1 font-bold tracking-tighter md:tracking-normal md:px-3 text-xl md:text-2xl ",
                    children: "Octa Ocean",
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var i = function () {
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("footer", {
              className:
                "mt-5 bg-black bg-opacity-80 font-poppins selection:bg-lime-400 selection:text-black",
              children: (0, l.jsxs)("div", {
                className:
                  "container px-5 md:py-4 py-4 mx-auto flex items-center sm:flex-row flex-col",
                children: [
                  (0, l.jsxs)("a", {
                    href: "/",
                    rel: "noreferrer",
                    className:
                      "flex title-font font-medium items-center md:justify-start justify-center text-white",
                    children: [
                      (0, l.jsx)("img", {
                        src: a,
                        className: "w-12 h-12 md:w-12 md:h-12 ",
                        alt: "Logo",
                      }),
                      (0, l.jsx)("span", {
                        className: "ml-3 text-xl",
                        children: "Octa Ocean",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("p", {
                    className:
                      "text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4",
                    children: [
                      "\xa9 2022 DBMS Project \u2014",
                      (0, l.jsx)("a", {
                        href: "https://www.linkedin.com/in/hariomswarupsa/",
                        className: "text-blue-400 ml-1",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "@hariomswarupsa",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("span", {
                    className:
                      "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
                    children: [
                      (0, l.jsx)("a", {
                        className: "text-blue-600 ",
                        href: "https://www.facebook.in",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, l.jsx)("svg", {
                          fill: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          className: "w-5 h-5",
                          viewBox: "0 0 24 24",
                          children: (0, l.jsx)("path", {
                            d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                          }),
                        }),
                      }),
                      (0, l.jsx)("a", {
                        className: "ml-3 text-cyan-500",
                        href: "https://www.twitter",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, l.jsx)("svg", {
                          fill: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          className: "w-5 h-5",
                          viewBox: "0 0 24 24",
                          children: (0, l.jsx)("path", {
                            d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                          }),
                        }),
                      }),
                      (0, l.jsx)("a", {
                        className: "ml-3 text-pink-600",
                        href: "https://instagram.com",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, l.jsxs)("svg", {
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          className: "w-5 h-5",
                          viewBox: "0 0 24 24",
                          children: [
                            (0, l.jsx)("rect", {
                              width: "20",
                              height: "20",
                              x: "2",
                              y: "2",
                              rx: "5",
                              ry: "5",
                            }),
                            (0, l.jsx)("path", {
                              d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("a", {
                        className: "ml-3 text-white",
                        href: "https://www.linkedin.com/in/hariomswarupsa/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, l.jsxs)("svg", {
                          fill: "currentColor",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0",
                          className: "w-5 h-5",
                          viewBox: "0 0 24 24",
                          children: [
                            (0, l.jsx)("path", {
                              stroke: "none",
                              d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                            }),
                            (0, l.jsx)("circle", {
                              cx: "4",
                              cy: "4",
                              r: "2",
                              stroke: "none",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        s = n.p + "static/media/CPU1.f8f0793fd7a0d589d11b.png";
      function u() {
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            className:
              "selection:bg-lime-400 selection:text-black my-6 flex flex-col items-center",
            children: (0, l.jsxs)("div", {
              className:
                " mx-2 py-4 md:py-16 md:mx-32 border-2 bg-black bg-opacity-80 rounded-xl border-black",
              children: [
                (0, l.jsx)("p", {
                  className:
                    "text-center p-4 text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500",
                  children: "Blazingly Fast Computing Solutions",
                }),
                (0, l.jsxs)("div", {
                  className:
                    "flex flex-col mx-2 md:mx-32 md:flex-row-reverse items-center  justify-between my-4",
                  children: [
                    (0, l.jsx)("img", {
                      src: s,
                      className:
                        "hover:hue-rotate-90 hover:rotate-12 duration-500 w-1/2 h-1/2 md:w-1/4 md:h-1/4",
                      alt: "",
                    }),
                    (0, l.jsxs)("div", {
                      className: "py-8 px-4",
                      children: [
                        (0, l.jsx)("p", {
                          className:
                            "text-white text-xl text-center md:pr-20 md:text-left font-bold ",
                          children:
                            "We at Octa Ocean deliver Cloud Solutions to you to accelerate your growth. In this Computing Ocean we save your prices and also provide a well built infrastructure. Go HyperScape with our technologies!",
                        }),
                        (0, l.jsxs)("div", {
                          className: "mt-10 text-center md:text-left ",
                          children: [
                            (0, l.jsx)("a", {
                              className:
                                "bg-gradient-to-bl shadow-lg shadow-pink-300 hover:from-purple-500 hover:to-pink-500 from-pink-500 to-purple-500 text-white font-bold  rounded-lg py-2 mx-1 md:mx-0 px-4 duration-500 hover:text-black",
                              href: "/instances",
                              children: "EC2 Instance",
                            }),
                            (0, l.jsx)("a", {
                              className:
                                "bg-gradient-to-bl shadow-lg shadow-pink-300 hover:bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg mx-1 md:mx-5 py-2 px-4 duration-500 hover:from-purple-500 hover:to-pink-500 hover:text-black",
                              href: "/storagebuckets",
                              children: "Storage Bucket",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function d(e, t) {
        if (e) {
          if ("string" === typeof e) return c(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? c(e, t)
              : void 0
          );
        }
      }
      function f(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                l = [],
                o = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (l.push(r.value), !t || l.length !== t);
                  o = !0
                );
              } catch (s) {
                (i = !0), (a = s);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (i) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          d(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var h,
        m = Object.prototype.toString,
        g = Object.getPrototypeOf,
        A =
          ((h = Object.create(null)),
          function (e) {
            var t = m.call(e);
            return h[t] || (h[t] = t.slice(8, -1).toLowerCase());
          }),
        v = function (e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return A(t) === e;
            }
          );
        },
        b = function (e) {
          return function (t) {
            return typeof t === e;
          };
        },
        x = Array.isArray,
        y = b("undefined");
      var w = v("ArrayBuffer");
      var k = b("string"),
        E = b("function"),
        S = b("number"),
        C = function (e) {
          return null !== e && "object" === typeof e;
        },
        N = function (e) {
          if ("object" !== A(e)) return !1;
          var t = g(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        j = v("Date"),
        B = v("File"),
        P = v("Blob"),
        O = v("FileList"),
        _ = v("URLSearchParams");
      function R(e, t) {
        var n,
          r,
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          l = a.allOwnKeys,
          o = void 0 !== l && l;
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), x(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            var i,
              s = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
              u = s.length;
            for (n = 0; n < u; n++) (i = s[n]), t.call(null, e[i], i, e);
          }
      }
      var T,
        I =
          ((T = "undefined" !== typeof Uint8Array && g(Uint8Array)),
          function (e) {
            return T && e instanceof T;
          }),
        F = v("HTMLFormElement"),
        L = (function (e) {
          var t = Object.prototype.hasOwnProperty;
          return function (e, n) {
            return t.call(e, n);
          };
        })(),
        z = v("RegExp"),
        Q = function (e, t) {
          var n = Object.getOwnPropertyDescriptors(e),
            r = {};
          R(n, function (n, a) {
            !1 !== t(n, a, e) && (r[a] = n);
          }),
            Object.defineProperties(e, r);
        },
        D = {
          isArray: x,
          isArrayBuffer: w,
          isBuffer: function (e) {
            return (
              null !== e &&
              !y(e) &&
              null !== e.constructor &&
              !y(e.constructor) &&
              E(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t = "[object FormData]";
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                m.call(e) === t ||
                (E(e.toString) && e.toString() === t))
            );
          },
          isArrayBufferView: function (e) {
            return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && w(e.buffer);
          },
          isString: k,
          isNumber: S,
          isBoolean: function (e) {
            return !0 === e || !1 === e;
          },
          isObject: C,
          isPlainObject: N,
          isUndefined: y,
          isDate: j,
          isFile: B,
          isBlob: P,
          isRegExp: z,
          isFunction: E,
          isStream: function (e) {
            return C(e) && E(e.pipe);
          },
          isURLSearchParams: _,
          isTypedArray: I,
          isFileList: O,
          forEach: R,
          merge: function e() {
            for (
              var t = {},
                n = function (n, r) {
                  N(t[r]) && N(n)
                    ? (t[r] = e(t[r], n))
                    : N(n)
                    ? (t[r] = e({}, n))
                    : x(n)
                    ? (t[r] = n.slice())
                    : (t[r] = n);
                },
                r = 0,
                a = arguments.length;
              r < a;
              r++
            )
              arguments[r] && R(arguments[r], n);
            return t;
          },
          extend: function (e, t, n) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              a = r.allOwnKeys;
            return (
              R(
                t,
                function (t, r) {
                  n && E(t) ? (e[r] = p(t, n)) : (e[r] = t);
                },
                { allOwnKeys: a }
              ),
              e
            );
          },
          trim: function (e) {
            return e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, n, r) {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: function (e, t, n, r) {
            var a,
              l,
              o,
              i = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (l = (a = Object.getOwnPropertyNames(e)).length; l-- > 0; )
                (o = a[l]),
                  (r && !r(o, e, t)) || i[o] || ((t[o] = e[o]), (i[o] = !0));
              e = !1 !== n && g(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: A,
          kindOfTest: v,
          endsWith: function (e, t, n) {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            var r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: function (e) {
            if (!e) return null;
            if (x(e)) return e;
            var t = e.length;
            if (!S(t)) return null;
            for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: function (e, t) {
            for (
              var n, r = (e && e[Symbol.iterator]).call(e);
              (n = r.next()) && !n.done;

            ) {
              var a = n.value;
              t.call(e, a[0], a[1]);
            }
          },
          matchAll: function (e, t) {
            for (var n, r = []; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: F,
          hasOwnProperty: L,
          hasOwnProp: L,
          reduceDescriptors: Q,
          freezeMethods: function (e) {
            Q(e, function (t, n) {
              var r = e[n];
              E(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = function () {
                      throw Error("Can not read-only method '" + n + "'");
                    }));
            });
          },
          toObjectSet: function (e, t) {
            var n = {},
              r = function (e) {
                e.forEach(function (e) {
                  n[e] = !0;
                });
              };
            return x(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: function (e) {
            return e
              .toLowerCase()
              .replace(/[_-\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              });
          },
          noop: function () {},
          toFiniteNumber: function (e, t) {
            return (e = +e), Number.isFinite(e) ? e : t;
          },
        };
      function U(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function M(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function V(e, t, n) {
        return (
          t && M(e.prototype, t),
          n && M(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function W(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      D.inherits(W, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var H = W.prototype,
        J = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach(function (e) {
        J[e] = { value: e };
      }),
        Object.defineProperties(W, J),
        Object.defineProperty(H, "isAxiosError", { value: !0 }),
        (W.from = function (e, t, n, r, a, l) {
          var o = Object.create(H);
          return (
            D.toFlatObject(
              e,
              o,
              function (e) {
                return e !== Error.prototype;
              },
              function (e) {
                return "isAxiosError" !== e;
              }
            ),
            W.call(o, e.message, t, n, r, a),
            (o.cause = e),
            (o.name = e.name),
            l && Object.assign(o, l),
            o
          );
        });
      var q = W,
        K = n(472);
      function X(e) {
        return D.isPlainObject(e) || D.isArray(e);
      }
      function Z(e) {
        return D.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function G(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = Z(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      var Y = D.toFlatObject(D, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var $ = function (e, t, n) {
        if (!D.isObject(e)) throw new TypeError("target must be an object");
        t = t || new (K || FormData)();
        var r,
          a = (n = D.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !D.isUndefined(t[e]);
            }
          )).metaTokens,
          l = n.visitor || c,
          o = n.dots,
          i = n.indexes,
          s =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            (r = t) &&
            D.isFunction(r.append) &&
            "FormData" === r[Symbol.toStringTag] &&
            r[Symbol.iterator];
        if (!D.isFunction(l)) throw new TypeError("visitor must be a function");
        function u(e) {
          if (null === e) return "";
          if (D.isDate(e)) return e.toISOString();
          if (!s && D.isBlob(e))
            throw new q("Blob is not supported. Use a Buffer instead.");
          return D.isArrayBuffer(e) || D.isTypedArray(e)
            ? s && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function c(e, n, r) {
          var l = e;
          if (e && !r && "object" === typeof e)
            if (D.endsWith(n, "{}"))
              (n = a ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (D.isArray(e) &&
                (function (e) {
                  return D.isArray(e) && !e.some(X);
                })(e)) ||
              D.isFileList(e) ||
              (D.endsWith(n, "[]") && (l = D.toArray(e)))
            )
              return (
                (n = Z(n)),
                l.forEach(function (e, r) {
                  !D.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? G([n], r, o) : null === i ? n : n + "[]",
                      u(e)
                    );
                }),
                !1
              );
          return !!X(e) || (t.append(G(r, n, o), u(e)), !1);
        }
        var d = [],
          f = Object.assign(Y, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: X,
          });
        if (!D.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!D.isUndefined(n)) {
              if (-1 !== d.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              d.push(n),
                D.forEach(n, function (n, a) {
                  !0 ===
                    (!(D.isUndefined(n) || null === n) &&
                      l.call(t, n, D.isString(a) ? a.trim() : a, r, f)) &&
                    e(n, r ? r.concat(a) : [a]);
                }),
                d.pop();
            }
          })(e),
          t
        );
      };
      function ee(e) {
        var t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function te(e, t) {
        (this._pairs = []), e && $(e, this, t);
      }
      var ne = te.prototype;
      (ne.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (ne.toString = function (e) {
          var t = e
            ? function (t) {
                return e.call(this, t, ee);
              }
            : ee;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      var re = te;
      function ae(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function le(e, t, n) {
        if (!t) return e;
        var r,
          a = (n && n.encode) || ae,
          l = n && n.serialize;
        if (
          (r = l
            ? l(t, n)
            : D.isURLSearchParams(t)
            ? t.toString()
            : new re(t, n).toString(a))
        ) {
          var o = e.indexOf("#");
          -1 !== o && (e = e.slice(0, o)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
        }
        return e;
      }
      var oe = (function () {
          function e() {
            U(this, e), (this.handlers = []);
          }
          return (
            V(e, [
              {
                key: "use",
                value: function (e, t, n) {
                  return (
                    this.handlers.push({
                      fulfilled: e,
                      rejected: t,
                      synchronous: !!n && n.synchronous,
                      runWhen: n ? n.runWhen : null,
                    }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: "eject",
                value: function (e) {
                  this.handlers[e] && (this.handlers[e] = null);
                },
              },
              {
                key: "clear",
                value: function () {
                  this.handlers && (this.handlers = []);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  D.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                  });
                },
              },
            ]),
            e
          );
        })(),
        ie = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        se = "undefined" !== typeof URLSearchParams ? URLSearchParams : re,
        ue = FormData,
        ce = (function () {
          var e;
          return (
            ("undefined" === typeof navigator ||
              ("ReactNative" !== (e = navigator.product) &&
                "NativeScript" !== e &&
                "NS" !== e)) &&
            "undefined" !== typeof window &&
            "undefined" !== typeof document
          );
        })(),
        de = {
          isBrowser: !0,
          classes: { URLSearchParams: se, FormData: ue, Blob: Blob },
          isStandardBrowserEnv: ce,
          protocols: ["http", "https", "file", "blob", "url", "data"],
        };
      var fe = function (e) {
        function t(e, n, r, a) {
          var l = e[a++],
            o = Number.isFinite(+l),
            i = a >= e.length;
          return (
            (l = !l && D.isArray(r) ? r.length : l),
            i
              ? (D.hasOwnProp(r, l) ? (r[l] = [r[l], n]) : (r[l] = n), !o)
              : ((r[l] && D.isObject(r[l])) || (r[l] = []),
                t(e, n, r[l], a) &&
                  D.isArray(r[l]) &&
                  (r[l] = (function (e) {
                    var t,
                      n,
                      r = {},
                      a = Object.keys(e),
                      l = a.length;
                    for (t = 0; t < l; t++) r[(n = a[t])] = e[n];
                    return r;
                  })(r[l])),
                !o)
          );
        }
        if (D.isFormData(e) && D.isFunction(e.entries)) {
          var n = {};
          return (
            D.forEachEntry(e, function (e, r) {
              t(
                (function (e) {
                  return D.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                    return "[]" === e[0] ? "" : e[1] || e[0];
                  });
                })(e),
                r,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      };
      var pe = de.isStandardBrowserEnv
        ? {
            write: function (e, t, n, r, a, l) {
              var o = [];
              o.push(e + "=" + encodeURIComponent(t)),
                D.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
                D.isString(r) && o.push("path=" + r),
                D.isString(a) && o.push("domain=" + a),
                !0 === l && o.push("secure"),
                (document.cookie = o.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
      function he(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      var me = de.isStandardBrowserEnv
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function r(e) {
              var r = e;
              return (
                t && (n.setAttribute("href", r), (r = n.href)),
                n.setAttribute("href", r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (e = r(window.location.href)),
              function (t) {
                var n = D.isString(t) ? r(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      function ge(e, t, n) {
        q.call(this, null == e ? "canceled" : e, q.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      D.inherits(ge, q, { __CANCEL__: !0 });
      var Ae = ge;
      var ve = D.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        be = Symbol("internals"),
        xe = Symbol("defaults");
      function ye(e) {
        return e && String(e).trim().toLowerCase();
      }
      function we(e) {
        return !1 === e || null == e ? e : D.isArray(e) ? e.map(we) : String(e);
      }
      function ke(e, t, n, r) {
        return D.isFunction(r)
          ? r.call(this, t, n)
          : D.isString(t)
          ? D.isString(r)
            ? -1 !== t.indexOf(r)
            : D.isRegExp(r)
            ? r.test(t)
            : void 0
          : void 0;
      }
      function Ee(e, t) {
        t = t.toLowerCase();
        for (var n, r = Object.keys(e), a = r.length; a-- > 0; )
          if (t === (n = r[a]).toLowerCase()) return n;
        return null;
      }
      function Se(e, t) {
        e && this.set(e), (this[xe] = t || null);
      }
      Object.assign(Se.prototype, {
        set: function (e, t, n) {
          var r = this;
          function a(e, t, n) {
            var a = ye(t);
            if (!a) throw new Error("header name must be a non-empty string");
            var l = Ee(r, a);
            (!l || !0 === n || (!1 !== r[l] && !1 !== n)) &&
              (r[l || t] = we(e));
          }
          return (
            D.isPlainObject(e)
              ? D.forEach(e, function (e, n) {
                  a(e, n, t);
                })
              : a(t, e, n),
            this
          );
        },
        get: function (e, t) {
          if ((e = ye(e))) {
            var n = Ee(this, e);
            if (n) {
              var r = this[n];
              if (!t) return r;
              if (!0 === t)
                return (function (e) {
                  for (
                    var t,
                      n = Object.create(null),
                      r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    (t = r.exec(e));

                  )
                    n[t[1]] = t[2];
                  return n;
                })(r);
              if (D.isFunction(t)) return t.call(this, r, n);
              if (D.isRegExp(t)) return t.exec(r);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        },
        has: function (e, t) {
          if ((e = ye(e))) {
            var n = Ee(this, e);
            return !(!n || (t && !ke(0, this[n], n, t)));
          }
          return !1;
        },
        delete: function (e, t) {
          var n = this,
            r = !1;
          function a(e) {
            if ((e = ye(e))) {
              var a = Ee(n, e);
              !a || (t && !ke(0, n[a], a, t)) || (delete n[a], (r = !0));
            }
          }
          return D.isArray(e) ? e.forEach(a) : a(e), r;
        },
        clear: function () {
          return Object.keys(this).forEach(this.delete.bind(this));
        },
        normalize: function (e) {
          var t = this,
            n = {};
          return (
            D.forEach(this, function (r, a) {
              var l = Ee(n, a);
              if (l) return (t[l] = we(r)), void delete t[a];
              var o = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                        return t.toUpperCase() + n;
                      });
                  })(a)
                : String(a).trim();
              o !== a && delete t[a], (t[o] = we(r)), (n[o] = !0);
            }),
            this
          );
        },
        toJSON: function (e) {
          var t = Object.create(null);
          return (
            D.forEach(
              Object.assign({}, this[xe] || null, this),
              function (n, r) {
                null != n &&
                  !1 !== n &&
                  (t[r] = e && D.isArray(n) ? n.join(", ") : n);
              }
            ),
            t
          );
        },
      }),
        Object.assign(Se, {
          from: function (e) {
            return D.isString(e)
              ? new this(
                  (function (e) {
                    var t,
                      n,
                      r,
                      a = {};
                    return (
                      e &&
                        e.split("\n").forEach(function (e) {
                          (r = e.indexOf(":")),
                            (t = e.substring(0, r).trim().toLowerCase()),
                            (n = e.substring(r + 1).trim()),
                            !t ||
                              (a[t] && ve[t]) ||
                              ("set-cookie" === t
                                ? a[t]
                                  ? a[t].push(n)
                                  : (a[t] = [n])
                                : (a[t] = a[t] ? a[t] + ", " + n : n));
                        }),
                      a
                    );
                  })(e)
                )
              : e instanceof this
              ? e
              : new this(e);
          },
          accessor: function (e) {
            var t = (this[be] = this[be] = { accessors: {} }).accessors,
              n = this.prototype;
            function r(e) {
              var r = ye(e);
              t[r] ||
                (!(function (e, t) {
                  var n = D.toCamelCase(" " + t);
                  ["get", "set", "has"].forEach(function (r) {
                    Object.defineProperty(e, r + n, {
                      value: function (e, n, a) {
                        return this[r].call(this, t, e, n, a);
                      },
                      configurable: !0,
                    });
                  });
                })(n, e),
                (t[r] = !0));
            }
            return D.isArray(e) ? e.forEach(r) : r(e), this;
          },
        }),
        Se.accessor([
          "Content-Type",
          "Content-Length",
          "Accept",
          "Accept-Encoding",
          "User-Agent",
        ]),
        D.freezeMethods(Se.prototype),
        D.freezeMethods(Se);
      var Ce = Se;
      var Ne = function (e, t) {
        e = e || 10;
        var n,
          r = new Array(e),
          a = new Array(e),
          l = 0,
          o = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (i) {
            var s = Date.now(),
              u = a[o];
            n || (n = s), (r[l] = i), (a[l] = s);
            for (var c = o, d = 0; c !== l; ) (d += r[c++]), (c %= e);
            if (((l = (l + 1) % e) === o && (o = (o + 1) % e), !(s - n < t))) {
              var f = u && s - u;
              return f ? Math.round((1e3 * d) / f) : void 0;
            }
          }
        );
      };
      function je(e, t) {
        var n = 0,
          r = Ne(50, 250);
        return function (a) {
          var l = a.loaded,
            o = a.lengthComputable ? a.total : void 0,
            i = l - n,
            s = r(i);
          n = l;
          var u = {
            loaded: l,
            total: o,
            progress: o ? l / o : void 0,
            bytes: i,
            rate: s || void 0,
            estimated: s && o && l <= o ? (o - l) / s : void 0,
          };
          (u[t ? "download" : "upload"] = !0), e(u);
        };
      }
      function Be(e) {
        return new Promise(function (t, n) {
          var r,
            a = e.data,
            l = Ce.from(e.headers).normalize(),
            o = e.responseType;
          function i() {
            e.cancelToken && e.cancelToken.unsubscribe(r),
              e.signal && e.signal.removeEventListener("abort", r);
          }
          D.isFormData(a) && de.isStandardBrowserEnv && l.setContentType(!1);
          var s = new XMLHttpRequest();
          if (e.auth) {
            var u = e.auth.username || "",
              c = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            l.set("Authorization", "Basic " + btoa(u + ":" + c));
          }
          var d = he(e.baseURL, e.url);
          function f() {
            if (s) {
              var r = Ce.from(
                "getAllResponseHeaders" in s && s.getAllResponseHeaders()
              );
              !(function (e, t, n) {
                var r = n.config.validateStatus;
                n.status && r && !r(n.status)
                  ? t(
                      new q(
                        "Request failed with status code " + n.status,
                        [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][
                          Math.floor(n.status / 100) - 4
                        ],
                        n.config,
                        n.request,
                        n
                      )
                    )
                  : e(n);
              })(
                function (e) {
                  t(e), i();
                },
                function (e) {
                  n(e), i();
                },
                {
                  data:
                    o && "text" !== o && "json" !== o
                      ? s.response
                      : s.responseText,
                  status: s.status,
                  statusText: s.statusText,
                  headers: r,
                  config: e,
                  request: s,
                }
              ),
                (s = null);
            }
          }
          if (
            (s.open(
              e.method.toUpperCase(),
              le(d, e.params, e.paramsSerializer),
              !0
            ),
            (s.timeout = e.timeout),
            "onloadend" in s
              ? (s.onloadend = f)
              : (s.onreadystatechange = function () {
                  s &&
                    4 === s.readyState &&
                    (0 !== s.status ||
                      (s.responseURL &&
                        0 === s.responseURL.indexOf("file:"))) &&
                    setTimeout(f);
                }),
            (s.onabort = function () {
              s &&
                (n(new q("Request aborted", q.ECONNABORTED, e, s)), (s = null));
            }),
            (s.onerror = function () {
              n(new q("Network Error", q.ERR_NETWORK, e, s)), (s = null);
            }),
            (s.ontimeout = function () {
              var t = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded",
                r = e.transitional || ie;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(
                  new q(
                    t,
                    r.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
                    e,
                    s
                  )
                ),
                (s = null);
            }),
            de.isStandardBrowserEnv)
          ) {
            var p =
              (e.withCredentials || me(d)) &&
              e.xsrfCookieName &&
              pe.read(e.xsrfCookieName);
            p && l.set(e.xsrfHeaderName, p);
          }
          void 0 === a && l.setContentType(null),
            "setRequestHeader" in s &&
              D.forEach(l.toJSON(), function (e, t) {
                s.setRequestHeader(t, e);
              }),
            D.isUndefined(e.withCredentials) ||
              (s.withCredentials = !!e.withCredentials),
            o && "json" !== o && (s.responseType = e.responseType),
            "function" === typeof e.onDownloadProgress &&
              s.addEventListener("progress", je(e.onDownloadProgress, !0)),
            "function" === typeof e.onUploadProgress &&
              s.upload &&
              s.upload.addEventListener("progress", je(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((r = function (t) {
                s &&
                  (n(!t || t.type ? new Ae(null, e, s) : t),
                  s.abort(),
                  (s = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(r),
              e.signal &&
                (e.signal.aborted
                  ? r()
                  : e.signal.addEventListener("abort", r)));
          var h = (function (e) {
            var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(d);
          h && -1 === de.protocols.indexOf(h)
            ? n(new q("Unsupported protocol " + h + ":", q.ERR_BAD_REQUEST, e))
            : s.send(a || null);
        });
      }
      var Pe = { http: Be, xhr: Be },
        Oe = function (e) {
          if (D.isString(e)) {
            var t = Pe[e];
            if (!e)
              throw Error(
                D.hasOwnProp(e)
                  ? "Adapter '".concat(e, "' is not available in the build")
                  : "Can not resolve adapter '".concat(e, "'")
              );
            return t;
          }
          if (!D.isFunction(e))
            throw new TypeError("adapter is not a function");
          return e;
        },
        _e = { "Content-Type": "application/x-www-form-urlencoded" };
      var Re = {
        transitional: ie,
        adapter: (function () {
          var e;
          return (
            "undefined" !== typeof XMLHttpRequest
              ? (e = Oe("xhr"))
              : "undefined" !== typeof process &&
                "process" === D.kindOf(process) &&
                (e = Oe("http")),
            e
          );
        })(),
        transformRequest: [
          function (e, t) {
            var n,
              r = t.getContentType() || "",
              a = r.indexOf("application/json") > -1,
              l = D.isObject(e);
            if (
              (l && D.isHTMLForm(e) && (e = new FormData(e)), D.isFormData(e))
            )
              return a && a ? JSON.stringify(fe(e)) : e;
            if (
              D.isArrayBuffer(e) ||
              D.isBuffer(e) ||
              D.isStream(e) ||
              D.isFile(e) ||
              D.isBlob(e)
            )
              return e;
            if (D.isArrayBufferView(e)) return e.buffer;
            if (D.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            if (l) {
              if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return $(
                    e,
                    new de.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return de.isNode && D.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (n = D.isFileList(e)) ||
                r.indexOf("multipart/form-data") > -1
              ) {
                var o = this.env && this.env.FormData;
                return $(
                  n ? { "files[]": e } : e,
                  o && new o(),
                  this.formSerializer
                );
              }
            }
            return l || a
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (D.isString(e))
                    try {
                      return (t || JSON.parse)(e), D.trim(e);
                    } catch (r) {
                      if ("SyntaxError" !== r.name) throw r;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || Re.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && D.isString(e) && ((n && !this.responseType) || r)) {
              var a = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (l) {
                if (a) {
                  if ("SyntaxError" === l.name)
                    throw q.from(
                      l,
                      q.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw l;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: de.classes.FormData, Blob: de.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      D.forEach(["delete", "get", "head"], function (e) {
        Re.headers[e] = {};
      }),
        D.forEach(["post", "put", "patch"], function (e) {
          Re.headers[e] = D.merge(_e);
        });
      var Te = Re;
      function Ie(e, t) {
        var n = this || Te,
          r = t || n,
          a = Ce.from(r.headers),
          l = r.data;
        return (
          D.forEach(e, function (e) {
            l = e.call(n, l, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          l
        );
      }
      function Fe(e) {
        return !(!e || !e.__CANCEL__);
      }
      function Le(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new Ae();
      }
      function ze(e) {
        return (
          Le(e),
          (e.headers = Ce.from(e.headers)),
          (e.data = Ie.call(e, e.transformRequest)),
          (e.adapter || Te.adapter)(e).then(
            function (t) {
              return (
                Le(e),
                (t.data = Ie.call(e, e.transformResponse, t)),
                (t.headers = Ce.from(t.headers)),
                t
              );
            },
            function (t) {
              return (
                Fe(t) ||
                  (Le(e),
                  t &&
                    t.response &&
                    ((t.response.data = Ie.call(
                      e,
                      e.transformResponse,
                      t.response
                    )),
                    (t.response.headers = Ce.from(t.response.headers)))),
                Promise.reject(t)
              );
            }
          )
        );
      }
      function Qe(e, t) {
        t = t || {};
        var n = {};
        function r(e, t) {
          return D.isPlainObject(e) && D.isPlainObject(t)
            ? D.merge(e, t)
            : D.isPlainObject(t)
            ? D.merge({}, t)
            : D.isArray(t)
            ? t.slice()
            : t;
        }
        function a(n) {
          return D.isUndefined(t[n])
            ? D.isUndefined(e[n])
              ? void 0
              : r(void 0, e[n])
            : r(e[n], t[n]);
        }
        function l(e) {
          if (!D.isUndefined(t[e])) return r(void 0, t[e]);
        }
        function o(n) {
          return D.isUndefined(t[n])
            ? D.isUndefined(e[n])
              ? void 0
              : r(void 0, e[n])
            : r(void 0, t[n]);
        }
        function i(n) {
          return n in t ? r(e[n], t[n]) : n in e ? r(void 0, e[n]) : void 0;
        }
        var s = {
          url: l,
          method: l,
          data: l,
          baseURL: o,
          transformRequest: o,
          transformResponse: o,
          paramsSerializer: o,
          timeout: o,
          timeoutMessage: o,
          withCredentials: o,
          adapter: o,
          responseType: o,
          xsrfCookieName: o,
          xsrfHeaderName: o,
          onUploadProgress: o,
          onDownloadProgress: o,
          decompress: o,
          maxContentLength: o,
          maxBodyLength: o,
          beforeRedirect: o,
          transport: o,
          httpAgent: o,
          httpsAgent: o,
          cancelToken: o,
          socketPath: o,
          responseEncoding: o,
          validateStatus: i,
        };
        return (
          D.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
            var t = s[e] || a,
              r = t(e);
            (D.isUndefined(r) && t !== i) || (n[e] = r);
          }),
          n
        );
      }
      var De = "1.1.3",
        Ue = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          Ue[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      var Me = {};
      Ue.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.1.3] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return function (n, a, l) {
          if (!1 === e)
            throw new q(
              r(a, " has been removed" + (t ? " in " + t : "")),
              q.ERR_DEPRECATED
            );
          return (
            t &&
              !Me[a] &&
              ((Me[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, l)
          );
        };
      };
      var Ve = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
            for (var r = Object.keys(e), a = r.length; a-- > 0; ) {
              var l = r[a],
                o = t[l];
              if (o) {
                var i = e[l],
                  s = void 0 === i || o(i, l, e);
                if (!0 !== s)
                  throw new q(
                    "option " + l + " must be " + s,
                    q.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new q("Unknown option " + l, q.ERR_BAD_OPTION);
            }
          },
          validators: Ue,
        },
        We = Ve.validators,
        He = (function () {
          function e(t) {
            U(this, e),
              (this.defaults = t),
              (this.interceptors = { request: new oe(), response: new oe() });
          }
          return (
            V(e, [
              {
                key: "request",
                value: function (e, t) {
                  "string" === typeof e
                    ? ((t = t || {}).url = e)
                    : (t = e || {});
                  var n = (t = Qe(this.defaults, t)),
                    r = n.transitional,
                    a = n.paramsSerializer;
                  void 0 !== r &&
                    Ve.assertOptions(
                      r,
                      {
                        silentJSONParsing: We.transitional(We.boolean),
                        forcedJSONParsing: We.transitional(We.boolean),
                        clarifyTimeoutError: We.transitional(We.boolean),
                      },
                      !1
                    ),
                    void 0 !== a &&
                      Ve.assertOptions(
                        a,
                        { encode: We.function, serialize: We.function },
                        !0
                      ),
                    (t.method = (
                      t.method ||
                      this.defaults.method ||
                      "get"
                    ).toLowerCase());
                  var l =
                    t.headers && D.merge(t.headers.common, t.headers[t.method]);
                  l &&
                    D.forEach(
                      [
                        "delete",
                        "get",
                        "head",
                        "post",
                        "put",
                        "patch",
                        "common",
                      ],
                      function (e) {
                        delete t.headers[e];
                      }
                    ),
                    (t.headers = new Ce(t.headers, l));
                  var o = [],
                    i = !0;
                  this.interceptors.request.forEach(function (e) {
                    ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
                      ((i = i && e.synchronous),
                      o.unshift(e.fulfilled, e.rejected));
                  });
                  var s,
                    u = [];
                  this.interceptors.response.forEach(function (e) {
                    u.push(e.fulfilled, e.rejected);
                  });
                  var c,
                    d = 0;
                  if (!i) {
                    var f = [ze.bind(this), void 0];
                    for (
                      f.unshift.apply(f, o),
                        f.push.apply(f, u),
                        c = f.length,
                        s = Promise.resolve(t);
                      d < c;

                    )
                      s = s.then(f[d++], f[d++]);
                    return s;
                  }
                  c = o.length;
                  var p = t;
                  for (d = 0; d < c; ) {
                    var h = o[d++],
                      m = o[d++];
                    try {
                      p = h(p);
                    } catch (g) {
                      m.call(this, g);
                      break;
                    }
                  }
                  try {
                    s = ze.call(this, p);
                  } catch (g) {
                    return Promise.reject(g);
                  }
                  for (d = 0, c = u.length; d < c; ) s = s.then(u[d++], u[d++]);
                  return s;
                },
              },
              {
                key: "getUri",
                value: function (e) {
                  return le(
                    he((e = Qe(this.defaults, e)).baseURL, e.url),
                    e.params,
                    e.paramsSerializer
                  );
                },
              },
            ]),
            e
          );
        })();
      D.forEach(["delete", "get", "head", "options"], function (e) {
        He.prototype[e] = function (t, n) {
          return this.request(
            Qe(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        D.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                Qe(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (He.prototype[e] = t()), (He.prototype[e + "Form"] = t(!0));
        });
      var Je = He,
        qe = (function () {
          function e(t) {
            if ((U(this, e), "function" !== typeof t))
              throw new TypeError("executor must be a function.");
            var n;
            this.promise = new Promise(function (e) {
              n = e;
            });
            var r = this;
            this.promise.then(function (e) {
              if (r._listeners) {
                for (var t = r._listeners.length; t-- > 0; ) r._listeners[t](e);
                r._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  n = new Promise(function (e) {
                    r.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (n.cancel = function () {
                    r.unsubscribe(t);
                  }),
                  n
                );
              }),
              t(function (e, t, a) {
                r.reason || ((r.reason = new Ae(e, t, a)), n(r.reason));
              });
          }
          return (
            V(
              e,
              [
                {
                  key: "throwIfRequested",
                  value: function () {
                    if (this.reason) throw this.reason;
                  },
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this.reason
                      ? e(this.reason)
                      : this._listeners
                      ? this._listeners.push(e)
                      : (this._listeners = [e]);
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    if (this._listeners) {
                      var t = this._listeners.indexOf(e);
                      -1 !== t && this._listeners.splice(t, 1);
                    }
                  },
                },
              ],
              [
                {
                  key: "source",
                  value: function () {
                    var t;
                    return {
                      token: new e(function (e) {
                        t = e;
                      }),
                      cancel: t,
                    };
                  },
                },
              ]
            ),
            e
          );
        })();
      var Ke = (function e(t) {
        var n = new Je(t),
          r = p(Je.prototype.request, n);
        return (
          D.extend(r, Je.prototype, n, { allOwnKeys: !0 }),
          D.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(Qe(t, n));
          }),
          r
        );
      })(Te);
      (Ke.Axios = Je),
        (Ke.CanceledError = Ae),
        (Ke.CancelToken = qe),
        (Ke.isCancel = Fe),
        (Ke.VERSION = De),
        (Ke.toFormData = $),
        (Ke.AxiosError = q),
        (Ke.Cancel = Ke.CanceledError),
        (Ke.all = function (e) {
          return Promise.all(e);
        }),
        (Ke.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (Ke.isAxiosError = function (e) {
          return D.isObject(e) && !0 === e.isAxiosError;
        }),
        (Ke.formToJSON = function (e) {
          return fe(D.isHTMLForm(e) ? new FormData(e) : e);
        });
      var Xe = Ke,
        Ze =
          (Xe.Axios,
          Xe.AxiosError,
          Xe.CanceledError,
          Xe.isCancel,
          Xe.CancelToken,
          Xe.VERSION,
          Xe.all,
          Xe.Cancel,
          Xe.isAxiosError,
          Xe.spread,
          Xe.toFormData,
          Xe);
      var Ge,
        Ye = function () {
          var t = f((0, e.useState)(""), 2),
            n = t[0],
            r = t[1],
            a = f((0, e.useState)(""), 2),
            o = a[0],
            i = a[1],
            s = f((0, e.useState)(""), 2),
            u = s[0],
            c = s[1];
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className:
                "selection:bg-lime-400 selection:text-black  my-6 flex flex-col items-center",
              children: (0, l.jsxs)("div", {
                className:
                  "mx-2 md:mx-32 py-4 items-center flex flex-col md:flex-row text-white border-2 bg-black bg-opacity-80 rounded-xl border-black",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "flex flex-col items-center md:items-start px-4 md:px-20",
                    children: [
                      (0, l.jsx)("p", {
                        className:
                          "text-5xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500",
                        children: "Connect Us",
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "text-xl font-bold text-center md:text-left my-5",
                        children:
                          "A Thank you Note? Oh! did we do something wrong? Message us anything we will reply to you!",
                      }),
                      (0, l.jsx)("p", {
                        className: "text-xl font-bold",
                        children: "Anything Unusual...?",
                      }),
                      (0, l.jsxs)("p", {
                        className: "text-xl font-bold mt-4",
                        children: [
                          (0, l.jsx)("span", {
                            className: "text-rose-500",
                            children: "Report: ",
                          }),
                          " 080-92929292",
                        ],
                      }),
                      (0, l.jsxs)("p", {
                        className: "text-xl font-bold",
                        children: [
                          (0, l.jsx)("span", {
                            className: "text-blue-300",
                            children: "Email: ",
                          }),
                          "octaocean@github.in",
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("form", {
                    onSubmit: function (e) {
                      e.target.reset(),
                        e.preventDefault(),
                        Ze.post("http://localhost:3001", {
                          name: n,
                          email: o,
                          message: u,
                        }).then(function () {
                          console.log("success");
                        });
                    },
                    className: "flex flex-col md:pr-16 md:w-1/2",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex flex-col my-2",
                        children: [
                          (0, l.jsx)("label", {
                            className: "text-xl font-bold",
                            htmlFor: "nameid",
                            children: "Name",
                          }),
                          (0, l.jsx)("input", {
                            onChange: function (e) {
                              r(e.target.value);
                            },
                            type: "text",
                            autoComplete: "off",
                            required: !0,
                            placeholder: "John Doe",
                            className:
                              " focus:border-indigo-500 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg",
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-col my-2",
                        children: [
                          (0, l.jsx)("label", {
                            className: "text-xl font-bold",
                            htmlFor: "emailid",
                            children: "Email",
                          }),
                          (0, l.jsx)("input", {
                            onChange: function (e) {
                              i(e.target.value);
                            },
                            type: "email",
                            autoComplete: "off",
                            id: "emailid",
                            required: !0,
                            placeholder: "johndoe@hotmail.com",
                            className:
                              " focus:border-indigo-500 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg",
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, l.jsx)("label", {
                            className: "text-xl font-bold",
                            htmlFor: "cc",
                            children: "Message",
                          }),
                          (0, l.jsx)("textarea", {
                            onChange: function (e) {
                              c(e.target.value);
                            },
                            required: !0,
                            placeholder: "Here Goes your Message",
                            className:
                              "focus:border-indigo-500 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg ",
                            id: "cc",
                            cols: "30",
                            rows: "3",
                            autoComplete: "off",
                          }),
                        ],
                      }),
                      (0, l.jsx)("button", {
                        type: "submit",
                        className:
                          "py-2 text-white shadow-md shadow-red-400 my-3 rounded-xl font-bold bg-gradient-to-tr from-yellow-500 to-red-500  hover:bg-cyan-400 hover:text-black hover:bg-gradient-to-t duration-500",
                        children: "Submit",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      function $e(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return c(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          d(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function et(e, t) {
        return (
          (et = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          et(e, t)
        );
      }
      function tt(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && et(e, t);
      }
      function nt(e) {
        return (
          (nt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          nt(e)
        );
      }
      function rt() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function at(e) {
        return (
          (at =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          at(e)
        );
      }
      function lt(e, t) {
        if (t && ("object" === at(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function ot(e) {
        var t = rt();
        return function () {
          var n,
            r = nt(e);
          if (t) {
            var a = nt(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return lt(this, n);
        };
      }
      function it(e, t, n) {
        return (
          (it = rt()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && et(a, n.prototype), a;
              }),
          it.apply(null, arguments)
        );
      }
      function st(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (st = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return it(e, arguments, nt(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              et(r, e)
            );
          }),
          st(e)
        );
      }
      function ut() {
        return (
          (ut = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ut.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(Ge || (Ge = {}));
      var ct,
        dt = "popstate";
      function ft(e) {
        return { usr: e.state, key: e.key };
      }
      function pt(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          ut(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? mt(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function ht(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          l = e.hash,
          o = void 0 === l ? "" : l;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function mt(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function gt(e, t, n, r) {
        void 0 === r && (r = {});
        var a = r,
          l = a.window,
          o = void 0 === l ? document.defaultView : l,
          i = a.v5Compat,
          s = void 0 !== i && i,
          u = o.history,
          c = Ge.Pop,
          d = null;
        function f() {
          (c = Ge.Pop), d && d({ action: c, location: p.location });
        }
        var p = {
          get action() {
            return c;
          },
          get location() {
            return e(o, u);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              o.addEventListener(dt, f),
              (d = e),
              function () {
                o.removeEventListener(dt, f), (d = null);
              }
            );
          },
          createHref: function (e) {
            return t(o, e);
          },
          push: function (e, t) {
            c = Ge.Push;
            var r = pt(p.location, e, t);
            n && n(r, e);
            var a = ft(r),
              l = p.createHref(r);
            try {
              u.pushState(a, "", l);
            } catch (i) {
              o.location.assign(l);
            }
            s && d && d({ action: c, location: r });
          },
          replace: function (e, t) {
            c = Ge.Replace;
            var r = pt(p.location, e, t);
            n && n(r, e);
            var a = ft(r),
              l = p.createHref(r);
            u.replaceState(a, "", l), s && d && d({ action: c, location: r });
          },
          go: function (e) {
            return u.go(e);
          },
        };
        return p;
      }
      function At(e, t, n) {
        void 0 === n && (n = "/");
        var r = Et(("string" === typeof t ? mt(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = vt(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var l = null, o = 0; null == l && o < a.length; ++o)
          l = wt(a[o], r);
        return l;
      }
      function vt(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var l = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            l.relativePath.startsWith("/") &&
              (St(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                  l.relativePath +
                  '" nested under path "' +
                  r +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (l.relativePath = l.relativePath.slice(r.length)));
            var o = Bt([r, l.relativePath]),
              i = n.concat(l);
            e.children &&
              e.children.length > 0 &&
              (St(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' +
                  o +
                  '".'
              ),
              vt(e.children, t, i, o)),
              (null != e.path || e.index) &&
                t.push({ path: o, score: yt(o, e.index), routesMeta: i });
          }),
          t
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(ct || (ct = {}));
      var bt = /^:\w+$/,
        xt = function (e) {
          return "*" === e;
        };
      function yt(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(xt) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !xt(e);
            })
            .reduce(function (e, t) {
              return e + (bt.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function wt(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", l = [], o = 0;
          o < n.length;
          ++o
        ) {
          var i = n[o],
            s = o === n.length - 1,
            u = "/" === a ? t : t.slice(a.length) || "/",
            c = kt(
              { path: i.relativePath, caseSensitive: i.caseSensitive, end: s },
              u
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var d = i.route;
          l.push({
            params: r,
            pathname: Bt([a, c.pathname]),
            pathnameBase: Pt(Bt([a, c.pathnameBase])),
            route: d,
          }),
            "/" !== c.pathnameBase && (a = Bt([a, c.pathnameBase]));
        }
        return l;
      }
      function kt(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            Ct(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            return [new RegExp(a, t ? void 0 : "i"), r];
          })(e.path, e.caseSensitive, e.end),
          r = f(n, 2),
          a = r[0],
          l = r[1],
          o = t.match(a);
        if (!o) return null;
        var i = o[0],
          s = i.replace(/(.)\/+$/, "$1"),
          u = o.slice(1);
        return {
          params: l.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = u[n] || "";
              s = i.slice(0, i.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    Ct(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(u[n] || "", t)),
              e
            );
          }, {}),
          pathname: i,
          pathnameBase: s,
          pattern: e,
        };
      }
      function Et(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function St(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function Ct(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function Nt(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function jt(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = mt(e))
            : (St(
                !(a = ut({}, e)).pathname || !a.pathname.includes("?"),
                Nt("?", "pathname", "search", a)
              ),
              St(
                !a.pathname || !a.pathname.includes("#"),
                Nt("#", "pathname", "hash", a)
              ),
              St(
                !a.search || !a.search.includes("#"),
                Nt("#", "search", "hash", a)
              ));
        var l,
          o = "" === e || "" === a.pathname,
          i = o ? "/" : a.pathname;
        if (r || null == i) l = n;
        else {
          var s = t.length - 1;
          if (i.startsWith("..")) {
            for (var u = i.split("/"); ".." === u[0]; ) u.shift(), (s -= 1);
            a.pathname = u.join("/");
          }
          l = s >= 0 ? t[s] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? mt(e) : e,
              r = n.pathname,
              a = n.search,
              l = void 0 === a ? "" : a,
              o = n.hash,
              i = void 0 === o ? "" : o,
              s = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: s, search: Ot(l), hash: _t(i) };
          })(a, l),
          d = i && "/" !== i && i.endsWith("/"),
          f = (o || "." === i) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!d && !f) || (c.pathname += "/"), c;
      }
      var Bt = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        Pt = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        Ot = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        _t = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        Rt = (function (e) {
          tt(n, e);
          var t = ot(n);
          function n() {
            return U(this, n), t.apply(this, arguments);
          }
          return V(n);
        })(st(Error));
      var Tt = V(function e(t, n, r) {
        U(this, e),
          (this.status = t),
          (this.statusText = n || ""),
          (this.data = r);
      });
      function It(e) {
        return e instanceof Tt;
      }
      function Ft() {
        return (
          (Ft = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ft.apply(this, arguments)
        );
      }
      var Lt =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        zt = e.useState,
        Qt = e.useEffect,
        Dt = e.useLayoutEffect,
        Ut = e.useDebugValue;
      function Mt(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !Lt(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        t.useSyncExternalStore;
      var Vt = e.createContext(null);
      var Wt = e.createContext(null);
      var Ht = e.createContext(null);
      var Jt = e.createContext(null);
      var qt = e.createContext(null);
      var Kt = e.createContext(null);
      var Xt = e.createContext({ outlet: null, matches: [] });
      var Zt = e.createContext(null);
      function Gt() {
        return null != e.useContext(Kt);
      }
      function Yt() {
        return Gt() || St(!1), e.useContext(Kt).location;
      }
      function $t(e) {
        return e.filter(function (t, n) {
          return (
            0 === n ||
            (!t.route.index && t.pathnameBase !== e[n - 1].pathnameBase)
          );
        });
      }
      function en() {
        Gt() || St(!1);
        var t = e.useContext(qt),
          n = t.basename,
          r = t.navigator,
          a = e.useContext(Xt).matches,
          l = Yt().pathname,
          o = JSON.stringify(
            $t(a).map(function (e) {
              return e.pathnameBase;
            })
          ),
          i = e.useRef(!1);
        return (
          e.useEffect(function () {
            i.current = !0;
          }),
          e.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), i.current))
                if ("number" !== typeof e) {
                  var a = jt(e, JSON.parse(o), l, "path" === t.relative);
                  "/" !== n &&
                    (a.pathname = "/" === a.pathname ? n : Bt([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t);
                } else r.go(e);
            },
            [n, r, o, l]
          )
        );
      }
      function tn() {
        var t = (function () {
            var t,
              n = e.useContext(Zt),
              r = sn(rn.UseRouteError),
              a = e.useContext(Xt),
              l = a.matches[a.matches.length - 1];
            if (n) return n;
            return (
              a || St(!1),
              !l.route.id && St(!1),
              null == (t = r.errors) ? void 0 : t[l.route.id]
            );
          })(),
          n = It(t)
            ? t.status + " " + t.statusText
            : t instanceof Error
            ? t.message
            : JSON.stringify(t),
          r = t instanceof Error ? t.stack : null,
          a = "rgba(200,200,200, 0.5)",
          l = { padding: "0.5rem", backgroundColor: a },
          o = { padding: "2px 4px", backgroundColor: a };
        return e.createElement(
          e.Fragment,
          null,
          e.createElement("h2", null, "Unhandled Thrown Error!"),
          e.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? e.createElement("pre", { style: l }, r) : null,
          e.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          e.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            e.createElement("code", { style: o }, "errorElement"),
            " props on\xa0",
            e.createElement("code", { style: o }, "<Route>")
          )
        );
      }
      var nn,
        rn,
        an = (function (t) {
          tt(r, t);
          var n = ot(r);
          function r(e) {
            var t;
            return (
              U(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            V(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? e.createElement(Zt.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(e.Component);
      function ln(t) {
        var n = t.routeContext,
          r = t.match,
          a = t.children,
          l = e.useContext(Vt);
        return (
          l &&
            r.route.errorElement &&
            (l._deepestRenderedBoundaryId = r.route.id),
          e.createElement(Xt.Provider, { value: n }, a)
        );
      }
      function on(t, n, r) {
        if ((void 0 === n && (n = []), null == t)) {
          if (null == r || !r.errors) return null;
          t = r.matches;
        }
        var a = t,
          l = null == r ? void 0 : r.errors;
        if (null != l) {
          var o = a.findIndex(function (e) {
            return e.route.id && (null == l ? void 0 : l[e.route.id]);
          });
          o >= 0 || St(!1), (a = a.slice(0, Math.min(a.length, o + 1)));
        }
        return a.reduceRight(function (t, o, i) {
          var s = o.route.id ? (null == l ? void 0 : l[o.route.id]) : null,
            u = r ? o.route.errorElement || e.createElement(tn, null) : null,
            c = function () {
              return e.createElement(
                ln,
                {
                  match: o,
                  routeContext: {
                    outlet: t,
                    matches: n.concat(a.slice(0, i + 1)),
                  },
                },
                s ? u : void 0 !== o.route.element ? o.route.element : t
              );
            };
          return r && (o.route.errorElement || 0 === i)
            ? e.createElement(an, {
                location: r.location,
                component: u,
                error: s,
                children: c(),
              })
            : c();
        }, null);
      }
      function sn(t) {
        var n = e.useContext(Ht);
        return n || St(!1), n;
      }
      !(function (e) {
        e.UseRevalidator = "useRevalidator";
      })(nn || (nn = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(rn || (rn = {}));
      var un;
      function cn(e) {
        St(!1);
      }
      function dn(t) {
        var n = t.basename,
          r = void 0 === n ? "/" : n,
          a = t.children,
          l = void 0 === a ? null : a,
          o = t.location,
          i = t.navigationType,
          s = void 0 === i ? Ge.Pop : i,
          u = t.navigator,
          c = t.static,
          d = void 0 !== c && c;
        Gt() && St(!1);
        var f = r.replace(/^\/*/, "/"),
          p = e.useMemo(
            function () {
              return { basename: f, navigator: u, static: d };
            },
            [f, u, d]
          );
        "string" === typeof o && (o = mt(o));
        var h = o,
          m = h.pathname,
          g = void 0 === m ? "/" : m,
          A = h.search,
          v = void 0 === A ? "" : A,
          b = h.hash,
          x = void 0 === b ? "" : b,
          y = h.state,
          w = void 0 === y ? null : y,
          k = h.key,
          E = void 0 === k ? "default" : k,
          S = e.useMemo(
            function () {
              var e = Et(g, f);
              return null == e
                ? null
                : { pathname: e, search: v, hash: x, state: w, key: E };
            },
            [f, g, v, x, w, E]
          );
        return null == S
          ? null
          : e.createElement(
              qt.Provider,
              { value: p },
              e.createElement(Kt.Provider, {
                children: l,
                value: { location: S, navigationType: s },
              })
            );
      }
      function fn(t) {
        var n = t.children,
          r = t.location,
          a = e.useContext(Wt);
        return (function (t, n) {
          Gt() || St(!1);
          var r,
            a = e.useContext(Ht),
            l = e.useContext(Xt).matches,
            o = l[l.length - 1],
            i = o ? o.params : {},
            s = (o && o.pathname, o ? o.pathnameBase : "/"),
            u = (o && o.route, Yt());
          if (n) {
            var c,
              d = "string" === typeof n ? mt(n) : n;
            "/" === s ||
              (null == (c = d.pathname) ? void 0 : c.startsWith(s)) ||
              St(!1),
              (r = d);
          } else r = u;
          var f = r.pathname || "/",
            p = At(t, { pathname: "/" === s ? f : f.slice(s.length) || "/" }),
            h = on(
              p &&
                p.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, i, e.params),
                    pathname: Bt([s, e.pathname]),
                    pathnameBase:
                      "/" === e.pathnameBase ? s : Bt([s, e.pathnameBase]),
                  });
                }),
              l,
              a || void 0
            );
          return n
            ? e.createElement(
                Kt.Provider,
                {
                  value: {
                    location: Ft(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      r
                    ),
                    navigationType: Ge.Pop,
                  },
                },
                h
              )
            : h;
        })(a && !n ? a.router.routes : hn(n), r);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(un || (un = {}));
      var pn = new Promise(function () {});
      e.Component;
      function hn(t, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          e.Children.forEach(t, function (t, a) {
            if (e.isValidElement(t))
              if (t.type !== e.Fragment) {
                t.type !== cn && St(!1),
                  t.props.index && t.props.children && St(!1);
                var l = [].concat($e(n), [a]),
                  o = {
                    id: t.props.id || l.join("-"),
                    caseSensitive: t.props.caseSensitive,
                    element: t.props.element,
                    index: t.props.index,
                    path: t.props.path,
                    loader: t.props.loader,
                    action: t.props.action,
                    errorElement: t.props.errorElement,
                    hasErrorBoundary: null != t.props.errorElement,
                    shouldRevalidate: t.props.shouldRevalidate,
                    handle: t.props.handle,
                  };
                t.props.children && (o.children = hn(t.props.children, l)),
                  r.push(o);
              } else r.push.apply(r, hn(t.props.children, n));
          }),
          r
        );
      }
      var mn = n.p + "static/media/linux.8f43b47d4911fa04d8f3.png",
        gn = n.p + "static/media/macintosh.ce2dbc6bf592cfec9581.jpg",
        An = n.p + "static/media/android.89fe62949d3bc9befac2.png",
        vn = n.p + "static/media/RAM.4e820aeb731a0a4e84c2.png",
        bn = n.p + "static/media/cpu2.39f34bbbc9a6247cc509.png";
      function xn() {
        var t = f((0, e.useState)([]), 2),
          n = t[0],
          r = t[1],
          a = f((0, e.useState)([]), 2),
          o = a[0],
          i = a[1],
          s = f((0, e.useState)([]), 2),
          u = s[0],
          c = s[1],
          d = f((0, e.useState)([]), 2),
          p = d[0],
          h = d[1],
          m = f((0, e.useState)([]), 2),
          g = m[0],
          A = m[1],
          v = f((0, e.useState)([]), 2),
          b = v[0],
          x = v[1],
          y = f((0, e.useState)([]), 2),
          w = y[0],
          k = y[1],
          E = f((0, e.useState)([]), 2),
          S = E[0],
          C = E[1],
          N = en();
        return (
          (0, e.useEffect)(function () {
            Ze.get("http://localhost:3001/durationhourdata").then(function (e) {
              console.log(e), console.log("success"), h(e.data);
            }),
              Ze.get("http://localhost:3001/cpudata").then(function (e) {
                console.log(e), console.log("success"), c(e.data);
              }),
              Ze.get("http://localhost:3001/ramdata").then(function (e) {
                console.log(e), console.log("success"), i(e.data);
              }),
              Ze.get("http://localhost:3001/osdata").then(function (e) {
                console.log(e), console.log("success"), r(e.data);
              });
          }, []),
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className:
                "selection:bg-lime-400 selection:text-black my-6 flex flex-col",
              children: (0, l.jsxs)("div", {
                className:
                  "mx-2 mt-4 md:mx-32 bg-black bg-opacity-80 rounded-xl",
                children: [
                  (0, l.jsxs)("div", {
                    className: "my-5 md:px-20",
                    children: [
                      (0, l.jsx)("p", {
                        className:
                          "text-center my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-300",
                        children: "EC 2 Instances",
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "text-white text-center md:text-left text-xl font-bold px-6 md:px-0",
                        children:
                          "With our Premium high Speed delivery Cloud Services get Started right away!",
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "text-white text-center md:text-left text-xl font-bold px-6 md:px-0",
                        children:
                          "Prices starting as low from 0.03\u20b9 per second and fully customisable and controllable",
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "text-white text-center md:text-left text-xl font-bold px-6 md:px-0",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("form", {
                    className: "my-5 px-6 md:px-20",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-white text-xl font-bold md:px-0",
                            children: "Operating System",
                          }),
                          (0, l.jsx)("hr", { className: "my-2 md:mx-0" }),
                          (0, l.jsx)("div", {
                            className:
                              "my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4",
                            children: n.map(function (e) {
                              return (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("input", {
                                      type: "radio",
                                      className: "hidden peer",
                                      name: "operatingsystem",
                                      value: e,
                                      id: e.name,
                                      required: !0,
                                      onChange: function () {
                                        A(e);
                                      },
                                    }),
                                    (0, l.jsxs)("label", {
                                      htmlFor: e.name,
                                      className:
                                        "text-white cursor-pointer shadow-pink-600 shadow-lg rounded-lg  border-2 border-pink-500 flex flex-col items-center px-2 py-4 bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:border-rose-500 peer-checked:bg-slate-100 peer-checked:text-black ",
                                      children: [
                                        (0, l.jsx)("img", {
                                          src:
                                            "microsoft" === e.image
                                              ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAsASURBVHic7d0xb1RnFoDh49FKoKzpY4mKjiJl5A5FiCqSBdT8ApfUG1GgbE3JL6DGCCnVCkXpUMoUdK6QnB6DTOUtxt4FAgQB9gje55GmuTNjn2q+d+7M3G/t8PBwPsTzK5tnZubyzFydmYszs3F0W/+gPwB8dv/8z+O1Vf7/rZ3rH/YCApyE/ZnZO7o9mZkHM/Po4bX7Lz/kyWt/FwDPr2xuzMytmbkxM+c+aVTgsxIAwBuezcy9mbn98Nr9vfc98J0B8PzK5tmZ+Wlmbs7MN597QuDTCQDgHV7MzJ2Z+fnhtfsHb3vA4m0Hn1/Z/HZmfp2Zf43FHwC+NN/Mcg3/dWvn+rdve8BfAuD5lc3vZub3mdk82dkAgBO2OTO/b+1c/+7NO14LgKN3/r/MzPlTGgwAOFnnZ+aXN88E/C8Ajj7z3xmLPwB8bc7PzM7WzvWzxwdePQPw0zjtDwBfq81ZrvUzcxQARz/1u7mqiQCAU3Fza+f6xsz/zwDcGt/2B4Cv3TezXPNncXSFvxurnQcAOCU3tnaun1nM8vK+rvAHAA3nZubyYpbX9gcAOq4uZrmxDwDQcXExyx39AICODQEAAD0bi5lZX/UUAMCpWn/rboAAwNdNAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIWjs8PFz1DADAKXMGAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAoH9cuLt/uOohgI+zu72+ttIBfjvr9QO+UM4AAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQtJiZ/VUPAQCcqv3FzOytegoA4FTtCQAA6NlbzMyTVU8BAJyqJ4uZebDqKQCAU/VgMTOPZubZqicBAE7Fs5l5tNjdXn85M/dWPQ0AcCruzaWDl8fXAbg9My9WOQ0AcOJezHLNX14IaHd7fW9m7qxyIgDgxN2ZSwd7M69fCfDnmXm8mnkAgBP2eJZr/cy8EgC72+sHM3NtZp6uYCgA4OQ8nZlrc+ng4PjAa3sB7G6v/zkzP44IAICvxdOZ+XEuHfz56sG/bAa0u73+x8x8Pz4OAIAv3eOZ+X4uHfzx5h1v3Q3w6EzADzPz7/HrAAD40ryY5Rr+w5vv/I+tHR4evvcvXLi7vzEzt2bmxsyc+9wTAh9vd3t9baUD/Hb2/S8gwGl7Nstr+9w+/rb/u/xtABy7cHf/zMxcnpmrM3NxZjaObuufNCrw0QQApO3PckO/vVnu6/NgZh7NpYOXH/Lk/wKQAq5eW3YI8AAAAABJRU5ErkJggg=="
                                              : "linux" === e.image
                                              ? mn
                                              : "macintosh" === e.image
                                              ? gn
                                              : An,
                                          className: "h-14 w-14",
                                          alt: "",
                                        }),
                                        (0, l.jsx)("p", {
                                          className: "text-xl font-bold mt-2",
                                          children: e.name,
                                        }),
                                        (0, l.jsx)("p", {
                                          className: "text-lg font-semi-bold ",
                                          children: e.developer,
                                        }),
                                        (0, l.jsxs)("p", {
                                          className:
                                            "text-pink-600 font-semibold",
                                          children: [e.price, " Rs/hour"],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              });
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-white text-xl font-bold  md:px-0",
                            children: "RAM",
                          }),
                          (0, l.jsx)("hr", { className: "my-2 md:mx-0" }),
                          (0, l.jsx)("div", {
                            className:
                              "my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4",
                            children: o.map(function (e) {
                              return (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("input", {
                                      type: "radio",
                                      className: "hidden peer",
                                      name: "ramsize",
                                      value: e,
                                      id: e.name,
                                      required: !0,
                                      onChange: function () {
                                        x(e);
                                      },
                                    }),
                                    (0, l.jsxs)("label", {
                                      htmlFor: e.name,
                                      className:
                                        "cursor-pointer text-white shadow-lg shadow-lime-500  rounded-lg border-2 border-lime-200 flex flex-col items-center px-2 py-4 bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-100 peer-checked:text-black",
                                      children: [
                                        (0, l.jsx)("img", {
                                          src: vn,
                                          alt: "",
                                          className: "h-20 w-20",
                                        }),
                                        (0, l.jsx)("p", {
                                          className: "font-bold text-xl",
                                          children: e.name,
                                        }),
                                        (0, l.jsxs)("p", {
                                          className:
                                            "text-green-400 peer-focus-visible:text-green-800",
                                          children: [e.price, " Rs/hour"],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              });
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-white text-xl font-bold  md:px-0",
                            children: "CPU's",
                          }),
                          (0, l.jsx)("hr", { className: "my-2  md:mx-0" }),
                          (0, l.jsx)("div", {
                            className:
                              "my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4",
                            children: u.map(function (e) {
                              return (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsx)("input", {
                                    type: "radio",
                                    className: "hidden peer",
                                    id: e.cpu,
                                    value: e,
                                    name: "computingpower",
                                    onChange: function () {
                                      k(e);
                                    },
                                  }),
                                  (0, l.jsxs)("label", {
                                    htmlFor: e.cpu,
                                    className:
                                      "cursor-pointer text-white shadow-lg shadow-blue-500  rounded-lg border-2 border-cyan-700 flex flex-col items-center px-2 py-4 bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-100 peer-checked:text-black",
                                    children: [
                                      (0, l.jsx)("img", {
                                        src: bn,
                                        alt: "",
                                        className: "h-20 w-20",
                                      }),
                                      (0, l.jsx)("p", {
                                        className: "font-bold text-xl",
                                        children: e.cpu,
                                      }),
                                      (0, l.jsxs)("p", {
                                        className: "text-sky-400",
                                        children: [e.price, " Rs/hour"],
                                      }),
                                    ],
                                  }),
                                ],
                              });
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-white text-xl font-bold  md:px-0",
                            children: "Duration",
                          }),
                          (0, l.jsx)("hr", { className: "my-2 md:mx-0" }),
                          (0, l.jsx)("div", {
                            className:
                              "my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4",
                            children: p.map(function (e) {
                              return (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("input", {
                                      type: "radio",
                                      className: "hidden peer",
                                      id: e.hours,
                                      value: e,
                                      onChange: function () {
                                        C(e);
                                      },
                                      name: "duration",
                                    }),
                                    (0, l.jsx)("label", {
                                      htmlFor: e.hours,
                                      className:
                                        "cursor-pointer text-white shadow-lg shadow-purple-700  rounded-lg border-2 border-purple-800 flex flex-col items-center bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-100 peer-checked:text-black",
                                      children: (0, l.jsx)("p", {
                                        className: "font-bold text-xl p-1",
                                        children: e.hours,
                                      }),
                                    }),
                                  ],
                                }),
                              });
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "flex flex-col items-center my-6",
                        children: (0, l.jsx)("button", {
                          className:
                            "bg-gradient-to-bl mt-6 mb-6 shadow-lg shadow-sky-300 hover:bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold rounded-lg  md:mx-5 md:px-20 py-2 w-full md:w-1/4 duration-500 hover:from-blue-500 hover:to-sky-500 hover:text-white",
                          onClick: function (e) {
                            !(function (e) {
                              var t = {
                                type: "Instances",
                                os: g.name,
                                ospr: g.price,
                                ram_: b.name,
                                ram_value: b.value,
                                rampr: b.price,
                                cpu_: w.cpu,
                                cpu_value: w.value,
                                cpupr: w.price,
                                duration_: S.value,
                              };
                              console.log(t),
                                N("/purchase", { state: t }),
                                e.preventDefault();
                            })(e);
                          },
                          type: "submit",
                          children: "Purchase",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      var yn = n.p + "static/media/harddisk.0832aab2fe145de7a587.png",
        wn = n.p + "static/media/network.ef60c6d348a77eec83e0.png";
      function kn() {
        var t = f((0, e.useState)([]), 2),
          n = t[0],
          r = t[1],
          a = f((0, e.useState)([]), 2),
          o = a[0],
          i = a[1],
          s = f((0, e.useState)([]), 2),
          u = s[0],
          c = s[1],
          d = en(),
          p = f((0, e.useState)([]), 2),
          h = p[0],
          m = p[1],
          g = f((0, e.useState)([]), 2),
          A = g[0],
          v = g[1],
          b = f((0, e.useState)([]), 2),
          x = b[0],
          y = b[1];
        return (
          (0, e.useEffect)(function () {
            Ze.get("http://localhost:3001/storagedata").then(function (e) {
              console.log(e), console.log("success"), m(e.data);
            }),
              Ze.get("http://localhost:3001/networkdata").then(function (e) {
                console.log(e), console.log("success"), v(e.data);
              }),
              Ze.get("http://localhost:3001/durationmonthdata").then(function (
                e
              ) {
                console.log(e), console.log("success"), y(e.data);
              });
          }, []),
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className:
                "selection:bg-lime-400 selection:text-black my-6 flex flex-col",
              children: (0, l.jsxs)("div", {
                className:
                  "mx-2 mt-4 md:mx-32 py-8 bg-black bg-opacity-80 rounded-xl",
                children: [
                  (0, l.jsxs)("div", {
                    className: "my-5 md:px-20",
                    children: [
                      (0, l.jsx)("p", {
                        className:
                          "text-center pb-4 my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-300",
                        children: "Storage Buckets",
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "text-white text-center md:text-left text-xl font-bold px-6 md:px-0",
                        children:
                          "No pendrive? No storage in system? Save your files here!",
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "text-white text-center md:text-left text-xl font-bold px-6 md:px-0",
                        children:
                          "Transfer Files through our secured built network system",
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "text-white text-center md:text-left text-xl font-bold px-6 md:px-0",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("form", {
                    className: "my-5 px-6 md:px-20",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-white text-xl font-bold  md:px-0",
                            children: "Storage",
                          }),
                          (0, l.jsx)("hr", { className: "my-2 md:mx-0" }),
                          (0, l.jsx)("div", {
                            className:
                              "my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4",
                            children: h.map(function (e) {
                              return (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("input", {
                                      type: "radio",
                                      className: "hidden peer",
                                      name: "spacesize",
                                      value: e,
                                      id: e.space,
                                      required: !0,
                                      onChange: function () {
                                        r(e);
                                      },
                                    }),
                                    (0, l.jsxs)("label", {
                                      htmlFor: e.space,
                                      className:
                                        "cursor-pointer text-white shadow-lg shadow-lime-500  rounded-lg border-2 border-lime-200 flex flex-col items-center px-2 py-4 bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-200 peer-checked:text-black",
                                      children: [
                                        (0, l.jsx)("img", {
                                          src: yn,
                                          alt: "",
                                          className: "h-20 w-20",
                                        }),
                                        (0, l.jsx)("p", {
                                          className: "font-bold text-xl",
                                          children: e.space,
                                        }),
                                        (0, l.jsxs)("p", {
                                          className:
                                            "text-green-400 peer-focus-visible:text-green-800",
                                          children: [e.price, " Rs/hour"],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              });
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-white text-xl font-bold  md:px-0",
                            children: "Network Speed",
                          }),
                          (0, l.jsx)("hr", { className: "my-2  md:mx-0" }),
                          (0, l.jsx)("div", {
                            className:
                              "my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4",
                            children: A.map(function (e) {
                              return (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsx)("input", {
                                    type: "radio",
                                    className: "hidden peer",
                                    id: e.speed,
                                    value: e,
                                    name: "networkpower",
                                    required: !0,
                                    onChange: function () {
                                      i(e);
                                    },
                                  }),
                                  (0, l.jsxs)("label", {
                                    htmlFor: e.speed,
                                    className:
                                      "cursor-pointer text-white shadow-lg shadow-blue-500  rounded-lg border-2 border-cyan-700 flex flex-col items-center px-2 py-4 bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-100 peer-checked:text-black",
                                    children: [
                                      (0, l.jsx)("img", {
                                        src: wn,
                                        alt: "",
                                        className: "h-20 w-20",
                                      }),
                                      (0, l.jsx)("p", {
                                        className: "font-bold text-xl",
                                        children: e.speed,
                                      }),
                                      (0, l.jsxs)("p", {
                                        className: "text-sky-400",
                                        children: [e.price, " Rs/hour"],
                                      }),
                                    ],
                                  }),
                                ],
                              });
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-white text-xl font-bold  md:px-0",
                            children: "Duration",
                          }),
                          (0, l.jsx)("hr", { className: "my-2 md:mx-0" }),
                          (0, l.jsx)("div", {
                            className:
                              "my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4",
                            children: x.map(function (e) {
                              return (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("input", {
                                      type: "radio",
                                      className: "hidden peer",
                                      id: e.months,
                                      value: e,
                                      required: !0,
                                      onChange: function () {
                                        c(e);
                                      },
                                      name: "durationmonth",
                                    }),
                                    (0, l.jsx)("label", {
                                      htmlFor: e.months,
                                      className:
                                        "cursor-pointer text-white shadow-lg shadow-purple-700  rounded-lg border-2 border-purple-800 flex flex-col items-center bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-100 peer-checked:text-black",
                                      children: (0, l.jsx)("p", {
                                        className: "font-bold text-xl p-1",
                                        children: e.months,
                                      }),
                                    }),
                                  ],
                                }),
                              });
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "flex flex-col items-center my-6",
                        children: (0, l.jsx)("button", {
                          className:
                            "bg-gradient-to-bl shadow-lg shadow-sky-300 hover:bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold rounded-lg my-6 md:w-1/4 w-full  md:mx-5 md:px-20 py-2 px-4 duration-500 hover:from-blue-500 hover:to-sky-500 hover:text-white",
                          onClick: function (e) {
                            !(function (e) {
                              var t = {
                                type: "Storage",
                                storage: n.space,
                                storage_pr: n.price,
                                network: o.speed,
                                network_pr: o.price,
                                months: u.months,
                                months_val: u.value,
                              };
                              console.log(t),
                                d("/purchase", { state: t }),
                                e.preventDefault();
                            })(e);
                          },
                          type: "submit",
                          children: "Purchase",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      function En() {
        var t = f((0, e.useState)(""), 2),
          n = t[0],
          r = t[1],
          a = f((0, e.useState)(""), 2),
          o = a[0],
          i = a[1];
        return (
          (0, e.useEffect)(function () {}, []),
          (0, l.jsx)("section", {
            className:
              "selection:bg-lime-400 selection:text-black my-6 flex flex-col",
            children: (0, l.jsxs)("div", {
              className:
                "mx-2 mt-4 md:mx-32 py-8 bg-black bg-opacity-80 rounded-xl",
              children: [
                (0, l.jsx)("div", {
                  className: "my-5 md:px-20",
                  children: (0, l.jsx)("p", {
                    className:
                      "text-center my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent pb-4 bg-gradient-to-r from-rose-500 to-yellow-300",
                    children: "SQL Runner",
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "flex flex-col mx-8 md:mx-20",
                  children: [
                    (0, l.jsx)("label", {
                      className: "text-xl font-bold text-white",
                      htmlFor: "ccd",
                      children: "Query Box",
                    }),
                    (0, l.jsx)("textarea", {
                      onChange: function (e) {
                        r(e.target.value);
                      },
                      required: !0,
                      placeholder:
                        "SELECT * FROM 'cloud_inventory.storage_users'",
                      className:
                        "focus:border-indigo-500 my-2 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg ",
                      id: "ccd",
                      cols: "30",
                      rows: "3",
                      autoComplete: "off",
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex flex-col md:flex-row",
                      children: [
                        (0, l.jsx)("button", {
                          type: "submit",
                          onClick: function (e) {
                            !(function (e) {
                              e.preventDefault(),
                                Ze.post("http://localhost:3001/queryrun", {
                                  query: n,
                                }).then(function (e) {
                                  console.log(JSON.stringify(e.data)),
                                    i(JSON.stringify(e.data, null, 2));
                                });
                            })(e);
                          },
                          className:
                            "py-2 text-white shadow-md md:w-1/6\r shadow-red-400 my-3 rounded-xl font-bold bg-gradient-to-tr from-yellow-500 to-red-500  hover:bg-cyan-400 hover:text-black hover:bg-gradient-to-t duration-500",
                          children: "Run Query",
                        }),
                        (0, l.jsx)("button", {
                          onClick: function (e) {
                            !(function (e) {
                              r(""),
                                i(""),
                                e.target.reset(),
                                e.preventDefault();
                            })(e);
                          },
                          className:
                            "py-2 md:mx-6 text-white shadow-md md:w-1/6\r shadow-green-400 my-3 rounded-xl font-bold bg-gradient-to-tr from-lime-500 to-green-500  hover:bg-cyan-400 hover:text-black hover:bg-gradient-to-t duration-500",
                          children: "Clear",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, l.jsx)("p", {
                          className: "text-xl font-bold text-white",
                          children: "Output",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "text-base break-words font-bold text-lime-500",
                          children: o,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function Sn() {
        var t = f((0, e.useState)([]), 2),
          n = t[0],
          r = t[1];
        return (
          (0, e.useEffect)(function () {
            Ze.get("http://localhost:3001/instancespurchase").then(function (
              e
            ) {
              console.log(e), console.log("success"), r(e.data);
            });
          }, []),
          (0, l.jsx)("section", {
            className:
              "selection:bg-lime-400 selection:text-black my-6 flex flex-col",
            children: (0, l.jsxs)("div", {
              className:
                "mx-2 mt-4 md:mx-32 py-8 bg-black bg-opacity-80 rounded-xl",
              children: [
                (0, l.jsx)("div", {
                  className: "my-5 md:px-20",
                  children: (0, l.jsx)("p", {
                    className:
                      "text-center my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent pb-4 bg-gradient-to-r from-blue-500 to-blue-300",
                    children: "Instances Purchase",
                  }),
                }),
                (0, l.jsx)("div", {
                  className: " mt-4 mb-10 px-6 md:px-20 overflow-x-scroll",
                  children: (0, l.jsxs)("table", {
                    className:
                      "table-auto mx-auto md:mx-0 text-white text-left",
                    children: [
                      (0, l.jsx)("thead", {
                        children: (0, l.jsxs)("tr", {
                          className: "bg-indigo-800 text-lg",
                          children: [
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "ID",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Name",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Email",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Phone",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Operating System",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "RAM",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "CPU",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Duration",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Card",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Purchase Value",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("tbody", {
                        children: n.map(function (e) {
                          return (0,
                          l.jsx)(l.Fragment, { children: (0, l.jsxs)("tr", { className: e.id % 2 === 0 ? "bg-blue-500 text-base text-black" : "bg-blue-400 text-base text-black", children: [(0, l.jsx)("th", { className: "py-2 text-sm text-center px-4 border-white border-2", children: e.id }), (0, l.jsx)("th", { className: "py-2 text-sm px-4 border-white border-2", children: e.name }), (0, l.jsx)("th", { className: "py-2 text-sm px-4 border-white border-2", children: (0, l.jsx)("a", { href: "mailto:" + e.email, children: e.email }) }), (0, l.jsx)("th", { className: "py-2 text-sm text-center px-4 border-white border-2", children: e.phno }), (0, l.jsx)("th", { className: "py-2 text-sm text-center px-4 border-white border-2", children: e.operatingsystem }), (0, l.jsx)("th", { className: "py-2 text-sm text-center px-4 border-white border-2", children: e.ram }), (0, l.jsx)("th", { className: "py-2 text-sm text-center px-4 border-white border-2", children: e.cpu }), (0, l.jsx)("th", { className: "py-2 text-sm text-center px-4 border-white border-2", children: e.duration }), (0, l.jsx)("th", { className: "py-2 text-sm px-4 text-center border-white border-2", children: e.card.slice(0, 4) + " XXXX XXXX XXXX" }), (0, l.jsxs)("th", { className: "py-2 text-sm px-4 text-center border-white border-2", children: [e.purchasevalue, " Rs"] })] }) });
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
      function Cn() {
        var t = f((0, e.useState)([]), 2),
          n = t[0],
          r = t[1];
        return (
          (0, e.useEffect)(function () {
            Ze.get("http://localhost:3001/storagepurchase").then(function (e) {
              console.log(e), console.log("success"), r(e.data);
            });
          }, []),
          (0, l.jsx)("section", {
            className:
              "selection:bg-lime-400 selection:text-black my-6 flex flex-col",
            children: (0, l.jsxs)("div", {
              className:
                "mx-2 mt-4 md:mx-32 py-8 bg-black bg-opacity-80 rounded-xl",
              children: [
                (0, l.jsx)("div", {
                  className: "my-5 md:px-20",
                  children: (0, l.jsx)("p", {
                    className:
                      "text-center my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent pb-4 bg-gradient-to-r from-yellow-500 to-yellow-300",
                    children: "Storage Purchase",
                  }),
                }),
                (0, l.jsx)("div", {
                  className: " mt-4 mb-10 px-6 md:px-20 overflow-x-scroll",
                  children: (0, l.jsxs)("table", {
                    className:
                      "table-auto mx-auto md:mx-0 text-white text-left",
                    children: [
                      (0, l.jsx)("thead", {
                        children: (0, l.jsxs)("tr", {
                          className: "bg-amber-500 text-black text-lg",
                          children: [
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "ID",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Name",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Email",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Phone",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Storage",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Network",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Duration",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Card",
                            }),
                            (0, l.jsx)("th", {
                              className:
                                "py-2 px-2 text-center border-white border-2",
                              children: "Purchase Value",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("tbody", {
                        children: n.map(function (e) {
                          return (0,
                          l.jsx)(l.Fragment, { children: (0, l.jsxs)("tr", { className: e.id % 2 === 0 ? "bg-yellow-200 text-base text-black" : "bg-yellow-100 text-base text-black", children: [(0, l.jsx)("th", { className: "py-2 text-sm text-center px-4 border-white border-2", children: e.id }), (0, l.jsx)("th", { className: "py-2 text-sm px-4 border-white border-2", children: e.name }), (0, l.jsx)("th", { className: "py-2 text-sm px-4 border-white border-2", children: (0, l.jsx)("a", { href: "mailto:" + e.email, children: e.email }) }), (0, l.jsx)("th", { className: "py-2 text-sm text-center px-4 border-white border-2", children: e.phno }), (0, l.jsx)("th", { className: "py-2 text-sm text-center px-4 border-white border-2", children: e.storage }), (0, l.jsx)("th", { className: "py-2 text-sm text-center px-4 border-white border-2", children: e.network }), (0, l.jsx)("th", { className: "py-2 text-sm text-center px-4 border-white border-2", children: e.duration }), (0, l.jsx)("th", { className: "py-2 text-sm px-4 border-white border-2", children: e.card.slice(0, 4) + " XXXX XXXX XXXX" }), (0, l.jsxs)("th", { className: "py-2 text-sm px-4 text-center border-white border-2", children: [e.purchasevalue, " Rs"] })] }) });
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
      function Nn() {
        var t = f((0, e.useState)([]), 2),
          n = t[0],
          r = t[1];
        function a(e) {
          r(
            n.filter(function (t) {
              return t.id !== e;
            })
          );
        }
        return (
          (0, e.useEffect)(function () {
            console.log(
              "skhbkhsdb" +
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_IP_ADDRESS
            );
            Ze.get("http://localhost:3001/messages").then(function (e) {
              console.log(e), console.log("success"), r(e.data);
            });
          }, []),
          (0, l.jsx)("section", {
            className:
              "selection:bg-lime-400 selection:text-black my-6 flex flex-col",
            children: (0, l.jsxs)("div", {
              className:
                "mx-2 mt-4 md:mx-32 py-8 bg-black bg-opacity-80 rounded-xl",
              children: [
                (0, l.jsx)("div", {
                  className: "my-5 md:px-20",
                  children: (0, l.jsx)("p", {
                    className:
                      "text-center my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent pb-4 bg-gradient-to-r from-rose-500 to-yellow-300",
                    children: "Messages",
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "grid grid-flow-row grid-cols-1 md:grid-cols-2 mt-4 mb-10 px-6 md:px-20 gap-6",
                  children: n.map(function (e) {
                    return (0, l.jsx)(l.Fragment, {
                      children: (0, l.jsxs)("div", {
                        id: "message" + e.id,
                        className:
                          "text-white shadow-lg shadow-sky-600 border-2 border-cyan-900 bg-slate-900 rounded-lg px-4 py-2 hover:from-lime-300",
                        children: [
                          (0, l.jsx)("p", {
                            className:
                              "text-3xl md:text-4xl text-slate-200 font-bold",
                            children: e.name,
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "my-2 font-semibold tracking-wide text-blue-400",
                            children: (0, l.jsx)("a", {
                              href: "mailto:" + e.email,
                              children: e.email,
                            }),
                          }),
                          (0, l.jsx)("p", {
                            className: "text-slate-200 font-bold tracking",
                            children: e.message,
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "my-4 flex flex-row justify- md:justify-start",
                            children: [
                              (0, l.jsx)("button", {
                                onClick: function () {
                                  var t;
                                  (t = e.id),
                                    Ze.put(
                                      "http://localhost:3001/messageread",
                                      { id: t }
                                    ).then(function (e) {
                                      console.log("Responded");
                                    }),
                                    a(t);
                                },
                                className:
                                  "border-2 border-green-700 bg-gradient-to-tr from-lime-400 to-lime-800 shadow-lg hover:bg-gradient-to-bl hover:text-black duration-500 shadow-lime-400 rounded-lg font-bold text-white py-1 px-8",
                                children: "Done",
                              }),
                              (0, l.jsx)("button", {
                                onClick: function () {
                                  var t;
                                  (t = e.id),
                                    Ze.delete(
                                      "http://localhost:3001/messagedelete/".concat(
                                        t
                                      )
                                    ).then(function (e) {
                                      console.log("Deleted");
                                    }),
                                    a(t);
                                },
                                className:
                                  "border-2 border-red-800 hover:bg-gradient-to-bl hover:text-black bg-gradient-to-tr from-rose-400 bg-rose-800 shadow-lg shadow-red-400 duration-500 rounded-lg font-bold text-white mx-2 py-1 px-8",
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      }),
                    });
                  }),
                }),
              ],
            }),
          })
        );
      }
      var jn = function () {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(Sn, {}),
            (0, l.jsx)(Cn, {}),
            (0, l.jsx)(Nn, {}),
          ],
        });
      };
      var Bn = function () {
          return (0, l.jsx)("section", {
            className:
              "selection:bg-lime-400 selection:text-black my-6 flex flex-col items-center",
            children: (0, l.jsxs)("div", {
              className:
                " mx-2 py-4 md:py-16 md:mx-32 border-2 bg-black bg-opacity-80 rounded-xl border-black",
              children: [
                (0, l.jsx)("p", {
                  className:
                    "text-center p-4 mx-5 text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-700",
                  children: "Nothing here In this Page! Go Back!",
                }),
                (0, l.jsx)("div", {
                  className: "flex flex-row justify-center",
                  children: (0, l.jsx)("img", {
                    src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhIQEhAQEBASEA8QDxAQEA8PDw8NFRIWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8PFSsZFRkrKysrKysrKy0rLS0tKy03NzcrNysrLSsrLSsrLSsrKysrKysrKysrKysrLSsrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAAyEAACAQIEBQMDAwQDAQAAAAAAAQIDEQQSITEFE0FRYQZxgRQikaHB8BUyUrFCktFi/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAcEQEBAQEAAwEBAAAAAAAAAAAAARECEiExQQP/2gAMAwEAAhEDEQA/AKFGehpUISfsSoYSMevwWadkrHF60OV0JunYndDoKUKdidyDmBdWwRaUkLmaq3cqtj04Sck+n7gW61ezQfmaXsVsRQbalbe1zQjh7pXAryru9lcv4W+VXFDBpalmMLBMRUR3G6aCpEnYiqdGi1caFFZr2LLFFBVXE4RSadtUDlQstjQsBnC4Rx3H5uCehwnEq+Zpd5I9V49w9SpvS7PK8ZgXGslJaZ1ZmoxRMQ9JLdpJFaVNxpSl1aSRbxuGms7v2/BT4lXtQjFdbP8ABrGfbLzt6dbEsHSd3KV/2uDo313u0Hr1bJRT13+RYu0/Oet37eCUalyFGhm3dl1YSrSS2vZd92ZXR8PK70OiwUX/ABmFw6HU2cMut7EbkaOV9v1GI5l3EFxsLuFhNXyvfoBoSa+3p5CVqSdns0Ad6A5zbGjVvowUqr6bgHpzv7lfF1ctu2zfkaWvhlqnh86Slql+rAJhqebR/HsaFCjYDhMPl9i+gh4rwGS2BoKmQHRIhAIiBxMccCNhJEkSaCo2ISCDNAqtUhc471JwNyanHpK5200U8RE1KxY4fFcPtFXWsrI57jWBu1GK62Z6BxWleztezMivw9Xzuzt0KY43FYTlQd/7mkloYzwj3v5Oy4hw/mSzSdqaTdkc/CmpNqzSTajfsW1GS5yRYw8ur1IcRpNSsiFKbS1IjapvRW/QtwvpYx6GJl7W/U0aDbX+yV0lXM77iIZREXXYS1eq+SE2FlEBnT0Y1TXI1KV9nZg5w+66l8dA6lbsBGlCpFq+q7o1qbRk1scloV/6i47bFSurooNY53BcbXWxuUMWpK+hDFhBIK5WjPwW6TsQFiEiDUiaYBESRCLJoBWJyEkIgiyMmTbAyZRGZXqWLDK1VAxVqUkzPr4a7fY1JIBOBqI5/iPDnKLjBqJz+L4a4LTT/K/X2O3rLRnM8XreL26dCs1yWIwV7yb/AD1MqdPXsjoMdVUmrvpsZte0lpoRlTTsaOFxjVkZrg9ehBwkpJ39wsro/qJdl/2Q5j3QguvT68kilWmuhrzwl90UMVhUk32Wxl0ZjqFDG8TUVbMilxbiLpq1nmey8GZDCXXMq3tuk9rAPiOJ1JP7F89CWHxtZL7srMnHcUs7QivdGbLFzeuZ3NyOd7jtKPEf8ofhmxwziri9JXj27HnOG4lUi92zcwOOzq6WWfVLZksanWvWMDi1JJmkmcH6Z4ldqDevZncUpXRloeMgnMKrkx4SCNGmFRXosOmA9x7kbkXImBpyBVZ+SGInZlepVKqxGoNNlONYNGQDSGaK9XFJX12MLiPqalSvmqL2W5UroK9OLMTF4eLvocvi/XyvaCdr7spP1bKXVFxza+P4fGzcbJnNYmnlb2TNKnxmM93Yr4uFJpvX43KMepT+X1IZfktXp2aUre+4JafzcIDy32Yg/OfYQV7ZkM7iVOyb8M2aNinxmjenK3VMw6vLqrjWrtLWMd/czPVGK1VOLatq/bsauAwjp1qt1rq0cvx2/Mbfk1zGOme43IOJ0XB8Fhnh51alS1T/AIx8mHWtmdttTrHCrn9Pp8jnc2072yDcNqspJm5wimpxtbbxuY7a4+r+EquFSMtr22PVsBUvCL8K55NioNTppd0escMhanH2RzekebJ0mNlGgEXqbDJlSEg0ZhRcxCcyKkDlV6BFfET1ASkPN6kWiiVKHUrcSxmSL1s7FvNZbnnXrXjUm3Rg9Xpp7gU/UvqiTvTpv7npJ9kcdVzyd5Sf5NCeGcFmlu++5m1a13oa5jladUX3RJUpdroDmLOGxrWj26m7GCoza9+xrYTEvdpbAqmEU4ucN1ulqRwMr/a9O5zbWp5H/wAV8FSo2tVsWatOKTy9tSnOXQsTEeaxAr+BwPoGkWJ01KLi+pXgWYMw7OF49wp0554p26+xwvH8Bm+5b2Pcq1FS0auc1xL0pSqNtaN7bllTqa8NnBxdmmn8iPTOI+h5ve0l0fUzl6TcXrTenU1rl4ORwODc+jtfqdhw7CKMVpbQuUODyS/s9tBY7CSjG7v7IzfbfPGVjU6reIj9maz0PUcA7xRxPp3hspN1XBrXS/Y7bCQyxsR1qzOQyYHMSTCCKXkdsG2NGQB6dQTmBbI3AUpakkBk9QufQqKfEsRaMvbQ86hheZWnOWrWsb+52XqObtG3z7HK4SouZJfzcFjnePrW36GLy2uh2qoUvqE691DrYwfUNWlKpJ0f7FojfLh2rcHlR5i56bp2d0v8gE6OacsieVNuK/8AkqljC4l022tbq2vY3XPWp6ZxNquSX9stNe5b4tg+XV02auZPCVmqxa3zXOm9YO0acra6L/Rxv16OZ6Z92kmlutUZuKra9rHTcLpJ003Z3RS4nwm7vG3sahY536jyhF3+kT7L8DlZe6wkGVQzoVQ1Ofk5uq+pDMDGRNT8hErAqsL9AubyQnJBVSpT7FZ4VPdF6YNxC6BCko7InceWwJsBXJZwE6gPmhZFrODdZld1PIyqBucrkKgRMophKVSxUvI1Qjn0Hk7kGiss7H0c1zhJpxruL0lZ6d9T0zJcxsV6ejKsqzWq/wBEHNYimp7qz7PqctxThrjK8V8Hqr4VGXRJ9yrivTDkrJr36iXHPrnXkFrPYnlctlY9ExPoao9khqPomsrfYjXk53+f6wfT/DrSU7e7tohcfrPEVYUqf3KNs1r2udfS9I15LI5qnF72NjhHpalhldLPLeUnvcw6c/GBgeFZKUU97GZxClJPS3ydlxiqo7I5TGQzy1vp0NQ6ZeSfdDFr6SPd/kRph3tFluKZWoRsHU0c9dBVMfmMAx4kFjmsWYDmHTKCoVwbkCrVLJ9wuJVatipWxKTMWtj2pNO97v2I87yHXjjf1qqpckpFGhWWxZjMOnhgrQoobOOmFxJg3InUmitVmEvK3QrXLJjxr+TQw1dP3K42ZV2CCRQOBNBmiQpIsxgV4ssRnoRNEUPcJFfy5CMkPm8hE8iI1KKasOqiHzoDFx/DE73OY4pgbaxt8ne1GjMxuFjL3Gs2PPcsu0f1Edf/AEpCHkmCuQ6kVk2IOi0pE4zKakPd73AuqROLKUKweMwLFyM4ppruRTJ3CsbG8N3aMXEYeavZ69DsjN4hhYvWwdv53HA4mriIPOr6djp+D4p1KUZSunYFXw9tOjCUGksq0sHWXV+NQfnFJ1WEjPS4rWIcU4pClHNN69F5M+h6jpTdnoA9Q8N5uWXbp0ZmUeANtOz0DFb8+JU+jX5FheIyk0ooXDvTSer+To8DwqNPZIOXVWcG3lV9yymQUB0HKiZhc0G7jNFQdVmTjXKtx1IiLMqz6WG+ofUFmB1X1CLkay7kJszY4izLkZ3VwHERsIDn3iWJ12Vr28kOf0CrsKjJKuUJV37EOd5KrWhURPOzOpYgIsQFX4131JrElCFa48pruwrQjXT62I1Kl1q0UM3ZjOfkNQPGooplyUvkq4nZtaFx6OQlLUNmKVOrdl+FG+txjVqUNTQwVHXWxVpwS73LuEqWYxytadJLoGKCxS7MJHEPsyOPVWxyo8QPHEX2DI8weZ9yEqpVlinciLtxZmVo1mNGqwLWcVwcZoUpaXTCKGOjZ3CYPG6WejHxTuu5lxjb8hG59WOZPMEBnTfkimFlEFKJVVcbXtZFN4os1oX36FKdLULi1h8Z5S9y1HG3drrUyHhbsfktWt8Glb0atuq/IliPJjptC+oZMVt8/u/1GjUTMSOJvvfQTxTQkajanVRUrVDPWLZKeKTRVnQ2HqWl/o2adTQ5lVtTSw+LWzfQNeTUUuv6BqdRd9TNVZPW6Vu4lWXf/wADOtePug8atuqZkRxS7k+f5IxWw53RDmW6mdHEjSrII0fqSLrpdDNnWRBTvrf4IjWeJXQlTxMWZsKiZJNAa+YE5uPsZrrtMsU6+ZakRZlUTuU6kbBlLcbLcCsIPk8iApTRCUQrQOQA8iKlegr6F4bKFig4W31Eqdy+oLsJQRpWfKj3B/Tr+XNXKuwNxQGZ9Oh1hkaORdhOia1rWZPD+LjrDK2qL81YH12Ims/kIfkF7kX2Byp+Qaqqk7b6dtR432uw7gwckBC7JKvLwSdHzYXIAZ4mX8uN9ZLsSdJroRkn20IhnjZX12C08X33AOL7DOj1IjWoVLq9yeexn0G0rFmL0CLykmvIoz1sVqUgyeqYFuLC0ZA4olFEot5EIBzfI5BTkgbQYaSKgDQwSSItBURCsIqkPYa5GxVT0HU12IJD2AaURZEumpJEJK4DKCI1KaYVQSIuI0CVMUqS+QsV3J5Rorun3sRcfBalFAVNfPnYaIKPcaVNINIDJXJqVXqQBwi9U2GkRZGUYxDqDGpR7llBNQpxLVKBClAswVgo1iKkJSGCWp2XkRDURDTJDSRJCKoTRHKGY0ogV7EWwsoApRCmsKwhFDoe4w1gsLMIixkwHbuEAOQXMRNOOpEGwNSproAedRFST7CdS5FMAkZDXIXHuwhKJNQFFkorUBJBYoQzCDLYKnsQgiQUVjoUIhIwAHfwIsfzYRDFdCEIoYeQhAQl0BSEIKgyKEIocYQgRFgkIQDMkOIjFJgJCEGw2JCEBNE47DCCEuoWnsIQDoktxCCVcj+w1LcQgsWYfsGYhAIQhEH/2Q==",
                    alt: "belugakhb",
                    className: "rounded-full",
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "flex flex-col items-center justify-center mt-4",
                  children: [
                    (0, l.jsx)("p", {
                      className:
                        "text-white text-xl text-center md:text-2xl font-bold",
                      children: "You seem to be lost! Let us drop you Home",
                    }),
                    (0, l.jsx)("a", {
                      className:
                        "text-black py-1 px-4 hover:from-lime-800 hover:to-green-600 duration-500 hover:text-white shadow-lg shadow-lime-500 my-4 rounded-xl text-center md:text-2xl text-xl font-bold bg-gradient-to-tr from-lime-600 to-lime-200",
                      href: "/",
                      children: "Go Back To Home",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Pn = n.p + "static/media/stripe.9755e0835b1ab1538bdd.png";
      var On = function () {
        var t = Yt(),
          n = f((0, e.useState)(""), 2),
          r = n[0],
          a = n[1],
          o = f((0, e.useState)(""), 2),
          i = o[0],
          s = o[1],
          u = f((0, e.useState)(""), 2),
          c = u[0],
          d = u[1],
          p = f((0, e.useState)(""), 2),
          h = p[0],
          m = p[1],
          g = f((0, e.useState)(""), 2),
          A = (g[0], g[1]),
          v = f((0, e.useState)(""), 2),
          b = (v[0], v[1]),
          x = f((0, e.useState)(""), 2),
          y = x[0],
          w = x[1],
          k = en(),
          E = function () {
            return "Instances" === r.type
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("table", {
                      className:
                        "table-auto mx-auto md:mx-0 w-5/6 rounded-xl border-white text-xl text-left text-white",
                      children: [
                        (0, l.jsx)("thead", {
                          children: (0, l.jsxs)("tr", {
                            className: "bg-indigo-800",
                            children: [
                              (0, l.jsx)("th", { children: "Type" }),
                              (0, l.jsx)("th", { children: "Name" }),
                              (0, l.jsx)("th", { children: "Value" }),
                            ],
                          }),
                        }),
                        (0, l.jsxs)("tbody", {
                          children: [
                            (0, l.jsxs)("tr", {
                              className: "bg-blue-500 text-black",
                              children: [
                                (0, l.jsx)("td", {
                                  className: "font-bold",
                                  children: "Operating System",
                                }),
                                (0, l.jsxs)("td", { children: [r.os, " "] }),
                                (0, l.jsxs)("td", {
                                  children: [r.ospr, " Rs/hour"],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("tr", {
                              className: "bg-blue-400 text-black",
                              children: [
                                (0, l.jsx)("td", {
                                  className: "font-bold",
                                  children: "RAM",
                                }),
                                (0, l.jsx)("td", { children: r.ram_ }),
                                (0, l.jsxs)("td", {
                                  children: [r.rampr, " Rs/hour"],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("tr", {
                              className: "bg-blue-500 text-black",
                              children: [
                                (0, l.jsx)("td", {
                                  className: "font-bold",
                                  children: "CPU",
                                }),
                                (0, l.jsx)("td", { children: r.cpu_ }),
                                (0, l.jsxs)("td", {
                                  children: [r.cpupr, " Rs/hour"],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("tr", {
                              className: "bg-blue-400 text-black",
                              children: [
                                (0, l.jsx)("td", {
                                  className: "font-bold",
                                  children: "Duration",
                                }),
                                (0, l.jsx)("td", { children: "Hourly" }),
                                (0, l.jsxs)("td", {
                                  children: [r.duration_, " hours"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "text-white mx-auto my-2",
                      children: (0, l.jsxs)("p", {
                        className:
                          "text-xl ml-10 md:ml-0 text-lime-300 font-semibold ",
                        children: [
                          "Total Price : ",
                          " ",
                          r.duration_ * (r.ospr + r.rampr + r.cpupr),
                          " Rs",
                        ],
                      }),
                    }),
                  ],
                })
              : "Storage" === r.type
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("table", {
                      className:
                        "table-auto mx-auto md:mx-0 w-5/6 rounded-xl border-white text-xl text-left text-white",
                      children: [
                        (0, l.jsx)("thead", {
                          children: (0, l.jsxs)("tr", {
                            className: "bg-indigo-800",
                            children: [
                              (0, l.jsx)("th", { children: "Type" }),
                              (0, l.jsx)("th", { children: "Name" }),
                              (0, l.jsx)("th", { children: "Value" }),
                            ],
                          }),
                        }),
                        (0, l.jsxs)("tbody", {
                          children: [
                            (0, l.jsxs)("tr", {
                              className: "bg-blue-500 text-black",
                              children: [
                                (0, l.jsx)("td", {
                                  className: "font-bold",
                                  children: "Storage Space",
                                }),
                                (0, l.jsxs)("td", {
                                  children: [r.storage, " "],
                                }),
                                (0, l.jsxs)("td", {
                                  children: [r.storage_pr, " Rs/hour"],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("tr", {
                              className: "bg-blue-400 text-black",
                              children: [
                                (0, l.jsx)("td", {
                                  className: "font-bold",
                                  children: "Network Speed",
                                }),
                                (0, l.jsx)("td", { children: r.network }),
                                (0, l.jsxs)("td", {
                                  children: [r.network_pr, " Rs/hour"],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("tr", {
                              className: "bg-blue-500 text-black",
                              children: [
                                (0, l.jsx)("td", {
                                  className: "font-bold",
                                  children: "Duration",
                                }),
                                (0, l.jsxs)("td", {
                                  children: [r.months_val, " Months"],
                                }),
                                (0, l.jsxs)("td", {
                                  children: [r.months_val, " Months"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "text-white my-2",
                      children: (0, l.jsxs)("p", {
                        className:
                          "text-xl ml-10 md:ml-0 text-lime-300 font-semibold ",
                        children: [
                          "Total Price :",
                          " ",
                          r.months_val * (r.storage_pr + r.network_pr),
                          " Rs",
                        ],
                      }),
                    }),
                  ],
                })
              : void 0;
          };
        return (
          (0, e.useEffect)(function () {
            a(t.state);
          }),
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className:
                "selection:bg-lime-400 selection:text-black my-6 flex flex-col",
              children: (0, l.jsx)("div", {
                className:
                  "mx-2 mt-4 md:mx-32 py-8 bg-black bg-opacity-80 rounded-xl",
                children: (0, l.jsxs)("div", {
                  className: "my-5 md:px-20",
                  children: [
                    (0, l.jsx)("p", {
                      className:
                        "text-center pb-4 my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-300",
                      children: "Purchase",
                    }),
                    (0, l.jsx)("p", {
                      className:
                        "text-white text-center md:text-left text-xl font-bold px-6 md:px-0",
                      children:
                        "You are one step before to start using the power! Let's get you finish the webwork!",
                    }),
                    (0, l.jsx)("p", {
                      className:
                        "text-white text-center md:text-left text-xl font-bold px-6 md:px-0",
                      children: "Let's review your Order Summary:",
                    }),
                    (0, l.jsx)("p", {
                      className:
                        "text-center pb-4 my-4 md:text-left text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-green-300",
                      children: r.type,
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(E, {}) }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex flex-col-reverse md:flex-row mx-10 md:mx-0",
                      children: [
                        (0, l.jsxs)("form", {
                          className: "my-4 flex flex-col md:w-1/2",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "flex flex-col md:flex-col",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, l.jsx)("label", {
                                      className: "text-xl text-white font-bold",
                                      htmlFor: "name",
                                      children: "Name",
                                    }),
                                    (0, l.jsx)("input", {
                                      onChange: function (e) {
                                        s(e.target.value);
                                      },
                                      type: "text",
                                      autoComplete: "off",
                                      required: !0,
                                      placeholder: "John Doe",
                                      className:
                                        " focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg",
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, l.jsx)("label", {
                                      className: "text-xl text-white font-bold",
                                      htmlFor: "email",
                                      children: "Email",
                                    }),
                                    (0, l.jsx)("input", {
                                      onChange: function (e) {
                                        d(e.target.value);
                                      },
                                      type: "email",
                                      autoComplete: "off",
                                      required: !0,
                                      placeholder: "johndoe@gmail.com",
                                      className:
                                        " focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg",
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, l.jsx)("label", {
                                      className: "text-xl text-white font-bold",
                                      htmlFor: "email",
                                      children: "Phone Number",
                                    }),
                                    (0, l.jsx)("input", {
                                      onChange: function (e) {
                                        w(e.target.value);
                                      },
                                      pattern: "[0-9]{10}",
                                      type: "number",
                                      autoComplete: "off",
                                      required: !0,
                                      placeholder: "7272727272",
                                      className:
                                        " focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "flex flex-col md:flex-col",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, l.jsx)("label", {
                                      className: "text-xl text-white font-bold",
                                      htmlFor: "name",
                                      children: "Credit/Debit Card",
                                    }),
                                    (0, l.jsx)("input", {
                                      onChange: function (e) {
                                        m(e.target.value);
                                      },
                                      type: "number",
                                      pattern: "[0-9]{12}",
                                      autoComplete: "off",
                                      required: !0,
                                      placeholder: "1234-1234-1234-1234",
                                      className:
                                        " focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg",
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, l.jsx)("label", {
                                      className: "text-xl text-white font-bold",
                                      htmlFor: "email",
                                      children: "CVV",
                                    }),
                                    (0, l.jsx)("input", {
                                      onChange: function (e) {
                                        A(e.target.value);
                                      },
                                      pattern: "[0-9]{3}",
                                      type: "number",
                                      autoComplete: "off",
                                      required: !0,
                                      placeholder: "123",
                                      className:
                                        " focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg",
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, l.jsx)("label", {
                                      className: "text-xl text-white font-bold",
                                      htmlFor: "email",
                                      children: "OTP",
                                    }),
                                    (0, l.jsx)("input", {
                                      onChange: function (e) {
                                        b(e.target.value);
                                      },
                                      pattern: "[0-9]{6}",
                                      type: "number",
                                      autoComplete: "off",
                                      required: !0,
                                      placeholder: "000 000",
                                      className:
                                        " focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              children: (0, l.jsx)("button", {
                                type: "submit",
                                className:
                                  "py-2 text-white shadow-md shadow-cyan-400 my-3 rounded-xl font-bold bg-gradient-to-tr from-blue-500 to-cyan-500  hover:bg-cyan-400 hover:text-black hover:bg-gradient-to-t duration-500 w-full md:w-5/6",
                                onClick: function (e) {
                                  !(function (e, t) {
                                    "Instances" === t.type
                                      ? Ze.post(
                                          "http://localhost:3001/instancestore",
                                          {
                                            name: i,
                                            email: c,
                                            card: h,
                                            phno: y,
                                            type: t.type,
                                            os: t.os,
                                            ram: t.ram_,
                                            cpu: t.cpu_,
                                            duration: t.duration_,
                                            purchasevalue:
                                              t.duration_ *
                                              (t.ospr + t.rampr + t.cpupr),
                                          }
                                        ).then(function () {
                                          console.log("success");
                                        })
                                      : "Storage" === t.type &&
                                        Ze.post(
                                          "http://localhost:3001/storagestore",
                                          {
                                            name: i,
                                            email: c,
                                            card: h,
                                            phno: y,
                                            type: t.type,
                                            storage: t.storage,
                                            network: t.network,
                                            duration: t.months_val,
                                            purchasevalue:
                                              t.months_val *
                                              (t.storage_pr + t.network_pr),
                                          }
                                        ).then(function () {
                                          console.log("success");
                                        }),
                                      k("/thankyou"),
                                      e.preventDefault();
                                  })(e, r);
                                },
                                children: "Purchase",
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "md:w-1/2 text-white flex flex-col justify-center",
                          children: [
                            (0, l.jsx)("img", {
                              className: "rounded-md",
                              src: Pn,
                              alt: "stripe logo",
                            }),
                            (0, l.jsx)("p", {
                              className: "text-2xl text-center my-2",
                              children: "Payments made easy and secure",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
      function _n(t) {
        var n,
          r = t.basename,
          a = t.children,
          l = t.window,
          o = e.useRef();
        null == o.current &&
          (o.current =
            (void 0 === (n = { window: l, v5Compat: !0 }) && (n = {}),
            gt(
              function (e, t) {
                var n = e.location;
                return pt(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : ht(t);
              },
              null,
              n
            )));
        var i = o.current,
          s = f(e.useState({ action: i.action, location: i.location }), 2),
          u = s[0],
          c = s[1];
        return (
          e.useLayoutEffect(
            function () {
              return i.listen(c);
            },
            [i]
          ),
          e.createElement(dn, {
            basename: r,
            children: a,
            location: u.location,
            navigationType: u.action,
            navigator: i,
          })
        );
      }
      var Rn, Tn;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(Rn || (Rn = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Tn || (Tn = {}));
      var In = n.p + "static/media/catop.babe776e63ee608ddffa.jpg";
      var Fn = function () {
        return (0, l.jsx)("section", {
          className:
            "selection:bg-lime-400 selection:text-black my-6 flex flex-col items-center",
          children: (0, l.jsxs)("div", {
            className:
              " mx-2 py-4 md:py-16 md:mx-32 border-2 bg-black bg-opacity-80 rounded-xl border-black",
            children: [
              (0, l.jsx)("p", {
                className:
                  "text-center p-4 mx-5 text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-700",
                children: "Thank you for purchasing our product!!",
              }),
              (0, l.jsx)("div", {
                className: "flex flex-row justify-center",
                children: (0, l.jsx)("img", {
                  src: In,
                  alt: "beluga happy",
                  className:
                    "my-4 scale-95 md:scale-100 saturate-200 rounded-xl duration-500",
                }),
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col items-center justify-center",
                children: [
                  (0, l.jsx)("p", {
                    className:
                      "text-white text-xl text-center md:text-2xl font-bold",
                    children:
                      "Look at your Email to access cloud power \u2764\ufe0f\u200d\ud83d\udd25",
                  }),
                  (0, l.jsx)("a", {
                    className:
                      "text-black py-1 px-4 hover:from-lime-800 hover:to-green-600 duration-500 hover:text-white shadow-lg shadow-lime-500 my-4 rounded-xl text-center md:text-2xl text-xl font-bold bg-gradient-to-tr from-lime-600 to-lime-200",
                    href: "/",
                    children: "Go Back To Home",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      function Ln() {
        return (0, l.jsxs)(_n, {
          children: [
            (0, l.jsx)(o, {}),
            (0, l.jsxs)(fn, {
              children: [
                (0, l.jsx)(cn, {
                  path: "/",
                  element: (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(u, {}), (0, l.jsx)(Ye, {})],
                  }),
                }),
                (0, l.jsx)(cn, {
                  path: "/instances",
                  element: (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(xn, {}), (0, l.jsx)(Ye, {})],
                  }),
                }),
                (0, l.jsx)(cn, {
                  path: "/storagebuckets",
                  element: (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(kn, {}), (0, l.jsx)(Ye, {})],
                  }),
                }),
                (0, l.jsx)(cn, {
                  path: "/admin",
                  element: (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(jn, {}),
                  }),
                }),
                (0, l.jsx)(cn, {
                  path: "/purchase",
                  element: (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(On, {}), (0, l.jsx)(Ye, {})],
                  }),
                }),
                (0, l.jsx)(cn, {
                  path: "/thankyou",
                  element: (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(Fn, {}), (0, l.jsx)(Ye, {})],
                  }),
                }),
                (0, l.jsx)(cn, {
                  path: "/sql",
                  element: (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(En, {}),
                  }),
                }),
                (0, l.jsx)(cn, { path: "*", element: (0, l.jsx)(Bn, {}) }),
              ],
            }),
            (0, l.jsx)(i, {}),
          ],
        });
      }
      r.createRoot(document.getElementById("root")).render(
        (0, l.jsx)(e.StrictMode, { children: (0, l.jsx)(Ln, {}) })
      );
    })();
})();
//# sourceMappingURL=main.98b49e88.js.map
