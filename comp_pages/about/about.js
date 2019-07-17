function _about(id, resize) {

  // function animateMorse() {
  //   window.requestAnimationFrame(()=>{
  //     const up = document.getElementById('morseUp')
  //     const down = document.getElementById('morseDown')
  //     const upVal = up.style.opacity
  //     if (upVal === '1') {
  //       up.style.opacity = 0;
  //       down.style.opacity = 1;
  //     } else {
  //       up.style.opacity = 1;
  //       down.style.opacity = 0;
  //     }
  //     const delay = _rand(1,4) === 1 ? 400 : 80
  //     setTimeout(()=>{
  //       window.requestAnimationFrame(()=>{
  //         if (_activePage === 'contact') animateMorse()
  //       })
  //     },delay)
  //     setTimeout(()=>{contactContentBox.style.opacity = 1},500)
  //   })
  // }

  function animateLines() {
    const w = aboutMainContent.clientWidth+20
    const h = aboutMainContent.clientHeight+20
    const c = new Canvas
    const col = 'rgba(218,165,32,0.7)'
    c.new('aboutCanvas', w, h)
    c.lineGrow(0,10,w,10,col,1,5,1.03)
    c.lineGrow(10,0,10,h,col,1,5,1.03)
    c.lineGrow(w-10,0,w-10,h,col,1,5,1.03)
    c.lineGrow(w,h-10,0,h-10,col,1,5,1.03)
    c.animate()
  }

  setTimeout(()=>{aboutStartOver.style.opacity = 0.6},500)
  setTimeout(()=>{aboutContentBox.style.opacity = 1},500)

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    <div id='aboutTitle'> ...about Bob </div>

    <div id="aboutStartOver" onClick='_setPage("landing")'>
      &lt;
      <span> START OVER </span>
    </div>

    <div id="aboutMainContent">

      <canvas id='aboutCanvas'></canvas>

      <div id="aboutContentBox">

        <!-- <div id='morse-animation'>
          <div id='title'> Contact Info </div>
          <img id='morseBase' class='morse' src='gfx/morBase.svg'>
          <img id='morseDown' class='morse' src='gfx/morDown.svg'>
          <img id='morseUp' class='morse' src='gfx/morUp.svg'>
        </div> -->

        <p class='write-up'>

          &nbsp; &nbsp;
          I'm a JavaScript centered front-end web developer that has extensive experience with JS frameworks, libraries and plugins. In addition, I have a strong passion for leveraging the built-in powers of HTML5 and CSS3 with plain ol' vanilla Javascript.
          <br><br>

          &nbsp; &nbsp;
          API data visualization, animations and UX/UI interactivity best represents my areas of experience, expertise and passion. On a less extensive level, I’ve created a variety of native programs with Python and C++ for automated woodworking machinery and IoT micro-controller projects.
          <br><br>

          &nbsp; &nbsp;
          What energizes me most about tech and web development is the constant evolution. In fact, as I’ve taken the time to write this, I’ve probably got behind on some new and exciting tech! So I’ve committed to a lifetime as a student, tinkerer, and teacher.
          <br><br>

          &nbsp; &nbsp;
          I’m thankful software development has adopted Agile principles, where I find myself most at home. In fact, it was actually my background in woodworking and teaching that opened the opportunity to tech. It has been my ignorance of something foreign that’s lead to creating something meaningful and unique out of an idea.
          <br><br>

          &nbsp; &nbsp;
          Thanks for stopping by! Please check out more, see some of my projects at www.bobma.in, track my daily activity on github at github.com/robbobfrh84 and don't hesitate to reach out.

        </p>

      </div>
    </div>

  `

  /* --------------------------------------------------------- */
  // if (!resize) animateMorse()
  setTimeout(()=>{ animateLines() },350)
}
