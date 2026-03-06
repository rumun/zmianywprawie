import { ArrowRight, Check } from "lucide-react";

export function Trial() {
  return (
    <section className="border-t border-[#ebebeb] bg-[#f8f8f8] py-10 md:py-14">
      <div className="mx-auto max-w-[960px] px-4">
        <h2 className="text-xl font-bold md:text-2xl">Wypróbuj za darmo</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-px bg-[#ebebeb] border border-[#ebebeb]">
          {/* Trial 3 dni */}
          <div className="bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0065bd]">
              Na start
            </p>
            <h3 className="mt-2 text-lg font-bold">3 dni pełnego dostępu</h3>
            <p className="mt-2 text-sm text-[#5e5e5e] leading-relaxed">
              Zarejestruj się i przez 3 dni korzystaj ze wszystkiego — raporty,
              panel zmian, archiwum. Bez podawania karty, bez zobowiązań.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-sm text-[#1a1a1a]">
                <Check className="h-4 w-4 text-[#1a7032] shrink-0 mt-0.5" />
                Pełny dostęp do panelu ze zmianami w Twojej branży
              </li>
              <li className="flex items-start gap-2 text-sm text-[#1a1a1a]">
                <Check className="h-4 w-4 text-[#1a7032] shrink-0 mt-0.5" />
                Raport tygodniowy na e-mail
              </li>
              <li className="flex items-start gap-2 text-sm text-[#1a1a1a]">
                <Check className="h-4 w-4 text-[#1a7032] shrink-0 mt-0.5" />
                Archiwum raportów z ostatniego miesiąca
              </li>
            </ul>
            <a
              href="#trial"
              className="mt-6 inline-flex items-center gap-2 bg-[#0065bd] px-6 py-3 text-sm font-bold text-white hover:bg-[#00437e] transition-colors"
            >
              Rozpocznij trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Jednorazowy raport */}
          <div className="bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#5e5e5e]">
              Nie chcesz się rejestrować?
            </p>
            <h3 className="mt-2 text-lg font-bold">Jednorazowy raport testowy</h3>
            <p className="mt-2 text-sm text-[#5e5e5e] leading-relaxed">
              Podaj e-mail i branżę — wyślemy Ci prawdziwy raport tygodniowy. Zero zobowiązań.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-sm text-[#1a1a1a]">
                <Check className="h-4 w-4 text-[#1a7032] shrink-0 mt-0.5" />
                Prawdziwy raport z bieżącego tygodnia
              </li>
              <li className="flex items-start gap-2 text-sm text-[#1a1a1a]">
                <Check className="h-4 w-4 text-[#1a7032] shrink-0 mt-0.5" />
                Dopasowany do Twojej branży
              </li>
              <li className="flex items-start gap-2 text-sm text-[#1a1a1a]">
                <Check className="h-4 w-4 text-[#1a7032] shrink-0 mt-0.5" />
                Bez rejestracji — tylko e-mail
              </li>
            </ul>
            <a
              href="#trial"
              className="mt-6 inline-flex items-center gap-2 border-2 border-[#0065bd] px-6 py-3 text-sm font-bold text-[#0065bd] hover:bg-[#0065bd] hover:text-white transition-colors"
            >
              Wyślij mi raport <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
