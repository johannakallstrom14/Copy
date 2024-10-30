document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // Toggle dropdown visibility on click
    dropdownButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        dropdownMenu.classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener("click", function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});
