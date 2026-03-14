'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { blogPosts } from '@/data/portfolio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <article className="min-h-screen py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8 p-0 hover:bg-transparent text-muted-foreground hover:text-primary">
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <Separator className="mb-12" />

        {/* Post Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* In a real app, you'd use a markdown renderer like react-markdown or next-mdx-remote */}
          <div className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
            {post.content}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Post Footer */}
        <footer className="bg-muted/50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Thanks for reading!</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            If you enjoyed this article, feel free to share it or reach out to me with your thoughts.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button asChild>
              <Link href="/blog">More articles</Link>
            </Button>
          </div>
        </footer>
      </div>
    </article>
  )
}
