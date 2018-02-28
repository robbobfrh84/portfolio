_setPage = (newPage)=>{
  if (!newPage) newPage = 'landing'
  if (newPage !== _activePage) {
    let oldPage = document.getElementById(_activePage)
    oldPage.style.display = 'none'
    setTimeout(()=>{ oldPage.style.opacity = 0 },10)

    let page = document.getElementById(newPage)
    page.style.opacity = 1
    setTimeout(()=>{ page.style.display = 'block' }, 250)

    _activePage = newPage
    _setHash(_activePage)
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
