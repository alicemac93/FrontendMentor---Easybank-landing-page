
const navToggle = document.getElementById("navToggle")
const navMobile = document.getElementById("navMobile");
const hamburgerSrc = "file:///Users/alicemaciejewska/Desktop/Projects/tryouts/frontend_mentor/easybank-landing-page-master/images/icon-hamburger.svg";

navToggle.addEventListener("click", function () {
    navMobile.classList.toggle("active");
    changeButton();
}
);

function changeButton(){
    if (navToggle.src === hamburgerSrc)
        {navToggle.setAttribute("src", "./images/icon-close.svg")
        } else {navToggle.setAttribute("src", "./images/icon-hamburger.svg");
    }
};
