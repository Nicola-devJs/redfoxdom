import * as z from "zod";

export const schema = z.object({
  title: z.string().min(6, { message: "Required" }),
  description: z.string().optional(),
  price: z.number().min(1, { message: "Minimum 1 dollar" }),
  photos: z.array(z.any()),
});

export type PropertyFormFields = z.infer<typeof schema>;
