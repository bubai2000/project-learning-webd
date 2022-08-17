let button=document.getElementById('submit');
button.addEventListener('click',function(){
    var ifsc=document.getElementById('ifsc').value;
    fetch('https://ifsc.razorpay.com/'+ifsc).then((response) => response.json()).catch(error => window.alert(error)).then((data)=>{
    // data=Object.entries(data);
    console.log(data);
    let entry=document.createElement('div');
    data=Object.entries(data);
    for(let i of data){
        let item=document.createElement('p');
        for(let j of i){
            item.innerHTML+=" "+j;
        }
        entry.appendChild(item);
    }
    document.body.appendChild(entry);
})});