
function kthelement(arr,k){
    let ans = arr.sort((a, b)=>a-b)
    return ans[k-1]
}

let arr = [4,2,3,1,5]
console.log(kthelement(arr,1))