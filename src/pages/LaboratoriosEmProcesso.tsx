import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LaboratoriosEmProcesso = () => {
  const laboratorios = {
    A: [
      { codigo: "607.01", nome: "A+FF Soluções Ambientais Ltda", cidade: "Uberaba/MG" },
      { codigo: "371.01", nome: "A+FF Soluções Ambientais", cidade: "Belo Horizonte/MG" },
      { codigo: "383.01", nome: "AFP Ambiental", cidade: "Campo/MG" },
      { codigo: "439.01", nome: "AMBIENSYS ANÁLISES AMBIENTAIS E DE ALIMENTOS LTDA", cidade: "Maringá/MG" },
      { codigo: "", nome: "Laboratório Ambiensys", cidade: "Maringá/MG" }
    ],
    C: [
      { codigo: "346.01", nome: "Centro de Solinquímicos e Qualidade de Água LTDA", cidade: "Belo Horizonte/MG" },
      { codigo: "", nome: "Laboratório Centro de Água", cidade: "" },
      { codigo: "448.01", nome: "Companhia de Saneamento Municipal", cidade: "Juiz de Fora/MG" },
      { codigo: "407.01", nome: "CLAM MEIO AMBIENTE LTDA", cidade: "Belo Horizonte/MG" },
      { codigo: "407.01", nome: "Laboratório CLAM MEIO AMBIENTE LTDA", cidade: "Belo Horizonte/MG" }
    ],
    E: [
      { codigo: "263.01", nome: "Engenharia Engenharia Química Sanitária e Ambiental Ltda", cidade: "Extrema/MG" },
      { codigo: "369.01", nome: "Engenharia Engenharia Química Sanitária e Ambiental Ltda", cidade: "Juiz de Fora/MG" },
      { codigo: "446.01", nome: "Ecositem Serviços Ambientais ME", cidade: "Araxá/MG" },
      { codigo: "544.01", nome: "Ecositem Serviços Ambientais ME", cidade: "Belo Horizonte/MG" },
      { codigo: "", nome: "Laboratório de Ensaio Diversos", cidade: "" }
    ],
    G: [
      { codigo: "559.01", nome: "GMG SOLUÇÕES AMBIENTAIS EIRELI", cidade: "Belo Horizonte/MG" },
      { codigo: "549.01", nome: "Girante Engenharia e Comércio LTDA", cidade: "Ponte Nova/MG" },
      { codigo: "", nome: "Girante Engenharia e Comércio LTDA", cidade: "" }
    ],
    M: [
      { codigo: "591.01", nome: "Medline Engenharia LTDA", cidade: "Belo Horizonte/MG" },
      { codigo: "", nome: "Laboratório Gc Six Consultoria FH", cidade: "" },
      { codigo: "548.01", nome: "MINERVA S.A.", cidade: "Bauru de Minas/MG" },
      { codigo: "", nome: "LABORATÓRIO MINERAL POÇOS UNIDADE POÇOS DE CALDAS", cidade: "" }
    ],
    P: [
      { codigo: "518.01", nome: "PNT Petróleo e Construção LTDA", cidade: "Uberlândia/MG" },
      { codigo: "", nome: "PNT Petróleo e Construção LTDA", cidade: "" },
      { codigo: "516.01", nome: "Potager Consultoria em Meio Ambiente LTDA", cidade: "Uberlândia/MG" },
      { codigo: "", nome: "Potager Analítico Ambiental", cidade: "" }
    ],
    Q: [
      { codigo: "271.01", nome: "Quantum Espaço Físico - Química e Biológicas Ltda", cidade: "Belo Horizonte/MG" },
      { codigo: "", nome: "Altros Laboratório Ambiental e de Alimentos", cidade: "" }
    ],
    R: [
      { codigo: "516.01", nome: "R&S PERÍCIAS QUÍMICA LTDA", cidade: "Belo Horizonte/MG" },
      { codigo: "", nome: "COHMETRO ENGENHARIA E CONSULTORIA", cidade: "" }
    ],
    S: [
      { codigo: "360.01", nome: "Solumat Serviços e Tecnologia Ambiental Ltda", cidade: "Pouso de Minas/MG" },
      { codigo: "", nome: "Solumat Ambiental e Tecnologia Ambiental", cidade: "" }
    ],
    T: [
      { codigo: "558.01", nome: "TÉCNICAS LTDA", cidade: "Campo Florido/MG" },
      { codigo: "", nome: "TÉCNICAS LTDA", cidade: "" }
    ],
    U: [
      { codigo: "549.01", nome: "UNIFENAS - Universidade José do Rosário Vellano", cidade: "Varginha/MG" },
      { codigo: "", nome: "Laboratório de Águas e Meio Ambiente", cidade: "" }
    ],
    W: [
      { codigo: "555.01", nome: "WaterI Ambiental Ltda", cidade: "Carmo da Cachoeira/MG" },
      { codigo: "", nome: "WaterI Ambiental", cidade: "" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              LABORATÓRIOS EM PROCESSO DE RECONHECIMENTO
            </h1>
            <p className="text-muted-foreground max-w-4xl mx-auto mb-8">
              A Declaração de Laboratórios em Processo apresentada aqui não tem validade de Declaração de Laboratórios em Processo de Reconhecimento de Competência.
            </p>
            <p className="text-muted-foreground max-w-4xl mx-auto">
              Os laboratórios em avaliação colaboram no desenvolvimento e são obtidos por participar descrito na lista de serviços reconhecidos, apresentada na área Laboratórios Reconhecidos.
            </p>
            <p className="text-muted-foreground max-w-4xl mx-auto mt-4">
              Consulte as normas internas ao processo em: <span className="text-primary underline">https://www.rmmg.com.br/biblioteca</span>
            </p>
          </div>

          {/* Laboratórios por letra */}
          <div className="space-y-12">
            {Object.entries(laboratorios).map(([letra, labs]) => (
              <div key={letra}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-2xl font-bold mr-4">
                    {letra}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {labs.map((lab, index) => (
                    <div key={index} className="border-b border-border pb-2">
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="text-primary font-medium">{lab.codigo}</span>
                        <span className="text-foreground font-medium">{lab.nome}</span>
                        <span className="text-muted-foreground">{lab.cidade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LaboratoriosEmProcesso;