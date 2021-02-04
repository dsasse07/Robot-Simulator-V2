document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  // Build Li
  // Fill textCOntent
  // Append to ul


  /// ADD MOVES ///
  const control = document.querySelector("#control-panel")
  const ul = document.querySelector('#moves-container')
  let steps = []
  let totalSteps

  const buildLi = direction => {
    let li = document.createElement("li")
    steps.push(li)
    updateTotalSteps()
    li.dataset.step = steps.indexOf(li) + 1
    li.textContent = direction
    li.className = "step"

    ul.append(li)
  }

  const updateTotalSteps = _ => {
    totalSteps = steps.length
  }

  ///  DELETE STEP ////
  const deleteStep = _ => {
    let index = steps.indexOf(e.target)
    steps.splice(index, 1)
    updateTotalSteps()
    e.target.remove()
  }

  //////   MOVING!!!!!   ////////
  const activateRobot = _ => {
    let count = 0
    
    const moveRobot = _ => {
      count += 1
      if (count >= totalSteps) clearInterval(interval)
      let currentLi = steps.shift()
      move(currentLi.textContent)
      currentLi.remove()
    }
    
    let interval = setInterval(moveRobot, 500)
  }


  /// EVENT LISTENERS ////

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
 

  control.addEventListener('click', e => {
    switch (true) {
      case (e.target.id === "move-button" && totalSteps > 0):
        activateRobot()
        break
      case (e.target.className === "step"):
        deleteStep();
    }
  })












})
