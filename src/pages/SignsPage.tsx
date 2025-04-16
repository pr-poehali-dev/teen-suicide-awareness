
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import { AlertTriangle, Bookmark, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const SignsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Распознать признаки"
        subtitle="Раннее выявление тревожных сигналов может спасти жизнь. Важно знать, на что обратить внимание"
      />

      <InfoSection
        title="Вербальные признаки"
        description="Что говорит подросток"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-100 dark:border-red-800">
              <h3 className="flex items-center text-lg font-medium mb-4">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Прямые признаки
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"Я не хочу больше жить"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"Лучше бы я никогда не родился"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"Я никому не нужен"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"Скоро все это закончится"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"Я не вижу выхода"</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
              <h3 className="flex items-center text-lg font-medium mb-4">
                <Bookmark className="h-5 w-5 text-orange-500 mr-2" />
                Косвенные признаки
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>"Я всем только мешаю"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>"Вам будет лучше без меня"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>"Мне ничто не помогает"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>"Я устал бороться"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>"Ничего уже не важно"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </InfoSection>

      <InfoSection
        title="Поведенческие признаки"
        description="Изменения в поведении, которые должны насторожить"
        className="bg-blue-50 dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Социальные изменения</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Изоляция от друзей и семьи</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Потеря интереса к ранее любимым занятиям и хобби</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Пропуски школы или резкое снижение успеваемости</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Эмоциональные признаки</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Постоянная грусть, раздражительность, агрессия</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Резкие перепады настроения</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Безнадежность и чувство бесполезности</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Практические действия</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Раздача личных вещей</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Приведение дел в порядок, прощание</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Внезапный интерес к теме смерти</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Поиск способов самоповреждения или суицида</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </InfoSection>

      <InfoSection
        title="Физические признаки"
        description="Изменения в физическом состоянии"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <ul className="space-y-4">
              <li>
                <div className="font-medium mb-1">Изменения в режиме сна</div>
                <p className="text-gray-600 dark:text-gray-400">Бессонница или, наоборот, сонливость, частые кошмары</p>
                <Separator className="mt-2" />
              </li>
              <li>
                <div className="font-medium mb-1">Нарушения аппетита</div>
                <p className="text-gray-600 dark:text-gray-400">Потеря или резкое повышение аппетита, заметные изменения веса</p>
                <Separator className="mt-2" />
              </li>
              <li>
                <div className="font-medium mb-1">Следы самоповреждения</div>
                <p className="text-gray-600 dark:text-gray-400">Порезы, ожоги и другие повреждения, особенно на запястьях, предплечьях</p>
                <Separator className="mt-2" />
              </li>
              <li>
                <div className="font-medium mb-1">Постоянная усталость</div>
                <p className="text-gray-600 dark:text-gray-400">Жалобы на хроническую усталость, отсутствие энергии</p>
                <Separator className="mt-2" />
              </li>
              <li>
                <div className="font-medium mb-1">Пренебрежение внешним видом</div>
                <p className="text-gray-600 dark:text-gray-400">Резкое снижение интереса к своему внешнему виду, гигиене</p>
              </li>
            </ul>
          </div>
        </div>
      </InfoSection>
    </Layout>
  );
};

export default SignsPage;
