// 程序入口
class GameMain {
    private logo1: string = "logo/logo_layabox.png";
    private logo2: string = "logo/logo_tencent.png";
    private flag: boolean = false;
    private img: Laya.Sprite;
    private cMask: Laya.Sprite;

    constructor() {
        //创建舞台，默认背景色是黑色的
        // 重中之重, 不要丢
        Laya.init(600, 300);
        Laya.stage.bgColor = '#0ff';
        /**
         * 文字第一课
         */
        // var txt: Laya.Text = new Laya.Text();
        // //设置文本内容
        // txt.text = "Hello Layabox";
        // //设置文本颜色
        // txt.color = "#FF0000";
        // //设置文本字体大小，单位是像素
        // txt.fontSize = 66;
        // //设置字体描边
        // txt.stroke = 5;//描边为5像素
        // txt.strokeColor = "#FFFFFF";
        // //设置为粗体
        // txt.bold = true;
        // //设置文本的显示起点位置X,Y
        // txt.pos(60, 100);
        // //设置舞台背景色
        // Laya.stage.bgColor = '#23238E';
        // //将文本内容添加到舞台 
        // Laya.stage.addChild(txt);
        /**
         * 图片第一课
         */
        // this.img = new Laya.Sprite();
        // this.switchImage();
        // this.img.on(Laya.Event.CLICK, this, this.switchImage);
        // //添加到舞台
        // Laya.stage.addChild(this.img);
        /**
         * 图片第二课
         */
        Laya.loader.load([this.logo1, this.logo2], Laya.Handler.create(this, this.graphicsImage));
    }
    /**
     * 图片第一课
     * 点击事件
     */
    // private switchImage(): void {
    //     this.img.graphics.clear();
    //     var imgUrl: string = (this.flag = !this.flag) ? this.logo1 : this.logo2;
    //     this.img.loadImage(imgUrl, 100, 50);
    // }
    /**
     * 图片第二课
     * 加载完成事件
     */
    private graphicsImage(): void { 
        this.img = new Laya.Sprite();
        Laya.stage.addChild(this.img);

        this.switchImage();
        this.img.on(Laya.Event.CLICK, this, this.switchImage);
        this.img.pos(100, 50);
        /**
         * 图片第三节
         * 图片遮罩
         * 创建 circle 的位置和 pos 的位置是叠加的
         * 遮罩层不显示的地方也会触发 click 事件
         */
        this.cMask = new Laya.Sprite();
        this.cMask.graphics.drawCircle(0, 50, 50, '#ff0000');
        this.cMask.pos(50, 0);
        this.img.mask = this.cMask;
    }
    private switchImage(): void {
        this.img.graphics.clear();
        var imgUrl: string = (this.flag = !this.flag) ? this.logo1 : this.logo2;
        var texture: Laya.Texture = Laya.loader.getRes(imgUrl);
        this.img.graphics.drawTexture(texture);
        this.img.size(texture.width, texture.height);
    }
}
new GameMain();