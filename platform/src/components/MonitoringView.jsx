import React, { useState } from 'react';
import { initialStudents } from '../data/courseData';
import { 
  BarChart3, 
  UserPlus, 
  Printer, 
  TrendingUp, 
  CheckCircle, 
  Trash2, 
  Award,
  Layers,
  Sparkles
} from 'lucide-react';

export default function MonitoringView() {
  const [students, setStudents] = useState(initialStudents);
  const [activeStage, setActiveStage] = useState('post'); // pre, mid, post
  const [newStudentName, setNewStudentName] = useState('');

  const calculateTotal = (scores) => scores.reduce((a, b) => a + b, 0);

  const getLevel = (total) => {
    if (total >= 7) return { text: 'Жоғары', color: 'bg-emerald-100 text-emerald-800' };
    if (total >= 4) return { text: 'Орта', color: 'bg-blue-100 text-blue-800' };
    return { text: 'Бастапқы', color: 'bg-amber-100 text-amber-800' };
  };

  const handleScoreChange = (studentId, criterionIdx, newScore) => {
    setStudents(students.map(s => {
      if (s.id === studentId) {
        const copyStage = [...s[activeStage]];
        copyStage[criterionIdx] = Number(newScore);
        return { ...s, [activeStage]: copyStage };
      }
      return s;
    }));
  };

  const handleAddStudent = () => {
    if (!newStudentName.trim()) return;
    const newStudent = {
      id: Date.now(),
      name: newStudentName.trim(),
      pre: [1, 0, 0, 1],
      mid: [1, 1, 1, 1],
      post: [2, 2, 1, 2]
    };
    setStudents([...students, newStudent]);
    setNewStudentName('');
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  // Class Statistics
  const getStageAverage = (stage) => {
    if (students.length === 0) return 0;
    const sum = students.reduce((acc, s) => acc + calculateTotal(s[stage]), 0);
    return (sum / students.length).toFixed(1);
  };

  const preAvg = getStageAverage('pre');
  const midAvg = getStageAverage('mid');
  const postAvg = getStageAverage('post');

  // Percentage of High level in post
  const highLevelCount = students.filter(s => calculateTotal(s.post) >= 7).length;
  const qualityRate = Math.round((highLevelCount / (students.length || 1)) * 100);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>4-қосымша • Педагогтің бақылау парағы</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              ОҚУШЫ ЖЕТІСТІКТЕРІНІҢ ЭЛЕКТРОНДЫҚ МОНИТОРИНГ КАРТАСЫ
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              «№290 орта мектебі» КММ 9 «А» сынып оқушыларының кіріс, аралық және қорытынды диагностика көрсеткіштері мен оқу сауаттылығы динамикасы.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Картаны басып шығару</span>
            </button>
          </div>
        </div>

        {/* Dynamic Growth Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block mb-1">Кіріс диагностикасы:</span>
            <div className="text-2xl font-black text-slate-800">{preAvg} / 8 балл</div>
            <span className="text-[10px] text-slate-400">Курс басындағы орташа балл</span>
          </div>
          <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200">
            <span className="text-blue-600 block mb-1 font-semibold">Аралық бақылау (ІІ бөлім):</span>
            <div className="text-2xl font-black text-blue-800">{midAvg} / 8 балл</div>
            <span className="text-[10px] text-blue-600">Орташа деңгейге көтерілу</span>
          </div>
          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200">
            <span className="text-emerald-700 block mb-1 font-semibold">Қорытынды диагностика:</span>
            <div className="text-2xl font-black text-emerald-800">{postAvg} / 8 балл</div>
            <span className="text-[10px] text-emerald-600">Жоғары нәтижелік өсім (+{Math.round(((postAvg - preAvg) / preAvg) * 100)}%)</span>
          </div>
          <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-200">
            <span className="text-purple-700 block mb-1 font-semibold">Білім сапасы (Жоғары):</span>
            <div className="text-2xl font-black text-purple-800">{qualityRate}%</div>
            <span className="text-[10px] text-purple-600">Оқушылардың {highLevelCount}-і жоғары деңгейде</span>
          </div>
        </div>
      </div>

      {/* Main Monitoring Table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Stage Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl text-xs font-bold w-full sm:w-auto">
            <button
              onClick={() => setActiveStage('pre')}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg transition-all ${
                activeStage === 'pre' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Кіріс диагностикасы
            </button>
            <button
              onClick={() => setActiveStage('mid')}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg transition-all ${
                activeStage === 'mid' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Аралық бақылау
            </button>
            <button
              onClick={() => setActiveStage('post')}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg transition-all ${
                activeStage === 'post' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Қорытынды диагностика
            </button>
          </div>

          {/* Add Student */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              placeholder="Жаңа оқушы Т.А.Ә..."
              className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:outline-none focus:border-blue-500 w-full sm:w-56"
            />
            <button
              onClick={handleAddStudent}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shrink-0 transition-colors"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Қосу</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3 w-10 text-center">№</th>
                <th className="p-3">Білім алушының Т.А.Ә.</th>
                <th className="p-3 text-center">1-критерий (0–2)<br /><span className="text-[10px] font-normal text-slate-500">Деректі оқу</span></th>
                <th className="p-3 text-center">2-критерий (0–2)<br /><span className="text-[10px] font-normal text-slate-500">Салыстыру</span></th>
                <th className="p-3 text-center">3-критерий (0–2)<br /><span className="text-[10px] font-normal text-slate-500">Дереккөз</span></th>
                <th className="p-3 text-center">4-критерий (0–2)<br /><span className="text-[10px] font-normal text-slate-500">Визуалдау</span></th>
                <th className="p-3 text-center bg-blue-50/50">Жалпы балл (8)</th>
                <th className="p-3 text-center">Деңгейі</th>
                <th className="p-3 text-center no-print">Әрекет</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((s, idx) => {
                const total = calculateTotal(s[activeStage]);
                const lvl = getLevel(total);
                return (
                  <tr key={s.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3 text-center font-bold text-slate-400">{idx + 1}</td>
                    <td className="p-3 font-bold text-slate-900">{s.name}</td>
                    {[0, 1, 2, 3].map((critIdx) => (
                      <td key={critIdx} className="p-3 text-center">
                        <select
                          value={s[activeStage][critIdx]}
                          onChange={(e) => handleScoreChange(s.id, critIdx, e.target.value)}
                          className="px-2 py-1 bg-white border border-slate-300 rounded font-bold text-slate-800 text-xs"
                        >
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                        </select>
                      </td>
                    ))}
                    <td className="p-3 text-center font-black text-blue-800 bg-blue-50/30 text-sm">
                      {total}
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${lvl.color}`}>
                        {lvl.text}
                      </span>
                    </td>
                    <td className="p-3 text-center no-print">
                      <button
                        onClick={() => handleDeleteStudent(s.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                        title="Жою"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="text-[11px] text-slate-500 leading-relaxed pt-2">
          * Ескертпе: Мониторинг картасы оқушының курстағы жеке ілгерілеуін қалыптастырушы бағалау арқылы тіркейді. Деректерді жергілікті өзгертіп, есеп беру кезінде басып шығаруға болады.
        </div>
      </div>
    </div>
  );
}
