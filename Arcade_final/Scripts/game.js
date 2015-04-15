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
/// <reference path="states/gameplay.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/menu.ts" />
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
var gamePlay;
var gameOver;
var menu;
var manifest = [
    { id: "cloud", src: "assets/images/cloud_4.png" },
    { id: "cloud1", src: "assets/images/cloud_1.png" },
    { id: "cloud2", src: "assets/images/cloud_2.png" },
    { id: "cloud3", src: "assets/images/cloud_3.png" },
    { id: "cloud4", src: "assets/images/cloud_5.png" },
    { id: "wind", src: "assets/images/swirl.png" },
    { id: "bushes", src: "assets/images/bushes.png" },
    { id: "grass", src: "assets/images/grass.png" },
    { id: "mountains", src: "assets/images/mountains.png" },
    { id: "island", src: "assets/images/blue-bubble-shiny.png" },
    { id: "ocean", src: "assets/images/dat-to-night.png" },
    { id: "sunmoon", src: "assets/images/sunmoon.png" },
    { id: "plane", src: "assets/images/day08_paperplane.png" },
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
    currentState = constants.MENU_STATE;
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
        case constants.MENU_STATE:
            // instantiate menu screen
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case constants.PLAY_STATE:
            // instantiate game play screen
            gamePlay = new states.GamePlay();
            currentStateFunction = gamePlay;
            break;
        case constants.GAME_OVER_STATE:
            // instantiate game over screen
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
    }
}
//# sourceMappingURL=game.js.map