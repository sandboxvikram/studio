"use server";

import { z } from "zod";
import { contactFormSchema } from "@/lib/types";

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Invalid data provided.", errors: parsed.error.flatten().fieldErrors };
  }

  // In a real-world application, you would integrate with an email service
  // or save the data to a database here.
  console.log("Form submitted successfully with data:", parsed.data);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: "Your message has been sent successfully!" };
}
