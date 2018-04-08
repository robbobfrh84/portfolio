_setHash = (hash) => {
  window.location.hash = hash
}

window.onhashchange = function() {
  if (window.location.hash !== '#'+_activePage) {
    _setPage(window.location.hash.split('#')[1])
  }
}

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

  switch(_activePage) {

    case 'login':
      _login( document.getElementById('login'), _style() )
      break;

    case 'contact':
      _contact( document.getElementById('contact'), _style() )
      break;

    case 'landing':
      _landing( document.getElementById('landing'), _style() )
      break;

    case 'projects':
      if (!_projects_Data.fulfilled) {
        _get('tobob-space-read-projects','tobob-earth','projects')
          .then(payload => _projects(payload, document.getElementById('projects'),_style()))
          .catch(err => alert('! Problem retrieving data !\n\n'+err))
      } else {
        _projects_buildLines(_projects_Data.list)
      }
      break;

  }
}
