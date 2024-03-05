interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

function issLegal(user: User): boolean {
  if (user.age > 18) return true;
  return false;
}

const booleans = issLegal({
  firstName: "prateek",
  lastName: "jddd",
  email: "dihflodh@gmail.com",
  age: 20,
});

console.log(booleans);
