let obj1={
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot",
    f: "moron"
}
let obj2={}
Object.entries(obj1).forEach(([key,value])=>{
    if(!(value in obj2)){
        obj2[value]=1;
    }
    else if(value in obj2){
        obj2[value]=obj2[value]+1;
    }
});
console.log(obj2);
