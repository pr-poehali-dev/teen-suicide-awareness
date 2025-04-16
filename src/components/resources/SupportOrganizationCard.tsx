
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ButtonLink {
  text: string;
  url: string;
  variant?: "default" | "outline";
}

interface SupportOrganizationCardProps {
  title: string;
  description: string;
  buttons: ButtonLink[];
  icon?: ReactNode;
}

const SupportOrganizationCard = ({
  title,
  description,
  buttons,
  icon,
}: SupportOrganizationCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <div className="flex-grow">
            <h3 className="font-bold text-lg mb-4">{title}</h3>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {buttons.map((button, index) => (
            <Button 
              key={index} 
              variant={button.variant || "default"} 
              size="sm" 
              asChild
            >
              <a href={button.url} target="_blank" rel="noopener noreferrer">
                {button.text}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SupportOrganizationCard;
