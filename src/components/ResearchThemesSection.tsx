import React, { useState } from 'react';
import { RESEARCH_THEMES } from '../data/groupData';
import { MathView } from './MathView';
import { ArrowUpRight } from 'lucide-react';

export const ResearchThemesSection: React.FC = () => {
  const [activeThemeId, setActiveThemeId] = useState<string>('theme-1');

  const activeTheme = RESEARCH_THEMES.find((t) => t.id === activeThemeId) || RESEARCH_THEMES[0];

  return (
    <div className="space-y-8">
      {/* Theme Selection Tabs (Interactive Filter / Navigation Bar) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {RESEARCH_THEMES.map((theme) => {
          const isSelected = activeThemeId === theme.id;
          return (
            <button
              key={theme.id}
              type="button"
              onClick={() => setActiveThemeId(theme.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-white border-blue-900 ring-1 ring-blue-900 shadow-sm'
                  : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
              }`}
            >
              <div className="text-xs font-mono text-slate-400 mb-1">
                Theme {theme.themeNumber < 10 ? `0${theme.themeNumber}` : theme.themeNumber}
              </div>
              <div className="font-serif font-bold text-base text-slate-900 mb-1">
                {theme.title}
              </div>
              <div className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {theme.tagline}
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Card for Active Theme */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-xs">
        <div className="border-b border-slate-100 pb-4">
          <div className="text-xs font-mono text-blue-900 uppercase tracking-wider mb-1">
            Research Focus · Theme {activeTheme.themeNumber}
          </div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
            {activeTheme.title}
          </h3>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            <MathView content={activeTheme.description} />
          </p>
        </div>

        {/* Mathematical Formulations Section */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
            Mathematical Formulations & Invariants
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {activeTheme.formulas.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-lg p-4 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-medium text-slate-700 font-sans mb-1.5">
                    {item.label}
                  </div>
                  <div className="my-2 py-1 text-center bg-white rounded border border-slate-200/60 overflow-x-auto">
                    <MathView content={`$$${item.tex}$$`} />
                  </div>
                </div>
                <div className="text-xs text-slate-500 mt-2 border-t border-slate-200/60 pt-2 leading-relaxed">
                  <MathView content={item.note} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topics & Open Questions Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Key Topics */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
              Core Methodologies
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              {activeTheme.keyTopics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-900 font-mono text-xs mt-0.5">·</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Open Questions */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
              Open Research Questions
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              {activeTheme.keyQuestions.map((q, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    <MathView content={q} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
