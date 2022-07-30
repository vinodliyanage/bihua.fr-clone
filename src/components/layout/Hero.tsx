import * as React from "react";

interface HeroProps {
  title: string;
  className: string;
  children: React.ReactNode
}

const Hero:React.FC<HeroProps> = (props) => {
  const { title, className, children} = props;
   
  return (
  <section className={`hero hero__${className}`}>
      <h1 aria-label={title.replace("-", " ")} className="hero__title">
        {children}
      </h1>
    </section>
  );
}

export default Hero;
