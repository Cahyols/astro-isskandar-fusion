
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
      <div className="absolute -left-40 top-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="mb-16 text-center">
          <h2 className="inline-block text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 mb-3">
            PROFESSIONAL JOURNEY
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A chronological display of my professional journey, showcasing roles and responsibilities that have shaped my expertise in software engineering, testing, and electronic systems.
          </p>
        </div>

        <div 
          ref={timelineRef}
          className={cn(
            "grid md:grid-cols-[1fr_3px_2fr] gap-6 relative transition-opacity duration-1000",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Timeline navigation */}
          <div className="order-2 md:order-1">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "p-4 mb-4 rounded-lg cursor-pointer transition-all hover:bg-primary/5",
                  activeIndex === index ? "bg-primary/10 border-l-4 border-primary" : ""
                )}
              >
                <h4 className="font-bold">{exp.title}</h4>
                <div className="text-sm text-foreground/70">
                  {exp.company} • {exp.period}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline center line */}
          <div className="hidden md:block order-2 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2"></div>
            {experiences.map((_, index) => (
              <div 
                key={index}
                className={cn(
                  "absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full transition-all",
                  index === activeIndex ? "scale-150 bg-primary" : "bg-border",
                  `top-[${5 + index * 18}%]` // Dynamic positioning
                )}
                style={{ top: `${5 + index * 12}%` }}
              ></div>
            ))}
          </div>

          {/* Experience details */}
          <div className="order-1 md:order-3">
            <div className="glass-card rounded-xl p-6 md:p-8 transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
                {experiences[activeIndex].type && (
                  <span className="px-2 py-0.5 bg-accent text-white rounded-full text-xs">
                    {experiences[activeIndex].type}
                  </span>
                )}
                <span>{experiences[activeIndex].company}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">
                {experiences[activeIndex].title}
              </h3>
              
              <div className="flex flex-wrap gap-2 items-center text-sm text-foreground/70 mb-6">
                <div>{experiences[activeIndex].location}</div>
                <span>•</span>
                <div>{experiences[activeIndex].period}</div>
              </div>
              
              <ul className="space-y-3">
                {experiences[activeIndex].description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
