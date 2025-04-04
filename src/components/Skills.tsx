
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const SkillCategory = ({ title, skills, color }: { 
  title: string; 
  skills: { name: string; level: number }[];
  color: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const catRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (catRef.current) {
      observer.observe(catRef.current);
    }

    return () => {
      if (catRef.current) {
        observer.unobserve(catRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={catRef}
      className={cn(
        "transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{skill.name}</span>
              <span className="text-foreground/60">{skill.level * 10}%</span>
            </div>
            <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
              <div 
                className={cn("h-full rounded-full transition-all duration-1000", color)}
                style={{ 
                  width: isVisible ? `${skill.level * 10}%` : "0%",
                  transitionDelay: `${idx * 100}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = skills.filter(s => s.category === "frontend");
  const backendSkills = skills.filter(s => s.category === "backend");
  const toolsSkills = skills.filter(s => s.category === "tools");
  const otherSkills = skills.filter(s => s.category === "hardware" || s.category === "other" || s.category === "testing");

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-foreground/[0.02]">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      {/* Background gradients */}
      <div className="absolute -right-40 bottom-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 top-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 mb-3">
            TECHNICAL EXPERTISE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities spanning frontend development, backend technologies, testing methodologies, and hardware expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          <SkillCategory 
            title="Frontend Development" 
            skills={frontendSkills} 
            color="bg-gradient-to-r from-primary to-secondary"
          />
          
          <SkillCategory 
            title="Backend Technologies" 
            skills={backendSkills} 
            color="bg-gradient-to-r from-secondary to-accent"
          />
          
          <SkillCategory 
            title="Tools & Platforms" 
            skills={toolsSkills} 
            color="bg-gradient-to-r from-accent to-primary"
          />
          
          <SkillCategory 
            title="Testing & Hardware" 
            skills={otherSkills} 
            color="bg-gradient-to-r from-secondary/90 to-primary/90"
          />
        </div>

        {/* Floating skill chips */}
        <div className="mt-20 flex flex-wrap justify-center gap-3">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className="tech-chip animate-float"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
