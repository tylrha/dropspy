!(function (e) {
  function t(t) {
    for (var o, s, i = t[0], c = t[1], p = t[2], l = 0, y = []; l < i.length; l++) (s = i[l]), Object.prototype.hasOwnProperty.call(a, s) && a[s] && y.push(a[s][0]), (a[s] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    for (u && u(t); y.length; ) y.shift()();
    return n.push.apply(n, p || []), r();
  }
  function r() {
    for (var e, t = 0; t < n.length; t++) {
      for (var r = n[t], o = !0, i = 1; i < r.length; i++) {
        var c = r[i];
        0 !== a[c] && (o = !1);
      }
      o && (n.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var o = {},
    a = { 4: 0 },
    n = [];
  function s(t) {
    if (o[t]) return o[t].exports;
    var r = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.m = e),
    (s.c = o),
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
        for (var o in e)
          s.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
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
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var p = 0; p < i.length; p++) t(i[p]);
  var u = c;
  n.push([604, 0]), r();
})({
  13: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return f;
    });
    var o = r(12),
      a = r.n(o),
      n = r(1),
      s = r.n(n),
      i = r(3),
      c = r.n(i),
      p = r(2),
      u = r.n(p),
      l = r(33),
      y = r.n(l),
      m = r(93);
    function d(e) {
      try {
        return new m.Encryptor({ key: "dGytPN7u2fVYTi+oxtiv+PZnBI5SDTGrMpQiycPZRGg=", serialize_mode: "php" }).encryptSync(e);
      } catch (e) {
        return "";
      }
    }
    var h = r(35);
    function g(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function _(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? g(Object(r), !0).forEach(function (t) {
              c()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : g(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    function f() {
      return b.apply(this, arguments);
    }
    function b() {
      return (b = u()(
        s.a.mark(function e() {
          var t,
            r,
            o = arguments;
          return s.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = o.length > 0 && void 0 !== o[0] ? o[0] : {}),
                      (r = o.length > 1 ? o[1] : void 0),
                      (e.prev = 2),
                      e.abrupt(
                        "return",
                        new Promise(
                          (function () {
                            var e = u()(
                              s.a.mark(function e(o) {
                                var n, i, c, p, u, l, m, d;
                                return s.a.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (!(null === (n = chrome.runtime) || void 0 === n ? void 0 : n.restart) || !(null === (i = chrome.runtime) || void 0 === i ? void 0 : i.restartAfterDelay)) {
                                            e.next = 17;
                                            break;
                                          }
                                          return (
                                            (e.prev = 2),
                                            (c = t.url),
                                            (p = void 0 === c ? "" : c),
                                            (u = t.method),
                                            (l = void 0 === u ? "GET" : u),
                                            (m = a()(t, ["url", "method"])),
                                            (e.next = 6),
                                            y()(_({ url: p, method: l, validateStatus: !1 }, m))
                                          );
                                        case 6:
                                          (d = e.sent), o(d), r && r(d), (e.next = 15);
                                          break;
                                        case 11:
                                          (e.prev = 11), (e.t0 = e.catch(2)), o(e.t0), r && r(e.t0);
                                        case 15:
                                          e.next = 18;
                                          break;
                                        case 17:
                                          chrome.runtime.sendMessage({ type: "SEND_REQUEST", requestOptions: t }, function (e) {
                                            return o(e);
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
      )).apply(this, arguments);
    }
    r(17),
      r(53),
      y.a.interceptors.request.use(
        (function () {
          var e = u()(
            s.a.mark(function e(t) {
              var r, o, a, n;
              return s.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      r = new URL(t.url);
                      try {
                        (o = (null == t ? void 0 : t.currency) || "USD"), (t.headers["x-app-language"] = "en".toUpperCase()), (t.headers["currency-unit"] = o.toUpperCase()), (t.headers.locale = (null == t ? void 0 : t.locale) || "en_US");
                      } catch (e) {}
                      if ("/ext" !== r.pathname || "POST" !== t.method.toUpperCase()) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 5), h.b();
                    case 5:
                      (a = e.sent), (n = { payload: d(t.data) }), a && Object.assign(t, { headers: _(_({}, t.headers), {}, { Authorization: "Bearer ".concat(a) }) }), Object.assign(t, { data: n });
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
      y.a.interceptors.response.use(
        function (e) {
          var t = e.config;
          return "/ext" === new URL(t.url).pathname && "POST" === t.method.toUpperCase() && 401 === e.status && h.a(), e;
        },
        function (e) {
          if (y.a.isCancel(e)) throw _({ cancelToken: !0 }, e);
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
      return i;
    }),
      r.d(t, "a", function () {
        return p;
      }),
      r.d(t, "b", function () {
        return l;
      });
    var o = r(1),
      a = r.n(o),
      n = r(2),
      s = r.n(n);
    function i(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (c = s()(
        a.a.mark(function e(t) {
          return a.a.wrap(function (e) {
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
      )).apply(this, arguments);
    }
    function p(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (u = s()(
        a.a.mark(function e(t) {
          return a.a.wrap(function (e) {
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
      )).apply(this, arguments);
    }
    function l(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (y = s()(
        a.a.mark(function e(t) {
          return a.a.wrap(function (e) {
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
      )).apply(this, arguments);
    }
  },
  22: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return c;
    }),
      r.d(t, "b", function () {
        return u;
      }),
      r.d(t, "c", function () {
        return l;
      });
    var o = r(3),
      a = r.n(o);
    function n(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? n(Object(r), !0).forEach(function (t) {
              a()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : n(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var i = [
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
    function c(e) {
      for (var t = "", r = 0; r < i.length; r++)
        if (i[r].currencyType === e) {
          t = i[r];
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
      var r = c(t.toUpperCase());
      if (!r) return {};
      var o = "";
      try {
        o = Number(e).toLocaleString("".concat(r.language, "-").concat(p(r.countryCode)));
      } catch (e) {}
      var a = s(s({}, r), {}, { price: e, format: o, formatedAmount: "".concat(r.currencySymbol).concat(o) });
      return a;
    }
    function l() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD";
      try {
        if (!e && 0 !== e) return;
        var r = c(t.toUpperCase());
        if (!r) return {};
        var o = e.match(/\d+((\.|,)\d)*/g),
          a = o.join(""),
          n = r.language,
          s = p(r.countryCode),
          i = Number(123456).toLocaleString("".concat(n, "-").concat(s)),
          u = i.match(/(\.|,)/g);
        return "." === u.toString() && (a = (a = (a = a.replace(/\.+/g, "comma")).replace(/,+/g, ".")).replace(/[comma]+/g, ",")), (a = y(a)), (a = Number(a));
      } catch (e) {
        return;
      }
    }
    function y(e) {
      try {
        var t = e.match(/\d+(\.\d)*/g);
        return Number(t.join(""));
      } catch (e) {
        return;
      }
    }
  },
  24: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return o;
    }),
      r.d(t, "b", function () {
        return a;
      }),
      r(0);
    var o = [
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
      a = [
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
    t.a = [].concat(o, [
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
  29: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return h;
    }),
      r.d(t, "b", function () {
        return _;
      }),
      r.d(t, "c", function () {
        return b;
      }),
      r.d(t, "d", function () {
        return S;
      }),
      r.d(t, "e", function () {
        return v;
      });
    var o = r(3),
      a = r.n(o),
      n = r(1),
      s = r.n(n),
      i = r(9),
      c = r.n(i),
      p = r(2),
      u = r.n(p),
      l = r(14),
      y = r.n(l),
      m = r(13),
      d = (r(8), r(59));
    function h(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (g = u()(
        s.a.mark(function e(t) {
          var r, o, a, n, i, c, p, u, l, y, d;
          return s.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.shopUriOrigin),
                      (o = void 0 === r ? "" : r),
                      (a = t.page),
                      (n = void 0 === a ? 1 : a),
                      (i = t.limit),
                      (c = void 0 === i ? 20 : i),
                      (e.prev = 1),
                      (p = "https://".concat(o, "/products.json?page=").concat(n, "&limit=").concat(c)),
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
                      (y = l.products),
                      (d = (d = void 0 === y ? [] : y).filter(function (e) {
                        return e && e.images.length > 0;
                      })),
                      e.abrupt("return", d)
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
      )).apply(this, arguments);
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (f = u()(
        s.a.mark(function e(t) {
          var r, o, a, n, i, c, p;
          return s.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = t.shopUriOrigin), (o = void 0 === r ? "" : r), (e.prev = 1), (a = "https://".concat(o, "/products.json?limit=250")), (e.next = 5), Object(m.a)({ url: a, method: "GET" });
                  case 5:
                    if (200 === (n = e.sent).status) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return", []);
                  case 8:
                    return (
                      (i = n.data || {}),
                      (c = i.products),
                      (p = (p = void 0 === c ? [] : c).filter(function (e) {
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
      )).apply(this, arguments);
    }
    function b() {
      return w.apply(this, arguments);
    }
    function w() {
      return (w = u()(
        s.a.mark(function e() {
          var t,
            r,
            o,
            n,
            i,
            c,
            p,
            u,
            l,
            y,
            m,
            d,
            g,
            _,
            f = arguments;
          return s.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  (t = f.length > 0 && void 0 !== f[0] ? f[0] : ""), (r = 30), (o = !0), (n = 1), (i = 0), (c = 1e4), (p = {}), (u = []), (l = [10, 50, 100]), (y = 0);
                case 10:
                  if (!(y < l.length)) {
                    e.next = 23;
                    break;
                  }
                  return (m = l[y]), (e.next = 14), h({ shopUriOrigin: t, page: m, limit: r });
                case 14:
                  if (((d = e.sent), Object.assign(p, a()({}, m, d)), 0 !== d.length)) {
                    e.next = 19;
                    break;
                  }
                  return (c = m), e.abrupt("break", 23);
                case 19:
                case 20:
                  y++, (e.next = 10);
                  break;
                case 23:
                  g = c;
                case 24:
                  if (!o) {
                    e.next = 57;
                    break;
                  }
                  if (!p.hasOwnProperty(g)) {
                    e.next = 29;
                    break;
                  }
                  (u = p[g]), (e.next = 33);
                  break;
                case 29:
                  return (e.next = 31), h({ shopUriOrigin: t, page: g, limit: r });
                case 31:
                  (u = e.sent), Object.assign(p, a()({}, g, u));
                case 33:
                  if (!(u.length > 0)) {
                    e.next = 37;
                    break;
                  }
                  (g += c), (e.next = 53);
                  break;
                case 37:
                  if (((_ = []), !p.hasOwnProperty(g - 1))) {
                    e.next = 42;
                    break;
                  }
                  (_ = p[g - 1]), (e.next = 46);
                  break;
                case 42:
                  return (e.next = 44), h({ shopUriOrigin: t, page: g - 1, limit: r });
                case 44:
                  (_ = e.sent), Object.assign(p, a()({}, g - 1, _));
                case 46:
                  if (!(_.length > 0)) {
                    e.next = 50;
                    break;
                  }
                  return (i = (g - 2) * r + _.length), (o = !1), e.abrupt("continue", 24);
                case 50:
                  (g -= c), (c = Math.floor(c / 2)), (g += c);
                case 53:
                  ++n > 100 && (o = !1), (e.next = 24);
                  break;
                case 57:
                  return e.abrupt("return", i);
                case 58:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    var S = function (e, t) {
        var r,
          o = ((null == t ? void 0 : t.image) && (null == t || null === (r = t.image) || void 0 === r ? void 0 : r.src)) || !1;
        !o && (null == t ? void 0 : t.images.length) > 0 && (o = t.images[0] && t.images[0].src);
        var a = null,
          n = null;
        if (t.variants.length > 0) {
          var s = t.variants.map(function (e) {
            return parseFloat(e.price);
          });
          (a = Math.min.apply(Math, c()(s))), (n = Math.max.apply(Math, c()(s)));
        }
        var i = Object(d.a)(a, e.currencyActive);
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
          image: o,
          images: t.images,
          minPrice: a,
          maxPrice: n,
          priceAmount: i,
          currencyCode: e.currencyActive,
          created_at: t.created_at,
          updatedAt: y()(t.updated_at).fromNow(),
          updatedAtValue: t.updated_at,
          createdAt: y()(t.created_at).fromNow(),
          updatedAtISO: y()(t.updated_at).format(),
          createdAtISO: y()(t.created_at).format(),
        };
      },
      v = function (e, t) {
        var r,
          o = null;
        if (t.variants.length > 0) {
          var a = t.variants.map(function (e) {
            return parseFloat(e.price);
          });
          o = Math.min.apply(Math, c()(a));
        }
        var n = ((null == t ? void 0 : t.image) && (null == t || null === (r = t.image) || void 0 === r ? void 0 : r.src)) || !1;
        !n && (null == t ? void 0 : t.images.length) > 0 && (n = t.images[0] && t.images[0].src);
        var s = Object(d.a)(o, e.currencyActive),
          i = n,
          p = i.lastIndexOf("."),
          u = i.substring(0, p),
          l = i.substring(p, i.length),
          m = "".concat(u, "_").concat("70x70").concat(l);
        return {
          id: t.id,
          href: "https://".concat(e.shopUriOrigin, "/products/").concat(t.handle),
          image: m,
          priceAmount: s,
          title: t.title,
          updatedAt: y()(t.updated_at).fromNow(),
          updatedAtValue: t.updated_at,
          createdAtValue: t.created_at,
        };
      };
  },
  34: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return _;
    }),
      r.d(t, "b", function () {
        return b;
      });
    var o = r(1),
      a = r.n(o),
      n = r(2),
      s = r.n(n),
      i = r(9),
      c = r.n(i),
      p = r(14),
      u = r.n(p),
      l = r(46),
      y = r(22),
      m = r(38);
    function d(e) {
      var t = e.videoId,
        r = e.videoUid;
      if (t && r) return "https://cloud.video.taobao.com/play/u/".concat(r, "/p/1/e/6/t/10301/").concat(t, ".mp4");
    }
    var h = function () {
        var e,
          t,
          r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
          o = r.querySelectorAll("script"),
          a = c()(o).filter(function (e) {
            return e.textContent.includes("window.runParams = {");
          });
        if (!(a = (null === (e = a) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.textContent.trim().replace(/\s\s+/gm, " ")) || null)) return null;
        var n = /window.runParams = { data: (.*?), csrfToken:/gm,
          s = n.exec(a),
          i = (s && s[1]) || null;
        return i ? (i = JSON.parse(i)) : null;
      },
      g = (function () {
        var e = s()(
          a.a.mark(function e() {
            var t,
              r,
              o,
              n,
              s,
              i,
              p,
              l,
              g,
              _,
              f,
              b,
              w,
              S,
              v,
              C,
              k,
              x,
              T,
              E,
              F,
              N,
              P,
              j,
              D,
              A,
              O,
              M,
              R,
              U,
              B,
              L,
              I,
              G,
              H,
              K,
              z,
              W,
              V,
              Z,
              q,
              $,
              X,
              Y,
              J,
              Q,
              ee,
              te,
              re,
              oe,
              ae,
              ne,
              se,
              ie,
              ce,
              pe,
              ue,
              le,
              ye,
              me,
              de,
              he,
              ge,
              _e,
              fe,
              be,
              we,
              Se,
              ve,
              Ce,
              ke,
              xe,
              Te,
              Ee,
              Fe,
              Ne,
              Pe,
              je,
              De,
              Ae,
              Oe,
              Me,
              Re,
              Ue,
              Be,
              Le,
              Ie,
              Ge,
              He,
              Ke,
              ze,
              We,
              Ve,
              Ze,
              qe,
              $e,
              Xe = arguments;
            return a.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = Xe.length > 0 && void 0 !== Xe[0] ? Xe[0] : document),
                        (e.prev = 1),
                        (p = h(t)),
                        (l = p.imageModule || {}),
                        (g = l.imagePathList),
                        (_ = void 0 === g ? [] : g),
                        (f = l.videoId),
                        (b = l.videoUid),
                        (w = p.actionModule || {}),
                        (S = w.productId),
                        (v = void 0 === S ? 0 : S),
                        (C = w.categoryId),
                        (k = void 0 === C ? null : C),
                        (x = w.storeNum),
                        (T = void 0 === x ? null : x),
                        (E = w.itemWishedCount),
                        (F = w.totalAvailQuantity),
                        (N = p.crossLinkModule || {}),
                        (P = N.breadCrumbPathList),
                        (j = void 0 === P ? [] : P),
                        (D = p.descriptionModule || {}),
                        (A = D.descriptionUrl),
                        (O = void 0 === A ? "" : A),
                        (M = p.skuModule || {}),
                        (R = M.productSKUPropertyList),
                        (U = void 0 === R ? [] : R),
                        (B = p.titleModule || {}),
                        (L = B.subject),
                        (I = void 0 === L ? "" : L),
                        (G = B.tradeCount),
                        (H = void 0 === G ? 0 : G),
                        (K = p.webEnv || {}),
                        (z = K.language),
                        (W = void 0 === z ? "en" : z),
                        (V = K.country),
                        (Z = void 0 === V ? "" : V),
                        (q = K.currency),
                        ($ = void 0 === q ? "" : q),
                        (X = (null == p || null === (r = p.titleModule) || void 0 === r ? void 0 : r.feedbackRating) || {}),
                        (Y = X.averageStar),
                        (J = void 0 === Y ? 0 : Y),
                        (Q = X.totalValidNum),
                        (ee = void 0 === Q ? 0 : Q),
                        (te = (null == p || null === (o = p.titleModule) || void 0 === o ? void 0 : o.feedbackRating) || {}),
                        (re = p.priceModule || {}),
                        (oe = re.minAmount),
                        (ae = void 0 === oe ? {} : oe),
                        (ne = re.minActivityAmount),
                        (se = void 0 === ne ? {} : ne),
                        (ie = re.maxActivityAmount),
                        (ce = void 0 === ie ? {} : ie),
                        (pe = re.maxAmount),
                        (ue = void 0 === pe ? {} : pe),
                        (le = p.storeModule || {}),
                        (ye = le.sellerAdminSeq),
                        (me = void 0 === ye ? null : ye),
                        (de = le.companyId),
                        (he = void 0 === de ? null : de),
                        (ge = le.openTime),
                        (_e = void 0 === ge ? "" : ge),
                        (fe = le.topRatedSeller),
                        (be = void 0 !== fe && fe),
                        (we = le.storeURL),
                        (Se = void 0 === we ? "" : we),
                        (ve = le.positiveNum),
                        (Ce = void 0 === ve ? "--" : ve),
                        (ke = le.followingNumber),
                        (xe = void 0 === ke ? "--" : ke),
                        (Te = le.storeName),
                        (Ee = void 0 === Te ? "" : Te),
                        (Fe = le.positiveRate),
                        (Ne = void 0 === Fe ? "--" : Fe),
                        (Pe = (null == p ? void 0 : p.specsModule) || {}),
                        (je = Pe.props),
                        (De = void 0 === je ? [] : je),
                        (Ae = (se && se.value) || (ae && ae.value)),
                        (Oe = (ce && ce.value) || (ue && ue.value)),
                        (Me = (se && se.currency) || (ae && ae.currency)),
                        (Re = Object(y.a)(Me)),
                        (Re = (null === (n = Re) || void 0 === n ? void 0 : n.currencySymbol) || ""),
                        (Ue = Object(y.b)(Ae, Me)),
                        (Be = Object(y.b)(Oe, Me)),
                        (Le = u()(_e, "MMM DD, YYYY").fromNow()),
                        (Ie = Object(m.e)(t)),
                        (Ge =
                          Array.isArray(U) &&
                          U.map(function (e) {
                            return e.skuPropertyValues.map(function (e) {
                              return null == e ? void 0 : e.skuPropertyImagePath;
                            });
                          })),
                        (He = c()(new Set(Ge.flat(2).filter(Boolean)))),
                        (Ke = t.querySelector(".img-view-wrap video")),
                        (ze = Ke ? Ke.src : ""),
                        (We = U.find(function (e) {
                          return "Ships From" === e.skuPropertyName;
                        })),
                        (We = (We = (null === (s = We) || void 0 === s ? void 0 : s.skuPropertyValues) || []).map(function (e) {
                          return { displayName: null == e ? void 0 : e.propertyValueDisplayName, code: null == e ? void 0 : e.skuPropertySendGoodsCountryCode };
                        })),
                        (Ve = void 0),
                        f && b && (Ve = d({ videoId: f, videoUid: b })),
                        (Ze = "en_US"),
                        null != p && null !== (i = p.webEnv) && void 0 !== i && i.locale && (Ze = null == p || null === (qe = p.webEnv) || void 0 === qe ? void 0 : qe.locale),
                        ($e = {
                          country: Z,
                          currency: $,
                          avgReview: parseFloat(J),
                          adminSeq: me,
                          currencyRate: null,
                          wishedCount: E,
                          currencyCode: Me,
                          currencySymbol: Re,
                          companyId: he,
                          productId: v,
                          categoryId: k,
                          priceMin: Ae,
                          priceMax: Oe,
                          priceMinAmount: Ue,
                          priceMaxAmount: Be,
                          quantity: F,
                          specifications: De,
                          productThumbnail: _[0],
                          productPhotos: _,
                          productVideo: ze,
                          productTitle: I,
                          totalOrders: H,
                          totalReviews: Ie || ee,
                          feedbackRating: te,
                          supplierId: T,
                          totalFollowerOfSupplier: xe,
                          supplierName: Ee,
                          supplierUrl: Se,
                          shouldTopBranch: be,
                          joinDate: Le,
                          joinDateOrigin: _e,
                          totalFeedbackOfSupplier: Ce,
                          positiveFeedback: Ne,
                          language: W,
                          breadcrumbs: j,
                          variantsPhoto: He,
                          descriptionUrl: O,
                          shippingFrom: We,
                          video: { videoId: f, videoUid: b, videoURL: Ve },
                          locale: Ze,
                        }),
                        e.abrupt("return", $e)
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
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (f = s()(
        a.a.mark(function e() {
          var t,
            r,
            o,
            n = arguments;
          return a.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (t = n.length > 0 && void 0 !== n[0] ? n[0] : document), (r = n.length > 1 && void 0 !== n[1] ? n[1] : ""), (e.next = 4), g(t);
                case 4:
                  if ((o = e.sent).productId) {
                    e.next = 9;
                    break;
                  }
                  return (e.next = 8), S(r);
                case 8:
                  o = e.sent;
                case 9:
                  return e.abrupt("return", o);
                case 10:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function b(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (w = s()(
        a.a.mark(function e(t) {
          var r, o, n, s, i, c, p, u;
          return a.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = t.productId), (o = t.isFullOrigin), (n = t.isOmit), (e.prev = 1), (e.next = 4), Object(l.a)({ method: "GET", url: "https://www.aliexpress.com/item/".concat(r, ".html"), credentials: n ? "omit" : void 0 });
                  case 4:
                    return (s = e.sent), (i = new DOMParser()), (c = i.parseFromString(s.data, "text/html")), (e.next = 9), g(c);
                  case 9:
                    return (p = e.sent), o && ((u = h(c)), Object.assign(p, { originRunParams: u, originDOMtext: s.data })), e.abrupt("return", p);
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
      )).apply(this, arguments);
    }
    function S(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (v = s()(
        a.a.mark(function e(t) {
          var r, o, n, s, i;
          return a.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (r = t.replace(".ru", ".com")), (e.next = 4), Object(l.a)({ method: "GET", url: r });
                  case 4:
                    return (o = e.sent), (n = new DOMParser()), (s = n.parseFromString(o.data, "text/html")), (e.next = 9), g(s);
                  case 9:
                    return (i = e.sent), e.abrupt("return", i);
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
      )).apply(this, arguments);
    }
  },
  35: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return l;
    }),
      r.d(t, "b", function () {
        return m;
      }),
      r.d(t, "a", function () {
        return h;
      });
    var o = r(1),
      a = r.n(o),
      n = r(3),
      s = r.n(n),
      i = r(2),
      c = r.n(i),
      p = (r(13), r(17)),
      u = "access_token";
    function l(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (y = c()(
        a.a.mark(function e(t) {
          return a.a.wrap(function (e) {
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
      )).apply(this, arguments);
    }
    function m() {
      return d.apply(this, arguments);
    }
    function d() {
      return (d = c()(
        a.a.mark(function e() {
          return a.a.wrap(function (e) {
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
      )).apply(this, arguments);
    }
    function h() {
      return g.apply(this, arguments);
    }
    function g() {
      return (g = c()(
        a.a.mark(function e() {
          return a.a.wrap(function (e) {
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
      )).apply(this, arguments);
    }
  },
  36: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return P;
    }),
      r.d(t, "b", function () {
        return j;
      });
    var o = r(1),
      a = r.n(o),
      n = r(2),
      s = r.n(n),
      i = r(3),
      c = r.n(i),
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
      y = (r(13), r(8));
    function m() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
      try {
        var t = e.documentElement.innerHTML || "",
          r = /facebook.com(.*?)"/gm,
          o = r.exec(t),
          a = /fb.me(.*?)"/gm,
          n = a.exec(t),
          s = /fb.com(.*?)"/gm,
          i = s.exec(t),
          c = null;
        if ((o && o[0] && -1 == o[0].indexOf("facebook.com/sharer") ? (c = (c = o[0]).replace(/"/g, "")) : n && n[0] ? (c = (c = n[0]).replace(/"/g, "")) : i && i[0] && (c = (c = i[0]).replace(/"/g, "")), c)) {
          var p = c.split("/");
          if (2 === p.length || (3 === p.length && "" === p[2])) return { social: "facebook", url: "https://".concat(c) };
        }
        return;
      } catch (e) {
        return;
      }
    }
    function d() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
      try {
        var t = e.documentElement.innerHTML || "",
          r = /instagram.com(.*?)"/gm,
          o = r.exec(t);
        if (o && o[0] && -1 == o[0].indexOf("instagram.com/share")) {
          var a = o[0],
            n = (a = a.replace(/"/g, "")).split("/");
          if (2 === n.length || (3 === n.length && "" === n[2])) return { social: "instagram", url: "https://".concat(a) };
        }
        return;
      } catch (e) {
        return;
      }
    }
    function h() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
      try {
        var t = e.documentElement.innerHTML || "",
          r = /twitter.com(.*?)"/gm,
          o = r.exec(t);
        if (o && o[0] && -1 == o[0].indexOf("twitter.com/share")) {
          var a = o[0],
            n = (a = a.replace(/"/g, "")).split("/");
          if (2 === n.length || (3 === n.length && "" === n[2])) return { social: "twitter", url: "https://".concat(a) };
        }
        return;
      } catch (e) {
        return;
      }
    }
    function g() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
      try {
        var t = e.documentElement.innerHTML || "",
          r = /youtube.com\/user(.*?)"/gm,
          o = /youtube.com\/channel(.*?)"/gm,
          a = r.exec(t) || o.exec(t);
        if (a && a[0]) {
          var n = a[0],
            s = (n = n.replace(/"/g, "")).split("/");
          if (2 === s.length || (3 === s.length && "" === s[2])) return { social: "youtube", url: "https://".concat(n) };
        }
        return;
      } catch (e) {
        return;
      }
    }
    function _() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
      try {
        var t = e.documentElement.innerHTML || "",
          r = /linkedin.com(.*?)"/gm,
          o = r.exec(t);
        if (o && o[0] && -1 == o[0].indexOf("linkedin.com/shareArticle")) {
          var a = o[0],
            n = (a = a.replace(/"/g, "")).split("/");
          if (2 === n.length || (3 === n.length && "" === n[2])) return { social: "linkedin", url: "https://".concat(a) };
        }
        return;
      } catch (e) {
        return;
      }
    }
    function f() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
      try {
        var t = e.documentElement.innerHTML || "",
          r = /pinterest.co(.*?)"/gm,
          o = r.exec(t);
        if (o && o[0] && -1 == o[0].indexOf("pinterest.com/pin/create/button")) {
          var a = o[0],
            n = (a = a.replace(/"/g, "")).split("/");
          if (2 === n.length || (3 === n.length && "" === n[2])) return { social: "pinterest", url: "https://".concat(a) };
        }
        return;
      } catch (e) {
        return;
      }
    }
    var b = r(58);
    function w(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function S(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? w(Object(r), !0).forEach(function (t) {
              c()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : w(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    function v(e) {
      try {
        var t = e.querySelector("#shopify-features");
        return (t && JSON.parse(t.textContent)) || {};
      } catch (e) {
        return {};
      }
    }
    function C(e, t) {
      var r = e.querySelector('[property="og:site_name"]');
      return r ? r.content : (r = t.replace(".myshopify.com", ""));
    }
    function k() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        t = {},
        r = e.querySelector("title");
      if (r && "string" == typeof r.textContent) {
        var o = null == r ? void 0 : r.textContent.trim();
        Object.assign(t, { title: o });
      }
      var a = e.querySelector("meta[name='description']");
      if (a && "string" == typeof a.getAttribute("content")) {
        var n = a.getAttribute("content").trim();
        Object.assign(t, { description: n });
      }
      return t;
    }
    function x() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        t = m(e),
        r = d(e),
        o = h(e),
        a = g(e),
        n = _(e),
        s = f(e),
        i = [t, r, o, a, n, s];
      return (i = u()(new Set(i))).filter(Boolean);
    }
    function T(e, t) {
      for (var r = "", o = 0; o < e.length; o++)
        if (e[o].id == t) {
          r = e[o];
          break;
        }
      return r;
    }
    function E(e) {
      return /^\/\/cdn/gi.test(e) ? "https:".concat(e) : e;
    }
    function F(e) {
      return e.getAttribute("src") ? e.getAttribute("src").trim() : e.getAttribute("data-srcset") ? e.getAttribute("data-srcset").trim() : void 0;
    }
    function N(e) {
      var t = e.querySelectorAll("a"),
        r = !0;
      if (0 === t.length)
        return (function (e) {
          var t = e.querySelectorAll("img");
          if (0 === t.length) return [];
          var r = u()(t).map(function (e) {
              var t = F(e);
              return "logo" === e.getAttribute("itemprop") || (t && t.includes("cdn.shopify.com/s/files/") && t.includes("/logo")) ? E(t) : void 0;
            }),
            o = [];
          return r.filter(function (e) {
            if (e && !o.includes(e)) return o.push(e), e;
          });
        })(e);
      var o = u()(t).map(function (e) {
          if (r && "/" === e.getAttribute("href")) {
            var t = e.querySelector("img");
            if (t) {
              var o = F(t);
              if ("logo" === t.getAttribute("itemprop")) return (r = !1), E(o);
              if (o && o.includes("cdn.shopify.com/s/files/")) return (r = !1), E(o);
            }
          }
        }),
        a = [];
      return o.filter(function (e) {
        if (e && !a.includes(e)) return a.push(e), e;
      });
    }
    function P(e) {
      var t = e.doc,
        r = void 0 === t ? document : t,
        o = e.socials,
        a = void 0 === o || o;
      try {
        var n,
          s = null === (n = r.documentElement) || void 0 === n ? void 0 : n.textContent,
          i = (function (e) {
            var t = /window.ShopifyAnalytics.meta.currency = '(.*?)';$/m.exec(e);
            if (t) return t[1];
            var r = document.querySelector('[property="og:price:currency"]');
            return r ? r.getAttribute("content") : "";
          })(s),
          p = (function (e) {
            var t = /Shopify.theme = (.*?);$/m.exec(e),
              r = void 0;
            try {
              r = (t && JSON.parse(t[1])) || {};
            } catch (e) {
              return;
            }
            return r;
          })(s),
          u = "",
          m = "",
          d = "",
          h = "",
          g = "";
        p && ((u = null == p ? void 0 : p.name), (m = null == p ? void 0 : p.id), (d = null == p ? void 0 : p.theme_store_id), (g = ((h = T(l, d)) && h.theme_store_url) || null));
        var _ = N(r),
          f = v(r),
          w =
            (function (e) {
              try {
                var t = e.querySelector("link[rel='canonical']");
                if (t && t.hasAttribute("href")) {
                  var r = t.getAttribute("href");
                  return new URL(Object(y.j)(r)).hostname;
                }
                return null;
              } catch (e) {
                return null;
              }
            })(r) || f.domain,
          E =
            (function (e) {
              var t = /Shopify.shop = (.*?);$/m.exec(e),
                r = "";
              try {
                r = (t && JSON.parse(t[1])) || "";
              } catch (e) {}
              return r;
            })(s) || w,
          F = f.shopId;
        if (!E) return;
        var P = C(r, E),
          j = k(r),
          D = j.title,
          A = void 0 === D ? "" : D,
          O = j.description,
          M = void 0 === O ? "" : O,
          R = {
            shopUriOrigin: E,
            shopUri: w,
            shopName: P,
            themeName: u,
            themeId: m,
            themeUri: g,
            themeStoreId: d,
            storeId: F,
            currencyActive: i,
            bestSellingUrl: "https://".concat(E, "/collections/all?sort_by=best-selling"),
            facebook: null,
            twitter: null,
            instagram: null,
            title: A,
            description: M,
            logos: _,
          };
        a &&
          x(r).forEach(function (e) {
            R = S(S({}, R), {}, c()({}, e.social, { url: e.url }));
          });
        var U = Object(b.a)(r);
        return (R = S(S({}, R), {}, { appUsed: U }));
      } catch (e) {
        return;
      }
    }
    function j(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (D = s()(
        a.a.mark(function e(t) {
          var r, o, n, s, i, p, u, y, m, d, h, g, _, f, w, E, F, P, j, D, O, M, R, U, B, L, I;
          return a.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((r = t.doc), (o = void 0 === r ? document : r), (n = t.socials), (s = void 0 === n || n), (e.prev = 1), o)) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return");
                  case 4:
                    return (e.next = 6), A();
                  case 6:
                    if (
                      ((p = e.sent),
                      (u = ""),
                      (y = ""),
                      (m = ""),
                      (d = ""),
                      (h = ""),
                      null != p &&
                        p.theme &&
                        ((u = null == p || null === (g = p.theme) || void 0 === g ? void 0 : g.name),
                        (y = null == p || null === (_ = p.theme) || void 0 === _ ? void 0 : _.id),
                        (m = null == p || null === (f = p.theme) || void 0 === f ? void 0 : f.theme_store_id),
                        (d = T(l, m)),
                        (h = (d && d.theme_store_url) || null)),
                      (w = N(o)),
                      (E = v(o)),
                      (F = window.location.host),
                      (P = (null == p ? void 0 : p.shop) || F),
                      (j = E.shopId),
                      P)
                    ) {
                      e.next = 20;
                      break;
                    }
                    return e.abrupt("return", void 0);
                  case 20:
                    return (
                      (D = C(o, P)),
                      (O = k(o)),
                      (M = O.title),
                      (R = void 0 === M ? "" : M),
                      (U = O.description),
                      (B = void 0 === U ? "" : U),
                      (L = {
                        shopUriOrigin: P,
                        shopUri: F,
                        shopName: D,
                        themeName: u,
                        themeId: y,
                        themeUri: h,
                        themeStoreId: m,
                        storeId: j,
                        currencyActive: null == p || null === (i = p.currency) || void 0 === i ? void 0 : i.active,
                        bestSellingUrl: "https://".concat(P, "/collections/all?sort_by=best-selling"),
                        facebook: null,
                        twitter: null,
                        instagram: null,
                        title: R,
                        description: B,
                        logos: w,
                      }),
                      s &&
                        x(o).forEach(function (e) {
                          L = S(S({}, L), {}, c()({}, e.social, { url: e.url }));
                        }),
                      (I = Object(b.a)(o)),
                      (L = S(S({}, L), {}, { appUsed: I })),
                      e.abrupt("return", L)
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
      )).apply(this, arguments);
    }
    function A() {
      try {
        var e = document.createElement("script"),
          t = document.createTextNode(
            "\n            var d_extah = document.createElement('div');\n            d_extah.id = 'extah-shopify';\n            d_extah.style.width = 0;\n            d_extah.style.height = 0;\n            d_extah.style.overflow = 'hidden';\n            var c_extao = document.createTextNode(JSON.stringify(window.Shopify));\n            d_extah.appendChild(c_extao);\n            var b_extah = document.body\n            b_extah.insertAdjacentElement('beforeend', d_extah);\n        "
          );
        e.appendChild(t);
        var r = document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(e, r);
        var o = document.querySelector("#extah-shopify"),
          a = o.innerHTML;
        return o.remove(), e.remove(), JSON.parse(a) || null;
      } catch (e) {}
    }
  },
  38: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return h;
    }),
      r.d(t, "e", function () {
        return g;
      }),
      r.d(t, "b", function () {
        return _;
      }),
      r.d(t, "f", function () {
        return b;
      }),
      r.d(t, "d", function () {
        return S;
      }),
      r.d(t, "a", function () {
        return v;
      });
    var o = r(3),
      a = r.n(o),
      n = r(1),
      s = r.n(n),
      i = r(2),
      c = r.n(i),
      p = r(13),
      u = r(33),
      l = r.n(u),
      y = r(8);
    function m(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m(Object(r), !0).forEach(function (t) {
              a()(e, t, r[t]);
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
        var e = c()(
          s.a.mark(function e(t) {
            var r, o, a, n, i, c, p, u, y, m, d, h, g, _, f, b, w;
            return s.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.productId),
                        (o = t.count),
                        (a = void 0 === o ? 1 : o),
                        (n = t.minPrice),
                        (i = t.maxPrice),
                        (c = t.language),
                        (p = void 0 === c ? "www" : c),
                        (u = t.country),
                        (y = void 0 === u ? "US" : u),
                        (m = t.currency),
                        (d = void 0 === m ? "EUR" : m),
                        (p = "en" === p ? "www" : p),
                        (h = encodeURI(
                          "https://"
                            .concat(p, ".aliexpress.com/aeglodetailweb/api/logistics/freight?productId=")
                            .concat(r, "&count=")
                            .concat(a, "&minPrice=")
                            .concat(n, "&maxPrice=")
                            .concat(i, "&country=")
                            .concat(y, "&provinceCode=&cityCode=&tradeCurrency=")
                            .concat(d, '&userScene=PC_DETAIL&ext={"p1":"')
                            .concat(n, '","p2":"')
                            .concat(i, '","p3":"')
                            .concat(d, '"}')
                        )),
                        (e.prev = 3),
                        (e.next = 6),
                        l()({ method: "GET", url: h })
                      );
                    case 6:
                      if (200 == (f = e.sent).status) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 9:
                      return (
                        (b = (null == f || null === (g = f.data) || void 0 === g || null === (_ = g.body) || void 0 === _ ? void 0 : _.freightResult) || []),
                        (w = b.sort(function (e, t) {
                          var r, o;
                          return (null == e || null === (r = e.freightAmount) || void 0 === r ? void 0 : r.value) - (null == t || null === (o = t.freightAmount) || void 0 === o ? void 0 : o.value);
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
      g = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
          t = e.querySelector("#j-customer-reviews-trigger .rantings-num"),
          r = e.querySelector("[itemprop='reviewCount']"),
          o = e.querySelector(".product-reviewer-reviews");
        return t ? Object(y.l)(t.textContent) : r ? Object(y.l)(r.textContent) : o ? Object(y.l)(o.textContent) : 0;
      };
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (f = c()(
        s.a.mark(function e(t) {
          var r, o, a, n, i, c, u, l, y, m, h;
          return s.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.productId),
                      (o = t.companyId),
                      (a = t.limit),
                      (n = void 0 === a ? 50 : a),
                      (i = t.language),
                      (c = void 0 === i ? "en" : i),
                      (e.prev = 1),
                      (l = "https://gpsfront.aliexpress."
                        .concat("ru" === c ? "ru" : "com", "/getI2iRecommendingResults.do?currentItemList=")
                        .concat(r, "&companyId=")
                        .concat(o, "&scenario=pcDetailLeftTopSell&limit=")
                        .concat(n, "&offset=0")),
                      (e.next = 6),
                      Object(p.a)({ method: "GET", url: l })
                    );
                  case 6:
                    if (((y = e.sent), 200 === (m = y.status))) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return", { status: m, data: [] });
                  case 10:
                    return (
                      (h = (h = (null === (u = y.data) || void 0 === u ? void 0 : u.results) || [])
                        .map(function (e) {
                          return d(d({}, e), {}, { orders: Number(e.orders) });
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
      )).apply(this, arguments);
    }
    function b(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (w = c()(
        s.a.mark(function e(t) {
          var r, o, a, n, i, c, u, l, y;
          return s.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (o = t.productId),
                    (a = t.companyId),
                    (n = t.limit),
                    (i = void 0 === n ? 50 : n),
                    (c = t.language),
                    (u = "https://gpsfront.aliexpress."
                      .concat("ru" === (void 0 === c ? "en" : c) ? "ru" : "com", "/getI2iRecommendingResults.do?currentItemList=")
                      .concat(o, "&companyId=")
                      .concat(a, "&recommendType=toMine&scenario=pcDetailLeftTrendProduct&limit=")
                      .concat(i, "&offset=0")),
                    (e.next = 5),
                    Object(p.a)({ method: "GET", url: u })
                  );
                case 5:
                  if (((l = e.sent), 200 === (y = l.status))) {
                    e.next = 9;
                    break;
                  }
                  return e.abrupt("return", { status: y, data: [] });
                case 9:
                  return e.abrupt("return", { status: y, data: (null === (r = l.data) || void 0 === r ? void 0 : r.results) || [] });
                case 10:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    var S = (function () {
      var e = c()(
        s.a.mark(function e(t) {
          var r, o, a, n, i, c, u;
          return s.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (r = t.supplierId), (o = "https://www.aliexpress.com/store/all-wholesale-products/".concat(r, ".html")), (e.next = 4), Object(p.a)({ method: "GET", url: o, withCredentials: !0 });
                case 4:
                  if (200 === (a = e.sent).status) {
                    e.next = 7;
                    break;
                  }
                  return e.abrupt("return", null);
                case 7:
                  if (((n = new DOMParser()), (i = n.parseFromString(a.data, "text/html")), !(c = i.querySelector("#your-choice .result-info")))) {
                    e.next = 15;
                    break;
                  }
                  if ((u = Object(y.l)(c.textContent)) || 0 == u) {
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
    function v(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (C = c()(
        s.a.mark(function e(t) {
          var r, o, a;
          return s.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = t.adminSeq), (e.prev = 1), (o = "https://feedback.aliexpress.com/display/evaluationDsrAjaxService.htm?ownerAdminSeq=".concat(r)), (e.next = 5), l()({ method: "GET", url: o });
                  case 5:
                    if (200 === (a = e.sent).status) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return", {});
                  case 8:
                    return e.abrupt("return", (null == a ? void 0 : a.data) || {});
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
      )).apply(this, arguments);
    }
  },
  39: function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return a;
    }),
      r.d(t, "c", function () {
        return n;
      }),
      r.d(t, "d", function () {
        return s;
      }),
      r.d(t, "e", function () {
        return i;
      }),
      r.d(t, "f", function () {
        return c;
      }),
      r.d(t, "a", function () {
        return p;
      });
    var o = r(8);
    function a(e) {
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
        return (e = (e = e || window.location.href).replace(/i(tem)?\/(.*?)\//i, "item/")), (e = Object(o.j)(e)), /^((https?:)?\/\/)([a-zA-Z0-9]+)?(.?aliexpress.)[a-zA-Z]+\/i(tem)?\/[0-9]+(.html)/g.test(e);
      } catch (e) {
        return !1;
      }
    }
    function i(e) {
      try {
        if (!a((e = e || window.location.href))) return !1;
        var t = document.getElementById("search-key");
        return !!t && t.value.trim().length > 0;
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      try {
        if (!s(e)) return;
        e = Object(o.j)(e);
        var t = new URL(e).pathname.replace(/i(tem)?\/(.*?)\//i, "item/");
        return Object(o.l)(t);
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
        var o = document.getElementsByTagName("script")[0];
        o.parentNode.insertBefore(t, o);
        var a = document.createElement("script");
        (a.type = "text/javascript"), (a.async = !0), (a.src = "https://www.googletagmanager.com/gtag/js?id=".concat(e));
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(a, n);
        var s = document.createElement("script");
        (s.type = "text/javascript"), (s.async = !0);
        var i = "\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', '".concat(e, "');\n      "),
          c = document.createTextNode(i);
        s.appendChild(c);
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
    var o = r(1),
      a = r.n(o),
      n = r(3),
      s = r.n(n),
      i = r(12),
      c = r.n(i),
      p = r(2),
      u = r.n(p);
    function l(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function y(e) {
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
      return d.apply(this, arguments);
    }
    function d() {
      return (d = u()(
        a.a.mark(function e() {
          var t,
            r,
            o = arguments;
          return a.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t = o.length > 0 && void 0 !== o[0] ? o[0] : {}),
                    (r = o.length > 1 ? o[1] : void 0),
                    e.abrupt(
                      "return",
                      new Promise(
                        (function () {
                          var e = u()(
                            a.a.mark(function e(o) {
                              var n, s, i, p, u, l, m, d, g, _, f;
                              return a.a.wrap(
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
                                          (i = t.url),
                                          (p = void 0 === i ? "" : i),
                                          (u = t.headers),
                                          (l = void 0 === u ? {} : u),
                                          (m = t.method),
                                          (d = void 0 === m ? "GET" : m),
                                          (g = c()(t, ["url", "headers", "method"])),
                                          (e.next = 7),
                                          fetch(p, y({ method: d, headers: y({ "x-app-language": "en".toUpperCase() }, l) }, g))
                                        );
                                      case 7:
                                        return (_ = e.sent), (e.t0 = _.status), (e.next = 11), h(_);
                                      case 11:
                                        (e.t1 = e.sent), (f = { status: e.t0, data: e.t1 }), o(f), r && r(f), (e.next = 21);
                                        break;
                                      case 17:
                                        (e.prev = 17), (e.t2 = e.catch(3)), o(e.t2), r && r(e.t2);
                                      case 21:
                                        e.next = 24;
                                        break;
                                      case 23:
                                        chrome.runtime.sendMessage({ type: "SEND_REQUEST_BY_FETCH", requestOptions: t }, function (e) {
                                          return o(e);
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
      )).apply(this, arguments);
    }
    function h(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (g = u()(
        a.a.mark(function e(t) {
          return a.a.wrap(
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
      )).apply(this, arguments);
    }
    r(17), r(53);
  },
  53: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return h;
    }),
      r.d(t, "b", function () {
        return g;
      });
    var o = r(1),
      a = r.n(o),
      n = r(3),
      s = r.n(n),
      i = r(2),
      c = r.n(i),
      p = r(51),
      u = r(17),
      l = r(77),
      y = r(57);
    function m(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function d(e) {
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
      g = "setting_language";
    function _() {
      return (_ = c()(
        a.a.mark(function e() {
          var t;
          return a.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), u.a(h);
                case 2:
                  (t = (t = e.sent) || {}), p.a.addResourceBundle("en", "translation", d(d({}, y), t)).init();
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    var f = { en: { translation: y } };
    p.a.use(l.e).init({ fallbackLng: "en", resources: f, lng: "en", keySeparator: !1, interpolation: { escapeValue: !1 } }),
      (function () {
        _.apply(this, arguments);
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
    var o = r(9),
      a = r.n(o),
      n = r(24);
    function s() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        t = (e.querySelectorAll("SCRIPT, IFRAME"), i(e) || []),
        r = c(e) || [];
      return [].concat(a()(t), a()(r));
    }
    function i() {
      var e,
        t,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        o = r.querySelectorAll("script"),
        s = a()(o).filter(function (e) {
          return e.textContent.includes("function asyncLoad()");
        });
      if (!(s = (null === (e = s) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.textContent.trim().replace(/\s\s+/gm, " ")) || null)) return null;
      var i = /var urls =(.*?);/gm,
        c = i.exec(s),
        p = (c && c[1]) || null;
      if (!p) return null;
      for (
        var u = JSON.parse(p),
          l = n.c.map(function (e) {
            return e.script_pattern;
          }),
          y = [],
          m = 0;
        m < u.length;
        m++
      )
        for (var d = 0; d < n.a.length; d++)
          if (u[m].includes(n.a[d].script_pattern)) {
            if (l.includes(n.a[d].script_pattern)) {
              y.unshift(n.a[d]);
              continue;
            }
            y.push(n.a[d]);
          }
      return (
        (y = y.filter(function (e, t, r) {
          return (
            t ===
            r.findIndex(function (t) {
              return t.name === e.name;
            })
          );
        })),
        a()(new Set(y))
      );
    }
    function c() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        t = e.querySelectorAll("script"),
        r = a()(t).filter(function (e) {
          return !e.textContent.includes("function asyncLoad()");
        });
      if (!r.length) return null;
      for (
        var o = n.c.map(function (e) {
            return e.script_pattern;
          }),
          s = [],
          i = 0;
        i < r.length;
        i++
      )
        for (var c = 0; c < n.a.length; c++)
          if (r[i].textContent.includes(n.a[c].script_pattern)) {
            if (o.includes(n.a[c].script_pattern)) {
              s.unshift(n.a[c]);
              continue;
            }
            s.push(n.a[c]);
          }
      return (
        (s = s.filter(function (e, t, r) {
          return (
            t ===
            r.findIndex(function (t) {
              return t.name === e.name;
            })
          );
        })),
        a()(new Set(s))
      );
    }
  },
  59: function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return a;
    }),
      r.d(t, "a", function () {
        return n;
      });
    var o = r(22);
    function a() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        t = e.querySelectorAll('#shopify-features, #shopify-digital-wallet, meta[name="shopify-checkout-api-token"], #shopify-dynamic-checkout-cart');
      return t.length > 0;
    }
    var n = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD";
      return e || 0 === parseFloat(e) ? Object(o.b)(e, t).price : "--";
    };
  },
  604: function (e, t, r) {
    "use strict";
    r.r(t);
    var o = r(1),
      a = r.n(o),
      n = r(2),
      s = r.n(n),
      i = r(12),
      c = r.n(i),
      p = r(13),
      u = r(62),
      l = r(34);
    window.addEventListener(
      "message",
      function (e) {
        var t = e.data,
          r = t.type,
          o = void 0 === r ? "" : r,
          a = c()(t, ["type"]);
        switch (o) {
          case "GET_PRODUCT_COMPETITOR":
            m(a);
            break;
          case "GET_PRODUCT_ALIEXPRESS":
            d(a);
        }
      },
      !1
    );
    var y = function (e, t) {
        try {
          window.postMessage({ type: e, payload: JSON.stringify(t) }, "*");
        } catch (t) {
          window.postMessage({ type: e, payload: JSON.stringify([]) }, "*");
        }
      },
      m = (function () {
        var e = s()(
          a.a.mark(function e(t) {
            var r, o;
            return a.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (r = t.productId),
                      (o = t.url),
                      Object(u.a)({ url: o, source: "shopify", type: "base64", isVersionShopify: !0 }, function (e) {
                        y("RESPONSE_PRODUCT_COMPETITOR", { productId: r, payload: e });
                      });
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
      })(),
      d = (function () {
        var e = s()(
          a.a.mark(function e(t) {
            var r, o, n, s, i;
            return a.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.url), (e.prev = 1), (e.next = 4), Object(p.a)({ method: "GET", url: r });
                    case 4:
                      if (200 === (o = e.sent).status) {
                        e.next = 8;
                        break;
                      }
                      return y("RESPONSE_PRODUCT_ALIEXPRESS", { runParams: void 0 }), e.abrupt("return");
                    case 8:
                      return (n = new DOMParser()), (s = n.parseFromString(o.data, "text/html")), (e.next = 12), Object(l.a)(s, !1);
                    case 12:
                      (i = e.sent), y("RESPONSE_PRODUCT_ALIEXPRESS", { runParams: i }), (e.next = 19);
                      break;
                    case 16:
                      (e.prev = 16), (e.t0 = e.catch(1));
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 16]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    chrome.runtime.onMessage.addListener(function (e, t, r) {
      switch (e.type) {
        case "CHECK_PM_SUCCESS":
          var o = 0,
            a = setInterval(function () {
              var e = document.querySelector(".next-message-success");
              e && (clearInterval(a), r(!!e)), o >= 15e3 && (clearInterval(a), r(!1)), (o += 500);
            }, 500);
          return !0;
      }
    });
  },
  62: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return F;
    });
    var o = r(3),
      a = r.n(o),
      n = r(1),
      s = r.n(n),
      i = r(2),
      c = r.n(i),
      p = r(13),
      u = r(8),
      l = r(39),
      y = r(68),
      m = r(36),
      d = r(29),
      h = r(34),
      g = r(14),
      _ = r.n(g);
    function f(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function b(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? f(Object(r), !0).forEach(function (t) {
              a()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : f(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var w = (function () {
        var e = c()(
          s.a.mark(function e(t) {
            var r, o, a, n, i, c, l, y, m, d, h, g, _;
            return s.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.url), (o = void 0 === r ? "" : r), (a = t.source), (n = void 0 === a ? "shopify" : a), (i = t.productUrl), (c = void 0 === i ? null : i), (e.prev = 1), (e.next = 4), Object(u.i)(o);
                    case 4:
                      return (
                        (l = e.sent),
                        (e.next = 7),
                        Object(p.a)({
                          method: "POST",
                          url: "".concat("https://api-prod.alihunter.io", "/ext"),
                          headers: { "Content-Type": "application/json", "x-request-source": "extension" },
                          data: { action: "product.detail.image_detection", data: { image: l, type: "base64", source: n, productUrl: c } },
                        })
                      );
                    case 7:
                      if ((y = e.sent)) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return", { pages: [] });
                    case 10:
                      if (200 !== y.status) {
                        e.next = 17;
                        break;
                      }
                      if (!y.data.hasOwnProperty("data")) {
                        e.next = 15;
                        break;
                      }
                      if (!y.data.hasOwnProperty("code") || 200 === y.data.code) {
                        e.next = 15;
                        break;
                      }
                      return (m = y.data.data.details), (d = void 0 === m ? {} : m), e.abrupt("return", { errorCode: 400, errorDetails: d, pages: [] });
                    case 15:
                      return (h = (y.data && y.data.data && y.data.data.webDetection) || {}), (g = h.pagesWithMatchingImages), (_ = void 0 === g ? [] : g), e.abrupt("return", { pages: _ });
                    case 17:
                      if (401 !== y.status) {
                        e.next = 19;
                        break;
                      }
                      return e.abrupt("return", { errorCode: 401, pages: [] });
                    case 19:
                      if (403 !== y.status) {
                        e.next = 21;
                        break;
                      }
                      return e.abrupt("return", { errorCode: 403, pages: [] });
                    case 21:
                      if (200 === y.status) {
                        e.next = 23;
                        break;
                      }
                      return e.abrupt("return", { error: y, pages: [] });
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
      S = (function () {
        var e = c()(
          s.a.mark(function e(t) {
            var r, o, a;
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
                      v(r)
                    );
                  case 3:
                    return (
                      (o = (o = e.sent).filter(Boolean)),
                      (a = []),
                      (o = o.filter(function (e) {
                        return !a.includes(parseInt(e.productId)) && (a.push(parseInt(e.productId)), !0);
                      })),
                      e.abrupt("return", o)
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
      v = (function () {
        var e = c()(
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
                            (function () {
                              var t = c()(
                                s.a.mark(function t(r) {
                                  var o, a, n, i, c;
                                  return s.a.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (t.prev = 0), (o = Object(u.a)(e)), (t.next = 4), Object(p.a)({ method: "GET", url: "https://aliexpress.com/".concat(o.path), headers: { "Content-Type": "application/json" } });
                                          case 4:
                                            if (200 === (a = t.sent).status) {
                                              t.next = 7;
                                              break;
                                            }
                                            return t.abrupt("return", r(null));
                                          case 7:
                                            return (n = new DOMParser()), (i = n.parseFromString(a.data, "text/html")), (t.next = 11), Object(h.a)(i, !1);
                                          case 11:
                                            if ((c = t.sent).productId && c.supplierId) {
                                              t.next = 14;
                                              break;
                                            }
                                            return t.abrupt("return", r(null));
                                          case 14:
                                            return t.abrupt("return", r(c));
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
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
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
        var e = c()(
          s.a.mark(function e(t) {
            var r, o, a, n, i;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t),
                      (o = [
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
                          o.forEach(function (r) {
                            null != e && e.url.includes(r) && (t = !1);
                          }),
                          t
                        );
                      })),
                      (a = []),
                      (e.next = 6),
                      Promise.all(
                        r.map(function (e) {
                          return new Promise(
                            (function () {
                              var t = c()(
                                s.a.mark(function t(r) {
                                  var o, n;
                                  return s.a.wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (t.next = 2), Object(y.a)(e.url);
                                        case 2:
                                          if (!(o = t.sent).isShopify) {
                                            t.next = 13;
                                            break;
                                          }
                                          return (t.next = 6), k(e.url);
                                        case 6:
                                          if ((n = t.sent) && n.shopUriOrigin && 0 !== n.shopUriOrigin.length) {
                                            t.next = 10;
                                            break;
                                          }
                                          return r(null), t.abrupt("return");
                                        case 10:
                                          (o = Object(d.d)(n, o.data)), a.push(o), r(b(b({}, o), {}, { shop: n }));
                                        case 13:
                                          r(null);
                                        case 14:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
                        })
                      )
                    );
                  case 6:
                    n = (n = e.sent).filter(Boolean);
                    try {
                      n = n.sort(function (e, t) {
                        return _()(t.updatedAtISO) - _()(e.updatedAtISO);
                      });
                    } catch (e) {}
                    return (
                      (i = []),
                      (n = n.filter(function (e) {
                        return !i.includes(parseInt(e.id)) && (i.push(parseInt(e.id)), !0);
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
    function k(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (x = c()(
        s.a.mark(function e(t) {
          return s.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    new Promise(
                      (function () {
                        var e = c()(
                          s.a.mark(function e(r) {
                            var o, a, n, i;
                            return s.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.prev = 0), (e.next = 3), Object(p.a)({ method: "GET", url: t });
                                    case 3:
                                      (o = e.sent), (a = new DOMParser()), (n = a.parseFromString(o.data, "text/html")), (i = Object(m.a)({ doc: n })), r(i), (e.next = 13);
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
      )).apply(this, arguments);
    }
    function T(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (E = c()(
        s.a.mark(function e(t, r) {
          var o;
          return s.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  (o = []), (e.t0 = t), (e.next = "aliexpress" === e.t0 ? 4 : "shopify" === e.t0 ? 8 : 12);
                  break;
                case 4:
                  return (e.next = 6), S(r);
                case 6:
                  return (o = e.sent), e.abrupt("break", 13);
                case 8:
                  return (e.next = 10), C(r);
                case 10:
                  return (o = e.sent), e.abrupt("break", 13);
                case 12:
                  return e.abrupt("break", 13);
                case 13:
                  return e.abrupt("return", o);
                case 14:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function F(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (N = c()(
        s.a.mark(function e(t, r) {
          var o, a, n, i, c, p, u, l, y, m;
          return s.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (o = t.url),
                    (a = t.source),
                    (n = t.productUrl),
                    (i = void 0 === n ? null : n),
                    (c = t.isVersionShopify),
                    (p = void 0 !== c && c),
                    (u = []),
                    r({ start: !0, end: !1, done: !1 }),
                    (e.next = 5),
                    w({ url: o, source: a, productUrl: i })
                  );
                case 5:
                  if (((l = e.sent), !((y = l.pages).length > 0))) {
                    e.next = 12;
                    break;
                  }
                  return (e.next = 10), T(a, y);
                case 10:
                  (m = e.sent).length > 0 && (u = m);
                case 12:
                  return p && (u = P(u)), r({ done: !0, start: !1, end: !0, data: u }), e.abrupt("return");
                case 15:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function P(e) {
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
  68: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return c;
    });
    var o = r(1),
      a = r.n(o),
      n = r(2),
      s = r.n(n),
      i = r(13);
    function c() {
      return p.apply(this, arguments);
    }
    function p() {
      return (p = s()(
        a.a.mark(function e() {
          var t,
            r,
            o,
            n,
            s = arguments;
          return a.a.wrap(
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
                    return (r = new URL(t)), (r = "".concat(r.origin + r.pathname.replace(/\/$/g, ""), ".json")), (e.next = 8), Object(i.a)({ method: "GET", url: r, timeout: 1e4 });
                  case 8:
                    return (o = e.sent), (n = !0 === o.data.hasOwnProperty("product")), e.abrupt("return", { isShopify: n, data: o.data.product });
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
      )).apply(this, arguments);
    }
  },
  8: function (e, t, r) {
    "use strict";
    r.d(t, "i", function () {
      return i;
    }),
      r.d(t, "d", function () {
        return p;
      }),
      r.d(t, "c", function () {
        return u;
      }),
      r.d(t, "l", function () {
        return l;
      }),
      r.d(t, "e", function () {
        return y;
      }),
      r.d(t, "a", function () {
        return m;
      }),
      r.d(t, "k", function () {
        return d;
      }),
      r.d(t, "j", function () {
        return h;
      }),
      r.d(t, "f", function () {
        return g;
      }),
      r.d(t, "g", function () {
        return _;
      }),
      r.d(t, "b", function () {
        return f;
      }),
      r.d(t, "h", function () {
        return b;
      });
    var o = r(1),
      a = r.n(o),
      n = (r(67), r(2)),
      s = r.n(n);
    function i(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (c = s()(
        a.a.mark(function e(t) {
          var r,
            o = arguments;
          return a.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = o.length > 1 && void 0 !== o[1] ? o[1] : void 0),
                    e.abrupt(
                      "return",
                      new Promise(function (e) {
                        var o = new XMLHttpRequest();
                        (o.onload = function () {
                          var t = new FileReader();
                          (t.onloadend = function () {
                            var o = t.result.replace(/^data:image\/(.*?);base64,/, "");
                            e(o), r && r(t.result);
                          }),
                            t.readAsDataURL(o.response);
                        }),
                          o.open("GET", t),
                          (o.responseType = "blob"),
                          o.send();
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
    function p(e) {
      return new Promise(function (t) {
        return setTimeout(function () {
          return t(!0);
        }, e);
      });
    }
    function u(e) {
      return (e = (e = e.replace(/^\s+|\s+$/g, "")).toLowerCase())
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    }
    function l(e) {
      var t,
        r = e.match(/\/\d+(\.\d)*.html/g);
      if ((t = r ? r[0].match(/\d+/g) : e.match(/\d+/g)) && 0 !== t.length) return Number(t.join(""));
    }
    function y(e, t) {
      var r = new Image();
      (r.src = e),
        (r.onload = function () {
          var e = document.createElement("canvas"),
            r = e.getContext("2d");
          (e.width = this.width), (e.height = this.height), r.drawImage(this, 0, 0);
          var o = document.createElement("a");
          (o.download = t), (o.href = e.toDataURL()), o.click();
        });
    }
    function m(e) {
      var t = {};
      if (null == e || 0 == e.length) return t;
      var r = e.indexOf("://");
      t.protocol = e.substr(0, r);
      var o = e.substr(r + 3, e.length),
        a = o.indexOf("/");
      (a = -1 == a ? o.length - 1 : a), (t.domain = o.substr(0, a)), (t.path = -1 == a || a + 1 == o.length ? null : o.substr(a + 1, o.length));
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
    var d = function (e, t) {
      for (var r = [], o = e; o <= t; o++) r.push(o);
      return r;
    };
    function h(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "https";
      if (!e) return e;
      if (e.includes("https://") || e.includes("http://")) return e;
      var r = /^(\/\/)/g;
      return r.test(e) ? "".concat(t, ":").concat(e) : "".concat(t, "://").concat(e);
    }
    function g(e, t) {
      var r = t.filename,
        o = void 0 === r ? "video.mp4" : r;
      try {
        return new Promise(function (t, r) {
          var a = new XMLHttpRequest();
          a.open("GET", e, !0),
            (a.responseType = "blob"),
            (a.onload = function () {
              var e = (window.URL || window.webkitURL).createObjectURL(this.response),
                r = document.createElement("a");
              (r.href = e), (r.target = "_blank"), (r.download = o), document.body.appendChild(r), r.click(), document.body.removeChild(r), t(!0);
            }),
            (a.onerror = function (e) {
              r("Failed to download picture");
            }),
            a.send();
        });
      } catch (e) {}
    }
    function _(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",";
      try {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t);
      } catch (t) {
        return e;
      }
    }
    function f() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      try {
        return ((Number(e) / 100) * 5).toFixed(1);
      } catch (e) {
        return;
      }
    }
    function b() {
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
});
