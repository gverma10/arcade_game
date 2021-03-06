﻿/// <reference path="../constants.ts" />
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


module states {

    export class GamePlay_level3 {
        // Game Objects 
        public game: createjs.Container;
        public scoreboard: objects.ScoreBoard;
        public plane_pw: objects.Plane_Powered;
        public hydro_cap: objects.Hydro_Cap;
        public zepher: objects.Zepher;
        public shooting_star: objects.Shooting_Star[] = [];
        public moon: objects.Moon;
        
        constructor() {
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
           
            //wind Swrids object
            for (var windno = 3; windno >= 0; windno--) {
                this.shooting_star[windno] = new objects.Shooting_Star();
                this.game.addChild(this.shooting_star[windno]);
            }
           
            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor


        // DISTANCE CHECKING METHOD
        public distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } //Distance Method

        // CHECK COLLISION METHOD
        public checkCollision(collider: objects.GameObject) {
            if (this.scoreboard.active) {
                var planePosition: createjs.Point = new createjs.Point(this.plane_pw.x, this.plane_pw.y);
                var objectPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.plane_pw.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        createjs.Sound.play(collider.sound);
                        if (collider.name == "shooting_star") {
                            this.scoreboard.lives--;
                        }

                        if (collider.name == "hydro_cap") {
                            this.scoreboard.score += 10;
                            this.hydro_cap.reset();
                            this.hydro_cap.update();
                        }
                    }
                    collider.isColliding = true;
                } else {
                    collider.isColliding = false;
                }
            }
        } // checkCollision Method

        public update() {

            this.moon.update();

            this.zepher.update();

            this.hydro_cap.update();

            this.plane_pw.update();

            this.checkCollision(this.hydro_cap);

            for (var windno = 3; windno >= 0; windno--) {
                this.shooting_star[windno].update();

                this.checkCollision(this.shooting_star[windno]);
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
                currentState = constants.MENU_STATE_LEVEL4;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

        } // Update Method

    } // GamePlay Class


} // States Module