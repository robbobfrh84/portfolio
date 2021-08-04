function _setHash(hash) {
  window.location.hash = hash
}

window.onhashchange = function() {
  if (window.location.hash !== '#'+_activePage) {
    _setPage(window.location.hash.split('#')[1])
  }
}

function _setPage(newPage, initial) {
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

  switch(_activePage) {

    case 'landing':
      _landing( document.getElementById('landing'))
      break;

    case 'contact':
      _contact( document.getElementById('contact'))
      break;

    case 'about':
      _about( document.getElementById('about'))
      break;

    case 'showcase':
      if (!_showcase_Data.fulfilled) {
        _get(_sheetDB)
          .then(payload => _showcase(
            JSON.parse(payload),
            document.getElementById('showcase')
          ))
          .catch(error => {
            console.log("request error :", error)
            console.log('trying again')
            _get(_sheetDB)
          })
      } else {
        _showcase_buildLines(_showcase_Data.list)
      }
      break;

  }
}
