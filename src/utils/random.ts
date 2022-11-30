export function random(inputArray: Array<any>){
  return [...inputArray].sort(()=> Math.random() - 0.5);
}