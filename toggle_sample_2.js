
let toggleMenuStatus = false;

let toggleMenu = function() {
    let getMenu = document.querySelector("#menu");
    let getMenuUl = document.querySelector("#menu ul");
    let getMenuLink = document.querySelectorAll("#menu a");
    let getToggleMenuLink = document.querySelector("#toggle");

    if (toggleMenuStatus === false) {
        getMenu.style.visibility = "visible";
        getMenu.style.width = "200px";
        getMenuUl.style.opacity = "1";

        let arrayLength = getMenuLink.length;
        for(let i=0;i<arrayLength; i++) {
            getMenuLink[i].style.opacity = "1";
        }
        
        // animate
        getToggleMenuLink.classList.add("on");
        toggleMenuStatus = true;
    } else { 
        getMenu.style.visibility = "hidden";
        getMenuUl.style.opacity= "0";

        let arrayLength = getMenuLink.length;
        for(let i=0;i<arrayLength; i++) {
            getMenuLink[i].style.opacity = "0";
        }
        
        // animate
        getToggleMenuLink.classList.remove("on");
        toggleMenuStatus = false;
    }
}
