
import React, { useState, useRef, useEffect } from 'react';
import { Send, Rabbit, Bot, User, Sparkles, RefreshCcw } from 'lucide-react';
import { getPetAdvice } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'مرحباً! أنا "رفيق" مساعدك الذكي لرعاية حيواناتك الأليفة. يسعدني جداً مساعدتك في العثور على أفضل المنتجات والخدمات لأليفك اليوم! 🐾✨', timestamp: new Date() },
    { role: 'model', text: 'لأتمكن من تقديم أفضل التوصيات لك، أخبرني من فضلك: ما هو نوع أليفك (قطة، كلب، إلخ)؟ وما هو عمره تقريباً؟ وما الذي تبحث عنه اليوم؟', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const response = await getPetAdvice(input, history);
    
    const botMessage: Message = { role: 'model', text: response, timestamp: new Date() };
    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const resetChat = () => {
    setMessages([
      { role: 'model', text: 'مرحباً مجدداً! كيف يمكنني مساعدتك اليوم؟ أنا جاهز لاقتراح أفضل المتاجر والخدمات لأليفك.', timestamp: new Date() },
      { role: 'model', text: 'ما نوع أليفك وما الذي يحتاجه الآن؟', timestamp: new Date() }
    ]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-14rem)] md:h-[calc(100vh-8rem)] bg-white rounded-4xl soft-shadow overflow-hidden border border-gray-50 relative">
      <div className="bg-white p-5 border-b border-gray-50 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="bg-brand-soft-orange p-2.5 rounded-2xl text-brand-orange relative">
            <Sparkles size={20} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-black text-gray-900 text-sm">مستشار رفيق الذكي</h3>
            <p className="text-[10px] text-gray-400 font-bold">يساعدك في اختيار الأفضل لأليفك</p>
          </div>
        </div>
        <button 
          onClick={resetChat}
          className="p-2 text-gray-400 hover:text-brand-orange transition-colors"
          title="بدء محادثة جديدة"
        >
          <RefreshCcw size={18} />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-5 space-y-6 bg-gray-50/20 no-scrollbar pb-10"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
            <div className={`flex gap-3 max-w-[88%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform active:scale-90 ${
                msg.role === 'user' ? 'bg-brand-soft text-brand-red' : 'bg-brand-orange text-white'
              }`}>
                {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>
              <div className={`p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-brand-red text-white rounded-tr-none shadow-orange-100' 
                : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 rounded-tl-none flex items-center gap-3">
              <div className="w-6 h-6 bg-brand-soft-orange rounded-lg flex items-center justify-center animate-pulse">
                <Rabbit size={14} className="text-brand-orange" />
              </div>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-brand-orange/30 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-brand-orange/60 rounded-full animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-5 bg-white border-t border-gray-50 sticky bottom-0">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="أخبرني عن أليفك... (مثال: قطة شيرازي عمرها سنة)"
            className="flex-1 bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-soft-orange transition-all text-gray-900 placeholder:text-gray-400 font-medium"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="bg-brand-orange text-white p-4 rounded-2xl hover:bg-brand-dark transition-all disabled:opacity-50 shadow-xl shadow-orange-100 active:scale-95"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;