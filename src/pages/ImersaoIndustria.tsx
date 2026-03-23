import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, Users, Clock, Activity, Calendar, Building2, ChevronDown, Mail, Instagram, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ══════════════════════════════════════════════════════
   HOOK: scroll-triggered visibility
══════════════════════════════════════════════════════ */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ══════════════════════════════════════════════════════
   HOOK: animated counter
══════════════════════════════════════════════════════ */
function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        let cur = 0;
        const inc = end / steps;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= end) { setCount(end); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 1600 / steps);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>;
}

/* ══════════════════════════════════════════════════════
   COMPONENT: section wrapper with enter animation
══════════════════════════════════════════════════════ */
type AnimDir = "up" | "left" | "right" | "none";
function Animate({
  children, delay = 0, dir = "up", className = ""
}: { children: React.ReactNode; delay?: number; dir?: AnimDir; className?: string }) {
  const { ref, visible } = useInView();
  const translate = dir === "up" ? "translateY(40px)" : dir === "left" ? "translateX(-40px)" : dir === "right" ? "translateX(40px)" : "none";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translate,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   EVENT NAV
══════════════════════════════════════════════════════ */
function EventNav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Sobre o evento", href: "#sobre" },
    { label: "Palestrantes",   href: "#palestrantes" },
    { label: "Números",        href: "#numeros" },
    { label: "Tema",           href: "#tema" },
    { label: "Negócios",       href: "#negocios" },
  ];

  const scroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className={`sticky top-[80px] z-40 w-full transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
         style={{ background: "hsl(var(--rmmg-wine))" }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* links */}
          <div className="hidden md:flex items-center gap-1 overflow-x-auto">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => scroll(e, l.href)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${active === l.href
                    ? "text-white border-b-2 border-white"
                    : "text-white/70 hover:text-white border-b-2 border-transparent"}`}
              >
                {l.label}
              </a>
            ))}
          </div>
          {/* CTA buttons */}
          <div className="flex items-center gap-2 py-2 ml-auto">
            <a href="mailto:imersaoindustria@fiemg.com.br?subject=Interesse%20expositor"
               className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white
                          border border-white/30 hover:border-white px-3 py-1.5 rounded transition-all duration-200">
              Quero Expor
            </a>
            <a href="mailto:imersaoindustria@fiemg.com.br?subject=Interesse%20patrocinador"
               className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white
                          border border-white/30 hover:border-white px-3 py-1.5 rounded transition-all duration-200">
              Quero Patrocinar
            </a>
            <a href="#ingresso"
               onClick={e => scroll(e, "#ingresso")}
               className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-rmmg-red hover:bg-gray-100
                          px-4 py-1.5 rounded transition-all duration-200 shadow">
              <Ticket className="h-3.5 w-3.5" />
              Ingressos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   SPEAKER CARD
══════════════════════════════════════════════════════ */
function SpeakerCard({ name, role, initial, delay }: { name: string; role: string; initial: string; delay: number }) {
  return (
    <Animate delay={delay} dir="up">
      <div className="flex flex-col items-center gap-4 group cursor-default">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-hero flex items-center justify-center
                          border-4 border-white shadow-elegant
                          group-hover:scale-105 group-hover:shadow-xl transition-all duration-300">
            <span className="text-white font-bold text-3xl">{initial}</span>
          </div>
          <div className="absolute inset-0 rounded-full ring-2 ring-primary/0 group-hover:ring-primary/60
                          transition-all duration-300" />
        </div>
        <div className="text-center">
          <p className="font-bold text-foreground text-base leading-tight">{name}</p>
          <p className="text-muted-foreground text-sm mt-1 leading-snug max-w-[160px] mx-auto">{role}</p>
        </div>
      </div>
    </Animate>
  );
}

