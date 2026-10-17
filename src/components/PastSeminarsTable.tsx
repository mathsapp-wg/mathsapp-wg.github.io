import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, ExternalLink, FileText, Download } from 'lucide-react';
import { Seminar } from '../types';
import { MathView } from './MathView';

interface PastSeminarsTableProps {
  seminars: Seminar[];
}

export const PastSeminarsTable: React.FC<PastSeminarsTableProps> = ({ seminars }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('sem-2026-10-10'); // Default expand Kouider Djerfi's talk from draft

  const filteredSeminars = useMemo(() => {
    return seminars.filter((sem) => {
      const matchesSearch =
        sem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sem.speakerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sem.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sem.tags?.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTheme = selectedTheme === 'all' || sem.themeId === selectedTheme;

      return matchesSearch && matchesTheme;
    });
  }, [seminars, searchTerm, selectedTheme]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {/* Search & Theme Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search seminars, speakers, topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-colors"
          />
        </div>

        {/* Theme Filter Segmented Control (Interactive Button Control) */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto overflow-x-auto max-w-full">
          <button
            type="button"
            onClick={() => setSelectedTheme('all')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedTheme === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Seminars ({seminars.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedTheme('theme-1')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedTheme === 'theme-1'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Geometry & Statistics
          </button>
          <button
            type="button"
            onClick={() => setSelectedTheme('theme-2')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedTheme === 'theme-2'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Geometric Design
          </button>
          <button
            type="button"
            onClick={() => setSelectedTheme('theme-3')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedTheme === 'theme-3'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ML ("AI")
          </button>
        </div>
      </div>

      {/* Academic Table Format */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-500">
                <th className="py-3 px-4 font-semibold w-32 tabular-nums">Date</th>
                <th className="py-3 px-4 font-semibold w-52">Speaker</th>
                <th className="py-3 px-4 font-semibold">Title & Details</th>
                <th className="py-3 px-4 font-semibold w-24 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredSeminars.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-slate-500 text-sm">
                    No past seminars found matching your filter criteria.
                  </td>
                </tr>
              ) : (
                filteredSeminars.map((sem) => {
                  const isExpanded = expandedId === sem.id;

                  return (
                    <React.Fragment key={sem.id}>
                      <tr
                        onClick={() => toggleExpand(sem.id)}
                        className={`cursor-pointer transition-colors ${
                          isExpanded ? 'bg-slate-50/80' : 'hover:bg-slate-50/40'
                        }`}
                      >
                        <td className="py-3.5 px-4 font-mono text-xs text-slate-600 align-top tabular-nums whitespace-nowrap">
                          {sem.dateFormatted}
                        </td>
                        <td className="py-3.5 px-4 font-medium text-slate-900 align-top">
                          {sem.speakerUrl ? (
                            <a
                              href={sem.speakerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-blue-900 hover:underline inline-flex items-center gap-1 group font-serif"
                            >
                              <span>{sem.speakerName}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-900 transition-colors" />
                            </a>
                          ) : (
                            <span className="font-serif">{sem.speakerName}</span>
                          )}
                          <div className="text-xs text-slate-500 font-normal font-sans mt-0.5">
                            {sem.speakerAffiliation}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-900 align-top">
                          <div className="font-medium font-serif leading-snug">
                            <MathView content={sem.title} />
                          </div>
                          {/* Muted unboxed metadata */}
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-1 font-sans">
                            <span>{sem.location}</span>
                            {sem.tags && sem.tags.length > 0 && (
                              <>
                                <span aria-hidden="true" className="text-slate-300">·</span>
                                <span>{sem.tags.slice(0, 2).join(' · ')}</span>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-right align-top whitespace-nowrap">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(sem.id);
                            }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-100 transition-colors"
                          >
                            <span>{isExpanded ? 'Hide' : 'Details'}</span>
                            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          </button>
                        </td>
                      </tr>

                      {/* Expanded Abstract & Slide Resources Drawer */}
                      {isExpanded && (
                        <tr className="bg-slate-50/90 border-b border-slate-200">
                          <td colSpan={4} className="p-4 md:p-6 text-sm">
                            <div className="space-y-4 max-w-4xl">
                              <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-semibold">
                                  Seminar Abstract
                                </h4>
                                <div className="text-slate-700 text-sm leading-relaxed bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
                                  <MathView content={sem.abstract} />
                                </div>
                              </div>

                              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                                {/* Keywords (unboxed metadata with subtle dot separators) */}
                                {sem.tags && sem.tags.length > 0 && (
                                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-sans">
                                    <span className="font-mono text-slate-400 uppercase text-[11px]">Keywords:</span>
                                    {sem.tags.map((tag, idx) => (
                                      <React.Fragment key={tag}>
                                        <span>{tag}</span>
                                        {idx < sem.tags!.length - 1 && <span aria-hidden="true" className="text-slate-300">·</span>}
                                      </React.Fragment>
                                    ))}
                                  </div>
                                )}

                                {/* Slide / Materials Links */}
                                <div className="flex items-center gap-3 text-xs">
                                  {sem.speakerUrl && (
                                    <a
                                      href={sem.speakerUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-900 hover:underline flex items-center gap-1 font-medium"
                                    >
                                      <FileText className="w-3.5 h-3.5" />
                                      <span>Speaker Scholar Profile</span>
                                    </a>
                                  )}
                                  <button
                                    type="button"
                                    onClick={() => alert(`Slides for "${sem.title}" are archived with the working group organizer (contact houssam.boukhecham@univ-amu.fr).`)}
                                    className="text-slate-700 hover:text-slate-900 flex items-center gap-1 hover:underline"
                                  >
                                    <Download className="w-3.5 h-3.5" />
                                    <span>Archived Slides</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
