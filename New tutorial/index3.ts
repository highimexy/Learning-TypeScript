type User1 = {
  id: number;
  username: string;
  role: "guest" | "member" | "admin";
};

let nextUserId = 1;
type UpdatedUser = Partial<User1>;

const users1: User1[] = [
  {
    id: nextUserId++,
    username: "John_doe",
    role: "admin",
  },
  {
    id: nextUserId++,
    username: "Jane_Malik",
    role: "member",
  },
  {
    id: nextUserId++,
    username: "guest_user",
    role: "guest",
  },
  {
    id: nextUserId++,
    username: "guest_user",
    role: "guest",
  },
];

function updateUser(id: number, updates: UpdatedUser) {
  const user = users1.find((u) => u.id === id);

  if (user) {
    Object.assign(user, updates);
  } else {
    throw new Error(`Użytkownik o ID ${id} nie został znaleziony`);
  }
}

function addNewUser(newUser: Omit<User1, "id">): User1 {
  const user = {
    id: nextUserId++,
    ...newUser,
  };

  users1.push(user);
  return newUser;
}

addNewUser({ username: "joe_cos", role: "member" });

updateUser(1, { username: "new_user_name" });
