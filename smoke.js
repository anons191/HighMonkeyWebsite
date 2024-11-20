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

// Create YouTube player
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "Cal Scruby - MONEY BUY DRUGS (Official Music Video)", // Replace with your video ID
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: "Cal Scruby - MONEY BUY DRUGS (Official Music Video)", // Required for loop
    },
    events: {
      onReady: function(event) {
        event.target.setVolume(30); // Set volume to a lower level if needed
        event.target.playVideo(); // Start playing
      },
    },
  });
}
