
function onlyDigits(){
    let str = '67v8'
    let ans = false

    for (let i = 0; i < str.length; i++) {
        if(str[i] >= 0 && str[i] <= 9){
            ans = true
        }else{
            ans= false
            break;
        }
    }
    console.log(ans) // false
}

onlyDigits()