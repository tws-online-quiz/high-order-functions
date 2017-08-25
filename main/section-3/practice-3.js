'use strict';

function summarize(collection) {
    return collection.reduce((result, item) => {
        let obj = result.find(o => o.key === item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
        return result;
    }, []);
}

function discount(collection, promotionItems) {
    return collection.map(item => {
        let key = item.key;
        let count = item.count;
        if (promotionItems.includes(key)) {
            count = count - Math.floor(count / 3);
        }
        return {key, count};
    });
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
