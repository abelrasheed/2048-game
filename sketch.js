

function setup() {
  // put setup code here
    createCanvas(1500,850);
    



}

function draw() {
  // put drawing code here
  background(200);
  strokeWeight(10);
  stroke('purple');
  drawBoard();

}

 function drawBoard(){
  let board_dimension = 140;
    for (let i=1;i<5;i++){
      for (let j = 1;j<5;j++){
        rect(board_dimension*i,board_dimension*j,board_dimension,board_dimension);
      }
    }
 }