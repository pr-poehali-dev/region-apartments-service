
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const phones = [
    '8-950-710-09-10',
    '8-952-424-27-35',
    '8-904-538-95-02',
    '8-950-756-92-65'
  ];

  return (
    <section className="py-16 bg-gray-100" id="contacts">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Свяжитесь с нами</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="mr-3 text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium">Телефоны:</p>
                  <div className="space-y-1">
                    {phones.map((phone, index) => (
                      <a 
                        key={index}
                        href={`tel:${phone.replace(/-/g, '')}`}
                        className="block text-primary hover:underline"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-3 text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium">Адрес:</p>
                  <p>г. Губкин, Белгородская область</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-3 text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium">Email:</p>
                  <a href="mailto:info@region-kvartir.ru" className="text-primary hover:underline">
                    info@region-kvartir.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">О компании</h3>
            <p className="mb-4">
              ПЦ «Регион Квартир» в Губкине — это команда профессионалов в сфере недвижимости. 
              Мы предлагаем широкий спектр услуг: продажа и аренда квартир, консультации 
              и оценка объектов.
            </p>
            <p>
              Наша миссия — помочь каждому клиенту найти идеальное жилье или выгодно 
              продать свою недвижимость. Мы ценим каждого клиента и стремимся обеспечить 
              высокий уровень сервиса.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
