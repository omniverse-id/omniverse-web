export interface Service {
  id: string;
  title: {
    en: string;
    id: string;
  };
  shortDesc: {
    en: string;
    id: string;
  };
  fullDesc: {
    en: string;
    id: string;
  };
  features: {
    en: string[];
    id: string[];
  };
  icon: string;
  badge: {
    en: string;
    id: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: {
    en: string;
    id: string;
  };
  company: string;
  content: {
    en: string;
    id: string;
  };
  avatar: string;
}

export type Language = 'en' | 'id';

