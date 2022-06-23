"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[16049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?i.createElement(h,a(a({ref:t},u),{},{components:r})):i.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<n;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35589:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=r(87462),o=(r(67294),r(3905));const n={title:"Concurrency Control",summary:"In this page, we will discuss how to perform concurrent writes to Hudi Tables.",toc:!0,last_modified_at:new Date("2021-03-19T19:59:57.000Z")},a=void 0,l={unversionedId:"concurrency_control",id:"version-0.11.0/concurrency_control",title:"Concurrency Control",description:"In this section, we will cover Hudi's concurrency model and describe ways to ingest data into a Hudi Table from multiple writers; using the DeltaStreamer tool as well as",source:"@site/versioned_docs/version-0.11.0/concurrency_control.md",sourceDirName:".",slug:"/concurrency_control",permalink:"/docs/0.11.0/concurrency_control",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.0/concurrency_control.md",tags:[],version:"0.11.0",frontMatter:{title:"Concurrency Control",summary:"In this page, we will discuss how to perform concurrent writes to Hudi Tables.",toc:!0,last_modified_at:"2021-03-19T19:59:57.000Z"},sidebar:"docs",previous:{title:"Key Generation",permalink:"/docs/0.11.0/key_generation"},next:{title:"SQL DDL",permalink:"/docs/0.11.0/table_management"}},s=[{value:"Supported Concurrency Controls",id:"supported-concurrency-controls",children:[],level:2},{value:"Single Writer Guarantees",id:"single-writer-guarantees",children:[],level:2},{value:"Multi Writer Guarantees",id:"multi-writer-guarantees",children:[],level:2},{value:"Enabling Multi Writing",id:"enabling-multi-writing",children:[],level:2},{value:"Datasource Writer",id:"datasource-writer",children:[],level:2},{value:"DeltaStreamer",id:"deltastreamer",children:[],level:2},{value:"Best Practices when using Optimistic Concurrency Control",id:"best-practices-when-using-optimistic-concurrency-control",children:[],level:2},{value:"Disabling Multi Writing",id:"disabling-multi-writing",children:[],level:2},{value:"Caveats",id:"caveats",children:[],level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, we will cover Hudi's concurrency model and describe ways to ingest data into a Hudi Table from multiple writers; using the ",(0,o.kt)("a",{parentName:"p",href:"#deltastreamer"},"DeltaStreamer")," tool as well as\nusing the ",(0,o.kt)("a",{parentName:"p",href:"#datasource-writer"},"Hudi datasource"),"."),(0,o.kt)("h2",{id:"supported-concurrency-controls"},"Supported Concurrency Controls"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"MVCC")," : Hudi table services such as compaction, cleaning, clustering leverage Multi Version Concurrency Control to provide snapshot isolation\nbetween multiple table service writers and readers. Additionally, using MVCC, Hudi provides snapshot isolation between an ingestion writer and multiple concurrent readers.\nWith this model, Hudi supports running any number of table service jobs concurrently, without any concurrency conflict.\nThis is made possible by ensuring that scheduling plans of such table services always happens in a single writer mode to ensure no conflict and avoids race conditions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"[NEW]"," OPTIMISTIC CONCURRENCY")," : Write operations such as the ones described above (UPSERT, INSERT) etc, leverage optimistic concurrency control to enable multiple ingestion writers to\nthe same Hudi Table. Hudi supports ",(0,o.kt)("inlineCode",{parentName:"p"},"file level OCC"),", i.e., for any 2 commits (or writers) happening to the same table, if they do not have writes to overlapping files being changed, both writers are allowed to succeed.\nThis feature is currently ",(0,o.kt)("em",{parentName:"p"},"experimental")," and requires either Zookeeper or HiveMetastore to acquire locks."))),(0,o.kt)("p",null,"It may be helpful to understand the different guarantees provided by ",(0,o.kt)("a",{parentName:"p",href:"/docs/write_operations/"},"write operations")," via Hudi datasource or the delta streamer."),(0,o.kt)("h2",{id:"single-writer-guarantees"},"Single Writer Guarantees"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"UPSERT Guarantee"),": The target table will NEVER show duplicates."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"INSERT Guarantee"),": The target table wilL NEVER have duplicates if ",(0,o.kt)("a",{parentName:"li",href:"/docs/configurations#hoodiedatasourcewriteinsertdropduplicates"},"dedup")," is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"BULK_INSERT Guarantee"),": The target table will NEVER have duplicates if ",(0,o.kt)("a",{parentName:"li",href:"/docs/configurations#hoodiedatasourcewriteinsertdropduplicates"},"dedup")," is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"INCREMENTAL PULL Guarantee"),": Data consumption and checkpoints are NEVER out of order.")),(0,o.kt)("h2",{id:"multi-writer-guarantees"},"Multi Writer Guarantees"),(0,o.kt)("p",null,"With multiple writers using OCC, some of the above guarantees change as follows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"UPSERT Guarantee"),": The target table will NEVER show duplicates."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"INSERT Guarantee"),": The target table MIGHT have duplicates even if ",(0,o.kt)("a",{parentName:"li",href:"/docs/configurations#hoodiedatasourcewriteinsertdropduplicates"},"dedup")," is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"BULK_INSERT Guarantee"),": The target table MIGHT have duplicates even if ",(0,o.kt)("a",{parentName:"li",href:"/docs/configurations#hoodiedatasourcewriteinsertdropduplicates"},"dedup")," is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"INCREMENTAL PULL Guarantee"),": Data consumption and checkpoints MIGHT be out of order due to multiple writer jobs finishing at different times.")),(0,o.kt)("h2",{id:"enabling-multi-writing"},"Enabling Multi Writing"),(0,o.kt)("p",null,"The following properties are needed to be set properly to turn on optimistic concurrency control."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.cleaner.policy.failed.writes=LAZY\nhoodie.write.lock.provider=<lock-provider-classname>\n")),(0,o.kt)("p",null,"There are 3 different server based lock providers that require different configuration to be set."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Zookeeper"))," based lock provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\nhoodie.write.lock.zookeeper.url\nhoodie.write.lock.zookeeper.port\nhoodie.write.lock.zookeeper.lock_key\nhoodie.write.lock.zookeeper.base_path\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"HiveMetastore"))," based lock provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.lock.provider=org.apache.hudi.hive.HiveMetastoreBasedLockProvider\nhoodie.write.lock.hivemetastore.database\nhoodie.write.lock.hivemetastore.table\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The HiveMetastore URI's are picked up from the hadoop configuration file loaded during runtime.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Amazon DynamoDB"))," based lock provider"),(0,o.kt)("p",null,"Amazon DynamoDB based lock provides a simple way to support multi writing across different clusters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.lock.provider=org.apache.hudi.aws.transaction.lock.DynamoDBBasedLockProvider\nhoodie.write.lock.dynamodb.table\nhoodie.write.lock.dynamodb.partition_key\nhoodie.write.lock.dynamodb.region\n")),(0,o.kt)("p",null,"Also, to set up the credentials for accessing AWS resources, customers can pass the following props to Hudi jobs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.aws.access.key\nhoodie.aws.secret.key\nhoodie.aws.session.token\n")),(0,o.kt)("p",null,"If not configured, Hudi falls back to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html"},"DefaultAWSCredentialsProviderChain"),"."),(0,o.kt)("h2",{id:"datasource-writer"},"Datasource Writer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"hudi-spark")," module offers the DataSource API to write (and read) a Spark DataFrame into a Hudi table."),(0,o.kt)("p",null,"Following is an example of how to use optimistic_concurrency_control via spark datasource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'inputDF.write.format("hudi")\n       .options(getQuickstartWriteConfigs)\n       .option(PRECOMBINE_FIELD_OPT_KEY, "ts")\n       .option("hoodie.cleaner.policy.failed.writes", "LAZY")\n       .option("hoodie.write.concurrency.mode", "optimistic_concurrency_control")\n       .option("hoodie.write.lock.zookeeper.url", "zookeeper")\n       .option("hoodie.write.lock.zookeeper.port", "2181")\n       .option("hoodie.write.lock.zookeeper.lock_key", "test_table")\n       .option("hoodie.write.lock.zookeeper.base_path", "/test")\n       .option(RECORDKEY_FIELD_OPT_KEY, "uuid")\n       .option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath")\n       .option(TABLE_NAME, tableName)\n       .mode(Overwrite)\n       .save(basePath)\n')),(0,o.kt)("h2",{id:"deltastreamer"},"DeltaStreamer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," utility (part of hudi-utilities-bundle) provides ways to ingest from different sources such as DFS or Kafka, with the following capabilities."),(0,o.kt)("p",null,"Using optimistic_concurrency_control via delta streamer requires adding the above configs to the properties file that can be passed to the\njob. For example below, adding the configs to kafka-source.properties file and passing them to deltastreamer will enable optimistic concurrency.\nA deltastreamer job can then be triggered as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[hoodie]$ spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n  --props file://${PWD}/hudi-utilities/src/test/resources/delta-streamer-config/kafka-source.properties \\\n  --schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n  --source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n  --source-ordering-field impresssiontime \\\n  --target-base-path file:\\/\\/\\/tmp/hudi-deltastreamer-op \\ \n  --target-table uber.impressions \\\n  --op BULK_INSERT\n")),(0,o.kt)("h2",{id:"best-practices-when-using-optimistic-concurrency-control"},"Best Practices when using Optimistic Concurrency Control"),(0,o.kt)("p",null,"Concurrent Writing to Hudi tables requires acquiring a lock with either Zookeeper or HiveMetastore. Due to several reasons you might want to configure retries to allow your application to acquire the lock. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Network connectivity or excessive load on servers increasing time for lock acquisition resulting in timeouts"),(0,o.kt)("li",{parentName:"ol"},"Running a large number of concurrent jobs that are writing to the same hudi table can result in contention during lock acquisition can cause timeouts"),(0,o.kt)("li",{parentName:"ol"},"In some scenarios of conflict resolution, Hudi commit operations might take upto 10's of seconds while the lock is being held. This can result in timeouts for other jobs waiting to acquire a lock.")),(0,o.kt)("p",null,"Set the correct native lock provider client retries. NOTE that sometimes these settings are set on the server once and all clients inherit the same configs. Please check your settings before enabling optimistic concurrency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.lock.wait_time_ms\nhoodie.write.lock.num_retries\n")),(0,o.kt)("p",null,"Set the correct hudi client retries for Zookeeper & HiveMetastore. This is useful in cases when native client retry settings cannot be changed. Please note that these retries will happen in addition to any native client retries that you may have set. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.lock.client.wait_time_ms\nhoodie.write.lock.client.num_retries\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Setting the right values for these depends on a case by case basis; some defaults have been provided for general cases.")),(0,o.kt)("h2",{id:"disabling-multi-writing"},"Disabling Multi Writing"),(0,o.kt)("p",null,"Remove the following settings that were used to enable multi-writer or override with default values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.concurrency.mode=single_writer\nhoodie.cleaner.policy.failed.writes=EAGER\n")),(0,o.kt)("h2",{id:"caveats"},"Caveats"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"WriteClient")," API, please note that multiple writes to the table need to be initiated from 2 different instances of the write client.\nIt is NOT recommended to use the same instance of the write client to perform multi writing."))}u.isMDXComponent=!0}}]);