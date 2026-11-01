import React, { useState } from 'react';
import { glossary } from '../data/courseData';
import { 
  BookmarkCheck, 
  Search, 
  BookOpen, 
  ExternalLink, 
  FileText, 
  CheckCircle,
  Copy,
  Check
} from 'lucide-react';

export default function GlossaryView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedTerm, setCopiedTerm] = useState(null);

  // Enriched glossary items
  const allTerms = [
    ...glossary,
    { term: 'Депозит', definition: 'Банкке белгілі бір мерзімге пайыздық сыйақы алу мақсатында салынған ақша сомасы.' },
    { term: 'ЖТСМ (ГЭСВ)', definition: 'Жылдық тиімді сыйақы мөлшерлемесі – қаржы өнімінің барлық комиссиялары мен капитализациясын ескеретін нақты жылдық пайыздық табыстылық көрсеткіші.' },
    { term: 'Несие (Кредит)', definition: 'Банктің немесе ұйымның белгілі бір пайыздық сыйақы төлеу шартымен мерзімді түрде берген қарыз ақшасы.' },
    { term: 'Тариф', definition: 'Қызметтің немесе тауардың белгілі бір өлшем бірлігіне (кВт, м³, адам басына) белгіленген ресми бағасы.' },
    { term: 'Экобелгі', definition: 'Тауардың немесе қаптаманың қоршаған ортаға қауіпсіздігін, қайта өңделуін растайтын халықаралық немесе ұлттық шартты графикалық белгі.' },
    { term: 'Энергия тиімділігі сыныбы', definition: 'Тұрмыстық техниканың электр қуатын үнемдеу дәрежесін көрсететін A+++, A++, A, B, C, D әріптік және түстік шкаласы.' },
    { term: 'Түйіндеме (Резюме)', definition: 'Үміткердің білімін, жұмыс тәжірибесін, дағдылары мен жетістіктерін құрылымды түрде сипаттайтын кәсіби құжат.' },
    { term: 'Смета', definition: 'Белгілі бір жобаны, саяхатты немесе қызметті жүзеге асыруға қажетті шығыстардың баптар бойынша есептелген жиынтық кестесі.' }
  ];

  const filteredTerms = allTerms.filter(t => {
    const q = searchTerm.toLowerCase();
    return !q || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q);
  });

  const handleCopyTerm = (t) => {
    navigator.clipboard.writeText(`${t.term} – ${t.definition}`);
    setCopiedTerm(t.term);
    setTimeout(() => setCopiedTerm(null), 2000);
  };

  const literature = [
    {
      category: 'Нормативтік-құқықтық негіздер',
      items: [
        'Қазақстан Республикасының «Білім туралы» Заңы. – Астана: Ақорда.',
        'ҚР Оқу-ағарту министрінің 2022 жылғы 16 қыркүйектегі № 399 бұйрығы (Үлгілік оқу бағдарламалары, 35-қосымша – «Қазақ тілі» пәні).',
        'ҚР Оқу-ағарту министрінің 2020 жылғы 6 сәуірдегі № 130 бұйрығы (Орта білім беру ұйымдарындағы құжаттаманың нысандары).',
        'Қазақстан Республикасында орта білім берудің мемлекеттік жалпыға міндетті стандарты (МЖМБС).'
      ]
    },
    {
      category: 'Ғылыми-әдістемелік еңбектер',
      items: [
        'PISA 2022 Assessment and Analytical Framework. Reading Literacy. – OECD Publishing, Paris.',
        'Hattie, J. Visible Learning for Teachers: Maximizing Impact on Learning. – Routledge, 2012.',
        'Marzano, R. J. The Art and Science of Teaching: A Comprehensive Framework for Effective Instruction. – ASCD, 2007.',
        'Жұмабаева Ә.Е., Уайсова Ғ.И. Тұтас емес мәтіндермен жұмыс істеу әдістемесі. – Алматы, 2021.',
        'Оразахынова Н.А. Сатылай кешенді талдау технологиясының әдістемелік негіздері. – Алматы, 2019.'
      ]
    },
    {
      category: 'Ресми ашық цифрлық ресурстар',
      items: [
        'Қазақстан Ұлттық Банкінің ресми қаржылық порталы – nationalbank.kz',
        'Қазақстан Республикасының «Электрондық үкімет» порталы – egov.kz',
        'ҚР Стратегиялық жоспарлау және реформалар агенттігі Ұлттық статистика бюросы – stat.gov.kz',
        '«Әділет» ақпараттық-құқықтық жүйесі – adilet.zan.kz',
        '«Еңбек» мемлекеттік еңбек ресурстары порталы – enbek.kz'
      ]
    }
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
              <BookmarkCheck className="w-3.5 h-3.5" />
              <span>1-қосымша & VIII бөлім • Анықтамалық қор</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              КУРСТЫҢ НЕГІЗГІ ҰҒЫМДАРЫ МЕН ӘДЕБИЕТТЕР ТІЗІМІ
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Тұтас емес мәтіндер бойынша глоссарий, терминдер сөздігі және бағдарлама әзірлеуде қолданылған нормативтік-әдістемелік әдебиеттер тізімі.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Термин немесе ұғымды іздеу..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Glossary Cards */}
      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Терминдер мен түсініктемелер ({filteredTerms.length}):
          </h3>
          <span className="text-xs text-slate-500">Көшіріп алу үшін кез келген карточканы басыңыз</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTerms.map((t, idx) => (
            <div
              key={idx}
              onClick={() => handleCopyTerm(t)}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                    {t.term}
                  </h4>
                  <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
                    {copiedTerm === t.term ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.definition}
                </p>
              </div>

              {copiedTerm === t.term && (
                <span className="text-[10px] text-emerald-700 font-bold mt-3 block">
                  Көшірілді!
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Literature & References (VIII бөлім) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            VIII Бөлім
          </span>
          <h3 className="text-xl font-black text-slate-900 mt-0.5">
            Пайдаланылған әдебиеттер мен нормативтік дереккөздер тізімі
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {literature.map((sec, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                {sec.category}
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                {sec.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold shrink-0">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
