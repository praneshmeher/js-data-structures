// Find all triplets with zero sum

// Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.

function find3sum(arr){
    for (let i = 0; i < arr.length-1; i++) {
        let map = {}
        for (let j = i+1; j < arr.length; j++) {
            let nsum = -(arr[i]+arr[j])
            if(map[nsum])
                console.log('ans----', nsum, arr[i], arr[j])
            else
                map[arr[j]]=arr[j]
        }
    }
}

let arr = [0, -1, 2, -3, 1];
find3sum(arr)