var page = 'landing'

_SET_PAGE = (newPage)=>{
  console.log('Old Page:', page)
  console.log('New page:', newPage)
  projects(document.getElementById(newPage), document.createElement('style'))
}
