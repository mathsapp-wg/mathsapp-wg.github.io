import React from 'react';
import { ResearchThemesSection } from '../components/ResearchThemesSection';

export const ResearchPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
          Research Themes
        </h1>
        <p className="text-sm text-slate-600 mt-1 font-sans">
          The three foundational research axes explored within the MathsApp working group.
        </p>
      </div>

      {/* Main Research Content */}
      <ResearchThemesSection />
    </div>
  );
};
