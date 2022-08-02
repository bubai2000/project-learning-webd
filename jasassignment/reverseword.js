function reverse(){
  let a= document.getElementById("text").value;
  // console.log(a);
  a=a.split(" ");
  //console.log(b);
  a=a.map(
    (item)=>{
      return item.split("").reverse().join("");
    });
  a=a.join(" ");
  document.getElementById("text").value=a;
}
function palindrome(){
  let a= document.getElementById("text").value.toLowerCase();
  a=a.toLowerCase();
  b=a.split("").reverse().join("");
  if(a===b)
  {
    document.getElementById("text").value=a+" is palindrome";
  }
  else{
    document.getElementById("text").value=a+" is NOT palindrome";
  }
}
document.getElementById("rsubmit").addEventListener('click',reverse);
document.getElementById("psubmit").addEventListener('click',palindrome);