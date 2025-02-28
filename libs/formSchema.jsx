import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 digits" })
    .max(15, { message: "Mobile number cannot exceed 15 digits" })
    .regex(/^\+?[0-9\s-]+$/, { message: "Invalid mobile number format" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  });

export default formSchema