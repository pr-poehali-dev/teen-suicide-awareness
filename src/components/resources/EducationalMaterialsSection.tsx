
import InfoSection from "@/components/InfoSection";
import ResourceLinkList from "./ResourceLinkList";
import TrainingProgramCard from "./TrainingProgramCard";
import { FileText, GraduationCap, Video } from "lucide-react";

const EducationalMaterialsSection = () => {
  const articles = [
    {
      title: "Как распознать депрессию у подростка",
      url: "#",
    },
    {
      title: "Что делать, если подросток говорит о самоубийстве",
      url: "#",
    },
    {
      title: "Пособие для родителей: как говорить с ребенком о сложных чувствах",
      url: "#",
    },
  ];

  const videos = [
    {
      title: "Вебинар \"Безопасная среда для подростка\"",
      url: "#",
    },
    {
      title: "Лекция \"Психическое здоровье подростков: мифы и реальность\"",
      url: "#",
    },
    {
      title: "Серия видео \"Как справиться с кризисом\"",
      url: "#",
    },
  ];

  const trainingPrograms = [
    {
      title: "Программа \"Распознавание рисков суицидального поведения\"",
      description:
        "Обучающий курс для педагогов и психологов по выявлению признаков суицидального риска.",
    },
    {
      title: "Тренинг \"Разговор с подростком\"",
      description:
        "Практический курс для родителей, направленный на улучшение коммуникации с подростками.",
    },
  ];

  return (
    <InfoSection
      title="Образовательные материалы"
      description="Полезные статьи, книги и видео"
      className="bg-blue-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <ResourceLinkList
          title="Статьи и брошюры"
          icon={<FileText className="h-6 w-6" />}
          links={articles}
        />
        <ResourceLinkList
          title="Видеоматериалы"
          icon={<Video className="h-6 w-6" />}
          links={videos}
        />
      </div>

      <div className="mt-6 max-w-4xl mx-auto">
        <TrainingProgramCard
          title="Программы обучения для специалистов и родителей"
          icon={<GraduationCap className="h-6 w-6" />}
          programs={trainingPrograms}
          actionLink={{
            text: "Записаться на обучение",
            url: "#",
          }}
        />
      </div>
    </InfoSection>
  );
};

export default EducationalMaterialsSection;
