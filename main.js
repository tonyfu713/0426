const btn = document.querySelector("#btn");


btn.addEventListener("click" ,function(){

    let body = {
        "student_list":[
            {
                "studentId":"S00010",
                "studentName":"宇芃"
            }
        ]
    }

    fetch("http://localhost:8080/add_student_list",{
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
    })
    .catch(err =>console.log(err))
});