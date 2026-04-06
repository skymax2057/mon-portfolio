"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Monitor, Code2, Sparkles, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const expertiseCards = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Applications web modernes avec React, Next.js et TypeScript. Performance, SEO et expérience utilisateur optimale.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "indigo",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Applications mobiles cross-platform avec React Native et Flutter. Publication App Store et Play Store.",
    stack: ["React Native", "Flutter", "Expo", "iOS/Android"],
    color: "cyan",
  },
  {
    icon: Monitor,
    title: "Desktop Software",
    description: "Applications desktop performantes avec Electron et Tauri. Solutions métier et outils internes.",
    stack: ["Electron", "Tauri", "WPF", "Qt"],
    color: "violet",
  },
];

const highlights = [
  { icon: Code2, value: "50+", label: "Projets livrés" },
  { icon: Sparkles, value: "100%", label: "Clients satisfaits" },
  { icon: Zap, value: "3x", label: "Plus rapide" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="indigo" className="mb-4">À propos</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Expert <span className="gradient-text">Full Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionné par la création de solutions digitales innovantes sur toutes les plateformes.
            Je combine expertise technique et vision produit pour livrer des applications performantes.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className={cn(
                "h-full border-border/50 hover:border-indigo/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                "bg-card/50 backdrop-blur-sm"
              )}>
                <CardHeader>
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    card.color === "indigo" && "bg-indigo/10 text-indigo",
                    card.color === "cyan" && "bg-cyan/10 text-cyan",
                    card.color === "violet" && "bg-violet/10 text-violet"
                  )}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription className="text-base">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {card.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="text-center p-6 glass rounded-xl"
            >
              <item.icon className="w-6 h-6 mx-auto mb-2 text-indigo" />
              <div className="text-2xl font-bold gradient-text">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
