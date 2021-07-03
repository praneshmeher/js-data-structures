// Find all triplets with zero sum
// Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.

function find3sum(arr){
    for (let i = 0; i < arr.length-1; i++) {
        let map = {}
        for (let j = i+1; j < arr.length; j++) {
            let sum = -(arr[i]+arr[j])
            if(map[sum])
                console.log('===', arr[i], arr[j], map[sum])
            else
                map[arr[j]]=arr[j]
        }
    }
}

let arr = [0, -1, 2, -3, 1];
find3sum(arr)

function find3sum1(arr, key){
    for (let i = 0; i < arr.length-1; i++) {
        let map = {}
        for (let j = i+1; j < arr.length; j++) {
            let sum = arr[i] + arr[j]
            if(map[key-sum])
                console.log('===', arr[i], arr[j], map[key-sum])
            else
                map[arr[j]]=arr[j]
        }
    }
    return false
}

let arr1 = [1, 4, 45, 6, 10, 8];
find3sum1(arr1, 22)
