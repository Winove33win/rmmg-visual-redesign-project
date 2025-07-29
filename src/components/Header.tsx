import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { 
      label: "Sebraetec", 
      href: "/sebraetec",
      submenu: [
        { label: "Sobre o Programa", href: "/sebraetec/sobre" },
        { label: "Como Participar", href: "/sebraetec/participar" },
        { label: "Resultados", href: "/sebraetec/resultados" }
      ]
    },
    { 
      label: "Informativo – Reconhecimento", 
      href: "/reconhecimento",
      submenu: [
        { label: "CGCRE", href: "/reconhecimento/cgcre" },
        { label: "Acreditação", href: "/reconhecimento/acreditacao" },
        { label: "Competências", href: "/reconhecimento/competencias" }
      ]
    },
    { 
      label: "Treinamentos", 
      href: "/treinamentos",
      submenu: [
        { label: "Cursos Disponíveis", href: "/treinamentos/cursos" },
        { label: "Calendário", href: "/treinamentos/calendario" },
        { label: "Certificações", href: "/treinamentos/certificacoes" }
      ]
    },
    { 
      label: "Áreas Técnicas", 
      href: "/areas-tecnicas",
      submenu: [
        { label: "Metrologia Dimensional", href: "/areas-tecnicas/dimensional" },
        { label: "Metrologia Elétrica", href: "/areas-tecnicas/eletrica" },
        { label: "Metrologia Térmica", href: "/areas-tecnicas/termica" }
      ]
    },
    {
      label: "Serviços",
      href: "/servicos",
      submenu: [
        { label: "Calibração", href: "/servicos/calibracao" },
        { label: "Ensaios", href: "/servicos/ensaios" },
        { label: "Consultoria", href: "/servicos/consultoria" }
      ]
    },
    {
      label: "PEP",
      href: "/peps",
      submenu: [
        { label: "Programas Ativos", href: "/peps" },
        { label: "PEP Microbiologia", href: "/peps/microbiologia" },
        { label: "PEP Ruído", href: "/peps/ruido" },
        { label: "PEP Óleos", href: "/peps/oleos" },
        { label: "PEP Química Analítica", href: "/peps/quimica-analitica" },
        { label: "PEP Metrologia Dimensional", href: "/peps/metrologia-dimensional" }
      ]
    },
    { label: "Blog", href: "/blog" },
    { label: "Área Restrita PEP", href: "/area-restrita" },
    { label: "Entrar", href: "/auth" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar with Certifications */}
      <div className="bg-secondary py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center text-sm text-muted-foreground">
            <span>Certificada ISO 9001 pela Bureau Veritas | Acreditada ISO/IEC 17043 pela CGCRE</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">RMMG</h1>
                <p className="text-xs text-muted-foreground">Rede Metrológica de Minas Gerais</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium hover:text-primary transition-colors">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-2 p-4 w-[400px]">
                          {item.submenu.map((subItem, subIndex) => (
                            <NavigationMenuLink
                              asChild
                              key={subIndex}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <Link to={subItem.href}>{subItem.label}</Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      asChild
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      <Link to={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.submenu ? (
                      <div className="space-y-2">
                        <button className="flex items-center justify-between w-full text-left text-sm font-medium py-2">
                          {item.label}
                          <ChevronDown className="h-4 w-4" />
                        </button>
                        <div className="pl-4 space-y-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block text-sm text-muted-foreground hover:text-foreground py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block text-sm font-medium py-2 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;