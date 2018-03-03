_backgroundOld = (id, sheet)=>{
  id.style.opacity = 1

  let h = window.innerHeight-80
  let w = window.innerWidth

  move = (line)=>{
    line.style.left = line.x+'px'
    line.x+=line.speed
  }

  newValues = (line)=>{
    line.x = 0-_lineW
    line.style.top = (_rand(0,((window.innerHeight-5)/25))*25-16)+'px'
    line.speed = _rand(3,10)
  }

  setTimeout(()=>{
    let lines = document.getElementsByClassName('line')
    for (const line of lines) {
      newValues(line)
      line.x = _rand(-1000,0)-_lineW
    }
    setInterval(()=>{
      for (const line of lines) {
        if (line.x >= window.innerWidth || parseInt(line.style.top) > window.innerHeight ) {
          newValues(line)
        }
        move(line)
      }
    },20)
  },1000)

/* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

  <div class='line'></div><div class='line'></div><div class='line'></div>
  <div class='line'></div><div class='line'></div><div class='line'></div>
  <div class='line'></div><div class='line'></div><div class='line'></div>
  <div class='line'></div><div class='line'></div><div class='line'></div>
  <div class='line'></div><div class='line'></div><div class='line'></div>

  `
/* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

  .line {
    position: absolute;
    top: -10px;
    left: ${0-_lineW}px;
    line-height: 0px;
    width: ${_lineW}px;
    height: 2px;
    background: linear-gradient(to right,
      rgba(0,0,0,0),
      rgba(100,149,237,0.2) 95%,
      rgba(0,0,0,0)
    );
    transition: background 0.5s;
    z-index: -1000000;
  }

  `
/* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
