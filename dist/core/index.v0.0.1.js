"use strict"; (self.webpackChunk_shopby_vanilla_components = self.webpackChunk_shopby_vanilla_components || []).push([[687], { 1586: (t, e, s) => { s.d(e, { T$: () => h }); var n = s(5373); var r = Object.defineProperty, o = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable, i = (t, e, s) => e in t ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, c = (t, e) => { for (var s in e || (e = {})) a.call(e, s) && i(t, s, e[s]); if (o) for (var s of o(e)) l.call(e, s) && i(t, s, e[s]); return t }; class h extends HTMLElement { constructor() { var t; console.log("constructor"), super(), this.templateMap = new Map, this.rendered = !1, this.state = {}, this.slotChange = t => { if (this.rendered) return; const [e] = t.assignedElements(); e.querySelectorAll("[slot]").forEach((({ slot: t, outerHTML: e }) => { this.templateMap.set(t, e) })), this.rendered = !0, this.render(e.outerHTML) }, this.insertSlotBy(); try { const e = this.getAttribute("shopby-initializable"), s = JSON.parse(null != (t = this.getAttribute("shopby-query")) ? t : ""); console.log(s), !e && this.setup(s), this.setEvent() } catch (t) { console.error(t) } } insertSlotBy(t = this) { t.attachShadow({ mode: "open" }).innerHTML = "<slot></slot>" } setup(t) { } setState(t, e) { if (this.state = c(c({}, this.state), t), !e) return; const s = this.templateMap.get(e), n = this.querySelector(`[slot=${e}]`); this.render(s, n) } getState() { return this.state } setEvent() { } addEvent({ eventType: t, eventMap: e, element: s = this }) { s.addEventListener(t, (t => { var s; const { target: n } = t, r = (t => { var e, s, n; if (!t) return ""; return (null == (e = t.dataset) ? void 0 : e.shopbyAction) || (null == (n = null == (s = t.closest("[data-shopby-action]")) ? void 0 : s.dataset) ? void 0 : n.shopbyAction) })(n); null == (s = null == e ? void 0 : e.get(r)) || s(t) })) } render(t, e = this) { const s = (0, n.compile)(t); e.innerHTML = s(this.state) } connectedCallback() { var t; const e = null == (t = this.shadowRoot) ? void 0 : t.querySelector("slot"); e && e.addEventListener("slotchange", (() => this.slotChange(e))) } disconnectedCallback() { this.rendered = !1 } adoptedCallback() { } attributeChangedCallback(t, e, s) { } } h.ACTION_TYPE = {} } }, t => { t.O(0, [373], (() => (1586, t(t.s = 1586)))), t.O() }]);