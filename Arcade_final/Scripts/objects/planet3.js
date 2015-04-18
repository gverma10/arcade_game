var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Planet3 = (function (_super) {
        __extends(Planet3, _super);
        // CONSTRUCTOR
        function Planet3() {
            _super.call(this, "planet3");
            //this.sound = "thunder";
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Planet3.prototype.update = function () {
            this.y += this._dy;
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Planet3.prototype.reset = function () {
            this.x = 640 + this.width;
            this.y = Math.floor(Math.random() * 200) + 30;
            this._dx = Math.floor(Math.random() * 3) + 1;
            this._dy = Math.floor(Math.random());
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Planet3.prototype._checkBounds = function () {
            // check if island has left the side of the screen
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Planet3;
    })(objects.GameObject);
    objects.Planet3 = Planet3;
})(objects || (objects = {}));
//# sourceMappingURL=planet3.js.map