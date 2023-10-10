document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const msg = document.getElementById("msg");

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simulate form submission (you can replace this with your actual form submission logic)
        setTimeout(function () {
            msg.innerHTML = `Message sent successfully!<br>Name: ${name}<br>Email: ${email}<br>Message: ${message}`;
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);

            // Reset form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }, 1000);
    });
});
