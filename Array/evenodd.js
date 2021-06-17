// Segregate even and odd numbers | Set 3

// function evenodd(arr){
//     let pos = 0
//     let ans = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==0)
//             ans[pos++]=arr[i]
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2!=0)
//             ans[pos++]=arr[i]
//     }
//     console.log(ans)
// }

function evenodd(arr){
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0)
            ans.push(arr[i])
    }
    for (let j = 0; j < arr.length; j++) {
        if(arr[j]%2!=0)
            ans.push(arr[j])
    }
    console.log(ans)
}

let arr = [1, 3, 2, 4, 7, 6, 9, 10]
evenodd(arr)
