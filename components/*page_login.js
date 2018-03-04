_login = (id, sheet)=>{

/* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    Component: login
    <button onClick='_setPage("projects")'>Projects</button>
    <button onClick='_setPage("contact")'>Contact</button>
    <button onClick='_setPage("landing")'>Home</button>

  `
/* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #login {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.3);
      transition: opacity 2s; // make sure toggled display matches.
    }

  `
/* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
_login( document.getElementById('login'), _style() )
