import React, { useState, useMemo } from 'react';
import { Search, Copy, Check, ExternalLink, BookOpen } from 'lucide-react';
import { REFERENCES_LIST } from '../data/groupData';
import { ReferenceItem } from '../types';

export const ReferencesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredReferences = useMemo(() => {
    return REFERENCES_LIST.filter((ref) => {
      const matchesSearch =
        ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTheme = selectedTheme === 'all' || ref.themeId === selectedTheme;
      return matchesSearch && matchesTheme;
    });
  }, [searchTerm, selectedTheme]);

  const copyBibtex = (item: ReferenceItem) => {
    navigator.clipboard.writeText(item.bibtex);
    setCopiedId(item.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search papers, authors, citations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-colors"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto overflow-x-auto max-w-full">
          <button
            type="button"
            onClick={() => setSelectedTheme('all')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedTheme === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All References ({REFERENCES_LIST.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedTheme('theme-1')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedTheme === 'theme-1' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Geometry & Statistics
          </button>
          <button
            type="button"
            onClick={() => setSelectedTheme('theme-2')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedTheme === 'theme-2' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Geometric Design
          </button>
          <button
            type="button"
            onClick={() => setSelectedTheme('theme-3')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedTheme === 'theme-3' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Machine Learning
          </button>
        </div>
      </div>

      {/* References Listing */}
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 shadow-xs">
        {filteredReferences.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm">
            No bibliographic references found matching your query.
          </div>
        ) : (
          filteredReferences.map((ref) => {
            const isCopied = copiedId === ref.id;

            return (
              <div key={ref.id} className="p-5 md:p-6 hover:bg-slate-50/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    {/* Title */}
                    <div className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-blue-900 shrink-0 mt-1" />
                      <h4 className="font-serif font-bold text-base text-slate-900 leading-snug">
                        {ref.title}
                      </h4>
                    </div>

                    {/* Authors & Publication venue */}
                    <p className="text-sm text-slate-700 pl-6">
                      <span className="font-medium">{ref.authors}</span>{' '}
                      <span className="text-slate-500 font-mono text-xs tabular-nums">({ref.year})</span>.
                    </p>
                    <p className="text-xs text-slate-500 italic pl-6">
                      {ref.venue}
                    </p>

                    {/* Abstract snippet */}
                    {ref.abstractSnippet && (
                      <p className="text-xs text-slate-600 pl-6 leading-relaxed pt-1">
                        {ref.abstractSnippet}
                      </p>
                    )}

                    {/* Tags (Zero-Pill: Unboxed text with subtle typographic separators) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pl-6 pt-1 font-sans">
                      {ref.tags.map((tag, i) => (
                        <React.Fragment key={tag}>
                          <span>{tag}</span>
                          {i < ref.tags.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 self-start md:self-auto shrink-0 pl-6 md:pl-0">
                    <button
                      type="button"
                      onClick={() => copyBibtex(ref)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition-colors"
                      title="Copy BibTeX entry"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>BibTeX</span>
                        </>
                      )}
                    </button>

                    <a
                      href={ref.doiOrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-blue-900 bg-blue-50/50 hover:bg-blue-50 border border-blue-200/60 rounded-md transition-colors"
                    >
                      <span>Publication</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
