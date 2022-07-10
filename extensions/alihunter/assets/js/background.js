!(function (e) {
  function t(t) {
    for (var a, s, c = t[0], i = t[1], p = t[2], l = 0, d = []; l < c.length; l++) (s = c[l]), Object.prototype.hasOwnProperty.call(o, s) && o[s] && d.push(o[s][0]), (o[s] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    for (u && u(t); d.length; ) d.shift()();
    return n.push.apply(n, p || []), r();
  }
  function r() {
    for (var e, t = 0; t < n.length; t++) {
      for (var r = n[t], a = !0, c = 1; c < r.length; c++) {
        var i = r[c];
        0 !== o[i] && (a = !1);
      }
      a && (n.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var a = {},
    o = { 1: 0 },
    n = [];
  function s(t) {
    if (a[t]) return a[t].exports;
    var r = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.m = e),
    (s.c = a),
    (s.d = function (e, t, r) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if ((s.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var a in e)
          s.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "assets/");
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    i = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var p = 0; p < c.length; p++) t(c[p]);
  var u = i;
  n.push([602, 0]), r();
})({
  102: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return g;
    });
    var a = r(1),
      o = r.n(a),
      n = r(3),
      s = r.n(n),
      c = r(2),
      i = r.n(c),
      p = r(29),
      u = r(17),
      l = r(14),
      d = r.n(l);
    function m(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m(Object(r), !0).forEach(function (t) {
              s()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : m(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var h = "totalProducts",
      f = (function () {
        var e = i()(
          o.a.mark(function e(t, r) {
            var a, n;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Object(p.c)(r);
                  case 2:
                    return (a = e.sent), (n = Object.keys(t).length >= 30 ? {} : t), (e.next = 6), u.c(s()({}, h, y(y({}, n), {}, s()({}, r, { total: a, updatedAt: d()().add(60, "minutes").format() }))));
                  case 6:
                    return e.abrupt("return", a);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, r) {
          return e.apply(this, arguments);
        };
      })();
    function g(e) {
      return function () {
        return i()(
          o.a.mark(function e(t) {
            var r, a, n, s, c, i, p, l;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), u.a(h);
                  case 2:
                    if ((r = e.sent)) {
                      e.next = 8;
                      break;
                    }
                    return (e.next = 6), f({}, t);
                  case 6:
                    return (a = e.sent), e.abrupt("return", a);
                  case 8:
                    if (
                      0 !==
                      (n = Object.keys(r).filter(function (e) {
                        return t === e;
                      })).length
                    ) {
                      e.next = 14;
                      break;
                    }
                    return (e.next = 12), f(r, t);
                  case 12:
                    return (s = e.sent), e.abrupt("return", s);
                  case 14:
                    if (((c = r[n[0]]), (i = d()(c.updatedAt).format()), (p = d()().format()), !(i < p))) {
                      e.next = 22;
                      break;
                    }
                    return (e.next = 20), f(r, t);
                  case 20:
                    return (l = e.sent), e.abrupt("return", l);
                  case 22:
                    return e.abrupt("return", c.total);
                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
  },
  13: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return _;
    });
    var a = r(12),
      o = r.n(a),
      n = r(1),
      s = r.n(n),
      c = r(3),
      i = r.n(c),
      p = r(2),
      u = r.n(p),
      l = r(33),
      d = r.n(l),
      m = r(93);
    function y(e) {
      try {
        return new m.Encryptor({ key: "dGytPN7u2fVYTi+oxtiv+PZnBI5SDTGrMpQiycPZRGg=", serialize_mode: "php" }).encryptSync(e);
      } catch (e) {
        return "";
      }
    }
    var h = r(35);
    function f(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function g(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? f(Object(r), !0).forEach(function (t) {
              i()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : f(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    function _() {
      return function () {
        return u()(
          s.a.mark(function e() {
            var t,
              r,
              a = arguments;
            return s.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                        (r = a.length > 1 ? a[1] : void 0),
                        (e.prev = 2),
                        e.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var e = u()(
                                s.a.mark(function e(a) {
                                  var n, c, i, p, u, l, m, y;
                                  return s.a.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (!(null === (n = chrome.runtime) || void 0 === n ? void 0 : n.restart) || !(null === (c = chrome.runtime) || void 0 === c ? void 0 : c.restartAfterDelay)) {
                                              e.next = 17;
                                              break;
                                            }
                                            return (
                                              (e.prev = 2),
                                              (i = t.url),
                                              (p = void 0 === i ? "" : i),
                                              (u = t.method),
                                              (l = void 0 === u ? "GET" : u),
                                              (m = o()(t, ["url", "method"])),
                                              (e.next = 6),
                                              d()(g({ url: p, method: l, validateStatus: !1 }, m))
                                            );
                                          case 6:
                                            (y = e.sent), a(y), r && r(y), (e.next = 15);
                                            break;
                                          case 11:
                                            (e.prev = 11), (e.t0 = e.catch(2)), a(e.t0), r && r(e.t0);
                                          case 15:
                                            e.next = 18;
                                            break;
                                          case 17:
                                            chrome.runtime.sendMessage({ type: "SEND_REQUEST", requestOptions: t }, function (e) {
                                              return a(e);
                                            });
                                          case 18:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[2, 11]]
                                  );
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        )
                      );
                    case 6:
                      (e.prev = 6), (e.t0 = e.catch(2));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 6]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    r(17),
      r(53),
      d.a.interceptors.request.use(
        (function () {
          var e = u()(
            s.a.mark(function e(t) {
              var r, a, o, n;
              return s.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      r = new URL(t.url);
                      try {
                        (a = (null == t ? void 0 : t.currency) || "USD"), (t.headers["x-app-language"] = "en".toUpperCase()), (t.headers["currency-unit"] = a.toUpperCase()), (t.headers.locale = (null == t ? void 0 : t.locale) || "en_US");
                      } catch (e) {}
                      if ("/ext" !== r.pathname || "POST" !== t.method.toUpperCase()) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 5), h.b();
                    case 5:
                      (o = e.sent), (n = { payload: y(t.data) }), o && Object.assign(t, { headers: g(g({}, t.headers), {}, { Authorization: "Bearer ".concat(o) }) }), Object.assign(t, { data: n });
                    case 10:
                      return e.abrupt("return", t);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()
      ),
      d.a.interceptors.response.use(
        function (e) {
          var t = e.config;
          return "/ext" === new URL(t.url).pathname && "POST" === t.method.toUpperCase() && 401 === e.status && h.a(), e;
        },
        function (e) {
          if (d.a.isCancel(e)) throw g({ cancelToken: !0 }, e);
          throw e;
        }
      );
  },
  131: function (e, t) {},
  132: function (e, t) {},
  138: function (e, t) {},
  139: function (e, t) {},
  144: function (e, t) {},
  145: function (e, t) {},
  147: function (e, t) {},
  149: function (e, t) {},
  150: function (e, t) {},
  154: function (e, t) {},
  156: function (e, t) {},
  159: function (e, t) {},
  164: function (e, t) {},
  166: function (e, t) {},
  17: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return c;
    }),
      r.d(t, "a", function () {
        return i;
      }),
      r.d(t, "b", function () {
        return p;
      });
    var a = r(1),
      o = r.n(a),
      n = r(2),
      s = r.n(n);
    function c(e) {
      return function () {
        return s()(
          o.a.mark(function e(t) {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        chrome.storage.local.set(t, function () {
                          return e(!0);
                        });
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function i(e) {
      return function () {
        return s()(
          o.a.mark(function e(t) {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        chrome.storage.local.get([t], function (r) {
                          return e(null == r ? void 0 : r[t]);
                        });
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function p(e) {
      return function () {
        return s()(
          o.a.mark(function e(t) {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        chrome.storage.local.remove([t], function () {
                          return e(!0);
                        });
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
  },
  22: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    }),
      r.d(t, "b", function () {
        return u;
      }),
      r.d(t, "c", function () {
        return l;
      });
    var a = r(3),
      o = r.n(a);
    function n(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? n(Object(r), !0).forEach(function (t) {
              o()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : n(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var c = [
      { countryCode: "US", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "AF", currencyName: "Afghan Afghani", currencySymbol: "AFN ", currencyType: "AFN", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "ALA", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "AL", currencyName: "Albanian Lek", currencySymbol: "ALL ", currencyType: "ALL", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "GBA", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "AS", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "AD", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "AO", currencyName: "Angolan Kwanza", currencySymbol: "AOA ", currencyType: "AOA", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "AI", currencyName: "East Carribean Dollar", currencySymbol: "EC$ ", currencyType: "XCD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "AG", currencyName: "East Carribean Dollar", currencySymbol: "EC$ ", currencyType: "XCD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "AM", currencyName: "Armenian Dram", currencySymbol: "AMD ", currencyType: "AMD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "AW", currencyName: "Aruban Florin", currencySymbol: "AWG ", currencyType: "AWG", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "ASC", currencyName: "St. Helena Pound", currencySymbol: "SHP ", currencyType: "SHP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "AU", currencyName: "Australian Dollar", currencySymbol: "AU $", currencyType: "AUD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "AT", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "AZ", currencyName: "Azerbaijan New Manat", currencySymbol: "AZN ", currencyType: "AZN", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BS", currencyName: "Bahamian Dollar", currencySymbol: "BSD ", currencyType: "BSD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BH", currencyName: "Bahraini Dinar", currencySymbol: "BHD ", currencyType: "BHD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BD", currencyName: "Bangladeshi Taka", currencySymbol: "BDT ", currencyType: "BDT", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BY", currencyName: "Belarusian Ruble", currencySymbol: "BYR ", currencyType: "BYR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BE", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "BZ", currencyName: "Belize Dollar", currencySymbol: "BZD ", currencyType: "BZD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BJ", currencyName: "CFA Franc BCEAO", currencySymbol: "XOF ", currencyType: "XOF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "BM", currencyName: "Bermudian Dollar", currencySymbol: "BMD ", currencyType: "BMD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BT", currencyName: "Bhutan Ngultrum", currencySymbol: "BTN ", currencyType: "BTN", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BA", currencyName: "Bosnian Mark", currencySymbol: "BAM ", currencyType: "BAM", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BW", currencyName: "Botswana Pula", currencySymbol: "BWP ", currencyType: "BWP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BV", currencyName: "Norwegian Kroner", currencySymbol: "NOK ", currencyType: "NOK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BR", currencyName: "Brazilian Real", currencySymbol: "R$ ", currencyType: "BRL", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "IO", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BN", currencyName: "Brunei Dollar", currencySymbol: "BND ", currencyType: "BND", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BG", currencyName: "Bulgarian Lev", currencySymbol: "BGN ", currencyType: "BGN", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BF", currencyName: "CFA Franc BCEAO", currencySymbol: "XOF ", currencyType: "XOF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "BI", currencyName: "Burundi Franc", currencySymbol: "BIF ", currencyType: "BIF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "KH", currencyName: "Cambodian Riel", currencySymbol: "KHR ", currencyType: "KHR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "CM", currencyName: "CFA Franc BEAC", currencySymbol: "XAF ", currencyType: "XAF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "CA", currencyName: "Canadian Dollar", currencySymbol: "C$ ", currencyType: "CAD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "CV", currencyName: "Cape Verde Escudo", currencySymbol: "CVE ", currencyType: "CVE", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "KY", currencyName: "Cayman Islands Dollar", currencySymbol: "KYD ", currencyType: "KYD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "CF", currencyName: "CFA Franc BEAC", currencySymbol: "XAF ", currencyType: "XAF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "TD", currencyName: "CFA Franc BEAC", currencySymbol: "XAF ", currencyType: "XAF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "CL", currencyName: "Chilean Peso", currencySymbol: "CLP ", currencyType: "CLP", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "CX", currencyName: "Australian Dollar", currencySymbol: "AU $", currencyType: "AUD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "CC", currencyName: "Australian Dollar", currencySymbol: "AU $", currencyType: "AUD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "KM", currencyName: "Comoros Franc", currencySymbol: "KMF ", currencyType: "KMF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "ZR", currencyName: "Congolese Franc", currencySymbol: "CDF ", currencyType: "CDF", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "CG", currencyName: "CFA Franc BEAC", currencySymbol: "XAF ", currencyType: "XAF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "CK", currencyName: "New Zealand Dollar", currencySymbol: "NZ$ ", currencyType: "NZD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "CR", currencyName: "Costa Rican Colon", currencySymbol: "CRC ", currencyType: "CRC", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "CI", currencyName: "CFA Franc BCEAO", currencySymbol: "XOF ", currencyType: "XOF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "CY", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "CZ", currencyName: "Czech Koruna", currencySymbol: "CZK ", currencyType: "CZK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "DK", currencyName: "Danish Krone", currencySymbol: "DKK ", currencyType: "DKK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "DJ", currencyName: "Djibouti Franc", currencySymbol: "DJF ", currencyType: "DJF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "DM", currencyName: "East Carribean Dollar", currencySymbol: "EC$ ", currencyType: "XCD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "DO", currencyName: "Dominican Peso", currencySymbol: "DOP ", currencyType: "DOP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TP", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "EC", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "EG", currencyName: "Egyptian Pound", currencySymbol: "EGP ", currencyType: "EGP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SV", currencyName: "Salvadoran colón", currencySymbol: "SVC ", currencyType: "SVC", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "GQ", currencyName: "CFA Franc BEAC", currencySymbol: "XAF ", currencyType: "XAF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "ER", currencyName: "Eritrean Nakfa", currencySymbol: "ERN ", currencyType: "ERN", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "NC", currencyName: "CFP Franc", currencySymbol: "XPF ", currencyType: "XPF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "NZ", currencyName: "New Zealand Dollar", currencySymbol: "NZ$ ", currencyType: "NZD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "NI", currencyName: "Nicaraguan Cordoba Oro", currencySymbol: "NIO ", currencyType: "NIO", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "NE", currencyName: "CFA Franc BCEAO", currencySymbol: "XOF ", currencyType: "XOF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "NG", currencyName: "Nigerian Naira", currencySymbol: "NGN ", currencyType: "NGN", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "NU", currencyName: "New Zealand Dollar", currencySymbol: "NZ$ ", currencyType: "NZD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "NF", currencyName: "Australian Dollar", currencySymbol: "AU $", currencyType: "AUD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MP", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "NO", currencyName: "Norwegian Kroner", currencySymbol: "NOK ", currencyType: "NOK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "OM", currencyName: "Omani Rial", currencySymbol: "OMR ", currencyType: "OMR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "PK", currencyName: "Pakistan Rupee", currencySymbol: "PKR ", currencyType: "PKR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "PW", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "PS", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "PG", currencyName: "Papua New Guinea Kina", currencySymbol: "PGK ", currencyType: "PGK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "PY", currencyName: "Paraguay Guarani", currencySymbol: "PYG ", currencyType: "PYG", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "PH", currencyName: "Philippine Peso", currencySymbol: "PHP ", currencyType: "PHP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "PN", currencyName: "New Zealand Dollar", currencySymbol: "NZ$ ", currencyType: "NZD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "PL", currencyName: "Polish Zloty", currencySymbol: " zł", currencyType: "PLN", forwardCut: !1, intervalSeparator: " - ", language: "fr", symbolFront: !1 },
      { countryCode: "PT", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "PR", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "QA", currencyName: "Qatari Rial", currencySymbol: "QAR ", currencyType: "QAR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "RE", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "RO", currencyName: "Romanian New Leu", currencySymbol: "RON ", currencyType: "RON", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "RU", currencyName: "Russian Rouble", currencySymbol: " руб.", currencyType: "RUB", forwardCut: !1, intervalSeparator: " - ", language: "fr", symbolFront: !1 },
      { countryCode: "RW", currencyName: "Rwandan Franc", currencySymbol: "RWF ", currencyType: "RWF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "BLM", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "KN", currencyName: "East Carribean Dollar", currencySymbol: "EC$ ", currencyType: "XCD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "LC", currencyName: "East Carribean Dollar", currencySymbol: "EC$ ", currencyType: "XCD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MAF", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "VC", currencyName: "East Carribean Dollar", currencySymbol: "EC$ ", currencyType: "XCD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "WS", currencyName: "Samoan Tala", currencySymbol: "WST ", currencyType: "WST", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SM", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "ST", currencyName: "Sao Tome/Principe Dobra", currencySymbol: "STD ", currencyType: "STD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SA", currencyName: "Saudi Riyal", currencySymbol: "SAR ", currencyType: "SAR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SN", currencyName: "CFA Franc BCEAO", currencySymbol: "XOF ", currencyType: "XOF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "SRB", currencyName: "Serbian Dinar", currencySymbol: "RSD ", currencyType: "RSD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SC", currencyName: "Seychelles Rupee", currencySymbol: "SCR ", currencyType: "SCR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SL", currencyName: "Sierra Leone Leone", currencySymbol: "SLL ", currencyType: "SLL", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SG", currencyName: "Singapore Dollar", currencySymbol: "SG$ ", currencyType: "SGD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SK", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "SI", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "SB", currencyName: "Solomon Islands Dollar", currencySymbol: "SBD ", currencyType: "SBD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SO", currencyName: "Somali Shilling", currencySymbol: "SOS ", currencyType: "SOS", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "ZA", currencyName: "South African Rand", currencySymbol: "ZAR ", currencyType: "ZAR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "KR", currencyName: "Korean Won", currencySymbol: "₩ ", currencyType: "KRW", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "ES", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "LK", currencyName: "Sri Lanka Rupee", currencySymbol: "LKR ", currencyType: "LKR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SH", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "PM", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SR", currencyName: "Suriname Dollar", currencySymbol: "SRD ", currencyType: "SRD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SJ", currencyName: "Norwegian Kroner", currencySymbol: "NOK ", currencyType: "NOK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SZ", currencyName: "Swaziland Lilangeni", currencySymbol: "SZL ", currencyType: "SZL", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "SE", currencyName: "Swedish Krona", currencySymbol: "SEK ", currencyType: "SEK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "CH", currencyName: "Swiss Franc", currencySymbol: "CHF ", currencyType: "CHF", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TW", currencyName: "Taiwan Dollar", currencySymbol: "NT$ ", currencyType: "TWD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TJ", currencyName: "Tajikistan Somoni", currencySymbol: "TJS ", currencyType: "TJS", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TZ", currencyName: "Tanzanian Shilling", currencySymbol: "TZS ", currencyType: "TZS", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TH", currencyName: "Thai Baht", currencySymbol: "THB ", currencyType: "THB", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TLS", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TG", currencyName: "CFA Franc BCEAO", currencySymbol: "XOF ", currencyType: "XOF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "TK", currencyName: "New Zealand Dollar", currencySymbol: "NZ$ ", currencyType: "NZD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TO", currencyName: "Tongan Pa'anga", currencySymbol: "TOP ", currencyType: "TOP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TT", currencyName: "Trinidad/Tobago Dollar", currencySymbol: "TTD ", currencyType: "TTD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TN", currencyName: "Tunisian Dinar", currencySymbol: "TND ", currencyType: "TND", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TR", currencyName: "Turkish Lira", currencySymbol: "TRY ", currencyType: "TRY", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TM", currencyName: "Turkmenistan New Manat", currencySymbol: "TMT ", currencyType: "TMT", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TC", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "UG", currencyName: "Uganda Shilling", currencySymbol: "UGX ", currencyType: "UGX", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "UA", currencyName: "Ukraine Hryvnia", currencySymbol: " грн.", currencyType: "UAH", forwardCut: !1, intervalSeparator: " - ", language: "fr", symbolFront: !1 },
      { countryCode: "AE", currencyName: "Utd. Arab Emir. Dirham", currencySymbol: "AED ", currencyType: "AED", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "UK", currencyName: "United Kingdom Pound", currencySymbol: "￡", currencyType: "GBP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "UM", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "UY", currencyName: "Uruguayan Peso", currencySymbol: "UYU ", currencyType: "UYU", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "UZ", currencyName: "Uzbekistan Som", currencySymbol: "UZS ", currencyType: "UZS", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "VU", currencyName: "Vanuatu Vatu", currencySymbol: "VUV ", currencyType: "VUV", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "VA", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "VE", currencyName: "Venezuelan Bolivar Fuerte", currencySymbol: "VEF ", currencyType: "VEF", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "VN", currencyName: "Vietnamese Dong", currencySymbol: "₫ ", currencyType: "VND", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "VG", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "VI", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "WF", currencyName: "CFP Franc", currencySymbol: "XPF ", currencyType: "XPF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "EH", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "YE", currencyName: "Yemen Rial", currencySymbol: "YER ", currencyType: "YER", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "YU", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "ZM", currencyName: "Zambian Kwacha", currencySymbol: "ZMW ", currencyType: "ZMW", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "EAZ", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "ZW", currencyName: "Zimbabwe Dollar", currencySymbol: "ZWL ", currencyType: "ZWL", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "EE", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "ET", currencyName: "Ethiopian Birr", currencySymbol: "ETB ", currencyType: "ETB", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "FK", currencyName: "Falkland Islands Pound", currencySymbol: "FKP ", currencyType: "FKP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "FO", currencyName: "Danish Krone", currencySymbol: "DKK ", currencyType: "DKK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "FJ", currencyName: "Fiji Dollar", currencySymbol: "FJD ", currencyType: "FJD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "FI", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "FR", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "FX", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "GF", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "PF", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "TF", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "GA", currencyName: "CFA Franc BEAC", currencySymbol: "XAF ", currencyType: "XAF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "GM", currencyName: "Gambian Dalasi", currencySymbol: "GMD ", currencyType: "GMD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "GE", currencyName: "Georgian Lari", currencySymbol: "GEL ", currencyType: "GEL", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "DE", currencyName: "Euro", currencySymbol: "€  ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "GH", currencyName: "Ghanaian New Cedi", currencySymbol: "GHS ", currencyType: "GHS", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "GI", currencyName: "Gibraltar Pound", currencySymbol: "GIP ", currencyType: "GIP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "GR", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "GL", currencyName: "Danish Krone", currencySymbol: "DKK ", currencyType: "DKK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "GD", currencyName: "East Carribean Dollar", currencySymbol: "EC$ ", currencyType: "XCD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "GP", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "GU", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "GT", currencyName: "Guatemalan Quetzal", currencySymbol: "GTQ ", currencyType: "GTQ", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "GN", currencyName: "Guinea Franc", currencySymbol: "GNF ", currencyType: "GNF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "GW", currencyName: "CFA Franc BCEAO", currencySymbol: "XOF ", currencyType: "XOF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "GY", currencyName: "Guyanan Dollar", currencySymbol: "GYD ", currencyType: "GYD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "HT", currencyName: "Haitian Gourde", currencySymbol: "HTG ", currencyType: "HTG", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "HM", currencyName: "Australian Dollar", currencySymbol: "AU $", currencyType: "AUD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "HN", currencyName: "Honduran Lempira", currencySymbol: "HNL ", currencyType: "HNL", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "HK", currencyName: "Hong Kong Dollar", currencySymbol: "HKD ", currencyType: "HKD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "HU", currencyName: "Hungarian Forint", currencySymbol: "HUF ", currencyType: "HUF", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "IS", currencyName: "Iceland Krona", currencySymbol: "ISK ", currencyType: "ISK", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "IN", currencyName: "Indian Rupee", currencySymbol: "Rs. ", currencyType: "INR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "ID", currencyName: "Indonesian Rupiah", currencySymbol: "Rp ", currencyType: "IDR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "IQ", currencyName: "Iraqi Dinar", currencySymbol: "IQD ", currencyType: "IQD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "IE", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "IM", currencyName: "United Kingdom Pound", currencySymbol: "￡", currencyType: "GBP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "IL", currencyName: "Israeli New Shekel", currencySymbol: "₪ ", currencyType: "ILS", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "IT", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "JM", currencyName: "Jamaican Dollar", currencySymbol: "JMD ", currencyType: "JMD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "JP", currencyName: "Japanese Yen", currencySymbol: "￥ ", currencyType: "JPY", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "JEY", currencyName: "United Kingdom Pound", currencySymbol: "￡", currencyType: "GBP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "KZ", currencyName: "Kazakhstan Tenge", currencySymbol: "KZT ", currencyType: "KZT", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "KE", currencyName: "Kenyan Shilling", currencySymbol: "KES ", currencyType: "KES", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "KI", currencyName: "Australian Dollar", currencySymbol: "AU $", currencyType: "AUD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "KS", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "KW", currencyName: "Kuwaiti Dinar", currencySymbol: "KWD ", currencyType: "KWD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "KG", currencyName: "Kyrgyzstanian Som", currencySymbol: "KGS ", currencyType: "KGS", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "LA", currencyName: "Lao Kip", currencySymbol: "LAK ", currencyType: "LAK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "LV", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "LB", currencyName: "Lebanese Pound", currencySymbol: "LBP ", currencyType: "LBP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "LS", currencyName: "Lesotho Loti", currencySymbol: "LSL ", currencyType: "LSL", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "LR", currencyName: "Liberian Dollar", currencySymbol: "LRD ", currencyType: "LRD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "LY", currencyName: "Libyan Dinar", currencySymbol: "LYD ", currencyType: "LYD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "LI", currencyName: "Swiss Franc", currencySymbol: "CHF ", currencyType: "CHF", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "LT", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "LU", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "MO", currencyName: "Macanese pataca", currencySymbol: "MOP ", currencyType: "MOP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MK", currencyName: "Macedonian Denar", currencySymbol: "MKD ", currencyType: "MKD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MG", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MW", currencyName: "Malawi Kwacha", currencySymbol: "MWK ", currencyType: "MWK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MY", currencyName: "Malaysian Ringgit", currencySymbol: "MYR ", currencyType: "MYR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MV", currencyName: "Maldive Rufiyaa", currencySymbol: "MVR ", currencyType: "MVR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "ML", currencyName: "CFA Franc BCEAO", currencySymbol: "XOF ", currencyType: "XOF", forwardCut: !0, intervalSeparator: " - ", language: "ja", symbolFront: !0 },
      { countryCode: "MT", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "MH", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MQ", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "MU", currencyName: "Mauritius Rupee", currencySymbol: "MUR ", currencyType: "MUR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "YT", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "MX", currencyName: "Mexican peso", currencySymbol: " MXN$", currencyType: "MXN", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !1 },
      { countryCode: "FM", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MD", currencyName: "Moldovan Leu", currencySymbol: "MDL ", currencyType: "MDL", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MC", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "MN", currencyName: "Mongolian Tugrik", currencySymbol: "MNT ", currencyType: "MNT", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MNE", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "MS", currencyName: "East Carribean Dollar", currencySymbol: "EC$ ", currencyType: "XCD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MA", currencyName: "Moroccan Dirham", currencySymbol: "MAD ", currencyType: "MAD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MZ", currencyName: "Mozambique New Metical", currencySymbol: "MZN ", currencyType: "MZN", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MM", currencyName: "Myanmar Kyat", currencySymbol: "MMK ", currencyType: "MMK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "NA", currencyName: "Namibia Dollar", currencySymbol: "NAD ", currencyType: "NAD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "NR", currencyName: "Australian Dollar", currencySymbol: "AU $", currencyType: "AUD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "NP", currencyName: "Nepalese Rupee", currencySymbol: "NPR ", currencyType: "NPR", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "NL", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "AN", currencyName: "Euro", currencySymbol: "€ ", currencyType: "EUR", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "AR", currencyName: "Argentine Peso", currencySymbol: "ARS ", currencyType: "ARS", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "PE", currencyName: "Peruvian Nuevo Sol", currencySymbol: "PEN ", currencyType: "PEN", forwardCut: !0, intervalSeparator: " - ", language: "de", symbolFront: !0 },
      { countryCode: "DZ", currencyName: "Algerian Dinar", currencySymbol: " DA", currencyType: "DZD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !1 },
      { countryCode: "JO", currencyName: "Jordanian Dinar", currencySymbol: "JD ", currencyType: "JOD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BO", currencyName: "Bolivian Mvdol", currencySymbol: "BOB ", currencyType: "BOB", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "CO", currencyName: "Unidad de Valor Real", currencySymbol: "COP ", currencyType: "COP", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "BB", currencyName: "Barbados Dollar", currencySymbol: "BBD ", currencyType: "BBD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "PA", currencyName: "Panamanian balboa", currencySymbol: "PAB ", currencyType: "PAB", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "HR", currencyName: "Croatian kuna", currencySymbol: "HRK ", currencyType: "HRK", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "GGY", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "TV", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
      { countryCode: "MR", currencyName: "US Dollar", currencySymbol: "US $", currencyType: "USD", forwardCut: !0, intervalSeparator: " - ", language: "en", symbolFront: !0 },
    ];
    function i(e) {
      for (var t = "", r = 0; r < c.length; r++)
        if (c[r].currencyType === e) {
          t = c[r];
          break;
        }
      return t;
    }
    function p(e) {
      return ["ALA", "BLM", "MNE"].includes(e) ? "ES" : ["GBA", "MAF", "TLS", "EAZ", "GGY"].includes(e) ? "AS" : ["SRB"].includes(e) ? "RS" : ["JEY"].includes(e) ? "UK" : e;
    }
    function u() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD";
      if (!e && 0 !== e) return {};
      var r = i(t.toUpperCase());
      if (!r) return {};
      var a = "";
      try {
        a = Number(e).toLocaleString("".concat(r.language, "-").concat(p(r.countryCode)));
      } catch (e) {}
      return s(s({}, r), {}, { price: e, format: a, formatedAmount: "".concat(r.currencySymbol).concat(a) });
    }
    function l() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD";
      try {
        if (!e && 0 !== e) return;
        var r = i(t.toUpperCase());
        if (!r) return {};
        var a = e.match(/\d+((\.|,)\d)*/g).join(""),
          o = r.language,
          n = p(r.countryCode);
        return (
          "." ===
            Number(123456)
              .toLocaleString("".concat(o, "-").concat(n))
              .match(/(\.|,)/g)
              .toString() && (a = (a = (a = a.replace(/\.+/g, "comma")).replace(/,+/g, ".")).replace(/[comma]+/g, ",")),
          (a = (function (e) {
            try {
              var t = e.match(/\d+(\.\d)*/g);
              return Number(t.join(""));
            } catch (e) {
              return;
            }
          })(a)),
          (a = Number(a))
        );
      } catch (e) {
        return;
      }
    }
  },
  24: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return a;
    }),
      r.d(t, "b", function () {
        return o;
      }),
      r(0);
    var a = [
        {
          name: "FireApps Ali Reviews",
          short_description: "Photo reviews, Product reviews, AliExpress reviews boost sales",
          app_store_url: "https://apps.shopify.com/ali-reviews",
          website_url: "https://fireapps.io",
          script_pattern: "js/frontend/comment.js",
          category: "Marketing",
        },
        {
          name: "FireApps Ali Reviews",
          short_description: "Photo reviews, Product reviews, AliExpress reviews boost sales",
          app_store_url: "https://apps.shopify.com/ali-reviews",
          website_url: "https://fireapps.io",
          script_pattern: "/widget/review-widget",
          category: "Marketing",
        },
        {
          name: "FireApps Ali Reviews",
          short_description: "Photo reviews, Product reviews, AliExpress reviews boost sales",
          app_store_url: "https://apps.shopify.com/ali-reviews",
          website_url: "https://fireapps.io",
          script_pattern: "js/frontend/45/comment.js",
          category: "Marketing",
        },
        {
          name: "Sales Box ‑ Shipping & Offers",
          short_description: "Highlight shipping info, offers on product page to boost sales",
          app_store_url: "https://apps.shopify.com/shipping-information-by-fireapps",
          website_url: "https://fireapps.io",
          script_pattern: "/salebox.js",
          category: "Orders and shipping",
        },
      ],
      o = [
        { img: "flowio", app_store_url: "https://apps.shopify.com/flowio?utm_source=AH-thank-you-page&utm_medium=co-mkt", name: "Pop Up, Email & SMS Automation", category: "Marketing", install: "Free to install", star: "5.0" },
        {
          img: "alireviews",
          app_store_url: "https://apps.shopify.com/ali-reviews?surface_detail=dropshipping&surface_inter_position=10&surface_intra_position=3&surface_type=search&utm_source=ali-hunter&utm_medium=thankyou-page-dropshipping",
          name: "Ali Reviews - Import AliExpress Reviews",
          install: "7-day free trial.",
          category: "Marketing",
          star: 4.9,
        },
      ];
    t.a = [].concat(a, [
      {
        name: "Fera.ai",
        short_description: "Real-time personalization + CRO (w/ timers, social proof, counters, etc.)",
        long_description: "Real-time personalization and conversion rate optimization platform with built-in promo bars, popups, timers, social proof, counters, etc.",
        app_store_url: "https://apps.shopify.com/fera",
        website_url: "https://www.fera.ai",
        script_pattern: "bananastand.js",
        category: "Sales",
      },
      {
        name: "Fera.ai",
        short_description: "Real-time personalization + CRO (w/ timers, social proof, counters, etc.)",
        long_description: "Real-time personalization and conversion rate optimization platform with built-in promo bars, popups, timers, social proof, counters, etc.",
        app_store_url: "https://apps.shopify.com/fera",
        website_url: "https://www.fera.ai",
        script_pattern: "fera.js",
        category: "Sales",
      },
      {
        name: "In‑Store Reserver",
        short_description: "Let customers reserve products online for in-store pickup",
        app_store_url: "https://apps.shopify.com/reserve-in-store-by-fera",
        website_url: "https://www.fera.ai",
        script_pattern: "reserveinstore.js",
        category: "Orders and shipping",
      },
      { name: "Tawk.to", short_description: "Live chat", app_store_url: "https://apps.shopify.com/tawk-to", website_url: "https://www.tawk.to", script_pattern: "embed.tawk.to", category: "Customer service" },
      {
        name: "Privy",
        short_description: "Free email popups, exit intent, targeted modals, wheels & more",
        app_store_url: "https://apps.shopify.com/privy",
        website_url: "https://www.privy.com",
        script_pattern: "shopify.privy.com/widget.js",
        category: "Marketing",
      },
      {
        name: "Hextom Shipping Bar",
        short_description: "Free shipping bar with updated cart goal to boost order value",
        app_store_url: "https://apps.shopify.com/free-shipping-bar",
        website_url: "https://hextom.com",
        script_pattern: "lastsecondcoupon/js/freeshippingbar.js",
        category: "Marketing",
      },
      {
        name: "PushOwl",
        short_description: "Recover Abandoned Carts via Push Notifications",
        app_store_url: "https://apps.shopify.com/pushowl",
        website_url: "https://pushowl.com",
        script_pattern: "sdks/pushowl-shopify.js",
        category: "Marketing",
      },
      {
        name: "Just Uno",
        short_description: "Pop Ups & Social Media Marketing Platform",
        app_store_url: "https://apps.shopify.com/justuno-social-email-leads",
        website_url: "https://www.justuno.com",
        script_pattern: "scripttags.justuno.com",
        category: "Marketing",
      },
      { name: "Shogun", short_description: "Landing Page Builder", app_store_url: "https://apps.shopify.com/shogun", website_url: "https://getshogun.com", script_pattern: "cdn.getshogun.com/pixel.js", category: "Marketing" },
      {
        name: "Beeketing Apps (Multiple possibilites)",
        short_description: "Add urgency, sales popups, happy email, better coupon box, etc.",
        app_store_url: "https://apps.shopify.com/partners/brodev",
        website_url: "https://beeketing.com",
        script_pattern: "js/beeketing.js",
        category: "Marketing",
      },
      { name: "Omnisend", short_description: "Email & Marketing Automation", app_store_url: "https://apps.shopify.com/omnisend", website_url: "https://www.omnisend.com", script_pattern: "inShop/Embed/shopify.js", category: "Marketing" },
      { name: "Smile.io", short_description: "Loyalty Points, VIP, Referral Programs", app_store_url: "https://apps.shopify.com/smile-io", website_url: "https://smile.io", script_pattern: "smile-shopify.js", category: "Marketing" },
      { name: "Smile.io", short_description: "Loyalty Points, VIP, Referral Programs", app_store_url: "https://apps.shopify.com/smile-io", website_url: "https://smile.io", script_pattern: "sweettooth.io", category: "Marketing" },
      { name: "Mailchimp", short_description: "Email & Marketing", app_store_url: "https://apps.shopify.com/mailchimp", website_url: "https://mailchimp.com", script_pattern: "mcjs-connected/js", category: "Marketing" },
      { name: "Spin‑a‑Sale", short_description: "Interactive email pop-up", app_store_url: "https://apps.shopify.com/spin-a-sale", website_url: "https://spinasale.com", script_pattern: "js/spin-v3.js", category: "Marketing" },
      { name: "Jilt", short_description: "Automated emails", app_store_url: "https://apps.shopify.com/jilt-cart-abandonment-solution", website_url: "https://jilt.com", script_pattern: "storefront/v1/jilt.js", category: "Marketing" },
      {
        name: "Conversio",
        short_description: "Email Marketing Automation. Make every email count",
        app_store_url: "https://apps.shopify.com/conversio",
        website_url: "https://conversio.com",
        script_pattern: "conversio.com/scripts/shopify.js",
        category: "Marketing",
      },
      {
        name: "Wheelio",
        short_description: "Gamified pop‑up",
        app_store_url: "https://apps.shopify.com/wheelio-first-interactive-exit-intent-pop-up",
        website_url: "http://wheelio.conversionpirate.com",
        script_pattern: "wheelio-a62f3.firebaseapp.com/scripttag.js",
        category: "Marketing",
      },
      {
        name: "MailChimp",
        short_description: "MailChimp list with exit intent popups and coupons",
        app_store_url: "https://apps.shopify.com/mailchimp-forms",
        website_url: "https://www.mailmunch.co",
        script_pattern: "a.mailmunch.co/widgets",
        category: "Marketing",
      },
      { name: "PageFly", short_description: "Advanced Page Builder", app_store_url: "https://apps.shopify.com/pagefly", website_url: "https://www.sellersmith.com", script_pattern: "pagefly/assets", category: "Marketing" },
      {
        name: "Clever Google Adwords",
        short_description: "Boost your marketing tactics with Google Ads by Clever Adwords",
        app_store_url: "https://apps.shopify.com/cleverppc",
        website_url: "https://www.cleverecommerce.com",
        script_pattern: "mc.js",
        category: "Marketing",
      },
      { name: "Swell", short_description: "Rewards and Referrals", app_store_url: "https://apps.shopify.com/swell", website_url: "http://www.swellrewards.com", script_pattern: "swellrewards.com/loader", category: "Marketing" },
      {
        name: "Email Collection Bar",
        short_description: "Grow your email list with customizable bar, and boost sales",
        app_store_url: "https://apps.shopify.com/email-collection-bar",
        website_url: "https://hextom.com",
        script_pattern: "lastsecondcoupon/js/emailcollectionbar.js",
        category: "Marketing",
      },
      {
        name: "Spur-i-t Popup Upsell",
        short_description: "Fully Customizable Popup",
        app_store_url: "https://apps.shopify.com/upsell-popup-on-exit-visit",
        website_url: "https://spur-i-t.com",
        script_pattern: "upsell-on-exit-visit/js/common.js",
        category: "Marketing",
      },
      {
        name: "MailMunch",
        short_description: "Email Popups with Exit Intent",
        app_store_url: "https://apps.shopify.com/mailmunch",
        website_url: "https://www.mailmunch.co",
        script_pattern: "widgets/site-519579-1d4a0439b676bb9b4e1159635561fda7fb2c0857.js",
        category: "Marketing",
      },
      {
        name: "Pixelpop",
        short_description: "Build your mailing list and boost sales with popups",
        app_store_url: "https://apps.shopify.com/popups-promos-banners-pixelpop",
        website_url: "http://pixelunion.net",
        script_pattern: "pixelpop.js",
        category: "Marketing",
      },
      {
        name: "Zotabox (Multiple possibilites)",
        short_description: "Header Bar or easy contact form",
        app_store_url: "https://apps.shopify.com/partners/zotabox",
        website_url: "https://info.zotabox.com",
        script_pattern: "static.zotabox.co",
        category: "Marketing",
      },
      {
        name: "WhatsApp Share + Chat",
        short_description: "Let your customer be your promoter, abandoned cart on whatsapp",
        app_store_url: "https://apps.shopify.com/whatsapp-sharing",
        website_url: "https://shopiapps.in",
        script_pattern: "whatsapp-share/inc/whatsapp-button.js",
        category: "Marketing",
      },
      {
        name: "OptinMate",
        short_description: "Email Collection, Coupons & Social Popups, Bards & Cards",
        app_store_url: "https://apps.shopify.com/optinmate-2",
        website_url: "https://optinmate.com",
        script_pattern: "optinmate.com",
        category: "Marketing",
      },
      { name: "Sumo", short_description: "Grow Sales & Conversio?", app_store_url: "https://apps.shopify.com/sumome", website_url: "https://sumo.com", script_pattern: "sumome-plugin/js/sumome.js", category: "Marketing" },
      {
        name: "Refersion",
        short_description: "Track referrals & pay commissions to affiliates + influencers",
        app_store_url: "https://apps.shopify.com/refersion",
        website_url: "https://www.refersion.com",
        script_pattern: "cdn.refersion.com/pixel.js",
        category: "Marketing",
      },
      {
        name: "Care Cart",
        short_description: "Recover Abandon Cart Orders by Sales & Marketing Automation",
        app_store_url: "https://apps.shopify.com/care-cart",
        website_url: "https://carecart.io",
        script_pattern: "api/abandoned-cart/js-script",
        category: "Marketing",
      },
      {
        name: "RetargetApp",
        short_description: "Get more sales and new customers with automated Facebook ads",
        app_store_url: "https://apps.shopify.com/retargetapp-facebook-retargeting",
        website_url: "http://retargetapp.com",
        script_pattern: "pixel/pixel.min.js",
        category: "Marketing",
      },
      {
        name: "Push Nova",
        short_description: "Web Push & Facebook Messenger Conversion Marketing",
        app_store_url: "https://apps.shopify.com/simple-push",
        website_url: "https://pushnova.streamlinedapps.com",
        script_pattern: "streamlined-apps-production/streamlined-push-assets/store-site-plugin/js/streamlined-push-plugin.production.min.js",
        category: "Marketing",
      },
      {
        name: "Sales Rocket",
        short_description: "All-in-1 scarcity, urgency and social proof",
        app_store_url: "https://apps.shopify.com/window-shoppers",
        website_url: "http://www.codeinero.net",
        script_pattern: "Scripts/windowshoppers.min.js",
        category: "Marketing",
      },
      { name: "Recart", short_description: "Facebook Messenger Marketing & Abandoned Cart App", app_store_url: "https://apps.shopify.com/recart", website_url: "https://recart.com", script_pattern: "api.recart.com", category: "Sales" },
      {
        name: "Consistent Cart",
        short_description: "Messenger Marketing & Abandoned Cart Recovery",
        app_store_url: "https://apps.shopify.com/consistent-cart",
        website_url: "https://www.consistentcart.com/",
        script_pattern: "consistent_cart_addon.min.js",
        category: "Sales",
      },
      {
        name: "Conversion+",
        short_description: "Free cart reservation countdown timer that increases sales",
        app_store_url: "https://apps.shopify.com/conversion",
        website_url: "https://trust.varinode.com/",
        script_pattern: "cv_initjs.php",
        category: "Sales",
      },
      {
        name: "Stamped.io",
        short_description: "Collect Product reviews, site reviews and photo/video reviews",
        app_store_url: "https://apps.shopify.com/product-reviews-addon",
        website_url: "https://stamped.io",
        script_pattern: "stamped-io",
        category: "Sales",
      },
      {
        name: "Product Reviews",
        short_description: "The simplest way to share your customers experiences.",
        app_store_url: "https://apps.shopify.com/product-reviews",
        website_url: "https://help.shopify.com/en/manual/apps/apps-by-shopify/product-reviews",
        script_pattern: "assets/v4/spr.js",
        category: "Sales",
      },
      {
        name: "Varinode",
        short_description: "Free Ad exchange to help you acquire high quality traffic",
        app_store_url: "https://apps.shopify.com/ads",
        website_url: "http://avs.varinode.com",
        script_pattern: "avjs.php",
        category: "Sales",
      },
      { name: "Loox", short_description: "Photo Reviews (Product Reviews)", app_store_url: "https://apps.shopify.com/loox", website_url: "https://loox.app", script_pattern: "loox.io/widget", category: "Sales" },
      {
        name: "Firepush",
        short_description: "Order recovery with SMS and FREE Web push notifications",
        app_store_url: "https://apps.shopify.com/firepush",
        website_url: "https://firepush.io/",
        script_pattern: "firepush.",
        category: "Sales",
      },
      {
        name: "Frequently Bought Together",
        short_description: "Amazon-like Bundle Recommendations, Upsell and Discounts",
        app_store_url: "https://apps.shopify.com/frequently-bought-together",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "js/modules/frequently-bought-together/main.min.js",
        category: "Sales",
      },
      { name: "Shophero", short_description: "Email Marketing & Push Notification", app_store_url: "https://apps.shopify.com/shophero", website_url: "https://shophero.io/", script_pattern: "shophero.", category: "Marketing" },
      {
        name: "LimeSpot",
        short_description: "Upsell, Cross-sell and Personalized Recommendations by AI",
        app_store_url: "https://apps.shopify.com/limespot",
        website_url: "https://www.limespot.com",
        script_pattern: "storefront/2.0.0/js/shopify/checkout-tracker.min.js",
        category: "Sales",
      },
      {
        name: "McAfee SECURE",
        short_description: "Show visitors your site is secure",
        app_store_url: "https://apps.shopify.com/mcafee-secure",
        website_url: "https://www.mcafeesecure.com/for-consumers",
        script_pattern: "ywxi.net",
        category: "Trust and security",
      },
      { name: "Quick View", short_description: "Product preview in a click", app_store_url: "https://apps.shopify.com/quick-view", website_url: "https://www.secomapp.com", script_pattern: "sca-qv-scripts-noconfig.js", category: "Sales" },
      { name: "Judge.me", short_description: "Product Reviews", app_store_url: "https://apps.shopify.com/judgeme", website_url: "https://judge.me/", script_pattern: "cdn.judge.me/assets/installed.js", category: "Sales" },
      {
        name: "Recharge",
        short_description: "Launch and scale your subscription and recurring business",
        app_store_url: "https://apps.shopify.com/subscription-payments",
        website_url: "https://rechargepayments.com",
        script_pattern: "static/js/recharge.js",
        category: "Sales",
      },
      {
        name: "Code Black Belt Also Bought",
        short_description: "Recommendations - Customers Who Bought This Item Also Bought",
        app_store_url: "https://apps.shopify.com/also-bought",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "js/modules/also-bought/main.min.js",
        category: "Sales",
      },
      {
        name: "Persistent Cart",
        short_description: "Remember customers' carts across their devices",
        app_store_url: "https://apps.shopify.com/remember-my-cart",
        website_url: "https://recovermycart.freshdesk.com/support/solutions/articles/33000213763-remember-my-cart-faq",
        script_pattern: "RememberMyCart/Manage/CartJS",
        category: "Sales",
      },
      { name: "Wishy", short_description: "A beautiful, advanced & customizable wishlist plugin", app_store_url: "https://apps.shopify.com/wishy", website_url: "", script_pattern: "wishy-placer.production.min.js", category: "Sales" },
      {
        name: "Bold Subscription",
        short_description: "Subscription Box and Recurring Orders",
        app_store_url: "https://apps.shopify.com/recurring-orders",
        website_url: "https://boldcommerce.com/bold-subscriptions",
        script_pattern: "v2_ui/js/ro.js",
        category: "Sales",
      },
      {
        name: "Bold Upsell",
        short_description: "Product Upsell, Cross-sell & Smart Upsells to make more money",
        app_store_url: "https://apps.shopify.com/product-upsell",
        website_url: "https://boldcommerce.com",
        script_pattern: "v2_ui/js/upsell.js",
        category: "Sales",
      },
      {
        name: "Yotpo",
        short_description: "Collect product reviews, site reviews, and photo reviews",
        app_store_url: "https://apps.shopify.com/yotpo-social-reviews",
        website_url: "https://www.yotpo.com",
        script_pattern: "staticw2.yotpo.com",
        category: "Sales",
      },
      {
        name: "Bizzy",
        short_description: "Create urgency with recent sales notifications",
        app_store_url: "https://apps.shopify.com/bizzy-social-proof",
        website_url: "https://www.pixelunion.net/",
        script_pattern: "pxu-recent-sales-apps.s3.amazonaws.com/recent-sales",
        category: "Sales",
      },
      { name: "MPS Buy Me", short_description: "Sticky Buy Button", app_store_url: "https://apps.shopify.com/mps-buy-me", website_url: "https://makeprosimp.com/", script_pattern: "buy-me-cdn.makeprosimp.com", category: "Sales" },
      {
        name: "Product Options",
        short_description: "Product options to one or one thousand products with a click!",
        app_store_url: "https://apps.shopify.com/product-options",
        website_url: "https://nexusmedia-ua.com",
        script_pattern: "js/options.js",
        category: "Sales",
      },
      {
        name: "Express Reviews",
        short_description: "Import reviews from AliExpress INSTANTLY",
        app_store_url: "https://apps.shopify.com/express-reviews",
        website_url: "https://appiversal.net/",
        script_pattern: "src/er.js",
        category: "Sales",
      },
      {
        name: "East Side Co Cart Convert",
        short_description: "Product Upsell & Cross-sell",
        app_store_url: "https://apps.shopify.com/cart-convert",
        website_url: "https://eastsideco.com/",
        script_pattern: ".cartconvert.eastsideapps.io",
        category: "Sales",
      },
      {
        name: "SMAR7",
        short_description: "Smart, adaptive & user friendly upsells",
        app_store_url: "https://apps.shopify.com/smar7-bundle-upsell",
        website_url: "https://smar7apps.com",
        script_pattern: "js/bundle-upsell.min.js",
        category: "Sales",
      },
      {
        name: "Supr-i-t Aban. Cart Rem.",
        short_description: "Bring Back Your Store Visitors with Abandoned Cart Reminds",
        app_store_url: "https://apps.shopify.com/abandoned-cart-reminder",
        website_url: "https://spur-i-t.com",
        script_pattern: "shopify-apps/abandoned-cart-reminder/js/common.js",
        category: "Sales",
      },
      {
        name: "Gift Wizard",
        short_description: "Gift Card Solutions, Loyalty and Rewards, Store Credit",
        app_store_url: "https://apps.shopify.com/giftwizard",
        website_url: "https://www.giftwizard.co/",
        script_pattern: "storefront.giftwizard.co/gift.js",
        category: "Sales",
      },
      { name: "Csell", short_description: "Hand-picked product recommendations", app_store_url: "https://apps.shopify.com/cross-sell", website_url: "https://csell.co", script_pattern: "assets/v2/js/core/xsell.js", category: "Sales" },
      {
        name: "Enorm Photo Reviews",
        short_description: "Review app for product reviews , photo reviews & site reviews",
        app_store_url: "https://apps.shopify.com/product-photo-reviews-by-enormapps",
        website_url: "https://www.enormapps.com",
        script_pattern: "productreviews/collection-embed.js",
        category: "Sales",
      },
      {
        name: "In Cart Upsell",
        short_description: "Laser targeted upsell offers in the shopping cart - no popups!",
        app_store_url: "https://apps.shopify.com/in-cart-upsell",
        website_url: "http://www.incartupsell.com",
        script_pattern: "incartupsell.com",
        category: "Sales",
      },
      {
        name: "Spur-i-t Social Proof",
        short_description: "Increase Sales & Create Urgency With SpurIT Social Proof App",
        app_store_url: "https://apps.shopify.com/social-proof-urgency",
        website_url: "https://spur-i-t.com",
        script_pattern: "shopify-extensions/social-proof/store/c54a5ad7c7b4a0069ca3eddae2a0406a.js",
        category: "Sales",
      },
      {
        name: "Recovermycart",
        short_description: "Prevent abandoned orders",
        app_store_url: "https://apps.shopify.com/recover-my-cart",
        website_url: "https://recovermycart.squarespace.com",
        script_pattern: "Manage/CartJS_v2",
        category: "Sales",
      },
      {
        name: "MinMaxify Order Limits",
        short_description: "Minimum - Maximum limits on your products, groups or entire cart",
        app_store_url: "https://apps.shopify.com/order-limits-minmaxify",
        website_url: "http://www.minmaxify.com/",
        script_pattern: "shopifyorderlimits.s3.amazonaws.com/limits",
        category: "Sales",
      },
      {
        name: "Zotabox Social Sharing",
        short_description: "Social Share and Messaging Buttons. Improve Your Communication",
        app_store_url: "https://apps.shopify.com/social-buttons",
        website_url: "https://info.zotabox.com",
        script_pattern: "a384d78e2f3e7d78c9d09a15f7f1b51e/widgets.js",
        category: "Social media",
      },
      {
        name: "Cartback",
        short_description: "Facebook Messenger Abandoned Cart app and Messenger Marketing",
        app_store_url: "https://apps.shopify.com/fb-messenger-remarketing",
        website_url: "",
        script_pattern: "messenger/js/exit_messenger.js",
        category: "Social media",
      },
      {
        name: "Apps2grow.us Shop Instagram",
        short_description: "Stunning Instagram galleries that sell",
        app_store_url: "https://apps.shopify.com/instagram-photos",
        website_url: "http://www.apps2grow.us/instaphotos",
        script_pattern: "files/1/0016/7591/9458/t/1/assets/ssw-libraries.js",
        category: "Social media",
      },
      {
        name: "Expertvillagemedia.com Instagram Feed & Gallery",
        short_description: "Top Instagram Gallery, Instagram Lookbook & Instagram Feed App",
        app_store_url: "https://apps.shopify.com/instagram-feed",
        website_url: "https://www.expertvillagemedia.com/shopify-apps/instafeed/",
        script_pattern: "expertvillagemedia.com/instagramfeed/embed.js",
        category: "Social media",
      },
      { name: "Covet.pics", short_description: "Lookbook, Instagram & Customer Galleries", app_store_url: "https://apps.shopify.com/covet-pics", website_url: "https://covet.pics", script_pattern: "embed_v1.js", category: "Social media" },
      {
        name: "Shopwave Reviews Wishlist",
        short_description: "Photos Reviews, Wishlist, Instagram, Loyalty and 7 apps in one",
        app_store_url: "https://apps.shopify.com/socialshopwave",
        website_url: "https://www.socialshopwave.com/",
        script_pattern: "scripts/socialshopwave",
        category: "Social media",
      },
      {
        name: "Oxi Social Login",
        short_description: "One click login with Facebook, Google and many more",
        app_store_url: "https://apps.shopify.com/oxi-social-login",
        website_url: "http://www.oxiapps.com",
        script_pattern: "social-login.oxiapps.com/api/init",
        category: "Social media",
      },
      {
        name: "Kudobuzz",
        short_description: "Testimonials and Reviews - Grow your business with social reviews",
        app_store_url: "https://apps.shopify.com/kudobuzz-testimonials",
        website_url: "https://kudobuzz.com/",
        script_pattern: "kudobuzz.com/widget",
        category: "Social media",
      },
      {
        name: "AddThis Share Buttons",
        short_description: "Grow your website with free tools trusted by over 15M sites",
        app_store_url: "https://apps.shopify.com/addthis-sharing-tool",
        website_url: "https://www.addthis.com",
        script_pattern: "addthis_widget.js",
        category: "Social media",
      },
      {
        name: "InstaShow or Yottie",
        short_description: "Instagram Feed or Embed any YouTube video and shaping video gallery",
        app_store_url: "https://apps.shopify.com/instashow",
        website_url: "https://elfsight.com",
        script_pattern: "shy.elfsight.com/p/platform.js",
        category: "Social media",
      },
      {
        name: "Foursixty.com Shoppable Instagram",
        short_description: "Shop Instagram. Shoppable UGC. Rights Management. Anywhere.",
        app_store_url: "https://apps.shopify.com/foursixty",
        website_url: "http://www.foursixty.com",
        script_pattern: "media/scripts/fs.embed.v2.5.js",
        category: "Social media",
      },
      {
        name: "Dvcloudsoftware Instagram",
        short_description: "Shop your instagram! Create an Instagram shop in minutes",
        app_store_url: "https://apps.shopify.com/instagram-in-shop",
        website_url: "http://instagram-shop.devcloudsoftware.com/support",
        script_pattern: "resource/resource.js",
        category: "Social media",
      },
      {
        name: "Web Desk Solution Smart Social Login",
        short_description: "Login with your social media accounts",
        app_store_url: "https://apps.shopify.com/smart-social-login",
        website_url: "http://webdesksolution.com",
        script_pattern: "loginwithsocialmedia/assets/scripts/custom/demo.js",
        category: "Social media",
      },
      {
        name: "Powr.io (Multiple possibilites)",
        short_description: "Social Media Feed or icons",
        app_store_url: "https://apps.shopify.com/partners/powr-io",
        website_url: "https://www.powr.io",
        script_pattern: "powr.js",
        category: "Social media",
      },
      {
        name: "99Commerce  Instagram Feed",
        short_description: "Instagram App to Add Instagram Gallery from Instagram Account",
        app_store_url: "https://apps.shopify.com/snapzy-the-instagram-feed",
        website_url: "http://www.99ecommerceexperts.com",
        script_pattern: "instagramfeedexperts.herokuapp.com/embed.js",
        category: "Social media",
      },
      {
        name: "Zotabox Social Mobile Share Bar",
        short_description: "Free Mobile Messaging via WhatsApp, Messenger, Skype. SMS etc",
        app_store_url: "https://apps.shopify.com/mobile-messaging-social-share-bar",
        website_url: "https://info.zotabox.com/",
        script_pattern: "a384d78e2f3e7d78c9d09a15f7f1b51e/widgets.js",
        category: "Social media",
      },
      { name: "Widgetic", short_description: "Facebook Like", app_store_url: "https://apps.shopify.com/facebook-like-by-widgetic", website_url: "https://widgetic.com", script_pattern: "sdk/sdk.js", category: "Social media" },
      {
        name: "AAAE Instagram Shop",
        short_description: "Shoppable Instagram, Instagram Feed & Instagram Look Book APP",
        app_store_url: "https://apps.shopify.com/insta-feed",
        website_url: "https://www.aaaecommerce.com",
        script_pattern: "aaa-insta-feed-script.js",
        category: "Social media",
      },
      {
        name: "Leadslide Social Media Tabs",
        short_description: "Design a Social Media Tab",
        app_store_url: "https://apps.shopify.com/social-media-tabs",
        website_url: "https://leadslide.com",
        script_pattern: "apps/leadslide-js",
        category: "Social media",
      },
      {
        name: "Okas Open SignIn",
        short_description: "Social Login - Use any Social Network platform to login to your store",
        app_store_url: "https://apps.shopify.com/open-signin",
        website_url: "",
        script_pattern: "open-signin.okasconcepts.com",
        category: "Social media",
      },
      {
        name: "Zestard Twitter Feed",
        short_description: "Responsive Widget to display tweets, follow button",
        app_store_url: "https://apps.shopify.com/twitter-feed",
        website_url: "https://www.zestard.com",
        script_pattern: "zestard_tweet_feed.js",
        category: "Social media",
      },
      {
        name: "Autoketing Facebook Chat",
        short_description: "Live chat with customers via Facebook Messenger",
        app_store_url: "https://apps.shopify.com/facebook-chat-box",
        website_url: "https://autoketing.com",
        script_pattern: "dist/fb-chat-embed.js",
        category: "Social media",
      },
      {
        name: "Elfsight Instagram",
        short_description: "Add to website shoppable Instagram photos with tagged items",
        app_store_url: "https://apps.shopify.com/elfsight-shoppable-feed",
        website_url: "https://elfsight.com",
        script_pattern: "assets/elfsight.shoppable.js",
        category: "Social media",
      },
      {
        name: "Likebtn.com",
        short_description: "Get tons of likes and boost sharing",
        app_store_url: "https://apps.shopify.com/like-button-rating",
        website_url: "https://likebtn.com",
        script_pattern: "w.likebtn.com/js/w/widget.js",
        category: "Social media",
      },
      {
        name: "Sketch ThemesInstagram Feed",
        short_description: "Add aliveness to your store by integrating Instagram's feeds",
        app_store_url: "https://apps.shopify.com/instagram-feed-by-sketch-themes",
        website_url: "",
        script_pattern: "live/instagram_feeds/js/instaapp_loadn.js",
        category: "Social media",
      },
      {
        name: "Sprbot Instagram Shop Feed",
        short_description: "Make your Instagram Feed Shop-able",
        app_store_url: "https://apps.shopify.com/dev-instagram-sell-1",
        website_url: "http://sprbot.com/instashop/",
        script_pattern: "instagram-sell/ins-shop.js",
        category: "Social media",
      },
      {
        name: "TagTray",
        short_description: "Shop Galleries Of Customer Generated Social Media Photos",
        app_store_url: "https://apps.shopify.com/tagtray",
        website_url: "https://www.tagtray.com/",
        script_pattern: "v3/tagtray.js",
        category: "Social media",
      },
      {
        name: "Code Back Belt Facebook Image Gallery",
        short_description: "Awesome & dynamic image gallery for your Facebook pictures",
        app_store_url: "https://apps.shopify.com/facebook-image-gallery",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "js/modules/facebook-image-gallery/main.min.js",
        category: "Social media",
      },
      {
        name: "CFF Shareable Cart",
        short_description: "Makes your cart shareable and transferrable between devices",
        app_store_url: "https://apps.shopify.com/portable-cart",
        website_url: "https://customerfirstfocus.com/",
        script_pattern: "cff.production.min.js",
        category: "Social media",
      },
      {
        name: "Green Frog Instagram",
        short_description: "Instagram pic in slider & grid in instagram",
        app_store_url: "https://apps.shopify.com/greenfrog-instashow",
        website_url: "https://greenfrogweb.com",
        script_pattern: "instashow/instashow.js",
        category: "Social media",
      },
      {
        name: "Roar Social Caller",
        short_description: "Social Caller gives you a hand, to increase your inbound calls",
        app_store_url: "https://apps.shopify.com/social-caller",
        website_url: "https://roartheme.com/",
        script_pattern: "socialcaller/lib/assets/socialcaller.js",
        category: "Social media",
      },
      {
        name: "Swym.it Wishlist Plus",
        short_description: "Help your customers pick up where they left off",
        app_store_url: "https://apps.shopify.com/swym-relay",
        website_url: "http://swym.it",
        script_pattern: "code/swym-shopify.js",
        category: "Customer service",
      },
      {
        name: "Tidiochat",
        short_description: "Live chat boosted with Bots and Marketing Automation",
        app_store_url: "https://apps.shopify.com/tidio-chat",
        website_url: "http://www.tidiochat.com",
        script_pattern: "tidiochat.com",
        category: "Customer service",
      },
      {
        name: "Chilli Abandonment Protector",
        short_description: "Email marketing automation & Popups with Exit intent",
        app_store_url: "https://apps.shopify.com/linkerfriend-lead-management-tools",
        website_url: "https://www.chilliapps.com",
        script_pattern: "main/chpmgr.js",
        category: "Customer service",
      },
      {
        name: "AWIO",
        short_description: "Contact Us Page Generator and Popup Contact Widget",
        app_store_url: "https://apps.shopify.com/improved-contact-form",
        website_url: "https://www.awio.com",
        script_pattern: "improvedcontactform.com/icf.js",
        category: "Customer service",
      },
      {
        name: "WhatsHelp.io",
        short_description: "Chat with website visitors via popular Messaging Apps",
        app_store_url: "https://apps.shopify.com/whatshelp-chat-button",
        website_url: "https://whatshelp.io/widget",
        script_pattern: "whatshelp.io/shopify/widget",
        category: "Customer service",
      },
      {
        name: "Facebook Live Chat1",
        short_description: "Customer Support via Facebook Live Chat",
        app_store_url: "https://apps.shopify.com/facebook-messenger-live-chat",
        website_url: "https://info.zotabox.com",
        script_pattern: "sdk/xfbml.customerchat.js#xfbml=1&version=v2.11",
        category: "Customer service",
      },
      { name: "Chatra", short_description: "Live chat and Facebook chat for your store", app_store_url: "https://apps.shopify.com/chatra", website_url: "https://chatra.io", script_pattern: "shopify?chatraId", category: "Customer service" },
      {
        name: "Hulk Contact Us Form",
        short_description: "Take Less Than 2 Minutes to Get In Touch With Your Customers",
        app_store_url: "https://apps.shopify.com/contact-us-by-hulkapps",
        website_url: "https://www.hulkcode.com",
        script_pattern: "skeletopapp.js",
        category: "Customer service",
      },
      {
        name: "AAAE Form Builder",
        short_description: "Form Builder App with Custom Registration Form and Order Form",
        app_store_url: "https://apps.shopify.com/form-builder",
        website_url: "https://www.aaaecommerce.com/",
        script_pattern: "formbuilder.aaawebstore.com/appfiles/aaa_form_builder_script_minify.js",
        category: "Customer service",
      },
      {
        name: "Zendesk Support",
        short_description: "Omnichannel customer service and engagement platform",
        app_store_url: "https://apps.shopify.com/zendesk",
        website_url: "https://www.zendesk.com",
        script_pattern: "zendesk-embeddable.js",
        category: "Customer service",
      },
      {
        name: "Re:amaze",
        short_description: "Customer support helpdesk with live chat, ticketing, and FAQ",
        app_store_url: "https://apps.shopify.com/reamaze",
        website_url: "https://www.reamaze.com",
        script_pattern: "reamaze.com",
        category: "Customer service",
      },
      {
        name: "Orderify",
        short_description: "Let customers edit, cancel and reorder instantly",
        app_store_url: "https://apps.shopify.com/orderify",
        website_url: "https://customerfirstfocus.com",
        script_pattern: "cffOrderEdit.production.min.js",
        category: "Customer service",
      },
      {
        name: "Etoile Ultimate FAQ",
        short_description: "A feature-rich and complete FAQ solution",
        app_store_url: "https://apps.shopify.com/ultimate-faqs",
        website_url: "https://www.etoilewebdesign.com",
        script_pattern: "ewd-ufaq-js.js",
        category: "Customer service",
      },
      {
        name: "Zendesk Chat",
        short_description: "Live chat provides a fast way to connect with customers",
        app_store_url: "https://apps.shopify.com/zendeskchatplus",
        website_url: "http://help.combidesk.com/instruction-manuals/shopify/instruction-manual-shopify-zendesk-chat-integration-formerly-zopim",
        script_pattern: "js/integration/shopify/zopim/widget.js",
        category: "Customer service",
      },
      {
        name: "Facebook Chat",
        short_description: "Turn your visitors into your customers with Facebook Messenger",
        app_store_url: "https://apps.shopify.com/facebook-chat-2-0",
        website_url: "",
        script_pattern: "chat/loader",
        category: "Customer service",
      },
      {
        name: "Pure Chat",
        short_description: "Easy-to-use live chat software with unlimited users and chats",
        app_store_url: "https://apps.shopify.com/pure-chat",
        website_url: "https://www.purechat.com/",
        script_pattern: "purechat.com",
        category: "Customer service",
      },
      {
        name: "Jivo Omnichannel Suite",
        short_description: "Finally! Chats, FB messages, calls & emails, all in one app",
        app_store_url: "https://apps.shopify.com/jivochat",
        website_url: "https://www.jivochat.com/",
        script_pattern: "jivosite.com/script/widget",
        category: "Customer service",
      },
      {
        name: "Custom Order Status",
        short_description: "Create and manage the status of your orders",
        app_store_url: "https://apps.shopify.com/ultimate-order-status",
        website_url: "http://www.w3trends.com",
        script_pattern: "js/orderlookup.js",
        category: "Customer service",
      },
      {
        name: "Mageworx Product Fees",
        short_description: "Add extra fees to incease your sales and average order value",
        app_store_url: "https://apps.shopify.com/product-fees",
        website_url: "https://appstore.mageworx.com/",
        script_pattern: "productfees/source.js",
        category: "Customer service",
      },
      {
        name: "Google Reviews",
        short_description: "Add Google Customer Reviews to your site, no coding required!",
        app_store_url: "https://apps.shopify.com/easy-google-customer-reviews",
        website_url: "https://unionworks.co.uk/shopify-apps/easy-google-customer-reviews/support",
        script_pattern: "scripts/google-customer-reviews-badge.js",
        category: "Customer service",
      },
      {
        name: "Intercom",
        short_description: "Catch, convert and keep more customers with modern live chat",
        app_store_url: "https://apps.shopify.com/intercom",
        website_url: "http://intercom.com",
        script_pattern: "intercomcdn.com/shim.f772198b.js",
        category: "Customer service",
      },
      {
        name: "Free Call",
        short_description: "Service for Direct Sales",
        app_store_url: "https://apps.shopify.com/free-call",
        website_url: "https://www.freecallinc.com",
        script_pattern: "freecall_trackdiv1.js",
        category: "Customer service",
      },
      {
        name: "Two Zillas Tracking Genie",
        short_description: "Tracking set on autopilot",
        app_store_url: "https://apps.shopify.com/trackinggenie",
        website_url: "http://www.twozillas.com",
        script_pattern: "trackinggenie.co",
        category: "Customer service",
      },
      {
        name: "Facebook Live Chat",
        short_description: "Chat with your shoppers via Facebook Messenger",
        app_store_url: "https://apps.shopify.com/facebook-messenger-live-chat-tracking",
        website_url: "https://roartheme.com",
        script_pattern: "fblivechat/lib/asset/script.js",
        category: "Customer service",
      },
      {
        name: "Spice Gems Returns",
        short_description: "Handle Return Requests & send Prepaid Shipping Labels",
        app_store_url: "https://apps.shopify.com/return-management-system",
        website_url: "https://spicegems.com",
        script_pattern: "assets/embedOrderLookup.js",
        category: "Customer service",
      },
      {
        name: "Raven Callback Request",
        short_description: "Turn website visitors into qualified sales calls",
        app_store_url: "https://apps.shopify.com/raven",
        website_url: "http://raven-callback.webflow.io",
        script_pattern: "raven-script/pipoldidik/raven-widget.js",
        category: "Customer service",
      },
      {
        name: "Formilla Live Chat",
        short_description: "Live chat with visitors in real-time",
        app_store_url: "https://apps.shopify.com/formilla-live-chat",
        website_url: "https://www.formilla.com",
        script_pattern: "loadFormilla.js",
        category: "Customer service",
      },
      {
        name: "Powerful Form Builder",
        short_description: "Create any kind of custom form with Powerful Form Builder app",
        app_store_url: "https://apps.shopify.com/powerful-form-builder",
        website_url: "http://www.globosoftware.net",
        script_pattern: "s/files/1/0016/7591/9458/t/1/assets/globoformbuilder_init.js",
        category: "Customer service",
      },
      {
        name: "Delivery Date Range",
        short_description: "Display the estimated delivery date range on the product page",
        app_store_url: "https://apps.shopify.com/delivery-date-range",
        website_url: "http://www.ecomstoreapps.com",
        script_pattern: "ddr_embed.js",
        category: "Customer service",
      },
      {
        name: "EastSideCo Forms",
        short_description: "Smart Contact Form Builder",
        app_store_url: "https://apps.shopify.com/contact-forms-1",
        website_url: "https://eastsideco.com",
        script_pattern: "widget/2.10.2/uploadcare/uploadcare.full.min.js",
        category: "Customer service",
      },
      {
        name: "Wholesale Simplified",
        short_description: "Merchants can offer discounts to different customer groups",
        app_store_url: "https://apps.shopify.com/wholesale-simplified",
        website_url: "http://support.solvercircle.com",
        script_pattern: "wholesale-simplified/scripts",
        category: "Customer service",
      },
      {
        name: "Develic Maps",
        short_description: "Add Google Maps with store locations to your Shopify store",
        app_store_url: "https://apps.shopify.com/maps-by-develic",
        website_url: "https://www.develic.com/",
        script_pattern: "maps.develic.com",
        category: "Customer service",
      },
      {
        name: "Estimated Delivery Date",
        short_description: "Displays the estimated delivery date on the product page",
        app_store_url: "https://apps.shopify.com/estimated-delivery-date",
        website_url: "http://www.estimateddelivery.com",
        script_pattern: "assets/js/countdown/moment.js",
        category: "Customer service",
      },
      {
        name: "Easy GDPR",
        short_description: "Get GDPR compliant with 1 click. Cookie bar",
        app_store_url: "https://apps.shopify.com/easy-gdpr",
        website_url: "https://www.easygdpr.io",
        script_pattern: "gdpr.min.js",
        category: "Customer service",
      },
      {
        name: "Smart Search",
        short_description: "Smart Search, Filters, Recommendations to boost conversion.",
        app_store_url: "https://apps.shopify.com/searchanise",
        website_url: "https://start.searchanise.com/shopify",
        script_pattern: "searchanise.com/widgets/shopify/init.js",
        category: "Sales",
      },
      {
        name: "Hubspot",
        short_description: "Integrate marketing, sales, online data and more!",
        app_store_url: "https://apps.shopify.com/hubspot",
        website_url: "https://hubspot.com",
        script_pattern: "api.hubapi.com",
        category: "Marketing",
      },
      {
        name: "Exto",
        short_description: "Upsell and cross-sell recommendations",
        app_store_url: "https://apps.shopify.com/automatic-related-products",
        website_url: "http://shopify.exto.io/",
        script_pattern: "apps1.exto.io",
        category: "Sales",
      },
      {
        name: "Back in Stock",
        short_description: "Back in Stock Notification alerts",
        app_store_url: "https://apps.shopify.com/back-in-stock",
        website_url: "https://backinstock.org",
        script_pattern: "app.backinstock.org",
        category: "Sales",
      },
      {
        name: "SLoyalty",
        short_description: "Reward customers, build loyalty and grow referral sales.",
        app_store_url: "https://apps.shopify.com/s-loyalty",
        website_url: "https://www.sloyalty.com/",
        script_pattern: "sloyalty.shopify.js",
        category: "Marketing",
      },
      {
        name: "Trackify",
        short_description: "Pixel App and Facebook Audience Builder",
        long_description: "All-in-one Facebook pixel app that lets you integrate multiple pixels, add advanced event data, and see your ROI take off.",
        app_store_url: "https://apps.shopify.com/trackify-1",
        website_url: "http://help.redretarget.com/trackify",
        script_pattern: "trackify_script.js",
        category: "Marketing",
      },
      { name: "Adroll", short_description: "Retargeting", app_store_url: "https://apps.shopify.com/adroll-retargeting", website_url: "http://www.adroll.com", script_pattern: ".adroll.com", category: "Advertising" },
      { name: "Carts Guru", short_description: "Shopping cart abandonment", app_store_url: "https://apps.shopify.com/cartsguru", website_url: "http://carts.guru", script_pattern: "carts.guru", category: "Sales" },
      {
        name: "East Side Co - Back In Stock",
        short_description: "Email and SMS Out of Stock alerts",
        app_store_url: "https://apps.shopify.com/out-of-stock-1",
        website_url: "https://eastsideco.com/shopify-apps",
        script_pattern: "intlTelInput.js",
        category: "Sales",
      },
      { name: "Lead Dyno", short_description: "Affiliate and influencer marketing", app_store_url: "https://apps.shopify.com/leaddyno", website_url: "http://leaddyno.com", script_pattern: "leaddyno.com", category: "Affiliate" },
      {
        name: "Signifyd",
        short_description: "Guaranteed fraud and chargeback protection",
        app_store_url: "https://apps.shopify.com/signifyd",
        website_url: "https://www.signifyd.com",
        script_pattern: "cdn-scripts.signifyd.com",
        category: "Sales",
      },
      { name: "ShopMessage", short_description: "FB Messenger", app_store_url: "https://apps.shopify.com/shopmessage", website_url: "https://www.shopmessage.me", script_pattern: "shopmessage_platform.js", category: "Marketing" },
      { name: "Smart Wishlist", short_description: "Wishlist", app_store_url: "https://apps.shopify.com/smart-wishlist", website_url: "https://www.webmarked.net", script_pattern: "smartwishlist.js", category: "Marketing" },
      {
        name: "Hypervisual",
        short_description: "Beautiful landing and product pages",
        app_store_url: "https://apps.shopify.com/hypervisual",
        website_url: "https://gethypervisual.com",
        script_pattern: "hypervisual.js",
        category: "Store Design",
      },
      { name: "Fomo", short_description: "Increase Conversions with Social Proof Automation", app_store_url: "https://apps.shopify.com/fomo", website_url: "https://fomo.com/", script_pattern: "usefomo.com", category: "Sales" },
      { name: "Currency Converter", short_description: "Show prices in customers local currency", app_store_url: "https://apps.shopify.com/doubly-currency-converter", website_url: "", script_pattern: "doubly.js", category: "Store Design" },
      { name: "Klaviyo", short_description: "Email and social campaigns", app_store_url: "https://apps.shopify.com/klaviyo-email-marketing", website_url: "https://www.klaviyo.com/", script_pattern: "klaviyo.com", category: "Marketing" },
      { name: "Credible", short_description: "Sales Booster", app_store_url: "https://apps.shopify.com/credible", website_url: "http://convertwithcredible.com", script_pattern: "credible.js", category: "Sales" },
      {
        name: "Hektor Commerce - Discount Direct",
        short_description: "Automatically apply discounts through a custom URL",
        app_store_url: "https://apps.shopify.com/discount-direct",
        website_url: "",
        script_pattern: "discountdirect.js",
        category: "Marketing",
      },
      { name: "Affiliatly", short_description: "Affiliate tracking", app_store_url: "https://apps.shopify.com/affiliatly", website_url: "https://www.affiliatly.com", script_pattern: "affiliatly.com", category: "Affiliate" },
      {
        name: "Product Filter",
        short_description: "Product filter & search",
        app_store_url: "https://apps.shopify.com/product-filter-search",
        website_url: "https://boostcommerce.net",
        script_pattern: "bc-sf-filter.js",
        category: "Store Design",
      },
      { name: "Hive", short_description: "Send targeted email campaigns", app_store_url: "https://apps.shopify.com/hive", website_url: "https://www.hive.co", script_pattern: "cdn-prod.hive.co", category: "Marketing" },
      { name: "Nosto", short_description: "Powerful Personalization", app_store_url: "https://apps.shopify.com/nosto-personalization-for-shopify", website_url: "http://nosto.com", script_pattern: "connect.nosto.com", category: "Sales" },
      { name: "Coin", short_description: "Automatic currency conversion", app_store_url: "https://apps.shopify.com/coin", website_url: "https://www.theshoppad.com/coin-for-shopify", script_pattern: "coin.js", category: "Store Design" },
      { name: "Riskified", short_description: "Fraud prevention", app_store_url: "https://www.riskified.com", website_url: "https://www.riskified.com", script_pattern: "beacon.riskified.com", category: "Marketing" },
      { name: "Upsell X", short_description: "Upsell & Cross-Sel", app_store_url: "https://apps.shopify.com/direct-upsell-by-eri", website_url: "", script_pattern: "eri-upsell-modal.js", category: "Sales" },
      { name: "Retention Rocket", short_description: "Retention Marketing", app_store_url: "https://retentionrocket.com/", website_url: "https://retentionrocket.com/", script_pattern: "cdn.retentionrock.com", category: "Marketing" },
      {
        name: "Appifiny - Recently",
        short_description: "Recently purchased popup notifications",
        app_store_url: "https://apps.shopify.com/recently",
        website_url: "https://appifiny.co.uk",
        script_pattern: "recently.appifiny.io",
        category: "Sales",
      },
      {
        name: "Octane - AI Messenger",
        short_description: "Facebook Messenger",
        app_store_url: "https://apps.shopify.com/octane-ai-messenger-marketing",
        website_url: "https://octaneai.com",
        script_pattern: "octaneai.com",
        category: "Sales",
      },
      {
        name: "GeoIP",
        short_description: "Redirect Visitors based on their IP Address",
        app_store_url: "https://apps.shopify.com/geoip-country-redirect",
        website_url: "https://spicegems.com",
        script_pattern: "conditional-redirect.spicegems.com/js/scripttags",
        category: "Store Design",
      },
      { name: "Lamify- Please Stay", short_description: "Recover Sales with Your Tab", app_store_url: "https://apps.shopify.com/please-stay", website_url: "https://www.pleasestay.co", script_pattern: "pleasestay.js", category: "Sales" },
      {
        name: "NeatTracker",
        short_description: "Simple product add to cart and view reports",
        app_store_url: "https://apps.shopify.com/neattracker",
        website_url: "https://neattracker.com",
        script_pattern: "neattracker.js",
        category: "Sales",
      },
      {
        name: "Automatic Discount",
        short_description: "Apply automatic discounts",
        app_store_url: "https://apps.shopify.com/automatic-discount-rules",
        website_url: "https://desk.zoho.com/portal/tabarnapp/home",
        script_pattern: "wallsh_dp.min.js",
        category: "Marketing",
      },
      {
        name: "Cart Notifications",
        short_description: "Stylish favicon notification to reduce cart abandonment",
        app_store_url: "https://apps.shopify.com/cart-notifications",
        website_url: "",
        script_pattern: "cart-notifications",
        category: "Store Design",
      },
      { name: "SimplyTick", short_description: "Reporting", app_store_url: "https://apps.shopify.com/simplytick", website_url: "https://simplytick.com/", script_pattern: "simplytick.com", category: "Sales" },
      { name: "Secomapp Free Gifts", short_description: "Free Gifts", app_store_url: "https://apps.shopify.com/freegifts", website_url: "https://secomapp.com/", script_pattern: "freegifts/app/freegifts", category: "Marketing" },
      {
        name: "Bold Sales Motivator",
        short_description: "Increase the amount of every order",
        app_store_url: "https://apps.shopify.com/the-motivator",
        website_url: "http://boldcommerce.com/",
        script_pattern: "motivate.boldapps.net/motivator.php",
        category: "Sales",
      },
      {
        name: "Product Labels",
        short_description: "Product Labels",
        app_store_url: "https://apps.shopify.com/product-labels",
        website_url: "https://secomapp.com",
        script_pattern: "cdn.secomapp.com/product_label",
        category: "Store Design",
      },
      { name: "Order Deadline", short_description: "Order Deadline", app_store_url: "https://apps.shopify.com/order-deadline", website_url: "https://www.evilegg.co.uk", script_pattern: "order-deadline.min.js", category: "Sales" },
      {
        name: "Dealio",
        short_description: "Gamified Up-Sell",
        app_store_url: "https://apps.shopify.com/dealio-gamified-product-page-up-sell-app",
        website_url: "http://www.dealio-app.com",
        script_pattern: "dealioapp.azurewebsites.net",
        category: "Sales",
      },
      {
        name: "Bold - Custom Pricing",
        short_description: "Custom Pricing ‑ Wholesale",
        app_store_url: "https://apps.shopify.com/customer-pricing",
        website_url: "https://boldcommerce.com/custom-pricing",
        script_pattern: "customer_pricing.php",
        category: "Sales",
      },
      {
        name: "Easy Messenger",
        short_description: "Live Chat",
        app_store_url: "https://apps.shopify.com/easymessenger-livechat-messenger-as-a-live-chat",
        website_url: "https://nexusmedia-ua.com",
        script_pattern: "easybot.js",
        category: "Customer service",
      },
      {
        name: "Code Black Belt Currency Converter",
        short_description: "Currency Converter for Multi Currency Stores",
        app_store_url: "https://apps.shopify.com/currency-converter-plus",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "currency-converter-plus/main.min.js",
        category: "Store Design",
      },
      {
        name: "TrustBadges",
        short_description: "Authenticate And Build Trust",
        app_store_url: "https://apps.shopify.com/trust-by-kamozi",
        website_url: "https://kamozi.io/trust",
        script_pattern: "kamozi_trusted.js",
        category: "Trust and security",
      },
      {
        name: "Appsolve Trustful",
        short_description: "Trust Badges",
        app_store_url: "https://apps.shopify.com/trust-seals-badges",
        website_url: "https://getvitals.io",
        script_pattern: "appsolve.io/assets/js/trust.js",
        category: "Trust and security",
      },
      {
        name: "Bold Quantity Break",
        short_description: "Quantity Breaks,Tiered Pricing and Bulk Discounts",
        app_store_url: "https://apps.shopify.com/quantity-breaks",
        website_url: "https://boldcommerce.com/quantity-breaks",
        script_pattern: "quantity_breaks.php",
        category: "Sales",
      },
      { name: "Stock Counter", short_description: "Social Proof and Scarcity", app_store_url: "https://apps.shopify.com/pressure-cooker", website_url: "https://websiteondemand.ca", script_pattern: "pressure-cooker.js", category: "Sales" },
      { name: "Recomify", short_description: "Related Products", app_store_url: "https://apps.shopify.com/recomify", website_url: "https://www.recomify.com", script_pattern: "app.recomify.com/script_tag.js", category: "Sales" },
      {
        name: "Bought Together",
        short_description: "Frequently Bought Together · Upsell via Bundles",
        app_store_url: "https://apps.shopify.com/product-bundles-by-vitals",
        website_url: "https://getvitals.io",
        script_pattern: "appsolve.io/assets/js/product_bundles.js",
        category: "",
      },
      {
        name: "Sales Pop",
        short_description: "Automatically show recent transaction",
        app_store_url: "https://apps.shopify.com/sales-pop-master",
        website_url: "https://autoketing.com",
        script_pattern: "sales-pop-dot-autoketing-production-sdk.appspot.com",
        category: "Sales",
      },
      {
        name: "Sales Notification",
        short_description: "Recent sales",
        app_store_url: "https://apps.shopify.com/mps-sales-notification",
        website_url: "https://makeprosimp.com",
        script_pattern: "sales-notification.makeprosimp.com",
        category: "Sales",
      },
      { name: "Trust Badge", short_description: "Beautiful payment badges", app_store_url: "https://apps.shopify.com/trust-badge", website_url: "", script_pattern: "hektorcommerce.com/apps/trustbadge", category: "Trust and security" },
      { name: "Trust Hero", short_description: "More Trust, More Sales", app_store_url: "https://apps.shopify.com/trust-hero", website_url: "", script_pattern: "assets/trust_hero", category: "Trust and security" },
      {
        name: "Full Page Zoom",
        short_description: "High quality full screen image zoom for high quality images",
        app_store_url: "https://apps.shopify.com/full-page-zoom",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "cdn.codeblackbelt.com/js/modules/full-page-zoom/main.min.js",
        category: "Store Design",
      },
      {
        name: "Checkout Share",
        short_description: "Turn every conversion into a conversation",
        app_store_url: "https://apps.shopify.com/checkout-share",
        website_url: "https://spacesquirrel.co/checkout-share",
        script_pattern: "checkoutshare.spacesquirrel.net/embed_share_a_purchase.js",
        category: "Sales",
      },
      {
        name: "ReCharge",
        short_description: "Subscriptions by ReCharge",
        app_store_url: "https://apps.shopify.com/subscription-payments",
        website_url: "https://rechargepayments.com",
        script_pattern: "rechargeassets-bootstrapheroes-rechargeapps.netdna-ssl.com",
        category: "Sales",
      },
      {
        name: "Klarna",
        short_description: "Klarna Payments",
        app_store_url: "https://www.klarna.com/international/business/shopify",
        website_url: "https://www.klarna.com/international/business/shopify",
        script_pattern: "www.klarnapayments.com/assets/upstream.js",
        category: "Sales",
      },
      {
        name: "Back in Stock Alerts",
        short_description: "Set Up Back in Stock Notifications for Out of Stock Products",
        app_store_url: "https://apps.shopify.com/in-stock-reminder",
        website_url: "https://spur-i-t.com",
        script_pattern: "in-stock-reminder/js/common.js",
        category: "Marketing",
      },
      { name: "Analytics", short_description: "Data Management", app_store_url: "https://gator.io", website_url: "https://gator.io", script_pattern: "api.gator.io/v1/analytics", category: "Marketing" },
      {
        name: "Recomatic Related Products",
        short_description: "Product recommendations",
        app_store_url: "https://apps.shopify.com/recomatic",
        website_url: "http://www.recomaticapp.com",
        script_pattern: "recomaticapp2-wordsensesas.netdna-ssl.com",
        category: "Sales",
      },
      {
        name: "Pixel Union Countdown",
        short_description: "Countdown Sales Timer",
        app_store_url: "https://apps.shopify.com/countdown-timers",
        website_url: "https://www.pixelunion.net",
        script_pattern: "apps.pixelunion.net/scripts/js/countdown/bundle.min.js",
        category: "Sales",
      },
      {
        name: "Loyalty Rewards",
        short_description: "Loyalty Rewards Referral Point",
        app_store_url: "https://apps.shopify.com/referral-loyalty",
        website_url: "https://www.aaaecommerce.com",
        script_pattern: "aaa-refferal-script.js",
        category: "Marketing",
      },
      { name: "EggViews", short_description: "Product Reviews", app_store_url: "https://apps.shopify.com/eggviews", website_url: "https://www.gowebbaby.com", script_pattern: "eggViewsScript_v2.js", category: "Sales" },
      {
        name: "Sales Booster",
        short_description: "Boost sales- BOGO and upsell",
        app_store_url: "https://apps.shopify.com/checkout-booster",
        website_url: "https://www.aaaecommerce.com/",
        script_pattern: "checkoutbooster_v1.js",
        category: "Sales",
      },
      { name: "Kount", short_description: "Fraud Prevention and Detection", app_store_url: "https://kount.com", website_url: "https://kount.com", script_pattern: "shopify.kount.net", category: "Sales" },
      {
        name: "Multi Vendor",
        short_description: "Convert your ECommerce Store",
        app_store_url: "https://apps.shopify.com/multi-vendor-marketplace",
        website_url: "https://webkul.com",
        script_pattern: "shopify.webkul.com/multivendor/js/download_prod.js",
        category: "Products",
      },
      { name: "Pixlee", short_description: "UGC + Shoppable IG", app_store_url: "https://apps.shopify.com/pixlee", website_url: "https://www.pixlee.com", script_pattern: "pixlee.shopify.v2.prod.js", category: "Sales" },
      {
        name: "Infinite Options",
        short_description: "Customize your products",
        app_store_url: "https://apps.shopify.com/custom-options",
        website_url: "https://www.theshoppad.com/infinite-options-for-shopify",
        script_pattern: "customizery.js",
        category: "Store Design",
      },
      {
        name: "Variant Image Automator",
        short_description: "Show multiple images of variants",
        app_store_url: "https://apps.shopify.com/variant-image-automator",
        website_url: "",
        script_pattern: "variant-image-automator.starapps.studio/product_variants.js",
        category: "Store Design",
      },
      {
        name: "Variant Descriptions",
        short_description: "Show Variant Specific Details",
        app_store_url: "https://apps.shopify.com/variant-descriptions-by-starapps",
        website_url: "",
        script_pattern: "variant-descriptions.starapps.studio/apps.js",
        category: "Store Design",
      },
      {
        name: "Announcement Bar",
        short_description: "Promote discounts on an announcement bar",
        app_store_url: "https://apps.shopify.com/quick-announcement-bar-always-keep-your-customers-informed",
        website_url: "https://hextom.com",
        script_pattern: "quickannouncementbar.js",
        category: "Store Design",
      },
      {
        name: "Ultimate Sales Boost",
        short_description: "Increase sales with scarcity, urgency, trust",
        app_store_url: "https://apps.shopify.com/ultimate-sales-boost",
        website_url: "https://hextom.com",
        script_pattern: "ultimatesalesboost.js",
        category: "Sales",
      },
      {
        name: "Growsumo - PartnerStack",
        short_description: "Affiliate programs ",
        app_store_url: "https://apps.shopify.com/growsumo",
        website_url: "https://www.partnerstack.com/shopify",
        script_pattern: "snippet.growsumo.com",
        category: "Marketing",
      },
      {
        name: "Preorderly",
        short_description: "Pre orders",
        app_store_url: "https://apps.shopify.com/preorderly",
        website_url: "http://www.codeinero.net",
        script_pattern: "preorderly.azurewebsites.net/Scripts/preorder.min.js",
        category: "Orders",
      },
      {
        name: "Messenger",
        short_description: "Sell products and provide customer support from Messenger",
        app_store_url: "https://apps.shopify.com/messenger",
        website_url: "",
        script_pattern: "messenger_commerce/assets/new_message_us",
        category: "Customer service",
      },
      {
        name: "Shipping Rates Calculator",
        short_description: "Shipping rates calculator with geolocation",
        app_store_url: "https://apps.shopify.com/shipping-rates-calculator-plus",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "cdn.codeblackbelt.com/js/modules/shipping-rates-calculator-plus",
        category: "Orders",
      },
      {
        name: "NS8 Visitors",
        short_description: "Empowering merchants to understand their website traffic",
        app_store_url: "https://apps.shopify.com/visitors",
        website_url: "https://www.ns8.com",
        script_pattern: "api.ns8.com/v1/analytics/script/29227008?name=latestVisitors",
        category: "Reporting",
      },
      { name: "Shoelace", short_description: "Retargeting Journeys", app_store_url: "https://apps.shopify.com/shoelace-retargeting", website_url: "https://shoelace.com", script_pattern: "lace.shoelace.com", category: "Marketing" },
      {
        name: "Quantity Discount",
        short_description: "Add Quantity Discount or Tiered Pricing",
        app_store_url: "https://apps.shopify.com/pricing-by-quantity",
        website_url: "https://spur-i-t.com",
        script_pattern: "pricing-by-quantity/js/clear-cart.js",
        category: "Sales",
      },
      {
        name: "Sticky Add To Cart",
        short_description: "Dramatically enhance your ADD TO CART and CHECKOUT process",
        app_store_url: "https://apps.shopify.com/sticky-add-to-cart-bar",
        website_url: "http://www.codeinero.net",
        script_pattern: "stickyaddtocartbar.azurewebsites.net/Scripts/satcb.min.js",
        category: "Store Design",
      },
      {
        name: "Product Accessories",
        short_description: "Show related Product Accessories directly on your product page",
        app_store_url: "https://apps.shopify.com/product-accessories",
        website_url: "http://www.w3trends.com",
        script_pattern: "accessories.js",
        category: "Sales",
      },
      { name: "Tobi", short_description: "SMS + FREE Facebook Messenger", app_store_url: "https://apps.shopify.com/tobi", website_url: "https://tobi.ai", script_pattern: "tobi.ai", category: "Customer Service" },
      {
        name: "Gift Reggie",
        short_description: "Gift Registry and Wishlist",
        app_store_url: "https://apps.shopify.com/gift-reggie-by-eshop-admin",
        website_url: "https://gift-reggie.eshopadmin.com",
        script_pattern: "gift-reggie.eshopadmin.com",
        category: "Sales",
      },
      {
        name: "Bold Brain",
        short_description: "Product recomendations",
        app_store_url: "https://apps.shopify.com/the-bold-brain",
        website_url: "https://boldcommerce.com",
        script_pattern: "brain-assets.boldapps.net/js/analytics.js",
        category: "Sales",
      },
      { name: "OptiMonk", short_description: "Exit intent popups", app_store_url: "https://apps.shopify.com/optimonk", website_url: "http://optimonk.com", script_pattern: "front.optimonk.com", category: "Marketing" },
      {
        name: "No Fraud",
        short_description: "Prevent Fraud Chargebacks, Accept More Orders",
        app_store_url: "https://apps.shopify.com/nofraud-chargeback-prevention-and-protection",
        website_url: "https://www.nofraud.com",
        script_pattern: "services.nofraud.com/js/device.js",
        category: "Orders and shipping",
      },
      {
        name: "Product Customizer",
        short_description: "Easily add options, variants & customization to your products",
        app_store_url: "https://apps.shopify.com/product-customizer",
        website_url: "http://productcustomizer.com",
        script_pattern: "shopify-product-customizer.js",
        category: "Store Design",
      },
      { name: "Verge", short_description: "SEO JSON‑LD Boost", app_store_url: "https://apps.shopify.com/seo-json-ld-boost-by-verge", website_url: "https://vergegraphics.com", script_pattern: "verge-json-ld.js", category: "Marketing" },
      {
        name: "Varinode Trust",
        short_description: "Trust seals and review tools",
        app_store_url: "https://apps.shopify.com/trust",
        website_url: "https://trust.varinode.com",
        script_pattern: "verify.varinode.com/ts_js.php",
        category: "Trust and security",
      },
      {
        name: "Pre‑Order Hero",
        short_description: "Pre-Order to generate more sales",
        app_store_url: "https://apps.shopify.com/pre-order-hero",
        website_url: "",
        script_pattern: "pre_order_hero_16200313.js",
        category: "Orders and Shipping",
      },
      {
        name: "Custom Product Options",
        short_description: "Product options",
        app_store_url: "https://apps.shopify.com/best-custom-product-options",
        website_url: "https://www.relentlessapps.com",
        script_pattern: "best_custom_product_options.js",
        category: "Store Design",
      },
      {
        name: "Globo",
        short_description: "Straight to Checkout",
        app_store_url: "https://apps.shopify.com/straight-to-checkout-skip-cart",
        website_url: "http://globosoftware.net",
        script_pattern: "globocheckout_init.js",
        category: "Store Design",
      },
      {
        name: "Skip Cart",
        short_description: "Faster Checkouts to Reduce Abandoned Carts",
        app_store_url: "https://apps.shopify.com/skip-cart-the-fast-way-to-checkout",
        website_url: "",
        script_pattern: "skipcart.js",
        category: "Store Design",
      },
      { name: "Metrilo", short_description: "Marketing Platform", app_store_url: "https://apps.shopify.com/metrilo", website_url: "https://www.metrilo.com", script_pattern: "shoparty.metrilo.com", category: "Marketing" },
      {
        name: "W3 - Store Locator",
        short_description: "Easily add locations to a map for your customers to find you",
        app_store_url: "https://apps.shopify.com/store-locator-w3",
        website_url: "http://www.w3trends.com",
        script_pattern: "storelocator.w3apps.co/js/include.js",
        category: "Store Design",
      },
      {
        name: "Marsello - Loyalty",
        short_description: "Sell more with a loyalty program and automated email marketing",
        app_store_url: "https://apps.shopify.com/marsello",
        website_url: "https://www.marsello.com",
        script_pattern: "app.marsello.com",
        category: "Marketing",
      },
      {
        name: "Uploadery",
        short_description: "Give your customers the ability to send files with their order",
        app_store_url: "https://apps.shopify.com/uploadery",
        website_url: "https://www.theshoppad.com/uploadery-for-shopify",
        script_pattern: "uploadery.js",
        category: "Store Design",
      },
      {
        name: "Cooki",
        short_description: "Easy GDPR compliance",
        app_store_url: "https://apps.shopify.com/cooki",
        website_url: "https://www.theshoppad.com/uploadery-for-shopify",
        script_pattern: "cookihq.com",
        category: "Trust and Security",
      },
      { name: "Giftship", short_description: "Ship to Multiple Addresses, Gift Messages", app_store_url: "https://apps.shopify.com/giftship", website_url: "https://appsbypix.com/", script_pattern: "giftship.4.2.10.js", category: "Sales" },
      {
        name: "EasyVideo",
        short_description: "Easily add product videos",
        app_store_url: "https://apps.shopify.com/easyvideo",
        website_url: "https://nexusmedia-ua.com/pages/contact",
        script_pattern: "easyvideo_v2.js",
        category: "Store Design",
      },
      {
        name: "Email Before Download",
        short_description: "Smart way to gather your visitors email addresses",
        app_store_url: "https://apps.shopify.com/email-before-download",
        website_url: "https://www.apps2grow.us/shopify/email-before-download",
        script_pattern: "www.apps2grow.us/white-paper/app.js",
        category: "Marketing",
      },
      {
        name: "Pixel Perfect",
        short_description: "Product Feeds and Audiences made Simple",
        app_store_url: "https://apps.shopify.com/pixel-perfect",
        website_url: "https://www.wyred-up.com",
        script_pattern: "pixel-perfect.js",
        category: "Marketing",
      },
      { name: "Teelaunch", short_description: "Print on Demand", app_store_url: "https://apps.shopify.com/teelaunch-1", website_url: "https://teelaunch.com", script_pattern: "teelaunch-scripts.js", category: "Products" },
      { name: "Timer Plus", short_description: "Countdown", app_store_url: "https://apps.shopify.com/timer-plus", website_url: "", script_pattern: "timerplus/files/js/timer.js", category: "Sales" },
      {
        name: "JetPrint Fulfillment",
        short_description: "Print-On-Demand Fulfillment",
        app_store_url: "https://apps.shopify.com/jetprint-fulfillment",
        website_url: "https://www.jetprintapp.com",
        script_pattern: "customization.jetprintapp.com",
        category: "Store Design",
      },
      {
        name: "Uplinkly",
        short_description: "Sticky Cart",
        app_store_url: "https://apps.shopify.com/sticky-cart-by-uplinkly",
        website_url: "https://www.uplinkly.com",
        script_pattern: "sticky-cart.uplinkly-static.com",
        category: "Store Design",
      },
      {
        name: "Smart Push Marketing",
        short_description: "Web push notifications",
        app_store_url: "https://apps.shopify.com/web-push-notification",
        website_url: "https://hextom.com",
        script_pattern: "smartpushmarketing.js",
        category: "Marketing",
      },
      { name: "Yeps", short_description: "Shipping & announcement bar", app_store_url: "https://apps.shopify.com/yeps-io", website_url: "https://yeps.io", script_pattern: "app.yeps.io", category: "Store Design" },
      { name: "Nfcube", short_description: "Instagram Feed", app_store_url: "https://apps.shopify.com/instafeed", website_url: "https://shopify.nfcube.com", script_pattern: "instafeed.nfcube.com", category: "Marketing" },
      {
        name: "ID Discount",
        short_description: "Military Discount",
        app_store_url: "https://apps.shopify.com/military-discount",
        website_url: "https://id.discount",
        script_pattern: "cdn.id.discount/seller/launcher.js",
        category: "Marketing",
      },
      {
        name: "AuthentiPix",
        short_description: "Let your best customers become your brand ambassadors",
        app_store_url: "https://apps.shopify.com/instagration",
        website_url: "http://authentipix.com",
        script_pattern: "authentipix.js",
        category: "Store Design",
      },
      {
        name: "Sky Pilot",
        short_description: "Seamless File and Video Delivery",
        app_store_url: "https://apps.shopify.com/sky-pilot",
        website_url: "https://www.skypilotapp.com",
        script_pattern: "sky_pilot.js",
        category: "Orders and shipping",
      },
      { name: "Carts Guru", short_description: "Retargeting", app_store_url: "https://apps.shopify.com/cartsguru", website_url: "http://carts.guru", script_pattern: "api.carts.guru", category: "Sales" },
      { name: "Kiwi Size Chart", short_description: "Manage all your size charts", app_store_url: "https://apps.shopify.com/kiwi-sizing", website_url: "", script_pattern: "kiwishopapps.com", category: "Store Design" },
      {
        name: "Shop The Look",
        short_description: "Help your customers Buy the Look and purchase multiple items",
        app_store_url: "https://apps.shopify.com/shop-the-look-4",
        website_url: "https://shopthelookapp.com",
        script_pattern: "shopthelook.js",
        category: "Sales",
      },
      {
        name: "Smart eu cookie banner",
        short_description: "Banner, Block Cookies",
        app_store_url: "https://apps.shopify.com/smart-eu-cookie-banner",
        website_url: "",
        script_pattern: "smarteucookiebanner.upsell-apps.com",
        category: "Trust and security",
      },
      {
        name: "Broadcast Bar",
        short_description: "Display your broadcast news",
        app_store_url: "https://apps.shopify.com/broadcast-bar",
        website_url: "https://www.zestard.com",
        script_pattern: "broadcast-bar/public/js/newsticker-app.js",
        category: "Store Design",
      },
      { name: "Getbread", short_description: "Place Bread checkout buttons", app_store_url: "https://shopify.getbread.com", website_url: "https://www.getbread.com", script_pattern: "shopify.getbread.com", category: "Store Design" },
      { name: "ReConvert", short_description: "ReConvert post purchase", app_store_url: "https://apps.shopify.com/reconvert", website_url: "https://stilyoapps.info", script_pattern: "store_reconvert.js", category: "Sales" },
      {
        name: "Sales Countdown Timer",
        short_description: "Countdown Timer",
        app_store_url: "https://apps.shopify.com/sales-countdown-timer-bar",
        website_url: "https://spur-i-t.com",
        script_pattern: "sales-countdown-timer/js/common.js",
        category: "Sales",
      },
      { name: "Klevu Search", short_description: "Instant smart search", app_store_url: "https://apps.shopify.com/klevu-smart-search", website_url: "https://www.klevu.com", script_pattern: "js.klevu.com", category: "Store Design" },
      { name: "AdNabu", short_description: "Google Ads", app_store_url: "https://apps.shopify.com/partners/adnabu-inc", website_url: "https://www.adnabu.com", script_pattern: "storage.googleapis.com/adnabu-shopify", category: "Marketing" },
      {
        name: "Pop‑Up Builder",
        short_description: "Pop‑Up Builder",
        app_store_url: "https://apps.shopify.com/pop-up-builder",
        website_url: "https://www.lumifish.com",
        script_pattern: "lumifish-pop-up.appspot.com/popup.js",
        category: "Store Design",
      },
      {
        name: "Add to cart button",
        short_description: "Add to cart button and buy button",
        app_store_url: "https://apps.shopify.com/add-to-cart",
        website_url: "https://www.goldendev.win/shopify/add-to-cart/support",
        script_pattern: "add-to-cart.js",
        category: "Store Design",
      },
      { name: "Sky Watcher", short_description: "Increase Sales With Social Proof", app_store_url: "https://apps.shopify.com/sky-watcher", website_url: "https://gravitate.io/", script_pattern: "skywatcher.io", category: "Sales" },
      {
        name: "ProFit",
        short_description: "Virtual Fitting Room For Online Fashion Stores",
        app_store_url: "https://apps.shopify.com/alomafit-vfr-light-1",
        website_url: "https://www.alomafit.com",
        script_pattern: ".alomafit.com/sticky_try.js",
        category: "Store Design",
      },
      { name: "XE", short_description: "Currency Converter", app_store_url: "https://apps.shopify.com/xe-currency-converter", website_url: "https://www.xe.com", script_pattern: "xecurrency.js", category: "Store Design" },
      { name: "All‑in‑one Bar", short_description: "Announcement bar", app_store_url: "https://apps.shopify.com/all-in-one-bar", website_url: "", script_pattern: "all-in-one-bar.js", category: "Store Design" },
      {
        name: "Sitejabber",
        short_description: "Store Reviews",
        app_store_url: "https://apps.shopify.com/sitejabber-free-store-reviews-traffic-leads",
        website_url: "https://www.sitejabber.com",
        script_pattern: ".sitejabber.com",
        category: "Sales",
      },
      {
        name: "Currency Converter",
        short_description: "Provide localized shopping experience, increase global sales",
        app_store_url: "https://apps.shopify.com/multi-currency-converter",
        website_url: "https://hextom.com",
        script_pattern: "lastsecondcoupon/js/multicurrencyconverter.js",
        category: "Store Design",
      },
      {
        name: "Cool Image Magnifier",
        short_description: "Magnifier-like zoom for your product images",
        app_store_url: "https://apps.shopify.com/cool-image-magnifier",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: ".codeblackbelt.com/js/modules/cool-image-magnifier",
        category: "Store Design",
      },
      {
        name: "Bold Loyalty Points",
        short_description: "Flexible loyalty program",
        app_store_url: "https://apps.shopify.com/loyalty-points-by-bold",
        website_url: "https://boldcommerce.com/loyalty-points",
        script_pattern: "loy.boldapps.net",
        category: "Marketing",
      },
      {
        name: "App1pro",
        short_description: "Related Products",
        app_store_url: "https://apps.shopify.com/related-products-pro",
        website_url: "http://app1pro.com",
        script_pattern: "app1pro.b-cdn.net/relatedproduct/js/relatedproduct.min.js",
        category: "Sales",
      },
      {
        name: "Leadslide (Multiple possibilites)",
        short_description: "Coupon Popup, Upsells, Shipping Bar",
        app_store_url: "https://apps.shopify.com/partners/developer-dd332b77623f4d86",
        website_url: "https://leadslide.com",
        script_pattern: "leadslide-js",
        category: "Sales",
      },
      {
        name: "Seguno",
        short_description: "Dynamic Banner Suite",
        app_store_url: "https://apps.shopify.com/coupon-banner-with-countdown-carousel",
        website_url: "https://www.seguno.com",
        script_pattern: ".seguno.com",
        category: "Store Design",
      },
      {
        name: "Countdown Timer",
        short_description: "Add Countdown Timer your Store & generate Urgency",
        app_store_url: "https://apps.shopify.com/cowntdown-timer-by-revy",
        website_url: "https://revy.io",
        script_pattern: "api.revy.io/timer.js",
        category: "Sales",
      },
      {
        name: "Revy - UpSell",
        short_description: "Increase & Maximize average order value and sales with UpSell",
        app_store_url: "https://apps.shopify.com/sales-booster-upsell-cross-sell-by-revy-shopify-apps",
        website_url: "https://revy.io",
        script_pattern: "api.revy.io/upsell.js",
        category: "Sales",
      },
      {
        name: "Hide PayPal in Cart",
        short_description: "Hide PayPal button to improve customer checkout experience",
        app_store_url: "https://apps.shopify.com/hide-paypal-in-cart",
        website_url: "https://inscoder.com",
        script_pattern: "hidepaypal2-static.inscoder.com",
        category: "Store Design",
      },
      {
        name: "Secomapp Currency Switcher",
        short_description: "Currency Switcher",
        app_store_url: "https://apps.shopify.com/currency-switcher",
        website_url: "https://www.secomapp.com/currency-switcher-app",
        script_pattern: "cdn.secomapp.com/currency_switcher",
        category: "Store Design",
      },
      {
        name: "Cart Activity",
        short_description: "Get a newsfeed of what shoppers are doing on your site",
        app_store_url: "https://apps.shopify.com/cart-activity",
        website_url: "https://www.secomapp.com/currency-switcher-app",
        script_pattern: ".cartactivity.com/assets/recent_activities.js",
        category: "Sales",
      },
      { name: "Panda", short_description: "Language Translate", app_store_url: "https://apps.shopify.com/translate", website_url: "https://pandaapps.in", script_pattern: "pandaapps.in/apps/languagepanda", category: "Store Design" },
      { name: "Lifter Apps", short_description: "Pop‑Up Window", app_store_url: "https://apps.shopify.com/pop-up-window", website_url: "https://lifterapps.com", script_pattern: "popup4.lifterpopup.com", category: "Marketing" },
      {
        name: "AutoCommerce",
        short_description: "Amazon-like product recommendations",
        app_store_url: "https://apps.shopify.com/orcinus-product-recommendation",
        website_url: "http://autocommerce.io",
        script_pattern: "rec.autocommerce.io/recommender_javascript",
        category: "Sales",
      },
      { name: "WooHoo", short_description: "Gamified Email Popups", app_store_url: "https://apps.shopify.com/woohoo", website_url: "https://getwoohoo.com", script_pattern: "app.getwoohoo.com", category: "Sales" },
      {
        name: "Tidio.co",
        short_description: "Live chat boosted with Bots and Marketing Automation",
        app_store_url: "https://apps.shopify.com/tidio-chat",
        website_url: "http://tidio.co",
        script_pattern: "code.tidio.co",
        category: "Customer service",
      },
      {
        name: "Upsell - KAD Systems",
        short_description: "Generate more sales through upsells with our simple upsell app",
        app_store_url: "https://apps.shopify.com/upsell-system",
        website_url: "https://kad.systems",
        script_pattern: "upsell.kad.systems",
        category: "Sales",
      },
      {
        name: "Nextsale",
        short_description: "Social Proof, Increase Sales Pop Timers Social Proof and hurry",
        app_store_url: "https://apps.shopify.com/nextsale",
        website_url: "https://nextsale.io",
        script_pattern: "cdn.nextsale.io",
        category: "Sales",
      },
      {
        name: "Revy Unlimited Bundles",
        short_description: "Bundle products together with discounts and make more sales!",
        app_store_url: "https://apps.shopify.com/product-bundles-discounts-by-revy",
        website_url: "https://revy.io",
        script_pattern: "api.revy.io/bundle.js",
        category: "Store Design",
      },
      {
        name: "NDNAPPS Banner Slider",
        short_description: "Responsive banner slider, slideshow, image gallery",
        app_store_url: "https://apps.shopify.com/banner-slider-1",
        website_url: "https://www.ndnapps.com",
        script_pattern: "ndnapps.com/ndnapps/banner-slider",
        category: "Store Design",
      },
      {
        name: "Volume and Tiered Discounts",
        short_description: "Ultimate Quantity Discounts & Tiered Pricing Rule for Products",
        app_store_url: "https://apps.shopify.com/volume-discount-by-hulkapps",
        website_url: "https://www.hulkapps.com",
        script_pattern: "volumediscount.hulkapps.com",
        category: "Sales",
      },
      {
        name: "Trust Badge Master",
        short_description: "Establish trust and security to increase sales conversions",
        app_store_url: "https://apps.shopify.com/badge-master-by-hulkapps",
        website_url: "https://www.hulkapps.com",
        script_pattern: "badgemaster.hulkapps.com",
        category: "Sales",
      },
      {
        name: "Ultimate Upsell",
        short_description: "Upsell Bundles, Before Checkout or After Payment",
        app_store_url: "https://apps.shopify.com/ultimate-upsell",
        website_url: "https://tabarnapp.com/ultimate-upsell-shopify",
        script_pattern: "ultimate-upsells/selectorTool.min.js",
        category: "Sales",
      },
      {
        name: "Advanced Bundle Products",
        short_description: "Product bundles: make higher value offers and get more sales!",
        app_store_url: "https://apps.shopify.com/grouped-products",
        website_url: "https://appstore.mageworx.com",
        script_pattern: "files-shpf.mageworx.com/groupedproducts",
        category: "Sales",
      },
      {
        name: "Message Mate Texting Platform",
        short_description: "Convert more customers with the convenience of texting",
        app_store_url: "https://apps.shopify.com/message-mate",
        website_url: "https://ownerlistens.com",
        script_pattern: "ownerlistens.com",
        category: "Sales",
      },
      {
        name: "Post Purchase Upselly",
        short_description: "Increase sales by upselling products on thank you page",
        app_store_url: "https://apps.shopify.com/upsell-pop",
        website_url: "",
        script_pattern: "upsellpop.harshinisystems.com/upsellpopscript.js",
        category: "Sales",
      },
      {
        name: "OrderLogic",
        short_description: "Simple min and max product and order limits plus much more",
        app_store_url: "https://apps.shopify.com/orderlogic",
        website_url: "https://www.orderlogicapp.com",
        script_pattern: "orderlogicapp.com",
        category: "Store Design",
      },
      { name: "EU Cookie Bar", short_description: "Provide a cookie bar to European customers", app_store_url: "https://apps.shopify.com/eu-cookie-bar", website_url: "", script_pattern: "booster-eu-cookie", category: "Sales" },
      {
        name: "Omega Instant Search",
        short_description: "Improve store search and boost your sales",
        app_store_url: "https://apps.shopify.com/omega-instant-search",
        website_url: "https://omegacommerce.com/search",
        script_pattern: "search.omegacommerce.com",
        category: "Store Design",
      },
      {
        name: "Sales Notifications pop up",
        short_description: "Recent Sales Notifications popup for urgency and social proof",
        app_store_url: "https://apps.shopify.com/livebar",
        website_url: "",
        script_pattern: "app.livebar.io",
        category: "Sales",
      },
      {
        name: "GDPR Cookie Compiler",
        short_description: "Get GDPR Cookie Compliance Easier",
        app_store_url: "https://apps.shopify.com/eu-cookie-compiler",
        website_url: "https://www.metizsoft.com",
        script_pattern: "metizapps.com/eucookie",
        category: "Trust and Security",
      },
      {
        name: "Sales Pop up Notifications",
        short_description: "Sales Pop to boost sale & social proof with live sales pop up",
        app_store_url: "https://apps.shopify.com/recent-sales-popup-notifications-1",
        website_url: "https://carecart.io",
        script_pattern: "sales-pop.carecart.io/lib/salesnotifier.js",
        category: "Sales",
      },
      {
        name: "Pixel Union Ultimate Special Offers",
        short_description: "All your sales, discounts, and promotions in one place",
        app_store_url: "https://apps.shopify.com/special-offers",
        website_url: "https://www.pixelunion.net",
        script_pattern: "storefront.cdn.pxu.co/apps/uso.js",
        category: "Sales",
      },
      {
        name: "Product Discount",
        short_description: "Quantity Discounts/Tiered, Countdown Timer, Stock Countdown",
        app_store_url: "https://apps.shopify.com/discount-master",
        website_url: "https://autoketing.com",
        script_pattern: "product-discount-dot-autoketing-production-sdk.appspot.com/dist/product-discount-embed.js",
        category: "Sales",
      },
      {
        name: "Upsell Cross‑Sell",
        short_description: "Upsell Product, Cross-sell, Discounted Upsells, Upsell Bundles",
        app_store_url: "https://apps.shopify.com/upsell-cross-sell-smart-tool",
        website_url: "https://autoketing.com",
        script_pattern: "upsell-master-dot-autoketing-production-sdk.appspot.com/dist/upsell-master-embed.js",
        category: "Sales",
      },
      {
        name: "Instant Brand Page",
        short_description: "A-Z Brand Index Page and Favourites Slider",
        app_store_url: "https://apps.shopify.com/instant-brand-page",
        website_url: "http://lowfruitsolutions.com",
        script_pattern: "cdn.instantbrandpage.lowfruitsolutions.com",
        category: "Sales",
      },
    ]);
  },
  28: function (e, t, r) {
    "use strict";
    r.d(t, "e", function () {
      return g;
    }),
      r.d(t, "f", function () {
        return _;
      }),
      r.d(t, "a", function () {
        return b;
      }),
      r.d(t, "d", function () {
        return w;
      }),
      r.d(t, "b", function () {
        return v;
      }),
      r.d(t, "c", function () {
        return S;
      }),
      r.d(t, "j", function () {
        return C;
      }),
      r.d(t, "h", function () {
        return x;
      }),
      r.d(t, "i", function () {
        return k;
      }),
      r.d(t, "g", function () {
        return O;
      }),
      r.d(t, "k", function () {
        return T;
      });
    var a = r(1),
      o = r.n(a),
      n = r(3),
      s = r.n(n),
      c = r(12),
      i = r.n(c),
      p = r(2),
      u = r.n(p),
      l = r(13),
      d = r(22),
      m = r(8);
    function y(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function h(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? y(Object(r), !0).forEach(function (t) {
              s()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : y(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var f = "https://api-prod.alihunter.io";
    function g() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              d,
              m,
              y,
              g,
              _ = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = _.length > 0 && void 0 !== _[0] ? _[0] : {}),
                        (e.prev = 1),
                        (n = t.productId),
                        (s = void 0 === n ? null : n),
                        (c = t.full_url),
                        (p = void 0 === c ? "" : c),
                        (u = i()(t, ["productId", "full_url"])),
                        (d = p.includes(".ru") ? p.replace(".ru", ".com") : p),
                        (e.next = 6),
                        Object(l.a)(h({ method: "POST", url: "".concat(f, "/ext"), headers: { "api-version": "v1.1.0" }, data: { action: "product.detail", data: { product_id: Number(s), full_url: d } } }, u))
                      );
                    case 6:
                      if (((m = e.sent), 200 === (y = m.status))) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return", { status: y, data: {} });
                    case 10:
                      return (g = T((g = (null === (r = m.data) || void 0 === r || null === (a = r.data) || void 0 === a ? void 0 : a.product) || {}))), e.abrupt("return", { status: y, data: g });
                    case 15:
                      return (e.prev = 15), (e.t0 = e.catch(1)), e.abrupt("return", { status: 500, data: {}, total: void 0 });
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 15]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function _() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              d,
              m = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = m.length > 0 && void 0 !== m[0] ? m[0] : {}),
                        (e.prev = 1),
                        (n = t.params),
                        (s = void 0 === n ? {} : n),
                        (c = i()(t, ["params"])),
                        (e.next = 5),
                        Object(l.a)(
                          h(
                            {
                              method: "POST",
                              url: "".concat(f, "/ext"),
                              header: { "api-version": "v1.1.0", "x-application": "extension" },
                              data: {
                                action: "product.search",
                                data: h(
                                  { category_id: void 0, page_no: void 0, page_size: 15, min_order: 520, keyword: void 0, min_price: void 0, max_price: void 0, order_by: "orders", sort: "desc", filter_in: "7days", tab: "trending" },
                                  s
                                ),
                              },
                            },
                            c
                          )
                        )
                      );
                    case 5:
                      return (
                        (p = e.sent),
                        (u = p.status),
                        (d = (d = (null === (r = p.data) || void 0 === r || null === (a = r.data) || void 0 === a ? void 0 : a.products) || []).map(function (e) {
                          return T(e);
                        })),
                        e.abrupt("return", { status: u, data: d })
                      );
                    case 12:
                      return (e.prev = 12), (e.t0 = e.catch(1)), e.abrupt("return", { status: e.t0.status, data: [] });
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 12]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function b() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              d,
              m,
              y = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = y.length > 0 && void 0 !== y[0] ? y[0] : {}),
                        (e.prev = 1),
                        (r = t.params),
                        (a = void 0 === r ? {} : r),
                        (n = i()(t, ["params"])),
                        (s = a.productId),
                        (c = a.totalPage),
                        (p = a.currentPage),
                        (u = a.data),
                        "https://acr.alihunter.io",
                        (e.next = 7),
                        Object(l.a)(
                          h(
                            {
                              method: "POST",
                              url: "".concat("https://acr.alihunter.io", "/ext"),
                              header: { "api-version": "v1.1.0", "x-application": "extension" },
                              data: { action: "product.detail.add_country_statistic", data: { product_id: s, current_page: p, total_page: c, statistic_data: u } },
                            },
                            n
                          )
                        )
                      );
                    case 7:
                      return (d = e.sent), (m = d.status), e.abrupt("return", { status: m, data: u });
                    case 12:
                      return (e.prev = 12), (e.t0 = e.catch(1)), e.abrupt("return", { status: e.t0.status, data: [] });
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 12]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function w() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              d,
              m,
              y,
              g,
              _,
              b = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = b.length > 0 && void 0 !== b[0] ? b[0] : {}),
                        (e.prev = 1),
                        (c = t.params),
                        (p = void 0 === c ? {} : c),
                        (u = i()(t, ["params"])),
                        (e.next = 5),
                        Object(l.a)(
                          h(
                            {
                              method: "POST",
                              url: "".concat(f, "/ext"),
                              header: { "api-version": "v1.1.0" },
                              data: { action: "product.best_selling", data: h({ page_no: 1, page_size: 15, min_order: 520, order_by: "orders", sort: "desc", filter_in: "7days", min_price: 1 }, p) },
                            },
                            u
                          )
                        )
                      );
                    case 5:
                      return (
                        (d = e.sent),
                        (m = d.status),
                        (y = null === (r = d.data) || void 0 === r ? void 0 : r.data.updated_time),
                        (g = null === (a = d.data) || void 0 === a ? void 0 : a.data.next_update_time),
                        (_ = (_ = (null === (n = d.data) || void 0 === n || null === (s = n.data) || void 0 === s ? void 0 : s.products) || []).map(function (e) {
                          return T(e);
                        })),
                        e.abrupt("return", { status: m, data: _, updatedTime: y, nextUpdateTime: g })
                      );
                    case 14:
                      return (e.prev = 14), (e.t0 = e.catch(1)), e.abrupt("return", { status: e.t0.status, data: [] });
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 14]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function v() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              d,
              m,
              y,
              g,
              _,
              b,
              w,
              v = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = v.length > 0 && void 0 !== v[0] ? v[0] : {}),
                        (e.prev = 1),
                        (p = t.params),
                        (u = void 0 === p ? {} : p),
                        (d = i()(t, ["params"])),
                        (e.next = 5),
                        Object(l.a)(
                          h(
                            {
                              method: "POST",
                              url: "".concat(f, "/ext"),
                              header: { "api-version": "v1.1.0" },
                              data: {
                                action: "product.best_selling_category",
                                data: h({ page_no: 1, page_size: 15, min_order: 520, order_by: "orders", sort: "desc", filter_in: "7days", category_id: void 0, category_slug: void 0, min_price: 1 }, u),
                              },
                            },
                            d
                          )
                        )
                      );
                    case 5:
                      return (
                        (m = e.sent),
                        (y = m.status),
                        (g = null === (r = m.data) || void 0 === r ? void 0 : r.data.updated_time),
                        (_ = null === (a = m.data) || void 0 === a ? void 0 : a.data.next_update_time),
                        (b = null === (n = m.data) || void 0 === n ? void 0 : n.data.category_id),
                        (w = (w = (null === (s = m.data) || void 0 === s || null === (c = s.data) || void 0 === c ? void 0 : c.products) || []).map(function (e) {
                          return T(e);
                        })),
                        e.abrupt("return", { status: y, data: w, updatedTime: g, nextUpdateTime: _, categoryId: b })
                      );
                    case 15:
                      return (e.prev = 15), (e.t0 = e.catch(1)), e.abrupt("return", { status: e.t0.status, data: [] });
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 15]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function S() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              c,
              p,
              u,
              d,
              m,
              y,
              g,
              _,
              b,
              w,
              v,
              S = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = S.length > 0 && void 0 !== S[0] ? S[0] : {}),
                        (e.prev = 1),
                        (u = t.params),
                        (d = void 0 === u ? {} : u),
                        (m = i()(t, ["params"])),
                        (e.next = 5),
                        Object(l.a)(
                          h(
                            {
                              method: "POST",
                              url: "".concat(f, "/ext"),
                              header: { "api-version": "v1.1.0" },
                              data: { action: "product.best_selling_detail", data: h({ page_no: 1, page_size: 15, min_order: 520, order_by: "orders", sort: "desc", filter_in: "7days", product_id: void 0, min_price: 1 }, d) },
                            },
                            m
                          )
                        )
                      );
                    case 5:
                      return (
                        (y = e.sent),
                        (g = y.status),
                        (_ = null === (r = y.data) || void 0 === r ? void 0 : r.data.updated_time),
                        (b = null === (a = y.data) || void 0 === a ? void 0 : a.data.next_update_time),
                        (w = null === (n = y.data) || void 0 === n ? void 0 : n.data.category_id),
                        (v = (v = (null === (c = y.data) || void 0 === c || null === (p = c.data) || void 0 === p ? void 0 : p.products) || []).map(function (e) {
                          return T(e);
                        })),
                        e.abrupt("return", s()({ status: g, data: v, updatedTime: _, nextUpdateTime: b, categoryId: w }, "categoryId", w))
                      );
                    case 15:
                      return (e.prev = 15), (e.t0 = e.catch(1)), e.abrupt("return", { status: e.t0.status, data: [] });
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 15]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function C() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              d,
              m,
              y,
              g,
              _,
              b,
              w,
              v,
              S = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = S.length > 0 && void 0 !== S[0] ? S[0] : {}),
                        (e.prev = 1),
                        (u = t.params),
                        (d = void 0 === u ? {} : u),
                        (m = i()(t, ["params"])),
                        (e.next = 5),
                        Object(l.a)(
                          h(
                            {
                              method: "POST",
                              url: "".concat(f, "/ext"),
                              header: { "api-version": "v1.1.0" },
                              data: { action: "product.trending", data: h({ page_no: 1, page_size: 15, min_order: 520, order_by: "orders", sort: "desc", filter_in: "day", min_price: 1, ads: 1 }, d) },
                            },
                            m
                          )
                        )
                      );
                    case 5:
                      return (
                        (y = e.sent),
                        (g = y.status),
                        (_ = null === (r = y.data) || void 0 === r ? void 0 : r.data.updated_time),
                        (b = null === (a = y.data) || void 0 === a ? void 0 : a.data.next_update_time),
                        (w = (null === (n = y.data) || void 0 === n || null === (s = n.data) || void 0 === s ? void 0 : s.products) || []),
                        (v = (null === (c = y.data) || void 0 === c || null === (p = c.data) || void 0 === p ? void 0 : p.ads) || {}),
                        (w = w.map(function (e) {
                          return T(e);
                        })),
                        e.abrupt("return", { status: g, data: w, ads: v, updatedTime: _, nextUpdateTime: b })
                      );
                    case 15:
                      return (e.prev = 15), (e.t0 = e.catch(1)), e.abrupt("return", { status: e.t0.status, data: [] });
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 15]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function x() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              d,
              m,
              y,
              g,
              _,
              b,
              w,
              v = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = v.length > 0 && void 0 !== v[0] ? v[0] : {}),
                        (e.prev = 1),
                        (p = t.params),
                        (u = void 0 === p ? {} : p),
                        (d = i()(t, ["params"])),
                        (e.next = 5),
                        Object(l.a)(
                          h(
                            {
                              method: "POST",
                              url: "".concat(f, "/ext"),
                              header: { "api-version": "v1.1.0" },
                              data: {
                                action: "product.trending_category",
                                data: h({ page_no: 1, page_size: 15, min_order: 520, order_by: "orders", sort: "desc", filter_in: "day", category_id: void 0, category_slug: void 0, min_price: 1 }, u),
                              },
                            },
                            d
                          )
                        )
                      );
                    case 5:
                      return (
                        (m = e.sent),
                        (y = m.status),
                        (g = null === (r = m.data) || void 0 === r ? void 0 : r.data.updated_time),
                        (_ = null === (a = m.data) || void 0 === a ? void 0 : a.data.next_update_time),
                        (b = null === (n = m.data) || void 0 === n ? void 0 : n.data.category_id),
                        (w = (w = (null === (s = m.data) || void 0 === s || null === (c = s.data) || void 0 === c ? void 0 : c.products) || []).map(function (e) {
                          return T(e);
                        })),
                        e.abrupt("return", { status: y, data: w, updatedTime: g, nextUpdateTime: _, categoryId: b })
                      );
                    case 15:
                      return (e.prev = 15), (e.t0 = e.catch(1)), e.abrupt("return", { status: e.t0.status, data: [] });
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 15]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function k() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              d,
              m,
              y,
              g,
              _,
              b,
              w,
              v = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = v.length > 0 && void 0 !== v[0] ? v[0] : {}),
                        (e.prev = 1),
                        (p = t.params),
                        (u = void 0 === p ? {} : p),
                        (d = i()(t, ["params"])),
                        (e.next = 5),
                        Object(l.a)(
                          h(
                            {
                              method: "POST",
                              url: "".concat(f, "/ext"),
                              header: { "api-version": "v1.1.0" },
                              data: { action: "product.trending_detail", data: h({ page_no: 1, page_size: 15, min_order: 520, order_by: "orders", sort: "desc", filter_in: "day", product_id: void 0, min_price: 1 }, u) },
                            },
                            d
                          )
                        )
                      );
                    case 5:
                      return (
                        (m = e.sent),
                        (y = m.status),
                        (g = null === (r = m.data) || void 0 === r ? void 0 : r.data.updated_time),
                        (_ = null === (a = m.data) || void 0 === a ? void 0 : a.data.next_update_time),
                        (b = null === (n = m.data) || void 0 === n ? void 0 : n.data.category_id),
                        (w = (w = (null === (s = m.data) || void 0 === s || null === (c = s.data) || void 0 === c ? void 0 : c.products) || []).map(function (e) {
                          return T(e);
                        })),
                        e.abrupt("return", { status: y, data: w, updatedTime: g, nextUpdateTime: _, categoryId: b })
                      );
                    case 15:
                      return (e.prev = 15), (e.t0 = e.catch(1)), e.abrupt("return", { status: e.t0.status, data: [] });
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 15]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function O() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              d,
              m = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = m.length > 0 && void 0 !== m[0] ? m[0] : {}),
                        (e.prev = 1),
                        (n = t.params),
                        (s = void 0 === n ? {} : n),
                        (c = i()(t, ["params"])),
                        (e.next = 5),
                        Object(l.a)(h({ method: "POST", url: "".concat(f, "/ext"), header: { "api-version": "v1.1.0" }, data: { action: "product.similar", data: { page_no: 0, page_size: 10, product_id: s.productId } } }, c))
                      );
                    case 5:
                      return (p = e.sent), (u = p.status), (d = (null === (r = p.data) || void 0 === r || null === (a = r.data) || void 0 === a ? void 0 : a.results) || []), e.abrupt("return", { status: u, data: d });
                    case 11:
                      return (e.prev = 11), (e.t0 = e.catch(1)), e.abrupt("return", { status: e.t0.status, data: [] });
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 11]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function T() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      try {
        var t = e.price,
          r = Object(d.b)(t, e.currency);
        return {
          id: Number(e.id),
          aliexpressId: Number(e.aliexpress_id),
          title: e.name,
          thumbnail: e.image,
          minPrice: t,
          minPriceAmount: r,
          currency: e.currency,
          rating: Object(m.b)(e.rating),
          urlDetail: "https://aliexpress.com/item/".concat(e.aliexpress_id, ".html"),
          promotionLink: e.promotion_link,
          order: e.num_of_sold_items,
          weeklyOrder: e.latest_weekly_sale || 0,
          dailySale: e.latest_daily_sale || 0,
          categoryId: e.category_id,
          updatedTime: e.updated_time,
          nextUpdateTime: e.next_update_time,
          statistic: e.statistic,
        };
      } catch (e) {
        return {};
      }
    }
  },
  29: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return h;
    }),
      r.d(t, "b", function () {
        return f;
      }),
      r.d(t, "c", function () {
        return g;
      }),
      r.d(t, "d", function () {
        return _;
      }),
      r.d(t, "e", function () {
        return b;
      });
    var a = r(3),
      o = r.n(a),
      n = r(1),
      s = r.n(n),
      c = r(9),
      i = r.n(c),
      p = r(2),
      u = r.n(p),
      l = r(14),
      d = r.n(l),
      m = r(13),
      y = (r(8), r(59));
    function h(e) {
      return function () {
        return u()(
          s.a.mark(function e(t) {
            var r, a, o, n, c, i, p, u, l, d, y;
            return s.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.shopUriOrigin),
                        (a = void 0 === r ? "" : r),
                        (o = t.page),
                        (n = void 0 === o ? 1 : o),
                        (c = t.limit),
                        (i = void 0 === c ? 20 : c),
                        (e.prev = 1),
                        (p = "https://".concat(a, "/products.json?page=").concat(n, "&limit=").concat(i)),
                        (e.next = 5),
                        Object(m.a)({ url: p, method: "GET" })
                      );
                    case 5:
                      if (200 === (u = e.sent).status) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", []);
                    case 8:
                      return (
                        (l = u.data || {}),
                        (d = l.products),
                        (y = (y = void 0 === d ? [] : d).filter(function (e) {
                          return e && e.images.length > 0;
                        })),
                        e.abrupt("return", y)
                      );
                    case 13:
                      throw ((e.prev = 13), (e.t0 = e.catch(1)), e.t0);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 13]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function f(e) {
      return function () {
        return u()(
          s.a.mark(function e(t) {
            var r, a, o, n, c, i, p;
            return s.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.shopUriOrigin), (a = void 0 === r ? "" : r), (e.prev = 1), (o = "https://".concat(a, "/products.json?limit=250")), (e.next = 5), Object(m.a)({ url: o, method: "GET" });
                    case 5:
                      if (200 === (n = e.sent).status) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", []);
                    case 8:
                      return (
                        (c = n.data || {}),
                        (i = c.products),
                        (p = (p = void 0 === i ? [] : i).filter(function (e) {
                          return e && e.images.length > 0;
                        })),
                        e.abrupt("return", p)
                      );
                    case 13:
                      throw ((e.prev = 13), (e.t0 = e.catch(1)), e.t0);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 13]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function g() {
      return function () {
        return u()(
          s.a.mark(function e() {
            var t,
              r,
              a,
              n,
              c,
              i,
              p,
              u,
              l,
              d,
              m,
              y,
              f,
              g,
              _ = arguments;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (t = _.length > 0 && void 0 !== _[0] ? _[0] : ""), (r = 30), (a = !0), (n = 1), (c = 0), (i = 1e4), (p = {}), (u = []), (l = [10, 50, 100]), (d = 0);
                  case 10:
                    if (!(d < l.length)) {
                      e.next = 23;
                      break;
                    }
                    return (m = l[d]), (e.next = 14), h({ shopUriOrigin: t, page: m, limit: r });
                  case 14:
                    if (((y = e.sent), Object.assign(p, o()({}, m, y)), 0 !== y.length)) {
                      e.next = 19;
                      break;
                    }
                    return (i = m), e.abrupt("break", 23);
                  case 19:
                  case 20:
                    d++, (e.next = 10);
                    break;
                  case 23:
                    f = i;
                  case 24:
                    if (!a) {
                      e.next = 57;
                      break;
                    }
                    if (!p.hasOwnProperty(f)) {
                      e.next = 29;
                      break;
                    }
                    (u = p[f]), (e.next = 33);
                    break;
                  case 29:
                    return (e.next = 31), h({ shopUriOrigin: t, page: f, limit: r });
                  case 31:
                    (u = e.sent), Object.assign(p, o()({}, f, u));
                  case 33:
                    if (!(u.length > 0)) {
                      e.next = 37;
                      break;
                    }
                    (f += i), (e.next = 53);
                    break;
                  case 37:
                    if (((g = []), !p.hasOwnProperty(f - 1))) {
                      e.next = 42;
                      break;
                    }
                    (g = p[f - 1]), (e.next = 46);
                    break;
                  case 42:
                    return (e.next = 44), h({ shopUriOrigin: t, page: f - 1, limit: r });
                  case 44:
                    (g = e.sent), Object.assign(p, o()({}, f - 1, g));
                  case 46:
                    if (!(g.length > 0)) {
                      e.next = 50;
                      break;
                    }
                    return (c = (f - 2) * r + g.length), (a = !1), e.abrupt("continue", 24);
                  case 50:
                    (f -= i), (i = Math.floor(i / 2)), (f += i);
                  case 53:
                    ++n > 100 && (a = !1), (e.next = 24);
                    break;
                  case 57:
                    return e.abrupt("return", c);
                  case 58:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    var _ = function (e, t) {
        var r,
          a = ((null == t ? void 0 : t.image) && (null == t || null === (r = t.image) || void 0 === r ? void 0 : r.src)) || !1;
        !a && (null == t ? void 0 : t.images.length) > 0 && (a = t.images[0] && t.images[0].src);
        var o = null,
          n = null;
        if (t.variants.length > 0) {
          var s = t.variants.map(function (e) {
            return parseFloat(e.price);
          });
          (o = Math.min.apply(Math, i()(s))), (n = Math.max.apply(Math, i()(s)));
        }
        var c = Object(y.a)(o, e.currencyActive);
        return {
          id: t.id,
          handle: t.handle,
          title: t.title,
          body_html: t.body_html,
          vendor: t.vendor,
          product_type: t.product_type,
          tags: [],
          published_at: t.published_at,
          options: t.options,
          variants: t.variants,
          href: "https://".concat(e.shopUriOrigin, "/products/").concat(t.handle),
          image: a,
          images: t.images,
          minPrice: o,
          maxPrice: n,
          priceAmount: c,
          currencyCode: e.currencyActive,
          created_at: t.created_at,
          updatedAt: d()(t.updated_at).fromNow(),
          updatedAtValue: t.updated_at,
          createdAt: d()(t.created_at).fromNow(),
          updatedAtISO: d()(t.updated_at).format(),
          createdAtISO: d()(t.created_at).format(),
        };
      },
      b = function (e, t) {
        var r,
          a = null;
        if (t.variants.length > 0) {
          var o = t.variants.map(function (e) {
            return parseFloat(e.price);
          });
          a = Math.min.apply(Math, i()(o));
        }
        var n = ((null == t ? void 0 : t.image) && (null == t || null === (r = t.image) || void 0 === r ? void 0 : r.src)) || !1;
        !n && (null == t ? void 0 : t.images.length) > 0 && (n = t.images[0] && t.images[0].src);
        var s = Object(y.a)(a, e.currencyActive),
          c = n,
          p = c.lastIndexOf("."),
          u = c.substring(0, p),
          l = c.substring(p, c.length),
          m = "".concat(u, "_").concat("70x70").concat(l);
        return {
          id: t.id,
          href: "https://".concat(e.shopUriOrigin, "/products/").concat(t.handle),
          image: m,
          priceAmount: s,
          title: t.title,
          updatedAt: d()(t.updated_at).fromNow(),
          updatedAtValue: t.updated_at,
          createdAtValue: t.created_at,
        };
      };
  },
  34: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return g;
    }),
      r.d(t, "b", function () {
        return _;
      });
    var a = r(1),
      o = r.n(a),
      n = r(2),
      s = r.n(n),
      c = r(9),
      i = r.n(c),
      p = r(14),
      u = r.n(p),
      l = r(46),
      d = r(22),
      m = r(38);
    function y(e) {
      var t = e.videoId,
        r = e.videoUid;
      if (t && r) return "https://cloud.video.taobao.com/play/u/".concat(r, "/p/1/e/6/t/10301/").concat(t, ".mp4");
    }
    var h = function () {
        var e,
          t,
          r = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document).querySelectorAll("script"),
          a = i()(r).filter(function (e) {
            return e.textContent.includes("window.runParams = {");
          });
        if (!(a = (null === (e = a) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.textContent.trim().replace(/\s\s+/gm, " ")) || null)) return null;
        var o = /window.runParams = { data: (.*?), csrfToken:/gm.exec(a),
          n = (o && o[1]) || null;
        return n ? (n = JSON.parse(n)) : null;
      },
      f = (function () {
        var e = s()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              l,
              f,
              g,
              _,
              b,
              w,
              v,
              S,
              C,
              x,
              k,
              O,
              T,
              j,
              E,
              P,
              F,
              D,
              N,
              A,
              M,
              R,
              U,
              I,
              B,
              L,
              G,
              H,
              z,
              K,
              Y,
              V,
              q,
              W,
              Z,
              $,
              X,
              J,
              Q,
              ee,
              te,
              re,
              ae,
              oe,
              ne,
              se,
              ce,
              ie,
              pe,
              ue,
              le,
              de,
              me,
              ye,
              he,
              fe,
              ge,
              _e,
              be,
              we,
              ve,
              Se,
              Ce,
              xe,
              ke,
              Oe,
              Te,
              je,
              Ee,
              Pe,
              Fe,
              De,
              Ne,
              Ae,
              Me,
              Re,
              Ue,
              Ie,
              Be,
              Le,
              Ge,
              He,
              ze,
              Ke,
              Ye,
              Ve,
              qe,
              We,
              Ze,
              $e = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = $e.length > 0 && void 0 !== $e[0] ? $e[0] : document),
                        (e.prev = 1),
                        (p = h(t)),
                        (l = p.imageModule || {}),
                        (f = l.imagePathList),
                        (g = void 0 === f ? [] : f),
                        (_ = l.videoId),
                        (b = l.videoUid),
                        (w = p.actionModule || {}),
                        (v = w.productId),
                        (S = void 0 === v ? 0 : v),
                        (C = w.categoryId),
                        (x = void 0 === C ? null : C),
                        (k = w.storeNum),
                        (O = void 0 === k ? null : k),
                        (T = w.itemWishedCount),
                        (j = w.totalAvailQuantity),
                        (E = p.crossLinkModule || {}),
                        (P = E.breadCrumbPathList),
                        (F = void 0 === P ? [] : P),
                        (D = p.descriptionModule || {}),
                        (N = D.descriptionUrl),
                        (A = void 0 === N ? "" : N),
                        (M = p.skuModule || {}),
                        (R = M.productSKUPropertyList),
                        (U = void 0 === R ? [] : R),
                        (I = p.titleModule || {}),
                        (B = I.subject),
                        (L = void 0 === B ? "" : B),
                        (G = I.tradeCount),
                        (H = void 0 === G ? 0 : G),
                        (z = p.webEnv || {}),
                        (K = z.language),
                        (Y = void 0 === K ? "en" : K),
                        (V = z.country),
                        (q = void 0 === V ? "" : V),
                        (W = z.currency),
                        (Z = void 0 === W ? "" : W),
                        ($ = (null == p || null === (r = p.titleModule) || void 0 === r ? void 0 : r.feedbackRating) || {}),
                        (X = $.averageStar),
                        (J = void 0 === X ? 0 : X),
                        (Q = $.totalValidNum),
                        (ee = void 0 === Q ? 0 : Q),
                        (te = (null == p || null === (a = p.titleModule) || void 0 === a ? void 0 : a.feedbackRating) || {}),
                        (re = p.priceModule || {}),
                        (ae = re.minAmount),
                        (oe = void 0 === ae ? {} : ae),
                        (ne = re.minActivityAmount),
                        (se = void 0 === ne ? {} : ne),
                        (ce = re.maxActivityAmount),
                        (ie = void 0 === ce ? {} : ce),
                        (pe = re.maxAmount),
                        (ue = void 0 === pe ? {} : pe),
                        (le = p.storeModule || {}),
                        (de = le.sellerAdminSeq),
                        (me = void 0 === de ? null : de),
                        (ye = le.companyId),
                        (he = void 0 === ye ? null : ye),
                        (fe = le.openTime),
                        (ge = void 0 === fe ? "" : fe),
                        (_e = le.topRatedSeller),
                        (be = void 0 !== _e && _e),
                        (we = le.storeURL),
                        (ve = void 0 === we ? "" : we),
                        (Se = le.positiveNum),
                        (Ce = void 0 === Se ? "--" : Se),
                        (xe = le.followingNumber),
                        (ke = void 0 === xe ? "--" : xe),
                        (Oe = le.storeName),
                        (Te = void 0 === Oe ? "" : Oe),
                        (je = le.positiveRate),
                        (Ee = void 0 === je ? "--" : je),
                        (Pe = (null == p ? void 0 : p.specsModule) || {}),
                        (Fe = Pe.props),
                        (De = void 0 === Fe ? [] : Fe),
                        (Ne = (se && se.value) || (oe && oe.value)),
                        (Ae = (ie && ie.value) || (ue && ue.value)),
                        (Me = (se && se.currency) || (oe && oe.currency)),
                        (Re = Object(d.a)(Me)),
                        (Re = (null === (n = Re) || void 0 === n ? void 0 : n.currencySymbol) || ""),
                        (Ue = Object(d.b)(Ne, Me)),
                        (Ie = Object(d.b)(Ae, Me)),
                        (Be = u()(ge, "MMM DD, YYYY").fromNow()),
                        (Le = Object(m.e)(t)),
                        (Ge =
                          Array.isArray(U) &&
                          U.map(function (e) {
                            return e.skuPropertyValues.map(function (e) {
                              return null == e ? void 0 : e.skuPropertyImagePath;
                            });
                          })),
                        (He = i()(new Set(Ge.flat(2).filter(Boolean)))),
                        (ze = t.querySelector(".img-view-wrap video")),
                        (Ke = ze ? ze.src : ""),
                        (Ye = U.find(function (e) {
                          return "Ships From" === e.skuPropertyName;
                        })),
                        (Ye = (Ye = (null === (s = Ye) || void 0 === s ? void 0 : s.skuPropertyValues) || []).map(function (e) {
                          return { displayName: null == e ? void 0 : e.propertyValueDisplayName, code: null == e ? void 0 : e.skuPropertySendGoodsCountryCode };
                        })),
                        (Ve = void 0),
                        _ && b && (Ve = y({ videoId: _, videoUid: b })),
                        (qe = "en_US"),
                        null != p && null !== (c = p.webEnv) && void 0 !== c && c.locale && (qe = null == p || null === (We = p.webEnv) || void 0 === We ? void 0 : We.locale),
                        (Ze = {
                          country: q,
                          currency: Z,
                          avgReview: parseFloat(J),
                          adminSeq: me,
                          currencyRate: null,
                          wishedCount: T,
                          currencyCode: Me,
                          currencySymbol: Re,
                          companyId: he,
                          productId: S,
                          categoryId: x,
                          priceMin: Ne,
                          priceMax: Ae,
                          priceMinAmount: Ue,
                          priceMaxAmount: Ie,
                          quantity: j,
                          specifications: De,
                          productThumbnail: g[0],
                          productPhotos: g,
                          productVideo: Ke,
                          productTitle: L,
                          totalOrders: H,
                          totalReviews: Le || ee,
                          feedbackRating: te,
                          supplierId: O,
                          totalFollowerOfSupplier: ke,
                          supplierName: Te,
                          supplierUrl: ve,
                          shouldTopBranch: be,
                          joinDate: Be,
                          joinDateOrigin: ge,
                          totalFeedbackOfSupplier: Ce,
                          positiveFeedback: Ee,
                          language: Y,
                          breadcrumbs: F,
                          variantsPhoto: He,
                          descriptionUrl: A,
                          shippingFrom: Ye,
                          video: { videoId: _, videoUid: b, videoURL: Ve },
                          locale: qe,
                        }),
                        e.abrupt("return", Ze)
                      );
                    case 39:
                      return (e.prev = 39), (e.t0 = e.catch(1)), e.abrupt("return", {});
                    case 42:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 39]]
            );
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function g() {
      return function () {
        return s()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n = arguments;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (t = n.length > 0 && void 0 !== n[0] ? n[0] : document), (r = n.length > 1 && void 0 !== n[1] ? n[1] : ""), (e.next = 4), f(t);
                  case 4:
                    if ((a = e.sent).productId) {
                      e.next = 9;
                      break;
                    }
                    return (e.next = 8), b(r);
                  case 8:
                    a = e.sent;
                  case 9:
                    return e.abrupt("return", a);
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function _(e) {
      return function () {
        return s()(
          o.a.mark(function e(t) {
            var r, a, n, s, c, i, p, u;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.productId), (a = t.isFullOrigin), (n = t.isOmit), (e.prev = 1), (e.next = 4), Object(l.a)({ method: "GET", url: "https://www.aliexpress.com/item/".concat(r, ".html"), credentials: n ? "omit" : void 0 });
                    case 4:
                      return (s = e.sent), (c = new DOMParser()), (i = c.parseFromString(s.data, "text/html")), (e.next = 9), f(i);
                    case 9:
                      return (p = e.sent), a && ((u = h(i)), Object.assign(p, { originRunParams: u, originDOMtext: s.data })), e.abrupt("return", p);
                    case 14:
                      return (e.prev = 14), (e.t0 = e.catch(1)), e.abrupt("return", {});
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 14]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function b(e) {
      return function () {
        return s()(
          o.a.mark(function e(t) {
            var r, a, n, s, c;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (r = t.replace(".ru", ".com")), (e.next = 4), Object(l.a)({ method: "GET", url: r });
                    case 4:
                      return (a = e.sent), (n = new DOMParser()), (s = n.parseFromString(a.data, "text/html")), (e.next = 9), f(s);
                    case 9:
                      return (c = e.sent), e.abrupt("return", c);
                    case 13:
                      return (e.prev = 13), (e.t0 = e.catch(0)), e.abrupt("return", {});
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 13]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
  },
  35: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return l;
    }),
      r.d(t, "b", function () {
        return d;
      }),
      r.d(t, "a", function () {
        return m;
      });
    var a = r(1),
      o = r.n(a),
      n = r(3),
      s = r.n(n),
      c = r(2),
      i = r.n(c),
      p = (r(13), r(17)),
      u = "access_token";
    function l(e) {
      return function () {
        return i()(
          o.a.mark(function e(t) {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    p.c(s()({}, u, t));
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function d() {
      return function () {
        return i()(
          o.a.mark(function e() {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", p.a(u));
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function m() {
      return function () {
        return i()(
          o.a.mark(function e() {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    p.b(u);
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
  },
  36: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return x;
    }),
      r.d(t, "b", function () {
        return k;
      });
    var a = r(1),
      o = r.n(a),
      n = r(2),
      s = r.n(n),
      c = r(3),
      i = r.n(c),
      p = r(9),
      u = r.n(p),
      l = [
        { name: "Story", theme_store_url: "https://themes.shopify.com//themes/story/styles/chronicle", id: 864, handle: "story", style_id: 1238, style_handle: "chronicle" },
        { name: "Boost", theme_store_url: "https://themes.shopify.com//themes/boost/styles/spark", id: 863, handle: "boost", style_id: 1237, style_handle: "spark" },
        { name: "Cascade", theme_store_url: "https://themes.shopify.com//themes/cascade/styles/classic", id: 859, handle: "cascade", style_id: 1229, style_handle: "classic" },
        { name: "Impulse", theme_store_url: "https://themes.shopify.com//themes/impulse/styles/modern", id: 857, handle: "impulse", style_id: 1222, style_handle: "modern" },
        { name: "Artisan", theme_store_url: "https://themes.shopify.com//themes/artisan/styles/barcelona", id: 856, handle: "artisan", style_id: 1209, style_handle: "barcelona" },
        { name: "Prestige", theme_store_url: "https://themes.shopify.com//themes/prestige/styles/allure", id: 855, handle: "prestige", style_id: 1202, style_handle: "allure" },
        { name: "Reach", theme_store_url: "https://themes.shopify.com//themes/reach/styles/natural", id: 853, handle: "reach", style_id: 1212, style_handle: "natural" },
        { name: "Galleria", theme_store_url: "https://themes.shopify.com//themes/galleria/styles/empire", id: 851, handle: "galleria", style_id: 1185, style_handle: "empire" },
        { name: "Modular", theme_store_url: "https://themes.shopify.com//themes/modular/styles/mayfair", id: 849, handle: "modular", style_id: 1177, style_handle: "mayfair" },
        { name: "Motion", theme_store_url: "https://themes.shopify.com//themes/motion/styles/classic", id: 847, handle: "motion", style_id: 1171, style_handle: "classic" },
        { name: "Loft", theme_store_url: "https://themes.shopify.com//themes/loft/styles/nashville", id: 846, handle: "loft", style_id: 1164, style_handle: "nashville" },
        { name: "Split", theme_store_url: "https://themes.shopify.com//themes/split/styles/cuber", id: 842, handle: "split", style_id: 1152, style_handle: "cuber" },
        { name: "Empire", theme_store_url: "https://themes.shopify.com//themes/empire/styles/supply", id: 838, handle: "empire", style_id: 1146, style_handle: "supply" },
        { name: "Venue", theme_store_url: "https://themes.shopify.com//themes/venue/styles/morning", id: 836, handle: "venue", style_id: 1137, style_handle: "morning" },
        { name: "Narrative", theme_store_url: "https://themes.shopify.com//themes/narrative/styles/warm", id: 829, handle: "narrative", style_id: 1122, style_handle: "warm" },
        { name: "Local", theme_store_url: "https://themes.shopify.com//themes/local/styles/light", id: 833, handle: "local", style_id: 1113, style_handle: "light" },
        { name: "Editorial", theme_store_url: "https://themes.shopify.com//themes/editorial/styles/agency", id: 827, handle: "editorial", style_id: 1109, style_handle: "agency" },
        { name: "Handy", theme_store_url: "https://themes.shopify.com//themes/handy/styles/light", id: 826, handle: "handy", style_id: 1125, style_handle: "light" },
        { name: "Trademark", theme_store_url: "https://themes.shopify.com//themes/trademark/styles/gold", id: 816, handle: "trademark", style_id: 1092, style_handle: "gold" },
        { name: "Capital", theme_store_url: "https://themes.shopify.com//themes/capital/styles/prague", id: 812, handle: "capital", style_id: 1084, style_handle: "prague" },
        { name: "Vogue", theme_store_url: "https://themes.shopify.com//themes/vogue/styles/elegant", id: 808, handle: "vogue", style_id: 1070, style_handle: "elegant" },
        { name: "Debut", theme_store_url: "https://themes.shopify.com//themes/debut/styles/default", id: 796, handle: "debut", style_id: 1049, style_handle: "default" },
        { name: "Flow", theme_store_url: "https://themes.shopify.com//themes/flow/styles/byron", id: 801, handle: "flow", style_id: 1056, style_handle: "byron" },
        { name: "Lorenza", theme_store_url: "https://themes.shopify.com//themes/lorenza/styles/air", id: 798, handle: "lorenza", style_id: 1206, style_handle: "air" },
        { name: "Launch", theme_store_url: "https://themes.shopify.com//themes/launch/styles/cool", id: 793, handle: "launch", style_id: 1046, style_handle: "cool" },
        { name: "Ira", theme_store_url: "https://themes.shopify.com//themes/ira/styles/street", id: 790, handle: "ira", style_id: 1143, style_handle: "street" },
        { name: "Palo Alto", theme_store_url: "https://themes.shopify.com//themes/palo-alto/styles/palo-alto", id: 777, handle: "palo-alto", style_id: 1028, style_handle: "palo-alto" },
        { name: "Jumpstart", theme_store_url: "https://themes.shopify.com//themes/jumpstart/styles/jumpstart", id: 782, handle: "jumpstart", style_id: 1032, style_handle: "jumpstart" },
        { name: "Maker", theme_store_url: "https://themes.shopify.com//themes/maker/styles/books", id: 765, handle: "maker", style_id: 1006, style_handle: "books" },
        { name: "Label", theme_store_url: "https://themes.shopify.com//themes/label/styles/record", id: 773, handle: "label", style_id: 1013, style_handle: "record" },
        { name: "Venture", theme_store_url: "https://themes.shopify.com//themes/venture/styles/snowboards", id: 775, handle: "venture", style_id: 1019, style_handle: "snowboards" },
        { name: "Boundless", theme_store_url: "https://themes.shopify.com//themes/boundless/styles/black-white", id: 766, handle: "boundless", style_id: 1010, style_handle: "black-white" },
        { name: "Pipeline", theme_store_url: "https://themes.shopify.com//themes/pipeline/styles/light", id: 739, handle: "pipeline", style_id: 1044, style_handle: "light" },
        { name: "Simple", theme_store_url: "https://themes.shopify.com//themes/simple/styles/light", id: 578, handle: "simple", style_id: 644, style_handle: "light" },
        { name: "Colors", theme_store_url: "https://themes.shopify.com//themes/colors/styles/generic", id: 757, handle: "colors", style_id: 1183, style_handle: "generic" },
        { name: "Kagami", theme_store_url: "https://themes.shopify.com//themes/kagami/styles/kyoto", id: 747, handle: "kagami", style_id: 999, style_handle: "kyoto" },
        { name: "District", theme_store_url: "https://themes.shopify.com//themes/district/styles/district", id: 735, handle: "district", style_id: 948, style_handle: "district" },
        { name: "Canopy", theme_store_url: "https://themes.shopify.com//themes/canopy/styles/elda", id: 732, handle: "canopy", style_id: 940, style_handle: "elda" },
        { name: "Brooklyn", theme_store_url: "https://themes.shopify.com//themes/brooklyn/styles/classic", id: 730, handle: "brooklyn", style_id: 1140, style_handle: "classic" },
        { name: "Kingdom", theme_store_url: "https://themes.shopify.com//themes/kingdom/styles/king", id: 725, handle: "kingdom", style_id: 911, style_handle: "king" },
        { name: "Grid", theme_store_url: "https://themes.shopify.com//themes/grid/styles/light", id: 718, handle: "grid", style_id: 1132, style_handle: "light" },
        { name: "Pop", theme_store_url: "https://themes.shopify.com//themes/pop/styles/bone", id: 719, handle: "pop", style_id: 900, style_handle: "bone" },
        { name: "ShowTime", theme_store_url: "https://themes.shopify.com//themes/showtime/styles/cooktime", id: 687, handle: "showtime", style_id: 835, style_handle: "cooktime" },
        { name: "Focal", theme_store_url: "https://themes.shopify.com//themes/focal/styles/standard", id: 714, handle: "focal", style_id: 895, style_handle: "standard" },
        { name: "Pacific", theme_store_url: "https://themes.shopify.com//themes/pacific/styles/cool", id: 705, handle: "pacific", style_id: 870, style_handle: "cool" },
        { name: "California", theme_store_url: "https://themes.shopify.com//themes/california/styles/california", id: 691, handle: "california", style_id: 934, style_handle: "california" },
        { name: "Icon", theme_store_url: "https://themes.shopify.com//themes/icon/styles/dolce", id: 686, handle: "icon", style_id: 819, style_handle: "dolce" },
        { name: "Parallax", theme_store_url: "https://themes.shopify.com//themes/parallax/styles/aspen", id: 688, handle: "parallax", style_id: 839, style_handle: "aspen" },
        { name: "Supply", theme_store_url: "https://themes.shopify.com//themes/supply/styles/blue", id: 679, handle: "supply", style_id: 808, style_handle: "blue" },
        { name: "Minimal", theme_store_url: "https://themes.shopify.com//themes/minimal/styles/vintage", id: 380, handle: "minimal", style_id: 420, style_handle: "vintage" },
        { name: "Showcase", theme_store_url: "https://themes.shopify.com//themes/showcase/styles/beard", id: 677, handle: "showcase", style_id: 806, style_handle: "beard" },
        { name: "Alchemy", theme_store_url: "https://themes.shopify.com//themes/alchemy/styles/swimclub", id: 657, handle: "alchemy", style_id: 768, style_handle: "swimclub" },
        { name: "Startup", theme_store_url: "https://themes.shopify.com//themes/startup/styles/home", id: 652, handle: "startup", style_id: 765, style_handle: "home" },
        { name: "Testament", theme_store_url: "https://themes.shopify.com//themes/testament/styles/genesis", id: 623, handle: "testament", style_id: 1194, style_handle: "genesis" },
        { name: "Blockshop", theme_store_url: "https://themes.shopify.com//themes/blockshop/styles/beauty", id: 606, handle: "blockshop", style_id: 741, style_handle: "beauty" },
        { name: "Retina", theme_store_url: "https://themes.shopify.com//themes/retina/styles/austin", id: 601, handle: "retina", style_id: 691, style_handle: "austin" },
        { name: "Mr Parker", theme_store_url: "https://themes.shopify.com//themes/mr-parker/styles/wardrobe", id: 567, handle: "mr-parker", style_id: 634, style_handle: "wardrobe" },
        { name: "Providence", theme_store_url: "https://themes.shopify.com//themes/providence/styles/seaside", id: 587, handle: "providence", style_id: 653, style_handle: "seaside" },
        { name: "Symmetry", theme_store_url: "https://themes.shopify.com//themes/symmetry/styles/beatnik", id: 568, handle: "symmetry", style_id: 635, style_handle: "beatnik" },
        { name: "Atlantic", theme_store_url: "https://themes.shopify.com//themes/atlantic/styles/chic", id: 566, handle: "atlantic", style_id: 1167, style_handle: "chic" },
        { name: "Vantage", theme_store_url: "https://themes.shopify.com//themes/vantage/styles/mono", id: 459, handle: "vantage", style_id: 521, style_handle: "mono" },
        { name: "Mobilia", theme_store_url: "https://themes.shopify.com//themes/mobilia/styles/tokyo", id: 464, handle: "mobilia", style_id: 508, style_handle: "tokyo" },
        { name: "Editions", theme_store_url: "https://themes.shopify.com//themes/editions/styles/light", id: 457, handle: "editions", style_id: 994, style_handle: "light" },
        { name: "Masonry", theme_store_url: "https://themes.shopify.com//themes/masonry/styles/dragonfly", id: 450, handle: "masonry", style_id: 881, style_handle: "dragonfly" },
        { name: "Envy", theme_store_url: "https://themes.shopify.com//themes/envy/styles/stockholm", id: 411, handle: "envy", style_id: 684, style_handle: "stockholm" },
        { name: "Responsive", theme_store_url: "https://themes.shopify.com//themes/responsive/styles/london", id: 304, handle: "responsive", style_id: 1200, style_handle: "london" },
        { name: "Expression", theme_store_url: "https://themes.shopify.com//themes/expression/styles/oxford", id: 230, handle: "expression", style_id: 456, style_handle: "oxford" },
        { name: "Fashionopolism", theme_store_url: "https://themes.shopify.com//themes/fashionopolism/styles/empire", id: 141, handle: "fashionopolism", style_id: 704, style_handle: "empire" },
        { name: "Sunrise", theme_store_url: "https://themes.shopify.com//themes/sunrise/styles/spring", id: 57, handle: "sunrise", style_id: 601, style_handle: "spring" },
      ],
      d = (r(13), r(8));
    var m = r(58);
    function y(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function h(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? y(Object(r), !0).forEach(function (t) {
              i()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : y(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    function f(e) {
      try {
        var t = e.querySelector("#shopify-features");
        return (t && JSON.parse(t.textContent)) || {};
      } catch (e) {
        return {};
      }
    }
    function g(e, t) {
      var r = e.querySelector('[property="og:site_name"]');
      return r ? r.content : (r = t.replace(".myshopify.com", ""));
    }
    function _() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        t = {},
        r = e.querySelector("title");
      if (r && "string" == typeof r.textContent) {
        var a = null == r ? void 0 : r.textContent.trim();
        Object.assign(t, { title: a });
      }
      var o = e.querySelector("meta[name='description']");
      if (o && "string" == typeof o.getAttribute("content")) {
        var n = o.getAttribute("content").trim();
        Object.assign(t, { description: n });
      }
      return t;
    }
    function b() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        t = (function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
          try {
            var t = e.documentElement.innerHTML || "",
              r = /facebook.com(.*?)"/gm.exec(t),
              a = /fb.me(.*?)"/gm.exec(t),
              o = /fb.com(.*?)"/gm.exec(t),
              n = null;
            if ((r && r[0] && -1 == r[0].indexOf("facebook.com/sharer") ? (n = (n = r[0]).replace(/"/g, "")) : a && a[0] ? (n = (n = a[0]).replace(/"/g, "")) : o && o[0] && (n = (n = o[0]).replace(/"/g, "")), n)) {
              var s = n.split("/");
              if (2 === s.length || (3 === s.length && "" === s[2])) return { social: "facebook", url: "https://".concat(n) };
            }
            return;
          } catch (e) {
            return;
          }
        })(e),
        r = (function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
          try {
            var t = e.documentElement.innerHTML || "",
              r = /instagram.com(.*?)"/gm.exec(t);
            if (r && r[0] && -1 == r[0].indexOf("instagram.com/share")) {
              var a = r[0],
                o = (a = a.replace(/"/g, "")).split("/");
              if (2 === o.length || (3 === o.length && "" === o[2])) return { social: "instagram", url: "https://".concat(a) };
            }
            return;
          } catch (e) {
            return;
          }
        })(e),
        a = (function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
          try {
            var t = e.documentElement.innerHTML || "",
              r = /twitter.com(.*?)"/gm.exec(t);
            if (r && r[0] && -1 == r[0].indexOf("twitter.com/share")) {
              var a = r[0],
                o = (a = a.replace(/"/g, "")).split("/");
              if (2 === o.length || (3 === o.length && "" === o[2])) return { social: "twitter", url: "https://".concat(a) };
            }
            return;
          } catch (e) {
            return;
          }
        })(e),
        o = (function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
          try {
            var t = e.documentElement.innerHTML || "",
              r = /youtube.com\/user(.*?)"/gm.exec(t) || /youtube.com\/channel(.*?)"/gm.exec(t);
            if (r && r[0]) {
              var a = r[0],
                o = (a = a.replace(/"/g, "")).split("/");
              if (2 === o.length || (3 === o.length && "" === o[2])) return { social: "youtube", url: "https://".concat(a) };
            }
            return;
          } catch (e) {
            return;
          }
        })(e),
        n = (function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
          try {
            var t = e.documentElement.innerHTML || "",
              r = /linkedin.com(.*?)"/gm.exec(t);
            if (r && r[0] && -1 == r[0].indexOf("linkedin.com/shareArticle")) {
              var a = r[0],
                o = (a = a.replace(/"/g, "")).split("/");
              if (2 === o.length || (3 === o.length && "" === o[2])) return { social: "linkedin", url: "https://".concat(a) };
            }
            return;
          } catch (e) {
            return;
          }
        })(e),
        s = (function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
          try {
            var t = e.documentElement.innerHTML || "",
              r = /pinterest.co(.*?)"/gm.exec(t);
            if (r && r[0] && -1 == r[0].indexOf("pinterest.com/pin/create/button")) {
              var a = r[0],
                o = (a = a.replace(/"/g, "")).split("/");
              if (2 === o.length || (3 === o.length && "" === o[2])) return { social: "pinterest", url: "https://".concat(a) };
            }
            return;
          } catch (e) {
            return;
          }
        })(e),
        c = [t, r, a, o, n, s];
      return (c = u()(new Set(c))).filter(Boolean);
    }
    function w(e, t) {
      for (var r = "", a = 0; a < e.length; a++)
        if (e[a].id == t) {
          r = e[a];
          break;
        }
      return r;
    }
    function v(e) {
      return /^\/\/cdn/gi.test(e) ? "https:".concat(e) : e;
    }
    function S(e) {
      return e.getAttribute("src") ? e.getAttribute("src").trim() : e.getAttribute("data-srcset") ? e.getAttribute("data-srcset").trim() : void 0;
    }
    function C(e) {
      var t = e.querySelectorAll("a"),
        r = !0;
      if (0 === t.length)
        return (function (e) {
          var t = e.querySelectorAll("img");
          if (0 === t.length) return [];
          var r = u()(t).map(function (e) {
              var t = S(e);
              return "logo" === e.getAttribute("itemprop") || (t && t.includes("cdn.shopify.com/s/files/") && t.includes("/logo")) ? v(t) : void 0;
            }),
            a = [];
          return r.filter(function (e) {
            if (e && !a.includes(e)) return a.push(e), e;
          });
        })(e);
      var a = u()(t).map(function (e) {
          if (r && "/" === e.getAttribute("href")) {
            var t = e.querySelector("img");
            if (t) {
              var a = S(t);
              if ("logo" === t.getAttribute("itemprop")) return (r = !1), v(a);
              if (a && a.includes("cdn.shopify.com/s/files/")) return (r = !1), v(a);
            }
          }
        }),
        o = [];
      return a.filter(function (e) {
        if (e && !o.includes(e)) return o.push(e), e;
      });
    }
    function x(e) {
      var t = e.doc,
        r = void 0 === t ? document : t,
        a = e.socials,
        o = void 0 === a || a;
      try {
        var n,
          s = null === (n = r.documentElement) || void 0 === n ? void 0 : n.textContent,
          c = (function (e) {
            var t = /window.ShopifyAnalytics.meta.currency = '(.*?)';$/m.exec(s);
            if (t) return t[1];
            var r = document.querySelector('[property="og:price:currency"]');
            return r ? r.getAttribute("content") : "";
          })(),
          p = (function (e) {
            var t = /Shopify.theme = (.*?);$/m.exec(s),
              r = void 0;
            try {
              r = (t && JSON.parse(t[1])) || {};
            } catch (e) {
              return;
            }
            return r;
          })(),
          u = "",
          y = "",
          v = "",
          S = "",
          x = "";
        p && ((u = null == p ? void 0 : p.name), (y = null == p ? void 0 : p.id), (v = null == p ? void 0 : p.theme_store_id), (x = ((S = w(l, v)) && S.theme_store_url) || null));
        var k = C(r),
          O = f(r),
          T =
            (function (e) {
              try {
                var t = e.querySelector("link[rel='canonical']");
                if (t && t.hasAttribute("href")) {
                  var r = t.getAttribute("href");
                  return new URL(Object(d.j)(r)).hostname;
                }
                return null;
              } catch (e) {
                return null;
              }
            })(r) || O.domain,
          j =
            (function (e) {
              var t = /Shopify.shop = (.*?);$/m.exec(s),
                r = "";
              try {
                r = (t && JSON.parse(t[1])) || "";
              } catch (e) {}
              return r;
            })() || T,
          E = O.shopId;
        if (!j) return;
        var P = g(r, j),
          F = _(r),
          D = F.title,
          N = void 0 === D ? "" : D,
          A = F.description,
          M = void 0 === A ? "" : A,
          R = {
            shopUriOrigin: j,
            shopUri: T,
            shopName: P,
            themeName: u,
            themeId: y,
            themeUri: x,
            themeStoreId: v,
            storeId: E,
            currencyActive: c,
            bestSellingUrl: "https://".concat(j, "/collections/all?sort_by=best-selling"),
            facebook: null,
            twitter: null,
            instagram: null,
            title: N,
            description: M,
            logos: k,
          };
        o &&
          b(r).forEach(function (e) {
            R = h(h({}, R), {}, i()({}, e.social, { url: e.url }));
          });
        var U = Object(m.a)(r);
        return (R = h(h({}, R), {}, { appUsed: U }));
      } catch (e) {
        return;
      }
    }
    function k(e) {
      return function () {
        return s()(
          o.a.mark(function e(t) {
            var r, a, n, s, c, p, u, d, y, v, S, x, k, T, j, E, P, F, D, N, A, M, R, U, I, B, L;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((r = t.doc), (a = void 0 === r ? document : r), (n = t.socials), (s = void 0 === n || n), (e.prev = 1), a)) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      return (e.next = 6), O();
                    case 6:
                      if (
                        ((p = e.sent),
                        (u = ""),
                        (d = ""),
                        (y = ""),
                        (v = ""),
                        (S = ""),
                        null != p &&
                          p.theme &&
                          ((u = null == p || null === (x = p.theme) || void 0 === x ? void 0 : x.name),
                          (d = null == p || null === (k = p.theme) || void 0 === k ? void 0 : k.id),
                          (y = null == p || null === (T = p.theme) || void 0 === T ? void 0 : T.theme_store_id),
                          (v = w(l, y)),
                          (S = (v && v.theme_store_url) || null)),
                        (j = C(a)),
                        (E = f(a)),
                        (P = window.location.host),
                        (F = (null == p ? void 0 : p.shop) || P),
                        (D = E.shopId),
                        F)
                      ) {
                        e.next = 20;
                        break;
                      }
                      return e.abrupt("return", void 0);
                    case 20:
                      return (
                        (N = g(a, F)),
                        (A = _(a)),
                        (M = A.title),
                        (R = void 0 === M ? "" : M),
                        (U = A.description),
                        (I = void 0 === U ? "" : U),
                        (B = {
                          shopUriOrigin: F,
                          shopUri: P,
                          shopName: N,
                          themeName: u,
                          themeId: d,
                          themeUri: S,
                          themeStoreId: y,
                          storeId: D,
                          currencyActive: null == p || null === (c = p.currency) || void 0 === c ? void 0 : c.active,
                          bestSellingUrl: "https://".concat(F, "/collections/all?sort_by=best-selling"),
                          facebook: null,
                          twitter: null,
                          instagram: null,
                          title: R,
                          description: I,
                          logos: j,
                        }),
                        s &&
                          b(a).forEach(function (e) {
                            B = h(h({}, B), {}, i()({}, e.social, { url: e.url }));
                          }),
                        (L = Object(m.a)(a)),
                        (B = h(h({}, B), {}, { appUsed: L })),
                        e.abrupt("return", B)
                      );
                    case 29:
                      return (e.prev = 29), (e.t0 = e.catch(1)), e.abrupt("return", void 0);
                    case 33:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 29]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function O() {
      try {
        var e = document.createElement("script"),
          t = document.createTextNode(
            "\n            var d_extah = document.createElement('div');\n            d_extah.id = 'extah-shopify';\n            d_extah.style.width = 0;\n            d_extah.style.height = 0;\n            d_extah.style.overflow = 'hidden';\n            var c_extao = document.createTextNode(JSON.stringify(window.Shopify));\n            d_extah.appendChild(c_extao);\n            var b_extah = document.body\n            b_extah.insertAdjacentElement('beforeend', d_extah);\n        "
          );
        e.appendChild(t);
        var r = document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(e, r);
        var a = document.querySelector("#extah-shopify"),
          o = a.innerHTML;
        return a.remove(), e.remove(), JSON.parse(o) || null;
      } catch (e) {}
    }
  },
  38: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return h;
    }),
      r.d(t, "e", function () {
        return f;
      }),
      r.d(t, "b", function () {
        return g;
      }),
      r.d(t, "f", function () {
        return _;
      }),
      r.d(t, "d", function () {
        return b;
      }),
      r.d(t, "a", function () {
        return w;
      });
    var a = r(3),
      o = r.n(a),
      n = r(1),
      s = r.n(n),
      c = r(2),
      i = r.n(c),
      p = r(13),
      u = r(33),
      l = r.n(u),
      d = r(8);
    function m(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m(Object(r), !0).forEach(function (t) {
              o()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : m(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    r(22);
    var h = (function () {
        var e = i()(
          s.a.mark(function e(t) {
            var r, a, o, n, c, i, p, u, d, m, y, h, f, g, _, b, w;
            return s.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.productId),
                        (a = t.count),
                        (o = void 0 === a ? 1 : a),
                        (n = t.minPrice),
                        (c = t.maxPrice),
                        (i = t.language),
                        (p = void 0 === i ? "www" : i),
                        (u = t.country),
                        (d = void 0 === u ? "US" : u),
                        (m = t.currency),
                        (y = void 0 === m ? "EUR" : m),
                        (p = "en" === p ? "www" : p),
                        (h = encodeURI(
                          "https://"
                            .concat(p, ".aliexpress.com/aeglodetailweb/api/logistics/freight?productId=")
                            .concat(r, "&count=")
                            .concat(o, "&minPrice=")
                            .concat(n, "&maxPrice=")
                            .concat(c, "&country=")
                            .concat(d, "&provinceCode=&cityCode=&tradeCurrency=")
                            .concat(y, '&userScene=PC_DETAIL&ext={"p1":"')
                            .concat(n, '","p2":"')
                            .concat(c, '","p3":"')
                            .concat(y, '"}')
                        )),
                        (e.prev = 3),
                        (e.next = 6),
                        l()({ method: "GET", url: h })
                      );
                    case 6:
                      if (200 == (_ = e.sent).status) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 9:
                      return (
                        (b = (null == _ || null === (f = _.data) || void 0 === f || null === (g = f.body) || void 0 === g ? void 0 : g.freightResult) || []),
                        (w = b.sort(function (e, t) {
                          var r, a;
                          return (null == e || null === (r = e.freightAmount) || void 0 === r ? void 0 : r.value) - (null == t || null === (a = t.freightAmount) || void 0 === a ? void 0 : a.value);
                        })),
                        e.abrupt("return", { data: b, minFreight: null == w ? void 0 : w[0] })
                      );
                    case 14:
                      return (e.prev = 14), (e.t0 = e.catch(3)), e.abrupt("return", null);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, 14]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
          t = e.querySelector("#j-customer-reviews-trigger .rantings-num"),
          r = e.querySelector("[itemprop='reviewCount']"),
          a = e.querySelector(".product-reviewer-reviews");
        return t ? Object(d.l)(t.textContent) : r ? Object(d.l)(r.textContent) : a ? Object(d.l)(a.textContent) : 0;
      };
    function g(e) {
      return function () {
        return i()(
          s.a.mark(function e(t) {
            var r, a, o, n, c, i, u, l, d, m, h;
            return s.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.productId),
                        (a = t.companyId),
                        (o = t.limit),
                        (n = void 0 === o ? 50 : o),
                        (c = t.language),
                        (i = void 0 === c ? "en" : c),
                        (e.prev = 1),
                        (l = "https://gpsfront.aliexpress."
                          .concat("ru" === i ? "ru" : "com", "/getI2iRecommendingResults.do?currentItemList=")
                          .concat(r, "&companyId=")
                          .concat(a, "&scenario=pcDetailLeftTopSell&limit=")
                          .concat(n, "&offset=0")),
                        (e.next = 6),
                        Object(p.a)({ method: "GET", url: l })
                      );
                    case 6:
                      if (((d = e.sent), 200 === (m = d.status))) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return", { status: m, data: [] });
                    case 10:
                      return (
                        (h = (h = (null === (u = d.data) || void 0 === u ? void 0 : u.results) || [])
                          .map(function (e) {
                            return y(y({}, e), {}, { orders: Number(e.orders) });
                          })
                          .sort(function (e, t) {
                            return t.orders - e.orders;
                          })),
                        e.abrupt("return", { status: m, data: h })
                      );
                    case 15:
                      return (e.prev = 15), (e.t0 = e.catch(1)), e.abrupt("return", { status: 500, data: [] });
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 15]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function _(e) {
      return function () {
        return i()(
          s.a.mark(function e(t) {
            var r, a, o, n, c, i, u, l, d;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = t.productId),
                      (o = t.companyId),
                      (n = t.limit),
                      (c = void 0 === n ? 50 : n),
                      (i = t.language),
                      (u = "https://gpsfront.aliexpress."
                        .concat("ru" === (void 0 === i ? "en" : i) ? "ru" : "com", "/getI2iRecommendingResults.do?currentItemList=")
                        .concat(a, "&companyId=")
                        .concat(o, "&recommendType=toMine&scenario=pcDetailLeftTrendProduct&limit=")
                        .concat(c, "&offset=0")),
                      (e.next = 5),
                      Object(p.a)({ method: "GET", url: u })
                    );
                  case 5:
                    if (((l = e.sent), 200 === (d = l.status))) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("return", { status: d, data: [] });
                  case 9:
                    return e.abrupt("return", { status: d, data: (null === (r = l.data) || void 0 === r ? void 0 : r.results) || [] });
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    var b = (function () {
      var e = i()(
        s.a.mark(function e(t) {
          var r, a, o, n, c, i, u;
          return s.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (r = t.supplierId), (a = "https://www.aliexpress.com/store/all-wholesale-products/".concat(r, ".html")), (e.next = 4), Object(p.a)({ method: "GET", url: a, withCredentials: !0 });
                case 4:
                  if (200 === (o = e.sent).status) {
                    e.next = 7;
                    break;
                  }
                  return e.abrupt("return", null);
                case 7:
                  if (((n = new DOMParser()), (c = n.parseFromString(o.data, "text/html")), !(i = c.querySelector("#your-choice .result-info")))) {
                    e.next = 15;
                    break;
                  }
                  if ((u = Object(d.l)(i.textContent)) || 0 == u) {
                    e.next = 14;
                    break;
                  }
                  return e.abrupt("return", 0);
                case 14:
                  return e.abrupt("return", u);
                case 15:
                  return e.abrupt("return", 0);
                case 16:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })();
    function w(e) {
      return function () {
        return i()(
          s.a.mark(function e(t) {
            var r, a, o;
            return s.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.adminSeq), (e.prev = 1), (a = "https://feedback.aliexpress.com/display/evaluationDsrAjaxService.htm?ownerAdminSeq=".concat(r)), (e.next = 5), l()({ method: "GET", url: a });
                    case 5:
                      if (200 === (o = e.sent).status) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", {});
                    case 8:
                      return e.abrupt("return", (null == o ? void 0 : o.data) || {});
                    case 11:
                      return (e.prev = 11), (e.t0 = e.catch(1)), e.abrupt("return", {});
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 11]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
  },
  39: function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return o;
    }),
      r.d(t, "c", function () {
        return n;
      }),
      r.d(t, "d", function () {
        return s;
      }),
      r.d(t, "e", function () {
        return c;
      }),
      r.d(t, "f", function () {
        return i;
      }),
      r.d(t, "a", function () {
        return p;
      });
    var a = r(8);
    function o(e) {
      try {
        return (e = e || window.location.href), /^((https?:\/\/)|(\/\/))([a-zA-Z0-9]+)?(.?aliexpress.)[a-zA-Z]+/g.test(e);
      } catch (e) {
        return !1;
      }
    }
    function n(e) {
      try {
        return (e = e || window.location.href), /^((https?:)?\/\/)([a-zA-Z0-9]+)?(.?aliexpress.)[a-zA-Z]+\/[a-zA-Z]+\/(category)?\/[0-9]+(.html)+/g.test(e);
      } catch (e) {
        return !1;
      }
    }
    function s(e) {
      try {
        return (e = (e = e || window.location.href).replace(/i(tem)?\/(.*?)\//i, "item/")), (e = Object(a.j)(e)), /^((https?:)?\/\/)([a-zA-Z0-9]+)?(.?aliexpress.)[a-zA-Z]+\/i(tem)?\/[0-9]+(.html)/g.test(e);
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      try {
        if (!o((e = e || window.location.href))) return !1;
        var t = document.getElementById("search-key");
        return !!t && t.value.trim().length > 0;
      } catch (e) {
        return !1;
      }
    }
    function i(e) {
      try {
        if (!s(e)) return;
        e = Object(a.j)(e);
        var t = new URL(e).pathname.replace(/i(tem)?\/(.*?)\//i, "item/");
        return Object(a.l)(t);
      } catch (e) {
        return;
      }
    }
    function p(e) {
      setTimeout(function () {
        var t = document.createElement("script");
        (t.type = "text/javascript"), (t.async = !0);
        var r = document.createTextNode("window.dataLayer = undefined;");
        t.appendChild(r);
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(t, a);
        var o = document.createElement("script");
        (o.type = "text/javascript"), (o.async = !0), (o.src = "https://www.googletagmanager.com/gtag/js?id=".concat(e));
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(o, n);
        var s = document.createElement("script");
        (s.type = "text/javascript"), (s.async = !0);
        var c = "\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', '".concat(e, "');\n      "),
          i = document.createTextNode(c);
        s.appendChild(i);
        var p = document.getElementsByTagName("script")[0];
        p.parentNode.insertBefore(s, p);
      }, 3e3);
    }
  },
  46: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return m;
    });
    var a = r(1),
      o = r.n(a),
      n = r(3),
      s = r.n(n),
      c = r(12),
      i = r.n(c),
      p = r(2),
      u = r.n(p);
    function l(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? l(Object(r), !0).forEach(function (t) {
              s()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : l(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    function m() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a = arguments;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                      (r = a.length > 1 ? a[1] : void 0),
                      e.abrupt(
                        "return",
                        new Promise(
                          (function () {
                            var e = u()(
                              o.a.mark(function e(a) {
                                var n, s, c, p, u, l, m, h, f, g, _;
                                return o.a.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (!(null === (n = chrome.runtime) || void 0 === n ? void 0 : n.restart) || !(null === (s = chrome.runtime) || void 0 === s ? void 0 : s.restartAfterDelay)) {
                                            e.next = 23;
                                            break;
                                          }
                                          return (
                                            (e.prev = 3),
                                            (c = t.url),
                                            (p = void 0 === c ? "" : c),
                                            (u = t.headers),
                                            (l = void 0 === u ? {} : u),
                                            (m = t.method),
                                            (h = void 0 === m ? "GET" : m),
                                            (f = i()(t, ["url", "headers", "method"])),
                                            (e.next = 7),
                                            fetch(p, d({ method: h, headers: d({ "x-app-language": "en".toUpperCase() }, l) }, f))
                                          );
                                        case 7:
                                          return (g = e.sent), (e.t0 = g.status), (e.next = 11), y(g);
                                        case 11:
                                          (e.t1 = e.sent), (_ = { status: e.t0, data: e.t1 }), a(_), r && r(_), (e.next = 21);
                                          break;
                                        case 17:
                                          (e.prev = 17), (e.t2 = e.catch(3)), a(e.t2), r && r(e.t2);
                                        case 21:
                                          e.next = 24;
                                          break;
                                        case 23:
                                          chrome.runtime.sendMessage({ type: "SEND_REQUEST_BY_FETCH", requestOptions: t }, function (e) {
                                            return a(e);
                                          });
                                        case 24:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[3, 17]]
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        )
                      )
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function y(e) {
      return function () {
        return u()(
          o.a.mark(function e(t) {
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), JSON.parse(t), (e.next = 4), t.json();
                    case 4:
                      return e.abrupt("return", e.sent);
                    case 7:
                      return (e.prev = 7), (e.t0 = e.catch(0)), (e.next = 11), t.text();
                    case 11:
                      return e.abrupt("return", e.sent);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    r(17), r(53);
  },
  48: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return a;
    }),
      r.d(t, "d", function () {
        return o;
      }),
      r.d(t, "c", function () {
        return n;
      }),
      r.d(t, "f", function () {
        return s;
      }),
      r.d(t, "g", function () {
        return c;
      }),
      r.d(t, "b", function () {
        return i;
      }),
      r.d(t, "e", function () {
        return p;
      });
    var a = { GET_TABS: "GET_TABS", SENDER_FROM_TAB: "SENDER_FROM_TAB", UPDATE_TAB: "UPDATE_TAB", CREATE_TAB: "CREATE_TAB", REMOVE_TAB: "REMOVE_TAB", GET_CURRENT_TAB: "GET_CURRENT_TAB" };
    function o() {
      chrome.runtime.onMessage.addListener(function (e, t, r) {
        !(function (e, t, r) {
          try {
            var o = e.type,
              i = void 0 === o ? "" : o,
              p = e.options,
              u = void 0 === p ? {} : p,
              l = null == t ? void 0 : t.tab;
            switch (i) {
              case a.GET_TABS:
                !(function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                  new Promise(function (r) {
                    return chrome.tabs.query(e, function (e) {
                      t ? t(e) : r(e);
                    });
                  });
                })(u, r);
                break;
              case a.CREATE_TAB:
                n(u, r);
                break;
              case a.REMOVE_TAB:
                s(l.id, r);
                break;
              case a.SENDER_FROM_TAB:
                r(t.tab);
                break;
              case a.UPDATE_TAB:
                c(l.id, u, r);
            }
          } catch (e) {}
        })(e, t, r);
      });
    }
    function n() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return new Promise(function (r) {
        return chrome.tabs.create(e, function (e) {
          t ? t(e) : r(e);
        });
      });
    }
    function s(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return new Promise(function (r) {
        return chrome.tabs.remove(e, function (e) {
          t ? t(e) : r(e);
        });
      });
    }
    function c(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      return new Promise(function (a) {
        chrome.tabs.update(e, t, function (e) {
          r ? r(e) : a(e);
        });
      });
    }
    function i(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return new Promise(function (r) {
        chrome.tabs.update(e, { highlighted: !0 }, function (e) {
          t ? t(e) : r(e);
        });
      });
    }
    function p(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return new Promise(function (r) {
        chrome.tabs.reload(e, {}, function (e) {
          t ? t(e) : r(e);
        });
      });
    }
  },
  53: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return h;
    }),
      r.d(t, "b", function () {
        return f;
      });
    var a = r(1),
      o = r.n(a),
      n = r(3),
      s = r.n(n),
      c = r(2),
      i = r.n(c),
      p = r(51),
      u = r(17),
      l = r(77),
      d = r(57);
    function m(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m(Object(r), !0).forEach(function (t) {
              s()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : m(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var h = "translation_content",
      f = "setting_language";
    function g() {
      return (g = i()(
        o.a.mark(function e() {
          var t;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), u.a(h);
                case 2:
                  (t = (t = e.sent) || {}), p.a.addResourceBundle("en", "translation", y(y({}, d), t)).init();
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    var _ = { en: { translation: d } };
    p.a.use(l.e).init({ fallbackLng: "en", resources: _, lng: "en", keySeparator: !1, interpolation: { escapeValue: !1 } }),
      (function () {
        g.apply(this, arguments);
      })(),
      p.a;
  },
  57: function (e) {
    e.exports = JSON.parse(
      '{"Ext.Nav.Price.Min":"Price (Min)","Ext.Nav.Total.Price":"Total Price","Ext.Nav.Review":"Review","Ext.Nav.Summary":"Summary","Ext.Nav.Price.History":"Price History","Ext.Nav.Reviews":"Reviews","Ext.Nav.Similar":"Similar","Ext.Nav.Who.Sale":"Who Sale?","Ext.Nav.Who.Selling":"Who\'s Selling","Ext.Nav.Supplier":"Supplier","Ext.Nav.Supplier.Info":"Supplier Info","Ext.Nav.Support":"Support","Ext.Nav.Create.At":"Create At","Ext.Nav.Last.Sale":"Last Sale","Ext.Nav.Sales.Track":"Sales Track","Ext.Nav.App.Used":"App Used","Ext.Nav.Ads.Track":"Ads Track","Ext.Nav.Total.Products":"Total Products","Ext.Nav.competitors":"Competitors","Ext.Nav.Add.To.Collection.Btn":"Add to Collection","Ext.Create.Btn":"Create","Ext.Product":"Product","Ext.Add":"Add","Ext.Cancel":"Cancel","Ext.Agree":"Agree","Ext.Decline":"Decline","Ext.Download":"Download","Ext.Deselect.All":"Deselect All","Ext.Select.All":"Select All","Ext.Load.More.Btn":"Load More","Ext.Duplicated.Btn":"Duplicated","Ext.Add.Prod.Btn":"Add Product","Ext.Btn.New.Collections":"New Collections","Ext.Select.Collection.Title":"Select Collection","Ext.Select.Collection.Label.All.Collections":"All Collections","Ext.Select.Collection.Label.Favourite":"Favourite","Ext.Select.Collection.Label.Create.Collection":"Create Collection","Ext.Select.Collection.Label.Name.Collection":"Name Collection","Ext.Delete.Collection.Title":"Delete Collection","Ext.Delete.Collection.Confirmation":"Do you want to delete this collection?","Ext.Delete.Lost.Product.Warn":"The products you have hunted will disappear and cannot be recovered","Ext.Remove.Title":"Confirm Remove","Ext.Remove.Product":"Are you sure you want to remove this product?","Ext.Collection.Search.Not.Found":"We couldn\'t find any collection matching your keyword","Ext.Required.Field":"This field is required","Ext.Enter.Name.Collection":"Enter name collection","Ext.Duplicate.Collection":"Duplicate collection","Ext.New.Name":"New Name","Ext.Product.List":"Product List","Ext.Collection.Empty":"So sad {{title}} collection is empty, Save your potential products","Ext.Hunt.Now":"Hunt Products Now","Ext.Trending.Prods":"Trending Products","Ext.Hunt.Best.Selling.Prods":"Best Selling Products","Ext.Hunt.Top.Trending.Prods":"Top Trending Products","Ext.Hunt.All.Prods.Top.Trending":"All Products Top Trending","Ext.Who.Sale":"Don’t have any seller sell this product on Shopify","Ext.Congraz":"Congratulation!","Ext.No.Review":"Don\'t Have Review","Ext.Get.App":"Get App","Ext.Order":"Order","Ext.Orders":"Orders","Ext.Price":"Price","Ext.Shipping":"Shipping","Ext.Action":"Action","Ext.Overview":"Overview","Ext.Review":"Review","Ext.Language":"Language","Ext.All.Products":"All Products","Ext.All.Price":"All Price","Ext.Over.30.USD":"Over 30 USD","Ext.Add.Prod.Title":"Add Product","Ext.Total":"Total: ","Ext.Sold":"Sold","Ext.Overview.Review":"Overview Review ({{reviews}})","Ext.Equal":"Equal","Ext.Stars":"{{star}} Stars","Ext.Free":"Free","Ext.View.All":"View All","Ext.Sales.Volume":"Sales Volume","Ext.Sign.In.Notice":"You have to sign in to connect to your collections","Ext.Only.On.Detail":"This feature only work on product detail page","Ext.Search.Collections":"Search Collections","Ext.Product.Detail":"Product Detail","Ext.Top.Recommended":"Top Recommended","Ext.Filter.Sort.By":"Sort By:","Ext.Filter.High.Orders":"High Orders","Ext.Filter.O.Low.High":"Orders Low To High","Ext.Filter.P.High.Low":"Price High To Low","Ext.Filter.P.Low.High":"Price Low To High","Ext.Filter.By.Day":"By Day","Ext.Filter.By.Week":"By Week","Ext.Filter.By.Month":"By Month","Ext.Filter.By.Last.Days":"{{day}} Last Days","Ext.Filter.By.Last.Weeks":"{{week}} Last Weeks","Ext.Filter.By.Last.Months":"{{month}} Last Month","Ext.Filter.By.N.Months":"For {{month}} Months","Ext.Filter.By.Half.Year":"For half a year","Ext.Filter.By.Latest.Order":"Latest order","Ext.Filter.By.Highest.Profit":"Highest profit","Ext.Filter.By.Cheapest.First":"Cheapest first","Ext.Filter.By.Highest.Order.First":"Highest order first","Ext.Login.Intro":"Hunt for winning products and create your own product collections.","Ext.Sign.In":"Sign In","Ext.Login.Term":"By clicking Sign In, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.","Ext.Review.W.Good":"What\'s Good","Ext.Review.W.Bad":"What\'s Bad","Ext.Store.Title":"Supplier Summary","Ext.Store.Trustworthy":"Trustworthy","Ext.Store.Top.Brand":"Top Brand","Ext.Store.Pos.Fb":"Positive Feedback","Ext.Store.Total.Fb":"Total Feedback","Ext.Store.Followers":"Followers","Ext.Store.Total.Prod":"Total Product","Ext.Store.Info":"Store Info","Ext.Store.Theme":"Theme","Ext.Store.Social.Channels":"Social Channels","Ext.Find.Again":"Find Again","Ext.Find.Supplier":"Find Supplier","Ext.Find.Ai.Notif":"Result may very based on AI Image detection","Ext.Find.No":"Could not find any supplier","Ext.Found":"Found","Ext.suppliers":"suppliers","Ext.Max":"Max","Ext.Min":"Min","Ext.Today":"Today","Ext.View.More.Info":"View More Info","Ext.Price.Status":"Price Status","Ext.Price.History":"Price History","Ext.Rating.Desc":"Seller Rating are based on customer reviews","Ext.Rating.Title":"Seller Rating","Ext.Rating.Footer":"Trans needed Read reviews and get in touch with the seller. If everything looks good, proceed with the purchase.","Ext.Sale.Status":"Sale Status: ","Ext.Sale.Status.Desc":"Compare the number of products sold of supplier","Ext.Current.Price":"Current Price","Ext.Min.Max.Price":"Min & Max Price","Ext.Min.Max.Price.Desc":"Min, max and current price of product.","Ext.Visit.Store":"Visit store","Ext.Setting.SignIn":"Sign in","Ext.Setting.SignOut":"Sign out","Ext.Settings.InlineMode.Label":"Display more","Ext.Settings.InlineMode.Descript":"Display inline on website","Ext.Settings.History.Label":"History","Ext.Notification.Header":"Notifications","Ext.Notification.Empty":"You don\'t have any notifications","Ext.Notification.ReadAll":"Read all","Ext.Notification.MarkReadAll":"Mark All as Read","Ext.HistoryProducts.DeleteHistory":"Delete History","Ext.HistoryProducts.DeleteHistoryTitle":"Do you want to delete this history?","Ext.HistoryProducts.Decline":"Decline","Ext.HistoryProducts.Agree":"Agree","Ext.HistoryProducts.Back":"Back","Ext.HistoryProducts.History":"History","Ext.HistoryProducts.Header.Products":"Products","Ext.HistoryProducts.Header.Date":"Date","Ext.HistoryProducts.DeleteAll":"Delete All","Ext.HistoryProducts.DeleteAllHistory":"Delete All History","Ext.HistoryProducts.DeleteAllHistoryTitle":"Do you want to delete all this history?","Ext.HistoryProducts.DeleteAllDecline":"Decline","Ext.HistoryProducts.DeleteAllAgree":"Agree","Ext.ChartHistory.Empty.TitleBold":"Sorry!","Ext.ChartHistory.Empty.Title":"We can\'t found data of this product","Ext.Hunt.Prods.Top.Trending":"Top Trending","Ext.CountryStatistics.WhoLeftFeedBack":"Country statistics on the last 1000 buyers who left a feedback","Ext.CountryStatistics.FeedBackDisplay":"Countries with less than 1% feedbacks are not displayed","Ext.CountryStatistics.OutsideEuropean":"N/a Outside European Union","Ext.CountryStatistics.OutsideEuropeanValue":"{{percent}}% Outside European Union","Ext.CountryStatistics.European":"N/a European Union","Ext.CountryStatistics.EuropeanValue":"{{percent}}% European Union","Ext.Edit.Enter.Name.Collection":"Enter name collection","Ext.Edit.Collection":"Edit collection","Ext.Edit.BtnSubmit":"Save","Ext.Navigate.Info.Left":"Tips: Press the","Ext.Navigate.Info.Right":"button to change the photo.","Ext.WidgetProducts":"Updated {{time}}","Ext.WidgetProducts.Title":"\\"{{keyword}}\\" Top Trending","Ext.Sorry":"Sorry!","Ext.Cant.Find.Product":"We can\'t find any product!","Ext.Loading":"Loading ...","Ext.Please.Wait":"Please Wait !","Ext.New.Sales":"Live Sales","Ext.New.Sales.Tracking":"Live Sales Tracking","Ext.New.Sales.Tracking.Desc":"Track your competitors\' stores sales performance in real time","Ext.Products":"Products","Ext.No.Sale":"Oops! There is no product were sold this time!","Ext.New.Sale.Title":"Recent Sales","Ext.Best.Selling":"Best Selling","Ext.Similar.Empty":"Sorry! We can’t find any similar product","Ext.Similar.Tracking":"Find Simlar Products","Ext.Similar.Tracking.Desc":"Find similar products by image and give you more options to choose","Ext.Last.H.Summary":"Last Hour Summary","Ext.Product.Sold.Recently":"products sold recently","Ext.Total.Tracking.Click":"Total tracking: {{used}}/{{limit}} per day","Ext.Total.Tracking.Btn":"Start Tracking","Ext.Start.Finding.Btn":"Start finding","Ext.Current.Used":"Current Used","Ext.Sign.In.To.Unlock":"Sign in to unlock most functions of","Ext.Find.Competitors":"Find Competitors","Ext.See.Who.Selling":"See who\'s selling this product and what price they\'re setting","Ext.Start.Looking":"Start looking","Ext.Selling.Price":"Selling price","Ext.Last.Orders":"Last orders","Ext.Nav.Pricing":"Pricing","Ext.My.Collection":"My Collection","Ext.Manage.Collections":"Manage collections","Ext.Remove":"Remove","Ext.Export.List":"Export List","Ext.Export.Product.List":"Export Product List","Ext.Date.Range":"Date range","Ext.No.Data":"No data"}'
    );
  },
  58: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return s;
    });
    var a = r(9),
      o = r.n(a),
      n = r(24);
    function s() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        t =
          (e.querySelectorAll("SCRIPT, IFRAME"),
          (function () {
            var e,
              t,
              r = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document).querySelectorAll("script"),
              a = o()(r).filter(function (e) {
                return e.textContent.includes("function asyncLoad()");
              });
            if (!(a = (null === (e = a) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.textContent.trim().replace(/\s\s+/gm, " ")) || null)) return null;
            var s = /var urls =(.*?);/gm.exec(a),
              c = (s && s[1]) || null;
            if (!c) return null;
            for (
              var i = JSON.parse(c),
                p = n.c.map(function (e) {
                  return e.script_pattern;
                }),
                u = [],
                l = 0;
              l < i.length;
              l++
            )
              for (var d = 0; d < n.a.length; d++)
                if (i[l].includes(n.a[d].script_pattern)) {
                  if (p.includes(n.a[d].script_pattern)) {
                    u.unshift(n.a[d]);
                    continue;
                  }
                  u.push(n.a[d]);
                }
            return (
              (u = u.filter(function (e, t, r) {
                return (
                  t ===
                  r.findIndex(function (t) {
                    return t.name === e.name;
                  })
                );
              })),
              o()(new Set(u))
            );
          })(e) || []),
        r =
          (function () {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document).querySelectorAll("script"),
              t = o()(e).filter(function (e) {
                return !e.textContent.includes("function asyncLoad()");
              });
            if (!t.length) return null;
            for (
              var r = n.c.map(function (e) {
                  return e.script_pattern;
                }),
                a = [],
                s = 0;
              s < t.length;
              s++
            )
              for (var c = 0; c < n.a.length; c++)
                if (t[s].textContent.includes(n.a[c].script_pattern)) {
                  if (r.includes(n.a[c].script_pattern)) {
                    a.unshift(n.a[c]);
                    continue;
                  }
                  a.push(n.a[c]);
                }
            return (
              (a = a.filter(function (e, t, r) {
                return (
                  t ===
                  r.findIndex(function (t) {
                    return t.name === e.name;
                  })
                );
              })),
              o()(new Set(a))
            );
          })(e) || [];
      return [].concat(o()(t), o()(r));
    }
  },
  59: function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return o;
    }),
      r.d(t, "a", function () {
        return n;
      });
    var a = r(22);
    function o() {
      return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document).querySelectorAll('#shopify-features, #shopify-digital-wallet, meta[name="shopify-checkout-api-token"], #shopify-dynamic-checkout-cart').length > 0;
    }
    var n = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD";
      return e || 0 === parseFloat(e) ? Object(a.b)(e, t).price : "--";
    };
  },
  602: function (e, t, r) {
    "use strict";
    r.r(t);
    var a = r(1),
      o = r.n(a),
      n = r(2),
      s = r.n(n),
      c = r(13),
      i = r(46),
      p = r(48),
      u = r(35),
      l = r(17),
      d = r(9),
      m = r.n(d),
      y = r(3),
      h = r.n(y);
    function f(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function g(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? f(Object(r), !0).forEach(function (t) {
              h()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : f(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var _ = { type: "basic", iconUrl: "icons/icon128.png" };
    function b() {
      return (b = s()(
        o.a.mark(function e(t) {
          var r,
            a = arguments;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = a.length > 1 && void 0 !== a[1] ? a[1] : null),
                    e.abrupt(
                      "return",
                      new Promise(function (e) {
                        chrome.notifications.create(g(g({}, _), t), function () {
                          r ? r(!0) : e(!0);
                        });
                      })
                    )
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function w() {
      return (w = s()(
        o.a.mark(function e() {
          var t,
            r = arguments;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t = r.length > 0 && void 0 !== r[0] ? r[0] : null),
                    e.abrupt(
                      "return",
                      new Promise(
                        (function () {
                          var e = s()(
                            o.a.mark(function e(r) {
                              var a;
                              return o.a.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), v();
                                    case 2:
                                      (a = e.sent),
                                        m()(a).forEach(function (e) {
                                          chrome.notifications.clear(e);
                                        }),
                                        t ? t(!0) : r(!0);
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      )
                    )
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function v() {
      return function () {
        return s()(
          o.a.mark(function e() {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        chrome.notifications.getAll(function (t) {
                          return e(Object.keys(t));
                        });
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    var S = r(177);
    r(492),
      S.a.initializeApp({
        apiKey: "AIzaSyB7oH-zm41H2Ylco4uDYpP6fSq-9IyGFn4",
        authDomain: "alihunterclient.firebaseapp.com",
        databaseURL: "https://alihunterclient-default-rtdb.firebaseio.com",
        projectId: "alihunterclient",
        storageBucket: "alihunterclient.appspot.com",
        messagingSenderId: "949271562705",
        appId: "1:949271562705:web:e6778a12aad9f102ff38f0",
      });
    var C = r(12),
      x = r.n(C),
      k = r(62),
      O = r(63),
      T = r(83),
      j = r(82);
    function E(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function P(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? E(Object(r), !0).forEach(function (t) {
              h()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : E(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    function F(e) {
      return function () {
        return s()(
          o.a.mark(function e(t) {
            var r, a, n, s, i, p, u;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.productId),
                        (a = x()(t, ["productId"])),
                        (e.prev = 1),
                        (s = "".concat("https://api-prod.alihunter.io", "/app/products/country_statistic/").concat(r)),
                        (i = a.params),
                        (p = x()(a, ["params"])),
                        (e.next = 6),
                        Object(c.a)(P({ method: "GET", url: s, withCredentials: !0, headers: { "Content-Type": "application/json" }, params: i }, p))
                      );
                    case 6:
                      if (200 === (u = e.sent).status) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return", { status: u.status, data: {} });
                    case 9:
                      return e.abrupt("return", { status: 200, data: (null === (n = u.data) || void 0 === n ? void 0 : n.data) || {} });
                    case 12:
                      return (e.prev = 12), (e.t0 = e.catch(1)), e.abrupt("return", { status: 500, data: {} });
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 12]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    var D = r(34),
      N = r(38),
      A = r(28),
      M = r(22),
      R = r(36),
      U = r(29),
      I = r(102),
      B = (function () {
        var e = s()(
          o.a.mark(function e(t) {
            var r, a, n, s, c, i, p, u;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (r = {}), (a = t.shopUriOrigin), (n = void 0 === a ? "" : a), (s = t.handleProducts), (c = void 0 === s ? [] : s), (i = 0);
                  case 3:
                    if (!(i < c.length)) {
                      e.next = 11;
                      break;
                    }
                    return (e.next = 6), L({ shopUriOrigin: n, handle: c[i] });
                  case 6:
                    (p = e.sent) && null != p && p.id && (r[null == p ? void 0 : p.id] = null == p || null === (u = p.image) || void 0 === u ? void 0 : u.src);
                  case 8:
                    (i += 1), (e.next = 3);
                    break;
                  case 11:
                    return e.abrupt("return", r);
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    function L(e) {
      return function () {
        return s()(
          o.a.mark(function e(t) {
            var r, a, n, s, i, p, u, l, d;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.shopUriOrigin),
                        (a = void 0 === r ? "" : r),
                        (n = t.handle),
                        (s = void 0 === n ? "" : n),
                        (e.prev = 1),
                        (i = "https://".concat(a, "/products/").concat(s, ".json")),
                        (e.next = 5),
                        Object(c.a)({ url: i, method: "GET" })
                      );
                    case 5:
                      if (200 === (p = e.sent).status) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", []);
                    case 8:
                      return (u = p.data || {}), (l = u.product), (d = void 0 === l ? {} : l), e.abrupt("return", d);
                    case 12:
                      throw ((e.prev = 12), (e.t0 = e.catch(1)), e.t0);
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 12]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    var G = r(94),
      H = r(71);
    function z(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function K(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? z(Object(r), !0).forEach(function (t) {
              h()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : z(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    function Y() {
      return (Y = s()(
        o.a.mark(function e(t, r) {
          var a, n, s, c;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (a = t.shopUriOrigin), (n = t.page), (s = t.limit), (e.next = 3), Object(U.a)({ shopUriOrigin: a, page: n, limit: s });
                case 3:
                  (c = e.sent), r(c);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function V() {
      return (V = s()(
        o.a.mark(function e(t, r) {
          var a, n;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (a = t.shopUriOrigin), (e.next = 3), Object(I.a)(a);
                case 3:
                  (n = e.sent), r(n);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function q() {
      return (q = s()(
        o.a.mark(function e(t, r) {
          var a, n;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (a = t.shopUriOrigin), (e.next = 3), Object(U.b)({ shopUriOrigin: a });
                case 3:
                  (n = e.sent).length <= 0 && r([]), r(n);
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function W() {
      return (W = s()(
        o.a.mark(function e(t, r) {
          var a, n, s, c, p;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (a = t.url), (e.next = 3), Object(i.a)({ method: "GET", url: a });
                case 3:
                  return 200 !== (n = e.sent).status && r({}), (s = new DOMParser()), (c = s.parseFromString(n.data, "text/html")), (e.next = 9), Object(R.a)({ doc: c, socials: !0 });
                case 9:
                  if ((p = e.sent)) {
                    e.next = 14;
                    break;
                  }
                  return (e.next = 13), Object(R.b)({ doc: c, socials: !0 });
                case 13:
                  p = e.sent;
                case 14:
                  p && r(p);
                case 15:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Z() {
      return (Z = s()(
        o.a.mark(function e(t, r) {
          var a, n, s;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  (a = t.url),
                    (n = t.source),
                    (s = t.type),
                    Object(k.a)({ url: a, source: n, type: s }, function (e) {
                      var t = e.end,
                        a = e.data;
                      t && r(a);
                    });
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function $() {
      return ($ = s()(
        o.a.mark(function e(t, r) {
          var a, n, s, c, i, p, u;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (a = t.productId),
                    (n = t.adminSeq),
                    (s = t.language),
                    (c = t.page),
                    (i = t.evaStarFilterValue),
                    (p = x()(t, ["productId", "adminSeq", "language", "page", "evaStarFilterValue"])),
                    (e.next = 3),
                    Object(O.a)(K({ productId: a, adminSeq: n, language: s, page: c, evaStarFilterValue: i }, p))
                  );
                case 3:
                  (u = e.sent), r(u);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function X() {
      return (X = s()(
        o.a.mark(function e(t, r) {
          var a, n, c, i, p, u;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (a = t.productId),
                    (n = t.limit),
                    (c = t.imgUrl),
                    (i = t.runParams),
                    t.language,
                    (p = []),
                    (e.next = 4),
                    Object(k.a)(
                      { url: c, source: "aliexpress", productUrl: "https://aliexpress.com/item/".concat(a, ".html") },
                      (function () {
                        var e = s()(
                          o.a.mark(function e(t) {
                            var r, a, n, s;
                            return o.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    (r = t.end),
                                      (a = t.done),
                                      r &&
                                        a &&
                                        ((n =
                                          null == t
                                            ? void 0
                                            : t.data.map(function (e) {
                                                return K(
                                                  K({}, e),
                                                  {},
                                                  {
                                                    key: e.productId,
                                                    id: e.productId,
                                                    productDetailUrl: "https://aliexpress.com/item/".concat(e.productId, ".html"),
                                                    productImage: e.productThumbnail,
                                                    productTitle: e.productTitle,
                                                    minPrice: Object(M.b)(null == e ? void 0 : e.priceMin).formatedAmount,
                                                    productAverageStar: e.feedbackRating.averageStar,
                                                    totalRating: e.feedbackRating.totalValidNum,
                                                    orders: e.totalOrders,
                                                    orderCurrent: null == i ? void 0 : i.totalOrders,
                                                    minPriceCurrent: null == i ? void 0 : i.priceMin,
                                                    runParams: i,
                                                    minPriceValue: Object(M.c)("".concat(e.priceMin), null == i ? void 0 : i.currency),
                                                  }
                                                );
                                              })),
                                        (s = m()(n).slice(0, 5)),
                                        (p = m()(s)));
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()
                    )
                  );
                case 4:
                  return (e.next = 6), Object(A.g)({ params: { productId: a, page_size: n } });
                case 6:
                  (u = e.sent), p && u.data ? r({ status: 200, data: [].concat(m()(p), m()(u.data)) }) : r({ status: 400, data: [] });
                case 8:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function J() {
      return (J = s()(
        o.a.mark(function e(t, r) {
          var a, n, s, c, i, p, u, l;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (a = t.productId),
                    (n = t.count),
                    (s = t.minPrice),
                    (c = t.maxPrice),
                    (i = t.language),
                    (p = t.country),
                    (u = t.currency),
                    (e.next = 3),
                    Object(N.c)({ productId: a, count: n, minPrice: s, maxPrice: c, language: i, country: p, currency: u })
                  );
                case 3:
                  (l = e.sent), r(l);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Q() {
      return (Q = s()(
        o.a.mark(function e(t, r) {
          var a, n;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (a = t.supplierId), (e.next = 3), Object(N.d)({ supplierId: a });
                case 3:
                  (n = e.sent), r(n);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ee() {
      return (ee = s()(
        o.a.mark(function e(t, r) {
          var a, n;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (a = t.adminSeq), (e.next = 3), Object(N.a)({ adminSeq: a });
                case 3:
                  (n = e.sent), r(n);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function te() {
      return (te = s()(
        o.a.mark(function e(t, r) {
          var a, n;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (a = t.productId), (e.next = 3), Object(T.a)({ productId: a });
                case 3:
                  (n = e.sent), r(n);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function re() {
      return (re = s()(
        o.a.mark(function e(t, r) {
          var a;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), F(K({}, t));
                case 2:
                  (a = e.sent), r(a);
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ae() {
      return (ae = s()(
        o.a.mark(function e(t, r) {
          var a;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Object(j.a)(K({}, t));
                case 2:
                  (a = e.sent), r(a);
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function oe() {
      return (oe = s()(
        o.a.mark(function e(t, r) {
          var a;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Object(D.b)(K({}, t));
                case 2:
                  (a = e.sent), r(a);
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ne() {
      return (ne = s()(
        o.a.mark(function e(t, r) {
          var a;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), B(K({}, t));
                case 2:
                  (a = e.sent), r(a);
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function se() {
      return (se = s()(
        o.a.mark(function e(t, r) {
          var a, n, s, c, i, p;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (a = t.shopInfo), (n = void 0 === a ? {} : a), (s = t.page_no), (c = void 0 === s ? 1 : s) > 1 && r([]), (e.next = 4), Object(G.a)({ shopInfo: n, page: c });
                case 4:
                  if (((i = e.sent), !n || null == n || !n.shopUri)) {
                    e.next = 12;
                    break;
                  }
                  if (0 !== i.length) {
                    e.next = 11;
                    break;
                  }
                  return (e.next = 9), Object(H.b)({ shopInfo: n, params: { shop_uri: null == n ? void 0 : n.shopUri, shop_uri_origin: null == n ? void 0 : n.shopUriOrigin, page_no: c } });
                case 9:
                  (p = e.sent), (i = p.data);
                case 11:
                  r(i);
                case 12:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ce() {
      return (ce = s()(
        o.a.mark(function e(t, r) {
          var a;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  (a = t.token), u.c(a);
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    chrome.runtime.onMessageExternal.addListener(function (e, t, r) {
      switch ((null == t || t.tab, e.type)) {
        case "GET_EXTENSION_ID":
          r({ id: chrome.runtime.id });
          break;
        case "SEARCH_BY_IMAGE":
          !(function (e, t) {
            Z.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_REVIEWS":
          !(function (e, t) {
            $.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_PRODUCTS_OTHER_SUPPLIER":
          !(function (e, t) {
            X.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_FREIGHTS_PRODUCT":
          !(function (e, t) {
            J.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_TOTAL_PRODUCTS":
          !(function (e, t) {
            Q.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_AVG_SUMMARY":
          !(function (e, t) {
            ee.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_PRICES_HISTORY":
          !(function (e, t) {
            te.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_ORDERS_HISTORY_ASIFY":
          !(function (e, t) {
            ae.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_ORDERS_STATISTICS_ASIFY":
          !(function (e, t) {
            re.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_RUN_PARAMS_FROM_AE_ID":
          !(function (e, t) {
            oe.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_SHOPIFY_SHOP_INFO":
          !(function (e, t) {
            W.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_SHOPIFY_LIVE_SALE":
          !(function (e, t) {
            q.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_SHOPIFY_TOTAL_PRODUCT":
          !(function (e, t) {
            V.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_SHOPIFY_PRODUCT":
          !(function (e, t) {
            Y.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_SHOPIFY_IMAGES_PRODUCT":
          !(function (e, t) {
            ne.apply(this, arguments);
          })(e.data, r);
          break;
        case "GET_SHOPIFY_BEST_SELLING_PRODUCT_APP":
          !(function (e, t) {
            se.apply(this, arguments);
          })(e.data, r);
          break;
        case "UPDATE_TOKEN_EXT":
          !(function (e, t) {
            ce.apply(this, arguments);
          })(e.data, r);
      }
    });
    var ie = r(33),
      pe = r.n(ie),
      ue = r(39),
      le = r(8),
      de = {},
      me = [],
      ye = "https://minion.alihunter.io";
    function he() {
      return (he = s()(
        o.a.mark(function e(t) {
          var r, a, n, s, c, i;
          return o.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = t.productId),
                      (a = t.fullUrl),
                      (e.prev = 1),
                      !Object.keys(de).find(function (e) {
                        return e === r;
                      }))
                    ) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return");
                  case 6:
                    return (n = "".concat(ye, "/promotion-generate?productId=").concat(r, "&subid=AH")), (e.next = 9), pe()({ method: "POST", url: n, headers: { "Content-Type": "application/json", "Content-From": "*.aliexpress" } });
                  case 9:
                    if (((s = e.sent), !(c = s.data) || !c.promotion_link)) {
                      e.next = 15;
                      break;
                    }
                    Object.assign(de, h()({}, r, c.promotion_link)), (e.next = 19);
                    break;
                  case 15:
                    return (e.next = 17), Object(A.e)({ productId: r, full_url: a });
                  case 17:
                    (i = e.sent).data.promotionLink && Object.assign(de, h()({}, r, i.data.promotionLink));
                  case 19:
                    e.next = 24;
                    break;
                  case 21:
                    (e.prev = 21), (e.t0 = e.catch(1));
                  case 24:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 21]]
          );
        })
      )).apply(this, arguments);
    }
    chrome.webRequest.onBeforeRequest.addListener(
      function (e) {
        try {
          if (Object(ue.d)(e.url)) {
            var t = (function (e) {
              try {
                if (Object(ue.d)(e)) {
                  var t = new URL(e);
                  return Object(le.l)(t.pathname);
                }
                return null;
              } catch (e) {
                return null;
              }
            })(e.url);
            me.includes(t) ||
              (me.push(t),
              (function (e) {
                he.apply(this, arguments);
              })({ productId: t, fullUrl: e.url }),
              setTimeout(function () {
                me = me.filter(function (e) {
                  return e !== t;
                });
              }, 3e3));
          }
          var r = Object.keys(de);
          if (r.length) {
            var a = r[0],
              o = de[a],
              n = new URL(o);
            return n.searchParams.set("utm_item_ae", encodeURIComponent(e.url)), delete de[a], { redirectUrl: n.href };
          }
        } catch (e) {}
      },
      { urls: ["<all_urls>"], types: ["main_frame"] },
      ["blocking"]
    ),
      chrome.webRequest.onHeadersReceived.addListener(
        function (e) {
          try {
            var t = new URL(e.url).searchParams.get("utm_item_ae");
            if (t) {
              var r = new URL(decodeURIComponent(t));
              Object(p.g)(e.tabId, { url: r.href });
            }
          } catch (e) {}
        },
        { urls: ["<all_urls>"], types: ["main_frame"] },
        ["blocking"]
      );
    var fe = [],
      ge = /(shoppingcart.aliexpress.)[a-zA-Z]+\/orders.htm/,
      _e = /(shoppingcart.aliexpress.)[a-zA-Z]+\/order\/confirm_order.htm/,
      be = /(shoppingcart.aliexpress.)[a-zA-Z]+\/order\/payResult.htm/;
    function we() {
      return (we = s()(
        o.a.mark(function e(t) {
          var r, a, n, s;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (r = t.tabId), (a = t.orderId), (n = t.paymentId), (s = t.productIds), (e.next = 3), Object(le.d)(2500);
                case 3:
                  chrome.tabs.query({}, function () {
                    chrome.tabs.sendMessage(r, { type: "CHECK_PM_SUCCESS" }, function (e) {
                      e && ve({ orderId: a, paymentId: n, productIds: s });
                    });
                  });
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ve(e) {
      return function () {
        return s()(
          o.a.mark(function e(t) {
            var r, a, n;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((r = t.orderId), (a = t.productIds), (n = t.paymentId), (e.prev = 1), n && Array.isArray(a))) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      return (
                        (e.next = 6),
                        pe()({
                          url: "https://api-prod.alihunter.io/api/app/store_order",
                          method: "POST",
                          headers: { Accept: "application/json", "content-type": "application/json" },
                          data: JSON.stringify({ order_id: r, product_ids: a.join(","), payment_id: n }),
                        })
                      );
                    case 6:
                      e.next = 11;
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(1));
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 8]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function Se() {
      return (Se = s()(
        o.a.mark(function e(t, r, a) {
          var n, s;
          return o.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (n = r.data), (e.next = 4), l.a("beforeLoginTabId");
                  case 4:
                    (s = e.sent), u.c(n), p.b(s), p.e(s), p.f(t), l.b("beforeLoginTabId"), a(!0), (e.next = 15);
                    break;
                  case 13:
                    (e.prev = 13), (e.t0 = e.catch(0));
                  case 15:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 13]]
          );
        })
      )).apply(this, arguments);
    }
    chrome.webRequest.onResponseStarted.addListener(
      function (e) {
        try {
          var t = "",
            r = 0,
            a = "",
            o = [];
          fe.unshift(e),
            fe.splice(2),
            (function () {
              var e = fe[0];
              if ("GET" === (null == e ? void 0 : e.method) && e.url.includes("pmntId=") && be.test(e.url)) {
                var o = new URL(e.url).searchParams;
                (a = o.get("pmntId")), r++, (t = e.tabId);
              }
            })(),
            (function () {
              var e = fe[1];
              if ("GET" === (null == e ? void 0 : e.method)) {
                var t = new URL(e.url).searchParams;
                if (ge.test(e.url) || _e.test(e.url)) {
                  var a = t.get("availableProductShopcartIds") ? dataProductIds.split(",") : [],
                    n = t.get("objectId") ? [t.get("objectId")] : [];
                  (o = [].concat(m()(o), m()(a), n)), r++;
                }
              }
            })(),
            2 === r &&
              t &&
              (function (e) {
                we.apply(this, arguments);
              })({ tabId: t, orderId: "", paymentId: a, productIds: o });
        } catch (e) {}
      },
      { urls: ["<all_urls>"], types: ["main_frame"] }
    ),
      Object(p.d)(),
      chrome.runtime.onMessage.addListener(function (e, t, r) {
        !(function (e, t, r) {
          try {
            var a = e.type,
              o = void 0 === a ? "" : a,
              n = e.options,
              s = void 0 === n ? {} : n;
            switch (o) {
              case "CREATE":
                !(function (e) {
                  b.apply(this, arguments);
                })(s, r);
                break;
              case "CLEAR":
                !(function () {
                  w.apply(this, arguments);
                })(r);
            }
          } catch (e) {}
        })(e, 0, r);
      }),
      chrome.runtime.onMessage.addListener(function (e, t, r) {
        var a = e.requestOptions,
          o = void 0 === a ? {} : a,
          n = e.type;
        switch (void 0 === n ? "" : n) {
          case "SEND_REQUEST":
            return Object(c.a)(o, r), !0;
          case "SEND_REQUEST_BY_FETCH":
            return Object(i.a)(o, r), !0;
          case "DOWNLOAD_FILE":
            return (
              chrome.downloads.download(e.options, function () {
                return r();
              }),
              !0
            );
        }
        return !0;
      }),
      chrome.runtime.onMessageExternal.addListener(function (e, t, r) {
        var a = e.type,
          o = void 0 === a ? "" : a,
          n = (null == t ? void 0 : t.tab) || {};
        switch (o) {
          case "GET_EXTENSION_ID":
            r(chrome.runtime.id);
            break;
          case "SET_AUTH":
            !(function (e, t, r) {
              Se.apply(this, arguments);
            })(n.id, e, r);
            break;
          case "CLOSE_TAB":
            p.f(n.id);
        }
      });
  },
  62: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return O;
    });
    var a = r(3),
      o = r.n(a),
      n = r(1),
      s = r.n(n),
      c = r(2),
      i = r.n(c),
      p = r(13),
      u = r(8),
      l = r(39),
      d = r(68),
      m = r(36),
      y = r(29),
      h = r(34),
      f = r(14),
      g = r.n(f);
    function _(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function b(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? _(Object(r), !0).forEach(function (t) {
              o()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : _(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var w = (function () {
        var e = i()(
          s.a.mark(function e(t) {
            var r, a, o, n, c, i, l, d, m, y, h, f, g;
            return s.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.url), (a = void 0 === r ? "" : r), (o = t.source), (n = void 0 === o ? "shopify" : o), (c = t.productUrl), (i = void 0 === c ? null : c), (e.prev = 1), (e.next = 4), Object(u.i)(a);
                    case 4:
                      return (
                        (l = e.sent),
                        (e.next = 7),
                        Object(p.a)({
                          method: "POST",
                          url: "".concat("https://api-prod.alihunter.io", "/ext"),
                          headers: { "Content-Type": "application/json", "x-request-source": "extension" },
                          data: { action: "product.detail.image_detection", data: { image: l, type: "base64", source: n, productUrl: i } },
                        })
                      );
                    case 7:
                      if ((d = e.sent)) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return", { pages: [] });
                    case 10:
                      if (200 !== d.status) {
                        e.next = 17;
                        break;
                      }
                      if (!d.data.hasOwnProperty("data")) {
                        e.next = 15;
                        break;
                      }
                      if (!d.data.hasOwnProperty("code") || 200 === d.data.code) {
                        e.next = 15;
                        break;
                      }
                      return (m = d.data.data.details), (y = void 0 === m ? {} : m), e.abrupt("return", { errorCode: 400, errorDetails: y, pages: [] });
                    case 15:
                      return (h = (d.data && d.data.data && d.data.data.webDetection) || {}), (f = h.pagesWithMatchingImages), (g = void 0 === f ? [] : f), e.abrupt("return", { pages: g });
                    case 17:
                      if (401 !== d.status) {
                        e.next = 19;
                        break;
                      }
                      return e.abrupt("return", { errorCode: 401, pages: [] });
                    case 19:
                      if (403 !== d.status) {
                        e.next = 21;
                        break;
                      }
                      return e.abrupt("return", { errorCode: 403, pages: [] });
                    case 21:
                      if (200 === d.status) {
                        e.next = 23;
                        break;
                      }
                      return e.abrupt("return", { error: d, pages: [] });
                    case 23:
                      e.next = 29;
                      break;
                    case 25:
                      return (e.prev = 25), (e.t0 = e.catch(1)), e.abrupt("return", { pages: [] });
                    case 29:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 25]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      v = (function () {
        var e = i()(
          s.a.mark(function e(t) {
            var r, a, o;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t
                        .filter(function (e) {
                          return Object(l.d)(e.url);
                        })
                        .map(function (e) {
                          return e.url.replace("aliexpress.com/i/", "aliexpress.com/item/"), e.url;
                        })),
                      (e.next = 3),
                      S(r)
                    );
                  case 3:
                    return (
                      (a = (a = e.sent).filter(Boolean)),
                      (o = []),
                      (a = a.filter(function (e) {
                        return !o.includes(parseInt(e.productId)) && (o.push(parseInt(e.productId)), !0);
                      })),
                      e.abrupt("return", a)
                    );
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      S = (function () {
        var e = i()(
          s.a.mark(function e(t) {
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      Promise.all(
                        t.map(function (e) {
                          return new Promise(
                            ((t = i()(
                              s.a.mark(function t(r) {
                                var a, o, n, c, i;
                                return s.a.wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (t.prev = 0), (a = Object(u.a)(e)), (t.next = 4), Object(p.a)({ method: "GET", url: "https://aliexpress.com/".concat(a.path), headers: { "Content-Type": "application/json" } });
                                        case 4:
                                          if (200 === (o = t.sent).status) {
                                            t.next = 7;
                                            break;
                                          }
                                          return t.abrupt("return", r(null));
                                        case 7:
                                          return (n = new DOMParser()), (c = n.parseFromString(o.data, "text/html")), (t.next = 11), Object(h.a)(c, !1);
                                        case 11:
                                          if ((i = t.sent).productId && i.supplierId) {
                                            t.next = 14;
                                            break;
                                          }
                                          return t.abrupt("return", r(null));
                                        case 14:
                                          return t.abrupt("return", r(i));
                                        case 17:
                                          (t.prev = 17), (t.t0 = t.catch(0)), r(null);
                                        case 20:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[0, 17]]
                                );
                              })
                            )),
                            function (e) {
                              return t.apply(this, arguments);
                            })
                          );
                          var t;
                        })
                      )
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      C = (function () {
        var e = i()(
          s.a.mark(function e(t) {
            var r, a, o, n, c;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t),
                      (a = [
                        "https://www.aliexpress.",
                        "https://aliexpress.",
                        "https://tr.aliexpress.com",
                        "https://www.lazada.",
                        "https://shopee.",
                        "https://www.ebay.",
                        ".ebay.com",
                        ".bestdealplus.com",
                        ".saramart.com",
                        "https://www.alibaba",
                        "http://facebook.com",
                        "https://facebook.com",
                        "http://www.facebook.com",
                        "https://www.facebook.com",
                        "https://www.pinterest.com",
                        "https://www.amazon.com",
                        "https://www.amazon.co.uk",
                        ".google.com",
                        "raphiexpress.com",
                      ]),
                      (r = t.filter(function (e) {
                        var t = !0;
                        return (
                          a.forEach(function (r) {
                            null != e && e.url.includes(r) && (t = !1);
                          }),
                          t
                        );
                      })),
                      (o = []),
                      (e.next = 6),
                      Promise.all(
                        r.map(function (e) {
                          return new Promise(
                            ((t = i()(
                              s.a.mark(function t(r) {
                                var a, n;
                                return s.a.wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (t.next = 2), Object(d.a)(e.url);
                                      case 2:
                                        if (!(a = t.sent).isShopify) {
                                          t.next = 13;
                                          break;
                                        }
                                        return (t.next = 6), x(e.url);
                                      case 6:
                                        if ((n = t.sent) && n.shopUriOrigin && 0 !== n.shopUriOrigin.length) {
                                          t.next = 10;
                                          break;
                                        }
                                        return r(null), t.abrupt("return");
                                      case 10:
                                        (a = Object(y.d)(n, a.data)), o.push(a), r(b(b({}, a), {}, { shop: n }));
                                      case 13:
                                        r(null);
                                      case 14:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            )),
                            function (e) {
                              return t.apply(this, arguments);
                            })
                          );
                          var t;
                        })
                      )
                    );
                  case 6:
                    n = (n = e.sent).filter(Boolean);
                    try {
                      n = n.sort(function (e, t) {
                        return g()(t.updatedAtISO) - g()(e.updatedAtISO);
                      });
                    } catch (e) {}
                    return (
                      (c = []),
                      (n = n.filter(function (e) {
                        return !c.includes(parseInt(e.id)) && (c.push(parseInt(e.id)), !0);
                      })),
                      e.abrupt("return", n)
                    );
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    function x(e) {
      return function () {
        return i()(
          s.a.mark(function e(t) {
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(
                        (function () {
                          var e = i()(
                            s.a.mark(function e(r) {
                              var a, o, n, c;
                              return s.a.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.prev = 0), (e.next = 3), Object(p.a)({ method: "GET", url: t });
                                      case 3:
                                        (a = e.sent), (o = new DOMParser()), (n = o.parseFromString(a.data, "text/html")), (c = Object(m.a)({ doc: n })), r(c), (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10), (e.t0 = e.catch(0)), r(null);
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 10]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function k(e, t) {
      return function () {
        return i()(
          s.a.mark(function e(t, r) {
            var a;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (a = []), (e.t0 = t), (e.next = "aliexpress" === e.t0 ? 4 : "shopify" === e.t0 ? 8 : 12);
                    break;
                  case 4:
                    return (e.next = 6), v(r);
                  case 6:
                    return (a = e.sent), e.abrupt("break", 13);
                  case 8:
                    return (e.next = 10), C(r);
                  case 10:
                    return (a = e.sent), e.abrupt("break", 13);
                  case 12:
                    return e.abrupt("break", 13);
                  case 13:
                    return e.abrupt("return", a);
                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function O(e, t) {
      return function () {
        return i()(
          s.a.mark(function e(t, r) {
            var a, o, n, c, i, p, u, l, d, m;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = t.url),
                      (o = t.source),
                      (n = t.productUrl),
                      (c = void 0 === n ? null : n),
                      (i = t.isVersionShopify),
                      (p = void 0 !== i && i),
                      (u = []),
                      r({ start: !0, end: !1, done: !1 }),
                      (e.next = 5),
                      w({ url: a, source: o, productUrl: c })
                    );
                  case 5:
                    if (((l = e.sent), !((d = l.pages).length > 0))) {
                      e.next = 12;
                      break;
                    }
                    return (e.next = 10), k(o, d);
                  case 10:
                    (m = e.sent).length > 0 && (u = m);
                  case 12:
                    return p && (u = T(u)), r({ done: !0, start: !1, end: !0, data: u }), e.abrupt("return");
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function T(e) {
      return e.map(function (e) {
        var t = (null == e ? void 0 : e.shop) || {};
        return {
          id: e.id,
          href: "https://".concat(t.shopUriOrigin, "/products/").concat(e.handle),
          handle: e.handle,
          image: e.images[0],
          images: e.images,
          variants: [{ price: e.minPrice }],
          price_currency: e.currencyCode,
          title: e.title,
          updated_at: e.updatedAt,
          shopUriOrigin: t.shopUriOrigin,
          shopUri: t.shopUri,
          shopName: t.shopName,
          themeName: t.themeName,
          themeId: t.themeId,
          themeUri: t.themeUri,
          themeStoreId: t.themeId,
          storeId: t.storeId,
          currencyActive: e.currencyCode,
          bestSellingUrl: "https://".concat(t.shopUriOrigin, "/collections/all?sort_by=best-selling"),
          facebook: t.facebook,
          twitter: t.twitter,
          instagram: t.instagram,
        };
      });
    }
  },
  63: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return w;
    }),
      r.d(t, "b", function () {
        return v;
      });
    var a = r(1),
      o = r.n(a),
      n = r(3),
      s = r.n(n),
      c = r(12),
      i = r.n(c),
      p = r(2),
      u = r.n(p),
      l = r(9),
      d = r.n(l),
      m = r(14),
      y = r.n(m),
      h = r(46),
      f = r(8);
    function g(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function _(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? g(Object(r), !0).forEach(function (t) {
              s()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : g(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var b = function (e) {
      var t = {},
        r = e.querySelector(".feedback-id");
      r && Object.assign(t, { id: parseInt(r.value) });
      var a = e.querySelector(".buyer-feedback");
      a && ((a = a.textContent.replace(/↵/gm, "").trim()), Object.assign(t, { feedback: a }));
      var o = e.querySelector(".star-view > span");
      if (o) {
        var n = Object(f.l)(o.getAttribute("style")) / 20;
        Object.assign(t, { rating: n });
      }
      var s = e.querySelector(".r-time");
      s && Object.assign(t, { createdAt: y()(s.textContent, "DD MMM YYYY hh:mm").format("MM/DD/YYYY") });
      var c = e.querySelector(".css_flag");
      c && Object.assign(t, { country: c.textContent });
      var i = e.querySelectorAll("img");
      if (i) {
        var p = d()(i).map(function (e) {
          return e.getAttribute("src");
        });
        Object.assign(t, { images: p });
      }
      var u = e.querySelector('[name="member_detail"]');
      u && Object.assign(t, { name: u.textContent });
      var l = e.querySelectorAll(".user-order-info span");
      if (l) {
        var m = {};
        d()(l).forEach(function (e) {
          var t = e.textContent
            .replace(/\↵/g, "")
            .trim()
            .split(":")
            .map(function (e) {
              return e.replace(/\↵/g, "").trim();
            });
          m[t[0]] = t[1];
        }),
          Object.assign(t, { orderInfos: m });
      }
      return t;
    };
    function w(e) {
      return function () {
        return u()(
          o.a.mark(function e(t) {
            var r, a, n, s, c, p, u, l, m, y, f, g, w, v, S, C, x, k, O;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.productId),
                      (a = t.adminSeq),
                      (n = t.page),
                      (s = void 0 === n ? 1 : n),
                      (c = t.language),
                      (p = void 0 === c ? "en" : c),
                      (u = t.evaStarFilterValue),
                      (l = void 0 === u ? "" : u),
                      (m = t.fullImages),
                      (y = void 0 !== m && m),
                      (f = i()(t, ["productId", "adminSeq", "page", "language", "evaStarFilterValue", "fullImages"])),
                      (g = "https://feedback.aliexpress."
                        .concat("ru" === p ? "ru" : "com", "/display/productEvaluation.htm?productId=")
                        .concat(r, "&ownerMemberId=")
                        .concat(a, "&memberType=seller&startValidDate=&i18n=true&withPictures=true&evaStarFilterValue=")
                        .concat(l, "&page=")
                        .concat(s)),
                      (e.next = 5),
                      Object(h.a)(_({ method: "GET", url: g }, f))
                    );
                  case 5:
                    if (200 === (w = e.sent).status) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return", []);
                  case 8:
                    return (
                      (v = new DOMParser()),
                      (S = v.parseFromString(w.data, "text/html")),
                      (C = S.querySelectorAll(".feedback-list-wrap .feedback-item")),
                      (x = d()(C).map(function (e) {
                        return b(e);
                      })),
                      y &&
                        ((k = []),
                        (O = 0),
                        x.forEach(function (e) {
                          var t = e.images.map(function (t) {
                            return O++, _(_({}, e), {}, { id: "".concat(e.id).concat(O), images: [t] });
                          });
                          k.push.apply(k, d()(t));
                        })),
                      e.abrupt("return", x)
                    );
                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function v(e) {
      return function () {
        return u()(
          o.a.mark(function e(t) {
            var r, a, n, s, c, p, u, l, m, y, f, g, w, v, S, C;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.productId),
                      (a = t.adminSeq),
                      (n = t.page),
                      (s = void 0 === n ? 0 : n),
                      (c = t.language),
                      (p = void 0 === c ? "en" : c),
                      (u = t.evaStarFilterValue),
                      (l = void 0 === u ? "" : u),
                      (m = i()(t, ["productId", "adminSeq", "page", "language", "evaStarFilterValue"])),
                      (y = "https://feedback.aliexpress."
                        .concat("ru" === p ? "ru" : "com", "/display/productEvaluation.htm?productId=")
                        .concat(r, "&ownerMemberId=")
                        .concat(a, "&memberType=seller&startValidDate=&i18n=true&withPictures=false&evaStarFilterValue=")
                        .concat(l, "&page=")
                        .concat(s)),
                      (e.next = 5),
                      Object(h.a)(_({ method: "GET", url: y }, m))
                    );
                  case 5:
                    if (200 === (f = e.sent).status) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return", []);
                  case 8:
                    return (
                      (g = new DOMParser()),
                      (w = g.parseFromString(f.data, "text/html")),
                      (v = w.querySelectorAll(".feedback-list-wrap .feedback-item")),
                      (S = d()(v).map(function (e) {
                        return b(e);
                      })),
                      (C = S.map(function (e) {
                        return e.country;
                      })),
                      e.abrupt("return", C)
                    );
                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
  },
  68: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    });
    var a = r(1),
      o = r.n(a),
      n = r(2),
      s = r.n(n),
      c = r(13);
    function i() {
      return function () {
        return s()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((t = s.length > 0 && void 0 !== s[0] ? s[0] : window.location.href), (e.prev = 1), t)) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 4:
                      return (r = new URL(t)), (r = "".concat(r.origin + r.pathname.replace(/\/$/g, ""), ".json")), (e.next = 8), Object(c.a)({ method: "GET", url: r, timeout: 1e4 });
                    case 8:
                      return (a = e.sent), (n = !0 === a.data.hasOwnProperty("product")), e.abrupt("return", { isShopify: n, data: a.data.product });
                    case 13:
                      return (e.prev = 13), (e.t0 = e.catch(1)), e.abrupt("return", !1);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 13]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
  },
  71: function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return f;
    }),
      r.d(t, "a", function () {
        return g;
      });
    var a = r(1),
      o = r.n(a),
      n = r(3),
      s = r.n(n),
      c = r(12),
      i = r.n(c),
      p = r(2),
      u = r.n(p),
      l = r(13),
      d = r(29);
    function m(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m(Object(r), !0).forEach(function (t) {
              s()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : m(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var h = "https://api-prod.alihunter.io";
    function f() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              m,
              f,
              g,
              _ = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = _.length > 0 && void 0 !== _[0] ? _[0] : {}),
                        (e.prev = 1),
                        (n = t.params),
                        (s = void 0 === n ? {} : n),
                        (c = t.shopInfo),
                        (p = void 0 === c ? {} : c),
                        (u = i()(t, ["params", "shopInfo"])),
                        (e.next = 5),
                        Object(l.a)(
                          y(
                            {
                              method: "POST",
                              url: "".concat(h, "/ext"),
                              headers: { "api-version": "v1.1.0", "Content-Type": "application/json" },
                              data: { action: "product.shopify.bestselling", data: y({ page_no: void 0, page_size: 20 }, s) },
                            },
                            u
                          )
                        )
                      );
                    case 5:
                      if (((m = e.sent), 200 === (f = m.status))) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return", { status: f, data: [] });
                    case 9:
                      return (
                        (g = (g = (null === (r = m.data) || void 0 === r || null === (a = r.data) || void 0 === a ? void 0 : a.products) || []).map(function (e) {
                          return Object(d.d)(p, e);
                        })),
                        e.abrupt("return", { status: f, data: g })
                      );
                    case 14:
                      return (e.prev = 14), (e.t0 = e.catch(1)), e.abrupt("return", { status: 500, data: [] });
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 14]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function g() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              m,
              f,
              g = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = g.length > 0 && void 0 !== g[0] ? g[0] : {}),
                        (e.prev = 1),
                        (a = t.params),
                        (n = void 0 === a ? {} : a),
                        (s = t.shopInfo),
                        (c = void 0 === s ? {} : s),
                        (p = i()(t, ["params", "shopInfo"])),
                        (e.next = 5),
                        Object(l.a)(
                          y(
                            {
                              method: "POST",
                              url: "".concat(h, "/ext"),
                              headers: { "api-version": "v1.1.0", "Content-Type": "application/json" },
                              data: { action: "product.shopify.list", data: y({ store_name: void 0, store_domain: void 0, page_no: void 0, page_size: 20 }, n) },
                            },
                            p
                          )
                        )
                      );
                    case 5:
                      if (((u = e.sent), 200 === (m = u.status))) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return", { status: m, data: [] });
                    case 9:
                      return (
                        (f = (f = (null === (r = u.data) || void 0 === r ? void 0 : r.data) || []).map(function (e) {
                          return Object(d.d)(c, e);
                        })),
                        e.abrupt("return", { status: m, data: f })
                      );
                    case 14:
                      return (e.prev = 14), (e.t0 = e.catch(1)), e.abrupt("return", { status: 500, data: [] });
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 14]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
  },
  8: function (e, t, r) {
    "use strict";
    r.d(t, "i", function () {
      return c;
    }),
      r.d(t, "d", function () {
        return i;
      }),
      r.d(t, "c", function () {
        return p;
      }),
      r.d(t, "l", function () {
        return u;
      }),
      r.d(t, "e", function () {
        return l;
      }),
      r.d(t, "a", function () {
        return d;
      }),
      r.d(t, "k", function () {
        return m;
      }),
      r.d(t, "j", function () {
        return y;
      }),
      r.d(t, "f", function () {
        return h;
      }),
      r.d(t, "g", function () {
        return f;
      }),
      r.d(t, "b", function () {
        return g;
      }),
      r.d(t, "h", function () {
        return _;
      });
    var a = r(1),
      o = r.n(a),
      n = (r(67), r(2)),
      s = r.n(n);
    function c(e) {
      return function () {
        return s()(
          o.a.mark(function e(t) {
            var r,
              a = arguments;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = a.length > 1 && void 0 !== a[1] ? a[1] : void 0),
                      e.abrupt(
                        "return",
                        new Promise(function (e) {
                          var a = new XMLHttpRequest();
                          (a.onload = function () {
                            var t = new FileReader();
                            (t.onloadend = function () {
                              var a = t.result.replace(/^data:image\/(.*?);base64,/, "");
                              e(a), r && r(t.result);
                            }),
                              t.readAsDataURL(a.response);
                          }),
                            a.open("GET", t),
                            (a.responseType = "blob"),
                            a.send();
                        })
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function i(e) {
      return new Promise(function (t) {
        return setTimeout(function () {
          return t(!0);
        }, e);
      });
    }
    function p(e) {
      return (e = (e = e.replace(/^\s+|\s+$/g, "")).toLowerCase())
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    }
    function u(e) {
      var t,
        r = e.match(/\/\d+(\.\d)*.html/g);
      if ((t = r ? r[0].match(/\d+/g) : e.match(/\d+/g)) && 0 !== t.length) return Number(t.join(""));
    }
    function l(e, t) {
      var r = new Image();
      (r.src = e),
        (r.onload = function () {
          var e = document.createElement("canvas"),
            r = e.getContext("2d");
          (e.width = this.width), (e.height = this.height), r.drawImage(this, 0, 0);
          var a = document.createElement("a");
          (a.download = t), (a.href = e.toDataURL()), a.click();
        });
    }
    function d(e) {
      var t = {};
      if (null == e || 0 == e.length) return t;
      var r = e.indexOf("://");
      t.protocol = e.substr(0, r);
      var a = e.substr(r + 3, e.length),
        o = a.indexOf("/");
      (o = -1 == o ? a.length - 1 : o), (t.domain = a.substr(0, o)), (t.path = -1 == o || o + 1 == a.length ? null : a.substr(o + 1, a.length));
      var n = t.domain.split(".");
      switch (n.length) {
        case 2:
          (t.subdomain = null), (t.host = n[0]), (t.tld = n[1]);
          break;
        case 3:
          (t.subdomain = n[0]), (t.host = n[1]), (t.tld = n[2]);
          break;
        case 4:
          (t.subdomain = n[0]), (t.host = n[1]), (t.tld = n[2] + "." + n[3]);
      }
      return (t.parent_domain = t.host + "." + t.tld), t;
    }
    var m = function (e, t) {
      for (var r = [], a = e; a <= t; a++) r.push(a);
      return r;
    };
    function y(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "https";
      if (!e) return e;
      if (e.includes("https://") || e.includes("http://")) return e;
      return /^(\/\/)/g.test(e) ? "".concat(t, ":").concat(e) : "".concat(t, "://").concat(e);
    }
    function h(e, t) {
      var r = t.filename,
        a = void 0 === r ? "video.mp4" : r;
      try {
        return new Promise(function (t, r) {
          var o = new XMLHttpRequest();
          o.open("GET", e, !0),
            (o.responseType = "blob"),
            (o.onload = function () {
              var e = (window.URL || window.webkitURL).createObjectURL(this.response),
                r = document.createElement("a");
              (r.href = e), (r.target = "_blank"), (r.download = a), document.body.appendChild(r), r.click(), document.body.removeChild(r), t(!0);
            }),
            (o.onerror = function (e) {
              r("Failed to download picture");
            }),
            o.send();
        });
      } catch (e) {}
    }
    function f(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",";
      try {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t);
      } catch (t) {
        return e;
      }
    }
    function g() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      try {
        return ((Number(e) / 100) * 5).toFixed(1);
      } catch (e) {
        return;
      }
    }
    function _() {
      try {
        var e = document.createElement("div");
        (e.style.visibility = "hidden"), (e.style.overflow = "scroll"), (e.style.msOverflowStyle = "scrollbar"), document.body.appendChild(e);
        var t = document.createElement("div");
        e.appendChild(t);
        var r = e.offsetWidth - t.offsetWidth;
        return e.parentNode.removeChild(e), r;
      } catch (e) {
        return;
      }
    }
  },
  82: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return h;
    });
    var a = r(1),
      o = r.n(a),
      n = r(3),
      s = r.n(n),
      c = r(12),
      i = r.n(c),
      p = r(2),
      u = r.n(p),
      l = r(13);
    function d(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function m(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? d(Object(r), !0).forEach(function (t) {
              s()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : d(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var y = "https://api-prod.alihunter.io";
    function h() {
      return function () {
        return u()(
          o.a.mark(function e() {
            var t,
              r,
              a,
              n,
              s,
              c,
              p,
              u,
              d,
              h = arguments;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = h.length > 0 && void 0 !== h[0] ? h[0] : {}),
                        (e.prev = 1),
                        (n = t.params),
                        (s = void 0 === n ? {} : n),
                        (c = t.productId),
                        (p = i()(t, ["params", "productId"])),
                        (e.next = 5),
                        Object(l.a)(
                          m({ method: "POST", url: "".concat(y, "/ext"), headers: { "api-version": "v1.1.0" }, data: { action: "product.detail.volume_statistic", data: m({ product_id: Number(c), view: "months", limit: void 0 }, s) } }, p)
                        )
                      );
                    case 5:
                      if (200 === (u = e.sent).status) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", { status: u.status, data: {} });
                    case 8:
                      return (d = (null === (r = u.data) || void 0 === r || null === (a = r.data) || void 0 === a ? void 0 : a.statistic) || {}), Array.isArray(d) && 0 === d.length && (d = {}), e.abrupt("return", { status: 200, data: d });
                    case 13:
                      return (e.prev = 13), (e.t0 = e.catch(1)), e.abrupt("return", { status: 500, data: {} });
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 13]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
  },
  83: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return O;
    });
    var a = r(3),
      o = r.n(a),
      n = r(1),
      s = r.n(n),
      c = r(2),
      i = r.n(c),
      p = r(9),
      u = r.n(p),
      l = r(14),
      d = r.n(l),
      m = r(13),
      y = r(12),
      h = r.n(y);
    function f(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function g(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? f(Object(r), !0).forEach(function (t) {
              o()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : f(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var _ = "https://api-prod.alihunter.io";
    function b() {
      return function () {
        return i()(
          s.a.mark(function e() {
            var t,
              r,
              a,
              o,
              n,
              c,
              i,
              p,
              u = arguments;
            return s.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                        (e.prev = 1),
                        (o = t.params),
                        (n = void 0 === o ? {} : o),
                        (c = h()(t, ["params"])),
                        (e.next = 5),
                        Object(m.a)(g({ method: "POST", url: "".concat(_, "/ext"), headers: {}, data: { action: "product.detail.price_history", data: g({ product_id: void 0 }, n) } }, c))
                      );
                    case 5:
                      if (200 === (i = e.sent).status) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", { status: i.status, data: [] });
                    case 8:
                      return (p = null === (r = i.data) || void 0 === r || null === (a = r.data) || void 0 === a ? void 0 : a.extraPriceHistory), (p = Array.isArray(p) ? p : []), e.abrupt("return", { status: 200, data: p });
                    case 13:
                      return (e.prev = 13), (e.t0 = e.catch(1)), e.abrupt("return", { status: e.t0.status, data: [] });
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 13]]
            );
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
    function w(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function v(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? w(Object(r), !0).forEach(function (t) {
              o()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : w(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var S = function (e, t) {
        if (0 === e.length) return {};
        var r = e
            .map(function (e) {
              return parseFloat(e.minPrice);
            })
            .filter(Boolean),
          a = "max" == t ? Math.max.apply(Math, u()(r)) : Math.min.apply(Math, u()(r)),
          o = e.filter(function (e) {
            if (e.minPrice == a && "" != e.date) return !0;
          });
        return 0 === o.length
          ? {}
          : o.reduce(function (e, t) {
              return new Date(e.date) > new Date(t.date) ? e : t;
            });
      },
      C = (function () {
        var e = i()(
          s.a.mark(function e(t) {
            var r, a;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = "https://api-dbh1-alitools.com/products/".concat(t, "?extraPriceHistory=full180&siteName=aliexpress")), (e.next = 3), Object(m.a)({ method: "GET", url: r });
                  case 3:
                    if (200 === (a = e.sent).status) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return", []);
                  case 7:
                    return e.abrupt("return", a.data.extraPriceHistory);
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      x = function (e) {
        var t = (function (e, t, r) {
          for (var a = []; t.diff(e, r) >= 0; ) a.push(e.format("DD MMM YYYY")), e.add(1, r);
          return a;
        })(d()().subtract(180, "days"), d()().subtract(0, "days"), "days");
        t = t.map(function (e) {
          return { date: e };
        });
        var r = void 0;
        t = (t = t.map(function (t) {
          var a = e.find(function (e) {
            return e.date === t.date;
          });
          return v(v({}, (r = a || r)), {}, { date: t.date });
        })).filter(function (e) {
          return e.minPrice;
        });
        var a = {};
        t.forEach(function (e) {
          var t = d()(e.date, "DD MMM YYYY").format("MMM");
          a.hasOwnProperty(t) ? Object.assign(a, o()({}, t, a[t] + 1)) : Object.assign(a, o()({}, t, 1));
        });
        var n = 0,
          s = void 0;
        return {
          data: (t = t.map(function (e) {
            var t = d()(e.date, "DD MMM YYYY").format("MMM");
            s === t ? n++ : ((n = 1), (s = t));
            var r = Number(String(a[t] / 2).split(".")[0]),
              o = n === r ? t : void 0;
            return v(v({}, e), {}, { dateLabel: o });
          })),
          min: S(t, "min"),
          max: S(t, "max"),
        };
      };
    function k(e) {
      var t = e.data,
        r = t.length - 90 < 0 ? 0 : t.length - 90;
      return { data: t.slice(r, t.length), min: S(t, "min"), max: S(t, "max") };
    }
    function O(e) {
      return function () {
        return i()(
          s.a.mark(function e(t) {
            var r, a, o, n, c, i, p, u, l;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = t.productId), (e.next = 3), b({ params: { product_id: r } });
                  case 3:
                    if (((a = e.sent), (o = a.data), (n = a.status), (c = o), 404 !== n)) {
                      e.next = 12;
                      break;
                    }
                    return (e.next = 10), C(r);
                  case 10:
                    (i = e.sent), (c = i);
                  case 12:
                    return (
                      (p = (p = c.map(function (e) {
                        return v(v({}, e), {}, { date: d()(e.date, "YYYY-MM-DD").format("DD MMM YYYY") });
                      })).filter(function (e) {
                        return "NaN" !== e.minPrice || "NaN" !== e.maxPrice;
                      })),
                      (u = x(p)),
                      (l = k({ data: u.data })),
                      e.abrupt("return", { range_3_months: l, range_6_months: u })
                    );
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
  },
  94: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return h;
    });
    var a = r(1),
      o = r.n(a),
      n = r(9),
      s = r.n(n),
      c = r(12),
      i = r.n(c),
      p = r(2),
      u = r.n(p),
      l = r(13),
      d = r(29),
      m = r(36);
    function y(e) {
      return e ? (/^(https?:\/\/)/gi.test(e) ? e : "https://".concat(e)) : null;
    }
    function h(e) {
      return function () {
        return u()(
          o.a.mark(function e(t) {
            var r, a, n, c, p, h, f, g, _, b, w, v, S, C;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.doc),
                      (a = void 0 === r ? document : r),
                      (n = t.page),
                      (c = void 0 === n ? 1 : n),
                      (p = i()(t, ["doc", "page"])),
                      (h = (null == p ? void 0 : p.shopInfo) || Object(m.a)({ doc: a })),
                      (f = "https://".concat(h.shopUriOrigin, "/collections/all?sort_by=best-selling&page=").concat(c)),
                      (e.next = 5),
                      Object(l.a)({ method: "GET", url: f })
                    );
                  case 5:
                    return (
                      (g = e.sent),
                      (_ = new DOMParser()),
                      (b = _.parseFromString(g.data, "text/html")),
                      (w = b.querySelectorAll('a[href^="/products/"], a[href^="/collections/"], a[href^="'.concat(h.shopUri, '/products/"], a[href^="').concat(h.shopUri, '/collections/"]'))),
                      (v = s()(w).map(function (e) {
                        var t = e.getAttribute("href");
                        return t && (t = y((t = t.includes(h.shopUri) ? t : "".concat(h.shopUri, "/").concat(t)))).includes("/products/") ? (t = (t = t.split("?")[0]).replace(/\/$/, "")) : null;
                      })),
                      (v = s()(new Set(v)).filter(Boolean)),
                      (e.next = 13),
                      Promise.all(
                        s()(v).map(function (e) {
                          return new Promise(
                            ((t = u()(
                              o.a.mark(function t(r) {
                                var a, n;
                                return o.a.wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (t.next = 2), Object(l.a)({ method: "GET", url: "".concat(e, ".json") });
                                      case 2:
                                        if (200 === (a = t.sent).status && a.data.product) {
                                          t.next = 6;
                                          break;
                                        }
                                        return r(null), t.abrupt("return");
                                      case 6:
                                        (n = Object(d.d)(h, a.data.product)), r(n);
                                      case 8:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            )),
                            function (e) {
                              return t.apply(this, arguments);
                            })
                          );
                          var t;
                        })
                      )
                    );
                  case 13:
                    return (
                      (S = (S = e.sent).filter(function (e) {
                        return e && e.image;
                      })),
                      (C = []),
                      (S = S.filter(function (e) {
                        return !C.includes(e.handle) && (C.push(e.handle), !0);
                      })),
                      e.abrupt("return", S)
                    );
                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ).apply(this, arguments);
      }.apply(this, arguments);
    }
  },
});
