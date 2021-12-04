function _showcase(data, id) {
  data = data.filter( row => row.show )

  let imagesLoaded = []

  function buildOneLine(elm, delay) {
    elm.style.opacity = 0
    setTimeout(()=>{
      const w = elm.parentElement.clientWidth
      const h = elm.parentElement.clientHeight
      c = new Canvas
      c.new(elm.id, w, h)
      c.lineGrow(0,5,w,5,'rgba(0,0,255,0.3)',2,5,1.03)
      c.lineGrow(w,h-5,0,h-5,'rgba(0,0,255,0.3)',2,5,1.03)
      c.lineGrow(5,0,5,h,'rgba(0,0,255,0.3)',2,0.25,1.03)
      c.lineGrow(w-5,h,w-5,0,'rgba(0,0,255,0.3)',2,0.25,1.03)
      elm.style.opacity = 1
      c.animate()
    },delay)
  }

  toggleMore = (event) => { // ⚠ KEEP AS ARROW!!!! it binds the event for click
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
    const itsCanvas = document.getElementById('showcase-canvas-'+parent.getAttribute('name'))
    buildOneLine(itsCanvas, 500)
  }

  function checkInfoHeight() {
    const infos = document.getElementsByClassName('showcase-info-container')
    for (const c of infos) {
      if (c.scrollHeight > parseInt(infoHeight)+10) {
        c.innerHTML = `
          <div class='showcase-more-button' onClick="toggleMore(event)">... more</div>
        `+c.innerHTML
      }
    }
  }

  setTimeout(()=>{showcaseStartOver.style.opacity = 0.6},500)

  /* ----------------------- < HTML > ------------------------ */

  const infoHeight = "35px"
  id.innerHTML = `

    <div class='showcase-title'> Showcase </div>

    <div id="showcaseStartOver" onClick='_setPage("landing")'>
      &lt;
      <span> START OVER</span>
    </div>

    <div id='showcase-container'></div>

  `

  data.map( row => { // prep api data for ui dispaly
    // if (!x.c[1] && x.c[0] && x.c[0].v !== "-") {
    if (row.show) {

      row.columnSpan = 2

      if (row.github) { // GITHUB LINK
        row.githubName = `
          <th class='links bg'>
            <a href='${row.github}' target="_blank">
              <span>github</span>
              <img class="icon" src="gfx/git.svg"/>
            </a>
          </th>
        `
        row.columnSpan++
      } else { row.githubName = "" }

      if (row.codepen) { // CODEPEN LINK
        row.codepenName = `
          <th class='links bg'>
          <a href='${row.codepen}' target="_blank">
            <span>codepen</span>
            <img class="icon" src="gfx/codepen.png"/>
          </a>
          </th>
        `
        row.columnSpan++
      } else { row.codepenName = "" }

      if (row.live) { // LIVE LINK
        row.liveName = `
          <th class='links bg'>
            <a href='${row.live}' target="_blank">
              <span>live</span>
              &#x1f517
            </a>
          </th>
        `
        row.columnSpan++
      } else { row.liveName = "" }

      if (row.columnSpan === 2) {
         row.filler = `<th class='bg'></th>`
         row.columnSpan++
      } else { row.filler = ""}

      if (!row.info) ow.info = "<em> ... No info available for this project.</em>"

      if (!row.image) row.image = 'gfx/noImage.png'

      const imageObj = new Image()
      row.image = row.image.split('"')[1]
      imageObj.src = row.image || ""
      imageObj.addEventListener('load', function(){
        const elm = document.getElementById('showcase-image-'+row.name)
        elm.src = row.image
        elm.style.opacity = 1
        setTimeout(function(){
          elm.style.height = '70px'
          elm.style.width = '70px'
        }, _rand(10,1000))
      })
    }
  })

  _showcase_Data.list = data
  const showcase = document.getElementById('showcase-container')

  for (const row of data) {

    if (row.name === '-') {
      showcase.innerHTML += `
        <br><br>
        <div class='showcase-title'>
          &bull; <em> ${row.info} </em> &bull;
        </div>
        <br>
      `
    } else if (row.show) {
      showcase.innerHTML += `

      <div class='showcase-box'>
        <canvas class='showcase-canvas'></canvas>
        <table class='showcase-table'>
          <tr>

            <th class='showcase-name bg'> ${row.name} </th>

            ${row.filler}

            ${row.githubName}

            ${row.codepenName}

            ${row.liveName}

            <th class='showcase-image-container bg' rowspan='2'>
              ${row.liveName ? '<a href='+row.live+' target = "_blank">' : ''}
                <img class='showcase-image' id='showcase-image-${row.name}'>
              ${row.liveName ? '</a>' : ''}
            </th>

          </tr>

          <tr>
            <td class='showcase-info bg' colspan="${row.columnSpan-1}">
              <div class='showcase-info-container' name='${row.name}'>
                ${row.info}
              </div>
            </td>
          </tr>

        </table>
      </div>
      `
    }

  }

  if (data) {
    window.requestAnimationFrame(()=>{
      _showcase_buildLines(data)
      checkInfoHeight()
      _showcase_Data.fulfilled = true
      const boxes = document.getElementsByClassName('showcase-box')
      setTimeout(()=>{
        for (const box of boxes) {
          box.style.opacity = 1;
        }
      },250)
    })
  }

}

function _showcase_buildLines(alldata) {
  const canvases = document.getElementsByClassName('showcase-canvas')
  let c = []
  let data = alldata.filter( row => row.name !== "-" )
  for (var i = 0; i < canvases.length; i++) {
    if (data[i] && data[i].name != "name") {
      const w = canvases[i].parentElement.clientWidth
      const h = canvases[i].parentElement.clientHeight
      canvases[i].id = 'showcase-canvas-'+data[i].name
      c[i] = new Canvas
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
}
