import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});


export const recommenderSchema = z.object({
  condition: z.string().min(3, "Please describe your medical condition."),
  location: z.string().min(2, "Please enter your preferred city."),
  budget: z.string().min(1, "Please select a budget range."),
});
