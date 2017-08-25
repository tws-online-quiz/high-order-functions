'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.map(obj => {
        let key = obj.key;
        let count = obj.count;
        if (objectB.value.includes(key)) {
            count--;
        }
        return {key, count};
    });
}
