
const Hero = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/40 to-background" />
        </div> */}

        {/* <StarField /> */}

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div>
            <div className="inline-flex items-center gap-2 text-primary/80 text-sm font-mono mb-6 tracking-widest">
              <span className="w-8 h-px bg-primary/50" />
              {/* ANNO MMXXIV */}
              <span className="w-8 h-px bg-primary/50" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
            Coming <span className="text-gradient-gold">Soon</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in">
            A chronicle of explorations in code, prose, and circuits — charting
            the constellations of my curiosity.
          </p>

          <div
            className="flex flex-wrap justify-center gap-6 animate-fade-in"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            <a
              href="#sections"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(var(--star-gold)/0.3)]"
            >
              Begin Exploration
            </a>
            <a
              href="#about"
              className="px-8 py-3 border border-primary/30 text-foreground rounded-lg font-medium hover:border-primary/60 hover:bg-primary/5 transition-all"
            >
              About the Archive
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
