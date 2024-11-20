// JavaScript to create smoke effect
const smokeContainer = document.getElementById("background-smoke");

function createSmoke() {
  const smoke = document.createElement("div");
  smoke.classList.add("smoke");

  // Random position and animation delay
  smoke.style.left = Math.random() * 100 + "vw";
  smoke.style.bottom = "-50px"; // Start below the viewport
  smoke.style.animationDelay = Math.random() * 5 + "s";
  smoke.style.animationDuration = 5 + Math.random() * 5 + "s";

  smokeContainer.appendChild(smoke);

  // Remove the smoke element after animation ends
  smoke.addEventListener("animationend", () => {
    smoke.remove();
  });
}

// Create smoke particles at intervals
setInterval(createSmoke, 500); // Adjust frequency as needed



