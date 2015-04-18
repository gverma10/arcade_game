/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/cloud1.ts" />
/// <reference path="../objects/cloud2.ts" />
/// <reference path="../objects/cloud3.ts" />
/// <reference path="../objects/cloud4.ts" />
/// <reference path="../objects/wind.ts" />
/// <reference path="../objects/grass.ts" />
/// <reference path="../objects/bushes.ts" />
/// <reference path="../objects/mountains.ts" />
/// <reference path="../objects/sunmoon.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // MENU STATE CLASS
    var Menu_level2 = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu_level2() {
            this.play = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);
            //Game Over Label
            this.mailPilotLabel = new objects.Label(320, 40, "PAPER PLANES");
            this.mailPilotLabel.font = "60px Consolas";
            this.mailPilotLabel.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel);
            this.mailPilotLabel1 = new objects.Label(250, 140, "welcome to level 2");
            this.mailPilotLabel1.font = "24px Consolas";
            this.mailPilotLabel1.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel1.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel1);
            //Play Button
            this.playButton = new objects.Button(320, 280, "playButton");
            this.playButton.on("click", this.playClicked, this);
            this.game.addChild(this.playButton);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        Menu_level2.prototype.playClicked = function () {
            this.play = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu_level2.prototype.update = function () {
            this.ocean.update();
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE_LEVEL2;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Menu_level2;
    })();
    states.Menu_level2 = Menu_level2; // Menu Class
})(states || (states = {})); // States Module
//# sourceMappingURL=menu_level2.js.map