/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
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
    var GamePlay_level2 = (function () {
        function GamePlay_level2() {
            // public bushes: objects.Bushes;
            //public grass: objects.Grass;
            this.meteor = [];
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.galaxy_bg = new objects.Galaxy_BG();
            this.game.addChild(this.galaxy_bg);
            //SunMoon object
            this.galaxy_dust = new objects.Galaxy_Dust();
            this.game.addChild(this.galaxy_dust);
            //Mountains object
            this.galaxy_milkyway = new objects.Galaxy_MW();
            this.game.addChild(this.galaxy_milkyway);
            //Bubbles object
            this.asteroid = new objects.Asteroid();
            this.game.addChild(this.asteroid);
            //Cloud object
            this.planet1 = new objects.Planet1();
            this.game.addChild(this.planet1);
            //Cloud1 object
            this.planet2 = new objects.Planet2();
            this.game.addChild(this.planet2);
            //Cloud2 object
            this.planet3 = new objects.Planet3();
            this.game.addChild(this.planet3);
            //Cloud3 object
            this.planet4 = new objects.Planet4();
            this.game.addChild(this.planet4);
            //Cloud4 object
            this.planet5 = new objects.Planet5();
            this.game.addChild(this.planet5);
            //Plane object
            this.plane = new objects.Plane();
            this.game.addChild(this.plane);
            for (var windno = 3; windno >= 0; windno--) {
                this.meteor[windno] = new objects.Meteor();
                this.game.addChild(this.meteor[windno]);
            }
            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        // DISTANCE CHECKING METHOD
        GamePlay_level2.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }; //Distance Method
        // CHECK COLLISION METHOD
        GamePlay_level2.prototype.checkCollision = function (collider) {
            if (this.scoreboard.active) {
                var planePosition = new createjs.Point(this.plane.x, this.plane.y);
                var objectPosition = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.plane.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        createjs.Sound.play(collider.sound);
                        if (collider.name == "meteor") {
                            this.scoreboard.lives--;
                        }
                        if (collider.name == "asteroid") {
                            this.scoreboard.score += 10;
                            this.asteroid.reset();
                            this.asteroid.update();
                        }
                    }
                    collider.isColliding = true;
                }
                else {
                    collider.isColliding = false;
                }
            }
        }; // checkCollision Method
        GamePlay_level2.prototype.update = function () {
            this.galaxy_bg.update();
            this.galaxy_dust.update();
            this.galaxy_milkyway.update();
            this.asteroid.update();
            this.plane.update();
            /*for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud].update();

                this.checkCollision(this.clouds[cloud]);
            }*/
            this.planet1.update();
            this.planet2.update();
            this.planet3.update();
            this.planet4.update();
            this.planet5.update();
            this.checkCollision(this.asteroid);
            for (var windno = 3; windno >= 0; windno--) {
                this.meteor[windno].update();
                this.checkCollision(this.meteor[windno]);
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
                currentState = constants.MENU_STATE_LEVEL3;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return GamePlay_level2;
    })();
    states.GamePlay_level2 = GamePlay_level2; // GamePlay Class
})(states || (states = {})); // States Module
//# sourceMappingURL=gameplay_level2.js.map