'use client';

import { ExternalLink } from 'lucide-react';

export default function Home() {
  const links = [
    {
      name: 'TOF Advies',
      subtitle: 'Organisatieadvies',
      url: 'https://www.tofadvies.nl',
    },
    {
      name: 'Agile Accelerator',
      subtitle: 'Training & coaching',
      url: 'https://www.agileaccelerator.nl',
    },
    {
      name: 'Old Fox Gallery',
      subtitle: 'In- en verkoop van kunst',
      url: 'https://www.oldfox.gallery',
    },
    {
      name: '@oldfox.gallery',
      subtitle: 'De laatste vondsten',
      url: 'https://instagram.com/oldfox.gallery',
    },
    {
      name: 'LinkedIn',
      subtitle: 'Professioneel profiel',
      url: 'https://linkedin.com/in/mbdevos',
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
              className="flex items-center justify-between p-4 group border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors duration-200"
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {link.subtitle}
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors ml-4 flex-shrink-0" />
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
