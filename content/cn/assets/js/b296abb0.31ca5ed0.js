"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[61844],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),l=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,u=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=l(a),h=n,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||o;return a?r.createElement(m,i(i({ref:e},s),{},{components:a})):r.createElement(m,i({ref:e},s))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},27524:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Export Hudi datasets as a copy or as different formats",excerpt:"Learn how to copy or export HUDI dataset in various formats.",author:"rxu",category:"blog"},i=void 0,p={permalink:"/cn/blog/2020/03/22/exporting-hudi-datasets",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-03-22-exporting-hudi-datasets.md",source:"@site/blog/2020-03-22-exporting-hudi-datasets.md",title:"Export Hudi datasets as a copy or as different formats",description:"Copy to Hudi dataset",date:"2020-03-22T00:00:00.000Z",formattedDate:"March 22, 2020",tags:[],readingTime:1.695,truncated:!0,authors:[{name:"rxu"}],prevItem:{title:"Apache Hudi Support on Apache Zeppelin",permalink:"/cn/blog/2020/04/27/apache-hudi-apache-zepplin"},nextItem:{title:"Change Capture Using AWS Database Migration Service and Hudi",permalink:"/cn/blog/2020/01/20/change-capture-using-aws"}},u={authorsImageUrls:[void 0]},l=[{value:"Copy to Hudi dataset",id:"copy-to-hudi-dataset",children:[],level:3},{value:"Export to json or parquet dataset",id:"export-to-json-or-parquet-dataset",children:[],level:3},{value:"Re-partitioning",id:"re-partitioning",children:[{value:"<code>--output-partition-field</code>",id:"--output-partition-field",children:[],level:4},{value:"<code>--output-partitioner</code>",id:"--output-partitioner",children:[],level:4}],level:3}],s={toc:l};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"copy-to-hudi-dataset"},"Copy to Hudi dataset"),(0,n.kt)("p",null,"Similar to the existing  ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieSnapshotCopier"),", the Exporter scans the source dataset and then makes a copy of it to the target output path."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\\n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/hudi/" \\\n  --output-format "hudi"\n')),(0,n.kt)("h3",{id:"export-to-json-or-parquet-dataset"},"Export to json or parquet dataset"),(0,n.kt)("p",null,'The Exporter can also convert the source dataset into other formats. Currently only "json" and "parquet" are supported.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\\n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/json/" \\\n  --output-format "json"  # or "parquet"\n')),(0,n.kt)("h3",{id:"re-partitioning"},"Re-partitioning"),(0,n.kt)("p",null,"When export to a different format, the Exporter takes parameters to do some custom re-partitioning. By default, if neither of the 2 parameters below is given, the output dataset will have no partition."),(0,n.kt)("h4",{id:"--output-partition-field"},(0,n.kt)("inlineCode",{parentName:"h4"},"--output-partition-field")),(0,n.kt)("p",null,"This parameter uses an existing non-metadata field as the output partitions. All  ",(0,n.kt)("inlineCode",{parentName:"p"},"_hoodie_*"),"  metadata field will be stripped during export."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\  \n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/json/" \\\n  --output-format "json" \\\n  --output-partition-field "symbol"  # assume the source dataset contains a field `symbol`\n')),(0,n.kt)("p",null,"The output directory will look like this"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"`_SUCCESS symbol=AMRS symbol=AYX symbol=CDMO symbol=CRC symbol=DRNA ...`\n")),(0,n.kt)("h4",{id:"--output-partitioner"},(0,n.kt)("inlineCode",{parentName:"h4"},"--output-partitioner")),(0,n.kt)("p",null,"This parameter takes in a fully-qualified name of a class that implements  ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieSnapshotExporter.Partitioner"),". This parameter takes higher precedence than  ",(0,n.kt)("inlineCode",{parentName:"p"},"--output-partition-field"),", which will be ignored if this is provided."),(0,n.kt)("p",null,"An example implementation is shown below:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"MyPartitioner.java")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'package com.foo.bar;\npublic class MyPartitioner implements HoodieSnapshotExporter.Partitioner {\n\n  private static final String PARTITION_NAME = "date";\n \n  @Override\n  public DataFrameWriter<Row> partition(Dataset<Row> source) {\n    // use the current hoodie partition path as the output partition\n    return source\n        .withColumnRenamed(HoodieRecord.PARTITION_PATH_METADATA_FIELD, PARTITION_NAME)\n        .repartition(new Column(PARTITION_NAME))\n        .write()\n        .partitionBy(PARTITION_NAME);\n  }\n}\n')),(0,n.kt)("p",null,"After putting this class in ",(0,n.kt)("inlineCode",{parentName:"p"},"my-custom.jar"),", which is then placed on the job classpath, the submit command will look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar,my-custom.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\\n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/json/" \\\n  --output-format "json" \\\n  --output-partitioner "com.foo.bar.MyPartitioner"\n')))}d.isMDXComponent=!0}}]);