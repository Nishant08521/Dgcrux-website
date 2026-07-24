"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User, Search, Tag, ChevronRight } from "lucide-react"
import Link from "next/link"

import { categories, blogs } from "./data"

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = blogs.filter((blog) => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory
    const matchesSearch =
      !searchQuery ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featured = blogs[0]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-10 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" variant="secondary">
              Insights & Updates
            </Badge>
            <h1 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Our <span className="text-blue-600 italic">Blog</span>
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Expert insights on AI, cloud computing, software development, and digital transformation — crafted by the
              engineers and strategists at DgCrux.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-20 z-30 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "All" && !searchQuery && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                    {featured.category}
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-4">{featured.title}</h2>
                  <p className="text-white/80 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {featured.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      {featured.author}
                    </span>
                  </div>
                  <Button
                    asChild
                    className="w-fit bg-white text-blue-700 hover:bg-white/90 font-bold"
                  >
                    <Link href={`/blogs/${featured.id}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative min-h-[250px] lg:min-h-full">
                  <img
                    src={featured.image || "/placeholder.svg"}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((blog, idx) => (
                <Link key={blog.id} href={`/blogs/${blog.id}`} className="group block">
                  <Card className="h-full overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white/90 text-foreground backdrop-blur-sm border-0 text-xs font-semibold">
                          {blog.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {blog.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
                        {blog.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <User className="h-3.5 w-3.5" />
                          {blog.author}
                        </div>
                        <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Read <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Stay Ahead with DgCrux Insights</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Get the latest articles on AI, cloud, and digital transformation delivered to your inbox every month.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-5 py-3.5 bg-white rounded-full border-0 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button type="submit" className="bg-white text-blue-700 hover:bg-white/90 font-bold px-8 py-6 rounded-full">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
