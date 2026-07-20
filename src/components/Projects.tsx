import { ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team boards, and productivity analytics.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      tags: ["TypeScript", "React", "Firebase"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with forecasts, location search, and interactive maps.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      tags: ["React", "API Integration", "Charts"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Builder",
      description: "A drag-and-drop portfolio builder allowing users to create stunning portfolios without coding.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      tags: ["Next.js", "Tailwind", "DnD"],
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media metrics across multiple platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["React", "D3.js", "REST API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-first fitness app for tracking workouts, nutrition, and progress over time.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      tags: ["React Native", "TypeScript", "Charts"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-lg text-muted-foreground">
              Here are some of my recent works. Each project represents a unique challenge 
              and showcases different aspects of my skills.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1} className="h-full">
              <div className="h-full flex flex-col bg-background border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

