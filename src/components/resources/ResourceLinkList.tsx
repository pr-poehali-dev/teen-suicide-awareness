
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ResourceLink {
  title: string;
  url: string;
}

interface ResourceLinkListProps {
  title: string;
  icon: ReactNode;
  links: ResourceLink[];
}

const ResourceLinkList = ({ title, icon, links }: ResourceLinkListProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start mb-4">
          <div className="text-blue-600 mr-3 flex-shrink-0 mt-1">{icon}</div>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <ul className="space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="text-blue-600 hover:underline flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ResourceLinkList;
