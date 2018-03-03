_background = (id, sheet)=>{

  let c = new canvas
  let lines = new Array(20).fill(0);
  let lineW = 300;
  let color;
  let colors = [["0.1","rgba(0,0,0,0)"],[ "0.8","blue"],["0.9","rgba(0,0,0,0)"]]

  move = ()=>{
    c.clear()
    c.resize(window.innerWidth, window.innerHeight)
    for (const l of lines) {
      l.p += l.r
      let color = c.lGrad({ gradient: [ l.p, 0, l.p+lineW, 0], colors: colors })
      c.line(l.p, l.y, l.p+lineW, l.y, color, 0.4)
      if (l.p > lineW+window.innerWidth) lines[l.id] = newValues(l.id)
    }
    window.requestAnimationFrame(move)
  }

  newValues = (id)=>{
    return { id: id,
      y: (_rand(0,((window.innerHeight-5)/25))*25-16),
      p: _rand(-1000,lineW*-1),
      r: _rand(3,10)
    }
  }

  buildCanvas = ()=>{
    c.new('backgroundCanvas', window.innerWidth, window.innerHeight)
    lines = lines.map( (v,i) => newValues(i) )
    setTimeout(()=>{ move() },1000)
  }

/* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    <canvas id='backgroundCanvas'></canvas>

  `
/* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #background {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1000000;
      transition: opacity 1s; // make sure toggled display matches.
    }

  `
/* --------------------------------------------------------- */
  buildCanvas()
  id.style.opacity = 1
  document.body.appendChild(sheet);
}
