_dropdown = (id, sheet)=>{

/* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

  <div id='container' onMouseleave="_toggleComponent('dropdown','dropdownIcon')">
    <div class="page" onClick="_setPage('projects')">
      Projects <div class='icon'> &#x2606; </div>
    </div>
    <div class="page" onClick="_setPage('contact')">
      Contact <div class='icon'> &#x260e; </div>
    </div>
    <div class="page" onClick="_setPage('landing')">
      Home <div class='icon'> &#x021D0; </div>
    </div>
  </div>

  `
/* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #dropdown {
      display: none;
      opacity: 0;
      position: absolute;
      top: 36px; right: 0px;
      width: 125px;
      height: 25px;
      cursor: pointer;
      transition: opacity .25s; // make sure toggled display matches.
    }

    #container {
      background-color: rgba(0,0,0,0.1);
      padding: 5px;
      padding-top: 14px;
    }

    .page {
      background: rgba(0,0,0,0.2);
      padding-left: 5px;
      margin-top: 5px;
    }

    .icon {
      float: right;
      padding-right: 5px;
    }

  `
/* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
_dropdown( document.getElementById('dropdown'), _style() )
