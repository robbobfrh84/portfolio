function _landing(id) {

  function buildLines(){

    delay = !hasLanded ? 1 : 20

    const canvases = document.getElementsByClassName('landing-canvas')
    let c2 = []
    for (var i = 0; i < canvases.length; i++) {
      const color = canvases[i].getAttribute("color")
      const w = canvases[i].parentElement.clientWidth
      const h = canvases[i].parentElement.clientHeight+10
      canvases[i].id = 'landing-canvas'+i
      c2[i] = new Canvas
      c2[i].new(canvases[i].id, w, h)
      c2[i].lineGrow(0,5,w,5,color,2,2,1.03)
      c2[i].lineGrow(w,h-4,0,h-4,color,2,2,1.03)
      c2[i].lineGrow(4,0,4,h,color,2,0.25,1.03)
      c2[i].lineGrow(w-4,h,w-4,0,color,2,0.25,1.03)
      const index = i
      setTimeout(()=>{
        c2[index].animate()
      }, ((250*i)+1000) / delay )
    }

    // delay Welcome Message
    setTimeout(()=>{welcomeMessage.style.opacity = 1},100 / delay)

    // buttons
    setTimeout(()=>{showecaseBtn.style.opacity = 1}, 1500  / delay)
    setTimeout(()=>{contactBtn.style.opacity = 1}, 2000  / delay)
    setTimeout(()=>{aboutBtn.style.opacity = 1}, 2500  / delay)

    // delay link icons
    setTimeout(()=>{
      setTimeout(()=>{gitIcon.style.width = "40px"}, 500  / delay)
      setTimeout(()=>{codepenIcon.style.width = "40px"}, 0)
      setTimeout(()=>{linkedInIcon.style.width = "40px"}, 250  / delay)
      setTimeout(()=>{twitterIcon.style.width = "40px"}, 750  / delay)
    },1500  / delay)

    // delay easterEgg
    setTimeout(()=>{eggIcon.style.opacity = 0.4},2000 / delay)

    hasLanded = true

  }

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

  <div class="landing-container">


    <div id="welcomeMessage">
      Greetings, and welcome!
    </div>


    <div class='link-box'>

      <div class='landing-button'>
        <div
          class="landing-button-title"
          id="showecaseBtn"
          onClick='_setPage("showcase")'
        >
          Showcase
          <div style="font-size: 12px;"> What Bob's been up to </div>
        </div>
        <canvas class='landing-canvas'
          color="rgba(100,149,237,0.6)"
        ></canvas>
      </div>

      <div class='landing-button'>
        <div
          class="landing-button-title"
          id="contactBtn"
          onClick='_setPage("contact")'
        >
          Contact
          <div style="font-size: 12px;"> Let's get in touch! </div>
        </div>
        <canvas class='landing-canvas'
          color="rgba(178,34,34,0.4)"
        ></canvas>
      </div>

      <div class='landing-button'>
        <div
          class='landing-button-title'
          id="aboutBtn"
          onClick='_setPage("about")'
        >
          ...about Bob
          <div style="font-size: 12px;"> A short story </div>
        </div>
        <canvas class='landing-canvas'
          color="rgba(218,165,32,0.7)"
        ></canvas>
      </div>

    </div>


    <div class="social-link-box">

      <a href="https://github.com/robbobfrh84">
        <img id='gitIcon' src="gfx/git.svg">
      </a>

      <a href="https://codepen.io/robbobfrh84">
        <img id='codepenIcon' src="gfx/codepen.png">
      </a>

      <a href="https://www.linkedin.com/in/bobmain49">
        <img src="gfx/linkedinIcon.svg" id='linkedInIcon'>
      </a>

      <a href="https://twitter.com/BobMain49">
        <img id='twitterIcon' src="gfx/twitterIcon.png" >
      </a>

    </div>

  </div>


  <a href="./2/captaindashboard/index.html">
    <img id='eggIcon' src="gfx/easterEgg.svg">
  </a>

  `
  /* --------------------------------------------------------- */
  window.requestAnimationFrame(buildLines)
}
