export type UserCreateRequest = {
  name: string;
  email: string;
  password: string;
};

export type UserLoginRequest = {
  email: string;
  password: string;
};

export type UserResponseWithPassword = {
  id: string;
  name: string;
  email: string;
  created_at: string;
  password: string;
};

export type UserResponse = Omit<UserResponseWithPassword, "password">;
