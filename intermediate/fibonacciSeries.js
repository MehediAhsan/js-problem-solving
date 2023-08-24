// Write a function that generates the Fibonacci sequence up to a given number of terms.

function fibonacciSeries(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

console.log(fibonacciSeries(10)); 
