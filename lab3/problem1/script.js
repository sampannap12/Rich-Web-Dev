(function() {
  

    var app = {
      noteEditor: document.getElementById('note-editor'),
      noteEditorTitle: document.getElementById('note-editor-title'),
      title: document.getElementById('title'),
      message: document.getElementById('message'),
      color: document.getElementById('color'),
      addButton: document.getElementById('add-btn'),
      deleteButton: document.querySelector('.delete'),
      editButton: document.querySelector('.edit'),
      notesSection: document.getElementById('notes-section'),
      notes: document.getElementById('notes'),
      
  
      init: function() {
        app.addButton.addEventListener('click', app.createNote);
       
      },
      //Create function
      
      createNote: function() {
        
          var note = new Object();
          note.title = app.title.value;
          note.message = app.message.value;
          note.color = app.color.value;
          app.addNote(note);
        },
     //Add Function 
     
      addNote: function(note) {
        var li = document.createElement('li'),
        deleteBtn = document.createElement('span'),
        editBtn = document.createElement('span'),
        title = document.createElement('span'),
        message = document.createElement('span');
        title.className = 'note-title';
        title.innerHTML = note.title;
        message.className = 'note-message';
        message.innerHTML = note.message;
        li.className = note.color;
        
        li.appendChild(deleteBtn);
        li.appendChild(title);
        li.appendChild(message);
        li.appendChild(editBtn);
  
        deleteBtn.className = 'delete';
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.addEventListener('click', app.deleteNote);
  
        editBtn.className = 'edit';
        editBtn.innerHTML = 'Edit';
        editBtn.addEventListener('click', app.editNote);
        
        app.notes.prepend(li);
  
        app.title.value = '';
        app.message.value = '';
  
        
      },
      //edit function
  //Could not work out edit function
      editNote: function() {
        alert("Edit funtion doesnot work");
       
      },
  
      
      //delete function
      deleteNote: function() {
        this.parentNode.remove();
      },
  
        
    };
  
    app.init();
  
  })();