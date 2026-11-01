import React, { useState } from 'react';
import { 
  Building2, 
  Receipt, 
  Apple, 
  Plane, 
  ShieldAlert, 
  CheckCircle, 
  HelpCircle, 
  Sparkles, 
  Calculator, 
  ArrowRight,
  RotateCcw,
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SimulatorView() {
  const [activeTab, setActiveTab] = useState('deposit');

  // --- 1. DEPOSIT SIMULATOR STATE ---
  const [depositAmount, setDepositAmount] = useState(200000);
  const [depositMonths, setDepositMonths] = useState(12);
  const [userConclusion, setUserConclusion] = useState('');
  const [conclusionFeedback, setConclusionFeedback] = useState(null);

  const bankDeposits = [
    {
      name: 'Halyk Bank (Әмбебап)',
      rate: 13.5,
      effectiveRate: 14.4,
      minAmount: 1000,
      canWithdraw: 'Иә (сыйақыны сақтай отырып)',
      canTopup: 'Иә (шектеусіз)',
      guarantee: 'ҚДКҚ (20 млн ₸ дейін)'
    },
    {
      name: 'Kaspi Bank (Kaspi Депозит)',
      rate: 14.0,
      effectiveRate: 14.9,
      minAmount: 1000,
      canWithdraw: 'Иә (15 күннен кейін комиссиясыз)',
      canTopup: 'Иә (кез келген сәтте)',
      guarantee: 'ҚДКҚ (20 млн ₸ дейін)'
    },
    {
      name: 'Jusan Bank (Тұрақты)',
      rate: 15.2,
      effectiveRate: 16.3,
      minAmount: 50000,
      canWithdraw: 'Жоқ (мерзім соңында ғана)',
      canTopup: 'Жоқ',
      guarantee: 'ҚДКҚ (20 млн ₸ дейін)'
    }
  ];

  const handleDepositCheck = () => {
    if (userConclusion.trim().length > 25) {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      setConclusionFeedback({
        status: 'success',
        text: 'Өте жақсы! Сіз банк шарттарын (сыйақы мөлшерлемесі мен толықтыру/алу мүмкіндігін) дұрыс ескеріп, дәлелді аналитикалық қорытынды жаздыңыз.'
      });
    } else {
      setConclusionFeedback({
        status: 'warning',
        text: 'Қорытынды тым қысқа. Екі банктің артықшылығы мен кемшілігін кемінде 2-3 сөйлеммен салыстырып жазыңыз.'
      });
    }
  };

  // --- 2. RECEIPT SIMULATOR STATE ---
  const [selectedReceiptItem, setSelectedReceiptItem] = useState('heating');
  const [receiptAnswer, setReceiptAnswer] = useState('');
  const [receiptResult, setReceiptResult] = useState(null);

  const receiptItems = {
    heating: {
      name: 'Орталықтандырылған жылу',
      volume: '54.2 м²',
      tariff: '142.50 ₸ / м²',
      total: '7 723.50 ₸',
      note: 'Жылыту маусымында ғана (қазан–сәуір) есептеледі.'
    },
    coldWater: {
      name: 'Суық су және кәріз',
      volume: '14.0 м³ (есептегіш бойынша)',
      tariff: '85.20 ₸ / м³',
      total: '1 192.80 ₸',
      note: 'Есептегіш көрсеткіші ай сайын 25-не дейін тапсырылуы тиіс.'
    },
    electricity: {
      name: 'Электр энергиясы (2-деңгей)',
      volume: '240 кВт/сағ',
      tariff: '24.80 ₸ / кВт',
      total: '5 952.00 ₸',
      note: 'Нормадан (150 кВт) асқан бөлігі 2-деңгейлі жоғары тарифпен есептелген.'
    },
    garbage: {
      name: 'Қатты тұрмыстық қалдықтар',
      volume: '3 адам',
      tariff: '550.00 ₸ / адам',
      total: '1 650.00 ₸',
      note: 'Пәтерде тіркелген тұрғындар санына қарай есептеледі.'
    }
  };

  // --- 3. FOOD NUTRITION SIMULATOR ---
  const [foodProduct, setFoodProduct] = useState('milk');
  const foodData = {
    milk: {
      name: '«Ақ бұлақ» пастерленген сүті (3.2%)',
      volume: '1000 мл',
      protein: '3.0 г',
      fat: '3.2 г',
      carbs: '4.7 г',
      calories: '60 ккал (100 г)',
      additives: 'Жоқ (100% табиғи)',
      shelfLife: '7 тәулік (4±2°C)',
      standard: 'СТ РК 1733-2007, Халал сертификаты бар'
    },
    snack: {
      name: '«ШокоБум» карамельді батончигі',
      volume: '50 г',
      protein: '4.5 г',
      fat: '23.0 г',
      carbs: '65.0 г (оның ішінде қант 48 г)',
      calories: '490 ккал (100 г)',
      additives: 'E-322 (соя лецитині), E-476, E-150d',
      shelfLife: '12 ай (құрғақ жерде)',
      standard: 'ТУ өнімі, жоғары калориялы'
    },
    juice: {
      name: '«Жеміс бағы» алма-банан шырыны',
      volume: '200 мл',
      protein: '0.5 г',
      fat: '0.1 г',
      carbs: '12.0 г',
      calories: '50 ккал (100 г)',
      additives: 'Лимон қышқылы (E-330), аскорбин қышқылы',
      shelfLife: '12 ай (ашылған соң 24 сағат)',
      standard: 'Балалар тағамына рұқсат етілген'
    }
  };

  // --- 4. AIRLINE TICKET SIMULATOR ---
  const [flightTariff, setFlightTariff] = useState('standard');
  const flightTariffs = {
    light: {
      name: '«Жеңіл» (Light)',
      price: '18 500 ₸',
      cabinBag: '5 кг (40х30х20 см)',
      checkInBag: 'Қосылмаған (ақылы: 6 500 ₸)',
      seatChoice: 'Ақылы (1 500 ₸ бастап)',
      refund: 'Қайтарылмайды (0%)',
      change: 'Айыппұлмен (8 000 ₸ + тариф айырмасы)'
    },
    standard: {
      name: '«Стандарт» (Classic)',
      price: '27 000 ₸',
      cabinBag: '5 кг қол жүгі',
      checkInBag: '20 кг тіркелетін багаж тегін',
      seatChoice: 'Тегін (қатар соңынан)',
      refund: '50% ұстап қалумен қайтарылады',
      change: '1 рет тегін айырбастауға болады'
    },
    plus: {
      name: '«Икемді» (Flex Plus)',
      price: '42 000 ₸',
      cabinBag: '2 орын (әрқайсысы 5 кг)',
      checkInBag: '23 кг тегін багаж',
      seatChoice: 'Кез келген орын тегін (алдыңғы қатарлар)',
      refund: '100% толық қайтарылады',
      change: 'Шектеусіз тегін ауыстыру'
    }
  };

  // --- 5. TRUST TRIANGLE SIMULATOR ---
  const [sourceAuthor, setSourceAuthor] = useState('gov'); // gov, blog, anon
  const [sourcePurpose, setSourcePurpose] = useState('inform'); // inform, sell, hype
  const [sourceEvidence, setSourceEvidence] = useState('stats'); // stats, opinion, none

  const calculateTrustScore = () => {
    let score = 0;
    if (sourceAuthor === 'gov') score += 40;
    else if (sourceAuthor === 'blog') score += 15;
    else score += 0;

    if (sourcePurpose === 'inform') score += 30;
    else if (sourcePurpose === 'sell') score += 10;
    else score += 0;

    if (sourceEvidence === 'stats') score += 30;
    else if (sourceEvidence === 'opinion') score += 10;
    else score += 0;

    return score;
  };

  const trustScore = calculateTrustScore();

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300 mb-2">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Практикалық интерактивті модуль</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black">ТҰТАС ЕМЕС МӘТІНДЕР ЗЕРТХАНАСЫ</h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Мұнда оқушы дайын жаттығу емес, нақты өмірлік құжаттармен (банк шарты, коммуналдық квитанция, азық-түлік қаптамасы, әуе билеті, медиа-дереккөз) жұмыс істеп, сыни талдау жасайды.
        </p>

        {/* Tab selection */}
        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
          {[
            { id: 'deposit', label: '1. Банк депозиттері', icon: Building2 },
            { id: 'receipt', label: '2. Коммуналдық түбіртек', icon: Receipt },
            { id: 'food', label: '3. Азық-түлік қаптамасы', icon: Apple },
            { id: 'flight', label: '4. Авиабилет тарифтері', icon: Plane },
            { id: 'trust', label: '5. Сенімділік үшбұрышы', icon: ShieldAlert }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-white text-blue-950 shadow-md scale-102'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-sky-300'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* --- SIMULATOR 1: BANK DEPOSITS --- */}
      {activeTab === 'deposit' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">1-Сабақ кейсі</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">Банк депозиттерінің шарттарын салыстыру матрицасы</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Ұлттық Банк пен екінші деңгейлі банктердің ресми шарттары негізінде жасалған салыстырмалы кесте.
                </p>
              </div>

              {/* Calculator Inputs */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center gap-4 text-xs">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">Салым сомасы (₸):</label>
                  <input
                    type="number"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    step="10000"
                    min="1000"
                    className="w-32 px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg font-bold text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">Мерзімі (ай):</label>
                  <select
                    value={depositMonths}
                    onChange={(e) => setDepositMonths(Number(e.target.value))}
                    className="px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg font-bold text-slate-800"
                  >
                    <option value={3}>3 ай</option>
                    <option value={6}>6 ай</option>
                    <option value={12}>12 ай (1 жыл)</option>
                    <option value={24}>24 ай (2 жыл)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Comparison Matrix Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Банк өнімі</th>
                    <th className="p-3.5">Атаулы мөлшерлеме</th>
                    <th className="p-3.5">ЖТСМ (ГЭСВ)</th>
                    <th className="p-3.5">Ең аз салым</th>
                    <th className="p-3.5">Ішінара алу</th>
                    <th className="p-3.5">Толықтыру</th>
                    <th className="p-3.5 text-blue-700 bg-blue-50/50">Болжамды табыс ({depositMonths} айда)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {bankDeposits.map((bank, i) => {
                    const profit = Math.round((depositAmount * (bank.rate / 100) * (depositMonths / 12)));
                    return (
                      <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">{bank.name}</td>
                        <td className="p-3.5 font-semibold text-slate-800">{bank.rate}%</td>
                        <td className="p-3.5 font-bold text-blue-700">{bank.effectiveRate}%</td>
                        <td className="p-3.5">{bank.minAmount.toLocaleString()} ₸</td>
                        <td className="p-3.5">{bank.canWithdraw}</td>
                        <td className="p-3.5">{bank.canTopup}</td>
                        <td className="p-3.5 font-black text-emerald-600 bg-blue-50/30 text-sm">
                          +{profit.toLocaleString()} ₸
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Task & Interactive Student Action */}
            <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                  !
                </span>
                <h4 className="font-bold text-slate-900 text-sm">
                  Оқушы тапсырмасы: Кесте негізінде аналитикалық қорытынды жасаңыз
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Жоғарыдағы салыстыру матрицасына сүйене отырып: қай банк ұзақ мерзімге жинақтау үшін, ал қай банк күнделікті жұмсау мен толықтыру үшін қолайлы екенін 3–4 сөйлеммен негіздеп жазыңыз.
              </p>

              <textarea
                value={userConclusion}
                onChange={(e) => setUserConclusion(e.target.value)}
                placeholder="Мысалы: «Jusan Bank ең жоғары 15.2% мөлшерлеме ұсынғанымен, ақшаны мерзімінен бұрын алуға мүмкіндік бермейді. Ал Kaspi мен Halyk күнделікті қажеттілікке ыңғайлы, себебі...»"
                rows={3}
                className="w-full p-3.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-blue-500 leading-relaxed"
              />

              <div className="flex items-center justify-between">
                <button
                  onClick={handleDepositCheck}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-colors"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Қорытындыны тексеру және бағалау</span>
                </button>
                <span className="text-[11px] text-slate-400">
                  Дескриптор: Салыстыру матрицасы бойынша деректі негіздеу (2 балл)
                </span>
              </div>

              {conclusionFeedback && (
                <div className={`p-4 rounded-xl text-xs leading-relaxed ${
                  conclusionFeedback.status === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-amber-50 text-amber-800 border border-amber-200'
                }`}>
                  {conclusionFeedback.text}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- SIMULATOR 2: UTILITY RECEIPT --- */}
      {activeTab === 'receipt' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">8-Сабақ кейсі</span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">Коммуналдық төлемдер түбіртегінің интерактивті инспекторы</h3>
              <p className="text-xs text-slate-500 mt-1">
                Түбіртек баптарын басып, көлемін, тарифін және есептелу формуласын тексеріңіз.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Receipt Visual Mockup */}
              <div className="lg:col-span-2 bg-amber-50/40 p-6 rounded-2xl border-2 border-dashed border-slate-300 font-mono text-xs">
                <div className="text-center pb-4 border-b border-slate-300 mb-4">
                  <div className="font-bold text-sm text-slate-800">«АЛСЕКО» Есеп айырысу орталығы</div>
                  <div className="text-[10px] text-slate-500">Тұтынушы: Әлиев Н. | Мекенжайы: Абай даңғылы, 45, 12-пәтер</div>
                  <div className="text-[10px] text-slate-500">Төлем кезеңі: 2026 ж. қаңтар</div>
                </div>

                <div className="space-y-2">
                  {Object.entries(receiptItems).map(([key, item]) => {
                    const isSelected = selectedReceiptItem === key;
                    return (
                      <div
                        key={key}
                        onClick={() => setSelectedReceiptItem(key)}
                        className={`p-3 rounded-lg cursor-pointer transition-all border flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold'
                            : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div>
                          <div>{item.name}</div>
                          <div className={`text-[10px] ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                            Көлемі: {item.volume} | Тариф: {item.tariff}
                          </div>
                        </div>
                        <div className="text-sm font-black tracking-tight">{item.total}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-300 flex justify-between items-center font-bold text-slate-900 text-sm">
                  <span>ТӨЛЕНУГЕ ТИІС ЖАЛПЫ СОМА:</span>
                  <span className="text-blue-800 text-base">16 518.30 ₸</span>
                </div>
              </div>

              {/* Inspector Panel */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Баптың толық сипаттамасы:
                  </span>
                  <h4 className="font-extrabold text-base text-slate-900 mt-1 mb-3">
                    {receiptItems[selectedReceiptItem].name}
                  </h4>

                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div>
                      <span className="font-semibold text-slate-800">Тұтынылған көлем: </span>
                      {receiptItems[selectedReceiptItem].volume}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Бекітілген тариф: </span>
                      {receiptItems[selectedReceiptItem].tariff}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Төлем сомасы: </span>
                      <span className="font-bold text-blue-700">{receiptItems[selectedReceiptItem].total}</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-500 italic mt-3">
                      ℹ️ {receiptItems[selectedReceiptItem].note}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-800 block mb-2">
                    Сұрақ: Түбіртектегі ең көп шығын әкелген қызмет түрі қайсы?
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setReceiptResult('heating')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
                        receiptResult === 'heating'
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      Жылу (7 723 ₸)
                    </button>
                    <button
                      onClick={() => setReceiptResult('elec')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
                        receiptResult === 'elec'
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      Электр (5 952 ₸)
                    </button>
                  </div>
                  {receiptResult === 'heating' && (
                    <p className="text-[11px] text-emerald-700 font-bold mt-2">
                      Дұрыс! Орталықтандырылған жылу шығыны жалпы түбіртектің 46.7%-ын құрайды.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SIMULATOR 3: FOOD NUTRITION --- */}
      {activeTab === 'food' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">11-Сабақ кейсі</span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">Азық-түлік қаптамасындағы қоректік заттар мен таңбалауды талдау</h3>
              <p className="text-xs text-slate-500 mt-1">
                Қаптаманы таңдап, құрамын, Е-қоспаларын және тағамдық құндылығын салыстырыңыз.
              </p>
            </div>

            {/* Product Switcher */}
            <div className="flex gap-2 mb-6">
              {[
                { id: 'milk', label: 'Сүт 3.2%' },
                { id: 'snack', label: 'Шоколадты батончик' },
                { id: 'juice', label: 'Алма шырыны' }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setFoodProduct(p.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    foodProduct === p.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Nutrition Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400">Тауар атауы:</span>
                  <h4 className="text-lg font-bold text-slate-900">{foodData[foodProduct].name}</h4>
                  <span className="text-xs text-slate-500">Көлемі/салмағы: {foodData[foodProduct].volume}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px]">Ақуыз (Белки):</span>
                    <span className="font-bold text-slate-800 text-sm">{foodData[foodProduct].protein}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px]">Май (Жиры):</span>
                    <span className="font-bold text-slate-800 text-sm">{foodData[foodProduct].fat}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px]">Көмірсу (Углеводы):</span>
                    <span className="font-bold text-slate-800 text-sm">{foodData[foodProduct].carbs}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px]">Энергетикалық құндылығы:</span>
                    <span className="font-bold text-blue-700 text-sm">{foodData[foodProduct].calories}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs bg-white p-5 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider">
                  Тұтынушылық таңбалау және қауіпсіздік:
                </span>
                <div>
                  <span className="font-semibold text-slate-700">Тағамдық қоспалар (Е): </span>
                  <span className={foodData[foodProduct].additives.includes('Жоқ') ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
                    {foodData[foodProduct].additives}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Жарамдылық мерзімі: </span>
                  <span className="text-slate-800">{foodData[foodProduct].shelfLife}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Стандарт / Сертификат: </span>
                  <span className="text-slate-800">{foodData[foodProduct].standard}</span>
                </div>

                <div className="p-3 bg-blue-50 text-blue-900 rounded-lg text-[11px] leading-relaxed mt-4">
                  💡 <strong>Талдау ұсынысы:</strong> Қант пен майдың жоғары мөлшері зат алмасуға әсер етеді. Сондықтан тауар қаптамасындағы 100 г шаққандағы калорияны тұтас өнім салмағына көбейтіп есептеу дағдысы қажет.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SIMULATOR 4: AIRLINE TICKETS --- */}
      {activeTab === 'flight' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">17-Сабақ кейсі</span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">Авиабилеттің қайтару және айырбастау шарттарын талдау</h3>
              <p className="text-xs text-slate-500 mt-1">
                Рейс: Астана – Алматы. Үш түрлі тарифтің жасырын төлемдері мен багаж шектеулерін салыстырыңыз.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(flightTariffs).map(([key, tariff]) => {
                const isSelected = flightTariff === key;
                return (
                  <div
                    key={key}
                    onClick={() => setFlightTariff(key)}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/20 shadow-md'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-black text-sm text-slate-900">{tariff.name}</span>
                        {isSelected && (
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                        )}
                      </div>
                      <div className="text-2xl font-black text-blue-800 mb-4">{tariff.price}</div>

                      <div className="space-y-2 text-xs text-slate-600">
                        <div><strong>Қол жүгі:</strong> {tariff.cabinBag}</div>
                        <div><strong>Багаж:</strong> {tariff.checkInBag}</div>
                        <div><strong>Орын таңдау:</strong> {tariff.seatChoice}</div>
                        <div className="pt-2 border-t border-slate-100">
                          <strong className="text-slate-800">Билетті қайтару:</strong><br />
                          <span className="text-slate-600">{tariff.refund}</span>
                        </div>
                        <div>
                          <strong className="text-slate-800">Күнді ауыстыру:</strong><br />
                          <span className="text-slate-600">{tariff.change}</span>
                        </div>
                      </div>
                    </div>

                    <button className={`w-full mt-5 py-2 rounded-xl text-xs font-bold transition-colors ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {isSelected ? 'Таңдалды' : 'Тарифті таңдау'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* --- SIMULATOR 5: TRUST TRIANGLE --- */}
      {activeTab === 'trust' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Медиасауаттылық құралы</span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">«Сенімділік үшбұрышы» тексергіші</h3>
              <p className="text-xs text-slate-500 mt-1">
                Кез келген жаңалықты немесе жазбаны үш өлшем (Автор, Мақсат, Дәлел) бойынша бағалап, шынайылық дәрежесін есептеңіз.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Corner 1: Author */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-blue-600 block">1-ТӨБЕ: АВТОР КІМ?</span>
                <p className="text-xs text-slate-500">Ақпаратты таратқан тұлғаның немесе органның мәртебесі:</p>
                <div className="space-y-2">
                  {[
                    { id: 'gov', label: 'Ресми орган / Мемлекеттік дереккөз (egov, ҰБ, stat.gov)' },
                    { id: 'blog', label: 'Белгілі сарапшы немесе БАҚ журналисі' },
                    { id: 'anon', label: 'Анонимді Telegram/TikTok арна немесе белгісіз парақша' }
                  ].map((opt) => (
                    <label key={opt.id} className="flex items-start gap-2 text-xs text-slate-700 cursor-pointer p-2 rounded-lg hover:bg-white transition-colors">
                      <input
                        type="radio"
                        name="author"
                        checked={sourceAuthor === opt.id}
                        onChange={() => setSourceAuthor(opt.id)}
                        className="mt-0.5 text-blue-600"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Corner 2: Purpose */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-indigo-600 block">2-ТӨБЕ: МАҚСАТЫ ҚАНДАЙ?</span>
                <p className="text-xs text-slate-500">Бұл мәтіннің жариялану себебі мен ниеті:</p>
                <div className="space-y-2">
                  {[
                    { id: 'inform', label: 'Бейтарап ақпараттандыру, қоғамға пайдалы дерек беру' },
                    { id: 'sell', label: 'Тауарды немесе қызметті жарнамалап сату' },
                    { id: 'hype', label: 'Қоғамда үрей тудыру, эмоциялық хайп, қаралым жинау' }
                  ].map((opt) => (
                    <label key={opt.id} className="flex items-start gap-2 text-xs text-slate-700 cursor-pointer p-2 rounded-lg hover:bg-white transition-colors">
                      <input
                        type="radio"
                        name="purpose"
                        checked={sourcePurpose === opt.id}
                        onChange={() => setSourcePurpose(opt.id)}
                        className="mt-0.5 text-indigo-600"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Corner 3: Evidence */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-emerald-600 block">3-ТӨБЕ: ДӘЛЕЛДЕРІ ҚАНДАЙ?</span>
                <p className="text-xs text-slate-500">Мәтінде нақты растау фактілері бар ма?</p>
                <div className="space-y-2">
                  {[
                    { id: 'stats', label: 'Нақты сандар, сілтемелер, құжаттар, фото/видео айғақтар' },
                    { id: 'opinion', label: 'Тек жеке пікір, біржақты көзқарас, эмоциялық сөздер' },
                    { id: 'none', label: 'Ешқандай дереккөз жоқ («көршім айтты», «естідім»)' }
                  ].map((opt) => (
                    <label key={opt.id} className="flex items-start gap-2 text-xs text-slate-700 cursor-pointer p-2 rounded-lg hover:bg-white transition-colors">
                      <input
                        type="radio"
                        name="evidence"
                        checked={sourceEvidence === opt.id}
                        onChange={() => setSourceEvidence(opt.id)}
                        className="mt-0.5 text-emerald-600"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust Meter Result */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  Сенімділік сараптамасының нәтижесі:
                </span>
                <h4 className="text-2xl font-black mt-1">
                  Сенімділік көрсеткіші: <span className={trustScore >= 70 ? 'text-emerald-400' : trustScore >= 40 ? 'text-amber-400' : 'text-rose-400'}>{trustScore}%</span>
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  {trustScore >= 70
                    ? 'Ақпарат сенімді деп танылады. Ресми деректер мен бейтарап баяндау сақталған.'
                    : trustScore >= 40
                    ? 'Ақпарат күмәнді. Басқа тәуелсіз ресми дереккөздер арқылы қайта тексеруді қажет етеді.'
                    : 'Жалған немесе манипуляциялық («фэйк») ақпарат қаупі өте жоғары! Таратуға болмайды.'}
                </p>
              </div>

              <div className="w-24 h-24 rounded-full border-4 border-slate-700 flex items-center justify-center font-black text-2xl shrink-0">
                {trustScore}%
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
