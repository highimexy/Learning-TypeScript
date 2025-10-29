type UserRole = "guest" | "member" | "admin";

type User = {
  username: string;
  role: UserRole;
};

const users: User[] = [
  {
    username: "John_doe",
    role: "admin",
  },
  {
    username: "Jane_Malik",
    role: "member",
  },
  {
    username: "guest_user",
    role: "guest",
  },
];

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }
  return user;
}
