import ArticleCard from "../components/ArticleCard";

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
    <section className="w-full border border-white flex flex-col gap-4 ">
      <div className="w-full border border-red-500 h-50">Banner</div>
      <div className="w-full border border-blue-500 h-50">Series Section</div>
      <div>
        <h3>Articles</h3>
        <div className="flex flex-col gap-2">
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
