import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/data/blogPosts";
import { useSEO } from "@/hooks/useSEO";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useSEO({
    title: post ? `${post.title} | SkoleMate Blog` : "Blog | SkoleMate",
    description: post?.excerpt,
    keywords: post?.tags.join(", "),
    canonicalUrl: post ? `https://skolemate.dk/blog/${post.slug}` : undefined,
    ogImage: post ? `https://skolemate.dk${post.featuredImage}` : undefined,
    ogType: "article",
    articlePublishedTime: post?.publishedAt,
    articleAuthor: post?.author,
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <article className="px-4 md:px-8 max-w-4xl mx-auto">
          {/* Back Link */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 -ml-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tilbage til blog
            </Button>
          </Link>

          {/* Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-[16/9] overflow-hidden rounded-xl mb-10">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary">
            {(() => {
              const lines = post.content.split("\n");
              const elements: React.ReactNode[] = [];
              let i = 0;

              while (i < lines.length) {
                const trimmed = lines[i].trim();

                // Check for table (starts with |)
                if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
                  const tableLines: string[] = [];
                  while (i < lines.length && lines[i].trim().startsWith("|")) {
                    tableLines.push(lines[i].trim());
                    i++;
                  }

                  if (tableLines.length >= 2) {
                    const headerRow = tableLines[0].split("|").filter(cell => cell.trim() !== "");
                    const dataRows = tableLines.slice(2).map(row => 
                      row.split("|").filter(cell => cell.trim() !== "")
                    );

                    elements.push(
                      <div key={`table-${i}`} className="overflow-x-auto my-6">
                        <table className="min-w-full border-collapse border border-border">
                          <thead>
                            <tr className="bg-muted">
                              {headerRow.map((cell, cellIndex) => (
                                <th key={cellIndex} className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                                  {cell.trim()}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {dataRows.map((row, rowIndex) => (
                              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                                {row.map((cell, cellIndex) => (
                                  <td key={cellIndex} className="border border-border px-4 py-2 text-muted-foreground">
                                    {cell.trim()}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  continue;
                }

                if (!trimmed) {
                  i++;
                  continue;
                }

                if (trimmed.startsWith("## ")) {
                  elements.push(
                    <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                      {trimmed.replace("## ", "")}
                    </h2>
                  );
                } else if (trimmed.startsWith("### ")) {
                  elements.push(
                    <h3 key={i} className="text-xl font-semibold mt-6 mb-3">
                      {trimmed.replace("### ", "")}
                    </h3>
                  );
                } else if (trimmed.startsWith("- **")) {
                  const match = trimmed.match(/- \*\*(.+?)\*\*:? ?(.+)?/);
                  if (match) {
                    elements.push(
                      <li key={i} className="ml-4">
                        <strong>{match[1]}</strong>
                        {match[2] && `: ${match[2]}`}
                      </li>
                    );
                  }
                } else if (trimmed.startsWith("- ")) {
                  const content = trimmed.replace("- ", "");
                  const urlMatch = content.match(/^(.+?):\s*(https?:\/\/\S+)$/);
                  if (urlMatch) {
                    elements.push(
                      <li key={i} className="ml-4">
                        {urlMatch[1]}:{" "}
                        <a 
                          href={urlMatch[2]} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline break-all"
                        >
                          {urlMatch[2]}
                        </a>
                      </li>
                    );
                  } else {
                    elements.push(
                      <li key={i} className="ml-4">
                        {content}
                      </li>
                    );
                  }
                } else if (/^\d+\. /.test(trimmed)) {
                  elements.push(
                    <li key={i} className="ml-4 list-decimal">
                      {trimmed.replace(/^\d+\. /, "")}
                    </li>
                  );
                } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                  elements.push(
                    <p key={i} className="font-semibold">
                      {trimmed.replace(/\*\*/g, "")}
                    </p>
                  );
                } else {
                  elements.push(
                    <p key={i} className="mb-4">
                      {trimmed}
                    </p>
                  );
                }

                i++;
              }

              return elements;
            })()}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default BlogPost;
