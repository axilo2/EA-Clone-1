

function showMenu() {
   let menuOne = document.getElementById("blackbar-menu-one");
    let menuTwo = document.getElementById("blackbar-menu-two");
    if(menuOne.style.visibility === "collapse") {
        menuOne.style.visibility = "visible";
        menuTwo.style.visibility = "collapse"
    } else {
        menuOne.style.visibility = "collapse";
    }
}

function showOtherMenu() {
    let menuOne = document.getElementById("blackbar-menu-one");
    let menuTwo = document.getElementById("blackbar-menu-two");
    if(menuTwo.style.visibility === "collapse") {
        menuTwo.style.visibility = "visible";
        menuOne.style.visibility = "collapse"
    } else {
        menuTwo.style.visibility = "collapse";
    }
}
