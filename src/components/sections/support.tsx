"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { contactFormSchema } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageSquare, ExternalLink } from "lucide-react";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Support() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const result = await submitContactForm(data);
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. Our support team will get back to you shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: result.message || "Could not send message. Please try again.",
      });
    }
  };

  return (
    <section id="support" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:pr-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">24/7 Multilingual Support</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our dedicated support team is here to assist you around the clock. Whether you have a medical query or need help with your travel plans, we're just a message or call away.
            </p>
            <div className="mt-8 space-y-6">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 text-white">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">Chat with us live <ExternalLink className="inline-block h-4 w-4 ml-1" /></p>
                </div>
              </a>
               <a href="tel:+1-234-567-890" className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">+1-234-567-890</p>
                </div>
              </a>
               <a href="mailto:support@mediconnect.com" className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">support@mediconnect.com</p>
                </div>
              </a>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl><Input placeholder="john.doe@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl><Textarea placeholder="How can we help you today?" className="min-h-[100px]" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="w-full">
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
