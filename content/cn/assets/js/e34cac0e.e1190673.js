"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[2436],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),g=n,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return o?r.createElement(m,a(a({ref:t},u),{},{components:o})):r.createElement(m,a({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},99735:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const i={title:"Google Cloud",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},a=void 0,l={unversionedId:"gcs_hoodie",id:"version-0.10.1/gcs_hoodie",title:"Google Cloud",description:"For Hudi storage on GCS, regional buckets provide an DFS API with strong consistency.",source:"@site/versioned_docs/version-0.10.1/gcs_hoodie.md",sourceDirName:".",slug:"/gcs_hoodie",permalink:"/cn/docs/0.10.1/gcs_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/gcs_hoodie.md",tags:[],version:"0.10.1",frontMatter:{title:"Google Cloud",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.10.1/docs",previous:{title:"AWS S3",permalink:"/cn/docs/0.10.1/s3_hoodie"},next:{title:"Alibaba Cloud",permalink:"/cn/docs/0.10.1/oss_hoodie"}},s=[{value:"GCS Configs",id:"gcs-configs",children:[{value:"GCS Credentials",id:"gcs-credentials",children:[],level:3},{value:"GCS Libs",id:"gcs-libs",children:[],level:3}],level:2}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For Hudi storage on GCS, ",(0,n.kt)("strong",{parentName:"p"},"regional")," buckets provide an DFS API with strong consistency."),(0,n.kt)("h2",{id:"gcs-configs"},"GCS Configs"),(0,n.kt)("p",null,"There are two configurations required for Hudi GCS compatibility:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adding GCS Credentials for Hudi"),(0,n.kt)("li",{parentName:"ul"},"Adding required jars to classpath")),(0,n.kt)("h3",{id:"gcs-credentials"},"GCS Credentials"),(0,n.kt)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your GCS bucket name and Hudi should be able to read/write from the bucket."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"  <property>\n    <name>fs.defaultFS</name>\n    <value>gs://hudi-bucket</value>\n  </property>\n\n  <property>\n    <name>fs.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem</value>\n    <description>The FileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.AbstractFileSystem.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS</value>\n    <description>The AbstractFileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.gs.project.id</name>\n    <value>GCS_PROJECT_ID</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.enable</name>\n    <value>true</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.email</name>\n    <value>GCS_SERVICE_ACCOUNT_EMAIL</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.keyfile</name>\n    <value>GCS_SERVICE_ACCOUNT_KEYFILE</value>\n  </property>\n")),(0,n.kt)("h3",{id:"gcs-libs"},"GCS Libs"),(0,n.kt)("p",null,"GCS hadoop libraries to add to our classpath"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"com.google.cloud.bigdataoss:gcs-connector:1.6.0-hadoop2")))}u.isMDXComponent=!0}}]);