var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Missile = (function (_super) {
        __extends(Missile, _super);
        // CONSTRUCTOR
        function Missile() {
            _super.call(this, "missile");
            this.sound = "thunder";
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Missile.prototype.update = function () {
            this.y += this._dy;
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Missile.prototype.reset = function () {
            this.x = 640 + this.width;
            this.y = Math.floor(Math.random() * 380) + 10;
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 4) - 2;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Missile.prototype._checkBounds = function () {
            // check if island has left the side of the screen
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Missile;
    })(objects.GameObject);
    objects.Missile = Missile;
})(objects || (objects = {}));
//# sourceMappingURL=missile.js.map