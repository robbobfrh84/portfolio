_header = (id)=>{

  lettersAnnimation = ()=>{
    let title = document.getElementById('earthToBob')
    title.style.display = 'block'
    let ltr = title.children
    for (const l of ltr) {
      const delay = _rand(1500,3500)
      let r = _rand(0,200)
      let b = _rand(175,255)
      setTimeout(()=>{ l.style.color = '#444' }, delay)
      setTimeout(()=>{ l.style.backgroundColor = 'rgba('+r+',170,237,0.2)' },delay+1000)
      setTimeout(()=>{ l.style.backgroundColor = 'rgba(0,0,0,0)' },delay+1500)
      r = _rand(0,200)
      b = _rand(175,255)
      setTimeout(()=>{ l.style.backgroundColor = 'rgba('+r+',170,237,0.1)' },delay+2500)
      setTimeout(()=>{ l.style.backgroundColor = 'rgba(0,0,0,0)' },delay+3500)
    }
  }

  linkIconsAnnimation = ()=>{
    const wW = window.innerWidth
    const adj = parseInt(window.innerWidth/25)*25
    let icn = document.getElementsByClassName('linkIcon')
    icn[0].style.left = (adj-241)+'px'; icn[0].p = [0,22,(adj-238),25,1500]
    icn[1].style.left = (adj-201)+'px'; icn[1].p = [0,22,(adj-188),23,1900]
    icn[2].style.left = (adj-151)+'px'; icn[2].p = [0,22,(adj-138),23,1800]
    icn[3].style.left = (adj-112)+'px'; icn[3].p = [0,22,(adj-88),35,2100]
    icn[4].style.left = (adj-62) +'px'; icn[4].p = [0,22,(adj-38),23,1600]
    for (const c of icn) {
      c.style.display = 'none'
      setTimeout(()=>{ iconGrow(c, c.p[0], c.p[1], c.p[2], c.p[3], wW) },c.p[4])
    }
  }

  iconGrow = (elm, width, top, left, max, windowWidth)=>{
    if (window.innerWidth == windowWidth) {
      let gitAnime = setInterval(()=>{
        elm.style.display = 'block'
        width++
        top = top - 0.5
        left = left - 0.5
        elm.style.width = width+'px'
        elm.style.top = top+'px'
        elm.style.left = left+'px'
        if (width >= max) clearInterval(gitAnime)
      },10)
    }
  }

  lineAnnimation = ()=>{
    ctx.canvas.width = window.innerWidth
    var lines = new HeaderLineDraw
    lines.addLine({
      hor: true, speed: 2, maxSpeed: 30, ramp: 1.05,
      x1: 10, y1: 10, x2: 15, y2: 10, ex: -10, ey: 10
    })
    lines.addLine({
      hor: true, speed: 1.5, maxSpeed: 25, ramp: 1.05,
      x1: 8, y1: 35, x2: 10, y2: 35, ex: -8, ey: 35
    })
    for (var i = 25; i <= window.innerWidth-15; i+=25) {
      lines.addLine({
        hor: false, speed: 0.5, maxSpeed: 1, ramp: 1,
        x1: i, y1: 3, x2: i, y2: 3, ex: i, ey: _rand(46,50)
      })
    }
    lines.draw()
  }

  class HeaderLineDraw {
    constructor(x, y, start, end, vertical) {
      this.lines = []
    }

    draw(stop = true) {
      ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
      for (const i in this.lines) {
        if (this.lines[i].hor) {
          this.lines[i].x2 += this.lines[i].speed
          if (this.lines[i].speed < this.lines[i].maxSpeed) this.lines[i].speed *= this.lines[i].ramp
          if (this.lines[i].x2 < window.innerWidth + this.lines[i].ex) {
            this.line(this.lines[i].x1,this.lines[i].y1,this.lines[i].x2,this.lines[i].y2, 'blue', 0.4)
            stop = false
          } else {
            this.line(this.lines[i].x1,this.lines[i].y1,window.innerWidth+this.lines[i].ex,this.lines[i].ey, 'blue', 0.4)
          }
        }
        else {
          this.lines[i].y2 += this.lines[i].speed
          if (this.lines[i].speed < this.lines[i].maxSpeed) this.lines[i].speed *= this.lines[i].ramp
          if (this.lines[i].y2 < this.lines[i].ey) {
            this.line(this.lines[i].x1,this.lines[i].y1,this.lines[i].x2,this.lines[i].y2, 'blue', 0.4)
            stop = false
          } else {
            this.line(this.lines[i].x1,this.lines[i].y1,this.lines[i].ex,this.lines[i].ey, 'blue', 0.4)
          }
        }

      }
      if (!stop) window.requestAnimationFrame(this.draw.bind(this));

    }
    line(sx,sy,ex,ey,sS,lW) {
      ctx.beginPath()
      ctx.moveTo(sx,sy)
      ctx.lineTo(ex,ey)
      ctx.strokeStyle = sS
      ctx.lineWidth = lW
      ctx.stroke()
      ctx.fill()
    }
    addLine(line) {
      this.lines.push({ hor: line.hor,
        x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2, ex: line.ex, ey: line.ey,
        speed: line.speed, maxSpeed: line.maxSpeed, ramp: line.ramp
      })
    }
  }

/* ----------------------- < HTML > ------------------------ */

  id.innerHTML = `

  <canvas id="headerCanvas" height='100'></canvas>
  <div id='earthToBob' class='bg'>
    <div>E</div><div>A</div><div>R</div><div>T</div><div>H</div><div>&bull;</div><div>T</div><div>O</div><div>&bull;</div><div>B</div><div>O</div><div>B</div>
  </div>
  <a href="http://www.tobob.earth"><div id='bobBtn'></div></a>
  <div id='homeBtn' onClick='_setPage("landing")'></div>
  <a href="https://github.com/robbobfrh84"><img class='linkIcon h1' id='gitIcon' src="gfx/git2.svg"></a>
  <a href="https://codepen.io/robbobfrh84"><img class='linkIcon h1' id='codepenIcon' src="gfx/codepenicon.svg"></a>
  <a href="https://www.linkedin.com/in/bobmain49"><img class='linkIcon h1' id='linkedInIcon' src="gfx/linkedinIcon.svg"></a>
  <a href="https://twitter.com/BobMain49"><img class='linkIcon h1' id='twitterIcon' src="gfx/twitericon.svg" ></a>
  <img id='dropdownIcon' class='linkIcon' src="gfx/dropdownIcon2.png"
    onClick="_toggleComponent('dropdown','dropdownIcon')"
    onMouseleave="_checkDropDownState(event, 'dropdown')">

  `
/* --------------------------------------------------------- */
  let ctx = document.getElementById("headerCanvas").getContext("2d")
  linkIconsAnnimation()
  lineAnnimation()
  lettersAnnimation()
}
