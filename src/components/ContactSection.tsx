import React from 'react';
import { Mail, MapPin, Building2, User, Globe, MessageSquare } from 'lucide-react';
import { ORGANIZERS, WORKING_GROUP_INFO } from '../data/groupData';

interface ContactSectionProps {
  onOpenProposeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenProposeModal }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Organizer Profile Card */}
        {ORGANIZERS.map((organizer, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-xs"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-900 shrink-0 font-serif font-bold text-lg">
                HB
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-slate-900">
                  {organizer.name}
                </h3>
                <div className="text-xs text-blue-900 font-medium font-sans mt-0.5">
                  {organizer.role}
                </div>
                <div className="text-xs text-slate-500 font-sans mt-0.5">
                  {organizer.department ? `${organizer.department} · ` : ''}{organizer.affiliation}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={`mailto:${organizer.email}`}
                  className="text-blue-900 hover:underline font-mono"
                >
                  {organizer.email}
                </a>
              </div>
              {organizer.office && (
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{organizer.office}</span>
                </div>
              )}
              <div className="flex items-start gap-2.5 pt-1">
                <Globe className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div className="flex flex-wrap items-center gap-1.5 text-slate-500">
                  <span className="font-medium text-slate-700">Interests:</span>
                  {organizer.researchInterests.map((interest, i) => (
                    <span key={i} className="text-slate-600">
                      {interest}
                      {i < organizer.researchInterests.length - 1 && <span className="ml-1.5 text-slate-300">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className="pt-3">
              <button
                type="button"
                onClick={onOpenProposeModal}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Submit Talk Proposal to Organizer</span>
              </button>
            </div> */}
          </div>
        ))}

        {/* Seminar Logistics & Practical Information */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-xs">
          <h3 className="font-serif font-bold text-xl text-slate-900">
            Practical Information & Attendance
          </h3>

          <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block text-xs mb-0.5">Physical Location:</strong>
                <span>{WORKING_GROUP_INFO.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block text-xs mb-0.5">Who Can Attend?</strong>
                <span>All seminars are open to all, researchers, postdoctoral fellows, and students interested in applied geometry and statistics.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block text-xs mb-0.5">Hybrid Format:</strong>
                <span>Every talk is online.</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
            <p>
              To join the working group mailing list or receive announcement reminders, send an email to{' '}
              <a href="mailto:houssam.boukhecham@univ-amu.fr?subject=Subscribe%20to%20MathsApp%20Announcements" className="text-blue-900 hover:underline font-mono">
                houssam.boukhecham@univ-amu.fr
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
