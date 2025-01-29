// // script.js
// document.getElementById("download-btn").addEventListener("click", function() {
//     // Create an anchor element
//     const link = document.createElement("a");

//     // Set the href to the resume file (you can change this path to your file location)
//     link.href = "resume.pdf"; // or "assets/resume.pdf" if your file is in a subfolder

//     // Set the download attribute to specify the file name
//     link.download = "My_Resume.pdf";

// )

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the page from reloading

        // Fetch form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        const message = document.getElementById('message').value;

        // Set up template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            phone: number,
            message: message
        };

        console.log(templateParams);

        // Use the EmailJS `send` method to send the email
        emailjs.send('service_1lr5bnh', 'template_xlsyqvl', templateParams)
            .then(function(response) {
                console.log('Success:', response);
                showToast("Your message has been sent successfully!");
                form.reset(); // Reset the form
            }, function(error) {
                console.log('Error:', error);
                showToast("Oops, something went wrong. Please try again later.");
            });
    });

    // Function to show the toast notification
    function showToast(message) {
        var toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');

        // Remove the toast after 3 seconds
        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000);
    }
});

  