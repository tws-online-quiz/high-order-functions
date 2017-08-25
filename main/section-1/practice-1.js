'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(item => collectionB.includes(item));
}
