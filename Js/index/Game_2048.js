var Game2048Rect;

function Game_2048_Start() {
    Game2048Rect = new Array(new Array(0, 0, 0, 0), new Array(0, 0, 0, 0), new Array(0, 0, 0, 0), new Array(0, 0, 0, 0));

    RandPosition();
    RandPosition();
    Update_Map();
    console.log(Game2048Rect);

    document.getElementById('Game-2048').className = 'Game-2048-Start';
    document.getElementById('Game-2048-StartButton').className = 'Game-2048-StartButton-Start';
    document.getElementById('Game-2048-BackGround').className = "Game-2048-BackGround-Start";
    document.getElementById('Game-2048-Body').className = "Game-2048-Body-Start";
}
function Game_2048_Top() {
    var ismove = merge_Rect(Game2048Rect);
    if (ismove) {
        RandPosition();
    }
    Update_Map();
}
function Game_2048_Bottom() {
    Game2048Rect = Rectangle_Rotate("fz");
    var ismove = merge_Rect(Game2048Rect);
    Game2048Rect = Rectangle_Rotate("fz");
    if (ismove) {
        RandPosition();
    }
    Update_Map();
}
function Game_2048_Left() {
    Game2048Rect = Rectangle_Rotate("ssz");
    var ismove = merge_Rect(Game2048Rect);
    Game2048Rect = Rectangle_Rotate("nsz");
    if (ismove) {
        RandPosition();
    }
    Update_Map();

}
function Game_2048_Right() {
    Game2048Rect = Rectangle_Rotate("nsz");
    var ismove = merge_Rect(Game2048Rect)
    Game2048Rect = Rectangle_Rotate("ssz");
    if (ismove) {
        RandPosition();
    }
    Update_Map();

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
    if (ans != undefined) {
        Game2048Rect[ans[0]][ans[1]] = 2;
        document.getElementById("Game-2048-Cell-" + ans[0].toString() + "-" + ans[1].toString()).className = "Game-2048-Cell Game-2048-Cell-Grow";
        var interval = setInterval(function () {
            document.getElementById("Game-2048-Cell-" + ans[0].toString() + "-" + ans[1].toString()).className = "Game-2048-Cell Game-2048-Cell-Default";
            clearInterval(interval);
        }, 1000);
    }
}

function Update_Map() {
    for (var i = 0; i < Game2048Rect.length; ++i) {
        for (var j = 0; j < Game2048Rect[i].length; ++j) {
            document.getElementById("Game-2048-Cell-" + i.toString() + "-" + j.toString()).innerHTML = Game2048Rect[i][j].toString();
            switch (Game2048Rect[i][j].toString().length) {
                case 1:
                    document.getElementById("Game-2048-Cell-" + i.toString() + "-" + j.toString()).style.fontSize = "30px";
                    break;
                case 2:
                    document.getElementById("Game-2048-Cell-" + i.toString() + "-" + j.toString()).style.fontSize = "30px";
                    break;
                case 3:
                    document.getElementById("Game-2048-Cell-" + i.toString() + "-" + j.toString()).style.fontSize = "26px";
                    break;
                case 4:
                    document.getElementById("Game-2048-Cell-" + i.toString() + "-" + j.toString()).style.fontSize = "22px";
                    break;
                case 5:
                    document.getElementById("Game-2048-Cell-" + i.toString() + "-" + j.toString()).style.fontSize = "18px";
                    break;
            }
        }
    }
}

function merge_Rect(matrix) {
    var IsMove = false;
    for (var col = 0; col < matrix[0].length; ++col) {
        for (var row = 0; row < matrix.length; ++row) {
            if (matrix[row][col] == 0) {
                for (var tmp = row + 1; tmp < matrix.length; ++tmp) {
                    if (matrix[tmp][col] != 0) {
                        IsMove = true;
                        matrix[row][col] = matrix[tmp][col];
                        matrix[tmp][col] = 0;
                        break;
                    }
                }
                if (matrix[row][col] == 0) {
                    break;
                }
            }
            for (var tmp = row + 1; tmp < matrix.length; ++tmp) {
                if (matrix[tmp][col] != 0) {
                    if (matrix[tmp][col] == matrix[row][col]) {
                        IsMove = true;
                        matrix[row][col] += matrix[tmp][col];
                        matrix[tmp][col] = 0;
                    }
                    else if (row + 1 != tmp) {
                        IsMove = true;
                        matrix[row + 1][col] = matrix[tmp][col];
                        matrix[tmp][col] = 0;
                    }
                    break;
                }
            }
        }
    }
    return IsMove;
}

function Rectangle_Rotate(direct) {
    var ResultRect = new Array();
    for (var i = 0; i < Game2048Rect[0].length; ++i) {
        ResultRect.push(new Array());
    }
    if (direct == "ssz") {
        for (var row = 0; row < Game2048Rect.length; ++row) {
            for (var col = 0; col < Game2048Rect[row].length; ++col) {
                ResultRect[col][Game2048Rect.length - row - 1] = Game2048Rect[row][col];
            }
        }
    }
    else if (direct == "nsz") {
        for (var row = 0; row < Game2048Rect.length; ++row) {
            for (var col = 0; col < Game2048Rect[row].length; ++col) {
                ResultRect[Game2048Rect[0].length - col - 1][row] = Game2048Rect[row][col];
            }
        }
    }
    else if (direct == "fz") {
        for (var row = 0; row < Game2048Rect.length; ++row) {
            for (var col = 0; col < Game2048Rect[row].length; ++col) {
                ResultRect[Game2048Rect[0].length - row - 1][Game2048Rect[0].length - col - 1] = Game2048Rect[row][col];
            }
        }
    }
    return ResultRect;
}