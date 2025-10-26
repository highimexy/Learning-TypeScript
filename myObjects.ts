const User = {
  name: "Wiktor",
  email: "wiktor@lcv.dev",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "rata", isPaid: false });

function createCourse(): { name: string; isPaid: boolean } {
  return { name: "reactjs", isPaid: true };
}
