import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
export default function Education() {
    const education = [
      {
        degree: "Bachelor Of Computer Science",
        institution: "Higher Technological Institute",
        location: "Sharqia, 10th of Ramadan City",
        startDate: "September 2024",
        endDate: "Expected July 2028",
        status: "In Progress",
        description:
          "Focused on software engineering, web development, and computer science fundamentals. Maintained a strong academic record while working on various projects.",
      },
    ];
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">
              My academic journey and educational background
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <ScrollReveal key={index} direction="up" delay={0.2}>
              <div className="bg-background border border-border rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full self-start">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.status}</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-center space-x-3 mb-6 pl-0 sm:pl-16">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-medium">{edu.startDate}</span>
                  </div>
                  <div className="h-px flex-1 bg-border max-w-10"></div>
                  <div className="text-sm font-medium text-primary">
                    {edu.endDate}
                  </div>
                </div>

                {/* Description */}
                <div className="pl-0 sm:pl-16 space-y-4">
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Additional Education - Optional */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="mt-8 bg-muted/50 border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-3">
                Certifications & Continuous Learning
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Online Courses in React & Modern JavaScript</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Web Development Bootcamp</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>UI/UX Design Fundamentals</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Git & Version Control</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
