var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Grass = (function (_super) {
        __extends(Grass, _super);
        // CONSTRUCTOR
        function Grass() {
            _super.call(this, "grass");
            this._dx = 4;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Grass.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of grass
        Grass.prototype.reset = function () {
            this.x = 320;
            this.y = 255;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Grass.prototype._checkBounds = function () {
            // check if grass has left the bottom of the screen
            if (this.x <= (-321)) {
                this.reset();
            }
        };
        return Grass;
    })(objects.GameObject);
    objects.Grass = Grass;
})(objects || (objects = {}));
//# sourceMappingURL=grass.js.map