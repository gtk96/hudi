"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[16440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Schema evolution with DeltaStreamer using KafkaSource",excerpt:"Evolve schema used in Kafkasource of DeltaStreamer to keep data up to date with business",author:"sbernauer",category:"blog",image:"/assets/images/blog/hudi_schemaevolution.png"},i=void 0,c={permalink:"/cn/blog/2021/08/16/kafka-custom-deserializer",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-16-kafka-custom-deserializer.md",source:"@site/blog/2021-08-16-kafka-custom-deserializer.md",title:"Schema evolution with DeltaStreamer using KafkaSource",description:"The schema used for data exchange between services can change rapidly with new business requirements.",date:"2021-08-16T00:00:00.000Z",formattedDate:"August 16, 2021",tags:[],readingTime:3.155,truncated:!0,authors:[{name:"sbernauer"}],prevItem:{title:"Adding support for Virtual Keys in Hudi",permalink:"/cn/blog/2021/08/18/virtual-keys"},nextItem:{title:"Cost-Efficient Open Source Big Data Platform at Uber",permalink:"/cn/blog/2021/08/11/Cost-Efficient-Open-Source-Big-Data-Platform-at-Uber"}},s={authorsImageUrls:[void 0]},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The schema used for data exchange between services can change rapidly with new business requirements.\nApache Hudi is often used in combination with kafka as a event stream where all events are transmitted according to a record schema.\nIn our case a Confluent schema registry is used to maintain the schema and as schema evolves, newer versions are updated in the schema registry."))}p.isMDXComponent=!0}}]);