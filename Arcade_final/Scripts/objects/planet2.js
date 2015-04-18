var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Planet2 = (function (_super) {
        __extends(Planet2, _super);
        // CONSTRUCTOR
        function Planet2() {
            _super.call(this, "planet2");
            //this.sound = "thunder";
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Planet2.prototype.update = function () {
            this.y += this._dy;
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Planet2.prototype.reset = function () {
            this.x = 640 + this.width;
            this.y = Math.floor(Math.random() * 200) + 10;
            this._dx = Math.floor(Math.random() * 3) + 1;
            this._dy = Math.floor(Math.random());
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Planet2.prototype._checkBounds = function () {
            // check if island has left the side of the screen
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Planet2;
    })(objects.GameObject);
    objects.Planet2 = Planet2;
})(objects || (objects = {}));
//# sourceMappingURL=planet2.js.map