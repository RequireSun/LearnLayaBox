
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class maskDemoUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":199,"x":58,"skin":"ui/logo_layabox.png"},"child":[{"type":"Sprite","props":{"y":-13,"x":21,"width":83,"renderType":"mask","height":62},"child":[{"type":"Circle","props":{"y":0,"x":40,"radius":50,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.maskDemoUI.uiView);

        }

    }
}
