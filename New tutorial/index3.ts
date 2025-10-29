type User1 = {
  id: number;
  username: string;
  role: "guest" | "member" | "admin";
};

type UpdatedUser = Partial<User1>

const users1: User1[] = [
  {
    id: 1,
    username: "John_doe",
    role: "admin",
  },
  {
    id: 3,
    username: "Jane_Malik",
    role: "member",
  },
  {
    id: 2,
    username: "guest_user",
    role: "guest",
  },
  {
    id: 4,
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

updateUser(1, { username: "new_user_name" });
