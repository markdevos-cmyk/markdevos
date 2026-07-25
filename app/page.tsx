'use client';

import { Briefcase, Zap, Image as ImageIcon, Share2, Link, ArrowRight } from 'lucide-react';

export default function Home() {
  const links = [
    {
      name: 'Tofadvies',
      url: 'https://www.tofadvies.nl',
      icon: Briefcase,
      description: 'Duidelijk krijgen wat er werkelijk speelt',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'AgileAccelerator',
      url: 'https://www.agileaccelerator.nl',
      icon: Zap,
      description: 'Agile coaching, training & workshops',
      color: 'from-amber-500 to-amber-600',
    },
    {
      name: 'Oldfox Gallery',
      url: 'https://www.oldfox.gallery',
      icon: ImageIcon,
      description: 'I find what others walk past',
      color: 'from-amber-700 to-amber-800',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/oldfox.gallery',
      icon: Share2,
      description: '@oldfox.gallery — recent finds',
      color: 'from-pink-600 to-purple-600',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mbdevos',
      icon: Link,
      description: 'Professional profile & insights',
      color: 'from-blue-700 to-blue-800',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
            Mark de Vos
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light">
            Consultant • Strategist • Curator
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-amber-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 bg-white dark:bg-slate-900/50 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-slate-900/50"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`w-8 h-8 transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br ${link.color} text-white p-1.5 rounded-lg`} />
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                    {link.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
            Zoekende naar advies, training, kunstwerk, of gewoon even kennismaken?
          </p>
          <a
            href="https://www.tofadvies.nl#61FF3520-B2B4-4CA5-BA74-8ACDC8A1A4CC"
            className="inline-block px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
          >
            Laten we kennismaken
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-xs text-slate-500 dark:text-slate-500">
          <p>© 2026 Mark de Vos • <a href="https://www.linkedin.com/in/mbdevos" className="hover:text-slate-700 dark:hover:text-slate-300">LinkedIn</a></p>
        </div>
      </div>
    </div>
  );
}
