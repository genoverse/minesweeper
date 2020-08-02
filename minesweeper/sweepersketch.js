//minesweeper

function make2DArray(cols, rows) {
    var arr = new Array(col);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(row);  
    }
    return arr;
}

var grid;
var cols;
var rows;
var w = 20;

var totalBees = 20;

function setup() {
    createCanvas(201,201);
    cols = floor(width / w);
    rows = floow(height / w);
    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < cols; j++) {
            grid[i][j] = new Cell(i, j, w); 
        }          
    }
}


// picktotalBees spots

var option = [];
for (var i = 0; i< cols; i++){
    for(var j = 0; j< rows; j++){
        options.push([i,j]);
    }
}
console.log(options);


for(var n = 0; n< totalBees ; n++){
    var index = floor(random(option.length));
    var choice = option[index];
    var i = choice[0];
    var j = choice[1];

    option.splice(index, 1);
    grid[i][j].bee = true;
}

for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
        grid[i][j].countBees();
        
    }
}    

function gameOver() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].reveal = true;
        }
    }

}

function mousePressed() {
    for (var i = 0; i< cols; i++){
        for(var j = 0; j< rows; j++){
            if (grid[i][j].contain(mouseX,mouseY)) {
                grid[i][j].reveal();

                if (grid[i][j].bee) {
                    gameOver();
                }
            }
        }
    }
}


function draw() {
    background(255);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }    
}