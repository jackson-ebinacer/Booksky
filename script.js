
var popupcontainer = document.querySelector(".popupcontainer");
var uploadcontainer = document.querySelector(".upload-container");
var plusbtn = document.querySelector(".plusbtn");

plusbtn.addEventListener("click", function() {
    popupcontainer.style.display = "block";
    uploadcontainer.style.display = "block";
});


var save = document.getElementById("savebtn");
var cancle = document.getElementById("canclebtn");


cancle.addEventListener("click", function(event) {
    event.preventDefault();
    popupcontainer.style.display = "none";
    uploadcontainer.style.display = "none";
});


var savebtn = document.getElementById("savebtn");
var inputtitle = document.getElementById("input-title");
var inputauthor = document.getElementById("input-author");
var textareadescription = document.getElementById("textarea-descrption");


savebtn.addEventListener("click", function(event) {
    event.preventDefault();

    
    var div = document.createElement("div");
    div.setAttribute("class", "inputcontainer");

    div.innerHTML = `
        <h2>${inputtitle.value}</h2>
        <h4>${inputauthor.value}</h4>
        <p>${textareadescription.value}</p>
        <button onclick="deletecontent(event)">Delete</button>
    `;

   
    document.body.appendChild(div); 


    popupcontainer.style.display = "none";
    uploadcontainer.style.display = "none";

    inputtitle.value = '';
    inputauthor.value = '';
    textareadescription.value = '';
});

function deletecontent(event) {
    event.target.parentElement.remove();
}