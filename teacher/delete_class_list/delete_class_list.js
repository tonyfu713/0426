const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");
const input5 = document.querySelector("#input5");
const input6 = document.querySelector("#input6");
const shower = document.querySelector("#shower");
const shower1 = document.querySelector("#shower1");
const shower2 = document.querySelector("#shower2");
const shower3 = document.querySelector("#shower3");
const shower4 = document.querySelector("#shower4");
const shower5 = document.querySelector("#shower5");
const shower6 = document.querySelector("#shower6");
const shower7 = document.querySelector("#shower7");
const shower8 = document.querySelector("#shower8");
const no = document.querySelector("#no");




let sourceData = [];

btn.addEventListener("click" ,function(){
    
    let name1 = input.value;

     console.log(name1);
    
     let body = {
        "subject_system_list":[
            {
                "classCode":name1
            }
        ]
    }

    fetch("http://localhost:8080/delete_class_list",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        sourceData = data;
        // no.innerHTML = null;

            shower.innerHTML = sourceData.message;
           
    })
    .catch(err =>console.log(err))
    
    
});