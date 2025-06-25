function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    fruta.desenhar();
    if (cobra.vida > 0)
    requestAnimationFrame(jogar)
}
let fruta=new Fruta();
jogar();

document.addEventListener("keydown",(evento) =>{
    if (evento.key=="8") cobra.direcao="cima";
    if (evento.key=="6") cobra.direcao="direita";
    if (evento.key=="2") cobra.direcao="baixo";
    if (evento.key=="4") cobra.direcao="esquerda";
})
