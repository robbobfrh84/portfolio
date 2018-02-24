footer = (id, sheet)=>{

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
    position: relative;
    bottom: 3px; left: 0;
    width: 100%;
    text-align: center;
    color: #444;
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
  document.body.appendChild(sheet);
}
footer( document.getElementById('footer'), document.createElement('style') )
