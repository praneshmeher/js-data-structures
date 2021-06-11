// Program to cyclically rotate an array by one

function arrayRotation(arr, n){
    for (let i = 0; i < n; i++) {
        let temp = arr[arr.length-1]
        for (let j = arr.length-1; j > 0; j--) {
            arr[j]=arr[j-1]
        }
        arr[0]=temp
    }
}

let arr = [1,2,3,4,5]
arrayRotation(arr, 3)
console.log(arr)