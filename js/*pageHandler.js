_setPage = (newPage, initial)=>{
  if (!newPage) newPage = 'landing'
  if (initial) _activePage = ''
  if (newPage !== _activePage) {
    if (_activePage) {
      let oldPage = document.getElementById(_activePage)
      oldPage.style.opacity = 0
      window.requestAnimationFrame(()=>{
        oldPage.style.display = 'none'
        _footerResize()
        window.scrollTo(0, 0);
      })
    }
    let page = document.getElementById(newPage)
    page.style.display = 'block'
    window.requestAnimationFrame(()=>{
      page.style.opacity = 1
    })
    _activePage = newPage
    _setHash(_activePage)
  }
  const headerPages = document.getElementById('header-pages')
  if (_activePage === 'login') {
    headerPages.classList.add('blurr')
  } else {
    headerPages.classList.remove('blurr')
  }
}

_setHash = (hash) => {
  window.location.hash = hash
}

window.onhashchange = function() {
  if (window.location.hash !== '#'+_activePage) {
    _setPage(window.location.hash.split('#')[1])
  }
}
