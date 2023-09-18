// Challenge: Write a function that takes a number n as input and returns the sum of all prime numbers less than or equal to n.

function sumOfPrimes(n) {
    function isPrime(i) {
            for (let j = 2; j < i; j++) {
                if(i % j === 0) {
                    return false
                }
            }
            return true;
    }

    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if(isPrime(i)){
            sum = sum + i;
        }
    }
    return sum;
}

console.log(sumOfPrimes(10));