/* ══════════════════════════════════════════════════════
   VILLAIN CARD
══════════════════════════════════════════════════════ */
function VillainCard({ name, specialty, tagline, description, color, delay }:
  { name: string; specialty: string; tagline: string; description: string; color: string; delay: number }) {
  return (
    <Animate delay={delay} dir="up">
      <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl
                      transition-all duration-400 hover:-translate-y-2 h-full flex flex-col">
        <div className="h-2 w-full transition-all duration-300 group-hover:h-3" style={{ backgroundColor: color }} />
        <div className="p-7 flex flex-col gap-3 flex-1">
          <h3 className="text-xl font-black text-foreground">{name}</h3>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color }}>{specialty}</p>
          <p className="text-sm text-muted-foreground italic leading-relaxed">{tagline}</p>
          <Separator className="my-1" />
          <p className="text-sm text-foreground leading-relaxed flex-1">{description}</p>
        </div>
      </div>
    </Animate>
  );
}

/* ══════════════════════════════════════════════════════
   STAT CARD (sobre fundo escuro)
══════════════════════════════════════════════════════ */
function StatRow({ value, label, prefix = "", animated = false, delay = 0 }:
  { value: number | string; label: string; prefix?: string; animated?: boolean; delay?: number }) {
  return (
    <Animate delay={delay} dir="up">
      <div className="text-center py-4">
        <div className="text-4xl lg:text-5xl font-black text-white mb-1 leading-none">
          {prefix}
          {animated && typeof value === "number"
            ? <AnimatedCounter end={value} />
            : <span>{value}</span>}
        </div>
        <p className="text-white/60 text-xs uppercase tracking-widest font-medium">{label}</p>
      </div>
    </Animate>
  );
}

