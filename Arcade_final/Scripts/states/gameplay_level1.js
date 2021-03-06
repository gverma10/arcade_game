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
    var GamePlay_level1 = (function () {
        function GamePlay_level1() {
            this.wind = [];
            // Instantiate Game Container
            this.game = new createjs.Container();
            //this.cloud1 = new objects.Island();
            //this.game.addChild(this.cloud1);
            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);
            //SunMoon object
            this.sunmoon = new objects.SunMoon();
            this.game.addChild(this.sunmoon);
            //Mountains object
            this.mountains = new objects.Mountains();
            this.game.addChild(this.mountains);
            //Bushes object
            this.bushes = new objects.Bushes();
            this.game.addChild(this.bushes);
            //Bushes object
            this.grass = new objects.Grass();
            this.game.addChild(this.grass);
            //Bubbles object
            this.island = new objects.Island();
            this.game.addChild(this.island);
            //Cloud object
            /*for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud] = new objects.Cloud();
                this.game.addChild(this.clouds[cloud]);
            }*/
            this.clouds = new objects.Cloud();
            this.game.addChild(this.clouds);
            //Cloud1 object
            this.cloud1 = new objects.Cloud1();
            this.game.addChild(this.cloud1);
            //Cloud2 object
            this.cloud2 = new objects.Cloud2();
            this.game.addChild(this.cloud2);
            //Cloud3 object
            this.cloud3 = new objects.Cloud3();
            this.game.addChild(this.cloud3);
            //Cloud4 object
            this.cloud4 = new objects.Cloud4();
            this.game.addChild(this.cloud4);
            //Plane object
            this.plane = new objects.Plane();
            this.game.addChild(this.plane);
            for (var windno = 3; windno >= 0; windno--) {
                this.wind[windno] = new objects.Wind();
                this.game.addChild(this.wind[windno]);
            }
            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        // DISTANCE CHECKING METHOD
        GamePlay_level1.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }; //Distance Method
        // CHECK COLLISION METHOD
        GamePlay_level1.prototype.checkCollision = function (collider) {
            if (this.scoreboard.active) {
                var planePosition = new createjs.Point(this.plane.x, this.plane.y);
                var objectPosition = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.plane.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        createjs.Sound.play(collider.sound);
                        if (collider.name == "wind") {
                            this.scoreboard.lives--;
                        }
                        if (collider.name == "island") {
                            this.scoreboard.score += 10;
                            this.island.reset();
                            this.island.update();
                        }
                    }
                    collider.isColliding = true;
                }
                else {
                    collider.isColliding = false;
                }
            }
        }; // checkCollision Method
        GamePlay_level1.prototype.update = function () {
            this.ocean.update();
            this.sunmoon.update();
            this.mountains.update();
            this.bushes.update();
            this.grass.update();
            this.island.update();
            this.plane.update();
            /*for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud].update();

                this.checkCollision(this.clouds[cloud]);
            }*/
            this.clouds.update();
            this.cloud1.update();
            this.cloud2.update();
            this.cloud3.update();
            this.cloud4.update();
            this.checkCollision(this.island);
            for (var windno = 3; windno >= 0; windno--) {
                this.wind[windno].update();
                this.checkCollision(this.wind[windno]);
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
                currentState = constants.MENU_STATE_LEVEL2;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return GamePlay_level1;
    })();
    states.GamePlay_level1 = GamePlay_level1; // GamePlay Class
})(states || (states = {})); // States Module
//# sourceMappingURL=gameplay_level1.js.map