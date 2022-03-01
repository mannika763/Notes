console.log("mannika");
// if user adds a note, add it to local storage.
showNotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    console.log(notesObj);
    showNotes();
});
// Function to show notes storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
    <div class=" my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Note ${index + 1}</h5>
      <p class="card-text"> ${element}</p>
      <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
    </div>
</div>
    `
    });
    let notesEle = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
    else{
        notesEle.innerHTML = `Nothing to show! use "Add notes" section above to add notes.`;
    }
}
// function to delete node
function deleteNote(index){
    console.log("I am deleting...",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById("searchtxt");
search.addEventListener("input",function(){
    let inputVal = search.value;
    console.log("input event fired!", inputVal);
    let notecards = document.getElementsByClassName("noteCards");
    Array.from(noteCards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.include(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})