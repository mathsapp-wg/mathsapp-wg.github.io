import React from 'react';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  onOpenProposeModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenProposeModal }) => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
          Organizers & Contact
        </h1>
        <p className="text-sm text-slate-600 mt-1 font-sans">
          Coordination details, physical meeting coordinates, and inquiries for MathsApp.
        </p>
      </div>

      {/* Main Contact Content */}
      <ContactSection onOpenProposeModal={onOpenProposeModal} />
    </div>
  );
};
