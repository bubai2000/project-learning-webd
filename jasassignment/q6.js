function happy(a){
    a=a.toString().split('');
    a=a.map(i=> parseInt(i));
    return a.reduce(function(sum,digit,index){
        if(index===1){
            return Math.pow(sum,2)+Math.pow(digit,2);
        }
        else{
            return sum+Math.pow(digit,2);
        }
    })
}
function isHappy(a){
    while(1){
        a=happy(a);
        if(a===1){
            console.log("Happy Number!");
            break;
        }
        if(a===2 || a==4){
            console.log("Not Happy Number!");
            break;
        }
    }
}
isHappy(50);
isHappy(19);