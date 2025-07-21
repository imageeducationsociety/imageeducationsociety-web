import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("This is not a valid email.").min(1, {
    message: "This field has to be filled.",
  }),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  message: z.union([
    z.string().min(10, "Message must be at least 10 characters"),
    z.string().length(0),
  ]),
  website: z.string().optional(),
});
