import { ClipboardList, BarChart3, LayoutDashboard, Archive } from "lucide-react";

export function WhatYouGet() {
  return (
    <section className="py-10 md:py-14 border-t border-[#ebebeb]">
      <div className="mx-auto max-w-[960px] px-4">
        <h2 className="text-xl font-bold md:text-2xl">Co dostajesz?</h2>

        {/* Raport tygodniowy */}
        <div className="mt-8 border border-[#ebebeb] bg-white">
          <div className="border-b border-[#ebebeb] bg-[#f8f8f8] p-4 flex items-center gap-3">
            <ClipboardList className="h-5 w-5 text-[#0065bd]" />
            <h3 className="text-base font-bold">Raport tygodniowy</h3>
            <span className="text-sm text-[#5e5e5e] ml-auto">5 min czytania</span>
          </div>
          <div className="p-6">
            <p className="text-sm font-bold text-[#1a1a1a]">
              Kompletny przegląd tego, co zmieniło się w prawie w Twojej branży.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex gap-2 text-sm text-[#5e5e5e]">
                <span className="text-[#0065bd] shrink-0">&mdash;</span>
                Podsumowanie najważniejszych zmian tygodnia
              </div>
              <div className="flex gap-2 text-sm text-[#5e5e5e]">
                <span className="text-[#0065bd] shrink-0">&mdash;</span>
                Tabela aktywnych procesów legislacyjnych
              </div>
              <div className="flex gap-2 text-sm text-[#5e5e5e]">
                <span className="text-[#0065bd] shrink-0">&mdash;</span>
                Kalendarz zbliżających się terminów
              </div>
              <div className="flex gap-2 text-sm text-[#5e5e5e]">
                <span className="text-[#0065bd] shrink-0">&mdash;</span>
                Nowe sygnały medialne z oceną wiarygodności
              </div>
              <div className="flex gap-2 text-sm text-[#5e5e5e]">
                <span className="text-[#0065bd] shrink-0">&mdash;</span>
                Ocena wpływu na Twoją branżę
              </div>
              <div className="flex gap-2 text-sm text-[#5e5e5e]">
                <span className="text-[#0065bd] shrink-0">&mdash;</span>
                Konkretne kroki do podjęcia
              </div>
            </div>
            <p className="mt-4 text-sm text-[#5e5e5e]">
              Wysyłka: każdy poniedziałek rano.{" "}
              <a href="#trial" className="text-[#0065bd] font-bold hover:underline">
                Zarejestruj się, żeby otrzymywać na bieżąco
              </a>
            </p>
          </div>
        </div>

        {/* Raport miesięczny */}
        <div className="mt-4 border border-[#ebebeb] bg-white">
          <div className="border-b border-[#ebebeb] bg-[#f8f8f8] p-4 flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-[#0065bd]" />
            <h3 className="text-base font-bold">Raport miesięczny</h3>
            <span className="text-sm text-[#5e5e5e] ml-auto">15 min czytania</span>
          </div>
          <div className="p-6">
            <p className="text-sm font-bold text-[#1a1a1a]">
              Pogłębiona analiza + praktyczny poradnik co zrobić.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex gap-2 text-sm text-[#5e5e5e]">
                <span className="text-[#0065bd] shrink-0">&mdash;</span>
                Szczegółowa analiza każdej istotnej zmiany
              </div>
              <div className="flex gap-2 text-sm text-[#5e5e5e]">
                <span className="text-[#0065bd] shrink-0">&mdash;</span>
                Praktyczny poradnik: co musisz zrobić krok po kroku
              </div>
              <div className="flex gap-2 text-sm text-[#5e5e5e]">
                <span className="text-[#0065bd] shrink-0">&mdash;</span>
                Pełna mapa śledzonych procesów
              </div>
              <div className="flex gap-2 text-sm text-[#5e5e5e]">
                <span className="text-[#0065bd] shrink-0">&mdash;</span>
                Perspektywa kwartalna i trendy legislacyjne
              </div>
            </div>
          </div>
        </div>

        {/* Dodatkowe korzyści */}
        <h3 className="mt-10 text-base font-bold">Poza raportami dostajesz także:</h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-px bg-[#ebebeb] border border-[#ebebeb]">
          <div className="bg-white p-5 flex gap-3">
            <LayoutDashboard className="h-5 w-5 text-[#0065bd] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-[#1a1a1a]">Panel ze wszystkimi zmianami</p>
              <p className="mt-1 text-sm text-[#5e5e5e]">
                Dostęp do pełnej listy zmian legislacyjnych w Twojej branży
                — filtruj po statusie, dacie, typie.
              </p>
            </div>
          </div>
          <div className="bg-white p-5 flex gap-3">
            <Archive className="h-5 w-5 text-[#0065bd] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-[#1a1a1a]">Archiwum raportów</p>
              <p className="mt-1 text-sm text-[#5e5e5e]">
                Wszystkie poprzednie raporty tygodniowe i miesięczne dostępne
                do miesiąca wstecz w Twoim profilu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
