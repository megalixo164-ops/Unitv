import React, { useState } from 'react';
import {
  X,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Copy,
  Check,
} from 'lucide-react';
import { Logo } from './Logo';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber = '5511999999999',
}) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [device, setDevice] = useState('Smart TV Samsung');
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [generatedCode, setGeneratedCode] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Format Brazilian phone number
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setWhatsapp(value);
  };

  const handleGenerateTrial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const code = `LTV-TEST-${randomNum}`;
    setGeneratedCode(code);
    setStep('success');
  };

  const handleCopyCredentials = () => {
    const textToCopy = `Código de Teste: ${generatedCode}\nAparelho: ${device}\nValidade: 6 Horas\nLeandro TV+`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
      <div
        id="trial-modal-container"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Top Brand Gradient Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#00A8FF]" />

        {/* Modal Top Header */}
        <div className="bg-slate-50 border-b border-slate-200/80 p-6 sm:p-7 relative text-center">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex justify-center mb-2">
            <Logo variant="light" size="sm" layout="stacked" />
          </div>

          <p className="text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent mb-1">
            Teste VIP · 6 Horas Totalmente Grátis
          </p>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
            {step === 'form' ? 'Solicite Seu Teste Gratuito' : 'Teste Gerado com Sucesso!'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {step === 'form'
              ? 'Sem compromisso e sem precisar cadastrar cartão de crédito.'
              : 'Seus dados de teste foram gerados e estão prontos para ativação.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {step === 'form' ? (
            <form onSubmit={handleGenerateTrial} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Seu Nome Completo:
                </label>
                <input
                  id="trial-name-input"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Carlos Eduardo"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Seu WhatsApp com DDD:
                </label>
                <input
                  id="trial-whatsapp-input"
                  type="text"
                  required
                  value={whatsapp}
                  onChange={handlePhoneChange}
                  placeholder="(11) 98765-4321"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Você receberá as credenciais de login e a lista de canais pelo WhatsApp.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Qual aparelho você vai usar para assistir?
                </label>
                <select
                  id="trial-device-select"
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all"
                >
                  <option value="Smart TV Samsung">Smart TV Samsung (Tizen)</option>
                  <option value="Smart TV LG">Smart TV LG (webOS)</option>
                  <option value="Smart TV Android / TCL / Philips">
                    Smart TV Android / TCL / Philips
                  </option>
                  <option value="TV Box / Fire TV Stick">TV Box ou Amazon Fire Stick</option>
                  <option value="Celular Android">Celular Android</option>
                  <option value="iPhone ou iPad (iOS)">iPhone ou iPad (iOS)</option>
                  <option value="Computador / Notebook (Web)">Computador / Notebook</option>
                  <option value="Outro Aparelho">Outro Aparelho</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  id="trial-submit-btn"
                  type="submit"
                  className="w-full py-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#7928CA] hover:opacity-95 shadow-xl shadow-pink-500/25 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Liberar Meu Teste Grátis de 6 Horas</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 font-medium pt-2">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Gratuito
                </span>
                <span aria-hidden="true">·</span>
                <span>Sem cartão de crédito</span>
                <span aria-hidden="true">·</span>
                <span>Ativação em 5 min</span>
              </div>
            </form>
          ) : (
            <div className="space-y-5 text-center">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-extrabold text-slate-900 text-lg">
                  Parabéns, {name}!
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Seu código de teste de 6 horas foi gerado com sucesso.
                </p>
              </div>

              {/* Generated Code Details */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Código do Teste:</span>
                  <span className="font-mono font-black text-pink-600 text-sm tabular-nums">
                    {generatedCode}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Aparelho Selecionado:</span>
                  <span className="font-bold text-slate-800">{device}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Duração:</span>
                  <span className="font-bold text-emerald-600">6 Horas Ilimitadas</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Olá! Meu nome é *${name}*. Meu código de teste é *${generatedCode}* para o aparelho *${device}*. Gostaria de ativar meu teste de 6 horas agora!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-black text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Receber Acesso Agora no WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyCredentials}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span>{copied ? 'Código Copiado!' : 'Copiar Dados do Teste'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
