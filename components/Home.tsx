
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Search, ShoppingBag, Scissors, Stethoscope, Heart, Star, Plus, MapPin, Navigation, Crown, Check, Sparkles, ChevronLeft } from 'lucide-react';
import { AppTab } from '../types';

interface HomeProps {
  setActiveTab: (tab: AppTab) => void;
}

const LOGO_HERO_URL = "https://i.postimg.cc/FR5mGcz1/rfyq-hywank-alalyf-alafdl-fy-almmlkt-alʿrbyt-alsʿwdyt-kl-ma-yhtajh-alyfk-fy-mkan-wahd-(8).png";

const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (id: string) => {
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

  const mainCategories = [
    {
      id: 'shop',
      tab: AppTab.STORE,
      title: 'المتجر',
      subtitle: 'طعام ومنتجات',
      icon: <ShoppingBag size={32} strokeWidth={1.5} />,
      color: 'text-brand-orange',
      bgColor: 'bg-brand-soft-orange',
    },
    {
      id: 'services',
      tab: AppTab.SERVICES,
      title: 'الخدمات',
      subtitle: 'حلاقة وعناية',
      icon: <Scissors size={32} strokeWidth={1.5} />,
      color: 'text-brand-orange',
      bgColor: 'bg-brand-soft-orange',
    },
    {
      id: 'medical',
      tab: AppTab.MEDICAL,
      title: 'الطبي',
      subtitle: 'رعاية بيطرية',
      icon: <Stethoscope size={32} strokeWidth={1.5} />,
      color: 'text-brand-green',
      bgColor: 'bg-brand-soft-green',
    },
    {
      id: 'feed',
      tab: AppTab.HOME,
      title: 'مجتمع رفيق',
      subtitle: 'شارك اللحظات',
      icon: <Heart size={32} strokeWidth={1.5} />,
      color: 'text-brand-green',
      bgColor: 'bg-brand-soft-green',
    }
  ];

  const nearbyStores = [
    {
      id: 's1',
      name: 'عالم الأليف المتقدم',
      distance: '1.2 كم',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 's2',
      name: 'متجر مخلب وسن',
      distance: '2.5 كم',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 's3',
      name: 'واحة الحيوان',
      distance: '3.8 كم',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=600',
    }
  ];

  const nearbyProviders = [
    {
      id: 'p1',
      name: 'صالون فروي ستايل',
      specialty: 'حلاقة وتجميل',
      distance: '0.8 كم',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=600',
      price: 'تبدأ من 80 ر.س'
    },
    {
      id: 'p2',
      name: 'كابتن فهد للتدريب',
      specialty: 'تدريب سلوكي',
      distance: '3.2 كم',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=600',
      price: 'تبدأ من 150 ر.س'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-24 bg-white relative">
      {/* Floating AI Bubble */}
      <button 
        onClick={() => setActiveTab(AppTab.AI_ASSISTANT)}
        className="fixed bottom-32 left-6 z-[60] w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(249,115,22,0.4)] animate-bounce-slow border-2 border-white ring-4 ring-brand-soft-orange"
      >
        <Sparkles size={24} />
      </button>

      {/* Hero Section - Optimized Layout */}
      <div className="px-2 pt-20 relative">
        <button 
          onClick={() => setActiveTab(AppTab.AI_ASSISTANT)}
          className="w-full relative h-44 sm:h-52 flex items-center justify-end group cursor-pointer overflow-visible"
        >
          {/* Main Orange Banner Card */}
          <div className="absolute inset-x-0 bottom-0 top-0 bg-brand-orange rounded-[2.5rem] shadow-2xl shadow-orange-100/60 flex flex-col justify-center items-end text-white z-10 overflow-hidden pr-6 sm:pr-10">
            <div className="relative z-20 text-right pl-40 sm:pl-48">
              <h2 className="text-4xl sm:text-5xl font-black mb-1 drop-shadow-md">أهلاً!</h2>
              <p className="text-sm sm:text-lg font-bold text-white drop-shadow-sm leading-tight">
                أنا رفيق، كيف أساعدك اليوم؟
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>
          
          {/* Mascot overlap - Ears clearly above the card and header */}
          <div className="absolute -top-20 -left-4 w-52 sm:w-64 h-auto z-50 pointer-events-none transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 origin-bottom-left">
            <img 
              src={LOGO_HERO_URL} 
              alt="Rafiq Mascot" 
              className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            />
          </div>
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-2 pt-2">
        <div className="relative group">
          <input
            type="text"
            placeholder="ابحث عن منتجات، خدمات لأليفك..."
            className="w-full pl-6 pr-14 py-5 bg-gray-50/50 border-2 border-transparent focus:border-brand-orange/10 focus:bg-white rounded-[2rem] transition-all text-sm outline-none shadow-sm placeholder:text-gray-400 font-medium text-gray-900"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-orange transition-colors" size={20} />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-5 px-2">
        <h3 className="text-xl font-black text-gray-900 pr-2">ماذا يحتاج أليفك اليوم؟</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {mainCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.tab)}
              className={`
                relative bg-white border-2 border-gray-50 
                rounded-[2.5rem] p-6 flex flex-col items-center justify-center text-center gap-3 
                hover:border-transparent hover:shadow-xl hover:shadow-gray-200/50
                hover:-translate-y-1.5 transition-all duration-500 active:scale-[0.96] group
              `}
            >
              <div className={`p-4 rounded-[1.5rem] ${cat.bgColor} ${cat.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm relative z-10`}>
                {cat.icon}
              </div>
              <div className="space-y-0.5">
                <span className="block font-black text-gray-900 text-base">{cat.title}</span>
                <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">{cat.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Products Grid */}
      <div className="space-y-5 px-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-black text-gray-900">منتجات مختارة</h3>
          <button className="text-sm text-brand-orange font-black hover:underline transition-all">عرض الكل</button>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-6">
          {MOCK_PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border-2 border-gray-50 rounded-[2.5rem] p-4 group hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-gray-200/40 transition-all duration-500 cursor-pointer relative"
            >
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-brand-orange text-white text-[8px] font-black px-2 py-1 rounded-lg shadow-lg shadow-orange-200 uppercase tracking-tighter">جديد</div>
              </div>
              <div className="w-full aspect-square bg-gray-50/50 rounded-[2rem] overflow-hidden mb-4 p-2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1">
                  <Star size={10} className="fill-brand-orange text-brand-orange" />
                  <span className="text-[10px] font-bold text-gray-400">4.9 (23+)</span>
                </div>
                <h4 className="font-black text-gray-900 text-sm truncate leading-tight">{product.name}</h4>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-base font-black text-brand-orange">
                    {product.price} <span className="text-[10px]">ر.س</span>
                  </span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleAddToCart(product.id); }}
                    className={`w-9 h-9 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-90 ${
                      addedItems.has(product.id) ? 'bg-brand-green text-white' : 'bg-gray-900 text-white'
                    }`}
                  >
                    {addedItems.has(product.id) ? <Check size={18} /> : <Plus size={18} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Discount Banner 1 - Medical */}
      <div className="px-4">
        <div className="w-full bg-brand-green rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-emerald-100/50 border border-emerald-400/20">
          <div className="relative z-10 space-y-3">
             <div className="bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">عرض حصري</div>
             <h3 className="text-2xl font-black">خصم 20٪ على أول طلب طبي</h3>
             <p className="text-white/80 text-xs font-medium max-w-[200px]">استخدم كود <span className="text-white font-black underline underline-offset-4">RAFIQ20</span></p>
             <button className="bg-white text-brand-green font-black px-6 py-3 rounded-2xl text-xs mt-2 group-hover:scale-105 transition-transform">احجز الآن</button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
             <Stethoscope size={100} />
          </div>
        </div>
      </div>

      {/* Nearby Stores Grid */}
      <div className="space-y-5 px-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-black text-gray-900">متاجر قريبة منك</h3>
          <button className="text-sm text-brand-green font-black hover:underline transition-all">الخريطة</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {nearbyStores.map((store) => (
            <div key={store.id} className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="relative h-24 overflow-hidden">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <MapPin size={8} className="text-brand-green" />
                  <span className="text-[8px] font-black text-gray-800">{store.distance}</span>
                </div>
              </div>
              <div className="p-3 space-y-2 text-right">
                <h4 className="font-black text-gray-900 text-xs truncate">{store.name}</h4>
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-1">
                      <Star size={10} className="fill-brand-orange text-brand-orange" />
                      <span className="text-[10px] font-black text-gray-900">{store.rating}</span>
                   </div>
                   <button className="bg-gray-900 text-white px-3 py-1 rounded-lg text-[8px] font-black hover:bg-brand-orange transition-colors">
                      زيارة
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Providers Grid */}
      <div className="space-y-5 px-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-black text-gray-900">خدمات عناية قريبة</h3>
          <button className="text-sm text-brand-orange font-black hover:underline transition-all">الكل</button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {nearbyProviders.map((provider) => (
            <div key={provider.id} className="bg-white border border-gray-100 rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                <img src={provider.image} alt={provider.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1 text-right">
                <h4 className="font-black text-gray-900 text-xs">{provider.name}</h4>
                <p className="text-[9px] text-gray-400 font-bold">{provider.specialty}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[9px] font-black text-brand-orange">{provider.price}</span>
                </div>
              </div>
              <ChevronLeft size={16} className="text-gray-200 group-hover:text-brand-orange" />
            </div>
          ))}
        </div>
      </div>

      {/* Discount Banner 2 - Monthly Packages */}
      <div className="px-4">
        <div className="w-full bg-brand-orange rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-orange-100/50 border border-brand-orange/20">
          <div className="relative z-10 space-y-4">
             <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
               <Crown size={12} />
               باقات رفيق الشهرية
             </div>
             <h3 className="text-2xl font-black">رعاية متكاملة كل شهر</h3>
             <p className="text-white/80 text-xs font-medium max-w-[220px]">طعام، نظافة، وكشف دوري في باقة واحدة توفر لك حتى 30٪ شهرياً.</p>
             <button className="bg-white text-brand-orange font-black px-8 py-3.5 rounded-2xl text-xs mt-2 group-hover:scale-105 transition-transform shadow-xl">اكتشف الباقات</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;