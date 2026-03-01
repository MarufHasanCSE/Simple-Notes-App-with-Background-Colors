const addBtn = document.getElementById('add-btn');
const noteText = document.getElementById('note-text');
const noteColor = document.getElementById('note-color');
const notesGrid = document.getElementById('notes-grid');

addBtn.addEventListener('click', () => {
    if (noteText.value.trim() === "") return alert("Write something first!");

    
    const note = document.createElement('div');
    note.className = 'note';
    note.style.backgroundColor = noteColor.value;

    
    note.innerHTML = `
        <button class="delete-btn">X</button>
        <p>${noteText.value}</p>
    `;

        note.querySelector('.delete-btn').addEventListener('click', () => {
        note.remove();
    });

    
    notesGrid.appendChild(note);

    
    noteText.value = "";
});