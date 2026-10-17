import React from 'react';
import { PAST_SEMINARS } from '../data/groupData';
import { PastSeminarsTable } from '../components/PastSeminarsTable';

export const PastSeminarsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
          Past Seminars
        </h1>
        <p className="text-sm text-slate-600 mt-1 font-sans">
          Historical archive of presentations, abstracts, and speaker references in the MathsApp working group.
        </p>
      </div>

      {/* Seminars Table */}
      <PastSeminarsTable seminars={PAST_SEMINARS} />
    </div>
  );
};
