import React, { useState } from 'react';
import { projects } from '../data/courseData';
import { 
  FolderGit2, 
  Sparkles, 
  Printer, 
  CheckCircle, 
  FileText, 
  Lightbulb, 
  Send,
  Download,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PortfolioView() {
  const [selectedProject, setSelectedProject] = useState(projects[0]?.id || 1);
  const [studentName, setStudentName] = useState('');
  const [projectTitle, setProjectTitle] = useState(projects[0]?.title || '');
  const [researchGoal, setResearchGoal] = useState('Тұтас емес мәтіндерді талдау арқылы нақты деректерге негізделген шешім қабылдау.');
  const [dataSource, setDataSource] = useState('Ресми статистика, тұтынушылық түбіртектер мен өнім қаптамалары.');
  const [studentFindings, setStudentFindings] = useState('Жүргізілген талдау нәтижесінде деректер арасындағы тікелей себеп-салдарлық байланыс анықталды. Тұтынушы ретінде сапа мен баға арақатынасын сақтау үшін нақты матрица құрастырылды.');
  const [portfolioGenerated, setPortfolioGenerated] = useState(false);

  const handleSelectTopic = (proj) => {
    setSelectedProject(proj.id);
    setProjectTitle(proj.title);
  };

  const handleGeneratePortfolio = (e) => {
    e.preventDefault();
    setPortfolioGenerated(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>5-қосымша • Жобалық қызмет & Портфолио қорғау</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              ЖОБАЛЫҚ ЖҰМЫСТАР ЖӘНЕ ЦИФРЛЫҚ ПОРТФОЛИО
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Курс нәтижесі оқушының нақты өнімдерінен құралған жинақтаушы портфолионы қорғаумен аяқталады. Төменде 8 бекітілген зерттеу тақырыбы мен интерактивті портфолио генераторы берілген.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Портфолионы басып шығару</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid: 8 Project Topics */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 px-1">
          Бекітілген 8 зерттеу тақырыбы (5-қосымша):
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((p) => {
            const isSelected = selectedProject === p.id;
            return (
              <div
                key={p.id}
                onClick={() => handleSelectTopic(p)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/40 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-blue-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-black text-xs flex items-center justify-center">
                      №{p.id}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full">
                        Таңдалды
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs leading-snug mb-2">
                    {p.title}
                  </h4>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                  <span>Конструкторда ашу</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Digital Portfolio Builder Form */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-100 pb-4 mb-6">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Интерактивті генератор
          </span>
          <h3 className="text-xl font-black text-slate-900 mt-0.5">
            Оқушының цифрлық жобалық портфолиосын құрастыру
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Оқушының атын, дереккөздерін және аналитикалық қорытындысын енгізіп, дайын қорғау парағын алыңыз.
          </p>
        </div>

        <form onSubmit={handleGeneratePortfolio} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Оқушының аты-жөні:
              </label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Мысалы: Сейітқали Айдос (9 «А» сынып)"
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Зерттеу тақырыбы:
              </label>
              <input
                type="text"
                required
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-800 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Зерттеу мақсаты мен міндеттері:
              </label>
              <textarea
                rows={2}
                value={researchGoal}
                onChange={(e) => setResearchGoal(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Пайдаланылған тұтас емес мәтіндер мен дереккөздер:
              </label>
              <textarea
                rows={2}
                value={dataSource}
                onChange={(e) => setDataSource(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Деректерге сүйенген қорытынды және тұтынушылық ұсыныс:
            </label>
            <textarea
              rows={3}
              value={studentFindings}
              onChange={(e) => setStudentFindings(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 focus:outline-none focus:border-blue-500 leading-relaxed"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Портфолио парағын генерациялау</span>
            </button>
          </div>
        </form>

        {/* Generated Portfolio Preview */}
        {portfolioGenerated && (
          <div className="mt-8 pt-8 border-t-2 border-slate-200 space-y-6">
            <div className="p-8 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl border-2 border-blue-200 shadow-sm font-sans">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-blue-200 pb-6 mb-6">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-blue-700 uppercase">
                    ТАҢДАУ КУРСЫНЫҢ ШЫҒАРМАШЫЛЫҚ ПОРТФОЛИОСЫ
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    «{projectTitle}»
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    «Тұтас емес мәтіндер негізінде оқу сауаттылығын дамыту» авторлық курсы
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">Орындаған оқушы:</span>
                  <span className="text-base font-bold text-slate-900">
                    {studentName || 'Сейітқали Айдос'}
                  </span>
                  <span className="text-xs text-blue-600 block font-semibold mt-0.5">
                    9 «А» сынып, №290 орта мектебі
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 leading-relaxed mb-6">
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">Зерттеу мақсаты:</span>
                    <p>{researchGoal}</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">Талданған тұтас емес мәтіндер:</span>
                    <p>{dataSource}</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-blue-900 block mb-1">
                      Деректерге негізделген аналитикалық қорытынды:
                    </span>
                    <p className="text-slate-800 italic">{studentFindings}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Жетекшісі: Аймыратова Г.А.</span>
                    <span className="text-emerald-700 font-bold">Бағалау: Жоғары деңгей (Қорғалды)</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 no-print">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Басып шығару (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
