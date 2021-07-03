
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

function duplicate1(str){
    let map = {}
    let ans = ''
    for (let i = 0; i < str.length; i++) {
        if(!map[str[i]]){
            map[str[i]]=1
            ans=ans+str[i]
        }
    }
    console.log('removed duplicates', ans)
}

let str = 'abrakadabra'
let map = duplicate(str)

for(let key in map){
    if(map[key] == Math.max(...Object.values(map)))
        console.log('maximum occurring character', key)
}



