_setPage = (newPage, initial)=>{
  if (!newPage) newPage = 'landing'
  if (initial) _activePage = ''
  if (newPage !== _activePage) {
    if (_activePage) {
      let oldPage = document.getElementById(_activePage)
      // setTimeout(()=>{ oldPage.style.opacity = 0  },200)
      window.requestAnimationFrame(()=>{
        oldPage.style.opacity = 0
        window.requestAnimationFrame(()=>{
          oldPage.style.display = 'none'
          _footerResize()
        })
        // setTimeout(()=>{
        //   oldPage.style.display = 'none';
        //   //_footerResize()
        // },2000)
      })

    }

    let page = document.getElementById(newPage)
    //page.style.opacity = 0
    //setTimeout(()=>{ page.style.opacity = 1 },260)
    // setTimeout(()=>{ page.style.opacity = 1 },200)
    // setTimeout(()=>{ page.style.display = 'block' }, 100)
    window.requestAnimationFrame(()=>{
      page.style.display = 'block'
      window.requestAnimationFrame(()=>{
        page.style.opacity = 1
      })
    })

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
