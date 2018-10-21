var data = localStorage.getItem("todos");
if(data === null)
data = [];
else 
data = JSON.parse(data);
function updateValue(){
var updatetodo = localStorage.getItem("uId");
updatetodo = JSON.parse(updatetodo);

localStorage.removeItem("uId");

document.getElementById("icons-prefix4").value = updatetodo.name;
document.getElementById("icons-prefix5").value = updatetodo.location;
document.getElementById("icons-prefix6").value = updatetodo.dec;
}
updateValue();
function updatetodo(){
   
var id = localStorage.getItem("id");
id = JSON.parse(id);
localStorage.removeItem("id");
    var todoTitle = document.getElementById("icons-prefix4").value; 
    var todoLocation = document.getElementById("icons-prefix5").value; 
    var todoDec = document.getElementById("icons-prefix6").value;
    data[id] = {name:todoTitle,location:todoLocation,dec:todoDec}
    localStorage.setItem("todos",JSON.stringify(data));
}
