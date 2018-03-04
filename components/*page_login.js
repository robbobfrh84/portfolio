_login = (id, sheet)=>{

/* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

  <div id='container'>
    <div id='back' onClick='window.history.back()'> &#8678; Back </div>
    <div id='loginTitle'> Log In </div>
    Username: <br>
    <input class='loginInput'/><br>
    Password: <br>
    <input class='loginInput' type="password"/>
  </div>

  `
/* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #login {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      transition: opacity 2s;
    }

    #container {
      text-align: center;
      width: 400px;
      height: 400px;
      margin: auto;
      position: absolute;
      top: -100px; left: 0; bottom: 0; right: 0;
      border-radius: 10px;
      font-size: 25px;
      background-color: rgba(0,0,0,0.2);
      color: #bbb;
    }

    #back {
      font-size: 18px;
      padding-left: 318px;
      padding-top: 5px;
      transition: color .2s;
      cursor: pointer;
    }

    #back:hover {
      color: #ccc;
      transition: color .2s;
    }

    #loginTitle {
      font-size: 50px;
      padding-top: 20px;
      padding-bottom: 30px;
    }

    .loginInput {
      width: 350px;
      height: 40px;
      font-size: 28px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: none;
      box-shadow: 2px 2px 2px inset black;
      padding-left: 10px;
      background: url('gfx/paper_fibers3.png');
    }

  `
/* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
_login( document.getElementById('login'), _style() )

/* NOTES:
Component: login
<button onClick='_setPage("projects")'>Projects</button>
<button onClick='_setPage("contact")'>Contact</button>
<button onClick='_setPage("landing")'>Home</button>
*/
