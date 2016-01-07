var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target, targetKey){
  return ordinaryGetOwnMetadata(metadataKey, anObject(target), toMetaKey(targetKey));
}});