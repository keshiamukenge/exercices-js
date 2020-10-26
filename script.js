function somme(){
    var nbr1 = Number(document.getElementById("nbr1").value);
    var nbr2 = Number(document.getElementById("nbr2").value);
    var somme = nbr1 + nbr2;
    document.getElementById("somme").value = somme;
}

function multiple(){
    var list =[];
    var nbr3 = Number(document.getElementById("nbr3").value);
    for( let i = 0; i <= nbr3; i++ ){
        if (nbr3 % i == 0 ){
           list.push(i);
        }
    }
    document.getElementById("multiple").value = list;    
}

function diviseur(){
    var nbr4 = Number(document.getElementById("nbr4").value);
    
}