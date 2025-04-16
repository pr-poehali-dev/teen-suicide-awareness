
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface PreventionCardProps {
  title: string;
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
  children: ReactNode;
}

const PreventionCard = ({
  title,
  icon,
  iconBgColor,
  iconColor,
  children,
}: PreventionCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className={`${iconBgColor} p-3 rounded-full mr-3`}>
          <div className={`h-6 w-6 ${iconColor}`}>
            {icon}
          </div>
        </div>
        <h3 className="font-bold">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default PreventionCard;
