_login = (id, sheet)=>{

id.addEventListener('click', ()=>{
  if (event.srcElement.id === 'login') {
    console.log('go back')
    window.history.back()
  }
})

/* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

  <div id='container'>
    <div id='back' onClick='window.history.back()'> &#x2715; </div>
    <div id='loginTitle'> <img id='google-icon' src='gfx/google.png'> Log In </div>
    Username: <br>
    <input class='loginInput'/><br>
    Password: <br>
    <input class='loginInput' type="password"/>
    <button id='submit'> Submit </button>
  </div>

  `
/* ---------------------- { style } ------------------------ */

  sheet.innerHTML = `

    #login {
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      display: none;
      background-color: rgba(0,0,0,0.5);
      transition: opacity 1s;
      z-index: 1;
    }

    #container {
      text-align: center;
      width: 400px;
      height: 410px;
      margin: auto;
      position: absolute;
      top: -30px; left: 0; bottom: 0; right: 0;
      border-radius: 10px;
      font-size: 25px;
      background-color: rgba(0,0,0,0.2);
      box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.6);
      color: #bbb;
    }

    #back {
      font-size: 20px;
      padding-left: 361px;
      padding-top: 5px;
      color: #999;
      transition: color .2s;
      cursor: pointer;
    }

    #back:hover {
      color: #ccc;
      transition: color .2s;
    }

    #google-icon {
      position: relative;
      top: 12px; left: -10px;
      width: 60px;
    }

    #loginTitle {
      font-size: 45px;
      padding-top: 15px;
      padding-bottom: 35px;
    }

    .loginInput {
      width: 350px;
      height: 40px;
      font-size: 22px;
      margin-bottom: 15px;
      border-radius: 20px;
      border: none;
      outline: none;
      box-shadow: 2px 2px 2px inset black;
      padding-left: 20px;
      background: url('gfx/paper_fibers3.png');
    }

    #submit {
      width: 120px;
      height: 35px;
      font-size: 25px;
      background-color: cornflowerblue;
      border: none;
      box-shadow: inset 0px 0px 2px 2px rgba(0,0,0,0),
        2px 2px 2px 0px rgba(0,0,0,0.5);
      border-radius: 20px;
      margin: 10px;
      color: #333;
      cursor: pointer;
      transition: box-shadow .25s;
    }

    #submit:Hover {
      box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.5),
        0px 2px 2px 0px rgba(0,0,0,0);
      transition: box-shadow .25s;
    }

  `
/* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
_login( document.getElementById('login'), _style() )
