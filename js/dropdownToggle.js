_toggleDropdown = (id, btnId)=>{

  var component = document.getElementById(id)
  if (!component.style.display || component.style.display === 'none') {
    _dropdown( document.getElementById('dropdown'), _style() )
    component.style.display = 'block'
    setTimeout(()=>{ component.style.opacity = 1 },10)
  } else {
    component.style.opacity = 0
    setTimeout(()=>{ component.style.display = 'none' }, 250)
  }

  btn1 = (id)=>{
    if (id.style.opacity !== '1') {
      id.style.backgroundColor = 'rgba(0,0,0,0.1)'
      id.style.opacity = 1
    } else {
      id.style.backgroundColor = 'rgba(0,0,0,0)'
      id.style.opacity = 0.5
    }
  }

  if (btnId === 'dropdownIcon') {
    btn1(document.getElementById(btnId));
  }

}

_checkDropdownState = (event, id, btnId, toElm)=>{
  if (typeof event.toElement === 'undefined') {
    toElm = event.explicitOriginalTarget.id
  } else {
    toElm = event.toElement.id
  }
  if (toElm !== 'pageContainer') {
    const component = document.getElementById(id)
    const btn = document.getElementById(btnId)
    setTimeout(()=>{
      let hover = document.querySelectorAll( ":hover" )
      hover = hover[hover.length-1].id
      if (hover !== 'pageContainer' && hover) {
        component.style.opacity = 0
        setTimeout(()=>{ component.style.display = 'none' }, 250)
        btn.style.backgroundColor = 'rgba(0,0,0,0)'
        btn.style.opacity = 0.5
      }
    }, 250)

  }
}
