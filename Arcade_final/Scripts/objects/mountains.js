var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Mountains = (function (_super) {
        __extends(Mountains, _super);
        // CONSTRUCTOR
        function Mountains() {
            _super.call(this, "mountains");
            this._dx = 1;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Mountains.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Mountains.prototype.reset = function () {
            this.x = 320;
            this.y = 250;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Mountains.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x <= (-320)) {
                this.reset();
            }
        };
        return Mountains;
    })(objects.GameObject);
    objects.Mountains = Mountains;
})(objects || (objects = {}));
//# sourceMappingURL=mountains.js.map