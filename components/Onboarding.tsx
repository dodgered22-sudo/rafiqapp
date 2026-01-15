
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

interface OnboardingProps {
  onFinish: () => void;
}

const START_IMG = "https://i.postimg.cc/MKJZt7Cc/rfyq-hywank-alalyf-alafdl-fy-almmlkt-alʿrbyt-alsʿwdyt-kl-ma-yhtajh-alyfk-fy-mkan-wahd-(8).png";
const STORE_IMG = "https://i.postimg.cc/Kj2Hd8rm/rfyq-hywank-alalyf-alafdl-fy-almmlkt-alʿrbyt-alsʿwdyt-kl-ma-yhtajh-alyfk-fy-mkan-wahd-(1).png";
const VET_IMG = "https://i.postimg.cc/CMGtbbSh/rfyq-hywank-alalyf-alafdl-fy-almmlkt-alʿrbyt-alsʿwdyt-kl-ma-yhtajh-alyfk-fy-mkan-wahd-(2).png";

const Onboarding: React.FC<OnboardingProps> = ({ onFinish }) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "", 
      description: "رفيق حيوانك الأليف الأفضل في المملكة العربية السعودية. كل ما يحتاجه أليفك في مكان واحد وبنقرة واحدة.",
      image: <img src={START_IMG} alt="Rafiq Welcome" className="w-full h-full object-contain drop-shadow-2xl scale-110 z-10" />,
      buttonText: "ابدأ الآن",
    },
    {
      title: "متجر رفيق المتكامل",
      description: "تسوق أفضل المنتجات العالمية من طعام، إكسسوارات، وألعاب بجودة عالية وتوصيل سريع لباب منزلك.",
      image: <img src={STORE_IMG} alt="Store" className="w-full h-full object-contain drop-shadow-xl z-10" />,
      buttonText: "التالي",
    },
    {
      title: "خدمات بيطرية متميزة",
      description: "احجز مواعيد العيادة، الاستحمام، أو التدريب بسهولة مع أفضل الخبراء المتخصصين في المملكة.",
      image: <img src={VET_IMG} alt="Vet Services" className="w-full h-full object-contain drop-shadow-xl z-10" />,
      buttonText: "دخول التطبيق",
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onFinish();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col relative overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none p-6 grid grid-cols-3 gap-12 rotate-[-15deg]">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="flex justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
              <path d="M12,8.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,8.5,12,8.5z M7.5,11.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S6.4,11.5,7.5,11.5z M16.5,11.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S15.4,11.5,16.5,11.5z M12,13.5c-2.2,0-4,1.8-4,4c0,1.1,0.4,2.1,1.2,2.8C9.9,21,11,21.5,12,21.5s2.1-0.5,2.8-1.2c0.8-0.7,1.2-1.7,1.2-2.8C16,15.3,14.2,13.5,12,13.5z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Top bar with Progress */}
      <div className="h-20 flex items-center justify-between px-10 z-20">
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-700 ${step === i ? 'w-8 bg-brand-red' : 'w-1.5 bg-gray-200'}`}
            />
          ))}
        </div>
        {step < steps.length - 1 && (
          <button 
            onClick={onFinish}
            className="text-[10px] font-black text-gray-400 hover:text-brand-red transition-colors tracking-widest uppercase"
          >
            تخطي
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-10 text-center z-10 overflow-hidden">
        <div className={`w-full max-w-sm aspect-square flex items-center justify-center mb-6 relative group transition-all duration-500`}>
           {/* Dynamic Background Shape */}
           <div className={`absolute inset-0 transition-all duration-700 ${step === 0 ? 'bg-brand-soft rounded-full scale-105 shadow-xl shadow-red-50/50' : 'bg-brand-soft rounded-[3rem]'}`}></div>
           
           {step !== 0 && (
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl shadow-lg text-brand-red z-20 animate-bounce">
               <Sparkles size={18} />
             </div>
           )}
           <div className="relative w-full h-full flex items-center justify-center z-10 p-4">
              {steps[step].image}
           </div>
        </div>

        <div className="max-w-md">
          {steps[step].title && (
            <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight leading-tight">{steps[step].title}</h2>
          )}
          <p className="text-base text-gray-400 leading-relaxed font-medium">
            {steps[step].description}
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="h-40 flex flex-col items-center justify-center px-8 relative gap-4 z-20">
        <div className="flex w-full max-w-sm items-center gap-3">
           {/* Back Button */}
          {step > 0 && (
              <button 
              onClick={handleBack}
              className="w-14 h-14 rounded-2xl border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-brand-red transition-all active:scale-90 shrink-0"
              >
              <ChevronRight size={22} />
              </button>
          )}

          <button
              onClick={handleNext}
              className={`flex-1 h-14 bg-brand-red text-white rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-red-100 hover:bg-brand-dark transition-all active:scale-[0.98] group`}
          >
              <span className="font-black text-base tracking-wide">{steps[step].buttonText}</span>
              <ChevronLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em]">رؤية رفيق 2030</p>
      </div>
    </div>
  );
};

export default Onboarding;