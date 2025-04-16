
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TrainingProgram {
  title: string;
  description: string;
}

interface TrainingProgramCardProps {
  title: string;
  icon: ReactNode;
  programs: TrainingProgram[];
  actionLink: {
    text: string;
    url: string;
  };
}

const TrainingProgramCard = ({
  title,
  icon,
  programs,
  actionLink,
}: TrainingProgramCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start mb-4">
          <div className="text-blue-600 mr-3 flex-shrink-0 mt-1">{icon}</div>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <div className="space-y-4">
          {programs.map((program, index) => (
            <div key={index}>
              <h4 className="font-medium mb-1">{program.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {program.description}
              </p>
            </div>
          ))}
          <div className="mt-4">
            <Button asChild>
              <a href={actionLink.url} target="_blank" rel="noopener noreferrer">
                {actionLink.text}
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainingProgramCard;
