import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import Marketplace from "@/components/Marketplace";
import MyFarm from "@/components/MyFarm";
import GovernmentSchemes from "@/components/GovernmentSchemes";
import LoanSuggestions from "@/components/LoanSuggestions";
import Profile from "@/components/Profile";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'marketplace':
        return <Marketplace />;
      case 'myfarm':
        return <MyFarm />;
      case 'schemes':
        return <GovernmentSchemes />;
      case 'loans':
        return <LoanSuggestions />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {renderView()}
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
    </div>
  );
};

export default Index;