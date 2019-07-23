function _about(id, resize) {

  function animations() {
    animateLines()
    setTimeout(function(){
      _about_bob_animate()
    },1000)
  }

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

        <div class="about-bob-animate-container">
          <div id="aboutBobAnimate"></div>
        </div>

        <div class='write-up'>

          <h3> Well hello there... </h3>
          ...and thank you for checking out my personal website!
<br><br>
          As you may have guessed, my name is Bob, Bob Main, or more formally Robert Bruce Main. But, only the DMV and the dentist call me by Robert. <span>&#128556;</span>

<br><br><hr>
          <h3> My Journey as a Software Engineer </h3>
          <em> ... aka: coder, programmer, web developer, etc... </em>
<br><br>
          In a previous life, I had a career of building things out of wood and selling them at farmers markets & craft fairs. I realized so much of the work was repetitive, and I had this hare-brained idea to build a machine to automate the work. This led me to research and discover something called an <a href="https://en.wikipedia.org/wiki/Arduino_Uno">Arduino</a>, in which I could build my own CNC router and design drill paths to carve the wood for me!
<br><br>
          If you wanna see what-in-the-world it turned out to be. See my very old, ugly and outdated portfolio, where you'll see some examples of the  <a href="https://bobma.in/?CNC">CNC router in action!</a>
<br><br>
          Now, I had to to learn some code to make this work. C++ specifically. I had never touched any code before and this would end up being my gateway drug to become a full-fledged software engineer.
<br><br>
          I quickly realized I could not only code for motor motion, but for websites as well! As this new obsession started to take hold I realized I wanted to start a career as software engineer. After about a year teaching myself to code, selling my folk art and bartending part-time, I finally landed a gig with a cognitive services and machine learning startup! Yay!
<br><br>
          From that point, my career as a software engineer has grown and developed in many areas. Most recently I've been teaching Full-stack web development and developing curriculum for people who want to get into coding just as I did!

<br><br><hr>
          <h3> How I'd define myself in the industry now </h3>
          I'm a front-end leaning full-stack web developer that has extensive experience with JavaScript frameworks, NodeJS and MongoDB. In addition, I have a strong passion for leveraging the built-in powers of HTML5 and CSS3 with plain ole' vanilla Javascript.
<br><br>

          API data visualization, animations and UX/UI interactivity best represents my areas of experience, expertise and passion. On a less extensive level, I've created a variety of native programs with Python and C++ for automated machinery and IoT micro-controller projects.
<br><br>
          What energizes me most about tech and web development is the constant evolution. I've been committed to a lifetime as a student, tinkerer, and teacher.
<br><br>
          I'm thankful software development has adopted agile principles, where I find myself most at home. In fact, it was actually my background in woodworking and teaching that opened the opportunity to software engineering. It has been my ignorance of something foreign that has lead to creating something meaningful and unique out of an idea.
<br><br>
          Thanks for stopping by! Please check out my showcase, track my daily activity on at GitHub and don't hesitate to reach out!
<br><br>
          Let's see where it goes <span>&#128077;</span>
<br><br>
          - Bob
<br><br>
          P.S. Thanks for stopping by! Please check out my
          <a href="#showcase">showcase<a>,
          track my daily activity on  at
          <a href="https://github.com/robbobfrh84">github<a>
          and don't hesitate to <a href="#contact">contact<a> me!
        </div>

      </div>
    </div>

  `

  /* --------------------------------------------------------- */
  setTimeout(()=>{ animations() },350)
}
