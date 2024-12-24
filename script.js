document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.querySelector("input[type='checkbox']");
    const slide = document.querySelector(".slide");
    const toggle = document.querySelector(".toggle");

    document.addEventListener("click", (event) => {
        if (checkbox.checked && !slide.contains(event.target) && !toggle.contains(event.target)) {
            checkbox.checked = false; // Close the menu
        }
    });
});
