_projects = (id, sheet)=>{

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    Component: projects

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #projects {
      // position: absolute;
      // top: 80;
      display: none;
      transition: opacity 1s;
      padding: 50px;
      background-color: #ccc;
    }

  `
  /* --------------------------------------------------------- */
  setInterval(()=>{ id.innerHTML += ` ${ new Date() }<br><hr>` },500)
  document.body.appendChild(sheet);
}
_projects( document.getElementById('projects'), _style() )
