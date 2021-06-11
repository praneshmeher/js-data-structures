// Replace every array element by multiplication of previous and next
// Given an array of integers, 
// update every element with multiplication of previous and next elements with following exceptions. 
// a) First element is replaced by multiplication of first and second. 
// b) Last element is replaced by multiplication of last and second last.

function prevnext(arr){
    if(arr.length<=1)
        return

    let prev = arr[0]
    arr[0]=arr[0]*arr[1]

    for (let i = 1; i < arr.length-1; i++) {
        let next = arr[i]
        arr[i]=prev*arr[i+1]
        prev=next
    }
    arr[arr.length-1]=arr[arr.length-1]*prev
}

let arr = [2, 3, 4, 5, 6];
prevnext(arr)
console.log(arr)