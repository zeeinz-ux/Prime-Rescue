export default function AmbulanceIllustration() {
  return (
    <div className="overflow-hidden rounded-lg bg-background-soft">
      <svg
        viewBox="0 0 640 420"
        role="img"
        aria-label="Ilustrasi ambulans Prima Rescue melaju di jalan Gunung Sindur"
        className="h-auto w-full"
      >
        <defs>
          <clipPath id="body-clip">
            <rect x="50" y="230" width="330" height="105" rx="16" />
          </clipPath>
        </defs>

        <rect x="0" y="0" width="640" height="340" fill="#f1f5f9" />
        <circle cx="500" cy="150" r="95" fill="#dc2626" opacity="0.06" />
        <circle cx="505" cy="155" r="60" fill="#dc2626" opacity="0.06" />
        <path d="M482 55h46v76h-46z" fill="#dc2626" opacity="0.12" />
        <path d="M499 67h12v52h-12z" fill="#dc2626" opacity="0.12" />
        <path d="M489 77h32v12h-32z" fill="#dc2626" opacity="0.12" />
        <circle cx="120" cy="120" r="70" fill="#10b981" opacity="0.07" />
        <circle cx="120" cy="120" r="42" fill="#10b981" opacity="0.07" />

        <rect x="0" y="340" width="640" height="80" fill="#cbd5e1" />
        <line
          x1="0"
          y1="380"
          x2="640"
          y2="380"
          stroke="#f8fafc"
          strokeWidth="5"
          strokeDasharray="26 22"
        />

        <rect x="0" y="300" width="120" height="40" fill="#e2e8f0" />
        <rect x="140" y="280" width="90" height="60" fill="#e2e8f0" />
        <rect x="250" y="308" width="110" height="32" fill="#e2e8f0" />

        <rect x="50" y="230" width="330" height="105" rx="16" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
        <rect x="100" y="214" width="18" height="14" rx="3" fill="#dc2626" />
        <rect x="140" y="214" width="18" height="14" rx="3" fill="#dc2626" />

        <g clipPath="url(#body-clip)">
          <rect x="50" y="272" width="330" height="24" fill="#dc2626" />
          <rect x="167" y="250" width="12" height="60" rx="1" fill="#ffffff" />
          <rect x="157" y="260" width="32" height="14" rx="1" fill="#ffffff" />
        </g>

        <rect x="70" y="244" width="150" height="40" rx="6" fill="#bae6fd" stroke="#1e293b" strokeWidth="3" />
        <line x1="235" y1="156" x2="235" y2="224" stroke="#e2e8f0" strokeWidth="3" />
        <path d="M380 250h8a10 10 0 0 1 10 10v18h-18z" fill="#fde68a" stroke="#1e293b" strokeWidth="3" />
        <line x1="258" y1="230" x2="258" y2="335" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />

        <circle cx="140" cy="342" r="26" fill="#1e293b" />
        <circle cx="140" cy="342" r="10" fill="#64748b" />
        <circle cx="300" cy="342" r="26" fill="#1e293b" />
        <circle cx="300" cy="342" r="10" fill="#64748b" />
      </svg>
    </div>
  );
}