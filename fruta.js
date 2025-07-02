class Fruta extends ObjetoJogo {
    arqimagem="fruta.png";
    imagem;
    constructor(valor,...args){
        super(args);
        this.valor=valor;
        this.imagem = new Image();
        this.imagem.src =this.arqimagem;
    };
    desenhar(){
        ctx.drawImage(this.imagem,this.x,this.y, this.tamanho ,this.tamanho);
    }
}