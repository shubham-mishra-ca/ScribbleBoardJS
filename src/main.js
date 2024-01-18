const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

function getNotes(){
    return JSON.parse(localStorage.getItem("stickynotes-notes")) || [];
}

function saveNotes(notes){
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content){
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value = content;
    element.placeholder = "Empty Sticky Note";
    element.addEventListener("change", () => {
        updateNote(id, element.value);
    });

    element.addEventListener("dbclick", () => {
        const doDelete = confirm("Are you sure you want to delete this note?");

        if(doDelete){
            deleteNote(id, element);
        }

    });

    return element;

}

function addNote(){

}

function updateNote(id, newContent){
    console.log("Updating notes...");
    console.log(id, newContent);
}

function deleteNote(id, element){
    console.log("Deleting notes...");
    console.log(id, element);
}
