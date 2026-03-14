import { Facebook, Github, Instagram } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import ProfileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hi, I'm <span className="text-primary">Mohamed</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-xl sm:text-2xl text-muted-foreground capitalize">
                front end developer | (React.js/Next.js)
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-lg text-muted-foreground max-w-2xl capitalize">
                I'm a passionate developer with a love for creating beautiful,
                functional, and user-centered digital experiences. With
                expertise in modern web technologies, I transform ideas into
                elegant solutions.
              </p>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.facebook.com/mohamed.amir.224972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/mohamedamir123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/mohamedamir.17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <ScrollReveal direction="left" delay={0.2} duration={0.8}>
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img
                  src={ProfileImg}
                  alt="Developer workspace"
                  className="relative rounded-full shadow-2xl w-full max-w-md lg:max-w-lg object-cover aspect-square"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
