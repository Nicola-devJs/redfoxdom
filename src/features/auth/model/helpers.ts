import bcrypt from "bcrypt";

const SALT_ROUNDS_FOR_PASSWORD = 10;

export const hashPassword = async (password: string) => {
  const saltRounds =
    Number(process.env.SALT_FOR_PASSWORD) || SALT_ROUNDS_FOR_PASSWORD;

  const hashedPass = await bcrypt.hash(password, saltRounds);
  return hashedPass;
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string,
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
