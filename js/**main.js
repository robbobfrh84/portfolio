/* * * * * * GLOBAL VARS * * * * * */
var _windowWidth = window.innerWidth
var _activePage = 'landing'

window.onload = ()=>{
  _setPage(window.location.hash.split('#')[1], true)
  _header(document.getElementById('header'))
  _background( document.getElementById('background'), _style() )
  //   _landing( document.getElementById('landing'), _style() )
  _footer( document.getElementById('footer'), _style() )

  // setTimeout(()=>{
  //   _footer( document.getElementById('footer'), _style() )
  // },2500)

  document.body.style.opacity = 1
}

window.onresize = ()=>{
  if (_windowWidth != window.innerWidth) {
    _header(document.getElementById('header'))
  }
  _footerResize()
  _windowWidth = window.innerWidth
}
