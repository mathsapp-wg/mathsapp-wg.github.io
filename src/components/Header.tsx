import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CalendarPlus } from 'lucide-react';

interface HeaderProps {
  onOpenProposeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProposeModal }) => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative z-10 text-sm font-medium transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
      isActive
        ? 'text-[#0a3a19] border-[#166534] font-semibold'
        : 'text-[#235835] border-transparent hover:text-[#062410] hover:border-[#166534]/60'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-[#eaf6ec] border-b border-[#c2e4cc] shadow-xs relative overflow-hidden">
      {/* Hexagonal Tessellation Background with Low Opacity */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hex-tessellation"
            width="34.641"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 17.321 0 L 34.641 10 L 34.641 30 L 17.321 40 L 0 30 L 0 10 Z M 17.321 40 L 17.321 60"
              fill="none"
              stroke="#15803d"
              strokeWidth="1.2"
              strokeOpacity="0.16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-tessellation)" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <Link
          to="/home"
          className="text-xl font-serif font-bold text-[#0a3a19] tracking-tight whitespace-nowrap shrink-0 hover:text-[#166534] transition-colors"
        >
          MathsApp Working Group
        </Link>

        {/* Zone 2: Navigation Links for Each Section Page */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-6">
          <NavLink to="/home" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/events" className={navLinkClasses}>
            Coming Events
          </NavLink>
          <NavLink to="/past-seminars" className={navLinkClasses} style={{ color: '#000000' }}>
            Past Seminars
          </NavLink>
          <NavLink to="/research" className={navLinkClasses}>
            Research
          </NavLink>
          <NavLink to="/references" className={navLinkClasses}>
            References
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenProposeModal}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#166534] hover:bg-[#14532d] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <CalendarPlus className="w-3.5 h-3.5" />
            <span>Propose a Talk</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="relative z-10 md:hidden flex items-center gap-4 px-4 py-2 overflow-x-auto border-t border-[#cce8d4] bg-[#eaf6ec]/90 text-xs">
        <NavLink to="/home" className={navLinkClasses}>
          About
        </NavLink>
        <NavLink to="/events" className={navLinkClasses}>
          Events
        </NavLink>
        <NavLink to="/past-seminars" className={navLinkClasses}>
          Past Seminars
        </NavLink>
        <NavLink to="/research" className={navLinkClasses}>
          Research
        </NavLink>
        <NavLink to="/references" className={navLinkClasses}>
          References
        </NavLink>
        <NavLink to="/contact" className={navLinkClasses}>
          Contact
        </NavLink>
      </div>
    </header>
  );
};
