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

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function expand(collection) {
    return collection.reduce((result, item) => {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            result.push(...(Array(count).fill(key)));
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
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
}
