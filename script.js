document.addEventListener("DOMContentLoaded", function() {
  var shakeButton = document.querySelector(".btn");
  var motiv8ball = document.querySelector(".motiv8ball");
  
  shakeButton.addEventListener("click", function() {
    // Add the "is-shaking" class to trigger the shake animation
    motiv8ball.classList.add("is-shaking");
    // After 3 seconds, remove the "is-shaking" class, add the "is-grown" class
    // and display a randomized message
    setTimeout(function() {
      motiv8ball.classList.remove("is-shaking");
      motiv8ball.classList.add("is-grown");
      // Array of possible messages
      var messages = [
        "Keep going!",
        "Believe you can and you're halfway there.",
        "Dream big, achieve bigger.",
        "Challenges are opportunities in disguise.",
        "Progress, not perfection.",
        "Success begins with a single step.",
        "Stay focused and never give up.",
        "Be the change you wish to see.",
        "Focus on the possibilities, not the limitations."
      ];
  
      // Select a random message from the array
      var randomIndex = Math.floor(Math.random() * messages.length);
      var randomMessage = messages[randomIndex];

      // Update the message in the magic 8 ball
      var messageElement = document.querySelector(".motiv8ball .msg");
      messageElement.textContent = randomMessage;
    }, 3000);
  });
  
  // Reset the magic 8 ball when the button is clicked again
  shakeButton.addEventListener("click", function() {
    motiv8ball.classList.remove("is-grown");
    var messageElement = document.querySelector(".motiv8ball .msg");
    messageElement.textContent = "MOTIV8";
  });

});