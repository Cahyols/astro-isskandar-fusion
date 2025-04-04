
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const typingRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Animation for the grid dots
  useEffect(() => {
    const interval = setInterval(() => {
      dotsRef.current.forEach((dot, index) => {
        if (dot) {
          setTimeout(() => {
            dot.classList.add("animate-pulse-slow");
            setTimeout(() => {
              dot.classList.remove("animate-pulse-slow");
            }, 2000);
          }, index * 50);
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-24 overflow-hidden grid-bg-pattern">
      {/* Tech grid background animation */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-30">
        {[...Array(400)].map((_, index) => (
          <div 
            key={index}
            ref={el => dotsRef.current[index] = el}
            className={cn(
              "w-1.5 h-1.5 rounded-full bg-primary/40",
              Math.random() > 0.9 ? "animate-pulse-slow" : ""
            )}
          />
        ))}
      </div>

      {/* Glowing orbs in background */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full pt-10 md:pt-0">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium animate-fade-in">
            Electronic Engineering & Software Development
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <span className="text-gradient">AHMAD ISSHAHRUL</span>
            <br />
            <div className="relative">
              <div ref={typingRef} 
                className="overflow-hidden whitespace-nowrap border-r-4 border-primary inline-block pr-1 animate-typing animate-blink-caret">
                ISSKANDAR BIN MOHD ZAMAN
              </div>
            </div>
          </h1>

          <p className="text-lg text-foreground/80 mb-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
            {personalInfo.summary.split('. ')[0]}. {personalInfo.summary.split('. ')[1]}.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{animationDelay: "0.6s"}}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              View My Work
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-16 animate-fade-in" style={{animationDelay: "0.8s"}}>
            <div className="flex gap-6 justify-center mb-2">
              <div className="glass-card p-3 rounded-lg glow-effect">
                <div className="font-mono text-sm text-foreground/70">// location</div>
                <div className="font-semibold">{personalInfo.location}</div>
              </div>
              <div className="glass-card p-3 rounded-lg glow-effect">
                <div className="font-mono text-sm text-foreground/70">// email</div>
                <div className="font-semibold">{personalInfo.email}</div>
              </div>
            </div>
            
            <a href="#experience" 
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary transition-colors mt-8">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="animate-float"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
