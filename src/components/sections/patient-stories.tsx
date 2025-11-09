import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "John S., USA",
    story: "My knee replacement in India cost a third of what it would have back home, and the quality of care was outstanding. MediConnect handled everything flawlessly. The hospital felt like a five-star hotel.",
    image: PlaceHolderImages.find(p => p.id === 'patient-story-1')
  },
  {
    name: "Aisha A., Nigeria",
    story: "I was so worried about traveling for my mother's heart surgery. The MediConnect team was incredible—they arranged our visas, and a translator was with us every step of the way. We felt safe and supported.",
    image: PlaceHolderImages.find(p => p.id === 'patient-story-2')
  },
  {
    name: "David L., UK",
    story: "The AI recommender found a specialist who had trained in the UK! The entire process was incredibly efficient, from the initial video consultation to my smooth recovery in a beautiful facility.",
    image: PlaceHolderImages.find(p => p.id === 'patient-story-3')
  }
]

export function PatientStories() {
  return (
    <section id="testimonials" className="bg-muted/50 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Patient Stories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Success Stories from Our Global Community
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Hear from international patients who chose India for their medical journey with MediConnect.
          </p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                {testimonial.image && (
                    <Image
                      src={testimonial.image.imageUrl}
                      alt={`Portrait of ${testimonial.name}`}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full object-cover"
                      data-ai-hint={testimonial.image.imageHint}
                    />
                )}
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <Quote className="h-6 w-6 text-muted-foreground/50 mb-2" />
                <p className="text-muted-foreground">{testimonial.story}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
