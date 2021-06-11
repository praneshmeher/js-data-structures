// Rearrange array such that even index elements are smaller and odd index elements are greater

function wave(arr){
    for (let i = 0; i < arr.length; i+=2) {
        if(i < arr.length-1 && arr[i]>arr[i+1]){
            let temp = arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
        }
        if(i>0 && arr[i]>arr[i-1]){
            let temp = arr[i]
            arr[i]=arr[i-1]
            arr[i-1]=temp
        }
    }
}

let arr = [6, 4, 2, 1, 8, 3]
wave(arr)
console.log(arr)