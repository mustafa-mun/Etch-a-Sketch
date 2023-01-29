const sketch = document.getElementById('sketch');
const slider = document.getElementById('slider');
const gridText = document.getElementById('grid-pick-text');
const eraser = document.getElementById('eraser');
const colorPicker = document.getElementById('colorpicker')


// Change example variable based on users range slider value


reflectGrid(16) // Default value
let penColor = 'black' // Default value 

slider.oninput = function () { // Grid picker text update
  gridText.textContent = `${this.value}x${this.value}`
}

slider.addEventListener('mouseup' , () => { // Change grid then update the grid
  sketch.innerHTML = ''
  reflectGrid(slider.value)
})


colorPicker.addEventListener("change", (event) => { // Pick pen color with color picker
  penColor = event.target.value
});


eraser.addEventListener('click', () => { 
  penColor = 'white'
  div.style.border = 'solid black 1px'
})



function reflectGrid(value) {
  for(let i = 0 ; i < value*value ; i++) {
    const div = document.createElement('div')
    sketch.appendChild(div)
  
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = penColor
    })
  }

  sketch.style.gridTemplateColumns = `repeat(${value}, 1fr)`
  sketch.style.gridTemplateRows = `repeat(${value}, 1fr)`
} 


