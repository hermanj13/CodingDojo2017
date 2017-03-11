function removeBlanks(str) {
    str = str.split(" ")
    str = str.join("")
    return str
}

function acronyms(str) {
    arr = str.split(" ")
    acronym = []
    for (let i = 0; i < arr.length; i++) {
        acronym[acronym.length] = arr[i][0]
    }
    acronym = acronym.join("").toUpperCase()
    return acronym
}

function countNonSpace(str) {
    arr = str.split("")
    counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != " ") {
            counter++
        }
    }
    return counter
}

function removeShorter(arr, length) {
    count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            if (arr[i].length < length) {
                for (let z = i; z < arr.length; z++) {
                    arr[z] = arr[z + 1]
                }
                count++
                i--
            }
        }
    }

    arr.length = arr.length - count
    return arr
}

function reverse(str) {
    arr = str.split("")
    reverse = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse[reverse.length] = arr[i]
    }
    reverse = reverse.join("")
    return reverse
}

function removeEvenLength(arr) {
    counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            if ((arr[i].length % 2) === 0) {
                for (let z = i; z < arr.length; z++) {
                    arr[z] = arr[z + 1]
                }
                counter++
                i--
            }
        }
    }
    arr.length = arr.length - counter
    return arr
}

function alphabetical(str) {
    check = str.toLowerCase()
    for (let i = 0; i < check.length - 1; i++) {
        if (check[i] < check[i + 1]) {
            continue
        } else {
            return false
        }
    }
    return true
}

function dropTheMike(str) {
    arr = str.toLowerCase().split(" ")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            for (let x = i; x < arr.length; x++) {
                arr[x] = arr[x + 1]
            }
            i--
            arr.length = arr.length - 1
        } else {
            break
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "mike") {
            return "stunned silence"
        } else if (arr[i] === "") {
            continue
        } else {
            capitalize = arr[i].split("")
            capitalize[0] = capitalize[0].toUpperCase()
            arr[i] = capitalize.join("")
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === "") {
            arr.length = arr.length - 1
        } else {
            break
        }
    }
    return arr.join(" ")
}
