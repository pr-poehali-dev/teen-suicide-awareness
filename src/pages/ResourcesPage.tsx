
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText, GraduationCap, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResourcesPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Ресурсы помощи"
        subtitle="Полезные контакты, организации и материалы для получения помощи в кризисной ситуации"
      />

      <InfoSection
        title="Экстренная помощь"
        description="Круглосуточные службы поддержки"
        className="bg-blue-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Детский телефон доверия</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">8-800-2000-122</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Анонимно, бесплатно, круглосуточно. Психологическая помощь детям, 
                    подросткам и их родителям в трудной жизненной ситуации.
                  </p>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
                    <a href="https://telefon-doveria.ru/" target="_blank" rel="noopener noreferrer">
                      Перейти на сайт
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Линия помощи "Дети онлайн"</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-2">8-800-250-00-15</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Консультации по проблемам безопасного использования интернета и мобильной 
                    связи, а также помощь в ситуациях кибербуллинга.
                  </p>
                  <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50" asChild>
                    <a href="https://detionline.com/" target="_blank" rel="noopener noreferrer">
                      Перейти на сайт
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </InfoSection>

      <InfoSection
        title="Организации помощи"
        description="Где можно получить профессиональную поддержку"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-4">Фонд "Твоя территория"</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Онлайн-служба психологической помощи подросткам и молодежи. Бесплатные анонимные 
                консультации психологов через чат.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <a href="https://www.твоятерритория.онлайн" target="_blank" rel="noopener noreferrer">
                    Онлайн-консультация
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.твоятерритория.онлайн/map/" target="_blank" rel="noopener noreferrer">
                    Карта помощи
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-4">Центр экстренной психологической помощи МЧС России</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Профессиональная помощь при психологических травмах и кризисных ситуациях.
              </p>
              <Button asChild size="sm">
                <a href="https://www.mchs.gov.ru/deyatelnost/psihologicheskaya-sluzhba" target="_blank" rel="noopener noreferrer">
                  Подробнее
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-4">Ассоциация детских психиатров и психологов</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Информация для родителей о психическом здоровье детей и подростков, 
                возможность найти квалифицированного специалиста.
              </p>
              <Button asChild size="sm">
                <a href="https://acpp.ru/" target="_blank" rel="noopener noreferrer">
                  Найти специалиста
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </InfoSection>

      <InfoSection
        title="Образовательные материалы"
        description="Полезные статьи, книги и видео"
        className="bg-blue-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <FileText className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg">Статьи и брошюры</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Как распознать депрессию у подростка</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Что делать, если подросток говорит о самоубийстве</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Пособие для родителей: как говорить с ребенком о сложных чувствах</span>
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <Video className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg">Видеоматериалы</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Вебинар "Безопасная среда для подростка"</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Лекция "Психическое здоровье подростков: мифы и реальность"</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Серия видео "Как справиться с кризисом"</span>
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg">Программы обучения для специалистов и родителей</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Программа "Распознавание рисков суицидального поведения"</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Обучающий курс для педагогов и психологов по выявлению признаков суицидального риска.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Тренинг "Разговор с подростком"</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Практический курс для родителей, направленный на улучшение коммуникации с подростками.
                  </p>
                </div>
                <div className="mt-4">
                  <Button asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Записаться на обучение
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </InfoSection>
    </Layout>
  );
};

export default ResourcesPage;
