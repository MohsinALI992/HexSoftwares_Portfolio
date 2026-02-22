// INIT EMAILJS
(function() {
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); 
})();

// CONTACT FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    });

    alert("Message Sent Successfully!");
    document.getElementById("contactForm").reset();
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});