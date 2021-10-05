
function setup() {
  // put setup code here
    createCanvas(1500,850);
    board_values = initialize_multidimen_array()
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
        board_values[selected[0]][selected[1]] = 4;
      }
      else{
        board_values[selected[0]][selected[1]] = 2;
  }
 }

//   shift everything towards the right (downwards in the board), helper function
 function right_shift(arr){
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
   if (keyCode === DOWN_ARROW){

   }
   else if (keyCode === UP_ARROW){
     reverse_values(board_values);
   }
   else if(keyCode === RIGHT_ARROW){
      board_values = matrix_transpose(board_values);
   }
   else if(keyCode === LEFT_ARROW){
     board_values = matrix_transpose(board_values);
     reverse_values(board_values);
     console.log(board_values);
   }
    control = Array_copy(board_values);
    for (let i=0;i < 4;i++){
      board_values[i] = right_shift_and_merge(board_values[i]);
    }
    if (compare_array(board_values,control)){
      random_insert();
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
    console.log(board_values);
   }
  }

 


 function merge_right(arr){ // merge right, helper function
  for (let ptr = arr.length - 1;ptr>0;ptr--){
    if (arr[ptr-1] == arr[ptr]){
      arr[ptr] = arr[ptr] + arr[ptr-1];
      arr[ptr-1] = 0;
    }
  }
  return arr;
 }

 function right_shift_and_merge(arr){ //performs the complete right shift and merging operation.
    arr = right_shift(arr);
    arr = merge_right(arr);
    arr = right_shift(arr);
    return arr;
 }
 function compare_array(array1,array2){ // return True if two arrays are different

   for (let i = 0;i<4;i++){
     for(let j = 0;j<4;j++)
     if(array1[i][j] != array2[i][j]){
       return true;
     }
   }
   return false;
 }
 function reverse_values(values){
  for (let i = 0;i<4;i++){
    values[i].reverse();
  }
 }

 function Array_copy(arr){
    to_compare = initialize_multidimen_array();
    for (let i = 0;i<4;i++){
      for (let j =0;j<4;j++){
        to_compare[i][j] = arr[i][j];
      }
    }
  return to_compare;
 }
 function initialize_multidimen_array(){
   return [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
 }
 function matrix_transpose(arr){
   to_return = initialize_multidimen_array();
   for (let i = 0;i<4;i++){
     for (let j = 0;j<4;j++){
       to_return[i][j] = arr[j][i];
     }
   }
   return to_return;
 }