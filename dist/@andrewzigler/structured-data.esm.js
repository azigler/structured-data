import e from"vue";var t=function(e,t,n,r,o,i,s,a,c,d){"boolean"!=typeof s&&(c=a,a=s,s=!1);var p,f="function"==typeof n?n.options:n;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=p):t&&(p=s?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),p)if(f.functional){var u=f.render;f.render=function(e,t){return p.call(t),u(e,t)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,p):[p]}return n}({render:function(){var e=this.$createElement;return(this._self._c||e)("script",{attrs:{type:"application/ld+json"},domProps:{innerHTML:this._s(this.schemaData)}})},staticRenderFns:[]},void 0,{props:{type:{type:String,default:""},properties:{type:Object,default:function(){return{}}},schema:{type:Object,default:function(){return{}}}},data:function(){var e=this.type.charAt(0).toLowerCase()+this.type.slice(1)+"Schema";return{schemaData:JSON.stringify(Object.assign({},this.schema[e],this.properties))}}},void 0,!1,void 0,void 0,void 0);e.config.productionTip=!1,new e({render:function(e){return e(t)}}).$mount("#app");export default t;
