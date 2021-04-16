

function addItem(){


    var ul = document.getElementById('dynamic');
    var written = document.getElementById("written");
    var li = document.createElement("li");
    li.setAttribute('id', written.value);
    li.appendChild(document.createTextNode(written.value))
    ul.appendChild(li);
}


function removeItem(){

    
    var ul = document.getElementById("dynamic");
    var written = document.getElementById("written");
    var item = document.getElementById(written.value);
    ul.removeChild(item);
}



var submitButton = document.querySelector('#sub-btn');

submitButton.addEventListener('click', addItem);



removeButton = document.querySelector('#remove-btn');


removeButton.addEventListener('click', removeItem);



