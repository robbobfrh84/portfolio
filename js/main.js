var window_width = window.innerWidth

window.onload = ()=>{
  document.body.style.display = ''
  if (window.innerHeight >= document.body.scrollHeight) document.getElementById('footer').style.position = 'absolute'
  else document.getElementById('footer').style.position = 'relative'
  linkIconsAnnimation()
  lineAnnimation()
  lettersAnnimation()
}

window.onresize = ()=>{
  if (window_width != window.innerWidth) {
    linkIconsAnnimation()
    lineAnnimation()
    lettersAnnimation()
  }
  landing_resize()
  window_width = window.innerWidth
}
