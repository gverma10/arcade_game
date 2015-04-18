/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/cloud1.ts" />
/// <reference path="objects/cloud2.ts" />
/// <reference path="objects/cloud3.ts" />
/// <reference path="objects/cloud4.ts" />
/// <reference path="objects/wind.ts" />
/// <reference path="objects/bushes.ts" />
/// <reference path="objects/grass.ts" />
/// <reference path="objects/mountains.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/sunmoon.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/asteroids.ts" />
/// <reference path="objects/galaxy_bg.ts" />
/// <reference path="objects/galaxy_milkyway.ts" />
/// <reference path="objects/galaxy_dust.ts" />
/// <reference path="objects/meteor.ts" />
/// <reference path="objects/planet1.ts" />
/// <reference path="objects/planet2.ts" />
/// <reference path="objects/planet3.ts" />
/// <reference path="objects/planet4.ts" />
/// <reference path="objects/planet5.ts" />
/// <reference path="objects/moon.ts" />
/// <reference path="objects/hydro_cap.ts" />
/// <reference path="objects/plane_powered.ts" />
/// <reference path="objects/zepher.ts" />
/// <reference path="objects/shootingstar.ts" />
/// <reference path="objects/missile.ts" />
/// <reference path="states/gameplay_level1.ts" />
/// <reference path="states/gameplay_level2.ts" />
/// <reference path="states/gameplay_level3.ts" />
/// <reference path="states/gameplay_level4.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/menu_level1.ts" />
/// <reference path="states/menu_level2.ts" />
/// <reference path="states/menu_level3.ts" />
/// <reference path="states/menu_level4.ts" />
/// <reference path="states/win.ts" />
// Global game Variables
var canvas;
var stage;
var assetLoader;
var stats = new Stats();
var currentScore = 0;
var highScore = 0;
// Game State Variables
var currentState;
var currentStateFunction;
var stateChanged = false;
var gamePlay1;
var gamePlay2;
var gamePlay3;
var gamePlay4;
var gameOver;
var gameWin;
var menu1;
var menu2;
var menu3;
var menu4;
var manifest = [
    { id: "cloud", src: "assets/images/cloud_4.png" },
    { id: "cloud1", src: "assets/images/cloud_1.png" },
    { id: "cloud2", src: "assets/images/cloud_2.png" },
    { id: "cloud3", src: "assets/images/cloud_3.png" },
    { id: "cloud4", src: "assets/images/cloud_5.png" },
    { id: "planet1", src: "assets/images/planet_4.png" },
    { id: "planet2", src: "assets/images/planet_1.png" },
    { id: "planet3", src: "assets/images/planet_2.png" },
    { id: "planet4", src: "assets/images/planet_3.png" },
    { id: "planet5", src: "assets/images/planet_5.png" },
    { id: "meteor", src: "assets/images/meteor-attack.png" },
    { id: "missile", src: "assets/images/missile.png" },
    { id: "wind", src: "assets/images/swirl.png" },
    { id: "bushes", src: "assets/images/bushes.png" },
    { id: "grass", src: "assets/images/grass.png" },
    { id: "mountains", src: "assets/images/mountains.png" },
    { id: "zepher", src: "assets/images/zepher_surface.png" },
    { id: "island", src: "assets/images/blue-bubble-shiny.png" },
    { id: "asteroid", src: "assets/images/asteroid.png" },
    { id: "hydro_cap", src: "assets/images/hydrogen capsule.png" },
    { id: "ocean", src: "assets/images/dat-to-night.png" },
    { id: "dust", src: "assets/images/dust.png" },
    { id: "sunmoon", src: "assets/images/sunmoon.png" },
    { id: "galaxy_bg", src: "assets/images/galaxy_bg_complete.png" },
    { id: "galaxy_dust", src: "assets/images/galaxy_dust_complete.png" },
    { id: "galaxy_milkyway", src: "assets/images/galaxy_milkyway.png" },
    { id: "darkmoon", src: "assets/images/moon.jpg" },
    { id: "shooting_star", src: "assets/images/shooting_star.png" },
    { id: "plane", src: "assets/images/paperplane.png" },
    { id: "plane_power", src: "assets/images/paperplane_power.png" },
    { id: "playButton", src: "assets/images/start.png" },
    { id: "tryAgainButton", src: "assets/images/playagain.png" },
    { id: "engine", src: "assets/audio/wind.mp3" },
    { id: "yay", src: "assets/audio/bubble.mp3" },
    { id: "thunder", src: "assets/audio/planecrash.mp3" }
];
function Preload() {
    assetLoader = new createjs.LoadQueue(); // create a new preloader
    assetLoader.installPlugin(createjs.Sound); // need plugin for sounds
    assetLoader.on("complete", init, this); // when assets finished preloading - then init function
    assetLoader.loadManifest(manifest);
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();
    currentState = constants.MENU_STATE_LEVEL1;
    changeState(currentState);
}
function setupStats() {
    stats.setMode(0);
    // align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';
    document.body.appendChild(stats.domElement);
}
function gameLoop() {
    stats.begin();
    if (stateChanged) {
        changeState(currentState);
        stateChanged = false;
    }
    else {
        currentStateFunction.update();
    }
    stats.end();
}
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE_LEVEL1:
            // instantiate menu screen
            menu1 = new states.Menu_level1();
            currentStateFunction = menu1;
            break;
        case constants.PLAY_STATE_LEVEL1:
            // instantiate game play screen
            gamePlay1 = new states.GamePlay_level1();
            currentStateFunction = gamePlay1;
            break;
        case constants.MENU_STATE_LEVEL2:
            // instantiate menu screen
            menu2 = new states.Menu_level2();
            currentStateFunction = menu2;
            break;
        case constants.PLAY_STATE_LEVEL2:
            // instantiate game play screen
            gamePlay2 = new states.GamePlay_level2();
            currentStateFunction = gamePlay2;
            break;
        case constants.MENU_STATE_LEVEL3:
            // instantiate menu screen
            menu3 = new states.Menu_level3();
            currentStateFunction = menu3;
            break;
        case constants.PLAY_STATE_LEVEL3:
            // instantiate game play screen
            gamePlay3 = new states.GamePlay_level3();
            currentStateFunction = gamePlay3;
            break;
        case constants.MENU_STATE_LEVEL4:
            // instantiate menu screen
            menu4 = new states.Menu_level4();
            currentStateFunction = menu4;
            break;
        case constants.PLAY_STATE_LEVEL4:
            // instantiate game play screen
            gamePlay4 = new states.GamePlay_level4();
            currentStateFunction = gamePlay4;
            break;
        case constants.GAME_OVER_STATE:
            // instantiate game over screen
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
        case constants.GAME_WIN:
            // instantiate game over screen
            gameWin = new states.Win();
            currentStateFunction = gameWin;
            break;
    }
}
//# sourceMappingURL=game.js.map