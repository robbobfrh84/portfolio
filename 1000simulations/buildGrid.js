const gridColumns = 17
const mobileGridColumns = 11

const buildEmojiGrid = function() {
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
}