var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var Galaxy_Dust = (function (_super) {
        __extends(Galaxy_Dust, _super);
        // CONSTRUCTOR
        function Galaxy_Dust() {
            _super.call(this, assetLoader.getResult("galaxy_dust"));
            // PUBLIC INSTANCE VARIABLES
            this._dy = 1;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Galaxy_Dust.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        // Reset position of island to the top
        Galaxy_Dust.prototype.reset = function () {
            this.y = -960;
            this.x = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Galaxy_Dust.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.y === 0) {
                this.reset();
            }
        };
        return Galaxy_Dust;
    })(createjs.Bitmap);
    objects.Galaxy_Dust = Galaxy_Dust;
})(objects || (objects = {}));
//# sourceMappingURL=galaxy_dust.js.map