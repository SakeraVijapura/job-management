import { z } from "zod";

// ** Athlete Register Schema
export const athleteRegisterSchema = z
  .object({
    name: z
      .string({ message: "Please enter name" })
      .min(3, { message: "Name must be at least 3 characters long" }),

    email: z
      .string({ message: "Please enter email" })
      .email({ message: "Enter Valid Email" }),

    password: z
      .string({ message: "Please enter password" })
      .min(8, { message: "Password must be at least 8 characters long" }),

    confirmPassword: z
      .string({ message: "Please enter confirm password" })
      .min(8, {
        message: "Confirm password must be at least 8 characters long",
      }),
  })
  .refine((data) => data.password == data.confirmPassword, {  
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ** Partner Register Schema
export const partnerRegisterSchema = z
  .object({
    name: z
      .string({ message: "Please enter name" })
      .min(3, { message: "Name must be at least 3 characters long" }),

    companyName: z
      .string({ message: "Please enter name" })
      .min(3, { message: "Name must be at least 3 characters long" }),

    email: z
      .string({ message: "Please enter email" })
      .email({ message: "Enter Valid Email" }),

    password: z
      .string({ message: "Please enter password" })
      .min(8, { message: "Password must be at least 8 characters long" }),

    confirmPassword: z
      .string({ message: "Please enter confirm password" })
      .min(8, {
        message: "Confirm password must be at least 8 characters long",
      }),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ** Login Schema

export const loginSchema = z.object({
  email: z
    .string({ message: "Please enter email" })
    .email({ message: "Enter Valid Email" }),

  password: z
    .string({ message: "Please enter password" })
    .min(1, { message: "Please enter password" }),
});
