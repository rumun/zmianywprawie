"use client";

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

export function Newsletter() {
  return (
    <section id="trial" className="bg-[#0f1c2e] py-10 md:py-14">
      <div className="mx-auto max-w-[960px] px-4">
        <div className="grid md:grid-cols-[1fr_380px] gap-10 items-start">
          <div>
            <h2 className="text-xl font-bold md:text-2xl text-white">
              Nie czekaj na niespodziankę z Dziennika Ustaw
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Nowe przepisy wchodzą w życie co tydzień. Większość
              przedsiębiorców dowiaduje się o nich za późno — gdy kara już
              grozi albo termin minął. Zacznij od 3 dni za darmo i sprawdź,
              ile zmian dotyczy właśnie Twojej branży.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="text-[#fdd522] shrink-0 font-bold">&#10003;</span>
                Pełny dostęp na 3 dni — bez karty, bez zobowiązań
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="text-[#fdd522] shrink-0 font-bold">&#10003;</span>
                Raport tygodniowy dopasowany do Twojej branży
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="text-[#fdd522] shrink-0 font-bold">&#10003;</span>
                Panel z aktualnymi zmianami legislacyjnymi
              </li>
            </ul>
          </div>

          <div className="bg-white p-6">
            <p className="text-base font-bold text-[#1a1a1a]">
              Rozpocznij darmowy trial
            </p>
            <div className="mt-4 space-y-3">
              <div>
                <label htmlFor="cta-email" className="block text-sm font-bold mb-1">
                  Adres e-mail
                </label>
                <input
                  id="cta-email"
                  type="email"
                  placeholder="twoj@email.pl"
                  className="w-full border-2 border-[#1a1a1a] bg-white px-3 py-3 text-base outline-none focus:border-[#0065bd] focus:ring-3 focus:ring-[#fdd522]"
                />
              </div>
              <div>
                <label htmlFor="cta-industry" className="block text-sm font-bold mb-1">
                  Branża
                </label>
                <select
                  id="cta-industry"
                  className="w-full border-2 border-[#1a1a1a] bg-white px-3 py-3 text-base outline-none focus:border-[#0065bd] focus:ring-3 focus:ring-[#fdd522]"
                >
                  <option value="">Wybierz branżę...</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
              <button className="w-full bg-[#0065bd] px-6 py-3 text-base font-bold text-white hover:bg-[#00437e] transition-colors">
                Zacznij za darmo — 3 dni
              </button>
            </div>
            <p className="mt-3 text-xs text-[#5e5e5e]">
              Bez karty kredytowej. Rezygnacja w dowolnym momencie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
