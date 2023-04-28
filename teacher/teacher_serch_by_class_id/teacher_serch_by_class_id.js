const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const shower = document.querySelector("#shower");
const shower1 = document.querySelector("#shower1");
const shower2 = document.querySelector("#shower2");
const shower3 = document.querySelector("#shower3");
const shower4 = document.querySelector("#shower4");
const shower5 = document.querySelector("#shower5");
const shower6 = document.querySelector("#shower6");
const shower11 = document.querySelector("#shower11");
const shower21 = document.querySelector("#shower21");
const shower31 = document.querySelector("#shower31");
const shower41 = document.querySelector("#shower41");
const shower51 = document.querySelector("#shower51");
const shower61 = document.querySelector("#shower61");
const no = document.querySelector("#no");




let sourceData = [];

btn.addEventListener("click" ,function(){
    
    let name1 = input.value;
    

    console.log(name1);
    let body = {
        "subject_system_list":[
            {
                "classCode": name1
            }
        ]
    }

    fetch("http://localhost:8080/find_by_class_code2",{
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
        shower1.innerHTML = "課程名稱:"+ sourceData.subject_system_list[0].className;
        shower2.innerHTML = "課程代碼:"+ sourceData.subject_system_list[0].classCode;
        shower3.innerHTML = "上課日期:星期"+ sourceData.subject_system_list[0].day;
        shower4.innerHTML = "上課時間:"+ sourceData.subject_system_list[0].startTime+"點";
        shower5.innerHTML = "下課時間:"+ sourceData.subject_system_list[0].endTime+"點";
        shower6.innerHTML = "學分:"+ sourceData.subject_system_list[0].credit;
        // shower11.innerHTML = "課程名稱:"+ sourceData.subject_system_list[1].className;
        // shower21.innerHTML = "課程代碼:"+ sourceData.subject_system_list[1].classCode;
        // shower31.innerHTML = "上課日期:星期"+ sourceData.subject_system_list[1].day;
        // shower41.innerHTML = "上課時間:"+ sourceData.subject_system_list[1].startTime;
        // shower51.innerHTML = "下課時間:"+ sourceData.subject_system_list[1].endTime;
        // shower61.innerHTML = "學分:"+ sourceData.subject_system_list[1].credit;

    })
    .catch(err =>console.log(err))
    
    
});