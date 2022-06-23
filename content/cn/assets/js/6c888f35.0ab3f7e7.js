"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[4076],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),y=o,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9288:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Encryption",keywords:["hudi","security"],summary:"This section offers an overview of encryption feature in Hudi",toc:!0,last_modified_at:new Date("2022-02-14T19:59:57.000Z")},i=void 0,s={unversionedId:"encryption",id:"version-0.11.1/encryption",title:"Encryption",description:"Since Hudi 0.11.0, Spark 3.2 support has been added and accompanying that, Parquet 1.12 has been included, which brings encryption feature to Hudi. In this section, we will show a guide on how to enable encryption in Hudi tables.",source:"@site/versioned_docs/version-0.11.1/encryption.md",sourceDirName:".",slug:"/encryption",permalink:"/cn/docs/encryption",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.1/encryption.md",tags:[],version:"0.11.1",frontMatter:{title:"Encryption",keywords:["hudi","security"],summary:"This section offers an overview of encryption feature in Hudi",toc:!0,last_modified_at:"2022-02-14T19:59:57.000Z"},sidebar:"docs",previous:{title:"Metrics",permalink:"/cn/docs/metrics"},next:{title:"Troubleshooting",permalink:"/cn/docs/troubleshooting"}},p=[{value:"Encrypt Copy-on-Write tables",id:"encrypt-copy-on-write-tables",children:[{value:"Note",id:"note",children:[],level:3}],level:2}],c={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Since Hudi 0.11.0, Spark 3.2 support has been added and accompanying that, Parquet 1.12 has been included, which brings encryption feature to Hudi. In this section, we will show a guide on how to enable encryption in Hudi tables."),(0,o.kt)("h2",{id:"encrypt-copy-on-write-tables"},"Encrypt Copy-on-Write tables"),(0,o.kt)("p",null,"First, make sure Hudi Spark 3.2 bundle jar is used."),(0,o.kt)("p",null,"Then, set the following Parquet configurations to make data written to Hudi COW tables encrypted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Activate Parquet encryption, driven by Hadoop properties\njsc.hadoopConfiguration().set("parquet.crypto.factory.class", "org.apache.parquet.crypto.keytools.PropertiesDrivenCryptoFactory")\n// Explicit master keys (base64 encoded) - required only for mock InMemoryKMS\njsc.hadoopConfiguration().set("parquet.encryption.kms.client.class" , "org.apache.parquet.crypto.keytools.mocks.InMemoryKMS")\njsc.hadoopConfiguration().set("parquet.encryption.key.list", "k1:AAECAwQFBgcICQoLDA0ODw==, k2:AAECAAECAAECAAECAAECAA==")\n// Write encrypted dataframe files. \n// Column "rider" will be protected with master key "key2".\n// Parquet file footers will be protected with master key "key1"\njsc.hadoopConfiguration().set("parquet.encryption.footer.key", "k1")\njsc.hadoopConfiguration().set("parquet.encryption.column.keys", "k2:rider")\n    \nspark.read().format("org.apache.hudi").load("path").show();\n')),(0,o.kt)("p",null,"Here is an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'JavaSparkContext jsc = new JavaSparkContext(spark.sparkContext());\njsc.hadoopConfiguration().set("parquet.crypto.factory.class", "org.apache.parquet.crypto.keytools.PropertiesDrivenCryptoFactory");\njsc.hadoopConfiguration().set("parquet.encryption.kms.client.class" , "org.apache.parquet.crypto.keytools.mocks.InMemoryKMS");\njsc.hadoopConfiguration().set("parquet.encryption.footer.key", "k1");\njsc.hadoopConfiguration().set("parquet.encryption.column.keys", "k2:rider");\njsc.hadoopConfiguration().set("parquet.encryption.key.list", "k1:AAECAwQFBgcICQoLDA0ODw==, k2:AAECAAECAAECAAECAAECAA==");\n\nQuickstartUtils.DataGenerator dataGen = new QuickstartUtils.DataGenerator();\nList<String> inserts = convertToStringList(dataGen.generateInserts(3));\nDataset<Row> inputDF1 = spark.read().json(jsc.parallelize(inserts, 1));\ninputDF1.write().format("org.apache.hudi")\n    .option("hoodie.table.name", "encryption_table")\n    .option("hoodie.upsert.shuffle.parallelism","2")\n    .option("hoodie.insert.shuffle.parallelism","2")\n    .option("hoodie.delete.shuffle.parallelism","2")\n    .option("hoodie.bulkinsert.shuffle.parallelism","2")\n    .mode(SaveMode.Overwrite)\n    .save("path");\n\nspark.read().format("org.apache.hudi").load("path").select("rider").show();\n')),(0,o.kt)("p",null,"Reading the table works if configured correctly"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+---------+\n|rider    |\n+---------+\n|rider-213|\n|rider-213|\n|rider-213|\n+---------+\n")),(0,o.kt)("p",null,"Read more from ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-data-sources-parquet.html#columnar-encryption"},"Spark docs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/parquet-format/blob/master/Encryption.md"},"Parquet docs"),"."),(0,o.kt)("h3",{id:"note"},"Note"),(0,o.kt)("p",null,"This feature is currently only available for COW tables due to only Parquet base files present there."))}l.isMDXComponent=!0}}]);