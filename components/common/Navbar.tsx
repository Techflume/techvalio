"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Cog, Menu, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMainDropdown, setOpenMainDropdown] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);

  // Ref & effect to close desktop dropdowns if click outside
  const navRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMainDropdown(false);
        setOpenSubDropdown(null);
      }
    }
    if (openMainDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [openMainDropdown]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-2 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Cog className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Techvalio</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex flex-1 justify-center" ref={navRef}>
          <ul className="flex gap-8 text-sm font-medium items-center">
            {navItems.map((item) =>
              item.label === "Services" ? (
                <li key={item.label} className="relative">
                  <button
                    className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none"
                    aria-haspopup="menu"
                    aria-expanded={openMainDropdown}
                    type="button"
                    onClick={() => {
                      setOpenMainDropdown((show) => !show);
                      setOpenSubDropdown(null);
                    }}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  {openMainDropdown && (
                    <div className="absolute left-0 top-full mt-2 min-w-[260px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
                      <div className="py-2">
                        {item.children.map((sub) => (
                          <div key={sub.label} className="relative">
                            <button
                              className="flex items-center justify-between px-4 py-3 w-full hover:bg-gray-100 transition text-primary font-semibold"
                              onClick={() =>
                                setOpenSubDropdown(
                                  openSubDropdown === sub.label ? null : sub.label
                                )
                              }
                              type="button"
                            >
                              <span>{sub.label}</span>
                              <ChevronRight className="h-4 w-4" />
                            </button>
                            {openSubDropdown === sub.label && (
                              <div className="absolute left-full top-0 min-w-[280px] bg-white border shadow-lg rounded-md overflow-hidden z-50 ml-1">
                                <div className="py-2">
                                  {sub.children.map((deep) => (
                                    <Link
                                      href={deep.href}
                                      key={deep.label}
                                      className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-gray-100 transition text-sm"
                                      onClick={() => {
                                        setOpenMainDropdown(false);
                                        setOpenSubDropdown(null);
                                      }}
                                    >
                                      {deep.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
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
              +1 (979) 452-4280
            </a>
          </div>
          <Button className="hidden md:inline-flex" size="sm" asChild>
            <Link href="#get-quote">Request a Demo</Link>
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
            <SheetContent side="left" className="pr-0 w-full max-w-sm overflow-y-auto">
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
                  item.label === "Services" ? (
                    <div key={item.label}>
                      <button
                        className="flex items-center gap-1 w-full text-lg font-semibold text-primary"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 ml-1 transition-transform ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      
                      {mobileServicesOpen && (
                        <div className="mt-2 ml-4 space-y-3">
                          {item.children.map((sub) => (
                            <div key={sub.label}>
                              <button
                                className="flex items-center gap-1 w-full text-base font-medium text-muted-foreground"
                                onClick={() =>
                                  setMobileSubOpen(
                                    mobileSubOpen === sub.label ? null : sub.label
                                  )
                                }
                              >
                                {sub.label}
                                <ChevronDown
                                  className={`h-4 w-4 ml-1 transition-transform ${
                                    mobileSubOpen === sub.label ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              {mobileSubOpen === sub.label && (
                                <ul className="mt-2 ml-4 space-y-2">
                                  {sub.children.map((deep) => (
                                    <li key={deep.label}>
                                      <Link
                                        href={deep.href}
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setMobileServicesOpen(false);
                                          setMobileSubOpen(null);
                                        }}
                                        className="block text-sm hover:text-primary transition-colors"
                                      >
                                        {deep.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg text-muted-foreground hover:text-primary transition-colors"
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
                  +1 (979) 452-4280
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
