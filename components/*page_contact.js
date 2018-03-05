_contact = (id, sheet)=>{

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
          animateMorse()
        })
      },delay)
    })
  }


  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `


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

    <img id='profile-pic' src='gfx/bob.png'>


    </p>

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #contact {
      display: none;
      margin: auto;
      margin-top: 30px;
      width: 440px;
      padding-top: 60px;
      font-size: 28px;
      font-family: Avenir;
      color: rgba(0,0,0,0.5);
      transition: opacity 1s;
      background-color: rgba(0,0,0,0.1);
      border-radius: 10px;
    }

    #morse-animation {
      position: relative;
      top: -45px; left: 20px;
      width: 440px;
      height: 150px;
      margin: auto;
    }

    .morse {
      position: absolute;
      top: 0; left: 118px;
      width: 300px;
      pointer-events: none;
    }

    #title {
      position: absolute;
      top: 0; left: 0;
    }

    #underline {
      margin: -56px 20px 0 20px;
      width: 200px:
      height: 4px;
      min-height: 4px;
      box-shadow: 2px 2px 2px inset rgba(0,0,0,0.5);
      border-radius: 4px;
      background: url('gfx/paper_fibers.png');
    }

    #write-up {
      font-size: 18px;
      max-width: 400px;
      font-weight: 500;
      margin: auto;
      padding-top: 20px;
    }

    #profile-pic {
      margin-top: -20px;
      margin-left: 80px;
      margin-bottom: 20px;

      width: 250px;
      border-radius: 100%;
    }

  `
  /* --------------------------------------------------------- */
  animateMorse()
  document.body.appendChild(sheet);
}
_contact( document.getElementById('contact'), _style() )
