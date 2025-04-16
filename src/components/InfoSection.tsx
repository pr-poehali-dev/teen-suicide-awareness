
import { ReactNode } from "react";

interface InfoSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

const InfoSection = ({ title, description, children, className = "" }: InfoSectionProps) => {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          {description && <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default InfoSection;
