fetch('https://62ed04cd818ab252b607c6a3.mockapi.io/api/v1/users').then((response) => response.json()).catch(error => window.alert(error)).then((data)=>{
    console.log(data);
    for(let i of data){
        // let temp=document.createElement("li");
        // let text=document.createTextNode("Row "+i.id+" email: "+i.email+" First Name: "+i.firstname +" Last Name "+i.lastname);
        // temp.appendChild(text);
        // document.getElementById('view').appendChild(temp);
        
        // let table=document.getElementById('view');
        // let row=table.insertRow(table.rows.length);
        // let rc=row.insertCell(0);
        // let em=row.insertCell(1);
        // let fn=row.insertCell(2);
        // let ln=row.insertCell(3);
        // rc.textContent=i.id;
        // em.textContent=i.email;
        // fn.textContent=i.firstname;
        // ln.textContent=i.lastname;

        let item=document.createElement('div');
        let email=document.createElement('input');
        let fname=document.createElement('input');
        let lname=document.createElement('input');
        let submit=document.createElement('button');
        submit.textContent="Submit";
        submit.setAttribute('id',i.id);
        email.value=i.email;
        fname.value=i.firstname;
        lname.value=i.lastname;
        submit.addEventListener("click", function () {
            let id = submit.getAttribute('id');
            let updated_email = email.value;
            let updated_fname = fname.value;
            let updated_lname = lname.value;
            if(updated_email!=i.email || updated_fname!=i.firstname || updated_lname!=i.lastname){
                fetch("https://62ed04cd818ab252b607c6a3.mockapi.io/api/v1/users/" + id, {
              method: "PUT",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                email: updated_email,
                firstname: updated_fname,
                lastname: updated_lname,
                isUpdated: true,
              }),
            })
              .then((response) => {
                if (response.ok) alert("Data Updated");
                else alert("Something went Wrong!!");
                return response;
              })
              .then((e) => location.reload());
            }else{alert("No data avaialable for update!");}
        });
        if(i.isUpdated){
            email.disabled=true;
            fname.disabled=true;
            lname.disabled=true;
            submit.disabled=true;
        }
        item.appendChild(email);
        item.appendChild(fname);
        item.appendChild(lname);
        item.appendChild(submit);
        document.body.appendChild(item);
        //console.log(i);
    }
});
