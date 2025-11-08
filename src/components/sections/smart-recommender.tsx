"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { recommenderSchema } from "@/lib/types";

type RecommenderFormValues = z.infer<typeof recommenderSchema>;

export function SmartRecommender() {
  const { toast } = useToast();
  const form = useForm<RecommenderFormValues>({
    resolver: zodResolver(recommenderSchema),
    defaultValues: {
      condition: "",
      location: "",
      budget: "",
    },
  });

  const onSubmit = async (data: RecommenderFormValues) => {
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Recommender form submitted:", data);
    
    toast({
      title: "Finding Recommendations...",
      description: "Our AI is analyzing your needs to find the best hospitals and doctors for you.",
    });

    // In a real app, you would call the Genkit flow here
    // and display the results.
  };

  return (
    <section id="recommender" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Smart Hospital Recommender</CardTitle>
            <CardDescription>Tell us your needs, and our AI will suggest the best hospitals and doctors for you, considering ratings, specializations, and accreditations.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="condition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Medical Condition or Treatment</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Knee Replacement, Cardiology" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Location (City)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Mumbai, Delhi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Budget Range</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col sm:flex-row gap-4"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="economy" />
                            </FormControl>
                            <FormLabel className="font-normal">Economy</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="standard" />
                            </FormControl>
                            <FormLabel className="font-normal">Standard</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="premium" />
                            </FormControl>
                            <FormLabel className="font-normal">Premium</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="w-full">
                  {form.formState.isSubmitting ? "Analyzing..." : "Get Recommendations"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
