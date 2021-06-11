// Program for array rotation
// Time complexity : O(n * d) 
// Auxiliary Space : O(1)

function arrayRotation(arr, n){

    for(let i=0; i<n;i++){
        let temp = arr[0]
        for (let j = 0; j < arr.length; j++) {
            arr[j]=arr[j+1]
        }
        arr[arr.length-1]=temp
    }

};

let arr = [1,2,3,4,5]
arrayRotation(arr, 3)
console.log(arr)
