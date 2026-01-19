import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { allPosts } from "../types/article";

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? allPosts[slug] : null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
        console.error(err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/software/clf-c02"
            className="text-primary hover:text-star-amber transition-colors"
          >
            Return to Archive
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-30 mb-20 px-6 relative">
      <article className="max-w-3xl mx-auto relative z-10">
        <Link
          to="/software/clf-c02"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Archive
        </Link>

        <header className="mb-12">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 hover:text-primary transition-colors ml-auto"
              aria-label="Share article"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {post.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="celestial-border rounded-lg p-8 md:p-12 bg-card/30 backdrop-blur-sm">
          <div
            className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-foreground prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-foreground/90 prose-p:leading-relaxed
            prose-strong:text-foreground prose-strong:font-semibold
            prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border/30
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-li:text-foreground/90 prose-li:marker:text-primary
            prose-table:w-full prose-table:border-collapse prose-table:rounded-lg prose-table:overflow-hidden prose-table:border prose-table:border-border/50
            prose-thead:bg-primary/20
            prose-th:text-left prose-th:py-4 prose-th:px-6 prose-th:font-bold prose-th:text-foreground prose-th:border-b prose-th:border-r prose-th:border-border/50 prose-th:last:border-r-0
            prose-tbody:divide-y prose-tbody:divide-border/30
            prose-tr:even:bg-secondary/20
            prose-td:py-4 prose-td:px-6 prose-td:text-foreground/90 prose-td:border-r prose-td:border-border/30 prose-td:last:border-r-0
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
            prose-img:rounded-lg prose-img:shadow-lg space-y-4"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30">
          <Link
            to="/software/clf-c02"
            className="inline-flex items-center gap-2 text-primary hover:text-star-amber transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore more from the Archive
          </Link>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
