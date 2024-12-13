const container = document.querySelector(".container")

let gridCount = 16
function grid(gridCount){
    let width = (960-gridCount) / gridCount

console.log(width)   
 let table = document.createElement("table")
    for(let i= 0 ; i < gridCount ; i++){
        let tr = document.createElement("tr")
    
        for (let j = 0; j< gridCount ; j++){
        let td = document.createElement("td")
        td.addEventListener("mouseenter",(e)=>{
            e.target.style.background = "red"
        })
        td.style.width = `${width}px`
        td.style.height = `${width}px`
        console.log(td.style.width)
       tr.appendChild(td)
    }
        table.appendChild(tr)
    }
    container.innerHTML = ""
    container.appendChild(table)

}
const Replay = document.querySelector("button")
Replay.addEventListener("click",()=>{
    gridCount = parseInt(prompt("Enter the number of rows and columns for the grid number should be less then 48 (e.g., 16 for a 16x16 grid):"))
    grid(gridCount)
})



grid(gridCount)