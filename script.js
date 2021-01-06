window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggelMenu");
    document.querySelector("#menu").classList.toggle("hide");
    document.querySelector("#menuknap").classList.toggle("change");
}
