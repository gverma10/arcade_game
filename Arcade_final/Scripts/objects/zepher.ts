module objects {
    // ISLAND CLASS
    export class Zepher extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("zepher");
            this._dx = 1;

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dx;
            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.x = 640
            this.y = 240;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x <= (-320)) {
                this.reset();
            }
        }

    }

}   