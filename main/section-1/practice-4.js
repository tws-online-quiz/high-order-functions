'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter(obj => objectB.value.includes(obj.key)).map(obj => obj.key);
}
