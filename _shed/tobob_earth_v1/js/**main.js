/* * * * * * GLOBAL VARS * * * * * */
var _windowWidth = window.innerWidth
var _activePage = 'landing'
var _browsers = {};
var _projects_Data = {}
var _sheetDB = "https://spreadsheets.google.com/feeds/list/1lJHYKgkaQJrU9OVbODz-L9r7xT3w0FpzpQZVuv9pRK8/1/public/values?alt=json"

window.onload = ()=>{
  _header(document.getElementById('header'), _style() )
  _background( document.getElementById('background'), _style() )
  _footer( document.getElementById('footer'), _style() )
  _setPage(window.location.hash.split('#')[1], true)
  document.body.style.opacity = 1
  setTimeout(()=>{
    document.getElementById('index-background').style.opacity = 1
  },250)
  _browsers = {
    isOpera: (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
    isFirefox: typeof InstallTrigger !== 'undefined',
    isSafari: /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)),
    isIE: /*@cc_on!@*/false || !!document.documentMode,
    isEdge: !_browsers.isIE && !!window.StyleMedia,
    isChrome: !!window.chrome && !!window.chrome.webstore,
    isBlink: (_browsers.isChrome || _browsers.isOpera) && !!window.CSS
  }
}

window.onresize = ()=>{
  if (_windowWidth != window.innerWidth) {
    _header(document.getElementById('header'))
    switch(_activePage) {
      case 'projects':
        _projects_buildLines(_projects_Data.list)
        break;
      case 'contact':
        _contact( document.getElementById('contact'), _style(), true )
        break;
    }
  }
  _footerResize()
  _windowWidth = window.innerWidth
}
