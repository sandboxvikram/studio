import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary uppercase">Our Blog</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Health Insights & MediConnect News
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Stay informed with the latest articles on medical travel, health tips, and company updates.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {blogPosts.map((post) => {
                const image = PlaceHolderImages.find(p => p.id === post.image);
                return (
                  <article key={post.id} className="flex flex-col items-start justify-between">
                    <Link href={`/blog/${post.slug}`} className="w-full">
                      <Card className="w-full transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
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
                          <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground font-headline group-hover:text-primary">
                            {post.title}
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                           <div className="mt-4 flex items-center text-primary font-semibold">
                            Read more <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
