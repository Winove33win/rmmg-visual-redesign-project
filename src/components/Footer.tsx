import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Sebraetec", href: "/sebraetec" },
    { label: "Reconhecimento", href: "/reconhecimento" },
    { label: "Treinamentos", href: "/treinamentos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Blog", href: "/blog" }
  ];

  const services = [
    { label: "Calibração de Instrumentos", href: "/servicos/calibracao" },
    { label: "Ensaios de Proficiência", href: "/servicos/ensaios" },
    { label: "Consultoria Técnica", href: "/servicos/consultoria" },
    { label: "Treinamentos Técnicos", href: "/treinamentos" },
    { label: "Área Restrita PEP", href: "/area-restrita" }
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">RMMG</h3>
                <p className="text-sm opacity-80">Rede Metrológica de Minas Gerais</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Referência em serviços de metrologia e qualidade, oferecendo soluções técnicas especializadas 
              para empresas e instituições em todo o Brasil.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nossos Serviços</h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 opacity-80" />
                <div className="text-sm opacity-80">
                  <p>Rua Exemplo, 123</p>
                  <p>Belo Horizonte - MG</p>
                  <p>CEP: 30000-000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">(31) 2512-4800</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">contato@rmmg.org.br</span>
              </div>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Entre em Contato
            </Button>
          </div>
        </div>

        <Separator className="my-8 opacity-20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm opacity-80">
            © 2024 RMMG - Rede Metrológica de Minas Gerais. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm opacity-80">
            <Link to="/privacidade" className="hover:opacity-100">Política de Privacidade</Link>
            <Link to="/termos" className="hover:opacity-100">Termos de Uso</Link>
            <Link to="/cookies" className="hover:opacity-100">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;