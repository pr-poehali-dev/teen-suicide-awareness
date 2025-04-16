
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary-foreground">ЛинияПоддержки</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link to="/" className="text-primary-foreground hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Главная
              </Link>
              <Link to="/signs" className="text-primary-foreground hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Признаки
              </Link>
              <Link to="/prevention" className="text-primary-foreground hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Профилактика
              </Link>
              <Link to="/resources" className="text-primary-foreground hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Ресурсы помощи
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="h-4 w-4 mr-2" />
              <span>8-800-2000-122</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
