function hello(firstName: string) {
  console.log(`hello ${firstName}`);
}
hello("prateek");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(1, 3));

function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  }
  return false;
}

console.log(isLegal(20));
