import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  darkmode: boolean;
  ToggleDarkMode: () => void;
}

interface INav {
  title: string;
  section: string;
}



export default function Header({ darkmode, ToggleDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //scroll to sections
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  }


  const Nav: INav[] = [
  {
    title: "home",
    section: "home",
  },
  {
    title: "about",
    section: "about",
  },
  {
    title: "education",
    section: "education",
  },
  {
    title: "projects",
    section: "projects",
  },
  {
    title: "contact",
    section: "contact",
  },
];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#" className="text-2xl font-bold text-primary">
              Mohamed
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {Nav.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="text-sm font-medium transition-colors hover:text-primary capitalize cursor-pointer"
              >
                {item.title}
              </button>
            ))}
          </nav>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={ToggleDarkMode}
              className="rounded-full p-2 hover:bg-accent transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkmode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-md p-2 hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {Nav.map((item) => (
              <button key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-accent rounded-md capitalize"
              >
                {item.title}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
