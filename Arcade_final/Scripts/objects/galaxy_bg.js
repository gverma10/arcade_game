var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Galaxy_BG = (function (_super) {
        __extends(Galaxy_BG, _super);
        // CONSTRUCTOR
        function Galaxy_BG() {
            _super.call(this, "galaxy_bg");
            this._dx = 1;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Galaxy_BG.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Galaxy_BG.prototype.reset = function () {
            this.x = 640;
            this.y = 240;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Galaxy_BG.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x <= (-320)) {
                this.reset();
            }
        };
        return Galaxy_BG;
    })(objects.GameObject);
    objects.Galaxy_BG = Galaxy_BG;
})(objects || (objects = {}));
//# sourceMappingURL=galaxy_bg.js.map