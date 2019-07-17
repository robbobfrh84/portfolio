function _background(id) {

  let c = new Canvas
  let lines = new Array(20).fill(0);
  let lineW = 300;
  let color;
  let colors = [["0.1","rgba(0,0,0,0)"],[ "0.8","rgba(0,0,255,0.7)"],["0.9","rgba(0,0,0,0)"]]

  function move() {
    c.clear()
    c.resize(window.innerWidth, window.innerHeight-30)
    for (const l of lines) {
      l.p += l.r
      let color = c.lGrad({ gradient: [ l.p, 0, l.p+lineW, 0], colors: colors })
      c.line(l.p, l.y, l.p+lineW, l.y, color, 0.4)
      if (l.p > lineW+window.innerWidth) lines[l.id] = newValues(l.id)
    }
    window.requestAnimationFrame(move)
  }

  function newValues(id) {
    return { id: id,
      y: (_rand(0,((window.innerHeight-5)/50))*50-16),
      p: _rand(-1000,lineW*-1),
      r: _rand(3,10)
    }
  }

  function buildCanvas() {
    c.new('backgroundCanvas', window.innerWidth, window.innerHeight-30)
    lines = lines.map( (v,i) => newValues(i) )
    setTimeout(()=>{ move() },1000)
  }

/* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    <canvas id='backgroundCanvas'></canvas>

  `
/* --------------------------------------------------------- */
  buildCanvas()
  id.style.opacity = 1
}
