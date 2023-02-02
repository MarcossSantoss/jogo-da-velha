//Cria e inicializa o vetor de casas
var aiCasas = [9, 9, 9, 9, 9, 9, 9, 9, 9];
//cria uma var q idica o jogado da vez
var iVez = 1 //(1)xis (-1) bolinha
var iContaClique = 0;
var iPontosX = 0;
var iPontosO = 0;
var sResposta = "";
var lGanhou = false;
var lAcabou = true;

function id(sId){
    return document.getElementById(sId);
}

function verificar(iCasa){
    //casa n foi clicada
   if(aiCasas[iCasa]==9){
     //modifica o conteudo do vetor
       aiCasas[iCasa]=iVez;
       if(iVez==1){
           id("img"+iCasa).src ="imagens/xis.jpg";
           
       }else{
            id("img"+iCasa).src ="imagens/bola.jpg";
           
       }
       iVez*= -1; //iVeZ = iVez * -1
       iContaClique++;
       confere();
   } 
}

function confere(){
    for(var i=0;i<aiCasas.length;i++){
        if(aiCasas[i]==9){
            lAcabou=false;
            break;
        }
    }
    if(iContaClique==9){
        lAcabou=true;
    }
    var aiSoma=[];
    aiSoma[0]=aiCasas[0]+aiCasas[1]+aiCasas[2];//L1
    aiSoma[1]=aiCasas[3]+aiCasas[4]+aiCasas[5];//L2
    aiSoma[2]=aiCasas[6]+aiCasas[7]+aiCasas[8];//L3
    aiSoma[3]=aiCasas[0]+aiCasas[3]+aiCasas[6];//C1
    aiSoma[4]=aiCasas[1]+aiCasas[4]+aiCasas[7];//C2
    aiSoma[5]=aiCasas[2]+aiCasas[5]+aiCasas[8];//C3
    aiSoma[6]=aiCasas[0]+aiCasas[4]+aiCasas[8];//D1
    aiSoma[7]=aiCasas[2]+aiCasas[4]+aiCasas[6];//D2

    for(var i=0;i<aiSoma.length;i++){
        if(aiSoma[i]==3){
            lGanhou=true;
            sResposta = "X GANHOU!";
            iPontosX++;
            id("xis").innerHTML = "PONTOS X: " + iPontosX;
            break;
        }else if(aiSoma[i]==-3){
                lGanhou=true;
                sResposta = "BOLA GANHOU!";
                iPontosO++;
                id("bola").innerHTML = "PONTOS O: " + iPontosO;
                break;
        
        }
    }
      if(lGanhou==false && lAcabou==true){
        sResposta = "VELHA!";
        iPontosV++;
        id("velha").innerHTML = "VELHA...: " + iPontosV;
    }

    if(lAcabou || lGanhou){
        for(var i=0;i<aiCasas.length;i++){
            id("casa"+i).disabled = true;
            aiCasas[i] = 0;
        }
        id("resposta").innerHTML = sResposta;
        id("resposta").style.color = "#00CED1";
    }

}

function recomecar(){
    for(var i=0;i<aiCasas.length;i++){
        id("casa"+i).disabled = false;
        id("img"+i).src="";
        id("resposta").innerHTML = "RESULTADO: ";
        id("resposta").style.color = "#6d30cf";
        aiCasas[i]= 9;
    }
    lGanhou = false;
    lAcabou = true;
    iContaClique = 0;
    iVez = 1;
}