/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    //check system prefences
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
	//update when dark mode changes
	if(darkMode){
		document.documentElement.classList.add("dark");
	}
	else{
		document.documentElement.classList.remove("dark");
	}
  }, [darkMode]);

  useEffect(() => {
	//add smooth scrolling
	document.documentElement.style.scrollBehavior = "smooth";
	return () => {
		document.documentElement.style.scrollBehavior = "auto";
	};
  },[]);

  function ToggleDarkMode(){
	setDarkMode(!darkMode);
  }

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Header darkmode={darkMode} ToggleDarkMode={ToggleDarkMode} />
		<main>
			<Hero/>
			<About />
			<Education/>
			<Projects/>
			<Contact/>
		</main>
		<Footer/>
      </div>
    </>
  );
}
