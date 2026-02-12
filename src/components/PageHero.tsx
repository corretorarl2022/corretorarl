import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, image, children }: PageHeroProps) => {
  return (
    <section className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center container">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-6">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
