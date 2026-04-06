"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Smartphone,
  Monitor,
  Cloud,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    icon: Code2,
    title: "Front-End",
    description: "Interfaces modernes et réactives",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Vue.js", level: 75 },
    ],
    color: "indigo",
  },
  {
    icon: Server,
    title: "Back-End",
    description: "APIs robustes et scalables",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python/FastAPI", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "Redis", level: 70 },
    ],
    color: "cyan",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Apps iOS et Android",
    skills: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 80 },
      { name: "Expo", level: 85 },
      { name: "Swift", level: 65 },
      { name: "Kotlin", level: 60 },
    ],
    color: "violet",
  },
  {
    icon: Monitor,
    title: "Desktop",
    description: "Applications multiplateforme",
    skills: [
      { name: "Electron", level: 85 },
      { name: "Tauri", level: 80 },
      { name: "WPF/.NET", level: 70 },
      { name: "Qt", level: 60 },
    ],
    color: "emerald",
  },
  {
    icon: Cloud,
    title: "DevOps",
    description: "Déploiement et infrastructure",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS/Vercel", level: 90 },
      { name: "CI/CD (GitHub Actions)", level: 85 },
      { name: "Kubernetes", level: 65 },
      { name: "Terraform", level: 60 },
    ],
    color: "amber",
  },
  {
    icon: Wrench,
    title: "Outils & IA",
    description: "Productivité et innovation",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Cursor/VS Code", level: 95 },
      { name: "OpenAI API", level: 85 },
      { name: "Vector DBs", level: 70 },
    ],
    color: "indigo",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="indigo" className="mb-4">Stack Technique</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Compétences & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un arsenal technologique complet pour relever tous les défis de développement,
            du frontend au backend, du mobile au desktop.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                "border border-border/50 bg-card/50 backdrop-blur-sm",
                "hover:border-indigo/30 transition-all duration-300",
                index === 0 && "md:col-span-2 lg:col-span-1"
              )}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                    category.color === "indigo" && "bg-indigo/10 text-indigo",
                    category.color === "cyan" && "bg-cyan/10 text-cyan",
                    category.color === "violet" && "bg-violet/10 text-violet",
                    category.color === "emerald" && "bg-emerald/10 text-emerald",
                    category.color === "amber" && "bg-amber/10 text-amber"
                  )}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List with Progress Bars */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + skillIndex * 0.05,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className={cn(
                            "h-full rounded-full",
                            category.color === "indigo" && "bg-indigo",
                            category.color === "cyan" && "bg-cyan",
                            category.color === "violet" && "bg-violet",
                            category.color === "emerald" && "bg-emerald",
                            category.color === "amber" && "bg-amber"
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Terminal Easter Egg */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="glass-dark rounded-xl p-4 font-mono text-sm">
            <div className="flex items-center gap-2 mb-3 text-muted-foreground">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-2">terminal — zsh</span>
            </div>
            <div className="space-y-1">
              <p className="text-green-400">
                $ <span className="text-foreground">npx about-me</span>
              </p>
              <p className="text-cyan">➜</p>
              <p className="text-foreground">
                🚀 Développeur Full Stack passionné
              </p>
              <p className="text-foreground">
                💻 Spécialisé Web, Mobile & Desktop
              </p>
              <p className="text-foreground">
                📍 Disponible pour missions freelance
              </p>
              <p className="text-muted-foreground">
                _
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
