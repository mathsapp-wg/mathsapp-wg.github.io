import React, { useState } from 'react';
import { X, Send, Eye, CheckCircle2 } from 'lucide-react';
import { MathView } from './MathView';
import { TalkProposal } from '../types';

interface ProposeTalkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProposalSubmitted: (proposal: TalkProposal) => void;
}

export const ProposeTalkModal: React.FC<ProposeTalkModalProps> = ({
  isOpen,
  onClose,
  onProposalSubmitted,
}) => {
  const [speakerName, setSpeakerName] = useState('');
  const [email, setEmail] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [themeId, setThemeId] = useState<'theme-1' | 'theme-2' | 'theme-3'>('theme-1');
  const [preferredDate, setPreferredDate] = useState('2026-11-07');
  const [showPreview, setShowPreview] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!speakerName || !email || !title || !abstract) return;

    const newProposal: TalkProposal = {
      id: `prop-${Date.now()}`,
      speakerName,
      email,
      affiliation,
      title,
      abstract,
      themeId,
      preferredDate,
      submittedAt: new Date().toISOString(),
    };

    onProposalSubmitted(newProposal);
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setSpeakerName('');
    setEmail('');
    setAffiliation('');
    setTitle('');
    setAbstract('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-xl border border-slate-200 max-w-2xl w-full shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="font-serif font-bold text-lg text-slate-900">
              Propose a Seminar Talk
            </h3>
            <p className="text-xs text-slate-500">
              MathsApp Working Group in Applied Geometry and Statistics
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-xl text-slate-900">
              Proposal Received
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{speakerName}</strong>. Your seminar proposal has been recorded. The organizer will review your abstract and get in touch with you shortly.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:houssam.boukhecham@univ-amu.fr?subject=${encodeURIComponent(
                  `[MathsApp Proposal] ${title}`
                )}&body=${encodeURIComponent(
                  `Dear Houssam,\n\nI have proposed a seminar talk for MathsApp:\n\nTitle: ${title}\nSpeaker: ${speakerName} (${affiliation})\nPreferred Date: ${preferredDate}\n\nAbstract:\n${abstract}\n\nBest regards,\n${speakerName}`
                )}`}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Send Email Copy to Houssam BOUKHECHAM
              </a>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Full Name & Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Jean Dupont"
                  value={speakerName}
                  onChange={(e) => setSpeakerName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-900"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Institutional Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@institution.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">
                Affiliation / Department *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Aix-Marseille Université / CNRS"
                value={affiliation}
                onChange={(e) => setAffiliation(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Working Group Theme
                </label>
                <select
                  value={themeId}
                  onChange={(e) => setThemeId(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-900"
                >
                  <option value="theme-1">Theme 1: Geometry and Statistics</option>
                  <option value="theme-2">Theme 2: Geometric Design</option>
                  <option value="theme-3">Theme 3: Applications to ML ("AI")</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Target Saturday Session
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">
                Seminar Title (LaTeX allowed, e.g. $M \subset \mathbb&#123;R&#125;^d$) *
              </label>
              <input
                type="text"
                required
                placeholder="Title with optional LaTeX formulas"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-900 font-serif text-sm"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block font-medium text-slate-700">
                  Abstract & Key References (LaTeX enabled) *
                </label>
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-blue-900 hover:underline flex items-center gap-1 font-sans text-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showPreview ? 'Edit Input' : 'Preview LaTeX'}</span>
                </button>
              </div>

              {showPreview ? (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg min-h-[120px] max-h-[200px] overflow-y-auto text-slate-800 leading-relaxed font-sans">
                  {abstract ? (
                    <MathView content={abstract} />
                  ) : (
                    <span className="text-slate-400 italic">No abstract text entered yet.</span>
                  )}
                </div>
              ) : (
                <textarea
                  required
                  rows={4}
                  placeholder="Provide an overview of your results, theorems, and relevance to applied geometry and statistics. Enclose math with $...$ or $$...$$."
                  value={abstract}
                  onChange={(e) => setAbstract(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-900 font-sans"
                />
              )}
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Proposal</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
