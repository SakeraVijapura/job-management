import { z } from "zod";

export const addJobSchema = z.object({
    name: z
        .string({ message: "Please enter name" })
        .min(3, { message: "Name must be at least 3 characters long" }),

    description: z
        .string({ message: "Please enter description" })
        .min(3, { message: "Description must be at least 3 characters long" })
        .max(1000),
    // due_date: z.string({ message: "Please select Due Date" })
    //     .min(1),
    job_type: z.string({ message: "Please select job type" })
        .min(1)
});

