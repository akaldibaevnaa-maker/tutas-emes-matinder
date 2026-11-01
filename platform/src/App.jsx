import React, { useState } from 'react';
import Navbar from './components/Navbar';
import OverviewView from './components/OverviewView';
import CurriculumView from './components/CurriculumView';
import SimulatorView from './components/SimulatorView';
import ToolsView from './components/ToolsView';
import DiagnosticsView from './components/DiagnosticsView';
import MonitoringView from './components/MonitoringView';
import PortfolioView from './components/PortfolioView';
import GlossaryView from './components/GlossaryView';
import ApprobationView from './components/ApprobationView';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [userMode, setUserMode] = useState('student'); // 'student' | 'teacher'
  const [searchQuery, setSearchQuery] = useState('');

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewView setActiveTab={setActiveTab} />;
      case 'lessons':
        return <CurriculumView searchQuery={searchQuery} />;
      case 'simulator':
        return <SimulatorView />;
      case 'tools':
        return <ToolsView />;
      case 'diagnostics':
        return <DiagnosticsView />;
      case 'monitoring':
        return <MonitoringView />;
      case 'portfolio':
        return <PortfolioView />;
      case 'glossary':
        return <GlossaryView />;
      case 'approbation':
        return <ApprobationView />;
      default:
        return <OverviewView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userMode={userMode}
        setUserMode={setUserMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {renderActiveView()}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
