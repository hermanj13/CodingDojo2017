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
