//array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
	"https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length)
    imgs[i].src = catsImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are awesome.";
    headers[i].style.fontFamily = "cursive";
    headers[i].style.fontSize= "xxx-large";
    headers[i].style.color= "red";
}

const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "Cats are awesome.";
    
    p[i].style.fontSize= "xxx-large";
}



const head_base = document.getElementById("mw-head");

head_base.style.backgroundColor="red";
head_base.innerHTML='------------------------------------Error loading-----------------------------';
head_base.style.fontSize ="xxx-Large"
head_base.style.color="White";


const bodyContent = document.getElementById("bodyContent");
bodyContent.innerHTML='Error 404';
bodyContent.style.fontSize="xxx-Large";
bodyContent.style.color="red";

document.getElementById("mw-panel").style.backgroundColor="black";


document.getElementById("footer").style.backgroundColor="violet";
document.getElementById("footer").innerHTML='This is a Prank ';

const logo = document.getElementById("p-logo");
logo.style.display="None";

let ahref = document.getElementsByTagName("a");

for (let i=0; i<ahref.length ; i++)
{
    ahref[i].href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}














