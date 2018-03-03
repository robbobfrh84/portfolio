_dropdown = (id, sheet)=>{

  let btns = [
    { name: 'Projects', icon: '&#x2606;', id: 'projects' },
    { name: 'Contact', icon: '&#x260e;', id: 'contact' },
    { name: 'Log In', icon: '&#10167;', id: 'login' },
    { name: 'Home', icon: '&#x021D0;', id: 'landing' },
  ]
  const w = 200
  const h = btns.length*25+25+7
  let c = new canvas
  let vert
  let hor

  setLines = ()=>{
    vert = { s: 15, e: h, p: 15, r: 1.1 }
    hor = []
    for (var i = 0; i < btns.length+1; i++) {
      const x = _rand(1,5)
      const rate = (_rand(5,15)/100)+1
      hor.push({ s:x, e:w-_rand(1,5), p:x, y:((parseInt(i)+1)*25), r:rate })
    }
  }

  animateLines = (go)=>{
    c.clear()
    vert.p <= vert.e ? go = true : vert.p = vert.e
    vert.p = vert.p * vert.r
    c.line(10, vert.s, 10, vert.p,'blue',0.4)
    for (const l of hor) {
      l.p <= l.e ? go = true : l.p = l.e
      l.p = l.p*l.r
      c.line(l.s, l.y, l.p, l.y,'blue',0.4)
    }
    if (go) window.requestAnimationFrame(()=>{animateLines(false)})
  }

  buildCanvas = ()=>{
    c.new('dropdownCanvas', w, h)
    setLines()
    animateLines(1)
  }

  id.addEventListener('mouseleave', ()=>{
    _toggleDropdown('dropdown','dropdownIcon')
  })

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
      right: 15px;
      width: ${w}px;
      height: 25px;
      cursor: pointer;
      transition: opacity .25s; // make sure toggled display matches.
    }

    #dropdownCanvas {
      position: absolute;
      pointer-events: none;
    }

    #pageContainer {
      padding-top: 25px;
    }

    .page {
      padding-left: 15px;
      margin: 0px 5px 0px 5px;
      padding-top: 3px;
      height: 22px;
      letter-spacing: 2px;
      transition: background .25s;
    }

    .page:hover {
      background: rgba(0,0,0,0.1);
      transition: background .25s;
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
// _dropdown( document.getElementById('dropdown'), _style() )
