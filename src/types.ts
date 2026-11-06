export interface Plan {
  id: string;
  name: string;
  period: string;
  price: number;
  originalPrice?: number;
  perMonthPrice: number;
  popular?: boolean;
  bestValue?: boolean;
  screens: number;
  features: string[];
}

export interface ChannelItem {
  id: string;
  name: string;
  category: 'esportes' | 'filmes' | 'abertos' | 'infantil' | 'noticias' | 'variedades';
  quality: '4K' | 'FHD' | 'HD';
  currentProgram?: string;
  logoText: string;
  color: string;
}

export interface StreamingPlatform {
  name: string;
  description: string;
  badgeColor: string;
  popularTitles: string[];
}

export interface DeviceGuide {
  id: string;
  name: string;
  iconName: string;
  tag: string;
  apps: string[];
  instructions: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  state: string;
  rating: number;
  date: string;
  avatar: string;
  topicTag?: string;
  comment: string;
  plan: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
