const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
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
        "student_select_list":[
            {
                "studentId":name1
            }
        ]
    }

    fetch("http://localhost:8080/find_by_student_id2",{
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
        console.log(sourceData);
        console.log(sourceData.message)
        // no.innerHTML = null;
        shower.innerHTML = sourceData.message;
        shower7.innerHTML = "學生學號:"+sourceData.subject_system_list[0].studentId;
        shower8.innerHTML = "學生姓名:"+sourceData.subject_system_list[0].studentName;
        shower1.innerHTML = "課程名稱:"+ sourceData.subject_system_list[0].className;
        shower2.innerHTML = "課程代碼:"+ sourceData.subject_system_list[0].classCode;
        shower3.innerHTML = "上課日期:星期"+ sourceData.subject_system_list[0].day;
        shower4.innerHTML = "上課時間:"+ sourceData.subject_system_list[0].startTime;
        shower5.innerHTML = "下課時間:"+ sourceData.subject_system_list[0].endTime;
        shower6.innerHTML = "學分:"+ sourceData.subject_system_list[0].credit;
    })
    .catch(err =>console.log(err))
    
    
});