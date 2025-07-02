const cobra = {
    tamanho:10,
    cor: "black",
    velocidade:5,
    direcao:"direita",
    x:400,
    y:260,
    vida:3,
    desenhar(){
        ctx.fillStyle=this.cor;
        ctx.fillRect(this.x,this.y,this.tamanho,this.tamanho);
    },
    mover(){
        if (this.direcao=="direita") this.x=this.x+this.velocidade*1;
        if (this.direcao=="esquerda") this.x=this.x-this.velocidade*1;;
        if (this.direcao=="baixo") this.y=this.y+this.velocidade*1;;
        if (this.direcao=="cima") this.y=this.y-this.velocidade*1;;
        console.log(this.x);
        if ((this.y <60)|| (this.y > 450)) this.morrer();
        if((this.x < 0)|| (this.x > 790)) this.morrer();
    },
    morrer(){
        this.vida--,
        this.x=400;
        this.y=260;
        if(this.vida == 2) this.cor="orange"
        if(this.vida == 1) this.cor="red"


    }
}

