_contact = (id, sheet)=>{
  id.style.opacity = 1

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    Component: contact

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #contact {
      display: none;
      transition: opacity 1s;
    }

  `
  /* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
_contact( document.getElementById('contact'), _style() )
