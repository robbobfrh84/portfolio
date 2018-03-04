_contact = (id, sheet)=>{

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    Component: contact

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #contact {
      // position: absolute;
      // top: 80;
      display: none;
      transition: opacity 1s;
      padding: 50px;
      background-color: red;
    }

  `
  /* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
_contact( document.getElementById('contact'), _style() )
