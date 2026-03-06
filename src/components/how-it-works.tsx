export function HowItWorks() {
  return (
    <section id="jak-to-dziala" className="bg-[#0065bd] py-10 md:py-14">
      <div className="mx-auto max-w-[960px] px-4">
        <h2 className="text-xl font-bold md:text-2xl text-white">Jak to działa?</h2>
        <p className="mt-2 text-sm text-white/80 max-w-[640px]">
          Każda zmiana w prawie przechodzi kilka etapów. Monitorujemy je
          wszystkie — od plotki w mediach po publikację w Dzienniku Ustaw.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/20">
          <div className="bg-white p-5">
            <span className="inline-flex h-8 w-8 items-center justify-center bg-[#0065bd] text-white text-sm font-bold">
              1
            </span>
            <h3 className="mt-3 text-sm font-bold text-[#1a1a1a]">Sygnał medialny</h3>
            <p className="mt-1.5 text-sm text-[#5e5e5e] leading-relaxed">
              Wyłapujemy zapowiedzi zmian w prasie, komunikatach ministerstw
              i agencjach prasowych — nawet kilka miesięcy przed oficjalnym
              projektem.
            </p>
          </div>
          <div className="bg-white p-5">
            <span className="inline-flex h-8 w-8 items-center justify-center bg-[#0065bd] text-white text-sm font-bold">
              2
            </span>
            <h3 className="mt-3 text-sm font-bold text-[#1a1a1a]">Projekt rządowy</h3>
            <p className="mt-1.5 text-sm text-[#5e5e5e] leading-relaxed">
              Pobieramy projekty z Wykazu Prac RM i Rządowego Centrum
              Legislacji. Klasyfikujemy do branż i tłumaczymy bez żargonu
              prawniczego.
            </p>
          </div>
          <div className="bg-white p-5">
            <span className="inline-flex h-8 w-8 items-center justify-center bg-[#0065bd] text-white text-sm font-bold">
              3
            </span>
            <h3 className="mt-3 text-sm font-bold text-[#1a1a1a]">Parlament i samorząd</h3>
            <p className="mt-1.5 text-sm text-[#5e5e5e] leading-relaxed">
              Śledzimy prace Sejmu, Senatu, ale też decyzje kuratorów
              oświaty, sanepidów i samorządów — przepisy, które wpływają
              na Twoją firmę lokalnie.
            </p>
          </div>
          <div className="bg-white p-5">
            <span className="inline-flex h-8 w-8 items-center justify-center bg-[#0065bd] text-white text-sm font-bold">
              4
            </span>
            <h3 className="mt-3 text-sm font-bold text-[#1a1a1a]">Publikacja i terminy</h3>
            <p className="mt-1.5 text-sm text-[#5e5e5e] leading-relaxed">
              Gdy przepis wchodzi w życie, przygotowujemy listę konkretnych
              rzeczy do zrobienia — z terminami, formularzami i krokami
              dostosowania.
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs text-white/60">
          Źródła: API Sejmu RP, legislacja.rcl.gov.pl, ISAP, BIP KPRM,
          dane.gov.pl, EUR-Lex, Gazeta Prawna, PAP, gov.pl, kuratoria
          oświaty, sanepidy, BIP samorządów
        </p>
      </div>
    </section>
  );
}
