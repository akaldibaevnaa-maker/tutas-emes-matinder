import React from 'react';
import { GraduationCap, School, Sparkles, BookOpen, Layers, Award } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-12 pb-8 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800 text-xs">
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                ОҚУ САУАТТЫЛЫҒЫ ПЛАТФОРМАСЫ
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-xs">
              «Тұтас емес мәтіндер негізінде оқу сауаттылығын дамыту» авторлық оқу бағдарламасы. Негізгі орта білім беру деңгейінің 9-сынып білім алушылары мен ұстаздарына арналған кешенді цифрлық орта.
            </p>
            <div className="text-slate-400 flex items-center gap-2 pt-2">
              <School className="w-4 h-4 text-sky-400" />
              <span>«№290 орта мектебі» коммуналдық мемлекеттік мекемесі</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <span className="font-bold text-slate-300 uppercase tracking-wider block mb-2">
              Платформа бөлімдері:
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button onClick={() => setActiveTab('overview')} className="hover:text-white transition-colors">
                  Басты бет және тұжырымдама
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('lessons')} className="hover:text-white transition-colors">
                  34 Сабақтың ҚМЖ-сы
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('simulator')} className="hover:text-white transition-colors">
                  Тұтас емес мәтіндер зертханасы
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tools')} className="hover:text-white transition-colors">
                  12 Әдістемелік құрал
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('diagnostics')} className="hover:text-white transition-colors">
                  Диагностика және PISA тест
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <span className="font-bold text-slate-300 uppercase tracking-wider block mb-2">
              Авторлық құқық:
            </span>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1">
              <span className="font-bold text-white block">Аймыратова Гайнегүл</span>
              <span className="text-[11px] text-sky-300 block">Педагог-зерттеуші</span>
              <span className="text-[10px] text-slate-400 block">Қазақ тілі мен әдебиеті пәні</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Барлық құқықтар қорғалған. Материалдарды білім беру мақсатында еркін қолдануға болады.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026. «Тұтас емес мәтіндер негізінде оқу сауаттылығын дамыту».
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Мемлекеттік стандарт</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">PISA 2022/2025</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">№130 & №399 бұйрықтар</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
