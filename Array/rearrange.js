// Rearrange an array such that arr[i] = i

function rearrange(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i==arr[j]){
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!==i)
        arr[i]=-1
    }
    return arr
}

function rearrange1(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0 && i != arr[i]){
            let temp = arr[arr[i]]
            arr[arr[i]]=arr[i]
            arr[i]=temp
        }
    }
    return arr
}

function rearrange(arr){
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]]=1
    }
    for (let i = 0; i < arr.length; i++) {
        if(map[i]){
            arr[i] = i
        }else{
            arr[i] = -1
        }
    }
    return arr
}


let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
console.log(rearrange(arr))