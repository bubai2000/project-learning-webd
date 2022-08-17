var a="03.1400";
// a=a.reverse();
function removeLeadingTrailing(a){
    // a=a.split('');
    // function left(a){
    //     for(let i=0;i<a.length;i++){
    //         if(a[0]==='0'){
    //             a.shift();
    //         }
    //         else{
    //             break;
    //         }
    //     }
    //     return a;
    // }
    // function right(a){
    //     for(let i=0;i<a.length;i++){
    //         if(a[a.length-1]==='0'){
    //         a.pop();
    //     }
    //     if(a[a.length-1]==='.'){
    //         a.pop();
    //         break;
    //     }
    // }
    //     return a;
    // }
    // a=right(left(a));
    // return a.join('');
    return Number.parseFloat(a);
}
console.log(removeLeadingTrailing(a));
