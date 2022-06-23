"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[51130],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=m(a),u=r,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(g,o(o({ref:e},s),{},{components:a})):n.createElement(g,o({ref:e},s))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16452:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Schema Evolution",keywords:["hudi","incremental","batch","stream","processing","schema","evolution"],summary:"In this page, we will discuss schema evolution support in Hudi.",toc:!0,last_modified_at:new Date("2022-04-27T19:59:57.000Z")},o=void 0,i={unversionedId:"schema_evolution",id:"version-0.11.1/schema_evolution",title:"Schema Evolution",description:"Schema evolution allows users to easily change the current schema of a Hudi table to adapt to the data that is changing over time.",source:"@site/versioned_docs/version-0.11.1/schema_evolution.md",sourceDirName:".",slug:"/schema_evolution",permalink:"/cn/docs/schema_evolution",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.1/schema_evolution.md",tags:[],version:"0.11.1",frontMatter:{title:"Schema Evolution",keywords:["hudi","incremental","batch","stream","processing","schema","evolution"],summary:"In this page, we will discuss schema evolution support in Hudi.",toc:!0,last_modified_at:"2022-04-27T19:59:57.000Z"},sidebar:"docs",previous:{title:"Write Operations",permalink:"/cn/docs/write_operations"},next:{title:"Key Generation",permalink:"/cn/docs/key_generation"}},p=[{value:"Scenarios",id:"scenarios",children:[],level:3},{value:"SparkSQL Schema Evolution and Syntax Description",id:"sparksql-schema-evolution-and-syntax-description",children:[{value:"Adding Columns",id:"adding-columns",children:[],level:3},{value:"Altering Columns",id:"altering-columns",children:[],level:3},{value:"Deleting Columns",id:"deleting-columns",children:[],level:3},{value:"Changing Column Name",id:"changing-column-name",children:[],level:3},{value:"Modifying Table Properties",id:"modifying-table-properties",children:[],level:3},{value:"Changing a Table Name",id:"changing-a-table-name",children:[],level:3}],level:2},{value:"Schema Evolution Pre-0.11.0",id:"schema-evolution-pre-0110",children:[],level:2}],m={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Schema evolution allows users to easily change the current schema of a Hudi table to adapt to the data that is changing over time.\nAs of 0.11.0 release, Spark SQL(spark3.1.x and spark3.2.1) DDL support for Schema  evolution has been added and is experimental."),(0,r.kt)("h3",{id:"scenarios"},"Scenarios"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Columns (including nested columns) can be added, deleted, modified, and moved."),(0,r.kt)("li",{parentName:"ol"},"Partition columns cannot be evolved."),(0,r.kt)("li",{parentName:"ol"},"You cannot add, delete, or perform operations on nested columns of the Array type.")),(0,r.kt)("h2",{id:"sparksql-schema-evolution-and-syntax-description"},"SparkSQL Schema Evolution and Syntax Description"),(0,r.kt)("p",null,"Before using schema evolution, pls set ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.sql.extensions"),". For spark3.2.1 ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.sql.catalog.spark_catalog")," also need to be set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Spark SQL for spark 3.1.x\nspark-sql --packages org.apache.hudi:hudi-spark3.1.2-bundle_2.12:0.11.1,org.apache.spark:spark-avro_2.12:3.1.2 \\\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer' \\\n--conf 'spark.sql.extensions=org.apache.spark.sql.hudi.HoodieSparkSessionExtension'\n\n# Spark SQL for spark 3.2.1\nspark-sql --packages org.apache.hudi:hudi-spark3-bundle_2.12:0.11.1,org.apache.spark:spark-avro_2.12:3.2.1 \\\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer' \\\n--conf 'spark.sql.extensions=org.apache.spark.sql.hudi.HoodieSparkSessionExtension' \\\n--conf 'spark.sql.catalog.spark_catalog=org.apache.spark.sql.hudi.catalog.HoodieCatalog'\n\n")),(0,r.kt)("p",null,"After start spark-app,  pls exec ",(0,r.kt)("inlineCode",{parentName:"p"},"set schema.on.read.enable=true")," to enable schema evolution."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently, Schema evolution cannot disabled once being enabled."))),(0,r.kt)("h3",{id:"adding-columns"},"Adding Columns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- add columns\nALTER TABLE Table name ADD COLUMNS(col_spec[, col_spec ...])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameter Description")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tableName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Table name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"col_spec"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Column specifications, consisting of five fields, ",(0,r.kt)("em",{parentName:"td"},"col_name"),", ",(0,r.kt)("em",{parentName:"td"},"col_type"),", ",(0,r.kt)("em",{parentName:"td"},"nullable"),", ",(0,r.kt)("em",{parentName:"td"},"comment"),", and ",(0,r.kt)("em",{parentName:"td"},"col_position"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"col_name")," : name of the new column. It is mandatory.To add a sub-column to a nested column, specify the full name of the sub-column in this field."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To add sub-column col1 to a nested struct type column column users struct<name: string, age: int>, set this field to users.col1.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To add sub-column col1 to a nested map type column memeber map<string, struct<n: string, a: int>>, set this field to member.value.col1."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"col_type")," : type of the new column."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"nullable")," : whether the new column can be null. The value can be left empty. Now this field is not used in Hudi."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"comment")," : comment of the new column. The value can be left empty."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"col_position")," : position where the new column is added. The value can be ",(0,r.kt)("em",{parentName:"p"},"FIRST")," or ",(0,r.kt)("em",{parentName:"p"},"AFTER")," origin_col."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If it is set to ",(0,r.kt)("em",{parentName:"p"},"FIRST"),", the new column will be added to the first column of the table.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If it is set to ",(0,r.kt)("em",{parentName:"p"},"AFTER")," origin_col, the new column will be added after original column origin_col.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The value can be left empty. ",(0,r.kt)("em",{parentName:"p"},"FIRST")," can be used only when new sub-columns are added to nested columns. Do not use ",(0,r.kt)("em",{parentName:"p"},"FIRST")," in top-level columns. There are no restrictions about the usage of ",(0,r.kt)("em",{parentName:"p"},"AFTER"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"alter table h0 add columns(ext0 string);\nalter table h0 add columns(new_col int not null comment 'add new column' after col1);\nalter table complex_table add columns(col_struct.col_name string comment 'add new column to a struct col' after col_from_col_struct);\n")),(0,r.kt)("h3",{id:"altering-columns"},"Altering Columns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- alter table ... alter column\nALTER TABLE Table name ALTER [COLUMN] col_old_name TYPE column_type [COMMENT] col_comment[FIRST|AFTER] column_name\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameter Description")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tableName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Table name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"col_old_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the column to be altered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"column_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type of the target column.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"col_comment"),(0,r.kt)("td",{parentName:"tr",align:"left"},"col_comment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"column_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"New position to place the target column. For example, ",(0,r.kt)("em",{parentName:"td"},"AFTER")," ",(0,r.kt)("strong",{parentName:"td"},"column_name")," indicates that the target column is placed after ",(0,r.kt)("strong",{parentName:"td"},"column_name"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--- Changing the column type\nALTER TABLE table1 ALTER COLUMN a.b.c TYPE bigint\n\n--- Altering other attributes\nALTER TABLE table1 ALTER COLUMN a.b.c COMMENT 'new comment'\nALTER TABLE table1 ALTER COLUMN a.b.c FIRST\nALTER TABLE table1 ALTER COLUMN a.b.c AFTER x\nALTER TABLE table1 ALTER COLUMN a.b.c DROP NOT NULL\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"column type change")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Source\\Target"),(0,r.kt)("th",{parentName:"tr",align:null},"long"),(0,r.kt)("th",{parentName:"tr",align:null},"float"),(0,r.kt)("th",{parentName:"tr",align:null},"double"),(0,r.kt)("th",{parentName:"tr",align:null},"string"),(0,r.kt)("th",{parentName:"tr",align:null},"decimal"),(0,r.kt)("th",{parentName:"tr",align:null},"date"),(0,r.kt)("th",{parentName:"tr",align:null},"int"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N")))),(0,r.kt)("h3",{id:"deleting-columns"},"Deleting Columns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- alter table ... drop columns\nALTER TABLE tableName DROP COLUMN|COLUMNS cols\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 DROP COLUMN a.b.c\nALTER TABLE table1 DROP COLUMNS a.b.c, x, y\n")),(0,r.kt)("h3",{id:"changing-column-name"},"Changing Column Name"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- alter table ... rename column\nALTER TABLE tableName RENAME COLUMN old_columnName TO new_columnName\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 RENAME COLUMN a.b.c TO x\n")),(0,r.kt)("h3",{id:"modifying-table-properties"},"Modifying Table Properties"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- alter table ... set|unset\nALTER TABLE Table name SET|UNSET tblproperties\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table SET TBLPROPERTIES ('table_property' = 'property_value')\nALTER TABLE table UNSET TBLPROPERTIES [IF EXISTS] ('comment', 'key')\n")),(0,r.kt)("h3",{id:"changing-a-table-name"},"Changing a Table Name"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- alter table ... rename\nALTER TABLE tableName RENAME TO newTableName\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 RENAME TO table2\n")),(0,r.kt)("h2",{id:"schema-evolution-pre-0110"},"Schema Evolution Pre-0.11.0"),(0,r.kt)("p",null,"Schema evolution is a very important aspect of data management.\nHudi supports common schema evolution scenarios, such as adding a nullable field or promoting a datatype of a field, out-of-the-box.\nFurthermore, the evolved schema is queryable across engines, such as Presto, Hive and Spark SQL.\nThe following table presents a summary of the types of schema changes compatible with different Hudi table types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Schema Change"),(0,r.kt)("th",{parentName:"tr",align:"left"},"COW"),(0,r.kt)("th",{parentName:"tr",align:"left"},"MOR"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Add a new nullable column at root level at the end"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Yes")," means that a write with evolved schema succeeds and a read following the write succeeds to read entire dataset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Add a new nullable column to inner struct (at the end)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Add a new complex type field with default (map and array)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Add a new nullable column and change the ordering of fields"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Write succeeds but read fails if the write with evolved schema updated only some of the base files but not all. Currently, Hudi does not maintain a schema registry with history of changes across base files. Nevertheless, if the upsert touched all base files then the read will succeed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Add a custom nullable Hudi meta column, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"_hoodie_meta_col")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Promote datatype from ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"long")," for a field at root level"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For other types, Hudi supports promotion as specified in ",(0,r.kt)("a",{parentName:"td",href:"http://avro.apache.org/docs/current/spec#Schema+Resolution"},"Avro schema resolution"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Promote datatype from ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"long")," for a nested field"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Promote datatype from ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"long")," for a complex type (value of map or array)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Add a new non-nullable column at root level at the end"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"In case of MOR table with Spark data source, write succeeds but read fails. As a ",(0,r.kt)("strong",{parentName:"td"},"workaround"),", you can make the field nullable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Add a new non-nullable column to inner struct (at the end)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Change datatype from ",(0,r.kt)("inlineCode",{parentName:"td"},"long")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," for a nested field"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Change datatype from ",(0,r.kt)("inlineCode",{parentName:"td"},"long")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," for a complex type (value of map or array)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"Let us walk through an example to demonstrate the schema evolution support in Hudi.\nIn the below example, we are going to add a new string field and change the datatype of a field from int to long."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Welcome to\n    ____              __\n    / __/__  ___ _____/ /__\n    _\\ \\/ _ \\/ _ `/ __/  \'_/\n    /___/ .__/\\_,_/_/ /_/\\_\\   version 3.1.2\n    /_/\n\n    Using Scala version 2.12.10 (OpenJDK 64-Bit Server VM, Java 1.8.0_292)\n    Type in expressions to have them evaluated.\n    Type :help for more information.\n\nscala> import org.apache.hudi.QuickstartUtils._\nimport org.apache.hudi.QuickstartUtils._\n\nscala> import scala.collection.JavaConversions._\nimport scala.collection.JavaConversions._\n\nscala> import org.apache.spark.sql.SaveMode._\nimport org.apache.spark.sql.SaveMode._\n\nscala> import org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceReadOptions._\n\nscala> import org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\n\nscala> import org.apache.hudi.config.HoodieWriteConfig._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nscala> import org.apache.spark.sql.types._\nimport org.apache.spark.sql.types._\n\nscala> import org.apache.spark.sql.Row\nimport org.apache.spark.sql.Row\n\nscala> val tableName = "hudi_trips_cow"\n    tableName: String = hudi_trips_cow\nscala> val basePath = "file:///tmp/hudi_trips_cow"\n    basePath: String = file:///tmp/hudi_trips_cow\nscala> val schema = StructType( Array(\n    | StructField("rowId", StringType,true),\n    | StructField("partitionId", StringType,true),\n    | StructField("preComb", LongType,true),\n    | StructField("name", StringType,true),\n    | StructField("versionId", StringType,true),\n    | StructField("intToLong", IntegerType,true)\n    | ))\n    schema: org.apache.spark.sql.types.StructType = StructType(StructField(rowId,StringType,true), StructField(partitionId,StringType,true), StructField(preComb,LongType,true), StructField(name,StringType,true), StructField(versionId,StringType,true), StructField(intToLong,IntegerType,true))\n    \nscala> val data1 = Seq(Row("row_1", "part_0", 0L, "bob", "v_0", 0),\n    |                Row("row_2", "part_0", 0L, "john", "v_0", 0),\n    |                Row("row_3", "part_0", 0L, "tom", "v_0", 0))\n    data1: Seq[org.apache.spark.sql.Row] = List([row_1,part_0,0,bob,v_0,0], [row_2,part_0,0,john,v_0,0], [row_3,part_0,0,tom,v_0,0])\n\nscala> var dfFromData1 = spark.createDataFrame(data1, schema)\nscala> dfFromData1.write.format("hudi").\n    |   options(getQuickstartWriteConfigs).\n    |   option(PRECOMBINE_FIELD_OPT_KEY.key, "preComb").\n    |   option(RECORDKEY_FIELD_OPT_KEY.key, "rowId").\n    |   option(PARTITIONPATH_FIELD_OPT_KEY.key, "partitionId").\n    |   option("hoodie.index.type","SIMPLE").\n    |   option(TABLE_NAME.key, tableName).\n    |   mode(Overwrite).\n    |   save(basePath)\n\nscala> var tripsSnapshotDF1 = spark.read.format("hudi").load(basePath + "/*/*")\n    tripsSnapshotDF1: org.apache.spark.sql.DataFrame = [_hoodie_commit_time: string, _hoodie_commit_seqno: string ... 9 more fields]\n\nscala> tripsSnapshotDF1.createOrReplaceTempView("hudi_trips_snapshot")\n\nscala> spark.sql("desc hudi_trips_snapshot").show()\n    +--------------------+---------+-------+\n    |            col_name|data_type|comment|\n    +--------------------+---------+-------+\n    | _hoodie_commit_time|   string|   null|\n    |_hoodie_commit_seqno|   string|   null|\n    |  _hoodie_record_key|   string|   null|\n    |_hoodie_partition...|   string|   null|\n    |   _hoodie_file_name|   string|   null|\n    |               rowId|   string|   null|\n    |         partitionId|   string|   null|\n    |             preComb|   bigint|   null|\n    |                name|   string|   null|\n    |           versionId|   string|   null|\n    |           intToLong|      int|   null|\n    +--------------------+---------+-------+\n    \nscala> spark.sql("select rowId, partitionId, preComb, name, versionId, intToLong from hudi_trips_snapshot").show()\n    +-----+-----------+-------+----+---------+---------+\n    |rowId|partitionId|preComb|name|versionId|intToLong|\n    +-----+-----------+-------+----+---------+---------+\n    |row_3|     part_0|      0| tom|      v_0|        0|\n    |row_2|     part_0|      0|john|      v_0|        0|\n    |row_1|     part_0|      0| bob|      v_0|        0|\n    +-----+-----------+-------+----+---------+---------+\n\n// In the new schema, we are going to add a String field and \n// change the datatype `intToLong` field from  int to long.\nscala> val newSchema = StructType( Array(\n    | StructField("rowId", StringType,true),\n    | StructField("partitionId", StringType,true),\n    | StructField("preComb", LongType,true),\n    | StructField("name", StringType,true),\n    | StructField("versionId", StringType,true),\n    | StructField("intToLong", LongType,true),\n    | StructField("newField", StringType,true)\n    | ))\n    newSchema: org.apache.spark.sql.types.StructType = StructType(StructField(rowId,StringType,true), StructField(partitionId,StringType,true), StructField(preComb,LongType,true), StructField(name,StringType,true), StructField(versionId,StringType,true), StructField(intToLong,LongType,true), StructField(newField,StringType,true))\n\nscala> val data2 = Seq(Row("row_2", "part_0", 5L, "john", "v_3", 3L, "newField_1"),\n    |                Row("row_5", "part_0", 5L, "maroon", "v_2", 2L, "newField_1"),\n    |                Row("row_9", "part_0", 5L, "michael", "v_2", 2L, "newField_1"))\n    data2: Seq[org.apache.spark.sql.Row] = List([row_2,part_0,5,john,v_3,3,newField_1], [row_5,part_0,5,maroon,v_2,2,newField_1], [row_9,part_0,5,michael,v_2,2,newField_1])\n\nscala> var dfFromData2 = spark.createDataFrame(data2, newSchema)\nscala> dfFromData2.write.format("hudi").\n    |   options(getQuickstartWriteConfigs).\n    |   option(PRECOMBINE_FIELD_OPT_KEY.key, "preComb").\n    |   option(RECORDKEY_FIELD_OPT_KEY.key, "rowId").\n    |   option(PARTITIONPATH_FIELD_OPT_KEY.key, "partitionId").\n    |   option("hoodie.index.type","SIMPLE").\n    |   option(TABLE_NAME.key, tableName).\n    |   mode(Append).\n    |   save(basePath)\n\nscala> var tripsSnapshotDF2 = spark.read.format("hudi").load(basePath + "/*/*")\n    tripsSnapshotDF2: org.apache.spark.sql.DataFrame = [_hoodie_commit_time: string, _hoodie_commit_seqno: string ... 10 more fields]\n\nscala> tripsSnapshotDF2.createOrReplaceTempView("hudi_trips_snapshot")\n\nscala> spark.sql("desc hudi_trips_snapshot").show()\n    +--------------------+---------+-------+\n    |            col_name|data_type|comment|\n    +--------------------+---------+-------+\n    | _hoodie_commit_time|   string|   null|\n    |_hoodie_commit_seqno|   string|   null|\n    |  _hoodie_record_key|   string|   null|\n    |_hoodie_partition...|   string|   null|\n    |   _hoodie_file_name|   string|   null|\n    |               rowId|   string|   null|\n    |         partitionId|   string|   null|\n    |             preComb|   bigint|   null|\n    |                name|   string|   null|\n    |           versionId|   string|   null|\n    |           intToLong|   bigint|   null|\n    |            newField|   string|   null|\n    +--------------------+---------+-------+\n\n\nscala> spark.sql("select rowId, partitionId, preComb, name, versionId, intToLong, newField from hudi_trips_snapshot").show()\n    +-----+-----------+-------+-------+---------+---------+----------+\n    |rowId|partitionId|preComb|   name|versionId|intToLong|  newField|\n    +-----+-----------+-------+-------+---------+---------+----------+\n    |row_3|     part_0|      0|    tom|      v_0|        0|      null|\n    |row_2|     part_0|      5|   john|      v_3|        3|newField_1|\n    |row_1|     part_0|      0|    bob|      v_0|        0|      null|\n    |row_5|     part_0|      5| maroon|      v_2|        2|newField_1|\n    |row_9|     part_0|      5|michael|      v_2|        2|newField_1|\n    +-----+-----------+-------+-------+---------+---------+----------+\n\n')))}s.isMDXComponent=!0}}]);