_quicklinks = (id, sheet)=>{

/* ----------------------- < HTML > ------------------------ */
  id.innerHTML = `

    <div id='quicklinks-title'> Quicklinks </div>

    <a href='file:///Users/robbobfrh84/Github/tobob.earth/index.html'>
      Local: tobob.earth </a>
    &nbsp; file:///Users/robbobfrh84/Github/tobob.earth/index.html
    <br>

    <a href='file:///Users/robbobfrh84/Github/lab/pixel-D/index.html#home'>
      Local: pixel-D </a>
    &nbsp; file:///Users/robbobfrh84/Github/lab/pixel-D/index.html#home
    <br>

    <a href='http://robbobfrh84.github.io/lab/pixel-D'>
      Live (github lab repo): pixel-D </a>
    &nbsp; http://robbobfrh84.github.io/lab/pixel-D
    <br>

    <a href='file:///Users/robbobfrh84/Google%20Drive/Code_Hub/emojies.html'>
      Local: Emojies </a>
    &nbsp; file:///Users/robbobfrh84/Google%20Drive/Code_Hub/emojies.html
    <br>

    <a href='file:///Users/robbobfrh84/Google%20Drive/Code_Hub/-_____Backgrounds_:Icons_:Images/Background/index.html'>
      Local: Backgrounds </a>
    &nbsp;     file:///Users/robbobfrh84/Google%20Drive/Code_Hub/-_____Backgrounds_:Icons_:Images/Background/index.html
    <br>

    <a href='file:///Users/robbobfrh84/Github/jsHelper/classes/canvas/tester.html'>
      Local: Canvas Tester </a>
    &nbsp; file:///Users/robbobfrh84/Github/jsHelper/classes/canvas/tester.html
    <br>

    <a href='file:///Users/robbobfrh84/Github/jsHelper/classes/canvas/testerAnime.html'>
      Local: Canvis Animation Tester </a>
    &nbsp; file:///Users/robbobfrh84/Github/jsHelper/classes/canvas/testerAnime.html
    <br>

    <a href='file:///Users/robbobfrh84/Github/lab/chartJS-examples.html'>
      Local: ChartJS Example Graphs </a>
    &nbsp; file:///Users/robbobfrh84/Github/lab/chartJS-examples.html
    <br>

    <a href='file:///Users/robbobfrh84/Github/lab/Football_Game/canvasFootballField.html'>
      Local: football game example </a>
    &nbsp; file:///Users/robbobfrh84/Github/lab/Football_Game/canvasFootballField.html
    <br>

    <a href='file:///Users/robbobfrh84/Github/lab/Football_Game/static-example.html'>
      Local: Regulation Scaled NFL football Field </a>
    &nbsp; file:///Users/robbobfrh84/Github/lab/Football_Game/static-example.html
    <br>

    <a href='file:///Users/robbobfrh84/Github/lab/TI-83-RPG/index.html'>
      Local: Riot.js TI-83-RPG </a>
    &nbsp; file:///Users/robbobfrh84/Github/lab/TI-83-RPG/index.html
    <br>

    <a href='http://robbobfrh84.github.io/lab/greg.html'>
      Live (github lab repo): Riot.js TI-83-RPG </a>
    &nbsp; http://robbobfrh84.github.io/lab/greg.html
    <br>


    <a href=''>
        </a>
    &nbsp;
    <br>

  `
/* ---------------------- { style } ------------------------ */
  sheet.innerHTML = `

    #quicklinks {
      display: none;
      position: relative;
      transition: opacity 1s;
      line-height: 30px;
    }

    #quicklinks-title {
      padding: 20px;
      text-align: center;
      font-size: 30px;
      font-weight: 300;
      color: #666;
    }

  `
/* --------------------------------------------------------- */
  document.body.appendChild(sheet);
}
_quicklinks( document.getElementById('quicklinks'), _style() )
