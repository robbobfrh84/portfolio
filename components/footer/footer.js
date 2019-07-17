function _footer(id) {
  setTimeout(()=>{ id.style.opacity = 1 },250)

  var year = new Date().getFullYear()

/* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `
    <table class='footer-table'>
      <tr>
        <th class="footerLine left"></th>
        <th id='footer-copy'>
          <span class='footerBull'>&bull;</span>
          &copy; ${year} Bob Main
          <span class='footerBull'>&bull;</span>
        </th>
        <th class="footerLine"></th>
      </tr>
    </table>
  `

/* --------------------------------------------------------- */
  window.requestAnimationFrame(()=>{_footerResize(true)})
}

function _footerResize(setTimer) {
  let footer = document.getElementById('footer')
  if (window.innerHeight >= document.body.clientHeight+30) {
    footer.style.position = 'absolute'
    footer.style.bottom = '0px'
  } else {
    footer.style.position = 'relative'
    footer.style.bottom = '-15px'
  }
  if (setTimer) {
    window.requestAnimationFrame(()=>{ // this checks if the content has been edited dynamically to make sure footer sits on the bottom.
      setTimeout(()=>{
        _footerResize(setTimer)
      },500)
    })
  }
  
}
