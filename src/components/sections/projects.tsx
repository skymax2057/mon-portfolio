"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ChevronDown, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectType = "all" | "web" | "mobile" | "desktop";
type ProjectYear = "all" | "2024" | "2023" | "2022";

interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  year: string;
  stack: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "SaaS Dashboard Analytics",
    description: "Plateforme d'analytics temps réel pour entreprises. Visualisations de données avancées et rapports automatisés.",
    type: "web",
    year: "2024",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    role: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "App Météo Pro",
    description: "Application mobile de prévisions météo avec notifications push et widgets personnalisés.",
    type: "mobile",
    year: "2024",
    stack: ["React Native", "Expo", "Weather API"],
    role: "Mobile Dev",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "3",
    title: "CRM Desktop",
    description: "Application desktop de gestion client avec synchronisation offline et export de données.",
    type: "desktop",
    year: "2023",
    stack: ["Tauri", "Rust", "React", "SQLite"],
    role: "Full Stack",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "E-commerce Next.js",
    description: "Boutique en ligne complète avec paiement Stripe, gestion des stocks et dashboard admin.",
    type: "web",
    year: "2023",
    stack: ["Next.js", "Stripe", "Tailwind", "Supabase"],
    role: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Fitness Tracker",
    description: "Application mobile de suivi fitness avec intégration HealthKit et Google Fit.",
    type: "mobile",
    year: "2023",
    stack: ["Flutter", "Dart", "Firebase"],
    role: "Mobile Dev",
    liveUrl: "https://example.com",
  },
  {
    id: "6",
    title: "Éditeur Markdown",
    description: "Éditeur Markdown desktop avec preview temps réel et export PDF.",
    type: "desktop",
    year: "2022",
    stack: ["Electron", "React", "Node.js"],
    role: "Frontend",
    githubUrl: "https://github.com",
  },
];

const typeFilters: { value: ProjectType; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "desktop", label: "Desktop" },
];

const yearFilters: { value: ProjectYear; label: string }[] = [
  { value: "all", label: "Toutes les années" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
];

export function Projects() {
  const [typeFilter, setTypeFilter] = useState<ProjectType>("all");
  const [yearFilter, setYearFilter] = useState<ProjectYear>("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesType = typeFilter === "all" || project.type === typeFilter;
    const matchesYear = yearFilter === "all" || project.year === yearFilter;
    return matchesType && matchesYear;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="indigo" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de projets réalisés sur différentes plateformes et technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
            {typeFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setTypeFilter(filter.value)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  typeFilter === filter.value
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value as ProjectYear)}
              className="bg-muted text-sm font-medium rounded-lg px-3 py-2 border-0 focus:ring-2 focus:ring-ring"
            >
              {yearFilters.map((filter) => (
                <option key={filter.value} value={filter.value}>
                  {filter.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo" />
              Projets en vedette
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ProjectCard
                    project={project}
                    expanded={expandedProject === project.id}
                    onToggle={() => setExpandedProject(
                      expandedProject === project.id ? null : project.id
                    )}
                    featured
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects */}
        <div>
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            Tous les projets
          </h3>
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {regularProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <ProjectCard
                    project={project}
                    expanded={expandedProject === project.id}
                    onToggle={() => setExpandedProject(
                      expandedProject === project.id ? null : project.id
                    )}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground">
              Aucun projet ne correspond aux filtres sélectionnés.
            </p>
            <Button
              variant="ghost"
              onClick={() => {
                setTypeFilter("all");
                setYearFilter("all");
              }}
              className="mt-4"
            >
              Réinitialiser les filtres
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
  featured?: boolean;
}

function ProjectCard({ project, expanded, onToggle, featured }: ProjectCardProps) {
  const typeColors: Record<string, string> = {
    web: "indigo",
    mobile: "cyan",
    desktop: "violet",
  };

  return (
    <Card className={cn(
      "h-full flex flex-col overflow-hidden group",
      "border-border/50 hover:border-indigo/30 transition-all duration-300",
      "hover:shadow-lg hover:-translate-y-1",
      featured && "border-indigo/20"
    )}>
      {/* Image placeholder */}
      <div className={cn(
        "relative overflow-hidden bg-linear-to-br from-muted to-muted/50",
        featured ? "h-48" : "h-40"
      )}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Screenshot du projet</span>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-indigo/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-indigo hover:scale-110 transition-transform"
            >
              <ExternalLink className="w-5 h-5" />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-indigo hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5" />
            </Link>
          )}
        </div>
        {/* Type badge */}
        <Badge
          variant={typeColors[project.type] as "indigo" | "cyan" | "violet"}
          className="absolute top-3 left-3"
        >
          {project.type === "web" && "Web"}
          {project.type === "mobile" && "Mobile"}
          {project.type === "desktop" && "Desktop"}
        </Badge>
      </div>

      <CardHeader className="grow">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Stack badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.stack.length - 3}
            </Badge>
          )}
        </div>

        {/* Role */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            Rôle: <span className="text-foreground">{project.role}</span>
          </span>
          <button
            onClick={onToggle}
            className="flex items-center gap-1 text-xs text-indigo hover:underline"
          >
            Détails
            <ChevronDown className={cn(
              "w-4 h-4 transition-transform",
              expanded && "rotate-180"
            )} />
          </button>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Voir le site
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="w-4 h-4 mr-1" />
                        Code source
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
