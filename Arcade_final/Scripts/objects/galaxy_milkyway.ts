module objects {
    // OCEAN CLASS
    export class Galaxy_MW extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        private _dy: number = 2;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("galaxy_milkyway"));

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y += this._dy;

            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.y = -200
            this.x = 0;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.y === 440) {
                this.reset();
            }
        }

    }

}  