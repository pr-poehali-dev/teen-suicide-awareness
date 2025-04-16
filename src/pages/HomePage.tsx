
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import HelpCard from "@/components/HelpCard";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Heart, HelpCircle, LightbulbIcon, LifeBuoy, Phone } from "lucide-react";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection
        title="Вместе мы сильнее"
        subtitle="Информационный портал о профилактике подросткового суицида, признаках, рисках и доступной помощи"
        primaryButtonText="Получить помощь"
        primaryButtonLink="/resources"
        secondaryButtonText="Узнать о признаках"
        secondaryButtonLink="/signs"
      />

      <InfoSection 
        title="Что важно знать" 
        description="Подростковый суицид — это предотвратимая трагедия. Знание фактов может спасти жизнь."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HelpCard
            title="Факты и мифы"
            icon={<LightbulbIcon />}
            description="Развенчание распространенных заблуждений"
          >
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p><strong>Миф:</strong> Те, кто говорят о суициде, никогда его не совершают.</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p><strong>Факт:</strong> Большинство людей, совершивших суицид, ранее открыто говорили о своих намерениях.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p><strong>Миф:</strong> Подростки из благополучных семей не думают о суициде.</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p><strong>Факт:</strong> Суицидальные мысли могут возникать у подростков независимо от социального статуса семьи.</p>
              </li>
            </ul>
          </HelpCard>

          <HelpCard
            title="Причины и факторы риска"
            icon={<AlertTriangle />}
            description="Что может повлиять на психологическое состояние"
          >
            <ul className="space-y-2">
              <li>Депрессия и другие психические расстройства</li>
              <li>Травматические жизненные события</li>
              <li>Буллинг и социальная изоляция</li>
              <li>Проблемы в семейных отношениях</li>
              <li>Потеря близкого человека</li>
              <li>Давление из-за учебы или завышенные ожидания</li>
            </ul>
          </HelpCard>

          <HelpCard
            title="Как помочь"
            icon={<Heart />}
            description="Первые шаги для поддержки близких"
          >
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Внимательно выслушать без осуждения</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Показать заботу и понимание</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Не оставлять одного в кризисной ситуации</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Обратиться за профессиональной помощью</span>
              </li>
            </ul>
          </HelpCard>
        </div>
      </InfoSection>

      <InfoSection
        title="Экстренная помощь"
        description="Круглосуточные линии поддержки для детей, подростков и их родителей"
        className="bg-blue-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Детский телефон доверия</h3>
                  <p className="text-2xl font-bold text-blue-600">8-800-2000-122</p>
                  <p className="text-sm text-gray-500">Анонимно и бесплатно для всей России</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                  <LifeBuoy className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Линия помощи "Дети онлайн"</h3>
                  <p className="text-2xl font-bold text-indigo-600">8-800-250-00-15</p>
                  <p className="text-sm text-gray-500">Психологическая помощь по всем проблемам</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </InfoSection>

      <InfoSection
        title="Часто задаваемые вопросы"
        description="Ответы на распространенные вопросы о подростковом суициде"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="border rounded-lg p-4 hover:border-primary transition-colors">
              <h3 className="flex items-center font-medium mb-2">
                <HelpCircle className="h-5 w-5 text-primary mr-2" />
                Как понять, что подросток находится в группе риска?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Обратите внимание на изменения в поведении: резкая смена настроения, изоляция от друзей и семьи, 
                потеря интереса к ранее любимым занятиям, разговоры о смерти, раздача личных вещей, 
                изменения в питании и сне.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:border-primary transition-colors">
              <h3 className="flex items-center font-medium mb-2">
                <HelpCircle className="h-5 w-5 text-primary mr-2" />
                Можно ли спрашивать подростка напрямую о суицидальных мыслях?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Да, прямой и спокойный разговор о суицидальных мыслях не повышает риск их возникновения. 
                Напротив, это показывает заботу и готовность помочь, что может быть очень важно для подростка.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:border-primary transition-colors">
              <h3 className="flex items-center font-medium mb-2">
                <HelpCircle className="h-5 w-5 text-primary mr-2" />
                Куда обращаться, если подросток говорит о суициде?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Необходимо сразу обратиться к психологу или психиатру. В экстренных случаях звоните на 
                детский телефон доверия 8-800-2000-122. При непосредственной угрозе жизни звоните 112.
              </p>
            </div>
          </div>
        </div>
      </InfoSection>
    </Layout>
  );
};

export default HomePage;
