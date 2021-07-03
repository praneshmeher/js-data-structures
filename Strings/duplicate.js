
function duplicate(str){
    let map = {}
    for (let i = 0; i < str.length; i++) {
        if(map[str[i]]){
            map[str[i]]++
        }else{
            map[str[i]]=1
        }
    }
    return map
}

let str = 'abrakadabra'
console.log(duplicate(str))
