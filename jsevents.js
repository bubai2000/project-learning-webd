function toggle()
    {
        let btn = document.getElementById('btn');
        let para = document.getElementById('para');
        if(para.style.display != 'none')
        {
            para.style.display = 'none';
        }
        else{
            para.style.display = 'block';
        }
    }
function hello()
{
    let para = document.getElementById('para');
    para.addEventListener('mouseover', function fun(){
        alert("Hi!")
    });
}
function test(){
    hello();
    toggle();
}