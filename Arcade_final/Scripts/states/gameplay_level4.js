/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/wind.ts" />
/// <reference path="../objects/bushes.ts" />
/// <reference path="../objects/grass.ts" />
/// <reference path="../objects/mountains.ts" />
/// <reference path="../objects/sunmoon.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/asteroids.ts" />
/// <reference path="../objects/galaxy_bg.ts" />
/// <reference path="../objects/galaxy_milkyway.ts" />
/// <reference path="../objects/galaxy_dust.ts" />
/// <reference path="../objects/meteor.ts" />
/// <reference path="../objects/planet1.ts" />
/// <reference path="../objects/planet2.ts" />
/// <reference path="../objects/planet3.ts" />
/// <reference path="../objects/planet4.ts" />
/// <reference path="../objects/planet5.ts" />
/// <reference path="../objects/moon.ts" />
/// <reference path="../objects/hydro_cap.ts" />
/// <reference path="../objects/plane_powered.ts" />
/// <reference path="../objects/zepher.ts" />
/// <reference path="../objects/shootingstar.ts" />
/// <reference path="../objects/missile.ts" />
var states;
(function (states) {
    var GamePlay_level4 = (function () {
        function GamePlay_level4() {
            this.missile = [];
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.moon = new objects.Moon();
            this.game.addChild(this.moon);
            //Mountains object
            this.zepher = new objects.Zepher();
            this.game.addChild(this.zepher);
            //Bubbles object
            this.hydro_cap = new objects.Hydro_Cap();
            this.game.addChild(this.hydro_cap);
            //Plane object
            this.plane_pw = new objects.Plane_Powered();
            this.game.addChild(this.plane_pw);
            for (var windno = 3; windno >= 0; windno--) {
                this.missile[windno] = new objects.Missile();
                this.game.addChild(this.missile[windno]);
            }
            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        // DISTANCE CHECKING METHOD
        GamePlay_level4.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }; //Distance Method
        // CHECK COLLISION METHOD
        GamePlay_level4.prototype.checkCollision = function (collider) {
            if (this.scoreboard.active) {
                var planePosition = new createjs.Point(this.plane_pw.x, this.plane_pw.y);
                var objectPosition = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.plane_pw.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        createjs.Sound.play(collider.sound);
                        if (collider.name == "missile") {
                            this.scoreboard.lives--;
                        }
                        if (collider.name == "hydro_cap") {
                            this.scoreboard.score += 10;
                            this.hydro_cap.reset();
                            this.hydro_cap.update();
                        }
                    }
                    collider.isColliding = true;
                }
                else {
                    collider.isColliding = false;
                }
            }
        }; // checkCollision Method
        GamePlay_level4.prototype.update = function () {
            this.moon.update();
            this.zepher.update();
            this.hydro_cap.update();
            this.plane_pw.update();
            this.checkCollision(this.hydro_cap);
            for (var windno = 3; windno >= 0; windno--) {
                this.missile[windno].update();
                this.checkCollision(this.missile[windno]);
            }
            this.scoreboard.update();
            if (this.scoreboard.lives < 1) {
                this.scoreboard.active = false;
                createjs.Sound.stop();
                currentScore = this.scoreboard.score;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
            if (this.scoreboard.score > 30) {
                this.scoreboard.active = false;
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_WIN;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return GamePlay_level4;
    })();
    states.GamePlay_level4 = GamePlay_level4; // GamePlay Class
})(states || (states = {})); // States Module
//# sourceMappingURL=gameplay_level4.js.map