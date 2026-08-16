"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/shared/button";
import { Icon } from "@/components/shared/icon";
import { siteConfig } from "@/config/site";

const navLinks = siteConfig.nav;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/20 transition-all duration-500 ${
        scrolled || menuOpen ? "bg-white/95 shadow-xl" : "bg-white/70"
      }`}
    >
      <div
        className={`flex justify-between items-center max-w-container-max mx-auto px-gutter transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="flex items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Kriwheel_logo.png"
            alt={siteConfig.name}
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-9" : "h-12"
            }`}
          />
        </Link>

        <div className="hidden md:flex items-center gap-unit-xl">
          {navLinks.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-bold text-label-caps uppercase tracking-widest transition-colors ${
                  active
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            href={siteConfig.cta.href}
            className="hidden sm:inline-flex"
          >
            {siteConfig.cta.label}
          </Button>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden w-11 h-11 -mr-2 flex items-center justify-center text-primary"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-white/95 border-t border-outline-variant/20 transition-all duration-300 ease-out ${
          menuOpen ? "max-h-[26rem]" : "max-h-0"
        }`}
      >
        <div className="px-gutter py-unit-md flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 font-bold text-label-caps uppercase tracking-widest transition-colors ${
                  active
                    ? "text-secondary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            variant="primary"
            size="sm"
            href={siteConfig.cta.href}
            onClick={() => setMenuOpen(false)}
            className="mt-unit-sm w-full"
          >
            {siteConfig.cta.label}
          </Button>
        </div>
      </div>
    </nav>
  );
}
