_projects = (id, sheet)=>{
  // id.style.opacity = 1

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    Component: projects

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #projects {
      display: none;
      transition: opacity .25s;
    }

  `
  /* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
_projects( document.getElementById('projects'), _style() )
