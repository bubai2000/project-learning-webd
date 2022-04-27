window.onload= function assign()
{
    document.getElementById("name").innerHTML=sessionStorage.getItem("name");
    document.getElementById("dob").innerHTML=sessionStorage.getItem("dob");
    document.getElementById("email").innerHTML=sessionStorage.getItem("email");
    document.getElementById("salary").innerHTML=sessionStorage.getItem("salary");
    document.getElementById("gender").innerHTML=sessionStorage.getItem("gender");
    document.getElementById("car").innerHTML=sessionStorage.getItem("car");
    document.getElementById("avail").innerHTML=sessionStorage.getItem("avail");
    document.getElementById("essay").innerHTML=sessionStorage.getItem("essay");
}