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
          At my core, I am a Creative Front-end Developer with a deep-rooted understanding of user experience. My hands-on experience ranges from working with Vanilla JavaScript and DOM manipulation to harnessing the power of frameworks such as React and Angular, all while ensuring accessibility. My work with RESTful API integrations ensures seamless user interactions. In aesthetics and functionality, my expertise lies in CSS, wherein I craft animations, utilize SASS, and apply conditional styling to guarantee a delightful visual experience. In UX design, I prioritize the creation of experiences that are both intuitive and immersive. My work on the "Color A.I." project stands as a testament to this. You can explore it here: https://colorai.farm.
          <br><br>
          Taking my skills a step further, I have deeply immersed myself in the role of a Full Stack Software Engineer. With a solid foundation in backend technologies like Node, Python, and MongoDB, I have played a pivotal role in unlocking the full potential of software solutions. The "Kiss The Sky" project serves as a testament to this, where I collaborated, designed, and architected its full-stack ecosystem from the ground up. This ensured seamless integration, scalability, and peak performance. You can delve into the details of this project at: https://github.com/matthewmain/kiss_the_sky.
<br><br>
          As a Data Management Innovator, I have harnessed the power of Google Apps Script, Google Cloud Platform, and Amazon Web Services. My project, GAS Up, showcases my innovative approach to data management. This Google Apps Script application allows a Google Sheet to act as a database for a front-end application. See the project's repository and usage guide here: https://github.com/robbobfrh84/gas-up.
<br><br>
          Building on my technical foundation, I recently encountered a surprising catalyst that has ignited my passion, vision, and confidence in the contemporary tech industry landscape—my involvement with an improv team. This dynamic collaboration has unveiled capabilities beyond my attributes as a developer, revealing my potential as a colleague and leader. Having to listen intently and think on my feet has fostered a heightened sense of focus and drive, not just with computers, but more importantly, with people. This experience has broadened my perspective on what I can achieve in the realm of technology. I've come to realize the “performant” aspect of this field through storytelling, which can genuinely drive a team and execute an idea.
<br><br>
          Currently, my curiosity is guiding me through the realm of Large Language Models. I am delving deeply into the APIs of ChatGPT and PaLM(Bard), with a particular focus on UI design. My objective is to discover ways to enhance UI interactivity, unlock hidden values, and tap into the unique abilities that these language models possess.
<br><br>
          In addition to my career in technology, I have amassed a diverse array of experiences. My roles have ranged from bartending to educating in Vietnam, and I have channeled my creativity into woodworking, selling my handcrafted pieces at farmers’ markets.
<br><br>
          In essence, my journey has been eclectic, transitioning from sawdust to pixels. Each experience has enriched my perspective, shaping me into a multifaceted professional equipped to address a variety of challenges.
<br><br>
          Let’s see where this leads,
<br><br>
          💛 Bob
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
