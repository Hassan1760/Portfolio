// Animate skill bars on scroll
const bars = document.querySelectorAll('.fill');

window.addEventListener('scroll', () => {
    bars.forEach(bar => {
        bar.style.width = bar.dataset.width;
    });
});

// Modal for Hero Contact Me Button
const modal = document.getElementById("contactModal");
const btn = document.querySelector(".hero .outline"); // Hero "Contact Me" button
const span = document.querySelector(".modal .close");

// Open modal on button click
btn.onclick = function() {
    modal.style.display = "block";
}

// Close modal when clicking on X
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}

function showThankYou(event) {
    event.preventDefault(); // Stop default form submission
    const form = event.target;

    // Netlify form submission
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
    }).then(() => {
        document.getElementById("thankYouPopup").style.display = "flex";
        form.reset(); // Clear the form
    }).catch(err => alert("Oops! There was an error."));
}

function closePopup() {
    document.getElementById("thankYouPopup").style.display = "none";
}
