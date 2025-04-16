
import InfoSection from "@/components/InfoSection";
import SupportOrganizationCard from "./SupportOrganizationCard";

const SupportOrganizationsSection = () => {
  const organizations = [
    {
      title: "Фонд \"Твоя территория\"",
      description:
        "Онлайн-служба психологической помощи подросткам и молодежи. Бесплатные анонимные консультации психологов через чат.",
      buttons: [
        {
          text: "Онлайн-консультация",
          url: "https://www.твоятерритория.онлайн",
          variant: "default",
        },
        {
          text: "Карта помощи",
          url: "https://www.твоятерритория.онлайн/map/",
          variant: "outline",
        },
      ],
    },
    {
      title: "Центр экстренной психологической помощи МЧС России",
      description:
        "Профессиональная помощь при психологических травмах и кризисных ситуациях.",
      buttons: [
        {
          text: "Подробнее",
          url: "https://www.mchs.gov.ru/deyatelnost/psihologicheskaya-sluzhba",
          variant: "default",
        },
      ],
    },
    {
      title: "Ассоциация детских психиатров и психологов",
      description:
        "Информация для родителей о психическом здоровье детей и подростков, возможность найти квалифицированного специалиста.",
      buttons: [
        {
          text: "Найти специалиста",
          url: "https://acpp.ru/",
          variant: "default",
        },
      ],
    },
  ];

  return (
    <InfoSection
      title="Организации помощи"
      description="Где можно получить профессиональную поддержку"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {organizations.map((org, index) => (
          <SupportOrganizationCard key={index} {...org} />
        ))}
      </div>
    </InfoSection>
  );
};

export default SupportOrganizationsSection;
