"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[4385],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?n.createElement(h,o(o({ref:a},d),{},{components:t})):n.createElement(h,o({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},23094:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const i={version:"0.7.0",title:"Quick-Start Guide",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},o=void 0,p={unversionedId:"quick-start-guide",id:"version-0.7.0/quick-start-guide",title:"Quick-Start Guide",description:"\u672c\u6307\u5357\u901a\u8fc7\u4f7f\u7528spark-shell\u7b80\u8981\u4ecb\u7ecd\u4e86Hudi\u529f\u80fd\u3002\u4f7f\u7528Spark\u6570\u636e\u6e90\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4ee3\u7801\u6bb5\u5c55\u793a\u5982\u4f55\u63d2\u5165\u548c\u66f4\u65b0Hudi\u7684\u9ed8\u8ba4\u5b58\u50a8\u7c7b\u578b\u6570\u636e\u96c6\uff1a",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.7.0/quick-start-guide.md",sourceDirName:".",slug:"/quick-start-guide",permalink:"/cn/docs/0.7.0/quick-start-guide",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.7.0/quick-start-guide.md",tags:[],version:"0.7.0",frontMatter:{version:"0.7.0",title:"Quick-Start Guide",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"},sidebar:"version-0.7.0/docs",previous:{title:"\u6982\u5ff5",permalink:"/cn/docs/0.7.0/overview"},next:{title:"\u4f7f\u7528\u6848\u4f8b",permalink:"/cn/docs/0.7.0/use_cases"}},s=[{value:"\u8bbe\u7f6espark-shell",id:"\u8bbe\u7f6espark-shell",children:[],level:2},{value:"\u63d2\u5165\u6570\u636e",id:"inserts",children:[],level:2},{value:"\u67e5\u8be2\u6570\u636e",id:"query",children:[],level:2},{value:"\u66f4\u65b0\u6570\u636e",id:"updates",children:[],level:2},{value:"\u589e\u91cf\u67e5\u8be2",id:"\u589e\u91cf\u67e5\u8be2",children:[],level:2},{value:"\u7279\u5b9a\u65f6\u95f4\u70b9\u67e5\u8be2",id:"\u7279\u5b9a\u65f6\u95f4\u70b9\u67e5\u8be2",children:[],level:2},{value:"\u5220\u9664\u6570\u636e",id:"deletes",children:[],level:2},{value:"\u8bbe\u7f6espark-shell",id:"\u8bbe\u7f6espark-shell-1",children:[],level:2},{value:"\u63d2\u5165\u6570\u636e",id:"inserts",children:[],level:2},{value:"\u67e5\u8be2\u6570\u636e",id:"query",children:[],level:2},{value:"\u66f4\u65b0\u6570\u636e",id:"updates",children:[],level:2},{value:"\u589e\u91cf\u67e5\u8be2",id:"\u589e\u91cf\u67e5\u8be2-1",children:[],level:2},{value:"\u7279\u5b9a\u65f6\u95f4\u70b9\u67e5\u8be2",id:"\u7279\u5b9a\u65f6\u95f4\u70b9\u67e5\u8be2-1",children:[],level:2},{value:"\u5220\u9664\u6570\u636e",id:"deletes",children:[],level:2},{value:"\u4ece\u8fd9\u5f00\u59cb\u4e0b\u4e00\u6b65\uff1f",id:"\u4ece\u8fd9\u5f00\u59cb\u4e0b\u4e00\u6b65",children:[],level:2}],l={toc:s};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6307\u5357\u901a\u8fc7\u4f7f\u7528spark-shell\u7b80\u8981\u4ecb\u7ecd\u4e86Hudi\u529f\u80fd\u3002\u4f7f\u7528Spark\u6570\u636e\u6e90\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4ee3\u7801\u6bb5\u5c55\u793a\u5982\u4f55\u63d2\u5165\u548c\u66f4\u65b0Hudi\u7684\u9ed8\u8ba4\u5b58\u50a8\u7c7b\u578b\u6570\u636e\u96c6\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/concepts#copy-on-write-storage"},"\u5199\u65f6\u590d\u5236"),"\u3002\u6bcf\u6b21\u5199\u64cd\u4f5c\u4e4b\u540e\uff0c\u6211\u4eec\u8fd8\u5c06\u5c55\u793a\u5982\u4f55\u8bfb\u53d6\u5feb\u7167\u548c\u589e\u91cf\u6570\u636e\u3002 "),(0,r.kt)("h2",{id:"\u8bbe\u7f6espark-shell"},"\u8bbe\u7f6espark-shell"),(0,r.kt)("p",null,"Hudi\u9002\u7528\u4e8eSpark-2.x\u7248\u672c\u3002\u60a8\u53ef\u4ee5\u6309\u7167",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/downloads"},"\u6b64\u5904"),"\u7684\u8bf4\u660e\u8bbe\u7f6espark\u3002\n\u5728\u63d0\u53d6\u7684\u76ee\u5f55\u4e2d\uff0c\u4f7f\u7528spark-shell\u8fd0\u884cHudi\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"bin/spark-shell --packages org.apache.hudi:hudi-spark-bundle:0.5.0-incubating --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u8868\u540d\u3001\u57fa\u672c\u8def\u5f84\u548c\u6570\u636e\u751f\u6210\u5668\u6765\u4e3a\u672c\u6307\u5357\u751f\u6210\u8bb0\u5f55\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nval tableName = "hudi_cow_table"\nval basePath = "file:///tmp/hudi_cow_table"\nval dataGen = new DataGenerator\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L50"},"\u6570\u636e\u751f\u6210\u5668"),"\n\u53ef\u4ee5\u57fa\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L57"},"\u884c\u7a0b\u6837\u672c\u6a21\u5f0f"),"\n\u751f\u6210\u63d2\u5165\u548c\u66f4\u65b0\u7684\u6837\u672c\u3002"),(0,r.kt)("h2",{id:"inserts"},"\u63d2\u5165\u6570\u636e"),(0,r.kt)("p",null,"\u751f\u6210\u4e00\u4e9b\u65b0\u7684\u884c\u7a0b\u6837\u672c\uff0c\u5c06\u5176\u52a0\u8f7d\u5230DataFrame\u4e2d\uff0c\u7136\u540e\u5c06DataFrame\u5199\u5165Hudi\u6570\u636e\u96c6\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("org.apache.hudi").\n    options(getQuickstartWriteConfigs).\n    option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n    option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n    option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n    option(TABLE_NAME, tableName).\n    mode(Overwrite).\n    save(basePath);\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mode(Overwrite)"),"\u8986\u76d6\u5e76\u91cd\u65b0\u521b\u5efa\u6570\u636e\u96c6(\u5982\u679c\u5df2\u7ecf\u5b58\u5728)\u3002\n\u60a8\u53ef\u4ee5\u68c0\u67e5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/hudi_cow_table/<region>/<country>/<city>/"),"\u4e0b\u751f\u6210\u7684\u6570\u636e\u3002\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8bb0\u5f55\u952e\n(",(0,r.kt)("a",{parentName:"p",href:"#sample-schema"},"schema"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"uuid"),")\uff0c\u5206\u533a\u5b57\u6bb5(",(0,r.kt)("inlineCode",{parentName:"p"},"region/country/city"),"\uff09\u548c\u7ec4\u5408\u903b\u8f91(",(0,r.kt)("a",{parentName:"p",href:"#sample-schema"},"schema"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ts"),")\n\u4ee5\u786e\u4fdd\u884c\u7a0b\u8bb0\u5f55\u5728\u6bcf\u4e2a\u5206\u533a\u4e2d\u90fd\u662f\u552f\u4e00\u7684\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605\n",(0,r.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=113709185#FAQ-HowdoImodelthedatastoredinHudi"},"\u5bf9Hudi\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u5efa\u6a21"),"\uff0c\n\u6709\u5173\u5c06\u6570\u636e\u63d0\u53d6\u5230Hudi\u4e2d\u7684\u65b9\u6cd5\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/writing_data"},"\u5199\u5165Hudi\u6570\u636e\u96c6"),"\u3002\n\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u9ed8\u8ba4\u7684\u5199\u64cd\u4f5c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"\u63d2\u5165\u66f4\u65b0"),"\u3002 \u5982\u679c\u60a8\u7684\u5de5\u4f5c\u8d1f\u8f7d\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"\u66f4\u65b0"),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u66f4\u5feb\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u63d2\u5165"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"\u6279\u91cf\u63d2\u5165"),"\u64cd\u4f5c\u3002\n\u60f3\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/writing_data#write-operations"},"\u5199\u64cd\u4f5c")),(0,r.kt)("h2",{id:"query"},"\u67e5\u8be2\u6570\u636e"),(0,r.kt)("p",null,"\u5c06\u6570\u636e\u6587\u4ef6\u52a0\u8f7d\u5230DataFrame\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val roViewDF = spark.\n    read.\n    format("org.apache.hudi").\n    load(basePath + "/*/*/*/*")\n    //load(basePath) \u5982\u679c\u4f7f\u7528 "/partitionKey=partitionValue" \u6587\u4ef6\u5939\u547d\u540d\u683c\u5f0f\uff0cSpark\u5c06\u81ea\u52a8\u8bc6\u522b\u5206\u533a\u4fe1\u606f\n\nroViewDF.registerTempTable("hudi_ro_table")\nspark.sql("select fare, begin_lon, begin_lat, ts from  hudi_ro_table where fare > 20.0").show()\nspark.sql("select _hoodie_commit_time, _hoodie_record_key, _hoodie_partition_path, rider, driver, fare from  hudi_ro_table").show()\n')),(0,r.kt)("p",null,"\u8be5\u67e5\u8be2\u63d0\u4f9b\u5df2\u63d0\u53d6\u6570\u636e\u7684\u8bfb\u53d6\u4f18\u5316\u89c6\u56fe\u3002\u7531\u4e8e\u6211\u4eec\u7684\u5206\u533a\u8def\u5f84(",(0,r.kt)("inlineCode",{parentName:"p"},"region/country/city"),")\u662f\u5d4c\u5957\u76843\u4e2a\u7ea7\u522b\n\u4ece\u57fa\u672c\u8def\u5f84\u5f00\u59cb\uff0c\u6211\u4eec\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},'load(basePath + "/*/*/*/*")'),"\u3002\n\u6709\u5173\u652f\u6301\u7684\u6240\u6709\u5b58\u50a8\u7c7b\u578b\u548c\u89c6\u56fe\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/concepts#storage-types--views"},"\u5b58\u50a8\u7c7b\u578b\u548c\u89c6\u56fe"),"\u3002"),(0,r.kt)("h2",{id:"updates"},"\u66f4\u65b0\u6570\u636e"),(0,r.kt)("p",null,"\u8fd9\u7c7b\u4f3c\u4e8e\u63d2\u5165\u65b0\u6570\u636e\u3002\u4f7f\u7528\u6570\u636e\u751f\u6210\u5668\u751f\u6210\u5bf9\u73b0\u6709\u884c\u7a0b\u7684\u66f4\u65b0\uff0c\u52a0\u8f7d\u5230DataFrame\u4e2d\u5e76\u5c06DataFrame\u5199\u5165hudi\u6570\u636e\u96c6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val updates = convertToStringList(dataGen.generateUpdates(10))\nval df = spark.read.json(spark.sparkContext.parallelize(updates, 2));\ndf.write.format("org.apache.hudi").\n    options(getQuickstartWriteConfigs).\n    option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n    option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n    option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n    option(TABLE_NAME, tableName).\n    mode(Append).\n    save(basePath);\n')),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u4fdd\u5b58\u6a21\u5f0f\u73b0\u5728\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u8ffd\u52a0"),"\u3002\u901a\u5e38\uff0c\u9664\u975e\u60a8\u662f\u7b2c\u4e00\u6b21\u5c1d\u8bd5\u521b\u5efa\u6570\u636e\u96c6\uff0c\u5426\u5219\u8bf7\u59cb\u7ec8\u4f7f\u7528\u8ffd\u52a0\u6a21\u5f0f\u3002\n",(0,r.kt)("a",{parentName:"p",href:"#query"},"\u67e5\u8be2"),"\u73b0\u5728\u518d\u6b21\u67e5\u8be2\u6570\u636e\u5c06\u663e\u793a\u66f4\u65b0\u7684\u884c\u7a0b\u3002\u6bcf\u4e2a\u5199\u64cd\u4f5c\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u7531\u65f6\u95f4\u6233\u8868\u793a\u7684",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/concepts"},"commit"),"\n\u3002\u5728\u4e4b\u524d\u63d0\u4ea4\u7684\u76f8\u540c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"_hoodie_record_key"),"\u4e2d\u5bfb\u627e",(0,r.kt)("inlineCode",{parentName:"p"},"_hoodie_commit_time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"driver"),"\u5b57\u6bb5\u53d8\u66f4\u3002"),(0,r.kt)("h2",{id:"\u589e\u91cf\u67e5\u8be2"},"\u589e\u91cf\u67e5\u8be2"),(0,r.kt)("p",null,"Hudi\u8fd8\u63d0\u4f9b\u4e86\u83b7\u53d6\u7ed9\u5b9a\u63d0\u4ea4\u65f6\u95f4\u6233\u4ee5\u6765\u5df2\u66f4\u6539\u7684\u8bb0\u5f55\u6d41\u7684\u529f\u80fd\u3002\n\u8fd9\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528Hudi\u7684\u589e\u91cf\u89c6\u56fe\u5e76\u63d0\u4f9b\u6240\u9700\u66f4\u6539\u7684\u5f00\u59cb\u65f6\u95f4\u6765\u5b9e\u73b0\u3002\n\u5982\u679c\u6211\u4eec\u9700\u8981\u7ed9\u5b9a\u63d0\u4ea4\u4e4b\u540e\u7684\u6240\u6709\u66f4\u6539(\u8fd9\u662f\u5e38\u89c1\u7684\u60c5\u51b5)\uff0c\u5219\u65e0\u9700\u6307\u5b9a\u7ed3\u675f\u65f6\u95f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'// reload data\nspark.\n    read.\n    format("org.apache.hudi").\n    load(basePath + "/*/*/*/*").\n    createOrReplaceTempView("hudi_ro_table")\n\nval commits = spark.sql("select distinct(_hoodie_commit_time) as commitTime from  hudi_ro_table order by commitTime").map(k => k.getString(0)).take(50)\nval beginTime = commits(commits.length - 2) // commit time we are interested in\n\n// \u589e\u91cf\u67e5\u8be2\u6570\u636e\nval incViewDF = spark.\n    read.\n    format("org.apache.hudi").\n    option(VIEW_TYPE_OPT_KEY, VIEW_TYPE_INCREMENTAL_OPT_VAL).\n    option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n    load(basePath);\nincViewDF.registerTempTable("hudi_incr_table")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_incr_table where fare > 20.0").show()\n')),(0,r.kt)("p",null,"\u8fd9\u5c06\u63d0\u4f9b\u5728\u5f00\u59cb\u65f6\u95f4\u63d0\u4ea4\u4e4b\u540e\u53d1\u751f\u7684\u6240\u6709\u66f4\u6539\uff0c\u5176\u4e2d\u5305\u542b\u7968\u4ef7\u5927\u4e8e20.0\u7684\u8fc7\u6ee4\u5668\u3002\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u72ec\u7279\u4e4b\u5904\u5728\u4e8e\uff0c\u5b83\u73b0\u5728\u4f7f\u60a8\u53ef\u4ee5\u5728\u6279\u91cf\u6570\u636e\u4e0a\u521b\u4f5c\u6d41\u5f0f\u7ba1\u9053\u3002"),(0,r.kt)("h2",{id:"\u7279\u5b9a\u65f6\u95f4\u70b9\u67e5\u8be2"},"\u7279\u5b9a\u65f6\u95f4\u70b9\u67e5\u8be2"),(0,r.kt)("p",null,'\u8ba9\u6211\u4eec\u770b\u4e00\u4e0b\u5982\u4f55\u67e5\u8be2\u7279\u5b9a\u65f6\u95f4\u7684\u6570\u636e\u3002\u53ef\u4ee5\u901a\u8fc7\u5c06\u7ed3\u675f\u65f6\u95f4\u6307\u5411\u7279\u5b9a\u7684\u63d0\u4ea4\u65f6\u95f4\uff0c\u5c06\u5f00\u59cb\u65f6\u95f4\u6307\u5411"000"(\u8868\u793a\u6700\u65e9\u7684\u63d0\u4ea4\u65f6\u95f4)\u6765\u8868\u793a\u7279\u5b9a\u65f6\u95f4\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val beginTime = "000" // Represents all commits > this time.\nval endTime = commits(commits.length - 2) // commit time we are interested in\n\n// \u589e\u91cf\u67e5\u8be2\u6570\u636e\nval incViewDF = spark.read.format("org.apache.hudi").\n    option(VIEW_TYPE_OPT_KEY, VIEW_TYPE_INCREMENTAL_OPT_VAL).\n    option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n    option(END_INSTANTTIME_OPT_KEY, endTime).\n    load(basePath);\nincViewDF.registerTempTable("hudi_incr_table")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_incr_table where fare > 20.0").show()\n')),(0,r.kt)("h2",{id:"deletes"},"\u5220\u9664\u6570\u636e"),(0,r.kt)("p",null,"\u5220\u9664\u4f20\u5165\u7684 HoodieKeys \u7684\u8bb0\u5f55\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\n// \u83b7\u53d6\u8bb0\u5f55\u603b\u6570\nspark.sql("select uuid, partitionpath from hudi_trips_snapshot").count()\n// \u62ff\u5230\u4e24\u6761\u5c06\u8981\u5220\u9664\u7684\u6570\u636e\nval ds = spark.sql("select uuid, partitionpath from hudi_trips_snapshot").limit(2)\n\n// \u6267\u884c\u5220\u9664\nval deletes = dataGen.generateDeletes(ds.collectAsList())\nval df = spark.read.json(spark.sparkContext.parallelize(deletes, 2))\n\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"delete").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n\n// \u5411\u4e4b\u524d\u4e00\u6837\u8fd0\u884c\u67e5\u8be2\nval roAfterDeleteViewDF = spark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*")\n\nroAfterDeleteViewDF.registerTempTable("hudi_trips_snapshot")\n// \u5e94\u8fd4\u56de (total - 2) \u6761\u8bb0\u5f55\nspark.sql("select uuid, partitionpath from hudi_trips_snapshot").count()\n')),(0,r.kt)("p",null,"\u6ce8\u610f: \u5220\u9664\u64cd\u4f5c\u53ea\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Append")," \u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"\u8bf7\u67e5\u9605\u5199\u6570\u636e\u9875\u7684",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/writing_data#deletes"},"\u5220\u9664\u90e8\u5206")," \u67e5\u770b\u66f4\u591a\u4fe1\u606f."),(0,r.kt)("h1",{id:"pyspark-\u793a\u4f8b"},"Pyspark \u793a\u4f8b"),(0,r.kt)("h2",{id:"\u8bbe\u7f6espark-shell-1"},"\u8bbe\u7f6espark-shell"),(0,r.kt)("p",null,"Hudi\u9002\u7528\u4e8eSpark-2.x\u7248\u672c\u3002\u60a8\u53ef\u4ee5\u6309\u7167",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/downloads"},"\u6b64\u5904"),"\u7684\u8bf4\u660e\u8bbe\u7f6espark\u3002\n\u5728\u63d0\u53d6\u7684\u76ee\u5f55\u4e2d\uff0c\u4f7f\u7528spark-shell\u8fd0\u884cHudi\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# pyspark\nexport PYSPARK_PYTHON=$(which python3)\nspark-2.4.4-bin-hadoop2.7/bin/pyspark \\\n  --packages org.apache.hudi:hudi-spark-bundle_2.11:0.6.0,org.apache.spark:spark-avro_2.11:2.4.4 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n")),(0,r.kt)("div",{className:"notice--info"},(0,r.kt)("h4",null,"\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879: "),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u9700\u8981\u901a\u8fc7 --packages \u6307\u5b9a spark-avro, \u56e0\u4e3a\u9ed8\u8ba4\u60c5\u51b5\u4e0b spark-shell \u4e0d\u5305\u542b\u8be5\u6a21\u5757"),(0,r.kt)("li",null,"spark-avro \u548c spark \u7684\u7248\u672c\u5fc5\u987b\u5339\u914d (\u4e0a\u9762\u4e24\u4e2a\u6211\u4eec\u90fd\u4f7f\u7528\u4e862.4.4)"),(0,r.kt)("li",null,"\u6211\u4eec\u4f7f\u7528\u4e86\u57fa\u4e8e scala 2.11 \u6784\u5efa\u7684 hudi-spark-bundle, \u56e0\u4e3a\u4f7f\u7528\u7684 spark-avro \u4e5f\u662f\u57fa\u4e8e scala 2.11\u7684. \u5982\u679c\u4f7f\u7528\u4e86 spark-avro_2.12, \u76f8\u5e94\u7684, \u9700\u8981\u4f7f\u7528 hudi-spark-bundle_2.12. "))),(0,r.kt)("p",null,"\u8bbe\u7f6e\u8868\u540d\u3001\u57fa\u672c\u8def\u5f84\u548c\u6570\u636e\u751f\u6210\u5668\u6765\u4e3a\u672c\u6307\u5357\u751f\u6210\u8bb0\u5f55\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# pyspark\ntableName = "hudi_trips_cow"\nbasePath = "file:///tmp/hudi_trips_cow"\ndataGen = sc._jvm.org.apache.hudi.QuickstartUtils.DataGenerator()\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L50"},"\u6570\u636e\u751f\u6210\u5668"),"\n\u53ef\u4ee5\u57fa\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L57"},"\u884c\u7a0b\u6837\u672c\u6a21\u5f0f"),"\n\u751f\u6210\u63d2\u5165\u548c\u66f4\u65b0\u7684\u6837\u672c\u3002\n{: .notice--info}"),(0,r.kt)("h2",{id:"inserts"},"\u63d2\u5165\u6570\u636e"),(0,r.kt)("p",null,"\u751f\u6210\u4e00\u4e9b\u65b0\u7684\u884c\u7a0b\u6837\u672c\uff0c\u5c06\u5176\u52a0\u8f7d\u5230DataFrame\u4e2d\uff0c\u7136\u540e\u5c06DataFrame\u5199\u5165Hudi\u6570\u636e\u96c6\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# pyspark\ninserts = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(dataGen.generateInserts(10))\ndf = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n\nhudi_options = {\n  'hoodie.table.name': tableName,\n  'hoodie.datasource.write.recordkey.field': 'uuid',\n  'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n  'hoodie.datasource.write.table.name': tableName,\n  'hoodie.datasource.write.operation': 'insert',\n  'hoodie.datasource.write.precombine.field': 'ts',\n  'hoodie.upsert.shuffle.parallelism': 2, \n  'hoodie.insert.shuffle.parallelism': 2\n}\n\ndf.write.format(\"hudi\"). \\\n  options(**hudi_options). \\\n  mode(\"overwrite\"). \\\n  save(basePath)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mode(Overwrite)")," \u8986\u76d6\u5e76\u91cd\u65b0\u521b\u5efa\u6570\u636e\u96c6(\u5982\u679c\u5df2\u7ecf\u5b58\u5728)\u3002\n\u60a8\u53ef\u4ee5\u68c0\u67e5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/hudi_cow_table/<region>/<country>/<city>/"),"\u4e0b\u751f\u6210\u7684\u6570\u636e\u3002\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8bb0\u5f55\u952e\n(",(0,r.kt)("a",{parentName:"p",href:"#sample-schema"},"schema"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"uuid"),")\uff0c\u5206\u533a\u5b57\u6bb5(",(0,r.kt)("inlineCode",{parentName:"p"},"region/country/city"),"\uff09\u548c\u7ec4\u5408\u903b\u8f91(",(0,r.kt)("a",{parentName:"p",href:"#sample-schema"},"schema"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ts"),")\n\u4ee5\u786e\u4fdd\u884c\u7a0b\u8bb0\u5f55\u5728\u6bcf\u4e2a\u5206\u533a\u4e2d\u90fd\u662f\u552f\u4e00\u7684\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605\n",(0,r.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=113709185#FAQ-HowdoImodelthedatastoredinHudi"},"\u5bf9Hudi\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u5efa\u6a21"),"\uff0c\n\u6709\u5173\u5c06\u6570\u636e\u63d0\u53d6\u5230Hudi\u4e2d\u7684\u65b9\u6cd5\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/writing_data"},"\u5199\u5165Hudi\u6570\u636e\u96c6"),"\u3002\n\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u9ed8\u8ba4\u7684\u5199\u64cd\u4f5c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"\u63d2\u5165\u66f4\u65b0"),"\u3002 \u5982\u679c\u60a8\u7684\u5de5\u4f5c\u8d1f\u8f7d\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"\u66f4\u65b0"),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u66f4\u5feb\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u63d2\u5165"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"\u6279\u91cf\u63d2\u5165"),"\u64cd\u4f5c\u3002\n\u60f3\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/writing_data#write-operations"},"\u5199\u64cd\u4f5c"),"\n{: .notice--info}"),(0,r.kt)("h2",{id:"query"},"\u67e5\u8be2\u6570\u636e"),(0,r.kt)("p",null,"\u5c06\u6570\u636e\u6587\u4ef6\u52a0\u8f7d\u5230DataFrame\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# pyspark\ntripsSnapshotDF = spark. \\\n  read. \\\n  format("hudi"). \\\n  load(basePath + "/*/*/*/*")\n# load(basePath) use "/partitionKey=partitionValue" folder structure for Spark auto partition discovery\n\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select fare, begin_lon, begin_lat, ts from  hudi_trips_snapshot where fare > 20.0").show()\nspark.sql("select _hoodie_commit_time, _hoodie_record_key, _hoodie_partition_path, rider, driver, fare from  hudi_trips_snapshot").show()\n')),(0,r.kt)("p",null,"\u8be5\u67e5\u8be2\u63d0\u4f9b\u5df2\u63d0\u53d6\u6570\u636e\u7684\u8bfb\u53d6\u4f18\u5316\u89c6\u56fe\u3002\u7531\u4e8e\u6211\u4eec\u7684\u5206\u533a\u8def\u5f84(",(0,r.kt)("inlineCode",{parentName:"p"},"region/country/city"),")\u662f\u5d4c\u5957\u76843\u4e2a\u7ea7\u522b\n\u4ece\u57fa\u672c\u8def\u5f84\u5f00\u59cb\uff0c\u6211\u4eec\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},'load(basePath + "/*/*/*/*")'),"\u3002\n\u6709\u5173\u652f\u6301\u7684\u6240\u6709\u5b58\u50a8\u7c7b\u578b\u548c\u89c6\u56fe\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/concepts#storage-types--views"},"\u5b58\u50a8\u7c7b\u578b\u548c\u89c6\u56fe"),"\u3002\n{: .notice--info}"),(0,r.kt)("h2",{id:"updates"},"\u66f4\u65b0\u6570\u636e"),(0,r.kt)("p",null,"\u8fd9\u7c7b\u4f3c\u4e8e\u63d2\u5165\u65b0\u6570\u636e\u3002\u4f7f\u7528\u6570\u636e\u751f\u6210\u5668\u751f\u6210\u5bf9\u73b0\u6709\u884c\u7a0b\u7684\u66f4\u65b0\uff0c\u52a0\u8f7d\u5230DataFrame\u4e2d\u5e76\u5c06DataFrame\u5199\u5165hudi\u6570\u636e\u96c6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# pyspark\nupdates = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(dataGen.generateUpdates(10))\ndf = spark.read.json(spark.sparkContext.parallelize(updates, 2))\ndf.write.format("hudi"). \\\n  options(**hudi_options). \\\n  mode("append"). \\\n  save(basePath)\n')),(0,r.kt)("p",null,"Notice that the save mode is now ",(0,r.kt)("inlineCode",{parentName:"p"},"Append"),". In general, always use append mode unless you are trying to create the table for the first time.\n",(0,r.kt)("a",{parentName:"p",href:"#query-data"},"Querying")," the data again will now show updated trips. Each write operation generates a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts"},"commit"),"\ndenoted by the timestamp. Look for changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"_hoodie_commit_time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"driver")," fields for the same ",(0,r.kt)("inlineCode",{parentName:"p"},"_hoodie_record_key"),"s in previous commit. "),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u4fdd\u5b58\u6a21\u5f0f\u73b0\u5728\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u8ffd\u52a0"),"\u3002\u901a\u5e38\uff0c\u9664\u975e\u60a8\u662f\u7b2c\u4e00\u6b21\u5c1d\u8bd5\u521b\u5efa\u6570\u636e\u96c6\uff0c\u5426\u5219\u8bf7\u59cb\u7ec8\u4f7f\u7528\u8ffd\u52a0\u6a21\u5f0f\u3002\n",(0,r.kt)("a",{parentName:"p",href:"#query"},"\u67e5\u8be2"),"\u73b0\u5728\u518d\u6b21\u67e5\u8be2\u6570\u636e\u5c06\u663e\u793a\u66f4\u65b0\u7684\u884c\u7a0b\u3002\u6bcf\u4e2a\u5199\u64cd\u4f5c\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u7531\u65f6\u95f4\u6233\u8868\u793a\u7684",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/concepts"},"commit"),"\n\u3002\u5728\u4e4b\u524d\u63d0\u4ea4\u7684\u76f8\u540c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"_hoodie_record_key"),"\u4e2d\u5bfb\u627e",(0,r.kt)("inlineCode",{parentName:"p"},"_hoodie_commit_time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"driver"),"\u5b57\u6bb5\u53d8\u66f4\u3002\n{: .notice--info}"),(0,r.kt)("h2",{id:"\u589e\u91cf\u67e5\u8be2-1"},"\u589e\u91cf\u67e5\u8be2"),(0,r.kt)("p",null,"Hudi\u8fd8\u63d0\u4f9b\u4e86\u83b7\u53d6\u7ed9\u5b9a\u63d0\u4ea4\u65f6\u95f4\u6233\u4ee5\u6765\u5df2\u66f4\u6539\u7684\u8bb0\u5f55\u6d41\u7684\u529f\u80fd\u3002\n\u8fd9\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528Hudi\u7684\u589e\u91cf\u89c6\u56fe\u5e76\u63d0\u4f9b\u6240\u9700\u66f4\u6539\u7684\u5f00\u59cb\u65f6\u95f4\u6765\u5b9e\u73b0\u3002\n\u5982\u679c\u6211\u4eec\u9700\u8981\u7ed9\u5b9a\u63d0\u4ea4\u4e4b\u540e\u7684\u6240\u6709\u66f4\u6539(\u8fd9\u662f\u5e38\u89c1\u7684\u60c5\u51b5)\uff0c\u5219\u65e0\u9700\u6307\u5b9a\u7ed3\u675f\u65f6\u95f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# pyspark\n# \u52a0\u8f7d\u6570\u636e\nspark. \\\n  read. \\\n  format("hudi"). \\\n  load(basePath + "/*/*/*/*"). \\\n  createOrReplaceTempView("hudi_trips_snapshot")\n\ncommits = list(map(lambda row: row[0], spark.sql("select distinct(_hoodie_commit_time) as commitTime from  hudi_trips_snapshot order by commitTime").limit(50).collect()))\nbeginTime = commits[len(commits) - 2] # commit time we are interested in\n\n# \u589e\u91cf\u7684\u67e5\u8be2\u6570\u636e\nincremental_read_options = {\n  \'hoodie.datasource.query.type\': \'incremental\',\n  \'hoodie.datasource.read.begin.instanttime\': beginTime,\n}\n\ntripsIncrementalDF = spark.read.format("hudi"). \\\n  options(**incremental_read_options). \\\n  load(basePath)\ntripsIncrementalDF.createOrReplaceTempView("hudi_trips_incremental")\n\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n')),(0,r.kt)("p",null,"\u8fd9\u5c06\u63d0\u4f9b\u5728\u5f00\u59cb\u65f6\u95f4\u63d0\u4ea4\u4e4b\u540e\u53d1\u751f\u7684\u6240\u6709\u66f4\u6539\uff0c\u5176\u4e2d\u5305\u542b\u7968\u4ef7\u5927\u4e8e20.0\u7684\u8fc7\u6ee4\u5668\u3002\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u72ec\u7279\u4e4b\u5904\u5728\u4e8e\uff0c\u5b83\u73b0\u5728\u4f7f\u60a8\u53ef\u4ee5\u5728\u6279\u91cf\u6570\u636e\u4e0a\u521b\u4f5c\u6d41\u5f0f\u7ba1\u9053\u3002\n{: .notice--info}"),(0,r.kt)("h2",{id:"\u7279\u5b9a\u65f6\u95f4\u70b9\u67e5\u8be2-1"},"\u7279\u5b9a\u65f6\u95f4\u70b9\u67e5\u8be2"),(0,r.kt)("p",null,'\u8ba9\u6211\u4eec\u770b\u4e00\u4e0b\u5982\u4f55\u67e5\u8be2\u7279\u5b9a\u65f6\u95f4\u7684\u6570\u636e\u3002\u53ef\u4ee5\u901a\u8fc7\u5c06\u7ed3\u675f\u65f6\u95f4\u6307\u5411\u7279\u5b9a\u7684\u63d0\u4ea4\u65f6\u95f4\uff0c\u5c06\u5f00\u59cb\u65f6\u95f4\u6307\u5411"000"(\u8868\u793a\u6700\u65e9\u7684\u63d0\u4ea4\u65f6\u95f4)\u6765\u8868\u793a\u7279\u5b9a\u65f6\u95f4\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# pyspark\nbeginTime = \"000\" # \u4ee3\u8868\u6240\u6709\u5927\u4e8e\u8be5\u65f6\u95f4\u7684 commits.\nendTime = commits[len(commits) - 2]\n\n# \u7279\u5b9a\u65f6\u95f4\u67e5\u8be2\npoint_in_time_read_options = {\n  'hoodie.datasource.query.type': 'incremental',\n  'hoodie.datasource.read.end.instanttime': endTime,\n  'hoodie.datasource.read.begin.instanttime': beginTime\n}\n\ntripsPointInTimeDF = spark.read.format(\"hudi\"). \\\n  options(**point_in_time_read_options). \\\n  load(basePath)\n\ntripsPointInTimeDF.createOrReplaceTempView(\"hudi_trips_point_in_time\")\nspark.sql(\"select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from hudi_trips_point_in_time where fare > 20.0\").show()\n")),(0,r.kt)("h2",{id:"deletes"},"\u5220\u9664\u6570\u636e"),(0,r.kt)("p",null,"\u5220\u9664\u4f20\u5165\u7684 HoodieKeys \u7684\u8bb0\u5f55\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f: \u5220\u9664\u64cd\u4f5c\u53ea\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Append")," \u6a21\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# pyspark\n# \u83b7\u53d6\u8bb0\u5f55\u603b\u6570\nspark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").count()\n# \u62ff\u5230\u4e24\u6761\u5c06\u88ab\u5220\u9664\u7684\u8bb0\u5f55\nds = spark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").limit(2)\n\n# \u6267\u884c\u5220\u9664\nhudi_delete_options = {\n  'hoodie.table.name': tableName,\n  'hoodie.datasource.write.recordkey.field': 'uuid',\n  'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n  'hoodie.datasource.write.table.name': tableName,\n  'hoodie.datasource.write.operation': 'delete',\n  'hoodie.datasource.write.precombine.field': 'ts',\n  'hoodie.upsert.shuffle.parallelism': 2, \n  'hoodie.insert.shuffle.parallelism': 2\n}\n\nfrom pyspark.sql.functions import lit\ndeletes = list(map(lambda row: (row[0], row[1]), ds.collect()))\ndf = spark.sparkContext.parallelize(deletes).toDF(['uuid', 'partitionpath']).withColumn('ts', lit(0.0))\ndf.write.format(\"hudi\"). \\\n  options(**hudi_delete_options). \\\n  mode(\"append\"). \\\n  save(basePath)\n\n# \u5411\u4e4b\u524d\u4e00\u6837\u8fd0\u884c\u67e5\u8be2\nroAfterDeleteViewDF = spark. \\\n  read. \\\n  format(\"hudi\"). \\\n  load(basePath + \"/*/*/*/*\") \nroAfterDeleteViewDF.registerTempTable(\"hudi_trips_snapshot\")\n# \u5e94\u8fd4\u56de (total - 2) \u6761\u8bb0\u5f55\nspark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").count()\n")),(0,r.kt)("p",null,"\u8bf7\u67e5\u9605\u5199\u6570\u636e\u9875\u7684",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/writing_data#deletes"},"\u5220\u9664\u90e8\u5206")," \u67e5\u770b\u66f4\u591a\u4fe1\u606f."),(0,r.kt)("h2",{id:"\u4ece\u8fd9\u5f00\u59cb\u4e0b\u4e00\u6b65"},"\u4ece\u8fd9\u5f00\u59cb\u4e0b\u4e00\u6b65\uff1f"),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi#building-apache-hudi-from-source"},"\u81ea\u5df1\u6784\u5efahudi"),"\u6765\u5feb\u901f\u5f00\u59cb\uff0c\n\u5e76\u5728spark-shell\u547d\u4ee4\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"--jars <path to hudi_code>/packaging/hudi-spark-bundle/target/hudi-spark-bundle-*.*.*-SNAPSHOT.jar"),"\uff0c\n\u800c\u4e0d\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"--packages org.apache.hudi:hudi-spark-bundle:0.5.0-incubating")),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528Spark\u6f14\u793a\u4e86Hudi\u7684\u529f\u80fd\u3002\u4f46\u662f\uff0cHudi\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u5b58\u50a8\u7c7b\u578b/\u89c6\u56fe\uff0c\u5e76\u4e14\u53ef\u4ee5\u4eceHive\uff0cSpark\uff0cPresto\u7b49\u67e5\u8be2\u5f15\u64ce\u4e2d\u67e5\u8be2Hudi\u6570\u636e\u96c6\u3002\n\u6211\u4eec\u5236\u4f5c\u4e86\u4e00\u4e2a\u57fa\u4e8eDocker\u8bbe\u7f6e\u3001\u6240\u6709\u4f9d\u8d56\u7cfb\u7edf\u90fd\u5728\u672c\u5730\u8fd0\u884c\u7684",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=VhNgUsxdrD0"},"\u6f14\u793a\u89c6\u9891"),"\uff0c\n\u6211\u4eec\u5efa\u8bae\u60a8\u590d\u5236\u76f8\u540c\u7684\u8bbe\u7f6e\u7136\u540e\u6309\u7167",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/docker_demo"},"\u8fd9\u91cc"),"\u7684\u6b65\u9aa4\u81ea\u5df1\u8fd0\u884c\u8fd9\u4e2a\u6f14\u793a\u3002\n\u53e6\u5916\uff0c\u5982\u679c\u60a8\u6b63\u5728\u5bfb\u627e\u5c06\u73b0\u6709\u6570\u636e\u8fc1\u79fb\u5230Hudi\u7684\u65b9\u6cd5\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/migration_guide"},"\u8fc1\u79fb\u6307\u5357"),"\u3002"))}d.isMDXComponent=!0}}]);