
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
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen flex flex-col dark:bg-zinc-900 transition-colors duration-300">
        <Navbar />
        <main>
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
