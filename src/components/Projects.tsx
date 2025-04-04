
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const getRandomPosition = (index: number) => {
    const positions = [
      "top-10 left-10",
      "top-20 right-10",
      "bottom-10 left-1/4",
      "bottom-20 right-1/4",
    ];
    return positions[index % positions.length];
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 mb-3">
            FEATURED PROJECTS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Highlighting key projects that demonstrate my technical skills and innovative problem-solving approach in software development and electronic engineering.
          </p>
        </div>

        <div 
          ref={projectsRef} 
          className={cn(
            "transition-opacity duration-1000",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* Project navigation */}
            <div className="space-y-4">
              {projects.map((project, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  className={cn(
                    "p-5 rounded-xl cursor-pointer transition-all",
                    activeProject === idx 
                      ? "bg-gradient-to-r from-primary/20 to-secondary/20 border-l-4 border-primary" 
                      : "hover:bg-foreground/5"
                  )}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">
                      {project.title.length > 40 
                        ? `${project.title.substring(0, 40)}...` 
                        : project.title}
                    </h4>
                    <span className="text-sm px-2 py-0.5 bg-primary/10 rounded-full text-primary">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Project details */}
            <div className="relative">
              <div className="glass-card rounded-xl p-6 md:p-8 transform transition-transform duration-500 hover:scale-[1.02] h-full">
                <div className="absolute top-0 right-0 p-3">
                  <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    {projects[activeProject].year}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 pr-20">
                  {projects[activeProject].title}
                </h3>
                
                <p className="mb-8 text-foreground/80">
                  {projects[activeProject].description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold mb-3 text-foreground/70">TECHNOLOGIES USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].skills?.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-foreground/10 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  Project Details
                </Button>
              </div>

              {/* Floating tech patterns */}
              {[0, 1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className={cn(
                    "absolute w-16 h-16 opacity-10 rounded-lg border border-primary/30",
                    getRandomPosition(i),
                    i % 2 === 0 ? "animate-float" : "animate-pulse-slow"
                  )}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <div className="w-full h-full bg-primary/10 backdrop-blur-sm rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
