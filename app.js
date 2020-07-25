var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item");
        // create li tag with text node
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
        // create delete button
    var delbtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(delText)
    // create a edit button 
    var editbtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editbtn.setAttribute("class","btn")
    editbtn.setAttribute("onclick","editItem(this)")
    editbtn.appendChild(editText)

    li.appendChild(delbtn)
    li.appendChild(editbtn)
    list.appendChild(li)
    todo_item.value = ""
    console.log(li)
}
function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Edit Your Text" , val)
    e.parentNode.firstChild.nodeValue = editValue
}
function deleteAll(){
    list.innerHTML = ""
}