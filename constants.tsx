
import React from 'react';
import { Home, ShoppingBag, Stethoscope, Scissors, MessageSquare } from 'lucide-react';
import { AppTab, Product, Service, VetAppointment, Pet, Review } from './types';

export const MOCK_PETS: Pet[] = [
  { id: 'p1', name: 'هيتار', age: 'سنتين', gender: 'ذكر', breed: 'جولدن ريتريفر', location: 'الرياض، السعودية', weight: '25 كجم', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600', description: 'كلب ودود جداً يحب اللعب مع الأطفال.' },
  { id: 'p2', name: 'سالي', age: 'سنة', gender: 'أنثى', breed: 'سيامي', location: 'جدة، السعودية', weight: '4 كجم', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600', description: 'قطة هادئة ومطيعة تبحث عن منزل دافئ.' },
  { id: 'p3', name: 'لوسي', age: '3 شهور', gender: 'أنثى', breed: 'جيرمن شيبرد', location: 'الدمام، السعودية', weight: '8 كجم', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600', description: 'جروة ذكية جداً وسريعة التعلم.' },
  { id: 'p4', name: 'بندق', age: '4 سنوات', gender: 'ذكر', breed: 'بيجل', location: 'الخبر، السعودية', weight: '15 كجم', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600', description: 'كلب وفي وشجاع يحب الحراسة.' },
];

const mockReviews: Review[] = [
    { id: 'r1', user: 'سارة عبدالله', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', rating: 5, comment: 'منتج رائع جداً! كلبي أحبه كثيراً والجودة ممتازة.', date: '2024-05-10' },
    { id: 'r2', user: 'أحمد خالد', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d', rating: 4, comment: 'جيد جداً، لكن أتمنى لو كان الحجم أكبر قليلاً.', date: '2024-05-12' },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'طعام كلاب فاخر 5كجم', price: 145, category: 'طعام', description: 'غني بالبروتينات والفيتامينات للكلاب النشطة. تركيبة متوازنة لدعم صحة المفاصل والفرو.', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=600', reviews: mockReviews },
  { id: '2', name: 'طوق كلب جلدي أنيق', price: 65, category: 'إكسسوارات', description: 'مصنوع من الجلد الطبيعي المتين والمريح لرقبة كلبك. متوفر بألوان ومقاسات متعددة.', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=600', reviews: [mockReviews[0]] },
  { id: '3', name: 'مجموعة ألعاب مطاطية', price: 35, category: 'ألعاب', description: 'ألعاب آمنة ومسلية لساعات طوال من المرح. تساعد على تنظيف الأسنان وتقوية الفك.', image: 'https://images.unsplash.com/photo-1576701180632-90de5d4f85c2?auto=format&fit=crop&q=80&w=600', reviews: [] },
  { id: '4', name: 'سرير كلب مبطن ومريح', price: 210, category: 'منزل', description: 'سرير ناعم يوفر الراحة الكاملة لأليفك. قابل للغسل وسهل التنظيف.', image: 'https://images.unsplash.com/photo-1541781713364-70ca2f42a53a?auto=format&fit=crop&q=80&w=600', reviews: [mockReviews[1]] },
];

export const MOCK_SERVICES: Service[] = [
  { id: '1', title: 'تنظيف وتجميل', description: 'استحمام، قص أظافر، وتصفيف فرو', icon: 'Scissors', price: 'من 80 ر.س' },
  { id: '2', title: 'تدريب احترافي', description: 'جلسات تعديل سلوك وطاعة', icon: 'Sparkles', price: 'من 150 ر.س' },
  { id: '3', title: 'إقامة فندقية', description: 'رعاية منزلية أثناء سفرك', icon: 'Dog', price: '100 ر.س / يوم' },
];

export const MOCK_APPOINTMENTS: VetAppointment[] = [
  { id: '1', doctor: 'د. أحمد السالم', specialty: 'جراحة عامة', date: '2024-06-15', status: 'upcoming' },
];

export const NAV_ITEMS = [
  { id: AppTab.HOME, label: 'الرئيسية', icon: Home },
  { id: AppTab.STORE, label: 'المتجر', icon: ShoppingBag },
  { id: AppTab.MEDICAL, label: 'الطبية', icon: Stethoscope },
  { id: AppTab.SERVICES, label: 'الخدمات', icon: Scissors },
  { id: AppTab.AI_ASSISTANT, label: 'المساعد', icon: MessageSquare },
];