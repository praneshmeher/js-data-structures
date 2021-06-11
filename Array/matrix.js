// Inplace rotate square matrix by 90 degrees 

function rotateMatrix(arr, n){
    for (let i = 0; i < n/2; i++) {
        for (let j = i; j < n-1-i; j++) {
            let temp = arr[i][j]
            arr[i][j]=arr[j][n-1-i]
            arr[j][n-1-i]=arr[n-1-i][n-1-j]
            arr[n-1-i][n-1-j]=arr[n-1-j][i]
            arr[n-1-j][i]=temp
        }
    }
}

function display(arr, n){
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(arr[i][j])
        }
        console.log('\n')
    }
}

let N = 4;
let mat=[[1, 2, 3, 4],[ 5, 6, 7, 8 ],[9, 10, 11, 12 ],[13, 14, 15, 16]];
rotateMatrix(mat, 4)
display(mat, 4)