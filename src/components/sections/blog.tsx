import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

// Get the 3 most recent posts
const recentPosts = blogPosts.slice(0, 3);

export function BlogSection() {
  return (
    <section id="blog" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">From Our Blog</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Latest Health Insights & News
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore articles on medical advancements, patient care, and tips for a healthy journey.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {recentPosts.map((post) => {
            const image = PlaceHolderImages.find(p => p.id === post.image);
            return (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block h-full">
                <Card className="flex flex-col h-full transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {image && (
                    <div className="relative h-52 w-full">
                      <Image
                        src={image.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-lg"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-x-4 text-xs">
                       <time dateTime={post.date} className="text-muted-foreground">
                        {format(new Date(post.date), 'MMMM d, yyyy')}
                      </time>
                      <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                        {post.category}
                      </span>
                    </div>
                     <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground font-headline">
                        {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="line-clamp-3 text-sm leading-6 text-muted-foreground flex-grow">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-primary font-semibold">
                       Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
