import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="py-10 md:py-14 border-b border-[#ebebeb]">
      <div className="mx-auto max-w-[960px] px-4 text-center">
        <h2 className="text-xl font-bold md:text-2xl">
          Monitorujemy prawo, żebyś Ty nie musiał
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-[#1a1a1a] leading-relaxed">
          Codziennie przeglądamy źródła legislacyjne — od sygnałów w mediach,
          przez projekty rządowe i prace parlamentu, po decyzje kuratorów,
          sanepidów i samorządów — i wybieramy to, co dotyczy Twojej branży.
        </p>

        <div className="mx-auto mt-8 grid grid-cols-3 gap-px bg-[#ebebeb] border border-[#ebebeb] max-w-[640px]">
          <div className="bg-[#f8f8f8] py-5 px-4">
            <p className="text-2xl font-bold text-[#0065bd]">7+</p>
            <p className="text-sm text-[#5e5e5e]">źródeł legislacyjnych</p>
          </div>
          <div className="bg-[#f8f8f8] py-5 px-4">
            <p className="text-2xl font-bold text-[#0065bd]">24</p>
            <p className="text-sm text-[#5e5e5e]">branże</p>
          </div>
          <div className="bg-[#f8f8f8] py-5 px-4">
            <p className="text-2xl font-bold text-[#0065bd]">127</p>
            <p className="text-sm text-[#5e5e5e]">śledzonych zmian</p>
          </div>
        </div>

        <a
          href="#jak-to-dziala"
          className="mt-6 inline-flex items-center gap-2 text-sm text-[#0065bd] font-bold hover:underline"
        >
          Dowiedz się jak to działa
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
