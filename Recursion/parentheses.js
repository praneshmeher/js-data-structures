// Generate Parentheses 
// Given an integer N representing the number of pairs of parentheses, 
// the task is to generate all combinations of well-formed(balanced) parentheses.

function parentheses(str, pos, n , open, close){
    if(close==n){
        console.log(str)
        return;
    }else{
        if(open<n){
            str[pos]='('
            parentheses(str, pos+1, n, open+1, close)
        }
        if(open>close){
            str[pos]=')'
            parentheses(str, pos+1, n, open, close+1)
        }
    }
}

parentheses([], 0, 3, 0, 0)