import { useEffect, useRef, useState } from "react";
import { ArrowRight, Users, Clock, Activity, Calendar, Building2, ChevronDown, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          }, 1800 / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

/* ─── Card de palestrante ─── */
function SpeakerCard({ name, role, initial }: { name: string; role: string; initial: string }) {
  return (
    <Card className="bg-background hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center">
      <CardContent className="p-8 space-y-4">
        <div className="mx-auto w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-2xl">{initial}</span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── Card de estatística ─── */
function StatCard({
  value,
  label,
  prefix = "",
  suffix = "",
  animated = false,
  icon: Icon,
}: {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
  animated?: boolean;
  icon: React.ElementType;
}) {
  return (
    <Card className="bg-white/10 backdrop-blur border-white/20">
      <CardContent className="p-6 text-center text-white">
        <div className="mx-auto w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-3">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="text-3xl lg:text-4xl font-bold mb-1">
          {prefix}
          {animated && typeof value === "number" ? (
            <AnimatedCounter end={value} suffix={suffix} />
          ) : (
            <span>{value}{suffix}</span>
          )}
        </div>
        <div className="text-sm opacity-80">{label}</div>
      </CardContent>
    </Card>
  );
}

/* ─── Card de vilão ─── */
function VillainCard({
  name,
  specialty,
  tagline,
  description,
  color,
}: {
  name: string;
  specialty: string;
  tagline: string;
  description: string;
  color: string;
}) {
  return (
    <Card className="bg-background hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="h-1.5 w-full" style={{ backgroundColor: color }} />
      <CardContent className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>
          {specialty}
        </p>
        <p className="text-sm text-muted-foreground italic leading-relaxed">{tagline}</p>
        <Separator />
        <p className="text-sm text-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

/* ─── Página ─── */
export default function ImersaoIndustria() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative container mx-auto px-4 py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Em breve · Edição Especial
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Imersão{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    Indústria
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                  Palestrantes que você vai querer conhecer. Conexões que geram impacto real para a indústria mineira.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-rmmg-red hover:bg-gray-100 shadow-elegant font-bold"
                  asChild
                >
                  <a href="#ingresso">
                    Garanta sua vaga
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rmmg-red"
                  asChild
                >
                  <a href="#numeros">Saiba mais</a>
                </Button>
              </div>
            </div>

            {/* Cards de destaque */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard value={4690} label="Inscritos na última edição" animated icon={Users} />
              <StatCard value={3573} label="Participantes presentes" animated icon={Activity} />
              <StatCard prefix="+" value={100} label="Palestrantes confirmados" animated icon={Calendar} />
              <StatCard prefix="+" value={50} label="Horas de conteúdo" animated icon={Clock} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── PALESTRANTES ──────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Lineup confirmado</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Palestrantes de destaque
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Confira alguns dos nomes já confirmados para esta edição especial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <SpeakerCard name="Caio Coppolla"      role="Comentarista político"                              initial="CC" />
            <SpeakerCard name="Professor Hoc"      role="Cientista político, professor e palestrante"        initial="PH" />
            <SpeakerCard name="Ricardo Amorim"     role="Comentarista político"                              initial="RA" />
            <SpeakerCard name="Fabiana Berttotti"  role="Comentarista político"                              initial="FB" />
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-elegant" asChild>
              <a href="#ingresso">
                Garanta a sua vaga
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── NÚMEROS ───────────────────────────────────────────── */}
      <section id="numeros" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Resultados comprovados</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Números que falam por si
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Conexões que geram impacto. Confira os números da última edição.
            </p>
          </div>

          {/* Grid última edição */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {[
              { v: 4690,  label: "Inscritos",             icon: Users },
              { v: 3573,  label: "Participantes",          icon: Activity },
              { v: 100,   label: "Palestrantes",   p: "+", icon: Users },
              { v: 50,    label: "Horas de conteúdo", p: "+", icon: Clock },
              { v: 52,    label: "Atividades simultâneas", icon: Calendar },
            ].map(({ v, label, p = "", icon: Icon }) => (
              <Card key={label} className="bg-background hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="mx-auto w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {p}<AnimatedCounter end={v} />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Acumulado 7 edições */}
          <Card className="bg-gradient-hero border-0 overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <p className="text-white/80 text-sm uppercase tracking-widest font-semibold">Em 7 edições</p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: "+26 mil", label: "inscritos" },
                  { value: "+760",    label: "palestrantes" },
                  { value: "+350h",   label: "de conteúdo" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center text-white">
                    <div className="text-3xl lg:text-4xl font-bold mb-1">{value}</div>
                    <p className="text-sm opacity-80 uppercase tracking-wide">{label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── TEMA: CUSTO BRASIL ────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Tema desta edição</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Se o vilão é invisível,<br className="hidden lg:block" /> a gente mostra pra você
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              O <strong className="text-foreground">Custo Brasil</strong> é o conjunto de entraves burocráticos
              e econômicos que dificultam a prosperidade dos negócios do país.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <VillainCard
              name="Jurássio"
              specialty="Especialidade: juros pesados"
              tagline="Pesado, onipresente e dominante, ele está por toda a parte."
              description="As altas taxas de juros são um problema no país, elas vão desde a compra da sua casa própria até a compra de equipamentos para a indústria."
              color="#90080b"
            />
            <VillainCard
              name="Infradonha"
              specialty="Especialidade: emperrar a infraestrutura"
              tagline="Preguiçosa, atrasada e desorganizada. Não termina o que começa e prefere o caminho mais esburacado e demorado."
              description="O custo de obras paradas é um desperdício comum no Brasil. Hoje, há mais de 8 mil obras federais por terminar que custaram mais de R$ 8 bilhões."
              color="#b45309"
            />
            <VillainCard
              name="Baiacusto"
              specialty="Especialidade: encarecimento"
              tagline="Uma praga que se espalhou por todo o Brasil, ele infla os preços de tudo que você utiliza."
              description="Um empreendedor que vive em um país da OCDE gasta 43% a menos para abrir um negócio do que no Brasil — e aqui esse processo demora mais."
              color="#6d28d9"
            />
          </div>

          <Card className="bg-secondary border-0">
            <CardContent className="p-10 text-center space-y-6">
              <p className="text-xl font-semibold text-foreground max-w-2xl mx-auto leading-relaxed">
                Vamos debater juntos e criar novos caminhos para a construção de soluções?
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-elegant" asChild>
                <a href="#ingresso">
                  Participar do evento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── RODADA DE NEGÓCIOS ───────────────────────────────── */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Coluna esquerda */}
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Oportunidade exclusiva</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Rodadas de Negócios
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Gere novas oportunidades em rodadas de negócios exclusivas. Apresente seus produtos
                  e serviços para os representantes e tomadores de decisão das principais empresas do setor.
                </p>
              </div>

              {/* Empresas */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Empresas participantes</p>
                <div className="grid grid-cols-2 gap-3">
                  {["ArcelorMittal", "Usiminas", "Iveco Group", "Gerdau"].map((company) => (
                    <Card key={company} className="bg-background hover:shadow-elegant transition-all duration-200 hover:-translate-y-0.5">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-semibold text-foreground text-sm">{company}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-elegant w-full sm:w-auto" asChild>
                <a href="#ingresso">
                  Quero participar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Coluna direita — FAQ */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Perguntas frequentes</p>
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
                  className="group bg-background border border-border rounded-lg overflow-hidden
                             hover:border-primary/40 transition-colors"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-semibold text-foreground text-sm">{item.q}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-3" />
                  </summary>
                  <div className="px-5 pb-5">
                    <Separator className="mb-4" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTAs ─────────────────────────────────────────────── */}
      <section id="ingresso" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <Card className="bg-white/95 backdrop-blur border-0 shadow-elegant">
            <CardContent className="p-12">
              <div className="text-center mb-12 space-y-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Faça parte dessa história</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Participe. Conecte-se. Transforme.
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  A indústria vai estar aqui. Escolha como você quer fazer parte.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Ingresso */}
                <Card className="border-2 border-primary bg-primary/5 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-5">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Compre seu ingresso</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Garanta presença no maior evento da indústria mineira.
                      </p>
                    </div>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white shadow-elegant"
                      asChild
                    >
                      <a href="https://imersaoindustria.com.br/ingressos" target="_blank" rel="noopener noreferrer">
                        Garantir vaga
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Expositor */}
                <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-5">
                    <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
                      <Building2 className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Seja expositor</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Participe e crie oportunidades reais de negócio.
                      </p>
                    </div>
                    <div className="w-full space-y-3">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" asChild>
                        <a href="https://imersaoindustria.com.br/expositor" target="_blank" rel="noopener noreferrer">
                          Saiba mais
                        </a>
                      </Button>
                      <Button variant="ghost" className="w-full text-primary hover:bg-primary/10" asChild>
                        <a href="mailto:imersaoindustria@fiemg.com.br?subject=Interesse%20em%20ser%20expositor">
                          Tenho interesse
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Patrocinador */}
                <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-5">
                    <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
                      <Activity className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Seja patrocinador</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Coloque a sua marca em destaque e seja referência na área.
                      </p>
                    </div>
                    <div className="w-full space-y-3">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" asChild>
                        <a href="https://imersaoindustria.com.br/patrocinador" target="_blank" rel="noopener noreferrer">
                          Saiba mais
                        </a>
                      </Button>
                      <Button variant="ghost" className="w-full text-primary hover:bg-primary/10" asChild>
                        <a href="mailto:imersaoindustria@fiemg.com.br?subject=Interesse%20em%20ser%20patrocinador">
                          Tenho interesse
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── CONTATO / REDES SOCIAIS ──────────────────────────── */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Dúvidas ou sugestões?</p>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <a
                  href="mailto:imersaoindustria@fiemg.com.br"
                  className="font-semibold text-foreground hover:text-primary transition-colors"
                >
                  imersaoindustria@fiemg.com.br
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/imersaoindustria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center">
                  <Instagram className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">@imersaoindustria</span>
              </a>
              <a
                href="https://instagram.com/fiemgoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center">
                  <Instagram className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">@fiemgoficial</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
