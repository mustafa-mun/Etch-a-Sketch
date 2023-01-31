const sketch = document.getElementById('sketch');
const slider = document.getElementById('slider');
const gridSizeText = document.getElementById('grid-size-text');
const eraser = document.getElementById('eraser');
const colorPicker = document.getElementById('colorpicker')
const rainbowMode = document.getElementById('rainbow-mode');
const autmnMode = document.getElementById('autmn-mode')
const winterMode = document.getElementById('winter-mode')
const borderSettingBtn = document.getElementById('border-setting-btn')
const penSwitchBtn = document.getElementById('pen-switch');


let borderOn = true;
let rainbowModeOpen = false;
let autmnModeOpen = false;
let winterModeOpen = false;
let eraserModeOPen = false;
let isDragging = false;


reflectGrid(16) // Default value
let penColor = 'black' // Default value 


colorPicker.addEventListener("change", (event) => { // Pick pen color with color picker
  penColor = event.target.value
  rainbowModeOpen = false
  autmnModeOpen = false
  winterModeOpen = false
});

eraser.addEventListener('click', () => { // Eraser button event listener 
  eraserModeOPen = true
  penColor = 'white'
})

rainbowMode.addEventListener('click', () => { // Rainbow mode  button event listener 
  rainbowModeOpen = true
  eraserModeOPen = false
  autmnModeOpen = false
  winterModeOpen = false
})

winterMode.addEventListener('click', () => { // Winter mode button event listener 
  winterModeOpen = true
  eraserModeOPen = false
  rainbowModeOpen = false
  autmnModeOpen = false
})

autmnMode.addEventListener('click', () => { // Autmn mode button event listener 
  autmnModeOpen = true
  eraserModeOPen = false
  rainbowModeOpen = false
  winterModeOpen = false
})

slider.oninput = function () { // Grid picker text update
  gridSizeText.textContent = `${this.value}x${this.value}`
}

slider.addEventListener('mouseup' , () => { // Change grid then update the grid
  sketch.innerHTML = ''
  borderOn = true
  borderSettingBtn.textContent = 'BORDERS/ OFF'
  reflectGrid(slider.value);
})



// Mouse hold detect 
document.addEventListener('mouseup', () => { 
  isDragging = false;
});


document.addEventListener('mousedown', () => {
  isDragging = true;
});

// Reflecting grids to page
function reflectGrid(value) {
  for(let i = 0 ; i < value*value ; i++) {
    const div = document.createElement('div')
    sketch.appendChild(div)

      div.addEventListener('mousedown', () => {
        if(rainbowModeOpen && !eraserModeOPen) {
          div.style.backgroundColor = randomRgbGenerate()
        } else if(winterModeOpen  && !eraserModeOPen ) {
          div.style.backgroundColor = randomWinterRgb()
        } else if(autmnModeOpen  && !eraserModeOPen ) {
          div.style.backgroundColor = randomAutmnRgb()
        } else {
          div.style.backgroundColor = penColor
        }
    })
  
    div.addEventListener('mouseover', () => {
      if (isDragging) {
        if(rainbowModeOpen && !eraserModeOPen) {
          div.style.backgroundColor = randomRgbGenerate()
        } else if(winterModeOpen  && !eraserModeOPen ) {
          div.style.backgroundColor = randomWinterRgb()
        } else if(autmnModeOpen  && !eraserModeOPen ) {
          div.style.backgroundColor = randomAutmnRgb()
        } else {
          div.style.backgroundColor = penColor
        }
      }
    });
 
  }
  
  sketch.style.gridTemplateColumns = `repeat(${value}, 1fr)`
  sketch.style.gridTemplateRows = `repeat(${value}, 1fr)`
} 

// Random rgb color generate functions
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

// Open or close grid borders
function borderSwitch() {
  const divs = sketch.querySelectorAll('div')
  divs.forEach(item => {
    if(borderOn) {
      item.style.border = 'none'
      borderSettingBtn.textContent = 'BORDERS/ ON'
    } else {
      item.style.border = 'solid rgb(228, 226, 226) 1px'
      borderSettingBtn.textContent = 'BORDERS/ OFF'
    }
  })
  if(borderOn) borderOn = false
  else {borderOn = true}
}


function clearCanvas() {
  sketch.innerHTML = ''
  reflectGrid(slider.value)
  const divs = sketch.querySelectorAll('div')
  divs.forEach(item => {
    if(!borderOn) {
      item.style.border = 'none'
      borderSettingBtn.textContent = 'BORDERS/ ON'
    } else {
      item.style.border = 'solid rgb(228, 226, 226) 1px'
      borderSettingBtn.textContent = 'BORDERS/ OFF'
    }
  })
}

function refresh() {
  sketch.innerHTML = ''
  reflectGrid(16) // Default value
  penColor = 'black' // Default value 
  rainbowModeOpen = false;
  autmnModeOpen = false;
  winterModeOpen = false;
  eraserModeOPen = false;
  borderOn = true
  borderSettingBtn.textContent = 'BORDERS/ OFF'
  slider.value = 16;
  gridSizeText.textContent = '16x16'
}
