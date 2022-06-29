const havetWatched = document.getElemebtById("placeholderHave")
const renderInHaveWatched = document.getElemebtById("containerHaveWatched")



function copyPlaceholderHave() {
    document.getElementById('placeholderHave').onkeydown = function(e){
        if(e.keyCode == 13){}
        }
    var copyText = document.getElementById("placeholderHave");
    copyText.select();
    document.execCommand("copy"); 
    document.getElementById("placeholderHave").value = ""
}

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