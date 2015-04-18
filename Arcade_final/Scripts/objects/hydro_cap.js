var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Hydro_Cap = (function (_super) {
        __extends(Hydro_Cap, _super);
        // CONSTRUCTOR
        function Hydro_Cap() {
            _super.call(this, "hydro_cap");
            this.sound = "yay";
            this._dy = 5;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Hydro_Cap.prototype.update = function () {
            this.x -= this._dy;
            this._checkBounds();
        };
        // Reset position of island to the top
        Hydro_Cap.prototype.reset = function () {
            this.x = 640 + this.width;
            this.y = Math.floor(Math.random() * 480);
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Hydro_Cap.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Hydro_Cap;
    })(objects.GameObject);
    objects.Hydro_Cap = Hydro_Cap;
})(objects || (objects = {}));
//# sourceMappingURL=hydro_cap.js.map