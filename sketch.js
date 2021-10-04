
function setup() {
  // put setup code here
    createCanvas(1500,850);
    board_values = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ]
    console.table(board_values);
    random_insert();
    console.table(board_values);
    random_insert();
    console.table(board_values);


}

function draw() {
  // put drawing code here
  background(200);
  
  drawBoard();


}

//  Draws the 4*4 board, with the values 
 function drawBoard(){
  let board_dimension = 140;
    for (let i=0;i<4;i++){
      for (let j = 0;j<4;j++){
        strokeWeight(10);
        stroke('purple');
        rect(board_dimension*(i+1),board_dimension*(j+1),board_dimension,board_dimension);
        noStroke();
        textSize(50);
        textAlign(CENTER,CENTER);
        if (board_values[i][j] != 0){ 
          text(board_values[i][j],board_dimension*(i+1)+(board_dimension/2),board_dimension*(j+1)+(board_dimension/2));
        }
      }
    }
 }

//  Inserts a 4 or a 2 with a 50% probability in any position in the board that is unoccupied
 function random_insert(){
  let selection_pool = [];
  for (let i=0;i<4;i++){
    for (let j = 0;j<4;j++){
      if(board_values[i][j] == 0){
          selection_pool.push([i,j]);
      }
      }
    }
    let selected = random(selection_pool);
      let determinor = random(1);
      if (determinor > 0.5){
        board_values[selected[0]][selected[1]] = 4 
      }
      else{
        board_values[selected[0]][selected[1]] = 2
  }
 }

//   shift everything towards the right (downwards in the board)
 function shift(arr){
   new_arr = [];
   for (let i=0;i<arr.length;i++){
      if (arr[i]!=0){
        new_arr.push(arr[i])
      }
   }
    difference = arr.length - new_arr.length;
    zeros = Array(difference).fill(0);
    new_arr = zeros.concat(new_arr);
    return new_arr;
  
 }

 function keyPressed(){
   if (key == " "){
    for (let i=0;i < 4;i++){
      board_values[i] = shift(board_values[i]);
    }
    random_insert();
   }
 }