document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    const errors = [];

    // Validate name
    if (nameInput.value.trim().length < 2) {
      errors.push("Name must be at least 2 characters long.");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      errors.push("Please enter a valid email address.");
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      errors.push("Message cannot be empty.");
    }

    // If any errors, prevent form submission
    if (errors.length > 0) {
      event.preventDefault();
      alert(errors.join("\n"));
    }
  });
});