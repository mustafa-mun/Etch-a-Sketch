const sketch = document.getElementById('sketch');



for(let i = 0 ; i < 32*32 ; i++) {
  const div = document.createElement('div')
  sketch.appendChild(div)

  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black'
  })
}
