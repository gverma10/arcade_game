var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Bushes = (function (_super) {
        __extends(Bushes, _super);
        // CONSTRUCTOR
        function Bushes() {
            _super.call(this, "bushes");
            this._dx = 3;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Bushes.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Bushes.prototype.reset = function () {
            this.x = 320;
            this.y = 250;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Bushes.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x <= (-320)) {
                this.reset();
            }
        };
        return Bushes;
    })(objects.GameObject);
    objects.Bushes = Bushes;
})(objects || (objects = {}));
//# sourceMappingURL=bushes.js.map