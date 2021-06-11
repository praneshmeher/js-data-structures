// Rearrange an array such that arr[i] = i

function rearrange(arr){
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]]=1
    }
    for (let i = 0; i < arr.length; i++) {
        if(map[i]){
            arr[i] = i
        }else{
            arr[i] = -1
        }
    }
}

let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
rearrange(arr)
console.log(arr.toString())