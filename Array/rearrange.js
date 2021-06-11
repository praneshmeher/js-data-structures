// Rearrange an array such that arr[i] = i

function rearrange(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i==arr[j]){
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!==i)
        arr[i]=-1
    }
}

let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
rearrange(arr)
console.log(arr)