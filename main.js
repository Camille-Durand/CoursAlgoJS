class Maison {
    //attributs
    nom;
    longueur;
    largeur;
    nbrEtage;
    //Contructeur
    constructor(newNom,newLongueur,newLargeur,newNbrEtage){
        this.nom = newNom;
        this.longueur = newLongueur;
        this.largeur = newLargeur;
        this.nbrEtage = newNbrEtage;
    }
}

const home = new Maison("",0,0,0);

function addHome() {
    let getName = document.getElementById("nom");
    let nameValue = getName.value;

    let getLong = document.getElementById("long");
    let longValue = getLong.value;

    let getLarg = document.getElementById("larg");
    let largValue = getLarg.value;

    let getEtage = document.getElementById("etage");
    let etageValue = getEtage.value;

    home.nom = nameValue;
    home.longueur = longValue;
    home.largeur = largValue;
    home.nbrEtage = etageValue;
    console.log(home);
}

function calculPerimetre() {
    let perimetre = (home.largeur+home.longueur)*2;
    console.log("Périmètre =",perimetre,"m");
}

function calculSurface() {
    let surface = home.longueur*home.largeur;
    console.log("Surface =",surface,"m²");
}

function calculSurfaceEtage() {
    let surface = (home.longueur*home.largeur)*home.nbrEtage;
    console.log("Surface =",surface,"m²");
}