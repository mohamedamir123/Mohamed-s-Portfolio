import {
  Code2,
  Palette,
  Rocket,
  Users,
  Monitor,
  Brush,
  Server,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description:
        "Creating beautiful, intuitive interfaces with attention to detail.",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description:
        "Optimizing applications for speed and seamless user experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively in teams and communicating technical concepts clearly.",
    },
  ];

  const skillTracks = [
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "TypeScript", "Next.js", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "UI/UX & Design",
      icon: Brush,
      color: "from-purple-500 to-pink-500",
      skills: [
        "Figma",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "Material UI",
        "Shadcn UI",
      ],
    },
    {
      title: "Version Control & Tools",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I'm a dedicated developer with a passion for building innovative
              web applications. My journey in tech started several years ago,
              and I've been continuously learning and growing ever since. I
              specialize in modern web technologies and love turning complex
              problems into simple, beautiful solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-16 max-w-6xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillTracks.map((track, index) => {
                const Icon = track.icon;
                return (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Track Header */}
                    <div className="flex items-center space-x-3 mb-5">
                      <div
                        className={`bg-linear-to-r ${track.color} p-2.5 rounded-lg`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-lg">{track.title}</h4>
                    </div>

                    {/* Skills Grid */}
                    <div className="flex flex-wrap gap-2">
                      {track.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-muted text-foreground px-3 py-1.5 rounded-md text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
