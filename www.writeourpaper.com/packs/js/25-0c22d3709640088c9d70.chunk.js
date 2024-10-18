(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    157: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return s;
        }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "d", function () {
          return i;
        });
      var r = function (t, e, n) {
          var r;
          return function () {
            var a = null,
              s = arguments,
              i = function () {
                (r = null), n || t.apply(a, s);
              },
              o = n && !r;
            clearTimeout(r), (r = window.setTimeout(i, e)), o && t.apply(a, s);
          };
        },
        a = function (t) {
          var e = t.replace("#", "");
          return 0.299 * parseInt(e.slice(0, 2), 16) +
            0.587 * parseInt(e.slice(2, 4), 16) +
            0.114 * parseInt(e.slice(4, 6), 16) >
            186
            ? "#000000"
            : "#FFFFFF";
        },
        s = function (t) {
          var e = "";
          if (t >= 60 && t < 3600) {
            var n = Math.floor(t / 60);
            e = n + " Min";
            var r = 60 === n ? 0 : Math.floor(t % 60);
            return e + (r > 0 ? " " + r + " Sec" : "");
          }
          if (t >= 3600 && t < 86400) {
            var a = Math.floor(t / 3600);
            e = a + " Hr";
            var s = t % 3600 < 60 || 24 === a ? 0 : Math.floor((t % 3600) / 60);
            return e + (s > 0 ? " " + s + " Min" : "");
          }
          if (t >= 86400) {
            var i = Math.floor(t / 86400);
            e = i + " Day";
            var o =
              t % 86400 < 3600 || i >= 364 ? 0 : Math.floor((t % 86400) / 3600);
            return e + (o > 0 ? " " + o + " Hr" : "");
          }
          return Math.floor(t) + " Sec";
        },
        i = function (t, e, n) {
          void 0 === t && (t = ""),
            void 0 === e && (e = 1024),
            void 0 === n && (n = !1);
          var r = t;
          return t.length > e && (r = t.substring(0, e)), n && (r += "..."), r;
        };
    },
    1877: function (t, e, n) {
      "use strict";
      n(636);
    },
    1878: function (t, e, n) {
      "use strict";
      n(637);
    },
    1879: function (t, e, n) {
      var r = n(32),
        a = n(251);
      t.exports = function (t) {
        return r(function () {
          return (
            !!a[t]() ||
            "\u200b\x85\u180e" != "\u200b\x85\u180e"[t]() ||
            a[t].name !== t
          );
        });
      };
    },
    2839: function (t, e, n) {
      "use strict";
      n.r(e);
      n(6), n(3), n(5), n(11), n(8), n(12);
      var r = n(324),
        a = n(4),
        s = n(157),
        i =
          (n(40),
          n(45),
          n(23),
          {
            name: "GroupedAvatars",
            components: { Thumbnail: n(57).a },
            props: {
              users: {
                type: Array,
                default: function () {
                  return [];
                },
              },
            },
          }),
        o = n(1),
        u = {
          name: "AvailableAgents",
          components: {
            GroupedAvatars: Object(o.a)(
              i,
              function () {
                var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
                return n(
                  "div",
                  { staticClass: "flex" },
                  t._l(t.users, function (t, e) {
                    return n(
                      "span",
                      {
                        key: t.id,
                        class:
                          (e ? "-ml-4" : "") +
                          " inline-block rounded-full text-white shadow-solid",
                      },
                      [
                        n("thumbnail", {
                          attrs: {
                            size: "40px",
                            username: t.name,
                            src: t.avatar,
                            "has-border": "",
                          },
                        }),
                      ],
                      1
                    );
                  }),
                  0
                );
              },
              [],
              !1,
              null,
              null,
              null
            ).exports,
          },
          props: {
            agents: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          computed: {
            users: function () {
              return this.agents.slice(0, 5).map(function (t) {
                return { id: t.id, avatar: t.avatar_url, name: t.name };
              });
            },
          },
        },
        l = Object(o.a)(
          u,
          function () {
            var t = this,
              e = t.$createElement;
            return (t._self._c || e)("grouped-avatars", {
              attrs: { users: t.users },
            });
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        c = n(638),
        f = n(584),
        d = n(248);
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(n), !0).forEach(function (e) {
                m(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function m(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var g = {
          name: "TeamAvailability",
          components: { AvailableAgents: l, CustomButton: c.a },
          mixins: [r.a, f.a, d.a],
          props: {
            availableAgents: { type: Array, default: function () {} },
            hasConversation: { type: Boolean, default: !1 },
          },
          computed: p(
            p(
              {},
              Object(a.mapGetters)({ widgetColor: "appConfig/getWidgetColor" })
            ),
            {},
            {
              textColor: function () {
                return Object(s.c)(this.widgetColor);
              },
              isOnline: function () {
                var t = this.channelConfig.workingHoursEnabled,
                  e = this.availableAgents.length > 0;
                return t ? this.isInBetweenTheWorkingHours : e;
              },
              replyWaitMessage: function () {
                var t = this.channelConfig.workingHoursEnabled;
                return this.isOnline
                  ? this.replyTimeStatus
                  : t
                  ? this.outOfOfficeMessage
                  : "";
              },
            }
          ),
          methods: {
            startConversation: function () {
              this.$emit("start-conversation");
            },
          },
        },
        b = Object(o.a)(
          g,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              { staticClass: "px-5" },
              [
                n(
                  "div",
                  { staticClass: "flex items-center justify-between mb-4" },
                  [
                    n(
                      "div",
                      {
                        staticClass: "max-w-xs",
                        class: t.$dm("text-black-700", "dark:text-slate-50"),
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "text-base leading-5 font-medium mb-1",
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(
                                  t.isOnline
                                    ? t.$t("TEAM_AVAILABILITY.ONLINE")
                                    : t.$t("TEAM_AVAILABILITY.OFFLINE")
                                ) +
                                "\n      "
                            ),
                          ]
                        ),
                        t._v(" "),
                        n("div", { staticClass: "text-xs leading-4 mt-1" }, [
                          t._v(
                            "\n        " + t._s(t.replyWaitMessage) + "\n      "
                          ),
                        ]),
                      ]
                    ),
                    t._v(" "),
                    t.isOnline
                      ? n("available-agents", {
                          attrs: { agents: t.availableAgents },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "custom-button",
                  {
                    staticClass: "font-medium",
                    attrs: {
                      block: "",
                      "bg-color": t.widgetColor,
                      "text-color": t.textColor,
                    },
                    on: { click: t.startConversation },
                  },
                  [
                    t._v(
                      "\n    " +
                        t._s(
                          t.hasConversation
                            ? t.$t("CONTINUE_CONVERSATION")
                            : t.$t("START_CONVERSATION")
                        ) +
                        "\n  "
                    ),
                  ]
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        v = n(555);
      function y(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function w(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var C = {
          name: "Home",
          components: { TeamAvailability: b },
          mixins: [r.a, v.a],
          props: {
            hasFetched: { type: Boolean, default: !1 },
            isCampaignViewClicked: { type: Boolean, default: !1 },
          },
          data: function () {
            return {};
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? y(Object(n), !0).forEach(function (e) {
                    w(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : y(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(a.mapGetters)({
              availableAgents: "agent/availableAgents",
              activeCampaign: "campaign/getActiveCampaign",
              conversationSize: "conversation/getConversationSize",
            })
          ),
          methods: {
            startConversation: function () {
              return this.preChatFormEnabled && !this.conversationSize
                ? this.replaceRoute("prechat-form")
                : this.replaceRoute("messages");
            },
          },
        },
        O = C,
        x = Object(o.a)(
          O,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              { staticClass: "flex flex-1 flex-col justify-end" },
              [
                n("div", { staticClass: "flex flex-1 overflow-auto" }),
                t._v(" "),
                n("team-availability", {
                  attrs: {
                    "available-agents": t.availableAgents,
                    "has-conversation": !!t.conversationSize,
                  },
                  on: { "start-conversation": t.startConversation },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = x.exports;
    },
    553: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return a;
        });
      n(597), n(47), n(68);
      var r = function () {
          var t = 12 * (window.devicePixelRatio || 1),
            e = document.createElement("canvas");
          if (
            !e.getContext ||
            !e.getContext("2d") ||
            "function" !== typeof e.getContext("2d").fillText
          )
            return !1;
          var n = e.getContext("2d");
          return (
            (n.fillStyle = "#f00"),
            (n.textBaseline = "top"),
            (n.font = "32px Arial"),
            n.fillText("\ud83d\udc28", 0, 0),
            0 !== n.getImageData(t, t, 1, 1).data[0]
          );
        },
        a = function (t) {
          return t
            ? t
                .replace(
                  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                  ""
                )
                .replace(/\s+/g, " ")
                .trim()
            : "";
        };
    },
    57: function (t, e, n) {
      "use strict";
      n(30), n(47), n(68), n(31), n(249), n(158);
      var r = {
          name: "Avatar",
          props: {
            username: { type: String, default: "" },
            size: { type: Number, default: 40 },
          },
          computed: {
            style: function () {
              return { fontSize: "".concat(Math.floor(this.size / 2.5), "px") };
            },
            userInitial: function () {
              var t = this.username.split(/[ -]/).reduce(function (t, e) {
                return t + e.charAt(0);
              }, "");
              return (
                t.length > 2 &&
                  -1 !== t.search(/[A-Z]/) &&
                  (t = t.replace(/[a-z]+/g, "")),
                (t = t.substring(0, 2).toUpperCase())
              );
            },
          },
        },
        a = (n(1877), n(1)),
        s = Object(a.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement;
            return (t._self._c || e)(
              "div",
              {
                staticClass: "avatar-container",
                style: t.style,
                attrs: { "aria-hidden": "true" },
              },
              [t._v("\n  " + t._s(t.userInitial) + "\n")]
            );
          },
          [],
          !1,
          null,
          "fce88f76",
          null
        ).exports,
        i = n(553),
        o = {
          components: { Avatar: s },
          props: {
            src: { type: String, default: "" },
            size: { type: String, default: "40px" },
            badge: { type: String, default: "" },
            username: { type: String, default: "" },
            status: { type: String, default: "" },
            hasBorder: { type: Boolean, default: !1 },
            shouldShowStatusAlways: { type: Boolean, default: !1 },
            title: { type: String, default: "" },
            variant: { type: String, default: "circle" },
          },
          data: function () {
            return { hasImageLoaded: !1, imgError: !1 };
          },
          computed: {
            userNameWithoutEmoji: function () {
              return Object(i.b)(this.username);
            },
            showStatusIndicator: function () {
              return (
                !!this.shouldShowStatusAlways ||
                "online" === this.status ||
                "busy" === this.status
              );
            },
            avatarSize: function () {
              return Number(this.size.replace(/\D+/g, ""));
            },
            badgeSrc: function () {
              return {
                instagram_direct_message: "instagram-dm",
                facebook: "messenger",
                "twitter-tweet": "twitter-tweet",
                "twitter-dm": "twitter-dm",
                whatsapp: "whatsapp",
                sms: "sms",
                "Channel::Line": "line",
                "Channel::Telegram": "telegram",
                "Channel::WebWidget": "",
              }[this.badge];
            },
            badgeStyle: function () {
              var t = Math.floor(this.avatarSize / 3),
                e = "".concat(t + 2, "px");
              return {
                width: e,
                height: e,
                borderRadius: "".concat(t / 2, "px"),
              };
            },
            statusStyle: function () {
              var t = "".concat(this.avatarSize / 4, "px");
              return { width: t, height: t };
            },
            thumbnailClass: function () {
              var t = this.hasBorder ? "border" : "",
                e =
                  "circle" === this.variant
                    ? "thumbnail-rounded"
                    : "thumbnail-square";
              return "user-thumbnail ".concat(t, " ").concat(e);
            },
            thumbnailBoxClass: function () {
              var t = "circle" === this.variant ? "is-rounded" : "";
              return "user-thumbnail-box ".concat(t);
            },
            shouldShowImage: function () {
              return !!this.src && !!this.hasImageLoaded && !this.imgError;
            },
          },
          watch: {
            src: function (t, e) {
              t !== e && this.imgError && (this.imgError = !1);
            },
          },
          methods: {
            onImgError: function () {
              this.imgError = !0;
            },
            onImgLoad: function () {
              this.hasImageLoaded = !0;
            },
          },
        },
        u =
          (n(1878),
          Object(a.a)(
            o,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                {
                  class: t.thumbnailBoxClass,
                  style: { height: t.size, width: t.size },
                  attrs: { title: t.title },
                },
                [
                  n("img", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.shouldShowImage,
                        expression: "shouldShowImage",
                      },
                    ],
                    class: t.thumbnailClass,
                    attrs: { src: t.src },
                    on: { load: t.onImgLoad, error: t.onImgError },
                  }),
                  t._v(" "),
                  n("Avatar", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t.shouldShowImage,
                        expression: "!shouldShowImage",
                      },
                    ],
                    class: t.thumbnailClass,
                    attrs: {
                      username: t.userNameWithoutEmoji,
                      size: t.avatarSize,
                    },
                  }),
                  t._v(" "),
                  t.badgeSrc
                    ? n("img", {
                        staticClass: "source-badge",
                        style: t.badgeStyle,
                        attrs: {
                          src:
                            "/integrations/channels/badges/" +
                            t.badgeSrc +
                            ".png",
                          alt: "Badge",
                        },
                      })
                    : t._e(),
                  t._v(" "),
                  t.showStatusIndicator
                    ? n("div", {
                        class:
                          "source-badge user-online-status user-online-status--" +
                          t.status,
                        style: t.statusStyle,
                      })
                    : t._e(),
                ],
                1
              );
            },
            [],
            !1,
            null,
            "4240ad79",
            null
          ));
      e.a = u.exports;
    },
    597: function (t, e, n) {
      "use strict";
      var r = n(34),
        a = n(250).trim;
      r(
        { target: "String", proto: !0, forced: n(1879)("trim") },
        {
          trim: function () {
            return a(this);
          },
        }
      );
    },
    636: function (t, e, n) {},
    637: function (t, e, n) {},
    638: function (t, e, n) {
      "use strict";
      n(6);
      var r = {
          props: {
            block: { type: Boolean, default: !1 },
            type: { type: String, default: "blue" },
            bgColor: { type: String, default: "" },
            textColor: { type: String, default: "" },
            disabled: { type: Boolean, default: !1 },
          },
          computed: {
            buttonClassName: function () {
              var t = "text-white py-3 px-4 rounded shadow-sm";
              return (
                "clear" === this.type &&
                  (t = "flex mx-auto mt-4 text-xs w-auto text-black-600"),
                "blue" !== this.type ||
                  Object.keys(this.buttonStyles).length ||
                  (t = "".concat(t, " bg-woot-500 hover:bg-woot-700")),
                this.block && (t = "".concat(t, " w-full")),
                t
              );
            },
            buttonStyles: function () {
              var t = {};
              return (
                this.bgColor && (t.backgroundColor = this.bgColor),
                this.textColor && (t.color = this.textColor),
                t
              );
            },
          },
          methods: {
            onClick: function (t) {
              this.$emit("click", t);
            },
          },
        },
        a = n(1),
        s = Object(a.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement;
            return (t._self._c || e)(
              "button",
              {
                class: t.buttonClassName,
                style: t.buttonStyles,
                attrs: { disabled: t.disabled },
                on: { click: t.onClick },
              },
              [t._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = s.exports;
    },
  },
]);
//# sourceMappingURL=25-0c22d3709640088c9d70.chunk.js.map
