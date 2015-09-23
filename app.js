function max_slice(input) {
  var max_sum = input[0];
  var slice = [0, 0];
  var start;
  var end;
  var potential_max_sum;
  var running_max_sum;
  
  var debug = 1;
  
  if (debug) { console.log("first max_sum = "+max_sum+" at "+slice); }
  for (start=0; start<input.length; start+=1) {
    
    running_max_sum = 0;
    
    for (end=start; end<input.length; end+=1) {
      
      running_max_sum += input[end];
      
      if (debug) { console.log("start = "+start+" end = "+end+" running_max_sum = "+running_max_sum); }
      if (running_max_sum >= max_sum) {
        max_sum = running_max_sum;
        slice = [start, end];
        if (debug) { console.log("New max_sum "+max_sum+" found at "+slice); }
      }
           
    }
  }
  
  var result = [];
  for (var index = slice[0]; index <= slice[1]; index+=1) {
    result.push(input[index]);
  }
  return result;
  
}


console.log(max_slice([1, 2, 3]));   // expect [1, 2, 3]
//console.log(max_slice([1, -2, 3]));  // expect [3]
//console.log(max_slice([1, -1, 3, 4])); // expect [3, 4]
//console.log(max_slice([-1, -2, -3]));  // expect [-1]


