// To get the program running, open the apiQ2HTML.html file and go inspect element and then console. It should show the console logs
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => console.log(json.filter(titleLength))) //for title part

function titleLength(json) {
const titles = json.title
const words = titles.split(" ")
return words.length > 6
}

const getPosts = async() =>{
    const getData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await getData.json();
    return data;
}


getPosts()
.then (data => data.map((posts)=> {
    postsBody=(posts.body)
   
    var allData = JSON.stringify(postsBody)
    allData = allData.replace("\"", '') //removing the start quotation mark
    allData = allData.replace("\"", '') //removing the ending quotation mark
    allData = allData.replace(/\\n/g, ' ') // removing the "new Line  charater" with a white space  
    return (allData)
    
}))
    .then(wordCount =>{
        wordOcc=[]
        words = wordCount
        .map (wordCount => wordCount.split(" ") 
        .map(wordCount=>{
            if(wordCount in wordOcc)
            {wordOcc[wordCount]++}
            else{wordOcc[wordCount]=1}
        }))
        console.log(wordOcc) //word count
    })

