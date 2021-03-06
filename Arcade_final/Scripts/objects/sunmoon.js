var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var SunMoon = (function (_super) {
        __extends(SunMoon, _super);
        // CONSTRUCTOR
        function SunMoon() {
            _super.call(this, assetLoader.getResult("sunmoon"));
            // PUBLIC INSTANCE VARIABLES
            this._dy = 1;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        SunMoon.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        // Reset position of island to the top
        SunMoon.prototype.reset = function () {
            this.y = -960;
            this.x = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        SunMoon.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.y === 420) {
                this.reset();
            }
        };
        return SunMoon;
    })(createjs.Bitmap);
    objects.SunMoon = SunMoon;
})(objects || (objects = {}));
//# sourceMappingURL=sunmoon.js.map