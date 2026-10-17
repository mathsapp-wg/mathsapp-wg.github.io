import React from 'react';
import { ReferencesSection } from '../components/ReferencesSection';

export const ReferencesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
          References
        </h1>
        <p className="text-sm text-slate-600 mt-1 font-sans">
          List of relevant resources, seminal articles, and monographs in applied geometry and statistics.
        </p>
      </div>

      {/* Main References Content */}
      <ReferencesSection />
    </div>
  );
};
