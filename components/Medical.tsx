
import React from 'react';
import { Moon, Heart, MapPin, ChevronRight, Search } from 'lucide-react';

const Medical: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Search Icon Row */}
      <div className="flex justify-between items-center mb-6 px-2">
         <button className="bg-white p-3 rounded-2xl soft-shadow text-gray-400 hover:bg-brand-soft hover:text-brand-red transition-all"><Search size={18} /></button>
         <button className="bg-white p-3 rounded-2xl soft-shadow text-gray-400 hover:bg-brand-soft hover:text-brand-red transition-all"><MapPin size={18} /></button>
      </div>

      {/* Central Pet Profile */}
      <div className="relative flex flex-col items-center pt-8">
        <div className="relative w-48 h-48">
            {/* Background floating pets */}
            <div className="absolute -right-8 top-10 w-16 h-16 rounded-full soft-shadow overflow-hidden opacity-30">
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -left-8 top-10 w-16 h-16 rounded-full soft-shadow overflow-hidden opacity-30">
                <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
            </div>
            
            {/* Main Avatar */}
            <div className="w-full h-full rounded-full soft-shadow overflow-hidden relative z-10 shadow-2xl ring-4 ring-white">
                <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
            </div>
            
            <button className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-brand-red p-2 rounded-xl text-white shadow-lg hover:bg-brand-dark transition-all">
                <span className="text-sm font-bold">+</span>
            </button>
        </div>

        <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">هيتار</h2>
            <p className="text-xs text-gray-400 font-medium mt-1">جولدن ريتريفر | سنتين | 25 كجم | ذكر</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 px-2">
        <div className="bg-white p-4 rounded-3xl soft-shadow flex flex-col items-center gap-2 hover:bg-brand-soft group transition-all">
            <div className="text-brand-red opacity-40 group-hover:opacity-100 transition-opacity"><Moon size={18} /></div>
            <span className="text-xs font-bold text-gray-800">النوم</span>
            <span className="text-[10px] text-gray-400">نشط</span>
        </div>
        <div className="bg-white p-4 rounded-3xl shadow-xl shadow-red-50 flex flex-col items-center gap-2 group transition-all">
            <div className="text-brand-red"><Heart size={18} fill="currentColor" /></div>
            <span className="text-xs font-bold text-gray-800">110 نبضة</span>
            <span className="text-[10px] text-gray-400">معدل القلب</span>
        </div>
        <div className="bg-white p-4 rounded-3xl soft-shadow flex flex-col items-center gap-2 hover:bg-brand-soft group transition-all">
            <div className="text-brand-red opacity-40 group-hover:opacity-100 transition-opacity"><MapPin size={18} /></div>
            <span className="text-xs font-bold text-gray-800">المنزل</span>
            <span className="text-[10px] text-gray-400">الموقع</span>
        </div>
      </div>

      {/* Detail Cards */}
      <div className="space-y-4 pb-12">
        <div className="bg-white p-4 rounded-3xl soft-shadow flex items-center justify-between group hover:bg-brand-soft transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm bg-brand-soft p-0.5">
                    <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                    <h4 className="font-bold text-sm text-gray-900">جدول النظام الغذائي</h4>
                    <p className="text-[10px] text-gray-400 max-w-[150px] truncate">نظام غذائي متوازن وغني بالبروتين...</p>
                </div>
            </div>
            <div className="text-gray-300 group-hover:text-brand-red transition-colors"><ChevronRight size={18} /></div>
        </div>

        <div className="bg-white p-4 rounded-3xl soft-shadow flex items-center justify-between group hover:bg-brand-soft transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm bg-brand-soft p-0.5">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                    <h4 className="font-bold text-sm text-gray-900">اتصل بالطبيب البيطري</h4>
                    <p className="text-[10px] text-gray-400 max-w-[150px] truncate">د. أحمد السالم - متاح الآن للمساعدة</p>
                </div>
            </div>
            <div className="text-gray-300 group-hover:text-brand-red transition-colors"><ChevronRight size={18} /></div>
        </div>
      </div>
    </div>
  );
};

export default Medical;