document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  // Build Li
  // Fill textCOntent
  // Append to ul

  const ul = document.querySelector('#moves-container')
  let steps = []
  function buildLi (direction) {
    let li = document.createElement("li")
    steps.push(li)
    li.dataset.step = steps.indexOf(li) + 1
    li.textContent = direction

    ul.append(li)
  }



  window.addEventListener('keydown', e => {
    
    switch (e.keyCode) { 
      case 37: 
          buildLi('left')
          break; 
      case 38: 
          buildLi('up')
          break; 
      case 39: 
          buildLi('right')
          break; 
      case 40: 
          buildLi('down')
          break; 
    } 
  })











})
