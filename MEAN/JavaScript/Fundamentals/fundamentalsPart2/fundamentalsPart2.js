// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
// Write a loop that will go through an array, find the minimum value, and then return it
// Write a loop that will go through an array, find the average of all of the values, and then return it
function sums(x, y) {
    total = 0;
    for (let i = x; i <= y; i++) {
        total += i;
    }
    console.log(total);
}
sums(1, 500);

function minimum(arr) {
    min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minimum([1, 5, 90, 25, -3, 0]))

function average(arr) {
    total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}
console.log(average([1, 5, 90, 25, -3, 0]));

// Rewrite these 3 as anonymous functions assigned to variables.

var anonsums = function(x, y) {
    total = 0;
    for (let i = x; i <= y; i++) {
        total += i;
    }
    console.log(total);
}
anonsums(1, 500);

var anonmin = function(arr) {
    min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(anonmin([1, 5, 90, 25, -3, 0]));

var anonavg = function(arr) {
    total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}
console.log(anonavg([1, 5, 90, 25, -3, 0]));

// Rewrite these as methods of an object

var fundamentals = {
    sum: function(x, y) {
        total = 0;
        for (let i = x; i <= y; i++) {
            total += i;
        }
        console.log(total);
    },
    min: function(arr) {
        min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    },
    avg: function(arr) {
        total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total / arr.length;
    }
}

fundamentals.sum(1, 500);
console.log(fundamentals.min([1, 5, 90, 25, -3, 0]));
console.log(fundamentals.avg([1, 5, 90, 25, -3, 0]));
