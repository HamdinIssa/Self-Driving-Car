class Road{

    constructor(x,width,laneCount=3){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;


        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=1000000;
        this.top=-infinity;
        this.bottom=infinity;

        const topLeft={x:this.left,y:this.top};
        const topRight={x:this.right,y:this.top};
        const bottomLeft={x:this.left,y:this.bottom};
        const bottomRight={x:this.right,y:this.bottom};


        this.boarders=[
            [topLeft,bottomLeft],
            [topRight,bottomRight]
        ]



    }

    getLaneCenter(laneIndex){
        const lanewidth=this.width/this.laneCount;
        return this.left+lanewidth/2+
        Math.min(laneIndex,this.laneCount-1)*lanewidth;
    }
    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        for(let i=1;i<=this.laneCount-1;i++){
            const x=lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
           
            ctx.setLineDash([20,20]);
            
            ctx.beginPath();
            ctx.moveTo(x,this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();
        }
        ctx.setLineDash([]);
        this.boarders.forEach(
            boarder=>{
                ctx.beginPath();
                ctx.moveTo(boarder[0].x,boarder[0].y);
                ctx.lineTo(boarder[1].x,boarder[1].y);
                ctx.stroke();
            }
        );
          

    }

}