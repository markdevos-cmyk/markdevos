'use client';

export default function Home() {
  const links = [
    {
      name: 'TOF Advies',
      subtitle: 'Organisatieadvies',
      url: 'https://www.tofadvies.nl',
      logo: '/logos/tofadvies.svg',
    },
    {
      name: 'Agile Accelerator',
      subtitle: 'Training & coaching',
      url: 'https://agileaccelerator.nl',
      logo: '/logos/agileaccelerator.svg',
    },
    {
      name: 'Old Fox Gallery',
      subtitle: 'In- en verkoop van kunst',
      url: 'https://www.oldfox.gallery',
      logo: '/logos/oldfox.svg',
    },
    {
      name: '@oldfox.gallery',
      subtitle: 'De laatste vondsten',
      url: 'https://instagram.com/oldfox.gallery',
      logo: '/logos/instagram.svg',
    },
    {
      name: 'LinkedIn',
      subtitle: 'Professioneel profiel',
      url: 'https://linkedin.com/in/mbdevos',
      logo: '/logos/linkedin.svg',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-slate-900 dark:text-white mb-4 tracking-tight">
            Mark de Vos
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 font-light">
            Consultant – Strategist – Art Lover
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3 mb-16">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 group border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors duration-200"
            >
              <img
                src={link.logo}
                alt={link.name}
                className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors flex-shrink-0"
                style={{
                  filter: 'currentColor',
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {link.subtitle}
                </p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-slate-500 dark:text-slate-500">
          <p>© 2026 Mark de Vos</p>
        </div>
      </div>
    </div>
  );
}
