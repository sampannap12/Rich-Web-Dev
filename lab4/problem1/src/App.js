import logo from './logo.svg';
import './App.css';

function App() {


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
      redBtn.onclick = function () {
        li.className ='red'
      };

      greenBtn.className = 'green';
      greenBtn.innerHTML = 'G';
      greenBtn.onclick = function () {
        li.className ='green'
      };

      blueBtn.className = 'blue';
      blueBtn.innerHTML = 'B';
      blueBtn.onclick = function () {
        li.className ='blue'
      };

      li.appendChild(deleteBtn);
      li.appendChild(redBtn);
      li.appendChild(blueBtn);
      li.appendChild(greenBtn);
      li.appendChild(titles);
      li.appendChild(messages);
      notes.prepend(li);

     
      
      deleteBtn.className = 'delete';
      deleteBtn.innerHTML = 'Delete';
      deleteBtn.onclick = function () {
        li.remove();
      };
      
    }
    
    
  return (
    

<div>
  <div id="wrapper">
    <div id="note-editor">
      <h2 id="note-editor-title">Create Note</h2>
      <label>Title:</label>
      <input type="text" id="title" name="title" />
      <label>Note:</label>
      <input type="text" id="message" name="message"/>
      <label>Color:</label>
      <select id="color" name="color">
        <option value="red" selected>Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <div id="button">
        <button id="add-btn" onClick={addNote}>Create Note </button>
      </div>
    </div>
    <div id="notes-section">
      <ul id="notes"></ul>
    </div>
  </div>
</div>
  );
}

export default App;
