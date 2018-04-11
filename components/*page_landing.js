_landing = (id, sheet)=>{

  buildLines = ()=>{

    const canvases = document.getElementsByClassName('landing-canvas')
    let c2 = []
    for (var i = 0; i < canvases.length; i++) {
      const w = canvases[i].parentElement.clientWidth
      const h = canvases[i].parentElement.clientHeight+10
      canvases[i].id = 'landing-canvas'+i
      c2[i] = new canvas
      c2[i].new(canvases[i].id, w, h)
      c2[i].lineGrow(0,5,w,5,'rgba(100,149,237,0.6)',2,2,1.03)
      c2[i].lineGrow(w,h-4,0,h-4,'rgba(100,149,237,0.6)',2,2,1.03)
      c2[i].lineGrow(4,0,4,h,'rgba(100,149,237,0.6)',2,0.25,1.03)
      c2[i].lineGrow(w-4,h,w-4,0,'rgba(100,149,237,0.6)',2,0.25,1.03)
      const index = i
      setTimeout(()=>{
        c2[index].animate()
      },(250*i)+1000)
    }

  }

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

  <div id='landingBox'>

    <div id='landing-welcome'>
      Greetings, and Welcome to <br>
      Bob's Projects, Works and Builds!
    </div>

    <div class='landing-button' onClick='_setPage("projects")'>
      <div class='landing-button-title'> View Bob's Projects </div>
      <canvas class='landing-canvas'></canvas>

    </div>

    <div class='landing-button' >
      <div class='landing-button-title' onClick='_setPage("contact")'> Contact Info </div>
      <canvas class='landing-canvas'></canvas>
    </div>

  </div>

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

  #landing {
    display: none;
    transition: opacity 2s;
  }

  #landing-welcome {
    text-align: center;
    font-size: 28px;
    font-family: Avenir;
    font-weight: 100;
    color: rgba(0,0,0,0.5);
  }

  .landing-button {
    position: relative;
    width: 290px;
    margin: auto;
    transition: box-shadow 0.20s;
  }

  .landing-button-title {
    position: relative;
    left: 5px;
    top: 5px;
    width: 260px;
    font-size: 24px;
    font-family: Avenir;
    font-weight: 100;
    color: #666;
    text-align: center;
    margin-top: 30px;
    padding: 10px;
    letter-spacing: 2px;
    cursor: pointer;
    box-shadow: inset 0px 0px 10px rgba(255,255,255,1);
    background: #dfdfdf;
    transition: background .3s, box-shadow .3s;
  }

  .landing-button-title:hover {
    background: #eee;
    box-shadow: inset 0px 0px 10px rgba(0,0,0,0.4);
    transition: background .3s, box-shadow .3s;
  }

  .landing-canvas {
    position: absolute;
    top: 0px; left 0px;
    pointer-events: none;
  }

  #landingBox {
    padding-top: 20vh;
    padding-bottom: 50px;
  }

  @media (max-height: 500px) {
    #landingBox {
      padding-top: 8vh;
    }
  }

  `
  /* --------------------------------------------------------- */
  window.requestAnimationFrame(buildLines)
  document.body.appendChild(sheet);
}
// _landing( document.getElementById('landing'), _style() )
