function instertAt(arr, index, num) {
    if (index <= arr.length) {
        for (let i = arr.length; i >= index; i--) {
            arr[i] = arr[i - 1];
        }
        arr[index] = num;
        return arr;
    } else {
        return "invalid parameters";
    }
}

console.log(instertAt([1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 28));


function removeAt(arr, index) {
    if (index < arr.length) {
        temp = arr[index];
        for (let i = index; i < arr.length; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length = arr.length - 1;
        return temp;
    } else {
        return "invalid parameters";
    }
}

console.log(removeAt([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
