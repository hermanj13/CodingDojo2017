function bubbleSort(arr) {
    for (var x = arr.length - 1; x >= 0; x--) {
        var flag = true;
        for (var i = 0; i < x; i++) {
            var temp = arr[i];
            var j = i;
            while (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                j++;
                flag = false;
            }
        }
        if (flag === true) {
            return arr;
        }
    }
    return arr;
}
green = [1, 2, 3, 4, 5]
blue = [13, 14, 19, 15, 5, 7, 12, 99, 7, 123, 1]
console.log(bubbleSort(blue))

function bubbleSort2(arr) {
    for (var x = arr.length - 1; x >= 0; x--) {
        var flag = true;
        for (var i = 0; i < x; i++) {
            var temp = arr[i];
            while (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                i++;
                flag = false;
            }
        }
        if (flag === true) {
            return arr;
        }
    }
    return arr;
}

console.log(bubbleSort2(blue))

function selectionSort(arr) {
    for (var x = 0; x < arr.length; x++) {
        var min = arr[x];
        for (var y = x; y < arr.length; y++) {
            if (arr[y] <= min) {
                min = arr[y];
                var pos = y;
            }
        }
        var temp = arr[x];
        arr[x] = min;
        arr[pos] = temp;
    }
    return arr;
}

console.log(selectionSort(blue))

names = [{ firstname: 'Jake', lastname: 'Herman' }, { firstname: 'Will', lastname: 'Bobbies' }, { firstname: 'Will', lastname: 'Smith' }, { firstname: 'John', lastname: 'Smith' }, { firstname: 'Greg', lastname: 'Dinamo' }, { firstname: 'Greg', lastname: 'Wilson' }, { firstname: 'Greg', lastname: 'Bobby' }, { firstname: 'Dan', lastname: 'Schnider' }, { firstname: 'Harry', lastname: 'Potter' }, { firstname: 'Greg', lastname: 'Zero' }, { firstname: 'Vil', lastname: 'Nitro' }, { firstname: 'Ginny', lastname: 'Potter' }, { firstname: 'James', lastname: 'Potter' }]

function multikeySort(arr) {
    arr.sort(
        function(a, b) {
            var o1 = a.lastname;
            var o2 = b.lastname;

            var p1 = a.firstname;
            var p2 = b.firstname;

            if (o1 < o2) return -1;
            if (o1 > o2) return 1;
            if (p1 < p2) return -1;
            if (p1 > p2) return 1;
            return 0;
        })
    return arr;
}

console.log(multikeySort(names));
