document.addEventListener('DOMContentLoaded', function () {
    const imageLinks = document.querySelectorAll('.image-link');
    const overlays = document.querySelectorAll('.overlay');
    const closeButtons = document.querySelectorAll('.close');

    imageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('data-image');
            document.getElementById(targetId).classList.add('show');
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            this.closest('.overlay').classList.remove('show');
        });
    });

    // Close overlay if clicked outside the popup
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function (e) {
            if (e.target === this) {
                this.classList.remove('show');
            }
        });
    });
});
