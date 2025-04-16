
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Найдите идеальное жильё в Губкине
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            ПЦ «Регион Квартир» — ваш надёжный партнёр в сфере недвижимости. 
            Мы поможем выгодно продать, купить или арендовать недвижимость.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Смотреть объекты</Button>
            <Button size="lg" variant="outline">Подробнее о нас</Button>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
        <div className="w-full h-full bg-primary/10 rounded-tl-3xl overflow-hidden">
          <img 
            src="/placeholder.svg" 
            alt="Недвижимость в Губкине" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
