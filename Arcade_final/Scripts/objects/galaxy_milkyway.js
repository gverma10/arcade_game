var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var Galaxy_MW = (function (_super) {
        __extends(Galaxy_MW, _super);
        // CONSTRUCTOR
        function Galaxy_MW() {
            _super.call(this, assetLoader.getResult("galaxy_milkyway"));
            // PUBLIC INSTANCE VARIABLES
            this._dy = 2;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Galaxy_MW.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        // Reset position of island to the top
        Galaxy_MW.prototype.reset = function () {
            this.y = -200;
            this.x = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Galaxy_MW.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.y === 440) {
                this.reset();
            }
        };
        return Galaxy_MW;
    })(createjs.Bitmap);
    objects.Galaxy_MW = Galaxy_MW;
})(objects || (objects = {}));
//# sourceMappingURL=galaxy_milkyway.js.map