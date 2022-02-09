var input = process.argv[2];



function reverse(original) {
  let reversed = [];
  for ( let i = original.length -1 ; i >= 0; i--){
    reversed.push(original[i])
  }
  return reversed.join('');
}
if (input) {
  console.log(reverse(input));
} else {
  console.log('type is string to reverse');
}