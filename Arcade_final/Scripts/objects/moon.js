var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var Moon = (function (_super) {
        __extends(Moon, _super);
        // CONSTRUCTOR
        function Moon() {
            _super.call(this, assetLoader.getResult("darkmoon"));
            // PUBLIC INSTANCE VARIABLES
            this._dy = 1;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Moon.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        // Reset position of island to the top
        Moon.prototype.reset = function () {
            this.y = -960;
            this.x = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Moon.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.y === 0) {
                this.reset();
            }
        };
        return Moon;
    })(createjs.Bitmap);
    objects.Moon = Moon;
})(objects || (objects = {}));
//# sourceMappingURL=moon.js.map