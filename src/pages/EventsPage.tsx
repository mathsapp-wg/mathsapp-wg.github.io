import React from 'react';
import { UPCOMING_SEMINAR } from '../data/groupData';
import { UpcomingSeminarCard } from '../components/UpcomingSeminarCard';
import { CalendarPlus, MapPin, Video, Clock } from 'lucide-react';

interface EventsPageProps {
  onOpenProposeModal: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onOpenProposeModal }) => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
          Coming Events
        </h1>
        <p className="text-sm text-slate-600 mt-1 font-sans">
          Scheduled seminars, presentations, and working sessions of MathsApp.
        </p>
      </div>

      {/* Featured Upcoming Seminar */}
      <UpcomingSeminarCard seminar={UPCOMING_SEMINAR} />

      {/* Attendance & Propose Talk Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Seminar Logistics Info */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
          <h3 className="font-serif font-bold text-base text-slate-900">
            Seminar Schedule & Access
          </h3>
          <div className="space-y-2 text-xs text-slate-600 font-sans">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-900 shrink-0" />
              <span>Bi-weekly on Saturdays, 14:00 – 15:30 CET</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-900 shrink-0" />
              <span>Salle de Séminaire 3, Campus de Luminy (AMU), Marseille</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-blue-900 shrink-0" />
              <span>Hybrid broadcast on Zoom (interactive Q&A enabled)</span>
            </div>
          </div>
        </div>

        {/* Propose a Talk Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3 flex flex-col justify-between">
          <div>
            <h3 className="font-serif font-bold text-base text-slate-900">
              Interested in Presenting?
            </h3>
            <p className="text-xs text-slate-600 font-sans leading-relaxed mt-1">
              Researchers, PhD students, and visiting scholars working on applied geometry, statistics, or machine learning are invited to present.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenProposeModal}
            className="self-start inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
          >
            <CalendarPlus className="w-3.5 h-3.5" />
            <span>Submit a Seminar Proposal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
