"use client";

import Link from "next/link";
import { data } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 animate-fadeIn">
      <div className="backdrop-blur-sm bg-background/30 h-full">
        <div className="container mx-auto px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo/Name */}
            <Link
              href="/"
              className="text-xl font-semibold tracking-wide hover:opacity-70 transition-opacity"
            >
              {data.name}
            </Link>

            {/* Theme Toggle and Navigation */}
            <div className="flex items-center gap-8">
              <ThemeToggle />

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8 h-full">
                {data.navigation.map((link: any) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-bold text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu Button - placeholder for future implementation */}
              <button className="md:hidden text-base font-bold">Menu</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
