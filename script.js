const sketch = document.getElementById('sketch');
const slider = document.getElementById('slider');
const gridSizeText = document.getElementById('grid-size-text');
const eraser = document.getElementById('eraser');
const colorPicker = document.getElementById('colorpicker')
const rainbowMode = document.getElementById('rainbow-mode');
const autmnMode = document.getElementById('autmn-mode')
const winterMode = document.getElementById('winter-mode')



reflectGrid(16) // Default value
let penColor = 'black' // Default value 
let rainbowModeOpen = false;
let autmnModeOpen = false;
let winterModeOpen = false;
let eraserModeOPen = false;


slider.oninput = function () { // Grid picker text update
  gridSizeText.textContent = `${this.value}x${this.value}`
}

slider.addEventListener('mouseup' , () => { // Change grid then update the grid
  sketch.innerHTML = ''
  penColor = 'black';
  reflectGrid(slider.value);
})


colorPicker.addEventListener("change", (event) => { // Pick pen color with color picker
  penColor = event.target.value
  rainbowModeOpen = false
});


eraser.addEventListener('click', () => { 
  eraserModeOPen = true
  penColor = 'white'
})

rainbowMode.addEventListener('click', () => {
  rainbowModeOpen = true
  eraserModeOPen = false
  autmnModeOpen = false
  winterModeOpen = false
})

winterMode.addEventListener('click', () => {
  winterModeOpen = true
  eraserModeOPen = false
  rainbowModeOpen = false
  autmnModeOpen = false
})

autmnMode.addEventListener('click', () => {
  autmnModeOpen = true
  eraserModeOPen = false
  rainbowModeOpen = false
  winterModeOpen = false
})






function reflectGrid(value) {
  for(let i = 0 ; i < value*value ; i++) {
    const div = document.createElement('div')
    sketch.appendChild(div)
  
    div.addEventListener('mouseover', () => {
      if(rainbowModeOpen && !eraserModeOPen) {
        div.style.backgroundColor = randomRgbGenerate()
      } else if(winterModeOpen && !eraserModeOPen) {
        div.style.backgroundColor = randomWinterRgb()
      } else if(autmnModeOpen && !eraserModeOPen) {
        div.style.backgroundColor = randomAutmnRgb()
      } else {
        div.style.backgroundColor = penColor
      }
    })

  }

  sketch.style.gridTemplateColumns = `repeat(${value}, 1fr)`
  sketch.style.gridTemplateRows = `repeat(${value}, 1fr)`
} 


function randomAutmnRgb() {
  const R = Math.floor(Math.random() * (255 - 128 + 1) + 128);
  const G = Math.floor(Math.random() * 256);
  const B = 0;
  return `rgb(${R}, ${G}, ${B})`
}
function randomWinterRgb() {
  const R = Math.floor(Math.random() * 129);
  const G = Math.floor(Math.random() * 256);
  const B = 255;
  return `rgb(${R}, ${G}, ${B})`
}
function randomRgbGenerate() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return `rgb(${R}, ${G}, ${B})`
}

