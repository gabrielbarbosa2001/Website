//Pega o checkbox
const botaoDark = document.getElementById("toogle-dark")

//Verificar se tem no localStorage seleção do dark theme
if (localStorage.getItem("data-theme") == "dark"){
    botaoDark.checked = true;
}

// Liga a função ao checkbox
botaoDark.addEventListener("change", () => {
    let theme = localStorage.getItem("data-theme");
    if(botaoDark.checked){
        changeThemeToLight()
   }else{
        changeThemeToDark()
    }
        
    }
)