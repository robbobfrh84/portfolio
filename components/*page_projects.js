_projects = (id, sheet)=>{

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    Component: projects

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #projects {
      display: none;
      transition: opacity 1s;
      padding: 50px;
      background-color: #ccc;
    }

  `
  /* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
_projects( document.getElementById('projects'), _style() )
