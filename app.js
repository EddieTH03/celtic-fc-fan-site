// Add an event listener to handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        document.getElementById("contactForm").reset(); // Clear form
    } else {
        alert("Please fill out all fields.");
    }
});
