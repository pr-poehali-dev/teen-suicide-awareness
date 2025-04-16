
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmergencyHelpCardProps {
  title: string;
  phoneNumber: string;
  description: string;
  website: string;
  icon: ReactNode;
  colorClass: {
    border: string;
    background: string;
    text: string;
    hoverBg: string;
  };
}

const EmergencyHelpCard = ({
  title,
  phoneNumber,
  description,
  website,
  icon,
  colorClass,
}: EmergencyHelpCardProps) => {
  return (
    <Card className={colorClass.border}>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className={`${colorClass.background} p-3 rounded-full flex-shrink-0`}>
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className={`text-2xl font-bold ${colorClass.text} mb-2`}>{phoneNumber}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {description}
            </p>
            <Button 
              variant="outline" 
              className={`${colorClass.text} border-${colorClass.text} hover:${colorClass.hoverBg}`} 
              asChild
            >
              <a href={website} target="_blank" rel="noopener noreferrer">
                Перейти на сайт
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyHelpCard;
