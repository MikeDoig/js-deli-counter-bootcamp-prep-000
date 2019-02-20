var katzDeliLine = [];

function takeANumber (line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

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
    positions.push(`${i}. ${current[i + 1]}`);
  }
  return `The line is currently: ${positions.join(', ')}`;
}
}