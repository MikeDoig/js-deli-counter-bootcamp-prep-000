var katzDeliLine = [];

function takeANumber (line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function takeANumberTwo ()
  var continuous = 0
  continuous + 1
  return 'Welcome, you are number'

function nowServing(front) {
  if (front.length===0)
  return 'There is nobody waiting to be served!';
  else 
  return `Currently serving ${front.shift()}.`;
 }
 
function currentLine(current) {
  if (current.length===0) {
  return 'The line is currently empty.';
  }

  else {
  const positions = [];
  for (let i=0; i<current.length; i++){
    positions.push(`${i + 1}. ${current[i]}`);
  }
  return `The line is currently: ${positions.join(', ')}`;
}
}