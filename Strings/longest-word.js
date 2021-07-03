
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

let str = 'The quick brown fox jumped over the lazy dog'
console.log(longestword(str))

