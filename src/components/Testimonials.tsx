
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ирина Смирнова',
    image: null,
    initials: 'ИС',
    rating: 5,
    content: 'Благодаря "Регион Квартир" нашла идеальную квартиру в новостройке. Очень довольна сервисом и скоростью оформления всех документов. В следующий раз обращусь только к ним!',
    date: '15 апреля 2024'
  },
  {
    id: 2,
    name: 'Алексей Петров',
    image: null,
    initials: 'АП',
    rating: 5,
    content: 'Продал квартиру через это агентство в короткие сроки и по хорошей цене. Профессиональный подход, грамотная оценка и никаких скрытых комиссий. Рекомендую!',
    date: '3 марта 2024'
  },
  {
    id: 3,
    name: 'Елена Иванова',
    image: null,
    initials: 'ЕИ',
    rating: 4,
    content: 'Обратилась за помощью в поиске жилья для аренды. Менеджеры быстро подобрали несколько вариантов с учетом всех моих пожеланий. Квартирой довольна, сотрудничеством тоже.',
    date: '20 февраля 2024'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Отзывы наших клиентов</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Мы гордимся доверием наших клиентов и стремимся превзойти их ожидания на каждом этапе сотрудничества
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    image: string | null;
    initials: string;
    rating: number;
    content: string;
    date: string;
  }
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i}
              size={16}
              className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`}
            />
          ))}
        </div>
        
        <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
      </CardContent>
      
      <CardFooter className="pt-2 border-t">
        <div className="flex items-center">
          <Avatar className="mr-3 h-10 w-10">
            {testimonial.image ? (
              <img src={testimonial.image} alt={testimonial.name} />
            ) : (
              <AvatarFallback className="bg-primary text-white">
                {testimonial.initials}
              </AvatarFallback>
            )}
          </Avatar>
          
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Testimonials;
