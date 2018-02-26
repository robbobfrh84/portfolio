var window_width = window.innerWidth

window.onload = ()=>{
  linkIconsAnnimation()
  lineAnnimation()
  lettersAnnimation()
  landing( document.getElementById('landing'), document.createElement('style') )
  footer( document.getElementById('footer'), document.createElement('style') )
  document.body.style.opacity = 1
}

window.onresize = ()=>{
  if (window_width != window.innerWidth) {
    linkIconsAnnimation()
    lineAnnimation()
    lettersAnnimation()
  }
  footer_resize()
  window_width = window.innerWidth
}
