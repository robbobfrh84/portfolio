const runSimulations = 20 // 20
const simulationDelay = 100
const keepChecking = 40
const allowNegativePricesAfter = 4  // Allow negative price items after this many simulations

const doNotCheck = {
  52: true,  // Sell Kidney (price: -100)
  90: true   // Sell Family Heirloom (price: -50)
}

const simulationNum1 = {
  simulationNum: 1,
  food: [18,3,6,120]
}

window.onload = () => {
  buildEmojiGrid()
  // On mobile, force scroll to top
  if (window.innerWidth <= 600) {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
}

simulateLoader.addEventListener('click', ()=>{
  // On mobile, force scroll to top
  if (window.innerWidth <= 600) {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
  // Mark that simulateLoader was last pressed
  window.simulateLoaderLastPressed = true
  // Clear all item pills and selectedFoods
  if (window.selectedFoods) {
    for (let i = 0; i < 4; i++) {
      window.selectedFoods[i] = null
      const pill = document.getElementById(`item${i + 1}`)
      if (pill) pill.innerHTML = ''
    }
  }
  // Reset currentItem to 1 for next manual selection
  if (window.currentItem !== undefined) {
    window.currentItem = 1
  }
  reSimulate()
})