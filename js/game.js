
export function game(){
    const grille = document.getElementById("cGame")
    while(grille.lastChild){
        grille.removeChild(grille.lastChild)
    }
    for(let i = 1; i<4;i++){
        for(let j = 1;j<5;j++){
            var newCard = document.createElement('div');
            newCard.id = i+""+j;
            newCard.className = "gameCard";
            newCard.style.gridColumn = j;
            newCard.style.gridRow=i;
            grille.appendChild(newCard)
        }
    }
    for(let i = 0;i<6;i++){
        for(let j = 0; j<2;j++){
            document.getElementById(
              getRandomInt(1, 4) + "" + getRandomInt(1, 5)
            ).style.backgroundColor="black"
         
            
        }
    }
}

function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}