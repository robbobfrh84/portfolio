_setPage = (newPage)=>{
  if (!newPage) newPage = 'landing'
  let oldPage = document.getElementById(_activePage)
  oldPage.style.opacity = 0
  oldPage.style.display = 'none'

  let page = document.getElementById(newPage)
  page.style.opacity = 1
  page.style.display = 'block'

  console.log('oldPage: ', _activePage, ',  activePage: ', newPage)
  _activePage = newPage
  _setHash(_activePage)
}

_setHash = (hash) => {
  window.location.hash = hash
}

window.onhashchange = function() {
  if (window.location.hash !== '#'+_activePage) {
    _setPage(window.location.hash.split('#')[1])
  }
}
