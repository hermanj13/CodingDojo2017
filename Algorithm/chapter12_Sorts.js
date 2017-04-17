function bubbleSort(arr) {
    for (var x = arr.length - 1; x >= 0; x--) {
        for (var i = 0; i < x; i++) {
            var temp = arr[i];
            var j = i;
            while (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                j++;
            }
        }
    }
    return arr
}
blue = [13, 15, 5, 7, 12, 99, 123]
console.log(bubbleSort(blue))

function bubbleSort2(arr) {
    for (var x = arr.length - 1; x >= 0; x--) {
        for (var i = 0; i < x; i++) {
            var temp = arr[i];
            while (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                i++;
            }
        }
    }
    return arr
}

console.log(bubbleSort2(blue))
