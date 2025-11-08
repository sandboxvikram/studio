"use client";

import { useState } from "react";
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
import { Loader2, Hospital, Stethoscope, Star } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";


type RecommenderFormValues = z.infer<typeof recommenderSchema>;

// Mock data for recommendations
const mockResults = [
  {
    name: "Apollo Hospital, Mumbai",
    specialty: "Cardiology",
    rating: 4.9,
    accreditation: "NABH, JCI",
    image: PlaceHolderImages.find(p => p.id === 'hospital-1') || { imageUrl: "https://picsum.photos/seed/h1/400/250", imageHint: 'hospital exterior', description: 'Apollo Hospital' },
    doctors: [
      { name: "Dr. Anjali Verma", specialty: "Interventional Cardiologist" },
      { name: "Dr. Rahul Desai", specialty: "Cardiac Surgeon" },
    ]
  },
  {
    name: "Fortis Hospital, Delhi",
    specialty: "Orthopedics",
    rating: 4.8,
    accreditation: "NABH",
    image: PlaceHolderImages.find(p => p.id === 'hospital-2') || { imageUrl: "https://picsum.photos/seed/h2/400/250", imageHint: 'modern hospital', description: 'Fortis Hospital' },
    doctors: [
      { name: "Dr. Sameer Joshi", specialty: "Joint Replacement Surgeon" },
      { name: "Dr. Meera Kapoor", specialty: "Spine Surgeon" },
    ]
  },
  {
    name: "Manipal Hospital, Bangalore",
    specialty: "Oncology",
    rating: 4.9,
    accreditation: "NABH, AACI",
    image: PlaceHolderImages.find(p => p.id === 'hospital-3') || { imageUrl: "https://picsum.photos/seed/h3/400/250", imageHint: 'hospital building', description: 'Manipal Hospital' },
    doctors: [
      { name: "Dr. Vikram Rao", specialty: "Medical Oncologist" },
      { name: "Dr. Sunita Patel", specialty: "Surgical Oncologist" },
    ]
  }
];

export function SmartRecommender() {
  const { toast } = useToast();
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();


  const form = useForm<RecommenderFormValues>({
    resolver: zodResolver(recommenderSchema),
    defaultValues: {
      condition: "",
      location: "",
      budget: "",
    },
  });

  const onSubmit = async (data: RecommenderFormValues) => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: "Authentication Required",
        description: "Please log in to use the recommender.",
      });
      router.push('/login');
      return;
    }
    
    setIsLoading(true);
    setResults([]);
    
    toast({
      title: "Finding Recommendations...",
      description: "Our AI is analyzing your needs to find the best hospitals and doctors for you.",
    });

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setResults(mockResults);
    setIsLoading(false);
  };

  return (
    <section id="recommender" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky top-28">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Smart Hospital Recommender</CardTitle>
                <CardDescription>Tell us your needs, and our AI will suggest the best hospitals and doctors for you.</CardDescription>
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
                                <FormControl><RadioGroupItem value="economy" /></FormControl>
                                <FormLabel className="font-normal">Economy</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl><RadioGroupItem value="standard" /></FormControl>
                                <FormLabel className="font-normal">Standard</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl><RadioGroupItem value="premium" /></FormControl>
                                <FormLabel className="font-normal">Premium</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" disabled={isLoading} className="w-full">
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isLoading ? "Analyzing..." : "Get Recommendations"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            {isLoading && (
              <div className="flex justify-center items-center h-96">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            )}
            {results.length > 0 && !isLoading && (
              <div className="space-y-8">
                 <h3 className="text-2xl font-bold font-headline">Your Personalized Recommendations</h3>
                {results.map((result, index) => (
                  <Card key={index} className="overflow-hidden transform-gpu transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-52 w-full">
                      <Image 
                        src={result.image.imageUrl} 
                        alt={result.image.description} 
                        fill 
                        className="object-cover" 
                        data-ai-hint={result.image.imageHint}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="flex items-center gap-2"><Hospital className="h-6 w-6 text-primary" /> {result.name}</span>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="h-5 w-5 fill-current" />
                          <span className="font-bold text-lg">{result.rating}</span>
                        </div>
                      </CardTitle>
                      <CardDescription>{result.accreditation}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-2 flex items-center gap-2"><Stethoscope className="h-5 w-5 text-muted-foreground" /> Top Doctors</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        {result.doctors.map((doctor: any) => (
                          <li key={doctor.name} className="text-sm">{doctor.name} - <span className="italic">{doctor.specialty}</span></li>
                        ))}
                      </ul>
                       <Button className="w-full mt-4">View Details & Book</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            {!isLoading && results.length === 0 && (
              <div className="text-center py-16 px-4 border-2 border-dashed rounded-lg">
                <Hospital className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium text-muted-foreground">Your hospital recommendations will appear here.</h3>
                 {!user && <p className="text-sm text-muted-foreground mt-2">Please <Link href="/login" className="text-primary underline">log in</Link> to get recommendations.</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
