import React, { useState } from 'react';
import { WHATSAPP_TRIAL_URL } from '../data/mockData';
import { Zap, CheckCircle2, Activity } from 'lucide-react';

export const SpeedChecker: React.FC = () => {
  const [selectedSpeed, setSelectedSpeed] = useState<number>(50);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [testedSpeed, setTestedSpeed] = useState<number | null>(null);

  const speedTiers = [
    {
      speed: 10,
      label: '10 Mbps',
      maxRes: 'HD 720p',
      status: 'Transmissão estável HD',
    },
    {
      speed: 25,
      label: '25 Mbps',
      maxRes: 'Full HD 1080p',
      status: 'Excelente para Full HD',
    },
    {
      speed: 50,
      label: '50 Mbps',
      maxRes: '4K Ultra HD 60FPS',
      status: 'Perfeito para futebol 4K',
    },
    {
      speed: 100,
      label: '100+ Mbps',
      maxRes: '4K HDR Máximo',
      status: 'Desempenho Máximo VIP',
    },
  ];

  const handleRunSpeedCheck = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const simulated = Math.floor(45 + Math.random() * 80);
      setTestedSpeed(simulated);
      setSelectedSpeed(simulated >= 50 ? 50 : 25);
      setIsSimulating(false);
    }, 800);
  };

  return (
    <section id="velocidade" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-3xl p-6 sm:p-12 text-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FF9900] via-[#FF1E56] to-[#00C2FF] bg-clip-text text-transparent">
                Simulador de Velocidade UniTV
              </p>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
                Sua Conexão Roda o UniTV Sem Travar?
              </h2>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                O aplicativo UniTV possui compressão inteligente e servidores CDN no Brasil. Mesmo conexões mais simples rodam canais ao vivo e filmes com fluidez.
              </p>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleRunSpeedCheck}
                  disabled={isSimulating}
                  className="px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] hover:opacity-95 transition-opacity flex items-center gap-2 cursor-pointer shadow-sm disabled:opacity-50 whitespace-nowrap"
                >
                  <Activity className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>
                    {isSimulating ? 'Verificando...' : 'Simular Minha Velocidade'}
                  </span>
                </button>

                {testedSpeed && (
                  <p className="text-xs text-emerald-400 font-bold mt-3 flex items-center gap-1.5 tabular-nums">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>
                      Conexão estimada ~{testedSpeed} Mbps! 100% compatível com o UniTV em 4K e Full HD.
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Speed Table Interactive Cards */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Confira o desempenho por velocidade:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {speedTiers.map((tier) => (
                  <button
                    key={tier.speed}
                    type="button"
                    onClick={() => setSelectedSpeed(tier.speed)}
                    className={`p-3.5 sm:p-4 rounded-2xl border text-left cursor-pointer transition-colors ${
                      selectedSpeed === tier.speed
                        ? 'bg-pink-600/20 border-pink-500'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1 tabular-nums">
                      <span className="text-sm sm:text-base font-black text-white">{tier.label}</span>
                      <span className="text-xs font-bold text-amber-400">{tier.maxRes}</span>
                    </div>
                    <p className="text-xs text-slate-300">{tier.status}</p>
                  </button>
                ))}
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Comprove na prática!</h5>
                    <p className="text-[11px] text-slate-400">
                      Peça seus 3 dias de teste grátis agora.
                    </p>
                  </div>
                </div>

                <a
                  href={WHATSAPP_TRIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-extrabold text-slate-950 bg-white hover:bg-slate-100 transition-colors shrink-0 whitespace-nowrap"
                >
                  Testar 3 Dias
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
