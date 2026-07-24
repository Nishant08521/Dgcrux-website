import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ChevronRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogs } from "../data"
import ReactMarkdown from "react-markdown"

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }))
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const blog = blogs.find((b) => b.id === id)

  if (!blog) {
    notFound()
  }

  // Filter 3 related blogs in the same category (excluding current) or general blogs if not enough
  let related = blogs.filter((b) => b.id !== blog.id && b.category === blog.category)
  if (related.length < 3) {
    const additional = blogs.filter((b) => b.id !== blog.id && b.category !== blog.category)
    related = [...related, ...additional].slice(0, 3)
  } else {
    related = related.slice(0, 3)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-xs">
              {blog.title}
            </span>
          </nav>

          {/* Category Tag */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4 block">
            {blog.category}
          </span>

          {/* Blog Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight mb-6">
            {blog.title}
          </h1>

          {/* Author & Meta Row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-muted-foreground mb-8 pb-6 border-b border-muted">
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <User className="h-4 w-4 text-blue-600" />
              By {blog.author}
            </span>
            <span className="hidden sm:inline text-muted-foreground/40">|</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {blog.date}
            </span>
            <span className="hidden sm:inline text-muted-foreground/40">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {blog.readTime}
            </span>
          </div>

          {/* Centered Featured Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-md bg-muted mb-12">
            <img
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="mx-auto max-w-3xl">
            {/* Excerpt Intro */}
            <p className="text-lg sm:text-xl font-medium text-muted-foreground leading-relaxed mb-10 pb-6 border-b border-muted">
              {blog.excerpt}
            </p>

            {/* Markdown Body */}
            <div className="prose prose-slate dark:prose-invert max-w-none 
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-p:leading-relaxed prose-p:text-muted-foreground prose-p:mb-6
              prose-li:text-muted-foreground prose-li:mb-2
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/80
              prose-table:border prose-table:border-collapse prose-table:w-full prose-table:my-8
              prose-th:border prose-th:border-muted-foreground/20 prose-th:bg-muted/50 prose-th:p-3 prose-th:text-left prose-th:font-semibold
              prose-td:border prose-td:border-muted-foreground/20 prose-td:p-3">
              <ReactMarkdown>{blog.content || ""}</ReactMarkdown>
            </div>

            {/* Tags Section */}
            <div className="mt-12 pt-6 border-t border-muted flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold text-muted-foreground mr-2">Tags:</span>
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-md px-3 py-1 font-normal text-xs sm:text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </article>
        </div>

        {/* Read Next / Related Section */}
        <section className="mt-20 pt-16 border-t border-muted bg-muted/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-black mb-8 text-foreground">
              Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedBlog) => (
                <Link key={relatedBlog.id} href={`/blogs/${relatedBlog.id}`} className="group block">
                  <div className="h-full overflow-hidden rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden relative bg-muted">
                      <img
                        src={relatedBlog.image || "/placeholder.svg"}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-2 block">
                        {relatedBlog.category}
                      </span>
                      <h3 className="font-bold text-base text-foreground mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                        {relatedBlog.excerpt}
                      </p>
                      <div className="mt-auto flex items-center justify-between text-[11px] text-muted-foreground pt-3 border-t">
                        <span>{relatedBlog.date}</span>
                        <span className="font-semibold flex items-center gap-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          Read <ChevronRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
