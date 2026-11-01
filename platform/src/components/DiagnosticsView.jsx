import React, { useState } from 'react';
import { rubric } from '../data/courseData';
import { 
  Award, 
  CheckCircle, 
  HelpCircle, 
  Clock, 
  Printer, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  RotateCcw,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DiagnosticsView() {
  const [activeTab, setActiveTab] = useState('quiz'); // quiz, diagnostic, rubric
  const [studentName, setStudentName] = useState('');
  
  // Interactive 10-Question Express Test
  const quizQuestions = [
    {
      id: 1,
      question: 'Тұтас емес мәтіннің негізгі ерекшелігі неде?',
      options: [
        'Үзіліссіз баяндалған көркем сөздерден тұрады',
        'Ақпарат кесте, диаграмма, сызба, инфографика немесе форма түрінде беріледі',
        'Тек қана поэзиялық ұйқастармен жазылады',
        'Абзацтар мен тараулардан ғана құралады'
      ],
      correct: 1,
      explanation: 'Тұтас емес мәтіндер ақпаратты сызба, кесте, диаграмма, таңбалау арқылы құрылымдап жеткізеді.'
    },
    {
      id: 2,
      question: 'Банк депозиттеріндегі «ЖТСМ (ГЭСВ)» көрсеткіші нені білдіреді?',
      options: [
        'Жылдық тиімді сыйақы мөлшерлемесі (нақты табыстылық)',
        'Банкке төленетін айыппұлдың көлемі',
        'Инфляцияның болжамды пайызы',
        'Мемлекеттік салық мөлшері'
      ],
      correct: 0,
      explanation: 'ЖТСМ – депозиттің барлық капитализациясы мен нақты табыстылығын есептейтін негізгі көрсеткіш.'
    },
    {
      id: 3,
      question: '«Сенімділік үшбұрышы» әдісінде ақпарат көзін қай 3 өлшем бойынша тексереді?',
      options: [
        'Түсі, көлемі, бағасы',
        'Автор, Мақсат, Дәлел',
        'Қаріп түрі, сайт дизайны, жазылушылар саны',
        'Қала, уақыт, ауа райы'
      ],
      correct: 1,
      explanation: 'Сенімділік үшбұрышы ақпаратты автордың мәртебесі, мақсаты және нақты дәлелдері арқылы тексереді.'
    },
    {
      id: 4,
      question: 'Қай құрал екі немесе одан көп нысанды ортақ критерийлер бойынша қатар қойып салыстыруға арналған?',
      options: [
        'Салыстыру матрицасы',
        'Себеп-салдарлық тұзақтар',
        'Жүзеге асыру құйғысы',
        'Түйіндеме'
      ],
      correct: 0,
      explanation: 'Салыстыру матрицасы нысандарды нақты критерийлермен салыстыруға арналған кесте.'
    },
    {
      id: 5,
      question: 'Азық-түлік қаптамасында «100 г шаққандағы калория» көрсетілген. Егер шоколад салмағы 50 г болса, тұтынушы қанша калория алады?',
      options: [
        '100 г көрсеткішінің дәл өзін',
        '100 г көрсеткішінен 2 есе көп',
        '100 г көрсеткішінің жартысын (екіден бірін)',
        'Калория есептелмейді'
      ],
      correct: 2,
      explanation: 'Өнім салмағы 50 г болғандықтан, 100 грамға көрсетілген санның тең жартысы есептеледі.'
    },
    {
      id: 6,
      question: 'Авиабилеттің «Жеңіл (Light)» тарифінің басты кемшілігі қандай болуы мүмкін?',
      options: [
        'Ұшаққа кіргізбейді',
        'Билет қайтарылмайды және тіркелетін багаж үшін бөлек төлеу қажет',
        'Рейс уақыты тек түнде болады',
        'Паспорт талап етілмейді'
      ],
      correct: 1,
      explanation: 'Лоукост/жеңіл тарифтерде багаж және билетті қайтару мүмкіндігі шектеулі болады.'
    },
    {
      id: 7,
      question: 'Коммуналдық төлемдер түбіртегінде тұтынылған электр қуатының нормадан асқан бөлігі қалай есептеледі?',
      options: [
        'Тегін беріледі',
        'Жоғарылатылған (2-деңгейлі) сараланған тариф бойынша',
        'Төленбейді',
        'Қоқыс тарифіне қосылады'
      ],
      correct: 1,
      explanation: 'Қазақстанда коммуналдық тарифтер базалық нормадан асқанда сараланған жоғары тарифпен есептеледі.'
    },
    {
      id: 8,
      question: 'Статистикалық графиктен деректердің өсу немесе төмендеу бағытын тану қалай аталады?',
      options: [
        'Үрдіс (тенденция) анықтау',
        'Иллюстрация',
        'Антиплагиат',
        'Глоссарий'
      ],
      correct: 0,
      explanation: 'Үрдіс (тенденция) – деректердің уақыт өте белгілі бір бағытта өзгеру заңдылығы.'
    },
    {
      id: 9,
      question: 'ЖОО гранттарын таңдағанда қай тұтас емес мәтін түрі ең маңызды ақпарат көзі болып табылады?',
      options: [
        'Өткен жылдардағы шекті баллдар мен квоталар кестесі',
        'Университет логотипінің суреті',
        'Студенттердің жеке парақшалары',
        'Ауа райы болжамы'
      ],
      correct: 0,
      explanation: 'Шекті баллдар мен бөлінген грант квоталары кестесі ҰБТ талапкеріне шешім қабылдауға мүмкіндік береді.'
    },
    {
      id: 10,
      question: 'PISA зерттеуіндегі оқу жетістігінің «Жоғары деңгейіне» сәйкес келетін балл аралығы:',
      options: [
        '0–3 балл',
        '4–6 балл',
        '7–8 балл',
        '100 балл'
      ],
      correct: 2,
      explanation: 'Бағдарламаның 2-қосымшасындағы рубрика бойынша: 7–8 балл – жоғары, 4–6 – орта, 0–3 – бастапқы деңгей.'
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers({ ...selectedAnswers, [qId]: optionIdx });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) {
        score += 1;
      }
    });
    return score;
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    const score = calculateScore();
    if (score >= 7) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const score = calculateScore();
  const getLevel = (s) => {
    if (s >= 8) return { level: 'ЖОҒАРЫ ДЕҢГЕЙ', color: 'text-emerald-700 bg-emerald-100 border-emerald-300' };
    if (s >= 5) return { level: 'ОРТА ДЕҢГЕЙ', color: 'text-blue-700 bg-blue-100 border-blue-300' };
    return { level: 'БАСТАПҚЫ ДЕҢГЕЙ', color: 'text-amber-700 bg-amber-100 border-amber-300' };
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>2-қосымша & 3-қосымша • Бағалау құралдары</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              ДИАГНОСТИКА ЖӘНЕ БАҒАЛАУ ОРТАЛЫҒЫ
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Кіріс және қорытынды бақылау, PISA форматындағы экспресс-тест, 4 бағыттық бағалау рубрикасы және оқушының дербес сертификаты.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl text-xs font-bold">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'quiz' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Экспресс-тест (10)
            </button>
            <button
              onClick={() => setActiveTab('diagnostic')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'diagnostic' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Диагностика үлгісі (3-қос)
            </button>
            <button
              onClick={() => setActiveTab('rubric')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'rubric' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Бағалау рубрикасы (2-қос)
            </button>
          </div>
        </div>
      </div>

      {/* --- TAB 1: EXPRESS QUIZ --- */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {/* User Name input for certificate */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-auto">
              <span className="font-bold text-xs text-slate-700 block mb-1">
                Білім алушының аты-жөні (Сертификатқа жазылады):
              </span>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Мысалы: Әбдірахманов Әли (9 «А» сынып)"
                className="w-full sm:w-80 px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold focus:outline-none focus:border-blue-500"
              />
            </div>
            {quizSubmitted && (
              <div className="flex items-center gap-3">
                <button
                  onClick={handleResetQuiz}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Қайта тапсыру</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Сертификатты басып шығару</span>
                </button>
              </div>
            )}
          </div>

          {/* Question Cards */}
          <div className="space-y-4">
            {quizQuestions.map((q, index) => {
              const isAnswered = selectedAnswers[q.id] !== undefined;
              const isCorrect = selectedAnswers[q.id] === q.correct;
              return (
                <div 
                  key={q.id}
                  className={`bg-white rounded-2xl p-6 border transition-all ${
                    quizSubmitted
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-rose-300 bg-rose-50/20'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-black shrink-0">
                        {index + 1}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm leading-snug">
                        {q.question}
                      </h4>
                    </div>
                    {quizSubmitted && (
                      <span className={`text-xs font-black px-2 py-0.5 rounded ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? '+1 балл' : '0 балл'}
                      </span>
                    )}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedAnswers[q.id] === optIdx;
                      let btnStyle = 'border-slate-200 hover:bg-slate-50 text-slate-700';
                      if (quizSubmitted) {
                        if (optIdx === q.correct) {
                          btnStyle = 'border-emerald-500 bg-emerald-100/70 text-emerald-900 font-bold';
                        } else if (isSelected && optIdx !== q.correct) {
                          btnStyle = 'border-rose-500 bg-rose-100/70 text-rose-900 line-through';
                        }
                      } else if (isSelected) {
                        btnStyle = 'border-blue-600 bg-blue-50 text-blue-900 font-bold shadow-xs';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={quizSubmitted}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          className={`p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 ${btnStyle}`}
                        >
                          <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="leading-relaxed">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs text-slate-600 leading-relaxed">
                      💡 <strong>Түсіндірме:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit / Results Panel */}
          {!quizSubmitted ? (
            <div className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Белгіленген сұрақтар: {Object.keys(selectedAnswers).length} / 10
              </span>
              <button
                onClick={handleQuizSubmit}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-md transition-all"
              >
                Тест нәтижесін есептеу
              </button>
            </div>
          ) : (
            <div className="p-8 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Қорытынды бағалау нәтижесі:
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mt-1">
                    {studentName ? studentName : 'Білім алушы'}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-lg font-bold text-sky-300">
                      Жинаған ұпайы: {score} / 10
                    </span>
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${getLevel(score).color}`}>
                      {getLevel(score).level}
                    </span>
                  </div>
                </div>

                <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-black text-amber-300">{Math.round((score / 10) * 100)}%</span>
                  <span className="text-[10px] text-slate-300 uppercase">Сауаттылық</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed">
                {score >= 8
                  ? 'Тамаша нәтиже! Оқушы тұтас емес мәтіндерді (кесте, диаграмма, шарттар) еркін оқып, үрдістерді анықтап, шешім қабылдай алады.'
                  : score >= 5
                  ? 'Жақсы! Негізгі дағдылар қалыптасқан. Дегенмен күрделірек құжаттармен және дереккөз сенімділігін сараптаумен қосымша жұмыс істеу ұсынылады.'
                  : 'Бастапқы деңгей. 1-сабақтан бастап салыстыру матрицасы мен құрамдас бөліктерді ажырату құралдарын қайта қарап шығу қажет.'}
              </div>
            </div>
          )}
        </div>
      )}

      {/* --- TAB 2: DIAGNOSTIC SAMPLE (3-қосымша) --- */}
      {activeTab === 'diagnostic' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">3-қосымша</span>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">
              Кіріс және қорытынды диагностика тапсырмаларының үлгісі
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Орындау уақыты: 25 минут. Бағалау: 2-қосымшадағы рубрика бойынша (барлығы 8 балл).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: 1,
                crit: '1-критерий: Деректі оқу және түсіну (2 балл)',
                task: 'Берілген кестені оқып, көрсетілген үш көрсеткішті жазыңыз және олардың нені білдіретінін бір сөйлеммен түсіндіріңіз.',
                example: 'Мысалы: 2026 жылғы банк депозитінің мөлшерлемесі, ең аз салымы және сақтау мерзімі.'
              },
              {
                num: 2,
                crit: '2-критерий: Салыстыру және үрдісті анықтау (2 балл)',
                task: 'Екі диаграмманы салыстырып, өзіңіз анықтаған критерийлер бойынша ұқсастық пен айырмашылықты кестеге түсіріңіз. Байқалған үрдісті (өсу/төмендеу/тұрақтылық) бір сөйлеммен тұжырымдаңыз.',
                example: 'Мысалы: Соңғы 3 жылдағы коммуналдық тариф немесе жалақы статистикасы динамикасы.'
              },
              {
                num: 3,
                crit: '3-критерий: Дереккөзді бағалау және дәлелдеу (2 балл)',
                task: 'Берілген екі ақпарат көзінің қайсысы сенімдірек екенін анықтаңыз. Жауабыңызды кемінде екі дәлелмен негіздеңіз.',
                example: 'Мысалы: Ресми egov.kz порталы мен Telegram арнадағы жарнамалық хабарламаны салыстыру.'
              },
              {
                num: 4,
                crit: '4-критерий: Визуалдау және құрылымды мәтін жазу (2 балл)',
                task: 'Мәтінде берілген деректер негізінде кесте немесе диаграмма құрастырып, 4–5 сөйлемнен тұратын құрылымды қорытынды жазыңыз.',
                example: 'Мысалы: Тұтынушылық тауарлар бағасы бойынша салыстыру кестесін жасау.'
              }
            ].map((t) => (
              <div key={t.num} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                    {t.num}
                  </span>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                    {t.crit}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs mt-2">{t.task}</h4>
                <p className="text-[11px] text-slate-500 italic">{t.example}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- TAB 3: RUBRIC (2-қосымша) --- */}
      {activeTab === 'rubric' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">2-қосымша</span>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">
              Оқу жетістіктерін бағалаудың жалпы рубрикасы
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Бағалау критерийлері 0–2 балдық шкала бойынша жүргізіледі.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5 w-1/4">Критерий</th>
                  <th className="p-3.5 w-1/4 text-rose-800 bg-rose-50/50">0 балл (Бастапқы)</th>
                  <th className="p-3.5 w-1/4 text-blue-800 bg-blue-50/50">1 балл (Орта)</th>
                  <th className="p-3.5 w-1/4 text-emerald-800 bg-emerald-50/50">2 балл (Жоғары)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rubric.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900">{r.criteria}</td>
                    <td className="p-3.5 text-slate-600 bg-rose-50/10">{r.score0}</td>
                    <td className="p-3.5 text-slate-600 bg-blue-50/10">{r.score1}</td>
                    <td className="p-3.5 font-medium text-slate-800 bg-emerald-50/10">{r.score2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-bold text-slate-700">Деңгейлерге ауыстыру шкаласы:</span>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg font-bold">
                7–8 балл: Жоғары деңгей
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg font-bold">
                4–6 балл: Орта деңгей
              </span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-lg font-bold">
                0–3 балл: Бастапқы деңгей
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
