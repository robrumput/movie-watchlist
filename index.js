/* button to scroll back to top follows here */

toTop = document.getElementById("to-top-btn");

// When the user scrolls down "value"px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topBtn() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

/* button to scroll back to top ends here */

/* make watched-button work  */
document.getElementById("watchedBtnId").addEventListener("click", function(e){
    e.preventDefault()    
    window.localStorage.setItem('name', 'Lion King')
        watchedBtn()
})

function watchedBtn(){
    var values = [], keys = Object.keys(localStorage), i = keys.length
    while (i--) {values.push(localStorage.getItem(keys[i]))}
    document.getElementById("title").textContent = values
}



let movieWatched = []

const moveToHaveWatched = (movieWatched, titleHaveWatched) =>
(el => (
  (el = document.querySelector('movieTitle' + titleHaveWatched)),
  (el.innerHTML += movieWatched.map(title => `<li>${title}</li>`).join(''))
))();

moveToHaveWatched(['title', 'title'], 'titleHaveWatched');


/* map over to lists try this 

const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');


/* button "watched" onclick to move to have watchede*  /
let haveWatchedArray = []


function watchedBtn(){
    document.getElementsByClassName("movieWantLine").addEventListener("click", function(e){
        e.preventDefault()
        let html = ""
        for (let movie of haveWatchedArray){
            html += `
                <div class="movieTitle" id="movieWatched">${movie.title}</div>
            `
        }
        document.getElementById("have-watched-list").innerHTML = html
        })

        document.getElementById("input").addEventListener("submit", function(e){
            e.preventDefault()
            const postTitle = document.getElementById("getHave").value
        })

        haveWatchedArray.unshift(movie)
        watchedBtn()
    }       






/* put input from "I have watched" on page 


let haveWatchedArray = []
const gethave = document.getElementById("getHave")

function renderHaveWatched(){
    let html = ""
    for (let title of haveWatchedArray){
        html += `
        <li class="movieTitle" id="movieWatched">${title}</li>
        `
    }
    document.getElementById("listHaveWatched").innerHTML = html
}

document.getElementById("input").addEventListener("keypress", function(e){
    if (event.code === "Enter"){
        e.preventDefault()
        document.getElementById("getHave").submit()}
    
    gethave = gethave.value
    const data = {
        title: title
        }
haveWatchedArray.unshift(title)
renderHaveWatched()
gethave.value = ""
    })


    */
    

/* watched button to move to have watched

const listHaveWatched = []

document.getElementById("watchedBtnId").addEventListener("click", function(){
    document.getElementById("title").textContent = document.getElementsById("movieWatched").textContent
    document.getElementsById("movieWatched").textContent += listHaveWatched[""]
})*/

/*
let haveWatched = []
const placeholderHave = document.getElementById("placeholderHave")
const containerHaveWatched = document.getElementById("movieWatched")

document.getElementById("placeholderHave").addEventListener("keypress", function(e){
    event.preventDefault()
    if(e.keyCode === 13){
        haveWatched.push(placeholderHave.value)
        placeholderHave.value = ""
        getPlaceholderHave()
    }
})

function getPlaceholderHave(){
    let listItems = ""
    for (let i= 0 ; i < haveWatched.length; i++){
        listItems += `
        <li>${haveWatched[i]}</li>`
    }
    containerHaveWatched.innerHTML = listItems
}



/*
const havetWatched = document.getElemebtById("placeholderHave")
const renderInHaveWatched = document.getElemebtById("containerHaveWatched")

const wantWatch = document.getElementById("placeholderWant")
const renderInWantWatch = document.getElementById("containerWantWatch")

function getPlaceholderHave(){
    const valHave = document.getElementById('placeholderHave').value
    return `<div class="testresult">${valHave.value}</div>`
}
function getPlaceholderWant(){
    const valWant = document.getElementById('placeholderWant').value
    return `<div class="testresult">${valWant.value}</div>`
}
/*function getPlaceholderWant(){
    document.getElementById('placeholderWant').onkeydown = function(e){
        if(e.keyCode == 13){}
        }
    const valWant = document.querySelector('placeholderWant').ariaValueMax
    console.log(valWant)
}


/*  copy value from placeholder attempt......
function copyPlaceholderWant() {
    document.getElementById('placeholderWant').onkeydown = function(e){
        if(e.keyCode == 13){}
        }
    var copyText = document.getElementById("placeholderWant");
    copyText.select() =  titelCopy;
    document.execCommand("copy") = titelCopy; 
    document.getElementById("placeholderWant").value = ""
    return `<ul class="listHaveWatched"><li class="movieTitle" id="movieWatched">${titelCopy.value}</li>
    </ul>`
}

function copyPlaceholderHave() {
    document.getElementById('placeholderHave').onkeydown = function(e){
        if(e.keyCode == 13){}
        }
    var copyText = document.getElementById("placeholderHave");
    copyText.select();
    document.execCommand("copy"); 
    document.getElementById("placeholderHave").value = ""
}

renderInHaveWatched.add


/* code applied from youtube video about a to do list

let listWantToWatch = []

const containerHaveWatched = document.querySelector('[haveWatched-list]')
const newEntry = document.querrySelector('[data-fetch-have-watched]')
 

let listHaveWatched = []

newEntry.addEventListener('keypress', e => {
    e.preventDefault()
    const listName = newEntry.value
    if(listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    list.push(list)
    render()
})

function createList(name){
    return {id: Date.now().toString, name: movieTitle}
}

function render(){
    clearElement(containerHaveWatched)
    listHaveWatched.forEach(list => {
        const listElement = document.createElement('li')
        listElement.classList.add("movieTitle")
        listElement.innerText = listHaveWatched
        listContainer.appendChild(listElement)
    })
}

function clearElement(element){
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()

*/


/*
const havetWatched = document.getElemebtById("placeholderHave")
const outputHave = document.getElemebtById("outputHave")

function moveToHaveWatched(){
    outputHave.innerHTML = havetWatched
}

placeholderHave.addEventListener("keypress", moveToHaveWatched())
*/