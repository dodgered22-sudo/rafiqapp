
import React, { useState, useEffect } from 'react';
import { AppTab } from './types';
import Layout from './components/Layout';
import Home from './components/Home';
import Store from './components/Store';
import Medical from './components/Medical';
import Services from './components/Services';
import AIAssistant from './components/AIAssistant';
import Auth from './components/Auth';
import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowOnboarding(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (showOnboarding) {
    return <Onboarding onFinish={() => setShowOnboarding(false)} />;
  }

  if (!isAuthenticated) {
    return <Auth onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.HOME:
        return <Home setActiveTab={setActiveTab} />;
      case AppTab.STORE:
        return <Store />;
      case AppTab.MEDICAL:
        return <Medical />;
      case AppTab.SERVICES:
        return <Services />;
      case AppTab.AI_ASSISTANT:
        return <AIAssistant />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
    >
      <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;