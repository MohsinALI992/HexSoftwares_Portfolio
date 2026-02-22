// INIT EMAILJS 
(function() {
    emailjs.init("bRoEHR6pCat6Ltu-x"); 
})();

// CONTACT FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.send("service_zubs8v1", "template_zyidz2h", {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }).then(function() {
        alert("Message Sent Successfully!");
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert("Failed to send message: " + JSON.stringify(error));
    });
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