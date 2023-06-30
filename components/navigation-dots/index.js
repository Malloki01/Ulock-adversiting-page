import React, { useEffect, useState } from "react";
import Link from "next/link";
import usePath from "../../hooks/usePath";

const menuItems = ["home", "about", "projects", "experiences", "contact"];

const NavigationDots = () => {
  const path = usePath();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => document.getElementById(item));
      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app__navigation">
      {menuItems.map((item) => (
        <div
          key={item}
          className={
            activeSection === item ? "app__navigation-dot active" : "app__navigation-dot"
          }
        >
          <Link href={`#${item}`}>{item}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavigationDots;
