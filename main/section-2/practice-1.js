'use strict';

function find(collection, ch) {
    for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }

    return null;
}

module.exports = function countSameElements(collection) {
    return collection.reduce((result, ch) => {
        let entry = result.find(e => e.key === ch);
        if (entry) {
            entry.count++;
        } else {
            result.push({key: ch, count: 1});
        }

        return result;
    }, []);
}
