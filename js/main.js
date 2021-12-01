/* * * * * * GLOBAL VARS * * * * * */
let _windowWidth = window.innerWidth
let _activePage = 'landing'
let hasLanded = false
let _browsers = {};
let _showcase_Data = {}
var _searchObject = { defaultData: "json" }

/* Gasup ⛽️ 🚀 instantiation */
const deployId = "AKfycbx2I_khrgqjxp0mJWYhk46mm3q4HF_rKzlVap1EweR1A3V2ybvByhxxnbW1uROD2vdF"
const id = "1h7AQcnPrSPL9kwPwcBwkRRHB_VIdJ-NszRY1eYJHf24"
const gasup = new Gasup({ deployId, id })


window.onload = ()=>{
  _header(document.getElementById('header'))
  _background( document.getElementById('background'))
  _footer( document.getElementById('footer'))
  _build_SearchObject()
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

window.onresize = ()=>{ _resize_screen() }
window.onorientationchange = ()=>{ setTimeout(()=>{_resize_screen()},100) }

function _resize_screen() {
  if (_windowWidth != window.innerWidth) {
    _header(document.getElementById('header'))
    switch(_activePage) {
      case 'showcase':
        _showcase_buildLines(_showcase_Data.list)
        break;
      case 'contact':
        _contact( document.getElementById('contact'), true )
        break;
      case 'about':
        _about( document.getElementById('about'), true )
        break;
    }
  }
  _footerResize()
  _windowWidth = window.innerWidth
}

function _build_SearchObject() {
  if (window.location.search[0] === "?") {
    const keyValue = window.location.search.split("?")[1].split("&")
    keyValue.forEach( kv => {
      [key, value] = kv.split("=")
      _searchObject[key] = value
    })
  }
  if (!_searchObject.data) {
    _searchObject.data = _searchObject.defaultData
  }
}
