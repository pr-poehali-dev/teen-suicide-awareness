
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import HelpCard from "@/components/HelpCard";
import { Shield, Users, Brain, Heart, School, Home } from "lucide-react";

const PreventionPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Профилактика подросткового суицида"
        subtitle="Своевременные меры поддержки и профилактики могут предотвратить трагедию"
      />

      <InfoSection
        title="Основные направления профилактики"
        description="Комплексный подход к предотвращению суицидального поведения"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HelpCard
            title="Для родителей"
            icon={<Home />}
            description="Как поддержать ребенка в семье"
          >
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Поддерживайте открытое общение с ребенком</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Внимательно слушайте, не осуждая</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Проводите время вместе, участвуйте в жизни подростка</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Уважайте личные границы и потребность в приватности</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Учите здоровым способам выражения эмоций</span>
              </li>
            </ul>
          </HelpCard>

          <HelpCard
            title="Для педагогов"
            icon={<School />}
            description="Меры профилактики в образовательной среде"
          >
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Создавайте безопасную и поддерживающую среду</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Проводите профилактические программы и тренинги</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Обучите персонал распознавать признаки суицидального поведения</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Сотрудничайте с психологической службой и родителями</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Предотвращайте буллинг и травлю</span>
              </li>
            </ul>
          </HelpCard>

          <HelpCard
            title="Для сверстников"
            icon={<Users />}
            description="Как друзья могут помочь"
          >
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Будьте внимательны к изменениям в поведении друзей</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Не храните в секрете информацию о суицидальных мыслях друга</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Сообщите взрослым (родителям, учителям, психологу)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Поддерживайте контакт, покажите, что вы рядом</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Не оставляйте друга в одиночестве, если он в кризисе</span>
              </li>
            </ul>
          </HelpCard>
        </div>
      </InfoSection>

      <InfoSection
        title="Факторы защиты"
        description="Что снижает риск суицидального поведения"
        className="bg-blue-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-3">
                <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-bold">Эмоциональные факторы</h3>
            </div>
            <ul className="space-y-2">
              <li>Чувство собственного достоинства</li>
              <li>Эмоциональная устойчивость</li>
              <li>Способность справляться со стрессом</li>
              <li>Оптимизм и позитивный взгляд на будущее</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-3">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold">Социальные факторы</h3>
            </div>
            <ul className="space-y-2">
              <li>Надежная поддержка семьи</li>
              <li>Крепкие дружеские связи</li>
              <li>Принадлежность к группе/сообществу</li>
              <li>Доверительные отношения со взрослыми</li>
              <li>Чувство социальной интеграции</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-3">
                <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-bold">Когнитивные факторы</h3>
            </div>
            <ul className="space-y-2">
              <li>Навыки решения проблем</li>
              <li>Умение искать помощь</li>
              <li>Гибкое мышление</li>
              <li>Наличие жизненных целей</li>
              <li>Религиозные или культурные убеждения</li>
            </ul>
          </div>
        </div>
      </InfoSection>

      <InfoSection
        title="Стратегии профилактики"
        description="Эффективные подходы к предотвращению суицидального поведения"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Универсальные стратегии</h3>
            </div>
            <p className="mb-4">
              Направлены на всех подростков, независимо от уровня риска.
            </p>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Образовательные программы о психическом здоровье</li>
              <li>Формирование жизненных навыков и стрессоустойчивости</li>
              <li>Создание поддерживающей среды в школах</li>
              <li>Ограничение доступа к средствам самоповреждения</li>
              <li>Повышение осведомленности общества</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-amber-500 mr-3" />
              <h3 className="text-xl font-semibold">Целевые стратегии</h3>
            </div>
            <p className="mb-4">
              Для подростков с повышенным риском суицидального поведения.
            </p>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Раннее выявление и лечение психических расстройств</li>
              <li>Индивидуальная или групповая психотерапия</li>
              <li>Семейная терапия и поддержка родителей</li>
              <li>Кризисное консультирование и горячие линии</li>
              <li>Последующее наблюдение после попытки суицида</li>
              <li>Координация медицинских и социальных служб</li>
            </ul>
          </div>
        </div>
      </InfoSection>
    </Layout>
  );
};

export default PreventionPage;
