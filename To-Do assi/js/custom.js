var elems =document.querySelector(".sidenav");
var intance = M.Sidenav.init(elems);
  var data = localStorage.getItem("todos");
   if(data === null)
   data = [];
   else 
   data = JSON.parse(data);
   function todosubmit(){
     var todoTitle = document.getElementById("icons-prefix1").value; 
    var todoLocation = document.getElementById("icons-prefix2").value; 
    var todoDec = document.getElementById("icons-prefix3").value;  
    data.push({name:todoTitle,location:todoLocation,dec:todoDec});
   localStorage.setItem("todos",JSON.stringify(data));
   }
   //update the data 
   function update(sid){  
    window.location.assign("update.html");
    var updatetodo = data[sid];
    localStorage.setItem("uId",JSON.stringify(updatetodo));
    localStorage.setItem("id",JSON.stringify(sid));
}
//end update
// delete the data
function deletetodo(id){
     data.splice(id,1);
     localStorage.setItem("todos",JSON.stringify(data));
     window.location.reload(true);
}
if(data[0] === undefined){
    // create new div assign id and class
    var parentDiv = document.getElementById("result");
    var newDiv = document.createElement("div");
    var newDiv1 = document.createElement("div");
    newDiv.setAttribute("class","card");
    parentDiv.appendChild(newDiv);
    newDiv1.setAttribute("class","card-content grey lighten-5");
    // end
    newDiv.appendChild(newDiv1);
    // end new div
    //text node define data
    var textnode = document.createTextNode("todo is empty plz insert the data by using edit button");
    newDiv1.appendChild(textnode);
}
else{
for(var i = 0; i < data.length;i++){    
    var todo = data[i];
    // create new div assign id and class
    var parentDiv = document.getElementById("result");
    var newDiv = document.createElement("div");
    var newDiv1 = document.createElement("div");
    newDiv.setAttribute("class","card");
    parentDiv.appendChild(newDiv);
    newDiv1.setAttribute("class","card-content grey lighten-5");
    // end
    newDiv.appendChild(newDiv1);
    // end new div
    //text node define data
    var textnode = document.createTextNode(todo.name);
    var textnode1 = document.createTextNode(todo.location);
    var textnode2 = document.createTextNode(todo.dec);
    // set attribute
   
    // create achor link in in new div
    var newAchor =document.createElement("a");
    newAchor.appendChild(textnode);
    newDiv1.appendChild(newAchor);
    // set attribute achor
    newAchor.setAttribute("href","#!");
    // end anchoe link
    // create p tag in div for loction
    var newpara =document.createElement("p");
    newpara.setAttribute("class","abc");
    newDiv1.appendChild(newpara);
    newpara.appendChild(textnode1);
    // create p tag in div for dectition
    var newpara1 =document.createElement("p");
    newpara1.setAttribute("class","abc");
    newDiv1.appendChild(newpara1);
    newpara1.appendChild(textnode2);
    // crete delete btn
    var deleteBtn =document.createElement("a");
    deleteBtn.setAttribute("href","#!");
    deleteBtn.setAttribute("class","right postion-del");
    deleteBtn.setAttribute("id",i);
    deleteBtn.setAttribute("onclick","deletetodo(id)");
    newDiv1.appendChild(deleteBtn);
    // create icon element
    var icon =document.createElement("i");
    var iconText = document.createTextNode("close");
    icon.setAttribute("class","material-icons ");
     deleteBtn.appendChild(icon);
     icon.appendChild(iconText);
    // crete update button
    var updateBtn =document.createElement("a");
    var updateBtnText =document.createTextNode("UPDATE");
    updateBtn.setAttribute("href","#!");
    updateBtn.setAttribute("class","right postion-up");
    updateBtn.setAttribute("onclick","update(id)");
    updateBtn.setAttribute("id",i);
    newDiv1.appendChild(updateBtn);
    updateBtn.appendChild(updateBtnText);   
}
}
