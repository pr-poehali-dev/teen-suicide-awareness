
import InfoSection from "@/components/InfoSection";
import HelpCard from "@/components/HelpCard";
import { Home, School, Users } from "lucide-react";

interface PreventionItem {
  text: string;
  color: string;
}

interface DirectionCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: PreventionItem[];
}

const DirectionCard = ({ title, icon, description, items }: DirectionCardProps) => (
  <HelpCard
    title={title}
    icon={icon}
    description={description}
  >
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className={item.color + " mr-2"}>•</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  </HelpCard>
);

const DirectionsSection = () => {
  const parentDirections = [
    {
      text: "Поддерживайте открытое общение с ребенком",
      color: "text-green-500",
    },
    {
      text: "Внимательно слушайте, не осуждая",
      color: "text-green-500",
    },
    {
      text: "Проводите время вместе, участвуйте в жизни подростка",
      color: "text-green-500",
    },
    {
      text: "Уважайте личные границы и потребность в приватности",
      color: "text-green-500",
    },
    {
      text: "Учите здоровым способам выражения эмоций",
      color: "text-green-500",
    },
  ];

  const teacherDirections = [
    {
      text: "Создавайте безопасную и поддерживающую среду",
      color: "text-blue-500",
    },
    {
      text: "Проводите профилактические программы и тренинги",
      color: "text-blue-500",
    },
    {
      text: "Обучите персонал распознавать признаки суицидального поведения",
      color: "text-blue-500",
    },
    {
      text: "Сотрудничайте с психологической службой и родителями",
      color: "text-blue-500",
    },
    {
      text: "Предотвращайте буллинг и травлю",
      color: "text-blue-500",
    },
  ];

  const peerDirections = [
    {
      text: "Будьте внимательны к изменениям в поведении друзей",
      color: "text-purple-500",
    },
    {
      text: "Не храните в секрете информацию о суицидальных мыслях друга",
      color: "text-purple-500",
    },
    {
      text: "Сообщите взрослым (родителям, учителям, психологу)",
      color: "text-purple-500",
    },
    {
      text: "Поддерживайте контакт, покажите, что вы рядом",
      color: "text-purple-500",
    },
    {
      text: "Не оставляйте друга в одиночестве, если он в кризисе",
      color: "text-purple-500",
    },
  ];

  return (
    <InfoSection
      title="Основные направления профилактики"
      description="Комплексный подход к предотвращению суицидального поведения"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DirectionCard
          title="Для родителей"
          icon={<Home />}
          description="Как поддержать ребенка в семье"
          items={parentDirections}
        />
        <DirectionCard
          title="Для педагогов"
          icon={<School />}
          description="Меры профилактики в образовательной среде"
          items={teacherDirections}
        />
        <DirectionCard
          title="Для сверстников"
          icon={<Users />}
          description="Как друзья могут помочь"
          items={peerDirections}
        />
      </div>
    </InfoSection>
  );
};

export default DirectionsSection;
