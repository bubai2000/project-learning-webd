let a=175;
let b=a;
a=a.toString().split('');
a=a.map(i=> parseInt(i));
if(b==a.reduce(function(sum,digit,index){
    return sum+Math.pow(digit,index+1);
})){console.log(b+" is Disarium!");}
else{console.log(b+" is NOT Disarium!");}