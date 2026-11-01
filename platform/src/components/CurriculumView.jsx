import React, { useState } from 'react';
import { lessons, modules } from '../data/courseData';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Clock, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  X, 
  Printer, 
  FileText, 
  CheckCircle2, 
  ExternalLink,
  Target,
  Sparkles,
  Layers,
  Copy,
  Check
} from 'lucide-react';

export default function CurriculumView({ searchQuery }) {
  const [selectedModule, setSelectedModule] = useState(0); // 0 = all
  const [activeLesson, setActiveLesson] = useState(null);
  const [filterText, setFilterText] = useState(searchQuery || '');
  const [copied, setCopied] = useState(false);

  const handlePrevLesson = () => {
    if (!activeLesson) return;
    const prevIdx = lessons.findIndex(l => l.number === activeLesson.number) - 1;
    if (prevIdx >= 0) setActiveLesson(lessons[prevIdx]);
  };

  const handleNextLesson = () => {
    if (!activeLesson) return;
    const nextIdx = lessons.findIndex(l => l.number === activeLesson.number) + 1;
    if (nextIdx < lessons.length) setActiveLesson(lessons[nextIdx]);
  };

  const handleCopyLessonPlan = () => {
    if (!activeLesson) return;
    const text = `№ ${activeLesson.number} САБАҚ
Бөлім\t${activeLesson.section}
Педагогтің аты-жөні\t${activeLesson.teacher || 'Аймыратова Гайнегүл Абдижанқызы'}
Күні\t${activeLesson.date || '«____» ______________ 20____ ж.'}
Сынып\t${activeLesson.grade || '9-сынып.  Қатысушылар саны: ______   Қатыспағандар саны: ______'}
Сабақтың тақырыбы\t${activeLesson.title}
Оқу бағдарламасына сәйкес оқу мақсаты\t${activeLesson.curriculum_obj}
Курстың оқу мақсаты\t${activeLesson.course_obj}
Сабақтың мақсаты\t${activeLesson.goal}
Сабақтың күтілетін өнімі\t${activeLesson.expected_product}
Сабақтың жүру барысы:
Сабақ кезеңі / Уақыты\tМұғалімнің іс-әрекеттері\tОқушылардың іс-әрекеттері\tБағалау\tРесурстар
${(activeLesson.procedure || []).map(p => `${p.stage}\t${p.teacher_actions.replace(/\\n\\n/g, '\\n')}\t${p.student_actions}\t${p.assessment}\t${p.resources}`).join('\n')}
Ресурстар\t${activeLesson.resources}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredLessons = lessons.filter(l => {
    const matchesModule = selectedModule === 0 || l.moduleId === selectedModule;
    const query = (filterText || searchQuery || '').toLowerCase();
    const matchesQuery = !query || 
      l.title.toLowerCase().includes(query) || 
      l.number.toString().includes(query) ||
      (l.expected_product && l.expected_product.toLowerCase().includes(query)) ||
      (l.course_obj && l.course_obj.toLowerCase().includes(query));
    return matchesModule && matchesQuery;
  });

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>ҚР БҒМ №130 бұйрығы негізінде</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              34 САБАҚТЫҢ КҮНТІЗБЕЛІК-ТАҚЫРЫПТЫҚ ЖОСПАРЫ МЕН ҚМЖ
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Әр сабақтың оқу мақсаттары, дескрипторлары, жүйелік ойлау әдістері және нақты өнім талаптары толық қамтылған.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-slate-100 text-slate-700 font-bold px-3 py-1.5 rounded-lg border border-slate-200">
              Барлығы: 34 сабақ
            </span>
            <button
              onClick={() => window.print()}
              className="text-xs font-semibold px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-1.5 shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Басып шығару</span>
            </button>
          </div>
        </div>

        {/* Module Filters & Search */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedModule(0)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                selectedModule === 0
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Барлық бөлімдер (34)
            </button>
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedModule(m.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedModule === m.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                0{m.id}-бөлім ({m.hours} сағ)
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Сабақ тақырыбы бойынша іздеу..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Lesson Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLessons.map((l) => (
          <div
            key={l.number}
            onClick={() => setActiveLesson(l)}
            className="bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-black text-xs flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  №{l.number}
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  {l.moduleName}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                {l.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                {l.goal ? l.goal.split('\n')[0] : 'Тұтас емес мәтіндерді талдау және салыстыру'}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px]">
                {l.expected_product ? l.expected_product.slice(0, 24) + '...' : 'Өнім әзірлеу'}
              </span>
              <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>ҚМЖ көру</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Lesson Modal (Full QMZ Plan) */}
      {activeLesson && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 no-print">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-900 via-indigo-900 to-indigo-950 text-white flex items-center justify-between shrink-0">
              <div className="pr-4">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="bg-amber-400 text-blue-950 text-xs font-black px-2.5 py-0.5 rounded-full shadow-xs">
                    № {activeLesson.number} САБАҚ ЖОСПАРЫ (ҚМЖ)
                  </span>
                  <span className="text-xs text-sky-200 font-medium hidden sm:inline">
                    {activeLesson.section || activeLesson.moduleName}
                  </span>
                </div>
                <h3 className="text-base sm:text-xl font-bold leading-tight">
                  {activeLesson.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <div className="flex items-center bg-white/10 rounded-xl p-0.5 border border-white/10 mr-1">
                  <button
                    onClick={handlePrevLesson}
                    disabled={activeLesson.number <= 1}
                    className="p-1.5 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                    title="Алдыңғы сабаққа өту"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-bold px-2 text-sky-200">
                    {activeLesson.number}/{lessons.length}
                  </span>
                  <button
                    onClick={handleNextLesson}
                    disabled={activeLesson.number >= lessons.length}
                    className="p-1.5 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                    title="Келесі сабаққа өту"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleCopyLessonPlan}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                    copied 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                  title="ҚМЖ мәтінін толық көшіріп алу"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-200" />
                      <span>Көшірілді!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden md:inline">ҚМЖ көшіру</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => window.print()}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                  title="Басып шығару (Печать)"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveLesson(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                  title="Жабу"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 text-xs sm:text-[13px] text-slate-800 leading-relaxed">
              
              {/* Document Banner */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                    Қысқа мерзімді сабақ жоспары (ҚМЖ)
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900">
                    № {activeLesson.number} САБАҚ
                  </h4>
                </div>
                <div className="text-right text-[11px] text-slate-500">
                  <span>9-сынып • 1 сағат (40 минут)</span>
                </div>
              </div>

              {/* 1. Official Header Table (Паспорт урока) */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-2xs">
                <table className="w-full text-xs sm:text-[13px] text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="w-1/3 sm:w-1/4 p-2.5 sm:p-3 font-bold bg-slate-50 text-slate-700 border-r border-slate-300 align-top">
                        Бөлім
                      </td>
                      <td className="p-2.5 sm:p-3 font-semibold text-slate-900">
                        {activeLesson.section}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 sm:p-3 font-bold bg-slate-50 text-slate-700 border-r border-slate-300 align-top">
                        Педагогтің аты-жөні
                      </td>
                      <td className="p-2.5 sm:p-3 font-semibold text-slate-900">
                        {activeLesson.teacher || 'Аймыратова Гайнегүл Абдижанқызы'}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 sm:p-3 font-bold bg-slate-50 text-slate-700 border-r border-slate-300 align-top">
                        Күні
                      </td>
                      <td className="p-2.5 sm:p-3 text-slate-800">
                        {activeLesson.date || '«____» ______________ 20____ ж.'}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 sm:p-3 font-bold bg-slate-50 text-slate-700 border-r border-slate-300 align-top">
                        Сынып
                      </td>
                      <td className="p-2.5 sm:p-3 text-slate-800">
                        {activeLesson.grade || '9-сынып.  Қатысушылар саны: ______   Қатыспағандар саны: ______'}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 sm:p-3 font-bold bg-slate-50 text-slate-700 border-r border-slate-300 align-top">
                        Сабақтың тақырыбы
                      </td>
                      <td className="p-2.5 sm:p-3 font-bold text-blue-950 text-sm">
                        {activeLesson.title}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 sm:p-3 font-bold bg-slate-50 text-slate-700 border-r border-slate-300 align-top">
                        Оқу бағдарламасына сәйкес оқу мақсаты
                      </td>
                      <td className="p-2.5 sm:p-3 text-slate-800 whitespace-pre-line leading-relaxed">
                        {activeLesson.curriculum_obj}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 sm:p-3 font-bold bg-slate-50 text-slate-700 border-r border-slate-300 align-top">
                        Курстың оқу мақсаты
                      </td>
                      <td className="p-2.5 sm:p-3 font-bold text-blue-700">
                        {activeLesson.course_obj}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 sm:p-3 font-bold bg-slate-50 text-slate-700 border-r border-slate-300 align-top">
                        Сабақтың мақсаты
                      </td>
                      <td className="p-2.5 sm:p-3 text-slate-800 whitespace-pre-line leading-relaxed font-medium">
                        {activeLesson.goal}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2.5 sm:p-3 font-bold bg-slate-50 text-slate-700 border-r border-slate-300 align-top">
                        Сабақтың күтілетін өнімі
                      </td>
                      <td className="p-2.5 sm:p-3 font-semibold text-amber-900 bg-amber-50/60">
                        {activeLesson.expected_product}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 2. Official Procedure Section (Сабақтың жүру барысы кестесі) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wide flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Сабақтың жүру барысы:</span>
                  </h4>
                  <span className="text-[11px] text-slate-500 font-semibold bg-slate-100 px-2.5 py-0.5 rounded-full">
                    5 бағанды ресми құрылым
                  </span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-2xs">
                  <table className="w-full text-xs text-left border-collapse min-w-[760px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold border-b border-slate-300">
                        <th className="p-3 w-[15%] border-r border-slate-700 uppercase tracking-wider text-[11px]">
                          Сабақ кезеңі / Уақыты
                        </th>
                        <th className="p-3 w-[33%] border-r border-slate-700 uppercase tracking-wider text-[11px]">
                          Мұғалімнің іс-әрекеттері
                        </th>
                        <th className="p-3 w-[20%] border-r border-slate-700 uppercase tracking-wider text-[11px]">
                          Оқушылардың іс-әрекеттері
                        </th>
                        <th className="p-3 w-[18%] border-r border-slate-700 uppercase tracking-wider text-[11px]">
                          Бағалау
                        </th>
                        <th className="p-3 w-[14%] uppercase tracking-wider text-[11px]">
                          Ресурстар
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {activeLesson.procedure && activeLesson.procedure.length > 0 ? (
                        activeLesson.procedure.map((step, idx) => (
                          <tr 
                            key={idx} 
                            className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50/60' : 'bg-slate-50/40 hover:bg-slate-100/60'}
                          >
                            <td className="p-3 border-r border-slate-300 align-top font-bold text-slate-900 bg-slate-50/80">
                              <div className="text-slate-950 font-bold">{step.stageTitle || step.stage}</div>
                              {step.stageTime && (
                                <span className="inline-block mt-1.5 px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-semibold text-[10px]">
                                  {step.stageTime}
                                </span>
                              )}
                            </td>
                            <td className="p-3 border-r border-slate-300 align-top text-slate-800 whitespace-pre-line leading-relaxed font-normal">
                              {step.teacher_actions}
                            </td>
                            <td className="p-3 border-r border-slate-300 align-top text-slate-800 whitespace-pre-line leading-relaxed">
                              {step.student_actions}
                            </td>
                            <td className="p-3 border-r border-slate-300 align-top text-slate-800 whitespace-pre-line leading-relaxed bg-amber-50/30">
                              {step.assessment}
                            </td>
                            <td className="p-3 align-top text-slate-700 whitespace-pre-line leading-relaxed">
                              {step.resources}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="p-4 text-center text-slate-500">
                            ҚМЖ деректері жүктелуде...
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. General Resources & Notes */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-1">
                    Ресурстар мен дереккөздер:
                  </span>
                  <span className="text-slate-700">
                    {activeLesson.resources || 'Депозит шарттары кестесі, пайыздық мөлшерлеме диаграммасы, жұмыс парағы, nationalbank.kz материалдары'}
                  </span>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  onClick={handlePrevLesson}
                  disabled={activeLesson.number <= 1}
                  className="px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-xs rounded-xl border border-slate-300 transition-colors flex items-center gap-1 shadow-2xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Алдыңғы сабақ</span>
                </button>
                <button
                  onClick={handleNextLesson}
                  disabled={activeLesson.number >= lessons.length}
                  className="px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-xs rounded-xl border border-slate-300 transition-colors flex items-center gap-1 shadow-2xs"
                >
                  <span>Келесі сабақ</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={handleCopyLessonPlan}
                  className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs rounded-xl border border-blue-200 transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Көшірілді!' : 'ҚМЖ-ны көшіру'}</span>
                </button>
                <button
                  onClick={() => setActiveLesson(null)}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors shadow-xs"
                >
                  Жабу
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
