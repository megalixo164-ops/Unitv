import React, { useState } from 'react';
import { DEVICE_GUIDES, WHATSAPP_TRIAL_URL, UNITV_LOGO_SRC } from '../data/mockData';
import { DeviceGuide } from '../types';
import {
  Tv,
  Box,
  Smartphone,
  Laptop,
  ArrowRight,
  Download,
  MessageCircle,
} from 'lucide-react';

export const DevicesGuide: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>('tv-box');

  const activeDeviceData: DeviceGuide =
    DEVICE_GUIDES.find((d) => d.id === selectedDevice) || DEVICE_GUIDES[0];

  const getDeviceIcon = (id: string) => {
    switch (id) {
      case 'smart-tv':
        return <Tv className="w-5 h-5" />;
      case 'tv-box':
        return <Box className="w-5 h-5" />;
      case 'mobile':
        return <Smartphone className="w-5 h-5" />;
      case 'pc':
        return <Laptop className="w-5 h-5" />;
      default:
        return <Tv className="w-5 h-5" />;
    }
  };

  return (
    <section id="aparelhos" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-50 border border-slate-200/90 mb-3">
            <img
              src={UNITV_LOGO_SRC}
              alt="UniTV"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-5 h-5 object-contain"
            />
            <span className="text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent">
              Instalação Rápida UniTV
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-3 sm:mb-4 text-balance">
            Assista no Seu Aparelho Favorito
          </h2>
          <p className="text-sm sm:text-lg text-slate-600">
            O aplicativo UniTV é super leve, rápido e fácil de instalar na sua TV Box, Fire Stick, Smart TV Android ou Celular.
          </p>
        </div>

        {/* 3-Step Setup Overview */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF8A00] to-[#FF1E56] text-white font-black text-xs flex items-center justify-center mb-3.5">
                01
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">
                Chame no WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clique no botão de teste grátis para falar conosco no WhatsApp (47) 99273-3349.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF1E56] to-[#7928CA] text-white font-black text-xs flex items-center justify-center mb-3.5">
                02
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">
                Instale o App UniTV
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enviamos o aplicativo oficial UniTV e te ajudamos a instalar em menos de 3 minutos.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7928CA] to-[#0099FF] text-white font-black text-xs flex items-center justify-center mb-3.5">
                03
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">
                Aproveite 3 Dias Grátis!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Curta 3 dias inteiros de canais em 4K, futebol ao vivo, filmes e séries sem pagar nada.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Device Selector Tabs & Detailed Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Device Tabs Column */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 px-1 mb-2">
              Selecione seu aparelho:
            </h4>
            {DEVICE_GUIDES.map((device) => (
              <button
                key={device.id}
                type="button"
                onClick={() => setSelectedDevice(device.id)}
                className={`w-full p-3.5 sm:p-4 rounded-2xl text-left transition-colors flex items-center justify-between border cursor-pointer ${
                  selectedDevice === device.id
                    ? 'bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] text-white border-transparent shadow-md shadow-pink-500/15'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      selectedDevice === device.id
                        ? 'bg-white/20 text-white'
                        : 'bg-white text-pink-600 border border-slate-200'
                    }`}
                  >
                    {getDeviceIcon(device.id)}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm leading-snug">{device.name}</h5>
                    <p
                      className={`text-[11px] sm:text-xs ${
                        selectedDevice === device.id ? 'text-amber-100' : 'text-slate-500'
                      }`}
                    >
                      {device.tag}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  className={`w-4 h-4 shrink-0 ${
                    selectedDevice === device.id ? 'text-white' : 'text-slate-400'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Device Details Box */}
          <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <img
                  src={UNITV_LOGO_SRC}
                  alt="UniTV"
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 object-contain shrink-0"
                />
                <div>
                  <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">
                    Passo a Passo UniTV
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-slate-900">
                    {activeDeviceData.name}
                  </h3>
                </div>
              </div>

              <a
                href={WHATSAPP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] hover:opacity-95 transition-opacity shadow-xs whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Pedir Teste de 3 Dias</span>
              </a>
            </div>

            {/* Recommended Apps */}
            <div className="my-5">
              <h5 className="text-xs font-black uppercase text-slate-500 tracking-wider mb-2.5">
                Aplicativo Oficial:
              </h5>
              <div className="flex flex-wrap gap-3">
                {activeDeviceData.apps.map((app) => (
                  <span
                    key={app}
                    className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-pink-600" />
                    <span>{app}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Instructions List */}
            <div>
              <h5 className="text-xs font-black uppercase text-slate-500 tracking-wider mb-2.5">
                Como instalar e testar:
              </h5>
              <div className="space-y-2.5">
                {activeDeviceData.instructions.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/80 rounded-xl p-3.5 sm:p-4 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-pink-50 text-pink-600 text-xs font-black flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
