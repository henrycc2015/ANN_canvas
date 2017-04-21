var ocrDemo = {
    CANVAS_WIDTH: 200,
    TRANSLATED_WIDTH: 20,
    PIXEL_WIDTH: 10, // TRANSLATED_WIDTH = CANVAS_WIDTH / PIXEL_WIDTH
    BATCH_SIZE: 1,

    // 服务器端参数
    PORT: "9000",
    HOST: "http://localhost",

    // 颜色变量
    BLACK: "#000000",
    BLUE: "#0000ff",

    // 客户端训练数据集
    trainArray: [],
    trainingRequestCount: 0,

    onLoadFunction: function() {
        this.resetCanvas();
    },
    resetCanvas:function(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        this.data = [];

        ctx.fillStyle = this.BLACK;
        ctx.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_WIDTH)
        var matrixSize = 400;
        while (matrixSize--) this.data.push(0);
        this.drawGrid(ctx);

        canvas.onmousemove = function (e) {

        }
    },
    drawGrid:function (ctx) {
        for(var x = this.PIXEL_WIDTH,y = this.PIXEL_WIDTH;x< this.CANVAS_WIDTH; x += this.PIXEL_WIDTH,y += this.PIXEL_WIDTH){
            ctx.strokeStyle = this.BLUE;
            ctx.beginPath();
            ctx.moveTo(x,0);
            ctx.lineTo(x,this.CANVAS_WIDTH);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0,y);
            ctx.lineTo(this.CANVAS_WIDTH,y);
            ctx.stroke();
        }
    }

}