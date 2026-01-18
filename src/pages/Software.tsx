import ArticleCard from "../components/ArticleCard";
import SeriesCard from "../components/SeriesCard";

const Software = () => {
  const article = {
    id: "1",
    slug: "building-type-safe-apis-with-trpc",
    title: "Building Type-Safe APIs with tRPC",
    excerpt:
      "Exploring how tRPC eliminates the need for REST or GraphQL by providing end-to-end type safety between your client and server.",
    date: "January 15, 2024",
    readTime: "8 min read",
    body: "Something long",
  };
  return (
    <section className="w-full border border-white flex flex-col gap-8 ">
      <div className="w-full border border-red-500 h-50">Banner</div>
      <div className="container mx-auto px-4">
        <h2 className="mb-2">Series</h2>
        <div className="flex gap-4">
          <SeriesCard />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="mb-2">Articles</h2>
        <div className="grid lg:grid-cols-2 gap-4">
          <ArticleCard article={article} />
          <ArticleCard article={article} />
          <ArticleCard article={article} />
          <ArticleCard article={article} />
          <ArticleCard article={article} />
        </div>
      </div>
    </section>
  );
};

export default Software;
