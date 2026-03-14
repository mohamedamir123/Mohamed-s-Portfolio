import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
export default function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission (would connect to backend in real app)
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or just want to say hi? Feel free to reach
              out!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:hello@example.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        mahamedamir.2026@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-primary"
                      >
                        +201002097829 | +201020821285
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground capitalize">Cairo, Egypt</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-2">
                  Available for freelance work
                </h4>
                <p className="text-muted-foreground">
                  I'm currently available for freelance projects and full-time
                  opportunities. Let's collaborate on something amazing!
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="left" delay={0.2}>
            <div>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 border border-border rounded-lg p-6 shadow-lg bg-muted/50"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
