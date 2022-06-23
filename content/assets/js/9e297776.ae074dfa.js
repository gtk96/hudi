"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[87615],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var r=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(i),h=o,f=c["".concat(s,".").concat(h)]||c[h]||p[h]||n;return i?r.createElement(f,a(a({ref:t},d),{},{components:i})):r.createElement(f,a({ref:t},d))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<n;u++)a[u]=i[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},30293:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=i(87462),o=(i(67294),i(3905));const n={title:"Troubleshooting",keywords:["hudi","troubleshooting"],last_modified_at:new Date("2021-08-18T19:59:57.000Z")},a=void 0,l={unversionedId:"troubleshooting",id:"version-0.10.0/troubleshooting",title:"Troubleshooting",description:"Troubleshooting",source:"@site/versioned_docs/version-0.10.0/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/0.10.0/troubleshooting",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/troubleshooting.md",tags:[],version:"0.10.0",frontMatter:{title:"Troubleshooting",keywords:["hudi","troubleshooting"],last_modified_at:"2021-08-18T19:59:57.000Z"},sidebar:"version-0.10.0/docs",previous:{title:"Metrics",permalink:"/docs/0.10.0/metrics"},next:{title:"Cloud Storage",permalink:"/docs/0.10.0/cloud"}},s=[{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Missing records",id:"missing-records",children:[],level:3},{value:"Duplicates",id:"duplicates",children:[],level:3},{value:"Spark failures",id:"spark-ui",children:[],level:3}],level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Section below generally aids in debugging Hudi failures. Off the bat, the following metadata is added to every record to help triage  issues easily using standard Hadoop SQL engines (Hive/PrestoDB/Spark)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_hoodie_record_key")," - Treated as a primary key within each DFS partition, basis of all updates/inserts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_hoodie_commit_time")," - Last commit that touched this record"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_hoodie_file_name")," - Actual file name containing the record (super useful to triage duplicates)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_hoodie_partition_path")," - Path from basePath that identifies the partition containing this record")),(0,o.kt)("p",null,"For performance related issues, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/Tuning+Guide"},"tuning guide")),(0,o.kt)("h3",{id:"missing-records"},"Missing records"),(0,o.kt)("p",null,"Please check if there were any write errors using the admin commands above, during the window at which the record could have been written.\nIf you do find errors, then the record was not actually written by Hudi, but handed back to the application to decide what to do with it."),(0,o.kt)("h3",{id:"duplicates"},"Duplicates"),(0,o.kt)("p",null,"First of all, please confirm if you do indeed have duplicates ",(0,o.kt)("strong",{parentName:"p"},"AFTER")," ensuring the query is accessing the Hudi table ",(0,o.kt)("a",{parentName:"p",href:"/docs/querying_data"},"properly")," ."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If confirmed, please use the metadata fields above, to identify the physical files & partition files containing the records ."),(0,o.kt)("li",{parentName:"ul"},"If duplicates span files across partitionpath, then this means your application is generating different partitionPaths for same recordKey, Please fix your app"),(0,o.kt)("li",{parentName:"ul"},"if duplicates span multiple files within the same partitionpath, please engage with mailing list. This should not happen. You can use the ",(0,o.kt)("inlineCode",{parentName:"li"},"records deduplicate")," command to fix your data.")),(0,o.kt)("h3",{id:"spark-ui"},"Spark failures"),(0,o.kt)("p",null,"Typical upsert() DAG looks like below. Note that Hudi client also caches intermediate RDDs to intelligently profile workload and size files and spark parallelism.\nAlso Spark UI shows sortByKey twice due to the probe job also being shown, nonetheless its just a single sort."),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:i(77102).Z,alt:"hudi_upsert_dag.png"})),(0,o.kt)("p",null,"At a high level, there are two steps"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Index Lookup to identify files to be changed")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Job 1 : Triggers the input data read, converts to HoodieRecord object and then stops at obtaining a spread of input records to target partition paths"),(0,o.kt)("li",{parentName:"ul"},"Job 2 : Load the set of file names which we need check against"),(0,o.kt)("li",{parentName:"ul"},"Job 3  & 4 : Actual lookup after smart sizing of spark join parallelism, by joining RDDs in 1 & 2 above"),(0,o.kt)("li",{parentName:"ul"},"Job 5 : Have a tagged RDD of recordKeys with locations")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Performing the actual writing of data")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Job 6 : Lazy join of incoming records against recordKey, location to provide a final set of HoodieRecord which now contain the information about which file/partitionpath they are found at (or null if insert). Then also profile the workload again to determine sizing of files"),(0,o.kt)("li",{parentName:"ul"},"Job 7 : Actual writing of data (update + insert + insert turned to updates to maintain file size)")),(0,o.kt)("p",null,"Depending on the exception source (Hudi/Spark), the above knowledge of the DAG can be used to pinpoint the actual issue. The most often encountered failures result from YARN/DFS temporary failures.\nIn the future, a more sophisticated debug/management UI would be added to the project, that can help automate some of this debugging."))}d.isMDXComponent=!0},77102:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/hudi_upsert_dag-3b2d81de8560fad7af112e40a2f8c437.png"}}]);