document.addEventListener("DOMContentLoaded", function() {
    const sendMessageButton = document.getElementById("sendMessageButton");
  
    sendMessageButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      const nameInput = document.getElementById("nameInput");
      const emailInput = document.getElementById("emailInput");
      const messageInput = document.getElementById("messageInput");
  
      if (validateInputs(nameInput, emailInput, messageInput)) {
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;
  
        sendEmail(name, email, message);
      }
    });
  
    function validateInputs(nameInput, emailInput, messageInput) {
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert("Please fill in all the required fields.");
        return false;
      }
  
      // Add additional email validation if needed
      return true;
    }
  
    function sendEmail(name, email, message) {
      
      console.log("Sending email:", name, email, message);
      window.location.href = "mailto:ebineshrajeshwari@gmail.com";
    }
  });