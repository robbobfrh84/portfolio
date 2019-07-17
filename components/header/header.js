function _header(id) {

  const sqW = 30

  function lettersAnnimation() {
    let title = document.getElementById('earthToBob')
    title.style.display = 'block'
    title.style.fontSize = (sqW-3)+'px'
    title.style.paddingLeft = (sqW-7)+'px'

    let ltr = title.children
    for (const l of ltr) {
      l.style.width = (sqW-2)+'px'
      l.style.height = (sqW-2)+'px'
      l.style.lineHeight = (sqW-2)+'px'
      l.style.top = sqW > 25 ? '0px' : '1px'

      const delay = _rand(1500,3500)
      let r = _rand(0,200)
      let b = _rand(175,255)
      setTimeout(()=>{ l.style.color = '#555' }, delay)
      setTimeout(()=>{ l.style.backgroundColor = 'rgba('+r+',170,237,0.2)' },delay+1000)
      setTimeout(()=>{ l.style.backgroundColor = 'rgba(0,0,0,0)' },delay+1500)
      r = _rand(0,200)
      b = _rand(175,255)
      setTimeout(()=>{ l.style.backgroundColor = 'rgba('+r+',170,237,0.1)' },delay+2500)
      setTimeout(()=>{ l.style.backgroundColor = 'rgba(0,0,0,0)' },delay+3500)
    }
  }

  function lineAnnimation() {
    const wW = window.innerWidth
    ctx.canvas.width = wW
    var lines = new HeaderLineDraw
    lines.addLine({
      hor: true, speed: 2, maxSpeed: 30, ramp: 1.05,
      x1: 10, y1: 10, x2: 15, y2: 10, ex: -10, ey: 10
    })
    lines.addLine({
      hor: true, speed: 1.5, maxSpeed: 25, ramp: 1.05,
      x1: 8, y1: sqW+10, x2: 10, y2: sqW+10, ex: -8, ey: sqW+10
    })
    for (var i = sqW; i <= wW-15; i+=sqW) {
      lines.addLine({
        hor: false, speed: 0.5, maxSpeed: 1, ramp: 1,
        x1: i, y1: 3, x2: i, y2: 3, ex: i, ey: (sqW+20)+_rand(1,5)
      })
    }
    lines.draw()
  }

  class HeaderLineDraw {

    constructor(x, y, start, end, vertical) {
      this.lines = []
    }

    draw(stop = true) {
      const wW = window.innerWidth
      ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
      for (const i in this.lines) {
        if (this.lines[i].hor) {
          this.lines[i].x2 += this.lines[i].speed
          if (this.lines[i].speed < this.lines[i].maxSpeed) this.lines[i].speed *= this.lines[i].ramp
          if (this.lines[i].x2 < wW + this.lines[i].ex) {
            this.line(this.lines[i].x1,this.lines[i].y1,this.lines[i].x2,this.lines[i].y2, 'blue', 0.4)
            stop = false
          } else {
            this.line(this.lines[i].x1,this.lines[i].y1,wW+this.lines[i].ex,this.lines[i].ey, 'blue', 0.4)
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
    <div id='homeBtn' onClick='_setPage("landing")'></div>
  `

/* --------------------------------------------------------- */
  let ctx = document.getElementById("headerCanvas").getContext("2d")
  lineAnnimation()
  lettersAnnimation()
}
