
import InfoSection from "@/components/InfoSection";
import PreventionCard from "./PreventionCard";
import { Brain, Heart, Users } from "lucide-react";

interface FactorGroup {
  title: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  factors: string[];
}

const ProtectiveFactorsSection = () => {
  const factorGroups: FactorGroup[] = [
    {
      title: "Эмоциональные факторы",
      icon: <Heart />,
      iconBgColor: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600 dark:text-green-400",
      factors: [
        "Чувство собственного достоинства",
        "Эмоциональная устойчивость",
        "Способность справляться со стрессом",
        "Оптимизм и позитивный взгляд на будущее"
      ],
    },
    {
      title: "Социальные факторы",
      icon: <Users />,
      iconBgColor: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400",
      factors: [
        "Надежная поддержка семьи",
        "Крепкие дружеские связи",
        "Принадлежность к группе/сообществу",
        "Доверительные отношения со взрослыми",
        "Чувство социальной интеграции"
      ],
    },
    {
      title: "Когнитивные факторы",
      icon: <Brain />,
      iconBgColor: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600 dark:text-purple-400",
      factors: [
        "Навыки решения проблем",
        "Умение искать помощь",
        "Гибкое мышление",
        "Наличие жизненных целей",
        "Религиозные или культурные убеждения"
      ],
    },
  ];

  return (
    <InfoSection
      title="Факторы защиты"
      description="Что снижает риск суицидального поведения"
      className="bg-blue-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {factorGroups.map((group, index) => (
          <PreventionCard
            key={index}
            title={group.title}
            icon={group.icon}
            iconBgColor={group.iconBgColor}
            iconColor={group.iconColor}
          >
            <ul className="space-y-2">
              {group.factors.map((factor, idx) => (
                <li key={idx}>{factor}</li>
              ))}
            </ul>
          </PreventionCard>
        ))}
      </div>
    </InfoSection>
  );
};

export default ProtectiveFactorsSection;
