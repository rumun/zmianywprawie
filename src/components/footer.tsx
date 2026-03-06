const industries = [
  "Zlobki",
  "Gastro",
  "Transport",
  "IT",
  "Beauty",
  "Medycyna",
  "Budownictwo",
  "E-commerce",
  "Nieruchomosci",
];

export function Footer() {
  return (
    <footer className="border-t border-[#ebebeb] bg-[#f8f8f8]">
      <div className="mx-auto max-w-[960px] px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <a href="/" className="font-[family-name:var(--font-heebo)] text-lg font-bold tracking-tight leading-none">
            <span style={{ color: "#c6c6c6" }}>zmiany</span>
            <span style={{ color: "#888888" }}>w</span>
            <span style={{ color: "#000000" }}>prawie</span>
          </a>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#5e5e5e]">
            {industries.map((ind) => (
              <a
                key={ind}
                href="#"
                className="hover:text-[#1a1a1a] underline transition-colors"
              >
                {ind}
              </a>
            ))}
          </div>
        </div>

        <div className="my-6 border-t border-[#ebebeb]" />

        <div className="flex flex-col gap-2 text-sm text-[#5e5e5e] md:flex-row md:justify-between">
          <p>&#169; 2026 zmianywprawie</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#1a1a1a] underline">
              O nas
            </a>
            <a href="#" className="hover:text-[#1a1a1a] underline">
              Kontakt
            </a>
            <a href="#" className="hover:text-[#1a1a1a] underline">
              Regulamin
            </a>
            <a href="#" className="hover:text-[#1a1a1a] underline">
              Polityka prywatnosci
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
