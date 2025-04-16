
import { PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo-b.svg" alt="Регион Квартир" className="h-10 mr-3" />
          <div>
            <h1 className="text-white text-xl font-bold">Регион Квартир</h1>
            <p className="text-white/80 text-sm">Агентство недвижимости в Губкине</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <PhoneCall className="text-white" size={20} />
          <a href="tel:89507100910" className="text-white hover:text-white/80">
            8-950-710-09-10
          </a>
          <Button variant="secondary" className="ml-4">
            Связаться с нами
          </Button>
        </div>
        
        <Button variant="secondary" className="md:hidden">
          <PhoneCall size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
