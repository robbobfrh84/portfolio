_projects = (payload, id, sheet, data = payload.feed.entry)=>{

  let imagesLoaded = []
  data.map(x => { // prep api data for ui dispaly
    if (x.gsx$info.$t === '') x.gsx$info.$t = `
      <em> ... No info available for this project.</em>
    `
    if (x.gsx$link.$t !== '') {
      x.linkName = `
        <th class='projects-link projects-bg'>
          <a class='projects-link-a' href='${x.gsx$link.$t}'>link &#x1f517</a>
        </th>
      `
      x.columnSpan = 3
    } else {
      x.linkName = ''
      x.columnSpan = 2
    }

    if (x.gsx$image.$t === '') x.gsx$image.$t = 'gfx/noImage.png'

    const imageObj = new Image()
    imageObj.src = x.gsx$image.$t
    imageObj.addEventListener('load', function(){
      const elm = document.getElementById('projects-image-'+x.gsx$name.$t)
      elm.src = x.gsx$image.$t
      elm.style.opacity = 1
      elm.style.height = '70px'
      elm.style.width = '70px'
    })

  })


  buildOneLine = (elm, delay)=>{
    elm.style.opacity = 0
    setTimeout(()=>{
      const w = elm.parentElement.clientWidth
      const h = elm.parentElement.clientHeight
      c = new canvas
      c.new(elm.id, w, h)
      c.lineGrow(0,5,w,5,'rgba(0,0,255,0.3)',2,5,1.03)
      c.lineGrow(w,h-5,0,h-5,'rgba(0,0,255,0.3)',2,5,1.03)
      c.lineGrow(5,0,5,h,'rgba(0,0,255,0.3)',2,0.25,1.03)
      c.lineGrow(w-5,h,w-5,0,'rgba(0,0,255,0.3)',2,0.25,1.03)
      elm.style.opacity = 1
      c.animate()
    },delay)
  }

  toggleMore = function(event) {
    const more = event.target.lastChild
    const parent = event.target.parentElement
    if (more.data === '... more') {
      more.data = '... less'
      parent.style.maxHeight = parent.scrollHeight+'px'
      parent.style.paddingTop = '10px'
      parent.style.paddingBottom = '20px'
    } else {
      more.data = '... more'
      parent.style.maxHeight = infoHeight
      parent.style.paddingTop = '4px'
      parent.style.paddingBottom = '3px'
    }
    const itsCanvas = document.getElementById('projects-canvas-'+parent.getAttribute('name'))
    //setTimeout(()=>{
    buildOneLine(itsCanvas, 500)
    //},500)
  }

  checkInfoHeight = ()=>{
    const infos = document.getElementsByClassName('projects-info-container')
    for (const c of infos) {
      if (c.scrollHeight > parseInt(infoHeight)+10) {
        c.innerHTML = `
          <div class='projects-more-button' onClick="toggleMore(event)">... more</div>
        `+c.innerHTML
      }
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
      <table class='project-table'>
        <tr>
          <th class='projects-name projects-bg'> ${d.gsx$name.$t} </th>
          <th class='projects-role projects-bg'>
            <div class='projects-role-title'> Role: </div> ${d.gsx$role.$t}
          </th>
          ${d.linkName}
          <th class='projects-image-container projects-bg' rowspan='2'>
          ${d.linkName ? '<a href='+d.gsx$link.$t+'>' : ''}
            <img class='projects-image' id='projects-image-${d.gsx$name.$t}'>
          ${d.linkName ? '</a>' : ''}
          </th>
        </tr>
        <tr>
          <td class='projects-info projects-bg' colspan="${d.columnSpan}">
            <div class='projects-info-container' name='${d.gsx$name.$t}'>
              &bull; ${d.gsx$info.$t}
            </div>
          </td>
        </tr>
      </table>
    </div>

    `

  }
  /* ---------------------- { style } ------------------------ */
  const infoHeight = '35px'
  sheet.innerHTML = `

    #projects {
      opacity: 0;
      margin-top: 30px;
      transition: opacity 1s;
    }

    #projects-title {
      text-align: center;
      font-size: 28px;
      font-family: Avenir;
      color: rgba(0,0,0,0.5);
    }

    .projects-box {
      opacity: 0;
      position: relative;
      max-width: 900px;
      margin: auto;
      margin-top: 20px;
      transition: opacity 1s;
    }

    .project-table {
      width: 100%;
      padding: 8px;
    }

    .projects-bg {
      background-color: rgba(0,0,0,0.1);
    }

    .projects-name {
      width: 45%;
      height: 30px;
      font-size: 24px;
      font-weight: 100;
      background-color: rgba(0,0,0,0.05);
      text-align: center;
      padding: 2px 5px 0px 5px;
      word-break: break-word;
    }

    .projects-role {
      text-align: left;
      min-width: 90px;
      font-size: 16px;
      font-weight: 500;
      padding: 2px 5px 0px 10px;
    }

    .projects-role-title {
      color: #666;
      font-size: 12px;
      padding-left: -8px;
      font-weight: 900;
    }

    .projects-link {
      width: 70px;
      min-width: 30px;
      padding: 2px 5px 0px 5px;
    }

    .projects-link-a {
      text-decoration: none;
      font-size: 20px;
      font-weight: 300;
    }

    .projects-info-container {
      text-align: left;
      font-size: 15px;
      max-height: ${infoHeight};
      overflow: hidden;
      padding: 3px 5px 2px 10px;
      /* ⚠️ WARNING: changing transition time will effect javascript. */
      transition: max-height .5s, padding-top .5s, padding-bottom .5s;
    }

    .projects-image-container {
      width: 77px;
      min-width: 77px;
      height: 80px;
      padding: 7px 5px 1px 6px;
    }

    .projects-image {
      opacity: 0;
      width: 1px;
      height: 1px;
      // float: right;
      box-shadow: 0px 0px 3px 1.5px rgba(0,0,0,0.5);
      transition: opacity 1s, width .5s, height .5s;
    }

    .projects-more-button {
      position: absolute;
      right: 102px;
      bottom: 10px;
      background-color: rgba(255,255,255,0.5);
      color: rgb(150,0,0);
      font-size: 18px;
      font-weight: 500;
      width: 120px;
      text-align: right;
      padding-right: 30px;
      height: 20px;
      line-height: 18px;
      background: linear-gradient(to right, rgba(255,255,255,0), #ddd 25%);
      cursor: pointer;
    }

    .projects-canvas {
      position: absolute;
      top: 0; right 0px;
      pointer-events: none;
    }

    @media only screen and (max-width: 600px) {
      .projects-name {
        font-size: 20px;
      }
    }

  `
  /* --------------------------------------------------------- */
  if (data) {
    window.requestAnimationFrame(()=>{
      _projects_buildLines(data)
      checkInfoHeight()
      _projects_Data.fulfilled = true
      const boxes = document.getElementsByClassName('projects-box')
      setTimeout(()=>{
        for (const box of boxes) {
          box.style.opacity = 1;
        }
      },250)


      // Promise.all(imagesLoaded).then(function(images) {
      //   _projects_buildLines(data)
      //   checkInfoHeight()
      //   for (const img of images) {
      //     const elm = document.getElementById('projects-image-'+img.name)
      //     elm.src = img.link
      //   }
      //   _projects_Data.fulfilled = true
      // });
    })
  }
  document.body.appendChild(sheet);
}
// _projects( document.getElementById('projects'), _style() )

_projects_buildLines = (data)=>{
  const canvases = document.getElementsByClassName('projects-canvas')
  let c = []
  for (var i = 0; i < canvases.length; i++) {
    const w = canvases[i].parentElement.clientWidth
    const h = canvases[i].parentElement.clientHeight
    canvases[i].id = 'projects-canvas-'+data[i].gsx$name.$t
    c[i] = new canvas
    c[i].new(canvases[i].id, w, h)
    c[i].lineGrow(0,5,w,5,'rgba(0,0,255,0.3)',2,5,1.03)
    c[i].lineGrow(w,h-5,0,h-5,'rgba(0,0,255,0.3)',2,5,1.03)
    c[i].lineGrow(5,0,5,h,'rgba(0,0,255,0.3)',2,0.25,1.03)
    c[i].lineGrow(w-5,h,w-5,0,'rgba(0,0,255,0.3)',2,0.25,1.03)
    const index = i
    setTimeout(()=>{
      c[index].animate()
    },750+(100*i))
  }
}
