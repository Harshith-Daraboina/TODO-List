const inputbox= document.getElementById("input-todo");
const listcontainer= document.getElementById("task-container");

function addTask(){
    if(inputbox.value === ""){
        alert("Please enter a task");
        return;
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputbox.value;
        listcontainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML= "\u00D7";
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();
}

addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTask();
  }
});

listcontainer.addEventListener("click", function(event){
    
    if(event.target.tagName === "LI"){
        event.target.addclassList("checked");
        saveData();
    }
    
    else if(event.target.tagname ==="SPAN"){
        target.parentNode.remove();
        saveData();
    }
    
},false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
  }
  
  listcontainer.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName.toUpperCase() === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName.toUpperCase() === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    }
  );
  
  function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
  }
  showTask();
  