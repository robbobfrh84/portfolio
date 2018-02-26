landing = (id, sheet)=>{
  setTimeout(()=>{ id.style.opacity = 1 },250)

  let h = window.innerHeight-80
  let w = window.innerWidth
  let lineW = 300

  move = (line)=>{
    line.style.left = line.x+'px'
    line.x+=line.speed
  }

  newValues = (line)=>{
    line.x = 0-lineW
    line.style.top = (random(0,((window.innerHeight-5)/25))*25-16)+'px'
    line.speed = random(3,10)
  }

  setTimeout(()=>{
    let lines = document.getElementsByClassName('line')
    for (const line of lines) {
      newValues(line)
      line.x = random(-1000,0)-lineW
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

  <div id='landingBox'>
    <div id='welcome'>
      Greetings, and Welcome to <br>
      Bob's Projects, Works and Builds!
    </div>

    <div class='landing-button' onClick='_SET_PAGE("projects")'>
      View Bob's Projects
    </div>

    <div class='landing-button'>
      Contact Info
    </div>
  </div>

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

  #welcome {
    font-size: 28px;
    font-family: Avenir;
    font-weight: 100;
    color: rgba(0,0,0,0.5);
  }

  .landing-button {
    font-size: 28px;
    font-family: Avenir;
    font-weight: 100;
    color: #444;
    background: url('gfx/paper_fibers.png');
    border: 2px dashed #bbb;
    box-shadow: inset 0px 0px 2px 2px rgba(0,0,0,0), 2px 2px 2px 0px rgba(0,0,0,0.5);
    border-radius: 50px;
    cursor: pointer;
    width: 300px;
    height: 36px;
    margin: auto;
    padding: 8px;
    transition: box-shadow 0.20s;
    margin-top: 35px;
  }

  .landing-button:hover {
    box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.5);
    transition: box-shadow 0.20s;
  }

  #landing {
    width: ${window.innerWidth+lineW}px;
    text-align: center;
    margin-right: 300px;
  }

  @media (min-height: 500px), and (-webkit-min-device-pixel-ratio: 1) {

    #landing {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      transition: opacity 2s;
    }

  }

  #landingBox {
    margin-top: 50px;
    margin-bottom: 200px;
  }


  .line {
    position: absolute;
    top: -10px;
    left: ${0-lineW}px;
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

// landing_resize = ()=>{
//   let landing = document.getElementById('landing')
//   landing.style.width = window.innerWidth+lineW;
// }
