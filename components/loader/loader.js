function _loader(id) {

  const container = document.createElement('div')
  container.id = 'container'
  id.appendChild(container)
  document.body.style.cursor = 'wait'

  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      const div = document.createElement('div')
      div.className = 'bits'
      div.id = 'bit'+i+j
      container.appendChild(div)
    }
    container.innerHTML += `<br>`
  }

  function randomLight(cnt) {
    const fadeTo = 0.5
    const delay = _rand(200,800)
    const bit = document.getElementById('bit'+_rand(0,7)+_rand(0,7))
    if (bit) {
      bit.style.backgroundColor = _rgbR()
      bit.style.transition = 'transition: opacity '+(delay/1000)+'s;'
      if (!bit.style.opacity || bit.style.opacity === '0') {
        window.requestAnimationFrame(()=>{
          bit.style.opacity = fadeTo
        })
        setTimeout(()=>{
          bit.style.opacity = 0
        },delay*2)
      }
      if (cnt < 15) {
        cnt++
        setTimeout(()=>{ randomLight(cnt) },50)
      } else {
        setTimeout(()=>{ randomLight() },150)
      }
    }
  }

  window.requestAnimationFrame(()=>{
    id.style.opacity = 1;
    const w = window.innerHeight
    const c = document.getElementById('container')
    c.style.marginTop = (w-c.offsetHeight)/4+'px'
    randomLight(0)
  })

}

function _loaderOn(callback) {
  _loader( document.getElementById('loader'))
  setTimeout(()=>{
    if (callback) callback()
  },500)
}

function _loaderOff(callback) {
  var loader = document.getElementById('loader')
  loader.style.opacity = 0
  setTimeout(()=>{
    document.body.style.cursor = 'initial'
    while (loader.hasChildNodes()){
      loader.removeChild(loader.lastChild);
    }
    if (callback) callback()
  },500)
}
