import React from 'react';
import { 
  BookOpen, 
  Layers, 
  Cpu, 
  Wrench, 
  Award, 
  BarChart3, 
  FolderGit2, 
  BookmarkCheck, 
  CheckCircle2, 
  Printer, 
  GraduationCap,
  Sparkles,
  Search
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, userMode, setUserMode, searchQuery, setSearchQuery }) {
  const navItems = [
    { id: 'overview', label: 'Басты бет', icon: BookOpen },
    { id: 'lessons', label: '34 Сабақ (ҚМЖ)', icon: Layers, badge: '34 сағ' },
    { id: 'simulator', label: 'Мәтіндер зертханасы', icon: Cpu, badge: 'Интерактив' },
    { id: 'tools', label: '12 Әдістемелік құрал', icon: Wrench },
    { id: 'diagnostics', label: 'Диагностика & Тест', icon: Award },
    { id: 'monitoring', label: 'Мониторинг картасы', icon: BarChart3, teacherOnly: true },
    { id: 'portfolio', label: 'Жобалар & Портфолио', icon: FolderGit2 },
    { id: 'glossary', label: 'Глоссарий & Әдебиет', icon: BookmarkCheck },
    { id: 'approbation', label: 'Апробация & Сараптама', icon: CheckCircle2 }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-sky-900 text-white text-xs px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-blue-950 font-bold px-2 py-0.5 rounded text-[11px] tracking-wide uppercase">
            Авторлық бағдарлама
          </span>
          <span className="hidden sm:inline text-slate-200">
            «№290 орта мектебі» КММ • «Қазақ тілі» пәні бойынша таңдау курсы (9-сынып)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sky-200 font-medium flex items-center gap-1">
            <GraduationCap className="w-3.5 h-3.5" />
            Авторы: Аймыратова Гайнегүл Абдижанқызы
          </span>
          <div className="h-3 w-px bg-slate-600 hidden md:block"></div>
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.2 rounded text-[10px]">
            Педагог-зерттеуші
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo / Brand */}
          <div 
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="font-extrabold text-base tracking-tight text-slate-900 flex items-center gap-1.5">
                <span>ОҚУ САУАТТЫЛЫҒЫ</span>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">
                  9-СЫНЫП
                </span>
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Тұтас емес мәтіндерді талдау платформасы
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden lg:flex items-center relative flex-1 max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Сабақ немесе ұғымды іздеу..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 focus:bg-white text-xs text-slate-800 rounded-lg border border-transparent focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Controls: Mode Switcher & Print */}
          <div className="flex items-center gap-2">
            {/* Mode Switcher */}
            <div className="bg-slate-100 p-1 rounded-lg flex items-center text-xs font-semibold">
              <button
                onClick={() => setUserMode('student')}
                className={`px-3 py-1 rounded-md transition-all ${
                  userMode === 'student' 
                    ? 'bg-white text-blue-700 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Оқушы
              </button>
              <button
                onClick={() => setUserMode('teacher')}
                className={`px-3 py-1 rounded-md transition-all flex items-center gap-1 ${
                  userMode === 'teacher' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Мұғалім</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </button>
            </div>

            {/* Print button */}
            <button
              onClick={() => window.print()}
              title="Бетті басып шығару (PDF)"
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-slate-200"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Nav Tabs */}
        <nav className="flex space-x-1 overflow-x-auto pb-2 scrollbar-none border-t border-slate-100 pt-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-semibold shadow-xs border border-blue-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-blue-200/80 text-blue-800' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
                {item.teacherOnly && userMode === 'teacher' && (
                  <span className="text-[9px] bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-bold">
                    Педагог
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
