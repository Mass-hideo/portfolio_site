// Open the side navigation
document.getElementById("openNavBtn").addEventListener("click", function () {
    document.getElementById("sideNav").style.width = "250px"; // Set the width to 250px when opening
    document.getElementById("openNavBtn").style.opacity = 0;
    document.getElementById("openNavBtn").style.visibility = "hidden";
});

// Close the side navigation
document.querySelector(".closebtn").addEventListener("click", function () {
    document.getElementById("sideNav").style.width = "0"; // Set the width to 0 when closing
    document.getElementById("openNavBtn").style.opacity = 1;
    document.getElementById("openNavBtn").style.visibility = "visible";
});

// Close the side navigation when clicking outside of it
document.addEventListener("click", function (event) {
    if (!sideNav.contains(event.target) && event.target !== openNavBtn) {
        sideNav.style.width = "0"; // Close the sidebar if clicked outside
        document.getElementById("openNavBtn").style.opacity = 1;
        document.getElementById("openNavBtn").style.visibility = "visible";
    }
});

const mainPage = document.getElementsByClassName("Homepage");
const navUse = document.getElementsByClassName("navButton");

navUse.addEventListener("click", () => {
    mainPage.style.visibility = "hidden";
});