
import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { MapPin, Home, ArrowRight } from 'lucide-react';

const properties = [
  {
    id: 1,
    type: 'квартиры',
    title: '2-комнатная квартира',
    address: 'мкр. Журавлики',
    price: '3 500 000 ₽',
    area: '56',
    rooms: '2',
    floor: '3/9',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    type: 'квартиры',
    title: '1-комнатная квартира',
    address: 'ул. Раевского',
    price: '2 100 000 ₽',
    area: '42',
    rooms: '1',
    floor: '5/5',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    type: 'дома',
    title: 'Дом с участком',
    address: 'с. Скородное',
    price: '5 500 000 ₽',
    area: '120',
    rooms: '4',
    land: '15 сот.',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    type: 'квартиры',
    title: '3-комнатная квартира',
    address: 'мкр. Лебеди',
    price: '4 200 000 ₽',
    area: '78',
    rooms: '3',
    floor: '2/5',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    type: 'дома',
    title: 'Таунхаус',
    address: 'Губкин',
    price: '6 700 000 ₽',
    area: '150',
    rooms: '5',
    land: '4 сот.',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    type: 'аренда',
    title: '1-комнатная квартира',
    address: 'ул. Дзержинского',
    price: '12 000 ₽/мес.',
    area: '36',
    rooms: '1',
    floor: '4/9',
    image: '/placeholder.svg'
  }
];

const PropertyGallery = () => {
  const [activeTab, setActiveTab] = useState('все');
  
  const filteredProperties = activeTab === 'все' 
    ? properties 
    : properties.filter(property => property.type === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Наши объекты</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Ознакомьтесь с нашей подборкой доступных объектов недвижимости в Губкине и области. 
          Каждый объект проверен нашими специалистами.
        </p>
        
        <Tabs defaultValue="все" className="mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="все" onClick={() => setActiveTab('все')}>Все объекты</TabsTrigger>
              <TabsTrigger value="квартиры" onClick={() => setActiveTab('квартиры')}>Квартиры</TabsTrigger>
              <TabsTrigger value="дома" onClick={() => setActiveTab('дома')}>Дома</TabsTrigger>
              <TabsTrigger value="аренда" onClick={() => setActiveTab('аренда')}>Аренда</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="все" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="квартиры" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="дома" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="аренда" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="gap-2">
            Смотреть все объекты <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

interface PropertyCardProps {
  property: {
    id: number;
    type: string;
    title: string;
    address: string;
    price: string;
    area: string;
    rooms: string;
    floor?: string;
    land?: string;
    image: string;
  }
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm">
          {property.type === 'аренда' ? 'Аренда' : 'Продажа'}
        </div>
      </div>
      
      <CardContent className="pt-4">
        <CardTitle className="text-xl mb-2">{property.title}</CardTitle>
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={16} className="mr-1" />
          <CardDescription>{property.address}</CardDescription>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
          <div className="flex items-center">
            <Home size={14} className="mr-1 text-primary" />
            <span>{property.area} м²</span>
          </div>
          <div>
            <span className="font-medium">{property.rooms}-комн.</span>
          </div>
          {property.floor && (
            <div>
              <span>Этаж: {property.floor}</span>
            </div>
          )}
          {property.land && (
            <div>
              <span>Участок: {property.land}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-0">
        <span className="font-bold text-lg text-primary">{property.price}</span>
        <Button variant="outline" size="sm">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyGallery;
