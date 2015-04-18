var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // PLANE CLASS
    var Plane_Powered = (function (_super) {
        __extends(Plane_Powered, _super);
        // CONSTRUCTOR
        function Plane_Powered() {
            _super.call(this, assetLoader.getResult("plane_power"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 80;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("engine", { loop: -1 });
        }
        // PUBLIC METHODS
        Plane_Powered.prototype.update = function () {
            this.y = stage.mouseY;
        };
        return Plane_Powered;
    })(createjs.Bitmap);
    objects.Plane_Powered = Plane_Powered;
})(objects || (objects = {}));
//# sourceMappingURL=plane_powered.js.map