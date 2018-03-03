/* * * * * * GLOBAL VARS * * * * * */
var _windowWidth = window.innerWidth
var _activePage = 'landing'

window.onload = ()=>{
  _setPage(_activePage)
  _header(document.getElementById('header'))
  _background( document.getElementById('background'), _style() )
  // _backgroundOld( document.getElementById('backgroundOld'), _style() )
  _footer( document.getElementById('footer'), _style() )
  _landing( document.getElementById('landing'), _style() )
  document.body.style.opacity = 1
}

window.onresize = ()=>{
  if (_windowWidth != window.innerWidth) {
    _header(document.getElementById('header'))
  }
  _footerResize()
  _windowWidth = window.innerWidth
}
