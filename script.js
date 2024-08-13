const container = document.querySelector(".container");
const body = document.querySelector("body");
const newGrid = document.createElement("button");
const section = document.querySelector("section");

body.insertBefore(newGrid,section);

function randColor(){
    return `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
}

const opa =0;
function opacity(op){
    if(op==100) return op;
    else return op+opacity(op+10);
}

function delGrid(){
    let del=container;
    del.innerHTML="";
}

for(let i=0;i<16;i++){
    const row = document.createElement("div");
    container.appendChild(row);
    
    container.setAttribute("style","display:flex;");

    for(let i=0;i<16;i++){
        const col = document.createElement("div");

        col.setAttribute("style"," padding:7px;");

        col.addEventListener("mouseenter",()=>{
            col.setAttribute("style","padding:7px;");

            col.style.backgroundColor=randColor();
            col.style.opacity=`${opacity(opa)}%`;
            opa=0;
        });
        
        row.appendChild(col);
    }
}

newGrid.textContent="New Grid";

newGrid.addEventListener("click",()=>{
    let gridNum=+prompt("Enter the size of the square grid: ");

    delGrid();

    while(gridNum>100 || gridNum==null){
        gridNum=+prompt("Invalid Input! Please enter the size of the square grid within a range of 100: ");
    }

    for(let i=0;i<gridNum;i++){
        const row = document.createElement("div");
        container.appendChild(row);
        
        container.setAttribute("style","display:flex;");
    
        for(let i=0;i<gridNum;i++){
            const col = document.createElement("div");
    
            col.setAttribute("style"," padding:7px;");

            col.addEventListener("mouseenter",()=>{
                col.setAttribute("style","padding:7px;");
                
                col.style.backgroundColor=randColor();
                col.style.opacity=`${opacity(opa)}%`;
                opa=0;
            });
            
            row.appendChild(col);
        }
    }
});