import { Link } from "react-router";

const SeriesCard = () => {
  return (
    <Link
      to={`/software/${"clf-c02"}`}
      className="group celestial-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all block min-w-62.5 "
    >
      <h3 className="text-center text-foreground group-hover:text-primary transition-colors">
        AWS Cloud Practitioner Certification
      </h3>
      <p className="text-sm text-muted-foreground">3 posts</p>
      <p className="text-xs text-muted-foreground">
        Last update: 3 February 2026
      </p>
    </Link>
  );
};

export default SeriesCard;
