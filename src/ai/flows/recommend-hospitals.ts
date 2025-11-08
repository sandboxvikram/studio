'use server';
/**
 * @fileOverview A hospital recommendation AI agent.
 *
 * - recommendHospitals - A function that handles the hospital recommendation process.
 * - HospitalRecommenderInput - The input type for the recommendHospitals function.
 * - HospitalRecommenderOutput - The return type for the recommendHospitals function.
 */

import { ai } from '@/ai/genkit';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { z } from 'zod';

const HospitalRecommenderInputSchema = z.object({
  condition: z.string().describe('The medical condition or treatment the user is looking for.'),
  location: z.string().describe('The user\'s preferred city for treatment.'),
  budget: z.string().describe('The user\'s budget range (e.g., economy, standard, premium).'),
});
export type HospitalRecommenderInput = z.infer<typeof HospitalRecommenderInputSchema>;

const DoctorSchema = z.object({
  name: z.string().describe('Full name of the doctor.'),
  specialty: z.string().describe('The doctor\'s specialty.'),
});

const HospitalSchema = z.object({
  name: z.string().describe('The name of the hospital.'),
  specialty: z.string().describe('The primary medical specialty the hospital is known for, relevant to the user\'s condition.'),
  rating: z.number().describe('A rating of the hospital from 1.0 to 5.0.'),
  accreditation: z.string().describe('Key accreditations of the hospital (e.g., NABH, JCI).'),
  doctors: z.array(DoctorSchema).describe('A list of 2-3 top doctors at this hospital relevant to the user\'s condition.'),
});

const HospitalRecommenderOutputSchema = z.object({
  hospitals: z.array(HospitalSchema).describe('An array of 3 recommended hospitals.'),
});
export type HospitalRecommenderOutput = z.infer<typeof HospitalRecommenderOutputSchema>;

export async function recommendHospitals(input: HospitalRecommenderInput): Promise<HospitalRecommenderOutput> {
  const result = await recommendHospitalsFlow(input);
  // Add placeholder images to the results, as the AI cannot generate them.
  const hospitalImages = [
    PlaceHolderImages.find(p => p.id === 'hospital-1'),
    PlaceHolderImages.find(p => p.id === 'hospital-2'),
    PlaceHolderImages.find(p => p.id === 'hospital-3'),
  ];
  const hospitalsWithImages = result.hospitals.map((hospital, index) => ({
    ...hospital,
    image: hospitalImages[index % hospitalImages.length] || { imageUrl: `https://picsum.photos/seed/h${index + 1}/400/250`, imageHint: 'hospital building', description: hospital.name },
  }));
  return { hospitals: hospitalsWithImages };
}

const prompt = ai.definePrompt({
  name: 'recommendHospitalsPrompt',
  input: { schema: HospitalRecommenderInputSchema },
  output: { schema: HospitalRecommenderOutputSchema },
  prompt: `You are an expert medical travel advisor for MediConnect, a platform that helps users find the best hospitals in India.

Your task is to recommend the top 3 hospitals based on the user's needs.

User's requirements:
- Medical Condition: {{{condition}}}
- Preferred Location: {{{location}}}
- Budget: {{{budget}}}

Please provide a list of 3 hospitals that are highly rated and well-suited for the user's condition in or near their preferred location. For each hospital, include its specialty, a realistic rating, its key accreditations (like NABH or JCI), and a list of 2-3 top doctors specializing in the user's condition.

Ensure the recommendations are diverse and represent top-tier options. Do not make up hospitals or doctors; use your knowledge of the Indian healthcare system.
`,
});

const recommendHospitalsFlow = ai.defineFlow(
  {
    name: 'recommendHospitalsFlow',
    inputSchema: HospitalRecommenderInputSchema,
    outputSchema: HospitalRecommenderOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
