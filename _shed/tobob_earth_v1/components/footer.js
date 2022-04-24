_footer = (id, sheet)=>{
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
/* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

  #footer {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    margin-top: 50px;
    color: #555;
    transition: opacity 2s;
  }
  .footer-table {
    width: 100%;
  }
  #footer-copy {
    width: 190px;
    font-weight: 400;
    font-family: avenir;
  }
  .footerLine {
    position: relative;
    top: -11px;
    right: 15px;
    border-bottom: 2px solid rgba(100,149,237,0.5);
  }
  .left {
    left: 15px;
  }
  .footerBull {
    color: cornflowerblue;
  }

  `
/* --------------------------------------------------------- */
  document.body.appendChild(sheet)
  window.requestAnimationFrame(()=>{_footerResize(true)})
}

_footerResize = (setTimer)=>{
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
