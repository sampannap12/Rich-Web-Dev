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
      
      redBtn.className = 'red';
      redBtn.innerHTML = 'R';
      rxjs.fromEvent(redBtn, 'click')
		  .subscribe(() => redColor(li)
	    );

      greenBtn.className = 'green';
      greenBtn.innerHTML = 'G';
      rxjs.fromEvent(greenBtn, 'click')
		  .subscribe(() => greenColor(li)
	    );

      blueBtn.className = 'blue';
      blueBtn.innerHTML = 'B';
      rxjs.fromEvent(blueBtn, 'click')
		  .subscribe(() => blueColor(li)
	    );

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
    
    function redColor(li) {
      li.className = 'red';
      
    }

    function blueColor(li) {
      li.className = 'blue';
    }

    function greenColor(li) {
      li.className = 'green';
    }
    
    //delete function
     function deleteNote(li) {
      li.remove();
    }



  
