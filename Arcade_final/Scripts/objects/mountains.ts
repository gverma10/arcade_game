module objects {
    // ISLAND CLASS
    export class Mountains extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("mountains");
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
            this.x = 320;
            this.y = 250;
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