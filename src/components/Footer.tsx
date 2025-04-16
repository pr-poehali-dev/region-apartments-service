
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/logo-b.svg" alt="Регион Квартир" className="h-10 invert mb-2" />
            <p className="text-sm text-gray-400">
              ПЦ «Регион Квартир» — ваш надёжный партнёр в сфере недвижимости
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 mb-2">
              © 2024 ПЦ «Регион Квартир». Все права защищены.
            </p>
            <p className="text-sm text-gray-400">
              г. Губкин, Белгородская область
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
