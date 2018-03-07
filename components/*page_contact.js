_contact = (id, sheet, resize)=>{

  animateMorse = ()=>{
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
    })
  }

  animateLines = ()=> {
    const w = id.clientWidth+20
    const h = id.clientHeight+20
    const c = new canvas
    const col = 'rgba(0,0,255,0.4)'

    c.new('contact-canvas', w, h)
    c.lineGrow(0,10,w,10,col,1,5,1.03)
    c.lineGrow(10,0,10,h,col,1,5,1.03)
    c.lineGrow(w-10,0,w-10,h,col,1,5,1.03)
    c.lineGrow(w,h-10,0,h-10,col,1,5,1.03)

    c.animate()
  }


  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    <canvas id='contact-canvas'></canvas>

    <div id='morse-animation'>
      <div id='title'> Contact Info </div>
      <img id='morseBase' class='morse' src='gfx/morBase.svg'>
      <img id='morseDown' class='morse' src='gfx/morDown.svg'>
      <img id='morseUp' class='morse' src='gfx/morUp.svg'>
    </div>

    <div id='underline'></div>

    <p id='write-up'>

    &nbsp; &nbsp; I'm currently living in Austin, Texas and
    anyone with questions or comments regarding my portfolio/projects/links
    please feel free to contact me via email, which is the best way to get
    a hold of me.

    <br><br>

    &nbsp; &nbsp; As of writing this, I am currently considering full-time
    employment or contract work based on some of the skills displayed
    within this site. If you have a project or job opportunity you'd like to
    talk to me about, feel free to email me about that as well. You can also
    visit my <a href="https://www.linkedin.com/in/bobmain49">linkedin</a>.

    <br><br>

    <strong>Email</strong>: bobmain49@gmail.com

    <br><br><br>

    <div id='contact-profile-pic'>
      <img id='profile-pic' src='gfx/bob.png'>
    </div>


    </p>

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #contact {
      display: none;
      position: relative;
      margin: auto;
      margin-top: 35px;
      width: 65%;
      max-width: 800px;
      padding-top: 60px;
      font-size: 28px;
      font-family: Avenir;
      color: rgba(0,0,0,0.5);
      transition: opacity 1s;
      background-color: rgba(0,0,0,0.05);
    }

    #contact-canvas {
      position: absolute;
      top: -10px; left: -10px;
    }

    @media only screen and (max-width: 600px)  {
        #contact {
          width: 100%;
        }
    }

    #morse-animation {
      position: relative;
      top: -45px; right: 1px;
      height: 150px;
      margin: auto;
    }

    .morse {
      position: absolute;
      top: 0; right: 0px;
      width: 250px;
      pointer-events: none;
    }

    #title {
      position: absolute;
      top: 5px; left: 35px;
    }

    #underline {
      margin: -80px 20px 0 20px;
      width: 200px:
      height: 4px;
      min-height: 4px;
      box-shadow: 2px 2px 2px inset rgba(0,0,0,0.5);
      border-radius: 4px;
      background: url('gfx/paper_fibers.png');
    }

    #write-up {
      font-size: 18px;
      font-weight: 500;
      margin: auto;
      padding: 30px;
    }

    #contact-profile-pic {
      text-align: center;
    }

    #profile-pic {
      margin-top: -50px;
      margin-bottom: 20px;
      width: 250px;
      border-radius: 100%;
    }

  `
  /* --------------------------------------------------------- */
  if (!resize) animateMorse()
  setTimeout(()=>{ animateLines() },250)
  document.body.appendChild(sheet);
}
// _contact( document.getElementById('contact'), _style())
