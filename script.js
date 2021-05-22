function  createNote(){

    let li=document.createElement("li");    
    let a=document.createElement("a");    
    let h3=document.createElement("h3");    
    let p=document.createElement("p");    
    let deletebtn=document.createElement("deletebtn");    

    deletebtn.classList.add("deletebtn");

    let xtext=document.createTextNode("X");
    let h3TN=document.createTextNode(noteTitle);
    let pTN=document.createTextNode(noteBody);

    h3.appendChild(h3TN);
    p.appendChild(pTN);
    deletebtn.appendChild(xtext);

    a.appendChild(h3);
    a.appendChild(deletebtn);
    a.appendChild(p);

    li.appendChild(a);

    document.getElementById("notes").appendChild(li);


}


function createNoteFromInput(e){
    e.preventDefault();

    let noteTitle=document.getElementById("new-note-title-input").value;
    let noteBody=document.getElementById("new-note-content-input").value;
    
    createNote(noteTitle,noteBody);

    document.getElementById("new-note-title-input").value="";
    document.getElementById("new-note-content-input").value="";

}

document
    .getElementById("inputform")
    .addEventListener("submit",createNoteFromInput,false);

    