// Move all zeroes to end of array | Set-2 (Using single traversal)

function movezero(arr){
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!==0){
            let temp = arr[count]
            arr[count]= arr[i]
            arr[i]=temp
            count++
        }
    }
}

let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9 ]
movezero(arr)
console.log(arr)