import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProposeTalkModal } from './components/ProposeTalkModal';
import { HomePage } from './pages/HomePage';
import { PastSeminarsPage } from './pages/PastSeminarsPage';
import { ResearchPage } from './pages/ResearchPage';
import { ReferencesPage } from './pages/ReferencesPage';
import { ContactPage } from './pages/ContactPage';
import { TalkProposal } from './types';

export default function App() {
  const [isProposeModalOpen, setIsProposeModalOpen] = useState(false);
  const [, setProposals] = useState<TalkProposal[]>([]);

  const handleProposalSubmitted = (newProposal: TalkProposal) => {
    setProposals((prev) => [newProposal, ...prev]);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f0f2f5] text-slate-900 flex flex-col font-sans">
        {/* Navigation Top Bar */}
        <Header onOpenProposeModal={() => setIsProposeModalOpen(true)} />

        {/* Dynamic Route Pages matching Google Sites / combarithmgeo/section structure */}
        <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 w-full py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/events" element={<Navigate to="/home" replace />} />
            <Route path="/past-seminars" element={<PastSeminarsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/references" element={<ReferencesPage />} />
            <Route
              path="/contact"
              element={<ContactPage onOpenProposeModal={() => setIsProposeModalOpen(true)} />}
            />
            {/* Fallback to /home */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>

        {/* Global Academic Footer */}
        <Footer />

        {/* Propose a Talk Modal */}
        <ProposeTalkModal
          isOpen={isProposeModalOpen}
          onClose={() => setIsProposeModalOpen(false)}
          onProposalSubmitted={handleProposalSubmitted}
        />
      </div>
    </BrowserRouter>
  );
}
