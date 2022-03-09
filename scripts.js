let buttonAccueil = document.getElementById("btn-accueil");
let buttonProjets = document.getElementById("btn-projets");

let divMotivation = document.getElementById("motivation");
let divProjet = document.getElementById("projets");


buttonAccueil.onclick = function(){
    if(!buttonAccueil.classList.contains("nav-selected")){
        
        buttonAccueil.classList.add("nav-selected")
        buttonProjets.classList.remove("nav-selected")
        
        divProjet.classList.add("hidden")
        divMotivation.classList.remove("hidden")
    }
};

buttonProjets.onclick = function(){
    if(!buttonProjets.classList.contains("nav-selected")){
        
        buttonProjets.classList.add("nav-selected")
        buttonAccueil.classList.remove("nav-selected")
        
        divMotivation.classList.add("hidden")
        divProjet.classList.remove("hidden")
    }
};