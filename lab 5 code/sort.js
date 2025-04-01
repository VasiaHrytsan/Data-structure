let arr = [];
for(n = 1;n <= 31; n++){
    arr.push(Math.round(Math.random() * 100))
}
console.log(arr)
function simpleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
        }
    }
} while (swapped)
    return arr;
}

console.log(simpleSort(arr))