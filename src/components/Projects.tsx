import { ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import PantoImg from "../assets/panto-furniture.png";
import BookmarkImg from '../assets/bookmark.jpg';
import FyloImg from '../assets/fylo.jpg';
import GamingHubImg from '../assets/gaming-hub.png';
import CrispyImg from "../assets/crispy-chicken.png";
import DejaImg from "../assets/deja-brewed.png";

export default function Projects() {
    const projects = [
      {
        title: "Panto Furniture",
        description:
          "A landing page for a furniture company showcasing their products and services.",
        image: PantoImg,
        tags: ["Typescript", "React", "Next.js", "MUI", "Tailwind"],
        github: "https://github.com/mohamedamir123/Panto-Furniture",
        demo: "https://panto-furniture-indol.vercel.app/",
      },
      {
        title: "Bookmark Landing Page",
        description:
          "A responsive bookmark landing page with a clean and modern design from Frontend Mentor.",
        image: BookmarkImg,
        tags: ["React", "Typescript", "MUI", "Shadcn/ui"],
        github: "https://github.com/mohamedamir123/Bookmark-landing-page",
        demo: "https://bookmark-landing-page-brown-eight.vercel.app/",
      },
      {
        title: "Fylo Landing Page",
        description:
          "A responsive landing page with a clean and modern design in dark theme from Frontend Mentor.",
        image: FyloImg,
        tags: ["React", "Tailwind", "JavaScript"],
        github:
          "https://github.com/mohamedamir123/Fylo-dark-theme-landing-page",
        demo: "https://fylo-dark-theme-landing-page-omega-seven.vercel.app/",
      },
      {
        title: "Deja Brewed Landing Page",
        description:
          "A responsive landing page with a clean and modern design for a coffee shop",
        image: DejaImg,
        tags: ["React", "Tailwind", "JavaScript"],
        github:
          "https://github.com/mohamedamir123/Fylo-dark-theme-landing-page",
        demo: "https://fylo-dark-theme-landing-page-omega-seven.vercel.app/",
      },
      {
        title: "GamingHub",
        description: "An Online Gaming Store Project",
        image: GamingHubImg,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/mohamedamir123/Deja-Brewed",
        demo: "https://deja-brewed.vercel.app/",
      },
      {
        title: "Crispy-Chicken-Burgers",
        description: "An Online Fast Food Website",
        image: CrispyImg,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/mohamedamir123/Crispy---Chicken-Burgers",
        demo: "https://mohamedamir123.github.io/Crispy---Chicken-Burgers/",
      },
    ];
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto my-auto">
        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-lg text-muted-foreground">
              Here are some of my recent works. Each project represents a unique
              challenge and showcases different aspects of my skills.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 capitalize">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 capitalize">
                    {project.description}
                  </p>

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
                      target="_blank"
                      className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
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
