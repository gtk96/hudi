"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[24285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Apache Hudi Support on Apache Zeppelin",excerpt:"Integrating HUDI's real-time and read-optimized query capabilities into Apache Zeppelin\u2019s notebook",author:"leesf",category:"blog"},i=void 0,p={permalink:"/cn/blog/2020/04/27/apache-hudi-apache-zepplin",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-04-27-apache-hudi-apache-zepplin.md",source:"@site/blog/2020-04-27-apache-hudi-apache-zepplin.md",title:"Apache Hudi Support on Apache Zeppelin",description:"1. Introduction",date:"2020-04-27T00:00:00.000Z",formattedDate:"April 27, 2020",tags:[],readingTime:2.23,truncated:!0,authors:[{name:"leesf"}],prevItem:{title:"Monitor Hudi metrics with Datadog",permalink:"/cn/blog/2020/05/28/monitoring-hudi-metrics-with-datadog"},nextItem:{title:"Export Hudi datasets as a copy or as different formats",permalink:"/cn/blog/2020/03/22/exporting-hudi-datasets"}},c={authorsImageUrls:[void 0]},l=[{value:"1. Introduction",id:"1-introduction",children:[],level:2}],u={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,a.kt)("p",null,"Apache Zeppelin is a web-based notebook that provides interactive data analysis. It is convenient for you to make beautiful documents that can be data-driven, interactive, and collaborative, and supports multiple languages, including Scala (using Apache Spark), Python (Apache Spark), SparkSQL, Hive, Markdown, Shell, and so on. Hive and SparkSQL currently support querying Hudi\u2019s read-optimized view and real-time view. So in theory, Zeppelin\u2019s notebook should also have such query capabilities."))}s.isMDXComponent=!0}}]);