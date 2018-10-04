var menuCache = document.querySelector(".menu");
var divInsert = document.querySelector("#insert");
var ColChange = document.querySelector("#colchange");

// deployement du menu laterale et modification de la taille de la fenetre texte 

function mouseEnter() {

    menuCache.classList.add("menu2")
    menuCache.classList.remove("menu")
    ColChange.classList.remove("col-12")
    ColChange.classList.add("col-9")
    divInsert.insertAdjacentHTML('afterbegin', '<div class="col-3"></div>');
}


// referme le menu et remet la fenetre en col-12

function mouseLeave() {


    menuCache.classList.remove("menu2")
    menuCache.classList.add("menu")
    divInsert.removeChild((divInsert.getElementsByClassName('col-3')[0]))
    ColChange.classList.remove("col-9")
    ColChange.classList.add("col-12")

}



// ------------- GESTION DYNAMIQUE DU CONTENU ---------- 

var CorpoMenu = document.querySelector("#corpo")
var Contenu = document.querySelector("#contenu")

function CorpoEnter() {


    Contenu.classList.add("backgroundcorpo")
    menuCache.classList.add("menucorpo")
    Contenu.innerHTML = '<div class="d-flex justify-content-center"><h3 class="text-light">Contenu Corpo</h3>'
    ColChange.classList.add("animation")

}




