
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Isshahrul Isskandar - Software Engineer Portfolio";
    
    // Add cyberpunk grid effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen flex flex-col bg-background transition-colors duration-300 relative overflow-hidden">
        {/* Cyberpunk grid background */}
        <div className="fixed inset-0 z-0 bg-grid-pattern opacity-10 dark:opacity-20 pointer-events-none"></div>
        
        {/* Gradient orb that follows cursor */}
        <div className="fixed z-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl opacity-30 dark:opacity-20 pointer-events-none"
          style={{
            left: 'calc(var(--mouse-x, 0.5) * 100vw - 250px)',
            top: 'calc(var(--mouse-y, 0.5) * 100vh - 250px)',
          }}></div>
          
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
