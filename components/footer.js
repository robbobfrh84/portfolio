_footer = (id, sheet)=>{
  setTimeout(()=>{ id.style.opacity = 1 },250)

  var year = new Date().getFullYear()

/* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

  <div id="footerGrid">

    <div class="footerLine left"></div>
    <div>
      <span class='footerBull'>&bull;</span>
      &copy; ${year} Bob Main
      <span class='footerBull'>&bull;</span>
    </div>
    <div class="footerLine"></div>

  </div>

  `
/* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

  #footer {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    text-align: center;
    color: #444;
    transition: opacity 2s;
  }
  #footerGrid {
    display: grid;
    width: 100%;
    grid-template-columns: 0.5fr 155px 0.5fr;
  }
  .footerLine {
    position: relative;
    top: 5px;
    height: 2px;
    background-color: rgba(100,149,237,0.5);
    text-align: center;
    margin: 5px;
    margin-right: 15px;
  }
  .left {
    margin-left: 15px;
    margin-right: 5px;
  }
  .footerBull {
    color: cornflowerblue;
  }

  `
/* --------------------------------------------------------- */
  document.body.appendChild(sheet)
  window.requestAnimationFrame(_footerResize)
}

_footerResize = ()=>{
  let footer = document.getElementById('footer')

  let footerGrid = document.getElementById('footerGrid')

  // console.log(window.innerHeight, document.documentElement.scrollHeight+30, footer)

  if (window.innerHeight >= document.body.clientHeight+30) {
    footer.style.position = 'absolute'
  } else {
    footer.style.position = 'relative'
  }

  // if (footerGrid) {
  //   footer.style.top = (document.documentElement.scrollHeight-footerGrid.offsetHeight)+'px'
  //   window.requestAnimationFrame(()=>{
  //     setTimeout(()=>{
  //       footer.style.top = 0
  //       _footerResize()
  //     },250)
  //   })
  //}

  window.requestAnimationFrame(()=>{
    setTimeout(()=>{
      _footerResize()
    },500)
  })

}
//window.requestAnimationFrame(_footerResize)
