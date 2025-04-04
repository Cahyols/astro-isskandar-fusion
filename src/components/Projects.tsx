
import { Project } from "@/lib/types";
import BentoProjectsGrid from "./BentoProjectsGrid";

const Projects = () => {
  // Project data
  const projects: Project[] = [
    {
      title: "FusionSync: Data Synchronization System",
      year: "2024",
      description:
        "A full-featured system for seamless data synchronization and template integration. Handles automatic data merging across platforms and supports custom templating.",
      skills: ["Python", "React", "Node.js", "MySQL", "REST API"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "IoT Water Management System",
      year: "2024",
      description:
        "Integrated IoT solution for water management and nutrient delivery for cattle feeding. Features real-time monitoring and automated control systems.",
      skills: ["IoT", "Arduino", "C++", "Sensors", "Automation"],
      image: "https://images.unsplash.com/photo-1546900703-cf06143d1239?q=80&w=1471&auto=format&fit=crop"
    },
    {
      title: "Dynamic Client Reporting Dashboard",
      year: "2023",
      description:
        "Custom dashboard for Petronas Digital that visualizes test results and provides interactive reporting tools for stakeholders.",
      skills: ["Angular", "D3.js", "Node.js", "Express", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Automated Testing Framework",
      year: "2023",
      description:
        "Custom testing framework that streamlines quality assurance processes and generates comprehensive test reports.",
      skills: ["JavaScript", "Testing", "Automation", "Documentation"],
      image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Real-time Inventory Management System",
      year: "2022",
      description:
        "Inventory tracking system with real-time updates, barcode scanning, and reporting capabilities.",
      skills: ["JavaScript", "React", "Firebase", "Barcode API"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Smart Home Energy Monitor",
      year: "2021",
      description:
        "Energy monitoring solution using IoT devices to track and optimize household energy consumption.",
      skills: ["IoT", "Raspberry Pi", "Python", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1470&auto=format&fit=crop"
    },
  ];

  return (
    <section id="projects" className="py-20 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gradient">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto dark:text-white/70">
            Showcasing my work in software development, testing, and engineering solutions
          </p>
        </div>

        <BentoProjectsGrid projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
