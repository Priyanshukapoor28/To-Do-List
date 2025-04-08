const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value==='')
    {
        alert("You must write something!");
    }
    else
    {
        let li_store = document.createElement("li");
        li_store.innerHTML = inputBox.value;
        listContainer.appendChild(li_store);
        let span_store = document.createElement("span");
        span_store.innerHTML = "\u00d7";
        li_store.appendChild(span_store);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();