var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Zepher = (function (_super) {
        __extends(Zepher, _super);
        // CONSTRUCTOR
        function Zepher() {
            _super.call(this, "zepher");
            this._dx = 1;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Zepher.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Zepher.prototype.reset = function () {
            this.x = 640;
            this.y = 240;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Zepher.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x <= (-320)) {
                this.reset();
            }
        };
        return Zepher;
    })(objects.GameObject);
    objects.Zepher = Zepher;
})(objects || (objects = {}));
//# sourceMappingURL=zepher.js.map