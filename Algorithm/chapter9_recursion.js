function rFib(num) {
    if (num <= 0) {
        return 0
    }
    return rFibHelp(num, 1, 0, 1)
}

function rFibHelp(num, count, prev, sum) {
    if (count >= num) {
        return sum
    }
    return rFibHelp(num, count + 1, sum, sum + prev)
}

console.log(rFib(23))

function rSubsets(str) {
    var arr = str.split('')
    arr.reverse()
    var arrFinal = []
    var arrNew = []
    return rSubHelp(arr, arrNew, arrFinal)
}

function rSubHelp(arr, arrNew, arrFinal) {
    if (arr.length == 0) {
        arrFinal.push(arrNew.join())
        return arrFinal
    }
    var x = arr.pop()
    arrNew.push(x)
    rSubHelp(arr, arrNew, arrFinal)
    arrNew.pop()
    rSubHelp(arr, arrNew, arrFinal)
    arr.push(x)
    return arrFinal
}

console.log(rSubsets('abc'))
