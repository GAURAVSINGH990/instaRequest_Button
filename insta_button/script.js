var istatus = document.querySelector("h5")

var add = document.querySelector("#add")
var remove = document.querySelector("#remove")

add.addEventListener('click', ()=>{
    istatus.innerHTML = "Friends"
})

remove.addEventListener('click',()=>{
    istatus.innerHTML = "Stranger"
})