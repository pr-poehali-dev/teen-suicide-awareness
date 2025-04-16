
import InfoSection from "@/components/InfoSection";
import StrategyCard from "./StrategyCard";
import { Shield } from "lucide-react";

const StrategiesSection = () => {
  const universalStrategies = [
    "Образовательные программы о психическом здоровье",
    "Формирование жизненных навыков и стрессоустойчивости",
    "Создание поддерживающей среды в школах",
    "Ограничение доступа к средствам самоповреждения",
    "Повышение осведомленности общества",
  ];

  const targetedStrategies = [
    "Раннее выявление и лечение психических расстройств",
    "Индивидуальная или групповая психотерапия",
    "Семейная терапия и поддержка родителей",
    "Кризисное консультирование и горячие линии",
    "Последующее наблюдение после попытки суицида",
    "Координация медицинских и социальных служб",
  ];

  return (
    <InfoSection
      title="Стратегии профилактики"
      description="Эффективные подходы к предотвращению суицидального поведения"
    >
      <div className="max-w-4xl mx-auto">
        <StrategyCard
          title="Универсальные стратегии"
          description="Направлены на всех подростков, независимо от уровня риска."
          icon={<Shield />}
          iconColor="text-primary"
          strategies={universalStrategies}
        />
        <StrategyCard
          title="Целевые стратегии"
          description="Для подростков с повышенным риском суицидального поведения."
          icon={<Shield />}
          iconColor="text-amber-500"
          strategies={targetedStrategies}
        />
      </div>
    </InfoSection>
  );
};

export default StrategiesSection;
