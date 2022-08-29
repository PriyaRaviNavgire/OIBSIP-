var isOpened = false;
var funFacts = ["The first ever Linux kernel just occupied only 65 KB.", "All of the 500 fastest supercomputers run Linux.", "Linux runs on everything, smartphones, servers, submarines or space rockets.", "Linux is written over 95% of in C language, according to data by the openhub.net website.", "Linux has a specific place in Hollywood. The Visual effects of Avatar and Titanic were developed on Linux platform in 3D applications using the FOSS software."];
function myFunction() {
    var c = document.getElementById("close");
    if (!isOpened) {
        c.style.display = "block";
        isOpened = true;
    } else {
        c.style.display = "none";
        isOpened = false;
    }

}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbardesktop").style.backgroundColor = "#424242";
        document.getElementById("navbar").style.backgroundColor = "#424242";
    } else {
        document.getElementById("navbardesktop").style.backgroundColor = "#3f3e3e";
        document.getElementById("navbar").style.backgroundColor = "#3f3e3e";
    }
}


function callFunctionsHere() {
    loadFunFact();
}


function loadFunFact() {
    var item = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById("funfact").innerText = item;
}
