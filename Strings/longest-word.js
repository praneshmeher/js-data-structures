
function longestword(str){
    let word = ''
    let len = 0
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length>len){
            len = arr[i].length
            word = arr[i]
        }
    }
    return word
}

function longestword1(str){
    let arr = str.split(' ').sort((a,b)=>a.length-b.length)
    return arr[arr.length-1]
}

function longestword2(str){
    let word = str.split(' ').reduce((a,b)=>a.length>b.length ? a:b)
    return word
}

let str = 'The quick brown fox jumped over the lazy dog'
console.log(longestword1(str))

