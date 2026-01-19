import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const POST_CONTENT = `
Imagine you have a client that requires extensive IT services and resources. You might suggest they
buy the resources (physical servers) and hiring an IT team to manage them—the On-Premise Approach. But what if there's
another way? A way to effectively outsource the IT services, resources, and maintenance. This is where
cloud services come in.

---

## 1. Cloud Computing

Cloud Computing is the practice of using remote servers hosted on the internet to store, manage,
and process data. Essentially, it provides an IT infrastructure as a service and other essential services
on demand. A third party is responsible for the maintenance, security, and other overhead associated
with owning the physical resources. Cloud Computing is often considered a direct alternative
to an On-Premise Approach.

---

## 2. The Problems Cloud Computing Solves

As mentioned before, if you have a client that needs IT services, you have to consider the resources
you might need and how to manage them. There are a few approaches, but here we focus on On-Premise and
how Cloud Computing directly solves problems associated with it.

The following are the major "pain points" that could arise when dealing with creating an
IT infrastructure for a business:

### 1. Capacity

You have to guess how many resources (hardware—servers and IT team) you need up front.
If you buy too many, you've wasted money; if you buy too few, your website crashes when it gets too
popular. With cloud computing you pay for what you need and use.

### 2. Scalability

If there is more demand and the system needs to scale appropriately, you need to buy more hardware,
and that could take weeks or months (ordering, shipping, installing, wiring). With cloud computing it takes
minutes or hours to add resources.

### 3. Maintenance

Fixing broken fans, updating security patches, and managing power bills in-house takes up time and
money within the company. The provider handles the maintaince and security.

### 4. Accessibility

You can only access your work from the premises or physical location of the hardware. With cloud computing
the services are readily availble anywhere and promotes working in remote teams as long as there is a strong
internent connection.

### 5. Reliability

There is only one source of the data/resources, and resource duplication might need more time and
hardware. Cloud providers mirror your data across multiple global locations, so if one data center
goes down, your data remains safe.

---

## 3. On-Premise vs. Cloud Computing

| Feature | On-Premise | Cloud Computing |
|:--------|:-----------|:----------------|
| **Initial Cost** | High (hardware, setup) | Low (pay-as-you-go) |
| **Scalability** | Weeks to months | Minutes to hours |
| **Maintenance** | Internal team required | Provider handles it |
| **Accessibility** | Limited to location | Accessible anywhere |
| **Reliability** | Single point of failure | Built-in redundancy |

---

## Key Takeaways

Cloud Computing transforms how businesses approach IT infrastructure by eliminating upfront costs,
enabling rapid scaling, and removing maintenance burdens. While On-Premise solutions offer complete
control, Cloud Computing provides flexibility, accessibility, and cost-efficiency that modern
businesses increasingly require.
`;

// Post metadata - easier to manage separately
const allPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
    author?: string;
    tags?: string[];
  }
> = {
  "what-is-cloud-computing": {
    title: "What is Cloud Computing?",
    excerpt: "Exploring cloud computing and how it relates to clients",
    date: "January 19, 2026",
    readTime: "3 min read",
    category: "Software Dev",
    author: "Your Name",
    tags: ["Cloud", "AWS", "Infrastructure"],
    content: POST_CONTENT,
  },
};

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
        <main className="pt-32 pb-20">
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
        </main>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-30 px-6 relative">
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
