
function reverse(str){
    let arr = str.split('')
    let start=0
    let end=arr.length-1
    while(start<end){
        let temp = str[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }
    return arr.join('')
}

function reverse1(str){
    let r=''
    for (let i = str.length-1; i >= 0; i--) {
        r=r+str[i]
    }
    return r
}

let str = 'hello'
console.log(reverse1(str))


