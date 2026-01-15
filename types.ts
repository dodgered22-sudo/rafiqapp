
export enum AppTab {
  HOME = 'home',
  STORE = 'store',
  MEDICAL = 'medical',
  SERVICES = 'services',
  AI_ASSISTANT = 'ai_assistant'
}

export interface Pet {
  id: string;
  name: string;
  age: string;
  gender: 'ذكر' | 'أنثى';
  breed: string;
  image: string;
  location: string;
  description: string;
  weight: string;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  reviews?: Review[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface VetAppointment {
  id: string;
  doctor: string;
  specialty: string;
  date: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}