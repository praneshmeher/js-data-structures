// Rearrange an array such that arr[i] = i

function rearrange(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0 && i != arr[i]){
            let temp = arr[arr[i]]
            arr[arr[i]]=arr[i]
            arr[i]=temp
        }
    }
}


let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
rearrange(arr)
console.log(arr.toString())