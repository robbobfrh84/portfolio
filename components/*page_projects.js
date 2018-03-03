_projects = (id, sheet)=>{

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    Component: projects

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #projects {
      position: absolute;
      top: 80;
      display: none;
      transition: opacity 2s;
    }

  `
  /* --------------------------------------------------------- */
  //id.style.opacity = 0
  document.body.appendChild(sheet);
}
_projects( document.getElementById('projects'), _style() )
