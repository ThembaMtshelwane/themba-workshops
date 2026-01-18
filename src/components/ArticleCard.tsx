import { Link } from "react-router";

interface IArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string;
}

type ArticleCardProps = {
  article: IArticle;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link
      key={article.id}
      to={`/articles/${article.slug}`}
      className="group celestial-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all block"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-mono text-primary/70">
          {article.date}
        </span>
        <span className="text-xs text-muted-foreground">
          {article.readTime}
        </span>
      </div>
      <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
        {article.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
    </Link>
  );
};

export default ArticleCard;
