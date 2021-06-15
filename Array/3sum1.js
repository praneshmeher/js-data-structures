// Find a triplet that sum to a given value

// Given an array and a value, find if there is a triplet in array 
// whose sum is equal to the given value. If there is such a triplet present in array, 
// then print the triplet and return true. Else return false.

function find3sum(arr, key){
    for (let i = 0; i < arr.length-1; i++) {
        let map = {}
        for (let j = i+1; j < arr.length; j++) {
            let sum = (arr[i]+arr[j])
            if(map[key-arr[j]])
                console.log('ans---', arr[i], arr[j], map[key-arr[j]])
            else
                map[sum]=arr[j]
        }
    }
    return false
}

let arr = [1, 4, 45, 6, 10, 8];
find3sum(arr, 22)