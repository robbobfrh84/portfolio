_landing = (id, sheet)=>{

  /* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

  <div id='landingBox'>

    <div id='welcome'>
      Greetings, and Welcome to <br>
      Bob's Projects, Works and Builds!
    </div>

    <div class='landing-button' onClick='_setPage("projects")'>
      View Bob's Projects
    </div>

    <div class='landing-button' onClick='_setPage("contact")'>
      Contact Info
    </div>

  </div>

  <!--
  <br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr> 
  -->

  `
  /* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

  #landing {
    display: none;
    width: 100%;
    text-align: center;
    transition: opacity 2s;
  }

  #welcome {
    font-size: 28px;
    font-family: Avenir;
    font-weight: 100;
    color: rgba(0,0,0,0.5);
  }

  .landing-button {
    font-size: 28px;
    font-family: Avenir;
    font-weight: 100;
    color: #444;
    //background: url('gfx/paper_fibers2.png');
    background-color: #e8e8ec;
    border: 2px dashed #bbb;
    box-shadow: inset 0px 0px 2px 2px rgba(0,0,0,0),
      2px 2px 2px 0px rgba(0,0,0,0.5);
    border-radius: 50px;
    cursor: pointer;
    width: 300px;
    height: 36px;
    margin: auto;
    padding: 8px;
    transition: box-shadow 0.20s;
    margin-top: 35px;
  }

  .landing-button:hover {
    box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.5);
    transition: box-shadow 0.20s;
  }

  #landingBox {
    padding-top: 20vh;
    padding-bottom: 50px;
  }

  @media (max-height: 500px) {
    #landingBox {
      padding-top: 8vh;
    }
  }

  `
  /* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
_landing( document.getElementById('landing'), _style() )
