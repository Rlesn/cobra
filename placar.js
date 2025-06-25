const placar = {
    largura: 800,
    altura: 60,
    corFundo:"blue",
    corTexto:"white",
    pontuacao:0,
    nomeJogo:"IFRJ Cobra",
    desenhar(){
        ctx.fillStyle = this.corFundo;
        ctx.fillRect(0,0,this.largura,this.altura);
        ctx.fillStyle = this.corTexto;
        ctx.textAlign="center";
        ctx.textBaseline="middle";
        ctx.font="24px Fantasy"
        ctx.fillText(this.nomeJogo,this.largura/2,this.altura/2);
        ctx.textAlign="left";
        ctx.font="14px Fantasy"
        ctx.fillText(this.pontuacao+ " ponto(s)",10,3*this.altura/4);
        ctx.textAlign="right";
        ctx.fillText(cobra.vida + " vida(s)",this.largura-10,3*this.altura/4);
    }
}
