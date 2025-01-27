document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.querySelector(".buttonn");

    noButton.addEventListener("mousemove", (event) => {
        const buttonRect = noButton.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Check if the cursor is near the button
        const distanceX = Math.abs(mouseX - (buttonRect.left + buttonRect.width / 2));
        const distanceY = Math.abs(mouseY - (buttonRect.top + buttonRect.height / 2));

        if (distanceX < 50 && distanceY < 30) {
            // Move the button to a random position
            const offsetX = (Math.random() * 200 - 100) + "px";
            const offsetY = (Math.random() * 100 - 50) + "px";
            noButton.style.position = "absolute";
            noButton.style.left = `${Math.min(
                Math.max(buttonRect.left + parseFloat(offsetX), 0),
                window.innerWidth - buttonRect.width
            )}px`;
            noButton.style.top = `${Math.min(
                Math.max(buttonRect.top + parseFloat(offsetY), 0),
                window.innerHeight - buttonRect.height
            )}px`;
        }
    });
});
