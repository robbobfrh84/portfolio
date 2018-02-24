landing = (id, sheet)=>{

  let h = window.innerHeight-80
  let w = window.innerWidth
  let lineW = 300

  move = (line)=>{
    line.style.left = line.x+'px'
    line.x+=line.speed
  }

  newValues = (line)=>{
    line.x = 0-lineW
    line.style.top = (random(0,((h+75)/25))*25-16)+'px'
    line.speed = random(3,10)
  }

  setTimeout(()=>{
    let lines = document.getElementsByClassName('line')
    for (const line of lines) {
      newValues(line)
      line.x = random(-1000,0)-lineW
    }
    animation = setInterval(()=>{
      for (const line of lines) {
        if (line.x >= window.innerWidth) {
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

  <div id='project-button'>
    View Bob's Projects
  </div>

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

  #project-button {
    font-size: 28px;
    font-family: Avenir;
    font-weight: 100;
    color: #444;
    // background-color: #dfdcdc;
    background: url('gfx/paper_fibers.png');
    // border: 2px dotted rgba(100,149,237,0.5);
    border: 2px dashed #bbb;
    box-shadow: inset 0px 0px 2px 2px rgba(0,0,0,0), 2px 2px 2px 0px rgba(0,0,0,0.5);
    border-radius: 50px;
    cursor: pointer;
    width: 300px;
    height: 36px;
    margin: auto;
    padding: 8px;
    transition: box-shadow 0.20s;
  }

  #project-button:hover {
    box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.5);
    transition: box-shadow 0.20s;
  }

  #landing {
    width: 100%;
    height: ${h}px;
    text-align: center;
    margin-top: ${(h/2)-40}px;
  }

  .line {
    position: absolute;
    top: -10px;
    line-height: 0px;
    width: ${lineW}px;
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
landing( document.getElementById('landing'), document.createElement('style') )

landing_resize = ()=>{
  let landing = document.getElementById('landing')
  landing.style.height = window.innerHeight-80+'px'
  landing.style.marginTop = ((window.innerHeight/2)-80)+'px'
}
