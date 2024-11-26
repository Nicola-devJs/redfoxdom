export type UserCreateRequest = {
  name: string;
  email: string;
  password: string;
};

export type UserLoginRequest = {
  email: string;
  password: string;
};

export type UserResponse = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  password: string;
};
