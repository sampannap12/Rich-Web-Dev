let add_btn= document.getElementById('add-btn');
rxjs.fromEvent(add_btn, 'click')
		  .subscribe(() => addNote()
	    );


function addNote() {
    let notes = document.getElementById('notes');

      var li = document.createElement('li'),
      deleteBtn = document.createElement('button'),
      redBtn = document.createElement('button'),
      greenBtn = document.createElement('button'),
      blueBtn = document.createElement('button'),
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
      li.appendChild(redBtn);
      li.appendChild(blueBtn);
      li.appendChild(greenBtn);
      li.appendChild(titles);
      li.appendChild(messages);
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



  
