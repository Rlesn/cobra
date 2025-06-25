class Fruta{
    arqimagem="fruta.png";
    imagem;
    desenhar(){
        this.imagem = new Image();
        this.imagem.src =this.arqimagem;
        ctx.drawImage(this.imagem,500,300,20,20)
    }
}