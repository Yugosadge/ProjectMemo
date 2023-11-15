var nbcoup = 0

export function game(){
    //ini
    const legumes = [
      "./srcs/memory-legume/1.svg",
      "./srcs/memory-legume/2.svg",
      "./srcs/memory-legume/3.svg",
      "./srcs/memory-legume/4.svg",
      "./srcs/memory-legume/5.svg",
      "./srcs/memory-legume/6.svg",
      "./srcs/memory-legume/1.svg",
      "./srcs/memory-legume/2.svg",
      "./srcs/memory-legume/3.svg",
      "./srcs/memory-legume/4.svg",
      "./srcs/memory-legume/5.svg",
      "./srcs/memory-legume/6.svg",
    ];
    const grille = document.getElementById("cGame")
    while(grille.lastChild){
        grille.removeChild(grille.lastChild)
    }
    for(let i = 1; i<4;i++){
        for(let j = 1;j<5;j++){
            //nouvelle div index ij 
            const newCard = document.createElement('div');
            newCard.id = i+""+j;
            newCard.className = "gameCard";
            newCard.style.gridColumn = j;
            newCard.style.gridRow=i;
            grille.appendChild(newCard)
            //image index aleatoire dans tableau d'image
            const picture = document.createElement("img")
            let rand = getRandomInt(0,legumes.length)
            picture.className="picture"
            picture.src = legumes[rand]
            legumes.splice(rand,1)
            newCard.appendChild(picture)
            //ajout img interog
            const interog = document.createElement("img")
            interog.className = "interog"
            interog.src = "./srcs/question.svg"
            newCard.appendChild(interog)
        }
    }
    nbcoup=0
    enableClick()
}
let firstCard,secondCard
let tour = 0
let turned = 0
//fonction jeu
function getCard(e){
    console.log(nbcoup);
    let good =false
    if(tour%2==0){
        do{
            good = turnCheck(e)
        }while (good = false)
        firstCard = e.target
        tour++
        turned++
        disableClick();
        enableClick();
    }else{
        do{
            good = turnCheck(e)
        }while (good = false)
        secondCard = e.target
        tour++
        turned++
        disableClick()
    } 
    if(turned == 2){
        nbcoup++;
        checkCard(firstCard,secondCard)
        turned = 0;
    }
}

function checkCard(first,second){
    if (
      first.getElementsByClassName("picture")[0].src ==
      second.getElementsByClassName("picture")[0].src
    ) {
      setTimeout(() => {
        first.setAttribute("value", 2);
        second.setAttribute("value", 2);
        checkWin();
      }, 100);
    } else {
      setTimeout(() => {
        unTurn(first);
        unTurn(second);
        enableClick();
      }, 500);
    }
}
function checkWin(){
    let Win=0
    for(let i=0;i<12;i++){
      if (document.getElementById("cGame").children[i].getAttribute("value") == 2) {
        Win++;
      }
    }
    if(Win == 12){
        disableClick()
        afficherWin()
    }else{
        enableClick()
    }
}
function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function turnCheck(elem){
    if(!elem.target.getAttribute("value")){
        turn(elem)
        return true;
    }else{
        return false;
    }
}
function turn(elem){
    elem.target.style.transform = "rotateY(180deg)";
    elem.target.setAttribute("value",1);
}
function unTurn(elem){
        elem.style.transform = "rotateY(0deg)";
        elem.setAttribute("value", "");
}
function disableClick(){
    document
      .getElementById("cGame")
      .querySelectorAll(".gameCard")
      .forEach((card) => {
        card.removeEventListener("click", getCard);
      });
}
function enableClick(){
    document.getElementById("cGame").querySelectorAll(".gameCard").forEach(card => {
        if (
          (card.getAttribute("value") != 1) &
          (card.getAttribute("value") != 2)
        ) {
          card.addEventListener("click", getCard);
        }
    });
}
function afficherWin(){
    document.getElementById("cGame").querySelectorAll(".gameCard").forEach((card) => {
        card.style.filter = "blur(10px)";
        card.querySelector(".interog").style.visibility= "hidden"
      });
    const bravoDiv = document.createElement("div")
    const bravoSpan = document.createElement("span")
    bravoSpan.innerHTML="BRAVO ! <br>Vous avez gagné en "+nbcoup+" coups ! <br><strong class='piti'> Appuyez sur espace pour relancer</strong>"
    bravoSpan.className="winnerSpan"
    bravoDiv.appendChild(bravoSpan)
    bravoDiv.className="winner"
    bravoDiv.style.filter = "blur(0px)";
    document.getElementById("cGame").prepend(bravoDiv)
    bravoDiv.style.opacity = "1";
}