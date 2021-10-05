//  Some utility functions for array operations

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

function Array_copy(arr){
    to_compare = initialize_multidimen_array();
    for (let i = 0;i<4;i++){
      for (let j =0;j<4;j++){
        to_compare[i][j] = arr[i][j];
      }
    }
  return to_compare;
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