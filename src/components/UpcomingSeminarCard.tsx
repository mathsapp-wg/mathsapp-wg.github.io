import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, Download, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Seminar } from '../types';
import { MathView } from './MathView';

interface UpcomingSeminarCardProps {
  seminar: Seminar;
}

export const UpcomingSeminarCard: React.FC<UpcomingSeminarCardProps> = ({ seminar }) => {
  const [isAbstractExpanded, setIsAbstractExpanded] = useState<boolean>(true);

  // Generate .ics calendar download
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//MathsApp//Working Group Seminar//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${seminar.id}@mathsapp.univ-amu.fr`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${seminar.calendarData?.startDateTime || '20261017T120000Z'}`,
      `DTEND:${seminar.calendarData?.endDateTime || '20261017T133000Z'}`,
      `SUMMARY:MathsApp Seminar: ${seminar.speakerName} - ${seminar.title.replace(/[\$]/g, '')}`,
      `DESCRIPTION:${seminar.title}\\n\\nSpeaker: ${seminar.speakerName} (${seminar.speakerAffiliation})\\n\\n${seminar.abstract.replace(/\n/g, ' ')}`,
      `LOCATION:${seminar.location || 'Aix-Marseille Université & Zoom'}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `mathsapp-seminar-${seminar.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Google Calendar direct URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `MathsApp Seminar: ${seminar.speakerName} — ${seminar.title}`
  )}&dates=${seminar.calendarData?.startDateTime || '20261017T120000Z'}/${
    seminar.calendarData?.endDateTime || '20261017T133000Z'
  }&details=${encodeURIComponent(
    `Speaker: ${seminar.speakerName} (${seminar.speakerAffiliation})\n\nTitle: ${seminar.title}\n\nAbstract: ${seminar.abstract}`
  )}&location=${encodeURIComponent(seminar.location || 'Aix-Marseille Université & Zoom')}`;

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all">
      {/* Top Banner Stripe */}
      <div className="bg-slate-900 text-white px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="font-semibold text-amber-300">NEXT SEMINAR</span>
          <span className="text-slate-400">·</span>
          <span>{seminar.dateFormatted}</span>
          <span className="text-slate-400">·</span>
          <span>{seminar.time}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors hover:underline"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Google Calendar</span>
          </a>
          <span className="text-slate-600">·</span>
          <button
            type="button"
            onClick={handleDownloadIcs}
            className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors hover:underline"
          >
            <Download className="w-3.5 h-3.5" />
            <span>.ics export</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-tight mb-2">
            <MathView content={seminar.title} />
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <a
              href={seminar.speakerUrl}
              className="font-medium text-blue-900 hover:underline flex items-center gap-1"
            >
              <span>{seminar.speakerName}</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>{seminar.speakerAffiliation}</span>
          </div>
        </div>

        {/* Seminar Logistics Bar */}
        <div className="py-3 border-y border-slate-100 text-xs text-slate-600">
          <div className="flex items-start gap-2">
            <Video className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>
              Hybrid access via Zoom{' '}
              <a
                href={seminar.hybridLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline font-medium ml-1"
              >
                (Join Session)
              </a>
            </span>
          </div>
        </div>

        {/* Abstract */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-mono text-slate-400 font-medium">
              Abstract
            </span>
            <button
              type="button"
              onClick={() => setIsAbstractExpanded(!isAbstractExpanded)}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
            >
              <span>{isAbstractExpanded ? 'Collapse' : 'Expand'}</span>
              {isAbstractExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {isAbstractExpanded && (
            <div className="text-slate-700 leading-relaxed text-sm font-sans bg-slate-50 p-4 rounded-lg border border-slate-100">
              <MathView content={seminar.abstract} />
            </div>
          )}
        </div>

        {/* Tags (Zero-Pill: Unboxed text with subtle dot separators) */}
        {seminar.tags && seminar.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
            <span className="font-mono text-slate-400 text-[11px] uppercase">Keywords:</span>
            {seminar.tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>
                {idx < seminar.tags!.length - 1 && <span aria-hidden="true" className="text-slate-300">·</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
