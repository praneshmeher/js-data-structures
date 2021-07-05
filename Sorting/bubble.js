
function bubble(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}

function bubble1(arr){
    for (let i = 0; i < arr.length-1; i++) {
        let swap = false
        for (let j = 0; j < arr.length-1-i; j++) {
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]=temp
                swap = true
            }
        }
        if(!swap)
            break
    }
    return arr
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubble(arr))
