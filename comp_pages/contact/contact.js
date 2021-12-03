function _contact(id, resize) {

  function animateMorse() {
    window.requestAnimationFrame(()=>{
      const up = document.getElementById('morseUp')
      const down = document.getElementById('morseDown')
      const upVal = up.style.opacity
      if (upVal === '1') {
        up.style.opacity = 0;
        down.style.opacity = 1;
      } else {
        up.style.opacity = 1;
        down.style.opacity = 0;
      }
      const delay = _rand(1,4) === 1 ? 400 : 80
      setTimeout(()=>{
        window.requestAnimationFrame(()=>{
          if (_activePage === 'contact') animateMorse()
        })
      },delay)
      setTimeout(()=>{contactContentBox.style.opacity = 1},500)
    })
  }

  function animateLines() {
    const w = contactMainContent.clientWidth+20
    const h = contactMainContent.clientHeight+20
    const c = new Canvas
    const col = 'rgba(178,34,34,0.4)'
    c.new('contactCanvas', w, h)
    c.lineGrow(0,10,w,10,col,1,5,1.03)
    c.lineGrow(10,0,10,h,col,1,5,1.03)
    c.lineGrow(w-10,0,w-10,h,col,1,5,1.03)
    c.lineGrow(w,h-10,0,h-10,col,1,5,1.03)
    c.animate()
  }

  setTimeout(()=>{contactStartOver.style.opacity = 0.6},500)

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    <div id="contactStartOver" onClick='_setPage("landing")'>
      &lt;
      <span> START OVER</span>
    </div>

    <div id="contactMainContent">

      <canvas id='contactCanvas'></canvas>

      <div id="contactContentBox">

        <div id='morse-animation'>
          <div class='title'> Contact Info </div>
          <img id='morseBase' class='morse' src='gfx/morBase.svg'>
          <img id='morseDown' class='morse' src='gfx/morDown.svg'>
          <img id='morseUp' class='morse' src='gfx/morUp.svg'>
        </div>

        <div class='underline' style="background: url('gfx/paper_fibers.png');"></div>

        <p class='write-up'>

          &nbsp; &nbsp;
            I'm currently living in Oakland, CA and
          anyone with questions or comments regarding my portfolio/projects/links
          please feel free to contact me at bobmain49@gmail.com or <a href="https://twitter.com/BobMain49">twitter</a>, which is the best way to get
          a hold of me.

          <br><br>

          &nbsp; &nbsp;
          If you you're interested in working with me based on some of the skills displayed within this site, and have a project or job opportunity you'd like to talk to me about, feel free to email me about that as well. You can also visit my <a href="https://www.linkedin.com/in/bobmain49">linkedin</a>.

          <br><br>

          <strong>Email</strong>: bobmain49@gmail.com

          <br><br><br>

          <div class='contact-profile-pic'>
            <img class='profile-pic' src='gfx/khaki_hat.png'>
          </div>

        </p>

      </div>
    </div>

  `

  /* --------------------------------------------------------- */
  if (!resize) animateMorse()
  setTimeout(()=>{ animateLines() },350)
}
