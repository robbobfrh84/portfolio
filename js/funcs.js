_style = () => {
  return document.createElement('style')
}

_rand = (min, max)=>{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

_toggleComponent = (id, btnId, icon)=>{
  var component = document.getElementById(id)
  if (!component.style.display || component.style.display === 'none') {
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

_checkDropDownState = (event,id)=>{
  if (event.toElement.id !== 'container') {
    let component = document.getElementById(id)
    component.style.opacity = 0
    setTimeout(()=>{ component.style.display = 'none' }, 250)
  }

}
