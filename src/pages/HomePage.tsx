import React from 'react';
import { MathView } from '../components/MathView';
import { WORKING_GROUP_INFO, UPCOMING_SEMINAR } from '../data/groupData';
import { UpcomingSeminarCard } from '../components/UpcomingSeminarCard';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* About Section */}
      <section id="about" className="bg-white rounded-xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            {WORKING_GROUP_INFO.name}
          </h1>
          <p className="text-xl sm:text-2xl font-serif text-slate-700 italic">
            {WORKING_GROUP_INFO.subtitle}
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6 text-base sm:text-lg text-slate-800 leading-relaxed font-sans max-w-4xl">
          <MathView content={WORKING_GROUP_INFO.description} />
        </div>
      </section>

      {/* Coming Events Section directly under About */}
      <section id="events" className="space-y-4">
        <div className="border-b border-slate-200 pb-2">
          <h2 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
            Coming Events
          </h2>
        </div>

        <UpcomingSeminarCard seminar={UPCOMING_SEMINAR} />
      </section>
    </div>
  );
};
