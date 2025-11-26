const config = {
  title: "A.I. Holiday Shopping Guide",
  
  // * Form content
  form: {
    budgetLabel: "What is your Gift Budget?",
    budgetPlaceholder: "e.g., $50, $100, $200...",
    personLabel: "Who is the Gift For?",
    personPlaceholder: 'try: "grandma", "brother", "Jim", etc...',
    submitButton: "Generate Gift Suggestion"
  },
  
  // * Messages and alerts
  messages: {
    validationError: "Please fill in both fields!",
    resultMessage: (amount, person) => {
      // Format amount with commas if it's a number
      const formattedAmount = /^\d+$/.test(amount.replace(/[$,]/g, '')) 
        ? parseInt(amount.replace(/[$,]/g, '')).toLocaleString() 
        : amount;
      return `<strong>Just give that <span class="result-highlight">$${formattedAmount}</span> as a gift to <span class="result-highlight">${person}</span>!</strong> <br> Then, they'll select the PERFECT gift 🎁!`;
    },
    additionalText: "Best part, you don't even have to know what the gift is!"
  },
  
  // * Coffee button and modal
  showBMC: true,
  coffee: {
    buttonSymbol: "☕",
    modal: {
      title: "Enjoy this? ☕",
      text: `
        Consider giving me (a laid off web developer, struggling to find work) a tip? 
        <br><br> 
        It'll keep my spirits up as I navigate this unemployment h$ll hole! 💖`,
      coffeeLink: "Buy Me a Coffee ☕",
      coffeeUrl: "https://buymeacoffee.com/invx3rejk",
      closeButton: "Close"
    }
  },
  
  animation: {
    particleCount: 35,
    particleMinSize: 15,
    particleMaxSize: 20,
    particleOffset: 0,
    matrixCharSize: 14,
    matrixCharOpacity: 0.6,
    matrixCharSpacing: 15,
    matrixChars: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*', '+', '=', '<', '>', '?'],
    formHideDelay: 800,
    resultShowDelay: 500,
    additionalCardDelay: 2500
  }
}