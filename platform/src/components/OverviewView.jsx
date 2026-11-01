import React from 'react';
import { 
  courseMeta, 
  modules, 
  tools 
} from '../data/courseData';
import { 
  Sparkles, 
  CheckCircle, 
  BookOpen, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  ArrowRight, 
  GraduationCap, 
  School, 
  Clock, 
  Users, 
  Award,
  FileText,
  TrendingUp,
  Cpu,
  Layers
} from 'lucide-react';

export default function OverviewView({ setActiveTab }) {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-8 sm:p-12 shadow-2xl border border-blue-900/40">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Қазақстан Республикасы білім беру стандартына сәйкес</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
            ТҰТАС ЕМЕС МӘТІНДЕР НЕГІЗІНДЕ <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300">ОҚУ САУАТТЫЛЫҒЫН ДАМЫТУ</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
            9-сынып оқушыларының кесте, диаграмма, инфографика, түбіртек, банк және тұтынушылық келісімшарттармен жұмыс істеу дағдыларын қалыптастыруға арналған авторлық таңдау курсының цифрлық платформасы.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">34 сағат</div>
              <div className="text-xs text-slate-400 mt-1">4 сағат теория, 30 сағат практика</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">4 сала</div>
              <div className="text-xs text-slate-400 mt-1">Қаржы, Тұрмыс, Мансап, Қоғам</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">12 құрал</div>
              <div className="text-xs text-slate-400 mt-1">Жүйелік ойлау & талдау құралдары</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">100%</div>
              <div className="text-xs text-slate-400 mt-1">Апробациядан өткен әдістеме</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveTab('simulator')}
              className="px-6 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 group"
            >
              <Cpu className="w-4 h-4 text-amber-300" />
              <span>Мәтіндер зертханасына өту</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setActiveTab('lessons')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-xl border border-white/15 transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4" />
              <span>34 Сабақ жоспарын көру (ҚМЖ)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Author Card & Educational Profile */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-100 pb-6 mb-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-md">
              АГ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900">{courseMeta.author}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full">
                  {courseMeta.authorRole}
                </span>
              </div>
              <p className="text-sm text-slate-600 flex items-center gap-1.5 mt-1">
                <School className="w-4 h-4 text-blue-600" />
                <span>{courseMeta.school}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {courseMeta.schedule}
            </span>
            <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg font-medium flex items-center gap-1 border border-emerald-200/60">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              {courseMeta.grade}
            </span>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div>
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-4">
            Авторлық тұжырымдаманың 3 негізгі ұстанымы:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {courseMeta.principles.map((p, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 transition-all">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">
                  0{idx + 1}
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-1.5">{p.title}</h5>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Content Modules */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Бағдарламаның 4 мазмұндық бөлімі</h2>
            <p className="text-sm text-slate-500 mt-0.5">Курс өмірлік дағдыларды қамтитын төрт маңызды бағыттан тұрады</p>
          </div>
          <button 
            onClick={() => setActiveTab('lessons')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            Барлық 34 сабақ кестесі
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((m) => (
            <div 
              key={m.id}
              onClick={() => setActiveTab('lessons')}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-base group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    0{m.id}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full">
                    {m.hours} сағат
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {m.desc}
                </p>
              </div>
              <div className="text-xs font-semibold text-blue-600 flex items-center gap-1 pt-3 border-t border-slate-100">
                <span>Сабақтарын ашу</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model & Algorithm */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 text-white shadow-xl">
        <div className="max-w-3xl mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-300">Оқыту моделінің алгоритмі</span>
          <h3 className="text-2xl font-bold mt-1">«Құжаттан – дайын өнімге» дейінгі қадамдар</h3>
          <p className="text-sm text-slate-300 mt-2">
            Курс бойы әрбір оқушы ақпаратты сыни тұрғыдан қабылдап, нақты шешім қабылдаудың кезеңдік жүйесін меңгереді.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {[
            { step: '1', title: 'Нақты құжат', desc: 'Өмірлік материалды алу' },
            { step: '2', title: 'Құрылымдау', desc: 'Компоненттерге бөлу' },
            { step: '3', title: 'Салыстыру', desc: 'Критериймен қатар қою' },
            { step: '4', title: 'Үрдісті анықтау', desc: 'Тенденцияны тану' },
            { step: '5', title: 'Дәлелді шешім', desc: 'Сенімділік сараптамасы' },
            { step: '6', title: 'Өз өнімі', desc: 'Портфолиоға жинақтау' }
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15">
              <div className="text-xs font-black text-amber-300 mb-1">0{item.step} ҚАДАМ</div>
              <div className="font-bold text-xs text-white mb-1">{item.title}</div>
              <div className="text-[11px] text-slate-300 leading-tight">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Aims, Tasks & Novelty */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Aim & Tasks */}
        <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Бағдарламаның мақсаты мен міндеттері</h3>
              <p className="text-xs text-slate-500">Функционалдық оқу сауаттылығын қалыптастыру</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 leading-relaxed font-medium mb-5">
            <strong>Басты мақсаты:</strong> {courseMeta.aim}
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Негізгі міндеттер:</h4>
            {courseMeta.tasks.map((task, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Novelty & Distinction */}
        <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Жаңашылдығы және ерекшелігі</h3>
                <p className="text-xs text-slate-500">Ұқсас оқу бағдарламаларынан түбегейлі айырмашылығы</p>
              </div>
            </div>

            <div className="space-y-3">
              {courseMeta.novelty.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Ғылыми негіз: <span className="font-semibold text-slate-700">PISA, R. Marzano, J. Hattie, ҚР МЖМБС</span>
            </div>
            <button 
              onClick={() => setActiveTab('tools')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              12 Құралды көру
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
