_projects = (id, sheet, data = _data.projects)=>{

  buildLines = ()=>{
    const canvases = document.getElementsByClassName('projects-canvas')
    let c = []
    for (var i = 0; i < canvases.length; i++) {
      const w = canvases[i].parentElement.clientWidth
      const h = canvases[i].parentElement.clientHeight
      canvases[i].id = 'canvas'+i
      c[i] = new canvas
      c[i].new(canvases[i].id, w, h)
      c[i].lineGrow(0,5,w,5,'rgba(0,0,255,0.3)',2,5,1.03)
      c[i].lineGrow(w,h-5,0,h-5,'rgba(0,0,255,0.3)',2,5,1.03)
      c[i].lineGrow(5,0,5,h,'rgba(0,0,255,0.3)',2,0.25,1.03)
      c[i].lineGrow(w-5,h,w-5,0,'rgba(0,0,255,0.3)',2,0.25,1.03)
      const index = i
      setTimeout(()=>{
        c[index].animate()
      },250*i)
    }
  }

  /* ----------------------- < HTML > ------------------------ */

  id.innerHTML = `

  <div id='projects-title'> Projects </div>
  <div id='projects-container'></div>

  `

  const projects = document.getElementById('projects-container')
  for (const d of data) {

    projects.innerHTML += `

    <div class='projects-box'>
      <canvas class='projects-canvas'></canvas>
      <div class='projects-name'> ${d.name} </div>
      <div class='projects-link'> ${d.link} </div>
      <div class='projects-role'> ${d.role} </div>
      <div class='projects-icon'> ${d.icon} </div>
      <div class='projects-info'> ${d.info} </div>
    </div>

    `

  }

  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #projects {
      display: none;
      transition: opacity 1s;
      margin-top: 30px;
    }

    #projects-title {
      text-align: center;
      font-size: 28px;
      font-family: Avenir;
      color: rgba(0,0,0,0.5);
    }

    .projects-box {
      position: relative;
      margin: 20px 20px 20px 20px;
      background-color: rgba(0,0,0,0.1);
    }

    .projects-name, .projects-link, .projects-role,
    .projects-info, .projects-icon {
      display: inline-block;
      padding: 10px;
    }

    .projects-canvas {
      position: absolute;
      top: 0; left 0;
    }

  `
  /* --------------------------------------------------------- */
  window.requestAnimationFrame(buildLines)
  document.body.appendChild(sheet);
}
// _projects( document.getElementById('projects'), _style() )
