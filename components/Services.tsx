
import React, { useState } from 'react';
import { MOCK_SERVICES } from '../constants';
import { Scissors, Sparkles, Dog, ChevronLeft, ShoppingCart, Check } from 'lucide-react';

const iconMap: Record<string, any> = {
  Scissors,
  Sparkles,
  Dog,
};

const Services: React.FC = () => {
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const toggleAddToCart = (id: string) => {
    setAddedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="px-2">
        <h2 className="text-2xl font-bold text-gray-800">خدماتنا المميزة</h2>
        <p className="text-gray-500 text-sm mt-1">نقدم أفضل رعاية لحيوانك الأليف على يد خبراء متخصصين.</p>
      </div>
      
      <div className="space-y-4 px-2">
        {MOCK_SERVICES.map(service => {
          const Icon = iconMap[service.icon];
          const isAdded = addedItems.has(service.id);
          
          return (
            <div key={service.id} className="bg-white p-5 rounded-4xl soft-shadow flex items-center gap-4 hover:bg-brand-soft group transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-3xl bg-brand-soft flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm shrink-0">
                <Icon size={32} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-base">{service.title}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{service.description}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="text-brand-red font-black text-sm">{service.price}</div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleAddToCart(service.id); }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black transition-all active:scale-95 ${
                      isAdded 
                      ? 'bg-brand-green text-white' 
                      : 'bg-white border border-gray-100 text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check size={12} />
                        تمت الإضافة
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={12} />
                        إضافة للسلة
                      </>
                    )}
                  </button>
                </div>
              </div>
              <ChevronLeft className="text-gray-200 group-hover:text-brand-red transition-colors shrink-0" size={18} />
            </div>
          );
        })}
      </div>

      <div className="bg-brand-red rounded-4xl p-8 text-white text-center relative overflow-hidden shadow-2xl shadow-red-100 mx-2">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">عضوية رفيق بلس</h3>
          <p className="text-red-100 text-sm mb-6 leading-relaxed">خصومات حصرية على جميع المشتريات والخدمات والطبية.</p>
          <button className="bg-white text-brand-red font-bold px-8 py-3 rounded-2xl text-sm hover:bg-brand-soft transition-all shadow-lg active:scale-95">اشترك الآن</button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-8 -mb-8 blur-xl"></div>
      </div>
    </div>
  );
};

export default Services;