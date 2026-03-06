"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, Search, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const industries = [
  "Żłobki i przedszkola",
  "Gastronomia",
  "Transport",
  "IT",
  "Nieruchomości",
  "Medycyna",
  "Beauty",
  "Budownictwo",
  "E-commerce",
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = query
    ? industries.filter((i) =>
        i.toLowerCase().includes(query.toLowerCase())
      )
    : industries;

  return (
    <header>
      {/* Top bar */}
      <div className="border-b border-[#ebebeb] bg-white">
        <div className="mx-auto max-w-[960px] flex h-14 items-center justify-between px-4">
          <a
            href="/"
            className="font-[family-name:var(--font-heebo)] text-xl font-bold tracking-tight leading-none text-black"
          >
            zmianywprawie<span className="text-[#0065bd]">.pl</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-[#1a1a1a]">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 bg-transparent border-0 p-0 cursor-pointer outline-none font-bold hover:text-[#0065bd] transition-colors data-[state=open]:text-[#0065bd]">
                Branże
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {industries.map((i) => (
                  <DropdownMenuItem key={i} asChild>
                    <a href="#">{i}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#" className="font-bold hover:text-[#0065bd] transition-colors">
              Zaloguj
            </a>
          </nav>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#0f1c2e]">
        <div className="mx-auto max-w-[960px] px-4 py-12 md:py-20 text-center">
          <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-bold text-white tracking-tight">
            Zmiany w prawie dla Twojej branży
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[#94a3b8] text-base">
            Śledzimy przepisy od pierwszego sygnału w mediach po Dziennik
            Ustaw. Ty dostajesz to, co dotyczy Twojej firmy.
          </p>

          {/* Search bar */}
          <div className="relative mx-auto mt-8 max-w-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#94a3b8] pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Wpisz swoją branżę, np. żłobki, transport..."
                className="w-full h-14 bg-white pl-12 pr-14 text-[#1a1a1a] text-base placeholder:text-[#94a3b8] outline-none shadow-lg shadow-black/20 transition-shadow focus:shadow-xl focus:shadow-[#0065bd]/20 focus:ring-2 focus:ring-[#0065bd]/40"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#0065bd] flex items-center justify-center text-white hover:bg-[#00437e] transition-colors"
                aria-label="Szukaj"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dropdown results */}
            {query && filtered.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-xl border border-[#ebebeb] overflow-hidden z-10">
                {filtered.map((i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center gap-3 px-5 py-3 text-sm text-[#1a1a1a] hover:bg-[#f8f8f8] transition-colors border-b border-[#ebebeb] last:border-0"
                  >
                    <Search className="h-4 w-4 text-[#b3b3b3]" />
                    {i}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Industry chips */}
          <div className="mx-auto mt-6 max-w-2xl flex flex-wrap justify-center gap-2">
            {industries.map((i) => (
              <a
                key={i}
                href="#"
                className="border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 transition-all hover:bg-[#0065bd] hover:border-[#0065bd] hover:text-white"
              >
                {i}
              </a>
            ))}
            <span className="border border-white/10 px-4 py-1.5 text-sm text-white/40">
              +15 więcej
            </span>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#ebebeb] bg-white p-4 space-y-3">
          <p className="text-sm font-bold text-[#1a1a1a]">Branże</p>
          <div className="flex flex-wrap gap-2">
            {industries.map((i) => (
              <a
                key={i}
                href="#"
                className="border border-[#b3b3b3] bg-white px-3 py-1 text-xs text-[#1a1a1a] hover:bg-[#0065bd] hover:text-white hover:border-[#0065bd] transition-colors"
              >
                {i}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#ebebeb]">
            <a
              href="#"
              className="text-sm text-[#0065bd] font-bold hover:underline"
            >
              Zaloguj
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
