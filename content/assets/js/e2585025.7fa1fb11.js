"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[45072],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=i,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},60918:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={version:"0.5.0",title:"Quick-Start Guide",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,s={unversionedId:"quick-start-guide",id:"version-0.5.0/quick-start-guide",title:"Quick-Start Guide",description:"This guide provides a quick peek at Hudi's capabilities using spark-shell. Using Spark datasources, we will walk through",source:"@site/versioned_docs/version-0.5.0/quick-start-guide.md",sourceDirName:".",slug:"/quick-start-guide",permalink:"/docs/0.5.0/quick-start-guide",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.0/quick-start-guide.md",tags:[],version:"0.5.0",frontMatter:{version:"0.5.0",title:"Quick-Start Guide",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.5.0/docs",next:{title:"Use Cases",permalink:"/docs/0.5.0/use_cases"}},p=[{value:"Setup spark-shell",id:"setup-spark-shell",children:[],level:2},{value:"Insert data",id:"insert-data",children:[],level:2},{value:"Query data",id:"query-data",children:[],level:2},{value:"Update data",id:"update-data",children:[],level:2},{value:"Incremental query",id:"incremental-query",children:[],level:2},{value:"Point in time query",id:"point-in-time-query",children:[],level:2},{value:"Where to go from here?",id:"where-to-go-from-here",children:[],level:2}],l={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide provides a quick peek at Hudi's capabilities using spark-shell. Using Spark datasources, we will walk through\ncode snippets that allows you to insert and update a Hudi dataset of default storage type:\n",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts#copy-on-write-storage"},"Copy on Write"),".\nAfter each write operation we will also show how to read the data both snapshot and incrementally."),(0,i.kt)("h2",{id:"setup-spark-shell"},"Setup spark-shell"),(0,i.kt)("p",null,"Hudi works with Spark-2.x versions. You can follow instructions ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/downloads"},"here")," for setting up spark.\nFrom the extracted directory run spark-shell with Hudi as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"bin/spark-shell --packages org.apache.hudi:hudi-spark-bundle:0.5.0-incubating \\\n    --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n")),(0,i.kt)("p",null,"Setup table name, base path and a data generator to generate records for this guide."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nval tableName = "hudi_cow_table"\nval basePath = "file:///tmp/hudi_cow_table"\nval dataGen = new DataGenerator\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L50"},"DataGenerator"),"\ncan generate sample inserts and updates based on the the sample trip schema ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L57"},"here"),"\n{: .notice--info}"),(0,i.kt)("h2",{id:"insert-data"},"Insert data"),(0,i.kt)("p",null,"Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi dataset as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("org.apache.hudi").\n    options(getQuickstartWriteConfigs).\n    option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n    option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n    option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n    option(TABLE_NAME, tableName).\n    mode(Overwrite).\n    save(basePath);\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mode(Overwrite)")," overwrites and recreates the dataset if it already exists.\nYou can check the data generated under ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/hudi_cow_table/<region>/<country>/<city>/"),". We provided a record key\n(",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," in ",(0,i.kt)("a",{parentName:"p",href:"#sample-schema"},"schema"),"), partition field (",(0,i.kt)("inlineCode",{parentName:"p"},"region/county/city"),") and combine logic (",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," in\n",(0,i.kt)("a",{parentName:"p",href:"#sample-schema"},"schema"),") to ensure trip records are unique within each partition. For more info, refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=113709185#FAQ-HowdoImodelthedatastoredinHudi"},"Modeling data stored in Hudi"),"\nand for info on ways to ingest data into Hudi, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing_data"},"Writing Hudi Datasets"),".\nHere we are using the default write operation : ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert"),". If you have a workload without updates, you can also issue\n",(0,i.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bulk_insert")," operations which could be faster. To know more, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing_data#write-operations"},"Write operations"),"\n{: .notice--info}"),(0,i.kt)("h2",{id:"query-data"},"Query data"),(0,i.kt)("p",null,"Load the data files into a DataFrame."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val roViewDF = spark.\n    read.\n    format("org.apache.hudi").\n    load(basePath + "/*/*/*/*")\nroViewDF.createOrReplaceTempView("hudi_ro_table")\nspark.sql("select fare, begin_lon, begin_lat, ts from  hudi_ro_table where fare > 20.0").show()\nspark.sql("select _hoodie_commit_time, _hoodie_record_key, _hoodie_partition_path, rider, driver, fare from  hudi_ro_table").show()\n')),(0,i.kt)("p",null,"This query provides a read optimized view of the ingested data. Since our partition path (",(0,i.kt)("inlineCode",{parentName:"p"},"region/country/city"),") is 3 levels nested\nfrom base path we ve used ",(0,i.kt)("inlineCode",{parentName:"p"},'load(basePath + "/*/*/*/*")'),".\nRefer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts#storage-types--views"},"Storage Types and Views")," for more info on all storage types and views supported.\n{: .notice--info}"),(0,i.kt)("h2",{id:"update-data"},"Update data"),(0,i.kt)("p",null,"This is similar to inserting new data. Generate updates to existing trips using the data generator, load into a DataFrame\nand write DataFrame into the hudi dataset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val updates = convertToStringList(dataGen.generateUpdates(10))\nval df = spark.read.json(spark.sparkContext.parallelize(updates, 2));\ndf.write.format("org.apache.hudi").\n    options(getQuickstartWriteConfigs).\n    option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n    option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n    option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n    option(TABLE_NAME, tableName).\n    mode(Append).\n    save(basePath);\n')),(0,i.kt)("p",null,"Notice that the save mode is now ",(0,i.kt)("inlineCode",{parentName:"p"},"Append"),". In general, always use append mode unless you are trying to create the dataset for the first time.\n",(0,i.kt)("a",{parentName:"p",href:"#query-data"},"Querying")," the data again will now show updated trips. Each write operation generates a new ",(0,i.kt)("a",{parentName:"p",href:"http://hudi.incubator.apache.org/concepts"},"commit"),"\ndenoted by the timestamp. Look for changes in ",(0,i.kt)("inlineCode",{parentName:"p"},"_hoodie_commit_time"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"driver")," fields for the same ",(0,i.kt)("inlineCode",{parentName:"p"},"_hoodie_record_key"),"s in previous commit.\n{: .notice--info}"),(0,i.kt)("h2",{id:"incremental-query"},"Incremental query"),(0,i.kt)("p",null,"Hudi also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's incremental view and providing a begin time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case). "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// reload data\nspark.\n    read.\n    format("org.apache.hudi").\n    load(basePath + "/*/*/*/*").\n    createOrReplaceTempView("hudi_ro_table")\n\nval commits = spark.sql("select distinct(_hoodie_commit_time) as commitTime from  hudi_ro_table order by commitTime").map(k => k.getString(0)).take(50)\nval beginTime = commits(commits.length - 2) // commit time we are interested in\n\n// incrementally query data\nval incViewDF = spark.\n    read.\n    format("org.apache.hudi").\n    option(VIEW_TYPE_OPT_KEY, VIEW_TYPE_INCREMENTAL_OPT_VAL).\n    option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n    load(basePath);\nincViewDF.registerTempTable("hudi_incr_table")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_incr_table where fare > 20.0").show()\n')),(0,i.kt)("p",null,"This will give all changes that happened after the beginTime commit with the filter of fare > 20.0. The unique thing about this\nfeature is that it now lets you author streaming pipelines on batch data.\n{: .notice--info}"),(0,i.kt)("h2",{id:"point-in-time-query"},"Point in time query"),(0,i.kt)("p",null,'Lets look at how to query data as of a specific time. The specific time can be represented by pointing endTime to a\nspecific commit time and beginTime to "000" (denoting earliest possible commit time). '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val beginTime = "000" // Represents all commits > this time.\nval endTime = commits(commits.length - 2) // commit time we are interested in\n\n//incrementally query data\nval incViewDF = spark.read.format("org.apache.hudi").\n    option(VIEW_TYPE_OPT_KEY, VIEW_TYPE_INCREMENTAL_OPT_VAL).\n    option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n    option(END_INSTANTTIME_OPT_KEY, endTime).\n    load(basePath);\nincViewDF.registerTempTable("hudi_incr_table")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_incr_table where fare > 20.0").show()\n')),(0,i.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,i.kt)("p",null,"You can also do the quickstart by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi#building-apache-hudi-from-source"},"building hudi yourself"),",\nand using ",(0,i.kt)("inlineCode",{parentName:"p"},"--jars <path to hudi_code>/packaging/hudi-spark-bundle/target/hudi-spark-bundle-*.*.*-SNAPSHOT.jar")," in the spark-shell command above\ninstead of ",(0,i.kt)("inlineCode",{parentName:"p"},"--packages org.apache.hudi:hudi-spark-bundle:0.5.0-incubating")),(0,i.kt)("p",null,"Also, we used Spark here to show case the capabilities of Hudi. However, Hudi can support multiple storage types/views and\nHudi datasets can be queried from query engines like Hive, Spark, Presto and much more. We have put together a\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=VhNgUsxdrD0"},"demo video")," that show cases all of this on a docker based setup with all\ndependent systems running locally. We recommend you replicate the same setup and run the demo yourself, by following\nsteps ",(0,i.kt)("a",{parentName:"p",href:"/docs/docker_demo"},"here")," to get a taste for it. Also, if you are looking for ways to migrate your existing data\nto Hudi, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/migration_guide"},"migration guide"),"."))}d.isMDXComponent=!0}}]);