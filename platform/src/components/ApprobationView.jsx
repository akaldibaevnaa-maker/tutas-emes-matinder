import React from 'react';
import { 
  CheckCircle2, 
  School, 
  Award, 
  FileText, 
  Printer, 
  Users, 
  Sparkles, 
  TrendingUp,
  ShieldCheck,
  Quote
} from 'lucide-react';

export default function ApprobationView() {
  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>VI Бөлім • Тәжірибелік-эксперименттік растау</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              БАҒДАРЛАМАНЫ АПРОБАЦИЯЛАУ НӘТИЖЕЛЕРІ МЕН РЕЦЕНЗИЯЛАР
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              «№290 орта мектебі» КММ коммуналдық мемлекеттік мекемесінде өткізілген апробация қорытындысы, педагог-зерттеуші мен педагог-шебердің ресми рецензиялары.
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Актілерді басып шығару</span>
          </button>
        </div>
      </div>

      {/* Approbation Context & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <School className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Тәжірибе алаңы</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            «№290 орта мектебі» КММ. Апробация мектеп директорының бұйрығы негізінде эксперименттік 9-сынып оқушыларымен толық 1 оқу жылы бойы өткізілді.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Динамикалық көрсеткіш</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Кіріс диагностикасында оқу сауаттылығы бойынша орташа балл 3.8 болса, қорытынды бақылауда 7.4 балға дейін өсті (сапалық өсім +94.7%).
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Құқықтық растау</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ішкі және сыртқы апробациялау актілері (АКТ1, АКТ2), мектеп әкімшілігінің сараптамалық қорытындысы және бекітілген пікірлерімен куәландырылған.
          </p>
        </div>
      </div>

      {/* Official Reviews (Рецензиялар) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Review 1: Pedagogue-Researcher */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                  1-РЕЦЕНЗИЯ
                </span>
                <h4 className="font-bold text-slate-900 text-base">
                  Педагог-зерттеушіден сараптамалық пікір
                </h4>
              </div>
              <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded">
                Ресми сараптама
              </span>
            </div>

            <div className="relative text-xs text-slate-700 leading-relaxed space-y-3 mb-6">
              <Quote className="w-8 h-8 text-blue-100 absolute -top-2 -left-2 -z-10" />
              <p>
                «Аймыратова Гайнегүл Абдижанқызы әзірлеген «Тұтас емес мәтіндер негізінде оқу сауаттылығын дамыту» авторлық бағдарламасы қазіргі білім беру кеңістігіндегі ең өзекті мәселені қамтиды. Бағдарламаның жаңашылдығы – оқушыны дайын жаттығуларға тәуелді етпей, күнделікті өмірдегі нақты құжаттарды (банк шарттары, квитанциялар, қаптамалар) талдауға үйретуінде.»
              </p>
              <p>
                «Ұсынылған 12 жүйелік ойлау құралы (Салыстыру матрицасы, Сенімділік үшбұрышы, Компас және т.б.) оқушылардың сыни ойлауын нақты дағды деңгейіне дейін көтереді. Бағдарлама толық көлемде білім беру процесіне енгізуге ұсынылады.»
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs">
            <span className="font-bold text-slate-900 block">Рецензент:</span>
            <span className="text-slate-500">Қазақ тілі мен әдебиеті пәні мұғалімі, педагог-зерттеуші</span>
          </div>
        </div>

        {/* Review 2: Pedagogue-Master */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                  2-РЕЦЕНЗИЯ
                </span>
                <h4 className="font-bold text-slate-900 text-base">
                  Педагог-шеберден сараптамалық пікір
                </h4>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded">
                Жоғары бағаланды
              </span>
            </div>

            <div className="relative text-xs text-slate-700 leading-relaxed space-y-3 mb-6">
              <Quote className="w-8 h-8 text-emerald-100 absolute -top-2 -left-2 -z-10" />
              <p>
                «Бағдарлама ҚР Білім және ғылым министрінің №130 және №399 бұйрықтары талаптарына толықтай сай әзірленген. Әрбір сабаққа қатысты нақты дескрипторлар мен күтілетін өнімнің айқындалуы мұғалімге де, оқушыға да түсінікті жүйе қалыптастырған.»
              </p>
              <p>
                «PISA халықаралық талаптары мен ұлттық МЖМБС сабақтастығы жоғары деңгейде қамтамасыз етілген. 34 сағаттық тақырыптық жоспар логикалық тұрғыдан өте дәл құрылған. Негізгі орта мектептердің вариативтік бөлімінде пайдалануға әбден лайық.»
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs">
            <span className="font-bold text-slate-900 block">Рецензент:</span>
            <span className="text-slate-500">Жоғары санатты педагог-шебер</span>
          </div>
        </div>
      </div>

      {/* Stakeholder Feedback (Оқушылар мен мұғалімдер кері байланысы) */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 shadow-xl">
        <h3 className="text-xl font-bold mb-6">Стейкхолдерлердің сауалнама қорытындысы</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="font-bold text-amber-300 block">Оқушылар пікірі:</span>
            <p className="leading-relaxed">
              «Сабақта күнделікті көретін дүкен чектерін, банк картасын, интернеттегі жарнамаларды талдау өте қызықты болды. Енді кез келген хабарламаның сенімділігін тексере аламын.»
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="font-bold text-sky-300 block">Әріптестер пікірі:</span>
            <p className="leading-relaxed">
              «Дайын әдістемелік аппарат пен критериалды рубриканың болуы сабақты өткізуді айтарлықтай жеңілдетеді. Пәнаралық байланыс өте мықты жүзеге асқан.»
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="font-bold text-emerald-300 block">Ата-аналар пікірі:</span>
            <p className="leading-relaxed">
              «Баламыз үйдегі коммуналдық төлемдер түбіртегін өзі есептеп, тарифтерді салыстырып түсіндіріп беретін деңгейге жетті. Өмірлік пайдалы курс.»
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
