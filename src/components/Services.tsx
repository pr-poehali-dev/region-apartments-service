
import { Home, HelpCircle, Building, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: 'Продажа недвижимости',
      description: 'Поможем выгодно продать вашу недвижимость на рынке Губкина'
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: 'Аренда квартир',
      description: 'Большой выбор квартир для аренды с проверенными условиями'
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: 'Подбор жилья',
      description: 'Индивидуальный подход к поиску идеального варианта для вас'
    },
    {
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
      title: 'Консультации',
      description: 'Профессиональные консультации по всем вопросам недвижимости'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
