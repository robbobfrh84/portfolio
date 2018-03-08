_dropdown = (id, sheet)=>{

  let btns = [
    { name: 'Projects', icon: '&#x2606;', id: 'projects' },
    { name: 'Contact', icon: '&#x260e;', id: 'contact' },
    { name: 'Home', icon: '&#x021D0;', id: 'landing' },
    { name: 'Log In', icon: '&#10167;', id: 'login' },
  ]
  const bH = 45
  const w = 250
  const h = btns.length*bH+bH+7
  let c = new canvas
  let colors = [["0","rgba(0,0,0,0)"],["1","rgba(0,0,0,0.05)"]]
  let color
  let vert
  let hor

  setLines = ()=>{
    vert = { s: 15, e: h, p: 15, r: 1.1 }
    hor = []
    for (var i = 1; i < btns.length+1; i++) {
      const x = _rand(1,5)
      const rate = (_rand(5,15)/100)+1
      hor.push({ s:x, e:w-5-x, p:x, y:((parseInt(i)+1)*bH), r:rate })
    }
  }

  animateLines = (go)=>{
    c.clear()
    vert.p <= vert.e ? go = true : vert.p = vert.e
    vert.p = vert.p * vert.r
    c.rec(10,2,w-25,bH-2,color)
    c.cir(10,12,3,'rgba(0,0,255,0.4)')
    c.cir(w-15,12,3,'rgba(0,0,255,0.4)')
    c.line(10, vert.s, 10, vert.p,'blue',0.4)
    c.line(w-15, vert.s, w-15, vert.p,'blue',0.4)
    c.line(5, bH, w-10, bH,'blue',0.4)

    for (const l of hor) {
      l.p <= l.e ? go = true : l.p = l.e
      l.p = l.p*l.r
      l.p = l.p > l.e ? l.e : l.p
      c.line(l.s, l.y, l.p, l.y,'blue',0.4)
    }

    if (go) window.requestAnimationFrame(()=>{animateLines(false)})
  }

  buildCanvas = ()=>{
    c.new('dropdownCanvas', w, h)
    color = c.lGrad({ gradient: [ 0, 0, 0, bH-2], colors: colors })
    setLines()
    animateLines(1)
  }

  buildBtns = ()=>{
    const pages = document.getElementById('pageContainer')
    for (const btn of btns) {
      pages.innerHTML += `

        <div class="page" onClick="_setPage('${btn.id}')">
          ${btn.name} <div class='icon'> ${btn.icon} </div>
        </div>

      `
    }
  }

  id.addEventListener('mouseleave', (event)=>{
    if (event.toElement.id !== 'dropdownIcon') {
      _toggleDropdown('dropdown','dropdownIcon')
    }
  })

/* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    <canvas id='dropdownCanvas'></canvas>
    <div id='pageContainer'></div>

  `
/* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #dropdown {
      display: none;
      opacity: 0;
      position: absolute;
      top: 34px;
      right: ${_windowWidth%25+10}px;
      width: ${w}px;
      height: ${bH}px;
      cursor: pointer;
      z-index: 1;
      transition: opacity .25s; // make sure toggled display matches.
    }

    #dropdownCanvas {
      position: absolute;
      pointer-events: none;
    }

    #pageContainer {
      padding-top: ${bH}px;
    }

    .page {
      font-size: 20px;
      font-family: Avenir;
      font-weight: 100;
      color: rgba(0,0,0,0.8);
      padding-left: 15px;
      margin: 0px 15px 0px 10px;
      padding-top: 9px;
      height: ${bH-9}px;
      letter-spacing: 2px;
      background: #eee;
      transition: background .3s, box-shadow .3s;
    }

    .page:hover {
      box-shadow: 0px 0px 5px inset rgba(0,0,55,0.5);
      background: #dfdfdf;
      transition: background .3s, box-shadow .3s;
    }

    .icon {
      float: right;
      padding-right: 15px;
    }

  `
/* --------------------------------------------------------- */
  buildBtns()
  buildCanvas()
  document.body.appendChild(sheet);
}
