import { Link } from "react-router";
import ArticleCard from "../components/ArticleCard";
import { ArrowLeft } from "lucide-react";
import { article, article2 } from "../types/article";

const Series = () => {
  return (
    <div className="container mx-auto">
      <div className="relative w-full container mx-auto flex items-center justify-center bg-card/50 backdrop-blur-2xl cursor-default">
        <div className="relative z-10 w-full space-y-2 p-8 md:p-12 rounded-b-2xl  backdrop-blur-md shadow-2xl flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/50">
            AWS
          </h1>
          <h3 className="text-lg md:text-xl font-light text-blue-100/80 max-w-md">
            AWS Cloud Practitioner Certification.
          </h3>
        </div>
      </div>
      <Link
        to="/software"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mt-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Software Dev Home
      </Link>
      <div className="grid lg:grid-cols-2 gap-6 mt-8 px-4 sm:px-0">
        <ArticleCard article={article} />
        <ArticleCard article={article2} />
      </div>
    </div>
  );
};

export default Series;
