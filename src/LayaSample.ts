// 说明文档里的 module 命名空间用法看不懂, 就全都放在全局上了
// 说明文档里的 module 用法简直是一坨屎, 不要瞎用, 用起来跟 js 里的 with 差不多, 简直坑死了
import Loader = Laya.Loader;
import Handler = Laya.Handler;
import maskDemoUI = ui.maskDemoUI;
import Sprite = Laya.Sprite;
import WebGL = Laya.WebGL;
import Stage = Laya.Stage;

// 程序入口
class GameMain {
    private logo1: string = "logo/logo_layabox.png";
    private logo2: string = "logo/logo_tencent.png";
    private logoCompensator: string = "logo/Icon_attach_Muzzle_Compensator_Large.png";
    private atlasMy: string = 'my_atlas/TID_girl_with_cat.atlas';
    private flag: boolean = false;
    private img: Laya.Sprite;
    private cMask: Laya.Sprite;

    private sp: Sprite;

    constructor() {
        // 平滑矢量图棱角, 超耗性能, 没事别开
        // Laya.Config.isAntialias = true;
        //创建舞台，默认背景色是黑色的
        // 重中之重, 不要丢
        Laya.init(800, 480);
        // 这句会开启 WebGL 模式
        // Laya.init(800, 480, WebGL);
        Laya.stage.bgColor = '#333';
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
        // this.createImage(20, 50);
        // this.createFilterRed();
        // this.createFilterGray();

        /**
         * 图片第五课
         * 发光 / 阴影 / 模糊 (记得在 Laya.init 里传入参数开启 WebGL)
         */
        // this.createImage(20, 50);
        // this.createFilterGlow();
        // this.createFilterShadow();
        // this.createFilterBlur();

        /**
         * 第六课绘图
         */
        // this.drawLine();
        // this.drawLines();
        // this.drawCurves();

        /**
         * 第七课绘制多边形
         */
        // this.drawPolygon();
        // this.drawTriangle();
        // this.drawStar();

        /**
         * 第八课其他图形
         */
        // this.drawCircle();
        // this.drawPie();
        // this.drawRect();
        // this.drawPath();
        // this.drawPath2();

        /**
         * 第九课图集
         */
        Laya.loader.load(this.atlasMy, Laya.Handler.create(this, this.onLoaded));
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
    //
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
     * 图片第四课 & 图片第五课
     * 创建图片
     */
    // private createImage(w: number, h: number): Laya.Sprite {
    //     var img: Laya.Sprite = new Laya.Sprite();
    //     Laya.stage.addChild(img);
    //     img.loadImage(this.logoCompensator, w, h);
    //     return img;
    // }

    // /**
    //  * 图片第四课
    //  * 红色滤镜
    //  */
    // private createFilterRed(): void {
    //     var colorMatrix: any = [
    //         1, 0, 0, 0, 0, //R
    //         0, 0, 0, 0, 0, //G
    //         0, 0, 0, 0, 0, //B
    //         0, 0, 0, 1, 0, //A
    //     ];
    //     var redFilter: Laya.ColorFilter = new Laya.ColorFilter(colorMatrix);
    //     var img: Laya.Sprite = this.createImage(200, 50);
    //     img.filters = [redFilter];
    // }
    // /**
    //  * 图片第四课
    //  * 灰色滤镜
    //  */
    // private createFilterGray(): void {
    //     var colorMatrix: any = [
    //         0.3086, 0.6094, 0.0820, 0, 0,  //R
    //         0.3086, 0.6094, 0.0820, 0, 0, //G
    //         0.3086, 0.6094, 0.0820, 0, 0,  //B
    //         0, 0, 0, 1, 0, //A
    //     ];
    //     var grayFilter: Laya.ColorFilter = new Laya.ColorFilter(colorMatrix);
    //     var img: Laya.Sprite = this.createImage(380, 50);
    //     img.filters = [grayFilter];
    // }
    // /**
    //  * 图片第五课
    //  * 发光滤镜
    //  */
    // private createFilterGlow(): void {
    //     //创建发光滤镜
    //     var glowFilter:Laya.GlowFilter = new Laya.GlowFilter("#ff0000", 150, 0, 0)
    //     //在坐标280,50创建位图
    //     var img:Laya.Sprite = this.createImage(200,50);         
    //     //添加发光滤镜
    //     img.filters = [glowFilter];
    // }
    // /**
    //  * 图片第五课
    //  * 阴影滤镜
    //  */
    // private createFilterShadow(): void {
    //     //创建阴影滤镜
    //     var glowFilter:Laya.GlowFilter = new Laya.GlowFilter("#000000", 80, 8, 8)
    //     //在坐标460,50创建位图
    //     var img:Laya.Sprite = this.createImage(380,50);            
    //     //添加阴影滤镜
    //     img.filters = [glowFilter];         
    // }
    // /**
    //  * 图片第五课
    //  * 模糊滤镜
    //  */
    // private createFilterBlur(): void {
    //     //创建模糊滤镜实例
    //     var blurFilter:Laya.BlurFilter = new Laya.BlurFilter();
    //     //设置模糊强度
    //     blurFilter.strength = 5;
    //     //在坐标280,50创建位图
    //     var img:Laya.Sprite = this.createImage(560,50);         
    //     //添加滤镜效果
    //     img.filters = [blurFilter];
    // }
    // /**
    //  * 第六课绘图
    //  * 画直线
    //  */
    // private drawLine(): void {
    //     this.sp = new Sprite();
    //     Laya.stage.addChild(this.sp);
    //     this.sp.graphics.drawLine(10, 20, 100, 250, '#f00', 8);
    // }
    // /**
    //  * 第六课绘图
    //  * 画折线
    //  */
    // private drawLines(): void {
    //     this.sp = new Sprite();
    //     Laya.stage.addChild(this.sp);
    //     // 这里跟直接画线有些许不同
    //     // 前两个参数是起始位置的偏移值, 后面画的点都是根据前两个值的偏移来的, 数组的前两个值才是真正的起点
    //     this.sp.graphics.drawLines(10, 20, [0, 40, 20, 40, 80, 100, 200, 0], '#0f0', 2);
    // }
    // /**
    //  * 第六课绘图
    //  * 画曲线
    //  */
    // private drawCurves(): void {
    //     this.sp = new Sprite();
    //     Laya.stage.addChild(this.sp);
    //     // laya 里面的贝塞尔曲线都是二次的, 不要以为有多高级
    //     this.sp.graphics.drawCurves(10, 40, [0, 0, 19, -100, 39, 0, 59, 100, 79, 0], '#f00', 3);
    // }

    // /**
    //  * 第七课绘制多边形
    //  * 画三角形
    //  */
    // private drawTriangle(): void {
    //     this.sp = new Sprite();
    //     Laya.stage.addChild(this.sp);
    //     this.sp.graphics.drawPoly(30, 28, [0, 100, 50, 0, 100, 100], '#ff0');
    // }
    // /**
    //  * 第七课绘制多边形
    //  * 画多边形
    //  */
    // private drawPolygon(): void {
    //     this.sp = new Sprite();
    //     Laya.stage.addChild(this.sp);
    //     // 根据前三个点决定从何处开始着色
    //     this.sp.graphics.drawPoly(200, 28, [0, 100, 50, 0, 100, 100, 0, 0, 25, 150], '#00f');
    // }
    // /**
    //  * 第七课绘制多边形
    //  * 画五角星
    //  */
    // private drawStar(): void {
    //     var canvas: Sprite = new Sprite();
    //     Laya.stage.addChild(canvas);

    //     var path: Array<number> = [];
    //     // 记得在点后面标注注释, 要不然迟早会忘掉的
    //     path.push(0, -130);
    //     path.push(33, -33);
    //     path.push(137, -30);
    //     path.push(55, 32);
    //     path.push(85, 130);
    //     path.push(0, 73);
    //     path.push(-85, 130);
    //     path.push(-55, 32);
    //     path.push(-137, -30);
    //     path.push(-33, -33);
    //
    //     canvas.graphics.drawPoly(Laya.stage.width / 2, Laya.stage.height / 2, path, '#ff7f50');
    // }

    // /**
    //  * 第八课其他图形
    //  * 画圆
    //  */
    // private drawCircle(): void {
    //     this.sp = new Sprite();
    //     Laya.stage.addChild(this.sp);
    //     this.sp.graphics.drawCircle(0, 0, 50, '#f00');
    // }
    // /**
    //  * 第八课其他图形
    //  * 画扇型
    //  */
    // private drawPie(): void {
    //     this.sp = new Sprite();
    //     Laya.stage.addChild(this.sp);
    //     this.sp.graphics.drawPie(100, 100, 50, 20, 120, '#0f0');
    // }
    // /**
    //  * 第八课其他图形
    //  * 画矩形
    //  */
    // private drawRect(): void {
    //     this.sp = new Sprite();
    //     Laya.stage.addChild(this.sp);
    //     this.sp.graphics.drawRect(20, 20, 100, 50, '#ff0');
    // }
    // /**
    //  * 第八课其他图形
    //  * 路径绘制
    //  */
    // private drawPath(): void {
    //     this.sp = new Sprite();
    //     Laya.stage.addChild(this.sp);

    //     var path: Array<Array<any>> = [
    //         ['moveTo', 0, 0,],
    //         ['lineTo', 100, 0,],
    //         ['lineTo', 100, 50,],
    //         ['lineTo', 0, 50,],
    //         ['lineTo', 0, 0,],
    //         ['closePath',],
    //     ];

    //     this.sp.graphics.drawPath(20, 20, path, { fillStyle: '#f00', });
    // }
    // /**
    //  * 第八课其他图形
    //  * 画星星
    //  */
    // private drawPath2(): void {
    //     this.sp = new Sprite();
    //     Laya.stage.addChild(this.sp);

    //     var path: Array<Array<any>> = [
    //         ['moveTo', -10, 0],           // 画笔的起始点
    //         ['lineTo', 170, 0],         // 这个直线其实可以省略的, 当 arc 的起点连不上之前的终点的时候, 会自动连线连接起来
    //         ['arcTo', 200, 0, 200, 30, 20],     // p1（500,0）为夹角B，（500,30）为端点p2
    //         ['arcTo', 200, 180, 170, 180, 20],  // p1（500,300）为夹角C，（470,300）为端点p2
    //         ['arcTo', 0, 180, 0, 140, 20],      // p1(0,300)为夹角D，（0,270）为端点p2
    //         ['arcTo', 0, 0, 30, 0, 20],         // p1(0,0)为夹角A，（30,0）为端点p2
    //     ];

    //     this.sp.graphics.drawPath(100, 100, path, { fillStyle: '#0ff', }, { strokeStyle: '#fff', lineWidth: 10, });
    // }

    private onLoaded(): void {
        var img: Laya.Image = new Laya.Image();
        img.skin = 'TID_girl_with_cat/TID_girl_with_cat_1.png';
        Laya.stage.addChild(img);
    }
}

new GameMain();