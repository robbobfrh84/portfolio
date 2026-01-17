const reSimulate = function(clear) {
  items.style.display = "block"
  startNote.style.display = "none"
  simulateNum.style.opacity = 1
  simulateNum.style.margin = "37px auto 20px auto"
  
  // Reset all emoji items
  const container = document.getElementById('allEmojis')
  if (container) {
    const emojiItems = Array.from(container.getElementsByClassName('emoji-item'))
    emojiItems.forEach(item => {
      const idx = Number(item.dataset.foodIndex)
      const food = foodObj[idx]
      const opacity = food && food.unAvailable === true ? '0.75' : '1'
      item.style.opacity = opacity
      item.classList.remove('highlight-red', 'highlight-green', 'highlight-blue', 'highlight-gold')
    })
  }
  
  // Reset pills
  for (let i = 1; i <= 4; i++) {
    const pill = document.getElementById(`item${i}`)
    if (pill) {
      pill.innerHTML = ''
      // pill.style.borderColor = 'transparent'
    }
  }
  
  // Reset simulation results
  simulationStatusText.innerHTML = "Unaffordable"
  simulationStatus.style.visibility = 'hidden'
  simulationStatus.style.opacity = '0'
  simulationPrice.textContent = '$$$'
  // Reset icons back to X
  const xs = simulationStatus.querySelectorAll('.icon-x')
  const checks = simulationStatus.querySelectorAll('.icon-check')
  xs.forEach(el => { el.style.display = 'inline-block' })
  checks.forEach(el => { el.style.display = 'none' })

  
  // Restart simulation
  if (!clear) {
    simulate(simulationNum1)
  }
}
