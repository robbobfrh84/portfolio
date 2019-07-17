function _showcase(payload, id) {

  const data = payload.feed.entry
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

    <div id='showcase-title'> Showcase </div>

    <div id="showcaseStartOver" onClick='_setPage("landing")'>
      &lt;
      <span> START OVER</span>
    </div>

    <div id='showcase-container'></div>

  `

  data.map(x => { // prep api data for ui dispaly
    if (!x.gsx$hide.$t) {
      x.columnSpan = 2

      if (x.gsx$github.$t !== '') { // GITHUB LINK
        x.githubName = `
          <th class='links bg'>
            <a href='${x.gsx$github.$t}'>
              <span>github</span>
              <img class="icon" src="gfx/git.svg"/>
            </a>
          </th>
        `
        x.columnSpan++
      } else { x.githubName = "" }

      if (x.gsx$codepen.$t !== '') { // CODEPEN LINK
        x.codepenName = `
          <th class='links bg'>
          <a href='${x.gsx$codepen.$t}'>
            <span>codepen</span>
            <img class="icon" src="gfx/codepen.png"/>
          </a>
          </th>
        `
        x.columnSpan++
      } else { x.codepenName = "" }

      if (x.gsx$live.$t !== '') { // LIVE LINK
        x.liveName = `
          <th class='links bg'>
            <a href='${x.gsx$live.$t}'>
              <span>live</span>
              &#x1f517
            </a>
          </th>
        `
        x.columnSpan++
      } else { x.liveName = "" }

      if (x.columnSpan === 2) {
         x.filler = `<th class='bg'></th>`
         x.columnSpan++
      } else { x.filler = ""}

      if (x.gsx$info.$t === '') x.gsx$info.$t = `
        <em> ... No info available for this project.</em>
      `

      if (x.gsx$image.$t === '') x.gsx$image.$t = 'gfx/noImage.png'

      const imageObj = new Image()
      imageObj.src = x.gsx$image.$t
      imageObj.addEventListener('load', function(){
        const elm = document.getElementById('showcase-image-'+x.gsx$name.$t)
        elm.src = x.gsx$image.$t
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

  for (const d of data) {
    if (!d.gsx$hide.$t) {
      showcase.innerHTML += `

      <div class='showcase-box'>
        <canvas class='showcase-canvas'></canvas>
        <table class='showcase-table'>
          <tr>

            <th class='showcase-name bg'> ${d.gsx$name.$t} </th>

            ${d.filler}

            ${d.githubName}

            ${d.codepenName}

            ${d.liveName}

            <th class='showcase-image-container bg' rowspan='2'>
              ${d.liveName ? '<a href='+d.gsx$live.$t+'>' : ''}
                <img class='showcase-image' id='showcase-image-${d.gsx$name.$t}'>
              ${d.liveName ? '</a>' : ''}
            </th>

          </tr>

          <tr>
            <td class='showcase-info bg' colspan="${d.columnSpan-1}">
              <div class='showcase-info-container' name='${d.gsx$name.$t}'>
                &bull; ${d.gsx$info.$t}
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

function _showcase_buildLines(data) {
  const canvases = document.getElementsByClassName('showcase-canvas')
  let c = []
  for (var i = 0; i < canvases.length; i++) {
    const w = canvases[i].parentElement.clientWidth
    const h = canvases[i].parentElement.clientHeight
    canvases[i].id = 'showcase-canvas-'+data[i].gsx$name.$t
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
