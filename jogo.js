function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    fruta.desenhar();
    if (fruta.teveColisao(cobra)){
        placar.pontuacao+=fruta.valor;
       fruta = new Fruta(10);
    
    
    }

       
         
    requestAnimationFrame(jogar)
}
let fruta=new Fruta(10);
jogar();

document.addEventListener("keydown",(evento) =>{
    if (evento.key=="w") cobra.direcao="cima";
    if (evento.key=="d") cobra.direcao="direita";
    if (evento.key=="s") cobra.direcao="baixo";
    if (evento.key=="a") cobra.direcao="esquerda";
})
