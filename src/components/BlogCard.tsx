import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link to={`/blog/${post.slug}`}>
        <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card h-full">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <CardContent className="p-6">
            <Badge variant="secondary" className="mb-3">
              {post.category}
            </Badge>
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`}>
      <Card className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card h-full">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-48 md:w-56 flex-shrink-0">
            <div className="aspect-[16/9] sm:aspect-square sm:h-full overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <CardContent className="flex-1 p-4 sm:p-5 flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit mb-2">
              {post.category}
            </Badge>
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2 hidden sm:block">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
