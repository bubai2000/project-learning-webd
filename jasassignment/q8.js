let hi={
    a:1,
    b:2,
    c:9,
    d:13
}
// function toArray(obj){
//     let main=[]
//     for(key in obj){
//         let elem=[];
//         elem.push(key,obj[key]);
//         main.push(elem);
//     }
//     return main;
// }
console.log(Object.entries(hi));