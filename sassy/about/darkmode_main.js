let darkmode = localStorage.getItem("darkmode");

const darkmodeToggle = document.getElementById("darkmode");

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");

}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", "inactive");
}
if (darkmode === "active") {
    enableDarkmode();
}else{disableDarkmode()}

darkmodeToggle.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

const scrollContainer = document.querySelector(".radio_group");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});