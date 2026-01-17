let simCounter = 1
let lastSelectedItems = []

const simulate = function(simulation, attemptCount = 0) {
  let simCount = 0
  
  // For first simulation, run all iterations; for subsequent, run just 1
  const iterations = simCounter <= 1 ? runSimulations : 1
  
  const runSim = () => {
    const selectedItems = startSimulation()
    lastSelectedItems = selectedItems
    simCount++
    
    if (simCount < iterations) {
      setTimeout(runSim, simulationDelay)
    } else {
      setTimeout(() => {
        // Only forceSimulation if simCounter is 1 (first simulation)
        if (simCounter <= 1) {
          forceSimulation(simulation)
          const svg = simulateLoader.querySelector('svg')
          svg.style.animation = 'none'
          simCounter++
        } else {
          // Calculate total for subsequent simulations
          const total = lastSelectedItems.reduce((sum, food) => {
            const unit = Number(food?.units || food?.unit || 1) || 1
            const base = parsePriceToNumber(food?.price)
            const itemTotal = base * unit
            return sum + itemTotal
          }, 0)
                    
          const statusText = total > 3.00 ? 'Unaffordable' : 'Affordable Meal'
          
          // Check if we need to retry
          if (total > 3.00 && attemptCount < keepChecking) {
            // Try again without stopping the spinner
            simulate(simulation, attemptCount + 1)
          } else {
            // Display final result
            renderSimulationResults({
              number: simCounter,
              statusText,
              total
            })
            const svg = simulateLoader.querySelector('svg')
            svg.style.animation = 'none'
            simCounter++
          }
        }
      }, simulationDelay)
    }
  }
  
  if (attemptCount === 0) {
    simulateNum.innerHTML = "Simulation #"+simCounter
    const svg = simulateLoader.querySelector('svg')
    svg.style.animation = 'spin 1.2s linear infinite'
  }
  runSim()
}

const startSimulation = function() {
  
  const statusEl = document.getElementById('simulationStatus')
  if (statusEl && statusEl.style.visibility === 'hidden') {
    statusEl.style.visibility = 'visible'
    setTimeout(() => { statusEl.style.opacity = '1' }, 10)
  } else if (statusEl && statusEl.style.visibility === 'visible') {
    // * Flicker effect for subsequent runs - toggle visibility
    statusEl.style.visibility = 'hidden'
    setTimeout(() => { 
      statusEl.style.visibility = 'visible'
    }, 30)
  }

  let availableFood = foodObj.filter(food => !food.unAvailable)
  
  // For first X simulations, exclude items in doNotCheck
  if (simCounter <= allowNegativePricesAfter) {
    availableFood = availableFood.filter(food => {
      return !doNotCheck[food.id]
    })
  }
  
  const shuffled = [...availableFood].sort(() => Math.random() - 0.5)
  const selectedItems = shuffled.slice(0, 4)

  const container = document.getElementById('allEmojis')
  const emojiItems = Array.from(container.getElementsByClassName('emoji-item'))

  // Reset all emoji items to default styling
  emojiItems.forEach(item => {
    const idx = Number(item.dataset.foodIndex)
    const food = foodObj[idx]
    const opacity = food && food.unAvailable === true ? '0.75' : '1'
    item.style.opacity = opacity
    item.classList.remove('highlight-red', 'highlight-green', 'highlight-blue', 'highlight-gold')
  })

  // Apply highlights to the selected items
  selectedItems.forEach((food, i) => {
    const foodIndex = foodObj.indexOf(food)
    if (foodIndex === -1) return
    const el = emojiItems[foodIndex]
    if (!el) return
    if (i === 0) el.classList.add('highlight-red')
    else if (i === 1) el.classList.add('highlight-green')
    else if (i === 2) el.classList.add('highlight-blue')
    else if (i === 3) el.classList.add('highlight-gold')
    el.style.opacity = '1'
  })

  displaySelectedItems(selectedItems)
  
  // Store selected items for later use
  return selectedItems
}

