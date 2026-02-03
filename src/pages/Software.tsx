import ArticleCard from "../components/ArticleCard";
import SeriesCard from "../components/SeriesCard";
import { article, article2, article3 } from "../types/article";

const Software = () => {
  return (
    <section className="w-full flex flex-col gap-12  bg-slate-950 text-white min-h-screen">
      {/* Banner */}
      <div className="relative w-full container mx-auto flex items-center justify-center bg-card/50 backdrop-blur-2xl cursor-default">
        <div className="relative z-10 w-full space-y-2 p-8 md:p-12 rounded-b-2xl  backdrop-blur-md shadow-2xl flex flex-col justify-center items-center text-center">
          <p className="text-primary/70 text-sm">Currently working on:</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/50">
            AWS
          </h1>
          <h3 className="text-lg md:text-xl font-light text-blue-100/80 max-w-md">
            AWS Cloud Practitioner Certification.
          </h3>
        </div>
      </div>

      {/* Series Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 border-l-4 border-primary/70   pl-4">
          Series
        </h2>
        <div className="flex gap-4">
          <SeriesCard />
        </div>
      </div>

      {/* Articles Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 border-l-4 border-primary/70 pl-4">
          Articles
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <ArticleCard article={article} />
          <ArticleCard article={article2} />
          <ArticleCard article={article3} />
        </div>
      </div>
    </section>
  );
};

export default Software;
