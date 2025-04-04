
import { useRef, useState } from "react";
import { BentoCard, BentoGrid } from "@/components/BentoGrid";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface BentoProjectsGridProps {
  projects: Project[];
}

export default function BentoProjectsGrid({ projects }: BentoProjectsGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {projects.map((project, i) => {
          const isWide = i === 0 || i === 3;
          const isLarge = i <= 1;
          
          return (
            <div 
              key={project.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 ${
                isWide ? "md:col-span-4" : "md:col-span-2"
              } ${isLarge ? "md:row-span-2 aspect-[5/3]" : "aspect-square"}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 transition-opacity group-hover:opacity-100"></div>
              
              <div className="relative z-20 h-full flex flex-col justify-between">
                <div>
                  <span className="text-sm text-muted-foreground font-mono dark:text-zinc-500">
                    {project.year}
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-foreground dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.skills?.slice(0, 3).map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline"
                        className="bg-primary/10 dark:bg-primary/20 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {project.skills && project.skills.length > 3 && (
                      <Badge 
                        variant="outline"
                        className="bg-muted text-muted-foreground text-xs dark:bg-zinc-800"
                      >
                        +{project.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0 dark:from-zinc-900">
                  <Button variant="outline" size="sm" className="w-full dark:bg-zinc-800 dark:hover:bg-zinc-700">
                    View Project <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
              
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover opacity-20 transition-opacity group-hover:opacity-40"
                  />
                </div>
              )}
              
              <div 
                className="pointer-events-none absolute -inset-px z-30 transition duration-300"
                style={{
                  background: hoveredIndex === i ? `
                    radial-gradient(
                      800px circle at var(--x) var(--y), 
                      rgba(var(--primary-rgb), 0.1), 
                      transparent 40%
                    )
                  ` : '',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
