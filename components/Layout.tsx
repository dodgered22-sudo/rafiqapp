
import React from 'react';
import { AppTab } from '../types';
import { NAV_ITEMS } from '../constants';
import { Bell, HeartPulse, Home as HomeIcon, LayoutGrid, User } from 'lucide-react';

interface LayoutProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  // Fix: Changed React.Node to React.ReactNode as 'React.Node' does not exist in the React namespace
  children: React.ReactNode;
}

// Logo only used for Desktop Sidebar now
const LOGO_URL = "https://i.postimg.cc/MKJZt7Cc/rfyq-hywank-alalyf-alafdl-fy-almmlkt-alʿrbyt-alsʿwdyt-kl-ma-yhtajh-alyfk-fy-mkan-wahd-(8).png";
const NAV_CENTER_BUNNY_GIF = "https://i.postimg.cc/763npMZj/Wireframes-Overview-Rafiq-Pet-App-(3).gif";

const Layout: React.FC<LayoutProps> = ({ activeTab, setActiveTab, children }) => {
  return (
    <div className="min-h-screen flex flex-col pb-28 md:pb-0 md:pr-64 bg-white transition-colors duration-300">
      {/* Modern Header: Personlized greeting replaces Logo on mobile */}
      <header className="fixed top-0 left-0 right-0 h-24 z-40 px-5 flex items-center justify-between md:hidden border-b transition-all duration-500 bg-white/95 border-gray-100 shadow-sm backdrop-blur-xl">
        {/* Right Section: User Profile & Greeting (RTL) */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 shadow-sm shrink-0">
            <User size={24} />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-400 text-[10px] font-bold leading-none mb-1">أهلاً بك في رفيق،</p>
            <h2 className="text-base font-black text-gray-900 leading-none">مستخدم ضيف</h2>
          </div>
        </div>

        {/* Left Section: Notifications */}
        <div className="flex items-center gap-2">
          <button className="p-3 bg-gray-50/80 rounded-2xl text-gray-400 hover:text-brand-orange transition-colors border border-gray-100">
            <Bell size={20} />
          </button>
        </div>
      </header>

      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex fixed right-0 top-0 bottom-0 w-64 flex-col p-8 z-50 border-l transition-all duration-500 bg-white border-gray-50">
        <div className="mb-10 flex flex-col items-center gap-4">
          <div className="w-full h-32 overflow-hidden transition-transform hover:scale-105">
             <img 
              src={LOGO_URL} 
              alt="Rafiq Logo" 
              className="w-full h-full object-contain transition-all duration-500"
            />
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-xl font-black tracking-tight text-brand-orange">رَفِيق</span>
          </div>
        </div>
        
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                  isActive 
                  ? 'bg-brand-soft-orange text-brand-orange font-bold' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-lg mx-auto px-6 pt-24 md:pt-12 bg-white transition-colors">
        {children}
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-4 left-4 right-4 backdrop-blur-2xl flex justify-around items-center h-22 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] md:hidden z-50 px-2 border transition-all duration-500 bg-white/98 border-gray-100">
        <button 
            onClick={() => setActiveTab(AppTab.HOME)}
            className={`flex flex-col items-center gap-1 transition-all flex-1 ${activeTab === AppTab.HOME ? 'text-brand-orange' : 'text-gray-300'}`}
        >
            <div className={`p-2 rounded-full`}>
                <HomeIcon size={24} strokeWidth={activeTab === AppTab.HOME ? 2.5 : 2} />
            </div>
        </button>
        
        <button 
            onClick={() => setActiveTab(AppTab.STORE)}
            className={`flex flex-col items-center gap-1 transition-all flex-1 ${activeTab === AppTab.STORE ? 'text-brand-orange' : 'text-gray-300'}`}
        >
            <div className={`p-2 rounded-full`}>
                <LayoutGrid size={24} strokeWidth={activeTab === AppTab.STORE ? 2.5 : 2} />
            </div>
        </button>

        {/* Central Action Button */}
        <div className="relative -top-6 flex-1 flex justify-center">
          <button 
            onClick={() => setActiveTab(AppTab.AI_ASSISTANT)}
            className="w-18 h-18 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all border-4 overflow-hidden ring-1 bg-white border-white ring-gray-100"
          >
            <img 
              src={NAV_CENTER_BUNNY_GIF} 
              alt="Action" 
              className="w-full h-full object-contain scale-110" 
            />
          </button>
        </div>

        <button 
            onClick={() => setActiveTab(AppTab.MEDICAL)}
            className={`flex flex-col items-center gap-1 transition-all flex-1 ${activeTab === AppTab.MEDICAL ? 'text-brand-green' : 'text-gray-300'}`}
        >
            <div className={`p-2 rounded-full`}>
                <HeartPulse size={24} strokeWidth={activeTab === AppTab.MEDICAL ? 2.5 : 2} />
            </div>
        </button>

        <button 
            // Fix: Changed setActiveTab(AppTab.HOME) to setActiveTab(AppTab.AI_ASSISTANT)
            onClick={() => setActiveTab(AppTab.AI_ASSISTANT)} 
            className={`flex flex-col items-center gap-1 transition-all flex-1 ${activeTab === AppTab.AI_ASSISTANT ? 'text-brand-orange' : 'text-gray-300'}`}
        >
            <div className={`p-2 rounded-full`}>
                {/* Fix: Replaced UserIcon with User since alias was redundant in original import */}
                <User size={24} strokeWidth={activeTab === AppTab.AI_ASSISTANT ? 2.5 : 2} />
            </div>
        </button>
      </nav>
    </div>
  );
};

export default Layout;