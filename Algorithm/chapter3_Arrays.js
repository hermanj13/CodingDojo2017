function pushFront(arr, value) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = value
    return arr
}

function popFront(arr) {
    if (arr[0]) {
        save = arr[0]
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1]
        }
        arr.length = arr.length - 1
        return save
    } else {
        return 'invalid parameter: array'
    }
}

function instertAt(arr, index, num) {
    if (index <= arr.length) {
        for (let i = arr.length; i >= index; i--) {
            arr[i] = arr[i - 1];
        }
        arr[index] = num;
        return arr;
    } else {
        return 'invalid parameter: index';
    }
}

function removeAt(arr, index) {
    if (index < arr.length) {
        var temp = arr[index];
        for (let i = index; i < arr.length; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length = arr.length - 1;
        return temp;
    } else {
        return 'invalid parameter: index';
    }
}

function removeNegatives(arr) {
    var counter = 0
    var i = 0
    while (i < arr.length) {
        if (arr[i] < 0) {
            for (let z = i; z < arr.length; z++) {
                arr[z] = arr[z + 1]
            }
            counter++
        } else {
            i++
        }
    }
    arr.length = arr.length - counter
    return arr
}

function secondToLast(arr) {
    if (arr[1]) {
        return arr[arr.length - 2]
    } else {
        return null
    }
}

function secondLargest(arr) {
    if (arr[1]) {
        var largest = arr[0]
        var second = arr[1]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > second && arr[i] < largest) {
                second = arr[i]
            } else if (arr[i] > largest) {
                second = largest
                largest = arr[i]
            }
        }
        return second
    } else {
        return null
    }
}

function nthToLast(arr, val) {
    if (val > arr.length) {
        return null
    } else {
        return arr[arr.length - val]
    }
}

function removelargest(arr) {
    var largest = arr[0]
    var index = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[0]
            index = i
        }
    }
    for (let i = index; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    return arr
}

function largest(arr) {
    var largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

function nthLargest(arr, val) {
    if (val > arr.length) {
        return null
    } else {
        var counter = 0
        var i = 0
        while (counter < val - 1) {
            arr = removelargest(arr)
            counter++
        }
        largest = largest(arr)
    }
    return largest
}

function creditCardValid(arr) {
    if (arr.length >= 13 && arr.length <= 19) {
        var total = 0
        var last = arr[arr.length - 1]
        var odd = true
        for (let i = arr.length - 2; i >= 0; i--) {
            if (odd) {
                if (arr[i] * 2 > 9) {
                    total += (arr[i] * 2 - 9)
                } else {
                    total += arr[i] * 2
                }
            } else {
                total += arr[i]
            }
            odd = !odd
        }
        if (((total + last) % 10) === 0) {
            return true
        } else {
            return false
        }
    }
    return 'invalid length'
}

function removeRange(arr, start, stop) {
    if (arr.length <= stop) {
        return 'invalid parameter: stop'
    }
    if (start > stop) {
        return 'invalid parameter: start'
    }
    stop = stop + 1
    for (let i = start; i < arr.length; i++) {
        arr[i] = arr[i + (stop - start)]
    }
    arr.length = arr.length - (stop - start)
    return arr
}

function intermediateSums(arr) {
    var sum = 0
    var counter = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        counter++
        if (counter === 10) {
            instertAt(arr, i + 1, sum)
            counter = 0
            sum = 0
            i++
        }
    }
    if (counter != 0) {
        instertAt(arr, arr.length, sum)
    }
    return arr
}

function doubleTrouble(arr) {
    for (let i = 0; i < arr.length; i++) {
        instertAt(arr, i + 1, arr[i])
        i++
    }
    return arr
}

function zipIt(arr1, arr2) {
    newArr = []
    if (arr1.length >= arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            newArr[newArr.length] = arr1[i]
            if (arr2[i]) {
                newArr[newArr.length] = arr2[i]
            }
        }
        return newArr
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[i]) {
            newArr[newArr.length] = arr1[i]
        }
        newArr[newArr.length] = arr2[i]
    }
    return newArr
}


function zipItInPlace(arr1, arr2) {
    if (arr1.length >= arr2.length) {
        counter = 0
        for (let i = 0; i < arr1.length; i++) {
            if (arr2[counter]) {
                instertAt(arr1, i + 1, arr2[counter])
                counter++
                i++
            }
        }
    }
    counter = 0
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[counter]) {
            instertAt(arr1, counter + 1, arr2[i])
            counter += 2
        } else {
            arr1[arr1.length] = arr2[i]
        }
    }
    return arr1
}
