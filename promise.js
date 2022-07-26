let a=11;
function evenwarn(a){
    let error=false;
    if(a%2==0){
        error=true;
    }
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(!error){
                console.log(a+" is not an even number!");
                resolve();
            }
            else{
                console.log(a+" is an even number!");
                reject("Your entered number is even!");
            }
        },2000);
    })
}

evenwarn(a).then(function(){
    console.log("Thanks for entering an odd number!");
}).catch(function(error){
    console.log("Marks deducted! Reason: "+error);
})