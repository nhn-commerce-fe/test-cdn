"use strict";(self.webpackChunk_shopby_vanilla_components=self.webpackChunk_shopby_vanilla_components||[]).push([[831],{6364:(t,e,o)=>{var s=o(1586);const c=class extends s.T${constructor(){super(...arguments),this.fetchProducts=t=>{return e=this,null,o=function*(){const e=(yield t)===c.ACTION_TYPE.NEXT?[{productNo:"12345",productName:"샘플 상품3 next3",thumbnail:"https://placehold.co/100"},{productNo:"67890",productName:"샘플 상품4 next4",thumbnail:"https://placehold.co/100"}]:[{productNo:"12345",productName:"샘플 상품1 prev1",thumbnail:"https://placehold.co/100"},{productNo:"67890",productName:"샘플 상품2 prev2",thumbnail:"https://placehold.co/100"}];this.setState({products:e},"PRODUCT_LIST")},new Promise(((t,s)=>{var c=t=>{try{n(o.next(t))}catch(t){s(t)}},l=t=>{try{n(o.throw(t))}catch(t){s(t)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(c,l);n((o=o.apply(e,null)).next())}));var e,o}}setup(){console.log("recent-products setup"),this.setState({products:[{productNo:"12345",productName:"샘플 상품1",thumbnail:"https://placehold.co/100"},{productNo:"67890",productName:"샘플 상품2",thumbnail:"https://placehold.co/100"},{productNo:"13579",productName:"샘플 상품3",thumbnail:"https://placehold.co/100"}]})}setEvent(){this.handleClickEvent()}handleClickEvent(){const{PREV:t,NEXT:e}=c.ACTION_TYPE,o=new Map;o.set(t,(()=>{this.fetchProducts(t)})),o.set(e,(()=>{this.fetchProducts(e)})),this.addEvent({eventType:"click",eventMap:o})}};let l=c;l.ACTION_TYPE={PREV:"PREV",NEXT:"NEXT"},customElements.define("recent-products",l);var n=o(3683);class a extends s.T${setEvent(){document.addEventListener(n.k.MALL,(t=>{console.log(t.detail),t.detail&&this.setState({mall:t.detail},"service")})),document.addEventListener(n.k.TERMS_FOR_BOTTOM,(t=>{console.log("terms : ",t.detail),t.detail&&this.setState({terms:Object.values(t.detail)},"terms")}))}}customElements.define("common-footer",a)}},t=>{t.O(0,[373,687,507,457,493],(()=>(6364,t(t.s=6364)))),t.O()}]);