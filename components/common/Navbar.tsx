"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Cog, Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/data";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-2 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo/techvalio-logo.webp" alt="Techvalio Logo" width={150} height={150} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center" ref={navRef}>
          <ul className="flex gap-8 text-sm font-medium items-center">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label} className="relative">
                  <button
                    className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none"
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === item.label}
                    type="button"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full mt-2 min-w-[180px] bg-white shadow-lg rounded-md border border-gray-200 z-50 py-2">
                      {item.children.map((sub) => (
                        <Link
                          href={sub.href}
                          key={sub.label}
                          className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 text-base transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary text-muted-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a href="tel:+19794524280" className="text-sm font-medium hover:underline">
             +91 99648-43644
            </a>
          </div>
          <Button className="hidden md:inline-flex" size="sm" asChild>
            <Link href="/#contact">Request a Demo</Link>
          </Button>
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="lg:hidden p-2"
                aria-label="Open Mobile Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="pr-0 w-full max-w-sm overflow-y-auto"
            >
              <Link
                href="/"
                className="flex items-center gap-2 mb-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Cog className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Techvalio</span>
              </Link>
              <nav className="space-y-4">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <button
                        className="flex items-center gap-1 w-full text-lg font-semibold text-primary"
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 ml-1 transition-transform ${
                            mobileDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-2 border-l border-primary/25 pl-4">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block text-base text-muted-foreground hover:text-primary transition py-1"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setMobileDropdown(null);
                              }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg text-muted-foreground hover:text-primary transition py-2"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
              <div className="flex flex-col gap-4 mt-8 pt-4 border-t">
                <a
                  href="tel:+19794524280"
                  className="flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  <Phone className="h-4 w-4 text-muted-foreground" />
                 +91 99648-43644
                </a>
                <Button className="w-full" asChild>
                  <Link href="#get-quote" onClick={() => setIsMobileMenuOpen(false)}>
                    Request a Demo
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
