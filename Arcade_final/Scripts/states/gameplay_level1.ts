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

module states {

    export class GamePlay {
        // Game Objects 
        public game: createjs.Container;
        public scoreboard: objects.ScoreBoard;
        public plane: objects.Plane;
        public island: objects.Island;
        public clouds: objects.Cloud;
        public cloud1: objects.Cloud1;
        public cloud2: objects.Cloud2;
        public cloud3: objects.Cloud3;
        public cloud4: objects.Cloud4;
        public mountains: objects.Mountains;
        public bushes: objects.Bushes;
        public grass: objects.Grass;
        public wind: objects.Wind[] = [];
        public ocean: objects.Ocean;
        public sunmoon: objects.SunMoon;

        constructor() {
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
           
            //wind Swrids object
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
        public  distance(p1: createjs.Point, p2: createjs.Point): number {
        return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } //Distance Method

        // CHECK COLLISION METHOD
        public checkCollision(collider: objects.GameObject) {
            if (this.scoreboard.active) {
                var planePosition: createjs.Point = new createjs.Point(this.plane.x, this.plane.y);
            var objectPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
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
            } else {
                collider.isColliding = false;
            }
        }
    } // checkCollision Method

        public update() {

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

            stage.update(); // Refreshes our stage

    } // Update Method

    } // GamePlay Class


} // States Module