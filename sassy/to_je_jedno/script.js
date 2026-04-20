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

//---------------side buttons--------------
const nadpis = document.getElementById("nastaveni_nadpis")
const tlacitka = document.querySelectorAll('.side_button');

function zmenBarvu(nastaveni) {
    nadpis.innerText = nastaveni;
}

function zmenObsah(id) {
    document.querySelectorAll('.options_content').forEach(div => {
        div.classList.remove('aktivni');
    });
    document.getElementById(id).classList.add('aktivni');
}


tlacitka.forEach(button => {
    button.onclick = function() {
        zmenBarvu(this.id);   // changes the title
        zmenObsah(this.dataset.content);   // changes the content
    };
}); ;
