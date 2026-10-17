import React from 'react';
import { Link } from 'react-router-dom';
import { MathView } from '../components/MathView';
import {
  WORKING_GROUP_INFO,
  UPCOMING_SEMINAR,
  RESEARCH_THEMES,
  PAST_SEMINARS,
  ORGANIZERS,
} from '../data/groupData';
import { Calendar, ArrowRight, Layers, BookOpen, ExternalLink, Mail } from 'lucide-react';

export const HomePage: React.FC = () => {
  const latestPastSeminar = PAST_SEMINARS[0];

  return (
    <div className="space-y-12">
      {/* Hero / About Header */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
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

        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-600 font-sans">
          <span>{WORKING_GROUP_INFO.meetingCadence}</span>
          <span className="text-slate-300">·</span>
          <span>{WORKING_GROUP_INFO.location}</span>
        </div>
      </section>

      {/* Featured Next Event Banner */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Next Coming Event
          </h2>
          <Link
            to="/events"
            className="text-xs font-medium text-blue-900 hover:underline flex items-center gap-1"
          >
            <span>View all events</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-colors">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500 mb-2">
            <span className="font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
              {UPCOMING_SEMINAR.dateFormatted}
            </span>
            <span>{UPCOMING_SEMINAR.time}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-2">
            <MathView content={UPCOMING_SEMINAR.title} />
          </h3>

          <div className="text-sm text-slate-600 mb-4 font-sans">
            Speaker: <span className="font-medium text-slate-900">{UPCOMING_SEMINAR.speakerName}</span> ({UPCOMING_SEMINAR.speakerAffiliation})
          </div>

          <p className="text-sm text-slate-700 line-clamp-3 leading-relaxed mb-4 font-sans bg-slate-50 p-3 rounded-lg border border-slate-100">
            <MathView content={UPCOMING_SEMINAR.abstract} />
          </p>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-500">
              {UPCOMING_SEMINAR.location}
            </span>
            <Link
              to="/events"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Full Details & Calendar Sync</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Themes Summary Strip */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Research Themes
          </h2>
          <Link
            to="/research"
            className="text-xs font-medium text-blue-900 hover:underline flex items-center gap-1"
          >
            <span>Explore research details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {RESEARCH_THEMES.map((theme) => (
            <Link
              key={theme.id}
              to="/research"
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="text-xs font-mono text-slate-400 mb-1">
                  Theme 0{theme.themeNumber}
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-blue-900 transition-colors mb-2">
                  {theme.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {theme.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-blue-900">
                <span>View Formulations & Topics</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Past Seminars Teaser */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Recent Seminars
          </h2>
          <Link
            to="/past-seminars"
            className="text-xs font-medium text-blue-900 hover:underline flex items-center gap-1"
          >
            <span>Browse complete archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
            <span className="text-xs font-mono text-slate-500 tabular-nums">
              {latestPastSeminar.dateFormatted}
            </span>
            <span className="text-xs text-slate-500">
              {latestPastSeminar.speakerAffiliation}
            </span>
          </div>

          <h3 className="text-lg font-serif font-bold text-slate-900 mb-1">
            <MathView content={latestPastSeminar.title} />
          </h3>

          <div className="text-xs text-slate-600 font-sans mb-3">
            Speaker:{' '}
            <a
              href={latestPastSeminar.speakerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:underline inline-flex items-center gap-1 font-medium"
            >
              <span>{latestPastSeminar.speakerName}</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 font-sans leading-relaxed line-clamp-2">
            <MathView content={latestPastSeminar.abstract} />
          </div>
        </div>
      </section>

      {/* Organizers Teaser */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Working Group Organization
          </div>
          <h3 className="font-serif font-bold text-lg text-slate-900">
            {ORGANIZERS[0].name}
          </h3>
          <p className="text-xs text-slate-600 font-sans">
            {ORGANIZERS[0].department ? `${ORGANIZERS[0].department} · ` : ''}{ORGANIZERS[0].affiliation}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${ORGANIZERS[0].email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Organizer</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
          >
            <span>Contact & Venue Details</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
