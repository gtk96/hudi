"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[87533],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,_=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(_,i(i({ref:e},d),{},{components:n})):a.createElement(_,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34294:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Schema Evolution",keywords:["hudi","incremental","batch","stream","processing","schema","evolution"],summary:"In this page, we will discuss schema evolution support in Hudi.",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},i=void 0,l={unversionedId:"schema_evolution",id:"version-0.10.1/schema_evolution",title:"Schema Evolution",description:"Schema evolution is a very important aspect of data management.",source:"@site/versioned_docs/version-0.10.1/schema_evolution.md",sourceDirName:".",slug:"/schema_evolution",permalink:"/cn/docs/0.10.1/schema_evolution",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/schema_evolution.md",tags:[],version:"0.10.1",frontMatter:{title:"Schema Evolution",keywords:["hudi","incremental","batch","stream","processing","schema","evolution"],summary:"In this page, we will discuss schema evolution support in Hudi.",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.10.1/docs",previous:{title:"Write Operations",permalink:"/cn/docs/0.10.1/write_operations"},next:{title:"Key Generation",permalink:"/cn/docs/0.10.1/key_generation"}},p=[],s={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Schema evolution is a very important aspect of data management.\nHudi supports common schema evolution scenarios, such as adding a nullable field or promoting a datatype of a field, out-of-the-box.\nFurthermore, the evolved schema is queryable across engines, such as Presto, Hive and Spark SQL.\nThe following table presents a summary of the types of schema changes compatible with different Hudi table types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Schema Change"),(0,r.kt)("th",{parentName:"tr",align:null},"COW"),(0,r.kt)("th",{parentName:"tr",align:null},"MOR"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a new nullable column at root level at the end"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Yes")," means that a write with evolved schema succeeds and a read following the write succeeds to read entire dataset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a new nullable column to inner struct (at the end)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a new complex type field with default (map and array)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a new nullable column and change the ordering of fields"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Write succeeds but read fails if the write with evolved schema updated only some of the base files but not all. Currently, Hudi does not maintain a schema registry with history of changes across base files. Nevertheless, if the upsert touched all base files then the read will succeed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a custom nullable Hudi meta column, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"_hoodie_meta_col")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Promote datatype from ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"long")," for a field at root level"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"For other types, Hudi supports promotion as specified in ",(0,r.kt)("a",{parentName:"td",href:"http://avro.apache.org/docs/current/spec#Schema+Resolution"},"Avro schema resolution"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Promote datatype from ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"long")," for a nested field"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Promote datatype from ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"long")," for a complex type (value of map or array)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a new non-nullable column at root level at the end"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"In case of MOR table with Spark data source, write succeeds but read fails. As a ",(0,r.kt)("strong",{parentName:"td"},"workaround"),", you can make the field nullable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a new non-nullable column to inner struct (at the end)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Change datatype from ",(0,r.kt)("inlineCode",{parentName:"td"},"long")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," for a nested field"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Change datatype from ",(0,r.kt)("inlineCode",{parentName:"td"},"long")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," for a complex type (value of map or array)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Let us walk through an example to demonstrate the schema evolution support in Hudi.\nIn the below example, we are going to add a new string field and change the datatype of a field from int to long."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Welcome to\n    ____              __\n    / __/__  ___ _____/ /__\n    _\\ \\/ _ \\/ _ `/ __/  \'_/\n    /___/ .__/\\_,_/_/ /_/\\_\\   version 3.1.2\n    /_/\n\n    Using Scala version 2.12.10 (OpenJDK 64-Bit Server VM, Java 1.8.0_292)\n    Type in expressions to have them evaluated.\n    Type :help for more information.\n\nscala> import org.apache.hudi.QuickstartUtils._\nimport org.apache.hudi.QuickstartUtils._\n\nscala> import scala.collection.JavaConversions._\nimport scala.collection.JavaConversions._\n\nscala> import org.apache.spark.sql.SaveMode._\nimport org.apache.spark.sql.SaveMode._\n\nscala> import org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceReadOptions._\n\nscala> import org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\n\nscala> import org.apache.hudi.config.HoodieWriteConfig._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nscala> import org.apache.spark.sql.types._\nimport org.apache.spark.sql.types._\n\nscala> import org.apache.spark.sql.Row\nimport org.apache.spark.sql.Row\n\nscala> val tableName = "hudi_trips_cow"\n    tableName: String = hudi_trips_cow\nscala> val basePath = "file:///tmp/hudi_trips_cow"\n    basePath: String = file:///tmp/hudi_trips_cow\nscala> val schema = StructType( Array(\n    | StructField("rowId", StringType,true),\n    | StructField("partitionId", StringType,true),\n    | StructField("preComb", LongType,true),\n    | StructField("name", StringType,true),\n    | StructField("versionId", StringType,true),\n    | StructField("intToLong", IntegerType,true)\n    | ))\n    schema: org.apache.spark.sql.types.StructType = StructType(StructField(rowId,StringType,true), StructField(partitionId,StringType,true), StructField(preComb,LongType,true), StructField(name,StringType,true), StructField(versionId,StringType,true), StructField(intToLong,IntegerType,true))\n    \nscala> val data1 = Seq(Row("row_1", "part_0", 0L, "bob", "v_0", 0),\n    |                Row("row_2", "part_0", 0L, "john", "v_0", 0),\n    |                Row("row_3", "part_0", 0L, "tom", "v_0", 0))\n    data1: Seq[org.apache.spark.sql.Row] = List([row_1,part_0,0,bob,v_0,0], [row_2,part_0,0,john,v_0,0], [row_3,part_0,0,tom,v_0,0])\n\nscala> var dfFromData1 = spark.createDataFrame(data1, schema)\nscala> dfFromData1.write.format("hudi").\n    |   options(getQuickstartWriteConfigs).\n    |   option(PRECOMBINE_FIELD_OPT_KEY.key, "preComb").\n    |   option(RECORDKEY_FIELD_OPT_KEY.key, "rowId").\n    |   option(PARTITIONPATH_FIELD_OPT_KEY.key, "partitionId").\n    |   option("hoodie.index.type","SIMPLE").\n    |   option(TABLE_NAME.key, tableName).\n    |   mode(Overwrite).\n    |   save(basePath)\n\nscala> var tripsSnapshotDF1 = spark.read.format("hudi").load(basePath + "/*/*")\n    tripsSnapshotDF1: org.apache.spark.sql.DataFrame = [_hoodie_commit_time: string, _hoodie_commit_seqno: string ... 9 more fields]\n\nscala> tripsSnapshotDF1.createOrReplaceTempView("hudi_trips_snapshot")\n\nscala> spark.sql("desc hudi_trips_snapshot").show()\n    +--------------------+---------+-------+\n    |            col_name|data_type|comment|\n    +--------------------+---------+-------+\n    | _hoodie_commit_time|   string|   null|\n    |_hoodie_commit_seqno|   string|   null|\n    |  _hoodie_record_key|   string|   null|\n    |_hoodie_partition...|   string|   null|\n    |   _hoodie_file_name|   string|   null|\n    |               rowId|   string|   null|\n    |         partitionId|   string|   null|\n    |             preComb|   bigint|   null|\n    |                name|   string|   null|\n    |           versionId|   string|   null|\n    |           intToLong|      int|   null|\n    +--------------------+---------+-------+\n    \nscala> spark.sql("select rowId, partitionId, preComb, name, versionId, intToLong from hudi_trips_snapshot").show()\n    +-----+-----------+-------+----+---------+---------+\n    |rowId|partitionId|preComb|name|versionId|intToLong|\n    +-----+-----------+-------+----+---------+---------+\n    |row_3|     part_0|      0| tom|      v_0|        0|\n    |row_2|     part_0|      0|john|      v_0|        0|\n    |row_1|     part_0|      0| bob|      v_0|        0|\n    +-----+-----------+-------+----+---------+---------+\n\n// In the new schema, we are going to add a String field and \n// change the datatype `intToLong` field from  int to long.\nscala> val newSchema = StructType( Array(\n    | StructField("rowId", StringType,true),\n    | StructField("partitionId", StringType,true),\n    | StructField("preComb", LongType,true),\n    | StructField("name", StringType,true),\n    | StructField("versionId", StringType,true),\n    | StructField("intToLong", LongType,true),\n    | StructField("newField", StringType,true)\n    | ))\n    newSchema: org.apache.spark.sql.types.StructType = StructType(StructField(rowId,StringType,true), StructField(partitionId,StringType,true), StructField(preComb,LongType,true), StructField(name,StringType,true), StructField(versionId,StringType,true), StructField(intToLong,LongType,true), StructField(newField,StringType,true))\n\nscala> val data2 = Seq(Row("row_2", "part_0", 5L, "john", "v_3", 3L, "newField_1"),\n    |                Row("row_5", "part_0", 5L, "maroon", "v_2", 2L, "newField_1"),\n    |                Row("row_9", "part_0", 5L, "michael", "v_2", 2L, "newField_1"))\n    data2: Seq[org.apache.spark.sql.Row] = List([row_2,part_0,5,john,v_3,3,newField_1], [row_5,part_0,5,maroon,v_2,2,newField_1], [row_9,part_0,5,michael,v_2,2,newField_1])\n\nscala> var dfFromData2 = spark.createDataFrame(data2, newSchema)\nscala> dfFromData2.write.format("hudi").\n    |   options(getQuickstartWriteConfigs).\n    |   option(PRECOMBINE_FIELD_OPT_KEY.key, "preComb").\n    |   option(RECORDKEY_FIELD_OPT_KEY.key, "rowId").\n    |   option(PARTITIONPATH_FIELD_OPT_KEY.key, "partitionId").\n    |   option("hoodie.index.type","SIMPLE").\n    |   option(TABLE_NAME.key, tableName).\n    |   mode(Append).\n    |   save(basePath)\n\nscala> var tripsSnapshotDF2 = spark.read.format("hudi").load(basePath + "/*/*")\n    tripsSnapshotDF2: org.apache.spark.sql.DataFrame = [_hoodie_commit_time: string, _hoodie_commit_seqno: string ... 10 more fields]\n\nscala> tripsSnapshotDF2.createOrReplaceTempView("hudi_trips_snapshot")\n\nscala> spark.sql("desc hudi_trips_snapshot").show()\n    +--------------------+---------+-------+\n    |            col_name|data_type|comment|\n    +--------------------+---------+-------+\n    | _hoodie_commit_time|   string|   null|\n    |_hoodie_commit_seqno|   string|   null|\n    |  _hoodie_record_key|   string|   null|\n    |_hoodie_partition...|   string|   null|\n    |   _hoodie_file_name|   string|   null|\n    |               rowId|   string|   null|\n    |         partitionId|   string|   null|\n    |             preComb|   bigint|   null|\n    |                name|   string|   null|\n    |           versionId|   string|   null|\n    |           intToLong|   bigint|   null|\n    |            newField|   string|   null|\n    +--------------------+---------+-------+\n\n\nscala> spark.sql("select rowId, partitionId, preComb, name, versionId, intToLong, newField from hudi_trips_snapshot").show()\n    +-----+-----------+-------+-------+---------+---------+----------+\n    |rowId|partitionId|preComb|   name|versionId|intToLong|  newField|\n    +-----+-----------+-------+-------+---------+---------+----------+\n    |row_3|     part_0|      0|    tom|      v_0|        0|      null|\n    |row_2|     part_0|      5|   john|      v_3|        3|newField_1|\n    |row_1|     part_0|      0|    bob|      v_0|        0|      null|\n    |row_5|     part_0|      5| maroon|      v_2|        2|newField_1|\n    |row_9|     part_0|      5|michael|      v_2|        2|newField_1|\n    +-----+-----------+-------+-------+---------+---------+----------+\n\n')))}d.isMDXComponent=!0}}]);