import React, { useState } from 'react';
import { tools } from '../data/courseData';
import { 
  Wrench, 
  Sparkles, 
  Printer, 
  Copy, 
  Check, 
  HelpCircle, 
  ArrowRight,
  Sliders,
  CheckCircle2,
  Table,
  Compass,
  GitBranch,
  TrendingUp,
  Triangle,
  Filter
} from 'lucide-react';

export default function ToolsView() {
  const [selectedToolIndex, setSelectedToolIndex] = useState(1); // Default to Салыстыру матрицасы
  const [copied, setCopied] = useState(false);

  // Custom tool interactive inputs
  const [matrixData, setMatrixData] = useState({
    criteria1: 'Тариф / Бағасы',
    criteria2: 'Мерзімі / Көлемі',
    criteria3: 'Қосымша мүмкіндіктер',
    objA_name: 'А нысаны (Halyk)',
    objA_val1: '13.5% сыйақы',
    objA_val2: '12 ай мерзімге',
    objA_val3: 'Ішінара алу бар',
    objB_name: 'Б нысаны (Kaspi)',
    objB_val1: '14.0% сыйақы',
    objB_val2: '12 ай мерзімге',
    objB_val3: 'Кез келген сәтте алу',
    conclusion: 'Kaspi депозиті қысқа мерзімді қолма-қол ақша айналымы үшін ыңғайлырақ.'
  });

  const [compassData, setCompassData] = useState({
    issue: 'Қоғамдық көлік тарифін 100 ₸-ден 120 ₸-ге көтеру',
    userPerspective: 'Жолаушы/Тұтынушы: Күнделікті жол жүру шығыны артады, сапаның жақсаруын талап етеді.',
    businessPerspective: 'Тасымалдаушы парк: Жаңа автобустар сатып алуға, жанармай шығынын өтеуге мүмкіндік береді.',
    statePerspective: 'Мемлекет/Әкімдік: Субсидия көлемін азайтып, қаланың экологиялық таза көлігін дамытады.'
  });

  const [funnelSteps, setFunnelSteps] = useState([
    { step: '1. Жалпы идея', text: 'Мектеп асханасында тұтас емес мәтіндерді қолдану' },
    { step: '2. Сүзгілеу', text: 'Тағамдардың калориясы мен құрамын көрсететін инфографикалық мәзір жасау' },
    { step: '3. Нақты жоспар', text: 'Аспаздармен мәзірді келісу, QR-код арқылы визуалдау' },
    { step: '4. Өнім / Іске асыру', text: 'Асхана кіреберісіндегі ақпараттық стенд және оқушылар сауалнамасы' }
  ]);

  const activeTool = tools[selectedToolIndex] || tools[0];

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(
      `Әдістемелік құрал: ${activeTool.name}\nҚызметі: ${activeTool.purpose}\nМысалы: ${activeTool.example}`
    );
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>6-қосымша • Жүйелік ойлау технологиясы</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              КУРСТА ҚОЛДАНЫЛАТЫН 12 ӘДІСТЕМЕЛІК ҚҰРАЛ СТУДИЯСЫ
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Бұл құралдар оқушының ойлауын жүйелеп, кез келген тұтас емес мәтінді қадам-қадаммен талдап, дәлелді қорытынды жасауға жетелейді.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Көшірілді' : 'Сипаттамасын көшіру'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Басып шығару</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Tool List (Left) & Interactive Builder (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Tools Navigator */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-2 mb-2">
            Құралдар тізімі (12):
          </span>
          <div className="space-y-1.5 max-h-[700px] overflow-y-auto pr-1">
            {tools.map((t, idx) => {
              const isSelected = selectedToolIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedToolIndex(idx)}
                  className={`p-3.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm font-semibold'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                      isSelected ? 'bg-white text-blue-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {idx + 1}
                    </span>
                    <div>
                      <div className="font-bold text-xs leading-snug">{t.name}</div>
                      <div className={`text-[11px] line-clamp-1 mt-0.5 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                        {t.purpose}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Worksheet & Builder */}
        <div className="lg:col-span-8 space-y-6">
          {/* Active Tool Details */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  0{selectedToolIndex + 1}-Құрал
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">
                  «{activeTool.name}» әдісі
                </h3>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold">
                Интерактивті жұмыс парағы
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-500 block text-[11px] uppercase mb-1">
                  Дидактикалық қызметі:
                </span>
                <p className="text-slate-800 leading-relaxed font-medium">
                  {activeTool.purpose}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                <span className="font-bold text-blue-600 block text-[11px] uppercase mb-1">
                  Курста қолданылу мысалы:
                </span>
                <p className="text-slate-800 leading-relaxed font-medium">
                  {activeTool.example}
                </p>
              </div>
            </div>

            {/* --- INTERACTIVE BUILDER FOR SPECIFIC TOOLS --- */}
            {activeTool.name.includes('Салыстыру матрицасы') && (
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
                  <Table className="w-4 h-4 text-blue-600" />
                  Интерактивті салыстыру матрицасын толтыру:
                </h4>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-1/3">Салыстыру критерийі</th>
                        <th className="p-3 w-1/3">
                          <input
                            type="text"
                            value={matrixData.objA_name}
                            onChange={(e) => setMatrixData({ ...matrixData, objA_name: e.target.value })}
                            className="w-full p-1 bg-white border border-slate-300 rounded font-bold text-slate-900"
                          />
                        </th>
                        <th className="p-3 w-1/3">
                          <input
                            type="text"
                            value={matrixData.objB_name}
                            onChange={(e) => setMatrixData({ ...matrixData, objB_name: e.target.value })}
                            className="w-full p-1 bg-white border border-slate-300 rounded font-bold text-slate-900"
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-2.5">
                          <input
                            type="text"
                            value={matrixData.criteria1}
                            onChange={(e) => setMatrixData({ ...matrixData, criteria1: e.target.value })}
                            className="w-full p-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-semibold"
                          />
                        </td>
                        <td className="p-2.5">
                          <input
                            type="text"
                            value={matrixData.objA_val1}
                            onChange={(e) => setMatrixData({ ...matrixData, objA_val1: e.target.value })}
                            className="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"
                          />
                        </td>
                        <td className="p-2.5">
                          <input
                            type="text"
                            value={matrixData.objB_val1}
                            onChange={(e) => setMatrixData({ ...matrixData, objB_val1: e.target.value })}
                            className="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2.5">
                          <input
                            type="text"
                            value={matrixData.criteria2}
                            onChange={(e) => setMatrixData({ ...matrixData, criteria2: e.target.value })}
                            className="w-full p-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-semibold"
                          />
                        </td>
                        <td className="p-2.5">
                          <input
                            type="text"
                            value={matrixData.objA_val2}
                            onChange={(e) => setMatrixData({ ...matrixData, objA_val2: e.target.value })}
                            className="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"
                          />
                        </td>
                        <td className="p-2.5">
                          <input
                            type="text"
                            value={matrixData.objB_val2}
                            onChange={(e) => setMatrixData({ ...matrixData, objB_val2: e.target.value })}
                            className="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2.5">
                          <input
                            type="text"
                            value={matrixData.criteria3}
                            onChange={(e) => setMatrixData({ ...matrixData, criteria3: e.target.value })}
                            className="w-full p-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-semibold"
                          />
                        </td>
                        <td className="p-2.5">
                          <input
                            type="text"
                            value={matrixData.objA_val3}
                            onChange={(e) => setMatrixData({ ...matrixData, objA_val3: e.target.value })}
                            className="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"
                          />
                        </td>
                        <td className="p-2.5">
                          <input
                            type="text"
                            value={matrixData.objB_val3}
                            onChange={(e) => setMatrixData({ ...matrixData, objB_val3: e.target.value })}
                            className="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="block text-xs font-bold text-slate-700">
                    Матрица негізінде жасалған тұжырым (қорытынды):
                  </label>
                  <textarea
                    value={matrixData.conclusion}
                    onChange={(e) => setMatrixData({ ...matrixData, conclusion: e.target.value })}
                    rows={2}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {/* --- COMPASS TOOL --- */}
            {activeTool.name.includes('Компас') && (
              <div className="space-y-4 pt-4 border-t border-slate-200 text-xs">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Compass className="w-4 h-4 text-blue-600" />
                  «Компас» әдісімен тараптар мүддесін бағалау:
                </h4>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-500 block mb-1">Талқыланатын шешім:</span>
                  <input
                    type="text"
                    value={compassData.issue}
                    onChange={(e) => setCompassData({ ...compassData, issue: e.target.value })}
                    className="w-full p-2 bg-white border border-slate-300 rounded-lg font-bold text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2">
                    <span className="font-bold text-blue-900 block">1. Тұтынушы тарапынан:</span>
                    <textarea
                      value={compassData.userPerspective}
                      onChange={(e) => setCompassData({ ...compassData, userPerspective: e.target.value })}
                      rows={3}
                      className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200 space-y-2">
                    <span className="font-bold text-indigo-900 block">2. Кәсіпорын тарапынан:</span>
                    <textarea
                      value={compassData.businessPerspective}
                      onChange={(e) => setCompassData({ ...compassData, businessPerspective: e.target.value })}
                      rows={3}
                      className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                    <span className="font-bold text-emerald-900 block">3. Мемлекет тарапынан:</span>
                    <textarea
                      value={compassData.statePerspective}
                      onChange={(e) => setCompassData({ ...compassData, statePerspective: e.target.value })}
                      rows={3}
                      className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* --- FUNNEL TOOL --- */}
            {activeTool.name.includes('Жүзеге асыру құйғысы') && (
              <div className="space-y-4 pt-4 border-t border-slate-200 text-xs">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Filter className="w-4 h-4 text-blue-600" />
                  Идеяны өнімге дейін нақтылау құйғысы:
                </h4>

                <div className="space-y-2">
                  {funnelSteps.map((s, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50/30 flex items-center gap-4"
                      style={{ marginLeft: `${idx * 16}px`, marginRight: `${idx * 16}px` }}
                    >
                      <span className="font-bold text-blue-700 w-32 shrink-0">{s.step}</span>
                      <input
                        type="text"
                        value={s.text}
                        onChange={(e) => {
                          const copy = [...funnelSteps];
                          copy[idx].text = e.target.value;
                          setFunnelSteps(copy);
                        }}
                        className="flex-1 p-1.5 bg-white border border-slate-300 rounded text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* General Tool Template if no specific custom view */}
            {!activeTool.name.includes('Салыстыру матрицасы') && 
             !activeTool.name.includes('Компас') && 
             !activeTool.name.includes('Жүзеге асыру құйғысы') && (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-3">
                <span className="font-bold text-slate-900 uppercase tracking-wider block">
                  Жұмыс парағы шаблоны:
                </span>
                <p className="text-slate-600">
                  Бұл құралды сабақта оқушылар топтық немесе жеке форматта қолданады. Оқушы өз құжатынан деректерді алып, төмендегі өрістер бойынша құрылымдайды:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-700 block mb-1">1. Бастапқы мәліметтер:</span>
                    <span className="text-slate-500">Кестеден/сызбадан алынған негізгі сандар мен фактілер</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-700 block mb-1">2. Талдау бағыты:</span>
                    <span className="text-slate-500">Себеп-салдар немесе үрдісті анықтау сызбасы</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-700 block mb-1">3. Бағалау мен сараптама:</span>
                    <span className="text-slate-500">Деректердің сенімділігі мен маңыздылығы</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-700 block mb-1">4. Түпкілікті өнім:</span>
                    <span className="text-slate-500">5-6 сөйлемдік құрылымды аналитикалық мәтін</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
