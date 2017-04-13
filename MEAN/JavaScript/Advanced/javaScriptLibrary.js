var _ = {
    map: function(list, callback) {
        var results = [];
        for (let i = 0; i < list.length; i++) {
            results.push(callback(list[i]));
        }
        return results;
    },
    reduce: function(list, callback, memo) {
        var memo = memo || 0
        for (let i = 0; i < list.length; i++) {
            memo = callback(list[i], memo);
        }
        return memo;
    },
    find: function(list, callback) {
        for (let i = 0; i < list.length; i++) {
            if (callback(list[i])) {
                return list[i];
            }
        }
        return undefined;
    },
    filter: function(list, callback) {
        results = []
        for (let i = 0; i < list.length; i++) {
            if (callback(list[i])) {
                results.push(list[i]);
            }
        }
        return results;
    },
    reject: function(list, callback) {
        results = []
        for (let i = 0; i < list.length; i++) {
            if (!callback(list[i])) {
                results.push(list[i]);
            }
        }
        return results;
    }
}

var blue = [6, 5, 4, 3, 2, 1]

console.log(_.reduce(blue, function(x, memo) {
    return x + memo;
}));

console.log(_.map(blue, function(num) {
    return num * 3;
}));

console.log(_.find(blue, function(num) {
    return num % 2 == 0;
}))

console.log(_.filter(blue, function(num) {
    return num % 2 == 0;
}))

console.log(_.reject(blue, function(num) {
    return num % 2 == 0;
}))
