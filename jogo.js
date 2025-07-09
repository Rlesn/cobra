function inicioJogo(){
    placar.nomeJogo="Jogo da Cobra"
    placar.pontuacao=0;
    cobra.vida=3;
    cobra.cor="white";
    cobra.velocidade=2;
    trilha.play();
    jogar();
}

function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    apple.desenhar();
    if (apple.teveColisao(cobra)){
        placar.pontuacao+=apple.valor;
        cobra.crescer();
        cobra.velocidade++;
        comida.play();
        apple = new Fruta(10);   
    } 
        if (placar.pontuacao >= 20){
            placar.nomeJogo = "você venceu";
            placar.desenhar();
            let imagemFim = new Image();
            imagemFim.src = "imagem2.png";
            ctx.drawImage(imagemFim,200, 100, 200, 200 );
            return;  
        }
    
    if (cobra.vida > 0){
        requestAnimationFrame(jogar);
    }
    else
    {
        trilha.pause();
        trilha.currentTime=0;
        gameover.play();
        placar.nomeJogo = "Fim de Jogo. Clique na tela para jogar...";
        placar.desenhar()  
    }
}

const trilha = new Audio();
trilha.src= "trilhasonora.mp3";
const comida = new Audio();
comida.src= "comida.mp3";
const gameover = new Audio();
gameover.src= "gameover.mp3";
let apple = new Fruta(10);
placar.nomeJogo="Clique na tela para começar o jogo..."
placar.desenhar();
tela.desenhar();

document.addEventListener("click",inicioJogo);
document.addEventListener("keydown",(evento) =>{  
    if ((evento.key== "w") && (cobra.direcao=="direita"  || cobra.direcao=="esquerda"))   cobra.direcao="cima";      
    if ((evento.key== "d") && (cobra.direcao=="cima"  || cobra.direcao=="baixo"))         cobra.direcao="direita";
    if ((evento.key== "s") && (cobra.direcao=="direita"  || cobra.direcao=="esquerda"))   cobra.direcao="baixo";
    if ((evento.key== "a") && (cobra.direcao=="cima"  || cobra.direcao=="baixo"))         cobra.direcao="esquerda";
})