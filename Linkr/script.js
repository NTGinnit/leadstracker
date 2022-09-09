let myLinks = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const localStorageData = JSON.parse(localStorage.getItem("myLinks"))

if(localStorageData){
    myLinks = localStorageData
    render(myLinks)
}

saveBtn.addEventListener("click", function(){
    myLinks.push(inputEl.value)
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    inputEl.value = ""
    render(myLinks)
})

deleteBtn.addEventListener("dblclick", function(){
    myLinks = []
    localStorage.clear()
    render(myLinks)
})

function render(links){
    let list = ""
    for(let i = 0; i < links.length; i++){
        list += `
        <li>
            <a href="${links[i]}">
            ${links[i]}
            </a>
        </li>
            `
    }
    ulEl.innerHTML = list
}