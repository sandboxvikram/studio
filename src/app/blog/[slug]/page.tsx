import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === post.image);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-8">
            <p className="text-base font-semibold leading-7 text-primary uppercase">{post.category}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-headline">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Avatar>
                <AvatarImage src={post.author.imageUrl} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{format(new Date(post.date), 'MMMM d, yyyy')}</p>
              </div>
            </div>
          </div>
          
          {image && (
            <div className="relative w-full h-96 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image
                src={image.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert mx-auto max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
      <Footer />
    </div>
  );
}