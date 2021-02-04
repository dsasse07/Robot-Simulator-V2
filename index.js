document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  // Build Li
  // Fill textCOntent
  // Append to ul
  const control = document.querySelector("#control-panel")


  const ul = document.querySelector('#moves-container')
  let steps = []
  function buildLi (direction) {
    let li = document.createElement("li")
    steps.push(li)
    li.dataset.step = steps.indexOf(li) + 1
    li.textContent = direction
    li.className = "step"

    ul.append(li)
  }

  const activateRobot = _ => {
 let totalSteps = steps.length
 let count = 0
  setInterval(moveRobot(totalSteps), 500)
 
function moveRobot(totalSteps){
  console.log(totalSteps)
  console.log(count)
  if (count == totalSteps) clearInterval()
  else {
  let currentLi = steps.shift()
  move(currentLi.textContent)
  currentLi.remove()
    count++;
}

}
  }
// function moveRobot(totalSteps, t){
//   console.log(totalSteps)
//   console.log(t)
//   if (t == totalSteps) clearInterval(t)
//   else {
//   let currentLi = steps.shift()
//   move(currentLi.textContent)
//   currentLi.remove()}

  
//}


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
    if (e.target.id === "move-button"){
      activateRobot()
    } else if (e.target.className === "step") {
      let index = steps.indexOf(e.target)
      steps.splice(index, 1)
      e.target.remove()
    }

  })












})
