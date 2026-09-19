// Popup functions
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Copy LinkedIn post template
function copyPost() {
    const text = `🚀 I just made my FIRST Open Source Contribution with CSI SCT SB!

From understanding GitHub to creating my first Pull Request — this feels unreal 🤯

✅ My name is now LIVE on the CSI website
✅ My GitHub graph just turned GREEN
✅ And this is just the beginning!

Huge thanks to Computer Society of India - SCT Student Branch for making this beginner-friendly 🚀

If you're starting out, THIS is your sign to begin.

🔗 Check it out: [YOUR_GITHUB_PAGES_URL]
📚 Tutorial: [LINK_TO_TUTORIAL_IF_ANY]

#FirstPR #OpenSource #GitHub #CSI #LearningInPublic`;

    navigator.clipboard.writeText(text);
    alert("Copied! Now paste it on LinkedIn 🚀");
}

// Counter animation
function animateCounter(finalCount) {
    let current = 0;
    const counterElement = document.getElementById("counter-number");
    const increment = Math.ceil(finalCount / 50);
    
    const interval = setInterval(() => {
        current += increment;
        if (current >= finalCount) {
            current = finalCount;
            clearInterval(interval);
        }
        counterElement.textContent = current;
    }, 30);
}

// Count cards and animate on load
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    const count = cards.length;
    animateCounter(count);
});