const displaySelectedItems = function(items) {
  for (let i = 0; i < 4; i += 1) {
    const pill = document.getElementById(`item${i + 1}`)

    const food = items[i]
    pill.innerHTML = ''

    const unit = food.units || food.unit || 1
    const priceValue = food.price

    let priceDisplay
    if (typeof priceValue === 'number' && typeof unit === 'number' && unit > 1) {
      priceDisplay = `$${(priceValue * unit).toFixed(2)}`
    } else if (typeof priceValue === 'number') {
      priceDisplay = `$${priceValue.toFixed(2)}`
    } else if (typeof priceValue === 'string') {
      priceDisplay = priceValue
    } else {
      priceDisplay = 'N/A'
    }

    const noteHTML = food.note ? `<span class="food-note">${food.note}</span>` : ''
    
    pill.innerHTML = `
      <img src="${food.url}" alt="${food.name}" style="width: 24px; height: 24px;">
      <span class="food-name">${food.name}</span>
      <span class="food-price">${priceDisplay}</span>
      ${noteHTML}
    `
  }
}

const forceSimulation = function(simulation) {
  // Get food objects by id from simulation.food array
  const selectedItems = simulation.food.map(id => foodObj.find(f => f.id === id)).filter(Boolean)
  highlightSelectedItems(selectedItems)
  displaySelectedItems(selectedItems)

  // Compute total price
  const total = selectedItems.reduce((sum, food) => {
    const unit = Number(food?.units || food?.unit || 1) || 1
    const base = parsePriceToNumber(food?.price)
    return sum + base * unit
  }, 0)

  const statusText = total > 3.00 ? 'Unaffordable' : 'Affordable Meal'

  renderSimulationResults({
    number: simulation.simulationNum,
    statusText,
    total
  })
}

const highlightSelectedItems = function(selectedItems) {
  const container = document.getElementById('allEmojis')
  const emojiItems = Array.from(container.getElementsByClassName('emoji-item'))
  // Reset all emoji items
  emojiItems.forEach(item => {
    item.style.opacity = '1'
    item.classList.remove('highlight-red', 'highlight-green', 'highlight-blue', 'highlight-gold')
  })
  // Highlight selected
  selectedItems.forEach((food, i) => {
    const foodIndex = foodObj.findIndex(f => f.id === food.id)
    if (foodIndex === -1) return
    const el = emojiItems[foodIndex]
    if (!el) return
    if (i === 0) el.classList.add('highlight-red')
    else if (i === 1) el.classList.add('highlight-green')
    else if (i === 2) el.classList.add('highlight-blue')
    else if (i === 3) el.classList.add('highlight-gold')
    el.style.opacity = '1'
  })
}



// 🔥 simulateResults

const renderSimulationResults = function({ number, statusText, total }) {
  const statusEl = document.getElementById('simulationStatus')
  const priceEl = document.getElementById('simulationPrice')
  const loaderEl = document.getElementById('simulateLoader')

  if (statusEl) {
    // statusEl.className = 'result-status'
    const textSpan = statusEl.querySelector('.result-status-text')
    if (textSpan) textSpan.textContent = statusText || 'Affordable Meal'
    // Toggle icons based on affordability
    const xs = statusEl.querySelectorAll('.icon-x')
    const checks = statusEl.querySelectorAll('.icon-check')
    if (statusText === 'Unaffordable') {
      xs.forEach(el => { el.style.display = 'inline-block' })
      checks.forEach(el => { el.style.display = 'none' })
    } else {
      xs.forEach(el => { el.style.display = 'none' })
      checks.forEach(el => { el.style.display = 'inline-block' })
    }
  }

  if (priceEl) {
    priceEl.textContent = formatUSD(total)
  }

  if (loaderEl) {
    const svg = loaderEl.querySelector('svg')
    if (svg) svg.style.animation = 'none'
  }
}

// Helpers for results rendering
const parsePriceToNumber = function(price) {
  if (typeof price === 'number' && !isNaN(price)) return price
  if (typeof price === 'string') {
    if (price.toLowerCase() === 'free') return 0
    const n = parseFloat(price.replace(/[^0-9.\-]/g, ''))
    return isNaN(n) ? 0 : n
  }
  return 0
}

const formatUSD = function(value) {
  const num = typeof value === 'number' && isFinite(value) ? value : 0
  try {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num)
  } catch (_) {
    return `$${num.toFixed(2)}`
  }
}