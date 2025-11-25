function getConfigValue(path) {
  return path.split('.').reduce((obj, key) => obj && obj[key], config);
}

function initializeContent() {
  document.querySelectorAll('[data-config]').forEach(element => {
    const configPath = element.getAttribute('data-config');
    const value = getConfigValue(configPath);
    if (value !== undefined) {
      if (configPath === 'coffee.modal.text') {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    }
  });
  
  document.querySelectorAll('[data-config-placeholder]').forEach(element => {
    const configPath = element.getAttribute('data-config-placeholder');
    const value = getConfigValue(configPath);
    if (value !== undefined) {
      element.placeholder = value;
    }
  });
  
  document.querySelectorAll('[data-config-href]').forEach(element => {
    const configPath = element.getAttribute('data-config-href');
    const value = getConfigValue(configPath);
    if (value !== undefined) {
      element.href = value;
    }
  });
}

function createParticles() {
  const background = document.querySelector(".background");
  const particleCount = config.animation.particleCount;
  const matrixChars = config.animation.matrixChars;

  for (let i = 0; i < particleCount; i++) {
    // Create container for the Matrix stream
    const streamContainer = document.createElement("div");
    streamContainer.className = "matrix-stream";

    // Create the leading snowflake
    const particle = document.createElement("div");
    particle.className = "particle";

    const sizeRange = config.animation.particleMaxSize - config.animation.particleMinSize;
    const size = Math.random() * sizeRange + config.animation.particleMinSize;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    // Create Matrix trail characters
    const trailLength = Math.floor(Math.random() * 8) + 5; // 5-12 characters
    for (let j = 1; j <= trailLength; j++) {
      const matrixChar = document.createElement("div");
      matrixChar.className = "matrix-char";
      matrixChar.setAttribute("translate", "no");
      matrixChar.setAttribute("lang", "ja");
      matrixChar.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      matrixChar.style.top = (-j * config.animation.matrixCharSpacing) + "px";
      matrixChar.style.fontSize = config.animation.matrixCharSize + "px";
      matrixChar.style.opacity = Math.max(0.1, config.animation.matrixCharOpacity - (j * 0.1));
      matrixChar.dataset.charIndex = j;
      streamContainer.appendChild(matrixChar);
    }

    // Apply offset from config
    particle.style.left = config.animation.particleOffset + "px";
    
    streamContainer.appendChild(particle);

    streamContainer.style.left = Math.random() * 100 + "%";
    
    const randomPosition = Math.random() * 120;
    streamContainer.style.top = randomPosition + "%";
    
    const maxAnimationDuration = 18;
    const normalizedPosition = randomPosition / 120;
    const calculatedDelay = -normalizedPosition * maxAnimationDuration;
    
    streamContainer.style.animationDelay = calculatedDelay + "s";

    // Start character changing animation
    startMatrixCharAnimation(streamContainer);

    background.appendChild(streamContainer);
  }
}

function startMatrixCharAnimation(container) {
  const chars = container.querySelectorAll('.matrix-char');
  const matrixChars = config.animation.matrixChars;
  
  setInterval(() => {
    chars.forEach(char => {
      if (Math.random() < 0.3) { // 30% chance to change each character
        char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      }
    });
  }, 100 + Math.random() * 200); // Change every 100-300ms
}

document.getElementById("submitButton").addEventListener("click", function () {
  const amount = document.getElementById("amountInput").value.trim();
  const person = document.getElementById("personInput").value.trim();

  if (!amount || !person) {
    alert(config.messages.validationError);
    return;
  }

  const formContainer = document.getElementById("formContainer");
  const resultContainer = document.getElementById("resultContainer");
  const resultText = document.getElementById("resultText");

  formContainer.classList.add("hidden");

  setTimeout(() => {
    resultText.innerHTML = config.messages.resultMessage(amount, person);
    resultContainer.classList.add("visible");

    setTimeout(() => {
      const additionalCard = document.getElementById("additionalCard");
      const additionalText = document.getElementById("additionalText");
      
      additionalText.textContent = config.messages.additionalText;
      additionalCard.classList.add("visible");
      
      setTimeout(() => {
        additionalCard.classList.add("flipped");
      }, 200);
      
      setTimeout(() => {
        if (config.showBMC) {
          document.getElementById("coffeeButton").classList.add("visible");
        }
      }, 800);
    }, config.animation.additionalCardDelay);
  }, config.animation.formHideDelay);
});

document.addEventListener("DOMContentLoaded", function () {
  initializeContent();
  createParticles();
});

const inputs = document.querySelectorAll(".futuristic-input");
inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.style.transform = "translateY(-2px)";
  });

  input.addEventListener("blur", function () {
    this.style.transform = "translateY(0)";
  });
});

if (config.showBMC) {
  document.getElementById("coffeeButton").addEventListener("click", function () {
    document.getElementById("modal").classList.add("visible");
  });
}

if (config.showBMC) {
  document.getElementById("modalClose").addEventListener("click", function () {
    document.getElementById("modal").classList.remove("visible");
  });
}

if (config.showBMC) {
  document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.remove("visible");
    }
  });
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("submitButton").click();
  }
});
