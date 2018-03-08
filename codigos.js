var login_aberto=0;
var singin_aberto=0;
var esqueceu_aberto=0;

function showhide(){
    var hiddeninputs = document.getElementById("hidden-login");    
    if (login_aberto == 0){
        login_aberto++;
        hiddeninputs.style.display = "block";     
    }
     else{
        login_aberto--;
            hiddeninputs.style.display = "none";
        }
}


function showhide_cadastro(){
    var hiddeninputs = document.getElementById("hidden-singin");    
    if (login_aberto == 0){
        login_aberto++;
        hiddeninputs.style.display = "block";     
    }
     else{
        login_aberto--;
            hiddeninputs.style.display = "none";
        }
}