"use strict";(self.webpackChunk_shopby_vanilla_components=self.webpackChunk_shopby_vanilla_components||[]).push([[687],{1586:(e,t,s)=>{s.d(t,{T$:()=>h});var o=s(5373);var l=Object.defineProperty,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(e,t,s)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,c=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&i(e,s,t[s]);if(n)for(var s of n(t))a.call(t,s)&&i(e,s,t[s]);return e};class h extends HTMLElement{constructor(){var e;console.log("constructor"),super(),this.templateMap=new Map,this.rendered=!1,this.state={},this.slotChange=e=>{if(this.rendered)return;const[t]=e.assignedElements();console.log("slot change element : ",t),console.log("slots : ",t.querySelectorAll("[slot]")),t.querySelectorAll("[slot]").forEach((({slot:e,outerHTML:t})=>{console.log("slotName : ",e),console.log("outerHTML : ",t),this.templateMap.set(e,t)})),this.rendered=!0,this.render(t.outerHTML)},this.insertSlotBy();try{const t=this.getAttribute("shopby-initializable"),s=JSON.parse(null!=(e=this.getAttribute("shopby-query"))?e:"{}");console.log(s),!t&&this.setup(s),this.setEvent()}catch(e){console.error(e)}}insertSlotBy(e=this){e.attachShadow({mode:"open"}).innerHTML="<slot></slot>"}setup(e){}setState(e,t){if(this.state=c(c({},this.state),e),!t)return;const s=this.templateMap.get(t),o=this.querySelector(`[slot=${t}]`);this.render(s,o)}getState(){return this.state}setEvent(){}addEvent({eventType:e,eventMap:t,element:s=this}){s.addEventListener(e,(e=>{var s;const{target:o}=e,l=(e=>{var t,s,o;if(!e)return"";return(null==(t=e.dataset)?void 0:t.shopbyAction)||(null==(o=null==(s=e.closest("[data-shopby-action]"))?void 0:s.dataset)?void 0:o.shopbyAction)})(o);null==(s=null==t?void 0:t.get(l))||s(e)}))}render(e,t=this){console.log("this : ",this),console.log("render html : ",e),console.log("render element : ",t);const s=(0,o.compile)(e);t.innerHTML=s(this.state)}connectedCallback(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("slot");t&&t.addEventListener("slotchange",(()=>this.slotChange(t)))}disconnectedCallback(){this.rendered=!1}adoptedCallback(){}attributeChangedCallback(e,t,s){}}h.ACTION_TYPE={}}},e=>{e.O(0,[373],(()=>(1586,e(e.s=1586)))),e.O()}]);