import("./index.css");
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <div id="divMain">
<div className="div1">
    <img id="logo" src="img/logo.png"></img>
    <h1 id="myNotes">My Notes</h1>
</div>
<div className="div2">
    <h3>Notes:</h3>
    <textarea class="textArea"></textarea>
    <button id="addBtn">ADD</button>
</div>
<div id="append"></div>
</div>,
document.getElementById("root")
)
document.getElementById("addBtn").addEventListener("click", add);
var textarea=document.querySelector(".textArea");
var append = document.getElementById("append");
function add(){
    if(textarea.value!==""){
        let h1=document.createElement("h1")
        h1.className = "output";
        h1.innerText=textarea.value
        append.append(h1)
    }
}