// Défi 1 :
// Faire l'addition de 2 nombres défini par l'utilisateur
function defi1() {
    var nbr1 = Number(document.getElementById("nbr1").value);
    var nbr2 = Number(document.getElementById("nbr2").value);
    var somme = nbr1 + nbr2;
    document.getElementById("somme").value = somme;
}

// Défi 2 :
// Lister tous les multiples d'un nombre défini par l'utilisateur
function defi2() {
    var list = [];
    var nbr3 = Number(document.getElementById("nbr3").value);
    for (let i = 0; i <= nbr3; i++) {
        if (nbr3 % i == 0) {
            list.push(i);
        }
    }
    document.getElementById("multiple").value = list;
}

// Défi 3 :
// Définir si le nombre entrer par l'utilisateur est un nombre premier ou pas
function diviseur(nbr4) {
    var list = [];
    for (let i = 0; i <= nbr4; i++) {
        if (nbr4 % i == 0) {
            list.push(i);
        }
    }
    return list;
}

function defi3() {
    var nbr4 = Number(document.getElementById("nbr4").value);
    var listeSolutions = diviseur(nbr4);
    if (listeSolutions.length == 2) {
        alert("C'est un nombre premier");
    } else {
        alert("Ce n'est pas un nombre premier");
    }
}

// Défi 6 :
// Définir si le mot entré par l'utilisateur est un palindrome ou pas
function defi6() {
    var word = document.getElementById("motUtilisateur").value;
    word = normalizeString(word);
    let reverse = word.reverse();
    if (word == reverse) {
        alert("Le mot est un palindrome");
    } else {
        alert("Le mot n'est pas un palindrome");
    }
}