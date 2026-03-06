export function SampleReport() {
  return (
    <section className="border-t border-[#ebebeb] bg-[#f8f8f8] py-10 md:py-14">
      <div className="mx-auto max-w-[960px] px-4">
        <div className="text-center">
          <h2 className="text-xl font-bold md:text-2xl">
            Przykładowy raport tygodniowy
          </h2>
          <p className="mt-2 text-sm text-[#5e5e5e]">
            Taki raport dostaniesz co poniedziałek rano — dopasowany do Twojej branży
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[700px] border border-[#b3b3b3] bg-white">
          {/* Header raportu */}
          <div className="border-b border-[#ebebeb] bg-[#0065bd] p-5">
            <p className="font-[family-name:var(--font-heebo)] text-base font-bold text-white tracking-tight">
              zmianywprawie<span className="text-white/60">.pl</span>
            </p>
            <p className="mt-1 text-sm text-white/80">
              Przegląd tygodnia: Żłobki i Przedszkola
            </p>
            <p className="text-xs text-white/60">24.02 – 28.02.2026</p>
          </div>

          {/* Podsumowanie */}
          <div className="p-5 border-b border-[#ebebeb]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#5e5e5e]">
              Podsumowanie tygodnia
            </p>
            <p className="mt-2 text-sm text-[#1a1a1a] leading-relaxed">
              W tym tygodniu: <strong>3 nowe zmiany</strong>, 2 zmieniły status, <strong>1 termin
              w najbliższych 30 dniach</strong>. Najważniejsza zmiana: nowe standardy
              sanitarne dla placówek opiekuńczych przeszły 3. czytanie w Sejmie.
            </p>
          </div>

          {/* Pilne */}
          <div className="p-5 border-b border-[#ebebeb]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#d32205]">
              Wymagają działania
            </p>

            <div className="mt-3 border-l-4 border-[#d32205] pl-4">
              <p className="text-sm font-bold text-[#1a1a1a]">
                Nowe standardy sanitarne dla placówek opiekuńczych
              </p>
              <p className="mt-1 text-xs text-[#5e5e5e]">
                Sejm — przyjęto w 3. czytaniu &middot; Wchodzi: 1 września 2026
              </p>
              <p className="mt-2 text-sm text-[#1a1a1a] leading-relaxed">
                Nowe rozporządzenie wprowadza obowiązek prowadzenia dziennej
                kontroli czystości z dokumentacją fotograficzną. Wymogi dotyczą
                kuchni, łazienek i sal zabaw. Placówki mają 6 miesięcy na
                dostosowanie.
              </p>
              <div className="mt-2 text-sm text-[#1a1a1a]">
                <p className="font-bold text-xs text-[#5e5e5e] uppercase tracking-wider">Co musisz zrobić:</p>
                <ul className="mt-1 space-y-0.5 text-sm">
                  <li className="flex gap-2"><span className="text-[#5e5e5e]">&#9744;</span> Przejrzyj nowe wymogi dla Twojego typu placówki</li>
                  <li className="flex gap-2"><span className="text-[#5e5e5e]">&#9744;</span> Przygotuj procedurę codziennej dokumentacji</li>
                  <li className="flex gap-2"><span className="text-[#5e5e5e]">&#9744;</span> Termin dostosowania: 1 września 2026</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Aktywne procesy */}
          <div className="p-5 border-b border-[#ebebeb]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#5e5e5e]">
              Aktywne procesy legislacyjne
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#1a1a1a] text-left">
                    <th className="pb-2 pr-4 text-xs font-bold">Projekt</th>
                    <th className="pb-2 pr-4 text-xs font-bold">Etap</th>
                    <th className="pb-2 text-xs font-bold">Zmiana</th>
                  </tr>
                </thead>
                <tbody className="text-[#1a1a1a]">
                  <tr className="border-b border-[#ebebeb]">
                    <td className="py-2 pr-4 text-xs">Standardy sanitarne</td>
                    <td className="py-2 pr-4 text-xs text-[#d32205] font-bold">3. czytanie</td>
                    <td className="py-2 text-xs">Przyjęto poprawki</td>
                  </tr>
                  <tr className="border-b border-[#ebebeb]">
                    <td className="py-2 pr-4 text-xs">Dotacje opiekuńcze</td>
                    <td className="py-2 pr-4 text-xs text-[#7a5a00] font-bold">Komisja</td>
                    <td className="py-2 text-xs">Nowe sprawozdanie</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-xs">Kwalifikacje nauczycieli</td>
                    <td className="py-2 pr-4 text-xs text-[#5e5e5e] font-bold">Konsultacje</td>
                    <td className="py-2 text-xs">Trwa zbieranie uwag</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Kalendarz */}
          <div className="p-5 border-b border-[#ebebeb]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#5e5e5e]">
              Zbliżające się terminy
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex gap-4 text-sm">
                <span className="shrink-0 font-bold text-[#d32205] text-xs w-20">15.03.2026</span>
                <span className="text-xs text-[#1a1a1a]">Termin zgłaszania uwag do projektu zmian w kwalifikacjach nauczycieli</span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="shrink-0 font-bold text-[#7a5a00] text-xs w-20">01.04.2026</span>
                <span className="text-xs text-[#1a1a1a]">Nowe wzory sprawozdań SIO — obowiązkowe dla wszystkich placówek</span>
              </div>
            </div>
          </div>

          {/* Sygnały */}
          <div className="p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#5e5e5e]">
              Sygnały medialne
            </p>
            <div className="mt-3 space-y-2">
              <div className="border-l-4 border-[#b3b3b3] pl-4">
                <p className="text-xs font-bold text-[#1a1a1a]">
                  Zapowiedź programu dopłat do żłobków prywatnych
                </p>
                <p className="text-xs text-[#5e5e5e]">
                  Minister Rodziny w wywiadzie dla PAP zapowiedziała prace nad
                  programem dopłat. Brak oficjalnego projektu.
                </p>
                <p className="text-xs text-[#0065bd] mt-0.5">
                  Źródła: PAP, Rzeczpospolita &middot; Wiarygodność: wysoka (2 źródła)
                </p>
              </div>
            </div>
          </div>

          {/* Blur + CTA */}
          <div className="relative border-t border-[#ebebeb]">
            <div className="p-5 space-y-3 blur-sm select-none" aria-hidden>
              <p className="text-xs font-bold uppercase tracking-wider text-[#5e5e5e]">
                Na horyzoncie
              </p>
              <div className="space-y-2">
                <div className="h-4 w-5/6 bg-[#ebebeb]" />
                <div className="h-3 w-4/6 bg-[#f8f8f8]" />
                <div className="h-4 w-3/4 bg-[#ebebeb]" />
                <div className="h-3 w-2/3 bg-[#f8f8f8]" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-white/80">
              <a
                href="#trial"
                className="inline-block bg-[#0065bd] px-6 py-3 text-sm font-bold text-white hover:bg-[#00437e] transition-colors"
              >
                Rozpocznij trial i zobacz pełny raport
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
