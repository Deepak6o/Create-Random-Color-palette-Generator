const container = document.querySelector(".container");
const refreshbtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalette = ()=>{

    container.innerHTML=""; //clearing the container

    for (let index = 0; index < maxPaletteBoxes; index++) {
       
 //generating random hex color code

        let randomHex = Math.floor(Math.random()*0xffffff).toString(16);
        randomHex=`#${randomHex.padStart(6,"0")}`;
        console.log(randomHex);
        const color = document.createElement("li");
        color.classList.add("color");
        
// createing a new li element and inserting it to the container
        color.innerHTML=`<div class="box" style="background: ${randomHex}"></div>
        <span class="hex_value">${randomHex}</span>`;
        color.addEventListener("click", ()=> copyColor(color,randomHex));
        container.appendChild(color);
        
    }
   
   
}
generatePalette();
const copyColor=(elem,hexVal)=>{
    const colorElement = elem.querySelector(".hex_value");
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerHTML="Copied";
        setTimeout(()=> colorElement.innerText=hexVal,1000);
    }).catch(()=> alert("Failed to copy the color code!"));
}
refreshbtn.addEventListener("click",generatePalette);
