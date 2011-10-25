var DATA = [
      { id:0, label:"bson-list-to-json", link:"mule/mongo.html#bson-list-to-json", type:"method" },
      { id:1, label:"count-objects", link:"mule/mongo.html#count-objects", type:"method" },
      { id:2, label:"count-objects-using-query-map", link:"mule/mongo.html#count-objects-using-query-map", type:"method" },
      { id:3, label:"create-collection", link:"mule/mongo.html#create-collection", type:"method" },
      { id:4, label:"create-file-from-payload", link:"mule/mongo.html#create-file-from-payload", type:"method" },
      { id:5, label:"create-index", link:"mule/mongo.html#create-index", type:"method" },
      { id:6, label:"db-object-to-map", link:"mule/mongo.html#db-object-to-map", type:"method" },
      { id:7, label:"dbobject-to-json", link:"mule/mongo.html#dbobject-to-json", type:"method" },
      { id:8, label:"drop-collection", link:"mule/mongo.html#drop-collection", type:"method" },
      { id:9, label:"drop-index", link:"mule/mongo.html#drop-index", type:"method" },
      { id:10, label:"exists-collection", link:"mule/mongo.html#exists-collection", type:"method" },
      { id:11, label:"find-files", link:"mule/mongo.html#find-files", type:"method" },
      { id:12, label:"find-files-using-query-map", link:"mule/mongo.html#find-files-using-query-map", type:"method" },
      { id:13, label:"find-objects", link:"mule/mongo.html#find-objects", type:"method" },
      { id:14, label:"find-objects-using-query-map", link:"mule/mongo.html#find-objects-using-query-map", type:"method" },
      { id:15, label:"find-one-file", link:"mule/mongo.html#find-one-file", type:"method" },
      { id:16, label:"find-one-file-using-query-map", link:"mule/mongo.html#find-one-file-using-query-map", type:"method" },
      { id:17, label:"find-one-object", link:"mule/mongo.html#find-one-object", type:"method" },
      { id:18, label:"find-one-object-using-query-map", link:"mule/mongo.html#find-one-object-using-query-map", type:"method" },
      { id:19, label:"get-file-content", link:"mule/mongo.html#get-file-content", type:"method" },
      { id:20, label:"get-file-content-using-query-map", link:"mule/mongo.html#get-file-content-using-query-map", type:"method" },
      { id:21, label:"insert-object", link:"mule/mongo.html#insert-object", type:"method" },
      { id:22, label:"insert-object-from-map", link:"mule/mongo.html#insert-object-from-map", type:"method" },
      { id:23, label:"json-to-dbobject", link:"mule/mongo.html#json-to-dbobject", type:"method" },
      { id:24, label:"list-collections", link:"mule/mongo.html#list-collections", type:"method" },
      { id:25, label:"list-files", link:"mule/mongo.html#list-files", type:"method" },
      { id:26, label:"list-files-using-query-map", link:"mule/mongo.html#list-files-using-query-map", type:"method" },
      { id:27, label:"list-indices", link:"mule/mongo.html#list-indices", type:"method" },
      { id:28, label:"map-reduce-objects", link:"mule/mongo.html#map-reduce-objects", type:"method" },
      { id:29, label:"mongo-collection-to-json", link:"mule/mongo.html#mongo-collection-to-json", type:"method" },
      { id:30, label:"org.mule.module.mongo", link:"java/org/mule/module/mongo/package-summary.html", type:"package" },
      { id:31, label:"org.mule.module.mongo.MongoCloudConnector", link:"java/org/mule/module/mongo/MongoCloudConnector.html", type:"class" },
      { id:32, label:"org.mule.module.mongo.MongoObjectStore", link:"java/org/mule/module/mongo/MongoObjectStore.html", type:"class" },
      { id:33, label:"org.mule.module.mongo.MongoSession", link:"java/org/mule/module/mongo/MongoSession.html", type:"class" },
      { id:34, label:"org.mule.module.mongo.api", link:"java/org/mule/module/mongo/api/package-summary.html", type:"package" },
      { id:35, label:"org.mule.module.mongo.api.DBObjects", link:"java/org/mule/module/mongo/api/DBObjects.html", type:"class" },
      { id:36, label:"org.mule.module.mongo.api.FieldsSet", link:"java/org/mule/module/mongo/api/FieldsSet.html", type:"class" },
      { id:37, label:"org.mule.module.mongo.api.IndexOrder", link:"java/org/mule/module/mongo/api/IndexOrder.html", type:"class" },
      { id:38, label:"org.mule.module.mongo.api.MongoClient", link:"java/org/mule/module/mongo/api/MongoClient.html", type:"class" },
      { id:39, label:"org.mule.module.mongo.api.MongoClientAdaptor", link:"java/org/mule/module/mongo/api/MongoClientAdaptor.html", type:"class" },
      { id:40, label:"org.mule.module.mongo.api.MongoClientImpl", link:"java/org/mule/module/mongo/api/MongoClientImpl.html", type:"class" },
      { id:41, label:"org.mule.module.mongo.api.MongoCollection", link:"java/org/mule/module/mongo/api/MongoCollection.html", type:"class" },
      { id:42, label:"org.mule.module.mongo.api.WriteConcern", link:"java/org/mule/module/mongo/api/WriteConcern.html", type:"class" },
      { id:43, label:"org.mule.module.mongo.config", link:"java/org/mule/module/mongo/config/package-summary.html", type:"package" },
      { id:44, label:"org.mule.module.mongo.config.BsonListToJsonTransformer", link:"java/org/mule/module/mongo/config/BsonListToJsonTransformer.html", type:"class" },
      { id:45, label:"org.mule.module.mongo.config.CountObjectsMessageProcessor", link:"java/org/mule/module/mongo/config/CountObjectsMessageProcessor.html", type:"class" },
      { id:46, label:"org.mule.module.mongo.config.CountObjectsUsingMapQueryMessageProcessor", link:"java/org/mule/module/mongo/config/CountObjectsUsingMapQueryMessageProcessor.html", type:"class" },
      { id:47, label:"org.mule.module.mongo.config.CountObjectsUsingQueryMapMessageProcessor", link:"java/org/mule/module/mongo/config/CountObjectsUsingQueryMapMessageProcessor.html", type:"class" },
      { id:48, label:"org.mule.module.mongo.config.CreateCollectionMessageProcessor", link:"java/org/mule/module/mongo/config/CreateCollectionMessageProcessor.html", type:"class" },
      { id:49, label:"org.mule.module.mongo.config.CreateFileFromPayloadMessageProcessor", link:"java/org/mule/module/mongo/config/CreateFileFromPayloadMessageProcessor.html", type:"class" },
      { id:50, label:"org.mule.module.mongo.config.CreateIndexMessageProcessor", link:"java/org/mule/module/mongo/config/CreateIndexMessageProcessor.html", type:"class" },
      { id:51, label:"org.mule.module.mongo.config.DbObjectToMapTransformer", link:"java/org/mule/module/mongo/config/DbObjectToMapTransformer.html", type:"class" },
      { id:52, label:"org.mule.module.mongo.config.DbobjectToJsonTransformer", link:"java/org/mule/module/mongo/config/DbobjectToJsonTransformer.html", type:"class" },
      { id:53, label:"org.mule.module.mongo.config.DropCollectionMessageProcessor", link:"java/org/mule/module/mongo/config/DropCollectionMessageProcessor.html", type:"class" },
      { id:54, label:"org.mule.module.mongo.config.DropIndexMessageProcessor", link:"java/org/mule/module/mongo/config/DropIndexMessageProcessor.html", type:"class" },
      { id:55, label:"org.mule.module.mongo.config.ExistsCollectionMessageProcessor", link:"java/org/mule/module/mongo/config/ExistsCollectionMessageProcessor.html", type:"class" },
      { id:56, label:"org.mule.module.mongo.config.FindFilesMessageProcessor", link:"java/org/mule/module/mongo/config/FindFilesMessageProcessor.html", type:"class" },
      { id:57, label:"org.mule.module.mongo.config.FindFilesUsingQueryMapMessageProcessor", link:"java/org/mule/module/mongo/config/FindFilesUsingQueryMapMessageProcessor.html", type:"class" },
      { id:58, label:"org.mule.module.mongo.config.FindObjectsMessageProcessor", link:"java/org/mule/module/mongo/config/FindObjectsMessageProcessor.html", type:"class" },
      { id:59, label:"org.mule.module.mongo.config.FindObjectsUsingQueryMapMessageProcessor", link:"java/org/mule/module/mongo/config/FindObjectsUsingQueryMapMessageProcessor.html", type:"class" },
      { id:60, label:"org.mule.module.mongo.config.FindOneFileMessageProcessor", link:"java/org/mule/module/mongo/config/FindOneFileMessageProcessor.html", type:"class" },
      { id:61, label:"org.mule.module.mongo.config.FindOneFileUsingQueryMapMessageProcessor", link:"java/org/mule/module/mongo/config/FindOneFileUsingQueryMapMessageProcessor.html", type:"class" },
      { id:62, label:"org.mule.module.mongo.config.FindOneObjectMessageProcessor", link:"java/org/mule/module/mongo/config/FindOneObjectMessageProcessor.html", type:"class" },
      { id:63, label:"org.mule.module.mongo.config.FindOneObjectUsingQueryMapMessageProcessor", link:"java/org/mule/module/mongo/config/FindOneObjectUsingQueryMapMessageProcessor.html", type:"class" },
      { id:64, label:"org.mule.module.mongo.config.GetFileContentMessageProcessor", link:"java/org/mule/module/mongo/config/GetFileContentMessageProcessor.html", type:"class" },
      { id:65, label:"org.mule.module.mongo.config.GetFileContentUsingQueryMapMessageProcessor", link:"java/org/mule/module/mongo/config/GetFileContentUsingQueryMapMessageProcessor.html", type:"class" },
      { id:66, label:"org.mule.module.mongo.config.IndexOrderEnumTransformer", link:"java/org/mule/module/mongo/config/IndexOrderEnumTransformer.html", type:"class" },
      { id:67, label:"org.mule.module.mongo.config.InsertObjectFromMapMessageProcessor", link:"java/org/mule/module/mongo/config/InsertObjectFromMapMessageProcessor.html", type:"class" },
      { id:68, label:"org.mule.module.mongo.config.InsertObjectMessageProcessor", link:"java/org/mule/module/mongo/config/InsertObjectMessageProcessor.html", type:"class" },
      { id:69, label:"org.mule.module.mongo.config.JsonToDbobjectTransformer", link:"java/org/mule/module/mongo/config/JsonToDbobjectTransformer.html", type:"class" },
      { id:70, label:"org.mule.module.mongo.config.ListCollectionsMessageProcessor", link:"java/org/mule/module/mongo/config/ListCollectionsMessageProcessor.html", type:"class" },
      { id:71, label:"org.mule.module.mongo.config.ListFilesMessageProcessor", link:"java/org/mule/module/mongo/config/ListFilesMessageProcessor.html", type:"class" },
      { id:72, label:"org.mule.module.mongo.config.ListFilesUsingQueryMapMessageProcessor", link:"java/org/mule/module/mongo/config/ListFilesUsingQueryMapMessageProcessor.html", type:"class" },
      { id:73, label:"org.mule.module.mongo.config.ListIndicesMessageProcessor", link:"java/org/mule/module/mongo/config/ListIndicesMessageProcessor.html", type:"class" },
      { id:74, label:"org.mule.module.mongo.config.MapReduceObjectsMessageProcessor", link:"java/org/mule/module/mongo/config/MapReduceObjectsMessageProcessor.html", type:"class" },
      { id:75, label:"org.mule.module.mongo.config.MongoCloudConnectorCapabilitiesAdapter", link:"java/org/mule/module/mongo/config/MongoCloudConnectorCapabilitiesAdapter.html", type:"class" },
      { id:76, label:"org.mule.module.mongo.config.MongoCloudConnectorConnectionManager", link:"java/org/mule/module/mongo/config/MongoCloudConnectorConnectionManager.html", type:"class" },
      { id:77, label:"org.mule.module.mongo.config.MongoCloudConnectorConnectionManager.ConnectionKey", link:"java/org/mule/module/mongo/config/MongoCloudConnectorConnectionManager.ConnectionKey.html", type:"class" },
      { id:78, label:"org.mule.module.mongo.config.MongoCloudConnectorLifecycleAdapter", link:"java/org/mule/module/mongo/config/MongoCloudConnectorLifecycleAdapter.html", type:"class" },
      { id:79, label:"org.mule.module.mongo.config.MongoCloudConnectorSessionManagerAdapter", link:"java/org/mule/module/mongo/config/MongoCloudConnectorSessionManagerAdapter.html", type:"class" },
      { id:80, label:"org.mule.module.mongo.config.MongoCloudConnectorSessionManagerAdapter.SessionKey", link:"java/org/mule/module/mongo/config/MongoCloudConnectorSessionManagerAdapter.SessionKey.html", type:"class" },
      { id:81, label:"org.mule.module.mongo.config.MongoCollectionToJsonTransformer", link:"java/org/mule/module/mongo/config/MongoCollectionToJsonTransformer.html", type:"class" },
      { id:82, label:"org.mule.module.mongo.config.MongoObjectStoreCapabilitiesAdapter", link:"java/org/mule/module/mongo/config/MongoObjectStoreCapabilitiesAdapter.html", type:"class" },
      { id:83, label:"org.mule.module.mongo.config.MongoObjectStoreLifecycleAdapter", link:"java/org/mule/module/mongo/config/MongoObjectStoreLifecycleAdapter.html", type:"class" },
      { id:84, label:"org.mule.module.mongo.config.RemoveFilesMessageProcessor", link:"java/org/mule/module/mongo/config/RemoveFilesMessageProcessor.html", type:"class" },
      { id:85, label:"org.mule.module.mongo.config.RemoveFilesUsingQueryMapMessageProcessor", link:"java/org/mule/module/mongo/config/RemoveFilesUsingQueryMapMessageProcessor.html", type:"class" },
      { id:86, label:"org.mule.module.mongo.config.RemoveObjectsMessageProcessor", link:"java/org/mule/module/mongo/config/RemoveObjectsMessageProcessor.html", type:"class" },
      { id:87, label:"org.mule.module.mongo.config.RemoveUsingMapQueryMessageProcessor", link:"java/org/mule/module/mongo/config/RemoveUsingMapQueryMessageProcessor.html", type:"class" },
      { id:88, label:"org.mule.module.mongo.config.RemoveUsingQueryMapMessageProcessor", link:"java/org/mule/module/mongo/config/RemoveUsingQueryMapMessageProcessor.html", type:"class" },
      { id:89, label:"org.mule.module.mongo.config.SaveObjectFromMapMessageProcessor", link:"java/org/mule/module/mongo/config/SaveObjectFromMapMessageProcessor.html", type:"class" },
      { id:90, label:"org.mule.module.mongo.config.SaveObjectMessageProcessor", link:"java/org/mule/module/mongo/config/SaveObjectMessageProcessor.html", type:"class" },
      { id:91, label:"org.mule.module.mongo.config.UpdateObjectsMessageProcessor", link:"java/org/mule/module/mongo/config/UpdateObjectsMessageProcessor.html", type:"class" },
      { id:92, label:"org.mule.module.mongo.config.UpdateObjectsUsingMapMessageProcessor", link:"java/org/mule/module/mongo/config/UpdateObjectsUsingMapMessageProcessor.html", type:"class" },
      { id:93, label:"org.mule.module.mongo.config.WriteConcernEnumTransformer", link:"java/org/mule/module/mongo/config/WriteConcernEnumTransformer.html", type:"class" },
      { id:94, label:"org.mule.module.mongo.config.spring", link:"java/org/mule/module/mongo/config/spring/package-summary.html", type:"package" },
      { id:95, label:"org.mule.module.mongo.config.spring.CountObjectsDefinitionParser", link:"java/org/mule/module/mongo/config/spring/CountObjectsDefinitionParser.html", type:"class" },
      { id:96, label:"org.mule.module.mongo.config.spring.CountObjectsUsingMapQueryDefinitionParser", link:"java/org/mule/module/mongo/config/spring/CountObjectsUsingMapQueryDefinitionParser.html", type:"class" },
      { id:97, label:"org.mule.module.mongo.config.spring.CountObjectsUsingQueryMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/CountObjectsUsingQueryMapDefinitionParser.html", type:"class" },
      { id:98, label:"org.mule.module.mongo.config.spring.CreateCollectionDefinitionParser", link:"java/org/mule/module/mongo/config/spring/CreateCollectionDefinitionParser.html", type:"class" },
      { id:99, label:"org.mule.module.mongo.config.spring.CreateFileFromPayloadDefinitionParser", link:"java/org/mule/module/mongo/config/spring/CreateFileFromPayloadDefinitionParser.html", type:"class" },
      { id:100, label:"org.mule.module.mongo.config.spring.CreateIndexDefinitionParser", link:"java/org/mule/module/mongo/config/spring/CreateIndexDefinitionParser.html", type:"class" },
      { id:101, label:"org.mule.module.mongo.config.spring.DropCollectionDefinitionParser", link:"java/org/mule/module/mongo/config/spring/DropCollectionDefinitionParser.html", type:"class" },
      { id:102, label:"org.mule.module.mongo.config.spring.DropIndexDefinitionParser", link:"java/org/mule/module/mongo/config/spring/DropIndexDefinitionParser.html", type:"class" },
      { id:103, label:"org.mule.module.mongo.config.spring.ExistsCollectionDefinitionParser", link:"java/org/mule/module/mongo/config/spring/ExistsCollectionDefinitionParser.html", type:"class" },
      { id:104, label:"org.mule.module.mongo.config.spring.FindFilesDefinitionParser", link:"java/org/mule/module/mongo/config/spring/FindFilesDefinitionParser.html", type:"class" },
      { id:105, label:"org.mule.module.mongo.config.spring.FindFilesUsingQueryMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/FindFilesUsingQueryMapDefinitionParser.html", type:"class" },
      { id:106, label:"org.mule.module.mongo.config.spring.FindObjectsDefinitionParser", link:"java/org/mule/module/mongo/config/spring/FindObjectsDefinitionParser.html", type:"class" },
      { id:107, label:"org.mule.module.mongo.config.spring.FindObjectsUsingQueryMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/FindObjectsUsingQueryMapDefinitionParser.html", type:"class" },
      { id:108, label:"org.mule.module.mongo.config.spring.FindOneFileDefinitionParser", link:"java/org/mule/module/mongo/config/spring/FindOneFileDefinitionParser.html", type:"class" },
      { id:109, label:"org.mule.module.mongo.config.spring.FindOneFileUsingQueryMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/FindOneFileUsingQueryMapDefinitionParser.html", type:"class" },
      { id:110, label:"org.mule.module.mongo.config.spring.FindOneObjectDefinitionParser", link:"java/org/mule/module/mongo/config/spring/FindOneObjectDefinitionParser.html", type:"class" },
      { id:111, label:"org.mule.module.mongo.config.spring.FindOneObjectUsingQueryMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/FindOneObjectUsingQueryMapDefinitionParser.html", type:"class" },
      { id:112, label:"org.mule.module.mongo.config.spring.GetFileContentDefinitionParser", link:"java/org/mule/module/mongo/config/spring/GetFileContentDefinitionParser.html", type:"class" },
      { id:113, label:"org.mule.module.mongo.config.spring.GetFileContentUsingQueryMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/GetFileContentUsingQueryMapDefinitionParser.html", type:"class" },
      { id:114, label:"org.mule.module.mongo.config.spring.InsertObjectDefinitionParser", link:"java/org/mule/module/mongo/config/spring/InsertObjectDefinitionParser.html", type:"class" },
      { id:115, label:"org.mule.module.mongo.config.spring.InsertObjectFromMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/InsertObjectFromMapDefinitionParser.html", type:"class" },
      { id:116, label:"org.mule.module.mongo.config.spring.ListCollectionsDefinitionParser", link:"java/org/mule/module/mongo/config/spring/ListCollectionsDefinitionParser.html", type:"class" },
      { id:117, label:"org.mule.module.mongo.config.spring.ListFilesDefinitionParser", link:"java/org/mule/module/mongo/config/spring/ListFilesDefinitionParser.html", type:"class" },
      { id:118, label:"org.mule.module.mongo.config.spring.ListFilesUsingQueryMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/ListFilesUsingQueryMapDefinitionParser.html", type:"class" },
      { id:119, label:"org.mule.module.mongo.config.spring.ListIndicesDefinitionParser", link:"java/org/mule/module/mongo/config/spring/ListIndicesDefinitionParser.html", type:"class" },
      { id:120, label:"org.mule.module.mongo.config.spring.MapReduceObjectsDefinitionParser", link:"java/org/mule/module/mongo/config/spring/MapReduceObjectsDefinitionParser.html", type:"class" },
      { id:121, label:"org.mule.module.mongo.config.spring.MongoCloudConnectorConfigDefinitionParser", link:"java/org/mule/module/mongo/config/spring/MongoCloudConnectorConfigDefinitionParser.html", type:"class" },
      { id:122, label:"org.mule.module.mongo.config.spring.MongoCloudConnectorNamespaceHandler", link:"java/org/mule/module/mongo/config/spring/MongoCloudConnectorNamespaceHandler.html", type:"class" },
      { id:123, label:"org.mule.module.mongo.config.spring.MongoObjectStoreConfigDefinitionParser", link:"java/org/mule/module/mongo/config/spring/MongoObjectStoreConfigDefinitionParser.html", type:"class" },
      { id:124, label:"org.mule.module.mongo.config.spring.MongoObjectStoreNamespaceHandler", link:"java/org/mule/module/mongo/config/spring/MongoObjectStoreNamespaceHandler.html", type:"class" },
      { id:125, label:"org.mule.module.mongo.config.spring.RemoveFilesDefinitionParser", link:"java/org/mule/module/mongo/config/spring/RemoveFilesDefinitionParser.html", type:"class" },
      { id:126, label:"org.mule.module.mongo.config.spring.RemoveFilesUsingQueryMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/RemoveFilesUsingQueryMapDefinitionParser.html", type:"class" },
      { id:127, label:"org.mule.module.mongo.config.spring.RemoveObjectsDefinitionParser", link:"java/org/mule/module/mongo/config/spring/RemoveObjectsDefinitionParser.html", type:"class" },
      { id:128, label:"org.mule.module.mongo.config.spring.RemoveUsingMapQueryDefinitionParser", link:"java/org/mule/module/mongo/config/spring/RemoveUsingMapQueryDefinitionParser.html", type:"class" },
      { id:129, label:"org.mule.module.mongo.config.spring.RemoveUsingQueryMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/RemoveUsingQueryMapDefinitionParser.html", type:"class" },
      { id:130, label:"org.mule.module.mongo.config.spring.SaveObjectDefinitionParser", link:"java/org/mule/module/mongo/config/spring/SaveObjectDefinitionParser.html", type:"class" },
      { id:131, label:"org.mule.module.mongo.config.spring.SaveObjectFromMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/SaveObjectFromMapDefinitionParser.html", type:"class" },
      { id:132, label:"org.mule.module.mongo.config.spring.UpdateObjectsDefinitionParser", link:"java/org/mule/module/mongo/config/spring/UpdateObjectsDefinitionParser.html", type:"class" },
      { id:133, label:"org.mule.module.mongo.config.spring.UpdateObjectsUsingMapDefinitionParser", link:"java/org/mule/module/mongo/config/spring/UpdateObjectsUsingMapDefinitionParser.html", type:"class" },
      { id:134, label:"remove-files", link:"mule/mongo.html#remove-files", type:"method" },
      { id:135, label:"remove-files-using-query-map", link:"mule/mongo.html#remove-files-using-query-map", type:"method" },
      { id:136, label:"remove-objects", link:"mule/mongo.html#remove-objects", type:"method" },
      { id:137, label:"remove-using-query-map", link:"mule/mongo.html#remove-using-query-map", type:"method" },
      { id:138, label:"save-object", link:"mule/mongo.html#save-object", type:"method" },
      { id:139, label:"save-object-from-map", link:"mule/mongo.html#save-object-from-map", type:"method" },
      { id:140, label:"update-objects", link:"mule/mongo.html#update-objects", type:"method" },
      { id:141, label:"update-objects-using-map", link:"mule/mongo.html#update-objects-using-map", type:"method" }

    ];
