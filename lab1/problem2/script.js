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
      title.contentEditable="true";
      message.className = 'note-message';
      message.innerHTML = note.message;
      message.contentEditable="true";
      li.className = note.color;
     
      redBtn = document.createElement('button'),
      greenBtn = document.createElement('button'),
      blueBtn = document.createElement('button'),

      
      redBtn.className = 'red';
      redBtn.innerHTML = 'R';
      redBtn.addEventListener('click', app.redNote);

      greenBtn.className = 'green';
      greenBtn.innerHTML = 'G';
      greenBtn.addEventListener('click', app.greenNote);

      blueBtn.className = 'blue';
      blueBtn.innerHTML = 'B';
      blueBtn.addEventListener('click', app.blueNote);
      
      li.appendChild(deleteBtn);
      li.appendChild(title);
      li.appendChild(message);
      li.appendChild(redBtn);
      li.appendChild(blueBtn);
      li.appendChild(greenBtn);

      deleteBtn.className = 'delete';
      deleteBtn.innerHTML = 'Delete';
      deleteBtn.addEventListener('click', app.deleteNote);

      
      app.notes.prepend(li);

      app.title.value = '';
      app.message.value = '';

      
    },
    

    
    //delete function
    deleteNote: function() {
      this.parentNode.remove();
    },

    
    redNote: function() {
      this.parentNode.className = 'red';
    },

    greenNote: function() {
     this.parentNode.className = 'green';
    },

    
    blueNote: function() {
      this.parentNode.className = 'blue';
    },

      
  };

  app.init();

})();