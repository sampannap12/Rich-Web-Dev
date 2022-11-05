// To get the program running, open the apiQ2HTML.html file and go inspect element and then console. It should show the console logs


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => console.log(json.filter(titleLength))) //for title part

function titleLength(json) {
const titles = json.title
const words = titles.split(" ")
return words.length > 6
}
