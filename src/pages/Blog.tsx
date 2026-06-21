import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import BlogCard from "@/components/BlogCard";
import { getFeaturedPosts, getPaginatedPosts } from "@/data/blogPosts";
import { useSEO } from "@/hooks/useSEO";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useSEO({
    title: "Blog | SkoleMate - AI i undervisningen",
    description: "Læs vores seneste artikler om AI i undervisningen, tips til lærere og guides til at bruge kunstig intelligens i skolen.",
    keywords: "AI i skolen, AI i undervisningen, kunstig intelligens undervisning, lærer AI værktøjer",
    canonicalUrl: "https://skolemate.dk/blog",
  });

  const featuredPosts = getFeaturedPosts();
  const { posts: paginatedPosts, totalPages } = getPaginatedPosts(currentPage, postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: document.getElementById("all-posts")?.offsetTop ?? 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SkoleMate Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Indsigt, tips og guides til at bruge AI i undervisningen
            </p>
          </div>

          {/* Featured Posts */}
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} featured />
            ))}
          </div>
        </section>

        {/* All Posts Section */}
        <section id="all-posts" className="px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Alle artikler
          </h2>

          <div className="flex flex-col gap-[10px] mb-8">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                      }}
                    >
                      Forrige
                    </PaginationPrevious>
                  </PaginationItem>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={page === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                      }}
                    >
                      Næste
                    </PaginationNext>
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Blog;
