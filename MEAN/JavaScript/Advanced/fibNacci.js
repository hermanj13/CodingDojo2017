function fib() {
    previous = 0;
    number = 1;

    function nacci() {
        results = previous + number;
        number = previous;
        previous = results
        console.log(results)
    }
    return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
