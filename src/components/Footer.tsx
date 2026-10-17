import React from 'react';
import { WORKING_GROUP_INFO } from '../data/groupData';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-10 text-xs text-slate-500 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-serif font-bold text-slate-800 text-sm">
            {WORKING_GROUP_INFO.name}
          </span>
          <span className="mx-2 text-slate-300">·</span>
          <span>{WORKING_GROUP_INFO.subtitle}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <span>Last updated: {WORKING_GROUP_INFO.lastUpdated}</span>
          <span className="text-slate-300">·</span>
          <a href="#about" className="hover:text-slate-800 transition-colors">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};
