const container = document.querySelector(".container")
const table = document.createElement("table")
let gridCount = 16
for(let i= 0 ; i < gridCount ; i++){
    let tr = document.createElement("tr")

    for (let j = 0; j< gridCount ; j++){
    let td = document.createElement("td")
    td.addEventListener("mouseenter",(e)=>{
        e.target.style.background = "red"
    })
   tr.appendChild(td)
}
    table.appendChild(tr)
}
container.appendChild(table)


