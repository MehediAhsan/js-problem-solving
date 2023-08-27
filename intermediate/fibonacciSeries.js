// Write a function that generates the Fibonacci sequence up to a given number of terms.

function fibonacciSeries(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

console.log(fibonacciSeries(10)); 

function Fibonacci(num) {
    if(num < 2) 
        return num;
    
    else 
        return Fibonacci(num-1) + Fibonacci(num - 2);
}

var terms = prompt('Enter the number of terms: ');

if(terms <=0) 
    console.log('Enter a positive integer.');

else {
    for(let i = 0; i < terms; i++) 
        console.log(Fibonacci(i));   
}