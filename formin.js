function getData()
{
    //gettting the values
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var salary = document.getElementById("salary").value; 
    var radios = document.getElementsByName("gender"); 
    var car = document.getElementById("car").value; 
    var avail = document.getElementById("avail").checked;
    var essay = document.getElementById("essay").value; 
    var gender = "Not Selected";
    //saving the values in local storage

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("dob", dob);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("salary", salary);
    sessionStorage.setItem("car", car);
    sessionStorage.setItem("avail", avail);
    sessionStorage.setItem("essay", essay);
    //accessing a radio type data
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value
        }
    }
    sessionStorage.setItem("gender", gender);
}