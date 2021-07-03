
function checkanagram(str1, str2){
    let map = {}
    for (let i = 0; i < str1.length; i++) {
        if(map[str1[i]])
            map[str1[i]]++
        else
            map[str1[i]]=1
    }

    for (let i = 0; i < str2.length; i++) {
        if(!map[str2[i]])
            return false
        else
            map[str2[i]]--
    }
    return true
}

let str1 = 'marym'
let str2 = 'armym'
console.log(checkanagram(str1, str2))