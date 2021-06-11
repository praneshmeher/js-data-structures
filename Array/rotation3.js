// Split the array and add the first part to the end

function rotation(arr, n){

    for (let i = 0; i < n; i++) {
        let start = arr[0]
        for (let j = 0; j < arr.length-1; j++) {
            arr[j]=arr[j+1]
        }
        arr[arr.length-1]=start
    }
}

let arr = [1,2,3,4,5]

rotation(arr,2)

console.log(arr)