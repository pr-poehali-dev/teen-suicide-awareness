
import { ExternalLink, Heart, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ЛинияПоддержки</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Информационный портал о профилактике подросткового суицида
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Экстренная помощь</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Детский телефон доверия: 8-800-2000-122</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Линия помощи "Дети онлайн": 8-800-250-00-15</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://telefon-doveria.ru/" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <span>Телефон доверия</span>
                </a>
              </li>
              <li>
                <a href="https://www.ya-roditel.ru/" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <span>Я-родитель</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center">
            Создано с заботой <Heart className="h-4 w-4 mx-2 text-red-500" /> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
