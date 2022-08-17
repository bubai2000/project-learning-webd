function isHappy(a){
    a=a.toString().split('');
    let set=Array.from(new Set(a));
    // console.log(set,a);
    return set.join()===a.join();
}
function nextHappy(a){
    do{
        a++;
        // if(isHappy(a))
        // {
        //     console.log(a);
        //     break;
        // }
    }while(!isHappy(a));
    console.log(a);
}
nextHappy(1990);
nextHappy(2013);