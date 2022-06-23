"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[7574],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(t),y=o,m=c["".concat(l,".").concat(y)]||c[y]||u[y]||i;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=c;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},99607:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={version:"0.7.0",title:"OSS Filesystem",keywords:["hudi","hive","aliyun","oss","spark","presto"],summary:"In this page, we go over how to configure Hudi with OSS filesystem.",last_modified_at:new Date("2020-04-21T21:38:24.000Z")},s=void 0,a={unversionedId:"oss_hoodie",id:"version-0.7.0/oss_hoodie",title:"OSS Filesystem",description:"In this page, we explain how to get your Hudi spark job to store into Aliyun OSS.",source:"@site/versioned_docs/version-0.7.0/oss_hoodie.md",sourceDirName:".",slug:"/oss_hoodie",permalink:"/docs/0.7.0/oss_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.7.0/oss_hoodie.md",tags:[],version:"0.7.0",frontMatter:{version:"0.7.0",title:"OSS Filesystem",keywords:["hudi","hive","aliyun","oss","spark","presto"],summary:"In this page, we go over how to configure Hudi with OSS filesystem.",last_modified_at:"2020-04-21T21:38:24.000Z"},sidebar:"version-0.7.0/docs",previous:{title:"GCS Filesystem",permalink:"/docs/0.7.0/gcs_hoodie"},next:{title:"Azure Filesystem",permalink:"/docs/0.7.0/azure_hoodie"}},l=[{value:"Aliyun OSS configs",id:"aliyun-oss-configs",children:[{value:"Aliyun OSS Credentials",id:"aliyun-oss-credentials",children:[],level:3},{value:"Aliyun OSS Libs",id:"aliyun-oss-libs",children:[],level:3}],level:2}],p={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this page, we explain how to get your Hudi spark job to store into Aliyun OSS."),(0,o.kt)("h2",{id:"aliyun-oss-configs"},"Aliyun OSS configs"),(0,o.kt)("p",null,"There are two configurations required for Hudi-OSS compatibility:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adding Aliyun OSS Credentials for Hudi"),(0,o.kt)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,o.kt)("h3",{id:"aliyun-oss-credentials"},"Aliyun OSS Credentials"),(0,o.kt)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your OSS bucket name, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"fs.oss.endpoint")," with your OSS endpoint, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"fs.oss.accessKeyId")," with your OSS key, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"fs.oss.accessKeySecret")," with your OSS secret. Hudi should be able to read/write from the bucket."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n  <name>fs.defaultFS</name>\n  <value>oss://bucketname/</value>\n</property>\n\n<property>\n  <name>fs.oss.endpoint</name>\n  <value>oss-endpoint-address</value>\n  <description>Aliyun OSS endpoint to connect to.</description>\n</property>\n\n<property>\n  <name>fs.oss.accessKeyId</name>\n  <value>oss_key</value>\n  <description>Aliyun access key ID</description>\n</property>\n\n<property>\n  <name>fs.oss.accessKeySecret</name>\n  <value>oss-secret</value>\n  <description>Aliyun access key secret</description>\n</property>\n\n<property>\n  <name>fs.oss.impl</name>\n  <value>org.apache.hadoop.fs.aliyun.oss.AliyunOSSFileSystem</value>\n</property>\n")),(0,o.kt)("h3",{id:"aliyun-oss-libs"},"Aliyun OSS Libs"),(0,o.kt)("p",null,"Aliyun hadoop libraries jars to add to our pom.xml. Since hadoop-aliyun depends on the version of hadoop 2.9.1+, you need to use the version of hadoop 2.9.1 or later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.apache.hadoop</groupId>\n  <artifactId>hadoop-aliyun</artifactId>\n  <version>3.2.1</version>\n</dependency>\n<dependency>\n  <groupId>com.aliyun.oss</groupId>\n  <artifactId>aliyun-sdk-oss</artifactId>\n  <version>3.8.1</version>\n</dependency>\n<dependency>\n  <groupId>org.jdom</groupId>\n  <artifactId>jdom</artifactId>\n  <version>1.1</version>\n</dependency>\n")))}d.isMDXComponent=!0}}]);