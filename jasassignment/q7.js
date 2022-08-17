function multiply(a){
    return function(b){
        a=a.map((value)=>{
            return value*b;
        })
        // console.log(a);
        return a;
    }
}
console.log(multiply([1,2,3,4,5])(5));