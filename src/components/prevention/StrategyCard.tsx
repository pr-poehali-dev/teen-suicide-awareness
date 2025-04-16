
import { ReactNode } from "react";

interface StrategyCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconColor: string;
  strategies: string[];
}

const StrategyCard = ({
  title,
  description,
  icon,
  iconColor,
  strategies,
}: StrategyCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
      <div className="flex items-center mb-4">
        <div className={`h-6 w-6 ${iconColor} mr-3`}>{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mb-4">
        {description}
      </p>
      <ul className="space-y-2 pl-5 list-disc">
        {strategies.map((strategy, index) => (
          <li key={index}>{strategy}</li>
        ))}
      </ul>
    </div>
  );
};

export default StrategyCard;
