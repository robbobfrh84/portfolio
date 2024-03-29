_toggleDropdown = (id, btnId)=>{

  var component = document.getElementById(id)
  if (!component.style.display || component.style.display === 'none') {
    _dropdown( document.getElementById('dropdown'), _style() )
    component.style.display = 'block'
    component.style.pointerEvents = 'all'
    setTimeout(()=>{ component.style.opacity = 1 },10)
  } else {
    component.style.opacity = 0
    component.style.pointerEvents = 'none'
    setTimeout(()=>{ component.style.display = 'none' }, 250)
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
      if (hover[hover.length-1]) hover = hover[hover.length-1].id
      if (hover !== 'pageContainer' && hover) {
        component.style.opacity = 0
        setTimeout(()=>{ component.style.display = 'none' }, 250)
      }
    }, 250)
  }
}
