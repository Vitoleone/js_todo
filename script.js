
let liDom = document.querySelector("#list");

function ekle()
{
    var li = document.createElement('li');
    
    var liText = document.createTextNode('');
    let taskDom = document.querySelector("#task").value;
    let deleteButton = document.createElement('button');
    //deleteButton.textContent = "X";
    deleteButton.innerHTML = ` <button type="button" class="btn btn-light">X</button>`


    deleteButton.addEventListener('click', event => sil(li));
    liText = taskDom;
    

    if(taskDom == " " || taskDom == "" || taskDom == null)
    {
        alert("Doğru değer gir len!");
    }
    else
    {
        
        
        li.appendChild(document.createTextNode(liText));
        li.appendChild(deleteButton);
        liDom.appendChild(li);
        
    }
    
    
    
}
function sil(element)
{
    liDom.removeChild(element);
    
}