var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target, targetKey){
  return ordinaryHasOwnMetadata(metadataKey, anObject(target), toMetaKey(targetKey));
}});