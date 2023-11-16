//Hide or display content div according to navigation buttons, Default display:Home
export function changeCurrent(btns,user){
    btns.forEach(elem => {
        elem.addEventListener("click",()=> {
            for (let i = 0; i < btns.length; i++){
                document.getElementById(btns[i].getAttribute("value")).style.display="none";
            }
        if(document.getElementById(elem.getAttribute("value")).getAttribute("id") == "cGame"){
            document.getElementById(elem.getAttribute("value")).style.display ="grid";
        }
        else{
            document.getElementById(elem.getAttribute("value")).style.display="flex";
        }
        document.getElementById("current").innerText=elem.innerText;
    })
});
}
