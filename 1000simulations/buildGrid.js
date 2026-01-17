
let currentItem = 1
window.currentItem = currentItem
let selectedFoods = [null, null, null, null]
window.selectedFoods = selectedFoods
const gridColumns = 17
const mobileGridColumns = 11

const buildEmojiGrid = function() {
  currentItem = 1 // Reset to 1 when grid is rebuilt
  window.currentItem = currentItem
  selectedFoods = [null, null, null, null] // Reset selected foods
  window.selectedFoods = selectedFoods
  const container = document.getElementById('allEmojis')
  container.innerHTML = ''
  container.className = 'emoji-grid'
  const isMobile = window.matchMedia('(max-width: 600px)').matches
  const columns = isMobile ? mobileGridColumns : gridColumns
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`

  const itemsHTML = foodObj.map((food, index) => {
    const opacity = food.unAvailable === true ? '0.75' : '1'
    return `
      <div class="emoji-item" data-food-index="${index}" style="opacity: ${opacity}">
        <img src="${food.url}" alt="${food.name}" title="${food.name}" class="emoji-img">
      </div>
    `
  }).join('')

  container.innerHTML = itemsHTML

  // Add click event listeners to each emoji button
  const buttons = container.querySelectorAll('.emoji-item')
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      const index = this.getAttribute('data-food-index')
      emojiPressed(Number(index))
    })
  })
}

const emojiPressed = function(index) {
  reSimulate(true)

  // Get the selected food object
  const food = foodObj[index]
  // Store the food in the current slot
  selectedFoods[window.currentItem - 1] = food

  // Repopulate all pills
  for (let i = 0; i < 4; i++) {
    const pill = document.getElementById(`item${i + 1}`)
    const f = selectedFoods[i]
    if (pill) {
      if (f) {
        const unit = f.units || f.unit || 1
        const priceValue = f.price
        let priceDisplay
        if (typeof priceValue === 'number' && typeof unit === 'number' && unit > 1) {
          priceDisplay = `$${(priceValue * unit).toFixed(2)} (${unit}x)`
        } else if (typeof priceValue === 'number') {
          priceDisplay = `$${priceValue.toFixed(2)}`
        } else {
          priceDisplay = priceValue || ''
        }
        const noteHTML = f.note ? `<span class="food-note">${f.note}</span>` : ''
        pill.innerHTML = `
          <img src="${f.url}" alt="${f.name}" style="width: 24px; height: 24px;">
          <span class="food-name">${f.name}</span>
          <span class="food-price">${priceDisplay}</span>
          ${noteHTML}
        `
      } else {
        pill.innerHTML = ''
      }
    }
  }

  // Calculate total price for selected foods
  let total = 0
  for (let i = 0; i < 4; i++) {
    const f = selectedFoods[i]
    if (f) {
      const unit = Number(f.units || f.unit || 1) || 1
      let price = 0
      if (typeof f.price === 'number' && !isNaN(f.price)) {
        price = f.price
      } else if (typeof f.price === 'string') {
        if (f.price.toLowerCase() === 'free') price = 0
        else {
          const n = parseFloat(f.price.replace(/[^0-9.\-]/g, ''))
          price = isNaN(n) ? 0 : n
        }
      }
      total += price * unit
    }
  }

  // Update simulationStatusContainer
  const statusEl = document.getElementById('simulationStatus')
  const priceEl = document.getElementById('simulationPrice')
  if (statusEl) {
    // Set text
    const textSpan = statusEl.querySelector('.result-status-text')
    const xs = statusEl.querySelectorAll('.icon-x')
    const checks = statusEl.querySelectorAll('.icon-check')
    if (total > 3.00) {
      if (textSpan) textSpan.textContent = 'Unaffordable'
      xs.forEach(el => { el.style.display = 'inline-block' })
      checks.forEach(el => { el.style.display = 'none' })
    } else {
      if (textSpan) textSpan.textContent = 'Affordable Meal'
      xs.forEach(el => { el.style.display = 'none' })
      checks.forEach(el => { el.style.display = 'inline-block' })
    }
    statusEl.style.visibility = 'visible'
    statusEl.style.opacity = '1'
  }
  if (priceEl) {
    priceEl.textContent = formatUSD ? formatUSD(total) : `$${total.toFixed(2)}`
  }

  // Advance currentItem, wrap to 1 after 4
  window.currentItem = window.currentItem >= 4 ? 1 : window.currentItem + 1
}