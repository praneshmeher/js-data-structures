
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
let map = duplicate(str)

for(let key in map){
    if(map[key] == Math.max(...Object.values(map)))
        console.log(key)
}



