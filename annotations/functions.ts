// Function annotation 

const add = (a: number, b: number): boolean => {
  return true;
};

// Annotate the arguments, then the retun type, then arrow
// No type inference for arguments!
// We don't have to annotate the return, but do it anyways

const sub = (x: number, y: number): number => {
  return x - y;
}