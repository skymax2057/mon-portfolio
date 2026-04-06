"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Experience {
  id: string;
  type: "work" | "education" | "freelance" | "project";
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: "1",
    type: "freelance",
    title: "Lead Developer Full Stack",
    organization: "Freelance",
    location: "Libreville, Gabon",
    startDate: "2026",
    endDate: "Présent",
    description: "Direction technique d'une équipe de 5 développeurs. Architecture et développement de la plateforme SaaS principale.",
    achievements: [
      "Réduction de 40% du temps de chargement des pages",
      "Mise en place d'une architecture microservices",
      "Leadership technique et mentoring d'équipe",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "2",
    type: "freelance",
    title: "Développeur Full Stack Freelance",
    organization: "Indépendant",
    location: "Libreville, Gabon",
    startDate: "2024",
    endDate: "2026",
    description: "Développement de solutions sur mesure pour clients variés : startups, PME et grands comptes.",
    achievements: [
      "15+ projets livrés avec satisfaction client 100%",
      "Expertise multi-plateforme (Web, Mobile, Desktop)",
      "Gestion complète du cycle de vie des projets",
    ],
    technologies: ["React", "React Native", "Electron", "Firebase"],
  },
  {
    id: "3",
    type: "freelance",
    title: "Développeur Full Stack",
    organization: "Agence Digitale",
    location: "Libreville, Gabon",
    startDate: "2021",
    endDate: "2022",
    description: "Développement d'applications web et mobiles pour clients variés dans les secteurs e-commerce et services.",
    achievements: [
      "Développement de 8 applications mobiles publiées",
      "Contribution à l'amélioration des processus CI/CD",
      "Formation des nouveaux développeurs",
    ],
    technologies: ["React", "React Native", "Node.js", "MongoDB"],
  },
  {
    id: "4",
    type: "education",
    title: "Licence professionnel Informatique",
    organization: "Université de Libreville - INPTIC (Institut National de la Poste, des Technologies de l'Information et de la Communication)",
    location: "Libreville, Gabon",
    startDate: "2022",
    endDate: "2027",
    description: "Spécialisation en développement logiciel et architecture des systèmes d'information.",
    achievements: [
      "Mention Très Bien",
      "Projet de fin d'études : Plateforme collaborative",
      "Stage de recherche en laboratoire",
    ],
    technologies: ["Java", "Python", "Machine Learning"],
  },
];

const typeConfig = {
  work: {
    icon: Briefcase,
    label: "Expérience",
    color: "indigo",
  },
  freelance: {
    icon: Rocket,
    label: "Freelance",
    color: "emerald",
  },
  education: {
    icon: GraduationCap,
    label: "Formation",
    color: "violet",
  },
  project: {
    icon: Rocket,
    label: "Projet",
    color: "cyan",
  },
};

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="indigo" className="mb-4">Parcours</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Expérience & <span className="gradient-text">Formation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon parcours professionnel et académique, jalonné de projets variés
            et d&apos;apprentissages continus.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-indigo via-cyan to-violet" />

          {/* Mobile line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-indigo via-cyan to-violet" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const config = typeConfig[exp.type];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={cn(
                    "relative flex flex-col md:flex-row gap-8",
                    isLeft ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Content Card */}
                  <div className={cn(
                    "flex-1 md:w-5/12",
                    isLeft ? "md:text-right" : "md:text-left"
                  )}>
                    <div className={cn(
                      "glass rounded-2xl p-6 hover:border-indigo/30 transition-all duration-300",
                      "hover:shadow-lg hover:-translate-y-1"
                    )}>
                      {/* Header */}
                      <div className={cn(
                        "flex items-center gap-3 mb-4",
                        isLeft ? "md:flex-row-reverse" : ""
                      )}>
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                          config.color === "indigo" && "bg-indigo/10 text-indigo",
                          config.color === "cyan" && "bg-cyan/10 text-cyan",
                          config.color === "violet" && "bg-violet/10 text-violet",
                          config.color === "emerald" && "bg-emerald/10 text-emerald"
                        )}>
                          <config.icon className="w-5 h-5" />
                        </div>
                        <div className={cn(isLeft ? "md:text-right" : "")}>
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {exp.organization} • {exp.location}
                          </p>
                        </div>
                      </div>

                      {/* Date */}
                      <div className={cn(
                        "flex items-center gap-2 text-sm text-muted-foreground mb-4",
                        isLeft ? "md:justify-end" : ""
                      )}>
                        <Calendar className="w-4 h-4" />
                        <span>{exp.startDate} - {exp.endDate}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className={cn(
                        "space-y-1 mb-4",
                        isLeft ? "md:text-right" : ""
                      )}>
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className={cn(
                              "text-sm text-muted-foreground flex items-start gap-2",
                              isLeft ? "md:flex-row-reverse" : ""
                            )}
                          >
                            <span className="text-indigo shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className={cn(
                        "flex flex-wrap gap-2",
                        isLeft ? "md:justify-end" : ""
                      )}>
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center point */}
                  <div className="hidden md:flex items-center justify-center w-8 shrink-0">
                    <div className={cn(
                      "w-4 h-4 rounded-full border-4 border-background",
                      config.color === "indigo" && "bg-indigo",
                      config.color === "cyan" && "bg-cyan",
                      config.color === "violet" && "bg-violet",
                      config.color === "emerald" && "bg-emerald"
                    )} />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1 md:w-5/12" />

                  {/* Mobile center point */}
                  <div className="md:hidden absolute left-4 top-6 -translate-x-1/2">
                    <div className={cn(
                      "w-3 h-3 rounded-full border-2 border-background",
                      config.color === "indigo" && "bg-indigo",
                      config.color === "cyan" && "bg-cyan",
                      config.color === "violet" && "bg-violet",
                      config.color === "emerald" && "bg-emerald"
                    )} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
