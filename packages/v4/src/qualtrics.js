(function () {
  if (typeof window.QSI === 'undefined') {
    window.QSI = {};
  }
  var tempQSIConfig = {
    "hostedJSLocation": "https://siteintercept.qualtrics.com/dxjsmodule/",
    "zoneId": "ZN_b7Qe3xqn7A4aQdL"
  };
  if (typeof window.QSI.config !== 'undefined' && typeof window.QSI.config === 'object') {
    for (var attrname in tempQSIConfig) {
      window.QSI.config[attrname] = tempQSIConfig[attrname];
    }
  } else {
    window.QSI.config = tempQSIConfig;
  }
  window.QSI.overrides = {
    "baseURL": "https://siteintercept.qualtrics.com"
  };
  window.QSI.shouldStripQueryParamsInQLoc = false;
})();
try {
  ! function (e) {
    var t = {};

    function i(n) {
      if (t[n]) return t[n].exports;
      var r = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = t, i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      })
    }, i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, i.t = function (e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
        for (var r in e) i.d(n, r, function (t) {
          return e[t]
        }.bind(null, r));
      return n
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return i.d(t, "a", t), t
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 0)
  }([function (e, t, i) {
    e.exports = i(14)
  }, function (e, t) {
    QSI.history && !window.QTest || (QSI.historyStorage = {
      historySessionName: "QSI_HistorySession",
      get useCookie() {
        return "sessionStorage" !== QSI.historyStorageType
      },
      get limit() {
        return this.useCookie ? 2e3 : 1e4
      },
      getHistorySessionData: function () {
        return this.useCookie ? QSI.cookie.get(this.historySessionName) : sessionStorage.getItem(this.historySessionName)
      },
      eraseHistorySessionData: function () {
        this.useCookie ? QSI.cookie.erase(this.historySessionName) : sessionStorage.removeItem(this.historySessionName)
      },
      setHistorySessionData: function (e) {
        this.useCookie ? QSI.cookie.set(this.historySessionName, e, 0) : sessionStorage.setItem(this.historySessionName, e)
      }
    }, QSI.history = {
      historyStorage: QSI.historyStorage,
      logVisit: function () {
        this.logCurrentURL(), this.logSearch(), this.startFocusTracking(), this.logReferrer()
      },
      startFocusTracking: function () {
        if (!this.started) try {
          this.started = !0, this.focusTime = this.getFocusTimeFromBrowserStorage(), this.blurTime = this.getBlurTimeFromBrowserStorage();
          var e = this;
          setInterval(function () {
            try {
              e.focused ? e.focusTime += 1 : e.blurTime += 1
            } catch (e) {
              "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
            }
          }, 1e3);
          var t, i = function () {
            try {
              e.focused = !0
            } catch (e) {
              "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
            }
          };
          i(), QSI.util.observe(window, "focus", i), QSI.util.observe(window, "blur", function () {
            try {
              e.focused = !1
            } catch (e) {
              "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
            }
          }), t = QSI.Browser.isMobile ? "pagehide" : "unload", QSI.util.observe(window, t, function () {
            try {
              QSI.profile.set("History", "BlurTime", e.blurTime), QSI.profile.set("History", "FocusTime", e.focusTime)
            } catch (e) {
              "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
            }
          })
        } catch (e) {
          QSI.dbg.e(e)
        }
      },
      logSite: function (e, t) {
        var i, n = this.historyStorage.getHistorySessionData();
        if (n) {
          var r = (n = decodeURIComponent(n)).split("|");
          i = r[r.length - 1].split("~")[0], n += "|"
        } else n = "", i = "";
        e !== i && (n += e + "~" + t, this.writeHistory(n))
      },
      writeHistory: function (e, t) {
        if (null != t && t <= 0) this.historyStorage.eraseHistorySessionData();
        else {
          t = t || QSI.historyStorageSize || QSI.global.maxCookieSize || this.historyStorage.limit;
          var i = encodeURIComponent(e),
            n = this.limitSize(i, t);
          try {
            this.historyStorage.setHistorySessionData(n)
          } catch (i) {
            e = decodeURIComponent(n), this.writeHistory(e, t - 500)
          }
        }
      },
      limitSize: function (e, t) {
        if (!e.length) return e;
        for (t = t || this.historyStorage.limit; e.length > t;) {
          var i = decodeURIComponent(e).split("|");
          i.splice(0, 1), e = i.join("|"), e = encodeURIComponent(e)
        }
        return e
      },
      get: function () {
        var e = this.historyStorage.getHistorySessionData();
        return e || (e = []), e = this.limitSize(e), decodeURIComponent(e)
      },
      logCurrentURL: function () {
        var e = window.location.href,
          t = 1 * new Date;
        this.logSite(e, t)
      },
      getReferrer: function () {
        return document.referrer
      },
      logSearch: function () {
        var e, t, i = this.getReferrer();
        if (i.search(/(google.com)|(bing.com)|(yahoo.com)/) >= 0) {
          var n = "";
          i.search(/(google.com)|(bing.com)/) >= 0 ? (e = /q=(.*?)\&/, (t = i.match(e)) && t.length && t[1] && (n = t[1])) : i.search(/yahoo.com/) >= 0 && (e = /p=(.*?)\&/, (t = i.match(e)) && t.length && t[1] && (n = t[1])), n = unescape(n), QSI.profile.set("History", "SearchTerm", n)
        }
      },
      logReferrer: function () {
        var e = this.getReferrer();
        e && (QSI.util.build("a", {
          href: e
        }).hostname !== document.location.host && QSI.profile.set("History", "SiteReferrer", e), QSI.profile.set("History", "PageReferrer", e))
      },
      logIntercept: function (e, t) {
        t && this.logActionSet(t)
      },
      logActionSet: function (e) {
        if (e.search("AS_") >= 0) {
          var t = e,
            i = 1 * new Date;
          QSI.profile.set("ActionSetHistory", t, i), QSI.profile.set("ActionSetHistory", t, i, 1)
        }
      },
      logSurvey: function (e, t) {
        QSI.profile.set("QualtricsSurveyHistory", e, t, 1)
      },
      getSiteReferrer: function () {
        return QSI.profile.get("History", "SiteReferrer")
      },
      getPageReferrer: function () {
        return QSI.profile.get("History", "PageReferrer")
      },
      getSearch: function () {
        var e = QSI.profile.get("History", "SearchTerm");
        return e || (e = ""), e
      },
      getTimeOnSite: function () {
        var e = this.focusTime;
        return e + this.blurTime + "|" + e
      },
      getFocusTimeFromBrowserStorage: function () {
        var e = QSI.profile.get("History", "FocusTime");
        return e || (e = 0), e
      },
      getBlurTimeFromBrowserStorage: function () {
        var e = QSI.profile.get("History", "BlurTime");
        return e || (e = 0), e
      },
      getActionSetHistory: function (e, t) {
        var i = QSI.profile.get("ActionSetHistory", e, t);
        return i || (i = 0), i
      },
      getPageCount: function () {
        var e, t, i = this.historyStorage.getHistorySessionData(),
          n = 0,
          r = [];
        if (i) {
          var o = (i = decodeURIComponent(i)).split("|");
          for (t = o.length, e = 0; e < t; e++) r.push(o[e].split("~")[0]);
          var a = {};
          for (t = r.length, e = 0; e < t; e++) a[r[e]] || (n++ , a[r[e]] = !0)
        }
        return {
          unique: n,
          total: r.length
        }
      }
    })
  }, function (e, t) {
    QSI.EventTracker && !window.QTest || (QSI.EventTracker = {
      counts: {},
      cookieName: "QSI_CT",
      clicked: !1,
      loaded: !1,
      trackElements: function () {
        if (!1 === this.loaded) {
          this.loadCounts();
          var e = QSI.global.eventTrackers,
            t = this;
          QSI.util.forOwn(e, function (i, n) {
            var r = e[n];
            t.trackElement(r, n)
          }), QSI.util.observe(window, "beforeunload", function () {
            try {
              t.storeCounts()
            } catch (e) {
              "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
            }
          }), this.loaded = !0
        }
      },
      trackElement: function (e, t) {
        var i = QSI.util.$(e);
        if (i) {
          var n = this;
          QSI.util.observe(i, "click", function () {
            try {
              n.track(t)
            } catch (e) {
              "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
            }
          })
        }
      },
      track: function (e) {
        this.clicked = !0, this.counts[e] ? this.counts[e]++ : this.counts[e] = 1
      },
      storeCounts: function () {
        if (!0 === this.clicked) {
          var e = JSON.stringify(this.counts);
          QSI.cookie.set(this.cookieName, e)
        }
      },
      loadCounts: function () {
        var e = QSI.cookie.get(this.cookieName);
        e && (this.counts = JSON.parse(e))
      },
      get: function (e) {
        return this.counts[e] ? this.counts[e] : 0
      },
      incrementEventList: function () {
        if ("_qsie" in window && QSI.util.isArray(window._qsie))
          for (var e = 0, t = window._qsie.length; e < t; e++) {
            var i = window._qsie[e];
            QSI.util.isString(i) && this.track(i)
          }
      }
    })
  }, function (e, t) {
    QSI.cookie = {
      set: function (e, t, i, n, r) {
        r = r || {};
        var o = this.getCookieSize(),
          a = this.get(e),
          s = QSI.global.maxCookieSize;
        a && (o -= (e + "=" + a).length);
        var c = "";
        if (i) {
          var l = new Date;
          l.setTime(l.getTime() + 864e5 * i), c = "; expires=" + l.toGMTString()
        }
        var p = "";
        n ? p = "domain=" + n : QSI.CookieDomain && (p = "domain=" + QSI.CookieDomain);
        var d = e + "=" + t,
          u = o + d.length;
        if (!(r.force || null !== s && u <= s || null === s)) throw new Error("Cannot exceed the specified maximum cookie size");
        r.erase ? this.cookieSize = o : this.cookieSize = u;
        var g = d + c + "; path=/; " + p;
        "https:" === location.protocol && (g += "; secure"), document.cookie = g
      },
      get: function (e) {
        for (var t = e + "=", i = document.cookie.split(";"), n = 0, r = i.length; n < r; n++) {
          for (var o = i[n];
            " " === o.charAt(0);) o = o.substring(1, o.length);
          if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
        }
        return null
      },
      erase: function (e, t) {
        this.set(e, "", -1, t, {
          force: !0,
          erase: !0
        })
      },
      getCookieSize: function () {
        if (!this.cookieSize) {
          this.cookieSize = 0;
          for (var e = document.cookie.split(";"), t = 0, i = e.length; t < i; t++) {
            for (var n = e[t];
              " " === n.charAt(0);) n = n.substring(1, n.length);
            n.indexOf("QSI") >= 0 && (this.cookieSize += n.length)
          }
        }
        return this.cookieSize
      },
      areCookiesEnabled: function () {
        try {
          document.cookie = "cookietest=1";
          var e = -1 !== document.cookie.indexOf("cookietest=");
          return document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
        } catch (e) {
          return !1
        }
      }
    }
  }, function (e, t) {
    QSI.CookieStorage = function () {
      var e = {},
        t = "QSI_DATA";

      function i() {
        try {
          var i = QSI.cookie.get(t);
          i && (e = JSON.parse(i))
        } catch (t) {
          e = {}
        }
      }

      function n() {
        try {
          QSI.cookie.set(t, JSON.stringify(e))
        } catch (e) { }
      }
      return i(), {
        setItem: function (t, i) {
          e[t] = i, n()
        },
        getItem: function (t) {
          return e[t] || null
        },
        removeItem: function (t) {
          delete e[t], n()
        },
        reload: i,
        clear: function () {
          e = {}, n()
        }
      }
    }()
  }, function (e, t) {
    QSI.profile || (QSI.profile = {
      namespace: "QSI_",
      set: function (e, t, i, n) {
        if (void 0 === e || void 0 === t || void 0 === i) throw new Error("To few arguments");
        try {
          var r = this.getStorage(n),
            o = this.namespace + e,
            a = r.getItem(o);
          (a = a ? JSON.parse(a) : {})[t] = i, a = JSON.stringify(a), r.setItem(o, a)
        } catch (e) {
          QSI.dbg.e("error setting profile item"), QSI.dbg.e(e)
        }
      },
      get: function (e, t, i) {
        var n = this.getStorage(i),
          r = this.namespace + e,
          o = n.getItem(r);
        return o ? (o = JSON.parse(o), t ? o[t] ? o[t] : null : o) : null
      },
      erase: function (e, t, i) {
        var n = this.getStorage(i),
          r = this.namespace + e;
        if (t) {
          var o = JSON.parse(n.getItem(r));
          delete o[t], o = JSON.stringify(o), n.setItem(r, o)
        } else n.removeItem(r)
      },
      getStorage: function (e) {
        if (this.hasSessionStorage()) return e ? localStorage : sessionStorage;
        if (QSI.UserDataStorage) {
          var t = QSI.UserDataStorage;
          return e ? t.isPermanent(!0) : t.isPermanent(!1), t
        }
        return QSI.CookieStorage
      },
      hasSessionStorage: function () {
        var e = "qualtricssessionstoragetestkey",
          t = window.sessionStorage;
        try {
          return t.setItem(e, e), t.removeItem(e), !0
        } catch (e) {
          return !1
        }
      }
    })
  }, function (e, t) {
    void 0 === QSI.util && (QSI.util = {
      $: function (e) {
        return "string" == typeof e && (e = document.getElementById(e)), e
      },
      forOwn: function (e, t) {
        if (e && e instanceof Object && this.isFunction(t))
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t(e[i], i, e)
      },
      build: function (e, t, i) {
        var n = document.createElement(e);
        if (t) {
          var r = this;
          QSI.util.forOwn(t, function (e, i) {
            switch (i) {
              case "style":
                r.setStyle(n, t[i]);
                break;
              case "className":
                n.className = t[i];
                break;
              case "id":
                n.id = t[i];
                break;
              default:
                n.setAttribute(i, t[i])
            }
          })
        }
        if (i)
          if (QSI.util.isString(i)) "style" === e && n.styleSheet ? n.styleSheet.cssText = i : n.appendChild(document.createTextNode(String(i)));
          else if (QSI.util.isArray(i))
            for (var o = 0, a = i.length; o < a; o++) {
              var s = i[o];
              "string" == typeof s || "number" == typeof s ? n.appendChild(document.createTextNode(String(s))) : s && s.nodeType && n.appendChild(s)
            }
        return n
      },
      setStyle: function (e, t) {
        QSI.util.forOwn(t, function (i, n) {
          try {
            e.style[n] = t[n]
          } catch (e) {
            QSI.dbg.e(e)
          }
        })
      },
      isString: function (e) {
        return "string" == typeof e
      },
      isArray: function (e) {
        return "object" == typeof e && e instanceof Array
      },
      getQueryParam: function (e, t) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
        return null === i ? "" : i[1]
      },
      observe: function (e, t, i, n) {
        this.obs = this.obs || [], e && (this.obs.push({
          el: e,
          e: t,
          f: i,
          preventRemove: n || !1
        }), e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + this.capFirst(t)] && (e["on" + this.capFirst(t)] = i))
      },
      stopObserving: function (e, t, i) {
        e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent ? e.detachEvent("on" + t, i) : e["on" + this.capFirst(t)] && (e["on" + this.capFirst(t)] = null)
      },
      removeObservers: function () {
        var e = this;
        this.each(this.obs || [], function (t) {
          t.preventRemove || e.stopObserving(t.el, t.e, t.f)
        })
      },
      remove: function (e) {
        e && e.parentNode && e.parentNode.removeChild(e)
      },
      isFunction: function (e) {
        return "function" == typeof e || !1
      },
      capFirst: function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      },
      each: function (e, t) {
        var i = e.length;
        if (i)
          for (var n = 0; n < i; n++) t(e[n], n)
      }
    })
  }, function (e, t) {
    QSI.API && !window.QTest || (QSI.API = {
      load: function () {
        function e(e) {
          try {
            if (QSI.reg || this.unloading) return void e.reject();
            void 0 === window.QSI && (window.QSI = {}), void 0 === QSI.reg && (QSI.reg = {}), void 0 === QSI.ed && (QSI.ed = {}), void 0 === QSI.reqID && (QSI.reqID = {}), void 0 === QSI.Request && (QSI.Request = {}), void 0 === QSI.styleElements && (QSI.styleElements = []), QSI.util.forOwn(QSI.reqID, function (t, i) {
              var n = {
                loadingFromAPI: !0
              };
              n.id = i, "Editing" === QSI.version && (n.version = "0"), void 0 !== QSI.global.clientVersion && null !== QSI.global.clientVersion && (n.Q_CLIENTVERSION = QSI.global.clientVersion), void 0 !== QSI.global.clientType && null !== QSI.global.clientType && (n.Q_CLIENTTYPE = QSI.global.clientType, void 0 !== QSI.clientTypeVariant && (n.Q_CLIENTTYPE += QSI.clientTypeVariant)), 0 === i.search(/ZN/) ? n.ZoneID = i : n.InterceptID = i, QSI.isDebug && (n.Q_DEBUG = null), n.deferred = e, QSI.Orchestrator.load(n)
            })
          } catch (e) {
            QSI.dbg.e(e)
          }
        }
        try {
          var t = QSI.Orchestrator.Deferred(),
            i = t.promise();
          return QSI.PendingQueue || (QSI.PendingQueue = []), QSI.LoadingState && QSI.LoadingState.length > 0 ? QSI.PendingQueue.push(e.bind(this, t)) : e.bind(this, t)(), i
        } catch (e) {
          QSI.dbg.e(e)
        }
      },
      unload: function () {
        try {
          if (QSI.PendingQueue || (QSI.PendingQueue = []), QSI.LoadingState && QSI.LoadingState.length > 0) return void QSI.PendingQueue.push(QSI.API.unload);
          if (this.unloading = !0, QSI.reg && (QSI.util.forOwn(QSI.reg, function (e, t) {
            QSI.reg[t].remove()
          }), QSI.util.removeObservers()), QSI.debug && (QSI.util.remove(QSI.util.$("QSI_Debug")), QSI.debuggerHasDisplayed = !1), QSI.styleElements)
            for (var e = QSI.styleElements, t = 0; t < e.length; t++) QSI.util.remove(e[t]);
          QSI.reg = void 0, QSI.Request = void 0, QSI.styleElements = void 0, this.unloading = !1
        } catch (e) {
          QSI.dbg.e(e)
        }
      },
      run: function () {
        try {
          if (QSI.PendingQueue || (QSI.PendingQueue = []), QSI.LoadingState && QSI.LoadingState.length > 0) return void QSI.PendingQueue.push(QSI.API.run);
          QSI.InterceptsRan || void 0 === QSI.reg || QSI.RunIntercepts(null, !0)
        } catch (e) {
          QSI.dbg.e(e)
        }
      },
      Events: {
        increment: function (e) {
          try {
            QSI.EventTracker.track(e)
          } catch (e) {
            QSI.dbg.e(e)
          }
        },
        count: function (e) {
          try {
            return QSI.EventTracker.get(e)
          } catch (e) {
            QSI.dbg.e(e)
          }
        },
        push: function (e) {
          try {
            QSI.EventTracker.track(e)
          } catch (e) {
            QSI.dbg.e(e)
          }
        }
      }
    })
  }, function (e, t) {
    QSI.ContactFrequency = {
      contactFrequencyRequestTimeout: 1e4,
      contactFrequencyCheckResults: {},
      contactFrequencyCheckStates: {
        CAN_CONTACT: "CAN_CONTACT",
        DO_NOT_CONTACT: "DO_NOT_CONTACT",
        NOT_CHECKED: "NOT_CHECKED"
      },
      checkContactFrequencyRules: function (e, t) {
        var i = QSI.Orchestrator.Deferred(),
          n = {};
        return QSI.util.forOwn(e, function (e, i) {
          if (this.contactFrequencyCheckResults[i] = {
            status: this.contactFrequencyCheckStates.NOT_CHECKED,
            brandId: null,
            surveyId: null
          }, null !== e.Targeting.Decision.ActionSetID) {
            var r = e.Intercept;
            if (!QSI.util.shouldPreventRepeatedDisplay(i, r.DisplayOptions) && this.shouldCheckContactFrequency(r)) {
              var o = this.getIQDirectorySettings(r);
              if (o) {
                var a = this.getTargetSurveyId(r, e.Targeting);
                a && (o.surveyId = a, this.contactFrequencyCheckResults[i].surveyId = a), this.contactFrequencyCheckResults[i].brandId = t, o.brandId = t, n[i] = o, this.contactFrequencyCheckResults[i].status = this.contactFrequencyCheckStates.DO_NOT_CONTACT
              } else this.contactFrequencyCheckResults[i].status = this.contactFrequencyCheckStates.DO_NOT_CONTACT
            }
          }
        }.bind(this)), 0 !== Object.keys(n).length ? this.sendContactFrequencyRequest(n, i) : i.resolve(), i.promise()
      },
      shouldCheckContactFrequency: function (e) {
        return e.DisplayOptions && e.DisplayOptions.useContactFrequencyRules
      },
      getIQDirectorySettings: function (e) {
        if (!e.DisplayOptions) return null;
        var t, i = e.DisplayOptions;
        if (QSI.global.featureFlags["DX.ContactFrequencyV2"] ? QSI.config && QSI.config.externalReference && (t = QSI.config.externalReference) : t = this.resolveContactFrequencyExternalReference(i.contactFrequencyRefLocator, i.contactFrequencyRefExpression), !t) return QSI.dbg.e("Could not retrieve external reference ID for Contact Frequency Check"), null;
        if (!("string" == typeof t || t instanceof String)) return QSI.dbg.e("External reference ID must be a string for Contact Frequency Check"), null;
        var n = i.contactFrequencyDirectoryID;
        if (!n) return QSI.dbg.e("Missing directoryId for Contact Frequency Check"), null;
        var r = i.contactFrequencyUserID;
        return r ? {
          extRef: t,
          directoryId: n,
          userId: r
        } : (QSI.dbg.e("Missing User Id for Contact Frequency Check"), null)
      },
      getTargetSurveyId: function (e, t) {
        if (!t.Decision || !t.Decision.ActionSetID) return null;
        var i = t.Decision.ActionSetID;
        return e.ActionSets && e.ActionSets[i] && e.ActionSets[i].Target && "Survey" === e.ActionSets[i].Target.Type ? e.ActionSets[i].Target.PrimaryElement : null
      },
      resolveContactFrequencyExternalReference: function (e, t) {
        if (!t) return QSI.dbg.e("No reference expression used for contact frequency check"), null;
        switch (e) {
          case "JavaScript":
            return QSI.EmbeddedData.getJavaScriptValue(t.expression);
          case "Cookie":
            return QSI.cookie.get(t.expression);
          default:
            return QSI.dbg.e("Reference locator used for contact frequency check is unsupported:" + e), null
        }
      },
      sendContactFrequencyRequest: function (e, t) {
        var i = "https://" + QSI.global.brandDC + "/dx-iqd-proxy/check-frequency-rules";
        return QSI.LatencyLog.startComponentTimer(QSI.LatencyLog.components.CONTACT_FREQUENCY), void QSI.util.sendHttpRequest({
          type: "POST",
          url: i,
          header: {
            "Content-type": "application/json"
          },
          data: JSON.stringify(e),
          successCallback: function (e) {
            try {
              var i;
              if (e.response && (i = JSON.parse(e.response)), "object" != typeof i) throw new Error("ContactFrequency check came back with invalid response: " + results);
              QSI.util.forOwn(i, function (e, t) {
                null !== e ? !0 === e.passesFrequencyRules && (this.contactFrequencyCheckResults[t].status = this.contactFrequencyCheckStates.CAN_CONTACT, this.contactFrequencyCheckResults[t].contactId = e.contactId) : QSI.dbg.e("ContactFrequency check for intercept:" + t + " errored; defaulting to no show")
              }.bind(this))
            } catch (e) {
              QSI.dbg.e(e)
            } finally {
              QSI.LatencyLog.endComponentTimer(QSI.LatencyLog.components.CONTACT_FREQUENCY), t.resolve()
            }
          }.bind(this),
          errorCallback: function (e) {
            var n = "Call to ContactFrequency endpoint: " + i + " failed.";
            e.status && (n = n + " Status:" + e.status);
            e.response && (n = n + " Response:" + e.response);
            QSI.dbg.e(n), QSI.LatencyLog.endComponentTimer(QSI.LatencyLog.components.CONTACT_FREQUENCY), t.resolve()
          }.bind(this),
          timeout: this.contactFrequencyRequestTimeout,
          timeoutCallback: function () {
            QSI.dbg.e("ContactFrequency check POST request to:" + i + " timed out"), QSI.LatencyLog.endComponentTimer(QSI.LatencyLog.components.CONTACT_FREQUENCY), t.resolve()
          }
        })
      },
      recordContactFrequencyRequest: function (e) {
        var t = "https://" + QSI.global.brandDC + "/dx-iqd-proxy/record-contact";
        return void QSI.util.sendHttpRequest({
          type: "POST",
          url: t,
          header: {
            "Content-type": "application/json"
          },
          data: JSON.stringify(e),
          errorCallback: function (e) {
            var i = "Call to ContactFrequency endpoint: " + t + " failed.";
            e.status && (i = i + " Status:" + e.status);
            e.response && (i = i + " Response:" + e.response);
            QSI.dbg.e(i)
          }.bind(this),
          timeout: this.contactFrequencyRequestTimeout,
          timeoutCallback: function () {
            QSI.dbg.e("ContactFrequency record POST request to:" + t + " timed out")
          }
        })
      }
    }
  }, function (e, t) {
    QSI.AssetManager = {
      loadedScripts: {},
      promiseFetch: function (e, t, i) {
        var n = QSI.Orchestrator.Deferred(),
          r = new XMLHttpRequest;
        return r.open(e, t, !0), r.withCredentials = !0, "POST" === e && r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.onreadystatechange = function () {
          4 === r.readyState && (200 === r.status ? n.resolve(r.responseText) : n.reject(r.responseText))
        }, r.send(i), n.promise()
      },
      generateDefinitionRequestURL: function (e, t, i, n) {
        var r = QSI.baseURL + "Asset.php?",
          o = [];
        if (t = t || i.version, o.push("Module=" + e), o.push("Version=" + t), null != n && o.push("Q_InterceptID=" + n), null === i.Q_NOCACHE && o.push("Q_NOCACHE"), QSI.CORSOrigin && o.push("Q_ORIGIN=" + QSI.CORSOrigin), void 0 !== i.Q_CLIENTVERSION && null !== i.Q_CLIENTVERSION && o.push("Q_CLIENTVERSION=" + i.Q_CLIENTVERSION), void 0 !== i.Q_CLIENTTYPE && null !== i.Q_CLIENTTYPE) {
          var a = "Q_CLIENTTYPE=" + i.Q_CLIENTTYPE;
          o.push(a)
        }
        return r += o.join("&")
      },
      loadDefinition: function (e, t) {
        var i = QSI.Orchestrator.Deferred(),
          n = new XMLHttpRequest;
        return n.open("GET", e, !0), n.onreadystatechange = function () {
          if (4 === n.readyState)
            if (200 === n.status) try {
              var e = JSON.parse(n.responseText);
              e.Error ? i.reject(e) : (t(e), i.resolve(n.responseText))
            } catch (e) {
              i.reject(n.responseText)
            } else i.reject(n.responseText)
        }, n.send(), i.promise()
      },
      promiseLoadIntercept: function (e, t, i) {
        var n = t.InterceptID,
          r = QSI.AssetManager.generateDefinitionRequestURL(n, t.InterceptRevision, i);
        return QSI.LatencyLog.startComponentTimer("AssetDefinition-" + n), QSI.AssetManager.loadDefinition(r, function (t) {
          QSI.LatencyLog.endComponentTimer("AssetDefinition-" + n), QSI.Request[e].Intercepts[n].Intercept = t.InterceptDefinition
        })
      },
      promiseLoadCreative: function (e, t, i) {
        var n = t.Decision.Creative.ID;
        if ("CR_NoCreative" !== n) {
          var r = QSI.AssetManager.generateDefinitionRequestURL(n, t.Decision.Creative.Revision, i, t.InterceptID);
          return QSI.LatencyLog.startComponentTimer("AssetDefinition-" + n), QSI.AssetManager.loadDefinition(r, function (i) {
            QSI.LatencyLog.endComponentTimer("AssetDefinition-" + n), QSI.util.isLegacyCreative(i.CreativeDefinition.Type) && (i.CreativeDefinition = QSI.AssetManager.sortCreativeDefinition(i.CreativeDefinition)), QSI.Request[e].Intercepts[t.InterceptID].Creative = i.CreativeDefinition
          })
        }
        return QSI.Request[e].Intercepts[t.InterceptID].Creative = null, QSI.Orchestrator.Deferred().resolve(null)
      },
      promiseLoadPopUnderTarget: function (e, t, i) {
        var n = QSI.AssetManager.generateDefinitionRequestURL(t.Decision.PopUnderTarget.ID, t.Decision.PopUnderTarget.Revision, i, t.InterceptID);
        return QSI.AssetManager.loadDefinition(n, function (i) {
          QSI.Request[e].Intercepts[t.InterceptID].PopUnderTarget = i.CreativeDefinition
        })
      },
      promiseLoadScript: function (e, t) {
        var i;
        if (this.alreadyFetched(e)) return (i = QSI.Orchestrator.Deferred()).resolve(), i.promise();
        i = QSI.Orchestrator.Deferred();
        var n = document.createElement("script");
        n.src = QSI.global.hostedJSLocation + e + "Module.js?";
        var r = [];
        return void 0 !== QSI.Orchestrator && void 0 !== QSI.Orchestrator.getClientVersionQueryString && r.push(QSI.Orchestrator.getClientVersionQueryString()), (-1 !== window.location.href.indexOf("Q_DEBUG") || QSI.config.debug) && r.push("Q_DEBUG=true"), n.src += r.join("&"), n.defer = !0, n.addEventListener("load", function () {
          try {
            !0 === QSI.wrongModuleVersionRequested && (i.reject(), QSI.dbg.e("Script: " + e + " failed to load because an unavailable version (" + t + ") was requested.")), QSI.AssetManager.loadedScripts[e] = n, QSI.LatencyLog.endComponentTimer("JSModule-" + e), i.resolve()
          } catch (e) {
            "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
          }
        }, !1), n.addEventListener("error", function () {
          try {
            i.reject(), QSI.dbg.e("Script: " + e + " failed to load.")
          } catch (e) {
            "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
          }
        }), QSI.LatencyLog.startComponentTimer("JSModule-" + e), document.body.appendChild(n), i.promise()
      },
      alreadyFetched: function (e) {
        return e in QSI.AssetManager.loadedScripts
      },
      sortCreativeDefinition: function (e) {
        if (e && e.Options && e.Options.elements && e.Options.elements.Elements) {
          var t = e.Options.elements.Elements;
          t = QSI.util.stableSort(t, function (e, t) {
            return Number(e.style.zIndex) < Number(t.style.zIndex) ? -1 : Number(e.style.zIndex) > Number(t.style.zIndex) ? 1 : 0
          });
          for (var i = 0; i < t.length; i++) t[i].style && t[i].style.zIndex && (t[i].style.zIndex = QSI.global.currentZIndex++);
          return t = QSI.util.stableSort(t, function (e, t) {
            return Number(e.position.left) < Number(t.position.left) ? -1 : Number(e.position.left) > Number(t.position.left) ? 1 : 0
          }), t = QSI.util.stableSort(t, function (e, t) {
            return Number(e.position.top) < Number(t.position.top) ? -1 : Number(e.position.top) > Number(t.position.top) ? 1 : 0
          }), e.Options.elements.Elements = t, e
        }
        return e
      }
    }
  }, function (e, t) {
    QSI.CreativeManager = {
      isCreativeSupported: function (e) {
        return !!QSI.CreativeManager["run" + e]
      },
      runEmpty: function (e) {
        var t;
        t = new QSI.Empty({
          id: e.interceptID,
          type: QSI.util.creativeTypes.EMPTY
        }), QSI.reg[e.interceptID] = t
      },
      runWebResponsiveDialog: function (e) {
        var t, i, n, r;
        t = e.creative.Type, i = e.creative.Options.Layout, n = QSI.BuildResponsiveElementModule.PARENT_CONTAINER_CLASS, r = new QSI.WebResponsive[t][i]({
          id: e.interceptID,
          type: t,
          targetURL: e.decision.Target.OriginalURL,
          targetURLOrigin: e.decision.Target.OriginalURLOrigin,
          targetURLType: e.decision.Target.Type,
          hasCreativeEmbeddedTarget: !!e.creative.Options.SizeAndStyle.UseEmbeddedTarget,
          impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          clickURL: QSI.CreativeManager.Utilities.getClickURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          interceptDisplayOptions: e.intercept.DisplayOptions,
          actionOptions: e.actionSet.ActionOptions,
          elements: e.creative.Options,
          displayOptions: e.creative.Options.displayOptions,
          resetStyle: QSI.CreativeManager.Utilities.getWebResponsiveResetStyle(n)
        }), QSI.reg[e.interceptID] = r
      },
      runFeedbackButton: function (e) {
        var t, i;
        t = e.creative.Type, i = new QSI.FeedbackButton({
          id: e.interceptID,
          type: t,
          target: e.decision.Target,
          impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          clickURL: QSI.CreativeManager.Utilities.getClickURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          interceptDisplayOptions: e.intercept.DisplayOptions,
          actionOptions: e.actionSet.ActionOptions,
          elements: e.creative.Options,
          resetStyle: QSI.CreativeManager.Utilities.getWebResponsiveResetStyle("QSIFeedbackButton")
        }), QSI.reg[e.interceptID] = i
      },
      runFeedbackLink: function (e) {
        var t;
        t = new QSI.FeedbackLink({
          id: e.interceptID,
          type: QSI.util.creativeTypes.FEEDBACK_LINK,
          targetURL: e.decision.Target.OriginalURL,
          targetURLOrigin: e.decision.Target.OriginalURLOrigin,
          targetURLType: e.decision.Target.Type,
          impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          clickURL: QSI.CreativeManager.Utilities.getClickURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          interceptDisplayOptions: e.intercept.DisplayOptions,
          actionOptions: e.actionSet.ActionOptions,
          insertionLocation: e.actionSet.ActionOptions.displayElement ? e.actionSet.ActionOptions.displayElement : e.id,
          displayOptions: e.creative.Options,
          resetStyle: QSI.CreativeManager.Utilities.getResetStyle("QSIFeedbackLink")
        }), QSI.reg[e.interceptID] = t
      },
      runHTTPRedirect: function (e) {
        var t;
        QSI.global.isHostedJS() ? QSI.dbg.c("Creative type '" + QSI.util.creativeTypes.HTTP_REDIRECT + "' is not supported.") : (t = new QSI.HTTPRedirect({
          id: e.interceptID,
          type: QSI.util.creativeTypes.HTTP_REDIRECT,
          targetURL: e.decision.Target.OriginalURL,
          targetURLOrigin: e.decision.Target.OriginalURLOrigin,
          targetURLType: e.decision.Target.Type,
          impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          clickURL: QSI.CreativeManager.Utilities.getClickURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          interceptDisplayOptions: e.intercept.DisplayOptions,
          actionOptions: e.actionSet.ActionOptions
        }), QSI.reg[e.interceptID] = t)
      },
      runIFrame: function (e) {
        var t;
        t = new QSI.IFrame({
          id: e.interceptID,
          type: QSI.util.creativeTypes.IFRAME,
          targetURL: e.decision.Target.OriginalURL,
          targetURLOrigin: e.decision.Target.OriginalURLOrigin,
          targetURLType: e.decision.Target.Type,
          impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          clickURL: QSI.CreativeManager.Utilities.getClickURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          interceptDisplayOptions: e.intercept.DisplayOptions,
          actionOptions: e.actionSet.ActionOptions,
          iframeOptions: e.creative.Options,
          insertionLocation: e.actionSet.ActionOptions.displayElement ? e.actionSet.ActionOptions.displayElement : e.id
        }), QSI.reg[e.interceptID] = t
      },
      runInfoBar: function (e) {
        ! function () {
          var t = {
            id: e.interceptID,
            type: QSI.util.creativeTypes.INFO_BAR,
            targetURL: e.decision.Target.OriginalURL,
            targetURLOrigin: e.decision.Target.OriginalURLOrigin,
            targetURLType: e.decision.Target.Type,
            impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
              interceptID: e.interceptID,
              creativeID: e.decision.Creative.ID,
              asid: e.decision.ActionSetID
            }),
            clickURL: QSI.CreativeManager.Utilities.getClickURL({
              interceptID: e.interceptID,
              creativeID: e.decision.Creative.ID,
              asid: e.decision.ActionSetID
            }),
            interceptDisplayOptions: e.intercept.DisplayOptions,
            actionOptions: e.actionSet.ActionOptions,
            displayOptions: e.creative.Options.displayOptions
          };
          e.creative.Options.elements && (t.elements = e.creative.Options.elements, t.resetStyle = QSI.CreativeManager.Utilities.getResetStyle("QSIInfoBar"));
          var i = new QSI.InfoBar(t);
          QSI.reg[e.interceptID] = i
        }()
      },
      runLink: function (e) {
        var t, i;
        t = QSI.CreativeManager.Utilities.parsePipedText(e.creative.Options.linkText), i = new QSI.Link({
          id: e.interceptID,
          type: QSI.util.creativeTypes.LINK,
          targetURL: e.decision.Target.OriginalURL,
          targetURLOrigin: e.decision.Target.OriginalURLOrigin,
          targetURLType: e.decision.Target.Type,
          impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          clickURL: QSI.CreativeManager.Utilities.getClickURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          interceptDisplayOptions: e.intercept.DisplayOptions,
          actionOptions: e.actionSet.ActionOptions,
          text: e.creative.Options.linkText,
          insertionLocation: e.actionSet.ActionOptions.displayElement ? e.actionSet.ActionOptions.displayElement : e.id,
          locators: t && t.length > 0 ? t : null
        }), QSI.reg[e.interceptID] = i
      },
      runNoCreative: function (e) {
        var t;
        t = new QSI.NoCreative({
          id: e.interceptID,
          type: QSI.util.creativeTypes.NO_CREATIVE,
          actionOptions: e.actionSet.ActionOptions,
          interceptDisplayOptions: e.intercept.DisplayOptions
        }), QSI.reg[e.interceptID] = t
      },
      runPopOver: function (e) {
        var t;
        t = new QSI.PopOver({
          id: e.interceptID,
          type: QSI.util.creativeTypes.POP_OVER,
          targetURL: e.decision.Target.OriginalURL,
          targetURLOrigin: e.decision.Target.OriginalURLOrigin,
          targetURLType: e.decision.Target.Type,
          hasCreativeEmbeddedTarget: QSI.CreativeManager.Utilities.hasCreativeEmbeddedTarget(e.creative),
          impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          clickURL: QSI.CreativeManager.Utilities.getClickURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          interceptDisplayOptions: e.intercept.DisplayOptions,
          actionOptions: e.actionSet.ActionOptions,
          elements: e.creative.Options.elements,
          displayOptions: e.creative.Options.displayOptions,
          resetStyle: QSI.CreativeManager.Utilities.getResetStyle("QSIPopOver")
        }), QSI.reg[e.interceptID] = t
      },
      runPopUnder: function (e) {
        ! function () {
          if (!("Chrome" === QSI.Browser.name && QSI.Browser.version > 29)) {
            var t = e.creative.Options,
              i = {
                id: e.interceptID,
                type: QSI.util.creativeTypes.POP_UNDER,
                targetURL: e.decision.Target.OriginalURL,
                targetURLOrigin: e.decision.Target.OriginalURLOrigin,
                targetURLType: e.decision.Target.Type,
                impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
                  interceptID: e.interceptID,
                  creativeID: e.decision.Creative.ID,
                  asid: e.decision.ActionSetID
                }),
                clickURL: QSI.CreativeManager.Utilities.getClickURL({
                  interceptID: e.interceptID,
                  creativeID: e.decision.Creative.ID,
                  asid: e.decision.ActionSetID
                }),
                interceptDisplayOptions: e.intercept.DisplayOptions,
                actionOptions: e.actionSet.ActionOptions
              };
            if (e.creative.Options.elements) {
              i.elements = e.creative.Options.elements;
              var n = "body { background-color: " + t.baseElement.style.backgroundColor + "; } .QSIPopUnder .close { color: #000000; text-decoration: none; } ";
              i.resetStyle = n + QSI.CreativeManager.Utilities.getResetStyle("QSIPopUnder"), t.width = t.baseElement.style.width, t.height = t.baseElement.style.height
            } else i.locators = QSI.CreativeManager.Utilities.parsePipedText(null);
            t.helperScriptSrc = QSI.baseURL + "Orchestrator.php?InterceptID=" + e.interceptID + "&Q_Type=PopUnderHelper";
            var r = {
              onPopForwardShowTarget: t.showTargetOnPopForward,
              showOnPageChange: t.showOnPageChange,
              showOnSiteExit: t.showOnSiteExit,
              checkThreshold: 3,
              watchInterval: 1e3,
              targetWidth: e.actionSet.ActionOptions.targetWidth,
              targetHeight: e.actionSet.ActionOptions.targetHeight,
              targetFullScreen: e.actionSet.ActionOptions.targetFullScreen,
              impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
                interceptID: e.interceptID,
                creativeID: e.decision.Creative.ID,
                asid: e.decision.ActionSetID
              }),
              clickURL: QSI.CreativeManager.Utilities.getClickURL({
                interceptID: e.interceptID,
                creativeID: e.decision.Creative.ID,
                asid: e.decision.ActionSetID
              })
            };
            i.popunderOptions = t, i.popunderHelperOptions = r;
            var o = new QSI.PopUnder(i);
            QSI.reg[e.interceptID] = o
          }
        }()
      },
      runPopUnderHelper: function (e) {
        QualtricsSI[e.interceptID].popunderCheckThreshold = null, QualtricsSI[e.interceptID].popunderWatchInterval = null, QualtricsSI.PopunderWatcherModule.startWatching(e.interceptID)
      },
      runPopUp: function (e) {
        var t;
        t = new QSI.PopUp({
          id: e.interceptID,
          type: QSI.util.creativeTypes.POP_UP,
          targetURL: e.decision.Target.OriginalURL,
          targetURLOrigin: e.decision.Target.OriginalURLOrigin,
          targetURLType: e.decision.Target.Type,
          impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          clickURL: QSI.CreativeManager.Utilities.getClickURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          interceptDisplayOptions: e.intercept.DisplayOptions,
          actionOptions: e.actionSet.ActionOptions,
          creativeOptions: e.creative.Options
        }), QSI.reg[e.interceptID] = t
      },
      runRelay: function (e) {
        var t;
        t = new QSI.Relay({
          id: e.interceptID,
          type: QSI.util.creativeTypes.RELAY,
          targetURL: e.decision.Target.OriginalURL,
          targetURLOrigin: e.decision.Target.OriginalURLOrigin,
          targetURLType: e.decision.Target.Type,
          impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          clickURL: QSI.CreativeManager.Utilities.getClickURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          interceptDisplayOptions: e.intercept.DisplayOptions,
          actionOptions: e.actionSet.ActionOptions,
          elements: e.creative.Options.elements,
          containerElement: e.creative.Options.baseElement,
          displayOptions: e.creative.Options.displayOptions,
          resetStyle: QSI.CreativeManager.Utilities.getResetStyle("QSIRelay")
        }), QSI.reg[e.interceptID] = t
      },
      runSlider: function (e) {
        var t;
        t = new QSI.Slider({
          id: e.interceptID,
          type: QSI.util.creativeTypes.SLIDER,
          targetURL: e.decision.Target.OriginalURL,
          targetURLOrigin: e.decision.Target.OriginalURLOrigin,
          targetURLType: e.decision.Target.Type,
          hasCreativeEmbeddedTarget: QSI.CreativeManager.Utilities.hasCreativeEmbeddedTarget(e.creative),
          impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          clickURL: QSI.CreativeManager.Utilities.getClickURL({
            interceptID: e.interceptID,
            creativeID: e.decision.Creative.ID,
            asid: e.decision.ActionSetID
          }),
          interceptDisplayOptions: e.intercept.DisplayOptions,
          actionOptions: e.actionSet.ActionOptions,
          elements: e.creative.Options.elements,
          displayOptions: e.creative.Options.displayOptions,
          resetStyle: QSI.CreativeManager.Utilities.getResetStyle("QSISlider")
        }), QSI.reg[e.interceptID] = t
      },
      runSocialMedia: function (e) {
        ! function () {
          if (QSI.global.isHostedJS()) QSI.dbg.c("Creative type '" + QSI.util.creativeTypes.SOCIAL_MEDIA + "' is not supported.");
          else {
            var t = new QSI.SocialMedia({
              id: e.interceptID,
              type: QSI.util.creativeTypes.SOCIAL_MEDIA,
              impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
                interceptID: e.interceptID,
                creativeID: e.decision.Creative.ID,
                asid: e.decision.ActionSetID
              }),
              clickURL: QSI.CreativeManager.Utilities.getClickURL({
                interceptID: e.interceptID,
                creativeID: e.decision.Creative.ID,
                asid: e.decision.ActionSetID
              }),
              interceptDisplayOptions: e.intercept.DisplayOptions,
              actionOptions: e.actionSet.ActionOptions,
              buttons: e.creative.Options.buttons,
              buttonStyles: QSI.CreativeManager.SocialMediaHelper.getButtonStyles(e.creative),
              displayOptions: e.creative.Options.displayOptions,
              insertionLocation: e.actionSet.ActionOptions.displayElement ? e.actionSet.ActionOptions.displayElement : e.id
            });
            QSI.reg[e.interceptID] = t
          }
        }()
      },
      runUserDefinedHTML: function (e) {
        ! function () {
          var t = {
            id: e.interceptID,
            type: QSI.util.creativeTypes.USER_DEFINED_HTML,
            targetURL: e.decision.Target.OriginalURL,
            targetURLOrigin: e.decision.Target.OriginalURLOrigin,
            targetURLType: e.decision.Target.Type,
            impressionURL: QSI.CreativeManager.Utilities.getImpressionURL({
              interceptID: e.interceptID,
              creativeID: e.decision.Creative.ID,
              asid: e.decision.ActionSetID
            }),
            clickURL: QSI.CreativeManager.Utilities.getClickURL({
              interceptID: e.interceptID,
              creativeID: e.decision.Creative.ID,
              asid: e.decision.ActionSetID
            }),
            interceptDisplayOptions: e.intercept.DisplayOptions,
            actionOptions: e.actionSet.ActionOptions,
            displayOptions: e.creative.Options.displayOptions,
            insertionLocation: e.actionSet.ActionOptions.displayElement ? e.actionSet.ActionOptions.displayElement : e.id
          };
          if (e.creative.Options.elements) t.elements = e.creative.Options.elements, t.resetStyle = QSI.CreativeManager.Utilities.getResetStyle("QSIUserDefinedHTML");
          else {
            t.html = e.creative.Options.html, t.size = e.creative.Options.size;
            var i = QSI.CreativeManager.Utilities.parsePipedText(e.creative.Options.html);
            i && i.length > 0 && (t.locators = i)
          }
          var n = new QSI.UserDefinedHTML(t);
          QSI.reg[e.interceptID] = n
        }()
      }
    }
  }, function (e, t) {
    QSI.CreativeManager.SocialMediaHelper = {
      getButtonStyles: function (e) {
        var t = e.Options.displayOptions.size;
        e.Options.displayOptions.useWidget && (t = "Large" === t ? "80px" : "");
        var i = QSI.CreativeManager.SocialMediaHelper.getThemeStyles(e),
          n = QSI.CreativeManager.SocialMediaHelper.getPadding(t),
          r = QSI.CreativeManager.SocialMediaHelper.getBoxShadow(e, t),
          o = QSI.CreativeManager.SocialMediaHelper.getWidth(e, t),
          a = ".QSI_SocialMediaButton { float: left; cursor: pointer; background: " + i.background + "; border-bottom: " + i.border + "; border-right: " + i.border + "; border-top: " + i.highlight + "; border-left: " + i.highlight + "; } #QSI_SocialMediaContainer { border-top: " + i.border + "; border-left: " + i.border + "; box-shadow: " + r.shadowOutset + "; border-radius: " + r.borderRadius + "; } ";
        return e.Options.displayOptions.useWidget ? (a += QSI.CreativeManager.SocialMediaHelper.getWidgetStyles(e, t), "Large" === t && (a += "#QSI_SocialMediaContainer { width: " + o + "; } ")) : a += "#QSI_SocialMediaContainer { width: " + o + "; } .QSI_SocialMediaButton { padding: " + n + "; width: " + t + "; height: " + t + "; } ", 1 === QSI.CreativeManager.SocialMediaHelper.getMaxCols(e) ? a += ".QSI_First .QSI_SocialMediaButton { border-radius: " + r.firstBorderRadius + "; } .QSI_Last .QSI_SocialMediaButton { border-radius: " + r.lastBorderRadius + "; } " : a += ".QSI_First .QSI_SocialMediaButton.QSI_First { border-radius: " + r.tlBorderRadius + "; } QSI_First .QSI_SocialMediaButton.QSI_Last { border-radius: " + r.trBorderRadius + "; } QSI_Last .QSI_SocialMediaButton.QSI_First { border-radius: " + r.blBorderRadius + "; } QSI_Last .QSI_SocialMediaButton.QSI_Last { border-radius: " + r.brBorderRadius + "; } ", a
      },
      getThemeStyles: function (e) {
        var t = {
          background: "none",
          border: "none",
          highlight: "none"
        };
        switch (e.Options.displayOptions.theme) {
          case "Transparent":
            break;
          case "Glass":
            if (!("Internet Explorer" === QSI.Browser.name && QSI.Browser.version < 8)) {
              t.background = "rgba(255, 255, 255, .4)", t.border = "1px solid rgba(200, 200, 200, .6)", t.highlight = "1px solid rgba(255, 255, 255, .8)";
              break
            }
          case "Light":
            t.background = "#E6E6E6", t.border = "1px solid #B3B3B3", t.highlight = "1px solid #FFFFFF";
            break;
          case "Medium":
            t.background = "#666666", t.border = "1px solid #4D4D4D", t.highlight = "1px solid #7D7D7D";
            break;
          case "Dark":
            t.background = "#333333", t.border = "1px solid #1A1A1A", t.highlight = "1px solid #484848"
        }
        return t
      },
      getPadding: function (e) {
        var t = "";
        switch (e) {
          case "64px":
            t = "8px";
            break;
          case "48px":
            t = "7px";
            break;
          case "32px":
            t = "6px";
            break;
          case "24px":
            t = "5px"
        }
        return t
      },
      getBoxShadow: function (e, t) {
        var i = "0",
          n = {};
        if ("Small" === t) return {
          shadowOutset: "none",
          shadowInset: "none",
          borderRadius: "none",
          tlBorderRadius: "none",
          trBorderRadius: "none",
          blBorderRadius: "none",
          brBorderRadius: "none",
          firstBorderRadius: "none",
          lastBorderRadius: "none"
        };
        switch (e.Options.displayOptions.theme) {
          case "Transparent":
            break;
          case "Glass":
            i = .15;
            break;
          case "Light":
            i = .25;
            break;
          case "Medium":
            i = .45;
            break;
          case "Dark":
            i = .6
        }
        n.shadowOutset = "0px 0px 10px 0px rgba(0, 0, 0, " + i + ")", n.shadowInset = "none";
        var r = "3px";
        switch (t) {
          case "64px":
            r = "6px";
            break;
          case "48px":
            r = "5px";
            break;
          case "32px":
            r = "4px";
            break;
          case "24px":
            r = "3px"
        }
        if (n.borderRadius = r, n.tlBorderRadius = r + " 0px 0px 0px", n.trBorderRadius = "0px " + r + " 0px 0px", n.blBorderRadius = "0px 0px 0px " + r, n.brBorderRadius = "0px 0px " + r + " 0px", n.firstBorderRadius = r + " " + r + " 0px 0px", n.lastBorderRadius = "0px 0px " + r + " " + r, 0 === e.Options.displayOptions.xOffset) switch (e.Options.displayOptions.position) {
          case "OTLL":
          case "OML":
          case "OBLL":
            n.shadowOutset = "0px -4px 10px -2px rgba(0, 0, 0, " + i + "), -5px 0px 10px -4px rgba(0, 0, 0, " + i + "), -2px 4px 10px -3px rgba(0, 0, 0, " + i + ")", n.borderRadius = r + " 0px 0px " + r, n.tlBorderRadius = r + " 0px 0px " + r, n.trBorderRadius = "none", n.blBorderRadius = "0px 0px 0px " + r, n.brBorderRadius = "none", n.firstBorderRadius = r + " 0px 0px 0px", n.lastBorderRadius = "0px 0px 0px " + r;
            break;
          case "OTRR":
          case "OMR":
          case "OBRR":
            n.shadowOutset = "2px -5px 10px -3px rgba(0, 0, 0, " + i + "), 8px 0px 10px -6px rgba(0, 0, 0, " + i + "), 0px 5px 10px -3px rgba(0, 0, 0, " + i + ")", n.borderRadius = "0px " + r + " " + r + " 0px", n.tlBorderRadius = "none", n.trBorderRadius = "0px " + r + " 0px 0px", n.blBorderRadius = "none", n.brBorderRadius = "0px 0px " + r + " 0px", n.firstBorderRadius = "0px " + r + " 0px 0px", n.lastBorderRadius = "0px 0px " + r + "0px"
        }
        return n
      },
      getWidth: function (e, t) {
        var i = 0;
        switch (t) {
          case "64px":
            i = 82;
            break;
          case "48px":
            i = 64;
            break;
          case "32px":
            i = 46;
            break;
          case "24px":
            i = 38;
            break;
          case "Large":
          case "Small":
            i = 82
        }
        return i * QSI.CreativeManager.SocialMediaHelper.getMaxCols(e)
      },
      getMaxCols: function (e) {
        var t = 0;
        for (var i in e.Options.buttons) Object.prototype.hasOwnProperty.call(e.Options.buttons, i) && (t = Math.max(t, e.Options.buttons[i].length));
        return t
      },
      getWidgetStyles: function (e, t) {
        var i = ".QSI_SocialMediaButton {position:relative;} ";
        for (var n in i += "Small" === t ? ".QSI_SocialMediaButton .Content { height: 20px; padding: 3px; } " : ".QSI_SocialMediaButton { height: 80px; width: 80px; } ", e.Options.buttons)
          if (Object.prototype.hasOwnProperty.call(e.Options.buttons, n)) {
            var r = e.Options.buttons[n];
            if (r) switch (r.type) {
              case "Facebook":
                i += "Large" === t ? ".QSI_SocialMediaButton.QSI_Facebook .Content { width: 48px; height: 62px; position: absolute; top: 9px; left: 17px; } " : ".QSI_SocialMediaButton.QSI_Facebook .Content { width: 90px; } ";
                break;
              case "GooglePlus":
                i += "Large" === t ? ".QSI_SocialMediaButton.QSI_GooglePlus .Content { width: 50px; height: 60px; position: absolute; top: 11px; left: 16px; } " : ".QSI_SocialMediaButton.QSI_GooglePlus .Content { width: 90px; } ";
                break;
              case "Twitter":
                i += "Large" === t ? ".QSI_SocialMediaButton.QSI_Twitter .Content { width: 55px; height: 62px; position: absolute; top: 10px; left: 13px; } " : ".QSI_SocialMediaButton.QSI_Twitter .Content { width: 107px; } ";
                break;
              case "LinkedIn":
                i += "Large" === t ? ".QSI_SocialMediaButton.QSI_LinkedIn .Content { height: 62px; position: absolute; top: 9px; left: 11px; } " : ".QSI_SocialMediaButton.QSI_LinkedIn .Content { width: 93px; } ";
                break;
              case "Reddit":
                i += "Large" === t ? ".QSI_SocialMediaButton.QSI_Reddit .Content { width: 50px; height: 66px; position: absolute; top: 5px; left: 15px; } " : ".QSI_SocialMediaButton.QSI_Reddit .Content { height: 17px; width: 75px; margin-top: 3px; } ";
                break;
              case "Digg":
                i += "Large" === t ? ".QSI_SocialMediaButton.QSI_Digg .Content { width: 54px; height: 69px; position: absolute; top: 6px; left: 14px; } " : ".QSI_SocialMediaButton.QSI_Digg .Content { width: 76px; } "
            }
          }
        return i
      }
    }
  }, function (e, t) {
    QSI.CreativeManager.Utilities = {
      getImpressionURL: function (e) {
        return this.getStatsUrl("Q_Impress", e)
      },
      getClickURL: function (e) {
        return this.getStatsUrl("Q_Click", e)
      },
      getStatsUrl: function (e, t) {
        var i = {};
        i[e] = 1;
        var n = {
          Q_CID: t.creativeID,
          Q_SIID: t.interceptID,
          Q_ASID: t.asid,
          Q_CLIENTVERSION: QSI.global.clientVersion || "unknown",
          Q_CLIENTTYPE: QSI.global.clientType || "unknown"
        };
        return QSI.util.forOwn(n, function (e, t) {
          i[t] = e
        }), void 0 !== QSI.clientTypeVariant && (i.Q_CLIENTTYPE += QSI.clientTypeVariant), QSI.baseURL + "?" + QSI.Orchestrator.generateQueryString(i)
      },
      getWebResponsiveResetStyle: function (e) {
        var t = "";
        return [{
          selectorList: ["div", "dl", "dt", "dd", "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6", "span", "pre", "form", "fieldset", "textarea", "p", "blockquote", "tr", "th", "td"],
          styleResets: "{ margin: 0; padding: 0;background-color: transparent; border: 0; font-size: 12px; line-height: normal; vertical-align:baseline; box-shadow: none; }"
        }, {
          selectorList: ["img"],
          styleResets: "{ height: auto; width: auto; margin: 0; padding: 0 }"
        }, {
          selectorList: ["ul", "ol"],
          styleResets: "{ margin: 12px 0; padding-left: 40px; }"
        }, {
          selectorList: ["ul li"],
          styleResets: "{ list-style-type: disc; }"
        }, {
          selectorList: ["ol li"],
          styleResets: "{ list-style-type: decimal; }"
        }, {
          selectorList: [".scrollable"],
          styleResets: "{ -webkit-overflow-scrolling: touch; }"
        }, {
          selectorList: ["table"],
          styleResets: "{ border-collapse: collapse; border-spacing: 0; }"
        }, {
          selectorList: ["table td"],
          styleResets: "{ padding: 2px; }"
        }, {
          selectorList: ["*"],
          styleResets: "{ box-sizing: content-box; }"
        }].forEach(function (i) {
          t += function (t, i) {
            if (0 === t.length) return "";
            for (var n = "." + e, r = "", o = 0; o < t.length; o++) r += n + " " + t[o] + ",";
            return (r = r.slice(0, -1)) + i
          }(i.selectorList, i.styleResets)
        }), t
      },
      getResetStyle: function (e) {
        var t = "." + e;
        return t + " div," + t + " dl," + t + " dt," + t + " dd," + t + " ul," + t + " ol," + t + " li," + t + " h1," + t + " h2," + t + " h3," + t + " h4," + t + " h5," + t + " h6," + t + " pre," + t + " form," + t + " fieldset," + t + " textarea," + t + " p," + t + " blockquote," + t + " th," + t + " td {margin: 0;padding: 0;color: black;font-family: arial;font-size: 12px;line-height: normal;}" + t + " ul {margin: 12px 0;padding-left: 40px;}" + t + " ol," + t + " ul {margin: 12px 0;padding-left: 40px;}" + t + " ul li {list-style-type: disc;}" + t + " ol li {list-style-type: decimal;}" + t + " .scrollable {-webkit-overflow-scrolling: touch;}" + t + " table {border-collapse: collapse;border-spacing: 0;}" + t + " table td {padding: 2px;}.QSIPopOver *,.QSISlider *,.QSIPopUnder *,.QSIEmbeddedTarget * {box-sizing: content-box;}"
      },
      hasCreativeEmbeddedTarget: function (e) {
        if (!e || !e.Options.elements || !e.Options.elements.Elements) return !1;
        var t = e.Options.elements.Elements;
        for (var i in t)
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            var n = t[i];
            if (n.type && "EmbeddedTarget" === n.type) return !0
          }
        return !1
      },
      parsePipedText: function (e) {
        var t, i = /\$\{(SI)?([A-Za-z]*):\/\/([^\}]*)\}/g,
          n = [];
        do {
          (t = i.exec(e)) && n.push(t)
        } while (t);
        return n
      }
    }
  }, function (e, t) {
    QSI.RunIntercepts = function (e, t) {
      void 0 === e && (e = null), QSI.util.observe(window, "message", function (e) {
        try {
          if (QSI.Orchestrator && QSI.Orchestrator.isMessageEventOriginAllowed && !QSI.Orchestrator.isMessageEventOriginAllowed(e.origin)) return;
          if (e.data && "string" == typeof e.data) {
            var t = e.data.split("|");
            if ("QualtricsEOS" === t[0]) {
              var i = t[1],
                n = t[2];
              QSI.history.logSurvey(i, n)
            }
          }
        } catch (e) {
          "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
        }
      });
      for (var i = e ? [e] : Object.keys(QSI.Request), n = 0; n < i.length; n++) {
        for (var r in QSI.Request[i[n]].Intercepts)
          if (Object.prototype.hasOwnProperty.call(QSI.Request[i[n]].Intercepts, r)) {
            var o = QSI.Request[i[n]].Intercepts[r];
            if (!QSI.reg[r]) {
              var a;
              if (QSI.history.logIntercept(r, o.Targeting.Decision.ActionSetID), o.siid = i[n], o.Intercept) {
                var s = o.Intercept.DisplayOptions;
                a = void 0 !== s.displayInterceptType ? s.displayInterceptType : !0 === s.manualDisplay ? "manual" : "onload"
              } !t || QSI.Request[i[n]].zoneManualDisplay && "manual" !== a ? QSI.Orchestrator.setInterceptDisplayOptionCallback(a, QSI.RunIntercept.bind(null, r, o)) : "manual" === a && QSI.RunIntercept(r, o)
            }
          }
        QSI.isDebug && !QSI.debuggerHasDisplayed && (new QSI.DebugHandler(QSI.Request[i[n]].Debug), QSI.debuggerHasDisplayed = !0)
      }
      var c = document.createEvent("Event");
      c.initEvent("Resolved", !0, !0), document.body.dispatchEvent(c)
    }, QSI.RunIntercept = function (e, t) {
      try {
        if (void 0 === t.Targeting.Decision.ActionSetID || null === t.Targeting.Decision.ActionSetID) return;
        var i = t.Intercept.ActionSets[t.Targeting.Decision.ActionSetID];
        d = i.EmbeddedData, (!QSI.ed[e] || d && 0 !== d.length) && (QSI.ed[e] = d), QSI.global.intercepts[e] = {
          CreativeID: t.Targeting.Decision.Creative.ID,
          ASID: t.Targeting.Decision.ActionSetID
        };
        var n = {
          id: t.siid,
          interceptID: t.Targeting.InterceptID,
          intercept: t.Intercept,
          actionSet: t.Intercept.ActionSets[t.Targeting.Decision.ActionSetID],
          creative: t.Creative,
          decision: t.Targeting.Decision,
          params: QSI.Request[t.siid].Params
        },
          r = t.Targeting.Decision.Creative.LocatorValues;
        if (r)
          for (var o in r)
            if (Object.prototype.hasOwnProperty.call(r, o)) {
              var a = r[o];
              if (t.Creative.Options && t.Creative.Options.html && (t.Creative.Options.html = QSI.Orchestrator.replaceAll(t.Creative.Options.html, o, a)), t.Creative.Options && t.Creative.Options.elements)
                for (var s in t.Creative.Options.elements.Elements)
                  if (Object.prototype.hasOwnProperty.call(t.Creative.Options.elements.Elements, s)) {
                    var c = t.Creative.Options.elements.Elements[s];
                    c.content = QSI.Orchestrator.replaceAll(c.content, o, a)
                  }
            }
        QSI.RunInterceptUtilities.processAnchorTags(t), n.actionSet.ActionOptions.targetPopUnderDisplay && t.PopUnderTarget && ("Target" === t.Targeting.Decision.PopUnderTarget.ID ? n.actionSet.ActionOptions.targetPopUnderDisplay.id = "Target" : function (e, t) {
          t.Options.width = t.Options.baseElement.style.width, t.Options.height = t.Options.baseElement.style.height, t.Options.helperScriptSrc = QSI.baseURL + "Orchestrator.php";
          var i = {
            onPopForwardShowTarget: t.Options.showTargetOnPopForward,
            showOnPageChange: t.Options.showOnPageChange,
            showOnSiteExit: t.Options.showOnSiteExit,
            checkThreshold: 3,
            watchInterval: 1e3,
            targetWidth: e.actionSet.ActionOptions.targetWidth,
            targetHeight: e.actionSet.ActionOptions.targetHeight,
            targetFullScreen: e.actionSet.ActionOptions.targetFullScreen,
            impressionURL: QSI.CreativeManager.Utilities.getImpressionURL(e),
            clickURL: QSI.CreativeManager.Utilities.getClickURL(e),
            originalURL: e.decision.Target.OriginalURL
          };
          e.actionSet.ActionOptions.targetPopUnderDisplay.creative = {
            elements: t.Options.elements,
            resetStyle: QSI.CreativeManager.Utilities.getResetStyle("QSIPopUnder"),
            popunderOptions: t.Options,
            popunderHelperOptions: i
          }
        }(n, t.PopUnderTarget));
        var l, p = function () {
          t.Creative ? QSI.CreativeManager.isCreativeSupported(t.Creative.Type) ? QSI.CreativeManager["run" + t.Creative.Type](n) : QSI.dbg.c("Creative type '" + t.Creative.Type + "' is not supported.") : QSI.CreativeManager.runNoCreative(n)
        };
        if (i.ActionOptions.useCustomTrigger) "scroll" === i.ActionOptions.triggerType ? (l = function () {
          try {
            var e = i.ActionOptions.scrollPercentage ? i.ActionOptions.scrollPercentage : 0;
            QSI.util.hasReachedScrollPosition(e) && (p(), QSI.util.stopObserving(window, i.ActionOptions.triggerType, l))
          } catch (e) {
            QSI.dbg.e(e)
          }
        }, QSI.util.observe(window, i.ActionOptions.triggerType, l)) : i.ActionOptions.triggerEntirePage ? (l = function () {
          try {
            p(), QSI.util.stopObserving(document.body, i.ActionOptions.triggerType, l)
          } catch (e) {
            QSI.dbg.e(e)
          }
        }, QSI.util.observe(document.body, i.ActionOptions.triggerType, l)) : "pageLoad" === i.ActionOptions.triggerType ? p() : (l = function () {
          try {
            p(), QSI.util.stopObserving(QSI.util.$(i.ActionOptions.triggerElementID), i.ActionOptions.triggerType, l)
          } catch (e) {
            QSI.dbg.e(e)
          }
        }, QSI.util.observe(QSI.util.$(i.ActionOptions.triggerElementID), i.ActionOptions.triggerType, l));
        else p()
      } catch (e) {
        QSI.dbg.e(e)
      }
      var d
    }, QSI.RunInterceptUtilities = {
      processAnchorTags: function (e) {
        var t;
        if (e.Targeting && e.Targeting.Decision && e.Targeting.Decision.Creative && (t = e.Targeting.Decision.Creative.AnchorTags), t)
          for (var i in t)
            if (Object.prototype.hasOwnProperty.call(t, i)) {
              t[i];
              if (e.Creative.Options && e.Creative.Options.elements) {
                var n = e.Creative.Options.elements.Elements;
                if (n && n.length)
                  for (var r = 0; r < n.length; r++) new RegExp(i, "i").test(n[r].content) && (n[r].addQClickListener = !0)
              }
            }
      }
    }
  }, function (e, t, i) {
    "use strict";
    i.r(t);
    i(1), i(2), i(3), i(4), i(5), i(6), i(7), i(8), i(9), i(10), i(11), i(12), i(13);
    var n = function () {
      return (n = Object.assign || function (e) {
        for (var t, i = 1, n = arguments.length; i < n; i++)
          for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
      }).apply(this, arguments)
    };
    var r = function () {
      var e = window.QSI,
        t = window.QSI = n(n({}, e), {
          reg: e.reg || {},
          ed: e.ed || {},
          reqID: e.reqID || {},
          overrides: e.overrides || {},
          shouldStripQueryParamsInQLoc: !!e.shouldStripQueryParamsInQLoc,
          config: n({
            zoneId: "",
            brandId: ""
          }, e.config),
          global: n(n({
            currentZIndex: 2e9,
            intercepts: {},
            eventTrackers: [],
            featureFlags: {},
            enableJSSanitization: !1,
            latencySamplePercentage: .02
          }, e.global), {
            isHostedJS: function () {
              return !1
            },
            clientType: "web",
            clientVersion: "1.18.0",
            hostedJSLocation: e.config.hostedJSLocation || e.config.clientBaseURL,
            legacyId: e.config.interceptId || e.config.zoneId || e.config.targetingId || e.global.ID
          }),
          isFullDbgInitialized: !1,
          baseURL: "",
          Browser: {},
          LoadingState: e.LoadingState || [],
          PendingQueue: e.PendingQueue || [],
          debug: e.debug || {},
          getBaseURLFromConfigAndOverrides: function () {
            var e = "";
            if (t.overrides.baseURL) 0 === (e = t.overrides.baseURL).indexOf("https://") ? e = e.substring(8) : 0 === e.indexOf("http://") ? e = e.substring(7) : 0 === e.indexOf("//") && (e = e.substring(2));
            else if (e = "siteintercept.qualtrics.com", t.config.brandId) {
              if (!t.config.zoneId) throw "You must specify a zoneId";
              e = t.config.zoneId.replace("_", "").toLowerCase() + "-" + t.config.brandId.toLowerCase() + "." + e
            }
            return "//" + e
          },
          initFullDbg: function () {
            t.isFullDbgInitialized = !0
          },
          getClientVersionQueryString: function () {
            var e = {
              Q_CLIENTVERSION: t.global.clientVersion || "unknown",
              Q_CLIENTTYPE: t.global.clientType || "unknown"
            };
            return void 0 !== t.clientTypeVariant && (e.Q_CLIENTTYPE += t.clientTypeVariant), t.generateQueryString(e)
          },
          generateQueryString: function (e) {
            var t = [];
            for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                var n = i;
                e[i] && (n += "=" + encodeURIComponent(e[i])), t.push(n)
              }
            return t.join("&")
          }
        });
      if (!t.global.legacyId) throw "You must specify a zoneId or zoneId and interceptId";
      return t.global.baseURL = t.getBaseURLFromConfigAndOverrides(), t.global.isHostedJS() && (t.global.enableJSSanitization = t.config.enableJSSanitization || !0), t.baseURL = t.baseURL || t.overrides.siBaseURL || "https:" + t.global.baseURL + "/WRSiteInterceptEngine/", t
    }(),
      o = function () {
        function e(t) {
          var i = this;
          this.metricName = e.metricName, this.components = e.components, this.overallLatencyStartTime = null, this.overallLatency = null, this.componentStartTimes = {}, this.componentLatencies = {}, this.startTimer = function () {
            i.latencyStartTime = Date.now()
          }, this.endTimer = function () {
            null !== i.latencyStartTime ? i.overallLatency = Date.now() - i.latencyStartTime : i.debugLog.e("Tried to log overall end time without a start time.")
          }, this.startComponentTimer = function (e) {
            i.componentStartTimes[e] = Date.now()
          }, this.endComponentTimer = function (e) {
            var t = i.componentStartTimes[e];
            void 0 !== t ? i.componentLatencies[e] = Date.now() - t : i.debugLog.e("Tried to log a component end time without a component start time.  Component name: " + e)
          }, this.send = function () {
            try {
              if (null === i.overallLatency) return void i.debugLog.e("Incomplete Latency Data Provided");
              var t = r.baseURL + "Ajax.php?action=LatencyLog&" + r.getClientVersionQueryString(),
                n = [];
              for (var o in r.reqID) Object.prototype.hasOwnProperty.call(r.reqID, o) && n.push(o);
              var a = {
                MetricName: e.metricName,
                Latency: i.overallLatency,
                ComponentLatencies: i.componentLatencies,
                AdditionalData: {
                  RequestIDs: n,
                  ClientURL: r.currentURL,
                  UserAgent: navigator.userAgent,
                  BrandID: r.global.brandID,
                  BrandDC: r.global.brandDC
                }
              };
              QSI.util.sendHttpRequest({
                type: "POST",
                url: t,
                header: {
                  "Content-type": "application/x-www-form-urlencoded"
                },
                includeCookies: !1,
                data: QSI.util.buildQueryString({
                  LoggingData: JSON.stringify(a)
                })
              })
            } catch (e) {
              i.debugLog.e(e)
            }
          }, this.sampledSend = function (e) {
            try {
              Math.random() <= e / 100 == !0 && i.send()
            } catch (e) {
              i.debugLog.e(e)
            }
          }, this.debugLog = t
        }
        return e.metricName = "si.SILatency", e.components = {
          CORE_MODULE: "coreModuleRequest",
          TARGETING: "targetingRequest",
          DPR_TARGETING: "dprTargetingRequest",
          ASSETS_AND_MODULES: "allAssetDefinitionsAndJSModules",
          CONTACT_FREQUENCY: "contactFrequencyCheck"
        }, e
      }(),
      a = function () {
        for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
        var n = Array(e),
          r = 0;
        for (t = 0; t < i; t++)
          for (var o = arguments[t], a = 0, s = o.length; a < s; a++ , r++) n[r] = o[a];
        return n
      },
      s = function () {
        function e() {
          var e = this;
          this.init = function (t, i) {
            if (e.latencyLog = t, e.debugLog = i, e.setupJFEMessageEventHandlerForIOSOptimization(), e.latencyLog.startTimer(), r.global.legacyId) {
              r.Request || (r.Request = {}), r.debug = r.debug || {};
              var n = r.global.legacyId,
                o = {
                  id: n
                };
              0 === n.indexOf("ZN") ? o.ZoneID = n : o.InterceptID = n;
              var a = void 0;
              if (r.global.isHostedJS()) (void 0 !== (a = e.parseQueryString(window.location.href)).Q_DEBUG || r.config.debug) && (o.Q_DEBUG = null, e.debugLog.enableFullDebug()), (r.config.editing || "0" === r.global.version) && (o.version = "0");
              else {
                var s = void 0;
                if (document.currentScript) s = document.currentScript.src;
                else try {
                  var c = document.querySelectorAll("script"),
                    l = [];
                  for (var p in c) Object.prototype.hasOwnProperty.call(c, p) && (l[p] = c[p]);
                  var d = r.global.baseURL;
                  0 === d.indexOf("https://") ? d = d.substring(8) : 0 === d.indexOf("http://") ? d = d.substring(7) : 0 === d.indexOf("//") && (d = d.substring(2)), s = l.filter(function (e) {
                    return (-1 !== e.src.indexOf(d + "/WRSiteInterceptEngine/?") || -1 !== e.src.indexOf(d + "/SIE/?")) && (-1 === e.src.indexOf("Q_Impress") && -1 === e.src.indexOf("Q_Redirect") && -1 === e.src.indexOf("Q_Click") && -1 === e.src.indexOf("Q_DPR"))
                  })[0].src
                } catch (t) {
                  e.debugLog.e("An error occurred while loading the intercept. " + t)
                }
                void 0 !== (a = e.parseQueryString(s)).Q_NOCACHE && (o.Q_NOCACHE = null), void 0 !== a.Q_BOOKMARKLET && (o.Q_BOOKMARKLET = null, o.Q_DEBUG = null, e.debugLog.enableFullDebug()), void 0 !== a.Q_DEBUG && (o.Q_DEBUG = null, e.debugLog.enableFullDebug()), void 0 !== a.Q_VERSION && (o.version = a.Q_VERSION)
              }
              void 0 !== r.global.clientVersion && null !== r.global.clientVersion && (o.Q_CLIENTVERSION = r.global.clientVersion), void 0 !== r.global.clientType && null !== r.global.clientType && (o.Q_CLIENTTYPE = r.global.clientType, void 0 !== r.clientTypeVariant && (o.Q_CLIENTTYPE += r.clientTypeVariant)), e.load(o)
            } else if (!r.Request) {
              r.Request = {};
              for (var u = document.querySelectorAll("[data-siteinterceptscript]"), g = 0; g < u.length; g++) {
                var I = u[g];
                r.isDebug = r.isDebug || I.hasAttribute("data-qdebug") || -1 !== window.location.href.indexOf("Q_DEBUG"), r.isDebug && e.debugLog.enableFullDebug();
                var S = {};
                I.hasAttribute("data-interceptid") && (S.InterceptID = I.getAttribute("data-interceptid"), S.id = S.InterceptID), I.hasAttribute("data-zoneid") && (S.ZoneID = I.getAttribute("data-zoneid"), S.id = S.ZoneID), I.hasAttribute("data-qnocache") && (S.Q_NOCACHE = null), I.hasAttribute("data-qbookmarklet") && (S.Q_BOOKMARKLET = null), r.isDebug && (S.Q_DEBUG = null), I.hasAttribute("data-version") && (S.version = I.getAttribute("data-version")), e.load(S)
              }
            }
          }, this.generateQueryString = r.generateQueryString, this.getClientVersionQueryString = r.getClientVersionQueryString, this.Deferred = function () {
            var t = {},
              i = "pending",
              n = [],
              r = [],
              o = [],
              a = [],
              s = e,
              c = {
                state: function () {
                  return i
                },
                then: function (e, t) {
                  return this.done(e).fail(t), this
                },
                done: function (e) {
                  if ("pending" === i && e) o.push(e);
                  else if ("resolved" === i) try {
                    e.apply(this, n)
                  } catch (e) {
                    s.debugLog.e(e)
                  }
                  return this
                },
                fail: function (e) {
                  if ("pending" === i && e) a.push(e);
                  else if ("rejected" === i) try {
                    e.apply(this, r)
                  } catch (e) {
                    s.debugLog.e(e)
                  }
                  return this
                },
                promise: function () {
                  return c
                }
              };
            return e.forOwn(c, function (e, i) {
              t[i] = c[i]
            }), t.resolve = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              "pending" === i && (i = "resolved", n = e, s.each(o, function (t) {
                try {
                  t.apply(s, e)
                } catch (e) {
                  s.debugLog.e(e)
                }
              }))
            }, t.reject = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              "pending" === i && (i = "rejected", r = e, s.each(a, function (t) {
                try {
                  t.apply(s, e)
                } catch (e) {
                  s.debugLog.e(e)
                }
              }))
            }, t
          }
        }
        return e.prototype.load = function (e) {
          var t = this,
            i = window.QSI.AssetManager;
          r.LoadingState.push(!0);
          var n = this.generateTargetingURL(e);
          this.latencyLog.startComponentTimer(o.components.TARGETING);
          var a = this.getTargetingPostData(),
            s = i.promiseFetch("POST", n, a);
          r.Request[e.id] = {
            Intercepts: {},
            Params: e
          }, s.then(function () {
            t.latencyLog.endComponentTimer(o.components.TARGETING)
          }).then(this.handleTargetingResponse.bind(this, e), function (i) {
            t.debugLog.e(i.Message), e.deferred && e.deferred.reject()
          })
        }, e.prototype.getTargetingPostData = function () {
          var e;
          return e = r.shouldStripQueryParamsInQLoc ? "Q_LOC=" + encodeURIComponent(window.location.href.split("?")[0]) : "Q_LOC=" + encodeURIComponent(window.location.href), void 0 !== r.config.externalReference && (e += "&extRef=" + r.config.externalReference), e
        }, e.prototype.generateTargetingURL = function (e) {
          var t = r.baseURL + "Targeting.php?",
            i = [];
          e.InterceptID && i.push("Q_InterceptID=" + e.InterceptID), e.ZoneID && i.push("Q_ZoneID=" + e.ZoneID), null === e.Q_DEBUG && (i.push("Q_DEBUG"), r.isDebug = !0), null === e.Q_BOOKMARKLET && i.push("Q_BOOKMARKLET"), null === e.Q_NOCACHE && i.push("Q_NOCACHE"), void 0 !== e.version && null !== e.version && i.push("Version=" + e.version);
          var n = r.profile.get("QualtricsSurveyHistory", "", 1);
          if (n) {
            var o = encodeURIComponent(Object.keys(n).toString());
            i.push("Q_QualtricsSurveyTaken=" + o)
          }
          return void 0 !== e.Q_CLIENTVERSION && null !== e.Q_CLIENTVERSION && i.push("Q_CLIENTVERSION=" + e.Q_CLIENTVERSION), void 0 !== e.Q_CLIENTTYPE && null !== e.Q_CLIENTTYPE && i.push("Q_CLIENTTYPE=" + e.Q_CLIENTTYPE), t + i.join("&")
        }, e.prototype.isMessageEventOriginAllowed = function (e) {
          if (r.reg)
            for (var t in r.reg)
              if (Object.prototype.hasOwnProperty.call(r.reg, t) && r.reg[t] && r.reg[t].options) {
                var i = r.reg[t].options;
                if (i.targetURLOrigin === e) return !0;
                if (i.target && i.target.OriginalURLOrigin === e) return !0
              }
          return this.debugLog.c("Event origin is not allowed: " + e), !1
        }, e.prototype.handleTargetingResponse = function (e, t) {
          var i = this,
            n = window.QSI,
            o = n.AssetManager,
            a = n.API,
            s = n.EventTracker,
            c = n.history;
          try {
            var l;
            if ("SampleRejected" === t) return;
            try {
              l = JSON.parse(t)
            } catch (e) {
              return void this.debugLog.e("Failed to parse JSON of targeting response: " + t)
            }
            if (l.Error) return void this.debugLog.e(l.Message);
            this.setGlobalVars(l);
            var p = l.Modules;
            if (c.logVisit(), !r.Request[e.id].hasDependencies && r.Request[e.id].hasBeenResolved || (s.trackElements(), s.incrementEventList(), window._qsie = a.Events), p.Core) o.promiseLoadScript("Core", p.Core).then(function () {
              try {
                var t = window.QSI.ClientSideTargeting;
                r.global.featureFlags["DUX.ClientSideTargetingM1"] && l.ClientSideIntercepts ? (t.setEnabled(!0), l.Intercepts = [], l.ClientSideIntercepts.forEach(function (n) {
                  if (n)
                    if (n.Error) i.debugLog.log(n.Message);
                    else {
                      var o = t.evaluateIntercept(n);
                      o && (r.Request[e.id].Intercepts[n.InterceptID] = {}, r.Request[e.id].Intercepts[n.InterceptID].Targeting = o, l.Intercepts.push(o), o.Decision.Creative && (o.Decision.Creative.Type && (l.Modules[o.Decision.Creative.Type] = r.global.clientVersion), o.Decision.Creative.PopUnderTarget && (l.Modules.PopUnder = r.global.clientVersion)))
                    }
                })) : l.Intercepts && l.Intercepts.forEach(function (t) {
                  t && (t.Error ? i.debugLog.log(t.Message) : (r.Request[e.id].Intercepts[t.InterceptID] = {}, r.Request[e.id].Intercepts[t.InterceptID].Targeting = t))
                }), l.Dependencies && !t.isEnabled() ? i.handleDependencyResolver(e, l) : i.loadModules(e, l)
              } catch (e) {
                i.debugLog.e(e)
              }
            }, function () { });
            else this.doneLoading(e)
          } catch (e) {
            this.debugLog.e(e)
          }
        }, e.prototype.handleDependencyResolver = function (e, t) {
          var i = this,
            n = window.QSI.AssetManager,
            a = this.generateTargetingURL(e);
          a += "&t=" + (new Date).getTime(), a += "&Q_VSI=" + encodeURIComponent(JSON.stringify(t.RequestData.validIntercepts)), a += "&Q_DPR=true", this.latencyLog.startComponentTimer(o.components.DPR_TARGETING);
          var s = "";
          for (var c in t.Dependencies) Object.prototype.hasOwnProperty.call(t.Dependencies, c) && ("SiteCatalyst" === c && (QSI["Resolve" + c].rootName = r.adobeVar), s += QSI["Resolve" + c].prepare(t.Dependencies[c]));
          s += "&" + this.getTargetingPostData(), n.promiseFetch("POST", a, s).then(function () {
            this.latencyLog.endComponentTimer(o.components.DPR_TARGETING)
          }).then(this.handleTargetingResponse.bind(this, e), function (t) {
            i.debugLog.e(t.Message), e.deferred && e.deferred.reject()
          })
        }, e.prototype.loadModules = function (e, t) {
          var i = this,
            n = window.QSI,
            a = n.AssetManager,
            s = n.ContactFrequency,
            c = [],
            l = t.Modules;
          for (var p in this.latencyLog.startComponentTimer(o.components.ASSETS_AND_MODULES), l)
            if (Object.prototype.hasOwnProperty.call(l, p)) {
              if ("ScreenCapture" === p) {
                this.setupScreenCaptureListener(l[p]);
                continue
              }
              if (("HTTPRedirect" === p || "SocialMedia" === p || "LatencyLog" === p) && r.global.isHostedJS()) {
                this.debugLog.c("Module type '" + p + "' is not supported when using Site Intercept Hosted JS");
                continue
              }
              var d = a.promiseLoadScript(p, l[p]);
              c.push(d)
            }
          for (var u = 0; u < t.Intercepts.length; u++) {
            var g = t.Intercepts[u];
            if (g && !g.Error && null !== g.Decision.ActionSetID) {
              var I = a.promiseLoadIntercept(e.id, g, e),
                S = a.promiseLoadCreative(e.id, g, e);
              if (c.push(I, S), g.Decision.PopUnderTarget && g.Decision.PopUnderTarget.ID && "Target" !== g.Decision.PopUnderTarget.ID) {
                var f = a.promiseLoadPopUnderTarget(e.id, g, e);
                c.push(f)
              }
            }
          }
          this.when.apply(this, c).then(function () {
            try {
              if (i.latencyLog.endComponentTimer(o.components.ASSETS_AND_MODULES), r.global.featureFlags["DX.ContactFrequencyV3"] || !r.global.featureFlags["DX.ContactFrequencyV2"] && !r.global.featureFlags["DX.ContactFrequency"]) i.prepareIntercepts(e, t);
              else s.checkContactFrequencyRules(r.Request[e.id].Intercepts, r.global.brandID).then(function () {
                i.prepareIntercepts(e, t)
              })
            } catch (e) {
              i.debugLog.e(e)
            }
          }, function (t) {
            var n = "";
            "string" == typeof t ? n = t : t && "string" == typeof t.Message && (n = t), i.debugLog.e("An error occurred while loading the intercept. " + n), e.deferred && e.deferred.reject()
          })
        }, e.prototype.setInterceptDisplayOptionCallback = function (e, t) {
          var i = window.QSI.util;
          switch (e) {
            case "":
            case "onfocus":
              i.waitForFocus().done(t);
              break;
            case "onload":
              t();
              break;
            case "onexit":
              i.waitForExitIntent().done(t);
              break;
            default:
              return
          }
        }, e.prototype.prepareIntercepts = function (e, t) {
          var i = window.QSI.RunIntercepts;
          !0 !== e.loadingFromAPI && (this.latencyLog.endTimer(), this.latencyLog.sampledSend(r.global.latencySamplePercentage)), this.setGlobalIncludes(e, t), ("manual" !== r.Request[e.id].displayInterceptType && !r.Request[e.id].zoneManualDisplay || r.Request[e.id].hasDependencies) && i(e.id, !1), this.doneLoading(e), e.deferred && e.deferred.resolve()
        }, e.prototype.setGlobalIncludes = function (e, t) {
          r.isDebug && (r.Request[e.id].Debug = {
            debugInfo: JSON.parse(t.DebugInfo),
            version: t.RequestData.bVersion
          }, r.debug.version = t.RequestData.bVersion, r.debug.debugInfo = JSON.parse(t.DebugInfo)), r.version = t.RequestData.bVersion, r.InterceptsRan = !1, r.Request[e.id].hasDependencies = t.RequestData.hasDependencies, r.Request[e.id].hasBeenResolved = t.RequestData.hasBeenResolved, r.Request[e.id].displayInterceptType = t.RequestData.displayInterceptType, r.Request[e.id].zoneManualDisplay = t.RequestData.zoneManualDisplay
        }, e.prototype.setGlobalVars = function (e) {
          r.Browser = {
            name: e.RequestData.browser,
            version: e.RequestData.browserVersion,
            isMobile: e.RequestData.isMobile,
            isBrowserSupported: e.RequestData.isBrowserSupported
          }, r.CORSOrigin = e.RequestData.CORSOrigin, r.OS = {
            name: e.RequestData.osName,
            version: e.RequestData.osVersion
          }, r.global.brandID = e.RequestData.brandID, r.global.brandDC = e.RequestData.brandDC, r.global.isHostedJS() ? (r.global.graphicPath = "https://" + r.global.brandDC + "/WRQualtricsSiteIntercept/Graphic.php?IM=", r.global.imagePath = "https:" + r.global.baseURL + "/WRSiteInterceptEngine/../WRQualtricsShared/Graphics/") : (r.global.graphicPath = "https://" + r.global.brandDC + "/WRQualtricsSiteIntercept/Graphic.php?IM=", r.global.imagePath = r.global.baseURL + "/WRQualtricsShared/Graphics/"), r.global.maxCookieSize = e.RequestData.maxCookieSize, r.global.featureFlags = e.FeatureFlags, r.global.screenCaptureServiceBaseURL = e.RequestData.screenCaptureServiceBaseURL, r.global.eventTrackers = e.RequestData.eventTrackers, r.adobeVar = e.RequestData.adobeSCVariable, r.id = e.RequestData.ID, r.reqID[e.RequestData.ID] = !0, r.CookieDomain = e.RequestData.cookieDomain, r.historyStorageType = e.RequestData.historyStorageType, r.historyStorageSize = e.RequestData.historyStorageSize, r.currentURL = window.location.href.split("?")[0],
            function () {
              var e = document.createElement("div");
              e.className = "scrollbar-measure", e.style.width = "100px", e.style.height = "100px", e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-99999px", document.body.appendChild(e);
              var t = e.offsetWidth - e.clientWidth;
              r.scrollbarWidth = t, document.body.removeChild(e)
            }()
        }, e.prototype.parseQueryString = function (e) {
          var t = {};
          if (e && -1 !== e.indexOf("?"))
            for (var i = e.split("?", 2)[1].split("&"), n = 0; n < i.length; n++) {
              var r = i[n].split("=", 2);
              "Q_LOC" === r[0] && -1 !== r[1].indexOf("Q_DEBUG") && (t.Q_DEBUG = !0), r[0] && (t[r[0]] = decodeURIComponent(r[1]))
            }
          return t
        }, e.prototype.replaceAll = function (e, t, i) {
          return t = t.replace(/([.*+?^${}()|[\]\\=!:/])/g, "\\$1"), e.replace(new RegExp(t, "g"), i)
        }, e.prototype.when = function (e) {
          for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
          var n = this,
            r = a([e], t),
            o = r.length,
            s = o,
            c = 1 === s ? e : this.Deferred(),
            l = function (e, t) {
              return function (i) {
                for (var r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                t[e] = arguments.length > 1 ? i : n.createArrayFromArguments(a([i], r)), --s || c.resolve(t)
              }
            };
          if (o > 1)
            for (var p = 0; p < o; p++) r[p] && r[p].promise ? r[p].promise().done(l(p, r)).fail(c.reject) : s--;
          return s < 1 && c.resolve(r), c.promise()
        }, e.prototype.createArrayFromArguments = function (e) {
          return e ? Array.prototype.slice.call(e) : []
        }, e.prototype.isFunction = function (e) {
          return "function" == typeof e || !1
        }, e.prototype.forOwn = function (e, t) {
          if (e && e instanceof Object && this.isFunction(t))
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t(e[i], i, e)
        }, e.prototype.each = function (e, t) {
          var i = e.length;
          if (i)
            for (var n = 0; n < i; n++) t(e[n], n)
        }, e.prototype.doneLoading = function (e) {
          if (r.LoadingState.pop(), 0 === r.LoadingState.length) {
            if (!0 !== e.loadingFromAPI) {
              var t = document.createEvent("Event");
              t.initEvent("qsi_js_loaded", !0, !0), window.dispatchEvent(t)
            }
            for (var i = r.PendingQueue.length, n = 0; n < i; n++) {
              r.PendingQueue.shift()()
            }
          }
        }, e.prototype.setupJFEMessageEventHandlerForIOSOptimization = function () {
          var e = this;
          if (!r.JFEListenerRegistered) {
            r.JFEListenerRegistered = !0;
            return window.addEventListener("message", function (t) {
              try {
                if (!e.isMessageEventOriginAllowed(t.origin)) return;
                (function (e) {
                  var t = null;
                  if ("string" == typeof e) try {
                    t = JSON.parse(e)
                  } catch (e) {
                    return !1
                  }
                  return null !== t && "JFE" === t.from && "SI" === t.to && "JFELoaded" === t.event && "iOS" === r.OS.name
                })(t.data) && (i = t.source, n = t.origin, i.postMessage({
                  event: "addIOSSIWorkaround",
                  from: "SI",
                  to: "JFE"
                }, n))
              } catch (t) {
                e.debugLog.e(t)
              }
              var i, n
            })
          }
        }, e.prototype.setupScreenCaptureListener = function (e) {
          var t = this;
          if (!r.screenCaptureListenerRegistered) return r.screenCaptureListenerRegistered = !0, window.addEventListener("message", function (i) {
            try {
              if (!t.isMessageEventOriginAllowed(i.origin)) return;
              var n = window.QSI,
                o = n.AssetManager,
                a = n.util.getOriginInterceptOfMessage(i.source);
              if (!a) return;
              var s = i.data;
              if ("string" == typeof s) try {
                s = JSON.parse(s)
              } catch (e) {
                return
              }
              if (!s || "JFE" !== s.from || "SI" !== s.to) return;
              if (r.screenCaptureHandlers || (r.screenCaptureHandlers = {}), "canScreenCapture" === s.event) {
                void 0 === r.screenCaptureModulePromise && (r.screenCaptureModulePromise = o.promiseLoadScript("ScreenCapture", e));
                return void i.source.postMessage(JSON.stringify({
                  event: "canScreenCapture",
                  from: "SI",
                  to: "JFE",
                  canScreenCapture: !0
                }), i.origin)
              }
              void 0 !== r.screenCaptureModulePromise && r.screenCaptureModulePromise.then(function () {
                var e = window.QSI.ScreenCaptureHandler;
                switch (r.screenCaptureHandlers[s.sessionId] || (r.screenCaptureHandlers[s.sessionId] = new e(a, i.source, s.sessionId, s.translations, i.origin)), s.event) {
                  case "startScreenCapture":
                    r.screenCaptureHandlers[s.sessionId].captureScreen(s.questionId);
                    break;
                  case "editScreenCapture":
                    r.screenCaptureHandlers[s.sessionId].editAnnotations(s.questionId);
                    break;
                  case "removeScreenCapture":
                    r.screenCaptureHandlers[s.sessionId].removeScreenCapture(s.questionId);
                    break;
                  case "sessionFinished":
                    r.screenCaptureHandlers[s.sessionId].removeAllScreenCaptures();
                    break;
                  default:
                    return
                }
              })
            } catch (e) {
              t.debugLog.e(e)
            }
          })
        }, e
      }(),
      c = new (function () {
        return function () {
          var e = this;
          this.isFullDbgInitialized = -1 !== window.location.href.indexOf("Q_DEBUG"), this.safeConsole = function (t, i) {
            if (e.isFullDbgInitialized) try {
              console[t](i)
            } catch (e) { }
          }, this.enableFullDebug = function () {
            e.isFullDbgInitialized = !0
          }, this.disableFullDebug = function () {
            e.isFullDbgInitialized = !1
          }, this.log = function (e, t, i) {
            var n = window.QSI,
              r = n.ClientLog,
              o = n.global;
            r && (o.featureFlags.isClientLoggingEnabled ? r.send(e, t, i) : r.sampledSend(e, t, i, .02))
          }, this.c = function (t) {
            e.safeConsole("log", t), e.log(t)
          }, this.d = function (t) {
            e.safeConsole("dir", t), e.log(t)
          }, this.t = function (t) {
            e.safeConsole("trace", t), e.log(t)
          }, this.e = function (t) {
            e.safeConsole("log", t && t.message || "error"), e.safeConsole("error", t), e.log(t)
          }
        }
      }()),
      l = new o(c);
    window.QSI.dbg = c, window.QSI.LatencyLog = l, window.QSI.Orchestrator = new s, window.QSI.Orchestrator.init(l, c)
  }]);
} catch (e) {
  if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
    QSI.dbg.e(e);
  }
}