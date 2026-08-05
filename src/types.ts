export type GradeLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type PaiElement = 
  | 'Al-Qur\'an Hadis'
  | 'Akidah'
  | 'Akhlak'
  | 'Fiqih'
  | 'Sejarah Peradaban Islam (SPI)';

export interface FlashcardItem {
  id: string;
  front: string;
  back: string;
  arabic?: string;
  hint?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LearningTopic {
  id: string;
  grade: GradeLevel;
  element: PaiElement;
  title: string;
  subtitle: string;
  description: string;
  arabicText?: string;
  translation?: string;
  keyPoints: string[];
  flashcards?: FlashcardItem[];
  quizzes?: QuizQuestion[];
  hafalanList?: { id: string; title: string; arabic: string; latin: string; meaning: string }[];
}

export interface GradeInfo {
  level: GradeLevel;
  phase: 'Fase A' | 'Fase B' | 'Fase C';
  title: string;
  subtitle: string;
  colorTheme: {
    bgGradient: string;
    cardBg: string;
    borderColor: string;
    textColor: string;
    badgeBg: string;
    iconBg: string;
  };
  topicsCount: number;
  mainFocus: string[];
  description: string;
  elements: PaiElement[];
}

export interface IFPSettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  isHighContrast: boolean;
  isTouchMode: boolean;
  soundEnabled: boolean;
  activeViewMode: 'dashboard' | 'class-detail' | 'teacher-tools' | 'ai-helper';
  selectedGrade: GradeLevel | null;
}

export type SoundFXType = 
  | 'correct'
  | 'wrong'
  | 'cheer'
  | 'bell'
  | 'basmalah'
  | 'click'
  | 'tepuk';
