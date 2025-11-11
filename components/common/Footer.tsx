"use client";

import Link from 'next/link';
import {  Twitter, Linkedin, Phone, Mail, ArrowUp, Instagram, Youtube } from 'lucide-react';
import { footerNav } from '@/lib/data';
import { Button } from '../ui/button';
import Image from 'next/image';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4 lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 group">
                <Image src="/images/logo/blogs-bnr-white.webp" alt="Techvalio Logo" width={150} height={150} />
              </Link>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Ensuring your software is validated, compliant, and audit-ready</strong> for regulated and complex markets.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+19794524280"
                  className="flex items-center text-sm text-slate-300 hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 mr-2 text-primary group-hover:scale-110 transition-transform" />
                  +1 (979) 452-4280
                </a>
                <a
                  href="mailto:info@techvalio.com"
                  className="flex items-center text-sm text-slate-300 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 mr-2 text-primary group-hover:scale-110 transition-transform" />
                  info@techvalio.com
                </a>
              </div>
            </div>

            {/* Footer Navigation Sections */}
            {footerNav.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-semibold text-white text-base border-b border-slate-700 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-slate-400 text-center sm:text-left">
                © {new Date().getFullYear()} Techvalio – Software Validation Services. All rights reserved.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/techvalio/"
                  className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-200"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground z-40 transition-all duration-300 hover:scale-110"
        size="icon"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </>
  );
};

export default Footer;
