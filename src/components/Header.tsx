
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const sections = [{
    id: "introduction",
    label: "Introduction"
  }, {
    id: "game-world",
    label: "Game World"
  }, {
    id: "wayfinding",
    label: "Wayfinding"
  }, {
    id: "progression",
    label: "Progression"
  }, {
    id: "conclusion",
    label: "Conclusion"
  }, {
    id: "references",
    label: "References"
  }];
  
  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };
  
  return <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container py-4 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex-grow max-w-[90%]">
            <h1 className="text-lg md:text-xl font-bold text-primary">
              <span className="hidden sm:inline">Beyond Entertainment:</span> How Pokémon Go's AR Design Promotes Mental Health
            </h1>
          </div>
          
          {/* Desktop Navigation - Dropdown Menu */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Sections <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                {sections.map(section => (
                  <DropdownMenuItem 
                    key={section.id}
                    onClick={() => handleNavClick(section.id)}
                    className="cursor-pointer"
                  >
                    {section.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-md text-slate-500 hover:bg-slate-100">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn("md:hidden", mobileMenuOpen ? "max-h-96 opacity-100 transition-all duration-300 ease-in" : "max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out")}>
          <nav className="flex flex-col pt-2 pb-4 space-y-2">
            {sections.map(section => <button key={section.id} onClick={() => handleNavClick(section.id)} className="px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded">
                {section.label}
              </button>)}
          </nav>
        </div>
      </div>
    </header>;
};

export default Header;
