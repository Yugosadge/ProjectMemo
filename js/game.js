

var nbcoup = 0
var cardx = 0

export function game(user){
     const imgArray = {
       "memory-legume": [
         "./srcs/memory-legume/1.svg",
         "./srcs/memory-legume/2.svg",
         "./srcs/memory-legume/3.svg",
         "./srcs/memory-legume/4.svg",
         "./srcs/memory-legume/5.svg",
         "./srcs/memory-legume/6.svg",
       ],
       "alphabet-scrabble": [
         "./srcs/alphabet-scrabble/1.png",
         "./srcs/alphabet-scrabble/2.png",
         "./srcs/alphabet-scrabble/3.png",
         "./srcs/alphabet-scrabble/4.png",
         "./srcs/alphabet-scrabble/5.png",
         "./srcs/alphabet-scrabble/6.png",
         "./srcs/alphabet-scrabble/7.png",
         "./srcs/alphabet-scrabble/8.png",
         "./srcs/alphabet-scrabble/9.png",
         "./srcs/alphabet-scrabble/10.png",
         "./srcs/alphabet-scrabble/11.png",
         "./srcs/alphabet-scrabble/12.png",
         "./srcs/alphabet-scrabble/13.png",
         "./srcs/alphabet-scrabble/14.png",
         "./srcs/alphabet-scrabble/15.png",
         "./srcs/alphabet-scrabble/16.png",
         "./srcs/alphabet-scrabble/17.png",
         "./srcs/alphabet-scrabble/18.png",
         "./srcs/alphabet-scrabble/19.png",
         "./srcs/alphabet-scrabble/20.png",
         "./srcs/alphabet-scrabble/21.png",
         "./srcs/alphabet-scrabble/22.png",
         "./srcs/alphabet-scrabble/23.png",
         "./srcs/alphabet-scrabble/24.png",
         "./srcs/alphabet-scrabble/25.png",
         "./srcs/alphabet-scrabble/26.png",
       ],
       "animaux": [
         "./srcs/animaux/1.webp",
         "./srcs/animaux/2.webp",
         "./srcs/animaux/3.webp",
         "./srcs/animaux/4.webp",
         "./srcs/animaux/5.webp",
         "./srcs/animaux/6.webp",
         "./srcs/animaux/7.webp",
         "./srcs/animaux/8.webp",
         "./srcs/animaux/9.webp",
         "./srcs/animaux/10.webp",
         "./srcs/animaux/11.webp",
         "./srcs/animaux/12.webp",
         "./srcs/animaux/13.webp",
         "./srcs/animaux/14.webp",
         "./srcs/animaux/15.webp",
         "./srcs/animaux/16.webp",
         "./srcs/animaux/17.webp",
         "./srcs/animaux/18.webp",
         "./srcs/animaux/19.webp",
         "./srcs/animaux/20.webp",
         "./srcs/animaux/21.webp",
         "./srcs/animaux/22.webp",
         "./srcs/animaux/23.webp",
         "./srcs/animaux/24.webp",
         "./srcs/animaux/25.webp",
         "./srcs/animaux/26.webp",
         "./srcs/animaux/27.webp",
         "./srcs/animaux/28.webp",
       ],
       "animauxAnimes": [
         "./srcs/animauxAnimes/1.webp",
         "./srcs/animauxAnimes/2.webp",
         "./srcs/animauxAnimes/3.webp",
         "./srcs/animauxAnimes/4.webp",
         "./srcs/animauxAnimes/5.webp",
         "./srcs/animauxAnimes/6.webp",
         "./srcs/animauxAnimes/7.webp",
         "./srcs/animauxAnimes/8.webp",
       ],
       "animauxdomestiques": [
         "./srcs/animauxdomestiques/1.jpg",
         "./srcs/animauxdomestiques/2.jpg",
         "./srcs/animauxdomestiques/3.jpg",
         "./srcs/animauxdomestiques/4.jpg",
         "./srcs/animauxdomestiques/5.jpg",
         "./srcs/animauxdomestiques/6.jpg",
         "./srcs/animauxdomestiques/7.jpg",
         "./srcs/animauxdomestiques/8.jpg",
         "./srcs/animauxdomestiques/9.jpg",
         "./srcs/animauxdomestiques/10.jpg",
       ],
       "chiens": [
         "./srcs/chiens/1.webp",
         "./srcs/chiens/2.webp",
         "./srcs/chiens/3.webp",
         "./srcs/chiens/4.webp",
         "./srcs/chiens/5.webp",
         "./srcs/chiens/6.webp",
         "./srcs/chiens/7.webp",
         "./srcs/chiens/8.webp",
         "./srcs/chiens/9.webp",
         "./srcs/chiens/10.webp",
         "./srcs/chiens/11.webp",
         "./srcs/chiens/12.webp",
         "./srcs/chiens/13.webp",
         "./srcs/chiens/14.webp",
         "./srcs/chiens/15.webp",
         "./srcs/chiens/16.webp",
         "./srcs/chiens/17.webp",
         "./srcs/chiens/18.webp",
         "./srcs/chiens/19.webp",
         "./srcs/chiens/20.webp",
         "./srcs/chiens/21.webp",
         "./srcs/chiens/22.webp",
         "./srcs/chiens/23.webp",
       ],
       "dinosaures": [
         "./srcs/dinosaures/1.jpg",
         "./srcs/dinosaures/2.jpg",
         "./srcs/dinosaures/3.jpg",
         "./srcs/dinosaures/4.jpg",
         "./srcs/dinosaures/5.jpg",
         "./srcs/dinosaures/6.jpg",
         "./srcs/dinosaures/7.jpg",
         "./srcs/dinosaures/8.jpg",
         "./srcs/dinosaures/9.jpg",
         "./srcs/dinosaures/10.jpg",
       ],
       "dinosauresAvecNom": [
         "./srcs/dinosauresAvecNom/1.jpg",
         "./srcs/dinosauresAvecNom/2.jpg",
         "./srcs/dinosauresAvecNom/3.jpg",
         "./srcs/dinosauresAvecNom/4.jpg",
         "./srcs/dinosauresAvecNom/5.jpg",
         "./srcs/dinosauresAvecNom/6.jpg",
         "./srcs/dinosauresAvecNom/7.jpg",
         "./srcs/dinosauresAvecNom/8.jpg",
         "./srcs/dinosauresAvecNom/9.jpg",
         "./srcs/dinosauresAvecNom/10.jpg",
       ],
     };
    const choosenImgArray=[]
    let index = 0;
    let x
    const arrayColumn = [4,4,5,6]
    const arrayRow = [3,4,4,6];
    const nbcartes = [6,8,10,18]
    if(!user){
      x=0
      cardx = 12
      for (let j = 0; j < 2; j++) {
        for (let i = 0; i < imgArray["memory-legume"].length; i++) {
          choosenImgArray[index] = imgArray["memory-legume"][i];
          index++;
        }
      }
    }else{
      const tabimg = []
      x=user.tailleMemo;
      cardx=nbcartes[x]
      for(let i = 0; i<nbcartes[x] ;i++){
        tabimg[i]=imgArray[user.images][i];
      }
      for (let j = 0; j < 2; j++) {
        for (let i = 0; i < tabimg.length; i++) {
          choosenImgArray[index] = tabimg[i];
          index++;
        }
      }
    }
    //clean le cGame
    const grille = document.getElementById("cGame")
    while(grille.lastChild){
        grille.removeChild(grille.lastChild)
    }
    const grid = document.getElementById("cGame")
    if(user){
      grid.style.gridTemplateColumns="repeat(" + arrayColumn[x] + ",1fr)"
      grid.style.gridTemplateRow = "repeat(" + arrayRow[x] + ",1fr)";
    }else{
      grid.style.gridTemplateColumns = "repeat(" + 4 + ",1fr)";
      grid.style.gridTemplateRow = "repeat(" + 3 + ",1fr)";
    }
    //genere les divs x*y assigne images
    for(let i = 1; i<arrayRow[x]+1;i++){
        for(let j = 1;j<arrayColumn[x]+1;j++){
            //nouvelle div index ij 
            const newCard = document.createElement('div');
            newCard.id = i+""+j;
            newCard.className = "gameCard";
            newCard.style.gridColumn = j;
            newCard.style.gridRow=i;
            grille.appendChild(newCard)
            //image index aleatoire dans tableau d'image
            const picture = document.createElement("img")
            picture.style.transform = "rotateY(180deg) translateZ(1px)";
            let rand = getRandomInt(0,choosenImgArray.length)
            picture.className="picture"
            picture.src = choosenImgArray[rand]
            choosenImgArray.splice(rand,1)
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
      }, 700);
    }
}
function checkWin(){
    let Win=0
    for(let i=0;i<cardx;i++){
      if (document.getElementById("cGame").children[i].getAttribute("value") == 2) {
        Win++;
      }
    }
    if(Win == cardx){
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