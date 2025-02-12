export type ResponseBodyType<T extends unknown> = {
  data: T | null;
  error: string | null;
};
