// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");
accordeon.addEventListener("click", (none) => {
    accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
})
