
function setup() {
  // put setup code here
    createCanvas(1500,850);
    // create the initial board
    board_values = initialize_multidimen_array()

    // inserting initial values
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
  //  width of the square of each place.
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
        board_values[selected[0]][selected[1]] = 4;
      }
      else{
        board_values[selected[0]][selected[1]] = 2;
  }
 }

 

 function keyPressed(){ // performs the main operations, that is all the shifting operations for all the keys pressed
   if (keyCode === DOWN_ARROW){ // down operation
      board_values = main_operation(board_values);
   }
   else if (keyCode === UP_ARROW){ // Up operation
     reverse_values(board_values);
     board_values = main_operation(board_values);
   }
   else if(keyCode === RIGHT_ARROW){ // right operation
      board_values = matrix_transpose(board_values);
      board_values = main_operation(board_values);
   }
   else if(keyCode === LEFT_ARROW){ // left operation
     board_values = matrix_transpose(board_values);
     reverse_values(board_values);
     board_values = main_operation(board_values);
   }
    if (keyCode === UP_ARROW){
      reverse_values(board_values);
    }
    else if(keyCode === RIGHT_ARROW){
      board_values = matrix_transpose(board_values);
   }
   else if(keyCode === LEFT_ARROW){
    reverse_values(board_values);
    board_values = matrix_transpose(board_values);
   }
  }

 

 function right_shift_and_merge(arr){ //performs the complete right shift and merging operation.
    arr = right_shift(arr);
    arr = merge_right(arr);
    arr = right_shift(arr);
    return arr;
 }
 
 function reverse_values(values){  // reveres the entire matrix, from the right to left(mirror image)
  for (let i = 0;i<4;i++){
    values[i].reverse();
  }
 }

 


 function main_operation(board_values){ // operation to be performed on every key stroke, essentially performs the down operation.
  control = Array_copy(board_values);
  for (let i=0;i < 4;i++){
    board_values[i] = right_shift_and_merge(board_values[i]);
  }
  if (compare_array(board_values,control)){
    random_insert();
  }
  return board_values;
 }