
import React from 'react';
import { Heart } from 'lucide-react';

const SPLASH_GIF_URL = "https://i.postimg.cc/Qx7mZ3Yq/Untitled-design-(7).gif";

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#ffffff] flex flex-col items-center justify-center animate-out fade-out fill-mode-forwards duration-1000 delay-[6000ms]">
      <div className="w-full max-w-3xl px-6 flex flex-col items-center justify-center animate-in zoom-in-95 duration-1000">
        <div className="w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full bg-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden p-2">
          <img 
            src={SPLASH_GIF_URL} 
            alt="Rafiq Splash" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Modern 'Made with love' quote */}
      <div className="absolute bottom-12 flex flex-col items-center gap-3 animate-in slide-in-from-bottom-8 duration-1000 delay-700">
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-8 bg-white/20"></div>
          <Heart size={14} className="text-white fill-white animate-pulse" />
          <div className="h-[1px] w-8 bg-white/20"></div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white text-sm font-light tracking-[0.3em] uppercase opacity-90">Made with love</p>
          <p className="text-white/60 text-[10px] font-bold mt-1 tracking-widest uppercase">صنع بكل حب</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;