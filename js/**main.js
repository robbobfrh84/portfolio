/* * * * * * GLOBAL VARS * * * * * */
var _windowWidth = window.innerWidth
var _activePage = 'landing'

window.onload = ()=>{
  _setPage(window.location.hash.split('#')[1], true)
  _header(document.getElementById('header'))
  _background( document.getElementById('background'), _style() )
  _footer( document.getElementById('footer'), _style() )
  document.body.style.opacity = 1
}

window.onresize = ()=>{
  if (_windowWidth != window.innerWidth) {
    _header(document.getElementById('header'))
    switch(_activePage) {
      case 'projects':
        _projects( document.getElementById('projects'), _style() )
        break;
      case 'contact':
        _contact( document.getElementById('contact'), _style() )
        break;
    }
  }
  _footerResize()
  _windowWidth = window.innerWidth
}
