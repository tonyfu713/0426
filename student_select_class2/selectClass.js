const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
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
    let name2 = input2.value;
    let name3 = input3.value;

    
    console.log(name1);
    let body = {
        "student_select_list":[
            {
                "studentId":name1,
                "studentName":name2,
                "classCode":name3
            }
        ]
    }

    fetch("http://localhost:8080/delete_studend_select_list",{
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
        shower7.innerHTML = "學生學號:"+sourceData.subject_system_list[0].studentId;
        shower8.innerHTML = "學生姓名:"+sourceData.subject_system_list[0].studentName;
        shower1.innerHTML = "課程名稱:"+ sourceData.subject_system_list[0].className;
        shower2.innerHTML = "課程代碼:"+ sourceData.subject_system_list[0].classCode;
        shower3.innerHTML = "上課日期:星期"+ sourceData.subject_system_list[0].day;
        shower4.innerHTML = "上課時間:"+ sourceData.subject_system_list[0].startTime+"點";
        shower5.innerHTML = "下課時間:"+ sourceData.subject_system_list[0].endTime+"點";
        shower6.innerHTML = "學分:"+ sourceData.subject_system_list[0].credit;
        
        // if(sourceData.message !== "退選成功"){
        //     shower7.innerHTML = null;
        //     shower8.innerHTML = null;
        //     shower1.innerHTML = null;
        //     shower2.innerHTML = null;
        //     shower3.innerHTML = null;
        //     shower4.innerHTML = null;
        //     shower5.innerHTML = null;
        //     shower6.innerHTML = null;
        // }
    })
    .catch(err =>console.log(err))
    
    
});