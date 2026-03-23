import { useEffect, useRef, useState } from "react";

/* ─── Contador animado ─── */
function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="tabular-nums">
      {count.toLocaleString("pt-BR")}
      {suffix}
    </div>
  );
}

/* ─── Card de vilão ─── */
interface VillainProps {
  name: string;
  specialty: string;
  tagline: string;
  description: string;
  accentColor: string;
  emoji: string;
}

function VillainCard({ name, specialty, tagline, description, accentColor, emoji }: VillainProps) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm
                 hover:scale-[1.02] hover:border-white/30 transition-all duration-300 group"
    >
      <div
        className="h-2 w-full"
        style={{ background: accentColor }}
      />
      <div className="p-8">
        <div className="text-6xl mb-4">{emoji}</div>
        <h3 className="text-2xl font-black text-white mb-1">{name}</h3>
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: accentColor }}>
          {specialty}
        </p>
        <p className="text-white/60 italic text-sm mb-4 leading-relaxed">{tagline}</p>
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ─── Card de palestrante ─── */
function SpeakerCard({ name, role, initial }: { name: string; role: string; initial: string }) {
  return (
    <div className="flex flex-col items-center gap-4 group">
      <div
        className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-black text-white
                   bg-gradient-to-br from-[#90080b] to-[#31080d] border-4 border-white/10
                   group-hover:border-[#90080b] transition-all duration-300 shadow-lg"
      >
        {initial}
      </div>
      <div className="text-center">
        <p className="font-bold text-white text-lg leading-tight">{name}</p>
        <p className="text-white/50 text-sm mt-1">{role}</p>
      </div>
    </div>
  );
}

/* ─── Stat item ─── */
function StatItem({
  value,
  isAnimated,
  suffix,
  label,
  prefix,
}: {
  value?: string;
  isAnimated?: boolean;
  suffix?: string;
  label: string;
  prefix?: string;
}) {
  return (
    <div className="text-center">
      <div className="text-4xl lg:text-5xl font-black text-white mb-1">
        {prefix && <span>{prefix}</span>}
        {isAnimated ? (
          <AnimatedCounter end={parseInt(value || "0")} suffix={suffix || ""} />
        ) : (
          <span>{value}{suffix}</span>
        )}
      </div>
      <p className="text-white/60 text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}

/* ─── Página principal ─── */
export default function ImersaoIndustria() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">

      {/* ── NAVBAR MÍNIMA ─────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#90080b] to-[#31080d] flex items-center justify-center">
              <span className="text-white font-black text-xs">II</span>
            </div>
            <span className="font-bold text-white/90 text-sm tracking-wide uppercase">Imersão Indústria</span>
          </div>
          <a
            href="#ingresso"
            className="bg-[#90080b] hover:bg-[#b00a0e] text-white text-sm font-bold px-5 py-2 rounded-lg
                       transition-colors duration-200"
          >
            Garanta sua vaga
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Fundo com gradiente e textura */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0203] via-[#0a0a0a] to-[#0a0a0a]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #90080b 0%, transparent 50%), radial-gradient(circle at 80% 70%, #31080d 0%, transparent 50%)",
          }}
        />
        {/* Grid decorativo */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#90080b]/20 border border-[#90080b]/40 text-[#ff6b6b] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ff6b6b] animate-pulse" />
            Em breve · Edição especial
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none mb-6 tracking-tight">
            <span className="text-white">Imersão</span>
            <br />
            <span className="bg-gradient-to-r from-[#90080b] to-[#e84040] bg-clip-text text-transparent">
              Indústria
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            Palestrantes que você vai <span className="text-white font-semibold">querer conhecer.</span>
          </p>
          <p className="text-white/40 mb-12">Confira alguns dos nomes já confirmados para esta edição.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#ingresso"
              className="bg-[#90080b] hover:bg-[#b00a0e] text-white font-bold px-10 py-4 rounded-xl
                         text-lg transition-all duration-200 hover:shadow-[0_0_30px_rgba(144,8,11,0.5)]
                         hover:-translate-y-0.5"
            >
              Garanta sua vaga
            </a>
            <a
              href="#numeros"
              className="border border-white/20 hover:border-white/50 text-white/80 hover:text-white
                         font-semibold px-10 py-4 rounded-xl text-lg transition-all duration-200"
            >
              Saiba mais
            </a>
          </div>
        </div>

        {/* Seta para baixo */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── PALESTRANTES ──────────────────────────────────────── */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#90080b] font-bold uppercase tracking-widest text-sm mb-3">Lineup confirmado</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white">Palestrantes de destaque</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            <SpeakerCard name="Caio Coppolla" role="Comentarista político" initial="CC" />
            <SpeakerCard name="Professor Hoc" role="Cientista político, professor e palestrante" initial="PH" />
            <SpeakerCard name="Ricardo Amorim" role="Comentarista político" initial="RA" />
            <SpeakerCard name="Fabiana Berttotti" role="Comentarista político" initial="FB" />
          </div>

          <div className="text-center">
            <a
              href="#ingresso"
              className="inline-block bg-[#90080b] hover:bg-[#b00a0e] text-white font-bold px-10 py-4
                         rounded-xl text-lg transition-all duration-200 hover:shadow-[0_0_30px_rgba(144,8,11,0.4)]"
            >
              Garanta a sua vaga
            </a>
          </div>
        </div>
      </section>

      {/* ── NÚMEROS ───────────────────────────────────────────── */}
      <section id="numeros" className="py-24 bg-gradient-to-b from-[#31080d]/40 to-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#90080b] font-bold uppercase tracking-widest text-sm mb-3">Conexões que geram impacto</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Números da última edição
            </h2>
          </div>

          {/* Stats última edição */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            <StatItem isAnimated value="4690" label="inscritos" />
            <StatItem isAnimated value="3573" label="participantes" />
            <StatItem prefix="+" isAnimated value="100" label="palestrantes" />
            <StatItem prefix="+" isAnimated value="50" label="horas de conteúdo" />
            <StatItem isAnimated value="52" label="atividades simultâneas" />
          </div>

          {/* Divisor */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/40 text-sm font-semibold uppercase tracking-widest px-4">
              Em 7 edições
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Stats acumuladas */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-[#e84040] mb-1">+26 mil</div>
              <p className="text-white/60 text-sm uppercase tracking-wider">inscritos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-[#e84040] mb-1">+760</div>
              <p className="text-white/60 text-sm uppercase tracking-wider">palestrantes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-[#e84040] mb-1">+350h</div>
              <p className="text-white/60 text-sm uppercase tracking-wider">de conteúdo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEMA: CUSTO BRASIL ────────────────────────────────── */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-6">
            <p className="text-[#90080b] font-bold uppercase tracking-widest text-sm mb-3">Tema desta edição</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Se o vilão é invisível,<br />
              <span className="bg-gradient-to-r from-[#90080b] to-[#e84040] bg-clip-text text-transparent">
                a gente mostra pra você
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              O <strong className="text-white">Custo Brasil</strong> é o conjunto de entraves burocráticos e econômicos
              que dificultam a prosperidade dos negócios do país.
            </p>
          </div>

          <div className="my-12 flex justify-center">
            <div className="inline-block bg-[#90080b]/10 border border-[#90080b]/30 rounded-2xl px-8 py-5 text-center">
              <p className="text-2xl font-black text-white">Conheça os vilões do Custo Brasil:</p>
            </div>
          </div>

          {/* Vilões */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <VillainCard
              name="Jurássio"
              specialty="Especialidade: juros pesados"
              tagline="Pesado, onipresente e dominante, ele está por toda a parte."
              description="As altas taxas de juros são um problema no país, elas vão desde a compra da sua casa própria até a compra de equipamentos para a indústria."
              accentColor="#e84040"
              emoji="🦕"
            />
            <VillainCard
              name="Infradonha"
              specialty="Especialidade: emperrar a infraestrutura"
              tagline="Preguiçosa, atrasada e desorganizada. Não termina o que começa e prefere o caminho mais esburacado e demorado."
              description="O custo de obras paradas é um desperdício comum no Brasil. Hoje, há mais de 8 mil obras federais por terminar que custaram mais de R$ 8 bilhões."
              accentColor="#f59e0b"
              emoji="🐢"
            />
            <VillainCard
              name="Baiacusto"
              specialty="Especialidade: encarecimento"
              tagline="Uma praga que se espalhou por todo o Brasil, ele infla os preços de tudo que você utiliza."
              description="Um empreendedor que vive em um país da OCDE gasta 43% a menos para abrir um negócio do que no Brasil — e aqui esse processo demora mais."
              accentColor="#a855f7"
              emoji="🦠"
            />
          </div>

          <div className="text-center bg-gradient-to-r from-[#90080b]/20 to-[#31080d]/20 border border-[#90080b]/30 rounded-2xl p-10 mb-8">
            <p className="text-xl lg:text-2xl font-bold text-white mb-6 leading-relaxed">
              Vamos debater juntos e criar novos caminhos<br className="hidden lg:block" />
              para a construção de soluções?
            </p>
            <a
              href="#ingresso"
              className="inline-block bg-[#90080b] hover:bg-[#b00a0e] text-white font-bold px-10 py-4
                         rounded-xl text-lg transition-all duration-200"
            >
              Garanta sua vaga agora
            </a>
          </div>
        </div>
      </section>

      {/* ── RODADA DE NEGÓCIOS ───────────────────────────────── */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#90080b] font-bold uppercase tracking-widest text-sm mb-3">Oportunidade exclusiva</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Rodadas de Negócios
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Gere novas oportunidades em rodadas de negócios exclusivas. Apresente seus produtos e serviços
              para grandes empresas do setor.
            </p>
          </div>

          {/* Empresas parceiras */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {["ArcelorMittal", "Usiminas", "Iveco Group", "Gerdau"].map((company) => (
              <div
                key={company}
                className="bg-white/5 border border-white/10 rounded-xl py-6 px-4 text-center
                           hover:border-[#90080b]/50 hover:bg-[#90080b]/5 transition-all duration-200"
              >
                <p className="text-white font-bold text-lg">{company}</p>
              </div>
            ))}
          </div>

          {/* FAQ accordion simples */}
          <div className="space-y-4 mb-12">
            {[
              {
                q: "O que é a rodada de negócios?",
                a: "Um momento para apresentar o seu portfólio para os representantes e tomadores de decisão das empresas: ArcelorMittal, Usiminas, Iveco Group e Gerdau.",
              },
              {
                q: "Como vai funcionar?",
                a: "As rodadas são agendadas previamente. Cada empresa terá slots de tempo definidos para reuniões one-on-one com os participantes selecionados.",
              },
              {
                q: "Quais são os setores de interesse?",
                a: "Siderurgia, metalurgia, manufatura, tecnologia industrial, logística, serviços B2B para indústria e fornecedores em geral.",
              },
              {
                q: "Como participar?",
                a: "Adquira seu ingresso e manifeste seu interesse na rodada de negócios no momento da inscrição.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden
                           hover:border-white/20 transition-colors"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-white/90">{item.q}</span>
                  <svg
                    className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-white/60 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#ingresso"
              className="inline-block bg-[#90080b] hover:bg-[#b00a0e] text-white font-bold px-10 py-4
                         rounded-xl text-lg transition-all duration-200"
            >
              Compre seu ingresso
            </a>
          </div>
        </div>
      </section>

      {/* ── CTAs ─────────────────────────────────────────────── */}
      <section id="ingresso" className="py-24 bg-gradient-to-b from-[#1a0203] to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Participe. Conecte-se. Transforme.
            </h2>
            <p className="text-white/60 text-lg">Faça parte dessa história!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Ingresso */}
            <div className="bg-gradient-to-b from-[#90080b]/30 to-[#31080d]/20 border border-[#90080b]/50
                            rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#90080b]
                            transition-all duration-300 hover:shadow-[0_0_40px_rgba(144,8,11,0.3)]">
              <div className="text-5xl mb-5">🎟️</div>
              <h3 className="text-2xl font-black text-white mb-3">Compre seu ingresso</h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                Garanta presença no maior evento da indústria mineira.
              </p>
              <a
                href="https://imersaoindustria.com.br/ingressos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#90080b] hover:bg-[#b00a0e] text-white font-bold py-3 px-6
                           rounded-xl transition-colors duration-200 text-center block"
              >
                Garantir vaga
              </a>
            </div>

            {/* Expositor */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center
                            text-center hover:border-white/30 transition-all duration-300">
              <div className="text-5xl mb-5">🏭</div>
              <h3 className="text-2xl font-black text-white mb-3">Seja expositor</h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                Participe e crie oportunidades reais de negócio.
              </p>
              <div className="w-full flex flex-col gap-3">
                <a
                  href="https://imersaoindustria.com.br/expositor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-white/20 hover:border-white/50 text-white/80 hover:text-white
                             font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-center block text-sm"
                >
                  Saiba mais
                </a>
                <a
                  href="mailto:imersaoindustria@fiemg.com.br?subject=Interesse%20em%20ser%20expositor"
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6
                             rounded-xl transition-colors duration-200 text-center block text-sm"
                >
                  Tenho interesse
                </a>
              </div>
            </div>

            {/* Patrocinador */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center
                            text-center hover:border-white/30 transition-all duration-300">
              <div className="text-5xl mb-5">🤝</div>
              <h3 className="text-2xl font-black text-white mb-3">Seja patrocinador</h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                Coloque a sua marca em destaque e seja visto como referência na área.
              </p>
              <div className="w-full flex flex-col gap-3">
                <a
                  href="https://imersaoindustria.com.br/patrocinador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-white/20 hover:border-white/50 text-white/80 hover:text-white
                             font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-center block text-sm"
                >
                  Saiba mais
                </a>
                <a
                  href="mailto:imersaoindustria@fiemg.com.br?subject=Interesse%20em%20ser%20patrocinador"
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6
                             rounded-xl transition-colors duration-200 text-center block text-sm"
                >
                  Tenho interesse
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAIXA FINAL ──────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-[#90080b] to-[#31080d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            A indústria vai estar aqui.<br />E o seu negócio?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Não fique de fora do maior evento da indústria mineira.
          </p>
          <a
            href="#ingresso"
            className="inline-block bg-white text-[#90080b] hover:bg-white/90 font-black px-12 py-4
                       rounded-xl text-xl transition-all duration-200 hover:shadow-2xl"
          >
            Garantir minha vaga
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-black border-t border-white/5 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/40 text-sm mb-1">Dúvidas ou sugestões?</p>
              <a
                href="mailto:imersaoindustria@fiemg.com.br"
                className="text-[#e84040] hover:text-white font-semibold transition-colors"
              >
                imersaoindustria@fiemg.com.br
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/imersaoindustria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors text-sm"
              >
                @imersaoindustria
              </a>
              <a
                href="https://instagram.com/fiemgoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors text-sm"
              >
                @fiemgoficial
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-white/20 text-xs">
              © {new Date().getFullYear()} FIEMG · Federação das Indústrias do Estado de Minas Gerais
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
