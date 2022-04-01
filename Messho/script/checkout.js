var array=[];
var array2=[];
var obj={}
var state=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar ","Chhattisgarh"
,"Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand"
,"Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
"Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
"Uttar Pradesh","Uttarakhand","West Bengal"];
var set=document.getElementById("states");
for (let index = 0; index <state.length; index++) {
    
    var opt=document.createElement("option");
    opt.innerText=state[index];
    opt.style.width="100%";
    set.append(opt);
    
}
document.getElementById("myform").addEventListener("submit",sendData);
function sendData(event)
{ event.preventDefault();
   
    for (let index = 0; index < 8; index++) {
        const element = document.getElementById("myform")[index].value;
        array.push(element);
    }
    array2.push(array);
    localStorage.setItem("address",JSON.stringify(array2)); 
    console.log(array2);
}