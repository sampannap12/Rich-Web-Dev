function addNote() {

    let addButton = document.getElementById('add-btn');
    let notes = document.getElementById('notes');

      var li = document.createElement('li'),
      deleteBtn = document.createElement('span'),
      editBtn = document.createElement('span'),
      titles = document.createElement('span'),
      messages = document.createElement('span');
      titles.className = 'note-title';
      titles.innerHTML = document.getElementById('title').value;
      titles.contentEditable ="true";
      messages.className = 'note-message';
      messages.innerHTML = document.getElementById('message').value;
      messages.contentEditable="true";
      li.className = document.getElementById('color').value;
      
      li.appendChild(deleteBtn);
      li.appendChild(titles);
      li.appendChild(messages);
      li.appendChild(editBtn);
      notes.prepend(li);
     

      deleteBtn.className = 'delete';
      deleteBtn.innerHTML = 'Delete';
      rxjs.fromEvent(deleteBtn, 'click')
		  .subscribe(() => deleteNote(li)
	    );


      
    }
    

    
    //delete function
     function deleteNote(li) {
      li.remove();
    }


  
