
import InfoSection from "@/components/InfoSection";
import EmergencyHelpCard from "./EmergencyHelpCard";
import { Phone } from "lucide-react";

const EmergencyHelpSection = () => {
  const emergencyContacts = [
    {
      title: "Детский телефон доверия",
      phoneNumber: "8-800-2000-122",
      description:
        "Анонимно, бесплатно, круглосуточно. Психологическая помощь детям, подросткам и их родителям в трудной жизненной ситуации.",
      website: "https://telefon-doveria.ru/",
      icon: <Phone className="h-6 w-6 text-blue-600 dark:text-blue-300" />,
      colorClass: {
        border: "border-blue-200 dark:border-blue-800",
        background: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-600",
        hoverBg: "hover:bg-blue-50",
      },
    },
    {
      title: "Линия помощи \"Дети онлайн\"",
      phoneNumber: "8-800-250-00-15",
      description:
        "Консультации по проблемам безопасного использования интернета и мобильной связи, а также помощь в ситуациях кибербуллинга.",
      website: "https://detionline.com/",
      icon: <Phone className="h-6 w-6 text-purple-600 dark:text-purple-300" />,
      colorClass: {
        border: "border-purple-200 dark:border-purple-800",
        background: "bg-purple-100 dark:bg-purple-900",
        text: "text-purple-600",
        hoverBg: "hover:bg-purple-50",
      },
    },
  ];

  return (
    <InfoSection
      title="Экстренная помощь"
      description="Круглосуточные службы поддержки"
      className="bg-blue-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {emergencyContacts.map((contact, index) => (
          <EmergencyHelpCard key={index} {...contact} />
        ))}
      </div>
    </InfoSection>
  );
};

export default EmergencyHelpSection;
