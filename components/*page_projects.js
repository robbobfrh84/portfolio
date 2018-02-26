projects = (id, sheet)=>{
  setTimeout(()=>{ id.style.opacity = 1 },250)
  console.log('from PROJECTS')

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    HEY LOOK IT'S BOB'S PROJECTS!

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #Page_Projects {
      opacity: 0
    }

  `
  /* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
