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


/* 
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


/* code from youtube video
// first do it for have watched, later for want watch 

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