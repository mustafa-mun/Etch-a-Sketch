const sketch = document.getElementById('sketch');
const slider = document.getElementById('slider');
const gridText = document.getElementById('grid-pick-text');
const eraser = document.getElementById('eraser');
const colorPicker = document.getElementById('colorpicker')
const rainbowMode = document.getElementById('rainbow-mode');

// Change example variable based on users range slider value


reflectGrid(16) // Default value
let penColor = 'black' // Default value 
let rainbowModeOpen = false
let eraserModeOPen = false

slider.oninput = function () { // Grid picker text update
  gridText.textContent = `${this.value}x${this.value}`
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
})


function reflectGrid(value) {
  for(let i = 0 ; i < value*value ; i++) {
    const div = document.createElement('div')
    sketch.appendChild(div)
  
    div.addEventListener('mouseover', () => {
      if(rainbowModeOpen && !eraserModeOPen) {
        div.style.backgroundColor = randomRgbGenerate()
      } else {
        div.style.backgroundColor = penColor
      }
    })


  }

  sketch.style.gridTemplateColumns = `repeat(${value}, 1fr)`
  sketch.style.gridTemplateRows = `repeat(${value}, 1fr)`
} 


function randomRgbGenerate() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

console.log(randomRgbGenerate());