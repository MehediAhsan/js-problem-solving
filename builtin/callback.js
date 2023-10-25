function callbackArr (arr, callback) {
    arr.push(199);
    callback();
}

let arr = [1, 2, 3, 4, 5];

callbackArr(arr, function(){
    console.log("callbackArr", arr);
})