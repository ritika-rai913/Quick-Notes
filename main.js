let AddNote = document.getElementById("add-note");
let deleteBtn = document.querySelector(".close-btn");
let saveBtn = document.querySelector('.save-note');
let cancelBtn = document.querySelector('.cancel-btn');
let notesContainer = document.querySelector('.my-Notes');

AddNote.addEventListener("click", () => {
    document.querySelector(".dialog-content").style.display = 'block';
    document.getElementById("note-title").value = '';
    document.getElementById("note-content").value = '';
});

cancelBtn.addEventListener("click", () => {
    document.querySelector(".dialog-content").style.display = "none";
});

deleteBtn.addEventListener("click", () => {
    document.querySelector(".dialog-content").style.display = "none";
});


window.addEventListener("DOMContentLoaded", () => {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(note => {
        createNotes(note.title, note.content);
    });
});

saveBtn.addEventListener("click", () => {
    document.querySelector(".dialog-content").style.display = 'none';
   let title = document.getElementById("note-title").value.trim();
    let content = document.getElementById("note-content").value.trim();

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({ title, content });
    localStorage.setItem("notes", JSON.stringify(notes));
        createNotes(title, content);

});

function createNotes(title, content) {
    let div = document.createElement("div");
    div.classList.add("newNote");

    div.innerHTML = `
        <button class="cut-button" title="Delete Note">X</button>
        <h2 class="heading-title">${title}</h2>
        <p class="para-content">${content}</p>
    `;

    let noteDeleteBtn = div.querySelector('.cut-button');
    noteDeleteBtn.addEventListener("click", () => {
        div.remove();
        deleteNoteFromStorage(title, content);
    });

    notesContainer.appendChild(div);
}

function deleteNoteFromStorage(title, content) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    let filtered = notes.filter(note => note.title !== title || note.content !== content);
    localStorage.setItem("notes", JSON.stringify(filtered));
}


//ToggleThemeButton..
document.getElementById('theme-toggle').addEventListener('click', themeToggle);

function themeToggle(){
    let isDark = document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme', !isDark);

    localStorage.setItem('theme',isDark ? 'dark': 'light')
document.getElementById('theme-toggle').textContent = isDark ? '🌞' : '🌙';

}

function storetheme(){
    if(localStorage.getItem('theme')==='dark'){
        document.body.classList.add('dark-theme')
        document.getElementById('theme-toggle').textContent = '🌞'
    }  else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    document.getElementById('theme-toggle').textContent = '🌙';
  }

}
storetheme();








//myCode.

/*let AddNote = document.getElementById("add-note");
let deleltebtn = document.querySelector(".close-btn");
let saveBtn = document.querySelector('.save-note');
let cancelbtn = document.querySelector('.cancel-btn');

AddNote.addEventListener("click",() => {
    document.querySelector(".dialog-content").style.display='block';
    document.getElementById("note-title").value='';
    document.getElementById("note-content").value='';
    })

cancelbtn.addEventListener("click",() => {
        document.querySelector(".dialog-content").style.display="none";
})

deleltebtn.addEventListener("click",() => {
    document.querySelector(".dialog-content").style.display="none";
})


saveBtn.addEventListener("click",() => {
    
     document.querySelector(".dialog-content").style.display='none';
    let div = document.createElement("div");
        div.classList.add("newNote");
         div.innerHTML=`
        <button class="cut-button" title="Delete Note">X</button>
        <h2 class="heading-title">${document.getElementById("note-title").value}</h2>
        <p class="para-content">${document.getElementById("note-content").value}</p>
        `;
        
     let noteDeleteBtn = div.querySelector('button');
    noteDeleteBtn.addEventListener("click", () => {
        div.remove();

                deleteNoteFromStorage(title, content);
    });
     document.querySelector(".my-Notes").appendChild(div);
})*/
