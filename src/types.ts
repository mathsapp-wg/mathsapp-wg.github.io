export interface Seminar {
  id: string;
  date: string; // e.g. "2026-10-17"
  dateFormatted: string; // e.g. "17-10-2026"
  time?: string; // e.g. "14:00 - 15:30 CET"
  speakerName: string;
  speakerUrl?: string;
  speakerAffiliation?: string;
  title: string;
  abstract: string;
  isUpcoming: boolean;
  themeId: 'theme-1' | 'theme-2' | 'theme-3';
  location?: string;
  hybridLink?: string;
  slidesUrl?: string;
  notesUrl?: string;
  tags?: string[];
  calendarData?: {
    startDateTime: string;
    endDateTime: string;
  };
}

export interface ResearchTheme {
  id: 'theme-1' | 'theme-2' | 'theme-3';
  themeNumber: number;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  keyTopics: string[];
  keyQuestions: string[];
  formulas?: {
    label: string;
    tex: string;
    note: string;
  }[];
}

export interface ReferenceItem {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  doiOrUrl: string;
  themeId: 'theme-1' | 'theme-2' | 'theme-3' | 'general';
  tags: string[];
  abstractSnippet?: string;
  bibtex: string;
}

export interface Organizer {
  name: string;
  email: string;
  role: string;
  affiliation: string;
  department?: string;
  office?: string;
  researchInterests: string[];
}

export interface TalkProposal {
  id: string;
  speakerName: string;
  email: string;
  affiliation: string;
  title: string;
  abstract: string;
  themeId: 'theme-1' | 'theme-2' | 'theme-3';
  preferredDate: string;
  submittedAt: string;
}