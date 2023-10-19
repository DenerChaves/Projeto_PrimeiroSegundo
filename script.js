const comecar = document.querySelector("#comecar");
const sugestaoR = document.querySelector("#sugestaoR");
const sugestaoC = document.querySelector("#sugestaoC");
const sugestaoL = document.querySelector("#sugestaoL");
const sugestaoH = document.querySelector("#sugestaoH");
const sugestaoG = document.querySelector("#sugestaoG");
const p = document.querySelector("#p");
const a = document.querySelector("#a");

// Classifiquei algums generos com algumas caracteristicas em comun, baseado no estudo feito pela telecine



let gp_romance_comedia_romantica = 0;
let gp_classicos_cinema_nacional = 0;
let gp_lgbt_comedia_animacoes = 0;
let gp_herois_suspense = 0;
let gp_grama = 0;
i = 0;
let resposta = 0;
lista = [
  "Voce quer um final feliz ? 1-SIM / 2-NÃO", 
  "Voce esta acompanhado de uma namorada ? 1-SIM / 2-NÃO",
  "Voce esta acompanhado de um amigo ? 1-SIM / 2-NÃO",
  "Voce se importa mais com o presente ou futuro ? 1-PRESENTE / 2-FUTURO",
  "Ja se imaginou em outra realidade, era boa ou ruim ? 1-BOA / 2-RUIM",
  "Esta se sentindo relaxado ? 1-SIM / 2-NÃO",
  "Ja quis conhecer outro planeta ? 1-SIM / 2-NÃO",
  "Qualidade tecnica é importante para voce em um filme ou serie ? 1-SIM / 2-NÃO",
  "Voce consegue descrever oque sente agora ? 1-SIM / 2-NÃO"
];

// Quando o botão comecar for selecionado pelo usuario, ele ira executar uma funcão, e essa funcão permitirar que o sistema altere o conteudo dentro dos outros dois botões que sera necessario para o 

sugestaoR.style.display =  "none";
sugestaoC.style.display =  "none";
sugestaoL.style.display =  "none";
sugestaoH.style.display =  "none";
sugestaoG.style.display =  "none";

comecar.onclick = function() {
  alert("Por favor responda as perguntas apenas com os numeros 1 e 2");
  comecar.style.display = "none";
  
  lista.forEach(function(item){
    
    resposta = Number(prompt(item));
   

    if(resposta == 1 && i == 0){
    gp_romance_comedia_romantica += 1;
    
    }
    if(resposta == 1 && i == 1){
    gp_romance_comedia_romantica++;
    }
    if(resposta == 1 && i == 2){
    gp_classicos_cinema_nacional++;
    }
    if(resposta == 1 && i == 3){
    gp_classicos_cinema_nacional++;
    }
    if(resposta == 1 && i == 4){
    gp_lgbt_comedia_animacoes++;
    }
    if(resposta == 1 && i == 5){
    gp_lgbt_comedia_animacoes++;
    }
    if(resposta == 1 && i == 6){
    gp_herois_suspense++;
    }
    if(resposta == 1 && i == 7){
    gp_grama++;
    }
    if(resposta == 1 && i == 8){
    gp_herois_suspense++;
    }
    
    i++;
    
  });
  console.log("Romance: " + gp_romance_comedia_romantica);
  console.log("Comedia: " +  gp_lgbt_comedia_animacoes);
  console.log("Cinema: " + gp_classicos_cinema_nacional);
  console.log("Animacao: " + gp_herois_suspense);
  console.log("Drama: " + gp_grama);
  
//   sugestao.style.display = "block";
 
  if(gp_romance_comedia_romantica ==2){
    sugestaoR.style.display = "block";
  }
  if(gp_lgbt_comedia_animacoes ==2){
    sugestaoL.style.display = "block";
  }
  if(gp_classicos_cinema_nacional ==2){
    sugestaoC.style.display = "block";
  }
  if(gp_herois_suspense ==2){
    sugestaoH.style.display = "block";
  }
  if(gp_grama == 1){
    sugestaoG.style.display = "block";
  }
  }

