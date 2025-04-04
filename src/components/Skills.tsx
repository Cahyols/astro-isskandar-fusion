
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Skill } from "@/lib/types";

// Make sure all skills have a level property
const formatSkills = (skills: Skill[]): Array<{ name: string; level: number }> => {
  return skills.map(skill => ({
    name: skill.name,
    level: skill.level || 5 // Default to 5 if level is not defined
  }));
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium dark:text-white">{name}</span>
        <span className="text-xs font-medium text-muted-foreground dark:text-white/70">
          {level}/10
        </span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden dark:bg-zinc-800">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          style={{ width: `${(level / 10) * 100}%` }}
        />
      </div>
    </div>
  );
};

const SkillGrid = ({ skills }: { skills: Array<{ name: string; level: number }> }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Skill categories
  const frontendSkills: Skill[] = [
    { name: "HTML", level: 9 },
    { name: "CSS", level: 8 },
    { name: "JavaScript", level: 8 },
    { name: "AngularJS", level: 7 },
    { name: "React", level: 6 },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", level: 7 },
    { name: "Python", level: 7 },
    { name: "C#", level: 6 },
    { name: "MySQL", level: 7 },
    { name: "Git", level: 8 },
    { name: "Microsoft Azure", level: 6 },
  ];

  const testingSkills: Skill[] = [
    { name: "Test Plan Creation", level: 9 },
    { name: "Manual Testing", level: 9 },
    { name: "Software Troubleshooting", level: 8 },
  ];

  const hardwareSkills: Skill[] = [
    { name: "AutoCAD", level: 8 },
    { name: "PC Assembly", level: 8 },
    { name: "Hardware Troubleshooting", level: 7 },
    { name: "Circuit Design", level: 6 },
    { name: "Soldering", level: 7 },
  ];

  // All skills combined
  const allSkills = [
    ...frontendSkills,
    ...backendSkills,
    ...testingSkills,
    ...hardwareSkills,
  ];

  return (
    <section id="skills" className="py-20 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gradient">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto dark:text-white/70">
            Technical skills and proficiencies gained through education and professional experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="all" className="dark:text-white dark:data-[state=active]:bg-primary/20">All</TabsTrigger>
              <TabsTrigger value="frontend" className="dark:text-white dark:data-[state=active]:bg-primary/20">Frontend</TabsTrigger>
              <TabsTrigger value="backend" className="dark:text-white dark:data-[state=active]:bg-primary/20">Backend</TabsTrigger>
              <TabsTrigger value="testing" className="dark:text-white dark:data-[state=active]:bg-primary/20">Testing</TabsTrigger>
              <TabsTrigger value="hardware" className="dark:text-white dark:data-[state=active]:bg-primary/20">Hardware</TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <TabsContent value="all">
                <SkillGrid skills={formatSkills(allSkills)} />
              </TabsContent>
              
              <TabsContent value="frontend">
                <SkillGrid skills={formatSkills(frontendSkills)} />
              </TabsContent>
              
              <TabsContent value="backend">
                <SkillGrid skills={formatSkills(backendSkills)} />
              </TabsContent>
              
              <TabsContent value="testing">
                <SkillGrid skills={formatSkills(testingSkills)} />
              </TabsContent>
              
              <TabsContent value="hardware">
                <SkillGrid skills={formatSkills(hardwareSkills)} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
