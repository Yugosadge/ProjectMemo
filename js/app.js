import * as save from "./save.js";
import * as display from "./display.js";
import * as game from "./game.js";
var connected;

//Hide or display content div according to navigation buttons, Default display:Home
display.changeCurrent(Array.from(document.getElementsByClassName("navBtn")))

//Register/login/profil
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", () => {
    event.preventDefault();
    switch (form.id) {
      case "formRegister":
        if (
          !(
            save.getFormData(form).email ==
            save.getData(save.getFormData(form).email).email
          )
        ) {
          if (save.checkPassw(save.getFormData(form))) {
            save.saveData(save.getFormData(form).email, save.getFormData(form));
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
          connected = save.getData(save.getFormData(form).email);
        } else {
          alert("mauvais email ou mdp");
        }
        break;
      case "formProfil":
        localStorage.removeItem(connected.email);
        if (!save.getData(save.getFormData(form).email).email) {
          connected.email = save.getFormData(form).email;
        } else {
          alert("email existant");
        }
        connected.username = save.getFormData(form).username;
        connected.images = save.getFormData(form).cardstyle;
        save.saveData(connected.email, connected);
    }
  });
});

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
//lance le jeu au click sur jouer ou espace
document.getElementById("navGame").addEventListener("click",game.game)
if(document.getElementById("cGame").style.display != "none"    ){
  document.addEventListener("keyup", game.game);
}else{
  document.removeEventListener("keyup",game.game)
}