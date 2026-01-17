const runSimulations = 20
const simulationDelay = 100

const simulationNum1 = {
  simulationNum: 1,
  food: [18,3,6,120]
}

window.onload = () => {
  buildEmojiGrid()
}

simulateLoader.addEventListener('click', ()=>{
  reSimulate()
})