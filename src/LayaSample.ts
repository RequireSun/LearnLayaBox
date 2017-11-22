// 说明文档里的 module 命名空间用法看不懂, 就全都放在全局上了
import Loader = Laya.Loader;
import Handler = Laya.Handler;
import maskDemoUI = ui.maskDemoUI;

// 程序入口
class GameMain {
    private logo1: string = "logo/logo_layabox.png";
    private logo2: string = "logo/logo_tencent.png";
    private logoCompensator: string = "logo/Icon_attach_Muzzle_Compensator_Large.png";
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
        // Laya.loader.load([this.logo1, this.logo2], Laya.Handler.create(this, this.graphicsImage));
        /**
         * 图片第三课
         * ui 遮罩
         */
        // Laya.loader.load('res/atlas/ui.atlas', Laya.Handler.create(this, this.onLoaded));
        /**
         * 图片第四课
         * 滤镜
         */
        this.createImage(20, 50);
        this.createFilterRed();
        this.createFilterGray();
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
    // private graphicsImage(): void { 
    //     this.img = new Laya.Sprite();
    //     Laya.stage.addChild(this.img);

    //     this.switchImage();
    //     this.img.on(Laya.Event.CLICK, this, this.switchImage);
    //     this.img.pos(100, 50);
    //     /**
    //      * 图片第三节
    //      * 图片遮罩
    //      * 创建 circle 的位置和 pos 的位置是叠加的
    //      * 遮罩层不显示的地方也会触发 click 事件
    //      */
    //     this.cMask = new Laya.Sprite();
    //     this.cMask.graphics.drawCircle(0, 50, 50, '#ff0000');
    //     this.cMask.pos(50, 0);
    //     this.img.mask = this.cMask;
    // }
    // private switchImage(): void {
    //     this.img.graphics.clear();
    //     var imgUrl: string = (this.flag = !this.flag) ? this.logo1 : this.logo2;
    //     var texture: Laya.Texture = Laya.loader.getRes(imgUrl);
    //     this.img.graphics.drawTexture(texture);
    //     this.img.size(texture.width, texture.height);
    // }
    /**
     * 图片第三课
     * ui 加载完成事件
     */
    // private onLoaded(): void {
    //     this.cMask = new maskDemoUI();
    //     Laya.stage.addChild(this.cMask);
    // }
    /**
     * 图片第四课
     * 创建图片
     */
    private createImage(w:number, h:number): Laya.Sprite {
        var img:Laya.Sprite = new Laya.Sprite();
        Laya.stage.addChild(img);
        img.loadImage(this.logoCompensator, w, h);
        return img;
    }
    /**
     * 图片第四课
     * 红色滤镜
     */
    private createFilterRed(): void {
        var colorMatrix: any = [
            1, 0, 0, 0, 0, //R
            0, 0, 0, 0, 0, //G
            0, 0, 0, 0, 0, //B
            0, 0, 0, 1, 0, //A
        ];
        var redFilter: Laya.ColorFilter = new Laya.ColorFilter(colorMatrix);
        var img: Laya.Sprite = this.createImage(200, 50);
        img.filters = [redFilter];
    }
    /**
     * 图片第四课
     * 灰色滤镜
     */
    private createFilterGray(): void {
        var colorMatrix: any = [
            0.3086, 0.6094, 0.0820, 0, 0,  //R
            0.3086, 0.6094, 0.0820, 0, 0, //G
            0.3086, 0.6094, 0.0820, 0, 0,  //B
            0, 0, 0, 1, 0, //A
        ];
        var grayFilter: Laya.ColorFilter = new Laya.ColorFilter(colorMatrix);
        var img: Laya.Sprite = this.createImage(380, 50);
        img.filters = [grayFilter];
    }
}

new GameMain();