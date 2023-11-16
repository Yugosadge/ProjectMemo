import * as save from "./save.js";
import * as display from "./display.js";
import * as game from "./game.js";

//Si session storage pas vide, connecte
if(sessionStorage.getItem("connected")){
  var connected = JSON.parse(sessionStorage.getItem("connected"))
}else{
  var connected
}

//Hide or display content div according to navigation buttons, Default display:Home
display.changeCurrent(Array.from(document.getElementsByClassName("navBtn")),connected)

//gestion form save Register/login/profil
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", () => {
    event.preventDefault();
    switch (form.id) {
      case "formRegister":
        if (!(save.getFormData(form).email == save.getData(save.getFormData(form).email).email)) {
          if (save.checkPassw(save.getFormData(form))) {
            if (document.getElementById("moyen").style.visibility == "visible"){
              const Registerx = save.getFormData(form);
              Registerx["images"] = "memory-legume";
              Registerx["tailleMemo"] = "0";
              save.saveDataLo(save.getFormData(form).email, Registerx);
            }else{
              alert("mdp pas assez fort")
            }
          } else {
            alert("mdp pas correspondre");
          }
        } else {
          alert("email existant");
        }
        break;
      case "formSignIn":
        if (
          (save.getFormData(form).email ==
            save.getData(save.getFormData(form).email).email) &
          (save.getFormData(form).password ==
            save.getData(save.getFormData(form).email).password)
        ) {
          const Registerd = save.getData(save.getFormData(form).email)
          sessionStorage.removeItem("connected")
         save.saveDataSe(
           "connected",
           Registerd
         );
          connected = Registerd;
        } else {
          alert("mauvais email ou mdp");
        }
        break;
      case "formProfil":
        if (connected){
        localStorage.removeItem(connected.email);
        }
        if (!save.getData(save.getFormData(form).email).email) {
          connected.email = save.getFormData(form).email;
        } else {
          alert("email existant");
        }
        connected.username = save.getFormData(form).username;
        connected.images = save.getFormData(form).cardstyle;
        connected.tailleMemo = save.getFormData(form).tailleMemo
        save.saveDataLo(connected.email, connected);
        save.saveDataSe("connected", connected);
    }
  });
});
//affichage password power
document.getElementById("password").addEventListener("keyup", () => {
      const mdp = document.getElementById("password").value
      document.getElementById("faible").style.visibility = "hidden"
      document.getElementById("moyen").style.visibility = "hidden"
      document.getElementById("fort").style.visibility = "hidden"
      if(/^.{6}/.test(mdp)){
        document.getElementById("faible").style.visibility="visible"
        if(/^(?=.*[0-9-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|])[A-Za-z\d-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]{6,}$/.test(mdp)){
          document.getElementById("moyen").style.visibility = "visible";
          if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|])[A-Za-z\d-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]{9,}$/.test(mdp)) {
            document.getElementById("fort").style.visibility = "visible";
          }else{document.getElementById("fort").style.visibility = "hidden";}
        }else{document.getElementById("moyen").style.visibility = "hidden";}

        }else{document.getElementById("faible").style.visibility="hidden"}
  })

//change les options select taille grille en fonction des images
document.getElementById("cardstyle").addEventListener("change",()=>{
  while(document.getElementById("tailleMemo").lastChild){
        document
          .getElementById("tailleMemo")
          .removeChild(document.getElementById("tailleMemo").lastChild);
    }
    const taille= ["4 X 3","4 X 4","5 X 4","6 X 6"]
    switch(document.getElementById("cardstyle").value){
    case "memory-legume" : 
    const opt = document.createElement('option')
    opt.value = "0"
    opt.innerHTML = "4 X 3"
    document.getElementById("tailleMemo").appendChild(opt)
    break
    case "alphabet-scrabble" :
      for(let i= 0;i<4;i++){
        const opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = taille[i];
        document.getElementById("tailleMemo").appendChild(opt);
      }
    break
    case "animaux" :
      for (let i = 0; i < 4; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = taille[i];
        document.getElementById("tailleMemo").appendChild(opt);
      }
    break
    case "animauxAnimes" :
      for (let i = 0; i < 2; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = taille[i];
        document.getElementById("tailleMemo").appendChild(opt);
      }
    break
    case "animauxdomestiques" :
      for(let i= 0;i<2;i++){
        const opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = taille[i];
        document.getElementById("tailleMemo").appendChild(opt);
      }
      break
    case "chiens":
      for (let i = 0; i < 4; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = taille[i];
        document.getElementById("tailleMemo").appendChild(opt);
      }
    break
    case "dinosaures" :
      for (let i = 0; i < 2; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = taille[i];
        document.getElementById("tailleMemo").appendChild(opt);
      }
    break
    case "dinosauresAvecNom" :
      for(let i= 0;i<2;i++){
        const opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = taille[i];
        document.getElementById("tailleMemo").appendChild(opt);
      }
  }
})

//affichage profil connecté
document.getElementById("navProfil").addEventListener("click", () => {
  if (connected) {
    document.getElementById("cProfilUser").innerHTML = connected.username;
    document.getElementById("pUsername").value = connected.username;
    document.getElementById("pEmail").value = connected.email;
  } else {
    document.getElementById("cProfilUser").innerHTML =
      "Vous n'êtes pas connecté";
  }
});
//lance le jeu au click sur jouer 
document.getElementById("navGame").addEventListener("click",() => {
    game.game(connected);
},false
);
//ou espace
document.addEventListener("keyup",() => {
  if(event.keyCode == 32){
    game.game(connected)};
  },
  false
);
