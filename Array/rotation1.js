// Reversal algorithm for array rotation
// Time Complexity : O(n)

function rotate(arr, start, end){
    while(start<end){
        let temp = arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }
}

function arrayRotation(arr, n){
    let len = arr.length
    n = n % len

    rotate(arr, 0 , n-1)
    rotate(arr, n, len-1)
    rotate(arr, 0, len-1)
}

let arr = [1,2,3,4,5]
arrayRotation(arr, 3)
console.log(arr)