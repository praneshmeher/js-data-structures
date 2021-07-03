// Sort an array in wave form

function wave(arr){
    arr.sort((a,b)=>a-b)
    for (let i = 0; i < arr.length-1; i+=2) {
        let temp = arr[i]
        arr[i]= arr[i+1]
        arr[i+1]=temp
    }
    return arr
}

function wave1(arr){
    for (let i = 0; i < arr.length; i+=2) {
        if(i<arr.length-1 && arr[i]<arr[i+1]){
            let temp = arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
        }
        if(i>0 && arr[i]<arr[i-1]){
            let temp = arr[i]
            arr[i]=arr[i-1]
            arr[i-1]=temp
        }
    }
    return arr
}

function wave2(arr){
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
    return arr
}

let arr = [ 10, 90, 49, 2, 1, 5, 23 ];
console.log(wave1(arr))