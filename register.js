// Close modal when clicking the close button
document.querySelector(".close").addEventListener("click", function() {
    window.location.href = "index.html"; // Redirect to home page
});

// Close modal when clicking outside the modal
window.onclick = function(event) {
    let modal = document.querySelector(".modal");
    if (event.target === modal) {
        window.location.href = "index.html"; // Redirect to home page
    }
};
