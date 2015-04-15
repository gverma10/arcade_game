module objects {
    // ISLAND CLASS
    export class Grass extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("grass");
            this._dx = 4;

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dx;
            this._checkBounds();
        }

        // Reset position of grass
        public reset() {
            this.x = 320;
            this.y = 255;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if grass has left the bottom of the screen
            if (this.x <= (-321)) {
                this.reset();
            }
        }

    }

}    