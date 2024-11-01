document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".hero-image");
    let currentIndex = 0;

    function switchImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(switchImage, 3000); 

    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const icon = document.getElementById("icon");

    body.classList.add("light-theme");

    themeToggleButton.addEventListener("click", () => {
        if (body.classList.contains("light-theme")) {
            body.classList.replace("light-theme", "dark-theme");
            icon.textContent = "🌜"; 
            themeToggleButton.textContent = " Night Mode";
            themeToggleButton.prepend(icon);
        } else {
            body.classList.replace("dark-theme", "light-theme");
            icon.textContent = "🌞"; 
            themeToggleButton.textContent = " Day Mode";
            themeToggleButton.prepend(icon);
        }
    });
});
