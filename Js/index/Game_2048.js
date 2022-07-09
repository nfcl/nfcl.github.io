var Game2048Rect;

function Game_2048_Start() {
    Game2048Rect = new Array(new Array(0, 0, 0, 0), new Array(0, 0, 0, 0), new Array(0, 0, 0, 0), new Array(0, 0, 0, 0));

    var GrowPos = RandPosition();
    Game2048Rect[GrowPos[0]][GrowPos[1]] = 2;
    GrowPos = RandPosition();
    Game2048Rect[GrowPos[0]][GrowPos[1]] = 2;
    Update_Map();
    console.log(Game2048Rect);

    document.getElementById('Game-2048').className = 'Game-2048-Start';
    document.getElementById('Game-2048-StartButton').className = 'Game-2048-StartButton-Start';
    document.getElementById('Game-2048-BackGround').className = "Game-2048-BackGround-Start";
    document.getElementById('Game-2048-Body').className = "Game-2048-Body-Start";
}
function Game_2048_Top() {
    alert('Top');

}
function Game_2048_Bottom() {
    alert('Bottom');

}
function Game_2048_Left() {
    alert('Left');

}
function Game_2048_Right() {
    alert('Right');

}
function RandPosition() {
    var ans;
    var cnt = 0;
    for (var i = 0; i < Game2048Rect.length; ++i) {
        for (var j = 0; j < Game2048Rect[i].length; ++j) {
            if (Game2048Rect[i][j] == 0) {
                cnt += 1; // µÚ cnt ´ÎÓöµ½ target
                if (Math.floor(Math.random() * cnt) === 0) {
                    ans = [i, j];
                }
            }
        }
    }
    if (Game2048Rect[ans[0]][ans[1]] != 0)
        return null;
    return ans;
}
function Update_Map() {
    for (var i = 0; i < Game2048Rect.length; ++i) {
        for (var j = 0; j < Game2048Rect[i].length; ++j) {
            document.getElementById("Game-2048-Cell-" + i.toString() + "-" + j.toString()).innerHTML = Game2048Rect[i][j].toString();
        }
    }
}