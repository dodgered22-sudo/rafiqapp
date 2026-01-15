
import React, { useState } from 'react';
import { Smartphone, ShieldCheck, Store, User, Scissors, ArrowRight, ChevronLeft } from 'lucide-react';

interface AuthProps {
  onLogin: () => void;
}

type AuthStep = 'role' | 'phone' | 'otp';
type UserRole = 'customer' | 'store' | 'provider';

const WIREFRAME_GIF_URL = "https://i.postimg.cc/0y2yMTBb/Wireframes-Overview-Rafiq-Pet-App-(1).gif";

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [step, setStep] = useState<AuthStep>('role');
  const [role, setRole] = useState<UserRole>('customer');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setStep('phone');
  };

  const handleSendOTP = () => {
    if (phone.length >= 9) {
      setStep('otp');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Auto focus next
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const verifyOtp = () => {
    if (otp.every(v => v !== '')) {
      onLogin();
    }
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col relative overflow-hidden font-sans">
      {/* Top Visual Section */}
      <div className="relative flex-[1.4] bg-white overflow-hidden flex flex-col items-center justify-center p-4">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none p-6 grid grid-cols-3 gap-12 rotate-[-15deg]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
                <path d="M12,8.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,8.5,12,8.5z M7.5,11.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S6.4,11.5,7.5,11.5z M16.5,11.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S15.4,11.5,16.5,11.5z M12,13.5c-2.2,0-4,1.8-4,4c0,1.1,0.4,2.1,1.2,2.8C9.9,21,11,21.5,12,21.5s2.1-0.5,2.8-1.2c0.8-0.7,1.2-1.7,1.2-2.8C16,15.3,14.2,13.5,12,13.5z" />
              </svg>
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
           <div className="relative w-full aspect-video flex items-center justify-center rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-50">
              <img 
                src={WIREFRAME_GIF_URL} 
                alt="Rafiq App Overview" 
                className="w-full h-full object-cover scale-110"
              />
           </div>
        </div>
      </div>

      {/* Auth Content Area - Background White */}
      <div className="bg-white px-8 py-8 flex flex-col rounded-t-[3.5rem] shadow-[0_-15px_40px_rgba(0,0,0,0.04)] border-t border-gray-50 relative">
        
        {/* Back Button for OTP/Phone steps */}
        {step !== 'role' && (
          <button 
            onClick={() => setStep(step === 'otp' ? 'phone' : 'role')}
            className="absolute top-6 left-8 p-2 text-gray-400 hover:text-brand-red transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        )}

        <div className="w-full max-w-sm mx-auto space-y-6">
          
          {step === 'role' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-6">
                <h3 className="text-xl font-black text-gray-900">مرحباً بك في رفيق</h3>
                <p className="text-xs text-gray-400 font-medium mt-1">اختر نوع الحساب للمتابعة</p>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <button 
                  onClick={() => handleRoleSelect('customer')}
                  className="group flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-brand-red/30 transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <User size={24} />
                    </div>
                    <div className="text-right">
                      <span className="block font-bold text-gray-900 text-sm">حساب عميل</span>
                      <span className="block text-[10px] text-gray-400">أبحث عن خدمات لأليفي</span>
                    </div>
                  </div>
                  <ChevronLeft size={18} className="text-gray-200 group-hover:text-brand-red" />
                </button>

                <button 
                  onClick={() => handleRoleSelect('store')}
                  className="group flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-brand-red/30 transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Store size={24} />
                    </div>
                    <div className="text-right">
                      <span className="block font-bold text-gray-900 text-sm">صاحب متجر</span>
                      <span className="block text-[10px] text-gray-400">أريد عرض منتجاتي</span>
                    </div>
                  </div>
                  <ChevronLeft size={18} className="text-gray-200 group-hover:text-blue-500" />
                </button>

                <button 
                  onClick={() => handleRoleSelect('provider')}
                  className="group flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-brand-red/30 transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <Scissors size={24} />
                    </div>
                    <div className="text-right">
                      <span className="block font-bold text-gray-900 text-sm">مزود خدمة</span>
                      <span className="block text-[10px] text-gray-400">عيادات، تدريب، حلاقة</span>
                    </div>
                  </div>
                  <ChevronLeft size={18} className="text-gray-200 group-hover:text-purple-500" />
                </button>
              </div>

              <div className="pt-4 text-center">
                <button 
                  onClick={onLogin}
                  className="text-gray-400 text-xs font-bold hover:text-brand-red transition-colors underline decoration-dotted underline-offset-4"
                >
                  تسجيل الدخول كضيف
                </button>
              </div>
            </div>
          )}

          {step === 'phone' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="text-center">
                <h3 className="text-xl font-black text-gray-900">رقم الجوال</h3>
                <p className="text-xs text-gray-400 font-medium mt-1">سنقوم بإرسال كود التفعيل عبر الرسائل النصية</p>
              </div>
              
              <div className="relative group">
                <input
                  type="tel"
                  placeholder="5xxxxxxxx"
                  dir="ltr"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-red/20 rounded-2xl px-6 py-5 text-lg font-bold shadow-sm outline-none transition-all text-center tracking-widest"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  maxLength={9}
                />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 font-bold border-r border-gray-100 pr-4 mr-4 hidden sm:block">
                  +966
                </div>
                <Smartphone className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-red opacity-30 group-focus-within:opacity-100 transition-opacity" size={20} />
              </div>

              <button
                onClick={handleSendOTP}
                disabled={phone.length < 9}
                className="w-full h-14 bg-brand-red text-white rounded-2xl font-black text-lg shadow-xl shadow-red-200 hover:bg-brand-dark transition-all active:scale-[0.98] disabled:opacity-50 disabled:shadow-none"
              >
                إرسال الكود
              </button>
            </div>
          )}

          {step === 'otp' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="text-center">
                <h3 className="text-xl font-black text-gray-900">كود التحقق</h3>
                <p className="text-xs text-gray-400 font-medium mt-1">أدخل الكود المرسل إلى {phone}***</p>
              </div>

              <div className="flex justify-center gap-3" dir="ltr">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    inputMode="numeric"
                    className="w-14 h-16 bg-gray-50 border-2 border-transparent focus:border-brand-red/20 rounded-xl text-center text-2xl font-black shadow-sm outline-none transition-all"
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    maxLength={1}
                  />
                ))}
              </div>

              <div className="text-center space-y-4">
                <button
                  onClick={verifyOtp}
                  disabled={otp.some(v => v === '')}
                  className="w-full h-14 bg-brand-red text-white rounded-2xl font-black text-lg shadow-xl shadow-red-200 hover:bg-brand-dark transition-all active:scale-[0.98] disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
                >
                  <ShieldCheck size={20} />
                  تحقق ودخول
                </button>
                <button className="text-xs font-bold text-gray-400 hover:text-brand-red transition-colors">
                  إعادة إرسال الكود بعد 00:59
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Brand Label */}
        <div className="mt-8 text-center pb-2">
          <p className="text-[9px] text-gray-300 font-bold tracking-[0.3em] uppercase">رؤية رفيق - المملكة العربية السعودية</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;