/* ══════════════════════════════════════════════════════
   CTA CARD (ingresso / expositor / patrocinador)
══════════════════════════════════════════════════════ */
function CtaCard({ title, description, icon: Icon, primary, delay, href, altHref, altLabel }:
  {
    title: string; description: string; icon: React.ElementType;
    primary?: boolean; delay: number;
    href: string; altHref?: string; altLabel?: string;
  }) {
  return (
    <Animate delay={delay} dir="up">
      <div className={`rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2
        ${primary
          ? "bg-white border-2 border-primary shadow-elegant hover:shadow-xl"
          : "bg-white border border-border hover:shadow-lg"}`}>
        <div className={`h-1.5 w-full ${primary ? "bg-primary" : "bg-accent"}`} />
        <div className="p-8 flex flex-col items-center text-center gap-5 flex-1">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center
            ${primary ? "bg-gradient-hero" : "bg-accent"}`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
          <div className="w-full space-y-3">
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
               className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm
                           transition-all duration-200
                 ${primary
                   ? "bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:scale-[1.02]"
                   : "bg-accent hover:bg-accent/90 text-white"}`}>
              {primary ? "Garantir vaga" : "Saiba mais"}
              <ArrowRight className="h-4 w-4" />
            </a>
            {altHref && (
              <a href={altHref}
                 className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold
                            border border-primary text-primary hover:bg-primary hover:text-white
                            transition-all duration-200">
                {altLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </Animate>
  );
}

/* ══════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════ */
export default function ImersaoIndustria() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EventNav />

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section id="sobre" className="relative overflow-hidden bg-gradient-hero min-h-[88vh] flex items-center">
        {/* Grid sutil */}
        <div className="absolute inset-0 opacity-[0.06]"
             style={{
               backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
               backgroundSize: "56px 56px"
             }} />
        {/* Overlay radial */}
        <div className="absolute inset-0"
             style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,0,0,0.15) 0%, transparent 70%)" }} />

        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-36">
          <div className="flex flex-col items-center text-center gap-8">

            <Animate dir="none">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30
                              text-white/90 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                8ª Edição · Em breve
              </div>
            </Animate>

            <Animate delay={100} dir="up">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-none tracking-tight">
                Imersão<br />
                <span className="text-white/90">Indústria</span>
              </h1>
            </Animate>

            <Animate delay={200} dir="up">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-white/80 text-base font-medium">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  23 e 24 de abril de 2026
                </span>
                <span className="hidden sm:block text-white/30">|</span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  BH Shopping, Belo Horizonte
                </span>
              </div>
            </Animate>

            <Animate delay={300} dir="up">
              <p className="text-white/80 text-xl lg:text-2xl max-w-2xl leading-relaxed">
                Entenda sobre o <strong className="text-white">Custo Brasil</strong> e leve a sua empresa mais longe.
              </p>
            </Animate>

            <Animate delay={400} dir="up">
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#ingresso"
                   className="inline-flex items-center gap-2 bg-white text-rmmg-red hover:bg-gray-100
                              font-bold px-8 py-4 rounded-xl text-lg shadow-elegant
                              transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
                  Quero me Inscrever
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#palestrantes"
                   className="inline-flex items-center gap-2 border-2 border-white/50 text-white hover:bg-white/10
                              font-semibold px-8 py-4 rounded-xl text-lg
                              transition-all duration-200">
                  Ver Palestrantes
                </a>
              </div>
            </Animate>

            {/* Stat mini strip */}
            <Animate delay={500} dir="up" className="w-full max-w-2xl mt-6">
              <div className="grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                {[
                  { v: "+26 mil", l: "inscritos em 7 edições" },
                  { v: "+760",    l: "palestrantes" },
                  { v: "8ª",     l: "edição do evento" },
                ].map(({ v, l }) => (
                  <div key={l} className="bg-white/5 hover:bg-white/10 transition-colors py-5 text-center">
                    <div className="text-2xl font-black text-white">{v}</div>
                    <div className="text-white/50 text-xs mt-1 uppercase tracking-wide">{l}</div>
                  </div>
                ))}
              </div>
            </Animate>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── 2. FAIXA SUBTEMA ─────────────────────────────────── */}
      <section className="py-14 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <Animate dir="left" className="flex-1">
              <p className="text-white/50 text-sm uppercase tracking-widest mb-2 font-semibold">Tema desta edição</p>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                Se o vilão é invisível,<br />a gente mostra pra você.
              </h2>
              <p className="text-white/60 mt-3 text-lg leading-relaxed max-w-lg">
                O <span className="text-white font-semibold">Custo Brasil</span> é o conjunto de entraves
                burocráticos e econômicos que dificultam a prosperidade dos negócios do país.
              </p>
            </Animate>
            <Animate delay={200} dir="right">
              <a href="#ingresso"
                 className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white
                            font-bold px-8 py-4 rounded-xl text-lg shadow-lg
                            transition-all duration-200 hover:shadow-primary/30 hover:-translate-y-0.5 whitespace-nowrap">
                Quero me Inscrever
                <ArrowRight className="h-5 w-5" />
              </a>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── 3. PALESTRANTES ──────────────────────────────────── */}
      <section id="palestrantes" className="py-24 bg-background scroll-mt-32">
        <div className="container mx-auto px-4">
          <Animate dir="up" className="text-center mb-16 space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Lineup confirmado</p>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              Palestrantes de destaque
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
              Estamos preparando uma programação especial com palestrantes que você vai querer conhecer.{" "}
              <strong className="text-foreground">Em breve</strong>, confira os nomes já confirmados.
            </p>
          </Animate>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            <SpeakerCard name="Caio Coppolla"     role="Comentarista político"                       initial="CC" delay={0}   />
            <SpeakerCard name="Professor Hoc"     role="Cientista político, professor e palestrante" initial="PH" delay={100} />
            <SpeakerCard name="Ricardo Amorim"    role="Comentarista político"                       initial="RA" delay={200} />
            <SpeakerCard name="Fabiana Berttotti" role="Comentarista política"                       initial="FB" delay={300} />
          </div>

          <Animate delay={200} dir="up" className="text-center">
            <a href="#ingresso"
               className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white
                          font-bold px-10 py-4 rounded-xl text-lg shadow-elegant
                          transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
              Garanta a sua vaga
              <ArrowRight className="h-5 w-5" />
            </a>
          </Animate>
        </div>
      </section>

      {/* ── 4. NÚMEROS ───────────────────────────────────────── */}
      <section id="numeros" className="scroll-mt-32" style={{ background: "hsl(var(--rmmg-wine))" }}>
        <div className="container mx-auto px-4 py-24">

          <Animate dir="up" className="mb-16 text-center">
            <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-2">Resultados comprovados</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Conexões que geram impacto.</h2>
            <p className="text-white/60 mt-2">Confira os números da última edição:</p>
          </Animate>

          {/* Grid última edição */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10 mb-10">
            {[
              { v: 4690,  l: "inscritos",              p: ""  },
              { v: 3573,  l: "participantes",           p: ""  },
              { v: 100,   l: "palestrantes",            p: "+" },
              { v: 50,    l: "horas de conteúdo",       p: "+" },
              { v: 52,    l: "atividades simultâneas",  p: ""  },
            ].map(({ v, l, p }, i) => (
              <div key={l} className="bg-white/5 hover:bg-white/10 transition-colors py-10 flex flex-col items-center">
                <StatRow value={v} label={l} prefix={p} animated delay={i * 80} />
              </div>
            ))}
          </div>

          {/* Acumulado 7 edições */}
          <Animate delay={200} dir="up">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 lg:p-12">
              <p className="text-center text-white/50 text-xs font-bold uppercase tracking-widest mb-8">
                Em 7 edições
              </p>
              <div className="grid grid-cols-3 gap-8 divide-x divide-white/10">
                {[
                  { v: "+26 mil", l: "inscritos" },
                  { v: "+760",    l: "palestrantes" },
                  { v: "+350h",   l: "de conteúdo" },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center">
                    <div className="text-3xl lg:text-5xl font-black text-white mb-2">{v}</div>
                    <p className="text-white/50 text-xs uppercase tracking-widest">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── 5. VILÕES / TEMA ─────────────────────────────────── */}
      <section id="tema" className="py-24 bg-secondary scroll-mt-32">
        <div className="container mx-auto px-4">
          <Animate dir="up" className="text-center mb-4 space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Conheça os vilões do Custo Brasil</p>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">Os entraves que freiam a indústria</h2>
          </Animate>

          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-14">
            <VillainCard
              name="Jurássio"
              specialty="Especialidade: juros pesados"
              tagline="Pesado, onipresente e dominante, ele está por toda a parte."
              description="As altas taxas de juros são um problema no país, elas vão desde a compra da sua casa própria até a compra de equipamentos para a indústria."
              color="#90080b"
              delay={0}
            />
            <VillainCard
              name="Infradonha"
              specialty="Especialidade: emperrar a infraestrutura"
              tagline="Preguiçosa, atrasada e desorganizada. Não termina o que começa."
              description="O custo de obras paradas é um desperdício comum no Brasil. Hoje, há mais de 8 mil obras federais por terminar que custaram mais de R$ 8 bilhões."
              color="#b45309"
              delay={120}
            />
            <VillainCard
              name="Baiacusto"
              specialty="Especialidade: encarecimento"
              tagline="Uma praga que se espalhou por todo o Brasil, ele infla os preços de tudo."
              description="Um empreendedor em um país da OCDE gasta 43% a menos para abrir um negócio do que no Brasil — e aqui esse processo demora muito mais."
              color="#6d28d9"
              delay={240}
            />
          </div>

          <Animate delay={300} dir="up">
            <div className="bg-foreground rounded-2xl p-10 text-center space-y-5">
              <p className="text-xl font-bold text-white max-w-2xl mx-auto leading-relaxed">
                Vamos debater juntos e criar novos caminhos para a construção de soluções?
              </p>
              <a href="#ingresso"
                 className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white
                            font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg">
                Participar do evento
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── 6. RODADA DE NEGÓCIOS ────────────────────────────── */}
      <section id="negocios" className="py-24 bg-background scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* esquerda */}
            <div>
              <Animate dir="left">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Oportunidade exclusiva</p>
                <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">Rodadas de Negócios</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Gere novas oportunidades em rodadas de negócios exclusivas. Apresente seus produtos e serviços
                  para representantes e tomadores de decisão das principais empresas do setor.
                </p>
              </Animate>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {["ArcelorMittal", "Usiminas", "Iveco Group", "Gerdau"].map((company, i) => (
                  <Animate key={company} delay={i * 80} dir="up">
                    <Card className="hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-semibold text-foreground text-sm">{company}</span>
                      </CardContent>
                    </Card>
                  </Animate>
                ))}
              </div>

              <Animate delay={200} dir="up">
                <a href="#ingresso"
                   className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white
                              font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-elegant
                              hover:shadow-xl hover:-translate-y-0.5">
                  Quero participar
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Animate>
            </div>

            {/* direita – FAQ */}
            <Animate delay={150} dir="right">
              <div className="space-y-3">
                <p className="text-sm font-bold uppercase tracking-widest text-foreground mb-5">
                  Perguntas frequentes
                </p>
                {[
                  { q: "O que é a rodada de negócios?",
                    a: "Um momento para apresentar o seu portfólio para os representantes e tomadores de decisão das empresas: ArcelorMittal, Usiminas, Iveco Group e Gerdau." },
                  { q: "Como vai funcionar?",
                    a: "As rodadas são agendadas previamente. Cada empresa terá slots de tempo definidos para reuniões one-on-one com os participantes selecionados." },
                  { q: "Quais são os setores de interesse?",
                    a: "Siderurgia, metalurgia, manufatura, tecnologia industrial, logística, serviços B2B para indústria e fornecedores em geral." },
                  { q: "Como participar?",
                    a: "Adquira seu ingresso e manifeste seu interesse na rodada de negócios no momento da inscrição." },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="group bg-secondary border border-border rounded-xl overflow-hidden
                               hover:border-primary/40 transition-all duration-200"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
                      <span className="font-semibold text-foreground text-sm pr-4">{item.q}</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 flex-shrink-0
                                              transition-transform duration-300" />
                    </summary>
                    <div className="px-5 pb-5">
                      <Separator className="mb-4" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── 7. CTAs ──────────────────────────────────────────── */}
      <section id="ingresso" className="py-24 bg-gradient-hero scroll-mt-32">
        <div className="container mx-auto px-4">
          <Animate dir="up" className="text-center mb-14 space-y-3">
            <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Faça parte dessa história</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Participe. Conecte-se. Transforme.</h2>
            <p className="text-white/70 max-w-lg mx-auto">
              A indústria vai estar aqui. E o seu negócio?
            </p>
          </Animate>

          <div className="grid md:grid-cols-3 gap-6">
            <CtaCard
              title="Compre seu ingresso"
              description="Garanta presença no maior evento da indústria mineira e conecte-se com quem transforma o setor."
              icon={Ticket}
              primary
              delay={0}
              href="https://imersaoindustria.com.br/ingressos"
            />
            <CtaCard
              title="Seja expositor"
              description="Participe, apresente seus produtos e crie oportunidades reais de negócio para sua empresa."
              icon={Building2}
              delay={120}
              href="https://imersaoindustria.com.br/expositor"
              altHref="mailto:imersaoindustria@fiemg.com.br?subject=Interesse%20expositor"
              altLabel="Tenho interesse"
            />
            <CtaCard
              title="Seja patrocinador"
              description="Coloque a sua marca em destaque e seja visto como referência na indústria mineira."
              icon={Activity}
              delay={240}
              href="https://imersaoindustria.com.br/patrocinador"
              altHref="mailto:imersaoindustria@fiemg.com.br?subject=Interesse%20patrocinador"
              altLabel="Tenho interesse"
            />
          </div>
        </div>
      </section>

      {/* ── 8. CONTATO / REDES ───────────────────────────────── */}
      <section className="py-14 bg-secondary border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <Animate dir="left" className="text-center md:text-left space-y-2">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Dúvidas ou sugestões?</p>
              <a href="mailto:imersaoindustria@fiemg.com.br"
                 className="flex items-center gap-2 text-foreground hover:text-primary font-semibold transition-colors">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                imersaoindustria@fiemg.com.br
              </a>
            </Animate>

            <Animate dir="right" className="flex items-center gap-5">
              {[
                { handle: "@imersaoindustria", href: "https://instagram.com/imersaoindustria" },
                { handle: "@fiemgoficial",     href: "https://instagram.com/fiemgoficial" },
              ].map(({ handle, href }) => (
                <a key={handle} href={href} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-8 h-8 border border-border group-hover:border-primary rounded-full
                                  flex items-center justify-center transition-colors">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">{handle}</span>
                </a>
              ))}
            </Animate>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
