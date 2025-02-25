import { z } from "zod";

export const addJobSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Job name must be at least 3 character long" }),

  description: z
    .string()
    .min(3, { message: "Description must be at least 3 character long" })
    .max(1000, { message: "Description max be 1000 char" }),

  due_date: z.date({ message: "Please Select Date" }),

  job_type: z.string({ invalid_type_error: "Please select job type" }).min(1),
});
