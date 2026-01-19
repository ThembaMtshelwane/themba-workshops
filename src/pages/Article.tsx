import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // Or any theme you prefer

// Mock post data - in a real app this would come from a database
const allPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
  }
> = {
  "building-type-safe-apis-with-trpc": {
    title: "Building Type-Safe APIs with tRPC",
    excerpt:
      "Exploring how tRPC eliminates the need for REST or GraphQL by providing end-to-end type safety between your client and server.",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Software Dev",
    content: `

### Executive Summary
In the ever-evolving landscape of web development, maintaining consistency between client and server remains a primary challenge. This report analyzes **tRPC**, a solution that bridges this gap by providing end-to-end type safety with elegant simplicity.

---

## 1. The Problem with Traditional APIs

Historically, developers have relied on REST or GraphQL, both of which suffer from a fundamental disconnect between server-side provision and client-side expectation. This results in:

* **Runtime Errors**: Failures that could have been caught at compile time.
* **Documentation Drift**: API documentation that fails to reflect the actual state of the server.
* **Manual Type Syncing**: The tedious and error-prone process of manually keeping frontend and backend types in sync.

---

## 2. The tRPC Paradigm Shift

tRPC (TypeScript Remote Procedure Call) bypasses traditional schema definitions or OpenAPI specifications. Instead, you define TypeScript functions on the server and call them directly from the client with full type inference.

### Implementation Example
The following snippet demonstrates the seamless link between logic and validation:

\`\`\`typescript
// Server: Define logic and input validation using Zod
const appRouter = router({
  getUser: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      return await db.user.findUnique({ where: { id: input } });
    }),
});

// Client: Called with full IDE intelligence and zero manual typing
const user = await trpc.getUser.query('user-123');
\`\`\`

![Diagram of tRPC flow](/logo.webp)

---

## 3. The Value of Type Inference

The core power of tRPC lies in TypeScript’s inference capabilities. This creates a "living" codebase where:

1. **Instant Feedback**: Modifying a server procedure immediately flags every incompatible client-side call in the IDE.
2. **Reduced Debugging**: The need to hunt through network logs for field renames or shape changes is virtually eliminated.
3. **Refactoring Velocity**: Developers can refactor data structures with total confidence that breaking changes will be caught instantly.

---

## 4. Conclusion

tRPC represents a significant shift in full-stack communication. By leveraging the native type system, it removes entire categories of bugs and makes the development lifecycle more predictable and enjoyable.
    `,
  },
  "the-art-of-clean-architecture": {
    title: "The Art of Clean Architecture",
    excerpt:
      "A deep dive into organizing code in layers that make your applications maintainable and testable for years to come.",
    date: "January 8, 2024",
    readTime: "12 min read",
    category: "Software Dev",
    content: `
Architecture in software is often treated as an afterthought—something to worry about "when the project gets bigger." But like the foundations of a building, the decisions we make early ripple through every line of code we write thereafter.

## The Dependency Rule

At the heart of Clean Architecture lies a simple principle: dependencies should point inward. Your business logic should never know about your database, your framework, or your UI. These are mere details—implementation choices that should be swappable without touching your core domain.

## Layers of Abstraction

Clean Architecture typically organizes code into concentric circles:

1. **Entities** - Your core business objects, pure and unsullied by infrastructure concerns
2. **Use Cases** - Application-specific business rules that orchestrate entities
3. **Interface Adapters** - Translators between the use cases and external concerns
4. **Frameworks & Drivers** - The outermost layer where databases, web frameworks, and UIs live

## The Power of Boundaries

By establishing clear boundaries between layers, we gain several advantages:

- **Testability**: Business logic can be tested without spinning up databases or servers
- **Flexibility**: Swap PostgreSQL for MongoDB without touching your use cases
- **Clarity**: New developers can navigate the codebase with confidence

## A Living Architecture

Remember that architecture is not a one-time decision but an ongoing conversation with your codebase. As requirements evolve, so too should your architectural boundaries.
    `,
  },
  "the-weight-of-unspoken-words": {
    title: "The Weight of Unspoken Words",
    excerpt:
      "A meditation on the silences between us, and the stories we carry in the spaces where language fails.",
    date: "January 12, 2024",
    readTime: "5 min read",
    category: "Creative Writing",
    content: `
There are things we carry that have no names. They live in the pause before we speak, in the breath we hold when truth trembles on the edge of our lips.

---

She stood at the window, watching rain trace patterns on glass. Behind her, he cleared his throat—that small sound that had preceded a thousand conversations, a thousand confessions never made.

"I was thinking," he began.

The rain continued its patient descent.

"About what?" she asked, though she knew. She always knew. That was the cruelty of love—this terrible knowing, this inability to unknow.

---

We build cathedrals of silence, you and I. Magnificent structures of all the things we cannot say. The architects of our own loneliness, measuring the distance between what we feel and what we dare to speak.

*What would happen if the walls came down?*

Perhaps the flood would drown us. Perhaps we would learn, at last, to swim.

---

In the language of touch, there is no word for goodbye. Only the absence of warmth where a hand once rested. Only the echo of presence in an empty room.

She turned from the window.

"Tell me," she said.

And for the first time in years, the silence broke.
    `,
  },
  "designing-low-noise-amplifiers": {
    title: "Designing Low-Noise Amplifiers",
    excerpt:
      "Techniques for achieving optimal signal-to-noise ratios in sensitive measurement systems and RF front-ends.",
    date: "January 14, 2024",
    readTime: "11 min read",
    category: "Electrical Engineering",
    content: `
In the realm of sensitive electronics, noise is the eternal adversary. Whether you're building a radio telescope receiver or a precision instrumentation amplifier, understanding and minimizing noise is paramount.

## Understanding Noise Sources

Before we can fight noise, we must understand its origins:

- **Thermal Noise (Johnson-Nyquist)**: The random motion of electrons in any resistive element
- **Shot Noise**: Fluctuations in current due to the discrete nature of charge carriers
- **Flicker Noise (1/f)**: Low-frequency noise that increases as frequency decreases
- **Burst Noise**: Random step changes in current, also called popcorn noise

## The Noise Figure

Noise Figure (NF) quantifies how much noise an amplifier adds to a signal:

\`\`\`
NF = 10 * log₁₀(SNRin / SNRout)
\`\`\`

A perfect amplifier would have NF = 0 dB. Real amplifiers always add some noise, making the output SNR worse than the input.

## Design Strategies

### Component Selection

Choose input transistors with care. JFETs often excel for high-impedance sources, while BJTs may be preferable for low-source-impedance applications. Modern low-noise op-amps like the LT1028 achieve input noise below 1 nV/√Hz.

### Impedance Matching

For RF applications, noise matching is critical. The source impedance that minimizes noise is rarely the same as that which maximizes power transfer.

### Layout Considerations

Even the best circuit design can be ruined by poor layout. Keep sensitive traces short, use proper grounding techniques, and shield against external interference.

## Conclusion

Low-noise design is both science and art. Understanding the fundamental physics allows us to push the boundaries of what's measurable, revealing signals hidden in the quantum foam of thermal fluctuations.
    `,
  },
};

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? allPosts[slug] : null;

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
              to="/"
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
    <div className="container mx-auto mt-22 px-6 relative">
      <article className="max-w-3xl mx-auto relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Archive
        </Link>

        <header className="mb-12">
          <span className="text-primary font-mono text-sm tracking-widest">
            {post.category}
          </span>
          <h1 className="text-5xl md:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
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
            <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </header>

        <div className="celestial-border rounded-lg p-8 md:p-12 bg-card/30 backdrop-blur-sm">
          {/* Use Tailwind Typography 'prose' to style the Markdown output */}
          <div
            className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-foreground prose-p:text-foreground/80 
            prose-code:text-primary prose-pre:bg-secondary/50 space-y-4"
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
            to="/"
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
