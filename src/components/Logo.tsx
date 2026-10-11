// Logo de Esquina 32: placa redonda de esquina con taza y hoja de palmera como vapor.
export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Logo Esquina 32">
      <defs>
        <path id="arc-top" d="M 22 60 A 38 38 0 0 1 98 60" />
      </defs>
      <circle cx="60" cy="60" r="57" fill="var(--color-primary)" />
      <circle cx="60" cy="60" r="51" fill="var(--color-card)" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" />
      <text fontFamily="Fraunces, serif" fontSize="14" fontWeight="700" fill="var(--color-primary)" letterSpacing="2">
        <textPath href="#arc-top" startOffset="50%" textAnchor="middle">ESQUINA</textPath>
      </text>
      {/* Hoja de palmera (vapor) */}
      <path d="M60 66 C 59 56, 61 48, 64 40" stroke="var(--color-secondary)" strokeWidth="2" fill="none" />
      <path d="M64 40 C 56 38, 50 42, 47 47 C 54 44, 59 43, 64 40Z" fill="var(--color-secondary)" />
      <path d="M64 40 C 72 37, 78 40, 81 45 C 74 43, 69 42, 64 40Z" fill="var(--color-secondary)" />
      <path d="M64 40 C 62 33, 65 28, 70 26 C 68 31, 66 35, 64 40Z" fill="var(--color-secondary)" />
      {/* Taza */}
      <path d="M44 66 H76 V72 C76 80 70 85 60 85 C50 85 44 80 44 72Z" fill="var(--color-primary)" />
      <path d="M76 69 C 83 69, 83 78, 75 78" stroke="var(--color-primary)" strokeWidth="3" fill="none" />
      <rect x="40" y="86" width="40" height="3" rx="1.5" fill="var(--color-primary)" />
      <text x="60" y="104" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="14" fontWeight="700" fill="var(--color-secondary)">32</text>
    </svg>
  );
}
